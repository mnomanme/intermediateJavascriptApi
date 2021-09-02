const apiKey = '72012f3aa79b6c3e65bf0f55d9224074';
const apiBase = 'http://api.openweathermap.org/data/2.5/weather';
const searchField = document.querySelector('#searchField');
const buttonSearch = document.querySelector('#buttonSearch');

const getWeatherData = (city) => {
	const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
	fetch(url)
		.then((res) => res.json)
		.then((data) => console.log(data));
};
getWeatherData();

// search team hit enter
searchField.addEventListener('keypress', (event) => {
	console.log('keyb', event.key);
	if (event.key === 'Enter') {
		buttonSearch.click();
	}
});
