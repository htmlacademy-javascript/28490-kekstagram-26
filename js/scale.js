const scaleElement = document.querySelector('.img-upload__scale');
const imgElement = document.querySelector('.img-upload__preview img');
const scaleInputElement = scaleElement.querySelector('.scale__control--value');


const scaleStep = 25;
let scaleValue = 100;


const scaleHandler = (evt) => {

  if (evt.target.classList.contains('scale__control--bigger') && scaleValue < 100) {
    scaleValue += scaleStep;
  }

  if (evt.target.classList.contains('scale__control--smaller') && scaleValue > scaleStep) {
    scaleValue -= scaleStep;
  }

  scaleInputElement.value = `${scaleValue}%`;
  imgElement.style.transform = `scale(${scaleValue / 100})`;
};


scaleElement.addEventListener('click', scaleHandler);

