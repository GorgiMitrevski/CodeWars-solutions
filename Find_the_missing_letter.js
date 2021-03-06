//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
//The array will always contain letters in only one case.

function findMissingLetter(array)
{
      let str = array.join(''); // array to string
      for (let i = 0; i < str.length - 1; i++) {
          if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) { // check UTF-16 code
              let result = String.fromCharCode(str.charCodeAt(i) + 1); // give back missing char
              return result; 
          }
      }
}
