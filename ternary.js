/**
 * Ternary --> are three parts
 * condition ? 
 */
// const age=10;
// if(age >=18){
//     console.log('You can vote');
// }else{
//     console.log('Ghumai Thako');
// }
//simple tarnary
age>=18 ? console.log('Vote Dibo'):console.log('Ghumai thako')
let price =500;
const isLeader = true;
if(isLeader==true){
    console.log('Prize 0');
}else{
    console.log('price 600 taka')
}
price=isLeader===true ? console.log("prize 0"):console.log(price+100);
if(isLeader === true){
    if(price>1000){
        console.log(price/2)
    }else{
       console.log(0)
    }
}else{
   console.log(price)
}

price=isLeader===true? price>1000? price/2: 0  : price+1000;