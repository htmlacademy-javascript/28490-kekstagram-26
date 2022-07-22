import { hashtagsField, descriptionField, validateForm, } from './validation.js';

const photoEditModal = document.querySelector('.img-upload__overlay');
const imgUploader = document.querySelector('#upload-file');
const body = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');

const closeForm = () => {
  photoEditModal.classList.add('hidden');
  body.classList.remove('modal-open');

  imgUploader.value = '';
  hashtagsField.value = '';
  descriptionField.value = '';
};

function onEscPress () {

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hashtagsField.stopPropagation('focus');
      closeForm();
    }
  });
}

function onCloseButtonPress () {
  closeButton.addEventListener('click', () => {
    closeForm();
  });
}

const openForm = () => {
  photoEditModal.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscPress);
  closeButton.addEventListener('click', onCloseButtonPress);
  hashtagsField.addEventListener('input', validateForm);
};

const activatePhotoEditorModal = () => {
  imgUploader.addEventListener('change', openForm);
};


export default activatePhotoEditorModal;
