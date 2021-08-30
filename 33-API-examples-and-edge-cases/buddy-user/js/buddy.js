// 33-2 (advanced) Handle and display Nested API data

// load data
const loadBuddies = () => {
	fetch(`https://randomuser.me/api/?results=15`)
		.then((res) => res.json())
		.then((data) => displayBuddies(data))
		.catch((error) => console.log(error));
};
loadBuddies();

const buddyContainer = document.getElementById('buddy');
// display buddy
const displayBuddies = (getBuddy) => {
	// console.log(getBuddy);
	const { results } = getBuddy;
	// console.log(results);
	results.map((buddy) => {
		console.log(buddy);
		const { email } = buddy;
		const { title, first, last } = buddy.name;
		const p = document.createElement('p');
		p.innerHTML = `Name : ${title} ${first} ${last} <br> Email : ${email}`;
		buddyContainer.appendChild(p);
	});
};
