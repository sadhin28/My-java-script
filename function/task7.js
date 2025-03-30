// count how many times the a number is repeated in the array

function countOccurrences(arr, num){
    let count = 0;
    for(aray of arr){
        if(aray === num){
            count++;
        }
    }
    console.log('Input: ',num)
    return count;
}

let number = 5;
let a = [5,12,6,98,5,5,5,5,5,9];
console.log(countOccurrences(a,number))