// 5.1
// In this exercise we will create a number guessing game that takes user input and replies based on how accurate the user's guess was.

// 1. Create a variable to be used as the max value for the number guessing game.
// 2. Generate a random number for the solution using Math.random() and Math.floor() . You will also need to add 1 so that the value is returned as 1-[whatever the set max value is]. You can log this value to the console for development to see the value as you create the game, then when the game is complete you can comment out this console output.
// 3. Create a variable that will be used for tracking whether the answer is correct or not and set it to a default Boolean value of false . We can update it to be true if the user guess is a match.
// 4. Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5, and convert the response into a number in order to match the data type of the random number.
// 5. Inside the while loop, check using a condition to see if the prompt value is equal to the solution number. Apply logic such that if the number is correct, you set the status to true and break out of the loop. Provide the player with some feedback as to whether the guess was high or low, and initiate another prompt until the user guesses correctly. In this way we use the loop to keep asking until the solution is correct, and at that point we can stop the iteration of the block of code.

// Step 1: Create a variable to be used as the max value
// let maxValue = 5; // This means the random number will be between 1 and 5

// // Step 2: Generate a random number between 1 and maxValue2
// let solution = Math.floor(Math.random() * maxValue) + 1;

// // (Optional for development) Display the solution in the console
// console.log("Solution (for development):", solution);

// // Step 3: Create a variable to track if the guess is correct
// let isCorrect = false;

// // Step 4: Use a while loop to keep asking the user until they guess correctly
// while (!isCorrect) {
//   // Prompt the user to enter a guess and convert the input to a number
//   let userGuess = Number(prompt(`Guess a number between 1 and ${maxValue2}:`));

//   // Step 5: Check if the guess matches the solution
//   if (userGuess === solution) {
//     alert("🎉 Congratulations! You guessed the correct number!");
//     isCorrect = true; // Set the condition to true so the loop stops
//   } else if (userGuess < solution) {
//     alert("Too low! Try again.");
//   } else if (userGuess > solution) {
//     alert("Too high! Try again.");
//   } else {
//     alert("Invalid input. Please enter a number.");
//   }
// }

// 5.2
// In this exercise, we will create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.
// 1. Set the starting counter to 0
// 2. Create a variable, step , to increase your counter by
// 3. Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop
// 4. Continue to loop until the counter is equal to 100 or more than 100

// Step 1: Set the starting counter to 0
// let counter = 0;

// // Step 2: Create a variable, step, to increase the counter by
// let step = 10;

// // Step 3: Add a do...while loop
// do {
//   // Print the current value of the counter to the console
//   console.log(counter);

//   // Step 3 (continued): Increment the counter by the step amount
//   counter += step;
// } while (counter <= 100); // Step 4: Continue until counter is 100 or more

// Practice exercise 5.3
// In this exercise we will use a for loop to create an array that holds objects. Starting with creating a blank array, the block of code within the loop will create an object that gets inserted into the array.
// 1. Setup a blank array, myWork .
// 2. Using a for loop, create a list of 10 objects, each of which is a numbered lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true / false status for every other item to indicate whether the class will be running this year. For example:
// name: 'Lesson 1', status: true
// 3. You can specify the status by using a ternary operator that checks whether the modulo of the given lesson value is equal to zero and by setting up a Boolean value to alternate the values each iteration.
// 4. Create a lesson using a temporary object variable, containing the name ( lesson with the numeric value) and predefined status (which we set up in the previous step).
// 5. Push the objects to the myWork array.
// 6. Output the array to the console.

// Step 1: Setup a blank array
// let myWork = [];

// // Step 2: Create 10 lesson objects with alternating status and push to array
// for (let i = 1; i <= 10; i++) {

// // Step 3: Determine the status using a ternary operator
//   let status = i % 2 === 0 ? false : true;

// // Step 4: Create a lesson object

//   // let lesson = {
//   //   name: "Lesson " + i, // or (This method or the one below)
//   //   status: status,
//   // };

//   let lesson = {
//     name: `Lesson ${i}`,
//     status: status
//   };

// // Step 5: Push the lesson object to the array
//   myWork.push(lesson);
// }

// // Step 6: Output the array to the console
// console.log(myWork);

// 5.4

