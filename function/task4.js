/***
 * Write a function called count_zero() which will take a binary string 
 * (Binary string is a string which is consist of only 0 and 1) as parameter
 *  and count how many 0’s are there in that string.
 */
// function count_zero(binaryString){
//   let count =0;
//   for(let char of binaryString){
//     if(char=== '0'){
//         count++;
//     }
//   }
//   return count;
// }

// console.log(count_zero('101011000010'))
// console.log(count_zero('01707986054'))



//alternative
function count_zero(binaryString) {
    return binaryString.split('0').length - 1;
}
console.log(count_zero('1000100020010002030'))