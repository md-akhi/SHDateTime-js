import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilDate from "./Until-Date.js";
import * as UntilConvertDate from "./Until-Convert-Date.js";
import SHDate from "../src/index.js";
const date = new SHDate();

describe("now()", () => {
	it("should equal now", () => {
		assert.equal(SHDate.now(), Date.now());
	});
});

describe("Convert Date Gregorian() And Solar()", () => {
	it("correctly leap", () => {
		UntilConvertDate.leapYear.forEach(({ solar, Leap }) => {
			const [shyear] = solar;
			let solardate = new SHDate(shyear);
			assert.equal(solardate.isLeap(shyear), Leap);
		});
	});

	it("correctly gregorian to solar", () => {
		UntilConvertDate.gregorianAndSolar.forEach(({ gregorian, solar }) => {
			const [gyear, gmonth, gdate] = gregorian;
			let gregoriandate = new Date(gyear, gmonth, gdate);
			let solardate = new SHDate(gregoriandate.getTime());
			const arrsolardate = [
				solardate.getFullYear(),
				solardate.getMonth(),
				solardate.getDate()
			];
			assert.deepEqual(arrsolardate, solar);
		});
	});

	it("correctly solar to gregorian", () => {
		UntilConvertDate.solarAndGregorian.forEach(({ solar, gregorian }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
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
	it("correctly dow", () => {
		UntilDate.solarDate.forEach(({ solar, Dow }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			assert.equal(solardate.getDay(), Dow);
		});
	});

	it("correctly woy", () => {
		UntilDate.solarDate.forEach(({ solar, Woy }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [[iws, iys]] = solardate.format("Woy");
			assert.deepEqual([parseInt(iws), parseInt(iys)], Woy);
		});
	});

	it("correctly wiy", () => {
		UntilDate.solarDate.forEach(({ solar, Wiy }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [Wiys] = solardate.format("Wiy");
			assert.equal(parseInt(Wiys), Wiy);
		});
	});
});

describe("year and day", () => {
	it("correctly diy", () => {
		UntilDate.solarDate.forEach(({ solar, Diy }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [Diys] = solardate.format("Diy");
			assert.equal(parseInt(Diys), Diy);
		});
	});

	it("correctly doy", () => {
		UntilDate.solarDate.forEach(({ solar, Doy }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [Doys] = solardate.format("Doy");
			assert.equal(parseInt(Doys), Doy);
		});
	});

	it("correctly dim", () => {
		UntilDate.solarDate.forEach(({ solar, Dim }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [Dims] = solardate.format("Dim");
			assert.equal(parseInt(Dims), Dim);
		});
	});
});
