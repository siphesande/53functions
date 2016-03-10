function diamond_base( character ) 
{
   // n = parseInt(n,10);
    var i, s;
    var string ='\n';
    // top: 1 to n
   
    for(i = 1; i <= 5; ++i )
    {
        // write n-i spaces:
        for ( s = 1; s <= 5-i; ++s )
        {
            string += " ";
        }
        // then write i asterisk+space sets:
        for ( s = 1; s <= i; ++s )
        {
            string += character+ " ";
        }
        string += "\n";
    }
      
    // bottom: n-1 down to 1
    for(i = 5-1; i >= 1; --i )
    {
        // write n-i spaces:
        for ( s = 1; s <= 5-i; ++s )
        {
            string += " ";
        }
        // then write i asterisk+space sets:
        for ( s = 1; s <= i; ++s )
        {
            string += character+" ";
        }
       string += "\n";
    }

   console.log(string);
   return string;
    
}

diamond_base('*');
