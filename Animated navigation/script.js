const button = document.querySelector("#toggle");
const navigation = document.querySelector("#nav");

button.addEventListener("click", () => navigation.classList.toggle("active"));
