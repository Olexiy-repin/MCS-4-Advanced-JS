// https://jsonplaceholder.typicode.com/

import { getPosts } from './jsonPlaceholder-api';
import { createPostCard } from './templates/post-card-template';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let currentPage = 1;

const renderPosts = async () => {
  try {
    const { data } = await getPosts(currentPage);

    const postCardsTemplate = data.map(post => createPostCard(post)).join('');

    postsListEl.innerHTML = postCardsTemplate;

    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    const { data } = await getPosts(currentPage);

    if (data.length === 0) {
      loadMoreBtnEl.classList.add('is-hidden');

      alert('Постів більше не знайдено!');

      return;
    }

    const postCardsTemplate = data.map(post => createPostCard(post)).join('');

    postsListEl.insertAdjacentHTML('beforeend', postCardsTemplate);
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
