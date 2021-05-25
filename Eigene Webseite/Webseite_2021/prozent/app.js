"use strict";

const enterButton = document.getElementById("enter");
const clearButton = document.getElementById("clear-input");

function calculateProzentwert() {
    let grundwert = document.getElementById("grundwert").value;
    let prozentsatz = document.getElementById("prozentsatz").value;

    if (isNaN(grundwert) || isNaN(prozentsatz)) {
        alert("This is not an number!");
    } else {
        let prozentwert = grundwert*prozentsatz/100;
        let prozentwertToFixed = (prozentwert.toFixed(2));
        let gesamtwert = parseFloat(grundwert)+parseFloat(prozentwertToFixed);
        let gesamtwerttoFixed = (gesamtwert.toFixed(2));

        document.getElementById("prozentwertToFixed").innerHTML = `${prozentsatz} % von ${grundwert} sind ${prozentwertToFixed}`;
        document.getElementById("gesamtwertToFixed").innerHTML = `Gesamtwert = ${gesamtwerttoFixed}`;
    };
};

function clearInput() {
    let grundwert = document.getElementById("grundwert").value = "";
    let prozentsatz = document.getElementById("prozentsatz").value = "";

    document.getElementById("prozentwertToFixed").innerHTML = "Ergebnis";
    document.getElementById("gesamtwertToFixed").innerHTML = "";
}

enterButton.addEventListener("click", calculateProzentwert);
clearButton.addEventListener("click", clearInput);