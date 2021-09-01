// 35-8 ( super advanced) Understand this keyword in JavaScript

// console.log(25);

const student = {
	id: 101,
	cash: '5000',
	name: 'mohammad noman',
	examDay: () => {
		console.log(this);
	},
	outingDay: function () {
		const letsGo = () => console.log(this);
		letsGo();
	},
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

const add = () => {
	console.log(this);
};
