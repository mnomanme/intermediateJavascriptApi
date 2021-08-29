// 31-5 Map string array, array of objects map, foreach

const actors = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Brad Pit', 'Johny Deep'];

const actorsLength = actors.map((actor) => actor.length);

console.log(actorsLength);

const products = [
	{ name: 'water bottle', price: 100, color: 'yellow' },
	{ name: 'mobile phone', price: 15000, color: 'blue' },
	{ name: 'smart watch', price: 3000, color: 'black' },
	{ name: 'sticky notes', price: 50, color: 'pink' },
	{ name: 'water glass', price: 30, color: 'white' },
];

const { name } = products[3];
console.log(name);

const productsName = products.map((p) => p.name);
const productsPrices = products.map((p) => p.price);

console.log(productsName);
console.log(...productsName);

console.log(productsPrices);

products.map((pd) => console.log(pd));

// forEach
products.forEach((pd) => console.log(pd));
products.forEach((pd) => console.log(pd.color));
