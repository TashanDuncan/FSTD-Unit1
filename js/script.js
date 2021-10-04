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

let quotes = [
  {
    quote: 'Even if we painstakingly piece together something lost, it doesn’t mean things will ever go back to how they were.',
    source: 'Guts',
    citation: 'Berserk',
    year: 1997,
    episode: 4
  },
  {
    quote: 'While many can pursue their dreams in solitude, other dreams are like great storms blowing hundreds, even thousands of dreams apart in their wake. Dreams breathe life into men and can cage them in suffering. Men live and die by their dreams. But long after they have been abandoned they still smolder deep in men’s hearts. Some see nothing more than life and death. They are dead, for they have no dreams.',
    source: 'Griffith',
    citation: 'Berserk',
    year: 1997,
    episode: 2
  },
  {
    quote: 'Whether it’s good or bad, it’s so unfortunate to wake up during a dream.',
    source: 'Judeau',
    citation: 'Berserk',
    year: 2012,
    episode: 9
  },
  {
    quote: 'Hate is a place, where a man who can’t stand sadness goes.',
    source: 'Godo',
    citation: 'Berserk',
    year: 1997,
    episode: 1
  },
  {
    quote: 'You’re going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn’t it? I’m sure you’ll overcome this. You’ll walk again… soon.',
    source: 'Guts',
    citation: 'Berserk',
    year: 1997,
    episode: 3
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let result
  result = quotes[Math.floor(Math.random()*quotes.length)]
  return result
}

/***
 * `randomBackgroundColor` function
***/
function randomBackgroundColor() {
    
  function rbgRandom() {
      return Math.floor(Math.random() * 256)
    }
  
  document.body.style.backgroundColor = `rgb(${rbgRandom()}, ${rbgRandom()}, ${rbgRandom()})`

}

/***
 * `printQuote` function
***/
function printQuote() {
  const quote = getRandomQuote();

  let displayQuote = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;

  if(quote.citation) {
    displayQuote += `<span class="citation">${quote.citation}</span>`
  }

    //Additional quote object property
    if(quote.episode) {
      displayQuote += `<span class="episode">, Episode ${quote.episode}</span>`
    }

  if(quote.year) {
    displayQuote += `<span class="year">${quote.year}</span>`
  }




  displayQuote.concat('</p>')

  document.getElementById('quote-box').innerHTML = displayQuote; 
  randomBackgroundColor();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);