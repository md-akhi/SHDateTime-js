import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilDate from "./Until-Date.js";
import SHDate from "../src/base.js";

describe("word", () => {
	it("correctly dsn and dfn", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [dsn, dfn] = date.format("dsn=dfn");
			assert.equal(dsn, sdata.dsn);
			assert.equal(dfn, sdata.dfn);
		});
	});

	it("correctly esn and efn", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [esn, efn] = date.format("esn=efn");
			assert.equal(esn, sdata.esn);
			assert.equal(efn, sdata.efn);
		});
	});

	it("correctly msn and mfn", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [msn, mfn] = date.format("msn=mfn");
			assert.equal(msn, sdata.msn);
			assert.equal(mfn, sdata.mfn);
		});
	});

	it("correctly asn", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [asn] = date.format("asn");
			assert.equal(asn, sdata.asn);
		});
	});

	it("correctly csn", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [csn] = date.format("csn");
			assert.equal(csn, sdata.csn);
		});
	});

	it("correctly ssn", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [ssn] = date.format("ssn");
			assert.equal(ssn, sdata.ssn);
		});
	});

	it("correctly osn", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [osn] = date.format("osn");
			assert.equal(osn, sdata.osn);
		});
	});

	it("correctly sun", () => {
		UntilDate.solarDate.forEach(({ sdata }) => {
			const [year, month, day] = sdata.solar;
			let date = new SHDate(year, month, day);
			const [sun] = date.format("sun");
			assert.equal(sun, sdata.sun);
		});
	});
});
