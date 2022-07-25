// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

//=======================================1
// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };
// const incrementBtnEl = document.querySelector("[data-action='increment']");
// const decrementBtnEl = document.querySelector("[data-action='decrement']");
// const valueEl = document.querySelector("#value");

// console.log(valueEl);
// console.log(incrementBtnEl);

// incrementBtnEl.addEventListener("click", () => {
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
// });
// decrementBtnEl.addEventListener("click", () => {
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
// });

//=======================================2
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

//=======================================2
const btns = document.querySelector("#counter");

console.log(btns)