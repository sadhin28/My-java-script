//Q4: Write a function to check the string is palindrome or not?

//convert toLowerCase
function isPalindrom(str){
    str =str.toLowerCase();
    //Reverse String using reverse().json
    const reversed = str.split('').reverse().join('')
    return str === reversed
    
}
console.log(isPalindrom("lal"))
console.log(isPalindrom("hello"))