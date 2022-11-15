function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;
    function tick() {
        let counter = document.querySelector(".timer");
        let current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);
            }
        }
    }
    tick();
}

let breatheButton = document.getElementById("breathe-button");
breatheButton.addEventListener('click', () => breatheButton.style.backgroundColor='rgba(255, 166, 0, 0.758)')
