// get data
const searchSongs = () => {
	const searchText = document.getElementById('searchField').value;
	console.log(searchText);
	const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => displaySongs(data.data))
		.catch((error) => displayError('404! NOT FOUND! Please Try Again Later...'));
};

// display songs
const displaySongs = (songs) => {
	console.log(songs);
	const songContainer = document.getElementById('songContainer');
	songContainer.innerHTML = '';
	songs.map((song) => {
		console.log(song.title);
		const songDiv = document.createElement('li');
		songDiv.className = 'single-result row align-items-center my-3 p-3';
		songDiv.innerHTML = `
		<div class="col-md-9">
			<h3 class="lyrics-name">${song.title}</h3>
			<p class="author lead">Album by <span>${song.artist.name}</span></p>
			<audio controls>
				<source src="${song.preview}" type="audio/ogg">
		  </audio> 
		</div>
		<div class="col-md-3 text-md-right text-center">
			<button onclick="{'${song.title}','${song.artist.name}'}" class="btn btn-success">Get Lyrics</button>
		</div>
		`;
		songContainer.appendChild(songDiv);
	});
};

// get lyrcis
const getLyrics = (artist, title) => {
	console.log(artist, title);
	const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
	console.log(url);

	fetch(url)
		.then((res) => res.json())
		.then((data) => displayLyrics(data.lyrics));
};

// display lyrics

const displayLyrics = (lyrics) => {
	const lyricsDiv = document.getElementById('songLyrics');
	lyricsDiv.innerText = lyrics;
};

// display error message
const displayError = (error) => {
	const errorMessage = document.getElementById('errorMessage');
	errorMessage.innerText = error;
};

// display spinner
const toggleSpinner = (show) => {
	const spinner = document.getElementById('loadingSpinner');
	// console.log(spinner.classList);
	if (show) {
		spinner.classList.remove('d-none');
	} else {
		spinner.classList.add('d-block');
	}
};
