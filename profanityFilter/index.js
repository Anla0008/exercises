// Given array med dårlige ord der skal skiftes ud emd gode ord.
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theSentence = false; // Boolean, der holder styr på om teksten allerede er blevet ændret

let theText = document.querySelector("p").textContent; // Henter indholdet (tekst) fra første <p>-element på siden

document.querySelector("button").addEventListener("click", replaceBadWords); // Tilføjer en event listener på knappen for at køre funktionen replaceBadWords ved klik

function replaceBadWords() {
  if (theSentence === false) {
    // Tjekker om teksten allerede er blevet behandlet
    curseWords.forEach((curseWord) => {
      // Går igennem hvert objekt i curseWords-arrayet
      theText = theText.replaceAll(curseWord.bad, `<span>${curseWord.good}</span>`); // Erstatter alle forekomster af 'bad' med 'good' inde i et <span>
    });

    console.log("theText", theText); // Logger den nye tekst til konsollen for at se resultatet
    document.querySelector("p").innerHTML = theText; // Opdaterer HTML'en med den behandlede tekst og indsætter det som HTML for at understøtte <span>
    theSentence = true; // Marker, at teksten nu er blevet behandlet, så det ikke gøres igen
  } else {
    document.querySelector("dialog").showModal(); //Sender en besked om at der er trykket to gange på knappen og de dårlige ord er belvet udskiftet.
  }
}
