//Your task is to Combine two Strings. But consider the rule...
//By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

function workOnStrings(a,b){
    // split string into array, so we can easily go through array
    let arrA = a.split('');
    let arrB = b.split('');
    // check for every element in B which includes A and change to oposite case
    for(let i = 0; i< arrA.length; i++ ){
        for(let j = 0; j < arrB.length; j++){
            if( arrB[j].toLowerCase().includes(arrA[i].toLowerCase()) ){
                if(arrB[j] === arrB[j].toUpperCase()){
                    arrB[j] = arrB[j].toLowerCase();
                }
                else if( arrB[j] === arrB[j].toLowerCase() ){
                    arrB[j] = arrB[j].toUpperCase();
                }
            }
        }
    }
    // check for every element in A which includes B and change to oposite case
    for(let i = 0; i< arrB.length; i++ ){
        for(let j = 0; j < arrA.length; j++){
            if( arrA[j].toLowerCase().includes(arrB[i].toLowerCase()) ){
                if(arrA[j] === arrA[j].toUpperCase()){
                    arrA[j] = arrA[j].toLowerCase();
                }
                else if( arrA[j] === arrA[j].toLowerCase() ){
                    arrA[j] = arrA[j].toUpperCase();
                }
            }
        }
    }
    
    const finalString = `${arrA.join('')}${arrB.join('')}`;
    return finalString;
}
