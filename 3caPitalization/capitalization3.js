// Laver en konstant variabel med variablen aName og værdien "Anarikke", som er en streng som der kan manipuleres
const aName = "Anarikke";

const thirdUpperCap = aName.substring(0, 3).toLowerCase().concat(aName[3].toUpperCase(), aName.substring(4).toLowerCase());

console.log(thirdUpperCap);

// substring(0, 2) tager en del af strengen fra indeks 0 til (men ikke inklusiv) indeks 3, hvilket betyder de første tre tegn, altså "Ana".
// toLowerCase() konverterer teksten "Ana" til små bogstaver, så resultatet bliver "ana".
// concat() bruges til at kombinere strenge sammen --> Her sammensætter vi flere dele af aName for at lave en ny streng.

// aName[3] refererer til det fjerde tegn i aName, som er "r".
// toUpperCase() gør dette tegn stort, så "r" bliver "R".

// substring(4) udtrækker strengen fra indeks 4 til slutningen, hvilket er "ikke" i "Anarikke".
// toLowerCase() konverterer resten af strengen til små bogstaver, i dette tilfælde er "ikke" allerede små, så den forbliver uændret.

// Alle delene kombineres til den endelige streng ved hjælp af concat(). Resultatet af dette vil være "anaRikke".
