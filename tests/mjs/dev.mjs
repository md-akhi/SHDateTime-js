/**
 * node ./dist/tests/mjs/dev.mjs
 */
import { argv } from "node:process";
import SHDate from "../../mjs/base.js";

// print process.argv
argv.forEach((val, index) => {
	if (index == 2) console.log(new SHDate(val).toDateString());
});
