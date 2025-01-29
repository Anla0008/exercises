getRandomNumber();

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 101);
  console.log("Random number", randomNumber);

  document.querySelector("h2").textContent = randomNumber;
}
