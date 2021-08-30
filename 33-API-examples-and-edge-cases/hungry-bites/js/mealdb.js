// 33-5 Explore meal db api and create dynamic url to load meals

const buttonSearch = document.getElementById('buttonSearch');
const searchField = document.getElementById('searchField');
const searchResult = document.getElementById('searchResult');
const mealDetails = document.getElementById('mealDetails');
const errorMessage = document.getElementById('errorMessage');
const url = `https://www.themealdb.com/api/json/v1/1`;

// get data from mealdb
const getFood = async (foodName) => {
	// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
	// console.log(url);

	fetch(`${url}/search.php?s=${foodName}`)
		.then((res) => res.json())
		.then((data) => displaySearchResult(data.meals))
		.catch((error) => console.log(error));
};

// search food
const searchFood = () => {
	const searchText = searchField.value;
	searchField.value = '';
	mealDetails.textContent = '';
	errorMessage.style.display = 'none';
	// console.log(searchText);
	if (searchText === '') {
		// please write something to display
		return alert('Please type your food name');
	} else {
		// get data from mealdb
		getFood(searchText);
	}
};

// 33-6 Display dynamic search result using bootstrap cards
// display search result
const displaySearchResult = (meals) => {
	// console.log(meals);

	searchResult.innerHTML = '';
	if (meals === 0) {
		// show no result found
	}
	meals.map((getMeal) => {
		// console.log(getMeal);
		const { idMeal, strMeal, strMealThumb, strInstructions } = getMeal;
		// console.log(strMeal, strMealThumb);
		const divCol = document.createElement('div');
		divCol.classList.add('col');
		divCol.innerHTML = `
		
		<div onclick="showMealDetails(${idMeal})" class="card border-info h-100">
			<img src="${strMealThumb}" class="card-img-top" alt="..." />
			<div class="card-body">
				<h3 class="card-title">${strMeal}</h3>
				<p class="card-text">${strInstructions.slice(0, 300)}</p>
			</div>
		</div>
		`;
		searchResult.appendChild(divCol);
	});
};

// 33-7 Create dynamic url based on click and display data
// show meal details
const showMealDetails = (mealId) => {
	console.log(mealId);
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayMealDetails(data.meals[0]))
		.catch((error) => displayError(error));
};

// display meal details
const displayMealDetails = (showMeal) => {
	console.log(showMeal);
	mealDetails.textContents = '';
	const mealDiv = document.createElement('div');
	mealDiv.classList.add('card');
	const { idMeal, strYoutube, strMeal, strMealThumb, strInstructions } = showMeal;
	mealDiv.innerHTML = `

		<div id="mealDetails">
			<div class="card" >
				<img src="${strMealThumb}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${strMeal}</h5>
					<p class="card-text">${strInstructions.slice(0, 300)}</p>
					<a href="${strYoutube}" class="btn btn-outline-secondary">Go somewhere</a>
				</div>
			</div>
		</div>

	`;
	mealDetails.appendChild(mealDiv);
};

// display error
errorMessage.style.display = 'none';
const displayError = () => {
	errorMessage.style.display = 'block';
};
