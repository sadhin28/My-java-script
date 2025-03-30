function removeDuplicate(number){
    const unique = [];
    for(const item of number){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const remove = removeDuplicate(['sadhin', 'sadhin', 'sohan', 'Tahsin', 'Rean','Rean','rean'])
console.log(remove)
const num=removeDuplicate([1,1,1,1,1,3,4,12,23,32,90,90,90]);
console.log(num)