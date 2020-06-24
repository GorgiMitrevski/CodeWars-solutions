//Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, 
//is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

function score( dice ) {
      let arr = [];
      let beforeI = [];
      let output = [];
      let tim = 1;
      
      for(let i = 0; i < dice.length; i++){
            let valueInDice = dice.filter((v) => (v === dice[i])).length;
            let times = valueInDice - 3;
            if(valueInDice >= 3 && dice[i] === 1 && beforeI.includes(dice[i]) === false){
                arr.push(1000);
                beforeI.push(dice[i]);
            }
            else if(valueInDice >= 3 && beforeI.includes(dice[i]) === false){
                arr.push(dice[i] * 100);
                beforeI.push(dice[i]);
            }
          else if(dice[i] === 1 && times > 0 && tim != 0  ) {
              arr.push(100 *(times) );
              times--;
          }
          else if(dice[i] === 5 && times > 0 && tim != 0){
              arr.push(50 *(times) );
              times--;
          }
          else if(dice[i] === 1 && valueInDice < 3){ arr.push(100); }
          else if(dice[i] === 5 && valueInDice < 3){ arr.push(50); }
          if(times === 0 ){ tim = times }
      }
      
      if(arr.length === 0){output = 0}
      else if(arr.length === 1){output = arr[0]}
      else{output = arr.reduce((a,b) => {return a+b});}
      return output;
}
