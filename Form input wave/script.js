const labels = document.querySelectorAll(".form-controls label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((leter, idx) => `<span>${letter}</span>`)
    .join("");
});
