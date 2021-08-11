// 25-8 async await how to use it for async call
function loadData() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((data) => {
			displayData(data);
		});
}
loadData();

async function loadData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log(data);
	// displayData(data);
	return data;
}
loadData();
loadData().then((data) => {
	displayData(data);
});

function displayData(d) {
	console.log(d);
	const parentNode = document.getElementById('myList');
	for (let i = 0; i < d.length; i++) {
		const user = d[i];
		const item = document.createElement('li');
		item.innerText = user.name;
		parentNode.appendChild(item);
	}
}

async function hello(name) {
	return 'Hello' + ' ' + name;
}

const greetings = hello('Noman');
console.log(greetings);

greetings.then((res) => console.log(res));
