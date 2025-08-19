// Grabbing the elements
const body = document.body;
const change = document.getElementById("change");

// Creating the necessary variables and initiating a backgroundcolor for body
const colors = ["red", "blue", "darkyellow", "green", "orange", "cyan", "pink", "magenta", "purple", "brown", "black", "gray", "silver", "gold", "maroon", "navy", "teal", "olive", "lime", "indigo", "violet", "turquoise", "salmon", "coral", "chocolate", "crimson", "khaki", "lavender", "orchid", "plum", "tan", "peach", "aqua", "azure", "mint", "ivory", "beige", "burlywood", "chartreuse", "firebrick", "honeydew", "seashell", "sienna", "slateblue", "springgreen", "tomato", "wheat", "thistle", "royalblue", "skyblue", "powderblue", "steelblue", "lightgray", "darkgray", "dimgray"];

let index = 0;
body.style.backgroundColor = "limegreen"


// Creating a Function to run the command
function changeFunc() {
  if (index >= colors.length) {
    index = 0;
  }

  const currentColor = colors[index];

  body.style.backgroundColor = currentColor;
  change.style.backgroundColor = currentColor;
  change.textContent = currentColor;

  if (isBright(currentColor)) {
    change.style.color = "black";
  } else {
    change.style.color = "white";
  }
  change.style.border = "3px solid white";
  change.style.boxShadow = "3px 3px 8px";

  // if (
  //   change.style.backgroundColor === "yellow" ||
  //   change.style.backgroundColor === "beige" ||
  //   change.style.backgroundColor === "burlywood" ||
  //   change.style.backgroundColor === "azure" ||
  //   change.style.backgroundColor === "mint" ||
  //   change.style.backgroundColor === "khaki" ||
  //   change.style.backgroundColor === "ivory"
  // ) {
  //   change.style.color = "black";
  // }

  index++;
}

function isBright(param) {
    if (param === "khaki" || param === "beige") {
      return true;
    }
    return false;
}
