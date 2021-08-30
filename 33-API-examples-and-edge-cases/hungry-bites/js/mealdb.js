// 33-5 Explore meal db api and create dynamic url to load meals

const buttonSearch = document.getElementById('buttonSearch');
const searchField = document.getElementById('searchField');
const url = `https://www.themealdb.com/api/json/v1/1`;
// get data from mealdb
const getFood = (foodName) => {
	// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
	// console.log(url);
	fetch(`${url}/search.php?s=${foodName}`)
		.then((res) => res.json())
		.then((data) => console.log(data.meals));
	// .catch((error) => console.log(error));
};
// search food
const searchFood = () => {
	const searchText = searchField.value;
	searchField.value = '';
	// console.log(searchText);
	// get data from mealdb
	getFood(searchText);
};
searchFood();
