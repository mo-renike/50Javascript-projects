const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#litres");
const percent = document.querySelector("#percentage");
const remained = document.querySelector("#remained");



smallCups.forEach((smallie, idx) => {
  smallie.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percent.style.visibility = "hidden";
    percent.style.height = 0;
  } else {
      percent.style.visibility = `visible`;
      percent.style.height = `${fullCups / totalCups * 300}px`;
      percent.innerText =   `${fullCups / totalCups *100}%`
  }

  if (fullCups === totalCups) {
      remained.style.visibility = 'hidden'
      remained.style.height = 0
  } else {
      remained.style.visibility = 'visible'
      liters.innerText =  `${(2- (0.25 * fullCups) )}L`;
  }

};


updateBigCup();