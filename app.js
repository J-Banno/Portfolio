//Menu Burger//
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

//TypeWriter//

const txtAnim = document.querySelector(".txt-animation");

let typewriter = new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(1800)
  .changeDelay(30)
  .typeString("Je suis Jonathan Bannholtzer, ")
  .pauseFor(300)
  .typeString("<strong>Développeur Full-Stack</strong> !")
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<span style="color: #7319f0;"> HTML/CSS</span> !')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #f0db19;"> JavaScript</span> !')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<span style="color: #1f8fbd;"> React Js</span> !')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString('<span style="color: #4ac22c;"> NodeJS-MongoDB</span> !')
  .pauseFor(1000)
  .start();
