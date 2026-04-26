// // Arrays and Objects
// let arr2 = ["black", "orange", "pink"];
// console.log(arr2);

// console.log("Index 1:", arr2[1]);
// // console.log(arr2[-1]); // undefined

// const booleans = [true, false, false, true];
// console.log(booleans.length);

// const emptyArray = [];
// console.log("Empty Array:", emptyArray.length);



// // Practice exercise 3.1
// // 1. Create an array to use as your shopping list with 3 items: "Milk,"
// // "Bread," and "Apples."
// // 2. Check your list length in the console.
// // 3. Update "Bread" to "Bananas."
// // 4. Output your entire list to the console.

// // 1.
// const shoppingList = ["Milk", "Bread", "Apples."];

// // 2.
// console.log("Shopping List:", shoppingList);
// console.log("Shopping List Length:", shoppingList.length);

// // 3.
// shoppingList[1] = "Banana"

// // 4.
// console.log("Final Shopping List:", shoppingList);



// let favoriteFruits = ["grapefruit", "orange", "lemon"];
// console.log(favoriteFruits);

// favoriteFruits.push("tangerine");
// console.log(favoriteFruits);


// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid", "cuboid");
// console.log(arrOfShapes);

// let nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
// console.log("Numbers:", nums);

// nums.pop(); // Remove from the end
// console.log("Poped Numbers:", nums);

// nums.shift(); // Remove from the beginning
// console.log("Shifted Numbers:", nums);

// nums.splice(1, 3); // Remove from a particular index
// console.log("Spliced Numbers:", nums);

// delete nums[1] // Remove and leave the position as empty
// console.log("Spliced Numbers:", nums);


// let arr1 = [1, 6, 7, 3,  8, 13, 3];

// let findValue = arr1.find(function (e) {return e === 7});
// console.log("Index of 7:", arr1.indexOf(findValue));

// let findValue2 = arr1.findIndex((e => e === 13));
// console.log("Index of 13:", findValue2);


// // Checking Index
// let findIndex1 = arr1.indexOf(1);
// console.log("Index of 1:", findIndex1);


// // Checking Index after first occurance
// let findIndex2 = arr1.indexOf(3, 4); // value 3 checked from index 4
// console.log("Index of 1:", findIndex2);


// // Sorting
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// let ages = [18, 72, 33, 56, 40];

// console.log("Names before sort:", names);
// names = names.sort()

// names = names.sort()
// console.log("Names after sort:", names);

// names = names.reverse()
// console.log("Names after reverse:", names);


// // Practice exercise 3.2
// // 1. Create an empty array to use as a shopping list.
// let shoppingList = [];

// // 2. Add Milk , Bread , and Apples to your list.
// shoppingList.splice(0, 0, "Milk", "Bread", "Apples");
// // console.log("Shopping List Before", shoppingList)

// // 3. Update " Bread " with Bananas and Eggs .
// // let breadIndex = shoppingList.findIndex((e) => {return e === "Bread";});
// let breadIndex = shoppingList.findIndex((e) => e === "Bread");


// shoppingList.splice(breadIndex, 1, "Bananas", "Eggs");
// console.log("Shopping List After", shoppingList)

// // 4. Remove the last item from the array and output it into the console.
// shoppingList.pop();
// console.log("Shopping List After Pop", shoppingList)

// // 5. Sort the list alphabetically.
// shoppingList.sort();
// console.log("Shopping List After Sort", shoppingList)

// // // 6. Find and output the index value of Milk.
// // const findMilkIndex = shoppingList.findIndex((m) => {return m === "Milk"})
// // console.log("Milk Index:", findMilkIndex)

// const milkIndex = shoppingList.indexOf("Milk")
// console.log("Milk Index:", milkIndex)

// // 7. After Bananas , add Carrots and Lettuce.
// let bananaIndex = shoppingList.findIndex(e => e === "Bananas");

// shoppingList.splice(bananaIndex + 1, 0, "Carrots", "Lettuce")
// console.log("Shopping List After Add", shoppingList)

// // 8. Create a new list containing Juice and Pop.
// let newList = shoppingList.slice();
// newList.push("Juice");
// newList.push("Pop");

// // let newList = [...shoppingList];
// // newList.push("Juice");

// console.log("Shopping List:", shoppingList);
// console.log("New Shopping List Before Pop:", newList);

// // 9. Combine both lists, adding the new list twice to the end of the first list.
// // shoppingList = shoppingList.concat(...newList)
// shoppingList = shoppingList.concat(newList)
// console.log("Shopping List after adding both list:", shoppingList);

// // 10. Get the last index value of Pop and output it to the console.
// let findPop = shoppingList.findIndex(e => e === "Pop");
// console.log("Pop Index:", findPop)


// // Pracitces and Exercises
// // 1.
// let fruits = ['mango', 'orange', 'pawpaw', 'apple', 'guava'];

// // 2.
// let colors = ["red", 'blue', 'pink', 'orange']
// console.log("Index 1:", colors[1]);
// console.log("Index 3:", colors[3]);

