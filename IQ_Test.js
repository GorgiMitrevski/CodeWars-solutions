//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.
// Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among 
//the given numbers finds one that is different in evenness, and return a position of this number.

function iqTest(numbers){
      // string to array
      let arr = numbers.split(' ');
      // parse to integer every element
      for(let i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
      }
      // check if two numbers are even / odd than return oposite 
      for(let i = 0; i < arr.length; i++){
          if(i === 0 && arr[0] % 2 === 0  && arr[1] % 2 > 0 && arr[2] % 2 > 0){
              return i+1;
          }else if( i === 0 && arr[0] % 2 > 0 && arr[1] % 2 === 0 && arr[2] % 2 === 0 ){
                   return i+1;
          }
          else if(i === arr.length-1 && arr[arr.length-1] % 2 === 0  &&  arr[arr.length-2] % 2 > 0  &&  arr[arr.length-3] % 2 > 0 ){
                   return i+1;
          }
          else if( i === arr.length-1 && arr[arr.length-1] % 2 > 0 && arr[arr.length-2] % 2 === 0 && arr[arr.length-3] % 2 === 0 ){
                  return i+1;
          }
          else if( arr[i] % 2 === 0 && arr[i-1] % 2 > 0 && arr[i+1] % 2 > 0 ){
              return i+1;
          }
          else if(arr[i] % 2 > 0 && arr[i-1] % 2 === 0 && arr[i+1] % 2 === 0 ){
               return i+1;
          }
        else{
            continue;
        }
      }
      
}
