import { faker } from '@faker-js/faker';


// ----------------------------------------------------------------------

const INITIATIVE_NAME = [
  'INITIATIVE 1',
  'INITIATIVE 2',
  'INITIATIVE 3',
  'INITIATIVE 4',
  'INITIATIVE 5',
  'INITIATIVE 6',
  'INITIATIVE 7',
  'INITIATIVE 8',
  'INITIATIVE 9',
  'INITIATIVE 10',
  'INITIATIVE 11',
  'INITIATIVE 12',
  'INITIATIVE 13',
  'INITIATIVE 14',
  'INITIATIVE 15',
  'INITIATIVE 16',
  'INITIATIVE 17',
  'INITIATIVE 18',
  'INITIATIVE 19',
  'INITIATIVE 20',
  'INITIATIVE 21',
  'INITIATIVE 22',
  'INITIATIVE 23',
  'INITIATIVE 24',
];

const INITIATIVE_VALUE = [
  15,
  50,
  95,
  35,
  95,
  25,
  75,
  95,
  25,
  65,
  90,
  38,
  55,
  20,
  99,
  25,
  58,
  30,
  49,
  100,
  30,
  95,
  55,
  75,
];


const INITIATIVE_YEAR = [
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
  'INITIATIVE - Q2/2021',
];

// ----------------------------------------------------------------------

const initiatives = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    initid: faker.datatype.uuid(),
    initheader: INITIATIVE_YEAR[index],
    initpercentage: INITIATIVE_VALUE[index],
    initname: INITIATIVE_NAME[index],
  };
});

export default initiatives;
