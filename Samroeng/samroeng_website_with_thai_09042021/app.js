"use strict";

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

var i = 0;
var textAnimationEng = "Hello, my name is Samroeng. I am from Thailand.";

function typeingEng() {
    if (i < textAnimationEng.length) {
        document.getElementById("textAnimationEng").innerHTML += textAnimationEng.charAt(i);
        i++;
        setTimeout(typeingEng, 50);
    }
};
typeingEng();
