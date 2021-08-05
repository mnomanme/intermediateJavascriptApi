// 23-4 double vs triple equal, implicit conversion
// condition check
const first = 10;
const second = 20;

// only value check ==
if (first == second) {
	console.log('condition is true');
} else {
	console.log('condition is false');
}

// condition check 01
const first1 = 10;
const second1 = '10';

// value & type strictly check ===
if (first1 === second1) {
	console.log('condition1 is true');
} else {
	console.log('condition1 is false');
}

// condition check 02
// 0 === false, 1 === true
const first2 = 0;
const second2 = false;

if (first2 == second2) {
	console.log('condition2 is true');
} else {
	console.log('condition2 is false');
}

// condition check 03
const first3 = 0;
const second3 = false;

if (first3 === second3) {
	console.log('condition3 is true');
} else {
	console.log('condition3 is false');
}
