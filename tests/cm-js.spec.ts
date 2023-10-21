import { assert, expect } from "chai";
import { it, describe } from "mocha";

import SHDate from "../src/base.js";
import { exec } from "node:child_process";

const dataYear = 1402;

describe("CommonJS (CJS)", () => {
	let dataCJS: any;

	before(function (done) {
		exec(
			`node dist/tests/cjs/dev.cjs ${dataYear}`,
			function (error, stdout, stderr) {
				if (error) done(error); // Handle errors.
				dataCJS = stdout.trim();
				done();
				// console.log(`stdout: ${stdout}`);
				// console.error(`stderr: ${stderr}`);
			}
		);
	});

	it("run CJS", () => {
		assert.equal(dataCJS, new SHDate(dataYear).toDateString());
	});
});

describe("ES Modules (ESM)", () => {
	let dataMJS: any;

	before(function (done) {
		exec(
			`node dist/tests/mjs/dev.mjs ${dataYear}`,
			function (error, stdout, stderr) {
				if (error) done(error); // Handle errors.
				dataMJS = stdout.trim();
				done();
				// console.log(`stdout: ${stdout}`);
				// console.error(`stderr: ${stderr}`);
			}
		);
	});

	it("run ESM", () => {
		assert.equal(dataMJS, new SHDate(dataYear).toDateString());
	});
});
