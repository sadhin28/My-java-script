/**
 * Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */
let book = ['c', 'c++', 'java', 'javascript', 'EEE'];
console.log(book.includes('javascript'))
if(book.includes('javascript')){
    console.log(' the element is present in the array')
}
else{
    console.log("This book is not available in the array")
}