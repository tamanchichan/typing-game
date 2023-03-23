'use strict';

const timer = document.querySelector('.timer');

let countdown = 99;
let countdownInterval = setInterval(() => {
  countdown--;
  timer.innerText = `Timer: ${countdown} Seconds`;
  
  if(countdown === 0) {
    clearInterval(countdownInterval);
  }
}, 1000);