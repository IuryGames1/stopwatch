const timeText = document.querySelector(".time"),
hourText = timeText.querySelector(".hour"),
minText = timeText.querySelector(".min"),
secText = timeText.querySelector(".sec"),
pauseButton = document.querySelector(".btn.pause"),
playStopButton = document.querySelector(".play-stop"),
resetButton = document.querySelector(".btn.reset")

let sec = 0, min = 0, hour = 0, isRunning = false, timer, counter;

function startStopTimer(){

    isRunning = true

    counter = setInterval(() => {
            sec++
            if(sec == 60) {
                sec = 0
                min++
                let minute = min <= 9 ? "0" + min : min
                minText.innerHTML = minute
                } 
            if(min == 60) {
                min = 0
                hour++
                let hora = hour <= 9 ? "0" + hour : hour
                hourText.innerHTML = hora
            }

            sec = sec <= 9 ? "0" + sec : sec

            timer = `${hour}:${min}:${sec}`
            
            
            secText.innerHTML = sec

            if(isRunning == false) {
                clearInterval(counter)
            }
        }, 1000);
    
}

function pauseTimer() {
    isRunning = false
}

function resetTimer(){
    clearInterval(counter)
    sec = 0;
    min = 0;
    hour = 0;
    hourText.innerHTML = "0" + hour
    minText.innerHTML = "0" + min
    secText.innerHTML = "0" + sec
}

resetButton.addEventListener("click", resetTimer)
pauseButton.addEventListener("click", pauseTimer)
playStopButton.addEventListener("click", startStopTimer)

