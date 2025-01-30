"use strict";

let userGuess;
let computerGuess;
let result;

// Laver mine konstanter
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

// Konstanter på mine players og knapper
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const buttons = document.querySelector("#buttons");

// Konstanter til resultaterne
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

// mine funktioner
function rockClicked() {
  startGame("rock"); // når brugeren klikker på rock, starter vi spillet med "rock" som valg
}

function paperClicked() {
  startGame("paper"); // når brugeren klikker på paper, starter vi spillet
}

function scissorsClicked() {
  startGame("scissors"); // når brugeren klikker på scissors, starter vi sp
}

// start spillet
function startGame(userChoice) {
  // deaktiver knapper midlertidigt
  buttons.classList.add("disabled");

  // sætter / gemmer brugerens valg
  userGuess = userChoice;

  // starter animering af shake for begge spillere
  player1.classList.add("shake");
  player2.classList.add("shake");

  // slutter animationen af shake igen
  player1.addEventListener("animationend", endShake);
  player2.addEventListener("animationend", endShake);

  // får computeren til at gætte
  computerGuesses();

  console.log("user guesses:", userChoice);
}

// computeren vælger tilfældigt rock, paper, eller scissors - ved at vælge et tilfældigt tal 0, 1, eller 2 og koble det til choices
function computerGuesses() {
  const choices = ["rock", "paper", "scissors"];
  computerGuess = choices[Math.floor(Math.random() * 3)];
  console.log("computer guesses:", computerGuess);
}

function endShake() {
  // fjern shake fra begge spillere
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.removeEventListener("animationend", endShake);
  player2.removeEventListener("animationend", endShake);

  // Resultatet af spillet
  showResult();
}

// bestem vinderen
// når return bliver kaldt, afsluttes funktionen, og den værdi, der står efter return, sendes tilbage til det sted, hvor funktionen blev kaldt

function determinWinner() {
  if (userGuess === computerGuess) {
    return "draw";
  }

  // brugeren vinder
  else if ((userGuess === "rock" && computerGuess === "scissors") || (userGuess === "paper" && computerGuess === "rock") || (userGuess === "scissors" && computerGuess === "paper")) {
    return "user";
  }

  // computeren vinder
  else {
    return "computer";
  }
}

// find ud af hvem der har vundet
function showResult() {
  const result = determinWinner();

  // skjuler alle resultater først for at kunne genspille
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

  // vis det rigtige resultat
  if (result === "user") {
    winText.classList.remove("hidden");
  } else if (result === "computer") {
    loseText.classList.remove("hidden");
  } else {
    drawText.classList.remove("hidden");
  }

  // opdater spillerens valg
  player1.classList.add(userGuess);
  player2.classList.add(computerGuess);

  // aktivérer knapperne igen så man kan spille igen
  buttons.classList.remove("disabled");
}
