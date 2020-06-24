//Write a function that takes a string of braces, and determines if the order of the braces is valid. 
//It should return true if the string is valid, and false if it's invalid.

function validBraces(braces){
    let arrH = [];
    let left = ['(','{','['];
    let right = [')','}',']'];
    
    for(let ch of braces){ 
        if(left.includes(ch)){ 
            arrH.push(ch);
        }else if(right.includes(ch)){ 
            let open = left[right.indexOf(ch)] 
            if(arrH[arrH.length - 1] === open){ 
                arrH.splice(-1,1); 
            }else{ 
                arrH.push(ch);
                break;
            }
        }
    }
    return (arrH.length === 0);
}
