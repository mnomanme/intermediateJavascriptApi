const apiKey = '72012f3aa79b6c3e65bf0f55d9224074';
const apiBase = 'http://api.openweathermap.org/data/2.5/weather';
const searchField = document.querySelector('#cityNameSearch');

// `https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}`;

// load & search data
const searchTemparature = async () => {
	const cityName = searchField.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
	console.log(url);

	const res = await fetch(url);
	const data = await res.json();
	displayTemperature(data);
};

// display data

const displayTemperature = (temp) => {
	console.log(temp);
};
