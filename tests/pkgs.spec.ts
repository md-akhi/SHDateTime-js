import { assert, expect } from "chai";
import { it, describe } from "mocha";

import { exec } from "node:child_process";
import SHDate from "../src/base.js";
import words from "../src/word.js";
import { toNumber } from "../src/tools.js";
import fa_IR from "../src/languages/i18n/fa_IR";
import ckb_IR from "../src/languages/l10n/ckb_IR";

const dataYear = 1402;

var data: any = {
	CJS: "",
	MJS: "",
	PKGS: []
};

describe("test CommonJS (CJS) && ES Modules (ESM) && exports pkgs", () => {
	before(function (done) {
		exec(`(node dist/tests/mjs/test.mjs)`, function (error, stdout, stderr) {
			if (error) done(error); // Handle errors.
			data.MJS = stdout.trim();
			// console.log(`stdout: ${stdout}`);
			// console.error(`stderr: ${stderr}`);
		});

		exec(`(node dist/tests/pkgs/test.js)`, function (error, stdout, stderr) {
			if (error) done(error); // Handle errors.
			data.PKGS = stdout.trim().split(",");
			// console.log(`stdout: ${stdout}`);
			// console.error(`stderr: ${stderr}`);
		});
		done();
	});

	it("run CJS", () => {
		exec(`(node dist/tests/cjs/test.cjs)`, function (error, stdout, stderr) {
			// if (error) done(error); // Handle errors.
			data.CJS = stdout.trim();
			// console.log(`stdout: ${stdout}`);
			// console.error(`stderr: ${stderr}`);
		});
		assert.equal(data.CJS, new SHDate(dataYear).toDateString());
	});
	it("run ES Modules (ESM)", () => {
		assert.equal(data.MJS, new SHDate(dataYear).toDateString());
	});
	it("run exports pkgs", () => {
		console.log(data);
		assert.deepEqual(
			data.PKGS,
			SHDate.VERSION,
			words.word_language
			// toNumber(123),
			// fa_IR.LANGUAGE,
			// ckb_IR.LANGUAGE
		);
	});
});
