// Logic Statements
// If else statement

// let rain = true;
// if (rain) {console.log("Bring an umbrella");
// } else {console.log("Do not bring an umbrella");
// }
// When the statement is true, the if block runs but when false, the else runs.

// let value = false;
// if (4 === "4") {console.log("Value is equal");
// } else {console.log("Value not equal");
// }

// let friendName = { name: "Kasie", age: 26, state: "Enugu" };
// if (friendName.age < 30) {
//   let message = "Welcome kasie";
//   console.log("Welcome kasie");
//   alert(message);
// } else {
//   let message = "Sorry this page is not for you";
//   console.log("Sorry this page is not for you");
//   alert(message);
// }

// let friendName = prompt("Enter your name");
// let friendAge = prompt("Enter your age");
// // friendAge = Number(friendAge);

// if (friendAge >= 25) {
//   console.log(`Welcome ${friendName}, let's continue where you stopped`);
// } else {console.log(`Sorry ${friendName}, this page is not for you`);}

// Else if Statements (One if statement, multiple else statement and else statement(optional))

// let studentScore = prompt("What is your score");
// score = Number(studentScore); // converts score to integer

// if (studentScore >= 90) {
//   alert("A");
//   console.log("A");
// } else if (studentScore >= 80) {
//   alert("B");
//   console.log("B");
// } else if (studentScore >= 70) {
//   alert("C");
//   console.log("C");
// } else if (studentScore >= 60) {
//   alert("D");
//   console.log("D");
// } else {
//   alert("F");
//   console.log("F");
// }

// let age = prompt("How old are you?");
// age = Number(age);

// age >= 18 ? alert("You are an adult") : alert("You are not an adult");

// "passint" converts to integer while "parseFloat" converts to decimal

// let posts [
//     {
//         authorName: "Gravity",

//     }
// ]

// If and If else Statement
// let rain = true;
// if (rain) {
//   console.log("I will carry an umbrella");
// } else {
//   console.log("Don't carry an umbrella");
// }

// let score = 213;
// if (score >= 150) {
//   console.log("You passed the exam");
// } else {
//   console.log("You failed the exam");
// }

// let studentName = prompt("Enter your name");
// let score2 = prompt("Enter your score");
// if (score2 >= 123) {
//   // console.log("Congratulations, you passed.");
//   alert(`Congratulations ${studentName}, you passed.`);
//   console.log(`Congratulations ${studentName}, you passed.`);
// } else {
//   alert(`You failed ${studentName}, better luck next time.`);
//   console.log(`You failed ${studentName}, better luck next time.`);
// }

// let subjectName = prompt("Enter your name");
// let hoursOfCoding = prompt("Enter minimum daily hours of coding");
// let weeklyHoursOfCoding = hoursOfCoding * 7;
// if (weeklyHoursOfCoding >= 10) {
//   console.log(
//     `Congratulations, ${subjectName}, you have an minimum of ${weeklyHoursOfCoding} weekly hours of coding. Your consistency and hard work is commendable`
//   );
// } else {
//   console.log(
//     `${subjectName}, you have an minimum of ${weeklyHoursOfCoding} weekly hours of coding. Your practice time is very low and needs improvement`
//   );
// }

// let studName = prompt("Enter your name");
// let score = prompt("Enter your score");
// if (score >= 120) {
//   console.log(`Congrats ${studName}, you passed your exam`);
// } else {
//   console.log(`${studName}, you failed your exam, better luck next time`);
// }

// Here is another example. If the age is below 18, log to the console that access is denied, otherwise log to the console that the person is allowed to come in:

// let subjectName = prompt("Enter your name");
// let age = prompt("Enter your age");
// if (age >= 18) {
//   console.log(`Congrats ${subjectName}, you are allowed to come in`);
// } else {console.log(`${subjectName}, your access has been restricted`);
// }

// Practice exercise 4.1
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
//   console.log("Starting time is convenient");
// } else {
//   console.log("Starting time isn't convenient");
// }

// let closingTime = 4;
// if (closingTime <=! 4) {
//   console.log("Closing time is convenient");
// } else {
//   console.log("Closing time isn't convenient");
// }

// Else If
// For example, take this statement, to determine what the ticket price should be. If a person is younger than 3, then access is free, else if a person is older than 3 and younger than 12, then access is 5 dollars, else if a person is older than 12 and younger than 65, then access is 10 dollars, else if a person is 65 or older, then access is 7 dollars:

