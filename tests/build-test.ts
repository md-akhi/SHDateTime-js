import SHDate from "../src/base";

import { checkDate, checkTime, checkWeek } from "./Until-Check.js";
let shdate = new SHDate();
function padstring(str: any, pad: number = 2) {
	return `${str}`.padStart(pad, "0");
}
function strtoint(str: string | number) {
	return (str as any) * 1;
}

checkTime.forEach(({ time, check24 }) => {
	const [H24, min, sec, ms] = time;
	console.log(
		`{
						time:[${H24},${min},${sec},${ms}],
						correction:[${shdate.timeCorrection(H24, min, sec, ms)}],
						check:${check24}
				},`
	);
});

checkDate.forEach(({ date, check }) => {
	const [year, month, day] = date;
	console.log(
		`{
					date:[${year},${month},${day}],
					correction:[${shdate.dateCorrection(year, month, day)}],
					check:${check}
			},`
	);
});

checkWeek.forEach(({ week, check }) => {
	const [year, wk, day] = week;
	console.log(
		`{
					week:[${year},${wk},${day}],
					correction:[${shdate.weekCorrection(year, wk, day)}],
					check:${check}
				},`
	);
});
