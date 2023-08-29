import SHDate from "../src/base";

const tzoffset: number = new Date().getTimezoneOffset() * 60 * 1000;

console.log("now:" + new SHDate().toString());

const liter = "-";
const date = "1200W01-1";
const time = "";
const shstring = `${date}${time}`;
//const [year, month, day] = date.split(liter);

let shdat = new SHDate(shstring);
console.log("SHDate", shstring, shdat.toString(), shdat.getTime());

console.log(`\n`);

let gtime = new Date(shdat.getTime());

const gstring = `${gtime.getFullYear()}${liter}${
	gtime.getMonth() + 1
}${liter}${gtime.getDate()}${time}`;
let gdat = new Date(gstring);
console.log("Date", gstring, gdat.toString(), gdat.getTime());

console.log(`\n`);

const unixTimeZero = new Date("1841-03-21");
const javaScriptRelease = new SHDate(date);

console.log(unixTimeZero);
// Expected output: 0

console.log(
	javaScriptRelease.format("woy"),
	javaScriptRelease.getTime(),
	javaScriptRelease.toString()
);
// Expected output: 818035920000
