/*
 * Static-hosting WebRTC transport.
 *
 * GitHub Pages cannot run a signaling server, so the small two-player LAN
 * prototype exchanges one ICE-complete offer and one answer through the UI.
 * Once that exchange is complete, gameplay uses direct DataChannels only.
 */

function noop() {}

function encodeBlob(value) {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = '';
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }
  return btoa(binary);
}

function decodeBlob(value) {
  const raw = String(value || '').trim();
  if (!raw || raw.length > 200000) throw new Error('The LAN connection text is empty or too large.');
  const binary = atob(raw);
  const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
  const parsed = JSON.parse(new TextDecoder().decode(bytes));
  if (!parsed || (parsed.type !== 'offer' && parsed.type !== 'answer') || typeof parsed.sdp !== 'string') {
    throw new Error('That LAN connection text is not a valid Vera offer or answer.');
  }
  return parsed;
}

export class VeraPeerTransport {
  constructor(config = {}) {
    this.config = config;
    this.peer = null;
    this.stateChannel = null;
    this.controlChannel = null;
    this.role = '';
    this.closed = false;
    this.onStatus = noop;
    this.onPeer = noop;
    this.onState = noop;
    this.onControl = noop;
    this.onError = noop;
  }

  status(value, detail = '') {
    try { this.onStatus(value, detail); } catch (error) {}
  }

  createPeer() {
    if (this.peer) return this.peer;
    if (!('RTCPeerConnection' in window)) throw new Error('This browser does not support LAN WebRTC multiplayer.');
    const Peer = window.RTCPeerConnection;
    this.peer = new Peer({ iceServers: Array.isArray(this.config.iceServers) ? this.config.iceServers : [] });
    this.peer.onconnectionstatechange = () => {
      const state = this.peer && this.peer.connectionState;
      if (state === 'connected') {
        this.status('connected');
        this.onPeer({ connected: true });
      } else if (state === 'failed' || state === 'disconnected' || state === 'closed') {
        this.status('disconnected');
        this.onPeer({ connected: false });
      }
    };
    this.peer.ondatachannel = event => this.bindChannel(event.channel);
    return this.peer;
  }

  async waitForIceGathering() {
    const peer = this.peer;
    if (!peer || peer.iceGatheringState === 'complete') return;
    this.status('gathering');
    await new Promise(resolve => {
      let finished = false;
      const check = () => {
        if (peer.iceGatheringState !== 'complete' || finished) return;
        finished = true;
        peer.removeEventListener('icegatheringstatechange', check);
        resolve();
      };
      peer.addEventListener('icegatheringstatechange', check);
      window.setTimeout(() => {
        if (finished) return;
        finished = true;
        peer.removeEventListener('icegatheringstatechange', check);
        resolve();
      }, 7000);
      check();
    });
  }

  async createHostOffer() {
    this.role = 'host';
    this.closed = false;
    const peer = this.createPeer();
    this.bindChannel(peer.createDataChannel('vera-state', { ordered: false, maxRetransmits: 0 }));
    this.bindChannel(peer.createDataChannel('vera-control', { ordered: true }));
    this.status('gathering');
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    await this.waitForIceGathering();
    return encodeBlob(peer.localDescription);
  }

  async acceptGuestOffer(value) {
    this.role = 'guest';
    this.closed = false;
    const peer = this.createPeer();
    const offer = decodeBlob(value);
    if (offer.type !== 'offer') throw new Error('Joiners must paste a host offer.');
    await peer.setRemoteDescription(offer);
    this.status('gathering');
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    await this.waitForIceGathering();
    return encodeBlob(peer.localDescription);
  }

  async acceptHostAnswer(value) {
    const answer = decodeBlob(value);
    if (answer.type !== 'answer') throw new Error('Hosts must paste a joiner answer.');
    if (!this.peer) throw new Error('Create a LAN offer before applying an answer.');
    await this.peer.setRemoteDescription(answer);
    this.status('connecting');
  }

  bindChannel(channel) {
    if (!channel) return;
    channel.binaryType = 'arraybuffer';
    channel.addEventListener('open', () => {
      if (this.stateChannel && this.controlChannel &&
          this.stateChannel.readyState === 'open' && this.controlChannel.readyState === 'open') {
        this.status('connected');
        this.onPeer({ connected: true });
      }
    });
    channel.addEventListener('close', () => {
      if (!this.closed) this.status('disconnected');
    });
    channel.addEventListener('message', event => {
      if (channel.label === 'vera-state') this.onState(event.data);
      else {
        try {
          const message = typeof event.data === 'string'
            ? JSON.parse(event.data)
            : JSON.parse(new TextDecoder().decode(event.data));
          if (message && typeof message.type === 'string') this.onControl(message);
        } catch (error) {}
      }
    });
    if (channel.label === 'vera-state') this.stateChannel = channel;
    if (channel.label === 'vera-control') this.controlChannel = channel;
  }

  sendState(packet) {
    if (this.stateChannel && this.stateChannel.readyState === 'open') {
      try { this.stateChannel.send(packet); return true; } catch (error) {}
    }
    return false;
  }

  sendControl(message) {
    if (this.controlChannel && this.controlChannel.readyState === 'open') {
      try { this.controlChannel.send(JSON.stringify(message)); return true; } catch (error) {}
    }
    return false;
  }

  close() {
    this.closed = true;
    try { this.stateChannel && this.stateChannel.close(); } catch (error) {}
    try { this.controlChannel && this.controlChannel.close(); } catch (error) {}
    try { this.peer && this.peer.close(); } catch (error) {}
    this.stateChannel = null;
    this.controlChannel = null;
    this.peer = null;
    this.status('offline');
  }
}
