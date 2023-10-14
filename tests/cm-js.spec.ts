import { assert, expect } from "chai";
import { it, describe } from "mocha";

import SHDate from "../src/base.js";
import { exec } from "node:child_process";

describe("run cjs & mjs", () => {
	it("run cjs", () => {
		exec("node dist/tests/cjs/dev.cjs", (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			// console.log(`stdout: ${stdout}`);
			assert.equal(stdout.trim(), new SHDate(1402).toDateString());
			// console.error(`stderr: ${stderr}`);
		});
	});

	it("run mjs", () => {
		exec("node dist/tests/mjs/dev.mjs", (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			// console.log(`stdout: ${stdout}`);
			assert.equal(stdout.trim(), new SHDate(1402).toDateString());
			// console.error(`stderr: ${stderr}`);
		});
	});
});
