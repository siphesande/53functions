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