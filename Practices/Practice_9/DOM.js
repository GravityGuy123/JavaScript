const parentContainer = document.getElementById("container");

parentContainer.style.backgroundColor = "blue";
parentContainer.style.color = "white";
parentContainer.style.width = "100px";
parentContainer.style.fontWeight = "bold";
parentContainer.style.letterSpacing = "1px";
parentContainer.style.height = "30px";
parentContainer.style.alignContent = "center";
parentContainer.style.textAlign = "center";

console.log(parentContainer);

// const myParagraph = document.getElementsByClassName("paragraph");

// for (let i = 0; i < myParagraph.length; i++) {
//   if (i === 0) {
//     myParagraph[i].style.backgroundColor = "black";
//     myParagraph[i].style.color = "white";
//     myParagraph[i].style.color = "white";
//   } else if (i === 1) {
//     myParagraph[i].style.backgroundColor = "green";
//   } else if (i === 2) {
//     myParagraph[i].style.backgroundColor = "purple";
//   }
//   myParagraph[i].style.width = "80vw";
//   myParagraph[i].style.height = "4vw";
//   myParagraph[i].style.alignContent = "center";
//   myParagraph[i].style.border = "1px solid green";
//   myParagraph[i].style.borderwidth = "100px";
// }
// console.log(myParagraph);

// const nameList = document.getElementsByName("name");

// for (a = 0; a < nameList.length; a++) {
//     if (a === 0) {
//         nameList[a].style.backgroundColor = "green";
//         nameList[a].style.border = "1px solid green";
//     }
// }
// console.log(nameList)

// const firstElement = document.querySelector(".list-items");
// console.log(firstElement);
// firstElement.style.backgroundColor = "red";
// firstElement.style.color = "white";
// firstElement.style.width = "70vw";
// firstElement.style.height = "5vw";
// firstElement.style.alignContent = "center";
// firstElement.style.paddingLeft = "1rem";
// console.log(firstElement);

// const myList = [1, 2, 3, 4, 5];

// for (let b = 0; b < myList.length; b++) {
//     console.log(myList[b], Math.pow(myList[b], 2), "GravityGuy");
// }

// const moreList = [];
// let b = [];

// for (b = 0; b <= 100; b += 10) {
//     moreList.push(b)
// }
// console.log(moreList, Math.pow(moreList, 2), "GravityGuy");

// const parentDiv = document.getElementById("parent");
// const topic1 = document.createElement("h1");
// topic1.textContent = "Header One";
// topic1.style.color = "rgb(15, 106, 107)";

// // Add h1 to the prent div
// parentDiv.appendChild(topic1);

// const newImage = document.createElement("img");
// newImage.alt = "New Image";
// newImage.src = "image/image.jpg";

// const imgDiv = document.createElement("div");
// imgDiv.style.border

// for (e = 0; e < firstElement.length; e++) {

// }

// Create a div with javascript and create another div inside it and make the div inside to be round.
// const newDiv1 = document.createElement("div");
// newDiv.textContent = "Hello GravityGuy";
// newDiv.className = "my-class";
// newDiv.id = "my-id";
// const textNode = document.createTextNode("Hi World");

const newDiv = document.createElement("div");
newDiv.textContent = "Hello GravityGuy"; // This sets the text content
newDiv.className = "my-class"; // This sets the class
newDiv.id = "my-id"; // This sets the id

// Optional: If you want to append an additional text node (won’t show because textContent already sets text)
// const textNode = document.createTextNode("Hi World");
// newDiv.appendChild(textNode); // Appends the text node after "Hello GravityGuy"

// Append the div to the body so it's visible on the page
document.body.appendChild(newDiv);

const div1 = document.createElement("div");
// div1.textContent = "Hi World";
div1.className = "div-1";
div1.id = "div-1";

document.body.appendChild(div1);
div1.style.color = "white";
div1.style.backgroundColor = "purple";
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.justifyItems = "center";
div1.style.alignContent = "center";
div1.style.marginTop = "50px";

const div2 = document.createElement("div");
div2.className = "div-2";
div2.id = "div-2";

div1.appendChild(div2);
div2.style.width = "140px";
div2.style.height = "140px";
div2.style.backgroundColor = "yellow";
div2.style.borderRadius = "30px";

const list1 = document.createElement("ul");
document.body.appendChild(list1);

const list2 = document.createElement("li");
list2.textContent = "Tecno";
list1.append(list2);

const list3 = document.createElement("li");
list3.textContent = "Infinix";
list1.append(list3);

const list4 = document.createElement("li");
list4.textContent = "Redmi";
list1.append(list4);

const list5 = document.createElement("li");
list5.textContent = "Gionee";
list1.append(list5);
list1.style.color = "purple";

const div3 = document.createElement("div");
// div3.textContent = "Hi"
document.body.appendChild(div3);
div3.style.backgroundColor = "gray";
div3.style.width = "150px";
div3.style.height = "150px";
div3.style.justifyItems = "center";
div3.style.alignContent = "center";

const div4 = document.createElement("div");
div3.append(div4);
div4.style.backgroundColor = "white";
div4.style.width = "90px";
div4.style.height = "90px";
div4.style.borderRadius = "20px 10px";

const parentDiv = document.getElementById("parent");

parentDiv.innerHTML = `
    <h3 class="dev">WEB DEV STUDENTS</h3> 
    <ul class="list">
      <li>Victoria</li>
      <li>GravityGuy</li>
      <li>EduBadest</li>
      <li>Josh de Artistico</li>
      <li>Divine de Gamer</li>
    </ul>`;

const myDev = document.getElementsByClassName("dev");

for (let a = 0; a < myDev.length; a++) {
  myDev[a].style.backgroundColor = "green";
  myDev[a].style.color = "white";
  myDev[a].style.width = "fitContent";
  myDev[a].style.padding = "1rem";
  myDev[a].style.textTransform = "capitalize";
}

const myList = document.getElementsByClassName("list");

for (let c = 0; c < myList.length; c++) {
  myList[c].style.color = "green";
}