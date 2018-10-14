if ($(".news__slider").length) {
  $(".news__slider").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
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
    autoplay: true
  });
}

var accordion = document.querySelectorAll(".accordion");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(".parallax-window").parallax({
  imageSrc: "img/manufactura/first-slide-bg.png"
});

//для плавного скролла к якорям
$(document).ready(function() {
  $(".nav").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
