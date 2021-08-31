// 34-9 Module summary pass by reference pass by value

const a = 'Mohammad Noman';
const b = 24;
const c = true;

// null
// undefined

// primitive
// non-primitive
// object

const nums = [23, 454, 65, 73, 3];

// Array.isArray(nums);
console.log(Array.isArray(nums));
console.log(typeof nums);

const triple = (x, y, z = 333) => {
	// x = 111;
	x.age = 330;
	y = 222;
};

const num1 = 2;
const num2 = 3;
const num3 = 4;

triple(num1, num2, num3);

const myObject = { title: 'web', age: 33, location: 'dhaka' };

triple(myObject);

console.log(num1, num2, num3);

console.log(myObject);

// console.log(typeof triple);
console.log(typeof triple.length);
console.log(triple.length);
console.log(typeof null);
