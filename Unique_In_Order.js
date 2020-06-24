//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value 
//next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    let arrTwo = [];
    if (Array.isArray(iterable)){
        for(let i = 0; i < iterable.length; i++){
            if(i === 0){ arrTwo.push(iterable[i]); }
            else{
                if(iterable[i] === iterable[i-1]){ continue; }
                else{ arrTwo.push(iterable[i])}
            }
        }
    }else {
          for(let i = 0; i < iterable.length; i++){
            if(i === 0){ arrTwo.push(iterable.charAt(i)); }
            else{
                if(iterable.charAt(i) === iterable.charAt(i-1)){ continue; }
                else{ arrTwo.push(iterable.charAt(i))}
            }
        }
    }
    return arrTwo;
}
