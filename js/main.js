const COMMENT = 'dmk,lkjhgf ddhl;lkjhgsdfg hjmk,lkjhgfdmk,lkjhgfd';
const MAX_LENGTH = 140;
const MIN = 50;
const MAX = 80;

const checkStringLength = () => COMMENT.length <= MAX_LENGTH;

checkStringLength(COMMENT, MAX_LENGTH);

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(MIN, MAX);
