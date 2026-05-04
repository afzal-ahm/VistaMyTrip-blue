/* ═══════════════════════════════════════
   VISTA MY TRIP — main.js
   All interactive JS separated from HTML
═══════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Destination filter tabs (homepage) ── */
  function filterDest(cat, btn, noScroll) {
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.remove('on'); });
    if (btn) btn.classList.add('on');
    document.querySelectorAll('.dest-card').forEach(function (card) {
      if (cat === 'all') {
        card.style.display = '';
      } else {
        var cats = (card.dataset.cat || '').split(' ');
        card.style.display = cats.includes(cat) ? '' : 'none';
      }
    });

    if (!noScroll) {
      var destGrid = document.querySelector('.dest-grid');
      if (destGrid) {
        var section = destGrid.closest('section');
        if (section) {
          var offset = 120;
          var y = section.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  }
  // Expose globally for inline onclick (keep backward compat)
  window.filterDest = filterDest;

  /* ── Package filter chips (inner pages) ── */
  function filterPkgs(cat, btn, noScroll) {
    document.querySelectorAll('.filter-chip').forEach(function (b) { b.classList.remove('on'); });
    if (btn) btn.classList.add('on');
    document.querySelectorAll('.pkg-card').forEach(function (card) {
      if (cat === 'all') {
        card.style.display = '';
      } else {
        var cats = (card.dataset.pkgCat || '').split(' ');
        card.style.display = cats.includes(cat) ? '' : 'none';
      }
    });

    if (!noScroll) {
      var pkgGrid = document.querySelector('.pkg-grid');
      if (pkgGrid) {
        var section = pkgGrid.closest('section');
        if (section) {
          var offset = 160; 
          var y = section.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  }
  window.filterPkgs = filterPkgs;

  function applyThemeFilterFromQuery() {
    var params = new URLSearchParams(window.location.search);
    var theme = params.get('theme');

    if (!theme) return;

    var targetButton = document.querySelector('.filter-chip[data-filter="' + theme + '"]');
    if (targetButton) {
      filterPkgs(theme, targetButton, true);
    }
  }

  applyThemeFilterFromQuery();

  /* ── Hero Search Form (Homepage) ── */
  function handleSearch() {
    var dest = document.getElementById('search-dest');

    if (dest && !dest.value) {
      alert('Please select a destination to proceed.');
      return;
    }

    // Redirect directly to the selected destination page
    window.location.href = dest.value;
  }
  window.handleSearch = handleSearch;

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
  var currentPath = window.location.pathname;
  var pageName = currentPath.split('/').pop();
  document.querySelectorAll('.nav-link, .mob-panel-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (pageName && href === '/' + pageName) || (!pageName && href === '/')) {
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
  
  /* ── Popup Modal Logic ── */
  function openInquiryModal(packageName) {
    var modal = document.getElementById('inquiryModal');
    var nameText = document.getElementById('modalPackageNameText');
    var nameInput = document.getElementById('modalPackageNameInput');
    
    if (modal && nameText && nameInput) {
      nameText.textContent = packageName || "Custom Holiday Package";
      nameInput.value = packageName || "Custom Holiday Package";
      
      // Reset form view in case it was previously submitted
      document.getElementById('inquiryForm').style.display = 'block';
      document.getElementById('inquirySuccessMsg').style.display = 'none';
      
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }
  window.openInquiryModal = openInquiryModal;

  // Handle Form Submission to Google Sheets
  document.addEventListener('submit', function(e) {
    if (e.target && (e.target.id === 'inquiryForm' || e.target.id === 'contactForm')) {
      e.preventDefault();
      
      var form = e.target;
      var isContact = form.id === 'contactForm';
      var btnId = isContact ? 'contactSubmitBtn' : 'inquirySubmitBtn';
      var msgId = isContact ? 'contactSuccessMsg' : 'inquirySuccessMsg';
      var noteId = isContact ? 'contactNote' : null;
      
      var btn = document.getElementById(btnId);
      var originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;
      
      var formData = new FormData(form);
      // Replace this URL with your actual Google Apps Script Web App URL
      var googleScriptURL = 'https://script.google.com/macros/s/AKfycbyJo9hEin1APxTsr2K0RYe_e2cjHr_aasaX1kaaNZ3I3BDIT9cyt7yv1y_VS4EEJV6B/exec';
      
      fetch(googleScriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
        .then(response => {
          form.style.display = 'none';
          if (noteId && document.getElementById(noteId)) document.getElementById(noteId).style.display = 'none';
          
          var successMsg = document.getElementById(msgId);
          if (successMsg) successMsg.style.display = 'block';
          
          form.reset();
          btn.innerHTML = originalText;
          btn.disabled = false;
        })
        .catch(error => {
          alert('Something went wrong. Please try again.');
          btn.innerHTML = originalText;
          btn.disabled = false;
        });
    }
  });

  function closeInquiryModal() {
    var modal = document.getElementById('inquiryModal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }
  window.closeInquiryModal = closeInquiryModal;

})();

function scrollThemes(direction) {
    const container = document.querySelector('.theme-grid');
    const scrollAmount = 300;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
