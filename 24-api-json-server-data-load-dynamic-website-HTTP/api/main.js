const user = {
	id: 201,
	name: 'Masud',
	lover: {
		name: 'Jamila',
		favFood: 'Pizza',
	},
	friendsAge: [20, 25, 27],
	friendsName: ['Jamal', 'Kamal', 'Tomal'],
};

//           {"id":201,"name":"Masud"}
const userJSON = JSON.stringify(user);
const userFromJSON = JSON.parse(userJSON);

console.log('String :', userJSON);
console.log('Object :', userFromJSON);
