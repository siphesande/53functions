var tri = function(base){

var string = "";

for (var i = 0, j = base, k = base; i < 10; i++) {
    string += "*";
    if (--j === 0) {
        j = --k;
        string += "\n";
    }
}

return (string);
}
 // Use this methode
function tri_two(number){
  var str = '';
  var count = 0;
  for(x=0; x <= number; x++){
    for(y=0; y<count; y++){
        str += '*';
    };
    count++;
    str += '\n';
  };
  return str;
};