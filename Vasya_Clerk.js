//The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
//Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// function for counting in array how many times item is inside
function countInArray(array, what) { return array.filter(item => item == what).length;}
// main function
function tickets(peopleInLine){
    let arrLast =[]; // array for pushing inside bills
    // check for every bil if is inside arrLast
    for(let i = 0; i < peopleInLine.length; i++){
        if(peopleInLine[i] === 25){
            arrLast.push(peopleInLine[i]);
        }
        else if(peopleInLine[i] === 50 && arrLast.includes(25)){ // if bil is 50 and we have 25
            let arrIndex = arrLast.indexOf(25);
            arrLast.splice(arrIndex, 1);
            arrLast.push(peopleInLine[i]);
        }
        else if(peopleInLine[i] === 50 && !arrLast.includes(25)){ return 'NO' } // else return NO
        // if bil is 100 and we have 25 and 50
        else if ( peopleInLine[i] === 100 && arrLast.includes(25) && arrLast.includes(50) ){
            let arrIndexTweFive = arrLast.indexOf(25); 
            arrLast.splice(arrIndexTweFive, 1);
            let arrIndexFifty = arrLast.indexOf(50);
            arrLast.splice(arrIndexFifty, 1);
        }
        // if bil is 100 and we have 25 and 25 and 25
        else if(peopleInLine[i] === 100 && countInArray(arrLast, 25) > 2){
            let arrInTwFiv = arrLast.indexOf(25); 
            arrLast.splice(arrInTwFiv, 1);
            let indexTwFiv = arrLast.indexOf(25);
            arrLast.splice(indexTwFiv, 1);
            let inTwFive = arrLast.indexOf(25);
            arrLast.splice(inTwFive, 1);
        }
        // return NO if we do not have bills for change of 100
        else if(peopleInLine[i] === 100 && !arrLast.includes(25) || !arrLast.includes(50)){
            return 'NO';
        }
    }
    return 'YES';
}
