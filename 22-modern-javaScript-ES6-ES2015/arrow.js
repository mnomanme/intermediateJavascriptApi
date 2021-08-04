// 22-5 Arrow function, multiple parameter, function body
// function 03
const doubleResult = (num) => num * 2;
const arrowResult = doubleResult(50);

const add = (p, q) => p + q;
const addResult = add(243, 78);

const money = () => 500;
const moneyResult = money();

const mathToDo = (a, b) => {
	const sum = a + b;
	const sub = a - b;
	const result = sum * sub;
	return result;
};
const mathResult = mathToDo(999, 99);

console.log('arrow result :', arrowResult);
console.log('add result :', addResult);
console.log('money result :', moneyResult);
console.log('math result :', mathResult);

// function 02
const doubleNumber = function myFunc(num) {
	return num * 2;
};

const resultDouble = doubleNumber(30);
console.log('result double :', resultDouble);

// function o1
function doubleIt(num) {
	return num * 2;
}

const result = doubleIt(12);
console.log('result :', result);
