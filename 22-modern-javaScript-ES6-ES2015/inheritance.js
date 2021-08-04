// 22-8 Inheritance, extends class, super, class method
class Parent {
	constructor() {
		this.fatherName = 'Schwerznegger';
	}
}

class Child extends Parent {
	constructor(name) {
		super();
		this.name = name;
	}
	getFullName() {
		return this.name + ' ' + this.fatherName;
	}
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');

console.log(baby);
console.log(baby2);
console.log('baby :', baby.getFullName());
console.log('baby2 :', baby2.getFullName());
