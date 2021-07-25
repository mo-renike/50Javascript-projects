const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    //plus sign turns the string into a number
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// counters.forEach((counter) => {
//   counter.innerText = "0";
//   const target = +counter.getAttribute("data-target");
//   const index = +counter.innerText;

//   const update = ()=>{
//   if (index < target) {
//     index *= 200;
//   }
// } 
// });update()
