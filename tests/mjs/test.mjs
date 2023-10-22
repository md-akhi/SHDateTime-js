/**
 * node ./dist/tests/mjs/dev.mjs
 */
import { argv } from "node:process";
import shdate from "shdate";

// print process.argv
argv.forEach((val, index) => {
	if (index == 2) console.log(new SHDate(val).toDateString());
});
