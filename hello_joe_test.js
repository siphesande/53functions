TestMyCode.run("testing hello_joe function", function(assert) {
    var result = hello_joe("Joe");
    // is the result as we expected?
    assert.equals("hello", result, "testing hello_joe function");
});