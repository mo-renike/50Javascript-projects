const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
const wrapper = document.querySelector(".container");

leftSide.addEventListener("mouseenter", () =>
  wrapper.classList.add("hover-left")
);
leftSide.addEventListener("mouseleave", () =>
  wrapper.classList.remove("hover-left")
);

rightSide.addEventListener("mouseenter", () =>
  wrapper.classList.add("hover-right")
);
rightSide.addEventListener("mouseleave", () =>
  wrapper.classList.remove("hover-right")
);
