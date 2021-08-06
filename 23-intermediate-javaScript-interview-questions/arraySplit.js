// 23-9 Array slice, splice, array join elements
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11, 19];
const numbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 19];

const part = numbers.slice(3, 7);
const removed = numbers2.splice(2, 4, 77);
const together = numbers.join(',');
const type = together;

console.log('Part :', part);
console.log('Nums Slice :', numbers);
console.log('Remove :', removed);
console.log('Nums Splice', numbers2);
console.log('Join :', together);
console.log('Type :', typeof type);
