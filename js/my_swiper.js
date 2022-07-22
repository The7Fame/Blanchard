/*Главная*/
let mainSwiper = new Swiper('.main-slider', {
  wrapperClass: 'main-slider__wrapper',
  slideClass: 'main-slider__slide',
  loop: true,
  autoplay: {
    delay: 2000,
  },
})

/*Галерея*/
let gallerySwiper = new Swiper('.gallery-slider', {
  wrapperClass: 'gallery-slider__wrapper',
  slideClass: 'gallery-slider__slide',

  pagination: {
    el: '.gallery-nav__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery-nav__bnt-next',
    prevEl: '.gallery-nav__bnt-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущие картины',
    nextSlideMessage: 'Следующие картины',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchSlidesProgress:true,
  slideVisibleClass: 'swiper-slide-visible',
  on: {
    init: function () {
      this.slides.forEach(function (slide) {
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
        }
        else {
          slide.tabIndex = "";
        }
      })
    },
    slideChange: function () {
      this.slides.forEach(function (slide) {
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
        }
        else {
          slide.tabIndex = "";
        }
      })
    },
  },
})

/*События*/
let eventsSwiper = new Swiper('.events-slider', {
  wrapperClass: 'events-slider__wrapper',
  slideClass: 'events-slider__slide',

  navigation: {
    nextEl: '.events__btn-next',
    prevEl: '.events__btn-prev',
  },

  pagination: {
    el: '.events-slider__pagination',
    type: 'bullets',
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,


  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущие события',
    nextSlideMessage: 'Следующие события',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
    paginationBulletMessage: 'Перейти к событиям {{index}}',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchSlidesProgress:true,
  slideVisibleClass: 'swiper-slide-visible',
  on: {
    init: function () {
      this.slides.forEach(function (slide) {
        let slideLinks = slide.querySelector('.article__link');
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
          slideLinks.tabIndex = "-1";
        }
        else {
          slide.tabIndex = "";
          slideLinks.tabIndex = "";
        }
      })
    },
    slideChange: function () {
      this.slides.forEach(function (slide) {
        let slideLinks = slide.querySelector('.article__link');
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
          slideLinks.tabIndex = "-1";
        }
        else {
          slide.tabIndex = "";
          slideLinks.tabIndex = "";
        }
      })
    },
  },
})

/*Проекты*/
let projectsSwiper = new Swiper('.projects-slider', {
  wrapperClass: 'projects-slider__wrapper',
  slideClass: 'projects-slider__slide',

  navigation: {
    nextEl: '.projects__btn-next',
    prevEl: '.projects__btn-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущие партнеры',
    nextSlideMessage: 'Следующие партнеры',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchSlidesProgress:true,
  slideVisibleClass: 'swiper-slide-visible',
  on: {
    init: function () {
      this.slides.forEach(function (slide) {
        slide.tabIndex = "-1";
        let slideLink = slide.querySelector('.projects-slider__link');
        if (!slide.classList.contains("swiper-slide-visible")) {
          slideLink.tabIndex = "-1";
          }
        else {
          slideLink.tabIndex = "";
        }
      })
    },
    slideChange: function () {
      this.slides.forEach(function (slide) {
        slide.tabIndex = "-1";
        let slideLink = slide.childNodes;
        if (!slide.classList.contains("swiper-slide-visible")) {
          slideLink.tabIndex = "-1";
        }
        else {
          slideLink.tabIndex = "";
        }
      })
    },
  },
})
