const persons = ['akib', 'rakib', 'nakib', 'alif'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

//sort----->
const numbers = [9, 3, 7, 1, 12, 38, 4, 6, 2];
const numbers_asc = [...numbers].sort(function(a,b){
    return a-b
})
const numbers_dsc = [...numbers].sort(function(a,b){
    return b-a
})
console.log(numbers_asc);
console.log(numbers_dsc);