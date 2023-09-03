import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilString from "./Until-String.js";
import SHDate from "../src/base.js";

describe("String", () => {
	it("correctly Date Day Of Year YYYY.doy", () => {
		UntilString.DateString.forEach(({ sdata, stime }) => {
			const shts = SHDate.parse(sdata.DateDoy);
			assert.equal(stime, shts);
		});
	});

	it("correctly Date Week Of Year YYYY-Ww-D", () => {
		UntilString.DateString.forEach(({ sdata, stime }) => {
			const shts = SHDate.parse(sdata.DateWoy);
			assert.equal(stime, shts);
		});
	});

	it("correctly Date YYYY-MM-DD HH:II:SS", () => {
		UntilString.DateString.forEach(({ sdata, stime }) => {
			const shts = SHDate.parse(sdata.DateTime);
			assert.equal(stime, shts);
		});
	});

	it("correctly Date Abbr DD, M YYYY", () => {
		UntilString.DateString.forEach(({ sdata, stime }) => {
			const shts = SHDate.parse(sdata.DateAber);
			assert.equal(stime, shts);
		});
	});

	it("correctly Date Abbr DayName , DD M YYYY", () => {
		UntilString.DateString.forEach(({ sdata, stime }) => {
			const shts = SHDate.parse(sdata.DateAberWithDate);
			assert.equal(stime, shts);
		});
	});
});
