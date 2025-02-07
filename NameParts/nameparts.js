const fullName = "Anarikke Cristina Kongsager Larsen"; // En string der repræsenterer det fulde navn

// Udtrækker fornavnet ved at bruge substring fra starten (0) til første mellemrum
const firstName = fullName.substring(0, fullName.indexOf(" "));
console.log(firstName); // Logger 'Anarikke'

// Udtrækker mellemnavnet ved at finde tekst mellem det første og det sidste mellemrum
const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" ")).trim();
console.log(middleName); // Logger 'Cristina Kongsager'

// Udtrækker efternavnet ved at bruge substring fra sidste mellemrum til slutningen af strengen
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
console.log(lastName); // Logger 'Larsen'
