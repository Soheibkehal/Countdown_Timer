const getDate = localStorage.getItem("v1");
const dateVar = getDate; 

const getEvent = localStorage.getItem("getEvent");
const Myevent = getEvent;

const setup_date = dateVar;
const eventEl = document.getElementById('event');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function CountTimer() {
    const expected_date = new Date(setup_date);
    const current_date = new Date();

    const TotalSeconds = (expected_date - current_date) / 1000;

    const days = Math.floor(TotalSeconds / 3600 / 24 );
    const hours = Math.floor(TotalSeconds / 3600) % 24;
    const minutes = Math.floor(TotalSeconds / 60) % 60; 
    const seconds = Math.floor(TotalSeconds)% 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours; 
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    eventEl.innerHTML = Myevent + ":";
    
    
}

CountTimer();

setInterval(CountTimer , 1000);

function formatTime(){
   return time < 10 ? `0${time}` : time;
}