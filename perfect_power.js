//Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. 
//Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

var isPP = function(n){
    // check for every smaller number
    for (let i = 2; i * i <= n; i++){
        for (let j = 2; Math.pow(i, j) <= n; j++){
            if (Math.pow(i, j) == n) return [i, j];
        }
    }
    // otherwise null
    return null;
}
