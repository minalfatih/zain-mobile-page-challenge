document.querySelectorAll(".box p").forEach((el) => {
  if (el.textContent.length > 20) {
    el.textContent = `${el.textContent.slice(0, 17)}..`;
  }
});

let audio = document.getElementById("myAudio");
let playButton = document.querySelector(".playButton");
let playIconPath = document.querySelector(".playButton svg path");
let isPlaying = false;

playButton.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    playIconPath.setAttribute(
      "d",
      "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    );
    isPlaying = false;
  } else {
    audio.play();
    playIconPath.setAttribute(
      "d",
      "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
    );
    isPlaying = true;
  }
});

// heart
document.addEventListener("click", function (e) {
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

// progress
let progressBar = document.getElementById("progressBar");
audio.addEventListener("timeupdate", function () {
  if (audio.duration) {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  }
});

audio.addEventListener("ended", function () {
  progressBar.value = progressBar.max;
});
