//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
    
    let finalArr = [];
    for(let i = 0; i < array1.length; i++ ){
        for(let j = 0; j < array2.length; j++){
            if( finalArr.includes(array1[i]) ){
              continue;
            }
            else if( array2[j].includes(array1[i]) ){
              finalArr.push(array1[i]);
            } 
        }
    }
    return finalArr.sort();
}
