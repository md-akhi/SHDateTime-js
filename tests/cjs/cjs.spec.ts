let chai = require("chai");
let mocha = require("mocha").default;
let SHDate = require("./dev.cjs");

// mocha.describe("now()", () => {
// 	mocha.it("should equal now", () => {
// 		chai.assert.equal(SHDate.now(), Date.now());
// 	});
// });

mocha.describe("Convert Date Gregorian() And Solar()", () => {
	mocha.it("correctly leap & leaps", () => {
		[].forEach(({ sdata }) => {
			// const [year, month, day] = sdata.solar;
			// let date = new SHDate(year, month, day);
			// const [leaps] = date.format("LPS");
			// chai.assert.equal(date.isLeapYear(), sdata.Leap);
			// chai.assert.equal(leaps, sdata.Leaps);
		});
	});
});
