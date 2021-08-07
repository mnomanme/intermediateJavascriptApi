// 24_5-1 Explore fun tasks with bored api
function findTask() {
	fetch('http://www.boredapi.com/api/activity/')
		.then((res) => res.json())
		.then((data) => {
			console.log('bored api :', data);
			document.getElementById('activity').innerText = data.activity;
		});
}

findTask();

// set time out to chage activity
setInterval(() => {
	findTask();
}, 3000);
