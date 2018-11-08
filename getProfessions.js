const fetch = require('node-fetch');

let jobs;
const f = async () => {
  let professions = [];
  jobs = await fetch(
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  )
    .then(res => res.json())
    .then(res => res);
  jobs = jobs.Brastlewark.map(el => el.professions).forEach(
    el => (professions = professions.concat(el))
  );
  let res = professions.reduce((acc, next) => {
    if (!acc[next]) {
      acc[next] = 0;
    }
    acc[next] += 1;
    return acc;
  }, {});
  console.log(Object.keys(res));
};

f();

const professions = [
  'Metalworker',
  'Woodcarver',
  'Stonecarver',
  ' Tinker',
  'Tailor',
  'Potter',
  'Brewer',
  'Medic',
  'Prospector',
  'Gemcutter',
  'Mason',
  'Cook',
  'Baker',
  'Miner',
  'Carpenter',
  'Farmer',
  'Tax inspector',
  'Smelter',
  'Butcher',
  'Sculptor',
  '',
  'Mechanic',
  'Leatherworker',
  'Marble Carver'
];
