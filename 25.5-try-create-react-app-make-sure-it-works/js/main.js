fetch('https://restcountries.eu/rest/v2/all')
	.then((res) => res.json())
	.then((data) => displayCountries(data));

const displayCountries = (countries) => {
	// console.log('all :', countries);
	const allCountries = document.getElementById('countries');

	countries.map((country) => {
		// console.log(country.name);
		const countryDiv = document.createElement('div');
		countryDiv.className = 'country';

		const countryInfo = `
        <h5 class='countryName'>${country.name}</h5>
        <p class='countryCapital'>${country.capital}</p>
        `;
		countryDiv.innerHTML = countryInfo;

		allCountries.appendChild(countryDiv);
	});
};
