/**
 * 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */
let book=['java', 'javascript', 'C++', 'EEE'];
let fruits=['mango', 'Banana', 'pineapple']
let pen='matdoor'
console.log(Array.isArray(pen));
console.log(Array.isArray(fruits));
console.log(Array.isArray(book));
if(Array.isArray(book)){
    console.log("Variable is an array");
}else{
    console.log("Variable is not an Array");
}
if(Array.isArray(pen)){
    console.log("Variable is an array");
}else{
    console.log("Variable is not an Array");
}