const searchField = document.getElementById('searchField');
const buttonSearch = document.getElementById('buttonSearch');
const url = `https://www.thesportsdb.com/api/v1/json/1`;

// get data to sports db
const getTeam = (teamName) => {
	const url2 = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`;
	// fetch(`${url}/searchteams.php?t=${teamName}`)
	fetch(url2)
		.then((res) => res.json())
		.then((data) => console.log(data));
	console.log(url2);
};
getTeam();

// search team hit button
const searchTeam = () => {
	const searchText = searchField.value;
	console.log(searchText);
	searchField.value = '';
	getTeam(searchText);
};

// search team hit enter
searchField.addEventListener('keypress', (event) => {
	// console.log('keyb', event.key);
	if (event.key === 'Enter') {
		buttonSearch.click();
	}
});
