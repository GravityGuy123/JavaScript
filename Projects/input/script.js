// let userInput = prompt('Enter a number and I will tell you whether is even or odd')
// userInput = Number(userInput)

// if (userInput % 2 === 0) {
//     console.log(`${userInput} is an Even Number`)
// } else {
//     console.log(`${userInput} is an Odd Number`)
// }


// // Multiple Line Prompts
// userInput = "Hi there";
// userInput += "\nWhat's your name";
// input = prompt(userInput);

// console.log(`Welcome back ${input}`);


// Try It Yourself
// 7.1. Rental Car: Write a program that asks the user what kind of rental car they would like. Print a message about that car, such as “Let me see if I can find you a Subaru.”
// 7.2. Restaurant Seating: Write a program that asks the user how many people are in their dinner group. If the answer is more than eight, print a message saying they’ll have to wait for a table. Otherwise, report that their table is ready.
// 7.3. Multiples of Ten: Ask the user for a number, and then report whether the number is a multiple of 10 or not.

// // 7.1. Rental Car:
// rentalCar = prompt("What kind of rental car would you like?");
// console.log(`Let me see if I can find you a ${rentalCar}`);

// // 7.2. Restaurant Seating:
// restaurantSitting = prompt("How many people are in your dinner group?");
// restaurantSitting = parseInt(restaurantSitting);

// if (restaurantSitting > 8) {
//     console.log("You’ll have to wait for a table");
// } else {
//     console.log("Your table is ready.");
// }

// // 7.3. Multiples of Ten:
// number = prompt("Enter any number")
// number = Number(number)

// if (number % 10 === 0) {
//     console.log(`The number ${number} is a multiple of 10`);
// } else {
//     console.log(`The number ${number} is not a multiple of 10`);
// }


// let userInput = "\nTell me something, and I will repeat it"
// userInput += "\nEnter 'quit' to end the program."
// let message;

// while (message !== 'quit') {
    //   message = prompt(userInput);

//   // Quit regardless of the case ends the program
//   if (message.toLowerCase() === 'quit') {
    //     console.log("Program ended")
    //     break;
    // }
// console.log(message);
// }


// let userInput = "\nTell me something, and I will repeat it"
// userInput += "\nEnter 'quit' to end the program."

// let message;
// let active = true;

// while (active) {
//     message = prompt(userInput)

//     if (message.toLowerCase() === 'quit') {
//         active = false;
//     } else {
//         console.log(message)
//     }
// }


// Running for as long as the program is true
// let userCity = "\nPlease enter a city you have been to: ";
// userCity += "\nEnter 'quit' to end the program.";

// while (true) {
//     let city = prompt(userCity);

//     if (city.toLowerCase() === "quit") {
//         break;
//     } else {
//         console.log(city)
//     }
// }


// // 7.4. Pizza Toppings:
// let userToppings = "\nPlease enter a pizza topping for your pizza:";
// userToppings += "\nEnter 'quit' to end the program:";

// let message;
// const toppings = []

// while (message != "quit") {
//     message = prompt(userToppings);

//     if (message.toLowerCase() === 'quit') {
//         break;
//     } else {
//         console.log(`I want ${message}`);
//         toppings.push(message)
//     }
// }

// console.log("My toppings are:", toppings);


// // 7.5. Movie Tickets:
// let userAge = prompt("How old are you? ")
// userAge = parseInt(userAge)

// if (userAge < 3) {
//     console.log("Your movie ticket is free")
// } else if (userAge >= 3 && userAge <= 12) {
//     console.log("Your movie ticket is $10")
// } else {
//     console.log("Your movie ticket is $15")
// } 


// 7.6. Three Exits:

// version 1
// // 7.6a.
// let userToppings = "\nPlease enter a pizza topping for your pizza:";
// userToppings += "\nEnter 'quit' to end the program:";

// let message;

// while (message != "quit") {
//     message = prompt(userToppings);

//     if (message.toLowerCase() === 'quit') {
//         break;
//     } else {
//         console.log(`I want ${message}`);
//     }
// }


// // 7.6b.
// let userToppings = "\nPlease enter a pizza topping for your pizza:";
// userToppings += "\nEnter 'quit' to end the program:";

// active = true

// while (active) {
//     pizza_toppings = prompt(userToppings);

//     if (pizza_toppings.toLowerCase() == "quit") {
//         active = false
//     } else {
//         console.log(`I want ${pizza_toppings}`)
//     }
// }


