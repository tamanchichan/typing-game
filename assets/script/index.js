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
const box = document.querySelector('.box');
const word = document.querySelector('.word');
const input = document.querySelector('.input');

class Score {
  #date;
  #hits;
  #perc;
  
  constructor(date, hits, perc) {
    this.#date = date;
    this.hits = hits;
    this.#perc = perc;
  };
  
  set date(date) {this.#date = date;};
  set hits(hits) {this.#hits = hits;};
  set perc(perc) {this.#perc = perc};
  
  get date() {return this.#date;};
  get hits() {return this.#hits;};
  get perc() {return this.#perc};
  
  getPercentage() {
    this.#perc = (this.#hits * 100) / 90;
    // words.length will not work properly, since I am removing words
  };
  
  getScore() {
    return `${this.#date} | Hits: ${this.#hits} | ${this.#perc.toFixed(2)}%`;
  };
};

let date = new Date().toDateString().slice(3, 10);
let hits = 0;
let perc;
const player = new Score(date, hits, perc);

function countdownTimer() {
  let countdown = 99;
  let countdownInterval = setInterval(() => {
    countdown--;
    timer.innerText = `Timer: ${countdown} Seconds`;
    
    if(countdown === 0) {
      clearInterval(countdownInterval);
      
      title.style.display = 'block';
      start.style.display = 'block';
      
      box.style.display = 'none';
      word.style.display = 'none';
      input.style.display = 'none';
      
      player.getPercentage();
      player.getScore();
    }
  }, 1000);
}

function randomWord(words) {
  let random = words[Math.floor(Math.random() * words.length)];
  return random
}

start.addEventListener('click', () => {
  title.style.display = 'none';
  start.style.display = 'none';
  
  box.style.display = 'block';
  word.style.display = 'block';
  input.style.display = 'block';
  
  input.focus();
  
  countdownTimer();
  
  let random = randomWord(words);
  
  word.innerText = random;
  input.maxLength = random.length;
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (input.value === word.innerText) {
      let random = randomWord(words);
      
      words.splice(words.indexOf(random), 1);
      
      input.classList.add('right');
      
      setTimeout(() => {
        input.classList.remove('right');
      }, 1000);
      
      word.innerText = random;
      input.maxLength = random.length;
      input.value = '';
       
      player.hits++;
    } else {
      input.classList.add('wrong');
      
      setTimeout(() => {
        input.classList.remove('wrong');
      }, 1000);
    };
  };
});
