const assert = require("assert");
const {
    multiply,max,min
  } = require("../src/index.js");

describe("Test", function() {

	it("Multiply two number", function() {
		assert(multiply(20, 30) === 600);
  });
    it("Return greater number", function() {
		assert(max(20, 30) === 30);
  });
  it("Return smaller number", function() {
		assert(min(20, 30) === 20);
	});

});

