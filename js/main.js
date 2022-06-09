const min = 50;
const max = 80;

// eslint-disable-next-line no-unused-vars
function getRandom() {
  if ((min < 0 || max < 0) || (min > max)) {
    return ('Условия не соблюдены');
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

const txt = 'dmk,lkjhgf ddhl;lkjhgsdfg hjmk,lkjhgfdmk,lkjhgfd';
const maxLength = 140;

// eslint-disable-next-line no-unused-vars
function lengthString() {
  if (txt.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
