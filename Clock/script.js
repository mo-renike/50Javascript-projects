const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondsEl = document.querySelector(".second");
const toggler = document.querySelector(".toggle");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const body = document.querySelector("html");

// toggler.addEventListener("click", () => {

//   if (body.classList.contains("dark")) {
//     body.classList.remove("dark");
//   } else {
//     body.classList.add("dark");
//     toggler.innerHTML = 'Light Mode'
//   }
// });

toggler.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggler.innerHTML = "revert";
  } else {
    toggler.innerHTML = "change Tone";
  }
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const setTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const hour12 = hour % 12;
  const seconds = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const amPm = hour >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hour12,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;
  secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hour12} : ${
    minute < 10 ? `0${minute}` : minute
  } ${amPm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class= 'circle'>${date}</span>`;
};

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);
