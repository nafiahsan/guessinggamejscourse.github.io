'use strict';
/*console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = '😎 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.number').textContent = secretNumber
document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        //if guess doesnt have any value
        if (!guess) {
            // document.querySelector('.message').textContent = '⛔ No number'
            displayMessage('⛔ No number')
        }


        // if guess is correct
        else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = 'Correct Guess 🎉🎉🍾'
            displayMessage('Correct Guess 🎉🎉🍾')
            document.querySelector('body').style.backgroundColor = 'tomato';
            document.querySelector('.number').style.width = '40rem'
            document.querySelector('.box1').style.display = 'none'

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore
            }
        }

        // When guess is wrong
        else if (guess !== secretNumber) {
            if (score > 1) {
                // document.querySelector('.message').textContent =
                //     guess > secretNumber ? 'Too High' : 'Too low';
                displayMessage(guess > secretNumber ? '📈Too High' : '📉Too low')
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = 'You lost the game!';
                displayMessage('You lost the game!')
                document.querySelector('.score').textContent = 0
            }
        }
        // if guess is high 
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too High';
                score--
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0
            }

        }

        // if guess is low 
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too Low';
                score--
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0
            }

        }

    })

/*in again everything will be reset basically guess everything will turn back to normal*/

document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        document.querySelector('.score').textContent = score;
        // document.querySelector('.message').textContent = 'Start guessing....'
        displayMessage('Start guessing....')
        document.querySelector('body').style.backgroundColor = '#222';
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.guess').value = "";

    })

/* the question mark box('.number')gonna have the secretnumber which
is gonna generate random numbers and keep it there to hide it
the input field goes with the guess class name gonna take the number
inputed by the user as to match the guess number
check button gonna check if its correct or not
if the guess is lower than the secretnumber than its too low and your
score will be deducted by 1 ;same goes for the guess being too high
*/
// let secretnumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretnumber
// let score = 20;
// document.querySelector('.score').value = score;
// let highscore = 0;
// document.querySelector('.check').addEventListener('click',
//     function () {
//         const guess = Number(document.querySelector('.guess').value)
//         if (!guess) {
//             document.querySelector('.message').textContent = 'OI BEDA VALUE DE'
//             score--
//             document.querySelector('.score').textContent = score;
//         }
//         else if (guess === secretnumber) {
//             document.querySelector('.message').textContent = 'correct'
//             document.querySelector('body').style.backgroundColor = 'green';
//             document.querySelector('.correct').style.backgroundColor = 'blue'
//             document.querySelector('.correct').textContent = 'You have won'

//             if (score > highscore) {
//                 highscore = score
//                 document.querySelector('.highscore').textContent = highscore;
//             }
//         }
//         else if (guess > secretnumber) {
//             document.querySelector('.message').textContent = 'Too high';
//         }
//         else if (guess < secretnumber) {
//             document.querySelector('.message').textContent = 'Too low'
//         }

//         if (score <= 0) {
//             document.querySelector('.message').textContent = 'Here gechish'
//             document.querySelector('.score').textContent = 0;
//         }

//         else if (guess > secretnumber || guess < secretnumber) {
//             score--
//             document.querySelector('.score').textContent = score
//         }
//     })

// document.querySelector('.again').addEventListener('click',
//     function () {
//         score = 20
//         document.querySelector('.score').textContent = score;
//         document.querySelector('.message').textContent = 'Start guessing...';
//         secretnumber = Math.trunc(Math.random() * 20 + 1);
//         document.querySelector('.number').textContent = secretnumber;
//         document.querySelector('body').style.backgroundColor = '#222'
//         document.querySelector('.guess').value = ""
//     })

// const average = [10, 20, 220, 320, 20]
// const storeaverage = [];

// //finding average
// for (let i = 0; i < average.length; i++) {
//     function hmmav(av) {
//         return av / average.length;
//     }
//     storeaverage.push(hmmav(average[i]))
// }
// console.log(storeaverage)

