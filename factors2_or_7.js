var factors2_or_7 = function(n){
	var list = [];
	for (i = 0; i < n;i++){
		if(i % 7 === 0 || i % 2 ===0){
			
			list.push(i);
			
		}
      
	}
  console.log(list);
  return list;
};

factors2(15);