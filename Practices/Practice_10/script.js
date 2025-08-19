// console.dir(document.body.children);

// Getting elements by QuerySelector and QuerySelectorAll
// const tree = document.querySelector(".tree");
// const list = document.querySelectorAll("li");

// for (let l = 0; l < list.length; l++) {
//     if (l % 2 === 0) {
//         list[l].style.color = "red";
//     } else {
//         list[l].style.color = "blue";
//     }
// }

// let list = document.querySelectorAll(".one");

// for (let i = 0; i < list.length; i++) {
//   // if (i % 2 === 0) {
//   //   list[i].style.color = "red";
//   // } else {
//   //   list[i].style.color = "blue";
//   // }
//   i % 2 === 0 ? (list[i].style.color = "red") : (list[i].style.color = "blue");
// }

// const thanks = document.querySelectorAll(".ul-List");
// console.log(thanks.item(0));

// Getting elements by ID
// const List = document.getElementById("list")

// if (list)

// Getting Elements by tagName
// const program1 = document.getElementsByTagName("h3");
// const program2 = document.getElementsByTagName("h3").item(0);
// const program3 = document.getElementsByTagName("h3").item(1);
// const list2 = document.getElementsByTagName("li").item(3);
// list2.textContent = "PHP"
// console.log(program1);
// console.log(program2, program3);
// console.log(list2);

// const test = document.getElementsByClassName("example");
// console.log(test);

// 10.4
// Select all matching page elements using the class name of the element.
// 1. Create a simple HTML file to work on.
// 2. Add three HTML elements adding the same class to each. You can use different tags as long as the same element class is included. Add some content within each element so you can distinguish between them.
// 3. Add a script element to your file, and within it select the page elements by class name. Assign the resulting HTMLCollection values to a variable.
// 4. You can use an index value to select the individual HTMLCollection items, just as you would for array items. Starting with an index of 0, select one of the page elements with the class name and output the element into the console.

// // 3.
// const myClass = document.getElementsByClassName("my-class");

// // 4.
// console.log(myClass.item(0));
// console.log(myClass.item(1));
// console.log(myClass.item(2));

// // Accessing elements with a CSS selector
// const secList = document.querySelectorAll("li.two");
// for (let s = 0; s < secList.length; s++) {
//   s % 2 === 0 ? secList[s].style.color = "yellowGreen" : secList[s].style.color = "gray"
// }
// console.log(secList);

// const thirdList = document.querySelectorAll("li.three");
// for (let t = 0; t < thirdList.length; t++) {
//   if (t % 2 === 0) {
//     thirdList[t].style.backgroundColor = "purple";
//     thirdList[t].style.color = "white";
//     thirdList[t].style.boxShadow = "3px 3px 8px";
//     thirdList[t].style.listStyleType = "none";
//   } else {
//     thirdList[t].style.backgroundColor = "white";
//     thirdList[t].style.color = "purple";
//     thirdList[t].style.boxShadow = "8px 8px 18px";
//     thirdList[t].style.listStyleType = "none";
//   }
// }
// console.log(thirdList);

// function stop() {
//   console.log("Stop right there");
// };

// The code below wont work because the event listening function was assigned to the variable yet to be created. I.e You’re assigning the function directly to .onclick and storing the result in clickDiv. clickDiv will store the function, not the element.

// const clickDiv = document.getElementById("event-one").onclick = function() {
//   alert("Clicked")
// };

// const clickDiv2 = document.getElementById("event-one");
// clickDiv2.onclick = function () {
//   console.log("Clicked");
// };
// clickDiv2.style.backgroundColor = "purple";
// clickDiv2.style.width = "60px";
// clickDiv2.style.height = "20px";
// clickDiv2.style.padding = "0.4rem 1rem";
// clickDiv2.style.cursor = "pointer";
// clickDiv2.style.color = "white";
// console.log(clickDiv2);

// const loginButton = document.querySelector(".login-btn");
// const signupButton = document.querySelector(".signup-btn");
// loginButton.onclick= function() {
//   signupButton.textContent = "Button was clicked";
//   signupButton.style.color = "white"
// }

// signupButton.onclick = function() {
//   loginButton.textContent = "Don't touch me";
//   loginButton.style.backgroundColor = "darkBlue"
// }

// const userInput = prompt("Enter your name")
// signupButton.onclick = function() {
//   console.log(`Welcome back ${userInput}`)
// }
// console.log('Welcome back')

// let button = document.getElementById("myButton");
// let message = document.getElementById("message");

// // Assign event handler
// button.onclick = function () {
//   message.textContent = "Button was clicked!";
//   message.style.color = "green";
// };

function reveal() {
  console.log("Love");
}

function buzzOff() {
  console.log("Buzz off!");
}

// 10.7
// Create a button within a basic HTML document and add the onclick attribute. The example will demonstrate how you can reference object data with this :
// 1. Create a function to handle a click within your JavaScript code. You
// can name the function message .
// 2. Add this to the onclick function parameters sending the current element object data using this.
// 3. Within the message function, use console.dir() to output in the console the element object data that was sent to the function using onclick and this .
// 4. Add a second button to the page also invoking the same function on the click.
// 5. When the button is clicked, you should see the element that triggered the click in the console, like so.

// step 1.
// const clickBtn = document.querySelector(".click-btn");

// function message(element) {
//   // Step 3: Output the element object to console
//   console.dir(element);

//   // Optional: Show which button was clicked
//   console.log("You clicked: " + element.innerText);
// };

