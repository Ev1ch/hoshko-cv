export const POSTS_SLIDER_OPTIONS = {
  pagination: {
    el: '.posts__pagination',
    bulletClass: 'posts__bullet',
    bulletActiveClass: 'posts__bullet--active',
    clickable: true,
  },
  slideClass: 'slide',
  spaceBetween: 80,
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    disabledClass: 'posts__arrow--disabled',
    nextEl: '.posts__arrow--right',
    prevEl: '.posts__arrow--left',
  },
};

export const POSTS_SLIDER_ROOT = '.posts';
