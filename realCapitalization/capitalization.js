"use strict";

// Laver en konstant variabel med variablen aName og værdien "Peter", som er en streng som der kan manipuleres
const aName = "Anarikke";

// Gør det første bogstav stort og resten små
const capitalizedName = aName[0].toUpperCase() + aName.substring(1).toLowerCase();

console.log(capitalizedName);

// 	aName[0].toUpperCase(): Tager det første tegn i strengen (indeks 0, altså "A") og konverterer det til stort bogstav.
// aName.substring(1).toLowerCase(): Tager resten af strengen fra indeks 1 og frem (det er "narikke") og konverterer det til små bogstaver.
// +: Bruges til at sammenkæde (concatenere) de to dele, altså det store første bogstav og resten i små bogstaver.
