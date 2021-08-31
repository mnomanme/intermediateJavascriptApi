const url = `https://www.thesportsdb.com/api/v1/json/1`;
const searchField = document.getElementById('searchField');
const buttonSearch = document.getElementById('buttonSearch');
const searchResult = document.getElementById('searchResult');
const teamDetails = document.getElementById('teamDetails');
const loadingSpinner = document.getElementById('loadingSpinner');
const emptyError = document.getElementById('emptyError');
const searchError = document.getElementById('searchError');
const errorMessage = document.getElementById('errorMessage');

// loading spinner
const toggleSpinner = (show) => {
	const spinner = loadingSpinner;
	if (show) {
		spinner.classList.remove('d-none');
	} else {
		spinner.classList.add('d-none');
	}
};

// get data to sports db
const getTeam = (teamName) => {
	toggleSpinner(true);
	errorMessage.style.display = 'none';
	const url2 = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`;
	fetch(url2)
		.then((res) => res.json())
		.then((data) => displaySearchResult(data.teams))
		.catch((error) => console.log(error));
};
getTeam();

// search team hit button
const searchTeam = () => {
	const searchText = searchField.value;
	searchField.value = '';
	emptyError.textContent = '';
	searchError.textContent = '';
	errorMessage.style.display = 'none';
	if (searchText === '') {
		emptyErrorHandle();
	} else {
		getTeam(searchText);
	}
};

// search team hit enter
searchField.addEventListener('keypress', (event) => {
	// console.log('keyb', event.key);
	errorMessage.style.display = 'none';
	if (event.key === 'Enter') {
		buttonSearch.click();
	}
});

// display search result
const displaySearchResult = (sportTeams) => {
	toggleSpinner(false);
	searchResult.textContent = '';
	teamDetails.textContent = '';
	errorMessage.style.display = 'none';
	sportTeams.map((team) => {
		// console.log(team);
		const { strTeam, strTeamBadge, strDescriptionEN, idLeague } = team;
		const teamDiv = document.createElement('div');
		teamDiv.classList.add('col');
		teamDiv.innerHTML = `
		
			<div onclick="getTeamDetails('${idLeague}')" class="card h-100">
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

// display error if anything wrong or not working

const displayError = () => {
	errorMessage.style.display = 'block';
};

// load team details
const getTeamDetails = (teamId) => {
	toggleSpinner(true);
	errorMessage.style.display = 'none';
	const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${teamId}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayTeamDetails(data.leagues[0]))
		.catch((error) => displayError(error));
};

// display team details
const displayTeamDetails = (displayTeam) => {
	toggleSpinner(false);
	errorMessage.style.display = 'none';
	console.log(displayTeam);
	teamDetails.textContent = '';
	const { strLeague, strBadge, strDescriptionEN, strWebsite } = displayTeam;
	console.log('league', strLeague);
	const sportDiv = document.createElement('div');
	sportDiv.classList.add('card');
	sportDiv.innerHTML = `
		
		<div class="card">
			<img src="${strBadge}" class="card-img-top" height="200px" alt="trophy not found">
			<div class="card-body">
		  		<h5 class="card-title">${strLeague}</h5>
		  		<p class="card-text">${strDescriptionEN.slice(0, 100)}</p>
			</div>
			<div class="card-body">
		  		<a href="${strWebsite}" class="btn btn-sm btn-outline-danger">On Site</a>
			</div>
	  </div>

		`;
	teamDetails.appendChild(sportDiv);
};
//  Empty search error handle
const emptyErrorHandle = () => {
	searchError.textContent = '';
	emptyError.innerHTML = `
      <p class="text-danger text-center">Warning! Search field is empty! Type something...</p>`;
};

// 404 NOT found error
