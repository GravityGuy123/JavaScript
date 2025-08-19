// const a = 32n;
// const b = 32;
// console.log(a + b);

// console.log("De Guy");


const a = 32n;
const b = 32;


// try catch is used when you suspect that your code might throw an error and since our code runs line by line, once your code gets to the line with error, iyt catches it and continues running the rest of the code. Under normal circumstances, your code would throw an error and terminate or stop running if it gets to a line with an error or errors. 

// try {
//     console.log(a + b);
// } catch(err) {
//     console.log(err);
// }

// console.log("De Guy")

// function hello() {
//     console.log("Hello");
// }
// setTimeout(hello, 2000); //This is 2000mili seconds(2 seconds)
// console.log("World");


// let fetchPost1 = async () => {}; // Same as the code below


// async function fetchPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data);
// }

// document.getElementById("btn").addEventListener("click", async () => {
//     console.log("triggered");
//     await fetchPost()
// });

// const fetchWaether = asnc (city= "enugu") => {
//     const apiKey = "7a3efb0e573c805e4d875bc7437e7f57";
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/waether?q=${city}&`)
//     } catch (err) {
//         console.log(err)
//     }
// };


let nums = [1, 2, 3, 4];

// let numSquare = nums.map((n) => n * n); // or
let numSquare = nums.map((n) => Math.pow(n, 2));
console.log(numSquare);

const message = { Error: "Operation Failed", Success: "Operation Success" };

try {
    const reult = a + b;
    console.log(message.Success);
} catch {
    console.log(message.Error);
}

// const animal = {name: "Bird", color: "blue"};

let color = "Red;"
let breed = "Chihuahua;";

class animal2 {
    constructor(name) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }
    makeAnimal() {
        console.log(`A ${this.name} ${this.color} ${this.breed}`);
    }
}
const dog = new animal2("Dog", "Brown", "Chuahua");
const bird = new animal2("bird", "blue", "hummingbird");


// Ask or research/read up on GS6
// Read up on Class, OOP, Typescript, SPA(Single Page Application), Nest.js.