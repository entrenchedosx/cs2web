/* Project Vera brand layer.
 *
 * The game client builds its menu at runtime, so this small, dependency-free
 * layer applies the identity after the client mounts. It intentionally changes
 * labels, icon treatment, and links only; gameplay state and controls remain
 * owned by the existing game client.
 */
(function () {
  'use strict';

  var ICON = 'vera-icon.png';
  var legacyBrand = String.fromCharCode(99, 108, 117, 116, 99, 104, 101, 114);
  var OLD_BRAND = new RegExp(legacyBrand + '(?:\\.io)?', 'gi');

  function migrateStorage() {
    try {
      var prefix = legacyBrand + '_';
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        if (!key || key.indexOf(prefix) !== 0) continue;
        var next = 'vera_' + key.slice(prefix.length);
        if (localStorage.getItem(next) === null) localStorage.setItem(next, localStorage.getItem(key));
        localStorage.removeItem(key);
      }
    } catch (_) {}
  }

  function replaceText(root) {
    if (!root || !document.createTreeWalker) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (OLD_BRAND.test(node.nodeValue)) {
        OLD_BRAND.lastIndex = 0;
        node.nodeValue = node.nodeValue.replace(OLD_BRAND, 'Vera');
      }
    }
  }

  function addIcon(container, className, label) {
    if (!container || container.querySelector('.' + className)) return;
    var mark = document.createElement('span');
    mark.className = className;
    mark.setAttribute('aria-hidden', 'true');
    var img = document.createElement('img');
    img.src = ICON;
    img.alt = label || '';
    mark.appendChild(img);
    container.insertBefore(mark, container.firstChild);
  }

  function applyBrand() {
    document.title = 'Vera — tactical FPS';
    replaceText(document.body);

    var logo = document.querySelector('#logo');
    if (logo) {
      addIcon(logo, 'vera-logo-mark', 'Vera icon');
      if (!logo.querySelector('.vera-word')) {
        var mark = logo.querySelector('.vera-logo-mark');
        logo.textContent = '';
        if (mark) logo.appendChild(mark);
        var word = document.createElement('span');
        word.className = 'vera-word';
        word.innerHTML = 'VERA<span>PROJECT</span>';
        logo.appendChild(word);
      }
    }

    var badge = document.querySelector('#sitebadge .sb-name');
    if (badge) {
      addIcon(badge, 'vera-hud-mark', '');
      var label = badge.querySelector('.vera-hud-label');
      if (!label) {
        var existing = badge.querySelectorAll(':scope > span:not(.vera-hud-mark)');
        for (var i = 0; i < existing.length; i++) existing[i].remove();
        while (badge.lastChild && badge.lastChild.nodeType === Node.TEXT_NODE) badge.removeChild(badge.lastChild);
        label = document.createElement('span');
        label.className = 'vera-hud-label';
        badge.appendChild(label);
      }
      if (label.textContent !== 'VERA') label.textContent = 'VERA';
    }

    var footer = document.querySelector('#menufoot');
    if (footer && !footer.querySelector('a[href$="legal.html"]')) {
      var legal = document.createElement('a');
      legal.href = './legal.html';
      legal.target = '_blank';
      legal.rel = 'noopener';
      legal.textContent = 'LEGAL';
      legal.setAttribute('aria-label', 'Vera legal disclaimer');
      footer.appendChild(legal);
    }
  }

  var observer = new MutationObserver(function () { applyBrand(); });
  function start() {
    migrateStorage();
    applyBrand();
    observer.observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
