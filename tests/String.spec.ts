import { assert, expect } from "chai";
import { it, describe } from "mocha";

//import * as UntilString from "./Until-String.js";
import * as UntilStringDateTime from "./Until-String-DateTime.js";
import * as UntilStringDateAber from "./Until-String-DateAber.js";
import * as UntilStringDateDoy from "./Until-String-DateDoy.js";
import * as UntilStringDateWoy from "./Until-String-DateWoy.js";
import SHDate from "../src/base.js";

describe("String", () => {
	it("correctly Date YYYY-MM-DD HH:II:SS", () => {
		UntilStringDateTime.SolarString4y2m2dT2h2m2s.forEach(
			({ solar, stime, gregorian, gtime }) => {
				const shts = new SHDate(solar).getTime();
				const gts = Date.parse(gregorian);
				assert.equal(stime, shts);
				assert.equal(gtime, gts);
				assert.equal(shts, gts);
			}
		);
	});

	it("correctly Date Abbr DD, M YYYY", () => {
		UntilStringDateAber.DateAber.forEach(
			({ solar, stime, gregorian, gtime }) => {
				const shts = new SHDate(solar).getTime();
				const gts = Date.parse(gregorian);
				assert.equal(stime, shts);
				assert.equal(gtime, gts);
				assert.equal(shts, gts);
			}
		);
	});

	it("correctly Date Abbr DayName , DD M YYYY", () => {
		UntilStringDateAber.DateAberWithDate.forEach(
			({ solar, stime, gregorian, gtime }) => {
				const shts = new SHDate(solar).getTime();
				const gts = Date.parse(gregorian);
				assert.equal(stime, shts);
				assert.equal(gtime, gts);
				assert.equal(shts, gts);
			}
		);
	});

	it("correctly Date Day Of Year YYYY.doy", () => {
		UntilStringDateDoy.DateDOY.forEach(({ solar, stime, gregorian, gtime }) => {
			const shts = new SHDate(solar).getTime();
			assert.equal(stime, shts);
		});
	});

	it("correctly Date Week Of Year YYYY-Ww-D", () => {
		UntilStringDateWoy.DateWOY.forEach(({ solar, stime, gregorian, gtime }) => {
			const shts = new SHDate(solar).getTime();
			assert.equal(stime, shts);
		});
	});
});
