//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
//If the list is made up of only negative numbers, return 0 instead.
//Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    let num = parseInt(arr.join('')); // for zeros
    let arrNegative = []; // arr for pushing negative numbers
    arr.forEach(el => {if(el < 0){ arrNegative.push(el) } } ); // go through arr and push negative
    
    if(arrNegative.length === arr.length) return 0;  // if all elements are negative numbers
    else if(arr.length === 0) return 0  // if empty array
    else if(num === 0) return 0  // if every element is 0 
    
    // for finding Maximum subarray sum
    let numElement = 0;
    let arrayTwo = arr[0];
    arr.forEach( el => {
        let compareMax = numElement + el;
        numElement = Math.max(el, compareMax);
        arrayTwo = Math.max(arrayTwo, numElement);
    });
    
    return arrayTwo;
}
