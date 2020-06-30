//Encrypt this!
//You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

var encryptThis = function(str) {
   if(str === '') {return ''}
   else {
          let arr = str.split(' ');
          let i = arr.map(element => {
              let el = element.split('');
              el[0] = element.charCodeAt(0);
              [el[1], el[el.length - 1]] = [el[el.length - 1], el[1]];
              return el.join('');});
        return i.join(' ');
      }
}
