// // Built-In JavaScript Methods
// let s = "Hello";
// console.log(
//   s
//     .concat(" there!")
//     .toUpperCase()
//     .replace("THERE", "you")
//     .concat(" You're amazing!")
// );


// let loveMessage = "I love you baby";
// console.log(loveMessage.replace("baby", "ella"));

// let num1 = [1, 2, 3, 4, 5, 6];

// // create a new array with for loop
// let squares = [];

// for (let a = 0; a < squares.length; a++) {
//     squares.push(Math.pow(num1[a], 2));
// }

// console.log(squares);

// let mapSquares = num1.map(n => n < 4);
// console.log(mapSquares);

// let filterNums = [];
// console.log(filterNums);

// const products = [
//     {title: "Cabbage", id: 1, price: 4500},
//     {title: "Garlic", id: 2, price: 9000},
//     {title: "Apple", id: 3, price: 3000}
// ];
// console.log(products);

// let filteredP = products.filter(p => p.price < 9000);
// console.log(filteredP);

// let product2 = [
//   {
//     id: 1,
//     name: "Product-1",
//     price: 3000,
//   },
//   {
//     id: 2,
//     name: "Product-2",
//     price: 9000,
//   },
//   {
//     id: 3,
//     name: "Product-3",
//     price: 6000,
//   }
// ];

// const listItems = product2.map(product => (
//   <li key = {product.id}>
//     {product.name} <br />
//     {product.price.toLocaleString("en-NG", {
//       style: "currency",
//       currency: "USD",
//       maximumFractionDigits: "2"
//     })}
//   </li>
// ));

// let m = new person("ella", "Johnson");
// console.log(`You' re welcome Miss ${m.firstName} ${m.lastName}.`);

// let x = "7";
// console.log(isNaN(x));

// let url = "https://www.example.com/submit?name=maaike van putten";
// let encodedUrl = encodeURI(url);
// console.log("Encoded URL:", encodedUrl);

// let decodeUrl = decodeURI(encodedUrl);
// console.log(decodeUrl)

// let url2 = "https://www.example.com/submit?name=this&that=some thing&code=love";
// let encodedUrl2 = encodeURIComponent(url2);
// let decodedUrl2 = decodeURIComponent(encodedUrl2)
// console.log("Encoded URL:", encodedUrl2)
// console.log("Decoded URL:", decodedUrl2)

// let greet = "Hello";
// let greetToNum = parseInt(greet);
// console.log(`Type of ${greetToNum} is ${greetToNum}`)

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.forEach(a => console.log("Displaying:", a));

// Filter Method
// let array = ["squirrel", 5, "Tjed", new Date(), true, 29, "aeroplane", false];

// function isNum(items) {
//     if (typeof items === "number") {
//         return items
//     }
// }

// let toNum = array.filter(isNum);
// console.log("Filtering Numbers:", toNum);

// let filterStrings = array.filter(f => typeof f === "string");
// console.log("Filtering Strings", filterStrings);

// let filterNotString = array.filter(n => typeof n !== "string");
// console.log(filterNotString)

// // Every Method
// console.log(array.every(isNum));


// COPYWITHIN
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);
// console.log(arr);

// let arr2 = ["Hi", "Xup", 19, 7, 3, "Whats's cooking", 23];
// arr2.copyWithin(0, 5, 7); 
// console.log(arr2)
// this method takes in 3 values (paste index, copy index, end of copy index) which represent the index of the array so the value type must be number.

// let arr3 = ["Car", 2, "Bike", 9, "Mobile Phone", 1];
// arr3.copyWithin(0, 3, 4);
// console.log(arr3)


// MAP
// let num1 = [1, 2, 3, 4,5];
// let num2 = num1.map((n) => n ** 2);
// console.log(num2);


// INDEXOF & LASTINDEXOF
// let bb = ["so", "bye", "miss", "kiss", "bye", "love"];
// console.log(bb.lastIndexOf("bye")); // finding the indexof a non-existent value will log -1 


// CONCAT
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let s3 = s1.concat(s2);
// console.log(s3);


// // SPLIT (String to Array)
// let result = "Hello JavaScript";
// let r = result.split("");
// console.log(r);


// // JOIN (Array to String)
// let letters = ["a", "b", "c"];
// let l = letters.join();
// console.log(l);


// let l2 = ["m", "e", "y", "g"];
// let l3 = l2.join("-");
// console.log(l3); // Logs "m-e-y-g"


