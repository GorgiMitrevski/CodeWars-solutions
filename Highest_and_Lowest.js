//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let arr = numbers.split(' '); // split into array on spaces
    let min = arr[0]; // min is first element
    let max = arr[0];  // max is zero so we can compare
    arr.forEach(el => { // for every element in array
        if( parseInt(el) > max ) max = el; // if element is bigger than max than max is that element
        else if( parseInt(el) < min ) min = el; // if element is smaller than min than min is that element
    });
    
    let stringOutput = `${max} ${min}`;
    
    return stringOutput;
    
}
