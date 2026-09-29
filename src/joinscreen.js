/* JOINSCREEN: fullscreen join loader + cache warmer + page-level performance.
   No game-bundle edits: it hooks the existing HUD progress callback, preloads
   the selected match assets into HTTP cache before startGame runs, and keeps a
   non-blocking status strip visible while team select stays interactive. */
(() => {
  'use strict';

  const ROOT_ID = 'joinscreen';
  const MAP_TIMEOUT_MS = 75000;
  const MOBILE_TIMEOUT_MS = 120000;

  const state = {
    phase: 'idle', // idle | preloading | pass
    gamePct: 0,
    gameStage: '',
    shownPct: 0,
    downloaded: 0,
    planned: 0,
    filesDone: 0,
    filesTotal: 0,
    current: '',
    failed: 0,
    speed: 0,
    readyAt: 0,
    note: ''
  };

  const els = {};
  const warmed = { selection: '', small: false, core: false };
  let abort = null;
  let idleAbort = null;
  let idleScheduled = false;
  let renderQueued = false;
  let lastRender = 0;
  let speedBytes = 0;
  let speedAt = 0;
  let transferToken = 0;
const SEEN_KEY = 'vera_join_assets_v1';
  const seen = { map: {}, dirty: false, saveTimer: 0 };

  function loadSeen() {
    try {
      const raw = window.localStorage.getItem(SEEN_KEY);
      const data = raw ? JSON.parse(raw) : null;
      if (!data || typeof data.map !== 'object') return;
      const now = Date.now();
      for (const key of Object.keys(data.map)) {
        const at = Number(data.map[key]);
        if (Number.isFinite(at) && now - at < 30 * 24 * 3600 * 1000) {
          seen.map[key] = at;
        }
      }
    } catch (e) {}
  }

  function saveSeen() {
    seen.saveTimer = 0;
    if (!seen.dirty) return;
    seen.dirty = false;
    try {
      const keys = Object.keys(seen.map).slice(-500);
      const pruned = {};
      for (const key of keys) pruned[key] = seen.map[key];
      seen.map = pruned;
      window.localStorage.setItem(SEEN_KEY, JSON.stringify({ v: 1, map: pruned }));
    } catch (e) {}
  }

  function saveSeenSoon() {
    if (seen.saveTimer) return;
    try {
      seen.saveTimer = window.setTimeout(saveSeen, 5000);
    } catch (e) {}
  }

  function assetLike(url) {
    const u = String(url || '').toLowerCase().split('?')[0];
    if (!u || u.indexOf('data:') === 0 || u.indexOf('blob:') === 0) return false;
    const assetPath = u.indexOf('models/') >= 0 || u.indexOf('textures/') >= 0 ||
      u.indexOf('sounds/') >= 0 || u.indexOf('vendor/addons/libs/') >= 0 ||
      u.indexOf('split.json') >= 0;
    return assetPath && /(\.glb|\.bin|\.json|\.jpg|\.jpeg|\.png|\.webp|\.m4a|\.mp3|\.wasm|\.js)($|[?#])/.test(u);
  }

  function observeFetch() {
    try {
      if (!window.fetch || window.fetch.__joinObserved) return;
      const original = window.fetch.bind(window);
      const wrapped = function (input, init) {
        let url = '';
        let method = '';
        try {
          url = typeof input === 'string' ? input : (input && input.url) || '';
          method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
        } catch (e) {}
        const promise = original(input, init);
        try {
          promise.then(
            res => {
              if (res && res.ok && method === 'GET' && assetLike(url)) {
                try {
                  const absoluteUrl = new URL(String(url), document.baseURI).toString();
                  seen.map[absoluteUrl] = Date.now();
                  seen.dirty = true;
                  saveSeenSoon();
                } catch (e) {}
              }
            },
            () => {}
          );
        } catch (e) {}
        return promise;
      };
      wrapped.__joinObserved = true;
      window.fetch = wrapped;
    } catch (e) {}
  }

  function $(selector, root) {
    try {
      return (root || document).querySelector(selector);
    } catch (e) {
      return null;
    }
  }

  function game() {
    try {
      return window.game || null;
    } catch (e) {
      return null;
    }
  }

  function teamSelect() {
    return $('#teamsel');
  }

  function autoStart() {
    try {
      const q = new URLSearchParams(window.location.search);
      return q.has('auto') || q.has('tour') || q.has('killtest') || q.has('smoketest');
    } catch (e) {
      return false;
    }
  }

  function connection() {
    try {
      return navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
    } catch (e) {
      return null;
    }
  }

  function saveDataMode() {
    const conn = connection();
    try {
      return !!(conn && conn.saveData);
    } catch (e) {
      return false;
    }
  }

  function mobileMode() {
    const g = game();
    if (g && typeof g._isMobile === 'boolean') return g._isMobile;
    try {
      return (
        window.matchMedia('(pointer: coarse)').matches &&
        window.matchMedia('(hover: none)').matches
      );
    } catch (e) {
      return false;
    }
  }

  function baseConcurrency() {
    const conn = connection();
    let mode = '';
    try {
      mode = String((conn && conn.effectiveType) || '').toLowerCase();
    } catch (e) {
      mode = '';
    }
    if (saveDataMode()) return 2;
    if (mode.indexOf('2g') >= 0) return 2;
    if (mode.indexOf('3g') >= 0) return 3;
    return mobileMode() ? 3 : 6;
  }

  function applyHardwareMode() {
    try {
      const smallMemory = Number(navigator.deviceMemory || 8) <= 3;
      const fewCores = Number(navigator.hardwareConcurrency || 8) <= 2 && mobileMode();
      if (saveDataMode() || smallMemory || fewCores) {
        document.documentElement.classList.add('js-lowfx');
      }
    } catch (e) {}
  }

  function ensureUI() {
    if (els.root) return els.root;
    const root = document.createElement('div');
    root.id = ROOT_ID;
    root.setAttribute('role', 'status');
    root.setAttribute('aria-live', 'polite');
    root.innerHTML =
      '<div class="js-panel">' +
        '<div class="js-kicker">JOINING MATCH</div>' +
        '<div class="js-title">Preparing the arena</div>' +
        '<div class="js-stage">STARTING</div>' +
        '<div class="js-bar" aria-hidden="true"><i class="js-fill"></i></div>' +
        '<div class="js-row"><span class="js-pct">0%</span>' +
        '<button type="button" class="js-cancel">CANCEL</button></div>' +
        '<div class="js-sub">Warming the match cache…</div>' +
      '</div>';
    document.body.appendChild(root);
    els.root = root;
    els.stage = $('.js-stage', root);
    els.fill = $('.js-fill', root);
    els.pct = $('.js-pct', root);
    els.sub = $('.js-sub', root);
    els.cancel = $('.js-cancel', root);
    if (els.cancel) {
      els.cancel.addEventListener('click', cancelPreload);
    }
    return root;
  }

  function show(mode) {
    const root = ensureUI();
    root.classList.add('show');
    root.classList.toggle('compact', mode === 'compact');
    root.classList.toggle('preloading', state.phase === 'preloading');
    render(true);
  }

  function hide() {
    if (!els.root) return;
    els.root.classList.remove('show', 'compact', 'preloading');
  }

  function formatMB(bytes) {
    const mb = Number(bytes || 0) / 1048576;
    if (mb < 0.05) return Math.max(0, Math.round(Number(bytes || 0) / 1024)) + ' KB';
    if (mb < 10) return mb.toFixed(1) + ' MB';
    return Math.round(mb) + ' MB';
  }

  function basename(url) {
    try {
      return String(url).split('?')[0].split('/').pop() || String(url);
    } catch (e) {
      return String(url);
    }
  }

  function render(force) {
    const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    if (!force && now - lastRender < 100) {
      if (!renderQueued) {
        renderQueued = true;
        window.setTimeout(() => {
          renderQueued = false;
          paint();
        }, 100);
      }
      return;
    }
    lastRender = now;
    paint();
  }

  function paint() {
    if (!els.root || !els.root.classList.contains('show')) return;

    const netPct = state.planned > 0 ? (state.downloaded / state.planned) * 100 : 0;
    let target = state.gamePct;
    let stage = state.gameStage || 'STARTING';

    if (state.phase === 'preloading') {
      target = Math.min(99, Math.max(netPct, state.filesTotal > 0
        ? (state.filesDone / state.filesTotal) * 100
        : 0));
      stage = 'CACHING MATCH ASSETS';
    }

    // Never move the visible bar backwards across the Play -> team -> round handoff.
    state.shownPct = Math.max(state.shownPct, Math.min(100, target || 0));
    if (state.phase !== 'preloading' && state.gamePct >= 100) state.shownPct = 100;
    const shown = Math.round(state.shownPct);

    if (els.stage) els.stage.textContent = stage;
    if (els.fill) els.fill.style.transform = 'scaleX(' + (shown / 100).toFixed(4) + ')';
    if (els.pct) els.pct.textContent = shown + '%';
    if (els.sub) {
      const parts = [];
      parts.push(formatMB(state.downloaded) + ' cached · ' + state.filesDone + '/' + state.filesTotal + ' files');
      if (state.current) parts.push('now: ' + basename(state.current));
      if (state.speed > 0) parts.push(formatMB(state.speed) + '/s');
      if (state.failed > 0) parts.push(state.failed + ' retrying in-game');
      if (state.note) parts.push(state.note);
      els.sub.textContent = parts.join(' · ');
    }
  }

  function hookProgress(g) {
    try {
      const hud = g && g.hud;
      if (!hud || typeof hud.setJoinProgress !== 'function') return;
      if (hud.setJoinProgress.__joinHooked) return;
      const original = hud.setJoinProgress.bind(hud);
      const wrapped = function (pct, stage) {
        try {
          const value = Math.max(0, Math.min(100, Math.round(Number(pct) * 100)));
          if (state.phase !== 'preloading' && state.gamePct === 0 && Number.isFinite(value) && value > 0) {
            // A new engine join has started after cache warming; restart the visible bar.
            state.shownPct = 0;
          }
          state.gamePct = Number.isFinite(value) ? value : state.gamePct;
          if (typeof stage === 'string' && stage) state.gameStage = stage.toUpperCase();
          render(false);
        } catch (e) {}
        return original(pct, stage);
      };
      wrapped.__joinHooked = true;
      hud.setJoinProgress = wrapped;
    } catch (e) {}
  }

  function selectedValue(id) {
    const root = $('#' + id);
    if (!root) return '';
    const sel = $('.sel', root) || $('button', root);
    if (!sel) return '';
    const data = (sel.dataset && (sel.dataset.v || sel.dataset.value)) || '';
    const text = (sel.textContent || '').trim();
    return String(data || text || '');
  }

  function mapActual(raw) {
    const v = String(raw || '').toLowerCase();
    if (v.indexOf('oasis') >= 0 || v.indexOf('mirage') >= 0) return 'oasis';
    if (v.indexOf('dusk') >= 0 || v.indexOf('dune') >= 0 || v.indexOf('dust') >= 0) return 'dusker';
    return 'oasis';
  }

  function botCount() {
    const enabled = selectedValue('opt-botson').toLowerCase();
    if (enabled === '0' || enabled.indexOf('off') >= 0 || enabled.indexOf('no') >= 0) return 0;
    const n = parseInt(selectedValue('opt-bots'), 10);
    if (!Number.isFinite(n)) return 10;
    return Math.max(0, Math.min(10, n));
  }

  function readSelection() {
    const map = mapActual(selectedValue('opt-map'));
    return {
      map,
      bots: botCount(),
      mobile: mobileMode(),
      key: map + '|' + botCount() + '|' + (mobileMode() ? 'mobile' : 'full')
    };
  }

  function absolute(url) {
    try {
      return new URL(String(url).replace(/^\.\//, ''), document.baseURI).toString();
    } catch (e) {
      return String(url);
    }
  }

  function resolveAsset(logical) {
    const clean = String(logical || '').replace(/^\.\//, '').toLowerCase();
    const direct = absolute(logical);
    if (!clean) return direct;
    const now = Date.now();
    let best = null;
    let bestAt = 0;
    try {
      for (const key of Object.keys(seen.map)) {
        const at = Number(seen.map[key]);
        if (!Number.isFinite(at) || now - at >= 30 * 24 * 3600 * 1000) continue;
        const path = new URL(key, document.baseURI).pathname.toLowerCase();
        if ((path === '/' + clean || path.endsWith('/' + clean)) && at > bestAt) {
          best = key;
          bestAt = at;
        }
      }
    } catch (e) {}
    return best || direct;
  }

  function mapPlan(map, mobile) {
    if (map === 'dusker') {
      return {
        model: mobile ? './models/dusker_mobile.glb' : './models/dusker.glb',
        files: [
          './models/dusker_data.json',
          './models/dusker_phys.bin',
          mobile ? './models/sky_dust2_mobile.jpg' : './models/sky_dust2.jpg',
          mobile ? './models/dusker_shadows_mobile.png' : './models/dusker_shadows.png',
          './models/dusker_lightmap.jpg'
        ]
      };
    }
    return {
      model: mobile ? './models/oasis_mobile.glb' : './models/oasis.glb',
      files: [
        './models/oasis_data.json',
        './models/oasis_entities.json',
        './models/oasis_phys.bin',
        './models/oasis_props.glb',
        mobile ? './models/sky_mirage_mobile.jpg' : './models/sky_mirage.jpg',
        mobile ? './models/oasis_shadows_mobile.png' : './models/oasis_shadows.png',
        './models/oasis_lightmap.jpg'
      ]
    };
  }

  function agentPlan(bots) {
    if (!(bots > 0)) return [];
    return [
      './models/cs2/cs2_carry.glb',
      './models/cs2/cs2_actions.glb',
      './models/cs2/cs2_locomotion_rifle.glb',
      './models/cs2/cs2_locomotion_pistol.glb',
      './models/cs2/cs2_locomotion_knife.glb',
      './models/cs2/ctm_fbi.glb',
      './models/cs2/ctm_sas.glb',
      './models/cs2/tm_phoenix.glb'
    ];
  }

  function weaponPlan() {
    return [
      './models/cs2/vm/knife_ct.glb',
      './models/cs2/vm/knife_t.glb',
      './models/cs2/vm/glock.glb',
      './models/cs2/vm/usps.glb',
      './models/cs2/vm/p2000.glb', // first-person H&K P2000; there is no vm/hkp2000.glb
      './models/cs2/weapon_knife_ct.glb',
      './models/cs2/weapon_knife_t.glb',
      './models/cs2/weapon_pist_glock18.glb',
      './models/cs2/weapon_pist_usp_silencer.glb',
      './models/cs2/weapon_pist_hkp2000.glb'
    ];
  }

  function decoderPlan() {
    return [
      './vendor/addons/libs/draco/draco_decoder.js',
      './vendor/addons/libs/draco/draco_wasm_wrapper.js',
      './vendor/addons/libs/draco/draco_decoder.wasm',
      './vendor/addons/libs/basis/basis_transcoder.js',
      './vendor/addons/libs/basis/basis_transcoder.wasm'
    ];
  }

  function smallPlan(map) {
    const radar = map === 'dusker' ? 'ui/radar_de_dust2.png' : 'ui/radar_de_mirage.png';
    const plan = mapPlan(map, mobileMode());
    return [
      './split.json',
      './sounds/manifest.json',
      './' + radar,
      './textures/scope_circle.png',
      './textures/fx_tracer.png',
      './textures/fx_smokeloop_i_0_sc.png',
      './sounds/uiclick.m4a',
      './sounds/uihover.m4a'
    ].concat(plan.files);
  }

  function corePlan(selection) {
    const plan = mapPlan(selection.map, selection.mobile);
    return [plan.model]
      .concat(plan.files)
      .concat(agentPlan(selection.bots))
      .concat(weaponPlan())
      .concat(decoderPlan());
  }

  function estimateBytes(url) {
    const u = String(url).toLowerCase();
    if (u.indexOf('/dusker') >= 0 && u.endsWith('.glb')) return 62914560;
    if (u.indexOf('/oasis.glb') >= 0) return 44040192;
    if (u.indexOf('/oasis_mobile.glb') >= 0) return 39845888;
    if (u.endsWith('.glb')) return 8388608;
    if (u.endsWith('.bin')) return 3145728;
    if (u.endsWith('.png')) return 1048576;
    if (u.endsWith('.jpg')) return 524288;
    if (u.endsWith('.m4a') || u.endsWith('.mp3')) return 204800;
    if (u.endsWith('.json')) return 102400;
    return 524288;
  }

  async function expandSplit(url, signal) {
    if (String(url).toLowerCase().indexOf('.glb') < 0) return [url];
    try {
      const res = await fetch('./split.json', { signal });
      if (!res.ok) return [url];
      const manifest = await res.json();
      if (!manifest || typeof manifest !== 'object') return [url];
      const clean = String(url).replace(/^\.\//, '');
      const base = clean.split('/').pop();
      const stem = base.replace(/\.glb$/i, '');
      const entry =
        manifest[url] || manifest[clean] || manifest[base] ||
        manifest[stem] || manifest[clean + '.part0'];
      if (Array.isArray(entry) && entry.length) {
        return entry.map(part => absolute(String(part)));
      }
      if (Number.isFinite(Number(entry)) && Number(entry) > 0) {
        const count = Number(entry);
        const out = [];
        for (let i = 0; i < count; i++) out.push(absolute(url + '.part' + i));
        return out;
      }
    } catch (e) {}
    return [url];
  }

  async function fetchBytes(url, signal, onStart, onDelta) {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const total = Number(res.headers && res.headers.get('content-length')) || 0;
    try {
      onStart(total);
    } catch (e) {}
    if (!res.body || typeof res.body.getReader !== 'function') {
      const buf = await res.arrayBuffer();
      onDelta(buf.byteLength);
      return { bytes: buf.byteLength, total: total || buf.byteLength };
    }
    const reader = res.body.getReader();
    let received = 0;
    for (;;) {
      const chunk = await reader.read();
      if (chunk.done) break;
      const size = chunk.value ? chunk.value.byteLength : 0;
      received += size;
      onDelta(size);
    }
    try {
      if (reader.cancel) await reader.cancel();
    } catch (e) {}
    return { bytes: received, total: total || received };
  }

  function downloadAll(urls, options) {
    const signal = options.signal;
    const token = options.token;
    const live = () => token === transferToken;
    const concurrency = Math.max(1, options.concurrency || 4);
    return new Promise(resolve => {
      const results = [];
      let next = 0;
      let active = 0;
      let finished = false;
      const finish = value => {
        if (finished) return;
        finished = true;
        resolve(value);
      };
      const launch = () => {
        if (finished) return;
        if (signal && signal.aborted) {
          finish({ cancelled: true, results });
          return;
        }
        while (active < concurrency && next < urls.length) {
          const url = urls[next++];
          active++;
          if (live()) {
            state.current = url;
            render(false);
          }
          fetchBytes(url, signal, total => {
            // Replace this file's size estimate with the server's real length.
            if (live() && total > 0) state.planned += total - estimateBytes(url);
          }, delta => {
            if (!live()) return;
            state.downloaded += delta;
            const now = Date.now();
            if (!speedAt) {
              speedAt = now;
              speedBytes = state.downloaded;
            } else if (now - speedAt >= 500) {
              state.speed = ((state.downloaded - speedBytes) / Math.max(1, now - speedAt)) * 1000;
              speedAt = now;
              speedBytes = state.downloaded;
            }
            render(false);
          }).then(
            () => results.push({ url, ok: true }),
            () => {
              results.push({ url, ok: false });
              if (live()) {
                state.failed++;
                render(false);
              }
            }
          ).finally(() => {
            active--;
            if (live()) {
              state.filesDone++;
              state.current = '';
              render(false);
            }
            if (next >= urls.length && active === 0) {
              finish({ cancelled: !!(signal && signal.aborted), results });
              return;
            }
            launch();
          });
        }
        if (next >= urls.length && active === 0) finish({ cancelled: !!(signal && signal.aborted), results });
      };
      launch();
    });
  }

  function resetTransfer(urls) {
    transferToken++;
    state.downloaded = 0;
    state.filesDone = 0;
    state.failed = 0;
    state.speed = 0;
    state.current = '';
    state.note = '';
    speedAt = 0;
    speedBytes = 0;
    state.filesTotal = urls.length;
    state.planned = urls.reduce((sum, url) => sum + estimateBytes(url), 0);
    return transferToken;
  }

  async function idleWarm() {
    if (idleScheduled || saveDataMode() || autoStart()) return;
    idleScheduled = true;
    const kick = () => {
      try {
        if (state.phase !== 'idle' || !game() || !$('#menu')) return;
        const selection = readSelection();
        if (!selection.map || warmed.small) return;
        const urls = smallPlan(selection.map).map(resolveAsset);
        idleAbort = new AbortController();
        const token = resetTransfer(urls);
        downloadAll(urls, { signal: idleAbort.signal, concurrency: 2, token }).then(() => {
          warmed.small = true;
          warmed.selection = selection.key;
        }).catch(() => {});
      } catch (e) {}
    };
    try {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(kick, { timeout: 4000 });
      } else {
        window.setTimeout(kick, 2500);
      }
    } catch (e) {}
  }

  function cancelPreload() {
    if (state.phase !== 'preloading') return;
    try {
      if (abort) abort.abort();
    } catch (e) {}
    state.phase = 'idle';
    state.note = 'Cache warm cancelled';
    state.readyAt = 0;
    hide();
    render(true);
  }

  function onPlayCapture(event) {
    try {
      if (!event || !event.isTrusted) return;
      if ('button' in event && event.button !== 0) return;
      if (state.phase !== 'idle' || autoStart()) return;
      const target = event.target;
      if (!target || !target.closest) return;
      const btn = target.closest('#btn-play');
      if (!btn || btn.disabled || btn.classList.contains('loading')) return;
      const g = game();
      if (!g || g._joining || g._starting || teamSelect()) return;
      const selection = readSelection();
      if (!selection.map) return;
      if (warmed.core && warmed.selection === selection.key) return;
      event.preventDefault();
      event.stopPropagation();
      handlePlay(btn, selection);
    } catch (e) {}
  }

  async function handlePlay(btn, selection) {
    if (saveDataMode()) {
      // Data Saver means the browser should stream the match normally rather
      // than downloading the same assets twice for cache warming.
      state.note = 'data saver: streaming match assets';
      render(true);
      try {
        btn.click();
      } catch (e) {}
      return;
    }

    state.phase = 'preloading';
    state.gamePct = 0;
    state.gameStage = 'CACHING MAP';
    state.shownPct = 0;
    abort = new AbortController();
    if (idleAbort) {
      try { idleAbort.abort(); } catch (e) {}
    }

    try {
      const menu = $('#menu');
      if (menu) menu.classList.add('play-commit');
      if (typeof window.__menuSfx === 'function') window.__menuSfx('uiclick');
    } catch (e) {}

    show('full');

    let urls = corePlan(selection).map(resolveAsset);
    // Expand a split GLB manifest before counting files, so progress stays honest.
    const expanded = [];
    try {
      for (const url of urls) {
        const parts = await expandSplit(url, abort.signal);
        for (const part of parts) expanded.push(part);
      }
      urls = Array.from(new Set(expanded));
    } catch (e) {
      urls = Array.from(new Set(urls));
    }

    const token = resetTransfer(urls);
    state.note = selection.mobile ? 'mobile asset set' : 'full asset set';
    render(true);

    const timeoutMs = selection.mobile ? MOBILE_TIMEOUT_MS : MAP_TIMEOUT_MS;
    let timedOut = false;
    const timer = window.setTimeout(() => {
      timedOut = true;
      try { abort.abort(); } catch (e) {}
    }, timeoutMs);

    let outcome = { cancelled: false };
    try {
      outcome = await downloadAll(urls, { signal: abort.signal, concurrency: baseConcurrency(), token });
    } catch (e) {
      outcome = { cancelled: true };
    } finally {
      window.clearTimeout(timer);
    }

    if (outcome && outcome.cancelled && !timedOut) {
      // User cancelled: stay on the menu instead of starting the match.
      state.phase = 'idle';
      hide();
      return;
    }

    if (timedOut) state.note = 'large cache timed out; the game will stream the rest';
    warmed.core = true;
    warmed.selection = selection.key;
    state.phase = 'pass';
    state.gameStage = 'STARTING MATCH';
    render(true);

    try {
      btn.click();
    } catch (e) {}

    window.setTimeout(() => {
      if (state.phase === 'pass') state.phase = 'idle';
      render(true);
    }, 0);
  }

  function tick() {
    try {
      const g = game();
      if (g) hookProgress(g);
      if (state.phase === 'preloading') {
        show('full');
        return;
      }

      const ts = teamSelect();
      const joining = !!(g && (g._joining || g._starting));
      const inTeamSelect = !!(g && g.state === 'teamselect' && ts);

      if (joining || inTeamSelect) {
        if (ts && !ts.classList.contains('tsloading')) show('compact');
        else show('full');
        return;
      }

      if (g && g.state === 'playing' && !ts) {
        if (!state.readyAt) state.readyAt = Date.now();
        if (Date.now() - state.readyAt > 900) hide();
        else show('full');
        return;
      }

      state.readyAt = 0;
      hide();
      if (!idleScheduled) idleWarm();
    } catch (e) {}
  }

  loadSeen();
  observeFetch();
  applyHardwareMode();
  document.addEventListener('click', onPlayCapture, true);
  window.setInterval(tick, 120);
  tick();
  idleWarm();

  window.__joinScreen = {
    status() {
      return {
        phase: state.phase,
        shownPct: Math.round(state.shownPct),
        gamePct: state.gamePct,
        gameStage: state.gameStage,
        downloadedMB: Math.round((state.downloaded / 1048576) * 10) / 10,
        files: state.filesDone + '/' + state.filesTotal,
        failed: state.failed,
        lowFx: document.documentElement.classList.contains('js-lowfx')
      };
    },
    cancel: cancelPreload
  };
})();
