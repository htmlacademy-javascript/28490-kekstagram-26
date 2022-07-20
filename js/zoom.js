const scaleValue = document.querySelector('.scale__control--value').style.transform;
const scaleValueSmaller = document.querySelector('.scale__control--smaller');
const scaleValueBigger = document.querySelector('.scale__control--bigger');

const SCALEMIN = 25;
const SCALEMAX = 100;

const changeSize = () => {
  const scaleCounter = 0.55;

  if ((scaleValue.value >= SCALEMIN) && (scaleValue <= SCALEMAX)) {
    scaleValueSmaller.addEventListener('click', () => {
      scaleValue.style.transform = scaleCounter - 25;
    });
    scaleValueBigger.addEventListener('click', () => {
      scaleValue.style.tranform = scaleValue.value - 0.25;
    });
  }
};

export { changeSize };

