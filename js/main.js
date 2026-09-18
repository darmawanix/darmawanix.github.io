// ==========================================================================
// BOS — personal digital lab
// Minimal vanilla JS. No frameworks, no build step.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Mobile menu toggle ---- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('icon-open');
  const menuIconClose = document.getElementById('icon-close');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuIconOpen.classList.toggle('hidden', isOpen);
      menuIconClose.classList.toggle('hidden', !isOpen);
    });

    // Close menu after tapping a link
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  /* ---- Nav background on scroll (subtle, not a fade animation) ---- */
  const nav = document.getElementById('site-nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) {
        nav.classList.add('bg-[#0a0a0a]/90', 'backdrop-blur-sm');
      } else {
        nav.classList.remove('bg-[#0a0a0a]/90', 'backdrop-blur-sm');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
});
