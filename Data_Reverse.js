//A stream of data is received and needs to be reversed.

function dataReverse(data) {
  // if no data return empty array
  if (data.length === 0){ 
      return []; 
  }
  let tmp = data.length / 8;
  let arr = [];
  for (var i = 0; i < tmp; i++){
    arr.push(data.splice(0,8));
  }
  const finalArray = arr.reverse().join().split(',').map( v => v * 1);
  return finalArray;
}
