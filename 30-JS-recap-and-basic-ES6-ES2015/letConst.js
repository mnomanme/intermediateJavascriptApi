// 30-3 Breakup with var to have a relationship with Let and const
// break up with var
let balance = 1240;
balance = 1340;

const userName = 'Mohammad Noman';
const weTogether = 'Ami' + userName;

console.log(weTogether);

// userName = 'Mohammad Faruque';   // error

const numbers = [35, 23, 89, 60];
// numbers = [10, 20, 30];  // not allowed
numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	console.log(number);
	sum = sum + number;
	console.log(sum);
}

const student = { roll: 101, name: 'Sezan', job: 'intern' };
student.name = 'Naim';
// student = { roll: 201 }; // error
