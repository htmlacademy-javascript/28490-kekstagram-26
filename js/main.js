const items = [];
const comments = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];
const names = [
  'Sasha',
  'Mike',
  'Dani',
  'Rob',
  'Maria',
  'Nikole',
  'Misha',
  'Osaka'
];
const descriptions = [
  'All My Loving',
  'All Together Now',
  'Drive My Car',
  'Getting Better',
  'Hello, Goodbye',
  'Help!',
  'Here Comes The Sun',
  'Hey Jude',
  'Love Me Do',
  'Mr Moonlight',
  'Michelle'
];

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

for (let i = 1; i < 26; i++) {
  const avatarNumber = getRandomIntInclusive(1, 6);
  const likes = getRandomIntInclusive(15, 200);
  const nameNumber = getRandomIntInclusive(0, 7);
  const descriptionNumber = getRandomIntInclusive(0, 10);
  items[i] = {
    id: i,
    url: `photos/${i}.jpg`,
    description: descriptions[descriptionNumber],
    likes: likes,
    comments: {
      id: getRandomIntInclusive(1, 100),
      avatar: `img/avatar${avatarNumber}.svg`,
      message: getComment(getRandomIntInclusive(1, 2)),
      name: names[nameNumber],
    }
  };
}