// let age = prompt("Enter your age");
// age = Number(age);

// if (age < 3) {
//   alert("Access is free");
//   console.log("Ticket is free");
// } else if (age > 3 && age < 12) {
//   console.log("Ticket is 5$");
// } else if (age > 12 && age < 65) {
//   console.log("Ticket is 10$");
// } else if (age >= 65) {
//   console.log("Ticket is 7$");
// }

// if (age < 3) {
//   console.log("Access is free under three.");
// } else if (age < 12) {
//   console.log("With the child discount, the fee is 5 dollars");
// } else if (age < 65) {
//   console.log("A regular ticket costs 10 dollars.");
// } else if (age >= 65) {
//   console.log("A ticket is 7 dollars.");
// }

// Tenary Operators (Tripple value operators)

// 4.3
// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check
// whether their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console

// let access = age < 18 ? "denied" : "allowed";

// entryIsValid
//   ? console.log("You can enter the venue")
//   : console.log("You can't enter the venue"); // Done in class by Amaechi

// let UserAge = prompt("Enter your age");
// let entryIsValid = UserAge > 17
// entryIsValid = Number(entryIsValid)

// entryIsValid
// ? console.log("You can enter the venue")
// : console.log("You can't enter the venue");

// let login = false;
// let outputHolder = "";
// let userOkay = login
// ? (outputHolder = "login") // The value of this block is outputed if the program is true
// : (outputHolder = "logout"); // while the value of this block is outputed if the program is false
// console.log(userOkay);

// let userName = prompt("Enter your name");
// let age = prompt("Enter your age");
// age = Number(age)

// let accessIsValid = age > 17
// ? "Enter"
// : "No Entry"
// console.log(accessIsValid);

// // OR

// let age1 = prompt("Enter your age");
// age1 = Number(age1);

// let accessIsValid1 = age1 > 17 ? "Enter" : "No Entry";
// console.log(accessIsValid1);

// The code below meant to do the same thing will throw an error "Cannot access 'accessIsValid' before initialization" because the code block accessIsValid does not finish runing before it's initialization. Use either of the two methods above.

// let age = prompt("Enter your age");
// age = Number(age)

// let accessIsValid = age > 17
// ? accessIsValid = "Enter"
// : accessIsValid = "No Entry"
// console.log(accessIsValid);  // Don't use this method

// let score = prompt("Enter your score");
// score = Number(score);

// let isPass = score > 59 ? "You passed" : "You failed";
// alert(isPass)

// accessIsValid
//   ? alert(`Welcome ${userName}, Please proceed.`) ||
//     console.log(`Welcome ${userName}, Please proceed.`)
//   : alert(
//       `Sorry ${userName}, you do not meet the age limit to access this page.`
//     ) ||
//     console.log(
//       `Sorry ${userName}, you do not meet the age limit to access this page.`
//     );

// accessIsValid
//   ? console.log(`Welcome ${userName}, Please proceed.`)
//   : console.log(`Sorry ${userName}, you do not meet the age limit to access this page.`);

// SWITCH STATEMENTS
// let score = 70;
// let score = prompt("Enter your score")
// score = Number(score);

// switch (score) {
//   case 70:
//     console.log("A");
//     break;
//   case 60:
//     console.log("B");
//     break;
//   case 50:
//     console.log("C");
//     break;
//   case 40:
//     console.log("D");
//     break;
//   case 30:
//     console.log("F");
//     break;
//   default:
//     console.log("F");
//     break;
// }

// let dayOfTheWeek = prompt("Enter day of the week");

// switch (dayOfTheWeek) {
//   case "Mon":
//     console.log("Today is Monday");
//     break;
//   case "Tues":
//     console.log("Today is Tuesday");
//     break;
//   case "Wed":
//     console.log("Today is Wednesday");
//     break;
//   case "Thurs":
//     console.log("Today is Thursday");
//     break;
//   case "Fri":
//     console.log("Today is Friday");
//     break;
//   case "Sat":
//     console.log("Today is Saturday");
//     break;
//   case "Sun":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("This day is unavailable");
//     break;
// }

// let timeOfTheDay = prompt("Enter time e.g 6:15am");

