/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
//simple if,else condition
let num1 =30;
let num2=60;
if (num1>num2){
    var result = (num1*num1);
    console.log(result);
}else{
    console.log(num1);
}
//simple tarnary condition
(num1>num2)? console.log((num1*num1)): console.log(num1);