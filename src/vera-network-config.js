/*
 * Static deployment configuration for Vera LAN multiplayer.
 *
 * No signaling server is required. The two peers exchange an ICE-complete
 * offer and answer through the multiplayer panel, then communicate directly.
 */
(function configureVeraNetwork() {
  'use strict';

  var existing = window.VERA_NETWORK_CONFIG || {};
  window.VERA_NETWORK_CONFIG = Object.freeze({
    iceServers: Array.isArray(existing.iceServers) ? existing.iceServers : [],
    maxPlayers: 2
  });
})();
