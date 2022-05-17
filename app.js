// Get elements by Id and add them to constants for DOM manipulation.
const QUOTE_CONTAINER = document.getElementById('quote-container');
const QUOTE_TEXT = document.getElementById('quote');
const AUTHOR_TEXT = document.getElementById('author');
const TWITTER_BTN = document.getElementById('twitter');
const NEW_QUOTE_BTN = document.getElementById('new-quote');
const LOADER = document.getElementById('loader');

// Global variable array for quotes fetched from the API.
let apiQuotes = [];

// Show loading.
function loading() {
	LOADER.hidden = false;
	QUOTE_CONTAINER.hidden = true;
}

// Hide loading.
function complete() {
	LOADER.hidden = true;
	QUOTE_CONTAINER.hidden = false;
}

// Show new quote.
function newQuote() {
	// If it takes some time to load the new quote, show the loader animation.
	loading();

	// Pick a random quote from API Quotes array.
	const QUOTE = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
	
	// Check if author field is blank or null and replace it with 'Unkwown'.
	if(!QUOTE.author) {
		AUTHOR_TEXT.textContent = 'Unkwown';
	} else {
		AUTHOR_TEXT.textContent = QUOTE.author;
	}

	// Check quote length to determine styling.
	if (QUOTE.text.length > 140) {
		QUOTE_TEXT.classList.add('long-quote');
	} else {
		QUOTE_TEXT.classList.remove('long-quote');
	}

	// Add quote text and author to the page dynamically.
	QUOTE_TEXT.textContent = QUOTE.text;

	// After setting the quote, hide the loader animation.
	complete();
}

// Get quotes from API.
async function getQuotes() {
	// Show loader animation while you fetch quotes from the API.
	loading();

	// Fetch quotes.
	const API_URL = 'https://type.fit/api/quotes';
	const RESPONSE = await fetch(API_URL);
	apiQuotes = await RESPONSE.json();
	newQuote();
}

// Tweet a quote.
function tweetQuote() {
	const TWITTER_URL = `https://twitter.com/intent/tweet?text="${QUOTE_TEXT.textContent}" — ${AUTHOR_TEXT.textContent}`;
	window.open(TWITTER_URL, '_blank');
}

// Event listeners.
// Load a new quote when you press the new quote button.
NEW_QUOTE_BTN.addEventListener('click', newQuote);
// Tweet the current quote when you press the tweet button.
TWITTER_BTN.addEventListener('click', tweetQuote);

// On load.
getQuotes();
