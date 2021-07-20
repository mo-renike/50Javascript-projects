const tagWrapper = document.querySelector(".tags");
const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagWrapper.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagWrapper.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
     
    highlightTag(randomTag);

    setTimeout(() => {
      highlightRemove(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      randomTag = pickRandomTag()
      highlightTag(randomTag);
    }, 100);

  }, times * 100);
}
  


function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add(".highlight");
}
function highlightRemove(tag) {
  tag.classList.remove(".highlight");
}
