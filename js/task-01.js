const categories = document.querySelector("#categories");
const allItems = document.querySelectorAll("#categories .item");
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const allCategories = (categories) =>
  console.log(`Number of categories: ${categories.children.length}`);

allCategories(categories);

// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const elemetCategory = (items) => {
  items.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};
elemetCategory(allItems)