// 4.1
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the
// console, using the following syntax:
// if(myVariable){
// //action
// }
// 4. Add another if statement with an ! in front of the variable to check
// whether the condition is not true, and create a message that will be
// printed to the console in that instance. You should have two if
// statements, one with an ! and the other without. You could also use
// an if and an else statement instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.

// let startingTime = 9;
// if (startingTime <= 9) {
//   console.log("Starting time is convinient");
// } else {
//   console.log("Starting time isn't convinient");
// }

// let closingTime = 4;
// if (closingTime <=! 4) {
//   console.log("Closing time is convinient");
// } else {
//   console.log("Closing time isn't convinient");
// }

// 4.2
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console
// message for the user
// 4. If the input age is equal to or greater than 21, set the message variable
// to confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable
// to confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny
// entry if none are true
// 7. Output the response message variable to the console

// 1.
// let userAge = prompt("Enter your age");

// // 2.
// userAge = Number(userAge);

// // 3.
// let message = "Access granted";

// // 4.
// if (userAge >= 21) {
//   console.log("Entry confirmed and alcohol purchase is allowed");
// }

// // 5.
// else if (userAge >= 19) {
//   console.log("Entry confirmed but alcohol purchase is denied");
// }

// // 6.
// else {
//   console.log("Entry denied");
// }

// 4.3
// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check
// whether their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console

// let entryIsValid = true;

// entryIsValid
//   ? console.log("You can enter the venue")
//   : console.log("You can't enter the venue");

// 4.5
// 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value " My Selection: "
// 4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable strings and the output message string

// 1.
// let prize = prompt("Enter a number between 0 and 10");

// // 2.
// // prize = Number(prize);

// // 3.
// let messsage = "My Selection:";
// let reward = "";

// // 4. & 5.
// switch (prize) {
//   case "0":
//   case "7":
//     reward = "$30";
//     break;
//   case "1":
//   case "9":
//     reward = "$10";
//     break;
//   case "2":
//   case "8":
//     reward = "$20";
//     break;
//   case "3":
//     reward = "$100";
//     break;
//   case "4":
//   case "10":
//     reward = "$15";
//     break;
//   case "5":
//     reward = "$25";
//     break;
//   case "6":
//     reward = "$50";
//     break;
//   default:
//     reward = "Value not found";
// }

// // 6.
// console.log(`${messsage} is ${prize}, so I have been awarded ${reward} `);

// Chapter projects

// 1. Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user.

// let userInput = prompt("Enter any number to match with a dynamic number");
// userInput = Number(userInput);
// let dynamicNumber = Math.floor(Math.random() * 21);

// if (isNaN(userInput)) {
//   alert("⚠️ value is not a number");
// } else if (userInput === dynamicNumber) {
//   alert(`🎉Congratulations, you guessed correctly.`);
// } else if (userInput < dynamicNumber) {
//   alert(`😥Too low, you guessed wrongly. The number is ${dynamicNumber}.`);
// } else if (userInput > dynamicNumber) {
//   alert(`😥Too high, you guessed wrongly. The number is ${dynamicNumber}.`);
// }

// 2. Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements. You can add a default response that you don't know the person if it's an unknown name. Output the result into the console.

// let userName = prompt("Enter a name");

// switch (userName) {
//   case "Clara":
//   case "Chinecherem":
//   case "Chiagozie":
//   case "Precious":
//   case "Chukwudike":
//   case "Obina":
//   case "Chidera":
//   case "Christopher":
//   case "Michael":
//   case "Chinedu":
//   case "Victoria":
//   case "Chioma":
//   case "Ann":
//   case "Chikasiemobi":
//   case "Tobenna":
//   case "Somto":
//     console.log(`😊Yes," ${userName}" is my friend`);
//     break;
//   default:
//     console.log(`😒No," ${userName}" is not my friend`);
// }

// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random selection of either Rock, Paper, or Scissors (alternatively, you could create a version using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. You can use JavaScript to create your own version of this game, applying the logic with an if statement. Since this project is a little more difficult, here are some suggested steps:

// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the computer selection and the result of the game.

// 1.
let rockPaperScissors = ["Rock", "Paper", "Scissors"];

// 2.
let playerValueNumber = Math.floor(Math.random() * 3);
let computerValueNumber = Math.floor(Math.random() * 3);

// Store the choices for both player and computer.
// We use the index to get the actual value from the rockPaperScissors array.
let playerValue = rockPaperScissors[playerValueNumber];
let computerValue = rockPaperScissors[computerValueNumber];

// 3.
let responseMessage = `Player Choice: ${playerValue}, Computer Choice: ${computerValue}`;

// 4.
if (playerValue === computerValue) {
  alert(`${responseMessage}, 🥰It's a tie`);
  console.log(`${responseMessage}, 🥰It's a tie`);
} else if (
  (playerValue === "Rock" && computerValue === "Scissors") ||
  (playerValue === "Paper" && computerValue === "Rock") ||
  (playerValue === "Scissors" && computerValue === "Paper")
) {
  alert(`${responseMessage}, 🎉Player wins`);
  console.log(`${responseMessage}, 🎉Player wins`);
} else {
  alert(`${responseMessage}, 😓Player looses`);
  console.log(`${responseMessage}, 😓Player looses`);
}
