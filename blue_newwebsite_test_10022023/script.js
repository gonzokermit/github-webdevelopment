/*NAVIGATION*/

"use strict"

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});


/*SCROLLANIMATION FADEIN FADEOUT*/

const animierteElemente = document.querySelectorAll(".scrollanimation");
const konfiguration = {threshold: [0, 0.75]};
const observer = new IntersectionObserver(
    (elemente) => {
        elemente.forEach((elemente) => {
            if (elemente.intersectionRatio > 0.3) {
                elemente.target.classList.add("sichtbar");
            } else if (elemente.intersectionRatio < 0.5) {
                elemente.target.classList.remove("sichtbar");
            }
        })
    }, konfiguration
);
animierteElemente.forEach((eintrag) => {
    observer.observe(eintrag);
});
