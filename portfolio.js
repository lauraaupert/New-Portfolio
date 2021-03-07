
// var swiper = new Swiper('.swiper-container');

// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });

var text = new Swiper('.acc-text', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,

})


var swiper = new Swiper('.top-container', {
  effect: 'coverflow',
  centeredSlides: true,
  mousewheel: {
    forceToAxis: true,

  },
  keyboard: {
    enabled: true,
  },
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 40,
    stretch: -140,
    depth: 500,
    modifier: 1,

    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
     // Navigation arrows
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    controller: {
      by: 'slide',
      control: text,
      inverse: false,
    },
    // thumbs: {
    //   swiper: text,
    //   autoScrollOffset: 1,
    // }
    // thumbs: {
    //   swiper: galleryThumbs,
    // },

});

// touchRatio: 0.2,
// slideToClickedSlide: true,


/* For future developments
var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
      
    //   // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })*/