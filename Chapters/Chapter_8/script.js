// 8.1
// Output t e decodeURIComponent() for the string How's%20it%20going%3F to the console. Also, encode the string How's it going? to be output into the console. Create a web URL and encode the URI:
// 1. Add t e strings as variables in the JavaScript code
// 2. Using encodeURIComponent() and decodeURIComponent() output the results into the console
// 3. Create a web URI with request parameters
// http://www.basescripts.com?=Hello World";
// 4. Encode and output the web URI into the console


// 1.
// let howString = "How's%20it%20going%3F";
// let greetString = "How's it going?";

// // 2.
// let encodedHowString = encodeURIComponent(howString);
// let encodedGreetString = encodeURIComponent(greetString);

// let decodedHowString = encodeURIComponent(encodedHowString);
// let decodedGreetString = encodeURIComponent(encodedGreetString);

// console.log("Encoded How String:", encodedHowString)
// console.log("Encoded Greet String:", encodedGreetString)
// console.log("Decoded How String:", decodedHowString)
// console.log("Decoded Greet String:", decodedGreetString)

// // 3.
// let baseUrl = "http://www.basescripts.com?=Hello World"

// // 4.
// let encodeBaseUrl = encodeURIComponent(baseUrl);
// console.log("Encoded Base URL:", encodeBaseUrl);


// 8.2
// Remove duplicates from the array using filter() and indexOf() . The starting array is:

// 1. Create an array of names of people. Make sure you include duplicates. The exercise will remove the duplicate names.
// 2. Using the filter() method, assign the results of each item from the array as arguments within an anonymous function. Using the value, index, and array arguments, return the filtered result. You can set the return value to true temporarily as this will build the new array with all the results in the original array.
// 3. Add a console.log call within the function that will output the index value of the current item in the array. Also add the value so you can see the results of the item value that has the current index number and the first matching result from the array's index value.
// 4. Using indexOf() the current value returns the index value of the item and applies the condition to check to see if it matches the original index value. This condition will only be true on the first result so all subsequent duplicates will be false and not get added to the new array. false will not return the value into the new array. The duplicates will all be false since the indexof() only gets the first match in the array.
// 5. Output the new, unique value array onto the console.

// // 1.
// let names = ["Neche", "GravityGuy", "Nicki", "Philip", "Nicki", "Phil", "Nicki", "Philip"];


// let uniqueNames = names.filter(function(value,
// index, array){
//     console.log(`Value: ${value}, Current Index: ${index}, First Match Index: ${array.indexOf(value)}`);
//     return array.indexOf(value === index);
// });
// console.log("Unique Names:", uniqueNames);



// 8.3
// Using the array map() method, update an array's contents. Take the following steps:
// 1. Create an array of numbers.
// 2. Using the array map method and an anonymous function, return an updated array, multiplying all the numbers in the array by 2. Output the result into the console.
// 3. As an alternative method, use the arrow function format to multiply each element of the array by 2 with the array map() method in one line of code.
// 4. Log the result onto the console.

// // 1.
// const numbers = [1, 4, 7, 2, 9, 5];

// // 2.
// const updatedNumbers = numbers.map(function(u) {return u * 2});
// console.log(updatedNumbers);



// 8.4
// Using string manipulation, create a function that will return a string with the first letter of all the words capitalized and the rest of the letters in lowercase. You should transform the sentence thIs will be capiTalized for each word into This Will Be Capitalized For Each Word :
// 1. Create a string with several words that have letters with different cases, a mix of upper and lowercase words.
// 2. Create a function that gets a string as an argument, which will be the value that we will manipulate.
// 3. In the function first transform everything to lowercase letters.
// 4. Create an empty array that can hold the values of the words when we capitalize them.
// 5. Convert the phrase into words in an array using the split() method.
// 6. Loop through each one of the words that are now in the new array, so you can select each one independently. You can use forEach() for this.
// 7. Using slice() isolate the first letter in each word, then transform it to uppercase. Again using slice() , get the remaining value of the word without including the first letter. Then concatenate the two together to form the word that is now capitalized.
// 8. Add the new capitalized word into the blank array that you created. By the end of the loop you should have an array with all the words as separate items in the new array.
// 9. Take the array of updated words and using the join() method, transform them back into a string with spaces between each word.
// 10. Return the value of the newly updated string with capitalized words that can then be output into the console.


// // 1. Create a string with several words with mixed cases
// let sentence = "thIs will be capiTalized for each word";

// // 2. Create a function that takes a string as an argument
// function capitalizeWords(str) {
  
//   // 3. Transform everything to lowercase
//   str = str.toLowerCase();
  
//   // 4. Create an empty array to hold capitalized words
//   let capitalizedWords = [];
  
//   // 5. Split the string into an array of words
//   let words = str.split(" ");
  
//   // 6. Loop through each word
//   words.forEach(function(word) {
    
//     // 7. Slice first letter, uppercase it, and concatenate with rest of word
//     let capitalized = word.slice(0, 1).toUpperCase() + word.slice(1);
    
//     // 8. Add the capitalized word to the array
//     capitalizedWords.push(capitalized);
//   });
  
//   // 9. Join the array back into a string
//   let finalSentence = capitalizedWords.join(" ");
  
//   // 10. Return the updated string
//   return finalSentence;
// }

// // Output result
// console.log(capitalizeWords(sentence));


// 8.4
// let word = "I love JavaScript";
// 1. Create the previously specified string, and convert it to lowercase.
// 2. Create an array containing the vowels: a, e, i, o, u.
// 3. Loop through each letter you have in the array, and output the current letter into the console so that you can see which letter will be converted.
// 4. Within the loop, using replaceAll() update each vowel substring with the index value of the letter from the vowel array. Using replace() will only replace the first occurrence; if you use replaceAll() this will update all matching results.
// 5. Once the loop completes output the result of the new string into the console.

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names[i] = "Hi " + names[i];
//   console.log(names[i]);
// }

// 1. Create the string and convert to lowercase
let word = "I love JavaScript";
word = word.toLowerCase();

// 2. Create an array of vowels
let vowels = ["a", "e", "i", "o", "u"]

// 3. Loop through each vowel
for (let a = 0; a < vowels.length; a++) {
  let result = vowels[a];
  console.log(`Current vowel: ${result}`);

  // 4. Replace all occurrences of the vowel with its index
  word = word.replaceAll(result, a.toString());
}

// 5. Output the new string
console.log("Final String:", word);