// // 3.
// let countries = ["America", "Brazil", "France", "Australia"];
// console.log("Countries Before Change:", countries)

// countries[2] = "China";
// console.log("Countries After Change:", countries);

// 4.
// let nums = [1, 2, 3, 4, 5, 6];
// console.log("length of Numbers:", nums.length);
// console.log("Max Value of Numbers:", nums);

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];

// let num3 = [num1, num2];
// console.log("Num1:", num1);
// console.log("Num2:", num2);
// console.log("Num3:", num3);

// console.log("Value 5:", num3[1][1]);


// // 1.
// let num1 = [1, 2, 3];

// // 2.
// let newArray = [num1, num1, num1];
// console.log(newArray);

// // 3.
// console.log(newArray[1][1]);


// // Objects
// let dog = {dogName: "JavaScript", weight: 2.4, color: "brown", breed: "chihuahua", age: 3, burglarBiter: true}

// console.log({...dog}); // Logs at current state
// console.log("Dog Weight:", dog.weight);
// console.log("Burglar Biger:", dog.burglarBiter);

// // dog["dogName"] = "Lucky";
// dog.dogName = "Lucky";
// console.log(dog);


// // Practice exercise 3.4
// // 1. Create a new myCar object for a car. Add some properties, including,
// // but not limited to, make and model , and values for a typical car or
// // your car. Feel free to use booleans, strings, or numbers.

// let myCar = {make: "Toyota", model: "Camry", year: 2020, color: "Black", engineType: "Petrol", transmission: "Automatic", hasAC: true, isRegistered: true, price: 18500000
// };
// console.log({...myCar});

// // 2. Create a variable that can hold the string value color . This variable containing a string value color can now be used to reference the property name within myCar . Then, use the variable within the square bracket notation to assign a new value to the color property in myCar .
// let carColor = "color";
// myCar[carColor] = "Blue";
// console.log({...myCar})

// // 3. Use that same variable and assign a new property string value to it, such as forSale . Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
// let forSale = true;
// myCar["forSale"] = false;
// console.log(myCar);

// // 4. Output make and model into the console.
// console.log("Car Make:", myCar.make);
// console.log("Car Model:", myCar.model);

// // 5. Output the value of forSale into the console.
// console.log("Car ForSale:", myCar.forSale);


// // Multidimensional Objects
// let company = {
//     companyName: "Candy",
//     activity: ["food manufacturing", "improving kids' health", "manufacturing toys"],
//     addresses: {
//         street: "2nd Street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },

//     yearOfEstablishment: 2021
// };

// console.log("ZipCode:", company.addresses.zipcode);
// console.log("ZipCode2:", company["addresses"]["zipcode"]);
// console.log("Address Number:", company["addresses"]["number"]);

// console.log("2nd Activity:", company.activity[1]);


// // Objects in Arrays
// let addresses = [{
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     {
//         street: "1st West avenue",
//         number: "5",
//         zipcode: "75001",
//         city: "Addison",
//         state: "Texas"
// }];

// console.log("2nd Address City:", addresses[1].city);


// // Practice exercise 3.5
// // 1. Create an object named people that contains an empty array that is called friends.
// let people = {friends: []};
// console.log("People Before:", people);

// // 2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// let friend1 = {firstName: "Clara", lastName: "Ignatius", idValue: 1};
// let friend2 = {firstName: "kasiemobi", lastName: "Ezeokiche", idValue: 2};
// let friend3 = {firstName: "Chidera", lastName: "Ogbaball", idValue: 3};

// // 3. Add the three friends to the friend array.
// // people.friends.splice(0, 0, friend1, friend2, friend3);

// // or
// people.friends.push(friend1);
// people.friends.push(friend2);
// people.friends.push(friend3);

// // 4. Output it to the console.
// console.log("People After:", people);


// // Practice Exercise
// // 1. Create an object called library.
// let library = {};
// console.log("Library @ 1:", library);

// // 2. Inside library, create an empty array called books.
// library.books = []
// console.log("Library @ 2:", library);

// // 3. Create three book objects. Each book should have "title, author, year, isAvailable"
// let book1 = {
//     title: "Things Fall Apart",
//     author: "Chinua Achebe",
//     year: 1958,
//     isAvailable: true
// };

// let book2 = {
//   title: "Half of a Yellow Sun",
//   author: "Chimamanda Ngozi Adichie",
//   year: 2006,
//   isAvailable: false
// };

// let book3 = {
//   title: "The Alchemist",
//   author: "Paulo Coelho",
//   year: 1988,
//   isAvailable: true
// };


// // 4. Add the three books into the books array.
// library.books.splice(0, 0, book1, book2, book3);


// // 5. Print the whole library object.
// console.log("Library @ 5:", library);

// // 6. Print the title of the first book.
// console.log(`First Book's Title is "${library.books[0].title}"`);

// // 7. Print whether the third book is available.
// console.log("Is the 3rd Book Available:", library.books[2].isAvailable);