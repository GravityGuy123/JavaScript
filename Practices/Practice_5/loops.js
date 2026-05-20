// // JavaScript Loops
// 1. while Loop
// 2. do while loop
// 3. for loop
// 4. for of loop - Iterates the elements in an array
// 5. for in loop - Iterates the elements in an object

// while (condition) {
// code to be executed
// }

// do {
// code to be executed
// } while (condition);

// for (intialize; condition; statement) {
// Code
// }

// let a = 0;
// while (a <= 10) {
//     console.log(a);
//     a++
// };

// let z = 10;

// while (z >= 0) {
//     console.log("Z:", z);
//     z--
// };

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Dani", "Louiza", "Jack"];

// let notFound = true;

// while (notFound && someArray.length > 0) {
//     if (someArray[0] !== "Dani") {
//         console.log(someArray[0], "removed");
//         someArray.shift();
//     } else{
//         console.log(`Found ${someArray[0].toUpperCase()}`);
//         notFound = false;
//     }
// }

// // do while loops
// let number;

// do {
//     number = prompt("Please enter a number between 0 and 100. Enter Q to quit");
//     console.log(number);
// } while (number > 0 && number <= 100 && number.toLowerCase().trim() !== "q");

// let counter = 0;
// let step = 5;

// do {
//     console.log(counter);
//     counter += step;
// } while (counter <= 100);

// let count  = 50;

// do {
//     console.log("Count:", count);
//     count -= 5;
// } while (count >= 0);

// let num = 1;
// let step = 1;

// do {
//     console.log(`${num} + ${step} = ${num + step}`);
//     num = num + step;
// } while (num <= 100);

// 8. Password Retry System
// Ask the user to enter a password:
// Allow max 3 attempts
// Stop early if correct

// 👉 Combine loop + counter + condition.
// let password = "Able123"
// let userPassword;
// let maxAttempts = 3;
// let counter = 0;

// do {
//     let attemptsLeft = maxAttempts - counter;
//     userPassword = prompt(`Enter your password - ${attemptsLeft} attempts left. Enter Q to quit.`);

//     if (!userPassword) continue;

//     if (userPassword !== password) {
//         console.log("Incorrect password");
//     } else {
//         console.log("Password correct. Access granted!")
//     }

//     counter = counter += 1;
// } while (userPassword !== password && counter < maxAttempts && userPassword.toLowerCase() !== "q");

// if (counter === maxAttempts) {
//     console.log("Max attempts reached. Access denied.")
// }

// // For Loops

// // Incrementing from 0 - 10
// for (let i = 0; i <= 10; i++) {
//     if (i !== 0){
//         console.log(i);
//     }
// }

// // Incrementing from 10 - 100
// for (let a = 10; a <= 100; a += 10) {
//     console.log(a);
// }

// // Incrementing from 100 - 10
// for (let z = 100; z >= 10; z -= 10) {
//     console.log(z);
// }

// let myWork = [];
// console.log("My First Work", myWork);

// for (let obj = 1; obj <= 10; obj++) {
//     let lessonStatus = obj % 2 === 0 ? false : true;

//     let lesson = {name: `Lesson ${obj}`, status: lessonStatus};

//     myWork.push(lesson)
// }

// console.log("My Final Work", myWork);

// // NESTED LOOPS
// let arrOfArrays = [];

// for (let i = 0; i < 3; i++){
//     arrOfArrays.push([]);

//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//     }
// }

// console.log(arrOfArrays);

// for (let n = 2; n <= 20; n +=2) {
//     console.log(n);
// }

// let square = [];

// for (let s = 1; s <= 10; s++) {
//     console.log(s ** 2);
//     square.push(s ** 2);
// }

// console.log(square);

// let s = 1;

// while (s <= 10) {
//     console.log("While:", s ** 2);

//     s++;
// }

// console.log("Square:", 3 ** 2);

// let ar1 = [];

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`Row ${i}, Col ${j}`);
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(`I: ${i} - J: ${j}`);
//     }
// }

// let ar1 = [];

// for (let a = 0; a < 3; a++) {
//     ar1.push([]);

//     for (let b = 5; b <= 50; b += 10) {
//         ar1[a].push(b);
//     }
// }

// console.log(ar1);
// console.table(ar1);

// // 1. Create empty array to hold the table
// let myTable = [];

// // 2. Set number of rows and columns
// let rows = 3;
// let cols = 4;

// // 3. Counter for cell values
// let counter = 0;

// // 4. Outer loop → rows
// for (let i = 0; i < rows; i++) {

//     // Temporary array for each row
//     let tempTable = [];

