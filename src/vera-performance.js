/*
 * Project Vera runtime performance helpers.
 *
 * Rendering still runs every animation frame. Bot simulation does not need to
 * run at display refresh rate, though, so it is stepped at 30 Hz normally and
 * 20 Hz in the lowest visual tier. This keeps the existing AI and physics
 * code intact while avoiding repeated pathing, vision, collision, and
 * character-rig work on 90/120/144 Hz screens.
 */
(function installVeraPerformance() {
  'use strict';

  var NORMAL_STEP = 1 / 30;
  var LOW_STEP = 1 / 20;
  var MAX_BACKLOG = 0.1;
  var installedGame = null;

  function install(game) {
    var manager = game && game.botMgr;
    if (!manager || typeof manager.update !== 'function' || manager.__veraPerfWrapped) {
      return;
    }

    var updateBots = manager.update;
    var backlog = 0;

    manager.update = function veraBotUpdate(delta) {
      var dt = Number.isFinite(delta) && delta > 0 ? delta : 0;
      backlog = Math.min(MAX_BACKLOG, backlog + dt);
      var stepBudget = this.game && this.game.quality === 'low' ? LOW_STEP : NORMAL_STEP;
      if (backlog < stepBudget) return;

      // Preserve the elapsed simulation time for normal frames. The small
      // backlog cap prevents a long tab wake-up from producing an unstable
      // physics step when the browser resumes.
      var step = backlog;
      backlog = 0;
      return updateBots.call(this, step);
    };

    manager.__veraPerfWrapped = true;
    installedGame = game;
  }

  function poll() {
    try {
      var game = window.game;
      if (game && game !== installedGame) install(game);
    } catch (error) {
      // Performance helpers must never interfere with loading or gameplay.
    }
  }

  // The game module creates the bot manager after the initial page scripts.
  // Polling is intentionally infrequent and stops doing work after install.
  setInterval(poll, 250);
  poll();
})();
