// 35-4 Loop through an object using for in, for of, object entries

const bottle = {
	color: 'yellow',
	hold: 'water',
	price: 40,
	isCleaned: true,
};

// normal loop
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// array
// for (const num of numbers) {
// }

// object
// for (const prop in student) {
// }

for (const prop in bottle) {
	console.log(prop);
	console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);

console.log(keys);

for (const prop of keys) {
	console.log(prop, bottle[prop]);
}

// advanced
const entries = Object.entries(bottle);
console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
	console.log(key, value);
}
