if ($(".news__slider").length) {
  $(".news__slider").slick({
    infinite: true,
    // autoplay: true,
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

if ($("._parallax-window").length) {
  $("._parallax-window").parallax({
    imageSrc: "img/manufactura/first-slide-bg.png"
  });
}

if ($("._parallax-window-resto").length) {
  $("._parallax-window-resto").parallax({
    imageSrc: "img/resto/resto-bg.jpg"
  });
}

if ($("._parallax-window-porto").length) {
  $("._parallax-window-porto").parallax({
    imageSrc: "img/porto/porto-bg.jpg"
  });
}

//для плавного скролла к якорям
$(document).ready(function() {
  $(".nav").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
    $("._menu").removeClass("active");
  });
});

//плавный скролл наверх страницы
var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}
