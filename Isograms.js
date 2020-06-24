//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only 
//letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
      if(str.length === 0){
          return true;
      }
      this.str = str.toLowerCase();
       for(let i = 0; i < this.str.length; i++){
        let times = 0;
        for(let j = 0; j < this.str.length; j++){
            if(j === i){continue;}
            if( this.str.charAt(i) === this.str.charAt(j) ){
               times++;
            }
        }
        if(times > 0){ return false }
        else{ continue; }
    }
    return true;
}
