let time = document.getElementById("time")
let isTimeRunning = false

let sec = 0;
let min = 0;
let hrs = 0;
let clock;

function startBtn() {
    if (isTimeRunning) {
        return
    }
    isTimeRunning = true
    clock = setInterval(function () {
        sec++;

        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hrs++;
            min = 0;
        }

        let hours;
        let minutes;
        let seconds;

        if (hrs < 10) {
            hours = "0" + hrs
        } else {
            hours = hrs
        }

        if (min < 10) {
            minutes = "0" + min
        } else {
            minutes = min
        }

        if (sec < 10) {
            seconds = "0" + sec
        } else {
            seconds = sec
        }

        time.textContent = (hours + ":" + minutes + ":" + seconds)

    }, 1000)
}

function stopBtn() {
    clearInterval(clock)
    isTimeRunning = false
}

function resetBtn() {
    hrs = 0;
    min = 0;
    sec = 0;
    time.textContent = "00:00:00";
    clearInterval(clock)
    isTimeRunning = false;
}