// // 7.6c.
// let userToppings = "\nPlease enter a pizza topping for your pizza:";
// userToppings += "\nEnter 'quit' to end the program:";

// while (true) {
//     pizza_toppings = prompt(userToppings)

//     if (pizza_toppings.toLowerCase() == "quit") {
//         break
//     } else {
//         console.log(`I want ${pizza_toppings}`)
//     }
// }

// // 7.7. Infinity:
// number = 5
// while (number <= 20) {
//     console.log(number)
// }


// let unconfirmedUsers = ["alice", "brian", "candace"];
// let confirmedUsers = [];

// while (unconfirmedUsers) {

//     // the lists starts validating from the end because of pop()
//     const currentUser = unconfirmedUsers.pop()
//     console.log(`Validating: ${currentUser}`)
//     confirmedUsers.push(currentUser)

//     if (unconfirmedUsers.length <= 0) {
//         break;
//     }
// }

// console.log("Confirmed Users:", confirmedUsers)


// // This method is better and more recommended because it doesn't modify the original array and does not include inherited properties.
// let tourResponses = {};

// let isPoll = true;

// while (isPoll) {
//   const name = prompt("\nWhat is your name?");
//   const mountain = prompt("\nWhich mountain do you want to climb today?");

//   tourResponses[name] = mountain;

//   const repeat = prompt("\nDo you want to let someone else vote? (yes / no)");
//   if (repeat.toLowerCase() === "no") {
//     isPoll = false;
//   }
// }

// for (const [name, mountain] of Object.entries(tourResponses)) {
//   console.log(`${name} would like to climb Mount ${mountain}`);
// }
// console.log(`Responses:`, tourResponses);



// // Create an empty object to store users' responses
// let responses = {};

// // A flag (boolean) to control the while loop
// let isPolling = true;

// // Start the polling process
// while (isPolling) {
//   // Ask for username and mountain they want to climb
//   const name = prompt("\nWhat is your name?");
//   const mountain = prompt("\nWhich mountain do you want to climb today?");

//   // Store the response in the object using the name as the key
//   // Example: responses["Alice"] = "Everest"
//   responses[name] = mountain;

//   // Ask if someone else should be allowed to vote
//   const repeate = prompt(
//     "\nDo you want to let someone else to vote? (yes / no)"
//   );

//   // If the user says "no", stop the loop
//   if (repeate.toLowerCase() === "no") {
//     isPolling = false;
//   }
// }

// // Loop through all the responses in the object
// for (let name in responses) {

//     // Display each person's vote
//     console.log(`${name} would like to climb Mount ${responses[name]}`);
// }

// // Log the entire responses object to the console
// console.log(`Responses:`, responses);


// // 7.8. Deli:
// const sandwichOrders = ["ham and cheese", "pastrami", "veggie", "chicken", "tuna", "beef"]
// let finishedSandwiches = []

// for (let sandwichOrder of sandwichOrders) {
//     console.log(`I made your ${sandwichOrder.toUpperCase()} Sandwich`);
//     finishedSandwiches.push(sandwichOrder);
// }

// console.log("Finished Sandwich Orders:", finishedSandwiches);


// // 7.9. No Pastrami:
// const sandwich_orders = ["ham and cheese", "pastrami", "veggie", "chicken", "pastrami", "tuna", "pastrami", "egg"]

// let finished_sandwiches = []

// console.log('\n \nDeli has runout of "pastrami"');

// while (sandwich_orders.includes("pastrami")) {
//     const pastramiIndex = sandwich_orders.indexOf("pastrami");

//     // Loop until all instances of "pastrami" are removed
//     sandwich_orders.splice(pastramiIndex, 1);
// }

// for (let sandwich of sandwich_orders) {
//     console.log(`I made your ${sandwich.toUpperCase()} Sandwich`);
//     finished_sandwiches.push(sandwich)
// }


// console.log("\nFinished Sandwiches:", finished_sandwiches);


// 7.10. Dream Vacation:
const dreamVacation = {}

let isDreamPoll = true

while (isDreamPoll) {
    const name = prompt("\nWhat is your name?")
    const dreamCountry = prompt("\nIf you could visit one place in the world, where would you go?")

    dreamVacation[name] = dreamCountry

    const repeate = prompt("\nWould you like to let someone else vote? (yes / no)");

    if (repeate.toLowerCase() === "no") {
        isDreamPoll = false
    };
};

for (let [name, location] of Object.entries(dreamVacation)) {
    console.log(`${name} would like to visit ${location}`);
};

console.log("Dream Vacation:", dreamVacation)