import faker from 'faker';
const video = '../../../assets/video';

faker.seed(10);

const Data = [
  {
    userImage: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    userName: faker.name.findName(),
    key: 0,
    likeCount: '238000',
    commentCount: '306',
    follow: true,
    comment: 'CARTOON SPECIAL, Angry Prash ke Biggest Inspirations kaun hain? Dekhiye pura Podcast @angryprash ke saath',
    video: require(`${video}/a.mp4`),
    music: '',
  },
  {
    userImage: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    userName: faker.name.findName(),
    key: 1,
    likeCount: '238000',
    commentCount: '306',
    follow: true,
    comment: 'CARTOON SPECIAL, Angry Prash ke Biggest Inspirations kaun hain? Dekhiye pura Podcast @angryprash ke saath',
    video: require(`${video}/b.mp4`),
    music: '',
  },
  {
    userImage: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    userName: faker.name.findName(),
    key: 2,
    likeCount: '238000',
    commentCount: '306',
    follow: true,
    comment: 'CARTOON SPECIAL, Angry Prash ke Biggest Inspirations kaun hain? Dekhiye pura Podcast @angryprash ke saath',
    video: require(`${video}/c.mp4`),
    music: '',
  },
  {
    userImage: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    userName: faker.name.findName(),
    key: 3,
    likeCount: '238000',
    commentCount: '306',
    follow: true,
    comment: 'CARTOON SPECIAL, Angry Prash ke Biggest Inspirations kaun hain? Dekhiye pura Podcast @angryprash ke saath',
    video: require(`${video}/d.mp4`),
    music: '',
  },
  {
    userImage: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    userName: faker.name.findName(),
    key: 4,
    likeCount: '238000',
    commentCount: '306',
    follow: true,
    comment: 'CARTOON SPECIAL, Angry Prash ke Biggest Inspirations kaun hain? Dekhiye pura Podcast @angryprash ke saath',
    video: require(`${video}/e.mp4`),
    music: '',
  },

]

export default Data;