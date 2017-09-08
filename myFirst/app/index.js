// Require moment.js
const moment = require('moment');
// Helper function, to format the time
const secondsToTime = (s) => {
    let momentTime = moment.duration(s, 'seconds');
    let sec = momentTime.seconds() < 10 ? ('0' + momentTime.seconds()) : momentTime.seconds();
    let min = momentTime.minutes() < 10 ? ('0' + momentTime.minutes()) : momentTime.minutes();
    return `${min}:${sec}`;
};
// Initial time, hardcoded
let currentTime = 0;
// Print out the time
timerDiv.innerHTML = secondsToTime(currentTime);
// Execute every second
let timer = setInterval(() => {
    // Remove one second
    currentTime = currentTime + 1;
    // Print out the time
    timerDiv.innerHTML = secondsToTime(currentTime);
    // When reaching 0. Stop.
    if(currentTime <= 0) {
        clearInterval(timer);
    }
}, 1000); // 1 second
