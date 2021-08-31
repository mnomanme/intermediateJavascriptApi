// 34-5 double equal (==) vs triple equal (===), implicit conversion

const first = 2;
const second = 2;

first === second ? console.log('true') : console.log('false');

const x = 2;
const y = '2';

if (x === y) {
	console.log('condition is true');
} else {
	console.log('condition is false');
}

const a = { name: 'Mohammad' };
const b = { name: 'Mohammad' };

a === b ? console.log('both are same') : console.log('they are not same');

const m = [];
const n = [];

m === n ? console.log('is true') : console.log('is false');
