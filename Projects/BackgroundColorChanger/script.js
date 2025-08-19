// Grabbing the elements
const body = document.body;
const change = document.getElementById("change");

// Creating the necessary variables and initiating a backgroundcolor for body
const colors = ["red", "blue", "yellow", "darkorange", "green", "orange", "cyan", "pink", "magenta", "white", "purple", "brown", "black", "gray", "silver", "gold", "maroon", "navy", "teal", "olive", "lime", "indigo", "violet", "turquoise", "salmon", "coral", "chocolate", "crimson", "khaki", "lavender", "orchid", "plum", "tan", "peach", "aqua", "azure", "mint", "ivory", "beige", "burlywood", "chartreuse", "firebrick", "honeydew", "seashell", "sienna", "slateblue", "springgreen", "tomato", "wheat", "thistle", "royalblue", "skyblue", "powderblue", "steelblue", "lightgray", "darkgray", "dimgray"];

let index = 0;
body.style.backgroundColor = "limegreen";

// Creating a Function to run the command
function changeFunc() {
  if (index >= colors.length) {
    index = 0;
  }

  const currentColor = colors[index];

// Setting Button color and textcontent 
  body.style.backgroundColor = currentColor;
  change.style.backgroundColor = currentColor;
  change.textContent = currentColor.toUpperCase();

  if (
    currentColor === "yellow" || currentColor === "white" || currentColor === "khaki" || currentColor === "lavender"|| currentColor === "azure" || 
    currentColor === "mint" || currentColor === "beige" || currentColor === "ivory" || currentColor === "beige" || currentColor === "honeydew" || currentColor === "seashell" || currentColor === "wheat") {
    change.style.color = "black"
  } else {
    change.style.color = "white"
  }

  change.style.border = "3px solid white";
  change.style.boxShadow = "3px 3px 8px";

  index++;
}

