/*
 * Static deployment configuration for Vera LAN multiplayer.
 *
 * No game/signaling server is required. The two peers exchange an ICE-complete
 * offer and answer through the multiplayer panel, then communicate directly.
 * The public STUN entries only help browsers discover a usable route when the
 * players are on different Wi-Fi networks; they never carry game state.
 */
(function configureVeraNetwork() {
  'use strict';

  var existing = window.VERA_NETWORK_CONFIG || {};
  var configuredIce = Array.isArray(existing.iceServers) ? existing.iceServers : [];
  var defaultIce = [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ];
  window.VERA_NETWORK_CONFIG = Object.freeze({
    iceServers: configuredIce.length ? configuredIce : defaultIce,
    maxPlayers: 2
  });
})();
