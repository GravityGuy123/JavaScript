let cars = ['mazda', 'lexus', 'camry', 'benz', 'bugatti', "lambombogini"];
let carIndex = 0;


const logBtn = document.querySelector(".log-btn");
logBtn.addEventListener("click", () => {
    if (carIndex >= cars.length){
        carIndex = 0;
    }

    const message = `I would like to own a ${cars[carIndex].toUpperCase()} car.`
    console.log(message);
    carIndex ++
});

for (let c = 0; c < cars.length; c++) {
    const message = `I would like to own a ${cars[c]} car.`;
    console.log(message)
}


// Phyno - Grateful
// My Teacher punish me Because of English