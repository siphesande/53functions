TestMyCode.run("testing number_list function", function(assert) {
    var result = number_list(5);
    // is the result as we expected?
    //assert.equals((1,2,3,4,5).toString(), result.toString(), "testing number_list function");
    assert.equals([1,2,3,4,5].toString(), result.toString(), "testing number_list function");
});