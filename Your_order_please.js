//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    // string to arr
    let arr = words.split(' ');
    let arrNumbers = []; // empty array for numbers
    // for every element of arr push only numbers into arrNumbers
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++ ){
            let numParsed = parseInt(arr[i].charAt(j));
            if(isNaN(numParsed))continue;
            else{
                arrNumbers.push(numParsed);
            }
        }
    }
    // sort that arrNumbers
    arrNumbers.sort();
    let finalArr = []; // new array where we will put final array sorted
    // check for every element in arr which contains in arrNumbers
    for(let i = 0; i < arrNumbers.length; i++){
        for(let j = 0; j < arr.length; j++){
            if( arr[j].includes( arrNumbers[i].toString() ) ){
                finalArr.push(arr[j]);
            }
        }
    }
    // join array like string separeted by spaces
    return finalArr.join(' ');
    
}
