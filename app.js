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
  .typeString('<span style="color: #2A93D6;"> ReactJS</span> !')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #333333;"> Symfony</span> !')
  .pauseFor(1000)
  .start();

//Anim scrollMagic

const navbar = document.querySelector(".menu");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".btn-acc");
const btnMedias = document.querySelectorAll(".media");
const btnRondAccueil = document.querySelector(".btn-rond");

const TL1 = gsap.timeline({ paused: true });

TL1.to(navbar, { left: "0px", ease: Power3.easeOut, duration: 0.6 })
  .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
  .staggerFrom(btn, 1, { opacity: 0 }, 0.2, "-=0.30")
  .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, "-=0.75")
  .from(
    btnRondAccueil,
    { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 },
    "-=1"
  );

window.addEventListener("load", () => {
  TL1.play();
});

// Animationpresentation

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titrePres");
const presentationGauche = document.querySelector(".presGauche");
const listePres = document.querySelectorAll(".itemListe");

const tlpres = new TimelineMax();

tlpres
  .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
  .from(presentationGauche, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5")
  .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, "-=0.5");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlpres)
  // .addIndicators()
  .addTo(controller);

// Anim portfolio

const portfolioContainer = document.querySelector(".portfolio");
const titrePortfolio = document.querySelector(".titrePort");
const itemPortfolio = document.querySelectorAll(".vague1");

const tlPortfolio = new TimelineMax();

tlPortfolio
  .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene2 = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlPortfolio)
  // .addIndicators()
  .addTo(controller);

// Vague 2

const itemPortfolio2 = document.querySelectorAll(".vague2");

const tlPortfolio2 = new TimelineMax();

tlPortfolio2.staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene3 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(tlPortfolio2)
  // .addIndicators()
  .addTo(controller);

// Animation compétence

const sectionComp = document.querySelector(".sectionRange");
const titreComp = document.querySelector(".titreExp");
const allLabel = document.querySelectorAll(".labelSkill");
const allPourcent = document.querySelectorAll(".numberSkill");
const allBarres = document.querySelectorAll(".barreSkill");
const allShadowBarres = document.querySelectorAll(".barreGrise");

const tlCompetences = new TimelineMax();

tlCompetences
  .from(titreComp, { opacity: 0, duration: 0.6 })
  .staggerFrom(allLabel, 0.5, { y: -50, opacity: 0 }, 0.1, "-=0.5")
  .staggerFrom(allPourcent, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1")
  .staggerFrom(allShadowBarres, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1")
  .staggerFrom(allBarres, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1");

const scene5 = new ScrollMagic.Scene({
  triggerElement: sectionComp,
  reverse: false,
})
  .setTween(tlCompetences)
  .addTo(controller);
