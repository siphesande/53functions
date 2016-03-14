function ascii_params(word){

//var word = "Apple"
var sum = 0;
word.toUpperCase().split('').forEach(function(alphabet) {
    sum += alphabet.charCodeAt(0) - 64;
});
console.log(sum);
return sum;

}
ascii_upper();