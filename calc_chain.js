function calc_chain(){

var one = value(1);
var two = value(2);
var three = value(3);
var four = value(4);

// (1 + 2) * 3 - 4 == 5


// but it's still a function right now, so evaluate it
//var result = resultFunc();
       console.log(subtract(multiply(add(one, two), three), four)); // => 5
return subtract(multiply(add(one, two), three), four);

}
calc_chain()