/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  { 
      quote: "Roger-",
      source: "Jinkx Monsoon",
      citation: "RPDR All-Stars Season 7",
      year: 2022,
      tags: "Season's Winner"

  },
  { 
      quote: "HALLELOO!",
      source: "Shangela",
      citation: "RPDR Season 3",
      year: 2011
  },
  { 
      quote: "Miss Vanjie.. Miss Vanjie... Miss Vaaaanjiee.....",
      source: "Vanessa Vanjie Mateo",
      citation: "RPDR Season 11",
      year: 2019
  },
  { 
      quote: "Not today, Satan! Not today.",
      source: "Bianca Del Rio",
      citation: "RPDR Season 6",
      year: 2014,
      tags: "Season's Winner"
  },
  { 
      quote: "HIIIIIEEEEEEEEEE!!!!",
      source: "Alaska",
      citation: "RPDR Season 5",
      year: 2013
  },
  { 
      quote: "This is not Rupaul's Best Friend Race!",
      source: "Lashauwn Beyond",
      citation: "RPDR Season 4",
      year: 2012,
  },
  { 
      quote: "Party.",
      source: "Adore Delano",
      citation: "RPDR Season 6",
      year: 2014
  },
  { 
      quote: "Well guess what Mimi? We did",
      source: "Raven",
      citation: "RPDR All-Stars Season 1",
      year: 2012
  },
  { 
      quote: "You're perfect, you're beautiful, you look like Linda Evangelista, you're a model! Everything about you is perfect. Did you stone those tights? Oh, you're smiling! They eat her up every single time she's on that damn stage!",
      source: "Aja",
      citation: "RPDR Season 9",
      year: 2017
  },
  { 
      quote: "Look over there!",
      source: "Jaida Essence Hall",
      citation: "RPDR Season 12",
      year: 2020,
      tags: "Season's Winner"
  }
];


/***
 * `getRandomQuote` function
 * Returns a random object within the 'quotes' array.
***/

function getRandomQuote (arr) {
  let randomObject = Math.floor(Math.random() * arr.length);
  return arr[randomObject];
}

/***
 * 'random_bg_color' function
 * CODE CREDIT TO W3 SCHOOLS
 * creates 3 random numbers to input into rgb parameter and returns a random color
 */

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
    }


   

/***
 * `printQuote` function
 * returns 'quote' and 'source' while checking if there is a 'citation' and/or 'year' and printing them to screen
***/

function printQuote () {
    setInterval(timedChange, 5000);
    function timedChange () {
        let randomQuote = getRandomQuote(quotes);
        let randomBGC = random_bg_color();;
        let html = `<p class="quote"> ${randomQuote.quote} </p>` + `<p class="source"> ${randomQuote.source}`;
            if (randomQuote.citation ){
                html += `<span class="citation"> ${randomQuote.citation}</span>`;
            } 
            if (randomQuote.year){
                html += `<span class="source"> ${randomQuote.year} </span>`;
            } 
            if (randomQuote.tags){
                html += `<span class="tags"> ${randomQuote.tags} </span>`;
            } 
            + '</p>';
            document.getElementById('quote-box').innerHTML = html;
        }
    }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);