// 33-5 Explore meal db api and create dynamic url to load meals

const buttonSearch = document.getElementById('buttonSearch');
const searchField = document.getElementById('searchField');
const searchResult = document.getElementById('searchResult');
const mealDetails = document.getElementById('mealDetails');
const errorMessage = document.getElementById('errorMessage');
const emptyError = document.getElementById('emptyError');
const searchError = document.getElementById('searchError');
const url = `https://www.themealdb.com/api/json/v1/1`;

// get data from mealdb
const getFood = async (foodName) => {
	toggleSpinner(true);
	// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
	// console.log(url);
	searchError.textContent = '';
	fetch(`${url}/search.php?s=${foodName}`)
		.then((res) => res.json())
		.then((data) => displaySearchResult(data.meals))
		.catch((error) => notFoundHandler(error));
};

// search food button
const searchFood = () => {
	const searchText = searchField.value;
	searchField.value = '';
	mealDetails.textContent = '';
	emptyError.textContent = '';
	errorMessage.style.display = 'none';
	// console.log(searchText);
	if (searchText === '') {
		emptyErrorHandle();
	} else {
		// get data from mealdb
		getFood(searchText);
	}
};

// search food hit enter
searchField.addEventListener('keypress', function (event) {
	// console.log('keyb', event.key);
	if (event.key === 'Enter') {
		buttonSearch.click();
	}
});

// 33-6 Display dynamic search result using bootstrap cards
// display search result
const displaySearchResult = (meals) => {
	// console.log(meals);
	toggleSpinner(false);
	searchResult.innerHTML = '';
	meals.map((getMeal) => {
		// console.log(getMeal);
		const { idMeal, strMeal, strMealThumb, strInstructions } = getMeal;
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
	toggleSpinner(true);
	// console.log(mealId);
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayMealDetails(data.meals[0]))
		.catch((error) => displayError(error));
};

// display meal details
const displayMealDetails = (showMeal) => {
	toggleSpinner(false);
	// console.log(showMeal);
	mealDetails.textContent = '';
	const mealDiv = document.createElement('div');
	mealDiv.classList.add('card');
	const { idMeal, strYoutube, strMeal, strMealThumb, strInstructions } = showMeal;
	mealDiv.innerHTML = `

		<div>
			<div class="card" >
				<img src="${strMealThumb}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${strMeal}</h5>
					<p class="card-text">${strInstructions.slice(0, 100)}</p>
					<h4>Ingredient List</h4>
					<ul>
					  ${displayIngredientsList(showMeal)}
					</ul>
					<a href="${strYoutube}" class="btn btn-outline-secondary">Recipe</a>
				</div>
			</div>
		</div>

	`;
	mealDetails.appendChild(mealDiv);
};

//  Ingrediants list making
const displayIngredientsList = (list) => {
	let ingredients = '';
	for (let i = 1; i <= 15; i++) {
		// list string index ['strIngredient' + i]
		ingredients += list['strIngredient' + i] != '' || null ? `<li>${list['strIngredient' + i]}</li>` : '';
	}
	return ingredients;
};

// display error
errorMessage.style.display = 'none';
const displayError = () => {
	errorMessage.style.display = 'block';
};

//  Empty search error handle
const emptyErrorHandle = () => {
	searchError.innerHTML = '';
	emptyError.innerHTML = `
      <p class="text-danger text-center">Warning! Search field is empty! Type something...</p>`;
};

//  Not found search error massage
const notFoundHandler = () => {
	searchError.innerHTML = `
    	<p class="text-danger text-center">404! Not Found! Sorry, We Cannot Find Your Meal. Please try again.<p>`;
};

// display spinner
const toggleSpinner = (show) => {
	const spinner = document.getElementById('loadingSpinner');
	// console.log(spinner.classList);
	if (show) {
		spinner.classList.remove('d-none');
	} else {
		spinner.classList.add('d-none');
	}
};
