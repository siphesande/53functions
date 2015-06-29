TestMyCode.run("testing sum_numbers function", function(assert) {
	var result = sum_numbers(5);
	//is the result as we expected?
	assert.equals(15, result, "testing sum_numbers function");
});
