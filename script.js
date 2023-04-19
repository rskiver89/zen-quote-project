// Breathe Button

const breatheButton = document.querySelector(".breathe-button");
let timerActive = false;
let countdownTimer;

function countdown() {
  let seconds = 60;
  let mins = 1;

  function tick() {
    const counter = document.querySelector(".timer");
    const current_minutes = mins - 1;
    seconds--;
    counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

    if (seconds > 0) {
      countdownTimer = setTimeout(tick, 1000);
      breatheButton.classList.add('breathe-button-active');
      breatheButton.classList.remove('breathe-button');
      timerActive = true;
    } else if (seconds === 0) {
      counter.innerHTML = "1:00";
      breatheButton.classList.add('breathe-button');
      breatheButton.classList.remove('breathe-button-active');
      timerActive = false;
      document.getElementById("audio").play();
    }
  }

  if (!timerActive) {
    tick();
  } else {
    clearTimeout(countdownTimer);
    timerActive = false;
    breatheButton.classList.add('breathe-button');
    breatheButton.classList.remove('breathe-button-active');
  }
}

breatheButton.addEventListener('click', countdown);

// Share Button Links

const link = encodeURI(window.location.href);
const title = encodeURIComponent(document.querySelector('title').textContent);
const facebook = document.querySelector('.facebook');
facebook.href = `https://www.facebook.com/share.php?u=${link}`;
const twitter = document.querySelector('.twitter');
twitter.href = `https://www.twitter.com/share?&url=${link}&text=${title}&hashtag=zen`;
const reddit = document.querySelector('.reddit');
reddit.href = `https://www.reddit.com/submit?&url=${link}&title=${title}`;

// New Quote Button

const quoteText = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteButton = document.querySelector('.new-quote-button');

async function randomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const result = await response.json();
  quoteText.innerText = result.content;
  author.innerText = result.author;
}

quoteButton.addEventListener("click", randomQuote);

// Load a random quote on page load
window.addEventListener("DOMContentLoaded", randomQuote);
