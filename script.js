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
}

function breatheButtonColorChange() {
    breatheButton.style.backgroundColor = 'rgba(255, 166, 0, 0.758)';
    setTimeout(breatheButtonOriginal, 60000);
    setTimeout(playAudio, 60000);
}

function breatheButtonOriginal() {
    breatheButton.style.backgroundColor = '#659d25e2';
}

function playAudio() {
    document.getElementById("audio").play();
}


let breatheButton = document.querySelector(".breathe-button");
breatheButton.addEventListener('click', countdown);
breatheButton.addEventListener('click', breatheButtonColorChange);
