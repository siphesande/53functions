
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
QUnit.test("start test",function(assert){
             var result  = start("Codex time tcab ");
             var expected = 't';
              assert.equal(result ,expected);
});
QUnit.test("lowercase_letters test" , function(assert){

assert.equal(lowercase_letters("Jack Sprats") ,"ack prats"); 

});
QUnit.test("uppercase_letters test" , function(assert){

assert.equal(uppercase_letters("Jack Sprats") ,"J S"); 

});

// QUnit.test("square_stars test" , function(assert){

// assert.equal(square_stars("Jack Sprats") ,"J S"); 

// });

QUnit.test("returns most occuring letter in sentence",function(assert){
      
      var result = most("sphe is a ok");
      var expected = 's';
      assert.equal(result,expected);
});

QUnit.test("returns least occuring letter in sentence",function(assert){
      
      var result  = least("wonder full day").toLowerCase();
            var expected = 'w';
            assert.equal(result ,expected);
});
QUnit.test("add.js test",function(assert){
  assert.equal(add(2,3), 5);

});

QUnit.test("divide test" ,function(assert){
  assert.equal(div(2,2),1);
});

QUnit.test("calc_all test",function(assert){
  
   assert.equal(calc_all(2,2,4,5),1);
});

QUnit.test("draw.js test", function(assert){
  
  assert.equal(draw(['waist','internship','music']),'waist,internship,music');
});
QUnit.test('square_stars', function(assert) {
    assert.equal(square_stars(4),'****\n****\n****\n****\n');
});
QUnit.test('square.js', function(assert){
    assert.equal(square("@"), "@@@@\n@@@@\n@@@@\n@@@@\n");

});
QUnit.test("square_param.js", function(assert){
    assert.equal(square_param("#","4","4"), '####\n####\n####\n####\n');
});


