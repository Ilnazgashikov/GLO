'use strict';
function guessNumber() {
  let countAttempts = 10;
  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }
  let randNum = getRandomInt();
  alert("В этой игре вам необходимо угадать число в диапозоне от 1 до 100");
  if (confirm("Начать игру?")) {
    gameBody();
  }
  function gameBody() {
    if (countAttempts > 0) {
         let myNumber =+ prompt("Введите ваше число: ");
    if (!isNaN(myNumber) && myNumber <= 100) {
          if (randNum === myNumber) {
         if (confirm("Поздравляю! Вы угадали загадочное число. Хотите попробовать еще?")) {
             countAttempts = 10;
             gameBody();
         }
        }
        else if (randNum > myNumber) {
           countAttempts--;
           alert("Загадочное число больше вашего. У вас осталось " + countAttempts + " попыток. Попробуйте еще раз");
           gameBody();
        }
        else if (randNum < myNumber) {
           countAttempts--;
           alert("Загадочное число меньше вашего. У вас осталось " + countAttempts + " попыток. Попробуйте еще раз");
           gameBody();
        }
      }
      else {
       alert("Введите корректное число");
       gameBody();
      } 
    }
    else {
       if (confirm("Вы проиграли. Попробуйте еще раз?")) {
         guessNumber(); 
       }
       else {
        return null;
       }
    }
   }
}
  guessNumber();