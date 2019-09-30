var wins = 0;
var losses = 0;
var left = 9;

var myLetters = ['p', 'a', 't'];

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
function updateLeft() {
    document.querySelector("#left").innerHTML = "Left: " + left;
}

updateWins();
updateLosses();
updateLeft();

document.onkeyup = function (event) {
    console.log(event.key);
    document.querySelector('#char').textContent = event.key;
    console.log(myLetters)
    if (event.key === myLetters[0] || event.key === myLetters[1] || event.key === myLetters[2]) {
        wins++;
        updateWins();
        console.log("You got it!");
        console.log(wins);
        console.log(losses);
    } else {
        losses++;
        left--;
        updateLosses();
        updateLeft();
        console.log("Try again!");
        console.log(wins);
        console.log(losses);
        console.log(left);

    }
}





