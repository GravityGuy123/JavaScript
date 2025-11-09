// let a = 0;

// while (a <= 10) {
//     console.log(a)
//     print
//     a++
// }

// // Method 1
// const letters = "abcdefghijklmnopqrstuvwxyz";
// for (const l of letters) console.log(l);

// let start = "a".charCodeAt(0); // 97
// let end = "z".charCodeAt(0); // 122

// // Method 2
// for (let i = start; i <= end; i++) {
//   console.log(String.fromCharCode(i));
// }

// let myCars = ["Golf", "Mazda", "Venza", "Benz", "Lexus"];

// let a = 0;

// while (a < myCars.length) {
//     console.log(myCars[a]);
//     a++
// }

// // 1. Create a variable, i , and set its value to zero
// // 2. Start the while loop and check the condition that the value of i is
// // smaller than 10
// // 3. Since the condition is true, the code logs i and increases i by 1
// // 4. The condition gets evaluated again; 1 is still smaller than 10
// // 5. Since the condition is true, the code logs i and increases i by 1
// // 6. The logging and increasing continues until i becomes 10
// // 7. 10 is not smaller than 10, so the loop ends

// // 1.
// let i = 0;

// // 2.
// while (i < 10) {
//     console.log(i)
//     i++
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jac"];
// let notFound = true;

// while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//         console.log(`Found ${someArray[0]}`);
//         notFound = false
//     } else {
//         someArray.shift()
//     }
// }

// // Do While LOOP
// let  num;

// do {
//     num = Number(prompt("Enter any number btw 1 & 100"))
// } while (!(num > 0 && num <= 100))
// console.log(num)

// let num = 100;

// do {
//     console.log(num);
//     num -= 10
// } while (num >= 0)

// let arr = [];

// for (let a = 0; a <= 100; a += 10) {
//     let square = a ** 2
//     console.log(square)
//     arr.push(square)
// }

// let cube = [];

// for (let b = 1; b <= 10; b += 1) {
//     cube.push(b ** 3);
// }
// console.log("Cube", cube);

// let fruits = ["apple", "banana", "orange", "grape"];
// let extraFruits = [];

// for (let e = 0; e < fruits.length; e++) {
//     extraFruits.push(`I love ${fruits[e] + "s"}`)
// }
// console.log("Extra Fruits:", extraFruits);

