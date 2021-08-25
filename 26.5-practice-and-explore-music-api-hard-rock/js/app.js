// get data
const searchSongs = () => {
	const searchText = document.getElementById('searchField').value;
	console.log(searchText);
	// const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
	const url = `https://jsonplaceholder.typicode.com/comments/${searchText}`;
	// console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => displaySongs(data));
};

// display songs
const displaySongs = (songs) => {
	console.log(songs);
};
