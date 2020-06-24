//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    
    let arrZeros = [];
    let arrNoZ = [];
    for(const arEl of arr){
        if(arEl === 0){
            arrZeros.push(arEl);
        } else {
            arrNoZ.push(arEl);
        }
    }
    arrNoZ.push.apply(arrNoZ, arrZeros);
    
    return arrNoZ;
}
