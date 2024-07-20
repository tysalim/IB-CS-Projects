const prompt = require("prompt-sync")({sigint:true});

let GUESSES = [];

function getRandom(max) {
    num = Math.floor(Math.random() * (max - 1)) + 1;
    return num;
}

function checkGuess(guess, answer) {
    while (true) {
        if (guess === answer) {
            console.log("You got it!");
            break;
        }
        else if (GUESSES.includes(guess)) {
            console.log("You already guessed that!");
        }
        else if (guess > answer) {
            console.log("Lower!");
        }
        else {
            console.log("Higher!");
        }
    }
}


console.log("Guess Two Numbers!");
do {
    max = prompt("Input a maximum number here: ");
    max = Number(max);
}
while (isNaN(max))
randomNum = getRandom(max);
console.log("Random number generated.");
do {
    guess = prompt("Input your guess here: ");
    guess = Number(guess);
}
while (isNaN(guess))
checkGuess(guess);