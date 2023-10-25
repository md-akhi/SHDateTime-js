import { assert, expect } from "chai";
import { it, describe } from "mocha";

import util from "node:util";
import { exec } from "node:child_process";
import SHDate from "../src/base.js";
import words from "../src/word.js";
import { toNumber } from "../src/tools.js";
import en_US from "../src/languages/i18n/en_US.js";
import ckb_IR from "../src/languages/l10n/ckb_IR.js";

const dataYear = 1402;

async function callExec(cmd = "") {
	return await util.promisify(exec)(cmd);
}

function execPromise(command = "") {
	return new Promise(function (resolve, reject) {
		exec(command, (error, stdout, stderr) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(stdout.trim());
		});
	});
}
var data: any = { cjs: "", mjs: "", pkg: [] };
// cjs
execPromise("(node dist/tests/cjs/test.cjs)")
	.then((rs) => {
		data.cjs = rs;
	})
	.catch(function (err) {
		console.error(err.message);
	});

// mjs
execPromise("(node dist/tests/mjs/test.mjs)")
	.then((rs) => {
		data.mjs = rs;
	})
	.catch(function (err) {
		console.error(err.message);
	});

// pkgs
execPromise("(node dist/tests/pkgs/test.js)")
	.then((rs) => {
		data.pkg = rs;
	})
	.catch(function (err) {
		console.error(err.message);
	});

describe("test CommonJS (CJS) && ES Modules (ESM) && exports pkgs", () => {
	it("run CJS", () => {
		assert.equal(data.cjs, new SHDate(dataYear).toDateString());
	});
	it("run ES Modules (ESM)", () => {
		assert.equal(data.mjs, new SHDate(dataYear).toDateString());
	});
	it("run exports pkgs", () => {
		assert.equal(
			data.pkg,
			`${SHDate.VERSION} ${words.word_language}`
			// toNumber(123),
			// en_US.LANGUAGE,
			// ckb_IR.LANGUAGE
		);
	});
});
