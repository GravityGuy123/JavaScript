// MAP METHOD

// let fruits = ["Apple", "Mango", "Banana", "Pineapple", "Watermelon", "Grape"];
// let multiFruits;

// if (fruits.some(f => f.endsWith("e") || f.endsWith("a") || f.endsWith("n"))) {
//   multiFruits = fruits.map(p => p + "s");
// } else if (fruits.some(f => f.endsWith("o"))) {
//   multiFruits = fruits.map(v => v + "es");
// }
// console.log("Multi-Fruits:", multiFruits);

// let props = ["car", "Earpod", "Lappy-top", "Phone"];

// let myProps = props.map((p) =>"My " + p);
// console.log(myProps);

// let num1 = [1, 2, 3, 4, 5];

// let dNum = num1.map(n => n + "s");
// console.log(dNum);

// let num = [1, 3, 5, 7, 9];

// let squaredNum = num.map(s => s ** 2);
// console.log(squaredNum);

// const names = ["alice", "bob", "charlie", "diana"];
// const capitalized = names.map(name =>
//     name.charAt(0).toUpperCase() + name.slice(1)
// );
// console.log(capitalized);

// const namesCaps = names.map(c => c.toUpperCase());
// console.log(namesCaps);

// let greet = names.map(g => `Hi, ${g}, thanks for coming.`)
// console.table(greet);

// const users = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 },
//     { id: 3, name: "Charlie", age: 35 }
// ];

// // Extract specific properties
// const userNames = users.map(user => user.name);
// console.log(userNames); // ["Alice", "Bob", "Charlie"]

// const webDevStuds = [
//     {name: "Edu", age: 35, gender: 'm'},
//     {name: "Victoria", age: 25, gender: "f"},
//     {name: "GravityGuy", age: 15, gender: "m"},
//     {name: "Josh", age: 18, gender: "m"}
// ];

// const webNames = webDevStuds.map(n => n.name);
// console.log(webNames);

// const webages = webDevStuds.map((a) => a.age);
// console.log(webages);

// const usersWithStatus = webDevStuds.map((u) => ({
//   ...u,
//   status: u.age >= 25 ? "senior" : "junior",
//   email: `${u.name.toLowerCase()}@example.com`,
// }));

// console.log(usersWithStatus);

// let names = [
//   { name: "Edu", age: 29, gender: "m" },
//   { name: "GravityGuy", age: 15, gender: "m" },
//   { name: "Josh", age: 17, gender: "m" },
//   { name: "Victoria", age: 25, gender: "f" },
// ];

// let classMates1 = names.map((c) => {
//   let stats;

//   if (c.age >= 18) {
//     stats = "Senior";
//   } else {
//     stats = "Junior";
//   }

//   return {
//     ...c,
//     status: stats,
//   };
// });
// console.log("De 1st:", classMates1);

// let classmate2 = names.map((m) => ({
//   ...m,
//   status: m.age >= 18 ? "Senior" : "Junior",
//   email: m.name.toLowerCase() + "@gmail.com",
// }));
// console.log("De 2nd:", classmate2);

// let userProfiles = names.map(u => ({
//   userId: u.name + "-id",
//   displayName: u.name.toUpperCase(),
//   birthday: new Date().getFullYear() - u.age
// }))
// console.log("Mapped profiles", userProfiles)

// const items = ["apple", "banana", "cherry"];

// // Add index to each item
// const indexedItems1 = items.map((i, n) => `${n + 1}. ${i}`);
// console.log(indexedItems1); // ["1. apple", "2. banana", "3. cherry"];

// let webDev = ["Edu", "GravityGuy", "Victoria", "Chisom"];

// let webDevObject = webDev.map((item, index) => ({
//   idNum: Math.floor(Math.random() * 20) + 1,
//   name: item,
//   position: index + 1
// }));
// console.log(webDevObject);

// const webDevStudents = [
//   "Edu",
//   "Mega-Pips",
//   "GravityGuy",
//   "Victorial",
//   "Chisom-F",
// ];

// const webDevObject = webDevStudents.map((i, n) => ({
//   name: i,
//   idNo: Math.floor(Math.random() * 15000) + 1,
//   email: i.toLowerCase() + "@gmail.com",
//   profile: i.toUpperCase() + ".DEV",
//   position: n + 1,
// }));
// console.log("Class Profiles:", webDevObject);

// Conditional transformation based on index
// const alternatingCase = items.map((item, index) =>
//   index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
// );
// console.log(alternatingCase); // ["APPLE", "banana", "CHERRY"]

