// Evaluating a Numbers Game
let userNumber = prompt("Enter any number of choice"); 
userNumber = Number(userNumber);

const randomNumber = Math.floor(Math.random() * 101);

if (!userNumber) {
    alert("Value cannot be empty.");
    console.log("No value entered")
} else if (isNaN(userNumber) ) {
    alert("Pls enter a valid number.");
    console.log("You entered,", userNumber)
} else {
    if (userNumber < randomNumber) {
        alert(`Your number is ${userNumber}, is less than our dynamic number ${randomNumber}`)
        console.log(`Your number is ${userNumber}, is less than our dynamic number ${randomNumber}`)
    } else if (userNumber > randomNumber) {
        alert(`Your number is ${userNumber}, is greater than our dynamic number ${randomNumber}`)
        console.log(`Your number is ${userNumber}, is greater than our dynamic number ${randomNumber}`)
    } else {
        alert(`Your number is ${userNumber}, is equal to our dynamic number ${randomNumber}`)
        console.log(`Your number is ${userNumber}, is equal to our dynamic number ${randomNumber}`)
    }
}