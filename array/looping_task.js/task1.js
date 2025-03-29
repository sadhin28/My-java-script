// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
 const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const color=[]
for(let col of colors){
    
    color.unshift(col)
}
console.log(color)