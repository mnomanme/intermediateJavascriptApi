// 35-2 Object method property review

const student = {
	id: 101,
	cash: '5000',
	name: 'mohammad noman',
	major: 'artificial intelligence',
	subjects: ['data structure', 'discrete mathematics', 'java', 'oop'],
	bestFriend: {
		name: 'naeem',
		major: 'software engineer',
	},
	takeExam: function () {
		console.log('take exam');
		console.log(this.name, 'attended final exam');
	},
	treatDay: function (expense, tips) {
		this.cash = this.cash - expense - tips;
		return this.cash;
	},
};

student.takeExam();

const cost = student.treatDay(480, 50);
const mobileCost = student.treatDay(2000, 200);

console.log(cost);
console.log(mobileCost);
