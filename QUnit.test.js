
// function 1 to function 5
QUnit.test( "hello", function( assert ) {
  assert.equal( hello(), "hello world" );
});

QUnit.test( "hello_uppercase", function( assert ) {
  assert.equal ( hello_uppercase("sphe"), "Hello, SPHE!");
});


QUnit.test( "hello_joe", function( assert ) {
  assert.equal(hello_joe("Joe"), "Hello!");

  assert.equal(hello_joe("Bob"), "Hello!");
  assert.equal(hello_joe("Andre"), "Hello Andre!");


});

QUnit.test( "number_list", function( assert ) {
  assert.equal(number_list(5),[1,2,3,4,5].toString() );
});

QUnit.test( "sum_numbers", function( assert ) {
  assert.equal( sum_numbers(5), 15 );
});

// function 6 to 10


QUnit.test( "length test", function( assert ) {
  
  assert.equal(length("sphe"), 4 );
});

QUnit.test( "upper test", function( assert ) {
 
  assert.equal(upper("sphe"), "SPHE" );
});

QUnit.test( "reverse test", function( assert ) {
  
  assert.equal(reverse("sphe").toString(), "ehps" );
});

QUnit.test( "hello_list test", function( assert ) {
 
  assert.equal(hello_list(6), "hello world,hello world,hello world,hello world,hello world,hello world");
});


QUnit.test("high_low test", function(assert){ 

assert.equal(high_low([1,3,2,7,4]),[7,1].toString());


});


QUnit.test("count_words test" , function(assert){

assert.equal(count_words("code now") ,2);
});
QUnit.test("sum_word_len test" , function(assert){

    
  assert.equal(sum_word_len("code now sphe") ,11);  
});

//QUnit.test("longest_word test" ,function(assert){
    //var result = longest_word("how cool is coding");
    //var expected = ["coding",6].toString();
    //assert.equal(result,expected);



QUnit.test("longest_word test" , function(assert){
assert.equal(longest_word("how cool is coding") ,["coding",6].toString());  
});



QUnit.test("shortest_word test" , function(assert){
assert.equal(shortest_word("Coding with Andre") ,["with",4].toString());  
});

QUnit.test("word_length test",function(assert){

   var result = word_length("codex is really helpfull");
            var expected = [6,5];

        assert.equal(result.toString() , expected.toString());
});
QUnit.test("avg test",function(assert){

   var result = avg("codex is really helpfull");
            var expected = [6];

        assert.equal(result.toString() , expected.toString());
});
