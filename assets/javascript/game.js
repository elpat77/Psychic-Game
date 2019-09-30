var score = 0;
console.log(score);
var losses = 0;
console.log(losses);

//     wins: '',
//     losses: '',
//     guessesLeft: '9',
//     guessesSoFar: '',
// }

// var score = 0;

// var losses = 0;
// var guessesLeft = 9;
// var guessesSoFar = 0;

// wins: function () {
//     alert('Wins: ' + this.wins);
//     this.wins = this.wins + 1;
//     alert('New wins: ' + this.wins);
// }
// };

var myLetters = ['p', 'a', 't'];

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + score;
}
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
updateWins();
updateLosses();

document.onkeyup = function (event) {
    console.log(event.key);
    document.querySelector('#char').textContent = event.key;
    console.log(myLetters)
    if (event.key === myLetters[0] || event.key === myLetters[1] || event.key === myLetters[2]) {
        score++;
        updateWins();
        console.log("You got it!");
        console.log(score);
        console.log(losses);
    } else {
        losses++;
        updateLosses();
        console.log("Try again!");
        console.log(score);
        console.log(losses);

    }
}





