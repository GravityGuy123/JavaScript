// Grabbing DOM elements
const body = document.body;
const changeBtn = document.getElementById("change");

// Creating required variables
const colors = ["red", "blue", "yellow", "darkorange", "green", "orange", "cyan", "pink", "magenta", "white", "purple", "brown", "black", "gray", "silver", "gold", "maroon", "navy", "teal", "olive", "lime", "indigo", "violet", "turquoise", "salmon", "coral", "chocolate", "crimson", "khaki", "lavender", "orchid", "plum", "tan", "peach", "aqua", "azure", "mint", "ivory", "beige", "burlywood", "chartreuse", "firebrick", "honeydew", "seashell", "sienna", "slateblue", "springgreen", "tomato", "wheat", "thistle", "royalblue", "skyblue", "powderblue", "steelblue", "lightgray", "darkgray", "dimgray"];

// Creating a variable for index and assigning the maximum list value for color
body.style.backgroundColor = "darkblue";
let index = colors.length -1;

function changeColor() {
  if (index <= 0) {
    index = colors.length - 1;
  }

  const currentColor = colors[index];
  body.style.backgroundColor = currentColor;
  change.style.backgroundColor = currentColor;
  change.textContent = currentColor.toUpperCase();

  if (
    currentColor === "seashell" ||
    currentColor === "honeydew" ||
    currentColor === "beige" ||
    currentColor === "ivory" ||
    currentColor === "mint" ||
    currentColor === "azure" ||
    currentColor === "lavender" ||
    currentColor === "khaki" ||
    currentColor === "white" ||
    currentColor === "yellow"
  ) {
    change.style.color = "black";
  } else {
    change.style.color = "white";
  }
  currentColor === "white" ? change.style.boxShadow = "3px 3px 35px black" : change.style.boxShadow = "3px 3px 35px"

  index--;
}