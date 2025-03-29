/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
function make_avg(number){
    let sum=0;
    let avg;
    let arrayLength=number.length;
    console.log(arrayLength);
   for(let i=0;i<number.length;i++){
    
    sum=sum+number[i];
    avg=sum/number.length;
   
  
   }
   console.log('Sum: ',sum)
   console.log('Avg: ',avg.toFixed(2))
}
make_avg([4,6,2,6,1,12])
