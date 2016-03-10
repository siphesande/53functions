function diamond_char_base( character,base) 
{
   // n = parseInt(n,10);
    var i, s;
    var string ='\n';
    // top: 1 to n
   
    for(i = 1; i <= base; ++i )
    {
        // write n-i spaces:
        for ( s = 1; s <= base-i; ++s )
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
    for(i = base-1; i >= 1; --i )
    {
        // write n-i spaces:
        for ( s = 1; s <= base-i; ++s )
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

diamond_char_base('*');
