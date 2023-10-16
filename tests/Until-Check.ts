/*

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

*/

export const checkTime = [
	{
		time: [0, 0, 0, 0],
		correction: [0, 0, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 0, 1],
		correction: [0, 0, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 0, 2],
		correction: [0, 0, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 0, 300],
		correction: [0, 0, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 0, 500],
		correction: [0, 0, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 0, 998],
		correction: [0, 0, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 0, 999],
		correction: [0, 0, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 0, 1000],
		correction: [0, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 0, 1001],
		correction: [0, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 1, 0],
		correction: [0, 0, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 1, 1],
		correction: [0, 0, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 1, 2],
		correction: [0, 0, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 1, 300],
		correction: [0, 0, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 1, 500],
		correction: [0, 0, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 1, 998],
		correction: [0, 0, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 1, 999],
		correction: [0, 0, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 1, 1000],
		correction: [0, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 1, 1001],
		correction: [0, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 2, 0],
		correction: [0, 0, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 2, 1],
		correction: [0, 0, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 2, 2],
		correction: [0, 0, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 2, 300],
		correction: [0, 0, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 2, 500],
		correction: [0, 0, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 2, 998],
		correction: [0, 0, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 2, 999],
		correction: [0, 0, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 2, 1000],
		correction: [0, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 2, 1001],
		correction: [0, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 20, 0],
		correction: [0, 0, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 20, 1],
		correction: [0, 0, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 20, 2],
		correction: [0, 0, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 20, 300],
		correction: [0, 0, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 20, 500],
		correction: [0, 0, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 20, 998],
		correction: [0, 0, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 20, 999],
		correction: [0, 0, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 20, 1000],
		correction: [0, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 20, 1001],
		correction: [0, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 59, 0],
		correction: [0, 0, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 59, 1],
		correction: [0, 0, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 59, 2],
		correction: [0, 0, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 59, 300],
		correction: [0, 0, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 59, 500],
		correction: [0, 0, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 59, 998],
		correction: [0, 0, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 59, 999],
		correction: [0, 0, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 0, 59, 1000],
		correction: [0, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 59, 1001],
		correction: [0, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 0],
		correction: [0, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 1],
		correction: [0, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 2],
		correction: [0, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 300],
		correction: [0, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 500],
		correction: [0, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 998],
		correction: [0, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 999],
		correction: [0, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 1000],
		correction: [0, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 60, 1001],
		correction: [0, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 0],
		correction: [0, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 1],
		correction: [0, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 2],
		correction: [0, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 300],
		correction: [0, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 500],
		correction: [0, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 998],
		correction: [0, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 999],
		correction: [0, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 1000],
		correction: [0, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 0, 61, 1001],
		correction: [0, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 0, 0],
		correction: [0, 1, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 0, 1],
		correction: [0, 1, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 0, 2],
		correction: [0, 1, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 0, 300],
		correction: [0, 1, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 0, 500],
		correction: [0, 1, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 0, 998],
		correction: [0, 1, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 0, 999],
		correction: [0, 1, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 0, 1000],
		correction: [0, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 0, 1001],
		correction: [0, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 1, 0],
		correction: [0, 1, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 1, 1],
		correction: [0, 1, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 1, 2],
		correction: [0, 1, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 1, 300],
		correction: [0, 1, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 1, 500],
		correction: [0, 1, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 1, 998],
		correction: [0, 1, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 1, 999],
		correction: [0, 1, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 1, 1000],
		correction: [0, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 1, 1001],
		correction: [0, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 2, 0],
		correction: [0, 1, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 2, 1],
		correction: [0, 1, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 2, 2],
		correction: [0, 1, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 2, 300],
		correction: [0, 1, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 2, 500],
		correction: [0, 1, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 2, 998],
		correction: [0, 1, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 2, 999],
		correction: [0, 1, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 2, 1000],
		correction: [0, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 2, 1001],
		correction: [0, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 20, 0],
		correction: [0, 1, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 20, 1],
		correction: [0, 1, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 20, 2],
		correction: [0, 1, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 20, 300],
		correction: [0, 1, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 20, 500],
		correction: [0, 1, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 20, 998],
		correction: [0, 1, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 20, 999],
		correction: [0, 1, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 20, 1000],
		correction: [0, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 20, 1001],
		correction: [0, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 59, 0],
		correction: [0, 1, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 59, 1],
		correction: [0, 1, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 59, 2],
		correction: [0, 1, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 59, 300],
		correction: [0, 1, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 59, 500],
		correction: [0, 1, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 59, 998],
		correction: [0, 1, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 59, 999],
		correction: [0, 1, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 1, 59, 1000],
		correction: [0, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 59, 1001],
		correction: [0, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 0],
		correction: [0, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 1],
		correction: [0, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 2],
		correction: [0, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 300],
		correction: [0, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 500],
		correction: [0, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 998],
		correction: [0, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 999],
		correction: [0, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 1000],
		correction: [0, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 60, 1001],
		correction: [0, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 0],
		correction: [0, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 1],
		correction: [0, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 2],
		correction: [0, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 300],
		correction: [0, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 500],
		correction: [0, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 998],
		correction: [0, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 999],
		correction: [0, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 1000],
		correction: [0, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 1, 61, 1001],
		correction: [0, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 0, 0],
		correction: [0, 2, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 0, 1],
		correction: [0, 2, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 0, 2],
		correction: [0, 2, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 0, 300],
		correction: [0, 2, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 0, 500],
		correction: [0, 2, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 0, 998],
		correction: [0, 2, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 0, 999],
		correction: [0, 2, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 0, 1000],
		correction: [0, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 0, 1001],
		correction: [0, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 1, 0],
		correction: [0, 2, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 1, 1],
		correction: [0, 2, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 1, 2],
		correction: [0, 2, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 1, 300],
		correction: [0, 2, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 1, 500],
		correction: [0, 2, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 1, 998],
		correction: [0, 2, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 1, 999],
		correction: [0, 2, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 1, 1000],
		correction: [0, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 1, 1001],
		correction: [0, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 2, 0],
		correction: [0, 2, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 2, 1],
		correction: [0, 2, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 2, 2],
		correction: [0, 2, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 2, 300],
		correction: [0, 2, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 2, 500],
		correction: [0, 2, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 2, 998],
		correction: [0, 2, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 2, 999],
		correction: [0, 2, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 2, 1000],
		correction: [0, 2, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 2, 1001],
		correction: [0, 2, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 20, 0],
		correction: [0, 2, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 20, 1],
		correction: [0, 2, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 20, 2],
		correction: [0, 2, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 20, 300],
		correction: [0, 2, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 20, 500],
		correction: [0, 2, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 20, 998],
		correction: [0, 2, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 20, 999],
		correction: [0, 2, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 20, 1000],
		correction: [0, 2, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 20, 1001],
		correction: [0, 2, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 59, 0],
		correction: [0, 2, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 59, 1],
		correction: [0, 2, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 59, 2],
		correction: [0, 2, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 59, 300],
		correction: [0, 2, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 59, 500],
		correction: [0, 2, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 59, 998],
		correction: [0, 2, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 59, 999],
		correction: [0, 2, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 2, 59, 1000],
		correction: [0, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 59, 1001],
		correction: [0, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 0],
		correction: [0, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 1],
		correction: [0, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 2],
		correction: [0, 3, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 300],
		correction: [0, 3, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 500],
		correction: [0, 3, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 998],
		correction: [0, 3, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 999],
		correction: [0, 3, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 1000],
		correction: [0, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 60, 1001],
		correction: [0, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 0],
		correction: [0, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 1],
		correction: [0, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 2],
		correction: [0, 3, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 300],
		correction: [0, 3, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 500],
		correction: [0, 3, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 998],
		correction: [0, 3, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 999],
		correction: [0, 3, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 1000],
		correction: [0, 3, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 2, 61, 1001],
		correction: [0, 3, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 0, 0],
		correction: [0, 20, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 0, 1],
		correction: [0, 20, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 0, 2],
		correction: [0, 20, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 0, 300],
		correction: [0, 20, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 0, 500],
		correction: [0, 20, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 0, 998],
		correction: [0, 20, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 0, 999],
		correction: [0, 20, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 0, 1000],
		correction: [0, 20, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 0, 1001],
		correction: [0, 20, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 1, 0],
		correction: [0, 20, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 1, 1],
		correction: [0, 20, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 1, 2],
		correction: [0, 20, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 1, 300],
		correction: [0, 20, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 1, 500],
		correction: [0, 20, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 1, 998],
		correction: [0, 20, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 1, 999],
		correction: [0, 20, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 1, 1000],
		correction: [0, 20, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 1, 1001],
		correction: [0, 20, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 2, 0],
		correction: [0, 20, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 2, 1],
		correction: [0, 20, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 2, 2],
		correction: [0, 20, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 2, 300],
		correction: [0, 20, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 2, 500],
		correction: [0, 20, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 2, 998],
		correction: [0, 20, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 2, 999],
		correction: [0, 20, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 2, 1000],
		correction: [0, 20, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 2, 1001],
		correction: [0, 20, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 20, 0],
		correction: [0, 20, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 20, 1],
		correction: [0, 20, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 20, 2],
		correction: [0, 20, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 20, 300],
		correction: [0, 20, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 20, 500],
		correction: [0, 20, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 20, 998],
		correction: [0, 20, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 20, 999],
		correction: [0, 20, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 20, 1000],
		correction: [0, 20, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 20, 1001],
		correction: [0, 20, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 59, 0],
		correction: [0, 20, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 59, 1],
		correction: [0, 20, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 59, 2],
		correction: [0, 20, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 59, 300],
		correction: [0, 20, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 59, 500],
		correction: [0, 20, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 59, 998],
		correction: [0, 20, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 59, 999],
		correction: [0, 20, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 20, 59, 1000],
		correction: [0, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 59, 1001],
		correction: [0, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 0],
		correction: [0, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 1],
		correction: [0, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 2],
		correction: [0, 21, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 300],
		correction: [0, 21, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 500],
		correction: [0, 21, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 998],
		correction: [0, 21, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 999],
		correction: [0, 21, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 1000],
		correction: [0, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 60, 1001],
		correction: [0, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 0],
		correction: [0, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 1],
		correction: [0, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 2],
		correction: [0, 21, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 300],
		correction: [0, 21, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 500],
		correction: [0, 21, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 998],
		correction: [0, 21, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 999],
		correction: [0, 21, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 1000],
		correction: [0, 21, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 20, 61, 1001],
		correction: [0, 21, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 0, 0],
		correction: [0, 59, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 0, 1],
		correction: [0, 59, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 0, 2],
		correction: [0, 59, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 0, 300],
		correction: [0, 59, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 0, 500],
		correction: [0, 59, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 0, 998],
		correction: [0, 59, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 0, 999],
		correction: [0, 59, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 0, 1000],
		correction: [0, 59, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 0, 1001],
		correction: [0, 59, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 1, 0],
		correction: [0, 59, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 1, 1],
		correction: [0, 59, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 1, 2],
		correction: [0, 59, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 1, 300],
		correction: [0, 59, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 1, 500],
		correction: [0, 59, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 1, 998],
		correction: [0, 59, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 1, 999],
		correction: [0, 59, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 1, 1000],
		correction: [0, 59, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 1, 1001],
		correction: [0, 59, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 2, 0],
		correction: [0, 59, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 2, 1],
		correction: [0, 59, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 2, 2],
		correction: [0, 59, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 2, 300],
		correction: [0, 59, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 2, 500],
		correction: [0, 59, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 2, 998],
		correction: [0, 59, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 2, 999],
		correction: [0, 59, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 2, 1000],
		correction: [0, 59, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 2, 1001],
		correction: [0, 59, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 20, 0],
		correction: [0, 59, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 20, 1],
		correction: [0, 59, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 20, 2],
		correction: [0, 59, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 20, 300],
		correction: [0, 59, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 20, 500],
		correction: [0, 59, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 20, 998],
		correction: [0, 59, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 20, 999],
		correction: [0, 59, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 20, 1000],
		correction: [0, 59, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 20, 1001],
		correction: [0, 59, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 59, 0],
		correction: [0, 59, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 59, 1],
		correction: [0, 59, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 59, 2],
		correction: [0, 59, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 59, 300],
		correction: [0, 59, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 59, 500],
		correction: [0, 59, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 59, 998],
		correction: [0, 59, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 59, 999],
		correction: [0, 59, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [0, 59, 59, 1000],
		correction: [1, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 59, 1001],
		correction: [1, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 0],
		correction: [1, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 1],
		correction: [1, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 2],
		correction: [1, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 300],
		correction: [1, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 500],
		correction: [1, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 998],
		correction: [1, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 999],
		correction: [1, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 1000],
		correction: [1, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 60, 1001],
		correction: [1, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 0],
		correction: [1, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 1],
		correction: [1, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 2],
		correction: [1, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 300],
		correction: [1, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 500],
		correction: [1, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 998],
		correction: [1, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 999],
		correction: [1, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 1000],
		correction: [1, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 59, 61, 1001],
		correction: [1, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 0],
		correction: [1, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 1],
		correction: [1, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 2],
		correction: [1, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 300],
		correction: [1, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 500],
		correction: [1, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 998],
		correction: [1, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 999],
		correction: [1, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 1000],
		correction: [1, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 0, 1001],
		correction: [1, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 0],
		correction: [1, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 1],
		correction: [1, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 2],
		correction: [1, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 300],
		correction: [1, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 500],
		correction: [1, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 998],
		correction: [1, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 999],
		correction: [1, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 1000],
		correction: [1, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 1, 1001],
		correction: [1, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 0],
		correction: [1, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 1],
		correction: [1, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 2],
		correction: [1, 0, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 300],
		correction: [1, 0, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 500],
		correction: [1, 0, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 998],
		correction: [1, 0, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 999],
		correction: [1, 0, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 1000],
		correction: [1, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 2, 1001],
		correction: [1, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 0],
		correction: [1, 0, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 1],
		correction: [1, 0, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 2],
		correction: [1, 0, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 300],
		correction: [1, 0, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 500],
		correction: [1, 0, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 998],
		correction: [1, 0, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 999],
		correction: [1, 0, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 1000],
		correction: [1, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 20, 1001],
		correction: [1, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 0],
		correction: [1, 0, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 1],
		correction: [1, 0, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 2],
		correction: [1, 0, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 300],
		correction: [1, 0, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 500],
		correction: [1, 0, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 998],
		correction: [1, 0, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 999],
		correction: [1, 0, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 1000],
		correction: [1, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 59, 1001],
		correction: [1, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 0],
		correction: [1, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 1],
		correction: [1, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 2],
		correction: [1, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 300],
		correction: [1, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 500],
		correction: [1, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 998],
		correction: [1, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 999],
		correction: [1, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 1000],
		correction: [1, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 60, 1001],
		correction: [1, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 0],
		correction: [1, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 1],
		correction: [1, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 2],
		correction: [1, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 300],
		correction: [1, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 500],
		correction: [1, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 998],
		correction: [1, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 999],
		correction: [1, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 1000],
		correction: [1, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 60, 61, 1001],
		correction: [1, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 0],
		correction: [1, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 1],
		correction: [1, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 2],
		correction: [1, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 300],
		correction: [1, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 500],
		correction: [1, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 998],
		correction: [1, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 999],
		correction: [1, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 1000],
		correction: [1, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 0, 1001],
		correction: [1, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 0],
		correction: [1, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 1],
		correction: [1, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 2],
		correction: [1, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 300],
		correction: [1, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 500],
		correction: [1, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 998],
		correction: [1, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 999],
		correction: [1, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 1000],
		correction: [1, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 1, 1001],
		correction: [1, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 0],
		correction: [1, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 1],
		correction: [1, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 2],
		correction: [1, 1, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 300],
		correction: [1, 1, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 500],
		correction: [1, 1, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 998],
		correction: [1, 1, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 999],
		correction: [1, 1, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 1000],
		correction: [1, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 2, 1001],
		correction: [1, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 0],
		correction: [1, 1, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 1],
		correction: [1, 1, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 2],
		correction: [1, 1, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 300],
		correction: [1, 1, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 500],
		correction: [1, 1, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 998],
		correction: [1, 1, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 999],
		correction: [1, 1, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 1000],
		correction: [1, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 20, 1001],
		correction: [1, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 0],
		correction: [1, 1, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 1],
		correction: [1, 1, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 2],
		correction: [1, 1, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 300],
		correction: [1, 1, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 500],
		correction: [1, 1, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 998],
		correction: [1, 1, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 999],
		correction: [1, 1, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 1000],
		correction: [1, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 59, 1001],
		correction: [1, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 0],
		correction: [1, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 1],
		correction: [1, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 2],
		correction: [1, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 300],
		correction: [1, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 500],
		correction: [1, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 998],
		correction: [1, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 999],
		correction: [1, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 1000],
		correction: [1, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 60, 1001],
		correction: [1, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 0],
		correction: [1, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 1],
		correction: [1, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 2],
		correction: [1, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 300],
		correction: [1, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 500],
		correction: [1, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 998],
		correction: [1, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 999],
		correction: [1, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 1000],
		correction: [1, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [0, 61, 61, 1001],
		correction: [1, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 0, 0],
		correction: [1, 0, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 0, 1],
		correction: [1, 0, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 0, 2],
		correction: [1, 0, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 0, 300],
		correction: [1, 0, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 0, 500],
		correction: [1, 0, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 0, 998],
		correction: [1, 0, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 0, 999],
		correction: [1, 0, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 0, 1000],
		correction: [1, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 0, 1001],
		correction: [1, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 1, 0],
		correction: [1, 0, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 1, 1],
		correction: [1, 0, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 1, 2],
		correction: [1, 0, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 1, 300],
		correction: [1, 0, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 1, 500],
		correction: [1, 0, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 1, 998],
		correction: [1, 0, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 1, 999],
		correction: [1, 0, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 1, 1000],
		correction: [1, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 1, 1001],
		correction: [1, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 2, 0],
		correction: [1, 0, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 2, 1],
		correction: [1, 0, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 2, 2],
		correction: [1, 0, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 2, 300],
		correction: [1, 0, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 2, 500],
		correction: [1, 0, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 2, 998],
		correction: [1, 0, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 2, 999],
		correction: [1, 0, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 2, 1000],
		correction: [1, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 2, 1001],
		correction: [1, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 20, 0],
		correction: [1, 0, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 20, 1],
		correction: [1, 0, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 20, 2],
		correction: [1, 0, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 20, 300],
		correction: [1, 0, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 20, 500],
		correction: [1, 0, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 20, 998],
		correction: [1, 0, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 20, 999],
		correction: [1, 0, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 20, 1000],
		correction: [1, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 20, 1001],
		correction: [1, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 59, 0],
		correction: [1, 0, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 59, 1],
		correction: [1, 0, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 59, 2],
		correction: [1, 0, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 59, 300],
		correction: [1, 0, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 59, 500],
		correction: [1, 0, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 59, 998],
		correction: [1, 0, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 59, 999],
		correction: [1, 0, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 0, 59, 1000],
		correction: [1, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 59, 1001],
		correction: [1, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 0],
		correction: [1, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 1],
		correction: [1, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 2],
		correction: [1, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 300],
		correction: [1, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 500],
		correction: [1, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 998],
		correction: [1, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 999],
		correction: [1, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 1000],
		correction: [1, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 60, 1001],
		correction: [1, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 0],
		correction: [1, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 1],
		correction: [1, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 2],
		correction: [1, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 300],
		correction: [1, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 500],
		correction: [1, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 998],
		correction: [1, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 999],
		correction: [1, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 1000],
		correction: [1, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 0, 61, 1001],
		correction: [1, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 0, 0],
		correction: [1, 1, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 0, 1],
		correction: [1, 1, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 0, 2],
		correction: [1, 1, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 0, 300],
		correction: [1, 1, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 0, 500],
		correction: [1, 1, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 0, 998],
		correction: [1, 1, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 0, 999],
		correction: [1, 1, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 0, 1000],
		correction: [1, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 0, 1001],
		correction: [1, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 1, 0],
		correction: [1, 1, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 1, 1],
		correction: [1, 1, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 1, 2],
		correction: [1, 1, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 1, 300],
		correction: [1, 1, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 1, 500],
		correction: [1, 1, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 1, 998],
		correction: [1, 1, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 1, 999],
		correction: [1, 1, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 1, 1000],
		correction: [1, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 1, 1001],
		correction: [1, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 2, 0],
		correction: [1, 1, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 2, 1],
		correction: [1, 1, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 2, 2],
		correction: [1, 1, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 2, 300],
		correction: [1, 1, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 2, 500],
		correction: [1, 1, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 2, 998],
		correction: [1, 1, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 2, 999],
		correction: [1, 1, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 2, 1000],
		correction: [1, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 2, 1001],
		correction: [1, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 20, 0],
		correction: [1, 1, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 20, 1],
		correction: [1, 1, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 20, 2],
		correction: [1, 1, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 20, 300],
		correction: [1, 1, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 20, 500],
		correction: [1, 1, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 20, 998],
		correction: [1, 1, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 20, 999],
		correction: [1, 1, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 20, 1000],
		correction: [1, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 20, 1001],
		correction: [1, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 59, 0],
		correction: [1, 1, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 59, 1],
		correction: [1, 1, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 59, 2],
		correction: [1, 1, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 59, 300],
		correction: [1, 1, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 59, 500],
		correction: [1, 1, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 59, 998],
		correction: [1, 1, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 59, 999],
		correction: [1, 1, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 1, 59, 1000],
		correction: [1, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 59, 1001],
		correction: [1, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 0],
		correction: [1, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 1],
		correction: [1, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 2],
		correction: [1, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 300],
		correction: [1, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 500],
		correction: [1, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 998],
		correction: [1, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 999],
		correction: [1, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 1000],
		correction: [1, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 60, 1001],
		correction: [1, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 0],
		correction: [1, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 1],
		correction: [1, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 2],
		correction: [1, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 300],
		correction: [1, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 500],
		correction: [1, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 998],
		correction: [1, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 999],
		correction: [1, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 1000],
		correction: [1, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 1, 61, 1001],
		correction: [1, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 0, 0],
		correction: [1, 2, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 0, 1],
		correction: [1, 2, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 0, 2],
		correction: [1, 2, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 0, 300],
		correction: [1, 2, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 0, 500],
		correction: [1, 2, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 0, 998],
		correction: [1, 2, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 0, 999],
		correction: [1, 2, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 0, 1000],
		correction: [1, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 0, 1001],
		correction: [1, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 1, 0],
		correction: [1, 2, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 1, 1],
		correction: [1, 2, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 1, 2],
		correction: [1, 2, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 1, 300],
		correction: [1, 2, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 1, 500],
		correction: [1, 2, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 1, 998],
		correction: [1, 2, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 1, 999],
		correction: [1, 2, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 1, 1000],
		correction: [1, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 1, 1001],
		correction: [1, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 2, 0],
		correction: [1, 2, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 2, 1],
		correction: [1, 2, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 2, 2],
		correction: [1, 2, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 2, 300],
		correction: [1, 2, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 2, 500],
		correction: [1, 2, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 2, 998],
		correction: [1, 2, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 2, 999],
		correction: [1, 2, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 2, 1000],
		correction: [1, 2, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 2, 1001],
		correction: [1, 2, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 20, 0],
		correction: [1, 2, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 20, 1],
		correction: [1, 2, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 20, 2],
		correction: [1, 2, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 20, 300],
		correction: [1, 2, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 20, 500],
		correction: [1, 2, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 20, 998],
		correction: [1, 2, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 20, 999],
		correction: [1, 2, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 20, 1000],
		correction: [1, 2, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 20, 1001],
		correction: [1, 2, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 59, 0],
		correction: [1, 2, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 59, 1],
		correction: [1, 2, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 59, 2],
		correction: [1, 2, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 59, 300],
		correction: [1, 2, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 59, 500],
		correction: [1, 2, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 59, 998],
		correction: [1, 2, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 59, 999],
		correction: [1, 2, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 2, 59, 1000],
		correction: [1, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 59, 1001],
		correction: [1, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 0],
		correction: [1, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 1],
		correction: [1, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 2],
		correction: [1, 3, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 300],
		correction: [1, 3, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 500],
		correction: [1, 3, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 998],
		correction: [1, 3, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 999],
		correction: [1, 3, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 1000],
		correction: [1, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 60, 1001],
		correction: [1, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 0],
		correction: [1, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 1],
		correction: [1, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 2],
		correction: [1, 3, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 300],
		correction: [1, 3, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 500],
		correction: [1, 3, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 998],
		correction: [1, 3, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 999],
		correction: [1, 3, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 1000],
		correction: [1, 3, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 2, 61, 1001],
		correction: [1, 3, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 0, 0],
		correction: [1, 20, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 0, 1],
		correction: [1, 20, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 0, 2],
		correction: [1, 20, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 0, 300],
		correction: [1, 20, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 0, 500],
		correction: [1, 20, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 0, 998],
		correction: [1, 20, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 0, 999],
		correction: [1, 20, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 0, 1000],
		correction: [1, 20, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 0, 1001],
		correction: [1, 20, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 1, 0],
		correction: [1, 20, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 1, 1],
		correction: [1, 20, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 1, 2],
		correction: [1, 20, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 1, 300],
		correction: [1, 20, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 1, 500],
		correction: [1, 20, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 1, 998],
		correction: [1, 20, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 1, 999],
		correction: [1, 20, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 1, 1000],
		correction: [1, 20, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 1, 1001],
		correction: [1, 20, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 2, 0],
		correction: [1, 20, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 2, 1],
		correction: [1, 20, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 2, 2],
		correction: [1, 20, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 2, 300],
		correction: [1, 20, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 2, 500],
		correction: [1, 20, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 2, 998],
		correction: [1, 20, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 2, 999],
		correction: [1, 20, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 2, 1000],
		correction: [1, 20, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 2, 1001],
		correction: [1, 20, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 20, 0],
		correction: [1, 20, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 20, 1],
		correction: [1, 20, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 20, 2],
		correction: [1, 20, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 20, 300],
		correction: [1, 20, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 20, 500],
		correction: [1, 20, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 20, 998],
		correction: [1, 20, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 20, 999],
		correction: [1, 20, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 20, 1000],
		correction: [1, 20, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 20, 1001],
		correction: [1, 20, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 59, 0],
		correction: [1, 20, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 59, 1],
		correction: [1, 20, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 59, 2],
		correction: [1, 20, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 59, 300],
		correction: [1, 20, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 59, 500],
		correction: [1, 20, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 59, 998],
		correction: [1, 20, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 59, 999],
		correction: [1, 20, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 20, 59, 1000],
		correction: [1, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 59, 1001],
		correction: [1, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 0],
		correction: [1, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 1],
		correction: [1, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 2],
		correction: [1, 21, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 300],
		correction: [1, 21, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 500],
		correction: [1, 21, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 998],
		correction: [1, 21, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 999],
		correction: [1, 21, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 1000],
		correction: [1, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 60, 1001],
		correction: [1, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 0],
		correction: [1, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 1],
		correction: [1, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 2],
		correction: [1, 21, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 300],
		correction: [1, 21, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 500],
		correction: [1, 21, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 998],
		correction: [1, 21, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 999],
		correction: [1, 21, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 1000],
		correction: [1, 21, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 20, 61, 1001],
		correction: [1, 21, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 0, 0],
		correction: [1, 59, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 0, 1],
		correction: [1, 59, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 0, 2],
		correction: [1, 59, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 0, 300],
		correction: [1, 59, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 0, 500],
		correction: [1, 59, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 0, 998],
		correction: [1, 59, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 0, 999],
		correction: [1, 59, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 0, 1000],
		correction: [1, 59, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 0, 1001],
		correction: [1, 59, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 1, 0],
		correction: [1, 59, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 1, 1],
		correction: [1, 59, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 1, 2],
		correction: [1, 59, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 1, 300],
		correction: [1, 59, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 1, 500],
		correction: [1, 59, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 1, 998],
		correction: [1, 59, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 1, 999],
		correction: [1, 59, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 1, 1000],
		correction: [1, 59, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 1, 1001],
		correction: [1, 59, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 2, 0],
		correction: [1, 59, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 2, 1],
		correction: [1, 59, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 2, 2],
		correction: [1, 59, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 2, 300],
		correction: [1, 59, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 2, 500],
		correction: [1, 59, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 2, 998],
		correction: [1, 59, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 2, 999],
		correction: [1, 59, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 2, 1000],
		correction: [1, 59, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 2, 1001],
		correction: [1, 59, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 20, 0],
		correction: [1, 59, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 20, 1],
		correction: [1, 59, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 20, 2],
		correction: [1, 59, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 20, 300],
		correction: [1, 59, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 20, 500],
		correction: [1, 59, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 20, 998],
		correction: [1, 59, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 20, 999],
		correction: [1, 59, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 20, 1000],
		correction: [1, 59, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 20, 1001],
		correction: [1, 59, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 59, 0],
		correction: [1, 59, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 59, 1],
		correction: [1, 59, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 59, 2],
		correction: [1, 59, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 59, 300],
		correction: [1, 59, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 59, 500],
		correction: [1, 59, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 59, 998],
		correction: [1, 59, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 59, 999],
		correction: [1, 59, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [1, 59, 59, 1000],
		correction: [2, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 59, 1001],
		correction: [2, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 0],
		correction: [2, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 1],
		correction: [2, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 2],
		correction: [2, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 300],
		correction: [2, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 500],
		correction: [2, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 998],
		correction: [2, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 999],
		correction: [2, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 1000],
		correction: [2, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 60, 1001],
		correction: [2, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 0],
		correction: [2, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 1],
		correction: [2, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 2],
		correction: [2, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 300],
		correction: [2, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 500],
		correction: [2, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 998],
		correction: [2, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 999],
		correction: [2, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 1000],
		correction: [2, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 59, 61, 1001],
		correction: [2, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 0],
		correction: [2, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 1],
		correction: [2, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 2],
		correction: [2, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 300],
		correction: [2, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 500],
		correction: [2, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 998],
		correction: [2, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 999],
		correction: [2, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 1000],
		correction: [2, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 0, 1001],
		correction: [2, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 0],
		correction: [2, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 1],
		correction: [2, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 2],
		correction: [2, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 300],
		correction: [2, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 500],
		correction: [2, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 998],
		correction: [2, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 999],
		correction: [2, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 1000],
		correction: [2, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 1, 1001],
		correction: [2, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 0],
		correction: [2, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 1],
		correction: [2, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 2],
		correction: [2, 0, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 300],
		correction: [2, 0, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 500],
		correction: [2, 0, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 998],
		correction: [2, 0, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 999],
		correction: [2, 0, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 1000],
		correction: [2, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 2, 1001],
		correction: [2, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 0],
		correction: [2, 0, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 1],
		correction: [2, 0, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 2],
		correction: [2, 0, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 300],
		correction: [2, 0, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 500],
		correction: [2, 0, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 998],
		correction: [2, 0, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 999],
		correction: [2, 0, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 1000],
		correction: [2, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 20, 1001],
		correction: [2, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 0],
		correction: [2, 0, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 1],
		correction: [2, 0, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 2],
		correction: [2, 0, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 300],
		correction: [2, 0, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 500],
		correction: [2, 0, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 998],
		correction: [2, 0, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 999],
		correction: [2, 0, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 1000],
		correction: [2, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 59, 1001],
		correction: [2, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 0],
		correction: [2, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 1],
		correction: [2, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 2],
		correction: [2, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 300],
		correction: [2, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 500],
		correction: [2, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 998],
		correction: [2, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 999],
		correction: [2, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 1000],
		correction: [2, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 60, 1001],
		correction: [2, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 0],
		correction: [2, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 1],
		correction: [2, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 2],
		correction: [2, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 300],
		correction: [2, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 500],
		correction: [2, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 998],
		correction: [2, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 999],
		correction: [2, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 1000],
		correction: [2, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 60, 61, 1001],
		correction: [2, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 0],
		correction: [2, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 1],
		correction: [2, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 2],
		correction: [2, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 300],
		correction: [2, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 500],
		correction: [2, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 998],
		correction: [2, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 999],
		correction: [2, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 1000],
		correction: [2, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 0, 1001],
		correction: [2, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 0],
		correction: [2, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 1],
		correction: [2, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 2],
		correction: [2, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 300],
		correction: [2, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 500],
		correction: [2, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 998],
		correction: [2, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 999],
		correction: [2, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 1000],
		correction: [2, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 1, 1001],
		correction: [2, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 0],
		correction: [2, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 1],
		correction: [2, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 2],
		correction: [2, 1, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 300],
		correction: [2, 1, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 500],
		correction: [2, 1, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 998],
		correction: [2, 1, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 999],
		correction: [2, 1, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 1000],
		correction: [2, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 2, 1001],
		correction: [2, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 0],
		correction: [2, 1, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 1],
		correction: [2, 1, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 2],
		correction: [2, 1, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 300],
		correction: [2, 1, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 500],
		correction: [2, 1, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 998],
		correction: [2, 1, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 999],
		correction: [2, 1, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 1000],
		correction: [2, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 20, 1001],
		correction: [2, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 0],
		correction: [2, 1, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 1],
		correction: [2, 1, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 2],
		correction: [2, 1, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 300],
		correction: [2, 1, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 500],
		correction: [2, 1, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 998],
		correction: [2, 1, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 999],
		correction: [2, 1, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 1000],
		correction: [2, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 59, 1001],
		correction: [2, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 0],
		correction: [2, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 1],
		correction: [2, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 2],
		correction: [2, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 300],
		correction: [2, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 500],
		correction: [2, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 998],
		correction: [2, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 999],
		correction: [2, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 1000],
		correction: [2, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 60, 1001],
		correction: [2, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 0],
		correction: [2, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 1],
		correction: [2, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 2],
		correction: [2, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 300],
		correction: [2, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 500],
		correction: [2, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 998],
		correction: [2, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 999],
		correction: [2, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 1000],
		correction: [2, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [1, 61, 61, 1001],
		correction: [2, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 0, 0],
		correction: [2, 0, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 0, 1],
		correction: [2, 0, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 0, 2],
		correction: [2, 0, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 0, 300],
		correction: [2, 0, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 0, 500],
		correction: [2, 0, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 0, 998],
		correction: [2, 0, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 0, 999],
		correction: [2, 0, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 0, 1000],
		correction: [2, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 0, 1001],
		correction: [2, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 1, 0],
		correction: [2, 0, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 1, 1],
		correction: [2, 0, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 1, 2],
		correction: [2, 0, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 1, 300],
		correction: [2, 0, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 1, 500],
		correction: [2, 0, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 1, 998],
		correction: [2, 0, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 1, 999],
		correction: [2, 0, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 1, 1000],
		correction: [2, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 1, 1001],
		correction: [2, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 2, 0],
		correction: [2, 0, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 2, 1],
		correction: [2, 0, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 2, 2],
		correction: [2, 0, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 2, 300],
		correction: [2, 0, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 2, 500],
		correction: [2, 0, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 2, 998],
		correction: [2, 0, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 2, 999],
		correction: [2, 0, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 2, 1000],
		correction: [2, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 2, 1001],
		correction: [2, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 20, 0],
		correction: [2, 0, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 20, 1],
		correction: [2, 0, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 20, 2],
		correction: [2, 0, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 20, 300],
		correction: [2, 0, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 20, 500],
		correction: [2, 0, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 20, 998],
		correction: [2, 0, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 20, 999],
		correction: [2, 0, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 20, 1000],
		correction: [2, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 20, 1001],
		correction: [2, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 59, 0],
		correction: [2, 0, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 59, 1],
		correction: [2, 0, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 59, 2],
		correction: [2, 0, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 59, 300],
		correction: [2, 0, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 59, 500],
		correction: [2, 0, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 59, 998],
		correction: [2, 0, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 59, 999],
		correction: [2, 0, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 0, 59, 1000],
		correction: [2, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 59, 1001],
		correction: [2, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 0],
		correction: [2, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 1],
		correction: [2, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 2],
		correction: [2, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 300],
		correction: [2, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 500],
		correction: [2, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 998],
		correction: [2, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 999],
		correction: [2, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 1000],
		correction: [2, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 60, 1001],
		correction: [2, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 0],
		correction: [2, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 1],
		correction: [2, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 2],
		correction: [2, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 300],
		correction: [2, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 500],
		correction: [2, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 998],
		correction: [2, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 999],
		correction: [2, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 1000],
		correction: [2, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 0, 61, 1001],
		correction: [2, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 0, 0],
		correction: [2, 1, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 0, 1],
		correction: [2, 1, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 0, 2],
		correction: [2, 1, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 0, 300],
		correction: [2, 1, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 0, 500],
		correction: [2, 1, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 0, 998],
		correction: [2, 1, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 0, 999],
		correction: [2, 1, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 0, 1000],
		correction: [2, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 0, 1001],
		correction: [2, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 1, 0],
		correction: [2, 1, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 1, 1],
		correction: [2, 1, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 1, 2],
		correction: [2, 1, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 1, 300],
		correction: [2, 1, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 1, 500],
		correction: [2, 1, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 1, 998],
		correction: [2, 1, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 1, 999],
		correction: [2, 1, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 1, 1000],
		correction: [2, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 1, 1001],
		correction: [2, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 2, 0],
		correction: [2, 1, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 2, 1],
		correction: [2, 1, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 2, 2],
		correction: [2, 1, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 2, 300],
		correction: [2, 1, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 2, 500],
		correction: [2, 1, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 2, 998],
		correction: [2, 1, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 2, 999],
		correction: [2, 1, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 2, 1000],
		correction: [2, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 2, 1001],
		correction: [2, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 20, 0],
		correction: [2, 1, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 20, 1],
		correction: [2, 1, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 20, 2],
		correction: [2, 1, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 20, 300],
		correction: [2, 1, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 20, 500],
		correction: [2, 1, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 20, 998],
		correction: [2, 1, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 20, 999],
		correction: [2, 1, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 20, 1000],
		correction: [2, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 20, 1001],
		correction: [2, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 59, 0],
		correction: [2, 1, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 59, 1],
		correction: [2, 1, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 59, 2],
		correction: [2, 1, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 59, 300],
		correction: [2, 1, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 59, 500],
		correction: [2, 1, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 59, 998],
		correction: [2, 1, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 59, 999],
		correction: [2, 1, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 1, 59, 1000],
		correction: [2, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 59, 1001],
		correction: [2, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 0],
		correction: [2, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 1],
		correction: [2, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 2],
		correction: [2, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 300],
		correction: [2, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 500],
		correction: [2, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 998],
		correction: [2, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 999],
		correction: [2, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 1000],
		correction: [2, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 60, 1001],
		correction: [2, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 0],
		correction: [2, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 1],
		correction: [2, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 2],
		correction: [2, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 300],
		correction: [2, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 500],
		correction: [2, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 998],
		correction: [2, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 999],
		correction: [2, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 1000],
		correction: [2, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 1, 61, 1001],
		correction: [2, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 0, 0],
		correction: [2, 2, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 0, 1],
		correction: [2, 2, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 0, 2],
		correction: [2, 2, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 0, 300],
		correction: [2, 2, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 0, 500],
		correction: [2, 2, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 0, 998],
		correction: [2, 2, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 0, 999],
		correction: [2, 2, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 0, 1000],
		correction: [2, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 0, 1001],
		correction: [2, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 1, 0],
		correction: [2, 2, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 1, 1],
		correction: [2, 2, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 1, 2],
		correction: [2, 2, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 1, 300],
		correction: [2, 2, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 1, 500],
		correction: [2, 2, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 1, 998],
		correction: [2, 2, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 1, 999],
		correction: [2, 2, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 1, 1000],
		correction: [2, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 1, 1001],
		correction: [2, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 2, 0],
		correction: [2, 2, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 2, 1],
		correction: [2, 2, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 2, 2],
		correction: [2, 2, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 2, 300],
		correction: [2, 2, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 2, 500],
		correction: [2, 2, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 2, 998],
		correction: [2, 2, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 2, 999],
		correction: [2, 2, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 2, 1000],
		correction: [2, 2, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 2, 1001],
		correction: [2, 2, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 20, 0],
		correction: [2, 2, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 20, 1],
		correction: [2, 2, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 20, 2],
		correction: [2, 2, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 20, 300],
		correction: [2, 2, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 20, 500],
		correction: [2, 2, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 20, 998],
		correction: [2, 2, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 20, 999],
		correction: [2, 2, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 20, 1000],
		correction: [2, 2, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 20, 1001],
		correction: [2, 2, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 59, 0],
		correction: [2, 2, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 59, 1],
		correction: [2, 2, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 59, 2],
		correction: [2, 2, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 59, 300],
		correction: [2, 2, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 59, 500],
		correction: [2, 2, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 59, 998],
		correction: [2, 2, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 59, 999],
		correction: [2, 2, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 2, 59, 1000],
		correction: [2, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 59, 1001],
		correction: [2, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 0],
		correction: [2, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 1],
		correction: [2, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 2],
		correction: [2, 3, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 300],
		correction: [2, 3, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 500],
		correction: [2, 3, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 998],
		correction: [2, 3, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 999],
		correction: [2, 3, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 1000],
		correction: [2, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 60, 1001],
		correction: [2, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 0],
		correction: [2, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 1],
		correction: [2, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 2],
		correction: [2, 3, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 300],
		correction: [2, 3, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 500],
		correction: [2, 3, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 998],
		correction: [2, 3, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 999],
		correction: [2, 3, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 1000],
		correction: [2, 3, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 2, 61, 1001],
		correction: [2, 3, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 0, 0],
		correction: [2, 20, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 0, 1],
		correction: [2, 20, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 0, 2],
		correction: [2, 20, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 0, 300],
		correction: [2, 20, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 0, 500],
		correction: [2, 20, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 0, 998],
		correction: [2, 20, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 0, 999],
		correction: [2, 20, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 0, 1000],
		correction: [2, 20, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 0, 1001],
		correction: [2, 20, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 1, 0],
		correction: [2, 20, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 1, 1],
		correction: [2, 20, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 1, 2],
		correction: [2, 20, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 1, 300],
		correction: [2, 20, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 1, 500],
		correction: [2, 20, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 1, 998],
		correction: [2, 20, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 1, 999],
		correction: [2, 20, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 1, 1000],
		correction: [2, 20, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 1, 1001],
		correction: [2, 20, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 2, 0],
		correction: [2, 20, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 2, 1],
		correction: [2, 20, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 2, 2],
		correction: [2, 20, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 2, 300],
		correction: [2, 20, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 2, 500],
		correction: [2, 20, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 2, 998],
		correction: [2, 20, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 2, 999],
		correction: [2, 20, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 2, 1000],
		correction: [2, 20, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 2, 1001],
		correction: [2, 20, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 20, 0],
		correction: [2, 20, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 20, 1],
		correction: [2, 20, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 20, 2],
		correction: [2, 20, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 20, 300],
		correction: [2, 20, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 20, 500],
		correction: [2, 20, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 20, 998],
		correction: [2, 20, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 20, 999],
		correction: [2, 20, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 20, 1000],
		correction: [2, 20, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 20, 1001],
		correction: [2, 20, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 59, 0],
		correction: [2, 20, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 59, 1],
		correction: [2, 20, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 59, 2],
		correction: [2, 20, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 59, 300],
		correction: [2, 20, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 59, 500],
		correction: [2, 20, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 59, 998],
		correction: [2, 20, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 59, 999],
		correction: [2, 20, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 20, 59, 1000],
		correction: [2, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 59, 1001],
		correction: [2, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 0],
		correction: [2, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 1],
		correction: [2, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 2],
		correction: [2, 21, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 300],
		correction: [2, 21, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 500],
		correction: [2, 21, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 998],
		correction: [2, 21, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 999],
		correction: [2, 21, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 1000],
		correction: [2, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 60, 1001],
		correction: [2, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 0],
		correction: [2, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 1],
		correction: [2, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 2],
		correction: [2, 21, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 300],
		correction: [2, 21, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 500],
		correction: [2, 21, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 998],
		correction: [2, 21, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 999],
		correction: [2, 21, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 1000],
		correction: [2, 21, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 20, 61, 1001],
		correction: [2, 21, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 0, 0],
		correction: [2, 59, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 0, 1],
		correction: [2, 59, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 0, 2],
		correction: [2, 59, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 0, 300],
		correction: [2, 59, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 0, 500],
		correction: [2, 59, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 0, 998],
		correction: [2, 59, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 0, 999],
		correction: [2, 59, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 0, 1000],
		correction: [2, 59, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 0, 1001],
		correction: [2, 59, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 1, 0],
		correction: [2, 59, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 1, 1],
		correction: [2, 59, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 1, 2],
		correction: [2, 59, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 1, 300],
		correction: [2, 59, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 1, 500],
		correction: [2, 59, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 1, 998],
		correction: [2, 59, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 1, 999],
		correction: [2, 59, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 1, 1000],
		correction: [2, 59, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 1, 1001],
		correction: [2, 59, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 2, 0],
		correction: [2, 59, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 2, 1],
		correction: [2, 59, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 2, 2],
		correction: [2, 59, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 2, 300],
		correction: [2, 59, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 2, 500],
		correction: [2, 59, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 2, 998],
		correction: [2, 59, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 2, 999],
		correction: [2, 59, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 2, 1000],
		correction: [2, 59, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 2, 1001],
		correction: [2, 59, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 20, 0],
		correction: [2, 59, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 20, 1],
		correction: [2, 59, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 20, 2],
		correction: [2, 59, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 20, 300],
		correction: [2, 59, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 20, 500],
		correction: [2, 59, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 20, 998],
		correction: [2, 59, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 20, 999],
		correction: [2, 59, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 20, 1000],
		correction: [2, 59, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 20, 1001],
		correction: [2, 59, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 59, 0],
		correction: [2, 59, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 59, 1],
		correction: [2, 59, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 59, 2],
		correction: [2, 59, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 59, 300],
		correction: [2, 59, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 59, 500],
		correction: [2, 59, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 59, 998],
		correction: [2, 59, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 59, 999],
		correction: [2, 59, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [2, 59, 59, 1000],
		correction: [3, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 59, 1001],
		correction: [3, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 0],
		correction: [3, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 1],
		correction: [3, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 2],
		correction: [3, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 300],
		correction: [3, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 500],
		correction: [3, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 998],
		correction: [3, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 999],
		correction: [3, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 1000],
		correction: [3, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 60, 1001],
		correction: [3, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 0],
		correction: [3, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 1],
		correction: [3, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 2],
		correction: [3, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 300],
		correction: [3, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 500],
		correction: [3, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 998],
		correction: [3, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 999],
		correction: [3, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 1000],
		correction: [3, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 59, 61, 1001],
		correction: [3, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 0],
		correction: [3, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 1],
		correction: [3, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 2],
		correction: [3, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 300],
		correction: [3, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 500],
		correction: [3, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 998],
		correction: [3, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 999],
		correction: [3, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 1000],
		correction: [3, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 0, 1001],
		correction: [3, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 0],
		correction: [3, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 1],
		correction: [3, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 2],
		correction: [3, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 300],
		correction: [3, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 500],
		correction: [3, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 998],
		correction: [3, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 999],
		correction: [3, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 1000],
		correction: [3, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 1, 1001],
		correction: [3, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 0],
		correction: [3, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 1],
		correction: [3, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 2],
		correction: [3, 0, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 300],
		correction: [3, 0, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 500],
		correction: [3, 0, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 998],
		correction: [3, 0, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 999],
		correction: [3, 0, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 1000],
		correction: [3, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 2, 1001],
		correction: [3, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 0],
		correction: [3, 0, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 1],
		correction: [3, 0, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 2],
		correction: [3, 0, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 300],
		correction: [3, 0, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 500],
		correction: [3, 0, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 998],
		correction: [3, 0, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 999],
		correction: [3, 0, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 1000],
		correction: [3, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 20, 1001],
		correction: [3, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 0],
		correction: [3, 0, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 1],
		correction: [3, 0, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 2],
		correction: [3, 0, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 300],
		correction: [3, 0, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 500],
		correction: [3, 0, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 998],
		correction: [3, 0, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 999],
		correction: [3, 0, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 1000],
		correction: [3, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 59, 1001],
		correction: [3, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 0],
		correction: [3, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 1],
		correction: [3, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 2],
		correction: [3, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 300],
		correction: [3, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 500],
		correction: [3, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 998],
		correction: [3, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 999],
		correction: [3, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 1000],
		correction: [3, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 60, 1001],
		correction: [3, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 0],
		correction: [3, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 1],
		correction: [3, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 2],
		correction: [3, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 300],
		correction: [3, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 500],
		correction: [3, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 998],
		correction: [3, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 999],
		correction: [3, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 1000],
		correction: [3, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 60, 61, 1001],
		correction: [3, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 0],
		correction: [3, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 1],
		correction: [3, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 2],
		correction: [3, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 300],
		correction: [3, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 500],
		correction: [3, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 998],
		correction: [3, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 999],
		correction: [3, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 1000],
		correction: [3, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 0, 1001],
		correction: [3, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 0],
		correction: [3, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 1],
		correction: [3, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 2],
		correction: [3, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 300],
		correction: [3, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 500],
		correction: [3, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 998],
		correction: [3, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 999],
		correction: [3, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 1000],
		correction: [3, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 1, 1001],
		correction: [3, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 0],
		correction: [3, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 1],
		correction: [3, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 2],
		correction: [3, 1, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 300],
		correction: [3, 1, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 500],
		correction: [3, 1, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 998],
		correction: [3, 1, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 999],
		correction: [3, 1, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 1000],
		correction: [3, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 2, 1001],
		correction: [3, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 0],
		correction: [3, 1, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 1],
		correction: [3, 1, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 2],
		correction: [3, 1, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 300],
		correction: [3, 1, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 500],
		correction: [3, 1, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 998],
		correction: [3, 1, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 999],
		correction: [3, 1, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 1000],
		correction: [3, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 20, 1001],
		correction: [3, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 0],
		correction: [3, 1, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 1],
		correction: [3, 1, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 2],
		correction: [3, 1, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 300],
		correction: [3, 1, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 500],
		correction: [3, 1, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 998],
		correction: [3, 1, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 999],
		correction: [3, 1, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 1000],
		correction: [3, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 59, 1001],
		correction: [3, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 0],
		correction: [3, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 1],
		correction: [3, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 2],
		correction: [3, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 300],
		correction: [3, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 500],
		correction: [3, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 998],
		correction: [3, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 999],
		correction: [3, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 1000],
		correction: [3, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 60, 1001],
		correction: [3, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 0],
		correction: [3, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 1],
		correction: [3, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 2],
		correction: [3, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 300],
		correction: [3, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 500],
		correction: [3, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 998],
		correction: [3, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 999],
		correction: [3, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 1000],
		correction: [3, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [2, 61, 61, 1001],
		correction: [3, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 0, 0],
		correction: [11, 0, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 0, 1],
		correction: [11, 0, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 0, 2],
		correction: [11, 0, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 0, 300],
		correction: [11, 0, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 0, 500],
		correction: [11, 0, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 0, 998],
		correction: [11, 0, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 0, 999],
		correction: [11, 0, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 0, 1000],
		correction: [11, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 0, 1001],
		correction: [11, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 1, 0],
		correction: [11, 0, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 1, 1],
		correction: [11, 0, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 1, 2],
		correction: [11, 0, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 1, 300],
		correction: [11, 0, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 1, 500],
		correction: [11, 0, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 1, 998],
		correction: [11, 0, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 1, 999],
		correction: [11, 0, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 1, 1000],
		correction: [11, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 1, 1001],
		correction: [11, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 2, 0],
		correction: [11, 0, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 2, 1],
		correction: [11, 0, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 2, 2],
		correction: [11, 0, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 2, 300],
		correction: [11, 0, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 2, 500],
		correction: [11, 0, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 2, 998],
		correction: [11, 0, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 2, 999],
		correction: [11, 0, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 2, 1000],
		correction: [11, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 2, 1001],
		correction: [11, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 20, 0],
		correction: [11, 0, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 20, 1],
		correction: [11, 0, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 20, 2],
		correction: [11, 0, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 20, 300],
		correction: [11, 0, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 20, 500],
		correction: [11, 0, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 20, 998],
		correction: [11, 0, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 20, 999],
		correction: [11, 0, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 20, 1000],
		correction: [11, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 20, 1001],
		correction: [11, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 59, 0],
		correction: [11, 0, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 59, 1],
		correction: [11, 0, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 59, 2],
		correction: [11, 0, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 59, 300],
		correction: [11, 0, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 59, 500],
		correction: [11, 0, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 59, 998],
		correction: [11, 0, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 59, 999],
		correction: [11, 0, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 0, 59, 1000],
		correction: [11, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 59, 1001],
		correction: [11, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 0],
		correction: [11, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 1],
		correction: [11, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 2],
		correction: [11, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 300],
		correction: [11, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 500],
		correction: [11, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 998],
		correction: [11, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 999],
		correction: [11, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 1000],
		correction: [11, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 60, 1001],
		correction: [11, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 0],
		correction: [11, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 1],
		correction: [11, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 2],
		correction: [11, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 300],
		correction: [11, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 500],
		correction: [11, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 998],
		correction: [11, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 999],
		correction: [11, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 1000],
		correction: [11, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 0, 61, 1001],
		correction: [11, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 0, 0],
		correction: [11, 1, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 0, 1],
		correction: [11, 1, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 0, 2],
		correction: [11, 1, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 0, 300],
		correction: [11, 1, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 0, 500],
		correction: [11, 1, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 0, 998],
		correction: [11, 1, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 0, 999],
		correction: [11, 1, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 0, 1000],
		correction: [11, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 0, 1001],
		correction: [11, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 1, 0],
		correction: [11, 1, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 1, 1],
		correction: [11, 1, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 1, 2],
		correction: [11, 1, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 1, 300],
		correction: [11, 1, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 1, 500],
		correction: [11, 1, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 1, 998],
		correction: [11, 1, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 1, 999],
		correction: [11, 1, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 1, 1000],
		correction: [11, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 1, 1001],
		correction: [11, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 2, 0],
		correction: [11, 1, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 2, 1],
		correction: [11, 1, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 2, 2],
		correction: [11, 1, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 2, 300],
		correction: [11, 1, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 2, 500],
		correction: [11, 1, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 2, 998],
		correction: [11, 1, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 2, 999],
		correction: [11, 1, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 2, 1000],
		correction: [11, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 2, 1001],
		correction: [11, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 20, 0],
		correction: [11, 1, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 20, 1],
		correction: [11, 1, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 20, 2],
		correction: [11, 1, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 20, 300],
		correction: [11, 1, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 20, 500],
		correction: [11, 1, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 20, 998],
		correction: [11, 1, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 20, 999],
		correction: [11, 1, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 20, 1000],
		correction: [11, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 20, 1001],
		correction: [11, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 59, 0],
		correction: [11, 1, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 59, 1],
		correction: [11, 1, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 59, 2],
		correction: [11, 1, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 59, 300],
		correction: [11, 1, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 59, 500],
		correction: [11, 1, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 59, 998],
		correction: [11, 1, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 59, 999],
		correction: [11, 1, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 1, 59, 1000],
		correction: [11, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 59, 1001],
		correction: [11, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 0],
		correction: [11, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 1],
		correction: [11, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 2],
		correction: [11, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 300],
		correction: [11, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 500],
		correction: [11, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 998],
		correction: [11, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 999],
		correction: [11, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 1000],
		correction: [11, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 60, 1001],
		correction: [11, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 0],
		correction: [11, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 1],
		correction: [11, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 2],
		correction: [11, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 300],
		correction: [11, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 500],
		correction: [11, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 998],
		correction: [11, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 999],
		correction: [11, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 1000],
		correction: [11, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 1, 61, 1001],
		correction: [11, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 0, 0],
		correction: [11, 2, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 0, 1],
		correction: [11, 2, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 0, 2],
		correction: [11, 2, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 0, 300],
		correction: [11, 2, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 0, 500],
		correction: [11, 2, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 0, 998],
		correction: [11, 2, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 0, 999],
		correction: [11, 2, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 0, 1000],
		correction: [11, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 0, 1001],
		correction: [11, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 1, 0],
		correction: [11, 2, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 1, 1],
		correction: [11, 2, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 1, 2],
		correction: [11, 2, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 1, 300],
		correction: [11, 2, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 1, 500],
		correction: [11, 2, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 1, 998],
		correction: [11, 2, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 1, 999],
		correction: [11, 2, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 1, 1000],
		correction: [11, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 1, 1001],
		correction: [11, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 2, 0],
		correction: [11, 2, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 2, 1],
		correction: [11, 2, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 2, 2],
		correction: [11, 2, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 2, 300],
		correction: [11, 2, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 2, 500],
		correction: [11, 2, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 2, 998],
		correction: [11, 2, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 2, 999],
		correction: [11, 2, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 2, 1000],
		correction: [11, 2, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 2, 1001],
		correction: [11, 2, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 20, 0],
		correction: [11, 2, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 20, 1],
		correction: [11, 2, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 20, 2],
		correction: [11, 2, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 20, 300],
		correction: [11, 2, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 20, 500],
		correction: [11, 2, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 20, 998],
		correction: [11, 2, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 20, 999],
		correction: [11, 2, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 20, 1000],
		correction: [11, 2, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 20, 1001],
		correction: [11, 2, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 59, 0],
		correction: [11, 2, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 59, 1],
		correction: [11, 2, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 59, 2],
		correction: [11, 2, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 59, 300],
		correction: [11, 2, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 59, 500],
		correction: [11, 2, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 59, 998],
		correction: [11, 2, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 59, 999],
		correction: [11, 2, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 2, 59, 1000],
		correction: [11, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 59, 1001],
		correction: [11, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 0],
		correction: [11, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 1],
		correction: [11, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 2],
		correction: [11, 3, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 300],
		correction: [11, 3, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 500],
		correction: [11, 3, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 998],
		correction: [11, 3, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 999],
		correction: [11, 3, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 1000],
		correction: [11, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 60, 1001],
		correction: [11, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 0],
		correction: [11, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 1],
		correction: [11, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 2],
		correction: [11, 3, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 300],
		correction: [11, 3, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 500],
		correction: [11, 3, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 998],
		correction: [11, 3, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 999],
		correction: [11, 3, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 1000],
		correction: [11, 3, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 2, 61, 1001],
		correction: [11, 3, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 0, 0],
		correction: [11, 20, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 0, 1],
		correction: [11, 20, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 0, 2],
		correction: [11, 20, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 0, 300],
		correction: [11, 20, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 0, 500],
		correction: [11, 20, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 0, 998],
		correction: [11, 20, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 0, 999],
		correction: [11, 20, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 0, 1000],
		correction: [11, 20, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 0, 1001],
		correction: [11, 20, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 1, 0],
		correction: [11, 20, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 1, 1],
		correction: [11, 20, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 1, 2],
		correction: [11, 20, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 1, 300],
		correction: [11, 20, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 1, 500],
		correction: [11, 20, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 1, 998],
		correction: [11, 20, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 1, 999],
		correction: [11, 20, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 1, 1000],
		correction: [11, 20, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 1, 1001],
		correction: [11, 20, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 2, 0],
		correction: [11, 20, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 2, 1],
		correction: [11, 20, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 2, 2],
		correction: [11, 20, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 2, 300],
		correction: [11, 20, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 2, 500],
		correction: [11, 20, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 2, 998],
		correction: [11, 20, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 2, 999],
		correction: [11, 20, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 2, 1000],
		correction: [11, 20, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 2, 1001],
		correction: [11, 20, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 20, 0],
		correction: [11, 20, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 20, 1],
		correction: [11, 20, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 20, 2],
		correction: [11, 20, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 20, 300],
		correction: [11, 20, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 20, 500],
		correction: [11, 20, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 20, 998],
		correction: [11, 20, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 20, 999],
		correction: [11, 20, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 20, 1000],
		correction: [11, 20, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 20, 1001],
		correction: [11, 20, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 59, 0],
		correction: [11, 20, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 59, 1],
		correction: [11, 20, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 59, 2],
		correction: [11, 20, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 59, 300],
		correction: [11, 20, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 59, 500],
		correction: [11, 20, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 59, 998],
		correction: [11, 20, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 59, 999],
		correction: [11, 20, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 20, 59, 1000],
		correction: [11, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 59, 1001],
		correction: [11, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 0],
		correction: [11, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 1],
		correction: [11, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 2],
		correction: [11, 21, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 300],
		correction: [11, 21, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 500],
		correction: [11, 21, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 998],
		correction: [11, 21, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 999],
		correction: [11, 21, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 1000],
		correction: [11, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 60, 1001],
		correction: [11, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 0],
		correction: [11, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 1],
		correction: [11, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 2],
		correction: [11, 21, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 300],
		correction: [11, 21, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 500],
		correction: [11, 21, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 998],
		correction: [11, 21, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 999],
		correction: [11, 21, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 1000],
		correction: [11, 21, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 20, 61, 1001],
		correction: [11, 21, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 0, 0],
		correction: [11, 59, 0, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 0, 1],
		correction: [11, 59, 0, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 0, 2],
		correction: [11, 59, 0, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 0, 300],
		correction: [11, 59, 0, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 0, 500],
		correction: [11, 59, 0, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 0, 998],
		correction: [11, 59, 0, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 0, 999],
		correction: [11, 59, 0, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 0, 1000],
		correction: [11, 59, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 0, 1001],
		correction: [11, 59, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 1, 0],
		correction: [11, 59, 1, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 1, 1],
		correction: [11, 59, 1, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 1, 2],
		correction: [11, 59, 1, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 1, 300],
		correction: [11, 59, 1, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 1, 500],
		correction: [11, 59, 1, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 1, 998],
		correction: [11, 59, 1, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 1, 999],
		correction: [11, 59, 1, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 1, 1000],
		correction: [11, 59, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 1, 1001],
		correction: [11, 59, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 2, 0],
		correction: [11, 59, 2, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 2, 1],
		correction: [11, 59, 2, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 2, 2],
		correction: [11, 59, 2, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 2, 300],
		correction: [11, 59, 2, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 2, 500],
		correction: [11, 59, 2, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 2, 998],
		correction: [11, 59, 2, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 2, 999],
		correction: [11, 59, 2, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 2, 1000],
		correction: [11, 59, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 2, 1001],
		correction: [11, 59, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 20, 0],
		correction: [11, 59, 20, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 20, 1],
		correction: [11, 59, 20, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 20, 2],
		correction: [11, 59, 20, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 20, 300],
		correction: [11, 59, 20, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 20, 500],
		correction: [11, 59, 20, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 20, 998],
		correction: [11, 59, 20, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 20, 999],
		correction: [11, 59, 20, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 20, 1000],
		correction: [11, 59, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 20, 1001],
		correction: [11, 59, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 59, 0],
		correction: [11, 59, 59, 0, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 59, 1],
		correction: [11, 59, 59, 1, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 59, 2],
		correction: [11, 59, 59, 2, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 59, 300],
		correction: [11, 59, 59, 300, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 59, 500],
		correction: [11, 59, 59, 500, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 59, 998],
		correction: [11, 59, 59, 998, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 59, 999],
		correction: [11, 59, 59, 999, 0],
		check24: true,
		check12: true
	},
	{
		time: [11, 59, 59, 1000],
		correction: [12, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 59, 1001],
		correction: [12, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 0],
		correction: [12, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 1],
		correction: [12, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 2],
		correction: [12, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 300],
		correction: [12, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 500],
		correction: [12, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 998],
		correction: [12, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 999],
		correction: [12, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 1000],
		correction: [12, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 60, 1001],
		correction: [12, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 0],
		correction: [12, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 1],
		correction: [12, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 2],
		correction: [12, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 300],
		correction: [12, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 500],
		correction: [12, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 998],
		correction: [12, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 999],
		correction: [12, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 1000],
		correction: [12, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 59, 61, 1001],
		correction: [12, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 0],
		correction: [12, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 1],
		correction: [12, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 2],
		correction: [12, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 300],
		correction: [12, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 500],
		correction: [12, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 998],
		correction: [12, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 999],
		correction: [12, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 1000],
		correction: [12, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 0, 1001],
		correction: [12, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 0],
		correction: [12, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 1],
		correction: [12, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 2],
		correction: [12, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 300],
		correction: [12, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 500],
		correction: [12, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 998],
		correction: [12, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 999],
		correction: [12, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 1000],
		correction: [12, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 1, 1001],
		correction: [12, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 0],
		correction: [12, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 1],
		correction: [12, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 2],
		correction: [12, 0, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 300],
		correction: [12, 0, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 500],
		correction: [12, 0, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 998],
		correction: [12, 0, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 999],
		correction: [12, 0, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 1000],
		correction: [12, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 2, 1001],
		correction: [12, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 0],
		correction: [12, 0, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 1],
		correction: [12, 0, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 2],
		correction: [12, 0, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 300],
		correction: [12, 0, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 500],
		correction: [12, 0, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 998],
		correction: [12, 0, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 999],
		correction: [12, 0, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 1000],
		correction: [12, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 20, 1001],
		correction: [12, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 0],
		correction: [12, 0, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 1],
		correction: [12, 0, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 2],
		correction: [12, 0, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 300],
		correction: [12, 0, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 500],
		correction: [12, 0, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 998],
		correction: [12, 0, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 999],
		correction: [12, 0, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 1000],
		correction: [12, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 59, 1001],
		correction: [12, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 0],
		correction: [12, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 1],
		correction: [12, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 2],
		correction: [12, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 300],
		correction: [12, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 500],
		correction: [12, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 998],
		correction: [12, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 999],
		correction: [12, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 1000],
		correction: [12, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 60, 1001],
		correction: [12, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 0],
		correction: [12, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 1],
		correction: [12, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 2],
		correction: [12, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 300],
		correction: [12, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 500],
		correction: [12, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 998],
		correction: [12, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 999],
		correction: [12, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 1000],
		correction: [12, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 60, 61, 1001],
		correction: [12, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 0],
		correction: [12, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 1],
		correction: [12, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 2],
		correction: [12, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 300],
		correction: [12, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 500],
		correction: [12, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 998],
		correction: [12, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 999],
		correction: [12, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 1000],
		correction: [12, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 0, 1001],
		correction: [12, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 0],
		correction: [12, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 1],
		correction: [12, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 2],
		correction: [12, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 300],
		correction: [12, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 500],
		correction: [12, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 998],
		correction: [12, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 999],
		correction: [12, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 1000],
		correction: [12, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 1, 1001],
		correction: [12, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 0],
		correction: [12, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 1],
		correction: [12, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 2],
		correction: [12, 1, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 300],
		correction: [12, 1, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 500],
		correction: [12, 1, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 998],
		correction: [12, 1, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 999],
		correction: [12, 1, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 1000],
		correction: [12, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 2, 1001],
		correction: [12, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 0],
		correction: [12, 1, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 1],
		correction: [12, 1, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 2],
		correction: [12, 1, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 300],
		correction: [12, 1, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 500],
		correction: [12, 1, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 998],
		correction: [12, 1, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 999],
		correction: [12, 1, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 1000],
		correction: [12, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 20, 1001],
		correction: [12, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 0],
		correction: [12, 1, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 1],
		correction: [12, 1, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 2],
		correction: [12, 1, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 300],
		correction: [12, 1, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 500],
		correction: [12, 1, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 998],
		correction: [12, 1, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 999],
		correction: [12, 1, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 1000],
		correction: [12, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 59, 1001],
		correction: [12, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 0],
		correction: [12, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 1],
		correction: [12, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 2],
		correction: [12, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 300],
		correction: [12, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 500],
		correction: [12, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 998],
		correction: [12, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 999],
		correction: [12, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 1000],
		correction: [12, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 60, 1001],
		correction: [12, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 0],
		correction: [12, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 1],
		correction: [12, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 2],
		correction: [12, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 300],
		correction: [12, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 500],
		correction: [12, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 998],
		correction: [12, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 999],
		correction: [12, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 1000],
		correction: [12, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [11, 61, 61, 1001],
		correction: [12, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 0, 0],
		correction: [12, 0, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 0, 1],
		correction: [12, 0, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 0, 2],
		correction: [12, 0, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 0, 300],
		correction: [12, 0, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 0, 500],
		correction: [12, 0, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 0, 998],
		correction: [12, 0, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 0, 999],
		correction: [12, 0, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 0, 1000],
		correction: [12, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 0, 1001],
		correction: [12, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 1, 0],
		correction: [12, 0, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 1, 1],
		correction: [12, 0, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 1, 2],
		correction: [12, 0, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 1, 300],
		correction: [12, 0, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 1, 500],
		correction: [12, 0, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 1, 998],
		correction: [12, 0, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 1, 999],
		correction: [12, 0, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 1, 1000],
		correction: [12, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 1, 1001],
		correction: [12, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 2, 0],
		correction: [12, 0, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 2, 1],
		correction: [12, 0, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 2, 2],
		correction: [12, 0, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 2, 300],
		correction: [12, 0, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 2, 500],
		correction: [12, 0, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 2, 998],
		correction: [12, 0, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 2, 999],
		correction: [12, 0, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 2, 1000],
		correction: [12, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 2, 1001],
		correction: [12, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 20, 0],
		correction: [12, 0, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 20, 1],
		correction: [12, 0, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 20, 2],
		correction: [12, 0, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 20, 300],
		correction: [12, 0, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 20, 500],
		correction: [12, 0, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 20, 998],
		correction: [12, 0, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 20, 999],
		correction: [12, 0, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 20, 1000],
		correction: [12, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 20, 1001],
		correction: [12, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 59, 0],
		correction: [12, 0, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 59, 1],
		correction: [12, 0, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 59, 2],
		correction: [12, 0, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 59, 300],
		correction: [12, 0, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 59, 500],
		correction: [12, 0, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 59, 998],
		correction: [12, 0, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 59, 999],
		correction: [12, 0, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 0, 59, 1000],
		correction: [12, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 59, 1001],
		correction: [12, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 0],
		correction: [12, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 1],
		correction: [12, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 2],
		correction: [12, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 300],
		correction: [12, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 500],
		correction: [12, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 998],
		correction: [12, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 999],
		correction: [12, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 1000],
		correction: [12, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 60, 1001],
		correction: [12, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 0],
		correction: [12, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 1],
		correction: [12, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 2],
		correction: [12, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 300],
		correction: [12, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 500],
		correction: [12, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 998],
		correction: [12, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 999],
		correction: [12, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 1000],
		correction: [12, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 0, 61, 1001],
		correction: [12, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 0, 0],
		correction: [12, 1, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 0, 1],
		correction: [12, 1, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 0, 2],
		correction: [12, 1, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 0, 300],
		correction: [12, 1, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 0, 500],
		correction: [12, 1, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 0, 998],
		correction: [12, 1, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 0, 999],
		correction: [12, 1, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 0, 1000],
		correction: [12, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 0, 1001],
		correction: [12, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 1, 0],
		correction: [12, 1, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 1, 1],
		correction: [12, 1, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 1, 2],
		correction: [12, 1, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 1, 300],
		correction: [12, 1, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 1, 500],
		correction: [12, 1, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 1, 998],
		correction: [12, 1, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 1, 999],
		correction: [12, 1, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 1, 1000],
		correction: [12, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 1, 1001],
		correction: [12, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 2, 0],
		correction: [12, 1, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 2, 1],
		correction: [12, 1, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 2, 2],
		correction: [12, 1, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 2, 300],
		correction: [12, 1, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 2, 500],
		correction: [12, 1, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 2, 998],
		correction: [12, 1, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 2, 999],
		correction: [12, 1, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 2, 1000],
		correction: [12, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 2, 1001],
		correction: [12, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 20, 0],
		correction: [12, 1, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 20, 1],
		correction: [12, 1, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 20, 2],
		correction: [12, 1, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 20, 300],
		correction: [12, 1, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 20, 500],
		correction: [12, 1, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 20, 998],
		correction: [12, 1, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 20, 999],
		correction: [12, 1, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 20, 1000],
		correction: [12, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 20, 1001],
		correction: [12, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 59, 0],
		correction: [12, 1, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 59, 1],
		correction: [12, 1, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 59, 2],
		correction: [12, 1, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 59, 300],
		correction: [12, 1, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 59, 500],
		correction: [12, 1, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 59, 998],
		correction: [12, 1, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 59, 999],
		correction: [12, 1, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 1, 59, 1000],
		correction: [12, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 59, 1001],
		correction: [12, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 0],
		correction: [12, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 1],
		correction: [12, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 2],
		correction: [12, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 300],
		correction: [12, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 500],
		correction: [12, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 998],
		correction: [12, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 999],
		correction: [12, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 1000],
		correction: [12, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 60, 1001],
		correction: [12, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 0],
		correction: [12, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 1],
		correction: [12, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 2],
		correction: [12, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 300],
		correction: [12, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 500],
		correction: [12, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 998],
		correction: [12, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 999],
		correction: [12, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 1000],
		correction: [12, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 1, 61, 1001],
		correction: [12, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 0, 0],
		correction: [12, 2, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 0, 1],
		correction: [12, 2, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 0, 2],
		correction: [12, 2, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 0, 300],
		correction: [12, 2, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 0, 500],
		correction: [12, 2, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 0, 998],
		correction: [12, 2, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 0, 999],
		correction: [12, 2, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 0, 1000],
		correction: [12, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 0, 1001],
		correction: [12, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 1, 0],
		correction: [12, 2, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 1, 1],
		correction: [12, 2, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 1, 2],
		correction: [12, 2, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 1, 300],
		correction: [12, 2, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 1, 500],
		correction: [12, 2, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 1, 998],
		correction: [12, 2, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 1, 999],
		correction: [12, 2, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 1, 1000],
		correction: [12, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 1, 1001],
		correction: [12, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 2, 0],
		correction: [12, 2, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 2, 1],
		correction: [12, 2, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 2, 2],
		correction: [12, 2, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 2, 300],
		correction: [12, 2, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 2, 500],
		correction: [12, 2, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 2, 998],
		correction: [12, 2, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 2, 999],
		correction: [12, 2, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 2, 1000],
		correction: [12, 2, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 2, 1001],
		correction: [12, 2, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 20, 0],
		correction: [12, 2, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 20, 1],
		correction: [12, 2, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 20, 2],
		correction: [12, 2, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 20, 300],
		correction: [12, 2, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 20, 500],
		correction: [12, 2, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 20, 998],
		correction: [12, 2, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 20, 999],
		correction: [12, 2, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 20, 1000],
		correction: [12, 2, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 20, 1001],
		correction: [12, 2, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 59, 0],
		correction: [12, 2, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 59, 1],
		correction: [12, 2, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 59, 2],
		correction: [12, 2, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 59, 300],
		correction: [12, 2, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 59, 500],
		correction: [12, 2, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 59, 998],
		correction: [12, 2, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 59, 999],
		correction: [12, 2, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 2, 59, 1000],
		correction: [12, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 59, 1001],
		correction: [12, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 0],
		correction: [12, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 1],
		correction: [12, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 2],
		correction: [12, 3, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 300],
		correction: [12, 3, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 500],
		correction: [12, 3, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 998],
		correction: [12, 3, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 999],
		correction: [12, 3, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 1000],
		correction: [12, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 60, 1001],
		correction: [12, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 0],
		correction: [12, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 1],
		correction: [12, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 2],
		correction: [12, 3, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 300],
		correction: [12, 3, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 500],
		correction: [12, 3, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 998],
		correction: [12, 3, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 999],
		correction: [12, 3, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 1000],
		correction: [12, 3, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 2, 61, 1001],
		correction: [12, 3, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 0, 0],
		correction: [12, 20, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 0, 1],
		correction: [12, 20, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 0, 2],
		correction: [12, 20, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 0, 300],
		correction: [12, 20, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 0, 500],
		correction: [12, 20, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 0, 998],
		correction: [12, 20, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 0, 999],
		correction: [12, 20, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 0, 1000],
		correction: [12, 20, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 0, 1001],
		correction: [12, 20, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 1, 0],
		correction: [12, 20, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 1, 1],
		correction: [12, 20, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 1, 2],
		correction: [12, 20, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 1, 300],
		correction: [12, 20, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 1, 500],
		correction: [12, 20, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 1, 998],
		correction: [12, 20, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 1, 999],
		correction: [12, 20, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 1, 1000],
		correction: [12, 20, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 1, 1001],
		correction: [12, 20, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 2, 0],
		correction: [12, 20, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 2, 1],
		correction: [12, 20, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 2, 2],
		correction: [12, 20, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 2, 300],
		correction: [12, 20, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 2, 500],
		correction: [12, 20, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 2, 998],
		correction: [12, 20, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 2, 999],
		correction: [12, 20, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 2, 1000],
		correction: [12, 20, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 2, 1001],
		correction: [12, 20, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 20, 0],
		correction: [12, 20, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 20, 1],
		correction: [12, 20, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 20, 2],
		correction: [12, 20, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 20, 300],
		correction: [12, 20, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 20, 500],
		correction: [12, 20, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 20, 998],
		correction: [12, 20, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 20, 999],
		correction: [12, 20, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 20, 1000],
		correction: [12, 20, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 20, 1001],
		correction: [12, 20, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 59, 0],
		correction: [12, 20, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 59, 1],
		correction: [12, 20, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 59, 2],
		correction: [12, 20, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 59, 300],
		correction: [12, 20, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 59, 500],
		correction: [12, 20, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 59, 998],
		correction: [12, 20, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 59, 999],
		correction: [12, 20, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 20, 59, 1000],
		correction: [12, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 59, 1001],
		correction: [12, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 0],
		correction: [12, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 1],
		correction: [12, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 2],
		correction: [12, 21, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 300],
		correction: [12, 21, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 500],
		correction: [12, 21, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 998],
		correction: [12, 21, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 999],
		correction: [12, 21, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 1000],
		correction: [12, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 60, 1001],
		correction: [12, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 0],
		correction: [12, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 1],
		correction: [12, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 2],
		correction: [12, 21, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 300],
		correction: [12, 21, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 500],
		correction: [12, 21, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 998],
		correction: [12, 21, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 999],
		correction: [12, 21, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 1000],
		correction: [12, 21, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 20, 61, 1001],
		correction: [12, 21, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 0, 0],
		correction: [12, 59, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 0, 1],
		correction: [12, 59, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 0, 2],
		correction: [12, 59, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 0, 300],
		correction: [12, 59, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 0, 500],
		correction: [12, 59, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 0, 998],
		correction: [12, 59, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 0, 999],
		correction: [12, 59, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 0, 1000],
		correction: [12, 59, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 0, 1001],
		correction: [12, 59, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 1, 0],
		correction: [12, 59, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 1, 1],
		correction: [12, 59, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 1, 2],
		correction: [12, 59, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 1, 300],
		correction: [12, 59, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 1, 500],
		correction: [12, 59, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 1, 998],
		correction: [12, 59, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 1, 999],
		correction: [12, 59, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 1, 1000],
		correction: [12, 59, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 1, 1001],
		correction: [12, 59, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 2, 0],
		correction: [12, 59, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 2, 1],
		correction: [12, 59, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 2, 2],
		correction: [12, 59, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 2, 300],
		correction: [12, 59, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 2, 500],
		correction: [12, 59, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 2, 998],
		correction: [12, 59, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 2, 999],
		correction: [12, 59, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 2, 1000],
		correction: [12, 59, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 2, 1001],
		correction: [12, 59, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 20, 0],
		correction: [12, 59, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 20, 1],
		correction: [12, 59, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 20, 2],
		correction: [12, 59, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 20, 300],
		correction: [12, 59, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 20, 500],
		correction: [12, 59, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 20, 998],
		correction: [12, 59, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 20, 999],
		correction: [12, 59, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 20, 1000],
		correction: [12, 59, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 20, 1001],
		correction: [12, 59, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 59, 0],
		correction: [12, 59, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 59, 1],
		correction: [12, 59, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 59, 2],
		correction: [12, 59, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 59, 300],
		correction: [12, 59, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 59, 500],
		correction: [12, 59, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 59, 998],
		correction: [12, 59, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 59, 999],
		correction: [12, 59, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [12, 59, 59, 1000],
		correction: [13, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 59, 1001],
		correction: [13, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 0],
		correction: [13, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 1],
		correction: [13, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 2],
		correction: [13, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 300],
		correction: [13, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 500],
		correction: [13, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 998],
		correction: [13, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 999],
		correction: [13, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 1000],
		correction: [13, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 60, 1001],
		correction: [13, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 0],
		correction: [13, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 1],
		correction: [13, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 2],
		correction: [13, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 300],
		correction: [13, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 500],
		correction: [13, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 998],
		correction: [13, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 999],
		correction: [13, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 1000],
		correction: [13, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 59, 61, 1001],
		correction: [13, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 0],
		correction: [13, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 1],
		correction: [13, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 2],
		correction: [13, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 300],
		correction: [13, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 500],
		correction: [13, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 998],
		correction: [13, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 999],
		correction: [13, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 1000],
		correction: [13, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 0, 1001],
		correction: [13, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 0],
		correction: [13, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 1],
		correction: [13, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 2],
		correction: [13, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 300],
		correction: [13, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 500],
		correction: [13, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 998],
		correction: [13, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 999],
		correction: [13, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 1000],
		correction: [13, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 1, 1001],
		correction: [13, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 0],
		correction: [13, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 1],
		correction: [13, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 2],
		correction: [13, 0, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 300],
		correction: [13, 0, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 500],
		correction: [13, 0, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 998],
		correction: [13, 0, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 999],
		correction: [13, 0, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 1000],
		correction: [13, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 2, 1001],
		correction: [13, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 0],
		correction: [13, 0, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 1],
		correction: [13, 0, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 2],
		correction: [13, 0, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 300],
		correction: [13, 0, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 500],
		correction: [13, 0, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 998],
		correction: [13, 0, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 999],
		correction: [13, 0, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 1000],
		correction: [13, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 20, 1001],
		correction: [13, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 0],
		correction: [13, 0, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 1],
		correction: [13, 0, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 2],
		correction: [13, 0, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 300],
		correction: [13, 0, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 500],
		correction: [13, 0, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 998],
		correction: [13, 0, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 999],
		correction: [13, 0, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 1000],
		correction: [13, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 59, 1001],
		correction: [13, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 0],
		correction: [13, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 1],
		correction: [13, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 2],
		correction: [13, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 300],
		correction: [13, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 500],
		correction: [13, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 998],
		correction: [13, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 999],
		correction: [13, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 1000],
		correction: [13, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 60, 1001],
		correction: [13, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 0],
		correction: [13, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 1],
		correction: [13, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 2],
		correction: [13, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 300],
		correction: [13, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 500],
		correction: [13, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 998],
		correction: [13, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 999],
		correction: [13, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 1000],
		correction: [13, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 60, 61, 1001],
		correction: [13, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 0],
		correction: [13, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 1],
		correction: [13, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 2],
		correction: [13, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 300],
		correction: [13, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 500],
		correction: [13, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 998],
		correction: [13, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 999],
		correction: [13, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 1000],
		correction: [13, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 0, 1001],
		correction: [13, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 0],
		correction: [13, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 1],
		correction: [13, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 2],
		correction: [13, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 300],
		correction: [13, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 500],
		correction: [13, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 998],
		correction: [13, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 999],
		correction: [13, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 1000],
		correction: [13, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 1, 1001],
		correction: [13, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 0],
		correction: [13, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 1],
		correction: [13, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 2],
		correction: [13, 1, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 300],
		correction: [13, 1, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 500],
		correction: [13, 1, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 998],
		correction: [13, 1, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 999],
		correction: [13, 1, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 1000],
		correction: [13, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 2, 1001],
		correction: [13, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 0],
		correction: [13, 1, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 1],
		correction: [13, 1, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 2],
		correction: [13, 1, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 300],
		correction: [13, 1, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 500],
		correction: [13, 1, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 998],
		correction: [13, 1, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 999],
		correction: [13, 1, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 1000],
		correction: [13, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 20, 1001],
		correction: [13, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 0],
		correction: [13, 1, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 1],
		correction: [13, 1, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 2],
		correction: [13, 1, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 300],
		correction: [13, 1, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 500],
		correction: [13, 1, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 998],
		correction: [13, 1, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 999],
		correction: [13, 1, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 1000],
		correction: [13, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 59, 1001],
		correction: [13, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 0],
		correction: [13, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 1],
		correction: [13, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 2],
		correction: [13, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 300],
		correction: [13, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 500],
		correction: [13, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 998],
		correction: [13, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 999],
		correction: [13, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 1000],
		correction: [13, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 60, 1001],
		correction: [13, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 0],
		correction: [13, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 1],
		correction: [13, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 2],
		correction: [13, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 300],
		correction: [13, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 500],
		correction: [13, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 998],
		correction: [13, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 999],
		correction: [13, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 1000],
		correction: [13, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [12, 61, 61, 1001],
		correction: [13, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 0, 0],
		correction: [13, 0, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 0, 1],
		correction: [13, 0, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 0, 2],
		correction: [13, 0, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 0, 300],
		correction: [13, 0, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 0, 500],
		correction: [13, 0, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 0, 998],
		correction: [13, 0, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 0, 999],
		correction: [13, 0, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 0, 1000],
		correction: [13, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 0, 1001],
		correction: [13, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 1, 0],
		correction: [13, 0, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 1, 1],
		correction: [13, 0, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 1, 2],
		correction: [13, 0, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 1, 300],
		correction: [13, 0, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 1, 500],
		correction: [13, 0, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 1, 998],
		correction: [13, 0, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 1, 999],
		correction: [13, 0, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 1, 1000],
		correction: [13, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 1, 1001],
		correction: [13, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 2, 0],
		correction: [13, 0, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 2, 1],
		correction: [13, 0, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 2, 2],
		correction: [13, 0, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 2, 300],
		correction: [13, 0, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 2, 500],
		correction: [13, 0, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 2, 998],
		correction: [13, 0, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 2, 999],
		correction: [13, 0, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 2, 1000],
		correction: [13, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 2, 1001],
		correction: [13, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 20, 0],
		correction: [13, 0, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 20, 1],
		correction: [13, 0, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 20, 2],
		correction: [13, 0, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 20, 300],
		correction: [13, 0, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 20, 500],
		correction: [13, 0, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 20, 998],
		correction: [13, 0, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 20, 999],
		correction: [13, 0, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 20, 1000],
		correction: [13, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 20, 1001],
		correction: [13, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 59, 0],
		correction: [13, 0, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 59, 1],
		correction: [13, 0, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 59, 2],
		correction: [13, 0, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 59, 300],
		correction: [13, 0, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 59, 500],
		correction: [13, 0, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 59, 998],
		correction: [13, 0, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 59, 999],
		correction: [13, 0, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 0, 59, 1000],
		correction: [13, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 59, 1001],
		correction: [13, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 0],
		correction: [13, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 1],
		correction: [13, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 2],
		correction: [13, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 300],
		correction: [13, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 500],
		correction: [13, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 998],
		correction: [13, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 999],
		correction: [13, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 1000],
		correction: [13, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 60, 1001],
		correction: [13, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 0],
		correction: [13, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 1],
		correction: [13, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 2],
		correction: [13, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 300],
		correction: [13, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 500],
		correction: [13, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 998],
		correction: [13, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 999],
		correction: [13, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 1000],
		correction: [13, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 0, 61, 1001],
		correction: [13, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 0, 0],
		correction: [13, 1, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 0, 1],
		correction: [13, 1, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 0, 2],
		correction: [13, 1, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 0, 300],
		correction: [13, 1, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 0, 500],
		correction: [13, 1, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 0, 998],
		correction: [13, 1, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 0, 999],
		correction: [13, 1, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 0, 1000],
		correction: [13, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 0, 1001],
		correction: [13, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 1, 0],
		correction: [13, 1, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 1, 1],
		correction: [13, 1, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 1, 2],
		correction: [13, 1, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 1, 300],
		correction: [13, 1, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 1, 500],
		correction: [13, 1, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 1, 998],
		correction: [13, 1, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 1, 999],
		correction: [13, 1, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 1, 1000],
		correction: [13, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 1, 1001],
		correction: [13, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 2, 0],
		correction: [13, 1, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 2, 1],
		correction: [13, 1, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 2, 2],
		correction: [13, 1, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 2, 300],
		correction: [13, 1, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 2, 500],
		correction: [13, 1, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 2, 998],
		correction: [13, 1, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 2, 999],
		correction: [13, 1, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 2, 1000],
		correction: [13, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 2, 1001],
		correction: [13, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 20, 0],
		correction: [13, 1, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 20, 1],
		correction: [13, 1, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 20, 2],
		correction: [13, 1, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 20, 300],
		correction: [13, 1, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 20, 500],
		correction: [13, 1, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 20, 998],
		correction: [13, 1, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 20, 999],
		correction: [13, 1, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 20, 1000],
		correction: [13, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 20, 1001],
		correction: [13, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 59, 0],
		correction: [13, 1, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 59, 1],
		correction: [13, 1, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 59, 2],
		correction: [13, 1, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 59, 300],
		correction: [13, 1, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 59, 500],
		correction: [13, 1, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 59, 998],
		correction: [13, 1, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 59, 999],
		correction: [13, 1, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 1, 59, 1000],
		correction: [13, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 59, 1001],
		correction: [13, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 0],
		correction: [13, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 1],
		correction: [13, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 2],
		correction: [13, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 300],
		correction: [13, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 500],
		correction: [13, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 998],
		correction: [13, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 999],
		correction: [13, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 1000],
		correction: [13, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 60, 1001],
		correction: [13, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 0],
		correction: [13, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 1],
		correction: [13, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 2],
		correction: [13, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 300],
		correction: [13, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 500],
		correction: [13, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 998],
		correction: [13, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 999],
		correction: [13, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 1000],
		correction: [13, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 1, 61, 1001],
		correction: [13, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 0, 0],
		correction: [13, 2, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 0, 1],
		correction: [13, 2, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 0, 2],
		correction: [13, 2, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 0, 300],
		correction: [13, 2, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 0, 500],
		correction: [13, 2, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 0, 998],
		correction: [13, 2, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 0, 999],
		correction: [13, 2, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 0, 1000],
		correction: [13, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 0, 1001],
		correction: [13, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 1, 0],
		correction: [13, 2, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 1, 1],
		correction: [13, 2, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 1, 2],
		correction: [13, 2, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 1, 300],
		correction: [13, 2, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 1, 500],
		correction: [13, 2, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 1, 998],
		correction: [13, 2, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 1, 999],
		correction: [13, 2, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 1, 1000],
		correction: [13, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 1, 1001],
		correction: [13, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 2, 0],
		correction: [13, 2, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 2, 1],
		correction: [13, 2, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 2, 2],
		correction: [13, 2, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 2, 300],
		correction: [13, 2, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 2, 500],
		correction: [13, 2, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 2, 998],
		correction: [13, 2, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 2, 999],
		correction: [13, 2, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 2, 1000],
		correction: [13, 2, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 2, 1001],
		correction: [13, 2, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 20, 0],
		correction: [13, 2, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 20, 1],
		correction: [13, 2, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 20, 2],
		correction: [13, 2, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 20, 300],
		correction: [13, 2, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 20, 500],
		correction: [13, 2, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 20, 998],
		correction: [13, 2, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 20, 999],
		correction: [13, 2, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 20, 1000],
		correction: [13, 2, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 20, 1001],
		correction: [13, 2, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 59, 0],
		correction: [13, 2, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 59, 1],
		correction: [13, 2, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 59, 2],
		correction: [13, 2, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 59, 300],
		correction: [13, 2, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 59, 500],
		correction: [13, 2, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 59, 998],
		correction: [13, 2, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 59, 999],
		correction: [13, 2, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 2, 59, 1000],
		correction: [13, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 59, 1001],
		correction: [13, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 0],
		correction: [13, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 1],
		correction: [13, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 2],
		correction: [13, 3, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 300],
		correction: [13, 3, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 500],
		correction: [13, 3, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 998],
		correction: [13, 3, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 999],
		correction: [13, 3, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 1000],
		correction: [13, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 60, 1001],
		correction: [13, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 0],
		correction: [13, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 1],
		correction: [13, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 2],
		correction: [13, 3, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 300],
		correction: [13, 3, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 500],
		correction: [13, 3, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 998],
		correction: [13, 3, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 999],
		correction: [13, 3, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 1000],
		correction: [13, 3, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 2, 61, 1001],
		correction: [13, 3, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 0, 0],
		correction: [13, 20, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 0, 1],
		correction: [13, 20, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 0, 2],
		correction: [13, 20, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 0, 300],
		correction: [13, 20, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 0, 500],
		correction: [13, 20, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 0, 998],
		correction: [13, 20, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 0, 999],
		correction: [13, 20, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 0, 1000],
		correction: [13, 20, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 0, 1001],
		correction: [13, 20, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 1, 0],
		correction: [13, 20, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 1, 1],
		correction: [13, 20, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 1, 2],
		correction: [13, 20, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 1, 300],
		correction: [13, 20, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 1, 500],
		correction: [13, 20, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 1, 998],
		correction: [13, 20, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 1, 999],
		correction: [13, 20, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 1, 1000],
		correction: [13, 20, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 1, 1001],
		correction: [13, 20, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 2, 0],
		correction: [13, 20, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 2, 1],
		correction: [13, 20, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 2, 2],
		correction: [13, 20, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 2, 300],
		correction: [13, 20, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 2, 500],
		correction: [13, 20, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 2, 998],
		correction: [13, 20, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 2, 999],
		correction: [13, 20, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 2, 1000],
		correction: [13, 20, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 2, 1001],
		correction: [13, 20, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 20, 0],
		correction: [13, 20, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 20, 1],
		correction: [13, 20, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 20, 2],
		correction: [13, 20, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 20, 300],
		correction: [13, 20, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 20, 500],
		correction: [13, 20, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 20, 998],
		correction: [13, 20, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 20, 999],
		correction: [13, 20, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 20, 1000],
		correction: [13, 20, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 20, 1001],
		correction: [13, 20, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 59, 0],
		correction: [13, 20, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 59, 1],
		correction: [13, 20, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 59, 2],
		correction: [13, 20, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 59, 300],
		correction: [13, 20, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 59, 500],
		correction: [13, 20, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 59, 998],
		correction: [13, 20, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 59, 999],
		correction: [13, 20, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 20, 59, 1000],
		correction: [13, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 59, 1001],
		correction: [13, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 0],
		correction: [13, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 1],
		correction: [13, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 2],
		correction: [13, 21, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 300],
		correction: [13, 21, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 500],
		correction: [13, 21, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 998],
		correction: [13, 21, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 999],
		correction: [13, 21, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 1000],
		correction: [13, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 60, 1001],
		correction: [13, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 0],
		correction: [13, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 1],
		correction: [13, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 2],
		correction: [13, 21, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 300],
		correction: [13, 21, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 500],
		correction: [13, 21, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 998],
		correction: [13, 21, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 999],
		correction: [13, 21, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 1000],
		correction: [13, 21, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 20, 61, 1001],
		correction: [13, 21, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 0, 0],
		correction: [13, 59, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 0, 1],
		correction: [13, 59, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 0, 2],
		correction: [13, 59, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 0, 300],
		correction: [13, 59, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 0, 500],
		correction: [13, 59, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 0, 998],
		correction: [13, 59, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 0, 999],
		correction: [13, 59, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 0, 1000],
		correction: [13, 59, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 0, 1001],
		correction: [13, 59, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 1, 0],
		correction: [13, 59, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 1, 1],
		correction: [13, 59, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 1, 2],
		correction: [13, 59, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 1, 300],
		correction: [13, 59, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 1, 500],
		correction: [13, 59, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 1, 998],
		correction: [13, 59, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 1, 999],
		correction: [13, 59, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 1, 1000],
		correction: [13, 59, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 1, 1001],
		correction: [13, 59, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 2, 0],
		correction: [13, 59, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 2, 1],
		correction: [13, 59, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 2, 2],
		correction: [13, 59, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 2, 300],
		correction: [13, 59, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 2, 500],
		correction: [13, 59, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 2, 998],
		correction: [13, 59, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 2, 999],
		correction: [13, 59, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 2, 1000],
		correction: [13, 59, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 2, 1001],
		correction: [13, 59, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 20, 0],
		correction: [13, 59, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 20, 1],
		correction: [13, 59, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 20, 2],
		correction: [13, 59, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 20, 300],
		correction: [13, 59, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 20, 500],
		correction: [13, 59, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 20, 998],
		correction: [13, 59, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 20, 999],
		correction: [13, 59, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 20, 1000],
		correction: [13, 59, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 20, 1001],
		correction: [13, 59, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 59, 0],
		correction: [13, 59, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 59, 1],
		correction: [13, 59, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 59, 2],
		correction: [13, 59, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 59, 300],
		correction: [13, 59, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 59, 500],
		correction: [13, 59, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 59, 998],
		correction: [13, 59, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 59, 999],
		correction: [13, 59, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [13, 59, 59, 1000],
		correction: [14, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 59, 1001],
		correction: [14, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 0],
		correction: [14, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 1],
		correction: [14, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 2],
		correction: [14, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 300],
		correction: [14, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 500],
		correction: [14, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 998],
		correction: [14, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 999],
		correction: [14, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 1000],
		correction: [14, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 60, 1001],
		correction: [14, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 0],
		correction: [14, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 1],
		correction: [14, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 2],
		correction: [14, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 300],
		correction: [14, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 500],
		correction: [14, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 998],
		correction: [14, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 999],
		correction: [14, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 1000],
		correction: [14, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 59, 61, 1001],
		correction: [14, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 0],
		correction: [14, 0, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 1],
		correction: [14, 0, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 2],
		correction: [14, 0, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 300],
		correction: [14, 0, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 500],
		correction: [14, 0, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 998],
		correction: [14, 0, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 999],
		correction: [14, 0, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 1000],
		correction: [14, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 0, 1001],
		correction: [14, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 0],
		correction: [14, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 1],
		correction: [14, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 2],
		correction: [14, 0, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 300],
		correction: [14, 0, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 500],
		correction: [14, 0, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 998],
		correction: [14, 0, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 999],
		correction: [14, 0, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 1000],
		correction: [14, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 1, 1001],
		correction: [14, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 0],
		correction: [14, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 1],
		correction: [14, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 2],
		correction: [14, 0, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 300],
		correction: [14, 0, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 500],
		correction: [14, 0, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 998],
		correction: [14, 0, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 999],
		correction: [14, 0, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 1000],
		correction: [14, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 2, 1001],
		correction: [14, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 0],
		correction: [14, 0, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 1],
		correction: [14, 0, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 2],
		correction: [14, 0, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 300],
		correction: [14, 0, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 500],
		correction: [14, 0, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 998],
		correction: [14, 0, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 999],
		correction: [14, 0, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 1000],
		correction: [14, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 20, 1001],
		correction: [14, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 0],
		correction: [14, 0, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 1],
		correction: [14, 0, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 2],
		correction: [14, 0, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 300],
		correction: [14, 0, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 500],
		correction: [14, 0, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 998],
		correction: [14, 0, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 999],
		correction: [14, 0, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 1000],
		correction: [14, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 59, 1001],
		correction: [14, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 0],
		correction: [14, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 1],
		correction: [14, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 2],
		correction: [14, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 300],
		correction: [14, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 500],
		correction: [14, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 998],
		correction: [14, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 999],
		correction: [14, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 1000],
		correction: [14, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 60, 1001],
		correction: [14, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 0],
		correction: [14, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 1],
		correction: [14, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 2],
		correction: [14, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 300],
		correction: [14, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 500],
		correction: [14, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 998],
		correction: [14, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 999],
		correction: [14, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 1000],
		correction: [14, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 60, 61, 1001],
		correction: [14, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 0],
		correction: [14, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 1],
		correction: [14, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 2],
		correction: [14, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 300],
		correction: [14, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 500],
		correction: [14, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 998],
		correction: [14, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 999],
		correction: [14, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 1000],
		correction: [14, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 0, 1001],
		correction: [14, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 0],
		correction: [14, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 1],
		correction: [14, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 2],
		correction: [14, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 300],
		correction: [14, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 500],
		correction: [14, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 998],
		correction: [14, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 999],
		correction: [14, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 1000],
		correction: [14, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 1, 1001],
		correction: [14, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 0],
		correction: [14, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 1],
		correction: [14, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 2],
		correction: [14, 1, 2, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 300],
		correction: [14, 1, 2, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 500],
		correction: [14, 1, 2, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 998],
		correction: [14, 1, 2, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 999],
		correction: [14, 1, 2, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 1000],
		correction: [14, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 2, 1001],
		correction: [14, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 0],
		correction: [14, 1, 20, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 1],
		correction: [14, 1, 20, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 2],
		correction: [14, 1, 20, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 300],
		correction: [14, 1, 20, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 500],
		correction: [14, 1, 20, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 998],
		correction: [14, 1, 20, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 999],
		correction: [14, 1, 20, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 1000],
		correction: [14, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 20, 1001],
		correction: [14, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 0],
		correction: [14, 1, 59, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 1],
		correction: [14, 1, 59, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 2],
		correction: [14, 1, 59, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 300],
		correction: [14, 1, 59, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 500],
		correction: [14, 1, 59, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 998],
		correction: [14, 1, 59, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 999],
		correction: [14, 1, 59, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 1000],
		correction: [14, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 59, 1001],
		correction: [14, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 0],
		correction: [14, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 1],
		correction: [14, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 2],
		correction: [14, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 300],
		correction: [14, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 500],
		correction: [14, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 998],
		correction: [14, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 999],
		correction: [14, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 1000],
		correction: [14, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 60, 1001],
		correction: [14, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 0],
		correction: [14, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 1],
		correction: [14, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 2],
		correction: [14, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 300],
		correction: [14, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 500],
		correction: [14, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 998],
		correction: [14, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 999],
		correction: [14, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 1000],
		correction: [14, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [13, 61, 61, 1001],
		correction: [14, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 0, 0],
		correction: [23, 0, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 0, 1],
		correction: [23, 0, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 0, 2],
		correction: [23, 0, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 0, 300],
		correction: [23, 0, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 0, 500],
		correction: [23, 0, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 0, 998],
		correction: [23, 0, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 0, 999],
		correction: [23, 0, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 0, 1000],
		correction: [23, 0, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 0, 1001],
		correction: [23, 0, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 1, 0],
		correction: [23, 0, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 1, 1],
		correction: [23, 0, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 1, 2],
		correction: [23, 0, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 1, 300],
		correction: [23, 0, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 1, 500],
		correction: [23, 0, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 1, 998],
		correction: [23, 0, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 1, 999],
		correction: [23, 0, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 1, 1000],
		correction: [23, 0, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 1, 1001],
		correction: [23, 0, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 2, 0],
		correction: [23, 0, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 2, 1],
		correction: [23, 0, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 2, 2],
		correction: [23, 0, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 2, 300],
		correction: [23, 0, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 2, 500],
		correction: [23, 0, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 2, 998],
		correction: [23, 0, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 2, 999],
		correction: [23, 0, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 2, 1000],
		correction: [23, 0, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 2, 1001],
		correction: [23, 0, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 20, 0],
		correction: [23, 0, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 20, 1],
		correction: [23, 0, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 20, 2],
		correction: [23, 0, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 20, 300],
		correction: [23, 0, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 20, 500],
		correction: [23, 0, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 20, 998],
		correction: [23, 0, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 20, 999],
		correction: [23, 0, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 20, 1000],
		correction: [23, 0, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 20, 1001],
		correction: [23, 0, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 59, 0],
		correction: [23, 0, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 59, 1],
		correction: [23, 0, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 59, 2],
		correction: [23, 0, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 59, 300],
		correction: [23, 0, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 59, 500],
		correction: [23, 0, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 59, 998],
		correction: [23, 0, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 59, 999],
		correction: [23, 0, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 0, 59, 1000],
		correction: [23, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 59, 1001],
		correction: [23, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 0],
		correction: [23, 1, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 1],
		correction: [23, 1, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 2],
		correction: [23, 1, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 300],
		correction: [23, 1, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 500],
		correction: [23, 1, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 998],
		correction: [23, 1, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 999],
		correction: [23, 1, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 1000],
		correction: [23, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 60, 1001],
		correction: [23, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 0],
		correction: [23, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 1],
		correction: [23, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 2],
		correction: [23, 1, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 300],
		correction: [23, 1, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 500],
		correction: [23, 1, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 998],
		correction: [23, 1, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 999],
		correction: [23, 1, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 1000],
		correction: [23, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 0, 61, 1001],
		correction: [23, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 0, 0],
		correction: [23, 1, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 0, 1],
		correction: [23, 1, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 0, 2],
		correction: [23, 1, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 0, 300],
		correction: [23, 1, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 0, 500],
		correction: [23, 1, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 0, 998],
		correction: [23, 1, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 0, 999],
		correction: [23, 1, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 0, 1000],
		correction: [23, 1, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 0, 1001],
		correction: [23, 1, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 1, 0],
		correction: [23, 1, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 1, 1],
		correction: [23, 1, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 1, 2],
		correction: [23, 1, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 1, 300],
		correction: [23, 1, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 1, 500],
		correction: [23, 1, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 1, 998],
		correction: [23, 1, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 1, 999],
		correction: [23, 1, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 1, 1000],
		correction: [23, 1, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 1, 1001],
		correction: [23, 1, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 2, 0],
		correction: [23, 1, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 2, 1],
		correction: [23, 1, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 2, 2],
		correction: [23, 1, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 2, 300],
		correction: [23, 1, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 2, 500],
		correction: [23, 1, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 2, 998],
		correction: [23, 1, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 2, 999],
		correction: [23, 1, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 2, 1000],
		correction: [23, 1, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 2, 1001],
		correction: [23, 1, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 20, 0],
		correction: [23, 1, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 20, 1],
		correction: [23, 1, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 20, 2],
		correction: [23, 1, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 20, 300],
		correction: [23, 1, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 20, 500],
		correction: [23, 1, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 20, 998],
		correction: [23, 1, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 20, 999],
		correction: [23, 1, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 20, 1000],
		correction: [23, 1, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 20, 1001],
		correction: [23, 1, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 59, 0],
		correction: [23, 1, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 59, 1],
		correction: [23, 1, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 59, 2],
		correction: [23, 1, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 59, 300],
		correction: [23, 1, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 59, 500],
		correction: [23, 1, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 59, 998],
		correction: [23, 1, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 59, 999],
		correction: [23, 1, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 1, 59, 1000],
		correction: [23, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 59, 1001],
		correction: [23, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 0],
		correction: [23, 2, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 1],
		correction: [23, 2, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 2],
		correction: [23, 2, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 300],
		correction: [23, 2, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 500],
		correction: [23, 2, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 998],
		correction: [23, 2, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 999],
		correction: [23, 2, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 1000],
		correction: [23, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 60, 1001],
		correction: [23, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 0],
		correction: [23, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 1],
		correction: [23, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 2],
		correction: [23, 2, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 300],
		correction: [23, 2, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 500],
		correction: [23, 2, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 998],
		correction: [23, 2, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 999],
		correction: [23, 2, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 1000],
		correction: [23, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 1, 61, 1001],
		correction: [23, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 0, 0],
		correction: [23, 2, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 0, 1],
		correction: [23, 2, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 0, 2],
		correction: [23, 2, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 0, 300],
		correction: [23, 2, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 0, 500],
		correction: [23, 2, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 0, 998],
		correction: [23, 2, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 0, 999],
		correction: [23, 2, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 0, 1000],
		correction: [23, 2, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 0, 1001],
		correction: [23, 2, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 1, 0],
		correction: [23, 2, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 1, 1],
		correction: [23, 2, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 1, 2],
		correction: [23, 2, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 1, 300],
		correction: [23, 2, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 1, 500],
		correction: [23, 2, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 1, 998],
		correction: [23, 2, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 1, 999],
		correction: [23, 2, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 1, 1000],
		correction: [23, 2, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 1, 1001],
		correction: [23, 2, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 2, 0],
		correction: [23, 2, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 2, 1],
		correction: [23, 2, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 2, 2],
		correction: [23, 2, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 2, 300],
		correction: [23, 2, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 2, 500],
		correction: [23, 2, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 2, 998],
		correction: [23, 2, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 2, 999],
		correction: [23, 2, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 2, 1000],
		correction: [23, 2, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 2, 1001],
		correction: [23, 2, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 20, 0],
		correction: [23, 2, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 20, 1],
		correction: [23, 2, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 20, 2],
		correction: [23, 2, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 20, 300],
		correction: [23, 2, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 20, 500],
		correction: [23, 2, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 20, 998],
		correction: [23, 2, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 20, 999],
		correction: [23, 2, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 20, 1000],
		correction: [23, 2, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 20, 1001],
		correction: [23, 2, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 59, 0],
		correction: [23, 2, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 59, 1],
		correction: [23, 2, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 59, 2],
		correction: [23, 2, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 59, 300],
		correction: [23, 2, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 59, 500],
		correction: [23, 2, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 59, 998],
		correction: [23, 2, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 59, 999],
		correction: [23, 2, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 2, 59, 1000],
		correction: [23, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 59, 1001],
		correction: [23, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 0],
		correction: [23, 3, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 1],
		correction: [23, 3, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 2],
		correction: [23, 3, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 300],
		correction: [23, 3, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 500],
		correction: [23, 3, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 998],
		correction: [23, 3, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 999],
		correction: [23, 3, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 1000],
		correction: [23, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 60, 1001],
		correction: [23, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 0],
		correction: [23, 3, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 1],
		correction: [23, 3, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 2],
		correction: [23, 3, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 300],
		correction: [23, 3, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 500],
		correction: [23, 3, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 998],
		correction: [23, 3, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 999],
		correction: [23, 3, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 1000],
		correction: [23, 3, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 2, 61, 1001],
		correction: [23, 3, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 0, 0],
		correction: [23, 20, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 0, 1],
		correction: [23, 20, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 0, 2],
		correction: [23, 20, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 0, 300],
		correction: [23, 20, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 0, 500],
		correction: [23, 20, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 0, 998],
		correction: [23, 20, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 0, 999],
		correction: [23, 20, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 0, 1000],
		correction: [23, 20, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 0, 1001],
		correction: [23, 20, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 1, 0],
		correction: [23, 20, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 1, 1],
		correction: [23, 20, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 1, 2],
		correction: [23, 20, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 1, 300],
		correction: [23, 20, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 1, 500],
		correction: [23, 20, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 1, 998],
		correction: [23, 20, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 1, 999],
		correction: [23, 20, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 1, 1000],
		correction: [23, 20, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 1, 1001],
		correction: [23, 20, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 2, 0],
		correction: [23, 20, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 2, 1],
		correction: [23, 20, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 2, 2],
		correction: [23, 20, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 2, 300],
		correction: [23, 20, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 2, 500],
		correction: [23, 20, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 2, 998],
		correction: [23, 20, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 2, 999],
		correction: [23, 20, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 2, 1000],
		correction: [23, 20, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 2, 1001],
		correction: [23, 20, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 20, 0],
		correction: [23, 20, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 20, 1],
		correction: [23, 20, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 20, 2],
		correction: [23, 20, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 20, 300],
		correction: [23, 20, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 20, 500],
		correction: [23, 20, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 20, 998],
		correction: [23, 20, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 20, 999],
		correction: [23, 20, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 20, 1000],
		correction: [23, 20, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 20, 1001],
		correction: [23, 20, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 59, 0],
		correction: [23, 20, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 59, 1],
		correction: [23, 20, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 59, 2],
		correction: [23, 20, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 59, 300],
		correction: [23, 20, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 59, 500],
		correction: [23, 20, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 59, 998],
		correction: [23, 20, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 59, 999],
		correction: [23, 20, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 20, 59, 1000],
		correction: [23, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 59, 1001],
		correction: [23, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 0],
		correction: [23, 21, 0, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 1],
		correction: [23, 21, 0, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 2],
		correction: [23, 21, 0, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 300],
		correction: [23, 21, 0, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 500],
		correction: [23, 21, 0, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 998],
		correction: [23, 21, 0, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 999],
		correction: [23, 21, 0, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 1000],
		correction: [23, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 60, 1001],
		correction: [23, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 0],
		correction: [23, 21, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 1],
		correction: [23, 21, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 2],
		correction: [23, 21, 1, 2, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 300],
		correction: [23, 21, 1, 300, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 500],
		correction: [23, 21, 1, 500, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 998],
		correction: [23, 21, 1, 998, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 999],
		correction: [23, 21, 1, 999, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 1000],
		correction: [23, 21, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 20, 61, 1001],
		correction: [23, 21, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 0, 0],
		correction: [23, 59, 0, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 0, 1],
		correction: [23, 59, 0, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 0, 2],
		correction: [23, 59, 0, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 0, 300],
		correction: [23, 59, 0, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 0, 500],
		correction: [23, 59, 0, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 0, 998],
		correction: [23, 59, 0, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 0, 999],
		correction: [23, 59, 0, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 0, 1000],
		correction: [23, 59, 1, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 0, 1001],
		correction: [23, 59, 1, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 1, 0],
		correction: [23, 59, 1, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 1, 1],
		correction: [23, 59, 1, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 1, 2],
		correction: [23, 59, 1, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 1, 300],
		correction: [23, 59, 1, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 1, 500],
		correction: [23, 59, 1, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 1, 998],
		correction: [23, 59, 1, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 1, 999],
		correction: [23, 59, 1, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 1, 1000],
		correction: [23, 59, 2, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 1, 1001],
		correction: [23, 59, 2, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 2, 0],
		correction: [23, 59, 2, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 2, 1],
		correction: [23, 59, 2, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 2, 2],
		correction: [23, 59, 2, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 2, 300],
		correction: [23, 59, 2, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 2, 500],
		correction: [23, 59, 2, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 2, 998],
		correction: [23, 59, 2, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 2, 999],
		correction: [23, 59, 2, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 2, 1000],
		correction: [23, 59, 3, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 2, 1001],
		correction: [23, 59, 3, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 20, 0],
		correction: [23, 59, 20, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 20, 1],
		correction: [23, 59, 20, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 20, 2],
		correction: [23, 59, 20, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 20, 300],
		correction: [23, 59, 20, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 20, 500],
		correction: [23, 59, 20, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 20, 998],
		correction: [23, 59, 20, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 20, 999],
		correction: [23, 59, 20, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 20, 1000],
		correction: [23, 59, 21, 0, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 20, 1001],
		correction: [23, 59, 21, 1, 0],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 59, 0],
		correction: [23, 59, 59, 0, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 59, 1],
		correction: [23, 59, 59, 1, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 59, 2],
		correction: [23, 59, 59, 2, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 59, 300],
		correction: [23, 59, 59, 300, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 59, 500],
		correction: [23, 59, 59, 500, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 59, 998],
		correction: [23, 59, 59, 998, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 59, 999],
		correction: [23, 59, 59, 999, 0],
		check24: true,
		check12: false
	},
	{
		time: [23, 59, 59, 1000],
		correction: [0, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 59, 1001],
		correction: [0, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 0],
		correction: [0, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 1],
		correction: [0, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 2],
		correction: [0, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 300],
		correction: [0, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 500],
		correction: [0, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 998],
		correction: [0, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 999],
		correction: [0, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 1000],
		correction: [0, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 60, 1001],
		correction: [0, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 0],
		correction: [0, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 1],
		correction: [0, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 2],
		correction: [0, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 300],
		correction: [0, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 500],
		correction: [0, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 998],
		correction: [0, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 999],
		correction: [0, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 1000],
		correction: [0, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 59, 61, 1001],
		correction: [0, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 0],
		correction: [0, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 1],
		correction: [0, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 2],
		correction: [0, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 300],
		correction: [0, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 500],
		correction: [0, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 998],
		correction: [0, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 999],
		correction: [0, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 1000],
		correction: [0, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 0, 1001],
		correction: [0, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 0],
		correction: [0, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 1],
		correction: [0, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 2],
		correction: [0, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 300],
		correction: [0, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 500],
		correction: [0, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 998],
		correction: [0, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 999],
		correction: [0, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 1000],
		correction: [0, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 1, 1001],
		correction: [0, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 0],
		correction: [0, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 1],
		correction: [0, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 2],
		correction: [0, 0, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 300],
		correction: [0, 0, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 500],
		correction: [0, 0, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 998],
		correction: [0, 0, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 999],
		correction: [0, 0, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 1000],
		correction: [0, 0, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 2, 1001],
		correction: [0, 0, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 0],
		correction: [0, 0, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 1],
		correction: [0, 0, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 2],
		correction: [0, 0, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 300],
		correction: [0, 0, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 500],
		correction: [0, 0, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 998],
		correction: [0, 0, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 999],
		correction: [0, 0, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 1000],
		correction: [0, 0, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 20, 1001],
		correction: [0, 0, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 0],
		correction: [0, 0, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 1],
		correction: [0, 0, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 2],
		correction: [0, 0, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 300],
		correction: [0, 0, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 500],
		correction: [0, 0, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 998],
		correction: [0, 0, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 999],
		correction: [0, 0, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 1000],
		correction: [0, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 59, 1001],
		correction: [0, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 0],
		correction: [0, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 1],
		correction: [0, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 2],
		correction: [0, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 300],
		correction: [0, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 500],
		correction: [0, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 998],
		correction: [0, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 999],
		correction: [0, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 1000],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 60, 1001],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 0],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 1],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 2],
		correction: [0, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 300],
		correction: [0, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 500],
		correction: [0, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 998],
		correction: [0, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 999],
		correction: [0, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 1000],
		correction: [0, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 60, 61, 1001],
		correction: [0, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 0],
		correction: [0, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 1],
		correction: [0, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 2],
		correction: [0, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 300],
		correction: [0, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 500],
		correction: [0, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 998],
		correction: [0, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 999],
		correction: [0, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 1000],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 0, 1001],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 0],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 1],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 2],
		correction: [0, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 300],
		correction: [0, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 500],
		correction: [0, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 998],
		correction: [0, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 999],
		correction: [0, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 1000],
		correction: [0, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 1, 1001],
		correction: [0, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 0],
		correction: [0, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 1],
		correction: [0, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 2],
		correction: [0, 1, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 300],
		correction: [0, 1, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 500],
		correction: [0, 1, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 998],
		correction: [0, 1, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 999],
		correction: [0, 1, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 1000],
		correction: [0, 1, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 2, 1001],
		correction: [0, 1, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 0],
		correction: [0, 1, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 1],
		correction: [0, 1, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 2],
		correction: [0, 1, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 300],
		correction: [0, 1, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 500],
		correction: [0, 1, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 998],
		correction: [0, 1, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 999],
		correction: [0, 1, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 1000],
		correction: [0, 1, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 20, 1001],
		correction: [0, 1, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 0],
		correction: [0, 1, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 1],
		correction: [0, 1, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 2],
		correction: [0, 1, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 300],
		correction: [0, 1, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 500],
		correction: [0, 1, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 998],
		correction: [0, 1, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 999],
		correction: [0, 1, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 1000],
		correction: [0, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 59, 1001],
		correction: [0, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 0],
		correction: [0, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 1],
		correction: [0, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 2],
		correction: [0, 2, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 300],
		correction: [0, 2, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 500],
		correction: [0, 2, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 998],
		correction: [0, 2, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 999],
		correction: [0, 2, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 1000],
		correction: [0, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 60, 1001],
		correction: [0, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 0],
		correction: [0, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 1],
		correction: [0, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 2],
		correction: [0, 2, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 300],
		correction: [0, 2, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 500],
		correction: [0, 2, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 998],
		correction: [0, 2, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 999],
		correction: [0, 2, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 1000],
		correction: [0, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [23, 61, 61, 1001],
		correction: [0, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 0],
		correction: [0, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 1],
		correction: [0, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 2],
		correction: [0, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 300],
		correction: [0, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 500],
		correction: [0, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 998],
		correction: [0, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 999],
		correction: [0, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 1000],
		correction: [0, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 0, 1001],
		correction: [0, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 0],
		correction: [0, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 1],
		correction: [0, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 2],
		correction: [0, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 300],
		correction: [0, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 500],
		correction: [0, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 998],
		correction: [0, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 999],
		correction: [0, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 1000],
		correction: [0, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 1, 1001],
		correction: [0, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 0],
		correction: [0, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 1],
		correction: [0, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 2],
		correction: [0, 0, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 300],
		correction: [0, 0, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 500],
		correction: [0, 0, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 998],
		correction: [0, 0, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 999],
		correction: [0, 0, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 1000],
		correction: [0, 0, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 2, 1001],
		correction: [0, 0, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 0],
		correction: [0, 0, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 1],
		correction: [0, 0, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 2],
		correction: [0, 0, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 300],
		correction: [0, 0, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 500],
		correction: [0, 0, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 998],
		correction: [0, 0, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 999],
		correction: [0, 0, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 1000],
		correction: [0, 0, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 20, 1001],
		correction: [0, 0, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 0],
		correction: [0, 0, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 1],
		correction: [0, 0, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 2],
		correction: [0, 0, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 300],
		correction: [0, 0, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 500],
		correction: [0, 0, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 998],
		correction: [0, 0, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 999],
		correction: [0, 0, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 1000],
		correction: [0, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 59, 1001],
		correction: [0, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 0],
		correction: [0, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 1],
		correction: [0, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 2],
		correction: [0, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 300],
		correction: [0, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 500],
		correction: [0, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 998],
		correction: [0, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 999],
		correction: [0, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 1000],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 60, 1001],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 0],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 1],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 2],
		correction: [0, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 300],
		correction: [0, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 500],
		correction: [0, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 998],
		correction: [0, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 999],
		correction: [0, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 1000],
		correction: [0, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 0, 61, 1001],
		correction: [0, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 0],
		correction: [0, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 1],
		correction: [0, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 2],
		correction: [0, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 300],
		correction: [0, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 500],
		correction: [0, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 998],
		correction: [0, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 999],
		correction: [0, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 1000],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 0, 1001],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 0],
		correction: [0, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 1],
		correction: [0, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 2],
		correction: [0, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 300],
		correction: [0, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 500],
		correction: [0, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 998],
		correction: [0, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 999],
		correction: [0, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 1000],
		correction: [0, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 1, 1001],
		correction: [0, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 0],
		correction: [0, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 1],
		correction: [0, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 2],
		correction: [0, 1, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 300],
		correction: [0, 1, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 500],
		correction: [0, 1, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 998],
		correction: [0, 1, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 999],
		correction: [0, 1, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 1000],
		correction: [0, 1, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 2, 1001],
		correction: [0, 1, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 0],
		correction: [0, 1, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 1],
		correction: [0, 1, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 2],
		correction: [0, 1, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 300],
		correction: [0, 1, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 500],
		correction: [0, 1, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 998],
		correction: [0, 1, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 999],
		correction: [0, 1, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 1000],
		correction: [0, 1, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 20, 1001],
		correction: [0, 1, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 0],
		correction: [0, 1, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 1],
		correction: [0, 1, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 2],
		correction: [0, 1, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 300],
		correction: [0, 1, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 500],
		correction: [0, 1, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 998],
		correction: [0, 1, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 999],
		correction: [0, 1, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 1000],
		correction: [0, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 59, 1001],
		correction: [0, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 0],
		correction: [0, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 1],
		correction: [0, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 2],
		correction: [0, 2, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 300],
		correction: [0, 2, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 500],
		correction: [0, 2, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 998],
		correction: [0, 2, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 999],
		correction: [0, 2, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 1000],
		correction: [0, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 60, 1001],
		correction: [0, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 0],
		correction: [0, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 1],
		correction: [0, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 2],
		correction: [0, 2, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 300],
		correction: [0, 2, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 500],
		correction: [0, 2, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 998],
		correction: [0, 2, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 999],
		correction: [0, 2, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 1000],
		correction: [0, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 1, 61, 1001],
		correction: [0, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 0],
		correction: [0, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 1],
		correction: [0, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 2],
		correction: [0, 2, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 300],
		correction: [0, 2, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 500],
		correction: [0, 2, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 998],
		correction: [0, 2, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 999],
		correction: [0, 2, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 1000],
		correction: [0, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 0, 1001],
		correction: [0, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 0],
		correction: [0, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 1],
		correction: [0, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 2],
		correction: [0, 2, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 300],
		correction: [0, 2, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 500],
		correction: [0, 2, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 998],
		correction: [0, 2, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 999],
		correction: [0, 2, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 1000],
		correction: [0, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 1, 1001],
		correction: [0, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 0],
		correction: [0, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 1],
		correction: [0, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 2],
		correction: [0, 2, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 300],
		correction: [0, 2, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 500],
		correction: [0, 2, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 998],
		correction: [0, 2, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 999],
		correction: [0, 2, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 1000],
		correction: [0, 2, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 2, 1001],
		correction: [0, 2, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 0],
		correction: [0, 2, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 1],
		correction: [0, 2, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 2],
		correction: [0, 2, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 300],
		correction: [0, 2, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 500],
		correction: [0, 2, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 998],
		correction: [0, 2, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 999],
		correction: [0, 2, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 1000],
		correction: [0, 2, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 20, 1001],
		correction: [0, 2, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 0],
		correction: [0, 2, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 1],
		correction: [0, 2, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 2],
		correction: [0, 2, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 300],
		correction: [0, 2, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 500],
		correction: [0, 2, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 998],
		correction: [0, 2, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 999],
		correction: [0, 2, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 1000],
		correction: [0, 3, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 59, 1001],
		correction: [0, 3, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 0],
		correction: [0, 3, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 1],
		correction: [0, 3, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 2],
		correction: [0, 3, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 300],
		correction: [0, 3, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 500],
		correction: [0, 3, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 998],
		correction: [0, 3, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 999],
		correction: [0, 3, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 1000],
		correction: [0, 3, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 60, 1001],
		correction: [0, 3, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 0],
		correction: [0, 3, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 1],
		correction: [0, 3, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 2],
		correction: [0, 3, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 300],
		correction: [0, 3, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 500],
		correction: [0, 3, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 998],
		correction: [0, 3, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 999],
		correction: [0, 3, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 1000],
		correction: [0, 3, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 2, 61, 1001],
		correction: [0, 3, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 0],
		correction: [0, 20, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 1],
		correction: [0, 20, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 2],
		correction: [0, 20, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 300],
		correction: [0, 20, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 500],
		correction: [0, 20, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 998],
		correction: [0, 20, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 999],
		correction: [0, 20, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 1000],
		correction: [0, 20, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 0, 1001],
		correction: [0, 20, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 0],
		correction: [0, 20, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 1],
		correction: [0, 20, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 2],
		correction: [0, 20, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 300],
		correction: [0, 20, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 500],
		correction: [0, 20, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 998],
		correction: [0, 20, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 999],
		correction: [0, 20, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 1000],
		correction: [0, 20, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 1, 1001],
		correction: [0, 20, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 0],
		correction: [0, 20, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 1],
		correction: [0, 20, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 2],
		correction: [0, 20, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 300],
		correction: [0, 20, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 500],
		correction: [0, 20, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 998],
		correction: [0, 20, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 999],
		correction: [0, 20, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 1000],
		correction: [0, 20, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 2, 1001],
		correction: [0, 20, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 0],
		correction: [0, 20, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 1],
		correction: [0, 20, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 2],
		correction: [0, 20, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 300],
		correction: [0, 20, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 500],
		correction: [0, 20, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 998],
		correction: [0, 20, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 999],
		correction: [0, 20, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 1000],
		correction: [0, 20, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 20, 1001],
		correction: [0, 20, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 0],
		correction: [0, 20, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 1],
		correction: [0, 20, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 2],
		correction: [0, 20, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 300],
		correction: [0, 20, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 500],
		correction: [0, 20, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 998],
		correction: [0, 20, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 999],
		correction: [0, 20, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 1000],
		correction: [0, 21, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 59, 1001],
		correction: [0, 21, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 0],
		correction: [0, 21, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 1],
		correction: [0, 21, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 2],
		correction: [0, 21, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 300],
		correction: [0, 21, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 500],
		correction: [0, 21, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 998],
		correction: [0, 21, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 999],
		correction: [0, 21, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 1000],
		correction: [0, 21, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 60, 1001],
		correction: [0, 21, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 0],
		correction: [0, 21, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 1],
		correction: [0, 21, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 2],
		correction: [0, 21, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 300],
		correction: [0, 21, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 500],
		correction: [0, 21, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 998],
		correction: [0, 21, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 999],
		correction: [0, 21, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 1000],
		correction: [0, 21, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 20, 61, 1001],
		correction: [0, 21, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 0],
		correction: [0, 59, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 1],
		correction: [0, 59, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 2],
		correction: [0, 59, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 300],
		correction: [0, 59, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 500],
		correction: [0, 59, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 998],
		correction: [0, 59, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 999],
		correction: [0, 59, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 1000],
		correction: [0, 59, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 0, 1001],
		correction: [0, 59, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 0],
		correction: [0, 59, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 1],
		correction: [0, 59, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 2],
		correction: [0, 59, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 300],
		correction: [0, 59, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 500],
		correction: [0, 59, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 998],
		correction: [0, 59, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 999],
		correction: [0, 59, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 1000],
		correction: [0, 59, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 1, 1001],
		correction: [0, 59, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 0],
		correction: [0, 59, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 1],
		correction: [0, 59, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 2],
		correction: [0, 59, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 300],
		correction: [0, 59, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 500],
		correction: [0, 59, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 998],
		correction: [0, 59, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 999],
		correction: [0, 59, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 1000],
		correction: [0, 59, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 2, 1001],
		correction: [0, 59, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 0],
		correction: [0, 59, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 1],
		correction: [0, 59, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 2],
		correction: [0, 59, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 300],
		correction: [0, 59, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 500],
		correction: [0, 59, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 998],
		correction: [0, 59, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 999],
		correction: [0, 59, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 1000],
		correction: [0, 59, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 20, 1001],
		correction: [0, 59, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 0],
		correction: [0, 59, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 1],
		correction: [0, 59, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 2],
		correction: [0, 59, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 300],
		correction: [0, 59, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 500],
		correction: [0, 59, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 998],
		correction: [0, 59, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 999],
		correction: [0, 59, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 1000],
		correction: [1, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 59, 1001],
		correction: [1, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 0],
		correction: [1, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 1],
		correction: [1, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 2],
		correction: [1, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 300],
		correction: [1, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 500],
		correction: [1, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 998],
		correction: [1, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 999],
		correction: [1, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 1000],
		correction: [1, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 60, 1001],
		correction: [1, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 0],
		correction: [1, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 1],
		correction: [1, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 2],
		correction: [1, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 300],
		correction: [1, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 500],
		correction: [1, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 998],
		correction: [1, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 999],
		correction: [1, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 1000],
		correction: [1, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 59, 61, 1001],
		correction: [1, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 0],
		correction: [1, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 1],
		correction: [1, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 2],
		correction: [1, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 300],
		correction: [1, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 500],
		correction: [1, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 998],
		correction: [1, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 999],
		correction: [1, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 1000],
		correction: [1, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 0, 1001],
		correction: [1, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 0],
		correction: [1, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 1],
		correction: [1, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 2],
		correction: [1, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 300],
		correction: [1, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 500],
		correction: [1, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 998],
		correction: [1, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 999],
		correction: [1, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 1000],
		correction: [1, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 1, 1001],
		correction: [1, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 0],
		correction: [1, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 1],
		correction: [1, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 2],
		correction: [1, 0, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 300],
		correction: [1, 0, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 500],
		correction: [1, 0, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 998],
		correction: [1, 0, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 999],
		correction: [1, 0, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 1000],
		correction: [1, 0, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 2, 1001],
		correction: [1, 0, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 0],
		correction: [1, 0, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 1],
		correction: [1, 0, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 2],
		correction: [1, 0, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 300],
		correction: [1, 0, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 500],
		correction: [1, 0, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 998],
		correction: [1, 0, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 999],
		correction: [1, 0, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 1000],
		correction: [1, 0, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 20, 1001],
		correction: [1, 0, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 0],
		correction: [1, 0, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 1],
		correction: [1, 0, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 2],
		correction: [1, 0, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 300],
		correction: [1, 0, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 500],
		correction: [1, 0, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 998],
		correction: [1, 0, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 999],
		correction: [1, 0, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 1000],
		correction: [1, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 59, 1001],
		correction: [1, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 0],
		correction: [1, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 1],
		correction: [1, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 2],
		correction: [1, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 300],
		correction: [1, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 500],
		correction: [1, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 998],
		correction: [1, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 999],
		correction: [1, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 1000],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 60, 1001],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 0],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 1],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 2],
		correction: [1, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 300],
		correction: [1, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 500],
		correction: [1, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 998],
		correction: [1, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 999],
		correction: [1, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 1000],
		correction: [1, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 60, 61, 1001],
		correction: [1, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 0],
		correction: [1, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 1],
		correction: [1, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 2],
		correction: [1, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 300],
		correction: [1, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 500],
		correction: [1, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 998],
		correction: [1, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 999],
		correction: [1, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 1000],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 0, 1001],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 0],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 1],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 2],
		correction: [1, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 300],
		correction: [1, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 500],
		correction: [1, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 998],
		correction: [1, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 999],
		correction: [1, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 1000],
		correction: [1, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 1, 1001],
		correction: [1, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 0],
		correction: [1, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 1],
		correction: [1, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 2],
		correction: [1, 1, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 300],
		correction: [1, 1, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 500],
		correction: [1, 1, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 998],
		correction: [1, 1, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 999],
		correction: [1, 1, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 1000],
		correction: [1, 1, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 2, 1001],
		correction: [1, 1, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 0],
		correction: [1, 1, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 1],
		correction: [1, 1, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 2],
		correction: [1, 1, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 300],
		correction: [1, 1, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 500],
		correction: [1, 1, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 998],
		correction: [1, 1, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 999],
		correction: [1, 1, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 1000],
		correction: [1, 1, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 20, 1001],
		correction: [1, 1, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 0],
		correction: [1, 1, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 1],
		correction: [1, 1, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 2],
		correction: [1, 1, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 300],
		correction: [1, 1, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 500],
		correction: [1, 1, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 998],
		correction: [1, 1, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 999],
		correction: [1, 1, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 1000],
		correction: [1, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 59, 1001],
		correction: [1, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 0],
		correction: [1, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 1],
		correction: [1, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 2],
		correction: [1, 2, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 300],
		correction: [1, 2, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 500],
		correction: [1, 2, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 998],
		correction: [1, 2, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 999],
		correction: [1, 2, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 1000],
		correction: [1, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 60, 1001],
		correction: [1, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 0],
		correction: [1, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 1],
		correction: [1, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 2],
		correction: [1, 2, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 300],
		correction: [1, 2, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 500],
		correction: [1, 2, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 998],
		correction: [1, 2, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 999],
		correction: [1, 2, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 1000],
		correction: [1, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [24, 61, 61, 1001],
		correction: [1, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 0],
		correction: [1, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 1],
		correction: [1, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 2],
		correction: [1, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 300],
		correction: [1, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 500],
		correction: [1, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 998],
		correction: [1, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 999],
		correction: [1, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 1000],
		correction: [1, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 0, 1001],
		correction: [1, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 0],
		correction: [1, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 1],
		correction: [1, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 2],
		correction: [1, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 300],
		correction: [1, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 500],
		correction: [1, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 998],
		correction: [1, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 999],
		correction: [1, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 1000],
		correction: [1, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 1, 1001],
		correction: [1, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 0],
		correction: [1, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 1],
		correction: [1, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 2],
		correction: [1, 0, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 300],
		correction: [1, 0, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 500],
		correction: [1, 0, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 998],
		correction: [1, 0, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 999],
		correction: [1, 0, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 1000],
		correction: [1, 0, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 2, 1001],
		correction: [1, 0, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 0],
		correction: [1, 0, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 1],
		correction: [1, 0, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 2],
		correction: [1, 0, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 300],
		correction: [1, 0, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 500],
		correction: [1, 0, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 998],
		correction: [1, 0, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 999],
		correction: [1, 0, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 1000],
		correction: [1, 0, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 20, 1001],
		correction: [1, 0, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 0],
		correction: [1, 0, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 1],
		correction: [1, 0, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 2],
		correction: [1, 0, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 300],
		correction: [1, 0, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 500],
		correction: [1, 0, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 998],
		correction: [1, 0, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 999],
		correction: [1, 0, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 1000],
		correction: [1, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 59, 1001],
		correction: [1, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 0],
		correction: [1, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 1],
		correction: [1, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 2],
		correction: [1, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 300],
		correction: [1, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 500],
		correction: [1, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 998],
		correction: [1, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 999],
		correction: [1, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 1000],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 60, 1001],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 0],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 1],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 2],
		correction: [1, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 300],
		correction: [1, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 500],
		correction: [1, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 998],
		correction: [1, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 999],
		correction: [1, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 1000],
		correction: [1, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 0, 61, 1001],
		correction: [1, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 0],
		correction: [1, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 1],
		correction: [1, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 2],
		correction: [1, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 300],
		correction: [1, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 500],
		correction: [1, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 998],
		correction: [1, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 999],
		correction: [1, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 1000],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 0, 1001],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 0],
		correction: [1, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 1],
		correction: [1, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 2],
		correction: [1, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 300],
		correction: [1, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 500],
		correction: [1, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 998],
		correction: [1, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 999],
		correction: [1, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 1000],
		correction: [1, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 1, 1001],
		correction: [1, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 0],
		correction: [1, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 1],
		correction: [1, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 2],
		correction: [1, 1, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 300],
		correction: [1, 1, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 500],
		correction: [1, 1, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 998],
		correction: [1, 1, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 999],
		correction: [1, 1, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 1000],
		correction: [1, 1, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 2, 1001],
		correction: [1, 1, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 0],
		correction: [1, 1, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 1],
		correction: [1, 1, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 2],
		correction: [1, 1, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 300],
		correction: [1, 1, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 500],
		correction: [1, 1, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 998],
		correction: [1, 1, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 999],
		correction: [1, 1, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 1000],
		correction: [1, 1, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 20, 1001],
		correction: [1, 1, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 0],
		correction: [1, 1, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 1],
		correction: [1, 1, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 2],
		correction: [1, 1, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 300],
		correction: [1, 1, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 500],
		correction: [1, 1, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 998],
		correction: [1, 1, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 999],
		correction: [1, 1, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 1000],
		correction: [1, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 59, 1001],
		correction: [1, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 0],
		correction: [1, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 1],
		correction: [1, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 2],
		correction: [1, 2, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 300],
		correction: [1, 2, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 500],
		correction: [1, 2, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 998],
		correction: [1, 2, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 999],
		correction: [1, 2, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 1000],
		correction: [1, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 60, 1001],
		correction: [1, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 0],
		correction: [1, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 1],
		correction: [1, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 2],
		correction: [1, 2, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 300],
		correction: [1, 2, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 500],
		correction: [1, 2, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 998],
		correction: [1, 2, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 999],
		correction: [1, 2, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 1000],
		correction: [1, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 1, 61, 1001],
		correction: [1, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 0],
		correction: [1, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 1],
		correction: [1, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 2],
		correction: [1, 2, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 300],
		correction: [1, 2, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 500],
		correction: [1, 2, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 998],
		correction: [1, 2, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 999],
		correction: [1, 2, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 1000],
		correction: [1, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 0, 1001],
		correction: [1, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 0],
		correction: [1, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 1],
		correction: [1, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 2],
		correction: [1, 2, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 300],
		correction: [1, 2, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 500],
		correction: [1, 2, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 998],
		correction: [1, 2, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 999],
		correction: [1, 2, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 1000],
		correction: [1, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 1, 1001],
		correction: [1, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 0],
		correction: [1, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 1],
		correction: [1, 2, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 2],
		correction: [1, 2, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 300],
		correction: [1, 2, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 500],
		correction: [1, 2, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 998],
		correction: [1, 2, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 999],
		correction: [1, 2, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 1000],
		correction: [1, 2, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 2, 1001],
		correction: [1, 2, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 0],
		correction: [1, 2, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 1],
		correction: [1, 2, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 2],
		correction: [1, 2, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 300],
		correction: [1, 2, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 500],
		correction: [1, 2, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 998],
		correction: [1, 2, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 999],
		correction: [1, 2, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 1000],
		correction: [1, 2, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 20, 1001],
		correction: [1, 2, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 0],
		correction: [1, 2, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 1],
		correction: [1, 2, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 2],
		correction: [1, 2, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 300],
		correction: [1, 2, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 500],
		correction: [1, 2, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 998],
		correction: [1, 2, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 999],
		correction: [1, 2, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 1000],
		correction: [1, 3, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 59, 1001],
		correction: [1, 3, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 0],
		correction: [1, 3, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 1],
		correction: [1, 3, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 2],
		correction: [1, 3, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 300],
		correction: [1, 3, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 500],
		correction: [1, 3, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 998],
		correction: [1, 3, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 999],
		correction: [1, 3, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 1000],
		correction: [1, 3, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 60, 1001],
		correction: [1, 3, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 0],
		correction: [1, 3, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 1],
		correction: [1, 3, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 2],
		correction: [1, 3, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 300],
		correction: [1, 3, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 500],
		correction: [1, 3, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 998],
		correction: [1, 3, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 999],
		correction: [1, 3, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 1000],
		correction: [1, 3, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 2, 61, 1001],
		correction: [1, 3, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 0],
		correction: [1, 20, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 1],
		correction: [1, 20, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 2],
		correction: [1, 20, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 300],
		correction: [1, 20, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 500],
		correction: [1, 20, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 998],
		correction: [1, 20, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 999],
		correction: [1, 20, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 1000],
		correction: [1, 20, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 0, 1001],
		correction: [1, 20, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 0],
		correction: [1, 20, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 1],
		correction: [1, 20, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 2],
		correction: [1, 20, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 300],
		correction: [1, 20, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 500],
		correction: [1, 20, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 998],
		correction: [1, 20, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 999],
		correction: [1, 20, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 1000],
		correction: [1, 20, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 1, 1001],
		correction: [1, 20, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 0],
		correction: [1, 20, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 1],
		correction: [1, 20, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 2],
		correction: [1, 20, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 300],
		correction: [1, 20, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 500],
		correction: [1, 20, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 998],
		correction: [1, 20, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 999],
		correction: [1, 20, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 1000],
		correction: [1, 20, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 2, 1001],
		correction: [1, 20, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 0],
		correction: [1, 20, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 1],
		correction: [1, 20, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 2],
		correction: [1, 20, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 300],
		correction: [1, 20, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 500],
		correction: [1, 20, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 998],
		correction: [1, 20, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 999],
		correction: [1, 20, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 1000],
		correction: [1, 20, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 20, 1001],
		correction: [1, 20, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 0],
		correction: [1, 20, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 1],
		correction: [1, 20, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 2],
		correction: [1, 20, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 300],
		correction: [1, 20, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 500],
		correction: [1, 20, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 998],
		correction: [1, 20, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 999],
		correction: [1, 20, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 1000],
		correction: [1, 21, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 59, 1001],
		correction: [1, 21, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 0],
		correction: [1, 21, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 1],
		correction: [1, 21, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 2],
		correction: [1, 21, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 300],
		correction: [1, 21, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 500],
		correction: [1, 21, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 998],
		correction: [1, 21, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 999],
		correction: [1, 21, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 1000],
		correction: [1, 21, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 60, 1001],
		correction: [1, 21, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 0],
		correction: [1, 21, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 1],
		correction: [1, 21, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 2],
		correction: [1, 21, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 300],
		correction: [1, 21, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 500],
		correction: [1, 21, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 998],
		correction: [1, 21, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 999],
		correction: [1, 21, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 1000],
		correction: [1, 21, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 20, 61, 1001],
		correction: [1, 21, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 0],
		correction: [1, 59, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 1],
		correction: [1, 59, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 2],
		correction: [1, 59, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 300],
		correction: [1, 59, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 500],
		correction: [1, 59, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 998],
		correction: [1, 59, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 999],
		correction: [1, 59, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 1000],
		correction: [1, 59, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 0, 1001],
		correction: [1, 59, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 0],
		correction: [1, 59, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 1],
		correction: [1, 59, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 2],
		correction: [1, 59, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 300],
		correction: [1, 59, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 500],
		correction: [1, 59, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 998],
		correction: [1, 59, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 999],
		correction: [1, 59, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 1000],
		correction: [1, 59, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 1, 1001],
		correction: [1, 59, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 0],
		correction: [1, 59, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 1],
		correction: [1, 59, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 2],
		correction: [1, 59, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 300],
		correction: [1, 59, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 500],
		correction: [1, 59, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 998],
		correction: [1, 59, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 999],
		correction: [1, 59, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 1000],
		correction: [1, 59, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 2, 1001],
		correction: [1, 59, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 0],
		correction: [1, 59, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 1],
		correction: [1, 59, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 2],
		correction: [1, 59, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 300],
		correction: [1, 59, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 500],
		correction: [1, 59, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 998],
		correction: [1, 59, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 999],
		correction: [1, 59, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 1000],
		correction: [1, 59, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 20, 1001],
		correction: [1, 59, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 0],
		correction: [1, 59, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 1],
		correction: [1, 59, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 2],
		correction: [1, 59, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 300],
		correction: [1, 59, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 500],
		correction: [1, 59, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 998],
		correction: [1, 59, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 999],
		correction: [1, 59, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 1000],
		correction: [2, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 59, 1001],
		correction: [2, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 0],
		correction: [2, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 1],
		correction: [2, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 2],
		correction: [2, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 300],
		correction: [2, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 500],
		correction: [2, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 998],
		correction: [2, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 999],
		correction: [2, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 1000],
		correction: [2, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 60, 1001],
		correction: [2, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 0],
		correction: [2, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 1],
		correction: [2, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 2],
		correction: [2, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 300],
		correction: [2, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 500],
		correction: [2, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 998],
		correction: [2, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 999],
		correction: [2, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 1000],
		correction: [2, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 59, 61, 1001],
		correction: [2, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 0],
		correction: [2, 0, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 1],
		correction: [2, 0, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 2],
		correction: [2, 0, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 300],
		correction: [2, 0, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 500],
		correction: [2, 0, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 998],
		correction: [2, 0, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 999],
		correction: [2, 0, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 1000],
		correction: [2, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 0, 1001],
		correction: [2, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 0],
		correction: [2, 0, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 1],
		correction: [2, 0, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 2],
		correction: [2, 0, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 300],
		correction: [2, 0, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 500],
		correction: [2, 0, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 998],
		correction: [2, 0, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 999],
		correction: [2, 0, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 1000],
		correction: [2, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 1, 1001],
		correction: [2, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 0],
		correction: [2, 0, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 1],
		correction: [2, 0, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 2],
		correction: [2, 0, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 300],
		correction: [2, 0, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 500],
		correction: [2, 0, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 998],
		correction: [2, 0, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 999],
		correction: [2, 0, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 1000],
		correction: [2, 0, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 2, 1001],
		correction: [2, 0, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 0],
		correction: [2, 0, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 1],
		correction: [2, 0, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 2],
		correction: [2, 0, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 300],
		correction: [2, 0, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 500],
		correction: [2, 0, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 998],
		correction: [2, 0, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 999],
		correction: [2, 0, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 1000],
		correction: [2, 0, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 20, 1001],
		correction: [2, 0, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 0],
		correction: [2, 0, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 1],
		correction: [2, 0, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 2],
		correction: [2, 0, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 300],
		correction: [2, 0, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 500],
		correction: [2, 0, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 998],
		correction: [2, 0, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 999],
		correction: [2, 0, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 1000],
		correction: [2, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 59, 1001],
		correction: [2, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 0],
		correction: [2, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 1],
		correction: [2, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 2],
		correction: [2, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 300],
		correction: [2, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 500],
		correction: [2, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 998],
		correction: [2, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 999],
		correction: [2, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 1000],
		correction: [2, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 60, 1001],
		correction: [2, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 0],
		correction: [2, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 1],
		correction: [2, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 2],
		correction: [2, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 300],
		correction: [2, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 500],
		correction: [2, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 998],
		correction: [2, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 999],
		correction: [2, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 1000],
		correction: [2, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 60, 61, 1001],
		correction: [2, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 0],
		correction: [2, 1, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 1],
		correction: [2, 1, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 2],
		correction: [2, 1, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 300],
		correction: [2, 1, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 500],
		correction: [2, 1, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 998],
		correction: [2, 1, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 999],
		correction: [2, 1, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 1000],
		correction: [2, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 0, 1001],
		correction: [2, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 0],
		correction: [2, 1, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 1],
		correction: [2, 1, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 2],
		correction: [2, 1, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 300],
		correction: [2, 1, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 500],
		correction: [2, 1, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 998],
		correction: [2, 1, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 999],
		correction: [2, 1, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 1000],
		correction: [2, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 1, 1001],
		correction: [2, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 0],
		correction: [2, 1, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 1],
		correction: [2, 1, 2, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 2],
		correction: [2, 1, 2, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 300],
		correction: [2, 1, 2, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 500],
		correction: [2, 1, 2, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 998],
		correction: [2, 1, 2, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 999],
		correction: [2, 1, 2, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 1000],
		correction: [2, 1, 3, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 2, 1001],
		correction: [2, 1, 3, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 0],
		correction: [2, 1, 20, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 1],
		correction: [2, 1, 20, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 2],
		correction: [2, 1, 20, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 300],
		correction: [2, 1, 20, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 500],
		correction: [2, 1, 20, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 998],
		correction: [2, 1, 20, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 999],
		correction: [2, 1, 20, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 1000],
		correction: [2, 1, 21, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 20, 1001],
		correction: [2, 1, 21, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 0],
		correction: [2, 1, 59, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 1],
		correction: [2, 1, 59, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 2],
		correction: [2, 1, 59, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 300],
		correction: [2, 1, 59, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 500],
		correction: [2, 1, 59, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 998],
		correction: [2, 1, 59, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 999],
		correction: [2, 1, 59, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 1000],
		correction: [2, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 59, 1001],
		correction: [2, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 0],
		correction: [2, 2, 0, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 1],
		correction: [2, 2, 0, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 2],
		correction: [2, 2, 0, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 300],
		correction: [2, 2, 0, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 500],
		correction: [2, 2, 0, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 998],
		correction: [2, 2, 0, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 999],
		correction: [2, 2, 0, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 1000],
		correction: [2, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 60, 1001],
		correction: [2, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 0],
		correction: [2, 2, 1, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 1],
		correction: [2, 2, 1, 1, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 2],
		correction: [2, 2, 1, 2, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 300],
		correction: [2, 2, 1, 300, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 500],
		correction: [2, 2, 1, 500, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 998],
		correction: [2, 2, 1, 998, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 999],
		correction: [2, 2, 1, 999, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 1000],
		correction: [2, 2, 2, 0, 1],
		check24: false,
		check12: false
	},
	{
		time: [25, 61, 61, 1001],
		correction: [2, 2, 2, 1, 1],
		check24: false,
		check12: false
	}
];