// // LOOPS AND ARRAYS
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let n = 0; n < names.length; n++) {
//     console.log(`Hi ${names[n]}`)
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < num.length; i++) {
//     console.log("Print Numbers:", num[i])
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let a = 0; a < names.length; a++) {

//     if (names[a] === "Maxime") {
//         names[a] = `I love ${names[a]}`
//     }
//     console.log("Hello " + [names[a]])
// }

// for (let c = 0; c < names.length; c++) {
//     if (names[c].startsWith("M")) {
//         names[c] = "Maximux"
//     }
//     console.log("Hello " + [names[c]])
// }

// let cars = ["Mazda", "Lexus", "Camry", "Toyota", "Benz"];
// for (let c = 0; c < cars.length; c++) {
//     console.log(`I would like to own a ${cars[c]}`)
// }

// // FOR OF LOOP
// // Logging values to the console
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let name of names) {
//     console.log("I am", name);
// };

// for (let num of [1, 2, 3, 4, 5]) {
//     console.log("Num Square:", num ** 2);
// }

// for (let char of "Hello World") {
//     console.log("Char:", char);
// }

// // For In LOOP
// // Logging index to the console
// let cars = ["Mazda", "Lexus", "Camry", "Toyota", "Benz"];

// for (let index in cars) {
//     console.log("Index:", index);
// }

// // Logging keys/properties and values of an object to the console
// let fruit = { name: "Mango", specie: "German", color: "blue", height: "Short" };

// for (let key in fruit) {
//     console.log(`${key}: ${fruit[key]}`);
// }

// let dog = { name: "Tommy", breed: "Bulldog", color: "Black", age: 3 };
// for (const prop in dog) {
//     console.log(`${prop}: ${dog[prop]}`);
// };

// let cat = { name: "Lilly", breed: "Persian", color: "White", age: 2 };

// // Logging specific properties and values of an object to the console
// for (let prop in cat) {
//     if (prop === "color") {
//         console.log(`\n \n${prop}: ${cat[prop]}\n \n`)
//     }
// }

// let numbers = [5, 10, 15, 20, 25, 30];

// for (let index in numbers) {
//     if (index % 2 === 0) {
//         // Finding the modulus of the index and logging only the values with no remainder
//         console.log(`Index: ${index}, Value: ${numbers[index]}`)
//     }
// };

// let cars = {
//     Benz: { name: "Benz", model: "2020", color: "Black", price: 50000 },
//     Lexus: { name: "Lexus", model: "2021", color: "White", price: 60000 },
//     Toyota: { name: "Toyota", model: "2019", color: "Blue", price: 40000 },
//     Mazda: { name: "Mazda", model: "2018", color: "Red", price: 30000 },
//     Audi: { name: "Audi", model: "2022", color: "Grey", price: 70000 }
// };

// for (prop in cars) {
//     console.log(`I drive a ${cars[prop].color} ${cars[prop].name} ${cars[prop].model} which cost $${cars[prop].price}`)

// }

// console.log("\n \n \n Checking infos \n")
// let myCars = {
//   Benz: { name: "Benz", model: "2020", color: "Black", price: 50000 },
//   Lexus: { name: "Lexus", model: "2021", color: "White", price: 60000 },
//   Toyota: { name: "Toyota", model: "2019", color: "Blue", price: 40000 },
//   Mazda: { name: "Mazda", model: "2018", color: "Red", price: 30000 },
//   Audi: { name: "Audi", model: "2022", color: "Grey", price: 70000 },
// };

// for (props in myCars) {
//     console.log(`\n${props}:`)

//     for (info in myCars[props]) {
//         console.log(`${info}: ${myCars[props][info]}`)
//     }
// };

// let animals = {
//     dog: { name: "Tommy", breed: "Bulldog", color: "Black", age: 3 },
//     cat: { name: "Lilly", breed: "Persian", color: "White", age: 2 },
//     rabbit: { name: "Bunny", breed: "Angora", color: "Brown", age: 1 },
//     parrot: { name: "Polly", breed: "Macaw", color: "Green", age: 4 },
//     fish: { name: "Goldie", breed: "Goldfish", color: "Gold", age: 1 },
//     eagle: { name: "Eagly", breed: "Bald Eagle", color: "Brown", age: 5 },
// };

// for (let animal in animals) {
//     console.log(`\n \n${animal}\n \n`);

//     for (let details in animals[animal]) {
//         console.log(`${details}: ${animals[animal][details]}`)
//     }
// };

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let name of names) {
//     console.log("Am", name)
// };

// // Creating an array from Object values
// let car = {model: "Golf", make: "Volkswagen", year: 1999, color: "black"};
// let golf = []

// for (let props in car) {
//     golf.push(car[props])
// }

// console.log("Golf:", golf);

// Looping over objects by converting to an array
// You can use any loop on objects, as soon as you convert the object to an array. This can be done in three ways:
// a. Convert the keys of the object to an array
// b. Convert the values of the object to an array
// c. Convert the key-value entries to an array (containing arrays with two elements: object key and object value)

// Converting object value to an array
// let myCar = {model: "Golf", make: "Volkswagen", year: 1999, color: "black"};

// // .keys grabs the properties/keys of the object
// let arrKeys = Object.keys(myCar)
// console.log("Arr Keys:", arrKeys)

// // Using For of Loop
// for (let carKeys of Object.keys(myCar)) {
//     console.log("CarKeys:", carKeys)
// }

// // .values grabs the values of the object
// for (let values of Object.values(myCar)) {
//   console.log(`Values: ${values}`);
// }

// let arrValues = Object.values(myCar);
// console.log("\n \nArrValues:", arrValues);


// // Looping through object keys & values with a For Loop
let Car = { model: "Golf", make: "Volkswagen", year: 1999, color: "black" };
// let arrKeys = Object.keys(Car);

// for (let i = 0; i < arrKeys.length; i++) {
//     console.log(`${arrKeys[i]}: ${Car[arrKeys[i]]}`)
// };


// // Looping through both properties/keys and values at the same time with For of Loops using .entries()

// // This makes each property with it's value a seperate array (two dimensional array with key-value pairs)
// let arrEntries = Object.entries(Car);
// console.log("ArrEntries:", arrEntries);


// // Looping through with For of Loop
// for (let [key, value] of Object.entries(Car)) {
//     console.log(`\n${key}: ${value}`)
// };


// break and continue
// Two keywords used to control the flow of loops
// break - used to exit a loop and
// continue - used to skip an iteration of a loop


// // break (can be used to quit loops)
// let cars = [
//   {model: "Golf", make: "Volkswagen", year: 1999, color: "black",},
//   {model: "Picanto", make: "Kia", year: 2020, color: "red",},
//   {model: "Peugeot", make: "208", year: 2021, color: "black",},
//   {model: "Fiat", make: "Punto", year: 2020, color: "black",},
// ];

// for (let a = 0; a < cars.length; a++) {
//     if (cars[a].model === "Fiat") {
//         for (let [key, value] of Object.entries(cars[a])) {
//             console.log(`${key}: ${value}`);
//         }
//     }
// };


for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

console.log("\n \n");

// continue (can be used to move to the next iteration)
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let num of numbers) {
    if (num === 50) {
        continue;
        // skips the number 50 and continues with the next iteration
    }
    console.log(num);
}