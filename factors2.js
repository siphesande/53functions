// var factorial = function fac(n) { 
// 	return n<2 ? 1 : n*fac(n-1);
// 	 };

// console.log(factorial(3));

var factors2 = function(n){
	var list = [];
	for (i =0; i < n;i++){
		if((n[i] % 2 ===0) < n){
			console.log(n[i]);
			list.push(n[i]);
			//return n[i]; 
		}
      
	}
  console.log(list);
};

factors2(6);


 function calculate(num) {
    var str = "0";
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            str += ',' + i;
        }
    }
    alert(str);
}

calculate(2);

 var factors2 = function(n){
	var list = [];
	for (i = 0; i < n;i++){
		if((2 % i === 0) < 6){
			//console.log(n[i]);
			list.push(i);
			//return n[i]; 
		}
      
	}
  console.log(list);
};

factors2(6);