"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var randomNum = Math.floor(Math.random() * 100) + 1;
var counter = 1;
var score = 0;
console.log(randomNum);
while (counter <= 3) {
    var guessNum = (0, readline_sync_1.question)('Nhap so tu 1 ~ 100: ');
    if (guessNum == randomNum) {
        if (counter == 1) {
            score = 100;
        }
        else if (counter == 2) {
            score = 50;
        }
        else {
            score = 30;
        }
        console.log('Chuc mung ban da chien thang! So diem cua ban la: ', score);
        break;
    }
    else if (counter < 3) {
        if (guessNum < randomNum) {
            console.log('So cua ban nho qua');
        }
        else {
            console.log('So cua ban lon qua');
        }
    }
    else if (counter == 3) {
        console.log('GAME OVER');
        console.log('So can phai doan la: ', randomNum);
    }
    counter += 1;
}
