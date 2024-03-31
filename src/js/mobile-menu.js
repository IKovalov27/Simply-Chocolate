(() => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');
  const input = document.getElementById('check');

  const toggleMenu = () => {
    const isMenuOpen =
      toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    toggleMenuBtn.classList.toggle('is-open');
  };

  toggleMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches || !mobileMenu.classList.contains('is-open')) return;

    mobileMenu.classList.remove('is-open');
    toggleMenuBtn.classList.remove('is-open');
    toggleMenuBtn.setAttribute('aria-expanded', false);
  });
})();