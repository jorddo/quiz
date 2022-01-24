$(document).ready(function () {
  let score = 0;

  function gradeAnswer(el) {
    if (el.hasClass('correct')) {
      $('.result').html('Correct!');
      score += 5;
    } else {
      $('.result').html('Wrong :(');
    }
  }

  // store score to local storage
  function storeItem() {
    // [{ initials: 'JJ', score: 22 }, { initials: 'JS', score: 24 }]
    // grab current version of local storage
    const storage = JSON.parse(localStorage.getItem('hi-scores'));
    // modify local storage
    if (storage) {
    } else {
      let initials = $('#initials').val();
      let scoreObject = [{ initials, score }];
      localStorage.setItem('hi-scores', JSON.stringify(scoreObject));
    }

    // insert new score, sort by score
    // store only top 5 high scores
    // replace local storage
    // let initials = document.getElementById('initials');
    // localStorage.setItem('initials', initials.value);
  }

  // turning off start page, turning on question 1
  $('.start-button').click(function () {
    $('.start-page').addClass('hide');
    $('.question1').removeClass('hide');
    minTimer();
  });

  // turning off question 1, turning on q2
  $('.q1button').click(function () {
    gradeAnswer($(this));
    $('.question1').addClass('hide');
    $('.question2').removeClass('hide');
    $('.result').toggleClass('hide');
  });

  // turn off q2, turn on q3
  $('.q2button').click(function () {
    gradeAnswer($(this));
    $('.question2').addClass('hide');
    $('.question3').removeClass('hide');
  });

  // turn of q3, turn on q4
  $('.q3button').click(function () {
    gradeAnswer($(this));
    $('.question3').addClass('hide');
    $('.question4').removeClass('hide');
  });

  // turn off q4, turn on q5
  $('.q4button').click(function () {
    gradeAnswer($(this));
    $('.question4').addClass('hide');
    $('.question5').removeClass('hide');
  });

  // turn off q5, turn on done page
  $('.q5button').click(function () {
    gradeAnswer($(this));
    $('.question5').addClass('hide');
    $('.done').removeClass('hide');
    $('.final-score').html(score);
  });

  // done page/ initial entry
  $('.submit-button').click(function () {
    $('.done').addClass('hide');
    $('.leaderboard').removeClass('hide');
    storeItem();
  });

  $('.clear').click(function () {
    localStorage.removeItem('hi-scores');
  });
});

// high score/ leaderboard page
// reset high scores
// localStorage.removeItem()

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
