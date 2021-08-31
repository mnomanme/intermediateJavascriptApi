// 34-4 Null Vs Undefined, different ways you will get undefined

// 1. variable value not assigned
// 2. function but didnot write return anything
// 3. just write return but didnot return anything
// 4. parameter is not pass
// 5. property that doesnot exit in an object
// 6. accessing array element out of range
// 7. accessing delete array element
// 8. explicitly set value to undefined

// varibale undefined
let first;

console.log(first);

// function undefined
function second(x, y) {
	const sum = x + y;
}
const result = second(10, 20);

console.log(result);

// function undefined
const add = (a, b) => {
	const sum = a + b;

	if (b < 10) {
		return;
	}

	const fun = a * b;
	return sum;
};

const fourth = add(2, 7);

console.log(fourth);

// function undefined
const double = (p, q) => {
	const result = p * q;
	console.log(q);
	return result;
};

double(89);

// object undefined
const fifth = { name: 'Nayeem', age: 30, location: 'bandarban' };

console.log(fifth.phone);

// array undefined
const sixth = [3, 35, 65, 77];

console.log(sixth[9]);

// array delete undefined
delete sixth[3];
// sixth.splice(1, 2);
console.log(sixth);
console.log(sixth[3]);

// set undefined
const seventh = undefined;

console.log(seventh);

// null
const myObjct = { name: 'funky', profession: null };
