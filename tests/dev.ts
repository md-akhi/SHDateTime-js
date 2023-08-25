import SHDate from "../src/base";

console.log("now:" + new SHDate().toString());

const liter = "-";
const date = `01 Far 1200`;
const time = "";
const shstring = `${date}${time}`;
//const [year, month, day] = date.split(liter);

let shdat = new SHDate(shstring);
console.log("SHDate", shstring, shdat.toString(), shdat.getTime());

console.log(`\n`);

const gtime = new Date(shdat.getTime());

const gstring = `${gtime.getFullYear()}${liter}${
	gtime.getMonth() + 1
}${liter}${gtime.getDate()}${time}`;
let gdat = new Date(gstring);
console.log("Date", gstring, gdat.toString(), gdat.getTime());

console.log(`\n`);
