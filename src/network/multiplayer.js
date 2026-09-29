import { VeraPeerTransport } from './webrtc.js';
import { VeraGameAdapter } from './game-adapter.js';

const STATUS_TEXT = Object.freeze({
  offline: 'OFFLINE',
  'creating-offer': 'CREATING LAN OFFER…',
  gathering: 'PREPARING LAN CONNECTION…',
  waiting: 'WAITING FOR OTHER DEVICE…',
  connecting: 'CONNECTING…',
  connected: 'CONNECTED',
  'match-ready': 'CONNECTED — MATCH READY',
  disconnected: 'DISCONNECTED',
  error: 'CONNECTION ERROR'
});

function text(value) { return String(value == null ? '' : value); }
function finite(value, fallback = 0) { return Number.isFinite(Number(value)) ? Number(value) : fallback; }

class VeraMultiplayerSession {
  constructor() {
    this.config = window.VERA_NETWORK_CONFIG || {};
    this.transport = null;
    this.adapter = new VeraGameAdapter();
    this.role = '';
    this.slot = 0;
    this.view = 'home';
    this.hostOffer = '';
    this.guestAnswer = '';
    this.statusValue = 'offline';
    this.statusDetail = '';
    this.transportConnected = false;
    this.matchConfig = null;
    this.matchAnnounced = false;
    this.matchStarted = false;
    this.lastStateAt = 0;
    this.lastMatchAt = 0;
    this.seenEvents = new Set();
    this.ui = {};
    window.setInterval(() => this.pump(), 50);
    this.installUIWatch();
    window.addEventListener('beforeunload', () => this.leave(true));
  }

  installUIWatch() {
    this.ensureUI();
    window.setInterval(() => this.ensureUI(), 500);
  }

  ensureUI() {
    const menu = document.querySelector('#menu');
    if (!menu) return;
    if (!document.querySelector('#vera-mp-trigger')) {
      const parent = document.querySelector('#playbottom') || document.querySelector('#tab-play') || menu;
      const trigger = document.createElement('button');
      trigger.id = 'vera-mp-trigger';
      trigger.type = 'button';
      trigger.className = 'ghostbtn vera-mp-trigger';
      trigger.textContent = 'LAN MULTIPLAYER';
      trigger.addEventListener('click', () => this.openPanel());
      parent.appendChild(trigger);
    }
    if (!document.querySelector('#vera-mp-panel')) this.createPanel();
    if (!document.querySelector('#vera-mp-style')) this.createStyle();
    this.updateUI();
  }

