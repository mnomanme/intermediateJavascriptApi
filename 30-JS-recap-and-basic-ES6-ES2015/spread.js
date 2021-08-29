// 30-8 Spread operator, array max, copy arrays

const numbers = [21, 62, 34, 99, 55, 87];

console.log(numbers);
console.log(...numbers);

const maxNumber = Math.max(23, 458, 66, 33, 66);
const max = Math.max(...numbers);

console.log(maxNumber);
console.log(max);

numbers.push(55);
console.log(numbers);

const numbers2 = [222, ...numbers, 999];
numbers.push(101);

console.log(numbers);
console.log(numbers2);