let classMates = ["Edu", "GravityGuy", "Victoria", "Mega-Pips"];

// let numClass = classMates.map((names, index) => `${index + 1}. ${names}` );
// console.log(numClass);

// let classObject = classMates.map((items, index) => ({
//   name: items,
//   id: index * 2 + Math.floor(Math.random() * 20) + 1,
//   profileName: items.toUpperCase(),
//   position: index + 1,
// }));
// console.log("Class Object List:", classObject);

// let alternatingCase = classMates.map((items, index) =>
//   index % 2 === 0 ? items.toUpperCase() : items.toLowerCase()
// );
// console.log(alternatingCase);

// const fruits = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry",
//   "fig",
//   "Strawberry",
//   "grapes",
//   "avocado",
// ];
// let fruitsObj = fruits.map((items, index) => ({
//   name: items,
//   position: index + 1,
//   gotSeed: index % 2 === 0 ? "seed" : "seedless",
// }));
// console.log(fruitsObj);

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
//   { name: "Book", price: 19.99, category: "Education", inStock: false },
//   { name: "Phone", price: 699.99, category: "Electronics", inStock: true },
//   { name: "Desk", price: 299.99, category: "Furniture", inStock: true },
// ];

// // Complex transformation with multiple calculations
// const productSummary = products.map((product) => {
//   const tax = product.price * 0.1;
//   const finalPrice = product.price + tax;

//   return {
//     productId: `${product.category.toLowerCase()}_${product.name
//       .toLowerCase()
//       .replace(/\s+/g, "_")}`,
//     displayName: product.name,
//     pricing: {
//       basePrice: product.price,
//       tax: parseFloat(tax.toFixed(2)),
//       finalPrice: parseFloat(finalPrice.toFixed(2)),
//     },
//     availability: {
//       inStock: product.inStock,
//       status: product.inStock ? "Available" : "Out of Stock",
//     },
//     metadata: {
//       category: product.category,
//       priceRange:
//         product.price > 500
//           ? "Premium"
//           : product.price > 100
//           ? "Mid-range"
//           : "Budget",
//     },
//   };
// });

// console.log(productSummary[0]);

// FILTER METHOD

// try {
//   const newArray = array.filter((element, index, array) => {
//     // Return true to keep element, false to exclude it
//   });
// } catch (error) {
//   console.log("Error detected!")
// }

// let num = [];

// for (let a = 0; a <= 100; a+= 5) {
//   num.push(a);
// }

// const filteredNum = num.filter((f) => f % 5 === 0);
// console.log(filteredNum);

// // Numbers greater than 5 and less than 50
// const numG5AndL21 = num.filter(n => n > 5 && n <= 50);
// console.log(numG5AndL21);

// Prime numbers (simple check)
// let numbers = [];

// for (let a = 0; a <= 30; a++) {
//   numbers.push(a);
// }
// console.log("Numbers:", numbers);

// let isPrime = num => {
//   if (num < 2) {
//     return false;
//   }

//   for (let e = 2; e <= Math.sqrt(num); e++) {
//     if (num % 2 === 0) {
//       return false
//     }
//   }
//   return true;
// }

// let primeNum = numbers.filter(isPrime);
// console.log(primeNum);

// const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "Strawberry", "grape", "avocado", "guava"];

// console.log(fruits);

// const wordsWithDoubleLetters = fruits.filter(word => /(.)\1/.test(word));
// console.log(wordsWithDoubleLetters);

// let endWithE = fruits.filter((e) => e.endsWith("e"));
// let upTo6 = fruits.filter((u) => u.length <= 6);
// console.log("Ends with E:", endWithE);
// console.log("Up to 6 words:", upTo6);

// const employees = [
//   {id: 1, name: "Alice", department: "Engineering", salary: 80000, active: true},
//   { id: 2, name: "Bob", department: "Marketing", salary: 65000, active: true },
//   {id: 3, name: "Charlie", department: "Engineering", salary: 90000, active: false},
//   { id: 4, name: "Diana", department: "Sales", salary: 70000, active: false },
//   {id: 5, name: "Eve", department: "Engineering", salary: 85000, active: true},
// ];
// console.log(employees);

// // const activeEmployees = employees.filter((a) => a.active);
// // console.log(activeEmployees);


// const updatedEmployeesList = employees.map((u) => ({
//   ...u,
//   email: `${u.name.toLowerCase()}${u.department.toLowerCase()}@gmail.com`,
// }));
// console.log("New List:", updatedEmployeesList);


// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     department: "Engineering",
//     salary: 80000,
//     active: true,
//   },
//   { id: 2, name: "Bob", department: "Marketing", salary: 65000, active: true },
//   {
//     id: 3,
//     name: "Charlie",
//     department: "Engineering",
//     salary: 90000,
//     active: false,
//   },
//   { id: 4, name: "Diana", department: "Sales", salary: 70000, active: false },
//   {
//     id: 5,
//     name: "Eve",
//     department: "Engineering",
//     salary: 85000,
//     active: true,
//   },
// ];
// console.log(employees)

// let newEmployeeList = employees.map((n) => ({
//   ...n, // keeps all the old data
//   email: `${n.name.toLowerCase()}-${n.department.toLowerCase()}@gmail.com`,
//   id: Math.floor(Math.random() * 9000) + 1
// }));

// let engEmployees = newEmployeeList.filter(
//   (g) => g.department === "Engineering"
// );
// console.log("New List:", newEmployeeList);
// console.log("Engineering Department:", engEmployees);


// let highEarners = employees.filter(h => h.salary > 70000);
// console.log("High Earners:", highEarners);

// let activeHighEarners = employees.filter((ah) => ah.salary > 70000 && ah.active);
// console.log("Active High Earners:", activeHighEarners);



// let items = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"];

// let filteredObj = items.filter((item, index) => index % 2 === 0)
// console.log(filteredObj);

// let otherPositions = items.filter((i, n) => ![0, 3].includes(n));
// console.log(otherPositions)


// let num = [];
// for (let s = 0; s <= 30; s++) {
//   num.push(s);
// }
// console.log(num)

// let evenSquaredNum = num
// .filter((e) => e % 2 === 0)
// .map((f) => f * 2);
// console.log(evenSquaredNum);

// let numG5 = num.filter(g => g > 5 && g <= 20).map((n) => n * 2);
// console.log("Numbers > 5 & < 21", numG5);




// const students = [
//   { name: "Alice", grades: [85, 90, 78, 92], major: "Computer Science", year: 3 },
//   { name: "Bob", grades: [72, 68, 75, 70], major: "Mathematics", year: 2 },
//   { name: "Charlie", grades: [95, 88, 91, 94], major: "Computer Science", year: 4 },
//   { name: "Diana", grades: [80, 85, 83, 87], major: "Physics", year: 3 },
//   { name: "Eve", grades: [65, 70, 68, 72], major: "Mathematics", year: 1 }
// ];
// console.log(students)

// // Get CS students with high GPA, format for display

// let highGpaStudents = students
//   .filter((c) => c.major === "Computer Science")
//   .map((s) => ({
//     ...s,
//     // GPA: s.grades.reduce()
//   }));
// // console.log(highGpaStudents);


// const topCSStudents = students
//   .filter((student) => student.major === "Computer Science")
//   .map((student) => ({
//     ...student,
//     gpa:
//       student.grades.reduce((sum, grade) => sum + grade, 0) /
//       student.grades.length,
//   }))
//   .filter((student) => student.gpa >= 85)
//   .map((student) => ({
//     name: student.name,
//     gpa: student.gpa.toFixed(2),
//     status: `Year ${student.year} ${student.major} student`,
//     performance: student.gpa >= 90 ? "Excellent" : "Good",
//   }));

// console.log(topCSStudents);



const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Book", price: 15, category: "Education", rating: 4.0 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.2 },
  { name: "Headphones", price: 150, category: "Electronics", rating: 4.8 },
  { name: "Desk", price: 300, category: "Furniture", rating: 3.9 },
];


// // Method 1: Filter first, then map (more efficient)
// const expensiveElectronicsV1 = products
//     .filter(product => product.category === "Electronics" && product.price > 200)
//     .map(product => ({
//         name: product.name,
//         priceFormatted: `$${product.price.toLocaleString()}`,
//         ratingStars: "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))
//     })); // This method is more effective because we filtered first and then mapped it.

// // Method 2: Map first, then filter (less efficient - processes all items)
// const expensiveElectronicsV2 = products
//     .map(product => ({
//         name: product.name,
//         priceFormatted: `$${product.price.toLocaleString()}`,
//         ratingStars: "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating)),
//         category: product.category,
//         price: product.price
//     }))
//     .filter(product => product.category === "Electronics" && product.price > 200);

// console.log(expensiveElectronicsV1)
// console.log(expensiveElectronicsV2)




































// const userProfiles = users.map(user => ({
//   userId: user.id,
//   displayName: user.name.toUpperCase(),
//   birthYear: new Date().getFullYear() - user.age
// }));