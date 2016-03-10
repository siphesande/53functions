function diamond( n ) 
{
   // n = parseInt(n,10);

    var i, s;
    var string ='\n';
    // top: 1 to n
   
    for(i = 1; i <= n; ++i )
    {
        // write n-i spaces:
        for ( s = 1; s <= n-i; ++s )
        {
            string += " ";
        }
        // then write i asterisk+space sets:
        for ( s = 1; s <= i; ++s )
        {
            string += "* ";
        }
        string += "\n";
    }
      
    // bottom: n-1 down to 1
    for(i = n-1; i >= 1; --i )
    {
        // write n-i spaces:
        for ( s = 1; s <= n-i; ++s )
        {
            string += " ";
        }
        // then write i asterisk+space sets:
        for ( s = 1; s <= i; ++s )
        {
            string += "* ";
        }
       string += "\n";
    }

   console.log(string);
   return string;
    
}


diamond(5);



// function diamond(number){
//   var string = '';
//   var count = 0;

//   for(x=0; x<=number; x++){
//     for(y=0; y<count; y++){
//       string += '*';
//     };
//     count++;
//     string += '\n';
//   };

//   for(z=0; z<=number; z++){
//       for(w=0; w<count; w++){
//         string += '*';
//       };
//       count--;
//       string += '\n';
//   };
//   return string;
// };
// console.log(diamond(5));


 
     
