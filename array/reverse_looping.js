//reverse looping
const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

//using for of
// const rev_number=[]
// for(let num of numbers){
//     console.log(num);
//     rev_number.unshift(num)

// }
// console.log(rev_number)


//using normal for loop;
// const rev=[];
// for(let i=0;i<numbers.length;i++){
//     const num=numbers[i];
//     rev.unshift(num);
// }
// console.log(rev)

//vajal chara
for(let i=numbers.length-1;i>=0;i--){
    console.log(numbers[i])
}