// 25-5 window, global variable, global scope
function add(num1, num2) {
	const result = num1 + num2;
	return result;
}

const sum = add(5, 10);
console.log('Sum :', sum);
