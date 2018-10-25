$("._open-modal-porto").click(function(event) {
  event.preventDefault();
  $("#order-table-porto").modal();
  return false;
});

$("._open-modal-resto").click(function(event) {
  event.preventDefault();
  $("#order-table-resto").modal();
  return false;
});

$("._open-modal-manufactura").click(function(event) {
  event.preventDefault();
  $("#order-table-manufactura").modal();
  return false;
});

if ($(".select").length) {
  $(".select").select2({
    minimumResultsForSearch: Infinity,
    width: 'resolve'
  });
  $('.select').click(function (e) {
    console.log(1);
    e.preventDefault();
    return false;
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
