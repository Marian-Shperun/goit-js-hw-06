const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

const changeFontSize = event =>
  textEl.style.fontSize = `${event.currentTarget.value}px`;


inputEl.addEventListener("input", changeFontSize);