  createStyle() {
    const style = document.createElement('style');
    style.id = 'vera-mp-style';
    style.textContent = `
      #vera-mp-trigger { margin-top: 10px; width: 100%; min-height: 38px; color: #e9d5ff; border: 1px solid rgba(192,132,252,.34); background: rgba(42,24,68,.82); cursor: pointer; letter-spacing: 2px; font-weight: 800; }
      #vera-mp-trigger:hover { border-color: #c084fc; background: rgba(109,40,217,.42); }
      #vera-mp-panel { position: fixed; inset: 0; z-index: 1000; display: none; align-items: center; justify-content: center; padding: 24px; background: radial-gradient(circle at 50% 34%, rgba(88,28,135,.32), rgba(8,4,18,.94) 64%); font-family: inherit; }
      #vera-mp-panel.open { display: flex; }
      .vera-mp-card { width: min(650px, 94vw); max-height: 92vh; overflow: auto; padding: 28px; color: #f7f3ff; border: 1px solid rgba(192,132,252,.36); border-radius: 16px; background: linear-gradient(150deg, rgba(28,16,48,.97), rgba(10,7,20,.98)); box-shadow: 0 25px 100px rgba(0,0,0,.68), 0 0 42px rgba(168,85,247,.16); }
      .vera-mp-kicker { color: #c084fc; font-size: 11px; font-weight: 900; letter-spacing: 3px; }
      .vera-mp-card h2 { margin: 6px 0 20px; font-size: 30px; letter-spacing: 4px; }
      .vera-mp-close { float: right; border: 0; background: transparent; color: #c4b5fd; font-size: 22px; cursor: pointer; }
      .vera-mp-status { margin: 12px 0 18px; padding: 11px 13px; border-left: 3px solid #c084fc; background: rgba(168,85,247,.1); color: #e9d5ff; font-size: 12px; letter-spacing: 1px; }
      .vera-mp-error { min-height: 18px; margin: 8px 0; color: #fda4af; font-size: 12px; line-height: 1.45; }
      .vera-mp-actions { display: grid; gap: 10px; }
      .vera-mp-actions button, .vera-mp-room button { min-height: 42px; border: 1px solid rgba(192,132,252,.42); border-radius: 8px; background: rgba(79,70,229,.2); color: #fff; font-weight: 800; letter-spacing: 1.6px; cursor: pointer; }
      .vera-mp-actions button:hover, .vera-mp-room button:hover { background: rgba(168,85,247,.34); border-color: #d8b4fe; }
      .vera-mp-room { display: none; }
      .vera-mp-room.show { display: block; }
      .vera-mp-help { color: #b7a9ce; font-size: 13px; line-height: 1.5; margin: 12px 0; }
      .vera-mp-label { display: block; margin: 16px 0 6px; color: #c084fc; font-size: 11px; font-weight: 900; letter-spacing: 2px; }
      .vera-mp-signal { width: 100%; min-height: 105px; resize: vertical; box-sizing: border-box; border: 1px solid rgba(192,132,252,.3); border-radius: 8px; padding: 10px; background: rgba(5,3,12,.82); color: #fff; font: 12px/1.35 ui-monospace, monospace; overflow-wrap: anywhere; }
      .vera-mp-signal::selection { background: rgba(192,132,252,.55); }
      .vera-mp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
      #vera-mp-pill { position: fixed; right: 14px; top: 14px; z-index: 90; display: none; padding: 7px 10px; border: 1px solid rgba(192,132,252,.34); border-radius: 999px; background: rgba(18,10,32,.88); color: #e9d5ff; font: 800 10px/1.2 ui-monospace, monospace; letter-spacing: 1px; pointer-events: none; }
      #vera-mp-pill.show { display: block; }
      @media (max-width: 620px) { .vera-mp-row { grid-template-columns: 1fr; } }
    `;
    document.head.appendChild(style);
  }

