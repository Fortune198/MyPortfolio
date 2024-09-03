var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "engineer",
    "colour",
    "beast"
];
var word = pickWord();
var answerArray = setupAnswerArray(word);

var remainingLetters = word.length;
var numberOfGuesses = word.length
while (remainingLetters > 0 && numberOfGuesses >0) {
    // Game code goes here
    // Show the player their progress
    showPlayerProgress();
    alert(answerArray.join(" "));
    // Take input from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing. You have " + numberOfGuesses + " guesses left.").toLowerCase();
    numberOfGuesses--;
    // Update answerArray and remainingLetters for every correct guess
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } {
        // Update the game state with the guess
        var correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;

    }
}
showAnswerAndCongratulatePlayer();

function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}
function showPlayerProgress() {
    alert(answerArray.join(" "));
}

function updateGameState() {
    var correctGuesses = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_") {
                answerArray[j] = guess;
                correctGuesses++;
            } else {
                alert("You have already guessed this letter.");
                guess = " ";
            }
        }
    }
    return correctGuesses;

}
function showAnswerAndCongratulatePlayer() {
    if (remainingLetters == 0) {
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);
    } else {
        alert("Your guesses are finished!");
    }
}