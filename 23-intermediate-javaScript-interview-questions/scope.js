// 23-7 Scope, block scope, access outer scope variable
let bonus = 30;

function sum(first, second) {
	let result = first + second + bonus;
	console.log('Result :', result);
	console.log('Bonus :', bonus);

	if (result > 9) {
		const mood = 'happy';
		let greetings = 'excited';
		greetings = 'crazy';
		greetings = 'funky';
		greetings = 'fishy';
		greetings = 'cranky';
		var tour = 'saint martin';

		console.log('Mood :', mood);
		console.log('Greetings :', greetings);
		console.log('Tour :', tour);
	}
	console.log('Mood :', mood); // cannot acces
	console.log('Greetings :', greetings); // cannot access
	console.log('Tour :', tour);

	console.log('Day :', day); // undefined
	var day = 'Friday';
	console.log('Day :', day);

	console.log('Month', month); // error
	let month = 'August';
	console.log('Month', month);

	return result;
}

const total = sum(10, 20);

console.log('Total :', total);
console.log('Bonus :', bonus);
