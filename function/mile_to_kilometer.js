//mil to kilometer
function milsTokilometer(mile){
    const kilo=mile*1.60934;
    return kilo;
}

function kiloTomiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
console.log(milsTokilometer(59))
console.log(kiloTomiles(94.95106))