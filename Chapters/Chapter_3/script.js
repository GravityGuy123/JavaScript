// console.log("Hello from the script!");
// alert("Welcome to JavasScript");

// Double Quote
// const MyName = "Gravity";
// console.log(MyName);

// const laptop = "HP";
// console.log(laptop);

// const LaptopQuote = `${MyName}'s laptop is ${laptop}`;
// console.log(LaptopQuote);

// var count = 0;
// while (count < 10) {
// count++;
// document.getElementById("theCount").innerHTML +=
// count + "<br>";
// }

// var firstNumber = 100;
// var secondNumber = 20;
// var total = Number(firstNumber) - Number(secondNumber);
// alert (total)

// var anyNumber = prompt("Enter any number");
// var nextNumber = prompt("Enter next Number");
// total = Number(anyNumber) + Number(nextNumber);
// alert (total)

// var number1 = prompt("Enter number 1");
// var number2 = prompt("Enter number 2")
// total = Number(number1) - Number(number2);
// alert (total)

// var deName = GravityGuy;

// var number1 = 1030;
// var number2 = prompt ("Enter number 2");
// total = Number(number1) * Number(number2);
// alert(total)

// var anyNumber = 1030;
// var nextNumber = prompt ("Enter next number");
// total = Number(anyNumber) / Number(nextNumber);
// alert(total)

// var number1 = 1030;
// var number2 = prompt ("Enter number 2");
// total = Number(number1) * Number(number2);
// alert(total)
// console.log(total)

// console.log("Hello from the script!");
// alert("Hi there, this is GravityGuy signing in")
// alert("Hope you had an eventful weekend")

// console.log("Hello from the G-man!");
// var sign = "Hello, its me GravityGuy.";
// alert(sign)

// prompt("Hi how are you")
// dispalys the prompt message similar like alert but also prompts the user to type in a message.]

// Data Types
// Javascript basically has 7 Primitive Data Types
// 1. String: (Used for text. Usually denoted with single quote(''), double quote("") and backtick(``))

// console.log("strings from GravityGuy")
// let singleString = 'Hello';
// let doubleString = "Hi";
// let backtick = `Xup`;
// alert(singleString)
// alert(doubleString)
// alert(backtick)

// console.log("feeling")
// prompt("How re you feeling today")

// let language = "Javascript";
// let message1 = `GravityGuys says let's learn ${language}`;
// let message2 = "Josh said no"
// console.log(message1)
// console.log(message2)
// alert(message1)
// alert(message2)

// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);

// let str = "Hello, what's your name? Is it \"Mike\"";
// console.log(str)
// let str2 = 'Hello, what\'s your name? Is it "Mike';
// console.log(str2)
// The backslash(\) is used an escape character to tell Javascript not to treate the next character as it normally would

// let str3 = "New \nline.";
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

// let str3 = "New \nword";
// let str4 = "I'm containing a backslash: \\!"
// console.log(str3)
// console.log(str4)

// let newLine = "trying out backlash new \nline property";
// let newLine2 = "Did it work. \nyes it did";
// console.log(newLine)
// console.log(newLine2)
// alert(newLine)
// alert(newLine2)
// Backslash is not just used an an escape character, it is also used for line breaking (making the words that comes after on the same line start on a different line)

// 2. Number: (Used for numbers. To be more precise, they decided to go for a 64-bit floating-point number. i.e Integers, decimals, exponentials, octal, hexadecimal, and binary numbers etc.

// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5
// console.log(intNr)
// console.log(decNr)
// console.log(expNr)
// console.log(octNr)
// console.log(hexNr)
// console.log(binNr)
// alert(intNr)
// alert(decNr)
// alert(expNr)
// alert(octNr)
// alert(hexNr)
// alert(binNr)

// let intNr2 = 3434;
// let intNr3 = -111;
// console.log(intNr2)
// console.log(intNr3)

