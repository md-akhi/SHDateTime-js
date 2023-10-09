import SHDate from "../src/base";
let shdate = new SHDate();
function padstring(str: any, pad: number = 2) {
	return `${str}`.padStart(pad, "0");
}
function strtoint(str: string | number) {
	return (str as any) * 1;
}

for (let H24 = -1; H24 <= 24; H24 += 2) {
	for (let min = -1; min <= 60; min += 2) {
		for (let sec = -1; sec <= 60; sec += 2) {
			for (let ms = -1; ms <= 1020; ms += 20) {
				console.log(
					`{time:[${H24},${min},${sec},${ms}],check24:${SHDate.checkTime(
						H24,
						min,
						sec,
						ms
					)},check12:${SHDate.checkTime(H24, min, sec, ms, true)}},`
				);
			}
		}
	}
}

for (let year = -1; year <= 1700; year += 50) {
	for (let month = -1; month <= 13; month += 2) {
		for (let day = -1; day <= 33; day += 2) {
			console.log(
				`{date:[${year},${month},${day}],check:${shdate.checkDate(
					year,
					month,
					day
				)}},`
			);
		}
	}
}

for (let year = -1; year <= 1700; year += 50) {
	for (let week = -1; week <= 53; week += 5) {
		for (let day = -1; day <= 8; day += 2) {
			console.log(
				`{week:[${year},${week},${day}],check:${shdate.checkWeek(
					year,
					week,
					day
				)}},`
			);
		}
	}
}
