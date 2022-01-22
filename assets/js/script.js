$(document).ready(function () {
  // turning off start page, turning on question 1
  $('.start-button').click(function () {
    $('.start-page').addClass('hide');
    $('.question1').removeClass('hide');
    minTimer();
  });

  // turning off question 1, turning on q2
  $('.q1button').click(function () {
    $('.question1').addClass('hide');
    $('.question2').removeClass('hide');
  });
});

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

function turnOff3() {
  question3.classList.add('hide');
}

// render question 4
function turnOn4() {
  question4.classList.toggle('hide');
}

function turnOff4() {
  question4.classList.add('hide');
}

// render question 5
function turnOn5() {
  question5.classList.toggle('hide');
}

function turnOff5() {
  question5.classList.add('hide');
}

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
