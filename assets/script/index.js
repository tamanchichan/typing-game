'use strict';

const timer = document.querySelector('.timer');
const start = document.querySelector('.start-button');

function countdown() {
  let countdown = 99;
  let countdownInterval = setInterval(() => {
    countdown--;
    timer.innerText = `Timer: ${countdown} Seconds`;
    
    if(countdown === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

start.addEventListener('click', () => {
  countdown();
});