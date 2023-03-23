'use strict';

const timer = document.querySelector('.timer');
const start = document.querySelector('.start-button');

start.addEventListener('click', () => {
  let countdown = 99;
  let countdownInterval = setInterval(() => {
    countdown--;
    timer.innerText = `Timer: ${countdown} Seconds`;
    
    if(countdown === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
})