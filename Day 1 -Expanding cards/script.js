const show = document.querySelectorAll('.panels');

show.forEach(panels => {
  panels.addEventListener('click', () => {
    removeActiveClasses();
    panels.classList.add('active');
  });
});

function removeActiveClasses() {
  show.forEach(panels => {
    panels.classList.remove('active');
  });
}
