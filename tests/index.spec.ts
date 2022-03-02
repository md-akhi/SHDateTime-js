import assert from "assert"; // import {assert} from 'chai';
import { it, describe } from "mocha";

import * as Until from "./Until.js";
import SHDate from "../src/index.js";
const date = new SHDate();

describe("now()", function () {
	it("should equal now", function () {
		assert.equal(SHDate.now(), Date.now());
	});
});

describe("isLeap()", function () {
	it("correctly leap", function () {
		Until.leapYear.forEach(({ year, expected }) => {
			assert.strictEqual(date.isLeap(year), expected);
		});
	});
});
