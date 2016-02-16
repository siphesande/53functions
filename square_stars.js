// var rectOuter = function(length, width) {

//     var printStr = "*";
//     var seprator = " ";

//     for (var i = 0; i < length; i++) {

//         for (var j = 0; j < width; j++){

//             if (i == 0 || j == 0 || i == length - 1 || j == width - 1){
//                 console.log(printStr + seprator);
//             }
//             else{
//                 console.log(seprator + seprator);
//             }

//         console.log();
//     }
// }

// var size = 5
// var inner_size = size - 2
// console.log ('*' * size)
// for(var i = 0; i = inner_size; i++){
//     console.log ('*' + ' ' * inner_size + '*');
//     }
// console.log ('*' * size);

// var m = 10,
// var n = 10,
// for i in range(m):
//     for j in range(n):
//         console.log('*' if i in [0, n-1] or j in [0, m-1] else ' ', end='')
//     console.log()
var  height = 4;
var row = 0;
while (row < height){
    var count = 0;
    while(count < height -row){
        console.log(" ");
        count++;
    }
    count = 0;
    while(count <2*row + 1){
        console.log("*");
        count++;
    }
    console.log("\n");
    row++;
}

//  var draw = function(length){
//                 var top = Array(length+1).join("* ");
//                 var bottom = Array(length+1).join("* ");
//                 var middle=Array(length-1).join("*"+(Array(length*2-2).join(" "))+"*\n")

//                 middle = middle.substring(0,middle.length-1)
               
//                 console.log(top);
//                 console.log(middle);
//                 console.log(bottom);

//                 return[top,middle,bottom];
//         }
// console.log(draw(3));
