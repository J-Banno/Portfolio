const btnMenu = document.querySelector(".btnMenu");
const nav = document.querySelector(".menu");
const allItemNav = document.querySelectorAll(".itemMenu");
const ligne = documet.querySelector(".contLign");

btnMenu.addEventListener("click", () => {
  ligne.classList.toggle("active");
});
