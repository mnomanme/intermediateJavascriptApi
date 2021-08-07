// 24-4 JSON, JSON Structure, parse, stringify, JSON properties
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

// 24-5 Load data, JSON placeholder, GET data, display data on UI
fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.json())
	.then((json) => displayUser(json))
	.catch((error) => console.log(error));

function displayUser(users) {
	console.log('USERS :', users);
	const userName = users.map((user) => user.username);
	const ul = document.getElementById('usersContainer');
	console.log('User Name :', userName);

	for (let i = 0; i < userName.length; i++) {
		const username = userName[i];
		console.log(username);
		const li = document.createElement('li');
		li.innerText = username;
		ul.appendChild(li);
	}
}

// 24-6 HTTP request, Status code, network tab, bad API
fetch('https://jsonplaceholder.typicode.com/peoples')
	.then((response) => response.json())
	.then((json) => displayUser(json))
	.catch((error) => console.log(error));
