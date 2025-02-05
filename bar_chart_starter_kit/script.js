// Finder <ul>-elementet i DOM'en og gemmer det i en variabel,
// så jeg kan smide nye søjler ind i det senere.
const list = document.querySelector("ul");

// Opretter en <li>, som bliver en søjle i mit diagram.
const li = document.createElement("li");

// Sætter højden på søjlen ved hjælp af en CSS-variabel (--height),
// så den kan styres dynamisk i CSS'en.
li.style.setProperty("--height", "30");

// Smider den første søjle ind i <ul>-elementet, så jeg har en at starte med.
list.appendChild(li);

// Nu skal jeg have en funktion til at køre automatisk hvert halve sekund,
// så der konstant bliver tilføjet nye søjler.
setInterval(() => {
  // Opretter en ny <li>, der skal være den næste søjle.
  const li = document.createElement("li");

  // Genererer en tilfældig højde mellem 0 og 100,
  // så søjlerne bliver forskellige hver gang.
  const randomHeight = Math.floor(Math.random() * 100);

  // Sætter den tilfældige højde på søjlen.
  li.style.setProperty("--height", randomHeight);

  // Tilføjer den nye søjle til <ul>-elementet.
  list.appendChild(li);

  // Tjekker, om der er for mange søjler (mere end 20).
  // Hvis ja, så fjernes den første søjle i rækken,
  // så jeg holder det til max 20 elementer.
  if (list.children.length > 20) {
    list.removeChild(list.firstElementChild);
  }
}, 500); // Denne funktion kører hvert 500 ms (altså 2 gange i sekundet).