// let decNr2 = 45.78;
// console.log(decNr2)
// alert(decNr2)
// You would have observed that that when the alert() comes before console.log(), the console values is only displayed after the alert messages is checked but when console.log() comes before the alert(), the console values is displayed as soon as the program starts running, so personally speaking i think the console is always meant to come before teh alert but still need to confirm from Amaechi.

// let binNr2 = 0b100; //decimal version would be 4
// alert(binNr2)
// console.log(binNr2)

// 3. BigInt: The limits of the number data type are between 253-1 and -(253-1). In case you were to need a bigger (or smaller) number, BigInt comes into play. A BigInt data type can be recognized by the postfix n :
// let bigNr = 90071992547409920n;
// console.log(bigNr)
// alert(bigNr)

// NB: Though both the Number and BigInt data type are used to represent numbers, you are not meant to mix or use them together in the same code block or an error will be displayed.

// 4. Boolean: The Boolean data type can hold two values: true and false. There is nothing in between.

// let bool1 = false;
// let bool2 = true;

// var b1 = true;
// var b2 = false;

// let objectIsDeleted = false;

// let lightIsOn = true;

// 5. Symbol: Symbol can be used when it is important that variables are not equal, even though their value and type are the same (in this case, they would both be of the symbol type).

// let str1 = "Javascript is fun";
// let str2 = "Javascript is fun";
// console.log("These two strings are the same", str1 === str2);

// let sym1 = Symbol("Javascript is fun");
// let sym2 = Symbol("Javascript is fun");
// console.log("These two symbols are the same", sym1 === sym2)

// 6. Undefined: JavaScript is a very special language. It has a special data type for a variable that has not been assigned a value. And this data type is undefined.

// let unassigned;
// console.log(unassigned);

// We can also purposefully assign an undefined value. It is important you know that it is possible, but it is even more important that you know that manually assigning undefined is a bad practice:
// let terribleThingToDo = undefined;
// console.log(terribleThingToDo)

// 7. Null: null is a special value for saying that a variable is empty or has an unknown value. This is case sensitive. You should use lowercase for null.

// NB: console.log(), alert() are Javascript built in logics

// You can work out the type of a variable by using the typeof keyword.

// testVariable = 1;
// variableTypeTest1 = typeof testVariable;
// variableTypeTest2 = typeof(testVariable);
// console.log(variableTypeTest1);
// console.log(variableTypeTest2);

// testVariable = "Hello Boy";
// variableTypeTest1 = typeof testVariable;
// variableTypeTest2 = typeof(testVariable);
// console.log(variableTypeTest1);
// console.log(variableTypeTest2);

// let greeting = "Hello";
// let nr = 13;
// let bigNr2 = 12345678901234n;
// let bool = true;
// let syb = Symbol("Unique-me");
// let undef = undefined;
// let unknown = null;
// console.log("greeting", typeof greeting)
// console.log("nr", typeof nr)
// console.log("bigNr2", typeof bigNr2)
// console.log("bool", typeof bool)
// console.log("syb", typeof syb)
// console.log("undef", typeof undef)
// console.log("unknown", typeof unknown)

// Converting Data Types
// Sometime variables can change types as shown in the examples below:

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);
// In this instance, nr1 is a Number data type while nr2 is a string but when both are multiplied it works because the string value is multipliable and the end type is number. NB: If the value isn't multipliable it will throw an error.

// let nr3 = 2;
// let nr4 = "5";
// total = nr3 * nr4;
// console.log("total", typeof total)
// console.log("nr4", typeof nr4)

// Trying to convert different strings is dangerous as you are more likely to get an inaccurate answer or solution as shown below

// let nr5 = 2;
// let nr6 = "5";
// total = nr5 + nr6;
// console.log(total)
// console.log("total", typeof total)

// When this code is run, the total value that you get is 25 and not 7 because in Javascript the plus sign can be used to concatenate sign used to concatenate strings. Therefore, instead of converting a string to number, it will convert the number to string.

