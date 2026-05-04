/* ============================================================
   DataPulse — app.js
   Theme toggle · FAQ accordion · Live demo · Signup form
   Zero external dependencies.
   ============================================================ */

'use strict';

/* ── Theme ─────────────────────────────────────────────────── */
(function initTheme() {
  const saved = localStorage.getItem('dp-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = saved === 'dark' ? '🌙' : '☀️';
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('dp-theme', next);
  const btn = document.getElementById('theme-btn');
  if (btn) {
    btn.textContent = next === 'dark' ? '🌙' : '☀️';
    btn.setAttribute('aria-label', 'Toggle color theme');
  }
}

/* ── FAQ accordion ─────────────────────────────────────────── */
function toggleFaq(btn) {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  const targetId = btn.getAttribute('aria-controls');
  const panel    = document.getElementById(targetId);

  // Close all
  document.querySelectorAll('.faq-q').forEach(function (b) {
    b.setAttribute('aria-expanded', 'false');
    const pid = b.getAttribute('aria-controls');
    const p   = document.getElementById(pid);
    if (p) p.hidden = true;
  });

  // Open clicked (if it was closed)
  if (!expanded) {
    btn.setAttribute('aria-expanded', 'true');
    if (panel) panel.hidden = false;
  }
}

/* ── Smooth scroll ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const href   = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

/* ── Live demo simulation ─────────────────────────────────── */
var demoRunning = false;

function runDemo() {
  if (demoRunning) return;
  demoRunning = true;

  var btn       = document.getElementById('demo-btn');
  var statusEl  = document.getElementById('demo-status');
  var valueEl   = document.getElementById('demo-value');
  var metaEl    = document.getElementById('demo-meta');
  var barEl     = document.getElementById('demo-bar');
  var versionEl = document.getElementById('demo-version-tag');
  var card      = document.getElementById('demo-card');
  var steps     = ['pipe-validate', 'pipe-normalize', 'pipe-store'];

  // Reset state
  steps.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('active', 'done');
  });
  if (card)      card.classList.remove('updated');
  if (valueEl)   valueEl.textContent = '—';
  if (metaEl)    metaEl.textContent  = 'sending…';
  if (barEl)     barEl.style.width   = '0%';
  if (versionEl) versionEl.textContent = 'v—';
  if (btn)     { btn.disabled = true; btn.textContent = 'request sent…'; }
  if (statusEl)  statusEl.textContent = '→ POST /api/metrics';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var t = reduced ? [0, 0, 0, 0] : [400, 900, 1500, 2100];

  setTimeout(function () {
    var el = document.getElementById('pipe-validate');
    if (el) el.classList.add('active');
    if (statusEl) statusEl.textContent = '→ validating schema…';
  }, t[0]);

  setTimeout(function () {
    var v = document.getElementById('pipe-validate');
    var n = document.getElementById('pipe-normalize');
    if (v) { v.classList.remove('active'); v.classList.add('done'); }
    if (n) n.classList.add('active');
    if (statusEl) statusEl.textContent = '→ normalizing value…';
  }, t[1]);

  setTimeout(function () {
    var n = document.getElementById('pipe-normalize');
    var s = document.getElementById('pipe-store');
    if (n) { n.classList.remove('active'); n.classList.add('done'); }
    if (s) s.classList.add('active');
    if (statusEl) statusEl.textContent = '→ writing to versioned store…';
  }, t[2]);

  setTimeout(function () {
    var s = document.getElementById('pipe-store');
    if (s) { s.classList.remove('active'); s.classList.add('done'); }

    if (valueEl) valueEl.textContent = '1,243';
    if (metaEl) {
      var now = new Date().toISOString().replace('T', ' ').substring(0, 19) + 'Z';
      metaEl.textContent = 'latency ~2s · ' + now;
    }
    if (barEl)     barEl.style.width = '62%';
    if (versionEl) versionEl.textContent = 'v1';
    if (card) {
      card.classList.add('updated');
      setTimeout(function () { if (card) card.classList.remove('updated'); }, 2000);
    }
    if (statusEl) statusEl.textContent = '✓ stored — active_users: 1243';

    setTimeout(function () {
      if (btn) { btn.disabled = false; btn.textContent = 'Send sample metric'; }
      demoRunning = false;
    }, 1200);

  }, t[3]);
}

/* ── Signup form ───────────────────────────────────────────── */
async function handleSignup(e) {
  e.preventDefault();

  var form     = e.target;
  var emailEl  = form.querySelector('input[type="email"]');
  var statusEl = document.getElementById('cta-form-status');
  var btn      = form.querySelector('button[type="submit"]');

  if (!emailEl || !statusEl || !btn) return;

  var email   = emailEl.value.trim();
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRe.test(email)) {
    statusEl.textContent = 'Please enter a valid email address.';
    statusEl.className   = 'form-status error';
    emailEl.focus();
    return;
  }

  var origText    = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled    = true;
  statusEl.textContent = '';
  statusEl.className   = 'form-status';

  try {
    // Replace YOUR_FORM_ID with your Formspree form ID
    var res = await fetch('https://formspree.io/f/xykoenzg', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify({ email: email })
    });

    if (res.ok) {
      statusEl.textContent = '✓ Received. We will be in touch.';
      statusEl.className   = 'form-status success';
      emailEl.value        = '';
    } else {
      throw new Error('non-ok');
    }
  } catch (_) {
    statusEl.textContent = 'Something went wrong. Email us: hello@datapulse.io';
    statusEl.className   = 'form-status error';
  }

  btn.textContent = origText;
  btn.disabled    = false;
}
