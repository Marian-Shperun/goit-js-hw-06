const inputEl = document.querySelector("#validation-input");

console.log(inputEl);
inputEl.addEventListener("blur", function (event) {
  if (event.currentTarget.value.length === +inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    console.log(event.currentTarget.value.length);
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});