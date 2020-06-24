//Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, 
//and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

function sumIntervals(intervals){

    let values = [];
    intervals.forEach(e => {
        for(let x = e[0]; x < e[1]; x++){
            values.push(x);
        }
    });
    
    let arr = [];
    for(let i = 0; i < values.length; i++){
        if(!arr.includes(values[i])){
          arr.push(values[i]);
        }
    }
    return arr.length;
}
