// 24_5-2 Explore Random User API Who Am I24_5-2 Explore Random User API Who Am I
function randomUserName() {
	fetch('https://randomuser.me/api/?results=10')
		.then((res) => res.json())
		.then((data) => {
			console.log(data.results[3]);
			const user = data.results[3];
			const name = user.name;
			const fullName = `${name.title} ${name.first} ${name.last}`;
			document.getElementById('randomName').innerText = fullName;
		});
}
randomUserName();

// insert photos
// errors
// const photo = user.picture.medium;
// console.log(photo);
// document.getElementById('randomPhoto').src=photo
