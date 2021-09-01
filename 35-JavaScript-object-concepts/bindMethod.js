// 35-6 (advanced) Use bind to borrow method from another object
const student = {
	id: 101,
	cash: '5000',
	name: 'mohammad noman',
	treatDay: function (expense) {
		this.cash = this.cash - expense;
		console.log(this);
		return this.cash;
	},
};

const heroPerson = {
	id: 102,
	cash: 7000,
	name: 'Hero Person',
};

student.treatDay(15);

// bind
const heroTreatDay = student.treatDay.bind(heroPerson);

heroTreatDay(500);
heroTreatDay(300);

student.treatDay(2000);

const heroMale = {
	id: 104,
	cash: 9000,
	name: 'Hero Male',
};

const heroMaleTreatDay = student.treatDay.bind(heroMale);

heroMaleTreatDay(5000);
