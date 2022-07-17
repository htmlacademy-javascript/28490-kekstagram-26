import { openBigPicture} from './bigPicture.js';

const pictures = document.querySelector('.pictures');
const templateInner = document.querySelector('#picture').content;
const template = templateInner.querySelector('.picture');

const renderMimiatures = (items) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const {url, comments, likes} = item;
    const element = template.cloneNode(true);

    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__comments').textContent = comments.length;
    element.querySelector('.picture__likes').textContent = likes;

    element.addEventListener('click', () => {
      openBigPicture(item);
    });

    fragment.appendChild(element);
  });
  pictures.appendChild(fragment);
};


export  { renderMimiatures };
