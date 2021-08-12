fetch('https://restcountries.eu/rest/v2/all')
	.then((res) => res.json())
	.then((data) => displayCountries(data));

const displayCountries = (countries) => {
	// console.log('all :', countries);
	const allCountries = document.getElementById('countries');

	countries.map((country) => {
		// console.log(country.name);
		const countryDiv = document.createElement('div');

		const countryName = document.createElement('h5');
		countryName.innerText = country.name;

		const countryCapital = document.createElement('p');
		countryCapital.innerText = country.capital;

		countryDiv.appendChild(countryName);
		countryDiv.appendChild(countryCapital);

		allCountries.appendChild(countryDiv);

		// countryDiv.innerText = country.name;
		// allCountries.appendChild(countryDiv);
	});
};
