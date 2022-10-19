var pics_src = new Array("つば九郎.jpg", "atcoder.jpg", "jevil.webp");
var num = -1;

slideshow_timer();

function slideshow_timer() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("sya").src = pics_src[num];
  setTimeout("slideshow_timer()", 3000);
}
