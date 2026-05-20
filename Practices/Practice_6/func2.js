// Functions

//Types of Functions
// Named Function (Function with a name or a known function)
// Arrow Function
// Anonymous Function (Function without a name or an unknown function)
// Immediately Invoked Function Expression (IIFE) (Function that runs immediately it's written)

// // Named Functions
// function sayHello() {
//     let you = prompt("What is your name?");
//     console.log(`Hello ${you}!`)
//     // console.log("Hello", you + "!")
// }

// sayHello()


// function addTwoNumbers(a, b) {
//     let sum = a + b;
//     console.log(`The sum of ${a} and ${b} = ${sum}`);
//     // console.log(a, "+", b, "=", sum);
//     // return a + b
// };

// let num1 = prompt("Enter first number to add");
// let num2 = prompt("Enter 2nd number to add");
// num1  = Number(num1);
// num2  = Number(num2);


// addTwoNumbers(num1, num2);


// // 1.
// const descriptiveWords = [
//     "beautiful", "bright", "dark", "elegant", "rough", "smooth", "ancient", "modern", "quiet", "loud", "fast", "slow", "soft", "hard", "warm", "cold", "sharp", "blunt", "vivid", "dull", "strong", "weak", "clean", "dirty", "simple", "complex", "calm", "wild", "fresh", "stale"
// ];

// let randomWordsIndex = Math.floor(Math.random() * descriptiveWords.length);
// let randomWords = descriptiveWords[randomWordsIndex];

// // 2.
// function randomDesciber() {
//     // let user = prompt("What is your name");
//     // console.log(`${user} is ${randomWords}`);
//     console.log(`Gravity is ${randomWords}`);
// }

// // 5.
// randomDesciber()


// descriptiveWords.forEach((word, index) => {
//     // console.log(index, word);
//     console.log(`The word at index ${index} is ${word}`);
// });


// function calculate(a, b, operator) {
//     let result;

//     if (operator === "+") {
//         result = a + b;
//     } else if (operator === "-") {
//         result = a - b;
//     } else if (operator === "*") {
//         result = a * b;
//     } else if (operator === "/") {
//         result = a / b;
//     } else {
//         console.log("Invalid operator");
//         return;
//     }

//     console.log(`${a} ${operator} ${b} = ${result}`);
// }

// let notCalculated = true;

// while (notCalculated) {
//     let operator = prompt(
//         "Choose an operation: +, -, *, / (or type 'exit' to stop)"
//     );

//     if (operator === "exit") {
//         notCalculated = false;
//         break;
//     }

//     let num1 = Number(prompt("Enter 1st number"));
//     let num2 = Number(prompt("Enter 2nd number"));

//     calculate(num1, num2, operator);
// }



// function calculate(a, b, operator) {
//     if (operator === "+") {
//         return `${a} + ${b} = ${a + b}`;
//     } else if (operator === "-") {
//         return `${a} - ${b} = ${a - b}`;
//     } else if (operator === "*") {
//         return `${a} * ${b} = ${a * b}`;
//     } else if (operator === "/") {
//         return `${a} / ${b} = ${a / b}`;
//     } else {
//         alert("Invalid Operator")
//     }
// }

// let calculationNotDone = true;

// while (calculationNotDone) {
//     let calcSign = prompt(
//         "Choose an operation: +, -, *, / (or type 'exit' / 'e' to stop)"
//     );
//     let nomalizedSign = calcSign.toLowerCase().trim();

//     if (nomalizedSign === "exit" || nomalizedSign === "e") {
//         calculationNotDone = false;
//         break;
//     }
    
//     let sign;
    
//     const operations = {
//         "+": "Adding",
//         "-": "Subtracting",
//         "*": "Multiplying",
//         "/": "Dividing"
//     };

//     sign = operations[calcSign] || "Invalid Sign";
    
//     // calcSign === "+"
//     //     ? sign = "Adding"
//     //     : calcSign === "-"
//     //         ? sign = "Subtracting"
//     //         : calcSign === "*"
//     //             ? sign = "Multiplying"
//     //             : calcSign === "/"
//     //                 ? sign = "Dividing"
//     //                 : sign = "Invalid Sign"

//     let num1 = prompt(`${sign}: Enter the 1st number`);
//     let num2 = prompt(`${sign}: Enter the 2nd number`);
//     num1 = Number(num1);
//     num2 = Number(num2);
    
//     let calc = calculate(num1, num2, calcSign);
//     console.log(calc);
//     alert(calc);
// }



// function addNumber(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     console.log(total);
// }

// addNumber(3, 6); // 9
// addNumber(1, 2, 3, 4); // 10
// addNumber(5, 10, 15, 20, 25); // 75



// function addNumber(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     console.log("Numbers List: ", numbers);
//     console.log(`${numbers.join(" + ")} = ${total}`);   
// }

// // addNumber(3, 6); // 9
// // addNumber(1, 2, 3, 4); // 10
// addNumber(5, 10, 15, 20, 25); // 75


