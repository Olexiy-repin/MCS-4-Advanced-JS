// https://unsplash.com/documentation
// N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg

// fetch(
//   'https://api.unsplash.com/search/photos?per_page=20&query=cat&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg'
// )
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = ({ urls: { regular }, alt_description }) => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${regular}" alt="${alt_description}" />
  </li>
  `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = event.target.elements.user_query.value;

  fetch(
    `https://api.unsplash.com/search/photos?query=${searchedValue}&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(({ results }) => {
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
