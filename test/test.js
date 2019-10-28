const assert = require("assert");
const {
    multiply,max
  } = require("../src/index.js");

describe("Test", function() {

	it("Multiply two number", function() {
		assert(multiply(20, 30) === 600);
    });
    it("Return greater number", function() {
		assert(max(20, 30) === 30);
	});

});

