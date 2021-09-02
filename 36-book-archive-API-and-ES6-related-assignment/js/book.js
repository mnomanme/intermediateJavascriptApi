const searchField = document.getElementById('searchField');
const searchResult = document.getElementById('searchResult');
const totalBookFound = document.querySelector('#totalBookFound');
const loadingSpinner = document.querySelector('#loadingSpinner');

const toggleSpinner = (show) => {
	const spinner = document.getElementById('loadingSpinner');
	// console.log(spinner.classList);
	if (show) {
		spinner.classList.remove('d-none');
	} else {
		spinner.classList.add('d-none');
	}
};

// get book data
const loadBookData = async (searchBook) => {
	toggleSpinner(true);
	const url = `http://openlibrary.org/search.json?q=${searchBook}`;
	console.log(url);
	try {
		const res = await fetch(url);
		const data = await res.json();
		displayBookdata(data);
	} catch (error) {
		console.log(error);
	}
};

// search book result
const searchBook = async () => {
	const searchText = searchField.value;
	searchField.value = '';
	await loadBookData(searchText);
};

// display book data
const displayBookdata = (bookTitle) => {
	toggleSpinner(false);
	console.log(bookTitle);
	const totalBook = bookTitle.numFound;
	totalBookFound.textContent = '';
	const totalDiv = document.createElement('div');
	totalDiv.innerHTML = `<h3>Number of Total Book Found: ${totalBook}</h3>`;
	totalBookFound.appendChild(totalDiv);
	searchResult.textContent = '';

	const books = bookTitle.docs.slice(0, 10);

	books?.forEach((allBook) => {
		// console.log(allBook);
		const { title } = allBook;
		const divCol = document.createElement('div');
		divCol.classList.add('col');
		divCol.innerHTML = `

		<div onclick="showMealDetails()" class="card border-info h-100">

			<img src="https://covers.openlibrary.org/b/id/${allBook?.cover_i}-M.jpg" 
			class="card-img-top width="200px" alt="not found" />
		
			<div class="card-body">
				<h4 class="card-title">Book Name: ${title}</h4>
				<p class="card-text">Publisher: ${allBook.publisher?.[0]}</p>
				<p class="card-text">Publish Year: ${allBook.publish_year?.[0]} </p>
				<p class="card-text">Publish Date: ${allBook.publish_date?.[0]} </p>
			</div>

		</div>
			`;

		searchResult.appendChild(divCol);
	});
};
