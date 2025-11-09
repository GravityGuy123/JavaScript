// // Functions

// // Types of Functions
// Named Function (Function with a name or a known function)
// Arrow Function
// Anonymous Function (Function without a name or an unknown function)
// Immediately Invoked Function Expression (IIFE) (Function that runs immediately it's written)


// // Named Function
// function greet() {
//     console.log("Hello");
// };

// greet();

// function sayHello(name) {
//     console.log("\nHello", name);
// };

// sayHello("GravityGuy");


// // 8.1 Message:
// function displayMessage() {
//     return('Am learning JavaScript Functions');
// };

// console.log(displayMessage());

// // 8.2. Favorite Book:
// function favoriteBook(title) {
//     console.log(`One of my favorite books is "${title}".`);
// };

// favoriteBook("The legacy of Yangcheng");


// const getRectArea = function(width, height) {
//     console.log(`${width} * ${height} = ${width * height}`);
// }

// const userWidth = parseInt(prompt("Enter your width"))
// const userHeight = parseInt(prompt("Enter your height"))

// getRectArea(userWidth, userHeight)

// const getRectArea = (w, h) => {
//     console.log(`${w} * ${h} = ${w * h}`);
// };

// getRectArea(2, 9);


// // Ways of declaring a function
// // 1. Named Functions
// function area(w, b) {
//     return w * b
// };

// console.log(area(4, 5));


// // 2. ANonymous Functions
// const area = function (w, h) {
//     console.log(w * h)
// };

// area(1, 7);


// // 3. Arrow Functions
// const area = (w, h) => {
//     console.log(w * h)
// };

// area(3, 7);

// // or

// const area = (w, h) => console.log(w * h);
// area(2, 5);


// // 4. Immediately Invoked Function (IIFE) Functions
// // a. 
// (function(name) {
//     console.log("Hi", name)
// })("Dani");


// // b. 
// ((name) => {
//     console.log("Hello", name)
// })('Mike');


// 5. Foreach
// let myColors = ["red", "blue", "green", "white", "orange", "purple", "black"];
// myColors.forEach((color) => console.log(color));


// function addNum(a, b) {
//     console.log(a + b);
// };

// addNum(3, 4)


// // 1. Array of descriptive words
// const descriptiveWords = ["vibrant", "sleek", "modern", "bold", "minimalist", "elegant", "dynamic", "creative", "innovative", "aesthetic", "stunning", "professional", "unique", "refined", "energetic", "charming", "sophisticated", "graceful", "eye-catching", "fresh", "artistic", "powerful", "captivating", "stylish", "versatile", "clean", "bright", "luxurious", "radiant", "polished"];

// // 2. Get user's name
// const userName = prompt("What is your name?");

// // 3. Select a random word from the array
// let randomWordIndex = Math.floor(Math.random() * descriptiveWords.length + 1);
// let randomWords = descriptiveWords[randomWordIndex]

// // 4. Function to describe the user with the random word
// function describeWords(name, word) {

//     console.log(`${name} is ${word}`)
// }

// // 5. Call the function with user's name and the random word
// describeWords(userName, randomWords);


// // 1.
// const num1 = 5;
// const num2 = 9;

// // 2.
// const add = "+"

// // 3.
// function addNum(a, b) {
//     console.log(`${a} ${add} ${b} = ${a + b}`);
// };

// addNum(num1, num2)


// Foreach Function
// let myColors = ["red", "blue", "green", "white", "orange", "purple", "black"];
// myColors.forEach((m) => console.log(`I love the color ${m}`))


// // Spread Operator
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very","powerful"]
// console.log("Message:", message)


// function addNum(a, b) {
//     console.log(a + b);
// }
// let nums = [3, 4];
// addNum(...nums)


// // Multiple Spread Operators
// function addFourNumbers(x, y, z, a) {
//   console.log(x + y + z + a);
// }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);


// // NB: If you send more parameter values that the number of arguments the function is supposed to take, the function just takes as much as it needs (equivalent to the arguments) and ignores the rest as if it wasn't there to begin with. As shown below
// function someFunction(param1, param2) {
//   console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?"); // Logs "hi there"


// // Rest parameter
// function someFunction(param1, ...param2) {
//   console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");