  createPanel() {
    const panel = document.createElement('div');
    panel.id = 'vera-mp-panel';
    panel.innerHTML = `
      <div class="vera-mp-card" role="dialog" aria-modal="true" aria-labelledby="vera-mp-title">
        <button class="vera-mp-close" type="button" aria-label="Close">×</button>
        <div class="vera-mp-kicker">PROJECT VERA / DIRECT LAN PLAY</div>
        <h2 id="vera-mp-title">LAN MULTIPLAYER</h2>
        <div class="vera-mp-status" data-mp-status>OFFLINE</div>
        <div class="vera-mp-error" data-mp-error></div>
        <div class="vera-mp-actions" data-mp-actions>
          <button type="button" data-mp-host>HOST LAN GAME</button>
          <button type="button" data-mp-join>JOIN LAN GAME</button>
          <div class="vera-mp-help">Direct LAN mode uses WebRTC and requires no server. The host and joiner exchange two short connection texts by copy/paste.</div>
        </div>
        <div class="vera-mp-room" data-mp-host-room>
          <div class="vera-mp-kicker">HOST CONNECTION OFFER</div>
          <div class="vera-mp-help">Copy this offer to the other device. After it creates an answer, paste that answer below.</div>
          <textarea class="vera-mp-signal" data-mp-host-offer readonly aria-label="Host connection offer"></textarea>
          <div class="vera-mp-row"><button type="button" data-mp-copy-offer>COPY OFFER</button><button type="button" data-mp-leave>LEAVE LAN GAME</button></div>
          <label class="vera-mp-label" for="vera-mp-host-answer">JOINER ANSWER</label>
          <textarea id="vera-mp-host-answer" class="vera-mp-signal" data-mp-host-answer placeholder="Paste the answer from the other device" aria-label="Joiner answer"></textarea>
          <button type="button" data-mp-accept-answer>CONNECT LAN PLAYERS</button>
        </div>
        <div class="vera-mp-room" data-mp-guest-room>
          <div class="vera-mp-kicker">JOIN LAN GAME</div>
          <div class="vera-mp-help">Paste the host offer below, create your answer, then copy the answer back to the host device.</div>
          <label class="vera-mp-label" for="vera-mp-guest-offer">HOST OFFER</label>
          <textarea id="vera-mp-guest-offer" class="vera-mp-signal" data-mp-guest-offer placeholder="Paste the host offer here" aria-label="Host offer"></textarea>
          <button type="button" data-mp-create-answer>CREATE ANSWER</button>
          <label class="vera-mp-label" for="vera-mp-guest-answer">YOUR ANSWER</label>
          <textarea id="vera-mp-guest-answer" class="vera-mp-signal" data-mp-guest-answer readonly aria-label="Your connection answer"></textarea>
          <div class="vera-mp-row"><button type="button" data-mp-copy-answer>COPY ANSWER</button><button type="button" data-mp-leave>LEAVE LAN GAME</button></div>
        </div>
      </div>`;
    document.body.appendChild(panel);
    const pill = document.createElement('div');
    pill.id = 'vera-mp-pill';
    document.body.appendChild(pill);
    this.ui = {
      panel,
      status: panel.querySelector('[data-mp-status]'),
      error: panel.querySelector('[data-mp-error]'),
      actions: panel.querySelector('[data-mp-actions]'),
      hostRoom: panel.querySelector('[data-mp-host-room]'),
      guestRoom: panel.querySelector('[data-mp-guest-room]'),
      hostOffer: panel.querySelector('[data-mp-host-offer]'),
      hostAnswer: panel.querySelector('[data-mp-host-answer]'),
      guestOffer: panel.querySelector('[data-mp-guest-offer]'),
      guestAnswer: panel.querySelector('[data-mp-guest-answer]'),
      pill
    };
    panel.querySelector('.vera-mp-close').addEventListener('click', () => this.closePanel());
    panel.querySelector('[data-mp-host]').addEventListener('click', () => this.hostLan());
    panel.querySelector('[data-mp-join]').addEventListener('click', () => this.joinLan());
    panel.querySelector('[data-mp-copy-offer]').addEventListener('click', () => this.copyText(this.ui.hostOffer.value, 'Offer copied.'));
    panel.querySelector('[data-mp-accept-answer]').addEventListener('click', () => this.acceptAnswer());
    panel.querySelector('[data-mp-create-answer]').addEventListener('click', () => this.createAnswer());
    panel.querySelector('[data-mp-copy-answer]').addEventListener('click', () => this.copyText(this.ui.guestAnswer.value, 'Answer copied.'));
    panel.querySelectorAll('[data-mp-leave]').forEach(button => button.addEventListener('click', () => this.leave(false)));
  }

  updateUI() {
    if (!this.ui.panel) return;
    this.ui.status.textContent = STATUS_TEXT[this.statusValue] || text(this.statusValue).toUpperCase();
    this.ui.error.textContent = this.statusDetail || '';
    this.ui.actions.style.display = this.view === 'home' ? '' : 'none';
    this.ui.hostRoom.classList.toggle('show', this.view === 'host');
    this.ui.guestRoom.classList.toggle('show', this.view === 'guest');
    if (this.hostOffer && this.ui.hostOffer.value !== this.hostOffer) this.ui.hostOffer.value = this.hostOffer;
    if (this.guestAnswer && this.ui.guestAnswer.value !== this.guestAnswer) this.ui.guestAnswer.value = this.guestAnswer;
    if (this.ui.pill) {
      const visible = this.statusValue !== 'offline' && this.statusValue !== 'error';
      this.ui.pill.textContent = `VERA · ${STATUS_TEXT[this.statusValue] || this.statusValue.toUpperCase()}`;
      this.ui.pill.classList.toggle('show', visible);
    }
  }

