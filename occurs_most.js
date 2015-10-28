/*function occursMost(sentence){

	sentence = sentence.toLowerCase().split(" ");
	var letters = [];
	sentence.forEach(function(word){

		word = word.split('')
		word.forEach(function(letter){

			letters.push(letter.toString());
		});

	});
    return most(letters.sort());
	
}

console.log(occursMost("bhe quick brown fox jumps over bhe lazy dog but still luckily finds a bane to eat at the mall editors dam"));
*/
var most = function(arr){
     var count =0;
     var letters =[];//non-duplicated word starting 'letters' array
     var occurances =[]//number of occurances of each letter in 'letters' array
    for( var i = 0 ;i< arr.length;i++){//loop through array

                
                var letter = arr[i];//each letter                
                var exists = (letters.indexOf(letter)) > (-1);//should be checked if it has been pushed to 'letters' array or not (incase of duplicates)

                if(!exists){

                    letters.push(letter); //push letter to letters array
                    
                    for(var j = i ; j<= arr.length ;j++){
                        
                        if(arr[j] == letter){
                            
                            
                            count++;
                            
                        }
                        else{
                            
                            occurances.push(count);
                            count=0;
                            break;

                        }

                    }
                }
                else{}

                

        } 
    

        var max = Math.max.apply(null,occurances);
        var index = occurances.indexOf(max);
        return letters[index];
}