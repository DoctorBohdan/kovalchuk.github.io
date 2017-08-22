(function () {
    let buttonStart = document.getElementById('start'),
        buttonStop = document.getElementById('stop'),
        buttonReset = document.getElementById('reset'),

        blockMinutes = document.getElementsByClassName('minutes')[0],
        blockSeconds = document.getElementsByClassName('seconds')[0],
        blockMiliseconds = document.getElementsByClassName('miliseconds')[0];

    let minutes = 0,
        seconds = 0,
        miliseconds = 0;

    let defaultTimer = {
        minutes : '00',
        seconds : '00',
        miliseconds : '00'
    }

    function timerStart () {
        setInterval(function () {            
            blockMinutes.innerHTML = minutes;
            minutes++;
        }, 60000)

        setInterval(function () {            
            blockSeconds.innerHTML = seconds;
            seconds++;
        }, 1000)

        setInterval(function () {            
            blockMiliseconds.innerHTML = miliseconds;
            miliseconds++;
        }, 1)
    }

    function timerStop () {
        
    }

    function timerReset () {
        blockMinutes.innerHTML(defaultTimer.minutes);
        blockSeconds.innerHTML(defaultTimer.seconds);
        blockMiliseconds.innerHTML(defaultTimer.miliseconds);
    }

    buttonStart.onclick = timerStart();
})()