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
        <button onClick="displayCountryDetails('${country.name}')" class='btn btn-success'>Details</button>
        `;
		countryDiv.innerHTML = countryInfo;

		allCountries.appendChild(countryDiv);
	});
};

// button
const displayCountryDetails = (name) => {
	const url = `https://restcountries.eu/rest/v2/name/${name}`;
	// console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data[0].name);
			renderCountryInfo(data[0]);
		});
};

const renderCountryInfo = (country) => {
	console.log(country);
	const countryDiv = document.getElementById('countryDetails');
	countryDiv.innerHTML = `
    <img src='${country.flag}'>
    <h2>${country.name}</h2>
    <p>Population : ${country.population}</p>
    <p>Area : ${country.area}</p>
    `;
};
