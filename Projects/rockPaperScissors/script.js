// Rock Paper Scissors game
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
let rockPaperScissors = ["rock", "paper", "scissors"];

// 2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
let playerNumber = Math.floor(Math.random() * 3);
let computerNumber = Math.floor(Math.random() * 3);

let playerValue = rockPaperScissors[playerNumber]
let computerValue = rockPaperScissors[computerNumber]

// 3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
let message;
// `Computer: ${computerValue} - Player: ${randomValue}`;
// console.log(message);

// 4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.

if (computerValue === playerValue) {
    message = `Computer chose ${computerValue} and Player chose ${playerValue}, It's a tie✨.`
} else if ((computerValue === "rock" && playerValue === "scissors") || 
    (computerValue === "paper" && playerValue === "rock") || (computerValue === "scissors" && playerValue === "paper")
) {
    message = `Computer chose ${computerValue} and Player chose ${playerValue}, computer wins😎.`
} else {
    message = `Computer chose ${computerValue} and Player chose ${playerValue}, Player wins🎉.`
}

alert(message);
console.log(message);