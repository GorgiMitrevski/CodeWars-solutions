//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

const snail = function(array) {
      let finalArr = []; // array where we are puttin our snail
      let timesSmall; // times where we counting minus length
      if(array.length < 4){ // array length if smaller than 4
          timesSmall = array.length - (array.length - 2);
      }else { // and if bigger than 3
          timesSmall = array.length - 2;
      }
      // go through every element
    for(let times = 0; times < timesSmall; times++  ){
        // first - from array[0][0] to array.length-1 down and left through side elements 
          for(let i = times; i < array.length-times; i++){
              for(let j = times; j < array[i].length-times; j++){
                if(i === 0+times){
                    finalArr.push(array[i][j]);
                }
                else if(i === array[i].length-1-times){
                    let k = array[i].length-1-times;
                    for(k; k >= 0+times; k--){
                        finalArr.push(array[i][k]);
                    }
                    break;
                }
                else {
                  finalArr.push(array[i][array[i].length-1-times]);
                  i++;
                }
              }
          }
          
          // second from last array in array array[array.length-1][0] to array[1][0]
          let k = array.length-2-times;
          for(k; k >=1+times; k--){
              finalArr.push(array[k][0+times]);
          }
      }

      return finalArr;
}
