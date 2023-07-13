import {allQuotes} from './quotes.js';

let author = document.querySelector(".person");
let quote = document.querySelector(".quote");
let button = document.querySelector(".button");
let signature = document.querySelector(".signature");

function randomQuote(){
let random = Math.floor(Math.random() * allQuotes.length);
quote.innerText = '"' + allQuotes[random].quote + '"';
author.innerText = allQuotes[random].author;

let fullName = author.innerText.split(" ");
let firstInitial = fullName[0][0];
let secondInitial = fullName[fullName.length-1][0];
signature.innerText = firstInitial + "." + secondInitial;
};

document.addEventListener("DOMContentLoaded", randomQuote);
button.addEventListener("click", randomQuote);
