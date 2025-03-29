/***
 * objective:write a function to give me the sum of all numbers in an array
 */

function sumOfnumber(numbers){
   let sum = 0;
   for(let number of numbers){
    sum=sum+number;
    console.log(number)
    
   }
   console.log('Sum of Numbers: ',sum)
   
}
const sums=sumOfnumber([2,3,5,2,1]);


