//You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//For each word:
//the second and the last letter is switched (e.g. Hello becomes Holle)
//the first letter is replaced by its character code (e.g. H becomes 72)

function decipherThis(str) {

      let string = str.replace(/\d+/g,v=>String.fromCharCode(v*1));
      let arr = string.split(' ');
      let finalArr = arr.map(x => x.length > 2 ? x.slice(0,1) + x.slice(-1) + 
                  x.slice(2,-1) + x.slice(1,2) : x);
      return finalArr.join(' ');            
}; 
