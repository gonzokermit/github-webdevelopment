"use strict";

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
