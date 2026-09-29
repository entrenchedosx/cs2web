import { VeraPeerTransport } from './webrtc.js';
import { VeraGameAdapter } from './game-adapter.js';

const STATUS_TEXT = Object.freeze({
  offline: 'OFFLINE',
  'creating-offer': 'CREATING OFFER',
  gathering: 'PREPARING',
  waiting: 'WAITING',
  connecting: 'CONNECTING',
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
      #vera-mp-trigger { margin-top: 10px; width: 100%; min-height: 38px; color: #e8eef2; border: 1px solid rgba(168,85,247,.44); background: rgba(10,13,16,.78); cursor: pointer; letter-spacing: 1.8px; font-weight: 800; transition: border-color .16s, background .16s, color .16s; }
      #vera-mp-trigger:hover { border-color: var(--accent, #a855f7); background: rgba(168,85,247,.14); color: #fff; }
      #vera-mp-panel { position: fixed; inset: 0; z-index: 1000; display: none; align-items: center; justify-content: center; padding: 24px; background: rgba(3,5,8,.82); backdrop-filter: blur(3px); font-family: inherit; }
      #vera-mp-panel.open { display: flex; }
      .vera-mp-card { width: min(760px, 94vw); max-height: 92vh; overflow: auto; color: #e8eef2; border: 1px solid rgba(255,255,255,.16); border-radius: 4px; background: #101419; box-shadow: 0 22px 70px rgba(0,0,0,.72), 0 0 0 1px rgba(168,85,247,.08); }
      .vera-mp-topbar { display: flex; align-items: center; gap: 12px; min-height: 76px; padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,.1); background: linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.012)); }
      .vera-mp-mark { display: grid; place-items: center; width: 34px; height: 34px; flex: 0 0 34px; border: 1px solid rgba(192,132,252,.64); color: #e9d5ff; font-size: 17px; font-weight: 900; font-style: italic; transform: skew(-8deg); }
      .vera-mp-heading { min-width: 0; flex: 1; }
      .vera-mp-kicker { color: #aeb9c2; font-size: 10px; font-weight: 800; letter-spacing: 2.3px; }
      .vera-mp-card h2 { margin: 3px 0 0; color: #fff; font-size: 21px; line-height: 1.1; letter-spacing: 2.5px; }
      .vera-mp-topright { display: flex; align-items: center; gap: 14px; }
      .vera-mp-close { width: 28px; height: 28px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04); color: #aeb9c2; font-size: 18px; line-height: 1; cursor: pointer; }
      .vera-mp-close:hover { border-color: rgba(255,255,255,.34); color: #fff; background: rgba(255,255,255,.1); }
      .vera-mp-status { padding: 6px 8px; border: 1px solid rgba(168,85,247,.42); background: rgba(168,85,247,.1); color: #e9d5ff; font-size: 9px; font-weight: 800; letter-spacing: 1.2px; white-space: nowrap; }
      .vera-mp-body { padding: 22px; }
      .vera-mp-error { min-height: 17px; margin: -4px 0 10px; color: #8f9ba5; font-size: 12px; line-height: 1.4; }
      .vera-mp-error.is-error { color: #f59ca5; }
      .vera-mp-actions { display: grid; gap: 14px; }
      .vera-mp-intro { max-width: 560px; margin: 0 0 18px; color: #aeb9c2; font-size: 13px; line-height: 1.55; }
      .vera-mp-choice-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .vera-mp-choice { min-height: 150px; padding: 18px; text-align: left; border: 1px solid rgba(255,255,255,.13); border-radius: 3px; background: rgba(5,7,9,.42); color: #e8eef2; cursor: pointer; transition: border-color .16s, background .16s, transform .16s; }
      .vera-mp-choice:hover { border-color: rgba(192,132,252,.72); background: rgba(168,85,247,.1); transform: translateY(-2px); }
      .vera-mp-choice-icon { display: grid; place-items: center; width: 30px; height: 30px; margin-bottom: 16px; border: 1px solid rgba(255,255,255,.25); color: #c084fc; font-size: 14px; font-weight: 900; }
      .vera-mp-choice h3 { margin: 0 0 7px; color: #fff; font-size: 14px; letter-spacing: 1.4px; }
      .vera-mp-choice p { margin: 0; color: #8f9ba5; font-size: 12px; line-height: 1.45; }
      .vera-mp-footnote { margin-top: 17px; color: #72808a; font-size: 11px; letter-spacing: .2px; }
      .vera-mp-flow { display: flex; align-items: center; gap: 8px; margin: 0 0 22px; padding-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,.1); }
      .vera-mp-step { display: flex; align-items: center; gap: 7px; color: #67737d; font-size: 10px; font-weight: 800; letter-spacing: 1px; }
      .vera-mp-step b { display: grid; place-items: center; width: 21px; height: 21px; border: 1px solid rgba(255,255,255,.18); font-size: 10px; font-weight: 800; }
      .vera-mp-step.active { color: #e9d5ff; }
      .vera-mp-step.active b { border-color: #c084fc; background: rgba(168,85,247,.18); color: #fff; }
      .vera-mp-step-line { height: 1px; flex: 1; background: rgba(255,255,255,.12); }
      .vera-mp-room { display: none; }
      .vera-mp-room.show { display: block; }
      .vera-mp-room-title { margin-bottom: 5px; color: #fff; font-size: 16px; font-weight: 800; letter-spacing: 1.5px; }
      .vera-mp-help { max-width: 620px; color: #8f9ba5; font-size: 12px; line-height: 1.55; margin: 0 0 14px; }
      .vera-mp-label { display: flex; align-items: center; justify-content: space-between; margin: 16px 0 6px; color: #aeb9c2; font-size: 10px; font-weight: 800; letter-spacing: 1.7px; }
      .vera-mp-label em { color: #67737d; font-size: 9px; font-style: normal; letter-spacing: .8px; }
      .vera-mp-signal { width: 100%; min-height: 92px; resize: vertical; box-sizing: border-box; border: 1px solid rgba(255,255,255,.16); border-radius: 2px; padding: 10px; outline: none; background: #090c0f; color: #dfe7eb; font: 11px/1.35 ui-monospace, monospace; overflow-wrap: anywhere; }
      .vera-mp-signal:focus { border-color: rgba(192,132,252,.72); box-shadow: 0 0 0 2px rgba(168,85,247,.1); }
      .vera-mp-signal::selection { background: rgba(192,132,252,.55); }
      .vera-mp-actions button, .vera-mp-room button { min-height: 40px; border: 1px solid rgba(255,255,255,.16); border-radius: 2px; background: rgba(255,255,255,.065); color: #e8eef2; font-weight: 800; letter-spacing: 1.2px; cursor: pointer; transition: background .16s, border-color .16s, color .16s; }
      .vera-mp-actions button:hover, .vera-mp-room button:hover { border-color: rgba(192,132,252,.7); background: rgba(168,85,247,.16); color: #fff; }
      .vera-mp-room [data-mp-accept-answer], .vera-mp-room [data-mp-create-answer] { width: 100%; margin-top: 10px; border-color: rgba(168,85,247,.65); background: rgba(168,85,247,.18); }
      .vera-mp-room [data-mp-accept-answer]:hover, .vera-mp-room [data-mp-create-answer]:hover { background: rgba(168,85,247,.3); }
      .vera-mp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
      #vera-mp-pill { position: fixed; right: 14px; top: 14px; z-index: 90; display: none; padding: 7px 10px; border: 1px solid rgba(168,85,247,.42); border-radius: 2px; background: rgba(10,13,16,.92); color: #e9d5ff; font: 800 10px/1.2 ui-monospace, monospace; letter-spacing: 1px; pointer-events: none; }
      #vera-mp-pill.show { display: block; }
      @media (max-width: 620px) { .vera-mp-card { width: 96vw; } .vera-mp-body { padding: 18px; } .vera-mp-choice-grid, .vera-mp-row { grid-template-columns: 1fr; } .vera-mp-topright { gap: 7px; } .vera-mp-status { max-width: 120px; overflow: hidden; text-overflow: ellipsis; } }
    `;
    document.head.appendChild(style);
  }

  createPanel() {
    const panel = document.createElement('div');
    panel.id = 'vera-mp-panel';
    panel.innerHTML = `
      <div class="vera-mp-card" role="dialog" aria-modal="true" aria-labelledby="vera-mp-title">
        <div class="vera-mp-topbar">
          <div class="vera-mp-mark" aria-hidden="true">V</div>
          <div class="vera-mp-heading"><div class="vera-mp-kicker">VERA // LOCAL PLAY</div><h2 id="vera-mp-title">LAN MULTIPLAYER</h2></div>
          <div class="vera-mp-topright"><div class="vera-mp-status" data-mp-status>OFFLINE</div><button class="vera-mp-close" type="button" aria-label="Close">×</button></div>
        </div>
        <div class="vera-mp-body">
          <div class="vera-mp-error" data-mp-error></div>
          <div class="vera-mp-actions" data-mp-actions>
            <p class="vera-mp-intro">Play a private match with someone on the same network. Vera connects the two browsers directly; there is no account, lobby, or server.</p>
            <div class="vera-mp-choice-grid">
              <button class="vera-mp-choice" type="button" data-mp-host><span class="vera-mp-choice-icon" aria-hidden="true">A</span><h3>HOST A MATCH</h3><p>Create the session and send your connection invite to a friend.</p></button>
              <button class="vera-mp-choice" type="button" data-mp-join><span class="vera-mp-choice-icon" aria-hidden="true">B</span><h3>JOIN A MATCH</h3><p>Paste a friend's invite and return your connection answer.</p></button>
            </div>
            <div class="vera-mp-footnote">Same Wi-Fi or LAN · Two players · Direct browser connection</div>
          </div>
          <div class="vera-mp-flow" data-mp-flow aria-label="Connection progress">
            <span class="vera-mp-step active" data-mp-step="1"><b>1</b> ROLE</span><i class="vera-mp-step-line"></i><span class="vera-mp-step" data-mp-step="2"><b>2</b> EXCHANGE</span><i class="vera-mp-step-line"></i><span class="vera-mp-step" data-mp-step="3"><b>3</b> READY</span>
          </div>
          <div class="vera-mp-room" data-mp-host-room>
            <div class="vera-mp-room-title">Host a private match</div>
            <div class="vera-mp-help">Send the invite below to your friend. When they return an answer, apply it to open the match.</div>
            <label class="vera-mp-label" for="vera-mp-host-offer">YOUR INVITE <em>GENERATED FOR THIS SESSION</em></label>
            <textarea id="vera-mp-host-offer" class="vera-mp-signal" data-mp-host-offer readonly aria-label="Host connection invite"></textarea>
            <div class="vera-mp-row"><button type="button" data-mp-copy-offer>COPY INVITE</button><button type="button" data-mp-leave>END SESSION</button></div>
            <label class="vera-mp-label" for="vera-mp-host-answer">FRIEND'S ANSWER</label>
            <textarea id="vera-mp-host-answer" class="vera-mp-signal" data-mp-host-answer placeholder="Paste the answer here" aria-label="Friend's answer"></textarea>
            <button type="button" data-mp-accept-answer>START LAN MATCH</button>
          </div>
          <div class="vera-mp-room" data-mp-guest-room>
            <div class="vera-mp-room-title">Join a private match</div>
            <div class="vera-mp-help">Paste the host's invite below. Vera will create a reply that you send back to the host.</div>
            <label class="vera-mp-label" for="vera-mp-guest-offer">HOST INVITE</label>
            <textarea id="vera-mp-guest-offer" class="vera-mp-signal" data-mp-guest-offer placeholder="Paste the invite here" aria-label="Host invite"></textarea>
            <button type="button" data-mp-create-answer>CREATE REPLY</button>
            <label class="vera-mp-label" for="vera-mp-guest-answer">YOUR REPLY <em>RETURN THIS TO THE HOST</em></label>
            <textarea id="vera-mp-guest-answer" class="vera-mp-signal" data-mp-guest-answer readonly aria-label="Your connection reply"></textarea>
            <div class="vera-mp-row"><button type="button" data-mp-copy-answer>COPY REPLY</button><button type="button" data-mp-leave>END SESSION</button></div>
          </div>
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
      steps: panel.querySelectorAll('[data-mp-step]'),
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
    this.ui.error.classList.toggle('is-error', this.statusValue === 'error');
    this.ui.actions.style.display = this.view === 'home' ? '' : 'none';
    this.ui.hostRoom.classList.toggle('show', this.view === 'host');
    this.ui.guestRoom.classList.toggle('show', this.view === 'guest');
    if (this.hostOffer && this.ui.hostOffer.value !== this.hostOffer) this.ui.hostOffer.value = this.hostOffer;
    if (this.guestAnswer && this.ui.guestAnswer.value !== this.guestAnswer) this.ui.guestAnswer.value = this.guestAnswer;
    const activeStep = this.view === 'home' ? 1 : (this.statusValue === 'connected' || this.statusValue === 'match-ready' ? 3 : 2);
    this.ui.steps.forEach(step => step.classList.toggle('active', Number(step.dataset.mpStep) <= activeStep));
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
