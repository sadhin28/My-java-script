//Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];

for (let  i of numbers){
    if(i%2 == 0){
        console.log(i)
    }
}