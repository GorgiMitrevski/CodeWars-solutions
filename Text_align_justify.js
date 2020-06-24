//Your task in this Kata is to emulate text justification in monospace font. 
//You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

var justify = function(str, len) {

  var re = RegExp("(?:\\s|^)(.{1," + len + "})(?=\\s|$)", "g");
  var res = [];
  var finalResult = [];

  while ((m = re.exec(str)) !== null) {
    res.push(m[1]);
  }

  for (var i = 0; i < res.length - 1; i++){    
    if(res[i].indexOf(' ') != -1){  
      while(res[i].length < len){      
        for(var j=0; j < res[i].length-1; j++){
          if(res[i][j] == ' '){
            res[i] = res[i].substring(0, j) + " " + res[i].substring(j);
            if(res[i].length == len) break;
            while(res[i][j] == ' ') j++;
          }
        }
      }      
    }    
    finalResult.push(res[i]);    
  }

  finalResult.push(res[res.length - 1]);

  return finalResult.join('\n');

}