// // RANDOMLY LOOP THROUGH A LIST OF STUDENTS
// let students = ["Gravity", "Victoria", "Mega-Pips", "Edukay", "Ifenna", "Chioma", "Chisom Deborah", "Divine", "Ashioma", "Chisom Male"];
// let postions = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];

// let randomizedStudents = [];
// let isRandomizing = true;

// while (isRandomizing) {
//     let randomStudentIndex = Math.floor(Math.random() * students.length);
//     let randomStudents = students[randomStudentIndex];

//     if (!(randomizedStudents.includes(randomStudents))) {
//         randomizedStudents.push(randomStudents);
//     }

//     if (randomizedStudents.length === students.length) {
//         isRandomizing = false;
//         break;
//     };
// };

// console.log("Randomized Students:", randomizedStudents);

// for (let s = 0; s < randomizedStudents.length; s++) {
//     console.log(`${postions[s]}: ${randomizedStudents[s]}`);
// }


// console.log("\n");
// console.log("Decending ...");
// for (let z = students.length - 1; z >= 0; z--) {
//     console.log(students[z]);
// }


// // ARROR FUNCTIONS
// (a, b) => console.log(a + b);


// let spreadOperator = ["write", "JavaScript", "everyday"];
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

// console.log(spreadMessage);

// let message = spreadMessage.join(" ");
// console.log(`${message}.`);


// let numberArray = [];

// for (let a = 0; a <= 10; a += 1) {
//   numberArray.push(a);
// //   console.log(a)
// }

// console.log(numberArray)
// numberArray.forEach((n) => console.log(n))

// let properties = ["Beautiful", "Stupid", "Smart", "Insane", "Creative", "Dumb"];
// let newProperties = [];
// // // properties.forEach(p => console.log(`I am ${p}`));
// properties.forEach(p => newProperties.push(`Just ${p}`));

// for (let p = 0; p < properties.length; p++) {
//     // console.log(`He is ${properties[p]}`);
//     // newProperties.push(`Totally ${properties[p]}`);
// }

// console.log("New Properties:", newProperties);

// let doingStuffs = (name, activity) => console.log(`My name is ${name} and am ${activity}`);

// let user = prompt("What is your name?");
// let userActivity = prompt("What are you doing now?");
// doingStuffs(user,userActivity);

// let students = ["Gravity", "Victoria", "Philip", "Chinedu", "Chisom Deborah", "Chioma", "Ifenna", "Divine", "Chisom Male", "Ashioma"];
// let postions = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];

// let randomizedStudents = [];
// let isRunning = true;

// while (isRunning) {
//     let randomIndex = Math.floor(Math.random() * students.length);
//     let randomStudents = students[randomIndex];

//     if (!(randomizedStudents.includes(randomStudents))) {
//         randomizedStudents.push(randomStudents);
//     };

//     if (randomizedStudents.length === students.length) {
//         isRunning = false;
//         break;
//     }
// };

// for (let i = 0; i < students.length; i++) {
//     console.log(`${postions[i]}: ${randomizedStudents[i]}`)
// };


let position = {};

// for (let p = 1; p <= 10; p++) {
//     if (p < 2) {
//         position[`${p}st`] = p;
//     } else if (p === 2) {
//         position[`${p}nd`] = p;
//     } else if (p < 4) {
//         position[`${p}rd`] = p;
//     } else {
//         position[`${p}th`] = p;
//     }
// };

// for (let p = 1; p <= 10; p++) {
//     if (p < 2) {
//         position[`${p}st`] = p;
//     } else if (p === 2) {
//         position[`${p}nd`] = p;
//     } else if (p < 4) {
//         position[`${p}rd`] = p;
//     } else {
//         position[`${p}th`] = p;
//     }
// };

// console.log(position);

// let students = ["Gravity", "Victoria", "Philip", "Chinedu", "Chisom Deborah", "Chioma", "Ifenna", "Divine", "Chisom Male", "Ashioma"];
// let greetings = ["Hi", "Hello", "Xup", "What's cooking", "How's it going"]

// // students.forEach(s => console.log(`Hello ${s}`));

// for (let i = 0; i < students.length; i++) {
//     // Calculate the greeting index using modulo
//     let greetingIndex = i % greetings.length;

//     console.log(`${greetings[greetingIndex]} ${students[i]}`);
// }


// let greet = "Hello";
// console.log("Greet 1:", greet);

// greet += " Max";
// console.log("Greet 2:", greet);


// function addNumber(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }
    
//     console.log("Numbers List: ", numbers);
//     console.log(`${numbers.join(" + ")} = ${total}`);   
// }

// addNumber(3, 6); // 9
// addNumber(1, 2, 3, 4); // 10
// addNumber(5, 10, 15, 20, 25); // 75



// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];

// let messageString;

// messageString = message.join(" ");
// console.log(messageString);

// let pythonMessage = [];
// for (let m of message) {
//     if (m.toLowerCase() === "javascript") {
//         m = "Python"
//     }
    
