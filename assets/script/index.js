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

const board = [];

const centerGrid = document.querySelector('.center-grid');
const seconds = document.querySelector('.seconds');
const title = document.querySelector('.title');
const play = document.querySelector('.play-button');
const box = document.querySelector('.box');
const word = document.querySelector('.word');
const input = document.querySelector('.input');
const score = document.querySelector('.score');
const playAgain = document.querySelector('.play-again-button');
const howToPlayMsg = document.querySelector('.how-to-play-msg');
const howToPlayButton = document.querySelector('.how-to-play-button');

const music = new Audio('./assets/audio/background-music.mp3');
music.loop = true;
music.type = 'audio/mp3';

const correctAnswer = new Audio('./assets/audio/correct-answer.wav');
correctAnswer.type = 'audio/wav';

const wrongAnswer = new Audio('./assets/audio/wrong-answer.mp3');
wrongAnswer.type = 'audio/mp3';

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
  set perc(perc) {this.#perc = perc;};
  
  get date() {return this.#date;};
  get hits() {return this.#hits;};
  get perc() {return this.#perc};
  
  getPercentage() {
    this.#perc = (this.#hits * 100) / 90;
  };
  
  getScore() {
    return `${this.#date} | Hits: ${this.#hits} | ${this.#perc.toFixed(2)}%`;
  };
};

let date = new Date().toDateString().slice(4, 10);
let hits = 0;
let perc;

const player = new Score(date, hits, perc);

/*--------------------------------- function ---------------------------------*/

function correct() {
  correctAnswer.play();
    
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
};

function countdownTimer() {
  let countdown = 5;
  let countdownInterval = setInterval(() => {
    countdown--;
    seconds.innerText = countdown;
    
    if(countdown === 0) {
      music.pause();
      
      clearInterval(countdownInterval);
      
      score.style.display = 'block'
      playAgain.style.display = 'block';
      
      box.style.display = 'none';
      word.style.display = 'none';
      input.style.display = 'none';
      
      player.getPercentage();
      score.innerText = player.getScore();
      
      saveScore();
    }
  }, 1000);
};

function playGame() {
  music.play();
  
  centerGrid.style.display = 'none';
  title.style.display = 'none';
  play.style.display = 'none';
  howToPlayButton.style.display = 'none';
  
  box.style.display = 'block';
  word.style.display = 'block';
  input.style.display = 'block';
  
  input.focus();
  
  countdownTimer();
  
  let random = randomWord(words);
  
  words.splice(words.indexOf(random), 1);
  
  word.innerText = random;
  input.maxLength = random.length;
};

function playGameAgain() {
  music.play();
  score.style.display = 'none';
  playAgain.style.display = 'none';
  
  box.style.display = 'block';
  word.style.display = 'block';
  input.style.display = 'block';
  
  player.date = new Date().toDateString().slice(3, 10);
  player.hits = 0;
  player.perc;
  
  score.innerText = '';
  
  input.focus();
  
  countdownTimer();
  
  let random = randomWord(words);
  
  word.innerText = random;
  input.maxLength = random.length;
  input.value = '';
};

function randomWord(words) {
  let random = words[Math.floor(Math.random() * words.length)];
  return random;
};

function wrong() {
  wrongAnswer.play();
    
  input.classList.add('wrong');
  
  setTimeout(() => {
    input.classList.remove('wrong');
  }, 1000);
};

function saveScore() {
  localStorage.setItem('board', JSON.stringify(player.getScore()));
};

/*----------------------------- addEventListener -----------------------------*/

play.addEventListener('click', () => {
  playGame();
});

input.addEventListener('keyup', () => {
  if (input.value === word.innerText) {
    correct();
  }
  if (
    input.value.length === word.innerText.length
    &&
    input.value !== word.innerText
  ) {
    wrong();
  }
});

playAgain.addEventListener('click', () => {
  playGameAgain();
});

howToPlayButton.addEventListener('click', () => {
  howToPlayMsg.classList.toggle('show');
});

console.log(localStorage);