export const checkDate = [
	{
		date: [0, -1, 0],
		correction: [-1, 10, 30],
		check: false
	},
	{
		date: [0, -1, 1],
		correction: [-1, 11, 1],
		check: false
	},
	{
		date: [0, -1, 2],
		correction: [-1, 11, 2],
		check: false
	},
	{
		date: [0, -1, 15],
		correction: [-1, 11, 15],
		check: false
	},
	{
		date: [0, -1, 29],
		correction: [-1, 11, 29],
		check: false
	},
	{
		date: [0, -1, 30],
		correction: [0, 0, 1],
		check: false
	},
	{
		date: [0, -1, 31],
		correction: [0, 0, 2],
		check: false
	},
	{
		date: [0, -1, 32],
		correction: [0, 0, 3],
		check: false
	},
	{
		date: [0, 0, 0],
		correction: [-1, 11, 29],
		check: false
	},
	{
		date: [0, 0, 1],
		correction: [0, 0, 1],
		check: false
	},
	{
		date: [0, 0, 2],
		correction: [0, 0, 2],
		check: false
	},
	{
		date: [0, 0, 15],
		correction: [0, 0, 15],
		check: false
	},
	{
		date: [0, 0, 29],
		correction: [0, 0, 29],
		check: false
	},
	{
		date: [0, 0, 30],
		correction: [0, 0, 30],
		check: false
	},
	{
		date: [0, 0, 31],
		correction: [0, 0, 31],
		check: false
	},
	{
		date: [0, 0, 32],
		correction: [0, 1, 1],
		check: false
	},
	{
		date: [0, 1, 0],
		correction: [0, 0, 31],
		check: false
	},
	{
		date: [0, 1, 1],
		correction: [0, 1, 1],
		check: false
	},
	{
		date: [0, 1, 2],
		correction: [0, 1, 2],
		check: false
	},
	{
		date: [0, 1, 15],
		correction: [0, 1, 15],
		check: false
	},
	{
		date: [0, 1, 29],
		correction: [0, 1, 29],
		check: false
	},
	{
		date: [0, 1, 30],
		correction: [0, 1, 30],
		check: false
	},
	{
		date: [0, 1, 31],
		correction: [0, 1, 31],
		check: false
	},
	{
		date: [0, 1, 32],
		correction: [0, 2, 1],
		check: false
	},
	{
		date: [0, 6, 0],
		correction: [0, 5, 31],
		check: false
	},
	{
		date: [0, 6, 1],
		correction: [0, 6, 1],
		check: false
	},
	{
		date: [0, 6, 2],
		correction: [0, 6, 2],
		check: false
	},
	{
		date: [0, 6, 15],
		correction: [0, 6, 15],
		check: false
	},
	{
		date: [0, 6, 29],
		correction: [0, 6, 29],
		check: false
	},
	{
		date: [0, 6, 30],
		correction: [0, 6, 30],
		check: false
	},
	{
		date: [0, 6, 31],
		correction: [0, 7, 1],
		check: false
	},
	{
		date: [0, 6, 32],
		correction: [0, 7, 2],
		check: false
	},
	{
		date: [0, 11, 0],
		correction: [0, 10, 30],
		check: false
	},
	{
		date: [0, 11, 1],
		correction: [0, 11, 1],
		check: false
	},
	{
		date: [0, 11, 2],
		correction: [0, 11, 2],
		check: false
	},
	{
		date: [0, 11, 15],
		correction: [0, 11, 15],
		check: false
	},
	{
		date: [0, 11, 29],
		correction: [0, 11, 29],
		check: false
	},
	{
		date: [0, 11, 30],
		correction: [0, 11, 30],
		check: false
	},
	{
		date: [0, 11, 31],
		correction: [1, 0, 1],
		check: false
	},
	{
		date: [0, 11, 32],
		correction: [1, 0, 2],
		check: false
	},
	{
		date: [0, 12, 0],
		correction: [0, 11, 30],
		check: false
	},
	{
		date: [0, 12, 1],
		correction: [1, 0, 1],
		check: false
	},
	{
		date: [0, 12, 2],
		correction: [1, 0, 2],
		check: false
	},
	{
		date: [0, 12, 15],
		correction: [1, 0, 15],
		check: false
	},
	{
		date: [0, 12, 29],
		correction: [1, 0, 29],
		check: false
	},
	{
		date: [0, 12, 30],
		correction: [1, 0, 30],
		check: false
	},
	{
		date: [0, 12, 31],
		correction: [1, 0, 31],
		check: false
	},
	{
		date: [0, 12, 32],
		correction: [1, 1, 1],
		check: false
	},
	{
		date: [1, -1, 0],
		correction: [0, 10, 30],
		check: false
	},
	{
		date: [1, -1, 1],
		correction: [0, 11, 1],
		check: false
	},
	{
		date: [1, -1, 2],
		correction: [0, 11, 2],
		check: false
	},
	{
		date: [1, -1, 15],
		correction: [0, 11, 15],
		check: false
	},
	{
		date: [1, -1, 29],
		correction: [0, 11, 29],
		check: false
	},
	{
		date: [1, -1, 30],
		correction: [0, 11, 30],
		check: false
	},
	{
		date: [1, -1, 31],
		correction: [1, 0, 1],
		check: false
	},
	{
		date: [1, -1, 32],
		correction: [1, 0, 2],
		check: false
	},
	{
		date: [1, 0, 0],
		correction: [0, 11, 30],
		check: false
	},
	{
		date: [1, 0, 1],
		correction: [1, 0, 1],
		check: true
	},
	{
		date: [1, 0, 2],
		correction: [1, 0, 2],
		check: true
	},
	{
		date: [1, 0, 15],
		correction: [1, 0, 15],
		check: true
	},
	{
		date: [1, 0, 29],
		correction: [1, 0, 29],
		check: true
	},
	{
		date: [1, 0, 30],
		correction: [1, 0, 30],
		check: true
	},
	{
		date: [1, 0, 31],
		correction: [1, 0, 31],
		check: true
	},
	{
		date: [1, 0, 32],
		correction: [1, 1, 1],
		check: false
	},
	{
		date: [1, 1, 0],
		correction: [1, 0, 31],
		check: false
	},
	{
		date: [1, 1, 1],
		correction: [1, 1, 1],
		check: true
	},
	{
		date: [1, 1, 2],
		correction: [1, 1, 2],
		check: true
	},
	{
		date: [1, 1, 15],
		correction: [1, 1, 15],
		check: true
	},
	{
		date: [1, 1, 29],
		correction: [1, 1, 29],
		check: true
	},
	{
		date: [1, 1, 30],
		correction: [1, 1, 30],
		check: true
	},
	{
		date: [1, 1, 31],
		correction: [1, 1, 31],
		check: true
	},
	{
		date: [1, 1, 32],
		correction: [1, 2, 1],
		check: false
	},
	{
		date: [1, 6, 0],
		correction: [1, 5, 31],
		check: false
	},
	{
		date: [1, 6, 1],
		correction: [1, 6, 1],
		check: true
	},
	{
		date: [1, 6, 2],
		correction: [1, 6, 2],
		check: true
	},
	{
		date: [1, 6, 15],
		correction: [1, 6, 15],
		check: true
	},
	{
		date: [1, 6, 29],
		correction: [1, 6, 29],
		check: true
	},
	{
		date: [1, 6, 30],
		correction: [1, 6, 30],
		check: true
	},
	{
		date: [1, 6, 31],
		correction: [1, 7, 1],
		check: false
	},
	{
		date: [1, 6, 32],
		correction: [1, 7, 2],
		check: false
	},
	{
		date: [1, 11, 0],
		correction: [1, 10, 30],
		check: false
	},
	{
		date: [1, 11, 1],
		correction: [1, 11, 1],
		check: true
	},
	{
		date: [1, 11, 2],
		correction: [1, 11, 2],
		check: true
	},
	{
		date: [1, 11, 15],
		correction: [1, 11, 15],
		check: true
	},
	{
		date: [1, 11, 29],
		correction: [1, 11, 29],
		check: true
	},
	{
		date: [1, 11, 30],
		correction: [2, 0, 1],
		check: false
	},
	{
		date: [1, 11, 31],
		correction: [2, 0, 2],
		check: false
	},
	{
		date: [1, 11, 32],
		correction: [2, 0, 3],
		check: false
	},
	{
		date: [1, 12, 0],
		correction: [1, 11, 29],
		check: false
	},
	{
		date: [1, 12, 1],
		correction: [2, 0, 1],
		check: false
	},
	{
		date: [1, 12, 2],
		correction: [2, 0, 2],
		check: false
	},
	{
		date: [1, 12, 15],
		correction: [2, 0, 15],
		check: false
	},
	{
		date: [1, 12, 29],
		correction: [2, 0, 29],
		check: false
	},
	{
		date: [1, 12, 30],
		correction: [2, 0, 30],
		check: false
	},
	{
		date: [1, 12, 31],
		correction: [2, 0, 31],
		check: false
	},
	{
		date: [1, 12, 32],
		correction: [2, 1, 1],
		check: false
	},
	{
		date: [2, -1, 0],
		correction: [1, 10, 30],
		check: false
	},
	{
		date: [2, -1, 1],
		correction: [1, 11, 1],
		check: false
	},
	{
		date: [2, -1, 2],
		correction: [1, 11, 2],
		check: false
	},
	{
		date: [2, -1, 15],
		correction: [1, 11, 15],
		check: false
	},
	{
		date: [2, -1, 29],
		correction: [1, 11, 29],
		check: false
	},
	{
		date: [2, -1, 30],
		correction: [2, 0, 1],
		check: false
	},
	{
		date: [2, -1, 31],
		correction: [2, 0, 2],
		check: false
	},
	{
		date: [2, -1, 32],
		correction: [2, 0, 3],
		check: false
	},
	{
		date: [2, 0, 0],
		correction: [1, 11, 29],
		check: false
	},
	{
		date: [2, 0, 1],
		correction: [2, 0, 1],
		check: true
	},
	{
		date: [2, 0, 2],
		correction: [2, 0, 2],
		check: true
	},
	{
		date: [2, 0, 15],
		correction: [2, 0, 15],
		check: true
	},
	{
		date: [2, 0, 29],
		correction: [2, 0, 29],
		check: true
	},
	{
		date: [2, 0, 30],
		correction: [2, 0, 30],
		check: true
	},
	{
		date: [2, 0, 31],
		correction: [2, 0, 31],
		check: true
	},
	{
		date: [2, 0, 32],
		correction: [2, 1, 1],
		check: false
	},
	{
		date: [2, 1, 0],
		correction: [2, 0, 31],
		check: false
	},
	{
		date: [2, 1, 1],
		correction: [2, 1, 1],
		check: true
	},
	{
		date: [2, 1, 2],
		correction: [2, 1, 2],
		check: true
	},
	{
		date: [2, 1, 15],
		correction: [2, 1, 15],
		check: true
	},
	{
		date: [2, 1, 29],
		correction: [2, 1, 29],
		check: true
	},
	{
		date: [2, 1, 30],
		correction: [2, 1, 30],
		check: true
	},
	{
		date: [2, 1, 31],
		correction: [2, 1, 31],
		check: true
	},
	{
		date: [2, 1, 32],
		correction: [2, 2, 1],
		check: false
	},
	{
		date: [2, 6, 0],
		correction: [2, 5, 31],
		check: false
	},
	{
		date: [2, 6, 1],
		correction: [2, 6, 1],
		check: true
	},
	{
		date: [2, 6, 2],
		correction: [2, 6, 2],
		check: true
	},
	{
		date: [2, 6, 15],
		correction: [2, 6, 15],
		check: true
	},
	{
		date: [2, 6, 29],
		correction: [2, 6, 29],
		check: true
	},
	{
		date: [2, 6, 30],
		correction: [2, 6, 30],
		check: true
	},
	{
		date: [2, 6, 31],
		correction: [2, 7, 1],
		check: false
	},
	{
		date: [2, 6, 32],
		correction: [2, 7, 2],
		check: false
	},
	{
		date: [2, 11, 0],
		correction: [2, 10, 30],
		check: false
	},
	{
		date: [2, 11, 1],
		correction: [2, 11, 1],
		check: true
	},
	{
		date: [2, 11, 2],
		correction: [2, 11, 2],
		check: true
	},
	{
		date: [2, 11, 15],
		correction: [2, 11, 15],
		check: true
	},
	{
		date: [2, 11, 29],
		correction: [2, 11, 29],
		check: true
	},
	{
		date: [2, 11, 30],
		correction: [3, 0, 1],
		check: false
	},
	{
		date: [2, 11, 31],
		correction: [3, 0, 2],
		check: false
	},
	{
		date: [2, 11, 32],
		correction: [3, 0, 3],
		check: false
	},
	{
		date: [2, 12, 0],
		correction: [2, 11, 29],
		check: false
	},
	{
		date: [2, 12, 1],
		correction: [3, 0, 1],
		check: false
	},
	{
		date: [2, 12, 2],
		correction: [3, 0, 2],
		check: false
	},
	{
		date: [2, 12, 15],
		correction: [3, 0, 15],
		check: false
	},
	{
		date: [2, 12, 29],
		correction: [3, 0, 29],
		check: false
	},
	{
		date: [2, 12, 30],
		correction: [3, 0, 30],
		check: false
	},
	{
		date: [2, 12, 31],
		correction: [3, 0, 31],
		check: false
	},
	{
		date: [2, 12, 32],
		correction: [3, 1, 1],
		check: false
	},
	{
		date: [1200, -1, 0],
		correction: [1199, 10, 30],
		check: false
	},
	{
		date: [1200, -1, 1],
		correction: [1199, 11, 1],
		check: false
	},
	{
		date: [1200, -1, 2],
		correction: [1199, 11, 2],
		check: false
	},
	{
		date: [1200, -1, 15],
		correction: [1199, 11, 15],
		check: false
	},
	{
		date: [1200, -1, 29],
		correction: [1199, 11, 29],
		check: false
	},
	{
		date: [1200, -1, 30],
		correction: [1200, 0, 1],
		check: false
	},
	{
		date: [1200, -1, 31],
		correction: [1200, 0, 2],
		check: false
	},
	{
		date: [1200, -1, 32],
		correction: [1200, 0, 3],
		check: false
	},
	{
		date: [1200, 0, 0],
		correction: [1199, 11, 29],
		check: false
	},
	{
		date: [1200, 0, 1],
		correction: [1200, 0, 1],
		check: true
	},
	{
		date: [1200, 0, 2],
		correction: [1200, 0, 2],
		check: true
	},
	{
		date: [1200, 0, 15],
		correction: [1200, 0, 15],
		check: true
	},
	{
		date: [1200, 0, 29],
		correction: [1200, 0, 29],
		check: true
	},
	{
		date: [1200, 0, 30],
		correction: [1200, 0, 30],
		check: true
	},
	{
		date: [1200, 0, 31],
		correction: [1200, 0, 31],
		check: true
	},
	{
		date: [1200, 0, 32],
		correction: [1200, 1, 1],
		check: false
	},
	{
		date: [1200, 1, 0],
		correction: [1200, 0, 31],
		check: false
	},
	{
		date: [1200, 1, 1],
		correction: [1200, 1, 1],
		check: true
	},
	{
		date: [1200, 1, 2],
		correction: [1200, 1, 2],
		check: true
	},
	{
		date: [1200, 1, 15],
		correction: [1200, 1, 15],
		check: true
	},
	{
		date: [1200, 1, 29],
		correction: [1200, 1, 29],
		check: true
	},
	{
		date: [1200, 1, 30],
		correction: [1200, 1, 30],
		check: true
	},
	{
		date: [1200, 1, 31],
		correction: [1200, 1, 31],
		check: true
	},
	{
		date: [1200, 1, 32],
		correction: [1200, 2, 1],
		check: false
	},
	{
		date: [1200, 6, 0],
		correction: [1200, 5, 31],
		check: false
	},
	{
		date: [1200, 6, 1],
		correction: [1200, 6, 1],
		check: true
	},
	{
		date: [1200, 6, 2],
		correction: [1200, 6, 2],
		check: true
	},
	{
		date: [1200, 6, 15],
		correction: [1200, 6, 15],
		check: true
	},
	{
		date: [1200, 6, 29],
		correction: [1200, 6, 29],
		check: true
	},
	{
		date: [1200, 6, 30],
		correction: [1200, 6, 30],
		check: true
	},
	{
		date: [1200, 6, 31],
		correction: [1200, 7, 1],
		check: false
	},
	{
		date: [1200, 6, 32],
		correction: [1200, 7, 2],
		check: false
	},
	{
		date: [1200, 11, 0],
		correction: [1200, 10, 30],
		check: false
	},
	{
		date: [1200, 11, 1],
		correction: [1200, 11, 1],
		check: true
	},
	{
		date: [1200, 11, 2],
		correction: [1200, 11, 2],
		check: true
	},
	{
		date: [1200, 11, 15],
		correction: [1200, 11, 15],
		check: true
	},
	{
		date: [1200, 11, 29],
		correction: [1200, 11, 29],
		check: true
	},
	{
		date: [1200, 11, 30],
		correction: [1201, 0, 1],
		check: false
	},
	{
		date: [1200, 11, 31],
		correction: [1201, 0, 2],
		check: false
	},
	{
		date: [1200, 11, 32],
		correction: [1201, 0, 3],
		check: false
	},
	{
		date: [1200, 12, 0],
		correction: [1200, 11, 29],
		check: false
	},
	{
		date: [1200, 12, 1],
		correction: [1201, 0, 1],
		check: false
	},
	{
		date: [1200, 12, 2],
		correction: [1201, 0, 2],
		check: false
	},
	{
		date: [1200, 12, 15],
		correction: [1201, 0, 15],
		check: false
	},
	{
		date: [1200, 12, 29],
		correction: [1201, 0, 29],
		check: false
	},
	{
		date: [1200, 12, 30],
		correction: [1201, 0, 30],
		check: false
	},
	{
		date: [1200, 12, 31],
		correction: [1201, 0, 31],
		check: false
	},
	{
		date: [1200, 12, 32],
		correction: [1201, 1, 1],
		check: false
	},
	{
		date: [1390, -1, 0],
		correction: [1389, 10, 30],
		check: false
	},
	{
		date: [1390, -1, 1],
		correction: [1389, 11, 1],
		check: false
	},
	{
		date: [1390, -1, 2],
		correction: [1389, 11, 2],
		check: false
	},
	{
		date: [1390, -1, 15],
		correction: [1389, 11, 15],
		check: false
	},
	{
		date: [1390, -1, 29],
		correction: [1389, 11, 29],
		check: false
	},
	{
		date: [1390, -1, 30],
		correction: [1390, 0, 1],
		check: false
	},
	{
		date: [1390, -1, 31],
		correction: [1390, 0, 2],
		check: false
	},
	{
		date: [1390, -1, 32],
		correction: [1390, 0, 3],
		check: false
	},
	{
		date: [1390, 0, 0],
		correction: [1389, 11, 29],
		check: false
	},
	{
		date: [1390, 0, 1],
		correction: [1390, 0, 1],
		check: true
	},
	{
		date: [1390, 0, 2],
		correction: [1390, 0, 2],
		check: true
	},
	{
		date: [1390, 0, 15],
		correction: [1390, 0, 15],
		check: true
	},
	{
		date: [1390, 0, 29],
		correction: [1390, 0, 29],
		check: true
	},
	{
		date: [1390, 0, 30],
		correction: [1390, 0, 30],
		check: true
	},
	{
		date: [1390, 0, 31],
		correction: [1390, 0, 31],
		check: true
	},
	{
		date: [1390, 0, 32],
		correction: [1390, 1, 1],
		check: false
	},
	{
		date: [1390, 1, 0],
		correction: [1390, 0, 31],
		check: false
	},
	{
		date: [1390, 1, 1],
		correction: [1390, 1, 1],
		check: true
	},
	{
		date: [1390, 1, 2],
		correction: [1390, 1, 2],
		check: true
	},
	{
		date: [1390, 1, 15],
		correction: [1390, 1, 15],
		check: true
	},
	{
		date: [1390, 1, 29],
		correction: [1390, 1, 29],
		check: true
	},
	{
		date: [1390, 1, 30],
		correction: [1390, 1, 30],
		check: true
	},
	{
		date: [1390, 1, 31],
		correction: [1390, 1, 31],
		check: true
	},
	{
		date: [1390, 1, 32],
		correction: [1390, 2, 1],
		check: false
	},
	{
		date: [1390, 6, 0],
		correction: [1390, 5, 31],
		check: false
	},
	{
		date: [1390, 6, 1],
		correction: [1390, 6, 1],
		check: true
	},
	{
		date: [1390, 6, 2],
		correction: [1390, 6, 2],
		check: true
	},
	{
		date: [1390, 6, 15],
		correction: [1390, 6, 15],
		check: true
	},
	{
		date: [1390, 6, 29],
		correction: [1390, 6, 29],
		check: true
	},
	{
		date: [1390, 6, 30],
		correction: [1390, 6, 30],
		check: true
	},
	{
		date: [1390, 6, 31],
		correction: [1390, 7, 1],
		check: false
	},
	{
		date: [1390, 6, 32],
		correction: [1390, 7, 2],
		check: false
	},
	{
		date: [1390, 11, 0],
		correction: [1390, 10, 30],
		check: false
	},
	{
		date: [1390, 11, 1],
		correction: [1390, 11, 1],
		check: true
	},
	{
		date: [1390, 11, 2],
		correction: [1390, 11, 2],
		check: true
	},
	{
		date: [1390, 11, 15],
		correction: [1390, 11, 15],
		check: true
	},
	{
		date: [1390, 11, 29],
		correction: [1390, 11, 29],
		check: true
	},
	{
		date: [1390, 11, 30],
		correction: [1391, 0, 1],
		check: false
	},
	{
		date: [1390, 11, 31],
		correction: [1391, 0, 2],
		check: false
	},
	{
		date: [1390, 11, 32],
		correction: [1391, 0, 3],
		check: false
	},
	{
		date: [1390, 12, 0],
		correction: [1390, 11, 29],
		check: false
	},
	{
		date: [1390, 12, 1],
		correction: [1391, 0, 1],
		check: false
	},
	{
		date: [1390, 12, 2],
		correction: [1391, 0, 2],
		check: false
	},
	{
		date: [1390, 12, 15],
		correction: [1391, 0, 15],
		check: false
	},
	{
		date: [1390, 12, 29],
		correction: [1391, 0, 29],
		check: false
	},
	{
		date: [1390, 12, 30],
		correction: [1391, 0, 30],
		check: false
	},
	{
		date: [1390, 12, 31],
		correction: [1391, 0, 31],
		check: false
	},
	{
		date: [1390, 12, 32],
		correction: [1391, 1, 1],
		check: false
	},
	{
		date: [1405, -1, 0],
		correction: [1404, 10, 30],
		check: false
	},
	{
		date: [1405, -1, 1],
		correction: [1404, 11, 1],
		check: false
	},
	{
		date: [1405, -1, 2],
		correction: [1404, 11, 2],
		check: false
	},
	{
		date: [1405, -1, 15],
		correction: [1404, 11, 15],
		check: false
	},
	{
		date: [1405, -1, 29],
		correction: [1404, 11, 29],
		check: false
	},
	{
		date: [1405, -1, 30],
		correction: [1405, 0, 1],
		check: false
	},
	{
		date: [1405, -1, 31],
		correction: [1405, 0, 2],
		check: false
	},
	{
		date: [1405, -1, 32],
		correction: [1405, 0, 3],
		check: false
	},
	{
		date: [1405, 0, 0],
		correction: [1404, 11, 29],
		check: false
	},
	{
		date: [1405, 0, 1],
		correction: [1405, 0, 1],
		check: true
	},
	{
		date: [1405, 0, 2],
		correction: [1405, 0, 2],
		check: true
	},
	{
		date: [1405, 0, 15],
		correction: [1405, 0, 15],
		check: true
	},
	{
		date: [1405, 0, 29],
		correction: [1405, 0, 29],
		check: true
	},
	{
		date: [1405, 0, 30],
		correction: [1405, 0, 30],
		check: true
	},
	{
		date: [1405, 0, 31],
		correction: [1405, 0, 31],
		check: true
	},
	{
		date: [1405, 0, 32],
		correction: [1405, 1, 1],
		check: false
	},
	{
		date: [1405, 1, 0],
		correction: [1405, 0, 31],
		check: false
	},
	{
		date: [1405, 1, 1],
		correction: [1405, 1, 1],
		check: true
	},
	{
		date: [1405, 1, 2],
		correction: [1405, 1, 2],
		check: true
	},
	{
		date: [1405, 1, 15],
		correction: [1405, 1, 15],
		check: true
	},
	{
		date: [1405, 1, 29],
		correction: [1405, 1, 29],
		check: true
	},
	{
		date: [1405, 1, 30],
		correction: [1405, 1, 30],
		check: true
	},
	{
		date: [1405, 1, 31],
		correction: [1405, 1, 31],
		check: true
	},
	{
		date: [1405, 1, 32],
		correction: [1405, 2, 1],
		check: false
	},
	{
		date: [1405, 6, 0],
		correction: [1405, 5, 31],
		check: false
	},
	{
		date: [1405, 6, 1],
		correction: [1405, 6, 1],
		check: true
	},
	{
		date: [1405, 6, 2],
		correction: [1405, 6, 2],
		check: true
	},
	{
		date: [1405, 6, 15],
		correction: [1405, 6, 15],
		check: true
	},
	{
		date: [1405, 6, 29],
		correction: [1405, 6, 29],
		check: true
	},
	{
		date: [1405, 6, 30],
		correction: [1405, 6, 30],
		check: true
	},
	{
		date: [1405, 6, 31],
		correction: [1405, 7, 1],
		check: false
	},
	{
		date: [1405, 6, 32],
		correction: [1405, 7, 2],
		check: false
	},
	{
		date: [1405, 11, 0],
		correction: [1405, 10, 30],
		check: false
	},
	{
		date: [1405, 11, 1],
		correction: [1405, 11, 1],
		check: true
	},
	{
		date: [1405, 11, 2],
		correction: [1405, 11, 2],
		check: true
	},
	{
		date: [1405, 11, 15],
		correction: [1405, 11, 15],
		check: true
	},
	{
		date: [1405, 11, 29],
		correction: [1405, 11, 29],
		check: true
	},
	{
		date: [1405, 11, 30],
		correction: [1406, 0, 1],
		check: false
	},
	{
		date: [1405, 11, 31],
		correction: [1406, 0, 2],
		check: false
	},
	{
		date: [1405, 11, 32],
		correction: [1406, 0, 3],
		check: false
	},
	{
		date: [1405, 12, 0],
		correction: [1405, 11, 29],
		check: false
	},
	{
		date: [1405, 12, 1],
		correction: [1406, 0, 1],
		check: false
	},
	{
		date: [1405, 12, 2],
		correction: [1406, 0, 2],
		check: false
	},
	{
		date: [1405, 12, 15],
		correction: [1406, 0, 15],
		check: false
	},
	{
		date: [1405, 12, 29],
		correction: [1406, 0, 29],
		check: false
	},
	{
		date: [1405, 12, 30],
		correction: [1406, 0, 30],
		check: false
	},
	{
		date: [1405, 12, 31],
		correction: [1406, 0, 31],
		check: false
	},
	{
		date: [1405, 12, 32],
		correction: [1406, 1, 1],
		check: false
	},
	{
		date: [1699, -1, 0],
		correction: [1698, 10, 30],
		check: false
	},
	{
		date: [1699, -1, 1],
		correction: [1698, 11, 1],
		check: false
	},
	{
		date: [1699, -1, 2],
		correction: [1698, 11, 2],
		check: false
	},
	{
		date: [1699, -1, 15],
		correction: [1698, 11, 15],
		check: false
	},
	{
		date: [1699, -1, 29],
		correction: [1698, 11, 29],
		check: false
	},
	{
		date: [1699, -1, 30],
		correction: [1699, 0, 1],
		check: false
	},
	{
		date: [1699, -1, 31],
		correction: [1699, 0, 2],
		check: false
	},
	{
		date: [1699, -1, 32],
		correction: [1699, 0, 3],
		check: false
	},
	{
		date: [1699, 0, 0],
		correction: [1698, 11, 29],
		check: false
	},
	{
		date: [1699, 0, 1],
		correction: [1699, 0, 1],
		check: true
	},
	{
		date: [1699, 0, 2],
		correction: [1699, 0, 2],
		check: true
	},
	{
		date: [1699, 0, 15],
		correction: [1699, 0, 15],
		check: true
	},
	{
		date: [1699, 0, 29],
		correction: [1699, 0, 29],
		check: true
	},
	{
		date: [1699, 0, 30],
		correction: [1699, 0, 30],
		check: true
	},
	{
		date: [1699, 0, 31],
		correction: [1699, 0, 31],
		check: true
	},
	{
		date: [1699, 0, 32],
		correction: [1699, 1, 1],
		check: false
	},
	{
		date: [1699, 1, 0],
		correction: [1699, 0, 31],
		check: false
	},
	{
		date: [1699, 1, 1],
		correction: [1699, 1, 1],
		check: true
	},
	{
		date: [1699, 1, 2],
		correction: [1699, 1, 2],
		check: true
	},
	{
		date: [1699, 1, 15],
		correction: [1699, 1, 15],
		check: true
	},
	{
		date: [1699, 1, 29],
		correction: [1699, 1, 29],
		check: true
	},
	{
		date: [1699, 1, 30],
		correction: [1699, 1, 30],
		check: true
	},
	{
		date: [1699, 1, 31],
		correction: [1699, 1, 31],
		check: true
	},
	{
		date: [1699, 1, 32],
		correction: [1699, 2, 1],
		check: false
	},
	{
		date: [1699, 6, 0],
		correction: [1699, 5, 31],
		check: false
	},
	{
		date: [1699, 6, 1],
		correction: [1699, 6, 1],
		check: true
	},
	{
		date: [1699, 6, 2],
		correction: [1699, 6, 2],
		check: true
	},
	{
		date: [1699, 6, 15],
		correction: [1699, 6, 15],
		check: true
	},
	{
		date: [1699, 6, 29],
		correction: [1699, 6, 29],
		check: true
	},
	{
		date: [1699, 6, 30],
		correction: [1699, 6, 30],
		check: true
	},
	{
		date: [1699, 6, 31],
		correction: [1699, 7, 1],
		check: false
	},
	{
		date: [1699, 6, 32],
		correction: [1699, 7, 2],
		check: false
	},
	{
		date: [1699, 11, 0],
		correction: [1699, 10, 30],
		check: false
	},
	{
		date: [1699, 11, 1],
		correction: [1699, 11, 1],
		check: true
	},
	{
		date: [1699, 11, 2],
		correction: [1699, 11, 2],
		check: true
	},
	{
		date: [1699, 11, 15],
		correction: [1699, 11, 15],
		check: true
	},
	{
		date: [1699, 11, 29],
		correction: [1699, 11, 29],
		check: true
	},
	{
		date: [1699, 11, 30],
		correction: [1700, 0, 1],
		check: false
	},
	{
		date: [1699, 11, 31],
		correction: [1700, 0, 2],
		check: false
	},
	{
		date: [1699, 11, 32],
		correction: [1700, 0, 3],
		check: false
	},
	{
		date: [1699, 12, 0],
		correction: [1699, 11, 29],
		check: false
	},
	{
		date: [1699, 12, 1],
		correction: [1700, 0, 1],
		check: false
	},
	{
		date: [1699, 12, 2],
		correction: [1700, 0, 2],
		check: false
	},
	{
		date: [1699, 12, 15],
		correction: [1700, 0, 15],
		check: false
	},
	{
		date: [1699, 12, 29],
		correction: [1700, 0, 29],
		check: false
	},
	{
		date: [1699, 12, 30],
		correction: [1700, 0, 30],
		check: false
	},
	{
		date: [1699, 12, 31],
		correction: [1700, 0, 31],
		check: false
	},
	{
		date: [1699, 12, 32],
		correction: [1700, 1, 1],
		check: false
	},
	{
		date: [1700, -1, 0],
		correction: [1699, 10, 30],
		check: false
	},
	{
		date: [1700, -1, 1],
		correction: [1699, 11, 1],
		check: false
	},
	{
		date: [1700, -1, 2],
		correction: [1699, 11, 2],
		check: false
	},
	{
		date: [1700, -1, 15],
		correction: [1699, 11, 15],
		check: false
	},
	{
		date: [1700, -1, 29],
		correction: [1699, 11, 29],
		check: false
	},
	{
		date: [1700, -1, 30],
		correction: [1700, 0, 1],
		check: false
	},
	{
		date: [1700, -1, 31],
		correction: [1700, 0, 2],
		check: false
	},
	{
		date: [1700, -1, 32],
		correction: [1700, 0, 3],
		check: false
	},
	{
		date: [1700, 0, 0],
		correction: [1699, 11, 29],
		check: false
	},
	{
		date: [1700, 0, 1],
		correction: [1700, 0, 1],
		check: true
	},
	{
		date: [1700, 0, 2],
		correction: [1700, 0, 2],
		check: true
	},
	{
		date: [1700, 0, 15],
		correction: [1700, 0, 15],
		check: true
	},
	{
		date: [1700, 0, 29],
		correction: [1700, 0, 29],
		check: true
	},
	{
		date: [1700, 0, 30],
		correction: [1700, 0, 30],
		check: true
	},
	{
		date: [1700, 0, 31],
		correction: [1700, 0, 31],
		check: true
	},
	{
		date: [1700, 0, 32],
		correction: [1700, 1, 1],
		check: false
	},
	{
		date: [1700, 1, 0],
		correction: [1700, 0, 31],
		check: false
	},
	{
		date: [1700, 1, 1],
		correction: [1700, 1, 1],
		check: true
	},
	{
		date: [1700, 1, 2],
		correction: [1700, 1, 2],
		check: true
	},
	{
		date: [1700, 1, 15],
		correction: [1700, 1, 15],
		check: true
	},
	{
		date: [1700, 1, 29],
		correction: [1700, 1, 29],
		check: true
	},
	{
		date: [1700, 1, 30],
		correction: [1700, 1, 30],
		check: true
	},
	{
		date: [1700, 1, 31],
		correction: [1700, 1, 31],
		check: true
	},
	{
		date: [1700, 1, 32],
		correction: [1700, 2, 1],
		check: false
	},
	{
		date: [1700, 6, 0],
		correction: [1700, 5, 31],
		check: false
	},
	{
		date: [1700, 6, 1],
		correction: [1700, 6, 1],
		check: true
	},
	{
		date: [1700, 6, 2],
		correction: [1700, 6, 2],
		check: true
	},
	{
		date: [1700, 6, 15],
		correction: [1700, 6, 15],
		check: true
	},
	{
		date: [1700, 6, 29],
		correction: [1700, 6, 29],
		check: true
	},
	{
		date: [1700, 6, 30],
		correction: [1700, 6, 30],
		check: true
	},
	{
		date: [1700, 6, 31],
		correction: [1700, 7, 1],
		check: false
	},
	{
		date: [1700, 6, 32],
		correction: [1700, 7, 2],
		check: false
	},
	{
		date: [1700, 11, 0],
		correction: [1700, 10, 30],
		check: false
	},
	{
		date: [1700, 11, 1],
		correction: [1700, 11, 1],
		check: true
	},
	{
		date: [1700, 11, 2],
		correction: [1700, 11, 2],
		check: true
	},
	{
		date: [1700, 11, 15],
		correction: [1700, 11, 15],
		check: true
	},
	{
		date: [1700, 11, 29],
		correction: [1700, 11, 29],
		check: true
	},
	{
		date: [1700, 11, 30],
		correction: [1701, 0, 1],
		check: false
	},
	{
		date: [1700, 11, 31],
		correction: [1701, 0, 2],
		check: false
	},
	{
		date: [1700, 11, 32],
		correction: [1701, 0, 3],
		check: false
	},
	{
		date: [1700, 12, 0],
		correction: [1700, 11, 29],
		check: false
	},
	{
		date: [1700, 12, 1],
		correction: [1701, 0, 1],
		check: false
	},
	{
		date: [1700, 12, 2],
		correction: [1701, 0, 2],
		check: false
	},
	{
		date: [1700, 12, 15],
		correction: [1701, 0, 15],
		check: false
	},
	{
		date: [1700, 12, 29],
		correction: [1701, 0, 29],
		check: false
	},
	{
		date: [1700, 12, 30],
		correction: [1701, 0, 30],
		check: false
	},
	{
		date: [1700, 12, 31],
		correction: [1701, 0, 31],
		check: false
	},
	{
		date: [1700, 12, 32],
		correction: [1701, 1, 1],
		check: false
	},
	{
		date: [1701, -1, 0],
		correction: [1700, 10, 30],
		check: false
	},
	{
		date: [1701, -1, 1],
		correction: [1700, 11, 1],
		check: false
	},
	{
		date: [1701, -1, 2],
		correction: [1700, 11, 2],
		check: false
	},
	{
		date: [1701, -1, 15],
		correction: [1700, 11, 15],
		check: false
	},
	{
		date: [1701, -1, 29],
		correction: [1700, 11, 29],
		check: false
	},
	{
		date: [1701, -1, 30],
		correction: [1701, 0, 1],
		check: false
	},
	{
		date: [1701, -1, 31],
		correction: [1701, 0, 2],
		check: false
	},
	{
		date: [1701, -1, 32],
		correction: [1701, 0, 3],
		check: false
	},
	{
		date: [1701, 0, 0],
		correction: [1700, 11, 29],
		check: false
	},
	{
		date: [1701, 0, 1],
		correction: [1701, 0, 1],
		check: false
	},
	{
		date: [1701, 0, 2],
		correction: [1701, 0, 2],
		check: false
	},
	{
		date: [1701, 0, 15],
		correction: [1701, 0, 15],
		check: false
	},
	{
		date: [1701, 0, 29],
		correction: [1701, 0, 29],
		check: false
	},
	{
		date: [1701, 0, 30],
		correction: [1701, 0, 30],
		check: false
	},
	{
		date: [1701, 0, 31],
		correction: [1701, 0, 31],
		check: false
	},
	{
		date: [1701, 0, 32],
		correction: [1701, 1, 1],
		check: false
	},
	{
		date: [1701, 1, 0],
		correction: [1701, 0, 31],
		check: false
	},
	{
		date: [1701, 1, 1],
		correction: [1701, 1, 1],
		check: false
	},
	{
		date: [1701, 1, 2],
		correction: [1701, 1, 2],
		check: false
	},
	{
		date: [1701, 1, 15],
		correction: [1701, 1, 15],
		check: false
	},
	{
		date: [1701, 1, 29],
		correction: [1701, 1, 29],
		check: false
	},
	{
		date: [1701, 1, 30],
		correction: [1701, 1, 30],
		check: false
	},
	{
		date: [1701, 1, 31],
		correction: [1701, 1, 31],
		check: false
	},
	{
		date: [1701, 1, 32],
		correction: [1701, 2, 1],
		check: false
	},
	{
		date: [1701, 6, 0],
		correction: [1701, 5, 31],
		check: false
	},
	{
		date: [1701, 6, 1],
		correction: [1701, 6, 1],
		check: false
	},
	{
		date: [1701, 6, 2],
		correction: [1701, 6, 2],
		check: false
	},
	{
		date: [1701, 6, 15],
		correction: [1701, 6, 15],
		check: false
	},
	{
		date: [1701, 6, 29],
		correction: [1701, 6, 29],
		check: false
	},
	{
		date: [1701, 6, 30],
		correction: [1701, 6, 30],
		check: false
	},
	{
		date: [1701, 6, 31],
		correction: [1701, 7, 1],
		check: false
	},
	{
		date: [1701, 6, 32],
		correction: [1701, 7, 2],
		check: false
	},
	{
		date: [1701, 11, 0],
		correction: [1701, 10, 30],
		check: false
	},
	{
		date: [1701, 11, 1],
		correction: [1701, 11, 1],
		check: false
	},
	{
		date: [1701, 11, 2],
		correction: [1701, 11, 2],
		check: false
	},
	{
		date: [1701, 11, 15],
		correction: [1701, 11, 15],
		check: false
	},
	{
		date: [1701, 11, 29],
		correction: [1701, 11, 29],
		check: false
	},
	{
		date: [1701, 11, 30],
		correction: [1701, 11, 30],
		check: false
	},
	{
		date: [1701, 11, 31],
		correction: [1702, 0, 1],
		check: false
	},
	{
		date: [1701, 11, 32],
		correction: [1702, 0, 2],
		check: false
	},
	{
		date: [1701, 12, 0],
		correction: [1701, 11, 30],
		check: false
	},
	{
		date: [1701, 12, 1],
		correction: [1702, 0, 1],
		check: false
	},
	{
		date: [1701, 12, 2],
		correction: [1702, 0, 2],
		check: false
	},
	{
		date: [1701, 12, 15],
		correction: [1702, 0, 15],
		check: false
	},
	{
		date: [1701, 12, 29],
		correction: [1702, 0, 29],
		check: false
	},
	{
		date: [1701, 12, 30],
		correction: [1702, 0, 30],
		check: false
	},
	{
		date: [1701, 12, 31],
		correction: [1702, 0, 31],
		check: false
	},
	{
		date: [1701, 12, 32],
		correction: [1702, 1, 1],
		check: false
	}
];

