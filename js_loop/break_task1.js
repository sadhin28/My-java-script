/***
 * /* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

//using for loop.....................
for(let i=1;i<=200;i++){
    console.log(i);
    if(i>=100){
        break
    }
    
}


//using while loop............
let i =1;
while(i<=200){
    console.log(i);
    i++;
    if(i>100){
        break;
    }
}