const url = `https://jsonplaceholder.typicode.com/users`;
const users = document.getElementById('users');

// load data & display
fetch(url)
	.then((res) => res.json())
	.then((data) => {
		// console.log(data);
		data.map((data) => {
			console.log(data);
			const p = document.createElement('p');
			p.innerHTML = `
            <p>Name : <strong>${data.name}</strong> 
            <button class="btn btn-sm btn-outline-danger">Get Details - ${data.id} </button>
            </p>
            `;
			users.appendChild(p);
		});
	});
