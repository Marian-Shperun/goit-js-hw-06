const btnEl = document.querySelector("button.change-color");
const valueColorEl = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onBtnClick() {
  const bodyEl = document.body;
  bodyEl.style.backgroundColor = getRandomHexColor();
  valueColorEl.textContent = getRandomHexColor();
}
btnEl.addEventListener("click", onBtnClick);
