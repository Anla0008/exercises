// Funktionen der skal opdatere farverne baseret på hvor musens er.
function opdaterFarve(event) {
  const x = event.clientX; // Musens X-position
  const y = event.clientY; // Musens Y-position
  const width = window.innerWidth; // Browser vinduets bredde
  const height = window.innerHeight; // Browser vinduets højde

  const lightness = (x / width) * 100; // Beregner lysstyrke i procent
  const saturation = (y / height) * 100; // Beregner farvemætning i procent

  // Opdaterer CSS-variablerne for lightness og saturation
  document.documentElement.style.setProperty("--lightness", `${lightness}%`);
  document.documentElement.style.setProperty("--saturation", `${saturation}%`);
}

// Tilføjer en event listener for musens bevægelser (position på skærmen)
window.addEventListener("mousemove", opdaterFarve);

// X-position styrer lysstyrke (lys styrke), Y-position styrer farvemætning (saturation).

// CSS-variablerne opdateres med style.setProperty() når musen flyttes.
