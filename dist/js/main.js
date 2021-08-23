$('.owl-carousel').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots: true,
  responsiveClass: true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      500: {
        items: 2,
        nav:true
      },
      768:{
          items:3,
          nav: true
      },
  }
});