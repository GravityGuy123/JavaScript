// Assignments

// 9.1
// 1. Go back to the website you were just viewing and execute the command console.dir(window) .
// 2. Can you find the document object that is nested within the window object? Under the root of the window object in the console, you can navigate down to the object that is named document .
// 3. Can you find the height and width (in pixels) of your window? You can return the inner and outer window.

// // 1.
// console.dir(window.document);

// // 9.2
// // Travel through the window object to get to the location object, then output the values of the protocol and href properties of the current file, into the console.

// console.dir(window.location.protocol)
// console.dir(window.location.href)

//  9.3
// Select a page element and update the content, change the style, and add attributes. Create an HTML file containing a page element with a class of output using the following code template:

// <!DOCTYPE html >
{
  /* <html> */
}
{
  /* <div class="output"></div> */
}
{
  /* <script> */
}
{
  /* </script> */
}
{
  /* </html> */
}

// Within the script tags, make the following changes to the output element:
// 1. Select the page element as a JavaScript object.
// 2. Update the textContent property of the selected page element.
// 3. Using the classList . add object method, add a class of red to the element.
// 4. Update the id property of the element to tester .
// 5. Through the style object, add a backgroundColor property of red to the page element.
// 6. Get the document URL via document.URL and update the text of the output element to contain the value of the document URL. You can log it in the console first to ensure you have the correct value.

// // 1.
// const outPut = document.querySelector(".Output");

// // 2.
// outPut.textContent = "Hi People";

// // 3.
// outPut.classList = "red";

// // 4.
// outPut.id = "tester";

// // 5.
// outPut.style.backgroundColor = "red";

// // 6.
// console.dir(window.document.URL);
// outPut.textContent = window.document.URL;


// Chapter project
// 1. Manipulating HTML elements with JavaScript Take the HTML code below:

{/* <div class="output">
  <h1>Hello</h1>
  <div>Test</div>
  <ul>
    <li id="one">One</li>
    <li class="red">Two</li>
  </ul>
  <div>Test</div>
</div>; */}

// Take the following steps (and experiment further) to understand how HTML elements can be manipulated with JavaScript code.
// 1. Select the element with the class output .
// 2. Create another JavaScript object called mainList and select only the ul tag that is within the output element. Update the ID of that ul tag to mainList .
// 3. Search for the tagName of each div , and output them into the console as an array.
// 4. Using a for loop, set the ID of each of the div tags to id with a numeric value of the order they appear within output. Still within the loop, alternate the color of the contents of each element in output to be red or blue.

// // 1.
// const OutPut = document.querySelector(".output");

// // 2.
// const mainList = OutPut.querySelector("ul");
// mainList.id = "mainList";
// console.log(mainList)

// // 3.
// const divElements = OutPut.querySelectorAll("div");
// const divTagName = Array.from(divElements).map(d => d.tagName);
// console.log(divTagName);

// // 4.
// for (let d = 0; d < divElements.length; d++) {
//     divElements[d].id = `id:${d + 1}`;
//     divElements[d].style.color = d % 2 === 0 ? "blue" : "red";
// }

const test = document.querySelector(".test");
test.style.color = "red";
test.style.fontFamily = "arial"
test.textContent = "Xup world"
test.id = "test"
console.log(test);