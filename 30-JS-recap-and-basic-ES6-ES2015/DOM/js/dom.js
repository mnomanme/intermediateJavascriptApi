// 30-2 Recap of DOM Manipulation and event handler

const addBorder = document.getElementById('addBorder');
const friendContainer = document.getElementById('friendContainer');
const friend = document.querySelectorAll('.friend');
const addFriend = document.getElementById('addFriend');

// add border
addBorder.addEventListener('click', function () {
	console.log('add border clicked');
	friendContainer.style.border = '2px solid tomato';
});

// add background
const addBackgroundColor = () => {
	for (const friends of friend) {
		friends.style.backgroundColor = 'lightblue';
	}
};

// add friend
addFriend.addEventListener('click', () => {
	const friendDiv = document.createElement('div');
	friendDiv.classList.add('friend');
	friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend-${1}</h3>
		<p>Earum, enim nobis.</p>
    `;
	friendContainer.appendChild(friendDiv);
});
