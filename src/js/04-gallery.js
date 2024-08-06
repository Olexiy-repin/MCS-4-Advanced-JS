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

const onSearchFormSubmit = async event => {
  event.preventDefault();

  const searchedValue = event.target.elements.user_query.value;

  try {
    const { data } = await fetchPhotos(searchedValue);

    if (data.results.length === 0) {
      alert('За вашим запитом, зображень не знайдено!');

      return;
    }

    const galleryCardsTemplate = data.results
      .map(imgInfo => createGalleryCardTemplate(imgInfo))
      .join('');

    galleryEl.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