// We do not need to rely on Javascript to convert the data type of our variable. There built in functions for it. There are three conversion methods: String() , Number() , and Boolean() . The first one converts a variable to type String. It pretty much takes any value, including undefined and null, and puts quotes around it.

// let myName = "GravityGuy";
// let jName = "Josh";
// let language = "Javascript";
// let message1 = `${myName} says let's learn ${language}`;
// let message2 = `${jName} said no`;
// alert(message1)
// alert(message2)
// console.log(message1)
// console.log(message2)

// 3. Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. The theorem specifies that the relation between the sides of a right-angled triangle is a2 + b2 = c2.

// ANSWER

// Given sides a and b
// let a = 3;
// let b = 4;

// // Calculate hypotenuse using Pythagorean theorem
// let c = Math.sqrt(a * a + b * b);

// // Output the result
// console.log("The hypotenuse is: " + c);

// 4. Create variables for three numbers: a, b, and c. Update these variables with the following actions using the assignment operators:

// a. Add b1 to a1
// b. Divide a1 by c1
// c. Replace the value of c1 with the modulus of c1 and b1
// d. Print all three numbers to the console

// let a1 = 7;
// let b1 = 3;
// let c1 = 5;

// // a. Add b1 to a1
// a1 += b1 //equivalent to a1 = a1 + b1;
// a1 = 7 + 3;
// a1 = 10;

// // b. Divide a1 by c1
// a1 /= c1; // equivalent to a1 = a1 /c1;
// a1 = 10 / 5;
// a1 = 2;

// // c. Replace the value of c1 with the modulus of c1 and b1
// c1 %= b1; // equivalent to c1 = c1 % b1;
// c1 = 5 % 3; // 5 / 3 gives  1 remainder 2
// c1 = 2;

// // d. Print all three numbers to the console
// console.log("a1 =", a1)
// console.log("b1 =", b1)
// console.log("c1 =", c1)

// let x = 5;
// let y = "5";
// console.log(x == y);
// console.log(x === y);
// console.log("Not equal is", x != y);
// console.log("Not equal is", x !== y);

// let a = 3;
// let b = 7;
// console.log(a > b)
// console.log(a < b)
// console.log(a >= a)

// Logical Operators (and (&&), or (||), not (!))
// And: In this case all values must be true for it to log true.
// Or: In this case, even if just one out a number of values is true, it will log true
// Not: In some cases, you would like to negate a boolean. This makes the statement the opposite of its true value. I.e if the value was true, this operator makes it to log false.

// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x < y && y < z)
// console.log(x < y && y > z) //Logs in false because all the values are not true

// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a < b || b < c)
// console.log(a < b || b > c)
// console.log(a > b || b > c) //Logs in false because none of the values are not true

// let a = 1;
// let b = 2;
// let c = 3;
// console.log(!(a < b) || !(b < c))
// console.log(!(a < b) && (b < c))

// let x = false;
// console.log(!x);

// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);

// Arrays and their Properties

// arr3 = new Array(10); // Unrecommended way yo create an array
// arr4 = [10]; // The best and most readable way to create a new array.
// console.log(arr3);
// console.log(arr4);

// let arr5 = ["Hello", 5, true];
// console.log(arr5);
// console.log(typeof arr5[0], typeof arr5[1], typeof arr5[2]);

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);
// arr = ["nope, now you are overwriting the array"];

// const arr1 = ["hi", "there", 3]
// arr1[0] = 5;
// console.log(arr1[0])
// arr1[1] = "home";
// arr1[2] = "xup";
// console.log(arr1) // You can change the values of a constant array, but you cannot change the array itself.
// arr1 = [true, "home", "xup"] // If you were to run this line of code you will get an error "Uncaught TypeError: Assignment to constant variable."

// Arrays have position indexes starting from 0 to the last value assigned. i.e, the first assigned value will have a position index of zero (0) and the second will have the 1 as its position.

// let cars = ["toyota", "Camry", "Lexus", "Lambogini", "Golf"]
// console.log(cars);
// console.log(`My favorite car model is ${cars[1]}`)
// console.log(cars[-1]);
// cars[0] = "tesla";
// console.log(cars);

