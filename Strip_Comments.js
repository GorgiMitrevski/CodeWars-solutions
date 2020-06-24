//Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
//Any whitespace at the end of the line should also be stripped out.

function solution(input, markers) {
    let str = '';
    for (let i = 0; i < input.length; i++) {
          if ( markers.includes( input[i] ) ) {
              i = input.indexOf('\n', i)-1;
              str = str.trimRight();
              if (i < 0) { break }
              continue;
          }
          str = str + input[i];    
    }
    return str;
};
