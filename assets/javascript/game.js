// var score = {
//     wins: '',
//     losses: '',
//     guessesLeft: '9',
//     guessesSoFar: '',
// }

// var score = 0;

// var losses = 0;
// var guessesLeft = 9;
// var guessesSoFar = 0;

var myLetters = ['p', 'a', 't'];

document.onkeyup = function (event) {
    console.log(event.key);
    document.querySelector('#char').textContent = event.key;
    console.log(myLetters)
    if (event.key === myLetters[0] || event.key === myLetters[1] || event.key === myLetters[2]) {
        console.log("You got it!");
    } else {
        console.log("Try again!");
    }
}





