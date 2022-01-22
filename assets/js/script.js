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

  // turn off q2, turn on q3
  $('.q2button').click(function () {
    $('.question2').addClass('hide');
    $('.question3').removeClass('hide');
  });

  // turn of q3, turn on q4
  $('.q3button').click(function () {
    $('.question3').addClass('hide');
    $('.question4').removeClass('hide');
  });

  // turn off q4, turn on q5
  $('.q4button').click(function () {
    $('.question4').addClass('hide');
    $('.question5').removeClass('hide');
  });

  // turn off q5, turn on done page
  $('.q5button').click(function () {
    $('.question5').addClass('hide');
    $('.done').removeClass('hide');
  });
  // done page/ initial entry
  $('.submit-button').click(function () {
    $('.done').addClass('hide');
    $('.leaderboard').removeClass('hide');
    storeItem();
  });
});

// store score to local storage
function storeItem() {
  let initials = document.getElementById('initials');
  localStorage.setItem('initials', initials.value);
}
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
