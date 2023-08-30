import { assert, expect } from "chai";
import { it, describe } from "mocha";

//import * as UntilString from "./Until-String.js";
import * as UntilStringDateTime from "./Until-String-DateTime.js";
import * as UntilStringDateAber from "./Until-String-DateAber.js";
import * as UntilStringDateAberWithDate from "./Until-String-DateAberWithDate.js";
import * as UntilStringDateDoy from "./Until-String-DateDoy.js";
import * as UntilStringDateWoy from "./Until-String-DateWoy.js";
import SHDate from "../src/base.js";

describe("String", () => {
	it("correctly Date YYYY-MM-DD HH:II:SS", () => {
		UntilStringDateTime.SolarString4y2m2dT2h2m2s.forEach(
			({ solar, stime, gregorian, gtime }) => {
				const shts = SHDate.parse(solar);
				assert.equal(stime, shts);
			}
		);
	});

	it("correctly Date Day Of Year YYYY.doy", () => {
		UntilStringDateDoy.DateDOY.forEach(({ solar, stime, gdate, gtime }) => {
			const shts = SHDate.parse(solar);
			assert.equal(stime, shts);
		});
	});

	it("correctly Date Week Of Year YYYY-Ww-D", () => {
		UntilStringDateWoy.DateWOY.forEach(({ solar, stime, gdate, gtime }) => {
			const shts = SHDate.parse(solar);
			assert.equal(stime, shts);
		});
	});

	it("correctly Date Abbr DD, M YYYY", () => {
		UntilStringDateAber.DateAber.forEach(({ solar, stime, gdate, gtime }) => {
			const shts = SHDate.parse(solar);
			assert.equal(stime, shts);
		});
	});

	it("correctly Date Abbr DayName , DD M YYYY", () => {
		UntilStringDateAberWithDate.DateAberWithDate.forEach(
			({ solar, stime, gdate, gtime }) => {
				const shts = SHDate.parse(solar);
				assert.equal(stime, shts);
			}
		);
	});
});
