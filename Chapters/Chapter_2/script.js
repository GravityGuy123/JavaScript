// ASSIGNMENTS
// 1. Miles-to-kilometers converter

// Create a variable that contains a value in miles, convert it to kilometers, and log the value in kilometers in the following format:
// The distance of 130 miles is equal to 209.2142 kms (For reference, 1 mile equals 1.60934 kilometers.)


// let mileValue = prompt ("Enter mile value");
// let km = 1.60934;
// let unitOfMeasurement1 = "Kms";
// let Value = Number(mileValue * km) + unitOfMeasurement1;
// Value = `The distance of ${mileValue} miles is equal to ${Value}`;
// // alert(Value);
// console.log(Value);
// The distance of 80.77845576447488 miles is equal to 130Kms

// let mile = 130;
// let kmToMile = 130 * 1.60934;
// let kmUnit = "Kms";
// let mileToKm = `The distance of ${mile} miles is equal to ${kmToMile}${kmUnit}`;
// console.log(mileToKm);


// let value1 = prompt("Enter Kilometer value");
// let value2 = 1.60934;
// let unitOfMeasurement2 = "Miles"; 
// let all = Number(value1 / value2) + unitOfMeasurement2;
// all = `The distance of ${value1} Kms is equal to ${all}`;
// alert(all);
// console.log(all);


// 2. BMI calculator

// Set values for height in inches and weight in pounds, then convert the
// values to centimeters and kilos, outputting the results to the console:

// a. 1 inch is equal to 2.54 cm
// b. 2.2046 pounds is equal to 1 kilo

// ANSWER

// let height = 5; // inches
// let inchUnit = "cm";
// let weight = 10; // pounds
// let weightUnit = "kilos";

// Converting inches to cm and pounds to kilos.

// let convertToCm = height * 2.54 + inchUnit;
// console.log(`5 inches =`, convertToCm);
// let convertToKilo = weight / 2.2046 + weightUnit;
// console.log(`10 pounds =`, convertToKilo);

// a. Converting inches to cm


// let height = prompt("Enter inch(es) value");
// let cm = 2.54;
// let inchUnit = "cm";
// let totalheight = height * cm + inchUnit;
// let convertToCm = `${height} inches = ${totalheight}`;
// // alert(convertToCm);
// console.log(convertToCm); // A calculator that converts any numerical value from inches to cm.



// b. Converting pounds to kilos

// let weight = prompt ("Enter pound value");
// let kilo = 2.2046;
// let weightUnit = "kilos";
// let totalWeight = weight / kilo + weightUnit;
// let convertToKilo = `${weight} pounds = ${totalWeight}`;
// // alert(convertToKilo)
// console.log(convertToKilo); // A calculator that converts any numerical value from pound to kilo


// 3a. Create an array to use as your shopping list with 3 items: "Milk,"
// "Bread," and "Apples."
// 3b. Check your list length in the console.
// 3c. Update "Bread" to "Bananas."
// 3d. Output your entire list to the console.

// 3a.
// let shoppingList1 = ["Milk", "Bread", "Apples"];

// // 3b.
// console.log(shoppingList1.length);

// // 3c.
// shoppingList1[1] = "Bananas";

// // 3d.
// console.log(shoppingList1)


// 4a. Create an empty array to use as a shopping list.
// 4b. Add Milk , Bread , and Apples to your list.
// 4c. Update " Bread " with Bananas and Eggs .
// 4d. Remove the last item from the array and output it into the console.
// 4e. Sort the list alphabetically.
// 4f. Find and output the index value of Milk .
// 4g. After Bananas , add Carrots and Lettuce .
// 4h. Create a new list containing Juice and Pop .
// 4i. Combine both lists, adding the new list twice to the end of the first list.
// 4j. Get the last index value of Pop and output it to the console.

// 4a. Create an empty array to use as a shopping list.
// let shoppingList2 = [];

// // 4b. Add Milk , Bread , and Apples to your list.
// shoppingList2.push("Milk", "Bread", "Apples");

// // 4c. Update " Bread " with Bananas and Eggs.
// shoppingList2.splice(1, 1, "Banana", "Eggs");

// // 4d. Remove the last item from the array and output it into the console.
// shoppingList2.pop()
// console.log(shoppingList2)

// // 4e. Sort the list alphabetically.
// shoppingList2.sort()
// console.log(shoppingList2);

