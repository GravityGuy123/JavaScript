// LOOP

// While Loop

// while (true) {
//     console.log(2 + 2)
//     break;
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let letters = a;
// while (letters < z) {
//     console.log(letters);
//     letters++
// }
//can't move alphabets (research)

// let myCars = ["Golf", "Mazda", "Venza", "Benz", "Lexus"];

// while (myCars.length) {
//     console.log(myCars);
//     myCars++
// }

// let num = 0;

// while (num < 11) {
//   console.log(num);
//   num++;
// }

// let cars = ["Camry", "Toyota", "Lexus", "Mazda", "Golf"];

// while (cars.length > -1 && cars.length < 10) {
//     console.log(cars);
//     cars++
// }

// let num = 5;

// while (num < 51) {
//   console.log(num);
//   num += 5
// }

// 1. Create a variable, i , and set its value to zero
// 2. Start the while loop and check the condition that the value of i is
// smaller than 10
// 3. Since the condition is true, the code logs i and increases i by 1
// 4. The condition gets evaluated again; 1 is still smaller than 10
// 5. Since the condition is true, the code logs i and increases i by 1
// 6. The logging and increasing continues until i becomes 10
// 7. 10 is not smaller than 10, so the loop ends

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

// let a = 0;
// while (a < 20) {
//   console.log(a);
//   a += 2;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jac"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

// let myProperties = ["Bed", "Fan", "Phone", "Laptop", "Table", "Chair"];
// let search = true;

// while (search && myProperties.length > 0) {
//   if (myProperties[0] === "Chair") {
//     console.log("Found Item");
//     search = false;
//   } else {
//     myProperties.shift();
//   }
// }

// let myProperty = ["Bed", "Fan", "Phone", "Laptop", "Table", "Chair"];
// let searchItem = true;

// while (searchItem && myProperty.length > 0) {
//   if (myProperty[0] === "Chair") {
//     console.log(`Found your "${myProperty[0]}"`);
//     searchItem = false;

//   } else {
//     myProperty.shift();
//   }
// }

// let theCars = ["Camry", "Lexus", "Toyota", "Landrover", "Golf"];
// let notFound = true;

// while (notFound && theCars.length > 0) {
//   if (theCars[0] === "Golf") {
//     console.log(`Found the "${theCars[0]} car"`);
//     notFound = false;
//   } else { theCars.shift()
//   }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
//   console.log(nr1)
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jac"]
//     let notFound = true;
//     while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//     } else {
//     someArray.shift();
//     }
//     }

// let nameList = ["Aicha", "GravityGuy", "Chioma", "Victoria", "Chinedu"];
// let isPerfect = true;

// while (isPerfect && nameList.length > 0) {
//   if (nameList[0] === "GravityGuy") {
//     console.log("Found the name");
//     break;
//     // isPerfect = false; // Is also used to break the code but break is much better
//   } else {
//     nameList.shift();
//   }
//   if (nameList.length === 0) {console.log("Not found")}
// }

// Do While LOOP

// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));

// let num = 1;
// do {
//   console.log(`Number: ${num}`);
//   num++;
// } while (num <= 3);

// let num = 5;

// do {
//   console.log(num);
//   num += 5;
// } while (num <= 100)

// let num1 = 0;
// do {
//     console.log(num1);
//     num1 += 25;
// } while (num1 <= 100);


let num = 100;

do {
  console.log(num);
  num -= 10;
} while (num >= 0);


// Practice exercise 5.2
// In this exercise, we will create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.
// 1. Set the starting counter to 0
// 2. Create a variable, step , to increase your counter by
// 3. Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop
// 4. Continue to loop until the counter is equal to 100 or more than 100

// let counter = 0;

// let step = 25;

// do {
//     console.log(counter);
//     counter += step;
// } while (counter <= 100)

// let count = 0;
// let step = 15;
// do {
//     console.log(count);
//     count += step;
// } while (count <= 100);

// let count = 1;
// let step = 5;
// do {
//     console.log(count);
//     count *= step;
// } while (count <= 100); //

// let count1 = 5;
// do {
//   console.log(count1);
// //   count1++;
//   count1 +=5
// } while (count1 <= 100); // increases the value by 5 for as long as count1 remains <= 100

// let count = 0;

// do {
//     console.log(count);
//     count += 10;
// } while(count < 100)



// For Loop
for (let a = 50; a >= 0; a -= 5) {
  console.log(a);
}

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// let arr = [];
// for (let i = 0; i < 100; i += 20) {
// arr.push(i);
// console.log(i)
// }

// let numberArray = [];

// for (let num =  0; num <51; num += 10) {
//     numberArray.push(num)
//     console.log(numberArray);
// }

// let arr = [];
// for (let i = 0; i <= 20; i = i + 4) {
//   arr.push(i);
// }
// console.log(arr)
// console.table(arr) // We can use the console.table to tabulate a data

// for (let a = 0; a < fruits.length; a++) {
//     console.log(fruits[a])
// }

// let fruits = ["apple", "banana", "orange", "grape"];
// let extraFruits = [];
// console.log(extraFruits);

