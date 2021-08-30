// 33-5 Explore meal db api and create dynamic url to load meals

const buttonSearch = document.getElementById('buttonSearch');
const searchField = document.getElementById('searchField');
const searchResult = document.getElementById('searchResult');
const url = `https://www.themealdb.com/api/json/v1/1`;

// get data from mealdb
const getFood = (foodName) => {
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
	// console.log(searchText);

	// get data from mealdb
	getFood(searchText);
};

// 33-6 Display dynamic search result using bootstrap cards

// display search result
const displaySearchResult = (meals) => {
	// console.log(meals);

	meals.map((getMeal) => {
		console.log(getMeal);
		const { strMeal, strMealThumb, strInstructions } = getMeal;
		console.log(strMeal, strMealThumb);
		const divCol = document.createElement('div');
		divCol.classList.add('col');
		divCol.innerHTML = `
		
		<div class="card h-100">
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
