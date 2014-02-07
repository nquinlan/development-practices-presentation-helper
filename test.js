assert = require("assert");
math = require("./math");

describe("math", function () {

	describe("add", function () {
		it("should add the first number to the second", function () {
			var result = math.add(10, 5);
			
			assert.equal(result, 15);
		});
	});

	describe("subtract", function () {
		it("should subtract the second number from the first", function () {
			var result = math.subtract(10, 5);

			assert.equal(result, 5);
		});
	});

	describe("multiply", function () {
		it("should multiply the first number by the second", function () {
			var result = math.multiply(10, 5);

			assert.equal(result, 50);
		});
	});

	describe("divide", function () {
		it("should divide the first number by the second", function () {
			var result = math.divide(10, 5);

			assert.equal(result, 2);
		});
	});

	describe("circle", function () {
		describe("circumference", function () {
			it("should find the circumference of a circle", function () {
				var result = math.circle.circumference(5);

				assert.equal(result, 31.4159265358979);
			});
		});

		describe("area", function () {
			it("should find the area of a circle", function () {
				var result = math.circle.area(10);

				assert.equal(result, 314.159265358979);
			});
		});
	});

	describe("cylinder", function () {
		describe("surfaceArea", function () {
			it("should find the surface area of a cylinder", function () {
				var result = math.cylinder.surfaceArea(10, 1);

				assert.equal(result, 691.1503837897537);
			});
		});
	});
	
});