const fullName = "Albus Percivao Wulfric Brian Dumbledore";
const len = fullName.length;
console.log(`${fullName} is ${len} characters long`);

const letter3 = fullName[2];
console.log(`The third letter is: ${letter3}`);

const letter7 = fullName[6];
console.log(`The seventh letter is: ${letter7}`);

console.log(fullName.indexOf("d"));

const lastEIndex = fullName.lastIndexOf("e");
console.log(`Det sidste "e" findes ved index: ${lastEIndex}`);
