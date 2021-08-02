const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd551351d613eae72b5219e295facfeb&page1";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=bd551351d613eae72b5219e295facfeb&query="';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const form = document.querySelector("#form");
const main = document.querySelector("#main");
const search = document.querySelector("#search");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

const showMovies = (movies) => {
  main.innerHTML = " ";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEL = document.createElement("div");
    movieEL.classList.add("movie");

    movieEL.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${rating(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>${overview}</div>
    `;
    console.log(movieEl);
    main.appendChild(movieEL);
  });
};

const rating = (vote) => {
  vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
};
rating();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== " ") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
