'use strict';

const words = [
  'dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building',
  'population', 'weather', 'bottle', 'history', 'dream', 'character', 'money',
  'absolute', 'discipline', 'machine', 'accurate', 'connection', 'rainbow',
  'bicycle', 'eclipse', 'calculator', 'trouble', 'watermelon', 'developer',
  'philosophy', 'database', 'periodic', 'capitalism', 'abominable', 'component',
  'future', 'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee',
  'beauty', 'agency', 'chocolate', 'eleven', 'technology', 'alphabet',
  'knowledge', 'magician', 'professor', 'triangle', 'earthquake', 'baseball',
  'beyond', 'evolution', 'banana', 'perfumer', 'computer', 'management',
  'discovery', 'ambition', 'music', 'eagle', 'crown', 'chess', 'laptop',
  'bedroom', 'delivery', 'enemy', 'button', 'superman', 'library', 'unboxing',
  'bookstore', 'language', 'homework', 'fantastic', 'economy', 'interview',
  'awesome', 'challenge', 'science', 'mystery', 'famous', 'league', 'memory',
  'leather', 'planet', 'software', 'update', 'yellow', 'keyboard', 'window'
];

const timer = document.querySelector('.timer');
const title = document.querySelector('.title');
const start = document.querySelector('.button');
const content = document.querySelector('.content');

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

function randomWord(words) {
  console.log(words[Math.floor(Math.random() * words.length)]);
}

start.addEventListener('click', () => {
  title.style.display = 'none';
  start.style.display = 'none';
  countdown();
  randomWord(words);
});