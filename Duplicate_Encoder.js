//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
//if that character appears only once in the original string, or ")" if that character appears more 
//than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let finalString = '';
    this.word = word.toLowerCase();
       for(let i = 0; i < this.word.length; i++){
        let times = 0;
        for(let j = 0; j < this.word.length; j++){
            if(j === i){continue;}
            if( this.word.charAt(i) === this.word.charAt(j) ){
               times++;
            }
            else{
                 continue;
            }
        }
        if(times > 0){ finalString = finalString.concat(')'); }
        else{ finalString = finalString.concat('('); }
    }
    return finalString;
}
