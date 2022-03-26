import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilWord from "./Until-Word.js";
import SHDate from "../src/index.js";
import SHWord from "../src/Word.js";
const date = new SHDate();

describe("word", () => {
	it("correctly dsn and dfn", () => {
		UntilWord.solarWord.forEach(({ solar, dsn, dfn }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [dsns, dfns] = solardate.format("dsn=dfn");
			assert.equal(dsns, dsn);
			assert.equal(dfns, dfn);
		});
	});

	it("correctly esn and efn", () => {
		UntilWord.solarWord.forEach(({ solar, esn, efn }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [esns, efns] = solardate.format("esn=efn");
			assert.equal(esns, esn);
			assert.equal(efns, efn);
		});
	});

	it("correctly msn and mfn", () => {
		UntilWord.solarWord.forEach(({ solar, msn, mfn }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [msns, mfns] = solardate.format("msn=mfn");
			assert.equal(msns, msn);
			assert.equal(mfns, mfn);
		});
	});

	it("correctly asn", () => {
		UntilWord.solarWord.forEach(({ solar, asn }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [asns] = solardate.format("asn");
			assert.equal(asns, asn);
		});
	});

	it("correctly csn", () => {
		UntilWord.solarWord.forEach(({ solar, csn }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [csns] = solardate.format("csn");
			assert.equal(csns, csn);
		});
	});

	it("correctly ssn", () => {
		UntilWord.solarWord.forEach(({ solar, ssn }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [ssns] = solardate.format("ssn");
			assert.equal(ssns, ssn);
		});
	});

	it("correctly osn", () => {
		UntilWord.solarWord.forEach(({ solar, osn }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [osns] = solardate.format("osn");
			assert.equal(osns, osn);
		});
	});

	it("correctly sun", () => {
		UntilWord.solarWord.forEach(({ solar, sun }) => {
			const [shyear, shmonth, shdate] = solar;
			let solardate = new SHDate(shyear, shmonth, shdate);
			const [suns] = solardate.format("sun");
			assert.equal(suns, sun);
		});
	});
});
