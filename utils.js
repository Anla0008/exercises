export function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function qs(sel) {
  return document.querySelector(sel);
}

export function $$(sel) {
  return document.querySelectorAll(sel);
}
