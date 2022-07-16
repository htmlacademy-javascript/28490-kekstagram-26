const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const commentsLoaderButton = document.querySelector('.comments-loader');
const socialCommentsCount = document.querySelector('.social__comment-count');
const description = document.querySelector('.social__caption');
const commentsCount = document.querySelector('.comments-count');
const likesCount = document.querySelector('.likes-count');
const socialComments = document.querySelector('.social__comments');
const bigPictureTemplate = document.querySelector('#comment').querySelector('.comment');
// const commentText = document.querySelector('.social__text');

const getCommentsBigPicture = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const {url, commentText} = comment;
    const element = bigPictureTemplate.cloneNode(true);

    element.querySelector('.social__picture').src = url;
    element.querySelector('.social__text').textContent = commentText;

    fragment.appendChild(element);
  });
  socialComments.appendChild(fragment);
};

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
  likesCount.textContent = mineature.likes;
  commentsCount.textContent = mineature.comments.lenght;
  description.textContent = mineature.description;
  getCommentsBigPicture(mineature.comments);

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

export { openBigPicture };

