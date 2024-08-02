export const createGalleryCardTemplate = ({ urls: { regular }, alt_description }) => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${regular}" alt="${alt_description}" />
  </li>
  `;
};
