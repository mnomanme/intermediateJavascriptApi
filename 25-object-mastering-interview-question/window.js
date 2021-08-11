// 25-5 window, global variable, global scope
const name = 'Mohammad Noman';
function add(num1, num2) {
	result1 = num1 + num2;
	const result = num1 + num2;
	console.log('Result Inside :', result);

	function double(num) {
		console.log('Num inside :', num);
		return num * 2;
	}
	console.log('Result Return :', result);
	return double(result);
}

// console.log('Result1 :', result1); // error;  result is not defined
// console.log('Result :', result); // error;  result is not defined

const sum = add(5, 10);
console.log('Sum :', sum);

// console.log('Result Outside :', result); // error;  result is not defined
console.log('Result1 Outside1 :', result1); // global variable access everywhere
