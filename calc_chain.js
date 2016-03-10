// //function calc_chain(){
// var Calc = function(){
//   this.sum = 0; //could be a param
//   return this;
// };

// Calc.prototype.add = function(x){
//   this.sum = this.sum + x;
//   return this;
// };

// Calc.prototype.multiply = function(x){
//   this.sum = this.sum * x;
//   return this;
// };
  
// Calc.prototype.subtract = function(x){
//   this.sum = this.sum - x;
//   return this;
// };

// Calc.prototype.calce_chain = function(){
//   return this.sum;
// };
  
// console.log(new Calc().add(1).add(2).multiply(3).subtract(4).calce_chain());
// //return new Calc().add(1).add(2).multiply(3).subtract(4).calce_chain();
function calc_chain(){

var value = function(val){
  return function(){
    return val;
  }
}

// A function to add two functions together
var add = function(x, y){
  return function(){
   return x() + y();
  }
}

// A function to subtract one function from another
var subtract = function(x, y){
  return function(){
    return x() - y();
  }
}

// A function to multiply two functions
var multiply = function(x, y){
  return function(){
    return x() * y();
  }
}

var one = value(1);
var two = value(2);
var three = value(3);
var four = value(4);

// (1 + 2) * 3 - 4 == 5
var resultFunc = subtract(multiply(add(one, two), three), four);

// but it's still a function right now, so evaluate it
var result = resultFunc();
console.log(result); // => 5
return results;
}

