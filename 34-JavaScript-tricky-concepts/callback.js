// 34-8 (advanced) Callback function and pass different functions

const welcomeMessage = (name, greetHandler) => {
	// console.log('Name:', greetHandler);
	greetHandler(name);
};

const actor = 'Tom Hanks';

const actorNames = ['Tom Hanks', 'Brad Pit', 'Johny Deep'];

const actorObj = { name: 'Tom Hanks', profession: 'actor' };

const greetMorning = (greetingsName) => {
	console.log('Hello,', 'Good Morning', greetingsName);
};
const greetAfternoon = (greetingsName) => {
	console.log('Hello,', 'Good Afternoon', greetingsName);
};
const greetNight = (greetingsName) => {
	console.log('Hello,', 'Good Night', greetingsName);
};

// welcomeMessage(actor);
// welcomeMessage(actorNames);
// welcomeMessage(actorObj);

welcomeMessage('Mohammad Noman', greetMorning);
welcomeMessage('Mohammad Faruque', greetAfternoon);
welcomeMessage('Mohammad Baki', greetNight);

// callback
/*

const handleOnClick = () => {
	console.log('button click me');
};

document.getElementById('Btn').addEventListener('click', handleOnClick);

document.getElementById('myBtn').addEventListener('click', () => {
	console.log('button is working');
});

*/
