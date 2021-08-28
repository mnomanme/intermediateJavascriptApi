// 30-1 Simple Recap of JavaScript six core parts
// variabale
var deoposit = 400;

// condition
if (deposit > 500) {
} else if (deposit < 200) {
} else if (deposit === 500) {
} else if (deposit !== 500) {
} else if (deposit >= 500) {
} else if (deposit <= 500) {
} else {
}

// array
const numbers = [45, 6587, 124, 45, 1, 365];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2] = 555;

// check whether included in the array
if (numbers.indexOf(222) !== -1) {
}
if (numbers.includes(222)) {
}

// loop
// while, for
for (const number of numbers) {
}

// function
function fullName(first, second) {
	const name = first + ' ' + second;
}

const person = fullName('Mohammad', 'Noman');

// object
const bottle = { color: 'yellow', contain: 'water', price: 50 };
