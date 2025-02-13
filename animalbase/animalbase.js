"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  // viser "ready" i konsollen
  console.log("ready");

  // Registrerer event-listeners for filterknapper og indlæser dataen fra JSON
  registerButton();
  loadJSON();
}

function registerButton() {
  // Tilføjer klik-event til alle knapperne, der har attributten "data-action" med værdien "filter"
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function selectFilter(event) {
  // Hent værdien af "data-filter" fra det klikkede element
  const filter = event.target.dataset.filter;
  // Kæder filterList-funktionen med den valgte filtertype
  filterList(filter);
  // Udskriver filtertypen i konsollen
  console.log(filter);
}

function filterList(animalType) {
  let filteredList = allAnimals;
  if (animalType === "cat") {
    //Create a filtered list af oly cats
    filteredList = allAnimals.filter(isCat);
  } else if (animalType === "dog") {
    //Create a filtered list af oly dogs
    filteredList = allAnimals.filter(isDog);
  }
  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}

function isDog(animal) {
  return animal.type === "dog";
}

function sortList(sortBy) {
  let sortedList = allAnimals;

  if (sortBy === "name") {
    sortedList = sortedList.sort(sortByName);
  } else if (sortBy === "type") {
    sortedList = sortedList.sort(sortByType);
  }
  displayList(sortedList);
}

function sortByName(animalA, animalB) {
  if (animalA.name < animalB.name) {
    return -1;
  } else return 1;
}

// Funktion til at indsætte en liste af dyr i HTML
function sortByType(animalA, animalB) {
  if (animalA.type < animalB.type) {
    return -1;
  } else return 1;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
