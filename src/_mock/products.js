import { faker } from '@faker-js/faker';


// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'KPI DATA 1',
  'KPI DATA 2',
  'KPI DATA 3',
  'KPI DATA 4',
  'KPI DATA 5',
  'KPI DATA 6',
  'KPI DATA 7',
  'KPI DATA 8',
  'KPI DATA 9',
  'KPI DATA 10',
  'KPI DATA 11',
  'KPI DATA 12',
  'KPI DATA 13',
  'KPI DATA 14',
  'KPI DATA 15',
  'KPI DATA 16',
  'KPI DATA 17',
  'KPI DATA 18',
  'KPI DATA 19',
  'KPI DATA 20',
  'KPI DATA 21',
  'KPI DATA 22',
  'KPI DATA 23',
  'KPI DATA 24',
];

const PRODUCT_VALUE = [
  5,
  50,
  95,
  15,
  95,
  25,
  15,
  5,
  25,
  65,
  90,
  100,
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


const KPI_YEAR = [
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
  'KPI - Q2/2021',
];



// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    header: KPI_YEAR[index],
    percentage: PRODUCT_VALUE[index],
    name: PRODUCT_NAME[index],
    
  };
});

export default products;
