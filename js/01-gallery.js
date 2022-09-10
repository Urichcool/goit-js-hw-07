import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const addImagesMarkup = galleryItems
  .map(
    (img) => `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", addImagesMarkup);
const onGalleryLinkClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = event.target.dataset.source;
  console.log(selectedImg);
  return selectedImg;
  
}
galleryEl.addEventListener("click", onGalleryLinkClick);


console.log(galleryItems);
