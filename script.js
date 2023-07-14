//Importing quote data from quotes.js
import {allQuotes} from './quotes.js';

//Selecting only quotes that are less or equal to 90 characters, and without Kanye obscenities
let shortQuotes = allQuotes.filter(obj => {
    let keys = Object.keys(obj);
    let quoteValue = obj[keys[0]];
    let authorValue = obj[keys[1]];
    return quoteValue.length <= 90 && authorValue.length <= 24 && !authorValue.toLowerCase().includes("proverb") && !authorValue.toLowerCase().includes("kanye");
});

// DOM Manipulation
let author = document.querySelector(".person");
let quote = document.querySelector(".quote");
let signature = document.querySelector(".signature");
let button = document.querySelector(".btn-newquote");
let tweetButton = document.querySelector(".btn-tweet");
let copyButton = document.querySelector(".btn-copy");
let copyText = document.querySelector("#copyText")
// Generate a random quote and assign it, the author's name and signature to their respective html elements
function randomQuote(){
    
  let random = Math.floor(Math.random() * shortQuotes.length);
    quote.innerText = '"' + shortQuotes[random].quote + '"';
    author.innerText = shortQuotes[random].author;

    let fullName = author.innerText.split(/[,\s.]+/);
    let firstInitial = fullName[0][0].toUpperCase();
    let lastInitial = fullName[fullName.length-1][0].toUpperCase();
    if(fullName.length == 1){
        signature.innerText = firstInitial + ".";
    }
    else if(fullName.length == 2){
        signature.innerText = firstInitial + "." + lastInitial;
    }
    else{
        let middleInitial = fullName[1][0].toUpperCase();
        signature.innerText = firstInitial + "." + middleInitial + "." + lastInitial;
    };

    window.quoteAndAuthorTweet = `${quote.innerText}\n\n - ${author.innerText}`;

    if (copyText.innerText === 'Copied!'){
      copyText.innerText = 'Copy Quote'
    }
};


function tweetQuote() {
  let encodedQuote = encodeURIComponent(quoteAndAuthorTweet)
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  window.open(twitterUrl, "_blank");
}

function copyQuote(){
  navigator.clipboard.writeText(quoteAndAuthorTweet);
  copyText.innerHTML = '<span class = "btn-text" id = "copyText">Copied!</span>'
}

document.addEventListener("DOMContentLoaded", randomQuote);
button.addEventListener("click", randomQuote);
tweetButton.addEventListener("click", tweetQuote);
copyButton.addEventListener("click", copyQuote);
