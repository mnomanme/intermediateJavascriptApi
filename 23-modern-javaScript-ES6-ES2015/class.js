// 22-7 Class, constructor, create object from class
class Student {
	constructor() {
		this.id = 1;
		this.name = 'Noman';
	}
}

const student1 = new Student();
const student2 = new Student();

console.log(student1, student2);

class Teacher {
	constructor(tId, tName) {
		this.id = tId;
		this.name = tName;
		this.university = 'BUBT';
	}
}

const teacher1 = new Teacher(304, 'Sajib');
const teacher2 = new Teacher(310, 'Amit');
const teacher3 = new Teacher(303, 'Iffat');

console.log(teacher1, teacher2);
console.log(teacher3);
