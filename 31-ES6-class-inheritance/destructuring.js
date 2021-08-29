// 31-2 Destructuring Object to extract values to variables

const fish = { id: 101, name: 'King Hilsha', price: 9000, phone: '01299999999', address: 'Chandpur', dress: 'Silver' };

const price = fish.price;
const name = fish.name;

const { phone, id, dress } = fish;

// console.log(fish.phone);
// console.log(price);

console.log(phone);
console.log(dress);

const company = {
	name: 'Grammenphone',
	CEO: { id: 1, name: 'Ajmal', food: 'Fuchka' },
	web: {
		work: 'Website development',
		employee: 22,
		framework: 'react',
		tech: {
			first: 'html',
			second: 'css',
			third: 'js',
		},
	},
};

const work = company.web.work;

const { framework, employee } = company.web;
const { food } = company.CEO;
const { first, third } = company.web.tech;

console.log(work);

console.log(framework, employee, food);
console.log(first, third);
