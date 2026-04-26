// Functions

//Types of Functions
// Named Function (Function with a name or a known function)
// Arrow Function
// Anonymous Function (Function without a name or an unknown function)
// Immediately Invoked Function Expression (IIFE) (Function that runs immediately it's written)

// Named Functions
// function sayHello() {
//     let you = prompt("What is your name?");
//     console.log(`Hello ${you}!`)
//     console.log("Hello", you + "!")
// }

// sayHello();

// function addNum(a, b) {
//     console.log(a + b);
// }

// const num1 = parseInt(prompt("Enter first mumber"));
// const num2 = parseInt(prompt("Enter 2nd mumber"));
// addNum(num1, num2);


// const area = (width, height) => {
//     console.log(width * height);
//     return width * height;
// }

// area(3, 5);


// // 6.1
// function addNum(a, b) {
//   return a + b;
// }

// const [num1, num2] = [3, 9];
// console.log("First Call:", addNum(num1, num2));
// console.log("2nd Call:", addNum(1, 4));


// 6.2
// 1.
const descriptiveWords = [
   "amazing", "brilliant", "creative", "dynamic", "elegant", "fantastic", "graceful", "helpful", "innovative", "joyful",

 "reliable", "scalable", "secure", "robust", "flexible", "optimized", "modern", "intuitive", "responsive",

 "honest", "patient", "confident", "curious", "thoughtful", "energetic", "focused", "calm", "bold",
 
 "sleek", "minimal", "vibrant", "clean", "sharp", "smooth", "balanced", "bright", "subtle", "refined",

 "happy", "excited", "peaceful", "hopeful", "proud", "relaxed", "motivated", "inspired", "grateful", "confident"
];

// 2.
function userDescription() {
  const userName = prompt("What is your name?");

  let randomValueIndex = Math.floor(Math.random() * descriptiveWords.length);
  let randomValue = descriptiveWords[randomValueIndex];
  console.log(`${userName} is ${randomValue}`);
};

userDescription()