// 6.1
// See if you can write a function for yourself. We want to write a function that adds two numbers.
// 1. Create a function that takes two parameters, adds the parameters together, and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using console.log .
// 4. Create a second call to the function using two more numbers as arguments sent to the function.

// 1.
// function addNumber(num1, num2) {
//   return num1 + num2;
// }

// // 2.
// let val1 = 3;
// let val2 = 7;

// // 3.
// let myResult1 = addNumber(val1, val2);
// // console.log(`myResult1: ${myResult1}`);
// console.log(`Result1:`, myResult1);

// // 4.
// let myResult2 = addNumber(4, 3)
// console.log(`Result2:`, myResult2);

// 6.2
// We are going to create a program that will randomly describe an inputted name.

// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random .
// 4. Output into the console the prompt value and the randomly selected array value.
// 5. Invoke the function.

//1. Create an array of descriptive words
// let description = ["brilliant", "kind", "creative", "funny", "wise", "brave", "gentle", "ambitious", "loyal", "cheerful"];

// let userInput;

// // 2. Create a function
// function describeUser() {
//   userInput = prompt("What is your name?");

//   // 3. Select a random word from the array

//   // let randomValueIndex = Math.floor(Math.random() * 6) + 1;
//   let randomValueIndex = Math.floor(Math.random() * description.length);
//   let randomValue = description[randomValueIndex];

//   // 4. Output the result to the console
//   let outputMessage = `${userInput} is ${randomValue}`;
//   console.log(outputMessage);
// }

// // 5. Invoke the function
// describeUser()

// 6.3
// Create a basic calculator that takes two numbers and one string value indicating an operation. If the operation equals add, the two numbers should be added. If the operation equals subtract, the two numbers should be subtracted from one another. If there is no option specified, the value of the option should be add . The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly (remember if not presented with a valid operator, the function should default to addition).
// 4. Within console.log() , call the function using your variables and output the response to the console.
// 5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.

// 1.
// // let value1 = 5;
// // let value2 = 10;
// let value1 = Number(prompt("Enter any number"));
// let value2 = Number(prompt("Enter any number"));

// // 2.
// let calcOperator = "+";

// // 3.
// function retrieveNumbers(value1, value2, calcOperator) {
//   if (calcOperator === "+") {
//     return value1 + value2;
//   } else if (calcOperator === "-") {
//     return value1 - value2;
//   } else {
//     return value1 + value2;
//   }

// }

// // 4.
// console.log("First Result:", retrieveNumbers(value1, value2, calcOperator));

// // 5.
// calcOperator = "-"
// console.log("2nd Result:", retrieveNumbers(value1, value2, calcOperator));

// // 6. (optional): Test with no operator specified
// console.log("Result 3 (no operator):", retrieveNumbers(value1, value2));

// // OR

// // Step 1: Set up two variables containing number values
// let num1 = 10;
// let num2 = 5;

// // Step 2: Set up a variable to hold an operator, either 'add' or 'subtract'
// let operator = "add";  // You can change this to "subtract" or leave it empty

// // Step 3: Create a function that retrieves two numbers and an operator
// function basicCalculator(a, b, operation) {
//   // Default the operation to "add" if not provided or invalid
//   if (operation !== "add" && operation !== "subtract") {
//     operation = "add";
//   }

//   // Perform calculation based on the operator
//   if (operation === "add") {
//     return a + b;
//   } else if (operation === "subtract") {
//     return a - b;
//   }
// }

// // Step 4: Call the function and output the result
// console.log("Result 1:", basicCalculator(num1, num2, operator));

// // Step 5: Update the operator and call again
// operator = "subtract";
// console.log("Result 2:", basicCalculator(num1, num2, operator));

// // Step 6 (optional): Test with no operator specified
// console.log("Result 3 (no operator):", basicCalculator(num1, num2));

// 6.4
// Modify the calculator that you made in Practice exercise 6.2 to return added values instead of printing them. Then, call the function 10 or more times in a loop, and store the results in an array. Once the loop finishes, output the final array into the console.

// 1. Set up an empty array to store the values that will be calculated within the loop.
// 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration. For the first value, multiply the value of the loop count by 5. For the second value, multiply the value of the loop counter by itself.
// 3. Create a function that returns the value of the two parameters passed into the function when it is called. Add the values together, returning the result.
// 4. Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a response variable.
// 5. Still within the loop, push the result values into the array as it iterates through the loop.
// 6. After the loop is complete, output the value of the array into the console.
// 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console.

// Step 1: Set up an empty array to store results
// let resultArray = [];

// // Step 3: Create a function to add two numbers and return the result
// function addValues(val1, val2) {
//   return val1 + val2;
// }

// // Step 2 & 4 & 5: Loop through 10 times, calculate values, call function, push result
// for (let i = 0; i < 10; i++) {
//   let firstValue = i * 5;       // multiply loop count by 5
//   let secondValue = i * i;      // multiply loop count by itself
//   let response = addValues(firstValue, secondValue); // call the function
//   resultArray.push(response);   // store the result in the array
// }

// // Step 6: Output the array to the console
// console.log(resultArray);

// 6.5
//  se IIFE to create a few immediately invoked functions and observe how the scope is affected.
//  . Create a variable value with let and assign a string value of 1000 to it.
//  . Create an IIFE function and within this function scope assign a new value to a variable of the same name. Within the function, print the local value to the console.
//  . Create an IIFE expression, assigning it to a new result variable, and assign a new value to a variable of the same name within this scope. Return this local value to the result variable and invoke the function. Print the result variable, along with the variable name you've been using: what value does it contain now?
// 4  Lastly, create an anonymous function that has a parameter. Add logic that will assign a passed-in value to the same variable name as the other steps, and print it as part of a string sentence. Invoke the function and pass in your desired value within the rounded brackets.

