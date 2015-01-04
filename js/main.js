$(document).ready(function() {
  updateQRcode("Hello World!")
});

$("#qr-string").keyup(function() {
  updateQRcode($("#qr-string").val());
});

function updateQRcode(contents) {
  var canvasElement = $("#qr-code")[0];

  qr.canvas({
    canvas: canvasElement,
    value: contents,
    size:6
  });
}
