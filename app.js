'use strict';
let endDate = new Date("Dec 31, 2018 23:59:59").getTime();
let intervalTime = 1000;

setInterval(() => {
    let countDown = calculateCountdown(endDate);
    document.getElementById('d').innerHTML = countDown.days;
    document.getElementById('h').innerHTML = countDown.hours;
    document.getElementById('m').innerHTML = countDown.minutes;
    document.getElementById('s').innerHTML = countDown.seconds;    
}, intervalTime);

function calculateCountdown(endDate) {
    if (!endDate || !endDate instanceof Date) {
        throw 'endDate is undefinied or is not a date';
    }
    let now = new Date().getTime();
    let diff = endDate - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}
