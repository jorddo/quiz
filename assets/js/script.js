const question1 = document.querySelector('.question1');
const startPage = document.querySelector('.start-page');

// toggle question 1 "on"
function turnOn1() {
  question1.classList.toggle('hide');
}

// toggle start page "off"
function turnOff1() {
  startPage.classList.add('hide');
}

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
