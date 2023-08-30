import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilDate from "./Until-Date.js";
import * as UntilConvertDate from "./Until-Convert-Date.js";
import SHDate from "../src/base.js";

describe("now()", () => {
	it("should equal now", () => {
		assert.equal(SHDate.now(), Date.now());
	});
});

describe("Convert Date Gregorian() And Solar()", () => {
	it("correctly leap", () => {
		UntilConvertDate.leapYear.forEach(({ solar, Leap }) => {
			const [year, month, day] = solar;
			let date = new SHDate(year, month, day);
			assert.equal(date.isLeapYear(), Leap);
		});
	});

	it("correctly gregorian to solar", () => {
		UntilConvertDate.gregorianAndSolar.forEach(({ gregorian, solar }) => {
			const [gyear, gmonth, gdate] = gregorian;
			let gregoriandate = new Date(gyear, gmonth, gdate);
			let solardate = new SHDate(gregoriandate.getTime());
			const sdate = [
				solardate.getFullYear(),
				solardate.getMonth(),
				solardate.getDate()
			];
			assert.deepEqual(sdate, solar);
		});
	});

	it("correctly solar to gregorian", () => {
		UntilConvertDate.solarAndGregorian.forEach(({ solar, gregorian }) => {
			const [year, month, day] = solar;
			let solardate = new SHDate(year, month, day);
			let gregoriandate = new Date(solardate.getTime());
			const arrgregoriandate = [
				gregoriandate.getFullYear(),
				gregoriandate.getMonth(),
				gregoriandate.getDate()
			];
			assert.deepEqual(arrgregoriandate, gregorian);
		});
	});
});

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

describe("in and of date", () => {
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

	it("correctly days in month (dim)", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [Dim] = date.format("dim");
			assert.equal(Dim, sdata.Dim);
		});
	});
});

describe("set function", () => {
	it("correctly setWeek", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			const [iw, iy] = sdata.Woy;
			let date = new SHDate(year, month, day);
			date.setWeek(year, iw, sdata.Dow + 1);
			assert.equal(
				[date.getFullYear(), date.getMonth(), date.getDates()],
				sdata.solar
			);
		});
	});
});
