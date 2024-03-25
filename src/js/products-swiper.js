const swiper = new Swiper('.swiper-products', {
  direction: 'horizontal',
  autoHeight: true,
  loop: true,
  slidesPerView: '1',

  spaceBetween: 16,

  freeMode: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoHeight: true,
  breakpoints: {
    768: {
      spaceBetween: 18,
      slidesPerView: '2.51',
    },
    1200: {
      spaceBetween: 18,
      slidesPerView: '4',
    },
  },
});