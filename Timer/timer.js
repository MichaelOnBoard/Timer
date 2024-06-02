let interval;

function start() {
    let Input = document.getElementById("duration");
    let durationInSeconds = parseInt(Input.value);
    
    if (isNaN(durationInSeconds) || durationInSeconds <= 0) {
        alert("Please enter a valid duration!");
        return;
    }
    
    Input.disabled = true;
    let timer = durationInSeconds;
    interval = setInterval(function () {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        if (minutes < 10) {
            minutes = "0" + minutes;
        } 
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        

        document.getElementById("time").textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            document.getElementById("time").textContent = "Countdown Finished!";
            
            Input.disabled = false;
        }
    }, 1000);
}

function stop() {
    clearInterval(interval);
    document.getElementById("time").textContent = "Countdown Stopped!";
    let Input = document.getElementById("duration");
    Input.disabled = false;
}
