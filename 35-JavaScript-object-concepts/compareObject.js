// 35-5 (advanced) Compare objects, referential integrity

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

// first === second ? console.log('objects are equal') : console.log('objects are different');

// first === third ? console.log('objects are equal') : console.log('objects are different');

// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));

// JSON.stringify(first) === JSON.stringify(second) ? console.log('objets are equal') : console.log('objects are different');

const firstTwo = { a: 1, b: 2 };
const secondTwo = { b: 2, a: 1 };

// console.log(JSON.stringify(firstTwo));
// console.log(JSON.stringify(secondTwo));

// JSON.stringify(firstTwo) === JSON.stringify(secondTwo) ? console.log('objets are equal') : console.log('objects are different');

const compareObjects = (objOne, objTwo) => {
	if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
		return false;
	}
	for (const prop in objOne) {
		if (objOne[prop] !== objTwo[prop]) {
			return false;
		} else {
		}
	}
	return true;
};

const isEqual = compareObjects(firstTwo, secondTwo);

console.log(isEqual);
