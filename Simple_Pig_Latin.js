//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '!' || arr[i] === '?'){continue}
          let string = arr[i];
          string = string.concat('', arr[i].charAt(0));
          arr[i] = string;
          string = string.concat('', 'ay');
          arr[i] = string;
          string = string.substring(1);
          arr.splice(i, 1, string);
    }
    
    return arr.join(' ');
}
