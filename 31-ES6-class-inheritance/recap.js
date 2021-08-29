// 31-1 Module Introduction and Basic ES6 Recap

// 1. let and const
const hubby = 'Omor Sunny';
let phone = 'Android';
phone = 'iPhone 12 Mini';

// 2. default parameter
// 5. spread operator with three dots (...)
function maxNumber(array = []) {
	const max = Math.max(...array);
	return max;
}

const biggest = maxNumber();
console.log(biggest);

// 3. template string
const myNotes = `I am a student. I don't want to read. Because it's too boring. My hubby ${hubby}. I have a ${phone}`;

console.log(myNotes);

// arrow function
function doubleSquare(x = 10) {
	return x * x;
}

const square = (x) => x * x;
console.log(square(9));
