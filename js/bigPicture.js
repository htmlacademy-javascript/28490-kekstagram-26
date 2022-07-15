const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const commentsLoaderButton = document.querySelector('.comments-loader');
const socialCommentsCount = document.querySelector('.social__comment-count');
// const bigPictureSocial = document.querySelector('.big-picture__social');
const description = document.querySelector('.social__caption');
let commentsCount = document.querySelector('.comments-count').textContent;
let likesCount = document.querySelector('.likes-count').textContent;
// const socialComments = document.querySelector('.social__comments');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onCloseButtonPress);
  closeButton.removeEventListener('click', closeBigPictureEscPress);
};

const openBigPicture = (mineature) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentsCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');

  bigPictureImg.src = mineature.url;
  likesCount = mineature.textContent;
  commentsCount = mineature.textContent;
  description.textContent = mineature.textContent;

  document.addEventListener('keydown', onCloseButtonPress);
  closeButton.addEventListener('click', closeBigPictureEscPress);
};

function closeBigPictureEscPress () {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBigPicture();
    }
  });
}

function onCloseButtonPress () {
  closeButton.addEventListener('click', () => {
    closeBigPicture();
  });
}

export { closeBigPictureEscPress, openBigPicture, closeBigPicture, onCloseButtonPress, closeButton };

