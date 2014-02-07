assert = require("assert");
math = require("./math");

describe("math", function () {

	describe("add", function () {
		it("should add the first number to the second", function () {
			var result = math.add(10, 5);
			
			assert.equal(result, 15);
		});
	});
	
});