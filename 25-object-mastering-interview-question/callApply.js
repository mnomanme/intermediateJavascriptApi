// 25-2 object method property review
const normalPerson = {
	firstName: 'Mohammad',
	lastName: 'Noman',
	salary: 15000,
	getFullName: function () {
		console.log(this.firstName, this.lastName);
	},
	chargedBill: function (amount, tips, tax) {
		console.log('This :', this);
		this.salary = this.salary - amount - tips - tax;
		return this.salary;
	},
};

console.log('Person :', normalPerson);

normalPerson.chargedBill(200, 20, 2);

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

heroChargeBill(5000, 500, 50);
heroChargeBill(6000, 600, 60);

console.log('Hero Salary :', heroPerson.salary);
console.log('Normal Person Salary :', normalPerson.salary);

const friendChargeBill = normalPerson.chargedBill.bind(friendlyPerson);

friendChargeBill(3000, 300, 30);
friendChargeBill(6000, 600, 60);

console.log('Friends Salary :', friendlyPerson.salary);

// 25-4 difference between bind, call and apply

normalPerson.chargedBill.call(heroPerson, 1000, 100, 20);
normalPerson.chargedBill.call(heroPerson, 500, 5, 10);

console.log('Call Hero Person Salary :', heroPerson.salary);

normalPerson.chargedBill.call(friendlyPerson, 5000, 500, 50);

console.log('Call Friendly Person Salary :', friendlyPerson.salary);

normalPerson.chargedBill.apply(heroPerson, [2000, 200, 20]);
console.log('Apply Hero Person Salary :', heroPerson.salary);
