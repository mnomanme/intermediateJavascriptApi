// 31-6 (advanced) Implement filter, find on an array of objects

const numbers = [5, 13, 7, 41, 29, 79, 30, 5, 2, 10];

const bigNumber = numbers.filter((num) => num > 20);

const smallNumber = numbers.filter((num) => num < 15);

console.log(bigNumber);
console.log(smallNumber);

const products = [
	{ name: 'water bottle', price: 100, color: 'yellow' },
	{ name: 'mobile phone', price: 15000, color: 'blue' },
	{ name: 'smart watch', price: 3000, color: 'black' },
	{ name: 'sticky notes', price: 50, color: 'pink' },
	{ name: 'water glass', price: 30, color: 'white' },
];

const expensive = products.filter((pd) => pd.price > 2000);

const color = products.filter((pd) => pd.color === 'black');
const noColor = products.filter((pd) => pd.color === 'magenta');

console.log(expensive);
console.log(color);
console.log(noColor);

// find
const whiteItem = products.find((pd) => pd.color === 'white');
const noItem = products.find((pd) => pd.color === 'magenta');

console.log(whiteItem);
console.log(noItem);
