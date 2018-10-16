if ($(".news__slider").length) {
  $(".news__slider").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  });
}

if ($(".menu__slider").length) {
  $(".menu__slider").slick();
}
if ($(".team-slider").length) {
  $(".team-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}
