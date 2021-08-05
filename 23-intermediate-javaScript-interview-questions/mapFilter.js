// 23-5 map, filter, find, smart way to run for loop
const numbers = [3, 4, 5, 6, 7, 8, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	// console.log('element:', element);
	const result = element * element;
	// console.log('result:', result);
	output.push(result);
}

console.log('result:', output);

// square function
// this function is declare to understand for practice
function square(element) {
	return element * element;
}

const numbersMap = numbers.map(square);
console.log('Numbers Map :', numbersMap);

const mapSquare = (element) => element * element;
const numberSquare = (a) => a * a;

const totalMap = mapSquare(10);
const totalnumber = numberSquare(20);

console.log('Map Square :', totalMap);
console.log('Number Square :', totalnumber);

// map
const mapTest = numbers.map(function square(element, index, array) {
	console.log('Test Map =', 'Element :', element, 'Index :', index, 'Array :', array);
});

const mapResult = numbers.map(function square(element) {
	return element * element;
});

console.log('Map Result :', mapResult);

const arrowMap = numbers.map((x) => x * x);

console.log('Arrow Map Result :', arrowMap);

// filter
const bigger = numbers.filter((p) => p > 4);
const lower = numbers.find((q) => q < 5); // pass only one element

console.log('Bigger Number :', bigger);
console.log('Lower Number :', lower);
