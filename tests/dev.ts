import SHDate from "../src/index.js";

let date = new Date();
let shdate = new SHDate(date.getTime());

console.log(date.toString(), shdate.toString());
