//convert Celsius to Fahrenheit 

function CelsiusToFahrenheit(c) {
    let f = c * (9 / 5) + 32;
    console.log(f, 'f')
}
CelsiusToFahrenheit(30)

// Fahrenheit to Celsius 
function fahrenheitToCelsius(f) {
    let c = (f - 32) * 5 / 9;
    console.log(c, 'c')
}
fahrenheitToCelsius(86)