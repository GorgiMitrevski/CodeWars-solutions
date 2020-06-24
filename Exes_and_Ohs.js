//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
      this.str = str.toLowerCase();
      let arrX = [];
      let arrO = [];
      for(let i = 0; i < this.str.length; i++){
        if(this.str.charAt(i) === 'x'){
            arrX.push('x');
        } else if(this.str.charAt(i) === 'o' ){
            arrO.push('o');
        }
      }
      if(arrX.length === 0 && arrO.length === 0){ return true }
      else if(arrX.length === arrO.length){ return true }
      else if(arrX.length !== arrO.length){ return false }
      
}