export const checkWeek = [
	{
		week: [0, 0, 0],
		correction: [-1, 53, 0],
		check: false
	},
	{
		week: [0, 0, 1],
		correction: [-1, 53, 1],
		check: false
	},
	{
		week: [0, 0, 2],
		correction: [-1, 53, 2],
		check: false
	},
	{
		week: [0, 0, 3],
		correction: [-1, 53, 3],
		check: false
	},
	{
		week: [0, 0, 4],
		correction: [-1, 53, 4],
		check: false
	},
	{
		week: [0, 0, 5],
		correction: [-1, 53, 5],
		check: false
	},
	{
		week: [0, 0, 6],
		correction: [-1, 53, 6],
		check: false
	},
	{
		week: [0, 0, 7],
		correction: [0, 1, 0],
		check: false
	},
	{
		week: [0, 0, 8],
		correction: [0, 1, 1],
		check: false
	},
	{
		week: [0, 1, 0],
		correction: [0, 1, 0],
		check: false
	},
	{
		week: [0, 1, 1],
		correction: [0, 1, 1],
		check: false
	},
	{
		week: [0, 1, 2],
		correction: [0, 1, 2],
		check: false
	},
	{
		week: [0, 1, 3],
		correction: [0, 1, 3],
		check: false
	},
	{
		week: [0, 1, 4],
		correction: [0, 1, 4],
		check: false
	},
	{
		week: [0, 1, 5],
		correction: [0, 1, 5],
		check: false
	},
	{
		week: [0, 1, 6],
		correction: [0, 1, 6],
		check: false
	},
	{
		week: [0, 1, 7],
		correction: [0, 2, 0],
		check: false
	},
	{
		week: [0, 1, 8],
		correction: [0, 2, 1],
		check: false
	},
	{
		week: [0, 2, 0],
		correction: [0, 2, 0],
		check: false
	},
	{
		week: [0, 2, 1],
		correction: [0, 2, 1],
		check: false
	},
	{
		week: [0, 2, 2],
		correction: [0, 2, 2],
		check: false
	},
	{
		week: [0, 2, 3],
		correction: [0, 2, 3],
		check: false
	},
	{
		week: [0, 2, 4],
		correction: [0, 2, 4],
		check: false
	},
	{
		week: [0, 2, 5],
		correction: [0, 2, 5],
		check: false
	},
	{
		week: [0, 2, 6],
		correction: [0, 2, 6],
		check: false
	},
	{
		week: [0, 2, 7],
		correction: [0, 3, 0],
		check: false
	},
	{
		week: [0, 2, 8],
		correction: [0, 3, 1],
		check: false
	},
	{
		week: [0, 20, 0],
		correction: [0, 20, 0],
		check: false
	},
	{
		week: [0, 20, 1],
		correction: [0, 20, 1],
		check: false
	},
	{
		week: [0, 20, 2],
		correction: [0, 20, 2],
		check: false
	},
	{
		week: [0, 20, 3],
		correction: [0, 20, 3],
		check: false
	},
	{
		week: [0, 20, 4],
		correction: [0, 20, 4],
		check: false
	},
	{
		week: [0, 20, 5],
		correction: [0, 20, 5],
		check: false
	},
	{
		week: [0, 20, 6],
		correction: [0, 20, 6],
		check: false
	},
	{
		week: [0, 20, 7],
		correction: [0, 21, 0],
		check: false
	},
	{
		week: [0, 20, 8],
		correction: [0, 21, 1],
		check: false
	},
	{
		week: [0, 51, 0],
		correction: [0, 51, 0],
		check: false
	},
	{
		week: [0, 51, 1],
		correction: [0, 51, 1],
		check: false
	},
	{
		week: [0, 51, 2],
		correction: [0, 51, 2],
		check: false
	},
	{
		week: [0, 51, 3],
		correction: [0, 51, 3],
		check: false
	},
	{
		week: [0, 51, 4],
		correction: [0, 51, 4],
		check: false
	},
	{
		week: [0, 51, 5],
		correction: [0, 51, 5],
		check: false
	},
	{
		week: [0, 51, 6],
		correction: [0, 51, 6],
		check: false
	},
	{
		week: [0, 51, 7],
		correction: [0, 52, 0],
		check: false
	},
	{
		week: [0, 51, 8],
		correction: [0, 52, 1],
		check: false
	},
	{
		week: [0, 52, 0],
		correction: [0, 52, 0],
		check: false
	},
	{
		week: [0, 52, 1],
		correction: [0, 52, 1],
		check: false
	},
	{
		week: [0, 52, 2],
		correction: [0, 52, 2],
		check: false
	},
	{
		week: [0, 52, 3],
		correction: [0, 52, 3],
		check: false
	},
	{
		week: [0, 52, 4],
		correction: [0, 52, 4],
		check: false
	},
	{
		week: [0, 52, 5],
		correction: [0, 52, 5],
		check: false
	},
	{
		week: [0, 52, 6],
		correction: [0, 52, 6],
		check: false
	},
	{
		week: [0, 52, 7],
		correction: [1, 1, 0],
		check: false
	},
	{
		week: [0, 52, 8],
		correction: [1, 1, 1],
		check: false
	},
	{
		week: [0, 53, 0],
		correction: [1, 1, 0],
		check: false
	},
	{
		week: [0, 53, 1],
		correction: [1, 1, 1],
		check: false
	},
	{
		week: [0, 53, 2],
		correction: [1, 1, 2],
		check: false
	},
	{
		week: [0, 53, 3],
		correction: [1, 1, 3],
		check: false
	},
	{
		week: [0, 53, 4],
		correction: [1, 1, 4],
		check: false
	},
	{
		week: [0, 53, 5],
		correction: [1, 1, 5],
		check: false
	},
	{
		week: [0, 53, 6],
		correction: [1, 1, 6],
		check: false
	},
	{
		week: [0, 53, 7],
		correction: [1, 2, 0],
		check: false
	},
	{
		week: [0, 53, 8],
		correction: [1, 2, 1],
		check: false
	},
	{
		week: [0, 54, 0],
		correction: [1, 2, 0],
		check: false
	},
	{
		week: [0, 54, 1],
		correction: [1, 2, 1],
		check: false
	},
	{
		week: [0, 54, 2],
		correction: [1, 2, 2],
		check: false
	},
	{
		week: [0, 54, 3],
		correction: [1, 2, 3],
		check: false
	},
	{
		week: [0, 54, 4],
		correction: [1, 2, 4],
		check: false
	},
	{
		week: [0, 54, 5],
		correction: [1, 2, 5],
		check: false
	},
	{
		week: [0, 54, 6],
		correction: [1, 2, 6],
		check: false
	},
	{
		week: [0, 54, 7],
		correction: [1, 3, 0],
		check: false
	},
	{
		week: [0, 54, 8],
		correction: [1, 3, 1],
		check: false
	},
	{
		week: [1, 0, 0],
		correction: [0, 52, 0],
		check: false
	},
	{
		week: [1, 0, 1],
		correction: [0, 52, 1],
		check: false
	},
	{
		week: [1, 0, 2],
		correction: [0, 52, 2],
		check: false
	},
	{
		week: [1, 0, 3],
		correction: [0, 52, 3],
		check: false
	},
	{
		week: [1, 0, 4],
		correction: [0, 52, 4],
		check: false
	},
	{
		week: [1, 0, 5],
		correction: [0, 52, 5],
		check: false
	},
	{
		week: [1, 0, 6],
		correction: [0, 52, 6],
		check: false
	},
	{
		week: [1, 0, 7],
		correction: [1, 1, 0],
		check: false
	},
	{
		week: [1, 0, 8],
		correction: [1, 1, 1],
		check: false
	},
	{
		week: [1, 1, 0],
		correction: [1, 1, 0],
		check: true
	},
	{
		week: [1, 1, 1],
		correction: [1, 1, 1],
		check: true
	},
	{
		week: [1, 1, 2],
		correction: [1, 1, 2],
		check: true
	},
	{
		week: [1, 1, 3],
		correction: [1, 1, 3],
		check: true
	},
	{
		week: [1, 1, 4],
		correction: [1, 1, 4],
		check: true
	},
	{
		week: [1, 1, 5],
		correction: [1, 1, 5],
		check: true
	},
	{
		week: [1, 1, 6],
		correction: [1, 1, 6],
		check: true
	},
	{
		week: [1, 1, 7],
		correction: [1, 2, 0],
		check: true
	},
	{
		week: [1, 1, 8],
		correction: [1, 2, 1],
		check: false
	},
	{
		week: [1, 2, 0],
		correction: [1, 2, 0],
		check: true
	},
	{
		week: [1, 2, 1],
		correction: [1, 2, 1],
		check: true
	},
	{
		week: [1, 2, 2],
		correction: [1, 2, 2],
		check: true
	},
	{
		week: [1, 2, 3],
		correction: [1, 2, 3],
		check: true
	},
	{
		week: [1, 2, 4],
		correction: [1, 2, 4],
		check: true
	},
	{
		week: [1, 2, 5],
		correction: [1, 2, 5],
		check: true
	},
	{
		week: [1, 2, 6],
		correction: [1, 2, 6],
		check: true
	},
	{
		week: [1, 2, 7],
		correction: [1, 3, 0],
		check: true
	},
	{
		week: [1, 2, 8],
		correction: [1, 3, 1],
		check: false
	},
	{
		week: [1, 20, 0],
		correction: [1, 20, 0],
		check: true
	},
	{
		week: [1, 20, 1],
		correction: [1, 20, 1],
		check: true
	},
	{
		week: [1, 20, 2],
		correction: [1, 20, 2],
		check: true
	},
	{
		week: [1, 20, 3],
		correction: [1, 20, 3],
		check: true
	},
	{
		week: [1, 20, 4],
		correction: [1, 20, 4],
		check: true
	},
	{
		week: [1, 20, 5],
		correction: [1, 20, 5],
		check: true
	},
	{
		week: [1, 20, 6],
		correction: [1, 20, 6],
		check: true
	},
	{
		week: [1, 20, 7],
		correction: [1, 21, 0],
		check: true
	},
	{
		week: [1, 20, 8],
		correction: [1, 21, 1],
		check: false
	},
	{
		week: [1, 51, 0],
		correction: [1, 51, 0],
		check: true
	},
	{
		week: [1, 51, 1],
		correction: [1, 51, 1],
		check: true
	},
	{
		week: [1, 51, 2],
		correction: [1, 51, 2],
		check: true
	},
	{
		week: [1, 51, 3],
		correction: [1, 51, 3],
		check: true
	},
	{
		week: [1, 51, 4],
		correction: [1, 51, 4],
		check: true
	},
	{
		week: [1, 51, 5],
		correction: [1, 51, 5],
		check: true
	},
	{
		week: [1, 51, 6],
		correction: [1, 51, 6],
		check: true
	},
	{
		week: [1, 51, 7],
		correction: [1, 52, 0],
		check: true
	},
	{
		week: [1, 51, 8],
		correction: [1, 52, 1],
		check: false
	},
	{
		week: [1, 52, 0],
		correction: [1, 52, 0],
		check: true
	},
	{
		week: [1, 52, 1],
		correction: [1, 52, 1],
		check: true
	},
	{
		week: [1, 52, 2],
		correction: [1, 52, 2],
		check: true
	},
	{
		week: [1, 52, 3],
		correction: [1, 52, 3],
		check: true
	},
	{
		week: [1, 52, 4],
		correction: [1, 52, 4],
		check: true
	},
	{
		week: [1, 52, 5],
		correction: [1, 52, 5],
		check: true
	},
	{
		week: [1, 52, 6],
		correction: [1, 52, 6],
		check: true
	},
	{
		week: [1, 52, 7],
		correction: [2, 1, 0],
		check: true
	},
	{
		week: [1, 52, 8],
		correction: [2, 1, 1],
		check: false
	},
	{
		week: [1, 53, 0],
		correction: [2, 1, 0],
		check: false
	},
	{
		week: [1, 53, 1],
		correction: [2, 1, 1],
		check: false
	},
	{
		week: [1, 53, 2],
		correction: [2, 1, 2],
		check: false
	},
	{
		week: [1, 53, 3],
		correction: [2, 1, 3],
		check: false
	},
	{
		week: [1, 53, 4],
		correction: [2, 1, 4],
		check: false
	},
	{
		week: [1, 53, 5],
		correction: [2, 1, 5],
		check: false
	},
	{
		week: [1, 53, 6],
		correction: [2, 1, 6],
		check: false
	},
	{
		week: [1, 53, 7],
		correction: [2, 2, 0],
		check: false
	},
	{
		week: [1, 53, 8],
		correction: [2, 2, 1],
		check: false
	},
	{
		week: [1, 54, 0],
		correction: [2, 2, 0],
		check: false
	},
	{
		week: [1, 54, 1],
		correction: [2, 2, 1],
		check: false
	},
	{
		week: [1, 54, 2],
		correction: [2, 2, 2],
		check: false
	},
	{
		week: [1, 54, 3],
		correction: [2, 2, 3],
		check: false
	},
	{
		week: [1, 54, 4],
		correction: [2, 2, 4],
		check: false
	},
	{
		week: [1, 54, 5],
		correction: [2, 2, 5],
		check: false
	},
	{
		week: [1, 54, 6],
		correction: [2, 2, 6],
		check: false
	},
	{
		week: [1, 54, 7],
		correction: [2, 3, 0],
		check: false
	},
	{
		week: [1, 54, 8],
		correction: [2, 3, 1],
		check: false
	},
	{
		week: [2, 0, 0],
		correction: [1, 52, 0],
		check: false
	},
	{
		week: [2, 0, 1],
		correction: [1, 52, 1],
		check: false
	},
	{
		week: [2, 0, 2],
		correction: [1, 52, 2],
		check: false
	},
	{
		week: [2, 0, 3],
		correction: [1, 52, 3],
		check: false
	},
	{
		week: [2, 0, 4],
		correction: [1, 52, 4],
		check: false
	},
	{
		week: [2, 0, 5],
		correction: [1, 52, 5],
		check: false
	},
	{
		week: [2, 0, 6],
		correction: [1, 52, 6],
		check: false
	},
	{
		week: [2, 0, 7],
		correction: [2, 1, 0],
		check: false
	},
	{
		week: [2, 0, 8],
		correction: [2, 1, 1],
		check: false
	},
	{
		week: [2, 1, 0],
		correction: [2, 1, 0],
		check: true
	},
	{
		week: [2, 1, 1],
		correction: [2, 1, 1],
		check: true
	},
	{
		week: [2, 1, 2],
		correction: [2, 1, 2],
		check: true
	},
	{
		week: [2, 1, 3],
		correction: [2, 1, 3],
		check: true
	},
	{
		week: [2, 1, 4],
		correction: [2, 1, 4],
		check: true
	},
	{
		week: [2, 1, 5],
		correction: [2, 1, 5],
		check: true
	},
	{
		week: [2, 1, 6],
		correction: [2, 1, 6],
		check: true
	},
	{
		week: [2, 1, 7],
		correction: [2, 2, 0],
		check: true
	},
	{
		week: [2, 1, 8],
		correction: [2, 2, 1],
		check: false
	},
	{
		week: [2, 2, 0],
		correction: [2, 2, 0],
		check: true
	},
	{
		week: [2, 2, 1],
		correction: [2, 2, 1],
		check: true
	},
	{
		week: [2, 2, 2],
		correction: [2, 2, 2],
		check: true
	},
	{
		week: [2, 2, 3],
		correction: [2, 2, 3],
		check: true
	},
	{
		week: [2, 2, 4],
		correction: [2, 2, 4],
		check: true
	},
	{
		week: [2, 2, 5],
		correction: [2, 2, 5],
		check: true
	},
	{
		week: [2, 2, 6],
		correction: [2, 2, 6],
		check: true
	},
	{
		week: [2, 2, 7],
		correction: [2, 3, 0],
		check: true
	},
	{
		week: [2, 2, 8],
		correction: [2, 3, 1],
		check: false
	},
	{
		week: [2, 20, 0],
		correction: [2, 20, 0],
		check: true
	},
	{
		week: [2, 20, 1],
		correction: [2, 20, 1],
		check: true
	},
	{
		week: [2, 20, 2],
		correction: [2, 20, 2],
		check: true
	},
	{
		week: [2, 20, 3],
		correction: [2, 20, 3],
		check: true
	},
	{
		week: [2, 20, 4],
		correction: [2, 20, 4],
		check: true
	},
	{
		week: [2, 20, 5],
		correction: [2, 20, 5],
		check: true
	},
	{
		week: [2, 20, 6],
		correction: [2, 20, 6],
		check: true
	},
	{
		week: [2, 20, 7],
		correction: [2, 21, 0],
		check: true
	},
	{
		week: [2, 20, 8],
		correction: [2, 21, 1],
		check: false
	},
	{
		week: [2, 51, 0],
		correction: [2, 51, 0],
		check: true
	},
	{
		week: [2, 51, 1],
		correction: [2, 51, 1],
		check: true
	},
	{
		week: [2, 51, 2],
		correction: [2, 51, 2],
		check: true
	},
	{
		week: [2, 51, 3],
		correction: [2, 51, 3],
		check: true
	},
	{
		week: [2, 51, 4],
		correction: [2, 51, 4],
		check: true
	},
	{
		week: [2, 51, 5],
		correction: [2, 51, 5],
		check: true
	},
	{
		week: [2, 51, 6],
		correction: [2, 51, 6],
		check: true
	},
	{
		week: [2, 51, 7],
		correction: [2, 52, 0],
		check: true
	},
	{
		week: [2, 51, 8],
		correction: [2, 52, 1],
		check: false
	},
	{
		week: [2, 52, 0],
		correction: [2, 52, 0],
		check: true
	},
	{
		week: [2, 52, 1],
		correction: [2, 52, 1],
		check: true
	},
	{
		week: [2, 52, 2],
		correction: [2, 52, 2],
		check: true
	},
	{
		week: [2, 52, 3],
		correction: [2, 52, 3],
		check: true
	},
	{
		week: [2, 52, 4],
		correction: [2, 52, 4],
		check: true
	},
	{
		week: [2, 52, 5],
		correction: [2, 52, 5],
		check: true
	},
	{
		week: [2, 52, 6],
		correction: [2, 52, 6],
		check: true
	},
	{
		week: [2, 52, 7],
		correction: [3, 1, 0],
		check: true
	},
	{
		week: [2, 52, 8],
		correction: [3, 1, 1],
		check: false
	},
	{
		week: [2, 53, 0],
		correction: [3, 1, 0],
		check: false
	},
	{
		week: [2, 53, 1],
		correction: [3, 1, 1],
		check: false
	},
	{
		week: [2, 53, 2],
		correction: [3, 1, 2],
		check: false
	},
	{
		week: [2, 53, 3],
		correction: [3, 1, 3],
		check: false
	},
	{
		week: [2, 53, 4],
		correction: [3, 1, 4],
		check: false
	},
	{
		week: [2, 53, 5],
		correction: [3, 1, 5],
		check: false
	},
	{
		week: [2, 53, 6],
		correction: [3, 1, 6],
		check: false
	},
	{
		week: [2, 53, 7],
		correction: [3, 2, 0],
		check: false
	},
	{
		week: [2, 53, 8],
		correction: [3, 2, 1],
		check: false
	},
	{
		week: [2, 54, 0],
		correction: [3, 2, 0],
		check: false
	},
	{
		week: [2, 54, 1],
		correction: [3, 2, 1],
		check: false
	},
	{
		week: [2, 54, 2],
		correction: [3, 2, 2],
		check: false
	},
	{
		week: [2, 54, 3],
		correction: [3, 2, 3],
		check: false
	},
	{
		week: [2, 54, 4],
		correction: [3, 2, 4],
		check: false
	},
	{
		week: [2, 54, 5],
		correction: [3, 2, 5],
		check: false
	},
	{
		week: [2, 54, 6],
		correction: [3, 2, 6],
		check: false
	},
	{
		week: [2, 54, 7],
		correction: [3, 3, 0],
		check: false
	},
	{
		week: [2, 54, 8],
		correction: [3, 3, 1],
		check: false
	},
	{
		week: [1200, 0, 0],
		correction: [1199, 53, 0],
		check: false
	},
	{
		week: [1200, 0, 1],
		correction: [1199, 53, 1],
		check: false
	},
	{
		week: [1200, 0, 2],
		correction: [1199, 53, 2],
		check: false
	},
	{
		week: [1200, 0, 3],
		correction: [1199, 53, 3],
		check: false
	},
	{
		week: [1200, 0, 4],
		correction: [1199, 53, 4],
		check: false
	},
	{
		week: [1200, 0, 5],
		correction: [1199, 53, 5],
		check: false
	},
	{
		week: [1200, 0, 6],
		correction: [1199, 53, 6],
		check: false
	},
	{
		week: [1200, 0, 7],
		correction: [1200, 1, 0],
		check: false
	},
	{
		week: [1200, 0, 8],
		correction: [1200, 1, 1],
		check: false
	},
	{
		week: [1200, 1, 0],
		correction: [1200, 1, 0],
		check: true
	},
	{
		week: [1200, 1, 1],
		correction: [1200, 1, 1],
		check: true
	},
	{
		week: [1200, 1, 2],
		correction: [1200, 1, 2],
		check: true
	},
	{
		week: [1200, 1, 3],
		correction: [1200, 1, 3],
		check: true
	},
	{
		week: [1200, 1, 4],
		correction: [1200, 1, 4],
		check: true
	},
	{
		week: [1200, 1, 5],
		correction: [1200, 1, 5],
		check: true
	},
	{
		week: [1200, 1, 6],
		correction: [1200, 1, 6],
		check: true
	},
	{
		week: [1200, 1, 7],
		correction: [1200, 2, 0],
		check: true
	},
	{
		week: [1200, 1, 8],
		correction: [1200, 2, 1],
		check: false
	},
	{
		week: [1200, 2, 0],
		correction: [1200, 2, 0],
		check: true
	},
	{
		week: [1200, 2, 1],
		correction: [1200, 2, 1],
		check: true
	},
	{
		week: [1200, 2, 2],
		correction: [1200, 2, 2],
		check: true
	},
	{
		week: [1200, 2, 3],
		correction: [1200, 2, 3],
		check: true
	},
	{
		week: [1200, 2, 4],
		correction: [1200, 2, 4],
		check: true
	},
	{
		week: [1200, 2, 5],
		correction: [1200, 2, 5],
		check: true
	},
	{
		week: [1200, 2, 6],
		correction: [1200, 2, 6],
		check: true
	},
	{
		week: [1200, 2, 7],
		correction: [1200, 3, 0],
		check: true
	},
	{
		week: [1200, 2, 8],
		correction: [1200, 3, 1],
		check: false
	},
	{
		week: [1200, 20, 0],
		correction: [1200, 20, 0],
		check: true
	},
	{
		week: [1200, 20, 1],
		correction: [1200, 20, 1],
		check: true
	},
	{
		week: [1200, 20, 2],
		correction: [1200, 20, 2],
		check: true
	},
	{
		week: [1200, 20, 3],
		correction: [1200, 20, 3],
		check: true
	},
	{
		week: [1200, 20, 4],
		correction: [1200, 20, 4],
		check: true
	},
	{
		week: [1200, 20, 5],
		correction: [1200, 20, 5],
		check: true
	},
	{
		week: [1200, 20, 6],
		correction: [1200, 20, 6],
		check: true
	},
	{
		week: [1200, 20, 7],
		correction: [1200, 21, 0],
		check: true
	},
	{
		week: [1200, 20, 8],
		correction: [1200, 21, 1],
		check: false
	},
	{
		week: [1200, 51, 0],
		correction: [1200, 51, 0],
		check: true
	},
	{
		week: [1200, 51, 1],
		correction: [1200, 51, 1],
		check: true
	},
	{
		week: [1200, 51, 2],
		correction: [1200, 51, 2],
		check: true
	},
	{
		week: [1200, 51, 3],
		correction: [1200, 51, 3],
		check: true
	},
	{
		week: [1200, 51, 4],
		correction: [1200, 51, 4],
		check: true
	},
	{
		week: [1200, 51, 5],
		correction: [1200, 51, 5],
		check: true
	},
	{
		week: [1200, 51, 6],
		correction: [1200, 51, 6],
		check: true
	},
	{
		week: [1200, 51, 7],
		correction: [1200, 52, 0],
		check: true
	},
	{
		week: [1200, 51, 8],
		correction: [1200, 52, 1],
		check: false
	},
	{
		week: [1200, 52, 0],
		correction: [1200, 52, 0],
		check: true
	},
	{
		week: [1200, 52, 1],
		correction: [1200, 52, 1],
		check: true
	},
	{
		week: [1200, 52, 2],
		correction: [1200, 52, 2],
		check: true
	},
	{
		week: [1200, 52, 3],
		correction: [1200, 52, 3],
		check: true
	},
	{
		week: [1200, 52, 4],
		correction: [1200, 52, 4],
		check: true
	},
	{
		week: [1200, 52, 5],
		correction: [1200, 52, 5],
		check: true
	},
	{
		week: [1200, 52, 6],
		correction: [1200, 52, 6],
		check: true
	},
	{
		week: [1200, 52, 7],
		correction: [1201, 1, 0],
		check: true
	},
	{
		week: [1200, 52, 8],
		correction: [1201, 1, 1],
		check: false
	},
	{
		week: [1200, 53, 0],
		correction: [1201, 1, 0],
		check: false
	},
	{
		week: [1200, 53, 1],
		correction: [1201, 1, 1],
		check: false
	},
	{
		week: [1200, 53, 2],
		correction: [1201, 1, 2],
		check: false
	},
	{
		week: [1200, 53, 3],
		correction: [1201, 1, 3],
		check: false
	},
	{
		week: [1200, 53, 4],
		correction: [1201, 1, 4],
		check: false
	},
	{
		week: [1200, 53, 5],
		correction: [1201, 1, 5],
		check: false
	},
	{
		week: [1200, 53, 6],
		correction: [1201, 1, 6],
		check: false
	},
	{
		week: [1200, 53, 7],
		correction: [1201, 2, 0],
		check: false
	},
	{
		week: [1200, 53, 8],
		correction: [1201, 2, 1],
		check: false
	},
	{
		week: [1200, 54, 0],
		correction: [1201, 2, 0],
		check: false
	},
	{
		week: [1200, 54, 1],
		correction: [1201, 2, 1],
		check: false
	},
	{
		week: [1200, 54, 2],
		correction: [1201, 2, 2],
		check: false
	},
	{
		week: [1200, 54, 3],
		correction: [1201, 2, 3],
		check: false
	},
	{
		week: [1200, 54, 4],
		correction: [1201, 2, 4],
		check: false
	},
	{
		week: [1200, 54, 5],
		correction: [1201, 2, 5],
		check: false
	},
	{
		week: [1200, 54, 6],
		correction: [1201, 2, 6],
		check: false
	},
	{
		week: [1200, 54, 7],
		correction: [1201, 3, 0],
		check: false
	},
	{
		week: [1200, 54, 8],
		correction: [1201, 3, 1],
		check: false
	},
	{
		week: [1390, 0, 0],
		correction: [1389, 52, 0],
		check: false
	},
	{
		week: [1390, 0, 1],
		correction: [1389, 52, 1],
		check: false
	},
	{
		week: [1390, 0, 2],
		correction: [1389, 52, 2],
		check: false
	},
	{
		week: [1390, 0, 3],
		correction: [1389, 52, 3],
		check: false
	},
	{
		week: [1390, 0, 4],
		correction: [1389, 52, 4],
		check: false
	},
	{
		week: [1390, 0, 5],
		correction: [1389, 52, 5],
		check: false
	},
	{
		week: [1390, 0, 6],
		correction: [1389, 52, 6],
		check: false
	},
	{
		week: [1390, 0, 7],
		correction: [1390, 1, 0],
		check: false
	},
	{
		week: [1390, 0, 8],
		correction: [1390, 1, 1],
		check: false
	},
	{
		week: [1390, 1, 0],
		correction: [1390, 1, 0],
		check: true
	},
	{
		week: [1390, 1, 1],
		correction: [1390, 1, 1],
		check: true
	},
	{
		week: [1390, 1, 2],
		correction: [1390, 1, 2],
		check: true
	},
	{
		week: [1390, 1, 3],
		correction: [1390, 1, 3],
		check: true
	},
	{
		week: [1390, 1, 4],
		correction: [1390, 1, 4],
		check: true
	},
	{
		week: [1390, 1, 5],
		correction: [1390, 1, 5],
		check: true
	},
	{
		week: [1390, 1, 6],
		correction: [1390, 1, 6],
		check: true
	},
	{
		week: [1390, 1, 7],
		correction: [1390, 2, 0],
		check: true
	},
	{
		week: [1390, 1, 8],
		correction: [1390, 2, 1],
		check: false
	},
	{
		week: [1390, 2, 0],
		correction: [1390, 2, 0],
		check: true
	},
	{
		week: [1390, 2, 1],
		correction: [1390, 2, 1],
		check: true
	},
	{
		week: [1390, 2, 2],
		correction: [1390, 2, 2],
		check: true
	},
	{
		week: [1390, 2, 3],
		correction: [1390, 2, 3],
		check: true
	},
	{
		week: [1390, 2, 4],
		correction: [1390, 2, 4],
		check: true
	},
	{
		week: [1390, 2, 5],
		correction: [1390, 2, 5],
		check: true
	},
	{
		week: [1390, 2, 6],
		correction: [1390, 2, 6],
		check: true
	},
	{
		week: [1390, 2, 7],
		correction: [1390, 3, 0],
		check: true
	},
	{
		week: [1390, 2, 8],
		correction: [1390, 3, 1],
		check: false
	},
	{
		week: [1390, 20, 0],
		correction: [1390, 20, 0],
		check: true
	},
	{
		week: [1390, 20, 1],
		correction: [1390, 20, 1],
		check: true
	},
	{
		week: [1390, 20, 2],
		correction: [1390, 20, 2],
		check: true
	},
	{
		week: [1390, 20, 3],
		correction: [1390, 20, 3],
		check: true
	},
	{
		week: [1390, 20, 4],
		correction: [1390, 20, 4],
		check: true
	},
	{
		week: [1390, 20, 5],
		correction: [1390, 20, 5],
		check: true
	},
	{
		week: [1390, 20, 6],
		correction: [1390, 20, 6],
		check: true
	},
	{
		week: [1390, 20, 7],
		correction: [1390, 21, 0],
		check: true
	},
	{
		week: [1390, 20, 8],
		correction: [1390, 21, 1],
		check: false
	},
	{
		week: [1390, 51, 0],
		correction: [1390, 51, 0],
		check: true
	},
	{
		week: [1390, 51, 1],
		correction: [1390, 51, 1],
		check: true
	},
	{
		week: [1390, 51, 2],
		correction: [1390, 51, 2],
		check: true
	},
	{
		week: [1390, 51, 3],
		correction: [1390, 51, 3],
		check: true
	},
	{
		week: [1390, 51, 4],
		correction: [1390, 51, 4],
		check: true
	},
	{
		week: [1390, 51, 5],
		correction: [1390, 51, 5],
		check: true
	},
	{
		week: [1390, 51, 6],
		correction: [1390, 51, 6],
		check: true
	},
	{
		week: [1390, 51, 7],
		correction: [1390, 52, 0],
		check: true
	},
	{
		week: [1390, 51, 8],
		correction: [1390, 52, 1],
		check: false
	},
	{
		week: [1390, 52, 0],
		correction: [1390, 52, 0],
		check: true
	},
	{
		week: [1390, 52, 1],
		correction: [1390, 52, 1],
		check: true
	},
	{
		week: [1390, 52, 2],
		correction: [1390, 52, 2],
		check: true
	},
	{
		week: [1390, 52, 3],
		correction: [1390, 52, 3],
		check: true
	},
	{
		week: [1390, 52, 4],
		correction: [1390, 52, 4],
		check: true
	},
	{
		week: [1390, 52, 5],
		correction: [1390, 52, 5],
		check: true
	},
	{
		week: [1390, 52, 6],
		correction: [1390, 52, 6],
		check: true
	},
	{
		week: [1390, 52, 7],
		correction: [1391, 1, 0],
		check: true
	},
	{
		week: [1390, 52, 8],
		correction: [1391, 1, 1],
		check: false
	},
	{
		week: [1390, 53, 0],
		correction: [1391, 1, 0],
		check: false
	},
	{
		week: [1390, 53, 1],
		correction: [1391, 1, 1],
		check: false
	},
	{
		week: [1390, 53, 2],
		correction: [1391, 1, 2],
		check: false
	},
	{
		week: [1390, 53, 3],
		correction: [1391, 1, 3],
		check: false
	},
	{
		week: [1390, 53, 4],
		correction: [1391, 1, 4],
		check: false
	},
	{
		week: [1390, 53, 5],
		correction: [1391, 1, 5],
		check: false
	},
	{
		week: [1390, 53, 6],
		correction: [1391, 1, 6],
		check: false
	},
	{
		week: [1390, 53, 7],
		correction: [1391, 2, 0],
		check: false
	},
	{
		week: [1390, 53, 8],
		correction: [1391, 2, 1],
		check: false
	},
	{
		week: [1390, 54, 0],
		correction: [1391, 2, 0],
		check: false
	},
	{
		week: [1390, 54, 1],
		correction: [1391, 2, 1],
		check: false
	},
	{
		week: [1390, 54, 2],
		correction: [1391, 2, 2],
		check: false
	},
	{
		week: [1390, 54, 3],
		correction: [1391, 2, 3],
		check: false
	},
	{
		week: [1390, 54, 4],
		correction: [1391, 2, 4],
		check: false
	},
	{
		week: [1390, 54, 5],
		correction: [1391, 2, 5],
		check: false
	},
	{
		week: [1390, 54, 6],
		correction: [1391, 2, 6],
		check: false
	},
	{
		week: [1390, 54, 7],
		correction: [1391, 3, 0],
		check: false
	},
	{
		week: [1390, 54, 8],
		correction: [1391, 3, 1],
		check: false
	},
	{
		week: [1405, 0, 0],
		correction: [1404, 52, 0],
		check: false
	},
	{
		week: [1405, 0, 1],
		correction: [1404, 52, 1],
		check: false
	},
	{
		week: [1405, 0, 2],
		correction: [1404, 52, 2],
		check: false
	},
	{
		week: [1405, 0, 3],
		correction: [1404, 52, 3],
		check: false
	},
	{
		week: [1405, 0, 4],
		correction: [1404, 52, 4],
		check: false
	},
	{
		week: [1405, 0, 5],
		correction: [1404, 52, 5],
		check: false
	},
	{
		week: [1405, 0, 6],
		correction: [1404, 52, 6],
		check: false
	},
	{
		week: [1405, 0, 7],
		correction: [1405, 1, 0],
		check: false
	},
	{
		week: [1405, 0, 8],
		correction: [1405, 1, 1],
		check: false
	},
	{
		week: [1405, 1, 0],
		correction: [1405, 1, 0],
		check: true
	},
	{
		week: [1405, 1, 1],
		correction: [1405, 1, 1],
		check: true
	},
	{
		week: [1405, 1, 2],
		correction: [1405, 1, 2],
		check: true
	},
	{
		week: [1405, 1, 3],
		correction: [1405, 1, 3],
		check: true
	},
	{
		week: [1405, 1, 4],
		correction: [1405, 1, 4],
		check: true
	},
	{
		week: [1405, 1, 5],
		correction: [1405, 1, 5],
		check: true
	},
	{
		week: [1405, 1, 6],
		correction: [1405, 1, 6],
		check: true
	},
	{
		week: [1405, 1, 7],
		correction: [1405, 2, 0],
		check: true
	},
	{
		week: [1405, 1, 8],
		correction: [1405, 2, 1],
		check: false
	},
	{
		week: [1405, 2, 0],
		correction: [1405, 2, 0],
		check: true
	},
	{
		week: [1405, 2, 1],
		correction: [1405, 2, 1],
		check: true
	},
	{
		week: [1405, 2, 2],
		correction: [1405, 2, 2],
		check: true
	},
	{
		week: [1405, 2, 3],
		correction: [1405, 2, 3],
		check: true
	},
	{
		week: [1405, 2, 4],
		correction: [1405, 2, 4],
		check: true
	},
	{
		week: [1405, 2, 5],
		correction: [1405, 2, 5],
		check: true
	},
	{
		week: [1405, 2, 6],
		correction: [1405, 2, 6],
		check: true
	},
	{
		week: [1405, 2, 7],
		correction: [1405, 3, 0],
		check: true
	},
	{
		week: [1405, 2, 8],
		correction: [1405, 3, 1],
		check: false
	},
	{
		week: [1405, 20, 0],
		correction: [1405, 20, 0],
		check: true
	},
	{
		week: [1405, 20, 1],
		correction: [1405, 20, 1],
		check: true
	},
	{
		week: [1405, 20, 2],
		correction: [1405, 20, 2],
		check: true
	},
	{
		week: [1405, 20, 3],
		correction: [1405, 20, 3],
		check: true
	},
	{
		week: [1405, 20, 4],
		correction: [1405, 20, 4],
		check: true
	},
	{
		week: [1405, 20, 5],
		correction: [1405, 20, 5],
		check: true
	},
	{
		week: [1405, 20, 6],
		correction: [1405, 20, 6],
		check: true
	},
	{
		week: [1405, 20, 7],
		correction: [1405, 21, 0],
		check: true
	},
	{
		week: [1405, 20, 8],
		correction: [1405, 21, 1],
		check: false
	},
	{
		week: [1405, 51, 0],
		correction: [1405, 51, 0],
		check: true
	},
	{
		week: [1405, 51, 1],
		correction: [1405, 51, 1],
		check: true
	},
	{
		week: [1405, 51, 2],
		correction: [1405, 51, 2],
		check: true
	},
	{
		week: [1405, 51, 3],
		correction: [1405, 51, 3],
		check: true
	},
	{
		week: [1405, 51, 4],
		correction: [1405, 51, 4],
		check: true
	},
	{
		week: [1405, 51, 5],
		correction: [1405, 51, 5],
		check: true
	},
	{
		week: [1405, 51, 6],
		correction: [1405, 51, 6],
		check: true
	},
	{
		week: [1405, 51, 7],
		correction: [1405, 52, 0],
		check: true
	},
	{
		week: [1405, 51, 8],
		correction: [1405, 52, 1],
		check: false
	},
	{
		week: [1405, 52, 0],
		correction: [1405, 52, 0],
		check: true
	},
	{
		week: [1405, 52, 1],
		correction: [1405, 52, 1],
		check: true
	},
	{
		week: [1405, 52, 2],
		correction: [1405, 52, 2],
		check: true
	},
	{
		week: [1405, 52, 3],
		correction: [1405, 52, 3],
		check: true
	},
	{
		week: [1405, 52, 4],
		correction: [1405, 52, 4],
		check: true
	},
	{
		week: [1405, 52, 5],
		correction: [1405, 52, 5],
		check: true
	},
	{
		week: [1405, 52, 6],
		correction: [1405, 52, 6],
		check: true
	},
	{
		week: [1405, 52, 7],
		correction: [1406, 1, 0],
		check: true
	},
	{
		week: [1405, 52, 8],
		correction: [1406, 1, 1],
		check: false
	},
	{
		week: [1405, 53, 0],
		correction: [1406, 1, 0],
		check: false
	},
	{
		week: [1405, 53, 1],
		correction: [1406, 1, 1],
		check: false
	},
	{
		week: [1405, 53, 2],
		correction: [1406, 1, 2],
		check: false
	},
	{
		week: [1405, 53, 3],
		correction: [1406, 1, 3],
		check: false
	},
	{
		week: [1405, 53, 4],
		correction: [1406, 1, 4],
		check: false
	},
	{
		week: [1405, 53, 5],
		correction: [1406, 1, 5],
		check: false
	},
	{
		week: [1405, 53, 6],
		correction: [1406, 1, 6],
		check: false
	},
	{
		week: [1405, 53, 7],
		correction: [1406, 2, 0],
		check: false
	},
	{
		week: [1405, 53, 8],
		correction: [1406, 2, 1],
		check: false
	},
	{
		week: [1405, 54, 0],
		correction: [1406, 2, 0],
		check: false
	},
	{
		week: [1405, 54, 1],
		correction: [1406, 2, 1],
		check: false
	},
	{
		week: [1405, 54, 2],
		correction: [1406, 2, 2],
		check: false
	},
	{
		week: [1405, 54, 3],
		correction: [1406, 2, 3],
		check: false
	},
	{
		week: [1405, 54, 4],
		correction: [1406, 2, 4],
		check: false
	},
	{
		week: [1405, 54, 5],
		correction: [1406, 2, 5],
		check: false
	},
	{
		week: [1405, 54, 6],
		correction: [1406, 2, 6],
		check: false
	},
	{
		week: [1405, 54, 7],
		correction: [1406, 3, 0],
		check: false
	},
	{
		week: [1405, 54, 8],
		correction: [1406, 3, 1],
		check: false
	},
	{
		week: [1699, 0, 0],
		correction: [1698, 52, 0],
		check: false
	},
	{
		week: [1699, 0, 1],
		correction: [1698, 52, 1],
		check: false
	},
	{
		week: [1699, 0, 2],
		correction: [1698, 52, 2],
		check: false
	},
	{
		week: [1699, 0, 3],
		correction: [1698, 52, 3],
		check: false
	},
	{
		week: [1699, 0, 4],
		correction: [1698, 52, 4],
		check: false
	},
	{
		week: [1699, 0, 5],
		correction: [1698, 52, 5],
		check: false
	},
	{
		week: [1699, 0, 6],
		correction: [1698, 52, 6],
		check: false
	},
	{
		week: [1699, 0, 7],
		correction: [1699, 1, 0],
		check: false
	},
	{
		week: [1699, 0, 8],
		correction: [1699, 1, 1],
		check: false
	},
	{
		week: [1699, 1, 0],
		correction: [1699, 1, 0],
		check: true
	},
	{
		week: [1699, 1, 1],
		correction: [1699, 1, 1],
		check: true
	},
	{
		week: [1699, 1, 2],
		correction: [1699, 1, 2],
		check: true
	},
	{
		week: [1699, 1, 3],
		correction: [1699, 1, 3],
		check: true
	},
	{
		week: [1699, 1, 4],
		correction: [1699, 1, 4],
		check: true
	},
	{
		week: [1699, 1, 5],
		correction: [1699, 1, 5],
		check: true
	},
	{
		week: [1699, 1, 6],
		correction: [1699, 1, 6],
		check: true
	},
	{
		week: [1699, 1, 7],
		correction: [1699, 2, 0],
		check: true
	},
	{
		week: [1699, 1, 8],
		correction: [1699, 2, 1],
		check: false
	},
	{
		week: [1699, 2, 0],
		correction: [1699, 2, 0],
		check: true
	},
	{
		week: [1699, 2, 1],
		correction: [1699, 2, 1],
		check: true
	},
	{
		week: [1699, 2, 2],
		correction: [1699, 2, 2],
		check: true
	},
	{
		week: [1699, 2, 3],
		correction: [1699, 2, 3],
		check: true
	},
	{
		week: [1699, 2, 4],
		correction: [1699, 2, 4],
		check: true
	},
	{
		week: [1699, 2, 5],
		correction: [1699, 2, 5],
		check: true
	},
	{
		week: [1699, 2, 6],
		correction: [1699, 2, 6],
		check: true
	},
	{
		week: [1699, 2, 7],
		correction: [1699, 3, 0],
		check: true
	},
	{
		week: [1699, 2, 8],
		correction: [1699, 3, 1],
		check: false
	},
	{
		week: [1699, 20, 0],
		correction: [1699, 20, 0],
		check: true
	},
	{
		week: [1699, 20, 1],
		correction: [1699, 20, 1],
		check: true
	},
	{
		week: [1699, 20, 2],
		correction: [1699, 20, 2],
		check: true
	},
	{
		week: [1699, 20, 3],
		correction: [1699, 20, 3],
		check: true
	},
	{
		week: [1699, 20, 4],
		correction: [1699, 20, 4],
		check: true
	},
	{
		week: [1699, 20, 5],
		correction: [1699, 20, 5],
		check: true
	},
	{
		week: [1699, 20, 6],
		correction: [1699, 20, 6],
		check: true
	},
	{
		week: [1699, 20, 7],
		correction: [1699, 21, 0],
		check: true
	},
	{
		week: [1699, 20, 8],
		correction: [1699, 21, 1],
		check: false
	},
	{
		week: [1699, 51, 0],
		correction: [1699, 51, 0],
		check: true
	},
	{
		week: [1699, 51, 1],
		correction: [1699, 51, 1],
		check: true
	},
	{
		week: [1699, 51, 2],
		correction: [1699, 51, 2],
		check: true
	},
	{
		week: [1699, 51, 3],
		correction: [1699, 51, 3],
		check: true
	},
	{
		week: [1699, 51, 4],
		correction: [1699, 51, 4],
		check: true
	},
	{
		week: [1699, 51, 5],
		correction: [1699, 51, 5],
		check: true
	},
	{
		week: [1699, 51, 6],
		correction: [1699, 51, 6],
		check: true
	},
	{
		week: [1699, 51, 7],
		correction: [1699, 52, 0],
		check: true
	},
	{
		week: [1699, 51, 8],
		correction: [1699, 52, 1],
		check: false
	},
	{
		week: [1699, 52, 0],
		correction: [1699, 52, 0],
		check: true
	},
	{
		week: [1699, 52, 1],
		correction: [1699, 52, 1],
		check: true
	},
	{
		week: [1699, 52, 2],
		correction: [1699, 52, 2],
		check: true
	},
	{
		week: [1699, 52, 3],
		correction: [1699, 52, 3],
		check: true
	},
	{
		week: [1699, 52, 4],
		correction: [1699, 52, 4],
		check: true
	},
	{
		week: [1699, 52, 5],
		correction: [1699, 52, 5],
		check: true
	},
	{
		week: [1699, 52, 6],
		correction: [1699, 52, 6],
		check: true
	},
	{
		week: [1699, 52, 7],
		correction: [1700, 1, 0],
		check: true
	},
	{
		week: [1699, 52, 8],
		correction: [1700, 1, 1],
		check: false
	},
	{
		week: [1699, 53, 0],
		correction: [1700, 1, 0],
		check: false
	},
	{
		week: [1699, 53, 1],
		correction: [1700, 1, 1],
		check: false
	},
	{
		week: [1699, 53, 2],
		correction: [1700, 1, 2],
		check: false
	},
	{
		week: [1699, 53, 3],
		correction: [1700, 1, 3],
		check: false
	},
	{
		week: [1699, 53, 4],
		correction: [1700, 1, 4],
		check: false
	},
	{
		week: [1699, 53, 5],
		correction: [1700, 1, 5],
		check: false
	},
	{
		week: [1699, 53, 6],
		correction: [1700, 1, 6],
		check: false
	},
	{
		week: [1699, 53, 7],
		correction: [1700, 2, 0],
		check: false
	},
	{
		week: [1699, 53, 8],
		correction: [1700, 2, 1],
		check: false
	},
	{
		week: [1699, 54, 0],
		correction: [1700, 2, 0],
		check: false
	},
	{
		week: [1699, 54, 1],
		correction: [1700, 2, 1],
		check: false
	},
	{
		week: [1699, 54, 2],
		correction: [1700, 2, 2],
		check: false
	},
	{
		week: [1699, 54, 3],
		correction: [1700, 2, 3],
		check: false
	},
	{
		week: [1699, 54, 4],
		correction: [1700, 2, 4],
		check: false
	},
	{
		week: [1699, 54, 5],
		correction: [1700, 2, 5],
		check: false
	},
	{
		week: [1699, 54, 6],
		correction: [1700, 2, 6],
		check: false
	},
	{
		week: [1699, 54, 7],
		correction: [1700, 3, 0],
		check: false
	},
	{
		week: [1699, 54, 8],
		correction: [1700, 3, 1],
		check: false
	},
	{
		week: [1700, 0, 0],
		correction: [1699, 52, 0],
		check: false
	},
	{
		week: [1700, 0, 1],
		correction: [1699, 52, 1],
		check: false
	},
	{
		week: [1700, 0, 2],
		correction: [1699, 52, 2],
		check: false
	},
	{
		week: [1700, 0, 3],
		correction: [1699, 52, 3],
		check: false
	},
	{
		week: [1700, 0, 4],
		correction: [1699, 52, 4],
		check: false
	},
	{
		week: [1700, 0, 5],
		correction: [1699, 52, 5],
		check: false
	},
	{
		week: [1700, 0, 6],
		correction: [1699, 52, 6],
		check: false
	},
	{
		week: [1700, 0, 7],
		correction: [1700, 1, 0],
		check: false
	},
	{
		week: [1700, 0, 8],
		correction: [1700, 1, 1],
		check: false
	},
	{
		week: [1700, 1, 0],
		correction: [1700, 1, 0],
		check: true
	},
	{
		week: [1700, 1, 1],
		correction: [1700, 1, 1],
		check: true
	},
	{
		week: [1700, 1, 2],
		correction: [1700, 1, 2],
		check: true
	},
	{
		week: [1700, 1, 3],
		correction: [1700, 1, 3],
		check: true
	},
	{
		week: [1700, 1, 4],
		correction: [1700, 1, 4],
		check: true
	},
	{
		week: [1700, 1, 5],
		correction: [1700, 1, 5],
		check: true
	},
	{
		week: [1700, 1, 6],
		correction: [1700, 1, 6],
		check: true
	},
	{
		week: [1700, 1, 7],
		correction: [1700, 2, 0],
		check: true
	},
	{
		week: [1700, 1, 8],
		correction: [1700, 2, 1],
		check: false
	},
	{
		week: [1700, 2, 0],
		correction: [1700, 2, 0],
		check: true
	},
	{
		week: [1700, 2, 1],
		correction: [1700, 2, 1],
		check: true
	},
	{
		week: [1700, 2, 2],
		correction: [1700, 2, 2],
		check: true
	},
	{
		week: [1700, 2, 3],
		correction: [1700, 2, 3],
		check: true
	},
	{
		week: [1700, 2, 4],
		correction: [1700, 2, 4],
		check: true
	},
	{
		week: [1700, 2, 5],
		correction: [1700, 2, 5],
		check: true
	},
	{
		week: [1700, 2, 6],
		correction: [1700, 2, 6],
		check: true
	},
	{
		week: [1700, 2, 7],
		correction: [1700, 3, 0],
		check: true
	},
	{
		week: [1700, 2, 8],
		correction: [1700, 3, 1],
		check: false
	},
	{
		week: [1700, 20, 0],
		correction: [1700, 20, 0],
		check: true
	},
	{
		week: [1700, 20, 1],
		correction: [1700, 20, 1],
		check: true
	},
	{
		week: [1700, 20, 2],
		correction: [1700, 20, 2],
		check: true
	},
	{
		week: [1700, 20, 3],
		correction: [1700, 20, 3],
		check: true
	},
	{
		week: [1700, 20, 4],
		correction: [1700, 20, 4],
		check: true
	},
	{
		week: [1700, 20, 5],
		correction: [1700, 20, 5],
		check: true
	},
	{
		week: [1700, 20, 6],
		correction: [1700, 20, 6],
		check: true
	},
	{
		week: [1700, 20, 7],
		correction: [1700, 21, 0],
		check: true
	},
	{
		week: [1700, 20, 8],
		correction: [1700, 21, 1],
		check: false
	},
	{
		week: [1700, 51, 0],
		correction: [1700, 51, 0],
		check: true
	},
	{
		week: [1700, 51, 1],
		correction: [1700, 51, 1],
		check: true
	},
	{
		week: [1700, 51, 2],
		correction: [1700, 51, 2],
		check: true
	},
	{
		week: [1700, 51, 3],
		correction: [1700, 51, 3],
		check: true
	},
	{
		week: [1700, 51, 4],
		correction: [1700, 51, 4],
		check: true
	},
	{
		week: [1700, 51, 5],
		correction: [1700, 51, 5],
		check: true
	},
	{
		week: [1700, 51, 6],
		correction: [1700, 51, 6],
		check: true
	},
	{
		week: [1700, 51, 7],
		correction: [1700, 52, 0],
		check: true
	},
	{
		week: [1700, 51, 8],
		correction: [1700, 52, 1],
		check: false
	},
	{
		week: [1700, 52, 0],
		correction: [1700, 52, 0],
		check: true
	},
	{
		week: [1700, 52, 1],
		correction: [1700, 52, 1],
		check: true
	},
	{
		week: [1700, 52, 2],
		correction: [1700, 52, 2],
		check: true
	},
	{
		week: [1700, 52, 3],
		correction: [1700, 52, 3],
		check: true
	},
	{
		week: [1700, 52, 4],
		correction: [1700, 52, 4],
		check: true
	},
	{
		week: [1700, 52, 5],
		correction: [1700, 52, 5],
		check: true
	},
	{
		week: [1700, 52, 6],
		correction: [1700, 52, 6],
		check: true
	},
	{
		week: [1700, 52, 7],
		correction: [1701, 1, 0],
		check: true
	},
	{
		week: [1700, 52, 8],
		correction: [1701, 1, 1],
		check: false
	},
	{
		week: [1700, 53, 0],
		correction: [1701, 1, 0],
		check: false
	},
	{
		week: [1700, 53, 1],
		correction: [1701, 1, 1],
		check: false
	},
	{
		week: [1700, 53, 2],
		correction: [1701, 1, 2],
		check: false
	},
	{
		week: [1700, 53, 3],
		correction: [1701, 1, 3],
		check: false
	},
	{
		week: [1700, 53, 4],
		correction: [1701, 1, 4],
		check: false
	},
	{
		week: [1700, 53, 5],
		correction: [1701, 1, 5],
		check: false
	},
	{
		week: [1700, 53, 6],
		correction: [1701, 1, 6],
		check: false
	},
	{
		week: [1700, 53, 7],
		correction: [1701, 2, 0],
		check: false
	},
	{
		week: [1700, 53, 8],
		correction: [1701, 2, 1],
		check: false
	},
	{
		week: [1700, 54, 0],
		correction: [1701, 2, 0],
		check: false
	},
	{
		week: [1700, 54, 1],
		correction: [1701, 2, 1],
		check: false
	},
	{
		week: [1700, 54, 2],
		correction: [1701, 2, 2],
		check: false
	},
	{
		week: [1700, 54, 3],
		correction: [1701, 2, 3],
		check: false
	},
	{
		week: [1700, 54, 4],
		correction: [1701, 2, 4],
		check: false
	},
	{
		week: [1700, 54, 5],
		correction: [1701, 2, 5],
		check: false
	},
	{
		week: [1700, 54, 6],
		correction: [1701, 2, 6],
		check: false
	},
	{
		week: [1700, 54, 7],
		correction: [1701, 3, 0],
		check: false
	},
	{
		week: [1700, 54, 8],
		correction: [1701, 3, 1],
		check: false
	},
	{
		week: [1701, 0, 0],
		correction: [1700, 52, 0],
		check: false
	},
	{
		week: [1701, 0, 1],
		correction: [1700, 52, 1],
		check: false
	},
	{
		week: [1701, 0, 2],
		correction: [1700, 52, 2],
		check: false
	},
	{
		week: [1701, 0, 3],
		correction: [1700, 52, 3],
		check: false
	},
	{
		week: [1701, 0, 4],
		correction: [1700, 52, 4],
		check: false
	},
	{
		week: [1701, 0, 5],
		correction: [1700, 52, 5],
		check: false
	},
	{
		week: [1701, 0, 6],
		correction: [1700, 52, 6],
		check: false
	},
	{
		week: [1701, 0, 7],
		correction: [1701, 1, 0],
		check: false
	},
	{
		week: [1701, 0, 8],
		correction: [1701, 1, 1],
		check: false
	},
	{
		week: [1701, 1, 0],
		correction: [1701, 1, 0],
		check: true
	},
	{
		week: [1701, 1, 1],
		correction: [1701, 1, 1],
		check: true
	},
	{
		week: [1701, 1, 2],
		correction: [1701, 1, 2],
		check: true
	},
	{
		week: [1701, 1, 3],
		correction: [1701, 1, 3],
		check: true
	},
	{
		week: [1701, 1, 4],
		correction: [1701, 1, 4],
		check: true
	},
	{
		week: [1701, 1, 5],
		correction: [1701, 1, 5],
		check: true
	},
	{
		week: [1701, 1, 6],
		correction: [1701, 1, 6],
		check: true
	},
	{
		week: [1701, 1, 7],
		correction: [1701, 2, 0],
		check: true
	},
	{
		week: [1701, 1, 8],
		correction: [1701, 2, 1],
		check: false
	},
	{
		week: [1701, 2, 0],
		correction: [1701, 2, 0],
		check: true
	},
	{
		week: [1701, 2, 1],
		correction: [1701, 2, 1],
		check: true
	},
	{
		week: [1701, 2, 2],
		correction: [1701, 2, 2],
		check: true
	},
	{
		week: [1701, 2, 3],
		correction: [1701, 2, 3],
		check: true
	},
	{
		week: [1701, 2, 4],
		correction: [1701, 2, 4],
		check: true
	},
	{
		week: [1701, 2, 5],
		correction: [1701, 2, 5],
		check: true
	},
	{
		week: [1701, 2, 6],
		correction: [1701, 2, 6],
		check: true
	},
	{
		week: [1701, 2, 7],
		correction: [1701, 3, 0],
		check: true
	},
	{
		week: [1701, 2, 8],
		correction: [1701, 3, 1],
		check: false
	},
	{
		week: [1701, 20, 0],
		correction: [1701, 20, 0],
		check: true
	},
	{
		week: [1701, 20, 1],
		correction: [1701, 20, 1],
		check: true
	},
	{
		week: [1701, 20, 2],
		correction: [1701, 20, 2],
		check: true
	},
	{
		week: [1701, 20, 3],
		correction: [1701, 20, 3],
		check: true
	},
	{
		week: [1701, 20, 4],
		correction: [1701, 20, 4],
		check: true
	},
	{
		week: [1701, 20, 5],
		correction: [1701, 20, 5],
		check: true
	},
	{
		week: [1701, 20, 6],
		correction: [1701, 20, 6],
		check: true
	},
	{
		week: [1701, 20, 7],
		correction: [1701, 21, 0],
		check: true
	},
	{
		week: [1701, 20, 8],
		correction: [1701, 21, 1],
		check: false
	},
	{
		week: [1701, 51, 0],
		correction: [1701, 51, 0],
		check: true
	},
	{
		week: [1701, 51, 1],
		correction: [1701, 51, 1],
		check: true
	},
	{
		week: [1701, 51, 2],
		correction: [1701, 51, 2],
		check: true
	},
	{
		week: [1701, 51, 3],
		correction: [1701, 51, 3],
		check: true
	},
	{
		week: [1701, 51, 4],
		correction: [1701, 51, 4],
		check: true
	},
	{
		week: [1701, 51, 5],
		correction: [1701, 51, 5],
		check: true
	},
	{
		week: [1701, 51, 6],
		correction: [1701, 51, 6],
		check: true
	},
	{
		week: [1701, 51, 7],
		correction: [1701, 52, 0],
		check: true
	},
	{
		week: [1701, 51, 8],
		correction: [1701, 52, 1],
		check: false
	},
	{
		week: [1701, 52, 0],
		correction: [1701, 52, 0],
		check: true
	},
	{
		week: [1701, 52, 1],
		correction: [1701, 52, 1],
		check: true
	},
	{
		week: [1701, 52, 2],
		correction: [1701, 52, 2],
		check: true
	},
	{
		week: [1701, 52, 3],
		correction: [1701, 52, 3],
		check: true
	},
	{
		week: [1701, 52, 4],
		correction: [1701, 52, 4],
		check: true
	},
	{
		week: [1701, 52, 5],
		correction: [1701, 52, 5],
		check: true
	},
	{
		week: [1701, 52, 6],
		correction: [1701, 52, 6],
		check: true
	},
	{
		week: [1701, 52, 7],
		correction: [1701, 53, 0],
		check: true
	},
	{
		week: [1701, 52, 8],
		correction: [1701, 53, 1],
		check: false
	},
	{
		week: [1701, 53, 0],
		correction: [1701, 53, 0],
		check: true
	},
	{
		week: [1701, 53, 1],
		correction: [1701, 53, 1],
		check: true
	},
	{
		week: [1701, 53, 2],
		correction: [1701, 53, 2],
		check: true
	},
	{
		week: [1701, 53, 3],
		correction: [1701, 53, 3],
		check: true
	},
	{
		week: [1701, 53, 4],
		correction: [1701, 53, 4],
		check: true
	},
	{
		week: [1701, 53, 5],
		correction: [1701, 53, 5],
		check: true
	},
	{
		week: [1701, 53, 6],
		correction: [1701, 53, 6],
		check: true
	},
	{
		week: [1701, 53, 7],
		correction: [1702, 1, 0],
		check: true
	},
	{
		week: [1701, 53, 8],
		correction: [1702, 1, 1],
		check: false
	},
	{
		week: [1701, 54, 0],
		correction: [1702, 1, 0],
		check: false
	},
	{
		week: [1701, 54, 1],
		correction: [1702, 1, 1],
		check: false
	},
	{
		week: [1701, 54, 2],
		correction: [1702, 1, 2],
		check: false
	},
	{
		week: [1701, 54, 3],
		correction: [1702, 1, 3],
		check: false
	},
	{
		week: [1701, 54, 4],
		correction: [1702, 1, 4],
		check: false
	},
	{
		week: [1701, 54, 5],
		correction: [1702, 1, 5],
		check: false
	},
	{
		week: [1701, 54, 6],
		correction: [1702, 1, 6],
		check: false
	},
	{
		week: [1701, 54, 7],
		correction: [1702, 2, 0],
		check: false
	},
	{
		week: [1701, 54, 8],
		correction: [1702, 2, 1],
		check: false
	}
];
