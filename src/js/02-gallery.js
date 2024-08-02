// https://unsplash.com/documentation

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

import { createGalleryCardTemplate } from './templates/gallery-card-template.js';
import { fetchPhotos } from './unsplash-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = event.target.elements.user_query.value;

  fetchPhotos(searchedValue)
    .then(({ results }) => {
      if (results.length === 0) {
        alert('За вашим запитом, зображень не знайдено!');

        return;
      }

      const galleryCardsTemplate = results
        .map(imgInfo => createGalleryCardTemplate(imgInfo))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
