// Assignments
// 1. What are the types of these variables listed below? Verify this with typeof and output the result to the console:

// ANSWER

// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(str1, typeof str1)
// console.log(str2, typeof str2)
// console.log(val1, typeof val1)
// console.log(val2, typeof val2)
// console.log(myNum, typeof myNum)

// 2. Create a variable for your name, another one for your age, and another one for whether you can code JavaScript or not.

// Log to the console the following sentence, where name , age and true / false are variables:

// ANSWER
const greeting = "hello";
const myName = "GravityGuy";
const myAge = 13;
const canICode = "yes";
const language = "Javascript";
const message = `${greeting}, am ${myName}, ${myAge} years old and ${canICode} i write ${language} codes`;
// alert(message)
console.log(message, typeof message)

// 3. Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. The theorem specifies that the relation between the sides of a right-angled triangle is a2 + b2 = c2.

// ANSWER

// Given sides a and b
// let a = 3;
// let b = 4;

// // Calculate hypotenuse using Pythagorean theorem
// let c = Math.sqrt(a * a + b * b);

// // Output the result
// console.log("The hypotenuse is: " + c);

// or

// const a = 3;
// const b = 4;

// // c2 = a2 + b2
// let c = (a * a + b * b) ** 0.5; // In Indeces, When sth is raised to the value of 2, it is equivalent to it being raised to 1/2 (i.e 0.5)
// console.log(c);

// 4. Create variables for three numbers: a, b, and c. Update these variables with the following actions using the assignment operators:

// a. Add b to a
// b. Divide a by c
// c. Replace the value of c with the modulus of c and b
// d. Print all three numbers to the console

// ANSWER

let a = 10;
let b = 5;
let c = 3;

// a. Add b to a
a += b; //equivalent to a = a + b
a = 10 + 5;
a = 15;

// b. Divide a by c
a / c; //equivalent to a = a /c
a = 15 / 3;
a = 5;

// c. Replace the value of c with the modulus of c and b
c %= b; // equivalent to c = c % b
c = 3 % 5;
c = 3; //(since 3 is less than 5, it stays 3)

// 4. Print all three numbers to the console

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
