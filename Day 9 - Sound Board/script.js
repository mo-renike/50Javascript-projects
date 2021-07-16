const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopPlaying();
    document.getElementById(sound).play();
  });
  document.querySelector(".buttons").appendChild(btn);
});

function stopPlaying() {
  sounds.forEach((sound) => {
    let voice = document.getElementById(sound);
    voice.pause();
    voice.currentTime = 0;
  });
}
