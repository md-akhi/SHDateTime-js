var assert = require("assert");
var describe = require("mocha").describe;
var it = require("mocha").it;
import SHDate from "../src/index";
describe("#SHDate", function () {
	describe("now()", function () {
		it("should equal now", function () {
			assert.equal(SHDate.now(), Date.now());
		});
	});
});
