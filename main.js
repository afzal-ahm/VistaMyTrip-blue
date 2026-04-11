/* ═══════════════════════════════════════
   VISTA MY TRIP — main.js
   All interactive JS separated from HTML
═══════════════════════════════════════ */

(function () {
  'use strict';

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
  var currentPage = window.location.pathname.split('/').pop() || '/';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ── Trip galleries (detail pages) ── */
  document.querySelectorAll('[data-trip-gallery]').forEach(function (gallery) {
    var slides = Array.from(gallery.querySelectorAll('.trip-gallery-slide'));
    var thumbs = Array.from(gallery.querySelectorAll('.trip-gallery-thumb'));
    var prev = gallery.querySelector('.trip-gallery-nav.prev');
    var next = gallery.querySelector('.trip-gallery-nav.next');
    var count = gallery.querySelector('.trip-gallery-count');
    var index = 0;

    if (!slides.length) return;

    function renderGallery(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === index);
      });
      thumbs.forEach(function (thumb, thumbIndex) {
        thumb.classList.toggle('active', thumbIndex === index);
      });
      if (count) {
        count.textContent = (index + 1) + ' / ' + slides.length;
      }
    }

    prev && prev.addEventListener('click', function () {
      renderGallery(index - 1);
    });

    next && next.addEventListener('click', function () {
      renderGallery(index + 1);
    });

    thumbs.forEach(function (thumb, thumbIndex) {
      thumb.addEventListener('click', function () {
        renderGallery(thumbIndex);
      });
    });

    renderGallery(0);
  });

})();

function scrollThemes(direction) {
    const container = document.querySelector('.theme-grid');
    const scrollAmount = 300;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
