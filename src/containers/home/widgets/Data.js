import faker from 'faker';

faker.seed(10);

const Data = [...Array(30).keys()].map((_, i) => {
  const name = faker.name.findName();
  const id = name.split(' ').join('_')
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    userId: id.toLowerCase(),
    name: name,
    type: faker.name.jobType(),
    likeName: faker.name.findName(),
    commentName: faker.name.findName(),
    bgImage: `https://picsum.photos/300/500?random=/${faker.datatype.number(
      60,
    )}.jpg`,
    verified: false,
    viewCount: faker.datatype.number({ min: 10000, max: 100000000 }),
    commentCount: faker.datatype.number({ min: 10000, max: 1000000000000 }),
    randomHeight: faker.datatype.number({ min: 70, max: 100 }),
    comment:
      'Bhedwa mester desint hev beg fart lick meh Jithiya bebucheks huehuehue lulz k mester desint hev beg fart lick meh Jithiya bebucheks huehuehue lulz k',
    bio1: '🚀 DM for credit/removal/promo 📩',
    bio2: '.',
    bio3: '.',
    bio4: 'arunabhverma.github.io',
    bio5: faker.name.findName().split(' ').join('').toLowerCase(),
    bio6: faker.name.findName().split(' ').join('').toLowerCase()
  };
});

export default Data;