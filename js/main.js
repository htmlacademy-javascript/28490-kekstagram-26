import { items } from './data.js';
import { renderMimiatures } from './pictures.js';

const bigPictureView = document.querySelector('.big-picture');

bigPictureView.classList.remove('hidden');

const bigPictureCloseButton = bigPictureView.document.querySelector('#picture-cancel');
bigPictureCloseButton.addEventListener('click', () => {
  bigPictureView.classList.add('hidden');
});

const thumbnails = document.querySelectorAll('.pictures');
const bigPicture = document.querySelector('.big-picture');

const addThumbnailClickHandler = function(thumbnail, picture){
  thumbnail.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    bigPicture[i].url = picture;
  });
};

for (let i = 1; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], items[i]);
}


renderMimiatures(items);

