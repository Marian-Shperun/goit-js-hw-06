const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

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
console.log(listIngredients);
