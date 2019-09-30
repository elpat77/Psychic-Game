var wins = 0;
var losses = 0;
var remaining = 9;
var guesses = [];


var myLetters = ['p', 'a', 't'];


function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
function updateRemaining() {
    document.querySelector("#remaining").innerHTML = "Remaining guesses: " + remaining;
}
function updateGuessed() {
    document.querySelector("#guessed").innerHTML = "Guessed so Far: " + guesses;
}

updateWins();
updateLosses();
updateRemaining();
updateGuessed();

document.onkeyup = function (event) {
    document.querySelector("#selected").textContent = event.key;

    if (event.key === myLetters[0] || event.key === myLetters[1] || event.key === myLetters[2]) {
        wins++;
        updateWins();
        alert("You got it!");
        remaining = 9;
        document.querySelector("#remaining").innerHTML = "Remaining guesses: " + remaining;
        guesses = [];
        document.querySelector("#guessed").innerHTML = "Guessed so Far: " + guesses;
        console.log(wins);
        console.log(losses);
    } else {
        remaining--;
        guesses.push(event.key);
        updateRemaining();
        updateGuessed();
        console.log("Try again!");
        console.log(wins);
        console.log(losses);
        console.log(remaining);
        console.log(guesses);
    }

    if (remaining === 0) {
        losses++;
        updateLosses();
        alert("Sorry you lost, try again!")
        remaining = 9;
        document.querySelector("#remaining").innerHTML = "Remaining guesses: " + remaining;
        guesses = [];
        document.querySelector("#guessed").innerHTML = "Guessed so Far: " + guesses;
    }
}





