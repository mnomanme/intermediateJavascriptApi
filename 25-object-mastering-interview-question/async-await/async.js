// 25-8 async await how to use it for async call
function loadData() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((data) => {
			displayData(data);
		});
}
loadData();

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
