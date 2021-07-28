var millisec = 100
var se = prompt("Enter Seconds")
var mi = prompt("Enter Minutes")
var sec = se
var min = mi
var displaymili = document.getElementById('displaymiliSec')
var displaysec = document.getElementById('displaySec')
var displaymin = document.getElementById('displayMin')

function timer() {
    millisec--
    displaymili.innerHTML = millisec
    if (millisec == 0) {
        sec--
        displaysec.innerHTML = sec
        millisec = 100

        if (sec == 0) {
            min--
            sec = se
            displaymin.innerHTML = min
            if (min == 0) {
                reset()
            }

        }

    }

}



var interval;

function start() {
    interval = setInterval(timer, 10);
    document.getElementById("d").disabled = true;

}
function pause() {
    clearInterval(interval)
    document.getElementById("d").disabled = false;
}
function reset() {
    pause()
    millisec = 0
    sec = 0
    min = 0
    displaymili.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
    document.getElementById("d").disabled = false;
}