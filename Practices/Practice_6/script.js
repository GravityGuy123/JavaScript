// FUNCTIONS

//Types of Functions
// Named Function (Function with a name or a known function)
// Arrow Function
// Anonymous Function (Function without a name or an unknown function)
// Immediately Invoked Function Expression (IIFE) (Function that runs immediately it's written)


// Named Function

// const getRectArea = function (width, height) {
//   return width * height;
// };

// console.log(getRectArea(3, 4));
// // The function declaration method above is not recommended. Use the one below

// function getRectArea2(w, l) {
//     return w * l;
// }

// console.log(getRectArea2(2, 5))

// const getArea = () => {}; // Javascript Arrow function

// const getRectArea3 = (width, height) => {
//   return width * height;
// };
// const Area = (w, b) => w * b;
// console.log(getRectArea3(4, 5));
// console.log(Area(4, 5));

// Ways of declaring a function

// 1.
// const Area = (width, height) => {
//   return width * height;
// };

// 2.
// function Area(w, b) {
//     return w * b;
// }

// 3.
// const Area = (width, height) => {
//     return width * height;
// };

// 4. const Area = (w, b) => w * b;

// nameOfTheFunction();
// functionThatTakesInput("the input", 5, true);

// sayHello();

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("Gravity")); // Hello, Alice!

function name(parameters) {
  // function body
  return value; // optional
}

// function sayHello(greet){
//   return `Hello, ${greet}!`;
// }
// let userName = prompt("Enter your name");
// console.log(sayHello(userName))

// Function Declaration - Hoisted
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("G")); // "Hello, Alice!"

// const getRectArea = function (width, height) {
//   return width * height;
// };

// console.log(getRectArea(3, 4));
// // The function declaration method above is not recommended. Use the one below

// function getRectArea2(w, l) {
//     return w * l;
// }

// console.log(getRectArea2(2, 5))

// function addNumber(l, b) {
//   return l + b;
// }
// let l = Number(prompt("Enter any number"));
// let b = Number(prompt("Enter any number"));
// console.log(`Total: ${addNumber(l, b)}`)

// function addNumber1(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNumber1(2, 5));

// // or

// function addNumber2(num1, num2) {
//   return num1 + num2;
// }
// let result = addNumber2(2, 5);
// console.log(result);

// function addNum(num1, num2) {
//   return num1 + num2
// }

// console.log(addNum(5, 7));

// QUESTION
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random .
// 4. Output into the console the prompt value and the randomly selected array value.
// 5. Invoke the function.

// let properties = ["Wise", "Handsome", "Beautiful", "Hardworking", "Smart", "Stupid",
// ];

// function askName() {
//   let userName = prompt("What is your name");

//   let randomValueIndex = Math.floor(Math.random() * properties.length);
//   let randomValue = properties[randomValueIndex];

//   let outputMessage = `${userName} is ${randomValue}`;
//   console.log(outputMessage);
// }

// askName();

// function tester(para1, para2) {
//   return para1 + " " + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// // tester(arg1, arg2);
// console.log(tester(arg1, arg2));

// function addTwoNumbers(x, y) {
//   x = 3;
//   y = 5;
//   console.log("Total:", x + y);
// }
// addTwoNumbers()

// function addTwoNumbers(num1, num2) {
//   return num1 + num2
// }
// console.log("Value 1", addTwoNumbers(3, 4));
// console.log("Value 2", addTwoNumbers(12, -9));

// 6.3
// Create a basic calculator that takes two numbers and one string value indicating an operation. If the operation equals add, the two numbers should be added. If the operation equals subtract, the two numbers should be subtracted from one another. If there is no option specified, the value of the option should be add . The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly (remember if not presented with a valid operator, the function should default to addition).
// 4. Within console.log() , call the function using your variables and output the response to the console.
// 5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.

// // let num1 = 3;
// // let num2 = 4;

// Using prompt to retrieve userinputed numbers rather than a pre-defined value

// let num1 = Number(prompt("Enter any number"));
// let num2 = Number(prompt("Enter any number"));

// let calcOperator = "+";

// function myCalculator(num1, num2, calcOperator) {
//   // if (calcOperator === "+") {
//   //   return num1 + num2;
//   // } else if (calcOperator === "-") {
//   //   return num1 - num2;
//   // } else {
//   //   return num1 + num2;
//   // }

