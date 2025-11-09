// Arbitrary Arguments
// 1️⃣ The old way: arguments object
function makePizza() {
  console.log(arguments);
}

makePizza("pepperoni", "mushrooms", "extra cheese");

// Notes:
// arguments holds all values passed to the function.
// It’s array-like (you can loop through it) but not a real array (no .map(), .filter(), etc.). It works only in regular functions, not arrow functions.

// 2️⃣ The modern way: Rest parameters (...args)
function makePizza(...toppings) {
  console.log(toppings);
}

makePizza("pepperoni");
makePizza("mushrooms", "green peppers", "extra cheese");

// ✅ Notes:
// ...toppings collects all remaining positional arguments into an array.
// Works with arrow functions too.
// You can mix normal parameters and rest parameters.

// 🧠 Example with fixed + arbitrary arguments
function orderPizza(size, crust, ...toppings) {
  console.log(`Size: ${size}`);
  console.log(`Crust: ${crust}`);
  console.log(`Toppings: ${toppings.join(", ")}`);
}

orderPizza("Large", "Thin", "Cheese", "Tomato", "Olives");

// 🧩 3️⃣ Arbitrary keyword-style arguments in JS
function createProfile({ name, age, location }) {
  console.log(name, age, location);
}

createProfile({ name: "Simon", age: 25, location: "Nigeria" });

// ✅ Here, the function takes one object — acting like Python’s keyword arguments.

// 🧠 JavaScript equivalent
// We can mimic this using:
// Rest parameters (...items) for positional arguments
// An object parameter for keyword-style arguments

function orderFood(...items) {
  // The last argument could be an object containing keyword-style info
  const maybeDetails = items[items.length - 1];

  // If the last item is an object, treat it as keyword args
  let details = {};
  if (typeof maybeDetails === "object" && !Array.isArray(maybeDetails)) {
    details = items.pop(); // remove and store the object
  }

  console.log("Items:", items);
  console.log("Details:", details);
}

// Example call:
orderFood("Pizza", "Burger", "Fries", { size: "Large", drink: "Coke" });

// 💡 Even cleaner version (using destructuring)
function orderFood(items, options = {}) {
  console.log("Items:", items);
  console.log("Details:", options);
}

orderFood(["Pizza", "Burger"], { size: "Medium", drink: "Pepsi" });
