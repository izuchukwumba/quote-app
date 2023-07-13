import {allQuotes} from './quotes.js';

let author = document.querySelector(".person");
let quote = document.querySelector(".quote");
let button = document.querySelector(".button");



function randomQuote(){
let random = Math.floor(Math.random() * allQuotes.length);
quote.innerText = '"' + allQuotes[random].quote + '"';
author.innerText = allQuotes[random].author;
}

button.addEventListener("click", randomQuote);