//   if (calcOperator !== "+" && calcOperator !== "-") {
//     return num1 + num2;
//   } else if (calcOperator === "+") {
//     return num1 + num2;
//   } else if (calcOperator === "-") {
//     return num1 - num2;
//   }
// }
//   console.log("1st result:", myCalculator(num1, num2, calcOperator));

// calcOperator = "-"
// console.log("2nd result:", myCalculator(num1, num2, calcOperator));

// console.log("3rd result:", myCalculator(num1, num2));

// function addTwoNumbers(x = 2, y = 3) {
//   console.log(x + y);
// }
// addTwoNumbers(4, 2, 2, 7);


// Arrow Functions
// // (param1, param2) => body of the function;
// let doingArrowStuff = (x) => console.log(x);
// doingArrowStuff("Great Day!");

// let numAdd = (a, b) => console.log("Added:", a + b);
// numAdd(7, 5);

// let sayHi = (greet) => console.log("Hw u doing");
// sayHi()

// let schoolMaterials = ["Bag", "Shoe", "Pencil", "Eraser", "Book"];
// schoolMaterials.forEach((school => console.log(school)));

// let myColors = ["red", "blue", "green", "white", "orange", "purple", "black"];

// myColors.forEach((color) => console.log(color));

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e)); // In this case and the ones above we only have one parameter "e", so it's optional to surround it with parentheses.

// Spread operator
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerfull"];
// message.forEach((m) => console.log(m));

// let spreadOperator = ["write", "javascript", "everyday"];
// let spreadMessage = [
//   "I",
//   "love",
//   "to",
//   ...spreadOperator,
//   "and",
//   "am",
//   "fluent",
//   "in",
//   "it",
// ];
// spreadMessage.forEach((sm) => console.log(sm));

// let mymessage = ["I", "ate"];
// let outputMessage = [...mymessage, "Noodles", "this morning"];
// outputMessage.forEach((m) => console.log(m));

// let cars = ["Lexus", "Mazda", "Golf", "Benz"];
// // cars.forEach((c) => alert(c))
// let spreadMessage1 = ["I", "love", "my"];
// let spreadMessage2 = [...spreadMessage1, cars[3], "car"];
// spreadMessage2.forEach((sm) => console.log(sm));

// let newMessage = [...spreadMessage1, cars[0], "car"];
// newMessage.forEach((nm) => console.log(nm));

// function addTwoNumbers(w, x, y, z) {
//   console.log(w + x);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//   console.log(x + y + z + a);
// }
// let arr1 = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr1, ...arr2);

// function add4Numbers(x, y, z, a) {
//   console.log(x + y + z + a);
// }
// let num1 = [2, 3];
// let num2 = [7, 3];
// add4Numbers(...num1, ...num2)

// function someFunction(param1, param2) {
//   console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

// let properties = ["Beautiful", "Stupid", "Smart", "Insane", "Creative", "Dumb"];
// properties.forEach(p => console.log(p))

let numberArray = [];

// for (let a = 0; a <= 10; a += 1) {
//   numberArray.push(a);
// }
// // console.log(numberArray)
// numberArray.forEach((n) => console.log(n))

// for (let a = 1; a <= 10; a++) {
//   // function addNum(a = 3, b = 1, c = 6, d = 2, e = 0, f = 3, g = 4, h = 7, i = 5, j = 1)
//   numberArray.push(a);
//   // function addNum(a = 3, b = 1) {
//   //   return a + b;
//   // }
//   console.log("Result:" ,addNum(a))
// }
// function addNum(numberArray) {
//   return numberArray[0] + numberArray[1]
// }
// console.log(addNum(numberArray))
// console.log(numberArray)
// let totalCalc =
// numberArray.forEach((n) => console.log(n));

// Goal is to create a loop that generates a number from 0 to 10 with a function which adds the numbers as they are generated. (when 1 and 2 is generated, it gets added to equal 3 while is then added to the third value generated and so on till we have the total summated value). The total is then outputed to the console. Also show all the values as they are added.

// function addTwoNumbers(a = 0, b = 0) {
//   console.log(a + b)
// }
// addTwoNumbers(a, b);

