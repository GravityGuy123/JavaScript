// console.log("Hello from the script!");
// alert("Welcome to JavasScript");

// let a = 10;
// console.log("Adding Comment");

// // Double Quote
// const name = "Gravity";
// console.log(name);

//
// const MyName = "Gravity";
// console.log(MyName);
// // 

// const laptop = "HP";
// console.log(laptop);
// 

// Template literals
// const laptopQuote = `${MyName}'s laptop is ${laptop}`;
// console.log(laptopQuote);

// const div = document.getElementById("inject");
// div.style.backgroundColor = "green";
// div.style.color = "white";
// div.style.fontFamily = "arial";
// div.innerHTML = `
// <h1>${MyName}</h1> <br/>
// <p>I am a grafix guy</p>

// const myName = "GravityGuy";
// const language = "Javascript";

// const message = `2 + 2 = ${2 + 2}`;
// // alert(message)
// console.log(message)
// // In this case the entire calculation process is displayed. (i.e 2 + 2 = 4)

// let str = "Hello, what's your name? Is it \"Mike\" ";
// console.log(str)

// let str2 = `Hello, what's your name? Is it "Mike" `;
// console.log(str2)

// let ame = "My name is \"Amaechi\" ";
// console.log(ame)

// // Multi line strings
// const details = "My name is Simon \nAm a web dev student at Icehub \nWe are currently learning Javascript \there at Icehub";
// console.log(details)

// // The \t creates tab spaces or indentation.
// New Tab Spaces: \t creates a new tab spaces.

// var age = x;
// const dob1 = 2005;
// const dot1 = 2025;
// var age1 = Number(dot1) - Number(dob1);
// console.log(age1, typeof age)

// let dob = prompt ("Enter date of birth");
// let dot = prompt("Enter date of today");
// let age = Number(dot) - Number(dob);
// alert(age)
// console.log(age)

// const message = `2 + 2 = ${2 + 2}`;
// // alert(message)
// console.log(message)

// const myAge = 2 + 3 / 4 - 5;
// alert(myAge)
// console.log(myAge)

// var div0 = 2 / 0;
// var name1 = "GravityGuy";
// var message1 = `${name1} says the class isn't boring and \n anything divided by 0 is in ${div0}`;
// alert(message1)
// console.log(message1, typeof message1);

// let num = 3;
// num = String(num);
// console.log(num, typeof num)

// let word = "5";
// word = Number(word);
// console.log(word, typeof word)

// let num1 = "12";
// let num2 = 14;
// let total = num1 + num2;
// console.log(total, typeof total)
// alert(total)

// let string1 = "Hello";
// let string2 = "Hi"
// let stringMessage = `string1 + string2`;
// console.log(stringMessage, typeof stringMessage);

// console.log(2**5)
// console.log(5**2)

// Modulus: Is used to calculate and determine whether a number is even or odd. It divides and gives you the value of the remainder.

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);
// console.log(result1);
// Template literals

// let x = 2;
// x++;
// console.log(x)
// // Raises the value by 1

// let y = 5;
// y--;
// console.log(y)
// Lowers the value by 1

// let x = 2;
// x += 2;
// console.log(x)

// Javascript uses a calculative order of prececedence just like BODMAS called PEMDAS

// PEMDAS
// P - Parentesis
// E - Exponent (Raised to power)
// M - Multiplication
// D - Division
// A - Addition
// S - Subtraction

// Unary operators: increment and decrement

// let r1 = 4;
// r1++;
// console.log(r1); //The value for r1 logged is 5 because the increment operator ++ attached to r1 increases it's value by 1.

// let r2 = 4;
// r2--;
// console.log(r2);
// console.log("r2 =", r2); // The value for r2 logged is 3 because the decrement operator -- attached to r2 decreases it's value by 1.

// Prefix and postfix operators

// let nr = 2;
// console.log(nr++);
// console.log(nr);

// let nr1 = 4;
// let nr2 = 5;
// let nr3 = 2;
// console.log(nr1++ + ++nr2 * nr3++)

// Assignment
//3. Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. The theorem specifies that the relation between the sides of a right-angled triangle is a2 + b2 = c2.
// The Pythagorean theorem only applies to right-angled triangles. The sides connected to the 90-degree angle are called the adjacent and opposite sides, represented by a and b in the formula. The longest side, not connected to the 90-degree angle, is called the hypotenuse, represented by c.
// You can use prompt() to get the value for a and b. Write code to get the value from the user for a and b . Then square the values of both a and b before adding them together and finding the square root. Print your answer to the console.

// Given sides a and b
// let a = 10;
// let b = 5;

// // Calculate hypotenuse using Pythagorean theorem
// let c2 = (a2 + b2);
// c2 = (10**2 + 5**2);
// c2 = (100 + 25)
// c2 = (125);
// c = 125 / 2;

// Given sides a and b
// let a = 10;
// let b = 5;
// a2 = 100;
// b2 = 25;
// let c2 = a2 + b2;
// c2 = (a * a + b * b); //calculates  𝑎2 + 𝑏2
// c2 = (100 + 25);
// c = 125 / 2;
// console.log(c)

// Given sides a and b
// let a = 3;
// let b = 4;

// // Calculate hypotenuse using Pythagorean theorem
// let c = Math.sqrt(a * a + b * b);

// // Output the result
// console.log("The hypotenuse is: " + c);

// COMPARISOM OPERATORS

// Equal Operator comes in two flavours, Double Equal to (==) and Tripple Equal to. The == flavour checkes for the value only while the === checks for both the value and type
// let x = 5;
// let y = "5";
// console.log(x==y) // The result will be true because the values 5 is equal.
// console.log(x===y) // The result will be false because even though the values 5 is equal, the type differs

// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x < y && y < z);
// console.log(x > y && y < z);
// console.log(x > y || y < z);

// let x = 1;
// let y = 2;
// console.log(!(x < y));

// Arrays

// let arr1 = ["black", "orange", "pink"];
// console.log(arr1)

// let arr2 = ["GravityGuy", 1, 2, 3, 4, 5];
// console.log(arr2);
// console.log(arr2[0]); // The value will be GravityGuy because the arrays starts counting or checking its positions from zero

// let arr3 = ["Baddest", "Boy", "Beach", "Baller"];
// console.log(arr3);
// console.log(arr3[2]);

// let arr4 = new Array(10); //An unrecommended way to declare arrays
// let arr5 = [10];
// console.log(arr4);
// console.log(arr5);

//Multidimensional array
// let myArray = [
// ["Gravity", 1, 2, 3, 4, "Sonic"],
// [true, false, null, undefined],
// [1.2, 3.4, 5.6]
// ]
// console.log(myArray);


// Tryingout Functions

// function GetTime() {
//     let date = new Date();
//     return date.getFullYear();
// }
// console.log(GetTime());

// function GetTime() {
//   let date = new Date();
//   return date.getDay();
// }
// console.log(GetTime());

// function CalculateAge(birthYear(2000)) {
//     let currentYear = new Date().getFullYear();
//     return currentYear - this.age;
// }
// console.log(birthYear)


// LOGIC STATEMENT



















// The terminology for (Formular) in Programming is (Function)

// PEMDAS
// P - Parentesis
// E - Exponent (Raised to power)
// M - Multiplication
// D - Division
// A - Addition
// S - Subtraction
// Ctrl + zooms in an Ctrl - zooms out

// Assignments(Pg 68, 69, 76)
// Assignments(Pg 84 - 86, 95, 103, 106, 110)