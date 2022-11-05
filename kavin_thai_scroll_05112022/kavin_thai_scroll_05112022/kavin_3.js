/*const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}*/

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

/*window.addEventListener("scroll", () =>{
    let contentAppear = document.querySelector(".contentAppear");
    let contentAppearPosition = contentAppear.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.7;

    if(contentAppearPosition < screenPosition) {
        contentAppear.classList.add("scrollAppear");
    } else {
        contentAppear.classList.remove("scrollAppear");
    }
});*/

const animierteElemente = document.querySelectorAll(".scrollanimation");
const konfiguration = {threshold: [0, 0.75]};
const observer = new IntersectionObserver(
    (elemente) => {
        elemente.forEach((elemente) => {
            if (elemente.intersectionRatio > 0.75) {
                elemente.target.classList.add("sichtbar");
            } else if (elemente.intersectionRatio < 0.75) {
                elemente.target.classList.remove("sichtbar");
            }
        })
    }, konfiguration
);
animierteElemente.forEach((eintrag) => {
    observer.observe(eintrag);
});

    


