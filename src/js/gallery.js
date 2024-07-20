// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const pictures = [
  {
    url: '../img/img-01.jpg',
    bannerUrl: '../img/banner-01.jpg',
    alt: 'wet mountain valley',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-02.jpg',
    bannerUrl: '../img/banner-02.jpg',
    alt: 'body of water surrounded by trees',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-03.jpg',
    bannerUrl: '../img/banner-03.jpg',
    alt: 'landscape photography of mountains',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-04.jpg',
    bannerUrl: '../img/banner-04.jpg',
    alt: 'brown wooden dock between lavender flower field',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-05.jpg',
    bannerUrl: '../img/banner-05.jpg',
    alt: 'body of water surrounding with trees',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-06.jpg',
    bannerUrl: '../img/banner-06.jpg',
    alt: 'forest heat by sunbeam',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-07.jpg',
    bannerUrl: '../img/banner-07.jpg',
    alt: 'photo of valley',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-08.jpg',
    bannerUrl: '../img/banner-08.jpg',
    alt: 'green grass field during sunset',
    width: 300,
    height: 150,
  },
  {
    url: '../img/img-09.jpg',
    bannerUrl: '../img/banner-09.jpg',
    alt: 'aerial shot of forest',
    width: 300,
    height: 150,
  },
];

/* Gallery Card Template
  <li class="gallery__item">
    <a class="gallery__link" href="" >
      <img src="" alt="" width="" height="" />
    </a>
  </li>
*/

const createGalleryCardTemplate = pictureInfo => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${pictureInfo.bannerUrl}" >
        <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}" />
      </a>
    </li>
  `;
};

const galleryCardsTemplate = pictures.map(imgInfo => createGalleryCardTemplate(imgInfo)).join('');

document.querySelector('.js-gallery').innerHTML = galleryCardsTemplate;

new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
