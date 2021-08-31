const searchField = document.getElementById('searchField');
const buttonSearch = document.getElementById('buttonSearch');
const searchResult = document.getElementById('searchResult');
const url = `https://www.thesportsdb.com/api/v1/json/1`;

// get data to sports db
const getTeam = (teamName) => {
	const url2 = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`;
	// fetch(`${url}/searchteams.php?t=${teamName}`)
	fetch(url2)
		.then((res) => res.json())
		.then((data) => displaySearchResult(data.teams))
		.catch((error) => console.log(error));
	// console.log(url2);
};
getTeam();

// search team hit button
const searchTeam = () => {
	const searchText = searchField.value;
	// console.log(searchText);
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

// display search result
const displaySearchResult = (sportTeams) => {
	console.log(sportTeams);
	searchResult.textContent = '';
	sportTeams.map((team) => {
		console.log(team);
		const { strTeam, strTeamBadge, strDescriptionEN } = team;
		const teamDiv = document.createElement('div');
		teamDiv.classList.add('col');
		teamDiv.innerHTML = `
		
			<div class="card h-100">
				<img src="${strTeamBadge}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${strTeam}</h5>
					<p class="card-text">${strDescriptionEN.slice(0, 250)}</p>
				</div>
		</div>

		`;
		searchResult.appendChild(teamDiv);
	});
};
