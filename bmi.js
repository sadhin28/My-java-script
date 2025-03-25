const weight = parseFloat(prompt("Enter your weight in kg:"));
const height = parseFloat(prompt("Enter your height in meters:"));
const bmi = weight / (height * height);
alert(`Your BMI is: ${bmi.toFixed(2)}`);
