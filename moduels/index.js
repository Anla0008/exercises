// console.log("Scriptet virker");
import { getRandomNumber } from "./utils.js";
import { $ } from "./utils.js";
import { $$ } from "./utils.js";

sayHello("Jonny");

console.log(getRandomNumber(2));

$("h1").textContent = "Dette er en H1'er";

$$("h1").textContent = "Dette er stadig en H1'er";
