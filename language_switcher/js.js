"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      { text: "Das Boot und der Roboter machten sich auf ein Abenteuer. Das Boot wollte in den Sonnenuntergang segeln, aber der Roboter bestand darauf, zuerst WiFi zu finden. Am Ende ruderten sie im Kreis, während der Roboter nach einem Signal suchte – bis das Boot aufgab und den Stecker zog... buchstäblich.", location: ".content" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      { text: "Båden og Robotten tog på eventyr. Båden ville sejle mod solnedgangen, men Robotten insisterede på at finde WiFi først. De endte med at ro i cirkler, mens Robotten søgte efter et signal – indtil Båden opgav og trak stikket... bogstaveligt talt.", location: ".content" },
    ],
  },
};

const locale = "da";

/* Tilføjer en event listener til elementet "language_select", som kalder funktionen "vaelgSprog" ved ændring. */
document.getElementById("language_select").addEventListener("change", vaelgSprog);

// Starter siden med "Da" som standard sprog.
vaelgSprog({ target: { value: locale } });

function vaelgSprog(event) {
  // Henter det valgte sprog fra dropdown-menuen.
  const selectedLanguage = event.target.value;
  console.log("Selected Language: ", selectedLanguage); // Debug: viser det valgte sprog i konsollen

  // Henter arrayet af tekster for det valgte sprog fra texts-objektet.
  const textsArray = texts[selectedLanguage].texts;
  console.log("Texts Array: ", textsArray);

  // Gennemgår hver tekst i listen
  textsArray.forEach((textObj) => {
    // Finder HTML-elementet, der skal opdateres, baseret på "location"
    const element = document.querySelector(textObj.location);
    console.log("Updating element: ", element);

    // Hvis elementet findes, opdaterer tekstindholdet
    if (element) {
      element.textContent = textObj.text;
    }
  });
}

// Analogi til at løse opgaven

// const studetn1={
//   firstName="Harry";
//   lastName="Potter";
// }

// const naemToDealWith="firstName";

// console.log(student1[naemToDealWith]);

// Bonus info
// "texts" er er arraty