// cars[5] = "Kia";
// // Or even a negative index?
// cars[-1] = "Fiat";
// // Let's see what happens when we try to write the values to the console:
// console.log(cars[5]);
// console.log(cars[-1]);
// console.log(cars);

// Built in Length Property

// colors = ["black", "orange", "pink"];
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:",colors, colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers.length);

// let num1 = [5, 9, 3, "De Man"];
// num1[6] = 2;
// console.log("num1 values:", num1)

// favoriteFruits = ["grapefruit", "orange", "lemon"];
// console.log("before push", favoriteFruits);
// favoriteFruits.push("Avocado", "Mango");
// console.log("after push", favoriteFruits);
// let addMoreFruits = favoriteFruits.push("'Guava', 'Papaya'");
// console.log("after push 2", favoriteFruits);

// You can also add value(s) to a particular position(s) without having to erase a value(s) already occuping that position instead it/they get moved to the right.
// We do this with .splice

// let shapes = ["cirle", "square", "triangle"];
// console.log("Before splice", shapes)
// shapes.splice(1, 0, "Cube", "Cuboid")
// console.log("After splice", shapes)

// You can also add another array to ur array the .concat method

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// console.log(`num1: ${num1}, \nnum2: ${num2}`);
// let num3 = num1.concat(num2);
// console.log(num3);

// let myNames1 = ["GravityGuy", "Sonic"];
// let myNames2 = ["Gabriel", "Simon"];
// let myNames3 = myNames1.concat(myNames2);
// console.log(myNames3);
// let myNames4 = myNames3.concat("Bado", "Baddest Boy");
// console.log(myNames4);

// Deleting Elements/Value of an array can be done with array methods such as .pop, .shift, .splice. and delete .pop is used to delete the last element while .shift is used to delete the first element and .splice is used delete from a particular index position. Delete is not an array method but is very helpful when you want to delete an element and still leave its position index unoccupied. Elements deleted this way are then displayed as empty.

// let num1 = [1, 2, 3, 4];
// console.log("Untoched", num1)
// num1.pop();
// console.log("After pop:", num1);
// num1.shift();
// console.log("After shift:", num1);
// num1.push(5, 6, 7, 8)
// console.log("After push:", num1);
// num1.splice(2, 4) // The 1st value 3 makes the delete start from index position 3 and the 2nd 3 is the number of elements to be deleted
// console.log("After splice:", num1);
// num1.splice(0, 0, 1) //Adding with the splice method
// console.log("After add with splice:", num1);

// let MonthOfTheYear = ["Jan", "Feb", "Mar", "April", "May", "June", July];

// let num = [1, 2, 3, 4, 5];
// console.log("before push", num);
// num.push(6, 7);
// console.log("AFter push", num);
// num.pop();
// console.log("AFter pop", num);
// num.shift()
// console.log("AFter shift", num);
// num.splice(0, 0, 1)
// console.log("AFter splice", num);
// delete num[3]
// delete num[4] // You can't delete multiple elements at a time
// console.log("AFter delete", num);

// let list = [1, "m", 3, "c", 5, "p"];
// console.log("Before sort:", list);
// list.sort();
// console.log("After sort:", list);
// list.reverse();
// console.log("After reverse:", list);

// Multidimensional Array is an array that contains two or more arrays which in turm can contain multiple arrays as well. Basically it is an array of arrays (Parent of arrays).
// E.g

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let num3 = [7, 8, 9];
// let parentArray = [num1, num2, num3]; //Equivalent to
// let parentArray2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]; 
// console.log(parentArray);
// console.log(parentArray2);
// let grandParentArray = [parentArray, parentArray2];
// console.log(grandParentArray)

// SUMMARY OF ARRAY, PROPERTIES, USAGE AND METHODS
// ARRAY PROPERTIES
// .length: Used to find out the length of an array (I.e the number of element in an array)
// .indexOf: Used to find the position index of an array element.

