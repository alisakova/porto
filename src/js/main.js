if ($('.news__slider').length) {
  $('.news__slider').slick();
}

if ($('.menu__slider').length) {
  $('.menu__slider').slick();
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

// $(document).ready(function() {
//   $("a#single_image").fancybox();
// });
