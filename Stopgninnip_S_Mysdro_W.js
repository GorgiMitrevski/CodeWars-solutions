//Write a function that takes in a string of one or more words, and returns the same string, 
//but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
//Spaces will be included only when more than one word is present.

function spinWords(str){
  let words = str.split(" ");
  
  let reversed = "";
  
  for(const word  in words){
    if(words[word].length < 5){
      if(reversed === ''){
        reversed = words[word];
      }
      else{
        reversed = reversed + ' ' + words[word];
      }
    }
    else if(words[word].length > 4){
        let split = words[word].split(''); 
        let rev = split.reverse().join(''); 
      if(reversed === ''){
        reversed = rev;
      }
      else{
        reversed = reversed + ' ' + rev;
      }
    }
  }
  
  return reversed;
}