// const arr = [1899, 2007, 2035, 2000, 890]
// const storearr = [];
// function hhe(hmar) {
//     let max = hmar[0];
//     let min = hmar[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (hmar[i] > max) { max = hmar[i] }
//         else if (hmar[i] < min) { min = hmar[i] }
//     }
//     storearr.push(max, min)
// }
// hhe(arr);
// console.log(storearr)
// const x = 8 / 1.25;
// console.log(x)

// const obb = {
//     firstname: 'Nafi',
//     lastname: 'Ahsan',
// }
// console.log(obb["firstname"])
// function fruits(pieces) { return pieces * 4 }
// function calcfruits(haha) {
//     const ss = fruits(haha);
//     return ss
// }
// console.log(calcfruits(100))

// const years = [1990, 2007, 1963];
// let storeyears = [];
// for (let i = 0; i < years.length; i++) {
//     storeyears.push(2100 - years[i])
// }
// console.log(storeyears)


// const bills1 = [199, 200, 700, 310]
// const tips1 = [];
// const totalbills = [];

// for (let i = 0; i < bills1.length; i++) {
//     function calcbill(tip) {
//         if (tip > 100 && tip < 300) {
//             return tip * 10
//         } else if (tip > 300 && tip < 1000) {
//             return tip * 2
//         }
//     }

//     totalbills.push(calcbill(bills1[i]))


// }
// console.log(totalbills)
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//     function calcTip(billvalue) {
//         if (billvalue > 50 && billvalue < 300) {
//             return billvalue * 15 / 100
//         } else { return billvalue * 20 / 100 }
//     }
//     tips.push(calcTip(bills[i]))
//     totals.push(tips[i] + bills[i])
// }
// console.log(bills)
// console.log(tips)
// console.log(totals)

// const shoesizes = [1.5, 7, 9.5, 10, 8.5, 6, 5.5]
// const storesmallandlargestshozesize = [];

// function maxmin(size) {
//     let max = size[0];
//     let min = size[0];
//     for (let i = 0; i < shoesizes.length; i++) {
//         if (size[i] > max) { max = size[i] }
//         else if (size[i] < min) { min = size[i] }
//     }
//     return `${max} ${min}`
// }
// console.log(maxmin(shoesizes));


// const planets = [1000, 22, 33, 74, 38, 90];
// const storeplanets = [];
// function calcplanet(planet) {
//     let max = planet[0];
//     let min = planet[0];
//     for (let i = 0; i < planets.length; i++) {
//         if (planet[i] > max) { max = planet[i] }
//         else if (planet[i] < min) { min = planet[i] }
//     }
//     return `${max + min} ${min}`;
// }
// storeplanets.push(calcplanet(planets))
// console.log(storeplanets)

/*
to convert binary from decimal is by dividing the
decimal with 2
if it has a remainder then it will be 1
if it doesnt have a remainder it will be 0;
it will be divided until it gets to 1

//
first we divide the decimal with 2 and store the remainder in an array;
we repeat this until the number is greater than 0
*/

// let x = [5];
// let h = ''
// let storebinary = [];

// // function converToBinary1(number) {
// //     let num = number;
// //     let binary = num % 2;
// //     for (; num > 1;) {
// //         num = num / 2;
// //         binary = (num % 2) + (binary)
// //     }
// //     console.log(binary)
// // }
// function convertToBinary1(number) {
//     let num = number;
//     let binary = (num % 2).toString();
//     for (; num > 1;) {
//         num = parseInt(num / 2);
//         binary = (num % 2) + (binary);
//     }
//     console.log(binary);
// }

// window.onload = function () {
//     console.log(convertToBinary1(5));
//     console.log(convertToBinary1(8));
// }
// console.log(converToBinary1(5))

// const en = prompt('enter value')
// const dollar = en * 80;
// const convtotaka = dollar / 80

// console.log(dollar);
// console.log(convtotaka)


