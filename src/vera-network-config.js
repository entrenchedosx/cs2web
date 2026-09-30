/*
 * Static deployment configuration for Vera LAN multiplayer.
 *
 * A Python signaling server can be enabled with `signalingUrl` or the
 * `?signal=` URL parameter. Without it, the original manual WebRTC fallback
 * remains available and no server is contacted.
 * The public STUN entries only help browsers discover a usable route when the
 * players are on different Wi-Fi networks; they never carry game state.
 */
(function configureVeraNetwork() {
  'use strict';

  var existing = window.VERA_NETWORK_CONFIG || {};
  var querySignaling = '';
  try { querySignaling = new URLSearchParams(window.location.search).get('signal') || ''; } catch (error) {}
  var configuredIce = Array.isArray(existing.iceServers) ? existing.iceServers : [];
  var defaultIce = [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ];
  window.VERA_NETWORK_CONFIG = Object.freeze({
    iceServers: configuredIce.length ? configuredIce : defaultIce,
    signalingUrl: String(existing.signalingUrl || querySignaling || '').trim(),
    maxPlayers: 20
  });
})();
