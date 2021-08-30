// 33-1 Basic API concept recap with Kanye West
const loadQuotes = () => {
	fetch(`https://api.kanye.rest/`)
		.then((res) => res.json())
		.then((data) => displayQuotes(data));
};
loadQuotes();

const quotesElement = document.getElementById('quotes');
const displayQuotes = (quoteDisplay) => {
	console.log(quoteDisplay);
	const { quote } = quoteDisplay;
	quotesElement.innerText = quote;
};
