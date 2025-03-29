/**
 * Create Function that will return only the event number
 * return the sum of even numbers
 */
function sumOfevenNumber(numbers){
    let sum=0;
    for(let number of numbers){
        if(number%2 === 0){
            sum=sum+number;
            console.log(number);
            
        }
       
    }
    console.log('sum: ',sum)
   
}

let even_sum =sumOfevenNumber([3,6,912,18,56])
