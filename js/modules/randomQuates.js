const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');


export async function randomQuotes() {

const quotes = await fetch('https://type.fit/api/quotes');
const response = await quotes.json();

let getRandomvalues = Math.floor(Math.random() * 1000);

quote.innerHTML = response[getRandomvalues].text;
author.innerHTML = response[getRandomvalues].author;

    changeQuote.addEventListener('click',randomQuotes);

}

