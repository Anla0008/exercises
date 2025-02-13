// Funktion til at opdatere farver baseret på musens position
function updateColor(event) {
  const x = event.clientX; // Musens X-position
  const y = event.clientY; // Musens Y-position
  const width = window.innerWidth; // Browserens bredde
  const height = window.innerHeight; // Browserens højde

  const lightness = (x / width) * 100; // Beregner L (lysstyrke) i procent
  const saturation = (y / height) * 100; // Beregner S (mætning) i procent

  // Opdaterer CSS-variablerne for lightness og saturation
  document.documentElement.style.setProperty("--lightness", `${lightness}%`);
  document.documentElement.style.setProperty("--saturation", `${saturation}%`);
}

// Tilføjer en event listener for musens bevægelser
window.addEventListener("mousemove", updateColor);

// X-position styrer lysstyrke (lightness), Y-position styrer mætning (saturation).
// CSS-variablerne opdateres med style.setProperty() når musen flyttes.
