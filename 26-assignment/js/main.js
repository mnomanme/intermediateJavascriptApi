const meals = () => {
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
		.then((res) => res.json())
		.then((data) => console.log(data));
};
meals();
// display meal
const displayMeal = () => {};
