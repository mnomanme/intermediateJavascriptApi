// 30-4 Function default parameter for not provided values

function add(num1, num2) {
	console.log(num1, num2);
	// option 2
	num2 = num2 || 0;
	// option 1
	if (num2 === undefined) {
		num2 = 0;
	}
	const total = num1 + num2;
	return total;
}

const result = add(15, 17);
console.log(result);

function add(num1, num2 = 25) {
	console.log(num1, num2);
	// option 2
	// num2 = num2 || 0;
	// option 1
	// if (num2 === undefined) {
	// 	num2 = 0;
	// }
	const total = num1 + num2;
	return total;
}

const result1 = add(15, 0);
console.log(result1);

function fullName(first, last = 'Mohammad') {
	const name = first + ' ' + last;
	return name;
}
