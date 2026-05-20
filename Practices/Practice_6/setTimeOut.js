// // Using Set Timeout
// setTimeout(() => {}, timeout);
// setTimeout(function() {}, timeout);
// setTimeout(function, delay, argument1, argument2...)


let greeting = (function () {
  setTimeout(() => {
    console.log("Hello, am GravityGuy, Xup");
  }, 1000);
})();


setTimeout((name) => {
    console.log(`Hello, am ${name}, Xup!`)
}, 5000, "GravityGuy");


let greet = setTimeout((name) => {
    console.log(`Hello, am ${name}, Xup!`)
}, "GravityGuy", 5000);


setTimeout(function() {
  console.log("Goodbye")
}, 3000);

setTimeout(() => {
  console.log("See you soon")
}, 1000);