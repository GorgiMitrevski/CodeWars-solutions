//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
//The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  this.text = text.toLowerCase();
  let arr = [];
      for(let i = 0; i < this.text.length; i++){
        let times = 0;
        for(let j = 0; j < this.text.length; j++){
            if(j === i){continue;}
            if( this.text.charAt(i) === this.text.charAt(j) && !arr.includes(this.text.charAt(i)) ){
                 arr.push( this.text.charAt(i) );
            }
            else{
                 continue;
            }
        }
      }
    return arr.length;
}
