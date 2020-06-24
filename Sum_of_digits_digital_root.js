//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing 
//in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
    let sum = 0;
    let str = n.toString();
    let arr = str.split('');
    arr.map(el => {
      sum = sum + parseInt(el);
    });
    
    if(sum > 9){
      return digital_root(sum);
    }
    else{
      return sum;
    }
}
