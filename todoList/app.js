"use strict";

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}; 

function createListElement() {
	var li = document.createElement("li"); // Fügt ein Listenelement hinzu
	li.appendChild(document.createTextNode(input.value)); // Setzt den Text aus dem Input-Feld 
	ul.appendChild(li); // Fügt das neue Li Element der UL hinzu
	input.value = ""; // Setzt den Inhalt des Input-Felds zurück

	function crossOut() {
		li.classList.toggle("done");
	};
	li.addEventListener("click",crossOut);

	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem() {
		li.classList.add("delete");
	};
};

function addListAfterClick(){
	if (inputLength() > 0) { // Sicherstellen, dass ein leeres Input-Feld keine Einträge erzeugt
		createListElement();
	};
};

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	};
};

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

