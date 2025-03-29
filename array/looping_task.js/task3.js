//Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var result ='';
for(var name of numbers){
    result += name;
}
console.log(result)