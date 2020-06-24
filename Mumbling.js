//This time no story, no theory. The examples below show you how to write function accum.
//The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let arr = s.split(''); // split to array
    let string = ''; // string for output
    for(let i = 0; i < arr.length; i++){ 
      string = string.concat( arr[i].toUpperCase() ); // first letter upperCase
      string = string.concat( arr[i].toLowerCase().repeat(i) ); // next letters repet i times and lower case
      if(i === arr.length-1){ // if i is last element than break do not add '-'
          break;
      } else {
          string = string.concat('-');
      }
    }
    return string;
}



