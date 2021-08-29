// 30-9 Module Summary and ES6 Recap

let priyoPerson = 'Real Madrid';
priyoPerson = 'Honduras';

const wiffy = 'Mehe Sultana';

//  default parameter
function calculate(x, y, z = 5) {
	return x * y + z;
}

const result = calculate(2, 3);

// template string

const myPeople = `My lovely person is ${wiffy}. and his age is ${result}. My name is ${priyoPerson} `;

console.log(myPeople);

// arrow function
const fullName = (first, last) => first + ' ' + last;
const fiveTimes = (x) => x * 5;
const bigArrowFunc = (x, y, z) => {
	const firstPart = x + y;
	const secondPart = y * z;
	const thirdPart = x / z;
	const result = (firstPart + secondPart) * thirdPart;
	return result;
};

const total = bigArrowFunc(10, 5, 3);
console.log(total);

// spread operator
const numbers = [2, 4, 6, 7, 9, 7];
const min = Math.min(...numbers);

console.log(min);
