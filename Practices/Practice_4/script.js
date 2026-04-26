// // Practice exercise 4.2
// // 1. Create a prompt to ask the user's age
// let userAge = prompt("How old are you?");

// // 2. Convert the response from the prompt to a number
// userAge = Number(userAge);

// // 3. Declare a message variable that you will use to hold the console message for the user
// let message;

// // 4. If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
// if (userAge >= 21) {
//     message = "Entry Confirmed and you can purchase alcohol";
//     alert(message);
// } 

// // 5. If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol
// else if (userAge >= 19) {
//     message = "Entry Confirmed and alcohol purchase denied";
//     alert(message);
// }

// // 6. Provide a default else statement to set the message variable to deny entry if none are true
// else {
//     message = "Entry Denied";
//     alert(message);
// }

// // 7. Output the response message variable to the console
// console.log(message);


// // Ternary Operator
// let age = prompt("How old are you?");
// age = Number(age);

// let access = age >= 18 ? true : false

// if (access === true) {
//     console.log("Entry Granted")
//     alert("Entry Granted")
// } else {
//     console.log("Entry Denied")
//     alert("Entry Denied")
// }


// // Practice exercise 4.3
// // 1. Create a Boolean value for an ID variable
// let id = prompt("Enter your ID Number");
// id = Number(id);

// // 2. Using a ternary operator, create a message variable that will check whether their ID is valid and either allow
// let access = id >= 18 && id <= 40 ? console.log("Enter") : console.log("Not Allowed")


// // Switch Statement
// let timeOfDay = prompt("What time of day is it, morning / afternoon / evening / night?");
// timeOfDay = timeOfDay.toLowerCase();

// switch(timeOfDay) {
//     case "morning":
//         console.log("Wake Up");
//         alert("Wake Up");
//         break;

//     case "afternoon":
//         console.log("Eat Lunch");
//         alert("Eat Lunch");
//         break;

//     case "evening":
//         console.log("Eat Dinner");
//         alert("Eat Dinner");
//         break;
    
//     case "night":
//         console.log("Sleep");
//         alert("Sleep");
//         break;

//     default:
//         console.log("Entry not found");
//         alert("Entry not found");
//         break;
// }


// Practice exercise 4.4
// As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number between 0 and 9:
// random number between 0 and 1
// let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber);

// // In this exercise, we'll create a Magic 8-Ball random answer generator:
// // 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
// let randomNumber = Math.floor(Math.random() * 6);
// randomNumber = String(randomNumber);
// console.log(randomNumber);

// // 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// let userInput = prompt("Ask any question");

// let message;

// // 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// switch(randomNumber) {
//     case "0":
//         message = `You asked "${userInput}", abundant blessing are on the way.`;
        
//         console.log(message);
//         alert(message);
//         break;
        
//     case "1":
//         message = `You asked "${userInput}", infinite wealth calls you.`;

//         console.log(message);
//         alert(message);
//         break;
        
//     case "2":
//         message = `You asked "${userInput}", immortality and power is within your reach.`;
        
//         console.log(message);
//         alert(message);
//         break;
        
//     case "3":
//         message = `You asked "${userInput}", forsight and super accurate intuition shall you recieve.`;

//         console.log(message);
//         alert(message);
//         break;
        
//     case "4":
//         message = `You asked "${userInput}", great favor and uncommon opportunities will locate you.`;
        
//         console.log(message);
//         alert(message);
//         break;
        
//     case "5":
//         message = `You asked "${userInput}", deep peace and lasting joy shall fill your life.`;
        
//         console.log(message);
//         alert(message);
//         break;
    
//     default:
//         message = "Invalid Entry.";
//         console.log(message);
//         alert(message);
//         break
// }

// // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// // 5. Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.



// // Combinning Cases
// let userGrade = prompt("What is your grade? A / B / C / D / E / F");
// userGrade = userGrade.toUpperCase().trim();

// switch (userGrade) {
//     case "F":
//     case "E":
//     case "D":
//         console.log("You've failed");
//         alert("You've failed");
//         break;

//     case "C":
//     case "B":
//         console.log("You've passed");
//         alert("You've passed");
//         break;

//     case "A":
//         console.log("Excellent result");
//         alert("Excellent result");
//         break;
        
//     default:
//         console.log("Invalid Grade Entered");
//         alert("Invalid Grade Entered");
//         break;
// }



// // Evaluating a Numbers Game
// let userNumber = prompt("Enter any number of choice"); 
// userNumber = Number(userNumber);

// const randomNumber = Math.floor(Math.random() * 101);

// if (!userNumber) {
//     alert("Value cannot be empty.");
//     console.log("No value entered")
// } else if (isNaN(userNumber) ) {
//     alert("Pls enter a valid number.");
//     console.log("You entered,", userNumber)
// } else {
//     if (userNumber < randomNumber) {
//         alert(`Your number is ${userNumber}, is less than our dynamic number ${randomNumber}`)
//         console.log(`Your number is ${userNumber}, is less than our dynamic number ${randomNumber}`)
//     } else if (userNumber > randomNumber) {
//         alert(`Your number is ${userNumber}, is greater than our dynamic number ${randomNumber}`)
//         console.log(`Your number is ${userNumber}, is greater than our dynamic number ${randomNumber}`)
//     } else {
//         alert(`Your number is ${userNumber}, is equal to our dynamic number ${randomNumber}`)
//         console.log(`Your number is ${userNumber}, is equal to our dynamic number ${randomNumber}`)
//     }
// }


// // FRIEND CHECKER GAME
// let userName = prompt("Pls enter your name for a friend check");
// userName = userName.toLowerCase().trim();

// switch(userName) {
//     case "mike":
//     case "clara":
//     case "neche":
//     case "mirabel":
//     case "chukwudike":
//     case "emma":
//     case "ken":
//         alert(`${userName} is a friend's name`);
//         console.log(`${userName} is a friend's name`);
//         break;
//     default:
//         alert(`${userName} is not a friend's name`);
//         console.log(`${userName} is not a friend's name`);
// }



// // Rock Paper Scissors game
// // 1. Create an array that contains the variables Rock, Paper, and Scissors.
// let rockPaperScissors = ["rock", "paper", "scissors"];

// // 2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
// let playerNumber = Math.floor(Math.random() * 3);
// let computerNumber = Math.floor(Math.random() * 3);

// let playerValue = rockPaperScissors[playerNumber]
// let computerValue = rockPaperScissors[computerNumber]

// // 3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
// let message;
// // `Computer: ${computerValue} - Player: ${randomValue}`;
// // console.log(message);

// // 4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.

// if (computerValue === playerValue) {
//     message = `Computer chose ${computerValue} and Player chose ${playerValue}, It's a tie✨.`
// } else if ((computerValue === "rock" && playerValue === "scissors") || 
//     (computerValue === "paper" && playerValue === "rock") || (computerValue === "scissors" && playerValue === "paper")
// ) {
//     message = `Computer chose ${computerValue} and Player chose ${playerValue}, computer wins😎.`
// } else {
//     message = `Computer chose ${computerValue} and Player chose ${playerValue}, Player wins🎉.`
// }

// alert(message);
// console.log(message);

// // 5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
// // 6. Add a new output message that shows the player selection versus the computer selection and the result of the game.


