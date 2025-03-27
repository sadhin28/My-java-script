

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***
Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

//Sub task 1;
let sum=0;


//sub task 2;

for(let i=51;i<=85;i++){
 
    if(i%2 == 1){
        continue;
        
    }
    sum=sum+i;
    console.log(i);

    
}
console.log(sum);