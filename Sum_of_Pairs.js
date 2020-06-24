//Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

var sum_pairs=function(ints, s){
  const arr = [];
  const positions = [];
  
  for (let i = 0; i < ints.length; i++) {
      if (arr[ints[i]] != null) {
        let index = arr[ints[i]];
        positions[0] = ints[index];
        positions[1] = ints[i];
        break;
      } else{
          arr[s - ints[i]] = i;
      }
  }
  if(positions.length === 0){ return undefined}
  else { return positions; }
}
