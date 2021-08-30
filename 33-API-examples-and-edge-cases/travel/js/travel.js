// 33-3 International Travel, Display countries name, capital
const countryContainer = document.getElementById('countries');
// load data
const loadCountries = () => {
	fetch(`https://restcountries.eu/rest/v2/all
    `)
		.then((res) => res.json())
		.then((data) => displayCountries(data))
		.catch((error) => console.log(error));
};
loadCountries();

// display country
const displayCountries = (country) => {
	// console.log(country);
	country.forEach((getCountry) => {
		console.log(getCountry);
		const { name, area, capital, flag, region } = getCountry;
		const div = document.createElement('div');
		div.classList.add('country');
		const h2 = document.createElement('h2');
		h2.innerHTML = `Country: ${name}`;
		const h5 = document.createElement('h5');
		h5.innerHTML = `Capital: ${capital}`;
		div.appendChild(h2);
		div.appendChild(h5);
		countryContainer.appendChild(div);
	});
};
