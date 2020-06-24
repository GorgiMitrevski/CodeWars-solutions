//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    // arrays for numbers in 3 places
    let arrFirst = [], arrSec = [], arrThird=[];
    // for every number push into array
    for(let i = 0; i < numbers.length; i++){
      if(i < 3) arrFirst.push(numbers[i]);
      else if(i < 6) arrSec.push(numbers[i]);
      else arrThird.push(numbers[i]);
    }
    // numberString
    let numberString = `(${arrFirst.join('')}) ${arrSec.join('')}-${arrThird.join('')}`;
    return numberString;
}
