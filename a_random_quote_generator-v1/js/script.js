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
      citation: "RPDR Season 5",
      year: 2013

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
      year: 2014
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
      citation: "RPDR All Stars Season 1",
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
      year: 2020
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);