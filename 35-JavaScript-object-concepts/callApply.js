// 35-7 (advanced) Difference between bind, call and apply// 35-6 (advanced) Use bind to borrow method from another object
const student = {
	id: 101,
	cash: '5000',
	name: 'mohammad noman',
	treatDay: function (expense, tips, tax) {
		this.cash = this.cash - expense - tips - tax;
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

// call
student.treatDay.call(heroMale, 500, 50, 15);
student.treatDay.call(heroMale, 800, 80, 24);

// apply
student.treatDay.apply(heroPerson, [500, 100, 50]);
student.treatDay.apply(heroPerson, [1000, 200, 100]);

student.treatDay.apply(heroMale, [5000, 500, 300]);
