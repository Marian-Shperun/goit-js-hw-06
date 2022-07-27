const inputEl = document.querySelector("input#name-input");

const valueInput = document.querySelector("span#name-output");

const inputHandler = (event) => {
  event.currentTarget.value === ""
    ? (valueInput.textContent = "Anonymous")
    : (valueInput.textContent = event.currentTarget.value);
};

inputEl.addEventListener("input", inputHandler);
