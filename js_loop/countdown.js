/***

Implement a countdown timer that counts down from 81 to 65.

 */
// let count = 81;
// let timer = setInterval(() => {
//     console.log(count);
//     if (count === 65) {
//         clearInterval(timer); // Stops the timer when reaching 65
//     }
//     count--;
// }, 1000); // Runs every 1000ms (1 second)

let count = 81;
let timer = setInterval(() =>{
    console.log(count);
    console.log("Sadhin");
    if(count==65){
        clearInterval(timer);
    }
    count--;
},
200
);