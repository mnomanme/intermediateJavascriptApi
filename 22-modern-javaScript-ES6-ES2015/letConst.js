// 22-2 Let, const, array declared with const, object declared with const
const bou = 'Shabana';
// bou = 'Moushumi';
console.log(bou);

const numbers = [21, 44];
numbers[3] = 99;
numbers.push(100);
// numbers = ['Sunny', 'Bapparaj', 'Omit Hasan'];
console.log(numbers);

const nayok = { name: 'Sakib Khan', phone: 9483 };
console.log(nayok.name);

let paitentName = 'Karim Chacha';
paitentName = 'Fatema Khala';
console.log(paitentName);

let sum = 0;
for (var i = 0; i < 10; i++) {
	sum = sum + i;
}
console.log(i);

for (let i = 0; i < 11; i++) {
	sum = sum + i;
	console.log(sum, i);
}
// console.log(i);
