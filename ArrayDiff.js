// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
function arrayDiff(a, b) {
  let difference = a.filter(x => !b.includes(x));
  return difference;
}
