import { assert, expect } from "chai";
import { it, describe } from "mocha";

import { exec } from "node:child_process";
import SHDate from "../src/base.js";
import words from "../src/word.js";
import { toNumber } from "../src/tools.js";
import fa_IR from "../src/languages/i18n/fa_IR";
import ckb_IR from "../src/languages/l10n/ckb_IR";

const dataYear = 1402;

describe("test CommonJS (CJS)", () => {
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

describe("test ES Modules (ESM)", () => {
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

describe("test exports pkgs", () => {
	let dataPKGS: any;

	before(function (done) {
		exec(
			`node dist/tests/pkgs/test.js ${dataYear}`,
			function (error, stdout, stderr) {
				if (error) done(error); // Handle errors.
				dataPKGS = stdout.trim();
				done();
				// console.log(`stdout: ${stdout}`);
				// console.error(`stderr: ${stderr}`);
			}
		);
	});

	it("run pkgs", () => {
		assert.deepEqual(dataPKGS, [
			SHDate.VERSION,
			words.word_language,
			toNumber,
			fa_IR.LANGUAGE,
			ckb_IR.LANGUAGE
		]);
	});
});
