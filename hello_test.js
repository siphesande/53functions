TestMyCode.run("testing hello function", function(assert) {
    var result = hello();
    // is the result as we expected?
    assert.equals("hello", result, "testing hello function");
});