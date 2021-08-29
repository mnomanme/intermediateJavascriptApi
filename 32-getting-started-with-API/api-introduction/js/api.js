// 32-3 Json Placeholder, Get Data, Display Data On UI
const loadData = () => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((json) => displayUsers(json));
};
// loadData();

// 32-4 Load More Data, More API, Send Data To Function
const loadUsers = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => console.log(data));
};

const loadPosts = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((data) => console.log(data));
};

const displayUsers = (json) => {
	console.log(json);
};
