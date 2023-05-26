$('.about-company__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 12,
    // autoplay: true,
    prevArrow: $('.about-company__arrow.prev'),
    nextArrow: $('.about-company__arrow.next'),

    responsive: [
      {
        breakpoint: 1249,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });


  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
