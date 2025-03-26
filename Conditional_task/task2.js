/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
const  weight=parseFloat(75);
const  height=parseFloat(1.85);
BMI=weight/(height*height);
if(BMI<18.5){
    
    console.log("Your Bmi",BMI.toFixed(2)+ " You are UnderWeight")
}
 else if (BMI>=18.5 && BMI<=24.9){
   console.log("Your Bmi",BMI.toFixed(2)+ "  You are Normal")
 }
 else if(BMI>=25 && MBI<=29.9){

    console.log("Your Bmi",BMI.toFixed(2)+ " You are Overweight")
 }
 else{
    console.log("Your Bmi",BMI.toFixed(2)+ " You are Obese")
   
 }