//     // 5. Inner loop → columns
//     for (let j = 0; j < cols; j++) {

//         // 6. Increase counter for each cell
//         counter++;

//         // 7. Push value into row
//         tempTable.push(counter);
//     }

//     // 8. Push completed row into main table
//     myTable.push(tempTable);
// }

// // 9. Display result as a table
// console.table(myTable);

// let names = ["Cee", "Joe", "Max", "Bob", "Jair"];
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let n = 0; n < names.length; n++) {
//     console.log(names[n]);
// }

// let tempTable = [];

// for (let t = 0; t < names.length; t++) {
//     tempTable.push([])

//     for (let i = 0; i < names.length; i++) {
//         tempTable[t].push(names[i]);
//     }
// }

// console.table(tempTable);

// for (let n = 0; n < names.length; n++) {
//     console.log(`Hello ${names[n]}`);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let j = 0; j < names.length; j++) {
//     const isStartWithM = names[j].startsWith("M") ? delete names[j] : console.log(`Hello ${names[j]}`);

//     // console.log(isStartWithM);
// }

// for (let i = 0; i < names.length; i++) {
//     if (names[i].startsWith("M")) {
//         names[i] = "Barry";
//     }

//     console.log("Hello", names[i]);
// }

// let grid = [];
// let numOfCells = 64;
// let counter = 0;

// let row = [];

// for (let g = 0; g < numOfCells; g++) {
//     if (counter % 8 === 0) {
//         if (row.length > 0) {
//             grid.push(row);
//         }

//         row = [];
//     }

//     // console.log(counter);

//     row.push(counter);

//     if (counter === numOfCells) {
//         grid.push(row);
//     }

//     counter++
// }

// console.log(grid);
// console.table(grid);

// let grid = [];
// let numOfCells = 64;
// let columns = 8;

// let row = [];

// for (let i = 0; i < numOfCells; i++) {
//     row.push(i);

//     // when row is full, push it into grid
//     if ((i + 1) % columns === 0) {
//         grid.push(row);
//         row = [];
//     }
// }

// // optional: push leftover row (if grid isn't perfectly divisible)
// if (row.length > 0) {
//     grid.push(row);
// }

// console.log(grid);
// console.table(grid);

// // NB:
// // 1. In the absence of start and end indexes, it copies from the beginning to end of the sliced array.
// // 2. If only the start index is specified, the copies from the start index to the end of the sliced array.
// // 3. If both start and end indexes are specified, it copies and stops an index before the specified end index.

// let colors = ["Red", "Blue", "Green", "Yellow", "Black"];
// console.log("Colors Array", colors);

// let part = colors.slice(1, 4);
// console.log("Part Array", part);

// let names = ["John", "Mary", "Paul", "Grace", "David"];
// console.log("Names Array", names);

// let result = names.slice(2);
// console.log(result);

// // For of Loop - Iterates the elements in an array
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let name of names) {
//     console.log("Xup", name);
// }

// let emptyArray = [];

// for (let i = 1; i <= 10; i++) {
//   emptyArray.push(i);
// }

// console.log("Empty Array:", emptyArray);

// for (empty of emptyArray) {
//   console.log("Counting ...", empty);

//   if (empty === 10) {
//     console.log("End of count!");
//   }
// }

// // For in Loop - Iterates the elements in an object
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };

// for (carProp in car) {
//   // console.log("Car Props");

//   // Logs the properties
//   console.log(carProp);

//   // Logs the values
//   console.log(car[carProp]);

//   // Logs the both
//   // console.log(`${carProp} - ${car[carProp]}`);
// }

// const friend = {
//   name: "Clara",
//   height: "5' 10",
//   from: "Uli Anambra State"
// }

// let friendDatas = [];

// for (myFriend in friend) {
//   console.log(`${myFriend} - ${friend[myFriend]}`);
//   friendDatas.push(friend[myFriend]);
// };

// console.log("Clara's Info:", friendDatas);

// // Converting Objects to Arrays
// let claraProps = Object.keys(friend);
// let claraValues = Object.values(friend);
// let claraPropsValues = Object.entries(friend);

// console.log("Clara's Props:", claraProps);
// console.log("Clara's Values:", claraValues);
// console.log("Clara's Props & Values:", claraPropsValues);

// for (myFriend in friend) {
//   console.log(`${myFriend} - ${friend[myFriend]}`)
// }

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };

// for (let [key, value] of Object.entries(car)) {
//   // console.log(key, "- ", value)
//   console.log(`${key.toUpperCase()} - ${value}`);
// }

// console.log("\n");

// let [num1, num2] = [3, 5];
// console.log("Num 1:", num1);

