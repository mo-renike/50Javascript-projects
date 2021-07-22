const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let container = btn.parentNode;
    container.classList.toggle("active");
  });
});
