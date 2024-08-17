// https://unsplash.com/documentation

import { createGalleryCardTemplate } from './templates/gallery-card-template.js';
import { fetchPhotos } from './unsplash-api.js';
import iziToast from 'izitoast';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const observeredEl = document.querySelector('.js-observered');

let currentPage = 1;
let searchedValue = '';

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 600px 0px',
  threshold: 1,
};

const observerCallBack = async entries => {
  if (entries[0].isIntersecting) {
    try {
      currentPage++;

      loaderEl.classList.remove('is-hidden');

      const { data } = await fetchPhotos(searchedValue, currentPage);

      loaderEl.classList.add('is-hidden');

      const galleryCardsTemplate = data.results
        .map(imgInfo => createGalleryCardTemplate(imgInfo))
        .join('');

      galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

      if (currentPage === data.total_pages) {
        observerInstance.unobserve(observeredEl);
      }
    } catch (err) {
      loaderEl.classList.add('is-hidden');

      console.log(err);
    }
  }
};

const observerInstance = new IntersectionObserver(observerCallBack, observerOptions);

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

    observerInstance.observe(observeredEl);
  } catch (err) {
    loaderEl.classList.add('is-hidden');

    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    loaderEl.classList.remove('is-hidden');

    const { data } = await fetchPhotos(searchedValue, currentPage);

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
    }
  } catch (err) {
    loaderEl.classList.add('is-hidden');

    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
