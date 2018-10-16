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
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout("scrollToTop()", 10);
  } else clearTimeout(timeOut);
}
