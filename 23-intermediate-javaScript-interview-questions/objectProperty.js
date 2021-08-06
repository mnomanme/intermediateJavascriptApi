// 23-6 Apply map, filter, find on an array of objects
const students = [
	{ id: 21, name: 'Omar Sunny' },
	{ id: 31, name: 'Mannaaaaa' },
	{ id: 41, name: 'Moyouri' },
	{ id: 71, name: 'Deepjol' },
];

const studentsOutput = [];

for (let i = 0; i < students.length; i++) {
	const element = students[i];
	const result = element;
	studentsOutput.push(result.name);
}
console.log('Name loop :', studentsOutput);

const sNames = students.map((s) => s.name);
const sId = students.map((s) => s.id);
const bigger = students.filter((s) => s.id > 40);
const biggerOne = students.find((s) => s.id > 50);

console.log('Name Map :', sNames);
console.log('Id Map :', sId);
console.log('Bigger Filter :', bigger);
console.log('Bigger One Find :', biggerOne);
