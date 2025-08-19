const body = document.body;
const changeBtn = document.getElementById("changeBtn");
const colors = ['red', 'blue', 'green', 'orange', 'purple', 'orange', 'darkred', 'darkblue', 'pink', 'magenta', 'yellowgreen', 'gray', 'cyan', 'maroon'];
let index = 0;
let buttonIndex = colors.length -1;

function changeAttr() {
  // change body color
  body.style.backgroundColor = colors[index];

  // change button text + background
  changeBtn.textContent = colors[buttonIndex];
  changeBtn.style.backgroundColor = colors[buttonIndex];

  // move indices
  index++;
  buttonIndex--;

  // reset if we reached the end
  if (index >= colors.length) {
    index = 0;
  }
  if (buttonIndex < 0) {
    buttonIndex = colors.length -1;
  }
}