// ── NAVBAR HTML ──────────────────────
const VISTA_NAVBAR = `


<!-- NAVBAR -->

  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <img src="/img/VMT_logo_High_res_2.3_page-0001-removebg-preview.png" alt="Vista My Trip" onerror="this.style.display='none'">
    </a>
    <div class="nav-links">
      <a href="/"                         class="nav-link">Home</a>
      <a href="/holiday-package.html"               class="nav-link">🏔️ India Tours</a>
      <a href="/international-holiday-package.html" class="nav-link">✈️ International</a>
      <a href="/weekend-getaways.html"              class="nav-link">🚗 Weekend Trips</a>
      <a href="/corporate-tours.html"               class="nav-link">💼 Corporate</a>
      <a href="/about-us.html"                      class="nav-link">About</a>
      <a href="/blog.html"                          class="nav-link">Blog</a>
      <a href="/contact.html"                       class="nav-link">Contact</a>
    </div>
    <div class="nav-end">
      <a href="/tel:+919220161414" class="nav-phone"><i class="fa-solid fa-phone"></i> +91 92201 61414</a>
      <a href="/contact.html" class="btn-red"><i class="fa-solid fa-paper-plane"></i> Free Quote</a>
    </div>
    <button class="burger-btn" id="burgerBtn" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>
  `;

const VISTA_MOB_NAVBAR = `

<!-- HAMBURGER DRAWER -->

  <div class="mob-drawer-backdrop" id="mobBackdrop"></div>
  <div class="mob-drawer-panel">
    <div class="mob-panel-head">
      <a href="/" class="logo"><img src="/img/VMT_logo_High_res_2.3_page-0001-removebg-preview.png" alt="Vista My Trip" style="height:42px;" onerror="this.style.display='none'"></a>
      <button class="mob-close-btn" id="mobClose" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <nav class="mob-panel-links">
      <a href="/"                         class="mob-panel-link"><i class="fa-solid fa-house"></i> Home</a>
      <a href="/holiday-package.html"               class="mob-panel-link"><i class="fa-solid fa-mountain-sun"></i> India Tours</a>
      <a href="/international-holiday-package.html" class="mob-panel-link"><i class="fa-solid fa-earth-asia"></i> International</a>
      <a href="/weekend-getaways.html"              class="mob-panel-link"><i class="fa-solid fa-car"></i> Weekend Trips</a>
      <a href="/corporate-tours.html"               class="mob-panel-link"><i class="fa-solid fa-briefcase"></i> Corporate Tours</a>
      <a href="/about-us.html"                      class="mob-panel-link"><i class="fa-solid fa-circle-info"></i> About Us</a>
      <a href="/blog.html"                          class="mob-panel-link"><i class="fa-solid fa-newspaper"></i> Blog</a>
      <a href="/contact.html"                       class="mob-panel-link"><i class="fa-solid fa-envelope"></i> Contact</a>
    </nav>
    <div class="mob-panel-cta">
      <a href="/tel:+919220161414" class="btn-navy"><i class="fa-solid fa-phone"></i> +91-92-20-16-14-14</a>
      <a href="/contact.html" class="btn-red"><i class="fa-solid fa-paper-plane"></i> Get Free Quote</a>
    </div>
  </div>

  `;