// for (let a = 0; a < fruits.length; a++) {
//   extraFruits.push(fruits[a] + "s"); // Adds "s" to all the elements in the array (fruit)
// }
// console.log(extraFruits);

// let cars = ["Golf", "Lexus", "Mazda", "Venza"];

// for loop

// for loop Project

// Foo bar
// Loop from -1 to 100
// If any number is divisible by 3, console.log("foo")
// if any number is divisible by 5, console.log("bar")
// if any number is divisible by both console.log("foo bar")

// for (num1 = -1; num1 < 100; num1++) {
//   if (num1 % 15 === 0) {
//     console.log(num1, "foo bar");
//   } else if (num1 % 3 === 0) {
//     console.log(num1, "foo");
//   } else if (num1 % 5 === 0) {
//     console.log(num1, "bar");
//   }
// }

//Nested loops
// Nested for loops

// let myFruits = [["apple", "banana", "orange", "grape"], ["pineapple", "kiwi", "strawberry", "mango"]];

// for (let i = 0; i < myFruits.length; i++) {
//     for (let j = 0; j < myFruits[i].length; j++) {
//         console.log(myFruits[i][j])
//     }
// }

// NESTED LOOPS
// One or more Loops of different or the same types can be nested into each other

// let arr1 = [];

// for (let b = 0; b < 4; b++) {
//   arr1.push([]);

//   for (let c = 0; c < 5; c++) {
//     arr1[b].push(c);
//   }
// }
// console.log(arr1);
// console.table(arr1);

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }
// console.log(arrOfArrays);

// let myTable = [];

// let numOfRows = 3;
// let numOfCols = 3;

// let counter = 0;

// for (row = 0; row < numOfRows; row++) {
//   let tempTable = [];

//   for (col = 0; col < numOfCols; col++) {
//     counter++;

//     tempTable.push(counter);

//     myTable.push(tempTable);
//   }
// }
// console.table(myTable);

// 1. Create an empty array to hold the table data
// let myTable = [];

// // 2. Set the number of rows and columns (you can change these values)
// let numRows = 4;
// let numCols = 5;

// // 3. Initialize a counter to track cell values
// let counter = 0;

// // 4. Outer loop for rows
// for (let row = 0; row < numRows; row++) {
//   // 4.1 Create a temporary array to store each row's data
//   let tempTable = [];

//   // 5. Inner loop for columns
//   for (let col = 0; col < numCols; col++) {
//     // 6. Increment the counter
//     counter++;

//     // 7. Push the counter value into the tempTable (represents a cell)
//     tempTable.push(counter);
//   }

//   // 8. Push the completed row (tempTable) into the main table (myTable)
//   myTable.push(tempTable);
// }

// // 9. Display the table structure in the console
// console.table(myTable);

// LOOPS AND ARRAYS
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names[i] = "Hi " + names[i];
//   console.log(names[i]);
// }

// let num = [1, 2, 3, 4, 5];

