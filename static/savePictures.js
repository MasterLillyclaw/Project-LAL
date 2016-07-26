
function saveToDisk() {
  console.log("Saving to disk");
  html2canvas(document.body, {
  onrendered: function(canvas) {
    dlCanvas(canvas);
    console.log("Rendered the image");
  },
  width: 300,
  height: 300
});
}

function dlCanvas(canvas) {
  var dt = canvas.toDataURL('image/png');
  console.log("dlCanvas is running");
  /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
  dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
  console.log("We changed MIME");

  /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
  dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
  console.log("It replaced something");

  var dl = document.getElementById("dl");
  dl.href = dt;
  console.log("dl.href now = dt");
};
