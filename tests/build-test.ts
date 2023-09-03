import SHDate from "../src/base";

for (let year = 1200; year <= 1700; year += 1) {
	[
		[1, 1],
		[12, 29],
		[12, 30]
	].forEach(([month, day]) => {
		let shdate = new SHDate(year, month - 1, day);
		const [years, months, days, hours, minutes, seconds, milliseconds, leaps] =
			shdate.format("yy=mm=dd=hh=ii=ss=ms=lps");

		let gdate = new Date(shdate.getTime());
		const [gyears, gmonths, gdays, ghours, gminutes, gseconds, gdow] = [
			gdate.getFullYear(),
			gdate.getMonth(),
			gdate.getDate(),
			gdate.getHours(),
			gdate.getMinutes(),
			gdate.getSeconds(),
			gdate.getDay()
		];
		if (month == 12 && day !== parseInt(days)) {
			console.log("");
		} else
			console.log(
				`{
					sdate:[${years},${
					months * 1 + 1
				},${days},${hours},${minutes},${seconds},${milliseconds}],
				sdata:{
					solar:[${years},${months},${days}],
					Leap:${shdate.isLeapYear()},
					Leaps:${leaps}
				} ,
					gdate:[${gyears},${
					gmonths * 1 + 1
				},${gdays},${ghours},${gminutes},${gseconds},${milliseconds}],
				gdata:{
					gregorian:[${gyears},${gmonths},${gdays}]
				}
			},`
			);
	});
}

// *****************************************************************
