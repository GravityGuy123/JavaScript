// // JavaScript Loops
// 1. while Loop
// 2. do while loop
// 3. for loop
// 4. for in loop
// 5. for of loop


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


let arrOfArrays = [];

for (let i = 0; i < 3; i++){
    arrOfArrays.push([]);

    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}

console.log(arrOfArrays);