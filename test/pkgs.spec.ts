import { assert, expect } from "chai";
import { it, describe } from "mocha";

import SHDate from "../src/base.js";
import words from "../src/word.js";
import { toNumber } from "../src/tools.js";
import fa_IR from "../src/languages/i18n/fa_IR.js";
import ckb_IR from "../src/languages/l10n/ckb_IR.js";
import * as fs from "node:fs";
const dataYear = 1402;

// cjs
const wordFileCJS = fs.readFileSync("./dist/test/cjs/test.log", "utf-8").trim();

// mjs
const wordFileMJS = fs.readFileSync("./dist/test/mjs/test.log", "utf-8").trim();

// pkgs
const wordFilePKGS = fs
	.readFileSync("./dist/test/pkgs/test.log", "utf-8")
	.trim();

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
			`${SHDate.VERSION} ${words.word_language} ${toNumber("١٢٣", "en")} ${
				fa_IR.LANGUAGE
			} ${ckb_IR.LANGUAGE}`
		);
	});
});
