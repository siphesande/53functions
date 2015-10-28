var least = function(arr){
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
    console.log(letters.toString());
    console.log(occurances)
   
        var min = Math.min.apply(null,occurances);
        var index = occurances.indexOf(min);
        return letters[index];
}
