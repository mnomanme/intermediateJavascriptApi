// 22-3 Function default parameter for not provided values
// step one
function add(num1, num2) {
	return num1 + num2;
}

const total = add(12, 32);
console.log(total);

// step two
function add1(num1, num2) {
	if (num2 == undefined) {
		num2 = 0;
	}
	return num1 + num2;
}

const total1 = add1(200);
console.log(total1);

// step three
function add2(num1, num2) {
	num2 = num2 || 20;
	return num1 + num2;
}

const total2 = add2(17);
console.log(total2);

// step four
function add3(num1, num2 = 20) {
	return num1 + num2;
}

const total3 = add3(21);
console.log(total3);

const total4 = add3(21, 1);
console.log(total4);
