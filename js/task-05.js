// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("input#name-input");
// console.log(inputEl);
const valueInput = document.querySelector("span#name-output");
// console.log(valueInput);

// inputEl.addEventListener("input", (event) => {
//   console.log(event.currentTarget.value);
//   if (event.currentTarget.value === "") {
//     // console.log("input empty ");
//     return (valueInput.textContent = "Anonymous");
//   }
//   valueInput.textContent = event.currentTarget.value;
// });

const inputHandler = (event) => {
  event.currentTarget.value === ""
    ? (valueInput.textContent = "Anonymous")
    : (valueInput.textContent = event.currentTarget.value);
};

inputEl.addEventListener("input", inputHandler)
