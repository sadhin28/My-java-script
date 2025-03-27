const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your weight in kg: ", function(weight) {
  rl.question("Enter your height in meters: ", function(height) {
    const bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);
    rl.close();
  });
});
