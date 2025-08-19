// DOM and BOM

// BOM (Window Browser Object) is the element that makes it possible for your JavaScript code to communicate with the browser.
// 
// console.dir(window); // // Creates a window that lists all the available window methods for your browser.
// console.dir(window.document); // Creates a window that lists all the available documents.
// console.dir(window.history); // Creates a window that lists all the histories.

// window.history.go(-1); // Used to go back to the previous page
// console.dir(window.navigator)


// DOM (Document Object Model)

// Using Queryselector and QueryselectorAll
const head1 = document.querySelector("h1");
const head2 = document.querySelector(".input");
console.log("Head 1:", head1);
console.log("Head 2:", head2);


const head3 = document.querySelectorAll("h1");
console.log("Head 3:", head3);


const outPut = document.querySelector("h1");
console.log(outPut)
outPut.style.color = "red";
outPut.style.backgroundColor = "white"
outPut.style.boxShadow = "3px 3px 8px black"
outPut.textContent = "What's Cooking"
















