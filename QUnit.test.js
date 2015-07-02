
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
  
  assert.equal(length(), 4 );
});

QUnit.test( "upper test", function( assert ) {
 
  assert.equal(upper("sphe"), "SPHE" );
});

QUnit.test( "reverse test", function( assert ) {
  ;
  assert.equal(reverse("sphe").toString(), "ehps" );
});

QUnit.test( "hello_list test", function( assert ) {
 
  assert.equal(hello_list(6), "hello world,hello world,hello world,hello world,hello world,hello world");
});

QUnit.test( "hello_list test", function( assert ) {
 
  assert.equal(hello_list(6), "hello world,hello world,hello world,hello world,hello world,hello world");
});
   