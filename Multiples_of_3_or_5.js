//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number){
    let arr = [];
    for(let i = 0; i < number; i++){
      if(i % 3 === 0){
        arr.push(i);
      } else if(i % 5 === 0){
        arr.push(i);
      }
    }
    if(arr.length === 0){ return 0 }
    const sum = arr.reduce( (x,y) => { return x+y });
    return sum;
}
