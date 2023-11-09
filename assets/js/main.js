"use strict";

// ===================================================
//      	  JS-Vertiefung – DOM I
// ===================================================

// ===================================================
//      	JS-Vertiefung – Dom-Elements-Level-1_2
// ===================================================

console.log("%c JS-Vertiefung – Dom-Elements-Level-1_2", "color: tomato");

const elementArray = document.getElementsByClassName("example");
// const elementArray = document.querySelectorAll('.example');
let btnClick = false;

const myFunction = () => {
	// elementArray.forEach((elem) => {
	// 	elem.style.backgroundColor = 'red';
	// })
	for (let i = 0; i < elementArray.length; i++) {
		elementArray[i].style.backgroundColor = "red";
		if (btnClick) {
			elementArray[i].style.backgroundColor = "transparent";
		} else {
			elementArray[i].style.backgroundColor = "red";
		}
	}
	btnClick = !btnClick;
};

// ===================================================
//      	JS-Vertiefung – Dom-Elements-Level-1_3
// ===================================================

console.log("%c JS-Vertiefung – Dom-Elements-Level-1_3", "color: tomato");

// Aufgabenstellung:
// Schreibe eine Funktion, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, innerHTML, querySelectorAll, querySelector und addEventListener.

const output = document.querySelector("#output");

const buttons = document.querySelectorAll(".unten button");

const firstElementChild = document.querySelector("#myList").firstElementChild;
const lastElementChild = document.querySelector("#myList").lastElementChild;
const nextElementSibling =
	document.querySelector("#myList").firstElementChild.nextElementSibling;
const previousElementSibling =
	document.querySelector("#myList").lastElementChild.previousElementSibling;

const btnCLickFunction = () => {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", () => {
			if (buttons[0].textContent === buttons[i].textContent) {
				output.innerHTML = firstElementChild.textContent;
			} else if (buttons[1].textContent === buttons[i].textContent) {
				output.innerHTML = lastElementChild.textContent;
			} else if (buttons[2].textContent === buttons[i].textContent) {
				output.innerHTML = nextElementSibling.textContent;
			} else if (buttons[3].textContent === buttons[i].textContent) {
				output.innerHTML = previousElementSibling.textContent;
			}
		});
	}
};

btnCLickFunction();

// const btnCLickFunction = (e) => {
// 	buttons.forEach((elem) => {
// 		elem.addEventListener("click", () => {
// 			if (elem.innerText === "# firstElementChild") {
// 				output.innerHTML = firstElementChild.innerText;
// 			} else if (elem.innerText === "# lastElementChild") {
// 				output.innerHTML = lastElementChild.innerText;
// 			} else if (elem.innerText === "# firstElementChild nextElementSibling") {
// 				output.innerHTML = nextElementSibling.innerText;
// 			} else if (elem.innerText === "# lastElementChild previousElementSibling") {
// 				output.innerHTML = previousElementSibling.innerText;
// 			}
// 		});
// 	});
// };

// btnCLickFunction();

// ===================================================
//      	JS-Vertiefung – Dom-Elements-Level-1_4
// ===================================================

console.log("%c JS-Vertiefung – Dom-Elements-Level-1_4", "color: tomato");

// Lernziel:

// Dynamisch HTML-Elemente erstellen und sie dem DOM hinzufügen mit der Verwendung von createElement.

// Aufgabenstellung:

// Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
//  Schau dir hierzu die Ergebnisvorschau an.
// Schreibe die Funktion “addElement”. Beim Klicken auf den Button sollte das eingegebene Element der Liste hinzugefügt werden. Nutze hierfür JS um dynamisch neue Listenelemente hinzuzufügen.
// Das Eingabefeld soll nach jedem Hinzufügen geleert werden.
// Nutze gerne das HTML aus dem Kommentarbereich.

// Du kannst folgendes nutzen:
// createElement, appendChild, getElementById, textContent, EventListener

const addElement = () => {
	const list = document.querySelector("#myList2");
	const btnAdd = document.querySelector("#btnAdd");

	btnAdd.addEventListener("click", () => {
		const inputText = document.querySelector("#inputText");
		const li = document.createElement("li");

		if (inputText.value === "") {
			return false;
		} else {
			li.textContent = inputText.value;
			list.appendChild(li);
			inputText.value = "";
		}
	});
};

addElement();

// ===================================================
//      	JS-Vertiefung – Dom-Elements-Level-1_9
// ===================================================

console.log("%c JS-Vertiefung – Dom-Elements-Level-1_9", "color: tomato");

// Aufgabenstellung:
// Dieses Mal sollst du eine Funktion schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: addEventListener(), selectedIndex und remove().

const removeColorFromSelect = () => {
	const btn = document.querySelector("#button");
	const selectElements = document.querySelector("#farbeAuswahlen");

	btn.addEventListener("click", (event) => {
		event.preventDefault();
		const option = selectElements.selectedIndex;
		
		if (option === -1) {
			return false;
		} else {
			selectElements[option].remove();
			btn.style.backgroundColor = selectElements[option].innerText;
			console.log(selectElements[option]);
		}
	});
};

removeColorFromSelect();

// ===================================================
//       JS-Vertiefung – Dom-Elements-Level-2_1
// ===================================================

console.log("%c JS-Vertiefung – Dom-Elements-Level-2_1", "color: tomato");

// Aufgabenstellung:

// In dieser Übung werden wir DOM Elements kennenlernen.
// Schreibe eine Funktion, die beim Anklicken des “Change me” Buttons den Home Button ändert.

const homeBtnChange = () => {
	const btnChange = document.querySelector('#navChange');

	btnChange.addEventListener('click', () => {
		const btnHome = document.querySelector('#navHome');
		const firstListElem = document.querySelector('.listContainer').firstElementChild;
		btnHome.innerText = btnHome.innerText.split('').reverse().join('');
		firstListElem.classList.toggle('first__li');
	});
}

homeBtnChange();