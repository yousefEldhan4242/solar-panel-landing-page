const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");
const date = document.querySelector(".date");

date.textContent = new Date().getFullYear();

icon.addEventListener("click", () => {
  ul.classList.toggle("clicked");
});
