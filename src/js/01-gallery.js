// https://unsplash.com/documentation

import { createGalleryCardTemplate } from './templates/gallery-card-template.js';
import { fetchPhotos } from './unsplash-api.js';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let currentPage = 1;
let searchedValue = '';
let cardHeight = 0;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedValue = event.target.elements.user_query.value.trim();

    if (searchedValue === '') {
      iziToast.error({
        message: 'Поле для пошуку не має бути порожнім!',
        position: 'topRight',
      });

      searchFormEl.reset();
      galleryEl.innerHTML = '';

      return;
    }

    galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');
    currentPage = 1;

    const {
      data: { results },
    } = await fetchPhotos(searchedValue, currentPage);

    loaderEl.classList.add('is-hidden');

    if (results.length === 0) {
      iziToast.error({
        message: 'За вашим запитом, зображень не знайдено!',
        position: 'topRight',
      });

      searchFormEl.reset();
      galleryEl.innerHTML = '';

      return;
    }

    const galleryCardsTemplate = results
      .map(imgInfo => createGalleryCardTemplate(imgInfo))
      .join('');

    galleryEl.innerHTML = galleryCardsTemplate;

    cardHeight = galleryEl.querySelector('li').getBoundingClientRect().height;

    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    loaderEl.classList.add('is-hidden');

    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    loadMoreBtnEl.classList.add('is-hidden');
    loaderEl.classList.remove('is-hidden');

    const { data } = await fetchPhotos(searchedValue, currentPage);

    loadMoreBtnEl.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');

    const galleryCardsTemplate = data.results
      .map(imgInfo => createGalleryCardTemplate(imgInfo))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    loadMoreBtnEl.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');

    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
