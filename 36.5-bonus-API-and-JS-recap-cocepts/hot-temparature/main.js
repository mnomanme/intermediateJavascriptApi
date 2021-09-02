// 36_5-1 Get API key and load temperature data by city name

const apiKey = '72012f3aa79b6c3e65bf0f55d9224074';
const apiBase = 'http://api.openweathermap.org/data/2.5/weather';
const searchField = document.getElementById('cityNameSearch');
const buttonSearch = document.getElementById('buttonSearch');
const weatherIcon = document.getElementById('weatherIcon');

// `https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}`;

// load & search data
const searchTemparature = async () => {
	const cityName = searchField.value;
	searchField.value = '';
	const url = `
	https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric
	`;
	console.log(url);

	const res = await fetch(url);
	const data = await res.json();
	displayTemperature(data);
};

// set inner text
const setInnerText = (id, text) => {
	document.getElementById(id).innerText = text;
};

// display data
const displayTemperature = (weather) => {
	console.log(weather);
	// 36_5-2 Display temperature, city, dynamic weather icon
	const { name } = weather;
	const { temp } = weather.main;
	const { main, icon } = weather.weather[0];
	setInnerText('city', name);
	setInnerText('temperature', temp);
	setInnerText('weatherCondition', main);
	// set weather icon
	const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
	weatherIcon.setAttribute('src', url);
};

// search team hit enter
searchField.addEventListener('keypress', (event) => {
	// console.log('keyb', event.key);
	if (event.key === 'Enter') {
		buttonSearch.click();
	}
});
