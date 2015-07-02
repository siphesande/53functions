

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


   