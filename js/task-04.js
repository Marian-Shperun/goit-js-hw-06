const incrementBtnEl = document.querySelector("[data-action='increment']");
const decrementBtnEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector("#value");
let counterValue = 0;

incrementBtnEl.addEventListener("click", increase);
decrementBtnEl.addEventListener("click", reduce);

function increase() {
  valueEl.textContent = counterValue += 1;
}
function reduce() {
  valueEl.textContent = counterValue -= 1;
}
