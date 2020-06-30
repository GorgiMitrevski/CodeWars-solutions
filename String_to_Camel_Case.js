//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized 
//only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
    let arr = []; // arr to split string into array
    if(str.includes('-')){ // string have _ or -
        arr = str.split('-');
    } else if(str.includes('_')){
        arr = str.split('_');
    }
    // replace first character of string inside array starting from index 1 toUpperCase
    for(let i = 1; i < arr.length; i++){
            arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase())
       
    }
    // print arr to string
    return arr.join('');

}
