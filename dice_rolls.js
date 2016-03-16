
  function rollDie(sides)
  {
    if(!sides) sides = 6;
    with(Math) return 1 + floor(random() * sides);
  }

  function rollDice(number, sides)
  {
    var total = 0;
    while(number-- > 0) total += rollDie(sides);
    console.log(total);
    return total;
  }
// var rand = rollDie();	     //# d6
// var rand = rollDie(6);	//# d6
// var rand = rollDie(20);	//# d20
// var rand = rollDice(3);	//# 3d6
// var rand = rollDice(3, 6);	//# 3d6
rollDice(2, 12);	//# 2d12

// function rollDice(times){
//     var randomDices = [];
//     while (randomDices.length < times)  {
//         var rand = Math.floor(6*Math.random())+1;
//         if(randomDices.indexOf(rand) > -1 == false)
//             randomDices.push(rand);
//     }
//     return randomDices
// }