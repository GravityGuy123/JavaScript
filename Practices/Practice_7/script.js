// Classes

// let dog = {
//   dogName: "JavaScript",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
// };
// console.log(dog);

// let myFriend = {name: "name", age: 1, state: "state"}

// myFriend.name = prompt("Enter your name");
// myFriend.age = Number(prompt("Enter your age"));
// myFriend.state = prompt("Enter your state");

// console.log(myFriend);

// function Dog(dogName, weight, color, breed) {
//   this.dogName = dogName;
//   this.weight = weight;
//   this.color = color;
//   this.breed = breed;
// }
// let dog = new Dog("Jacky", 30, "brown", "labrador");

// class Dog2 {
//   constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//   }
// }
// let dogClass = new Dog2("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dogClass.dogName, "is a", dogClass.breed, "and weighs", dogClass.weight);

// class person {
//     constructor(firstName, age, weight, state) {
//         this.firstName = firstName;
//         this.age = age;
//         this.weight = weight;
//         this.state = state;
//     }
// }

// let people = new person("Gravity", 15, 4.5, "Anambra");
// // console.log(people);
// console.log(people.firstName, "is", people.age,"years, weighs", people.weight, "and is from", people.state, "state");

// class Person {
//     constructor (firstName, lastName = "guy", state) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.state = state;
//     }
// } // You can assign default values for the constructor properties which that particular property can take if not assigned to the variable.

// let me = new Person("Gravity");

// let myFriend = new Person ("Clara", "Ignatus", "Anambra State");
// console.log("Hi", myFriend.firstName, "it's", me.firstName, me.lastName, "who loves you.");

// Methods

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there! I'm", this.firstname);
//   }
// }

// let p = new Person("Maaike", "van Putten");
// p.greet();

// class person {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting() {
//         console.log("Hey there!, am", this.firstName, this.lastName)
//     }
// }

// let f = new person ("Gravity", "Guy.");
// f.greeting();

// class person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     console.log("Hey there!, am", this.firstName, this.lastName);
//   }

//   compliment(name, object) {
//     return "That's a wonderful " + object + ", " + name + ".";
//   }
// }

// let f = new person ("Gravity", "Guy.");

// let compliment = f.compliment("Harry", "hat");
// console.log(compliment);

// class pip {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet() {
//         console.log("Hi there!, it's ", this.firstName)
//     }

//     compliment(name, object) {
//         return "That's a lovely " + object + ", " + name + ".";
//     }
// }

// let c = new pip();
// let compliment = c.compliment("Nicki", "ride");
// console.log(compliment);

// // 1.
// class person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

// }

// // 2.
// let f1 = new person("Chidera", "Emeh");
// let f2 = new person("Ann", "Precious");

// // 3.
// console.log(`Hello ${f1.firstName} ${f1.lastName}, am ${f2.firstName} ${f2.lastName} and it's nice to meet you.`)

// // 1.
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   fullName() {
//     // return "Hi there!, am " + this.firstName + " " + this.lastName + ".";

//     // or

//     return `Hi there!, am ${this.firstName} ${this.lastName}.`
//   }
// }

// // 2.
// let person1 = new Person("Chidera", "Emeh");
// let person2 = new Person("Ann", "Precious");

// // 3.
// console.log(`Person 1: ${person1.fullName()}`);
// console.log(`Person 2: ${person2.fullName()}`);

// PROPERTIES

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }

// let p = new Person("Maaike", "van Putten");
// console.log(`Hi, ${p.firstname}.`);

// class Person {
//     #firstName
//     #lastName
//     constructor(firstName, lastName) {
//         if (firstName.startsWith ("M")) {
//             this.#firstName = firstName;
//         } else {
//             this.#firstName = "M" + firstName;
//         }
//         this.#lastName = lastName
//     }
// }

// let p = new Person ("Mataias", "Babosa");
// console.log(p.firstName);

// class Person {
//   #firstname;
//   #lastname;
//   constructor(firstname, lastname) {
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//   }
//   get firstname() {
//     return this.#firstname;
//   }
//   set firstname(firstname) {
//     this.#firstname = firstname;
//   }
//   get lastname() {
//     return this.#lastname;
//   }
//   set lastname(lastname) {
//     this.#lastname = lastname;
//   }
// }

// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// class Person {
//     #firstName
//     #lastName
//     constructor(firstName, lastName) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }

//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(firstName) {
//         this.#firstName = firstName;
//     }
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(lastName) {
//         this.#lastName = lastName;
//     }
// }

// let p = new Person("Mia", "Condios");
// console.log(`Hola ${p.firstName} ${p.lastName}`);

// p.firstName = "Gabriella";
// p.lastName = "Kalos";
// console.log(`Hola ${p.firstName} ${p.lastName}`);

// class Person {
//     #firstName;
//     #lastName;

//     constructor(firstName, lastName) {
//       this.firstName = firstName;  // use setter
//       this.lastName = lastName;    // use setter
//     }

//     get firstName() {
//       return this.#firstName;
//     }

//     set firstName(firstName) {
//       if (firstName.startsWith("M")) {
//         this.#firstName = firstName;
//       } else {
//         this.#firstName = "M" + firstName;
//       }
//     }

//     get lastName() {
//       return this.#lastName;
//     }

//     set lastName(lastName) {
//       this.#lastName = lastName;
//     }
//   }

//   let y = new Person("Emily", "Bush");
//   console.log(y.firstName, y.lastName);  // Output: MEmily Bush

// class person {
//     #firstName
//     #lastName
//     constructor (firstName, lastName) {
//         if (firstName.startsWith("B")) {
//             this.#firstName = firstName
//         } else {
//             this.#firstName = "B" + firstName
//         }
//         this.#lastName = lastName
//     }

//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(firstName) {
//         this.#firstName = firstName;
//     }
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(lastName) {
//         this.#lastName = lastName
//     }
// }

// let m = new person("ella", "Johnson");
// console.log(`You' re welcome Miss ${m.firstName} ${m.lastName}.`);

// INHERITANCE

// class Vehicle {
//   constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log("moving at", this.currentSpeed);
//   }
//   accelerate(amount) {
//     this.currentSpeed += amount;
//   }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//     }
//     doWheelie() {
//     console.log("Driving on one wheel!");
//     }
// }

// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();


// PROTOTYPES
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// Person.prototype.intro = function() {
//     console.log(`Hi ${this.firstName}, I'm ${this.lastName}.`);
// }
// Person.prototype.favoriteColor = "Purple"; // You can inject a property into a class using prototype.


// let p1 = new Person("Ella", "Udenweze");
// console.log(`Am ${p1.firstName} and My favorite color is ${p1.favoriteColor}`);
// p1.intro()


// class Person {
//     constructor(firstName = "John", lastName = "doe") {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// let v = new Person ("Hank", "Thunderman");
// console.log(`Hi ${v.firstName} ${v.lastName}`);


// class Pip {
//     constructor(first, last){
//         this.first = first;
//         this.last = last;
//     }
// }

// Pip.prototype.getName = function getName() {
//     // return this.first + " " + this.last;
//     return `${this.first} ${this.last}`
// }

// const f1 = new Pip ("Laurence", "Svekis");
// console.log(f1.getName());




// // 1.
// class priceOfItems {
//     #item1
//     #item2

//     // 2.
//     constructor(item1, item2) {
//         this.#item1 = item1;
//         this.#item2 = item2;
//     }

//     // 3.
//     totalCost() {
//         // return "Total Cost of items:", this.#item1 + this.#item2;
//         console.log(
//           `Total Cost of items: ${this.#item1} + ${this.#item2} =`,
//           this.#item1 + this.#item2
//         );
//     }

//     // 4.
//     get item1() {
//         return this.#item1;
//     }
//     set item1(item1) {
//         this.#item1 = item1;
//     }
//     get item2() {
//         return this.#item2;
//     }
//     set item2(item2) {
//         this.#item2 = item2
//     }
// }

// // 5.
// let item1 = new priceOfItems(35, 50);
// let item2 = new priceOfItems(40, 50);
// let item3 = new priceOfItems(15, 20);

// item1.totalCost();
// item2.totalCost();
// item3.totalCost();