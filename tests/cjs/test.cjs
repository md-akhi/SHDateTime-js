/**
 * node ./dist/tests/cjs/dev.cjs
 */
const { argv } = require("node:process");
const SHDate = require("shdate").default;

console.log(new SHDate(1402).toDateString());

// print process.argv
// argv.forEach((val, index) => {
// 	if (index == 2) console.log(new SHDate(val).toDateString());
// });
