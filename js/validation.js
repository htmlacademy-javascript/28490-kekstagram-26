import { openPictureEditor } from './editor.js';

const error = document.querySelector('.error__inner');

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    openPictureEditor();
  } else {
    return error;
  }
});


