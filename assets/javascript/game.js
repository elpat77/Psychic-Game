var wins = 0;
var losses = 0;
var left = 9;

var myLetters = ['p', 'a', 't'];
var guesses = [];

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
function updateLeft() {
    document.querySelector("#left").innerHTML = "Left: " + left;
}
function updateGuessed() {
    document.querySelector("#guessed").innerHTML = "Guessed so Far: " + guesses;
}

updateWins();
updateLosses();
updateLeft();
updateGuessed();

document.onkeyup = function (event) {
    document.querySelector("#selected").textContent = event.key;

    if (event.key === myLetters[0] || event.key === myLetters[1] || event.key === myLetters[2]) {
        wins++;
        updateWins();
        console.log("You got it!");
        console.log(wins);
        console.log(losses);
    } else {
        losses++;
        left--;
        guesses.push(event.key);
        updateLosses();
        updateLeft();
        updateGuessed(); fg
        console.log("Try again!");
        console.log(wins);
        console.log(losses);
        console.log(left);
        console.log(guesses);

    }
}





