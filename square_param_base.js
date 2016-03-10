var square_param_base =function (character,base){
  var string = '';
  for(width=1; width<=base; width++){
   
    for(height=1; height<=base; height++){
     
      string += character;
    };
    string += '\n';
  };
  return string;
};
