import SHDate from "../src/base";

const tzoffset: number = new Date().getTimezoneOffset() * 60 * 1000;

console.log("now:" + new SHDate().toString());

const string = `1320-01-01 00:00:00`;
//const [year, month, day] = date.split(liter);

let sdate = new SHDate(-4681769144000);
let gdate = new Date(sdate.getTime());

console.log("SHDate", string, sdate.toString(), sdate.getTime());

const gstring = `${gdate.getFullYear()}-${
	gdate.getMonth() + 1
}-${gdate.getDate()}`;

console.log("Date", gstring, gdate.toString(), gdate.getTime());

console.log(`\n`);

const ggdate = new Date(sdate.getTime());
const ssdate = new SHDate(sdate);

console.log(ggdate.toString());
// Expected output: 0

const [[iw, iy]] = sdate.format("woy");
console.log(ssdate.toString(), ssdate.setWeek(iy, iw, ssdate.getDay()));
// Expected output: 818035920000
