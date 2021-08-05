// 23-3 Null Vs Undefined, different ways you will get undefined
let pakhi;
console.log(pakhi);

function add(num1, num2) {
	console.log(num1 + num2);
	return;
}

const result = add(19, 20);
console.log(result);

function add1(num1, num2) {
	console.log(num1, num2);
}

const result1 = add1(12);
console.log(result1);

const premika = { name: 'Smart Premika', phone: 392874 };
console.log(premika.bf);

let fun = undefined;
console.log('fun:', fun);

let ages = [203, 2340, 444];
console.log(ages[20]);