// console.log("Num 2:", num2);

// const [counter, step, row] = [0, 1, 8];

// let cars = [
//   { model: "Golf", make: "Volkswagen", year: 1999, color: "black"},

//   { model: "Picanto", make: "Kia", year: 2020, color: "red"},

//   { model: "Peugeot", make: "208", year: 2021, color: "black"},

//   { model: "Fiat", make: "Punto", year: 2020, color: "black"},
// ];

// const age = 13, height = 10;
// const [age, height] = [13, 10]

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].model.toLowerCase() === "picanto") {
//     // console.log("Found my car", cars[i]);

//     for (const [key, value] of Object.entries(cars[i])) {
//       console.log(`${key.toUpperCase()} - ${value}`);
//     }

//     break;
//   }
// }

// console.log("\n \n");

// for (const car of cars) {
//   if (car.model.toLowerCase() === "picanto") {

//     for (const [key, value] of Object.entries(car)) {
//       console.log(`${key.toUpperCase()} - ${value}`);
//     }

//     break;
//   }
// }

// let colors = ['red', 'blue', 'green', 'white'];
// console.log("\nRemoving colors ...")

// let counter = 1;
// let colorObj = {};

// while (colors.length > 0) {
//   let removedColor = colors.shift();
//   console.log("Removed", removedColor.toUpperCase());

//   colorObj[`Color ${counter}`] = removedColor;
//   counter++

// }

// console.log(colorObj);
// console.log("Colors", colors);

// console.log("\nLooping through the color object and pushing into the colors list\n");

// for (const color of Object.values(colorObj)) {
//   colors.push(color);
// }

// console.log("Colors", colors);

// let cars = [
//   { model: "Golf", make: "Volkswagen", year: 1999, color: "black"},

//   { model: "Picanto", make: "Kia", year: 2020, color: "red"},

//   { model: "Peugeot", make: "208", year: 2021, color: "black"},

//   { model: "Fiat", make: "Punto", year: 2020, color: "black"},
// ];

// for (const car of cars) {
//   if (car.make.toLowerCase() === "volkswagen") {
//     for (const [key, value] of Object.entries(car)) {
//       console.log(`${key} - ${value}`);
//     }

//     console.log("\nCar Object:", car);

//     break;
//   }
// }

// for (let j = 0; j < cars.length; j++) {
//   if (cars[j].make.toLowerCase() === "punto") {
//     console.log("\n \n")
//     for (const [key, value] of Object.entries(cars[j])) {
//       console.log(`${key} - ${value}`);
//     }

//     console.log("\nCar Object:", cars[j]);
//     break;
//   }
// }

// let count = 1;
// let count2 = 1;

// while (count < 50) {
//   count++

//   if (count % 2 !== 0) {
//     continue;
//   };

//   console.log(count);
// }

// console.log("\n \n");

// while (count2 <= 50) {
//   if (count2 % 2 !== 0) {
//     console.log(count2);
//   };

//   count2++
// };

// // 1.
// let string;

// // 2.
// let skipNumber = 3;

// // 3.
// for (let i = 1; i <= 10; i++) {
//   // 4.
//   if (i === skipNumber) {
//     // 5.
//     continue;
//   }

//   // 6.
//   string = i;
//   console.log("Counting ....", string);
// }

// console.log("String Value:", string);

// for (let i = 1; i <= 10; i++) {
//   // 4.
//   if (i === skipNumber) {
//     // 5.
//     break;
//   }

//   // 6.
//   string = i;
//   console.log("Counting ....", string);
// }

// console.log("String Value:", string);

// let groups = [
//   ["Martin", "Daniel", "Keith"],
//   ["Margot", "Marina", "Ali"],
//   ["Helen", "Jonah", "Sambikos"],
// ];

// for (let group of groups) {
//   for (let names of group) {
//     console.log(names);
//   }
  
//   console.log("\n")
// }

// let greetings = ["Hello", "Hi", "Xup"];
// // let randomGreetingsNumber = Math.floor(Math.random() * 3);
// // let randomGreetings = greetings[randomGreetingsNumber];

// for (let group of groups) {
//   if (group.includes("Jonah")) {
//     for (let g = 0; g < greetings.length; g++) {
//       console.log(`${greetings[g]}, ${group[g]}!`);
//     };

//     break;
//   } 
// }


let multiplicationTable = [];
let value = 30;

for (let o = 5; o <= value; o += 5) {
  let temp = [];
  // temp.push(o);

  for (let i = 4; i <= 15; i += 4) {
    temp.push(o * i);
    multiplicationTable.push(temp);
  }
}

console.table(multiplicationTable);