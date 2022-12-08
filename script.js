// Breathe Button

let breatheButton = document.querySelector(".breathe-button");

function countdown() {
    let seconds = 60;
    let mins = 1;
    function tick() {
        let counter = document.querySelector(".timer");
        let current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
            breatheButton.classList.add('breathe-button-active');
            breatheButton.classList.remove('breathe-button');
            breatheButton.removeEventListener('click', countdown)
        }
        else if(seconds == 0) {
                counter.innerHTML = "1:00";
                breatheButton.classList.add('breathe-button');
                breatheButton.classList.remove('breathe-button-active');
                breatheButton.addEventListener('click', countdown);
                document.getElementById("audio").play() = '#659d25e2';
            }
    }
    tick();
}
breatheButton.addEventListener('click', countdown);



// Share Button Links

const link = encodeURI(window.location.href);
const title = encodeURIComponent(document.querySelector('title').textContent);

const facebook = document.querySelector('.facebook');
facebook.href = `https://www.facebook.com/share.php?u=${link}`;
const twitter = document.querySelector('.twitter');
twitter.href = `http://www.twitter.com/share?&url=${link}&text=${title}&hashtag=zen`;
const reddit = document.querySelector('.reddit');
reddit.href = `http://www.reddit.com/submit?&url=${link}&title=${title}`;
q
