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

var size = 5
var inner_size = size - 2
console.log ('*' * size)
for(var i = 0; i < inner_size; i++){
    console.log ('*' + ' ' * inner_size + '*');
    }
console.log ('*' * size);

// m, n = 10, 10
// for i in range(m):
//     for j in range(n):
//         print('*' if i in [0, n-1] or j in [0, m-1] else ' ', end='')
//     print()