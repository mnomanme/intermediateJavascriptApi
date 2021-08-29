// 31-3 (advanced) Array Destructuring, nested object Optional chaining

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };

const { a, z, y } = myObject;

console.log(a, z, y);

console.log('myObject', myObject.p); // error undefined
console.log('myObject', myObject?.p?.q); // error undefined

// destructurin in array
const [p, q] = [25, 35, 89, 44, 22];

console.log(q, p);

const [BEST, FALTU] = ['Apple', 'FastFood'];

console.log(BEST, FALTU);

const { color, sky } = { sky: 'blue', soil: 'matti', color: 'red' };

console.log(sky, color);

// chaining

const company = {
	name: 'Grammenphone',
	CEO: { id: 1, name: 'Ajmal', food: 'Fuchka' },
	web: {
		work: 'Website development',
		employee: 22,
		framework: 'react',
		tech: {
			first: 'html',
			second: 'css',
			third: 'js',
		},
	},
};

console.log(company.web.tech.third);
console.log(company?.backend?.tech.third); // error undefined
