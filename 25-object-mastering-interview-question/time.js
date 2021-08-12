// 25-11 JavaScript Datetime timezone and others
const start = new Date();

let sum = 0;

for (let i = 0; i < 1000000000; i++) {
	sum++;
}

const end = new Date();

console.log('Time elapsed :', end - start, sum);
