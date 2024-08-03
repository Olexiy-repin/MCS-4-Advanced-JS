// https://unsplash.com/documentation

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

import { createGalleryCardTemplate } from './templates/gallery-card-template.js';
import { fetchPhotos } from './unsplash-api.js';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = event.target.elements.user_query.value.trim();

  if (searchedValue === '') {
    iziToast.error({
      message: 'Поле для пошуку не має бути порожнім!',
      position: 'topRight',
    });

    searchFormEl.reset();

    return;
  }

  loaderEl.classList.remove('is-hidden');

  fetchPhotos(searchedValue)
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    })
    .then(({ results }) => {
      if (results.length === 0) {
        iziToast.error({
          message: 'За вашим запитом, зображень не знайдено!',
          position: 'topRight',
        });

        searchFormEl.reset();

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
