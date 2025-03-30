//odd average
function oddAverage (numbers){
    let sum=0;
    const odd = [];
    
   for(let number of numbers){
        if(number%2 !==0){
            odd.push(number)
           
 }

}
 for (const number of odd){
    sum=sum+number;
 }
 const conut=odd.length;
 console.log(sum)
 const avg=sum/conut;
 return 'Odd average: ',avg;
}
console.log(oddAverage([1,4,7,2,3,9,13]))


