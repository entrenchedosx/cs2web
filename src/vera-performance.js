/*
 * Project Vera runtime performance guard.
 *
 * This stays outside the game bundle so it can be audited and disabled
 * without touching gameplay. It lowers work under pressure instead of
 * allowing a slow frame to create a backlog that causes a second freeze.
 */
(function installVeraPerformance() {
  'use strict';

  var NORMAL_STEP = 1 / 30;
  var LOW_STEP = 1 / 20;
  var MAX_BACKLOG = 0.075;
  var installedGame = null;

  function number(value, fallback) {
    return Number.isFinite(Number(value)) ? Number(value) : fallback;
  }

  function reduceVisualCost(game) {
    if (!game || game.__veraPerfReduced) return;
    game.__veraPerfReduced = true;
    try {
      if (game.postfx && typeof game.postfx.degradeToFXAA === 'function') game.postfx.degradeToFXAA();
    } catch (error) {}
    try {
      if (typeof game._syncPost === 'function') game._syncPost();
    } catch (error) {}
    try {
      if (game.quality && game.quality !== 'low') game.quality = 'low';
    } catch (error) {}
  }

  function install(game) {
    var manager = game && game.botMgr;
    if (!manager || typeof manager.update !== 'function' || manager.__veraPerfWrapped) return;

    var updateBots = manager.update;
    var backlog = 0;
    var slowAiFrames = 0;
    var slowGameFrames = 0;

    manager.update = function veraBotUpdate(delta) {
      var dt = Number.isFinite(delta) && delta > 0 ? Math.min(delta, 0.1) : 0;
      backlog = Math.min(MAX_BACKLOG, backlog + dt);
      var stepBudget = game.__veraPerfReduced || game.quality === 'low' ? LOW_STEP : NORMAL_STEP;
      if (backlog < stepBudget) return;

      // Drop excess elapsed time after a long frame. Replaying every missed AI
      // tick produces a catch-up spiral and is a common source of freezes.
      var step = Math.min(backlog, game.__veraPerfReduced ? 0.05 : MAX_BACKLOG);
      backlog = 0;
      var started = performance.now();
      var result;
      try {
        result = updateBots.call(this, step);
      } catch (error) {
        return undefined;
      }
      var cost = performance.now() - started;
      if (cost > 14) slowAiFrames++; else slowAiFrames = Math.max(0, slowAiFrames - 1);
      if (slowAiFrames >= 3) reduceVisualCost(game);
      return result;
    };

    manager.__veraPerfWrapped = true;
    manager.__veraPerfOriginalUpdate = updateBots;
    manager.__veraPerfState = function () {
      return { slowAiFrames: slowAiFrames, reduced: !!game.__veraPerfReduced };
    };
    installedGame = game;

    // Sample existing engine telemetry at a low cadence; this adds no extra
    // requestAnimationFrame loop and no per-frame allocations.
    window.setInterval(function sampleVeraFrameCost() {
      try {
        var frameMs = number(game._frameMs, 0);
        if (frameMs > 34) slowGameFrames++;
        else slowGameFrames = Math.max(0, slowGameFrames - 1);
        if (slowGameFrames >= 3) reduceVisualCost(game);
      } catch (error) {}
    }, 1000);
  }

  function poll() {
    try {
      var game = window.game;
      if (game && game !== installedGame) install(game);
    } catch (error) {}
  }

  window.setInterval(poll, 500);
  poll();
})();
