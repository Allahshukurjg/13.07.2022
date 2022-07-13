var slider = document.querySelector(".slider");
var img = document.querySelector(".slider img");
var right = document.querySelector(".right");
var left = document.querySelector(".left");
var dots = document.querySelectorAll(".dot");

var images = [
  "https://th.bing.com/th/id/R.efcedbcd3e404078b8fe78be0429b006?rik=410w4ONdFG5RoA&riu=http%3a%2f%2fwww.menucool.com%2fslider%2fprod%2fimage-slider-4.jpg&ehk=qmYOeF6vCCwrZf29gVh8ZXUAsP26dJfhVzann8sBea8%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.01adccd359e256c8e4695ff6787a4950?rik=TBnesgQssBoUVA&riu=http%3a%2f%2fwww.menucool.com%2fslider%2fjsImgSlider%2fimages%2fimage-slider-5.jpg&ehk=r6hPBLwuGRtp6UG1pmE6EGcIsnYeHpFHlfTyUsEZFL8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  "https://i.ytimg.com/vi/V9Sm1gyVl0g/maxresdefault.jpg",
];

var index = 0;

right.addEventListener("click", function () {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  img.src = images[index];
  var el = dots[0];
  while (el) {
    if (el.tagName === "DIV") {
      el.classList.remove("active");
    }
    el = el.nextElementSibling;
  }
  dots[index].classList.add("active");
});

left.addEventListener("click", function () {
  index--;
  if (index === -1) {
    index = images.length - 1;
  }
  img.src = images[index];
  var el = dots[0];
  while (el) {
    if (el.tagName === "DIV") {
      el.classList.remove("active");
    }
    el = el.nextElementSibling;
  }
  dots[index].classList.add("active");
});
function autoPlay() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  img.src = images[index];
  var el = dots[0];
  while (el) {
    if (el.tagName === "DIV") {
      el.classList.remove("active");
    }
    el = el.nextElementSibling;
  }
  dots[index].classList.add("active");
}
setInterval(() => {
  autoPlay();
}, 2500);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    var el = dots[0];
    while (el) {
      if (el.tagName === "DIV") {
        el.classList.remove("active");
      }
      el = el.nextElementSibling;
    }
    dots[i].classList.add("active");

    for (let j = 0; j < images.length; j++) {
      img.src = images[i];
    }
  });
}
