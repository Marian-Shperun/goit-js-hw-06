// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector("button.change-color");
const valueColorEl = document.querySelector("span.color");

btnEl.addEventListener("click", () => {
  const bodyEl = document.body;
  bodyEl.style.backgroundColor = getRandomHexColor();
  valueColorEl.textContent = getRandomHexColor();
});