// switch (timeOfTheDay) {
//   case "6:30am":
//     console.log("Wake up");
//     break;
//   case "7:00am":
//     console.log("Time for breakfast");
//     break;
//   case "8:00am":
//     console.log("Leave for work");
//     break;
//   case "12:00am":
//     console.log("Time for Lunch");
//     break;
//   case "5:30pm":
//     console.log("Time to close");
//     break;
//   case "6:30pm":
//     console.log("Time for Dinner");
//     break;
//     case "8:00pm":
//       console.log("Sleep time")
//       break;
//       default:
//         console.log("Time unavailable")
// }

// let tutorInClass = true;

// if (tutorInClass === true) {
//   console.log("you can come now");
// } else {
//   console.log("wait a beat");
// }

// The code below is used to get the day in long and short. The 1st three lines is for long while the three lines afterwards for short.

// const date = new Date();
// const dayName = date.toLocaleDateString('en-US', {weekday: 'long'});
// console.log(dayName);

// const date = new Date();
// const dayName = date.toLocaleDateString('en-US', {weekday: 'short'});
// console.log(dayName);

// let timeOfDay = prompt("Enter time of the day e.g 6:15am");

// switch (timeOfDay) {
//   case "6:30am":
//     console.log("Time to wake up");
//     break;
//   case "7:00am":
//     console.log("Time for Lunch");
//     break;
//   case "8:00am":
//     console.log("Time to leave for work");
//     break;
//   case "12:00pm":
//     console.log("Time for lunch");
//     break;
//   case "5:30pm":
//     console.log("Time to go home");
//     break;
//   case "6:30pm":
//     console.log("Time for dinner");
//     break;
//   default:
//     console.log("Time of the day unavailable");
//     break;
// }

// // random number between 0 and 1
// let randomNumber = Math.random();
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 20;
// // removes digits past decimal place to provide a whole number
// let RandomNumber = Math.floor(randomNumber);
// console.log(RandomNumber);

// // random number between 0 and 1
// let randomNumber = Math.random();
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * prompt("Enter any number 1 - 20");
// randomNumber = Number(randomNumber)
// // removes digits past decimal place to provide a whole number
// let RandomNumber = Math.floor(randomNumber);
// console.log(RandomNumber);

// In this exercise, we'll create a Magic 8-Ball random answer generator:

// 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.

// let randomNumber = Math.floor(Math.random() * 6);

// let userQuestion = prompt("What is your question for the Magic 8-Ball?");

// let eightBall = "";

// switch (randomNumber) {
//   case 0:
//     eightBall = "Yes – definitely.";
//     break;
//   case 1:
//     eightBall = "It is decidedly so.";
//     break;
//   case 2:
//     eightBall = "Reply hazy, try again.";
//     break;
//   case 3:
//     eightBall = "Cannot predict now.";
//     break;
//   case 4:
//     eightBall = "Don’t count on it.";
//     break;
//   case 5:
//     eightBall = "My sources say no.";
//     break;
// }

// let finalMessage = `You asked: "${userQuestion}"\nMagic 8-Ball says: ${eightBall}`;

// console.log(finalMessage);

// // Step 1: Generate a random number (0 to 5)

// let randomNumber = Math.floor(Math.random() * 6);
// // Math.random() generates a float from 0 (inclusive) to <1 (exclusive).
// // Multiplying by 6 gives us a range of 0 to <6.

// // Math.floor() rounds it down to the nearest whole number — so the final value is from 0 to 5.

// // Step 2: Get input from the user
// // We’ll use prompt() to ask the user to type their question (in a browser environment).

// let userQuestion = prompt("What is your question for the Magic 8-Ball?");

// //prompt() displays a dialog box and returns the user's input as a string.
// // We store that input in the variable userQuestion.

// // Step 3: Create 6 responses using a switch statement
// // We'll define a variable for the response, then use switch to assign a specific answer based on the random number.

// let eightBall = "";

// switch (randomNumber) {
//   case 0:
//     eightBall = "Yes – definitely.";
//     break;
//   case 1:
//     eightBall = "It is decidedly so.";
//     break;
//   case 2:
//     eightBall = "Reply hazy, try again.";
//     break;
//   case 3:
//     eightBall = "Cannot predict now.";
//     break;
//   case 4:
//     eightBall = "Don’t count on it.";
//     break;
//   case 5:
//     eightBall = "My sources say no.";
//     break;
// }

