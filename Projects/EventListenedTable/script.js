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
