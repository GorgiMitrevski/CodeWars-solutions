// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    for(let i = 0; i < arr.length; i++){
        if(i === 0 ){
            if(arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];  
            else continue;
        }
        else if(i === arr.length-1 ){
            if(arr[i] !== arr[i-1] && arr[i] !== arr[i-2]) return arr[i];
            else continue
        }
        else if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) return arr[i];
    }
}
