let min = 1;
let max = 5;

let dynamicNumber = Math.floor(Math.random() * (max - min + 1) + min);
let isWrong = true;
let message;

while(isWrong) {
    let userGuess = prompt("Guess a number between 1 - 5 to check with our dynamic number");
    userGuess = Number(userGuess);

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        message = "Pls enter a valid number within the specified range";
    } else {
        if (userGuess < dynamicNumber) {
            message = `Guess: ${userGuess} - Dynamic Number: ${dynamicNumber}. Too Low.`;
        } else if (userGuess > dynamicNumber) {
            message = `Guess: ${userGuess} - Dynamic Number: ${dynamicNumber}. Too High.`;
        } else {
            message = `Guess: ${userGuess} - Dynamic Number: ${dynamicNumber}. Correct.`;
            isWrong = false;
        }
    }
    alert(message);
    console.log(message);
}