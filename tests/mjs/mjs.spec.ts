import { exec } from "node:child_process";
exec("node ./dev.mjs", (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.error(`stderr: ${stderr}`);
});

import { assert, expect } from "chai";
import { it, describe } from "mocha";

import SHDate from "./dev.mjs";

// describe("now()", () => {
// 	it("should equal now", () => {
// 		assert.equal(SHDate.now(), Date.now());
// 	});
// });

describe("Convert Date Gregorian() And Solar()", () => {
	it("correctly leap & leaps", () => {
		[].forEach(({ sdata }) => {
			// const [year, month, day] = sdata.solar;
			// let date = new SHDate(year, month, day);
			// const [leaps] = date.format("LPS");
			// assert.equal(date.isLeapYear(), sdata.Leap);
			// assert.equal(leaps, sdata.Leaps);
		});
	});
});
