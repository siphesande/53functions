//testing hello function
TestMyCode.run("testing hello function", function(assert) {
    var result = hello();
    // is the result as we expected?
    assert.equals("hello world", result, "testing hello function");
});

TestMyCode.run("testing hello_uppercase function", function(assert) {
    var result = hello_uppercase("sphe");
    // is the result as we expected?
    assert.equals("Hello, SPHE!", result, "testing hello_uppercase function");
});

//testing hello_joe function
TestMyCode.run("testing hello_joe function when pass in, Joe", function(assert) {
    var result = hello_joe("Joe");
    //is the result as we expected?
    assert.equals("Hello!", result, "testing hello_joe function");
});
    TestMyCode.run("testing hello_joe function when pass in, Bob", function(assert) {

    var result = hello_joe("Bob");
    // is the result as we expected?
    assert.equals("Hello!", result, "testing hello_joe function");
});
    //test logic if not bob or joe
    //Hello!
    TestMyCode.run("testing hello_joe function when Bob or Joe don't pass in", function(assert) {
    var result = hello_joe("Andre");
    // is the result as we expected?
    assert.equals("Hello Andre!", result, "testing hello_joe function");
});


//testing number_list function
TestMyCode.run("testing number_list function", function(assert) {
    var result = number_list(5);
    // is the result as we expected?
    assert.equals([1,2,3,4,5].toString(), result.toString(), "testing number_list function");
});

//testing sum_numbers function
TestMyCode.run("testing sum_numbers function", function(assert) {
	var result = sum_numbers(5);
	//is the result as we expected?
	assert.equals(15, result, "testing sum_numbers function");
});

