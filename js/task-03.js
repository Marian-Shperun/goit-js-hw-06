const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const listGallery = document.querySelector(".gallery");

listGallery.style.display = "flex";
listGallery.style.listStyle = "none";
// console.log(listGallery);

// ======================function 1
// function addGalleryImg(markup, arr) {
//   let listImg = [];
//   arr.forEach((el) => {
//     console.log(el);
//     const img = document.createElement("img");

//     img.classList.add("gallery__img");
//     img.src = el.url;
//     img.alt = el.alt;
//     img.width = 200;

//     listImg.push(img);

//     console.log(listImg);
//   });
//   markup.append(...listImg);
// }

// addGalleryImg(listGallery, images);


// ======================function 2
function addGalleryImg(markup, arr) {
  let listImg = [];
  arr.forEach((el) => {
    // console.log(el);
    const itemGallery = document.createElement("li");

    itemGallery.innerHTML = `<img class="gallery__img" src = "${el.url}" alt = "${el.alt}">`;
    listImg.push(itemGallery);

    itemGallery.style.marginRight = 10 + "px";
    console.log(listImg);
  });
  markup.append(...listImg);
}

addGalleryImg(listGallery, images);

// ======================function 3
// const addGalleryImg = (markup, arr) =>
//   markup.insertAdjacentHTML(
//     "beforeend",
//     arr.map(
//       ({ url, alt, width }) =>
//         `<li class = "gallery__item"><img class = "gallery__img" src = "${url}" alt = "${alt}" width = "${width}"></img></li>`
//     )
//   );
// addGalleryImg(listGallery, images);
