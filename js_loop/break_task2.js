/* 
Write a while loop that adds numbers starting from 1,
but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i=1;
let adds=0;
while(i<=200){
    console.log(i);
  
    i++;
    if(i>100){
        break;
    }
    adds=adds+i;
    
    
}
console.log(adds)