const startPage = document.querySelector('.start-page');
const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');
const question4 = document.querySelector('.question4');
const question5 = document.querySelector('.question5');

// turn off start page
function turnOff() {
  startPage.classList.add('hide');
}

// render question 1 and hide it after interaction
function turnOn1() {
  question1.classList.toggle('hide');
}

function turnOff1() {
  question1.classList.add('hide');
}

// render question 2
function turnOn2() {
  question2.classList.toggle('hide');
}

function turnOff2() {
  question2.classList.add('hide');
}
// render question 3
function turnOn3() {
  question3.classList.toggle('hide');
}

// render question 4

// render question 5

// done page/ initial entry

// high score/ leaderboard page

// timer
let time = 59;
function minTimer() {
  document.getElementById('timer').innerHTML = time;
  time--;
  if (time < 0) {
    alert(`Sorry! You're out of time!`);
  } else {
    setTimeout(minTimer, 1000);
  }
}
