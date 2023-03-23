'use strict';

const timer = document.querySelector('.timer');
const title = document.querySelector('.title');
const start = document.querySelector('.start-button');

function countdown() {
  let countdown = 99;
  let countdownInterval = setInterval(() => {
    countdown--;
    timer.innerText = `Timer: ${countdown} Seconds`;
    
    if(countdown === 0) {
      clearInterval(countdownInterval);
      title.style.display = 'block';
      start.style.display = 'block';
    }
  }, 1000);
}

start.addEventListener('click', () => {
  title.style.display = 'none';
  start.style.display = 'none';
  countdown();
});