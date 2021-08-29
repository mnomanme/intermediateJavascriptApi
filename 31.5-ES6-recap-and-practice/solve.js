// 1. let const

let age = 24;
age = 25;

const myName = 'Mohammad Noman';

console.log('Age :', age);
console.log('Name :', myName);

// 2. template string
// 2.a: use variable
// 2.b: use object  property

const studentName = 'Mohmmad Faruque';
const students = {
	id: 101,
	subject: 'CSE 101',
	grade: 'A',
	phone: 8809999,
};
const template = `
This student name is ${studentName}. His id is ${students.id}.
He is good at ${students.subject} subject also he done a very good result.
His grade ${students.grade} anyone can contact ${students.phone} with him. 
`;

console.log(template);

// 3. arrow function
// 3.a. with one parameter. will return the number after dividing by 5
// 3.b. with two parameters. will add two to each number and then multiply the result.
// 3.c. three parameters. will multiply all three parameters
// 3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
// make sure you return the result

const arrowOne = (a) => a / 5;
const arrowOneResult = arrowOne(20);

console.log(arrowOneResult);

const arrowTwo = (a, b) => {
	const sum = a + b + 2;
	const result = sum * 2;
	return result;
};

const arrowTwoResult = arrowTwo(10, 20);
console.log(arrowTwoResult);

const arrowThree = (x, y, z) => x * y * z;
const arrowThreeResult = arrowThree(2, 3, 5);

console.log(arrowThreeResult);

// 4. [home work]: javascript function declaration vs arrow function
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11, 13];
const oddNumbers = numbers.filter((num) => num % 2);

console.log(oddNumbers);
console.log(...oddNumbers);
