setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;       // gets the second hand moving every 1 second of 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;  //60 minutes to keep the minute hand moving in correspondence with the second hand
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();