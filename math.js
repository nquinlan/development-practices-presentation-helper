math = {};

math.add = function (first, second) {
	return first + second;
};

math.subtract = function (first, second) {
	return first - second;
}

math.multiply = function (first, second) {
	return first*second;
}

math.divide = function (first, second) {
	return first/second;
}

math.circle = {};

math.circle.circumference = function (radius) {
	return math.multiply(3.14159265358979, math.multiply(2, radius) );
}

math.circle.area = function (radius) {
	// πr^2
	return math.multiply(3.14159265358979, Math.pow(radius, 2) );
}

math.cylinder = {};

math.cylinder.surfaceArea = function (radius, height) {
	return math.add(math.multiply(2, math.circle.area(radius)), math.multiply(math.circle.circumference(radius), height) );
}

module.exports = math;