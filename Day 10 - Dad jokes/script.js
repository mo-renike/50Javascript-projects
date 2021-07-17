const jokeWrapper = document.querySelector(".jokes");
const button = document.querySelector("#joke-btn");

button.addEventListener("click", getJoke);
getJoke();

async function getJoke() {
  let config = {
    headers: {
      Accept: "application/JSON",
    },
  };
  const resp = await fetch("https://icanhazdadjoke.com", config);
    const data = await resp.json()
    jokeWrapper.innerHTML = data.joke;
}



// function getJoke() {
//   let config = {
//     headers: {
//       Accept: "application/JSON",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((resp) => resp.json())
//     .then((data) => {
//       jokeWrapper.innerHTML = data.joke;
//     });

// }
