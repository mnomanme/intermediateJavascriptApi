// 31-7 (advanced) Class, constructor, method, create object from class

class Support {
	name;
	designation = 'Support Web Dev';
	address = 'Mohakhali';
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}
	startSession() {
		console.log(this.name, 'start a support session');
	}
}

const nature = new Support('Mohammad Noman', 'Dhaka');
const weather = new Support('Good', 'Rajshahi');
const student = new Support('Mohammad Faruque', 'BAFSD');
const enginner = new Support('Mohammad Baki', 'Google');

student.startSession();
nature.startSession();
enginner.startSession();

console.log(nature);
console.log(weather);
console.log(student);
console.log(enginner);
