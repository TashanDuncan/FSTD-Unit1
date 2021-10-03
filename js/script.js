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
    year: 1997
  },
  {
    quote: 'While many can pursue their dreams in solitude, other dreams are like great storms blowing hundreds, even thousands of dreams apart in their wake. Dreams breathe life into men and can cage them in suffering. Men live and die by their dreams. But long after they have been abandoned they still smolder deep in men’s hearts. Some see nothing more than life and death. They are dead, for they have no dreams.',
    source: 'Griffith',
    citation: 'Berserk',
    year: 1997
  },
  {
    quote: 'Whether it’s good or bad, it’s so unfortunate to wake up during a dream.',
    source: 'Judeau',
    citation: 'Berserk',
    year: 2012
  },
  {
    quote: 'Hate is a place, where a man who can’t stand sadness goes.',
    source: 'Godo',
    citation: 'Berserk',
    year: 1997
  },
  {
    quote: 'You’re going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn’t it? I’m sure you’ll overcome this. You’ll walk again… soon.',
    source: 'Guts',
    citation: 'Berserk',
    year: 1997
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
 * `printQuote` function
***/
function printQuote() {
  const quote = getRandomQuote();

  const displayQuote = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;

  if(quote.citation) {
    displayQuote.concat('<span class="citation"> quote citation </span>')
  }

  if(quote.year) {
    displayQuote.concat('<span class="year"> quote year </span>')
  }

  displayQuote.concat('</p>')

  document.getElementById('quote-box').innerHTML = displayQuote; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);