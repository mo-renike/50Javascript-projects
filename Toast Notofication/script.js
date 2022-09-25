const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");
const email = document.getElementById("email");
const pwd = document.getElementById("password");

button.addEventListener("click", () => createToast());

const createToast = () => {

  const notif = document.createElement("div");
  notif.classList.add("toast");
  if (!email.value || !pwd.value) {
    notif.innerText = "Please fill all fields";
    notif.style.color = "red";
  } else if (
    email.value == "herroyalpianist@gmail.com" &&
    pwd.value == "morenike"
  ) {
    notif.innerText = "Login Successfully";
    notif.style.color = "green";
  } else {
    notif.innerText = "invalid Login Details";
    notif.style.color = "red";
  }

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 4000);
};
