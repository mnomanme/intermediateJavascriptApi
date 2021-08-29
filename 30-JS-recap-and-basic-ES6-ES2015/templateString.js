// 30-5 Template string, multiple line string, dynamic string

const priya = 'Asif Akbar'; // ''
const meye = 'Mehe Sultana'; // ""
const kobita = `Ag Dum Bag Dum`; // ``
const multiline = 'This is my first line \n' + 'this is my second line \n' + 'third line next here \n' + 'fourth line next here';

const newMultiline = `This is multiline
This is second line
this is third line
this is fourth line
`;

const friends = ['Abul', 'Babul', 'Kabul', 'Sabul'];
const count = 5;
const old = `<h3>Friend-5</h3>`;
const old2 = `<h3>Friend-'+ count +'</h3>`;
const new1 = `<h3>Friend-${count}</h3>`;
const new2 = `<h3>Friend-${friends.length}</h3>`;
const first = 'Mohammad';
const last = 'Noman';
const fullOld = 'This person name is: ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka`;

console.log(multiline);
console.log(newMultiline);
console.log(fullNew);
console.log(friends.length);