// for (let a = 0; a < num.length; a++) {
//   console.table(num[a])
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("M")) {
//     delete names[i];
//     continue;
//   }
//   names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names.push("...");
// }

// let cars = ["Mazda", "Lexus", "Camry", "Toyota", "Benz"];

// for (let a = 0; a < cars.length; a++) {
//     cars[a] = "Found " + cars[a]
// }

// console.log(cars);

// let cars = ["Mazda", "Lexus", "Camry", "Toyota", "Benz"];

// for (let a = 0; a < cars.length; a++) {
// //   cars[a] = "Found " + cars[a];

//   if (cars[a].startsWith("C")) {
//     delete cars[a];
//     continue
//   }
//   cars[a] = "Found " + cars[a];
// }
// console.log(cars);

// let grid = [];
// let numberOfcells = 64;
// let counter = 0;
// let row = [];

// for (let b = 0; b < numberOfcells + 1; b++) {

//     if (counter % 8 === 0) {

//         if (row.length > 0) {
//             grid.push(row);
//         }
//     } row = [];

//     counter++

//     // let tempCounter = counter;
//     row.push(counter);

//     if (counter === numberOfcells) {
//         grid.push(row);
//     }
// } console.table(grid);

// let grid = [];
// let totalCells = 64;
// let counter = 0;
// let row = [];

// for (let i = 0; i <= totalCells; i++) {

//   if (counter % 8 === 0) {
//     if (row.length > 0) {
//       grid.push(row); // add the current completed row to the grid
//     }
//     row = [];
//   }
//   row.push(counter);
//   if (counter === totalCells) {
//     grid.push(row);
//   }
//   counter++;
// }
// console.table(grid);

// FOR OF LOOP
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names) {
//   console.log(name);
// }

// let colors = ["red", "blue", "orange", "black", "magenta"];

// for (contents of colors) {
//     console.log(contents)
// }

// let fruit = {name: "Mango", specie: "German", color: "blue", height: "Short"}

// for (items in fruit) {
//     console.table(fruit[items]);
// }

// "break" is used to terminate code or program while "continue" tells the code or program to skip to the next block.

// for loop Project
// Iterate by 100, any number divisible by 3 write full, any number divisible by 5 write , any number divisible by both write.

// Break

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 4) {
//     break;
//   }
// }

// let num = [];

// for (let a = 10; a <= 100; a += 10) {
//   num.push(a);
//   if (a === 60) {
//     console.log(num);
//     break;
//   }
// }

// let cars = [
//     {model: "Golf", make: "Volkswagen", year: 1999, color: "white"},
//     {model: "Picanto", make: "Kia", year: 2020, color: "red"},
//     {model: "Peugeot", make: "208", year: 2021, color: "blue"},
//     {model: "Fiat", make: "Punto", year: 2020, color: "black"},
//   ];

// for (let a = 0; a < cars.length; a++) {
//     if (cars[a].year >= 1999) {
//         if (cars[a].color === "white") {
//             // alert(`I found your ${cars[a].model}`);
//             console.log("I found your car", cars[a]);
//             break;
//         }
//     }
// }

// Continue

// let cars = [
//   { model: "Golf", make: "Volkswagen", year: 1999, color: "white" },
//   { model: "Picanto", make: "Kia", year: 2020, color: "red" },
//   { model: "Peugeot", make: "208", year: 2021, color: "blue" },
//   { model: "Fiat", make: "Punto", year: 2020, color: "black" },
// ];

// for (let car of cars) {
//     if (car.color !== "blue") {
//         continue;
//     } if (car.year >= 2020) {
//         console.log("We could use this one", car)
//     }
// }

// Break and Continue
// They can be used in a nested loop but its important to note that if a break is used on a nested loop, the outer loop will not break, same for continue.


// let groups = [
//   ["Martin", "Daniel", "Keith"],
//   ["Margot", "Marina", "Ali"],
//   ["Helen", "Jonah", "Sambikos"],
// ];

// for (let b = 0; b < groups.length; b++) {
//   let matches = 0;
//   for (let c = 0; c < groups[b].length; c++) {
//     if (groups[b][c].startsWith("M")) {
//       matches++;
//     } else {
//       continue;
//     }
//     if (matches === 2) {
//       console.log("Found a group with two names starting with ar");
//       console.log(groups[b]);
//       break;
//     }
//   }
// }


// for (let group of groups) {
//   for (let member of group) {
//     if (member.startsWith("M")) {
//       console.log("found one starting with M:", member);
//       break;
//     }
//   }
// }

// for (let group of groups) {
//     for (member of group) {
//         if (member.endsWith("n")) {
//           console.log("found one starting with M:", member);
//         }
//     }
// }


// Self-check quiz

// let step = 3;
// for (let i = 0; i < 1000; i += step) {
//   if (i > 10) {
//     break;
//   }
//   console.log(i);
// }

// const myArray = [1, 5, 7];
// for (el in myArray) {
//   console.log(Number(el));
//   el = Number(el) + 5;
//   console.log(el);
// }
// console.log(myArray);

// let tryArray1 = [5, 10, 20];

// tryArray1.forEach((value, index) => {
//   console.log(index, value)
// })

// for (num in tryArray1) {
//   console.log(Number(num))
//   num = Number(num) + 5;
//   console.log(num)
// }

// while using for in loop, the values are automatically converted to strings. In the code above the values (index number of the values is what for in loop gets for you) are converted to number and 5 is added to it. While in the code below, the value were not converted to number and whatever is concatenated to a string is just added after it.  

// console.log(`Try2`)

// let tryArray2 = [5, 10, 20];

// for (num2 in tryArray2) {
//   console.log(num2);
//   num2 = num2 + 5;
//   console.log(num2)
// }

// let car = {
//   name: "benz",
//   year: 2022
// }

// // console.log(car["year"])
// for (key in car) {
//   console.log(key)
//   console.log(car[key])
// }

// es6

// let array1 = ["apple", "banana"]

// array1 = [...array1, "mango", "orange"];
// console.log(array1);

// let array2 = ["melon", "papaya"];
// let array3 = ["melon", "papaya"];
// console.log([...array2, ...array3, "guava", "berry"]);

// let person = {name: "Gravity", laptop: "HP 250 G1 Notebook PC" };

// let updatedPerson = {...person, city: "Nnewi"}
// console.log(updatedPerson);

// let third = {...updatedPerson, institution: "Icehub", color: "green"}
// console.log(third);

// let fourth = {...third, color: "red"};
// console.log(fourth);

// let fruits = ["apple", "strawberries", "cherry"];
// let [first, second, th3rd] = fruits
// console.log(`first: ${first}, 2nd: ${second}, 3rd: ${th3rd}`);

// //skipping elements
// // To get the 2nd value
// let [, berry] = fruits;
// console.log(`berry: ${berry}`)

let fruit = ["apple", "strawberries", "cherry"];
let [x = "Guava"] = fruit;

function square(x) {
  return x*x;
}

const square1 = (x) => x*x;
console.log(square);

console.log("Welcome Boss");
console.log("Hello World");

// setTimeout
async function wait() {
  setTimeout(() => {
    console.log("")
  })
}