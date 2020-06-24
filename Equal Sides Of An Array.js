//You are going to be given an array of integers. Your job is to take that array and find an index N 
//where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
//If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
    let N = 0;
    let result;
    for(let i = N; i <= arr.length-1; i++){
        let sumLeftFromIndex;
        let sumRightFromIndex;
        let leftFromIndex = [];
        let rightFromIndex = [];
        
        if(i > 1){
            leftFromIndex = arr.slice(0, i);
        }
        else{
            leftFromIndex = arr.slice(0, 1);
        } 
        rightFromIndex = arr.slice(i+1, arr.length);     
        if(i === 0){ 
            sumLeftFromIndex = 0;
        }
        else{
            sumLeftFromIndex = leftFromIndex.reduce((a,b) => {return a+b});
        }
        if(i === arr.length-1){
            sumRightFromIndex = 0; console.log(sumRightFromIndex + i);
        }
        else{
            sumRightFromIndex = rightFromIndex.reduce((a,b) => {return a+b});
        }
        if(sumLeftFromIndex === sumRightFromIndex){result = i; break; }
        else {result = -1; }
    }
    return result;
}