// function show(value){
//   console.dir(value);

//   console.log("You clicked", value.innerText);
// }

// const change = document.getElementById("change");
// change.style.backgroundColor = "red";

// change.onclick = function() {
//   if (change.style.backgroundColor === 'purple') {
//     change.style.backgroundColor = 'red';
//   } else if (change.style.backgroundColor === 'red') {
//     change.style.backgroundColor = "darkblue";
//   } else if (change.style.backgroundColor === 'darkblue') {
//     change.style.backgroundColor = "green";
//   } else if (change.style.backgroundColor === 'green') {
//     change.style.backgroundColor = "purple";
//   }
// }

// const colors = ["purple", "red", "darkblue", "green", "orange", "darkYellow", "blue"];
// let index = 0;

// change.onclick = function () {
//   index = (index + 1) % colors.length; // move to next, loop back
//   change.style.backgroundColor = colors[index];
// };

// function display(element) {
//   console.log("You clicked", element.innerText)
// };

// const disappear = document.getElementById("invisible");
// disappear.style.display = 'block';
// disappear.style.color = 'initial'
// disappear.onclick = function() {
//   if (disappear.style.display === 'block') {
//     disappear.style.visibility = "hidden";
//   } else if (disappear.style.visibility === "hidden") {
//     disappear.style.display = "block";
//   }

//   disappear.style.display === "block"
//     ? (disappear.style.backgroundColor = "white")
//     : (disappear.style.backgroundColor = "darkblue", disappear.style.color = 'white');
// }

// function rainbowify() {
//   let divs = document.getElementsByTagName("div");

//   for (let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = divs[i].id;
//   }

// }

// const send = document.getElementById("send");
// function disappear() {
//   send.classList.add('hide'); // This will hide the button
// };

// function appear() {
//   send.classList.remove('hide'); // This will show the button
// };

// console.log(send);

// const make = document.querySelector(".make");
// const originalClass = make.className;
// // make.style.backgroundColor = 'green'

// function add() {
//   make.classList.add('red')
// }

// function remove() {
//   // make.classList.remove('red');
//   make.classList = originalClass;
// }
// console.log(make)

// function setAttr() {
//   const shape = document.querySelector(".shape");
//   shape.setAttribute("style", "background-color: darkblue; color: white; padding: 0.4rem 1rem; cursor: pointer;");
//   shape.setAttribute("id", "shape")
//   console.log(shape)
// };

// function changeShape() {
//   const square = document.querySelector(".square");
//   square.setAttribute("style", "border-radius: 40%; background-color: red")
// }
// function change() {
//   const change = document.querySelector(".change");
//   change.setAttribute(
//     "style",
//     "background-color: white; color: green;  border: none; font-weight: bold; padding: 0.4rem 1rem; margin-bottom: 0.2rem; border-radius: 50%;"
//   );
//   }

// function rainbowify(){
//   let divs = document.getElementsByTagName("div");

//   for(let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = divs[i].id;
//   }
// }

// Event listeners on elements

function addRandomNumber() {
  const addNum = document.getElementById("add-num");
  let randomNum = Math.floor(Math.random() * (1000 - 20 + 1) + 20);
  addNum.textContent = `${randomNum}`;
}

// let nameValue = 0; // keeps track across clicks

// function nextName() {
//   const changeName = document.getElementById("add-Name");
//   const names = [
//     "GravityGuy",
//     "Sonic",
//     "DevMaster",
//     "CodeLord",
//     "BadAss Hacker",
//   ];

//   // Loop through the names array and change the text content
//   for (let n = 0; n < names.length; n++) {
//     if (n === nameValue) {
//       changeName.textContent = names[n];
//     }
//   }
//   // ✅ increment happens only once per click
//   // move to the next index after updating
//   nameValue++;

//   // reset if we passed the last name
//   if (nameValue >= names.length) {
//     nameValue = 0;
//   }
// }

// let nameValue = 0;

// function nextName() {
//   const changeName = document.getElementById("add-name");
//   const names = [
//     "GravityGuy",
//     "Sonic",
//     "DevMaster",
//     "CodeLord",
//     "BadAss Hacker",
//   ];

//   changeName.textContent = names[nameValue];

//   nameValue++;
//   if (nameValue >= names.length) {
//     nameValue = 0;
//   }
// }




// const names = ["GravityGuy", "Sonic", "DevMaster", "CodeLord", "BadAss Hacker"];
// let index = 0;
// const changeName = document.getElementById("changeName");

// function nextName() {
//   changeName.textContent = names[index]
//   index++

//   if (index >= names.length){
//     index = 0;
//   }
// }




const homeStuffs = document.getElementById("object");
const objects = ["Phone", "Mouse", "Charger", "MIFI", "Phone Stand", "Extension", "Flashlight"];
let position = 0;

function changeStuff() {
  homeStuffs.textContent = objects[position];
  position++

  if (position >= objects.length) {
    position = 0;
  }
}




const colorElement = document.querySelector(".color");
const colors = ['red', 'blue', 'green', 'orange', 'purple', 'orange', 'darkred', 'darkblue', 'pink', 'magenta', 'yellowgreen', 'gray', 'cyan'];
let index = 0;

function changeColor(){
  colorElement.textContent = colors[index];
  colorElement.style.backgroundColor = colors[index];
  index % 2 === 0
    ? (colorElement.style.fontWeight = "bold")
    : (colorElement.style.fontWeight = "normal");
  index++

  if (index >= colors.length) {
    index = 0;
  }
}