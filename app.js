const btnSwitch = document.querySelector(".btnMenu");
const nav = document.querySelector(".menu");
const allItemNav = document.querySelectorAll(".itemMenu");
const ligne = document.querySelector(".contLign");

btnSwitch.addEventListener("click", () => {
  ligne.classList.toggle("active");
  nav.classList.toggle("menu-visible");
});

if (window.matchMedia("(max-width:1300px)")) {
  allItemNav.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.toggle("menu-visible");
      ligne.classList.toggle("active");
    });
  });
}
