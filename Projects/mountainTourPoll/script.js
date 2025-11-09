// This method is better and more recommended because it doesn't modify the original array and does not include inherited properties.
let tourResponses = {};

let isPoll = true;

while (isPoll) {
  const name = prompt("\nWhat is your name?");
  const mountain = prompt("\nWhich mountain do you want to climb today?");

  tourResponses[name] = mountain;

  const repeat = prompt("\nDo you want to let someone else vote? (yes / no)");
  if (repeat.toLowerCase() === "no") {
    isPoll = false;
  }
}

for (const [name, mountain] of Object.entries(tourResponses)) {
  console.log(`${name} would like to climb Mount ${mountain}`);
}
console.log(`Responses:`, tourResponses);



// Create an empty object to store users' responses
let responses = {};

// A flag (boolean) to control the while loop
let isPolling = true;

// Start the polling process
while (isPolling) {
  // Ask for username and mountain they want to climb
  const name = prompt("\nWhat is your name?");
  const mountain = prompt("\nWhich mountain do you want to climb today?");

  // Store the response in the object using the name as the key
  // Example: responses["Alice"] = "Everest"
  responses[name] = mountain;

  // Ask if someone else should be allowed to vote
  const repeate = prompt(
    "\nDo you want to let someone else to vote? (yes / no)"
  );

  // If the user says "no", stop the loop
  if (repeate.toLowerCase() === "no") {
    isPolling = false;
  }
}

// Loop through all the responses in the object
for (let name in responses) {
  // Display each person's vote
  console.log(`${name} would like to climb Mount ${responses[name]}`);
}

// Log the entire responses object to the console
console.log(`Responses:`, responses);
