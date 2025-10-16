//Q6: What is the difference between the null and undefined in JavaScript?
let a;
console.log(typeof(a));//undefined
let b=null;
console.log(typeof(b))//Object
let x;
let y = null;

console.log(x); // undefined
console.log(y); // null

console.log(x == y);  // true (value comparison)
console.log(x === y); // false (type + value comparison)
