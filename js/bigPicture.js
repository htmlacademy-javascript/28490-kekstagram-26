const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const commentsLoaderButton = document.querySelector('.comments-loader');
const socialCommentsCount = document.querySelector('.social__comment-count');
const description = document.querySelector('.social__caption');
const commentsCount = document.querySelector('.comments-count');
const likesCount = document.querySelector('.likes-count');
const socialCommentsList = document.querySelector('.social__comments');
const bigPictureTemplate = document
  .querySelector('#comment')
  .content.querySelector('.social__comment');

const COMMENTS_BASIS_COUNT = 5;
let showedCommentAmount = 0;
let basisComments = null;


const getBigPictureComments = () => {
  const fragment = document.createDocumentFragment();

  const currentComments = basisComments.slice(showedCommentAmount, showedCommentAmount + COMMENTS_BASIS_COUNT);
  showedCommentAmount += currentComments.lenght;

  currentComments.forEach((comment) => {
    const {avatar, message} = comment;
    const element = bigPictureTemplate.cloneNode(true);

    element.querySelector('.social__picture').src = avatar;
    element.querySelector('.social__text').textContent = message;

    fragment.appendChild(element);
  });

  const commentsCountChildNode = socialCommentsCount.childNodes[0];
  commentsCountChildNode.nodeValue = `${showedCommentAmount} из `;

  if (showedCommentAmount === basisComments.lenght) {
    commentsLoaderButton.classList.add('hidden');
  }

  socialCommentsList.appendChild(fragment);
};


const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('click', onCloseButtonClick);
  closeButton.removeEventListener('keydown', closeBigPictureEscPress);
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderButtonClick);
};

const openBigPicture = (mineature) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');


  bigPictureImg.src = mineature.url;
  likesCount.textContent = mineature.likes;
  commentsCount.textContent = mineature.comments.lenght;
  description.textContent = mineature.description;

  basisComments = mineature.comments;

  getBigPictureComments();

  document.addEventListener('keydown', closeBigPictureEscPress);
  closeButton.addEventListener('click', onCloseButtonClick);
  commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
};

function onCommentsLoaderButtonClick () {
  getBigPictureComments();
}

function closeBigPictureEscPress (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

function onCloseButtonClick () {
  closeBigPicture();
}


export { openBigPicture };