// 1. To create a table generator, first create an empty array, myTable , to hold your table data.
// 2. Set variable values for the number of rows and columns. This will allow us to dynamically control how many rows and columns we want within the table. Separating the values from the main code helps make updates to the dimensions easier.
// 3. Set up a counter variable with an initial value of 0 . The counter will be used to set the content and count the values of the cells within the table.
// 4. Create a for loop with conditions to set the number of iterations, and to construct each row of the table. Within it, set up a new temporary array ( tempTable ) to hold each row of data. The columns will be nested within the rows, generating each cell needed for the column.
// 5. Nest a second loop within the first to count the columns. Columns are run within the row loop so that we have a uniform number of columns within the table.
// 6. Increment the main counter each iteration of the inner loop, so that we track a master count of each one of the cells and how many cells are created.
// 7. Push the counter values to the temporary array, tempTable . Since the array is a nested array representing a table, the values of the counter can also be used to illustrate the cell values next to each other in the table. Although these are separate arrays representing new rows, the value of the counter will help illustrate the overall sequence of cells in the final table.

// 1. Create an empty array to hold the table data
// let myTable = [];

// // 2. Set the number of rows and columns (you can change these values)
// let numRows = 4;
// let numCols = 5;

// // 3. Initialize a counter to track cell values
// let counter = 0;

// // 4a. Outer loop for rows
// for (let row = 0; row < numRows; row++) {

// // 4b. Create a temporary array to store each row's data
//   let tempTable = [];

// // 5. Inner loop for columns
//   for (let col = 0; col < numCols; col++) {

// // 6. Increment the counter
//     counter++;

// // 7. Push the counter value into the tempTable (represents a cell)
//     tempTable.push(counter);
//   }

// // 8. Push the completed row (tempTable) into the main table (myTable)
//   myTable.push(tempTable);
// }

// // 9. Display the table structure in the console
// console.table(myTable);

// 5.5
// 1. Create a grid array variable.
// 2. Set a value of 64 for the number of cells.
// 3. Set a counter to 0 .
// 4. Create a global variable to be used for the row array.
// 5. Create a loop that will iterate up to the number of cells you want in the array, plus one to include the zero value. In our example, we would use 64+1.
// 6. Add an outer if statement, which uses modulo to check if the main counter is divisible by 8 or whatever number of columns you want.
// 7. Inside the preceding if statement, add another if statement to check if the row is undefined, indicating whether it is the first run or whether the row is complete. If the row has been defined, then add the row to the main grid array.
// 8. To finish off the outer if statement, if the counter is divisible by 8, clear the row array—it has already been added to the grid by the inner if statement.
// 9. At the end of the for loop, increment of the main counter by 1.
// 10. Set up a temporary variable to hold the value of the counter and push it to the row array.
// 11. Within the loop iteration, check if the value of the counter is equal to the total number of columns you want; if it is, then add the current row to the grid.
// 12. Please note that the extra cell will not be added to the grid since there aren't enough cells to make a new row within the condition that adds the rows to the grid. An alternative solution would be to remove the +1 from the loop condition and add grid.push(row) after the loop is completed, both of which will provide the same solution output.
// 13. Output the grid into the console.

// let grid = [];

// let numberOfcells = 64;

// let counter = 0;

// row = [];

// for (counter = 0; counter < numberOfcells + 1; counter++) {
//   if ( counter % 8 === 0) {
//     console.log(true)
//     if (row = !undefined) {
//       grid.push(row)
//     } else {
//       break;
//     }
//   }
// }

// 1. Create a grid array variable
// let grid = [];

// // 2. Set the number of cells
// let totalCells = 64;

// // 3. Set a counter to 0
// let counter = 0;

// // 4. Create a global variable to be used for the row array
// let row = [];

// // 5. Create a loop that will iterate up to totalCells + 1
// for (let i = 0; i <= totalCells; i++) {
//   // 6. If counter is divisible by 8 (or number of columns)
//   if (counter % 8 === 0) {
//     // 7. Check if row is defined and already has data
//     if (row.length > 0) {
//       grid.push(row); // add the current completed row to the grid
//     }

//     // 8. Clear the row array to start a new row
//     row = [];
//   }

//   // 10. Push the current counter value into the row
//   row.push(counter);

//   // 11. Optional: If it's the last cell, push the final row to the grid
//   if (counter === totalCells) {
//     grid.push(row);
//   }