// // 1.
// let value = "1000";

// // 2.
// (() => {
//   let value = "200";
//   console.log("Local Scope 1 is ", value)
// })();

// // 3.
// let result = (() => {
//   let value = "700";
//   return value
// })();
// console.log("Local Scope 2 is ", result);
// console.log("Global Scope is ", value);

// // or

// let result2 = (function() {
//   let value = "100";
//   return value;
// })();
// console.log("Local Scope 2 is ", result2);
// console.log("Global Scope is ", value);

// // 4.
// let anonymousFunc = function(newVal) {
//   let value = newVal
//   console.log("The Global Scope still is ", value);
// }
// anonymousFunc("1000");

// 6.6
// A common problem that we can solve with recursion is calculating the factorial.
// Quick mathematics refresher about factorials: The factorial of a number is the product of all positive integers bigger than 0, up to the number itself. So for example, the factorial of seven is 7 * 6 * 5 * 4 * 3 * 2 * 1. You can write this as 7!. How are recursive functions going to help us calculate the factorial? We are going to call the function with a lower number until we reach 0. In this exercise, we will use recursion to calculate the factorial result of a numeric value set as the argument of a function.

// 1. Create a function that contains a condition within it checking if the argument value is 0 .
// 2. If the parameter is equal to 0 , it should return the value of 1 . Otherwise, it should return the value of the argument multiplied by the value returned from the function itself, subtracting one from the value of the argument that is provided. This will result in running the block of code until the value reaches 0 .
// 3. Invoke the function, providing an argument of whatever number you want to find the factorial of. The code should run whatever number is passed initially into the function, decreasing all the way to 0 and outputting the results of the calculation to the console. It could also contain a console.log() call to print the current value of the argument in the function as it gets invoked.
// 4. Change and update the number to see how it affects the results.

// // 1.
// // Recursive function to calculate factorial
// function factorialFunc(value) {
//   // Print the current value of each call
//   console.log(value);

//   // 2.
//   if (value === 0) {
//     return 1;
//   } else {
//     return value * factorialFunc(value - 1);
//   }
// }
// // 3.
// // let num = Number(prompt("Enter any number to factor for")); // Used prompt to get and factorize user inputs checking out the factorials of various values.
// let num = 5;
// console.log(`Factorial of ${num} = `, factorialFunc(num));

// 6.7
// Create a countdown loop starting at a dynamic value of 10 .
// 1. Set the start variable at a value of 10 , which will be used as the starting value for the loop.
// 2. Create a function that takes one argument, which is the countdown value.
// 3. Within the function, output the current value of the countdown into the console.
// 4. Add a condition to check if the value is less than 1; if it is, then return the function.
// 5. Add a condition to check if the value of the countdown is not less than 1, then continue to loop by calling the function within itself.
// 6. Make sure you add a decrement operator on the countdown so the preceding condition eventually will be true to end the loop. Every time it loops, the value will decrease until it reaches 0.
// 7. Update and create a second countdown using a condition if the value is greater than 0. If it is, decrease the value of the countdown by 1.
// 8. Use return to return the function, which then invokes it again and again until the condition is no longer true.
// 9. Make sure, when you send the new countdown value as an argument into the function, that there is a way out of the loop by using the return keyword and a condition that continues the loop if met.

// 1.
// let start = 10;

// // 2.
// function countDownLoop(value) {
//   // 3.
//   console.log("Countdown:", value);

//   // 4. Add a condition to stop the loop when value is less than 1
//   if (value < 1) {
//     console.log("Countdown Complete");
//     return; // Step 9: Exit point of recursion (ends the loop)
//     // In JavaScipt "Return;" means Stop here and go back to the previous function call. So this ends the loop.

//     // 5.
//   } else if (!(value < 1)) {

//     // 6.
//     countDownLoop(value - 1);
//   }
// }
// countDownLoop(start);

// 6.8
// 1. Set a variable name and assign a function to it. Create a function expression with one parameter that outputs a provided argument to the console.
// 2. Pass an argument into the function.
// 3. Create the same function as a normal function declaration.

// 1.
// let welcomeMessage = function(g) {
//   console.log(g)
// }

// // 2.
// welcomeMessage("Welcome Boss");

// // 3.
// function myWelcomeMessage(m) {
//   console.log(m)
// }
// myWelcomeMessage("You are welcome Boss");

// CHAPTER PROJECTS

// 1. Create a recursive function
// Create a recursive function that counts up to 10. Invoke the function with different start numbers as the arguments that are passed into the function. The function should run until the value is greater than 10.

// function recursiveFunc(count) {
//   console.log("Count at", count);

//   if (count < 10){
//     recursiveFunc(++count);
//   }
//   else if (count === 10) {
//     console.log("The Count is Complete");
//   }
// }
// recursiveFunc(0);

// 2. Set timeout order
// Use the arrow format to create functions that output the values one and two to the console. Create a third function that outputs the value three to the console, and then invokes the first two functions.

// Create a fourth function that outputs the word four to the console and also use setTimeout() to invoke the first function immediately and then the third function. What does your output look like in the console? Try to get the console to output:

let num1 = () => console.log("One");
let num2 = () => console.log("Two");

let num3 = () => {
  console.log("Three");
  num1();
  num2();
};

let num4 = () => {
  console.log("Four");
  setTimeout(num1, 1000); // Call num1 immediately (asynchronously)
  num3();
}

// Run the main function
num4()