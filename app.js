// Get elements by Id and add them to constants for DOM manipulation.
const QUOTE_CONTAINER = document.getElementById('quote-container');
const QUOTE_TEXT = document.getElementById('quote');
const AUTHOR_TEXT = document.getElementById('author');
const TWITTER_BTN = document.getElementById('twitter');
const NEW_QUOTE_BTN = document.getElementById('new-quote');

// Global variable array for quotes fetched from the API.
let apiQuotes = [];

// Show new quote.
function newQuote() {
	// Pick a random quote from API Quotes array.
	const QUOTE = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
	// Add quote text and author to the page dynamically.
	AUTHOR_TEXT.textContent = QUOTE.author;
	QUOTE_TEXT.textContent = QUOTE.text;
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