/*Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
Sub problems:
a program to dipslay the current day and time
which means i need two variables which is gonna input
1)day 2)time
for time i need
1)hour 2)pm or am 3)minute 4) seconds
if there is no AM or Pm then the hour shall not print
*/
// const dayy = prompt('Enter day')
// const hourr = prompt('Enter hour');
// const AorP = prompt('Enter AM or PM')
// const minutee = prompt('Enter minute');
// const secondss = prompt('Enter seconds')
// function today(day, hour, amorpm, minute, seconds) {
//     const storetime = `Time: ${hour}${amorpm}: ${minute} : ${seconds}`
//     return `Today is: ${day}
//     ${storetime}`
// }
// console.log(today(dayy, hourr, AorP, minutee, secondss))


// const secretguessnum = Math.trunc(Math.random() * 2 + 1);
// const guessnum = Number(prompt('Enter number'))
// if (guessnum === secretguessnum) {
//     console.log('it is correct')
// } else { console.log('its wrong boi ') }
// console.log(secretguessnum)

// function huhu(hmm) {
//     return hmm * 3
// }
// function haha(hehe) {
//     hehe = huhu(100)
//     return hehe + 10
// }
// console.log(haha(12))






// function calculate(num) {
//     let str = "0";
//     for (let i = 0; i < num; i++) {
//         if (num % i == 0) {
//             str += ',' + i
//         }
//     }
//     console.log(str)
// }
// calculate(12)
// // const a = 12
// // const b = 122
// // const he = (a + b) / 2;
// // console.log(a + b, he)

// const a = [12, 2200, 122, 129, 32, 348]
// const b = [];
// function ah(h) {
//     let m = h[0];
//     for (let i = o; i < a.length; i++) {

//     }
// }
// const average = [10, 20, 220, 320, 20]
// const storeaverage = [];

// //finding average
// for (let i = 0; i < average.length; i++) {

//     function hmmav(av) {
//         return av
//     }
//     storeaverage.push(hmmav(average[i]) + [i])

// }
// console.log(storeaverage)


// let secretnumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20
// let highscore = 0;
// const displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
// }
// document.querySelector('.number').textContent = secretnumber;
// document.querySelector('.check').addEventListener('click',
//     function () {
//         const guess = Number(document.querySelector('.guess').value)
//         if (guess === secretnumber) {
//             document.querySelector('.message').textContent = 'You are correct';
//             document.querySelector('body').style.backgroundColor = 'salmon'
//             if (score > highscore) {
//                 highscore = score
//                 document.querySelector('.highscore').textContent = score
//             };
//         }
//         else if (!guess) {
//             document.querySelector('.message').textContent = 'OI BEDA VALUE DE';
//             score--
//             document.querySelector('.score').textContent = score
//         }
//         else if (guess > secretnumber) {
//             document.querySelector('.message').textContent = 'Too high'
//             score--
//             document.querySelector('.score').textContent = score;
//             if (score <= 0) {
//                 displayMessage('You have lost the game')
//                 document.querySelector('.score').textContent = 0;
//             }
//         }
//         else if (guess < secretnumber) {
//             displayMessage('Too Low');
//             score--
//             document.querySelector('.score').textContent = score
//             if (score <= 0) {
//                 displayMessage('You have lost the game')
//                 document.querySelector('.score').textContent = 0;
//             }
//         }

//         // else if (guess > secretnumber) {
//         //     document.querySelector('.message').textContent = 'Too high'
//         // }
//         // else if (guess < secretnumber) {
//         //     document.querySelector('.message').textContent = 'Too low'
//         // }
//         // if (score <= 0) {
//         //     document.querySelector('.message').textContent = 'You have Lost'
//         // }

//         // else if (guess > secretnumber || guess < secretnumber) {
//         //     score--
//         //     document.querySelector('.score').textContent = score;

//         // }

//     })


// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     document.querySelector('.score').textContent = score;
//     secretnumber = Math.trunc(Math.random() * 20 + 1)
//     document.querySelector('.number').textContent = secretnumber
//     document.querySelector('.guess').value = null
//     displayMessage('Start Guessing')
//     document.querySelector('body').style.backgroundColor = '#222'
// })
