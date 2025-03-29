/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function oddMultiply(a){
    if(a%2 === 1){
       const x=a*2;
       return x;
    }
    else{
        const y=a/2;
        return y;
    }
}
console.log(oddMultiply(7))