const search = document.getElementById("search");
const wrapper = document.getElementById("main");
const form = document.getElementById("form");

const APIURL = "https://api.github.com/users/";

// const getUser = (username) => {
//   axios(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };

const getUser = async (username) => {
  try {
    const { data } = await axios(APIURL + username);
    createUser(data);
    createRepo(username);
  } catch (err) {
    if (err.response.status == 404) {
      console.log("not found");
      createErr("No Profile with this username");
    }
  }
};
const getRepos = async (username) => {
  try {
    const { data } = await axios(APIURL + username + "/repos");
    createRepo(data);
    console.log(data);
  } catch (err) {
   // console.log(err);
  }
};

const createRepo = (repos) => {
  const repoEl = document.getElementById("repos");
  repos.forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add(repo);
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = String(repo.name);

    repoEl.appendChild(repoLink);
  });
};

const createUser = (user) => {
  const cardHtml = `
     <div class="card">
        <div class="card_img">
          <img src=${user.avatar_url} alt="AV" class="avatar" />
        </div>
        <div class="card_info">
          <h1>${user.name}</h1>
           <div class="card_socials">
              <a href=${user.blog ? user.blog : ""}>${
    user.blog ? "Website" : ""
  }</a>
              <a href="https://twitter.com/${user.twitter_username}">Twitter</a>
          </div>
      
          <p>
           ${user.bio}
          </p>
          <ul>
            <li>    ${user.followers} <strong>Followers</strong></li>
            <li>    ${user.following} <strong>Following</strong></li>
            <li>    ${user.public_repos} <strong>Repositories</strong></li>
          </ul>
          <div id="repos">
          </div>
         
        </div>
      </div>
`;

  wrapper.innerHTML = cardHtml;
};

const createErr = (msg) => {
  wrapper.innerHTML = `
  <div class="card err">
  <h1>${msg}</h1>
  </div>`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
