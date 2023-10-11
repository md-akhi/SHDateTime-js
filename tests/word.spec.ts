import { assert, expect } from "chai";
import { it, describe } from "mocha";

import { solarDate } from "./Until-Date.js";
import SHDate from "../src/base.js";

describe("word", () => {
	it("correctly dsn and dfn", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [dsn, dfn] = date.format("dsn=dfn");
			assert.equal(dsn, sdata.dsn);
			assert.equal(dfn, sdata.dfn);
		});
	});

	it("correctly esn and efn", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [esn, efn] = date.format("esn=efn");
			assert.equal(esn, sdata.esn);
			assert.equal(efn, sdata.efn);
		});
	});

	it("correctly msn and mfn", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [msn, mfn] = date.format("msn=mfn");
			assert.equal(msn, sdata.msn);
			assert.equal(mfn, sdata.mfn);
		});
	});

	it("correctly asn", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [asn] = date.format("asn");
			assert.equal(asn, sdata.asn);
		});
	});

	it("correctly csn", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [csn] = date.format("csn");
			assert.equal(csn, sdata.csn);
		});
	});

	it("correctly ssn", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [ssn] = date.format("ssn");
			assert.equal(ssn, sdata.ssn);
		});
	});

	it("correctly osn", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [osn] = date.format("osn");
			assert.equal(osn, sdata.osn);
		});
	});

	it("correctly sun", () => {
		solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [sun] = date.format("sun");
			assert.equal(sun, sdata.sun);
		});
	});
});