// ── FOOTER HTML ──────────────────────
const VISTA_FOOTER = `
<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="ft-brand">
        <div class="logo"><img src="/img/VMT-LOGO-WHITE.png" alt="Vista My Trip" onerror="this.style.display='none'" style="height:80px;"></div>
        <div class="ft-tagline">Premium Quality, Perfect Journey....</div>
        <p>We craft unforgettable journeys across India and the world — tailored to your dreams, delivered with care.</p>
        <div class="socials">
          <a href="/https:/www.facebook.com/vistamytrips"  class="soc" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="/https:/www.instagram.com/vistamytrip"  class="soc" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="/https:/www.youtube.com/@VistaMyTrip"   class="soc" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          <a href="/https:/x.com/vistamytrip"              class="soc" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="/https:/www.linkedin.com/company/vistamytrip" class="soc" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="/https:/wa.me/919220161414"             class="soc wa" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="ft-col">
        <h4>India Tours</h4>
        <div class="ft-links">
          <a href="/packages-tour-india/explore-kashmir.html"><i class="fa-solid fa-chevron-right"></i>Kashmir</a>
          <a href="/packages-tour-india/ladakh.html"><i class="fa-solid fa-chevron-right"></i>Ladakh</a>
          <a href="/packages-tour-india/kerala.html"><i class="fa-solid fa-chevron-right"></i>Kerala</a>
          <a href="/packages-tour-india/rajasthan.html"><i class="fa-solid fa-chevron-right"></i>Rajasthan</a>
          <a href="/packages-tour-india/spiti-valley.html"><i class="fa-solid fa-chevron-right"></i>Spiti Valley</a>
          <a href="/packages-tour-india/andaman.html"><i class="fa-solid fa-chevron-right"></i>Andaman</a>
          <a href="/packages-tour-india/chardham-yatra.html"><i class="fa-solid fa-chevron-right"></i>Chardham Yatra</a>
          <a href="/packages-tour-india/sikkim.html"><i class="fa-solid fa-chevron-right"></i>Sikkim</a>
        </div>
      </div>
      <div class="ft-col">
        <h4>International</h4>
        <div class="ft-links">
          <a href="/packages-tour-international/bali.html"><i class="fa-solid fa-chevron-right"></i>Bali</a>
          <a href="/packages-tour-international/dubai.html"><i class="fa-solid fa-chevron-right"></i>Dubai</a>
          <a href="/packages-tour-international/maldives.html"><i class="fa-solid fa-chevron-right"></i>Maldives</a>
          <a href="/packages-tour-international/thailand.html"><i class="fa-solid fa-chevron-right"></i>Thailand</a>
          <a href="/packages-tour-international/singapore.html"><i class="fa-solid fa-chevron-right"></i>Singapore</a>
          <a href="/packages-tour-international/europe.html"><i class="fa-solid fa-chevron-right"></i>Europe</a>
          <a href="/packages-tour-international/vietnam.html"><i class="fa-solid fa-chevron-right"></i>Vietnam</a>
          <a href="/packages-tour-international/malaysia.html"><i class="fa-solid fa-chevron-right"></i>Malaysia</a>
        </div>
      </div>
      <div class="ft-col">
        <h4>Contact Us</h4>
       <div class="c-list">

  <div class="c-item">
    <i class="fa-solid fa-phone"></i>
    <a href="/tel:+919220161414">+91 92201 61414</a>
  </div>

  <div class="c-item">
    <i class="fa-brands fa-whatsapp"></i>
    <a href="/https:/wa.me/919220161414" target="_blank">+91 92201 61414</a>
  </div>

  <div class="c-item">
    <i class="fa-solid fa-envelope"></i>
    <a href="/mailto:info@vistamytrip.com">info@vistamytrip.com</a>
  </div>

  <div class="c-item">
    <i class="fa-solid fa-location-dot"></i>
    <a href="/https:/maps.app.goo.gl/pwEzBjkqj5YYyT7AA" target="_blank">
      Ground floor, Puri 81 Business Hub, D-015, High Street, Sector 81, Faridabad, Haryana 121007
    </a>
  </div>

</div>
        <h4 style="margin-top:22px;">Quick Links</h4>
        <div class="ft-links" style="margin-top:10px;">
          <a href="/about-us.html"><i class="fa-solid fa-chevron-right"></i>About Us</a>
          <a href="/blog.html"><i class="fa-solid fa-chevron-right"></i>Travel Blog</a>
          <a href="/privacy-policy.html"><i class="fa-solid fa-chevron-right"></i>Privacy Policy</a>
          <a href="/terms-and-conditions.html"><i class="fa-solid fa-chevron-right"></i>Terms & Conditions</a>
        </div>
      </div>
    </div>
    <div class="ft-bottom">
      <p>&copy; ${new Date().getFullYear()} Vista My Trip Pvt. Ltd. All rights reserved. | Developed &amp; Managed by <a href="/https:/lso360seoplugin.com/" target="_blank" rel="noopener noreferrer"><u>Advertising India</u></a></p>
      <div class="ft-blinks">
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms-and-conditions.html">Terms</a>
        <a href="/cancelation-refund-policy.html">Refund Policy</a>
      </div>
    </div>
  </div>
</footer>

<a href="/https:/wa.me/919220161414" class="wa-fab" target="_blank" title="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp"></i>
</a>
`;

// ── INJECT & ACTIVATE ────────────────
(function () {
  // Inject navbar
  const navEl = document.getElementById('navbar-placeholder');
  if (navEl) navEl.innerHTML = VISTA_NAVBAR;

  // Inject footer
  const footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.innerHTML = VISTA_FOOTER;

  const mobEl = document.getElementById('mobDrawer');
  if (mobEl) mobEl.innerHTML = VISTA_MOB_NAVBAR;

  /* ── Drawer Logic ──────────────── */
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



  // Set active nav link based on current filename
  const currentPath = window.location.pathname;
  const page = currentPath.split('/').pop();
  document.querySelectorAll('.nav-links a, .mob-panel-links a').forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === currentPath || (page && href === '/' + page) || (!page && href === '/')) {
      a.classList.add('active');
    }
  });
})();
