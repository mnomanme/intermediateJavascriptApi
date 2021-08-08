// 25-2 object method property review
const normalPerson = {
	firstName: 'Mohammad',
	lastName: 'Noman',
	salary: 15000,
	getFullName: function () {
		console.log(this.firstName, this.lastName);
	},
	chargedBill: function (amount) {
		this.salary = this.salary - amount;
		return this.salary;
	},
};

console.log('Person :', normalPerson);

normalPerson.chargedBill(200);
console.log('Salary :', normalPerson.salary);
