'use strict';

alert('WELCOME');


let score = 0;
let userName = prompt('what is your name?');
function question1() {
  

userName = userName.toUpperCase();
console.log(userName);
alert('welcome to my page ' + userName);


let school = prompt('am i ready to be a developer?');
switch (school.toLowerCase()) {
  case 'yes':
  case 'y':
  case 'ys':
    alert('totally');
    score++;
    break;
  case 'no':
  case 'n':
    alert('thnx, will look into that');
    break;

}
}
question1()

let view = prompt('are you a TA?');
function question2() {
  

switch (view.toLowerCase()) {
  case 'yes':
  case 'y':
  case 'ys':
    alert('welcome ');
    score++;
    break;
  case 'no':
  case 'n':
    alert('welcome');
    score++;
    break;

}
}
question2()

let music = prompt('do i like music?');
function question3() {
  

switch (music.toLowerCase()) {
  case 'yes':
  case 'y':
  case 'ys':
    alert('yup and so should you ');
    score++;
    break;
  case 'no':
  case 'n':
    alert('the exact opposite');
    break;

}
}
question3()

let myName = prompt('do you know my nickname?');
function question4() {
  

switch (myName.toLowerCase()) {
  case 'yes':
  case 'y':
  case 'ys':
    score++;
    alert('n!!!ce ');
    break;
  case 'no':
  case 'n':
    alert('ask me');
    console.log(alert + 'myslack');
    break;

}
}
question4()

let travel = prompt('have i travelled before?');
function question5() {
  

switch (travel.toLowerCase()) {
  case 'yes':
  case 'y':
  case 'ys':
    alert('and will always do');
    score++;
    break;
  case 'no':
  case 'n':
    alert('actually did');
    break;

}
}
question5()

function question6() {
  

let userNumber = 10;
let attempts = 5;
let count = 3;
let number = 7;

// the user must pick #7

let picks = prompt(' I am thinking of a Number between 1 & ' + userNumber);
picks = parseInt(picks);
while (picks !== number) {

<<<<<<< HEAD
    if (count > attempts) {
      alert(' the correct answer is ' + number);
      break;
    }else if (picks === number) {
      alert(' Lucky NUM 7! ' + score++);
      break;
    }

    else if (picks > number) {
      alert('too high');
    }

    else if (picks < number) {
      alert('too low');
    }
=======
  let picks = prompt(' pick a number between 1 and ' + userNumber);
  count++;
  picks = parseInt(picks);
  if (count > attempts) {
    alert(' the correct answer is ' + number);
    break;
  }

  if (picks === number) {
    alert(' Lucky NUM 7! ' );
    score++;
    break;
  }

  if (picks > number) {
    alert('too high');
  }

  if (picks < number) {
    alert('too low');
  }
>>>>>>> dd3ae2961e490b558490244b749561d5b0bade14

}
}
question6()



function guesscolor() {
  let colors = [
    ['whats is my FAV color?',
      'red',
      'white',
      'black']
  ];
  for (let i = 0; i < colors.length; i++) {

    let color = colors[i];

    let attempts = 7;

    let c = 0;

    let red = color[1];

    let white = color[2];

    let black = color[3];
    let pick = '';

    while (pick !== colors[i]) {

      let pick = prompt(colors[0]);
      pick = pick.toLowerCase();
      c += 1;

      if (c > attempts) {
        alert('<p>' + ' the correct answers are ' + color[1] + ' ,' + color[2] + ' ,' + color[3] + '</p');
        break;
      }
      if (pick === red) {
        score++;
        alert(' not that much but still will get a point' + ' your score is ' + score);
        break;
      }

      if (pick === white) {
        score++;
        alert(' queen of the colors ' + ' your score is ' + score);
        break;
      }
      if (pick === black) {
        score++;
        alert(' king of the colors ' + ' your score is ' + score);
        break;

      }
      if (pick !== red && pick !== white && pick !== black) {
        alert('wrong answer');
      }
    }

  } 
}

guesscolor();


function result() {
  
alert('your score is' + ' ' + score + '/7');
return(alert);
}
alert('Thnxx 4 taking the time to visit my website ' + userName);
