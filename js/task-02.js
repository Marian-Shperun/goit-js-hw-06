const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const listIngredients = document.querySelector("#ingredients");
function addMarkup(markup, arr) {
  let elementList = [];
  arr.forEach((ingredient) => {
    const itemIngredient = document.createElement("li");

    itemIngredient.textContent = ingredient;
    itemIngredient.classList.add("ingredients__item");

    elementList.push(itemIngredient);
  });
  markup.append(...elementList);
}
addMarkup(listIngredients, ingredients);
