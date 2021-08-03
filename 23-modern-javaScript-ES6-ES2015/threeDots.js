// 22-6 Spread operator, concatenate multiple arrays, array max
const ages = [12, 43, 22, 30, 15, 24];
const ages2 = [8, 7, 19, 27];
const ages3 = [29, 49, 33, 55];

const allAges = ages.concat(ages2).concat(199).concat(ages3);
const allAges2 = [ages, ages2, 90, ages3];
const allAges3 = [...ages, ...ages2, 900, ...ages3];

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250, 50, 100];

const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(takaPoisha);
const maximum3 = Math.max(...takaPoisha);

console.log('Age :', allAges);
console.log('Age2 :', allAges2);
console.log('Age3 :', allAges3);
console.log('maximum :', maximum);
console.log('maximum2 :', maximum2);
console.log('maximum3 :', maximum3);
