var rectOuter = function(length, width) {

    var printStr = "*";
    var seprator = " ";

    for (var i = 0; i < length; i++) {

        for (var j = 0; j < width; j++){

            if (i == 0 || j == 0 || i == length - 1 || j == width - 1){
                console.log(printStr + seprator);
            }
            else{
                console.log(seprator + seprator);
            }

        console.log();
    }
}