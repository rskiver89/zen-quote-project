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
        }
    }
    tick();
    breatheButton.classList.add('breathe-button-active');
    breatheButton.classList.remove('breathe-button');
    setTimeout(() => {
        breatheButton.classList.add('breathe-button');
    }, 60000);
    setTimeout(() => {
        breatheButton.classList.remove('breathe-button-active');
    }, 60000);
    setTimeout(() => {
        document.getElementById("audio").play() = '#659d25e2';
    }, 60000);
}
breatheButton.addEventListener('click', countdown);
