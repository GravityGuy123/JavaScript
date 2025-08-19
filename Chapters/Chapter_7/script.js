// 7.1
// Take the following steps to create a person class, and print instances of friends' names:
// 1. Create a class for Person including the constructor for firstname and lastname .
// 2. Create a variable and assign a value of the new Person object using your friend's first and last names.
// 3. Now add a second variable with another friend's name using their first name and last name.
// 4. Output both friends into the console with a greeting of hello .

// // 1.
// class Person {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// // 2.
// let friend1 = new Person ("Neche", "Ezeanurumbu");

// // 3.
// let friend2 = new Person ("Michael", "Agu");

// // 4.
// // console.log("Hello", friend1.firstName, friend1.lastName, "am", friend2.firstName, friend2.lastName);

// // or
// console.log(
//   `Hello ${friend1.firstName} ${friend1.lastName}, am ${friend2.firstName} ${friend2.lastName}`
// );






// 7.2
// Get your friend's full name:
// 1. Using the Person class from Practice exercise 7.1, add a method called fullname , which returns the concatenated value of firstname and lastname when invoked.
// 2. Create values for person1 and person2 using two friends' first and last names.
// 3. Using the fullname method within the class, return the full name of one or both people.


// // 1. Define the Person class
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     // Fixed: Don't pass parameters, use this.firstName and this.lastName
//     fullName() {
//         // return "Hi!, I am " + this.firstName + " " + this.lastName + ".";

//         // or 

//         return `Hi there!, am ${this.firstName} ${this.lastName}`;
//     }
// }

// // 2. Create two people
// let person1 = new Person("Clara", "Ignatus");
// let person2 = new Person("Mike", "Agu");

// // 3. Use the fullName method correctly
// console.log("Person1:", person1.fullName());
// console.log("Person2:", person2.fullName());
 

// 7.3
// Create a class that contains properties for different animal species and the sound that each species makes, and create two (or more) animals:
// 1. Create a method that prints a given animal and its sound.
// 2. Add a prototype with another action for the animal.
// 3. Output an entire animal object into the console.


// // 1. Create the Animal class
// class animal {
//     constructor(species, sound) {
//         this.species = species;
//         this.sound = sound;
//     }

//     // Method to print the aand its sound
//     makeSound() {
//         console.log(`The ${this.species} goes "${this.sound}"`);
//     }
// }

// // 2. Add a prototype method (extra action)
// animal.prototype.move = function () {
//     console.log(`The ${this.species} is moving around.`);
// };

// // 3. Create two or more animal objects
// let dog = new animal("Dog", "Woof");
// let cat = new animal("Cat", "Meow");
// let lion = new animal("Lion", "Roar");

// // 4. Use the class method
// dog.makeSound();  // Output: The Dog goes "Woof"
// cat.makeSound();  // Output: The Cat goes "Meow"
// lion.makeSound(); // Output: The Lion goes "Roar"

// // 5. Use the prototype method
// dog.move();  // Output: The Dog is moving around.
// cat.move();  // Output: The Cat is moving around.
// lion.move(); // Output: The Lion is moving around.

// // 6. Output the entire animal object
// console.log(dog);  // Full object details
// console.log(cat);
// console.log(lion);


// or


// // 1.
// class Animal {
//     constructor(name, color, type, sound){
//         this.name = name;
//         this.color = color;
//         this.type =type;
//         this.sound = sound;
//     }
// }

// let animal1 = new Animal("Dog", "Brown", "Omnivore", "Bark");
// let animal2 = new Animal("Goat", "White", "Herbivore", "Bleet");
// let animal3 = new Animal("Lion", "Golden Yellow", "Carnivore", "Roar");

// // 2.
// Animal.prototype.action = function() {
//     console.log(`Am a ${this.name}, ${this.color} in color and I ${this.sound}.`);
// }

// animal1.action();
// animal2.action();
// animal3.action();


// CHAPTER PROJECTS

// A. Employee tracking app
// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values in the constructor.
// 2. Create two or more people with values for their first names, last names, and the number of years they've worked at the company. Add the people into an array.
// 3. Set up a prototype to return the details of the person's first and last names and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding some text to make the output a full sentence.

// 1.
class employees {
    constructor(firstName, lastName, numberOfYearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberOfYearsWorked = numberOfYearsWorked;
    }
}

// 2.
let person1 = new employees ("Mike", "Johnson", 3);
let person2 = new employees ("Daniella", "Udenweze", 9);
let person3 = new employees ("Vera", "Bishop", 5);

// 3.
employees.prototype.details = function() {
    console.log(`Hello, am ${this.firstName} ${this.lastName} and I have been working in this company for the past ${this.numberOfYearsWorked} years.`);
}

// 4.
person1.details();
person2.details();
person3.details();


// B
// Menu items price calculator
// Create a class which will allow you to work out the combined price of a number of items, and interact with it to work out the total cost of different orders.
// 1. Create a class that contains the prices of two menu items as private field declarations.
// 2. Use the constructor in the class to get the argument values (how many of each item are being bought).
// 3. Create a method to calculate and return the total cost depending on how many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation method.

// // 1.
// class Price {
//     #item1
//     #item2
//     constructor(item1, item2) {
//         this.#item1 = item1;
//         this.#item2 = item2;
//     }

//     // 2.
//     get item1() {
//         return this.#item1;
//     }
//     set item1(item1) {
//         this.#item1 = item1;
//     }
//     get item2(){
//         return this.#item2;
//     }
//     set item2(item2){
//         this.#item2 = item2;
//     }

//     // 3.
//     total() {
//         return this.#item1 + this.#item2;
//     }
// }

// // 5.
// let Order1 = new Price(20, 10);
// let Order2 = new Price(50, 35);
// let Order3 = new Price(15, 45);

// console.log("Order 1:", Order1.total());
// console.log("Order 2:", Order2.total());
// console.log("Order 3:", Order3.total());


// or

// // 1. Create a class with private fields for item prices
// class MenuCalculator {
//     #item1Price = 5.99; // Example: Burger
//     #item2Price = 2.49; // Example: Fries

//     constructor(item1Qty, item2Qty) {
//         this.item1Qty = item1Qty;
//         this.item2Qty = item2Qty;
//     }

//     // 3. Method to calculate total cost
//     calculateTotal() {
//         return (this.item1Qty * this.#item1Price) + (this.item2Qty * this.#item2Price);
//     }

//     // 4. Getter to get the total cost
//     get totalCost() {
//         return this.calculateTotal();
//     }
// }

// // 5. Create objects with different combinations
// let order1 = new MenuCalculator(2, 3);  // 2 Burgers, 3 Fries
// let order2 = new MenuCalculator(1, 1);  // 1 Burger, 1 Fries
// let order3 = new MenuCalculator(4, 0);  // 4 Burgers, 0 Fries

// // Output the total costs
// console.log("Order 1 Total: $" + order1.totalCost.toFixed(2));
// console.log("Order 2 Total: $" + order2.totalCost.toFixed(2));
// console.log("Order 3 Total: $" + order3.totalCost.toFixed(2));
