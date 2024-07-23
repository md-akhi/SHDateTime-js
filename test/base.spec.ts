import { assert, expect } from "chai";
import { it, describe } from "mocha";

import { solarDate } from "./Until-Date.js";
import { solarDates } from "./Until-Dates.js";
import { leapYear } from "./Until-Leap-Year.js";
import { checkDate, checkTime, checkWeek } from "./Until-Check.js";

import SHDate from "../src/base.js";

// describe("now()", () => {
// 	it("should equal now", () => {
// 		assert.equal(SHDate.now(), Date.now());
// 	});
// });

describe("Convert Date Gregorian() And Solar()", () => {
	it("correctly leap & leaps", () => {
		leapYear.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			const date = new SHDate(year, month, day);
			const [leaps] = date.format("LPS");
			assert.equal(date.isLeapYear(), sdata.Leap);
			assert.equal(leaps, sdata.Leaps);
		});
	});

	it("correctly gregorian to solar", () => {
		solarDate.forEach(({ gdata, sdata }) => {
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
		solarDate.forEach(({ sdata, gdata }) => {
			const [year, month, day] = sdata.solar;
			let sdate = new SHDate(year, month, day);
			let gdate = new Date(sdate.getTime());
			assert.deepEqual(
				[gdate.getFullYear(), gdate.getMonth(), gdate.getDate()],
				gdata.gregorian
			);
		});
	});

	it("correctly solar and gregorian for dates", () => {
		solarDates.forEach(({ idata, sdata, gdata }) => {
			const [iyear, imonth, iday] = idata.solar;
			// const [syear, smonth, sday] = sdata.solar;
			const [gyear, gmonth, gday] = gdata.gregorian;
			let sdate = new SHDate(iyear, imonth, iday);
			let gdate = new Date(gyear, gmonth, gday);
			assert.deepEqual(
				[gdate.getFullYear(), gdate.getMonth(), gdate.getDate()],
				gdata.gregorian
			);
			assert.deepEqual(
				[sdate.getFullYear(), sdate.getMonth(), sdate.getDate()],
				sdata.solar
			);
		});
	});
});

describe("get in/of date", () => {
	describe("week", () => {
		it("correctly day of week (dow)", () => {
			solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				const date = new SHDate(year, month, day);
				assert.equal(date.getDay(), sdata.Dow);
			});
		});

		it("correctly week of year (woy)", () => {
			solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				const date = new SHDate(year, month, day);
				const [woy] = date.format("woy");
				assert.deepEqual(woy, sdata.Woy);
			});
		});

		it("correctly weeks in year (wiy)", () => {
			solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				const date = new SHDate(year, month, day);
				const [Wiys] = date.format("wiy");
				assert.equal(Wiys, sdata.Wiy);
			});
		});

		it("correctly nth weekday of month (wom)", () => {
			solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				const date = new SHDate(year, month, day);
				const Wim_date = date.getNthWeekdayOfMonth(sdata.Dow, sdata.Wim);
				assert.equal(Wim_date, day);
			});
		});

		it("correctly nth weekday in month (wim)", () => {
			solarDate.forEach(({ sdata }) => {
				const [year, month, day] = sdata.solar;
				const date = new SHDate(year, month, day);
				const nth = date.getWeekdayInMonth(year, month, day);
				assert.equal(nth, sdata.Wim);
			});
		});
	});
});

describe("year", () => {
	it("correctly days in year (diy)", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			const date = new SHDate(year, month, day);
			const [Diy] = date.format("diy");
			assert.equal(Diy, sdata.Diy);
		});
	});

	it("correctly day of year (doy)", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			const date = new SHDate(year, month, day);
			const [Doy] = date.format("doy");
			assert.equal(Doy, sdata.Doy);
		});
	});
});

describe("month", () => {
	it("correctly days in month (dim)", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			const date = new SHDate(year, month, day);
			const [Dim] = date.format("dim");
			assert.equal(Dim, sdata.Dim);
		});
	});
});

describe("set function", () => {
	const date = new SHDate();
	it("correctly setWeek", () => {
		solarDate.forEach(({ sdata }) => {
			// [iy,iw ] = sdata.Woy;
			date.setHours(0, 0, 0, 0);
			date.setWeek(sdata.Woy[0], sdata.Woy[1], sdata.Dow);
			assert.deepEqual(date.getWeekOfYear(), sdata.Woy);
		});
	});

	it("correctly setDateOfDayOfYear", () => {
		solarDate.forEach(({ sdata, stime, gtime }) => {
			// [year, month, day] = sdata.solar;
			date.setHours(0, 0, 0, 0);
			date.setDateOfDayOfYear(sdata.solar[0], sdata.Doy);
			assert.equal(date.getDayOfYear(), sdata.Doy);
		});
	});
});

describe("correctly date & time & week", () => {
	let sdate = new SHDate();
	describe("check date & time & week", () => {
		it("correctly checktime", () => {
			checkTime.forEach(({ time, check24 }) => {
				const [h24, min, sec, ms] = time;
				assert.equal(SHDate.checkTime(h24, min, sec, ms), check24);
			});
		});
		it("correctly checkTime12", () => {
			checkTime.forEach(({ time, check12 }) => {
				const [h24, min, sec, ms] = time;
				assert.equal(SHDate.checkTime12(h24, min, sec, ms), check12);
			});
		});
		it("correctly checkdate", () => {
			checkDate.forEach(({ date, check }) => {
				const [year, month, day] = date;
				assert.equal(sdate.checkDate(year, month, day), check);
			});
		});
		it("correctly checkweek", () => {
			checkWeek.forEach(({ week, check }) => {
				const [year, wk, day] = week;
				assert.equal(sdate.checkWeek(year, wk, day), check);
			});
		});
	});

	describe("correctly date & time Correction", () => {
		let sdate = new SHDate();
		it("correctly timeCorrection", () => {
			checkTime.forEach(({ time, correction }) => {
				const [h24, min, sec, ms] = time;
				assert.deepEqual(sdate.timeCorrection(h24, min, sec, ms), correction);
			});
		});

		it("correctly dateCorrection", () => {
			checkDate.forEach(({ date, correction }) => {
				const [year, month, day] = date;
				assert.deepEqual(sdate.dateCorrection(year, month, day), correction);
			});
		});

		it("correctly weekCorrection", () => {
			checkWeek.forEach(({ week, correction }) => {
				const [year, wk, day] = week;
				assert.deepEqual(sdate.weekCorrection(year, wk, day), correction);
			});
		});
	});
});
