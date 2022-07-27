const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  containerDiv: document.querySelector("div#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  let collectionMarkup = [];
  let divSize = 30;
  const { input, containerDiv } = refs;

  if (input.value === "") {
    return alert("Введіть число");
  } else if (input.value < +input.min || input.value > +input.max) {
    return alert(`Введене число повинно бути від ${input.min} до ${input.max}`);
  }

  for (let index = 0; index < input.value; index += 1) {
    collectionMarkup += `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()};"></div>`;
    divSize += 10;
  }

  containerDiv.innerHTML += collectionMarkup;
}

function destroyBoxes() {
  refs.containerDiv.innerHTML = "";
  refs.input.value = "";
}
