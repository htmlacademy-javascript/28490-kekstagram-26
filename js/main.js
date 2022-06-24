const ITEMS = [];
ITEMS.COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];


const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 1; i < 26; i++) {
  const AVATAR_NUMBER = getRandomIntInclusive(1, 6);
  const LIKES = getRandomIntInclusive(15,200);
  ITEMS[i] = {
    ID: i,
    URL: `photos/${i}.jpg`,
    Avatar: `img / avatar${AVATAR_NUMBER}.svg`,
    Likes: LIKES,
  };
}
