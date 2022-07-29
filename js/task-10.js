const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  containerDiv: document.querySelector("div#boxes"),
};
let divSize = 20;
let magnificationSize = "";

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  const collectionMarkup = [];
  const { input, containerDiv } = refs;

  if (input.value === "") {
    return alert("Введіть число");
  } else if (input.value < +input.min || input.value > +input.max) {
    return alert(`Введене число повинно бути від ${input.min} до ${input.max}`);
  }

  for (let index = 1; index <= input.value; index += 1) {
    magnificationSize = divSize + index * 10;
    const item = `<div style="width: ${magnificationSize}px; height: ${magnificationSize}px; background-color: ${getRandomHexColor()};"></div>`;

    collectionMarkup.push(item);
  }
  divSize = magnificationSize;
  containerDiv.innerHTML += collectionMarkup.join("");
}

function destroyBoxes() {
  refs.containerDiv.innerHTML = "";
  refs.input.value = "";
  divSize = 20;
}