// // Returning function values
// function addNum(a, b) {
//     console.log(`${a} + ${b} = ${a + b}`);

//     // Without return statement, the function returns undefined by default
//     return a + b;
// }

// // let favoriteSubject = prompt("What is your favorite subject?");
// // let result = addNum(4, 5);
// // console.log(result);

// let resultArr = [];

// for (let i = 0; i < 10; i++) {
//     let result = addNum(i, 2 * i);
//     resultArr.push(result);
// };

// console.log("Result Array:", resultArr);


// // 1.
// let numbers = [];

// // 3.
// function addNumbers(a, b) {
//     console.log(`${a} ${b} = ${a + b}`)

//     return a + b
// }

// // 2.
// for (let i = 0; i < 10; i++) {
//     // i = i * 5 + i * i;

//     // 4.
//     let result = addNumbers(i * 5, i * i);
    
//     // 5.
//     numbers.push(result)
// };

// // 6.
// console.log("Numbers Array:", numbers);


// // Returning with arrow functions
// let addNumbers = (x, y) => x + y;

// let result = addNumbers(12, 15);
// console.log(result);

// let addTwoNumbers = (x, y) => {
//   console.log("Adding...");
//   return x + y;
// };


// // Variable scope in functions
// // Local variables in functions

// function testAvailability(x) {
//     console.log("Available here:", x);
// };

// testAvailability("Hi!");
// console.log("Not available here:", x); // Uncaught ReferenceError


// function testAvailability() {
//   let y = "Local variable!";
//   console.log("Available here:", y);
// }
// testAvailability();
// console.log("Not available here:", y); // Uncaught ReferenceError
// // A variable define within a function is not available outside


// function testAvailability() {
//   let y = "I'll return";
//   console.log("Y Available here:", y);
//   return y;
// };

// let z = testAvailability();
// console.log("Z Outside the function:", z);
// console.log("Y Not available here:", y);


// // Immediately invoked function expression (IIFE)
// (function () {
//     console.log("Hello")
// })();

// // Arrow function format
// (() => {
//     console.log("Hi");
// })();


// // 1.
// let stringValue = 1000;

// // 2.
// (function () {
//     stringValue = 700;
//     console.log(stringValue)
// })();

// // 3.
// let result = (() => {
//     stringValue = 300;

//     return stringValue;
// })();

// console.log(result);

// // 4.
// const anonymousFunc = function (value) {
//     let stringValue = value;
//     console.log(stringValue)
// };

// anonymousFunc("same");


// // Recursive functions
// function getRecursive(nr) {
//     console.log(nr);

//     if (nr > 0) {
//         getRecursive(--nr)
//     };
// };

// getRecursive(5);


// function count(value) {
//     console.log(value)

//     if (value < 10) {
//         count(++value)
//     };
// };

// count(1);


// function countDown(value) {
//     console.log(value);

//     if (value > 0) {
//         countDown(value -= 10)
//     };
// };

// countDown(100);


// function count(value) {
//     console.log(value);

//     if (value < 20) {
//         count(value += 5);
//     }
// };

// count(0);


// // 1.
// function getRecursive(value) {
//     console.log(value);

//     if (value === 0) {

//         // 2.
//         return value = 1
//     };
// };

// function countUp(value) {
//   console.log(value);

//   if (value < 10) {
//     countUp(++value);
//   }
// }

// countUp(1);

// // 8.3
// function makeShirt(size, message) {
//   console.log(`\nA ${size} sized shized shirt`);
//   console.log(`A ${size} sized ${message}`);
// };

// makeShirt('small', 'purple shirt');

// // 8.4
// function make_shirt(size = "large", message = "I love Python.") {
//   console.log(`\nA ${size} sized shized shirt`);
//   console.log(`A ${size} sized ${message}`);
// };

// make_shirt();
// makeShirt((size = "medium"), (message = "I love Python."));
// makeShirt("small", "pink shirt.");


// // 8.5
// function describeCity(cityName, country) {
//   console.log(`\n \n${cityName} is a city in ${country}`);
// };

// describeCity("Nnewi", "Nigeria");
// describeCity("Miami", "America");
// describeCity("Queensland", "Australia");