// ARRAY METHODS
// .unshift(): Add one or more elements to the begining of the array.
// .shift(): Removes the first element.
// .pop(): Removes the last element.
// .push(): Adds one or more elements to the end of the array.
// .splice(): Adds and/or deletes one or more elements to a particular position of an array.
// .concat(): Merges one or more arrays to an array.


// OBJECTS

// let dog = {
//   dogName: "JavaScript",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
//   age: 3,
//   burglarBiter: true,
// };
// console.log(dog)

// let studentNames = {
//   studentName: "GravityGuy",
//   color: "chocolate",
//   age: "13",
//   state: "Anambra",
//   country: "Nigeria",
//   profession: "Designer",
//   skills: "Graphics_Designing"
// };
// console.log(studentNames);

// // Selecting and objects property
// let name1 = studentNames["color"]; 
// let name2 = studentNames.age;
// console.log(`${name1} \n${name2}`);

// // Updating Objects
// studentNames.country = "America";
// studentNames["profession"] = "Web_Developer";
// studentNames.studentName = "Sonic";
// console.log(studentNames);

// let tenantNames = {
//   namee: "Emma",
//   age: 29,
//   state: "Enugu",
//   job: "Tiler",
//   country: "Nigeria"
// };

// let selectAge = tenantNames.age;
// let selectState = tenantNames["state"]
// console.log("Before update", tenantNames)
// console.log(selectAge, selectState)

// tenantNames["namee"] = "Chris";
// tenantNames.state = "Crossriver";
// tenantNames.job = "Truck_Driver";
// console.log("After update", tenantNames);

// let variableString1 = "namee";
// let variableString2 = "state";
// console.log(tenantNames[variableString1], tenantNames[variableString2]);




// let schoolMates = {
//   namee: "Cheche",
//   age: 23,
//   height: "6ft",
//   color: "Fair",
//   maritalStatus: "Married"
// }
// console.log("Untoched:", schoolMates);
// schoolMates["namee"] = "Chiagozie";
// schoolMates.color = "dark";
// schoolMates.age = 24;
// schoolMates.height = "6.2ft"
// schoolMates["maritalStatus"] = "Single";
// console.log("After change1", schoolMates)

// let variableHeight = "height";
// let variableStatus = "maritalStatus"
// console.log(schoolMates[variableHeight]);


// let addresses = [{
//   street: "2nd street",
//   number: "123",
//   zipcode: "33116",
//   city: "Miami",
//   state: "Florida"
//   },
//   {
//   street: "1st West avenue",
//   number: "5",
//   zipcode: "75001",
//   city: "Addison",
//   state: "Texas"
// }];
// let streetName = addresses[1].street;
// console.log(streetName)









// 7a. Create an object named people that contains an empty array that is called friends.
// 7b. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// 7c. Add the three friends to the friend array.
// 7d. Output it to the console.

// 7a.
let people = {friends: []};

// 7b.
let variable1 = {firstName: "Clara", lastName: "Ignatius", ID_Value: 1203}
let variable2 = { firstName: "Ann", lastName: "Ignatius", ID_Value: 1293};
let variable3 = {firstName: "Jephtha", lastName: "Kolapo", ID_Value: 1439};

// 7c.
// people.friends.push(variable1, variable2, variable3); // Noticed that you don't have to create a new variable to use .push
let addFriends = people.friends.concat(variable1, variable2, variable3); // But for concat, a new variable has to be created. (Ask Amaechi why).

// 7d.
// console.log(addFriends);
console.log("People:", addFriends);


// const theList = ['Laurence', 'Svekis', true, 35, null, undefined]

// Manipulate your array using various methods, such as pop() , push() ,
// shift() , and unshift() , and transform it into the following:

// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

const theList = ["Laurence", "Svekis", true, 35, null, undefined];

theList.shift();
theList.unshift("FIRST");
theList.splice(2, 4, "MIDDLE", "Hello World");
theList.push("LAST");
console.log(theList)














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
