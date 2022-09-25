let wrapper = document.querySelector(".wrapper");
let leftSlide = document.querySelector(".left-bar");
let rightSlide = document.querySelector(".right-bar");
let upBtn = document.querySelector(".up");
let downBtn = document.querySelector(".down");
let slideLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = wrapper.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
