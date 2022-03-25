import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as Until from "./Until.js";
import SHDate from "../src/index.js";
const date = new SHDate();

describe("now()", () => {
	it("should equal now", () => {
		assert.equal(SHDate.now(), Date.now());
	});
});

describe("Convert Date Gregorian() And Solar()", () => {
	it("correctly leap", () => {
		Until.leapYear.forEach(({ year, expected }) => {
			assert.equal(date.isLeap(year), expected);
		});
	});

	it("correctly gregorian to solar", () => {
		Until.gregorianAndSolar.forEach(({ gregorian, solar }) => {
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
		Until.solarAndGregorian.forEach(({ solar, gregorian }) => {
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
		Until.solarDow.forEach(({ solar, dow }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			assert.equal(solardate.getDay(), dow);
		});
	});

	it("correctly woy", () => {});

	it("correctly wiy", () => {});
});

describe("year and day", () => {
	it("correctly diy", () => {});

	it("correctly doy", () => {});
});
