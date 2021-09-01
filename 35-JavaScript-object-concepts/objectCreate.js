// 35-1 Module introduction Different way to Create Object
// 1. using object lieteral
const student = { name: 'Mohammad Noman', job: 'science' };

// 2. constructor
const person = new Object();

console.log(person);

// 3.
// const human = Object.create(null);
const human = Object.create(student);

console.log(human.name);

// 4. class
class People {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const newPeople = new People('Sezan', 21);

console.log(newPeople);

// 5. function
function MyStudent(name) {
	this.name = name;
}

const privateStudent = new MyStudent('Zubayer');

console.log(privateStudent);
