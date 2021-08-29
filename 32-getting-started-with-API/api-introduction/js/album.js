const loadAlbum = () => {
	fetch('https://jsonplaceholder.typicode.com/albums')
		.then((res) => res.json())
		.then((data) => displayAlbums(data));
};
loadAlbum();

const albumContainer = document.getElementById('albums');
const displayAlbums = (albums) => {
	for (const album of albums) {
		console.log(album);
		const p = document.createElement('p');
		p.style.textAlign = 'center';
		const { id, title, userId } = album;
		p.innerHTML = `userId:${userId} <br> ${title}`;
		albumContainer.appendChild(p);
	}
};
