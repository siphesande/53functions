var factors2 = function(n){
	var list = [];
	for (i = 0; i < n;i++){
		if(i % 2 === 0){
			
			list.push(i);
			
		}
      
	}
  console.log(list);
  return list;
};

factors2(10);



// var factorial = function fac(n) { 
// 	return n<2 ? 1 : n*fac(n-1);
// 	 };



// console.log(factorial(3));

// var factors2 = function(n){
// 	var list = [];
// 	for (i =0; i < n;i++){
// 		if((n[i] % 2 ===0) < n){
// 			console.log(n[i]);
// 			list.push(n[i]);
// 			//return n[i]; 
// 		}
      
// 	}
//   console.log(list);
// };

// factors2(6);


//  function calculate(num) {
//     var str = "0";
//     for (i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             str += ',' + i;
//         }
//     }
//     alert(str);
// }

// calculate(2);

 