// 34-6 Block scope, global scope, Hoisting

const favNumber = 50;

const add = (first, second) => {
	const result = first + second;
	// console.log(mood); // hoist
	// console.log(result); // local scope

	if (result > 9) {
		// const mood = 'happy';
		// let mood = 'happy';
		// var mood = 'happy';
		mood = 'happy'; // this is very global
		mood = 'cranky';
	}
	// console.log(mood); // block scope
	return result;
};

const total = add(10, 20);

// console.log(total);

// console.log(first);
// console.log(result);

// console.log(favNumber); // global scope

console.log(mood); // block scope

// for (var i = 0; i < 10; i++) {}
// console.log(i);

for (let i = 0; i < 10; i++) {}
console.log(i);
