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
const bigPictureTemplate = document.querySelector('#comment').content.querySelector('.social__comment');


const getBigPictureComments = (comments) => {
  const fragment = document.createDocumentFragment();

  socialComments.innerHTML = '';

  comments.forEach((comment) => {
    const {avatar, message} = comment;
    const element = bigPictureTemplate.cloneNode(true);

    element.querySelector('.social__picture').src = avatar;
    element.querySelector('.social__text').textContent = message;

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
  socialCommentsCount.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');

  bigPictureImg.src = mineature.url;
  likesCount.textContent = mineature.likes;
  commentsCount.textContent = mineature.comments.lenght;
  description.textContent = mineature.description;
  getBigPictureComments(mineature.comments);

  document.addEventListener('keydown', onCloseButtonPress);
  closeButton.addEventListener('click', closeBigPictureEscPress);
};

function closeBigPictureEscPress () {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeBigPicture();
    }
  });
}

function onCloseButtonPress () {
  closeButton.addEventListener('click', () => {
    closeBigPicture();
  });
}


// const showedCommentsCount = bigPicture.querySelector('.showed-comments-count');
// const commentsPerPage = 5;
// let showedCommentAmount = commentsPerPage;

// const renderComments = (commentsToRender, showMore) => {

//   const commentsFragment = document.createDocumentFragment();

//   commentsToRender.forEach( (comment) => {
//     const {avatar, message} = comment;
//     const element = bigPictureTemplate.cloneNode(true);
//     const postComments = comment.comments;
//     const img = comment.querySelector('.social__picture');
//     img.src = comment.avatar;
//     comment.querySelector('.social__text').textContent = element.message;

//     commentsFragment.append(element);
//   });

//   if (!showMore) {
//     socialComments.innerHTML = '';
//   }
//   socialComments.append(commentsFragment);
// };

// bigPicture.querySelector('.social__caption').textContent = description;

// let commentsToRender = postComments.slice(0, commentsPerPage);
// renderComments(commentsToRender);

// const clickShowMore = (evt) => {
//   evt.preventDefault();


//   commentsToRender = postComments.slice(showedCommentAmount, showedCommentAmount + commentsPerPage);
//   showedCommentAmount += commentsPerPage;

//   renderComments(commentsToRender, true);

//   if (postComments.length <= showedCommentAmount) {
//     commentsLoaderButton.classList.add('hidden');
//     showedCommentsCount.textContent = `${postComments.length}`;
//   } else {
//     showedCommentsCount.textContent = `${showedCommentAmount}`;
//     commentsLoaderButton.classList.remove('hidden');
//   }
// };

// if (postComments.length <= commentsPerPage) {
//   commentsLoaderButton.classList.add('hidden');
//   showedCommentsCount.textContent = `${postComments.length}`;
// }
// else {
//   commentsLoaderButton.classList.remove('hidden');
//   commentsLoaderButton.addEventListener('click', clickShowMore);
//   showedCommentsCount.textContent = `${commentsPerPage}`;
// }


export { openBigPicture };

