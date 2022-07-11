const pictures = document.querySelector('.pictures');
const templateInner = document.querySelector('#picture').content;
const template = templateInner.querySelector('.picture');

const renderMimiatures = (items) => {
  const fragment = document.createDocumentFragment();

  items.forEach(({url, comments, likes}) => {
    const element = template.cloneNode(true);

    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__comments').textContent = comments.length;
    element.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(element);
  });
  pictures.appendChild(fragment);
};

export  {renderMimiatures};
