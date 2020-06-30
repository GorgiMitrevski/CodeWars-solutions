//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

function encode(string){
      let encoded =  string.replace(/[aeiou]/g,x=>{
          if (x === 'a') { return 1 }
          if (x === 'e') { return 2 }
          if (x === 'i') { return 3 }
          if (x === 'o') { return 4 }
          if (x === 'u') { return 5 }
      });
      
      return encoded;
}

function decode(string){
      let decoded = string.replace(/[1-5]/g,x=>{
          if (x==='1') { return 'a' }
          if (x==='2') { return 'e' }
          if (x==='3') { return 'i' }
          if (x==='4') { return 'o' }
          if (x==='5') { return 'u' }
      });

      return decoded;
}
