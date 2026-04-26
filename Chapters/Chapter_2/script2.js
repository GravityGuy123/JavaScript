// Miles-to-kilometers converter
// let unitFrom = prompt("Specify unit you wish to convert from e.g mile/kilometer");
let unitTo = prompt("Specify unit you wish to convert to e.g mile/kilometer");

let conversionValue = 1.60934;


if (!unitTo) {
    alert("No value entered to convert to")
    console.log("No value entered to convert to")
    
    // return;
} else {
    unitTo = unitTo.toLowerCase().trim()
    // unitFrom = unitFrom.toLowerCase().trim()
    
    let mile;
    let kilometer;
    // let convert;

    if (unitTo.startsWith("mile") && unitTo.includes("mile")) {
        kilometer = prompt("Enter value for kilometer");
        kilometer = Number(kilometer);

        mile = kilometer / conversionValue;
        console.log(`${kilometer}kilometer(s) = ${mile}Miles`);
        alert(`${kilometer}kilometer(s) = ${mile}Miles`);
    } else {
        mile = prompt("Enter value for mile");
        mile = Number(mile);

        kilometer = mile * conversionValue;
        console.log(`${mile}Mile(s) = ${kilometer}KM`);
        alert(`${mile}Mile(s) = ${kilometer}KM`);
    }
}

// let mile =  
// let kilometer = mile * kiloMeterValue;

// console.log(`${mile}Mile(s) = ${kilometer}KM`);
// alert(kilometer);

// 1 mile = 1.609 km
// 5 miles = 8.047 km
// 10 miles = 16.093 km
// 25 miles = 40.234 km
// 50 miles = 80.467 km
// 100 miles = 160.934 km


// 1 km = 0.621 miles
// 5 km = 3.107 miles
// 10 km = 6.214 miles
// 25 km = 15.534 miles
// 50 km = 31.069 miles
// 100 km = 62.137 miles