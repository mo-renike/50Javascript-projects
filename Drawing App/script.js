const add = document.querySelector("#plus");
const sub = document.querySelector("#minus");
const figure = document.querySelector("#value");
const clear = document.querySelector("#clear");
const colorBox = document.querySelector("#color");
const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

const updateSize = () => {
  figure.innerText = size;
};
add.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }

  updateSize();
});
sub.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  updateSize();
});

colorBox.addEventListener("change", (e) => {
  color = e.target.value;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
