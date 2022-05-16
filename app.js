let apiQuotes = [];

// Show new quote.
function newQuote() {
	// Pick a random quote from API Quotes array.
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
	console.log(quote.text);
}

// Get quotes from API.
async function getQuotes() {
	const API_URL = 'https://type.fit/api/quotes';
	const response = await fetch(API_URL);
	apiQuotes = await response.json();
	newQuote();
}

// On load.
getQuotes();
