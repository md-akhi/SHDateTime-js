import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilDate from "./Until-Date.js";
import * as UntilLeapYear from "./Until-Leap-Year.js";
import SHDate from "../src/base.js";

describe("now()", () => {
	it("should equal now", () => {
		assert.equal(SHDate.now(), Date.now());
	});
});

describe("Convert Date Gregorian() And Solar()", () => {
	it("correctly leap & leaps", () => {
		UntilLeapYear.leapYear.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [leaps] = date.format("LPS");
			assert.equal(date.isLeapYear(), sdata.Leap);
			assert.equal(leaps, sdata.Leaps);
		});
	});

	it("correctly gregorian to solar", () => {
		UntilDate.solarDate.forEach(({ gdata, sdata }) => {
			const [gyear, gmonth, gday] = gdata.gregorian;
			let gdate = new Date(gyear, gmonth, gday);
			let sdate = new SHDate(gdate.getTime());
			assert.deepEqual(
				[sdate.getFullYear(), sdate.getMonth(), sdate.getDate()],
				sdata.solar
			);
		});
	});

	it("correctly solar to gregorian", () => {
		UntilDate.solarDate.forEach(({ sdata, gdata }) => {
			const [year, month, day] = sdata.solar;
			let sdate = new SHDate(year, month, day);
			let gdate = new Date(sdate.getTime());
			assert.deepEqual(
				[gdate.getFullYear(), gdate.getMonth(), gdate.getDate()],
				gdata.gregorian
			);
		});
	});
});

describe("get in/of date", () => {
	describe("week", () => {
		it("correctly day of week (dow)", () => {
			UntilDate.solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				let date = new SHDate(year, month, day);
				assert.equal(date.getDay(), sdata.Dow);
			});
		});

		it("correctly week of year (woy)", () => {
			UntilDate.solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				let date = new SHDate(year, month, day);
				const [woy] = date.format("woy");
				assert.deepEqual(woy, sdata.Woy);
			});
		});

		it("correctly weeks in year (wiy)", () => {
			UntilDate.solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				let date = new SHDate(year, month, day);
				const [Wiys] = date.format("wiy");
				assert.equal(Wiys, sdata.Wiy);
			});
		});
	});

	describe("year", () => {
		it("correctly days in year (diy)", () => {
			UntilDate.solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				let date = new SHDate(year, month, day);
				const [Diy] = date.format("diy");
				assert.equal(Diy, sdata.Diy);
			});
		});

		it("correctly day of year (doy)", () => {
			UntilDate.solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				let date = new SHDate(year, month, day);
				const [Doy] = date.format("doy");
				assert.equal(Doy, sdata.Doy);
			});
		});
	});

	describe("month", () => {
		it("correctly days in month (dim)", () => {
			UntilDate.solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				let date = new SHDate(year, month, day);
				const [Dim] = date.format("dim");
				assert.equal(Dim, sdata.Dim);
			});
		});
	});
});

describe("set function", () => {
	it("correctly setWeek", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			// [iw, iy] = sdata.Woy;
			let date = new SHDate();
			date.setHours(0, 0, 0, 0);
			date.setWeek(sdata.Woy[1], sdata.Woy[0], sdata.Dow);
			assert.deepEqual(date.getWeekOfYear(), sdata.Woy);
		});
	});

	it("correctly setdateOfDayOfYear", () => {
		UntilDate.solarDate.forEach(({ sdata, stime, gtime }) => {
			// [year, month, day] = sdata.solar;
			let date = new SHDate();
			date.setHours(0, 0, 0, 0);
			date.setdateOfDayOfYear(sdata.solar[0], sdata.Doy);
			assert.equal(date.getDayOfYear(), sdata.Doy);
		});
	});

	describe("correctly date & time & week", () => {
		describe("check date & time & week", () => {
			it("correctly checkdate", () => {});
			it("correctly checktime", () => {});
			it("correctly checkTime12", () => {});
			it("correctly checkweek", () => {});
		});
		describe("correctly date & time Correction", () => {
			it("correctly dateCorrection", () => {});
			it("correctly timeCorrection", () => {});
		});
	});
});
