"use strict";

const indikatoren = document.getElementsByClassName("indikator");
indikatoren[0].classList.add("aktiv");                   /*indikatoren werden in Entwicklertools angezeigt
                                                          length = 5 --> das sind die indexe*/
const slides = document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");


var aktuellerIndex = 0;

function umschalten(anzahl) {
    var neuerIndex = aktuellerIndex + anzahl;

    if (neuerIndex < 0 ) {
        neuerIndex = slides.length - 1
    };

    if (neuerIndex > slides.length -1) {
        neuerIndex = 0;
    };

    springeZueintrag(neuerIndex);
};

function springeZueintrag(neuerIndex) {
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    indikatoren[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
};
