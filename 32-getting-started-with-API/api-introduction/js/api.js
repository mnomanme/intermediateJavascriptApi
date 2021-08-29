// 32-3 Json Placeholder, Get Data, Display Data On UI
const loadData = () => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((json) => console.log(json));
};
// loadData();

// 32-4 Load More Data, More API, Send Data To Function
const loadUsers = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => displayUsers(data));
};

const loadPosts = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((data) => console.log(data));
};

const ul = document.getElementById('users');
const displayUsers = (data) => {
	console.log(data);
	for (const user of data) {
		console.log(user.name);
	}
	const getData = data.map((user) => {
		console.log(user);
		const li = document.createElement('li');
		const { name, email, username, address } = user;
		li.innerHTML = `Name : ${name} <br>
        User Email: ${email}
        `;
		ul.appendChild(li);
	});
	getData;
};
