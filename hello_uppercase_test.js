
TestMyCode.run("testing hello_uppercase function", function(assert) {
    var result = hello_uppercase("sphe");
    // is the result as we expected?
    assert.equals("hello, sphe", result, "testing hello_uppercase function");
}); 