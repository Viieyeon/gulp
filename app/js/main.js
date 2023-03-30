const menuBtn = document.querySelector('.menu-btn');
const menuMobaile = document.querySelector('.menu-mobile');


menuBtn.addEventListener('click', () => {
  menuMobaile.classList.toggle('menu--open');
});



const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiper_2 = new Swiper('.swiper_2', {
  slidesPerView: "auto",
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: {
        enabled: true,
        sticky: false,
      },
      autoplay: {
        delay: 200000000,
      }
    },

    576: {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: {
        enabled: false,
        sticky: true,
      },
    },

    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});


