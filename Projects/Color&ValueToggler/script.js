const firstView = document.querySelector(".view1");
const secondView = document.querySelector(".view2");
const changeBtn = document.getElementById("change-btn");

const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "pink",
  "black",
  "magenta",
  "darkblue",
];
let firstViewIndex = 0;
let secondViewIndex = colors.length - 1;

function changeFunc() {
  if (firstViewIndex >= colors.length || secondViewIndex < 0) {
    firstViewIndex = 0;
    secondViewIndex = colors.length - 1;
  }

  firstView.style.backgroundColor = colors[firstViewIndex];
  firstView.textContent = colors[firstViewIndex].toUpperCase();
  secondView.style.backgroundColor = colors[secondViewIndex];
  secondView.textContent = colors[secondViewIndex].toUpperCase();

  firstViewIndex++;
  secondViewIndex--;
}
