fetch('https://restcountries.eu/rest/v2/all')
	.then((res) => res.json())
	.then((data) => displayCountries(data));

const displayCountries = (countries) => {
	console.log('all :', countries);
	const allCountries = document.getElementById('countries');

	// for each
	countries.forEach((country) => {
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

	// map
	countries.map((country) => {
		console.log(country.name);
		const countryDiv = document.createElement('div');

		const countryInfo = `
        <h5>${country.name}</h5>
        <p>${country.capital}</p>
        `;
		countryDiv.innerHTML = countryInfo;

		const countryName = document.createElement('h5');
		countryName.innerText = country.name;

		const countryCapital = document.createElement('p');
		countryCapital.innerText = country.capital;

		countryDiv.appendChild(countryName);
		countryDiv.appendChild(countryCapital);

		allCountries.appendChild(countryDiv);

		countryDiv.innerText = country.name;
		allCountries.appendChild(countryDiv);
	});

	// loop
	for (let i = 0; i < countries.length; i++) {
		const country = countries[i];
		console.log(country.name);
		const countryDiv = document.createElement('div');

		const countryInfo = `
        <h5>${country.name}</h5>
        <p>${country.capital}</p>
        `;
		countryDiv.innerHTML = countryInfo;

		const countryName = document.createElement('h5');
		countryName.innerText = country.name;

		const countryCapital = document.createElement('p');
		countryCapital.innerText = country.capital;

		countryDiv.appendChild(countryName);
		countryDiv.appendChild(countryCapital);

		allCountries.appendChild(countryDiv);

		countryDiv.innerText = country.name;
		allCountries.appendChild(countryDiv);
	}
};
