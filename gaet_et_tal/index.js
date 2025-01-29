let randomNumber;

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 101);
  console.log("Random number:", randomNumber);
}
getRandomNumber();

function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (userGuess === randomNumber) {
    message.textContent = "Correct! 🎉";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = "Too low! Try again.";
  }
}