//   // 9. Increment the main counter
//   counter++;
// }

// // 13. Output the grid to the console
// console.table(grid);
// grid.forEach((e) => console.log(e)); // Lists the process of the entire code.

// let myArray = [];

// for (let x = 0; x <= 10; x++) {
//   myArray.push(x);
// }
// // console.log(myArray)

// for (content of myArray) {
//   console.log(content);
// }

// 5.6
// This exercise will construct an array as it loops through the incrementing values of x. Once the array is done, this exercise also will demonstrate several ways to output array contents.

// 1. Create an empty array
// 2. Run a loop 10 times, adding a new incrementing value to the array
// 3. Log the array into the console
// 4. Use the for loop to iterate through the array (adjust the number of iterations to however many values are in your array) and output into the console
// 5. Use the for of loop to output the value into the console from the array

// let emptyArray = [];

// for (let a = 0; a < 10; a++) {
//   emptyArray.push(a);

// }
// console.log(emptyArray);

// for (let a = 0; a < emptyArray.length; a +=1) {
// }
// console.log(emptyArray);

// for (numbers of emptyArray) {
// }
// console.log(emptyArray);

// 5.7
// In this exercise, we will experiment with looping over objects and internal arrays.
// 1. Create a simple object with three items in it.
// 2. Using the for in loop, get the properties' names and values from the object and output them into the console.
// 3. Create an array containing the same three items. Using either the for loop or the for in loop, output the values from the array into the console.

// let myObject = {name: "Lexus", color: "red", make: "toyota"};

// for (items in myObject) {
//   console.log(`${items}: ${myObject[items]}`);
// }

// 5.8
// This exercise will demonstrate how to create a string with all the digits as it loops through them. We can also set a value to skip by adding a condition that will use continue , skipping the matching condition. A second option is to do the same exercise and use the break keyword.
// 1. Set up a string variable to use as output.
// 2. Select a number to skip, and set that number as a variable.
// 3. Create a for loop that counts to 10.
// 4. Add a condition to check if the value of the looped variable is equal to the number that should be skipped.
// 5. If the number is to be skipped in the condition, continue to the next number.
// 6. As you iterate through the values, append the new count value to the end of the main output variable.
// 7. Output the main variable after the loop completes.
// 8. Reuse the code, but change the continue to break and see the difference. It should now stop at the skip value.

// let outputString = [];

// let skipNumber = 3;

// for (let a = 0; a <= 10; a++) {
//   if (a === skipNumber) {
//     continue;
//   }
//   outputString.push(a);
// }
// console.log(outputString);


// Chapter project
// Math multiplication table
// In this project, you will create a math multiplication table using loops. You can do this using your own creativity or by following some of the following suggested steps:
// 1. Set up a blank array to contain the final multiplication table.
// 2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
// 3. Create an outer for loop to iterate through each row and a temp array to store the row values. Each row will be an array of cells that will be nested into the final table.
// 4. Add an inner for loop for the column values, which will push the multiplied row and column values to the temp array.
// 5. Add the temporary row data that contains the calculated solutions to the main array of the final table. The final result will add a row of values for the calculations.

// let finalTable = [];

// let value = 10;

// for (let row = 0; row < value; row++) {
//   let tempArray = []
//   for (let col = 0; col <= value; col++) {
//     tempArray.push(row, col)
//   }
//   // console.log(tempArray)
//   finalTable.push(tempArray);
// }
// console.table(`${finalTable}`)
// console.table("Final table:", finalTable)


// 1. Set up a blank array to contain the final multiplication table
let multiplicationTable = [];

// 2. Set a value variable to specify how many values to multiply (e.g., 1–10)
let size = 10;

// 3. Outer loop to handle rows
for (let i = 1; i <= size; i++) {
    // Temporary array to store each row
    let row = [];

    // 4. Inner loop to handle columns
    for (let j = 1; j <= size; j++) {
        row.push(i * j); // Multiply row (i) and column (j) values
    }

    // 5. Push the row into the final multiplication table
    multiplicationTable.push(row);
}

// ✅ Display the table in the console
console.log("Multiplication Table:");
multiplicationTable.forEach((row, index) => {
    console.log(`Row ${index + 1}:`, row);
});

