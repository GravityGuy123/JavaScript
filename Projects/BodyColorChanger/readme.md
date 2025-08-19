# Background Color Changer 🎨

This project is a simple JavaScript application that changes the background color of the webpage each time a button is clicked. It cycles through a predefined list of colors and updates both the **page background** and the **button appearance** dynamically.

## Features
- ✅ Changes the **page background color** from a long list of predefined colors.  
- ✅ The **button’s background color and text** also change to match the current color.  
- ✅ Automatically adjusts the **button text color** (black or white) depending on the background brightness for better readability.  
- ✅ Applies a **border** and a **shadow effect** to the button for improved styling.  
- ✅ Loops back to the beginning of the color list once all colors have been used.  

## How It Works
1. A list of colors is stored in the `colors` array.  
2. Each button click triggers the `changeFunc()` function.  
3. The function:
   - Updates the body’s background color.  
   - Updates the button’s background color, text content, and text color.  
   - Cycles through the color list and resets when it reaches the end.  

## Usage
1. Add a button with the `id="change"` to your HTML file.  
   ```html
   <button id="change" onclick="changeFunc()">Change Color</button>
Link the JavaScript file containing this code.

html
Copy
Edit
<script src="script.js"></script>
Open the page in a browser and click the button to see the background color change.

Demo
Each click changes the color of the page and button while keeping the button text readable.