  setStatus(value, detail = '') {
    this.statusValue = value;
    this.statusDetail = detail;
    this.updateUI();
  }

  openPanel() {
    this.ensureUI();
    if (this.ui.panel) this.ui.panel.classList.add('open');
  }

  closePanel() {
    if (this.ui.panel) this.ui.panel.classList.remove('open');
  }

  newTransport(role) {
    if (this.transport) this.transport.close();
    this.role = role;
    this.slot = role === 'host' ? 0 : 1;
    this.transportConnected = false;
    this.matchAnnounced = false;
    this.matchStarted = false;
    this.seenEvents.clear();
    this.adapter.activate(role, this.slot);
    const transport = this.transport = new VeraPeerTransport(this.config);
    transport.onStatus = (status, detail) => {
      if (status === 'connected') this.transportConnected = true;
      if (status === 'disconnected') this.transportConnected = false;
      this.setStatus(status, detail);
    };
    transport.onPeer = peer => {
      if (peer.connected) {
        this.transportConnected = true;
        this.setStatus('connected');
      } else if (peer.connected === false) {
        this.transportConnected = false;
        this.matchStarted = false;
        this.adapter.removeRemote();
        this.setStatus('disconnected', 'The other LAN device is no longer connected.');
      }
    };
    transport.onState = packet => this.adapter.receiveState(packet);
    transport.onControl = message => this.handleControl(message);
    transport.onError = error => this.setStatus('error', error.message);
    this.adapter.onLocalShot = event => {
      if (!this.transport || !this.markEvent(event.eventId)) return;
      this.transport.sendControl({ ...event, from: this.role });
    };
  }

  async hostLan() {
    this.openPanel();
    this.view = 'host';
    this.setStatus('creating-offer');
    try {
      this.newTransport('host');
      this.hostOffer = await this.transport.createHostOffer();
      this.setStatus('waiting', 'Copy the offer to the joining device.');
      this.updateUI();
    } catch (error) {
      this.setStatus('error', error.message);
    }
  }

  joinLan() {
    this.openPanel();
    this.view = 'guest';
    this.newTransport('guest');
    this.setStatus('waiting', 'Paste the host offer to create your answer.');
  }

  async createAnswer() {
    const offer = this.ui.guestOffer && this.ui.guestOffer.value;
    if (!offer) { this.setStatus('error', 'Paste the host offer first.'); return; }
    try {
      this.setStatus('gathering');
      this.guestAnswer = await this.transport.acceptGuestOffer(offer);
      this.setStatus('waiting', 'Copy your answer back to the host device.');
      this.updateUI();
    } catch (error) {
      this.setStatus('error', error.message);
    }
  }

  async acceptAnswer() {
    const answer = this.ui.hostAnswer && this.ui.hostAnswer.value;
    if (!answer) { this.setStatus('error', 'Paste the joiner answer first.'); return; }
    try {
      await this.transport.acceptHostAnswer(answer);
      this.setStatus('connecting', 'Waiting for the direct LAN link.');
    } catch (error) {
      this.setStatus('error', error.message);
    }
  }

  async beginHostMatch() {
    if (!this.transportConnected || this.matchAnnounced) return;
    this.matchConfig = this.adapter.selectedMatch();
    const message = { type: 'match-start', map: this.matchConfig.map, mode: this.matchConfig.mode, hostTeam: 'CT', guestTeam: 'T' };
    if (!this.transport.sendControl(message)) return;
    this.matchAnnounced = true;
    await this.beginMatch(this.matchConfig, 'CT');
  }

