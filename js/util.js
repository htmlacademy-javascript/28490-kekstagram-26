import {comments} from './data.js';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getComment = (quantity) => {
  const comment = comments[getRandomIntInclusive(0, 5)];
  if (quantity === 1) {
    return comment;
  } else {
    let secondSentanceComment = comments[getRandomIntInclusive(0, 5)];
    while (comment === secondSentanceComment) {
      secondSentanceComment = comments[getRandomIntInclusive(0, 5)];
    }
    return comment.concat(secondSentanceComment);
  }
};

export {getRandomIntInclusive, getComment};
