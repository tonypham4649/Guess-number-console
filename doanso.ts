import {question} from 'readline-sync';

var randomNum: number = Math.floor(Math.random() * 100) + 1
var counter: number = 1
var score: number = 0

while (counter <= 3 ) {
    var guessNum: number = question('Nhap so tu 1 ~ 100: ')

    if (guessNum == randomNum) {
        if (counter == 1) {
            score = 100
        } else if (counter == 2) {
            score = 50
        } else {
            score = 30
        }
        console.log('Chuc mung ban da chien thang! So diem cua ban la: ', score)
        break
        
    } else if (counter < 3) {
        if (guessNum < randomNum) {
            console.log('So cua ban nho qua')
        } else {
            console.log('So cua ban lon qua')
        }
        
    } else if (counter == 3){
        console.log('GAME OVER')
        console.log('So can phai doan la: ', randomNum)
    }
    counter += 1
}
