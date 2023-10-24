import { assert, expect } from "chai";
import { it, describe } from "mocha";

import { exec } from "node:child_process";
import SHDate from "../src/base.js";
import words from "../src/word.js";
import { toNumber } from "../src/tools.js";
import fa_IR from "../src/languages/i18n/fa_IR";
import ckb_IR from "../src/languages/l10n/ckb_IR";
import { setTimeout } from "node:timers";

const dataYear = 1402;

describe("test CommonJS (CJS) && ES Modules (ESM) && exports pkgs", () => {
	let dataCJS: any;
	let dataMJS: any;
	let dataPKGS: any;

	before(function (done) {
		exec(
			`(node dist/tests/cjs/test.cjs ${dataYear})`,
			function (error, stdout, stderr) {
				if (error) done(error); // Handle errors.
				setTimeout("test", 5000);
				dataCJS = stdout.trim();
				// console.log(`stdout: ${stdout}`);
				// console.error(`stderr: ${stderr}`);
			}
		);

		exec(
			`(node dist/tests/mjs/test.mjs ${dataYear})`,
			function (error, stdout, stderr) {
				if (error) done(error); // Handle errors.
				dataMJS = stdout.trim();
				// console.log(`stdout: ${stdout}`);
				// console.error(`stderr: ${stderr}`);
			}
		);

		exec(
			`(node dist/tests/pkgs/test.js ${dataYear})`,
			function (error, stdout, stderr) {
				if (error) done(error); // Handle errors.
				dataPKGS = stdout.trim();
				// console.log(`stdout: ${stdout}`);
				// console.error(`stderr: ${stderr}`);
			}
		);
		done();
	});

	it("run CJS", () => {
		assert.equal(dataCJS, new SHDate(dataYear).toDateString());
	});
	it("run ES Modules (ESM)", () => {
		assert.equal(dataMJS, new SHDate(dataYear).toDateString());
	});
	it("run exports pkgs", () => {
		assert.deepEqual(dataPKGS, [
			SHDate.VERSION,
			words.word_language,
			toNumber,
			fa_IR.LANGUAGE,
			ckb_IR.LANGUAGE
		]);
	});
});
