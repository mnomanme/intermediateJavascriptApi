// 35-9 Module summary and checklist

const pen = {
	brand: 'econo',
	price: 10,
	writePoem: function (food) {
		console.log(food);
	},
};

const keys = Object.keys(pen);
const values = Object.values(pen);

for (const key in pen) {
	console.log(pen[key]);
}

const a = { a: 1 };
const b = { a: 1 };
const c = a;

a === b ? true : false;

// optional
const bounded = pen.writePoem.bind(a);

bounded();
