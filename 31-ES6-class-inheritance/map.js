// 31-4 Array map to do one line loop magic

const numbers = [4, 6, 8, 10];

const output = [];

function doubleOld(number) {
	return number * 2;
}

const result = doubleOld(20);

console.log(result);

const doubleIt = (number) => number * 3;
const doubleItResult = doubleIt(10);

console.log(doubleItResult);

for (const number of numbers) {
	const result = number * 2;
	const result2 = doubleIt(number);
	output.push('double :', result);
	output.push('triple :', result2);
}
console.log(output);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array
// map
const map = numbers.map((number) => number * 2);
console.log(map);

const mapTwo = numbers.map(doubleIt);
console.log(mapTwo);

const mapThree = numbers.map((a) => a * 5);
console.log(mapThree);

const squares = numbers.map((x) => x * x);
console.log(squares);
