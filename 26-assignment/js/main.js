const search = document.getElementById('search');
const errorEmpty = document.getElementById('emptyError');
const errorSearch = document.getElementById('searchError');
const allMeals = document.getElementById('meals');
const mealDetails = document.getElementById('mealDetails');
const buttonSearch = document.getElementById('buttonSearch');
const url = `https://www.themealdb.com/api/json/v1/1`;

//  Get Meal Data from MealDB
const meals = (name) => {
	toggleSpinner(true);
	fetch(`${url}/search.php?s=${name}`)
		.then((res) => res.json())
		.then((data) => displayMeals(data))
		.catch(() => errorHandler());
};

//  Search Button and input taking
const searchBtn = () => {
	searchMeal = search.value;
	searchMeal != '' ? meals(searchMeal) : emptyError();
	search.value = '';
};

// search keyboard enter hit
search.addEventListener('keypress', function (event) {
	// console.log('keyb', event.key);
	if (event.key === 'Enter') {
		buttonSearch.click();
	}
});

//  Displaying Meals by matching name
const displayMeals = async (mealsData) => {
	errorSearch.innerHTML = '';
	allMeals.innerHTML = '';
	mealDetails.innerHTML = '';
	errorEmpty.innerHTML = '';
	await toggleSpinner(false);
	mealsData.meals.map((meal) => {
		const { strMeal, strMealThumb } = meal;
		const mealDiv = document.createElement('div');
		mealDiv.className = 'meal';
		mealDiv.innerHTML = `
        
          <div class="display-meal-box" onclick="displayMealIngredients('${strMeal}')">
            <img src="${strMealThumb}" alt="">
            <h3 class="meal-name">${strMeal}</h3>
          </div>
          </a>
        `;
		allMeals.appendChild(mealDiv);
	});
};

//  Get Ingredient Data
const displayMealIngredients = (name) => {
	toggleSpinner(true);
	fetch(`${url}/search.php?s=${name}`)
		.then((res) => res.json())
		.then((data) => {
			getMealIngredients(data.meals[0]);
		});
};

//  Showing Meal Details
const getMealIngredients = (meal) => {
	toggleSpinner(false);
	const { strMeal, strMealThumb } = meal;
	mealDetails.innerHTML = `
        <div class="meal-ingredients-show">
          <img src="${strMealThumb}" alt="">
           <div class="ingredients">
             <h3>${strMeal}</h3>
             <h4>Ingredient List</h4>
             <ul>
               ${displayIngredientsList(meal)}
             </ul>
           </div>
        </div>

      `;
};

//  Ingrediants list making
const displayIngredientsList = (list) => {
	let ingredients = '';
	for (let i = 1; i <= 15; i++) {
		ingredients += list['strIngredient' + i] != '' || null ? `<li>${list['strIngredient' + i]}</li>` : '';
	}
	return ingredients;
};

//  Empty search error handle
const emptyError = () => {
	errorSearch.innerHTML = '';
	errorEmpty.innerHTML = `
      <p class="text-center text-danger">Warning! Search field is empty! Type something...</p>`;
};
//  Not found search error massage
const errorHandler = () => {
	errorSearch.innerHTML = `
    <p class="text-center text-danger">404! Not Found! <br> Sorry, We Cannot Find Your Meal. <br> 
    Please try again.<p>`;
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
