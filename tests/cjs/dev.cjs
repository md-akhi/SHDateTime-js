/**
 * node ./dist/tests/cjs/dev.cjs
 */
const SHDate = require("../../cjs/base.js").default;

console.log("now:" + new SHDate().toString());
JSON.stringify("now:" + new SHDate().toString());