  async beginMatch(config, team) {
    if (this.matchStarted) return;
    this.matchStarted = true;
    this.setStatus('connecting');
    try {
      await this.adapter.startMatch({ map: config.map, mode: config.mode, team });
      this.transport.sendControl({ type: 'match-ready', from: this.role });
      this.setStatus('match-ready');
      this.closePanel();
    } catch (error) {
      this.matchStarted = false;
      this.setStatus('error', error.message);
    }
  }

  handleControl(message) {
    if (!message || typeof message.type !== 'string') return;
    if (message.type === 'match-start' && this.role === 'guest') {
      this.matchConfig = { map: text(message.map) || 'oasis', mode: text(message.mode) || 'defusal' };
      this.beginMatch(this.matchConfig, message.guestTeam === 'CT' ? 'CT' : 'T');
      return;
    }
    if (message.type === 'match-ready') {
      this.setStatus('match-ready');
      return;
    }
    if (message.type === 'match-state' && this.role === 'guest') {
      const game = this.adapter.game;
      if (game && game.state === 'playing') {
        if (Number.isFinite(message.roundTimeLeft)) game.roundTimeLeft = Math.max(0, message.roundTimeLeft);
        if (typeof message.roundActive === 'boolean') game.roundActive = message.roundActive;
        if (game.hud && game.hud.update) { try { game.hud.update(0); } catch (error) {} }
      }
      return;
    }
    if (message.type === 'fire') {
      if (!this.markEvent(message.eventId)) return;
      this.adapter.simulateRemoteShot(message);
    }
  }

  markEvent(id) {
    const key = text(id);
    if (!key || this.seenEvents.has(key)) return false;
    this.seenEvents.add(key);
    while (this.seenEvents.size > 256) this.seenEvents.delete(this.seenEvents.values().next().value);
    return true;
  }

  pump() {
    try {
      if (this.role === 'host' && this.transportConnected && !this.matchAnnounced) this.beginHostMatch();
      if (!this.transport || !this.transportConnected || !this.matchStarted) return;
      const now = performance.now();
      if (now - this.lastStateAt >= 45) {
        const local = this.adapter.encodeLocalState();
        if (local) this.transport.sendState(local);
        if (this.role === 'host') {
          const remote = this.adapter.encodeRemoteState();
          if (remote) this.transport.sendState(remote);
        }
        this.lastStateAt = now;
      }
      if (this.role === 'host' && now - this.lastMatchAt >= 200) {
        const game = this.adapter.game;
        if (game) this.transport.sendControl({ type: 'match-state', roundActive: !!game.roundActive, roundTimeLeft: finite(game.roundTimeLeft), mode: game.mode, phase: game.state });
        this.lastMatchAt = now;
      }
    } catch (error) {}
  }

  async copyText(value, successMessage) {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      this.setStatus(this.statusValue, successMessage);
    } catch (error) {
      this.setStatus(this.statusValue, 'Copy unavailable — select the connection text manually.');
    }
  }

  leave(silent) {
    if (this.transport) this.transport.close();
    this.transport = null;
    this.adapter.deactivate();
    this.role = '';
    this.slot = 0;
    this.view = 'home';
    this.hostOffer = '';
    this.guestAnswer = '';
    this.transportConnected = false;
    this.matchStarted = false;
    this.matchAnnounced = false;
    this.seenEvents.clear();
    this.setStatus('offline');
    if (!silent && this.ui.panel) this.ui.panel.classList.add('open');
  }

  status() {
    return { status: this.statusValue, role: this.role, connected: this.transportConnected, matchStarted: this.matchStarted, remote: !!this.adapter.remote };
  }
}

const session = new VeraMultiplayerSession();
window.__veraMultiplayer = session;
