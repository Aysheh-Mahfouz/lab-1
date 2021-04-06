'use strict';

alert('WELCOME');



let userName = prompt('what is your name?');
userName = userName.toUpperCase();
console.log(userName);
alert('welcome to my page ' + userName);


let school = prompt('am i ready to be a developer?');
switch (school.toLowerCase()) {
case 'yes':
case 'y':
case 'ys':
  alert('totally');
  break;
case 'no':
case 'n':
  alert('thnx, will look into that');
  break;

}


let view= prompt('are you a TA?');
switch (view.toLowerCase()) {
case 'yes':
case 'y':
case 'ys':
  alert('welcome ');
  break;
case 'no':
case 'n':
  alert('welcome');
  break;

}

let music= prompt('do i like music?');
switch (music.toLowerCase()) {
case 'yes':
case 'y':
case 'ys':
  alert('yup and so should you ');
  break;
case 'no':
case 'n':
  alert('the exact opposite');
  break;

}

let myName= prompt('do you know my nickname?');
switch (myName.toLowerCase()) {
case 'yes':
case 'y':
case 'ys':
  alert('n!!!ce ');
  break;
case 'no':
case 'n':
  alert('ask me');
  console.log(alert + 'myslack');
  break;

}

let travel = prompt('have i travelled before?');
switch (travel.toLowerCase()) {
case 'yes':
case 'y':
case 'ys':
  alert('and will always do');
  break;
case 'no':
case 'n':
  alert('actually did');
  break;

}


alert('Thnxx 4 taking the time to visit my website ' + userName);








