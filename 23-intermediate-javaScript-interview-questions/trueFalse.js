// 23-2 Truthy and Falsy values
// Falsy:
// 0
// ""
// undefined
// null
// NaN
// false
// Truthy:
// "0", " ", [ ], { }, true

const age = 4;
// const age = 0;

if (age > 0) {
	console.log('Age is true');
} else {
	console.log('Age is false');
}

const name = 'Solaiman';
// const name = '';
// const name = '0';

if (name.length > 0) {
	console.log('Name is true');
} else {
	console.log('Name is false');
}

// let friends;
// let friends = null;
// let friends = NaN;
// let friends = false;
let friends = 0;
console.log(friends);

if (friends || friends === 0) {
	console.log('Friends is true');
} else {
	console.log('Friends is false');
}
