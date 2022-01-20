import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(`.gallery`);

const galleryMarkup = galleryItems.map(({ preview, original, description }) => { 
  return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
  })
    .join("");
  
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
        const img = event.target.dataset.source;

        const modal = basicLightbox.create(`
    <img src="${img}" width="1280">
`);
        
        modal.show();

        galleryList.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.close();
      }
    });
  }
});

console.log(galleryItems);
