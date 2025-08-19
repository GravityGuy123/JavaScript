// Assignment
// 1a. Write a loop that runs from 1 to 100.
// 1b. if it is divisible by 3 print foo.
// 1c. if it is divisible by 5 print Bar.
// 1d. if it is divisible by both print FooBar.

// // 1a.
// for (let r = 0; r <= 100; r++) {

//   // 1d.
//   if (r % 3 === 0 && r % 5 === 0) {
//     console.log(`${r}: FooBar`);

//     // 1b.
//   } else if (r % 3 === 0){
//     console.log(`${r}: Foo`);

//     // 1c.
//   } else if (r % 5) {
//     console.log(`${r}: Bar`)
//   } else {
//     console.log(`${r}: Neither`)
//   }
// }


// for (let n = 1; n <= 100; n++) {
//   console.log(
//     `${n}: ` +
//       (n % 3 === 0 && n % 5 === 0
//         ? "FooBar"
//         : n % 3 === 0
//         ? "Foo"
//         : n % 5 === 0
//         ? "Bar"
//         : "Neither")
//   );
// }

// 2. Write a function that will take an integer and return a boolean and the body of the function that is the input will evaluate if it is even and return true and if it is odd return false.

function isEven() {
  const input = Number(prompt("Enter any number"));

  if (Number.isNaN(input)) {
    console.log("Entry cannot be empty and input must be a number.");
    return false;
  } else {
    if (input % 2 === 0) {
      return true; // Even number
    } else {
      return false; // Odd number
    }
  }
}
console.log(isEven());


// function isEven() {
//   const userInput = Number(prompt("Enter any number"));
//   if (!userInput) {
//     console.log("Entry cannot be empty.");
//     return false;
//   } else if (Number.isNaN(userInput)) {
//     console.log("Input must be a num.");
//     return false;
//   } else {
//     if (userInput % 2 === 0) {
//       console.log(`${userInput} is an even number`);
//       return true;
//     } else {
//       console.log(`${userInput} is an odd number.`)
//       return false;
//     }
//   }
// }
// console.log(isEven());



// function isEven() {
//   const input = Number(prompt("Enter any number"));

//   if (!Number.isInteger(input)) {
//     console.log("Entry cannot be empty and input must be an integer.");
//     return false; // Explicit return for invalid input
//   }

//   return input % 2 === 0;
// }

// console.log(isEven());



// isInteger is used to check for integers and returns false if the value isn't an integer.


// 3. Write a function that takes an integer and return a boolean. If it is a prime number return true and if it is not return false.


// function isPrime() {
  // const input = Number(prompt("Enter any number!"));

//   if (isNaN(input)) {
//     console.log("Entry cannot be empty and value must be a number.");
//     return false;
//   }

//   if (input <= 1) return false; // 0, 1, and negatives are not prime

//   for (let i = 2; i < input; i++) {
//     // loop from 2 to input-1
//     if (input % i === 0) {
//       return false; // found a divisor
//     }
//   }

//   return true; // no divisor found → prime
// }
// console.log(isPrime());

// Example use




// function isPrime() {
//   const input = parseInt(prompt("Enter any number!"));

//   if (isNaN(input)) {
//     console.log("Entry cannot be empty and value must be a number.");
//     return false;
//   }

//   if (input <= 1) return false; // 0, 1, negatives are not prime

//   for (let i = 2; i <= Math.sqrt(input); i++) {
//     if (input % i === 0) {
//       return false; // Found a divisor → not prime
//     }
//   }

//   return true; // No divisors found → prime
// }

// // Example use
// console.log(isPrime());



function isPrime() {
  const userInput = Number(prompt("Enter any number"));

  if (Number.isNaN(userInput)) {
    console.log("Input must be a valid number.");
    return false;
  } else if (!userInput) {
    console.log("Entry cannot be empty.");
    return false;
  } else if (Number.isNaN(userInput)) {
    console.log("Input must be a valid number.");
    return false;
  } else {
    if (userInput <= 1) {
      // 0, 1, and negatives are not prime
      console.log(`${userInput} is not a prime number.`);
      return false;
    } else {
      for (let p = 2; p < userInput; p++) {
        // loop from 2 to input-1
        if (userInput % 2 === 0) {
          // found a divisor
          console.log(`${userInput} is not a prime number.`);
          return false;
        } else {
          // found a non divisor
          console.log(`${userInput} is a prime number.`);
          return true;
        }
      }
    }
  }
}
console.log(isPrime());


// let web_dev = ["Edu", "Gravity", "Chioma", "Mega-Pips", "Ifenna"];
// for (let w = 0; w < web_dev.length; w++) {
//   const Name = web_dev[w]
//   const age = Math.floor(Math.random() * 101)
//   const studentAge = {[Name]: age}
//   console.log(studentAge)
// }

// let web_dev2 = ["Edu", "Gravity", "Chioma", "Mega-Pips", "Ifenna"];
// const dev = [];
// for (let w = 0; w < web_dev2.length; w++) {
//   const Name = web_dev2[w];
//   const Age = Math.floor(Math.random() * 101);
//   const studentAge = {name: Name, age: Age };
//   // console.log(studentAge);
//   dev.push(studentAge)
// }
// console.log("Students:", dev)

// let people = ["Edu", "Gravity", "Chioma", "Mega-Pips", "Ifenna"];

// for (let i = 0; i < people.length; i++) {
//   const name = people[i];
//   const age = Math.floor(Math.random() * 101); // 0–100
//   console.log(`${name} is ${age} years old`);
// }


// const student_age = { Edu: 27 };




const people = ["Mike", "John", "Emma", "Ella", "Simone"];

for (let p = 0; p < people.length; p++) {
  const names = people[p];
  const randomAge= Math.floor(Math.random() * (100 - 20 + 1) + 20);
  const peopleObj = {[names]: randomAge}
  console.log(peopleObj)
}

const p1 = []
for (let y = 0; y < people.length; y++) {
  const names = people[y];
  const randomAge= Math.floor(Math.random() * (100 - 20 + 1) + 20);
  const peopleObj = {name: names, age: randomAge};
  p1.push(peopleObj);
}
console.log("People:", p1);

// // A function to generate a random number between range 20 and 100
// function randomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomBetween(20, 100));




// // Setting range for Math.random
// Math.floor(Math.random() * (max + 1))
// Math.floor(Math.random() * (max - min + 1)) + min
// Where:

// min is the lowest number you want
// max is the highest number you want