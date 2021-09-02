const searchField = document.getElementById('searchField');
// const searchBook = document.getElementById('searchBook');
const searchResult = document.getElementById('searchResult');
const totalBookFound = document.querySelector('#totalBookFound');

// get book data
const loadBookData = (searchBook) => {
	const url = `http://openlibrary.org/search.json?q=${searchBook}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		// .then((data) => console.log(data.docs[0].title));
		.then((data) => displayBookdata(data));
};

// search book result
const searchBook = () => {
	const searchText = searchField.value;
	searchField.value = '';
	loadBookData(searchText);
};

// display book data
const displayBookdata = (bookTitle) => {
	console.log(bookTitle);
	const totalBook = bookTitle.numFound;

	const totalDiv = document.createElement('div');
	totalDiv.innerHTML = `<h3>Number of Total Book Found: ${totalBook}</h3>`;
	totalBookFound.appendChild(totalDiv);

	const books = bookTitle.docs;

	books?.forEach((allBook) => {
		// console.log(allBook);
		const { title } = allBook;
		const divCol = document.createElement('div');
		divCol.classList.add('col');
		divCol.innerHTML = `
		<div onclick="showMealDetails()" class="card border-info h-100">

			<img src="https://covers.openlibrary.org/b/id/${allBook?.cover_i}-M.jpg" class="card-img-top width="200px" alt="not found" />
		
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
