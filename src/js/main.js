document.querySelectorAll(".box p").forEach((el) => {
  if (el.textContent.length > 20) {
    el.textContent = `${el.textContent.slice(0, 17)}..`;
  }
});

/*document.querySelectorAll(".audio").forEach((el) => {
  el.addEventListener("click", function () {
    if (
      document.querySelector(".audio .sheiks-info span").dataset.name ===
      "osmanAbubakr"
    ) {
      document.getElementById("play").play();
      document.querySelector(".playAudio").classList.add("displed");
      document.querySelector(".stop").classList.add("active");
    }
  });
});*/

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("playAudio")) {
    document.querySelector(".playAudio").classList.add("displed");
    document.querySelector(".stop").classList.add("active");
    document.getElementById("play").play();
  }
  if (e.target.classList.contains("stop")) {
    document.querySelector(".playAudio").classList.remove("displed");
    document.querySelector(".stop").classList.remove("active");
    document.getElementById("play").pause();
  }
  if (e.target.classList.contains("heart")) {
    if (document.querySelector(".heart").classList.contains("active")) {
      document.querySelector(".heart").classList.remove("active");
    } else {
      document.querySelector(".heart").classList.add("active");
    }
  }
});

// pages
document.querySelectorAll(".navbar ul li span").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelectorAll(".navbar ul li span").forEach(function (el) {
      el.classList.remove("active");
      el.children[0].classList.remove("active");
    });
    el.classList.add("active");
    el.children[0].classList.add("active");

    if (el.id === "index-page") {
      document.querySelectorAll(".home-page").forEach(function (el) {
        el.classList.remove("remove");
      });
    } else {
      document.querySelectorAll(".home-page").forEach(function (el) {
        el.classList.add("remove");
      });
    }
  });
});

// slider
let sliderContainer = document.querySelector(".playlist .container .row");
let images = document.querySelectorAll(".playlist .container .row .box");

let counter = -images[0].offsetWidth * (images.length - 1);
let speed = 2;
let direction = 1;

function slide() {
  counter += speed * direction;
  sliderContainer.style.transform = `translateX(${counter}px)`;
  if (counter > 0) {
    direction = -1;
  }
  if (counter < -images[0].offsetWidth * (images.length - 1)) {
    direction = 1;
  }

  requestAnimationFrame(slide);
}

slide();
