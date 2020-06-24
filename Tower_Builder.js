function towerBuilder(nFloors) {
      let arr = [];
      let star = '*';
      let space = ' ';
      let whiteSpaces = nFloors - 1;
      
      for(let i = 0; i < nFloors; i++){
          let arrI = arr[arr.length-1];
          if(i === 0 && nFloors === 1){
              arr.push(star); 
          }
          else if(i === 0){ 
              arr.push(space.repeat(whiteSpaces) + star + space.repeat(whiteSpaces)); 
              whiteSpaces--; 
            }
          else if(i === nFloors-1){ 
              let arrLength = (arrI.replace(/\s/g, '')).length;  
              arr.push( star.repeat(arrLength + 2)  );
          } 
          else {     
              let arrLength = (arrI.replace(/\s/g, '')).length; 
              arr.push( space.repeat(whiteSpaces) + star.repeat(arrLength + 2 )+ space.repeat(whiteSpaces)  );
              whiteSpaces--;
         }
      }
      return arr;
}
