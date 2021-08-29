// JS Object
// JavaScript Object Notation
// JSON
const user = { id: 101, name: 'Mohammad Noman', job: 'Internship' };

console.log(user);
// 32-2 Intro To Json, Json Structure, Parse, Stringify
const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
	name: 'Dhaka Store',
	address: 'Mirer Bazar Road',
	profit: 1500000,
	products: ['laptop', 'mobile', 'watch'],
	owner: {
		name: 'Mohammad Noman',
		profession: 'Business',
	},
	isExpensive: false,
};

const shopStringify = JSON.stringify(shop);
const convertShop = JSON.parse(shopStringify);

// console.log(shop);
console.log(shopStringify);
console.log(convertShop);
