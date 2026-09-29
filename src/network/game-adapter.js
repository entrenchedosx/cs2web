import { decodeState, encodeState } from './protocol.js';

const REMOTE_RENDER_DELAY = 100;
const MAX_EXTRAPOLATION = 120;

function finite(value, fallback = 0) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function distance3(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

function angleLerp(a, b, amount) {
  let delta = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  return a + delta * amount;
}

export class VeraGameAdapter {
  constructor() {
    this.game = null;
    this.active = false;
    this.role = '';
    this.slot = 0;
    this.remote = null;
    this.remoteTeam = '';
    this.remoteBuffer = [];
    this.remoteLastSequence = -1;
    this.remoteLastState = null;
    this.localSequence = 0;
    this.stateSequence = 0;
    this.tick = 0;
    this.suppressNetwork = false;
    this.originalSetup = null;
    this.originalFireBullet = null;
    this.originalRemote = null;
    this.onLocalShot = () => {};
    this.onStatus = () => {};
    this.frameHandle = 0;
    this.lastFrameAt = 0;
  }

  activate(role, slot) {
    this.game = window.game || null;
    this.active = true;
    this.role = role === 'guest' ? 'guest' : 'host';
    this.slot = slot === 1 ? 1 : 0;
    this.remoteBuffer.length = 0;
    this.remoteLastSequence = -1;
    this.ensureHooks();
    this.startFrameLoop();
  }

  ensureHooks() {
    const game = this.game || window.game;
    if (!game) return false;
    this.game = game;
    const manager = game.botMgr;
    if (manager && !manager.__veraNetworkSetup) {
      this.originalSetup = manager.setup;
      const adapter = this;
      manager.setup = function veraNetworkSetup() {
        const result = adapter.originalSetup.apply(this, arguments);
        if (adapter.active) adapter.claimRemoteSlot();
        return result;
      };
      manager.__veraNetworkSetup = true;
    }
    if (!game.__veraNetworkFireHook && typeof game.fireBullet === 'function') {
      this.originalFireBullet = game.fireBullet;
      const adapter = this;
      game.fireBullet = function veraNetworkFireBullet(shooter, x, y, z, dx, dy, dz, weapon) {
        const result = adapter.originalFireBullet.apply(this, arguments);
        if (adapter.active && !adapter.suppressNetwork && shooter === adapter.game.player && weapon) {
          adapter.onLocalShot({
            type: 'fire',
            eventId: `${adapter.slot}:${adapter.localSequence++}`,
            tick: adapter.tick,
            weapon: String(weapon.id || adapter.game.weapons.current || 'knife'),
            ox: finite(x), oy: finite(y), oz: finite(z),
            dx: finite(dx), dy: finite(dy), dz: finite(dz)
          });
        }
        return result;
      };
      game.__veraNetworkFireHook = true;
    }
    return true;
  }

  async startMatch({ map, mode, team }) {
    if (!this.active) throw new Error('Multiplayer adapter is not active.');
    this.ensureHooks();
    const game = this.game || window.game;
    if (!game || typeof game.startGame !== 'function' || typeof game.finishTeamSelect !== 'function') {
      throw new Error('The current game build does not expose its match entry points.');
    }
    this.game = game;
    await game.startGame(map, 1, 1, mode || 'defusal');
    this.ensureHooks();
    await game.finishTeamSelect(team || (this.slot === 0 ? 'CT' : 'T'));
    this.claimRemoteSlot();
    if (!this.remote) throw new Error('Could not create the remote player slot.');
    this.onStatus('match-ready');
  }

  selectedMatch() {
    const menu = document.querySelector('#menu');
    const value = selector => {
      const selected = menu && menu.querySelector(`${selector} .sel`);
      return selected && selected.dataset ? selected.dataset.v : '';
    };
    return {
      map: value('#opt-map') || 'oasis',
      mode: value('#opt-mode') || 'defusal'
    };
  }

  claimRemoteSlot() {
    const manager = this.game && this.game.botMgr;
    if (!manager) return null;
    const candidate = manager.bots && manager.bots.find(bot => !bot.__veraRemote);
    if (!candidate) return this.remote;
    if (this.remote === candidate) return candidate;
    if (this.remote) this.removeRemote();
    const original = {
      update: candidate.update,
      spawn: candidate.spawn,
      die: candidate.die,
      body: candidate._updateCS2Body
    };
    this.originalRemote = original;
    this.remote = candidate;
    this.remoteTeam = candidate.team === 'CT' ? 'CT' : 'T';
    candidate.__veraRemote = true;
    // Keep the engine's bot/entity damage path for this slot. Marking it as
    // `isPlayer` would make the existing kill handler drop the local player's
    // inventory when a remote client dies.
    candidate.__veraRemotePlayer = true;
    candidate.name = 'Opponent';
    const adapter = this;
    candidate.update = function veraRemoteUpdate(delta) { adapter.updateRemoteEntity(this, delta); };
    candidate.spawn = function veraRemoteSpawn() { return adapter.spawnRemoteEntity(this); };
    candidate.__veraNetworkOriginal = original;
    return candidate;
  }

  spawnRemoteEntity(remote) {
    const originalSpawn = this.originalRemote && this.originalRemote.spawn;
    if (originalSpawn) {
      try { originalSpawn.call(remote); } catch (error) {}
    }
    remote.__veraLastAlive = true;
    if (this.remoteLastState) this.applyRemoteState(this.remoteLastState, true);
    else this.placeRemoteAtFallback(remote);
    return remote;
  }

  placeRemoteAtFallback(remote) {
    const game = this.game;
    const spawns = game && game.map && (this.remoteTeam === 'CT' ? game.map.spawnsCT : game.map.spawnsT);
    const spawn = spawns && spawns[0];
    if (!spawn) return;
    remote.x = finite(spawn.x); remote.y = finite(spawn.y) + 0.05; remote.z = finite(spawn.z);
    remote.yaw = finite(spawn.yaw);
    remote._visY = remote.y;
    remote.health = 100; remote.alive = true;
  }

  updateRemoteEntity(remote, delta) {
    const game = this.game;
    const dt = Math.max(0, Math.min(0.1, finite(delta, 0.033)));
    if (!game || !remote) return;
    const sampled = this.sampleRemote(performance.now());
    if (sampled) this.applyRemoteState(sampled, false);

    if (!remote.alive) {
      remote.deathAnimT = Math.max(0, finite(remote.deathAnimT) - dt);
      if (remote.cs2Agent && remote.cs2Agent.root) remote.cs2Agent.root.visible = remote.deathAnimT > 0;
      if (game.respawnAllowed && game.roundActive) {
        remote.respawnT = finite(remote.respawnT) - dt;
        if (remote.respawnT <= 0) this.spawnRemoteEntity(remote);
      }
      return;
    }

    if (remote.cs2Agent && this.originalRemote && this.originalRemote.body) {
      try { this.originalRemote.body.call(remote, dt, game); } catch (error) {}
    }
    if (remote.cs2Agent && remote.cs2Agent.root) remote.cs2Agent.root.visible = true;
    if (remote.__veraFiringT > 0) {
      remote.__veraFiringT -= dt;
      if (remote.__veraFiringT <= 0 && remote.cs2Agent && remote.cs2Agent.play) {
        try { remote.cs2Agent.play('idle', { fade: 0.08 }); } catch (error) {}
      }
    }
  }

  startFrameLoop() {
    if (this.frameHandle) return;
    const frame = now => {
      this.frameHandle = requestAnimationFrame(frame);
      if (!this.active || !this.remote) return;
      this.ensureHooks();
      const state = this.sampleRemote(now);
      if (!state) return;
      this.applyRemoteState(state, false);
      this.lastFrameAt = now;
    };
    this.frameHandle = requestAnimationFrame(frame);
  }

  stopFrameLoop() {
    if (this.frameHandle) cancelAnimationFrame(this.frameHandle);
    this.frameHandle = 0;
  }

  readLocalState() {
    const game = this.game;
    const player = game && game.player;
    if (!game || !player) return null;
    const weapon = game.weapons && game.weapons.current || 'knife';
    let ammo = 0;
    try { ammo = game.weapons.state(weapon).ammo; } catch (error) {}
    return {
      slot: this.slot,
      sequence: this.localSequence,
      tick: this.tick,
      x: player.x, y: player.y, z: player.z,
      vx: player.vx, vy: player.vy, vz: player.vz,
      yaw: player.yaw, pitch: player.pitch,
      weapon, ammo, health: player.health, armor: player.armor,
      alive: player.alive,
      crouching: player.crouching,
      onGround: player.onGround,
      walking: player.walking,
      reloading: !!(game.weapons && game.weapons.reloading),
      scoped: !!(game.weapons && game.weapons.scopeLevel),
      firing: !!(game.weapons && game.time - game.weapons.lastShotT < 0.12)
    };
  }

  encodeLocalState() {
    this.tick = (this.tick + 1) >>> 0;
    const state = this.readLocalState();
    if (state) state.sequence = (this.stateSequence = ((this.stateSequence || 0) + 1) >>> 0);
    return state ? encodeState(state) : null;
  }

  encodeRemoteState() {
    const remote = this.remote;
    if (!remote) return null;
    return encodeState({
      slot: this.slot === 0 ? 1 : 0,
      sequence: this.stateSequence || 0,
      tick: this.tick,
      x: remote.x, y: remote.y, z: remote.z,
      vx: remote.vx, vy: remote.vy, vz: remote.vz,
      yaw: remote.yaw, pitch: remote._lookPitch || 0,
      weapon: remote.weapon, ammo: remote.ammo,
      health: remote.health, armor: remote.armor, alive: remote.alive,
      crouching: !!remote.crouchT, onGround: remote.onGround,
      walking: remote.walking, firing: remote.__veraFiringT > 0
    });
  }

  receiveState(packet) {
    const state = decodeState(packet);
    if (!state || !this.active || state.slot === this.slot) {
      if (state && state.slot === this.slot && this.role === 'guest') this.applyAuthoritativeLocal(state);
      return;
    }
    if (state.sequence <= this.remoteLastSequence && this.remoteLastSequence - state.sequence < 0x7fffffff) return;
    this.remoteLastSequence = state.sequence;
    const now = performance.now();
    this.remoteBuffer.push({ at: now, state });
    while (this.remoteBuffer.length > 12) this.remoteBuffer.shift();
    this.remoteLastState = state;
  }

  sampleRemote(now) {
    if (!this.remoteBuffer.length) return null;
    const target = now - REMOTE_RENDER_DELAY;
    const first = this.remoteBuffer[0];
    const last = this.remoteBuffer[this.remoteBuffer.length - 1];
    if (target <= first.at) return first.state;
    for (let i = 1; i < this.remoteBuffer.length; i++) {
      const next = this.remoteBuffer[i];
      const prev = this.remoteBuffer[i - 1];
      if (target <= next.at) {
        const amount = Math.min(1, Math.max(0, (target - prev.at) / Math.max(1, next.at - prev.at)));
        return this.interpolateState(prev.state, next.state, amount);
      }
    }
    const extrapolation = Math.min(MAX_EXTRAPOLATION, Math.max(0, target - last.at)) / 1000;
    return { ...last.state, x: last.state.x + last.state.vx * extrapolation, y: last.state.y + last.state.vy * extrapolation, z: last.state.z + last.state.vz * extrapolation };
  }

  interpolateState(a, b, amount) {
    const lerp = (x, y) => x + (y - x) * amount;
    return {
      ...b,
      x: lerp(a.x, b.x), y: lerp(a.y, b.y), z: lerp(a.z, b.z),
      vx: lerp(a.vx, b.vx), vy: lerp(a.vy, b.vy), vz: lerp(a.vz, b.vz),
      yaw: angleLerp(a.yaw, b.yaw, amount), pitch: lerp(a.pitch, b.pitch)
    };
  }

  applyRemoteState(state, immediate = false) {
    const remote = this.remote;
    if (!remote || !state) return;
    const previous = { x: remote.x, y: remote.y, z: remote.z };
    const distance = distance3(previous, state);
    if (!immediate && distance > 12) return;
    remote.x = state.x; remote.y = state.y; remote.z = state.z;
    remote._visY = state.y;
    remote.vx = state.vx; remote.vy = state.vy; remote.vz = state.vz;
    remote.yaw = state.yaw; remote._lookPitch = state.pitch;
    remote.onGround = state.onGround;
    remote.walking = state.walking;
    remote.crouchT = state.crouching ? 0.2 : 0;
    remote.weapon = state.weapon;
    remote.ammo = state.ammo;
    remote.__veraNetworkState = state;

    // The host owns remote health/alive state. Guests receive it from the host.
    if (this.role !== 'host') {
      const wasAlive = remote.alive;
      remote.health = state.health;
      remote.alive = state.alive;
      if (wasAlive && !state.alive && remote.cs2Agent && remote.cs2Agent.die) {
        try { remote.cs2Agent.die('chest', false); } catch (error) {}
      }
    }
  }

  applyAuthoritativeLocal(state) {
    const game = this.game;
    const player = game && game.player;
    if (!player || !state) return;
    if (!state.alive && player.alive && typeof game.killEntity === 'function') {
      try { game.killEntity(player, null, null, true); } catch (error) { player.alive = false; }
    } else if (state.alive && !player.alive && typeof game.respawnPlayer === 'function') {
      try { game.respawnPlayer(); } catch (error) {}
    }
    const correction = { x: state.x, y: state.y, z: state.z };
    if (distance3(player, correction) > 2) {
      player.x = state.x; player.y = state.y; player.z = state.z;
    } else {
      player.x += (state.x - player.x) * 0.18;
      player.y += (state.y - player.y) * 0.18;
      player.z += (state.z - player.z) * 0.18;
    }
    player.health = state.health;
    player.armor = state.armor;
    player.alive = state.alive;
  }

  weaponDefinition(id) {
    const game = this.game;
    if (!game || !game.weapons || typeof game.weapons.def !== 'function') return null;
    const previous = game.weapons.current;
    try {
      game.weapons.current = id;
      return game.weapons.def();
    } catch (error) {
      return null;
    } finally {
      game.weapons.current = previous;
    }
  }

  simulateRemoteShot(event) {
    const game = this.game;
    const remote = this.remote;
    const weapon = this.weaponDefinition(event.weapon);
    if (!game || !remote || !weapon) return;
    const ox = finite(event.ox), oy = finite(event.oy), oz = finite(event.oz);
    const dx = finite(event.dx), dy = finite(event.dy), dz = finite(event.dz);
    const length = Math.hypot(dx, dy, dz);
    if (!Number.isFinite(length) || length < 0.5 || length > 1.5) return;
    remote.__veraFiringT = 0.18;
    this.suppressNetwork = true;
    try { game.fireBullet(remote, ox, oy, oz, dx / length, dy / length, dz / length, weapon); } catch (error) {}
    this.suppressNetwork = false;
    try { game.audio && game.audio.play && game.audio.play(weapon.sound, { pos: remote }); } catch (error) {}
  }

  removeRemote() {
    const remote = this.remote;
    const manager = this.game && this.game.botMgr;
    if (!remote) return;
    try { remote.cs2Agent && remote.cs2Agent.root && this.game.scene.remove(remote.cs2Agent.root); } catch (error) {}
    try { remote.shadow && this.game.scene.remove(remote.shadow); } catch (error) {}
    if (manager && Array.isArray(manager.bots)) {
      const index = manager.bots.indexOf(remote);
      if (index >= 0) manager.bots.splice(index, 1);
    }
    this.remote = null;
    this.remoteBuffer.length = 0;
    this.remoteLastState = null;
  }

  deactivate() {
    this.active = false;
    this.removeRemote();
    const manager = this.game && this.game.botMgr;
    if (manager && manager.__veraNetworkSetup && this.originalSetup) {
      manager.setup = this.originalSetup;
      delete manager.__veraNetworkSetup;
    }
    if (this.game && this.game.__veraNetworkFireHook && this.originalFireBullet) {
      this.game.fireBullet = this.originalFireBullet;
      delete this.game.__veraNetworkFireHook;
    }
    this.stopFrameLoop();
    this.game = null;
    this.originalSetup = null;
    this.originalFireBullet = null;
  }
}
