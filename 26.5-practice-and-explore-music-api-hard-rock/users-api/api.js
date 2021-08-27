const url = `https://jsonplaceholder.typicode.com/users`;
const users = document.getElementById('users');
const loadUser = document.getElementById('loadUser');
const countText = document.getElementById('userCount');

// load data count
const loadCount = loadUser.addEventListener('click', function () {
	const userCount = countText.value;
	const newCount = parseInt(userCount);
	console.log(newCount);
	getDisplay(newCount);
});

// load data & display
const getDisplay = (loadCount) => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			data = data.slice(0, loadCount);
			users.innerHTML = '';
			data.map((data) => {
				console.log(data);
				const p = document.createElement('p');
				p.innerHTML = `
            <p>Name : <strong>${data.name}</strong> 
            <button onclick="getUserDetails(${data.id})" class="btn btn-sm btn-outline-danger">Get Details - ${data.id} </button>
            </p>
            `;
				users.appendChild(p);
			});
		});
};
getDisplay();

// get user details
function getUserDetails(userId) {
	fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			const userDetails = document.getElementById('userDetails');
			userDetails.innerHTML = `
            <h2>${data.name}</h2>
            <h4>Email : ${data.email}</h4>
            <h6>Phone No : ${data.phone}</h6>
            `;
		});
}
