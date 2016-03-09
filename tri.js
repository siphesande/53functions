var square_stars =function (value){
  var string = '';
  for(width=1; width<=value; width++){
   
    for(height=1; height<=value; height++){
     
      string += '*';
    };
    string += '\n';
  };
  return string;
};