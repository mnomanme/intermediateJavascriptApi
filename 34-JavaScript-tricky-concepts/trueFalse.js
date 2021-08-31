// 34-3 Different Truthy and Falsy values in JavaScript

/*

Falsy: 
false 
0
'' empty string 
undefined
null
NaN

Truthy:
true
1
any number (positive or negative)
string
' ' any string including single whitespace
'0'
[] empty array
{} empty object

anything else that is not falsy will be truthy 


*/

const x = false;
const x = 4;
const x = -4;
const x = 'Mohammad';
const x = '';
const x = 1;
const x = ' ';
let x;
let x = null;
let x = NaN;
let x = [];
let x = {};

console.log(x);

if (x) {
	console.log('variable is truthy');
} else {
	console.log('variable is falsy');
}
