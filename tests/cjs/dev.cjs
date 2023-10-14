/**
 * node ./dist/tests/cjs/dev.cjs
 */
const SHDate = require("../../cjs/base.js").default;

console.log(new SHDate(1402).toDateString());
// exports.default = exports.testCJS = new SHDate(1402).toString();
