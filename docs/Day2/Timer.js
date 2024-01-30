
var time = 0;
var intervalId;

function updateTime() {
    var timerElement = document.getElementById('timer');
    var hours = Math.floor(time / 3600).toString().padStart(2, '0');
    var minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    var seconds = (time % 60).toString().padStart(2, '0');
    timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('start').addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        time++;
        updateTime();
    }, 1000);
});

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(intervalId);
});

document.getElementById('reset').addEventListener('click', function () {
    time = 0;
    updateTime();
});

document.getElementById('theme-toggle').addEventListener('change', function () {
    document.body.classList.toggle('black-and-white');
});

updateTime();
