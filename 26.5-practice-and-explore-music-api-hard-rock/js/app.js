// get data
const searchSongs = async () => {
	const searchText = document.getElementById('searchField').value;
	console.log(searchText);
	const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
	console.log(url);

	// load data
	const res = await fetch(url);
	const data = await res.json();
	displaySongs(data.data);
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
const getLyrics = async (artist, title) => {
	console.log(artist, title);
	const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
	console.log(url);

	const res = await fetch(url);
	const data = await res.json();
	displayLyrics(data.lyrics);
};

// display lyrics

const displayLyrics = (lyrics) => {
	const lyricsDiv = document.getElementById('songLyrics');
	lyricsDiv.innerText = lyrics;
};