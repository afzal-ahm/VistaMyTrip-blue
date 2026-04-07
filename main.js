/* ═══════════════════════════════════════
   VISTA MY TRIP — main.js
   All interactive JS separated from HTML
═══════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Hamburger / Drawer ── */
  const burgerBtn   = document.getElementById('burgerBtn');
  const mobDrawer   = document.getElementById('mobDrawer');
  const mobClose    = document.getElementById('mobClose');
  const mobBackdrop = document.getElementById('mobBackdrop');

  function openDrawer() {
    if (!mobDrawer) return;
    mobDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    burgerBtn && burgerBtn.classList.add('open');
  }

  function closeDrawer() {
    if (!mobDrawer) return;
    mobDrawer.classList.remove('open');
    document.body.style.overflow = '';
    burgerBtn && burgerBtn.classList.remove('open');
  }

  burgerBtn   && burgerBtn.addEventListener('click', openDrawer);
  mobClose    && mobClose.addEventListener('click', closeDrawer);
  mobBackdrop && mobBackdrop.addEventListener('click', closeDrawer);

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // Close on any drawer link click
  document.querySelectorAll('.mob-panel-link').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  /* ── Destination filter tabs (homepage) ── */
  function filterDest(cat, btn) {
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.remove('on'); });
    btn.classList.add('on');
    document.querySelectorAll('.dest-card').forEach(function (card) {
      if (cat === 'all') {
        card.style.display = '';
      } else {
        var cats = (card.dataset.cat || '').split(' ');
        card.style.display = cats.includes(cat) ? '' : 'none';
      }
    });
  }
  // Expose globally for inline onclick (keep backward compat)
  window.filterDest = filterDest;

  /* ── Package filter chips (inner pages) ── */
  function filterPkgs(cat, btn) {
    document.querySelectorAll('.filter-chip').forEach(function (b) { b.classList.remove('on'); });
    btn.classList.add('on');
    document.querySelectorAll('[data-pkg-cat]').forEach(function (card) {
      if (cat === 'all') {
        card.style.display = '';
      } else {
        var cats = (card.dataset.pkgCat || '').split(' ');
        card.style.display = cats.includes(cat) ? '' : 'none';
      }
    });
  }
  window.filterPkgs = filterPkgs;

  /* ── Sticky nav shrink on scroll ── */
  var siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        siteNav.style.boxShadow = '0 4px 20px rgba(10,47,95,.12)';
      } else {
        siteNav.style.boxShadow = '';
      }
    });
  }

  /* ── Active nav link highlight ── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });

})();
