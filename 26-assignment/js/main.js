const meals = () => {
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
		.then((res) => res.json())
		.then((data) => displayMeal(data));
};
meals();
// display meal
const displayMeal = (meal) => {
	console.log(meal);
};

// error empty search handle
const emptyError = () => {
	document.getElementById('searchError').innerHTML = '';
	document.getElementById('emptyError').innerHTML = `
	
	<p>Warning! Search Field is Empty. Please Type Something...</p>

	`;
};

// error not found handle
const searchError = () => {
	document.getElementById('searchError').innerHTML = `
	
	<p class="message-error">404 NOT FOUND <br> Sorry! We Cannot Find Your Meal <br> Please Try Again...</p>

	`;
};
