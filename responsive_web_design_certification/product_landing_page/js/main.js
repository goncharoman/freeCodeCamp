$("#cards").slick({
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  prevArrow: $("#prev-arrow"),
  nextArrow: $("#next-arrow"),
  appendDots: $("#dots"),
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1256,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
