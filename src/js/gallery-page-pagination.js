// https://unsplash.com/documentation

import Pagination from 'tui-pagination';
import { createGalleryCardTemplate } from './templates/gallery-card-template.js';
import { fetchPhotos } from './unsplash-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const paginationEl = document.querySelector('.js-pagination');

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

    const paginationInstance = new Pagination(paginationEl, {
      totalItems: data.total,
      itemsPerPage: 10,
      visiblePages: 3,
      page: 1,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn tui-page">{{page}}</a>',
        currentPage: '<a href="#" class="tui-page-btn tui-page is-active">{{page}}</a>',
        moveButton: ({ type }) => {
          let template = '';

          if (type === 'first') {
            template = `<a href="#" class="tui-page-btn tui-${type}"><span class="tui-ico-${type}">&#60;&#60;</span></a>`;
          }

          if (type === 'prev') {
            template = `<a href="#" class="tui-page-btn tui-${type}"><span class="tui-ico-${type}">&#60;</span></a>`;
          }

          if (type === 'next') {
            template = `<a href="#" class="tui-page-btn tui-${type}"><span class="tui-ico-${type}">&#62;</span></a>`;
          }

          if (type === 'last') {
            template = `<a href="#" class="tui-page-btn tui-${type}"><span class="tui-ico-${type}">&#62;&#62;</span></a>`;
          }

          return template;
        },

        disabledMoveButton: ({ type }) => {
          let template = '';

          if (type === 'first') {
            template = `<span class="tui-page-btn tui-is-disabled tui-${type}"><span class="tui-ico-${type}">&#60;&#60;</span></span>`;
          }

          if (type === 'prev') {
            template = `<span class="tui-page-btn tui-is-disabled tui-${type}"><span class="tui-ico-${type}">&#60;</span></span>`;
          }

          if (type === 'next') {
            template = `<span class="tui-page-btn tui-is-disabled tui-${type}"><span class="tui-ico-${type}">&#62;</span></span>`;
          }

          if (type === 'last') {
            template = `<span class="tui-page-btn tui-is-disabled tui-${type}"><span class="tui-ico-${type}">&#62;&#62;</span></span>`;
          }

          return template;
        },
      },
    });

    paginationInstance.on('afterMove', async ({ page }) => {
      try {
        currentPage = page;

        const { data } = await fetchPhotos(searchedValue, currentPage);

        const galleryCardsTemplate = data.results
          .map(imgInfo => createGalleryCardTemplate(imgInfo))
          .join('');

        galleryEl.innerHTML = galleryCardsTemplate;
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
