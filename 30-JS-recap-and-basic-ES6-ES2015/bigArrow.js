// 30-7 More Arrow functions and big arrow function

const add = (num1, num2) => num1 + num2;
const sum = add(30, 40);

const multiply = (num1, num2, num3 = 8) => num1 * num2 * num3;
const result = multiply(10, 3);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);

const fiveTimes = (num) => num * 5;
const value = fiveTimes(17);

const getName = () => 'Brandon Sam';
const name = getName();

const doMath = (x, y) => {
	const sum = x + y;
	const diff = x - y;
	const result = sum * diff;
	const output = result * 5;
	return output;
};

const total = doMath(12, 5);

console.log(sum);
console.log(result);
console.log(output);
console.log(value);
console.log(name);
console.log(total);

// document.getElementById('myBtn').addEventListener(event, () => {});