// // Concat
// let g1 = "Hello ";
// let g2 = "JavaScript"
// let g3 = g1.concat(g2);
// console.log(g3)

// let h1 = "Hello ";
// let h2 = "World";
// let h3 = h1.concat(h2);
// console.log(h3)


// // Converting strings to arrays (SPLIT)
// let greet = "Hi World";
// let arrGreet = greet.split(" ");
// console.log(arrGreet)

// let greet2 = "What's cooking Famz";
// let arrGreet2 = greet2.split(" ");
// console.log(arrGreet2)

// let fruits = "strawberry,watermelon,grapefruit";
// let arrFruits = fruits.split(",");
// console.log(arrFruits)



// // Converting arrays to strings (JOIN)
// let letters = ["a", "b", "l", "e"];
// let arrLetters = letters.join();
// console.log(arrLetters);

// let num1 = [1, 2, 3, 4, 5];
// let arrNum = num1.join("-");
// console.log(arrNum);



// // INDEXOF
// let poem = "Roses are red, violets are blue, I can write JavaScript, what about you";
// console.log("IndexOf:", poem.indexOf("ar"))
// console.log("LastIndexOf:", poem.lastIndexOf("ar"))


// // SEARCH
// let searchStr = "When I see my fellow, I say hello";
// let s = searchStr.search("lo");
// console.log(s); // The search method only finds the first occurance


// // SLICE
// let str1 = "Create a substring";
// let subString1 = str1.slice(7);
// let subString2 = str1.slice(0, 6);
// console.log("1:", subString1);
// console.log("2:", subString2);
// In the 1st subString variable, the slice method was given only one argument(start point) so it starts at the 7th index which holds "a" and stop at the end of the string. While in the 2nd subString variable, the slice method was given two arguments (start and end point) so it starts at the 0th index and stops at the 6th index.


// const info = "I love JavaScript more than CSS";
// const sliceInfo = info.slice(2, 17);
// console.log(sliceInfo);


// // REPLACE AND REPLACEALL
// let h1 = "Hi buddy";
// let h2 = "What's cooking buddy.";
// let h3 = "Hello there, what are you doing there and even there."
// let hROne = h3.replace("there", "here");
// let hRAll = h3.replaceAll("there", "here");
// console.log(h1.replace("buddy", "Pascal"));
// console.log(h2.replace("buddy", "Melody"));
// console.log(hROne);
// console.log(hRAll);


// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// let boolStart2 = encouragement.toLowerCase().startsWith("you")
// console.log(bool_start);
// console.log(boolStart2);

// let arr1 = ["Hi", "Hello", "Xup", "What's cooking", "Howdy"];

// // if (arr1.indexOf.startsWith("X")) {
    
// // }

// let arr2 = arr1.filter((items) => items.startsWith("X"));
// console.log(arr2)


// 1.
// let word = "I love JavaScript";
// word = word.toLowerCase();

// // 2.
// let vowels = ["a", "e", "i", "o", "u"];

// // 3.
// for (let a = 0; a < vowels.length; a++) {
//     let result = vowels[a];
//     console.log("Current Vowel:", result);

//     word = word.replaceAll(result, a.toString());
// }
// console.log("Final Words:", word)






// // CREATING DATES
// let currentDate = new Date();
// console.log(currentDate);


// let now1 = Date.now();
// console.log(now1)

// let miliDate1 = Date.now(1000);
// console.log("Milli Date 1:", miliDate1);

// let milliDate2 = new Date(1000);
// console.log("Milli Date 2:", milliDate2);


// let stringDate = new Date("Sun Aug 10 2025 09:54:12 GMT+0200");
// console.log(stringDate);


// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());


// // Setting the Date, Month and year
// let d = new Date();
// d.setFullYear(2001);
// d.setDate(25);
// d.setMonth(4);
// console.log(d);

let d = new Date()
d.setDate(10);
console.log(d);
console.log(d.toDateString());

// Parsing Dates
let d1 = Date.parse("June 5, 2021");
// console.log(d1);














// function toString(items) {
//     if (typeof items === "string" ) {
//         return items
//     }
// }

// let isString = array.filter(toString)
// console.log(isString)

// return typeof array === "string"

// const userProfiles = users.map(user => ({
//   userId: user.id,
//   displayName: user.name.toUpperCase(),
//   birthYear: new Date().getFullYear() - user.age
// }));
