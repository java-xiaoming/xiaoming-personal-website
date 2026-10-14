/* ============================================================
   智小天高保真原型 - 通用交互
   挂载到 window.ZXT
   ============================================================ */
(function () {
  'use strict';

  var ZXT = {};

  /* ---------- DOM ready ---------- */
  ZXT.ready = function (fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  /* ---------- 图标辅助 ---------- */
  // 由于 file:// 下外链 SVG sprite 可能不被某些浏览器加载，
  // 提供 fallback：将 <svg><use href="icons.svg#id"></use></svg> 替换为内联。
  // 为简化，原型直接在 HTML 中内联 svg 符号引用；此函数保留用于未来扩展。
  ZXT.icon = function (name, cls) {
    return '<svg class="zxt-icon ' + (cls || '') + '"><use href="../shared/icons.svg#i-' + name + '"/></svg>';
  };

  /* ---------- Toast ---------- */
  ZXT.toast = (function () {
    var wrap;
    function ensureWrap() {
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'zxt-toast-wrap';
        document.body.appendChild(wrap);
      }
      return wrap;
    }
    function show(msg, type) {
      type = type || 'info';
      var el = document.createElement('div');
      el.className = 'zxt-toast zxt-toast--' + type;
      var iconMap = { success: 'check-circle', error: 'x-circle', info: 'sparkles' };
      el.innerHTML = '<svg class="zxt-icon zxt-toast__icon"><use href="../shared/icons.svg#i-' + (iconMap[type] || 'sparkles') + '"/></svg>' +
        '<span>' + msg + '</span>';
      ensureWrap().appendChild(el);
      setTimeout(function () {
        el.style.opacity = '0';
        el.style.transform = 'translateX(20px)';
        el.style.transition = 'all .25s';
        setTimeout(function () { el.remove(); }, 260);
      }, 2600);
    }
    return { show: show };
  })();

  /* ---------- Modal ---------- */
  ZXT.modal = (function () {
    function open(id) {
      var m = document.getElementById(id);
      if (m) {
        m.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }
    function close(id) {
      var m = document.getElementById(id);
      if (m) {
        m.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }
    function init() {
      document.addEventListener('click', function (e) {
        var opener = e.target.closest('[data-modal-open]');
        if (opener) { e.preventDefault(); open(opener.getAttribute('data-modal-open')); return; }
        var closer = e.target.closest('[data-modal-close]');
        if (closer) { e.preventDefault();
          var id = closer.getAttribute('data-modal-close');
          if (id === 'mask') {
            // 点遮罩关闭
            var mask = closer.classList.contains('zxt-modal-mask') ? closer : closer.closest('.zxt-modal-mask');
            if (mask) mask.classList.remove('is-open');
          } else { close(id); }
          if (document.querySelectorAll('.zxt-modal-mask.is-open').length === 0) document.body.style.overflow = '';
          return;
        }
        // 点击遮罩本身关闭
        if (e.target.classList && e.target.classList.contains('zxt-modal-mask')) {
          e.target.classList.remove('is-open');
          if (document.querySelectorAll('.zxt-modal-mask.is-open').length === 0) document.body.style.overflow = '';
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          var openMasks = document.querySelectorAll('.zxt-modal-mask.is-open');
          openMasks.forEach(function (m) { m.classList.remove('is-open'); });
          if (openMasks.length) document.body.style.overflow = '';
        }
      });
    }
    return { open: open, close: close, init: init };
  })();

  /* ---------- Tab 切换 ---------- */
  // [data-tabs] 容器，内部 .zxt-tabs__item[data-tab="x"] 与 [data-tab-panel="x"]
  ZXT.tabs = (function () {
    function init(root) {
      root = root || document;
      root.querySelectorAll('[data-tabs]').forEach(function (container) {
        var items = container.querySelectorAll('.zxt-tabs__item[data-tab]');
        items.forEach(function (item) {
          item.addEventListener('click', function () {
            var name = item.getAttribute('data-tab');
            items.forEach(function (i) { i.classList.toggle('is-active', i === item); });
            var scope = container.getAttribute('data-tabs-scope');
            var panels = scope ? document.querySelectorAll('[data-tabs-scope="' + scope + '"] [data-tab-panel]')
                               : container.parentElement.querySelectorAll('[data-tab-panel]');
            panels.forEach(function (p) {
              p.style.display = (p.getAttribute('data-tab-panel') === name) ? '' : 'none';
            });
            if (container._onChange) container._onChange(name);
          });
        });
      });
    }
    return { init: init };
  })();

  /* ---------- Segmented 分段控件 ---------- */
  ZXT.segmented = (function () {
    function init(root) {
      root = root || document;
      root.querySelectorAll('.zxt-segmented').forEach(function (seg) {
        seg.querySelectorAll('.zxt-segmented__item').forEach(function (item) {
          item.addEventListener('click', function () {
            seg.querySelectorAll('.zxt-segmented__item').forEach(function (i) { i.classList.remove('is-active'); });
            item.classList.add('is-active');
            if (seg._onChange) seg._onChange(item.getAttribute('data-value'));
          });
        });
      });
    }
    return { init: init };
  })();

  /* ---------- Chip 选择 ---------- */
  ZXT.chipGroup = (function () {
    function init(root) {
      root = root || document;
      root.querySelectorAll('[data-chip-group]').forEach(function (group) {
        var multi = group.getAttribute('data-chip-multi') === 'true';
        group.querySelectorAll('.zxt-chip').forEach(function (chip) {
          chip.addEventListener('click', function () {
            if (multi) {
              chip.classList.toggle('is-active');
            } else {
              group.querySelectorAll('.zxt-chip').forEach(function (c) { c.classList.remove('is-active'); });
              chip.classList.add('is-active');
            }
            if (group._onChange) group._onChange(getSelected(group));
          });
        });
      });
    }
    function getSelected(group) {
      var selected = [];
      group.querySelectorAll('.zxt-chip.is-active').forEach(function (c) {
        selected.push(c.getAttribute('data-value') || c.textContent.trim());
      });
      return selected;
    }
    return { init: init, getSelected: getSelected };
  })();

  /* ---------- 字数计数器 ---------- */
  ZXT.counter = (function () {
    function attach(input, max) {
      var counter = document.createElement('div');
      counter.className = 'zxt-counter';
      input.parentElement.appendChild(counter);
      function update() { counter.textContent = input.value.length + ' / ' + max; }
      input.addEventListener('input', update);
      update();
    }
    function init(root) {
      root = root || document;
      root.querySelectorAll('textarea[data-maxlength], input[data-maxlength]').forEach(function (el) {
        attach(el, parseInt(el.getAttribute('data-maxlength'), 10));
      });
    }
    return { attach: attach, init: init };
  })();

  /* ---------- 进度条动画 ---------- */
  ZXT.progress = {
    animate: function (bar, target, duration) {
      duration = duration || 1000;
      var start = parseFloat(bar.style.width) || 0;
      var startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        var p = Math.min((ts - startTime) / duration, 1);
        var val = start + (target - start) * p;
        bar.style.width = val + '%';
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  };

  /* ---------- 假文件上传（不读文件内容） ---------- */
  ZXT.upload = {
    simulate: function (input, onPick) {
      input.addEventListener('change', function () {
        if (input.files && input.files[0]) {
          var f = input.files[0];
          onPick({ name: f.name, size: f.size, sizeText: formatSize(f.size) });
        }
      });
    }
  };

  function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  }

  /* ---------- 假录音（计时 + 波形） ---------- */
  ZXT.recorder = {
    mount: function (btn, opts) {
      opts = opts || {};
      var minSec = opts.minSeconds || 30;
      var display = opts.display;
      var waveform = opts.waveform;
      var onStop = opts.onStop;
      var recording = false;
      var seconds = 0;
      var timer = null;
      var waveTimer = null;

      btn.addEventListener('click', function () {
        if (!recording) {
          recording = true;
          seconds = 0;
          btn.classList.add('is-recording');
          if (display) display.textContent = '00:00';
          timer = setInterval(function () {
            seconds++;
            if (display) display.textContent = formatTime(seconds);
          }, 1000);
          if (waveform) {
            waveTimer = setInterval(function () {
              waveform.querySelectorAll('.zxt-waveform__bar').forEach(function (bar) {
                bar.style.height = (20 + Math.random() * 60) + '%';
              });
            }, 120);
          }
        } else {
          recording = false;
          btn.classList.remove('is-recording');
          clearInterval(timer);
          clearInterval(waveTimer);
          if (onStop) onStop({ seconds: seconds, enough: seconds >= minSec });
        }
      });
    }
  };

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }

  /* ---------- 波形渲染 ---------- */
  ZXT.waveform = {
    mount: function (el, bars) {
      bars = bars || 32;
      el.innerHTML = '';
      for (var i = 0; i < bars; i++) {
        var bar = document.createElement('div');
        bar.className = 'zxt-waveform__bar';
        bar.style.height = (20 + Math.random() * 60) + '%';
        el.appendChild(bar);
      }
    },
    animate: function (el, on) {
      if (on) {
        el._waveTimer = setInterval(function () {
          el.querySelectorAll('.zxt-waveform__bar').forEach(function (bar) {
            bar.style.height = (20 + Math.random() * 60) + '%';
          });
        }, 150);
      } else {
        clearInterval(el._waveTimer);
      }
    }
  };

  /* ---------- 步骤器（横向） ---------- */
  ZXT.stepper = {
    setActive: function (root, index) {
      var items = root.querySelectorAll('.zxt-stepper__item');
      items.forEach(function (item, i) {
        item.classList.remove('is-active', 'is-done');
        if (i < index) item.classList.add('is-done');
        else if (i === index) item.classList.add('is-active');
      });
    }
  };

  /* ---------- 通用初始化 ---------- */
  ZXT.init = function () {
    ZXT.modal.init();
    ZXT.tabs.init();
    ZXT.segmented.init();
    ZXT.chipGroup.init();
    ZXT.counter.init();
  };

  ZXT.ready(ZXT.init);
  window.ZXT = ZXT;
})();