// let result = addTwoNumbers(4, 5);
// console.log(result);

// 1. Set up an empty array to store the values that will be calculated within the loop.
// 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration. For the first value, multiply the value of the loop count by 5. For the second value, multiply the value of the loop counter by itself.
// 3. Create a function that returns the value of the two parameters passed into the function when it is called. Add the values together, returning the result.
// 4. Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a response variable.
// 5. Still within the loop, push the result values into the array as it iterates through the loop.
// 6. After the loop is complete, output the value of the array into the console.
// 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console.

// let valueArray = [];

// function addValue(sum1, sum2) {
//   return sum1 + sum2;
// }

// for (let a = 0; a < 10; a++) {
//   let value1 = a * 5;
//   let value2 = a * a;
//   let outputResponse = addValue(value1, value2);
//   valueArray.push(outputResponse);
// }
// console.log(valueArray);

// Arrow Functions

// let addTwoNumbers = (c, d) => c + d;
// let result = addTwoNumbers(3, 5);
// console.log(result)

// let sumofNumbers = (e, f) => console.log(e + f);
// sumofNumbers(3, 2);

// let addNumbers = (c, d) => c + d;
// let value1 = Number(prompt("Enter the 1st number"));
// let value2 = Number(prompt("Enter the 1st number"));
// let theResult = addNumbers(value1, value2);
// console.log(`${value1} + ${value2} = ${theResult}`);

// let numberMultiplication = (num1, num2) => num1 * num2;
// console.log(numberMultiplication(3, 5));

// let addTwoNumbers = (x, y) => {
//   console.log("Dividing...");
//   return x / y;
// };
// console.log(addTwoNumbers(25, 5));

// let q = "Hi, am GravityGuy!";
// function doingStuff(q) {
//   console.log(q);
// }
// doingStuff(q);

// function testAvailability(x) {
//   console.log("Available here:", x);
// }
// testAvailability("Hi!");
// console.log("Not available here:", x);

// function testAvailability() {
//   let y = "Local variable!";
//   console.log("Available here:", y);
// }
// testAvailability();
// console.log("Not available here:", y); //The value of y is unavailable here because is a local scope variable and they don't exist outside of the block or functions they are declared in.

// function testAvailability() {
//   let v = "I'll return";
//   console.log("Available here:", v);
//   return v;
// }
// let w = testAvailability();
// console.log("Outside the function:", w);
// console.log("Not available here:", v);

// function introFunction () {
//   let introMessage = "How can we be of assistance";
//   console.log("Hey, there!", introMessage)
// }
// introFunction()

// function doingStuff() {
//   if (true) {
//     var x = "local";
//   }
//   console.log(x);
// }
// doingStuff();

// const num1 = 5;

// function numberFunction() {
//   const num1 = 23;
//   console.log(num1);
// }
// numberFunction();
// console.log(num1);


// Immediately invoked function expression (IIFE)

// Regular IIFE
// (function() {
//   console.log("I'm a regular IIFE");
// })();

// const obj = {
//   name: "Ejidike Simon",
//   state: "Anambra",
//   arrowIIFE: () => {
//     console.log("Arrow IIFE this:", this); // window or undefined in strict mode
//   },
//   regularIIFE: (function () {
//     console.log("Regular IIFE this:", this); // window or undefined
//   })(),
// };
// (() => {
//   console.log(obj)
// })();

// // Arrow IIFE
// (() => {
//   console.log("I'm an arrow function IIFE");
// })();


// (function () {
//   console.log("IIFE!");
// })();

// (function (a, b) {
//   console.log(a + b);
// })
// (1, 4);

// (() => {
//   console.log("run right away");
// })();


// (() => {
//   console.log("Let's go");
// })();


// let numSum = () => {
//   console.log("I love you");
// };
// numSum();

// for (let a = 1; a <= 10; a++) {
//   console.log(a);
// }


// const multiply = function(a, b) {
//   return a * b;
// };
// console.log(multiply(4, 6)); // Output: 24


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

// // or
// // This is an arrow function (Not IIFE) doing the same thing.
// let result3 = (() => {
//   let value = "400";
//   return value;
// });
// console.log("Local Scope 2 is ", result3());
// console.log("Global Scope is ", value);

