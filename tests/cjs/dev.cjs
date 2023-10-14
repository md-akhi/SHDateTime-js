/**
 * node ./dist/tests/cjs/dev.cjs
 */
const { argv } = require("node:process");
const SHDate = require("../../cjs/base.js").default;

// print process.argv
argv.forEach((val, index) => {
	if (index == 2) console.log(new SHDate(val).toDateString());
});
