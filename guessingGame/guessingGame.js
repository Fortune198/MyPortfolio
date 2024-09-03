// var secret = 7;

// while (secret != guess) {
//     var answer = prompt("Please guess the secret number(1 - 10)");
//     // Convert the string guess to an integer so that we can compare
//     var guess = parseInt(answer);
    
//     if (secret === guess) {
//         alert("Correct guess!");
//     } else {
//         alert("Sorry incorrect!");
//     }
// } 

var secret = Math.floor(Math.random() * 10) + 1;
var answer = parseInt(prompt("Please guess the secret number (1-10)"));

while (answer !== secret) {
  if (answer < secret) {
    answer = parseInt(prompt("Incorrect, too low. Please guess again (1-10)"));
  } else {
    answer = parseInt(prompt("Incorrect, too high. Please guess again (1-10)"));
  }
}

alert("Correct!");