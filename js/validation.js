const hashtagsField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const checkDescriptionLength = () => {
  const description = descriptionField.value;
  return description.length < 140;
};

const checkHashtag = () => {
  const hashtags = hashtagsField.value.split(' ').filter((item) => item !== '');
  return hashtags.every((item) => re.test(item));
};

const checkHashtagsDublicates = () => {
  const hashtags = hashtagsField.value.split(' ').filter((item) => item !== '');
  const uniqHashtags = new Set(hashtags.map((item) => item.toLowerCase()));
  return uniqHashtags.size === hashtags.length;
};

const checkHashtagsLength = () => {
  const hashtags = hashtagsField.value.split(' ').filter((item) => item !== '');
  return hashtags.length < 6;
};

const validateForm = () => {
  pristine.validate();
};

pristine.addValidator(hashtagsField, checkHashtag, 'Спецсимволы запрещены');
pristine.addValidator(hashtagsField, checkHashtagsLength, 'Максимальное количество: 5 тегов');
pristine.addValidator(hashtagsField, checkHashtagsDublicates, 'Теги повторяются');
pristine.addValidator(descriptionField, checkDescriptionLength, 'Максимальная длина 140 символов');

export { hashtagsField, descriptionField, validateForm };
