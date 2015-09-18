/*function uppercase_letters(aCharacter)
        {
            return (aCharacter >= 'A') && (aCharacter <= 'Z');
        }*/

/* function uppercase_letters(inputtxt)  
  {  
   var letters = /^[A-Za-z]+$/;  
   if(inputtxt.value.match(letters))  
     {  
      return true;  
     }  
   else  
     {  
     alert("message");  
     return false;  
     }  
  }  
*/

function uppercase_letters(str)
{
   return str.replace(/[a-z]/g, '');
 }