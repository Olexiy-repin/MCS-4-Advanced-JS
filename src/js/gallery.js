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
const loadMoreBtnEl = document.querySelector('.js-load-more');

let currentPage = 1;
let searchedValue = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedValue = event.target.elements.user_query.value;
    currentPage = 1;

    const { data } = await fetchPhotos(searchedValue, currentPage);

    if (data.results.length === 0) {
      alert('За вашим запитом, зображень не знайдено!');

      return;
    }

    const galleryCardsTemplate = data.results
      .map(imgInfo => createGalleryCardTemplate(imgInfo))
      .join('');

    galleryEl.innerHTML = galleryCardsTemplate;

    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const { data } = await fetchPhotos(searchedValue, currentPage);

    const galleryCardsTemplate = data.results
      .map(imgInfo => createGalleryCardTemplate(imgInfo))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    if (currentPage === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