// // 4f. Find and output the index value of Milk .
// let findMilk = shoppingList2.indexOf("Milk");
// console.log(findMilk)

// // // 4g. After Bananas , add Carrots and Lettuce.
// shoppingList2.splice(1, 0, "Carrots", "Lettuce"); //

// // 4h. Create a new list containing Juice and Pop.
// let shoppingList3 = ["Juice", "Pop"];

// // 4i. Combine both lists, adding the new list twice to the end of the first list.
// let listCombine1 = shoppingList2.concat(shoppingList3);
// let shoppingList4 = listCombine1.concat(shoppingList3)
// console.log(shoppingList4); // Inputed this line of code solely to see the result in the console.

// // 4j. Get the last index value of Pop and output it to the console.
// let findPop = shoppingList4.indexOf("Pop", 7)
// console.log(findPop);



// 5a. Create an array containing three values: 1, 2, and 3.
// 5b. Nest the original array into a new array three times.
// 5c. Output the value 2 from one of the arrays into the console.

// 5a. Create an array containing three values: 1, 2, and 3.
// let number1 = [1, 2, 3];

// // 5b. Nest the original array into a new array three times.
// let parentNumber1 = [number1, number1, number1];
// console.log(parentNumber1)

// // 5c. Output the value 2 from one of the arrays into the console.
// let value1 = parentNumber1[1] [1]
// console.log(value1);


// 6a. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model , and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
// 6b. Create a variable that can hold the string value color . This variable containing a string value color can now be used to reference the property name within myCar . Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// 6c. Use that same variable and assign a new property string value to it, such as forSale . Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
// 6d. Output make and model into the console.
// 6e. Output the value of forSale into the console.

// 6a.
// let myCar = {
//     carName: "Lexus",
//     model: "Lexus_GX",
//     color: "Silver",
//     speed: "60mph",
//     make: "Toyota"
// };

// // 6b.
// let variableColor = "color";
// myCar[variableColor] = "White";
// // console.log(myCar[variableColor]);

// // 6c.
// myCar[variableColor] = "forSale";
// myCar[variableColor] = "Sold";

// // 6d.
// console.log(myCar.model);
// console.log(myCar.make);

// // 6e
// console.log(myCar[variableColor]);


// 7a. Create an object named people that contains an empty array that is called friends.
// 7b. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// 7c. Add the three friends to the friend array.
// 7d. Output it to the console.

// 7a.
// let people = {friends: []};

// // 7b.
// let variable1 = {firstName: "Chukwudike", lastName: "Ibeh", ID_Value: 1028}
// let variable2 = {firstName: "Mirabel", lastName: "Ezeanurumbu", ID_Value: 1331}
// let variable3 = {firstName: "Chidera", lastName: "Emeh", ID_Value: 1608}

// // 7c.
// let addFriends = people.friends.concat(variable1, variable2, variable3);

// // 7d.
// console.log(addFriends)


// 8. Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined]

// Manipulate your array using various methods, such as pop() , push() ,
// shift() , and unshift() , and transform it into the following:

// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// const theList = ["Laurence", "Svekis", true, 35, null, undefined];

// theList.shift();
// theList.unshift("FIRST");
// theList.splice(2, 4, "MIDDLE", "hello world");
// theList.push("LAST");
// console.log(theList);


// 9. Company product catalog
// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// 9a. Create an array to hold an inventory of store items.
// 9b. Create three items, each having the properties of name, model, cost, and quantity.
// 9c. Add all three objects to the main array using an array method, and then log the inventory array to the console.
// 9d. Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.

// 9a. Create an array to hold an inventory of store items.
let storeItems = [];

// 9b. Create three items, each having the properties of name, model, cost, and quantity.
let bodySpray = {
  productName: "Inferno",
  model: "coolBreeze",
  cost: "50000",
  quantity: "200"
};
let soap = {
  productName: "freshWaves",
  model: "mintShade",
  cost: "30000",
  quantity: "100",
};
let cream = {
  productName: "Cocoderm",
  model: "cocoShade",
  cost: "70000",
  quantity: "500"
};

// 9c. Add all three objects to the main array using an array method, and then log the inventory array to the console.
storeItems.push(bodySpray, soap, cream);
console.log(storeItems);

// 9d. Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.
console.log(storeItems[2].quantity);