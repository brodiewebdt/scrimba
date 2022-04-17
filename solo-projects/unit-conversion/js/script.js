// Store variable for the number to convert
// Create function to convert the units
/*
Meters to Feet
meters multiplied by 3.28084
Feet to Meters
feet multiplied by 0.3048

Liters to Gallons
liters multiplied by 0.264172
Gallons to Liters
gallons multiplied by 3.785412

Kilograms to Pounds
kilos multiplied by 2.2
Pounds to Kilograms
pounds multiplied by 0.45359237
*/
// const form = document.querySelector("form");
const userInput = document.querySelector("#unit-input-value");
const inputs = document.querySelectorAll(".input");



// Function Conversions
function metersToFeet(number) {
    return (number *= 3.28084).toFixed(3);
}

function feetToMeters(number) {
    return (number *= 0.3048).toFixed(3);
}

function litersToGallons(number) {
    return (number *= 0.264172).toFixed(3);
}

function gallonsToLiters(number) {
    return (number *= 3.785412).toFixed(3);
}

function kilosToPounds(number) {
    return (number *= 2.2).toFixed(3);
}

function poundsToKilos(number) {
    return (number *= 0.45359237).toFixed(3);
}



userInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    inputValue = userInput.value;

    inputs.forEach((input) => {
        input.textContent = inputValue;
    });
    // userInput.value = "";

    document.querySelector(".feet-result").textContent = metersToFeet(inputValue);

    document.querySelector(".meter-result").textContent =
        feetToMeters(inputValue);

    document.querySelector(".gallons-result").textContent =
        litersToGallons(inputValue);

    document.querySelector(".liter-result").textContent =
        gallonsToLiters(inputValue);

    document.querySelector(".pounds-result").textContent =
        kilosToPounds(inputValue);

    document.querySelector(".kilos-result").textContent =
        poundsToKilos(inputValue);

    // metersToFeet(inputValue);
    // feetToMeters(inputValue);
    // litersToGallons(inputValue);
    // gallonsToLiters(inputValue);
    // kilosToPounds(inputValue);
    // poundsToKilos(inputValue);
});

console.log(metersToFeet(5));
