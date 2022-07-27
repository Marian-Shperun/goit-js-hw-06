const categories = document.querySelector("#categories");
const allItems = document.querySelectorAll("#categories .item");

const allCategories = (categories) =>
  console.log(`Number of categories: ${categories.children.length}`);

allCategories(categories);


const elemetCategory = (items) => {
  items.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};
elemetCategory(allItems)