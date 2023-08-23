import SHDate from "../src/base";

console.log("now:" + new SHDate().toString());

const liter = "-";
const date = `1372${liter}04${liter}05`;
const time = " 10:20:30 GMT+01";
const shstring = `${date}${time}`;
//const [year, month, day] = date.split(liter);

let shdat = new SHDate(shstring);
console.log("SHDate", shstring, shdat.toString(), shdat.getTime());

console.log(`\n`);

const gtime = new Date(shdat.getTime());

const gstring = `${gtime.getFullYear()}${liter}${gtime.getMonth()}${liter}${gtime.getDate()}${time}`;
let gdat = new Date(gstring);
console.log("Date", gstring, gdat.toString(), gdat.getTime());
