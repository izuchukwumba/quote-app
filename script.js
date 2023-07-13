//Importing quote data from quotes.js
import {allQuotes} from './quotes.js';

// Selecting just the needed data from the array (Quote and Author's name)
// const onlyQuoteAndAuthorName = allQuotes.map(obj => {
//     const newObj = {};
//     const keys = Object.keys(obj);
//     newObj[keys[0]] = obj[keys[0]];
//     newObj[keys[1]] = obj[keys[1]];
//     return newObj;
//   });

//Selecting only quotes that are less or equal to 90 characters
let shortQuotes = allQuotes.filter(obj => {
    let keys = Object.keys(obj);
    let value = obj[keys[0]];
    return value.length <= 90;
    });

// DOM Manipulation
let author = document.querySelector(".person");
let quote = document.querySelector(".quote");
let button = document.querySelector(".button");
let signature = document.querySelector(".signature");

// Generate a random quote and assign it, the author's name and signature to their respective html elements
function randomQuote(){
    let random = Math.floor(Math.random() * allQuotes.length);
    quote.innerText = '"' + allQuotes[random].quote + '"';
    author.innerText = allQuotes[random].author;

    let fullName = author.innerText.split(" ");
    let firstInitial = fullName[0][0].toUpperCase();
    let secondInitial = fullName[fullName.length-1][0].toUpperCase();
    signature.innerText = firstInitial + "." + secondInitial;
};

document.addEventListener("DOMContentLoaded", randomQuote);
button.addEventListener("click", randomQuote);
