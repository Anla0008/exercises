"use strict";

// Grund funktionen, opgaverne tager udgangspunkt i.

// Eksperiment 1

// function greeting(firstName) {
//   return `Hello, ${firstName}`;
// }

// const result = greeting("Anarikke");
// console.log(result);

// ************************************************

// Eksperiment 2

// 1
// Fejl: En parameter kan ikke være en string, den skal være en variabel.
// Derfor virker function greeting("any name") { ... } ikke.

// function greeting("any name") {
//   return `Hello, ${firstName}`;
// }

// const result = greeting("Anarikke");
// console.log(result);

// ************************************************

// 2
// Funktionen kaldes direkte i console.log.
// Først evalueres greeting("any name"), som returnerer en værdi.
// Derefter printer console.log() værdien i konsollen.
// Dette virker, da funktionen retunere en værdi som "console.log()" udskriver i konsollen.

// function greeting(firstName) {
//   return `Hello, ${firstName}`;
// }

// console.log(greeting("any name"));

// ************************************************

// 3
// Hvis vi kalder funktionen UDEN argument, bliver firstName = undefined
// Hvorfor? Fordi vi ikke giver en værdi, og JavaScript sætter manglende argumenter til undefined.
// Hvis vi fjerner parameteren fra funktionen men stadig bruger firstName, får vi en fejl!

// function greeting(firstName) {
//   return `Hello, ${firstName}`;
// }
// const result = greeting();
// console.log(result);

// ************************************************

// 4
// Funktionen "greeting" tager en parameter, firstName, og returnerer en string, der siger "Hello" efterfulgt af navnet.
// Når vi kalder greeting("a name") inde i en template literal, bliver resultatet af funktionen (i dette tilfælde "Hello, a name")
// sat ind i den større string.
// Template literal’en samler derefter "Greeting is" med resultatet af funktionen, så det endelige output bliver
// "Greeting is Hello, a name".

// function greeting(firstName) {
//   return `Hello, ${firstName}`;
// }

// const txt = `Greeting is ${greeting("a name")}`;
// console.log(txt);

// ************************************************

// 5
// Når du kalder funktionen manuelt i konsollen, f.eks. `greeting("Anarikke")`,
// vil returværdien (f.eks. `"Hello, Anarikke"`) automatisk blive vist i konsollen,
// fordi konsollen viser resultatet af det sidste udtryk, der bliver evalueret.

// ************************************************
