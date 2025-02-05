// bc array med breadcrumb data:
// Hvert punkt består af et 'name' og et 'link'.
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Når DOM'en er loadet, tilføjer vi en event listener på knappen.
document.addEventListener("DOMContentLoaded", () => {
  // Når knappen klikkes, kaldes showBread funktionen
  document.getElementById("generate-btn").addEventListener("click", showBread);
});

// Peger på <ul> elementet, hvor der viser breadcrumbs
const ulPointer = document.querySelector("ul");

// Funktion, der viser breadcrumbs baseret på arrayet 'arr'
function showBreadcrumb(arr) {
  ulPointer.innerHTML = ""; // Tømmer ul'en før vi tilføjer nye breadcrumbs

  // Loop gennem hvert element i 'arr' og opret HTML for hvert breadcrumb
  arr.forEach((each, index) => {
    // Hvis det ikke er sidste breadcrumb, lav det som et link og tilføj '/'
    if (index < arr.length - 1) {
      ulPointer.innerHTML += `<li><a href="${each.link}">${each.name}</a> / </li>`;
    } else {
      // Hvis det er sidste breadcrumb, vis det uden link og uden '/'
      ulPointer.innerHTML += `<li>${each.name}</li>`;
    }
  });
}

// Funktion, der bliver kaldt når knappen trykkes - genererer breadcrumbs
function showBread() {
  showBreadcrumb(bc); // Kalder showBreadcrumb med vores bc array
}
