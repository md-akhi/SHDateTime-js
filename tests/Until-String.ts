/**
 * bug on date [1380+20, 1, 2, 0, 0, 0, 0]
 */

/*
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
		[12, 29],
		[12, 30]
	].forEach(([month, day]) => {
		//if(year==1380&& month ==1&& day==2)continue;// bug data
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
			console.log("");
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
				DateMonth:"${msn}",
				DateYearMonth:"${padstring(years, 4)}${month % 2 & 0 ? "." : "-"}${msn}",
				DateYear:"${padstring(years, 4)}",
				DateAberWithDate:"${dsn} ${padstring(days, 2)} ${msn} ${padstring(years, 4)}",
				DateDoy:"${padstring(years, 4)}.${padstring(doy, 3)}",
				DateWoy:"${padstring(woyy)}W${padstring(woyw)}-${dow + 1}" ,
				DateWithSlash:"${padstring(years, 4)}/${padstring(
					strtoint(months) + 1,
					2
				)}/${padstring(days, 2)}" ,
				DateWithOutSlash:"${padstring(years, 4)}${padstring(
					strtoint(months) + 1,
					2
				)}${padstring(days, 2)}" },
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
*/

export const DateString = [
	{
		sdate: [1200, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 1],
			DateTime: "1200-01-01 00:00:00",
			DateAber: "01 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Wed 01 Far 1200",
			DateDoy: "1200.000",
			DateWoy: "1199W53-5",
			DateWithSlash: "1200/01/01",
			DateWithOutSlash: "12000101"
		},
		stime: -4695161144000,
		gdate: [1821, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 2, 21] },
		gtime: -4695161144000
	},
	{
		sdate: [1200, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 2],
			DateTime: "1200-01-02 00:00:00",
			DateAber: "02 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Thu 02 Far 1200",
			DateDoy: "1200.001",
			DateWoy: "1199W53-6",
			DateWithSlash: "1200/01/02",
			DateWithOutSlash: "12000102"
		},
		stime: -4695074744000,
		gdate: [1821, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 2, 22] },
		gtime: -4695074744000
	},
	{
		sdate: [1200, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 3],
			DateTime: "1200-01-03 00:00:00",
			DateAber: "03 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Fri 03 Far 1200",
			DateDoy: "1200.002",
			DateWoy: "1199W53-7",
			DateWithSlash: "1200/01/03",
			DateWithOutSlash: "12000103"
		},
		stime: -4694988344000,
		gdate: [1821, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 2, 23] },
		gtime: -4694988344000
	},
	{
		sdate: [1200, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 4],
			DateTime: "1200-01-04 00:00:00",
			DateAber: "04 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Sat 04 Far 1200",
			DateDoy: "1200.003",
			DateWoy: "1200W01-1",
			DateWithSlash: "1200/01/04",
			DateWithOutSlash: "12000104"
		},
		stime: -4694901944000,
		gdate: [1821, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 2, 24] },
		gtime: -4694901944000
	},
	{
		sdate: [1200, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 5],
			DateTime: "1200-01-05 00:00:00",
			DateAber: "05 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Sun 05 Far 1200",
			DateDoy: "1200.004",
			DateWoy: "1200W01-2",
			DateWithSlash: "1200/01/05",
			DateWithOutSlash: "12000105"
		},
		stime: -4694815544000,
		gdate: [1821, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 2, 25] },
		gtime: -4694815544000
	},
	{
		sdate: [1200, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 6],
			DateTime: "1200-01-06 00:00:00",
			DateAber: "06 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Mon 06 Far 1200",
			DateDoy: "1200.005",
			DateWoy: "1200W01-3",
			DateWithSlash: "1200/01/06",
			DateWithOutSlash: "12000106"
		},
		stime: -4694729144000,
		gdate: [1821, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 2, 26] },
		gtime: -4694729144000
	},
	{
		sdate: [1200, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 7],
			DateTime: "1200-01-07 00:00:00",
			DateAber: "07 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Tue 07 Far 1200",
			DateDoy: "1200.006",
			DateWoy: "1200W01-4",
			DateWithSlash: "1200/01/07",
			DateWithOutSlash: "12000107"
		},
		stime: -4694642744000,
		gdate: [1821, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 2, 27] },
		gtime: -4694642744000
	},
	{
		sdate: [1200, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 15],
			DateTime: "1200-01-15 00:00:00",
			DateAber: "15 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Wed 15 Far 1200",
			DateDoy: "1200.014",
			DateWoy: "1200W02-5",
			DateWithSlash: "1200/01/15",
			DateWithOutSlash: "12000115"
		},
		stime: -4693951544000,
		gdate: [1821, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 3, 4] },
		gtime: -4693951544000
	},
	{
		sdate: [1200, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 29],
			DateTime: "1200-01-29 00:00:00",
			DateAber: "29 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Wed 29 Far 1200",
			DateDoy: "1200.028",
			DateWoy: "1200W04-5",
			DateWithSlash: "1200/01/29",
			DateWithOutSlash: "12000129"
		},
		stime: -4692741944000,
		gdate: [1821, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 3, 18] },
		gtime: -4692741944000
	},
	{
		sdate: [1200, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 30],
			DateTime: "1200-01-30 00:00:00",
			DateAber: "30 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Thu 30 Far 1200",
			DateDoy: "1200.029",
			DateWoy: "1200W04-6",
			DateWithSlash: "1200/01/30",
			DateWithOutSlash: "12000130"
		},
		stime: -4692655544000,
		gdate: [1821, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 3, 19] },
		gtime: -4692655544000
	},
	{
		sdate: [1200, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 31],
			DateTime: "1200-01-31 00:00:00",
			DateAber: "31 Far 1200",
			DateMonth: "Far",
			DateYearMonth: "1200-Far",
			DateYear: "1200",
			DateAberWithDate: "Fri 31 Far 1200",
			DateDoy: "1200.030",
			DateWoy: "1200W04-7",
			DateWithSlash: "1200/01/31",
			DateWithOutSlash: "12000131"
		},
		stime: -4692569144000,
		gdate: [1821, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 3, 20] },
		gtime: -4692569144000
	},
	{
		sdate: [1200, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 1],
			DateTime: "1200-02-01 00:00:00",
			DateAber: "01 Ord 1200",
			DateMonth: "Ord",
			DateYearMonth: "1200-Ord",
			DateYear: "1200",
			DateAberWithDate: "Sat 01 Ord 1200",
			DateDoy: "1200.031",
			DateWoy: "1200W05-1",
			DateWithSlash: "1200/02/01",
			DateWithOutSlash: "12000201"
		},
		stime: -4692482744000,
		gdate: [1821, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 3, 21] },
		gtime: -4692482744000
	},
	{
		sdate: [1200, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 2],
			DateTime: "1200-02-02 00:00:00",
			DateAber: "02 Ord 1200",
			DateMonth: "Ord",
			DateYearMonth: "1200-Ord",
			DateYear: "1200",
			DateAberWithDate: "Sun 02 Ord 1200",
			DateDoy: "1200.032",
			DateWoy: "1200W05-2",
			DateWithSlash: "1200/02/02",
			DateWithOutSlash: "12000202"
		},
		stime: -4692396344000,
		gdate: [1821, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 3, 22] },
		gtime: -4692396344000
	},
	{
		sdate: [1200, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 15],
			DateTime: "1200-02-15 00:00:00",
			DateAber: "15 Ord 1200",
			DateMonth: "Ord",
			DateYearMonth: "1200-Ord",
			DateYear: "1200",
			DateAberWithDate: "Sat 15 Ord 1200",
			DateDoy: "1200.045",
			DateWoy: "1200W07-1",
			DateWithSlash: "1200/02/15",
			DateWithOutSlash: "12000215"
		},
		stime: -4691273144000,
		gdate: [1821, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 4, 5] },
		gtime: -4691273144000
	},
	{
		sdate: [1200, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 30],
			DateTime: "1200-02-30 00:00:00",
			DateAber: "30 Ord 1200",
			DateMonth: "Ord",
			DateYearMonth: "1200-Ord",
			DateYear: "1200",
			DateAberWithDate: "Sun 30 Ord 1200",
			DateDoy: "1200.060",
			DateWoy: "1200W09-2",
			DateWithSlash: "1200/02/30",
			DateWithOutSlash: "12000230"
		},
		stime: -4689977144000,
		gdate: [1821, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 4, 20] },
		gtime: -4689977144000
	},
	{
		sdate: [1200, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 31],
			DateTime: "1200-02-31 00:00:00",
			DateAber: "31 Ord 1200",
			DateMonth: "Ord",
			DateYearMonth: "1200-Ord",
			DateYear: "1200",
			DateAberWithDate: "Mon 31 Ord 1200",
			DateDoy: "1200.061",
			DateWoy: "1200W09-3",
			DateWithSlash: "1200/02/31",
			DateWithOutSlash: "12000231"
		},
		stime: -4689890744000,
		gdate: [1821, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 4, 21] },
		gtime: -4689890744000
	},
	{
		sdate: [1200, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 1],
			DateTime: "1200-03-01 00:00:00",
			DateAber: "01 Kho 1200",
			DateMonth: "Kho",
			DateYearMonth: "1200-Kho",
			DateYear: "1200",
			DateAberWithDate: "Tue 01 Kho 1200",
			DateDoy: "1200.062",
			DateWoy: "1200W09-4",
			DateWithSlash: "1200/03/01",
			DateWithOutSlash: "12000301"
		},
		stime: -4689804344000,
		gdate: [1821, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 4, 22] },
		gtime: -4689804344000
	},
	{
		sdate: [1200, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 2],
			DateTime: "1200-03-02 00:00:00",
			DateAber: "02 Kho 1200",
			DateMonth: "Kho",
			DateYearMonth: "1200-Kho",
			DateYear: "1200",
			DateAberWithDate: "Wed 02 Kho 1200",
			DateDoy: "1200.063",
			DateWoy: "1200W09-5",
			DateWithSlash: "1200/03/02",
			DateWithOutSlash: "12000302"
		},
		stime: -4689717944000,
		gdate: [1821, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 4, 23] },
		gtime: -4689717944000
	},
	{
		sdate: [1200, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 15],
			DateTime: "1200-03-15 00:00:00",
			DateAber: "15 Kho 1200",
			DateMonth: "Kho",
			DateYearMonth: "1200-Kho",
			DateYear: "1200",
			DateAberWithDate: "Tue 15 Kho 1200",
			DateDoy: "1200.076",
			DateWoy: "1200W11-4",
			DateWithSlash: "1200/03/15",
			DateWithOutSlash: "12000315"
		},
		stime: -4688594744000,
		gdate: [1821, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 5, 5] },
		gtime: -4688594744000
	},
	{
		sdate: [1200, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 30],
			DateTime: "1200-03-30 00:00:00",
			DateAber: "30 Kho 1200",
			DateMonth: "Kho",
			DateYearMonth: "1200-Kho",
			DateYear: "1200",
			DateAberWithDate: "Wed 30 Kho 1200",
			DateDoy: "1200.091",
			DateWoy: "1200W13-5",
			DateWithSlash: "1200/03/30",
			DateWithOutSlash: "12000330"
		},
		stime: -4687298744000,
		gdate: [1821, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 5, 20] },
		gtime: -4687298744000
	},
	{
		sdate: [1200, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 31],
			DateTime: "1200-03-31 00:00:00",
			DateAber: "31 Kho 1200",
			DateMonth: "Kho",
			DateYearMonth: "1200-Kho",
			DateYear: "1200",
			DateAberWithDate: "Thu 31 Kho 1200",
			DateDoy: "1200.092",
			DateWoy: "1200W13-6",
			DateWithSlash: "1200/03/31",
			DateWithOutSlash: "12000331"
		},
		stime: -4687212344000,
		gdate: [1821, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 5, 21] },
		gtime: -4687212344000
	},
	{
		sdate: [1200, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 1],
			DateTime: "1200-04-01 00:00:00",
			DateAber: "01 Tir 1200",
			DateMonth: "Tir",
			DateYearMonth: "1200-Tir",
			DateYear: "1200",
			DateAberWithDate: "Fri 01 Tir 1200",
			DateDoy: "1200.093",
			DateWoy: "1200W13-7",
			DateWithSlash: "1200/04/01",
			DateWithOutSlash: "12000401"
		},
		stime: -4687125944000,
		gdate: [1821, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 5, 22] },
		gtime: -4687125944000
	},
	{
		sdate: [1200, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 2],
			DateTime: "1200-04-02 00:00:00",
			DateAber: "02 Tir 1200",
			DateMonth: "Tir",
			DateYearMonth: "1200-Tir",
			DateYear: "1200",
			DateAberWithDate: "Sat 02 Tir 1200",
			DateDoy: "1200.094",
			DateWoy: "1200W14-1",
			DateWithSlash: "1200/04/02",
			DateWithOutSlash: "12000402"
		},
		stime: -4687039544000,
		gdate: [1821, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 5, 23] },
		gtime: -4687039544000
	},
	{
		sdate: [1200, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 15],
			DateTime: "1200-04-15 00:00:00",
			DateAber: "15 Tir 1200",
			DateMonth: "Tir",
			DateYearMonth: "1200-Tir",
			DateYear: "1200",
			DateAberWithDate: "Fri 15 Tir 1200",
			DateDoy: "1200.107",
			DateWoy: "1200W15-7",
			DateWithSlash: "1200/04/15",
			DateWithOutSlash: "12000415"
		},
		stime: -4685916344000,
		gdate: [1821, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 6, 6] },
		gtime: -4685916344000
	},
	{
		sdate: [1200, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 30],
			DateTime: "1200-04-30 00:00:00",
			DateAber: "30 Tir 1200",
			DateMonth: "Tir",
			DateYearMonth: "1200-Tir",
			DateYear: "1200",
			DateAberWithDate: "Sat 30 Tir 1200",
			DateDoy: "1200.122",
			DateWoy: "1200W18-1",
			DateWithSlash: "1200/04/30",
			DateWithOutSlash: "12000430"
		},
		stime: -4684620344000,
		gdate: [1821, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 6, 21] },
		gtime: -4684620344000
	},
	{
		sdate: [1200, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 31],
			DateTime: "1200-04-31 00:00:00",
			DateAber: "31 Tir 1200",
			DateMonth: "Tir",
			DateYearMonth: "1200-Tir",
			DateYear: "1200",
			DateAberWithDate: "Sun 31 Tir 1200",
			DateDoy: "1200.123",
			DateWoy: "1200W18-2",
			DateWithSlash: "1200/04/31",
			DateWithOutSlash: "12000431"
		},
		stime: -4684533944000,
		gdate: [1821, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 6, 22] },
		gtime: -4684533944000
	},
	{
		sdate: [1200, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 1],
			DateTime: "1200-05-01 00:00:00",
			DateAber: "01 Amo 1200",
			DateMonth: "Amo",
			DateYearMonth: "1200-Amo",
			DateYear: "1200",
			DateAberWithDate: "Mon 01 Amo 1200",
			DateDoy: "1200.124",
			DateWoy: "1200W18-3",
			DateWithSlash: "1200/05/01",
			DateWithOutSlash: "12000501"
		},
		stime: -4684447544000,
		gdate: [1821, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 6, 23] },
		gtime: -4684447544000
	},
	{
		sdate: [1200, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 2],
			DateTime: "1200-05-02 00:00:00",
			DateAber: "02 Amo 1200",
			DateMonth: "Amo",
			DateYearMonth: "1200-Amo",
			DateYear: "1200",
			DateAberWithDate: "Tue 02 Amo 1200",
			DateDoy: "1200.125",
			DateWoy: "1200W18-4",
			DateWithSlash: "1200/05/02",
			DateWithOutSlash: "12000502"
		},
		stime: -4684361144000,
		gdate: [1821, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 6, 24] },
		gtime: -4684361144000
	},
	{
		sdate: [1200, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 15],
			DateTime: "1200-05-15 00:00:00",
			DateAber: "15 Amo 1200",
			DateMonth: "Amo",
			DateYearMonth: "1200-Amo",
			DateYear: "1200",
			DateAberWithDate: "Mon 15 Amo 1200",
			DateDoy: "1200.138",
			DateWoy: "1200W20-3",
			DateWithSlash: "1200/05/15",
			DateWithOutSlash: "12000515"
		},
		stime: -4683237944000,
		gdate: [1821, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 7, 6] },
		gtime: -4683237944000
	},
	{
		sdate: [1200, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 30],
			DateTime: "1200-05-30 00:00:00",
			DateAber: "30 Amo 1200",
			DateMonth: "Amo",
			DateYearMonth: "1200-Amo",
			DateYear: "1200",
			DateAberWithDate: "Tue 30 Amo 1200",
			DateDoy: "1200.153",
			DateWoy: "1200W22-4",
			DateWithSlash: "1200/05/30",
			DateWithOutSlash: "12000530"
		},
		stime: -4681941944000,
		gdate: [1821, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 7, 21] },
		gtime: -4681941944000
	},
	{
		sdate: [1200, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 31],
			DateTime: "1200-05-31 00:00:00",
			DateAber: "31 Amo 1200",
			DateMonth: "Amo",
			DateYearMonth: "1200-Amo",
			DateYear: "1200",
			DateAberWithDate: "Wed 31 Amo 1200",
			DateDoy: "1200.154",
			DateWoy: "1200W22-5",
			DateWithSlash: "1200/05/31",
			DateWithOutSlash: "12000531"
		},
		stime: -4681855544000,
		gdate: [1821, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 7, 22] },
		gtime: -4681855544000
	},
	{
		sdate: [1200, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 1],
			DateTime: "1200-06-01 00:00:00",
			DateAber: "01 Sha 1200",
			DateMonth: "Sha",
			DateYearMonth: "1200-Sha",
			DateYear: "1200",
			DateAberWithDate: "Thu 01 Sha 1200",
			DateDoy: "1200.155",
			DateWoy: "1200W22-6",
			DateWithSlash: "1200/06/01",
			DateWithOutSlash: "12000601"
		},
		stime: -4681769144000,
		gdate: [1821, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 7, 23] },
		gtime: -4681769144000
	},
	{
		sdate: [1200, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 2],
			DateTime: "1200-06-02 00:00:00",
			DateAber: "02 Sha 1200",
			DateMonth: "Sha",
			DateYearMonth: "1200-Sha",
			DateYear: "1200",
			DateAberWithDate: "Fri 02 Sha 1200",
			DateDoy: "1200.156",
			DateWoy: "1200W22-7",
			DateWithSlash: "1200/06/02",
			DateWithOutSlash: "12000602"
		},
		stime: -4681682744000,
		gdate: [1821, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 7, 24] },
		gtime: -4681682744000
	},
	{
		sdate: [1200, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 15],
			DateTime: "1200-06-15 00:00:00",
			DateAber: "15 Sha 1200",
			DateMonth: "Sha",
			DateYearMonth: "1200-Sha",
			DateYear: "1200",
			DateAberWithDate: "Thu 15 Sha 1200",
			DateDoy: "1200.169",
			DateWoy: "1200W24-6",
			DateWithSlash: "1200/06/15",
			DateWithOutSlash: "12000615"
		},
		stime: -4680559544000,
		gdate: [1821, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 8, 6] },
		gtime: -4680559544000
	},
	{
		sdate: [1200, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 29],
			DateTime: "1200-06-29 00:00:00",
			DateAber: "29 Sha 1200",
			DateMonth: "Sha",
			DateYearMonth: "1200-Sha",
			DateYear: "1200",
			DateAberWithDate: "Thu 29 Sha 1200",
			DateDoy: "1200.183",
			DateWoy: "1200W26-6",
			DateWithSlash: "1200/06/29",
			DateWithOutSlash: "12000629"
		},
		stime: -4679349944000,
		gdate: [1821, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 8, 20] },
		gtime: -4679349944000
	},
	{
		sdate: [1200, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 30],
			DateTime: "1200-06-30 00:00:00",
			DateAber: "30 Sha 1200",
			DateMonth: "Sha",
			DateYearMonth: "1200-Sha",
			DateYear: "1200",
			DateAberWithDate: "Fri 30 Sha 1200",
			DateDoy: "1200.184",
			DateWoy: "1200W26-7",
			DateWithSlash: "1200/06/30",
			DateWithOutSlash: "12000630"
		},
		stime: -4679263544000,
		gdate: [1821, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 8, 21] },
		gtime: -4679263544000
	},
	{
		sdate: [1200, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 1],
			DateTime: "1200-07-01 00:00:00",
			DateAber: "01 Meh 1200",
			DateMonth: "Meh",
			DateYearMonth: "1200-Meh",
			DateYear: "1200",
			DateAberWithDate: "Sun 01 Meh 1200",
			DateDoy: "1200.186",
			DateWoy: "1200W27-2",
			DateWithSlash: "1200/07/01",
			DateWithOutSlash: "12000701"
		},
		stime: -4679090744000,
		gdate: [1821, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 8, 23] },
		gtime: -4679090744000
	},
	{
		sdate: [1200, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 2],
			DateTime: "1200-07-02 00:00:00",
			DateAber: "02 Meh 1200",
			DateMonth: "Meh",
			DateYearMonth: "1200-Meh",
			DateYear: "1200",
			DateAberWithDate: "Mon 02 Meh 1200",
			DateDoy: "1200.187",
			DateWoy: "1200W27-3",
			DateWithSlash: "1200/07/02",
			DateWithOutSlash: "12000702"
		},
		stime: -4679004344000,
		gdate: [1821, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 8, 24] },
		gtime: -4679004344000
	},
	{
		sdate: [1200, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 15],
			DateTime: "1200-07-15 00:00:00",
			DateAber: "15 Meh 1200",
			DateMonth: "Meh",
			DateYearMonth: "1200-Meh",
			DateYear: "1200",
			DateAberWithDate: "Sun 15 Meh 1200",
			DateDoy: "1200.200",
			DateWoy: "1200W29-2",
			DateWithSlash: "1200/07/15",
			DateWithOutSlash: "12000715"
		},
		stime: -4677881144000,
		gdate: [1821, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 9, 7] },
		gtime: -4677881144000
	},
	{
		sdate: [1200, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 29],
			DateTime: "1200-07-29 00:00:00",
			DateAber: "29 Meh 1200",
			DateMonth: "Meh",
			DateYearMonth: "1200-Meh",
			DateYear: "1200",
			DateAberWithDate: "Sun 29 Meh 1200",
			DateDoy: "1200.214",
			DateWoy: "1200W31-2",
			DateWithSlash: "1200/07/29",
			DateWithOutSlash: "12000729"
		},
		stime: -4676671544000,
		gdate: [1821, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 9, 21] },
		gtime: -4676671544000
	},
	{
		sdate: [1200, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 30],
			DateTime: "1200-07-30 00:00:00",
			DateAber: "30 Meh 1200",
			DateMonth: "Meh",
			DateYearMonth: "1200-Meh",
			DateYear: "1200",
			DateAberWithDate: "Mon 30 Meh 1200",
			DateDoy: "1200.215",
			DateWoy: "1200W31-3",
			DateWithSlash: "1200/07/30",
			DateWithOutSlash: "12000730"
		},
		stime: -4676585144000,
		gdate: [1821, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 9, 22] },
		gtime: -4676585144000
	},
	{
		sdate: [1200, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 1],
			DateTime: "1200-08-01 00:00:00",
			DateAber: "01 Aba 1200",
			DateMonth: "Aba",
			DateYearMonth: "1200-Aba",
			DateYear: "1200",
			DateAberWithDate: "Tue 01 Aba 1200",
			DateDoy: "1200.216",
			DateWoy: "1200W31-4",
			DateWithSlash: "1200/08/01",
			DateWithOutSlash: "12000801"
		},
		stime: -4676498744000,
		gdate: [1821, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 9, 23] },
		gtime: -4676498744000
	},
	{
		sdate: [1200, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 2],
			DateTime: "1200-08-02 00:00:00",
			DateAber: "02 Aba 1200",
			DateMonth: "Aba",
			DateYearMonth: "1200-Aba",
			DateYear: "1200",
			DateAberWithDate: "Wed 02 Aba 1200",
			DateDoy: "1200.217",
			DateWoy: "1200W31-5",
			DateWithSlash: "1200/08/02",
			DateWithOutSlash: "12000802"
		},
		stime: -4676412344000,
		gdate: [1821, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 9, 24] },
		gtime: -4676412344000
	},
	{
		sdate: [1200, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 15],
			DateTime: "1200-08-15 00:00:00",
			DateAber: "15 Aba 1200",
			DateMonth: "Aba",
			DateYearMonth: "1200-Aba",
			DateYear: "1200",
			DateAberWithDate: "Tue 15 Aba 1200",
			DateDoy: "1200.230",
			DateWoy: "1200W33-4",
			DateWithSlash: "1200/08/15",
			DateWithOutSlash: "12000815"
		},
		stime: -4675289144000,
		gdate: [1821, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 10, 6] },
		gtime: -4675289144000
	},
	{
		sdate: [1200, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 29],
			DateTime: "1200-08-29 00:00:00",
			DateAber: "29 Aba 1200",
			DateMonth: "Aba",
			DateYearMonth: "1200-Aba",
			DateYear: "1200",
			DateAberWithDate: "Tue 29 Aba 1200",
			DateDoy: "1200.244",
			DateWoy: "1200W35-4",
			DateWithSlash: "1200/08/29",
			DateWithOutSlash: "12000829"
		},
		stime: -4674079544000,
		gdate: [1821, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 10, 20] },
		gtime: -4674079544000
	},
	{
		sdate: [1200, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 30],
			DateTime: "1200-08-30 00:00:00",
			DateAber: "30 Aba 1200",
			DateMonth: "Aba",
			DateYearMonth: "1200-Aba",
			DateYear: "1200",
			DateAberWithDate: "Wed 30 Aba 1200",
			DateDoy: "1200.245",
			DateWoy: "1200W35-5",
			DateWithSlash: "1200/08/30",
			DateWithOutSlash: "12000830"
		},
		stime: -4673993144000,
		gdate: [1821, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 10, 21] },
		gtime: -4673993144000
	},
	{
		sdate: [1200, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 1],
			DateTime: "1200-09-01 00:00:00",
			DateAber: "01 Aza 1200",
			DateMonth: "Aza",
			DateYearMonth: "1200-Aza",
			DateYear: "1200",
			DateAberWithDate: "Thu 01 Aza 1200",
			DateDoy: "1200.246",
			DateWoy: "1200W35-6",
			DateWithSlash: "1200/09/01",
			DateWithOutSlash: "12000901"
		},
		stime: -4673906744000,
		gdate: [1821, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 10, 22] },
		gtime: -4673906744000
	},
	{
		sdate: [1200, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 2],
			DateTime: "1200-09-02 00:00:00",
			DateAber: "02 Aza 1200",
			DateMonth: "Aza",
			DateYearMonth: "1200-Aza",
			DateYear: "1200",
			DateAberWithDate: "Fri 02 Aza 1200",
			DateDoy: "1200.247",
			DateWoy: "1200W35-7",
			DateWithSlash: "1200/09/02",
			DateWithOutSlash: "12000902"
		},
		stime: -4673820344000,
		gdate: [1821, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 10, 23] },
		gtime: -4673820344000
	},
	{
		sdate: [1200, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 15],
			DateTime: "1200-09-15 00:00:00",
			DateAber: "15 Aza 1200",
			DateMonth: "Aza",
			DateYearMonth: "1200-Aza",
			DateYear: "1200",
			DateAberWithDate: "Thu 15 Aza 1200",
			DateDoy: "1200.260",
			DateWoy: "1200W37-6",
			DateWithSlash: "1200/09/15",
			DateWithOutSlash: "12000915"
		},
		stime: -4672697144000,
		gdate: [1821, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 11, 6] },
		gtime: -4672697144000
	},
	{
		sdate: [1200, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 29],
			DateTime: "1200-09-29 00:00:00",
			DateAber: "29 Aza 1200",
			DateMonth: "Aza",
			DateYearMonth: "1200-Aza",
			DateYear: "1200",
			DateAberWithDate: "Thu 29 Aza 1200",
			DateDoy: "1200.274",
			DateWoy: "1200W39-6",
			DateWithSlash: "1200/09/29",
			DateWithOutSlash: "12000929"
		},
		stime: -4671487544000,
		gdate: [1821, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 11, 20] },
		gtime: -4671487544000
	},
	{
		sdate: [1200, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 30],
			DateTime: "1200-09-30 00:00:00",
			DateAber: "30 Aza 1200",
			DateMonth: "Aza",
			DateYearMonth: "1200-Aza",
			DateYear: "1200",
			DateAberWithDate: "Fri 30 Aza 1200",
			DateDoy: "1200.275",
			DateWoy: "1200W39-7",
			DateWithSlash: "1200/09/30",
			DateWithOutSlash: "12000930"
		},
		stime: -4671401144000,
		gdate: [1821, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 11, 21] },
		gtime: -4671401144000
	},
	{
		sdate: [1200, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 1],
			DateTime: "1200-10-01 00:00:00",
			DateAber: "01 Dey 1200",
			DateMonth: "Dey",
			DateYearMonth: "1200-Dey",
			DateYear: "1200",
			DateAberWithDate: "Sat 01 Dey 1200",
			DateDoy: "1200.276",
			DateWoy: "1200W40-1",
			DateWithSlash: "1200/10/01",
			DateWithOutSlash: "12001001"
		},
		stime: -4671314744000,
		gdate: [1821, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 11, 22] },
		gtime: -4671314744000
	},
	{
		sdate: [1200, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 2],
			DateTime: "1200-10-02 00:00:00",
			DateAber: "02 Dey 1200",
			DateMonth: "Dey",
			DateYearMonth: "1200-Dey",
			DateYear: "1200",
			DateAberWithDate: "Sun 02 Dey 1200",
			DateDoy: "1200.277",
			DateWoy: "1200W40-2",
			DateWithSlash: "1200/10/02",
			DateWithOutSlash: "12001002"
		},
		stime: -4671228344000,
		gdate: [1821, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1821, 11, 23] },
		gtime: -4671228344000
	},
	{
		sdate: [1200, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 15],
			DateTime: "1200-10-15 00:00:00",
			DateAber: "15 Dey 1200",
			DateMonth: "Dey",
			DateYearMonth: "1200-Dey",
			DateYear: "1200",
			DateAberWithDate: "Sat 15 Dey 1200",
			DateDoy: "1200.290",
			DateWoy: "1200W42-1",
			DateWithSlash: "1200/10/15",
			DateWithOutSlash: "12001015"
		},
		stime: -4670105144000,
		gdate: [1822, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 0, 5] },
		gtime: -4670105144000
	},
	{
		sdate: [1200, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 29],
			DateTime: "1200-10-29 00:00:00",
			DateAber: "29 Dey 1200",
			DateMonth: "Dey",
			DateYearMonth: "1200-Dey",
			DateYear: "1200",
			DateAberWithDate: "Sat 29 Dey 1200",
			DateDoy: "1200.304",
			DateWoy: "1200W44-1",
			DateWithSlash: "1200/10/29",
			DateWithOutSlash: "12001029"
		},
		stime: -4668895544000,
		gdate: [1822, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 0, 19] },
		gtime: -4668895544000
	},
	{
		sdate: [1200, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 30],
			DateTime: "1200-10-30 00:00:00",
			DateAber: "30 Dey 1200",
			DateMonth: "Dey",
			DateYearMonth: "1200-Dey",
			DateYear: "1200",
			DateAberWithDate: "Sun 30 Dey 1200",
			DateDoy: "1200.305",
			DateWoy: "1200W44-2",
			DateWithSlash: "1200/10/30",
			DateWithOutSlash: "12001030"
		},
		stime: -4668809144000,
		gdate: [1822, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 0, 20] },
		gtime: -4668809144000
	},
	{
		sdate: [1200, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 1],
			DateTime: "1200-11-01 00:00:00",
			DateAber: "01 Bah 1200",
			DateMonth: "Bah",
			DateYearMonth: "1200-Bah",
			DateYear: "1200",
			DateAberWithDate: "Mon 01 Bah 1200",
			DateDoy: "1200.306",
			DateWoy: "1200W44-3",
			DateWithSlash: "1200/11/01",
			DateWithOutSlash: "12001101"
		},
		stime: -4668722744000,
		gdate: [1822, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 0, 21] },
		gtime: -4668722744000
	},
	{
		sdate: [1200, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 2],
			DateTime: "1200-11-02 00:00:00",
			DateAber: "02 Bah 1200",
			DateMonth: "Bah",
			DateYearMonth: "1200-Bah",
			DateYear: "1200",
			DateAberWithDate: "Tue 02 Bah 1200",
			DateDoy: "1200.307",
			DateWoy: "1200W44-4",
			DateWithSlash: "1200/11/02",
			DateWithOutSlash: "12001102"
		},
		stime: -4668636344000,
		gdate: [1822, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 0, 22] },
		gtime: -4668636344000
	},
	{
		sdate: [1200, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 15],
			DateTime: "1200-11-15 00:00:00",
			DateAber: "15 Bah 1200",
			DateMonth: "Bah",
			DateYearMonth: "1200-Bah",
			DateYear: "1200",
			DateAberWithDate: "Mon 15 Bah 1200",
			DateDoy: "1200.320",
			DateWoy: "1200W46-3",
			DateWithSlash: "1200/11/15",
			DateWithOutSlash: "12001115"
		},
		stime: -4667513144000,
		gdate: [1822, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 1, 4] },
		gtime: -4667513144000
	},
	{
		sdate: [1200, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 29],
			DateTime: "1200-11-29 00:00:00",
			DateAber: "29 Bah 1200",
			DateMonth: "Bah",
			DateYearMonth: "1200-Bah",
			DateYear: "1200",
			DateAberWithDate: "Mon 29 Bah 1200",
			DateDoy: "1200.334",
			DateWoy: "1200W48-3",
			DateWithSlash: "1200/11/29",
			DateWithOutSlash: "12001129"
		},
		stime: -4666303544000,
		gdate: [1822, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 1, 18] },
		gtime: -4666303544000
	},
	{
		sdate: [1200, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 30],
			DateTime: "1200-11-30 00:00:00",
			DateAber: "30 Bah 1200",
			DateMonth: "Bah",
			DateYearMonth: "1200-Bah",
			DateYear: "1200",
			DateAberWithDate: "Tue 30 Bah 1200",
			DateDoy: "1200.335",
			DateWoy: "1200W48-4",
			DateWithSlash: "1200/11/30",
			DateWithOutSlash: "12001130"
		},
		stime: -4666217144000,
		gdate: [1822, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 1, 19] },
		gtime: -4666217144000
	},
	{
		sdate: [1200, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 1],
			DateTime: "1200-12-01 00:00:00",
			DateAber: "01 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Wed 01 Esf 1200",
			DateDoy: "1200.336",
			DateWoy: "1200W48-5",
			DateWithSlash: "1200/12/01",
			DateWithOutSlash: "12001201"
		},
		stime: -4666130744000,
		gdate: [1822, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 1, 20] },
		gtime: -4666130744000
	},
	{
		sdate: [1200, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 2],
			DateTime: "1200-12-02 00:00:00",
			DateAber: "02 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Thu 02 Esf 1200",
			DateDoy: "1200.337",
			DateWoy: "1200W48-6",
			DateWithSlash: "1200/12/02",
			DateWithOutSlash: "12001202"
		},
		stime: -4666044344000,
		gdate: [1822, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 1, 21] },
		gtime: -4666044344000
	},
	{
		sdate: [1200, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 3],
			DateTime: "1200-12-03 00:00:00",
			DateAber: "03 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Fri 03 Esf 1200",
			DateDoy: "1200.338",
			DateWoy: "1200W48-7",
			DateWithSlash: "1200/12/03",
			DateWithOutSlash: "12001203"
		},
		stime: -4665957944000,
		gdate: [1822, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 1, 22] },
		gtime: -4665957944000
	},
	{
		sdate: [1200, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 4],
			DateTime: "1200-12-04 00:00:00",
			DateAber: "04 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Sat 04 Esf 1200",
			DateDoy: "1200.339",
			DateWoy: "1200W49-1",
			DateWithSlash: "1200/12/04",
			DateWithOutSlash: "12001204"
		},
		stime: -4665871544000,
		gdate: [1822, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 1, 23] },
		gtime: -4665871544000
	},
	{
		sdate: [1200, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 15],
			DateTime: "1200-12-15 00:00:00",
			DateAber: "15 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Wed 15 Esf 1200",
			DateDoy: "1200.350",
			DateWoy: "1200W50-5",
			DateWithSlash: "1200/12/15",
			DateWithOutSlash: "12001215"
		},
		stime: -4664921144000,
		gdate: [1822, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 2, 6] },
		gtime: -4664921144000
	},
	{
		sdate: [1200, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 25],
			DateTime: "1200-12-25 00:00:00",
			DateAber: "25 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Sat 25 Esf 1200",
			DateDoy: "1200.360",
			DateWoy: "1200W52-1",
			DateWithSlash: "1200/12/25",
			DateWithOutSlash: "12001225"
		},
		stime: -4664057144000,
		gdate: [1822, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 2, 16] },
		gtime: -4664057144000
	},
	{
		sdate: [1200, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 26],
			DateTime: "1200-12-26 00:00:00",
			DateAber: "26 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Sun 26 Esf 1200",
			DateDoy: "1200.361",
			DateWoy: "1200W52-2",
			DateWithSlash: "1200/12/26",
			DateWithOutSlash: "12001226"
		},
		stime: -4663970744000,
		gdate: [1822, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 2, 17] },
		gtime: -4663970744000
	},
	{
		sdate: [1200, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 27],
			DateTime: "1200-12-27 00:00:00",
			DateAber: "27 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Mon 27 Esf 1200",
			DateDoy: "1200.362",
			DateWoy: "1200W52-3",
			DateWithSlash: "1200/12/27",
			DateWithOutSlash: "12001227"
		},
		stime: -4663884344000,
		gdate: [1822, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 2, 18] },
		gtime: -4663884344000
	},
	{
		sdate: [1200, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 28],
			DateTime: "1200-12-28 00:00:00",
			DateAber: "28 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Tue 28 Esf 1200",
			DateDoy: "1200.363",
			DateWoy: "1200W52-4",
			DateWithSlash: "1200/12/28",
			DateWithOutSlash: "12001228"
		},
		stime: -4663797944000,
		gdate: [1822, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 2, 19] },
		gtime: -4663797944000
	},
	{
		sdate: [1200, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 29],
			DateTime: "1200-12-29 00:00:00",
			DateAber: "29 Esf 1200",
			DateMonth: "Esf",
			DateYearMonth: "1200-Esf",
			DateYear: "1200",
			DateAberWithDate: "Wed 29 Esf 1200",
			DateDoy: "1200.364",
			DateWoy: "1200W52-5",
			DateWithSlash: "1200/12/29",
			DateWithOutSlash: "12001229"
		},
		stime: -4663711544000,
		gdate: [1822, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 2, 20] },
		gtime: -4663711544000
	},

	{
		sdate: [1220, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 1],
			DateTime: "1220-01-01 00:00:00",
			DateAber: "01 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Sun 01 Far 1220",
			DateDoy: "1220.000",
			DateWoy: "1220W01-2",
			DateWithSlash: "1220/01/01",
			DateWithOutSlash: "12200101"
		},
		stime: -4064009144000,
		gdate: [1841, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 2, 21] },
		gtime: -4064009144000
	},
	{
		sdate: [1220, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 2],
			DateTime: "1220-01-02 00:00:00",
			DateAber: "02 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Mon 02 Far 1220",
			DateDoy: "1220.001",
			DateWoy: "1220W01-3",
			DateWithSlash: "1220/01/02",
			DateWithOutSlash: "12200102"
		},
		stime: -4063922744000,
		gdate: [1841, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 2, 22] },
		gtime: -4063922744000
	},
	{
		sdate: [1220, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 3],
			DateTime: "1220-01-03 00:00:00",
			DateAber: "03 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Tue 03 Far 1220",
			DateDoy: "1220.002",
			DateWoy: "1220W01-4",
			DateWithSlash: "1220/01/03",
			DateWithOutSlash: "12200103"
		},
		stime: -4063836344000,
		gdate: [1841, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 2, 23] },
		gtime: -4063836344000
	},
	{
		sdate: [1220, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 4],
			DateTime: "1220-01-04 00:00:00",
			DateAber: "04 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Wed 04 Far 1220",
			DateDoy: "1220.003",
			DateWoy: "1220W01-5",
			DateWithSlash: "1220/01/04",
			DateWithOutSlash: "12200104"
		},
		stime: -4063749944000,
		gdate: [1841, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 2, 24] },
		gtime: -4063749944000
	},
	{
		sdate: [1220, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 5],
			DateTime: "1220-01-05 00:00:00",
			DateAber: "05 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Thu 05 Far 1220",
			DateDoy: "1220.004",
			DateWoy: "1220W01-6",
			DateWithSlash: "1220/01/05",
			DateWithOutSlash: "12200105"
		},
		stime: -4063663544000,
		gdate: [1841, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 2, 25] },
		gtime: -4063663544000
	},
	{
		sdate: [1220, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 6],
			DateTime: "1220-01-06 00:00:00",
			DateAber: "06 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Fri 06 Far 1220",
			DateDoy: "1220.005",
			DateWoy: "1220W01-7",
			DateWithSlash: "1220/01/06",
			DateWithOutSlash: "12200106"
		},
		stime: -4063577144000,
		gdate: [1841, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 2, 26] },
		gtime: -4063577144000
	},
	{
		sdate: [1220, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 7],
			DateTime: "1220-01-07 00:00:00",
			DateAber: "07 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Sat 07 Far 1220",
			DateDoy: "1220.006",
			DateWoy: "1220W02-1",
			DateWithSlash: "1220/01/07",
			DateWithOutSlash: "12200107"
		},
		stime: -4063490744000,
		gdate: [1841, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 2, 27] },
		gtime: -4063490744000
	},
	{
		sdate: [1220, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 15],
			DateTime: "1220-01-15 00:00:00",
			DateAber: "15 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Sun 15 Far 1220",
			DateDoy: "1220.014",
			DateWoy: "1220W03-2",
			DateWithSlash: "1220/01/15",
			DateWithOutSlash: "12200115"
		},
		stime: -4062799544000,
		gdate: [1841, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 3, 4] },
		gtime: -4062799544000
	},
	{
		sdate: [1220, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 29],
			DateTime: "1220-01-29 00:00:00",
			DateAber: "29 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Sun 29 Far 1220",
			DateDoy: "1220.028",
			DateWoy: "1220W05-2",
			DateWithSlash: "1220/01/29",
			DateWithOutSlash: "12200129"
		},
		stime: -4061589944000,
		gdate: [1841, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 3, 18] },
		gtime: -4061589944000
	},
	{
		sdate: [1220, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 30],
			DateTime: "1220-01-30 00:00:00",
			DateAber: "30 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Mon 30 Far 1220",
			DateDoy: "1220.029",
			DateWoy: "1220W05-3",
			DateWithSlash: "1220/01/30",
			DateWithOutSlash: "12200130"
		},
		stime: -4061503544000,
		gdate: [1841, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 3, 19] },
		gtime: -4061503544000
	},
	{
		sdate: [1220, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 31],
			DateTime: "1220-01-31 00:00:00",
			DateAber: "31 Far 1220",
			DateMonth: "Far",
			DateYearMonth: "1220-Far",
			DateYear: "1220",
			DateAberWithDate: "Tue 31 Far 1220",
			DateDoy: "1220.030",
			DateWoy: "1220W05-4",
			DateWithSlash: "1220/01/31",
			DateWithOutSlash: "12200131"
		},
		stime: -4061417144000,
		gdate: [1841, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 3, 20] },
		gtime: -4061417144000
	},
	{
		sdate: [1220, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 1],
			DateTime: "1220-02-01 00:00:00",
			DateAber: "01 Ord 1220",
			DateMonth: "Ord",
			DateYearMonth: "1220-Ord",
			DateYear: "1220",
			DateAberWithDate: "Wed 01 Ord 1220",
			DateDoy: "1220.031",
			DateWoy: "1220W05-5",
			DateWithSlash: "1220/02/01",
			DateWithOutSlash: "12200201"
		},
		stime: -4061330744000,
		gdate: [1841, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 3, 21] },
		gtime: -4061330744000
	},
	{
		sdate: [1220, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 2],
			DateTime: "1220-02-02 00:00:00",
			DateAber: "02 Ord 1220",
			DateMonth: "Ord",
			DateYearMonth: "1220-Ord",
			DateYear: "1220",
			DateAberWithDate: "Thu 02 Ord 1220",
			DateDoy: "1220.032",
			DateWoy: "1220W05-6",
			DateWithSlash: "1220/02/02",
			DateWithOutSlash: "12200202"
		},
		stime: -4061244344000,
		gdate: [1841, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 3, 22] },
		gtime: -4061244344000
	},
	{
		sdate: [1220, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 15],
			DateTime: "1220-02-15 00:00:00",
			DateAber: "15 Ord 1220",
			DateMonth: "Ord",
			DateYearMonth: "1220-Ord",
			DateYear: "1220",
			DateAberWithDate: "Wed 15 Ord 1220",
			DateDoy: "1220.045",
			DateWoy: "1220W07-5",
			DateWithSlash: "1220/02/15",
			DateWithOutSlash: "12200215"
		},
		stime: -4060121144000,
		gdate: [1841, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 4, 5] },
		gtime: -4060121144000
	},
	{
		sdate: [1220, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 30],
			DateTime: "1220-02-30 00:00:00",
			DateAber: "30 Ord 1220",
			DateMonth: "Ord",
			DateYearMonth: "1220-Ord",
			DateYear: "1220",
			DateAberWithDate: "Thu 30 Ord 1220",
			DateDoy: "1220.060",
			DateWoy: "1220W09-6",
			DateWithSlash: "1220/02/30",
			DateWithOutSlash: "12200230"
		},
		stime: -4058825144000,
		gdate: [1841, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 4, 20] },
		gtime: -4058825144000
	},
	{
		sdate: [1220, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 31],
			DateTime: "1220-02-31 00:00:00",
			DateAber: "31 Ord 1220",
			DateMonth: "Ord",
			DateYearMonth: "1220-Ord",
			DateYear: "1220",
			DateAberWithDate: "Fri 31 Ord 1220",
			DateDoy: "1220.061",
			DateWoy: "1220W09-7",
			DateWithSlash: "1220/02/31",
			DateWithOutSlash: "12200231"
		},
		stime: -4058738744000,
		gdate: [1841, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 4, 21] },
		gtime: -4058738744000
	},
	{
		sdate: [1220, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 1],
			DateTime: "1220-03-01 00:00:00",
			DateAber: "01 Kho 1220",
			DateMonth: "Kho",
			DateYearMonth: "1220-Kho",
			DateYear: "1220",
			DateAberWithDate: "Sat 01 Kho 1220",
			DateDoy: "1220.062",
			DateWoy: "1220W10-1",
			DateWithSlash: "1220/03/01",
			DateWithOutSlash: "12200301"
		},
		stime: -4058652344000,
		gdate: [1841, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 4, 22] },
		gtime: -4058652344000
	},
	{
		sdate: [1220, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 2],
			DateTime: "1220-03-02 00:00:00",
			DateAber: "02 Kho 1220",
			DateMonth: "Kho",
			DateYearMonth: "1220-Kho",
			DateYear: "1220",
			DateAberWithDate: "Sun 02 Kho 1220",
			DateDoy: "1220.063",
			DateWoy: "1220W10-2",
			DateWithSlash: "1220/03/02",
			DateWithOutSlash: "12200302"
		},
		stime: -4058565944000,
		gdate: [1841, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 4, 23] },
		gtime: -4058565944000
	},
	{
		sdate: [1220, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 15],
			DateTime: "1220-03-15 00:00:00",
			DateAber: "15 Kho 1220",
			DateMonth: "Kho",
			DateYearMonth: "1220-Kho",
			DateYear: "1220",
			DateAberWithDate: "Sat 15 Kho 1220",
			DateDoy: "1220.076",
			DateWoy: "1220W12-1",
			DateWithSlash: "1220/03/15",
			DateWithOutSlash: "12200315"
		},
		stime: -4057442744000,
		gdate: [1841, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 5, 5] },
		gtime: -4057442744000
	},
	{
		sdate: [1220, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 30],
			DateTime: "1220-03-30 00:00:00",
			DateAber: "30 Kho 1220",
			DateMonth: "Kho",
			DateYearMonth: "1220-Kho",
			DateYear: "1220",
			DateAberWithDate: "Sun 30 Kho 1220",
			DateDoy: "1220.091",
			DateWoy: "1220W14-2",
			DateWithSlash: "1220/03/30",
			DateWithOutSlash: "12200330"
		},
		stime: -4056146744000,
		gdate: [1841, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 5, 20] },
		gtime: -4056146744000
	},
	{
		sdate: [1220, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 31],
			DateTime: "1220-03-31 00:00:00",
			DateAber: "31 Kho 1220",
			DateMonth: "Kho",
			DateYearMonth: "1220-Kho",
			DateYear: "1220",
			DateAberWithDate: "Mon 31 Kho 1220",
			DateDoy: "1220.092",
			DateWoy: "1220W14-3",
			DateWithSlash: "1220/03/31",
			DateWithOutSlash: "12200331"
		},
		stime: -4056060344000,
		gdate: [1841, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 5, 21] },
		gtime: -4056060344000
	},
	{
		sdate: [1220, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 1],
			DateTime: "1220-04-01 00:00:00",
			DateAber: "01 Tir 1220",
			DateMonth: "Tir",
			DateYearMonth: "1220-Tir",
			DateYear: "1220",
			DateAberWithDate: "Tue 01 Tir 1220",
			DateDoy: "1220.093",
			DateWoy: "1220W14-4",
			DateWithSlash: "1220/04/01",
			DateWithOutSlash: "12200401"
		},
		stime: -4055973944000,
		gdate: [1841, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 5, 22] },
		gtime: -4055973944000
	},
	{
		sdate: [1220, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 2],
			DateTime: "1220-04-02 00:00:00",
			DateAber: "02 Tir 1220",
			DateMonth: "Tir",
			DateYearMonth: "1220-Tir",
			DateYear: "1220",
			DateAberWithDate: "Wed 02 Tir 1220",
			DateDoy: "1220.094",
			DateWoy: "1220W14-5",
			DateWithSlash: "1220/04/02",
			DateWithOutSlash: "12200402"
		},
		stime: -4055887544000,
		gdate: [1841, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 5, 23] },
		gtime: -4055887544000
	},
	{
		sdate: [1220, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 15],
			DateTime: "1220-04-15 00:00:00",
			DateAber: "15 Tir 1220",
			DateMonth: "Tir",
			DateYearMonth: "1220-Tir",
			DateYear: "1220",
			DateAberWithDate: "Tue 15 Tir 1220",
			DateDoy: "1220.107",
			DateWoy: "1220W16-4",
			DateWithSlash: "1220/04/15",
			DateWithOutSlash: "12200415"
		},
		stime: -4054764344000,
		gdate: [1841, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 6, 6] },
		gtime: -4054764344000
	},
	{
		sdate: [1220, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 30],
			DateTime: "1220-04-30 00:00:00",
			DateAber: "30 Tir 1220",
			DateMonth: "Tir",
			DateYearMonth: "1220-Tir",
			DateYear: "1220",
			DateAberWithDate: "Wed 30 Tir 1220",
			DateDoy: "1220.122",
			DateWoy: "1220W18-5",
			DateWithSlash: "1220/04/30",
			DateWithOutSlash: "12200430"
		},
		stime: -4053468344000,
		gdate: [1841, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 6, 21] },
		gtime: -4053468344000
	},
	{
		sdate: [1220, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 31],
			DateTime: "1220-04-31 00:00:00",
			DateAber: "31 Tir 1220",
			DateMonth: "Tir",
			DateYearMonth: "1220-Tir",
			DateYear: "1220",
			DateAberWithDate: "Thu 31 Tir 1220",
			DateDoy: "1220.123",
			DateWoy: "1220W18-6",
			DateWithSlash: "1220/04/31",
			DateWithOutSlash: "12200431"
		},
		stime: -4053381944000,
		gdate: [1841, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 6, 22] },
		gtime: -4053381944000
	},
	{
		sdate: [1220, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 1],
			DateTime: "1220-05-01 00:00:00",
			DateAber: "01 Amo 1220",
			DateMonth: "Amo",
			DateYearMonth: "1220-Amo",
			DateYear: "1220",
			DateAberWithDate: "Fri 01 Amo 1220",
			DateDoy: "1220.124",
			DateWoy: "1220W18-7",
			DateWithSlash: "1220/05/01",
			DateWithOutSlash: "12200501"
		},
		stime: -4053295544000,
		gdate: [1841, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 6, 23] },
		gtime: -4053295544000
	},
	{
		sdate: [1220, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 2],
			DateTime: "1220-05-02 00:00:00",
			DateAber: "02 Amo 1220",
			DateMonth: "Amo",
			DateYearMonth: "1220-Amo",
			DateYear: "1220",
			DateAberWithDate: "Sat 02 Amo 1220",
			DateDoy: "1220.125",
			DateWoy: "1220W19-1",
			DateWithSlash: "1220/05/02",
			DateWithOutSlash: "12200502"
		},
		stime: -4053209144000,
		gdate: [1841, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 6, 24] },
		gtime: -4053209144000
	},
	{
		sdate: [1220, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 15],
			DateTime: "1220-05-15 00:00:00",
			DateAber: "15 Amo 1220",
			DateMonth: "Amo",
			DateYearMonth: "1220-Amo",
			DateYear: "1220",
			DateAberWithDate: "Fri 15 Amo 1220",
			DateDoy: "1220.138",
			DateWoy: "1220W20-7",
			DateWithSlash: "1220/05/15",
			DateWithOutSlash: "12200515"
		},
		stime: -4052085944000,
		gdate: [1841, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 7, 6] },
		gtime: -4052085944000
	},
	{
		sdate: [1220, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 30],
			DateTime: "1220-05-30 00:00:00",
			DateAber: "30 Amo 1220",
			DateMonth: "Amo",
			DateYearMonth: "1220-Amo",
			DateYear: "1220",
			DateAberWithDate: "Sat 30 Amo 1220",
			DateDoy: "1220.153",
			DateWoy: "1220W23-1",
			DateWithSlash: "1220/05/30",
			DateWithOutSlash: "12200530"
		},
		stime: -4050789944000,
		gdate: [1841, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 7, 21] },
		gtime: -4050789944000
	},
	{
		sdate: [1220, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 31],
			DateTime: "1220-05-31 00:00:00",
			DateAber: "31 Amo 1220",
			DateMonth: "Amo",
			DateYearMonth: "1220-Amo",
			DateYear: "1220",
			DateAberWithDate: "Sun 31 Amo 1220",
			DateDoy: "1220.154",
			DateWoy: "1220W23-2",
			DateWithSlash: "1220/05/31",
			DateWithOutSlash: "12200531"
		},
		stime: -4050703544000,
		gdate: [1841, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 7, 22] },
		gtime: -4050703544000
	},
	{
		sdate: [1220, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 1],
			DateTime: "1220-06-01 00:00:00",
			DateAber: "01 Sha 1220",
			DateMonth: "Sha",
			DateYearMonth: "1220-Sha",
			DateYear: "1220",
			DateAberWithDate: "Mon 01 Sha 1220",
			DateDoy: "1220.155",
			DateWoy: "1220W23-3",
			DateWithSlash: "1220/06/01",
			DateWithOutSlash: "12200601"
		},
		stime: -4050617144000,
		gdate: [1841, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 7, 23] },
		gtime: -4050617144000
	},
	{
		sdate: [1220, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 2],
			DateTime: "1220-06-02 00:00:00",
			DateAber: "02 Sha 1220",
			DateMonth: "Sha",
			DateYearMonth: "1220-Sha",
			DateYear: "1220",
			DateAberWithDate: "Tue 02 Sha 1220",
			DateDoy: "1220.156",
			DateWoy: "1220W23-4",
			DateWithSlash: "1220/06/02",
			DateWithOutSlash: "12200602"
		},
		stime: -4050530744000,
		gdate: [1841, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 7, 24] },
		gtime: -4050530744000
	},
	{
		sdate: [1220, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 15],
			DateTime: "1220-06-15 00:00:00",
			DateAber: "15 Sha 1220",
			DateMonth: "Sha",
			DateYearMonth: "1220-Sha",
			DateYear: "1220",
			DateAberWithDate: "Mon 15 Sha 1220",
			DateDoy: "1220.169",
			DateWoy: "1220W25-3",
			DateWithSlash: "1220/06/15",
			DateWithOutSlash: "12200615"
		},
		stime: -4049407544000,
		gdate: [1841, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 8, 6] },
		gtime: -4049407544000
	},
	{
		sdate: [1220, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 29],
			DateTime: "1220-06-29 00:00:00",
			DateAber: "29 Sha 1220",
			DateMonth: "Sha",
			DateYearMonth: "1220-Sha",
			DateYear: "1220",
			DateAberWithDate: "Mon 29 Sha 1220",
			DateDoy: "1220.183",
			DateWoy: "1220W27-3",
			DateWithSlash: "1220/06/29",
			DateWithOutSlash: "12200629"
		},
		stime: -4048197944000,
		gdate: [1841, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 8, 20] },
		gtime: -4048197944000
	},
	{
		sdate: [1220, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 30],
			DateTime: "1220-06-30 00:00:00",
			DateAber: "30 Sha 1220",
			DateMonth: "Sha",
			DateYearMonth: "1220-Sha",
			DateYear: "1220",
			DateAberWithDate: "Tue 30 Sha 1220",
			DateDoy: "1220.184",
			DateWoy: "1220W27-4",
			DateWithSlash: "1220/06/30",
			DateWithOutSlash: "12200630"
		},
		stime: -4048111544000,
		gdate: [1841, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 8, 21] },
		gtime: -4048111544000
	},
	{
		sdate: [1220, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 1],
			DateTime: "1220-07-01 00:00:00",
			DateAber: "01 Meh 1220",
			DateMonth: "Meh",
			DateYearMonth: "1220-Meh",
			DateYear: "1220",
			DateAberWithDate: "Thu 01 Meh 1220",
			DateDoy: "1220.186",
			DateWoy: "1220W27-6",
			DateWithSlash: "1220/07/01",
			DateWithOutSlash: "12200701"
		},
		stime: -4047938744000,
		gdate: [1841, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 8, 23] },
		gtime: -4047938744000
	},
	{
		sdate: [1220, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 2],
			DateTime: "1220-07-02 00:00:00",
			DateAber: "02 Meh 1220",
			DateMonth: "Meh",
			DateYearMonth: "1220-Meh",
			DateYear: "1220",
			DateAberWithDate: "Fri 02 Meh 1220",
			DateDoy: "1220.187",
			DateWoy: "1220W27-7",
			DateWithSlash: "1220/07/02",
			DateWithOutSlash: "12200702"
		},
		stime: -4047852344000,
		gdate: [1841, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 8, 24] },
		gtime: -4047852344000
	},
	{
		sdate: [1220, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 15],
			DateTime: "1220-07-15 00:00:00",
			DateAber: "15 Meh 1220",
			DateMonth: "Meh",
			DateYearMonth: "1220-Meh",
			DateYear: "1220",
			DateAberWithDate: "Thu 15 Meh 1220",
			DateDoy: "1220.200",
			DateWoy: "1220W29-6",
			DateWithSlash: "1220/07/15",
			DateWithOutSlash: "12200715"
		},
		stime: -4046729144000,
		gdate: [1841, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 9, 7] },
		gtime: -4046729144000
	},
	{
		sdate: [1220, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 29],
			DateTime: "1220-07-29 00:00:00",
			DateAber: "29 Meh 1220",
			DateMonth: "Meh",
			DateYearMonth: "1220-Meh",
			DateYear: "1220",
			DateAberWithDate: "Thu 29 Meh 1220",
			DateDoy: "1220.214",
			DateWoy: "1220W31-6",
			DateWithSlash: "1220/07/29",
			DateWithOutSlash: "12200729"
		},
		stime: -4045519544000,
		gdate: [1841, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 9, 21] },
		gtime: -4045519544000
	},
	{
		sdate: [1220, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 30],
			DateTime: "1220-07-30 00:00:00",
			DateAber: "30 Meh 1220",
			DateMonth: "Meh",
			DateYearMonth: "1220-Meh",
			DateYear: "1220",
			DateAberWithDate: "Fri 30 Meh 1220",
			DateDoy: "1220.215",
			DateWoy: "1220W31-7",
			DateWithSlash: "1220/07/30",
			DateWithOutSlash: "12200730"
		},
		stime: -4045433144000,
		gdate: [1841, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 9, 22] },
		gtime: -4045433144000
	},
	{
		sdate: [1220, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 1],
			DateTime: "1220-08-01 00:00:00",
			DateAber: "01 Aba 1220",
			DateMonth: "Aba",
			DateYearMonth: "1220-Aba",
			DateYear: "1220",
			DateAberWithDate: "Sat 01 Aba 1220",
			DateDoy: "1220.216",
			DateWoy: "1220W32-1",
			DateWithSlash: "1220/08/01",
			DateWithOutSlash: "12200801"
		},
		stime: -4045346744000,
		gdate: [1841, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 9, 23] },
		gtime: -4045346744000
	},
	{
		sdate: [1220, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 2],
			DateTime: "1220-08-02 00:00:00",
			DateAber: "02 Aba 1220",
			DateMonth: "Aba",
			DateYearMonth: "1220-Aba",
			DateYear: "1220",
			DateAberWithDate: "Sun 02 Aba 1220",
			DateDoy: "1220.217",
			DateWoy: "1220W32-2",
			DateWithSlash: "1220/08/02",
			DateWithOutSlash: "12200802"
		},
		stime: -4045260344000,
		gdate: [1841, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 9, 24] },
		gtime: -4045260344000
	},
	{
		sdate: [1220, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 15],
			DateTime: "1220-08-15 00:00:00",
			DateAber: "15 Aba 1220",
			DateMonth: "Aba",
			DateYearMonth: "1220-Aba",
			DateYear: "1220",
			DateAberWithDate: "Sat 15 Aba 1220",
			DateDoy: "1220.230",
			DateWoy: "1220W34-1",
			DateWithSlash: "1220/08/15",
			DateWithOutSlash: "12200815"
		},
		stime: -4044137144000,
		gdate: [1841, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 10, 6] },
		gtime: -4044137144000
	},
	{
		sdate: [1220, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 29],
			DateTime: "1220-08-29 00:00:00",
			DateAber: "29 Aba 1220",
			DateMonth: "Aba",
			DateYearMonth: "1220-Aba",
			DateYear: "1220",
			DateAberWithDate: "Sat 29 Aba 1220",
			DateDoy: "1220.244",
			DateWoy: "1220W36-1",
			DateWithSlash: "1220/08/29",
			DateWithOutSlash: "12200829"
		},
		stime: -4042927544000,
		gdate: [1841, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 10, 20] },
		gtime: -4042927544000
	},
	{
		sdate: [1220, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 30],
			DateTime: "1220-08-30 00:00:00",
			DateAber: "30 Aba 1220",
			DateMonth: "Aba",
			DateYearMonth: "1220-Aba",
			DateYear: "1220",
			DateAberWithDate: "Sun 30 Aba 1220",
			DateDoy: "1220.245",
			DateWoy: "1220W36-2",
			DateWithSlash: "1220/08/30",
			DateWithOutSlash: "12200830"
		},
		stime: -4042841144000,
		gdate: [1841, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 10, 21] },
		gtime: -4042841144000
	},
	{
		sdate: [1220, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 1],
			DateTime: "1220-09-01 00:00:00",
			DateAber: "01 Aza 1220",
			DateMonth: "Aza",
			DateYearMonth: "1220-Aza",
			DateYear: "1220",
			DateAberWithDate: "Mon 01 Aza 1220",
			DateDoy: "1220.246",
			DateWoy: "1220W36-3",
			DateWithSlash: "1220/09/01",
			DateWithOutSlash: "12200901"
		},
		stime: -4042754744000,
		gdate: [1841, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 10, 22] },
		gtime: -4042754744000
	},
	{
		sdate: [1220, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 2],
			DateTime: "1220-09-02 00:00:00",
			DateAber: "02 Aza 1220",
			DateMonth: "Aza",
			DateYearMonth: "1220-Aza",
			DateYear: "1220",
			DateAberWithDate: "Tue 02 Aza 1220",
			DateDoy: "1220.247",
			DateWoy: "1220W36-4",
			DateWithSlash: "1220/09/02",
			DateWithOutSlash: "12200902"
		},
		stime: -4042668344000,
		gdate: [1841, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 10, 23] },
		gtime: -4042668344000
	},
	{
		sdate: [1220, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 15],
			DateTime: "1220-09-15 00:00:00",
			DateAber: "15 Aza 1220",
			DateMonth: "Aza",
			DateYearMonth: "1220-Aza",
			DateYear: "1220",
			DateAberWithDate: "Mon 15 Aza 1220",
			DateDoy: "1220.260",
			DateWoy: "1220W38-3",
			DateWithSlash: "1220/09/15",
			DateWithOutSlash: "12200915"
		},
		stime: -4041545144000,
		gdate: [1841, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 11, 6] },
		gtime: -4041545144000
	},
	{
		sdate: [1220, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 29],
			DateTime: "1220-09-29 00:00:00",
			DateAber: "29 Aza 1220",
			DateMonth: "Aza",
			DateYearMonth: "1220-Aza",
			DateYear: "1220",
			DateAberWithDate: "Mon 29 Aza 1220",
			DateDoy: "1220.274",
			DateWoy: "1220W40-3",
			DateWithSlash: "1220/09/29",
			DateWithOutSlash: "12200929"
		},
		stime: -4040335544000,
		gdate: [1841, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 11, 20] },
		gtime: -4040335544000
	},
	{
		sdate: [1220, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 30],
			DateTime: "1220-09-30 00:00:00",
			DateAber: "30 Aza 1220",
			DateMonth: "Aza",
			DateYearMonth: "1220-Aza",
			DateYear: "1220",
			DateAberWithDate: "Tue 30 Aza 1220",
			DateDoy: "1220.275",
			DateWoy: "1220W40-4",
			DateWithSlash: "1220/09/30",
			DateWithOutSlash: "12200930"
		},
		stime: -4040249144000,
		gdate: [1841, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 11, 21] },
		gtime: -4040249144000
	},
	{
		sdate: [1220, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 1],
			DateTime: "1220-10-01 00:00:00",
			DateAber: "01 Dey 1220",
			DateMonth: "Dey",
			DateYearMonth: "1220-Dey",
			DateYear: "1220",
			DateAberWithDate: "Wed 01 Dey 1220",
			DateDoy: "1220.276",
			DateWoy: "1220W40-5",
			DateWithSlash: "1220/10/01",
			DateWithOutSlash: "12201001"
		},
		stime: -4040162744000,
		gdate: [1841, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 11, 22] },
		gtime: -4040162744000
	},
	{
		sdate: [1220, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 2],
			DateTime: "1220-10-02 00:00:00",
			DateAber: "02 Dey 1220",
			DateMonth: "Dey",
			DateYearMonth: "1220-Dey",
			DateYear: "1220",
			DateAberWithDate: "Thu 02 Dey 1220",
			DateDoy: "1220.277",
			DateWoy: "1220W40-6",
			DateWithSlash: "1220/10/02",
			DateWithOutSlash: "12201002"
		},
		stime: -4040076344000,
		gdate: [1841, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1841, 11, 23] },
		gtime: -4040076344000
	},
	{
		sdate: [1220, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 15],
			DateTime: "1220-10-15 00:00:00",
			DateAber: "15 Dey 1220",
			DateMonth: "Dey",
			DateYearMonth: "1220-Dey",
			DateYear: "1220",
			DateAberWithDate: "Wed 15 Dey 1220",
			DateDoy: "1220.290",
			DateWoy: "1220W42-5",
			DateWithSlash: "1220/10/15",
			DateWithOutSlash: "12201015"
		},
		stime: -4038953144000,
		gdate: [1842, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 0, 5] },
		gtime: -4038953144000
	},
	{
		sdate: [1220, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 29],
			DateTime: "1220-10-29 00:00:00",
			DateAber: "29 Dey 1220",
			DateMonth: "Dey",
			DateYearMonth: "1220-Dey",
			DateYear: "1220",
			DateAberWithDate: "Wed 29 Dey 1220",
			DateDoy: "1220.304",
			DateWoy: "1220W44-5",
			DateWithSlash: "1220/10/29",
			DateWithOutSlash: "12201029"
		},
		stime: -4037743544000,
		gdate: [1842, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 0, 19] },
		gtime: -4037743544000
	},
	{
		sdate: [1220, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 30],
			DateTime: "1220-10-30 00:00:00",
			DateAber: "30 Dey 1220",
			DateMonth: "Dey",
			DateYearMonth: "1220-Dey",
			DateYear: "1220",
			DateAberWithDate: "Thu 30 Dey 1220",
			DateDoy: "1220.305",
			DateWoy: "1220W44-6",
			DateWithSlash: "1220/10/30",
			DateWithOutSlash: "12201030"
		},
		stime: -4037657144000,
		gdate: [1842, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 0, 20] },
		gtime: -4037657144000
	},
	{
		sdate: [1220, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 1],
			DateTime: "1220-11-01 00:00:00",
			DateAber: "01 Bah 1220",
			DateMonth: "Bah",
			DateYearMonth: "1220-Bah",
			DateYear: "1220",
			DateAberWithDate: "Fri 01 Bah 1220",
			DateDoy: "1220.306",
			DateWoy: "1220W44-7",
			DateWithSlash: "1220/11/01",
			DateWithOutSlash: "12201101"
		},
		stime: -4037570744000,
		gdate: [1842, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 0, 21] },
		gtime: -4037570744000
	},
	{
		sdate: [1220, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 2],
			DateTime: "1220-11-02 00:00:00",
			DateAber: "02 Bah 1220",
			DateMonth: "Bah",
			DateYearMonth: "1220-Bah",
			DateYear: "1220",
			DateAberWithDate: "Sat 02 Bah 1220",
			DateDoy: "1220.307",
			DateWoy: "1220W45-1",
			DateWithSlash: "1220/11/02",
			DateWithOutSlash: "12201102"
		},
		stime: -4037484344000,
		gdate: [1842, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 0, 22] },
		gtime: -4037484344000
	},
	{
		sdate: [1220, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 15],
			DateTime: "1220-11-15 00:00:00",
			DateAber: "15 Bah 1220",
			DateMonth: "Bah",
			DateYearMonth: "1220-Bah",
			DateYear: "1220",
			DateAberWithDate: "Fri 15 Bah 1220",
			DateDoy: "1220.320",
			DateWoy: "1220W46-7",
			DateWithSlash: "1220/11/15",
			DateWithOutSlash: "12201115"
		},
		stime: -4036361144000,
		gdate: [1842, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 1, 4] },
		gtime: -4036361144000
	},
	{
		sdate: [1220, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 29],
			DateTime: "1220-11-29 00:00:00",
			DateAber: "29 Bah 1220",
			DateMonth: "Bah",
			DateYearMonth: "1220-Bah",
			DateYear: "1220",
			DateAberWithDate: "Fri 29 Bah 1220",
			DateDoy: "1220.334",
			DateWoy: "1220W48-7",
			DateWithSlash: "1220/11/29",
			DateWithOutSlash: "12201129"
		},
		stime: -4035151544000,
		gdate: [1842, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 1, 18] },
		gtime: -4035151544000
	},
	{
		sdate: [1220, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 30],
			DateTime: "1220-11-30 00:00:00",
			DateAber: "30 Bah 1220",
			DateMonth: "Bah",
			DateYearMonth: "1220-Bah",
			DateYear: "1220",
			DateAberWithDate: "Sat 30 Bah 1220",
			DateDoy: "1220.335",
			DateWoy: "1220W49-1",
			DateWithSlash: "1220/11/30",
			DateWithOutSlash: "12201130"
		},
		stime: -4035065144000,
		gdate: [1842, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 1, 19] },
		gtime: -4035065144000
	},
	{
		sdate: [1220, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 1],
			DateTime: "1220-12-01 00:00:00",
			DateAber: "01 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Sun 01 Esf 1220",
			DateDoy: "1220.336",
			DateWoy: "1220W49-2",
			DateWithSlash: "1220/12/01",
			DateWithOutSlash: "12201201"
		},
		stime: -4034978744000,
		gdate: [1842, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 1, 20] },
		gtime: -4034978744000
	},
	{
		sdate: [1220, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 2],
			DateTime: "1220-12-02 00:00:00",
			DateAber: "02 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Mon 02 Esf 1220",
			DateDoy: "1220.337",
			DateWoy: "1220W49-3",
			DateWithSlash: "1220/12/02",
			DateWithOutSlash: "12201202"
		},
		stime: -4034892344000,
		gdate: [1842, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 1, 21] },
		gtime: -4034892344000
	},
	{
		sdate: [1220, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 3],
			DateTime: "1220-12-03 00:00:00",
			DateAber: "03 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Tue 03 Esf 1220",
			DateDoy: "1220.338",
			DateWoy: "1220W49-4",
			DateWithSlash: "1220/12/03",
			DateWithOutSlash: "12201203"
		},
		stime: -4034805944000,
		gdate: [1842, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 1, 22] },
		gtime: -4034805944000
	},
	{
		sdate: [1220, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 4],
			DateTime: "1220-12-04 00:00:00",
			DateAber: "04 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Wed 04 Esf 1220",
			DateDoy: "1220.339",
			DateWoy: "1220W49-5",
			DateWithSlash: "1220/12/04",
			DateWithOutSlash: "12201204"
		},
		stime: -4034719544000,
		gdate: [1842, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 1, 23] },
		gtime: -4034719544000
	},
	{
		sdate: [1220, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 15],
			DateTime: "1220-12-15 00:00:00",
			DateAber: "15 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Sun 15 Esf 1220",
			DateDoy: "1220.350",
			DateWoy: "1220W51-2",
			DateWithSlash: "1220/12/15",
			DateWithOutSlash: "12201215"
		},
		stime: -4033769144000,
		gdate: [1842, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 2, 6] },
		gtime: -4033769144000
	},
	{
		sdate: [1220, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 25],
			DateTime: "1220-12-25 00:00:00",
			DateAber: "25 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Wed 25 Esf 1220",
			DateDoy: "1220.360",
			DateWoy: "1220W52-5",
			DateWithSlash: "1220/12/25",
			DateWithOutSlash: "12201225"
		},
		stime: -4032905144000,
		gdate: [1842, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 2, 16] },
		gtime: -4032905144000
	},
	{
		sdate: [1220, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 26],
			DateTime: "1220-12-26 00:00:00",
			DateAber: "26 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Thu 26 Esf 1220",
			DateDoy: "1220.361",
			DateWoy: "1220W52-6",
			DateWithSlash: "1220/12/26",
			DateWithOutSlash: "12201226"
		},
		stime: -4032818744000,
		gdate: [1842, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 2, 17] },
		gtime: -4032818744000
	},
	{
		sdate: [1220, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 27],
			DateTime: "1220-12-27 00:00:00",
			DateAber: "27 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Fri 27 Esf 1220",
			DateDoy: "1220.362",
			DateWoy: "1220W52-7",
			DateWithSlash: "1220/12/27",
			DateWithOutSlash: "12201227"
		},
		stime: -4032732344000,
		gdate: [1842, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 2, 18] },
		gtime: -4032732344000
	},
	{
		sdate: [1220, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 28],
			DateTime: "1220-12-28 00:00:00",
			DateAber: "28 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Sat 28 Esf 1220",
			DateDoy: "1220.363",
			DateWoy: "1221W01-1",
			DateWithSlash: "1220/12/28",
			DateWithOutSlash: "12201228"
		},
		stime: -4032645944000,
		gdate: [1842, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 2, 19] },
		gtime: -4032645944000
	},
	{
		sdate: [1220, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 29],
			DateTime: "1220-12-29 00:00:00",
			DateAber: "29 Esf 1220",
			DateMonth: "Esf",
			DateYearMonth: "1220-Esf",
			DateYear: "1220",
			DateAberWithDate: "Sun 29 Esf 1220",
			DateDoy: "1220.364",
			DateWoy: "1221W01-2",
			DateWithSlash: "1220/12/29",
			DateWithOutSlash: "12201229"
		},
		stime: -4032559544000,
		gdate: [1842, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 2, 20] },
		gtime: -4032559544000
	},

	{
		sdate: [1240, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 1],
			DateTime: "1240-01-01 00:00:00",
			DateAber: "01 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Thu 01 Far 1240",
			DateDoy: "1240.000",
			DateWoy: "1239W52-6",
			DateWithSlash: "1240/01/01",
			DateWithOutSlash: "12400101"
		},
		stime: -3432857144000,
		gdate: [1861, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 2, 21] },
		gtime: -3432857144000
	},
	{
		sdate: [1240, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 2],
			DateTime: "1240-01-02 00:00:00",
			DateAber: "02 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Fri 02 Far 1240",
			DateDoy: "1240.001",
			DateWoy: "1239W52-7",
			DateWithSlash: "1240/01/02",
			DateWithOutSlash: "12400102"
		},
		stime: -3432770744000,
		gdate: [1861, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 2, 22] },
		gtime: -3432770744000
	},
	{
		sdate: [1240, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 3],
			DateTime: "1240-01-03 00:00:00",
			DateAber: "03 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Sat 03 Far 1240",
			DateDoy: "1240.002",
			DateWoy: "1240W01-1",
			DateWithSlash: "1240/01/03",
			DateWithOutSlash: "12400103"
		},
		stime: -3432684344000,
		gdate: [1861, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 2, 23] },
		gtime: -3432684344000
	},
	{
		sdate: [1240, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 4],
			DateTime: "1240-01-04 00:00:00",
			DateAber: "04 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Sun 04 Far 1240",
			DateDoy: "1240.003",
			DateWoy: "1240W01-2",
			DateWithSlash: "1240/01/04",
			DateWithOutSlash: "12400104"
		},
		stime: -3432597944000,
		gdate: [1861, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 2, 24] },
		gtime: -3432597944000
	},
	{
		sdate: [1240, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 5],
			DateTime: "1240-01-05 00:00:00",
			DateAber: "05 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Mon 05 Far 1240",
			DateDoy: "1240.004",
			DateWoy: "1240W01-3",
			DateWithSlash: "1240/01/05",
			DateWithOutSlash: "12400105"
		},
		stime: -3432511544000,
		gdate: [1861, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 2, 25] },
		gtime: -3432511544000
	},
	{
		sdate: [1240, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 6],
			DateTime: "1240-01-06 00:00:00",
			DateAber: "06 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Tue 06 Far 1240",
			DateDoy: "1240.005",
			DateWoy: "1240W01-4",
			DateWithSlash: "1240/01/06",
			DateWithOutSlash: "12400106"
		},
		stime: -3432425144000,
		gdate: [1861, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 2, 26] },
		gtime: -3432425144000
	},
	{
		sdate: [1240, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 7],
			DateTime: "1240-01-07 00:00:00",
			DateAber: "07 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Wed 07 Far 1240",
			DateDoy: "1240.006",
			DateWoy: "1240W01-5",
			DateWithSlash: "1240/01/07",
			DateWithOutSlash: "12400107"
		},
		stime: -3432338744000,
		gdate: [1861, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 2, 27] },
		gtime: -3432338744000
	},
	{
		sdate: [1240, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 15],
			DateTime: "1240-01-15 00:00:00",
			DateAber: "15 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Thu 15 Far 1240",
			DateDoy: "1240.014",
			DateWoy: "1240W02-6",
			DateWithSlash: "1240/01/15",
			DateWithOutSlash: "12400115"
		},
		stime: -3431647544000,
		gdate: [1861, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 3, 4] },
		gtime: -3431647544000
	},
	{
		sdate: [1240, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 29],
			DateTime: "1240-01-29 00:00:00",
			DateAber: "29 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Thu 29 Far 1240",
			DateDoy: "1240.028",
			DateWoy: "1240W04-6",
			DateWithSlash: "1240/01/29",
			DateWithOutSlash: "12400129"
		},
		stime: -3430437944000,
		gdate: [1861, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 3, 18] },
		gtime: -3430437944000
	},
	{
		sdate: [1240, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 30],
			DateTime: "1240-01-30 00:00:00",
			DateAber: "30 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Fri 30 Far 1240",
			DateDoy: "1240.029",
			DateWoy: "1240W04-7",
			DateWithSlash: "1240/01/30",
			DateWithOutSlash: "12400130"
		},
		stime: -3430351544000,
		gdate: [1861, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 3, 19] },
		gtime: -3430351544000
	},
	{
		sdate: [1240, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 31],
			DateTime: "1240-01-31 00:00:00",
			DateAber: "31 Far 1240",
			DateMonth: "Far",
			DateYearMonth: "1240-Far",
			DateYear: "1240",
			DateAberWithDate: "Sat 31 Far 1240",
			DateDoy: "1240.030",
			DateWoy: "1240W05-1",
			DateWithSlash: "1240/01/31",
			DateWithOutSlash: "12400131"
		},
		stime: -3430265144000,
		gdate: [1861, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 3, 20] },
		gtime: -3430265144000
	},
	{
		sdate: [1240, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 1],
			DateTime: "1240-02-01 00:00:00",
			DateAber: "01 Ord 1240",
			DateMonth: "Ord",
			DateYearMonth: "1240-Ord",
			DateYear: "1240",
			DateAberWithDate: "Sun 01 Ord 1240",
			DateDoy: "1240.031",
			DateWoy: "1240W05-2",
			DateWithSlash: "1240/02/01",
			DateWithOutSlash: "12400201"
		},
		stime: -3430178744000,
		gdate: [1861, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 3, 21] },
		gtime: -3430178744000
	},
	{
		sdate: [1240, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 2],
			DateTime: "1240-02-02 00:00:00",
			DateAber: "02 Ord 1240",
			DateMonth: "Ord",
			DateYearMonth: "1240-Ord",
			DateYear: "1240",
			DateAberWithDate: "Mon 02 Ord 1240",
			DateDoy: "1240.032",
			DateWoy: "1240W05-3",
			DateWithSlash: "1240/02/02",
			DateWithOutSlash: "12400202"
		},
		stime: -3430092344000,
		gdate: [1861, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 3, 22] },
		gtime: -3430092344000
	},
	{
		sdate: [1240, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 15],
			DateTime: "1240-02-15 00:00:00",
			DateAber: "15 Ord 1240",
			DateMonth: "Ord",
			DateYearMonth: "1240-Ord",
			DateYear: "1240",
			DateAberWithDate: "Sun 15 Ord 1240",
			DateDoy: "1240.045",
			DateWoy: "1240W07-2",
			DateWithSlash: "1240/02/15",
			DateWithOutSlash: "12400215"
		},
		stime: -3428969144000,
		gdate: [1861, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 4, 5] },
		gtime: -3428969144000
	},
	{
		sdate: [1240, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 30],
			DateTime: "1240-02-30 00:00:00",
			DateAber: "30 Ord 1240",
			DateMonth: "Ord",
			DateYearMonth: "1240-Ord",
			DateYear: "1240",
			DateAberWithDate: "Mon 30 Ord 1240",
			DateDoy: "1240.060",
			DateWoy: "1240W09-3",
			DateWithSlash: "1240/02/30",
			DateWithOutSlash: "12400230"
		},
		stime: -3427673144000,
		gdate: [1861, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 4, 20] },
		gtime: -3427673144000
	},
	{
		sdate: [1240, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 31],
			DateTime: "1240-02-31 00:00:00",
			DateAber: "31 Ord 1240",
			DateMonth: "Ord",
			DateYearMonth: "1240-Ord",
			DateYear: "1240",
			DateAberWithDate: "Tue 31 Ord 1240",
			DateDoy: "1240.061",
			DateWoy: "1240W09-4",
			DateWithSlash: "1240/02/31",
			DateWithOutSlash: "12400231"
		},
		stime: -3427586744000,
		gdate: [1861, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 4, 21] },
		gtime: -3427586744000
	},
	{
		sdate: [1240, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 1],
			DateTime: "1240-03-01 00:00:00",
			DateAber: "01 Kho 1240",
			DateMonth: "Kho",
			DateYearMonth: "1240-Kho",
			DateYear: "1240",
			DateAberWithDate: "Wed 01 Kho 1240",
			DateDoy: "1240.062",
			DateWoy: "1240W09-5",
			DateWithSlash: "1240/03/01",
			DateWithOutSlash: "12400301"
		},
		stime: -3427500344000,
		gdate: [1861, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 4, 22] },
		gtime: -3427500344000
	},
	{
		sdate: [1240, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 2],
			DateTime: "1240-03-02 00:00:00",
			DateAber: "02 Kho 1240",
			DateMonth: "Kho",
			DateYearMonth: "1240-Kho",
			DateYear: "1240",
			DateAberWithDate: "Thu 02 Kho 1240",
			DateDoy: "1240.063",
			DateWoy: "1240W09-6",
			DateWithSlash: "1240/03/02",
			DateWithOutSlash: "12400302"
		},
		stime: -3427413944000,
		gdate: [1861, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 4, 23] },
		gtime: -3427413944000
	},
	{
		sdate: [1240, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 15],
			DateTime: "1240-03-15 00:00:00",
			DateAber: "15 Kho 1240",
			DateMonth: "Kho",
			DateYearMonth: "1240-Kho",
			DateYear: "1240",
			DateAberWithDate: "Wed 15 Kho 1240",
			DateDoy: "1240.076",
			DateWoy: "1240W11-5",
			DateWithSlash: "1240/03/15",
			DateWithOutSlash: "12400315"
		},
		stime: -3426290744000,
		gdate: [1861, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 5, 5] },
		gtime: -3426290744000
	},
	{
		sdate: [1240, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 30],
			DateTime: "1240-03-30 00:00:00",
			DateAber: "30 Kho 1240",
			DateMonth: "Kho",
			DateYearMonth: "1240-Kho",
			DateYear: "1240",
			DateAberWithDate: "Thu 30 Kho 1240",
			DateDoy: "1240.091",
			DateWoy: "1240W13-6",
			DateWithSlash: "1240/03/30",
			DateWithOutSlash: "12400330"
		},
		stime: -3424994744000,
		gdate: [1861, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 5, 20] },
		gtime: -3424994744000
	},
	{
		sdate: [1240, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 31],
			DateTime: "1240-03-31 00:00:00",
			DateAber: "31 Kho 1240",
			DateMonth: "Kho",
			DateYearMonth: "1240-Kho",
			DateYear: "1240",
			DateAberWithDate: "Fri 31 Kho 1240",
			DateDoy: "1240.092",
			DateWoy: "1240W13-7",
			DateWithSlash: "1240/03/31",
			DateWithOutSlash: "12400331"
		},
		stime: -3424908344000,
		gdate: [1861, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 5, 21] },
		gtime: -3424908344000
	},
	{
		sdate: [1240, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 1],
			DateTime: "1240-04-01 00:00:00",
			DateAber: "01 Tir 1240",
			DateMonth: "Tir",
			DateYearMonth: "1240-Tir",
			DateYear: "1240",
			DateAberWithDate: "Sat 01 Tir 1240",
			DateDoy: "1240.093",
			DateWoy: "1240W14-1",
			DateWithSlash: "1240/04/01",
			DateWithOutSlash: "12400401"
		},
		stime: -3424821944000,
		gdate: [1861, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 5, 22] },
		gtime: -3424821944000
	},
	{
		sdate: [1240, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 2],
			DateTime: "1240-04-02 00:00:00",
			DateAber: "02 Tir 1240",
			DateMonth: "Tir",
			DateYearMonth: "1240-Tir",
			DateYear: "1240",
			DateAberWithDate: "Sun 02 Tir 1240",
			DateDoy: "1240.094",
			DateWoy: "1240W14-2",
			DateWithSlash: "1240/04/02",
			DateWithOutSlash: "12400402"
		},
		stime: -3424735544000,
		gdate: [1861, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 5, 23] },
		gtime: -3424735544000
	},
	{
		sdate: [1240, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 15],
			DateTime: "1240-04-15 00:00:00",
			DateAber: "15 Tir 1240",
			DateMonth: "Tir",
			DateYearMonth: "1240-Tir",
			DateYear: "1240",
			DateAberWithDate: "Sat 15 Tir 1240",
			DateDoy: "1240.107",
			DateWoy: "1240W16-1",
			DateWithSlash: "1240/04/15",
			DateWithOutSlash: "12400415"
		},
		stime: -3423612344000,
		gdate: [1861, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 6, 6] },
		gtime: -3423612344000
	},
	{
		sdate: [1240, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 30],
			DateTime: "1240-04-30 00:00:00",
			DateAber: "30 Tir 1240",
			DateMonth: "Tir",
			DateYearMonth: "1240-Tir",
			DateYear: "1240",
			DateAberWithDate: "Sun 30 Tir 1240",
			DateDoy: "1240.122",
			DateWoy: "1240W18-2",
			DateWithSlash: "1240/04/30",
			DateWithOutSlash: "12400430"
		},
		stime: -3422316344000,
		gdate: [1861, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 6, 21] },
		gtime: -3422316344000
	},
	{
		sdate: [1240, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 31],
			DateTime: "1240-04-31 00:00:00",
			DateAber: "31 Tir 1240",
			DateMonth: "Tir",
			DateYearMonth: "1240-Tir",
			DateYear: "1240",
			DateAberWithDate: "Mon 31 Tir 1240",
			DateDoy: "1240.123",
			DateWoy: "1240W18-3",
			DateWithSlash: "1240/04/31",
			DateWithOutSlash: "12400431"
		},
		stime: -3422229944000,
		gdate: [1861, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 6, 22] },
		gtime: -3422229944000
	},
	{
		sdate: [1240, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 1],
			DateTime: "1240-05-01 00:00:00",
			DateAber: "01 Amo 1240",
			DateMonth: "Amo",
			DateYearMonth: "1240-Amo",
			DateYear: "1240",
			DateAberWithDate: "Tue 01 Amo 1240",
			DateDoy: "1240.124",
			DateWoy: "1240W18-4",
			DateWithSlash: "1240/05/01",
			DateWithOutSlash: "12400501"
		},
		stime: -3422143544000,
		gdate: [1861, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 6, 23] },
		gtime: -3422143544000
	},
	{
		sdate: [1240, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 2],
			DateTime: "1240-05-02 00:00:00",
			DateAber: "02 Amo 1240",
			DateMonth: "Amo",
			DateYearMonth: "1240-Amo",
			DateYear: "1240",
			DateAberWithDate: "Wed 02 Amo 1240",
			DateDoy: "1240.125",
			DateWoy: "1240W18-5",
			DateWithSlash: "1240/05/02",
			DateWithOutSlash: "12400502"
		},
		stime: -3422057144000,
		gdate: [1861, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 6, 24] },
		gtime: -3422057144000
	},
	{
		sdate: [1240, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 15],
			DateTime: "1240-05-15 00:00:00",
			DateAber: "15 Amo 1240",
			DateMonth: "Amo",
			DateYearMonth: "1240-Amo",
			DateYear: "1240",
			DateAberWithDate: "Tue 15 Amo 1240",
			DateDoy: "1240.138",
			DateWoy: "1240W20-4",
			DateWithSlash: "1240/05/15",
			DateWithOutSlash: "12400515"
		},
		stime: -3420933944000,
		gdate: [1861, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 7, 6] },
		gtime: -3420933944000
	},
	{
		sdate: [1240, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 30],
			DateTime: "1240-05-30 00:00:00",
			DateAber: "30 Amo 1240",
			DateMonth: "Amo",
			DateYearMonth: "1240-Amo",
			DateYear: "1240",
			DateAberWithDate: "Wed 30 Amo 1240",
			DateDoy: "1240.153",
			DateWoy: "1240W22-5",
			DateWithSlash: "1240/05/30",
			DateWithOutSlash: "12400530"
		},
		stime: -3419637944000,
		gdate: [1861, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 7, 21] },
		gtime: -3419637944000
	},
	{
		sdate: [1240, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 31],
			DateTime: "1240-05-31 00:00:00",
			DateAber: "31 Amo 1240",
			DateMonth: "Amo",
			DateYearMonth: "1240-Amo",
			DateYear: "1240",
			DateAberWithDate: "Thu 31 Amo 1240",
			DateDoy: "1240.154",
			DateWoy: "1240W22-6",
			DateWithSlash: "1240/05/31",
			DateWithOutSlash: "12400531"
		},
		stime: -3419551544000,
		gdate: [1861, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 7, 22] },
		gtime: -3419551544000
	},
	{
		sdate: [1240, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 1],
			DateTime: "1240-06-01 00:00:00",
			DateAber: "01 Sha 1240",
			DateMonth: "Sha",
			DateYearMonth: "1240-Sha",
			DateYear: "1240",
			DateAberWithDate: "Fri 01 Sha 1240",
			DateDoy: "1240.155",
			DateWoy: "1240W22-7",
			DateWithSlash: "1240/06/01",
			DateWithOutSlash: "12400601"
		},
		stime: -3419465144000,
		gdate: [1861, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 7, 23] },
		gtime: -3419465144000
	},
	{
		sdate: [1240, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 2],
			DateTime: "1240-06-02 00:00:00",
			DateAber: "02 Sha 1240",
			DateMonth: "Sha",
			DateYearMonth: "1240-Sha",
			DateYear: "1240",
			DateAberWithDate: "Sat 02 Sha 1240",
			DateDoy: "1240.156",
			DateWoy: "1240W23-1",
			DateWithSlash: "1240/06/02",
			DateWithOutSlash: "12400602"
		},
		stime: -3419378744000,
		gdate: [1861, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 7, 24] },
		gtime: -3419378744000
	},
	{
		sdate: [1240, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 15],
			DateTime: "1240-06-15 00:00:00",
			DateAber: "15 Sha 1240",
			DateMonth: "Sha",
			DateYearMonth: "1240-Sha",
			DateYear: "1240",
			DateAberWithDate: "Fri 15 Sha 1240",
			DateDoy: "1240.169",
			DateWoy: "1240W24-7",
			DateWithSlash: "1240/06/15",
			DateWithOutSlash: "12400615"
		},
		stime: -3418255544000,
		gdate: [1861, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 8, 6] },
		gtime: -3418255544000
	},
	{
		sdate: [1240, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 29],
			DateTime: "1240-06-29 00:00:00",
			DateAber: "29 Sha 1240",
			DateMonth: "Sha",
			DateYearMonth: "1240-Sha",
			DateYear: "1240",
			DateAberWithDate: "Fri 29 Sha 1240",
			DateDoy: "1240.183",
			DateWoy: "1240W26-7",
			DateWithSlash: "1240/06/29",
			DateWithOutSlash: "12400629"
		},
		stime: -3417045944000,
		gdate: [1861, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 8, 20] },
		gtime: -3417045944000
	},
	{
		sdate: [1240, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 30],
			DateTime: "1240-06-30 00:00:00",
			DateAber: "30 Sha 1240",
			DateMonth: "Sha",
			DateYearMonth: "1240-Sha",
			DateYear: "1240",
			DateAberWithDate: "Sat 30 Sha 1240",
			DateDoy: "1240.184",
			DateWoy: "1240W27-1",
			DateWithSlash: "1240/06/30",
			DateWithOutSlash: "12400630"
		},
		stime: -3416959544000,
		gdate: [1861, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 8, 21] },
		gtime: -3416959544000
	},
	{
		sdate: [1240, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 1],
			DateTime: "1240-07-01 00:00:00",
			DateAber: "01 Meh 1240",
			DateMonth: "Meh",
			DateYearMonth: "1240-Meh",
			DateYear: "1240",
			DateAberWithDate: "Mon 01 Meh 1240",
			DateDoy: "1240.186",
			DateWoy: "1240W27-3",
			DateWithSlash: "1240/07/01",
			DateWithOutSlash: "12400701"
		},
		stime: -3416786744000,
		gdate: [1861, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 8, 23] },
		gtime: -3416786744000
	},
	{
		sdate: [1240, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 2],
			DateTime: "1240-07-02 00:00:00",
			DateAber: "02 Meh 1240",
			DateMonth: "Meh",
			DateYearMonth: "1240-Meh",
			DateYear: "1240",
			DateAberWithDate: "Tue 02 Meh 1240",
			DateDoy: "1240.187",
			DateWoy: "1240W27-4",
			DateWithSlash: "1240/07/02",
			DateWithOutSlash: "12400702"
		},
		stime: -3416700344000,
		gdate: [1861, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 8, 24] },
		gtime: -3416700344000
	},
	{
		sdate: [1240, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 15],
			DateTime: "1240-07-15 00:00:00",
			DateAber: "15 Meh 1240",
			DateMonth: "Meh",
			DateYearMonth: "1240-Meh",
			DateYear: "1240",
			DateAberWithDate: "Mon 15 Meh 1240",
			DateDoy: "1240.200",
			DateWoy: "1240W29-3",
			DateWithSlash: "1240/07/15",
			DateWithOutSlash: "12400715"
		},
		stime: -3415577144000,
		gdate: [1861, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 9, 7] },
		gtime: -3415577144000
	},
	{
		sdate: [1240, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 29],
			DateTime: "1240-07-29 00:00:00",
			DateAber: "29 Meh 1240",
			DateMonth: "Meh",
			DateYearMonth: "1240-Meh",
			DateYear: "1240",
			DateAberWithDate: "Mon 29 Meh 1240",
			DateDoy: "1240.214",
			DateWoy: "1240W31-3",
			DateWithSlash: "1240/07/29",
			DateWithOutSlash: "12400729"
		},
		stime: -3414367544000,
		gdate: [1861, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 9, 21] },
		gtime: -3414367544000
	},
	{
		sdate: [1240, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 30],
			DateTime: "1240-07-30 00:00:00",
			DateAber: "30 Meh 1240",
			DateMonth: "Meh",
			DateYearMonth: "1240-Meh",
			DateYear: "1240",
			DateAberWithDate: "Tue 30 Meh 1240",
			DateDoy: "1240.215",
			DateWoy: "1240W31-4",
			DateWithSlash: "1240/07/30",
			DateWithOutSlash: "12400730"
		},
		stime: -3414281144000,
		gdate: [1861, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 9, 22] },
		gtime: -3414281144000
	},
	{
		sdate: [1240, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 1],
			DateTime: "1240-08-01 00:00:00",
			DateAber: "01 Aba 1240",
			DateMonth: "Aba",
			DateYearMonth: "1240-Aba",
			DateYear: "1240",
			DateAberWithDate: "Wed 01 Aba 1240",
			DateDoy: "1240.216",
			DateWoy: "1240W31-5",
			DateWithSlash: "1240/08/01",
			DateWithOutSlash: "12400801"
		},
		stime: -3414194744000,
		gdate: [1861, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 9, 23] },
		gtime: -3414194744000
	},
	{
		sdate: [1240, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 2],
			DateTime: "1240-08-02 00:00:00",
			DateAber: "02 Aba 1240",
			DateMonth: "Aba",
			DateYearMonth: "1240-Aba",
			DateYear: "1240",
			DateAberWithDate: "Thu 02 Aba 1240",
			DateDoy: "1240.217",
			DateWoy: "1240W31-6",
			DateWithSlash: "1240/08/02",
			DateWithOutSlash: "12400802"
		},
		stime: -3414108344000,
		gdate: [1861, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 9, 24] },
		gtime: -3414108344000
	},
	{
		sdate: [1240, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 15],
			DateTime: "1240-08-15 00:00:00",
			DateAber: "15 Aba 1240",
			DateMonth: "Aba",
			DateYearMonth: "1240-Aba",
			DateYear: "1240",
			DateAberWithDate: "Wed 15 Aba 1240",
			DateDoy: "1240.230",
			DateWoy: "1240W33-5",
			DateWithSlash: "1240/08/15",
			DateWithOutSlash: "12400815"
		},
		stime: -3412985144000,
		gdate: [1861, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 10, 6] },
		gtime: -3412985144000
	},
	{
		sdate: [1240, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 29],
			DateTime: "1240-08-29 00:00:00",
			DateAber: "29 Aba 1240",
			DateMonth: "Aba",
			DateYearMonth: "1240-Aba",
			DateYear: "1240",
			DateAberWithDate: "Wed 29 Aba 1240",
			DateDoy: "1240.244",
			DateWoy: "1240W35-5",
			DateWithSlash: "1240/08/29",
			DateWithOutSlash: "12400829"
		},
		stime: -3411775544000,
		gdate: [1861, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 10, 20] },
		gtime: -3411775544000
	},
	{
		sdate: [1240, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 30],
			DateTime: "1240-08-30 00:00:00",
			DateAber: "30 Aba 1240",
			DateMonth: "Aba",
			DateYearMonth: "1240-Aba",
			DateYear: "1240",
			DateAberWithDate: "Thu 30 Aba 1240",
			DateDoy: "1240.245",
			DateWoy: "1240W35-6",
			DateWithSlash: "1240/08/30",
			DateWithOutSlash: "12400830"
		},
		stime: -3411689144000,
		gdate: [1861, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 10, 21] },
		gtime: -3411689144000
	},
	{
		sdate: [1240, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 1],
			DateTime: "1240-09-01 00:00:00",
			DateAber: "01 Aza 1240",
			DateMonth: "Aza",
			DateYearMonth: "1240-Aza",
			DateYear: "1240",
			DateAberWithDate: "Fri 01 Aza 1240",
			DateDoy: "1240.246",
			DateWoy: "1240W35-7",
			DateWithSlash: "1240/09/01",
			DateWithOutSlash: "12400901"
		},
		stime: -3411602744000,
		gdate: [1861, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 10, 22] },
		gtime: -3411602744000
	},
	{
		sdate: [1240, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 2],
			DateTime: "1240-09-02 00:00:00",
			DateAber: "02 Aza 1240",
			DateMonth: "Aza",
			DateYearMonth: "1240-Aza",
			DateYear: "1240",
			DateAberWithDate: "Sat 02 Aza 1240",
			DateDoy: "1240.247",
			DateWoy: "1240W36-1",
			DateWithSlash: "1240/09/02",
			DateWithOutSlash: "12400902"
		},
		stime: -3411516344000,
		gdate: [1861, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 10, 23] },
		gtime: -3411516344000
	},
	{
		sdate: [1240, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 15],
			DateTime: "1240-09-15 00:00:00",
			DateAber: "15 Aza 1240",
			DateMonth: "Aza",
			DateYearMonth: "1240-Aza",
			DateYear: "1240",
			DateAberWithDate: "Fri 15 Aza 1240",
			DateDoy: "1240.260",
			DateWoy: "1240W37-7",
			DateWithSlash: "1240/09/15",
			DateWithOutSlash: "12400915"
		},
		stime: -3410393144000,
		gdate: [1861, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 11, 6] },
		gtime: -3410393144000
	},
	{
		sdate: [1240, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 29],
			DateTime: "1240-09-29 00:00:00",
			DateAber: "29 Aza 1240",
			DateMonth: "Aza",
			DateYearMonth: "1240-Aza",
			DateYear: "1240",
			DateAberWithDate: "Fri 29 Aza 1240",
			DateDoy: "1240.274",
			DateWoy: "1240W39-7",
			DateWithSlash: "1240/09/29",
			DateWithOutSlash: "12400929"
		},
		stime: -3409183544000,
		gdate: [1861, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 11, 20] },
		gtime: -3409183544000
	},
	{
		sdate: [1240, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 30],
			DateTime: "1240-09-30 00:00:00",
			DateAber: "30 Aza 1240",
			DateMonth: "Aza",
			DateYearMonth: "1240-Aza",
			DateYear: "1240",
			DateAberWithDate: "Sat 30 Aza 1240",
			DateDoy: "1240.275",
			DateWoy: "1240W40-1",
			DateWithSlash: "1240/09/30",
			DateWithOutSlash: "12400930"
		},
		stime: -3409097144000,
		gdate: [1861, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 11, 21] },
		gtime: -3409097144000
	},
	{
		sdate: [1240, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 1],
			DateTime: "1240-10-01 00:00:00",
			DateAber: "01 Dey 1240",
			DateMonth: "Dey",
			DateYearMonth: "1240-Dey",
			DateYear: "1240",
			DateAberWithDate: "Sun 01 Dey 1240",
			DateDoy: "1240.276",
			DateWoy: "1240W40-2",
			DateWithSlash: "1240/10/01",
			DateWithOutSlash: "12401001"
		},
		stime: -3409010744000,
		gdate: [1861, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 11, 22] },
		gtime: -3409010744000
	},
	{
		sdate: [1240, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 2],
			DateTime: "1240-10-02 00:00:00",
			DateAber: "02 Dey 1240",
			DateMonth: "Dey",
			DateYearMonth: "1240-Dey",
			DateYear: "1240",
			DateAberWithDate: "Mon 02 Dey 1240",
			DateDoy: "1240.277",
			DateWoy: "1240W40-3",
			DateWithSlash: "1240/10/02",
			DateWithOutSlash: "12401002"
		},
		stime: -3408924344000,
		gdate: [1861, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1861, 11, 23] },
		gtime: -3408924344000
	},
	{
		sdate: [1240, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 15],
			DateTime: "1240-10-15 00:00:00",
			DateAber: "15 Dey 1240",
			DateMonth: "Dey",
			DateYearMonth: "1240-Dey",
			DateYear: "1240",
			DateAberWithDate: "Sun 15 Dey 1240",
			DateDoy: "1240.290",
			DateWoy: "1240W42-2",
			DateWithSlash: "1240/10/15",
			DateWithOutSlash: "12401015"
		},
		stime: -3407801144000,
		gdate: [1862, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 0, 5] },
		gtime: -3407801144000
	},
	{
		sdate: [1240, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 29],
			DateTime: "1240-10-29 00:00:00",
			DateAber: "29 Dey 1240",
			DateMonth: "Dey",
			DateYearMonth: "1240-Dey",
			DateYear: "1240",
			DateAberWithDate: "Sun 29 Dey 1240",
			DateDoy: "1240.304",
			DateWoy: "1240W44-2",
			DateWithSlash: "1240/10/29",
			DateWithOutSlash: "12401029"
		},
		stime: -3406591544000,
		gdate: [1862, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 0, 19] },
		gtime: -3406591544000
	},
	{
		sdate: [1240, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 30],
			DateTime: "1240-10-30 00:00:00",
			DateAber: "30 Dey 1240",
			DateMonth: "Dey",
			DateYearMonth: "1240-Dey",
			DateYear: "1240",
			DateAberWithDate: "Mon 30 Dey 1240",
			DateDoy: "1240.305",
			DateWoy: "1240W44-3",
			DateWithSlash: "1240/10/30",
			DateWithOutSlash: "12401030"
		},
		stime: -3406505144000,
		gdate: [1862, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 0, 20] },
		gtime: -3406505144000
	},
	{
		sdate: [1240, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 1],
			DateTime: "1240-11-01 00:00:00",
			DateAber: "01 Bah 1240",
			DateMonth: "Bah",
			DateYearMonth: "1240-Bah",
			DateYear: "1240",
			DateAberWithDate: "Tue 01 Bah 1240",
			DateDoy: "1240.306",
			DateWoy: "1240W44-4",
			DateWithSlash: "1240/11/01",
			DateWithOutSlash: "12401101"
		},
		stime: -3406418744000,
		gdate: [1862, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 0, 21] },
		gtime: -3406418744000
	},
	{
		sdate: [1240, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 2],
			DateTime: "1240-11-02 00:00:00",
			DateAber: "02 Bah 1240",
			DateMonth: "Bah",
			DateYearMonth: "1240-Bah",
			DateYear: "1240",
			DateAberWithDate: "Wed 02 Bah 1240",
			DateDoy: "1240.307",
			DateWoy: "1240W44-5",
			DateWithSlash: "1240/11/02",
			DateWithOutSlash: "12401102"
		},
		stime: -3406332344000,
		gdate: [1862, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 0, 22] },
		gtime: -3406332344000
	},
	{
		sdate: [1240, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 15],
			DateTime: "1240-11-15 00:00:00",
			DateAber: "15 Bah 1240",
			DateMonth: "Bah",
			DateYearMonth: "1240-Bah",
			DateYear: "1240",
			DateAberWithDate: "Tue 15 Bah 1240",
			DateDoy: "1240.320",
			DateWoy: "1240W46-4",
			DateWithSlash: "1240/11/15",
			DateWithOutSlash: "12401115"
		},
		stime: -3405209144000,
		gdate: [1862, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 1, 4] },
		gtime: -3405209144000
	},
	{
		sdate: [1240, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 29],
			DateTime: "1240-11-29 00:00:00",
			DateAber: "29 Bah 1240",
			DateMonth: "Bah",
			DateYearMonth: "1240-Bah",
			DateYear: "1240",
			DateAberWithDate: "Tue 29 Bah 1240",
			DateDoy: "1240.334",
			DateWoy: "1240W48-4",
			DateWithSlash: "1240/11/29",
			DateWithOutSlash: "12401129"
		},
		stime: -3403999544000,
		gdate: [1862, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 1, 18] },
		gtime: -3403999544000
	},
	{
		sdate: [1240, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 30],
			DateTime: "1240-11-30 00:00:00",
			DateAber: "30 Bah 1240",
			DateMonth: "Bah",
			DateYearMonth: "1240-Bah",
			DateYear: "1240",
			DateAberWithDate: "Wed 30 Bah 1240",
			DateDoy: "1240.335",
			DateWoy: "1240W48-5",
			DateWithSlash: "1240/11/30",
			DateWithOutSlash: "12401130"
		},
		stime: -3403913144000,
		gdate: [1862, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 1, 19] },
		gtime: -3403913144000
	},
	{
		sdate: [1240, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 1],
			DateTime: "1240-12-01 00:00:00",
			DateAber: "01 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Thu 01 Esf 1240",
			DateDoy: "1240.336",
			DateWoy: "1240W48-6",
			DateWithSlash: "1240/12/01",
			DateWithOutSlash: "12401201"
		},
		stime: -3403826744000,
		gdate: [1862, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 1, 20] },
		gtime: -3403826744000
	},
	{
		sdate: [1240, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 2],
			DateTime: "1240-12-02 00:00:00",
			DateAber: "02 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Fri 02 Esf 1240",
			DateDoy: "1240.337",
			DateWoy: "1240W48-7",
			DateWithSlash: "1240/12/02",
			DateWithOutSlash: "12401202"
		},
		stime: -3403740344000,
		gdate: [1862, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 1, 21] },
		gtime: -3403740344000
	},
	{
		sdate: [1240, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 3],
			DateTime: "1240-12-03 00:00:00",
			DateAber: "03 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Sat 03 Esf 1240",
			DateDoy: "1240.338",
			DateWoy: "1240W49-1",
			DateWithSlash: "1240/12/03",
			DateWithOutSlash: "12401203"
		},
		stime: -3403653944000,
		gdate: [1862, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 1, 22] },
		gtime: -3403653944000
	},
	{
		sdate: [1240, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 4],
			DateTime: "1240-12-04 00:00:00",
			DateAber: "04 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Sun 04 Esf 1240",
			DateDoy: "1240.339",
			DateWoy: "1240W49-2",
			DateWithSlash: "1240/12/04",
			DateWithOutSlash: "12401204"
		},
		stime: -3403567544000,
		gdate: [1862, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 1, 23] },
		gtime: -3403567544000
	},
	{
		sdate: [1240, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 15],
			DateTime: "1240-12-15 00:00:00",
			DateAber: "15 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Thu 15 Esf 1240",
			DateDoy: "1240.350",
			DateWoy: "1240W50-6",
			DateWithSlash: "1240/12/15",
			DateWithOutSlash: "12401215"
		},
		stime: -3402617144000,
		gdate: [1862, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 2, 6] },
		gtime: -3402617144000
	},
	{
		sdate: [1240, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 25],
			DateTime: "1240-12-25 00:00:00",
			DateAber: "25 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Sun 25 Esf 1240",
			DateDoy: "1240.360",
			DateWoy: "1240W52-2",
			DateWithSlash: "1240/12/25",
			DateWithOutSlash: "12401225"
		},
		stime: -3401753144000,
		gdate: [1862, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 2, 16] },
		gtime: -3401753144000
	},
	{
		sdate: [1240, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 26],
			DateTime: "1240-12-26 00:00:00",
			DateAber: "26 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Mon 26 Esf 1240",
			DateDoy: "1240.361",
			DateWoy: "1240W52-3",
			DateWithSlash: "1240/12/26",
			DateWithOutSlash: "12401226"
		},
		stime: -3401666744000,
		gdate: [1862, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 2, 17] },
		gtime: -3401666744000
	},
	{
		sdate: [1240, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 27],
			DateTime: "1240-12-27 00:00:00",
			DateAber: "27 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Tue 27 Esf 1240",
			DateDoy: "1240.362",
			DateWoy: "1240W52-4",
			DateWithSlash: "1240/12/27",
			DateWithOutSlash: "12401227"
		},
		stime: -3401580344000,
		gdate: [1862, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 2, 18] },
		gtime: -3401580344000
	},
	{
		sdate: [1240, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 28],
			DateTime: "1240-12-28 00:00:00",
			DateAber: "28 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Wed 28 Esf 1240",
			DateDoy: "1240.363",
			DateWoy: "1240W52-5",
			DateWithSlash: "1240/12/28",
			DateWithOutSlash: "12401228"
		},
		stime: -3401493944000,
		gdate: [1862, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 2, 19] },
		gtime: -3401493944000
	},
	{
		sdate: [1240, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 29],
			DateTime: "1240-12-29 00:00:00",
			DateAber: "29 Esf 1240",
			DateMonth: "Esf",
			DateYearMonth: "1240-Esf",
			DateYear: "1240",
			DateAberWithDate: "Thu 29 Esf 1240",
			DateDoy: "1240.364",
			DateWoy: "1240W52-6",
			DateWithSlash: "1240/12/29",
			DateWithOutSlash: "12401229"
		},
		stime: -3401407544000,
		gdate: [1862, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 2, 20] },
		gtime: -3401407544000
	},

	{
		sdate: [1260, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 1],
			DateTime: "1260-01-01 00:00:00",
			DateAber: "01 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Mon 01 Far 1260",
			DateDoy: "1260.000",
			DateWoy: "1260W01-3",
			DateWithSlash: "1260/01/01",
			DateWithOutSlash: "12600101"
		},
		stime: -2801705144000,
		gdate: [1881, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 2, 21] },
		gtime: -2801705144000
	},
	{
		sdate: [1260, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 2],
			DateTime: "1260-01-02 00:00:00",
			DateAber: "02 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Tue 02 Far 1260",
			DateDoy: "1260.001",
			DateWoy: "1260W01-4",
			DateWithSlash: "1260/01/02",
			DateWithOutSlash: "12600102"
		},
		stime: -2801618744000,
		gdate: [1881, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 2, 22] },
		gtime: -2801618744000
	},
	{
		sdate: [1260, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 3],
			DateTime: "1260-01-03 00:00:00",
			DateAber: "03 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Wed 03 Far 1260",
			DateDoy: "1260.002",
			DateWoy: "1260W01-5",
			DateWithSlash: "1260/01/03",
			DateWithOutSlash: "12600103"
		},
		stime: -2801532344000,
		gdate: [1881, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 2, 23] },
		gtime: -2801532344000
	},
	{
		sdate: [1260, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 4],
			DateTime: "1260-01-04 00:00:00",
			DateAber: "04 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Thu 04 Far 1260",
			DateDoy: "1260.003",
			DateWoy: "1260W01-6",
			DateWithSlash: "1260/01/04",
			DateWithOutSlash: "12600104"
		},
		stime: -2801445944000,
		gdate: [1881, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 2, 24] },
		gtime: -2801445944000
	},
	{
		sdate: [1260, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 5],
			DateTime: "1260-01-05 00:00:00",
			DateAber: "05 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Fri 05 Far 1260",
			DateDoy: "1260.004",
			DateWoy: "1260W01-7",
			DateWithSlash: "1260/01/05",
			DateWithOutSlash: "12600105"
		},
		stime: -2801359544000,
		gdate: [1881, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 2, 25] },
		gtime: -2801359544000
	},
	{
		sdate: [1260, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 6],
			DateTime: "1260-01-06 00:00:00",
			DateAber: "06 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Sat 06 Far 1260",
			DateDoy: "1260.005",
			DateWoy: "1260W02-1",
			DateWithSlash: "1260/01/06",
			DateWithOutSlash: "12600106"
		},
		stime: -2801273144000,
		gdate: [1881, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 2, 26] },
		gtime: -2801273144000
	},
	{
		sdate: [1260, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 7],
			DateTime: "1260-01-07 00:00:00",
			DateAber: "07 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Sun 07 Far 1260",
			DateDoy: "1260.006",
			DateWoy: "1260W02-2",
			DateWithSlash: "1260/01/07",
			DateWithOutSlash: "12600107"
		},
		stime: -2801186744000,
		gdate: [1881, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 2, 27] },
		gtime: -2801186744000
	},
	{
		sdate: [1260, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 15],
			DateTime: "1260-01-15 00:00:00",
			DateAber: "15 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Mon 15 Far 1260",
			DateDoy: "1260.014",
			DateWoy: "1260W03-3",
			DateWithSlash: "1260/01/15",
			DateWithOutSlash: "12600115"
		},
		stime: -2800495544000,
		gdate: [1881, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 3, 4] },
		gtime: -2800495544000
	},
	{
		sdate: [1260, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 29],
			DateTime: "1260-01-29 00:00:00",
			DateAber: "29 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Mon 29 Far 1260",
			DateDoy: "1260.028",
			DateWoy: "1260W05-3",
			DateWithSlash: "1260/01/29",
			DateWithOutSlash: "12600129"
		},
		stime: -2799285944000,
		gdate: [1881, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 3, 18] },
		gtime: -2799285944000
	},
	{
		sdate: [1260, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 30],
			DateTime: "1260-01-30 00:00:00",
			DateAber: "30 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Tue 30 Far 1260",
			DateDoy: "1260.029",
			DateWoy: "1260W05-4",
			DateWithSlash: "1260/01/30",
			DateWithOutSlash: "12600130"
		},
		stime: -2799199544000,
		gdate: [1881, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 3, 19] },
		gtime: -2799199544000
	},
	{
		sdate: [1260, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 31],
			DateTime: "1260-01-31 00:00:00",
			DateAber: "31 Far 1260",
			DateMonth: "Far",
			DateYearMonth: "1260-Far",
			DateYear: "1260",
			DateAberWithDate: "Wed 31 Far 1260",
			DateDoy: "1260.030",
			DateWoy: "1260W05-5",
			DateWithSlash: "1260/01/31",
			DateWithOutSlash: "12600131"
		},
		stime: -2799113144000,
		gdate: [1881, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 3, 20] },
		gtime: -2799113144000
	},
	{
		sdate: [1260, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 1],
			DateTime: "1260-02-01 00:00:00",
			DateAber: "01 Ord 1260",
			DateMonth: "Ord",
			DateYearMonth: "1260-Ord",
			DateYear: "1260",
			DateAberWithDate: "Thu 01 Ord 1260",
			DateDoy: "1260.031",
			DateWoy: "1260W05-6",
			DateWithSlash: "1260/02/01",
			DateWithOutSlash: "12600201"
		},
		stime: -2799026744000,
		gdate: [1881, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 3, 21] },
		gtime: -2799026744000
	},
	{
		sdate: [1260, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 2],
			DateTime: "1260-02-02 00:00:00",
			DateAber: "02 Ord 1260",
			DateMonth: "Ord",
			DateYearMonth: "1260-Ord",
			DateYear: "1260",
			DateAberWithDate: "Fri 02 Ord 1260",
			DateDoy: "1260.032",
			DateWoy: "1260W05-7",
			DateWithSlash: "1260/02/02",
			DateWithOutSlash: "12600202"
		},
		stime: -2798940344000,
		gdate: [1881, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 3, 22] },
		gtime: -2798940344000
	},
	{
		sdate: [1260, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 15],
			DateTime: "1260-02-15 00:00:00",
			DateAber: "15 Ord 1260",
			DateMonth: "Ord",
			DateYearMonth: "1260-Ord",
			DateYear: "1260",
			DateAberWithDate: "Thu 15 Ord 1260",
			DateDoy: "1260.045",
			DateWoy: "1260W07-6",
			DateWithSlash: "1260/02/15",
			DateWithOutSlash: "12600215"
		},
		stime: -2797817144000,
		gdate: [1881, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 4, 5] },
		gtime: -2797817144000
	},
	{
		sdate: [1260, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 30],
			DateTime: "1260-02-30 00:00:00",
			DateAber: "30 Ord 1260",
			DateMonth: "Ord",
			DateYearMonth: "1260-Ord",
			DateYear: "1260",
			DateAberWithDate: "Fri 30 Ord 1260",
			DateDoy: "1260.060",
			DateWoy: "1260W09-7",
			DateWithSlash: "1260/02/30",
			DateWithOutSlash: "12600230"
		},
		stime: -2796521144000,
		gdate: [1881, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 4, 20] },
		gtime: -2796521144000
	},
	{
		sdate: [1260, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 31],
			DateTime: "1260-02-31 00:00:00",
			DateAber: "31 Ord 1260",
			DateMonth: "Ord",
			DateYearMonth: "1260-Ord",
			DateYear: "1260",
			DateAberWithDate: "Sat 31 Ord 1260",
			DateDoy: "1260.061",
			DateWoy: "1260W10-1",
			DateWithSlash: "1260/02/31",
			DateWithOutSlash: "12600231"
		},
		stime: -2796434744000,
		gdate: [1881, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 4, 21] },
		gtime: -2796434744000
	},
	{
		sdate: [1260, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 1],
			DateTime: "1260-03-01 00:00:00",
			DateAber: "01 Kho 1260",
			DateMonth: "Kho",
			DateYearMonth: "1260-Kho",
			DateYear: "1260",
			DateAberWithDate: "Sun 01 Kho 1260",
			DateDoy: "1260.062",
			DateWoy: "1260W10-2",
			DateWithSlash: "1260/03/01",
			DateWithOutSlash: "12600301"
		},
		stime: -2796348344000,
		gdate: [1881, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 4, 22] },
		gtime: -2796348344000
	},
	{
		sdate: [1260, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 2],
			DateTime: "1260-03-02 00:00:00",
			DateAber: "02 Kho 1260",
			DateMonth: "Kho",
			DateYearMonth: "1260-Kho",
			DateYear: "1260",
			DateAberWithDate: "Mon 02 Kho 1260",
			DateDoy: "1260.063",
			DateWoy: "1260W10-3",
			DateWithSlash: "1260/03/02",
			DateWithOutSlash: "12600302"
		},
		stime: -2796261944000,
		gdate: [1881, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 4, 23] },
		gtime: -2796261944000
	},
	{
		sdate: [1260, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 15],
			DateTime: "1260-03-15 00:00:00",
			DateAber: "15 Kho 1260",
			DateMonth: "Kho",
			DateYearMonth: "1260-Kho",
			DateYear: "1260",
			DateAberWithDate: "Sun 15 Kho 1260",
			DateDoy: "1260.076",
			DateWoy: "1260W12-2",
			DateWithSlash: "1260/03/15",
			DateWithOutSlash: "12600315"
		},
		stime: -2795138744000,
		gdate: [1881, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 5, 5] },
		gtime: -2795138744000
	},
	{
		sdate: [1260, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 30],
			DateTime: "1260-03-30 00:00:00",
			DateAber: "30 Kho 1260",
			DateMonth: "Kho",
			DateYearMonth: "1260-Kho",
			DateYear: "1260",
			DateAberWithDate: "Mon 30 Kho 1260",
			DateDoy: "1260.091",
			DateWoy: "1260W14-3",
			DateWithSlash: "1260/03/30",
			DateWithOutSlash: "12600330"
		},
		stime: -2793842744000,
		gdate: [1881, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 5, 20] },
		gtime: -2793842744000
	},
	{
		sdate: [1260, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 31],
			DateTime: "1260-03-31 00:00:00",
			DateAber: "31 Kho 1260",
			DateMonth: "Kho",
			DateYearMonth: "1260-Kho",
			DateYear: "1260",
			DateAberWithDate: "Tue 31 Kho 1260",
			DateDoy: "1260.092",
			DateWoy: "1260W14-4",
			DateWithSlash: "1260/03/31",
			DateWithOutSlash: "12600331"
		},
		stime: -2793756344000,
		gdate: [1881, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 5, 21] },
		gtime: -2793756344000
	},
	{
		sdate: [1260, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 1],
			DateTime: "1260-04-01 00:00:00",
			DateAber: "01 Tir 1260",
			DateMonth: "Tir",
			DateYearMonth: "1260-Tir",
			DateYear: "1260",
			DateAberWithDate: "Wed 01 Tir 1260",
			DateDoy: "1260.093",
			DateWoy: "1260W14-5",
			DateWithSlash: "1260/04/01",
			DateWithOutSlash: "12600401"
		},
		stime: -2793669944000,
		gdate: [1881, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 5, 22] },
		gtime: -2793669944000
	},
	{
		sdate: [1260, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 2],
			DateTime: "1260-04-02 00:00:00",
			DateAber: "02 Tir 1260",
			DateMonth: "Tir",
			DateYearMonth: "1260-Tir",
			DateYear: "1260",
			DateAberWithDate: "Thu 02 Tir 1260",
			DateDoy: "1260.094",
			DateWoy: "1260W14-6",
			DateWithSlash: "1260/04/02",
			DateWithOutSlash: "12600402"
		},
		stime: -2793583544000,
		gdate: [1881, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 5, 23] },
		gtime: -2793583544000
	},
	{
		sdate: [1260, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 15],
			DateTime: "1260-04-15 00:00:00",
			DateAber: "15 Tir 1260",
			DateMonth: "Tir",
			DateYearMonth: "1260-Tir",
			DateYear: "1260",
			DateAberWithDate: "Wed 15 Tir 1260",
			DateDoy: "1260.107",
			DateWoy: "1260W16-5",
			DateWithSlash: "1260/04/15",
			DateWithOutSlash: "12600415"
		},
		stime: -2792460344000,
		gdate: [1881, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 6, 6] },
		gtime: -2792460344000
	},
	{
		sdate: [1260, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 30],
			DateTime: "1260-04-30 00:00:00",
			DateAber: "30 Tir 1260",
			DateMonth: "Tir",
			DateYearMonth: "1260-Tir",
			DateYear: "1260",
			DateAberWithDate: "Thu 30 Tir 1260",
			DateDoy: "1260.122",
			DateWoy: "1260W18-6",
			DateWithSlash: "1260/04/30",
			DateWithOutSlash: "12600430"
		},
		stime: -2791164344000,
		gdate: [1881, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 6, 21] },
		gtime: -2791164344000
	},
	{
		sdate: [1260, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 31],
			DateTime: "1260-04-31 00:00:00",
			DateAber: "31 Tir 1260",
			DateMonth: "Tir",
			DateYearMonth: "1260-Tir",
			DateYear: "1260",
			DateAberWithDate: "Fri 31 Tir 1260",
			DateDoy: "1260.123",
			DateWoy: "1260W18-7",
			DateWithSlash: "1260/04/31",
			DateWithOutSlash: "12600431"
		},
		stime: -2791077944000,
		gdate: [1881, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 6, 22] },
		gtime: -2791077944000
	},
	{
		sdate: [1260, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 1],
			DateTime: "1260-05-01 00:00:00",
			DateAber: "01 Amo 1260",
			DateMonth: "Amo",
			DateYearMonth: "1260-Amo",
			DateYear: "1260",
			DateAberWithDate: "Sat 01 Amo 1260",
			DateDoy: "1260.124",
			DateWoy: "1260W19-1",
			DateWithSlash: "1260/05/01",
			DateWithOutSlash: "12600501"
		},
		stime: -2790991544000,
		gdate: [1881, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 6, 23] },
		gtime: -2790991544000
	},
	{
		sdate: [1260, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 2],
			DateTime: "1260-05-02 00:00:00",
			DateAber: "02 Amo 1260",
			DateMonth: "Amo",
			DateYearMonth: "1260-Amo",
			DateYear: "1260",
			DateAberWithDate: "Sun 02 Amo 1260",
			DateDoy: "1260.125",
			DateWoy: "1260W19-2",
			DateWithSlash: "1260/05/02",
			DateWithOutSlash: "12600502"
		},
		stime: -2790905144000,
		gdate: [1881, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 6, 24] },
		gtime: -2790905144000
	},
	{
		sdate: [1260, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 15],
			DateTime: "1260-05-15 00:00:00",
			DateAber: "15 Amo 1260",
			DateMonth: "Amo",
			DateYearMonth: "1260-Amo",
			DateYear: "1260",
			DateAberWithDate: "Sat 15 Amo 1260",
			DateDoy: "1260.138",
			DateWoy: "1260W21-1",
			DateWithSlash: "1260/05/15",
			DateWithOutSlash: "12600515"
		},
		stime: -2789781944000,
		gdate: [1881, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 7, 6] },
		gtime: -2789781944000
	},
	{
		sdate: [1260, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 30],
			DateTime: "1260-05-30 00:00:00",
			DateAber: "30 Amo 1260",
			DateMonth: "Amo",
			DateYearMonth: "1260-Amo",
			DateYear: "1260",
			DateAberWithDate: "Sun 30 Amo 1260",
			DateDoy: "1260.153",
			DateWoy: "1260W23-2",
			DateWithSlash: "1260/05/30",
			DateWithOutSlash: "12600530"
		},
		stime: -2788485944000,
		gdate: [1881, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 7, 21] },
		gtime: -2788485944000
	},
	{
		sdate: [1260, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 31],
			DateTime: "1260-05-31 00:00:00",
			DateAber: "31 Amo 1260",
			DateMonth: "Amo",
			DateYearMonth: "1260-Amo",
			DateYear: "1260",
			DateAberWithDate: "Mon 31 Amo 1260",
			DateDoy: "1260.154",
			DateWoy: "1260W23-3",
			DateWithSlash: "1260/05/31",
			DateWithOutSlash: "12600531"
		},
		stime: -2788399544000,
		gdate: [1881, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 7, 22] },
		gtime: -2788399544000
	},
	{
		sdate: [1260, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 1],
			DateTime: "1260-06-01 00:00:00",
			DateAber: "01 Sha 1260",
			DateMonth: "Sha",
			DateYearMonth: "1260-Sha",
			DateYear: "1260",
			DateAberWithDate: "Tue 01 Sha 1260",
			DateDoy: "1260.155",
			DateWoy: "1260W23-4",
			DateWithSlash: "1260/06/01",
			DateWithOutSlash: "12600601"
		},
		stime: -2788313144000,
		gdate: [1881, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 7, 23] },
		gtime: -2788313144000
	},
	{
		sdate: [1260, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 2],
			DateTime: "1260-06-02 00:00:00",
			DateAber: "02 Sha 1260",
			DateMonth: "Sha",
			DateYearMonth: "1260-Sha",
			DateYear: "1260",
			DateAberWithDate: "Wed 02 Sha 1260",
			DateDoy: "1260.156",
			DateWoy: "1260W23-5",
			DateWithSlash: "1260/06/02",
			DateWithOutSlash: "12600602"
		},
		stime: -2788226744000,
		gdate: [1881, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 7, 24] },
		gtime: -2788226744000
	},
	{
		sdate: [1260, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 15],
			DateTime: "1260-06-15 00:00:00",
			DateAber: "15 Sha 1260",
			DateMonth: "Sha",
			DateYearMonth: "1260-Sha",
			DateYear: "1260",
			DateAberWithDate: "Tue 15 Sha 1260",
			DateDoy: "1260.169",
			DateWoy: "1260W25-4",
			DateWithSlash: "1260/06/15",
			DateWithOutSlash: "12600615"
		},
		stime: -2787103544000,
		gdate: [1881, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 8, 6] },
		gtime: -2787103544000
	},
	{
		sdate: [1260, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 29],
			DateTime: "1260-06-29 00:00:00",
			DateAber: "29 Sha 1260",
			DateMonth: "Sha",
			DateYearMonth: "1260-Sha",
			DateYear: "1260",
			DateAberWithDate: "Tue 29 Sha 1260",
			DateDoy: "1260.183",
			DateWoy: "1260W27-4",
			DateWithSlash: "1260/06/29",
			DateWithOutSlash: "12600629"
		},
		stime: -2785893944000,
		gdate: [1881, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 8, 20] },
		gtime: -2785893944000
	},
	{
		sdate: [1260, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 30],
			DateTime: "1260-06-30 00:00:00",
			DateAber: "30 Sha 1260",
			DateMonth: "Sha",
			DateYearMonth: "1260-Sha",
			DateYear: "1260",
			DateAberWithDate: "Wed 30 Sha 1260",
			DateDoy: "1260.184",
			DateWoy: "1260W27-5",
			DateWithSlash: "1260/06/30",
			DateWithOutSlash: "12600630"
		},
		stime: -2785807544000,
		gdate: [1881, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 8, 21] },
		gtime: -2785807544000
	},
	{
		sdate: [1260, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 1],
			DateTime: "1260-07-01 00:00:00",
			DateAber: "01 Meh 1260",
			DateMonth: "Meh",
			DateYearMonth: "1260-Meh",
			DateYear: "1260",
			DateAberWithDate: "Fri 01 Meh 1260",
			DateDoy: "1260.186",
			DateWoy: "1260W27-7",
			DateWithSlash: "1260/07/01",
			DateWithOutSlash: "12600701"
		},
		stime: -2785634744000,
		gdate: [1881, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 8, 23] },
		gtime: -2785634744000
	},
	{
		sdate: [1260, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 2],
			DateTime: "1260-07-02 00:00:00",
			DateAber: "02 Meh 1260",
			DateMonth: "Meh",
			DateYearMonth: "1260-Meh",
			DateYear: "1260",
			DateAberWithDate: "Sat 02 Meh 1260",
			DateDoy: "1260.187",
			DateWoy: "1260W28-1",
			DateWithSlash: "1260/07/02",
			DateWithOutSlash: "12600702"
		},
		stime: -2785548344000,
		gdate: [1881, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 8, 24] },
		gtime: -2785548344000
	},
	{
		sdate: [1260, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 15],
			DateTime: "1260-07-15 00:00:00",
			DateAber: "15 Meh 1260",
			DateMonth: "Meh",
			DateYearMonth: "1260-Meh",
			DateYear: "1260",
			DateAberWithDate: "Fri 15 Meh 1260",
			DateDoy: "1260.200",
			DateWoy: "1260W29-7",
			DateWithSlash: "1260/07/15",
			DateWithOutSlash: "12600715"
		},
		stime: -2784425144000,
		gdate: [1881, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 9, 7] },
		gtime: -2784425144000
	},
	{
		sdate: [1260, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 29],
			DateTime: "1260-07-29 00:00:00",
			DateAber: "29 Meh 1260",
			DateMonth: "Meh",
			DateYearMonth: "1260-Meh",
			DateYear: "1260",
			DateAberWithDate: "Fri 29 Meh 1260",
			DateDoy: "1260.214",
			DateWoy: "1260W31-7",
			DateWithSlash: "1260/07/29",
			DateWithOutSlash: "12600729"
		},
		stime: -2783215544000,
		gdate: [1881, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 9, 21] },
		gtime: -2783215544000
	},
	{
		sdate: [1260, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 30],
			DateTime: "1260-07-30 00:00:00",
			DateAber: "30 Meh 1260",
			DateMonth: "Meh",
			DateYearMonth: "1260-Meh",
			DateYear: "1260",
			DateAberWithDate: "Sat 30 Meh 1260",
			DateDoy: "1260.215",
			DateWoy: "1260W32-1",
			DateWithSlash: "1260/07/30",
			DateWithOutSlash: "12600730"
		},
		stime: -2783129144000,
		gdate: [1881, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 9, 22] },
		gtime: -2783129144000
	},
	{
		sdate: [1260, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 1],
			DateTime: "1260-08-01 00:00:00",
			DateAber: "01 Aba 1260",
			DateMonth: "Aba",
			DateYearMonth: "1260-Aba",
			DateYear: "1260",
			DateAberWithDate: "Sun 01 Aba 1260",
			DateDoy: "1260.216",
			DateWoy: "1260W32-2",
			DateWithSlash: "1260/08/01",
			DateWithOutSlash: "12600801"
		},
		stime: -2783042744000,
		gdate: [1881, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 9, 23] },
		gtime: -2783042744000
	},
	{
		sdate: [1260, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 2],
			DateTime: "1260-08-02 00:00:00",
			DateAber: "02 Aba 1260",
			DateMonth: "Aba",
			DateYearMonth: "1260-Aba",
			DateYear: "1260",
			DateAberWithDate: "Mon 02 Aba 1260",
			DateDoy: "1260.217",
			DateWoy: "1260W32-3",
			DateWithSlash: "1260/08/02",
			DateWithOutSlash: "12600802"
		},
		stime: -2782956344000,
		gdate: [1881, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 9, 24] },
		gtime: -2782956344000
	},
	{
		sdate: [1260, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 15],
			DateTime: "1260-08-15 00:00:00",
			DateAber: "15 Aba 1260",
			DateMonth: "Aba",
			DateYearMonth: "1260-Aba",
			DateYear: "1260",
			DateAberWithDate: "Sun 15 Aba 1260",
			DateDoy: "1260.230",
			DateWoy: "1260W34-2",
			DateWithSlash: "1260/08/15",
			DateWithOutSlash: "12600815"
		},
		stime: -2781833144000,
		gdate: [1881, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 10, 6] },
		gtime: -2781833144000
	},
	{
		sdate: [1260, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 29],
			DateTime: "1260-08-29 00:00:00",
			DateAber: "29 Aba 1260",
			DateMonth: "Aba",
			DateYearMonth: "1260-Aba",
			DateYear: "1260",
			DateAberWithDate: "Sun 29 Aba 1260",
			DateDoy: "1260.244",
			DateWoy: "1260W36-2",
			DateWithSlash: "1260/08/29",
			DateWithOutSlash: "12600829"
		},
		stime: -2780623544000,
		gdate: [1881, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 10, 20] },
		gtime: -2780623544000
	},
	{
		sdate: [1260, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 30],
			DateTime: "1260-08-30 00:00:00",
			DateAber: "30 Aba 1260",
			DateMonth: "Aba",
			DateYearMonth: "1260-Aba",
			DateYear: "1260",
			DateAberWithDate: "Mon 30 Aba 1260",
			DateDoy: "1260.245",
			DateWoy: "1260W36-3",
			DateWithSlash: "1260/08/30",
			DateWithOutSlash: "12600830"
		},
		stime: -2780537144000,
		gdate: [1881, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 10, 21] },
		gtime: -2780537144000
	},
	{
		sdate: [1260, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 1],
			DateTime: "1260-09-01 00:00:00",
			DateAber: "01 Aza 1260",
			DateMonth: "Aza",
			DateYearMonth: "1260-Aza",
			DateYear: "1260",
			DateAberWithDate: "Tue 01 Aza 1260",
			DateDoy: "1260.246",
			DateWoy: "1260W36-4",
			DateWithSlash: "1260/09/01",
			DateWithOutSlash: "12600901"
		},
		stime: -2780450744000,
		gdate: [1881, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 10, 22] },
		gtime: -2780450744000
	},
	{
		sdate: [1260, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 2],
			DateTime: "1260-09-02 00:00:00",
			DateAber: "02 Aza 1260",
			DateMonth: "Aza",
			DateYearMonth: "1260-Aza",
			DateYear: "1260",
			DateAberWithDate: "Wed 02 Aza 1260",
			DateDoy: "1260.247",
			DateWoy: "1260W36-5",
			DateWithSlash: "1260/09/02",
			DateWithOutSlash: "12600902"
		},
		stime: -2780364344000,
		gdate: [1881, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 10, 23] },
		gtime: -2780364344000
	},
	{
		sdate: [1260, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 15],
			DateTime: "1260-09-15 00:00:00",
			DateAber: "15 Aza 1260",
			DateMonth: "Aza",
			DateYearMonth: "1260-Aza",
			DateYear: "1260",
			DateAberWithDate: "Tue 15 Aza 1260",
			DateDoy: "1260.260",
			DateWoy: "1260W38-4",
			DateWithSlash: "1260/09/15",
			DateWithOutSlash: "12600915"
		},
		stime: -2779241144000,
		gdate: [1881, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 11, 6] },
		gtime: -2779241144000
	},
	{
		sdate: [1260, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 29],
			DateTime: "1260-09-29 00:00:00",
			DateAber: "29 Aza 1260",
			DateMonth: "Aza",
			DateYearMonth: "1260-Aza",
			DateYear: "1260",
			DateAberWithDate: "Tue 29 Aza 1260",
			DateDoy: "1260.274",
			DateWoy: "1260W40-4",
			DateWithSlash: "1260/09/29",
			DateWithOutSlash: "12600929"
		},
		stime: -2778031544000,
		gdate: [1881, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 11, 20] },
		gtime: -2778031544000
	},
	{
		sdate: [1260, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 30],
			DateTime: "1260-09-30 00:00:00",
			DateAber: "30 Aza 1260",
			DateMonth: "Aza",
			DateYearMonth: "1260-Aza",
			DateYear: "1260",
			DateAberWithDate: "Wed 30 Aza 1260",
			DateDoy: "1260.275",
			DateWoy: "1260W40-5",
			DateWithSlash: "1260/09/30",
			DateWithOutSlash: "12600930"
		},
		stime: -2777945144000,
		gdate: [1881, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 11, 21] },
		gtime: -2777945144000
	},
	{
		sdate: [1260, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 1],
			DateTime: "1260-10-01 00:00:00",
			DateAber: "01 Dey 1260",
			DateMonth: "Dey",
			DateYearMonth: "1260-Dey",
			DateYear: "1260",
			DateAberWithDate: "Thu 01 Dey 1260",
			DateDoy: "1260.276",
			DateWoy: "1260W40-6",
			DateWithSlash: "1260/10/01",
			DateWithOutSlash: "12601001"
		},
		stime: -2777858744000,
		gdate: [1881, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 11, 22] },
		gtime: -2777858744000
	},
	{
		sdate: [1260, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 2],
			DateTime: "1260-10-02 00:00:00",
			DateAber: "02 Dey 1260",
			DateMonth: "Dey",
			DateYearMonth: "1260-Dey",
			DateYear: "1260",
			DateAberWithDate: "Fri 02 Dey 1260",
			DateDoy: "1260.277",
			DateWoy: "1260W40-7",
			DateWithSlash: "1260/10/02",
			DateWithOutSlash: "12601002"
		},
		stime: -2777772344000,
		gdate: [1881, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1881, 11, 23] },
		gtime: -2777772344000
	},
	{
		sdate: [1260, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 15],
			DateTime: "1260-10-15 00:00:00",
			DateAber: "15 Dey 1260",
			DateMonth: "Dey",
			DateYearMonth: "1260-Dey",
			DateYear: "1260",
			DateAberWithDate: "Thu 15 Dey 1260",
			DateDoy: "1260.290",
			DateWoy: "1260W42-6",
			DateWithSlash: "1260/10/15",
			DateWithOutSlash: "12601015"
		},
		stime: -2776649144000,
		gdate: [1882, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 0, 5] },
		gtime: -2776649144000
	},
	{
		sdate: [1260, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 29],
			DateTime: "1260-10-29 00:00:00",
			DateAber: "29 Dey 1260",
			DateMonth: "Dey",
			DateYearMonth: "1260-Dey",
			DateYear: "1260",
			DateAberWithDate: "Thu 29 Dey 1260",
			DateDoy: "1260.304",
			DateWoy: "1260W44-6",
			DateWithSlash: "1260/10/29",
			DateWithOutSlash: "12601029"
		},
		stime: -2775439544000,
		gdate: [1882, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 0, 19] },
		gtime: -2775439544000
	},
	{
		sdate: [1260, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 30],
			DateTime: "1260-10-30 00:00:00",
			DateAber: "30 Dey 1260",
			DateMonth: "Dey",
			DateYearMonth: "1260-Dey",
			DateYear: "1260",
			DateAberWithDate: "Fri 30 Dey 1260",
			DateDoy: "1260.305",
			DateWoy: "1260W44-7",
			DateWithSlash: "1260/10/30",
			DateWithOutSlash: "12601030"
		},
		stime: -2775353144000,
		gdate: [1882, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 0, 20] },
		gtime: -2775353144000
	},
	{
		sdate: [1260, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 1],
			DateTime: "1260-11-01 00:00:00",
			DateAber: "01 Bah 1260",
			DateMonth: "Bah",
			DateYearMonth: "1260-Bah",
			DateYear: "1260",
			DateAberWithDate: "Sat 01 Bah 1260",
			DateDoy: "1260.306",
			DateWoy: "1260W45-1",
			DateWithSlash: "1260/11/01",
			DateWithOutSlash: "12601101"
		},
		stime: -2775266744000,
		gdate: [1882, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 0, 21] },
		gtime: -2775266744000
	},
	{
		sdate: [1260, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 2],
			DateTime: "1260-11-02 00:00:00",
			DateAber: "02 Bah 1260",
			DateMonth: "Bah",
			DateYearMonth: "1260-Bah",
			DateYear: "1260",
			DateAberWithDate: "Sun 02 Bah 1260",
			DateDoy: "1260.307",
			DateWoy: "1260W45-2",
			DateWithSlash: "1260/11/02",
			DateWithOutSlash: "12601102"
		},
		stime: -2775180344000,
		gdate: [1882, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 0, 22] },
		gtime: -2775180344000
	},
	{
		sdate: [1260, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 15],
			DateTime: "1260-11-15 00:00:00",
			DateAber: "15 Bah 1260",
			DateMonth: "Bah",
			DateYearMonth: "1260-Bah",
			DateYear: "1260",
			DateAberWithDate: "Sat 15 Bah 1260",
			DateDoy: "1260.320",
			DateWoy: "1260W47-1",
			DateWithSlash: "1260/11/15",
			DateWithOutSlash: "12601115"
		},
		stime: -2774057144000,
		gdate: [1882, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 1, 4] },
		gtime: -2774057144000
	},
	{
		sdate: [1260, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 29],
			DateTime: "1260-11-29 00:00:00",
			DateAber: "29 Bah 1260",
			DateMonth: "Bah",
			DateYearMonth: "1260-Bah",
			DateYear: "1260",
			DateAberWithDate: "Sat 29 Bah 1260",
			DateDoy: "1260.334",
			DateWoy: "1260W49-1",
			DateWithSlash: "1260/11/29",
			DateWithOutSlash: "12601129"
		},
		stime: -2772847544000,
		gdate: [1882, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 1, 18] },
		gtime: -2772847544000
	},
	{
		sdate: [1260, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 30],
			DateTime: "1260-11-30 00:00:00",
			DateAber: "30 Bah 1260",
			DateMonth: "Bah",
			DateYearMonth: "1260-Bah",
			DateYear: "1260",
			DateAberWithDate: "Sun 30 Bah 1260",
			DateDoy: "1260.335",
			DateWoy: "1260W49-2",
			DateWithSlash: "1260/11/30",
			DateWithOutSlash: "12601130"
		},
		stime: -2772761144000,
		gdate: [1882, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 1, 19] },
		gtime: -2772761144000
	},
	{
		sdate: [1260, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 1],
			DateTime: "1260-12-01 00:00:00",
			DateAber: "01 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Mon 01 Esf 1260",
			DateDoy: "1260.336",
			DateWoy: "1260W49-3",
			DateWithSlash: "1260/12/01",
			DateWithOutSlash: "12601201"
		},
		stime: -2772674744000,
		gdate: [1882, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 1, 20] },
		gtime: -2772674744000
	},
	{
		sdate: [1260, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 2],
			DateTime: "1260-12-02 00:00:00",
			DateAber: "02 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Tue 02 Esf 1260",
			DateDoy: "1260.337",
			DateWoy: "1260W49-4",
			DateWithSlash: "1260/12/02",
			DateWithOutSlash: "12601202"
		},
		stime: -2772588344000,
		gdate: [1882, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 1, 21] },
		gtime: -2772588344000
	},
	{
		sdate: [1260, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 3],
			DateTime: "1260-12-03 00:00:00",
			DateAber: "03 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Wed 03 Esf 1260",
			DateDoy: "1260.338",
			DateWoy: "1260W49-5",
			DateWithSlash: "1260/12/03",
			DateWithOutSlash: "12601203"
		},
		stime: -2772501944000,
		gdate: [1882, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 1, 22] },
		gtime: -2772501944000
	},
	{
		sdate: [1260, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 4],
			DateTime: "1260-12-04 00:00:00",
			DateAber: "04 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Thu 04 Esf 1260",
			DateDoy: "1260.339",
			DateWoy: "1260W49-6",
			DateWithSlash: "1260/12/04",
			DateWithOutSlash: "12601204"
		},
		stime: -2772415544000,
		gdate: [1882, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 1, 23] },
		gtime: -2772415544000
	},
	{
		sdate: [1260, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 15],
			DateTime: "1260-12-15 00:00:00",
			DateAber: "15 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Mon 15 Esf 1260",
			DateDoy: "1260.350",
			DateWoy: "1260W51-3",
			DateWithSlash: "1260/12/15",
			DateWithOutSlash: "12601215"
		},
		stime: -2771465144000,
		gdate: [1882, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 2, 6] },
		gtime: -2771465144000
	},
	{
		sdate: [1260, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 25],
			DateTime: "1260-12-25 00:00:00",
			DateAber: "25 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Thu 25 Esf 1260",
			DateDoy: "1260.360",
			DateWoy: "1260W52-6",
			DateWithSlash: "1260/12/25",
			DateWithOutSlash: "12601225"
		},
		stime: -2770601144000,
		gdate: [1882, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 2, 16] },
		gtime: -2770601144000
	},
	{
		sdate: [1260, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 26],
			DateTime: "1260-12-26 00:00:00",
			DateAber: "26 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Fri 26 Esf 1260",
			DateDoy: "1260.361",
			DateWoy: "1260W52-7",
			DateWithSlash: "1260/12/26",
			DateWithOutSlash: "12601226"
		},
		stime: -2770514744000,
		gdate: [1882, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 2, 17] },
		gtime: -2770514744000
	},
	{
		sdate: [1260, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 27],
			DateTime: "1260-12-27 00:00:00",
			DateAber: "27 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Sat 27 Esf 1260",
			DateDoy: "1260.362",
			DateWoy: "1261W01-1",
			DateWithSlash: "1260/12/27",
			DateWithOutSlash: "12601227"
		},
		stime: -2770428344000,
		gdate: [1882, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 2, 18] },
		gtime: -2770428344000
	},
	{
		sdate: [1260, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 28],
			DateTime: "1260-12-28 00:00:00",
			DateAber: "28 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Sun 28 Esf 1260",
			DateDoy: "1260.363",
			DateWoy: "1261W01-2",
			DateWithSlash: "1260/12/28",
			DateWithOutSlash: "12601228"
		},
		stime: -2770341944000,
		gdate: [1882, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 2, 19] },
		gtime: -2770341944000
	},
	{
		sdate: [1260, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 29],
			DateTime: "1260-12-29 00:00:00",
			DateAber: "29 Esf 1260",
			DateMonth: "Esf",
			DateYearMonth: "1260-Esf",
			DateYear: "1260",
			DateAberWithDate: "Mon 29 Esf 1260",
			DateDoy: "1260.364",
			DateWoy: "1261W01-3",
			DateWithSlash: "1260/12/29",
			DateWithOutSlash: "12601229"
		},
		stime: -2770255544000,
		gdate: [1882, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 2, 20] },
		gtime: -2770255544000
	},

	{
		sdate: [1280, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 1],
			DateTime: "1280-01-01 00:00:00",
			DateAber: "01 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Thu 01 Far 1280",
			DateDoy: "1280.000",
			DateWoy: "1279W52-6",
			DateWithSlash: "1280/01/01",
			DateWithOutSlash: "12800101"
		},
		stime: -2170639544000,
		gdate: [1901, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 2, 21] },
		gtime: -2170639544000
	},
	{
		sdate: [1280, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 2],
			DateTime: "1280-01-02 00:00:00",
			DateAber: "02 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Fri 02 Far 1280",
			DateDoy: "1280.001",
			DateWoy: "1279W52-7",
			DateWithSlash: "1280/01/02",
			DateWithOutSlash: "12800102"
		},
		stime: -2170553144000,
		gdate: [1901, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 2, 22] },
		gtime: -2170553144000
	},
	{
		sdate: [1280, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 3],
			DateTime: "1280-01-03 00:00:00",
			DateAber: "03 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Sat 03 Far 1280",
			DateDoy: "1280.002",
			DateWoy: "1280W01-1",
			DateWithSlash: "1280/01/03",
			DateWithOutSlash: "12800103"
		},
		stime: -2170466744000,
		gdate: [1901, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 2, 23] },
		gtime: -2170466744000
	},
	{
		sdate: [1280, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 4],
			DateTime: "1280-01-04 00:00:00",
			DateAber: "04 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Sun 04 Far 1280",
			DateDoy: "1280.003",
			DateWoy: "1280W01-2",
			DateWithSlash: "1280/01/04",
			DateWithOutSlash: "12800104"
		},
		stime: -2170380344000,
		gdate: [1901, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 2, 24] },
		gtime: -2170380344000
	},
	{
		sdate: [1280, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 5],
			DateTime: "1280-01-05 00:00:00",
			DateAber: "05 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Mon 05 Far 1280",
			DateDoy: "1280.004",
			DateWoy: "1280W01-3",
			DateWithSlash: "1280/01/05",
			DateWithOutSlash: "12800105"
		},
		stime: -2170293944000,
		gdate: [1901, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 2, 25] },
		gtime: -2170293944000
	},
	{
		sdate: [1280, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 6],
			DateTime: "1280-01-06 00:00:00",
			DateAber: "06 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Tue 06 Far 1280",
			DateDoy: "1280.005",
			DateWoy: "1280W01-4",
			DateWithSlash: "1280/01/06",
			DateWithOutSlash: "12800106"
		},
		stime: -2170207544000,
		gdate: [1901, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 2, 26] },
		gtime: -2170207544000
	},
	{
		sdate: [1280, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 7],
			DateTime: "1280-01-07 00:00:00",
			DateAber: "07 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Wed 07 Far 1280",
			DateDoy: "1280.006",
			DateWoy: "1280W01-5",
			DateWithSlash: "1280/01/07",
			DateWithOutSlash: "12800107"
		},
		stime: -2170121144000,
		gdate: [1901, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 2, 27] },
		gtime: -2170121144000
	},
	{
		sdate: [1280, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 15],
			DateTime: "1280-01-15 00:00:00",
			DateAber: "15 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Thu 15 Far 1280",
			DateDoy: "1280.014",
			DateWoy: "1280W02-6",
			DateWithSlash: "1280/01/15",
			DateWithOutSlash: "12800115"
		},
		stime: -2169429944000,
		gdate: [1901, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 3, 4] },
		gtime: -2169429944000
	},
	{
		sdate: [1280, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 29],
			DateTime: "1280-01-29 00:00:00",
			DateAber: "29 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Thu 29 Far 1280",
			DateDoy: "1280.028",
			DateWoy: "1280W04-6",
			DateWithSlash: "1280/01/29",
			DateWithOutSlash: "12800129"
		},
		stime: -2168220344000,
		gdate: [1901, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 3, 18] },
		gtime: -2168220344000
	},
	{
		sdate: [1280, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 30],
			DateTime: "1280-01-30 00:00:00",
			DateAber: "30 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Fri 30 Far 1280",
			DateDoy: "1280.029",
			DateWoy: "1280W04-7",
			DateWithSlash: "1280/01/30",
			DateWithOutSlash: "12800130"
		},
		stime: -2168133944000,
		gdate: [1901, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 3, 19] },
		gtime: -2168133944000
	},
	{
		sdate: [1280, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 31],
			DateTime: "1280-01-31 00:00:00",
			DateAber: "31 Far 1280",
			DateMonth: "Far",
			DateYearMonth: "1280-Far",
			DateYear: "1280",
			DateAberWithDate: "Sat 31 Far 1280",
			DateDoy: "1280.030",
			DateWoy: "1280W05-1",
			DateWithSlash: "1280/01/31",
			DateWithOutSlash: "12800131"
		},
		stime: -2168047544000,
		gdate: [1901, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 3, 20] },
		gtime: -2168047544000
	},
	{
		sdate: [1280, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 1],
			DateTime: "1280-02-01 00:00:00",
			DateAber: "01 Ord 1280",
			DateMonth: "Ord",
			DateYearMonth: "1280-Ord",
			DateYear: "1280",
			DateAberWithDate: "Sun 01 Ord 1280",
			DateDoy: "1280.031",
			DateWoy: "1280W05-2",
			DateWithSlash: "1280/02/01",
			DateWithOutSlash: "12800201"
		},
		stime: -2167961144000,
		gdate: [1901, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 3, 21] },
		gtime: -2167961144000
	},
	{
		sdate: [1280, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 2],
			DateTime: "1280-02-02 00:00:00",
			DateAber: "02 Ord 1280",
			DateMonth: "Ord",
			DateYearMonth: "1280-Ord",
			DateYear: "1280",
			DateAberWithDate: "Mon 02 Ord 1280",
			DateDoy: "1280.032",
			DateWoy: "1280W05-3",
			DateWithSlash: "1280/02/02",
			DateWithOutSlash: "12800202"
		},
		stime: -2167874744000,
		gdate: [1901, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 3, 22] },
		gtime: -2167874744000
	},
	{
		sdate: [1280, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 15],
			DateTime: "1280-02-15 00:00:00",
			DateAber: "15 Ord 1280",
			DateMonth: "Ord",
			DateYearMonth: "1280-Ord",
			DateYear: "1280",
			DateAberWithDate: "Sun 15 Ord 1280",
			DateDoy: "1280.045",
			DateWoy: "1280W07-2",
			DateWithSlash: "1280/02/15",
			DateWithOutSlash: "12800215"
		},
		stime: -2166751544000,
		gdate: [1901, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 4, 5] },
		gtime: -2166751544000
	},
	{
		sdate: [1280, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 30],
			DateTime: "1280-02-30 00:00:00",
			DateAber: "30 Ord 1280",
			DateMonth: "Ord",
			DateYearMonth: "1280-Ord",
			DateYear: "1280",
			DateAberWithDate: "Mon 30 Ord 1280",
			DateDoy: "1280.060",
			DateWoy: "1280W09-3",
			DateWithSlash: "1280/02/30",
			DateWithOutSlash: "12800230"
		},
		stime: -2165455544000,
		gdate: [1901, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 4, 20] },
		gtime: -2165455544000
	},
	{
		sdate: [1280, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 31],
			DateTime: "1280-02-31 00:00:00",
			DateAber: "31 Ord 1280",
			DateMonth: "Ord",
			DateYearMonth: "1280-Ord",
			DateYear: "1280",
			DateAberWithDate: "Tue 31 Ord 1280",
			DateDoy: "1280.061",
			DateWoy: "1280W09-4",
			DateWithSlash: "1280/02/31",
			DateWithOutSlash: "12800231"
		},
		stime: -2165369144000,
		gdate: [1901, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 4, 21] },
		gtime: -2165369144000
	},
	{
		sdate: [1280, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 1],
			DateTime: "1280-03-01 00:00:00",
			DateAber: "01 Kho 1280",
			DateMonth: "Kho",
			DateYearMonth: "1280-Kho",
			DateYear: "1280",
			DateAberWithDate: "Wed 01 Kho 1280",
			DateDoy: "1280.062",
			DateWoy: "1280W09-5",
			DateWithSlash: "1280/03/01",
			DateWithOutSlash: "12800301"
		},
		stime: -2165282744000,
		gdate: [1901, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 4, 22] },
		gtime: -2165282744000
	},
	{
		sdate: [1280, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 2],
			DateTime: "1280-03-02 00:00:00",
			DateAber: "02 Kho 1280",
			DateMonth: "Kho",
			DateYearMonth: "1280-Kho",
			DateYear: "1280",
			DateAberWithDate: "Thu 02 Kho 1280",
			DateDoy: "1280.063",
			DateWoy: "1280W09-6",
			DateWithSlash: "1280/03/02",
			DateWithOutSlash: "12800302"
		},
		stime: -2165196344000,
		gdate: [1901, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 4, 23] },
		gtime: -2165196344000
	},
	{
		sdate: [1280, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 15],
			DateTime: "1280-03-15 00:00:00",
			DateAber: "15 Kho 1280",
			DateMonth: "Kho",
			DateYearMonth: "1280-Kho",
			DateYear: "1280",
			DateAberWithDate: "Wed 15 Kho 1280",
			DateDoy: "1280.076",
			DateWoy: "1280W11-5",
			DateWithSlash: "1280/03/15",
			DateWithOutSlash: "12800315"
		},
		stime: -2164073144000,
		gdate: [1901, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 5, 5] },
		gtime: -2164073144000
	},
	{
		sdate: [1280, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 30],
			DateTime: "1280-03-30 00:00:00",
			DateAber: "30 Kho 1280",
			DateMonth: "Kho",
			DateYearMonth: "1280-Kho",
			DateYear: "1280",
			DateAberWithDate: "Thu 30 Kho 1280",
			DateDoy: "1280.091",
			DateWoy: "1280W13-6",
			DateWithSlash: "1280/03/30",
			DateWithOutSlash: "12800330"
		},
		stime: -2162777144000,
		gdate: [1901, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 5, 20] },
		gtime: -2162777144000
	},
	{
		sdate: [1280, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 31],
			DateTime: "1280-03-31 00:00:00",
			DateAber: "31 Kho 1280",
			DateMonth: "Kho",
			DateYearMonth: "1280-Kho",
			DateYear: "1280",
			DateAberWithDate: "Fri 31 Kho 1280",
			DateDoy: "1280.092",
			DateWoy: "1280W13-7",
			DateWithSlash: "1280/03/31",
			DateWithOutSlash: "12800331"
		},
		stime: -2162690744000,
		gdate: [1901, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 5, 21] },
		gtime: -2162690744000
	},
	{
		sdate: [1280, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 1],
			DateTime: "1280-04-01 00:00:00",
			DateAber: "01 Tir 1280",
			DateMonth: "Tir",
			DateYearMonth: "1280-Tir",
			DateYear: "1280",
			DateAberWithDate: "Sat 01 Tir 1280",
			DateDoy: "1280.093",
			DateWoy: "1280W14-1",
			DateWithSlash: "1280/04/01",
			DateWithOutSlash: "12800401"
		},
		stime: -2162604344000,
		gdate: [1901, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 5, 22] },
		gtime: -2162604344000
	},
	{
		sdate: [1280, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 2],
			DateTime: "1280-04-02 00:00:00",
			DateAber: "02 Tir 1280",
			DateMonth: "Tir",
			DateYearMonth: "1280-Tir",
			DateYear: "1280",
			DateAberWithDate: "Sun 02 Tir 1280",
			DateDoy: "1280.094",
			DateWoy: "1280W14-2",
			DateWithSlash: "1280/04/02",
			DateWithOutSlash: "12800402"
		},
		stime: -2162517944000,
		gdate: [1901, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 5, 23] },
		gtime: -2162517944000
	},
	{
		sdate: [1280, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 15],
			DateTime: "1280-04-15 00:00:00",
			DateAber: "15 Tir 1280",
			DateMonth: "Tir",
			DateYearMonth: "1280-Tir",
			DateYear: "1280",
			DateAberWithDate: "Sat 15 Tir 1280",
			DateDoy: "1280.107",
			DateWoy: "1280W16-1",
			DateWithSlash: "1280/04/15",
			DateWithOutSlash: "12800415"
		},
		stime: -2161394744000,
		gdate: [1901, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 6, 6] },
		gtime: -2161394744000
	},
	{
		sdate: [1280, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 30],
			DateTime: "1280-04-30 00:00:00",
			DateAber: "30 Tir 1280",
			DateMonth: "Tir",
			DateYearMonth: "1280-Tir",
			DateYear: "1280",
			DateAberWithDate: "Sun 30 Tir 1280",
			DateDoy: "1280.122",
			DateWoy: "1280W18-2",
			DateWithSlash: "1280/04/30",
			DateWithOutSlash: "12800430"
		},
		stime: -2160098744000,
		gdate: [1901, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 6, 21] },
		gtime: -2160098744000
	},
	{
		sdate: [1280, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 31],
			DateTime: "1280-04-31 00:00:00",
			DateAber: "31 Tir 1280",
			DateMonth: "Tir",
			DateYearMonth: "1280-Tir",
			DateYear: "1280",
			DateAberWithDate: "Mon 31 Tir 1280",
			DateDoy: "1280.123",
			DateWoy: "1280W18-3",
			DateWithSlash: "1280/04/31",
			DateWithOutSlash: "12800431"
		},
		stime: -2160012344000,
		gdate: [1901, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 6, 22] },
		gtime: -2160012344000
	},
	{
		sdate: [1280, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 1],
			DateTime: "1280-05-01 00:00:00",
			DateAber: "01 Amo 1280",
			DateMonth: "Amo",
			DateYearMonth: "1280-Amo",
			DateYear: "1280",
			DateAberWithDate: "Tue 01 Amo 1280",
			DateDoy: "1280.124",
			DateWoy: "1280W18-4",
			DateWithSlash: "1280/05/01",
			DateWithOutSlash: "12800501"
		},
		stime: -2159925944000,
		gdate: [1901, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 6, 23] },
		gtime: -2159925944000
	},
	{
		sdate: [1280, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 2],
			DateTime: "1280-05-02 00:00:00",
			DateAber: "02 Amo 1280",
			DateMonth: "Amo",
			DateYearMonth: "1280-Amo",
			DateYear: "1280",
			DateAberWithDate: "Wed 02 Amo 1280",
			DateDoy: "1280.125",
			DateWoy: "1280W18-5",
			DateWithSlash: "1280/05/02",
			DateWithOutSlash: "12800502"
		},
		stime: -2159839544000,
		gdate: [1901, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 6, 24] },
		gtime: -2159839544000
	},
	{
		sdate: [1280, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 15],
			DateTime: "1280-05-15 00:00:00",
			DateAber: "15 Amo 1280",
			DateMonth: "Amo",
			DateYearMonth: "1280-Amo",
			DateYear: "1280",
			DateAberWithDate: "Tue 15 Amo 1280",
			DateDoy: "1280.138",
			DateWoy: "1280W20-4",
			DateWithSlash: "1280/05/15",
			DateWithOutSlash: "12800515"
		},
		stime: -2158716344000,
		gdate: [1901, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 7, 6] },
		gtime: -2158716344000
	},
	{
		sdate: [1280, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 30],
			DateTime: "1280-05-30 00:00:00",
			DateAber: "30 Amo 1280",
			DateMonth: "Amo",
			DateYearMonth: "1280-Amo",
			DateYear: "1280",
			DateAberWithDate: "Wed 30 Amo 1280",
			DateDoy: "1280.153",
			DateWoy: "1280W22-5",
			DateWithSlash: "1280/05/30",
			DateWithOutSlash: "12800530"
		},
		stime: -2157420344000,
		gdate: [1901, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 7, 21] },
		gtime: -2157420344000
	},
	{
		sdate: [1280, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 31],
			DateTime: "1280-05-31 00:00:00",
			DateAber: "31 Amo 1280",
			DateMonth: "Amo",
			DateYearMonth: "1280-Amo",
			DateYear: "1280",
			DateAberWithDate: "Thu 31 Amo 1280",
			DateDoy: "1280.154",
			DateWoy: "1280W22-6",
			DateWithSlash: "1280/05/31",
			DateWithOutSlash: "12800531"
		},
		stime: -2157333944000,
		gdate: [1901, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 7, 22] },
		gtime: -2157333944000
	},
	{
		sdate: [1280, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 1],
			DateTime: "1280-06-01 00:00:00",
			DateAber: "01 Sha 1280",
			DateMonth: "Sha",
			DateYearMonth: "1280-Sha",
			DateYear: "1280",
			DateAberWithDate: "Fri 01 Sha 1280",
			DateDoy: "1280.155",
			DateWoy: "1280W22-7",
			DateWithSlash: "1280/06/01",
			DateWithOutSlash: "12800601"
		},
		stime: -2157247544000,
		gdate: [1901, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 7, 23] },
		gtime: -2157247544000
	},
	{
		sdate: [1280, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 2],
			DateTime: "1280-06-02 00:00:00",
			DateAber: "02 Sha 1280",
			DateMonth: "Sha",
			DateYearMonth: "1280-Sha",
			DateYear: "1280",
			DateAberWithDate: "Sat 02 Sha 1280",
			DateDoy: "1280.156",
			DateWoy: "1280W23-1",
			DateWithSlash: "1280/06/02",
			DateWithOutSlash: "12800602"
		},
		stime: -2157161144000,
		gdate: [1901, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 7, 24] },
		gtime: -2157161144000
	},
	{
		sdate: [1280, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 15],
			DateTime: "1280-06-15 00:00:00",
			DateAber: "15 Sha 1280",
			DateMonth: "Sha",
			DateYearMonth: "1280-Sha",
			DateYear: "1280",
			DateAberWithDate: "Fri 15 Sha 1280",
			DateDoy: "1280.169",
			DateWoy: "1280W24-7",
			DateWithSlash: "1280/06/15",
			DateWithOutSlash: "12800615"
		},
		stime: -2156037944000,
		gdate: [1901, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 8, 6] },
		gtime: -2156037944000
	},
	{
		sdate: [1280, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 29],
			DateTime: "1280-06-29 00:00:00",
			DateAber: "29 Sha 1280",
			DateMonth: "Sha",
			DateYearMonth: "1280-Sha",
			DateYear: "1280",
			DateAberWithDate: "Fri 29 Sha 1280",
			DateDoy: "1280.183",
			DateWoy: "1280W26-7",
			DateWithSlash: "1280/06/29",
			DateWithOutSlash: "12800629"
		},
		stime: -2154828344000,
		gdate: [1901, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 8, 20] },
		gtime: -2154828344000
	},
	{
		sdate: [1280, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 30],
			DateTime: "1280-06-30 00:00:00",
			DateAber: "30 Sha 1280",
			DateMonth: "Sha",
			DateYearMonth: "1280-Sha",
			DateYear: "1280",
			DateAberWithDate: "Sat 30 Sha 1280",
			DateDoy: "1280.184",
			DateWoy: "1280W27-1",
			DateWithSlash: "1280/06/30",
			DateWithOutSlash: "12800630"
		},
		stime: -2154741944000,
		gdate: [1901, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 8, 21] },
		gtime: -2154741944000
	},
	{
		sdate: [1280, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 1],
			DateTime: "1280-07-01 00:00:00",
			DateAber: "01 Meh 1280",
			DateMonth: "Meh",
			DateYearMonth: "1280-Meh",
			DateYear: "1280",
			DateAberWithDate: "Mon 01 Meh 1280",
			DateDoy: "1280.186",
			DateWoy: "1280W27-3",
			DateWithSlash: "1280/07/01",
			DateWithOutSlash: "12800701"
		},
		stime: -2154569144000,
		gdate: [1901, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 8, 23] },
		gtime: -2154569144000
	},
	{
		sdate: [1280, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 2],
			DateTime: "1280-07-02 00:00:00",
			DateAber: "02 Meh 1280",
			DateMonth: "Meh",
			DateYearMonth: "1280-Meh",
			DateYear: "1280",
			DateAberWithDate: "Tue 02 Meh 1280",
			DateDoy: "1280.187",
			DateWoy: "1280W27-4",
			DateWithSlash: "1280/07/02",
			DateWithOutSlash: "12800702"
		},
		stime: -2154482744000,
		gdate: [1901, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 8, 24] },
		gtime: -2154482744000
	},
	{
		sdate: [1280, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 15],
			DateTime: "1280-07-15 00:00:00",
			DateAber: "15 Meh 1280",
			DateMonth: "Meh",
			DateYearMonth: "1280-Meh",
			DateYear: "1280",
			DateAberWithDate: "Mon 15 Meh 1280",
			DateDoy: "1280.200",
			DateWoy: "1280W29-3",
			DateWithSlash: "1280/07/15",
			DateWithOutSlash: "12800715"
		},
		stime: -2153359544000,
		gdate: [1901, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 9, 7] },
		gtime: -2153359544000
	},
	{
		sdate: [1280, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 29],
			DateTime: "1280-07-29 00:00:00",
			DateAber: "29 Meh 1280",
			DateMonth: "Meh",
			DateYearMonth: "1280-Meh",
			DateYear: "1280",
			DateAberWithDate: "Mon 29 Meh 1280",
			DateDoy: "1280.214",
			DateWoy: "1280W31-3",
			DateWithSlash: "1280/07/29",
			DateWithOutSlash: "12800729"
		},
		stime: -2152149944000,
		gdate: [1901, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 9, 21] },
		gtime: -2152149944000
	},
	{
		sdate: [1280, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 30],
			DateTime: "1280-07-30 00:00:00",
			DateAber: "30 Meh 1280",
			DateMonth: "Meh",
			DateYearMonth: "1280-Meh",
			DateYear: "1280",
			DateAberWithDate: "Tue 30 Meh 1280",
			DateDoy: "1280.215",
			DateWoy: "1280W31-4",
			DateWithSlash: "1280/07/30",
			DateWithOutSlash: "12800730"
		},
		stime: -2152063544000,
		gdate: [1901, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 9, 22] },
		gtime: -2152063544000
	},
	{
		sdate: [1280, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 1],
			DateTime: "1280-08-01 00:00:00",
			DateAber: "01 Aba 1280",
			DateMonth: "Aba",
			DateYearMonth: "1280-Aba",
			DateYear: "1280",
			DateAberWithDate: "Wed 01 Aba 1280",
			DateDoy: "1280.216",
			DateWoy: "1280W31-5",
			DateWithSlash: "1280/08/01",
			DateWithOutSlash: "12800801"
		},
		stime: -2151977144000,
		gdate: [1901, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 9, 23] },
		gtime: -2151977144000
	},
	{
		sdate: [1280, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 2],
			DateTime: "1280-08-02 00:00:00",
			DateAber: "02 Aba 1280",
			DateMonth: "Aba",
			DateYearMonth: "1280-Aba",
			DateYear: "1280",
			DateAberWithDate: "Thu 02 Aba 1280",
			DateDoy: "1280.217",
			DateWoy: "1280W31-6",
			DateWithSlash: "1280/08/02",
			DateWithOutSlash: "12800802"
		},
		stime: -2151890744000,
		gdate: [1901, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 9, 24] },
		gtime: -2151890744000
	},
	{
		sdate: [1280, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 15],
			DateTime: "1280-08-15 00:00:00",
			DateAber: "15 Aba 1280",
			DateMonth: "Aba",
			DateYearMonth: "1280-Aba",
			DateYear: "1280",
			DateAberWithDate: "Wed 15 Aba 1280",
			DateDoy: "1280.230",
			DateWoy: "1280W33-5",
			DateWithSlash: "1280/08/15",
			DateWithOutSlash: "12800815"
		},
		stime: -2150767544000,
		gdate: [1901, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 10, 6] },
		gtime: -2150767544000
	},
	{
		sdate: [1280, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 29],
			DateTime: "1280-08-29 00:00:00",
			DateAber: "29 Aba 1280",
			DateMonth: "Aba",
			DateYearMonth: "1280-Aba",
			DateYear: "1280",
			DateAberWithDate: "Wed 29 Aba 1280",
			DateDoy: "1280.244",
			DateWoy: "1280W35-5",
			DateWithSlash: "1280/08/29",
			DateWithOutSlash: "12800829"
		},
		stime: -2149557944000,
		gdate: [1901, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 10, 20] },
		gtime: -2149557944000
	},
	{
		sdate: [1280, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 30],
			DateTime: "1280-08-30 00:00:00",
			DateAber: "30 Aba 1280",
			DateMonth: "Aba",
			DateYearMonth: "1280-Aba",
			DateYear: "1280",
			DateAberWithDate: "Thu 30 Aba 1280",
			DateDoy: "1280.245",
			DateWoy: "1280W35-6",
			DateWithSlash: "1280/08/30",
			DateWithOutSlash: "12800830"
		},
		stime: -2149471544000,
		gdate: [1901, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 10, 21] },
		gtime: -2149471544000
	},
	{
		sdate: [1280, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 1],
			DateTime: "1280-09-01 00:00:00",
			DateAber: "01 Aza 1280",
			DateMonth: "Aza",
			DateYearMonth: "1280-Aza",
			DateYear: "1280",
			DateAberWithDate: "Fri 01 Aza 1280",
			DateDoy: "1280.246",
			DateWoy: "1280W35-7",
			DateWithSlash: "1280/09/01",
			DateWithOutSlash: "12800901"
		},
		stime: -2149385144000,
		gdate: [1901, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 10, 22] },
		gtime: -2149385144000
	},
	{
		sdate: [1280, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 2],
			DateTime: "1280-09-02 00:00:00",
			DateAber: "02 Aza 1280",
			DateMonth: "Aza",
			DateYearMonth: "1280-Aza",
			DateYear: "1280",
			DateAberWithDate: "Sat 02 Aza 1280",
			DateDoy: "1280.247",
			DateWoy: "1280W36-1",
			DateWithSlash: "1280/09/02",
			DateWithOutSlash: "12800902"
		},
		stime: -2149298744000,
		gdate: [1901, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 10, 23] },
		gtime: -2149298744000
	},
	{
		sdate: [1280, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 15],
			DateTime: "1280-09-15 00:00:00",
			DateAber: "15 Aza 1280",
			DateMonth: "Aza",
			DateYearMonth: "1280-Aza",
			DateYear: "1280",
			DateAberWithDate: "Fri 15 Aza 1280",
			DateDoy: "1280.260",
			DateWoy: "1280W37-7",
			DateWithSlash: "1280/09/15",
			DateWithOutSlash: "12800915"
		},
		stime: -2148175544000,
		gdate: [1901, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 11, 6] },
		gtime: -2148175544000
	},
	{
		sdate: [1280, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 29],
			DateTime: "1280-09-29 00:00:00",
			DateAber: "29 Aza 1280",
			DateMonth: "Aza",
			DateYearMonth: "1280-Aza",
			DateYear: "1280",
			DateAberWithDate: "Fri 29 Aza 1280",
			DateDoy: "1280.274",
			DateWoy: "1280W39-7",
			DateWithSlash: "1280/09/29",
			DateWithOutSlash: "12800929"
		},
		stime: -2146965944000,
		gdate: [1901, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 11, 20] },
		gtime: -2146965944000
	},
	{
		sdate: [1280, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 30],
			DateTime: "1280-09-30 00:00:00",
			DateAber: "30 Aza 1280",
			DateMonth: "Aza",
			DateYearMonth: "1280-Aza",
			DateYear: "1280",
			DateAberWithDate: "Sat 30 Aza 1280",
			DateDoy: "1280.275",
			DateWoy: "1280W40-1",
			DateWithSlash: "1280/09/30",
			DateWithOutSlash: "12800930"
		},
		stime: -2146879544000,
		gdate: [1901, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 11, 21] },
		gtime: -2146879544000
	},
	{
		sdate: [1280, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 1],
			DateTime: "1280-10-01 00:00:00",
			DateAber: "01 Dey 1280",
			DateMonth: "Dey",
			DateYearMonth: "1280-Dey",
			DateYear: "1280",
			DateAberWithDate: "Sun 01 Dey 1280",
			DateDoy: "1280.276",
			DateWoy: "1280W40-2",
			DateWithSlash: "1280/10/01",
			DateWithOutSlash: "12801001"
		},
		stime: -2146793144000,
		gdate: [1901, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 11, 22] },
		gtime: -2146793144000
	},
	{
		sdate: [1280, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 2],
			DateTime: "1280-10-02 00:00:00",
			DateAber: "02 Dey 1280",
			DateMonth: "Dey",
			DateYearMonth: "1280-Dey",
			DateYear: "1280",
			DateAberWithDate: "Mon 02 Dey 1280",
			DateDoy: "1280.277",
			DateWoy: "1280W40-3",
			DateWithSlash: "1280/10/02",
			DateWithOutSlash: "12801002"
		},
		stime: -2146706744000,
		gdate: [1901, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1901, 11, 23] },
		gtime: -2146706744000
	},
	{
		sdate: [1280, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 15],
			DateTime: "1280-10-15 00:00:00",
			DateAber: "15 Dey 1280",
			DateMonth: "Dey",
			DateYearMonth: "1280-Dey",
			DateYear: "1280",
			DateAberWithDate: "Sun 15 Dey 1280",
			DateDoy: "1280.290",
			DateWoy: "1280W42-2",
			DateWithSlash: "1280/10/15",
			DateWithOutSlash: "12801015"
		},
		stime: -2145583544000,
		gdate: [1902, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 0, 5] },
		gtime: -2145583544000
	},
	{
		sdate: [1280, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 29],
			DateTime: "1280-10-29 00:00:00",
			DateAber: "29 Dey 1280",
			DateMonth: "Dey",
			DateYearMonth: "1280-Dey",
			DateYear: "1280",
			DateAberWithDate: "Sun 29 Dey 1280",
			DateDoy: "1280.304",
			DateWoy: "1280W44-2",
			DateWithSlash: "1280/10/29",
			DateWithOutSlash: "12801029"
		},
		stime: -2144373944000,
		gdate: [1902, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 0, 19] },
		gtime: -2144373944000
	},
	{
		sdate: [1280, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 30],
			DateTime: "1280-10-30 00:00:00",
			DateAber: "30 Dey 1280",
			DateMonth: "Dey",
			DateYearMonth: "1280-Dey",
			DateYear: "1280",
			DateAberWithDate: "Mon 30 Dey 1280",
			DateDoy: "1280.305",
			DateWoy: "1280W44-3",
			DateWithSlash: "1280/10/30",
			DateWithOutSlash: "12801030"
		},
		stime: -2144287544000,
		gdate: [1902, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 0, 20] },
		gtime: -2144287544000
	},
	{
		sdate: [1280, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 1],
			DateTime: "1280-11-01 00:00:00",
			DateAber: "01 Bah 1280",
			DateMonth: "Bah",
			DateYearMonth: "1280-Bah",
			DateYear: "1280",
			DateAberWithDate: "Tue 01 Bah 1280",
			DateDoy: "1280.306",
			DateWoy: "1280W44-4",
			DateWithSlash: "1280/11/01",
			DateWithOutSlash: "12801101"
		},
		stime: -2144201144000,
		gdate: [1902, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 0, 21] },
		gtime: -2144201144000
	},
	{
		sdate: [1280, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 2],
			DateTime: "1280-11-02 00:00:00",
			DateAber: "02 Bah 1280",
			DateMonth: "Bah",
			DateYearMonth: "1280-Bah",
			DateYear: "1280",
			DateAberWithDate: "Wed 02 Bah 1280",
			DateDoy: "1280.307",
			DateWoy: "1280W44-5",
			DateWithSlash: "1280/11/02",
			DateWithOutSlash: "12801102"
		},
		stime: -2144114744000,
		gdate: [1902, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 0, 22] },
		gtime: -2144114744000
	},
	{
		sdate: [1280, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 15],
			DateTime: "1280-11-15 00:00:00",
			DateAber: "15 Bah 1280",
			DateMonth: "Bah",
			DateYearMonth: "1280-Bah",
			DateYear: "1280",
			DateAberWithDate: "Tue 15 Bah 1280",
			DateDoy: "1280.320",
			DateWoy: "1280W46-4",
			DateWithSlash: "1280/11/15",
			DateWithOutSlash: "12801115"
		},
		stime: -2142991544000,
		gdate: [1902, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 1, 4] },
		gtime: -2142991544000
	},
	{
		sdate: [1280, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 29],
			DateTime: "1280-11-29 00:00:00",
			DateAber: "29 Bah 1280",
			DateMonth: "Bah",
			DateYearMonth: "1280-Bah",
			DateYear: "1280",
			DateAberWithDate: "Tue 29 Bah 1280",
			DateDoy: "1280.334",
			DateWoy: "1280W48-4",
			DateWithSlash: "1280/11/29",
			DateWithOutSlash: "12801129"
		},
		stime: -2141781944000,
		gdate: [1902, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 1, 18] },
		gtime: -2141781944000
	},
	{
		sdate: [1280, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 30],
			DateTime: "1280-11-30 00:00:00",
			DateAber: "30 Bah 1280",
			DateMonth: "Bah",
			DateYearMonth: "1280-Bah",
			DateYear: "1280",
			DateAberWithDate: "Wed 30 Bah 1280",
			DateDoy: "1280.335",
			DateWoy: "1280W48-5",
			DateWithSlash: "1280/11/30",
			DateWithOutSlash: "12801130"
		},
		stime: -2141695544000,
		gdate: [1902, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 1, 19] },
		gtime: -2141695544000
	},
	{
		sdate: [1280, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 1],
			DateTime: "1280-12-01 00:00:00",
			DateAber: "01 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Thu 01 Esf 1280",
			DateDoy: "1280.336",
			DateWoy: "1280W48-6",
			DateWithSlash: "1280/12/01",
			DateWithOutSlash: "12801201"
		},
		stime: -2141609144000,
		gdate: [1902, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 1, 20] },
		gtime: -2141609144000
	},
	{
		sdate: [1280, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 2],
			DateTime: "1280-12-02 00:00:00",
			DateAber: "02 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Fri 02 Esf 1280",
			DateDoy: "1280.337",
			DateWoy: "1280W48-7",
			DateWithSlash: "1280/12/02",
			DateWithOutSlash: "12801202"
		},
		stime: -2141522744000,
		gdate: [1902, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 1, 21] },
		gtime: -2141522744000
	},
	{
		sdate: [1280, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 3],
			DateTime: "1280-12-03 00:00:00",
			DateAber: "03 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Sat 03 Esf 1280",
			DateDoy: "1280.338",
			DateWoy: "1280W49-1",
			DateWithSlash: "1280/12/03",
			DateWithOutSlash: "12801203"
		},
		stime: -2141436344000,
		gdate: [1902, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 1, 22] },
		gtime: -2141436344000
	},
	{
		sdate: [1280, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 4],
			DateTime: "1280-12-04 00:00:00",
			DateAber: "04 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Sun 04 Esf 1280",
			DateDoy: "1280.339",
			DateWoy: "1280W49-2",
			DateWithSlash: "1280/12/04",
			DateWithOutSlash: "12801204"
		},
		stime: -2141349944000,
		gdate: [1902, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 1, 23] },
		gtime: -2141349944000
	},
	{
		sdate: [1280, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 15],
			DateTime: "1280-12-15 00:00:00",
			DateAber: "15 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Thu 15 Esf 1280",
			DateDoy: "1280.350",
			DateWoy: "1280W50-6",
			DateWithSlash: "1280/12/15",
			DateWithOutSlash: "12801215"
		},
		stime: -2140399544000,
		gdate: [1902, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 6] },
		gtime: -2140399544000
	},
	{
		sdate: [1280, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 25],
			DateTime: "1280-12-25 00:00:00",
			DateAber: "25 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Sun 25 Esf 1280",
			DateDoy: "1280.360",
			DateWoy: "1280W52-2",
			DateWithSlash: "1280/12/25",
			DateWithOutSlash: "12801225"
		},
		stime: -2139535544000,
		gdate: [1902, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 16] },
		gtime: -2139535544000
	},
	{
		sdate: [1280, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 26],
			DateTime: "1280-12-26 00:00:00",
			DateAber: "26 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Mon 26 Esf 1280",
			DateDoy: "1280.361",
			DateWoy: "1280W52-3",
			DateWithSlash: "1280/12/26",
			DateWithOutSlash: "12801226"
		},
		stime: -2139449144000,
		gdate: [1902, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 17] },
		gtime: -2139449144000
	},
	{
		sdate: [1280, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 27],
			DateTime: "1280-12-27 00:00:00",
			DateAber: "27 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Tue 27 Esf 1280",
			DateDoy: "1280.362",
			DateWoy: "1280W52-4",
			DateWithSlash: "1280/12/27",
			DateWithOutSlash: "12801227"
		},
		stime: -2139362744000,
		gdate: [1902, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 18] },
		gtime: -2139362744000
	},
	{
		sdate: [1280, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 28],
			DateTime: "1280-12-28 00:00:00",
			DateAber: "28 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Wed 28 Esf 1280",
			DateDoy: "1280.363",
			DateWoy: "1280W52-5",
			DateWithSlash: "1280/12/28",
			DateWithOutSlash: "12801228"
		},
		stime: -2139276344000,
		gdate: [1902, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 19] },
		gtime: -2139276344000
	},
	{
		sdate: [1280, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 29],
			DateTime: "1280-12-29 00:00:00",
			DateAber: "29 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Thu 29 Esf 1280",
			DateDoy: "1280.364",
			DateWoy: "1280W52-6",
			DateWithSlash: "1280/12/29",
			DateWithOutSlash: "12801229"
		},
		stime: -2139189944000,
		gdate: [1902, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 20] },
		gtime: -2139189944000
	},
	{
		sdate: [1280, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 30],
			DateTime: "1280-12-30 00:00:00",
			DateAber: "30 Esf 1280",
			DateMonth: "Esf",
			DateYearMonth: "1280-Esf",
			DateYear: "1280",
			DateAberWithDate: "Fri 30 Esf 1280",
			DateDoy: "1280.365",
			DateWoy: "1280W52-7",
			DateWithSlash: "1280/12/30",
			DateWithOutSlash: "12801230"
		},
		stime: -2139103544000,
		gdate: [1902, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 21] },
		gtime: -2139103544000
	},
	{
		sdate: [1300, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 1],
			DateTime: "1300-01-01 00:00:00",
			DateAber: "01 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Mon 01 Far 1300",
			DateDoy: "1300.000",
			DateWoy: "1300W01-3",
			DateWithSlash: "1300/01/01",
			DateWithOutSlash: "13000101"
		},
		stime: -1539487544000,
		gdate: [1921, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 2, 21] },
		gtime: -1539487544000
	},
	{
		sdate: [1300, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 2],
			DateTime: "1300-01-02 00:00:00",
			DateAber: "02 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Tue 02 Far 1300",
			DateDoy: "1300.001",
			DateWoy: "1300W01-4",
			DateWithSlash: "1300/01/02",
			DateWithOutSlash: "13000102"
		},
		stime: -1539401144000,
		gdate: [1921, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 2, 22] },
		gtime: -1539401144000
	},
	{
		sdate: [1300, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 3],
			DateTime: "1300-01-03 00:00:00",
			DateAber: "03 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Wed 03 Far 1300",
			DateDoy: "1300.002",
			DateWoy: "1300W01-5",
			DateWithSlash: "1300/01/03",
			DateWithOutSlash: "13000103"
		},
		stime: -1539314744000,
		gdate: [1921, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 2, 23] },
		gtime: -1539314744000
	},
	{
		sdate: [1300, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 4],
			DateTime: "1300-01-04 00:00:00",
			DateAber: "04 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Thu 04 Far 1300",
			DateDoy: "1300.003",
			DateWoy: "1300W01-6",
			DateWithSlash: "1300/01/04",
			DateWithOutSlash: "13000104"
		},
		stime: -1539228344000,
		gdate: [1921, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 2, 24] },
		gtime: -1539228344000
	},
	{
		sdate: [1300, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 5],
			DateTime: "1300-01-05 00:00:00",
			DateAber: "05 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Fri 05 Far 1300",
			DateDoy: "1300.004",
			DateWoy: "1300W01-7",
			DateWithSlash: "1300/01/05",
			DateWithOutSlash: "13000105"
		},
		stime: -1539141944000,
		gdate: [1921, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 2, 25] },
		gtime: -1539141944000
	},
	{
		sdate: [1300, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 6],
			DateTime: "1300-01-06 00:00:00",
			DateAber: "06 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Sat 06 Far 1300",
			DateDoy: "1300.005",
			DateWoy: "1300W02-1",
			DateWithSlash: "1300/01/06",
			DateWithOutSlash: "13000106"
		},
		stime: -1539055544000,
		gdate: [1921, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 2, 26] },
		gtime: -1539055544000
	},
	{
		sdate: [1300, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 7],
			DateTime: "1300-01-07 00:00:00",
			DateAber: "07 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Sun 07 Far 1300",
			DateDoy: "1300.006",
			DateWoy: "1300W02-2",
			DateWithSlash: "1300/01/07",
			DateWithOutSlash: "13000107"
		},
		stime: -1538969144000,
		gdate: [1921, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 2, 27] },
		gtime: -1538969144000
	},
	{
		sdate: [1300, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 15],
			DateTime: "1300-01-15 00:00:00",
			DateAber: "15 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Mon 15 Far 1300",
			DateDoy: "1300.014",
			DateWoy: "1300W03-3",
			DateWithSlash: "1300/01/15",
			DateWithOutSlash: "13000115"
		},
		stime: -1538277944000,
		gdate: [1921, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 3, 4] },
		gtime: -1538277944000
	},
	{
		sdate: [1300, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 29],
			DateTime: "1300-01-29 00:00:00",
			DateAber: "29 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Mon 29 Far 1300",
			DateDoy: "1300.028",
			DateWoy: "1300W05-3",
			DateWithSlash: "1300/01/29",
			DateWithOutSlash: "13000129"
		},
		stime: -1537068344000,
		gdate: [1921, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 3, 18] },
		gtime: -1537068344000
	},
	{
		sdate: [1300, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 30],
			DateTime: "1300-01-30 00:00:00",
			DateAber: "30 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Tue 30 Far 1300",
			DateDoy: "1300.029",
			DateWoy: "1300W05-4",
			DateWithSlash: "1300/01/30",
			DateWithOutSlash: "13000130"
		},
		stime: -1536981944000,
		gdate: [1921, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 3, 19] },
		gtime: -1536981944000
	},
	{
		sdate: [1300, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 31],
			DateTime: "1300-01-31 00:00:00",
			DateAber: "31 Far 1300",
			DateMonth: "Far",
			DateYearMonth: "1300-Far",
			DateYear: "1300",
			DateAberWithDate: "Wed 31 Far 1300",
			DateDoy: "1300.030",
			DateWoy: "1300W05-5",
			DateWithSlash: "1300/01/31",
			DateWithOutSlash: "13000131"
		},
		stime: -1536895544000,
		gdate: [1921, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 3, 20] },
		gtime: -1536895544000
	},
	{
		sdate: [1300, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 1],
			DateTime: "1300-02-01 00:00:00",
			DateAber: "01 Ord 1300",
			DateMonth: "Ord",
			DateYearMonth: "1300-Ord",
			DateYear: "1300",
			DateAberWithDate: "Thu 01 Ord 1300",
			DateDoy: "1300.031",
			DateWoy: "1300W05-6",
			DateWithSlash: "1300/02/01",
			DateWithOutSlash: "13000201"
		},
		stime: -1536809144000,
		gdate: [1921, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 3, 21] },
		gtime: -1536809144000
	},
	{
		sdate: [1300, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 2],
			DateTime: "1300-02-02 00:00:00",
			DateAber: "02 Ord 1300",
			DateMonth: "Ord",
			DateYearMonth: "1300-Ord",
			DateYear: "1300",
			DateAberWithDate: "Fri 02 Ord 1300",
			DateDoy: "1300.032",
			DateWoy: "1300W05-7",
			DateWithSlash: "1300/02/02",
			DateWithOutSlash: "13000202"
		},
		stime: -1536722744000,
		gdate: [1921, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 3, 22] },
		gtime: -1536722744000
	},
	{
		sdate: [1300, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 15],
			DateTime: "1300-02-15 00:00:00",
			DateAber: "15 Ord 1300",
			DateMonth: "Ord",
			DateYearMonth: "1300-Ord",
			DateYear: "1300",
			DateAberWithDate: "Thu 15 Ord 1300",
			DateDoy: "1300.045",
			DateWoy: "1300W07-6",
			DateWithSlash: "1300/02/15",
			DateWithOutSlash: "13000215"
		},
		stime: -1535599544000,
		gdate: [1921, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 4, 5] },
		gtime: -1535599544000
	},
	{
		sdate: [1300, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 30],
			DateTime: "1300-02-30 00:00:00",
			DateAber: "30 Ord 1300",
			DateMonth: "Ord",
			DateYearMonth: "1300-Ord",
			DateYear: "1300",
			DateAberWithDate: "Fri 30 Ord 1300",
			DateDoy: "1300.060",
			DateWoy: "1300W09-7",
			DateWithSlash: "1300/02/30",
			DateWithOutSlash: "13000230"
		},
		stime: -1534303544000,
		gdate: [1921, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 4, 20] },
		gtime: -1534303544000
	},
	{
		sdate: [1300, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 31],
			DateTime: "1300-02-31 00:00:00",
			DateAber: "31 Ord 1300",
			DateMonth: "Ord",
			DateYearMonth: "1300-Ord",
			DateYear: "1300",
			DateAberWithDate: "Sat 31 Ord 1300",
			DateDoy: "1300.061",
			DateWoy: "1300W10-1",
			DateWithSlash: "1300/02/31",
			DateWithOutSlash: "13000231"
		},
		stime: -1534217144000,
		gdate: [1921, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 4, 21] },
		gtime: -1534217144000
	},
	{
		sdate: [1300, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 1],
			DateTime: "1300-03-01 00:00:00",
			DateAber: "01 Kho 1300",
			DateMonth: "Kho",
			DateYearMonth: "1300-Kho",
			DateYear: "1300",
			DateAberWithDate: "Sun 01 Kho 1300",
			DateDoy: "1300.062",
			DateWoy: "1300W10-2",
			DateWithSlash: "1300/03/01",
			DateWithOutSlash: "13000301"
		},
		stime: -1534130744000,
		gdate: [1921, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 4, 22] },
		gtime: -1534130744000
	},
	{
		sdate: [1300, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 2],
			DateTime: "1300-03-02 00:00:00",
			DateAber: "02 Kho 1300",
			DateMonth: "Kho",
			DateYearMonth: "1300-Kho",
			DateYear: "1300",
			DateAberWithDate: "Mon 02 Kho 1300",
			DateDoy: "1300.063",
			DateWoy: "1300W10-3",
			DateWithSlash: "1300/03/02",
			DateWithOutSlash: "13000302"
		},
		stime: -1534044344000,
		gdate: [1921, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 4, 23] },
		gtime: -1534044344000
	},
	{
		sdate: [1300, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 15],
			DateTime: "1300-03-15 00:00:00",
			DateAber: "15 Kho 1300",
			DateMonth: "Kho",
			DateYearMonth: "1300-Kho",
			DateYear: "1300",
			DateAberWithDate: "Sun 15 Kho 1300",
			DateDoy: "1300.076",
			DateWoy: "1300W12-2",
			DateWithSlash: "1300/03/15",
			DateWithOutSlash: "13000315"
		},
		stime: -1532921144000,
		gdate: [1921, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 5, 5] },
		gtime: -1532921144000
	},
	{
		sdate: [1300, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 30],
			DateTime: "1300-03-30 00:00:00",
			DateAber: "30 Kho 1300",
			DateMonth: "Kho",
			DateYearMonth: "1300-Kho",
			DateYear: "1300",
			DateAberWithDate: "Mon 30 Kho 1300",
			DateDoy: "1300.091",
			DateWoy: "1300W14-3",
			DateWithSlash: "1300/03/30",
			DateWithOutSlash: "13000330"
		},
		stime: -1531625144000,
		gdate: [1921, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 5, 20] },
		gtime: -1531625144000
	},
	{
		sdate: [1300, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 31],
			DateTime: "1300-03-31 00:00:00",
			DateAber: "31 Kho 1300",
			DateMonth: "Kho",
			DateYearMonth: "1300-Kho",
			DateYear: "1300",
			DateAberWithDate: "Tue 31 Kho 1300",
			DateDoy: "1300.092",
			DateWoy: "1300W14-4",
			DateWithSlash: "1300/03/31",
			DateWithOutSlash: "13000331"
		},
		stime: -1531538744000,
		gdate: [1921, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 5, 21] },
		gtime: -1531538744000
	},
	{
		sdate: [1300, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 1],
			DateTime: "1300-04-01 00:00:00",
			DateAber: "01 Tir 1300",
			DateMonth: "Tir",
			DateYearMonth: "1300-Tir",
			DateYear: "1300",
			DateAberWithDate: "Wed 01 Tir 1300",
			DateDoy: "1300.093",
			DateWoy: "1300W14-5",
			DateWithSlash: "1300/04/01",
			DateWithOutSlash: "13000401"
		},
		stime: -1531452344000,
		gdate: [1921, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 5, 22] },
		gtime: -1531452344000
	},
	{
		sdate: [1300, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 2],
			DateTime: "1300-04-02 00:00:00",
			DateAber: "02 Tir 1300",
			DateMonth: "Tir",
			DateYearMonth: "1300-Tir",
			DateYear: "1300",
			DateAberWithDate: "Thu 02 Tir 1300",
			DateDoy: "1300.094",
			DateWoy: "1300W14-6",
			DateWithSlash: "1300/04/02",
			DateWithOutSlash: "13000402"
		},
		stime: -1531365944000,
		gdate: [1921, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 5, 23] },
		gtime: -1531365944000
	},
	{
		sdate: [1300, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 15],
			DateTime: "1300-04-15 00:00:00",
			DateAber: "15 Tir 1300",
			DateMonth: "Tir",
			DateYearMonth: "1300-Tir",
			DateYear: "1300",
			DateAberWithDate: "Wed 15 Tir 1300",
			DateDoy: "1300.107",
			DateWoy: "1300W16-5",
			DateWithSlash: "1300/04/15",
			DateWithOutSlash: "13000415"
		},
		stime: -1530242744000,
		gdate: [1921, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 6, 6] },
		gtime: -1530242744000
	},
	{
		sdate: [1300, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 30],
			DateTime: "1300-04-30 00:00:00",
			DateAber: "30 Tir 1300",
			DateMonth: "Tir",
			DateYearMonth: "1300-Tir",
			DateYear: "1300",
			DateAberWithDate: "Thu 30 Tir 1300",
			DateDoy: "1300.122",
			DateWoy: "1300W18-6",
			DateWithSlash: "1300/04/30",
			DateWithOutSlash: "13000430"
		},
		stime: -1528946744000,
		gdate: [1921, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 6, 21] },
		gtime: -1528946744000
	},
	{
		sdate: [1300, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 31],
			DateTime: "1300-04-31 00:00:00",
			DateAber: "31 Tir 1300",
			DateMonth: "Tir",
			DateYearMonth: "1300-Tir",
			DateYear: "1300",
			DateAberWithDate: "Fri 31 Tir 1300",
			DateDoy: "1300.123",
			DateWoy: "1300W18-7",
			DateWithSlash: "1300/04/31",
			DateWithOutSlash: "13000431"
		},
		stime: -1528860344000,
		gdate: [1921, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 6, 22] },
		gtime: -1528860344000
	},
	{
		sdate: [1300, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 1],
			DateTime: "1300-05-01 00:00:00",
			DateAber: "01 Amo 1300",
			DateMonth: "Amo",
			DateYearMonth: "1300-Amo",
			DateYear: "1300",
			DateAberWithDate: "Sat 01 Amo 1300",
			DateDoy: "1300.124",
			DateWoy: "1300W19-1",
			DateWithSlash: "1300/05/01",
			DateWithOutSlash: "13000501"
		},
		stime: -1528773944000,
		gdate: [1921, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 6, 23] },
		gtime: -1528773944000
	},
	{
		sdate: [1300, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 2],
			DateTime: "1300-05-02 00:00:00",
			DateAber: "02 Amo 1300",
			DateMonth: "Amo",
			DateYearMonth: "1300-Amo",
			DateYear: "1300",
			DateAberWithDate: "Sun 02 Amo 1300",
			DateDoy: "1300.125",
			DateWoy: "1300W19-2",
			DateWithSlash: "1300/05/02",
			DateWithOutSlash: "13000502"
		},
		stime: -1528687544000,
		gdate: [1921, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 6, 24] },
		gtime: -1528687544000
	},
	{
		sdate: [1300, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 15],
			DateTime: "1300-05-15 00:00:00",
			DateAber: "15 Amo 1300",
			DateMonth: "Amo",
			DateYearMonth: "1300-Amo",
			DateYear: "1300",
			DateAberWithDate: "Sat 15 Amo 1300",
			DateDoy: "1300.138",
			DateWoy: "1300W21-1",
			DateWithSlash: "1300/05/15",
			DateWithOutSlash: "13000515"
		},
		stime: -1527564344000,
		gdate: [1921, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 7, 6] },
		gtime: -1527564344000
	},
	{
		sdate: [1300, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 30],
			DateTime: "1300-05-30 00:00:00",
			DateAber: "30 Amo 1300",
			DateMonth: "Amo",
			DateYearMonth: "1300-Amo",
			DateYear: "1300",
			DateAberWithDate: "Sun 30 Amo 1300",
			DateDoy: "1300.153",
			DateWoy: "1300W23-2",
			DateWithSlash: "1300/05/30",
			DateWithOutSlash: "13000530"
		},
		stime: -1526268344000,
		gdate: [1921, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 7, 21] },
		gtime: -1526268344000
	},
	{
		sdate: [1300, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 31],
			DateTime: "1300-05-31 00:00:00",
			DateAber: "31 Amo 1300",
			DateMonth: "Amo",
			DateYearMonth: "1300-Amo",
			DateYear: "1300",
			DateAberWithDate: "Mon 31 Amo 1300",
			DateDoy: "1300.154",
			DateWoy: "1300W23-3",
			DateWithSlash: "1300/05/31",
			DateWithOutSlash: "13000531"
		},
		stime: -1526181944000,
		gdate: [1921, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 7, 22] },
		gtime: -1526181944000
	},
	{
		sdate: [1300, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 1],
			DateTime: "1300-06-01 00:00:00",
			DateAber: "01 Sha 1300",
			DateMonth: "Sha",
			DateYearMonth: "1300-Sha",
			DateYear: "1300",
			DateAberWithDate: "Tue 01 Sha 1300",
			DateDoy: "1300.155",
			DateWoy: "1300W23-4",
			DateWithSlash: "1300/06/01",
			DateWithOutSlash: "13000601"
		},
		stime: -1526095544000,
		gdate: [1921, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 7, 23] },
		gtime: -1526095544000
	},
	{
		sdate: [1300, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 2],
			DateTime: "1300-06-02 00:00:00",
			DateAber: "02 Sha 1300",
			DateMonth: "Sha",
			DateYearMonth: "1300-Sha",
			DateYear: "1300",
			DateAberWithDate: "Wed 02 Sha 1300",
			DateDoy: "1300.156",
			DateWoy: "1300W23-5",
			DateWithSlash: "1300/06/02",
			DateWithOutSlash: "13000602"
		},
		stime: -1526009144000,
		gdate: [1921, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 7, 24] },
		gtime: -1526009144000
	},
	{
		sdate: [1300, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 15],
			DateTime: "1300-06-15 00:00:00",
			DateAber: "15 Sha 1300",
			DateMonth: "Sha",
			DateYearMonth: "1300-Sha",
			DateYear: "1300",
			DateAberWithDate: "Tue 15 Sha 1300",
			DateDoy: "1300.169",
			DateWoy: "1300W25-4",
			DateWithSlash: "1300/06/15",
			DateWithOutSlash: "13000615"
		},
		stime: -1524885944000,
		gdate: [1921, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 8, 6] },
		gtime: -1524885944000
	},
	{
		sdate: [1300, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 29],
			DateTime: "1300-06-29 00:00:00",
			DateAber: "29 Sha 1300",
			DateMonth: "Sha",
			DateYearMonth: "1300-Sha",
			DateYear: "1300",
			DateAberWithDate: "Tue 29 Sha 1300",
			DateDoy: "1300.183",
			DateWoy: "1300W27-4",
			DateWithSlash: "1300/06/29",
			DateWithOutSlash: "13000629"
		},
		stime: -1523676344000,
		gdate: [1921, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 8, 20] },
		gtime: -1523676344000
	},
	{
		sdate: [1300, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 30],
			DateTime: "1300-06-30 00:00:00",
			DateAber: "30 Sha 1300",
			DateMonth: "Sha",
			DateYearMonth: "1300-Sha",
			DateYear: "1300",
			DateAberWithDate: "Wed 30 Sha 1300",
			DateDoy: "1300.184",
			DateWoy: "1300W27-5",
			DateWithSlash: "1300/06/30",
			DateWithOutSlash: "13000630"
		},
		stime: -1523589944000,
		gdate: [1921, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 8, 21] },
		gtime: -1523589944000
	},
	{
		sdate: [1300, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 1],
			DateTime: "1300-07-01 00:00:00",
			DateAber: "01 Meh 1300",
			DateMonth: "Meh",
			DateYearMonth: "1300-Meh",
			DateYear: "1300",
			DateAberWithDate: "Fri 01 Meh 1300",
			DateDoy: "1300.186",
			DateWoy: "1300W27-7",
			DateWithSlash: "1300/07/01",
			DateWithOutSlash: "13000701"
		},
		stime: -1523417144000,
		gdate: [1921, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 8, 23] },
		gtime: -1523417144000
	},
	{
		sdate: [1300, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 2],
			DateTime: "1300-07-02 00:00:00",
			DateAber: "02 Meh 1300",
			DateMonth: "Meh",
			DateYearMonth: "1300-Meh",
			DateYear: "1300",
			DateAberWithDate: "Sat 02 Meh 1300",
			DateDoy: "1300.187",
			DateWoy: "1300W28-1",
			DateWithSlash: "1300/07/02",
			DateWithOutSlash: "13000702"
		},
		stime: -1523330744000,
		gdate: [1921, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 8, 24] },
		gtime: -1523330744000
	},
	{
		sdate: [1300, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 15],
			DateTime: "1300-07-15 00:00:00",
			DateAber: "15 Meh 1300",
			DateMonth: "Meh",
			DateYearMonth: "1300-Meh",
			DateYear: "1300",
			DateAberWithDate: "Fri 15 Meh 1300",
			DateDoy: "1300.200",
			DateWoy: "1300W29-7",
			DateWithSlash: "1300/07/15",
			DateWithOutSlash: "13000715"
		},
		stime: -1522207544000,
		gdate: [1921, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 9, 7] },
		gtime: -1522207544000
	},
	{
		sdate: [1300, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 29],
			DateTime: "1300-07-29 00:00:00",
			DateAber: "29 Meh 1300",
			DateMonth: "Meh",
			DateYearMonth: "1300-Meh",
			DateYear: "1300",
			DateAberWithDate: "Fri 29 Meh 1300",
			DateDoy: "1300.214",
			DateWoy: "1300W31-7",
			DateWithSlash: "1300/07/29",
			DateWithOutSlash: "13000729"
		},
		stime: -1520997944000,
		gdate: [1921, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 9, 21] },
		gtime: -1520997944000
	},
	{
		sdate: [1300, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 30],
			DateTime: "1300-07-30 00:00:00",
			DateAber: "30 Meh 1300",
			DateMonth: "Meh",
			DateYearMonth: "1300-Meh",
			DateYear: "1300",
			DateAberWithDate: "Sat 30 Meh 1300",
			DateDoy: "1300.215",
			DateWoy: "1300W32-1",
			DateWithSlash: "1300/07/30",
			DateWithOutSlash: "13000730"
		},
		stime: -1520911544000,
		gdate: [1921, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 9, 22] },
		gtime: -1520911544000
	},
	{
		sdate: [1300, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 1],
			DateTime: "1300-08-01 00:00:00",
			DateAber: "01 Aba 1300",
			DateMonth: "Aba",
			DateYearMonth: "1300-Aba",
			DateYear: "1300",
			DateAberWithDate: "Sun 01 Aba 1300",
			DateDoy: "1300.216",
			DateWoy: "1300W32-2",
			DateWithSlash: "1300/08/01",
			DateWithOutSlash: "13000801"
		},
		stime: -1520825144000,
		gdate: [1921, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 9, 23] },
		gtime: -1520825144000
	},
	{
		sdate: [1300, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 2],
			DateTime: "1300-08-02 00:00:00",
			DateAber: "02 Aba 1300",
			DateMonth: "Aba",
			DateYearMonth: "1300-Aba",
			DateYear: "1300",
			DateAberWithDate: "Mon 02 Aba 1300",
			DateDoy: "1300.217",
			DateWoy: "1300W32-3",
			DateWithSlash: "1300/08/02",
			DateWithOutSlash: "13000802"
		},
		stime: -1520738744000,
		gdate: [1921, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 9, 24] },
		gtime: -1520738744000
	},
	{
		sdate: [1300, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 15],
			DateTime: "1300-08-15 00:00:00",
			DateAber: "15 Aba 1300",
			DateMonth: "Aba",
			DateYearMonth: "1300-Aba",
			DateYear: "1300",
			DateAberWithDate: "Sun 15 Aba 1300",
			DateDoy: "1300.230",
			DateWoy: "1300W34-2",
			DateWithSlash: "1300/08/15",
			DateWithOutSlash: "13000815"
		},
		stime: -1519615544000,
		gdate: [1921, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 10, 6] },
		gtime: -1519615544000
	},
	{
		sdate: [1300, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 29],
			DateTime: "1300-08-29 00:00:00",
			DateAber: "29 Aba 1300",
			DateMonth: "Aba",
			DateYearMonth: "1300-Aba",
			DateYear: "1300",
			DateAberWithDate: "Sun 29 Aba 1300",
			DateDoy: "1300.244",
			DateWoy: "1300W36-2",
			DateWithSlash: "1300/08/29",
			DateWithOutSlash: "13000829"
		},
		stime: -1518405944000,
		gdate: [1921, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 10, 20] },
		gtime: -1518405944000
	},
	{
		sdate: [1300, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 30],
			DateTime: "1300-08-30 00:00:00",
			DateAber: "30 Aba 1300",
			DateMonth: "Aba",
			DateYearMonth: "1300-Aba",
			DateYear: "1300",
			DateAberWithDate: "Mon 30 Aba 1300",
			DateDoy: "1300.245",
			DateWoy: "1300W36-3",
			DateWithSlash: "1300/08/30",
			DateWithOutSlash: "13000830"
		},
		stime: -1518319544000,
		gdate: [1921, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 10, 21] },
		gtime: -1518319544000
	},
	{
		sdate: [1300, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 1],
			DateTime: "1300-09-01 00:00:00",
			DateAber: "01 Aza 1300",
			DateMonth: "Aza",
			DateYearMonth: "1300-Aza",
			DateYear: "1300",
			DateAberWithDate: "Tue 01 Aza 1300",
			DateDoy: "1300.246",
			DateWoy: "1300W36-4",
			DateWithSlash: "1300/09/01",
			DateWithOutSlash: "13000901"
		},
		stime: -1518233144000,
		gdate: [1921, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 10, 22] },
		gtime: -1518233144000
	},
	{
		sdate: [1300, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 2],
			DateTime: "1300-09-02 00:00:00",
			DateAber: "02 Aza 1300",
			DateMonth: "Aza",
			DateYearMonth: "1300-Aza",
			DateYear: "1300",
			DateAberWithDate: "Wed 02 Aza 1300",
			DateDoy: "1300.247",
			DateWoy: "1300W36-5",
			DateWithSlash: "1300/09/02",
			DateWithOutSlash: "13000902"
		},
		stime: -1518146744000,
		gdate: [1921, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 10, 23] },
		gtime: -1518146744000
	},
	{
		sdate: [1300, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 15],
			DateTime: "1300-09-15 00:00:00",
			DateAber: "15 Aza 1300",
			DateMonth: "Aza",
			DateYearMonth: "1300-Aza",
			DateYear: "1300",
			DateAberWithDate: "Tue 15 Aza 1300",
			DateDoy: "1300.260",
			DateWoy: "1300W38-4",
			DateWithSlash: "1300/09/15",
			DateWithOutSlash: "13000915"
		},
		stime: -1517023544000,
		gdate: [1921, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 11, 6] },
		gtime: -1517023544000
	},
	{
		sdate: [1300, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 29],
			DateTime: "1300-09-29 00:00:00",
			DateAber: "29 Aza 1300",
			DateMonth: "Aza",
			DateYearMonth: "1300-Aza",
			DateYear: "1300",
			DateAberWithDate: "Tue 29 Aza 1300",
			DateDoy: "1300.274",
			DateWoy: "1300W40-4",
			DateWithSlash: "1300/09/29",
			DateWithOutSlash: "13000929"
		},
		stime: -1515813944000,
		gdate: [1921, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 11, 20] },
		gtime: -1515813944000
	},
	{
		sdate: [1300, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 30],
			DateTime: "1300-09-30 00:00:00",
			DateAber: "30 Aza 1300",
			DateMonth: "Aza",
			DateYearMonth: "1300-Aza",
			DateYear: "1300",
			DateAberWithDate: "Wed 30 Aza 1300",
			DateDoy: "1300.275",
			DateWoy: "1300W40-5",
			DateWithSlash: "1300/09/30",
			DateWithOutSlash: "13000930"
		},
		stime: -1515727544000,
		gdate: [1921, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 11, 21] },
		gtime: -1515727544000
	},
	{
		sdate: [1300, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 1],
			DateTime: "1300-10-01 00:00:00",
			DateAber: "01 Dey 1300",
			DateMonth: "Dey",
			DateYearMonth: "1300-Dey",
			DateYear: "1300",
			DateAberWithDate: "Thu 01 Dey 1300",
			DateDoy: "1300.276",
			DateWoy: "1300W40-6",
			DateWithSlash: "1300/10/01",
			DateWithOutSlash: "13001001"
		},
		stime: -1515641144000,
		gdate: [1921, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 11, 22] },
		gtime: -1515641144000
	},
	{
		sdate: [1300, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 2],
			DateTime: "1300-10-02 00:00:00",
			DateAber: "02 Dey 1300",
			DateMonth: "Dey",
			DateYearMonth: "1300-Dey",
			DateYear: "1300",
			DateAberWithDate: "Fri 02 Dey 1300",
			DateDoy: "1300.277",
			DateWoy: "1300W40-7",
			DateWithSlash: "1300/10/02",
			DateWithOutSlash: "13001002"
		},
		stime: -1515554744000,
		gdate: [1921, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1921, 11, 23] },
		gtime: -1515554744000
	},
	{
		sdate: [1300, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 15],
			DateTime: "1300-10-15 00:00:00",
			DateAber: "15 Dey 1300",
			DateMonth: "Dey",
			DateYearMonth: "1300-Dey",
			DateYear: "1300",
			DateAberWithDate: "Thu 15 Dey 1300",
			DateDoy: "1300.290",
			DateWoy: "1300W42-6",
			DateWithSlash: "1300/10/15",
			DateWithOutSlash: "13001015"
		},
		stime: -1514431544000,
		gdate: [1922, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 0, 5] },
		gtime: -1514431544000
	},
	{
		sdate: [1300, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 29],
			DateTime: "1300-10-29 00:00:00",
			DateAber: "29 Dey 1300",
			DateMonth: "Dey",
			DateYearMonth: "1300-Dey",
			DateYear: "1300",
			DateAberWithDate: "Thu 29 Dey 1300",
			DateDoy: "1300.304",
			DateWoy: "1300W44-6",
			DateWithSlash: "1300/10/29",
			DateWithOutSlash: "13001029"
		},
		stime: -1513221944000,
		gdate: [1922, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 0, 19] },
		gtime: -1513221944000
	},
	{
		sdate: [1300, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 30],
			DateTime: "1300-10-30 00:00:00",
			DateAber: "30 Dey 1300",
			DateMonth: "Dey",
			DateYearMonth: "1300-Dey",
			DateYear: "1300",
			DateAberWithDate: "Fri 30 Dey 1300",
			DateDoy: "1300.305",
			DateWoy: "1300W44-7",
			DateWithSlash: "1300/10/30",
			DateWithOutSlash: "13001030"
		},
		stime: -1513135544000,
		gdate: [1922, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 0, 20] },
		gtime: -1513135544000
	},
	{
		sdate: [1300, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 1],
			DateTime: "1300-11-01 00:00:00",
			DateAber: "01 Bah 1300",
			DateMonth: "Bah",
			DateYearMonth: "1300-Bah",
			DateYear: "1300",
			DateAberWithDate: "Sat 01 Bah 1300",
			DateDoy: "1300.306",
			DateWoy: "1300W45-1",
			DateWithSlash: "1300/11/01",
			DateWithOutSlash: "13001101"
		},
		stime: -1513049144000,
		gdate: [1922, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 0, 21] },
		gtime: -1513049144000
	},
	{
		sdate: [1300, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 2],
			DateTime: "1300-11-02 00:00:00",
			DateAber: "02 Bah 1300",
			DateMonth: "Bah",
			DateYearMonth: "1300-Bah",
			DateYear: "1300",
			DateAberWithDate: "Sun 02 Bah 1300",
			DateDoy: "1300.307",
			DateWoy: "1300W45-2",
			DateWithSlash: "1300/11/02",
			DateWithOutSlash: "13001102"
		},
		stime: -1512962744000,
		gdate: [1922, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 0, 22] },
		gtime: -1512962744000
	},
	{
		sdate: [1300, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 15],
			DateTime: "1300-11-15 00:00:00",
			DateAber: "15 Bah 1300",
			DateMonth: "Bah",
			DateYearMonth: "1300-Bah",
			DateYear: "1300",
			DateAberWithDate: "Sat 15 Bah 1300",
			DateDoy: "1300.320",
			DateWoy: "1300W47-1",
			DateWithSlash: "1300/11/15",
			DateWithOutSlash: "13001115"
		},
		stime: -1511839544000,
		gdate: [1922, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 1, 4] },
		gtime: -1511839544000
	},
	{
		sdate: [1300, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 29],
			DateTime: "1300-11-29 00:00:00",
			DateAber: "29 Bah 1300",
			DateMonth: "Bah",
			DateYearMonth: "1300-Bah",
			DateYear: "1300",
			DateAberWithDate: "Sat 29 Bah 1300",
			DateDoy: "1300.334",
			DateWoy: "1300W49-1",
			DateWithSlash: "1300/11/29",
			DateWithOutSlash: "13001129"
		},
		stime: -1510629944000,
		gdate: [1922, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 1, 18] },
		gtime: -1510629944000
	},
	{
		sdate: [1300, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 30],
			DateTime: "1300-11-30 00:00:00",
			DateAber: "30 Bah 1300",
			DateMonth: "Bah",
			DateYearMonth: "1300-Bah",
			DateYear: "1300",
			DateAberWithDate: "Sun 30 Bah 1300",
			DateDoy: "1300.335",
			DateWoy: "1300W49-2",
			DateWithSlash: "1300/11/30",
			DateWithOutSlash: "13001130"
		},
		stime: -1510543544000,
		gdate: [1922, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 1, 19] },
		gtime: -1510543544000
	},
	{
		sdate: [1300, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 1],
			DateTime: "1300-12-01 00:00:00",
			DateAber: "01 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Mon 01 Esf 1300",
			DateDoy: "1300.336",
			DateWoy: "1300W49-3",
			DateWithSlash: "1300/12/01",
			DateWithOutSlash: "13001201"
		},
		stime: -1510457144000,
		gdate: [1922, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 1, 20] },
		gtime: -1510457144000
	},
	{
		sdate: [1300, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 2],
			DateTime: "1300-12-02 00:00:00",
			DateAber: "02 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Tue 02 Esf 1300",
			DateDoy: "1300.337",
			DateWoy: "1300W49-4",
			DateWithSlash: "1300/12/02",
			DateWithOutSlash: "13001202"
		},
		stime: -1510370744000,
		gdate: [1922, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 1, 21] },
		gtime: -1510370744000
	},
	{
		sdate: [1300, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 3],
			DateTime: "1300-12-03 00:00:00",
			DateAber: "03 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Wed 03 Esf 1300",
			DateDoy: "1300.338",
			DateWoy: "1300W49-5",
			DateWithSlash: "1300/12/03",
			DateWithOutSlash: "13001203"
		},
		stime: -1510284344000,
		gdate: [1922, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 1, 22] },
		gtime: -1510284344000
	},
	{
		sdate: [1300, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 4],
			DateTime: "1300-12-04 00:00:00",
			DateAber: "04 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Thu 04 Esf 1300",
			DateDoy: "1300.339",
			DateWoy: "1300W49-6",
			DateWithSlash: "1300/12/04",
			DateWithOutSlash: "13001204"
		},
		stime: -1510197944000,
		gdate: [1922, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 1, 23] },
		gtime: -1510197944000
	},
	{
		sdate: [1300, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 15],
			DateTime: "1300-12-15 00:00:00",
			DateAber: "15 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Mon 15 Esf 1300",
			DateDoy: "1300.350",
			DateWoy: "1300W51-3",
			DateWithSlash: "1300/12/15",
			DateWithOutSlash: "13001215"
		},
		stime: -1509247544000,
		gdate: [1922, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 6] },
		gtime: -1509247544000
	},
	{
		sdate: [1300, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 25],
			DateTime: "1300-12-25 00:00:00",
			DateAber: "25 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Thu 25 Esf 1300",
			DateDoy: "1300.360",
			DateWoy: "1300W52-6",
			DateWithSlash: "1300/12/25",
			DateWithOutSlash: "13001225"
		},
		stime: -1508383544000,
		gdate: [1922, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 16] },
		gtime: -1508383544000
	},
	{
		sdate: [1300, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 26],
			DateTime: "1300-12-26 00:00:00",
			DateAber: "26 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Fri 26 Esf 1300",
			DateDoy: "1300.361",
			DateWoy: "1300W52-7",
			DateWithSlash: "1300/12/26",
			DateWithOutSlash: "13001226"
		},
		stime: -1508297144000,
		gdate: [1922, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 17] },
		gtime: -1508297144000
	},
	{
		sdate: [1300, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 27],
			DateTime: "1300-12-27 00:00:00",
			DateAber: "27 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Sat 27 Esf 1300",
			DateDoy: "1300.362",
			DateWoy: "1300W53-1",
			DateWithSlash: "1300/12/27",
			DateWithOutSlash: "13001227"
		},
		stime: -1508210744000,
		gdate: [1922, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 18] },
		gtime: -1508210744000
	},
	{
		sdate: [1300, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 28],
			DateTime: "1300-12-28 00:00:00",
			DateAber: "28 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Sun 28 Esf 1300",
			DateDoy: "1300.363",
			DateWoy: "1300W53-2",
			DateWithSlash: "1300/12/28",
			DateWithOutSlash: "13001228"
		},
		stime: -1508124344000,
		gdate: [1922, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 19] },
		gtime: -1508124344000
	},
	{
		sdate: [1300, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 29],
			DateTime: "1300-12-29 00:00:00",
			DateAber: "29 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Mon 29 Esf 1300",
			DateDoy: "1300.364",
			DateWoy: "1300W53-3",
			DateWithSlash: "1300/12/29",
			DateWithOutSlash: "13001229"
		},
		stime: -1508037944000,
		gdate: [1922, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 20] },
		gtime: -1508037944000
	},
	{
		sdate: [1300, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 30],
			DateTime: "1300-12-30 00:00:00",
			DateAber: "30 Esf 1300",
			DateMonth: "Esf",
			DateYearMonth: "1300-Esf",
			DateYear: "1300",
			DateAberWithDate: "Tue 30 Esf 1300",
			DateDoy: "1300.365",
			DateWoy: "1300W53-4",
			DateWithSlash: "1300/12/30",
			DateWithOutSlash: "13001230"
		},
		stime: -1507951544000,
		gdate: [1922, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 21] },
		gtime: -1507951544000
	},
	{
		sdate: [1320, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 1],
			DateTime: "1320-01-01 00:00:00",
			DateAber: "01 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Fri 01 Far 1320",
			DateDoy: "1320.000",
			DateWoy: "1319W52-7",
			DateWithSlash: "1320/01/01",
			DateWithOutSlash: "13200101"
		},
		stime: -908335544000,
		gdate: [1941, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 21] },
		gtime: -908335544000
	},
	{
		sdate: [1320, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 2],
			DateTime: "1320-01-02 00:00:00",
			DateAber: "02 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Sat 02 Far 1320",
			DateDoy: "1320.001",
			DateWoy: "1320W01-1",
			DateWithSlash: "1320/01/02",
			DateWithOutSlash: "13200102"
		},
		stime: -908249144000,
		gdate: [1941, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 22] },
		gtime: -908249144000
	},
	{
		sdate: [1320, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 3],
			DateTime: "1320-01-03 00:00:00",
			DateAber: "03 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Sun 03 Far 1320",
			DateDoy: "1320.002",
			DateWoy: "1320W01-2",
			DateWithSlash: "1320/01/03",
			DateWithOutSlash: "13200103"
		},
		stime: -908162744000,
		gdate: [1941, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 23] },
		gtime: -908162744000
	},
	{
		sdate: [1320, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 4],
			DateTime: "1320-01-04 00:00:00",
			DateAber: "04 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Mon 04 Far 1320",
			DateDoy: "1320.003",
			DateWoy: "1320W01-3",
			DateWithSlash: "1320/01/04",
			DateWithOutSlash: "13200104"
		},
		stime: -908076344000,
		gdate: [1941, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 24] },
		gtime: -908076344000
	},
	{
		sdate: [1320, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 5],
			DateTime: "1320-01-05 00:00:00",
			DateAber: "05 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Tue 05 Far 1320",
			DateDoy: "1320.004",
			DateWoy: "1320W01-4",
			DateWithSlash: "1320/01/05",
			DateWithOutSlash: "13200105"
		},
		stime: -907989944000,
		gdate: [1941, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 25] },
		gtime: -907989944000
	},
	{
		sdate: [1320, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 6],
			DateTime: "1320-01-06 00:00:00",
			DateAber: "06 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Wed 06 Far 1320",
			DateDoy: "1320.005",
			DateWoy: "1320W01-5",
			DateWithSlash: "1320/01/06",
			DateWithOutSlash: "13200106"
		},
		stime: -907903544000,
		gdate: [1941, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 26] },
		gtime: -907903544000
	},
	{
		sdate: [1320, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 7],
			DateTime: "1320-01-07 00:00:00",
			DateAber: "07 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Thu 07 Far 1320",
			DateDoy: "1320.006",
			DateWoy: "1320W01-6",
			DateWithSlash: "1320/01/07",
			DateWithOutSlash: "13200107"
		},
		stime: -907817144000,
		gdate: [1941, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 27] },
		gtime: -907817144000
	},
	{
		sdate: [1320, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 15],
			DateTime: "1320-01-15 00:00:00",
			DateAber: "15 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Fri 15 Far 1320",
			DateDoy: "1320.014",
			DateWoy: "1320W02-7",
			DateWithSlash: "1320/01/15",
			DateWithOutSlash: "13200115"
		},
		stime: -907125944000,
		gdate: [1941, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 4] },
		gtime: -907125944000
	},
	{
		sdate: [1320, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 29],
			DateTime: "1320-01-29 00:00:00",
			DateAber: "29 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Fri 29 Far 1320",
			DateDoy: "1320.028",
			DateWoy: "1320W04-7",
			DateWithSlash: "1320/01/29",
			DateWithOutSlash: "13200129"
		},
		stime: -905916344000,
		gdate: [1941, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 18] },
		gtime: -905916344000
	},
	{
		sdate: [1320, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 30],
			DateTime: "1320-01-30 00:00:00",
			DateAber: "30 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Sat 30 Far 1320",
			DateDoy: "1320.029",
			DateWoy: "1320W05-1",
			DateWithSlash: "1320/01/30",
			DateWithOutSlash: "13200130"
		},
		stime: -905829944000,
		gdate: [1941, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 19] },
		gtime: -905829944000
	},
	{
		sdate: [1320, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 31],
			DateTime: "1320-01-31 00:00:00",
			DateAber: "31 Far 1320",
			DateMonth: "Far",
			DateYearMonth: "1320-Far",
			DateYear: "1320",
			DateAberWithDate: "Sun 31 Far 1320",
			DateDoy: "1320.030",
			DateWoy: "1320W05-2",
			DateWithSlash: "1320/01/31",
			DateWithOutSlash: "13200131"
		},
		stime: -905743544000,
		gdate: [1941, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 20] },
		gtime: -905743544000
	},
	{
		sdate: [1320, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 1],
			DateTime: "1320-02-01 00:00:00",
			DateAber: "01 Ord 1320",
			DateMonth: "Ord",
			DateYearMonth: "1320-Ord",
			DateYear: "1320",
			DateAberWithDate: "Mon 01 Ord 1320",
			DateDoy: "1320.031",
			DateWoy: "1320W05-3",
			DateWithSlash: "1320/02/01",
			DateWithOutSlash: "13200201"
		},
		stime: -905657144000,
		gdate: [1941, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 21] },
		gtime: -905657144000
	},
	{
		sdate: [1320, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 2],
			DateTime: "1320-02-02 00:00:00",
			DateAber: "02 Ord 1320",
			DateMonth: "Ord",
			DateYearMonth: "1320-Ord",
			DateYear: "1320",
			DateAberWithDate: "Tue 02 Ord 1320",
			DateDoy: "1320.032",
			DateWoy: "1320W05-4",
			DateWithSlash: "1320/02/02",
			DateWithOutSlash: "13200202"
		},
		stime: -905570744000,
		gdate: [1941, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 22] },
		gtime: -905570744000
	},
	{
		sdate: [1320, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 15],
			DateTime: "1320-02-15 00:00:00",
			DateAber: "15 Ord 1320",
			DateMonth: "Ord",
			DateYearMonth: "1320-Ord",
			DateYear: "1320",
			DateAberWithDate: "Mon 15 Ord 1320",
			DateDoy: "1320.045",
			DateWoy: "1320W07-3",
			DateWithSlash: "1320/02/15",
			DateWithOutSlash: "13200215"
		},
		stime: -904447544000,
		gdate: [1941, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 5] },
		gtime: -904447544000
	},
	{
		sdate: [1320, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 30],
			DateTime: "1320-02-30 00:00:00",
			DateAber: "30 Ord 1320",
			DateMonth: "Ord",
			DateYearMonth: "1320-Ord",
			DateYear: "1320",
			DateAberWithDate: "Tue 30 Ord 1320",
			DateDoy: "1320.060",
			DateWoy: "1320W09-4",
			DateWithSlash: "1320/02/30",
			DateWithOutSlash: "13200230"
		},
		stime: -903151544000,
		gdate: [1941, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 20] },
		gtime: -903151544000
	},
	{
		sdate: [1320, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 31],
			DateTime: "1320-02-31 00:00:00",
			DateAber: "31 Ord 1320",
			DateMonth: "Ord",
			DateYearMonth: "1320-Ord",
			DateYear: "1320",
			DateAberWithDate: "Wed 31 Ord 1320",
			DateDoy: "1320.061",
			DateWoy: "1320W09-5",
			DateWithSlash: "1320/02/31",
			DateWithOutSlash: "13200231"
		},
		stime: -903065144000,
		gdate: [1941, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 21] },
		gtime: -903065144000
	},
	{
		sdate: [1320, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 1],
			DateTime: "1320-03-01 00:00:00",
			DateAber: "01 Kho 1320",
			DateMonth: "Kho",
			DateYearMonth: "1320-Kho",
			DateYear: "1320",
			DateAberWithDate: "Thu 01 Kho 1320",
			DateDoy: "1320.062",
			DateWoy: "1320W09-6",
			DateWithSlash: "1320/03/01",
			DateWithOutSlash: "13200301"
		},
		stime: -902978744000,
		gdate: [1941, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 22] },
		gtime: -902978744000
	},
	{
		sdate: [1320, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 2],
			DateTime: "1320-03-02 00:00:00",
			DateAber: "02 Kho 1320",
			DateMonth: "Kho",
			DateYearMonth: "1320-Kho",
			DateYear: "1320",
			DateAberWithDate: "Fri 02 Kho 1320",
			DateDoy: "1320.063",
			DateWoy: "1320W09-7",
			DateWithSlash: "1320/03/02",
			DateWithOutSlash: "13200302"
		},
		stime: -902892344000,
		gdate: [1941, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 23] },
		gtime: -902892344000
	},
	{
		sdate: [1320, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 15],
			DateTime: "1320-03-15 00:00:00",
			DateAber: "15 Kho 1320",
			DateMonth: "Kho",
			DateYearMonth: "1320-Kho",
			DateYear: "1320",
			DateAberWithDate: "Thu 15 Kho 1320",
			DateDoy: "1320.076",
			DateWoy: "1320W11-6",
			DateWithSlash: "1320/03/15",
			DateWithOutSlash: "13200315"
		},
		stime: -901769144000,
		gdate: [1941, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 5] },
		gtime: -901769144000
	},
	{
		sdate: [1320, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 30],
			DateTime: "1320-03-30 00:00:00",
			DateAber: "30 Kho 1320",
			DateMonth: "Kho",
			DateYearMonth: "1320-Kho",
			DateYear: "1320",
			DateAberWithDate: "Fri 30 Kho 1320",
			DateDoy: "1320.091",
			DateWoy: "1320W13-7",
			DateWithSlash: "1320/03/30",
			DateWithOutSlash: "13200330"
		},
		stime: -900473144000,
		gdate: [1941, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 20] },
		gtime: -900473144000
	},
	{
		sdate: [1320, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 31],
			DateTime: "1320-03-31 00:00:00",
			DateAber: "31 Kho 1320",
			DateMonth: "Kho",
			DateYearMonth: "1320-Kho",
			DateYear: "1320",
			DateAberWithDate: "Sat 31 Kho 1320",
			DateDoy: "1320.092",
			DateWoy: "1320W14-1",
			DateWithSlash: "1320/03/31",
			DateWithOutSlash: "13200331"
		},
		stime: -900386744000,
		gdate: [1941, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 21] },
		gtime: -900386744000
	},
	{
		sdate: [1320, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 1],
			DateTime: "1320-04-01 00:00:00",
			DateAber: "01 Tir 1320",
			DateMonth: "Tir",
			DateYearMonth: "1320-Tir",
			DateYear: "1320",
			DateAberWithDate: "Sun 01 Tir 1320",
			DateDoy: "1320.093",
			DateWoy: "1320W14-2",
			DateWithSlash: "1320/04/01",
			DateWithOutSlash: "13200401"
		},
		stime: -900300344000,
		gdate: [1941, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 22] },
		gtime: -900300344000
	},
	{
		sdate: [1320, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 2],
			DateTime: "1320-04-02 00:00:00",
			DateAber: "02 Tir 1320",
			DateMonth: "Tir",
			DateYearMonth: "1320-Tir",
			DateYear: "1320",
			DateAberWithDate: "Mon 02 Tir 1320",
			DateDoy: "1320.094",
			DateWoy: "1320W14-3",
			DateWithSlash: "1320/04/02",
			DateWithOutSlash: "13200402"
		},
		stime: -900213944000,
		gdate: [1941, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 23] },
		gtime: -900213944000
	},
	{
		sdate: [1320, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 15],
			DateTime: "1320-04-15 00:00:00",
			DateAber: "15 Tir 1320",
			DateMonth: "Tir",
			DateYearMonth: "1320-Tir",
			DateYear: "1320",
			DateAberWithDate: "Sun 15 Tir 1320",
			DateDoy: "1320.107",
			DateWoy: "1320W16-2",
			DateWithSlash: "1320/04/15",
			DateWithOutSlash: "13200415"
		},
		stime: -899090744000,
		gdate: [1941, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 6] },
		gtime: -899090744000
	},
	{
		sdate: [1320, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 30],
			DateTime: "1320-04-30 00:00:00",
			DateAber: "30 Tir 1320",
			DateMonth: "Tir",
			DateYearMonth: "1320-Tir",
			DateYear: "1320",
			DateAberWithDate: "Mon 30 Tir 1320",
			DateDoy: "1320.122",
			DateWoy: "1320W18-3",
			DateWithSlash: "1320/04/30",
			DateWithOutSlash: "13200430"
		},
		stime: -897794744000,
		gdate: [1941, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 21] },
		gtime: -897794744000
	},
	{
		sdate: [1320, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 31],
			DateTime: "1320-04-31 00:00:00",
			DateAber: "31 Tir 1320",
			DateMonth: "Tir",
			DateYearMonth: "1320-Tir",
			DateYear: "1320",
			DateAberWithDate: "Tue 31 Tir 1320",
			DateDoy: "1320.123",
			DateWoy: "1320W18-4",
			DateWithSlash: "1320/04/31",
			DateWithOutSlash: "13200431"
		},
		stime: -897708344000,
		gdate: [1941, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 22] },
		gtime: -897708344000
	},
	{
		sdate: [1320, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 1],
			DateTime: "1320-05-01 00:00:00",
			DateAber: "01 Amo 1320",
			DateMonth: "Amo",
			DateYearMonth: "1320-Amo",
			DateYear: "1320",
			DateAberWithDate: "Wed 01 Amo 1320",
			DateDoy: "1320.124",
			DateWoy: "1320W18-5",
			DateWithSlash: "1320/05/01",
			DateWithOutSlash: "13200501"
		},
		stime: -897621944000,
		gdate: [1941, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 23] },
		gtime: -897621944000
	},
	{
		sdate: [1320, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 2],
			DateTime: "1320-05-02 00:00:00",
			DateAber: "02 Amo 1320",
			DateMonth: "Amo",
			DateYearMonth: "1320-Amo",
			DateYear: "1320",
			DateAberWithDate: "Thu 02 Amo 1320",
			DateDoy: "1320.125",
			DateWoy: "1320W18-6",
			DateWithSlash: "1320/05/02",
			DateWithOutSlash: "13200502"
		},
		stime: -897535544000,
		gdate: [1941, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 24] },
		gtime: -897535544000
	},
	{
		sdate: [1320, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 15],
			DateTime: "1320-05-15 00:00:00",
			DateAber: "15 Amo 1320",
			DateMonth: "Amo",
			DateYearMonth: "1320-Amo",
			DateYear: "1320",
			DateAberWithDate: "Wed 15 Amo 1320",
			DateDoy: "1320.138",
			DateWoy: "1320W20-5",
			DateWithSlash: "1320/05/15",
			DateWithOutSlash: "13200515"
		},
		stime: -896412344000,
		gdate: [1941, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 6] },
		gtime: -896412344000
	},
	{
		sdate: [1320, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 30],
			DateTime: "1320-05-30 00:00:00",
			DateAber: "30 Amo 1320",
			DateMonth: "Amo",
			DateYearMonth: "1320-Amo",
			DateYear: "1320",
			DateAberWithDate: "Thu 30 Amo 1320",
			DateDoy: "1320.153",
			DateWoy: "1320W22-6",
			DateWithSlash: "1320/05/30",
			DateWithOutSlash: "13200530"
		},
		stime: -895116344000,
		gdate: [1941, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 21] },
		gtime: -895116344000
	},
	{
		sdate: [1320, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 31],
			DateTime: "1320-05-31 00:00:00",
			DateAber: "31 Amo 1320",
			DateMonth: "Amo",
			DateYearMonth: "1320-Amo",
			DateYear: "1320",
			DateAberWithDate: "Fri 31 Amo 1320",
			DateDoy: "1320.154",
			DateWoy: "1320W22-7",
			DateWithSlash: "1320/05/31",
			DateWithOutSlash: "13200531"
		},
		stime: -895029944000,
		gdate: [1941, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 22] },
		gtime: -895029944000
	},
	{
		sdate: [1320, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 1],
			DateTime: "1320-06-01 00:00:00",
			DateAber: "01 Sha 1320",
			DateMonth: "Sha",
			DateYearMonth: "1320-Sha",
			DateYear: "1320",
			DateAberWithDate: "Sat 01 Sha 1320",
			DateDoy: "1320.155",
			DateWoy: "1320W23-1",
			DateWithSlash: "1320/06/01",
			DateWithOutSlash: "13200601"
		},
		stime: -894943544000,
		gdate: [1941, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 23] },
		gtime: -894943544000
	},
	{
		sdate: [1320, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 2],
			DateTime: "1320-06-02 00:00:00",
			DateAber: "02 Sha 1320",
			DateMonth: "Sha",
			DateYearMonth: "1320-Sha",
			DateYear: "1320",
			DateAberWithDate: "Sun 02 Sha 1320",
			DateDoy: "1320.156",
			DateWoy: "1320W23-2",
			DateWithSlash: "1320/06/02",
			DateWithOutSlash: "13200602"
		},
		stime: -894857144000,
		gdate: [1941, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 24] },
		gtime: -894857144000
	},
	{
		sdate: [1320, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 15],
			DateTime: "1320-06-15 00:00:00",
			DateAber: "15 Sha 1320",
			DateMonth: "Sha",
			DateYearMonth: "1320-Sha",
			DateYear: "1320",
			DateAberWithDate: "Sat 15 Sha 1320",
			DateDoy: "1320.169",
			DateWoy: "1320W25-1",
			DateWithSlash: "1320/06/15",
			DateWithOutSlash: "13200615"
		},
		stime: -893733944000,
		gdate: [1941, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 6] },
		gtime: -893733944000
	},
	{
		sdate: [1320, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 29],
			DateTime: "1320-06-29 00:00:00",
			DateAber: "29 Sha 1320",
			DateMonth: "Sha",
			DateYearMonth: "1320-Sha",
			DateYear: "1320",
			DateAberWithDate: "Sat 29 Sha 1320",
			DateDoy: "1320.183",
			DateWoy: "1320W27-1",
			DateWithSlash: "1320/06/29",
			DateWithOutSlash: "13200629"
		},
		stime: -892524344000,
		gdate: [1941, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 20] },
		gtime: -892524344000
	},
	{
		sdate: [1320, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 30],
			DateTime: "1320-06-30 00:00:00",
			DateAber: "30 Sha 1320",
			DateMonth: "Sha",
			DateYearMonth: "1320-Sha",
			DateYear: "1320",
			DateAberWithDate: "Sun 30 Sha 1320",
			DateDoy: "1320.184",
			DateWoy: "1320W27-2",
			DateWithSlash: "1320/06/30",
			DateWithOutSlash: "13200630"
		},
		stime: -892437944000,
		gdate: [1941, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 21] },
		gtime: -892437944000
	},
	{
		sdate: [1320, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 1],
			DateTime: "1320-07-01 00:00:00",
			DateAber: "01 Meh 1320",
			DateMonth: "Meh",
			DateYearMonth: "1320-Meh",
			DateYear: "1320",
			DateAberWithDate: "Tue 01 Meh 1320",
			DateDoy: "1320.186",
			DateWoy: "1320W27-4",
			DateWithSlash: "1320/07/01",
			DateWithOutSlash: "13200701"
		},
		stime: -892265144000,
		gdate: [1941, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 23] },
		gtime: -892265144000
	},
	{
		sdate: [1320, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 2],
			DateTime: "1320-07-02 00:00:00",
			DateAber: "02 Meh 1320",
			DateMonth: "Meh",
			DateYearMonth: "1320-Meh",
			DateYear: "1320",
			DateAberWithDate: "Wed 02 Meh 1320",
			DateDoy: "1320.187",
			DateWoy: "1320W27-5",
			DateWithSlash: "1320/07/02",
			DateWithOutSlash: "13200702"
		},
		stime: -892178744000,
		gdate: [1941, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 24] },
		gtime: -892178744000
	},
	{
		sdate: [1320, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 15],
			DateTime: "1320-07-15 00:00:00",
			DateAber: "15 Meh 1320",
			DateMonth: "Meh",
			DateYearMonth: "1320-Meh",
			DateYear: "1320",
			DateAberWithDate: "Tue 15 Meh 1320",
			DateDoy: "1320.200",
			DateWoy: "1320W29-4",
			DateWithSlash: "1320/07/15",
			DateWithOutSlash: "13200715"
		},
		stime: -891055544000,
		gdate: [1941, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 7] },
		gtime: -891055544000
	},
	{
		sdate: [1320, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 29],
			DateTime: "1320-07-29 00:00:00",
			DateAber: "29 Meh 1320",
			DateMonth: "Meh",
			DateYearMonth: "1320-Meh",
			DateYear: "1320",
			DateAberWithDate: "Tue 29 Meh 1320",
			DateDoy: "1320.214",
			DateWoy: "1320W31-4",
			DateWithSlash: "1320/07/29",
			DateWithOutSlash: "13200729"
		},
		stime: -889845944000,
		gdate: [1941, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 21] },
		gtime: -889845944000
	},
	{
		sdate: [1320, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 30],
			DateTime: "1320-07-30 00:00:00",
			DateAber: "30 Meh 1320",
			DateMonth: "Meh",
			DateYearMonth: "1320-Meh",
			DateYear: "1320",
			DateAberWithDate: "Wed 30 Meh 1320",
			DateDoy: "1320.215",
			DateWoy: "1320W31-5",
			DateWithSlash: "1320/07/30",
			DateWithOutSlash: "13200730"
		},
		stime: -889759544000,
		gdate: [1941, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 22] },
		gtime: -889759544000
	},
	{
		sdate: [1320, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 1],
			DateTime: "1320-08-01 00:00:00",
			DateAber: "01 Aba 1320",
			DateMonth: "Aba",
			DateYearMonth: "1320-Aba",
			DateYear: "1320",
			DateAberWithDate: "Thu 01 Aba 1320",
			DateDoy: "1320.216",
			DateWoy: "1320W31-6",
			DateWithSlash: "1320/08/01",
			DateWithOutSlash: "13200801"
		},
		stime: -889673144000,
		gdate: [1941, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 23] },
		gtime: -889673144000
	},
	{
		sdate: [1320, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 2],
			DateTime: "1320-08-02 00:00:00",
			DateAber: "02 Aba 1320",
			DateMonth: "Aba",
			DateYearMonth: "1320-Aba",
			DateYear: "1320",
			DateAberWithDate: "Fri 02 Aba 1320",
			DateDoy: "1320.217",
			DateWoy: "1320W31-7",
			DateWithSlash: "1320/08/02",
			DateWithOutSlash: "13200802"
		},
		stime: -889586744000,
		gdate: [1941, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 24] },
		gtime: -889586744000
	},
	{
		sdate: [1320, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 15],
			DateTime: "1320-08-15 00:00:00",
			DateAber: "15 Aba 1320",
			DateMonth: "Aba",
			DateYearMonth: "1320-Aba",
			DateYear: "1320",
			DateAberWithDate: "Thu 15 Aba 1320",
			DateDoy: "1320.230",
			DateWoy: "1320W33-6",
			DateWithSlash: "1320/08/15",
			DateWithOutSlash: "13200815"
		},
		stime: -888463544000,
		gdate: [1941, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 6] },
		gtime: -888463544000
	},
	{
		sdate: [1320, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 29],
			DateTime: "1320-08-29 00:00:00",
			DateAber: "29 Aba 1320",
			DateMonth: "Aba",
			DateYearMonth: "1320-Aba",
			DateYear: "1320",
			DateAberWithDate: "Thu 29 Aba 1320",
			DateDoy: "1320.244",
			DateWoy: "1320W35-6",
			DateWithSlash: "1320/08/29",
			DateWithOutSlash: "13200829"
		},
		stime: -887253944000,
		gdate: [1941, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 20] },
		gtime: -887253944000
	},
	{
		sdate: [1320, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 30],
			DateTime: "1320-08-30 00:00:00",
			DateAber: "30 Aba 1320",
			DateMonth: "Aba",
			DateYearMonth: "1320-Aba",
			DateYear: "1320",
			DateAberWithDate: "Fri 30 Aba 1320",
			DateDoy: "1320.245",
			DateWoy: "1320W35-7",
			DateWithSlash: "1320/08/30",
			DateWithOutSlash: "13200830"
		},
		stime: -887167544000,
		gdate: [1941, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 21] },
		gtime: -887167544000
	},
	{
		sdate: [1320, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 1],
			DateTime: "1320-09-01 00:00:00",
			DateAber: "01 Aza 1320",
			DateMonth: "Aza",
			DateYearMonth: "1320-Aza",
			DateYear: "1320",
			DateAberWithDate: "Sat 01 Aza 1320",
			DateDoy: "1320.246",
			DateWoy: "1320W36-1",
			DateWithSlash: "1320/09/01",
			DateWithOutSlash: "13200901"
		},
		stime: -887081144000,
		gdate: [1941, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 22] },
		gtime: -887081144000
	},
	{
		sdate: [1320, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 2],
			DateTime: "1320-09-02 00:00:00",
			DateAber: "02 Aza 1320",
			DateMonth: "Aza",
			DateYearMonth: "1320-Aza",
			DateYear: "1320",
			DateAberWithDate: "Sun 02 Aza 1320",
			DateDoy: "1320.247",
			DateWoy: "1320W36-2",
			DateWithSlash: "1320/09/02",
			DateWithOutSlash: "13200902"
		},
		stime: -886994744000,
		gdate: [1941, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 23] },
		gtime: -886994744000
	},
	{
		sdate: [1320, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 15],
			DateTime: "1320-09-15 00:00:00",
			DateAber: "15 Aza 1320",
			DateMonth: "Aza",
			DateYearMonth: "1320-Aza",
			DateYear: "1320",
			DateAberWithDate: "Sat 15 Aza 1320",
			DateDoy: "1320.260",
			DateWoy: "1320W38-1",
			DateWithSlash: "1320/09/15",
			DateWithOutSlash: "13200915"
		},
		stime: -885871544000,
		gdate: [1941, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 6] },
		gtime: -885871544000
	},
	{
		sdate: [1320, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 29],
			DateTime: "1320-09-29 00:00:00",
			DateAber: "29 Aza 1320",
			DateMonth: "Aza",
			DateYearMonth: "1320-Aza",
			DateYear: "1320",
			DateAberWithDate: "Sat 29 Aza 1320",
			DateDoy: "1320.274",
			DateWoy: "1320W40-1",
			DateWithSlash: "1320/09/29",
			DateWithOutSlash: "13200929"
		},
		stime: -884661944000,
		gdate: [1941, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 20] },
		gtime: -884661944000
	},
	{
		sdate: [1320, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 30],
			DateTime: "1320-09-30 00:00:00",
			DateAber: "30 Aza 1320",
			DateMonth: "Aza",
			DateYearMonth: "1320-Aza",
			DateYear: "1320",
			DateAberWithDate: "Sun 30 Aza 1320",
			DateDoy: "1320.275",
			DateWoy: "1320W40-2",
			DateWithSlash: "1320/09/30",
			DateWithOutSlash: "13200930"
		},
		stime: -884575544000,
		gdate: [1941, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 21] },
		gtime: -884575544000
	},
	{
		sdate: [1320, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 1],
			DateTime: "1320-10-01 00:00:00",
			DateAber: "01 Dey 1320",
			DateMonth: "Dey",
			DateYearMonth: "1320-Dey",
			DateYear: "1320",
			DateAberWithDate: "Mon 01 Dey 1320",
			DateDoy: "1320.276",
			DateWoy: "1320W40-3",
			DateWithSlash: "1320/10/01",
			DateWithOutSlash: "13201001"
		},
		stime: -884489144000,
		gdate: [1941, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 22] },
		gtime: -884489144000
	},
	{
		sdate: [1320, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 2],
			DateTime: "1320-10-02 00:00:00",
			DateAber: "02 Dey 1320",
			DateMonth: "Dey",
			DateYearMonth: "1320-Dey",
			DateYear: "1320",
			DateAberWithDate: "Tue 02 Dey 1320",
			DateDoy: "1320.277",
			DateWoy: "1320W40-4",
			DateWithSlash: "1320/10/02",
			DateWithOutSlash: "13201002"
		},
		stime: -884402744000,
		gdate: [1941, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 23] },
		gtime: -884402744000
	},
	{
		sdate: [1320, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 15],
			DateTime: "1320-10-15 00:00:00",
			DateAber: "15 Dey 1320",
			DateMonth: "Dey",
			DateYearMonth: "1320-Dey",
			DateYear: "1320",
			DateAberWithDate: "Mon 15 Dey 1320",
			DateDoy: "1320.290",
			DateWoy: "1320W42-3",
			DateWithSlash: "1320/10/15",
			DateWithOutSlash: "13201015"
		},
		stime: -883279544000,
		gdate: [1942, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 5] },
		gtime: -883279544000
	},
	{
		sdate: [1320, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 29],
			DateTime: "1320-10-29 00:00:00",
			DateAber: "29 Dey 1320",
			DateMonth: "Dey",
			DateYearMonth: "1320-Dey",
			DateYear: "1320",
			DateAberWithDate: "Mon 29 Dey 1320",
			DateDoy: "1320.304",
			DateWoy: "1320W44-3",
			DateWithSlash: "1320/10/29",
			DateWithOutSlash: "13201029"
		},
		stime: -882069944000,
		gdate: [1942, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 19] },
		gtime: -882069944000
	},
	{
		sdate: [1320, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 30],
			DateTime: "1320-10-30 00:00:00",
			DateAber: "30 Dey 1320",
			DateMonth: "Dey",
			DateYearMonth: "1320-Dey",
			DateYear: "1320",
			DateAberWithDate: "Tue 30 Dey 1320",
			DateDoy: "1320.305",
			DateWoy: "1320W44-4",
			DateWithSlash: "1320/10/30",
			DateWithOutSlash: "13201030"
		},
		stime: -881983544000,
		gdate: [1942, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 20] },
		gtime: -881983544000
	},
	{
		sdate: [1320, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 1],
			DateTime: "1320-11-01 00:00:00",
			DateAber: "01 Bah 1320",
			DateMonth: "Bah",
			DateYearMonth: "1320-Bah",
			DateYear: "1320",
			DateAberWithDate: "Wed 01 Bah 1320",
			DateDoy: "1320.306",
			DateWoy: "1320W44-5",
			DateWithSlash: "1320/11/01",
			DateWithOutSlash: "13201101"
		},
		stime: -881897144000,
		gdate: [1942, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 21] },
		gtime: -881897144000
	},
	{
		sdate: [1320, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 2],
			DateTime: "1320-11-02 00:00:00",
			DateAber: "02 Bah 1320",
			DateMonth: "Bah",
			DateYearMonth: "1320-Bah",
			DateYear: "1320",
			DateAberWithDate: "Thu 02 Bah 1320",
			DateDoy: "1320.307",
			DateWoy: "1320W44-6",
			DateWithSlash: "1320/11/02",
			DateWithOutSlash: "13201102"
		},
		stime: -881810744000,
		gdate: [1942, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 22] },
		gtime: -881810744000
	},
	{
		sdate: [1320, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 15],
			DateTime: "1320-11-15 00:00:00",
			DateAber: "15 Bah 1320",
			DateMonth: "Bah",
			DateYearMonth: "1320-Bah",
			DateYear: "1320",
			DateAberWithDate: "Wed 15 Bah 1320",
			DateDoy: "1320.320",
			DateWoy: "1320W46-5",
			DateWithSlash: "1320/11/15",
			DateWithOutSlash: "13201115"
		},
		stime: -880687544000,
		gdate: [1942, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 4] },
		gtime: -880687544000
	},
	{
		sdate: [1320, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 29],
			DateTime: "1320-11-29 00:00:00",
			DateAber: "29 Bah 1320",
			DateMonth: "Bah",
			DateYearMonth: "1320-Bah",
			DateYear: "1320",
			DateAberWithDate: "Wed 29 Bah 1320",
			DateDoy: "1320.334",
			DateWoy: "1320W48-5",
			DateWithSlash: "1320/11/29",
			DateWithOutSlash: "13201129"
		},
		stime: -879477944000,
		gdate: [1942, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 18] },
		gtime: -879477944000
	},
	{
		sdate: [1320, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 30],
			DateTime: "1320-11-30 00:00:00",
			DateAber: "30 Bah 1320",
			DateMonth: "Bah",
			DateYearMonth: "1320-Bah",
			DateYear: "1320",
			DateAberWithDate: "Thu 30 Bah 1320",
			DateDoy: "1320.335",
			DateWoy: "1320W48-6",
			DateWithSlash: "1320/11/30",
			DateWithOutSlash: "13201130"
		},
		stime: -879391544000,
		gdate: [1942, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 19] },
		gtime: -879391544000
	},
	{
		sdate: [1320, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 1],
			DateTime: "1320-12-01 00:00:00",
			DateAber: "01 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Fri 01 Esf 1320",
			DateDoy: "1320.336",
			DateWoy: "1320W48-7",
			DateWithSlash: "1320/12/01",
			DateWithOutSlash: "13201201"
		},
		stime: -879305144000,
		gdate: [1942, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 20] },
		gtime: -879305144000
	},
	{
		sdate: [1320, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 2],
			DateTime: "1320-12-02 00:00:00",
			DateAber: "02 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Sat 02 Esf 1320",
			DateDoy: "1320.337",
			DateWoy: "1320W49-1",
			DateWithSlash: "1320/12/02",
			DateWithOutSlash: "13201202"
		},
		stime: -879218744000,
		gdate: [1942, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 21] },
		gtime: -879218744000
	},
	{
		sdate: [1320, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 3],
			DateTime: "1320-12-03 00:00:00",
			DateAber: "03 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Sun 03 Esf 1320",
			DateDoy: "1320.338",
			DateWoy: "1320W49-2",
			DateWithSlash: "1320/12/03",
			DateWithOutSlash: "13201203"
		},
		stime: -879132344000,
		gdate: [1942, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 22] },
		gtime: -879132344000
	},
	{
		sdate: [1320, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 4],
			DateTime: "1320-12-04 00:00:00",
			DateAber: "04 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Mon 04 Esf 1320",
			DateDoy: "1320.339",
			DateWoy: "1320W49-3",
			DateWithSlash: "1320/12/04",
			DateWithOutSlash: "13201204"
		},
		stime: -879045944000,
		gdate: [1942, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 23] },
		gtime: -879045944000
	},
	{
		sdate: [1320, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 15],
			DateTime: "1320-12-15 00:00:00",
			DateAber: "15 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Fri 15 Esf 1320",
			DateDoy: "1320.350",
			DateWoy: "1320W50-7",
			DateWithSlash: "1320/12/15",
			DateWithOutSlash: "13201215"
		},
		stime: -878095544000,
		gdate: [1942, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 6] },
		gtime: -878095544000
	},
	{
		sdate: [1320, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 25],
			DateTime: "1320-12-25 00:00:00",
			DateAber: "25 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Mon 25 Esf 1320",
			DateDoy: "1320.360",
			DateWoy: "1320W52-3",
			DateWithSlash: "1320/12/25",
			DateWithOutSlash: "13201225"
		},
		stime: -877231544000,
		gdate: [1942, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 16] },
		gtime: -877231544000
	},
	{
		sdate: [1320, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 26],
			DateTime: "1320-12-26 00:00:00",
			DateAber: "26 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Tue 26 Esf 1320",
			DateDoy: "1320.361",
			DateWoy: "1320W52-4",
			DateWithSlash: "1320/12/26",
			DateWithOutSlash: "13201226"
		},
		stime: -877145144000,
		gdate: [1942, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 17] },
		gtime: -877145144000
	},
	{
		sdate: [1320, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 27],
			DateTime: "1320-12-27 00:00:00",
			DateAber: "27 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Wed 27 Esf 1320",
			DateDoy: "1320.362",
			DateWoy: "1320W52-5",
			DateWithSlash: "1320/12/27",
			DateWithOutSlash: "13201227"
		},
		stime: -877058744000,
		gdate: [1942, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 18] },
		gtime: -877058744000
	},
	{
		sdate: [1320, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 28],
			DateTime: "1320-12-28 00:00:00",
			DateAber: "28 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Thu 28 Esf 1320",
			DateDoy: "1320.363",
			DateWoy: "1320W52-6",
			DateWithSlash: "1320/12/28",
			DateWithOutSlash: "13201228"
		},
		stime: -876972344000,
		gdate: [1942, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 19] },
		gtime: -876972344000
	},
	{
		sdate: [1320, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 29],
			DateTime: "1320-12-29 00:00:00",
			DateAber: "29 Esf 1320",
			DateMonth: "Esf",
			DateYearMonth: "1320-Esf",
			DateYear: "1320",
			DateAberWithDate: "Fri 29 Esf 1320",
			DateDoy: "1320.364",
			DateWoy: "1320W52-7",
			DateWithSlash: "1320/12/29",
			DateWithOutSlash: "13201229"
		},
		stime: -876885944000,
		gdate: [1942, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 20] },
		gtime: -876885944000
	},

	{
		sdate: [1340, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 1],
			DateTime: "1340-01-01 00:00:00",
			DateAber: "01 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Tue 01 Far 1340",
			DateDoy: "1340.000",
			DateWoy: "1340W01-4",
			DateWithSlash: "1340/01/01",
			DateWithOutSlash: "13400101"
		},
		stime: -277183800000,
		gdate: [1961, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 2, 21] },
		gtime: -277183800000
	},
	{
		sdate: [1340, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 2],
			DateTime: "1340-01-02 00:00:00",
			DateAber: "02 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Wed 02 Far 1340",
			DateDoy: "1340.001",
			DateWoy: "1340W01-5",
			DateWithSlash: "1340/01/02",
			DateWithOutSlash: "13400102"
		},
		stime: -277097400000,
		gdate: [1961, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 2, 22] },
		gtime: -277097400000
	},
	{
		sdate: [1340, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 3],
			DateTime: "1340-01-03 00:00:00",
			DateAber: "03 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Thu 03 Far 1340",
			DateDoy: "1340.002",
			DateWoy: "1340W01-6",
			DateWithSlash: "1340/01/03",
			DateWithOutSlash: "13400103"
		},
		stime: -277011000000,
		gdate: [1961, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 2, 23] },
		gtime: -277011000000
	},
	{
		sdate: [1340, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 4],
			DateTime: "1340-01-04 00:00:00",
			DateAber: "04 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Fri 04 Far 1340",
			DateDoy: "1340.003",
			DateWoy: "1340W01-7",
			DateWithSlash: "1340/01/04",
			DateWithOutSlash: "13400104"
		},
		stime: -276924600000,
		gdate: [1961, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 2, 24] },
		gtime: -276924600000
	},
	{
		sdate: [1340, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 5],
			DateTime: "1340-01-05 00:00:00",
			DateAber: "05 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Sat 05 Far 1340",
			DateDoy: "1340.004",
			DateWoy: "1340W02-1",
			DateWithSlash: "1340/01/05",
			DateWithOutSlash: "13400105"
		},
		stime: -276838200000,
		gdate: [1961, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 2, 25] },
		gtime: -276838200000
	},
	{
		sdate: [1340, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 6],
			DateTime: "1340-01-06 00:00:00",
			DateAber: "06 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Sun 06 Far 1340",
			DateDoy: "1340.005",
			DateWoy: "1340W02-2",
			DateWithSlash: "1340/01/06",
			DateWithOutSlash: "13400106"
		},
		stime: -276751800000,
		gdate: [1961, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 2, 26] },
		gtime: -276751800000
	},
	{
		sdate: [1340, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 7],
			DateTime: "1340-01-07 00:00:00",
			DateAber: "07 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Mon 07 Far 1340",
			DateDoy: "1340.006",
			DateWoy: "1340W02-3",
			DateWithSlash: "1340/01/07",
			DateWithOutSlash: "13400107"
		},
		stime: -276665400000,
		gdate: [1961, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 2, 27] },
		gtime: -276665400000
	},
	{
		sdate: [1340, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 15],
			DateTime: "1340-01-15 00:00:00",
			DateAber: "15 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Tue 15 Far 1340",
			DateDoy: "1340.014",
			DateWoy: "1340W03-4",
			DateWithSlash: "1340/01/15",
			DateWithOutSlash: "13400115"
		},
		stime: -275974200000,
		gdate: [1961, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 3, 4] },
		gtime: -275974200000
	},
	{
		sdate: [1340, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 29],
			DateTime: "1340-01-29 00:00:00",
			DateAber: "29 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Tue 29 Far 1340",
			DateDoy: "1340.028",
			DateWoy: "1340W05-4",
			DateWithSlash: "1340/01/29",
			DateWithOutSlash: "13400129"
		},
		stime: -274764600000,
		gdate: [1961, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 3, 18] },
		gtime: -274764600000
	},
	{
		sdate: [1340, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 30],
			DateTime: "1340-01-30 00:00:00",
			DateAber: "30 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Wed 30 Far 1340",
			DateDoy: "1340.029",
			DateWoy: "1340W05-5",
			DateWithSlash: "1340/01/30",
			DateWithOutSlash: "13400130"
		},
		stime: -274678200000,
		gdate: [1961, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 3, 19] },
		gtime: -274678200000
	},
	{
		sdate: [1340, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 31],
			DateTime: "1340-01-31 00:00:00",
			DateAber: "31 Far 1340",
			DateMonth: "Far",
			DateYearMonth: "1340-Far",
			DateYear: "1340",
			DateAberWithDate: "Thu 31 Far 1340",
			DateDoy: "1340.030",
			DateWoy: "1340W05-6",
			DateWithSlash: "1340/01/31",
			DateWithOutSlash: "13400131"
		},
		stime: -274591800000,
		gdate: [1961, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 3, 20] },
		gtime: -274591800000
	},
	{
		sdate: [1340, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 1],
			DateTime: "1340-02-01 00:00:00",
			DateAber: "01 Ord 1340",
			DateMonth: "Ord",
			DateYearMonth: "1340-Ord",
			DateYear: "1340",
			DateAberWithDate: "Fri 01 Ord 1340",
			DateDoy: "1340.031",
			DateWoy: "1340W05-7",
			DateWithSlash: "1340/02/01",
			DateWithOutSlash: "13400201"
		},
		stime: -274505400000,
		gdate: [1961, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 3, 21] },
		gtime: -274505400000
	},
	{
		sdate: [1340, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 2],
			DateTime: "1340-02-02 00:00:00",
			DateAber: "02 Ord 1340",
			DateMonth: "Ord",
			DateYearMonth: "1340-Ord",
			DateYear: "1340",
			DateAberWithDate: "Sat 02 Ord 1340",
			DateDoy: "1340.032",
			DateWoy: "1340W06-1",
			DateWithSlash: "1340/02/02",
			DateWithOutSlash: "13400202"
		},
		stime: -274419000000,
		gdate: [1961, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 3, 22] },
		gtime: -274419000000
	},
	{
		sdate: [1340, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 15],
			DateTime: "1340-02-15 00:00:00",
			DateAber: "15 Ord 1340",
			DateMonth: "Ord",
			DateYearMonth: "1340-Ord",
			DateYear: "1340",
			DateAberWithDate: "Fri 15 Ord 1340",
			DateDoy: "1340.045",
			DateWoy: "1340W07-7",
			DateWithSlash: "1340/02/15",
			DateWithOutSlash: "13400215"
		},
		stime: -273295800000,
		gdate: [1961, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 4, 5] },
		gtime: -273295800000
	},
	{
		sdate: [1340, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 30],
			DateTime: "1340-02-30 00:00:00",
			DateAber: "30 Ord 1340",
			DateMonth: "Ord",
			DateYearMonth: "1340-Ord",
			DateYear: "1340",
			DateAberWithDate: "Sat 30 Ord 1340",
			DateDoy: "1340.060",
			DateWoy: "1340W10-1",
			DateWithSlash: "1340/02/30",
			DateWithOutSlash: "13400230"
		},
		stime: -271999800000,
		gdate: [1961, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 4, 20] },
		gtime: -271999800000
	},
	{
		sdate: [1340, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 31],
			DateTime: "1340-02-31 00:00:00",
			DateAber: "31 Ord 1340",
			DateMonth: "Ord",
			DateYearMonth: "1340-Ord",
			DateYear: "1340",
			DateAberWithDate: "Sun 31 Ord 1340",
			DateDoy: "1340.061",
			DateWoy: "1340W10-2",
			DateWithSlash: "1340/02/31",
			DateWithOutSlash: "13400231"
		},
		stime: -271913400000,
		gdate: [1961, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 4, 21] },
		gtime: -271913400000
	},
	{
		sdate: [1340, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 1],
			DateTime: "1340-03-01 00:00:00",
			DateAber: "01 Kho 1340",
			DateMonth: "Kho",
			DateYearMonth: "1340-Kho",
			DateYear: "1340",
			DateAberWithDate: "Mon 01 Kho 1340",
			DateDoy: "1340.062",
			DateWoy: "1340W10-3",
			DateWithSlash: "1340/03/01",
			DateWithOutSlash: "13400301"
		},
		stime: -271827000000,
		gdate: [1961, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 4, 22] },
		gtime: -271827000000
	},
	{
		sdate: [1340, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 2],
			DateTime: "1340-03-02 00:00:00",
			DateAber: "02 Kho 1340",
			DateMonth: "Kho",
			DateYearMonth: "1340-Kho",
			DateYear: "1340",
			DateAberWithDate: "Tue 02 Kho 1340",
			DateDoy: "1340.063",
			DateWoy: "1340W10-4",
			DateWithSlash: "1340/03/02",
			DateWithOutSlash: "13400302"
		},
		stime: -271740600000,
		gdate: [1961, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 4, 23] },
		gtime: -271740600000
	},
	{
		sdate: [1340, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 15],
			DateTime: "1340-03-15 00:00:00",
			DateAber: "15 Kho 1340",
			DateMonth: "Kho",
			DateYearMonth: "1340-Kho",
			DateYear: "1340",
			DateAberWithDate: "Mon 15 Kho 1340",
			DateDoy: "1340.076",
			DateWoy: "1340W12-3",
			DateWithSlash: "1340/03/15",
			DateWithOutSlash: "13400315"
		},
		stime: -270617400000,
		gdate: [1961, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 5, 5] },
		gtime: -270617400000
	},
	{
		sdate: [1340, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 30],
			DateTime: "1340-03-30 00:00:00",
			DateAber: "30 Kho 1340",
			DateMonth: "Kho",
			DateYearMonth: "1340-Kho",
			DateYear: "1340",
			DateAberWithDate: "Tue 30 Kho 1340",
			DateDoy: "1340.091",
			DateWoy: "1340W14-4",
			DateWithSlash: "1340/03/30",
			DateWithOutSlash: "13400330"
		},
		stime: -269321400000,
		gdate: [1961, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 5, 20] },
		gtime: -269321400000
	},
	{
		sdate: [1340, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 31],
			DateTime: "1340-03-31 00:00:00",
			DateAber: "31 Kho 1340",
			DateMonth: "Kho",
			DateYearMonth: "1340-Kho",
			DateYear: "1340",
			DateAberWithDate: "Wed 31 Kho 1340",
			DateDoy: "1340.092",
			DateWoy: "1340W14-5",
			DateWithSlash: "1340/03/31",
			DateWithOutSlash: "13400331"
		},
		stime: -269235000000,
		gdate: [1961, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 5, 21] },
		gtime: -269235000000
	},
	{
		sdate: [1340, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 1],
			DateTime: "1340-04-01 00:00:00",
			DateAber: "01 Tir 1340",
			DateMonth: "Tir",
			DateYearMonth: "1340-Tir",
			DateYear: "1340",
			DateAberWithDate: "Thu 01 Tir 1340",
			DateDoy: "1340.093",
			DateWoy: "1340W14-6",
			DateWithSlash: "1340/04/01",
			DateWithOutSlash: "13400401"
		},
		stime: -269148600000,
		gdate: [1961, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 5, 22] },
		gtime: -269148600000
	},
	{
		sdate: [1340, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 2],
			DateTime: "1340-04-02 00:00:00",
			DateAber: "02 Tir 1340",
			DateMonth: "Tir",
			DateYearMonth: "1340-Tir",
			DateYear: "1340",
			DateAberWithDate: "Fri 02 Tir 1340",
			DateDoy: "1340.094",
			DateWoy: "1340W14-7",
			DateWithSlash: "1340/04/02",
			DateWithOutSlash: "13400402"
		},
		stime: -269062200000,
		gdate: [1961, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 5, 23] },
		gtime: -269062200000
	},
	{
		sdate: [1340, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 15],
			DateTime: "1340-04-15 00:00:00",
			DateAber: "15 Tir 1340",
			DateMonth: "Tir",
			DateYearMonth: "1340-Tir",
			DateYear: "1340",
			DateAberWithDate: "Thu 15 Tir 1340",
			DateDoy: "1340.107",
			DateWoy: "1340W16-6",
			DateWithSlash: "1340/04/15",
			DateWithOutSlash: "13400415"
		},
		stime: -267939000000,
		gdate: [1961, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 6, 6] },
		gtime: -267939000000
	},
	{
		sdate: [1340, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 30],
			DateTime: "1340-04-30 00:00:00",
			DateAber: "30 Tir 1340",
			DateMonth: "Tir",
			DateYearMonth: "1340-Tir",
			DateYear: "1340",
			DateAberWithDate: "Fri 30 Tir 1340",
			DateDoy: "1340.122",
			DateWoy: "1340W18-7",
			DateWithSlash: "1340/04/30",
			DateWithOutSlash: "13400430"
		},
		stime: -266643000000,
		gdate: [1961, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 6, 21] },
		gtime: -266643000000
	},
	{
		sdate: [1340, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 31],
			DateTime: "1340-04-31 00:00:00",
			DateAber: "31 Tir 1340",
			DateMonth: "Tir",
			DateYearMonth: "1340-Tir",
			DateYear: "1340",
			DateAberWithDate: "Sat 31 Tir 1340",
			DateDoy: "1340.123",
			DateWoy: "1340W19-1",
			DateWithSlash: "1340/04/31",
			DateWithOutSlash: "13400431"
		},
		stime: -266556600000,
		gdate: [1961, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 6, 22] },
		gtime: -266556600000
	},
	{
		sdate: [1340, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 1],
			DateTime: "1340-05-01 00:00:00",
			DateAber: "01 Amo 1340",
			DateMonth: "Amo",
			DateYearMonth: "1340-Amo",
			DateYear: "1340",
			DateAberWithDate: "Sun 01 Amo 1340",
			DateDoy: "1340.124",
			DateWoy: "1340W19-2",
			DateWithSlash: "1340/05/01",
			DateWithOutSlash: "13400501"
		},
		stime: -266470200000,
		gdate: [1961, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 6, 23] },
		gtime: -266470200000
	},
	{
		sdate: [1340, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 2],
			DateTime: "1340-05-02 00:00:00",
			DateAber: "02 Amo 1340",
			DateMonth: "Amo",
			DateYearMonth: "1340-Amo",
			DateYear: "1340",
			DateAberWithDate: "Mon 02 Amo 1340",
			DateDoy: "1340.125",
			DateWoy: "1340W19-3",
			DateWithSlash: "1340/05/02",
			DateWithOutSlash: "13400502"
		},
		stime: -266383800000,
		gdate: [1961, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 6, 24] },
		gtime: -266383800000
	},
	{
		sdate: [1340, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 15],
			DateTime: "1340-05-15 00:00:00",
			DateAber: "15 Amo 1340",
			DateMonth: "Amo",
			DateYearMonth: "1340-Amo",
			DateYear: "1340",
			DateAberWithDate: "Sun 15 Amo 1340",
			DateDoy: "1340.138",
			DateWoy: "1340W21-2",
			DateWithSlash: "1340/05/15",
			DateWithOutSlash: "13400515"
		},
		stime: -265260600000,
		gdate: [1961, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 7, 6] },
		gtime: -265260600000
	},
	{
		sdate: [1340, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 30],
			DateTime: "1340-05-30 00:00:00",
			DateAber: "30 Amo 1340",
			DateMonth: "Amo",
			DateYearMonth: "1340-Amo",
			DateYear: "1340",
			DateAberWithDate: "Mon 30 Amo 1340",
			DateDoy: "1340.153",
			DateWoy: "1340W23-3",
			DateWithSlash: "1340/05/30",
			DateWithOutSlash: "13400530"
		},
		stime: -263964600000,
		gdate: [1961, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 7, 21] },
		gtime: -263964600000
	},
	{
		sdate: [1340, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 31],
			DateTime: "1340-05-31 00:00:00",
			DateAber: "31 Amo 1340",
			DateMonth: "Amo",
			DateYearMonth: "1340-Amo",
			DateYear: "1340",
			DateAberWithDate: "Tue 31 Amo 1340",
			DateDoy: "1340.154",
			DateWoy: "1340W23-4",
			DateWithSlash: "1340/05/31",
			DateWithOutSlash: "13400531"
		},
		stime: -263878200000,
		gdate: [1961, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 7, 22] },
		gtime: -263878200000
	},
	{
		sdate: [1340, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 1],
			DateTime: "1340-06-01 00:00:00",
			DateAber: "01 Sha 1340",
			DateMonth: "Sha",
			DateYearMonth: "1340-Sha",
			DateYear: "1340",
			DateAberWithDate: "Wed 01 Sha 1340",
			DateDoy: "1340.155",
			DateWoy: "1340W23-5",
			DateWithSlash: "1340/06/01",
			DateWithOutSlash: "13400601"
		},
		stime: -263791800000,
		gdate: [1961, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 7, 23] },
		gtime: -263791800000
	},
	{
		sdate: [1340, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 2],
			DateTime: "1340-06-02 00:00:00",
			DateAber: "02 Sha 1340",
			DateMonth: "Sha",
			DateYearMonth: "1340-Sha",
			DateYear: "1340",
			DateAberWithDate: "Thu 02 Sha 1340",
			DateDoy: "1340.156",
			DateWoy: "1340W23-6",
			DateWithSlash: "1340/06/02",
			DateWithOutSlash: "13400602"
		},
		stime: -263705400000,
		gdate: [1961, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 7, 24] },
		gtime: -263705400000
	},
	{
		sdate: [1340, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 15],
			DateTime: "1340-06-15 00:00:00",
			DateAber: "15 Sha 1340",
			DateMonth: "Sha",
			DateYearMonth: "1340-Sha",
			DateYear: "1340",
			DateAberWithDate: "Wed 15 Sha 1340",
			DateDoy: "1340.169",
			DateWoy: "1340W25-5",
			DateWithSlash: "1340/06/15",
			DateWithOutSlash: "13400615"
		},
		stime: -262582200000,
		gdate: [1961, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 8, 6] },
		gtime: -262582200000
	},
	{
		sdate: [1340, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 29],
			DateTime: "1340-06-29 00:00:00",
			DateAber: "29 Sha 1340",
			DateMonth: "Sha",
			DateYearMonth: "1340-Sha",
			DateYear: "1340",
			DateAberWithDate: "Wed 29 Sha 1340",
			DateDoy: "1340.183",
			DateWoy: "1340W27-5",
			DateWithSlash: "1340/06/29",
			DateWithOutSlash: "13400629"
		},
		stime: -261372600000,
		gdate: [1961, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 8, 20] },
		gtime: -261372600000
	},
	{
		sdate: [1340, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 30],
			DateTime: "1340-06-30 00:00:00",
			DateAber: "30 Sha 1340",
			DateMonth: "Sha",
			DateYearMonth: "1340-Sha",
			DateYear: "1340",
			DateAberWithDate: "Thu 30 Sha 1340",
			DateDoy: "1340.184",
			DateWoy: "1340W27-6",
			DateWithSlash: "1340/06/30",
			DateWithOutSlash: "13400630"
		},
		stime: -261286200000,
		gdate: [1961, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 8, 21] },
		gtime: -261286200000
	},
	{
		sdate: [1340, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 1],
			DateTime: "1340-07-01 00:00:00",
			DateAber: "01 Meh 1340",
			DateMonth: "Meh",
			DateYearMonth: "1340-Meh",
			DateYear: "1340",
			DateAberWithDate: "Sat 01 Meh 1340",
			DateDoy: "1340.186",
			DateWoy: "1340W28-1",
			DateWithSlash: "1340/07/01",
			DateWithOutSlash: "13400701"
		},
		stime: -261113400000,
		gdate: [1961, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 8, 23] },
		gtime: -261113400000
	},
	{
		sdate: [1340, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 2],
			DateTime: "1340-07-02 00:00:00",
			DateAber: "02 Meh 1340",
			DateMonth: "Meh",
			DateYearMonth: "1340-Meh",
			DateYear: "1340",
			DateAberWithDate: "Sun 02 Meh 1340",
			DateDoy: "1340.187",
			DateWoy: "1340W28-2",
			DateWithSlash: "1340/07/02",
			DateWithOutSlash: "13400702"
		},
		stime: -261027000000,
		gdate: [1961, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 8, 24] },
		gtime: -261027000000
	},
	{
		sdate: [1340, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 15],
			DateTime: "1340-07-15 00:00:00",
			DateAber: "15 Meh 1340",
			DateMonth: "Meh",
			DateYearMonth: "1340-Meh",
			DateYear: "1340",
			DateAberWithDate: "Sat 15 Meh 1340",
			DateDoy: "1340.200",
			DateWoy: "1340W30-1",
			DateWithSlash: "1340/07/15",
			DateWithOutSlash: "13400715"
		},
		stime: -259903800000,
		gdate: [1961, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 9, 7] },
		gtime: -259903800000
	},
	{
		sdate: [1340, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 29],
			DateTime: "1340-07-29 00:00:00",
			DateAber: "29 Meh 1340",
			DateMonth: "Meh",
			DateYearMonth: "1340-Meh",
			DateYear: "1340",
			DateAberWithDate: "Sat 29 Meh 1340",
			DateDoy: "1340.214",
			DateWoy: "1340W32-1",
			DateWithSlash: "1340/07/29",
			DateWithOutSlash: "13400729"
		},
		stime: -258694200000,
		gdate: [1961, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 9, 21] },
		gtime: -258694200000
	},
	{
		sdate: [1340, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 30],
			DateTime: "1340-07-30 00:00:00",
			DateAber: "30 Meh 1340",
			DateMonth: "Meh",
			DateYearMonth: "1340-Meh",
			DateYear: "1340",
			DateAberWithDate: "Sun 30 Meh 1340",
			DateDoy: "1340.215",
			DateWoy: "1340W32-2",
			DateWithSlash: "1340/07/30",
			DateWithOutSlash: "13400730"
		},
		stime: -258607800000,
		gdate: [1961, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 9, 22] },
		gtime: -258607800000
	},
	{
		sdate: [1340, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 1],
			DateTime: "1340-08-01 00:00:00",
			DateAber: "01 Aba 1340",
			DateMonth: "Aba",
			DateYearMonth: "1340-Aba",
			DateYear: "1340",
			DateAberWithDate: "Mon 01 Aba 1340",
			DateDoy: "1340.216",
			DateWoy: "1340W32-3",
			DateWithSlash: "1340/08/01",
			DateWithOutSlash: "13400801"
		},
		stime: -258521400000,
		gdate: [1961, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 9, 23] },
		gtime: -258521400000
	},
	{
		sdate: [1340, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 2],
			DateTime: "1340-08-02 00:00:00",
			DateAber: "02 Aba 1340",
			DateMonth: "Aba",
			DateYearMonth: "1340-Aba",
			DateYear: "1340",
			DateAberWithDate: "Tue 02 Aba 1340",
			DateDoy: "1340.217",
			DateWoy: "1340W32-4",
			DateWithSlash: "1340/08/02",
			DateWithOutSlash: "13400802"
		},
		stime: -258435000000,
		gdate: [1961, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 9, 24] },
		gtime: -258435000000
	},
	{
		sdate: [1340, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 15],
			DateTime: "1340-08-15 00:00:00",
			DateAber: "15 Aba 1340",
			DateMonth: "Aba",
			DateYearMonth: "1340-Aba",
			DateYear: "1340",
			DateAberWithDate: "Mon 15 Aba 1340",
			DateDoy: "1340.230",
			DateWoy: "1340W34-3",
			DateWithSlash: "1340/08/15",
			DateWithOutSlash: "13400815"
		},
		stime: -257311800000,
		gdate: [1961, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 10, 6] },
		gtime: -257311800000
	},
	{
		sdate: [1340, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 29],
			DateTime: "1340-08-29 00:00:00",
			DateAber: "29 Aba 1340",
			DateMonth: "Aba",
			DateYearMonth: "1340-Aba",
			DateYear: "1340",
			DateAberWithDate: "Mon 29 Aba 1340",
			DateDoy: "1340.244",
			DateWoy: "1340W36-3",
			DateWithSlash: "1340/08/29",
			DateWithOutSlash: "13400829"
		},
		stime: -256102200000,
		gdate: [1961, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 10, 20] },
		gtime: -256102200000
	},
	{
		sdate: [1340, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 30],
			DateTime: "1340-08-30 00:00:00",
			DateAber: "30 Aba 1340",
			DateMonth: "Aba",
			DateYearMonth: "1340-Aba",
			DateYear: "1340",
			DateAberWithDate: "Tue 30 Aba 1340",
			DateDoy: "1340.245",
			DateWoy: "1340W36-4",
			DateWithSlash: "1340/08/30",
			DateWithOutSlash: "13400830"
		},
		stime: -256015800000,
		gdate: [1961, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 10, 21] },
		gtime: -256015800000
	},
	{
		sdate: [1340, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 1],
			DateTime: "1340-09-01 00:00:00",
			DateAber: "01 Aza 1340",
			DateMonth: "Aza",
			DateYearMonth: "1340-Aza",
			DateYear: "1340",
			DateAberWithDate: "Wed 01 Aza 1340",
			DateDoy: "1340.246",
			DateWoy: "1340W36-5",
			DateWithSlash: "1340/09/01",
			DateWithOutSlash: "13400901"
		},
		stime: -255929400000,
		gdate: [1961, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 10, 22] },
		gtime: -255929400000
	},
	{
		sdate: [1340, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 2],
			DateTime: "1340-09-02 00:00:00",
			DateAber: "02 Aza 1340",
			DateMonth: "Aza",
			DateYearMonth: "1340-Aza",
			DateYear: "1340",
			DateAberWithDate: "Thu 02 Aza 1340",
			DateDoy: "1340.247",
			DateWoy: "1340W36-6",
			DateWithSlash: "1340/09/02",
			DateWithOutSlash: "13400902"
		},
		stime: -255843000000,
		gdate: [1961, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 10, 23] },
		gtime: -255843000000
	},
	{
		sdate: [1340, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 15],
			DateTime: "1340-09-15 00:00:00",
			DateAber: "15 Aza 1340",
			DateMonth: "Aza",
			DateYearMonth: "1340-Aza",
			DateYear: "1340",
			DateAberWithDate: "Wed 15 Aza 1340",
			DateDoy: "1340.260",
			DateWoy: "1340W38-5",
			DateWithSlash: "1340/09/15",
			DateWithOutSlash: "13400915"
		},
		stime: -254719800000,
		gdate: [1961, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 11, 6] },
		gtime: -254719800000
	},
	{
		sdate: [1340, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 29],
			DateTime: "1340-09-29 00:00:00",
			DateAber: "29 Aza 1340",
			DateMonth: "Aza",
			DateYearMonth: "1340-Aza",
			DateYear: "1340",
			DateAberWithDate: "Wed 29 Aza 1340",
			DateDoy: "1340.274",
			DateWoy: "1340W40-5",
			DateWithSlash: "1340/09/29",
			DateWithOutSlash: "13400929"
		},
		stime: -253510200000,
		gdate: [1961, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 11, 20] },
		gtime: -253510200000
	},
	{
		sdate: [1340, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 30],
			DateTime: "1340-09-30 00:00:00",
			DateAber: "30 Aza 1340",
			DateMonth: "Aza",
			DateYearMonth: "1340-Aza",
			DateYear: "1340",
			DateAberWithDate: "Thu 30 Aza 1340",
			DateDoy: "1340.275",
			DateWoy: "1340W40-6",
			DateWithSlash: "1340/09/30",
			DateWithOutSlash: "13400930"
		},
		stime: -253423800000,
		gdate: [1961, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 11, 21] },
		gtime: -253423800000
	},
	{
		sdate: [1340, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 1],
			DateTime: "1340-10-01 00:00:00",
			DateAber: "01 Dey 1340",
			DateMonth: "Dey",
			DateYearMonth: "1340-Dey",
			DateYear: "1340",
			DateAberWithDate: "Fri 01 Dey 1340",
			DateDoy: "1340.276",
			DateWoy: "1340W40-7",
			DateWithSlash: "1340/10/01",
			DateWithOutSlash: "13401001"
		},
		stime: -253337400000,
		gdate: [1961, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 11, 22] },
		gtime: -253337400000
	},
	{
		sdate: [1340, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 2],
			DateTime: "1340-10-02 00:00:00",
			DateAber: "02 Dey 1340",
			DateMonth: "Dey",
			DateYearMonth: "1340-Dey",
			DateYear: "1340",
			DateAberWithDate: "Sat 02 Dey 1340",
			DateDoy: "1340.277",
			DateWoy: "1340W41-1",
			DateWithSlash: "1340/10/02",
			DateWithOutSlash: "13401002"
		},
		stime: -253251000000,
		gdate: [1961, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1961, 11, 23] },
		gtime: -253251000000
	},
	{
		sdate: [1340, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 15],
			DateTime: "1340-10-15 00:00:00",
			DateAber: "15 Dey 1340",
			DateMonth: "Dey",
			DateYearMonth: "1340-Dey",
			DateYear: "1340",
			DateAberWithDate: "Fri 15 Dey 1340",
			DateDoy: "1340.290",
			DateWoy: "1340W42-7",
			DateWithSlash: "1340/10/15",
			DateWithOutSlash: "13401015"
		},
		stime: -252127800000,
		gdate: [1962, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 0, 5] },
		gtime: -252127800000
	},
	{
		sdate: [1340, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 29],
			DateTime: "1340-10-29 00:00:00",
			DateAber: "29 Dey 1340",
			DateMonth: "Dey",
			DateYearMonth: "1340-Dey",
			DateYear: "1340",
			DateAberWithDate: "Fri 29 Dey 1340",
			DateDoy: "1340.304",
			DateWoy: "1340W44-7",
			DateWithSlash: "1340/10/29",
			DateWithOutSlash: "13401029"
		},
		stime: -250918200000,
		gdate: [1962, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 0, 19] },
		gtime: -250918200000
	},
	{
		sdate: [1340, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 30],
			DateTime: "1340-10-30 00:00:00",
			DateAber: "30 Dey 1340",
			DateMonth: "Dey",
			DateYearMonth: "1340-Dey",
			DateYear: "1340",
			DateAberWithDate: "Sat 30 Dey 1340",
			DateDoy: "1340.305",
			DateWoy: "1340W45-1",
			DateWithSlash: "1340/10/30",
			DateWithOutSlash: "13401030"
		},
		stime: -250831800000,
		gdate: [1962, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 0, 20] },
		gtime: -250831800000
	},
	{
		sdate: [1340, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 1],
			DateTime: "1340-11-01 00:00:00",
			DateAber: "01 Bah 1340",
			DateMonth: "Bah",
			DateYearMonth: "1340-Bah",
			DateYear: "1340",
			DateAberWithDate: "Sun 01 Bah 1340",
			DateDoy: "1340.306",
			DateWoy: "1340W45-2",
			DateWithSlash: "1340/11/01",
			DateWithOutSlash: "13401101"
		},
		stime: -250745400000,
		gdate: [1962, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 0, 21] },
		gtime: -250745400000
	},
	{
		sdate: [1340, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 2],
			DateTime: "1340-11-02 00:00:00",
			DateAber: "02 Bah 1340",
			DateMonth: "Bah",
			DateYearMonth: "1340-Bah",
			DateYear: "1340",
			DateAberWithDate: "Mon 02 Bah 1340",
			DateDoy: "1340.307",
			DateWoy: "1340W45-3",
			DateWithSlash: "1340/11/02",
			DateWithOutSlash: "13401102"
		},
		stime: -250659000000,
		gdate: [1962, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 0, 22] },
		gtime: -250659000000
	},
	{
		sdate: [1340, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 15],
			DateTime: "1340-11-15 00:00:00",
			DateAber: "15 Bah 1340",
			DateMonth: "Bah",
			DateYearMonth: "1340-Bah",
			DateYear: "1340",
			DateAberWithDate: "Sun 15 Bah 1340",
			DateDoy: "1340.320",
			DateWoy: "1340W47-2",
			DateWithSlash: "1340/11/15",
			DateWithOutSlash: "13401115"
		},
		stime: -249535800000,
		gdate: [1962, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 1, 4] },
		gtime: -249535800000
	},
	{
		sdate: [1340, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 29],
			DateTime: "1340-11-29 00:00:00",
			DateAber: "29 Bah 1340",
			DateMonth: "Bah",
			DateYearMonth: "1340-Bah",
			DateYear: "1340",
			DateAberWithDate: "Sun 29 Bah 1340",
			DateDoy: "1340.334",
			DateWoy: "1340W49-2",
			DateWithSlash: "1340/11/29",
			DateWithOutSlash: "13401129"
		},
		stime: -248326200000,
		gdate: [1962, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 1, 18] },
		gtime: -248326200000
	},
	{
		sdate: [1340, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 30],
			DateTime: "1340-11-30 00:00:00",
			DateAber: "30 Bah 1340",
			DateMonth: "Bah",
			DateYearMonth: "1340-Bah",
			DateYear: "1340",
			DateAberWithDate: "Mon 30 Bah 1340",
			DateDoy: "1340.335",
			DateWoy: "1340W49-3",
			DateWithSlash: "1340/11/30",
			DateWithOutSlash: "13401130"
		},
		stime: -248239800000,
		gdate: [1962, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 1, 19] },
		gtime: -248239800000
	},
	{
		sdate: [1340, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 1],
			DateTime: "1340-12-01 00:00:00",
			DateAber: "01 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Tue 01 Esf 1340",
			DateDoy: "1340.336",
			DateWoy: "1340W49-4",
			DateWithSlash: "1340/12/01",
			DateWithOutSlash: "13401201"
		},
		stime: -248153400000,
		gdate: [1962, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 1, 20] },
		gtime: -248153400000
	},
	{
		sdate: [1340, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 2],
			DateTime: "1340-12-02 00:00:00",
			DateAber: "02 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Wed 02 Esf 1340",
			DateDoy: "1340.337",
			DateWoy: "1340W49-5",
			DateWithSlash: "1340/12/02",
			DateWithOutSlash: "13401202"
		},
		stime: -248067000000,
		gdate: [1962, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 1, 21] },
		gtime: -248067000000
	},
	{
		sdate: [1340, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 3],
			DateTime: "1340-12-03 00:00:00",
			DateAber: "03 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Thu 03 Esf 1340",
			DateDoy: "1340.338",
			DateWoy: "1340W49-6",
			DateWithSlash: "1340/12/03",
			DateWithOutSlash: "13401203"
		},
		stime: -247980600000,
		gdate: [1962, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 1, 22] },
		gtime: -247980600000
	},
	{
		sdate: [1340, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 4],
			DateTime: "1340-12-04 00:00:00",
			DateAber: "04 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Fri 04 Esf 1340",
			DateDoy: "1340.339",
			DateWoy: "1340W49-7",
			DateWithSlash: "1340/12/04",
			DateWithOutSlash: "13401204"
		},
		stime: -247894200000,
		gdate: [1962, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 1, 23] },
		gtime: -247894200000
	},
	{
		sdate: [1340, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 15],
			DateTime: "1340-12-15 00:00:00",
			DateAber: "15 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Tue 15 Esf 1340",
			DateDoy: "1340.350",
			DateWoy: "1340W51-4",
			DateWithSlash: "1340/12/15",
			DateWithOutSlash: "13401215"
		},
		stime: -246943800000,
		gdate: [1962, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 2, 6] },
		gtime: -246943800000
	},
	{
		sdate: [1340, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 25],
			DateTime: "1340-12-25 00:00:00",
			DateAber: "25 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Fri 25 Esf 1340",
			DateDoy: "1340.360",
			DateWoy: "1340W52-7",
			DateWithSlash: "1340/12/25",
			DateWithOutSlash: "13401225"
		},
		stime: -246079800000,
		gdate: [1962, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 2, 16] },
		gtime: -246079800000
	},
	{
		sdate: [1340, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 26],
			DateTime: "1340-12-26 00:00:00",
			DateAber: "26 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Sat 26 Esf 1340",
			DateDoy: "1340.361",
			DateWoy: "1340W53-1",
			DateWithSlash: "1340/12/26",
			DateWithOutSlash: "13401226"
		},
		stime: -245993400000,
		gdate: [1962, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 2, 17] },
		gtime: -245993400000
	},
	{
		sdate: [1340, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 27],
			DateTime: "1340-12-27 00:00:00",
			DateAber: "27 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Sun 27 Esf 1340",
			DateDoy: "1340.362",
			DateWoy: "1340W53-2",
			DateWithSlash: "1340/12/27",
			DateWithOutSlash: "13401227"
		},
		stime: -245907000000,
		gdate: [1962, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 2, 18] },
		gtime: -245907000000
	},
	{
		sdate: [1340, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 28],
			DateTime: "1340-12-28 00:00:00",
			DateAber: "28 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Mon 28 Esf 1340",
			DateDoy: "1340.363",
			DateWoy: "1340W53-3",
			DateWithSlash: "1340/12/28",
			DateWithOutSlash: "13401228"
		},
		stime: -245820600000,
		gdate: [1962, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 2, 19] },
		gtime: -245820600000
	},
	{
		sdate: [1340, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 29],
			DateTime: "1340-12-29 00:00:00",
			DateAber: "29 Esf 1340",
			DateMonth: "Esf",
			DateYearMonth: "1340-Esf",
			DateYear: "1340",
			DateAberWithDate: "Tue 29 Esf 1340",
			DateDoy: "1340.364",
			DateWoy: "1340W53-4",
			DateWithSlash: "1340/12/29",
			DateWithOutSlash: "13401229"
		},
		stime: -245734200000,
		gdate: [1962, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 2, 20] },
		gtime: -245734200000
	},

	{
		sdate: [1360, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 1],
			DateTime: "1360-01-01 00:00:00",
			DateAber: "01 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Sat 01 Far 1360",
			DateDoy: "1360.000",
			DateWoy: "1360W01-1",
			DateWithSlash: "1360/01/01",
			DateWithOutSlash: "13600101"
		},
		stime: 353968200000,
		gdate: [1981, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 2, 21] },
		gtime: 353968200000
	},
	{
		sdate: [1360, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 2],
			DateTime: "1360-01-02 00:00:00",
			DateAber: "02 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Sun 02 Far 1360",
			DateDoy: "1360.001",
			DateWoy: "1360W01-2",
			DateWithSlash: "1360/01/02",
			DateWithOutSlash: "13600102"
		},
		stime: 354054600000,
		gdate: [1981, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 2, 22] },
		gtime: 354054600000
	},
	{
		sdate: [1360, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 3],
			DateTime: "1360-01-03 00:00:00",
			DateAber: "03 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Mon 03 Far 1360",
			DateDoy: "1360.002",
			DateWoy: "1360W01-3",
			DateWithSlash: "1360/01/03",
			DateWithOutSlash: "13600103"
		},
		stime: 354141000000,
		gdate: [1981, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 2, 23] },
		gtime: 354141000000
	},
	{
		sdate: [1360, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 4],
			DateTime: "1360-01-04 00:00:00",
			DateAber: "04 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Tue 04 Far 1360",
			DateDoy: "1360.003",
			DateWoy: "1360W01-4",
			DateWithSlash: "1360/01/04",
			DateWithOutSlash: "13600104"
		},
		stime: 354227400000,
		gdate: [1981, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 2, 24] },
		gtime: 354227400000
	},
	{
		sdate: [1360, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 5],
			DateTime: "1360-01-05 00:00:00",
			DateAber: "05 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Wed 05 Far 1360",
			DateDoy: "1360.004",
			DateWoy: "1360W01-5",
			DateWithSlash: "1360/01/05",
			DateWithOutSlash: "13600105"
		},
		stime: 354313800000,
		gdate: [1981, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 2, 25] },
		gtime: 354313800000
	},
	{
		sdate: [1360, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 6],
			DateTime: "1360-01-06 00:00:00",
			DateAber: "06 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Thu 06 Far 1360",
			DateDoy: "1360.005",
			DateWoy: "1360W01-6",
			DateWithSlash: "1360/01/06",
			DateWithOutSlash: "13600106"
		},
		stime: 354400200000,
		gdate: [1981, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 2, 26] },
		gtime: 354400200000
	},
	{
		sdate: [1360, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 7],
			DateTime: "1360-01-07 00:00:00",
			DateAber: "07 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Fri 07 Far 1360",
			DateDoy: "1360.006",
			DateWoy: "1360W01-7",
			DateWithSlash: "1360/01/07",
			DateWithOutSlash: "13600107"
		},
		stime: 354486600000,
		gdate: [1981, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 2, 27] },
		gtime: 354486600000
	},
	{
		sdate: [1360, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 15],
			DateTime: "1360-01-15 00:00:00",
			DateAber: "15 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Sat 15 Far 1360",
			DateDoy: "1360.014",
			DateWoy: "1360W03-1",
			DateWithSlash: "1360/01/15",
			DateWithOutSlash: "13600115"
		},
		stime: 355177800000,
		gdate: [1981, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 3, 4] },
		gtime: 355177800000
	},
	{
		sdate: [1360, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 29],
			DateTime: "1360-01-29 00:00:00",
			DateAber: "29 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Sat 29 Far 1360",
			DateDoy: "1360.028",
			DateWoy: "1360W05-1",
			DateWithSlash: "1360/01/29",
			DateWithOutSlash: "13600129"
		},
		stime: 356387400000,
		gdate: [1981, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 3, 18] },
		gtime: 356387400000
	},
	{
		sdate: [1360, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 30],
			DateTime: "1360-01-30 00:00:00",
			DateAber: "30 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Sun 30 Far 1360",
			DateDoy: "1360.029",
			DateWoy: "1360W05-2",
			DateWithSlash: "1360/01/30",
			DateWithOutSlash: "13600130"
		},
		stime: 356473800000,
		gdate: [1981, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 3, 19] },
		gtime: 356473800000
	},
	{
		sdate: [1360, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 31],
			DateTime: "1360-01-31 00:00:00",
			DateAber: "31 Far 1360",
			DateMonth: "Far",
			DateYearMonth: "1360-Far",
			DateYear: "1360",
			DateAberWithDate: "Mon 31 Far 1360",
			DateDoy: "1360.030",
			DateWoy: "1360W05-3",
			DateWithSlash: "1360/01/31",
			DateWithOutSlash: "13600131"
		},
		stime: 356560200000,
		gdate: [1981, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 3, 20] },
		gtime: 356560200000
	},
	{
		sdate: [1360, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 1],
			DateTime: "1360-02-01 00:00:00",
			DateAber: "01 Ord 1360",
			DateMonth: "Ord",
			DateYearMonth: "1360-Ord",
			DateYear: "1360",
			DateAberWithDate: "Tue 01 Ord 1360",
			DateDoy: "1360.031",
			DateWoy: "1360W05-4",
			DateWithSlash: "1360/02/01",
			DateWithOutSlash: "13600201"
		},
		stime: 356646600000,
		gdate: [1981, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 3, 21] },
		gtime: 356646600000
	},
	{
		sdate: [1360, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 2],
			DateTime: "1360-02-02 00:00:00",
			DateAber: "02 Ord 1360",
			DateMonth: "Ord",
			DateYearMonth: "1360-Ord",
			DateYear: "1360",
			DateAberWithDate: "Wed 02 Ord 1360",
			DateDoy: "1360.032",
			DateWoy: "1360W05-5",
			DateWithSlash: "1360/02/02",
			DateWithOutSlash: "13600202"
		},
		stime: 356733000000,
		gdate: [1981, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 3, 22] },
		gtime: 356733000000
	},
	{
		sdate: [1360, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 15],
			DateTime: "1360-02-15 00:00:00",
			DateAber: "15 Ord 1360",
			DateMonth: "Ord",
			DateYearMonth: "1360-Ord",
			DateYear: "1360",
			DateAberWithDate: "Tue 15 Ord 1360",
			DateDoy: "1360.045",
			DateWoy: "1360W07-4",
			DateWithSlash: "1360/02/15",
			DateWithOutSlash: "13600215"
		},
		stime: 357856200000,
		gdate: [1981, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 4, 5] },
		gtime: 357856200000
	},
	{
		sdate: [1360, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 30],
			DateTime: "1360-02-30 00:00:00",
			DateAber: "30 Ord 1360",
			DateMonth: "Ord",
			DateYearMonth: "1360-Ord",
			DateYear: "1360",
			DateAberWithDate: "Wed 30 Ord 1360",
			DateDoy: "1360.060",
			DateWoy: "1360W09-5",
			DateWithSlash: "1360/02/30",
			DateWithOutSlash: "13600230"
		},
		stime: 359152200000,
		gdate: [1981, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 4, 20] },
		gtime: 359152200000
	},
	{
		sdate: [1360, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 31],
			DateTime: "1360-02-31 00:00:00",
			DateAber: "31 Ord 1360",
			DateMonth: "Ord",
			DateYearMonth: "1360-Ord",
			DateYear: "1360",
			DateAberWithDate: "Thu 31 Ord 1360",
			DateDoy: "1360.061",
			DateWoy: "1360W09-6",
			DateWithSlash: "1360/02/31",
			DateWithOutSlash: "13600231"
		},
		stime: 359238600000,
		gdate: [1981, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 4, 21] },
		gtime: 359238600000
	},
	{
		sdate: [1360, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 1],
			DateTime: "1360-03-01 00:00:00",
			DateAber: "01 Kho 1360",
			DateMonth: "Kho",
			DateYearMonth: "1360-Kho",
			DateYear: "1360",
			DateAberWithDate: "Fri 01 Kho 1360",
			DateDoy: "1360.062",
			DateWoy: "1360W09-7",
			DateWithSlash: "1360/03/01",
			DateWithOutSlash: "13600301"
		},
		stime: 359325000000,
		gdate: [1981, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 4, 22] },
		gtime: 359325000000
	},
	{
		sdate: [1360, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 2],
			DateTime: "1360-03-02 00:00:00",
			DateAber: "02 Kho 1360",
			DateMonth: "Kho",
			DateYearMonth: "1360-Kho",
			DateYear: "1360",
			DateAberWithDate: "Sat 02 Kho 1360",
			DateDoy: "1360.063",
			DateWoy: "1360W10-1",
			DateWithSlash: "1360/03/02",
			DateWithOutSlash: "13600302"
		},
		stime: 359411400000,
		gdate: [1981, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 4, 23] },
		gtime: 359411400000
	},
	{
		sdate: [1360, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 15],
			DateTime: "1360-03-15 00:00:00",
			DateAber: "15 Kho 1360",
			DateMonth: "Kho",
			DateYearMonth: "1360-Kho",
			DateYear: "1360",
			DateAberWithDate: "Fri 15 Kho 1360",
			DateDoy: "1360.076",
			DateWoy: "1360W11-7",
			DateWithSlash: "1360/03/15",
			DateWithOutSlash: "13600315"
		},
		stime: 360534600000,
		gdate: [1981, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 5, 5] },
		gtime: 360534600000
	},
	{
		sdate: [1360, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 30],
			DateTime: "1360-03-30 00:00:00",
			DateAber: "30 Kho 1360",
			DateMonth: "Kho",
			DateYearMonth: "1360-Kho",
			DateYear: "1360",
			DateAberWithDate: "Sat 30 Kho 1360",
			DateDoy: "1360.091",
			DateWoy: "1360W14-1",
			DateWithSlash: "1360/03/30",
			DateWithOutSlash: "13600330"
		},
		stime: 361830600000,
		gdate: [1981, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 5, 20] },
		gtime: 361830600000
	},
	{
		sdate: [1360, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 31],
			DateTime: "1360-03-31 00:00:00",
			DateAber: "31 Kho 1360",
			DateMonth: "Kho",
			DateYearMonth: "1360-Kho",
			DateYear: "1360",
			DateAberWithDate: "Sun 31 Kho 1360",
			DateDoy: "1360.092",
			DateWoy: "1360W14-2",
			DateWithSlash: "1360/03/31",
			DateWithOutSlash: "13600331"
		},
		stime: 361917000000,
		gdate: [1981, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 5, 21] },
		gtime: 361917000000
	},
	{
		sdate: [1360, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 1],
			DateTime: "1360-04-01 00:00:00",
			DateAber: "01 Tir 1360",
			DateMonth: "Tir",
			DateYearMonth: "1360-Tir",
			DateYear: "1360",
			DateAberWithDate: "Mon 01 Tir 1360",
			DateDoy: "1360.093",
			DateWoy: "1360W14-3",
			DateWithSlash: "1360/04/01",
			DateWithOutSlash: "13600401"
		},
		stime: 362003400000,
		gdate: [1981, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 5, 22] },
		gtime: 362003400000
	},
	{
		sdate: [1360, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 2],
			DateTime: "1360-04-02 00:00:00",
			DateAber: "02 Tir 1360",
			DateMonth: "Tir",
			DateYearMonth: "1360-Tir",
			DateYear: "1360",
			DateAberWithDate: "Tue 02 Tir 1360",
			DateDoy: "1360.094",
			DateWoy: "1360W14-4",
			DateWithSlash: "1360/04/02",
			DateWithOutSlash: "13600402"
		},
		stime: 362089800000,
		gdate: [1981, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 5, 23] },
		gtime: 362089800000
	},
	{
		sdate: [1360, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 15],
			DateTime: "1360-04-15 00:00:00",
			DateAber: "15 Tir 1360",
			DateMonth: "Tir",
			DateYearMonth: "1360-Tir",
			DateYear: "1360",
			DateAberWithDate: "Mon 15 Tir 1360",
			DateDoy: "1360.107",
			DateWoy: "1360W16-3",
			DateWithSlash: "1360/04/15",
			DateWithOutSlash: "13600415"
		},
		stime: 363213000000,
		gdate: [1981, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 6, 6] },
		gtime: 363213000000
	},
	{
		sdate: [1360, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 30],
			DateTime: "1360-04-30 00:00:00",
			DateAber: "30 Tir 1360",
			DateMonth: "Tir",
			DateYearMonth: "1360-Tir",
			DateYear: "1360",
			DateAberWithDate: "Tue 30 Tir 1360",
			DateDoy: "1360.122",
			DateWoy: "1360W18-4",
			DateWithSlash: "1360/04/30",
			DateWithOutSlash: "13600430"
		},
		stime: 364509000000,
		gdate: [1981, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 6, 21] },
		gtime: 364509000000
	},
	{
		sdate: [1360, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 31],
			DateTime: "1360-04-31 00:00:00",
			DateAber: "31 Tir 1360",
			DateMonth: "Tir",
			DateYearMonth: "1360-Tir",
			DateYear: "1360",
			DateAberWithDate: "Wed 31 Tir 1360",
			DateDoy: "1360.123",
			DateWoy: "1360W18-5",
			DateWithSlash: "1360/04/31",
			DateWithOutSlash: "13600431"
		},
		stime: 364595400000,
		gdate: [1981, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 6, 22] },
		gtime: 364595400000
	},
	{
		sdate: [1360, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 1],
			DateTime: "1360-05-01 00:00:00",
			DateAber: "01 Amo 1360",
			DateMonth: "Amo",
			DateYearMonth: "1360-Amo",
			DateYear: "1360",
			DateAberWithDate: "Thu 01 Amo 1360",
			DateDoy: "1360.124",
			DateWoy: "1360W18-6",
			DateWithSlash: "1360/05/01",
			DateWithOutSlash: "13600501"
		},
		stime: 364681800000,
		gdate: [1981, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 6, 23] },
		gtime: 364681800000
	},
	{
		sdate: [1360, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 2],
			DateTime: "1360-05-02 00:00:00",
			DateAber: "02 Amo 1360",
			DateMonth: "Amo",
			DateYearMonth: "1360-Amo",
			DateYear: "1360",
			DateAberWithDate: "Fri 02 Amo 1360",
			DateDoy: "1360.125",
			DateWoy: "1360W18-7",
			DateWithSlash: "1360/05/02",
			DateWithOutSlash: "13600502"
		},
		stime: 364768200000,
		gdate: [1981, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 6, 24] },
		gtime: 364768200000
	},
	{
		sdate: [1360, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 15],
			DateTime: "1360-05-15 00:00:00",
			DateAber: "15 Amo 1360",
			DateMonth: "Amo",
			DateYearMonth: "1360-Amo",
			DateYear: "1360",
			DateAberWithDate: "Thu 15 Amo 1360",
			DateDoy: "1360.138",
			DateWoy: "1360W20-6",
			DateWithSlash: "1360/05/15",
			DateWithOutSlash: "13600515"
		},
		stime: 365891400000,
		gdate: [1981, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 7, 6] },
		gtime: 365891400000
	},
	{
		sdate: [1360, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 30],
			DateTime: "1360-05-30 00:00:00",
			DateAber: "30 Amo 1360",
			DateMonth: "Amo",
			DateYearMonth: "1360-Amo",
			DateYear: "1360",
			DateAberWithDate: "Fri 30 Amo 1360",
			DateDoy: "1360.153",
			DateWoy: "1360W22-7",
			DateWithSlash: "1360/05/30",
			DateWithOutSlash: "13600530"
		},
		stime: 367187400000,
		gdate: [1981, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 7, 21] },
		gtime: 367187400000
	},
	{
		sdate: [1360, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 31],
			DateTime: "1360-05-31 00:00:00",
			DateAber: "31 Amo 1360",
			DateMonth: "Amo",
			DateYearMonth: "1360-Amo",
			DateYear: "1360",
			DateAberWithDate: "Sat 31 Amo 1360",
			DateDoy: "1360.154",
			DateWoy: "1360W23-1",
			DateWithSlash: "1360/05/31",
			DateWithOutSlash: "13600531"
		},
		stime: 367273800000,
		gdate: [1981, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 7, 22] },
		gtime: 367273800000
	},
	{
		sdate: [1360, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 1],
			DateTime: "1360-06-01 00:00:00",
			DateAber: "01 Sha 1360",
			DateMonth: "Sha",
			DateYearMonth: "1360-Sha",
			DateYear: "1360",
			DateAberWithDate: "Sun 01 Sha 1360",
			DateDoy: "1360.155",
			DateWoy: "1360W23-2",
			DateWithSlash: "1360/06/01",
			DateWithOutSlash: "13600601"
		},
		stime: 367360200000,
		gdate: [1981, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 7, 23] },
		gtime: 367360200000
	},
	{
		sdate: [1360, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 2],
			DateTime: "1360-06-02 00:00:00",
			DateAber: "02 Sha 1360",
			DateMonth: "Sha",
			DateYearMonth: "1360-Sha",
			DateYear: "1360",
			DateAberWithDate: "Mon 02 Sha 1360",
			DateDoy: "1360.156",
			DateWoy: "1360W23-3",
			DateWithSlash: "1360/06/02",
			DateWithOutSlash: "13600602"
		},
		stime: 367446600000,
		gdate: [1981, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 7, 24] },
		gtime: 367446600000
	},
	{
		sdate: [1360, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 15],
			DateTime: "1360-06-15 00:00:00",
			DateAber: "15 Sha 1360",
			DateMonth: "Sha",
			DateYearMonth: "1360-Sha",
			DateYear: "1360",
			DateAberWithDate: "Sun 15 Sha 1360",
			DateDoy: "1360.169",
			DateWoy: "1360W25-2",
			DateWithSlash: "1360/06/15",
			DateWithOutSlash: "13600615"
		},
		stime: 368569800000,
		gdate: [1981, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 8, 6] },
		gtime: 368569800000
	},
	{
		sdate: [1360, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 29],
			DateTime: "1360-06-29 00:00:00",
			DateAber: "29 Sha 1360",
			DateMonth: "Sha",
			DateYearMonth: "1360-Sha",
			DateYear: "1360",
			DateAberWithDate: "Sun 29 Sha 1360",
			DateDoy: "1360.183",
			DateWoy: "1360W27-2",
			DateWithSlash: "1360/06/29",
			DateWithOutSlash: "13600629"
		},
		stime: 369779400000,
		gdate: [1981, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 8, 20] },
		gtime: 369779400000
	},
	{
		sdate: [1360, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 30],
			DateTime: "1360-06-30 00:00:00",
			DateAber: "30 Sha 1360",
			DateMonth: "Sha",
			DateYearMonth: "1360-Sha",
			DateYear: "1360",
			DateAberWithDate: "Mon 30 Sha 1360",
			DateDoy: "1360.184",
			DateWoy: "1360W27-3",
			DateWithSlash: "1360/06/30",
			DateWithOutSlash: "13600630"
		},
		stime: 369865800000,
		gdate: [1981, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 8, 21] },
		gtime: 369865800000
	},
	{
		sdate: [1360, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 1],
			DateTime: "1360-07-01 00:00:00",
			DateAber: "01 Meh 1360",
			DateMonth: "Meh",
			DateYearMonth: "1360-Meh",
			DateYear: "1360",
			DateAberWithDate: "Wed 01 Meh 1360",
			DateDoy: "1360.186",
			DateWoy: "1360W27-5",
			DateWithSlash: "1360/07/01",
			DateWithOutSlash: "13600701"
		},
		stime: 370038600000,
		gdate: [1981, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 8, 23] },
		gtime: 370038600000
	},
	{
		sdate: [1360, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 2],
			DateTime: "1360-07-02 00:00:00",
			DateAber: "02 Meh 1360",
			DateMonth: "Meh",
			DateYearMonth: "1360-Meh",
			DateYear: "1360",
			DateAberWithDate: "Thu 02 Meh 1360",
			DateDoy: "1360.187",
			DateWoy: "1360W27-6",
			DateWithSlash: "1360/07/02",
			DateWithOutSlash: "13600702"
		},
		stime: 370125000000,
		gdate: [1981, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 8, 24] },
		gtime: 370125000000
	},
	{
		sdate: [1360, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 15],
			DateTime: "1360-07-15 00:00:00",
			DateAber: "15 Meh 1360",
			DateMonth: "Meh",
			DateYearMonth: "1360-Meh",
			DateYear: "1360",
			DateAberWithDate: "Wed 15 Meh 1360",
			DateDoy: "1360.200",
			DateWoy: "1360W29-5",
			DateWithSlash: "1360/07/15",
			DateWithOutSlash: "13600715"
		},
		stime: 371248200000,
		gdate: [1981, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 9, 7] },
		gtime: 371248200000
	},
	{
		sdate: [1360, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 29],
			DateTime: "1360-07-29 00:00:00",
			DateAber: "29 Meh 1360",
			DateMonth: "Meh",
			DateYearMonth: "1360-Meh",
			DateYear: "1360",
			DateAberWithDate: "Wed 29 Meh 1360",
			DateDoy: "1360.214",
			DateWoy: "1360W31-5",
			DateWithSlash: "1360/07/29",
			DateWithOutSlash: "13600729"
		},
		stime: 372457800000,
		gdate: [1981, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 9, 21] },
		gtime: 372457800000
	},
	{
		sdate: [1360, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 30],
			DateTime: "1360-07-30 00:00:00",
			DateAber: "30 Meh 1360",
			DateMonth: "Meh",
			DateYearMonth: "1360-Meh",
			DateYear: "1360",
			DateAberWithDate: "Thu 30 Meh 1360",
			DateDoy: "1360.215",
			DateWoy: "1360W31-6",
			DateWithSlash: "1360/07/30",
			DateWithOutSlash: "13600730"
		},
		stime: 372544200000,
		gdate: [1981, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 9, 22] },
		gtime: 372544200000
	},
	{
		sdate: [1360, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 1],
			DateTime: "1360-08-01 00:00:00",
			DateAber: "01 Aba 1360",
			DateMonth: "Aba",
			DateYearMonth: "1360-Aba",
			DateYear: "1360",
			DateAberWithDate: "Fri 01 Aba 1360",
			DateDoy: "1360.216",
			DateWoy: "1360W31-7",
			DateWithSlash: "1360/08/01",
			DateWithOutSlash: "13600801"
		},
		stime: 372630600000,
		gdate: [1981, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 9, 23] },
		gtime: 372630600000
	},
	{
		sdate: [1360, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 2],
			DateTime: "1360-08-02 00:00:00",
			DateAber: "02 Aba 1360",
			DateMonth: "Aba",
			DateYearMonth: "1360-Aba",
			DateYear: "1360",
			DateAberWithDate: "Sat 02 Aba 1360",
			DateDoy: "1360.217",
			DateWoy: "1360W32-1",
			DateWithSlash: "1360/08/02",
			DateWithOutSlash: "13600802"
		},
		stime: 372717000000,
		gdate: [1981, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 9, 24] },
		gtime: 372717000000
	},
	{
		sdate: [1360, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 15],
			DateTime: "1360-08-15 00:00:00",
			DateAber: "15 Aba 1360",
			DateMonth: "Aba",
			DateYearMonth: "1360-Aba",
			DateYear: "1360",
			DateAberWithDate: "Fri 15 Aba 1360",
			DateDoy: "1360.230",
			DateWoy: "1360W33-7",
			DateWithSlash: "1360/08/15",
			DateWithOutSlash: "13600815"
		},
		stime: 373840200000,
		gdate: [1981, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 10, 6] },
		gtime: 373840200000
	},
	{
		sdate: [1360, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 29],
			DateTime: "1360-08-29 00:00:00",
			DateAber: "29 Aba 1360",
			DateMonth: "Aba",
			DateYearMonth: "1360-Aba",
			DateYear: "1360",
			DateAberWithDate: "Fri 29 Aba 1360",
			DateDoy: "1360.244",
			DateWoy: "1360W35-7",
			DateWithSlash: "1360/08/29",
			DateWithOutSlash: "13600829"
		},
		stime: 375049800000,
		gdate: [1981, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 10, 20] },
		gtime: 375049800000
	},
	{
		sdate: [1360, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 30],
			DateTime: "1360-08-30 00:00:00",
			DateAber: "30 Aba 1360",
			DateMonth: "Aba",
			DateYearMonth: "1360-Aba",
			DateYear: "1360",
			DateAberWithDate: "Sat 30 Aba 1360",
			DateDoy: "1360.245",
			DateWoy: "1360W36-1",
			DateWithSlash: "1360/08/30",
			DateWithOutSlash: "13600830"
		},
		stime: 375136200000,
		gdate: [1981, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 10, 21] },
		gtime: 375136200000
	},
	{
		sdate: [1360, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 1],
			DateTime: "1360-09-01 00:00:00",
			DateAber: "01 Aza 1360",
			DateMonth: "Aza",
			DateYearMonth: "1360-Aza",
			DateYear: "1360",
			DateAberWithDate: "Sun 01 Aza 1360",
			DateDoy: "1360.246",
			DateWoy: "1360W36-2",
			DateWithSlash: "1360/09/01",
			DateWithOutSlash: "13600901"
		},
		stime: 375222600000,
		gdate: [1981, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 10, 22] },
		gtime: 375222600000
	},
	{
		sdate: [1360, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 2],
			DateTime: "1360-09-02 00:00:00",
			DateAber: "02 Aza 1360",
			DateMonth: "Aza",
			DateYearMonth: "1360-Aza",
			DateYear: "1360",
			DateAberWithDate: "Mon 02 Aza 1360",
			DateDoy: "1360.247",
			DateWoy: "1360W36-3",
			DateWithSlash: "1360/09/02",
			DateWithOutSlash: "13600902"
		},
		stime: 375309000000,
		gdate: [1981, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 10, 23] },
		gtime: 375309000000
	},
	{
		sdate: [1360, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 15],
			DateTime: "1360-09-15 00:00:00",
			DateAber: "15 Aza 1360",
			DateMonth: "Aza",
			DateYearMonth: "1360-Aza",
			DateYear: "1360",
			DateAberWithDate: "Sun 15 Aza 1360",
			DateDoy: "1360.260",
			DateWoy: "1360W38-2",
			DateWithSlash: "1360/09/15",
			DateWithOutSlash: "13600915"
		},
		stime: 376432200000,
		gdate: [1981, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 11, 6] },
		gtime: 376432200000
	},
	{
		sdate: [1360, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 29],
			DateTime: "1360-09-29 00:00:00",
			DateAber: "29 Aza 1360",
			DateMonth: "Aza",
			DateYearMonth: "1360-Aza",
			DateYear: "1360",
			DateAberWithDate: "Sun 29 Aza 1360",
			DateDoy: "1360.274",
			DateWoy: "1360W40-2",
			DateWithSlash: "1360/09/29",
			DateWithOutSlash: "13600929"
		},
		stime: 377641800000,
		gdate: [1981, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 11, 20] },
		gtime: 377641800000
	},
	{
		sdate: [1360, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 30],
			DateTime: "1360-09-30 00:00:00",
			DateAber: "30 Aza 1360",
			DateMonth: "Aza",
			DateYearMonth: "1360-Aza",
			DateYear: "1360",
			DateAberWithDate: "Mon 30 Aza 1360",
			DateDoy: "1360.275",
			DateWoy: "1360W40-3",
			DateWithSlash: "1360/09/30",
			DateWithOutSlash: "13600930"
		},
		stime: 377728200000,
		gdate: [1981, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 11, 21] },
		gtime: 377728200000
	},
	{
		sdate: [1360, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 1],
			DateTime: "1360-10-01 00:00:00",
			DateAber: "01 Dey 1360",
			DateMonth: "Dey",
			DateYearMonth: "1360-Dey",
			DateYear: "1360",
			DateAberWithDate: "Tue 01 Dey 1360",
			DateDoy: "1360.276",
			DateWoy: "1360W40-4",
			DateWithSlash: "1360/10/01",
			DateWithOutSlash: "13601001"
		},
		stime: 377814600000,
		gdate: [1981, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 11, 22] },
		gtime: 377814600000
	},
	{
		sdate: [1360, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 2],
			DateTime: "1360-10-02 00:00:00",
			DateAber: "02 Dey 1360",
			DateMonth: "Dey",
			DateYearMonth: "1360-Dey",
			DateYear: "1360",
			DateAberWithDate: "Wed 02 Dey 1360",
			DateDoy: "1360.277",
			DateWoy: "1360W40-5",
			DateWithSlash: "1360/10/02",
			DateWithOutSlash: "13601002"
		},
		stime: 377901000000,
		gdate: [1981, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1981, 11, 23] },
		gtime: 377901000000
	},
	{
		sdate: [1360, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 15],
			DateTime: "1360-10-15 00:00:00",
			DateAber: "15 Dey 1360",
			DateMonth: "Dey",
			DateYearMonth: "1360-Dey",
			DateYear: "1360",
			DateAberWithDate: "Tue 15 Dey 1360",
			DateDoy: "1360.290",
			DateWoy: "1360W42-4",
			DateWithSlash: "1360/10/15",
			DateWithOutSlash: "13601015"
		},
		stime: 379024200000,
		gdate: [1982, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 0, 5] },
		gtime: 379024200000
	},
	{
		sdate: [1360, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 29],
			DateTime: "1360-10-29 00:00:00",
			DateAber: "29 Dey 1360",
			DateMonth: "Dey",
			DateYearMonth: "1360-Dey",
			DateYear: "1360",
			DateAberWithDate: "Tue 29 Dey 1360",
			DateDoy: "1360.304",
			DateWoy: "1360W44-4",
			DateWithSlash: "1360/10/29",
			DateWithOutSlash: "13601029"
		},
		stime: 380233800000,
		gdate: [1982, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 0, 19] },
		gtime: 380233800000
	},
	{
		sdate: [1360, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 30],
			DateTime: "1360-10-30 00:00:00",
			DateAber: "30 Dey 1360",
			DateMonth: "Dey",
			DateYearMonth: "1360-Dey",
			DateYear: "1360",
			DateAberWithDate: "Wed 30 Dey 1360",
			DateDoy: "1360.305",
			DateWoy: "1360W44-5",
			DateWithSlash: "1360/10/30",
			DateWithOutSlash: "13601030"
		},
		stime: 380320200000,
		gdate: [1982, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 0, 20] },
		gtime: 380320200000
	},
	{
		sdate: [1360, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 1],
			DateTime: "1360-11-01 00:00:00",
			DateAber: "01 Bah 1360",
			DateMonth: "Bah",
			DateYearMonth: "1360-Bah",
			DateYear: "1360",
			DateAberWithDate: "Thu 01 Bah 1360",
			DateDoy: "1360.306",
			DateWoy: "1360W44-6",
			DateWithSlash: "1360/11/01",
			DateWithOutSlash: "13601101"
		},
		stime: 380406600000,
		gdate: [1982, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 0, 21] },
		gtime: 380406600000
	},
	{
		sdate: [1360, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 2],
			DateTime: "1360-11-02 00:00:00",
			DateAber: "02 Bah 1360",
			DateMonth: "Bah",
			DateYearMonth: "1360-Bah",
			DateYear: "1360",
			DateAberWithDate: "Fri 02 Bah 1360",
			DateDoy: "1360.307",
			DateWoy: "1360W44-7",
			DateWithSlash: "1360/11/02",
			DateWithOutSlash: "13601102"
		},
		stime: 380493000000,
		gdate: [1982, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 0, 22] },
		gtime: 380493000000
	},
	{
		sdate: [1360, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 15],
			DateTime: "1360-11-15 00:00:00",
			DateAber: "15 Bah 1360",
			DateMonth: "Bah",
			DateYearMonth: "1360-Bah",
			DateYear: "1360",
			DateAberWithDate: "Thu 15 Bah 1360",
			DateDoy: "1360.320",
			DateWoy: "1360W46-6",
			DateWithSlash: "1360/11/15",
			DateWithOutSlash: "13601115"
		},
		stime: 381616200000,
		gdate: [1982, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 1, 4] },
		gtime: 381616200000
	},
	{
		sdate: [1360, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 29],
			DateTime: "1360-11-29 00:00:00",
			DateAber: "29 Bah 1360",
			DateMonth: "Bah",
			DateYearMonth: "1360-Bah",
			DateYear: "1360",
			DateAberWithDate: "Thu 29 Bah 1360",
			DateDoy: "1360.334",
			DateWoy: "1360W48-6",
			DateWithSlash: "1360/11/29",
			DateWithOutSlash: "13601129"
		},
		stime: 382825800000,
		gdate: [1982, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 1, 18] },
		gtime: 382825800000
	},
	{
		sdate: [1360, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 30],
			DateTime: "1360-11-30 00:00:00",
			DateAber: "30 Bah 1360",
			DateMonth: "Bah",
			DateYearMonth: "1360-Bah",
			DateYear: "1360",
			DateAberWithDate: "Fri 30 Bah 1360",
			DateDoy: "1360.335",
			DateWoy: "1360W48-7",
			DateWithSlash: "1360/11/30",
			DateWithOutSlash: "13601130"
		},
		stime: 382912200000,
		gdate: [1982, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 1, 19] },
		gtime: 382912200000
	},
	{
		sdate: [1360, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 1],
			DateTime: "1360-12-01 00:00:00",
			DateAber: "01 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Sat 01 Esf 1360",
			DateDoy: "1360.336",
			DateWoy: "1360W49-1",
			DateWithSlash: "1360/12/01",
			DateWithOutSlash: "13601201"
		},
		stime: 382998600000,
		gdate: [1982, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 1, 20] },
		gtime: 382998600000
	},
	{
		sdate: [1360, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 2],
			DateTime: "1360-12-02 00:00:00",
			DateAber: "02 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Sun 02 Esf 1360",
			DateDoy: "1360.337",
			DateWoy: "1360W49-2",
			DateWithSlash: "1360/12/02",
			DateWithOutSlash: "13601202"
		},
		stime: 383085000000,
		gdate: [1982, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 1, 21] },
		gtime: 383085000000
	},
	{
		sdate: [1360, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 3],
			DateTime: "1360-12-03 00:00:00",
			DateAber: "03 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Mon 03 Esf 1360",
			DateDoy: "1360.338",
			DateWoy: "1360W49-3",
			DateWithSlash: "1360/12/03",
			DateWithOutSlash: "13601203"
		},
		stime: 383171400000,
		gdate: [1982, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 1, 22] },
		gtime: 383171400000
	},
	{
		sdate: [1360, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 4],
			DateTime: "1360-12-04 00:00:00",
			DateAber: "04 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Tue 04 Esf 1360",
			DateDoy: "1360.339",
			DateWoy: "1360W49-4",
			DateWithSlash: "1360/12/04",
			DateWithOutSlash: "13601204"
		},
		stime: 383257800000,
		gdate: [1982, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 1, 23] },
		gtime: 383257800000
	},
	{
		sdate: [1360, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 15],
			DateTime: "1360-12-15 00:00:00",
			DateAber: "15 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Sat 15 Esf 1360",
			DateDoy: "1360.350",
			DateWoy: "1360W51-1",
			DateWithSlash: "1360/12/15",
			DateWithOutSlash: "13601215"
		},
		stime: 384208200000,
		gdate: [1982, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 2, 6] },
		gtime: 384208200000
	},
	{
		sdate: [1360, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 25],
			DateTime: "1360-12-25 00:00:00",
			DateAber: "25 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Tue 25 Esf 1360",
			DateDoy: "1360.360",
			DateWoy: "1360W52-4",
			DateWithSlash: "1360/12/25",
			DateWithOutSlash: "13601225"
		},
		stime: 385072200000,
		gdate: [1982, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 2, 16] },
		gtime: 385072200000
	},
	{
		sdate: [1360, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 26],
			DateTime: "1360-12-26 00:00:00",
			DateAber: "26 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Wed 26 Esf 1360",
			DateDoy: "1360.361",
			DateWoy: "1360W52-5",
			DateWithSlash: "1360/12/26",
			DateWithOutSlash: "13601226"
		},
		stime: 385158600000,
		gdate: [1982, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 2, 17] },
		gtime: 385158600000
	},
	{
		sdate: [1360, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 27],
			DateTime: "1360-12-27 00:00:00",
			DateAber: "27 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Thu 27 Esf 1360",
			DateDoy: "1360.362",
			DateWoy: "1360W52-6",
			DateWithSlash: "1360/12/27",
			DateWithOutSlash: "13601227"
		},
		stime: 385245000000,
		gdate: [1982, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 2, 18] },
		gtime: 385245000000
	},
	{
		sdate: [1360, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 28],
			DateTime: "1360-12-28 00:00:00",
			DateAber: "28 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Fri 28 Esf 1360",
			DateDoy: "1360.363",
			DateWoy: "1360W52-7",
			DateWithSlash: "1360/12/28",
			DateWithOutSlash: "13601228"
		},
		stime: 385331400000,
		gdate: [1982, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 2, 19] },
		gtime: 385331400000
	},
	{
		sdate: [1360, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 29],
			DateTime: "1360-12-29 00:00:00",
			DateAber: "29 Esf 1360",
			DateMonth: "Esf",
			DateYearMonth: "1360-Esf",
			DateYear: "1360",
			DateAberWithDate: "Sat 29 Esf 1360",
			DateDoy: "1360.364",
			DateWoy: "1361W01-1",
			DateWithSlash: "1360/12/29",
			DateWithOutSlash: "13601229"
		},
		stime: 385417800000,
		gdate: [1982, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 2, 20] },
		gtime: 385417800000
	},

	{
		sdate: [1380, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 1],
			DateTime: "1380-01-01 00:00:00",
			DateAber: "01 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Wed 01 Far 1380",
			DateDoy: "1380.000",
			DateWoy: "1379W53-5",
			DateWithSlash: "1380/01/01",
			DateWithOutSlash: "13800101"
		},
		stime: 985120200000,
		gdate: [2001, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 2, 21] },
		gtime: 985120200000
	},
	{
		sdate: [1380, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 2],
			DateTime: "1380-01-02 01:00:00",
			DateAber: "02 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Thu 02 Far 1380",
			DateDoy: "1380.001",
			DateWoy: "1379W53-6",
			DateWithSlash: "1380/01/02",
			DateWithOutSlash: "13800102"
		},
		stime: 985206600000,
		gdate: [2001, 3, 22, 1, 0, 0, 0],
		gdata: { gregorian: [2001, 2, 22] },
		gtime: 985206600000
	},
	{
		sdate: [1380, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 3],
			DateTime: "1380-01-03 00:00:00",
			DateAber: "03 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Fri 03 Far 1380",
			DateDoy: "1380.002",
			DateWoy: "1379W53-7",
			DateWithSlash: "1380/01/03",
			DateWithOutSlash: "13800103"
		},
		stime: 985289400000,
		gdate: [2001, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 2, 23] },
		gtime: 985289400000
	},
	{
		sdate: [1380, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 4],
			DateTime: "1380-01-04 00:00:00",
			DateAber: "04 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Sat 04 Far 1380",
			DateDoy: "1380.003",
			DateWoy: "1380W01-1",
			DateWithSlash: "1380/01/04",
			DateWithOutSlash: "13800104"
		},
		stime: 985375800000,
		gdate: [2001, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 2, 24] },
		gtime: 985375800000
	},
	{
		sdate: [1380, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 5],
			DateTime: "1380-01-05 00:00:00",
			DateAber: "05 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Sun 05 Far 1380",
			DateDoy: "1380.004",
			DateWoy: "1380W01-2",
			DateWithSlash: "1380/01/05",
			DateWithOutSlash: "13800105"
		},
		stime: 985462200000,
		gdate: [2001, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 2, 25] },
		gtime: 985462200000
	},
	{
		sdate: [1380, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 6],
			DateTime: "1380-01-06 00:00:00",
			DateAber: "06 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Mon 06 Far 1380",
			DateDoy: "1380.005",
			DateWoy: "1380W01-3",
			DateWithSlash: "1380/01/06",
			DateWithOutSlash: "13800106"
		},
		stime: 985548600000,
		gdate: [2001, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 2, 26] },
		gtime: 985548600000
	},
	{
		sdate: [1380, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 7],
			DateTime: "1380-01-07 00:00:00",
			DateAber: "07 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Tue 07 Far 1380",
			DateDoy: "1380.006",
			DateWoy: "1380W01-4",
			DateWithSlash: "1380/01/07",
			DateWithOutSlash: "13800107"
		},
		stime: 985635000000,
		gdate: [2001, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 2, 27] },
		gtime: 985635000000
	},
	{
		sdate: [1380, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 15],
			DateTime: "1380-01-15 00:00:00",
			DateAber: "15 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Wed 15 Far 1380",
			DateDoy: "1380.014",
			DateWoy: "1380W02-5",
			DateWithSlash: "1380/01/15",
			DateWithOutSlash: "13800115"
		},
		stime: 986326200000,
		gdate: [2001, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 3, 4] },
		gtime: 986326200000
	},
	{
		sdate: [1380, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 29],
			DateTime: "1380-01-29 00:00:00",
			DateAber: "29 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Wed 29 Far 1380",
			DateDoy: "1380.028",
			DateWoy: "1380W04-5",
			DateWithSlash: "1380/01/29",
			DateWithOutSlash: "13800129"
		},
		stime: 987535800000,
		gdate: [2001, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 3, 18] },
		gtime: 987535800000
	},
	{
		sdate: [1380, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 30],
			DateTime: "1380-01-30 00:00:00",
			DateAber: "30 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Thu 30 Far 1380",
			DateDoy: "1380.029",
			DateWoy: "1380W04-6",
			DateWithSlash: "1380/01/30",
			DateWithOutSlash: "13800130"
		},
		stime: 987622200000,
		gdate: [2001, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 3, 19] },
		gtime: 987622200000
	},
	{
		sdate: [1380, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 31],
			DateTime: "1380-01-31 00:00:00",
			DateAber: "31 Far 1380",
			DateMonth: "Far",
			DateYearMonth: "1380-Far",
			DateYear: "1380",
			DateAberWithDate: "Fri 31 Far 1380",
			DateDoy: "1380.030",
			DateWoy: "1380W04-7",
			DateWithSlash: "1380/01/31",
			DateWithOutSlash: "13800131"
		},
		stime: 987708600000,
		gdate: [2001, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 3, 20] },
		gtime: 987708600000
	},
	{
		sdate: [1380, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 1],
			DateTime: "1380-02-01 00:00:00",
			DateAber: "01 Ord 1380",
			DateMonth: "Ord",
			DateYearMonth: "1380-Ord",
			DateYear: "1380",
			DateAberWithDate: "Sat 01 Ord 1380",
			DateDoy: "1380.031",
			DateWoy: "1380W05-1",
			DateWithSlash: "1380/02/01",
			DateWithOutSlash: "13800201"
		},
		stime: 987795000000,
		gdate: [2001, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 3, 21] },
		gtime: 987795000000
	},
	{
		sdate: [1380, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 2],
			DateTime: "1380-02-02 00:00:00",
			DateAber: "02 Ord 1380",
			DateMonth: "Ord",
			DateYearMonth: "1380-Ord",
			DateYear: "1380",
			DateAberWithDate: "Sun 02 Ord 1380",
			DateDoy: "1380.032",
			DateWoy: "1380W05-2",
			DateWithSlash: "1380/02/02",
			DateWithOutSlash: "13800202"
		},
		stime: 987881400000,
		gdate: [2001, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 3, 22] },
		gtime: 987881400000
	},
	{
		sdate: [1380, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 15],
			DateTime: "1380-02-15 00:00:00",
			DateAber: "15 Ord 1380",
			DateMonth: "Ord",
			DateYearMonth: "1380-Ord",
			DateYear: "1380",
			DateAberWithDate: "Sat 15 Ord 1380",
			DateDoy: "1380.045",
			DateWoy: "1380W07-1",
			DateWithSlash: "1380/02/15",
			DateWithOutSlash: "13800215"
		},
		stime: 989004600000,
		gdate: [2001, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 4, 5] },
		gtime: 989004600000
	},
	{
		sdate: [1380, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 30],
			DateTime: "1380-02-30 00:00:00",
			DateAber: "30 Ord 1380",
			DateMonth: "Ord",
			DateYearMonth: "1380-Ord",
			DateYear: "1380",
			DateAberWithDate: "Sun 30 Ord 1380",
			DateDoy: "1380.060",
			DateWoy: "1380W09-2",
			DateWithSlash: "1380/02/30",
			DateWithOutSlash: "13800230"
		},
		stime: 990300600000,
		gdate: [2001, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 4, 20] },
		gtime: 990300600000
	},
	{
		sdate: [1380, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 31],
			DateTime: "1380-02-31 00:00:00",
			DateAber: "31 Ord 1380",
			DateMonth: "Ord",
			DateYearMonth: "1380-Ord",
			DateYear: "1380",
			DateAberWithDate: "Mon 31 Ord 1380",
			DateDoy: "1380.061",
			DateWoy: "1380W09-3",
			DateWithSlash: "1380/02/31",
			DateWithOutSlash: "13800231"
		},
		stime: 990387000000,
		gdate: [2001, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 4, 21] },
		gtime: 990387000000
	},
	{
		sdate: [1380, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 1],
			DateTime: "1380-03-01 00:00:00",
			DateAber: "01 Kho 1380",
			DateMonth: "Kho",
			DateYearMonth: "1380-Kho",
			DateYear: "1380",
			DateAberWithDate: "Tue 01 Kho 1380",
			DateDoy: "1380.062",
			DateWoy: "1380W09-4",
			DateWithSlash: "1380/03/01",
			DateWithOutSlash: "13800301"
		},
		stime: 990473400000,
		gdate: [2001, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 4, 22] },
		gtime: 990473400000
	},
	{
		sdate: [1380, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 2],
			DateTime: "1380-03-02 00:00:00",
			DateAber: "02 Kho 1380",
			DateMonth: "Kho",
			DateYearMonth: "1380-Kho",
			DateYear: "1380",
			DateAberWithDate: "Wed 02 Kho 1380",
			DateDoy: "1380.063",
			DateWoy: "1380W09-5",
			DateWithSlash: "1380/03/02",
			DateWithOutSlash: "13800302"
		},
		stime: 990559800000,
		gdate: [2001, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 4, 23] },
		gtime: 990559800000
	},
	{
		sdate: [1380, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 15],
			DateTime: "1380-03-15 00:00:00",
			DateAber: "15 Kho 1380",
			DateMonth: "Kho",
			DateYearMonth: "1380-Kho",
			DateYear: "1380",
			DateAberWithDate: "Tue 15 Kho 1380",
			DateDoy: "1380.076",
			DateWoy: "1380W11-4",
			DateWithSlash: "1380/03/15",
			DateWithOutSlash: "13800315"
		},
		stime: 991683000000,
		gdate: [2001, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 5, 5] },
		gtime: 991683000000
	},
	{
		sdate: [1380, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 30],
			DateTime: "1380-03-30 00:00:00",
			DateAber: "30 Kho 1380",
			DateMonth: "Kho",
			DateYearMonth: "1380-Kho",
			DateYear: "1380",
			DateAberWithDate: "Wed 30 Kho 1380",
			DateDoy: "1380.091",
			DateWoy: "1380W13-5",
			DateWithSlash: "1380/03/30",
			DateWithOutSlash: "13800330"
		},
		stime: 992979000000,
		gdate: [2001, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 5, 20] },
		gtime: 992979000000
	},
	{
		sdate: [1380, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 31],
			DateTime: "1380-03-31 00:00:00",
			DateAber: "31 Kho 1380",
			DateMonth: "Kho",
			DateYearMonth: "1380-Kho",
			DateYear: "1380",
			DateAberWithDate: "Thu 31 Kho 1380",
			DateDoy: "1380.092",
			DateWoy: "1380W13-6",
			DateWithSlash: "1380/03/31",
			DateWithOutSlash: "13800331"
		},
		stime: 993065400000,
		gdate: [2001, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 5, 21] },
		gtime: 993065400000
	},
	{
		sdate: [1380, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 1],
			DateTime: "1380-04-01 00:00:00",
			DateAber: "01 Tir 1380",
			DateMonth: "Tir",
			DateYearMonth: "1380-Tir",
			DateYear: "1380",
			DateAberWithDate: "Fri 01 Tir 1380",
			DateDoy: "1380.093",
			DateWoy: "1380W13-7",
			DateWithSlash: "1380/04/01",
			DateWithOutSlash: "13800401"
		},
		stime: 993151800000,
		gdate: [2001, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 5, 22] },
		gtime: 993151800000
	},
	{
		sdate: [1380, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 2],
			DateTime: "1380-04-02 00:00:00",
			DateAber: "02 Tir 1380",
			DateMonth: "Tir",
			DateYearMonth: "1380-Tir",
			DateYear: "1380",
			DateAberWithDate: "Sat 02 Tir 1380",
			DateDoy: "1380.094",
			DateWoy: "1380W14-1",
			DateWithSlash: "1380/04/02",
			DateWithOutSlash: "13800402"
		},
		stime: 993238200000,
		gdate: [2001, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 5, 23] },
		gtime: 993238200000
	},
	{
		sdate: [1380, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 15],
			DateTime: "1380-04-15 00:00:00",
			DateAber: "15 Tir 1380",
			DateMonth: "Tir",
			DateYearMonth: "1380-Tir",
			DateYear: "1380",
			DateAberWithDate: "Fri 15 Tir 1380",
			DateDoy: "1380.107",
			DateWoy: "1380W15-7",
			DateWithSlash: "1380/04/15",
			DateWithOutSlash: "13800415"
		},
		stime: 994361400000,
		gdate: [2001, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 6, 6] },
		gtime: 994361400000
	},
	{
		sdate: [1380, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 30],
			DateTime: "1380-04-30 00:00:00",
			DateAber: "30 Tir 1380",
			DateMonth: "Tir",
			DateYearMonth: "1380-Tir",
			DateYear: "1380",
			DateAberWithDate: "Sat 30 Tir 1380",
			DateDoy: "1380.122",
			DateWoy: "1380W18-1",
			DateWithSlash: "1380/04/30",
			DateWithOutSlash: "13800430"
		},
		stime: 995657400000,
		gdate: [2001, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 6, 21] },
		gtime: 995657400000
	},
	{
		sdate: [1380, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 31],
			DateTime: "1380-04-31 00:00:00",
			DateAber: "31 Tir 1380",
			DateMonth: "Tir",
			DateYearMonth: "1380-Tir",
			DateYear: "1380",
			DateAberWithDate: "Sun 31 Tir 1380",
			DateDoy: "1380.123",
			DateWoy: "1380W18-2",
			DateWithSlash: "1380/04/31",
			DateWithOutSlash: "13800431"
		},
		stime: 995743800000,
		gdate: [2001, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 6, 22] },
		gtime: 995743800000
	},
	{
		sdate: [1380, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 1],
			DateTime: "1380-05-01 00:00:00",
			DateAber: "01 Amo 1380",
			DateMonth: "Amo",
			DateYearMonth: "1380-Amo",
			DateYear: "1380",
			DateAberWithDate: "Mon 01 Amo 1380",
			DateDoy: "1380.124",
			DateWoy: "1380W18-3",
			DateWithSlash: "1380/05/01",
			DateWithOutSlash: "13800501"
		},
		stime: 995830200000,
		gdate: [2001, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 6, 23] },
		gtime: 995830200000
	},
	{
		sdate: [1380, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 2],
			DateTime: "1380-05-02 00:00:00",
			DateAber: "02 Amo 1380",
			DateMonth: "Amo",
			DateYearMonth: "1380-Amo",
			DateYear: "1380",
			DateAberWithDate: "Tue 02 Amo 1380",
			DateDoy: "1380.125",
			DateWoy: "1380W18-4",
			DateWithSlash: "1380/05/02",
			DateWithOutSlash: "13800502"
		},
		stime: 995916600000,
		gdate: [2001, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 6, 24] },
		gtime: 995916600000
	},
	{
		sdate: [1380, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 15],
			DateTime: "1380-05-15 00:00:00",
			DateAber: "15 Amo 1380",
			DateMonth: "Amo",
			DateYearMonth: "1380-Amo",
			DateYear: "1380",
			DateAberWithDate: "Mon 15 Amo 1380",
			DateDoy: "1380.138",
			DateWoy: "1380W20-3",
			DateWithSlash: "1380/05/15",
			DateWithOutSlash: "13800515"
		},
		stime: 997039800000,
		gdate: [2001, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 7, 6] },
		gtime: 997039800000
	},
	{
		sdate: [1380, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 30],
			DateTime: "1380-05-30 00:00:00",
			DateAber: "30 Amo 1380",
			DateMonth: "Amo",
			DateYearMonth: "1380-Amo",
			DateYear: "1380",
			DateAberWithDate: "Tue 30 Amo 1380",
			DateDoy: "1380.153",
			DateWoy: "1380W22-4",
			DateWithSlash: "1380/05/30",
			DateWithOutSlash: "13800530"
		},
		stime: 998335800000,
		gdate: [2001, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 7, 21] },
		gtime: 998335800000
	},
	{
		sdate: [1380, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 31],
			DateTime: "1380-05-31 00:00:00",
			DateAber: "31 Amo 1380",
			DateMonth: "Amo",
			DateYearMonth: "1380-Amo",
			DateYear: "1380",
			DateAberWithDate: "Wed 31 Amo 1380",
			DateDoy: "1380.154",
			DateWoy: "1380W22-5",
			DateWithSlash: "1380/05/31",
			DateWithOutSlash: "13800531"
		},
		stime: 998422200000,
		gdate: [2001, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 7, 22] },
		gtime: 998422200000
	},
	{
		sdate: [1380, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 1],
			DateTime: "1380-06-01 00:00:00",
			DateAber: "01 Sha 1380",
			DateMonth: "Sha",
			DateYearMonth: "1380-Sha",
			DateYear: "1380",
			DateAberWithDate: "Thu 01 Sha 1380",
			DateDoy: "1380.155",
			DateWoy: "1380W22-6",
			DateWithSlash: "1380/06/01",
			DateWithOutSlash: "13800601"
		},
		stime: 998508600000,
		gdate: [2001, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 7, 23] },
		gtime: 998508600000
	},
	{
		sdate: [1380, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 2],
			DateTime: "1380-06-02 00:00:00",
			DateAber: "02 Sha 1380",
			DateMonth: "Sha",
			DateYearMonth: "1380-Sha",
			DateYear: "1380",
			DateAberWithDate: "Fri 02 Sha 1380",
			DateDoy: "1380.156",
			DateWoy: "1380W22-7",
			DateWithSlash: "1380/06/02",
			DateWithOutSlash: "13800602"
		},
		stime: 998595000000,
		gdate: [2001, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 7, 24] },
		gtime: 998595000000
	},
	{
		sdate: [1380, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 15],
			DateTime: "1380-06-15 00:00:00",
			DateAber: "15 Sha 1380",
			DateMonth: "Sha",
			DateYearMonth: "1380-Sha",
			DateYear: "1380",
			DateAberWithDate: "Thu 15 Sha 1380",
			DateDoy: "1380.169",
			DateWoy: "1380W24-6",
			DateWithSlash: "1380/06/15",
			DateWithOutSlash: "13800615"
		},
		stime: 999718200000,
		gdate: [2001, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 8, 6] },
		gtime: 999718200000
	},
	{
		sdate: [1380, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 29],
			DateTime: "1380-06-29 00:00:00",
			DateAber: "29 Sha 1380",
			DateMonth: "Sha",
			DateYearMonth: "1380-Sha",
			DateYear: "1380",
			DateAberWithDate: "Thu 29 Sha 1380",
			DateDoy: "1380.183",
			DateWoy: "1380W26-6",
			DateWithSlash: "1380/06/29",
			DateWithOutSlash: "13800629"
		},
		stime: 1000927800000,
		gdate: [2001, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 8, 20] },
		gtime: 1000927800000
	},
	{
		sdate: [1380, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 30],
			DateTime: "1380-06-30 00:00:00",
			DateAber: "30 Sha 1380",
			DateMonth: "Sha",
			DateYearMonth: "1380-Sha",
			DateYear: "1380",
			DateAberWithDate: "Fri 30 Sha 1380",
			DateDoy: "1380.184",
			DateWoy: "1380W26-7",
			DateWithSlash: "1380/06/30",
			DateWithOutSlash: "13800630"
		},
		stime: 1001014200000,
		gdate: [2001, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 8, 21] },
		gtime: 1001014200000
	},
	{
		sdate: [1380, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 1],
			DateTime: "1380-07-01 00:00:00",
			DateAber: "01 Meh 1380",
			DateMonth: "Meh",
			DateYearMonth: "1380-Meh",
			DateYear: "1380",
			DateAberWithDate: "Sun 01 Meh 1380",
			DateDoy: "1380.186",
			DateWoy: "1380W27-2",
			DateWithSlash: "1380/07/01",
			DateWithOutSlash: "13800701"
		},
		stime: 1001190600000,
		gdate: [2001, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 8, 23] },
		gtime: 1001190600000
	},
	{
		sdate: [1380, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 2],
			DateTime: "1380-07-02 00:00:00",
			DateAber: "02 Meh 1380",
			DateMonth: "Meh",
			DateYearMonth: "1380-Meh",
			DateYear: "1380",
			DateAberWithDate: "Mon 02 Meh 1380",
			DateDoy: "1380.187",
			DateWoy: "1380W27-3",
			DateWithSlash: "1380/07/02",
			DateWithOutSlash: "13800702"
		},
		stime: 1001277000000,
		gdate: [2001, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 8, 24] },
		gtime: 1001277000000
	},
	{
		sdate: [1380, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 15],
			DateTime: "1380-07-15 00:00:00",
			DateAber: "15 Meh 1380",
			DateMonth: "Meh",
			DateYearMonth: "1380-Meh",
			DateYear: "1380",
			DateAberWithDate: "Sun 15 Meh 1380",
			DateDoy: "1380.200",
			DateWoy: "1380W29-2",
			DateWithSlash: "1380/07/15",
			DateWithOutSlash: "13800715"
		},
		stime: 1002400200000,
		gdate: [2001, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 9, 7] },
		gtime: 1002400200000
	},
	{
		sdate: [1380, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 29],
			DateTime: "1380-07-29 00:00:00",
			DateAber: "29 Meh 1380",
			DateMonth: "Meh",
			DateYearMonth: "1380-Meh",
			DateYear: "1380",
			DateAberWithDate: "Sun 29 Meh 1380",
			DateDoy: "1380.214",
			DateWoy: "1380W31-2",
			DateWithSlash: "1380/07/29",
			DateWithOutSlash: "13800729"
		},
		stime: 1003609800000,
		gdate: [2001, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 9, 21] },
		gtime: 1003609800000
	},
	{
		sdate: [1380, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 30],
			DateTime: "1380-07-30 00:00:00",
			DateAber: "30 Meh 1380",
			DateMonth: "Meh",
			DateYearMonth: "1380-Meh",
			DateYear: "1380",
			DateAberWithDate: "Mon 30 Meh 1380",
			DateDoy: "1380.215",
			DateWoy: "1380W31-3",
			DateWithSlash: "1380/07/30",
			DateWithOutSlash: "13800730"
		},
		stime: 1003696200000,
		gdate: [2001, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 9, 22] },
		gtime: 1003696200000
	},
	{
		sdate: [1380, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 1],
			DateTime: "1380-08-01 00:00:00",
			DateAber: "01 Aba 1380",
			DateMonth: "Aba",
			DateYearMonth: "1380-Aba",
			DateYear: "1380",
			DateAberWithDate: "Tue 01 Aba 1380",
			DateDoy: "1380.216",
			DateWoy: "1380W31-4",
			DateWithSlash: "1380/08/01",
			DateWithOutSlash: "13800801"
		},
		stime: 1003782600000,
		gdate: [2001, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 9, 23] },
		gtime: 1003782600000
	},
	{
		sdate: [1380, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 2],
			DateTime: "1380-08-02 00:00:00",
			DateAber: "02 Aba 1380",
			DateMonth: "Aba",
			DateYearMonth: "1380-Aba",
			DateYear: "1380",
			DateAberWithDate: "Wed 02 Aba 1380",
			DateDoy: "1380.217",
			DateWoy: "1380W31-5",
			DateWithSlash: "1380/08/02",
			DateWithOutSlash: "13800802"
		},
		stime: 1003869000000,
		gdate: [2001, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 9, 24] },
		gtime: 1003869000000
	},
	{
		sdate: [1380, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 15],
			DateTime: "1380-08-15 00:00:00",
			DateAber: "15 Aba 1380",
			DateMonth: "Aba",
			DateYearMonth: "1380-Aba",
			DateYear: "1380",
			DateAberWithDate: "Tue 15 Aba 1380",
			DateDoy: "1380.230",
			DateWoy: "1380W33-4",
			DateWithSlash: "1380/08/15",
			DateWithOutSlash: "13800815"
		},
		stime: 1004992200000,
		gdate: [2001, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 10, 6] },
		gtime: 1004992200000
	},
	{
		sdate: [1380, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 29],
			DateTime: "1380-08-29 00:00:00",
			DateAber: "29 Aba 1380",
			DateMonth: "Aba",
			DateYearMonth: "1380-Aba",
			DateYear: "1380",
			DateAberWithDate: "Tue 29 Aba 1380",
			DateDoy: "1380.244",
			DateWoy: "1380W35-4",
			DateWithSlash: "1380/08/29",
			DateWithOutSlash: "13800829"
		},
		stime: 1006201800000,
		gdate: [2001, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 10, 20] },
		gtime: 1006201800000
	},
	{
		sdate: [1380, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 30],
			DateTime: "1380-08-30 00:00:00",
			DateAber: "30 Aba 1380",
			DateMonth: "Aba",
			DateYearMonth: "1380-Aba",
			DateYear: "1380",
			DateAberWithDate: "Wed 30 Aba 1380",
			DateDoy: "1380.245",
			DateWoy: "1380W35-5",
			DateWithSlash: "1380/08/30",
			DateWithOutSlash: "13800830"
		},
		stime: 1006288200000,
		gdate: [2001, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 10, 21] },
		gtime: 1006288200000
	},
	{
		sdate: [1380, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 1],
			DateTime: "1380-09-01 00:00:00",
			DateAber: "01 Aza 1380",
			DateMonth: "Aza",
			DateYearMonth: "1380-Aza",
			DateYear: "1380",
			DateAberWithDate: "Thu 01 Aza 1380",
			DateDoy: "1380.246",
			DateWoy: "1380W35-6",
			DateWithSlash: "1380/09/01",
			DateWithOutSlash: "13800901"
		},
		stime: 1006374600000,
		gdate: [2001, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 10, 22] },
		gtime: 1006374600000
	},
	{
		sdate: [1380, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 2],
			DateTime: "1380-09-02 00:00:00",
			DateAber: "02 Aza 1380",
			DateMonth: "Aza",
			DateYearMonth: "1380-Aza",
			DateYear: "1380",
			DateAberWithDate: "Fri 02 Aza 1380",
			DateDoy: "1380.247",
			DateWoy: "1380W35-7",
			DateWithSlash: "1380/09/02",
			DateWithOutSlash: "13800902"
		},
		stime: 1006461000000,
		gdate: [2001, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 10, 23] },
		gtime: 1006461000000
	},
	{
		sdate: [1380, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 15],
			DateTime: "1380-09-15 00:00:00",
			DateAber: "15 Aza 1380",
			DateMonth: "Aza",
			DateYearMonth: "1380-Aza",
			DateYear: "1380",
			DateAberWithDate: "Thu 15 Aza 1380",
			DateDoy: "1380.260",
			DateWoy: "1380W37-6",
			DateWithSlash: "1380/09/15",
			DateWithOutSlash: "13800915"
		},
		stime: 1007584200000,
		gdate: [2001, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 11, 6] },
		gtime: 1007584200000
	},
	{
		sdate: [1380, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 29],
			DateTime: "1380-09-29 00:00:00",
			DateAber: "29 Aza 1380",
			DateMonth: "Aza",
			DateYearMonth: "1380-Aza",
			DateYear: "1380",
			DateAberWithDate: "Thu 29 Aza 1380",
			DateDoy: "1380.274",
			DateWoy: "1380W39-6",
			DateWithSlash: "1380/09/29",
			DateWithOutSlash: "13800929"
		},
		stime: 1008793800000,
		gdate: [2001, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 11, 20] },
		gtime: 1008793800000
	},
	{
		sdate: [1380, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 30],
			DateTime: "1380-09-30 00:00:00",
			DateAber: "30 Aza 1380",
			DateMonth: "Aza",
			DateYearMonth: "1380-Aza",
			DateYear: "1380",
			DateAberWithDate: "Fri 30 Aza 1380",
			DateDoy: "1380.275",
			DateWoy: "1380W39-7",
			DateWithSlash: "1380/09/30",
			DateWithOutSlash: "13800930"
		},
		stime: 1008880200000,
		gdate: [2001, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 11, 21] },
		gtime: 1008880200000
	},
	{
		sdate: [1380, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 1],
			DateTime: "1380-10-01 00:00:00",
			DateAber: "01 Dey 1380",
			DateMonth: "Dey",
			DateYearMonth: "1380-Dey",
			DateYear: "1380",
			DateAberWithDate: "Sat 01 Dey 1380",
			DateDoy: "1380.276",
			DateWoy: "1380W40-1",
			DateWithSlash: "1380/10/01",
			DateWithOutSlash: "13801001"
		},
		stime: 1008966600000,
		gdate: [2001, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 11, 22] },
		gtime: 1008966600000
	},
	{
		sdate: [1380, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 2],
			DateTime: "1380-10-02 00:00:00",
			DateAber: "02 Dey 1380",
			DateMonth: "Dey",
			DateYearMonth: "1380-Dey",
			DateYear: "1380",
			DateAberWithDate: "Sun 02 Dey 1380",
			DateDoy: "1380.277",
			DateWoy: "1380W40-2",
			DateWithSlash: "1380/10/02",
			DateWithOutSlash: "13801002"
		},
		stime: 1009053000000,
		gdate: [2001, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2001, 11, 23] },
		gtime: 1009053000000
	},
	{
		sdate: [1380, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 15],
			DateTime: "1380-10-15 00:00:00",
			DateAber: "15 Dey 1380",
			DateMonth: "Dey",
			DateYearMonth: "1380-Dey",
			DateYear: "1380",
			DateAberWithDate: "Sat 15 Dey 1380",
			DateDoy: "1380.290",
			DateWoy: "1380W42-1",
			DateWithSlash: "1380/10/15",
			DateWithOutSlash: "13801015"
		},
		stime: 1010176200000,
		gdate: [2002, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 0, 5] },
		gtime: 1010176200000
	},
	{
		sdate: [1380, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 29],
			DateTime: "1380-10-29 00:00:00",
			DateAber: "29 Dey 1380",
			DateMonth: "Dey",
			DateYearMonth: "1380-Dey",
			DateYear: "1380",
			DateAberWithDate: "Sat 29 Dey 1380",
			DateDoy: "1380.304",
			DateWoy: "1380W44-1",
			DateWithSlash: "1380/10/29",
			DateWithOutSlash: "13801029"
		},
		stime: 1011385800000,
		gdate: [2002, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 0, 19] },
		gtime: 1011385800000
	},
	{
		sdate: [1380, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 30],
			DateTime: "1380-10-30 00:00:00",
			DateAber: "30 Dey 1380",
			DateMonth: "Dey",
			DateYearMonth: "1380-Dey",
			DateYear: "1380",
			DateAberWithDate: "Sun 30 Dey 1380",
			DateDoy: "1380.305",
			DateWoy: "1380W44-2",
			DateWithSlash: "1380/10/30",
			DateWithOutSlash: "13801030"
		},
		stime: 1011472200000,
		gdate: [2002, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 0, 20] },
		gtime: 1011472200000
	},
	{
		sdate: [1380, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 1],
			DateTime: "1380-11-01 00:00:00",
			DateAber: "01 Bah 1380",
			DateMonth: "Bah",
			DateYearMonth: "1380-Bah",
			DateYear: "1380",
			DateAberWithDate: "Mon 01 Bah 1380",
			DateDoy: "1380.306",
			DateWoy: "1380W44-3",
			DateWithSlash: "1380/11/01",
			DateWithOutSlash: "13801101"
		},
		stime: 1011558600000,
		gdate: [2002, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 0, 21] },
		gtime: 1011558600000
	},
	{
		sdate: [1380, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 2],
			DateTime: "1380-11-02 00:00:00",
			DateAber: "02 Bah 1380",
			DateMonth: "Bah",
			DateYearMonth: "1380-Bah",
			DateYear: "1380",
			DateAberWithDate: "Tue 02 Bah 1380",
			DateDoy: "1380.307",
			DateWoy: "1380W44-4",
			DateWithSlash: "1380/11/02",
			DateWithOutSlash: "13801102"
		},
		stime: 1011645000000,
		gdate: [2002, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 0, 22] },
		gtime: 1011645000000
	},
	{
		sdate: [1380, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 15],
			DateTime: "1380-11-15 00:00:00",
			DateAber: "15 Bah 1380",
			DateMonth: "Bah",
			DateYearMonth: "1380-Bah",
			DateYear: "1380",
			DateAberWithDate: "Mon 15 Bah 1380",
			DateDoy: "1380.320",
			DateWoy: "1380W46-3",
			DateWithSlash: "1380/11/15",
			DateWithOutSlash: "13801115"
		},
		stime: 1012768200000,
		gdate: [2002, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 1, 4] },
		gtime: 1012768200000
	},
	{
		sdate: [1380, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 29],
			DateTime: "1380-11-29 00:00:00",
			DateAber: "29 Bah 1380",
			DateMonth: "Bah",
			DateYearMonth: "1380-Bah",
			DateYear: "1380",
			DateAberWithDate: "Mon 29 Bah 1380",
			DateDoy: "1380.334",
			DateWoy: "1380W48-3",
			DateWithSlash: "1380/11/29",
			DateWithOutSlash: "13801129"
		},
		stime: 1013977800000,
		gdate: [2002, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 1, 18] },
		gtime: 1013977800000
	},
	{
		sdate: [1380, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 30],
			DateTime: "1380-11-30 00:00:00",
			DateAber: "30 Bah 1380",
			DateMonth: "Bah",
			DateYearMonth: "1380-Bah",
			DateYear: "1380",
			DateAberWithDate: "Tue 30 Bah 1380",
			DateDoy: "1380.335",
			DateWoy: "1380W48-4",
			DateWithSlash: "1380/11/30",
			DateWithOutSlash: "13801130"
		},
		stime: 1014064200000,
		gdate: [2002, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 1, 19] },
		gtime: 1014064200000
	},
	{
		sdate: [1380, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 1],
			DateTime: "1380-12-01 00:00:00",
			DateAber: "01 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Wed 01 Esf 1380",
			DateDoy: "1380.336",
			DateWoy: "1380W48-5",
			DateWithSlash: "1380/12/01",
			DateWithOutSlash: "13801201"
		},
		stime: 1014150600000,
		gdate: [2002, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 1, 20] },
		gtime: 1014150600000
	},
	{
		sdate: [1380, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 2],
			DateTime: "1380-12-02 00:00:00",
			DateAber: "02 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Thu 02 Esf 1380",
			DateDoy: "1380.337",
			DateWoy: "1380W48-6",
			DateWithSlash: "1380/12/02",
			DateWithOutSlash: "13801202"
		},
		stime: 1014237000000,
		gdate: [2002, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 1, 21] },
		gtime: 1014237000000
	},
	{
		sdate: [1380, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 3],
			DateTime: "1380-12-03 00:00:00",
			DateAber: "03 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Fri 03 Esf 1380",
			DateDoy: "1380.338",
			DateWoy: "1380W48-7",
			DateWithSlash: "1380/12/03",
			DateWithOutSlash: "13801203"
		},
		stime: 1014323400000,
		gdate: [2002, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 1, 22] },
		gtime: 1014323400000
	},
	{
		sdate: [1380, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 4],
			DateTime: "1380-12-04 00:00:00",
			DateAber: "04 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Sat 04 Esf 1380",
			DateDoy: "1380.339",
			DateWoy: "1380W49-1",
			DateWithSlash: "1380/12/04",
			DateWithOutSlash: "13801204"
		},
		stime: 1014409800000,
		gdate: [2002, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 1, 23] },
		gtime: 1014409800000
	},
	{
		sdate: [1380, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 15],
			DateTime: "1380-12-15 00:00:00",
			DateAber: "15 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Wed 15 Esf 1380",
			DateDoy: "1380.350",
			DateWoy: "1380W50-5",
			DateWithSlash: "1380/12/15",
			DateWithOutSlash: "13801215"
		},
		stime: 1015360200000,
		gdate: [2002, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 2, 6] },
		gtime: 1015360200000
	},
	{
		sdate: [1380, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 25],
			DateTime: "1380-12-25 00:00:00",
			DateAber: "25 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Sat 25 Esf 1380",
			DateDoy: "1380.360",
			DateWoy: "1380W52-1",
			DateWithSlash: "1380/12/25",
			DateWithOutSlash: "13801225"
		},
		stime: 1016224200000,
		gdate: [2002, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 2, 16] },
		gtime: 1016224200000
	},
	{
		sdate: [1380, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 26],
			DateTime: "1380-12-26 00:00:00",
			DateAber: "26 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Sun 26 Esf 1380",
			DateDoy: "1380.361",
			DateWoy: "1380W52-2",
			DateWithSlash: "1380/12/26",
			DateWithOutSlash: "13801226"
		},
		stime: 1016310600000,
		gdate: [2002, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 2, 17] },
		gtime: 1016310600000
	},
	{
		sdate: [1380, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 27],
			DateTime: "1380-12-27 00:00:00",
			DateAber: "27 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Mon 27 Esf 1380",
			DateDoy: "1380.362",
			DateWoy: "1380W52-3",
			DateWithSlash: "1380/12/27",
			DateWithOutSlash: "13801227"
		},
		stime: 1016397000000,
		gdate: [2002, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 2, 18] },
		gtime: 1016397000000
	},
	{
		sdate: [1380, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 28],
			DateTime: "1380-12-28 00:00:00",
			DateAber: "28 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Tue 28 Esf 1380",
			DateDoy: "1380.363",
			DateWoy: "1380W52-4",
			DateWithSlash: "1380/12/28",
			DateWithOutSlash: "13801228"
		},
		stime: 1016483400000,
		gdate: [2002, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 2, 19] },
		gtime: 1016483400000
	},
	{
		sdate: [1380, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 29],
			DateTime: "1380-12-29 00:00:00",
			DateAber: "29 Esf 1380",
			DateMonth: "Esf",
			DateYearMonth: "1380-Esf",
			DateYear: "1380",
			DateAberWithDate: "Wed 29 Esf 1380",
			DateDoy: "1380.364",
			DateWoy: "1380W52-5",
			DateWithSlash: "1380/12/29",
			DateWithOutSlash: "13801229"
		},
		stime: 1016569800000,
		gdate: [2002, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 2, 20] },
		gtime: 1016569800000
	},

	{
		sdate: [1400, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 1],
			DateTime: "1400-01-01 00:00:00",
			DateAber: "01 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Sun 01 Far 1400",
			DateDoy: "1400.000",
			DateWoy: "1400W01-2",
			DateWithSlash: "1400/01/01",
			DateWithOutSlash: "14000101"
		},
		stime: 1616272200000,
		gdate: [2021, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 2, 21] },
		gtime: 1616272200000
	},
	{
		sdate: [1400, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 2],
			DateTime: "1400-01-02 01:00:00",
			DateAber: "02 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Mon 02 Far 1400",
			DateDoy: "1400.001",
			DateWoy: "1400W01-3",
			DateWithSlash: "1400/01/02",
			DateWithOutSlash: "14000102"
		},
		stime: 1616358600000,
		gdate: [2021, 3, 22, 1, 0, 0, 0],
		gdata: { gregorian: [2021, 2, 22] },
		gtime: 1616358600000
	},
	{
		sdate: [1400, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 3],
			DateTime: "1400-01-03 00:00:00",
			DateAber: "03 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Tue 03 Far 1400",
			DateDoy: "1400.002",
			DateWoy: "1400W01-4",
			DateWithSlash: "1400/01/03",
			DateWithOutSlash: "14000103"
		},
		stime: 1616441400000,
		gdate: [2021, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 2, 23] },
		gtime: 1616441400000
	},
	{
		sdate: [1400, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 4],
			DateTime: "1400-01-04 00:00:00",
			DateAber: "04 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Wed 04 Far 1400",
			DateDoy: "1400.003",
			DateWoy: "1400W01-5",
			DateWithSlash: "1400/01/04",
			DateWithOutSlash: "14000104"
		},
		stime: 1616527800000,
		gdate: [2021, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 2, 24] },
		gtime: 1616527800000
	},
	{
		sdate: [1400, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 5],
			DateTime: "1400-01-05 00:00:00",
			DateAber: "05 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Thu 05 Far 1400",
			DateDoy: "1400.004",
			DateWoy: "1400W01-6",
			DateWithSlash: "1400/01/05",
			DateWithOutSlash: "14000105"
		},
		stime: 1616614200000,
		gdate: [2021, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 2, 25] },
		gtime: 1616614200000
	},
	{
		sdate: [1400, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 6],
			DateTime: "1400-01-06 00:00:00",
			DateAber: "06 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Fri 06 Far 1400",
			DateDoy: "1400.005",
			DateWoy: "1400W01-7",
			DateWithSlash: "1400/01/06",
			DateWithOutSlash: "14000106"
		},
		stime: 1616700600000,
		gdate: [2021, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 2, 26] },
		gtime: 1616700600000
	},
	{
		sdate: [1400, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 7],
			DateTime: "1400-01-07 00:00:00",
			DateAber: "07 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Sat 07 Far 1400",
			DateDoy: "1400.006",
			DateWoy: "1400W02-1",
			DateWithSlash: "1400/01/07",
			DateWithOutSlash: "14000107"
		},
		stime: 1616787000000,
		gdate: [2021, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 2, 27] },
		gtime: 1616787000000
	},
	{
		sdate: [1400, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 15],
			DateTime: "1400-01-15 00:00:00",
			DateAber: "15 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Sun 15 Far 1400",
			DateDoy: "1400.014",
			DateWoy: "1400W03-2",
			DateWithSlash: "1400/01/15",
			DateWithOutSlash: "14000115"
		},
		stime: 1617478200000,
		gdate: [2021, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 3, 4] },
		gtime: 1617478200000
	},
	{
		sdate: [1400, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 29],
			DateTime: "1400-01-29 00:00:00",
			DateAber: "29 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Sun 29 Far 1400",
			DateDoy: "1400.028",
			DateWoy: "1400W05-2",
			DateWithSlash: "1400/01/29",
			DateWithOutSlash: "14000129"
		},
		stime: 1618687800000,
		gdate: [2021, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 3, 18] },
		gtime: 1618687800000
	},
	{
		sdate: [1400, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 30],
			DateTime: "1400-01-30 00:00:00",
			DateAber: "30 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Mon 30 Far 1400",
			DateDoy: "1400.029",
			DateWoy: "1400W05-3",
			DateWithSlash: "1400/01/30",
			DateWithOutSlash: "14000130"
		},
		stime: 1618774200000,
		gdate: [2021, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 3, 19] },
		gtime: 1618774200000
	},
	{
		sdate: [1400, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 31],
			DateTime: "1400-01-31 00:00:00",
			DateAber: "31 Far 1400",
			DateMonth: "Far",
			DateYearMonth: "1400-Far",
			DateYear: "1400",
			DateAberWithDate: "Tue 31 Far 1400",
			DateDoy: "1400.030",
			DateWoy: "1400W05-4",
			DateWithSlash: "1400/01/31",
			DateWithOutSlash: "14000131"
		},
		stime: 1618860600000,
		gdate: [2021, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 3, 20] },
		gtime: 1618860600000
	},
	{
		sdate: [1400, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 1],
			DateTime: "1400-02-01 00:00:00",
			DateAber: "01 Ord 1400",
			DateMonth: "Ord",
			DateYearMonth: "1400-Ord",
			DateYear: "1400",
			DateAberWithDate: "Wed 01 Ord 1400",
			DateDoy: "1400.031",
			DateWoy: "1400W05-5",
			DateWithSlash: "1400/02/01",
			DateWithOutSlash: "14000201"
		},
		stime: 1618947000000,
		gdate: [2021, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 3, 21] },
		gtime: 1618947000000
	},
	{
		sdate: [1400, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 2],
			DateTime: "1400-02-02 00:00:00",
			DateAber: "02 Ord 1400",
			DateMonth: "Ord",
			DateYearMonth: "1400-Ord",
			DateYear: "1400",
			DateAberWithDate: "Thu 02 Ord 1400",
			DateDoy: "1400.032",
			DateWoy: "1400W05-6",
			DateWithSlash: "1400/02/02",
			DateWithOutSlash: "14000202"
		},
		stime: 1619033400000,
		gdate: [2021, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 3, 22] },
		gtime: 1619033400000
	},
	{
		sdate: [1400, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 15],
			DateTime: "1400-02-15 00:00:00",
			DateAber: "15 Ord 1400",
			DateMonth: "Ord",
			DateYearMonth: "1400-Ord",
			DateYear: "1400",
			DateAberWithDate: "Wed 15 Ord 1400",
			DateDoy: "1400.045",
			DateWoy: "1400W07-5",
			DateWithSlash: "1400/02/15",
			DateWithOutSlash: "14000215"
		},
		stime: 1620156600000,
		gdate: [2021, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 4, 5] },
		gtime: 1620156600000
	},
	{
		sdate: [1400, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 30],
			DateTime: "1400-02-30 00:00:00",
			DateAber: "30 Ord 1400",
			DateMonth: "Ord",
			DateYearMonth: "1400-Ord",
			DateYear: "1400",
			DateAberWithDate: "Thu 30 Ord 1400",
			DateDoy: "1400.060",
			DateWoy: "1400W09-6",
			DateWithSlash: "1400/02/30",
			DateWithOutSlash: "14000230"
		},
		stime: 1621452600000,
		gdate: [2021, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 4, 20] },
		gtime: 1621452600000
	},
	{
		sdate: [1400, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 31],
			DateTime: "1400-02-31 00:00:00",
			DateAber: "31 Ord 1400",
			DateMonth: "Ord",
			DateYearMonth: "1400-Ord",
			DateYear: "1400",
			DateAberWithDate: "Fri 31 Ord 1400",
			DateDoy: "1400.061",
			DateWoy: "1400W09-7",
			DateWithSlash: "1400/02/31",
			DateWithOutSlash: "14000231"
		},
		stime: 1621539000000,
		gdate: [2021, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 4, 21] },
		gtime: 1621539000000
	},
	{
		sdate: [1400, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 1],
			DateTime: "1400-03-01 00:00:00",
			DateAber: "01 Kho 1400",
			DateMonth: "Kho",
			DateYearMonth: "1400-Kho",
			DateYear: "1400",
			DateAberWithDate: "Sat 01 Kho 1400",
			DateDoy: "1400.062",
			DateWoy: "1400W10-1",
			DateWithSlash: "1400/03/01",
			DateWithOutSlash: "14000301"
		},
		stime: 1621625400000,
		gdate: [2021, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 4, 22] },
		gtime: 1621625400000
	},
	{
		sdate: [1400, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 2],
			DateTime: "1400-03-02 00:00:00",
			DateAber: "02 Kho 1400",
			DateMonth: "Kho",
			DateYearMonth: "1400-Kho",
			DateYear: "1400",
			DateAberWithDate: "Sun 02 Kho 1400",
			DateDoy: "1400.063",
			DateWoy: "1400W10-2",
			DateWithSlash: "1400/03/02",
			DateWithOutSlash: "14000302"
		},
		stime: 1621711800000,
		gdate: [2021, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 4, 23] },
		gtime: 1621711800000
	},
	{
		sdate: [1400, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 15],
			DateTime: "1400-03-15 00:00:00",
			DateAber: "15 Kho 1400",
			DateMonth: "Kho",
			DateYearMonth: "1400-Kho",
			DateYear: "1400",
			DateAberWithDate: "Sat 15 Kho 1400",
			DateDoy: "1400.076",
			DateWoy: "1400W12-1",
			DateWithSlash: "1400/03/15",
			DateWithOutSlash: "14000315"
		},
		stime: 1622835000000,
		gdate: [2021, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 5, 5] },
		gtime: 1622835000000
	},
	{
		sdate: [1400, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 30],
			DateTime: "1400-03-30 00:00:00",
			DateAber: "30 Kho 1400",
			DateMonth: "Kho",
			DateYearMonth: "1400-Kho",
			DateYear: "1400",
			DateAberWithDate: "Sun 30 Kho 1400",
			DateDoy: "1400.091",
			DateWoy: "1400W14-2",
			DateWithSlash: "1400/03/30",
			DateWithOutSlash: "14000330"
		},
		stime: 1624131000000,
		gdate: [2021, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 5, 20] },
		gtime: 1624131000000
	},
	{
		sdate: [1400, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 31],
			DateTime: "1400-03-31 00:00:00",
			DateAber: "31 Kho 1400",
			DateMonth: "Kho",
			DateYearMonth: "1400-Kho",
			DateYear: "1400",
			DateAberWithDate: "Mon 31 Kho 1400",
			DateDoy: "1400.092",
			DateWoy: "1400W14-3",
			DateWithSlash: "1400/03/31",
			DateWithOutSlash: "14000331"
		},
		stime: 1624217400000,
		gdate: [2021, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 5, 21] },
		gtime: 1624217400000
	},
	{
		sdate: [1400, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 1],
			DateTime: "1400-04-01 00:00:00",
			DateAber: "01 Tir 1400",
			DateMonth: "Tir",
			DateYearMonth: "1400-Tir",
			DateYear: "1400",
			DateAberWithDate: "Tue 01 Tir 1400",
			DateDoy: "1400.093",
			DateWoy: "1400W14-4",
			DateWithSlash: "1400/04/01",
			DateWithOutSlash: "14000401"
		},
		stime: 1624303800000,
		gdate: [2021, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 5, 22] },
		gtime: 1624303800000
	},
	{
		sdate: [1400, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 2],
			DateTime: "1400-04-02 00:00:00",
			DateAber: "02 Tir 1400",
			DateMonth: "Tir",
			DateYearMonth: "1400-Tir",
			DateYear: "1400",
			DateAberWithDate: "Wed 02 Tir 1400",
			DateDoy: "1400.094",
			DateWoy: "1400W14-5",
			DateWithSlash: "1400/04/02",
			DateWithOutSlash: "14000402"
		},
		stime: 1624390200000,
		gdate: [2021, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 5, 23] },
		gtime: 1624390200000
	},
	{
		sdate: [1400, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 15],
			DateTime: "1400-04-15 00:00:00",
			DateAber: "15 Tir 1400",
			DateMonth: "Tir",
			DateYearMonth: "1400-Tir",
			DateYear: "1400",
			DateAberWithDate: "Tue 15 Tir 1400",
			DateDoy: "1400.107",
			DateWoy: "1400W16-4",
			DateWithSlash: "1400/04/15",
			DateWithOutSlash: "14000415"
		},
		stime: 1625513400000,
		gdate: [2021, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 6, 6] },
		gtime: 1625513400000
	},
	{
		sdate: [1400, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 30],
			DateTime: "1400-04-30 00:00:00",
			DateAber: "30 Tir 1400",
			DateMonth: "Tir",
			DateYearMonth: "1400-Tir",
			DateYear: "1400",
			DateAberWithDate: "Wed 30 Tir 1400",
			DateDoy: "1400.122",
			DateWoy: "1400W18-5",
			DateWithSlash: "1400/04/30",
			DateWithOutSlash: "14000430"
		},
		stime: 1626809400000,
		gdate: [2021, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 6, 21] },
		gtime: 1626809400000
	},
	{
		sdate: [1400, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 31],
			DateTime: "1400-04-31 00:00:00",
			DateAber: "31 Tir 1400",
			DateMonth: "Tir",
			DateYearMonth: "1400-Tir",
			DateYear: "1400",
			DateAberWithDate: "Thu 31 Tir 1400",
			DateDoy: "1400.123",
			DateWoy: "1400W18-6",
			DateWithSlash: "1400/04/31",
			DateWithOutSlash: "14000431"
		},
		stime: 1626895800000,
		gdate: [2021, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 6, 22] },
		gtime: 1626895800000
	},
	{
		sdate: [1400, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 1],
			DateTime: "1400-05-01 00:00:00",
			DateAber: "01 Amo 1400",
			DateMonth: "Amo",
			DateYearMonth: "1400-Amo",
			DateYear: "1400",
			DateAberWithDate: "Fri 01 Amo 1400",
			DateDoy: "1400.124",
			DateWoy: "1400W18-7",
			DateWithSlash: "1400/05/01",
			DateWithOutSlash: "14000501"
		},
		stime: 1626982200000,
		gdate: [2021, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 6, 23] },
		gtime: 1626982200000
	},
	{
		sdate: [1400, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 2],
			DateTime: "1400-05-02 00:00:00",
			DateAber: "02 Amo 1400",
			DateMonth: "Amo",
			DateYearMonth: "1400-Amo",
			DateYear: "1400",
			DateAberWithDate: "Sat 02 Amo 1400",
			DateDoy: "1400.125",
			DateWoy: "1400W19-1",
			DateWithSlash: "1400/05/02",
			DateWithOutSlash: "14000502"
		},
		stime: 1627068600000,
		gdate: [2021, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 6, 24] },
		gtime: 1627068600000
	},
	{
		sdate: [1400, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 15],
			DateTime: "1400-05-15 00:00:00",
			DateAber: "15 Amo 1400",
			DateMonth: "Amo",
			DateYearMonth: "1400-Amo",
			DateYear: "1400",
			DateAberWithDate: "Fri 15 Amo 1400",
			DateDoy: "1400.138",
			DateWoy: "1400W20-7",
			DateWithSlash: "1400/05/15",
			DateWithOutSlash: "14000515"
		},
		stime: 1628191800000,
		gdate: [2021, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 7, 6] },
		gtime: 1628191800000
	},
	{
		sdate: [1400, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 30],
			DateTime: "1400-05-30 00:00:00",
			DateAber: "30 Amo 1400",
			DateMonth: "Amo",
			DateYearMonth: "1400-Amo",
			DateYear: "1400",
			DateAberWithDate: "Sat 30 Amo 1400",
			DateDoy: "1400.153",
			DateWoy: "1400W23-1",
			DateWithSlash: "1400/05/30",
			DateWithOutSlash: "14000530"
		},
		stime: 1629487800000,
		gdate: [2021, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 7, 21] },
		gtime: 1629487800000
	},
	{
		sdate: [1400, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 31],
			DateTime: "1400-05-31 00:00:00",
			DateAber: "31 Amo 1400",
			DateMonth: "Amo",
			DateYearMonth: "1400-Amo",
			DateYear: "1400",
			DateAberWithDate: "Sun 31 Amo 1400",
			DateDoy: "1400.154",
			DateWoy: "1400W23-2",
			DateWithSlash: "1400/05/31",
			DateWithOutSlash: "14000531"
		},
		stime: 1629574200000,
		gdate: [2021, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 7, 22] },
		gtime: 1629574200000
	},
	{
		sdate: [1400, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 1],
			DateTime: "1400-06-01 00:00:00",
			DateAber: "01 Sha 1400",
			DateMonth: "Sha",
			DateYearMonth: "1400-Sha",
			DateYear: "1400",
			DateAberWithDate: "Mon 01 Sha 1400",
			DateDoy: "1400.155",
			DateWoy: "1400W23-3",
			DateWithSlash: "1400/06/01",
			DateWithOutSlash: "14000601"
		},
		stime: 1629660600000,
		gdate: [2021, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 7, 23] },
		gtime: 1629660600000
	},
	{
		sdate: [1400, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 2],
			DateTime: "1400-06-02 00:00:00",
			DateAber: "02 Sha 1400",
			DateMonth: "Sha",
			DateYearMonth: "1400-Sha",
			DateYear: "1400",
			DateAberWithDate: "Tue 02 Sha 1400",
			DateDoy: "1400.156",
			DateWoy: "1400W23-4",
			DateWithSlash: "1400/06/02",
			DateWithOutSlash: "14000602"
		},
		stime: 1629747000000,
		gdate: [2021, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 7, 24] },
		gtime: 1629747000000
	},
	{
		sdate: [1400, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 15],
			DateTime: "1400-06-15 00:00:00",
			DateAber: "15 Sha 1400",
			DateMonth: "Sha",
			DateYearMonth: "1400-Sha",
			DateYear: "1400",
			DateAberWithDate: "Mon 15 Sha 1400",
			DateDoy: "1400.169",
			DateWoy: "1400W25-3",
			DateWithSlash: "1400/06/15",
			DateWithOutSlash: "14000615"
		},
		stime: 1630870200000,
		gdate: [2021, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 8, 6] },
		gtime: 1630870200000
	},
	{
		sdate: [1400, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 29],
			DateTime: "1400-06-29 00:00:00",
			DateAber: "29 Sha 1400",
			DateMonth: "Sha",
			DateYearMonth: "1400-Sha",
			DateYear: "1400",
			DateAberWithDate: "Mon 29 Sha 1400",
			DateDoy: "1400.183",
			DateWoy: "1400W27-3",
			DateWithSlash: "1400/06/29",
			DateWithOutSlash: "14000629"
		},
		stime: 1632079800000,
		gdate: [2021, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 8, 20] },
		gtime: 1632079800000
	},
	{
		sdate: [1400, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 30],
			DateTime: "1400-06-30 00:00:00",
			DateAber: "30 Sha 1400",
			DateMonth: "Sha",
			DateYearMonth: "1400-Sha",
			DateYear: "1400",
			DateAberWithDate: "Tue 30 Sha 1400",
			DateDoy: "1400.184",
			DateWoy: "1400W27-4",
			DateWithSlash: "1400/06/30",
			DateWithOutSlash: "14000630"
		},
		stime: 1632166200000,
		gdate: [2021, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 8, 21] },
		gtime: 1632166200000
	},
	{
		sdate: [1400, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 1],
			DateTime: "1400-07-01 00:00:00",
			DateAber: "01 Meh 1400",
			DateMonth: "Meh",
			DateYearMonth: "1400-Meh",
			DateYear: "1400",
			DateAberWithDate: "Thu 01 Meh 1400",
			DateDoy: "1400.186",
			DateWoy: "1400W27-6",
			DateWithSlash: "1400/07/01",
			DateWithOutSlash: "14000701"
		},
		stime: 1632342600000,
		gdate: [2021, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 8, 23] },
		gtime: 1632342600000
	},
	{
		sdate: [1400, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 2],
			DateTime: "1400-07-02 00:00:00",
			DateAber: "02 Meh 1400",
			DateMonth: "Meh",
			DateYearMonth: "1400-Meh",
			DateYear: "1400",
			DateAberWithDate: "Fri 02 Meh 1400",
			DateDoy: "1400.187",
			DateWoy: "1400W27-7",
			DateWithSlash: "1400/07/02",
			DateWithOutSlash: "14000702"
		},
		stime: 1632429000000,
		gdate: [2021, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 8, 24] },
		gtime: 1632429000000
	},
	{
		sdate: [1400, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 15],
			DateTime: "1400-07-15 00:00:00",
			DateAber: "15 Meh 1400",
			DateMonth: "Meh",
			DateYearMonth: "1400-Meh",
			DateYear: "1400",
			DateAberWithDate: "Thu 15 Meh 1400",
			DateDoy: "1400.200",
			DateWoy: "1400W29-6",
			DateWithSlash: "1400/07/15",
			DateWithOutSlash: "14000715"
		},
		stime: 1633552200000,
		gdate: [2021, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 9, 7] },
		gtime: 1633552200000
	},
	{
		sdate: [1400, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 29],
			DateTime: "1400-07-29 00:00:00",
			DateAber: "29 Meh 1400",
			DateMonth: "Meh",
			DateYearMonth: "1400-Meh",
			DateYear: "1400",
			DateAberWithDate: "Thu 29 Meh 1400",
			DateDoy: "1400.214",
			DateWoy: "1400W31-6",
			DateWithSlash: "1400/07/29",
			DateWithOutSlash: "14000729"
		},
		stime: 1634761800000,
		gdate: [2021, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 9, 21] },
		gtime: 1634761800000
	},
	{
		sdate: [1400, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 30],
			DateTime: "1400-07-30 00:00:00",
			DateAber: "30 Meh 1400",
			DateMonth: "Meh",
			DateYearMonth: "1400-Meh",
			DateYear: "1400",
			DateAberWithDate: "Fri 30 Meh 1400",
			DateDoy: "1400.215",
			DateWoy: "1400W31-7",
			DateWithSlash: "1400/07/30",
			DateWithOutSlash: "14000730"
		},
		stime: 1634848200000,
		gdate: [2021, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 9, 22] },
		gtime: 1634848200000
	},
	{
		sdate: [1400, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 1],
			DateTime: "1400-08-01 00:00:00",
			DateAber: "01 Aba 1400",
			DateMonth: "Aba",
			DateYearMonth: "1400-Aba",
			DateYear: "1400",
			DateAberWithDate: "Sat 01 Aba 1400",
			DateDoy: "1400.216",
			DateWoy: "1400W32-1",
			DateWithSlash: "1400/08/01",
			DateWithOutSlash: "14000801"
		},
		stime: 1634934600000,
		gdate: [2021, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 9, 23] },
		gtime: 1634934600000
	},
	{
		sdate: [1400, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 2],
			DateTime: "1400-08-02 00:00:00",
			DateAber: "02 Aba 1400",
			DateMonth: "Aba",
			DateYearMonth: "1400-Aba",
			DateYear: "1400",
			DateAberWithDate: "Sun 02 Aba 1400",
			DateDoy: "1400.217",
			DateWoy: "1400W32-2",
			DateWithSlash: "1400/08/02",
			DateWithOutSlash: "14000802"
		},
		stime: 1635021000000,
		gdate: [2021, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 9, 24] },
		gtime: 1635021000000
	},
	{
		sdate: [1400, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 15],
			DateTime: "1400-08-15 00:00:00",
			DateAber: "15 Aba 1400",
			DateMonth: "Aba",
			DateYearMonth: "1400-Aba",
			DateYear: "1400",
			DateAberWithDate: "Sat 15 Aba 1400",
			DateDoy: "1400.230",
			DateWoy: "1400W34-1",
			DateWithSlash: "1400/08/15",
			DateWithOutSlash: "14000815"
		},
		stime: 1636144200000,
		gdate: [2021, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 10, 6] },
		gtime: 1636144200000
	},
	{
		sdate: [1400, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 29],
			DateTime: "1400-08-29 00:00:00",
			DateAber: "29 Aba 1400",
			DateMonth: "Aba",
			DateYearMonth: "1400-Aba",
			DateYear: "1400",
			DateAberWithDate: "Sat 29 Aba 1400",
			DateDoy: "1400.244",
			DateWoy: "1400W36-1",
			DateWithSlash: "1400/08/29",
			DateWithOutSlash: "14000829"
		},
		stime: 1637353800000,
		gdate: [2021, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 10, 20] },
		gtime: 1637353800000
	},
	{
		sdate: [1400, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 30],
			DateTime: "1400-08-30 00:00:00",
			DateAber: "30 Aba 1400",
			DateMonth: "Aba",
			DateYearMonth: "1400-Aba",
			DateYear: "1400",
			DateAberWithDate: "Sun 30 Aba 1400",
			DateDoy: "1400.245",
			DateWoy: "1400W36-2",
			DateWithSlash: "1400/08/30",
			DateWithOutSlash: "14000830"
		},
		stime: 1637440200000,
		gdate: [2021, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 10, 21] },
		gtime: 1637440200000
	},
	{
		sdate: [1400, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 1],
			DateTime: "1400-09-01 00:00:00",
			DateAber: "01 Aza 1400",
			DateMonth: "Aza",
			DateYearMonth: "1400-Aza",
			DateYear: "1400",
			DateAberWithDate: "Mon 01 Aza 1400",
			DateDoy: "1400.246",
			DateWoy: "1400W36-3",
			DateWithSlash: "1400/09/01",
			DateWithOutSlash: "14000901"
		},
		stime: 1637526600000,
		gdate: [2021, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 10, 22] },
		gtime: 1637526600000
	},
	{
		sdate: [1400, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 2],
			DateTime: "1400-09-02 00:00:00",
			DateAber: "02 Aza 1400",
			DateMonth: "Aza",
			DateYearMonth: "1400-Aza",
			DateYear: "1400",
			DateAberWithDate: "Tue 02 Aza 1400",
			DateDoy: "1400.247",
			DateWoy: "1400W36-4",
			DateWithSlash: "1400/09/02",
			DateWithOutSlash: "14000902"
		},
		stime: 1637613000000,
		gdate: [2021, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 10, 23] },
		gtime: 1637613000000
	},
	{
		sdate: [1400, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 15],
			DateTime: "1400-09-15 00:00:00",
			DateAber: "15 Aza 1400",
			DateMonth: "Aza",
			DateYearMonth: "1400-Aza",
			DateYear: "1400",
			DateAberWithDate: "Mon 15 Aza 1400",
			DateDoy: "1400.260",
			DateWoy: "1400W38-3",
			DateWithSlash: "1400/09/15",
			DateWithOutSlash: "14000915"
		},
		stime: 1638736200000,
		gdate: [2021, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 11, 6] },
		gtime: 1638736200000
	},
	{
		sdate: [1400, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 29],
			DateTime: "1400-09-29 00:00:00",
			DateAber: "29 Aza 1400",
			DateMonth: "Aza",
			DateYearMonth: "1400-Aza",
			DateYear: "1400",
			DateAberWithDate: "Mon 29 Aza 1400",
			DateDoy: "1400.274",
			DateWoy: "1400W40-3",
			DateWithSlash: "1400/09/29",
			DateWithOutSlash: "14000929"
		},
		stime: 1639945800000,
		gdate: [2021, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 11, 20] },
		gtime: 1639945800000
	},
	{
		sdate: [1400, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 30],
			DateTime: "1400-09-30 00:00:00",
			DateAber: "30 Aza 1400",
			DateMonth: "Aza",
			DateYearMonth: "1400-Aza",
			DateYear: "1400",
			DateAberWithDate: "Tue 30 Aza 1400",
			DateDoy: "1400.275",
			DateWoy: "1400W40-4",
			DateWithSlash: "1400/09/30",
			DateWithOutSlash: "14000930"
		},
		stime: 1640032200000,
		gdate: [2021, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 11, 21] },
		gtime: 1640032200000
	},
	{
		sdate: [1400, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 1],
			DateTime: "1400-10-01 00:00:00",
			DateAber: "01 Dey 1400",
			DateMonth: "Dey",
			DateYearMonth: "1400-Dey",
			DateYear: "1400",
			DateAberWithDate: "Wed 01 Dey 1400",
			DateDoy: "1400.276",
			DateWoy: "1400W40-5",
			DateWithSlash: "1400/10/01",
			DateWithOutSlash: "14001001"
		},
		stime: 1640118600000,
		gdate: [2021, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 11, 22] },
		gtime: 1640118600000
	},
	{
		sdate: [1400, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 2],
			DateTime: "1400-10-02 00:00:00",
			DateAber: "02 Dey 1400",
			DateMonth: "Dey",
			DateYearMonth: "1400-Dey",
			DateYear: "1400",
			DateAberWithDate: "Thu 02 Dey 1400",
			DateDoy: "1400.277",
			DateWoy: "1400W40-6",
			DateWithSlash: "1400/10/02",
			DateWithOutSlash: "14001002"
		},
		stime: 1640205000000,
		gdate: [2021, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2021, 11, 23] },
		gtime: 1640205000000
	},
	{
		sdate: [1400, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 15],
			DateTime: "1400-10-15 00:00:00",
			DateAber: "15 Dey 1400",
			DateMonth: "Dey",
			DateYearMonth: "1400-Dey",
			DateYear: "1400",
			DateAberWithDate: "Wed 15 Dey 1400",
			DateDoy: "1400.290",
			DateWoy: "1400W42-5",
			DateWithSlash: "1400/10/15",
			DateWithOutSlash: "14001015"
		},
		stime: 1641328200000,
		gdate: [2022, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 0, 5] },
		gtime: 1641328200000
	},
	{
		sdate: [1400, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 29],
			DateTime: "1400-10-29 00:00:00",
			DateAber: "29 Dey 1400",
			DateMonth: "Dey",
			DateYearMonth: "1400-Dey",
			DateYear: "1400",
			DateAberWithDate: "Wed 29 Dey 1400",
			DateDoy: "1400.304",
			DateWoy: "1400W44-5",
			DateWithSlash: "1400/10/29",
			DateWithOutSlash: "14001029"
		},
		stime: 1642537800000,
		gdate: [2022, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 0, 19] },
		gtime: 1642537800000
	},
	{
		sdate: [1400, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 30],
			DateTime: "1400-10-30 00:00:00",
			DateAber: "30 Dey 1400",
			DateMonth: "Dey",
			DateYearMonth: "1400-Dey",
			DateYear: "1400",
			DateAberWithDate: "Thu 30 Dey 1400",
			DateDoy: "1400.305",
			DateWoy: "1400W44-6",
			DateWithSlash: "1400/10/30",
			DateWithOutSlash: "14001030"
		},
		stime: 1642624200000,
		gdate: [2022, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 0, 20] },
		gtime: 1642624200000
	},
	{
		sdate: [1400, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 1],
			DateTime: "1400-11-01 00:00:00",
			DateAber: "01 Bah 1400",
			DateMonth: "Bah",
			DateYearMonth: "1400-Bah",
			DateYear: "1400",
			DateAberWithDate: "Fri 01 Bah 1400",
			DateDoy: "1400.306",
			DateWoy: "1400W44-7",
			DateWithSlash: "1400/11/01",
			DateWithOutSlash: "14001101"
		},
		stime: 1642710600000,
		gdate: [2022, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 0, 21] },
		gtime: 1642710600000
	},
	{
		sdate: [1400, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 2],
			DateTime: "1400-11-02 00:00:00",
			DateAber: "02 Bah 1400",
			DateMonth: "Bah",
			DateYearMonth: "1400-Bah",
			DateYear: "1400",
			DateAberWithDate: "Sat 02 Bah 1400",
			DateDoy: "1400.307",
			DateWoy: "1400W45-1",
			DateWithSlash: "1400/11/02",
			DateWithOutSlash: "14001102"
		},
		stime: 1642797000000,
		gdate: [2022, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 0, 22] },
		gtime: 1642797000000
	},
	{
		sdate: [1400, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 15],
			DateTime: "1400-11-15 00:00:00",
			DateAber: "15 Bah 1400",
			DateMonth: "Bah",
			DateYearMonth: "1400-Bah",
			DateYear: "1400",
			DateAberWithDate: "Fri 15 Bah 1400",
			DateDoy: "1400.320",
			DateWoy: "1400W46-7",
			DateWithSlash: "1400/11/15",
			DateWithOutSlash: "14001115"
		},
		stime: 1643920200000,
		gdate: [2022, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 1, 4] },
		gtime: 1643920200000
	},
	{
		sdate: [1400, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 29],
			DateTime: "1400-11-29 00:00:00",
			DateAber: "29 Bah 1400",
			DateMonth: "Bah",
			DateYearMonth: "1400-Bah",
			DateYear: "1400",
			DateAberWithDate: "Fri 29 Bah 1400",
			DateDoy: "1400.334",
			DateWoy: "1400W48-7",
			DateWithSlash: "1400/11/29",
			DateWithOutSlash: "14001129"
		},
		stime: 1645129800000,
		gdate: [2022, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 1, 18] },
		gtime: 1645129800000
	},
	{
		sdate: [1400, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 30],
			DateTime: "1400-11-30 00:00:00",
			DateAber: "30 Bah 1400",
			DateMonth: "Bah",
			DateYearMonth: "1400-Bah",
			DateYear: "1400",
			DateAberWithDate: "Sat 30 Bah 1400",
			DateDoy: "1400.335",
			DateWoy: "1400W49-1",
			DateWithSlash: "1400/11/30",
			DateWithOutSlash: "14001130"
		},
		stime: 1645216200000,
		gdate: [2022, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 1, 19] },
		gtime: 1645216200000
	},
	{
		sdate: [1400, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 1],
			DateTime: "1400-12-01 00:00:00",
			DateAber: "01 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Sun 01 Esf 1400",
			DateDoy: "1400.336",
			DateWoy: "1400W49-2",
			DateWithSlash: "1400/12/01",
			DateWithOutSlash: "14001201"
		},
		stime: 1645302600000,
		gdate: [2022, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 1, 20] },
		gtime: 1645302600000
	},
	{
		sdate: [1400, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 2],
			DateTime: "1400-12-02 00:00:00",
			DateAber: "02 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Mon 02 Esf 1400",
			DateDoy: "1400.337",
			DateWoy: "1400W49-3",
			DateWithSlash: "1400/12/02",
			DateWithOutSlash: "14001202"
		},
		stime: 1645389000000,
		gdate: [2022, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 1, 21] },
		gtime: 1645389000000
	},
	{
		sdate: [1400, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 3],
			DateTime: "1400-12-03 00:00:00",
			DateAber: "03 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Tue 03 Esf 1400",
			DateDoy: "1400.338",
			DateWoy: "1400W49-4",
			DateWithSlash: "1400/12/03",
			DateWithOutSlash: "14001203"
		},
		stime: 1645475400000,
		gdate: [2022, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 1, 22] },
		gtime: 1645475400000
	},
	{
		sdate: [1400, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 4],
			DateTime: "1400-12-04 00:00:00",
			DateAber: "04 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Wed 04 Esf 1400",
			DateDoy: "1400.339",
			DateWoy: "1400W49-5",
			DateWithSlash: "1400/12/04",
			DateWithOutSlash: "14001204"
		},
		stime: 1645561800000,
		gdate: [2022, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 1, 23] },
		gtime: 1645561800000
	},
	{
		sdate: [1400, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 15],
			DateTime: "1400-12-15 00:00:00",
			DateAber: "15 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Sun 15 Esf 1400",
			DateDoy: "1400.350",
			DateWoy: "1400W51-2",
			DateWithSlash: "1400/12/15",
			DateWithOutSlash: "14001215"
		},
		stime: 1646512200000,
		gdate: [2022, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 2, 6] },
		gtime: 1646512200000
	},
	{
		sdate: [1400, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 25],
			DateTime: "1400-12-25 00:00:00",
			DateAber: "25 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Wed 25 Esf 1400",
			DateDoy: "1400.360",
			DateWoy: "1400W52-5",
			DateWithSlash: "1400/12/25",
			DateWithOutSlash: "14001225"
		},
		stime: 1647376200000,
		gdate: [2022, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 2, 16] },
		gtime: 1647376200000
	},
	{
		sdate: [1400, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 26],
			DateTime: "1400-12-26 00:00:00",
			DateAber: "26 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Thu 26 Esf 1400",
			DateDoy: "1400.361",
			DateWoy: "1400W52-6",
			DateWithSlash: "1400/12/26",
			DateWithOutSlash: "14001226"
		},
		stime: 1647462600000,
		gdate: [2022, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 2, 17] },
		gtime: 1647462600000
	},
	{
		sdate: [1400, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 27],
			DateTime: "1400-12-27 00:00:00",
			DateAber: "27 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Fri 27 Esf 1400",
			DateDoy: "1400.362",
			DateWoy: "1400W52-7",
			DateWithSlash: "1400/12/27",
			DateWithOutSlash: "14001227"
		},
		stime: 1647549000000,
		gdate: [2022, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 2, 18] },
		gtime: 1647549000000
	},
	{
		sdate: [1400, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 28],
			DateTime: "1400-12-28 00:00:00",
			DateAber: "28 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Sat 28 Esf 1400",
			DateDoy: "1400.363",
			DateWoy: "1401W01-1",
			DateWithSlash: "1400/12/28",
			DateWithOutSlash: "14001228"
		},
		stime: 1647635400000,
		gdate: [2022, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 2, 19] },
		gtime: 1647635400000
	},
	{
		sdate: [1400, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 29],
			DateTime: "1400-12-29 00:00:00",
			DateAber: "29 Esf 1400",
			DateMonth: "Esf",
			DateYearMonth: "1400-Esf",
			DateYear: "1400",
			DateAberWithDate: "Sun 29 Esf 1400",
			DateDoy: "1400.364",
			DateWoy: "1401W01-2",
			DateWithSlash: "1400/12/29",
			DateWithOutSlash: "14001229"
		},
		stime: 1647721800000,
		gdate: [2022, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 2, 20] },
		gtime: 1647721800000
	},

	{
		sdate: [1420, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 1],
			DateTime: "1420-01-01 00:00:00",
			DateAber: "01 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Wed 01 Far 1420",
			DateDoy: "1420.000",
			DateWoy: "1419W53-5",
			DateWithSlash: "1420/01/01",
			DateWithOutSlash: "14200101"
		},
		stime: 2247337800000,
		gdate: [2041, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 20] },
		gtime: 2247337800000
	},
	{
		sdate: [1420, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 2],
			DateTime: "1420-01-02 01:00:00",
			DateAber: "02 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Thu 02 Far 1420",
			DateDoy: "1420.001",
			DateWoy: "1419W53-6",
			DateWithSlash: "1420/01/02",
			DateWithOutSlash: "14200102"
		},
		stime: 2247424200000,
		gdate: [2041, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 21] },
		gtime: 2247424200000
	},
	{
		sdate: [1420, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 3],
			DateTime: "1420-01-03 00:00:00",
			DateAber: "03 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Fri 03 Far 1420",
			DateDoy: "1420.002",
			DateWoy: "1419W53-7",
			DateWithSlash: "1420/01/03",
			DateWithOutSlash: "14200103"
		},
		stime: 2247507000000,
		gdate: [2041, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 22] },
		gtime: 2247507000000
	},
	{
		sdate: [1420, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 4],
			DateTime: "1420-01-04 00:00:00",
			DateAber: "04 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Sat 04 Far 1420",
			DateDoy: "1420.003",
			DateWoy: "1420W01-1",
			DateWithSlash: "1420/01/04",
			DateWithOutSlash: "14200104"
		},
		stime: 2247593400000,
		gdate: [2041, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 23] },
		gtime: 2247593400000
	},
	{
		sdate: [1420, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 5],
			DateTime: "1420-01-05 00:00:00",
			DateAber: "05 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Sun 05 Far 1420",
			DateDoy: "1420.004",
			DateWoy: "1420W01-2",
			DateWithSlash: "1420/01/05",
			DateWithOutSlash: "14200105"
		},
		stime: 2247679800000,
		gdate: [2041, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 24] },
		gtime: 2247679800000
	},
	{
		sdate: [1420, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 6],
			DateTime: "1420-01-06 00:00:00",
			DateAber: "06 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Mon 06 Far 1420",
			DateDoy: "1420.005",
			DateWoy: "1420W01-3",
			DateWithSlash: "1420/01/06",
			DateWithOutSlash: "14200106"
		},
		stime: 2247766200000,
		gdate: [2041, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 25] },
		gtime: 2247766200000
	},
	{
		sdate: [1420, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 7],
			DateTime: "1420-01-07 00:00:00",
			DateAber: "07 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Tue 07 Far 1420",
			DateDoy: "1420.006",
			DateWoy: "1420W01-4",
			DateWithSlash: "1420/01/07",
			DateWithOutSlash: "14200107"
		},
		stime: 2247852600000,
		gdate: [2041, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 26] },
		gtime: 2247852600000
	},
	{
		sdate: [1420, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 15],
			DateTime: "1420-01-15 00:00:00",
			DateAber: "15 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Wed 15 Far 1420",
			DateDoy: "1420.014",
			DateWoy: "1420W02-5",
			DateWithSlash: "1420/01/15",
			DateWithOutSlash: "14200115"
		},
		stime: 2248543800000,
		gdate: [2041, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 3] },
		gtime: 2248543800000
	},
	{
		sdate: [1420, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 29],
			DateTime: "1420-01-29 00:00:00",
			DateAber: "29 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Wed 29 Far 1420",
			DateDoy: "1420.028",
			DateWoy: "1420W04-5",
			DateWithSlash: "1420/01/29",
			DateWithOutSlash: "14200129"
		},
		stime: 2249753400000,
		gdate: [2041, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 17] },
		gtime: 2249753400000
	},
	{
		sdate: [1420, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 30],
			DateTime: "1420-01-30 00:00:00",
			DateAber: "30 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Thu 30 Far 1420",
			DateDoy: "1420.029",
			DateWoy: "1420W04-6",
			DateWithSlash: "1420/01/30",
			DateWithOutSlash: "14200130"
		},
		stime: 2249839800000,
		gdate: [2041, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 18] },
		gtime: 2249839800000
	},
	{
		sdate: [1420, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 31],
			DateTime: "1420-01-31 00:00:00",
			DateAber: "31 Far 1420",
			DateMonth: "Far",
			DateYearMonth: "1420-Far",
			DateYear: "1420",
			DateAberWithDate: "Fri 31 Far 1420",
			DateDoy: "1420.030",
			DateWoy: "1420W04-7",
			DateWithSlash: "1420/01/31",
			DateWithOutSlash: "14200131"
		},
		stime: 2249926200000,
		gdate: [2041, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 19] },
		gtime: 2249926200000
	},
	{
		sdate: [1420, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 1],
			DateTime: "1420-02-01 00:00:00",
			DateAber: "01 Ord 1420",
			DateMonth: "Ord",
			DateYearMonth: "1420-Ord",
			DateYear: "1420",
			DateAberWithDate: "Sat 01 Ord 1420",
			DateDoy: "1420.031",
			DateWoy: "1420W05-1",
			DateWithSlash: "1420/02/01",
			DateWithOutSlash: "14200201"
		},
		stime: 2250012600000,
		gdate: [2041, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 20] },
		gtime: 2250012600000
	},
	{
		sdate: [1420, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 2],
			DateTime: "1420-02-02 00:00:00",
			DateAber: "02 Ord 1420",
			DateMonth: "Ord",
			DateYearMonth: "1420-Ord",
			DateYear: "1420",
			DateAberWithDate: "Sun 02 Ord 1420",
			DateDoy: "1420.032",
			DateWoy: "1420W05-2",
			DateWithSlash: "1420/02/02",
			DateWithOutSlash: "14200202"
		},
		stime: 2250099000000,
		gdate: [2041, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 21] },
		gtime: 2250099000000
	},
	{
		sdate: [1420, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 15],
			DateTime: "1420-02-15 00:00:00",
			DateAber: "15 Ord 1420",
			DateMonth: "Ord",
			DateYearMonth: "1420-Ord",
			DateYear: "1420",
			DateAberWithDate: "Sat 15 Ord 1420",
			DateDoy: "1420.045",
			DateWoy: "1420W07-1",
			DateWithSlash: "1420/02/15",
			DateWithOutSlash: "14200215"
		},
		stime: 2251222200000,
		gdate: [2041, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 4] },
		gtime: 2251222200000
	},
	{
		sdate: [1420, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 30],
			DateTime: "1420-02-30 00:00:00",
			DateAber: "30 Ord 1420",
			DateMonth: "Ord",
			DateYearMonth: "1420-Ord",
			DateYear: "1420",
			DateAberWithDate: "Sun 30 Ord 1420",
			DateDoy: "1420.060",
			DateWoy: "1420W09-2",
			DateWithSlash: "1420/02/30",
			DateWithOutSlash: "14200230"
		},
		stime: 2252518200000,
		gdate: [2041, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 19] },
		gtime: 2252518200000
	},
	{
		sdate: [1420, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 31],
			DateTime: "1420-02-31 00:00:00",
			DateAber: "31 Ord 1420",
			DateMonth: "Ord",
			DateYearMonth: "1420-Ord",
			DateYear: "1420",
			DateAberWithDate: "Mon 31 Ord 1420",
			DateDoy: "1420.061",
			DateWoy: "1420W09-3",
			DateWithSlash: "1420/02/31",
			DateWithOutSlash: "14200231"
		},
		stime: 2252604600000,
		gdate: [2041, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 20] },
		gtime: 2252604600000
	},
	{
		sdate: [1420, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 1],
			DateTime: "1420-03-01 00:00:00",
			DateAber: "01 Kho 1420",
			DateMonth: "Kho",
			DateYearMonth: "1420-Kho",
			DateYear: "1420",
			DateAberWithDate: "Tue 01 Kho 1420",
			DateDoy: "1420.062",
			DateWoy: "1420W09-4",
			DateWithSlash: "1420/03/01",
			DateWithOutSlash: "14200301"
		},
		stime: 2252691000000,
		gdate: [2041, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 21] },
		gtime: 2252691000000
	},
	{
		sdate: [1420, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 2],
			DateTime: "1420-03-02 00:00:00",
			DateAber: "02 Kho 1420",
			DateMonth: "Kho",
			DateYearMonth: "1420-Kho",
			DateYear: "1420",
			DateAberWithDate: "Wed 02 Kho 1420",
			DateDoy: "1420.063",
			DateWoy: "1420W09-5",
			DateWithSlash: "1420/03/02",
			DateWithOutSlash: "14200302"
		},
		stime: 2252777400000,
		gdate: [2041, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 22] },
		gtime: 2252777400000
	},
	{
		sdate: [1420, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 15],
			DateTime: "1420-03-15 00:00:00",
			DateAber: "15 Kho 1420",
			DateMonth: "Kho",
			DateYearMonth: "1420-Kho",
			DateYear: "1420",
			DateAberWithDate: "Tue 15 Kho 1420",
			DateDoy: "1420.076",
			DateWoy: "1420W11-4",
			DateWithSlash: "1420/03/15",
			DateWithOutSlash: "14200315"
		},
		stime: 2253900600000,
		gdate: [2041, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 4] },
		gtime: 2253900600000
	},
	{
		sdate: [1420, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 30],
			DateTime: "1420-03-30 00:00:00",
			DateAber: "30 Kho 1420",
			DateMonth: "Kho",
			DateYearMonth: "1420-Kho",
			DateYear: "1420",
			DateAberWithDate: "Wed 30 Kho 1420",
			DateDoy: "1420.091",
			DateWoy: "1420W13-5",
			DateWithSlash: "1420/03/30",
			DateWithOutSlash: "14200330"
		},
		stime: 2255196600000,
		gdate: [2041, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 19] },
		gtime: 2255196600000
	},
	{
		sdate: [1420, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 31],
			DateTime: "1420-03-31 00:00:00",
			DateAber: "31 Kho 1420",
			DateMonth: "Kho",
			DateYearMonth: "1420-Kho",
			DateYear: "1420",
			DateAberWithDate: "Thu 31 Kho 1420",
			DateDoy: "1420.092",
			DateWoy: "1420W13-6",
			DateWithSlash: "1420/03/31",
			DateWithOutSlash: "14200331"
		},
		stime: 2255283000000,
		gdate: [2041, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 20] },
		gtime: 2255283000000
	},
	{
		sdate: [1420, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 1],
			DateTime: "1420-04-01 00:00:00",
			DateAber: "01 Tir 1420",
			DateMonth: "Tir",
			DateYearMonth: "1420-Tir",
			DateYear: "1420",
			DateAberWithDate: "Fri 01 Tir 1420",
			DateDoy: "1420.093",
			DateWoy: "1420W13-7",
			DateWithSlash: "1420/04/01",
			DateWithOutSlash: "14200401"
		},
		stime: 2255369400000,
		gdate: [2041, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 21] },
		gtime: 2255369400000
	},
	{
		sdate: [1420, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 2],
			DateTime: "1420-04-02 00:00:00",
			DateAber: "02 Tir 1420",
			DateMonth: "Tir",
			DateYearMonth: "1420-Tir",
			DateYear: "1420",
			DateAberWithDate: "Sat 02 Tir 1420",
			DateDoy: "1420.094",
			DateWoy: "1420W14-1",
			DateWithSlash: "1420/04/02",
			DateWithOutSlash: "14200402"
		},
		stime: 2255455800000,
		gdate: [2041, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 22] },
		gtime: 2255455800000
	},
	{
		sdate: [1420, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 15],
			DateTime: "1420-04-15 00:00:00",
			DateAber: "15 Tir 1420",
			DateMonth: "Tir",
			DateYearMonth: "1420-Tir",
			DateYear: "1420",
			DateAberWithDate: "Fri 15 Tir 1420",
			DateDoy: "1420.107",
			DateWoy: "1420W15-7",
			DateWithSlash: "1420/04/15",
			DateWithOutSlash: "14200415"
		},
		stime: 2256579000000,
		gdate: [2041, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 5] },
		gtime: 2256579000000
	},
	{
		sdate: [1420, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 30],
			DateTime: "1420-04-30 00:00:00",
			DateAber: "30 Tir 1420",
			DateMonth: "Tir",
			DateYearMonth: "1420-Tir",
			DateYear: "1420",
			DateAberWithDate: "Sat 30 Tir 1420",
			DateDoy: "1420.122",
			DateWoy: "1420W18-1",
			DateWithSlash: "1420/04/30",
			DateWithOutSlash: "14200430"
		},
		stime: 2257875000000,
		gdate: [2041, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 20] },
		gtime: 2257875000000
	},
	{
		sdate: [1420, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 31],
			DateTime: "1420-04-31 00:00:00",
			DateAber: "31 Tir 1420",
			DateMonth: "Tir",
			DateYearMonth: "1420-Tir",
			DateYear: "1420",
			DateAberWithDate: "Sun 31 Tir 1420",
			DateDoy: "1420.123",
			DateWoy: "1420W18-2",
			DateWithSlash: "1420/04/31",
			DateWithOutSlash: "14200431"
		},
		stime: 2257961400000,
		gdate: [2041, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 21] },
		gtime: 2257961400000
	},
	{
		sdate: [1420, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 1],
			DateTime: "1420-05-01 00:00:00",
			DateAber: "01 Amo 1420",
			DateMonth: "Amo",
			DateYearMonth: "1420-Amo",
			DateYear: "1420",
			DateAberWithDate: "Mon 01 Amo 1420",
			DateDoy: "1420.124",
			DateWoy: "1420W18-3",
			DateWithSlash: "1420/05/01",
			DateWithOutSlash: "14200501"
		},
		stime: 2258047800000,
		gdate: [2041, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 22] },
		gtime: 2258047800000
	},
	{
		sdate: [1420, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 2],
			DateTime: "1420-05-02 00:00:00",
			DateAber: "02 Amo 1420",
			DateMonth: "Amo",
			DateYearMonth: "1420-Amo",
			DateYear: "1420",
			DateAberWithDate: "Tue 02 Amo 1420",
			DateDoy: "1420.125",
			DateWoy: "1420W18-4",
			DateWithSlash: "1420/05/02",
			DateWithOutSlash: "14200502"
		},
		stime: 2258134200000,
		gdate: [2041, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 23] },
		gtime: 2258134200000
	},
	{
		sdate: [1420, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 15],
			DateTime: "1420-05-15 00:00:00",
			DateAber: "15 Amo 1420",
			DateMonth: "Amo",
			DateYearMonth: "1420-Amo",
			DateYear: "1420",
			DateAberWithDate: "Mon 15 Amo 1420",
			DateDoy: "1420.138",
			DateWoy: "1420W20-3",
			DateWithSlash: "1420/05/15",
			DateWithOutSlash: "14200515"
		},
		stime: 2259257400000,
		gdate: [2041, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 5] },
		gtime: 2259257400000
	},
	{
		sdate: [1420, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 30],
			DateTime: "1420-05-30 00:00:00",
			DateAber: "30 Amo 1420",
			DateMonth: "Amo",
			DateYearMonth: "1420-Amo",
			DateYear: "1420",
			DateAberWithDate: "Tue 30 Amo 1420",
			DateDoy: "1420.153",
			DateWoy: "1420W22-4",
			DateWithSlash: "1420/05/30",
			DateWithOutSlash: "14200530"
		},
		stime: 2260553400000,
		gdate: [2041, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 20] },
		gtime: 2260553400000
	},
	{
		sdate: [1420, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 31],
			DateTime: "1420-05-31 00:00:00",
			DateAber: "31 Amo 1420",
			DateMonth: "Amo",
			DateYearMonth: "1420-Amo",
			DateYear: "1420",
			DateAberWithDate: "Wed 31 Amo 1420",
			DateDoy: "1420.154",
			DateWoy: "1420W22-5",
			DateWithSlash: "1420/05/31",
			DateWithOutSlash: "14200531"
		},
		stime: 2260639800000,
		gdate: [2041, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 21] },
		gtime: 2260639800000
	},
	{
		sdate: [1420, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 1],
			DateTime: "1420-06-01 00:00:00",
			DateAber: "01 Sha 1420",
			DateMonth: "Sha",
			DateYearMonth: "1420-Sha",
			DateYear: "1420",
			DateAberWithDate: "Thu 01 Sha 1420",
			DateDoy: "1420.155",
			DateWoy: "1420W22-6",
			DateWithSlash: "1420/06/01",
			DateWithOutSlash: "14200601"
		},
		stime: 2260726200000,
		gdate: [2041, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 22] },
		gtime: 2260726200000
	},
	{
		sdate: [1420, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 2],
			DateTime: "1420-06-02 00:00:00",
			DateAber: "02 Sha 1420",
			DateMonth: "Sha",
			DateYearMonth: "1420-Sha",
			DateYear: "1420",
			DateAberWithDate: "Fri 02 Sha 1420",
			DateDoy: "1420.156",
			DateWoy: "1420W22-7",
			DateWithSlash: "1420/06/02",
			DateWithOutSlash: "14200602"
		},
		stime: 2260812600000,
		gdate: [2041, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 23] },
		gtime: 2260812600000
	},
	{
		sdate: [1420, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 15],
			DateTime: "1420-06-15 00:00:00",
			DateAber: "15 Sha 1420",
			DateMonth: "Sha",
			DateYearMonth: "1420-Sha",
			DateYear: "1420",
			DateAberWithDate: "Thu 15 Sha 1420",
			DateDoy: "1420.169",
			DateWoy: "1420W24-6",
			DateWithSlash: "1420/06/15",
			DateWithOutSlash: "14200615"
		},
		stime: 2261935800000,
		gdate: [2041, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 5] },
		gtime: 2261935800000
	},
	{
		sdate: [1420, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 29],
			DateTime: "1420-06-29 00:00:00",
			DateAber: "29 Sha 1420",
			DateMonth: "Sha",
			DateYearMonth: "1420-Sha",
			DateYear: "1420",
			DateAberWithDate: "Thu 29 Sha 1420",
			DateDoy: "1420.183",
			DateWoy: "1420W26-6",
			DateWithSlash: "1420/06/29",
			DateWithOutSlash: "14200629"
		},
		stime: 2263145400000,
		gdate: [2041, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 19] },
		gtime: 2263145400000
	},
	{
		sdate: [1420, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 30],
			DateTime: "1420-06-30 00:00:00",
			DateAber: "30 Sha 1420",
			DateMonth: "Sha",
			DateYearMonth: "1420-Sha",
			DateYear: "1420",
			DateAberWithDate: "Fri 30 Sha 1420",
			DateDoy: "1420.184",
			DateWoy: "1420W26-7",
			DateWithSlash: "1420/06/30",
			DateWithOutSlash: "14200630"
		},
		stime: 2263231800000,
		gdate: [2041, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 20] },
		gtime: 2263231800000
	},
	{
		sdate: [1420, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 1],
			DateTime: "1420-07-01 00:00:00",
			DateAber: "01 Meh 1420",
			DateMonth: "Meh",
			DateYearMonth: "1420-Meh",
			DateYear: "1420",
			DateAberWithDate: "Sun 01 Meh 1420",
			DateDoy: "1420.186",
			DateWoy: "1420W27-2",
			DateWithSlash: "1420/07/01",
			DateWithOutSlash: "14200701"
		},
		stime: 2263408200000,
		gdate: [2041, 9, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 22] },
		gtime: 2263408200000
	},
	{
		sdate: [1420, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 2],
			DateTime: "1420-07-02 00:00:00",
			DateAber: "02 Meh 1420",
			DateMonth: "Meh",
			DateYearMonth: "1420-Meh",
			DateYear: "1420",
			DateAberWithDate: "Mon 02 Meh 1420",
			DateDoy: "1420.187",
			DateWoy: "1420W27-3",
			DateWithSlash: "1420/07/02",
			DateWithOutSlash: "14200702"
		},
		stime: 2263494600000,
		gdate: [2041, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 23] },
		gtime: 2263494600000
	},
	{
		sdate: [1420, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 15],
			DateTime: "1420-07-15 00:00:00",
			DateAber: "15 Meh 1420",
			DateMonth: "Meh",
			DateYearMonth: "1420-Meh",
			DateYear: "1420",
			DateAberWithDate: "Sun 15 Meh 1420",
			DateDoy: "1420.200",
			DateWoy: "1420W29-2",
			DateWithSlash: "1420/07/15",
			DateWithOutSlash: "14200715"
		},
		stime: 2264617800000,
		gdate: [2041, 10, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 9, 6] },
		gtime: 2264617800000
	},
	{
		sdate: [1420, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 29],
			DateTime: "1420-07-29 00:00:00",
			DateAber: "29 Meh 1420",
			DateMonth: "Meh",
			DateYearMonth: "1420-Meh",
			DateYear: "1420",
			DateAberWithDate: "Sun 29 Meh 1420",
			DateDoy: "1420.214",
			DateWoy: "1420W31-2",
			DateWithSlash: "1420/07/29",
			DateWithOutSlash: "14200729"
		},
		stime: 2265827400000,
		gdate: [2041, 10, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 9, 20] },
		gtime: 2265827400000
	},
	{
		sdate: [1420, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 30],
			DateTime: "1420-07-30 00:00:00",
			DateAber: "30 Meh 1420",
			DateMonth: "Meh",
			DateYearMonth: "1420-Meh",
			DateYear: "1420",
			DateAberWithDate: "Mon 30 Meh 1420",
			DateDoy: "1420.215",
			DateWoy: "1420W31-3",
			DateWithSlash: "1420/07/30",
			DateWithOutSlash: "14200730"
		},
		stime: 2265913800000,
		gdate: [2041, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 9, 21] },
		gtime: 2265913800000
	},
	{
		sdate: [1420, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 1],
			DateTime: "1420-08-01 00:00:00",
			DateAber: "01 Aba 1420",
			DateMonth: "Aba",
			DateYearMonth: "1420-Aba",
			DateYear: "1420",
			DateAberWithDate: "Tue 01 Aba 1420",
			DateDoy: "1420.216",
			DateWoy: "1420W31-4",
			DateWithSlash: "1420/08/01",
			DateWithOutSlash: "14200801"
		},
		stime: 2266000200000,
		gdate: [2041, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 9, 22] },
		gtime: 2266000200000
	},
	{
		sdate: [1420, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 2],
			DateTime: "1420-08-02 00:00:00",
			DateAber: "02 Aba 1420",
			DateMonth: "Aba",
			DateYearMonth: "1420-Aba",
			DateYear: "1420",
			DateAberWithDate: "Wed 02 Aba 1420",
			DateDoy: "1420.217",
			DateWoy: "1420W31-5",
			DateWithSlash: "1420/08/02",
			DateWithOutSlash: "14200802"
		},
		stime: 2266086600000,
		gdate: [2041, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 9, 23] },
		gtime: 2266086600000
	},
	{
		sdate: [1420, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 15],
			DateTime: "1420-08-15 00:00:00",
			DateAber: "15 Aba 1420",
			DateMonth: "Aba",
			DateYearMonth: "1420-Aba",
			DateYear: "1420",
			DateAberWithDate: "Tue 15 Aba 1420",
			DateDoy: "1420.230",
			DateWoy: "1420W33-4",
			DateWithSlash: "1420/08/15",
			DateWithOutSlash: "14200815"
		},
		stime: 2267209800000,
		gdate: [2041, 11, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 10, 5] },
		gtime: 2267209800000
	},
	{
		sdate: [1420, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 29],
			DateTime: "1420-08-29 00:00:00",
			DateAber: "29 Aba 1420",
			DateMonth: "Aba",
			DateYearMonth: "1420-Aba",
			DateYear: "1420",
			DateAberWithDate: "Tue 29 Aba 1420",
			DateDoy: "1420.244",
			DateWoy: "1420W35-4",
			DateWithSlash: "1420/08/29",
			DateWithOutSlash: "14200829"
		},
		stime: 2268419400000,
		gdate: [2041, 11, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 10, 19] },
		gtime: 2268419400000
	},
	{
		sdate: [1420, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 30],
			DateTime: "1420-08-30 00:00:00",
			DateAber: "30 Aba 1420",
			DateMonth: "Aba",
			DateYearMonth: "1420-Aba",
			DateYear: "1420",
			DateAberWithDate: "Wed 30 Aba 1420",
			DateDoy: "1420.245",
			DateWoy: "1420W35-5",
			DateWithSlash: "1420/08/30",
			DateWithOutSlash: "14200830"
		},
		stime: 2268505800000,
		gdate: [2041, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 10, 20] },
		gtime: 2268505800000
	},
	{
		sdate: [1420, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 1],
			DateTime: "1420-09-01 00:00:00",
			DateAber: "01 Aza 1420",
			DateMonth: "Aza",
			DateYearMonth: "1420-Aza",
			DateYear: "1420",
			DateAberWithDate: "Thu 01 Aza 1420",
			DateDoy: "1420.246",
			DateWoy: "1420W35-6",
			DateWithSlash: "1420/09/01",
			DateWithOutSlash: "14200901"
		},
		stime: 2268592200000,
		gdate: [2041, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 10, 21] },
		gtime: 2268592200000
	},
	{
		sdate: [1420, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 2],
			DateTime: "1420-09-02 00:00:00",
			DateAber: "02 Aza 1420",
			DateMonth: "Aza",
			DateYearMonth: "1420-Aza",
			DateYear: "1420",
			DateAberWithDate: "Fri 02 Aza 1420",
			DateDoy: "1420.247",
			DateWoy: "1420W35-7",
			DateWithSlash: "1420/09/02",
			DateWithOutSlash: "14200902"
		},
		stime: 2268678600000,
		gdate: [2041, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 10, 22] },
		gtime: 2268678600000
	},
	{
		sdate: [1420, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 15],
			DateTime: "1420-09-15 00:00:00",
			DateAber: "15 Aza 1420",
			DateMonth: "Aza",
			DateYearMonth: "1420-Aza",
			DateYear: "1420",
			DateAberWithDate: "Thu 15 Aza 1420",
			DateDoy: "1420.260",
			DateWoy: "1420W37-6",
			DateWithSlash: "1420/09/15",
			DateWithOutSlash: "14200915"
		},
		stime: 2269801800000,
		gdate: [2041, 12, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 11, 5] },
		gtime: 2269801800000
	},
	{
		sdate: [1420, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 29],
			DateTime: "1420-09-29 00:00:00",
			DateAber: "29 Aza 1420",
			DateMonth: "Aza",
			DateYearMonth: "1420-Aza",
			DateYear: "1420",
			DateAberWithDate: "Thu 29 Aza 1420",
			DateDoy: "1420.274",
			DateWoy: "1420W39-6",
			DateWithSlash: "1420/09/29",
			DateWithOutSlash: "14200929"
		},
		stime: 2271011400000,
		gdate: [2041, 12, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 11, 19] },
		gtime: 2271011400000
	},
	{
		sdate: [1420, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 30],
			DateTime: "1420-09-30 00:00:00",
			DateAber: "30 Aza 1420",
			DateMonth: "Aza",
			DateYearMonth: "1420-Aza",
			DateYear: "1420",
			DateAberWithDate: "Fri 30 Aza 1420",
			DateDoy: "1420.275",
			DateWoy: "1420W39-7",
			DateWithSlash: "1420/09/30",
			DateWithOutSlash: "14200930"
		},
		stime: 2271097800000,
		gdate: [2041, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 11, 20] },
		gtime: 2271097800000
	},
	{
		sdate: [1420, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 1],
			DateTime: "1420-10-01 00:00:00",
			DateAber: "01 Dey 1420",
			DateMonth: "Dey",
			DateYearMonth: "1420-Dey",
			DateYear: "1420",
			DateAberWithDate: "Sat 01 Dey 1420",
			DateDoy: "1420.276",
			DateWoy: "1420W40-1",
			DateWithSlash: "1420/10/01",
			DateWithOutSlash: "14201001"
		},
		stime: 2271184200000,
		gdate: [2041, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 11, 21] },
		gtime: 2271184200000
	},
	{
		sdate: [1420, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 2],
			DateTime: "1420-10-02 00:00:00",
			DateAber: "02 Dey 1420",
			DateMonth: "Dey",
			DateYearMonth: "1420-Dey",
			DateYear: "1420",
			DateAberWithDate: "Sun 02 Dey 1420",
			DateDoy: "1420.277",
			DateWoy: "1420W40-2",
			DateWithSlash: "1420/10/02",
			DateWithOutSlash: "14201002"
		},
		stime: 2271270600000,
		gdate: [2041, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 11, 22] },
		gtime: 2271270600000
	},
	{
		sdate: [1420, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 15],
			DateTime: "1420-10-15 00:00:00",
			DateAber: "15 Dey 1420",
			DateMonth: "Dey",
			DateYearMonth: "1420-Dey",
			DateYear: "1420",
			DateAberWithDate: "Sat 15 Dey 1420",
			DateDoy: "1420.290",
			DateWoy: "1420W42-1",
			DateWithSlash: "1420/10/15",
			DateWithOutSlash: "14201015"
		},
		stime: 2272393800000,
		gdate: [2042, 1, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 0, 4] },
		gtime: 2272393800000
	},
	{
		sdate: [1420, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 29],
			DateTime: "1420-10-29 00:00:00",
			DateAber: "29 Dey 1420",
			DateMonth: "Dey",
			DateYearMonth: "1420-Dey",
			DateYear: "1420",
			DateAberWithDate: "Sat 29 Dey 1420",
			DateDoy: "1420.304",
			DateWoy: "1420W44-1",
			DateWithSlash: "1420/10/29",
			DateWithOutSlash: "14201029"
		},
		stime: 2273603400000,
		gdate: [2042, 1, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 0, 18] },
		gtime: 2273603400000
	},
	{
		sdate: [1420, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 30],
			DateTime: "1420-10-30 00:00:00",
			DateAber: "30 Dey 1420",
			DateMonth: "Dey",
			DateYearMonth: "1420-Dey",
			DateYear: "1420",
			DateAberWithDate: "Sun 30 Dey 1420",
			DateDoy: "1420.305",
			DateWoy: "1420W44-2",
			DateWithSlash: "1420/10/30",
			DateWithOutSlash: "14201030"
		},
		stime: 2273689800000,
		gdate: [2042, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 0, 19] },
		gtime: 2273689800000
	},
	{
		sdate: [1420, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 1],
			DateTime: "1420-11-01 00:00:00",
			DateAber: "01 Bah 1420",
			DateMonth: "Bah",
			DateYearMonth: "1420-Bah",
			DateYear: "1420",
			DateAberWithDate: "Mon 01 Bah 1420",
			DateDoy: "1420.306",
			DateWoy: "1420W44-3",
			DateWithSlash: "1420/11/01",
			DateWithOutSlash: "14201101"
		},
		stime: 2273776200000,
		gdate: [2042, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 0, 20] },
		gtime: 2273776200000
	},
	{
		sdate: [1420, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 2],
			DateTime: "1420-11-02 00:00:00",
			DateAber: "02 Bah 1420",
			DateMonth: "Bah",
			DateYearMonth: "1420-Bah",
			DateYear: "1420",
			DateAberWithDate: "Tue 02 Bah 1420",
			DateDoy: "1420.307",
			DateWoy: "1420W44-4",
			DateWithSlash: "1420/11/02",
			DateWithOutSlash: "14201102"
		},
		stime: 2273862600000,
		gdate: [2042, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 0, 21] },
		gtime: 2273862600000
	},
	{
		sdate: [1420, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 15],
			DateTime: "1420-11-15 00:00:00",
			DateAber: "15 Bah 1420",
			DateMonth: "Bah",
			DateYearMonth: "1420-Bah",
			DateYear: "1420",
			DateAberWithDate: "Mon 15 Bah 1420",
			DateDoy: "1420.320",
			DateWoy: "1420W46-3",
			DateWithSlash: "1420/11/15",
			DateWithOutSlash: "14201115"
		},
		stime: 2274985800000,
		gdate: [2042, 2, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 1, 3] },
		gtime: 2274985800000
	},
	{
		sdate: [1420, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 29],
			DateTime: "1420-11-29 00:00:00",
			DateAber: "29 Bah 1420",
			DateMonth: "Bah",
			DateYearMonth: "1420-Bah",
			DateYear: "1420",
			DateAberWithDate: "Mon 29 Bah 1420",
			DateDoy: "1420.334",
			DateWoy: "1420W48-3",
			DateWithSlash: "1420/11/29",
			DateWithOutSlash: "14201129"
		},
		stime: 2276195400000,
		gdate: [2042, 2, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 1, 17] },
		gtime: 2276195400000
	},
	{
		sdate: [1420, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 30],
			DateTime: "1420-11-30 00:00:00",
			DateAber: "30 Bah 1420",
			DateMonth: "Bah",
			DateYearMonth: "1420-Bah",
			DateYear: "1420",
			DateAberWithDate: "Tue 30 Bah 1420",
			DateDoy: "1420.335",
			DateWoy: "1420W48-4",
			DateWithSlash: "1420/11/30",
			DateWithOutSlash: "14201130"
		},
		stime: 2276281800000,
		gdate: [2042, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 1, 18] },
		gtime: 2276281800000
	},
	{
		sdate: [1420, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 1],
			DateTime: "1420-12-01 00:00:00",
			DateAber: "01 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Wed 01 Esf 1420",
			DateDoy: "1420.336",
			DateWoy: "1420W48-5",
			DateWithSlash: "1420/12/01",
			DateWithOutSlash: "14201201"
		},
		stime: 2276368200000,
		gdate: [2042, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 1, 19] },
		gtime: 2276368200000
	},
	{
		sdate: [1420, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 2],
			DateTime: "1420-12-02 00:00:00",
			DateAber: "02 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Thu 02 Esf 1420",
			DateDoy: "1420.337",
			DateWoy: "1420W48-6",
			DateWithSlash: "1420/12/02",
			DateWithOutSlash: "14201202"
		},
		stime: 2276454600000,
		gdate: [2042, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 1, 20] },
		gtime: 2276454600000
	},
	{
		sdate: [1420, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 3],
			DateTime: "1420-12-03 00:00:00",
			DateAber: "03 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Fri 03 Esf 1420",
			DateDoy: "1420.338",
			DateWoy: "1420W48-7",
			DateWithSlash: "1420/12/03",
			DateWithOutSlash: "14201203"
		},
		stime: 2276541000000,
		gdate: [2042, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 1, 21] },
		gtime: 2276541000000
	},
	{
		sdate: [1420, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 4],
			DateTime: "1420-12-04 00:00:00",
			DateAber: "04 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Sat 04 Esf 1420",
			DateDoy: "1420.339",
			DateWoy: "1420W49-1",
			DateWithSlash: "1420/12/04",
			DateWithOutSlash: "14201204"
		},
		stime: 2276627400000,
		gdate: [2042, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 1, 22] },
		gtime: 2276627400000
	},
	{
		sdate: [1420, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 15],
			DateTime: "1420-12-15 00:00:00",
			DateAber: "15 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Wed 15 Esf 1420",
			DateDoy: "1420.350",
			DateWoy: "1420W50-5",
			DateWithSlash: "1420/12/15",
			DateWithOutSlash: "14201215"
		},
		stime: 2277577800000,
		gdate: [2042, 3, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 5] },
		gtime: 2277577800000
	},
	{
		sdate: [1420, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 25],
			DateTime: "1420-12-25 00:00:00",
			DateAber: "25 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Sat 25 Esf 1420",
			DateDoy: "1420.360",
			DateWoy: "1420W52-1",
			DateWithSlash: "1420/12/25",
			DateWithOutSlash: "14201225"
		},
		stime: 2278441800000,
		gdate: [2042, 3, 15, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 15] },
		gtime: 2278441800000
	},
	{
		sdate: [1420, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 26],
			DateTime: "1420-12-26 00:00:00",
			DateAber: "26 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Sun 26 Esf 1420",
			DateDoy: "1420.361",
			DateWoy: "1420W52-2",
			DateWithSlash: "1420/12/26",
			DateWithOutSlash: "14201226"
		},
		stime: 2278528200000,
		gdate: [2042, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 16] },
		gtime: 2278528200000
	},
	{
		sdate: [1420, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 27],
			DateTime: "1420-12-27 00:00:00",
			DateAber: "27 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Mon 27 Esf 1420",
			DateDoy: "1420.362",
			DateWoy: "1420W52-3",
			DateWithSlash: "1420/12/27",
			DateWithOutSlash: "14201227"
		},
		stime: 2278614600000,
		gdate: [2042, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 17] },
		gtime: 2278614600000
	},
	{
		sdate: [1420, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 28],
			DateTime: "1420-12-28 00:00:00",
			DateAber: "28 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Tue 28 Esf 1420",
			DateDoy: "1420.363",
			DateWoy: "1420W52-4",
			DateWithSlash: "1420/12/28",
			DateWithOutSlash: "14201228"
		},
		stime: 2278701000000,
		gdate: [2042, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 18] },
		gtime: 2278701000000
	},
	{
		sdate: [1420, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 29],
			DateTime: "1420-12-29 00:00:00",
			DateAber: "29 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Wed 29 Esf 1420",
			DateDoy: "1420.364",
			DateWoy: "1420W52-5",
			DateWithSlash: "1420/12/29",
			DateWithOutSlash: "14201229"
		},
		stime: 2278787400000,
		gdate: [2042, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 19] },
		gtime: 2278787400000
	},
	{
		sdate: [1420, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 30],
			DateTime: "1420-12-30 00:00:00",
			DateAber: "30 Esf 1420",
			DateMonth: "Esf",
			DateYearMonth: "1420-Esf",
			DateYear: "1420",
			DateAberWithDate: "Thu 30 Esf 1420",
			DateDoy: "1420.365",
			DateWoy: "1420W52-6",
			DateWithSlash: "1420/12/30",
			DateWithOutSlash: "14201230"
		},
		stime: 2278873800000,
		gdate: [2042, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 20] },
		gtime: 2278873800000
	},
	{
		sdate: [1440, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 1],
			DateTime: "1440-01-01 00:00:00",
			DateAber: "01 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Sun 01 Far 1440",
			DateDoy: "1440.000",
			DateWoy: "1440W01-2",
			DateWithSlash: "1440/01/01",
			DateWithOutSlash: "14400101"
		},
		stime: 2878489800000,
		gdate: [2061, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 20] },
		gtime: 2878489800000
	},
	{
		sdate: [1440, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 2],
			DateTime: "1440-01-02 01:00:00",
			DateAber: "02 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Mon 02 Far 1440",
			DateDoy: "1440.001",
			DateWoy: "1440W01-3",
			DateWithSlash: "1440/01/02",
			DateWithOutSlash: "14400102"
		},
		stime: 2878576200000,
		gdate: [2061, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 21] },
		gtime: 2878576200000
	},
	{
		sdate: [1440, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 3],
			DateTime: "1440-01-03 00:00:00",
			DateAber: "03 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Tue 03 Far 1440",
			DateDoy: "1440.002",
			DateWoy: "1440W01-4",
			DateWithSlash: "1440/01/03",
			DateWithOutSlash: "14400103"
		},
		stime: 2878659000000,
		gdate: [2061, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 22] },
		gtime: 2878659000000
	},
	{
		sdate: [1440, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 4],
			DateTime: "1440-01-04 00:00:00",
			DateAber: "04 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Wed 04 Far 1440",
			DateDoy: "1440.003",
			DateWoy: "1440W01-5",
			DateWithSlash: "1440/01/04",
			DateWithOutSlash: "14400104"
		},
		stime: 2878745400000,
		gdate: [2061, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 23] },
		gtime: 2878745400000
	},
	{
		sdate: [1440, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 5],
			DateTime: "1440-01-05 00:00:00",
			DateAber: "05 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Thu 05 Far 1440",
			DateDoy: "1440.004",
			DateWoy: "1440W01-6",
			DateWithSlash: "1440/01/05",
			DateWithOutSlash: "14400105"
		},
		stime: 2878831800000,
		gdate: [2061, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 24] },
		gtime: 2878831800000
	},
	{
		sdate: [1440, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 6],
			DateTime: "1440-01-06 00:00:00",
			DateAber: "06 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Fri 06 Far 1440",
			DateDoy: "1440.005",
			DateWoy: "1440W01-7",
			DateWithSlash: "1440/01/06",
			DateWithOutSlash: "14400106"
		},
		stime: 2878918200000,
		gdate: [2061, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 25] },
		gtime: 2878918200000
	},
	{
		sdate: [1440, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 7],
			DateTime: "1440-01-07 00:00:00",
			DateAber: "07 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Sat 07 Far 1440",
			DateDoy: "1440.006",
			DateWoy: "1440W02-1",
			DateWithSlash: "1440/01/07",
			DateWithOutSlash: "14400107"
		},
		stime: 2879004600000,
		gdate: [2061, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 26] },
		gtime: 2879004600000
	},
	{
		sdate: [1440, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 15],
			DateTime: "1440-01-15 00:00:00",
			DateAber: "15 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Sun 15 Far 1440",
			DateDoy: "1440.014",
			DateWoy: "1440W03-2",
			DateWithSlash: "1440/01/15",
			DateWithOutSlash: "14400115"
		},
		stime: 2879695800000,
		gdate: [2061, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 3] },
		gtime: 2879695800000
	},
	{
		sdate: [1440, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 29],
			DateTime: "1440-01-29 00:00:00",
			DateAber: "29 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Sun 29 Far 1440",
			DateDoy: "1440.028",
			DateWoy: "1440W05-2",
			DateWithSlash: "1440/01/29",
			DateWithOutSlash: "14400129"
		},
		stime: 2880905400000,
		gdate: [2061, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 17] },
		gtime: 2880905400000
	},
	{
		sdate: [1440, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 30],
			DateTime: "1440-01-30 00:00:00",
			DateAber: "30 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Mon 30 Far 1440",
			DateDoy: "1440.029",
			DateWoy: "1440W05-3",
			DateWithSlash: "1440/01/30",
			DateWithOutSlash: "14400130"
		},
		stime: 2880991800000,
		gdate: [2061, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 18] },
		gtime: 2880991800000
	},
	{
		sdate: [1440, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 31],
			DateTime: "1440-01-31 00:00:00",
			DateAber: "31 Far 1440",
			DateMonth: "Far",
			DateYearMonth: "1440-Far",
			DateYear: "1440",
			DateAberWithDate: "Tue 31 Far 1440",
			DateDoy: "1440.030",
			DateWoy: "1440W05-4",
			DateWithSlash: "1440/01/31",
			DateWithOutSlash: "14400131"
		},
		stime: 2881078200000,
		gdate: [2061, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 19] },
		gtime: 2881078200000
	},
	{
		sdate: [1440, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 1],
			DateTime: "1440-02-01 00:00:00",
			DateAber: "01 Ord 1440",
			DateMonth: "Ord",
			DateYearMonth: "1440-Ord",
			DateYear: "1440",
			DateAberWithDate: "Wed 01 Ord 1440",
			DateDoy: "1440.031",
			DateWoy: "1440W05-5",
			DateWithSlash: "1440/02/01",
			DateWithOutSlash: "14400201"
		},
		stime: 2881164600000,
		gdate: [2061, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 20] },
		gtime: 2881164600000
	},
	{
		sdate: [1440, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 2],
			DateTime: "1440-02-02 00:00:00",
			DateAber: "02 Ord 1440",
			DateMonth: "Ord",
			DateYearMonth: "1440-Ord",
			DateYear: "1440",
			DateAberWithDate: "Thu 02 Ord 1440",
			DateDoy: "1440.032",
			DateWoy: "1440W05-6",
			DateWithSlash: "1440/02/02",
			DateWithOutSlash: "14400202"
		},
		stime: 2881251000000,
		gdate: [2061, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 21] },
		gtime: 2881251000000
	},
	{
		sdate: [1440, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 15],
			DateTime: "1440-02-15 00:00:00",
			DateAber: "15 Ord 1440",
			DateMonth: "Ord",
			DateYearMonth: "1440-Ord",
			DateYear: "1440",
			DateAberWithDate: "Wed 15 Ord 1440",
			DateDoy: "1440.045",
			DateWoy: "1440W07-5",
			DateWithSlash: "1440/02/15",
			DateWithOutSlash: "14400215"
		},
		stime: 2882374200000,
		gdate: [2061, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 4] },
		gtime: 2882374200000
	},
	{
		sdate: [1440, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 30],
			DateTime: "1440-02-30 00:00:00",
			DateAber: "30 Ord 1440",
			DateMonth: "Ord",
			DateYearMonth: "1440-Ord",
			DateYear: "1440",
			DateAberWithDate: "Thu 30 Ord 1440",
			DateDoy: "1440.060",
			DateWoy: "1440W09-6",
			DateWithSlash: "1440/02/30",
			DateWithOutSlash: "14400230"
		},
		stime: 2883670200000,
		gdate: [2061, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 19] },
		gtime: 2883670200000
	},
	{
		sdate: [1440, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 31],
			DateTime: "1440-02-31 00:00:00",
			DateAber: "31 Ord 1440",
			DateMonth: "Ord",
			DateYearMonth: "1440-Ord",
			DateYear: "1440",
			DateAberWithDate: "Fri 31 Ord 1440",
			DateDoy: "1440.061",
			DateWoy: "1440W09-7",
			DateWithSlash: "1440/02/31",
			DateWithOutSlash: "14400231"
		},
		stime: 2883756600000,
		gdate: [2061, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 20] },
		gtime: 2883756600000
	},
	{
		sdate: [1440, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 1],
			DateTime: "1440-03-01 00:00:00",
			DateAber: "01 Kho 1440",
			DateMonth: "Kho",
			DateYearMonth: "1440-Kho",
			DateYear: "1440",
			DateAberWithDate: "Sat 01 Kho 1440",
			DateDoy: "1440.062",
			DateWoy: "1440W10-1",
			DateWithSlash: "1440/03/01",
			DateWithOutSlash: "14400301"
		},
		stime: 2883843000000,
		gdate: [2061, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 21] },
		gtime: 2883843000000
	},
	{
		sdate: [1440, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 2],
			DateTime: "1440-03-02 00:00:00",
			DateAber: "02 Kho 1440",
			DateMonth: "Kho",
			DateYearMonth: "1440-Kho",
			DateYear: "1440",
			DateAberWithDate: "Sun 02 Kho 1440",
			DateDoy: "1440.063",
			DateWoy: "1440W10-2",
			DateWithSlash: "1440/03/02",
			DateWithOutSlash: "14400302"
		},
		stime: 2883929400000,
		gdate: [2061, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 22] },
		gtime: 2883929400000
	},
	{
		sdate: [1440, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 15],
			DateTime: "1440-03-15 00:00:00",
			DateAber: "15 Kho 1440",
			DateMonth: "Kho",
			DateYearMonth: "1440-Kho",
			DateYear: "1440",
			DateAberWithDate: "Sat 15 Kho 1440",
			DateDoy: "1440.076",
			DateWoy: "1440W12-1",
			DateWithSlash: "1440/03/15",
			DateWithOutSlash: "14400315"
		},
		stime: 2885052600000,
		gdate: [2061, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 4] },
		gtime: 2885052600000
	},
	{
		sdate: [1440, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 30],
			DateTime: "1440-03-30 00:00:00",
			DateAber: "30 Kho 1440",
			DateMonth: "Kho",
			DateYearMonth: "1440-Kho",
			DateYear: "1440",
			DateAberWithDate: "Sun 30 Kho 1440",
			DateDoy: "1440.091",
			DateWoy: "1440W14-2",
			DateWithSlash: "1440/03/30",
			DateWithOutSlash: "14400330"
		},
		stime: 2886348600000,
		gdate: [2061, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 19] },
		gtime: 2886348600000
	},
	{
		sdate: [1440, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 31],
			DateTime: "1440-03-31 00:00:00",
			DateAber: "31 Kho 1440",
			DateMonth: "Kho",
			DateYearMonth: "1440-Kho",
			DateYear: "1440",
			DateAberWithDate: "Mon 31 Kho 1440",
			DateDoy: "1440.092",
			DateWoy: "1440W14-3",
			DateWithSlash: "1440/03/31",
			DateWithOutSlash: "14400331"
		},
		stime: 2886435000000,
		gdate: [2061, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 20] },
		gtime: 2886435000000
	},
	{
		sdate: [1440, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 1],
			DateTime: "1440-04-01 00:00:00",
			DateAber: "01 Tir 1440",
			DateMonth: "Tir",
			DateYearMonth: "1440-Tir",
			DateYear: "1440",
			DateAberWithDate: "Tue 01 Tir 1440",
			DateDoy: "1440.093",
			DateWoy: "1440W14-4",
			DateWithSlash: "1440/04/01",
			DateWithOutSlash: "14400401"
		},
		stime: 2886521400000,
		gdate: [2061, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 21] },
		gtime: 2886521400000
	},
	{
		sdate: [1440, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 2],
			DateTime: "1440-04-02 00:00:00",
			DateAber: "02 Tir 1440",
			DateMonth: "Tir",
			DateYearMonth: "1440-Tir",
			DateYear: "1440",
			DateAberWithDate: "Wed 02 Tir 1440",
			DateDoy: "1440.094",
			DateWoy: "1440W14-5",
			DateWithSlash: "1440/04/02",
			DateWithOutSlash: "14400402"
		},
		stime: 2886607800000,
		gdate: [2061, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 22] },
		gtime: 2886607800000
	},
	{
		sdate: [1440, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 15],
			DateTime: "1440-04-15 00:00:00",
			DateAber: "15 Tir 1440",
			DateMonth: "Tir",
			DateYearMonth: "1440-Tir",
			DateYear: "1440",
			DateAberWithDate: "Tue 15 Tir 1440",
			DateDoy: "1440.107",
			DateWoy: "1440W16-4",
			DateWithSlash: "1440/04/15",
			DateWithOutSlash: "14400415"
		},
		stime: 2887731000000,
		gdate: [2061, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 5] },
		gtime: 2887731000000
	},
	{
		sdate: [1440, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 30],
			DateTime: "1440-04-30 00:00:00",
			DateAber: "30 Tir 1440",
			DateMonth: "Tir",
			DateYearMonth: "1440-Tir",
			DateYear: "1440",
			DateAberWithDate: "Wed 30 Tir 1440",
			DateDoy: "1440.122",
			DateWoy: "1440W18-5",
			DateWithSlash: "1440/04/30",
			DateWithOutSlash: "14400430"
		},
		stime: 2889027000000,
		gdate: [2061, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 20] },
		gtime: 2889027000000
	},
	{
		sdate: [1440, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 31],
			DateTime: "1440-04-31 00:00:00",
			DateAber: "31 Tir 1440",
			DateMonth: "Tir",
			DateYearMonth: "1440-Tir",
			DateYear: "1440",
			DateAberWithDate: "Thu 31 Tir 1440",
			DateDoy: "1440.123",
			DateWoy: "1440W18-6",
			DateWithSlash: "1440/04/31",
			DateWithOutSlash: "14400431"
		},
		stime: 2889113400000,
		gdate: [2061, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 21] },
		gtime: 2889113400000
	},
	{
		sdate: [1440, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 1],
			DateTime: "1440-05-01 00:00:00",
			DateAber: "01 Amo 1440",
			DateMonth: "Amo",
			DateYearMonth: "1440-Amo",
			DateYear: "1440",
			DateAberWithDate: "Fri 01 Amo 1440",
			DateDoy: "1440.124",
			DateWoy: "1440W18-7",
			DateWithSlash: "1440/05/01",
			DateWithOutSlash: "14400501"
		},
		stime: 2889199800000,
		gdate: [2061, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 22] },
		gtime: 2889199800000
	},
	{
		sdate: [1440, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 2],
			DateTime: "1440-05-02 00:00:00",
			DateAber: "02 Amo 1440",
			DateMonth: "Amo",
			DateYearMonth: "1440-Amo",
			DateYear: "1440",
			DateAberWithDate: "Sat 02 Amo 1440",
			DateDoy: "1440.125",
			DateWoy: "1440W19-1",
			DateWithSlash: "1440/05/02",
			DateWithOutSlash: "14400502"
		},
		stime: 2889286200000,
		gdate: [2061, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 23] },
		gtime: 2889286200000
	},
	{
		sdate: [1440, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 15],
			DateTime: "1440-05-15 00:00:00",
			DateAber: "15 Amo 1440",
			DateMonth: "Amo",
			DateYearMonth: "1440-Amo",
			DateYear: "1440",
			DateAberWithDate: "Fri 15 Amo 1440",
			DateDoy: "1440.138",
			DateWoy: "1440W20-7",
			DateWithSlash: "1440/05/15",
			DateWithOutSlash: "14400515"
		},
		stime: 2890409400000,
		gdate: [2061, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 5] },
		gtime: 2890409400000
	},
	{
		sdate: [1440, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 30],
			DateTime: "1440-05-30 00:00:00",
			DateAber: "30 Amo 1440",
			DateMonth: "Amo",
			DateYearMonth: "1440-Amo",
			DateYear: "1440",
			DateAberWithDate: "Sat 30 Amo 1440",
			DateDoy: "1440.153",
			DateWoy: "1440W23-1",
			DateWithSlash: "1440/05/30",
			DateWithOutSlash: "14400530"
		},
		stime: 2891705400000,
		gdate: [2061, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 20] },
		gtime: 2891705400000
	},
	{
		sdate: [1440, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 31],
			DateTime: "1440-05-31 00:00:00",
			DateAber: "31 Amo 1440",
			DateMonth: "Amo",
			DateYearMonth: "1440-Amo",
			DateYear: "1440",
			DateAberWithDate: "Sun 31 Amo 1440",
			DateDoy: "1440.154",
			DateWoy: "1440W23-2",
			DateWithSlash: "1440/05/31",
			DateWithOutSlash: "14400531"
		},
		stime: 2891791800000,
		gdate: [2061, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 21] },
		gtime: 2891791800000
	},
	{
		sdate: [1440, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 1],
			DateTime: "1440-06-01 00:00:00",
			DateAber: "01 Sha 1440",
			DateMonth: "Sha",
			DateYearMonth: "1440-Sha",
			DateYear: "1440",
			DateAberWithDate: "Mon 01 Sha 1440",
			DateDoy: "1440.155",
			DateWoy: "1440W23-3",
			DateWithSlash: "1440/06/01",
			DateWithOutSlash: "14400601"
		},
		stime: 2891878200000,
		gdate: [2061, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 22] },
		gtime: 2891878200000
	},
	{
		sdate: [1440, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 2],
			DateTime: "1440-06-02 00:00:00",
			DateAber: "02 Sha 1440",
			DateMonth: "Sha",
			DateYearMonth: "1440-Sha",
			DateYear: "1440",
			DateAberWithDate: "Tue 02 Sha 1440",
			DateDoy: "1440.156",
			DateWoy: "1440W23-4",
			DateWithSlash: "1440/06/02",
			DateWithOutSlash: "14400602"
		},
		stime: 2891964600000,
		gdate: [2061, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 23] },
		gtime: 2891964600000
	},
	{
		sdate: [1440, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 15],
			DateTime: "1440-06-15 00:00:00",
			DateAber: "15 Sha 1440",
			DateMonth: "Sha",
			DateYearMonth: "1440-Sha",
			DateYear: "1440",
			DateAberWithDate: "Mon 15 Sha 1440",
			DateDoy: "1440.169",
			DateWoy: "1440W25-3",
			DateWithSlash: "1440/06/15",
			DateWithOutSlash: "14400615"
		},
		stime: 2893087800000,
		gdate: [2061, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 5] },
		gtime: 2893087800000
	},
	{
		sdate: [1440, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 29],
			DateTime: "1440-06-29 00:00:00",
			DateAber: "29 Sha 1440",
			DateMonth: "Sha",
			DateYearMonth: "1440-Sha",
			DateYear: "1440",
			DateAberWithDate: "Mon 29 Sha 1440",
			DateDoy: "1440.183",
			DateWoy: "1440W27-3",
			DateWithSlash: "1440/06/29",
			DateWithOutSlash: "14400629"
		},
		stime: 2894297400000,
		gdate: [2061, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 19] },
		gtime: 2894297400000
	},
	{
		sdate: [1440, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 30],
			DateTime: "1440-06-30 00:00:00",
			DateAber: "30 Sha 1440",
			DateMonth: "Sha",
			DateYearMonth: "1440-Sha",
			DateYear: "1440",
			DateAberWithDate: "Tue 30 Sha 1440",
			DateDoy: "1440.184",
			DateWoy: "1440W27-4",
			DateWithSlash: "1440/06/30",
			DateWithOutSlash: "14400630"
		},
		stime: 2894383800000,
		gdate: [2061, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 20] },
		gtime: 2894383800000
	},
	{
		sdate: [1440, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 1],
			DateTime: "1440-07-01 00:00:00",
			DateAber: "01 Meh 1440",
			DateMonth: "Meh",
			DateYearMonth: "1440-Meh",
			DateYear: "1440",
			DateAberWithDate: "Thu 01 Meh 1440",
			DateDoy: "1440.186",
			DateWoy: "1440W27-6",
			DateWithSlash: "1440/07/01",
			DateWithOutSlash: "14400701"
		},
		stime: 2894560200000,
		gdate: [2061, 9, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 22] },
		gtime: 2894560200000
	},
	{
		sdate: [1440, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 2],
			DateTime: "1440-07-02 00:00:00",
			DateAber: "02 Meh 1440",
			DateMonth: "Meh",
			DateYearMonth: "1440-Meh",
			DateYear: "1440",
			DateAberWithDate: "Fri 02 Meh 1440",
			DateDoy: "1440.187",
			DateWoy: "1440W27-7",
			DateWithSlash: "1440/07/02",
			DateWithOutSlash: "14400702"
		},
		stime: 2894646600000,
		gdate: [2061, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 23] },
		gtime: 2894646600000
	},
	{
		sdate: [1440, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 15],
			DateTime: "1440-07-15 00:00:00",
			DateAber: "15 Meh 1440",
			DateMonth: "Meh",
			DateYearMonth: "1440-Meh",
			DateYear: "1440",
			DateAberWithDate: "Thu 15 Meh 1440",
			DateDoy: "1440.200",
			DateWoy: "1440W29-6",
			DateWithSlash: "1440/07/15",
			DateWithOutSlash: "14400715"
		},
		stime: 2895769800000,
		gdate: [2061, 10, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 9, 6] },
		gtime: 2895769800000
	},
	{
		sdate: [1440, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 29],
			DateTime: "1440-07-29 00:00:00",
			DateAber: "29 Meh 1440",
			DateMonth: "Meh",
			DateYearMonth: "1440-Meh",
			DateYear: "1440",
			DateAberWithDate: "Thu 29 Meh 1440",
			DateDoy: "1440.214",
			DateWoy: "1440W31-6",
			DateWithSlash: "1440/07/29",
			DateWithOutSlash: "14400729"
		},
		stime: 2896979400000,
		gdate: [2061, 10, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 9, 20] },
		gtime: 2896979400000
	},
	{
		sdate: [1440, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 30],
			DateTime: "1440-07-30 00:00:00",
			DateAber: "30 Meh 1440",
			DateMonth: "Meh",
			DateYearMonth: "1440-Meh",
			DateYear: "1440",
			DateAberWithDate: "Fri 30 Meh 1440",
			DateDoy: "1440.215",
			DateWoy: "1440W31-7",
			DateWithSlash: "1440/07/30",
			DateWithOutSlash: "14400730"
		},
		stime: 2897065800000,
		gdate: [2061, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 9, 21] },
		gtime: 2897065800000
	},
	{
		sdate: [1440, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 1],
			DateTime: "1440-08-01 00:00:00",
			DateAber: "01 Aba 1440",
			DateMonth: "Aba",
			DateYearMonth: "1440-Aba",
			DateYear: "1440",
			DateAberWithDate: "Sat 01 Aba 1440",
			DateDoy: "1440.216",
			DateWoy: "1440W32-1",
			DateWithSlash: "1440/08/01",
			DateWithOutSlash: "14400801"
		},
		stime: 2897152200000,
		gdate: [2061, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 9, 22] },
		gtime: 2897152200000
	},
	{
		sdate: [1440, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 2],
			DateTime: "1440-08-02 00:00:00",
			DateAber: "02 Aba 1440",
			DateMonth: "Aba",
			DateYearMonth: "1440-Aba",
			DateYear: "1440",
			DateAberWithDate: "Sun 02 Aba 1440",
			DateDoy: "1440.217",
			DateWoy: "1440W32-2",
			DateWithSlash: "1440/08/02",
			DateWithOutSlash: "14400802"
		},
		stime: 2897238600000,
		gdate: [2061, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 9, 23] },
		gtime: 2897238600000
	},
	{
		sdate: [1440, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 15],
			DateTime: "1440-08-15 00:00:00",
			DateAber: "15 Aba 1440",
			DateMonth: "Aba",
			DateYearMonth: "1440-Aba",
			DateYear: "1440",
			DateAberWithDate: "Sat 15 Aba 1440",
			DateDoy: "1440.230",
			DateWoy: "1440W34-1",
			DateWithSlash: "1440/08/15",
			DateWithOutSlash: "14400815"
		},
		stime: 2898361800000,
		gdate: [2061, 11, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 10, 5] },
		gtime: 2898361800000
	},
	{
		sdate: [1440, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 29],
			DateTime: "1440-08-29 00:00:00",
			DateAber: "29 Aba 1440",
			DateMonth: "Aba",
			DateYearMonth: "1440-Aba",
			DateYear: "1440",
			DateAberWithDate: "Sat 29 Aba 1440",
			DateDoy: "1440.244",
			DateWoy: "1440W36-1",
			DateWithSlash: "1440/08/29",
			DateWithOutSlash: "14400829"
		},
		stime: 2899571400000,
		gdate: [2061, 11, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 10, 19] },
		gtime: 2899571400000
	},
	{
		sdate: [1440, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 30],
			DateTime: "1440-08-30 00:00:00",
			DateAber: "30 Aba 1440",
			DateMonth: "Aba",
			DateYearMonth: "1440-Aba",
			DateYear: "1440",
			DateAberWithDate: "Sun 30 Aba 1440",
			DateDoy: "1440.245",
			DateWoy: "1440W36-2",
			DateWithSlash: "1440/08/30",
			DateWithOutSlash: "14400830"
		},
		stime: 2899657800000,
		gdate: [2061, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 10, 20] },
		gtime: 2899657800000
	},
	{
		sdate: [1440, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 1],
			DateTime: "1440-09-01 00:00:00",
			DateAber: "01 Aza 1440",
			DateMonth: "Aza",
			DateYearMonth: "1440-Aza",
			DateYear: "1440",
			DateAberWithDate: "Mon 01 Aza 1440",
			DateDoy: "1440.246",
			DateWoy: "1440W36-3",
			DateWithSlash: "1440/09/01",
			DateWithOutSlash: "14400901"
		},
		stime: 2899744200000,
		gdate: [2061, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 10, 21] },
		gtime: 2899744200000
	},
	{
		sdate: [1440, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 2],
			DateTime: "1440-09-02 00:00:00",
			DateAber: "02 Aza 1440",
			DateMonth: "Aza",
			DateYearMonth: "1440-Aza",
			DateYear: "1440",
			DateAberWithDate: "Tue 02 Aza 1440",
			DateDoy: "1440.247",
			DateWoy: "1440W36-4",
			DateWithSlash: "1440/09/02",
			DateWithOutSlash: "14400902"
		},
		stime: 2899830600000,
		gdate: [2061, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 10, 22] },
		gtime: 2899830600000
	},
	{
		sdate: [1440, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 15],
			DateTime: "1440-09-15 00:00:00",
			DateAber: "15 Aza 1440",
			DateMonth: "Aza",
			DateYearMonth: "1440-Aza",
			DateYear: "1440",
			DateAberWithDate: "Mon 15 Aza 1440",
			DateDoy: "1440.260",
			DateWoy: "1440W38-3",
			DateWithSlash: "1440/09/15",
			DateWithOutSlash: "14400915"
		},
		stime: 2900953800000,
		gdate: [2061, 12, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 11, 5] },
		gtime: 2900953800000
	},
	{
		sdate: [1440, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 29],
			DateTime: "1440-09-29 00:00:00",
			DateAber: "29 Aza 1440",
			DateMonth: "Aza",
			DateYearMonth: "1440-Aza",
			DateYear: "1440",
			DateAberWithDate: "Mon 29 Aza 1440",
			DateDoy: "1440.274",
			DateWoy: "1440W40-3",
			DateWithSlash: "1440/09/29",
			DateWithOutSlash: "14400929"
		},
		stime: 2902163400000,
		gdate: [2061, 12, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 11, 19] },
		gtime: 2902163400000
	},
	{
		sdate: [1440, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 30],
			DateTime: "1440-09-30 00:00:00",
			DateAber: "30 Aza 1440",
			DateMonth: "Aza",
			DateYearMonth: "1440-Aza",
			DateYear: "1440",
			DateAberWithDate: "Tue 30 Aza 1440",
			DateDoy: "1440.275",
			DateWoy: "1440W40-4",
			DateWithSlash: "1440/09/30",
			DateWithOutSlash: "14400930"
		},
		stime: 2902249800000,
		gdate: [2061, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 11, 20] },
		gtime: 2902249800000
	},
	{
		sdate: [1440, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 1],
			DateTime: "1440-10-01 00:00:00",
			DateAber: "01 Dey 1440",
			DateMonth: "Dey",
			DateYearMonth: "1440-Dey",
			DateYear: "1440",
			DateAberWithDate: "Wed 01 Dey 1440",
			DateDoy: "1440.276",
			DateWoy: "1440W40-5",
			DateWithSlash: "1440/10/01",
			DateWithOutSlash: "14401001"
		},
		stime: 2902336200000,
		gdate: [2061, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 11, 21] },
		gtime: 2902336200000
	},
	{
		sdate: [1440, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 2],
			DateTime: "1440-10-02 00:00:00",
			DateAber: "02 Dey 1440",
			DateMonth: "Dey",
			DateYearMonth: "1440-Dey",
			DateYear: "1440",
			DateAberWithDate: "Thu 02 Dey 1440",
			DateDoy: "1440.277",
			DateWoy: "1440W40-6",
			DateWithSlash: "1440/10/02",
			DateWithOutSlash: "14401002"
		},
		stime: 2902422600000,
		gdate: [2061, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 11, 22] },
		gtime: 2902422600000
	},
	{
		sdate: [1440, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 15],
			DateTime: "1440-10-15 00:00:00",
			DateAber: "15 Dey 1440",
			DateMonth: "Dey",
			DateYearMonth: "1440-Dey",
			DateYear: "1440",
			DateAberWithDate: "Wed 15 Dey 1440",
			DateDoy: "1440.290",
			DateWoy: "1440W42-5",
			DateWithSlash: "1440/10/15",
			DateWithOutSlash: "14401015"
		},
		stime: 2903545800000,
		gdate: [2062, 1, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 0, 4] },
		gtime: 2903545800000
	},
	{
		sdate: [1440, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 29],
			DateTime: "1440-10-29 00:00:00",
			DateAber: "29 Dey 1440",
			DateMonth: "Dey",
			DateYearMonth: "1440-Dey",
			DateYear: "1440",
			DateAberWithDate: "Wed 29 Dey 1440",
			DateDoy: "1440.304",
			DateWoy: "1440W44-5",
			DateWithSlash: "1440/10/29",
			DateWithOutSlash: "14401029"
		},
		stime: 2904755400000,
		gdate: [2062, 1, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 0, 18] },
		gtime: 2904755400000
	},
	{
		sdate: [1440, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 30],
			DateTime: "1440-10-30 00:00:00",
			DateAber: "30 Dey 1440",
			DateMonth: "Dey",
			DateYearMonth: "1440-Dey",
			DateYear: "1440",
			DateAberWithDate: "Thu 30 Dey 1440",
			DateDoy: "1440.305",
			DateWoy: "1440W44-6",
			DateWithSlash: "1440/10/30",
			DateWithOutSlash: "14401030"
		},
		stime: 2904841800000,
		gdate: [2062, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 0, 19] },
		gtime: 2904841800000
	},
	{
		sdate: [1440, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 1],
			DateTime: "1440-11-01 00:00:00",
			DateAber: "01 Bah 1440",
			DateMonth: "Bah",
			DateYearMonth: "1440-Bah",
			DateYear: "1440",
			DateAberWithDate: "Fri 01 Bah 1440",
			DateDoy: "1440.306",
			DateWoy: "1440W44-7",
			DateWithSlash: "1440/11/01",
			DateWithOutSlash: "14401101"
		},
		stime: 2904928200000,
		gdate: [2062, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 0, 20] },
		gtime: 2904928200000
	},
	{
		sdate: [1440, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 2],
			DateTime: "1440-11-02 00:00:00",
			DateAber: "02 Bah 1440",
			DateMonth: "Bah",
			DateYearMonth: "1440-Bah",
			DateYear: "1440",
			DateAberWithDate: "Sat 02 Bah 1440",
			DateDoy: "1440.307",
			DateWoy: "1440W45-1",
			DateWithSlash: "1440/11/02",
			DateWithOutSlash: "14401102"
		},
		stime: 2905014600000,
		gdate: [2062, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 0, 21] },
		gtime: 2905014600000
	},
	{
		sdate: [1440, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 15],
			DateTime: "1440-11-15 00:00:00",
			DateAber: "15 Bah 1440",
			DateMonth: "Bah",
			DateYearMonth: "1440-Bah",
			DateYear: "1440",
			DateAberWithDate: "Fri 15 Bah 1440",
			DateDoy: "1440.320",
			DateWoy: "1440W46-7",
			DateWithSlash: "1440/11/15",
			DateWithOutSlash: "14401115"
		},
		stime: 2906137800000,
		gdate: [2062, 2, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 1, 3] },
		gtime: 2906137800000
	},
	{
		sdate: [1440, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 29],
			DateTime: "1440-11-29 00:00:00",
			DateAber: "29 Bah 1440",
			DateMonth: "Bah",
			DateYearMonth: "1440-Bah",
			DateYear: "1440",
			DateAberWithDate: "Fri 29 Bah 1440",
			DateDoy: "1440.334",
			DateWoy: "1440W48-7",
			DateWithSlash: "1440/11/29",
			DateWithOutSlash: "14401129"
		},
		stime: 2907347400000,
		gdate: [2062, 2, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 1, 17] },
		gtime: 2907347400000
	},
	{
		sdate: [1440, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 30],
			DateTime: "1440-11-30 00:00:00",
			DateAber: "30 Bah 1440",
			DateMonth: "Bah",
			DateYearMonth: "1440-Bah",
			DateYear: "1440",
			DateAberWithDate: "Sat 30 Bah 1440",
			DateDoy: "1440.335",
			DateWoy: "1440W49-1",
			DateWithSlash: "1440/11/30",
			DateWithOutSlash: "14401130"
		},
		stime: 2907433800000,
		gdate: [2062, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 1, 18] },
		gtime: 2907433800000
	},
	{
		sdate: [1440, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 1],
			DateTime: "1440-12-01 00:00:00",
			DateAber: "01 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Sun 01 Esf 1440",
			DateDoy: "1440.336",
			DateWoy: "1440W49-2",
			DateWithSlash: "1440/12/01",
			DateWithOutSlash: "14401201"
		},
		stime: 2907520200000,
		gdate: [2062, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 1, 19] },
		gtime: 2907520200000
	},
	{
		sdate: [1440, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 2],
			DateTime: "1440-12-02 00:00:00",
			DateAber: "02 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Mon 02 Esf 1440",
			DateDoy: "1440.337",
			DateWoy: "1440W49-3",
			DateWithSlash: "1440/12/02",
			DateWithOutSlash: "14401202"
		},
		stime: 2907606600000,
		gdate: [2062, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 1, 20] },
		gtime: 2907606600000
	},
	{
		sdate: [1440, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 3],
			DateTime: "1440-12-03 00:00:00",
			DateAber: "03 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Tue 03 Esf 1440",
			DateDoy: "1440.338",
			DateWoy: "1440W49-4",
			DateWithSlash: "1440/12/03",
			DateWithOutSlash: "14401203"
		},
		stime: 2907693000000,
		gdate: [2062, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 1, 21] },
		gtime: 2907693000000
	},
	{
		sdate: [1440, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 4],
			DateTime: "1440-12-04 00:00:00",
			DateAber: "04 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Wed 04 Esf 1440",
			DateDoy: "1440.339",
			DateWoy: "1440W49-5",
			DateWithSlash: "1440/12/04",
			DateWithOutSlash: "14401204"
		},
		stime: 2907779400000,
		gdate: [2062, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 1, 22] },
		gtime: 2907779400000
	},
	{
		sdate: [1440, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 15],
			DateTime: "1440-12-15 00:00:00",
			DateAber: "15 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Sun 15 Esf 1440",
			DateDoy: "1440.350",
			DateWoy: "1440W51-2",
			DateWithSlash: "1440/12/15",
			DateWithOutSlash: "14401215"
		},
		stime: 2908729800000,
		gdate: [2062, 3, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 2, 5] },
		gtime: 2908729800000
	},
	{
		sdate: [1440, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 25],
			DateTime: "1440-12-25 00:00:00",
			DateAber: "25 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Wed 25 Esf 1440",
			DateDoy: "1440.360",
			DateWoy: "1440W52-5",
			DateWithSlash: "1440/12/25",
			DateWithOutSlash: "14401225"
		},
		stime: 2909593800000,
		gdate: [2062, 3, 15, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 2, 15] },
		gtime: 2909593800000
	},
	{
		sdate: [1440, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 26],
			DateTime: "1440-12-26 00:00:00",
			DateAber: "26 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Thu 26 Esf 1440",
			DateDoy: "1440.361",
			DateWoy: "1440W52-6",
			DateWithSlash: "1440/12/26",
			DateWithOutSlash: "14401226"
		},
		stime: 2909680200000,
		gdate: [2062, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 2, 16] },
		gtime: 2909680200000
	},
	{
		sdate: [1440, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 27],
			DateTime: "1440-12-27 00:00:00",
			DateAber: "27 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Fri 27 Esf 1440",
			DateDoy: "1440.362",
			DateWoy: "1440W52-7",
			DateWithSlash: "1440/12/27",
			DateWithOutSlash: "14401227"
		},
		stime: 2909766600000,
		gdate: [2062, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 2, 17] },
		gtime: 2909766600000
	},
	{
		sdate: [1440, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 28],
			DateTime: "1440-12-28 00:00:00",
			DateAber: "28 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Sat 28 Esf 1440",
			DateDoy: "1440.363",
			DateWoy: "1441W01-1",
			DateWithSlash: "1440/12/28",
			DateWithOutSlash: "14401228"
		},
		stime: 2909853000000,
		gdate: [2062, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 2, 18] },
		gtime: 2909853000000
	},
	{
		sdate: [1440, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 29],
			DateTime: "1440-12-29 00:00:00",
			DateAber: "29 Esf 1440",
			DateMonth: "Esf",
			DateYearMonth: "1440-Esf",
			DateYear: "1440",
			DateAberWithDate: "Sun 29 Esf 1440",
			DateDoy: "1440.364",
			DateWoy: "1441W01-2",
			DateWithSlash: "1440/12/29",
			DateWithOutSlash: "14401229"
		},
		stime: 2909939400000,
		gdate: [2062, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 2, 19] },
		gtime: 2909939400000
	},

	{
		sdate: [1460, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 1],
			DateTime: "1460-01-01 00:00:00",
			DateAber: "01 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Thu 01 Far 1460",
			DateDoy: "1460.000",
			DateWoy: "1459W52-6",
			DateWithSlash: "1460/01/01",
			DateWithOutSlash: "14600101"
		},
		stime: 3509641800000,
		gdate: [2081, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 20] },
		gtime: 3509641800000
	},
	{
		sdate: [1460, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 2],
			DateTime: "1460-01-02 01:00:00",
			DateAber: "02 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Fri 02 Far 1460",
			DateDoy: "1460.001",
			DateWoy: "1459W52-7",
			DateWithSlash: "1460/01/02",
			DateWithOutSlash: "14600102"
		},
		stime: 3509728200000,
		gdate: [2081, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 21] },
		gtime: 3509728200000
	},
	{
		sdate: [1460, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 3],
			DateTime: "1460-01-03 00:00:00",
			DateAber: "03 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Sat 03 Far 1460",
			DateDoy: "1460.002",
			DateWoy: "1460W01-1",
			DateWithSlash: "1460/01/03",
			DateWithOutSlash: "14600103"
		},
		stime: 3509811000000,
		gdate: [2081, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 22] },
		gtime: 3509811000000
	},
	{
		sdate: [1460, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 4],
			DateTime: "1460-01-04 00:00:00",
			DateAber: "04 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Sun 04 Far 1460",
			DateDoy: "1460.003",
			DateWoy: "1460W01-2",
			DateWithSlash: "1460/01/04",
			DateWithOutSlash: "14600104"
		},
		stime: 3509897400000,
		gdate: [2081, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 23] },
		gtime: 3509897400000
	},
	{
		sdate: [1460, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 5],
			DateTime: "1460-01-05 00:00:00",
			DateAber: "05 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Mon 05 Far 1460",
			DateDoy: "1460.004",
			DateWoy: "1460W01-3",
			DateWithSlash: "1460/01/05",
			DateWithOutSlash: "14600105"
		},
		stime: 3509983800000,
		gdate: [2081, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 24] },
		gtime: 3509983800000
	},
	{
		sdate: [1460, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 6],
			DateTime: "1460-01-06 00:00:00",
			DateAber: "06 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Tue 06 Far 1460",
			DateDoy: "1460.005",
			DateWoy: "1460W01-4",
			DateWithSlash: "1460/01/06",
			DateWithOutSlash: "14600106"
		},
		stime: 3510070200000,
		gdate: [2081, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 25] },
		gtime: 3510070200000
	},
	{
		sdate: [1460, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 7],
			DateTime: "1460-01-07 00:00:00",
			DateAber: "07 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Wed 07 Far 1460",
			DateDoy: "1460.006",
			DateWoy: "1460W01-5",
			DateWithSlash: "1460/01/07",
			DateWithOutSlash: "14600107"
		},
		stime: 3510156600000,
		gdate: [2081, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 26] },
		gtime: 3510156600000
	},
	{
		sdate: [1460, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 15],
			DateTime: "1460-01-15 00:00:00",
			DateAber: "15 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Thu 15 Far 1460",
			DateDoy: "1460.014",
			DateWoy: "1460W02-6",
			DateWithSlash: "1460/01/15",
			DateWithOutSlash: "14600115"
		},
		stime: 3510847800000,
		gdate: [2081, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 3] },
		gtime: 3510847800000
	},
	{
		sdate: [1460, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 29],
			DateTime: "1460-01-29 00:00:00",
			DateAber: "29 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Thu 29 Far 1460",
			DateDoy: "1460.028",
			DateWoy: "1460W04-6",
			DateWithSlash: "1460/01/29",
			DateWithOutSlash: "14600129"
		},
		stime: 3512057400000,
		gdate: [2081, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 17] },
		gtime: 3512057400000
	},
	{
		sdate: [1460, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 30],
			DateTime: "1460-01-30 00:00:00",
			DateAber: "30 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Fri 30 Far 1460",
			DateDoy: "1460.029",
			DateWoy: "1460W04-7",
			DateWithSlash: "1460/01/30",
			DateWithOutSlash: "14600130"
		},
		stime: 3512143800000,
		gdate: [2081, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 18] },
		gtime: 3512143800000
	},
	{
		sdate: [1460, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 31],
			DateTime: "1460-01-31 00:00:00",
			DateAber: "31 Far 1460",
			DateMonth: "Far",
			DateYearMonth: "1460-Far",
			DateYear: "1460",
			DateAberWithDate: "Sat 31 Far 1460",
			DateDoy: "1460.030",
			DateWoy: "1460W05-1",
			DateWithSlash: "1460/01/31",
			DateWithOutSlash: "14600131"
		},
		stime: 3512230200000,
		gdate: [2081, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 19] },
		gtime: 3512230200000
	},
	{
		sdate: [1460, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 1],
			DateTime: "1460-02-01 00:00:00",
			DateAber: "01 Ord 1460",
			DateMonth: "Ord",
			DateYearMonth: "1460-Ord",
			DateYear: "1460",
			DateAberWithDate: "Sun 01 Ord 1460",
			DateDoy: "1460.031",
			DateWoy: "1460W05-2",
			DateWithSlash: "1460/02/01",
			DateWithOutSlash: "14600201"
		},
		stime: 3512316600000,
		gdate: [2081, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 20] },
		gtime: 3512316600000
	},
	{
		sdate: [1460, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 2],
			DateTime: "1460-02-02 00:00:00",
			DateAber: "02 Ord 1460",
			DateMonth: "Ord",
			DateYearMonth: "1460-Ord",
			DateYear: "1460",
			DateAberWithDate: "Mon 02 Ord 1460",
			DateDoy: "1460.032",
			DateWoy: "1460W05-3",
			DateWithSlash: "1460/02/02",
			DateWithOutSlash: "14600202"
		},
		stime: 3512403000000,
		gdate: [2081, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 21] },
		gtime: 3512403000000
	},
	{
		sdate: [1460, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 15],
			DateTime: "1460-02-15 00:00:00",
			DateAber: "15 Ord 1460",
			DateMonth: "Ord",
			DateYearMonth: "1460-Ord",
			DateYear: "1460",
			DateAberWithDate: "Sun 15 Ord 1460",
			DateDoy: "1460.045",
			DateWoy: "1460W07-2",
			DateWithSlash: "1460/02/15",
			DateWithOutSlash: "14600215"
		},
		stime: 3513526200000,
		gdate: [2081, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 4] },
		gtime: 3513526200000
	},
	{
		sdate: [1460, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 30],
			DateTime: "1460-02-30 00:00:00",
			DateAber: "30 Ord 1460",
			DateMonth: "Ord",
			DateYearMonth: "1460-Ord",
			DateYear: "1460",
			DateAberWithDate: "Mon 30 Ord 1460",
			DateDoy: "1460.060",
			DateWoy: "1460W09-3",
			DateWithSlash: "1460/02/30",
			DateWithOutSlash: "14600230"
		},
		stime: 3514822200000,
		gdate: [2081, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 19] },
		gtime: 3514822200000
	},
	{
		sdate: [1460, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 31],
			DateTime: "1460-02-31 00:00:00",
			DateAber: "31 Ord 1460",
			DateMonth: "Ord",
			DateYearMonth: "1460-Ord",
			DateYear: "1460",
			DateAberWithDate: "Tue 31 Ord 1460",
			DateDoy: "1460.061",
			DateWoy: "1460W09-4",
			DateWithSlash: "1460/02/31",
			DateWithOutSlash: "14600231"
		},
		stime: 3514908600000,
		gdate: [2081, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 20] },
		gtime: 3514908600000
	},
	{
		sdate: [1460, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 1],
			DateTime: "1460-03-01 00:00:00",
			DateAber: "01 Kho 1460",
			DateMonth: "Kho",
			DateYearMonth: "1460-Kho",
			DateYear: "1460",
			DateAberWithDate: "Wed 01 Kho 1460",
			DateDoy: "1460.062",
			DateWoy: "1460W09-5",
			DateWithSlash: "1460/03/01",
			DateWithOutSlash: "14600301"
		},
		stime: 3514995000000,
		gdate: [2081, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 21] },
		gtime: 3514995000000
	},
	{
		sdate: [1460, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 2],
			DateTime: "1460-03-02 00:00:00",
			DateAber: "02 Kho 1460",
			DateMonth: "Kho",
			DateYearMonth: "1460-Kho",
			DateYear: "1460",
			DateAberWithDate: "Thu 02 Kho 1460",
			DateDoy: "1460.063",
			DateWoy: "1460W09-6",
			DateWithSlash: "1460/03/02",
			DateWithOutSlash: "14600302"
		},
		stime: 3515081400000,
		gdate: [2081, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 22] },
		gtime: 3515081400000
	},
	{
		sdate: [1460, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 15],
			DateTime: "1460-03-15 00:00:00",
			DateAber: "15 Kho 1460",
			DateMonth: "Kho",
			DateYearMonth: "1460-Kho",
			DateYear: "1460",
			DateAberWithDate: "Wed 15 Kho 1460",
			DateDoy: "1460.076",
			DateWoy: "1460W11-5",
			DateWithSlash: "1460/03/15",
			DateWithOutSlash: "14600315"
		},
		stime: 3516204600000,
		gdate: [2081, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 4] },
		gtime: 3516204600000
	},
	{
		sdate: [1460, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 30],
			DateTime: "1460-03-30 00:00:00",
			DateAber: "30 Kho 1460",
			DateMonth: "Kho",
			DateYearMonth: "1460-Kho",
			DateYear: "1460",
			DateAberWithDate: "Thu 30 Kho 1460",
			DateDoy: "1460.091",
			DateWoy: "1460W13-6",
			DateWithSlash: "1460/03/30",
			DateWithOutSlash: "14600330"
		},
		stime: 3517500600000,
		gdate: [2081, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 19] },
		gtime: 3517500600000
	},
	{
		sdate: [1460, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 31],
			DateTime: "1460-03-31 00:00:00",
			DateAber: "31 Kho 1460",
			DateMonth: "Kho",
			DateYearMonth: "1460-Kho",
			DateYear: "1460",
			DateAberWithDate: "Fri 31 Kho 1460",
			DateDoy: "1460.092",
			DateWoy: "1460W13-7",
			DateWithSlash: "1460/03/31",
			DateWithOutSlash: "14600331"
		},
		stime: 3517587000000,
		gdate: [2081, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 20] },
		gtime: 3517587000000
	},
	{
		sdate: [1460, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 1],
			DateTime: "1460-04-01 00:00:00",
			DateAber: "01 Tir 1460",
			DateMonth: "Tir",
			DateYearMonth: "1460-Tir",
			DateYear: "1460",
			DateAberWithDate: "Sat 01 Tir 1460",
			DateDoy: "1460.093",
			DateWoy: "1460W14-1",
			DateWithSlash: "1460/04/01",
			DateWithOutSlash: "14600401"
		},
		stime: 3517673400000,
		gdate: [2081, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 21] },
		gtime: 3517673400000
	},
	{
		sdate: [1460, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 2],
			DateTime: "1460-04-02 00:00:00",
			DateAber: "02 Tir 1460",
			DateMonth: "Tir",
			DateYearMonth: "1460-Tir",
			DateYear: "1460",
			DateAberWithDate: "Sun 02 Tir 1460",
			DateDoy: "1460.094",
			DateWoy: "1460W14-2",
			DateWithSlash: "1460/04/02",
			DateWithOutSlash: "14600402"
		},
		stime: 3517759800000,
		gdate: [2081, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 22] },
		gtime: 3517759800000
	},
	{
		sdate: [1460, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 15],
			DateTime: "1460-04-15 00:00:00",
			DateAber: "15 Tir 1460",
			DateMonth: "Tir",
			DateYearMonth: "1460-Tir",
			DateYear: "1460",
			DateAberWithDate: "Sat 15 Tir 1460",
			DateDoy: "1460.107",
			DateWoy: "1460W16-1",
			DateWithSlash: "1460/04/15",
			DateWithOutSlash: "14600415"
		},
		stime: 3518883000000,
		gdate: [2081, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 5] },
		gtime: 3518883000000
	},
	{
		sdate: [1460, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 30],
			DateTime: "1460-04-30 00:00:00",
			DateAber: "30 Tir 1460",
			DateMonth: "Tir",
			DateYearMonth: "1460-Tir",
			DateYear: "1460",
			DateAberWithDate: "Sun 30 Tir 1460",
			DateDoy: "1460.122",
			DateWoy: "1460W18-2",
			DateWithSlash: "1460/04/30",
			DateWithOutSlash: "14600430"
		},
		stime: 3520179000000,
		gdate: [2081, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 20] },
		gtime: 3520179000000
	},
	{
		sdate: [1460, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 31],
			DateTime: "1460-04-31 00:00:00",
			DateAber: "31 Tir 1460",
			DateMonth: "Tir",
			DateYearMonth: "1460-Tir",
			DateYear: "1460",
			DateAberWithDate: "Mon 31 Tir 1460",
			DateDoy: "1460.123",
			DateWoy: "1460W18-3",
			DateWithSlash: "1460/04/31",
			DateWithOutSlash: "14600431"
		},
		stime: 3520265400000,
		gdate: [2081, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 21] },
		gtime: 3520265400000
	},
	{
		sdate: [1460, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 1],
			DateTime: "1460-05-01 00:00:00",
			DateAber: "01 Amo 1460",
			DateMonth: "Amo",
			DateYearMonth: "1460-Amo",
			DateYear: "1460",
			DateAberWithDate: "Tue 01 Amo 1460",
			DateDoy: "1460.124",
			DateWoy: "1460W18-4",
			DateWithSlash: "1460/05/01",
			DateWithOutSlash: "14600501"
		},
		stime: 3520351800000,
		gdate: [2081, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 22] },
		gtime: 3520351800000
	},
	{
		sdate: [1460, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 2],
			DateTime: "1460-05-02 00:00:00",
			DateAber: "02 Amo 1460",
			DateMonth: "Amo",
			DateYearMonth: "1460-Amo",
			DateYear: "1460",
			DateAberWithDate: "Wed 02 Amo 1460",
			DateDoy: "1460.125",
			DateWoy: "1460W18-5",
			DateWithSlash: "1460/05/02",
			DateWithOutSlash: "14600502"
		},
		stime: 3520438200000,
		gdate: [2081, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 23] },
		gtime: 3520438200000
	},
	{
		sdate: [1460, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 15],
			DateTime: "1460-05-15 00:00:00",
			DateAber: "15 Amo 1460",
			DateMonth: "Amo",
			DateYearMonth: "1460-Amo",
			DateYear: "1460",
			DateAberWithDate: "Tue 15 Amo 1460",
			DateDoy: "1460.138",
			DateWoy: "1460W20-4",
			DateWithSlash: "1460/05/15",
			DateWithOutSlash: "14600515"
		},
		stime: 3521561400000,
		gdate: [2081, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 5] },
		gtime: 3521561400000
	},
	{
		sdate: [1460, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 30],
			DateTime: "1460-05-30 00:00:00",
			DateAber: "30 Amo 1460",
			DateMonth: "Amo",
			DateYearMonth: "1460-Amo",
			DateYear: "1460",
			DateAberWithDate: "Wed 30 Amo 1460",
			DateDoy: "1460.153",
			DateWoy: "1460W22-5",
			DateWithSlash: "1460/05/30",
			DateWithOutSlash: "14600530"
		},
		stime: 3522857400000,
		gdate: [2081, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 20] },
		gtime: 3522857400000
	},
	{
		sdate: [1460, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 31],
			DateTime: "1460-05-31 00:00:00",
			DateAber: "31 Amo 1460",
			DateMonth: "Amo",
			DateYearMonth: "1460-Amo",
			DateYear: "1460",
			DateAberWithDate: "Thu 31 Amo 1460",
			DateDoy: "1460.154",
			DateWoy: "1460W22-6",
			DateWithSlash: "1460/05/31",
			DateWithOutSlash: "14600531"
		},
		stime: 3522943800000,
		gdate: [2081, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 21] },
		gtime: 3522943800000
	},
	{
		sdate: [1460, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 1],
			DateTime: "1460-06-01 00:00:00",
			DateAber: "01 Sha 1460",
			DateMonth: "Sha",
			DateYearMonth: "1460-Sha",
			DateYear: "1460",
			DateAberWithDate: "Fri 01 Sha 1460",
			DateDoy: "1460.155",
			DateWoy: "1460W22-7",
			DateWithSlash: "1460/06/01",
			DateWithOutSlash: "14600601"
		},
		stime: 3523030200000,
		gdate: [2081, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 22] },
		gtime: 3523030200000
	},
	{
		sdate: [1460, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 2],
			DateTime: "1460-06-02 00:00:00",
			DateAber: "02 Sha 1460",
			DateMonth: "Sha",
			DateYearMonth: "1460-Sha",
			DateYear: "1460",
			DateAberWithDate: "Sat 02 Sha 1460",
			DateDoy: "1460.156",
			DateWoy: "1460W23-1",
			DateWithSlash: "1460/06/02",
			DateWithOutSlash: "14600602"
		},
		stime: 3523116600000,
		gdate: [2081, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 23] },
		gtime: 3523116600000
	},
	{
		sdate: [1460, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 15],
			DateTime: "1460-06-15 00:00:00",
			DateAber: "15 Sha 1460",
			DateMonth: "Sha",
			DateYearMonth: "1460-Sha",
			DateYear: "1460",
			DateAberWithDate: "Fri 15 Sha 1460",
			DateDoy: "1460.169",
			DateWoy: "1460W24-7",
			DateWithSlash: "1460/06/15",
			DateWithOutSlash: "14600615"
		},
		stime: 3524239800000,
		gdate: [2081, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 5] },
		gtime: 3524239800000
	},
	{
		sdate: [1460, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 29],
			DateTime: "1460-06-29 00:00:00",
			DateAber: "29 Sha 1460",
			DateMonth: "Sha",
			DateYearMonth: "1460-Sha",
			DateYear: "1460",
			DateAberWithDate: "Fri 29 Sha 1460",
			DateDoy: "1460.183",
			DateWoy: "1460W26-7",
			DateWithSlash: "1460/06/29",
			DateWithOutSlash: "14600629"
		},
		stime: 3525449400000,
		gdate: [2081, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 19] },
		gtime: 3525449400000
	},
	{
		sdate: [1460, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 30],
			DateTime: "1460-06-30 00:00:00",
			DateAber: "30 Sha 1460",
			DateMonth: "Sha",
			DateYearMonth: "1460-Sha",
			DateYear: "1460",
			DateAberWithDate: "Sat 30 Sha 1460",
			DateDoy: "1460.184",
			DateWoy: "1460W27-1",
			DateWithSlash: "1460/06/30",
			DateWithOutSlash: "14600630"
		},
		stime: 3525535800000,
		gdate: [2081, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 20] },
		gtime: 3525535800000
	},
	{
		sdate: [1460, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 1],
			DateTime: "1460-07-01 00:00:00",
			DateAber: "01 Meh 1460",
			DateMonth: "Meh",
			DateYearMonth: "1460-Meh",
			DateYear: "1460",
			DateAberWithDate: "Mon 01 Meh 1460",
			DateDoy: "1460.186",
			DateWoy: "1460W27-3",
			DateWithSlash: "1460/07/01",
			DateWithOutSlash: "14600701"
		},
		stime: 3525712200000,
		gdate: [2081, 9, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 22] },
		gtime: 3525712200000
	},
	{
		sdate: [1460, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 2],
			DateTime: "1460-07-02 00:00:00",
			DateAber: "02 Meh 1460",
			DateMonth: "Meh",
			DateYearMonth: "1460-Meh",
			DateYear: "1460",
			DateAberWithDate: "Tue 02 Meh 1460",
			DateDoy: "1460.187",
			DateWoy: "1460W27-4",
			DateWithSlash: "1460/07/02",
			DateWithOutSlash: "14600702"
		},
		stime: 3525798600000,
		gdate: [2081, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 23] },
		gtime: 3525798600000
	},
	{
		sdate: [1460, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 15],
			DateTime: "1460-07-15 00:00:00",
			DateAber: "15 Meh 1460",
			DateMonth: "Meh",
			DateYearMonth: "1460-Meh",
			DateYear: "1460",
			DateAberWithDate: "Mon 15 Meh 1460",
			DateDoy: "1460.200",
			DateWoy: "1460W29-3",
			DateWithSlash: "1460/07/15",
			DateWithOutSlash: "14600715"
		},
		stime: 3526921800000,
		gdate: [2081, 10, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 9, 6] },
		gtime: 3526921800000
	},
	{
		sdate: [1460, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 29],
			DateTime: "1460-07-29 00:00:00",
			DateAber: "29 Meh 1460",
			DateMonth: "Meh",
			DateYearMonth: "1460-Meh",
			DateYear: "1460",
			DateAberWithDate: "Mon 29 Meh 1460",
			DateDoy: "1460.214",
			DateWoy: "1460W31-3",
			DateWithSlash: "1460/07/29",
			DateWithOutSlash: "14600729"
		},
		stime: 3528131400000,
		gdate: [2081, 10, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 9, 20] },
		gtime: 3528131400000
	},
	{
		sdate: [1460, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 30],
			DateTime: "1460-07-30 00:00:00",
			DateAber: "30 Meh 1460",
			DateMonth: "Meh",
			DateYearMonth: "1460-Meh",
			DateYear: "1460",
			DateAberWithDate: "Tue 30 Meh 1460",
			DateDoy: "1460.215",
			DateWoy: "1460W31-4",
			DateWithSlash: "1460/07/30",
			DateWithOutSlash: "14600730"
		},
		stime: 3528217800000,
		gdate: [2081, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 9, 21] },
		gtime: 3528217800000
	},
	{
		sdate: [1460, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 1],
			DateTime: "1460-08-01 00:00:00",
			DateAber: "01 Aba 1460",
			DateMonth: "Aba",
			DateYearMonth: "1460-Aba",
			DateYear: "1460",
			DateAberWithDate: "Wed 01 Aba 1460",
			DateDoy: "1460.216",
			DateWoy: "1460W31-5",
			DateWithSlash: "1460/08/01",
			DateWithOutSlash: "14600801"
		},
		stime: 3528304200000,
		gdate: [2081, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 9, 22] },
		gtime: 3528304200000
	},
	{
		sdate: [1460, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 2],
			DateTime: "1460-08-02 00:00:00",
			DateAber: "02 Aba 1460",
			DateMonth: "Aba",
			DateYearMonth: "1460-Aba",
			DateYear: "1460",
			DateAberWithDate: "Thu 02 Aba 1460",
			DateDoy: "1460.217",
			DateWoy: "1460W31-6",
			DateWithSlash: "1460/08/02",
			DateWithOutSlash: "14600802"
		},
		stime: 3528390600000,
		gdate: [2081, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 9, 23] },
		gtime: 3528390600000
	},
	{
		sdate: [1460, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 15],
			DateTime: "1460-08-15 00:00:00",
			DateAber: "15 Aba 1460",
			DateMonth: "Aba",
			DateYearMonth: "1460-Aba",
			DateYear: "1460",
			DateAberWithDate: "Wed 15 Aba 1460",
			DateDoy: "1460.230",
			DateWoy: "1460W33-5",
			DateWithSlash: "1460/08/15",
			DateWithOutSlash: "14600815"
		},
		stime: 3529513800000,
		gdate: [2081, 11, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 10, 5] },
		gtime: 3529513800000
	},
	{
		sdate: [1460, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 29],
			DateTime: "1460-08-29 00:00:00",
			DateAber: "29 Aba 1460",
			DateMonth: "Aba",
			DateYearMonth: "1460-Aba",
			DateYear: "1460",
			DateAberWithDate: "Wed 29 Aba 1460",
			DateDoy: "1460.244",
			DateWoy: "1460W35-5",
			DateWithSlash: "1460/08/29",
			DateWithOutSlash: "14600829"
		},
		stime: 3530723400000,
		gdate: [2081, 11, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 10, 19] },
		gtime: 3530723400000
	},
	{
		sdate: [1460, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 30],
			DateTime: "1460-08-30 00:00:00",
			DateAber: "30 Aba 1460",
			DateMonth: "Aba",
			DateYearMonth: "1460-Aba",
			DateYear: "1460",
			DateAberWithDate: "Thu 30 Aba 1460",
			DateDoy: "1460.245",
			DateWoy: "1460W35-6",
			DateWithSlash: "1460/08/30",
			DateWithOutSlash: "14600830"
		},
		stime: 3530809800000,
		gdate: [2081, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 10, 20] },
		gtime: 3530809800000
	},
	{
		sdate: [1460, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 1],
			DateTime: "1460-09-01 00:00:00",
			DateAber: "01 Aza 1460",
			DateMonth: "Aza",
			DateYearMonth: "1460-Aza",
			DateYear: "1460",
			DateAberWithDate: "Fri 01 Aza 1460",
			DateDoy: "1460.246",
			DateWoy: "1460W35-7",
			DateWithSlash: "1460/09/01",
			DateWithOutSlash: "14600901"
		},
		stime: 3530896200000,
		gdate: [2081, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 10, 21] },
		gtime: 3530896200000
	},
	{
		sdate: [1460, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 2],
			DateTime: "1460-09-02 00:00:00",
			DateAber: "02 Aza 1460",
			DateMonth: "Aza",
			DateYearMonth: "1460-Aza",
			DateYear: "1460",
			DateAberWithDate: "Sat 02 Aza 1460",
			DateDoy: "1460.247",
			DateWoy: "1460W36-1",
			DateWithSlash: "1460/09/02",
			DateWithOutSlash: "14600902"
		},
		stime: 3530982600000,
		gdate: [2081, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 10, 22] },
		gtime: 3530982600000
	},
	{
		sdate: [1460, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 15],
			DateTime: "1460-09-15 00:00:00",
			DateAber: "15 Aza 1460",
			DateMonth: "Aza",
			DateYearMonth: "1460-Aza",
			DateYear: "1460",
			DateAberWithDate: "Fri 15 Aza 1460",
			DateDoy: "1460.260",
			DateWoy: "1460W37-7",
			DateWithSlash: "1460/09/15",
			DateWithOutSlash: "14600915"
		},
		stime: 3532105800000,
		gdate: [2081, 12, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 11, 5] },
		gtime: 3532105800000
	},
	{
		sdate: [1460, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 29],
			DateTime: "1460-09-29 00:00:00",
			DateAber: "29 Aza 1460",
			DateMonth: "Aza",
			DateYearMonth: "1460-Aza",
			DateYear: "1460",
			DateAberWithDate: "Fri 29 Aza 1460",
			DateDoy: "1460.274",
			DateWoy: "1460W39-7",
			DateWithSlash: "1460/09/29",
			DateWithOutSlash: "14600929"
		},
		stime: 3533315400000,
		gdate: [2081, 12, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 11, 19] },
		gtime: 3533315400000
	},
	{
		sdate: [1460, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 30],
			DateTime: "1460-09-30 00:00:00",
			DateAber: "30 Aza 1460",
			DateMonth: "Aza",
			DateYearMonth: "1460-Aza",
			DateYear: "1460",
			DateAberWithDate: "Sat 30 Aza 1460",
			DateDoy: "1460.275",
			DateWoy: "1460W40-1",
			DateWithSlash: "1460/09/30",
			DateWithOutSlash: "14600930"
		},
		stime: 3533401800000,
		gdate: [2081, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 11, 20] },
		gtime: 3533401800000
	},
	{
		sdate: [1460, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 1],
			DateTime: "1460-10-01 00:00:00",
			DateAber: "01 Dey 1460",
			DateMonth: "Dey",
			DateYearMonth: "1460-Dey",
			DateYear: "1460",
			DateAberWithDate: "Sun 01 Dey 1460",
			DateDoy: "1460.276",
			DateWoy: "1460W40-2",
			DateWithSlash: "1460/10/01",
			DateWithOutSlash: "14601001"
		},
		stime: 3533488200000,
		gdate: [2081, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 11, 21] },
		gtime: 3533488200000
	},
	{
		sdate: [1460, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 2],
			DateTime: "1460-10-02 00:00:00",
			DateAber: "02 Dey 1460",
			DateMonth: "Dey",
			DateYearMonth: "1460-Dey",
			DateYear: "1460",
			DateAberWithDate: "Mon 02 Dey 1460",
			DateDoy: "1460.277",
			DateWoy: "1460W40-3",
			DateWithSlash: "1460/10/02",
			DateWithOutSlash: "14601002"
		},
		stime: 3533574600000,
		gdate: [2081, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 11, 22] },
		gtime: 3533574600000
	},
	{
		sdate: [1460, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 15],
			DateTime: "1460-10-15 00:00:00",
			DateAber: "15 Dey 1460",
			DateMonth: "Dey",
			DateYearMonth: "1460-Dey",
			DateYear: "1460",
			DateAberWithDate: "Sun 15 Dey 1460",
			DateDoy: "1460.290",
			DateWoy: "1460W42-2",
			DateWithSlash: "1460/10/15",
			DateWithOutSlash: "14601015"
		},
		stime: 3534697800000,
		gdate: [2082, 1, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 0, 4] },
		gtime: 3534697800000
	},
	{
		sdate: [1460, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 29],
			DateTime: "1460-10-29 00:00:00",
			DateAber: "29 Dey 1460",
			DateMonth: "Dey",
			DateYearMonth: "1460-Dey",
			DateYear: "1460",
			DateAberWithDate: "Sun 29 Dey 1460",
			DateDoy: "1460.304",
			DateWoy: "1460W44-2",
			DateWithSlash: "1460/10/29",
			DateWithOutSlash: "14601029"
		},
		stime: 3535907400000,
		gdate: [2082, 1, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 0, 18] },
		gtime: 3535907400000
	},
	{
		sdate: [1460, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 30],
			DateTime: "1460-10-30 00:00:00",
			DateAber: "30 Dey 1460",
			DateMonth: "Dey",
			DateYearMonth: "1460-Dey",
			DateYear: "1460",
			DateAberWithDate: "Mon 30 Dey 1460",
			DateDoy: "1460.305",
			DateWoy: "1460W44-3",
			DateWithSlash: "1460/10/30",
			DateWithOutSlash: "14601030"
		},
		stime: 3535993800000,
		gdate: [2082, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 0, 19] },
		gtime: 3535993800000
	},
	{
		sdate: [1460, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 1],
			DateTime: "1460-11-01 00:00:00",
			DateAber: "01 Bah 1460",
			DateMonth: "Bah",
			DateYearMonth: "1460-Bah",
			DateYear: "1460",
			DateAberWithDate: "Tue 01 Bah 1460",
			DateDoy: "1460.306",
			DateWoy: "1460W44-4",
			DateWithSlash: "1460/11/01",
			DateWithOutSlash: "14601101"
		},
		stime: 3536080200000,
		gdate: [2082, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 0, 20] },
		gtime: 3536080200000
	},
	{
		sdate: [1460, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 2],
			DateTime: "1460-11-02 00:00:00",
			DateAber: "02 Bah 1460",
			DateMonth: "Bah",
			DateYearMonth: "1460-Bah",
			DateYear: "1460",
			DateAberWithDate: "Wed 02 Bah 1460",
			DateDoy: "1460.307",
			DateWoy: "1460W44-5",
			DateWithSlash: "1460/11/02",
			DateWithOutSlash: "14601102"
		},
		stime: 3536166600000,
		gdate: [2082, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 0, 21] },
		gtime: 3536166600000
	},
	{
		sdate: [1460, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 15],
			DateTime: "1460-11-15 00:00:00",
			DateAber: "15 Bah 1460",
			DateMonth: "Bah",
			DateYearMonth: "1460-Bah",
			DateYear: "1460",
			DateAberWithDate: "Tue 15 Bah 1460",
			DateDoy: "1460.320",
			DateWoy: "1460W46-4",
			DateWithSlash: "1460/11/15",
			DateWithOutSlash: "14601115"
		},
		stime: 3537289800000,
		gdate: [2082, 2, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 1, 3] },
		gtime: 3537289800000
	},
	{
		sdate: [1460, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 29],
			DateTime: "1460-11-29 00:00:00",
			DateAber: "29 Bah 1460",
			DateMonth: "Bah",
			DateYearMonth: "1460-Bah",
			DateYear: "1460",
			DateAberWithDate: "Tue 29 Bah 1460",
			DateDoy: "1460.334",
			DateWoy: "1460W48-4",
			DateWithSlash: "1460/11/29",
			DateWithOutSlash: "14601129"
		},
		stime: 3538499400000,
		gdate: [2082, 2, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 1, 17] },
		gtime: 3538499400000
	},
	{
		sdate: [1460, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 30],
			DateTime: "1460-11-30 00:00:00",
			DateAber: "30 Bah 1460",
			DateMonth: "Bah",
			DateYearMonth: "1460-Bah",
			DateYear: "1460",
			DateAberWithDate: "Wed 30 Bah 1460",
			DateDoy: "1460.335",
			DateWoy: "1460W48-5",
			DateWithSlash: "1460/11/30",
			DateWithOutSlash: "14601130"
		},
		stime: 3538585800000,
		gdate: [2082, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 1, 18] },
		gtime: 3538585800000
	},
	{
		sdate: [1460, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 1],
			DateTime: "1460-12-01 00:00:00",
			DateAber: "01 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Thu 01 Esf 1460",
			DateDoy: "1460.336",
			DateWoy: "1460W48-6",
			DateWithSlash: "1460/12/01",
			DateWithOutSlash: "14601201"
		},
		stime: 3538672200000,
		gdate: [2082, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 1, 19] },
		gtime: 3538672200000
	},
	{
		sdate: [1460, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 2],
			DateTime: "1460-12-02 00:00:00",
			DateAber: "02 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Fri 02 Esf 1460",
			DateDoy: "1460.337",
			DateWoy: "1460W48-7",
			DateWithSlash: "1460/12/02",
			DateWithOutSlash: "14601202"
		},
		stime: 3538758600000,
		gdate: [2082, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 1, 20] },
		gtime: 3538758600000
	},
	{
		sdate: [1460, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 3],
			DateTime: "1460-12-03 00:00:00",
			DateAber: "03 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Sat 03 Esf 1460",
			DateDoy: "1460.338",
			DateWoy: "1460W49-1",
			DateWithSlash: "1460/12/03",
			DateWithOutSlash: "14601203"
		},
		stime: 3538845000000,
		gdate: [2082, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 1, 21] },
		gtime: 3538845000000
	},
	{
		sdate: [1460, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 4],
			DateTime: "1460-12-04 00:00:00",
			DateAber: "04 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Sun 04 Esf 1460",
			DateDoy: "1460.339",
			DateWoy: "1460W49-2",
			DateWithSlash: "1460/12/04",
			DateWithOutSlash: "14601204"
		},
		stime: 3538931400000,
		gdate: [2082, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 1, 22] },
		gtime: 3538931400000
	},
	{
		sdate: [1460, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 15],
			DateTime: "1460-12-15 00:00:00",
			DateAber: "15 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Thu 15 Esf 1460",
			DateDoy: "1460.350",
			DateWoy: "1460W50-6",
			DateWithSlash: "1460/12/15",
			DateWithOutSlash: "14601215"
		},
		stime: 3539881800000,
		gdate: [2082, 3, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 2, 5] },
		gtime: 3539881800000
	},
	{
		sdate: [1460, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 25],
			DateTime: "1460-12-25 00:00:00",
			DateAber: "25 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Sun 25 Esf 1460",
			DateDoy: "1460.360",
			DateWoy: "1460W52-2",
			DateWithSlash: "1460/12/25",
			DateWithOutSlash: "14601225"
		},
		stime: 3540745800000,
		gdate: [2082, 3, 15, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 2, 15] },
		gtime: 3540745800000
	},
	{
		sdate: [1460, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 26],
			DateTime: "1460-12-26 00:00:00",
			DateAber: "26 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Mon 26 Esf 1460",
			DateDoy: "1460.361",
			DateWoy: "1460W52-3",
			DateWithSlash: "1460/12/26",
			DateWithOutSlash: "14601226"
		},
		stime: 3540832200000,
		gdate: [2082, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 2, 16] },
		gtime: 3540832200000
	},
	{
		sdate: [1460, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 27],
			DateTime: "1460-12-27 00:00:00",
			DateAber: "27 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Tue 27 Esf 1460",
			DateDoy: "1460.362",
			DateWoy: "1460W52-4",
			DateWithSlash: "1460/12/27",
			DateWithOutSlash: "14601227"
		},
		stime: 3540918600000,
		gdate: [2082, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 2, 17] },
		gtime: 3540918600000
	},
	{
		sdate: [1460, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 28],
			DateTime: "1460-12-28 00:00:00",
			DateAber: "28 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Wed 28 Esf 1460",
			DateDoy: "1460.363",
			DateWoy: "1460W52-5",
			DateWithSlash: "1460/12/28",
			DateWithOutSlash: "14601228"
		},
		stime: 3541005000000,
		gdate: [2082, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 2, 18] },
		gtime: 3541005000000
	},
	{
		sdate: [1460, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 29],
			DateTime: "1460-12-29 00:00:00",
			DateAber: "29 Esf 1460",
			DateMonth: "Esf",
			DateYearMonth: "1460-Esf",
			DateYear: "1460",
			DateAberWithDate: "Thu 29 Esf 1460",
			DateDoy: "1460.364",
			DateWoy: "1460W52-6",
			DateWithSlash: "1460/12/29",
			DateWithOutSlash: "14601229"
		},
		stime: 3541091400000,
		gdate: [2082, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 2, 19] },
		gtime: 3541091400000
	},

	{
		sdate: [1480, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 1],
			DateTime: "1480-01-01 01:00:00",
			DateAber: "01 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Mon 01 Far 1480",
			DateDoy: "1480.000",
			DateWoy: "1480W01-3",
			DateWithSlash: "1480/01/01",
			DateWithOutSlash: "14800101"
		},
		stime: 4140793800000,
		gdate: [2101, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 21] },
		gtime: 4140793800000
	},
	{
		sdate: [1480, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 2],
			DateTime: "1480-01-02 00:00:00",
			DateAber: "02 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Tue 02 Far 1480",
			DateDoy: "1480.001",
			DateWoy: "1480W01-4",
			DateWithSlash: "1480/01/02",
			DateWithOutSlash: "14800102"
		},
		stime: 4140876600000,
		gdate: [2101, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 22] },
		gtime: 4140876600000
	},
	{
		sdate: [1480, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 3],
			DateTime: "1480-01-03 00:00:00",
			DateAber: "03 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Wed 03 Far 1480",
			DateDoy: "1480.002",
			DateWoy: "1480W01-5",
			DateWithSlash: "1480/01/03",
			DateWithOutSlash: "14800103"
		},
		stime: 4140963000000,
		gdate: [2101, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 23] },
		gtime: 4140963000000
	},
	{
		sdate: [1480, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 4],
			DateTime: "1480-01-04 00:00:00",
			DateAber: "04 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Thu 04 Far 1480",
			DateDoy: "1480.003",
			DateWoy: "1480W01-6",
			DateWithSlash: "1480/01/04",
			DateWithOutSlash: "14800104"
		},
		stime: 4141049400000,
		gdate: [2101, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 24] },
		gtime: 4141049400000
	},
	{
		sdate: [1480, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 5],
			DateTime: "1480-01-05 00:00:00",
			DateAber: "05 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Fri 05 Far 1480",
			DateDoy: "1480.004",
			DateWoy: "1480W01-7",
			DateWithSlash: "1480/01/05",
			DateWithOutSlash: "14800105"
		},
		stime: 4141135800000,
		gdate: [2101, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 25] },
		gtime: 4141135800000
	},
	{
		sdate: [1480, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 6],
			DateTime: "1480-01-06 00:00:00",
			DateAber: "06 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Sat 06 Far 1480",
			DateDoy: "1480.005",
			DateWoy: "1480W02-1",
			DateWithSlash: "1480/01/06",
			DateWithOutSlash: "14800106"
		},
		stime: 4141222200000,
		gdate: [2101, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 26] },
		gtime: 4141222200000
	},
	{
		sdate: [1480, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 7],
			DateTime: "1480-01-07 00:00:00",
			DateAber: "07 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Sun 07 Far 1480",
			DateDoy: "1480.006",
			DateWoy: "1480W02-2",
			DateWithSlash: "1480/01/07",
			DateWithOutSlash: "14800107"
		},
		stime: 4141308600000,
		gdate: [2101, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 27] },
		gtime: 4141308600000
	},
	{
		sdate: [1480, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 15],
			DateTime: "1480-01-15 00:00:00",
			DateAber: "15 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Mon 15 Far 1480",
			DateDoy: "1480.014",
			DateWoy: "1480W03-3",
			DateWithSlash: "1480/01/15",
			DateWithOutSlash: "14800115"
		},
		stime: 4141999800000,
		gdate: [2101, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 4] },
		gtime: 4141999800000
	},
	{
		sdate: [1480, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 29],
			DateTime: "1480-01-29 00:00:00",
			DateAber: "29 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Mon 29 Far 1480",
			DateDoy: "1480.028",
			DateWoy: "1480W05-3",
			DateWithSlash: "1480/01/29",
			DateWithOutSlash: "14800129"
		},
		stime: 4143209400000,
		gdate: [2101, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 18] },
		gtime: 4143209400000
	},
	{
		sdate: [1480, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 30],
			DateTime: "1480-01-30 00:00:00",
			DateAber: "30 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Tue 30 Far 1480",
			DateDoy: "1480.029",
			DateWoy: "1480W05-4",
			DateWithSlash: "1480/01/30",
			DateWithOutSlash: "14800130"
		},
		stime: 4143295800000,
		gdate: [2101, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 19] },
		gtime: 4143295800000
	},
	{
		sdate: [1480, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 31],
			DateTime: "1480-01-31 00:00:00",
			DateAber: "31 Far 1480",
			DateMonth: "Far",
			DateYearMonth: "1480-Far",
			DateYear: "1480",
			DateAberWithDate: "Wed 31 Far 1480",
			DateDoy: "1480.030",
			DateWoy: "1480W05-5",
			DateWithSlash: "1480/01/31",
			DateWithOutSlash: "14800131"
		},
		stime: 4143382200000,
		gdate: [2101, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 20] },
		gtime: 4143382200000
	},
	{
		sdate: [1480, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 1],
			DateTime: "1480-02-01 00:00:00",
			DateAber: "01 Ord 1480",
			DateMonth: "Ord",
			DateYearMonth: "1480-Ord",
			DateYear: "1480",
			DateAberWithDate: "Thu 01 Ord 1480",
			DateDoy: "1480.031",
			DateWoy: "1480W05-6",
			DateWithSlash: "1480/02/01",
			DateWithOutSlash: "14800201"
		},
		stime: 4143468600000,
		gdate: [2101, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 21] },
		gtime: 4143468600000
	},
	{
		sdate: [1480, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 2],
			DateTime: "1480-02-02 00:00:00",
			DateAber: "02 Ord 1480",
			DateMonth: "Ord",
			DateYearMonth: "1480-Ord",
			DateYear: "1480",
			DateAberWithDate: "Fri 02 Ord 1480",
			DateDoy: "1480.032",
			DateWoy: "1480W05-7",
			DateWithSlash: "1480/02/02",
			DateWithOutSlash: "14800202"
		},
		stime: 4143555000000,
		gdate: [2101, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 22] },
		gtime: 4143555000000
	},
	{
		sdate: [1480, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 15],
			DateTime: "1480-02-15 00:00:00",
			DateAber: "15 Ord 1480",
			DateMonth: "Ord",
			DateYearMonth: "1480-Ord",
			DateYear: "1480",
			DateAberWithDate: "Thu 15 Ord 1480",
			DateDoy: "1480.045",
			DateWoy: "1480W07-6",
			DateWithSlash: "1480/02/15",
			DateWithOutSlash: "14800215"
		},
		stime: 4144678200000,
		gdate: [2101, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 5] },
		gtime: 4144678200000
	},
	{
		sdate: [1480, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 30],
			DateTime: "1480-02-30 00:00:00",
			DateAber: "30 Ord 1480",
			DateMonth: "Ord",
			DateYearMonth: "1480-Ord",
			DateYear: "1480",
			DateAberWithDate: "Fri 30 Ord 1480",
			DateDoy: "1480.060",
			DateWoy: "1480W09-7",
			DateWithSlash: "1480/02/30",
			DateWithOutSlash: "14800230"
		},
		stime: 4145974200000,
		gdate: [2101, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 20] },
		gtime: 4145974200000
	},
	{
		sdate: [1480, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 31],
			DateTime: "1480-02-31 00:00:00",
			DateAber: "31 Ord 1480",
			DateMonth: "Ord",
			DateYearMonth: "1480-Ord",
			DateYear: "1480",
			DateAberWithDate: "Sat 31 Ord 1480",
			DateDoy: "1480.061",
			DateWoy: "1480W10-1",
			DateWithSlash: "1480/02/31",
			DateWithOutSlash: "14800231"
		},
		stime: 4146060600000,
		gdate: [2101, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 21] },
		gtime: 4146060600000
	},
	{
		sdate: [1480, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 1],
			DateTime: "1480-03-01 00:00:00",
			DateAber: "01 Kho 1480",
			DateMonth: "Kho",
			DateYearMonth: "1480-Kho",
			DateYear: "1480",
			DateAberWithDate: "Sun 01 Kho 1480",
			DateDoy: "1480.062",
			DateWoy: "1480W10-2",
			DateWithSlash: "1480/03/01",
			DateWithOutSlash: "14800301"
		},
		stime: 4146147000000,
		gdate: [2101, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 22] },
		gtime: 4146147000000
	},
	{
		sdate: [1480, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 2],
			DateTime: "1480-03-02 00:00:00",
			DateAber: "02 Kho 1480",
			DateMonth: "Kho",
			DateYearMonth: "1480-Kho",
			DateYear: "1480",
			DateAberWithDate: "Mon 02 Kho 1480",
			DateDoy: "1480.063",
			DateWoy: "1480W10-3",
			DateWithSlash: "1480/03/02",
			DateWithOutSlash: "14800302"
		},
		stime: 4146233400000,
		gdate: [2101, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 23] },
		gtime: 4146233400000
	},
	{
		sdate: [1480, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 15],
			DateTime: "1480-03-15 00:00:00",
			DateAber: "15 Kho 1480",
			DateMonth: "Kho",
			DateYearMonth: "1480-Kho",
			DateYear: "1480",
			DateAberWithDate: "Sun 15 Kho 1480",
			DateDoy: "1480.076",
			DateWoy: "1480W12-2",
			DateWithSlash: "1480/03/15",
			DateWithOutSlash: "14800315"
		},
		stime: 4147356600000,
		gdate: [2101, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 5] },
		gtime: 4147356600000
	},
	{
		sdate: [1480, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 30],
			DateTime: "1480-03-30 00:00:00",
			DateAber: "30 Kho 1480",
			DateMonth: "Kho",
			DateYearMonth: "1480-Kho",
			DateYear: "1480",
			DateAberWithDate: "Mon 30 Kho 1480",
			DateDoy: "1480.091",
			DateWoy: "1480W14-3",
			DateWithSlash: "1480/03/30",
			DateWithOutSlash: "14800330"
		},
		stime: 4148652600000,
		gdate: [2101, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 20] },
		gtime: 4148652600000
	},
	{
		sdate: [1480, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 31],
			DateTime: "1480-03-31 00:00:00",
			DateAber: "31 Kho 1480",
			DateMonth: "Kho",
			DateYearMonth: "1480-Kho",
			DateYear: "1480",
			DateAberWithDate: "Tue 31 Kho 1480",
			DateDoy: "1480.092",
			DateWoy: "1480W14-4",
			DateWithSlash: "1480/03/31",
			DateWithOutSlash: "14800331"
		},
		stime: 4148739000000,
		gdate: [2101, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 21] },
		gtime: 4148739000000
	},
	{
		sdate: [1480, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 1],
			DateTime: "1480-04-01 00:00:00",
			DateAber: "01 Tir 1480",
			DateMonth: "Tir",
			DateYearMonth: "1480-Tir",
			DateYear: "1480",
			DateAberWithDate: "Wed 01 Tir 1480",
			DateDoy: "1480.093",
			DateWoy: "1480W14-5",
			DateWithSlash: "1480/04/01",
			DateWithOutSlash: "14800401"
		},
		stime: 4148825400000,
		gdate: [2101, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 22] },
		gtime: 4148825400000
	},
	{
		sdate: [1480, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 2],
			DateTime: "1480-04-02 00:00:00",
			DateAber: "02 Tir 1480",
			DateMonth: "Tir",
			DateYearMonth: "1480-Tir",
			DateYear: "1480",
			DateAberWithDate: "Thu 02 Tir 1480",
			DateDoy: "1480.094",
			DateWoy: "1480W14-6",
			DateWithSlash: "1480/04/02",
			DateWithOutSlash: "14800402"
		},
		stime: 4148911800000,
		gdate: [2101, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 23] },
		gtime: 4148911800000
	},
	{
		sdate: [1480, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 15],
			DateTime: "1480-04-15 00:00:00",
			DateAber: "15 Tir 1480",
			DateMonth: "Tir",
			DateYearMonth: "1480-Tir",
			DateYear: "1480",
			DateAberWithDate: "Wed 15 Tir 1480",
			DateDoy: "1480.107",
			DateWoy: "1480W16-5",
			DateWithSlash: "1480/04/15",
			DateWithOutSlash: "14800415"
		},
		stime: 4150035000000,
		gdate: [2101, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 6] },
		gtime: 4150035000000
	},
	{
		sdate: [1480, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 30],
			DateTime: "1480-04-30 00:00:00",
			DateAber: "30 Tir 1480",
			DateMonth: "Tir",
			DateYearMonth: "1480-Tir",
			DateYear: "1480",
			DateAberWithDate: "Thu 30 Tir 1480",
			DateDoy: "1480.122",
			DateWoy: "1480W18-6",
			DateWithSlash: "1480/04/30",
			DateWithOutSlash: "14800430"
		},
		stime: 4151331000000,
		gdate: [2101, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 21] },
		gtime: 4151331000000
	},
	{
		sdate: [1480, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 31],
			DateTime: "1480-04-31 00:00:00",
			DateAber: "31 Tir 1480",
			DateMonth: "Tir",
			DateYearMonth: "1480-Tir",
			DateYear: "1480",
			DateAberWithDate: "Fri 31 Tir 1480",
			DateDoy: "1480.123",
			DateWoy: "1480W18-7",
			DateWithSlash: "1480/04/31",
			DateWithOutSlash: "14800431"
		},
		stime: 4151417400000,
		gdate: [2101, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 22] },
		gtime: 4151417400000
	},
	{
		sdate: [1480, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 1],
			DateTime: "1480-05-01 00:00:00",
			DateAber: "01 Amo 1480",
			DateMonth: "Amo",
			DateYearMonth: "1480-Amo",
			DateYear: "1480",
			DateAberWithDate: "Sat 01 Amo 1480",
			DateDoy: "1480.124",
			DateWoy: "1480W19-1",
			DateWithSlash: "1480/05/01",
			DateWithOutSlash: "14800501"
		},
		stime: 4151503800000,
		gdate: [2101, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 23] },
		gtime: 4151503800000
	},
	{
		sdate: [1480, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 2],
			DateTime: "1480-05-02 00:00:00",
			DateAber: "02 Amo 1480",
			DateMonth: "Amo",
			DateYearMonth: "1480-Amo",
			DateYear: "1480",
			DateAberWithDate: "Sun 02 Amo 1480",
			DateDoy: "1480.125",
			DateWoy: "1480W19-2",
			DateWithSlash: "1480/05/02",
			DateWithOutSlash: "14800502"
		},
		stime: 4151590200000,
		gdate: [2101, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 24] },
		gtime: 4151590200000
	},
	{
		sdate: [1480, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 15],
			DateTime: "1480-05-15 00:00:00",
			DateAber: "15 Amo 1480",
			DateMonth: "Amo",
			DateYearMonth: "1480-Amo",
			DateYear: "1480",
			DateAberWithDate: "Sat 15 Amo 1480",
			DateDoy: "1480.138",
			DateWoy: "1480W21-1",
			DateWithSlash: "1480/05/15",
			DateWithOutSlash: "14800515"
		},
		stime: 4152713400000,
		gdate: [2101, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 6] },
		gtime: 4152713400000
	},
	{
		sdate: [1480, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 30],
			DateTime: "1480-05-30 00:00:00",
			DateAber: "30 Amo 1480",
			DateMonth: "Amo",
			DateYearMonth: "1480-Amo",
			DateYear: "1480",
			DateAberWithDate: "Sun 30 Amo 1480",
			DateDoy: "1480.153",
			DateWoy: "1480W23-2",
			DateWithSlash: "1480/05/30",
			DateWithOutSlash: "14800530"
		},
		stime: 4154009400000,
		gdate: [2101, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 21] },
		gtime: 4154009400000
	},
	{
		sdate: [1480, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 31],
			DateTime: "1480-05-31 00:00:00",
			DateAber: "31 Amo 1480",
			DateMonth: "Amo",
			DateYearMonth: "1480-Amo",
			DateYear: "1480",
			DateAberWithDate: "Mon 31 Amo 1480",
			DateDoy: "1480.154",
			DateWoy: "1480W23-3",
			DateWithSlash: "1480/05/31",
			DateWithOutSlash: "14800531"
		},
		stime: 4154095800000,
		gdate: [2101, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 22] },
		gtime: 4154095800000
	},
	{
		sdate: [1480, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 1],
			DateTime: "1480-06-01 00:00:00",
			DateAber: "01 Sha 1480",
			DateMonth: "Sha",
			DateYearMonth: "1480-Sha",
			DateYear: "1480",
			DateAberWithDate: "Tue 01 Sha 1480",
			DateDoy: "1480.155",
			DateWoy: "1480W23-4",
			DateWithSlash: "1480/06/01",
			DateWithOutSlash: "14800601"
		},
		stime: 4154182200000,
		gdate: [2101, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 23] },
		gtime: 4154182200000
	},
	{
		sdate: [1480, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 2],
			DateTime: "1480-06-02 00:00:00",
			DateAber: "02 Sha 1480",
			DateMonth: "Sha",
			DateYearMonth: "1480-Sha",
			DateYear: "1480",
			DateAberWithDate: "Wed 02 Sha 1480",
			DateDoy: "1480.156",
			DateWoy: "1480W23-5",
			DateWithSlash: "1480/06/02",
			DateWithOutSlash: "14800602"
		},
		stime: 4154268600000,
		gdate: [2101, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 24] },
		gtime: 4154268600000
	},
	{
		sdate: [1480, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 15],
			DateTime: "1480-06-15 00:00:00",
			DateAber: "15 Sha 1480",
			DateMonth: "Sha",
			DateYearMonth: "1480-Sha",
			DateYear: "1480",
			DateAberWithDate: "Tue 15 Sha 1480",
			DateDoy: "1480.169",
			DateWoy: "1480W25-4",
			DateWithSlash: "1480/06/15",
			DateWithOutSlash: "14800615"
		},
		stime: 4155391800000,
		gdate: [2101, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 8, 6] },
		gtime: 4155391800000
	},
	{
		sdate: [1480, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 29],
			DateTime: "1480-06-29 00:00:00",
			DateAber: "29 Sha 1480",
			DateMonth: "Sha",
			DateYearMonth: "1480-Sha",
			DateYear: "1480",
			DateAberWithDate: "Tue 29 Sha 1480",
			DateDoy: "1480.183",
			DateWoy: "1480W27-4",
			DateWithSlash: "1480/06/29",
			DateWithOutSlash: "14800629"
		},
		stime: 4156601400000,
		gdate: [2101, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 8, 20] },
		gtime: 4156601400000
	},
	{
		sdate: [1480, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 30],
			DateTime: "1480-06-30 00:00:00",
			DateAber: "30 Sha 1480",
			DateMonth: "Sha",
			DateYearMonth: "1480-Sha",
			DateYear: "1480",
			DateAberWithDate: "Wed 30 Sha 1480",
			DateDoy: "1480.184",
			DateWoy: "1480W27-5",
			DateWithSlash: "1480/06/30",
			DateWithOutSlash: "14800630"
		},
		stime: 4156691400000,
		gdate: [2101, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 8, 21] },
		gtime: 4156691400000
	},
	{
		sdate: [1480, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 1],
			DateTime: "1480-07-01 00:00:00",
			DateAber: "01 Meh 1480",
			DateMonth: "Meh",
			DateYearMonth: "1480-Meh",
			DateYear: "1480",
			DateAberWithDate: "Fri 01 Meh 1480",
			DateDoy: "1480.186",
			DateWoy: "1480W27-7",
			DateWithSlash: "1480/07/01",
			DateWithOutSlash: "14800701"
		},
		stime: 4156864200000,
		gdate: [2101, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 8, 23] },
		gtime: 4156864200000
	},
	{
		sdate: [1480, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 2],
			DateTime: "1480-07-02 00:00:00",
			DateAber: "02 Meh 1480",
			DateMonth: "Meh",
			DateYearMonth: "1480-Meh",
			DateYear: "1480",
			DateAberWithDate: "Sat 02 Meh 1480",
			DateDoy: "1480.187",
			DateWoy: "1480W28-1",
			DateWithSlash: "1480/07/02",
			DateWithOutSlash: "14800702"
		},
		stime: 4156950600000,
		gdate: [2101, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 8, 24] },
		gtime: 4156950600000
	},
	{
		sdate: [1480, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 15],
			DateTime: "1480-07-15 00:00:00",
			DateAber: "15 Meh 1480",
			DateMonth: "Meh",
			DateYearMonth: "1480-Meh",
			DateYear: "1480",
			DateAberWithDate: "Fri 15 Meh 1480",
			DateDoy: "1480.200",
			DateWoy: "1480W29-7",
			DateWithSlash: "1480/07/15",
			DateWithOutSlash: "14800715"
		},
		stime: 4158073800000,
		gdate: [2101, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 9, 7] },
		gtime: 4158073800000
	},
	{
		sdate: [1480, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 29],
			DateTime: "1480-07-29 00:00:00",
			DateAber: "29 Meh 1480",
			DateMonth: "Meh",
			DateYearMonth: "1480-Meh",
			DateYear: "1480",
			DateAberWithDate: "Fri 29 Meh 1480",
			DateDoy: "1480.214",
			DateWoy: "1480W31-7",
			DateWithSlash: "1480/07/29",
			DateWithOutSlash: "14800729"
		},
		stime: 4159283400000,
		gdate: [2101, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 9, 21] },
		gtime: 4159283400000
	},
	{
		sdate: [1480, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 30],
			DateTime: "1480-07-30 00:00:00",
			DateAber: "30 Meh 1480",
			DateMonth: "Meh",
			DateYearMonth: "1480-Meh",
			DateYear: "1480",
			DateAberWithDate: "Sat 30 Meh 1480",
			DateDoy: "1480.215",
			DateWoy: "1480W32-1",
			DateWithSlash: "1480/07/30",
			DateWithOutSlash: "14800730"
		},
		stime: 4159369800000,
		gdate: [2101, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 9, 22] },
		gtime: 4159369800000
	},
	{
		sdate: [1480, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 1],
			DateTime: "1480-08-01 00:00:00",
			DateAber: "01 Aba 1480",
			DateMonth: "Aba",
			DateYearMonth: "1480-Aba",
			DateYear: "1480",
			DateAberWithDate: "Sun 01 Aba 1480",
			DateDoy: "1480.216",
			DateWoy: "1480W32-2",
			DateWithSlash: "1480/08/01",
			DateWithOutSlash: "14800801"
		},
		stime: 4159456200000,
		gdate: [2101, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 9, 23] },
		gtime: 4159456200000
	},
	{
		sdate: [1480, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 2],
			DateTime: "1480-08-02 00:00:00",
			DateAber: "02 Aba 1480",
			DateMonth: "Aba",
			DateYearMonth: "1480-Aba",
			DateYear: "1480",
			DateAberWithDate: "Mon 02 Aba 1480",
			DateDoy: "1480.217",
			DateWoy: "1480W32-3",
			DateWithSlash: "1480/08/02",
			DateWithOutSlash: "14800802"
		},
		stime: 4159542600000,
		gdate: [2101, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 9, 24] },
		gtime: 4159542600000
	},
	{
		sdate: [1480, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 15],
			DateTime: "1480-08-15 00:00:00",
			DateAber: "15 Aba 1480",
			DateMonth: "Aba",
			DateYearMonth: "1480-Aba",
			DateYear: "1480",
			DateAberWithDate: "Sun 15 Aba 1480",
			DateDoy: "1480.230",
			DateWoy: "1480W34-2",
			DateWithSlash: "1480/08/15",
			DateWithOutSlash: "14800815"
		},
		stime: 4160665800000,
		gdate: [2101, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 10, 6] },
		gtime: 4160665800000
	},
	{
		sdate: [1480, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 29],
			DateTime: "1480-08-29 00:00:00",
			DateAber: "29 Aba 1480",
			DateMonth: "Aba",
			DateYearMonth: "1480-Aba",
			DateYear: "1480",
			DateAberWithDate: "Sun 29 Aba 1480",
			DateDoy: "1480.244",
			DateWoy: "1480W36-2",
			DateWithSlash: "1480/08/29",
			DateWithOutSlash: "14800829"
		},
		stime: 4161875400000,
		gdate: [2101, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 10, 20] },
		gtime: 4161875400000
	},
	{
		sdate: [1480, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 30],
			DateTime: "1480-08-30 00:00:00",
			DateAber: "30 Aba 1480",
			DateMonth: "Aba",
			DateYearMonth: "1480-Aba",
			DateYear: "1480",
			DateAberWithDate: "Mon 30 Aba 1480",
			DateDoy: "1480.245",
			DateWoy: "1480W36-3",
			DateWithSlash: "1480/08/30",
			DateWithOutSlash: "14800830"
		},
		stime: 4161961800000,
		gdate: [2101, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 10, 21] },
		gtime: 4161961800000
	},
	{
		sdate: [1480, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 1],
			DateTime: "1480-09-01 00:00:00",
			DateAber: "01 Aza 1480",
			DateMonth: "Aza",
			DateYearMonth: "1480-Aza",
			DateYear: "1480",
			DateAberWithDate: "Tue 01 Aza 1480",
			DateDoy: "1480.246",
			DateWoy: "1480W36-4",
			DateWithSlash: "1480/09/01",
			DateWithOutSlash: "14800901"
		},
		stime: 4162048200000,
		gdate: [2101, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 10, 22] },
		gtime: 4162048200000
	},
	{
		sdate: [1480, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 2],
			DateTime: "1480-09-02 00:00:00",
			DateAber: "02 Aza 1480",
			DateMonth: "Aza",
			DateYearMonth: "1480-Aza",
			DateYear: "1480",
			DateAberWithDate: "Wed 02 Aza 1480",
			DateDoy: "1480.247",
			DateWoy: "1480W36-5",
			DateWithSlash: "1480/09/02",
			DateWithOutSlash: "14800902"
		},
		stime: 4162134600000,
		gdate: [2101, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 10, 23] },
		gtime: 4162134600000
	},
	{
		sdate: [1480, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 15],
			DateTime: "1480-09-15 00:00:00",
			DateAber: "15 Aza 1480",
			DateMonth: "Aza",
			DateYearMonth: "1480-Aza",
			DateYear: "1480",
			DateAberWithDate: "Tue 15 Aza 1480",
			DateDoy: "1480.260",
			DateWoy: "1480W38-4",
			DateWithSlash: "1480/09/15",
			DateWithOutSlash: "14800915"
		},
		stime: 4163257800000,
		gdate: [2101, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 11, 6] },
		gtime: 4163257800000
	},
	{
		sdate: [1480, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 29],
			DateTime: "1480-09-29 00:00:00",
			DateAber: "29 Aza 1480",
			DateMonth: "Aza",
			DateYearMonth: "1480-Aza",
			DateYear: "1480",
			DateAberWithDate: "Tue 29 Aza 1480",
			DateDoy: "1480.274",
			DateWoy: "1480W40-4",
			DateWithSlash: "1480/09/29",
			DateWithOutSlash: "14800929"
		},
		stime: 4164467400000,
		gdate: [2101, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 11, 20] },
		gtime: 4164467400000
	},
	{
		sdate: [1480, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 30],
			DateTime: "1480-09-30 00:00:00",
			DateAber: "30 Aza 1480",
			DateMonth: "Aza",
			DateYearMonth: "1480-Aza",
			DateYear: "1480",
			DateAberWithDate: "Wed 30 Aza 1480",
			DateDoy: "1480.275",
			DateWoy: "1480W40-5",
			DateWithSlash: "1480/09/30",
			DateWithOutSlash: "14800930"
		},
		stime: 4164553800000,
		gdate: [2101, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 11, 21] },
		gtime: 4164553800000
	},
	{
		sdate: [1480, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 1],
			DateTime: "1480-10-01 00:00:00",
			DateAber: "01 Dey 1480",
			DateMonth: "Dey",
			DateYearMonth: "1480-Dey",
			DateYear: "1480",
			DateAberWithDate: "Thu 01 Dey 1480",
			DateDoy: "1480.276",
			DateWoy: "1480W40-6",
			DateWithSlash: "1480/10/01",
			DateWithOutSlash: "14801001"
		},
		stime: 4164640200000,
		gdate: [2101, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 11, 22] },
		gtime: 4164640200000
	},
	{
		sdate: [1480, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 2],
			DateTime: "1480-10-02 00:00:00",
			DateAber: "02 Dey 1480",
			DateMonth: "Dey",
			DateYearMonth: "1480-Dey",
			DateYear: "1480",
			DateAberWithDate: "Fri 02 Dey 1480",
			DateDoy: "1480.277",
			DateWoy: "1480W40-7",
			DateWithSlash: "1480/10/02",
			DateWithOutSlash: "14801002"
		},
		stime: 4164726600000,
		gdate: [2101, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 11, 23] },
		gtime: 4164726600000
	},
	{
		sdate: [1480, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 15],
			DateTime: "1480-10-15 00:00:00",
			DateAber: "15 Dey 1480",
			DateMonth: "Dey",
			DateYearMonth: "1480-Dey",
			DateYear: "1480",
			DateAberWithDate: "Thu 15 Dey 1480",
			DateDoy: "1480.290",
			DateWoy: "1480W42-6",
			DateWithSlash: "1480/10/15",
			DateWithOutSlash: "14801015"
		},
		stime: 4165849800000,
		gdate: [2102, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 0, 5] },
		gtime: 4165849800000
	},
	{
		sdate: [1480, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 29],
			DateTime: "1480-10-29 00:00:00",
			DateAber: "29 Dey 1480",
			DateMonth: "Dey",
			DateYearMonth: "1480-Dey",
			DateYear: "1480",
			DateAberWithDate: "Thu 29 Dey 1480",
			DateDoy: "1480.304",
			DateWoy: "1480W44-6",
			DateWithSlash: "1480/10/29",
			DateWithOutSlash: "14801029"
		},
		stime: 4167059400000,
		gdate: [2102, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 0, 19] },
		gtime: 4167059400000
	},
	{
		sdate: [1480, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 30],
			DateTime: "1480-10-30 00:00:00",
			DateAber: "30 Dey 1480",
			DateMonth: "Dey",
			DateYearMonth: "1480-Dey",
			DateYear: "1480",
			DateAberWithDate: "Fri 30 Dey 1480",
			DateDoy: "1480.305",
			DateWoy: "1480W44-7",
			DateWithSlash: "1480/10/30",
			DateWithOutSlash: "14801030"
		},
		stime: 4167145800000,
		gdate: [2102, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 0, 20] },
		gtime: 4167145800000
	},
	{
		sdate: [1480, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 1],
			DateTime: "1480-11-01 00:00:00",
			DateAber: "01 Bah 1480",
			DateMonth: "Bah",
			DateYearMonth: "1480-Bah",
			DateYear: "1480",
			DateAberWithDate: "Sat 01 Bah 1480",
			DateDoy: "1480.306",
			DateWoy: "1480W45-1",
			DateWithSlash: "1480/11/01",
			DateWithOutSlash: "14801101"
		},
		stime: 4167232200000,
		gdate: [2102, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 0, 21] },
		gtime: 4167232200000
	},
	{
		sdate: [1480, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 2],
			DateTime: "1480-11-02 00:00:00",
			DateAber: "02 Bah 1480",
			DateMonth: "Bah",
			DateYearMonth: "1480-Bah",
			DateYear: "1480",
			DateAberWithDate: "Sun 02 Bah 1480",
			DateDoy: "1480.307",
			DateWoy: "1480W45-2",
			DateWithSlash: "1480/11/02",
			DateWithOutSlash: "14801102"
		},
		stime: 4167318600000,
		gdate: [2102, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 0, 22] },
		gtime: 4167318600000
	},
	{
		sdate: [1480, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 15],
			DateTime: "1480-11-15 00:00:00",
			DateAber: "15 Bah 1480",
			DateMonth: "Bah",
			DateYearMonth: "1480-Bah",
			DateYear: "1480",
			DateAberWithDate: "Sat 15 Bah 1480",
			DateDoy: "1480.320",
			DateWoy: "1480W47-1",
			DateWithSlash: "1480/11/15",
			DateWithOutSlash: "14801115"
		},
		stime: 4168441800000,
		gdate: [2102, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 1, 4] },
		gtime: 4168441800000
	},
	{
		sdate: [1480, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 29],
			DateTime: "1480-11-29 00:00:00",
			DateAber: "29 Bah 1480",
			DateMonth: "Bah",
			DateYearMonth: "1480-Bah",
			DateYear: "1480",
			DateAberWithDate: "Sat 29 Bah 1480",
			DateDoy: "1480.334",
			DateWoy: "1480W49-1",
			DateWithSlash: "1480/11/29",
			DateWithOutSlash: "14801129"
		},
		stime: 4169651400000,
		gdate: [2102, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 1, 18] },
		gtime: 4169651400000
	},
	{
		sdate: [1480, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 30],
			DateTime: "1480-11-30 00:00:00",
			DateAber: "30 Bah 1480",
			DateMonth: "Bah",
			DateYearMonth: "1480-Bah",
			DateYear: "1480",
			DateAberWithDate: "Sun 30 Bah 1480",
			DateDoy: "1480.335",
			DateWoy: "1480W49-2",
			DateWithSlash: "1480/11/30",
			DateWithOutSlash: "14801130"
		},
		stime: 4169737800000,
		gdate: [2102, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 1, 19] },
		gtime: 4169737800000
	},
	{
		sdate: [1480, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 1],
			DateTime: "1480-12-01 00:00:00",
			DateAber: "01 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Mon 01 Esf 1480",
			DateDoy: "1480.336",
			DateWoy: "1480W49-3",
			DateWithSlash: "1480/12/01",
			DateWithOutSlash: "14801201"
		},
		stime: 4169824200000,
		gdate: [2102, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 1, 20] },
		gtime: 4169824200000
	},
	{
		sdate: [1480, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 2],
			DateTime: "1480-12-02 00:00:00",
			DateAber: "02 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Tue 02 Esf 1480",
			DateDoy: "1480.337",
			DateWoy: "1480W49-4",
			DateWithSlash: "1480/12/02",
			DateWithOutSlash: "14801202"
		},
		stime: 4169910600000,
		gdate: [2102, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 1, 21] },
		gtime: 4169910600000
	},
	{
		sdate: [1480, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 3],
			DateTime: "1480-12-03 00:00:00",
			DateAber: "03 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Wed 03 Esf 1480",
			DateDoy: "1480.338",
			DateWoy: "1480W49-5",
			DateWithSlash: "1480/12/03",
			DateWithOutSlash: "14801203"
		},
		stime: 4169997000000,
		gdate: [2102, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 1, 22] },
		gtime: 4169997000000
	},
	{
		sdate: [1480, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 4],
			DateTime: "1480-12-04 00:00:00",
			DateAber: "04 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Thu 04 Esf 1480",
			DateDoy: "1480.339",
			DateWoy: "1480W49-6",
			DateWithSlash: "1480/12/04",
			DateWithOutSlash: "14801204"
		},
		stime: 4170083400000,
		gdate: [2102, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 1, 23] },
		gtime: 4170083400000
	},
	{
		sdate: [1480, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 15],
			DateTime: "1480-12-15 00:00:00",
			DateAber: "15 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Mon 15 Esf 1480",
			DateDoy: "1480.350",
			DateWoy: "1480W51-3",
			DateWithSlash: "1480/12/15",
			DateWithOutSlash: "14801215"
		},
		stime: 4171033800000,
		gdate: [2102, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 2, 6] },
		gtime: 4171033800000
	},
	{
		sdate: [1480, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 25],
			DateTime: "1480-12-25 00:00:00",
			DateAber: "25 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Thu 25 Esf 1480",
			DateDoy: "1480.360",
			DateWoy: "1480W52-6",
			DateWithSlash: "1480/12/25",
			DateWithOutSlash: "14801225"
		},
		stime: 4171897800000,
		gdate: [2102, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 2, 16] },
		gtime: 4171897800000
	},
	{
		sdate: [1480, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 26],
			DateTime: "1480-12-26 00:00:00",
			DateAber: "26 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Fri 26 Esf 1480",
			DateDoy: "1480.361",
			DateWoy: "1480W52-7",
			DateWithSlash: "1480/12/26",
			DateWithOutSlash: "14801226"
		},
		stime: 4171984200000,
		gdate: [2102, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 2, 17] },
		gtime: 4171984200000
	},
	{
		sdate: [1480, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 27],
			DateTime: "1480-12-27 00:00:00",
			DateAber: "27 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Sat 27 Esf 1480",
			DateDoy: "1480.362",
			DateWoy: "1481W01-1",
			DateWithSlash: "1480/12/27",
			DateWithOutSlash: "14801227"
		},
		stime: 4172070600000,
		gdate: [2102, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 2, 18] },
		gtime: 4172070600000
	},
	{
		sdate: [1480, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 28],
			DateTime: "1480-12-28 00:00:00",
			DateAber: "28 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Sun 28 Esf 1480",
			DateDoy: "1480.363",
			DateWoy: "1481W01-2",
			DateWithSlash: "1480/12/28",
			DateWithOutSlash: "14801228"
		},
		stime: 4172157000000,
		gdate: [2102, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 2, 19] },
		gtime: 4172157000000
	},
	{
		sdate: [1480, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 29],
			DateTime: "1480-12-29 00:00:00",
			DateAber: "29 Esf 1480",
			DateMonth: "Esf",
			DateYearMonth: "1480-Esf",
			DateYear: "1480",
			DateAberWithDate: "Mon 29 Esf 1480",
			DateDoy: "1480.364",
			DateWoy: "1481W01-3",
			DateWithSlash: "1480/12/29",
			DateWithOutSlash: "14801229"
		},
		stime: 4172243400000,
		gdate: [2102, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 2, 20] },
		gtime: 4172243400000
	},

	{
		sdate: [1500, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 1],
			DateTime: "1500-01-01 01:00:00",
			DateAber: "01 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Fri 01 Far 1500",
			DateDoy: "1500.000",
			DateWoy: "1499W52-7",
			DateWithSlash: "1500/01/01",
			DateWithOutSlash: "15000101"
		},
		stime: 4771945800000,
		gdate: [2121, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 21] },
		gtime: 4771945800000
	},
	{
		sdate: [1500, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 2],
			DateTime: "1500-01-02 00:00:00",
			DateAber: "02 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Sat 02 Far 1500",
			DateDoy: "1500.001",
			DateWoy: "1500W01-1",
			DateWithSlash: "1500/01/02",
			DateWithOutSlash: "15000102"
		},
		stime: 4772028600000,
		gdate: [2121, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 22] },
		gtime: 4772028600000
	},
	{
		sdate: [1500, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 3],
			DateTime: "1500-01-03 00:00:00",
			DateAber: "03 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Sun 03 Far 1500",
			DateDoy: "1500.002",
			DateWoy: "1500W01-2",
			DateWithSlash: "1500/01/03",
			DateWithOutSlash: "15000103"
		},
		stime: 4772115000000,
		gdate: [2121, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 23] },
		gtime: 4772115000000
	},
	{
		sdate: [1500, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 4],
			DateTime: "1500-01-04 00:00:00",
			DateAber: "04 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Mon 04 Far 1500",
			DateDoy: "1500.003",
			DateWoy: "1500W01-3",
			DateWithSlash: "1500/01/04",
			DateWithOutSlash: "15000104"
		},
		stime: 4772201400000,
		gdate: [2121, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 24] },
		gtime: 4772201400000
	},
	{
		sdate: [1500, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 5],
			DateTime: "1500-01-05 00:00:00",
			DateAber: "05 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Tue 05 Far 1500",
			DateDoy: "1500.004",
			DateWoy: "1500W01-4",
			DateWithSlash: "1500/01/05",
			DateWithOutSlash: "15000105"
		},
		stime: 4772287800000,
		gdate: [2121, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 25] },
		gtime: 4772287800000
	},
	{
		sdate: [1500, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 6],
			DateTime: "1500-01-06 00:00:00",
			DateAber: "06 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Wed 06 Far 1500",
			DateDoy: "1500.005",
			DateWoy: "1500W01-5",
			DateWithSlash: "1500/01/06",
			DateWithOutSlash: "15000106"
		},
		stime: 4772374200000,
		gdate: [2121, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 26] },
		gtime: 4772374200000
	},
	{
		sdate: [1500, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 7],
			DateTime: "1500-01-07 00:00:00",
			DateAber: "07 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Thu 07 Far 1500",
			DateDoy: "1500.006",
			DateWoy: "1500W01-6",
			DateWithSlash: "1500/01/07",
			DateWithOutSlash: "15000107"
		},
		stime: 4772460600000,
		gdate: [2121, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 27] },
		gtime: 4772460600000
	},
	{
		sdate: [1500, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 15],
			DateTime: "1500-01-15 00:00:00",
			DateAber: "15 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Fri 15 Far 1500",
			DateDoy: "1500.014",
			DateWoy: "1500W02-7",
			DateWithSlash: "1500/01/15",
			DateWithOutSlash: "15000115"
		},
		stime: 4773151800000,
		gdate: [2121, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 4] },
		gtime: 4773151800000
	},
	{
		sdate: [1500, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 29],
			DateTime: "1500-01-29 00:00:00",
			DateAber: "29 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Fri 29 Far 1500",
			DateDoy: "1500.028",
			DateWoy: "1500W04-7",
			DateWithSlash: "1500/01/29",
			DateWithOutSlash: "15000129"
		},
		stime: 4774361400000,
		gdate: [2121, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 18] },
		gtime: 4774361400000
	},
	{
		sdate: [1500, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 30],
			DateTime: "1500-01-30 00:00:00",
			DateAber: "30 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Sat 30 Far 1500",
			DateDoy: "1500.029",
			DateWoy: "1500W05-1",
			DateWithSlash: "1500/01/30",
			DateWithOutSlash: "15000130"
		},
		stime: 4774447800000,
		gdate: [2121, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 19] },
		gtime: 4774447800000
	},
	{
		sdate: [1500, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 31],
			DateTime: "1500-01-31 00:00:00",
			DateAber: "31 Far 1500",
			DateMonth: "Far",
			DateYearMonth: "1500-Far",
			DateYear: "1500",
			DateAberWithDate: "Sun 31 Far 1500",
			DateDoy: "1500.030",
			DateWoy: "1500W05-2",
			DateWithSlash: "1500/01/31",
			DateWithOutSlash: "15000131"
		},
		stime: 4774534200000,
		gdate: [2121, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 20] },
		gtime: 4774534200000
	},
	{
		sdate: [1500, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 1],
			DateTime: "1500-02-01 00:00:00",
			DateAber: "01 Ord 1500",
			DateMonth: "Ord",
			DateYearMonth: "1500-Ord",
			DateYear: "1500",
			DateAberWithDate: "Mon 01 Ord 1500",
			DateDoy: "1500.031",
			DateWoy: "1500W05-3",
			DateWithSlash: "1500/02/01",
			DateWithOutSlash: "15000201"
		},
		stime: 4774620600000,
		gdate: [2121, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 21] },
		gtime: 4774620600000
	},
	{
		sdate: [1500, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 2],
			DateTime: "1500-02-02 00:00:00",
			DateAber: "02 Ord 1500",
			DateMonth: "Ord",
			DateYearMonth: "1500-Ord",
			DateYear: "1500",
			DateAberWithDate: "Tue 02 Ord 1500",
			DateDoy: "1500.032",
			DateWoy: "1500W05-4",
			DateWithSlash: "1500/02/02",
			DateWithOutSlash: "15000202"
		},
		stime: 4774707000000,
		gdate: [2121, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 22] },
		gtime: 4774707000000
	},
	{
		sdate: [1500, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 15],
			DateTime: "1500-02-15 00:00:00",
			DateAber: "15 Ord 1500",
			DateMonth: "Ord",
			DateYearMonth: "1500-Ord",
			DateYear: "1500",
			DateAberWithDate: "Mon 15 Ord 1500",
			DateDoy: "1500.045",
			DateWoy: "1500W07-3",
			DateWithSlash: "1500/02/15",
			DateWithOutSlash: "15000215"
		},
		stime: 4775830200000,
		gdate: [2121, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 5] },
		gtime: 4775830200000
	},
	{
		sdate: [1500, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 30],
			DateTime: "1500-02-30 00:00:00",
			DateAber: "30 Ord 1500",
			DateMonth: "Ord",
			DateYearMonth: "1500-Ord",
			DateYear: "1500",
			DateAberWithDate: "Tue 30 Ord 1500",
			DateDoy: "1500.060",
			DateWoy: "1500W09-4",
			DateWithSlash: "1500/02/30",
			DateWithOutSlash: "15000230"
		},
		stime: 4777126200000,
		gdate: [2121, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 20] },
		gtime: 4777126200000
	},
	{
		sdate: [1500, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 31],
			DateTime: "1500-02-31 00:00:00",
			DateAber: "31 Ord 1500",
			DateMonth: "Ord",
			DateYearMonth: "1500-Ord",
			DateYear: "1500",
			DateAberWithDate: "Wed 31 Ord 1500",
			DateDoy: "1500.061",
			DateWoy: "1500W09-5",
			DateWithSlash: "1500/02/31",
			DateWithOutSlash: "15000231"
		},
		stime: 4777212600000,
		gdate: [2121, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 21] },
		gtime: 4777212600000
	},
	{
		sdate: [1500, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 1],
			DateTime: "1500-03-01 00:00:00",
			DateAber: "01 Kho 1500",
			DateMonth: "Kho",
			DateYearMonth: "1500-Kho",
			DateYear: "1500",
			DateAberWithDate: "Thu 01 Kho 1500",
			DateDoy: "1500.062",
			DateWoy: "1500W09-6",
			DateWithSlash: "1500/03/01",
			DateWithOutSlash: "15000301"
		},
		stime: 4777299000000,
		gdate: [2121, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 22] },
		gtime: 4777299000000
	},
	{
		sdate: [1500, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 2],
			DateTime: "1500-03-02 00:00:00",
			DateAber: "02 Kho 1500",
			DateMonth: "Kho",
			DateYearMonth: "1500-Kho",
			DateYear: "1500",
			DateAberWithDate: "Fri 02 Kho 1500",
			DateDoy: "1500.063",
			DateWoy: "1500W09-7",
			DateWithSlash: "1500/03/02",
			DateWithOutSlash: "15000302"
		},
		stime: 4777385400000,
		gdate: [2121, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 23] },
		gtime: 4777385400000
	},
	{
		sdate: [1500, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 15],
			DateTime: "1500-03-15 00:00:00",
			DateAber: "15 Kho 1500",
			DateMonth: "Kho",
			DateYearMonth: "1500-Kho",
			DateYear: "1500",
			DateAberWithDate: "Thu 15 Kho 1500",
			DateDoy: "1500.076",
			DateWoy: "1500W11-6",
			DateWithSlash: "1500/03/15",
			DateWithOutSlash: "15000315"
		},
		stime: 4778508600000,
		gdate: [2121, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 5] },
		gtime: 4778508600000
	},
	{
		sdate: [1500, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 30],
			DateTime: "1500-03-30 00:00:00",
			DateAber: "30 Kho 1500",
			DateMonth: "Kho",
			DateYearMonth: "1500-Kho",
			DateYear: "1500",
			DateAberWithDate: "Fri 30 Kho 1500",
			DateDoy: "1500.091",
			DateWoy: "1500W13-7",
			DateWithSlash: "1500/03/30",
			DateWithOutSlash: "15000330"
		},
		stime: 4779804600000,
		gdate: [2121, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 20] },
		gtime: 4779804600000
	},
	{
		sdate: [1500, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 31],
			DateTime: "1500-03-31 00:00:00",
			DateAber: "31 Kho 1500",
			DateMonth: "Kho",
			DateYearMonth: "1500-Kho",
			DateYear: "1500",
			DateAberWithDate: "Sat 31 Kho 1500",
			DateDoy: "1500.092",
			DateWoy: "1500W14-1",
			DateWithSlash: "1500/03/31",
			DateWithOutSlash: "15000331"
		},
		stime: 4779891000000,
		gdate: [2121, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 21] },
		gtime: 4779891000000
	},
	{
		sdate: [1500, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 1],
			DateTime: "1500-04-01 00:00:00",
			DateAber: "01 Tir 1500",
			DateMonth: "Tir",
			DateYearMonth: "1500-Tir",
			DateYear: "1500",
			DateAberWithDate: "Sun 01 Tir 1500",
			DateDoy: "1500.093",
			DateWoy: "1500W14-2",
			DateWithSlash: "1500/04/01",
			DateWithOutSlash: "15000401"
		},
		stime: 4779977400000,
		gdate: [2121, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 22] },
		gtime: 4779977400000
	},
	{
		sdate: [1500, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 2],
			DateTime: "1500-04-02 00:00:00",
			DateAber: "02 Tir 1500",
			DateMonth: "Tir",
			DateYearMonth: "1500-Tir",
			DateYear: "1500",
			DateAberWithDate: "Mon 02 Tir 1500",
			DateDoy: "1500.094",
			DateWoy: "1500W14-3",
			DateWithSlash: "1500/04/02",
			DateWithOutSlash: "15000402"
		},
		stime: 4780063800000,
		gdate: [2121, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 23] },
		gtime: 4780063800000
	},
	{
		sdate: [1500, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 15],
			DateTime: "1500-04-15 00:00:00",
			DateAber: "15 Tir 1500",
			DateMonth: "Tir",
			DateYearMonth: "1500-Tir",
			DateYear: "1500",
			DateAberWithDate: "Sun 15 Tir 1500",
			DateDoy: "1500.107",
			DateWoy: "1500W16-2",
			DateWithSlash: "1500/04/15",
			DateWithOutSlash: "15000415"
		},
		stime: 4781187000000,
		gdate: [2121, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 6] },
		gtime: 4781187000000
	},
	{
		sdate: [1500, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 30],
			DateTime: "1500-04-30 00:00:00",
			DateAber: "30 Tir 1500",
			DateMonth: "Tir",
			DateYearMonth: "1500-Tir",
			DateYear: "1500",
			DateAberWithDate: "Mon 30 Tir 1500",
			DateDoy: "1500.122",
			DateWoy: "1500W18-3",
			DateWithSlash: "1500/04/30",
			DateWithOutSlash: "15000430"
		},
		stime: 4782483000000,
		gdate: [2121, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 21] },
		gtime: 4782483000000
	},
	{
		sdate: [1500, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 31],
			DateTime: "1500-04-31 00:00:00",
			DateAber: "31 Tir 1500",
			DateMonth: "Tir",
			DateYearMonth: "1500-Tir",
			DateYear: "1500",
			DateAberWithDate: "Tue 31 Tir 1500",
			DateDoy: "1500.123",
			DateWoy: "1500W18-4",
			DateWithSlash: "1500/04/31",
			DateWithOutSlash: "15000431"
		},
		stime: 4782569400000,
		gdate: [2121, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 22] },
		gtime: 4782569400000
	},
	{
		sdate: [1500, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 1],
			DateTime: "1500-05-01 00:00:00",
			DateAber: "01 Amo 1500",
			DateMonth: "Amo",
			DateYearMonth: "1500-Amo",
			DateYear: "1500",
			DateAberWithDate: "Wed 01 Amo 1500",
			DateDoy: "1500.124",
			DateWoy: "1500W18-5",
			DateWithSlash: "1500/05/01",
			DateWithOutSlash: "15000501"
		},
		stime: 4782655800000,
		gdate: [2121, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 23] },
		gtime: 4782655800000
	},
	{
		sdate: [1500, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 2],
			DateTime: "1500-05-02 00:00:00",
			DateAber: "02 Amo 1500",
			DateMonth: "Amo",
			DateYearMonth: "1500-Amo",
			DateYear: "1500",
			DateAberWithDate: "Thu 02 Amo 1500",
			DateDoy: "1500.125",
			DateWoy: "1500W18-6",
			DateWithSlash: "1500/05/02",
			DateWithOutSlash: "15000502"
		},
		stime: 4782742200000,
		gdate: [2121, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 24] },
		gtime: 4782742200000
	},
	{
		sdate: [1500, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 15],
			DateTime: "1500-05-15 00:00:00",
			DateAber: "15 Amo 1500",
			DateMonth: "Amo",
			DateYearMonth: "1500-Amo",
			DateYear: "1500",
			DateAberWithDate: "Wed 15 Amo 1500",
			DateDoy: "1500.138",
			DateWoy: "1500W20-5",
			DateWithSlash: "1500/05/15",
			DateWithOutSlash: "15000515"
		},
		stime: 4783865400000,
		gdate: [2121, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 6] },
		gtime: 4783865400000
	},
	{
		sdate: [1500, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 30],
			DateTime: "1500-05-30 00:00:00",
			DateAber: "30 Amo 1500",
			DateMonth: "Amo",
			DateYearMonth: "1500-Amo",
			DateYear: "1500",
			DateAberWithDate: "Thu 30 Amo 1500",
			DateDoy: "1500.153",
			DateWoy: "1500W22-6",
			DateWithSlash: "1500/05/30",
			DateWithOutSlash: "15000530"
		},
		stime: 4785161400000,
		gdate: [2121, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 21] },
		gtime: 4785161400000
	},
	{
		sdate: [1500, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 31],
			DateTime: "1500-05-31 00:00:00",
			DateAber: "31 Amo 1500",
			DateMonth: "Amo",
			DateYearMonth: "1500-Amo",
			DateYear: "1500",
			DateAberWithDate: "Fri 31 Amo 1500",
			DateDoy: "1500.154",
			DateWoy: "1500W22-7",
			DateWithSlash: "1500/05/31",
			DateWithOutSlash: "15000531"
		},
		stime: 4785247800000,
		gdate: [2121, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 22] },
		gtime: 4785247800000
	},
	{
		sdate: [1500, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 1],
			DateTime: "1500-06-01 00:00:00",
			DateAber: "01 Sha 1500",
			DateMonth: "Sha",
			DateYearMonth: "1500-Sha",
			DateYear: "1500",
			DateAberWithDate: "Sat 01 Sha 1500",
			DateDoy: "1500.155",
			DateWoy: "1500W23-1",
			DateWithSlash: "1500/06/01",
			DateWithOutSlash: "15000601"
		},
		stime: 4785334200000,
		gdate: [2121, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 23] },
		gtime: 4785334200000
	},
	{
		sdate: [1500, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 2],
			DateTime: "1500-06-02 00:00:00",
			DateAber: "02 Sha 1500",
			DateMonth: "Sha",
			DateYearMonth: "1500-Sha",
			DateYear: "1500",
			DateAberWithDate: "Sun 02 Sha 1500",
			DateDoy: "1500.156",
			DateWoy: "1500W23-2",
			DateWithSlash: "1500/06/02",
			DateWithOutSlash: "15000602"
		},
		stime: 4785420600000,
		gdate: [2121, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 24] },
		gtime: 4785420600000
	},
	{
		sdate: [1500, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 15],
			DateTime: "1500-06-15 00:00:00",
			DateAber: "15 Sha 1500",
			DateMonth: "Sha",
			DateYearMonth: "1500-Sha",
			DateYear: "1500",
			DateAberWithDate: "Sat 15 Sha 1500",
			DateDoy: "1500.169",
			DateWoy: "1500W25-1",
			DateWithSlash: "1500/06/15",
			DateWithOutSlash: "15000615"
		},
		stime: 4786543800000,
		gdate: [2121, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 8, 6] },
		gtime: 4786543800000
	},
	{
		sdate: [1500, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 29],
			DateTime: "1500-06-29 00:00:00",
			DateAber: "29 Sha 1500",
			DateMonth: "Sha",
			DateYearMonth: "1500-Sha",
			DateYear: "1500",
			DateAberWithDate: "Sat 29 Sha 1500",
			DateDoy: "1500.183",
			DateWoy: "1500W27-1",
			DateWithSlash: "1500/06/29",
			DateWithOutSlash: "15000629"
		},
		stime: 4787753400000,
		gdate: [2121, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 8, 20] },
		gtime: 4787753400000
	},
	{
		sdate: [1500, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 30],
			DateTime: "1500-06-30 00:00:00",
			DateAber: "30 Sha 1500",
			DateMonth: "Sha",
			DateYearMonth: "1500-Sha",
			DateYear: "1500",
			DateAberWithDate: "Sun 30 Sha 1500",
			DateDoy: "1500.184",
			DateWoy: "1500W27-2",
			DateWithSlash: "1500/06/30",
			DateWithOutSlash: "15000630"
		},
		stime: 4787843400000,
		gdate: [2121, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 8, 21] },
		gtime: 4787843400000
	},
	{
		sdate: [1500, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 1],
			DateTime: "1500-07-01 00:00:00",
			DateAber: "01 Meh 1500",
			DateMonth: "Meh",
			DateYearMonth: "1500-Meh",
			DateYear: "1500",
			DateAberWithDate: "Tue 01 Meh 1500",
			DateDoy: "1500.186",
			DateWoy: "1500W27-4",
			DateWithSlash: "1500/07/01",
			DateWithOutSlash: "15000701"
		},
		stime: 4788016200000,
		gdate: [2121, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 8, 23] },
		gtime: 4788016200000
	},
	{
		sdate: [1500, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 2],
			DateTime: "1500-07-02 00:00:00",
			DateAber: "02 Meh 1500",
			DateMonth: "Meh",
			DateYearMonth: "1500-Meh",
			DateYear: "1500",
			DateAberWithDate: "Wed 02 Meh 1500",
			DateDoy: "1500.187",
			DateWoy: "1500W27-5",
			DateWithSlash: "1500/07/02",
			DateWithOutSlash: "15000702"
		},
		stime: 4788102600000,
		gdate: [2121, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 8, 24] },
		gtime: 4788102600000
	},
	{
		sdate: [1500, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 15],
			DateTime: "1500-07-15 00:00:00",
			DateAber: "15 Meh 1500",
			DateMonth: "Meh",
			DateYearMonth: "1500-Meh",
			DateYear: "1500",
			DateAberWithDate: "Tue 15 Meh 1500",
			DateDoy: "1500.200",
			DateWoy: "1500W29-4",
			DateWithSlash: "1500/07/15",
			DateWithOutSlash: "15000715"
		},
		stime: 4789225800000,
		gdate: [2121, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 9, 7] },
		gtime: 4789225800000
	},
	{
		sdate: [1500, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 29],
			DateTime: "1500-07-29 00:00:00",
			DateAber: "29 Meh 1500",
			DateMonth: "Meh",
			DateYearMonth: "1500-Meh",
			DateYear: "1500",
			DateAberWithDate: "Tue 29 Meh 1500",
			DateDoy: "1500.214",
			DateWoy: "1500W31-4",
			DateWithSlash: "1500/07/29",
			DateWithOutSlash: "15000729"
		},
		stime: 4790435400000,
		gdate: [2121, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 9, 21] },
		gtime: 4790435400000
	},
	{
		sdate: [1500, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 30],
			DateTime: "1500-07-30 00:00:00",
			DateAber: "30 Meh 1500",
			DateMonth: "Meh",
			DateYearMonth: "1500-Meh",
			DateYear: "1500",
			DateAberWithDate: "Wed 30 Meh 1500",
			DateDoy: "1500.215",
			DateWoy: "1500W31-5",
			DateWithSlash: "1500/07/30",
			DateWithOutSlash: "15000730"
		},
		stime: 4790521800000,
		gdate: [2121, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 9, 22] },
		gtime: 4790521800000
	},
	{
		sdate: [1500, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 1],
			DateTime: "1500-08-01 00:00:00",
			DateAber: "01 Aba 1500",
			DateMonth: "Aba",
			DateYearMonth: "1500-Aba",
			DateYear: "1500",
			DateAberWithDate: "Thu 01 Aba 1500",
			DateDoy: "1500.216",
			DateWoy: "1500W31-6",
			DateWithSlash: "1500/08/01",
			DateWithOutSlash: "15000801"
		},
		stime: 4790608200000,
		gdate: [2121, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 9, 23] },
		gtime: 4790608200000
	},
	{
		sdate: [1500, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 2],
			DateTime: "1500-08-02 00:00:00",
			DateAber: "02 Aba 1500",
			DateMonth: "Aba",
			DateYearMonth: "1500-Aba",
			DateYear: "1500",
			DateAberWithDate: "Fri 02 Aba 1500",
			DateDoy: "1500.217",
			DateWoy: "1500W31-7",
			DateWithSlash: "1500/08/02",
			DateWithOutSlash: "15000802"
		},
		stime: 4790694600000,
		gdate: [2121, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 9, 24] },
		gtime: 4790694600000
	},
	{
		sdate: [1500, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 15],
			DateTime: "1500-08-15 00:00:00",
			DateAber: "15 Aba 1500",
			DateMonth: "Aba",
			DateYearMonth: "1500-Aba",
			DateYear: "1500",
			DateAberWithDate: "Thu 15 Aba 1500",
			DateDoy: "1500.230",
			DateWoy: "1500W33-6",
			DateWithSlash: "1500/08/15",
			DateWithOutSlash: "15000815"
		},
		stime: 4791817800000,
		gdate: [2121, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 10, 6] },
		gtime: 4791817800000
	},
	{
		sdate: [1500, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 29],
			DateTime: "1500-08-29 00:00:00",
			DateAber: "29 Aba 1500",
			DateMonth: "Aba",
			DateYearMonth: "1500-Aba",
			DateYear: "1500",
			DateAberWithDate: "Thu 29 Aba 1500",
			DateDoy: "1500.244",
			DateWoy: "1500W35-6",
			DateWithSlash: "1500/08/29",
			DateWithOutSlash: "15000829"
		},
		stime: 4793027400000,
		gdate: [2121, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 10, 20] },
		gtime: 4793027400000
	},
	{
		sdate: [1500, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 30],
			DateTime: "1500-08-30 00:00:00",
			DateAber: "30 Aba 1500",
			DateMonth: "Aba",
			DateYearMonth: "1500-Aba",
			DateYear: "1500",
			DateAberWithDate: "Fri 30 Aba 1500",
			DateDoy: "1500.245",
			DateWoy: "1500W35-7",
			DateWithSlash: "1500/08/30",
			DateWithOutSlash: "15000830"
		},
		stime: 4793113800000,
		gdate: [2121, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 10, 21] },
		gtime: 4793113800000
	},
	{
		sdate: [1500, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 1],
			DateTime: "1500-09-01 00:00:00",
			DateAber: "01 Aza 1500",
			DateMonth: "Aza",
			DateYearMonth: "1500-Aza",
			DateYear: "1500",
			DateAberWithDate: "Sat 01 Aza 1500",
			DateDoy: "1500.246",
			DateWoy: "1500W36-1",
			DateWithSlash: "1500/09/01",
			DateWithOutSlash: "15000901"
		},
		stime: 4793200200000,
		gdate: [2121, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 10, 22] },
		gtime: 4793200200000
	},
	{
		sdate: [1500, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 2],
			DateTime: "1500-09-02 00:00:00",
			DateAber: "02 Aza 1500",
			DateMonth: "Aza",
			DateYearMonth: "1500-Aza",
			DateYear: "1500",
			DateAberWithDate: "Sun 02 Aza 1500",
			DateDoy: "1500.247",
			DateWoy: "1500W36-2",
			DateWithSlash: "1500/09/02",
			DateWithOutSlash: "15000902"
		},
		stime: 4793286600000,
		gdate: [2121, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 10, 23] },
		gtime: 4793286600000
	},
	{
		sdate: [1500, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 15],
			DateTime: "1500-09-15 00:00:00",
			DateAber: "15 Aza 1500",
			DateMonth: "Aza",
			DateYearMonth: "1500-Aza",
			DateYear: "1500",
			DateAberWithDate: "Sat 15 Aza 1500",
			DateDoy: "1500.260",
			DateWoy: "1500W38-1",
			DateWithSlash: "1500/09/15",
			DateWithOutSlash: "15000915"
		},
		stime: 4794409800000,
		gdate: [2121, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 11, 6] },
		gtime: 4794409800000
	},
	{
		sdate: [1500, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 29],
			DateTime: "1500-09-29 00:00:00",
			DateAber: "29 Aza 1500",
			DateMonth: "Aza",
			DateYearMonth: "1500-Aza",
			DateYear: "1500",
			DateAberWithDate: "Sat 29 Aza 1500",
			DateDoy: "1500.274",
			DateWoy: "1500W40-1",
			DateWithSlash: "1500/09/29",
			DateWithOutSlash: "15000929"
		},
		stime: 4795619400000,
		gdate: [2121, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 11, 20] },
		gtime: 4795619400000
	},
	{
		sdate: [1500, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 30],
			DateTime: "1500-09-30 00:00:00",
			DateAber: "30 Aza 1500",
			DateMonth: "Aza",
			DateYearMonth: "1500-Aza",
			DateYear: "1500",
			DateAberWithDate: "Sun 30 Aza 1500",
			DateDoy: "1500.275",
			DateWoy: "1500W40-2",
			DateWithSlash: "1500/09/30",
			DateWithOutSlash: "15000930"
		},
		stime: 4795705800000,
		gdate: [2121, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 11, 21] },
		gtime: 4795705800000
	},
	{
		sdate: [1500, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 1],
			DateTime: "1500-10-01 00:00:00",
			DateAber: "01 Dey 1500",
			DateMonth: "Dey",
			DateYearMonth: "1500-Dey",
			DateYear: "1500",
			DateAberWithDate: "Mon 01 Dey 1500",
			DateDoy: "1500.276",
			DateWoy: "1500W40-3",
			DateWithSlash: "1500/10/01",
			DateWithOutSlash: "15001001"
		},
		stime: 4795792200000,
		gdate: [2121, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 11, 22] },
		gtime: 4795792200000
	},
	{
		sdate: [1500, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 2],
			DateTime: "1500-10-02 00:00:00",
			DateAber: "02 Dey 1500",
			DateMonth: "Dey",
			DateYearMonth: "1500-Dey",
			DateYear: "1500",
			DateAberWithDate: "Tue 02 Dey 1500",
			DateDoy: "1500.277",
			DateWoy: "1500W40-4",
			DateWithSlash: "1500/10/02",
			DateWithOutSlash: "15001002"
		},
		stime: 4795878600000,
		gdate: [2121, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 11, 23] },
		gtime: 4795878600000
	},
	{
		sdate: [1500, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 15],
			DateTime: "1500-10-15 00:00:00",
			DateAber: "15 Dey 1500",
			DateMonth: "Dey",
			DateYearMonth: "1500-Dey",
			DateYear: "1500",
			DateAberWithDate: "Mon 15 Dey 1500",
			DateDoy: "1500.290",
			DateWoy: "1500W42-3",
			DateWithSlash: "1500/10/15",
			DateWithOutSlash: "15001015"
		},
		stime: 4797001800000,
		gdate: [2122, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 0, 5] },
		gtime: 4797001800000
	},
	{
		sdate: [1500, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 29],
			DateTime: "1500-10-29 00:00:00",
			DateAber: "29 Dey 1500",
			DateMonth: "Dey",
			DateYearMonth: "1500-Dey",
			DateYear: "1500",
			DateAberWithDate: "Mon 29 Dey 1500",
			DateDoy: "1500.304",
			DateWoy: "1500W44-3",
			DateWithSlash: "1500/10/29",
			DateWithOutSlash: "15001029"
		},
		stime: 4798211400000,
		gdate: [2122, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 0, 19] },
		gtime: 4798211400000
	},
	{
		sdate: [1500, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 30],
			DateTime: "1500-10-30 00:00:00",
			DateAber: "30 Dey 1500",
			DateMonth: "Dey",
			DateYearMonth: "1500-Dey",
			DateYear: "1500",
			DateAberWithDate: "Tue 30 Dey 1500",
			DateDoy: "1500.305",
			DateWoy: "1500W44-4",
			DateWithSlash: "1500/10/30",
			DateWithOutSlash: "15001030"
		},
		stime: 4798297800000,
		gdate: [2122, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 0, 20] },
		gtime: 4798297800000
	},
	{
		sdate: [1500, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 1],
			DateTime: "1500-11-01 00:00:00",
			DateAber: "01 Bah 1500",
			DateMonth: "Bah",
			DateYearMonth: "1500-Bah",
			DateYear: "1500",
			DateAberWithDate: "Wed 01 Bah 1500",
			DateDoy: "1500.306",
			DateWoy: "1500W44-5",
			DateWithSlash: "1500/11/01",
			DateWithOutSlash: "15001101"
		},
		stime: 4798384200000,
		gdate: [2122, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 0, 21] },
		gtime: 4798384200000
	},
	{
		sdate: [1500, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 2],
			DateTime: "1500-11-02 00:00:00",
			DateAber: "02 Bah 1500",
			DateMonth: "Bah",
			DateYearMonth: "1500-Bah",
			DateYear: "1500",
			DateAberWithDate: "Thu 02 Bah 1500",
			DateDoy: "1500.307",
			DateWoy: "1500W44-6",
			DateWithSlash: "1500/11/02",
			DateWithOutSlash: "15001102"
		},
		stime: 4798470600000,
		gdate: [2122, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 0, 22] },
		gtime: 4798470600000
	},
	{
		sdate: [1500, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 15],
			DateTime: "1500-11-15 00:00:00",
			DateAber: "15 Bah 1500",
			DateMonth: "Bah",
			DateYearMonth: "1500-Bah",
			DateYear: "1500",
			DateAberWithDate: "Wed 15 Bah 1500",
			DateDoy: "1500.320",
			DateWoy: "1500W46-5",
			DateWithSlash: "1500/11/15",
			DateWithOutSlash: "15001115"
		},
		stime: 4799593800000,
		gdate: [2122, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 1, 4] },
		gtime: 4799593800000
	},
	{
		sdate: [1500, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 29],
			DateTime: "1500-11-29 00:00:00",
			DateAber: "29 Bah 1500",
			DateMonth: "Bah",
			DateYearMonth: "1500-Bah",
			DateYear: "1500",
			DateAberWithDate: "Wed 29 Bah 1500",
			DateDoy: "1500.334",
			DateWoy: "1500W48-5",
			DateWithSlash: "1500/11/29",
			DateWithOutSlash: "15001129"
		},
		stime: 4800803400000,
		gdate: [2122, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 1, 18] },
		gtime: 4800803400000
	},
	{
		sdate: [1500, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 30],
			DateTime: "1500-11-30 00:00:00",
			DateAber: "30 Bah 1500",
			DateMonth: "Bah",
			DateYearMonth: "1500-Bah",
			DateYear: "1500",
			DateAberWithDate: "Thu 30 Bah 1500",
			DateDoy: "1500.335",
			DateWoy: "1500W48-6",
			DateWithSlash: "1500/11/30",
			DateWithOutSlash: "15001130"
		},
		stime: 4800889800000,
		gdate: [2122, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 1, 19] },
		gtime: 4800889800000
	},
	{
		sdate: [1500, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 1],
			DateTime: "1500-12-01 00:00:00",
			DateAber: "01 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Fri 01 Esf 1500",
			DateDoy: "1500.336",
			DateWoy: "1500W48-7",
			DateWithSlash: "1500/12/01",
			DateWithOutSlash: "15001201"
		},
		stime: 4800976200000,
		gdate: [2122, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 1, 20] },
		gtime: 4800976200000
	},
	{
		sdate: [1500, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 2],
			DateTime: "1500-12-02 00:00:00",
			DateAber: "02 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Sat 02 Esf 1500",
			DateDoy: "1500.337",
			DateWoy: "1500W49-1",
			DateWithSlash: "1500/12/02",
			DateWithOutSlash: "15001202"
		},
		stime: 4801062600000,
		gdate: [2122, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 1, 21] },
		gtime: 4801062600000
	},
	{
		sdate: [1500, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 3],
			DateTime: "1500-12-03 00:00:00",
			DateAber: "03 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Sun 03 Esf 1500",
			DateDoy: "1500.338",
			DateWoy: "1500W49-2",
			DateWithSlash: "1500/12/03",
			DateWithOutSlash: "15001203"
		},
		stime: 4801149000000,
		gdate: [2122, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 1, 22] },
		gtime: 4801149000000
	},
	{
		sdate: [1500, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 4],
			DateTime: "1500-12-04 00:00:00",
			DateAber: "04 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Mon 04 Esf 1500",
			DateDoy: "1500.339",
			DateWoy: "1500W49-3",
			DateWithSlash: "1500/12/04",
			DateWithOutSlash: "15001204"
		},
		stime: 4801235400000,
		gdate: [2122, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 1, 23] },
		gtime: 4801235400000
	},
	{
		sdate: [1500, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 15],
			DateTime: "1500-12-15 00:00:00",
			DateAber: "15 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Fri 15 Esf 1500",
			DateDoy: "1500.350",
			DateWoy: "1500W50-7",
			DateWithSlash: "1500/12/15",
			DateWithOutSlash: "15001215"
		},
		stime: 4802185800000,
		gdate: [2122, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 2, 6] },
		gtime: 4802185800000
	},
	{
		sdate: [1500, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 25],
			DateTime: "1500-12-25 00:00:00",
			DateAber: "25 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Mon 25 Esf 1500",
			DateDoy: "1500.360",
			DateWoy: "1500W52-3",
			DateWithSlash: "1500/12/25",
			DateWithOutSlash: "15001225"
		},
		stime: 4803049800000,
		gdate: [2122, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 2, 16] },
		gtime: 4803049800000
	},
	{
		sdate: [1500, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 26],
			DateTime: "1500-12-26 00:00:00",
			DateAber: "26 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Tue 26 Esf 1500",
			DateDoy: "1500.361",
			DateWoy: "1500W52-4",
			DateWithSlash: "1500/12/26",
			DateWithOutSlash: "15001226"
		},
		stime: 4803136200000,
		gdate: [2122, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 2, 17] },
		gtime: 4803136200000
	},
	{
		sdate: [1500, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 27],
			DateTime: "1500-12-27 00:00:00",
			DateAber: "27 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Wed 27 Esf 1500",
			DateDoy: "1500.362",
			DateWoy: "1500W52-5",
			DateWithSlash: "1500/12/27",
			DateWithOutSlash: "15001227"
		},
		stime: 4803222600000,
		gdate: [2122, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 2, 18] },
		gtime: 4803222600000
	},
	{
		sdate: [1500, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 28],
			DateTime: "1500-12-28 00:00:00",
			DateAber: "28 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Thu 28 Esf 1500",
			DateDoy: "1500.363",
			DateWoy: "1500W52-6",
			DateWithSlash: "1500/12/28",
			DateWithOutSlash: "15001228"
		},
		stime: 4803309000000,
		gdate: [2122, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 2, 19] },
		gtime: 4803309000000
	},
	{
		sdate: [1500, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 29],
			DateTime: "1500-12-29 00:00:00",
			DateAber: "29 Esf 1500",
			DateMonth: "Esf",
			DateYearMonth: "1500-Esf",
			DateYear: "1500",
			DateAberWithDate: "Fri 29 Esf 1500",
			DateDoy: "1500.364",
			DateWoy: "1500W52-7",
			DateWithSlash: "1500/12/29",
			DateWithOutSlash: "15001229"
		},
		stime: 4803395400000,
		gdate: [2122, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 2, 20] },
		gtime: 4803395400000
	},

	{
		sdate: [1520, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 1],
			DateTime: "1520-01-01 01:00:00",
			DateAber: "01 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Tue 01 Far 1520",
			DateDoy: "1520.000",
			DateWoy: "1520W01-4",
			DateWithSlash: "1520/01/01",
			DateWithOutSlash: "15200101"
		},
		stime: 5403097800000,
		gdate: [2141, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 21] },
		gtime: 5403097800000
	},
	{
		sdate: [1520, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 2],
			DateTime: "1520-01-02 00:00:00",
			DateAber: "02 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Wed 02 Far 1520",
			DateDoy: "1520.001",
			DateWoy: "1520W01-5",
			DateWithSlash: "1520/01/02",
			DateWithOutSlash: "15200102"
		},
		stime: 5403180600000,
		gdate: [2141, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 22] },
		gtime: 5403180600000
	},
	{
		sdate: [1520, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 3],
			DateTime: "1520-01-03 00:00:00",
			DateAber: "03 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Thu 03 Far 1520",
			DateDoy: "1520.002",
			DateWoy: "1520W01-6",
			DateWithSlash: "1520/01/03",
			DateWithOutSlash: "15200103"
		},
		stime: 5403267000000,
		gdate: [2141, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 23] },
		gtime: 5403267000000
	},
	{
		sdate: [1520, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 4],
			DateTime: "1520-01-04 00:00:00",
			DateAber: "04 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Fri 04 Far 1520",
			DateDoy: "1520.003",
			DateWoy: "1520W01-7",
			DateWithSlash: "1520/01/04",
			DateWithOutSlash: "15200104"
		},
		stime: 5403353400000,
		gdate: [2141, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 24] },
		gtime: 5403353400000
	},
	{
		sdate: [1520, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 5],
			DateTime: "1520-01-05 00:00:00",
			DateAber: "05 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Sat 05 Far 1520",
			DateDoy: "1520.004",
			DateWoy: "1520W02-1",
			DateWithSlash: "1520/01/05",
			DateWithOutSlash: "15200105"
		},
		stime: 5403439800000,
		gdate: [2141, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 25] },
		gtime: 5403439800000
	},
	{
		sdate: [1520, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 6],
			DateTime: "1520-01-06 00:00:00",
			DateAber: "06 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Sun 06 Far 1520",
			DateDoy: "1520.005",
			DateWoy: "1520W02-2",
			DateWithSlash: "1520/01/06",
			DateWithOutSlash: "15200106"
		},
		stime: 5403526200000,
		gdate: [2141, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 26] },
		gtime: 5403526200000
	},
	{
		sdate: [1520, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 7],
			DateTime: "1520-01-07 00:00:00",
			DateAber: "07 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Mon 07 Far 1520",
			DateDoy: "1520.006",
			DateWoy: "1520W02-3",
			DateWithSlash: "1520/01/07",
			DateWithOutSlash: "15200107"
		},
		stime: 5403612600000,
		gdate: [2141, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 27] },
		gtime: 5403612600000
	},
	{
		sdate: [1520, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 15],
			DateTime: "1520-01-15 00:00:00",
			DateAber: "15 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Tue 15 Far 1520",
			DateDoy: "1520.014",
			DateWoy: "1520W03-4",
			DateWithSlash: "1520/01/15",
			DateWithOutSlash: "15200115"
		},
		stime: 5404303800000,
		gdate: [2141, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 4] },
		gtime: 5404303800000
	},
	{
		sdate: [1520, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 29],
			DateTime: "1520-01-29 00:00:00",
			DateAber: "29 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Tue 29 Far 1520",
			DateDoy: "1520.028",
			DateWoy: "1520W05-4",
			DateWithSlash: "1520/01/29",
			DateWithOutSlash: "15200129"
		},
		stime: 5405513400000,
		gdate: [2141, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 18] },
		gtime: 5405513400000
	},
	{
		sdate: [1520, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 30],
			DateTime: "1520-01-30 00:00:00",
			DateAber: "30 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Wed 30 Far 1520",
			DateDoy: "1520.029",
			DateWoy: "1520W05-5",
			DateWithSlash: "1520/01/30",
			DateWithOutSlash: "15200130"
		},
		stime: 5405599800000,
		gdate: [2141, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 19] },
		gtime: 5405599800000
	},
	{
		sdate: [1520, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 31],
			DateTime: "1520-01-31 00:00:00",
			DateAber: "31 Far 1520",
			DateMonth: "Far",
			DateYearMonth: "1520-Far",
			DateYear: "1520",
			DateAberWithDate: "Thu 31 Far 1520",
			DateDoy: "1520.030",
			DateWoy: "1520W05-6",
			DateWithSlash: "1520/01/31",
			DateWithOutSlash: "15200131"
		},
		stime: 5405686200000,
		gdate: [2141, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 20] },
		gtime: 5405686200000
	},
	{
		sdate: [1520, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 1],
			DateTime: "1520-02-01 00:00:00",
			DateAber: "01 Ord 1520",
			DateMonth: "Ord",
			DateYearMonth: "1520-Ord",
			DateYear: "1520",
			DateAberWithDate: "Fri 01 Ord 1520",
			DateDoy: "1520.031",
			DateWoy: "1520W05-7",
			DateWithSlash: "1520/02/01",
			DateWithOutSlash: "15200201"
		},
		stime: 5405772600000,
		gdate: [2141, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 21] },
		gtime: 5405772600000
	},
	{
		sdate: [1520, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 2],
			DateTime: "1520-02-02 00:00:00",
			DateAber: "02 Ord 1520",
			DateMonth: "Ord",
			DateYearMonth: "1520-Ord",
			DateYear: "1520",
			DateAberWithDate: "Sat 02 Ord 1520",
			DateDoy: "1520.032",
			DateWoy: "1520W06-1",
			DateWithSlash: "1520/02/02",
			DateWithOutSlash: "15200202"
		},
		stime: 5405859000000,
		gdate: [2141, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 22] },
		gtime: 5405859000000
	},
	{
		sdate: [1520, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 15],
			DateTime: "1520-02-15 00:00:00",
			DateAber: "15 Ord 1520",
			DateMonth: "Ord",
			DateYearMonth: "1520-Ord",
			DateYear: "1520",
			DateAberWithDate: "Fri 15 Ord 1520",
			DateDoy: "1520.045",
			DateWoy: "1520W07-7",
			DateWithSlash: "1520/02/15",
			DateWithOutSlash: "15200215"
		},
		stime: 5406982200000,
		gdate: [2141, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 5] },
		gtime: 5406982200000
	},
	{
		sdate: [1520, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 30],
			DateTime: "1520-02-30 00:00:00",
			DateAber: "30 Ord 1520",
			DateMonth: "Ord",
			DateYearMonth: "1520-Ord",
			DateYear: "1520",
			DateAberWithDate: "Sat 30 Ord 1520",
			DateDoy: "1520.060",
			DateWoy: "1520W10-1",
			DateWithSlash: "1520/02/30",
			DateWithOutSlash: "15200230"
		},
		stime: 5408278200000,
		gdate: [2141, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 20] },
		gtime: 5408278200000
	},
	{
		sdate: [1520, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 31],
			DateTime: "1520-02-31 00:00:00",
			DateAber: "31 Ord 1520",
			DateMonth: "Ord",
			DateYearMonth: "1520-Ord",
			DateYear: "1520",
			DateAberWithDate: "Sun 31 Ord 1520",
			DateDoy: "1520.061",
			DateWoy: "1520W10-2",
			DateWithSlash: "1520/02/31",
			DateWithOutSlash: "15200231"
		},
		stime: 5408364600000,
		gdate: [2141, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 21] },
		gtime: 5408364600000
	},
	{
		sdate: [1520, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 1],
			DateTime: "1520-03-01 00:00:00",
			DateAber: "01 Kho 1520",
			DateMonth: "Kho",
			DateYearMonth: "1520-Kho",
			DateYear: "1520",
			DateAberWithDate: "Mon 01 Kho 1520",
			DateDoy: "1520.062",
			DateWoy: "1520W10-3",
			DateWithSlash: "1520/03/01",
			DateWithOutSlash: "15200301"
		},
		stime: 5408451000000,
		gdate: [2141, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 22] },
		gtime: 5408451000000
	},
	{
		sdate: [1520, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 2],
			DateTime: "1520-03-02 00:00:00",
			DateAber: "02 Kho 1520",
			DateMonth: "Kho",
			DateYearMonth: "1520-Kho",
			DateYear: "1520",
			DateAberWithDate: "Tue 02 Kho 1520",
			DateDoy: "1520.063",
			DateWoy: "1520W10-4",
			DateWithSlash: "1520/03/02",
			DateWithOutSlash: "15200302"
		},
		stime: 5408537400000,
		gdate: [2141, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 23] },
		gtime: 5408537400000
	},
	{
		sdate: [1520, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 15],
			DateTime: "1520-03-15 00:00:00",
			DateAber: "15 Kho 1520",
			DateMonth: "Kho",
			DateYearMonth: "1520-Kho",
			DateYear: "1520",
			DateAberWithDate: "Mon 15 Kho 1520",
			DateDoy: "1520.076",
			DateWoy: "1520W12-3",
			DateWithSlash: "1520/03/15",
			DateWithOutSlash: "15200315"
		},
		stime: 5409660600000,
		gdate: [2141, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 5] },
		gtime: 5409660600000
	},
	{
		sdate: [1520, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 30],
			DateTime: "1520-03-30 00:00:00",
			DateAber: "30 Kho 1520",
			DateMonth: "Kho",
			DateYearMonth: "1520-Kho",
			DateYear: "1520",
			DateAberWithDate: "Tue 30 Kho 1520",
			DateDoy: "1520.091",
			DateWoy: "1520W14-4",
			DateWithSlash: "1520/03/30",
			DateWithOutSlash: "15200330"
		},
		stime: 5410956600000,
		gdate: [2141, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 20] },
		gtime: 5410956600000
	},
	{
		sdate: [1520, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 31],
			DateTime: "1520-03-31 00:00:00",
			DateAber: "31 Kho 1520",
			DateMonth: "Kho",
			DateYearMonth: "1520-Kho",
			DateYear: "1520",
			DateAberWithDate: "Wed 31 Kho 1520",
			DateDoy: "1520.092",
			DateWoy: "1520W14-5",
			DateWithSlash: "1520/03/31",
			DateWithOutSlash: "15200331"
		},
		stime: 5411043000000,
		gdate: [2141, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 21] },
		gtime: 5411043000000
	},
	{
		sdate: [1520, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 1],
			DateTime: "1520-04-01 00:00:00",
			DateAber: "01 Tir 1520",
			DateMonth: "Tir",
			DateYearMonth: "1520-Tir",
			DateYear: "1520",
			DateAberWithDate: "Thu 01 Tir 1520",
			DateDoy: "1520.093",
			DateWoy: "1520W14-6",
			DateWithSlash: "1520/04/01",
			DateWithOutSlash: "15200401"
		},
		stime: 5411129400000,
		gdate: [2141, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 22] },
		gtime: 5411129400000
	},
	{
		sdate: [1520, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 2],
			DateTime: "1520-04-02 00:00:00",
			DateAber: "02 Tir 1520",
			DateMonth: "Tir",
			DateYearMonth: "1520-Tir",
			DateYear: "1520",
			DateAberWithDate: "Fri 02 Tir 1520",
			DateDoy: "1520.094",
			DateWoy: "1520W14-7",
			DateWithSlash: "1520/04/02",
			DateWithOutSlash: "15200402"
		},
		stime: 5411215800000,
		gdate: [2141, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 23] },
		gtime: 5411215800000
	},
	{
		sdate: [1520, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 15],
			DateTime: "1520-04-15 00:00:00",
			DateAber: "15 Tir 1520",
			DateMonth: "Tir",
			DateYearMonth: "1520-Tir",
			DateYear: "1520",
			DateAberWithDate: "Thu 15 Tir 1520",
			DateDoy: "1520.107",
			DateWoy: "1520W16-6",
			DateWithSlash: "1520/04/15",
			DateWithOutSlash: "15200415"
		},
		stime: 5412339000000,
		gdate: [2141, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 6] },
		gtime: 5412339000000
	},
	{
		sdate: [1520, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 30],
			DateTime: "1520-04-30 00:00:00",
			DateAber: "30 Tir 1520",
			DateMonth: "Tir",
			DateYearMonth: "1520-Tir",
			DateYear: "1520",
			DateAberWithDate: "Fri 30 Tir 1520",
			DateDoy: "1520.122",
			DateWoy: "1520W18-7",
			DateWithSlash: "1520/04/30",
			DateWithOutSlash: "15200430"
		},
		stime: 5413635000000,
		gdate: [2141, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 21] },
		gtime: 5413635000000
	},
	{
		sdate: [1520, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 31],
			DateTime: "1520-04-31 00:00:00",
			DateAber: "31 Tir 1520",
			DateMonth: "Tir",
			DateYearMonth: "1520-Tir",
			DateYear: "1520",
			DateAberWithDate: "Sat 31 Tir 1520",
			DateDoy: "1520.123",
			DateWoy: "1520W19-1",
			DateWithSlash: "1520/04/31",
			DateWithOutSlash: "15200431"
		},
		stime: 5413721400000,
		gdate: [2141, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 22] },
		gtime: 5413721400000
	},
	{
		sdate: [1520, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 1],
			DateTime: "1520-05-01 00:00:00",
			DateAber: "01 Amo 1520",
			DateMonth: "Amo",
			DateYearMonth: "1520-Amo",
			DateYear: "1520",
			DateAberWithDate: "Sun 01 Amo 1520",
			DateDoy: "1520.124",
			DateWoy: "1520W19-2",
			DateWithSlash: "1520/05/01",
			DateWithOutSlash: "15200501"
		},
		stime: 5413807800000,
		gdate: [2141, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 23] },
		gtime: 5413807800000
	},
	{
		sdate: [1520, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 2],
			DateTime: "1520-05-02 00:00:00",
			DateAber: "02 Amo 1520",
			DateMonth: "Amo",
			DateYearMonth: "1520-Amo",
			DateYear: "1520",
			DateAberWithDate: "Mon 02 Amo 1520",
			DateDoy: "1520.125",
			DateWoy: "1520W19-3",
			DateWithSlash: "1520/05/02",
			DateWithOutSlash: "15200502"
		},
		stime: 5413894200000,
		gdate: [2141, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 24] },
		gtime: 5413894200000
	},
	{
		sdate: [1520, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 15],
			DateTime: "1520-05-15 00:00:00",
			DateAber: "15 Amo 1520",
			DateMonth: "Amo",
			DateYearMonth: "1520-Amo",
			DateYear: "1520",
			DateAberWithDate: "Sun 15 Amo 1520",
			DateDoy: "1520.138",
			DateWoy: "1520W21-2",
			DateWithSlash: "1520/05/15",
			DateWithOutSlash: "15200515"
		},
		stime: 5415017400000,
		gdate: [2141, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 6] },
		gtime: 5415017400000
	},
	{
		sdate: [1520, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 30],
			DateTime: "1520-05-30 00:00:00",
			DateAber: "30 Amo 1520",
			DateMonth: "Amo",
			DateYearMonth: "1520-Amo",
			DateYear: "1520",
			DateAberWithDate: "Mon 30 Amo 1520",
			DateDoy: "1520.153",
			DateWoy: "1520W23-3",
			DateWithSlash: "1520/05/30",
			DateWithOutSlash: "15200530"
		},
		stime: 5416313400000,
		gdate: [2141, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 21] },
		gtime: 5416313400000
	},
	{
		sdate: [1520, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 31],
			DateTime: "1520-05-31 00:00:00",
			DateAber: "31 Amo 1520",
			DateMonth: "Amo",
			DateYearMonth: "1520-Amo",
			DateYear: "1520",
			DateAberWithDate: "Tue 31 Amo 1520",
			DateDoy: "1520.154",
			DateWoy: "1520W23-4",
			DateWithSlash: "1520/05/31",
			DateWithOutSlash: "15200531"
		},
		stime: 5416399800000,
		gdate: [2141, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 22] },
		gtime: 5416399800000
	},
	{
		sdate: [1520, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 1],
			DateTime: "1520-06-01 00:00:00",
			DateAber: "01 Sha 1520",
			DateMonth: "Sha",
			DateYearMonth: "1520-Sha",
			DateYear: "1520",
			DateAberWithDate: "Wed 01 Sha 1520",
			DateDoy: "1520.155",
			DateWoy: "1520W23-5",
			DateWithSlash: "1520/06/01",
			DateWithOutSlash: "15200601"
		},
		stime: 5416486200000,
		gdate: [2141, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 23] },
		gtime: 5416486200000
	},
	{
		sdate: [1520, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 2],
			DateTime: "1520-06-02 00:00:00",
			DateAber: "02 Sha 1520",
			DateMonth: "Sha",
			DateYearMonth: "1520-Sha",
			DateYear: "1520",
			DateAberWithDate: "Thu 02 Sha 1520",
			DateDoy: "1520.156",
			DateWoy: "1520W23-6",
			DateWithSlash: "1520/06/02",
			DateWithOutSlash: "15200602"
		},
		stime: 5416572600000,
		gdate: [2141, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 24] },
		gtime: 5416572600000
	},
	{
		sdate: [1520, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 15],
			DateTime: "1520-06-15 00:00:00",
			DateAber: "15 Sha 1520",
			DateMonth: "Sha",
			DateYearMonth: "1520-Sha",
			DateYear: "1520",
			DateAberWithDate: "Wed 15 Sha 1520",
			DateDoy: "1520.169",
			DateWoy: "1520W25-5",
			DateWithSlash: "1520/06/15",
			DateWithOutSlash: "15200615"
		},
		stime: 5417695800000,
		gdate: [2141, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 8, 6] },
		gtime: 5417695800000
	},
	{
		sdate: [1520, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 29],
			DateTime: "1520-06-29 00:00:00",
			DateAber: "29 Sha 1520",
			DateMonth: "Sha",
			DateYearMonth: "1520-Sha",
			DateYear: "1520",
			DateAberWithDate: "Wed 29 Sha 1520",
			DateDoy: "1520.183",
			DateWoy: "1520W27-5",
			DateWithSlash: "1520/06/29",
			DateWithOutSlash: "15200629"
		},
		stime: 5418905400000,
		gdate: [2141, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 8, 20] },
		gtime: 5418905400000
	},
	{
		sdate: [1520, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 30],
			DateTime: "1520-06-30 00:00:00",
			DateAber: "30 Sha 1520",
			DateMonth: "Sha",
			DateYearMonth: "1520-Sha",
			DateYear: "1520",
			DateAberWithDate: "Thu 30 Sha 1520",
			DateDoy: "1520.184",
			DateWoy: "1520W27-6",
			DateWithSlash: "1520/06/30",
			DateWithOutSlash: "15200630"
		},
		stime: 5418995400000,
		gdate: [2141, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 8, 21] },
		gtime: 5418995400000
	},
	{
		sdate: [1520, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 1],
			DateTime: "1520-07-01 00:00:00",
			DateAber: "01 Meh 1520",
			DateMonth: "Meh",
			DateYearMonth: "1520-Meh",
			DateYear: "1520",
			DateAberWithDate: "Sat 01 Meh 1520",
			DateDoy: "1520.186",
			DateWoy: "1520W28-1",
			DateWithSlash: "1520/07/01",
			DateWithOutSlash: "15200701"
		},
		stime: 5419168200000,
		gdate: [2141, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 8, 23] },
		gtime: 5419168200000
	},
	{
		sdate: [1520, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 2],
			DateTime: "1520-07-02 00:00:00",
			DateAber: "02 Meh 1520",
			DateMonth: "Meh",
			DateYearMonth: "1520-Meh",
			DateYear: "1520",
			DateAberWithDate: "Sun 02 Meh 1520",
			DateDoy: "1520.187",
			DateWoy: "1520W28-2",
			DateWithSlash: "1520/07/02",
			DateWithOutSlash: "15200702"
		},
		stime: 5419254600000,
		gdate: [2141, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 8, 24] },
		gtime: 5419254600000
	},
	{
		sdate: [1520, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 15],
			DateTime: "1520-07-15 00:00:00",
			DateAber: "15 Meh 1520",
			DateMonth: "Meh",
			DateYearMonth: "1520-Meh",
			DateYear: "1520",
			DateAberWithDate: "Sat 15 Meh 1520",
			DateDoy: "1520.200",
			DateWoy: "1520W30-1",
			DateWithSlash: "1520/07/15",
			DateWithOutSlash: "15200715"
		},
		stime: 5420377800000,
		gdate: [2141, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 9, 7] },
		gtime: 5420377800000
	},
	{
		sdate: [1520, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 29],
			DateTime: "1520-07-29 00:00:00",
			DateAber: "29 Meh 1520",
			DateMonth: "Meh",
			DateYearMonth: "1520-Meh",
			DateYear: "1520",
			DateAberWithDate: "Sat 29 Meh 1520",
			DateDoy: "1520.214",
			DateWoy: "1520W32-1",
			DateWithSlash: "1520/07/29",
			DateWithOutSlash: "15200729"
		},
		stime: 5421587400000,
		gdate: [2141, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 9, 21] },
		gtime: 5421587400000
	},
	{
		sdate: [1520, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 30],
			DateTime: "1520-07-30 00:00:00",
			DateAber: "30 Meh 1520",
			DateMonth: "Meh",
			DateYearMonth: "1520-Meh",
			DateYear: "1520",
			DateAberWithDate: "Sun 30 Meh 1520",
			DateDoy: "1520.215",
			DateWoy: "1520W32-2",
			DateWithSlash: "1520/07/30",
			DateWithOutSlash: "15200730"
		},
		stime: 5421673800000,
		gdate: [2141, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 9, 22] },
		gtime: 5421673800000
	},
	{
		sdate: [1520, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 1],
			DateTime: "1520-08-01 00:00:00",
			DateAber: "01 Aba 1520",
			DateMonth: "Aba",
			DateYearMonth: "1520-Aba",
			DateYear: "1520",
			DateAberWithDate: "Mon 01 Aba 1520",
			DateDoy: "1520.216",
			DateWoy: "1520W32-3",
			DateWithSlash: "1520/08/01",
			DateWithOutSlash: "15200801"
		},
		stime: 5421760200000,
		gdate: [2141, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 9, 23] },
		gtime: 5421760200000
	},
	{
		sdate: [1520, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 2],
			DateTime: "1520-08-02 00:00:00",
			DateAber: "02 Aba 1520",
			DateMonth: "Aba",
			DateYearMonth: "1520-Aba",
			DateYear: "1520",
			DateAberWithDate: "Tue 02 Aba 1520",
			DateDoy: "1520.217",
			DateWoy: "1520W32-4",
			DateWithSlash: "1520/08/02",
			DateWithOutSlash: "15200802"
		},
		stime: 5421846600000,
		gdate: [2141, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 9, 24] },
		gtime: 5421846600000
	},
	{
		sdate: [1520, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 15],
			DateTime: "1520-08-15 00:00:00",
			DateAber: "15 Aba 1520",
			DateMonth: "Aba",
			DateYearMonth: "1520-Aba",
			DateYear: "1520",
			DateAberWithDate: "Mon 15 Aba 1520",
			DateDoy: "1520.230",
			DateWoy: "1520W34-3",
			DateWithSlash: "1520/08/15",
			DateWithOutSlash: "15200815"
		},
		stime: 5422969800000,
		gdate: [2141, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 10, 6] },
		gtime: 5422969800000
	},
	{
		sdate: [1520, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 29],
			DateTime: "1520-08-29 00:00:00",
			DateAber: "29 Aba 1520",
			DateMonth: "Aba",
			DateYearMonth: "1520-Aba",
			DateYear: "1520",
			DateAberWithDate: "Mon 29 Aba 1520",
			DateDoy: "1520.244",
			DateWoy: "1520W36-3",
			DateWithSlash: "1520/08/29",
			DateWithOutSlash: "15200829"
		},
		stime: 5424179400000,
		gdate: [2141, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 10, 20] },
		gtime: 5424179400000
	},
	{
		sdate: [1520, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 30],
			DateTime: "1520-08-30 00:00:00",
			DateAber: "30 Aba 1520",
			DateMonth: "Aba",
			DateYearMonth: "1520-Aba",
			DateYear: "1520",
			DateAberWithDate: "Tue 30 Aba 1520",
			DateDoy: "1520.245",
			DateWoy: "1520W36-4",
			DateWithSlash: "1520/08/30",
			DateWithOutSlash: "15200830"
		},
		stime: 5424265800000,
		gdate: [2141, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 10, 21] },
		gtime: 5424265800000
	},
	{
		sdate: [1520, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 1],
			DateTime: "1520-09-01 00:00:00",
			DateAber: "01 Aza 1520",
			DateMonth: "Aza",
			DateYearMonth: "1520-Aza",
			DateYear: "1520",
			DateAberWithDate: "Wed 01 Aza 1520",
			DateDoy: "1520.246",
			DateWoy: "1520W36-5",
			DateWithSlash: "1520/09/01",
			DateWithOutSlash: "15200901"
		},
		stime: 5424352200000,
		gdate: [2141, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 10, 22] },
		gtime: 5424352200000
	},
	{
		sdate: [1520, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 2],
			DateTime: "1520-09-02 00:00:00",
			DateAber: "02 Aza 1520",
			DateMonth: "Aza",
			DateYearMonth: "1520-Aza",
			DateYear: "1520",
			DateAberWithDate: "Thu 02 Aza 1520",
			DateDoy: "1520.247",
			DateWoy: "1520W36-6",
			DateWithSlash: "1520/09/02",
			DateWithOutSlash: "15200902"
		},
		stime: 5424438600000,
		gdate: [2141, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 10, 23] },
		gtime: 5424438600000
	},
	{
		sdate: [1520, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 15],
			DateTime: "1520-09-15 00:00:00",
			DateAber: "15 Aza 1520",
			DateMonth: "Aza",
			DateYearMonth: "1520-Aza",
			DateYear: "1520",
			DateAberWithDate: "Wed 15 Aza 1520",
			DateDoy: "1520.260",
			DateWoy: "1520W38-5",
			DateWithSlash: "1520/09/15",
			DateWithOutSlash: "15200915"
		},
		stime: 5425561800000,
		gdate: [2141, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 11, 6] },
		gtime: 5425561800000
	},
	{
		sdate: [1520, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 29],
			DateTime: "1520-09-29 00:00:00",
			DateAber: "29 Aza 1520",
			DateMonth: "Aza",
			DateYearMonth: "1520-Aza",
			DateYear: "1520",
			DateAberWithDate: "Wed 29 Aza 1520",
			DateDoy: "1520.274",
			DateWoy: "1520W40-5",
			DateWithSlash: "1520/09/29",
			DateWithOutSlash: "15200929"
		},
		stime: 5426771400000,
		gdate: [2141, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 11, 20] },
		gtime: 5426771400000
	},
	{
		sdate: [1520, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 30],
			DateTime: "1520-09-30 00:00:00",
			DateAber: "30 Aza 1520",
			DateMonth: "Aza",
			DateYearMonth: "1520-Aza",
			DateYear: "1520",
			DateAberWithDate: "Thu 30 Aza 1520",
			DateDoy: "1520.275",
			DateWoy: "1520W40-6",
			DateWithSlash: "1520/09/30",
			DateWithOutSlash: "15200930"
		},
		stime: 5426857800000,
		gdate: [2141, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 11, 21] },
		gtime: 5426857800000
	},
	{
		sdate: [1520, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 1],
			DateTime: "1520-10-01 00:00:00",
			DateAber: "01 Dey 1520",
			DateMonth: "Dey",
			DateYearMonth: "1520-Dey",
			DateYear: "1520",
			DateAberWithDate: "Fri 01 Dey 1520",
			DateDoy: "1520.276",
			DateWoy: "1520W40-7",
			DateWithSlash: "1520/10/01",
			DateWithOutSlash: "15201001"
		},
		stime: 5426944200000,
		gdate: [2141, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 11, 22] },
		gtime: 5426944200000
	},
	{
		sdate: [1520, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 2],
			DateTime: "1520-10-02 00:00:00",
			DateAber: "02 Dey 1520",
			DateMonth: "Dey",
			DateYearMonth: "1520-Dey",
			DateYear: "1520",
			DateAberWithDate: "Sat 02 Dey 1520",
			DateDoy: "1520.277",
			DateWoy: "1520W41-1",
			DateWithSlash: "1520/10/02",
			DateWithOutSlash: "15201002"
		},
		stime: 5427030600000,
		gdate: [2141, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 11, 23] },
		gtime: 5427030600000
	},
	{
		sdate: [1520, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 15],
			DateTime: "1520-10-15 00:00:00",
			DateAber: "15 Dey 1520",
			DateMonth: "Dey",
			DateYearMonth: "1520-Dey",
			DateYear: "1520",
			DateAberWithDate: "Fri 15 Dey 1520",
			DateDoy: "1520.290",
			DateWoy: "1520W42-7",
			DateWithSlash: "1520/10/15",
			DateWithOutSlash: "15201015"
		},
		stime: 5428153800000,
		gdate: [2142, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 0, 5] },
		gtime: 5428153800000
	},
	{
		sdate: [1520, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 29],
			DateTime: "1520-10-29 00:00:00",
			DateAber: "29 Dey 1520",
			DateMonth: "Dey",
			DateYearMonth: "1520-Dey",
			DateYear: "1520",
			DateAberWithDate: "Fri 29 Dey 1520",
			DateDoy: "1520.304",
			DateWoy: "1520W44-7",
			DateWithSlash: "1520/10/29",
			DateWithOutSlash: "15201029"
		},
		stime: 5429363400000,
		gdate: [2142, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 0, 19] },
		gtime: 5429363400000
	},
	{
		sdate: [1520, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 30],
			DateTime: "1520-10-30 00:00:00",
			DateAber: "30 Dey 1520",
			DateMonth: "Dey",
			DateYearMonth: "1520-Dey",
			DateYear: "1520",
			DateAberWithDate: "Sat 30 Dey 1520",
			DateDoy: "1520.305",
			DateWoy: "1520W45-1",
			DateWithSlash: "1520/10/30",
			DateWithOutSlash: "15201030"
		},
		stime: 5429449800000,
		gdate: [2142, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 0, 20] },
		gtime: 5429449800000
	},
	{
		sdate: [1520, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 1],
			DateTime: "1520-11-01 00:00:00",
			DateAber: "01 Bah 1520",
			DateMonth: "Bah",
			DateYearMonth: "1520-Bah",
			DateYear: "1520",
			DateAberWithDate: "Sun 01 Bah 1520",
			DateDoy: "1520.306",
			DateWoy: "1520W45-2",
			DateWithSlash: "1520/11/01",
			DateWithOutSlash: "15201101"
		},
		stime: 5429536200000,
		gdate: [2142, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 0, 21] },
		gtime: 5429536200000
	},
	{
		sdate: [1520, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 2],
			DateTime: "1520-11-02 00:00:00",
			DateAber: "02 Bah 1520",
			DateMonth: "Bah",
			DateYearMonth: "1520-Bah",
			DateYear: "1520",
			DateAberWithDate: "Mon 02 Bah 1520",
			DateDoy: "1520.307",
			DateWoy: "1520W45-3",
			DateWithSlash: "1520/11/02",
			DateWithOutSlash: "15201102"
		},
		stime: 5429622600000,
		gdate: [2142, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 0, 22] },
		gtime: 5429622600000
	},
	{
		sdate: [1520, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 15],
			DateTime: "1520-11-15 00:00:00",
			DateAber: "15 Bah 1520",
			DateMonth: "Bah",
			DateYearMonth: "1520-Bah",
			DateYear: "1520",
			DateAberWithDate: "Sun 15 Bah 1520",
			DateDoy: "1520.320",
			DateWoy: "1520W47-2",
			DateWithSlash: "1520/11/15",
			DateWithOutSlash: "15201115"
		},
		stime: 5430745800000,
		gdate: [2142, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 1, 4] },
		gtime: 5430745800000
	},
	{
		sdate: [1520, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 29],
			DateTime: "1520-11-29 00:00:00",
			DateAber: "29 Bah 1520",
			DateMonth: "Bah",
			DateYearMonth: "1520-Bah",
			DateYear: "1520",
			DateAberWithDate: "Sun 29 Bah 1520",
			DateDoy: "1520.334",
			DateWoy: "1520W49-2",
			DateWithSlash: "1520/11/29",
			DateWithOutSlash: "15201129"
		},
		stime: 5431955400000,
		gdate: [2142, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 1, 18] },
		gtime: 5431955400000
	},
	{
		sdate: [1520, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 30],
			DateTime: "1520-11-30 00:00:00",
			DateAber: "30 Bah 1520",
			DateMonth: "Bah",
			DateYearMonth: "1520-Bah",
			DateYear: "1520",
			DateAberWithDate: "Mon 30 Bah 1520",
			DateDoy: "1520.335",
			DateWoy: "1520W49-3",
			DateWithSlash: "1520/11/30",
			DateWithOutSlash: "15201130"
		},
		stime: 5432041800000,
		gdate: [2142, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 1, 19] },
		gtime: 5432041800000
	},
	{
		sdate: [1520, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 1],
			DateTime: "1520-12-01 00:00:00",
			DateAber: "01 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Tue 01 Esf 1520",
			DateDoy: "1520.336",
			DateWoy: "1520W49-4",
			DateWithSlash: "1520/12/01",
			DateWithOutSlash: "15201201"
		},
		stime: 5432128200000,
		gdate: [2142, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 1, 20] },
		gtime: 5432128200000
	},
	{
		sdate: [1520, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 2],
			DateTime: "1520-12-02 00:00:00",
			DateAber: "02 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Wed 02 Esf 1520",
			DateDoy: "1520.337",
			DateWoy: "1520W49-5",
			DateWithSlash: "1520/12/02",
			DateWithOutSlash: "15201202"
		},
		stime: 5432214600000,
		gdate: [2142, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 1, 21] },
		gtime: 5432214600000
	},
	{
		sdate: [1520, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 3],
			DateTime: "1520-12-03 00:00:00",
			DateAber: "03 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Thu 03 Esf 1520",
			DateDoy: "1520.338",
			DateWoy: "1520W49-6",
			DateWithSlash: "1520/12/03",
			DateWithOutSlash: "15201203"
		},
		stime: 5432301000000,
		gdate: [2142, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 1, 22] },
		gtime: 5432301000000
	},
	{
		sdate: [1520, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 4],
			DateTime: "1520-12-04 00:00:00",
			DateAber: "04 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Fri 04 Esf 1520",
			DateDoy: "1520.339",
			DateWoy: "1520W49-7",
			DateWithSlash: "1520/12/04",
			DateWithOutSlash: "15201204"
		},
		stime: 5432387400000,
		gdate: [2142, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 1, 23] },
		gtime: 5432387400000
	},
	{
		sdate: [1520, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 15],
			DateTime: "1520-12-15 00:00:00",
			DateAber: "15 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Tue 15 Esf 1520",
			DateDoy: "1520.350",
			DateWoy: "1520W51-4",
			DateWithSlash: "1520/12/15",
			DateWithOutSlash: "15201215"
		},
		stime: 5433337800000,
		gdate: [2142, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 2, 6] },
		gtime: 5433337800000
	},
	{
		sdate: [1520, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 25],
			DateTime: "1520-12-25 00:00:00",
			DateAber: "25 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Fri 25 Esf 1520",
			DateDoy: "1520.360",
			DateWoy: "1520W52-7",
			DateWithSlash: "1520/12/25",
			DateWithOutSlash: "15201225"
		},
		stime: 5434201800000,
		gdate: [2142, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 2, 16] },
		gtime: 5434201800000
	},
	{
		sdate: [1520, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 26],
			DateTime: "1520-12-26 00:00:00",
			DateAber: "26 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Sat 26 Esf 1520",
			DateDoy: "1520.361",
			DateWoy: "1520W53-1",
			DateWithSlash: "1520/12/26",
			DateWithOutSlash: "15201226"
		},
		stime: 5434288200000,
		gdate: [2142, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 2, 17] },
		gtime: 5434288200000
	},
	{
		sdate: [1520, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 27],
			DateTime: "1520-12-27 00:00:00",
			DateAber: "27 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Sun 27 Esf 1520",
			DateDoy: "1520.362",
			DateWoy: "1520W53-2",
			DateWithSlash: "1520/12/27",
			DateWithOutSlash: "15201227"
		},
		stime: 5434374600000,
		gdate: [2142, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 2, 18] },
		gtime: 5434374600000
	},
	{
		sdate: [1520, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 28],
			DateTime: "1520-12-28 00:00:00",
			DateAber: "28 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Mon 28 Esf 1520",
			DateDoy: "1520.363",
			DateWoy: "1520W53-3",
			DateWithSlash: "1520/12/28",
			DateWithOutSlash: "15201228"
		},
		stime: 5434461000000,
		gdate: [2142, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 2, 19] },
		gtime: 5434461000000
	},
	{
		sdate: [1520, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 29],
			DateTime: "1520-12-29 00:00:00",
			DateAber: "29 Esf 1520",
			DateMonth: "Esf",
			DateYearMonth: "1520-Esf",
			DateYear: "1520",
			DateAberWithDate: "Tue 29 Esf 1520",
			DateDoy: "1520.364",
			DateWoy: "1520W53-4",
			DateWithSlash: "1520/12/29",
			DateWithOutSlash: "15201229"
		},
		stime: 5434547400000,
		gdate: [2142, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 2, 20] },
		gtime: 5434547400000
	},

	{
		sdate: [1540, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 1],
			DateTime: "1540-01-01 00:00:00",
			DateAber: "01 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Fri 01 Far 1540",
			DateDoy: "1540.000",
			DateWoy: "1539W52-7",
			DateWithSlash: "1540/01/01",
			DateWithOutSlash: "15400101"
		},
		stime: 6034163400000,
		gdate: [2161, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 20] },
		gtime: 6034163400000
	},
	{
		sdate: [1540, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 2],
			DateTime: "1540-01-02 01:00:00",
			DateAber: "02 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Sat 02 Far 1540",
			DateDoy: "1540.001",
			DateWoy: "1540W01-1",
			DateWithSlash: "1540/01/02",
			DateWithOutSlash: "15400102"
		},
		stime: 6034249800000,
		gdate: [2161, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 21] },
		gtime: 6034249800000
	},
	{
		sdate: [1540, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 3],
			DateTime: "1540-01-03 00:00:00",
			DateAber: "03 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Sun 03 Far 1540",
			DateDoy: "1540.002",
			DateWoy: "1540W01-2",
			DateWithSlash: "1540/01/03",
			DateWithOutSlash: "15400103"
		},
		stime: 6034332600000,
		gdate: [2161, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 22] },
		gtime: 6034332600000
	},
	{
		sdate: [1540, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 4],
			DateTime: "1540-01-04 00:00:00",
			DateAber: "04 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Mon 04 Far 1540",
			DateDoy: "1540.003",
			DateWoy: "1540W01-3",
			DateWithSlash: "1540/01/04",
			DateWithOutSlash: "15400104"
		},
		stime: 6034419000000,
		gdate: [2161, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 23] },
		gtime: 6034419000000
	},
	{
		sdate: [1540, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 5],
			DateTime: "1540-01-05 00:00:00",
			DateAber: "05 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Tue 05 Far 1540",
			DateDoy: "1540.004",
			DateWoy: "1540W01-4",
			DateWithSlash: "1540/01/05",
			DateWithOutSlash: "15400105"
		},
		stime: 6034505400000,
		gdate: [2161, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 24] },
		gtime: 6034505400000
	},
	{
		sdate: [1540, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 6],
			DateTime: "1540-01-06 00:00:00",
			DateAber: "06 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Wed 06 Far 1540",
			DateDoy: "1540.005",
			DateWoy: "1540W01-5",
			DateWithSlash: "1540/01/06",
			DateWithOutSlash: "15400106"
		},
		stime: 6034591800000,
		gdate: [2161, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 25] },
		gtime: 6034591800000
	},
	{
		sdate: [1540, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 7],
			DateTime: "1540-01-07 00:00:00",
			DateAber: "07 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Thu 07 Far 1540",
			DateDoy: "1540.006",
			DateWoy: "1540W01-6",
			DateWithSlash: "1540/01/07",
			DateWithOutSlash: "15400107"
		},
		stime: 6034678200000,
		gdate: [2161, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 26] },
		gtime: 6034678200000
	},
	{
		sdate: [1540, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 15],
			DateTime: "1540-01-15 00:00:00",
			DateAber: "15 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Fri 15 Far 1540",
			DateDoy: "1540.014",
			DateWoy: "1540W02-7",
			DateWithSlash: "1540/01/15",
			DateWithOutSlash: "15400115"
		},
		stime: 6035369400000,
		gdate: [2161, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 3] },
		gtime: 6035369400000
	},
	{
		sdate: [1540, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 29],
			DateTime: "1540-01-29 00:00:00",
			DateAber: "29 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Fri 29 Far 1540",
			DateDoy: "1540.028",
			DateWoy: "1540W04-7",
			DateWithSlash: "1540/01/29",
			DateWithOutSlash: "15400129"
		},
		stime: 6036579000000,
		gdate: [2161, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 17] },
		gtime: 6036579000000
	},
	{
		sdate: [1540, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 30],
			DateTime: "1540-01-30 00:00:00",
			DateAber: "30 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Sat 30 Far 1540",
			DateDoy: "1540.029",
			DateWoy: "1540W05-1",
			DateWithSlash: "1540/01/30",
			DateWithOutSlash: "15400130"
		},
		stime: 6036665400000,
		gdate: [2161, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 18] },
		gtime: 6036665400000
	},
	{
		sdate: [1540, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 31],
			DateTime: "1540-01-31 00:00:00",
			DateAber: "31 Far 1540",
			DateMonth: "Far",
			DateYearMonth: "1540-Far",
			DateYear: "1540",
			DateAberWithDate: "Sun 31 Far 1540",
			DateDoy: "1540.030",
			DateWoy: "1540W05-2",
			DateWithSlash: "1540/01/31",
			DateWithOutSlash: "15400131"
		},
		stime: 6036751800000,
		gdate: [2161, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 19] },
		gtime: 6036751800000
	},
	{
		sdate: [1540, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 1],
			DateTime: "1540-02-01 00:00:00",
			DateAber: "01 Ord 1540",
			DateMonth: "Ord",
			DateYearMonth: "1540-Ord",
			DateYear: "1540",
			DateAberWithDate: "Mon 01 Ord 1540",
			DateDoy: "1540.031",
			DateWoy: "1540W05-3",
			DateWithSlash: "1540/02/01",
			DateWithOutSlash: "15400201"
		},
		stime: 6036838200000,
		gdate: [2161, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 20] },
		gtime: 6036838200000
	},
	{
		sdate: [1540, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 2],
			DateTime: "1540-02-02 00:00:00",
			DateAber: "02 Ord 1540",
			DateMonth: "Ord",
			DateYearMonth: "1540-Ord",
			DateYear: "1540",
			DateAberWithDate: "Tue 02 Ord 1540",
			DateDoy: "1540.032",
			DateWoy: "1540W05-4",
			DateWithSlash: "1540/02/02",
			DateWithOutSlash: "15400202"
		},
		stime: 6036924600000,
		gdate: [2161, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 21] },
		gtime: 6036924600000
	},
	{
		sdate: [1540, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 15],
			DateTime: "1540-02-15 00:00:00",
			DateAber: "15 Ord 1540",
			DateMonth: "Ord",
			DateYearMonth: "1540-Ord",
			DateYear: "1540",
			DateAberWithDate: "Mon 15 Ord 1540",
			DateDoy: "1540.045",
			DateWoy: "1540W07-3",
			DateWithSlash: "1540/02/15",
			DateWithOutSlash: "15400215"
		},
		stime: 6038047800000,
		gdate: [2161, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 4] },
		gtime: 6038047800000
	},
	{
		sdate: [1540, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 30],
			DateTime: "1540-02-30 00:00:00",
			DateAber: "30 Ord 1540",
			DateMonth: "Ord",
			DateYearMonth: "1540-Ord",
			DateYear: "1540",
			DateAberWithDate: "Tue 30 Ord 1540",
			DateDoy: "1540.060",
			DateWoy: "1540W09-4",
			DateWithSlash: "1540/02/30",
			DateWithOutSlash: "15400230"
		},
		stime: 6039343800000,
		gdate: [2161, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 19] },
		gtime: 6039343800000
	},
	{
		sdate: [1540, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 31],
			DateTime: "1540-02-31 00:00:00",
			DateAber: "31 Ord 1540",
			DateMonth: "Ord",
			DateYearMonth: "1540-Ord",
			DateYear: "1540",
			DateAberWithDate: "Wed 31 Ord 1540",
			DateDoy: "1540.061",
			DateWoy: "1540W09-5",
			DateWithSlash: "1540/02/31",
			DateWithOutSlash: "15400231"
		},
		stime: 6039430200000,
		gdate: [2161, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 20] },
		gtime: 6039430200000
	},
	{
		sdate: [1540, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 1],
			DateTime: "1540-03-01 00:00:00",
			DateAber: "01 Kho 1540",
			DateMonth: "Kho",
			DateYearMonth: "1540-Kho",
			DateYear: "1540",
			DateAberWithDate: "Thu 01 Kho 1540",
			DateDoy: "1540.062",
			DateWoy: "1540W09-6",
			DateWithSlash: "1540/03/01",
			DateWithOutSlash: "15400301"
		},
		stime: 6039516600000,
		gdate: [2161, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 21] },
		gtime: 6039516600000
	},
	{
		sdate: [1540, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 2],
			DateTime: "1540-03-02 00:00:00",
			DateAber: "02 Kho 1540",
			DateMonth: "Kho",
			DateYearMonth: "1540-Kho",
			DateYear: "1540",
			DateAberWithDate: "Fri 02 Kho 1540",
			DateDoy: "1540.063",
			DateWoy: "1540W09-7",
			DateWithSlash: "1540/03/02",
			DateWithOutSlash: "15400302"
		},
		stime: 6039603000000,
		gdate: [2161, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 22] },
		gtime: 6039603000000
	},
	{
		sdate: [1540, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 15],
			DateTime: "1540-03-15 00:00:00",
			DateAber: "15 Kho 1540",
			DateMonth: "Kho",
			DateYearMonth: "1540-Kho",
			DateYear: "1540",
			DateAberWithDate: "Thu 15 Kho 1540",
			DateDoy: "1540.076",
			DateWoy: "1540W11-6",
			DateWithSlash: "1540/03/15",
			DateWithOutSlash: "15400315"
		},
		stime: 6040726200000,
		gdate: [2161, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 4] },
		gtime: 6040726200000
	},
	{
		sdate: [1540, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 30],
			DateTime: "1540-03-30 00:00:00",
			DateAber: "30 Kho 1540",
			DateMonth: "Kho",
			DateYearMonth: "1540-Kho",
			DateYear: "1540",
			DateAberWithDate: "Fri 30 Kho 1540",
			DateDoy: "1540.091",
			DateWoy: "1540W13-7",
			DateWithSlash: "1540/03/30",
			DateWithOutSlash: "15400330"
		},
		stime: 6042022200000,
		gdate: [2161, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 19] },
		gtime: 6042022200000
	},
	{
		sdate: [1540, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 31],
			DateTime: "1540-03-31 00:00:00",
			DateAber: "31 Kho 1540",
			DateMonth: "Kho",
			DateYearMonth: "1540-Kho",
			DateYear: "1540",
			DateAberWithDate: "Sat 31 Kho 1540",
			DateDoy: "1540.092",
			DateWoy: "1540W14-1",
			DateWithSlash: "1540/03/31",
			DateWithOutSlash: "15400331"
		},
		stime: 6042108600000,
		gdate: [2161, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 20] },
		gtime: 6042108600000
	},
	{
		sdate: [1540, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 1],
			DateTime: "1540-04-01 00:00:00",
			DateAber: "01 Tir 1540",
			DateMonth: "Tir",
			DateYearMonth: "1540-Tir",
			DateYear: "1540",
			DateAberWithDate: "Sun 01 Tir 1540",
			DateDoy: "1540.093",
			DateWoy: "1540W14-2",
			DateWithSlash: "1540/04/01",
			DateWithOutSlash: "15400401"
		},
		stime: 6042195000000,
		gdate: [2161, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 21] },
		gtime: 6042195000000
	},
	{
		sdate: [1540, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 2],
			DateTime: "1540-04-02 00:00:00",
			DateAber: "02 Tir 1540",
			DateMonth: "Tir",
			DateYearMonth: "1540-Tir",
			DateYear: "1540",
			DateAberWithDate: "Mon 02 Tir 1540",
			DateDoy: "1540.094",
			DateWoy: "1540W14-3",
			DateWithSlash: "1540/04/02",
			DateWithOutSlash: "15400402"
		},
		stime: 6042281400000,
		gdate: [2161, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 22] },
		gtime: 6042281400000
	},
	{
		sdate: [1540, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 15],
			DateTime: "1540-04-15 00:00:00",
			DateAber: "15 Tir 1540",
			DateMonth: "Tir",
			DateYearMonth: "1540-Tir",
			DateYear: "1540",
			DateAberWithDate: "Sun 15 Tir 1540",
			DateDoy: "1540.107",
			DateWoy: "1540W16-2",
			DateWithSlash: "1540/04/15",
			DateWithOutSlash: "15400415"
		},
		stime: 6043404600000,
		gdate: [2161, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 5] },
		gtime: 6043404600000
	},
	{
		sdate: [1540, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 30],
			DateTime: "1540-04-30 00:00:00",
			DateAber: "30 Tir 1540",
			DateMonth: "Tir",
			DateYearMonth: "1540-Tir",
			DateYear: "1540",
			DateAberWithDate: "Mon 30 Tir 1540",
			DateDoy: "1540.122",
			DateWoy: "1540W18-3",
			DateWithSlash: "1540/04/30",
			DateWithOutSlash: "15400430"
		},
		stime: 6044700600000,
		gdate: [2161, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 20] },
		gtime: 6044700600000
	},
	{
		sdate: [1540, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 31],
			DateTime: "1540-04-31 00:00:00",
			DateAber: "31 Tir 1540",
			DateMonth: "Tir",
			DateYearMonth: "1540-Tir",
			DateYear: "1540",
			DateAberWithDate: "Tue 31 Tir 1540",
			DateDoy: "1540.123",
			DateWoy: "1540W18-4",
			DateWithSlash: "1540/04/31",
			DateWithOutSlash: "15400431"
		},
		stime: 6044787000000,
		gdate: [2161, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 21] },
		gtime: 6044787000000
	},
	{
		sdate: [1540, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 1],
			DateTime: "1540-05-01 00:00:00",
			DateAber: "01 Amo 1540",
			DateMonth: "Amo",
			DateYearMonth: "1540-Amo",
			DateYear: "1540",
			DateAberWithDate: "Wed 01 Amo 1540",
			DateDoy: "1540.124",
			DateWoy: "1540W18-5",
			DateWithSlash: "1540/05/01",
			DateWithOutSlash: "15400501"
		},
		stime: 6044873400000,
		gdate: [2161, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 22] },
		gtime: 6044873400000
	},
	{
		sdate: [1540, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 2],
			DateTime: "1540-05-02 00:00:00",
			DateAber: "02 Amo 1540",
			DateMonth: "Amo",
			DateYearMonth: "1540-Amo",
			DateYear: "1540",
			DateAberWithDate: "Thu 02 Amo 1540",
			DateDoy: "1540.125",
			DateWoy: "1540W18-6",
			DateWithSlash: "1540/05/02",
			DateWithOutSlash: "15400502"
		},
		stime: 6044959800000,
		gdate: [2161, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 23] },
		gtime: 6044959800000
	},
	{
		sdate: [1540, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 15],
			DateTime: "1540-05-15 00:00:00",
			DateAber: "15 Amo 1540",
			DateMonth: "Amo",
			DateYearMonth: "1540-Amo",
			DateYear: "1540",
			DateAberWithDate: "Wed 15 Amo 1540",
			DateDoy: "1540.138",
			DateWoy: "1540W20-5",
			DateWithSlash: "1540/05/15",
			DateWithOutSlash: "15400515"
		},
		stime: 6046083000000,
		gdate: [2161, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 5] },
		gtime: 6046083000000
	},
	{
		sdate: [1540, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 30],
			DateTime: "1540-05-30 00:00:00",
			DateAber: "30 Amo 1540",
			DateMonth: "Amo",
			DateYearMonth: "1540-Amo",
			DateYear: "1540",
			DateAberWithDate: "Thu 30 Amo 1540",
			DateDoy: "1540.153",
			DateWoy: "1540W22-6",
			DateWithSlash: "1540/05/30",
			DateWithOutSlash: "15400530"
		},
		stime: 6047379000000,
		gdate: [2161, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 20] },
		gtime: 6047379000000
	},
	{
		sdate: [1540, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 31],
			DateTime: "1540-05-31 00:00:00",
			DateAber: "31 Amo 1540",
			DateMonth: "Amo",
			DateYearMonth: "1540-Amo",
			DateYear: "1540",
			DateAberWithDate: "Fri 31 Amo 1540",
			DateDoy: "1540.154",
			DateWoy: "1540W22-7",
			DateWithSlash: "1540/05/31",
			DateWithOutSlash: "15400531"
		},
		stime: 6047465400000,
		gdate: [2161, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 21] },
		gtime: 6047465400000
	},
	{
		sdate: [1540, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 1],
			DateTime: "1540-06-01 00:00:00",
			DateAber: "01 Sha 1540",
			DateMonth: "Sha",
			DateYearMonth: "1540-Sha",
			DateYear: "1540",
			DateAberWithDate: "Sat 01 Sha 1540",
			DateDoy: "1540.155",
			DateWoy: "1540W23-1",
			DateWithSlash: "1540/06/01",
			DateWithOutSlash: "15400601"
		},
		stime: 6047551800000,
		gdate: [2161, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 22] },
		gtime: 6047551800000
	},
	{
		sdate: [1540, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 2],
			DateTime: "1540-06-02 00:00:00",
			DateAber: "02 Sha 1540",
			DateMonth: "Sha",
			DateYearMonth: "1540-Sha",
			DateYear: "1540",
			DateAberWithDate: "Sun 02 Sha 1540",
			DateDoy: "1540.156",
			DateWoy: "1540W23-2",
			DateWithSlash: "1540/06/02",
			DateWithOutSlash: "15400602"
		},
		stime: 6047638200000,
		gdate: [2161, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 23] },
		gtime: 6047638200000
	},
	{
		sdate: [1540, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 15],
			DateTime: "1540-06-15 00:00:00",
			DateAber: "15 Sha 1540",
			DateMonth: "Sha",
			DateYearMonth: "1540-Sha",
			DateYear: "1540",
			DateAberWithDate: "Sat 15 Sha 1540",
			DateDoy: "1540.169",
			DateWoy: "1540W25-1",
			DateWithSlash: "1540/06/15",
			DateWithOutSlash: "15400615"
		},
		stime: 6048761400000,
		gdate: [2161, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 5] },
		gtime: 6048761400000
	},
	{
		sdate: [1540, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 29],
			DateTime: "1540-06-29 00:00:00",
			DateAber: "29 Sha 1540",
			DateMonth: "Sha",
			DateYearMonth: "1540-Sha",
			DateYear: "1540",
			DateAberWithDate: "Sat 29 Sha 1540",
			DateDoy: "1540.183",
			DateWoy: "1540W27-1",
			DateWithSlash: "1540/06/29",
			DateWithOutSlash: "15400629"
		},
		stime: 6049971000000,
		gdate: [2161, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 19] },
		gtime: 6049971000000
	},
	{
		sdate: [1540, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 30],
			DateTime: "1540-06-30 00:00:00",
			DateAber: "30 Sha 1540",
			DateMonth: "Sha",
			DateYearMonth: "1540-Sha",
			DateYear: "1540",
			DateAberWithDate: "Sun 30 Sha 1540",
			DateDoy: "1540.184",
			DateWoy: "1540W27-2",
			DateWithSlash: "1540/06/30",
			DateWithOutSlash: "15400630"
		},
		stime: 6050057400000,
		gdate: [2161, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 20] },
		gtime: 6050057400000
	},
	{
		sdate: [1540, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 1],
			DateTime: "1540-07-01 00:00:00",
			DateAber: "01 Meh 1540",
			DateMonth: "Meh",
			DateYearMonth: "1540-Meh",
			DateYear: "1540",
			DateAberWithDate: "Tue 01 Meh 1540",
			DateDoy: "1540.186",
			DateWoy: "1540W27-4",
			DateWithSlash: "1540/07/01",
			DateWithOutSlash: "15400701"
		},
		stime: 6050233800000,
		gdate: [2161, 9, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 22] },
		gtime: 6050233800000
	},
	{
		sdate: [1540, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 2],
			DateTime: "1540-07-02 00:00:00",
			DateAber: "02 Meh 1540",
			DateMonth: "Meh",
			DateYearMonth: "1540-Meh",
			DateYear: "1540",
			DateAberWithDate: "Wed 02 Meh 1540",
			DateDoy: "1540.187",
			DateWoy: "1540W27-5",
			DateWithSlash: "1540/07/02",
			DateWithOutSlash: "15400702"
		},
		stime: 6050320200000,
		gdate: [2161, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 23] },
		gtime: 6050320200000
	},
	{
		sdate: [1540, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 15],
			DateTime: "1540-07-15 00:00:00",
			DateAber: "15 Meh 1540",
			DateMonth: "Meh",
			DateYearMonth: "1540-Meh",
			DateYear: "1540",
			DateAberWithDate: "Tue 15 Meh 1540",
			DateDoy: "1540.200",
			DateWoy: "1540W29-4",
			DateWithSlash: "1540/07/15",
			DateWithOutSlash: "15400715"
		},
		stime: 6051443400000,
		gdate: [2161, 10, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 9, 6] },
		gtime: 6051443400000
	},
	{
		sdate: [1540, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 29],
			DateTime: "1540-07-29 00:00:00",
			DateAber: "29 Meh 1540",
			DateMonth: "Meh",
			DateYearMonth: "1540-Meh",
			DateYear: "1540",
			DateAberWithDate: "Tue 29 Meh 1540",
			DateDoy: "1540.214",
			DateWoy: "1540W31-4",
			DateWithSlash: "1540/07/29",
			DateWithOutSlash: "15400729"
		},
		stime: 6052653000000,
		gdate: [2161, 10, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 9, 20] },
		gtime: 6052653000000
	},
	{
		sdate: [1540, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 30],
			DateTime: "1540-07-30 00:00:00",
			DateAber: "30 Meh 1540",
			DateMonth: "Meh",
			DateYearMonth: "1540-Meh",
			DateYear: "1540",
			DateAberWithDate: "Wed 30 Meh 1540",
			DateDoy: "1540.215",
			DateWoy: "1540W31-5",
			DateWithSlash: "1540/07/30",
			DateWithOutSlash: "15400730"
		},
		stime: 6052739400000,
		gdate: [2161, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 9, 21] },
		gtime: 6052739400000
	},
	{
		sdate: [1540, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 1],
			DateTime: "1540-08-01 00:00:00",
			DateAber: "01 Aba 1540",
			DateMonth: "Aba",
			DateYearMonth: "1540-Aba",
			DateYear: "1540",
			DateAberWithDate: "Thu 01 Aba 1540",
			DateDoy: "1540.216",
			DateWoy: "1540W31-6",
			DateWithSlash: "1540/08/01",
			DateWithOutSlash: "15400801"
		},
		stime: 6052825800000,
		gdate: [2161, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 9, 22] },
		gtime: 6052825800000
	},
	{
		sdate: [1540, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 2],
			DateTime: "1540-08-02 00:00:00",
			DateAber: "02 Aba 1540",
			DateMonth: "Aba",
			DateYearMonth: "1540-Aba",
			DateYear: "1540",
			DateAberWithDate: "Fri 02 Aba 1540",
			DateDoy: "1540.217",
			DateWoy: "1540W31-7",
			DateWithSlash: "1540/08/02",
			DateWithOutSlash: "15400802"
		},
		stime: 6052912200000,
		gdate: [2161, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 9, 23] },
		gtime: 6052912200000
	},
	{
		sdate: [1540, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 15],
			DateTime: "1540-08-15 00:00:00",
			DateAber: "15 Aba 1540",
			DateMonth: "Aba",
			DateYearMonth: "1540-Aba",
			DateYear: "1540",
			DateAberWithDate: "Thu 15 Aba 1540",
			DateDoy: "1540.230",
			DateWoy: "1540W33-6",
			DateWithSlash: "1540/08/15",
			DateWithOutSlash: "15400815"
		},
		stime: 6054035400000,
		gdate: [2161, 11, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 10, 5] },
		gtime: 6054035400000
	},
	{
		sdate: [1540, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 29],
			DateTime: "1540-08-29 00:00:00",
			DateAber: "29 Aba 1540",
			DateMonth: "Aba",
			DateYearMonth: "1540-Aba",
			DateYear: "1540",
			DateAberWithDate: "Thu 29 Aba 1540",
			DateDoy: "1540.244",
			DateWoy: "1540W35-6",
			DateWithSlash: "1540/08/29",
			DateWithOutSlash: "15400829"
		},
		stime: 6055245000000,
		gdate: [2161, 11, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 10, 19] },
		gtime: 6055245000000
	},
	{
		sdate: [1540, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 30],
			DateTime: "1540-08-30 00:00:00",
			DateAber: "30 Aba 1540",
			DateMonth: "Aba",
			DateYearMonth: "1540-Aba",
			DateYear: "1540",
			DateAberWithDate: "Fri 30 Aba 1540",
			DateDoy: "1540.245",
			DateWoy: "1540W35-7",
			DateWithSlash: "1540/08/30",
			DateWithOutSlash: "15400830"
		},
		stime: 6055331400000,
		gdate: [2161, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 10, 20] },
		gtime: 6055331400000
	},
	{
		sdate: [1540, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 1],
			DateTime: "1540-09-01 00:00:00",
			DateAber: "01 Aza 1540",
			DateMonth: "Aza",
			DateYearMonth: "1540-Aza",
			DateYear: "1540",
			DateAberWithDate: "Sat 01 Aza 1540",
			DateDoy: "1540.246",
			DateWoy: "1540W36-1",
			DateWithSlash: "1540/09/01",
			DateWithOutSlash: "15400901"
		},
		stime: 6055417800000,
		gdate: [2161, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 10, 21] },
		gtime: 6055417800000
	},
	{
		sdate: [1540, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 2],
			DateTime: "1540-09-02 00:00:00",
			DateAber: "02 Aza 1540",
			DateMonth: "Aza",
			DateYearMonth: "1540-Aza",
			DateYear: "1540",
			DateAberWithDate: "Sun 02 Aza 1540",
			DateDoy: "1540.247",
			DateWoy: "1540W36-2",
			DateWithSlash: "1540/09/02",
			DateWithOutSlash: "15400902"
		},
		stime: 6055504200000,
		gdate: [2161, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 10, 22] },
		gtime: 6055504200000
	},
	{
		sdate: [1540, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 15],
			DateTime: "1540-09-15 00:00:00",
			DateAber: "15 Aza 1540",
			DateMonth: "Aza",
			DateYearMonth: "1540-Aza",
			DateYear: "1540",
			DateAberWithDate: "Sat 15 Aza 1540",
			DateDoy: "1540.260",
			DateWoy: "1540W38-1",
			DateWithSlash: "1540/09/15",
			DateWithOutSlash: "15400915"
		},
		stime: 6056627400000,
		gdate: [2161, 12, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 11, 5] },
		gtime: 6056627400000
	},
	{
		sdate: [1540, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 29],
			DateTime: "1540-09-29 00:00:00",
			DateAber: "29 Aza 1540",
			DateMonth: "Aza",
			DateYearMonth: "1540-Aza",
			DateYear: "1540",
			DateAberWithDate: "Sat 29 Aza 1540",
			DateDoy: "1540.274",
			DateWoy: "1540W40-1",
			DateWithSlash: "1540/09/29",
			DateWithOutSlash: "15400929"
		},
		stime: 6057837000000,
		gdate: [2161, 12, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 11, 19] },
		gtime: 6057837000000
	},
	{
		sdate: [1540, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 30],
			DateTime: "1540-09-30 00:00:00",
			DateAber: "30 Aza 1540",
			DateMonth: "Aza",
			DateYearMonth: "1540-Aza",
			DateYear: "1540",
			DateAberWithDate: "Sun 30 Aza 1540",
			DateDoy: "1540.275",
			DateWoy: "1540W40-2",
			DateWithSlash: "1540/09/30",
			DateWithOutSlash: "15400930"
		},
		stime: 6057923400000,
		gdate: [2161, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 11, 20] },
		gtime: 6057923400000
	},
	{
		sdate: [1540, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 1],
			DateTime: "1540-10-01 00:00:00",
			DateAber: "01 Dey 1540",
			DateMonth: "Dey",
			DateYearMonth: "1540-Dey",
			DateYear: "1540",
			DateAberWithDate: "Mon 01 Dey 1540",
			DateDoy: "1540.276",
			DateWoy: "1540W40-3",
			DateWithSlash: "1540/10/01",
			DateWithOutSlash: "15401001"
		},
		stime: 6058009800000,
		gdate: [2161, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 11, 21] },
		gtime: 6058009800000
	},
	{
		sdate: [1540, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 2],
			DateTime: "1540-10-02 00:00:00",
			DateAber: "02 Dey 1540",
			DateMonth: "Dey",
			DateYearMonth: "1540-Dey",
			DateYear: "1540",
			DateAberWithDate: "Tue 02 Dey 1540",
			DateDoy: "1540.277",
			DateWoy: "1540W40-4",
			DateWithSlash: "1540/10/02",
			DateWithOutSlash: "15401002"
		},
		stime: 6058096200000,
		gdate: [2161, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 11, 22] },
		gtime: 6058096200000
	},
	{
		sdate: [1540, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 15],
			DateTime: "1540-10-15 00:00:00",
			DateAber: "15 Dey 1540",
			DateMonth: "Dey",
			DateYearMonth: "1540-Dey",
			DateYear: "1540",
			DateAberWithDate: "Mon 15 Dey 1540",
			DateDoy: "1540.290",
			DateWoy: "1540W42-3",
			DateWithSlash: "1540/10/15",
			DateWithOutSlash: "15401015"
		},
		stime: 6059219400000,
		gdate: [2162, 1, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 0, 4] },
		gtime: 6059219400000
	},
	{
		sdate: [1540, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 29],
			DateTime: "1540-10-29 00:00:00",
			DateAber: "29 Dey 1540",
			DateMonth: "Dey",
			DateYearMonth: "1540-Dey",
			DateYear: "1540",
			DateAberWithDate: "Mon 29 Dey 1540",
			DateDoy: "1540.304",
			DateWoy: "1540W44-3",
			DateWithSlash: "1540/10/29",
			DateWithOutSlash: "15401029"
		},
		stime: 6060429000000,
		gdate: [2162, 1, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 0, 18] },
		gtime: 6060429000000
	},
	{
		sdate: [1540, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 30],
			DateTime: "1540-10-30 00:00:00",
			DateAber: "30 Dey 1540",
			DateMonth: "Dey",
			DateYearMonth: "1540-Dey",
			DateYear: "1540",
			DateAberWithDate: "Tue 30 Dey 1540",
			DateDoy: "1540.305",
			DateWoy: "1540W44-4",
			DateWithSlash: "1540/10/30",
			DateWithOutSlash: "15401030"
		},
		stime: 6060515400000,
		gdate: [2162, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 0, 19] },
		gtime: 6060515400000
	},
	{
		sdate: [1540, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 1],
			DateTime: "1540-11-01 00:00:00",
			DateAber: "01 Bah 1540",
			DateMonth: "Bah",
			DateYearMonth: "1540-Bah",
			DateYear: "1540",
			DateAberWithDate: "Wed 01 Bah 1540",
			DateDoy: "1540.306",
			DateWoy: "1540W44-5",
			DateWithSlash: "1540/11/01",
			DateWithOutSlash: "15401101"
		},
		stime: 6060601800000,
		gdate: [2162, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 0, 20] },
		gtime: 6060601800000
	},
	{
		sdate: [1540, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 2],
			DateTime: "1540-11-02 00:00:00",
			DateAber: "02 Bah 1540",
			DateMonth: "Bah",
			DateYearMonth: "1540-Bah",
			DateYear: "1540",
			DateAberWithDate: "Thu 02 Bah 1540",
			DateDoy: "1540.307",
			DateWoy: "1540W44-6",
			DateWithSlash: "1540/11/02",
			DateWithOutSlash: "15401102"
		},
		stime: 6060688200000,
		gdate: [2162, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 0, 21] },
		gtime: 6060688200000
	},
	{
		sdate: [1540, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 15],
			DateTime: "1540-11-15 00:00:00",
			DateAber: "15 Bah 1540",
			DateMonth: "Bah",
			DateYearMonth: "1540-Bah",
			DateYear: "1540",
			DateAberWithDate: "Wed 15 Bah 1540",
			DateDoy: "1540.320",
			DateWoy: "1540W46-5",
			DateWithSlash: "1540/11/15",
			DateWithOutSlash: "15401115"
		},
		stime: 6061811400000,
		gdate: [2162, 2, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 1, 3] },
		gtime: 6061811400000
	},
	{
		sdate: [1540, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 29],
			DateTime: "1540-11-29 00:00:00",
			DateAber: "29 Bah 1540",
			DateMonth: "Bah",
			DateYearMonth: "1540-Bah",
			DateYear: "1540",
			DateAberWithDate: "Wed 29 Bah 1540",
			DateDoy: "1540.334",
			DateWoy: "1540W48-5",
			DateWithSlash: "1540/11/29",
			DateWithOutSlash: "15401129"
		},
		stime: 6063021000000,
		gdate: [2162, 2, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 1, 17] },
		gtime: 6063021000000
	},
	{
		sdate: [1540, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 30],
			DateTime: "1540-11-30 00:00:00",
			DateAber: "30 Bah 1540",
			DateMonth: "Bah",
			DateYearMonth: "1540-Bah",
			DateYear: "1540",
			DateAberWithDate: "Thu 30 Bah 1540",
			DateDoy: "1540.335",
			DateWoy: "1540W48-6",
			DateWithSlash: "1540/11/30",
			DateWithOutSlash: "15401130"
		},
		stime: 6063107400000,
		gdate: [2162, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 1, 18] },
		gtime: 6063107400000
	},
	{
		sdate: [1540, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 1],
			DateTime: "1540-12-01 00:00:00",
			DateAber: "01 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Fri 01 Esf 1540",
			DateDoy: "1540.336",
			DateWoy: "1540W48-7",
			DateWithSlash: "1540/12/01",
			DateWithOutSlash: "15401201"
		},
		stime: 6063193800000,
		gdate: [2162, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 1, 19] },
		gtime: 6063193800000
	},
	{
		sdate: [1540, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 2],
			DateTime: "1540-12-02 00:00:00",
			DateAber: "02 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Sat 02 Esf 1540",
			DateDoy: "1540.337",
			DateWoy: "1540W49-1",
			DateWithSlash: "1540/12/02",
			DateWithOutSlash: "15401202"
		},
		stime: 6063280200000,
		gdate: [2162, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 1, 20] },
		gtime: 6063280200000
	},
	{
		sdate: [1540, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 3],
			DateTime: "1540-12-03 00:00:00",
			DateAber: "03 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Sun 03 Esf 1540",
			DateDoy: "1540.338",
			DateWoy: "1540W49-2",
			DateWithSlash: "1540/12/03",
			DateWithOutSlash: "15401203"
		},
		stime: 6063366600000,
		gdate: [2162, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 1, 21] },
		gtime: 6063366600000
	},
	{
		sdate: [1540, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 4],
			DateTime: "1540-12-04 00:00:00",
			DateAber: "04 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Mon 04 Esf 1540",
			DateDoy: "1540.339",
			DateWoy: "1540W49-3",
			DateWithSlash: "1540/12/04",
			DateWithOutSlash: "15401204"
		},
		stime: 6063453000000,
		gdate: [2162, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 1, 22] },
		gtime: 6063453000000
	},
	{
		sdate: [1540, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 15],
			DateTime: "1540-12-15 00:00:00",
			DateAber: "15 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Fri 15 Esf 1540",
			DateDoy: "1540.350",
			DateWoy: "1540W50-7",
			DateWithSlash: "1540/12/15",
			DateWithOutSlash: "15401215"
		},
		stime: 6064403400000,
		gdate: [2162, 3, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 5] },
		gtime: 6064403400000
	},
	{
		sdate: [1540, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 25],
			DateTime: "1540-12-25 00:00:00",
			DateAber: "25 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Mon 25 Esf 1540",
			DateDoy: "1540.360",
			DateWoy: "1540W52-3",
			DateWithSlash: "1540/12/25",
			DateWithOutSlash: "15401225"
		},
		stime: 6065267400000,
		gdate: [2162, 3, 15, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 15] },
		gtime: 6065267400000
	},
	{
		sdate: [1540, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 26],
			DateTime: "1540-12-26 00:00:00",
			DateAber: "26 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Tue 26 Esf 1540",
			DateDoy: "1540.361",
			DateWoy: "1540W52-4",
			DateWithSlash: "1540/12/26",
			DateWithOutSlash: "15401226"
		},
		stime: 6065353800000,
		gdate: [2162, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 16] },
		gtime: 6065353800000
	},
	{
		sdate: [1540, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 27],
			DateTime: "1540-12-27 00:00:00",
			DateAber: "27 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Wed 27 Esf 1540",
			DateDoy: "1540.362",
			DateWoy: "1540W52-5",
			DateWithSlash: "1540/12/27",
			DateWithOutSlash: "15401227"
		},
		stime: 6065440200000,
		gdate: [2162, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 17] },
		gtime: 6065440200000
	},
	{
		sdate: [1540, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 28],
			DateTime: "1540-12-28 00:00:00",
			DateAber: "28 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Thu 28 Esf 1540",
			DateDoy: "1540.363",
			DateWoy: "1540W52-6",
			DateWithSlash: "1540/12/28",
			DateWithOutSlash: "15401228"
		},
		stime: 6065526600000,
		gdate: [2162, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 18] },
		gtime: 6065526600000
	},
	{
		sdate: [1540, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 29],
			DateTime: "1540-12-29 00:00:00",
			DateAber: "29 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Fri 29 Esf 1540",
			DateDoy: "1540.364",
			DateWoy: "1540W52-7",
			DateWithSlash: "1540/12/29",
			DateWithOutSlash: "15401229"
		},
		stime: 6065613000000,
		gdate: [2162, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 19] },
		gtime: 6065613000000
	},
	{
		sdate: [1540, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 30],
			DateTime: "1540-12-30 00:00:00",
			DateAber: "30 Esf 1540",
			DateMonth: "Esf",
			DateYearMonth: "1540-Esf",
			DateYear: "1540",
			DateAberWithDate: "Sat 30 Esf 1540",
			DateDoy: "1540.365",
			DateWoy: "1541W01-1",
			DateWithSlash: "1540/12/30",
			DateWithOutSlash: "15401230"
		},
		stime: 6065699400000,
		gdate: [2162, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 20] },
		gtime: 6065699400000
	},
	{
		sdate: [1560, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 1],
			DateTime: "1560-01-01 00:00:00",
			DateAber: "01 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Tue 01 Far 1560",
			DateDoy: "1560.000",
			DateWoy: "1560W01-4",
			DateWithSlash: "1560/01/01",
			DateWithOutSlash: "15600101"
		},
		stime: 6665315400000,
		gdate: [2181, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 20] },
		gtime: 6665315400000
	},
	{
		sdate: [1560, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 2],
			DateTime: "1560-01-02 01:00:00",
			DateAber: "02 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Wed 02 Far 1560",
			DateDoy: "1560.001",
			DateWoy: "1560W01-5",
			DateWithSlash: "1560/01/02",
			DateWithOutSlash: "15600102"
		},
		stime: 6665401800000,
		gdate: [2181, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 21] },
		gtime: 6665401800000
	},
	{
		sdate: [1560, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 3],
			DateTime: "1560-01-03 00:00:00",
			DateAber: "03 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Thu 03 Far 1560",
			DateDoy: "1560.002",
			DateWoy: "1560W01-6",
			DateWithSlash: "1560/01/03",
			DateWithOutSlash: "15600103"
		},
		stime: 6665484600000,
		gdate: [2181, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 22] },
		gtime: 6665484600000
	},
	{
		sdate: [1560, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 4],
			DateTime: "1560-01-04 00:00:00",
			DateAber: "04 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Fri 04 Far 1560",
			DateDoy: "1560.003",
			DateWoy: "1560W01-7",
			DateWithSlash: "1560/01/04",
			DateWithOutSlash: "15600104"
		},
		stime: 6665571000000,
		gdate: [2181, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 23] },
		gtime: 6665571000000
	},
	{
		sdate: [1560, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 5],
			DateTime: "1560-01-05 00:00:00",
			DateAber: "05 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Sat 05 Far 1560",
			DateDoy: "1560.004",
			DateWoy: "1560W02-1",
			DateWithSlash: "1560/01/05",
			DateWithOutSlash: "15600105"
		},
		stime: 6665657400000,
		gdate: [2181, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 24] },
		gtime: 6665657400000
	},
	{
		sdate: [1560, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 6],
			DateTime: "1560-01-06 00:00:00",
			DateAber: "06 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Sun 06 Far 1560",
			DateDoy: "1560.005",
			DateWoy: "1560W02-2",
			DateWithSlash: "1560/01/06",
			DateWithOutSlash: "15600106"
		},
		stime: 6665743800000,
		gdate: [2181, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 25] },
		gtime: 6665743800000
	},
	{
		sdate: [1560, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 7],
			DateTime: "1560-01-07 00:00:00",
			DateAber: "07 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Mon 07 Far 1560",
			DateDoy: "1560.006",
			DateWoy: "1560W02-3",
			DateWithSlash: "1560/01/07",
			DateWithOutSlash: "15600107"
		},
		stime: 6665830200000,
		gdate: [2181, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 26] },
		gtime: 6665830200000
	},
	{
		sdate: [1560, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 15],
			DateTime: "1560-01-15 00:00:00",
			DateAber: "15 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Tue 15 Far 1560",
			DateDoy: "1560.014",
			DateWoy: "1560W03-4",
			DateWithSlash: "1560/01/15",
			DateWithOutSlash: "15600115"
		},
		stime: 6666521400000,
		gdate: [2181, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 3] },
		gtime: 6666521400000
	},
	{
		sdate: [1560, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 29],
			DateTime: "1560-01-29 00:00:00",
			DateAber: "29 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Tue 29 Far 1560",
			DateDoy: "1560.028",
			DateWoy: "1560W05-4",
			DateWithSlash: "1560/01/29",
			DateWithOutSlash: "15600129"
		},
		stime: 6667731000000,
		gdate: [2181, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 17] },
		gtime: 6667731000000
	},
	{
		sdate: [1560, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 30],
			DateTime: "1560-01-30 00:00:00",
			DateAber: "30 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Wed 30 Far 1560",
			DateDoy: "1560.029",
			DateWoy: "1560W05-5",
			DateWithSlash: "1560/01/30",
			DateWithOutSlash: "15600130"
		},
		stime: 6667817400000,
		gdate: [2181, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 18] },
		gtime: 6667817400000
	},
	{
		sdate: [1560, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 31],
			DateTime: "1560-01-31 00:00:00",
			DateAber: "31 Far 1560",
			DateMonth: "Far",
			DateYearMonth: "1560-Far",
			DateYear: "1560",
			DateAberWithDate: "Thu 31 Far 1560",
			DateDoy: "1560.030",
			DateWoy: "1560W05-6",
			DateWithSlash: "1560/01/31",
			DateWithOutSlash: "15600131"
		},
		stime: 6667903800000,
		gdate: [2181, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 19] },
		gtime: 6667903800000
	},
	{
		sdate: [1560, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 1],
			DateTime: "1560-02-01 00:00:00",
			DateAber: "01 Ord 1560",
			DateMonth: "Ord",
			DateYearMonth: "1560-Ord",
			DateYear: "1560",
			DateAberWithDate: "Fri 01 Ord 1560",
			DateDoy: "1560.031",
			DateWoy: "1560W05-7",
			DateWithSlash: "1560/02/01",
			DateWithOutSlash: "15600201"
		},
		stime: 6667990200000,
		gdate: [2181, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 20] },
		gtime: 6667990200000
	},
	{
		sdate: [1560, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 2],
			DateTime: "1560-02-02 00:00:00",
			DateAber: "02 Ord 1560",
			DateMonth: "Ord",
			DateYearMonth: "1560-Ord",
			DateYear: "1560",
			DateAberWithDate: "Sat 02 Ord 1560",
			DateDoy: "1560.032",
			DateWoy: "1560W06-1",
			DateWithSlash: "1560/02/02",
			DateWithOutSlash: "15600202"
		},
		stime: 6668076600000,
		gdate: [2181, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 21] },
		gtime: 6668076600000
	},
	{
		sdate: [1560, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 15],
			DateTime: "1560-02-15 00:00:00",
			DateAber: "15 Ord 1560",
			DateMonth: "Ord",
			DateYearMonth: "1560-Ord",
			DateYear: "1560",
			DateAberWithDate: "Fri 15 Ord 1560",
			DateDoy: "1560.045",
			DateWoy: "1560W07-7",
			DateWithSlash: "1560/02/15",
			DateWithOutSlash: "15600215"
		},
		stime: 6669199800000,
		gdate: [2181, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 4] },
		gtime: 6669199800000
	},
	{
		sdate: [1560, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 30],
			DateTime: "1560-02-30 00:00:00",
			DateAber: "30 Ord 1560",
			DateMonth: "Ord",
			DateYearMonth: "1560-Ord",
			DateYear: "1560",
			DateAberWithDate: "Sat 30 Ord 1560",
			DateDoy: "1560.060",
			DateWoy: "1560W10-1",
			DateWithSlash: "1560/02/30",
			DateWithOutSlash: "15600230"
		},
		stime: 6670495800000,
		gdate: [2181, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 19] },
		gtime: 6670495800000
	},
	{
		sdate: [1560, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 31],
			DateTime: "1560-02-31 00:00:00",
			DateAber: "31 Ord 1560",
			DateMonth: "Ord",
			DateYearMonth: "1560-Ord",
			DateYear: "1560",
			DateAberWithDate: "Sun 31 Ord 1560",
			DateDoy: "1560.061",
			DateWoy: "1560W10-2",
			DateWithSlash: "1560/02/31",
			DateWithOutSlash: "15600231"
		},
		stime: 6670582200000,
		gdate: [2181, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 20] },
		gtime: 6670582200000
	},
	{
		sdate: [1560, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 1],
			DateTime: "1560-03-01 00:00:00",
			DateAber: "01 Kho 1560",
			DateMonth: "Kho",
			DateYearMonth: "1560-Kho",
			DateYear: "1560",
			DateAberWithDate: "Mon 01 Kho 1560",
			DateDoy: "1560.062",
			DateWoy: "1560W10-3",
			DateWithSlash: "1560/03/01",
			DateWithOutSlash: "15600301"
		},
		stime: 6670668600000,
		gdate: [2181, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 21] },
		gtime: 6670668600000
	},
	{
		sdate: [1560, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 2],
			DateTime: "1560-03-02 00:00:00",
			DateAber: "02 Kho 1560",
			DateMonth: "Kho",
			DateYearMonth: "1560-Kho",
			DateYear: "1560",
			DateAberWithDate: "Tue 02 Kho 1560",
			DateDoy: "1560.063",
			DateWoy: "1560W10-4",
			DateWithSlash: "1560/03/02",
			DateWithOutSlash: "15600302"
		},
		stime: 6670755000000,
		gdate: [2181, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 22] },
		gtime: 6670755000000
	},
	{
		sdate: [1560, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 15],
			DateTime: "1560-03-15 00:00:00",
			DateAber: "15 Kho 1560",
			DateMonth: "Kho",
			DateYearMonth: "1560-Kho",
			DateYear: "1560",
			DateAberWithDate: "Mon 15 Kho 1560",
			DateDoy: "1560.076",
			DateWoy: "1560W12-3",
			DateWithSlash: "1560/03/15",
			DateWithOutSlash: "15600315"
		},
		stime: 6671878200000,
		gdate: [2181, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 4] },
		gtime: 6671878200000
	},
	{
		sdate: [1560, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 30],
			DateTime: "1560-03-30 00:00:00",
			DateAber: "30 Kho 1560",
			DateMonth: "Kho",
			DateYearMonth: "1560-Kho",
			DateYear: "1560",
			DateAberWithDate: "Tue 30 Kho 1560",
			DateDoy: "1560.091",
			DateWoy: "1560W14-4",
			DateWithSlash: "1560/03/30",
			DateWithOutSlash: "15600330"
		},
		stime: 6673174200000,
		gdate: [2181, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 19] },
		gtime: 6673174200000
	},
	{
		sdate: [1560, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 31],
			DateTime: "1560-03-31 00:00:00",
			DateAber: "31 Kho 1560",
			DateMonth: "Kho",
			DateYearMonth: "1560-Kho",
			DateYear: "1560",
			DateAberWithDate: "Wed 31 Kho 1560",
			DateDoy: "1560.092",
			DateWoy: "1560W14-5",
			DateWithSlash: "1560/03/31",
			DateWithOutSlash: "15600331"
		},
		stime: 6673260600000,
		gdate: [2181, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 20] },
		gtime: 6673260600000
	},
	{
		sdate: [1560, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 1],
			DateTime: "1560-04-01 00:00:00",
			DateAber: "01 Tir 1560",
			DateMonth: "Tir",
			DateYearMonth: "1560-Tir",
			DateYear: "1560",
			DateAberWithDate: "Thu 01 Tir 1560",
			DateDoy: "1560.093",
			DateWoy: "1560W14-6",
			DateWithSlash: "1560/04/01",
			DateWithOutSlash: "15600401"
		},
		stime: 6673347000000,
		gdate: [2181, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 21] },
		gtime: 6673347000000
	},
	{
		sdate: [1560, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 2],
			DateTime: "1560-04-02 00:00:00",
			DateAber: "02 Tir 1560",
			DateMonth: "Tir",
			DateYearMonth: "1560-Tir",
			DateYear: "1560",
			DateAberWithDate: "Fri 02 Tir 1560",
			DateDoy: "1560.094",
			DateWoy: "1560W14-7",
			DateWithSlash: "1560/04/02",
			DateWithOutSlash: "15600402"
		},
		stime: 6673433400000,
		gdate: [2181, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 22] },
		gtime: 6673433400000
	},
	{
		sdate: [1560, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 15],
			DateTime: "1560-04-15 00:00:00",
			DateAber: "15 Tir 1560",
			DateMonth: "Tir",
			DateYearMonth: "1560-Tir",
			DateYear: "1560",
			DateAberWithDate: "Thu 15 Tir 1560",
			DateDoy: "1560.107",
			DateWoy: "1560W16-6",
			DateWithSlash: "1560/04/15",
			DateWithOutSlash: "15600415"
		},
		stime: 6674556600000,
		gdate: [2181, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 5] },
		gtime: 6674556600000
	},
	{
		sdate: [1560, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 30],
			DateTime: "1560-04-30 00:00:00",
			DateAber: "30 Tir 1560",
			DateMonth: "Tir",
			DateYearMonth: "1560-Tir",
			DateYear: "1560",
			DateAberWithDate: "Fri 30 Tir 1560",
			DateDoy: "1560.122",
			DateWoy: "1560W18-7",
			DateWithSlash: "1560/04/30",
			DateWithOutSlash: "15600430"
		},
		stime: 6675852600000,
		gdate: [2181, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 20] },
		gtime: 6675852600000
	},
	{
		sdate: [1560, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 31],
			DateTime: "1560-04-31 00:00:00",
			DateAber: "31 Tir 1560",
			DateMonth: "Tir",
			DateYearMonth: "1560-Tir",
			DateYear: "1560",
			DateAberWithDate: "Sat 31 Tir 1560",
			DateDoy: "1560.123",
			DateWoy: "1560W19-1",
			DateWithSlash: "1560/04/31",
			DateWithOutSlash: "15600431"
		},
		stime: 6675939000000,
		gdate: [2181, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 21] },
		gtime: 6675939000000
	},
	{
		sdate: [1560, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 1],
			DateTime: "1560-05-01 00:00:00",
			DateAber: "01 Amo 1560",
			DateMonth: "Amo",
			DateYearMonth: "1560-Amo",
			DateYear: "1560",
			DateAberWithDate: "Sun 01 Amo 1560",
			DateDoy: "1560.124",
			DateWoy: "1560W19-2",
			DateWithSlash: "1560/05/01",
			DateWithOutSlash: "15600501"
		},
		stime: 6676025400000,
		gdate: [2181, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 22] },
		gtime: 6676025400000
	},
	{
		sdate: [1560, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 2],
			DateTime: "1560-05-02 00:00:00",
			DateAber: "02 Amo 1560",
			DateMonth: "Amo",
			DateYearMonth: "1560-Amo",
			DateYear: "1560",
			DateAberWithDate: "Mon 02 Amo 1560",
			DateDoy: "1560.125",
			DateWoy: "1560W19-3",
			DateWithSlash: "1560/05/02",
			DateWithOutSlash: "15600502"
		},
		stime: 6676111800000,
		gdate: [2181, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 23] },
		gtime: 6676111800000
	},
	{
		sdate: [1560, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 15],
			DateTime: "1560-05-15 00:00:00",
			DateAber: "15 Amo 1560",
			DateMonth: "Amo",
			DateYearMonth: "1560-Amo",
			DateYear: "1560",
			DateAberWithDate: "Sun 15 Amo 1560",
			DateDoy: "1560.138",
			DateWoy: "1560W21-2",
			DateWithSlash: "1560/05/15",
			DateWithOutSlash: "15600515"
		},
		stime: 6677235000000,
		gdate: [2181, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 5] },
		gtime: 6677235000000
	},
	{
		sdate: [1560, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 30],
			DateTime: "1560-05-30 00:00:00",
			DateAber: "30 Amo 1560",
			DateMonth: "Amo",
			DateYearMonth: "1560-Amo",
			DateYear: "1560",
			DateAberWithDate: "Mon 30 Amo 1560",
			DateDoy: "1560.153",
			DateWoy: "1560W23-3",
			DateWithSlash: "1560/05/30",
			DateWithOutSlash: "15600530"
		},
		stime: 6678531000000,
		gdate: [2181, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 20] },
		gtime: 6678531000000
	},
	{
		sdate: [1560, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 31],
			DateTime: "1560-05-31 00:00:00",
			DateAber: "31 Amo 1560",
			DateMonth: "Amo",
			DateYearMonth: "1560-Amo",
			DateYear: "1560",
			DateAberWithDate: "Tue 31 Amo 1560",
			DateDoy: "1560.154",
			DateWoy: "1560W23-4",
			DateWithSlash: "1560/05/31",
			DateWithOutSlash: "15600531"
		},
		stime: 6678617400000,
		gdate: [2181, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 21] },
		gtime: 6678617400000
	},
	{
		sdate: [1560, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 1],
			DateTime: "1560-06-01 00:00:00",
			DateAber: "01 Sha 1560",
			DateMonth: "Sha",
			DateYearMonth: "1560-Sha",
			DateYear: "1560",
			DateAberWithDate: "Wed 01 Sha 1560",
			DateDoy: "1560.155",
			DateWoy: "1560W23-5",
			DateWithSlash: "1560/06/01",
			DateWithOutSlash: "15600601"
		},
		stime: 6678703800000,
		gdate: [2181, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 22] },
		gtime: 6678703800000
	},
	{
		sdate: [1560, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 2],
			DateTime: "1560-06-02 00:00:00",
			DateAber: "02 Sha 1560",
			DateMonth: "Sha",
			DateYearMonth: "1560-Sha",
			DateYear: "1560",
			DateAberWithDate: "Thu 02 Sha 1560",
			DateDoy: "1560.156",
			DateWoy: "1560W23-6",
			DateWithSlash: "1560/06/02",
			DateWithOutSlash: "15600602"
		},
		stime: 6678790200000,
		gdate: [2181, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 23] },
		gtime: 6678790200000
	},
	{
		sdate: [1560, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 15],
			DateTime: "1560-06-15 00:00:00",
			DateAber: "15 Sha 1560",
			DateMonth: "Sha",
			DateYearMonth: "1560-Sha",
			DateYear: "1560",
			DateAberWithDate: "Wed 15 Sha 1560",
			DateDoy: "1560.169",
			DateWoy: "1560W25-5",
			DateWithSlash: "1560/06/15",
			DateWithOutSlash: "15600615"
		},
		stime: 6679913400000,
		gdate: [2181, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 5] },
		gtime: 6679913400000
	},
	{
		sdate: [1560, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 29],
			DateTime: "1560-06-29 00:00:00",
			DateAber: "29 Sha 1560",
			DateMonth: "Sha",
			DateYearMonth: "1560-Sha",
			DateYear: "1560",
			DateAberWithDate: "Wed 29 Sha 1560",
			DateDoy: "1560.183",
			DateWoy: "1560W27-5",
			DateWithSlash: "1560/06/29",
			DateWithOutSlash: "15600629"
		},
		stime: 6681123000000,
		gdate: [2181, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 19] },
		gtime: 6681123000000
	},
	{
		sdate: [1560, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 30],
			DateTime: "1560-06-30 00:00:00",
			DateAber: "30 Sha 1560",
			DateMonth: "Sha",
			DateYearMonth: "1560-Sha",
			DateYear: "1560",
			DateAberWithDate: "Thu 30 Sha 1560",
			DateDoy: "1560.184",
			DateWoy: "1560W27-6",
			DateWithSlash: "1560/06/30",
			DateWithOutSlash: "15600630"
		},
		stime: 6681209400000,
		gdate: [2181, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 20] },
		gtime: 6681209400000
	},
	{
		sdate: [1560, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 1],
			DateTime: "1560-07-01 00:00:00",
			DateAber: "01 Meh 1560",
			DateMonth: "Meh",
			DateYearMonth: "1560-Meh",
			DateYear: "1560",
			DateAberWithDate: "Sat 01 Meh 1560",
			DateDoy: "1560.186",
			DateWoy: "1560W28-1",
			DateWithSlash: "1560/07/01",
			DateWithOutSlash: "15600701"
		},
		stime: 6681385800000,
		gdate: [2181, 9, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 22] },
		gtime: 6681385800000
	},
	{
		sdate: [1560, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 2],
			DateTime: "1560-07-02 00:00:00",
			DateAber: "02 Meh 1560",
			DateMonth: "Meh",
			DateYearMonth: "1560-Meh",
			DateYear: "1560",
			DateAberWithDate: "Sun 02 Meh 1560",
			DateDoy: "1560.187",
			DateWoy: "1560W28-2",
			DateWithSlash: "1560/07/02",
			DateWithOutSlash: "15600702"
		},
		stime: 6681472200000,
		gdate: [2181, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 23] },
		gtime: 6681472200000
	},
	{
		sdate: [1560, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 15],
			DateTime: "1560-07-15 00:00:00",
			DateAber: "15 Meh 1560",
			DateMonth: "Meh",
			DateYearMonth: "1560-Meh",
			DateYear: "1560",
			DateAberWithDate: "Sat 15 Meh 1560",
			DateDoy: "1560.200",
			DateWoy: "1560W30-1",
			DateWithSlash: "1560/07/15",
			DateWithOutSlash: "15600715"
		},
		stime: 6682595400000,
		gdate: [2181, 10, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 9, 6] },
		gtime: 6682595400000
	},
	{
		sdate: [1560, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 29],
			DateTime: "1560-07-29 00:00:00",
			DateAber: "29 Meh 1560",
			DateMonth: "Meh",
			DateYearMonth: "1560-Meh",
			DateYear: "1560",
			DateAberWithDate: "Sat 29 Meh 1560",
			DateDoy: "1560.214",
			DateWoy: "1560W32-1",
			DateWithSlash: "1560/07/29",
			DateWithOutSlash: "15600729"
		},
		stime: 6683805000000,
		gdate: [2181, 10, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 9, 20] },
		gtime: 6683805000000
	},
	{
		sdate: [1560, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 30],
			DateTime: "1560-07-30 00:00:00",
			DateAber: "30 Meh 1560",
			DateMonth: "Meh",
			DateYearMonth: "1560-Meh",
			DateYear: "1560",
			DateAberWithDate: "Sun 30 Meh 1560",
			DateDoy: "1560.215",
			DateWoy: "1560W32-2",
			DateWithSlash: "1560/07/30",
			DateWithOutSlash: "15600730"
		},
		stime: 6683891400000,
		gdate: [2181, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 9, 21] },
		gtime: 6683891400000
	},
	{
		sdate: [1560, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 1],
			DateTime: "1560-08-01 00:00:00",
			DateAber: "01 Aba 1560",
			DateMonth: "Aba",
			DateYearMonth: "1560-Aba",
			DateYear: "1560",
			DateAberWithDate: "Mon 01 Aba 1560",
			DateDoy: "1560.216",
			DateWoy: "1560W32-3",
			DateWithSlash: "1560/08/01",
			DateWithOutSlash: "15600801"
		},
		stime: 6683977800000,
		gdate: [2181, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 9, 22] },
		gtime: 6683977800000
	},
	{
		sdate: [1560, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 2],
			DateTime: "1560-08-02 00:00:00",
			DateAber: "02 Aba 1560",
			DateMonth: "Aba",
			DateYearMonth: "1560-Aba",
			DateYear: "1560",
			DateAberWithDate: "Tue 02 Aba 1560",
			DateDoy: "1560.217",
			DateWoy: "1560W32-4",
			DateWithSlash: "1560/08/02",
			DateWithOutSlash: "15600802"
		},
		stime: 6684064200000,
		gdate: [2181, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 9, 23] },
		gtime: 6684064200000
	},
	{
		sdate: [1560, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 15],
			DateTime: "1560-08-15 00:00:00",
			DateAber: "15 Aba 1560",
			DateMonth: "Aba",
			DateYearMonth: "1560-Aba",
			DateYear: "1560",
			DateAberWithDate: "Mon 15 Aba 1560",
			DateDoy: "1560.230",
			DateWoy: "1560W34-3",
			DateWithSlash: "1560/08/15",
			DateWithOutSlash: "15600815"
		},
		stime: 6685187400000,
		gdate: [2181, 11, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 10, 5] },
		gtime: 6685187400000
	},
	{
		sdate: [1560, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 29],
			DateTime: "1560-08-29 00:00:00",
			DateAber: "29 Aba 1560",
			DateMonth: "Aba",
			DateYearMonth: "1560-Aba",
			DateYear: "1560",
			DateAberWithDate: "Mon 29 Aba 1560",
			DateDoy: "1560.244",
			DateWoy: "1560W36-3",
			DateWithSlash: "1560/08/29",
			DateWithOutSlash: "15600829"
		},
		stime: 6686397000000,
		gdate: [2181, 11, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 10, 19] },
		gtime: 6686397000000
	},
	{
		sdate: [1560, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 30],
			DateTime: "1560-08-30 00:00:00",
			DateAber: "30 Aba 1560",
			DateMonth: "Aba",
			DateYearMonth: "1560-Aba",
			DateYear: "1560",
			DateAberWithDate: "Tue 30 Aba 1560",
			DateDoy: "1560.245",
			DateWoy: "1560W36-4",
			DateWithSlash: "1560/08/30",
			DateWithOutSlash: "15600830"
		},
		stime: 6686483400000,
		gdate: [2181, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 10, 20] },
		gtime: 6686483400000
	},
	{
		sdate: [1560, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 1],
			DateTime: "1560-09-01 00:00:00",
			DateAber: "01 Aza 1560",
			DateMonth: "Aza",
			DateYearMonth: "1560-Aza",
			DateYear: "1560",
			DateAberWithDate: "Wed 01 Aza 1560",
			DateDoy: "1560.246",
			DateWoy: "1560W36-5",
			DateWithSlash: "1560/09/01",
			DateWithOutSlash: "15600901"
		},
		stime: 6686569800000,
		gdate: [2181, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 10, 21] },
		gtime: 6686569800000
	},
	{
		sdate: [1560, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 2],
			DateTime: "1560-09-02 00:00:00",
			DateAber: "02 Aza 1560",
			DateMonth: "Aza",
			DateYearMonth: "1560-Aza",
			DateYear: "1560",
			DateAberWithDate: "Thu 02 Aza 1560",
			DateDoy: "1560.247",
			DateWoy: "1560W36-6",
			DateWithSlash: "1560/09/02",
			DateWithOutSlash: "15600902"
		},
		stime: 6686656200000,
		gdate: [2181, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 10, 22] },
		gtime: 6686656200000
	},
	{
		sdate: [1560, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 15],
			DateTime: "1560-09-15 00:00:00",
			DateAber: "15 Aza 1560",
			DateMonth: "Aza",
			DateYearMonth: "1560-Aza",
			DateYear: "1560",
			DateAberWithDate: "Wed 15 Aza 1560",
			DateDoy: "1560.260",
			DateWoy: "1560W38-5",
			DateWithSlash: "1560/09/15",
			DateWithOutSlash: "15600915"
		},
		stime: 6687779400000,
		gdate: [2181, 12, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 11, 5] },
		gtime: 6687779400000
	},
	{
		sdate: [1560, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 29],
			DateTime: "1560-09-29 00:00:00",
			DateAber: "29 Aza 1560",
			DateMonth: "Aza",
			DateYearMonth: "1560-Aza",
			DateYear: "1560",
			DateAberWithDate: "Wed 29 Aza 1560",
			DateDoy: "1560.274",
			DateWoy: "1560W40-5",
			DateWithSlash: "1560/09/29",
			DateWithOutSlash: "15600929"
		},
		stime: 6688989000000,
		gdate: [2181, 12, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 11, 19] },
		gtime: 6688989000000
	},
	{
		sdate: [1560, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 30],
			DateTime: "1560-09-30 00:00:00",
			DateAber: "30 Aza 1560",
			DateMonth: "Aza",
			DateYearMonth: "1560-Aza",
			DateYear: "1560",
			DateAberWithDate: "Thu 30 Aza 1560",
			DateDoy: "1560.275",
			DateWoy: "1560W40-6",
			DateWithSlash: "1560/09/30",
			DateWithOutSlash: "15600930"
		},
		stime: 6689075400000,
		gdate: [2181, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 11, 20] },
		gtime: 6689075400000
	},
	{
		sdate: [1560, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 1],
			DateTime: "1560-10-01 00:00:00",
			DateAber: "01 Dey 1560",
			DateMonth: "Dey",
			DateYearMonth: "1560-Dey",
			DateYear: "1560",
			DateAberWithDate: "Fri 01 Dey 1560",
			DateDoy: "1560.276",
			DateWoy: "1560W40-7",
			DateWithSlash: "1560/10/01",
			DateWithOutSlash: "15601001"
		},
		stime: 6689161800000,
		gdate: [2181, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 11, 21] },
		gtime: 6689161800000
	},
	{
		sdate: [1560, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 2],
			DateTime: "1560-10-02 00:00:00",
			DateAber: "02 Dey 1560",
			DateMonth: "Dey",
			DateYearMonth: "1560-Dey",
			DateYear: "1560",
			DateAberWithDate: "Sat 02 Dey 1560",
			DateDoy: "1560.277",
			DateWoy: "1560W41-1",
			DateWithSlash: "1560/10/02",
			DateWithOutSlash: "15601002"
		},
		stime: 6689248200000,
		gdate: [2181, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 11, 22] },
		gtime: 6689248200000
	},
	{
		sdate: [1560, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 15],
			DateTime: "1560-10-15 00:00:00",
			DateAber: "15 Dey 1560",
			DateMonth: "Dey",
			DateYearMonth: "1560-Dey",
			DateYear: "1560",
			DateAberWithDate: "Fri 15 Dey 1560",
			DateDoy: "1560.290",
			DateWoy: "1560W42-7",
			DateWithSlash: "1560/10/15",
			DateWithOutSlash: "15601015"
		},
		stime: 6690371400000,
		gdate: [2182, 1, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 0, 4] },
		gtime: 6690371400000
	},
	{
		sdate: [1560, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 29],
			DateTime: "1560-10-29 00:00:00",
			DateAber: "29 Dey 1560",
			DateMonth: "Dey",
			DateYearMonth: "1560-Dey",
			DateYear: "1560",
			DateAberWithDate: "Fri 29 Dey 1560",
			DateDoy: "1560.304",
			DateWoy: "1560W44-7",
			DateWithSlash: "1560/10/29",
			DateWithOutSlash: "15601029"
		},
		stime: 6691581000000,
		gdate: [2182, 1, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 0, 18] },
		gtime: 6691581000000
	},
	{
		sdate: [1560, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 30],
			DateTime: "1560-10-30 00:00:00",
			DateAber: "30 Dey 1560",
			DateMonth: "Dey",
			DateYearMonth: "1560-Dey",
			DateYear: "1560",
			DateAberWithDate: "Sat 30 Dey 1560",
			DateDoy: "1560.305",
			DateWoy: "1560W45-1",
			DateWithSlash: "1560/10/30",
			DateWithOutSlash: "15601030"
		},
		stime: 6691667400000,
		gdate: [2182, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 0, 19] },
		gtime: 6691667400000
	},
	{
		sdate: [1560, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 1],
			DateTime: "1560-11-01 00:00:00",
			DateAber: "01 Bah 1560",
			DateMonth: "Bah",
			DateYearMonth: "1560-Bah",
			DateYear: "1560",
			DateAberWithDate: "Sun 01 Bah 1560",
			DateDoy: "1560.306",
			DateWoy: "1560W45-2",
			DateWithSlash: "1560/11/01",
			DateWithOutSlash: "15601101"
		},
		stime: 6691753800000,
		gdate: [2182, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 0, 20] },
		gtime: 6691753800000
	},
	{
		sdate: [1560, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 2],
			DateTime: "1560-11-02 00:00:00",
			DateAber: "02 Bah 1560",
			DateMonth: "Bah",
			DateYearMonth: "1560-Bah",
			DateYear: "1560",
			DateAberWithDate: "Mon 02 Bah 1560",
			DateDoy: "1560.307",
			DateWoy: "1560W45-3",
			DateWithSlash: "1560/11/02",
			DateWithOutSlash: "15601102"
		},
		stime: 6691840200000,
		gdate: [2182, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 0, 21] },
		gtime: 6691840200000
	},
	{
		sdate: [1560, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 15],
			DateTime: "1560-11-15 00:00:00",
			DateAber: "15 Bah 1560",
			DateMonth: "Bah",
			DateYearMonth: "1560-Bah",
			DateYear: "1560",
			DateAberWithDate: "Sun 15 Bah 1560",
			DateDoy: "1560.320",
			DateWoy: "1560W47-2",
			DateWithSlash: "1560/11/15",
			DateWithOutSlash: "15601115"
		},
		stime: 6692963400000,
		gdate: [2182, 2, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 1, 3] },
		gtime: 6692963400000
	},
	{
		sdate: [1560, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 29],
			DateTime: "1560-11-29 00:00:00",
			DateAber: "29 Bah 1560",
			DateMonth: "Bah",
			DateYearMonth: "1560-Bah",
			DateYear: "1560",
			DateAberWithDate: "Sun 29 Bah 1560",
			DateDoy: "1560.334",
			DateWoy: "1560W49-2",
			DateWithSlash: "1560/11/29",
			DateWithOutSlash: "15601129"
		},
		stime: 6694173000000,
		gdate: [2182, 2, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 1, 17] },
		gtime: 6694173000000
	},
	{
		sdate: [1560, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 30],
			DateTime: "1560-11-30 00:00:00",
			DateAber: "30 Bah 1560",
			DateMonth: "Bah",
			DateYearMonth: "1560-Bah",
			DateYear: "1560",
			DateAberWithDate: "Mon 30 Bah 1560",
			DateDoy: "1560.335",
			DateWoy: "1560W49-3",
			DateWithSlash: "1560/11/30",
			DateWithOutSlash: "15601130"
		},
		stime: 6694259400000,
		gdate: [2182, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 1, 18] },
		gtime: 6694259400000
	},
	{
		sdate: [1560, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 1],
			DateTime: "1560-12-01 00:00:00",
			DateAber: "01 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Tue 01 Esf 1560",
			DateDoy: "1560.336",
			DateWoy: "1560W49-4",
			DateWithSlash: "1560/12/01",
			DateWithOutSlash: "15601201"
		},
		stime: 6694345800000,
		gdate: [2182, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 1, 19] },
		gtime: 6694345800000
	},
	{
		sdate: [1560, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 2],
			DateTime: "1560-12-02 00:00:00",
			DateAber: "02 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Wed 02 Esf 1560",
			DateDoy: "1560.337",
			DateWoy: "1560W49-5",
			DateWithSlash: "1560/12/02",
			DateWithOutSlash: "15601202"
		},
		stime: 6694432200000,
		gdate: [2182, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 1, 20] },
		gtime: 6694432200000
	},
	{
		sdate: [1560, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 3],
			DateTime: "1560-12-03 00:00:00",
			DateAber: "03 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Thu 03 Esf 1560",
			DateDoy: "1560.338",
			DateWoy: "1560W49-6",
			DateWithSlash: "1560/12/03",
			DateWithOutSlash: "15601203"
		},
		stime: 6694518600000,
		gdate: [2182, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 1, 21] },
		gtime: 6694518600000
	},
	{
		sdate: [1560, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 4],
			DateTime: "1560-12-04 00:00:00",
			DateAber: "04 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Fri 04 Esf 1560",
			DateDoy: "1560.339",
			DateWoy: "1560W49-7",
			DateWithSlash: "1560/12/04",
			DateWithOutSlash: "15601204"
		},
		stime: 6694605000000,
		gdate: [2182, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 1, 22] },
		gtime: 6694605000000
	},
	{
		sdate: [1560, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 15],
			DateTime: "1560-12-15 00:00:00",
			DateAber: "15 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Tue 15 Esf 1560",
			DateDoy: "1560.350",
			DateWoy: "1560W51-4",
			DateWithSlash: "1560/12/15",
			DateWithOutSlash: "15601215"
		},
		stime: 6695555400000,
		gdate: [2182, 3, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 5] },
		gtime: 6695555400000
	},
	{
		sdate: [1560, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 25],
			DateTime: "1560-12-25 00:00:00",
			DateAber: "25 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Fri 25 Esf 1560",
			DateDoy: "1560.360",
			DateWoy: "1560W52-7",
			DateWithSlash: "1560/12/25",
			DateWithOutSlash: "15601225"
		},
		stime: 6696419400000,
		gdate: [2182, 3, 15, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 15] },
		gtime: 6696419400000
	},
	{
		sdate: [1560, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 26],
			DateTime: "1560-12-26 00:00:00",
			DateAber: "26 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Sat 26 Esf 1560",
			DateDoy: "1560.361",
			DateWoy: "1560W53-1",
			DateWithSlash: "1560/12/26",
			DateWithOutSlash: "15601226"
		},
		stime: 6696505800000,
		gdate: [2182, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 16] },
		gtime: 6696505800000
	},
	{
		sdate: [1560, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 27],
			DateTime: "1560-12-27 00:00:00",
			DateAber: "27 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Sun 27 Esf 1560",
			DateDoy: "1560.362",
			DateWoy: "1560W53-2",
			DateWithSlash: "1560/12/27",
			DateWithOutSlash: "15601227"
		},
		stime: 6696592200000,
		gdate: [2182, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 17] },
		gtime: 6696592200000
	},
	{
		sdate: [1560, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 28],
			DateTime: "1560-12-28 00:00:00",
			DateAber: "28 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Mon 28 Esf 1560",
			DateDoy: "1560.363",
			DateWoy: "1560W53-3",
			DateWithSlash: "1560/12/28",
			DateWithOutSlash: "15601228"
		},
		stime: 6696678600000,
		gdate: [2182, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 18] },
		gtime: 6696678600000
	},
	{
		sdate: [1560, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 29],
			DateTime: "1560-12-29 00:00:00",
			DateAber: "29 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Tue 29 Esf 1560",
			DateDoy: "1560.364",
			DateWoy: "1560W53-4",
			DateWithSlash: "1560/12/29",
			DateWithOutSlash: "15601229"
		},
		stime: 6696765000000,
		gdate: [2182, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 19] },
		gtime: 6696765000000
	},
	{
		sdate: [1560, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 30],
			DateTime: "1560-12-30 00:00:00",
			DateAber: "30 Esf 1560",
			DateMonth: "Esf",
			DateYearMonth: "1560-Esf",
			DateYear: "1560",
			DateAberWithDate: "Wed 30 Esf 1560",
			DateDoy: "1560.365",
			DateWoy: "1560W53-5",
			DateWithSlash: "1560/12/30",
			DateWithOutSlash: "15601230"
		},
		stime: 6696851400000,
		gdate: [2182, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 20] },
		gtime: 6696851400000
	},
	{
		sdate: [1580, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 1],
			DateTime: "1580-01-01 01:00:00",
			DateAber: "01 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Sat 01 Far 1580",
			DateDoy: "1580.000",
			DateWoy: "1580W01-1",
			DateWithSlash: "1580/01/01",
			DateWithOutSlash: "15800101"
		},
		stime: 7296467400000,
		gdate: [2201, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 21] },
		gtime: 7296467400000
	},
	{
		sdate: [1580, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 2],
			DateTime: "1580-01-02 00:00:00",
			DateAber: "02 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Sun 02 Far 1580",
			DateDoy: "1580.001",
			DateWoy: "1580W01-2",
			DateWithSlash: "1580/01/02",
			DateWithOutSlash: "15800102"
		},
		stime: 7296550200000,
		gdate: [2201, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 22] },
		gtime: 7296550200000
	},
	{
		sdate: [1580, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 3],
			DateTime: "1580-01-03 00:00:00",
			DateAber: "03 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Mon 03 Far 1580",
			DateDoy: "1580.002",
			DateWoy: "1580W01-3",
			DateWithSlash: "1580/01/03",
			DateWithOutSlash: "15800103"
		},
		stime: 7296636600000,
		gdate: [2201, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 23] },
		gtime: 7296636600000
	},
	{
		sdate: [1580, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 4],
			DateTime: "1580-01-04 00:00:00",
			DateAber: "04 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Tue 04 Far 1580",
			DateDoy: "1580.003",
			DateWoy: "1580W01-4",
			DateWithSlash: "1580/01/04",
			DateWithOutSlash: "15800104"
		},
		stime: 7296723000000,
		gdate: [2201, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 24] },
		gtime: 7296723000000
	},
	{
		sdate: [1580, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 5],
			DateTime: "1580-01-05 00:00:00",
			DateAber: "05 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Wed 05 Far 1580",
			DateDoy: "1580.004",
			DateWoy: "1580W01-5",
			DateWithSlash: "1580/01/05",
			DateWithOutSlash: "15800105"
		},
		stime: 7296809400000,
		gdate: [2201, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 25] },
		gtime: 7296809400000
	},
	{
		sdate: [1580, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 6],
			DateTime: "1580-01-06 00:00:00",
			DateAber: "06 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Thu 06 Far 1580",
			DateDoy: "1580.005",
			DateWoy: "1580W01-6",
			DateWithSlash: "1580/01/06",
			DateWithOutSlash: "15800106"
		},
		stime: 7296895800000,
		gdate: [2201, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 26] },
		gtime: 7296895800000
	},
	{
		sdate: [1580, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 7],
			DateTime: "1580-01-07 00:00:00",
			DateAber: "07 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Fri 07 Far 1580",
			DateDoy: "1580.006",
			DateWoy: "1580W01-7",
			DateWithSlash: "1580/01/07",
			DateWithOutSlash: "15800107"
		},
		stime: 7296982200000,
		gdate: [2201, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 27] },
		gtime: 7296982200000
	},
	{
		sdate: [1580, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 15],
			DateTime: "1580-01-15 00:00:00",
			DateAber: "15 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Sat 15 Far 1580",
			DateDoy: "1580.014",
			DateWoy: "1580W03-1",
			DateWithSlash: "1580/01/15",
			DateWithOutSlash: "15800115"
		},
		stime: 7297673400000,
		gdate: [2201, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 4] },
		gtime: 7297673400000
	},
	{
		sdate: [1580, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 29],
			DateTime: "1580-01-29 00:00:00",
			DateAber: "29 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Sat 29 Far 1580",
			DateDoy: "1580.028",
			DateWoy: "1580W05-1",
			DateWithSlash: "1580/01/29",
			DateWithOutSlash: "15800129"
		},
		stime: 7298883000000,
		gdate: [2201, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 18] },
		gtime: 7298883000000
	},
	{
		sdate: [1580, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 30],
			DateTime: "1580-01-30 00:00:00",
			DateAber: "30 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Sun 30 Far 1580",
			DateDoy: "1580.029",
			DateWoy: "1580W05-2",
			DateWithSlash: "1580/01/30",
			DateWithOutSlash: "15800130"
		},
		stime: 7298969400000,
		gdate: [2201, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 19] },
		gtime: 7298969400000
	},
	{
		sdate: [1580, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 31],
			DateTime: "1580-01-31 00:00:00",
			DateAber: "31 Far 1580",
			DateMonth: "Far",
			DateYearMonth: "1580-Far",
			DateYear: "1580",
			DateAberWithDate: "Mon 31 Far 1580",
			DateDoy: "1580.030",
			DateWoy: "1580W05-3",
			DateWithSlash: "1580/01/31",
			DateWithOutSlash: "15800131"
		},
		stime: 7299055800000,
		gdate: [2201, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 20] },
		gtime: 7299055800000
	},
	{
		sdate: [1580, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 1],
			DateTime: "1580-02-01 00:00:00",
			DateAber: "01 Ord 1580",
			DateMonth: "Ord",
			DateYearMonth: "1580-Ord",
			DateYear: "1580",
			DateAberWithDate: "Tue 01 Ord 1580",
			DateDoy: "1580.031",
			DateWoy: "1580W05-4",
			DateWithSlash: "1580/02/01",
			DateWithOutSlash: "15800201"
		},
		stime: 7299142200000,
		gdate: [2201, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 21] },
		gtime: 7299142200000
	},
	{
		sdate: [1580, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 2],
			DateTime: "1580-02-02 00:00:00",
			DateAber: "02 Ord 1580",
			DateMonth: "Ord",
			DateYearMonth: "1580-Ord",
			DateYear: "1580",
			DateAberWithDate: "Wed 02 Ord 1580",
			DateDoy: "1580.032",
			DateWoy: "1580W05-5",
			DateWithSlash: "1580/02/02",
			DateWithOutSlash: "15800202"
		},
		stime: 7299228600000,
		gdate: [2201, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 22] },
		gtime: 7299228600000
	},
	{
		sdate: [1580, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 15],
			DateTime: "1580-02-15 00:00:00",
			DateAber: "15 Ord 1580",
			DateMonth: "Ord",
			DateYearMonth: "1580-Ord",
			DateYear: "1580",
			DateAberWithDate: "Tue 15 Ord 1580",
			DateDoy: "1580.045",
			DateWoy: "1580W07-4",
			DateWithSlash: "1580/02/15",
			DateWithOutSlash: "15800215"
		},
		stime: 7300351800000,
		gdate: [2201, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 5] },
		gtime: 7300351800000
	},
	{
		sdate: [1580, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 30],
			DateTime: "1580-02-30 00:00:00",
			DateAber: "30 Ord 1580",
			DateMonth: "Ord",
			DateYearMonth: "1580-Ord",
			DateYear: "1580",
			DateAberWithDate: "Wed 30 Ord 1580",
			DateDoy: "1580.060",
			DateWoy: "1580W09-5",
			DateWithSlash: "1580/02/30",
			DateWithOutSlash: "15800230"
		},
		stime: 7301647800000,
		gdate: [2201, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 20] },
		gtime: 7301647800000
	},
	{
		sdate: [1580, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 31],
			DateTime: "1580-02-31 00:00:00",
			DateAber: "31 Ord 1580",
			DateMonth: "Ord",
			DateYearMonth: "1580-Ord",
			DateYear: "1580",
			DateAberWithDate: "Thu 31 Ord 1580",
			DateDoy: "1580.061",
			DateWoy: "1580W09-6",
			DateWithSlash: "1580/02/31",
			DateWithOutSlash: "15800231"
		},
		stime: 7301734200000,
		gdate: [2201, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 21] },
		gtime: 7301734200000
	},
	{
		sdate: [1580, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 1],
			DateTime: "1580-03-01 00:00:00",
			DateAber: "01 Kho 1580",
			DateMonth: "Kho",
			DateYearMonth: "1580-Kho",
			DateYear: "1580",
			DateAberWithDate: "Fri 01 Kho 1580",
			DateDoy: "1580.062",
			DateWoy: "1580W09-7",
			DateWithSlash: "1580/03/01",
			DateWithOutSlash: "15800301"
		},
		stime: 7301820600000,
		gdate: [2201, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 22] },
		gtime: 7301820600000
	},
	{
		sdate: [1580, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 2],
			DateTime: "1580-03-02 00:00:00",
			DateAber: "02 Kho 1580",
			DateMonth: "Kho",
			DateYearMonth: "1580-Kho",
			DateYear: "1580",
			DateAberWithDate: "Sat 02 Kho 1580",
			DateDoy: "1580.063",
			DateWoy: "1580W10-1",
			DateWithSlash: "1580/03/02",
			DateWithOutSlash: "15800302"
		},
		stime: 7301907000000,
		gdate: [2201, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 23] },
		gtime: 7301907000000
	},
	{
		sdate: [1580, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 15],
			DateTime: "1580-03-15 00:00:00",
			DateAber: "15 Kho 1580",
			DateMonth: "Kho",
			DateYearMonth: "1580-Kho",
			DateYear: "1580",
			DateAberWithDate: "Fri 15 Kho 1580",
			DateDoy: "1580.076",
			DateWoy: "1580W11-7",
			DateWithSlash: "1580/03/15",
			DateWithOutSlash: "15800315"
		},
		stime: 7303030200000,
		gdate: [2201, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 5] },
		gtime: 7303030200000
	},
	{
		sdate: [1580, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 30],
			DateTime: "1580-03-30 00:00:00",
			DateAber: "30 Kho 1580",
			DateMonth: "Kho",
			DateYearMonth: "1580-Kho",
			DateYear: "1580",
			DateAberWithDate: "Sat 30 Kho 1580",
			DateDoy: "1580.091",
			DateWoy: "1580W14-1",
			DateWithSlash: "1580/03/30",
			DateWithOutSlash: "15800330"
		},
		stime: 7304326200000,
		gdate: [2201, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 20] },
		gtime: 7304326200000
	},
	{
		sdate: [1580, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 31],
			DateTime: "1580-03-31 00:00:00",
			DateAber: "31 Kho 1580",
			DateMonth: "Kho",
			DateYearMonth: "1580-Kho",
			DateYear: "1580",
			DateAberWithDate: "Sun 31 Kho 1580",
			DateDoy: "1580.092",
			DateWoy: "1580W14-2",
			DateWithSlash: "1580/03/31",
			DateWithOutSlash: "15800331"
		},
		stime: 7304412600000,
		gdate: [2201, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 21] },
		gtime: 7304412600000
	},
	{
		sdate: [1580, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 1],
			DateTime: "1580-04-01 00:00:00",
			DateAber: "01 Tir 1580",
			DateMonth: "Tir",
			DateYearMonth: "1580-Tir",
			DateYear: "1580",
			DateAberWithDate: "Mon 01 Tir 1580",
			DateDoy: "1580.093",
			DateWoy: "1580W14-3",
			DateWithSlash: "1580/04/01",
			DateWithOutSlash: "15800401"
		},
		stime: 7304499000000,
		gdate: [2201, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 22] },
		gtime: 7304499000000
	},
	{
		sdate: [1580, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 2],
			DateTime: "1580-04-02 00:00:00",
			DateAber: "02 Tir 1580",
			DateMonth: "Tir",
			DateYearMonth: "1580-Tir",
			DateYear: "1580",
			DateAberWithDate: "Tue 02 Tir 1580",
			DateDoy: "1580.094",
			DateWoy: "1580W14-4",
			DateWithSlash: "1580/04/02",
			DateWithOutSlash: "15800402"
		},
		stime: 7304585400000,
		gdate: [2201, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 23] },
		gtime: 7304585400000
	},
	{
		sdate: [1580, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 15],
			DateTime: "1580-04-15 00:00:00",
			DateAber: "15 Tir 1580",
			DateMonth: "Tir",
			DateYearMonth: "1580-Tir",
			DateYear: "1580",
			DateAberWithDate: "Mon 15 Tir 1580",
			DateDoy: "1580.107",
			DateWoy: "1580W16-3",
			DateWithSlash: "1580/04/15",
			DateWithOutSlash: "15800415"
		},
		stime: 7305708600000,
		gdate: [2201, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 6] },
		gtime: 7305708600000
	},
	{
		sdate: [1580, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 30],
			DateTime: "1580-04-30 00:00:00",
			DateAber: "30 Tir 1580",
			DateMonth: "Tir",
			DateYearMonth: "1580-Tir",
			DateYear: "1580",
			DateAberWithDate: "Tue 30 Tir 1580",
			DateDoy: "1580.122",
			DateWoy: "1580W18-4",
			DateWithSlash: "1580/04/30",
			DateWithOutSlash: "15800430"
		},
		stime: 7307004600000,
		gdate: [2201, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 21] },
		gtime: 7307004600000
	},
	{
		sdate: [1580, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 31],
			DateTime: "1580-04-31 00:00:00",
			DateAber: "31 Tir 1580",
			DateMonth: "Tir",
			DateYearMonth: "1580-Tir",
			DateYear: "1580",
			DateAberWithDate: "Wed 31 Tir 1580",
			DateDoy: "1580.123",
			DateWoy: "1580W18-5",
			DateWithSlash: "1580/04/31",
			DateWithOutSlash: "15800431"
		},
		stime: 7307091000000,
		gdate: [2201, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 22] },
		gtime: 7307091000000
	},
	{
		sdate: [1580, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 1],
			DateTime: "1580-05-01 00:00:00",
			DateAber: "01 Amo 1580",
			DateMonth: "Amo",
			DateYearMonth: "1580-Amo",
			DateYear: "1580",
			DateAberWithDate: "Thu 01 Amo 1580",
			DateDoy: "1580.124",
			DateWoy: "1580W18-6",
			DateWithSlash: "1580/05/01",
			DateWithOutSlash: "15800501"
		},
		stime: 7307177400000,
		gdate: [2201, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 23] },
		gtime: 7307177400000
	},
	{
		sdate: [1580, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 2],
			DateTime: "1580-05-02 00:00:00",
			DateAber: "02 Amo 1580",
			DateMonth: "Amo",
			DateYearMonth: "1580-Amo",
			DateYear: "1580",
			DateAberWithDate: "Fri 02 Amo 1580",
			DateDoy: "1580.125",
			DateWoy: "1580W18-7",
			DateWithSlash: "1580/05/02",
			DateWithOutSlash: "15800502"
		},
		stime: 7307263800000,
		gdate: [2201, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 24] },
		gtime: 7307263800000
	},
	{
		sdate: [1580, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 15],
			DateTime: "1580-05-15 00:00:00",
			DateAber: "15 Amo 1580",
			DateMonth: "Amo",
			DateYearMonth: "1580-Amo",
			DateYear: "1580",
			DateAberWithDate: "Thu 15 Amo 1580",
			DateDoy: "1580.138",
			DateWoy: "1580W20-6",
			DateWithSlash: "1580/05/15",
			DateWithOutSlash: "15800515"
		},
		stime: 7308387000000,
		gdate: [2201, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 6] },
		gtime: 7308387000000
	},
	{
		sdate: [1580, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 30],
			DateTime: "1580-05-30 00:00:00",
			DateAber: "30 Amo 1580",
			DateMonth: "Amo",
			DateYearMonth: "1580-Amo",
			DateYear: "1580",
			DateAberWithDate: "Fri 30 Amo 1580",
			DateDoy: "1580.153",
			DateWoy: "1580W22-7",
			DateWithSlash: "1580/05/30",
			DateWithOutSlash: "15800530"
		},
		stime: 7309683000000,
		gdate: [2201, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 21] },
		gtime: 7309683000000
	},
	{
		sdate: [1580, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 31],
			DateTime: "1580-05-31 00:00:00",
			DateAber: "31 Amo 1580",
			DateMonth: "Amo",
			DateYearMonth: "1580-Amo",
			DateYear: "1580",
			DateAberWithDate: "Sat 31 Amo 1580",
			DateDoy: "1580.154",
			DateWoy: "1580W23-1",
			DateWithSlash: "1580/05/31",
			DateWithOutSlash: "15800531"
		},
		stime: 7309769400000,
		gdate: [2201, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 22] },
		gtime: 7309769400000
	},
	{
		sdate: [1580, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 1],
			DateTime: "1580-06-01 00:00:00",
			DateAber: "01 Sha 1580",
			DateMonth: "Sha",
			DateYearMonth: "1580-Sha",
			DateYear: "1580",
			DateAberWithDate: "Sun 01 Sha 1580",
			DateDoy: "1580.155",
			DateWoy: "1580W23-2",
			DateWithSlash: "1580/06/01",
			DateWithOutSlash: "15800601"
		},
		stime: 7309855800000,
		gdate: [2201, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 23] },
		gtime: 7309855800000
	},
	{
		sdate: [1580, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 2],
			DateTime: "1580-06-02 00:00:00",
			DateAber: "02 Sha 1580",
			DateMonth: "Sha",
			DateYearMonth: "1580-Sha",
			DateYear: "1580",
			DateAberWithDate: "Mon 02 Sha 1580",
			DateDoy: "1580.156",
			DateWoy: "1580W23-3",
			DateWithSlash: "1580/06/02",
			DateWithOutSlash: "15800602"
		},
		stime: 7309942200000,
		gdate: [2201, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 24] },
		gtime: 7309942200000
	},
	{
		sdate: [1580, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 15],
			DateTime: "1580-06-15 00:00:00",
			DateAber: "15 Sha 1580",
			DateMonth: "Sha",
			DateYearMonth: "1580-Sha",
			DateYear: "1580",
			DateAberWithDate: "Sun 15 Sha 1580",
			DateDoy: "1580.169",
			DateWoy: "1580W25-2",
			DateWithSlash: "1580/06/15",
			DateWithOutSlash: "15800615"
		},
		stime: 7311065400000,
		gdate: [2201, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 8, 6] },
		gtime: 7311065400000
	},
	{
		sdate: [1580, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 29],
			DateTime: "1580-06-29 00:00:00",
			DateAber: "29 Sha 1580",
			DateMonth: "Sha",
			DateYearMonth: "1580-Sha",
			DateYear: "1580",
			DateAberWithDate: "Sun 29 Sha 1580",
			DateDoy: "1580.183",
			DateWoy: "1580W27-2",
			DateWithSlash: "1580/06/29",
			DateWithOutSlash: "15800629"
		},
		stime: 7312275000000,
		gdate: [2201, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 8, 20] },
		gtime: 7312275000000
	},
	{
		sdate: [1580, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 30],
			DateTime: "1580-06-30 00:00:00",
			DateAber: "30 Sha 1580",
			DateMonth: "Sha",
			DateYearMonth: "1580-Sha",
			DateYear: "1580",
			DateAberWithDate: "Mon 30 Sha 1580",
			DateDoy: "1580.184",
			DateWoy: "1580W27-3",
			DateWithSlash: "1580/06/30",
			DateWithOutSlash: "15800630"
		},
		stime: 7312365000000,
		gdate: [2201, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 8, 21] },
		gtime: 7312365000000
	},
	{
		sdate: [1580, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 1],
			DateTime: "1580-07-01 00:00:00",
			DateAber: "01 Meh 1580",
			DateMonth: "Meh",
			DateYearMonth: "1580-Meh",
			DateYear: "1580",
			DateAberWithDate: "Wed 01 Meh 1580",
			DateDoy: "1580.186",
			DateWoy: "1580W27-5",
			DateWithSlash: "1580/07/01",
			DateWithOutSlash: "15800701"
		},
		stime: 7312537800000,
		gdate: [2201, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 8, 23] },
		gtime: 7312537800000
	},
	{
		sdate: [1580, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 2],
			DateTime: "1580-07-02 00:00:00",
			DateAber: "02 Meh 1580",
			DateMonth: "Meh",
			DateYearMonth: "1580-Meh",
			DateYear: "1580",
			DateAberWithDate: "Thu 02 Meh 1580",
			DateDoy: "1580.187",
			DateWoy: "1580W27-6",
			DateWithSlash: "1580/07/02",
			DateWithOutSlash: "15800702"
		},
		stime: 7312624200000,
		gdate: [2201, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 8, 24] },
		gtime: 7312624200000
	},
	{
		sdate: [1580, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 15],
			DateTime: "1580-07-15 00:00:00",
			DateAber: "15 Meh 1580",
			DateMonth: "Meh",
			DateYearMonth: "1580-Meh",
			DateYear: "1580",
			DateAberWithDate: "Wed 15 Meh 1580",
			DateDoy: "1580.200",
			DateWoy: "1580W29-5",
			DateWithSlash: "1580/07/15",
			DateWithOutSlash: "15800715"
		},
		stime: 7313747400000,
		gdate: [2201, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 9, 7] },
		gtime: 7313747400000
	},
	{
		sdate: [1580, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 29],
			DateTime: "1580-07-29 00:00:00",
			DateAber: "29 Meh 1580",
			DateMonth: "Meh",
			DateYearMonth: "1580-Meh",
			DateYear: "1580",
			DateAberWithDate: "Wed 29 Meh 1580",
			DateDoy: "1580.214",
			DateWoy: "1580W31-5",
			DateWithSlash: "1580/07/29",
			DateWithOutSlash: "15800729"
		},
		stime: 7314957000000,
		gdate: [2201, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 9, 21] },
		gtime: 7314957000000
	},
	{
		sdate: [1580, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 30],
			DateTime: "1580-07-30 00:00:00",
			DateAber: "30 Meh 1580",
			DateMonth: "Meh",
			DateYearMonth: "1580-Meh",
			DateYear: "1580",
			DateAberWithDate: "Thu 30 Meh 1580",
			DateDoy: "1580.215",
			DateWoy: "1580W31-6",
			DateWithSlash: "1580/07/30",
			DateWithOutSlash: "15800730"
		},
		stime: 7315043400000,
		gdate: [2201, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 9, 22] },
		gtime: 7315043400000
	},
	{
		sdate: [1580, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 1],
			DateTime: "1580-08-01 00:00:00",
			DateAber: "01 Aba 1580",
			DateMonth: "Aba",
			DateYearMonth: "1580-Aba",
			DateYear: "1580",
			DateAberWithDate: "Fri 01 Aba 1580",
			DateDoy: "1580.216",
			DateWoy: "1580W31-7",
			DateWithSlash: "1580/08/01",
			DateWithOutSlash: "15800801"
		},
		stime: 7315129800000,
		gdate: [2201, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 9, 23] },
		gtime: 7315129800000
	},
	{
		sdate: [1580, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 2],
			DateTime: "1580-08-02 00:00:00",
			DateAber: "02 Aba 1580",
			DateMonth: "Aba",
			DateYearMonth: "1580-Aba",
			DateYear: "1580",
			DateAberWithDate: "Sat 02 Aba 1580",
			DateDoy: "1580.217",
			DateWoy: "1580W32-1",
			DateWithSlash: "1580/08/02",
			DateWithOutSlash: "15800802"
		},
		stime: 7315216200000,
		gdate: [2201, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 9, 24] },
		gtime: 7315216200000
	},
	{
		sdate: [1580, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 15],
			DateTime: "1580-08-15 00:00:00",
			DateAber: "15 Aba 1580",
			DateMonth: "Aba",
			DateYearMonth: "1580-Aba",
			DateYear: "1580",
			DateAberWithDate: "Fri 15 Aba 1580",
			DateDoy: "1580.230",
			DateWoy: "1580W33-7",
			DateWithSlash: "1580/08/15",
			DateWithOutSlash: "15800815"
		},
		stime: 7316339400000,
		gdate: [2201, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 10, 6] },
		gtime: 7316339400000
	},
	{
		sdate: [1580, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 29],
			DateTime: "1580-08-29 00:00:00",
			DateAber: "29 Aba 1580",
			DateMonth: "Aba",
			DateYearMonth: "1580-Aba",
			DateYear: "1580",
			DateAberWithDate: "Fri 29 Aba 1580",
			DateDoy: "1580.244",
			DateWoy: "1580W35-7",
			DateWithSlash: "1580/08/29",
			DateWithOutSlash: "15800829"
		},
		stime: 7317549000000,
		gdate: [2201, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 10, 20] },
		gtime: 7317549000000
	},
	{
		sdate: [1580, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 30],
			DateTime: "1580-08-30 00:00:00",
			DateAber: "30 Aba 1580",
			DateMonth: "Aba",
			DateYearMonth: "1580-Aba",
			DateYear: "1580",
			DateAberWithDate: "Sat 30 Aba 1580",
			DateDoy: "1580.245",
			DateWoy: "1580W36-1",
			DateWithSlash: "1580/08/30",
			DateWithOutSlash: "15800830"
		},
		stime: 7317635400000,
		gdate: [2201, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 10, 21] },
		gtime: 7317635400000
	},
	{
		sdate: [1580, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 1],
			DateTime: "1580-09-01 00:00:00",
			DateAber: "01 Aza 1580",
			DateMonth: "Aza",
			DateYearMonth: "1580-Aza",
			DateYear: "1580",
			DateAberWithDate: "Sun 01 Aza 1580",
			DateDoy: "1580.246",
			DateWoy: "1580W36-2",
			DateWithSlash: "1580/09/01",
			DateWithOutSlash: "15800901"
		},
		stime: 7317721800000,
		gdate: [2201, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 10, 22] },
		gtime: 7317721800000
	},
	{
		sdate: [1580, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 2],
			DateTime: "1580-09-02 00:00:00",
			DateAber: "02 Aza 1580",
			DateMonth: "Aza",
			DateYearMonth: "1580-Aza",
			DateYear: "1580",
			DateAberWithDate: "Mon 02 Aza 1580",
			DateDoy: "1580.247",
			DateWoy: "1580W36-3",
			DateWithSlash: "1580/09/02",
			DateWithOutSlash: "15800902"
		},
		stime: 7317808200000,
		gdate: [2201, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 10, 23] },
		gtime: 7317808200000
	},
	{
		sdate: [1580, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 15],
			DateTime: "1580-09-15 00:00:00",
			DateAber: "15 Aza 1580",
			DateMonth: "Aza",
			DateYearMonth: "1580-Aza",
			DateYear: "1580",
			DateAberWithDate: "Sun 15 Aza 1580",
			DateDoy: "1580.260",
			DateWoy: "1580W38-2",
			DateWithSlash: "1580/09/15",
			DateWithOutSlash: "15800915"
		},
		stime: 7318931400000,
		gdate: [2201, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 11, 6] },
		gtime: 7318931400000
	},
	{
		sdate: [1580, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 29],
			DateTime: "1580-09-29 00:00:00",
			DateAber: "29 Aza 1580",
			DateMonth: "Aza",
			DateYearMonth: "1580-Aza",
			DateYear: "1580",
			DateAberWithDate: "Sun 29 Aza 1580",
			DateDoy: "1580.274",
			DateWoy: "1580W40-2",
			DateWithSlash: "1580/09/29",
			DateWithOutSlash: "15800929"
		},
		stime: 7320141000000,
		gdate: [2201, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 11, 20] },
		gtime: 7320141000000
	},
	{
		sdate: [1580, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 30],
			DateTime: "1580-09-30 00:00:00",
			DateAber: "30 Aza 1580",
			DateMonth: "Aza",
			DateYearMonth: "1580-Aza",
			DateYear: "1580",
			DateAberWithDate: "Mon 30 Aza 1580",
			DateDoy: "1580.275",
			DateWoy: "1580W40-3",
			DateWithSlash: "1580/09/30",
			DateWithOutSlash: "15800930"
		},
		stime: 7320227400000,
		gdate: [2201, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 11, 21] },
		gtime: 7320227400000
	},
	{
		sdate: [1580, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 1],
			DateTime: "1580-10-01 00:00:00",
			DateAber: "01 Dey 1580",
			DateMonth: "Dey",
			DateYearMonth: "1580-Dey",
			DateYear: "1580",
			DateAberWithDate: "Tue 01 Dey 1580",
			DateDoy: "1580.276",
			DateWoy: "1580W40-4",
			DateWithSlash: "1580/10/01",
			DateWithOutSlash: "15801001"
		},
		stime: 7320313800000,
		gdate: [2201, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 11, 22] },
		gtime: 7320313800000
	},
	{
		sdate: [1580, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 2],
			DateTime: "1580-10-02 00:00:00",
			DateAber: "02 Dey 1580",
			DateMonth: "Dey",
			DateYearMonth: "1580-Dey",
			DateYear: "1580",
			DateAberWithDate: "Wed 02 Dey 1580",
			DateDoy: "1580.277",
			DateWoy: "1580W40-5",
			DateWithSlash: "1580/10/02",
			DateWithOutSlash: "15801002"
		},
		stime: 7320400200000,
		gdate: [2201, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 11, 23] },
		gtime: 7320400200000
	},
	{
		sdate: [1580, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 15],
			DateTime: "1580-10-15 00:00:00",
			DateAber: "15 Dey 1580",
			DateMonth: "Dey",
			DateYearMonth: "1580-Dey",
			DateYear: "1580",
			DateAberWithDate: "Tue 15 Dey 1580",
			DateDoy: "1580.290",
			DateWoy: "1580W42-4",
			DateWithSlash: "1580/10/15",
			DateWithOutSlash: "15801015"
		},
		stime: 7321523400000,
		gdate: [2202, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 0, 5] },
		gtime: 7321523400000
	},
	{
		sdate: [1580, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 29],
			DateTime: "1580-10-29 00:00:00",
			DateAber: "29 Dey 1580",
			DateMonth: "Dey",
			DateYearMonth: "1580-Dey",
			DateYear: "1580",
			DateAberWithDate: "Tue 29 Dey 1580",
			DateDoy: "1580.304",
			DateWoy: "1580W44-4",
			DateWithSlash: "1580/10/29",
			DateWithOutSlash: "15801029"
		},
		stime: 7322733000000,
		gdate: [2202, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 0, 19] },
		gtime: 7322733000000
	},
	{
		sdate: [1580, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 30],
			DateTime: "1580-10-30 00:00:00",
			DateAber: "30 Dey 1580",
			DateMonth: "Dey",
			DateYearMonth: "1580-Dey",
			DateYear: "1580",
			DateAberWithDate: "Wed 30 Dey 1580",
			DateDoy: "1580.305",
			DateWoy: "1580W44-5",
			DateWithSlash: "1580/10/30",
			DateWithOutSlash: "15801030"
		},
		stime: 7322819400000,
		gdate: [2202, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 0, 20] },
		gtime: 7322819400000
	},
	{
		sdate: [1580, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 1],
			DateTime: "1580-11-01 00:00:00",
			DateAber: "01 Bah 1580",
			DateMonth: "Bah",
			DateYearMonth: "1580-Bah",
			DateYear: "1580",
			DateAberWithDate: "Thu 01 Bah 1580",
			DateDoy: "1580.306",
			DateWoy: "1580W44-6",
			DateWithSlash: "1580/11/01",
			DateWithOutSlash: "15801101"
		},
		stime: 7322905800000,
		gdate: [2202, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 0, 21] },
		gtime: 7322905800000
	},
	{
		sdate: [1580, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 2],
			DateTime: "1580-11-02 00:00:00",
			DateAber: "02 Bah 1580",
			DateMonth: "Bah",
			DateYearMonth: "1580-Bah",
			DateYear: "1580",
			DateAberWithDate: "Fri 02 Bah 1580",
			DateDoy: "1580.307",
			DateWoy: "1580W44-7",
			DateWithSlash: "1580/11/02",
			DateWithOutSlash: "15801102"
		},
		stime: 7322992200000,
		gdate: [2202, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 0, 22] },
		gtime: 7322992200000
	},
	{
		sdate: [1580, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 15],
			DateTime: "1580-11-15 00:00:00",
			DateAber: "15 Bah 1580",
			DateMonth: "Bah",
			DateYearMonth: "1580-Bah",
			DateYear: "1580",
			DateAberWithDate: "Thu 15 Bah 1580",
			DateDoy: "1580.320",
			DateWoy: "1580W46-6",
			DateWithSlash: "1580/11/15",
			DateWithOutSlash: "15801115"
		},
		stime: 7324115400000,
		gdate: [2202, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 1, 4] },
		gtime: 7324115400000
	},
	{
		sdate: [1580, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 29],
			DateTime: "1580-11-29 00:00:00",
			DateAber: "29 Bah 1580",
			DateMonth: "Bah",
			DateYearMonth: "1580-Bah",
			DateYear: "1580",
			DateAberWithDate: "Thu 29 Bah 1580",
			DateDoy: "1580.334",
			DateWoy: "1580W48-6",
			DateWithSlash: "1580/11/29",
			DateWithOutSlash: "15801129"
		},
		stime: 7325325000000,
		gdate: [2202, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 1, 18] },
		gtime: 7325325000000
	},
	{
		sdate: [1580, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 30],
			DateTime: "1580-11-30 00:00:00",
			DateAber: "30 Bah 1580",
			DateMonth: "Bah",
			DateYearMonth: "1580-Bah",
			DateYear: "1580",
			DateAberWithDate: "Fri 30 Bah 1580",
			DateDoy: "1580.335",
			DateWoy: "1580W48-7",
			DateWithSlash: "1580/11/30",
			DateWithOutSlash: "15801130"
		},
		stime: 7325411400000,
		gdate: [2202, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 1, 19] },
		gtime: 7325411400000
	},
	{
		sdate: [1580, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 1],
			DateTime: "1580-12-01 00:00:00",
			DateAber: "01 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Sat 01 Esf 1580",
			DateDoy: "1580.336",
			DateWoy: "1580W49-1",
			DateWithSlash: "1580/12/01",
			DateWithOutSlash: "15801201"
		},
		stime: 7325497800000,
		gdate: [2202, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 1, 20] },
		gtime: 7325497800000
	},
	{
		sdate: [1580, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 2],
			DateTime: "1580-12-02 00:00:00",
			DateAber: "02 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Sun 02 Esf 1580",
			DateDoy: "1580.337",
			DateWoy: "1580W49-2",
			DateWithSlash: "1580/12/02",
			DateWithOutSlash: "15801202"
		},
		stime: 7325584200000,
		gdate: [2202, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 1, 21] },
		gtime: 7325584200000
	},
	{
		sdate: [1580, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 3],
			DateTime: "1580-12-03 00:00:00",
			DateAber: "03 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Mon 03 Esf 1580",
			DateDoy: "1580.338",
			DateWoy: "1580W49-3",
			DateWithSlash: "1580/12/03",
			DateWithOutSlash: "15801203"
		},
		stime: 7325670600000,
		gdate: [2202, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 1, 22] },
		gtime: 7325670600000
	},
	{
		sdate: [1580, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 4],
			DateTime: "1580-12-04 00:00:00",
			DateAber: "04 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Tue 04 Esf 1580",
			DateDoy: "1580.339",
			DateWoy: "1580W49-4",
			DateWithSlash: "1580/12/04",
			DateWithOutSlash: "15801204"
		},
		stime: 7325757000000,
		gdate: [2202, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 1, 23] },
		gtime: 7325757000000
	},
	{
		sdate: [1580, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 15],
			DateTime: "1580-12-15 00:00:00",
			DateAber: "15 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Sat 15 Esf 1580",
			DateDoy: "1580.350",
			DateWoy: "1580W51-1",
			DateWithSlash: "1580/12/15",
			DateWithOutSlash: "15801215"
		},
		stime: 7326707400000,
		gdate: [2202, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 2, 6] },
		gtime: 7326707400000
	},
	{
		sdate: [1580, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 25],
			DateTime: "1580-12-25 00:00:00",
			DateAber: "25 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Tue 25 Esf 1580",
			DateDoy: "1580.360",
			DateWoy: "1580W52-4",
			DateWithSlash: "1580/12/25",
			DateWithOutSlash: "15801225"
		},
		stime: 7327571400000,
		gdate: [2202, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 2, 16] },
		gtime: 7327571400000
	},
	{
		sdate: [1580, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 26],
			DateTime: "1580-12-26 00:00:00",
			DateAber: "26 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Wed 26 Esf 1580",
			DateDoy: "1580.361",
			DateWoy: "1580W52-5",
			DateWithSlash: "1580/12/26",
			DateWithOutSlash: "15801226"
		},
		stime: 7327657800000,
		gdate: [2202, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 2, 17] },
		gtime: 7327657800000
	},
	{
		sdate: [1580, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 27],
			DateTime: "1580-12-27 00:00:00",
			DateAber: "27 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Thu 27 Esf 1580",
			DateDoy: "1580.362",
			DateWoy: "1580W52-6",
			DateWithSlash: "1580/12/27",
			DateWithOutSlash: "15801227"
		},
		stime: 7327744200000,
		gdate: [2202, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 2, 18] },
		gtime: 7327744200000
	},
	{
		sdate: [1580, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 28],
			DateTime: "1580-12-28 00:00:00",
			DateAber: "28 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Fri 28 Esf 1580",
			DateDoy: "1580.363",
			DateWoy: "1580W52-7",
			DateWithSlash: "1580/12/28",
			DateWithOutSlash: "15801228"
		},
		stime: 7327830600000,
		gdate: [2202, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 2, 19] },
		gtime: 7327830600000
	},
	{
		sdate: [1580, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 29],
			DateTime: "1580-12-29 00:00:00",
			DateAber: "29 Esf 1580",
			DateMonth: "Esf",
			DateYearMonth: "1580-Esf",
			DateYear: "1580",
			DateAberWithDate: "Sat 29 Esf 1580",
			DateDoy: "1580.364",
			DateWoy: "1581W01-1",
			DateWithSlash: "1580/12/29",
			DateWithOutSlash: "15801229"
		},
		stime: 7327917000000,
		gdate: [2202, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 2, 20] },
		gtime: 7327917000000
	},

	{
		sdate: [1600, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 1],
			DateTime: "1600-01-01 01:00:00",
			DateAber: "01 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Wed 01 Far 1600",
			DateDoy: "1600.000",
			DateWoy: "1599W53-5",
			DateWithSlash: "1600/01/01",
			DateWithOutSlash: "16000101"
		},
		stime: 7927619400000,
		gdate: [2221, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 21] },
		gtime: 7927619400000
	},
	{
		sdate: [1600, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 2],
			DateTime: "1600-01-02 00:00:00",
			DateAber: "02 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Thu 02 Far 1600",
			DateDoy: "1600.001",
			DateWoy: "1599W53-6",
			DateWithSlash: "1600/01/02",
			DateWithOutSlash: "16000102"
		},
		stime: 7927702200000,
		gdate: [2221, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 22] },
		gtime: 7927702200000
	},
	{
		sdate: [1600, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 3],
			DateTime: "1600-01-03 00:00:00",
			DateAber: "03 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Fri 03 Far 1600",
			DateDoy: "1600.002",
			DateWoy: "1599W53-7",
			DateWithSlash: "1600/01/03",
			DateWithOutSlash: "16000103"
		},
		stime: 7927788600000,
		gdate: [2221, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 23] },
		gtime: 7927788600000
	},
	{
		sdate: [1600, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 4],
			DateTime: "1600-01-04 00:00:00",
			DateAber: "04 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Sat 04 Far 1600",
			DateDoy: "1600.003",
			DateWoy: "1600W01-1",
			DateWithSlash: "1600/01/04",
			DateWithOutSlash: "16000104"
		},
		stime: 7927875000000,
		gdate: [2221, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 24] },
		gtime: 7927875000000
	},
	{
		sdate: [1600, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 5],
			DateTime: "1600-01-05 00:00:00",
			DateAber: "05 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Sun 05 Far 1600",
			DateDoy: "1600.004",
			DateWoy: "1600W01-2",
			DateWithSlash: "1600/01/05",
			DateWithOutSlash: "16000105"
		},
		stime: 7927961400000,
		gdate: [2221, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 25] },
		gtime: 7927961400000
	},
	{
		sdate: [1600, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 6],
			DateTime: "1600-01-06 00:00:00",
			DateAber: "06 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Mon 06 Far 1600",
			DateDoy: "1600.005",
			DateWoy: "1600W01-3",
			DateWithSlash: "1600/01/06",
			DateWithOutSlash: "16000106"
		},
		stime: 7928047800000,
		gdate: [2221, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 26] },
		gtime: 7928047800000
	},
	{
		sdate: [1600, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 7],
			DateTime: "1600-01-07 00:00:00",
			DateAber: "07 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Tue 07 Far 1600",
			DateDoy: "1600.006",
			DateWoy: "1600W01-4",
			DateWithSlash: "1600/01/07",
			DateWithOutSlash: "16000107"
		},
		stime: 7928134200000,
		gdate: [2221, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 27] },
		gtime: 7928134200000
	},
	{
		sdate: [1600, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 15],
			DateTime: "1600-01-15 00:00:00",
			DateAber: "15 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Wed 15 Far 1600",
			DateDoy: "1600.014",
			DateWoy: "1600W02-5",
			DateWithSlash: "1600/01/15",
			DateWithOutSlash: "16000115"
		},
		stime: 7928825400000,
		gdate: [2221, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 4] },
		gtime: 7928825400000
	},
	{
		sdate: [1600, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 29],
			DateTime: "1600-01-29 00:00:00",
			DateAber: "29 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Wed 29 Far 1600",
			DateDoy: "1600.028",
			DateWoy: "1600W04-5",
			DateWithSlash: "1600/01/29",
			DateWithOutSlash: "16000129"
		},
		stime: 7930035000000,
		gdate: [2221, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 18] },
		gtime: 7930035000000
	},
	{
		sdate: [1600, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 30],
			DateTime: "1600-01-30 00:00:00",
			DateAber: "30 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Thu 30 Far 1600",
			DateDoy: "1600.029",
			DateWoy: "1600W04-6",
			DateWithSlash: "1600/01/30",
			DateWithOutSlash: "16000130"
		},
		stime: 7930121400000,
		gdate: [2221, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 19] },
		gtime: 7930121400000
	},
	{
		sdate: [1600, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 31],
			DateTime: "1600-01-31 00:00:00",
			DateAber: "31 Far 1600",
			DateMonth: "Far",
			DateYearMonth: "1600-Far",
			DateYear: "1600",
			DateAberWithDate: "Fri 31 Far 1600",
			DateDoy: "1600.030",
			DateWoy: "1600W04-7",
			DateWithSlash: "1600/01/31",
			DateWithOutSlash: "16000131"
		},
		stime: 7930207800000,
		gdate: [2221, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 20] },
		gtime: 7930207800000
	},
	{
		sdate: [1600, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 1],
			DateTime: "1600-02-01 00:00:00",
			DateAber: "01 Ord 1600",
			DateMonth: "Ord",
			DateYearMonth: "1600-Ord",
			DateYear: "1600",
			DateAberWithDate: "Sat 01 Ord 1600",
			DateDoy: "1600.031",
			DateWoy: "1600W05-1",
			DateWithSlash: "1600/02/01",
			DateWithOutSlash: "16000201"
		},
		stime: 7930294200000,
		gdate: [2221, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 21] },
		gtime: 7930294200000
	},
	{
		sdate: [1600, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 2],
			DateTime: "1600-02-02 00:00:00",
			DateAber: "02 Ord 1600",
			DateMonth: "Ord",
			DateYearMonth: "1600-Ord",
			DateYear: "1600",
			DateAberWithDate: "Sun 02 Ord 1600",
			DateDoy: "1600.032",
			DateWoy: "1600W05-2",
			DateWithSlash: "1600/02/02",
			DateWithOutSlash: "16000202"
		},
		stime: 7930380600000,
		gdate: [2221, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 22] },
		gtime: 7930380600000
	},
	{
		sdate: [1600, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 15],
			DateTime: "1600-02-15 00:00:00",
			DateAber: "15 Ord 1600",
			DateMonth: "Ord",
			DateYearMonth: "1600-Ord",
			DateYear: "1600",
			DateAberWithDate: "Sat 15 Ord 1600",
			DateDoy: "1600.045",
			DateWoy: "1600W07-1",
			DateWithSlash: "1600/02/15",
			DateWithOutSlash: "16000215"
		},
		stime: 7931503800000,
		gdate: [2221, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 5] },
		gtime: 7931503800000
	},
	{
		sdate: [1600, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 30],
			DateTime: "1600-02-30 00:00:00",
			DateAber: "30 Ord 1600",
			DateMonth: "Ord",
			DateYearMonth: "1600-Ord",
			DateYear: "1600",
			DateAberWithDate: "Sun 30 Ord 1600",
			DateDoy: "1600.060",
			DateWoy: "1600W09-2",
			DateWithSlash: "1600/02/30",
			DateWithOutSlash: "16000230"
		},
		stime: 7932799800000,
		gdate: [2221, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 20] },
		gtime: 7932799800000
	},
	{
		sdate: [1600, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 31],
			DateTime: "1600-02-31 00:00:00",
			DateAber: "31 Ord 1600",
			DateMonth: "Ord",
			DateYearMonth: "1600-Ord",
			DateYear: "1600",
			DateAberWithDate: "Mon 31 Ord 1600",
			DateDoy: "1600.061",
			DateWoy: "1600W09-3",
			DateWithSlash: "1600/02/31",
			DateWithOutSlash: "16000231"
		},
		stime: 7932886200000,
		gdate: [2221, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 21] },
		gtime: 7932886200000
	},
	{
		sdate: [1600, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 1],
			DateTime: "1600-03-01 00:00:00",
			DateAber: "01 Kho 1600",
			DateMonth: "Kho",
			DateYearMonth: "1600-Kho",
			DateYear: "1600",
			DateAberWithDate: "Tue 01 Kho 1600",
			DateDoy: "1600.062",
			DateWoy: "1600W09-4",
			DateWithSlash: "1600/03/01",
			DateWithOutSlash: "16000301"
		},
		stime: 7932972600000,
		gdate: [2221, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 22] },
		gtime: 7932972600000
	},
	{
		sdate: [1600, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 2],
			DateTime: "1600-03-02 00:00:00",
			DateAber: "02 Kho 1600",
			DateMonth: "Kho",
			DateYearMonth: "1600-Kho",
			DateYear: "1600",
			DateAberWithDate: "Wed 02 Kho 1600",
			DateDoy: "1600.063",
			DateWoy: "1600W09-5",
			DateWithSlash: "1600/03/02",
			DateWithOutSlash: "16000302"
		},
		stime: 7933059000000,
		gdate: [2221, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 23] },
		gtime: 7933059000000
	},
	{
		sdate: [1600, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 15],
			DateTime: "1600-03-15 00:00:00",
			DateAber: "15 Kho 1600",
			DateMonth: "Kho",
			DateYearMonth: "1600-Kho",
			DateYear: "1600",
			DateAberWithDate: "Tue 15 Kho 1600",
			DateDoy: "1600.076",
			DateWoy: "1600W11-4",
			DateWithSlash: "1600/03/15",
			DateWithOutSlash: "16000315"
		},
		stime: 7934182200000,
		gdate: [2221, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 5] },
		gtime: 7934182200000
	},
	{
		sdate: [1600, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 30],
			DateTime: "1600-03-30 00:00:00",
			DateAber: "30 Kho 1600",
			DateMonth: "Kho",
			DateYearMonth: "1600-Kho",
			DateYear: "1600",
			DateAberWithDate: "Wed 30 Kho 1600",
			DateDoy: "1600.091",
			DateWoy: "1600W13-5",
			DateWithSlash: "1600/03/30",
			DateWithOutSlash: "16000330"
		},
		stime: 7935478200000,
		gdate: [2221, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 20] },
		gtime: 7935478200000
	},
	{
		sdate: [1600, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 31],
			DateTime: "1600-03-31 00:00:00",
			DateAber: "31 Kho 1600",
			DateMonth: "Kho",
			DateYearMonth: "1600-Kho",
			DateYear: "1600",
			DateAberWithDate: "Thu 31 Kho 1600",
			DateDoy: "1600.092",
			DateWoy: "1600W13-6",
			DateWithSlash: "1600/03/31",
			DateWithOutSlash: "16000331"
		},
		stime: 7935564600000,
		gdate: [2221, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 21] },
		gtime: 7935564600000
	},
	{
		sdate: [1600, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 1],
			DateTime: "1600-04-01 00:00:00",
			DateAber: "01 Tir 1600",
			DateMonth: "Tir",
			DateYearMonth: "1600-Tir",
			DateYear: "1600",
			DateAberWithDate: "Fri 01 Tir 1600",
			DateDoy: "1600.093",
			DateWoy: "1600W13-7",
			DateWithSlash: "1600/04/01",
			DateWithOutSlash: "16000401"
		},
		stime: 7935651000000,
		gdate: [2221, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 22] },
		gtime: 7935651000000
	},
	{
		sdate: [1600, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 2],
			DateTime: "1600-04-02 00:00:00",
			DateAber: "02 Tir 1600",
			DateMonth: "Tir",
			DateYearMonth: "1600-Tir",
			DateYear: "1600",
			DateAberWithDate: "Sat 02 Tir 1600",
			DateDoy: "1600.094",
			DateWoy: "1600W14-1",
			DateWithSlash: "1600/04/02",
			DateWithOutSlash: "16000402"
		},
		stime: 7935737400000,
		gdate: [2221, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 23] },
		gtime: 7935737400000
	},
	{
		sdate: [1600, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 15],
			DateTime: "1600-04-15 00:00:00",
			DateAber: "15 Tir 1600",
			DateMonth: "Tir",
			DateYearMonth: "1600-Tir",
			DateYear: "1600",
			DateAberWithDate: "Fri 15 Tir 1600",
			DateDoy: "1600.107",
			DateWoy: "1600W15-7",
			DateWithSlash: "1600/04/15",
			DateWithOutSlash: "16000415"
		},
		stime: 7936860600000,
		gdate: [2221, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 6] },
		gtime: 7936860600000
	},
	{
		sdate: [1600, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 30],
			DateTime: "1600-04-30 00:00:00",
			DateAber: "30 Tir 1600",
			DateMonth: "Tir",
			DateYearMonth: "1600-Tir",
			DateYear: "1600",
			DateAberWithDate: "Sat 30 Tir 1600",
			DateDoy: "1600.122",
			DateWoy: "1600W18-1",
			DateWithSlash: "1600/04/30",
			DateWithOutSlash: "16000430"
		},
		stime: 7938156600000,
		gdate: [2221, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 21] },
		gtime: 7938156600000
	},
	{
		sdate: [1600, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 31],
			DateTime: "1600-04-31 00:00:00",
			DateAber: "31 Tir 1600",
			DateMonth: "Tir",
			DateYearMonth: "1600-Tir",
			DateYear: "1600",
			DateAberWithDate: "Sun 31 Tir 1600",
			DateDoy: "1600.123",
			DateWoy: "1600W18-2",
			DateWithSlash: "1600/04/31",
			DateWithOutSlash: "16000431"
		},
		stime: 7938243000000,
		gdate: [2221, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 22] },
		gtime: 7938243000000
	},
	{
		sdate: [1600, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 1],
			DateTime: "1600-05-01 00:00:00",
			DateAber: "01 Amo 1600",
			DateMonth: "Amo",
			DateYearMonth: "1600-Amo",
			DateYear: "1600",
			DateAberWithDate: "Mon 01 Amo 1600",
			DateDoy: "1600.124",
			DateWoy: "1600W18-3",
			DateWithSlash: "1600/05/01",
			DateWithOutSlash: "16000501"
		},
		stime: 7938329400000,
		gdate: [2221, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 23] },
		gtime: 7938329400000
	},
	{
		sdate: [1600, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 2],
			DateTime: "1600-05-02 00:00:00",
			DateAber: "02 Amo 1600",
			DateMonth: "Amo",
			DateYearMonth: "1600-Amo",
			DateYear: "1600",
			DateAberWithDate: "Tue 02 Amo 1600",
			DateDoy: "1600.125",
			DateWoy: "1600W18-4",
			DateWithSlash: "1600/05/02",
			DateWithOutSlash: "16000502"
		},
		stime: 7938415800000,
		gdate: [2221, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 24] },
		gtime: 7938415800000
	},
	{
		sdate: [1600, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 15],
			DateTime: "1600-05-15 00:00:00",
			DateAber: "15 Amo 1600",
			DateMonth: "Amo",
			DateYearMonth: "1600-Amo",
			DateYear: "1600",
			DateAberWithDate: "Mon 15 Amo 1600",
			DateDoy: "1600.138",
			DateWoy: "1600W20-3",
			DateWithSlash: "1600/05/15",
			DateWithOutSlash: "16000515"
		},
		stime: 7939539000000,
		gdate: [2221, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 6] },
		gtime: 7939539000000
	},
	{
		sdate: [1600, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 30],
			DateTime: "1600-05-30 00:00:00",
			DateAber: "30 Amo 1600",
			DateMonth: "Amo",
			DateYearMonth: "1600-Amo",
			DateYear: "1600",
			DateAberWithDate: "Tue 30 Amo 1600",
			DateDoy: "1600.153",
			DateWoy: "1600W22-4",
			DateWithSlash: "1600/05/30",
			DateWithOutSlash: "16000530"
		},
		stime: 7940835000000,
		gdate: [2221, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 21] },
		gtime: 7940835000000
	},
	{
		sdate: [1600, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 31],
			DateTime: "1600-05-31 00:00:00",
			DateAber: "31 Amo 1600",
			DateMonth: "Amo",
			DateYearMonth: "1600-Amo",
			DateYear: "1600",
			DateAberWithDate: "Wed 31 Amo 1600",
			DateDoy: "1600.154",
			DateWoy: "1600W22-5",
			DateWithSlash: "1600/05/31",
			DateWithOutSlash: "16000531"
		},
		stime: 7940921400000,
		gdate: [2221, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 22] },
		gtime: 7940921400000
	},
	{
		sdate: [1600, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 1],
			DateTime: "1600-06-01 00:00:00",
			DateAber: "01 Sha 1600",
			DateMonth: "Sha",
			DateYearMonth: "1600-Sha",
			DateYear: "1600",
			DateAberWithDate: "Thu 01 Sha 1600",
			DateDoy: "1600.155",
			DateWoy: "1600W22-6",
			DateWithSlash: "1600/06/01",
			DateWithOutSlash: "16000601"
		},
		stime: 7941007800000,
		gdate: [2221, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 23] },
		gtime: 7941007800000
	},
	{
		sdate: [1600, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 2],
			DateTime: "1600-06-02 00:00:00",
			DateAber: "02 Sha 1600",
			DateMonth: "Sha",
			DateYearMonth: "1600-Sha",
			DateYear: "1600",
			DateAberWithDate: "Fri 02 Sha 1600",
			DateDoy: "1600.156",
			DateWoy: "1600W22-7",
			DateWithSlash: "1600/06/02",
			DateWithOutSlash: "16000602"
		},
		stime: 7941094200000,
		gdate: [2221, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 24] },
		gtime: 7941094200000
	},
	{
		sdate: [1600, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 15],
			DateTime: "1600-06-15 00:00:00",
			DateAber: "15 Sha 1600",
			DateMonth: "Sha",
			DateYearMonth: "1600-Sha",
			DateYear: "1600",
			DateAberWithDate: "Thu 15 Sha 1600",
			DateDoy: "1600.169",
			DateWoy: "1600W24-6",
			DateWithSlash: "1600/06/15",
			DateWithOutSlash: "16000615"
		},
		stime: 7942217400000,
		gdate: [2221, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 8, 6] },
		gtime: 7942217400000
	},
	{
		sdate: [1600, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 29],
			DateTime: "1600-06-29 00:00:00",
			DateAber: "29 Sha 1600",
			DateMonth: "Sha",
			DateYearMonth: "1600-Sha",
			DateYear: "1600",
			DateAberWithDate: "Thu 29 Sha 1600",
			DateDoy: "1600.183",
			DateWoy: "1600W26-6",
			DateWithSlash: "1600/06/29",
			DateWithOutSlash: "16000629"
		},
		stime: 7943427000000,
		gdate: [2221, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 8, 20] },
		gtime: 7943427000000
	},
	{
		sdate: [1600, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 30],
			DateTime: "1600-06-30 00:00:00",
			DateAber: "30 Sha 1600",
			DateMonth: "Sha",
			DateYearMonth: "1600-Sha",
			DateYear: "1600",
			DateAberWithDate: "Fri 30 Sha 1600",
			DateDoy: "1600.184",
			DateWoy: "1600W26-7",
			DateWithSlash: "1600/06/30",
			DateWithOutSlash: "16000630"
		},
		stime: 7943517000000,
		gdate: [2221, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 8, 21] },
		gtime: 7943517000000
	},
	{
		sdate: [1600, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 1],
			DateTime: "1600-07-01 00:00:00",
			DateAber: "01 Meh 1600",
			DateMonth: "Meh",
			DateYearMonth: "1600-Meh",
			DateYear: "1600",
			DateAberWithDate: "Sun 01 Meh 1600",
			DateDoy: "1600.186",
			DateWoy: "1600W27-2",
			DateWithSlash: "1600/07/01",
			DateWithOutSlash: "16000701"
		},
		stime: 7943689800000,
		gdate: [2221, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 8, 23] },
		gtime: 7943689800000
	},
	{
		sdate: [1600, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 2],
			DateTime: "1600-07-02 00:00:00",
			DateAber: "02 Meh 1600",
			DateMonth: "Meh",
			DateYearMonth: "1600-Meh",
			DateYear: "1600",
			DateAberWithDate: "Mon 02 Meh 1600",
			DateDoy: "1600.187",
			DateWoy: "1600W27-3",
			DateWithSlash: "1600/07/02",
			DateWithOutSlash: "16000702"
		},
		stime: 7943776200000,
		gdate: [2221, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 8, 24] },
		gtime: 7943776200000
	},
	{
		sdate: [1600, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 15],
			DateTime: "1600-07-15 00:00:00",
			DateAber: "15 Meh 1600",
			DateMonth: "Meh",
			DateYearMonth: "1600-Meh",
			DateYear: "1600",
			DateAberWithDate: "Sun 15 Meh 1600",
			DateDoy: "1600.200",
			DateWoy: "1600W29-2",
			DateWithSlash: "1600/07/15",
			DateWithOutSlash: "16000715"
		},
		stime: 7944899400000,
		gdate: [2221, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 9, 7] },
		gtime: 7944899400000
	},
	{
		sdate: [1600, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 29],
			DateTime: "1600-07-29 00:00:00",
			DateAber: "29 Meh 1600",
			DateMonth: "Meh",
			DateYearMonth: "1600-Meh",
			DateYear: "1600",
			DateAberWithDate: "Sun 29 Meh 1600",
			DateDoy: "1600.214",
			DateWoy: "1600W31-2",
			DateWithSlash: "1600/07/29",
			DateWithOutSlash: "16000729"
		},
		stime: 7946109000000,
		gdate: [2221, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 9, 21] },
		gtime: 7946109000000
	},
	{
		sdate: [1600, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 30],
			DateTime: "1600-07-30 00:00:00",
			DateAber: "30 Meh 1600",
			DateMonth: "Meh",
			DateYearMonth: "1600-Meh",
			DateYear: "1600",
			DateAberWithDate: "Mon 30 Meh 1600",
			DateDoy: "1600.215",
			DateWoy: "1600W31-3",
			DateWithSlash: "1600/07/30",
			DateWithOutSlash: "16000730"
		},
		stime: 7946195400000,
		gdate: [2221, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 9, 22] },
		gtime: 7946195400000
	},
	{
		sdate: [1600, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 1],
			DateTime: "1600-08-01 00:00:00",
			DateAber: "01 Aba 1600",
			DateMonth: "Aba",
			DateYearMonth: "1600-Aba",
			DateYear: "1600",
			DateAberWithDate: "Tue 01 Aba 1600",
			DateDoy: "1600.216",
			DateWoy: "1600W31-4",
			DateWithSlash: "1600/08/01",
			DateWithOutSlash: "16000801"
		},
		stime: 7946281800000,
		gdate: [2221, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 9, 23] },
		gtime: 7946281800000
	},
	{
		sdate: [1600, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 2],
			DateTime: "1600-08-02 00:00:00",
			DateAber: "02 Aba 1600",
			DateMonth: "Aba",
			DateYearMonth: "1600-Aba",
			DateYear: "1600",
			DateAberWithDate: "Wed 02 Aba 1600",
			DateDoy: "1600.217",
			DateWoy: "1600W31-5",
			DateWithSlash: "1600/08/02",
			DateWithOutSlash: "16000802"
		},
		stime: 7946368200000,
		gdate: [2221, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 9, 24] },
		gtime: 7946368200000
	},
	{
		sdate: [1600, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 15],
			DateTime: "1600-08-15 00:00:00",
			DateAber: "15 Aba 1600",
			DateMonth: "Aba",
			DateYearMonth: "1600-Aba",
			DateYear: "1600",
			DateAberWithDate: "Tue 15 Aba 1600",
			DateDoy: "1600.230",
			DateWoy: "1600W33-4",
			DateWithSlash: "1600/08/15",
			DateWithOutSlash: "16000815"
		},
		stime: 7947491400000,
		gdate: [2221, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 10, 6] },
		gtime: 7947491400000
	},
	{
		sdate: [1600, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 29],
			DateTime: "1600-08-29 00:00:00",
			DateAber: "29 Aba 1600",
			DateMonth: "Aba",
			DateYearMonth: "1600-Aba",
			DateYear: "1600",
			DateAberWithDate: "Tue 29 Aba 1600",
			DateDoy: "1600.244",
			DateWoy: "1600W35-4",
			DateWithSlash: "1600/08/29",
			DateWithOutSlash: "16000829"
		},
		stime: 7948701000000,
		gdate: [2221, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 10, 20] },
		gtime: 7948701000000
	},
	{
		sdate: [1600, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 30],
			DateTime: "1600-08-30 00:00:00",
			DateAber: "30 Aba 1600",
			DateMonth: "Aba",
			DateYearMonth: "1600-Aba",
			DateYear: "1600",
			DateAberWithDate: "Wed 30 Aba 1600",
			DateDoy: "1600.245",
			DateWoy: "1600W35-5",
			DateWithSlash: "1600/08/30",
			DateWithOutSlash: "16000830"
		},
		stime: 7948787400000,
		gdate: [2221, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 10, 21] },
		gtime: 7948787400000
	},
	{
		sdate: [1600, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 1],
			DateTime: "1600-09-01 00:00:00",
			DateAber: "01 Aza 1600",
			DateMonth: "Aza",
			DateYearMonth: "1600-Aza",
			DateYear: "1600",
			DateAberWithDate: "Thu 01 Aza 1600",
			DateDoy: "1600.246",
			DateWoy: "1600W35-6",
			DateWithSlash: "1600/09/01",
			DateWithOutSlash: "16000901"
		},
		stime: 7948873800000,
		gdate: [2221, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 10, 22] },
		gtime: 7948873800000
	},
	{
		sdate: [1600, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 2],
			DateTime: "1600-09-02 00:00:00",
			DateAber: "02 Aza 1600",
			DateMonth: "Aza",
			DateYearMonth: "1600-Aza",
			DateYear: "1600",
			DateAberWithDate: "Fri 02 Aza 1600",
			DateDoy: "1600.247",
			DateWoy: "1600W35-7",
			DateWithSlash: "1600/09/02",
			DateWithOutSlash: "16000902"
		},
		stime: 7948960200000,
		gdate: [2221, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 10, 23] },
		gtime: 7948960200000
	},
	{
		sdate: [1600, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 15],
			DateTime: "1600-09-15 00:00:00",
			DateAber: "15 Aza 1600",
			DateMonth: "Aza",
			DateYearMonth: "1600-Aza",
			DateYear: "1600",
			DateAberWithDate: "Thu 15 Aza 1600",
			DateDoy: "1600.260",
			DateWoy: "1600W37-6",
			DateWithSlash: "1600/09/15",
			DateWithOutSlash: "16000915"
		},
		stime: 7950083400000,
		gdate: [2221, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 11, 6] },
		gtime: 7950083400000
	},
	{
		sdate: [1600, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 29],
			DateTime: "1600-09-29 00:00:00",
			DateAber: "29 Aza 1600",
			DateMonth: "Aza",
			DateYearMonth: "1600-Aza",
			DateYear: "1600",
			DateAberWithDate: "Thu 29 Aza 1600",
			DateDoy: "1600.274",
			DateWoy: "1600W39-6",
			DateWithSlash: "1600/09/29",
			DateWithOutSlash: "16000929"
		},
		stime: 7951293000000,
		gdate: [2221, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 11, 20] },
		gtime: 7951293000000
	},
	{
		sdate: [1600, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 30],
			DateTime: "1600-09-30 00:00:00",
			DateAber: "30 Aza 1600",
			DateMonth: "Aza",
			DateYearMonth: "1600-Aza",
			DateYear: "1600",
			DateAberWithDate: "Fri 30 Aza 1600",
			DateDoy: "1600.275",
			DateWoy: "1600W39-7",
			DateWithSlash: "1600/09/30",
			DateWithOutSlash: "16000930"
		},
		stime: 7951379400000,
		gdate: [2221, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 11, 21] },
		gtime: 7951379400000
	},
	{
		sdate: [1600, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 1],
			DateTime: "1600-10-01 00:00:00",
			DateAber: "01 Dey 1600",
			DateMonth: "Dey",
			DateYearMonth: "1600-Dey",
			DateYear: "1600",
			DateAberWithDate: "Sat 01 Dey 1600",
			DateDoy: "1600.276",
			DateWoy: "1600W40-1",
			DateWithSlash: "1600/10/01",
			DateWithOutSlash: "16001001"
		},
		stime: 7951465800000,
		gdate: [2221, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 11, 22] },
		gtime: 7951465800000
	},
	{
		sdate: [1600, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 2],
			DateTime: "1600-10-02 00:00:00",
			DateAber: "02 Dey 1600",
			DateMonth: "Dey",
			DateYearMonth: "1600-Dey",
			DateYear: "1600",
			DateAberWithDate: "Sun 02 Dey 1600",
			DateDoy: "1600.277",
			DateWoy: "1600W40-2",
			DateWithSlash: "1600/10/02",
			DateWithOutSlash: "16001002"
		},
		stime: 7951552200000,
		gdate: [2221, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 11, 23] },
		gtime: 7951552200000
	},
	{
		sdate: [1600, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 15],
			DateTime: "1600-10-15 00:00:00",
			DateAber: "15 Dey 1600",
			DateMonth: "Dey",
			DateYearMonth: "1600-Dey",
			DateYear: "1600",
			DateAberWithDate: "Sat 15 Dey 1600",
			DateDoy: "1600.290",
			DateWoy: "1600W42-1",
			DateWithSlash: "1600/10/15",
			DateWithOutSlash: "16001015"
		},
		stime: 7952675400000,
		gdate: [2222, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 0, 5] },
		gtime: 7952675400000
	},
	{
		sdate: [1600, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 29],
			DateTime: "1600-10-29 00:00:00",
			DateAber: "29 Dey 1600",
			DateMonth: "Dey",
			DateYearMonth: "1600-Dey",
			DateYear: "1600",
			DateAberWithDate: "Sat 29 Dey 1600",
			DateDoy: "1600.304",
			DateWoy: "1600W44-1",
			DateWithSlash: "1600/10/29",
			DateWithOutSlash: "16001029"
		},
		stime: 7953885000000,
		gdate: [2222, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 0, 19] },
		gtime: 7953885000000
	},
	{
		sdate: [1600, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 30],
			DateTime: "1600-10-30 00:00:00",
			DateAber: "30 Dey 1600",
			DateMonth: "Dey",
			DateYearMonth: "1600-Dey",
			DateYear: "1600",
			DateAberWithDate: "Sun 30 Dey 1600",
			DateDoy: "1600.305",
			DateWoy: "1600W44-2",
			DateWithSlash: "1600/10/30",
			DateWithOutSlash: "16001030"
		},
		stime: 7953971400000,
		gdate: [2222, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 0, 20] },
		gtime: 7953971400000
	},
	{
		sdate: [1600, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 1],
			DateTime: "1600-11-01 00:00:00",
			DateAber: "01 Bah 1600",
			DateMonth: "Bah",
			DateYearMonth: "1600-Bah",
			DateYear: "1600",
			DateAberWithDate: "Mon 01 Bah 1600",
			DateDoy: "1600.306",
			DateWoy: "1600W44-3",
			DateWithSlash: "1600/11/01",
			DateWithOutSlash: "16001101"
		},
		stime: 7954057800000,
		gdate: [2222, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 0, 21] },
		gtime: 7954057800000
	},
	{
		sdate: [1600, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 2],
			DateTime: "1600-11-02 00:00:00",
			DateAber: "02 Bah 1600",
			DateMonth: "Bah",
			DateYearMonth: "1600-Bah",
			DateYear: "1600",
			DateAberWithDate: "Tue 02 Bah 1600",
			DateDoy: "1600.307",
			DateWoy: "1600W44-4",
			DateWithSlash: "1600/11/02",
			DateWithOutSlash: "16001102"
		},
		stime: 7954144200000,
		gdate: [2222, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 0, 22] },
		gtime: 7954144200000
	},
	{
		sdate: [1600, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 15],
			DateTime: "1600-11-15 00:00:00",
			DateAber: "15 Bah 1600",
			DateMonth: "Bah",
			DateYearMonth: "1600-Bah",
			DateYear: "1600",
			DateAberWithDate: "Mon 15 Bah 1600",
			DateDoy: "1600.320",
			DateWoy: "1600W46-3",
			DateWithSlash: "1600/11/15",
			DateWithOutSlash: "16001115"
		},
		stime: 7955267400000,
		gdate: [2222, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 1, 4] },
		gtime: 7955267400000
	},
	{
		sdate: [1600, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 29],
			DateTime: "1600-11-29 00:00:00",
			DateAber: "29 Bah 1600",
			DateMonth: "Bah",
			DateYearMonth: "1600-Bah",
			DateYear: "1600",
			DateAberWithDate: "Mon 29 Bah 1600",
			DateDoy: "1600.334",
			DateWoy: "1600W48-3",
			DateWithSlash: "1600/11/29",
			DateWithOutSlash: "16001129"
		},
		stime: 7956477000000,
		gdate: [2222, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 1, 18] },
		gtime: 7956477000000
	},
	{
		sdate: [1600, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 30],
			DateTime: "1600-11-30 00:00:00",
			DateAber: "30 Bah 1600",
			DateMonth: "Bah",
			DateYearMonth: "1600-Bah",
			DateYear: "1600",
			DateAberWithDate: "Tue 30 Bah 1600",
			DateDoy: "1600.335",
			DateWoy: "1600W48-4",
			DateWithSlash: "1600/11/30",
			DateWithOutSlash: "16001130"
		},
		stime: 7956563400000,
		gdate: [2222, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 1, 19] },
		gtime: 7956563400000
	},
	{
		sdate: [1600, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 1],
			DateTime: "1600-12-01 00:00:00",
			DateAber: "01 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Wed 01 Esf 1600",
			DateDoy: "1600.336",
			DateWoy: "1600W48-5",
			DateWithSlash: "1600/12/01",
			DateWithOutSlash: "16001201"
		},
		stime: 7956649800000,
		gdate: [2222, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 1, 20] },
		gtime: 7956649800000
	},
	{
		sdate: [1600, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 2],
			DateTime: "1600-12-02 00:00:00",
			DateAber: "02 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Thu 02 Esf 1600",
			DateDoy: "1600.337",
			DateWoy: "1600W48-6",
			DateWithSlash: "1600/12/02",
			DateWithOutSlash: "16001202"
		},
		stime: 7956736200000,
		gdate: [2222, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 1, 21] },
		gtime: 7956736200000
	},
	{
		sdate: [1600, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 3],
			DateTime: "1600-12-03 00:00:00",
			DateAber: "03 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Fri 03 Esf 1600",
			DateDoy: "1600.338",
			DateWoy: "1600W48-7",
			DateWithSlash: "1600/12/03",
			DateWithOutSlash: "16001203"
		},
		stime: 7956822600000,
		gdate: [2222, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 1, 22] },
		gtime: 7956822600000
	},
	{
		sdate: [1600, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 4],
			DateTime: "1600-12-04 00:00:00",
			DateAber: "04 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Sat 04 Esf 1600",
			DateDoy: "1600.339",
			DateWoy: "1600W49-1",
			DateWithSlash: "1600/12/04",
			DateWithOutSlash: "16001204"
		},
		stime: 7956909000000,
		gdate: [2222, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 1, 23] },
		gtime: 7956909000000
	},
	{
		sdate: [1600, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 15],
			DateTime: "1600-12-15 00:00:00",
			DateAber: "15 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Wed 15 Esf 1600",
			DateDoy: "1600.350",
			DateWoy: "1600W50-5",
			DateWithSlash: "1600/12/15",
			DateWithOutSlash: "16001215"
		},
		stime: 7957859400000,
		gdate: [2222, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 2, 6] },
		gtime: 7957859400000
	},
	{
		sdate: [1600, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 25],
			DateTime: "1600-12-25 00:00:00",
			DateAber: "25 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Sat 25 Esf 1600",
			DateDoy: "1600.360",
			DateWoy: "1600W52-1",
			DateWithSlash: "1600/12/25",
			DateWithOutSlash: "16001225"
		},
		stime: 7958723400000,
		gdate: [2222, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 2, 16] },
		gtime: 7958723400000
	},
	{
		sdate: [1600, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 26],
			DateTime: "1600-12-26 00:00:00",
			DateAber: "26 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Sun 26 Esf 1600",
			DateDoy: "1600.361",
			DateWoy: "1600W52-2",
			DateWithSlash: "1600/12/26",
			DateWithOutSlash: "16001226"
		},
		stime: 7958809800000,
		gdate: [2222, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 2, 17] },
		gtime: 7958809800000
	},
	{
		sdate: [1600, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 27],
			DateTime: "1600-12-27 00:00:00",
			DateAber: "27 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Mon 27 Esf 1600",
			DateDoy: "1600.362",
			DateWoy: "1600W52-3",
			DateWithSlash: "1600/12/27",
			DateWithOutSlash: "16001227"
		},
		stime: 7958896200000,
		gdate: [2222, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 2, 18] },
		gtime: 7958896200000
	},
	{
		sdate: [1600, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 28],
			DateTime: "1600-12-28 00:00:00",
			DateAber: "28 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Tue 28 Esf 1600",
			DateDoy: "1600.363",
			DateWoy: "1600W52-4",
			DateWithSlash: "1600/12/28",
			DateWithOutSlash: "16001228"
		},
		stime: 7958982600000,
		gdate: [2222, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 2, 19] },
		gtime: 7958982600000
	},
	{
		sdate: [1600, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 29],
			DateTime: "1600-12-29 00:00:00",
			DateAber: "29 Esf 1600",
			DateMonth: "Esf",
			DateYearMonth: "1600-Esf",
			DateYear: "1600",
			DateAberWithDate: "Wed 29 Esf 1600",
			DateDoy: "1600.364",
			DateWoy: "1600W52-5",
			DateWithSlash: "1600/12/29",
			DateWithOutSlash: "16001229"
		},
		stime: 7959069000000,
		gdate: [2222, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 2, 20] },
		gtime: 7959069000000
	},

	{
		sdate: [1620, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 1],
			DateTime: "1620-01-01 01:00:00",
			DateAber: "01 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Sun 01 Far 1620",
			DateDoy: "1620.000",
			DateWoy: "1620W01-2",
			DateWithSlash: "1620/01/01",
			DateWithOutSlash: "16200101"
		},
		stime: 8558771400000,
		gdate: [2241, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 21] },
		gtime: 8558771400000
	},
	{
		sdate: [1620, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 2],
			DateTime: "1620-01-02 00:00:00",
			DateAber: "02 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Mon 02 Far 1620",
			DateDoy: "1620.001",
			DateWoy: "1620W01-3",
			DateWithSlash: "1620/01/02",
			DateWithOutSlash: "16200102"
		},
		stime: 8558854200000,
		gdate: [2241, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 22] },
		gtime: 8558854200000
	},
	{
		sdate: [1620, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 3],
			DateTime: "1620-01-03 00:00:00",
			DateAber: "03 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Tue 03 Far 1620",
			DateDoy: "1620.002",
			DateWoy: "1620W01-4",
			DateWithSlash: "1620/01/03",
			DateWithOutSlash: "16200103"
		},
		stime: 8558940600000,
		gdate: [2241, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 23] },
		gtime: 8558940600000
	},
	{
		sdate: [1620, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 4],
			DateTime: "1620-01-04 00:00:00",
			DateAber: "04 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Wed 04 Far 1620",
			DateDoy: "1620.003",
			DateWoy: "1620W01-5",
			DateWithSlash: "1620/01/04",
			DateWithOutSlash: "16200104"
		},
		stime: 8559027000000,
		gdate: [2241, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 24] },
		gtime: 8559027000000
	},
	{
		sdate: [1620, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 5],
			DateTime: "1620-01-05 00:00:00",
			DateAber: "05 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Thu 05 Far 1620",
			DateDoy: "1620.004",
			DateWoy: "1620W01-6",
			DateWithSlash: "1620/01/05",
			DateWithOutSlash: "16200105"
		},
		stime: 8559113400000,
		gdate: [2241, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 25] },
		gtime: 8559113400000
	},
	{
		sdate: [1620, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 6],
			DateTime: "1620-01-06 00:00:00",
			DateAber: "06 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Fri 06 Far 1620",
			DateDoy: "1620.005",
			DateWoy: "1620W01-7",
			DateWithSlash: "1620/01/06",
			DateWithOutSlash: "16200106"
		},
		stime: 8559199800000,
		gdate: [2241, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 26] },
		gtime: 8559199800000
	},
	{
		sdate: [1620, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 7],
			DateTime: "1620-01-07 00:00:00",
			DateAber: "07 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Sat 07 Far 1620",
			DateDoy: "1620.006",
			DateWoy: "1620W02-1",
			DateWithSlash: "1620/01/07",
			DateWithOutSlash: "16200107"
		},
		stime: 8559286200000,
		gdate: [2241, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 27] },
		gtime: 8559286200000
	},
	{
		sdate: [1620, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 15],
			DateTime: "1620-01-15 00:00:00",
			DateAber: "15 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Sun 15 Far 1620",
			DateDoy: "1620.014",
			DateWoy: "1620W03-2",
			DateWithSlash: "1620/01/15",
			DateWithOutSlash: "16200115"
		},
		stime: 8559977400000,
		gdate: [2241, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 4] },
		gtime: 8559977400000
	},
	{
		sdate: [1620, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 29],
			DateTime: "1620-01-29 00:00:00",
			DateAber: "29 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Sun 29 Far 1620",
			DateDoy: "1620.028",
			DateWoy: "1620W05-2",
			DateWithSlash: "1620/01/29",
			DateWithOutSlash: "16200129"
		},
		stime: 8561187000000,
		gdate: [2241, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 18] },
		gtime: 8561187000000
	},
	{
		sdate: [1620, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 30],
			DateTime: "1620-01-30 00:00:00",
			DateAber: "30 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Mon 30 Far 1620",
			DateDoy: "1620.029",
			DateWoy: "1620W05-3",
			DateWithSlash: "1620/01/30",
			DateWithOutSlash: "16200130"
		},
		stime: 8561273400000,
		gdate: [2241, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 19] },
		gtime: 8561273400000
	},
	{
		sdate: [1620, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 31],
			DateTime: "1620-01-31 00:00:00",
			DateAber: "31 Far 1620",
			DateMonth: "Far",
			DateYearMonth: "1620-Far",
			DateYear: "1620",
			DateAberWithDate: "Tue 31 Far 1620",
			DateDoy: "1620.030",
			DateWoy: "1620W05-4",
			DateWithSlash: "1620/01/31",
			DateWithOutSlash: "16200131"
		},
		stime: 8561359800000,
		gdate: [2241, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 20] },
		gtime: 8561359800000
	},
	{
		sdate: [1620, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 1],
			DateTime: "1620-02-01 00:00:00",
			DateAber: "01 Ord 1620",
			DateMonth: "Ord",
			DateYearMonth: "1620-Ord",
			DateYear: "1620",
			DateAberWithDate: "Wed 01 Ord 1620",
			DateDoy: "1620.031",
			DateWoy: "1620W05-5",
			DateWithSlash: "1620/02/01",
			DateWithOutSlash: "16200201"
		},
		stime: 8561446200000,
		gdate: [2241, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 21] },
		gtime: 8561446200000
	},
	{
		sdate: [1620, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 2],
			DateTime: "1620-02-02 00:00:00",
			DateAber: "02 Ord 1620",
			DateMonth: "Ord",
			DateYearMonth: "1620-Ord",
			DateYear: "1620",
			DateAberWithDate: "Thu 02 Ord 1620",
			DateDoy: "1620.032",
			DateWoy: "1620W05-6",
			DateWithSlash: "1620/02/02",
			DateWithOutSlash: "16200202"
		},
		stime: 8561532600000,
		gdate: [2241, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 22] },
		gtime: 8561532600000
	},
	{
		sdate: [1620, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 15],
			DateTime: "1620-02-15 00:00:00",
			DateAber: "15 Ord 1620",
			DateMonth: "Ord",
			DateYearMonth: "1620-Ord",
			DateYear: "1620",
			DateAberWithDate: "Wed 15 Ord 1620",
			DateDoy: "1620.045",
			DateWoy: "1620W07-5",
			DateWithSlash: "1620/02/15",
			DateWithOutSlash: "16200215"
		},
		stime: 8562655800000,
		gdate: [2241, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 5] },
		gtime: 8562655800000
	},
	{
		sdate: [1620, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 30],
			DateTime: "1620-02-30 00:00:00",
			DateAber: "30 Ord 1620",
			DateMonth: "Ord",
			DateYearMonth: "1620-Ord",
			DateYear: "1620",
			DateAberWithDate: "Thu 30 Ord 1620",
			DateDoy: "1620.060",
			DateWoy: "1620W09-6",
			DateWithSlash: "1620/02/30",
			DateWithOutSlash: "16200230"
		},
		stime: 8563951800000,
		gdate: [2241, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 20] },
		gtime: 8563951800000
	},
	{
		sdate: [1620, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 31],
			DateTime: "1620-02-31 00:00:00",
			DateAber: "31 Ord 1620",
			DateMonth: "Ord",
			DateYearMonth: "1620-Ord",
			DateYear: "1620",
			DateAberWithDate: "Fri 31 Ord 1620",
			DateDoy: "1620.061",
			DateWoy: "1620W09-7",
			DateWithSlash: "1620/02/31",
			DateWithOutSlash: "16200231"
		},
		stime: 8564038200000,
		gdate: [2241, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 21] },
		gtime: 8564038200000
	},
	{
		sdate: [1620, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 1],
			DateTime: "1620-03-01 00:00:00",
			DateAber: "01 Kho 1620",
			DateMonth: "Kho",
			DateYearMonth: "1620-Kho",
			DateYear: "1620",
			DateAberWithDate: "Sat 01 Kho 1620",
			DateDoy: "1620.062",
			DateWoy: "1620W10-1",
			DateWithSlash: "1620/03/01",
			DateWithOutSlash: "16200301"
		},
		stime: 8564124600000,
		gdate: [2241, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 22] },
		gtime: 8564124600000
	},
	{
		sdate: [1620, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 2],
			DateTime: "1620-03-02 00:00:00",
			DateAber: "02 Kho 1620",
			DateMonth: "Kho",
			DateYearMonth: "1620-Kho",
			DateYear: "1620",
			DateAberWithDate: "Sun 02 Kho 1620",
			DateDoy: "1620.063",
			DateWoy: "1620W10-2",
			DateWithSlash: "1620/03/02",
			DateWithOutSlash: "16200302"
		},
		stime: 8564211000000,
		gdate: [2241, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 23] },
		gtime: 8564211000000
	},
	{
		sdate: [1620, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 15],
			DateTime: "1620-03-15 00:00:00",
			DateAber: "15 Kho 1620",
			DateMonth: "Kho",
			DateYearMonth: "1620-Kho",
			DateYear: "1620",
			DateAberWithDate: "Sat 15 Kho 1620",
			DateDoy: "1620.076",
			DateWoy: "1620W12-1",
			DateWithSlash: "1620/03/15",
			DateWithOutSlash: "16200315"
		},
		stime: 8565334200000,
		gdate: [2241, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 5] },
		gtime: 8565334200000
	},
	{
		sdate: [1620, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 30],
			DateTime: "1620-03-30 00:00:00",
			DateAber: "30 Kho 1620",
			DateMonth: "Kho",
			DateYearMonth: "1620-Kho",
			DateYear: "1620",
			DateAberWithDate: "Sun 30 Kho 1620",
			DateDoy: "1620.091",
			DateWoy: "1620W14-2",
			DateWithSlash: "1620/03/30",
			DateWithOutSlash: "16200330"
		},
		stime: 8566630200000,
		gdate: [2241, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 20] },
		gtime: 8566630200000
	},
	{
		sdate: [1620, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 31],
			DateTime: "1620-03-31 00:00:00",
			DateAber: "31 Kho 1620",
			DateMonth: "Kho",
			DateYearMonth: "1620-Kho",
			DateYear: "1620",
			DateAberWithDate: "Mon 31 Kho 1620",
			DateDoy: "1620.092",
			DateWoy: "1620W14-3",
			DateWithSlash: "1620/03/31",
			DateWithOutSlash: "16200331"
		},
		stime: 8566716600000,
		gdate: [2241, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 21] },
		gtime: 8566716600000
	},
	{
		sdate: [1620, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 1],
			DateTime: "1620-04-01 00:00:00",
			DateAber: "01 Tir 1620",
			DateMonth: "Tir",
			DateYearMonth: "1620-Tir",
			DateYear: "1620",
			DateAberWithDate: "Tue 01 Tir 1620",
			DateDoy: "1620.093",
			DateWoy: "1620W14-4",
			DateWithSlash: "1620/04/01",
			DateWithOutSlash: "16200401"
		},
		stime: 8566803000000,
		gdate: [2241, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 22] },
		gtime: 8566803000000
	},
	{
		sdate: [1620, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 2],
			DateTime: "1620-04-02 00:00:00",
			DateAber: "02 Tir 1620",
			DateMonth: "Tir",
			DateYearMonth: "1620-Tir",
			DateYear: "1620",
			DateAberWithDate: "Wed 02 Tir 1620",
			DateDoy: "1620.094",
			DateWoy: "1620W14-5",
			DateWithSlash: "1620/04/02",
			DateWithOutSlash: "16200402"
		},
		stime: 8566889400000,
		gdate: [2241, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 23] },
		gtime: 8566889400000
	},
	{
		sdate: [1620, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 15],
			DateTime: "1620-04-15 00:00:00",
			DateAber: "15 Tir 1620",
			DateMonth: "Tir",
			DateYearMonth: "1620-Tir",
			DateYear: "1620",
			DateAberWithDate: "Tue 15 Tir 1620",
			DateDoy: "1620.107",
			DateWoy: "1620W16-4",
			DateWithSlash: "1620/04/15",
			DateWithOutSlash: "16200415"
		},
		stime: 8568012600000,
		gdate: [2241, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 6] },
		gtime: 8568012600000
	},
	{
		sdate: [1620, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 30],
			DateTime: "1620-04-30 00:00:00",
			DateAber: "30 Tir 1620",
			DateMonth: "Tir",
			DateYearMonth: "1620-Tir",
			DateYear: "1620",
			DateAberWithDate: "Wed 30 Tir 1620",
			DateDoy: "1620.122",
			DateWoy: "1620W18-5",
			DateWithSlash: "1620/04/30",
			DateWithOutSlash: "16200430"
		},
		stime: 8569308600000,
		gdate: [2241, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 21] },
		gtime: 8569308600000
	},
	{
		sdate: [1620, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 31],
			DateTime: "1620-04-31 00:00:00",
			DateAber: "31 Tir 1620",
			DateMonth: "Tir",
			DateYearMonth: "1620-Tir",
			DateYear: "1620",
			DateAberWithDate: "Thu 31 Tir 1620",
			DateDoy: "1620.123",
			DateWoy: "1620W18-6",
			DateWithSlash: "1620/04/31",
			DateWithOutSlash: "16200431"
		},
		stime: 8569395000000,
		gdate: [2241, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 22] },
		gtime: 8569395000000
	},
	{
		sdate: [1620, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 1],
			DateTime: "1620-05-01 00:00:00",
			DateAber: "01 Amo 1620",
			DateMonth: "Amo",
			DateYearMonth: "1620-Amo",
			DateYear: "1620",
			DateAberWithDate: "Fri 01 Amo 1620",
			DateDoy: "1620.124",
			DateWoy: "1620W18-7",
			DateWithSlash: "1620/05/01",
			DateWithOutSlash: "16200501"
		},
		stime: 8569481400000,
		gdate: [2241, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 23] },
		gtime: 8569481400000
	},
	{
		sdate: [1620, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 2],
			DateTime: "1620-05-02 00:00:00",
			DateAber: "02 Amo 1620",
			DateMonth: "Amo",
			DateYearMonth: "1620-Amo",
			DateYear: "1620",
			DateAberWithDate: "Sat 02 Amo 1620",
			DateDoy: "1620.125",
			DateWoy: "1620W19-1",
			DateWithSlash: "1620/05/02",
			DateWithOutSlash: "16200502"
		},
		stime: 8569567800000,
		gdate: [2241, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 24] },
		gtime: 8569567800000
	},
	{
		sdate: [1620, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 15],
			DateTime: "1620-05-15 00:00:00",
			DateAber: "15 Amo 1620",
			DateMonth: "Amo",
			DateYearMonth: "1620-Amo",
			DateYear: "1620",
			DateAberWithDate: "Fri 15 Amo 1620",
			DateDoy: "1620.138",
			DateWoy: "1620W20-7",
			DateWithSlash: "1620/05/15",
			DateWithOutSlash: "16200515"
		},
		stime: 8570691000000,
		gdate: [2241, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 6] },
		gtime: 8570691000000
	},
	{
		sdate: [1620, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 30],
			DateTime: "1620-05-30 00:00:00",
			DateAber: "30 Amo 1620",
			DateMonth: "Amo",
			DateYearMonth: "1620-Amo",
			DateYear: "1620",
			DateAberWithDate: "Sat 30 Amo 1620",
			DateDoy: "1620.153",
			DateWoy: "1620W23-1",
			DateWithSlash: "1620/05/30",
			DateWithOutSlash: "16200530"
		},
		stime: 8571987000000,
		gdate: [2241, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 21] },
		gtime: 8571987000000
	},
	{
		sdate: [1620, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 31],
			DateTime: "1620-05-31 00:00:00",
			DateAber: "31 Amo 1620",
			DateMonth: "Amo",
			DateYearMonth: "1620-Amo",
			DateYear: "1620",
			DateAberWithDate: "Sun 31 Amo 1620",
			DateDoy: "1620.154",
			DateWoy: "1620W23-2",
			DateWithSlash: "1620/05/31",
			DateWithOutSlash: "16200531"
		},
		stime: 8572073400000,
		gdate: [2241, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 22] },
		gtime: 8572073400000
	},
	{
		sdate: [1620, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 1],
			DateTime: "1620-06-01 00:00:00",
			DateAber: "01 Sha 1620",
			DateMonth: "Sha",
			DateYearMonth: "1620-Sha",
			DateYear: "1620",
			DateAberWithDate: "Mon 01 Sha 1620",
			DateDoy: "1620.155",
			DateWoy: "1620W23-3",
			DateWithSlash: "1620/06/01",
			DateWithOutSlash: "16200601"
		},
		stime: 8572159800000,
		gdate: [2241, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 23] },
		gtime: 8572159800000
	},
	{
		sdate: [1620, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 2],
			DateTime: "1620-06-02 00:00:00",
			DateAber: "02 Sha 1620",
			DateMonth: "Sha",
			DateYearMonth: "1620-Sha",
			DateYear: "1620",
			DateAberWithDate: "Tue 02 Sha 1620",
			DateDoy: "1620.156",
			DateWoy: "1620W23-4",
			DateWithSlash: "1620/06/02",
			DateWithOutSlash: "16200602"
		},
		stime: 8572246200000,
		gdate: [2241, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 24] },
		gtime: 8572246200000
	},
	{
		sdate: [1620, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 15],
			DateTime: "1620-06-15 00:00:00",
			DateAber: "15 Sha 1620",
			DateMonth: "Sha",
			DateYearMonth: "1620-Sha",
			DateYear: "1620",
			DateAberWithDate: "Mon 15 Sha 1620",
			DateDoy: "1620.169",
			DateWoy: "1620W25-3",
			DateWithSlash: "1620/06/15",
			DateWithOutSlash: "16200615"
		},
		stime: 8573369400000,
		gdate: [2241, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 8, 6] },
		gtime: 8573369400000
	},
	{
		sdate: [1620, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 29],
			DateTime: "1620-06-29 00:00:00",
			DateAber: "29 Sha 1620",
			DateMonth: "Sha",
			DateYearMonth: "1620-Sha",
			DateYear: "1620",
			DateAberWithDate: "Mon 29 Sha 1620",
			DateDoy: "1620.183",
			DateWoy: "1620W27-3",
			DateWithSlash: "1620/06/29",
			DateWithOutSlash: "16200629"
		},
		stime: 8574579000000,
		gdate: [2241, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 8, 20] },
		gtime: 8574579000000
	},
	{
		sdate: [1620, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 30],
			DateTime: "1620-06-30 00:00:00",
			DateAber: "30 Sha 1620",
			DateMonth: "Sha",
			DateYearMonth: "1620-Sha",
			DateYear: "1620",
			DateAberWithDate: "Tue 30 Sha 1620",
			DateDoy: "1620.184",
			DateWoy: "1620W27-4",
			DateWithSlash: "1620/06/30",
			DateWithOutSlash: "16200630"
		},
		stime: 8574669000000,
		gdate: [2241, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 8, 21] },
		gtime: 8574669000000
	},
	{
		sdate: [1620, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 1],
			DateTime: "1620-07-01 00:00:00",
			DateAber: "01 Meh 1620",
			DateMonth: "Meh",
			DateYearMonth: "1620-Meh",
			DateYear: "1620",
			DateAberWithDate: "Thu 01 Meh 1620",
			DateDoy: "1620.186",
			DateWoy: "1620W27-6",
			DateWithSlash: "1620/07/01",
			DateWithOutSlash: "16200701"
		},
		stime: 8574841800000,
		gdate: [2241, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 8, 23] },
		gtime: 8574841800000
	},
	{
		sdate: [1620, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 2],
			DateTime: "1620-07-02 00:00:00",
			DateAber: "02 Meh 1620",
			DateMonth: "Meh",
			DateYearMonth: "1620-Meh",
			DateYear: "1620",
			DateAberWithDate: "Fri 02 Meh 1620",
			DateDoy: "1620.187",
			DateWoy: "1620W27-7",
			DateWithSlash: "1620/07/02",
			DateWithOutSlash: "16200702"
		},
		stime: 8574928200000,
		gdate: [2241, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 8, 24] },
		gtime: 8574928200000
	},
	{
		sdate: [1620, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 15],
			DateTime: "1620-07-15 00:00:00",
			DateAber: "15 Meh 1620",
			DateMonth: "Meh",
			DateYearMonth: "1620-Meh",
			DateYear: "1620",
			DateAberWithDate: "Thu 15 Meh 1620",
			DateDoy: "1620.200",
			DateWoy: "1620W29-6",
			DateWithSlash: "1620/07/15",
			DateWithOutSlash: "16200715"
		},
		stime: 8576051400000,
		gdate: [2241, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 9, 7] },
		gtime: 8576051400000
	},
	{
		sdate: [1620, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 29],
			DateTime: "1620-07-29 00:00:00",
			DateAber: "29 Meh 1620",
			DateMonth: "Meh",
			DateYearMonth: "1620-Meh",
			DateYear: "1620",
			DateAberWithDate: "Thu 29 Meh 1620",
			DateDoy: "1620.214",
			DateWoy: "1620W31-6",
			DateWithSlash: "1620/07/29",
			DateWithOutSlash: "16200729"
		},
		stime: 8577261000000,
		gdate: [2241, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 9, 21] },
		gtime: 8577261000000
	},
	{
		sdate: [1620, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 30],
			DateTime: "1620-07-30 00:00:00",
			DateAber: "30 Meh 1620",
			DateMonth: "Meh",
			DateYearMonth: "1620-Meh",
			DateYear: "1620",
			DateAberWithDate: "Fri 30 Meh 1620",
			DateDoy: "1620.215",
			DateWoy: "1620W31-7",
			DateWithSlash: "1620/07/30",
			DateWithOutSlash: "16200730"
		},
		stime: 8577347400000,
		gdate: [2241, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 9, 22] },
		gtime: 8577347400000
	},
	{
		sdate: [1620, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 1],
			DateTime: "1620-08-01 00:00:00",
			DateAber: "01 Aba 1620",
			DateMonth: "Aba",
			DateYearMonth: "1620-Aba",
			DateYear: "1620",
			DateAberWithDate: "Sat 01 Aba 1620",
			DateDoy: "1620.216",
			DateWoy: "1620W32-1",
			DateWithSlash: "1620/08/01",
			DateWithOutSlash: "16200801"
		},
		stime: 8577433800000,
		gdate: [2241, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 9, 23] },
		gtime: 8577433800000
	},
	{
		sdate: [1620, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 2],
			DateTime: "1620-08-02 00:00:00",
			DateAber: "02 Aba 1620",
			DateMonth: "Aba",
			DateYearMonth: "1620-Aba",
			DateYear: "1620",
			DateAberWithDate: "Sun 02 Aba 1620",
			DateDoy: "1620.217",
			DateWoy: "1620W32-2",
			DateWithSlash: "1620/08/02",
			DateWithOutSlash: "16200802"
		},
		stime: 8577520200000,
		gdate: [2241, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 9, 24] },
		gtime: 8577520200000
	},
	{
		sdate: [1620, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 15],
			DateTime: "1620-08-15 00:00:00",
			DateAber: "15 Aba 1620",
			DateMonth: "Aba",
			DateYearMonth: "1620-Aba",
			DateYear: "1620",
			DateAberWithDate: "Sat 15 Aba 1620",
			DateDoy: "1620.230",
			DateWoy: "1620W34-1",
			DateWithSlash: "1620/08/15",
			DateWithOutSlash: "16200815"
		},
		stime: 8578643400000,
		gdate: [2241, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 10, 6] },
		gtime: 8578643400000
	},
	{
		sdate: [1620, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 29],
			DateTime: "1620-08-29 00:00:00",
			DateAber: "29 Aba 1620",
			DateMonth: "Aba",
			DateYearMonth: "1620-Aba",
			DateYear: "1620",
			DateAberWithDate: "Sat 29 Aba 1620",
			DateDoy: "1620.244",
			DateWoy: "1620W36-1",
			DateWithSlash: "1620/08/29",
			DateWithOutSlash: "16200829"
		},
		stime: 8579853000000,
		gdate: [2241, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 10, 20] },
		gtime: 8579853000000
	},
	{
		sdate: [1620, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 30],
			DateTime: "1620-08-30 00:00:00",
			DateAber: "30 Aba 1620",
			DateMonth: "Aba",
			DateYearMonth: "1620-Aba",
			DateYear: "1620",
			DateAberWithDate: "Sun 30 Aba 1620",
			DateDoy: "1620.245",
			DateWoy: "1620W36-2",
			DateWithSlash: "1620/08/30",
			DateWithOutSlash: "16200830"
		},
		stime: 8579939400000,
		gdate: [2241, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 10, 21] },
		gtime: 8579939400000
	},
	{
		sdate: [1620, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 1],
			DateTime: "1620-09-01 00:00:00",
			DateAber: "01 Aza 1620",
			DateMonth: "Aza",
			DateYearMonth: "1620-Aza",
			DateYear: "1620",
			DateAberWithDate: "Mon 01 Aza 1620",
			DateDoy: "1620.246",
			DateWoy: "1620W36-3",
			DateWithSlash: "1620/09/01",
			DateWithOutSlash: "16200901"
		},
		stime: 8580025800000,
		gdate: [2241, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 10, 22] },
		gtime: 8580025800000
	},
	{
		sdate: [1620, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 2],
			DateTime: "1620-09-02 00:00:00",
			DateAber: "02 Aza 1620",
			DateMonth: "Aza",
			DateYearMonth: "1620-Aza",
			DateYear: "1620",
			DateAberWithDate: "Tue 02 Aza 1620",
			DateDoy: "1620.247",
			DateWoy: "1620W36-4",
			DateWithSlash: "1620/09/02",
			DateWithOutSlash: "16200902"
		},
		stime: 8580112200000,
		gdate: [2241, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 10, 23] },
		gtime: 8580112200000
	},
	{
		sdate: [1620, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 15],
			DateTime: "1620-09-15 00:00:00",
			DateAber: "15 Aza 1620",
			DateMonth: "Aza",
			DateYearMonth: "1620-Aza",
			DateYear: "1620",
			DateAberWithDate: "Mon 15 Aza 1620",
			DateDoy: "1620.260",
			DateWoy: "1620W38-3",
			DateWithSlash: "1620/09/15",
			DateWithOutSlash: "16200915"
		},
		stime: 8581235400000,
		gdate: [2241, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 11, 6] },
		gtime: 8581235400000
	},
	{
		sdate: [1620, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 29],
			DateTime: "1620-09-29 00:00:00",
			DateAber: "29 Aza 1620",
			DateMonth: "Aza",
			DateYearMonth: "1620-Aza",
			DateYear: "1620",
			DateAberWithDate: "Mon 29 Aza 1620",
			DateDoy: "1620.274",
			DateWoy: "1620W40-3",
			DateWithSlash: "1620/09/29",
			DateWithOutSlash: "16200929"
		},
		stime: 8582445000000,
		gdate: [2241, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 11, 20] },
		gtime: 8582445000000
	},
	{
		sdate: [1620, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 30],
			DateTime: "1620-09-30 00:00:00",
			DateAber: "30 Aza 1620",
			DateMonth: "Aza",
			DateYearMonth: "1620-Aza",
			DateYear: "1620",
			DateAberWithDate: "Tue 30 Aza 1620",
			DateDoy: "1620.275",
			DateWoy: "1620W40-4",
			DateWithSlash: "1620/09/30",
			DateWithOutSlash: "16200930"
		},
		stime: 8582531400000,
		gdate: [2241, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 11, 21] },
		gtime: 8582531400000
	},
	{
		sdate: [1620, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 1],
			DateTime: "1620-10-01 00:00:00",
			DateAber: "01 Dey 1620",
			DateMonth: "Dey",
			DateYearMonth: "1620-Dey",
			DateYear: "1620",
			DateAberWithDate: "Wed 01 Dey 1620",
			DateDoy: "1620.276",
			DateWoy: "1620W40-5",
			DateWithSlash: "1620/10/01",
			DateWithOutSlash: "16201001"
		},
		stime: 8582617800000,
		gdate: [2241, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 11, 22] },
		gtime: 8582617800000
	},
	{
		sdate: [1620, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 2],
			DateTime: "1620-10-02 00:00:00",
			DateAber: "02 Dey 1620",
			DateMonth: "Dey",
			DateYearMonth: "1620-Dey",
			DateYear: "1620",
			DateAberWithDate: "Thu 02 Dey 1620",
			DateDoy: "1620.277",
			DateWoy: "1620W40-6",
			DateWithSlash: "1620/10/02",
			DateWithOutSlash: "16201002"
		},
		stime: 8582704200000,
		gdate: [2241, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 11, 23] },
		gtime: 8582704200000
	},
	{
		sdate: [1620, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 15],
			DateTime: "1620-10-15 00:00:00",
			DateAber: "15 Dey 1620",
			DateMonth: "Dey",
			DateYearMonth: "1620-Dey",
			DateYear: "1620",
			DateAberWithDate: "Wed 15 Dey 1620",
			DateDoy: "1620.290",
			DateWoy: "1620W42-5",
			DateWithSlash: "1620/10/15",
			DateWithOutSlash: "16201015"
		},
		stime: 8583827400000,
		gdate: [2242, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 0, 5] },
		gtime: 8583827400000
	},
	{
		sdate: [1620, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 29],
			DateTime: "1620-10-29 00:00:00",
			DateAber: "29 Dey 1620",
			DateMonth: "Dey",
			DateYearMonth: "1620-Dey",
			DateYear: "1620",
			DateAberWithDate: "Wed 29 Dey 1620",
			DateDoy: "1620.304",
			DateWoy: "1620W44-5",
			DateWithSlash: "1620/10/29",
			DateWithOutSlash: "16201029"
		},
		stime: 8585037000000,
		gdate: [2242, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 0, 19] },
		gtime: 8585037000000
	},
	{
		sdate: [1620, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 30],
			DateTime: "1620-10-30 00:00:00",
			DateAber: "30 Dey 1620",
			DateMonth: "Dey",
			DateYearMonth: "1620-Dey",
			DateYear: "1620",
			DateAberWithDate: "Thu 30 Dey 1620",
			DateDoy: "1620.305",
			DateWoy: "1620W44-6",
			DateWithSlash: "1620/10/30",
			DateWithOutSlash: "16201030"
		},
		stime: 8585123400000,
		gdate: [2242, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 0, 20] },
		gtime: 8585123400000
	},
	{
		sdate: [1620, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 1],
			DateTime: "1620-11-01 00:00:00",
			DateAber: "01 Bah 1620",
			DateMonth: "Bah",
			DateYearMonth: "1620-Bah",
			DateYear: "1620",
			DateAberWithDate: "Fri 01 Bah 1620",
			DateDoy: "1620.306",
			DateWoy: "1620W44-7",
			DateWithSlash: "1620/11/01",
			DateWithOutSlash: "16201101"
		},
		stime: 8585209800000,
		gdate: [2242, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 0, 21] },
		gtime: 8585209800000
	},
	{
		sdate: [1620, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 2],
			DateTime: "1620-11-02 00:00:00",
			DateAber: "02 Bah 1620",
			DateMonth: "Bah",
			DateYearMonth: "1620-Bah",
			DateYear: "1620",
			DateAberWithDate: "Sat 02 Bah 1620",
			DateDoy: "1620.307",
			DateWoy: "1620W45-1",
			DateWithSlash: "1620/11/02",
			DateWithOutSlash: "16201102"
		},
		stime: 8585296200000,
		gdate: [2242, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 0, 22] },
		gtime: 8585296200000
	},
	{
		sdate: [1620, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 15],
			DateTime: "1620-11-15 00:00:00",
			DateAber: "15 Bah 1620",
			DateMonth: "Bah",
			DateYearMonth: "1620-Bah",
			DateYear: "1620",
			DateAberWithDate: "Fri 15 Bah 1620",
			DateDoy: "1620.320",
			DateWoy: "1620W46-7",
			DateWithSlash: "1620/11/15",
			DateWithOutSlash: "16201115"
		},
		stime: 8586419400000,
		gdate: [2242, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 1, 4] },
		gtime: 8586419400000
	},
	{
		sdate: [1620, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 29],
			DateTime: "1620-11-29 00:00:00",
			DateAber: "29 Bah 1620",
			DateMonth: "Bah",
			DateYearMonth: "1620-Bah",
			DateYear: "1620",
			DateAberWithDate: "Fri 29 Bah 1620",
			DateDoy: "1620.334",
			DateWoy: "1620W48-7",
			DateWithSlash: "1620/11/29",
			DateWithOutSlash: "16201129"
		},
		stime: 8587629000000,
		gdate: [2242, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 1, 18] },
		gtime: 8587629000000
	},
	{
		sdate: [1620, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 30],
			DateTime: "1620-11-30 00:00:00",
			DateAber: "30 Bah 1620",
			DateMonth: "Bah",
			DateYearMonth: "1620-Bah",
			DateYear: "1620",
			DateAberWithDate: "Sat 30 Bah 1620",
			DateDoy: "1620.335",
			DateWoy: "1620W49-1",
			DateWithSlash: "1620/11/30",
			DateWithOutSlash: "16201130"
		},
		stime: 8587715400000,
		gdate: [2242, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 1, 19] },
		gtime: 8587715400000
	},
	{
		sdate: [1620, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 1],
			DateTime: "1620-12-01 00:00:00",
			DateAber: "01 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Sun 01 Esf 1620",
			DateDoy: "1620.336",
			DateWoy: "1620W49-2",
			DateWithSlash: "1620/12/01",
			DateWithOutSlash: "16201201"
		},
		stime: 8587801800000,
		gdate: [2242, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 1, 20] },
		gtime: 8587801800000
	},
	{
		sdate: [1620, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 2],
			DateTime: "1620-12-02 00:00:00",
			DateAber: "02 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Mon 02 Esf 1620",
			DateDoy: "1620.337",
			DateWoy: "1620W49-3",
			DateWithSlash: "1620/12/02",
			DateWithOutSlash: "16201202"
		},
		stime: 8587888200000,
		gdate: [2242, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 1, 21] },
		gtime: 8587888200000
	},
	{
		sdate: [1620, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 3],
			DateTime: "1620-12-03 00:00:00",
			DateAber: "03 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Tue 03 Esf 1620",
			DateDoy: "1620.338",
			DateWoy: "1620W49-4",
			DateWithSlash: "1620/12/03",
			DateWithOutSlash: "16201203"
		},
		stime: 8587974600000,
		gdate: [2242, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 1, 22] },
		gtime: 8587974600000
	},
	{
		sdate: [1620, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 4],
			DateTime: "1620-12-04 00:00:00",
			DateAber: "04 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Wed 04 Esf 1620",
			DateDoy: "1620.339",
			DateWoy: "1620W49-5",
			DateWithSlash: "1620/12/04",
			DateWithOutSlash: "16201204"
		},
		stime: 8588061000000,
		gdate: [2242, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 1, 23] },
		gtime: 8588061000000
	},
	{
		sdate: [1620, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 15],
			DateTime: "1620-12-15 00:00:00",
			DateAber: "15 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Sun 15 Esf 1620",
			DateDoy: "1620.350",
			DateWoy: "1620W51-2",
			DateWithSlash: "1620/12/15",
			DateWithOutSlash: "16201215"
		},
		stime: 8589011400000,
		gdate: [2242, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 2, 6] },
		gtime: 8589011400000
	},
	{
		sdate: [1620, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 25],
			DateTime: "1620-12-25 00:00:00",
			DateAber: "25 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Wed 25 Esf 1620",
			DateDoy: "1620.360",
			DateWoy: "1620W52-5",
			DateWithSlash: "1620/12/25",
			DateWithOutSlash: "16201225"
		},
		stime: 8589875400000,
		gdate: [2242, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 2, 16] },
		gtime: 8589875400000
	},
	{
		sdate: [1620, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 26],
			DateTime: "1620-12-26 00:00:00",
			DateAber: "26 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Thu 26 Esf 1620",
			DateDoy: "1620.361",
			DateWoy: "1620W52-6",
			DateWithSlash: "1620/12/26",
			DateWithOutSlash: "16201226"
		},
		stime: 8589961800000,
		gdate: [2242, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 2, 17] },
		gtime: 8589961800000
	},
	{
		sdate: [1620, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 27],
			DateTime: "1620-12-27 00:00:00",
			DateAber: "27 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Fri 27 Esf 1620",
			DateDoy: "1620.362",
			DateWoy: "1620W52-7",
			DateWithSlash: "1620/12/27",
			DateWithOutSlash: "16201227"
		},
		stime: 8590048200000,
		gdate: [2242, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 2, 18] },
		gtime: 8590048200000
	},
	{
		sdate: [1620, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 28],
			DateTime: "1620-12-28 00:00:00",
			DateAber: "28 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Sat 28 Esf 1620",
			DateDoy: "1620.363",
			DateWoy: "1621W01-1",
			DateWithSlash: "1620/12/28",
			DateWithOutSlash: "16201228"
		},
		stime: 8590134600000,
		gdate: [2242, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 2, 19] },
		gtime: 8590134600000
	},
	{
		sdate: [1620, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 29],
			DateTime: "1620-12-29 00:00:00",
			DateAber: "29 Esf 1620",
			DateMonth: "Esf",
			DateYearMonth: "1620-Esf",
			DateYear: "1620",
			DateAberWithDate: "Sun 29 Esf 1620",
			DateDoy: "1620.364",
			DateWoy: "1621W01-2",
			DateWithSlash: "1620/12/29",
			DateWithOutSlash: "16201229"
		},
		stime: 8590221000000,
		gdate: [2242, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 2, 20] },
		gtime: 8590221000000
	},

	{
		sdate: [1640, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 1],
			DateTime: "1640-01-01 01:00:00",
			DateAber: "01 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Thu 01 Far 1640",
			DateDoy: "1640.000",
			DateWoy: "1639W53-6",
			DateWithSlash: "1640/01/01",
			DateWithOutSlash: "16400101"
		},
		stime: 9189923400000,
		gdate: [2261, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 21] },
		gtime: 9189923400000
	},
	{
		sdate: [1640, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 2],
			DateTime: "1640-01-02 00:00:00",
			DateAber: "02 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Fri 02 Far 1640",
			DateDoy: "1640.001",
			DateWoy: "1639W53-7",
			DateWithSlash: "1640/01/02",
			DateWithOutSlash: "16400102"
		},
		stime: 9190006200000,
		gdate: [2261, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 22] },
		gtime: 9190006200000
	},
	{
		sdate: [1640, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 3],
			DateTime: "1640-01-03 00:00:00",
			DateAber: "03 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Sat 03 Far 1640",
			DateDoy: "1640.002",
			DateWoy: "1640W01-1",
			DateWithSlash: "1640/01/03",
			DateWithOutSlash: "16400103"
		},
		stime: 9190092600000,
		gdate: [2261, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 23] },
		gtime: 9190092600000
	},
	{
		sdate: [1640, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 4],
			DateTime: "1640-01-04 00:00:00",
			DateAber: "04 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Sun 04 Far 1640",
			DateDoy: "1640.003",
			DateWoy: "1640W01-2",
			DateWithSlash: "1640/01/04",
			DateWithOutSlash: "16400104"
		},
		stime: 9190179000000,
		gdate: [2261, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 24] },
		gtime: 9190179000000
	},
	{
		sdate: [1640, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 5],
			DateTime: "1640-01-05 00:00:00",
			DateAber: "05 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Mon 05 Far 1640",
			DateDoy: "1640.004",
			DateWoy: "1640W01-3",
			DateWithSlash: "1640/01/05",
			DateWithOutSlash: "16400105"
		},
		stime: 9190265400000,
		gdate: [2261, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 25] },
		gtime: 9190265400000
	},
	{
		sdate: [1640, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 6],
			DateTime: "1640-01-06 00:00:00",
			DateAber: "06 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Tue 06 Far 1640",
			DateDoy: "1640.005",
			DateWoy: "1640W01-4",
			DateWithSlash: "1640/01/06",
			DateWithOutSlash: "16400106"
		},
		stime: 9190351800000,
		gdate: [2261, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 26] },
		gtime: 9190351800000
	},
	{
		sdate: [1640, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 7],
			DateTime: "1640-01-07 00:00:00",
			DateAber: "07 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Wed 07 Far 1640",
			DateDoy: "1640.006",
			DateWoy: "1640W01-5",
			DateWithSlash: "1640/01/07",
			DateWithOutSlash: "16400107"
		},
		stime: 9190438200000,
		gdate: [2261, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 27] },
		gtime: 9190438200000
	},
	{
		sdate: [1640, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 15],
			DateTime: "1640-01-15 00:00:00",
			DateAber: "15 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Thu 15 Far 1640",
			DateDoy: "1640.014",
			DateWoy: "1640W02-6",
			DateWithSlash: "1640/01/15",
			DateWithOutSlash: "16400115"
		},
		stime: 9191129400000,
		gdate: [2261, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 4] },
		gtime: 9191129400000
	},
	{
		sdate: [1640, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 29],
			DateTime: "1640-01-29 00:00:00",
			DateAber: "29 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Thu 29 Far 1640",
			DateDoy: "1640.028",
			DateWoy: "1640W04-6",
			DateWithSlash: "1640/01/29",
			DateWithOutSlash: "16400129"
		},
		stime: 9192339000000,
		gdate: [2261, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 18] },
		gtime: 9192339000000
	},
	{
		sdate: [1640, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 30],
			DateTime: "1640-01-30 00:00:00",
			DateAber: "30 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Fri 30 Far 1640",
			DateDoy: "1640.029",
			DateWoy: "1640W04-7",
			DateWithSlash: "1640/01/30",
			DateWithOutSlash: "16400130"
		},
		stime: 9192425400000,
		gdate: [2261, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 19] },
		gtime: 9192425400000
	},
	{
		sdate: [1640, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 31],
			DateTime: "1640-01-31 00:00:00",
			DateAber: "31 Far 1640",
			DateMonth: "Far",
			DateYearMonth: "1640-Far",
			DateYear: "1640",
			DateAberWithDate: "Sat 31 Far 1640",
			DateDoy: "1640.030",
			DateWoy: "1640W05-1",
			DateWithSlash: "1640/01/31",
			DateWithOutSlash: "16400131"
		},
		stime: 9192511800000,
		gdate: [2261, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 20] },
		gtime: 9192511800000
	},
	{
		sdate: [1640, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 1],
			DateTime: "1640-02-01 00:00:00",
			DateAber: "01 Ord 1640",
			DateMonth: "Ord",
			DateYearMonth: "1640-Ord",
			DateYear: "1640",
			DateAberWithDate: "Sun 01 Ord 1640",
			DateDoy: "1640.031",
			DateWoy: "1640W05-2",
			DateWithSlash: "1640/02/01",
			DateWithOutSlash: "16400201"
		},
		stime: 9192598200000,
		gdate: [2261, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 21] },
		gtime: 9192598200000
	},
	{
		sdate: [1640, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 2],
			DateTime: "1640-02-02 00:00:00",
			DateAber: "02 Ord 1640",
			DateMonth: "Ord",
			DateYearMonth: "1640-Ord",
			DateYear: "1640",
			DateAberWithDate: "Mon 02 Ord 1640",
			DateDoy: "1640.032",
			DateWoy: "1640W05-3",
			DateWithSlash: "1640/02/02",
			DateWithOutSlash: "16400202"
		},
		stime: 9192684600000,
		gdate: [2261, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 22] },
		gtime: 9192684600000
	},
	{
		sdate: [1640, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 15],
			DateTime: "1640-02-15 00:00:00",
			DateAber: "15 Ord 1640",
			DateMonth: "Ord",
			DateYearMonth: "1640-Ord",
			DateYear: "1640",
			DateAberWithDate: "Sun 15 Ord 1640",
			DateDoy: "1640.045",
			DateWoy: "1640W07-2",
			DateWithSlash: "1640/02/15",
			DateWithOutSlash: "16400215"
		},
		stime: 9193807800000,
		gdate: [2261, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 5] },
		gtime: 9193807800000
	},
	{
		sdate: [1640, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 30],
			DateTime: "1640-02-30 00:00:00",
			DateAber: "30 Ord 1640",
			DateMonth: "Ord",
			DateYearMonth: "1640-Ord",
			DateYear: "1640",
			DateAberWithDate: "Mon 30 Ord 1640",
			DateDoy: "1640.060",
			DateWoy: "1640W09-3",
			DateWithSlash: "1640/02/30",
			DateWithOutSlash: "16400230"
		},
		stime: 9195103800000,
		gdate: [2261, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 20] },
		gtime: 9195103800000
	},
	{
		sdate: [1640, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 31],
			DateTime: "1640-02-31 00:00:00",
			DateAber: "31 Ord 1640",
			DateMonth: "Ord",
			DateYearMonth: "1640-Ord",
			DateYear: "1640",
			DateAberWithDate: "Tue 31 Ord 1640",
			DateDoy: "1640.061",
			DateWoy: "1640W09-4",
			DateWithSlash: "1640/02/31",
			DateWithOutSlash: "16400231"
		},
		stime: 9195190200000,
		gdate: [2261, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 21] },
		gtime: 9195190200000
	},
	{
		sdate: [1640, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 1],
			DateTime: "1640-03-01 00:00:00",
			DateAber: "01 Kho 1640",
			DateMonth: "Kho",
			DateYearMonth: "1640-Kho",
			DateYear: "1640",
			DateAberWithDate: "Wed 01 Kho 1640",
			DateDoy: "1640.062",
			DateWoy: "1640W09-5",
			DateWithSlash: "1640/03/01",
			DateWithOutSlash: "16400301"
		},
		stime: 9195276600000,
		gdate: [2261, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 22] },
		gtime: 9195276600000
	},
	{
		sdate: [1640, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 2],
			DateTime: "1640-03-02 00:00:00",
			DateAber: "02 Kho 1640",
			DateMonth: "Kho",
			DateYearMonth: "1640-Kho",
			DateYear: "1640",
			DateAberWithDate: "Thu 02 Kho 1640",
			DateDoy: "1640.063",
			DateWoy: "1640W09-6",
			DateWithSlash: "1640/03/02",
			DateWithOutSlash: "16400302"
		},
		stime: 9195363000000,
		gdate: [2261, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 23] },
		gtime: 9195363000000
	},
	{
		sdate: [1640, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 15],
			DateTime: "1640-03-15 00:00:00",
			DateAber: "15 Kho 1640",
			DateMonth: "Kho",
			DateYearMonth: "1640-Kho",
			DateYear: "1640",
			DateAberWithDate: "Wed 15 Kho 1640",
			DateDoy: "1640.076",
			DateWoy: "1640W11-5",
			DateWithSlash: "1640/03/15",
			DateWithOutSlash: "16400315"
		},
		stime: 9196486200000,
		gdate: [2261, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 5] },
		gtime: 9196486200000
	},
	{
		sdate: [1640, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 30],
			DateTime: "1640-03-30 00:00:00",
			DateAber: "30 Kho 1640",
			DateMonth: "Kho",
			DateYearMonth: "1640-Kho",
			DateYear: "1640",
			DateAberWithDate: "Thu 30 Kho 1640",
			DateDoy: "1640.091",
			DateWoy: "1640W13-6",
			DateWithSlash: "1640/03/30",
			DateWithOutSlash: "16400330"
		},
		stime: 9197782200000,
		gdate: [2261, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 20] },
		gtime: 9197782200000
	},
	{
		sdate: [1640, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 31],
			DateTime: "1640-03-31 00:00:00",
			DateAber: "31 Kho 1640",
			DateMonth: "Kho",
			DateYearMonth: "1640-Kho",
			DateYear: "1640",
			DateAberWithDate: "Fri 31 Kho 1640",
			DateDoy: "1640.092",
			DateWoy: "1640W13-7",
			DateWithSlash: "1640/03/31",
			DateWithOutSlash: "16400331"
		},
		stime: 9197868600000,
		gdate: [2261, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 21] },
		gtime: 9197868600000
	},
	{
		sdate: [1640, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 1],
			DateTime: "1640-04-01 00:00:00",
			DateAber: "01 Tir 1640",
			DateMonth: "Tir",
			DateYearMonth: "1640-Tir",
			DateYear: "1640",
			DateAberWithDate: "Sat 01 Tir 1640",
			DateDoy: "1640.093",
			DateWoy: "1640W14-1",
			DateWithSlash: "1640/04/01",
			DateWithOutSlash: "16400401"
		},
		stime: 9197955000000,
		gdate: [2261, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 22] },
		gtime: 9197955000000
	},
	{
		sdate: [1640, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 2],
			DateTime: "1640-04-02 00:00:00",
			DateAber: "02 Tir 1640",
			DateMonth: "Tir",
			DateYearMonth: "1640-Tir",
			DateYear: "1640",
			DateAberWithDate: "Sun 02 Tir 1640",
			DateDoy: "1640.094",
			DateWoy: "1640W14-2",
			DateWithSlash: "1640/04/02",
			DateWithOutSlash: "16400402"
		},
		stime: 9198041400000,
		gdate: [2261, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 23] },
		gtime: 9198041400000
	},
	{
		sdate: [1640, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 15],
			DateTime: "1640-04-15 00:00:00",
			DateAber: "15 Tir 1640",
			DateMonth: "Tir",
			DateYearMonth: "1640-Tir",
			DateYear: "1640",
			DateAberWithDate: "Sat 15 Tir 1640",
			DateDoy: "1640.107",
			DateWoy: "1640W16-1",
			DateWithSlash: "1640/04/15",
			DateWithOutSlash: "16400415"
		},
		stime: 9199164600000,
		gdate: [2261, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 6] },
		gtime: 9199164600000
	},
	{
		sdate: [1640, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 30],
			DateTime: "1640-04-30 00:00:00",
			DateAber: "30 Tir 1640",
			DateMonth: "Tir",
			DateYearMonth: "1640-Tir",
			DateYear: "1640",
			DateAberWithDate: "Sun 30 Tir 1640",
			DateDoy: "1640.122",
			DateWoy: "1640W18-2",
			DateWithSlash: "1640/04/30",
			DateWithOutSlash: "16400430"
		},
		stime: 9200460600000,
		gdate: [2261, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 21] },
		gtime: 9200460600000
	},
	{
		sdate: [1640, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 31],
			DateTime: "1640-04-31 00:00:00",
			DateAber: "31 Tir 1640",
			DateMonth: "Tir",
			DateYearMonth: "1640-Tir",
			DateYear: "1640",
			DateAberWithDate: "Mon 31 Tir 1640",
			DateDoy: "1640.123",
			DateWoy: "1640W18-3",
			DateWithSlash: "1640/04/31",
			DateWithOutSlash: "16400431"
		},
		stime: 9200547000000,
		gdate: [2261, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 22] },
		gtime: 9200547000000
	},
	{
		sdate: [1640, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 1],
			DateTime: "1640-05-01 00:00:00",
			DateAber: "01 Amo 1640",
			DateMonth: "Amo",
			DateYearMonth: "1640-Amo",
			DateYear: "1640",
			DateAberWithDate: "Tue 01 Amo 1640",
			DateDoy: "1640.124",
			DateWoy: "1640W18-4",
			DateWithSlash: "1640/05/01",
			DateWithOutSlash: "16400501"
		},
		stime: 9200633400000,
		gdate: [2261, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 23] },
		gtime: 9200633400000
	},
	{
		sdate: [1640, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 2],
			DateTime: "1640-05-02 00:00:00",
			DateAber: "02 Amo 1640",
			DateMonth: "Amo",
			DateYearMonth: "1640-Amo",
			DateYear: "1640",
			DateAberWithDate: "Wed 02 Amo 1640",
			DateDoy: "1640.125",
			DateWoy: "1640W18-5",
			DateWithSlash: "1640/05/02",
			DateWithOutSlash: "16400502"
		},
		stime: 9200719800000,
		gdate: [2261, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 24] },
		gtime: 9200719800000
	},
	{
		sdate: [1640, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 15],
			DateTime: "1640-05-15 00:00:00",
			DateAber: "15 Amo 1640",
			DateMonth: "Amo",
			DateYearMonth: "1640-Amo",
			DateYear: "1640",
			DateAberWithDate: "Tue 15 Amo 1640",
			DateDoy: "1640.138",
			DateWoy: "1640W20-4",
			DateWithSlash: "1640/05/15",
			DateWithOutSlash: "16400515"
		},
		stime: 9201843000000,
		gdate: [2261, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 6] },
		gtime: 9201843000000
	},
	{
		sdate: [1640, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 30],
			DateTime: "1640-05-30 00:00:00",
			DateAber: "30 Amo 1640",
			DateMonth: "Amo",
			DateYearMonth: "1640-Amo",
			DateYear: "1640",
			DateAberWithDate: "Wed 30 Amo 1640",
			DateDoy: "1640.153",
			DateWoy: "1640W22-5",
			DateWithSlash: "1640/05/30",
			DateWithOutSlash: "16400530"
		},
		stime: 9203139000000,
		gdate: [2261, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 21] },
		gtime: 9203139000000
	},
	{
		sdate: [1640, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 31],
			DateTime: "1640-05-31 00:00:00",
			DateAber: "31 Amo 1640",
			DateMonth: "Amo",
			DateYearMonth: "1640-Amo",
			DateYear: "1640",
			DateAberWithDate: "Thu 31 Amo 1640",
			DateDoy: "1640.154",
			DateWoy: "1640W22-6",
			DateWithSlash: "1640/05/31",
			DateWithOutSlash: "16400531"
		},
		stime: 9203225400000,
		gdate: [2261, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 22] },
		gtime: 9203225400000
	},
	{
		sdate: [1640, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 1],
			DateTime: "1640-06-01 00:00:00",
			DateAber: "01 Sha 1640",
			DateMonth: "Sha",
			DateYearMonth: "1640-Sha",
			DateYear: "1640",
			DateAberWithDate: "Fri 01 Sha 1640",
			DateDoy: "1640.155",
			DateWoy: "1640W22-7",
			DateWithSlash: "1640/06/01",
			DateWithOutSlash: "16400601"
		},
		stime: 9203311800000,
		gdate: [2261, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 23] },
		gtime: 9203311800000
	},
	{
		sdate: [1640, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 2],
			DateTime: "1640-06-02 00:00:00",
			DateAber: "02 Sha 1640",
			DateMonth: "Sha",
			DateYearMonth: "1640-Sha",
			DateYear: "1640",
			DateAberWithDate: "Sat 02 Sha 1640",
			DateDoy: "1640.156",
			DateWoy: "1640W23-1",
			DateWithSlash: "1640/06/02",
			DateWithOutSlash: "16400602"
		},
		stime: 9203398200000,
		gdate: [2261, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 24] },
		gtime: 9203398200000
	},
	{
		sdate: [1640, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 15],
			DateTime: "1640-06-15 00:00:00",
			DateAber: "15 Sha 1640",
			DateMonth: "Sha",
			DateYearMonth: "1640-Sha",
			DateYear: "1640",
			DateAberWithDate: "Fri 15 Sha 1640",
			DateDoy: "1640.169",
			DateWoy: "1640W24-7",
			DateWithSlash: "1640/06/15",
			DateWithOutSlash: "16400615"
		},
		stime: 9204521400000,
		gdate: [2261, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 8, 6] },
		gtime: 9204521400000
	},
	{
		sdate: [1640, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 29],
			DateTime: "1640-06-29 00:00:00",
			DateAber: "29 Sha 1640",
			DateMonth: "Sha",
			DateYearMonth: "1640-Sha",
			DateYear: "1640",
			DateAberWithDate: "Fri 29 Sha 1640",
			DateDoy: "1640.183",
			DateWoy: "1640W26-7",
			DateWithSlash: "1640/06/29",
			DateWithOutSlash: "16400629"
		},
		stime: 9205731000000,
		gdate: [2261, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 8, 20] },
		gtime: 9205731000000
	},
	{
		sdate: [1640, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 30],
			DateTime: "1640-06-30 00:00:00",
			DateAber: "30 Sha 1640",
			DateMonth: "Sha",
			DateYearMonth: "1640-Sha",
			DateYear: "1640",
			DateAberWithDate: "Sat 30 Sha 1640",
			DateDoy: "1640.184",
			DateWoy: "1640W27-1",
			DateWithSlash: "1640/06/30",
			DateWithOutSlash: "16400630"
		},
		stime: 9205821000000,
		gdate: [2261, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 8, 21] },
		gtime: 9205821000000
	},
	{
		sdate: [1640, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 1],
			DateTime: "1640-07-01 00:00:00",
			DateAber: "01 Meh 1640",
			DateMonth: "Meh",
			DateYearMonth: "1640-Meh",
			DateYear: "1640",
			DateAberWithDate: "Mon 01 Meh 1640",
			DateDoy: "1640.186",
			DateWoy: "1640W27-3",
			DateWithSlash: "1640/07/01",
			DateWithOutSlash: "16400701"
		},
		stime: 9205993800000,
		gdate: [2261, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 8, 23] },
		gtime: 9205993800000
	},
	{
		sdate: [1640, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 2],
			DateTime: "1640-07-02 00:00:00",
			DateAber: "02 Meh 1640",
			DateMonth: "Meh",
			DateYearMonth: "1640-Meh",
			DateYear: "1640",
			DateAberWithDate: "Tue 02 Meh 1640",
			DateDoy: "1640.187",
			DateWoy: "1640W27-4",
			DateWithSlash: "1640/07/02",
			DateWithOutSlash: "16400702"
		},
		stime: 9206080200000,
		gdate: [2261, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 8, 24] },
		gtime: 9206080200000
	},
	{
		sdate: [1640, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 15],
			DateTime: "1640-07-15 00:00:00",
			DateAber: "15 Meh 1640",
			DateMonth: "Meh",
			DateYearMonth: "1640-Meh",
			DateYear: "1640",
			DateAberWithDate: "Mon 15 Meh 1640",
			DateDoy: "1640.200",
			DateWoy: "1640W29-3",
			DateWithSlash: "1640/07/15",
			DateWithOutSlash: "16400715"
		},
		stime: 9207203400000,
		gdate: [2261, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 9, 7] },
		gtime: 9207203400000
	},
	{
		sdate: [1640, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 29],
			DateTime: "1640-07-29 00:00:00",
			DateAber: "29 Meh 1640",
			DateMonth: "Meh",
			DateYearMonth: "1640-Meh",
			DateYear: "1640",
			DateAberWithDate: "Mon 29 Meh 1640",
			DateDoy: "1640.214",
			DateWoy: "1640W31-3",
			DateWithSlash: "1640/07/29",
			DateWithOutSlash: "16400729"
		},
		stime: 9208413000000,
		gdate: [2261, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 9, 21] },
		gtime: 9208413000000
	},
	{
		sdate: [1640, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 30],
			DateTime: "1640-07-30 00:00:00",
			DateAber: "30 Meh 1640",
			DateMonth: "Meh",
			DateYearMonth: "1640-Meh",
			DateYear: "1640",
			DateAberWithDate: "Tue 30 Meh 1640",
			DateDoy: "1640.215",
			DateWoy: "1640W31-4",
			DateWithSlash: "1640/07/30",
			DateWithOutSlash: "16400730"
		},
		stime: 9208499400000,
		gdate: [2261, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 9, 22] },
		gtime: 9208499400000
	},
	{
		sdate: [1640, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 1],
			DateTime: "1640-08-01 00:00:00",
			DateAber: "01 Aba 1640",
			DateMonth: "Aba",
			DateYearMonth: "1640-Aba",
			DateYear: "1640",
			DateAberWithDate: "Wed 01 Aba 1640",
			DateDoy: "1640.216",
			DateWoy: "1640W31-5",
			DateWithSlash: "1640/08/01",
			DateWithOutSlash: "16400801"
		},
		stime: 9208585800000,
		gdate: [2261, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 9, 23] },
		gtime: 9208585800000
	},
	{
		sdate: [1640, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 2],
			DateTime: "1640-08-02 00:00:00",
			DateAber: "02 Aba 1640",
			DateMonth: "Aba",
			DateYearMonth: "1640-Aba",
			DateYear: "1640",
			DateAberWithDate: "Thu 02 Aba 1640",
			DateDoy: "1640.217",
			DateWoy: "1640W31-6",
			DateWithSlash: "1640/08/02",
			DateWithOutSlash: "16400802"
		},
		stime: 9208672200000,
		gdate: [2261, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 9, 24] },
		gtime: 9208672200000
	},
	{
		sdate: [1640, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 15],
			DateTime: "1640-08-15 00:00:00",
			DateAber: "15 Aba 1640",
			DateMonth: "Aba",
			DateYearMonth: "1640-Aba",
			DateYear: "1640",
			DateAberWithDate: "Wed 15 Aba 1640",
			DateDoy: "1640.230",
			DateWoy: "1640W33-5",
			DateWithSlash: "1640/08/15",
			DateWithOutSlash: "16400815"
		},
		stime: 9209795400000,
		gdate: [2261, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 10, 6] },
		gtime: 9209795400000
	},
	{
		sdate: [1640, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 29],
			DateTime: "1640-08-29 00:00:00",
			DateAber: "29 Aba 1640",
			DateMonth: "Aba",
			DateYearMonth: "1640-Aba",
			DateYear: "1640",
			DateAberWithDate: "Wed 29 Aba 1640",
			DateDoy: "1640.244",
			DateWoy: "1640W35-5",
			DateWithSlash: "1640/08/29",
			DateWithOutSlash: "16400829"
		},
		stime: 9211005000000,
		gdate: [2261, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 10, 20] },
		gtime: 9211005000000
	},
	{
		sdate: [1640, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 30],
			DateTime: "1640-08-30 00:00:00",
			DateAber: "30 Aba 1640",
			DateMonth: "Aba",
			DateYearMonth: "1640-Aba",
			DateYear: "1640",
			DateAberWithDate: "Thu 30 Aba 1640",
			DateDoy: "1640.245",
			DateWoy: "1640W35-6",
			DateWithSlash: "1640/08/30",
			DateWithOutSlash: "16400830"
		},
		stime: 9211091400000,
		gdate: [2261, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 10, 21] },
		gtime: 9211091400000
	},
	{
		sdate: [1640, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 1],
			DateTime: "1640-09-01 00:00:00",
			DateAber: "01 Aza 1640",
			DateMonth: "Aza",
			DateYearMonth: "1640-Aza",
			DateYear: "1640",
			DateAberWithDate: "Fri 01 Aza 1640",
			DateDoy: "1640.246",
			DateWoy: "1640W35-7",
			DateWithSlash: "1640/09/01",
			DateWithOutSlash: "16400901"
		},
		stime: 9211177800000,
		gdate: [2261, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 10, 22] },
		gtime: 9211177800000
	},
	{
		sdate: [1640, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 2],
			DateTime: "1640-09-02 00:00:00",
			DateAber: "02 Aza 1640",
			DateMonth: "Aza",
			DateYearMonth: "1640-Aza",
			DateYear: "1640",
			DateAberWithDate: "Sat 02 Aza 1640",
			DateDoy: "1640.247",
			DateWoy: "1640W36-1",
			DateWithSlash: "1640/09/02",
			DateWithOutSlash: "16400902"
		},
		stime: 9211264200000,
		gdate: [2261, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 10, 23] },
		gtime: 9211264200000
	},
	{
		sdate: [1640, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 15],
			DateTime: "1640-09-15 00:00:00",
			DateAber: "15 Aza 1640",
			DateMonth: "Aza",
			DateYearMonth: "1640-Aza",
			DateYear: "1640",
			DateAberWithDate: "Fri 15 Aza 1640",
			DateDoy: "1640.260",
			DateWoy: "1640W37-7",
			DateWithSlash: "1640/09/15",
			DateWithOutSlash: "16400915"
		},
		stime: 9212387400000,
		gdate: [2261, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 11, 6] },
		gtime: 9212387400000
	},
	{
		sdate: [1640, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 29],
			DateTime: "1640-09-29 00:00:00",
			DateAber: "29 Aza 1640",
			DateMonth: "Aza",
			DateYearMonth: "1640-Aza",
			DateYear: "1640",
			DateAberWithDate: "Fri 29 Aza 1640",
			DateDoy: "1640.274",
			DateWoy: "1640W39-7",
			DateWithSlash: "1640/09/29",
			DateWithOutSlash: "16400929"
		},
		stime: 9213597000000,
		gdate: [2261, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 11, 20] },
		gtime: 9213597000000
	},
	{
		sdate: [1640, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 30],
			DateTime: "1640-09-30 00:00:00",
			DateAber: "30 Aza 1640",
			DateMonth: "Aza",
			DateYearMonth: "1640-Aza",
			DateYear: "1640",
			DateAberWithDate: "Sat 30 Aza 1640",
			DateDoy: "1640.275",
			DateWoy: "1640W40-1",
			DateWithSlash: "1640/09/30",
			DateWithOutSlash: "16400930"
		},
		stime: 9213683400000,
		gdate: [2261, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 11, 21] },
		gtime: 9213683400000
	},
	{
		sdate: [1640, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 1],
			DateTime: "1640-10-01 00:00:00",
			DateAber: "01 Dey 1640",
			DateMonth: "Dey",
			DateYearMonth: "1640-Dey",
			DateYear: "1640",
			DateAberWithDate: "Sun 01 Dey 1640",
			DateDoy: "1640.276",
			DateWoy: "1640W40-2",
			DateWithSlash: "1640/10/01",
			DateWithOutSlash: "16401001"
		},
		stime: 9213769800000,
		gdate: [2261, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 11, 22] },
		gtime: 9213769800000
	},
	{
		sdate: [1640, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 2],
			DateTime: "1640-10-02 00:00:00",
			DateAber: "02 Dey 1640",
			DateMonth: "Dey",
			DateYearMonth: "1640-Dey",
			DateYear: "1640",
			DateAberWithDate: "Mon 02 Dey 1640",
			DateDoy: "1640.277",
			DateWoy: "1640W40-3",
			DateWithSlash: "1640/10/02",
			DateWithOutSlash: "16401002"
		},
		stime: 9213856200000,
		gdate: [2261, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 11, 23] },
		gtime: 9213856200000
	},
	{
		sdate: [1640, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 15],
			DateTime: "1640-10-15 00:00:00",
			DateAber: "15 Dey 1640",
			DateMonth: "Dey",
			DateYearMonth: "1640-Dey",
			DateYear: "1640",
			DateAberWithDate: "Sun 15 Dey 1640",
			DateDoy: "1640.290",
			DateWoy: "1640W42-2",
			DateWithSlash: "1640/10/15",
			DateWithOutSlash: "16401015"
		},
		stime: 9214979400000,
		gdate: [2262, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 0, 5] },
		gtime: 9214979400000
	},
	{
		sdate: [1640, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 29],
			DateTime: "1640-10-29 00:00:00",
			DateAber: "29 Dey 1640",
			DateMonth: "Dey",
			DateYearMonth: "1640-Dey",
			DateYear: "1640",
			DateAberWithDate: "Sun 29 Dey 1640",
			DateDoy: "1640.304",
			DateWoy: "1640W44-2",
			DateWithSlash: "1640/10/29",
			DateWithOutSlash: "16401029"
		},
		stime: 9216189000000,
		gdate: [2262, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 0, 19] },
		gtime: 9216189000000
	},
	{
		sdate: [1640, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 30],
			DateTime: "1640-10-30 00:00:00",
			DateAber: "30 Dey 1640",
			DateMonth: "Dey",
			DateYearMonth: "1640-Dey",
			DateYear: "1640",
			DateAberWithDate: "Mon 30 Dey 1640",
			DateDoy: "1640.305",
			DateWoy: "1640W44-3",
			DateWithSlash: "1640/10/30",
			DateWithOutSlash: "16401030"
		},
		stime: 9216275400000,
		gdate: [2262, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 0, 20] },
		gtime: 9216275400000
	},
	{
		sdate: [1640, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 1],
			DateTime: "1640-11-01 00:00:00",
			DateAber: "01 Bah 1640",
			DateMonth: "Bah",
			DateYearMonth: "1640-Bah",
			DateYear: "1640",
			DateAberWithDate: "Tue 01 Bah 1640",
			DateDoy: "1640.306",
			DateWoy: "1640W44-4",
			DateWithSlash: "1640/11/01",
			DateWithOutSlash: "16401101"
		},
		stime: 9216361800000,
		gdate: [2262, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 0, 21] },
		gtime: 9216361800000
	},
	{
		sdate: [1640, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 2],
			DateTime: "1640-11-02 00:00:00",
			DateAber: "02 Bah 1640",
			DateMonth: "Bah",
			DateYearMonth: "1640-Bah",
			DateYear: "1640",
			DateAberWithDate: "Wed 02 Bah 1640",
			DateDoy: "1640.307",
			DateWoy: "1640W44-5",
			DateWithSlash: "1640/11/02",
			DateWithOutSlash: "16401102"
		},
		stime: 9216448200000,
		gdate: [2262, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 0, 22] },
		gtime: 9216448200000
	},
	{
		sdate: [1640, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 15],
			DateTime: "1640-11-15 00:00:00",
			DateAber: "15 Bah 1640",
			DateMonth: "Bah",
			DateYearMonth: "1640-Bah",
			DateYear: "1640",
			DateAberWithDate: "Tue 15 Bah 1640",
			DateDoy: "1640.320",
			DateWoy: "1640W46-4",
			DateWithSlash: "1640/11/15",
			DateWithOutSlash: "16401115"
		},
		stime: 9217571400000,
		gdate: [2262, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 1, 4] },
		gtime: 9217571400000
	},
	{
		sdate: [1640, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 29],
			DateTime: "1640-11-29 00:00:00",
			DateAber: "29 Bah 1640",
			DateMonth: "Bah",
			DateYearMonth: "1640-Bah",
			DateYear: "1640",
			DateAberWithDate: "Tue 29 Bah 1640",
			DateDoy: "1640.334",
			DateWoy: "1640W48-4",
			DateWithSlash: "1640/11/29",
			DateWithOutSlash: "16401129"
		},
		stime: 9218781000000,
		gdate: [2262, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 1, 18] },
		gtime: 9218781000000
	},
	{
		sdate: [1640, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 30],
			DateTime: "1640-11-30 00:00:00",
			DateAber: "30 Bah 1640",
			DateMonth: "Bah",
			DateYearMonth: "1640-Bah",
			DateYear: "1640",
			DateAberWithDate: "Wed 30 Bah 1640",
			DateDoy: "1640.335",
			DateWoy: "1640W48-5",
			DateWithSlash: "1640/11/30",
			DateWithOutSlash: "16401130"
		},
		stime: 9218867400000,
		gdate: [2262, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 1, 19] },
		gtime: 9218867400000
	},
	{
		sdate: [1640, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 1],
			DateTime: "1640-12-01 00:00:00",
			DateAber: "01 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Thu 01 Esf 1640",
			DateDoy: "1640.336",
			DateWoy: "1640W48-6",
			DateWithSlash: "1640/12/01",
			DateWithOutSlash: "16401201"
		},
		stime: 9218953800000,
		gdate: [2262, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 1, 20] },
		gtime: 9218953800000
	},
	{
		sdate: [1640, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 2],
			DateTime: "1640-12-02 00:00:00",
			DateAber: "02 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Fri 02 Esf 1640",
			DateDoy: "1640.337",
			DateWoy: "1640W48-7",
			DateWithSlash: "1640/12/02",
			DateWithOutSlash: "16401202"
		},
		stime: 9219040200000,
		gdate: [2262, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 1, 21] },
		gtime: 9219040200000
	},
	{
		sdate: [1640, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 3],
			DateTime: "1640-12-03 00:00:00",
			DateAber: "03 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Sat 03 Esf 1640",
			DateDoy: "1640.338",
			DateWoy: "1640W49-1",
			DateWithSlash: "1640/12/03",
			DateWithOutSlash: "16401203"
		},
		stime: 9219126600000,
		gdate: [2262, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 1, 22] },
		gtime: 9219126600000
	},
	{
		sdate: [1640, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 4],
			DateTime: "1640-12-04 00:00:00",
			DateAber: "04 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Sun 04 Esf 1640",
			DateDoy: "1640.339",
			DateWoy: "1640W49-2",
			DateWithSlash: "1640/12/04",
			DateWithOutSlash: "16401204"
		},
		stime: 9219213000000,
		gdate: [2262, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 1, 23] },
		gtime: 9219213000000
	},
	{
		sdate: [1640, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 15],
			DateTime: "1640-12-15 00:00:00",
			DateAber: "15 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Thu 15 Esf 1640",
			DateDoy: "1640.350",
			DateWoy: "1640W50-6",
			DateWithSlash: "1640/12/15",
			DateWithOutSlash: "16401215"
		},
		stime: 9220163400000,
		gdate: [2262, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 2, 6] },
		gtime: 9220163400000
	},
	{
		sdate: [1640, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 25],
			DateTime: "1640-12-25 00:00:00",
			DateAber: "25 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Sun 25 Esf 1640",
			DateDoy: "1640.360",
			DateWoy: "1640W52-2",
			DateWithSlash: "1640/12/25",
			DateWithOutSlash: "16401225"
		},
		stime: 9221027400000,
		gdate: [2262, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 2, 16] },
		gtime: 9221027400000
	},
	{
		sdate: [1640, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 26],
			DateTime: "1640-12-26 00:00:00",
			DateAber: "26 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Mon 26 Esf 1640",
			DateDoy: "1640.361",
			DateWoy: "1640W52-3",
			DateWithSlash: "1640/12/26",
			DateWithOutSlash: "16401226"
		},
		stime: 9221113800000,
		gdate: [2262, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 2, 17] },
		gtime: 9221113800000
	},
	{
		sdate: [1640, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 27],
			DateTime: "1640-12-27 00:00:00",
			DateAber: "27 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Tue 27 Esf 1640",
			DateDoy: "1640.362",
			DateWoy: "1640W52-4",
			DateWithSlash: "1640/12/27",
			DateWithOutSlash: "16401227"
		},
		stime: 9221200200000,
		gdate: [2262, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 2, 18] },
		gtime: 9221200200000
	},
	{
		sdate: [1640, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 28],
			DateTime: "1640-12-28 00:00:00",
			DateAber: "28 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Wed 28 Esf 1640",
			DateDoy: "1640.363",
			DateWoy: "1640W52-5",
			DateWithSlash: "1640/12/28",
			DateWithOutSlash: "16401228"
		},
		stime: 9221286600000,
		gdate: [2262, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 2, 19] },
		gtime: 9221286600000
	},
	{
		sdate: [1640, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 29],
			DateTime: "1640-12-29 00:00:00",
			DateAber: "29 Esf 1640",
			DateMonth: "Esf",
			DateYearMonth: "1640-Esf",
			DateYear: "1640",
			DateAberWithDate: "Thu 29 Esf 1640",
			DateDoy: "1640.364",
			DateWoy: "1640W52-6",
			DateWithSlash: "1640/12/29",
			DateWithOutSlash: "16401229"
		},
		stime: 9221373000000,
		gdate: [2262, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 2, 20] },
		gtime: 9221373000000
	},

	{
		sdate: [1660, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 1],
			DateTime: "1660-01-01 01:00:00",
			DateAber: "01 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Mon 01 Far 1660",
			DateDoy: "1660.000",
			DateWoy: "1660W01-3",
			DateWithSlash: "1660/01/01",
			DateWithOutSlash: "16600101"
		},
		stime: 9821075400000,
		gdate: [2281, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 21] },
		gtime: 9821075400000
	},
	{
		sdate: [1660, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 2],
			DateTime: "1660-01-02 00:00:00",
			DateAber: "02 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Tue 02 Far 1660",
			DateDoy: "1660.001",
			DateWoy: "1660W01-4",
			DateWithSlash: "1660/01/02",
			DateWithOutSlash: "16600102"
		},
		stime: 9821158200000,
		gdate: [2281, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 22] },
		gtime: 9821158200000
	},
	{
		sdate: [1660, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 3],
			DateTime: "1660-01-03 00:00:00",
			DateAber: "03 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Wed 03 Far 1660",
			DateDoy: "1660.002",
			DateWoy: "1660W01-5",
			DateWithSlash: "1660/01/03",
			DateWithOutSlash: "16600103"
		},
		stime: 9821244600000,
		gdate: [2281, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 23] },
		gtime: 9821244600000
	},
	{
		sdate: [1660, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 4],
			DateTime: "1660-01-04 00:00:00",
			DateAber: "04 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Thu 04 Far 1660",
			DateDoy: "1660.003",
			DateWoy: "1660W01-6",
			DateWithSlash: "1660/01/04",
			DateWithOutSlash: "16600104"
		},
		stime: 9821331000000,
		gdate: [2281, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 24] },
		gtime: 9821331000000
	},
	{
		sdate: [1660, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 5],
			DateTime: "1660-01-05 00:00:00",
			DateAber: "05 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Fri 05 Far 1660",
			DateDoy: "1660.004",
			DateWoy: "1660W01-7",
			DateWithSlash: "1660/01/05",
			DateWithOutSlash: "16600105"
		},
		stime: 9821417400000,
		gdate: [2281, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 25] },
		gtime: 9821417400000
	},
	{
		sdate: [1660, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 6],
			DateTime: "1660-01-06 00:00:00",
			DateAber: "06 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Sat 06 Far 1660",
			DateDoy: "1660.005",
			DateWoy: "1660W02-1",
			DateWithSlash: "1660/01/06",
			DateWithOutSlash: "16600106"
		},
		stime: 9821503800000,
		gdate: [2281, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 26] },
		gtime: 9821503800000
	},
	{
		sdate: [1660, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 7],
			DateTime: "1660-01-07 00:00:00",
			DateAber: "07 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Sun 07 Far 1660",
			DateDoy: "1660.006",
			DateWoy: "1660W02-2",
			DateWithSlash: "1660/01/07",
			DateWithOutSlash: "16600107"
		},
		stime: 9821590200000,
		gdate: [2281, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 27] },
		gtime: 9821590200000
	},
	{
		sdate: [1660, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 15],
			DateTime: "1660-01-15 00:00:00",
			DateAber: "15 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Mon 15 Far 1660",
			DateDoy: "1660.014",
			DateWoy: "1660W03-3",
			DateWithSlash: "1660/01/15",
			DateWithOutSlash: "16600115"
		},
		stime: 9822281400000,
		gdate: [2281, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 4] },
		gtime: 9822281400000
	},
	{
		sdate: [1660, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 29],
			DateTime: "1660-01-29 00:00:00",
			DateAber: "29 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Mon 29 Far 1660",
			DateDoy: "1660.028",
			DateWoy: "1660W05-3",
			DateWithSlash: "1660/01/29",
			DateWithOutSlash: "16600129"
		},
		stime: 9823491000000,
		gdate: [2281, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 18] },
		gtime: 9823491000000
	},
	{
		sdate: [1660, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 30],
			DateTime: "1660-01-30 00:00:00",
			DateAber: "30 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Tue 30 Far 1660",
			DateDoy: "1660.029",
			DateWoy: "1660W05-4",
			DateWithSlash: "1660/01/30",
			DateWithOutSlash: "16600130"
		},
		stime: 9823577400000,
		gdate: [2281, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 19] },
		gtime: 9823577400000
	},
	{
		sdate: [1660, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 31],
			DateTime: "1660-01-31 00:00:00",
			DateAber: "31 Far 1660",
			DateMonth: "Far",
			DateYearMonth: "1660-Far",
			DateYear: "1660",
			DateAberWithDate: "Wed 31 Far 1660",
			DateDoy: "1660.030",
			DateWoy: "1660W05-5",
			DateWithSlash: "1660/01/31",
			DateWithOutSlash: "16600131"
		},
		stime: 9823663800000,
		gdate: [2281, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 20] },
		gtime: 9823663800000
	},
	{
		sdate: [1660, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 1],
			DateTime: "1660-02-01 00:00:00",
			DateAber: "01 Ord 1660",
			DateMonth: "Ord",
			DateYearMonth: "1660-Ord",
			DateYear: "1660",
			DateAberWithDate: "Thu 01 Ord 1660",
			DateDoy: "1660.031",
			DateWoy: "1660W05-6",
			DateWithSlash: "1660/02/01",
			DateWithOutSlash: "16600201"
		},
		stime: 9823750200000,
		gdate: [2281, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 21] },
		gtime: 9823750200000
	},
	{
		sdate: [1660, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 2],
			DateTime: "1660-02-02 00:00:00",
			DateAber: "02 Ord 1660",
			DateMonth: "Ord",
			DateYearMonth: "1660-Ord",
			DateYear: "1660",
			DateAberWithDate: "Fri 02 Ord 1660",
			DateDoy: "1660.032",
			DateWoy: "1660W05-7",
			DateWithSlash: "1660/02/02",
			DateWithOutSlash: "16600202"
		},
		stime: 9823836600000,
		gdate: [2281, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 22] },
		gtime: 9823836600000
	},
	{
		sdate: [1660, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 15],
			DateTime: "1660-02-15 00:00:00",
			DateAber: "15 Ord 1660",
			DateMonth: "Ord",
			DateYearMonth: "1660-Ord",
			DateYear: "1660",
			DateAberWithDate: "Thu 15 Ord 1660",
			DateDoy: "1660.045",
			DateWoy: "1660W07-6",
			DateWithSlash: "1660/02/15",
			DateWithOutSlash: "16600215"
		},
		stime: 9824959800000,
		gdate: [2281, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 5] },
		gtime: 9824959800000
	},
	{
		sdate: [1660, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 30],
			DateTime: "1660-02-30 00:00:00",
			DateAber: "30 Ord 1660",
			DateMonth: "Ord",
			DateYearMonth: "1660-Ord",
			DateYear: "1660",
			DateAberWithDate: "Fri 30 Ord 1660",
			DateDoy: "1660.060",
			DateWoy: "1660W09-7",
			DateWithSlash: "1660/02/30",
			DateWithOutSlash: "16600230"
		},
		stime: 9826255800000,
		gdate: [2281, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 20] },
		gtime: 9826255800000
	},
	{
		sdate: [1660, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 31],
			DateTime: "1660-02-31 00:00:00",
			DateAber: "31 Ord 1660",
			DateMonth: "Ord",
			DateYearMonth: "1660-Ord",
			DateYear: "1660",
			DateAberWithDate: "Sat 31 Ord 1660",
			DateDoy: "1660.061",
			DateWoy: "1660W10-1",
			DateWithSlash: "1660/02/31",
			DateWithOutSlash: "16600231"
		},
		stime: 9826342200000,
		gdate: [2281, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 21] },
		gtime: 9826342200000
	},
	{
		sdate: [1660, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 1],
			DateTime: "1660-03-01 00:00:00",
			DateAber: "01 Kho 1660",
			DateMonth: "Kho",
			DateYearMonth: "1660-Kho",
			DateYear: "1660",
			DateAberWithDate: "Sun 01 Kho 1660",
			DateDoy: "1660.062",
			DateWoy: "1660W10-2",
			DateWithSlash: "1660/03/01",
			DateWithOutSlash: "16600301"
		},
		stime: 9826428600000,
		gdate: [2281, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 22] },
		gtime: 9826428600000
	},
	{
		sdate: [1660, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 2],
			DateTime: "1660-03-02 00:00:00",
			DateAber: "02 Kho 1660",
			DateMonth: "Kho",
			DateYearMonth: "1660-Kho",
			DateYear: "1660",
			DateAberWithDate: "Mon 02 Kho 1660",
			DateDoy: "1660.063",
			DateWoy: "1660W10-3",
			DateWithSlash: "1660/03/02",
			DateWithOutSlash: "16600302"
		},
		stime: 9826515000000,
		gdate: [2281, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 23] },
		gtime: 9826515000000
	},
	{
		sdate: [1660, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 15],
			DateTime: "1660-03-15 00:00:00",
			DateAber: "15 Kho 1660",
			DateMonth: "Kho",
			DateYearMonth: "1660-Kho",
			DateYear: "1660",
			DateAberWithDate: "Sun 15 Kho 1660",
			DateDoy: "1660.076",
			DateWoy: "1660W12-2",
			DateWithSlash: "1660/03/15",
			DateWithOutSlash: "16600315"
		},
		stime: 9827638200000,
		gdate: [2281, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 5] },
		gtime: 9827638200000
	},
	{
		sdate: [1660, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 30],
			DateTime: "1660-03-30 00:00:00",
			DateAber: "30 Kho 1660",
			DateMonth: "Kho",
			DateYearMonth: "1660-Kho",
			DateYear: "1660",
			DateAberWithDate: "Mon 30 Kho 1660",
			DateDoy: "1660.091",
			DateWoy: "1660W14-3",
			DateWithSlash: "1660/03/30",
			DateWithOutSlash: "16600330"
		},
		stime: 9828934200000,
		gdate: [2281, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 20] },
		gtime: 9828934200000
	},
	{
		sdate: [1660, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 31],
			DateTime: "1660-03-31 00:00:00",
			DateAber: "31 Kho 1660",
			DateMonth: "Kho",
			DateYearMonth: "1660-Kho",
			DateYear: "1660",
			DateAberWithDate: "Tue 31 Kho 1660",
			DateDoy: "1660.092",
			DateWoy: "1660W14-4",
			DateWithSlash: "1660/03/31",
			DateWithOutSlash: "16600331"
		},
		stime: 9829020600000,
		gdate: [2281, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 21] },
		gtime: 9829020600000
	},
	{
		sdate: [1660, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 1],
			DateTime: "1660-04-01 00:00:00",
			DateAber: "01 Tir 1660",
			DateMonth: "Tir",
			DateYearMonth: "1660-Tir",
			DateYear: "1660",
			DateAberWithDate: "Wed 01 Tir 1660",
			DateDoy: "1660.093",
			DateWoy: "1660W14-5",
			DateWithSlash: "1660/04/01",
			DateWithOutSlash: "16600401"
		},
		stime: 9829107000000,
		gdate: [2281, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 22] },
		gtime: 9829107000000
	},
	{
		sdate: [1660, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 2],
			DateTime: "1660-04-02 00:00:00",
			DateAber: "02 Tir 1660",
			DateMonth: "Tir",
			DateYearMonth: "1660-Tir",
			DateYear: "1660",
			DateAberWithDate: "Thu 02 Tir 1660",
			DateDoy: "1660.094",
			DateWoy: "1660W14-6",
			DateWithSlash: "1660/04/02",
			DateWithOutSlash: "16600402"
		},
		stime: 9829193400000,
		gdate: [2281, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 23] },
		gtime: 9829193400000
	},
	{
		sdate: [1660, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 15],
			DateTime: "1660-04-15 00:00:00",
			DateAber: "15 Tir 1660",
			DateMonth: "Tir",
			DateYearMonth: "1660-Tir",
			DateYear: "1660",
			DateAberWithDate: "Wed 15 Tir 1660",
			DateDoy: "1660.107",
			DateWoy: "1660W16-5",
			DateWithSlash: "1660/04/15",
			DateWithOutSlash: "16600415"
		},
		stime: 9830316600000,
		gdate: [2281, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 6] },
		gtime: 9830316600000
	},
	{
		sdate: [1660, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 30],
			DateTime: "1660-04-30 00:00:00",
			DateAber: "30 Tir 1660",
			DateMonth: "Tir",
			DateYearMonth: "1660-Tir",
			DateYear: "1660",
			DateAberWithDate: "Thu 30 Tir 1660",
			DateDoy: "1660.122",
			DateWoy: "1660W18-6",
			DateWithSlash: "1660/04/30",
			DateWithOutSlash: "16600430"
		},
		stime: 9831612600000,
		gdate: [2281, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 21] },
		gtime: 9831612600000
	},
	{
		sdate: [1660, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 31],
			DateTime: "1660-04-31 00:00:00",
			DateAber: "31 Tir 1660",
			DateMonth: "Tir",
			DateYearMonth: "1660-Tir",
			DateYear: "1660",
			DateAberWithDate: "Fri 31 Tir 1660",
			DateDoy: "1660.123",
			DateWoy: "1660W18-7",
			DateWithSlash: "1660/04/31",
			DateWithOutSlash: "16600431"
		},
		stime: 9831699000000,
		gdate: [2281, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 22] },
		gtime: 9831699000000
	},
	{
		sdate: [1660, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 1],
			DateTime: "1660-05-01 00:00:00",
			DateAber: "01 Amo 1660",
			DateMonth: "Amo",
			DateYearMonth: "1660-Amo",
			DateYear: "1660",
			DateAberWithDate: "Sat 01 Amo 1660",
			DateDoy: "1660.124",
			DateWoy: "1660W19-1",
			DateWithSlash: "1660/05/01",
			DateWithOutSlash: "16600501"
		},
		stime: 9831785400000,
		gdate: [2281, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 23] },
		gtime: 9831785400000
	},
	{
		sdate: [1660, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 2],
			DateTime: "1660-05-02 00:00:00",
			DateAber: "02 Amo 1660",
			DateMonth: "Amo",
			DateYearMonth: "1660-Amo",
			DateYear: "1660",
			DateAberWithDate: "Sun 02 Amo 1660",
			DateDoy: "1660.125",
			DateWoy: "1660W19-2",
			DateWithSlash: "1660/05/02",
			DateWithOutSlash: "16600502"
		},
		stime: 9831871800000,
		gdate: [2281, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 24] },
		gtime: 9831871800000
	},
	{
		sdate: [1660, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 15],
			DateTime: "1660-05-15 00:00:00",
			DateAber: "15 Amo 1660",
			DateMonth: "Amo",
			DateYearMonth: "1660-Amo",
			DateYear: "1660",
			DateAberWithDate: "Sat 15 Amo 1660",
			DateDoy: "1660.138",
			DateWoy: "1660W21-1",
			DateWithSlash: "1660/05/15",
			DateWithOutSlash: "16600515"
		},
		stime: 9832995000000,
		gdate: [2281, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 6] },
		gtime: 9832995000000
	},
	{
		sdate: [1660, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 30],
			DateTime: "1660-05-30 00:00:00",
			DateAber: "30 Amo 1660",
			DateMonth: "Amo",
			DateYearMonth: "1660-Amo",
			DateYear: "1660",
			DateAberWithDate: "Sun 30 Amo 1660",
			DateDoy: "1660.153",
			DateWoy: "1660W23-2",
			DateWithSlash: "1660/05/30",
			DateWithOutSlash: "16600530"
		},
		stime: 9834291000000,
		gdate: [2281, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 21] },
		gtime: 9834291000000
	},
	{
		sdate: [1660, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 31],
			DateTime: "1660-05-31 00:00:00",
			DateAber: "31 Amo 1660",
			DateMonth: "Amo",
			DateYearMonth: "1660-Amo",
			DateYear: "1660",
			DateAberWithDate: "Mon 31 Amo 1660",
			DateDoy: "1660.154",
			DateWoy: "1660W23-3",
			DateWithSlash: "1660/05/31",
			DateWithOutSlash: "16600531"
		},
		stime: 9834377400000,
		gdate: [2281, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 22] },
		gtime: 9834377400000
	},
	{
		sdate: [1660, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 1],
			DateTime: "1660-06-01 00:00:00",
			DateAber: "01 Sha 1660",
			DateMonth: "Sha",
			DateYearMonth: "1660-Sha",
			DateYear: "1660",
			DateAberWithDate: "Tue 01 Sha 1660",
			DateDoy: "1660.155",
			DateWoy: "1660W23-4",
			DateWithSlash: "1660/06/01",
			DateWithOutSlash: "16600601"
		},
		stime: 9834463800000,
		gdate: [2281, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 23] },
		gtime: 9834463800000
	},
	{
		sdate: [1660, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 2],
			DateTime: "1660-06-02 00:00:00",
			DateAber: "02 Sha 1660",
			DateMonth: "Sha",
			DateYearMonth: "1660-Sha",
			DateYear: "1660",
			DateAberWithDate: "Wed 02 Sha 1660",
			DateDoy: "1660.156",
			DateWoy: "1660W23-5",
			DateWithSlash: "1660/06/02",
			DateWithOutSlash: "16600602"
		},
		stime: 9834550200000,
		gdate: [2281, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 24] },
		gtime: 9834550200000
	},
	{
		sdate: [1660, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 15],
			DateTime: "1660-06-15 00:00:00",
			DateAber: "15 Sha 1660",
			DateMonth: "Sha",
			DateYearMonth: "1660-Sha",
			DateYear: "1660",
			DateAberWithDate: "Tue 15 Sha 1660",
			DateDoy: "1660.169",
			DateWoy: "1660W25-4",
			DateWithSlash: "1660/06/15",
			DateWithOutSlash: "16600615"
		},
		stime: 9835673400000,
		gdate: [2281, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 8, 6] },
		gtime: 9835673400000
	},
	{
		sdate: [1660, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 29],
			DateTime: "1660-06-29 00:00:00",
			DateAber: "29 Sha 1660",
			DateMonth: "Sha",
			DateYearMonth: "1660-Sha",
			DateYear: "1660",
			DateAberWithDate: "Tue 29 Sha 1660",
			DateDoy: "1660.183",
			DateWoy: "1660W27-4",
			DateWithSlash: "1660/06/29",
			DateWithOutSlash: "16600629"
		},
		stime: 9836883000000,
		gdate: [2281, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 8, 20] },
		gtime: 9836883000000
	},
	{
		sdate: [1660, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 30],
			DateTime: "1660-06-30 00:00:00",
			DateAber: "30 Sha 1660",
			DateMonth: "Sha",
			DateYearMonth: "1660-Sha",
			DateYear: "1660",
			DateAberWithDate: "Wed 30 Sha 1660",
			DateDoy: "1660.184",
			DateWoy: "1660W27-5",
			DateWithSlash: "1660/06/30",
			DateWithOutSlash: "16600630"
		},
		stime: 9836973000000,
		gdate: [2281, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 8, 21] },
		gtime: 9836973000000
	},
	{
		sdate: [1660, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 1],
			DateTime: "1660-07-01 00:00:00",
			DateAber: "01 Meh 1660",
			DateMonth: "Meh",
			DateYearMonth: "1660-Meh",
			DateYear: "1660",
			DateAberWithDate: "Fri 01 Meh 1660",
			DateDoy: "1660.186",
			DateWoy: "1660W27-7",
			DateWithSlash: "1660/07/01",
			DateWithOutSlash: "16600701"
		},
		stime: 9837145800000,
		gdate: [2281, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 8, 23] },
		gtime: 9837145800000
	},
	{
		sdate: [1660, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 2],
			DateTime: "1660-07-02 00:00:00",
			DateAber: "02 Meh 1660",
			DateMonth: "Meh",
			DateYearMonth: "1660-Meh",
			DateYear: "1660",
			DateAberWithDate: "Sat 02 Meh 1660",
			DateDoy: "1660.187",
			DateWoy: "1660W28-1",
			DateWithSlash: "1660/07/02",
			DateWithOutSlash: "16600702"
		},
		stime: 9837232200000,
		gdate: [2281, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 8, 24] },
		gtime: 9837232200000
	},
	{
		sdate: [1660, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 15],
			DateTime: "1660-07-15 00:00:00",
			DateAber: "15 Meh 1660",
			DateMonth: "Meh",
			DateYearMonth: "1660-Meh",
			DateYear: "1660",
			DateAberWithDate: "Fri 15 Meh 1660",
			DateDoy: "1660.200",
			DateWoy: "1660W29-7",
			DateWithSlash: "1660/07/15",
			DateWithOutSlash: "16600715"
		},
		stime: 9838355400000,
		gdate: [2281, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 9, 7] },
		gtime: 9838355400000
	},
	{
		sdate: [1660, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 29],
			DateTime: "1660-07-29 00:00:00",
			DateAber: "29 Meh 1660",
			DateMonth: "Meh",
			DateYearMonth: "1660-Meh",
			DateYear: "1660",
			DateAberWithDate: "Fri 29 Meh 1660",
			DateDoy: "1660.214",
			DateWoy: "1660W31-7",
			DateWithSlash: "1660/07/29",
			DateWithOutSlash: "16600729"
		},
		stime: 9839565000000,
		gdate: [2281, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 9, 21] },
		gtime: 9839565000000
	},
	{
		sdate: [1660, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 30],
			DateTime: "1660-07-30 00:00:00",
			DateAber: "30 Meh 1660",
			DateMonth: "Meh",
			DateYearMonth: "1660-Meh",
			DateYear: "1660",
			DateAberWithDate: "Sat 30 Meh 1660",
			DateDoy: "1660.215",
			DateWoy: "1660W32-1",
			DateWithSlash: "1660/07/30",
			DateWithOutSlash: "16600730"
		},
		stime: 9839651400000,
		gdate: [2281, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 9, 22] },
		gtime: 9839651400000
	},
	{
		sdate: [1660, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 1],
			DateTime: "1660-08-01 00:00:00",
			DateAber: "01 Aba 1660",
			DateMonth: "Aba",
			DateYearMonth: "1660-Aba",
			DateYear: "1660",
			DateAberWithDate: "Sun 01 Aba 1660",
			DateDoy: "1660.216",
			DateWoy: "1660W32-2",
			DateWithSlash: "1660/08/01",
			DateWithOutSlash: "16600801"
		},
		stime: 9839737800000,
		gdate: [2281, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 9, 23] },
		gtime: 9839737800000
	},
	{
		sdate: [1660, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 2],
			DateTime: "1660-08-02 00:00:00",
			DateAber: "02 Aba 1660",
			DateMonth: "Aba",
			DateYearMonth: "1660-Aba",
			DateYear: "1660",
			DateAberWithDate: "Mon 02 Aba 1660",
			DateDoy: "1660.217",
			DateWoy: "1660W32-3",
			DateWithSlash: "1660/08/02",
			DateWithOutSlash: "16600802"
		},
		stime: 9839824200000,
		gdate: [2281, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 9, 24] },
		gtime: 9839824200000
	},
	{
		sdate: [1660, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 15],
			DateTime: "1660-08-15 00:00:00",
			DateAber: "15 Aba 1660",
			DateMonth: "Aba",
			DateYearMonth: "1660-Aba",
			DateYear: "1660",
			DateAberWithDate: "Sun 15 Aba 1660",
			DateDoy: "1660.230",
			DateWoy: "1660W34-2",
			DateWithSlash: "1660/08/15",
			DateWithOutSlash: "16600815"
		},
		stime: 9840947400000,
		gdate: [2281, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 10, 6] },
		gtime: 9840947400000
	},
	{
		sdate: [1660, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 29],
			DateTime: "1660-08-29 00:00:00",
			DateAber: "29 Aba 1660",
			DateMonth: "Aba",
			DateYearMonth: "1660-Aba",
			DateYear: "1660",
			DateAberWithDate: "Sun 29 Aba 1660",
			DateDoy: "1660.244",
			DateWoy: "1660W36-2",
			DateWithSlash: "1660/08/29",
			DateWithOutSlash: "16600829"
		},
		stime: 9842157000000,
		gdate: [2281, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 10, 20] },
		gtime: 9842157000000
	},
	{
		sdate: [1660, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 30],
			DateTime: "1660-08-30 00:00:00",
			DateAber: "30 Aba 1660",
			DateMonth: "Aba",
			DateYearMonth: "1660-Aba",
			DateYear: "1660",
			DateAberWithDate: "Mon 30 Aba 1660",
			DateDoy: "1660.245",
			DateWoy: "1660W36-3",
			DateWithSlash: "1660/08/30",
			DateWithOutSlash: "16600830"
		},
		stime: 9842243400000,
		gdate: [2281, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 10, 21] },
		gtime: 9842243400000
	},
	{
		sdate: [1660, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 1],
			DateTime: "1660-09-01 00:00:00",
			DateAber: "01 Aza 1660",
			DateMonth: "Aza",
			DateYearMonth: "1660-Aza",
			DateYear: "1660",
			DateAberWithDate: "Tue 01 Aza 1660",
			DateDoy: "1660.246",
			DateWoy: "1660W36-4",
			DateWithSlash: "1660/09/01",
			DateWithOutSlash: "16600901"
		},
		stime: 9842329800000,
		gdate: [2281, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 10, 22] },
		gtime: 9842329800000
	},
	{
		sdate: [1660, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 2],
			DateTime: "1660-09-02 00:00:00",
			DateAber: "02 Aza 1660",
			DateMonth: "Aza",
			DateYearMonth: "1660-Aza",
			DateYear: "1660",
			DateAberWithDate: "Wed 02 Aza 1660",
			DateDoy: "1660.247",
			DateWoy: "1660W36-5",
			DateWithSlash: "1660/09/02",
			DateWithOutSlash: "16600902"
		},
		stime: 9842416200000,
		gdate: [2281, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 10, 23] },
		gtime: 9842416200000
	},
	{
		sdate: [1660, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 15],
			DateTime: "1660-09-15 00:00:00",
			DateAber: "15 Aza 1660",
			DateMonth: "Aza",
			DateYearMonth: "1660-Aza",
			DateYear: "1660",
			DateAberWithDate: "Tue 15 Aza 1660",
			DateDoy: "1660.260",
			DateWoy: "1660W38-4",
			DateWithSlash: "1660/09/15",
			DateWithOutSlash: "16600915"
		},
		stime: 9843539400000,
		gdate: [2281, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 11, 6] },
		gtime: 9843539400000
	},
	{
		sdate: [1660, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 29],
			DateTime: "1660-09-29 00:00:00",
			DateAber: "29 Aza 1660",
			DateMonth: "Aza",
			DateYearMonth: "1660-Aza",
			DateYear: "1660",
			DateAberWithDate: "Tue 29 Aza 1660",
			DateDoy: "1660.274",
			DateWoy: "1660W40-4",
			DateWithSlash: "1660/09/29",
			DateWithOutSlash: "16600929"
		},
		stime: 9844749000000,
		gdate: [2281, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 11, 20] },
		gtime: 9844749000000
	},
	{
		sdate: [1660, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 30],
			DateTime: "1660-09-30 00:00:00",
			DateAber: "30 Aza 1660",
			DateMonth: "Aza",
			DateYearMonth: "1660-Aza",
			DateYear: "1660",
			DateAberWithDate: "Wed 30 Aza 1660",
			DateDoy: "1660.275",
			DateWoy: "1660W40-5",
			DateWithSlash: "1660/09/30",
			DateWithOutSlash: "16600930"
		},
		stime: 9844835400000,
		gdate: [2281, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 11, 21] },
		gtime: 9844835400000
	},
	{
		sdate: [1660, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 1],
			DateTime: "1660-10-01 00:00:00",
			DateAber: "01 Dey 1660",
			DateMonth: "Dey",
			DateYearMonth: "1660-Dey",
			DateYear: "1660",
			DateAberWithDate: "Thu 01 Dey 1660",
			DateDoy: "1660.276",
			DateWoy: "1660W40-6",
			DateWithSlash: "1660/10/01",
			DateWithOutSlash: "16601001"
		},
		stime: 9844921800000,
		gdate: [2281, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 11, 22] },
		gtime: 9844921800000
	},
	{
		sdate: [1660, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 2],
			DateTime: "1660-10-02 00:00:00",
			DateAber: "02 Dey 1660",
			DateMonth: "Dey",
			DateYearMonth: "1660-Dey",
			DateYear: "1660",
			DateAberWithDate: "Fri 02 Dey 1660",
			DateDoy: "1660.277",
			DateWoy: "1660W40-7",
			DateWithSlash: "1660/10/02",
			DateWithOutSlash: "16601002"
		},
		stime: 9845008200000,
		gdate: [2281, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 11, 23] },
		gtime: 9845008200000
	},
	{
		sdate: [1660, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 15],
			DateTime: "1660-10-15 00:00:00",
			DateAber: "15 Dey 1660",
			DateMonth: "Dey",
			DateYearMonth: "1660-Dey",
			DateYear: "1660",
			DateAberWithDate: "Thu 15 Dey 1660",
			DateDoy: "1660.290",
			DateWoy: "1660W42-6",
			DateWithSlash: "1660/10/15",
			DateWithOutSlash: "16601015"
		},
		stime: 9846131400000,
		gdate: [2282, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 0, 5] },
		gtime: 9846131400000
	},
	{
		sdate: [1660, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 29],
			DateTime: "1660-10-29 00:00:00",
			DateAber: "29 Dey 1660",
			DateMonth: "Dey",
			DateYearMonth: "1660-Dey",
			DateYear: "1660",
			DateAberWithDate: "Thu 29 Dey 1660",
			DateDoy: "1660.304",
			DateWoy: "1660W44-6",
			DateWithSlash: "1660/10/29",
			DateWithOutSlash: "16601029"
		},
		stime: 9847341000000,
		gdate: [2282, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 0, 19] },
		gtime: 9847341000000
	},
	{
		sdate: [1660, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 30],
			DateTime: "1660-10-30 00:00:00",
			DateAber: "30 Dey 1660",
			DateMonth: "Dey",
			DateYearMonth: "1660-Dey",
			DateYear: "1660",
			DateAberWithDate: "Fri 30 Dey 1660",
			DateDoy: "1660.305",
			DateWoy: "1660W44-7",
			DateWithSlash: "1660/10/30",
			DateWithOutSlash: "16601030"
		},
		stime: 9847427400000,
		gdate: [2282, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 0, 20] },
		gtime: 9847427400000
	},
	{
		sdate: [1660, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 1],
			DateTime: "1660-11-01 00:00:00",
			DateAber: "01 Bah 1660",
			DateMonth: "Bah",
			DateYearMonth: "1660-Bah",
			DateYear: "1660",
			DateAberWithDate: "Sat 01 Bah 1660",
			DateDoy: "1660.306",
			DateWoy: "1660W45-1",
			DateWithSlash: "1660/11/01",
			DateWithOutSlash: "16601101"
		},
		stime: 9847513800000,
		gdate: [2282, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 0, 21] },
		gtime: 9847513800000
	},
	{
		sdate: [1660, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 2],
			DateTime: "1660-11-02 00:00:00",
			DateAber: "02 Bah 1660",
			DateMonth: "Bah",
			DateYearMonth: "1660-Bah",
			DateYear: "1660",
			DateAberWithDate: "Sun 02 Bah 1660",
			DateDoy: "1660.307",
			DateWoy: "1660W45-2",
			DateWithSlash: "1660/11/02",
			DateWithOutSlash: "16601102"
		},
		stime: 9847600200000,
		gdate: [2282, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 0, 22] },
		gtime: 9847600200000
	},
	{
		sdate: [1660, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 15],
			DateTime: "1660-11-15 00:00:00",
			DateAber: "15 Bah 1660",
			DateMonth: "Bah",
			DateYearMonth: "1660-Bah",
			DateYear: "1660",
			DateAberWithDate: "Sat 15 Bah 1660",
			DateDoy: "1660.320",
			DateWoy: "1660W47-1",
			DateWithSlash: "1660/11/15",
			DateWithOutSlash: "16601115"
		},
		stime: 9848723400000,
		gdate: [2282, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 1, 4] },
		gtime: 9848723400000
	},
	{
		sdate: [1660, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 29],
			DateTime: "1660-11-29 00:00:00",
			DateAber: "29 Bah 1660",
			DateMonth: "Bah",
			DateYearMonth: "1660-Bah",
			DateYear: "1660",
			DateAberWithDate: "Sat 29 Bah 1660",
			DateDoy: "1660.334",
			DateWoy: "1660W49-1",
			DateWithSlash: "1660/11/29",
			DateWithOutSlash: "16601129"
		},
		stime: 9849933000000,
		gdate: [2282, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 1, 18] },
		gtime: 9849933000000
	},
	{
		sdate: [1660, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 30],
			DateTime: "1660-11-30 00:00:00",
			DateAber: "30 Bah 1660",
			DateMonth: "Bah",
			DateYearMonth: "1660-Bah",
			DateYear: "1660",
			DateAberWithDate: "Sun 30 Bah 1660",
			DateDoy: "1660.335",
			DateWoy: "1660W49-2",
			DateWithSlash: "1660/11/30",
			DateWithOutSlash: "16601130"
		},
		stime: 9850019400000,
		gdate: [2282, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 1, 19] },
		gtime: 9850019400000
	},
	{
		sdate: [1660, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 1],
			DateTime: "1660-12-01 00:00:00",
			DateAber: "01 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Mon 01 Esf 1660",
			DateDoy: "1660.336",
			DateWoy: "1660W49-3",
			DateWithSlash: "1660/12/01",
			DateWithOutSlash: "16601201"
		},
		stime: 9850105800000,
		gdate: [2282, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 1, 20] },
		gtime: 9850105800000
	},
	{
		sdate: [1660, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 2],
			DateTime: "1660-12-02 00:00:00",
			DateAber: "02 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Tue 02 Esf 1660",
			DateDoy: "1660.337",
			DateWoy: "1660W49-4",
			DateWithSlash: "1660/12/02",
			DateWithOutSlash: "16601202"
		},
		stime: 9850192200000,
		gdate: [2282, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 1, 21] },
		gtime: 9850192200000
	},
	{
		sdate: [1660, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 3],
			DateTime: "1660-12-03 00:00:00",
			DateAber: "03 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Wed 03 Esf 1660",
			DateDoy: "1660.338",
			DateWoy: "1660W49-5",
			DateWithSlash: "1660/12/03",
			DateWithOutSlash: "16601203"
		},
		stime: 9850278600000,
		gdate: [2282, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 1, 22] },
		gtime: 9850278600000
	},
	{
		sdate: [1660, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 4],
			DateTime: "1660-12-04 00:00:00",
			DateAber: "04 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Thu 04 Esf 1660",
			DateDoy: "1660.339",
			DateWoy: "1660W49-6",
			DateWithSlash: "1660/12/04",
			DateWithOutSlash: "16601204"
		},
		stime: 9850365000000,
		gdate: [2282, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 1, 23] },
		gtime: 9850365000000
	},
	{
		sdate: [1660, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 15],
			DateTime: "1660-12-15 00:00:00",
			DateAber: "15 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Mon 15 Esf 1660",
			DateDoy: "1660.350",
			DateWoy: "1660W51-3",
			DateWithSlash: "1660/12/15",
			DateWithOutSlash: "16601215"
		},
		stime: 9851315400000,
		gdate: [2282, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 2, 6] },
		gtime: 9851315400000
	},
	{
		sdate: [1660, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 25],
			DateTime: "1660-12-25 00:00:00",
			DateAber: "25 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Thu 25 Esf 1660",
			DateDoy: "1660.360",
			DateWoy: "1660W52-6",
			DateWithSlash: "1660/12/25",
			DateWithOutSlash: "16601225"
		},
		stime: 9852179400000,
		gdate: [2282, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 2, 16] },
		gtime: 9852179400000
	},
	{
		sdate: [1660, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 26],
			DateTime: "1660-12-26 00:00:00",
			DateAber: "26 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Fri 26 Esf 1660",
			DateDoy: "1660.361",
			DateWoy: "1660W52-7",
			DateWithSlash: "1660/12/26",
			DateWithOutSlash: "16601226"
		},
		stime: 9852265800000,
		gdate: [2282, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 2, 17] },
		gtime: 9852265800000
	},
	{
		sdate: [1660, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 27],
			DateTime: "1660-12-27 00:00:00",
			DateAber: "27 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Sat 27 Esf 1660",
			DateDoy: "1660.362",
			DateWoy: "1661W01-1",
			DateWithSlash: "1660/12/27",
			DateWithOutSlash: "16601227"
		},
		stime: 9852352200000,
		gdate: [2282, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 2, 18] },
		gtime: 9852352200000
	},
	{
		sdate: [1660, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 28],
			DateTime: "1660-12-28 00:00:00",
			DateAber: "28 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Sun 28 Esf 1660",
			DateDoy: "1660.363",
			DateWoy: "1661W01-2",
			DateWithSlash: "1660/12/28",
			DateWithOutSlash: "16601228"
		},
		stime: 9852438600000,
		gdate: [2282, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 2, 19] },
		gtime: 9852438600000
	},
	{
		sdate: [1660, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 29],
			DateTime: "1660-12-29 00:00:00",
			DateAber: "29 Esf 1660",
			DateMonth: "Esf",
			DateYearMonth: "1660-Esf",
			DateYear: "1660",
			DateAberWithDate: "Mon 29 Esf 1660",
			DateDoy: "1660.364",
			DateWoy: "1661W01-3",
			DateWithSlash: "1660/12/29",
			DateWithOutSlash: "16601229"
		},
		stime: 9852525000000,
		gdate: [2282, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 2, 20] },
		gtime: 9852525000000
	},

	{
		sdate: [1680, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 1],
			DateTime: "1680-01-01 01:00:00",
			DateAber: "01 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Thu 01 Far 1680",
			DateDoy: "1680.000",
			DateWoy: "1679W52-6",
			DateWithSlash: "1680/01/01",
			DateWithOutSlash: "16800101"
		},
		stime: 10452141000000,
		gdate: [2301, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 21] },
		gtime: 10452141000000
	},
	{
		sdate: [1680, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 2],
			DateTime: "1680-01-02 00:00:00",
			DateAber: "02 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Fri 02 Far 1680",
			DateDoy: "1680.001",
			DateWoy: "1679W52-7",
			DateWithSlash: "1680/01/02",
			DateWithOutSlash: "16800102"
		},
		stime: 10452223800000,
		gdate: [2301, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 22] },
		gtime: 10452223800000
	},
	{
		sdate: [1680, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 3],
			DateTime: "1680-01-03 00:00:00",
			DateAber: "03 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Sat 03 Far 1680",
			DateDoy: "1680.002",
			DateWoy: "1680W01-1",
			DateWithSlash: "1680/01/03",
			DateWithOutSlash: "16800103"
		},
		stime: 10452310200000,
		gdate: [2301, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 23] },
		gtime: 10452310200000
	},
	{
		sdate: [1680, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 4],
			DateTime: "1680-01-04 00:00:00",
			DateAber: "04 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Sun 04 Far 1680",
			DateDoy: "1680.003",
			DateWoy: "1680W01-2",
			DateWithSlash: "1680/01/04",
			DateWithOutSlash: "16800104"
		},
		stime: 10452396600000,
		gdate: [2301, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 24] },
		gtime: 10452396600000
	},
	{
		sdate: [1680, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 5],
			DateTime: "1680-01-05 00:00:00",
			DateAber: "05 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Mon 05 Far 1680",
			DateDoy: "1680.004",
			DateWoy: "1680W01-3",
			DateWithSlash: "1680/01/05",
			DateWithOutSlash: "16800105"
		},
		stime: 10452483000000,
		gdate: [2301, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 25] },
		gtime: 10452483000000
	},
	{
		sdate: [1680, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 6],
			DateTime: "1680-01-06 00:00:00",
			DateAber: "06 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Tue 06 Far 1680",
			DateDoy: "1680.005",
			DateWoy: "1680W01-4",
			DateWithSlash: "1680/01/06",
			DateWithOutSlash: "16800106"
		},
		stime: 10452569400000,
		gdate: [2301, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 26] },
		gtime: 10452569400000
	},
	{
		sdate: [1680, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 7],
			DateTime: "1680-01-07 00:00:00",
			DateAber: "07 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Wed 07 Far 1680",
			DateDoy: "1680.006",
			DateWoy: "1680W01-5",
			DateWithSlash: "1680/01/07",
			DateWithOutSlash: "16800107"
		},
		stime: 10452655800000,
		gdate: [2301, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 27] },
		gtime: 10452655800000
	},
	{
		sdate: [1680, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 15],
			DateTime: "1680-01-15 00:00:00",
			DateAber: "15 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Thu 15 Far 1680",
			DateDoy: "1680.014",
			DateWoy: "1680W02-6",
			DateWithSlash: "1680/01/15",
			DateWithOutSlash: "16800115"
		},
		stime: 10453347000000,
		gdate: [2301, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 4] },
		gtime: 10453347000000
	},
	{
		sdate: [1680, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 29],
			DateTime: "1680-01-29 00:00:00",
			DateAber: "29 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Thu 29 Far 1680",
			DateDoy: "1680.028",
			DateWoy: "1680W04-6",
			DateWithSlash: "1680/01/29",
			DateWithOutSlash: "16800129"
		},
		stime: 10454556600000,
		gdate: [2301, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 18] },
		gtime: 10454556600000
	},
	{
		sdate: [1680, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 30],
			DateTime: "1680-01-30 00:00:00",
			DateAber: "30 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Fri 30 Far 1680",
			DateDoy: "1680.029",
			DateWoy: "1680W04-7",
			DateWithSlash: "1680/01/30",
			DateWithOutSlash: "16800130"
		},
		stime: 10454643000000,
		gdate: [2301, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 19] },
		gtime: 10454643000000
	},
	{
		sdate: [1680, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 31],
			DateTime: "1680-01-31 00:00:00",
			DateAber: "31 Far 1680",
			DateMonth: "Far",
			DateYearMonth: "1680-Far",
			DateYear: "1680",
			DateAberWithDate: "Sat 31 Far 1680",
			DateDoy: "1680.030",
			DateWoy: "1680W05-1",
			DateWithSlash: "1680/01/31",
			DateWithOutSlash: "16800131"
		},
		stime: 10454729400000,
		gdate: [2301, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 20] },
		gtime: 10454729400000
	},
	{
		sdate: [1680, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 1],
			DateTime: "1680-02-01 00:00:00",
			DateAber: "01 Ord 1680",
			DateMonth: "Ord",
			DateYearMonth: "1680-Ord",
			DateYear: "1680",
			DateAberWithDate: "Sun 01 Ord 1680",
			DateDoy: "1680.031",
			DateWoy: "1680W05-2",
			DateWithSlash: "1680/02/01",
			DateWithOutSlash: "16800201"
		},
		stime: 10454815800000,
		gdate: [2301, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 21] },
		gtime: 10454815800000
	},
	{
		sdate: [1680, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 2],
			DateTime: "1680-02-02 00:00:00",
			DateAber: "02 Ord 1680",
			DateMonth: "Ord",
			DateYearMonth: "1680-Ord",
			DateYear: "1680",
			DateAberWithDate: "Mon 02 Ord 1680",
			DateDoy: "1680.032",
			DateWoy: "1680W05-3",
			DateWithSlash: "1680/02/02",
			DateWithOutSlash: "16800202"
		},
		stime: 10454902200000,
		gdate: [2301, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 22] },
		gtime: 10454902200000
	},
	{
		sdate: [1680, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 15],
			DateTime: "1680-02-15 00:00:00",
			DateAber: "15 Ord 1680",
			DateMonth: "Ord",
			DateYearMonth: "1680-Ord",
			DateYear: "1680",
			DateAberWithDate: "Sun 15 Ord 1680",
			DateDoy: "1680.045",
			DateWoy: "1680W07-2",
			DateWithSlash: "1680/02/15",
			DateWithOutSlash: "16800215"
		},
		stime: 10456025400000,
		gdate: [2301, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 5] },
		gtime: 10456025400000
	},
	{
		sdate: [1680, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 30],
			DateTime: "1680-02-30 00:00:00",
			DateAber: "30 Ord 1680",
			DateMonth: "Ord",
			DateYearMonth: "1680-Ord",
			DateYear: "1680",
			DateAberWithDate: "Mon 30 Ord 1680",
			DateDoy: "1680.060",
			DateWoy: "1680W09-3",
			DateWithSlash: "1680/02/30",
			DateWithOutSlash: "16800230"
		},
		stime: 10457321400000,
		gdate: [2301, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 20] },
		gtime: 10457321400000
	},
	{
		sdate: [1680, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 31],
			DateTime: "1680-02-31 00:00:00",
			DateAber: "31 Ord 1680",
			DateMonth: "Ord",
			DateYearMonth: "1680-Ord",
			DateYear: "1680",
			DateAberWithDate: "Tue 31 Ord 1680",
			DateDoy: "1680.061",
			DateWoy: "1680W09-4",
			DateWithSlash: "1680/02/31",
			DateWithOutSlash: "16800231"
		},
		stime: 10457407800000,
		gdate: [2301, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 21] },
		gtime: 10457407800000
	},
	{
		sdate: [1680, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 1],
			DateTime: "1680-03-01 00:00:00",
			DateAber: "01 Kho 1680",
			DateMonth: "Kho",
			DateYearMonth: "1680-Kho",
			DateYear: "1680",
			DateAberWithDate: "Wed 01 Kho 1680",
			DateDoy: "1680.062",
			DateWoy: "1680W09-5",
			DateWithSlash: "1680/03/01",
			DateWithOutSlash: "16800301"
		},
		stime: 10457494200000,
		gdate: [2301, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 22] },
		gtime: 10457494200000
	},
	{
		sdate: [1680, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 2],
			DateTime: "1680-03-02 00:00:00",
			DateAber: "02 Kho 1680",
			DateMonth: "Kho",
			DateYearMonth: "1680-Kho",
			DateYear: "1680",
			DateAberWithDate: "Thu 02 Kho 1680",
			DateDoy: "1680.063",
			DateWoy: "1680W09-6",
			DateWithSlash: "1680/03/02",
			DateWithOutSlash: "16800302"
		},
		stime: 10457580600000,
		gdate: [2301, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 23] },
		gtime: 10457580600000
	},
	{
		sdate: [1680, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 15],
			DateTime: "1680-03-15 00:00:00",
			DateAber: "15 Kho 1680",
			DateMonth: "Kho",
			DateYearMonth: "1680-Kho",
			DateYear: "1680",
			DateAberWithDate: "Wed 15 Kho 1680",
			DateDoy: "1680.076",
			DateWoy: "1680W11-5",
			DateWithSlash: "1680/03/15",
			DateWithOutSlash: "16800315"
		},
		stime: 10458703800000,
		gdate: [2301, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 5] },
		gtime: 10458703800000
	},
	{
		sdate: [1680, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 30],
			DateTime: "1680-03-30 00:00:00",
			DateAber: "30 Kho 1680",
			DateMonth: "Kho",
			DateYearMonth: "1680-Kho",
			DateYear: "1680",
			DateAberWithDate: "Thu 30 Kho 1680",
			DateDoy: "1680.091",
			DateWoy: "1680W13-6",
			DateWithSlash: "1680/03/30",
			DateWithOutSlash: "16800330"
		},
		stime: 10459999800000,
		gdate: [2301, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 20] },
		gtime: 10459999800000
	},
	{
		sdate: [1680, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 31],
			DateTime: "1680-03-31 00:00:00",
			DateAber: "31 Kho 1680",
			DateMonth: "Kho",
			DateYearMonth: "1680-Kho",
			DateYear: "1680",
			DateAberWithDate: "Fri 31 Kho 1680",
			DateDoy: "1680.092",
			DateWoy: "1680W13-7",
			DateWithSlash: "1680/03/31",
			DateWithOutSlash: "16800331"
		},
		stime: 10460086200000,
		gdate: [2301, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 21] },
		gtime: 10460086200000
	},
	{
		sdate: [1680, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 1],
			DateTime: "1680-04-01 00:00:00",
			DateAber: "01 Tir 1680",
			DateMonth: "Tir",
			DateYearMonth: "1680-Tir",
			DateYear: "1680",
			DateAberWithDate: "Sat 01 Tir 1680",
			DateDoy: "1680.093",
			DateWoy: "1680W14-1",
			DateWithSlash: "1680/04/01",
			DateWithOutSlash: "16800401"
		},
		stime: 10460172600000,
		gdate: [2301, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 22] },
		gtime: 10460172600000
	},
	{
		sdate: [1680, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 2],
			DateTime: "1680-04-02 00:00:00",
			DateAber: "02 Tir 1680",
			DateMonth: "Tir",
			DateYearMonth: "1680-Tir",
			DateYear: "1680",
			DateAberWithDate: "Sun 02 Tir 1680",
			DateDoy: "1680.094",
			DateWoy: "1680W14-2",
			DateWithSlash: "1680/04/02",
			DateWithOutSlash: "16800402"
		},
		stime: 10460259000000,
		gdate: [2301, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 23] },
		gtime: 10460259000000
	},
	{
		sdate: [1680, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 15],
			DateTime: "1680-04-15 00:00:00",
			DateAber: "15 Tir 1680",
			DateMonth: "Tir",
			DateYearMonth: "1680-Tir",
			DateYear: "1680",
			DateAberWithDate: "Sat 15 Tir 1680",
			DateDoy: "1680.107",
			DateWoy: "1680W16-1",
			DateWithSlash: "1680/04/15",
			DateWithOutSlash: "16800415"
		},
		stime: 10461382200000,
		gdate: [2301, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 6] },
		gtime: 10461382200000
	},
	{
		sdate: [1680, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 30],
			DateTime: "1680-04-30 00:00:00",
			DateAber: "30 Tir 1680",
			DateMonth: "Tir",
			DateYearMonth: "1680-Tir",
			DateYear: "1680",
			DateAberWithDate: "Sun 30 Tir 1680",
			DateDoy: "1680.122",
			DateWoy: "1680W18-2",
			DateWithSlash: "1680/04/30",
			DateWithOutSlash: "16800430"
		},
		stime: 10462678200000,
		gdate: [2301, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 21] },
		gtime: 10462678200000
	},
	{
		sdate: [1680, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 31],
			DateTime: "1680-04-31 00:00:00",
			DateAber: "31 Tir 1680",
			DateMonth: "Tir",
			DateYearMonth: "1680-Tir",
			DateYear: "1680",
			DateAberWithDate: "Mon 31 Tir 1680",
			DateDoy: "1680.123",
			DateWoy: "1680W18-3",
			DateWithSlash: "1680/04/31",
			DateWithOutSlash: "16800431"
		},
		stime: 10462764600000,
		gdate: [2301, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 22] },
		gtime: 10462764600000
	},
	{
		sdate: [1680, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 1],
			DateTime: "1680-05-01 00:00:00",
			DateAber: "01 Amo 1680",
			DateMonth: "Amo",
			DateYearMonth: "1680-Amo",
			DateYear: "1680",
			DateAberWithDate: "Tue 01 Amo 1680",
			DateDoy: "1680.124",
			DateWoy: "1680W18-4",
			DateWithSlash: "1680/05/01",
			DateWithOutSlash: "16800501"
		},
		stime: 10462851000000,
		gdate: [2301, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 23] },
		gtime: 10462851000000
	},
	{
		sdate: [1680, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 2],
			DateTime: "1680-05-02 00:00:00",
			DateAber: "02 Amo 1680",
			DateMonth: "Amo",
			DateYearMonth: "1680-Amo",
			DateYear: "1680",
			DateAberWithDate: "Wed 02 Amo 1680",
			DateDoy: "1680.125",
			DateWoy: "1680W18-5",
			DateWithSlash: "1680/05/02",
			DateWithOutSlash: "16800502"
		},
		stime: 10462937400000,
		gdate: [2301, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 24] },
		gtime: 10462937400000
	},
	{
		sdate: [1680, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 15],
			DateTime: "1680-05-15 00:00:00",
			DateAber: "15 Amo 1680",
			DateMonth: "Amo",
			DateYearMonth: "1680-Amo",
			DateYear: "1680",
			DateAberWithDate: "Tue 15 Amo 1680",
			DateDoy: "1680.138",
			DateWoy: "1680W20-4",
			DateWithSlash: "1680/05/15",
			DateWithOutSlash: "16800515"
		},
		stime: 10464060600000,
		gdate: [2301, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 6] },
		gtime: 10464060600000
	},
	{
		sdate: [1680, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 30],
			DateTime: "1680-05-30 00:00:00",
			DateAber: "30 Amo 1680",
			DateMonth: "Amo",
			DateYearMonth: "1680-Amo",
			DateYear: "1680",
			DateAberWithDate: "Wed 30 Amo 1680",
			DateDoy: "1680.153",
			DateWoy: "1680W22-5",
			DateWithSlash: "1680/05/30",
			DateWithOutSlash: "16800530"
		},
		stime: 10465356600000,
		gdate: [2301, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 21] },
		gtime: 10465356600000
	},
	{
		sdate: [1680, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 31],
			DateTime: "1680-05-31 00:00:00",
			DateAber: "31 Amo 1680",
			DateMonth: "Amo",
			DateYearMonth: "1680-Amo",
			DateYear: "1680",
			DateAberWithDate: "Thu 31 Amo 1680",
			DateDoy: "1680.154",
			DateWoy: "1680W22-6",
			DateWithSlash: "1680/05/31",
			DateWithOutSlash: "16800531"
		},
		stime: 10465443000000,
		gdate: [2301, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 22] },
		gtime: 10465443000000
	},
	{
		sdate: [1680, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 1],
			DateTime: "1680-06-01 00:00:00",
			DateAber: "01 Sha 1680",
			DateMonth: "Sha",
			DateYearMonth: "1680-Sha",
			DateYear: "1680",
			DateAberWithDate: "Fri 01 Sha 1680",
			DateDoy: "1680.155",
			DateWoy: "1680W22-7",
			DateWithSlash: "1680/06/01",
			DateWithOutSlash: "16800601"
		},
		stime: 10465529400000,
		gdate: [2301, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 23] },
		gtime: 10465529400000
	},
	{
		sdate: [1680, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 2],
			DateTime: "1680-06-02 00:00:00",
			DateAber: "02 Sha 1680",
			DateMonth: "Sha",
			DateYearMonth: "1680-Sha",
			DateYear: "1680",
			DateAberWithDate: "Sat 02 Sha 1680",
			DateDoy: "1680.156",
			DateWoy: "1680W23-1",
			DateWithSlash: "1680/06/02",
			DateWithOutSlash: "16800602"
		},
		stime: 10465615800000,
		gdate: [2301, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 24] },
		gtime: 10465615800000
	},
	{
		sdate: [1680, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 15],
			DateTime: "1680-06-15 00:00:00",
			DateAber: "15 Sha 1680",
			DateMonth: "Sha",
			DateYearMonth: "1680-Sha",
			DateYear: "1680",
			DateAberWithDate: "Fri 15 Sha 1680",
			DateDoy: "1680.169",
			DateWoy: "1680W24-7",
			DateWithSlash: "1680/06/15",
			DateWithOutSlash: "16800615"
		},
		stime: 10466739000000,
		gdate: [2301, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 8, 6] },
		gtime: 10466739000000
	},
	{
		sdate: [1680, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 29],
			DateTime: "1680-06-29 00:00:00",
			DateAber: "29 Sha 1680",
			DateMonth: "Sha",
			DateYearMonth: "1680-Sha",
			DateYear: "1680",
			DateAberWithDate: "Fri 29 Sha 1680",
			DateDoy: "1680.183",
			DateWoy: "1680W26-7",
			DateWithSlash: "1680/06/29",
			DateWithOutSlash: "16800629"
		},
		stime: 10467948600000,
		gdate: [2301, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 8, 20] },
		gtime: 10467948600000
	},
	{
		sdate: [1680, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 30],
			DateTime: "1680-06-30 00:00:00",
			DateAber: "30 Sha 1680",
			DateMonth: "Sha",
			DateYearMonth: "1680-Sha",
			DateYear: "1680",
			DateAberWithDate: "Sat 30 Sha 1680",
			DateDoy: "1680.184",
			DateWoy: "1680W27-1",
			DateWithSlash: "1680/06/30",
			DateWithOutSlash: "16800630"
		},
		stime: 10468038600000,
		gdate: [2301, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 8, 21] },
		gtime: 10468038600000
	},
	{
		sdate: [1680, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 1],
			DateTime: "1680-07-01 00:00:00",
			DateAber: "01 Meh 1680",
			DateMonth: "Meh",
			DateYearMonth: "1680-Meh",
			DateYear: "1680",
			DateAberWithDate: "Mon 01 Meh 1680",
			DateDoy: "1680.186",
			DateWoy: "1680W27-3",
			DateWithSlash: "1680/07/01",
			DateWithOutSlash: "16800701"
		},
		stime: 10468211400000,
		gdate: [2301, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 8, 23] },
		gtime: 10468211400000
	},
	{
		sdate: [1680, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 2],
			DateTime: "1680-07-02 00:00:00",
			DateAber: "02 Meh 1680",
			DateMonth: "Meh",
			DateYearMonth: "1680-Meh",
			DateYear: "1680",
			DateAberWithDate: "Tue 02 Meh 1680",
			DateDoy: "1680.187",
			DateWoy: "1680W27-4",
			DateWithSlash: "1680/07/02",
			DateWithOutSlash: "16800702"
		},
		stime: 10468297800000,
		gdate: [2301, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 8, 24] },
		gtime: 10468297800000
	},
	{
		sdate: [1680, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 15],
			DateTime: "1680-07-15 00:00:00",
			DateAber: "15 Meh 1680",
			DateMonth: "Meh",
			DateYearMonth: "1680-Meh",
			DateYear: "1680",
			DateAberWithDate: "Mon 15 Meh 1680",
			DateDoy: "1680.200",
			DateWoy: "1680W29-3",
			DateWithSlash: "1680/07/15",
			DateWithOutSlash: "16800715"
		},
		stime: 10469421000000,
		gdate: [2301, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 9, 7] },
		gtime: 10469421000000
	},
	{
		sdate: [1680, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 29],
			DateTime: "1680-07-29 00:00:00",
			DateAber: "29 Meh 1680",
			DateMonth: "Meh",
			DateYearMonth: "1680-Meh",
			DateYear: "1680",
			DateAberWithDate: "Mon 29 Meh 1680",
			DateDoy: "1680.214",
			DateWoy: "1680W31-3",
			DateWithSlash: "1680/07/29",
			DateWithOutSlash: "16800729"
		},
		stime: 10470630600000,
		gdate: [2301, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 9, 21] },
		gtime: 10470630600000
	},
	{
		sdate: [1680, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 30],
			DateTime: "1680-07-30 00:00:00",
			DateAber: "30 Meh 1680",
			DateMonth: "Meh",
			DateYearMonth: "1680-Meh",
			DateYear: "1680",
			DateAberWithDate: "Tue 30 Meh 1680",
			DateDoy: "1680.215",
			DateWoy: "1680W31-4",
			DateWithSlash: "1680/07/30",
			DateWithOutSlash: "16800730"
		},
		stime: 10470717000000,
		gdate: [2301, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 9, 22] },
		gtime: 10470717000000
	},
	{
		sdate: [1680, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 1],
			DateTime: "1680-08-01 00:00:00",
			DateAber: "01 Aba 1680",
			DateMonth: "Aba",
			DateYearMonth: "1680-Aba",
			DateYear: "1680",
			DateAberWithDate: "Wed 01 Aba 1680",
			DateDoy: "1680.216",
			DateWoy: "1680W31-5",
			DateWithSlash: "1680/08/01",
			DateWithOutSlash: "16800801"
		},
		stime: 10470803400000,
		gdate: [2301, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 9, 23] },
		gtime: 10470803400000
	},
	{
		sdate: [1680, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 2],
			DateTime: "1680-08-02 00:00:00",
			DateAber: "02 Aba 1680",
			DateMonth: "Aba",
			DateYearMonth: "1680-Aba",
			DateYear: "1680",
			DateAberWithDate: "Thu 02 Aba 1680",
			DateDoy: "1680.217",
			DateWoy: "1680W31-6",
			DateWithSlash: "1680/08/02",
			DateWithOutSlash: "16800802"
		},
		stime: 10470889800000,
		gdate: [2301, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 9, 24] },
		gtime: 10470889800000
	},
	{
		sdate: [1680, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 15],
			DateTime: "1680-08-15 00:00:00",
			DateAber: "15 Aba 1680",
			DateMonth: "Aba",
			DateYearMonth: "1680-Aba",
			DateYear: "1680",
			DateAberWithDate: "Wed 15 Aba 1680",
			DateDoy: "1680.230",
			DateWoy: "1680W33-5",
			DateWithSlash: "1680/08/15",
			DateWithOutSlash: "16800815"
		},
		stime: 10472013000000,
		gdate: [2301, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 10, 6] },
		gtime: 10472013000000
	},
	{
		sdate: [1680, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 29],
			DateTime: "1680-08-29 00:00:00",
			DateAber: "29 Aba 1680",
			DateMonth: "Aba",
			DateYearMonth: "1680-Aba",
			DateYear: "1680",
			DateAberWithDate: "Wed 29 Aba 1680",
			DateDoy: "1680.244",
			DateWoy: "1680W35-5",
			DateWithSlash: "1680/08/29",
			DateWithOutSlash: "16800829"
		},
		stime: 10473222600000,
		gdate: [2301, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 10, 20] },
		gtime: 10473222600000
	},
	{
		sdate: [1680, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 30],
			DateTime: "1680-08-30 00:00:00",
			DateAber: "30 Aba 1680",
			DateMonth: "Aba",
			DateYearMonth: "1680-Aba",
			DateYear: "1680",
			DateAberWithDate: "Thu 30 Aba 1680",
			DateDoy: "1680.245",
			DateWoy: "1680W35-6",
			DateWithSlash: "1680/08/30",
			DateWithOutSlash: "16800830"
		},
		stime: 10473309000000,
		gdate: [2301, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 10, 21] },
		gtime: 10473309000000
	},
	{
		sdate: [1680, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 1],
			DateTime: "1680-09-01 00:00:00",
			DateAber: "01 Aza 1680",
			DateMonth: "Aza",
			DateYearMonth: "1680-Aza",
			DateYear: "1680",
			DateAberWithDate: "Fri 01 Aza 1680",
			DateDoy: "1680.246",
			DateWoy: "1680W35-7",
			DateWithSlash: "1680/09/01",
			DateWithOutSlash: "16800901"
		},
		stime: 10473395400000,
		gdate: [2301, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 10, 22] },
		gtime: 10473395400000
	},
	{
		sdate: [1680, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 2],
			DateTime: "1680-09-02 00:00:00",
			DateAber: "02 Aza 1680",
			DateMonth: "Aza",
			DateYearMonth: "1680-Aza",
			DateYear: "1680",
			DateAberWithDate: "Sat 02 Aza 1680",
			DateDoy: "1680.247",
			DateWoy: "1680W36-1",
			DateWithSlash: "1680/09/02",
			DateWithOutSlash: "16800902"
		},
		stime: 10473481800000,
		gdate: [2301, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 10, 23] },
		gtime: 10473481800000
	},
	{
		sdate: [1680, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 15],
			DateTime: "1680-09-15 00:00:00",
			DateAber: "15 Aza 1680",
			DateMonth: "Aza",
			DateYearMonth: "1680-Aza",
			DateYear: "1680",
			DateAberWithDate: "Fri 15 Aza 1680",
			DateDoy: "1680.260",
			DateWoy: "1680W37-7",
			DateWithSlash: "1680/09/15",
			DateWithOutSlash: "16800915"
		},
		stime: 10474605000000,
		gdate: [2301, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 11, 6] },
		gtime: 10474605000000
	},
	{
		sdate: [1680, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 29],
			DateTime: "1680-09-29 00:00:00",
			DateAber: "29 Aza 1680",
			DateMonth: "Aza",
			DateYearMonth: "1680-Aza",
			DateYear: "1680",
			DateAberWithDate: "Fri 29 Aza 1680",
			DateDoy: "1680.274",
			DateWoy: "1680W39-7",
			DateWithSlash: "1680/09/29",
			DateWithOutSlash: "16800929"
		},
		stime: 10475814600000,
		gdate: [2301, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 11, 20] },
		gtime: 10475814600000
	},
	{
		sdate: [1680, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 30],
			DateTime: "1680-09-30 00:00:00",
			DateAber: "30 Aza 1680",
			DateMonth: "Aza",
			DateYearMonth: "1680-Aza",
			DateYear: "1680",
			DateAberWithDate: "Sat 30 Aza 1680",
			DateDoy: "1680.275",
			DateWoy: "1680W40-1",
			DateWithSlash: "1680/09/30",
			DateWithOutSlash: "16800930"
		},
		stime: 10475901000000,
		gdate: [2301, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 11, 21] },
		gtime: 10475901000000
	},
	{
		sdate: [1680, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 1],
			DateTime: "1680-10-01 00:00:00",
			DateAber: "01 Dey 1680",
			DateMonth: "Dey",
			DateYearMonth: "1680-Dey",
			DateYear: "1680",
			DateAberWithDate: "Sun 01 Dey 1680",
			DateDoy: "1680.276",
			DateWoy: "1680W40-2",
			DateWithSlash: "1680/10/01",
			DateWithOutSlash: "16801001"
		},
		stime: 10475987400000,
		gdate: [2301, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 11, 22] },
		gtime: 10475987400000
	},
	{
		sdate: [1680, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 2],
			DateTime: "1680-10-02 00:00:00",
			DateAber: "02 Dey 1680",
			DateMonth: "Dey",
			DateYearMonth: "1680-Dey",
			DateYear: "1680",
			DateAberWithDate: "Mon 02 Dey 1680",
			DateDoy: "1680.277",
			DateWoy: "1680W40-3",
			DateWithSlash: "1680/10/02",
			DateWithOutSlash: "16801002"
		},
		stime: 10476073800000,
		gdate: [2301, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 11, 23] },
		gtime: 10476073800000
	},
	{
		sdate: [1680, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 15],
			DateTime: "1680-10-15 00:00:00",
			DateAber: "15 Dey 1680",
			DateMonth: "Dey",
			DateYearMonth: "1680-Dey",
			DateYear: "1680",
			DateAberWithDate: "Sun 15 Dey 1680",
			DateDoy: "1680.290",
			DateWoy: "1680W42-2",
			DateWithSlash: "1680/10/15",
			DateWithOutSlash: "16801015"
		},
		stime: 10477197000000,
		gdate: [2302, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 0, 5] },
		gtime: 10477197000000
	},
	{
		sdate: [1680, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 29],
			DateTime: "1680-10-29 00:00:00",
			DateAber: "29 Dey 1680",
			DateMonth: "Dey",
			DateYearMonth: "1680-Dey",
			DateYear: "1680",
			DateAberWithDate: "Sun 29 Dey 1680",
			DateDoy: "1680.304",
			DateWoy: "1680W44-2",
			DateWithSlash: "1680/10/29",
			DateWithOutSlash: "16801029"
		},
		stime: 10478406600000,
		gdate: [2302, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 0, 19] },
		gtime: 10478406600000
	},
	{
		sdate: [1680, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 30],
			DateTime: "1680-10-30 00:00:00",
			DateAber: "30 Dey 1680",
			DateMonth: "Dey",
			DateYearMonth: "1680-Dey",
			DateYear: "1680",
			DateAberWithDate: "Mon 30 Dey 1680",
			DateDoy: "1680.305",
			DateWoy: "1680W44-3",
			DateWithSlash: "1680/10/30",
			DateWithOutSlash: "16801030"
		},
		stime: 10478493000000,
		gdate: [2302, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 0, 20] },
		gtime: 10478493000000
	},
	{
		sdate: [1680, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 1],
			DateTime: "1680-11-01 00:00:00",
			DateAber: "01 Bah 1680",
			DateMonth: "Bah",
			DateYearMonth: "1680-Bah",
			DateYear: "1680",
			DateAberWithDate: "Tue 01 Bah 1680",
			DateDoy: "1680.306",
			DateWoy: "1680W44-4",
			DateWithSlash: "1680/11/01",
			DateWithOutSlash: "16801101"
		},
		stime: 10478579400000,
		gdate: [2302, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 0, 21] },
		gtime: 10478579400000
	},
	{
		sdate: [1680, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 2],
			DateTime: "1680-11-02 00:00:00",
			DateAber: "02 Bah 1680",
			DateMonth: "Bah",
			DateYearMonth: "1680-Bah",
			DateYear: "1680",
			DateAberWithDate: "Wed 02 Bah 1680",
			DateDoy: "1680.307",
			DateWoy: "1680W44-5",
			DateWithSlash: "1680/11/02",
			DateWithOutSlash: "16801102"
		},
		stime: 10478665800000,
		gdate: [2302, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 0, 22] },
		gtime: 10478665800000
	},
	{
		sdate: [1680, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 15],
			DateTime: "1680-11-15 00:00:00",
			DateAber: "15 Bah 1680",
			DateMonth: "Bah",
			DateYearMonth: "1680-Bah",
			DateYear: "1680",
			DateAberWithDate: "Tue 15 Bah 1680",
			DateDoy: "1680.320",
			DateWoy: "1680W46-4",
			DateWithSlash: "1680/11/15",
			DateWithOutSlash: "16801115"
		},
		stime: 10479789000000,
		gdate: [2302, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 1, 4] },
		gtime: 10479789000000
	},
	{
		sdate: [1680, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 29],
			DateTime: "1680-11-29 00:00:00",
			DateAber: "29 Bah 1680",
			DateMonth: "Bah",
			DateYearMonth: "1680-Bah",
			DateYear: "1680",
			DateAberWithDate: "Tue 29 Bah 1680",
			DateDoy: "1680.334",
			DateWoy: "1680W48-4",
			DateWithSlash: "1680/11/29",
			DateWithOutSlash: "16801129"
		},
		stime: 10480998600000,
		gdate: [2302, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 1, 18] },
		gtime: 10480998600000
	},
	{
		sdate: [1680, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 30],
			DateTime: "1680-11-30 00:00:00",
			DateAber: "30 Bah 1680",
			DateMonth: "Bah",
			DateYearMonth: "1680-Bah",
			DateYear: "1680",
			DateAberWithDate: "Wed 30 Bah 1680",
			DateDoy: "1680.335",
			DateWoy: "1680W48-5",
			DateWithSlash: "1680/11/30",
			DateWithOutSlash: "16801130"
		},
		stime: 10481085000000,
		gdate: [2302, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 1, 19] },
		gtime: 10481085000000
	},
	{
		sdate: [1680, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 1],
			DateTime: "1680-12-01 00:00:00",
			DateAber: "01 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Thu 01 Esf 1680",
			DateDoy: "1680.336",
			DateWoy: "1680W48-6",
			DateWithSlash: "1680/12/01",
			DateWithOutSlash: "16801201"
		},
		stime: 10481171400000,
		gdate: [2302, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 1, 20] },
		gtime: 10481171400000
	},
	{
		sdate: [1680, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 2],
			DateTime: "1680-12-02 00:00:00",
			DateAber: "02 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Fri 02 Esf 1680",
			DateDoy: "1680.337",
			DateWoy: "1680W48-7",
			DateWithSlash: "1680/12/02",
			DateWithOutSlash: "16801202"
		},
		stime: 10481257800000,
		gdate: [2302, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 1, 21] },
		gtime: 10481257800000
	},
	{
		sdate: [1680, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 3],
			DateTime: "1680-12-03 00:00:00",
			DateAber: "03 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Sat 03 Esf 1680",
			DateDoy: "1680.338",
			DateWoy: "1680W49-1",
			DateWithSlash: "1680/12/03",
			DateWithOutSlash: "16801203"
		},
		stime: 10481344200000,
		gdate: [2302, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 1, 22] },
		gtime: 10481344200000
	},
	{
		sdate: [1680, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 4],
			DateTime: "1680-12-04 00:00:00",
			DateAber: "04 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Sun 04 Esf 1680",
			DateDoy: "1680.339",
			DateWoy: "1680W49-2",
			DateWithSlash: "1680/12/04",
			DateWithOutSlash: "16801204"
		},
		stime: 10481430600000,
		gdate: [2302, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 1, 23] },
		gtime: 10481430600000
	},
	{
		sdate: [1680, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 15],
			DateTime: "1680-12-15 00:00:00",
			DateAber: "15 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Thu 15 Esf 1680",
			DateDoy: "1680.350",
			DateWoy: "1680W50-6",
			DateWithSlash: "1680/12/15",
			DateWithOutSlash: "16801215"
		},
		stime: 10482381000000,
		gdate: [2302, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 6] },
		gtime: 10482381000000
	},
	{
		sdate: [1680, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 25],
			DateTime: "1680-12-25 00:00:00",
			DateAber: "25 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Sun 25 Esf 1680",
			DateDoy: "1680.360",
			DateWoy: "1680W52-2",
			DateWithSlash: "1680/12/25",
			DateWithOutSlash: "16801225"
		},
		stime: 10483245000000,
		gdate: [2302, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 16] },
		gtime: 10483245000000
	},
	{
		sdate: [1680, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 26],
			DateTime: "1680-12-26 00:00:00",
			DateAber: "26 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Mon 26 Esf 1680",
			DateDoy: "1680.361",
			DateWoy: "1680W52-3",
			DateWithSlash: "1680/12/26",
			DateWithOutSlash: "16801226"
		},
		stime: 10483331400000,
		gdate: [2302, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 17] },
		gtime: 10483331400000
	},
	{
		sdate: [1680, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 27],
			DateTime: "1680-12-27 00:00:00",
			DateAber: "27 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Tue 27 Esf 1680",
			DateDoy: "1680.362",
			DateWoy: "1680W52-4",
			DateWithSlash: "1680/12/27",
			DateWithOutSlash: "16801227"
		},
		stime: 10483417800000,
		gdate: [2302, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 18] },
		gtime: 10483417800000
	},
	{
		sdate: [1680, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 28],
			DateTime: "1680-12-28 00:00:00",
			DateAber: "28 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Wed 28 Esf 1680",
			DateDoy: "1680.363",
			DateWoy: "1680W52-5",
			DateWithSlash: "1680/12/28",
			DateWithOutSlash: "16801228"
		},
		stime: 10483504200000,
		gdate: [2302, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 19] },
		gtime: 10483504200000
	},
	{
		sdate: [1680, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 29],
			DateTime: "1680-12-29 00:00:00",
			DateAber: "29 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Thu 29 Esf 1680",
			DateDoy: "1680.364",
			DateWoy: "1680W52-6",
			DateWithSlash: "1680/12/29",
			DateWithOutSlash: "16801229"
		},
		stime: 10483590600000,
		gdate: [2302, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 20] },
		gtime: 10483590600000
	},
	{
		sdate: [1680, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 30],
			DateTime: "1680-12-30 01:00:00",
			DateAber: "30 Esf 1680",
			DateMonth: "Esf",
			DateYearMonth: "1680-Esf",
			DateYear: "1680",
			DateAberWithDate: "Fri 30 Esf 1680",
			DateDoy: "1680.365",
			DateWoy: "1680W52-7",
			DateWithSlash: "1680/12/30",
			DateWithOutSlash: "16801230"
		},
		stime: 10483677000000,
		gdate: [2302, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 21] },
		gtime: 10483677000000
	},
	{
		sdate: [1700, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 1],
			DateTime: "1700-01-01 01:00:00",
			DateAber: "01 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Mon 01 Far 1700",
			DateDoy: "1700.000",
			DateWoy: "1700W01-3",
			DateWithSlash: "1700/01/01",
			DateWithOutSlash: "17000101"
		},
		stime: 11083293000000,
		gdate: [2321, 3, 21, 1, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 21] },
		gtime: 11083293000000
	},
	{
		sdate: [1700, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 2],
			DateTime: "1700-01-02 00:00:00",
			DateAber: "02 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Tue 02 Far 1700",
			DateDoy: "1700.001",
			DateWoy: "1700W01-4",
			DateWithSlash: "1700/01/02",
			DateWithOutSlash: "17000102"
		},
		stime: 11083375800000,
		gdate: [2321, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 22] },
		gtime: 11083375800000
	},
	{
		sdate: [1700, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 3],
			DateTime: "1700-01-03 00:00:00",
			DateAber: "03 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Wed 03 Far 1700",
			DateDoy: "1700.002",
			DateWoy: "1700W01-5",
			DateWithSlash: "1700/01/03",
			DateWithOutSlash: "17000103"
		},
		stime: 11083462200000,
		gdate: [2321, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 23] },
		gtime: 11083462200000
	},
	{
		sdate: [1700, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 4],
			DateTime: "1700-01-04 00:00:00",
			DateAber: "04 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Thu 04 Far 1700",
			DateDoy: "1700.003",
			DateWoy: "1700W01-6",
			DateWithSlash: "1700/01/04",
			DateWithOutSlash: "17000104"
		},
		stime: 11083548600000,
		gdate: [2321, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 24] },
		gtime: 11083548600000
	},
	{
		sdate: [1700, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 5],
			DateTime: "1700-01-05 00:00:00",
			DateAber: "05 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Fri 05 Far 1700",
			DateDoy: "1700.004",
			DateWoy: "1700W01-7",
			DateWithSlash: "1700/01/05",
			DateWithOutSlash: "17000105"
		},
		stime: 11083635000000,
		gdate: [2321, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 25] },
		gtime: 11083635000000
	},
	{
		sdate: [1700, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 6],
			DateTime: "1700-01-06 00:00:00",
			DateAber: "06 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Sat 06 Far 1700",
			DateDoy: "1700.005",
			DateWoy: "1700W02-1",
			DateWithSlash: "1700/01/06",
			DateWithOutSlash: "17000106"
		},
		stime: 11083721400000,
		gdate: [2321, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 26] },
		gtime: 11083721400000
	},
	{
		sdate: [1700, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 7],
			DateTime: "1700-01-07 00:00:00",
			DateAber: "07 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Sun 07 Far 1700",
			DateDoy: "1700.006",
			DateWoy: "1700W02-2",
			DateWithSlash: "1700/01/07",
			DateWithOutSlash: "17000107"
		},
		stime: 11083807800000,
		gdate: [2321, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 27] },
		gtime: 11083807800000
	},
	{
		sdate: [1700, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 15],
			DateTime: "1700-01-15 00:00:00",
			DateAber: "15 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Mon 15 Far 1700",
			DateDoy: "1700.014",
			DateWoy: "1700W03-3",
			DateWithSlash: "1700/01/15",
			DateWithOutSlash: "17000115"
		},
		stime: 11084499000000,
		gdate: [2321, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 4] },
		gtime: 11084499000000
	},
	{
		sdate: [1700, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 29],
			DateTime: "1700-01-29 00:00:00",
			DateAber: "29 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Mon 29 Far 1700",
			DateDoy: "1700.028",
			DateWoy: "1700W05-3",
			DateWithSlash: "1700/01/29",
			DateWithOutSlash: "17000129"
		},
		stime: 11085708600000,
		gdate: [2321, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 18] },
		gtime: 11085708600000
	},
	{
		sdate: [1700, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 30],
			DateTime: "1700-01-30 00:00:00",
			DateAber: "30 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Tue 30 Far 1700",
			DateDoy: "1700.029",
			DateWoy: "1700W05-4",
			DateWithSlash: "1700/01/30",
			DateWithOutSlash: "17000130"
		},
		stime: 11085795000000,
		gdate: [2321, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 19] },
		gtime: 11085795000000
	},
	{
		sdate: [1700, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 31],
			DateTime: "1700-01-31 00:00:00",
			DateAber: "31 Far 1700",
			DateMonth: "Far",
			DateYearMonth: "1700-Far",
			DateYear: "1700",
			DateAberWithDate: "Wed 31 Far 1700",
			DateDoy: "1700.030",
			DateWoy: "1700W05-5",
			DateWithSlash: "1700/01/31",
			DateWithOutSlash: "17000131"
		},
		stime: 11085881400000,
		gdate: [2321, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 20] },
		gtime: 11085881400000
	},
	{
		sdate: [1700, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 1],
			DateTime: "1700-02-01 00:00:00",
			DateAber: "01 Ord 1700",
			DateMonth: "Ord",
			DateYearMonth: "1700-Ord",
			DateYear: "1700",
			DateAberWithDate: "Thu 01 Ord 1700",
			DateDoy: "1700.031",
			DateWoy: "1700W05-6",
			DateWithSlash: "1700/02/01",
			DateWithOutSlash: "17000201"
		},
		stime: 11085967800000,
		gdate: [2321, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 21] },
		gtime: 11085967800000
	},
	{
		sdate: [1700, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 2],
			DateTime: "1700-02-02 00:00:00",
			DateAber: "02 Ord 1700",
			DateMonth: "Ord",
			DateYearMonth: "1700-Ord",
			DateYear: "1700",
			DateAberWithDate: "Fri 02 Ord 1700",
			DateDoy: "1700.032",
			DateWoy: "1700W05-7",
			DateWithSlash: "1700/02/02",
			DateWithOutSlash: "17000202"
		},
		stime: 11086054200000,
		gdate: [2321, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 22] },
		gtime: 11086054200000
	},
	{
		sdate: [1700, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 15],
			DateTime: "1700-02-15 00:00:00",
			DateAber: "15 Ord 1700",
			DateMonth: "Ord",
			DateYearMonth: "1700-Ord",
			DateYear: "1700",
			DateAberWithDate: "Thu 15 Ord 1700",
			DateDoy: "1700.045",
			DateWoy: "1700W07-6",
			DateWithSlash: "1700/02/15",
			DateWithOutSlash: "17000215"
		},
		stime: 11087177400000,
		gdate: [2321, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 5] },
		gtime: 11087177400000
	},
	{
		sdate: [1700, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 30],
			DateTime: "1700-02-30 00:00:00",
			DateAber: "30 Ord 1700",
			DateMonth: "Ord",
			DateYearMonth: "1700-Ord",
			DateYear: "1700",
			DateAberWithDate: "Fri 30 Ord 1700",
			DateDoy: "1700.060",
			DateWoy: "1700W09-7",
			DateWithSlash: "1700/02/30",
			DateWithOutSlash: "17000230"
		},
		stime: 11088473400000,
		gdate: [2321, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 20] },
		gtime: 11088473400000
	},
	{
		sdate: [1700, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 31],
			DateTime: "1700-02-31 00:00:00",
			DateAber: "31 Ord 1700",
			DateMonth: "Ord",
			DateYearMonth: "1700-Ord",
			DateYear: "1700",
			DateAberWithDate: "Sat 31 Ord 1700",
			DateDoy: "1700.061",
			DateWoy: "1700W10-1",
			DateWithSlash: "1700/02/31",
			DateWithOutSlash: "17000231"
		},
		stime: 11088559800000,
		gdate: [2321, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 21] },
		gtime: 11088559800000
	},
	{
		sdate: [1700, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 1],
			DateTime: "1700-03-01 00:00:00",
			DateAber: "01 Kho 1700",
			DateMonth: "Kho",
			DateYearMonth: "1700-Kho",
			DateYear: "1700",
			DateAberWithDate: "Sun 01 Kho 1700",
			DateDoy: "1700.062",
			DateWoy: "1700W10-2",
			DateWithSlash: "1700/03/01",
			DateWithOutSlash: "17000301"
		},
		stime: 11088646200000,
		gdate: [2321, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 22] },
		gtime: 11088646200000
	},
	{
		sdate: [1700, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 2],
			DateTime: "1700-03-02 00:00:00",
			DateAber: "02 Kho 1700",
			DateMonth: "Kho",
			DateYearMonth: "1700-Kho",
			DateYear: "1700",
			DateAberWithDate: "Mon 02 Kho 1700",
			DateDoy: "1700.063",
			DateWoy: "1700W10-3",
			DateWithSlash: "1700/03/02",
			DateWithOutSlash: "17000302"
		},
		stime: 11088732600000,
		gdate: [2321, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 23] },
		gtime: 11088732600000
	},
	{
		sdate: [1700, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 15],
			DateTime: "1700-03-15 00:00:00",
			DateAber: "15 Kho 1700",
			DateMonth: "Kho",
			DateYearMonth: "1700-Kho",
			DateYear: "1700",
			DateAberWithDate: "Sun 15 Kho 1700",
			DateDoy: "1700.076",
			DateWoy: "1700W12-2",
			DateWithSlash: "1700/03/15",
			DateWithOutSlash: "17000315"
		},
		stime: 11089855800000,
		gdate: [2321, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 5] },
		gtime: 11089855800000
	},
	{
		sdate: [1700, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 30],
			DateTime: "1700-03-30 00:00:00",
			DateAber: "30 Kho 1700",
			DateMonth: "Kho",
			DateYearMonth: "1700-Kho",
			DateYear: "1700",
			DateAberWithDate: "Mon 30 Kho 1700",
			DateDoy: "1700.091",
			DateWoy: "1700W14-3",
			DateWithSlash: "1700/03/30",
			DateWithOutSlash: "17000330"
		},
		stime: 11091151800000,
		gdate: [2321, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 20] },
		gtime: 11091151800000
	},
	{
		sdate: [1700, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 31],
			DateTime: "1700-03-31 00:00:00",
			DateAber: "31 Kho 1700",
			DateMonth: "Kho",
			DateYearMonth: "1700-Kho",
			DateYear: "1700",
			DateAberWithDate: "Tue 31 Kho 1700",
			DateDoy: "1700.092",
			DateWoy: "1700W14-4",
			DateWithSlash: "1700/03/31",
			DateWithOutSlash: "17000331"
		},
		stime: 11091238200000,
		gdate: [2321, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 21] },
		gtime: 11091238200000
	},
	{
		sdate: [1700, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 1],
			DateTime: "1700-04-01 00:00:00",
			DateAber: "01 Tir 1700",
			DateMonth: "Tir",
			DateYearMonth: "1700-Tir",
			DateYear: "1700",
			DateAberWithDate: "Wed 01 Tir 1700",
			DateDoy: "1700.093",
			DateWoy: "1700W14-5",
			DateWithSlash: "1700/04/01",
			DateWithOutSlash: "17000401"
		},
		stime: 11091324600000,
		gdate: [2321, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 22] },
		gtime: 11091324600000
	},
	{
		sdate: [1700, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 2],
			DateTime: "1700-04-02 00:00:00",
			DateAber: "02 Tir 1700",
			DateMonth: "Tir",
			DateYearMonth: "1700-Tir",
			DateYear: "1700",
			DateAberWithDate: "Thu 02 Tir 1700",
			DateDoy: "1700.094",
			DateWoy: "1700W14-6",
			DateWithSlash: "1700/04/02",
			DateWithOutSlash: "17000402"
		},
		stime: 11091411000000,
		gdate: [2321, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 23] },
		gtime: 11091411000000
	},
	{
		sdate: [1700, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 15],
			DateTime: "1700-04-15 00:00:00",
			DateAber: "15 Tir 1700",
			DateMonth: "Tir",
			DateYearMonth: "1700-Tir",
			DateYear: "1700",
			DateAberWithDate: "Wed 15 Tir 1700",
			DateDoy: "1700.107",
			DateWoy: "1700W16-5",
			DateWithSlash: "1700/04/15",
			DateWithOutSlash: "17000415"
		},
		stime: 11092534200000,
		gdate: [2321, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 6] },
		gtime: 11092534200000
	},
	{
		sdate: [1700, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 30],
			DateTime: "1700-04-30 00:00:00",
			DateAber: "30 Tir 1700",
			DateMonth: "Tir",
			DateYearMonth: "1700-Tir",
			DateYear: "1700",
			DateAberWithDate: "Thu 30 Tir 1700",
			DateDoy: "1700.122",
			DateWoy: "1700W18-6",
			DateWithSlash: "1700/04/30",
			DateWithOutSlash: "17000430"
		},
		stime: 11093830200000,
		gdate: [2321, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 21] },
		gtime: 11093830200000
	},
	{
		sdate: [1700, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 31],
			DateTime: "1700-04-31 00:00:00",
			DateAber: "31 Tir 1700",
			DateMonth: "Tir",
			DateYearMonth: "1700-Tir",
			DateYear: "1700",
			DateAberWithDate: "Fri 31 Tir 1700",
			DateDoy: "1700.123",
			DateWoy: "1700W18-7",
			DateWithSlash: "1700/04/31",
			DateWithOutSlash: "17000431"
		},
		stime: 11093916600000,
		gdate: [2321, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 22] },
		gtime: 11093916600000
	},
	{
		sdate: [1700, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 1],
			DateTime: "1700-05-01 00:00:00",
			DateAber: "01 Amo 1700",
			DateMonth: "Amo",
			DateYearMonth: "1700-Amo",
			DateYear: "1700",
			DateAberWithDate: "Sat 01 Amo 1700",
			DateDoy: "1700.124",
			DateWoy: "1700W19-1",
			DateWithSlash: "1700/05/01",
			DateWithOutSlash: "17000501"
		},
		stime: 11094003000000,
		gdate: [2321, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 23] },
		gtime: 11094003000000
	},
	{
		sdate: [1700, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 2],
			DateTime: "1700-05-02 00:00:00",
			DateAber: "02 Amo 1700",
			DateMonth: "Amo",
			DateYearMonth: "1700-Amo",
			DateYear: "1700",
			DateAberWithDate: "Sun 02 Amo 1700",
			DateDoy: "1700.125",
			DateWoy: "1700W19-2",
			DateWithSlash: "1700/05/02",
			DateWithOutSlash: "17000502"
		},
		stime: 11094089400000,
		gdate: [2321, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 24] },
		gtime: 11094089400000
	},
	{
		sdate: [1700, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 15],
			DateTime: "1700-05-15 00:00:00",
			DateAber: "15 Amo 1700",
			DateMonth: "Amo",
			DateYearMonth: "1700-Amo",
			DateYear: "1700",
			DateAberWithDate: "Sat 15 Amo 1700",
			DateDoy: "1700.138",
			DateWoy: "1700W21-1",
			DateWithSlash: "1700/05/15",
			DateWithOutSlash: "17000515"
		},
		stime: 11095212600000,
		gdate: [2321, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 6] },
		gtime: 11095212600000
	},
	{
		sdate: [1700, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 30],
			DateTime: "1700-05-30 00:00:00",
			DateAber: "30 Amo 1700",
			DateMonth: "Amo",
			DateYearMonth: "1700-Amo",
			DateYear: "1700",
			DateAberWithDate: "Sun 30 Amo 1700",
			DateDoy: "1700.153",
			DateWoy: "1700W23-2",
			DateWithSlash: "1700/05/30",
			DateWithOutSlash: "17000530"
		},
		stime: 11096508600000,
		gdate: [2321, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 21] },
		gtime: 11096508600000
	},
	{
		sdate: [1700, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 31],
			DateTime: "1700-05-31 00:00:00",
			DateAber: "31 Amo 1700",
			DateMonth: "Amo",
			DateYearMonth: "1700-Amo",
			DateYear: "1700",
			DateAberWithDate: "Mon 31 Amo 1700",
			DateDoy: "1700.154",
			DateWoy: "1700W23-3",
			DateWithSlash: "1700/05/31",
			DateWithOutSlash: "17000531"
		},
		stime: 11096595000000,
		gdate: [2321, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 22] },
		gtime: 11096595000000
	},
	{
		sdate: [1700, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 1],
			DateTime: "1700-06-01 00:00:00",
			DateAber: "01 Sha 1700",
			DateMonth: "Sha",
			DateYearMonth: "1700-Sha",
			DateYear: "1700",
			DateAberWithDate: "Tue 01 Sha 1700",
			DateDoy: "1700.155",
			DateWoy: "1700W23-4",
			DateWithSlash: "1700/06/01",
			DateWithOutSlash: "17000601"
		},
		stime: 11096681400000,
		gdate: [2321, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 23] },
		gtime: 11096681400000
	},
	{
		sdate: [1700, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 2],
			DateTime: "1700-06-02 00:00:00",
			DateAber: "02 Sha 1700",
			DateMonth: "Sha",
			DateYearMonth: "1700-Sha",
			DateYear: "1700",
			DateAberWithDate: "Wed 02 Sha 1700",
			DateDoy: "1700.156",
			DateWoy: "1700W23-5",
			DateWithSlash: "1700/06/02",
			DateWithOutSlash: "17000602"
		},
		stime: 11096767800000,
		gdate: [2321, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 24] },
		gtime: 11096767800000
	},
	{
		sdate: [1700, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 15],
			DateTime: "1700-06-15 00:00:00",
			DateAber: "15 Sha 1700",
			DateMonth: "Sha",
			DateYearMonth: "1700-Sha",
			DateYear: "1700",
			DateAberWithDate: "Tue 15 Sha 1700",
			DateDoy: "1700.169",
			DateWoy: "1700W25-4",
			DateWithSlash: "1700/06/15",
			DateWithOutSlash: "17000615"
		},
		stime: 11097891000000,
		gdate: [2321, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 8, 6] },
		gtime: 11097891000000
	},
	{
		sdate: [1700, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 29],
			DateTime: "1700-06-29 00:00:00",
			DateAber: "29 Sha 1700",
			DateMonth: "Sha",
			DateYearMonth: "1700-Sha",
			DateYear: "1700",
			DateAberWithDate: "Tue 29 Sha 1700",
			DateDoy: "1700.183",
			DateWoy: "1700W27-4",
			DateWithSlash: "1700/06/29",
			DateWithOutSlash: "17000629"
		},
		stime: 11099100600000,
		gdate: [2321, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 8, 20] },
		gtime: 11099100600000
	},
	{
		sdate: [1700, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 30],
			DateTime: "1700-06-30 00:00:00",
			DateAber: "30 Sha 1700",
			DateMonth: "Sha",
			DateYearMonth: "1700-Sha",
			DateYear: "1700",
			DateAberWithDate: "Wed 30 Sha 1700",
			DateDoy: "1700.184",
			DateWoy: "1700W27-5",
			DateWithSlash: "1700/06/30",
			DateWithOutSlash: "17000630"
		},
		stime: 11099190600000,
		gdate: [2321, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 8, 21] },
		gtime: 11099190600000
	},
	{
		sdate: [1700, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 1],
			DateTime: "1700-07-01 00:00:00",
			DateAber: "01 Meh 1700",
			DateMonth: "Meh",
			DateYearMonth: "1700-Meh",
			DateYear: "1700",
			DateAberWithDate: "Fri 01 Meh 1700",
			DateDoy: "1700.186",
			DateWoy: "1700W27-7",
			DateWithSlash: "1700/07/01",
			DateWithOutSlash: "17000701"
		},
		stime: 11099363400000,
		gdate: [2321, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 8, 23] },
		gtime: 11099363400000
	},
	{
		sdate: [1700, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 2],
			DateTime: "1700-07-02 00:00:00",
			DateAber: "02 Meh 1700",
			DateMonth: "Meh",
			DateYearMonth: "1700-Meh",
			DateYear: "1700",
			DateAberWithDate: "Sat 02 Meh 1700",
			DateDoy: "1700.187",
			DateWoy: "1700W28-1",
			DateWithSlash: "1700/07/02",
			DateWithOutSlash: "17000702"
		},
		stime: 11099449800000,
		gdate: [2321, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 8, 24] },
		gtime: 11099449800000
	},
	{
		sdate: [1700, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 15],
			DateTime: "1700-07-15 00:00:00",
			DateAber: "15 Meh 1700",
			DateMonth: "Meh",
			DateYearMonth: "1700-Meh",
			DateYear: "1700",
			DateAberWithDate: "Fri 15 Meh 1700",
			DateDoy: "1700.200",
			DateWoy: "1700W29-7",
			DateWithSlash: "1700/07/15",
			DateWithOutSlash: "17000715"
		},
		stime: 11100573000000,
		gdate: [2321, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 9, 7] },
		gtime: 11100573000000
	},
	{
		sdate: [1700, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 29],
			DateTime: "1700-07-29 00:00:00",
			DateAber: "29 Meh 1700",
			DateMonth: "Meh",
			DateYearMonth: "1700-Meh",
			DateYear: "1700",
			DateAberWithDate: "Fri 29 Meh 1700",
			DateDoy: "1700.214",
			DateWoy: "1700W31-7",
			DateWithSlash: "1700/07/29",
			DateWithOutSlash: "17000729"
		},
		stime: 11101782600000,
		gdate: [2321, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 9, 21] },
		gtime: 11101782600000
	},
	{
		sdate: [1700, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 30],
			DateTime: "1700-07-30 00:00:00",
			DateAber: "30 Meh 1700",
			DateMonth: "Meh",
			DateYearMonth: "1700-Meh",
			DateYear: "1700",
			DateAberWithDate: "Sat 30 Meh 1700",
			DateDoy: "1700.215",
			DateWoy: "1700W32-1",
			DateWithSlash: "1700/07/30",
			DateWithOutSlash: "17000730"
		},
		stime: 11101869000000,
		gdate: [2321, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 9, 22] },
		gtime: 11101869000000
	},
	{
		sdate: [1700, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 1],
			DateTime: "1700-08-01 00:00:00",
			DateAber: "01 Aba 1700",
			DateMonth: "Aba",
			DateYearMonth: "1700-Aba",
			DateYear: "1700",
			DateAberWithDate: "Sun 01 Aba 1700",
			DateDoy: "1700.216",
			DateWoy: "1700W32-2",
			DateWithSlash: "1700/08/01",
			DateWithOutSlash: "17000801"
		},
		stime: 11101955400000,
		gdate: [2321, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 9, 23] },
		gtime: 11101955400000
	},
	{
		sdate: [1700, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 2],
			DateTime: "1700-08-02 00:00:00",
			DateAber: "02 Aba 1700",
			DateMonth: "Aba",
			DateYearMonth: "1700-Aba",
			DateYear: "1700",
			DateAberWithDate: "Mon 02 Aba 1700",
			DateDoy: "1700.217",
			DateWoy: "1700W32-3",
			DateWithSlash: "1700/08/02",
			DateWithOutSlash: "17000802"
		},
		stime: 11102041800000,
		gdate: [2321, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 9, 24] },
		gtime: 11102041800000
	},
	{
		sdate: [1700, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 15],
			DateTime: "1700-08-15 00:00:00",
			DateAber: "15 Aba 1700",
			DateMonth: "Aba",
			DateYearMonth: "1700-Aba",
			DateYear: "1700",
			DateAberWithDate: "Sun 15 Aba 1700",
			DateDoy: "1700.230",
			DateWoy: "1700W34-2",
			DateWithSlash: "1700/08/15",
			DateWithOutSlash: "17000815"
		},
		stime: 11103165000000,
		gdate: [2321, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 10, 6] },
		gtime: 11103165000000
	},
	{
		sdate: [1700, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 29],
			DateTime: "1700-08-29 00:00:00",
			DateAber: "29 Aba 1700",
			DateMonth: "Aba",
			DateYearMonth: "1700-Aba",
			DateYear: "1700",
			DateAberWithDate: "Sun 29 Aba 1700",
			DateDoy: "1700.244",
			DateWoy: "1700W36-2",
			DateWithSlash: "1700/08/29",
			DateWithOutSlash: "17000829"
		},
		stime: 11104374600000,
		gdate: [2321, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 10, 20] },
		gtime: 11104374600000
	},
	{
		sdate: [1700, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 30],
			DateTime: "1700-08-30 00:00:00",
			DateAber: "30 Aba 1700",
			DateMonth: "Aba",
			DateYearMonth: "1700-Aba",
			DateYear: "1700",
			DateAberWithDate: "Mon 30 Aba 1700",
			DateDoy: "1700.245",
			DateWoy: "1700W36-3",
			DateWithSlash: "1700/08/30",
			DateWithOutSlash: "17000830"
		},
		stime: 11104461000000,
		gdate: [2321, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 10, 21] },
		gtime: 11104461000000
	},
	{
		sdate: [1700, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 1],
			DateTime: "1700-09-01 00:00:00",
			DateAber: "01 Aza 1700",
			DateMonth: "Aza",
			DateYearMonth: "1700-Aza",
			DateYear: "1700",
			DateAberWithDate: "Tue 01 Aza 1700",
			DateDoy: "1700.246",
			DateWoy: "1700W36-4",
			DateWithSlash: "1700/09/01",
			DateWithOutSlash: "17000901"
		},
		stime: 11104547400000,
		gdate: [2321, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 10, 22] },
		gtime: 11104547400000
	},
	{
		sdate: [1700, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 2],
			DateTime: "1700-09-02 00:00:00",
			DateAber: "02 Aza 1700",
			DateMonth: "Aza",
			DateYearMonth: "1700-Aza",
			DateYear: "1700",
			DateAberWithDate: "Wed 02 Aza 1700",
			DateDoy: "1700.247",
			DateWoy: "1700W36-5",
			DateWithSlash: "1700/09/02",
			DateWithOutSlash: "17000902"
		},
		stime: 11104633800000,
		gdate: [2321, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 10, 23] },
		gtime: 11104633800000
	},
	{
		sdate: [1700, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 15],
			DateTime: "1700-09-15 00:00:00",
			DateAber: "15 Aza 1700",
			DateMonth: "Aza",
			DateYearMonth: "1700-Aza",
			DateYear: "1700",
			DateAberWithDate: "Tue 15 Aza 1700",
			DateDoy: "1700.260",
			DateWoy: "1700W38-4",
			DateWithSlash: "1700/09/15",
			DateWithOutSlash: "17000915"
		},
		stime: 11105757000000,
		gdate: [2321, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 11, 6] },
		gtime: 11105757000000
	},
	{
		sdate: [1700, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 29],
			DateTime: "1700-09-29 00:00:00",
			DateAber: "29 Aza 1700",
			DateMonth: "Aza",
			DateYearMonth: "1700-Aza",
			DateYear: "1700",
			DateAberWithDate: "Tue 29 Aza 1700",
			DateDoy: "1700.274",
			DateWoy: "1700W40-4",
			DateWithSlash: "1700/09/29",
			DateWithOutSlash: "17000929"
		},
		stime: 11106966600000,
		gdate: [2321, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 11, 20] },
		gtime: 11106966600000
	},
	{
		sdate: [1700, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 30],
			DateTime: "1700-09-30 00:00:00",
			DateAber: "30 Aza 1700",
			DateMonth: "Aza",
			DateYearMonth: "1700-Aza",
			DateYear: "1700",
			DateAberWithDate: "Wed 30 Aza 1700",
			DateDoy: "1700.275",
			DateWoy: "1700W40-5",
			DateWithSlash: "1700/09/30",
			DateWithOutSlash: "17000930"
		},
		stime: 11107053000000,
		gdate: [2321, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 11, 21] },
		gtime: 11107053000000
	},
	{
		sdate: [1700, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 1],
			DateTime: "1700-10-01 00:00:00",
			DateAber: "01 Dey 1700",
			DateMonth: "Dey",
			DateYearMonth: "1700-Dey",
			DateYear: "1700",
			DateAberWithDate: "Thu 01 Dey 1700",
			DateDoy: "1700.276",
			DateWoy: "1700W40-6",
			DateWithSlash: "1700/10/01",
			DateWithOutSlash: "17001001"
		},
		stime: 11107139400000,
		gdate: [2321, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 11, 22] },
		gtime: 11107139400000
	},
	{
		sdate: [1700, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 2],
			DateTime: "1700-10-02 00:00:00",
			DateAber: "02 Dey 1700",
			DateMonth: "Dey",
			DateYearMonth: "1700-Dey",
			DateYear: "1700",
			DateAberWithDate: "Fri 02 Dey 1700",
			DateDoy: "1700.277",
			DateWoy: "1700W40-7",
			DateWithSlash: "1700/10/02",
			DateWithOutSlash: "17001002"
		},
		stime: 11107225800000,
		gdate: [2321, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 11, 23] },
		gtime: 11107225800000
	},
	{
		sdate: [1700, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 15],
			DateTime: "1700-10-15 00:00:00",
			DateAber: "15 Dey 1700",
			DateMonth: "Dey",
			DateYearMonth: "1700-Dey",
			DateYear: "1700",
			DateAberWithDate: "Thu 15 Dey 1700",
			DateDoy: "1700.290",
			DateWoy: "1700W42-6",
			DateWithSlash: "1700/10/15",
			DateWithOutSlash: "17001015"
		},
		stime: 11108349000000,
		gdate: [2322, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 0, 5] },
		gtime: 11108349000000
	},
	{
		sdate: [1700, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 29],
			DateTime: "1700-10-29 00:00:00",
			DateAber: "29 Dey 1700",
			DateMonth: "Dey",
			DateYearMonth: "1700-Dey",
			DateYear: "1700",
			DateAberWithDate: "Thu 29 Dey 1700",
			DateDoy: "1700.304",
			DateWoy: "1700W44-6",
			DateWithSlash: "1700/10/29",
			DateWithOutSlash: "17001029"
		},
		stime: 11109558600000,
		gdate: [2322, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 0, 19] },
		gtime: 11109558600000
	},
	{
		sdate: [1700, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 30],
			DateTime: "1700-10-30 00:00:00",
			DateAber: "30 Dey 1700",
			DateMonth: "Dey",
			DateYearMonth: "1700-Dey",
			DateYear: "1700",
			DateAberWithDate: "Fri 30 Dey 1700",
			DateDoy: "1700.305",
			DateWoy: "1700W44-7",
			DateWithSlash: "1700/10/30",
			DateWithOutSlash: "17001030"
		},
		stime: 11109645000000,
		gdate: [2322, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 0, 20] },
		gtime: 11109645000000
	},
	{
		sdate: [1700, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 1],
			DateTime: "1700-11-01 00:00:00",
			DateAber: "01 Bah 1700",
			DateMonth: "Bah",
			DateYearMonth: "1700-Bah",
			DateYear: "1700",
			DateAberWithDate: "Sat 01 Bah 1700",
			DateDoy: "1700.306",
			DateWoy: "1700W45-1",
			DateWithSlash: "1700/11/01",
			DateWithOutSlash: "17001101"
		},
		stime: 11109731400000,
		gdate: [2322, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 0, 21] },
		gtime: 11109731400000
	},
	{
		sdate: [1700, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 2],
			DateTime: "1700-11-02 00:00:00",
			DateAber: "02 Bah 1700",
			DateMonth: "Bah",
			DateYearMonth: "1700-Bah",
			DateYear: "1700",
			DateAberWithDate: "Sun 02 Bah 1700",
			DateDoy: "1700.307",
			DateWoy: "1700W45-2",
			DateWithSlash: "1700/11/02",
			DateWithOutSlash: "17001102"
		},
		stime: 11109817800000,
		gdate: [2322, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 0, 22] },
		gtime: 11109817800000
	},
	{
		sdate: [1700, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 15],
			DateTime: "1700-11-15 00:00:00",
			DateAber: "15 Bah 1700",
			DateMonth: "Bah",
			DateYearMonth: "1700-Bah",
			DateYear: "1700",
			DateAberWithDate: "Sat 15 Bah 1700",
			DateDoy: "1700.320",
			DateWoy: "1700W47-1",
			DateWithSlash: "1700/11/15",
			DateWithOutSlash: "17001115"
		},
		stime: 11110941000000,
		gdate: [2322, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 1, 4] },
		gtime: 11110941000000
	},
	{
		sdate: [1700, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 29],
			DateTime: "1700-11-29 00:00:00",
			DateAber: "29 Bah 1700",
			DateMonth: "Bah",
			DateYearMonth: "1700-Bah",
			DateYear: "1700",
			DateAberWithDate: "Sat 29 Bah 1700",
			DateDoy: "1700.334",
			DateWoy: "1700W49-1",
			DateWithSlash: "1700/11/29",
			DateWithOutSlash: "17001129"
		},
		stime: 11112150600000,
		gdate: [2322, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 1, 18] },
		gtime: 11112150600000
	},
	{
		sdate: [1700, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 30],
			DateTime: "1700-11-30 00:00:00",
			DateAber: "30 Bah 1700",
			DateMonth: "Bah",
			DateYearMonth: "1700-Bah",
			DateYear: "1700",
			DateAberWithDate: "Sun 30 Bah 1700",
			DateDoy: "1700.335",
			DateWoy: "1700W49-2",
			DateWithSlash: "1700/11/30",
			DateWithOutSlash: "17001130"
		},
		stime: 11112237000000,
		gdate: [2322, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 1, 19] },
		gtime: 11112237000000
	},
	{
		sdate: [1700, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 1],
			DateTime: "1700-12-01 00:00:00",
			DateAber: "01 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Mon 01 Esf 1700",
			DateDoy: "1700.336",
			DateWoy: "1700W49-3",
			DateWithSlash: "1700/12/01",
			DateWithOutSlash: "17001201"
		},
		stime: 11112323400000,
		gdate: [2322, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 1, 20] },
		gtime: 11112323400000
	},
	{
		sdate: [1700, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 2],
			DateTime: "1700-12-02 00:00:00",
			DateAber: "02 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Tue 02 Esf 1700",
			DateDoy: "1700.337",
			DateWoy: "1700W49-4",
			DateWithSlash: "1700/12/02",
			DateWithOutSlash: "17001202"
		},
		stime: 11112409800000,
		gdate: [2322, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 1, 21] },
		gtime: 11112409800000
	},
	{
		sdate: [1700, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 3],
			DateTime: "1700-12-03 00:00:00",
			DateAber: "03 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Wed 03 Esf 1700",
			DateDoy: "1700.338",
			DateWoy: "1700W49-5",
			DateWithSlash: "1700/12/03",
			DateWithOutSlash: "17001203"
		},
		stime: 11112496200000,
		gdate: [2322, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 1, 22] },
		gtime: 11112496200000
	},
	{
		sdate: [1700, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 4],
			DateTime: "1700-12-04 00:00:00",
			DateAber: "04 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Thu 04 Esf 1700",
			DateDoy: "1700.339",
			DateWoy: "1700W49-6",
			DateWithSlash: "1700/12/04",
			DateWithOutSlash: "17001204"
		},
		stime: 11112582600000,
		gdate: [2322, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 1, 23] },
		gtime: 11112582600000
	},
	{
		sdate: [1700, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 15],
			DateTime: "1700-12-15 00:00:00",
			DateAber: "15 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Mon 15 Esf 1700",
			DateDoy: "1700.350",
			DateWoy: "1700W51-3",
			DateWithSlash: "1700/12/15",
			DateWithOutSlash: "17001215"
		},
		stime: 11113533000000,
		gdate: [2322, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 2, 6] },
		gtime: 11113533000000
	},
	{
		sdate: [1700, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 25],
			DateTime: "1700-12-25 00:00:00",
			DateAber: "25 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Thu 25 Esf 1700",
			DateDoy: "1700.360",
			DateWoy: "1700W52-6",
			DateWithSlash: "1700/12/25",
			DateWithOutSlash: "17001225"
		},
		stime: 11114397000000,
		gdate: [2322, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 2, 16] },
		gtime: 11114397000000
	},
	{
		sdate: [1700, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 26],
			DateTime: "1700-12-26 00:00:00",
			DateAber: "26 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Fri 26 Esf 1700",
			DateDoy: "1700.361",
			DateWoy: "1700W52-7",
			DateWithSlash: "1700/12/26",
			DateWithOutSlash: "17001226"
		},
		stime: 11114483400000,
		gdate: [2322, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 2, 17] },
		gtime: 11114483400000
	},
	{
		sdate: [1700, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 27],
			DateTime: "1700-12-27 00:00:00",
			DateAber: "27 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Sat 27 Esf 1700",
			DateDoy: "1700.362",
			DateWoy: "1701W01-1",
			DateWithSlash: "1700/12/27",
			DateWithOutSlash: "17001227"
		},
		stime: 11114569800000,
		gdate: [2322, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 2, 18] },
		gtime: 11114569800000
	},
	{
		sdate: [1700, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 28],
			DateTime: "1700-12-28 00:00:00",
			DateAber: "28 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Sun 28 Esf 1700",
			DateDoy: "1700.363",
			DateWoy: "1701W01-2",
			DateWithSlash: "1700/12/28",
			DateWithOutSlash: "17001228"
		},
		stime: 11114656200000,
		gdate: [2322, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 2, 19] },
		gtime: 11114656200000
	},
	{
		sdate: [1700, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 29],
			DateTime: "1700-12-29 00:00:00",
			DateAber: "29 Esf 1700",
			DateMonth: "Esf",
			DateYearMonth: "1700-Esf",
			DateYear: "1700",
			DateAberWithDate: "Mon 29 Esf 1700",
			DateDoy: "1700.364",
			DateWoy: "1701W01-3",
			DateWithSlash: "1700/12/29",
			DateWithOutSlash: "17001229"
		},
		stime: 11114742600000,
		gdate: [2322, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 2, 20] },
		gtime: 11114742600000
	}
];