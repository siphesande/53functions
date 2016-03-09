var square =function (character){
  var string = '';
  for(width=1; width<=4; width++){
   
    for(height=1; height<=4; height++){
     
      string += character;
    };
    string += '\n';
  };
  return string;
};
