// 30-6 Arrow function, multiple parameter, function body

// function declare
function add(num1, num2) {
	// const sum = num1 + num2;
	// return sum;
	return num1 + num2;
}

// function expression
const addSum = function add2(num1, num2) {
	return num1 + num2;
};

// function expression (anonymous)
const addSum1 = function (num1, num2) {
	return num1 + num2;
};

// arrow function
const sumAdd = (num1, num2) => {
	return num1 + num2;
};

const sum = add(10, 20);
const sum1 = addSum(11, 21);
const sum2 = addSum1(12, 22);
const sum3 = sumAdd(5, 10);

console.log(sum);
console.log(sum1);
console.log(sum2);
console.log(sum3);

// document.getElementById('myBtn').onclick = function handleEvent() {};
