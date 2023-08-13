import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilString from "./Until-String.js";
import SHDate from "../src/base.js";

describe("String", () => {
	it("correctly Date YYYY/MM/DD T HH:II:SS", () => {
		UntilString.SolarString4y2m2dT2h2m2s.forEach(({ solar, time }) => {
			const ts = new SHDate(solar).getTime();
			assert.equal(time, ts);
		});
	});

	it("correctly Date Abbr DD, M YYYY", () => {
		UntilString.DateAber.forEach(({ solar, time }) => {
			const ts = new SHDate(solar).getTime();
			assert.equal(time, ts);
		});
	});

	it("correctly Date Abbr DayName , DD M YYYY", () => {
		UntilString.DateAber2.forEach(({ solar, time }) => {
			const ts = new SHDate(solar).getTime();
			assert.equal(time, ts);
		});
	});

	it("correctly Date Day Of Year YYYY.doy", () => {
		UntilString.DateDOY.forEach(({ solar, time }) => {
			const ts = new SHDate(solar).getTime();
			assert.equal(time, ts);
		});
	});

	it("correctly Date Week Of Year YYYY-Ww-D", () => {
		UntilString.DateWOY.forEach(({ solar, time }) => {
			const ts = new SHDate(solar).getTime();
			assert.equal(time, ts);
		});
	});
});
