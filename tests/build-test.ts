import SHDate from "../src/base";

let shdate = new SHDate();
function padstring(str: any, pad: number = 2) {
	return `${str}`.padStart(pad, "0");
}
function strtoint(str: string | number) {
	return (str as any) * 1;
}

[0, 1, 2, 11, 12, 13, 23, 24, 25].forEach((H24) => {
	[0, 1, 2, 20, 59, 60, 61].forEach((min) => {
		[0, 1, 2, 20, 59, 60, 61].forEach((sec) => {
			[0, 1, 2, 300, 500, 998, 999, 1000, 1001].forEach((ms) => {
				console.log(
					`{
						time:[${H24},${min},${sec},${ms}],
						correction:[${shdate.timeCorrection(H24, min, sec, ms)}],
						check24:${SHDate.checkTime(H24, min, sec, ms)},
						check12:${SHDate.checkTime(H24, min, sec, ms, true)}
				},`
				);
			});
		});
	});
});

console.log(`\\**************** split **************** `);

[0, 1, 2, 1200, 1390, 1405, 1699, 1700, 1701].forEach((year) => {
	[-1, 0, 1, 6, 11, 12].forEach((month) => {
		[0, 1, 2, 15, 29, 30, 31, 32].forEach((day) => {
			console.log(
				`{
					date:[${year},${month},${day}],
					correction:[${shdate.dateCorrection(year, month, day)}],
					check:${shdate.checkDate(year, month, day)}
			},`
			);
		});
	});
});

console.log(`\\**************** split **************** `);

[0, 1, 2, 1200, 1390, 1405, 1699, 1700, 1701].forEach((year) => {
	[0, 1, 2, 20, 51, 52, 53, 54].forEach((week) => {
		[0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((day) => {
			console.log(
				`{
					week:[${year},${week},${day}],
					correction:[${shdate.weekCorrection(year, week, day)}],
					check:${shdate.checkWeek(year, week, day)}
				},`
			);
		});
	});
});
