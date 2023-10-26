import { assert, expect } from "chai";
import { it, describe } from "mocha";

import { exec } from "node:child_process";
import SHDate from "../src/base.js";
import words from "../src/word.js";
import { toNumber } from "../src/tools.js";
import en_US from "../src/languages/i18n/en_US.js";
import ckb_IR from "../src/languages/l10n/ckb_IR.js";
import * as fs from "fs";

const dataYear = 1402;

async function execPromise(command = "") {
	return await new Promise(function (resolve, reject) {
		exec(command, (error, stdout, stderr) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(stdout.trim());
		});
	});
}

// cjs
const wordFileCJS = fs
	.readFileSync("./dist/tests/cjs/test.log", "utf-8")
	.trim();
// execPromise("(node dist/tests/cjs/test.cjs)")
// 	.then((rs) => {
// 		data.cjs = rs;
// 	})
// 	.catch(function (err) {
// 		console.error(err.message);
// 	});

// mjs
const wordFileMJS = fs
	.readFileSync("./dist/tests/mjs/test.log", "utf-8")
	.trim();
// execPromise("(node dist/tests/mjs/test.mjs)")
// 	.then((rs) => {
// 		data.mjs = rs;
// 	})
// 	.catch(function (err) {
// 		console.error(err.message);
// 	});

// pkgs
const wordFilePKGS = fs
	.readFileSync("./dist/tests/pkgs/test.log", "utf-8")
	.trim();
// execPromise("(node dist/tests/pkgs/test.mjs)")
// 	.then((rs) => {
// 		data.pkg = rs;
// 	})
// 	.catch(function (err) {
// 		console.error(err.message);
// 	});

describe("test CommonJS (CJS) && ES Modules (ESM) && exports pkgs", () => {
	it("run CJS", () => {
		assert.equal(wordFileCJS, new SHDate(dataYear).toDateString());
	});
	it("run ES Modules (ESM)", () => {
		assert.equal(wordFileMJS, new SHDate(dataYear).toDateString());
	});
	it("run exports pkgs", () => {
		assert.equal(
			wordFilePKGS,
			`${SHDate.VERSION} ${words.word_language}`
			// toNumber(123),
			// en_US.LANGUAGE,
			// ckb_IR.LANGUAGE
		);
	});
});
