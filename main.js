const myname = document.getElementById("myname");
const nametitle = document.getElementById("name-title");
const adana = document.getElementById("adana");
const myage = document.getElementById("myage");
const agetitle = document.getElementById("age-title");
const myuni = document.getElementById("myuni");
const unititle = document.getElementById("uni-title");
const gakubu = document.getElementById("gakubu");
const senko = document.getElementById("senko");
const dai = document.getElementById("dai");

const ada = "多田氏と呼んでください";

nametitle.onclick = function () {
  myname.textContent = "多田 治生";
  setTimeout(function () {
    adana.textContent = ada;
  }, 1000);
};

agetitle.onclick = function () {
  myage.textContent = myage.textContent + "2";
  setTimeout(function () {
    myage.textContent = myage.textContent + "5";
  }, 500);
};

unititle.onclick = function () {
  myuni.textContent = "北海道大学大学院";
  setTimeout(function () {
    gakubu.textContent = "環境科学院";
    setTimeout(function () {
      senko.textContent = "生物圏科学専攻";
    }, 1000);
  }, 1000);
};

var pics_src = new Array("環境科学院.jpg", "北大.jpg", "冬北.webp");
var num = -1;

slideshow_timer();

function slideshow_timer() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("dai").src = pics_src[num];
  setTimeout("slideshow_timer()", 3000);
}
