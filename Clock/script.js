const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondsEl = document.querySelector(".second");
const toggler = document.querySelector(".toggle");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const day = document.querySelector(".circle");
 const body = document.querySelector("html");


// toggler.addEventListener("click", () => {
 
//   if (body.classList.contains("dark")) {
//     body.classList.remove("dark");
//   } else {
//     body.classList.add("dark");
//     toggler.innerHTML = 'Light Mode'
//   }
// });

toggler.addEventListener('click', () => {
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        toggler.innerHTML = 'light mode'
    }
})

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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
    const time = new Date()
    console.log(time.getMonth());
}
setTime()