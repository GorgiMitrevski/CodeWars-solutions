//Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

var locate = function(arr,value){
    for(let i = 0; i < arr.length; i++) {
        if ( Array.isArray( arr[i] ) ) { // if arr[i] is array than again do this function
            if ( locate(arr[i], value) ) {
                return true;
            } 
        }
        if (arr[i] === value) { // if arr[i] is equal to value than return true
          return true;
        } 
    }
    // if not in array return false
    return false; 
}
