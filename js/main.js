const MIN = 50;
const MAX = 80;
const COMMENT = 'dmk,lkjhgf ddhl;lkjhgsdfg hjmk,lkjhgfdmk,lkjhgfd';
const MAX_LENGTH = 140;

const checkStringLength = () => COMMENT.length <= MAX_LENGTH;

checkStringLength(COMMENT, MAX_LENGTH);

// eslint-disable-next-line no-shadow
const getRandomIntInclusive = (MIN, MAX) => {
  MIN = Math.ceil(MIN);
  MAX = Math.floor(MAX);

  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};

getRandomIntInclusive(MIN, MAX);
