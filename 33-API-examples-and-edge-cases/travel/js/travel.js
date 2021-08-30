// 33-3 International Travel, Display countries name, capital
const countryContainer = document.getElementById('countries');
const countryDetails = document.getElementById('countryDetails');
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
		// console.log(getCountry);
		const { name, area, capital, flag, region } = getCountry;
		const div = document.createElement('div');
		div.classList.add('country');
		div.innerHTML = `
                <h3>${name}</h3> 
                <h6>${capital}</h6>
                <button onclick="countryInformations('${name}')" class="btn btn-sm btn-outline-dark">Informations</button>
                `;
		countryContainer.appendChild(div);

		// const h2 = document.createElement('h2');
		// h2.innerHTML = `Country: ${name}`;
		// const h5 = document.createElement('h5');
		// h5.innerHTML = `Capital: ${capital}`;
		// div.appendChild(h2);
		// div.appendChild(h5);
	});
};

// get country informations
const countryInformations = (countryName) => {
	console.log(countryName);
	const url = `https://restcountries.eu/rest/v2/name/${countryName}
    `;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayCountryInformation(data[0]))
		.catch((err) => console.log(err));
};

// display country information

const displayCountryInformation = (info) => {
	console.log(info);
	const { name, region, area, population, flag } = info;
	countryDetails.innerHTML = `
    
    <h5>${name}</h5>
    <p>Population: ${population}</p>
    <img src=${flag} width=300px>
    `;
};
