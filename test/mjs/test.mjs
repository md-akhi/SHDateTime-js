/**
 * node ./dist/test/mjs/dev.mjs
 */
import { argv } from "node:process";
import SHDate from "shdate";

console.log(new SHDate(1402).toDateString());

// print process.argv
// argv.forEach((val, index) => {
// 	if (index == 2) console.log(new SHDate(val).toDateString());
// });
