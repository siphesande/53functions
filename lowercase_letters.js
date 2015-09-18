/*var check1 = "Jack Spratt";    
var check2 = "BARBARA FOO-BAR"; 
var check3 = "JASON D'WIDGET";  

var isUpper1 = HasLowercaseCharacters(check1);  
var isUpper2 = HasLowercaseCharacters(check2);
var isUpper3 = HasLowercaseCharacters(check3);

function HasLowercaseCharacters(string input)
{
    //pattern for finding whether any lowercase alpha characters exist
    var allLowercase; 

    return allLowercase.test(input);
}

function lowercase_letters(str) {
    return (/[a-z]/.test(str));
}*/

function lowercase_letters(str) {
    return str.replace(/[A-Z]/g, '');
}