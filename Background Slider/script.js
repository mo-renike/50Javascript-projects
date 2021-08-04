const slides = document.querySelectorAll(".slide");
const body = document.body;
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBodyBg();
  setActive();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBodyBg();
  setActive();
});



function setBodyBg() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
setBodyBg();

function setActive() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
setActive();
