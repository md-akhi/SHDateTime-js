import { assert, expect } from "chai";
import { it, describe } from "mocha";

import { solarDate } from "./Until-Date.js";
import SHDate from "../src/base.js";

const merge = (target: any, source: any) => {
	// Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
	for (const key of Object.keys(source)) {
		if (source[key] instanceof Object)
			Object.assign(source[key], merge(target[key], source[key]));
	}
	// Join `target` and modified `source`
	Object.assign(target || {}, source);
	return target;
};
//const UntilDate = merge(UntilDateString.DateString, UntilDateDate.solarDate);
// console.log(UntilDate);
const test = (isarray = false, ...data: any) => {
	if (!isarray) console.log(data);
	else if (JSON.stringify(data[0]) !== JSON.stringify(data[1]))
		console.log(data);
};

describe("String", () => {
	it("correctly Date Day Of Year YYYY.doy", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const sdate = new SHDate(sdatastring.DateDoy);
			const doy = sdate.getDayOfYear();
			const year = sdate.getFullYear();
			assert.equal(year, sdata.solar[0]);
			assert.equal(doy, sdata.Doy);
		});
	});

	it("correctly Date Week Of Year YYYY-Ww-D", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const sdate = new SHDate(sdatastring.DateWoy);
			const woy = sdate.getWeekOfYear();
			const year = sdate.getFullYear();
			const dow = sdate.getDay();
			assert.deepEqual(woy, sdata.Woy);
			assert.equal(year, sdata.solar[0]);
			assert.equal(dow, sdata.Dow);
		});
	});

	it("correctly Date YYYY-MM-DD HH:II:SS", () => {
		solarDate.forEach(({ sdata, sdate, sdatastring }: any) => {
			const [
				UntilDateYears,
				UntilDateMonths,
				UntilDateDays,
				UntilDateHours,
				UntilDateMinutes,
				UntilDateSeconds
			] = sdate;
			const date = new SHDate(sdatastring.DateTime);
			const years = date.getFullYear();
			const months = date.getMonth() + 1;
			const days = date.getDate();
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const seconds = date.getSeconds();
			assert.deepEqual(
				[years, months, days, hours, minutes, seconds],
				[
					UntilDateYears,
					UntilDateMonths,
					UntilDateDays,
					UntilDateHours,
					UntilDateMinutes,
					UntilDateSeconds
				]
			);
		});
	});

	it("correctly Date YYYY/MM/DD ", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const date = new SHDate(sdatastring.DateWithSlash);
			const years = date.getFullYear();
			const months = date.getMonth();
			const days = date.getDate();
			assert.deepEqual([years, months, days], sdata.solar);
		});
	});

	it("correctly Date YYYY ", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const date = new SHDate(sdatastring.DateYear);
			const years = date.getFullYear();
			assert.equal(years, sdata.solar[0]);
		});
	});

	it("correctly Date YYYYMMDD ", () => {
		solarDate.forEach(({ sdata, sdate, sdatastring }: any) => {
			const [UntilDateYears, UntilDateMonths, UntilDateDays] = sdate;
			const date = new SHDate(sdatastring.DateWithOutSlash);
			const years = date.getFullYear();
			const months = date.getMonth() + 1;
			const days = date.getDate();
			assert.deepEqual(
				[years, months, days],
				[UntilDateYears, UntilDateMonths, UntilDateDays]
			);
		});
	});

	it("correctly Date Abbr YYYY[.-]M ", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const date = new SHDate(sdatastring.DateYearMonth);
			const years = date.getFullYear();
			const months = date.getMonth();
			const days = date.getDate();
			if (sdata.solar[2] == 1) {
				assert.deepEqual([years, months, days], sdata.solar);
			} else {
				assert.notDeepEqual([years, months, days], sdata.solar);
			}
		});
	});

	it("correctly Date Abbr M ", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const date = new SHDate(sdatastring.DateMonth);
			const months = date.getMonth();
			assert.equal(months, sdata.solar[1]);
		});
	});

	it("correctly Date Abbr DD, M YYYY", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const date = new SHDate(sdatastring.DateAber);
			const years = date.getFullYear();
			const months = date.getMonth();
			const days = date.getDate();
			// test(false, sdata.DateAber, [years, months, days]);
			assert.deepEqual([years, months, days], sdata.solar);
		});
	});

	it("correctly Date Abbr DayName , DD M YYYY", () => {
		solarDate.forEach(({ sdata, sdatastring }: any) => {
			const date = new SHDate(sdatastring.DateAberWithDate);
			const years = date.getFullYear();
			const months = date.getMonth();
			const days = date.getDate();
			assert.deepEqual([years, months, days], sdata.solar);
		});
	});
});
