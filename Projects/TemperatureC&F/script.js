// Converting from Celsius to Fahrenheit
// °F =(°C × 9 / 5) +32; // 25°C = 77°F
// °C = 5 / 9 x (°F − 32) // 100F = 37.78°C

const tempInput = parseInt(prompt("What's the temperature"));

const tempChoice = prompt("Looking for Celsius or Fahrenheit i.e C or F");
const fahrenheitDegree = "°F";
const celsiusDegree = "°C";

const fahrenheit = (tempInput * 9 / 5) + 32 + fahrenheitDegree;
const celsius = 5 / 9 * (tempInput - 32)  + celsiusDegree;
let temperature;

if (tempChoice === "F" || tempChoice === "f") {
    temperature = fahrenheit;
    console.log(temperature);
    if(tempInput > 30) {
        console.log("It's a hot day.");
    } else if (tempInput > 20 && tempInput < 30) {
        console.log("It's a warm day.");
    } else if (tempInput > 10 && tempInput < 20) {
        console.log("It's a cool day.")
    } else{
        console.log("It's a cold day");
    }
} else if (tempChoice === "C" || tempChoice === "c") {
    temperature = celsius;
    console.log(temperature);
    if (tempInput > 86) {
      console.log("It's a hot day.");
    } else if (tempInput > 68 && tempInput < 86) {
      console.log("It's a warm day.");
    } else if (tempInput > 50 && tempInput < 68) {
      console.log("It's a cool day.");
    } else {
      console.log("It's a cold day");
    }
} else {
    console.log("Entry error! Make sure ypu chose C for Celsius or F for Fahrenheit")
}
















// console.log(fahrenheit);
// console.log(celsius);