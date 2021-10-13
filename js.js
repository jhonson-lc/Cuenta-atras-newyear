const newDate = '1 January 2022';
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function calcnewDate() {
    const dateYear = new Date(newDate);
    const nowDate = new Date();
    let calcDate = (dateYear - nowDate) / 1000;

    let day = Math.floor(calcDate / 3600 / 24);
    let hour = Math.floor(calcDate / 3600) % 24;
    let minute = Math.floor((calcDate / 60) % 60);
    let second = Math.floor(calcDate) % 60;

    days.innerHTML = formatTime(day);
    hours.innerHTML = formatTime(hour);
    minutes.innerHTML = formatTime(minute);
    seconds.innerHTML = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

calcnewDate();
setInterval(calcnewDate, 1000);