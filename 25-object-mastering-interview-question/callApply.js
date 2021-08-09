// 25-2 object method property review
const normalPerson = {
	firstName: 'Mohammad',
	lastName: 'Noman',
	salary: 15000,
	getFullName: function () {
		console.log(this.firstName, this.lastName);
	},
	chargedBill: function (amount) {
		console.log('This :', this);
		this.salary = this.salary - amount;
		return this.salary;
	},
};

console.log('Person :', normalPerson);

normalPerson.chargedBill(200);

console.log('Salary :', normalPerson.salary);

// 25-3 object use bind to borrow method from another object
const heroPerson = {
	firstName: 'Hero',
	lastName: 'Alam',
	salary: 25000,
};

const friendlyPerson = {
	firstName: 'Hero',
	lastName: 'Balam',
	salary: 35000,
};

// normalPerson.chargedBill();

const heroChargeBill = normalPerson.chargedBill.bind(heroPerson);

heroChargeBill(5000);
heroChargeBill(15000);

console.log('Hero Salary :', heroPerson.salary);
console.log('Normal Person Salary :', normalPerson.salary);

const friendChargeBill = normalPerson.chargedBill.bind(friendlyPerson);

friendChargeBill(3000);
friendChargeBill(6000);

console.log('Friends Salary :', friendlyPerson.salary);

// 25-4 difference between bind, call and apply

normalPerson.chargedBill.call(heroPerson, 1000);

console.log('Call Hero Person Salary :', heroPerson.salary);
