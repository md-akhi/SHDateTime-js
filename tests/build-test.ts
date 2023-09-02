import SHDate from "../src/base";

function padstring(str: any, pad: number = 2) {
	return `${str}`.padStart(pad, "0");
}
function strtoint(str: string | number) {
	return (str as any) * 1;
}

for (let year = 1200; year <= 1700; year += 20) {
	[
		[1, 1],
		[1, 2],
		[1, 3],
		[1, 4],
		[1, 5],
		[1, 6],
		[1, 7],
		[1, 15],
		[1, 29],
		[1, 30],
		[1, 31],

		[2, 1],
		[2, 2],
		[2, 15],
		[2, 30],
		[2, 31],

		[3, 1],
		[3, 2],
		[3, 15],
		[3, 30],
		[3, 31],

		[4, 1],
		[4, 2],
		[4, 15],
		[4, 30],
		[4, 31],

		[5, 1],
		[5, 2],
		[5, 15],
		[5, 30],
		[5, 31],

		[6, 1],
		[6, 2],
		[6, 15],
		[6, 29],
		[6, 30],

		[7, 1],
		[7, 2],
		[7, 15],
		[7, 29],
		[7, 30],

		[8, 1],
		[8, 2],
		[8, 15],
		[8, 29],
		[8, 30],

		[9, 1],
		[9, 2],
		[9, 15],
		[9, 29],
		[9, 30],

		[10, 1],
		[10, 2],
		[10, 15],
		[10, 29],
		[10, 30],

		[11, 1],
		[11, 2],
		[11, 15],
		[11, 29],
		[11, 30],

		[12, 1],
		[12, 2],
		[12, 3],
		[12, 4],
		[12, 15],
		[12, 25],
		[12, 26],
		[12, 27],
		[12, 28],
		[12, 30],
		[12, 31]
	].forEach(([month, day]) => {
		let shdate = new SHDate(year, month - 1, day);
		const [
			years,
			months,
			days,
			hours,
			minutes,
			seconds,
			milliseconds,
			dow,
			diy,
			doy,
			dim,
			wiy,
			[woyw, woyy],
			dsn,
			msn,
			dfn,
			efn,
			esn,
			mfn,
			asn,
			csn,
			ssn,
			osn,
			sun,
			leaps
		] = shdate.format(
			"yy=mm=dd=hh=ii=ss=ms=dow=diy=doy=dim=wiy=woy=dsn=msn=dfn=efn=esn=mfn=asn=csn=ssn=osn=sun=lps"
		);

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
			console.log("{},");
		} else
			console.log(
				`{
					sdate:[${years},${
					strtoint(months) + 1
				},${days},${hours},${minutes},${seconds},${milliseconds}],
				sdata:{
					solar:[${years},${months},${days}],
					DateTime:"${padstring(years, 4)}-${padstring(
					strtoint(months) + 1,
					2
				)}-${padstring(days, 2)} ${padstring(hours, 2)}:${padstring(
					minutes,
					2
				)}:${padstring(seconds, 2)}",
				DateAber:"${padstring(days, 2)} ${msn} ${padstring(years)}",
				DateAberWithDate:"${dsn} ${padstring(days, 2)} ${msn} ${padstring(years, 4)}",
				DateDoy:"${padstring(years, 4)}.${padstring(doy, 3)}",
				DateWoy:"${padstring(woyy)}W${padstring(woyw)}-${dow + 1}"} ,
				stime:${shdate.getTime()},
					gdate:[${gyears},${
					gmonths * 1 + 1
				},${gdays},${ghours},${gminutes},${gseconds},${milliseconds}],
				gdata:{gregorian:[${gyears},${gmonths},${gdays}]} ,
				gtime:${gdate.getTime()}
			},`
			);
	});
}

// *****************************************************************
