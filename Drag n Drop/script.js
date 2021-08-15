const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


function dragStart() {
  console.log("drag, start");
};
function dragEnd () {
  console.log("drag, end");
};
const dragOver = () => {
  console.log("drag, over");
};
const dragEnter = () => {
  console.log("drag, enter");
};
const dragLeave = () => {
  console.log("drag, leave");
};
const dragDrop = () => {
  console.log("drag, drop");
};


