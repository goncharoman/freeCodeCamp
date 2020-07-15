$("#cards").slick({
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  prevArrow: $("#customers-prev-arrow"),
  nextArrow: $("#customers-next-arrow"),
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

function slickPlansInit() {
  $("#plans").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#plans > button.slick-arrow").html("");
}

let slickPlans = false;

if ($(window).width() < 1024) {
  slickPlansInit();
  slickPlans = true;
}

$(window).resize(function () {
  if (!slickPlans && $(window).width() < 1024) {
    slickPlansInit();
    slickPlans = true;
  }
  if (slickPlans && $(window).width() >= 1024) {
    console.log("unslick");
    $("#plans").slick("unslick");
    slickPlans = false;
  }
});