//     pythonMessage.push(m)
//     // console.log(m)
// }


// let myMessage = pythonMessage.join(" ");
// console.log("My Message:", myMessage)

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// };

// let arr = [5, 9];
// addTwoNumbers(...arr);

// function word(param1, ...param2) {
//     // console.log(param1, param2);
//     console.log(`${param1} ${param2}`);
// };

// let more = ["there", "how you doing", "today"]
// // word("hi", ...more);
// word("hi", more.join(" "));


function addTwoNumbers(x, y) {
    // console.log(x + y);
    return x + y;
};

// let result = addTwoNumbers(3, 6);
// console.log(result);

// let resultArr = [];

// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultArr.push(result);
// };

// console.log(resultArr);



// let calcArray = [];

// for (let c = 0; c < 10; c++) {
//     let value1 = c * 5;
//     let value2 = c * c;

//     let result;

//     function addTwoNum(a, b) {
//         return a + b
//     }

//     result = addTwoNum(value1, value2);
//     calcArray.push(result);
// };

// console.log("Calculations:", calcArray);


// let numbers = [];

// function loop(start, stop, step) {
//     for (let i = start; i <= stop; i += step) {
//         numbers.push(i)
//     }
// }

// loop(5, 50, 5);

// console.log(numbers);

// numbers.forEach(n => console.log("Counting...", n))


// // Immediately Invoked Function Expression

// (function () {
//     console.log("Writing an IIFE");
// }) ();

// (() => {
//     console.log("Invoking function right away");
// }) ();


// let myInfos = {name: "Graviy Guy", state: "Anambra", age: 25};

// for (const [key, value] of Object.entries(myInfos)) {
//     console.log(`${key}: ${value}`);
// }


// // 1.
// let stringValue = 1000;
// console.log("1st Value (global):", stringValue);

// // 2.
// (function () {
//     let stringValue = 300;
//     console.log("2nd Value (local):", stringValue);
// })();

// // 3.
// let result = (() => {
//     let stringValue = 700;
//     return stringValue;
// })

// console.log("3rd Value (local):", result());

// // or
// let result2 = (() => {
//     let stringValue = 400;
//     return stringValue;
// })();

// console.log("4th Value (local):", result2);
// console.log("5th Value (global):", stringValue);

// // 4.
// let annonymous = num => {
//     let stringValue = num;
//     return stringValue;
// }

// console.log("Annonymous Entry:", annonymous(900));




// // Recursive Functions
// function getRecursive(g) {
//     console.log(g);

//     if (g > 0) {
//         getRecursive(--g);
//     }
// }

// getRecursive(3);


// function countUp(c) {
//     console.log(c);

//     if (c < 10) {
//         countUp(++c);
//     }
// }

// countUp(1);


// function countUp(c) {
//     console.log(c);

//     if (c < 100) {
//         countUp(c += 5);
//     }
// }

// countUp(5);


// function countByTwo(num) {
//     console.log(num);

//     if (num < 20) {
//         countByTwo(num += 2);
//     }
// }

// countByTwo(2);



// function logRecursive(num) {
//     console.log("Counting...", num);

//     if (num < 5) {
//         logRecursive(++num);
//     } else {
//         console.log("Done counting");
//     };
//     console.log("Ending count...", num);
// }

// logRecursive(0);



// // NESTED FUNCTION

// function outer(o) {
//     console.log("Outer Function");
//     inner(o)
    
//     function inner(i) {
//         console.log(i + 7);
//         console.log("I can access the outer function", o);
//     }
// }

// outer(2);


// function add(x) {
//     // console.log("Adding:", x + 7);
//     console.log(`Adding: ${x} + 7 = ${x + 7}`);
// }

// add(15);



// function doOuter(nr) {
//     console.log("Value is:", nr)
//     doInner(nr);

//     function doInner(x) {
//         let z = 10;
//     }
// }

// // doInner(3);
// doOuter(3);



// // 1.
// let start = 10;

// // 2.
// function countDown(value) {
//     // 3.
//     console.log(value);

//     // 4.
//     if (value < 1) {
//         return value;
//     } else {
//         countDown(--value);
//     }
// }

// countDown(start);



// // Using Set Timeout
// setTimeout(() => {}, timeout);
// setTimeout(function() {}, timeout);
// setTimeout(function, delay, argument1, argument2...)


// let greeting = (function () {
//   setTimeout(() => {
//     console.log("Hello, am GravityGuy, Xup");
//   }, 1000);
// })();


// setTimeout((name) => {
//     console.log(`Hello, am ${name}, Xup!`)
// }, 5000, "GravityGuy");


// let greet = setTimeout((name) => {
//     console.log(`Hello, am ${name}, Xup!`)
// }, 4000, "Juni Cortex");



// setTimeout(function() {
//   console.log("Goodbye")
// }, 3000);

// setTimeout(() => {
//   console.log("See you soon")
// }, 1000);

