let apiQuotes = [];

// Show new quote.
function newQuote() {
	// Pick a random quote from API Quotes array.
	const QUOTE = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
	console.log(QUOTE.text);
}

// Get quotes from API.
async function getQuotes() {
	const API_URL = 'https://type.fit/api/quotes';
	const RESPONSE = await fetch(API_URL);
	apiQuotes = await RESPONSE.json();
	newQuote();
}

// On load.
getQuotes();
