// // ES6 Syntax Guide for Beginners
// // 1. Spread Operator (...)

// // Array Spread
// Copying arrays

// const fruits = ['apple', 'banana'];
// const moreFruits = [...fruits, 'orange', 'grape']
// const moreFruits2 = ['orange', 'grape', ...fruits]
// console.log(moreFruits, moreFruits2);


// // Combining arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr);


// let arr3 = ['a', 'b', 'c'];
// let arr4 = ['d', 'e', 'f'];

// const combinedArr2 = [...arr3, ...arr4];
// console.log(combinedArr2);


// // Converting string to array
// const word1 = 'hello';
// const letters1 = [...word1];
// console.log(letters1);

// const word2 = "what's cooking";
// const letters2 = [...word2];
// console.log("Word2", letters2);


// // Object Spread
// // Copying objects
// const person = {name: 'Gravity', age: 30};
// const updatedPerson = {...person, city: 'New York', country: 'America'}
// console.log(updatedPerson);


// // Overriding properties
// const original = {a: 1, b: 2, c: 3};
// const modified = {...original, b: 4, c: 6};
// console.log(modified)

// const person2 = {name: 'gravity', age: 13, field: 'Web Developer'};
// const updatedPerson2 = {...person2, age: 9, field: 'Cyber Security Expert'};
// console.log(person2, updatedPerson2)


// // 2. Destructuring
// Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
// // Types of Destructuring
// // a. Array Destructuring
// // a. Object Destructuring

// // Array Destructuring
// // Basic Destructuring
// const numbers = [1, 2, 3, 4, 5, 7];

// const colors = ['red', 'green', 'blue'];
// const [first, second, third] = colors;

// console.log('First:', first);
// console.log('Second:', second);
// console.log('Third:', third);


// const [a, b, c] = [1, 2, 3]
// console.log('a:', a);
// console.log('b:', b);
// console.log('c:', c);

// // Skipping Values
// const [l, , n] = numbers;
// console.log('l:', l);
// console.log('n:', n);

// const [k, , m, , o] = numbers;
// console.log('k', k);
// console.log('m', m);
// console.log('o', o);


// // Default Values
// const [x = 10, y = 20, z = 30] = [1, 2];
// console.log('x:', x);
// console.log('y:', y);
// console.log('z:', z);


// const [p = 'Hello', q = 'World'] = ['Hi'];
// console.log('p:', p);
// console.log('q:', q);

// const pq = [p, q];
// console.log('pq:', ...pq);


// const pq1 = p.concat(' ', q);
// console.log('pq1:', pq1);

// const pq2 = p + ' ' +  q;
// console.log('pq2:', pq2);

// const pq3 = `${p} ${q}`;
// console.log('pq3:', pq3);


// Object Destructuring
// // Basic destructuring
// const user = {userName: 'Alice', age: 30, email: 'alice@gmail.com'};
// const {userName, age} = user

// console.log(`Name:, ${userName}, Age:, ${age}`);


// const {userName: user2, email} = user;
// console.log("\nUser 2:", user2);
// console.log("Email:", email);

