// 34-2 Primitive data type and non-primitive data type

/*

Data Types
Primitive Data Types:
1. number
2. string
3. boolean
4. undefined
5. null

7. symbol

Non-primitive
6. object

*/

let a = 'hello';
let b = a;

console.log(a, b);

a = 'world';

console.log(a, b);

const p = { job: 'web developer' };
const q = p;

p.job = 'front end developer';
q.job = 'back end developer';

console.log(p, q);