// function formattedName(firstName, lastName, middleName = '') {
//   if (middleName) {
//     fullName = `${firstName} ${middleName} ${lastName}`;
//   } else {
//     fullName = `${firstName} ${lastName}`;
//   };

//   return fullName.toUpperCase()
// };

// const name1 = formattedName('Jimi', "Hendrix");
// console.log(name1);

// const name2 = formattedName('Jimi', 'Hooker', "Hendrix");
// console.log(name2);


// function getName(firstName, lastName) {
//   const person = {firstname: firstName, lastname: lastName};

//   return person;
// };

// const person1 = getName('Jimi', 'Neutron');
// console.log(person1);


// function buildName(firstName, lastName, age = null) {
//   let person;

//   if (age) {
//     person = {firstname: firstName, lastname: lastName, age: age};
//   } else {
//     person = { firstname: firstName, lastname: lastName };
//   };

//   return person
// };

// const person1 = buildName('Jimi', 'Neutron');
// console.log(person1);

// const person2 = buildName('Jimi', 'Neutron', 19);
// console.log(person2);


// function makeAlbum(artistName, albumTitle) {
//   const album = {artistname: artistName, albumtitle: albumTitle}

//   return album
// };

// const music1 = makeAlbum('akon', 'escape');
// const music2 = makeAlbum('sia', 'suitcase');
// const music3 = makeAlbum('blackpink', 'boombayah');

// console.log(music1, music2, music3)


// function printDesigns(unprinted, completed) {
//   while (unprinted.length > 0) {
//     const currentDesign = unprinted.pop();
//     console.log(`Printing: ${currentDesign}`)
//     completed.push(currentDesign);
//   };
// };

// function showCompletedDesigns(completed) {
//   console.log("\nThe following models have been printed:");
  
//   for (let complete of completed) {
//     console.log(complete)
//   };
// };

// const unprintedDesigns = ["phone case", "robot pendant", "dodecahedron"];
// const completedDesigns = [];

// printDesigns(unprintedDesigns, completedDesigns);
// showCompletedDesigns(completedDesigns);


// Types of Arguments


// // Arbitrary (variable) Arguments
// // Getting as many arguments as possible as in cases when you don't know how many argument that will be received.
// // 1. The old way
// function makePizza() {
//   console.log(arguments);
// }

// makePizza("pepperoni", "mushrooms", "extra cheese");


// // 2. The modern way: Rest parameters (...args)
// function makePizza(...toppings) {
//   console.log(toppings);
// };

// makePizza("pepperoni");
// makePizza("mushrooms", "green peppers", "extra cheese");


// function makeSandwich(...toppings) {
//   console.log('\nMaking sandwich with the following toppings:')

//   for (let topping of toppings) {
//     console.log(topping)
//   }
// };

// makeSandwich("lettuce");
// makeSandwich("tomato", "cucumber", "pickles", "onions");
// makeSandwich("bell peppers", "spinach", "avocado");


// // 🧠 Example with fixed + arbitrary arguments
// function orderPizza(size, crust, ...toppings) {
//   console.log(`Size: ${size}`);
//   console.log(`Crust: ${crust}`);
//   console.log(`Toppings: ${toppings.join(", ")}`);
// }

// orderPizza("Large", "Thin", "Cheese", "Tomato", "Olives");

// // 🧩 3️⃣ Arbitrary keyword-style arguments in JS
// function createProfile({ name, age, location }) {
//   console.log(name, age, location);
// }

// createProfile({ name: "Simon", age: 25, location: "Nigeria" });


// function buildProfile(first, last, ...userProfile) {
//   console.log(`firstName: ${first}, lastName: {${last}}`)
// }

function buildProfile(userProfile) {
  const { firstName, lastName, ...userInfo } = userProfile
  
  return {firstName, lastName, ...userInfo};
};

const profile = buildProfile({firstName: 'Gravity', lastName: 'Guy', state: 'Anambra', country: 'Nigeria'})
console.log(profile);



function makeCar(carDetails) {
  const { maufacturer, model, ...carInfo }= carDetails;

  return {maufacturer, model, ...carInfo}
};

const car = makeCar({maufacturer: 'subaru', model: 'outback', color: 'blue', towPackage: true});
console.log(car);