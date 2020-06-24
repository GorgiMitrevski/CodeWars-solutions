//A Narcissistic Number is a number which is the sum of its own digits, 
//each raised to the power of the number of digits in a given base. 
//In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
      let str = value.toString();
      let stringLength = str.length;
      let arr = [];
      for(let i = 0; i < stringLength; i++){
          let num = parseInt( str.charAt(i) );
          arr.push( Math.pow(num, stringLength) );
      }
      let sumArr = arr.reduce( (a,b) => {return a+b} );
      if(sumArr === value){
          return true;
      }
      else {
          return false;
      }
}
