// import { getRandomNumber } from "../utils.js";
import { qs } from "../utils.js";

// let computerGuess = getRandomNumber(100);
// console.log(computerGuess);

// Laver variablerne
let min = 0;
let max = 100;
let computerGuess;
let attemps = 0;

window.addEventListener("load", sidenVises);
qs("h2").textContent = `Gæt et tal mellem ${min} og ${max}`;

function sidenVises() {
  // Vis startskærmen, men skjul de andre knapper
  qs("#start_knap").classList.remove("skjul");
  qs("#tooLow").classList.add("skjul");
  qs("#tooHigh").classList.add("skjul");
  qs("#correct").classList.add("skjul");
  qs("p").classList.add("skjul");

  // Klik på start_knap
  qs("#start_knap").addEventListener("click", startGame);

  qs("#tooLow").addEventListener("click", tooLow);
  qs("#tooHigh").addEventListener("click", tooHigh);
  qs("#correct").addEventListener("click", correct);
}

function startGame() {
  console.log("startGame");

  // Skjul startknappen og vis de andre knapper
  qs("#start_knap").classList.add("skjul");

  // Vis de andre knapper
  qs("#tooLow").classList.remove("skjul");
  qs("#tooHigh").classList.remove("skjul");
  qs("#correct").classList.remove("skjul");
  qs("p").classList.remove("skjul");

  // Computerens første gæt skal altid være halvdelen af min og max værdierne.
  computerGuess = Math.floor((max - min) / 2 + min);

  qs("p").textContent = `Computerens gæt er ${computerGuess}`;
  attemps++;
}

function tooLow() {
  min = computerGuess;
  // Finder difirencen mellem øvre grænse (100) og computerens gæt og dividere med 2 for at finde midten.
  computerGuess = Math.floor((max - computerGuess) / 2 + computerGuess);

  qs("p").textContent = `Computerens gæt er ${computerGuess}`;
  attemps++;
}

function tooHigh() {
  max = computerGuess;
  computerGuess = Math.floor((min + computerGuess) / 2);

  qs("p").textContent = `Computerens gæt er ${computerGuess}`;
  attemps++;
}

function correct() {
  qs("p").textContent = `Computerens gættede det rigtige tal ${computerGuess}, på ${attemps} forsøg`;
}