// // 4.
// let anonymousFunc = function(newVal) {
//   let value = newVal
//   console.log("The Global Scope remains", value);
// }
// anonymousFunc("same");


// Recursive Function (FUnctions that are called from within)

// function getRecursive2(nr) {
//   console.log(nr);
//   getRecursive2(--nr);
// }
// getRecursive2(3); // This would run an infinte loop because we didn't include an off switch or a point where the code is meant to terminate.


// function getRecursive(nr) {
//   console.log(nr);
//   if (nr > 0) {
//     getRecursive(--nr);
//   }
// }
// getRecursive(10);


// function getRecursive3(nr) {
//   console.log(nr);
//   if (nr < 10) {
//     getRecursive3(++nr);
//   }
// }
// getRecursive3(0);


// function numFunc(a){
//   console.log(a);
//   if (a > 10){
//     numFunc(a -= 10)
//   }
// }
// numFunc(50);


// function numFunc2(b){
//   console.log(b);
//   if (b < 20){
//     numFunc2(b += 5)
//   }
// }
// numFunc2(5);



// function num1(c){
//   console.log(c);
//   if (c > 0) {
//     num1(--c)
//   }
// }
// num1(5);


// function num2(d){
//   console.log(d);
//   if (d < 15) {
//     num2(d += 1);
//   }
// }
// num2(11);

// function outerFunction(value) {
//   console.log(value);
//   function addNum(b) {
//     return b * 5
//   }
//   console.log(addNum(3))
// }
// addNum(3);


// function outFunc(o) {
//   console.log("Outer Function")
//   myInnerFunc(o);
//   function myInnerFunc(i) {
//     console.log(i + 5);
//     console.log("Inner Function Asseses Out", o)
//   }
// }
// outFunc(2);



// function namedFunc(){
//   console.log("Welcome Lovelies")
// }
// namedFunc();


// let anonymousFunc2 = () => {
//   console.log("Goodbye");
// }
// anonymousFunc2();


// Using Set Timeout
// setTimeout(() => {}, timeout);
// setTimeout(function() {}, timeout);


// setTimeout(function() {
//   console.log("Goodbye")
// }, 1000);

// setTimeout(() => {
//   console.log("Goodbye")
// }, 1000);

// let anonymousFunc = function () {
//   console.log("Welcome Love");
// };
// anonymousFunc();

// let anonymousFunc2 = function(){
//   console.log("Hi World");
// }
// anonymousFunc2()

// function callBackFunc(executeStuff) {
//   executeStuff();
//   console.log("Inside call Back Function.");
// }

// callBackFunc(anonymousFunc);


// let youGotThis = function () {
//   alert("You're doing really well, keep coding!");
//   // console.log("You're doing really well, keep coding!");
// };
// setTimeout(youGotThis, 1000); // runs the function after 1s
// setInterval(youGotThis, 2000); // Runs the function every 2s


// function recursiveFunc(count) {
//   console.log("Count at", count);
//   if (count < 10) {
//     recursiveFunc(count += 1);
//   } else if (count === 10) {
//     console.log("Count has ended")
//   }
// }
// recursiveFunc(0)


// let val = 10;
// function tester(val) {
//   val += 10;
//   if (val < 100) {
//     return tester(val);
//   }
//   return val;
// }
// tester(val);
// console.log(val);


// let testFunction = (function () {
//   setTimeout("Am GravityGuy, Xup", 1000);
//   console.log("Hello");
// })(); // FInd out why the setTimeout isn't working


(function () {
  console.log("Welcome");
})();

let result = (function () {
  let firstName = "Laurence";
  return firstName;
});

(function (firstName) {
  console.log("My Name is " + firstName);
})("Laurence");





























// Increment Operators are operators used for incrementing or increasing the value of a variable. It is of two types.
// 1. Pre-increment Operator (Increases the value before calling it) i.e ++a
// 2. Post-increment Operator (Increases the value after calling it) i.e a++

// Decrement Operators are operators used for decrementing or decreasing the value of a variable. It is of two types.
// 1. Pre-decrement Operator (Decreases the value before calling it) i.e --a
// 2. Post-decrement Operator (Decreases the value after calling it) i.e a--