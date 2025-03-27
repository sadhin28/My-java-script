let a=0;
let sum= 0;
while(a<=100){
    console.log(a);
    sum=sum+a;
    a+=2;
    if(a==42){
        break;
    }
  
}
console.log('sum: ',sum)