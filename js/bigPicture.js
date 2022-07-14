const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeBigPictureEscPress = () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBigPicture();
    }
  });
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.className = 'modal-open';
};

const onCloseButtonPress = () => {
  closeButton.addEventListener('click', () => {
    closeBigPicture();
  });
};

export { closeBigPictureEscPress, openBigPicture, closeBigPicture, onCloseButtonPress, closeButton };

