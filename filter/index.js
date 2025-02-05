const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Mona", type: "dog" },
  { name: "Freddie", type: "dog" },
];

function all(animal) {
  return true;
}
function none(animal) {
  return false;
}

console.log("ALL", animal.filter(all));
console.log("NONE", animal.filter(none));

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

console.log(animals.filter(isDog));
