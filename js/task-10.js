// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
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
  let collectionMarkup = "";
  let divSize = 30;
  const { input, containerDiv } = refs;

  if (input.value < +input.min || input.value > +input.max) {
    return alert(`Введене число від ${input.min} до ${input.max}`);
  }
  for (let index = 0; index < input.value; index += 1) {
    collectionMarkup += `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()};"></div>`;
    divSize += 10;
  }
  containerDiv.innerHTML = collectionMarkup;
}

function destroyBoxes() {
  refs.containerDiv.innerHTML = "";
}