// // switch checks the value of randomNumber and executes the matching case.
// // Each case sets a string response to the variable eightBall.
// // break prevents falling through to the next case.

// // Step 4: Hold the final message in a variable
// // We’ll build the final message for the user by combining the question and the Magic 8-Ball response.

// let finalMessage = `You asked: "${userQuestion}"\nMagic 8-Ball says: ${eightBall}`;

// // Template literals (` `) allow us to embed variables directly in the string using ${}.
// // \n adds a line break between the question and answer.

// // Step 5: Output to the console
// // We’ll display the final result to the console.

// console.log(finalMessage);

// COMBINING CASES
// let grade = prompt("Enter your grade e.g A");
// score = Number(score);

// switch(score) {
//   case "score >= 80":
//     console.log("A");
//     case "score"
// }

// switch (grade) {
//   case "A":
//     console.log("Excellent");
//     break;
//   case "B":
//   case "C":
//     console.log("Nice, you passed, score must between 60% and 79%.");
//     break;
//   case "D":
//   case "E":
//   case "F":
//     console.log("You failed, score must between 59% and lower, better luck next time.");
// }

// let randomNum = Math.floor(Math.random() * 5);
// let userQuestion = prompt("What is your question for the magic globe?");

// let magicGlobe = "";
// switch(randomNum) {
//     case "0":
//     console.log("Reply hazy, ask again");
//     break;
//     case "1":
//         console.log("Definitely");
//     break;
//     case "2":
//         console.log("Don't count on it");
//     break;
//     case "3":
//         console.log("Of course not");
//     break;
//     case "4":
//         console.log("yes");
//     break;
// }

// let finalMessage = `You asked: "${userQuestion}" \nmagicGlobe says "${randomNum}"`;
// console.log(finalMessage)

// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
//   htmlOutput = "Welcome, that is a user";
// } else {
//   htmlOutput = "Denied, not a user ";
// }
// console.log(htmlOutput + ": " + userInput);

// let myTime = 9;
// let output;
// if (myTime >= 8 && myTime < 12) {
//   output = "Wake up, it's morning";
// } else if (myTime >= 12 && myTime < 13) {
//   output = "Go to lunch";
// } else if (myTime >= 13 && myTime <= 16) {
//   output = "Go to work";
// } else if (myTime > 16 && myTime < 20) {
//   let login = false;
//   let outputHolder = "";
//   let userOkay = login ? (outputHolder = "logout") : outputHolde;
//   console.log(userOkay);
//   output = "Dinner time";
// } else if (myTime >= 22) {
//   output = "Time to go to sleep";
// } else {
//   output = "You should be sleeping";
// }
// console.log(output);

// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);
// console.log(a > b && b > a);
// console.log(d > b || b > a);
// console.log(d > b && b > a);
// Logical Operators logs the statements as a boolean

// let val = 100;
// let message = val > 100 ? `${val} was greater than 100` : `${val} was not greater than 100`;
// console.log(message);
// let check = val % 2 ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check); // Remember Modulus (%), divides a value and gives you the remainder


// let rockPaperScissors = ["Rock", "Paper", "Scissors"];

// let playerName = prompt("Enter your Game Name");

// let playerValueNum = Math.floor(Math.random() * 3);
// let computerValueNum = Math.floor(Math.random() * 3);

// let playerValue = rockPaperScissors[playerValueNum];
// let computerValue = rockPaperScissors[computerValueNum];
// console.log(`${playerName}: ${playerValue} \nComputer Choice: ${computerValue}`);

// let responseMessage = `${playerName} chose ${playerValue}, Computer Chose ${computerValue}`;

// if (playerValue === computerValue) {
//   alert(`${responseMessage}, it's a tie`);
//   console.log(`${responseMessage}, it's a tie.`);
// } else if (
//   (playerValue === "Rock" && computerValue === "Scissors") ||
//   (playerValue === "Paper" && computerValue === "Rock") ||
//   (playerValue === "Scissors" && computerValue === "Paper")
// ) {
//   alert(`${responseMessage}, congratulations, ${playerName} wins`);
//   console.log(`${responseMessage}, congratulations, ${playerName} wins.`);
// } else {
//     alert(`${responseMessage}, ${playerName} looses`);
//     console.log(`${responseMessage}, ${playerName} looses.`);
// }
