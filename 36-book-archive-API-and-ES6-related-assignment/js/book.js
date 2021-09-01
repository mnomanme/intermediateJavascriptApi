const searchField = document.getElementById('searchField');
// const searchBook = document.getElementById('searchBook');
const searchResult = document.getElementById('searchResult');

const loadBookData = (searchBook) => {
	const url = `http://openlibrary.org/search.json?q=${searchBook}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		// .then((data) => console.log(data.docs[0].title));
		.then((data) => displayBookdata(data.docs));
};

const searchBook = () => {
	const searchText = searchField.value;
	searchField.value = '';
	loadBookData(searchText);
};

const displayBookdata = (bookTitle) => {
	console.log(bookTitle);
	bookTitle?.forEach((allBook) => {
		console.log(allBook.title);
		const { title } = allBook;
		const { publisher } = allBook.publisher;
		const divCol = document.createElement('div');
		divCol.classList.add('col');
		divCol.innerHTML = `
		
		<div onclick="showMealDetails()" class="card border-info h-100">
			<img src="https://covers.openlibrary.org/b/id/${allBook?.cover_i}-L.jpg" class="card-img-top width="200px" alt="..." />
			<div class="card-body">
				<h3 class="card-title">${title.slice(0, 10)}</h3>
				<p class="card-text">${allBook.publisher[0]}</p>
			</div>
		</div>

		`;
		searchResult.appendChild(divCol);
	});
};
