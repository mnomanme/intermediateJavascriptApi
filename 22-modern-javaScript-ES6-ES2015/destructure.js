// 22-9 Destructure, Object, array, destructure complex objectde;
const person = { name: 'Johny Deep', age: 27, job: 'actor', gfName: 'Ema Watson', address: 'Uttara', friends: ['Tom Hanks', 'Tom Cruise'], phone: '0182138823' };

const { name, job, address, salary } = person;

const complexObjet = {
	name: 'abc',
	info: {
		address: 'Kala Bagan',
		leader: 'Tiger Khan',
		earn: 102300,
	},
};
const { leader, earn } = complexObjet.info;

const gfName = person.gfName;
const phone = person.phone;

console.log(person.gfName);
console.log(person.gfName);
console.log(person.gfName);
console.log('GF :', gfName, phone);
console.log('GF :', gfName, phone);
console.log('complex object :', leader, earn);

console.log('destructuring :', salary, address, name, job);

// array destructuring
const friends = ['Arman Khan', 'Shakib Khan', 'Salman Khan', 'Imran Khan', 'Amir Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;

console.log(chotoFriend, nextFriend);
console.log(restFriends);
