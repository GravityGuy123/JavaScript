// Assigments

// 10.1
// Take the following steps:
// 1. Create and open the above sample web page, or visit your favorite website, and open the document body in the console with console.dir(document) .
// 2. In the body.children property, select some of the child elements. View how they match the page content.
// 3. Navigate to and output the next nodes or elements into the console.

// 2.
console.dir(document.body.children);
console.dir(document.body.children.main);


// 10.2
// Try experimenting with getting elements by their IDs:
// 1. Create an HTML element and assign an ID in the element attribute.
// 2. Select the page element using its ID.
// 3. Output the selected page element into the console.


// 1. Create an HTML element

// 2.
const main = document.getElementById("main");
main.style.color = "green"

// 3.
console.log(main);


// 10.3
// Use JavaScript to select page elements via their tag name:
// 1. Start by creating a simple HTML file.
// 2. Create three HTML elements using the same tag.
// 3. Add some content within each element so you can distinguish between them
// 4. Add a script element to your HTML file, and within it select the page elements by tag name and store them in a variable as an array
// 5. Using the index value, select the middle element and output it into the console.


// 1.

// 2.

// 3.

// 4.
const colorParagraph2 = document.getElementsByTagName("p").item(1);
colorParagraph2.style.color = "green";

// 5.
console.log(colorParagraph2);





// 10.4
// Select all matching page elements using the class name of the element.
// 1. Create a simple HTML file to work on.
// 2. Add three HTML elements adding the same class to each. You can use different tags as long as the same element class is included. Add some content within each element so you can distinguish between them.
// 3. Add a script element to your file, and within it select the page elements by class name. Assign the resulting HTMLCollection values to a variable.
// 4. You can use an index value to select the individual HTMLCollection items, just as you would for array items. Starting with an index of 0, select one of the page elements with the class name and output the element into the console.


// 3.
const myClass = document.getElementsByClassName("my-class");

// 4.
console.log(myClass.item(0));
console.log(myClass.item(1));
console.log(myClass.item(2));



// 10.5
// Use querySelector() to enable single element selection:
// 1. Create another simple HTML file.
// 2. Create four HTML elements adding the same class to each. They can be different tag names as long as they have the class within the element attribute.
// 3. Add some content within each element so you can distinguish between them.
// 4. Within a script element, use querySelector() to select the first occurrence of the elements with that class and store it in a variable. If there is more than one matching result in querySelector() , it will return the first one.
// 5. Output the element into the console.

// 4.
const selectOne = document.querySelector(".select");

// 5.
console.log(selectOne);



// 10.6
// Use querySelectorAll() to select all matching elements in an HTML file:
// 1. Create an HTML file and add four HTML elements, adding the same class to each one.
// 2. Add some content within each element so you can distinguish between them.
// 3. Within a script element, use QuerySelectorAll() to select all the matching occurrences of the elements with that class and store them in a variable.
// 4. Output all the elements into the console, first as an array and then looping through them to output them one by one.


// 3.
const selectAll = document.querySelectorAll(".select-all");

// 4.
console.log(selectAll);



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

function message(element) {
  // Step 3: Output the element object to console
  console.dir(element);

  // Optional: Show which button was clicked
  console.log("You clicked: " + element.innerText);
}


// 10.8
// Creating custom attributes: using an array of names, the following code will update the element's HTML, adding HTML code using the data from the array. The items within the array will be output to the page as HTML code. The user will be able to click the page elements and they will display the page element attribute values.

// Take the following steps:
// 1. Create an array of names. You can add as many as you want—all the string values will be output onto the page within a table.
// 2. Select the page elements as JavaScript objects.
// 3. Add a function and also invoke that function within the JavaScript code. The function can be called build() as it will be building the page content. Within the build function, you will be setting up the HTML in a table.
// 4. Create a table named html , and within the tags, loop through the contents of the array and output the results into the html table.
// 5. Add a class called box to one of the cells that has the index value of the item from the array, adding the same class to the elements for each additional row.
// 6. As you create the HTML for the elements within the tr element, create an attribute called data-row in the main row element that includes the index value of the item from the array. In addition, add another attribute within the element called data-name that will contain the text output.
// 7. Within the attribute of the same tr element, also add onclick to invoke a function named getData passing the current element object as this into the function parameter.
// 8. Add the table of HTML code to the page.
// 9. Create a function named getData that will be invoked once the HTML tr elements are clicked. Once the tr element is clicked, use getAttribute to get the attribute values of the row value and the contents of the text output and store them in different variables.
// 10. Using the values in the attributes stored in the preceding step, output the values into the message element on the page.
// 11. Once the user clicks the element on the page, it will display the details coming from the element attributes within the element with the id of message.

// Step 1: Create array of names
const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

// Step 2 & 3: Select elements + Create build function
const output = document.getElementById("output");

function build() {
  // Step 4: Build table HTML
  let html = "<table>";
  html += "<tr><th>Index</th><th>Name</th></tr>";

  names.forEach((name, index) => {
    // Step 5, 6, 7: Add class, attributes, onclick
    html += `
          <tr data-row="${index}" data-name="${name}" onclick="getData(this)">
            <td class="box">${index}</td>
            <td>${name}</td>
          </tr>
        `;
  });

  html += "</table>";

  // Step 8: Add to page
  output.innerHTML = html;
}

// Step 9 & 10: Function to get attribute values and show in #message
function getData(element) {
  let rowValue = element.getAttribute("data-row");
  let nameValue = element.getAttribute("data-name");
  let message = document.getElementById("message");

  message.textContent = `You clicked row ${rowValue} with name: ${nameValue}`;
}

// Invoke build function
build();

// NB: When you include a this keyword within the function called in an event e.g onclick="message(this)", the function gets the current element object data that triggered the event. This allows you to access properties of that element directly within the function, such as its attributes or styles. but when you use getData(this), it passes the current element object to the getData function, allowing you to manipulate or retrieve data from that specific element.

// When you don't include a this keyword within the function called in an event e.g onclick="message()", the function will not receive any specific element data. Instead, it will refer to the global context or the window object, which means you won't have access to the properties of the element that triggered the event. This can lead to errors or unexpected behavior if you try to access properties that don't exist on the global object.


// 10.9
// Try an alternative way to implement similar logic to Practice exercise 10.7. Use the following HTML code as a template for this exercise, and add the contents of the script element:

// <!doctype html>
// <html>
// <head>
// <title>JS Tester</title>
// </head>
// <body></body>
// <div>
// <button>Button 1</button>
// <button>Button 2</button>
// <button>Button 3</button>
// </div>
// <script>
// </script>
// </body>
// </html>

// Take the following steps:
// 1. Select all the page buttons into a JavaScript object.
// 2. Loop through each button, and create a function within the button scope called output.
// 3. Within the output() function, add a console.log() method that outputs the current object's textContent . You can reference the current parent object using the this keyword.
// 4. As you loop through the buttons attach an event listener that when clicked invokes the output() function.



// // Step 1: Select all buttons
// const buttons = document.querySelectorAll(".button-click");

// // Step 2: Loop through each button
// buttons.forEach(function (btn) {

//   // Step 3: Define output function inside the loop
//   function output() {
//     console.log("You clicked: " + this.textContent);
//   }

//   // Step 4: Attach event listener
//   btn.addEventListener("click", output);
// });


let el = document.createElement("p");
el.innerText = Math.floor(Math.random() * 100);
document.body.appendChild(el);
console.log(el)