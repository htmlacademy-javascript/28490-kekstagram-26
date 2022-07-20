const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
// const imgUploadPreview = document.querySelector('.img-upload__preview img');

// const Effect = {
//   chrome: { min: 0, max: 1, step: 0.1, style: (value) => `grayscale(${value})` },
//   sepia: { min: 0, max: 1, step: 0.1, style: (value) => `sepia(${value})` },
//   marvin: { min: 0, max: 100, step: 1, style: (value) => `invert(${value}%)` },
//   phobos: { min: 0, max: 3, step: 0.1, style: (value) => `blur(${value}px)` },
//   heat: { min: 1, max: 3, step: 0.1, style: (value) => `brightness(${value})` },
//   none: { min: 0, max: 100, step: 1, style: () => 'none' },
// };

// const effectLevel = document.querySelector('.effect-level');
// const sliderElement = effectLevel.querySelector('.effect-level__slider');
// const sliderValue = effectLevel.querySelector('.effect-level__value');

const openPictureEditor = () => {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');

};

// const uploadingFile = document.querySelector('#upload-file');
// const imgUploadPreview = () => {
//   uploadingFile.addEventListener('change', openPictureEditor);
// };

git 
function cancelUpload() {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onCloseButtonPress);
}

function onCloseButtonPress () {
  closeButton.addEventListener('click', () => {
    cancelUpload();
  });
}

// const imgEffect = {
//   effect: 'none',
//   value: 100,
// };

// const resetEffectImage = () => {
//   imgEffect.effect = 'none';
//   imgEffect.value = 100;
// };
export {openPictureEditor};
