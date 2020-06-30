//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
//ROT13 is an example of the Caesar cipher.

function rot13(message){
    let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                      'S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J',
                      'K','L','M','N','O','P'];
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                        't','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k',
                        'l','m','n','o','p']
    let arr = message.split('');
    
    for (let i = 0; i < arr.length; i++){
      let letter = '';
      if (arr[i].match(/[a-z]/)){
        letter = lowerCase.indexOf(arr[i]);
        arr[i] = lowerCase[letter+13];
      }else if (arr[i].match(/[A-Z]/)){
        letter = upperCase.indexOf(arr[i]);
        arr[i] = upperCase[letter+13];
      }
    }
    return arr.join('');
}
