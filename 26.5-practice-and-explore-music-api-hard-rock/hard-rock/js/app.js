const searchField = document.getElementById('searchField');
const songContainer = document.getElementById('songContainer');
const searchBtn = document.getElementById('searchBtn');
const lyricsDiv = document.getElementById('songLyrics');
const errorMessage = document.getElementById('errorMessage');

// get data
const searchSongs = async () => {
	const searchText = searchField.value;
	// console.log(searchText);
	const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
	// console.log(url);
	try {
		// load data
		const res = await fetch(url);
		const data = await res.json();
		displaySongs(data.data);
	} catch (error) {
		displayError();
	}
};

// keyboard enter
searchField.addEventListener('keypress', function (event) {
	// console.log('keyb', event.key);
	if (event.key === 'Enter') {
		searchBtn.click();
	}
});

// display songs
const displaySongs = (songs) => {
	// console.log(songs);
	songContainer.innerHTML = '';

	songs.forEach((song) => {
		// console.log(song);
		const { title, preview } = song;
		const { name } = song.artist;
		const songDiv = document.createElement('li');
		songDiv.className = 'single-result row align-items-center my-3 p-3';
		songDiv.innerHTML = `
			<div class="col-md-9">
				<h3 class="lyrics-name">${title}</h3>
				<p class="author lead">Album by <span>${name}</span></p>
				<audio controls>
					<source src="${preview}" type="audio/ogg">
		  		</audio> 
			</div>
			<div class="col-md-3 text-md-right text-center">
				<button onclick="getLyrics('${name}','${title}')" class="btn btn-success">Get Lyrics</button>
			</div>
		`;
		songContainer.appendChild(songDiv);
	});
};

// get lyrcis
const getLyrics = async (artist, title) => {
	// console.log(artist, title);
	// const url2 = `https://jsonplaceholder.typicode.com/${artist}/${title}`;
	const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
	// console.log(url);
	try {
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data.lyrics);
		displayLyrics(data.lyrics);
	} catch {
		displayError();
	}
};

// display lyrics
const displayLyrics = (lyrics) => {
	if (lyrics === undefined) {
		lyricsDiv.innerHTML = `<h3>Lyrics Not Found</h3>`;
	} else {
		lyricsDiv.innerText = lyrics;
	}
};

// display error message
const displayError = () => {
	errorMessage.innerHTML = `<h5>404! NOT FOUND! Please Try Again Later...</h5>`;
};
