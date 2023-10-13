/**
 * node ./dist/tests/mjs/dev.mjs
 */
import SHDate from "../../mjs/base.js";

console.log("now:" + new SHDate().toString());
JSON.stringify("now:" + new SHDate().toString());
