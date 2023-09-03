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
		[1, 31]	[2, 1],
		[2, 2],
		[2, 15],
		[2, 30],
		[2, 31]	[3, 1],
		[3, 2],
		[3, 15],
		[3, 30],
		[3, 31]	[4, 1],
		[4, 2],
		[4, 15],
		[4, 30],
		[4, 31]	[5, 1],
		[5, 2],
		[5, 15],
		[5, 30],
		[5, 31]	[6, 1],
		[6, 2],
		[6, 15],
		[6, 29],
		[6, 30]	[7, 1],
		[7, 2],
		[7, 15],
		[7, 29],
		[7, 30]	[8, 1],
		[8, 2],
		[8, 15],
		[8, 29],
		[8, 30]	[9, 1],
		[9, 2],
		[9, 15],
		[9, 29],
		[9, 30]	[10, 1],
		[10, 2],
		[10, 15],
		[10, 29],
		[10, 30]	[11, 1],
		[11, 2],
		[11, 15],
		[11, 29],
		[11, 30]	[12, 1],
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
*/

export const DateString = [
	{
		sdate: [1200, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 1],
			DateTime: "1200-01-01 00:00:00",
			DateAber: "01 Far 1200",
			DateAberWithDate: "Wed 01 Far 1200",
			DateDoy: "1200.000",
			DateWoy: "1199W53-5"
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
			DateAberWithDate: "Thu 02 Far 1200",
			DateDoy: "1200.001",
			DateWoy: "1199W53-6"
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
			DateAberWithDate: "Fri 03 Far 1200",
			DateDoy: "1200.002",
			DateWoy: "1199W53-7"
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
			DateAberWithDate: "Sat 04 Far 1200",
			DateDoy: "1200.003",
			DateWoy: "1200W01-1"
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
			DateAberWithDate: "Sun 05 Far 1200",
			DateDoy: "1200.004",
			DateWoy: "1200W01-2"
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
			DateAberWithDate: "Mon 06 Far 1200",
			DateDoy: "1200.005",
			DateWoy: "1200W01-3"
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
			DateAberWithDate: "Tue 07 Far 1200",
			DateDoy: "1200.006",
			DateWoy: "1200W01-4"
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
			DateAberWithDate: "Wed 15 Far 1200",
			DateDoy: "1200.014",
			DateWoy: "1200W02-5"
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
			DateAberWithDate: "Wed 29 Far 1200",
			DateDoy: "1200.028",
			DateWoy: "1200W04-5"
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
			DateAberWithDate: "Thu 30 Far 1200",
			DateDoy: "1200.029",
			DateWoy: "1200W04-6"
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
			DateAberWithDate: "Fri 31 Far 1200",
			DateDoy: "1200.030",
			DateWoy: "1200W04-7"
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
			DateAberWithDate: "Sat 01 Ord 1200",
			DateDoy: "1200.031",
			DateWoy: "1200W05-1"
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
			DateAberWithDate: "Sun 02 Ord 1200",
			DateDoy: "1200.032",
			DateWoy: "1200W05-2"
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
			DateAberWithDate: "Sat 15 Ord 1200",
			DateDoy: "1200.045",
			DateWoy: "1200W07-1"
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
			DateAberWithDate: "Sun 30 Ord 1200",
			DateDoy: "1200.060",
			DateWoy: "1200W09-2"
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
			DateAberWithDate: "Mon 31 Ord 1200",
			DateDoy: "1200.061",
			DateWoy: "1200W09-3"
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
			DateAberWithDate: "Tue 01 Kho 1200",
			DateDoy: "1200.062",
			DateWoy: "1200W09-4"
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
			DateAberWithDate: "Wed 02 Kho 1200",
			DateDoy: "1200.063",
			DateWoy: "1200W09-5"
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
			DateAberWithDate: "Tue 15 Kho 1200",
			DateDoy: "1200.076",
			DateWoy: "1200W11-4"
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
			DateAberWithDate: "Wed 30 Kho 1200",
			DateDoy: "1200.091",
			DateWoy: "1200W13-5"
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
			DateAberWithDate: "Thu 31 Kho 1200",
			DateDoy: "1200.092",
			DateWoy: "1200W13-6"
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
			DateAberWithDate: "Fri 01 Tir 1200",
			DateDoy: "1200.093",
			DateWoy: "1200W13-7"
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
			DateAberWithDate: "Sat 02 Tir 1200",
			DateDoy: "1200.094",
			DateWoy: "1200W14-1"
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
			DateAberWithDate: "Fri 15 Tir 1200",
			DateDoy: "1200.107",
			DateWoy: "1200W15-7"
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
			DateAberWithDate: "Sat 30 Tir 1200",
			DateDoy: "1200.122",
			DateWoy: "1200W18-1"
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
			DateAberWithDate: "Sun 31 Tir 1200",
			DateDoy: "1200.123",
			DateWoy: "1200W18-2"
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
			DateAberWithDate: "Mon 01 Amo 1200",
			DateDoy: "1200.124",
			DateWoy: "1200W18-3"
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
			DateAberWithDate: "Tue 02 Amo 1200",
			DateDoy: "1200.125",
			DateWoy: "1200W18-4"
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
			DateAberWithDate: "Mon 15 Amo 1200",
			DateDoy: "1200.138",
			DateWoy: "1200W20-3"
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
			DateAberWithDate: "Tue 30 Amo 1200",
			DateDoy: "1200.153",
			DateWoy: "1200W22-4"
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
			DateAberWithDate: "Wed 31 Amo 1200",
			DateDoy: "1200.154",
			DateWoy: "1200W22-5"
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
			DateAberWithDate: "Thu 01 Sha 1200",
			DateDoy: "1200.155",
			DateWoy: "1200W22-6"
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
			DateAberWithDate: "Fri 02 Sha 1200",
			DateDoy: "1200.156",
			DateWoy: "1200W22-7"
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
			DateAberWithDate: "Thu 15 Sha 1200",
			DateDoy: "1200.169",
			DateWoy: "1200W24-6"
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
			DateAberWithDate: "Thu 29 Sha 1200",
			DateDoy: "1200.183",
			DateWoy: "1200W26-6"
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
			DateAberWithDate: "Fri 30 Sha 1200",
			DateDoy: "1200.184",
			DateWoy: "1200W26-7"
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
			DateAberWithDate: "Sun 01 Meh 1200",
			DateDoy: "1200.186",
			DateWoy: "1200W27-2"
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
			DateAberWithDate: "Mon 02 Meh 1200",
			DateDoy: "1200.187",
			DateWoy: "1200W27-3"
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
			DateAberWithDate: "Sun 15 Meh 1200",
			DateDoy: "1200.200",
			DateWoy: "1200W29-2"
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
			DateAberWithDate: "Sun 29 Meh 1200",
			DateDoy: "1200.214",
			DateWoy: "1200W31-2"
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
			DateAberWithDate: "Mon 30 Meh 1200",
			DateDoy: "1200.215",
			DateWoy: "1200W31-3"
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
			DateAberWithDate: "Tue 01 Aba 1200",
			DateDoy: "1200.216",
			DateWoy: "1200W31-4"
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
			DateAberWithDate: "Wed 02 Aba 1200",
			DateDoy: "1200.217",
			DateWoy: "1200W31-5"
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
			DateAberWithDate: "Tue 15 Aba 1200",
			DateDoy: "1200.230",
			DateWoy: "1200W33-4"
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
			DateAberWithDate: "Tue 29 Aba 1200",
			DateDoy: "1200.244",
			DateWoy: "1200W35-4"
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
			DateAberWithDate: "Wed 30 Aba 1200",
			DateDoy: "1200.245",
			DateWoy: "1200W35-5"
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
			DateAberWithDate: "Thu 01 Aza 1200",
			DateDoy: "1200.246",
			DateWoy: "1200W35-6"
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
			DateAberWithDate: "Fri 02 Aza 1200",
			DateDoy: "1200.247",
			DateWoy: "1200W35-7"
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
			DateAberWithDate: "Thu 15 Aza 1200",
			DateDoy: "1200.260",
			DateWoy: "1200W37-6"
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
			DateAberWithDate: "Thu 29 Aza 1200",
			DateDoy: "1200.274",
			DateWoy: "1200W39-6"
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
			DateAberWithDate: "Fri 30 Aza 1200",
			DateDoy: "1200.275",
			DateWoy: "1200W39-7"
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
			DateAberWithDate: "Sat 01 Dey 1200",
			DateDoy: "1200.276",
			DateWoy: "1200W40-1"
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
			DateAberWithDate: "Sun 02 Dey 1200",
			DateDoy: "1200.277",
			DateWoy: "1200W40-2"
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
			DateAberWithDate: "Sat 15 Dey 1200",
			DateDoy: "1200.290",
			DateWoy: "1200W42-1"
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
			DateAberWithDate: "Sat 29 Dey 1200",
			DateDoy: "1200.304",
			DateWoy: "1200W44-1"
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
			DateAberWithDate: "Sun 30 Dey 1200",
			DateDoy: "1200.305",
			DateWoy: "1200W44-2"
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
			DateAberWithDate: "Mon 01 Bah 1200",
			DateDoy: "1200.306",
			DateWoy: "1200W44-3"
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
			DateAberWithDate: "Tue 02 Bah 1200",
			DateDoy: "1200.307",
			DateWoy: "1200W44-4"
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
			DateAberWithDate: "Mon 15 Bah 1200",
			DateDoy: "1200.320",
			DateWoy: "1200W46-3"
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
			DateAberWithDate: "Mon 29 Bah 1200",
			DateDoy: "1200.334",
			DateWoy: "1200W48-3"
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
			DateAberWithDate: "Tue 30 Bah 1200",
			DateDoy: "1200.335",
			DateWoy: "1200W48-4"
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
			DateAberWithDate: "Wed 01 Esf 1200",
			DateDoy: "1200.336",
			DateWoy: "1200W48-5"
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
			DateAberWithDate: "Thu 02 Esf 1200",
			DateDoy: "1200.337",
			DateWoy: "1200W48-6"
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
			DateAberWithDate: "Fri 03 Esf 1200",
			DateDoy: "1200.338",
			DateWoy: "1200W48-7"
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
			DateAberWithDate: "Sat 04 Esf 1200",
			DateDoy: "1200.339",
			DateWoy: "1200W49-1"
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
			DateAberWithDate: "Wed 15 Esf 1200",
			DateDoy: "1200.350",
			DateWoy: "1200W50-5"
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
			DateAberWithDate: "Sat 25 Esf 1200",
			DateDoy: "1200.360",
			DateWoy: "1200W52-1"
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
			DateAberWithDate: "Sun 26 Esf 1200",
			DateDoy: "1200.361",
			DateWoy: "1200W52-2"
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
			DateAberWithDate: "Mon 27 Esf 1200",
			DateDoy: "1200.362",
			DateWoy: "1200W52-3"
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
			DateAberWithDate: "Tue 28 Esf 1200",
			DateDoy: "1200.363",
			DateWoy: "1200W52-4"
		},
		stime: -4663797944000,
		gdate: [1822, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1822, 2, 19] },
		gtime: -4663797944000
	},

	{
		sdate: [1220, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 1],
			DateTime: "1220-01-01 00:00:00",
			DateAber: "01 Far 1220",
			DateAberWithDate: "Sun 01 Far 1220",
			DateDoy: "1220.000",
			DateWoy: "1220W01-2"
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
			DateAberWithDate: "Mon 02 Far 1220",
			DateDoy: "1220.001",
			DateWoy: "1220W01-3"
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
			DateAberWithDate: "Tue 03 Far 1220",
			DateDoy: "1220.002",
			DateWoy: "1220W01-4"
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
			DateAberWithDate: "Wed 04 Far 1220",
			DateDoy: "1220.003",
			DateWoy: "1220W01-5"
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
			DateAberWithDate: "Thu 05 Far 1220",
			DateDoy: "1220.004",
			DateWoy: "1220W01-6"
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
			DateAberWithDate: "Fri 06 Far 1220",
			DateDoy: "1220.005",
			DateWoy: "1220W01-7"
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
			DateAberWithDate: "Sat 07 Far 1220",
			DateDoy: "1220.006",
			DateWoy: "1220W02-1"
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
			DateAberWithDate: "Sun 15 Far 1220",
			DateDoy: "1220.014",
			DateWoy: "1220W03-2"
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
			DateAberWithDate: "Sun 29 Far 1220",
			DateDoy: "1220.028",
			DateWoy: "1220W05-2"
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
			DateAberWithDate: "Mon 30 Far 1220",
			DateDoy: "1220.029",
			DateWoy: "1220W05-3"
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
			DateAberWithDate: "Tue 31 Far 1220",
			DateDoy: "1220.030",
			DateWoy: "1220W05-4"
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
			DateAberWithDate: "Wed 01 Ord 1220",
			DateDoy: "1220.031",
			DateWoy: "1220W05-5"
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
			DateAberWithDate: "Thu 02 Ord 1220",
			DateDoy: "1220.032",
			DateWoy: "1220W05-6"
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
			DateAberWithDate: "Wed 15 Ord 1220",
			DateDoy: "1220.045",
			DateWoy: "1220W07-5"
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
			DateAberWithDate: "Thu 30 Ord 1220",
			DateDoy: "1220.060",
			DateWoy: "1220W09-6"
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
			DateAberWithDate: "Fri 31 Ord 1220",
			DateDoy: "1220.061",
			DateWoy: "1220W09-7"
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
			DateAberWithDate: "Sat 01 Kho 1220",
			DateDoy: "1220.062",
			DateWoy: "1220W10-1"
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
			DateAberWithDate: "Sun 02 Kho 1220",
			DateDoy: "1220.063",
			DateWoy: "1220W10-2"
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
			DateAberWithDate: "Sat 15 Kho 1220",
			DateDoy: "1220.076",
			DateWoy: "1220W12-1"
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
			DateAberWithDate: "Sun 30 Kho 1220",
			DateDoy: "1220.091",
			DateWoy: "1220W14-2"
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
			DateAberWithDate: "Mon 31 Kho 1220",
			DateDoy: "1220.092",
			DateWoy: "1220W14-3"
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
			DateAberWithDate: "Tue 01 Tir 1220",
			DateDoy: "1220.093",
			DateWoy: "1220W14-4"
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
			DateAberWithDate: "Wed 02 Tir 1220",
			DateDoy: "1220.094",
			DateWoy: "1220W14-5"
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
			DateAberWithDate: "Tue 15 Tir 1220",
			DateDoy: "1220.107",
			DateWoy: "1220W16-4"
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
			DateAberWithDate: "Wed 30 Tir 1220",
			DateDoy: "1220.122",
			DateWoy: "1220W18-5"
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
			DateAberWithDate: "Thu 31 Tir 1220",
			DateDoy: "1220.123",
			DateWoy: "1220W18-6"
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
			DateAberWithDate: "Fri 01 Amo 1220",
			DateDoy: "1220.124",
			DateWoy: "1220W18-7"
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
			DateAberWithDate: "Sat 02 Amo 1220",
			DateDoy: "1220.125",
			DateWoy: "1220W19-1"
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
			DateAberWithDate: "Fri 15 Amo 1220",
			DateDoy: "1220.138",
			DateWoy: "1220W20-7"
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
			DateAberWithDate: "Sat 30 Amo 1220",
			DateDoy: "1220.153",
			DateWoy: "1220W23-1"
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
			DateAberWithDate: "Sun 31 Amo 1220",
			DateDoy: "1220.154",
			DateWoy: "1220W23-2"
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
			DateAberWithDate: "Mon 01 Sha 1220",
			DateDoy: "1220.155",
			DateWoy: "1220W23-3"
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
			DateAberWithDate: "Tue 02 Sha 1220",
			DateDoy: "1220.156",
			DateWoy: "1220W23-4"
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
			DateAberWithDate: "Mon 15 Sha 1220",
			DateDoy: "1220.169",
			DateWoy: "1220W25-3"
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
			DateAberWithDate: "Mon 29 Sha 1220",
			DateDoy: "1220.183",
			DateWoy: "1220W27-3"
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
			DateAberWithDate: "Tue 30 Sha 1220",
			DateDoy: "1220.184",
			DateWoy: "1220W27-4"
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
			DateAberWithDate: "Thu 01 Meh 1220",
			DateDoy: "1220.186",
			DateWoy: "1220W27-6"
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
			DateAberWithDate: "Fri 02 Meh 1220",
			DateDoy: "1220.187",
			DateWoy: "1220W27-7"
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
			DateAberWithDate: "Thu 15 Meh 1220",
			DateDoy: "1220.200",
			DateWoy: "1220W29-6"
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
			DateAberWithDate: "Thu 29 Meh 1220",
			DateDoy: "1220.214",
			DateWoy: "1220W31-6"
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
			DateAberWithDate: "Fri 30 Meh 1220",
			DateDoy: "1220.215",
			DateWoy: "1220W31-7"
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
			DateAberWithDate: "Sat 01 Aba 1220",
			DateDoy: "1220.216",
			DateWoy: "1220W32-1"
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
			DateAberWithDate: "Sun 02 Aba 1220",
			DateDoy: "1220.217",
			DateWoy: "1220W32-2"
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
			DateAberWithDate: "Sat 15 Aba 1220",
			DateDoy: "1220.230",
			DateWoy: "1220W34-1"
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
			DateAberWithDate: "Sat 29 Aba 1220",
			DateDoy: "1220.244",
			DateWoy: "1220W36-1"
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
			DateAberWithDate: "Sun 30 Aba 1220",
			DateDoy: "1220.245",
			DateWoy: "1220W36-2"
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
			DateAberWithDate: "Mon 01 Aza 1220",
			DateDoy: "1220.246",
			DateWoy: "1220W36-3"
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
			DateAberWithDate: "Tue 02 Aza 1220",
			DateDoy: "1220.247",
			DateWoy: "1220W36-4"
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
			DateAberWithDate: "Mon 15 Aza 1220",
			DateDoy: "1220.260",
			DateWoy: "1220W38-3"
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
			DateAberWithDate: "Mon 29 Aza 1220",
			DateDoy: "1220.274",
			DateWoy: "1220W40-3"
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
			DateAberWithDate: "Tue 30 Aza 1220",
			DateDoy: "1220.275",
			DateWoy: "1220W40-4"
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
			DateAberWithDate: "Wed 01 Dey 1220",
			DateDoy: "1220.276",
			DateWoy: "1220W40-5"
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
			DateAberWithDate: "Thu 02 Dey 1220",
			DateDoy: "1220.277",
			DateWoy: "1220W40-6"
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
			DateAberWithDate: "Wed 15 Dey 1220",
			DateDoy: "1220.290",
			DateWoy: "1220W42-5"
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
			DateAberWithDate: "Wed 29 Dey 1220",
			DateDoy: "1220.304",
			DateWoy: "1220W44-5"
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
			DateAberWithDate: "Thu 30 Dey 1220",
			DateDoy: "1220.305",
			DateWoy: "1220W44-6"
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
			DateAberWithDate: "Fri 01 Bah 1220",
			DateDoy: "1220.306",
			DateWoy: "1220W44-7"
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
			DateAberWithDate: "Sat 02 Bah 1220",
			DateDoy: "1220.307",
			DateWoy: "1220W45-1"
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
			DateAberWithDate: "Fri 15 Bah 1220",
			DateDoy: "1220.320",
			DateWoy: "1220W46-7"
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
			DateAberWithDate: "Fri 29 Bah 1220",
			DateDoy: "1220.334",
			DateWoy: "1220W48-7"
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
			DateAberWithDate: "Sat 30 Bah 1220",
			DateDoy: "1220.335",
			DateWoy: "1220W49-1"
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
			DateAberWithDate: "Sun 01 Esf 1220",
			DateDoy: "1220.336",
			DateWoy: "1220W49-2"
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
			DateAberWithDate: "Mon 02 Esf 1220",
			DateDoy: "1220.337",
			DateWoy: "1220W49-3"
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
			DateAberWithDate: "Tue 03 Esf 1220",
			DateDoy: "1220.338",
			DateWoy: "1220W49-4"
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
			DateAberWithDate: "Wed 04 Esf 1220",
			DateDoy: "1220.339",
			DateWoy: "1220W49-5"
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
			DateAberWithDate: "Sun 15 Esf 1220",
			DateDoy: "1220.350",
			DateWoy: "1220W51-2"
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
			DateAberWithDate: "Wed 25 Esf 1220",
			DateDoy: "1220.360",
			DateWoy: "1220W52-5"
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
			DateAberWithDate: "Thu 26 Esf 1220",
			DateDoy: "1220.361",
			DateWoy: "1220W52-6"
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
			DateAberWithDate: "Fri 27 Esf 1220",
			DateDoy: "1220.362",
			DateWoy: "1220W52-7"
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
			DateAberWithDate: "Sat 28 Esf 1220",
			DateDoy: "1220.363",
			DateWoy: "1221W01-1"
		},
		stime: -4032645944000,
		gdate: [1842, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1842, 2, 19] },
		gtime: -4032645944000
	},

	{
		sdate: [1240, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 1],
			DateTime: "1240-01-01 00:00:00",
			DateAber: "01 Far 1240",
			DateAberWithDate: "Thu 01 Far 1240",
			DateDoy: "1240.000",
			DateWoy: "1239W52-6"
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
			DateAberWithDate: "Fri 02 Far 1240",
			DateDoy: "1240.001",
			DateWoy: "1239W52-7"
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
			DateAberWithDate: "Sat 03 Far 1240",
			DateDoy: "1240.002",
			DateWoy: "1240W01-1"
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
			DateAberWithDate: "Sun 04 Far 1240",
			DateDoy: "1240.003",
			DateWoy: "1240W01-2"
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
			DateAberWithDate: "Mon 05 Far 1240",
			DateDoy: "1240.004",
			DateWoy: "1240W01-3"
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
			DateAberWithDate: "Tue 06 Far 1240",
			DateDoy: "1240.005",
			DateWoy: "1240W01-4"
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
			DateAberWithDate: "Wed 07 Far 1240",
			DateDoy: "1240.006",
			DateWoy: "1240W01-5"
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
			DateAberWithDate: "Thu 15 Far 1240",
			DateDoy: "1240.014",
			DateWoy: "1240W02-6"
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
			DateAberWithDate: "Thu 29 Far 1240",
			DateDoy: "1240.028",
			DateWoy: "1240W04-6"
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
			DateAberWithDate: "Fri 30 Far 1240",
			DateDoy: "1240.029",
			DateWoy: "1240W04-7"
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
			DateAberWithDate: "Sat 31 Far 1240",
			DateDoy: "1240.030",
			DateWoy: "1240W05-1"
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
			DateAberWithDate: "Sun 01 Ord 1240",
			DateDoy: "1240.031",
			DateWoy: "1240W05-2"
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
			DateAberWithDate: "Mon 02 Ord 1240",
			DateDoy: "1240.032",
			DateWoy: "1240W05-3"
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
			DateAberWithDate: "Sun 15 Ord 1240",
			DateDoy: "1240.045",
			DateWoy: "1240W07-2"
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
			DateAberWithDate: "Mon 30 Ord 1240",
			DateDoy: "1240.060",
			DateWoy: "1240W09-3"
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
			DateAberWithDate: "Tue 31 Ord 1240",
			DateDoy: "1240.061",
			DateWoy: "1240W09-4"
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
			DateAberWithDate: "Wed 01 Kho 1240",
			DateDoy: "1240.062",
			DateWoy: "1240W09-5"
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
			DateAberWithDate: "Thu 02 Kho 1240",
			DateDoy: "1240.063",
			DateWoy: "1240W09-6"
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
			DateAberWithDate: "Wed 15 Kho 1240",
			DateDoy: "1240.076",
			DateWoy: "1240W11-5"
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
			DateAberWithDate: "Thu 30 Kho 1240",
			DateDoy: "1240.091",
			DateWoy: "1240W13-6"
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
			DateAberWithDate: "Fri 31 Kho 1240",
			DateDoy: "1240.092",
			DateWoy: "1240W13-7"
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
			DateAberWithDate: "Sat 01 Tir 1240",
			DateDoy: "1240.093",
			DateWoy: "1240W14-1"
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
			DateAberWithDate: "Sun 02 Tir 1240",
			DateDoy: "1240.094",
			DateWoy: "1240W14-2"
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
			DateAberWithDate: "Sat 15 Tir 1240",
			DateDoy: "1240.107",
			DateWoy: "1240W16-1"
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
			DateAberWithDate: "Sun 30 Tir 1240",
			DateDoy: "1240.122",
			DateWoy: "1240W18-2"
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
			DateAberWithDate: "Mon 31 Tir 1240",
			DateDoy: "1240.123",
			DateWoy: "1240W18-3"
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
			DateAberWithDate: "Tue 01 Amo 1240",
			DateDoy: "1240.124",
			DateWoy: "1240W18-4"
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
			DateAberWithDate: "Wed 02 Amo 1240",
			DateDoy: "1240.125",
			DateWoy: "1240W18-5"
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
			DateAberWithDate: "Tue 15 Amo 1240",
			DateDoy: "1240.138",
			DateWoy: "1240W20-4"
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
			DateAberWithDate: "Wed 30 Amo 1240",
			DateDoy: "1240.153",
			DateWoy: "1240W22-5"
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
			DateAberWithDate: "Thu 31 Amo 1240",
			DateDoy: "1240.154",
			DateWoy: "1240W22-6"
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
			DateAberWithDate: "Fri 01 Sha 1240",
			DateDoy: "1240.155",
			DateWoy: "1240W22-7"
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
			DateAberWithDate: "Sat 02 Sha 1240",
			DateDoy: "1240.156",
			DateWoy: "1240W23-1"
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
			DateAberWithDate: "Fri 15 Sha 1240",
			DateDoy: "1240.169",
			DateWoy: "1240W24-7"
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
			DateAberWithDate: "Fri 29 Sha 1240",
			DateDoy: "1240.183",
			DateWoy: "1240W26-7"
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
			DateAberWithDate: "Sat 30 Sha 1240",
			DateDoy: "1240.184",
			DateWoy: "1240W27-1"
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
			DateAberWithDate: "Mon 01 Meh 1240",
			DateDoy: "1240.186",
			DateWoy: "1240W27-3"
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
			DateAberWithDate: "Tue 02 Meh 1240",
			DateDoy: "1240.187",
			DateWoy: "1240W27-4"
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
			DateAberWithDate: "Mon 15 Meh 1240",
			DateDoy: "1240.200",
			DateWoy: "1240W29-3"
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
			DateAberWithDate: "Mon 29 Meh 1240",
			DateDoy: "1240.214",
			DateWoy: "1240W31-3"
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
			DateAberWithDate: "Tue 30 Meh 1240",
			DateDoy: "1240.215",
			DateWoy: "1240W31-4"
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
			DateAberWithDate: "Wed 01 Aba 1240",
			DateDoy: "1240.216",
			DateWoy: "1240W31-5"
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
			DateAberWithDate: "Thu 02 Aba 1240",
			DateDoy: "1240.217",
			DateWoy: "1240W31-6"
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
			DateAberWithDate: "Wed 15 Aba 1240",
			DateDoy: "1240.230",
			DateWoy: "1240W33-5"
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
			DateAberWithDate: "Wed 29 Aba 1240",
			DateDoy: "1240.244",
			DateWoy: "1240W35-5"
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
			DateAberWithDate: "Thu 30 Aba 1240",
			DateDoy: "1240.245",
			DateWoy: "1240W35-6"
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
			DateAberWithDate: "Fri 01 Aza 1240",
			DateDoy: "1240.246",
			DateWoy: "1240W35-7"
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
			DateAberWithDate: "Sat 02 Aza 1240",
			DateDoy: "1240.247",
			DateWoy: "1240W36-1"
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
			DateAberWithDate: "Fri 15 Aza 1240",
			DateDoy: "1240.260",
			DateWoy: "1240W37-7"
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
			DateAberWithDate: "Fri 29 Aza 1240",
			DateDoy: "1240.274",
			DateWoy: "1240W39-7"
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
			DateAberWithDate: "Sat 30 Aza 1240",
			DateDoy: "1240.275",
			DateWoy: "1240W40-1"
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
			DateAberWithDate: "Sun 01 Dey 1240",
			DateDoy: "1240.276",
			DateWoy: "1240W40-2"
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
			DateAberWithDate: "Mon 02 Dey 1240",
			DateDoy: "1240.277",
			DateWoy: "1240W40-3"
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
			DateAberWithDate: "Sun 15 Dey 1240",
			DateDoy: "1240.290",
			DateWoy: "1240W42-2"
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
			DateAberWithDate: "Sun 29 Dey 1240",
			DateDoy: "1240.304",
			DateWoy: "1240W44-2"
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
			DateAberWithDate: "Mon 30 Dey 1240",
			DateDoy: "1240.305",
			DateWoy: "1240W44-3"
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
			DateAberWithDate: "Tue 01 Bah 1240",
			DateDoy: "1240.306",
			DateWoy: "1240W44-4"
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
			DateAberWithDate: "Wed 02 Bah 1240",
			DateDoy: "1240.307",
			DateWoy: "1240W44-5"
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
			DateAberWithDate: "Tue 15 Bah 1240",
			DateDoy: "1240.320",
			DateWoy: "1240W46-4"
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
			DateAberWithDate: "Tue 29 Bah 1240",
			DateDoy: "1240.334",
			DateWoy: "1240W48-4"
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
			DateAberWithDate: "Wed 30 Bah 1240",
			DateDoy: "1240.335",
			DateWoy: "1240W48-5"
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
			DateAberWithDate: "Thu 01 Esf 1240",
			DateDoy: "1240.336",
			DateWoy: "1240W48-6"
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
			DateAberWithDate: "Fri 02 Esf 1240",
			DateDoy: "1240.337",
			DateWoy: "1240W48-7"
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
			DateAberWithDate: "Sat 03 Esf 1240",
			DateDoy: "1240.338",
			DateWoy: "1240W49-1"
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
			DateAberWithDate: "Sun 04 Esf 1240",
			DateDoy: "1240.339",
			DateWoy: "1240W49-2"
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
			DateAberWithDate: "Thu 15 Esf 1240",
			DateDoy: "1240.350",
			DateWoy: "1240W50-6"
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
			DateAberWithDate: "Sun 25 Esf 1240",
			DateDoy: "1240.360",
			DateWoy: "1240W52-2"
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
			DateAberWithDate: "Mon 26 Esf 1240",
			DateDoy: "1240.361",
			DateWoy: "1240W52-3"
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
			DateAberWithDate: "Tue 27 Esf 1240",
			DateDoy: "1240.362",
			DateWoy: "1240W52-4"
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
			DateAberWithDate: "Wed 28 Esf 1240",
			DateDoy: "1240.363",
			DateWoy: "1240W52-5"
		},
		stime: -3401493944000,
		gdate: [1862, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1862, 2, 19] },
		gtime: -3401493944000
	},

	{
		sdate: [1260, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 1],
			DateTime: "1260-01-01 00:00:00",
			DateAber: "01 Far 1260",
			DateAberWithDate: "Mon 01 Far 1260",
			DateDoy: "1260.000",
			DateWoy: "1260W01-3"
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
			DateAberWithDate: "Tue 02 Far 1260",
			DateDoy: "1260.001",
			DateWoy: "1260W01-4"
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
			DateAberWithDate: "Wed 03 Far 1260",
			DateDoy: "1260.002",
			DateWoy: "1260W01-5"
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
			DateAberWithDate: "Thu 04 Far 1260",
			DateDoy: "1260.003",
			DateWoy: "1260W01-6"
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
			DateAberWithDate: "Fri 05 Far 1260",
			DateDoy: "1260.004",
			DateWoy: "1260W01-7"
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
			DateAberWithDate: "Sat 06 Far 1260",
			DateDoy: "1260.005",
			DateWoy: "1260W02-1"
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
			DateAberWithDate: "Sun 07 Far 1260",
			DateDoy: "1260.006",
			DateWoy: "1260W02-2"
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
			DateAberWithDate: "Mon 15 Far 1260",
			DateDoy: "1260.014",
			DateWoy: "1260W03-3"
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
			DateAberWithDate: "Mon 29 Far 1260",
			DateDoy: "1260.028",
			DateWoy: "1260W05-3"
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
			DateAberWithDate: "Tue 30 Far 1260",
			DateDoy: "1260.029",
			DateWoy: "1260W05-4"
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
			DateAberWithDate: "Wed 31 Far 1260",
			DateDoy: "1260.030",
			DateWoy: "1260W05-5"
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
			DateAberWithDate: "Thu 01 Ord 1260",
			DateDoy: "1260.031",
			DateWoy: "1260W05-6"
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
			DateAberWithDate: "Fri 02 Ord 1260",
			DateDoy: "1260.032",
			DateWoy: "1260W05-7"
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
			DateAberWithDate: "Thu 15 Ord 1260",
			DateDoy: "1260.045",
			DateWoy: "1260W07-6"
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
			DateAberWithDate: "Fri 30 Ord 1260",
			DateDoy: "1260.060",
			DateWoy: "1260W09-7"
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
			DateAberWithDate: "Sat 31 Ord 1260",
			DateDoy: "1260.061",
			DateWoy: "1260W10-1"
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
			DateAberWithDate: "Sun 01 Kho 1260",
			DateDoy: "1260.062",
			DateWoy: "1260W10-2"
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
			DateAberWithDate: "Mon 02 Kho 1260",
			DateDoy: "1260.063",
			DateWoy: "1260W10-3"
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
			DateAberWithDate: "Sun 15 Kho 1260",
			DateDoy: "1260.076",
			DateWoy: "1260W12-2"
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
			DateAberWithDate: "Mon 30 Kho 1260",
			DateDoy: "1260.091",
			DateWoy: "1260W14-3"
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
			DateAberWithDate: "Tue 31 Kho 1260",
			DateDoy: "1260.092",
			DateWoy: "1260W14-4"
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
			DateAberWithDate: "Wed 01 Tir 1260",
			DateDoy: "1260.093",
			DateWoy: "1260W14-5"
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
			DateAberWithDate: "Thu 02 Tir 1260",
			DateDoy: "1260.094",
			DateWoy: "1260W14-6"
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
			DateAberWithDate: "Wed 15 Tir 1260",
			DateDoy: "1260.107",
			DateWoy: "1260W16-5"
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
			DateAberWithDate: "Thu 30 Tir 1260",
			DateDoy: "1260.122",
			DateWoy: "1260W18-6"
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
			DateAberWithDate: "Fri 31 Tir 1260",
			DateDoy: "1260.123",
			DateWoy: "1260W18-7"
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
			DateAberWithDate: "Sat 01 Amo 1260",
			DateDoy: "1260.124",
			DateWoy: "1260W19-1"
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
			DateAberWithDate: "Sun 02 Amo 1260",
			DateDoy: "1260.125",
			DateWoy: "1260W19-2"
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
			DateAberWithDate: "Sat 15 Amo 1260",
			DateDoy: "1260.138",
			DateWoy: "1260W21-1"
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
			DateAberWithDate: "Sun 30 Amo 1260",
			DateDoy: "1260.153",
			DateWoy: "1260W23-2"
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
			DateAberWithDate: "Mon 31 Amo 1260",
			DateDoy: "1260.154",
			DateWoy: "1260W23-3"
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
			DateAberWithDate: "Tue 01 Sha 1260",
			DateDoy: "1260.155",
			DateWoy: "1260W23-4"
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
			DateAberWithDate: "Wed 02 Sha 1260",
			DateDoy: "1260.156",
			DateWoy: "1260W23-5"
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
			DateAberWithDate: "Tue 15 Sha 1260",
			DateDoy: "1260.169",
			DateWoy: "1260W25-4"
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
			DateAberWithDate: "Tue 29 Sha 1260",
			DateDoy: "1260.183",
			DateWoy: "1260W27-4"
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
			DateAberWithDate: "Wed 30 Sha 1260",
			DateDoy: "1260.184",
			DateWoy: "1260W27-5"
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
			DateAberWithDate: "Fri 01 Meh 1260",
			DateDoy: "1260.186",
			DateWoy: "1260W27-7"
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
			DateAberWithDate: "Sat 02 Meh 1260",
			DateDoy: "1260.187",
			DateWoy: "1260W28-1"
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
			DateAberWithDate: "Fri 15 Meh 1260",
			DateDoy: "1260.200",
			DateWoy: "1260W29-7"
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
			DateAberWithDate: "Fri 29 Meh 1260",
			DateDoy: "1260.214",
			DateWoy: "1260W31-7"
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
			DateAberWithDate: "Sat 30 Meh 1260",
			DateDoy: "1260.215",
			DateWoy: "1260W32-1"
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
			DateAberWithDate: "Sun 01 Aba 1260",
			DateDoy: "1260.216",
			DateWoy: "1260W32-2"
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
			DateAberWithDate: "Mon 02 Aba 1260",
			DateDoy: "1260.217",
			DateWoy: "1260W32-3"
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
			DateAberWithDate: "Sun 15 Aba 1260",
			DateDoy: "1260.230",
			DateWoy: "1260W34-2"
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
			DateAberWithDate: "Sun 29 Aba 1260",
			DateDoy: "1260.244",
			DateWoy: "1260W36-2"
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
			DateAberWithDate: "Mon 30 Aba 1260",
			DateDoy: "1260.245",
			DateWoy: "1260W36-3"
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
			DateAberWithDate: "Tue 01 Aza 1260",
			DateDoy: "1260.246",
			DateWoy: "1260W36-4"
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
			DateAberWithDate: "Wed 02 Aza 1260",
			DateDoy: "1260.247",
			DateWoy: "1260W36-5"
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
			DateAberWithDate: "Tue 15 Aza 1260",
			DateDoy: "1260.260",
			DateWoy: "1260W38-4"
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
			DateAberWithDate: "Tue 29 Aza 1260",
			DateDoy: "1260.274",
			DateWoy: "1260W40-4"
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
			DateAberWithDate: "Wed 30 Aza 1260",
			DateDoy: "1260.275",
			DateWoy: "1260W40-5"
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
			DateAberWithDate: "Thu 01 Dey 1260",
			DateDoy: "1260.276",
			DateWoy: "1260W40-6"
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
			DateAberWithDate: "Fri 02 Dey 1260",
			DateDoy: "1260.277",
			DateWoy: "1260W40-7"
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
			DateAberWithDate: "Thu 15 Dey 1260",
			DateDoy: "1260.290",
			DateWoy: "1260W42-6"
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
			DateAberWithDate: "Thu 29 Dey 1260",
			DateDoy: "1260.304",
			DateWoy: "1260W44-6"
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
			DateAberWithDate: "Fri 30 Dey 1260",
			DateDoy: "1260.305",
			DateWoy: "1260W44-7"
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
			DateAberWithDate: "Sat 01 Bah 1260",
			DateDoy: "1260.306",
			DateWoy: "1260W45-1"
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
			DateAberWithDate: "Sun 02 Bah 1260",
			DateDoy: "1260.307",
			DateWoy: "1260W45-2"
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
			DateAberWithDate: "Sat 15 Bah 1260",
			DateDoy: "1260.320",
			DateWoy: "1260W47-1"
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
			DateAberWithDate: "Sat 29 Bah 1260",
			DateDoy: "1260.334",
			DateWoy: "1260W49-1"
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
			DateAberWithDate: "Sun 30 Bah 1260",
			DateDoy: "1260.335",
			DateWoy: "1260W49-2"
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
			DateAberWithDate: "Mon 01 Esf 1260",
			DateDoy: "1260.336",
			DateWoy: "1260W49-3"
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
			DateAberWithDate: "Tue 02 Esf 1260",
			DateDoy: "1260.337",
			DateWoy: "1260W49-4"
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
			DateAberWithDate: "Wed 03 Esf 1260",
			DateDoy: "1260.338",
			DateWoy: "1260W49-5"
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
			DateAberWithDate: "Thu 04 Esf 1260",
			DateDoy: "1260.339",
			DateWoy: "1260W49-6"
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
			DateAberWithDate: "Mon 15 Esf 1260",
			DateDoy: "1260.350",
			DateWoy: "1260W51-3"
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
			DateAberWithDate: "Thu 25 Esf 1260",
			DateDoy: "1260.360",
			DateWoy: "1260W52-6"
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
			DateAberWithDate: "Fri 26 Esf 1260",
			DateDoy: "1260.361",
			DateWoy: "1260W52-7"
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
			DateAberWithDate: "Sat 27 Esf 1260",
			DateDoy: "1260.362",
			DateWoy: "1261W01-1"
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
			DateAberWithDate: "Sun 28 Esf 1260",
			DateDoy: "1260.363",
			DateWoy: "1261W01-2"
		},
		stime: -2770341944000,
		gdate: [1882, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1882, 2, 19] },
		gtime: -2770341944000
	},

	{
		sdate: [1280, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 1],
			DateTime: "1280-01-01 00:00:00",
			DateAber: "01 Far 1280",
			DateAberWithDate: "Thu 01 Far 1280",
			DateDoy: "1280.000",
			DateWoy: "1279W52-6"
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
			DateAberWithDate: "Fri 02 Far 1280",
			DateDoy: "1280.001",
			DateWoy: "1279W52-7"
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
			DateAberWithDate: "Sat 03 Far 1280",
			DateDoy: "1280.002",
			DateWoy: "1280W01-1"
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
			DateAberWithDate: "Sun 04 Far 1280",
			DateDoy: "1280.003",
			DateWoy: "1280W01-2"
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
			DateAberWithDate: "Mon 05 Far 1280",
			DateDoy: "1280.004",
			DateWoy: "1280W01-3"
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
			DateAberWithDate: "Tue 06 Far 1280",
			DateDoy: "1280.005",
			DateWoy: "1280W01-4"
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
			DateAberWithDate: "Wed 07 Far 1280",
			DateDoy: "1280.006",
			DateWoy: "1280W01-5"
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
			DateAberWithDate: "Thu 15 Far 1280",
			DateDoy: "1280.014",
			DateWoy: "1280W02-6"
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
			DateAberWithDate: "Thu 29 Far 1280",
			DateDoy: "1280.028",
			DateWoy: "1280W04-6"
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
			DateAberWithDate: "Fri 30 Far 1280",
			DateDoy: "1280.029",
			DateWoy: "1280W04-7"
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
			DateAberWithDate: "Sat 31 Far 1280",
			DateDoy: "1280.030",
			DateWoy: "1280W05-1"
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
			DateAberWithDate: "Sun 01 Ord 1280",
			DateDoy: "1280.031",
			DateWoy: "1280W05-2"
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
			DateAberWithDate: "Mon 02 Ord 1280",
			DateDoy: "1280.032",
			DateWoy: "1280W05-3"
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
			DateAberWithDate: "Sun 15 Ord 1280",
			DateDoy: "1280.045",
			DateWoy: "1280W07-2"
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
			DateAberWithDate: "Mon 30 Ord 1280",
			DateDoy: "1280.060",
			DateWoy: "1280W09-3"
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
			DateAberWithDate: "Tue 31 Ord 1280",
			DateDoy: "1280.061",
			DateWoy: "1280W09-4"
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
			DateAberWithDate: "Wed 01 Kho 1280",
			DateDoy: "1280.062",
			DateWoy: "1280W09-5"
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
			DateAberWithDate: "Thu 02 Kho 1280",
			DateDoy: "1280.063",
			DateWoy: "1280W09-6"
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
			DateAberWithDate: "Wed 15 Kho 1280",
			DateDoy: "1280.076",
			DateWoy: "1280W11-5"
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
			DateAberWithDate: "Thu 30 Kho 1280",
			DateDoy: "1280.091",
			DateWoy: "1280W13-6"
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
			DateAberWithDate: "Fri 31 Kho 1280",
			DateDoy: "1280.092",
			DateWoy: "1280W13-7"
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
			DateAberWithDate: "Sat 01 Tir 1280",
			DateDoy: "1280.093",
			DateWoy: "1280W14-1"
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
			DateAberWithDate: "Sun 02 Tir 1280",
			DateDoy: "1280.094",
			DateWoy: "1280W14-2"
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
			DateAberWithDate: "Sat 15 Tir 1280",
			DateDoy: "1280.107",
			DateWoy: "1280W16-1"
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
			DateAberWithDate: "Sun 30 Tir 1280",
			DateDoy: "1280.122",
			DateWoy: "1280W18-2"
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
			DateAberWithDate: "Mon 31 Tir 1280",
			DateDoy: "1280.123",
			DateWoy: "1280W18-3"
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
			DateAberWithDate: "Tue 01 Amo 1280",
			DateDoy: "1280.124",
			DateWoy: "1280W18-4"
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
			DateAberWithDate: "Wed 02 Amo 1280",
			DateDoy: "1280.125",
			DateWoy: "1280W18-5"
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
			DateAberWithDate: "Tue 15 Amo 1280",
			DateDoy: "1280.138",
			DateWoy: "1280W20-4"
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
			DateAberWithDate: "Wed 30 Amo 1280",
			DateDoy: "1280.153",
			DateWoy: "1280W22-5"
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
			DateAberWithDate: "Thu 31 Amo 1280",
			DateDoy: "1280.154",
			DateWoy: "1280W22-6"
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
			DateAberWithDate: "Fri 01 Sha 1280",
			DateDoy: "1280.155",
			DateWoy: "1280W22-7"
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
			DateAberWithDate: "Sat 02 Sha 1280",
			DateDoy: "1280.156",
			DateWoy: "1280W23-1"
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
			DateAberWithDate: "Fri 15 Sha 1280",
			DateDoy: "1280.169",
			DateWoy: "1280W24-7"
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
			DateAberWithDate: "Fri 29 Sha 1280",
			DateDoy: "1280.183",
			DateWoy: "1280W26-7"
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
			DateAberWithDate: "Sat 30 Sha 1280",
			DateDoy: "1280.184",
			DateWoy: "1280W27-1"
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
			DateAberWithDate: "Mon 01 Meh 1280",
			DateDoy: "1280.186",
			DateWoy: "1280W27-3"
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
			DateAberWithDate: "Tue 02 Meh 1280",
			DateDoy: "1280.187",
			DateWoy: "1280W27-4"
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
			DateAberWithDate: "Mon 15 Meh 1280",
			DateDoy: "1280.200",
			DateWoy: "1280W29-3"
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
			DateAberWithDate: "Mon 29 Meh 1280",
			DateDoy: "1280.214",
			DateWoy: "1280W31-3"
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
			DateAberWithDate: "Tue 30 Meh 1280",
			DateDoy: "1280.215",
			DateWoy: "1280W31-4"
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
			DateAberWithDate: "Wed 01 Aba 1280",
			DateDoy: "1280.216",
			DateWoy: "1280W31-5"
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
			DateAberWithDate: "Thu 02 Aba 1280",
			DateDoy: "1280.217",
			DateWoy: "1280W31-6"
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
			DateAberWithDate: "Wed 15 Aba 1280",
			DateDoy: "1280.230",
			DateWoy: "1280W33-5"
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
			DateAberWithDate: "Wed 29 Aba 1280",
			DateDoy: "1280.244",
			DateWoy: "1280W35-5"
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
			DateAberWithDate: "Thu 30 Aba 1280",
			DateDoy: "1280.245",
			DateWoy: "1280W35-6"
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
			DateAberWithDate: "Fri 01 Aza 1280",
			DateDoy: "1280.246",
			DateWoy: "1280W35-7"
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
			DateAberWithDate: "Sat 02 Aza 1280",
			DateDoy: "1280.247",
			DateWoy: "1280W36-1"
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
			DateAberWithDate: "Fri 15 Aza 1280",
			DateDoy: "1280.260",
			DateWoy: "1280W37-7"
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
			DateAberWithDate: "Fri 29 Aza 1280",
			DateDoy: "1280.274",
			DateWoy: "1280W39-7"
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
			DateAberWithDate: "Sat 30 Aza 1280",
			DateDoy: "1280.275",
			DateWoy: "1280W40-1"
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
			DateAberWithDate: "Sun 01 Dey 1280",
			DateDoy: "1280.276",
			DateWoy: "1280W40-2"
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
			DateAberWithDate: "Mon 02 Dey 1280",
			DateDoy: "1280.277",
			DateWoy: "1280W40-3"
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
			DateAberWithDate: "Sun 15 Dey 1280",
			DateDoy: "1280.290",
			DateWoy: "1280W42-2"
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
			DateAberWithDate: "Sun 29 Dey 1280",
			DateDoy: "1280.304",
			DateWoy: "1280W44-2"
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
			DateAberWithDate: "Mon 30 Dey 1280",
			DateDoy: "1280.305",
			DateWoy: "1280W44-3"
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
			DateAberWithDate: "Tue 01 Bah 1280",
			DateDoy: "1280.306",
			DateWoy: "1280W44-4"
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
			DateAberWithDate: "Wed 02 Bah 1280",
			DateDoy: "1280.307",
			DateWoy: "1280W44-5"
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
			DateAberWithDate: "Tue 15 Bah 1280",
			DateDoy: "1280.320",
			DateWoy: "1280W46-4"
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
			DateAberWithDate: "Tue 29 Bah 1280",
			DateDoy: "1280.334",
			DateWoy: "1280W48-4"
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
			DateAberWithDate: "Wed 30 Bah 1280",
			DateDoy: "1280.335",
			DateWoy: "1280W48-5"
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
			DateAberWithDate: "Thu 01 Esf 1280",
			DateDoy: "1280.336",
			DateWoy: "1280W48-6"
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
			DateAberWithDate: "Fri 02 Esf 1280",
			DateDoy: "1280.337",
			DateWoy: "1280W48-7"
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
			DateAberWithDate: "Sat 03 Esf 1280",
			DateDoy: "1280.338",
			DateWoy: "1280W49-1"
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
			DateAberWithDate: "Sun 04 Esf 1280",
			DateDoy: "1280.339",
			DateWoy: "1280W49-2"
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
			DateAberWithDate: "Thu 15 Esf 1280",
			DateDoy: "1280.350",
			DateWoy: "1280W50-6"
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
			DateAberWithDate: "Sun 25 Esf 1280",
			DateDoy: "1280.360",
			DateWoy: "1280W52-2"
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
			DateAberWithDate: "Mon 26 Esf 1280",
			DateDoy: "1280.361",
			DateWoy: "1280W52-3"
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
			DateAberWithDate: "Tue 27 Esf 1280",
			DateDoy: "1280.362",
			DateWoy: "1280W52-4"
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
			DateAberWithDate: "Wed 28 Esf 1280",
			DateDoy: "1280.363",
			DateWoy: "1280W52-5"
		},
		stime: -2139276344000,
		gdate: [1902, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1902, 2, 19] },
		gtime: -2139276344000
	},
	{
		sdate: [1280, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 30],
			DateTime: "1280-12-30 00:00:00",
			DateAber: "30 Esf 1280",
			DateAberWithDate: "Fri 30 Esf 1280",
			DateDoy: "1280.365",
			DateWoy: "1280W52-7"
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
			DateAberWithDate: "Mon 01 Far 1300",
			DateDoy: "1300.000",
			DateWoy: "1300W01-3"
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
			DateAberWithDate: "Tue 02 Far 1300",
			DateDoy: "1300.001",
			DateWoy: "1300W01-4"
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
			DateAberWithDate: "Wed 03 Far 1300",
			DateDoy: "1300.002",
			DateWoy: "1300W01-5"
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
			DateAberWithDate: "Thu 04 Far 1300",
			DateDoy: "1300.003",
			DateWoy: "1300W01-6"
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
			DateAberWithDate: "Fri 05 Far 1300",
			DateDoy: "1300.004",
			DateWoy: "1300W01-7"
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
			DateAberWithDate: "Sat 06 Far 1300",
			DateDoy: "1300.005",
			DateWoy: "1300W02-1"
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
			DateAberWithDate: "Sun 07 Far 1300",
			DateDoy: "1300.006",
			DateWoy: "1300W02-2"
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
			DateAberWithDate: "Mon 15 Far 1300",
			DateDoy: "1300.014",
			DateWoy: "1300W03-3"
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
			DateAberWithDate: "Mon 29 Far 1300",
			DateDoy: "1300.028",
			DateWoy: "1300W05-3"
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
			DateAberWithDate: "Tue 30 Far 1300",
			DateDoy: "1300.029",
			DateWoy: "1300W05-4"
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
			DateAberWithDate: "Wed 31 Far 1300",
			DateDoy: "1300.030",
			DateWoy: "1300W05-5"
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
			DateAberWithDate: "Thu 01 Ord 1300",
			DateDoy: "1300.031",
			DateWoy: "1300W05-6"
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
			DateAberWithDate: "Fri 02 Ord 1300",
			DateDoy: "1300.032",
			DateWoy: "1300W05-7"
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
			DateAberWithDate: "Thu 15 Ord 1300",
			DateDoy: "1300.045",
			DateWoy: "1300W07-6"
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
			DateAberWithDate: "Fri 30 Ord 1300",
			DateDoy: "1300.060",
			DateWoy: "1300W09-7"
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
			DateAberWithDate: "Sat 31 Ord 1300",
			DateDoy: "1300.061",
			DateWoy: "1300W10-1"
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
			DateAberWithDate: "Sun 01 Kho 1300",
			DateDoy: "1300.062",
			DateWoy: "1300W10-2"
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
			DateAberWithDate: "Mon 02 Kho 1300",
			DateDoy: "1300.063",
			DateWoy: "1300W10-3"
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
			DateAberWithDate: "Sun 15 Kho 1300",
			DateDoy: "1300.076",
			DateWoy: "1300W12-2"
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
			DateAberWithDate: "Mon 30 Kho 1300",
			DateDoy: "1300.091",
			DateWoy: "1300W14-3"
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
			DateAberWithDate: "Tue 31 Kho 1300",
			DateDoy: "1300.092",
			DateWoy: "1300W14-4"
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
			DateAberWithDate: "Wed 01 Tir 1300",
			DateDoy: "1300.093",
			DateWoy: "1300W14-5"
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
			DateAberWithDate: "Thu 02 Tir 1300",
			DateDoy: "1300.094",
			DateWoy: "1300W14-6"
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
			DateAberWithDate: "Wed 15 Tir 1300",
			DateDoy: "1300.107",
			DateWoy: "1300W16-5"
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
			DateAberWithDate: "Thu 30 Tir 1300",
			DateDoy: "1300.122",
			DateWoy: "1300W18-6"
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
			DateAberWithDate: "Fri 31 Tir 1300",
			DateDoy: "1300.123",
			DateWoy: "1300W18-7"
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
			DateAberWithDate: "Sat 01 Amo 1300",
			DateDoy: "1300.124",
			DateWoy: "1300W19-1"
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
			DateAberWithDate: "Sun 02 Amo 1300",
			DateDoy: "1300.125",
			DateWoy: "1300W19-2"
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
			DateAberWithDate: "Sat 15 Amo 1300",
			DateDoy: "1300.138",
			DateWoy: "1300W21-1"
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
			DateAberWithDate: "Sun 30 Amo 1300",
			DateDoy: "1300.153",
			DateWoy: "1300W23-2"
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
			DateAberWithDate: "Mon 31 Amo 1300",
			DateDoy: "1300.154",
			DateWoy: "1300W23-3"
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
			DateAberWithDate: "Tue 01 Sha 1300",
			DateDoy: "1300.155",
			DateWoy: "1300W23-4"
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
			DateAberWithDate: "Wed 02 Sha 1300",
			DateDoy: "1300.156",
			DateWoy: "1300W23-5"
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
			DateAberWithDate: "Tue 15 Sha 1300",
			DateDoy: "1300.169",
			DateWoy: "1300W25-4"
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
			DateAberWithDate: "Tue 29 Sha 1300",
			DateDoy: "1300.183",
			DateWoy: "1300W27-4"
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
			DateAberWithDate: "Wed 30 Sha 1300",
			DateDoy: "1300.184",
			DateWoy: "1300W27-5"
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
			DateAberWithDate: "Fri 01 Meh 1300",
			DateDoy: "1300.186",
			DateWoy: "1300W27-7"
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
			DateAberWithDate: "Sat 02 Meh 1300",
			DateDoy: "1300.187",
			DateWoy: "1300W28-1"
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
			DateAberWithDate: "Fri 15 Meh 1300",
			DateDoy: "1300.200",
			DateWoy: "1300W29-7"
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
			DateAberWithDate: "Fri 29 Meh 1300",
			DateDoy: "1300.214",
			DateWoy: "1300W31-7"
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
			DateAberWithDate: "Sat 30 Meh 1300",
			DateDoy: "1300.215",
			DateWoy: "1300W32-1"
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
			DateAberWithDate: "Sun 01 Aba 1300",
			DateDoy: "1300.216",
			DateWoy: "1300W32-2"
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
			DateAberWithDate: "Mon 02 Aba 1300",
			DateDoy: "1300.217",
			DateWoy: "1300W32-3"
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
			DateAberWithDate: "Sun 15 Aba 1300",
			DateDoy: "1300.230",
			DateWoy: "1300W34-2"
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
			DateAberWithDate: "Sun 29 Aba 1300",
			DateDoy: "1300.244",
			DateWoy: "1300W36-2"
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
			DateAberWithDate: "Mon 30 Aba 1300",
			DateDoy: "1300.245",
			DateWoy: "1300W36-3"
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
			DateAberWithDate: "Tue 01 Aza 1300",
			DateDoy: "1300.246",
			DateWoy: "1300W36-4"
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
			DateAberWithDate: "Wed 02 Aza 1300",
			DateDoy: "1300.247",
			DateWoy: "1300W36-5"
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
			DateAberWithDate: "Tue 15 Aza 1300",
			DateDoy: "1300.260",
			DateWoy: "1300W38-4"
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
			DateAberWithDate: "Tue 29 Aza 1300",
			DateDoy: "1300.274",
			DateWoy: "1300W40-4"
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
			DateAberWithDate: "Wed 30 Aza 1300",
			DateDoy: "1300.275",
			DateWoy: "1300W40-5"
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
			DateAberWithDate: "Thu 01 Dey 1300",
			DateDoy: "1300.276",
			DateWoy: "1300W40-6"
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
			DateAberWithDate: "Fri 02 Dey 1300",
			DateDoy: "1300.277",
			DateWoy: "1300W40-7"
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
			DateAberWithDate: "Thu 15 Dey 1300",
			DateDoy: "1300.290",
			DateWoy: "1300W42-6"
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
			DateAberWithDate: "Thu 29 Dey 1300",
			DateDoy: "1300.304",
			DateWoy: "1300W44-6"
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
			DateAberWithDate: "Fri 30 Dey 1300",
			DateDoy: "1300.305",
			DateWoy: "1300W44-7"
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
			DateAberWithDate: "Sat 01 Bah 1300",
			DateDoy: "1300.306",
			DateWoy: "1300W45-1"
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
			DateAberWithDate: "Sun 02 Bah 1300",
			DateDoy: "1300.307",
			DateWoy: "1300W45-2"
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
			DateAberWithDate: "Sat 15 Bah 1300",
			DateDoy: "1300.320",
			DateWoy: "1300W47-1"
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
			DateAberWithDate: "Sat 29 Bah 1300",
			DateDoy: "1300.334",
			DateWoy: "1300W49-1"
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
			DateAberWithDate: "Sun 30 Bah 1300",
			DateDoy: "1300.335",
			DateWoy: "1300W49-2"
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
			DateAberWithDate: "Mon 01 Esf 1300",
			DateDoy: "1300.336",
			DateWoy: "1300W49-3"
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
			DateAberWithDate: "Tue 02 Esf 1300",
			DateDoy: "1300.337",
			DateWoy: "1300W49-4"
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
			DateAberWithDate: "Wed 03 Esf 1300",
			DateDoy: "1300.338",
			DateWoy: "1300W49-5"
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
			DateAberWithDate: "Thu 04 Esf 1300",
			DateDoy: "1300.339",
			DateWoy: "1300W49-6"
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
			DateAberWithDate: "Mon 15 Esf 1300",
			DateDoy: "1300.350",
			DateWoy: "1300W51-3"
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
			DateAberWithDate: "Thu 25 Esf 1300",
			DateDoy: "1300.360",
			DateWoy: "1300W52-6"
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
			DateAberWithDate: "Fri 26 Esf 1300",
			DateDoy: "1300.361",
			DateWoy: "1300W52-7"
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
			DateAberWithDate: "Sat 27 Esf 1300",
			DateDoy: "1300.362",
			DateWoy: "1300W53-1"
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
			DateAberWithDate: "Sun 28 Esf 1300",
			DateDoy: "1300.363",
			DateWoy: "1300W53-2"
		},
		stime: -1508124344000,
		gdate: [1922, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1922, 2, 19] },
		gtime: -1508124344000
	},
	{
		sdate: [1300, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 30],
			DateTime: "1300-12-30 00:00:00",
			DateAber: "30 Esf 1300",
			DateAberWithDate: "Tue 30 Esf 1300",
			DateDoy: "1300.365",
			DateWoy: "1300W53-4"
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
			DateAberWithDate: "Fri 01 Far 1320",
			DateDoy: "1320.000",
			DateWoy: "1319W52-7"
		},
		stime: -908335800000,
		gdate: [1941, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 21] },
		gtime: -908335800000
	},
	{
		sdate: [1320, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 2],
			DateTime: "1320-01-02 00:00:00",
			DateAber: "02 Far 1320",
			DateAberWithDate: "Sat 02 Far 1320",
			DateDoy: "1320.001",
			DateWoy: "1320W01-1"
		},
		stime: -908249400000,
		gdate: [1941, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 22] },
		gtime: -908249400000
	},
	{
		sdate: [1320, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 3],
			DateTime: "1320-01-03 00:00:00",
			DateAber: "03 Far 1320",
			DateAberWithDate: "Sun 03 Far 1320",
			DateDoy: "1320.002",
			DateWoy: "1320W01-2"
		},
		stime: -908163000000,
		gdate: [1941, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 23] },
		gtime: -908163000000
	},
	{
		sdate: [1320, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 4],
			DateTime: "1320-01-04 00:00:00",
			DateAber: "04 Far 1320",
			DateAberWithDate: "Mon 04 Far 1320",
			DateDoy: "1320.003",
			DateWoy: "1320W01-3"
		},
		stime: -908076600000,
		gdate: [1941, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 24] },
		gtime: -908076600000
	},
	{
		sdate: [1320, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 5],
			DateTime: "1320-01-05 00:00:00",
			DateAber: "05 Far 1320",
			DateAberWithDate: "Tue 05 Far 1320",
			DateDoy: "1320.004",
			DateWoy: "1320W01-4"
		},
		stime: -907990200000,
		gdate: [1941, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 25] },
		gtime: -907990200000
	},
	{
		sdate: [1320, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 6],
			DateTime: "1320-01-06 00:00:00",
			DateAber: "06 Far 1320",
			DateAberWithDate: "Wed 06 Far 1320",
			DateDoy: "1320.005",
			DateWoy: "1320W01-5"
		},
		stime: -907903800000,
		gdate: [1941, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 26] },
		gtime: -907903800000
	},
	{
		sdate: [1320, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 7],
			DateTime: "1320-01-07 00:00:00",
			DateAber: "07 Far 1320",
			DateAberWithDate: "Thu 07 Far 1320",
			DateDoy: "1320.006",
			DateWoy: "1320W01-6"
		},
		stime: -907817400000,
		gdate: [1941, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 2, 27] },
		gtime: -907817400000
	},
	{
		sdate: [1320, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 15],
			DateTime: "1320-01-15 00:00:00",
			DateAber: "15 Far 1320",
			DateAberWithDate: "Fri 15 Far 1320",
			DateDoy: "1320.014",
			DateWoy: "1320W02-7"
		},
		stime: -907126200000,
		gdate: [1941, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 4] },
		gtime: -907126200000
	},
	{
		sdate: [1320, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 29],
			DateTime: "1320-01-29 00:00:00",
			DateAber: "29 Far 1320",
			DateAberWithDate: "Fri 29 Far 1320",
			DateDoy: "1320.028",
			DateWoy: "1320W04-7"
		},
		stime: -905916600000,
		gdate: [1941, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 18] },
		gtime: -905916600000
	},
	{
		sdate: [1320, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 30],
			DateTime: "1320-01-30 00:00:00",
			DateAber: "30 Far 1320",
			DateAberWithDate: "Sat 30 Far 1320",
			DateDoy: "1320.029",
			DateWoy: "1320W05-1"
		},
		stime: -905830200000,
		gdate: [1941, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 19] },
		gtime: -905830200000
	},
	{
		sdate: [1320, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 31],
			DateTime: "1320-01-31 00:00:00",
			DateAber: "31 Far 1320",
			DateAberWithDate: "Sun 31 Far 1320",
			DateDoy: "1320.030",
			DateWoy: "1320W05-2"
		},
		stime: -905743800000,
		gdate: [1941, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 20] },
		gtime: -905743800000
	},
	{
		sdate: [1320, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 1],
			DateTime: "1320-02-01 00:00:00",
			DateAber: "01 Ord 1320",
			DateAberWithDate: "Mon 01 Ord 1320",
			DateDoy: "1320.031",
			DateWoy: "1320W05-3"
		},
		stime: -905657400000,
		gdate: [1941, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 21] },
		gtime: -905657400000
	},
	{
		sdate: [1320, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 2],
			DateTime: "1320-02-02 00:00:00",
			DateAber: "02 Ord 1320",
			DateAberWithDate: "Tue 02 Ord 1320",
			DateDoy: "1320.032",
			DateWoy: "1320W05-4"
		},
		stime: -905571000000,
		gdate: [1941, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 3, 22] },
		gtime: -905571000000
	},
	{
		sdate: [1320, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 15],
			DateTime: "1320-02-15 00:00:00",
			DateAber: "15 Ord 1320",
			DateAberWithDate: "Mon 15 Ord 1320",
			DateDoy: "1320.045",
			DateWoy: "1320W07-3"
		},
		stime: -904447800000,
		gdate: [1941, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 5] },
		gtime: -904447800000
	},
	{
		sdate: [1320, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 30],
			DateTime: "1320-02-30 00:00:00",
			DateAber: "30 Ord 1320",
			DateAberWithDate: "Tue 30 Ord 1320",
			DateDoy: "1320.060",
			DateWoy: "1320W09-4"
		},
		stime: -903151800000,
		gdate: [1941, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 20] },
		gtime: -903151800000
	},
	{
		sdate: [1320, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 31],
			DateTime: "1320-02-31 00:00:00",
			DateAber: "31 Ord 1320",
			DateAberWithDate: "Wed 31 Ord 1320",
			DateDoy: "1320.061",
			DateWoy: "1320W09-5"
		},
		stime: -903065400000,
		gdate: [1941, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 21] },
		gtime: -903065400000
	},
	{
		sdate: [1320, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 1],
			DateTime: "1320-03-01 00:00:00",
			DateAber: "01 Kho 1320",
			DateAberWithDate: "Thu 01 Kho 1320",
			DateDoy: "1320.062",
			DateWoy: "1320W09-6"
		},
		stime: -902979000000,
		gdate: [1941, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 22] },
		gtime: -902979000000
	},
	{
		sdate: [1320, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 2],
			DateTime: "1320-03-02 00:00:00",
			DateAber: "02 Kho 1320",
			DateAberWithDate: "Fri 02 Kho 1320",
			DateDoy: "1320.063",
			DateWoy: "1320W09-7"
		},
		stime: -902892600000,
		gdate: [1941, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 4, 23] },
		gtime: -902892600000
	},
	{
		sdate: [1320, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 15],
			DateTime: "1320-03-15 00:00:00",
			DateAber: "15 Kho 1320",
			DateAberWithDate: "Thu 15 Kho 1320",
			DateDoy: "1320.076",
			DateWoy: "1320W11-6"
		},
		stime: -901769400000,
		gdate: [1941, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 5] },
		gtime: -901769400000
	},
	{
		sdate: [1320, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 30],
			DateTime: "1320-03-30 00:00:00",
			DateAber: "30 Kho 1320",
			DateAberWithDate: "Fri 30 Kho 1320",
			DateDoy: "1320.091",
			DateWoy: "1320W13-7"
		},
		stime: -900473400000,
		gdate: [1941, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 20] },
		gtime: -900473400000
	},
	{
		sdate: [1320, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 31],
			DateTime: "1320-03-31 00:00:00",
			DateAber: "31 Kho 1320",
			DateAberWithDate: "Sat 31 Kho 1320",
			DateDoy: "1320.092",
			DateWoy: "1320W14-1"
		},
		stime: -900387000000,
		gdate: [1941, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 21] },
		gtime: -900387000000
	},
	{
		sdate: [1320, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 1],
			DateTime: "1320-04-01 00:00:00",
			DateAber: "01 Tir 1320",
			DateAberWithDate: "Sun 01 Tir 1320",
			DateDoy: "1320.093",
			DateWoy: "1320W14-2"
		},
		stime: -900300600000,
		gdate: [1941, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 22] },
		gtime: -900300600000
	},
	{
		sdate: [1320, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 2],
			DateTime: "1320-04-02 00:00:00",
			DateAber: "02 Tir 1320",
			DateAberWithDate: "Mon 02 Tir 1320",
			DateDoy: "1320.094",
			DateWoy: "1320W14-3"
		},
		stime: -900214200000,
		gdate: [1941, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 5, 23] },
		gtime: -900214200000
	},
	{
		sdate: [1320, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 15],
			DateTime: "1320-04-15 00:00:00",
			DateAber: "15 Tir 1320",
			DateAberWithDate: "Sun 15 Tir 1320",
			DateDoy: "1320.107",
			DateWoy: "1320W16-2"
		},
		stime: -899091000000,
		gdate: [1941, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 6] },
		gtime: -899091000000
	},
	{
		sdate: [1320, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 30],
			DateTime: "1320-04-30 00:00:00",
			DateAber: "30 Tir 1320",
			DateAberWithDate: "Mon 30 Tir 1320",
			DateDoy: "1320.122",
			DateWoy: "1320W18-3"
		},
		stime: -897795000000,
		gdate: [1941, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 21] },
		gtime: -897795000000
	},
	{
		sdate: [1320, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 31],
			DateTime: "1320-04-31 00:00:00",
			DateAber: "31 Tir 1320",
			DateAberWithDate: "Tue 31 Tir 1320",
			DateDoy: "1320.123",
			DateWoy: "1320W18-4"
		},
		stime: -897708600000,
		gdate: [1941, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 22] },
		gtime: -897708600000
	},
	{
		sdate: [1320, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 1],
			DateTime: "1320-05-01 00:00:00",
			DateAber: "01 Amo 1320",
			DateAberWithDate: "Wed 01 Amo 1320",
			DateDoy: "1320.124",
			DateWoy: "1320W18-5"
		},
		stime: -897622200000,
		gdate: [1941, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 23] },
		gtime: -897622200000
	},
	{
		sdate: [1320, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 2],
			DateTime: "1320-05-02 00:00:00",
			DateAber: "02 Amo 1320",
			DateAberWithDate: "Thu 02 Amo 1320",
			DateDoy: "1320.125",
			DateWoy: "1320W18-6"
		},
		stime: -897535800000,
		gdate: [1941, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 6, 24] },
		gtime: -897535800000
	},
	{
		sdate: [1320, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 15],
			DateTime: "1320-05-15 00:00:00",
			DateAber: "15 Amo 1320",
			DateAberWithDate: "Wed 15 Amo 1320",
			DateDoy: "1320.138",
			DateWoy: "1320W20-5"
		},
		stime: -896412600000,
		gdate: [1941, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 6] },
		gtime: -896412600000
	},
	{
		sdate: [1320, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 30],
			DateTime: "1320-05-30 00:00:00",
			DateAber: "30 Amo 1320",
			DateAberWithDate: "Thu 30 Amo 1320",
			DateDoy: "1320.153",
			DateWoy: "1320W22-6"
		},
		stime: -895116600000,
		gdate: [1941, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 21] },
		gtime: -895116600000
	},
	{
		sdate: [1320, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 31],
			DateTime: "1320-05-31 00:00:00",
			DateAber: "31 Amo 1320",
			DateAberWithDate: "Fri 31 Amo 1320",
			DateDoy: "1320.154",
			DateWoy: "1320W22-7"
		},
		stime: -895030200000,
		gdate: [1941, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 22] },
		gtime: -895030200000
	},
	{
		sdate: [1320, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 1],
			DateTime: "1320-06-01 00:00:00",
			DateAber: "01 Sha 1320",
			DateAberWithDate: "Sat 01 Sha 1320",
			DateDoy: "1320.155",
			DateWoy: "1320W23-1"
		},
		stime: -894943800000,
		gdate: [1941, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 23] },
		gtime: -894943800000
	},
	{
		sdate: [1320, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 2],
			DateTime: "1320-06-02 00:00:00",
			DateAber: "02 Sha 1320",
			DateAberWithDate: "Sun 02 Sha 1320",
			DateDoy: "1320.156",
			DateWoy: "1320W23-2"
		},
		stime: -894857400000,
		gdate: [1941, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 7, 24] },
		gtime: -894857400000
	},
	{
		sdate: [1320, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 15],
			DateTime: "1320-06-15 00:00:00",
			DateAber: "15 Sha 1320",
			DateAberWithDate: "Sat 15 Sha 1320",
			DateDoy: "1320.169",
			DateWoy: "1320W25-1"
		},
		stime: -893734200000,
		gdate: [1941, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 6] },
		gtime: -893734200000
	},
	{
		sdate: [1320, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 29],
			DateTime: "1320-06-29 00:00:00",
			DateAber: "29 Sha 1320",
			DateAberWithDate: "Sat 29 Sha 1320",
			DateDoy: "1320.183",
			DateWoy: "1320W27-1"
		},
		stime: -892524600000,
		gdate: [1941, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 20] },
		gtime: -892524600000
	},
	{
		sdate: [1320, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 30],
			DateTime: "1320-06-30 00:00:00",
			DateAber: "30 Sha 1320",
			DateAberWithDate: "Sun 30 Sha 1320",
			DateDoy: "1320.184",
			DateWoy: "1320W27-2"
		},
		stime: -892438200000,
		gdate: [1941, 9, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 21] },
		gtime: -892438200000
	},
	{
		sdate: [1320, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 1],
			DateTime: "1320-07-01 00:00:00",
			DateAber: "01 Meh 1320",
			DateAberWithDate: "Tue 01 Meh 1320",
			DateDoy: "1320.186",
			DateWoy: "1320W27-4"
		},
		stime: -892265400000,
		gdate: [1941, 9, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 23] },
		gtime: -892265400000
	},
	{
		sdate: [1320, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 2],
			DateTime: "1320-07-02 00:00:00",
			DateAber: "02 Meh 1320",
			DateAberWithDate: "Wed 02 Meh 1320",
			DateDoy: "1320.187",
			DateWoy: "1320W27-5"
		},
		stime: -892179000000,
		gdate: [1941, 9, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 8, 24] },
		gtime: -892179000000
	},
	{
		sdate: [1320, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 15],
			DateTime: "1320-07-15 00:00:00",
			DateAber: "15 Meh 1320",
			DateAberWithDate: "Tue 15 Meh 1320",
			DateDoy: "1320.200",
			DateWoy: "1320W29-4"
		},
		stime: -891055800000,
		gdate: [1941, 10, 7, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 7] },
		gtime: -891055800000
	},
	{
		sdate: [1320, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 29],
			DateTime: "1320-07-29 00:00:00",
			DateAber: "29 Meh 1320",
			DateAberWithDate: "Tue 29 Meh 1320",
			DateDoy: "1320.214",
			DateWoy: "1320W31-4"
		},
		stime: -889846200000,
		gdate: [1941, 10, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 21] },
		gtime: -889846200000
	},
	{
		sdate: [1320, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 30],
			DateTime: "1320-07-30 00:00:00",
			DateAber: "30 Meh 1320",
			DateAberWithDate: "Wed 30 Meh 1320",
			DateDoy: "1320.215",
			DateWoy: "1320W31-5"
		},
		stime: -889759800000,
		gdate: [1941, 10, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 22] },
		gtime: -889759800000
	},
	{
		sdate: [1320, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 1],
			DateTime: "1320-08-01 00:00:00",
			DateAber: "01 Aba 1320",
			DateAberWithDate: "Thu 01 Aba 1320",
			DateDoy: "1320.216",
			DateWoy: "1320W31-6"
		},
		stime: -889673400000,
		gdate: [1941, 10, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 23] },
		gtime: -889673400000
	},
	{
		sdate: [1320, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 2],
			DateTime: "1320-08-02 00:00:00",
			DateAber: "02 Aba 1320",
			DateAberWithDate: "Fri 02 Aba 1320",
			DateDoy: "1320.217",
			DateWoy: "1320W31-7"
		},
		stime: -889587000000,
		gdate: [1941, 10, 24, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 9, 24] },
		gtime: -889587000000
	},
	{
		sdate: [1320, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 15],
			DateTime: "1320-08-15 00:00:00",
			DateAber: "15 Aba 1320",
			DateAberWithDate: "Thu 15 Aba 1320",
			DateDoy: "1320.230",
			DateWoy: "1320W33-6"
		},
		stime: -888463800000,
		gdate: [1941, 11, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 6] },
		gtime: -888463800000
	},
	{
		sdate: [1320, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 29],
			DateTime: "1320-08-29 00:00:00",
			DateAber: "29 Aba 1320",
			DateAberWithDate: "Thu 29 Aba 1320",
			DateDoy: "1320.244",
			DateWoy: "1320W35-6"
		},
		stime: -887254200000,
		gdate: [1941, 11, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 20] },
		gtime: -887254200000
	},
	{
		sdate: [1320, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 30],
			DateTime: "1320-08-30 00:00:00",
			DateAber: "30 Aba 1320",
			DateAberWithDate: "Fri 30 Aba 1320",
			DateDoy: "1320.245",
			DateWoy: "1320W35-7"
		},
		stime: -887167800000,
		gdate: [1941, 11, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 21] },
		gtime: -887167800000
	},
	{
		sdate: [1320, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 1],
			DateTime: "1320-09-01 00:00:00",
			DateAber: "01 Aza 1320",
			DateAberWithDate: "Sat 01 Aza 1320",
			DateDoy: "1320.246",
			DateWoy: "1320W36-1"
		},
		stime: -887081400000,
		gdate: [1941, 11, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 22] },
		gtime: -887081400000
	},
	{
		sdate: [1320, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 2],
			DateTime: "1320-09-02 00:00:00",
			DateAber: "02 Aza 1320",
			DateAberWithDate: "Sun 02 Aza 1320",
			DateDoy: "1320.247",
			DateWoy: "1320W36-2"
		},
		stime: -886995000000,
		gdate: [1941, 11, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 10, 23] },
		gtime: -886995000000
	},
	{
		sdate: [1320, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 15],
			DateTime: "1320-09-15 00:00:00",
			DateAber: "15 Aza 1320",
			DateAberWithDate: "Sat 15 Aza 1320",
			DateDoy: "1320.260",
			DateWoy: "1320W38-1"
		},
		stime: -885871800000,
		gdate: [1941, 12, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 6] },
		gtime: -885871800000
	},
	{
		sdate: [1320, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 29],
			DateTime: "1320-09-29 00:00:00",
			DateAber: "29 Aza 1320",
			DateAberWithDate: "Sat 29 Aza 1320",
			DateDoy: "1320.274",
			DateWoy: "1320W40-1"
		},
		stime: -884662200000,
		gdate: [1941, 12, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 20] },
		gtime: -884662200000
	},
	{
		sdate: [1320, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 30],
			DateTime: "1320-09-30 00:00:00",
			DateAber: "30 Aza 1320",
			DateAberWithDate: "Sun 30 Aza 1320",
			DateDoy: "1320.275",
			DateWoy: "1320W40-2"
		},
		stime: -884575800000,
		gdate: [1941, 12, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 21] },
		gtime: -884575800000
	},
	{
		sdate: [1320, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 1],
			DateTime: "1320-10-01 00:00:00",
			DateAber: "01 Dey 1320",
			DateAberWithDate: "Mon 01 Dey 1320",
			DateDoy: "1320.276",
			DateWoy: "1320W40-3"
		},
		stime: -884489400000,
		gdate: [1941, 12, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 22] },
		gtime: -884489400000
	},
	{
		sdate: [1320, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 2],
			DateTime: "1320-10-02 00:00:00",
			DateAber: "02 Dey 1320",
			DateAberWithDate: "Tue 02 Dey 1320",
			DateDoy: "1320.277",
			DateWoy: "1320W40-4"
		},
		stime: -884403000000,
		gdate: [1941, 12, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1941, 11, 23] },
		gtime: -884403000000
	},
	{
		sdate: [1320, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 15],
			DateTime: "1320-10-15 00:00:00",
			DateAber: "15 Dey 1320",
			DateAberWithDate: "Mon 15 Dey 1320",
			DateDoy: "1320.290",
			DateWoy: "1320W42-3"
		},
		stime: -883279800000,
		gdate: [1942, 1, 5, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 5] },
		gtime: -883279800000
	},
	{
		sdate: [1320, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 29],
			DateTime: "1320-10-29 00:00:00",
			DateAber: "29 Dey 1320",
			DateAberWithDate: "Mon 29 Dey 1320",
			DateDoy: "1320.304",
			DateWoy: "1320W44-3"
		},
		stime: -882070200000,
		gdate: [1942, 1, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 19] },
		gtime: -882070200000
	},
	{
		sdate: [1320, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 30],
			DateTime: "1320-10-30 00:00:00",
			DateAber: "30 Dey 1320",
			DateAberWithDate: "Tue 30 Dey 1320",
			DateDoy: "1320.305",
			DateWoy: "1320W44-4"
		},
		stime: -881983800000,
		gdate: [1942, 1, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 20] },
		gtime: -881983800000
	},
	{
		sdate: [1320, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 1],
			DateTime: "1320-11-01 00:00:00",
			DateAber: "01 Bah 1320",
			DateAberWithDate: "Wed 01 Bah 1320",
			DateDoy: "1320.306",
			DateWoy: "1320W44-5"
		},
		stime: -881897400000,
		gdate: [1942, 1, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 21] },
		gtime: -881897400000
	},
	{
		sdate: [1320, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 2],
			DateTime: "1320-11-02 00:00:00",
			DateAber: "02 Bah 1320",
			DateAberWithDate: "Thu 02 Bah 1320",
			DateDoy: "1320.307",
			DateWoy: "1320W44-6"
		},
		stime: -881811000000,
		gdate: [1942, 1, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 0, 22] },
		gtime: -881811000000
	},
	{
		sdate: [1320, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 15],
			DateTime: "1320-11-15 00:00:00",
			DateAber: "15 Bah 1320",
			DateAberWithDate: "Wed 15 Bah 1320",
			DateDoy: "1320.320",
			DateWoy: "1320W46-5"
		},
		stime: -880687800000,
		gdate: [1942, 2, 4, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 4] },
		gtime: -880687800000
	},
	{
		sdate: [1320, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 29],
			DateTime: "1320-11-29 00:00:00",
			DateAber: "29 Bah 1320",
			DateAberWithDate: "Wed 29 Bah 1320",
			DateDoy: "1320.334",
			DateWoy: "1320W48-5"
		},
		stime: -879478200000,
		gdate: [1942, 2, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 18] },
		gtime: -879478200000
	},
	{
		sdate: [1320, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 30],
			DateTime: "1320-11-30 00:00:00",
			DateAber: "30 Bah 1320",
			DateAberWithDate: "Thu 30 Bah 1320",
			DateDoy: "1320.335",
			DateWoy: "1320W48-6"
		},
		stime: -879391800000,
		gdate: [1942, 2, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 19] },
		gtime: -879391800000
	},
	{
		sdate: [1320, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 1],
			DateTime: "1320-12-01 00:00:00",
			DateAber: "01 Esf 1320",
			DateAberWithDate: "Fri 01 Esf 1320",
			DateDoy: "1320.336",
			DateWoy: "1320W48-7"
		},
		stime: -879305400000,
		gdate: [1942, 2, 20, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 20] },
		gtime: -879305400000
	},
	{
		sdate: [1320, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 2],
			DateTime: "1320-12-02 00:00:00",
			DateAber: "02 Esf 1320",
			DateAberWithDate: "Sat 02 Esf 1320",
			DateDoy: "1320.337",
			DateWoy: "1320W49-1"
		},
		stime: -879219000000,
		gdate: [1942, 2, 21, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 21] },
		gtime: -879219000000
	},
	{
		sdate: [1320, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 3],
			DateTime: "1320-12-03 00:00:00",
			DateAber: "03 Esf 1320",
			DateAberWithDate: "Sun 03 Esf 1320",
			DateDoy: "1320.338",
			DateWoy: "1320W49-2"
		},
		stime: -879132600000,
		gdate: [1942, 2, 22, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 22] },
		gtime: -879132600000
	},
	{
		sdate: [1320, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 4],
			DateTime: "1320-12-04 00:00:00",
			DateAber: "04 Esf 1320",
			DateAberWithDate: "Mon 04 Esf 1320",
			DateDoy: "1320.339",
			DateWoy: "1320W49-3"
		},
		stime: -879046200000,
		gdate: [1942, 2, 23, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 1, 23] },
		gtime: -879046200000
	},
	{
		sdate: [1320, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 15],
			DateTime: "1320-12-15 00:00:00",
			DateAber: "15 Esf 1320",
			DateAberWithDate: "Fri 15 Esf 1320",
			DateDoy: "1320.350",
			DateWoy: "1320W50-7"
		},
		stime: -878095800000,
		gdate: [1942, 3, 6, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 6] },
		gtime: -878095800000
	},
	{
		sdate: [1320, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 25],
			DateTime: "1320-12-25 00:00:00",
			DateAber: "25 Esf 1320",
			DateAberWithDate: "Mon 25 Esf 1320",
			DateDoy: "1320.360",
			DateWoy: "1320W52-3"
		},
		stime: -877231800000,
		gdate: [1942, 3, 16, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 16] },
		gtime: -877231800000
	},
	{
		sdate: [1320, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 26],
			DateTime: "1320-12-26 00:00:00",
			DateAber: "26 Esf 1320",
			DateAberWithDate: "Tue 26 Esf 1320",
			DateDoy: "1320.361",
			DateWoy: "1320W52-4"
		},
		stime: -877145400000,
		gdate: [1942, 3, 17, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 17] },
		gtime: -877145400000
	},
	{
		sdate: [1320, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 27],
			DateTime: "1320-12-27 00:00:00",
			DateAber: "27 Esf 1320",
			DateAberWithDate: "Wed 27 Esf 1320",
			DateDoy: "1320.362",
			DateWoy: "1320W52-5"
		},
		stime: -877059000000,
		gdate: [1942, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 18] },
		gtime: -877059000000
	},
	{
		sdate: [1320, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 28],
			DateTime: "1320-12-28 00:00:00",
			DateAber: "28 Esf 1320",
			DateAberWithDate: "Thu 28 Esf 1320",
			DateDoy: "1320.363",
			DateWoy: "1320W52-6"
		},
		stime: -876972600000,
		gdate: [1942, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1942, 2, 19] },
		gtime: -876972600000
	},

	{
		sdate: [1340, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 1],
			DateTime: "1340-01-01 00:00:00",
			DateAber: "01 Far 1340",
			DateAberWithDate: "Tue 01 Far 1340",
			DateDoy: "1340.000",
			DateWoy: "1340W01-4"
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
			DateAberWithDate: "Wed 02 Far 1340",
			DateDoy: "1340.001",
			DateWoy: "1340W01-5"
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
			DateAberWithDate: "Thu 03 Far 1340",
			DateDoy: "1340.002",
			DateWoy: "1340W01-6"
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
			DateAberWithDate: "Fri 04 Far 1340",
			DateDoy: "1340.003",
			DateWoy: "1340W01-7"
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
			DateAberWithDate: "Sat 05 Far 1340",
			DateDoy: "1340.004",
			DateWoy: "1340W02-1"
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
			DateAberWithDate: "Sun 06 Far 1340",
			DateDoy: "1340.005",
			DateWoy: "1340W02-2"
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
			DateAberWithDate: "Mon 07 Far 1340",
			DateDoy: "1340.006",
			DateWoy: "1340W02-3"
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
			DateAberWithDate: "Tue 15 Far 1340",
			DateDoy: "1340.014",
			DateWoy: "1340W03-4"
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
			DateAberWithDate: "Tue 29 Far 1340",
			DateDoy: "1340.028",
			DateWoy: "1340W05-4"
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
			DateAberWithDate: "Wed 30 Far 1340",
			DateDoy: "1340.029",
			DateWoy: "1340W05-5"
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
			DateAberWithDate: "Thu 31 Far 1340",
			DateDoy: "1340.030",
			DateWoy: "1340W05-6"
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
			DateAberWithDate: "Fri 01 Ord 1340",
			DateDoy: "1340.031",
			DateWoy: "1340W05-7"
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
			DateAberWithDate: "Sat 02 Ord 1340",
			DateDoy: "1340.032",
			DateWoy: "1340W06-1"
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
			DateAberWithDate: "Fri 15 Ord 1340",
			DateDoy: "1340.045",
			DateWoy: "1340W07-7"
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
			DateAberWithDate: "Sat 30 Ord 1340",
			DateDoy: "1340.060",
			DateWoy: "1340W10-1"
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
			DateAberWithDate: "Sun 31 Ord 1340",
			DateDoy: "1340.061",
			DateWoy: "1340W10-2"
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
			DateAberWithDate: "Mon 01 Kho 1340",
			DateDoy: "1340.062",
			DateWoy: "1340W10-3"
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
			DateAberWithDate: "Tue 02 Kho 1340",
			DateDoy: "1340.063",
			DateWoy: "1340W10-4"
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
			DateAberWithDate: "Mon 15 Kho 1340",
			DateDoy: "1340.076",
			DateWoy: "1340W12-3"
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
			DateAberWithDate: "Tue 30 Kho 1340",
			DateDoy: "1340.091",
			DateWoy: "1340W14-4"
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
			DateAberWithDate: "Wed 31 Kho 1340",
			DateDoy: "1340.092",
			DateWoy: "1340W14-5"
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
			DateAberWithDate: "Thu 01 Tir 1340",
			DateDoy: "1340.093",
			DateWoy: "1340W14-6"
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
			DateAberWithDate: "Fri 02 Tir 1340",
			DateDoy: "1340.094",
			DateWoy: "1340W14-7"
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
			DateAberWithDate: "Thu 15 Tir 1340",
			DateDoy: "1340.107",
			DateWoy: "1340W16-6"
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
			DateAberWithDate: "Fri 30 Tir 1340",
			DateDoy: "1340.122",
			DateWoy: "1340W18-7"
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
			DateAberWithDate: "Sat 31 Tir 1340",
			DateDoy: "1340.123",
			DateWoy: "1340W19-1"
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
			DateAberWithDate: "Sun 01 Amo 1340",
			DateDoy: "1340.124",
			DateWoy: "1340W19-2"
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
			DateAberWithDate: "Mon 02 Amo 1340",
			DateDoy: "1340.125",
			DateWoy: "1340W19-3"
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
			DateAberWithDate: "Sun 15 Amo 1340",
			DateDoy: "1340.138",
			DateWoy: "1340W21-2"
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
			DateAberWithDate: "Mon 30 Amo 1340",
			DateDoy: "1340.153",
			DateWoy: "1340W23-3"
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
			DateAberWithDate: "Tue 31 Amo 1340",
			DateDoy: "1340.154",
			DateWoy: "1340W23-4"
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
			DateAberWithDate: "Wed 01 Sha 1340",
			DateDoy: "1340.155",
			DateWoy: "1340W23-5"
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
			DateAberWithDate: "Thu 02 Sha 1340",
			DateDoy: "1340.156",
			DateWoy: "1340W23-6"
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
			DateAberWithDate: "Wed 15 Sha 1340",
			DateDoy: "1340.169",
			DateWoy: "1340W25-5"
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
			DateAberWithDate: "Wed 29 Sha 1340",
			DateDoy: "1340.183",
			DateWoy: "1340W27-5"
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
			DateAberWithDate: "Thu 30 Sha 1340",
			DateDoy: "1340.184",
			DateWoy: "1340W27-6"
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
			DateAberWithDate: "Sat 01 Meh 1340",
			DateDoy: "1340.186",
			DateWoy: "1340W28-1"
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
			DateAberWithDate: "Sun 02 Meh 1340",
			DateDoy: "1340.187",
			DateWoy: "1340W28-2"
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
			DateAberWithDate: "Sat 15 Meh 1340",
			DateDoy: "1340.200",
			DateWoy: "1340W30-1"
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
			DateAberWithDate: "Sat 29 Meh 1340",
			DateDoy: "1340.214",
			DateWoy: "1340W32-1"
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
			DateAberWithDate: "Sun 30 Meh 1340",
			DateDoy: "1340.215",
			DateWoy: "1340W32-2"
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
			DateAberWithDate: "Mon 01 Aba 1340",
			DateDoy: "1340.216",
			DateWoy: "1340W32-3"
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
			DateAberWithDate: "Tue 02 Aba 1340",
			DateDoy: "1340.217",
			DateWoy: "1340W32-4"
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
			DateAberWithDate: "Mon 15 Aba 1340",
			DateDoy: "1340.230",
			DateWoy: "1340W34-3"
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
			DateAberWithDate: "Mon 29 Aba 1340",
			DateDoy: "1340.244",
			DateWoy: "1340W36-3"
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
			DateAberWithDate: "Tue 30 Aba 1340",
			DateDoy: "1340.245",
			DateWoy: "1340W36-4"
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
			DateAberWithDate: "Wed 01 Aza 1340",
			DateDoy: "1340.246",
			DateWoy: "1340W36-5"
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
			DateAberWithDate: "Thu 02 Aza 1340",
			DateDoy: "1340.247",
			DateWoy: "1340W36-6"
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
			DateAberWithDate: "Wed 15 Aza 1340",
			DateDoy: "1340.260",
			DateWoy: "1340W38-5"
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
			DateAberWithDate: "Wed 29 Aza 1340",
			DateDoy: "1340.274",
			DateWoy: "1340W40-5"
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
			DateAberWithDate: "Thu 30 Aza 1340",
			DateDoy: "1340.275",
			DateWoy: "1340W40-6"
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
			DateAberWithDate: "Fri 01 Dey 1340",
			DateDoy: "1340.276",
			DateWoy: "1340W40-7"
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
			DateAberWithDate: "Sat 02 Dey 1340",
			DateDoy: "1340.277",
			DateWoy: "1340W41-1"
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
			DateAberWithDate: "Fri 15 Dey 1340",
			DateDoy: "1340.290",
			DateWoy: "1340W42-7"
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
			DateAberWithDate: "Fri 29 Dey 1340",
			DateDoy: "1340.304",
			DateWoy: "1340W44-7"
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
			DateAberWithDate: "Sat 30 Dey 1340",
			DateDoy: "1340.305",
			DateWoy: "1340W45-1"
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
			DateAberWithDate: "Sun 01 Bah 1340",
			DateDoy: "1340.306",
			DateWoy: "1340W45-2"
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
			DateAberWithDate: "Mon 02 Bah 1340",
			DateDoy: "1340.307",
			DateWoy: "1340W45-3"
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
			DateAberWithDate: "Sun 15 Bah 1340",
			DateDoy: "1340.320",
			DateWoy: "1340W47-2"
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
			DateAberWithDate: "Sun 29 Bah 1340",
			DateDoy: "1340.334",
			DateWoy: "1340W49-2"
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
			DateAberWithDate: "Mon 30 Bah 1340",
			DateDoy: "1340.335",
			DateWoy: "1340W49-3"
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
			DateAberWithDate: "Tue 01 Esf 1340",
			DateDoy: "1340.336",
			DateWoy: "1340W49-4"
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
			DateAberWithDate: "Wed 02 Esf 1340",
			DateDoy: "1340.337",
			DateWoy: "1340W49-5"
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
			DateAberWithDate: "Thu 03 Esf 1340",
			DateDoy: "1340.338",
			DateWoy: "1340W49-6"
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
			DateAberWithDate: "Fri 04 Esf 1340",
			DateDoy: "1340.339",
			DateWoy: "1340W49-7"
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
			DateAberWithDate: "Tue 15 Esf 1340",
			DateDoy: "1340.350",
			DateWoy: "1340W51-4"
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
			DateAberWithDate: "Fri 25 Esf 1340",
			DateDoy: "1340.360",
			DateWoy: "1340W52-7"
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
			DateAberWithDate: "Sat 26 Esf 1340",
			DateDoy: "1340.361",
			DateWoy: "1340W53-1"
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
			DateAberWithDate: "Sun 27 Esf 1340",
			DateDoy: "1340.362",
			DateWoy: "1340W53-2"
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
			DateAberWithDate: "Mon 28 Esf 1340",
			DateDoy: "1340.363",
			DateWoy: "1340W53-3"
		},
		stime: -245820600000,
		gdate: [1962, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1962, 2, 19] },
		gtime: -245820600000
	},

	{
		sdate: [1360, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 1],
			DateTime: "1360-01-01 00:00:00",
			DateAber: "01 Far 1360",
			DateAberWithDate: "Sat 01 Far 1360",
			DateDoy: "1360.000",
			DateWoy: "1360W01-1"
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
			DateAberWithDate: "Sun 02 Far 1360",
			DateDoy: "1360.001",
			DateWoy: "1360W01-2"
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
			DateAberWithDate: "Mon 03 Far 1360",
			DateDoy: "1360.002",
			DateWoy: "1360W01-3"
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
			DateAberWithDate: "Tue 04 Far 1360",
			DateDoy: "1360.003",
			DateWoy: "1360W01-4"
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
			DateAberWithDate: "Wed 05 Far 1360",
			DateDoy: "1360.004",
			DateWoy: "1360W01-5"
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
			DateAberWithDate: "Thu 06 Far 1360",
			DateDoy: "1360.005",
			DateWoy: "1360W01-6"
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
			DateAberWithDate: "Fri 07 Far 1360",
			DateDoy: "1360.006",
			DateWoy: "1360W01-7"
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
			DateAberWithDate: "Sat 15 Far 1360",
			DateDoy: "1360.014",
			DateWoy: "1360W03-1"
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
			DateAberWithDate: "Sat 29 Far 1360",
			DateDoy: "1360.028",
			DateWoy: "1360W05-1"
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
			DateAberWithDate: "Sun 30 Far 1360",
			DateDoy: "1360.029",
			DateWoy: "1360W05-2"
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
			DateAberWithDate: "Mon 31 Far 1360",
			DateDoy: "1360.030",
			DateWoy: "1360W05-3"
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
			DateAberWithDate: "Tue 01 Ord 1360",
			DateDoy: "1360.031",
			DateWoy: "1360W05-4"
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
			DateAberWithDate: "Wed 02 Ord 1360",
			DateDoy: "1360.032",
			DateWoy: "1360W05-5"
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
			DateAberWithDate: "Tue 15 Ord 1360",
			DateDoy: "1360.045",
			DateWoy: "1360W07-4"
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
			DateAberWithDate: "Wed 30 Ord 1360",
			DateDoy: "1360.060",
			DateWoy: "1360W09-5"
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
			DateAberWithDate: "Thu 31 Ord 1360",
			DateDoy: "1360.061",
			DateWoy: "1360W09-6"
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
			DateAberWithDate: "Fri 01 Kho 1360",
			DateDoy: "1360.062",
			DateWoy: "1360W09-7"
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
			DateAberWithDate: "Sat 02 Kho 1360",
			DateDoy: "1360.063",
			DateWoy: "1360W10-1"
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
			DateAberWithDate: "Fri 15 Kho 1360",
			DateDoy: "1360.076",
			DateWoy: "1360W11-7"
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
			DateAberWithDate: "Sat 30 Kho 1360",
			DateDoy: "1360.091",
			DateWoy: "1360W14-1"
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
			DateAberWithDate: "Sun 31 Kho 1360",
			DateDoy: "1360.092",
			DateWoy: "1360W14-2"
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
			DateAberWithDate: "Mon 01 Tir 1360",
			DateDoy: "1360.093",
			DateWoy: "1360W14-3"
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
			DateAberWithDate: "Tue 02 Tir 1360",
			DateDoy: "1360.094",
			DateWoy: "1360W14-4"
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
			DateAberWithDate: "Mon 15 Tir 1360",
			DateDoy: "1360.107",
			DateWoy: "1360W16-3"
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
			DateAberWithDate: "Tue 30 Tir 1360",
			DateDoy: "1360.122",
			DateWoy: "1360W18-4"
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
			DateAberWithDate: "Wed 31 Tir 1360",
			DateDoy: "1360.123",
			DateWoy: "1360W18-5"
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
			DateAberWithDate: "Thu 01 Amo 1360",
			DateDoy: "1360.124",
			DateWoy: "1360W18-6"
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
			DateAberWithDate: "Fri 02 Amo 1360",
			DateDoy: "1360.125",
			DateWoy: "1360W18-7"
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
			DateAberWithDate: "Thu 15 Amo 1360",
			DateDoy: "1360.138",
			DateWoy: "1360W20-6"
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
			DateAberWithDate: "Fri 30 Amo 1360",
			DateDoy: "1360.153",
			DateWoy: "1360W22-7"
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
			DateAberWithDate: "Sat 31 Amo 1360",
			DateDoy: "1360.154",
			DateWoy: "1360W23-1"
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
			DateAberWithDate: "Sun 01 Sha 1360",
			DateDoy: "1360.155",
			DateWoy: "1360W23-2"
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
			DateAberWithDate: "Mon 02 Sha 1360",
			DateDoy: "1360.156",
			DateWoy: "1360W23-3"
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
			DateAberWithDate: "Sun 15 Sha 1360",
			DateDoy: "1360.169",
			DateWoy: "1360W25-2"
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
			DateAberWithDate: "Sun 29 Sha 1360",
			DateDoy: "1360.183",
			DateWoy: "1360W27-2"
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
			DateAberWithDate: "Mon 30 Sha 1360",
			DateDoy: "1360.184",
			DateWoy: "1360W27-3"
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
			DateAberWithDate: "Wed 01 Meh 1360",
			DateDoy: "1360.186",
			DateWoy: "1360W27-5"
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
			DateAberWithDate: "Thu 02 Meh 1360",
			DateDoy: "1360.187",
			DateWoy: "1360W27-6"
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
			DateAberWithDate: "Wed 15 Meh 1360",
			DateDoy: "1360.200",
			DateWoy: "1360W29-5"
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
			DateAberWithDate: "Wed 29 Meh 1360",
			DateDoy: "1360.214",
			DateWoy: "1360W31-5"
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
			DateAberWithDate: "Thu 30 Meh 1360",
			DateDoy: "1360.215",
			DateWoy: "1360W31-6"
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
			DateAberWithDate: "Fri 01 Aba 1360",
			DateDoy: "1360.216",
			DateWoy: "1360W31-7"
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
			DateAberWithDate: "Sat 02 Aba 1360",
			DateDoy: "1360.217",
			DateWoy: "1360W32-1"
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
			DateAberWithDate: "Fri 15 Aba 1360",
			DateDoy: "1360.230",
			DateWoy: "1360W33-7"
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
			DateAberWithDate: "Fri 29 Aba 1360",
			DateDoy: "1360.244",
			DateWoy: "1360W35-7"
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
			DateAberWithDate: "Sat 30 Aba 1360",
			DateDoy: "1360.245",
			DateWoy: "1360W36-1"
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
			DateAberWithDate: "Sun 01 Aza 1360",
			DateDoy: "1360.246",
			DateWoy: "1360W36-2"
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
			DateAberWithDate: "Mon 02 Aza 1360",
			DateDoy: "1360.247",
			DateWoy: "1360W36-3"
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
			DateAberWithDate: "Sun 15 Aza 1360",
			DateDoy: "1360.260",
			DateWoy: "1360W38-2"
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
			DateAberWithDate: "Sun 29 Aza 1360",
			DateDoy: "1360.274",
			DateWoy: "1360W40-2"
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
			DateAberWithDate: "Mon 30 Aza 1360",
			DateDoy: "1360.275",
			DateWoy: "1360W40-3"
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
			DateAberWithDate: "Tue 01 Dey 1360",
			DateDoy: "1360.276",
			DateWoy: "1360W40-4"
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
			DateAberWithDate: "Wed 02 Dey 1360",
			DateDoy: "1360.277",
			DateWoy: "1360W40-5"
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
			DateAberWithDate: "Tue 15 Dey 1360",
			DateDoy: "1360.290",
			DateWoy: "1360W42-4"
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
			DateAberWithDate: "Tue 29 Dey 1360",
			DateDoy: "1360.304",
			DateWoy: "1360W44-4"
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
			DateAberWithDate: "Wed 30 Dey 1360",
			DateDoy: "1360.305",
			DateWoy: "1360W44-5"
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
			DateAberWithDate: "Thu 01 Bah 1360",
			DateDoy: "1360.306",
			DateWoy: "1360W44-6"
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
			DateAberWithDate: "Fri 02 Bah 1360",
			DateDoy: "1360.307",
			DateWoy: "1360W44-7"
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
			DateAberWithDate: "Thu 15 Bah 1360",
			DateDoy: "1360.320",
			DateWoy: "1360W46-6"
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
			DateAberWithDate: "Thu 29 Bah 1360",
			DateDoy: "1360.334",
			DateWoy: "1360W48-6"
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
			DateAberWithDate: "Fri 30 Bah 1360",
			DateDoy: "1360.335",
			DateWoy: "1360W48-7"
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
			DateAberWithDate: "Sat 01 Esf 1360",
			DateDoy: "1360.336",
			DateWoy: "1360W49-1"
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
			DateAberWithDate: "Sun 02 Esf 1360",
			DateDoy: "1360.337",
			DateWoy: "1360W49-2"
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
			DateAberWithDate: "Mon 03 Esf 1360",
			DateDoy: "1360.338",
			DateWoy: "1360W49-3"
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
			DateAberWithDate: "Tue 04 Esf 1360",
			DateDoy: "1360.339",
			DateWoy: "1360W49-4"
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
			DateAberWithDate: "Sat 15 Esf 1360",
			DateDoy: "1360.350",
			DateWoy: "1360W51-1"
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
			DateAberWithDate: "Tue 25 Esf 1360",
			DateDoy: "1360.360",
			DateWoy: "1360W52-4"
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
			DateAberWithDate: "Wed 26 Esf 1360",
			DateDoy: "1360.361",
			DateWoy: "1360W52-5"
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
			DateAberWithDate: "Thu 27 Esf 1360",
			DateDoy: "1360.362",
			DateWoy: "1360W52-6"
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
			DateAberWithDate: "Fri 28 Esf 1360",
			DateDoy: "1360.363",
			DateWoy: "1360W52-7"
		},
		stime: 385331400000,
		gdate: [1982, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [1982, 2, 19] },
		gtime: 385331400000
	},

	{
		sdate: [1380, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 1],
			DateTime: "1380-01-01 00:00:00",
			DateAber: "01 Far 1380",
			DateAberWithDate: "Wed 01 Far 1380",
			DateDoy: "1380.000",
			DateWoy: "1379W53-5"
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
			DateAberWithDate: "Thu 02 Far 1380",
			DateDoy: "1380.001",
			DateWoy: "1379W53-6"
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
			DateAberWithDate: "Fri 03 Far 1380",
			DateDoy: "1380.002",
			DateWoy: "1379W53-7"
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
			DateAberWithDate: "Sat 04 Far 1380",
			DateDoy: "1380.003",
			DateWoy: "1380W01-1"
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
			DateAberWithDate: "Sun 05 Far 1380",
			DateDoy: "1380.004",
			DateWoy: "1380W01-2"
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
			DateAberWithDate: "Mon 06 Far 1380",
			DateDoy: "1380.005",
			DateWoy: "1380W01-3"
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
			DateAberWithDate: "Tue 07 Far 1380",
			DateDoy: "1380.006",
			DateWoy: "1380W01-4"
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
			DateAberWithDate: "Wed 15 Far 1380",
			DateDoy: "1380.014",
			DateWoy: "1380W02-5"
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
			DateAberWithDate: "Wed 29 Far 1380",
			DateDoy: "1380.028",
			DateWoy: "1380W04-5"
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
			DateAberWithDate: "Thu 30 Far 1380",
			DateDoy: "1380.029",
			DateWoy: "1380W04-6"
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
			DateAberWithDate: "Fri 31 Far 1380",
			DateDoy: "1380.030",
			DateWoy: "1380W04-7"
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
			DateAberWithDate: "Sat 01 Ord 1380",
			DateDoy: "1380.031",
			DateWoy: "1380W05-1"
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
			DateAberWithDate: "Sun 02 Ord 1380",
			DateDoy: "1380.032",
			DateWoy: "1380W05-2"
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
			DateAberWithDate: "Sat 15 Ord 1380",
			DateDoy: "1380.045",
			DateWoy: "1380W07-1"
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
			DateAberWithDate: "Sun 30 Ord 1380",
			DateDoy: "1380.060",
			DateWoy: "1380W09-2"
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
			DateAberWithDate: "Mon 31 Ord 1380",
			DateDoy: "1380.061",
			DateWoy: "1380W09-3"
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
			DateAberWithDate: "Tue 01 Kho 1380",
			DateDoy: "1380.062",
			DateWoy: "1380W09-4"
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
			DateAberWithDate: "Wed 02 Kho 1380",
			DateDoy: "1380.063",
			DateWoy: "1380W09-5"
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
			DateAberWithDate: "Tue 15 Kho 1380",
			DateDoy: "1380.076",
			DateWoy: "1380W11-4"
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
			DateAberWithDate: "Wed 30 Kho 1380",
			DateDoy: "1380.091",
			DateWoy: "1380W13-5"
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
			DateAberWithDate: "Thu 31 Kho 1380",
			DateDoy: "1380.092",
			DateWoy: "1380W13-6"
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
			DateAberWithDate: "Fri 01 Tir 1380",
			DateDoy: "1380.093",
			DateWoy: "1380W13-7"
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
			DateAberWithDate: "Sat 02 Tir 1380",
			DateDoy: "1380.094",
			DateWoy: "1380W14-1"
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
			DateAberWithDate: "Fri 15 Tir 1380",
			DateDoy: "1380.107",
			DateWoy: "1380W15-7"
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
			DateAberWithDate: "Sat 30 Tir 1380",
			DateDoy: "1380.122",
			DateWoy: "1380W18-1"
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
			DateAberWithDate: "Sun 31 Tir 1380",
			DateDoy: "1380.123",
			DateWoy: "1380W18-2"
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
			DateAberWithDate: "Mon 01 Amo 1380",
			DateDoy: "1380.124",
			DateWoy: "1380W18-3"
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
			DateAberWithDate: "Tue 02 Amo 1380",
			DateDoy: "1380.125",
			DateWoy: "1380W18-4"
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
			DateAberWithDate: "Mon 15 Amo 1380",
			DateDoy: "1380.138",
			DateWoy: "1380W20-3"
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
			DateAberWithDate: "Tue 30 Amo 1380",
			DateDoy: "1380.153",
			DateWoy: "1380W22-4"
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
			DateAberWithDate: "Wed 31 Amo 1380",
			DateDoy: "1380.154",
			DateWoy: "1380W22-5"
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
			DateAberWithDate: "Thu 01 Sha 1380",
			DateDoy: "1380.155",
			DateWoy: "1380W22-6"
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
			DateAberWithDate: "Fri 02 Sha 1380",
			DateDoy: "1380.156",
			DateWoy: "1380W22-7"
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
			DateAberWithDate: "Thu 15 Sha 1380",
			DateDoy: "1380.169",
			DateWoy: "1380W24-6"
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
			DateAberWithDate: "Thu 29 Sha 1380",
			DateDoy: "1380.183",
			DateWoy: "1380W26-6"
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
			DateAberWithDate: "Fri 30 Sha 1380",
			DateDoy: "1380.184",
			DateWoy: "1380W26-7"
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
			DateAberWithDate: "Sun 01 Meh 1380",
			DateDoy: "1380.186",
			DateWoy: "1380W27-2"
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
			DateAberWithDate: "Mon 02 Meh 1380",
			DateDoy: "1380.187",
			DateWoy: "1380W27-3"
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
			DateAberWithDate: "Sun 15 Meh 1380",
			DateDoy: "1380.200",
			DateWoy: "1380W29-2"
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
			DateAberWithDate: "Sun 29 Meh 1380",
			DateDoy: "1380.214",
			DateWoy: "1380W31-2"
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
			DateAberWithDate: "Mon 30 Meh 1380",
			DateDoy: "1380.215",
			DateWoy: "1380W31-3"
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
			DateAberWithDate: "Tue 01 Aba 1380",
			DateDoy: "1380.216",
			DateWoy: "1380W31-4"
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
			DateAberWithDate: "Wed 02 Aba 1380",
			DateDoy: "1380.217",
			DateWoy: "1380W31-5"
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
			DateAberWithDate: "Tue 15 Aba 1380",
			DateDoy: "1380.230",
			DateWoy: "1380W33-4"
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
			DateAberWithDate: "Tue 29 Aba 1380",
			DateDoy: "1380.244",
			DateWoy: "1380W35-4"
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
			DateAberWithDate: "Wed 30 Aba 1380",
			DateDoy: "1380.245",
			DateWoy: "1380W35-5"
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
			DateAberWithDate: "Thu 01 Aza 1380",
			DateDoy: "1380.246",
			DateWoy: "1380W35-6"
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
			DateAberWithDate: "Fri 02 Aza 1380",
			DateDoy: "1380.247",
			DateWoy: "1380W35-7"
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
			DateAberWithDate: "Thu 15 Aza 1380",
			DateDoy: "1380.260",
			DateWoy: "1380W37-6"
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
			DateAberWithDate: "Thu 29 Aza 1380",
			DateDoy: "1380.274",
			DateWoy: "1380W39-6"
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
			DateAberWithDate: "Fri 30 Aza 1380",
			DateDoy: "1380.275",
			DateWoy: "1380W39-7"
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
			DateAberWithDate: "Sat 01 Dey 1380",
			DateDoy: "1380.276",
			DateWoy: "1380W40-1"
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
			DateAberWithDate: "Sun 02 Dey 1380",
			DateDoy: "1380.277",
			DateWoy: "1380W40-2"
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
			DateAberWithDate: "Sat 15 Dey 1380",
			DateDoy: "1380.290",
			DateWoy: "1380W42-1"
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
			DateAberWithDate: "Sat 29 Dey 1380",
			DateDoy: "1380.304",
			DateWoy: "1380W44-1"
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
			DateAberWithDate: "Sun 30 Dey 1380",
			DateDoy: "1380.305",
			DateWoy: "1380W44-2"
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
			DateAberWithDate: "Mon 01 Bah 1380",
			DateDoy: "1380.306",
			DateWoy: "1380W44-3"
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
			DateAberWithDate: "Tue 02 Bah 1380",
			DateDoy: "1380.307",
			DateWoy: "1380W44-4"
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
			DateAberWithDate: "Mon 15 Bah 1380",
			DateDoy: "1380.320",
			DateWoy: "1380W46-3"
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
			DateAberWithDate: "Mon 29 Bah 1380",
			DateDoy: "1380.334",
			DateWoy: "1380W48-3"
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
			DateAberWithDate: "Tue 30 Bah 1380",
			DateDoy: "1380.335",
			DateWoy: "1380W48-4"
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
			DateAberWithDate: "Wed 01 Esf 1380",
			DateDoy: "1380.336",
			DateWoy: "1380W48-5"
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
			DateAberWithDate: "Thu 02 Esf 1380",
			DateDoy: "1380.337",
			DateWoy: "1380W48-6"
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
			DateAberWithDate: "Fri 03 Esf 1380",
			DateDoy: "1380.338",
			DateWoy: "1380W48-7"
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
			DateAberWithDate: "Sat 04 Esf 1380",
			DateDoy: "1380.339",
			DateWoy: "1380W49-1"
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
			DateAberWithDate: "Wed 15 Esf 1380",
			DateDoy: "1380.350",
			DateWoy: "1380W50-5"
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
			DateAberWithDate: "Sat 25 Esf 1380",
			DateDoy: "1380.360",
			DateWoy: "1380W52-1"
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
			DateAberWithDate: "Sun 26 Esf 1380",
			DateDoy: "1380.361",
			DateWoy: "1380W52-2"
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
			DateAberWithDate: "Mon 27 Esf 1380",
			DateDoy: "1380.362",
			DateWoy: "1380W52-3"
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
			DateAberWithDate: "Tue 28 Esf 1380",
			DateDoy: "1380.363",
			DateWoy: "1380W52-4"
		},
		stime: 1016483400000,
		gdate: [2002, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2002, 2, 19] },
		gtime: 1016483400000
	},

	{
		sdate: [1400, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 1],
			DateTime: "1400-01-01 00:00:00",
			DateAber: "01 Far 1400",
			DateAberWithDate: "Sun 01 Far 1400",
			DateDoy: "1400.000",
			DateWoy: "1400W01-2"
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
			DateAberWithDate: "Mon 02 Far 1400",
			DateDoy: "1400.001",
			DateWoy: "1400W01-3"
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
			DateAberWithDate: "Tue 03 Far 1400",
			DateDoy: "1400.002",
			DateWoy: "1400W01-4"
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
			DateAberWithDate: "Wed 04 Far 1400",
			DateDoy: "1400.003",
			DateWoy: "1400W01-5"
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
			DateAberWithDate: "Thu 05 Far 1400",
			DateDoy: "1400.004",
			DateWoy: "1400W01-6"
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
			DateAberWithDate: "Fri 06 Far 1400",
			DateDoy: "1400.005",
			DateWoy: "1400W01-7"
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
			DateAberWithDate: "Sat 07 Far 1400",
			DateDoy: "1400.006",
			DateWoy: "1400W02-1"
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
			DateAberWithDate: "Sun 15 Far 1400",
			DateDoy: "1400.014",
			DateWoy: "1400W03-2"
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
			DateAberWithDate: "Sun 29 Far 1400",
			DateDoy: "1400.028",
			DateWoy: "1400W05-2"
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
			DateAberWithDate: "Mon 30 Far 1400",
			DateDoy: "1400.029",
			DateWoy: "1400W05-3"
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
			DateAberWithDate: "Tue 31 Far 1400",
			DateDoy: "1400.030",
			DateWoy: "1400W05-4"
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
			DateAberWithDate: "Wed 01 Ord 1400",
			DateDoy: "1400.031",
			DateWoy: "1400W05-5"
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
			DateAberWithDate: "Thu 02 Ord 1400",
			DateDoy: "1400.032",
			DateWoy: "1400W05-6"
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
			DateAberWithDate: "Wed 15 Ord 1400",
			DateDoy: "1400.045",
			DateWoy: "1400W07-5"
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
			DateAberWithDate: "Thu 30 Ord 1400",
			DateDoy: "1400.060",
			DateWoy: "1400W09-6"
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
			DateAberWithDate: "Fri 31 Ord 1400",
			DateDoy: "1400.061",
			DateWoy: "1400W09-7"
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
			DateAberWithDate: "Sat 01 Kho 1400",
			DateDoy: "1400.062",
			DateWoy: "1400W10-1"
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
			DateAberWithDate: "Sun 02 Kho 1400",
			DateDoy: "1400.063",
			DateWoy: "1400W10-2"
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
			DateAberWithDate: "Sat 15 Kho 1400",
			DateDoy: "1400.076",
			DateWoy: "1400W12-1"
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
			DateAberWithDate: "Sun 30 Kho 1400",
			DateDoy: "1400.091",
			DateWoy: "1400W14-2"
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
			DateAberWithDate: "Mon 31 Kho 1400",
			DateDoy: "1400.092",
			DateWoy: "1400W14-3"
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
			DateAberWithDate: "Tue 01 Tir 1400",
			DateDoy: "1400.093",
			DateWoy: "1400W14-4"
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
			DateAberWithDate: "Wed 02 Tir 1400",
			DateDoy: "1400.094",
			DateWoy: "1400W14-5"
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
			DateAberWithDate: "Tue 15 Tir 1400",
			DateDoy: "1400.107",
			DateWoy: "1400W16-4"
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
			DateAberWithDate: "Wed 30 Tir 1400",
			DateDoy: "1400.122",
			DateWoy: "1400W18-5"
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
			DateAberWithDate: "Thu 31 Tir 1400",
			DateDoy: "1400.123",
			DateWoy: "1400W18-6"
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
			DateAberWithDate: "Fri 01 Amo 1400",
			DateDoy: "1400.124",
			DateWoy: "1400W18-7"
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
			DateAberWithDate: "Sat 02 Amo 1400",
			DateDoy: "1400.125",
			DateWoy: "1400W19-1"
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
			DateAberWithDate: "Fri 15 Amo 1400",
			DateDoy: "1400.138",
			DateWoy: "1400W20-7"
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
			DateAberWithDate: "Sat 30 Amo 1400",
			DateDoy: "1400.153",
			DateWoy: "1400W23-1"
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
			DateAberWithDate: "Sun 31 Amo 1400",
			DateDoy: "1400.154",
			DateWoy: "1400W23-2"
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
			DateAberWithDate: "Mon 01 Sha 1400",
			DateDoy: "1400.155",
			DateWoy: "1400W23-3"
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
			DateAberWithDate: "Tue 02 Sha 1400",
			DateDoy: "1400.156",
			DateWoy: "1400W23-4"
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
			DateAberWithDate: "Mon 15 Sha 1400",
			DateDoy: "1400.169",
			DateWoy: "1400W25-3"
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
			DateAberWithDate: "Mon 29 Sha 1400",
			DateDoy: "1400.183",
			DateWoy: "1400W27-3"
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
			DateAberWithDate: "Tue 30 Sha 1400",
			DateDoy: "1400.184",
			DateWoy: "1400W27-4"
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
			DateAberWithDate: "Thu 01 Meh 1400",
			DateDoy: "1400.186",
			DateWoy: "1400W27-6"
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
			DateAberWithDate: "Fri 02 Meh 1400",
			DateDoy: "1400.187",
			DateWoy: "1400W27-7"
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
			DateAberWithDate: "Thu 15 Meh 1400",
			DateDoy: "1400.200",
			DateWoy: "1400W29-6"
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
			DateAberWithDate: "Thu 29 Meh 1400",
			DateDoy: "1400.214",
			DateWoy: "1400W31-6"
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
			DateAberWithDate: "Fri 30 Meh 1400",
			DateDoy: "1400.215",
			DateWoy: "1400W31-7"
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
			DateAberWithDate: "Sat 01 Aba 1400",
			DateDoy: "1400.216",
			DateWoy: "1400W32-1"
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
			DateAberWithDate: "Sun 02 Aba 1400",
			DateDoy: "1400.217",
			DateWoy: "1400W32-2"
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
			DateAberWithDate: "Sat 15 Aba 1400",
			DateDoy: "1400.230",
			DateWoy: "1400W34-1"
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
			DateAberWithDate: "Sat 29 Aba 1400",
			DateDoy: "1400.244",
			DateWoy: "1400W36-1"
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
			DateAberWithDate: "Sun 30 Aba 1400",
			DateDoy: "1400.245",
			DateWoy: "1400W36-2"
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
			DateAberWithDate: "Mon 01 Aza 1400",
			DateDoy: "1400.246",
			DateWoy: "1400W36-3"
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
			DateAberWithDate: "Tue 02 Aza 1400",
			DateDoy: "1400.247",
			DateWoy: "1400W36-4"
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
			DateAberWithDate: "Mon 15 Aza 1400",
			DateDoy: "1400.260",
			DateWoy: "1400W38-3"
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
			DateAberWithDate: "Mon 29 Aza 1400",
			DateDoy: "1400.274",
			DateWoy: "1400W40-3"
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
			DateAberWithDate: "Tue 30 Aza 1400",
			DateDoy: "1400.275",
			DateWoy: "1400W40-4"
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
			DateAberWithDate: "Wed 01 Dey 1400",
			DateDoy: "1400.276",
			DateWoy: "1400W40-5"
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
			DateAberWithDate: "Thu 02 Dey 1400",
			DateDoy: "1400.277",
			DateWoy: "1400W40-6"
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
			DateAberWithDate: "Wed 15 Dey 1400",
			DateDoy: "1400.290",
			DateWoy: "1400W42-5"
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
			DateAberWithDate: "Wed 29 Dey 1400",
			DateDoy: "1400.304",
			DateWoy: "1400W44-5"
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
			DateAberWithDate: "Thu 30 Dey 1400",
			DateDoy: "1400.305",
			DateWoy: "1400W44-6"
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
			DateAberWithDate: "Fri 01 Bah 1400",
			DateDoy: "1400.306",
			DateWoy: "1400W44-7"
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
			DateAberWithDate: "Sat 02 Bah 1400",
			DateDoy: "1400.307",
			DateWoy: "1400W45-1"
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
			DateAberWithDate: "Fri 15 Bah 1400",
			DateDoy: "1400.320",
			DateWoy: "1400W46-7"
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
			DateAberWithDate: "Fri 29 Bah 1400",
			DateDoy: "1400.334",
			DateWoy: "1400W48-7"
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
			DateAberWithDate: "Sat 30 Bah 1400",
			DateDoy: "1400.335",
			DateWoy: "1400W49-1"
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
			DateAberWithDate: "Sun 01 Esf 1400",
			DateDoy: "1400.336",
			DateWoy: "1400W49-2"
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
			DateAberWithDate: "Mon 02 Esf 1400",
			DateDoy: "1400.337",
			DateWoy: "1400W49-3"
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
			DateAberWithDate: "Tue 03 Esf 1400",
			DateDoy: "1400.338",
			DateWoy: "1400W49-4"
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
			DateAberWithDate: "Wed 04 Esf 1400",
			DateDoy: "1400.339",
			DateWoy: "1400W49-5"
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
			DateAberWithDate: "Sun 15 Esf 1400",
			DateDoy: "1400.350",
			DateWoy: "1400W51-2"
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
			DateAberWithDate: "Wed 25 Esf 1400",
			DateDoy: "1400.360",
			DateWoy: "1400W52-5"
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
			DateAberWithDate: "Thu 26 Esf 1400",
			DateDoy: "1400.361",
			DateWoy: "1400W52-6"
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
			DateAberWithDate: "Fri 27 Esf 1400",
			DateDoy: "1400.362",
			DateWoy: "1400W52-7"
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
			DateAberWithDate: "Sat 28 Esf 1400",
			DateDoy: "1400.363",
			DateWoy: "1401W01-1"
		},
		stime: 1647635400000,
		gdate: [2022, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2022, 2, 19] },
		gtime: 1647635400000
	},

	{
		sdate: [1420, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 1],
			DateTime: "1420-01-01 00:00:00",
			DateAber: "01 Far 1420",
			DateAberWithDate: "Wed 01 Far 1420",
			DateDoy: "1420.000",
			DateWoy: "1419W53-5"
		},
		stime: 2247337800000,
		gdate: [2041, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 20] },
		gtime: 2247337800000
	},
	{
		sdate: [1420, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 2],
			DateTime: "1420-01-02 00:00:00",
			DateAber: "02 Far 1420",
			DateAberWithDate: "Thu 02 Far 1420",
			DateDoy: "1420.001",
			DateWoy: "1419W53-6"
		},
		stime: 2247424200000,
		gdate: [2041, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 21] },
		gtime: 2247424200000
	},
	{
		sdate: [1420, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 3],
			DateTime: "1420-01-03 00:00:00",
			DateAber: "03 Far 1420",
			DateAberWithDate: "Fri 03 Far 1420",
			DateDoy: "1420.002",
			DateWoy: "1419W53-7"
		},
		stime: 2247510600000,
		gdate: [2041, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 22] },
		gtime: 2247510600000
	},
	{
		sdate: [1420, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 4],
			DateTime: "1420-01-04 00:00:00",
			DateAber: "04 Far 1420",
			DateAberWithDate: "Sat 04 Far 1420",
			DateDoy: "1420.003",
			DateWoy: "1420W01-1"
		},
		stime: 2247597000000,
		gdate: [2041, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 23] },
		gtime: 2247597000000
	},
	{
		sdate: [1420, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 5],
			DateTime: "1420-01-05 00:00:00",
			DateAber: "05 Far 1420",
			DateAberWithDate: "Sun 05 Far 1420",
			DateDoy: "1420.004",
			DateWoy: "1420W01-2"
		},
		stime: 2247683400000,
		gdate: [2041, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 24] },
		gtime: 2247683400000
	},
	{
		sdate: [1420, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 6],
			DateTime: "1420-01-06 00:00:00",
			DateAber: "06 Far 1420",
			DateAberWithDate: "Mon 06 Far 1420",
			DateDoy: "1420.005",
			DateWoy: "1420W01-3"
		},
		stime: 2247769800000,
		gdate: [2041, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 25] },
		gtime: 2247769800000
	},
	{
		sdate: [1420, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 7],
			DateTime: "1420-01-07 00:00:00",
			DateAber: "07 Far 1420",
			DateAberWithDate: "Tue 07 Far 1420",
			DateDoy: "1420.006",
			DateWoy: "1420W01-4"
		},
		stime: 2247856200000,
		gdate: [2041, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 2, 26] },
		gtime: 2247856200000
	},
	{
		sdate: [1420, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 15],
			DateTime: "1420-01-15 00:00:00",
			DateAber: "15 Far 1420",
			DateAberWithDate: "Wed 15 Far 1420",
			DateDoy: "1420.014",
			DateWoy: "1420W02-5"
		},
		stime: 2248547400000,
		gdate: [2041, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 3] },
		gtime: 2248547400000
	},
	{
		sdate: [1420, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 29],
			DateTime: "1420-01-29 00:00:00",
			DateAber: "29 Far 1420",
			DateAberWithDate: "Wed 29 Far 1420",
			DateDoy: "1420.028",
			DateWoy: "1420W04-5"
		},
		stime: 2249757000000,
		gdate: [2041, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 17] },
		gtime: 2249757000000
	},
	{
		sdate: [1420, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 30],
			DateTime: "1420-01-30 00:00:00",
			DateAber: "30 Far 1420",
			DateAberWithDate: "Thu 30 Far 1420",
			DateDoy: "1420.029",
			DateWoy: "1420W04-6"
		},
		stime: 2249843400000,
		gdate: [2041, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 18] },
		gtime: 2249843400000
	},
	{
		sdate: [1420, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 31],
			DateTime: "1420-01-31 00:00:00",
			DateAber: "31 Far 1420",
			DateAberWithDate: "Fri 31 Far 1420",
			DateDoy: "1420.030",
			DateWoy: "1420W04-7"
		},
		stime: 2249929800000,
		gdate: [2041, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 19] },
		gtime: 2249929800000
	},
	{
		sdate: [1420, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 1],
			DateTime: "1420-02-01 00:00:00",
			DateAber: "01 Ord 1420",
			DateAberWithDate: "Sat 01 Ord 1420",
			DateDoy: "1420.031",
			DateWoy: "1420W05-1"
		},
		stime: 2250016200000,
		gdate: [2041, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 20] },
		gtime: 2250016200000
	},
	{
		sdate: [1420, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 2],
			DateTime: "1420-02-02 00:00:00",
			DateAber: "02 Ord 1420",
			DateAberWithDate: "Sun 02 Ord 1420",
			DateDoy: "1420.032",
			DateWoy: "1420W05-2"
		},
		stime: 2250102600000,
		gdate: [2041, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 3, 21] },
		gtime: 2250102600000
	},
	{
		sdate: [1420, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 15],
			DateTime: "1420-02-15 00:00:00",
			DateAber: "15 Ord 1420",
			DateAberWithDate: "Sat 15 Ord 1420",
			DateDoy: "1420.045",
			DateWoy: "1420W07-1"
		},
		stime: 2251225800000,
		gdate: [2041, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 4] },
		gtime: 2251225800000
	},
	{
		sdate: [1420, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 30],
			DateTime: "1420-02-30 00:00:00",
			DateAber: "30 Ord 1420",
			DateAberWithDate: "Sun 30 Ord 1420",
			DateDoy: "1420.060",
			DateWoy: "1420W09-2"
		},
		stime: 2252521800000,
		gdate: [2041, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 19] },
		gtime: 2252521800000
	},
	{
		sdate: [1420, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 31],
			DateTime: "1420-02-31 00:00:00",
			DateAber: "31 Ord 1420",
			DateAberWithDate: "Mon 31 Ord 1420",
			DateDoy: "1420.061",
			DateWoy: "1420W09-3"
		},
		stime: 2252608200000,
		gdate: [2041, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 20] },
		gtime: 2252608200000
	},
	{
		sdate: [1420, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 1],
			DateTime: "1420-03-01 00:00:00",
			DateAber: "01 Kho 1420",
			DateAberWithDate: "Tue 01 Kho 1420",
			DateDoy: "1420.062",
			DateWoy: "1420W09-4"
		},
		stime: 2252694600000,
		gdate: [2041, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 21] },
		gtime: 2252694600000
	},
	{
		sdate: [1420, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 2],
			DateTime: "1420-03-02 00:00:00",
			DateAber: "02 Kho 1420",
			DateAberWithDate: "Wed 02 Kho 1420",
			DateDoy: "1420.063",
			DateWoy: "1420W09-5"
		},
		stime: 2252781000000,
		gdate: [2041, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 4, 22] },
		gtime: 2252781000000
	},
	{
		sdate: [1420, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 15],
			DateTime: "1420-03-15 00:00:00",
			DateAber: "15 Kho 1420",
			DateAberWithDate: "Tue 15 Kho 1420",
			DateDoy: "1420.076",
			DateWoy: "1420W11-4"
		},
		stime: 2253904200000,
		gdate: [2041, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 4] },
		gtime: 2253904200000
	},
	{
		sdate: [1420, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 30],
			DateTime: "1420-03-30 00:00:00",
			DateAber: "30 Kho 1420",
			DateAberWithDate: "Wed 30 Kho 1420",
			DateDoy: "1420.091",
			DateWoy: "1420W13-5"
		},
		stime: 2255200200000,
		gdate: [2041, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 19] },
		gtime: 2255200200000
	},
	{
		sdate: [1420, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 31],
			DateTime: "1420-03-31 00:00:00",
			DateAber: "31 Kho 1420",
			DateAberWithDate: "Thu 31 Kho 1420",
			DateDoy: "1420.092",
			DateWoy: "1420W13-6"
		},
		stime: 2255286600000,
		gdate: [2041, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 20] },
		gtime: 2255286600000
	},
	{
		sdate: [1420, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 1],
			DateTime: "1420-04-01 00:00:00",
			DateAber: "01 Tir 1420",
			DateAberWithDate: "Fri 01 Tir 1420",
			DateDoy: "1420.093",
			DateWoy: "1420W13-7"
		},
		stime: 2255373000000,
		gdate: [2041, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 21] },
		gtime: 2255373000000
	},
	{
		sdate: [1420, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 2],
			DateTime: "1420-04-02 00:00:00",
			DateAber: "02 Tir 1420",
			DateAberWithDate: "Sat 02 Tir 1420",
			DateDoy: "1420.094",
			DateWoy: "1420W14-1"
		},
		stime: 2255459400000,
		gdate: [2041, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 5, 22] },
		gtime: 2255459400000
	},
	{
		sdate: [1420, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 15],
			DateTime: "1420-04-15 00:00:00",
			DateAber: "15 Tir 1420",
			DateAberWithDate: "Fri 15 Tir 1420",
			DateDoy: "1420.107",
			DateWoy: "1420W15-7"
		},
		stime: 2256582600000,
		gdate: [2041, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 5] },
		gtime: 2256582600000
	},
	{
		sdate: [1420, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 30],
			DateTime: "1420-04-30 00:00:00",
			DateAber: "30 Tir 1420",
			DateAberWithDate: "Sat 30 Tir 1420",
			DateDoy: "1420.122",
			DateWoy: "1420W18-1"
		},
		stime: 2257878600000,
		gdate: [2041, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 20] },
		gtime: 2257878600000
	},
	{
		sdate: [1420, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 31],
			DateTime: "1420-04-31 00:00:00",
			DateAber: "31 Tir 1420",
			DateAberWithDate: "Sun 31 Tir 1420",
			DateDoy: "1420.123",
			DateWoy: "1420W18-2"
		},
		stime: 2257965000000,
		gdate: [2041, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 21] },
		gtime: 2257965000000
	},
	{
		sdate: [1420, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 1],
			DateTime: "1420-05-01 00:00:00",
			DateAber: "01 Amo 1420",
			DateAberWithDate: "Mon 01 Amo 1420",
			DateDoy: "1420.124",
			DateWoy: "1420W18-3"
		},
		stime: 2258051400000,
		gdate: [2041, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 22] },
		gtime: 2258051400000
	},
	{
		sdate: [1420, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 2],
			DateTime: "1420-05-02 00:00:00",
			DateAber: "02 Amo 1420",
			DateAberWithDate: "Tue 02 Amo 1420",
			DateDoy: "1420.125",
			DateWoy: "1420W18-4"
		},
		stime: 2258137800000,
		gdate: [2041, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 6, 23] },
		gtime: 2258137800000
	},
	{
		sdate: [1420, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 15],
			DateTime: "1420-05-15 00:00:00",
			DateAber: "15 Amo 1420",
			DateAberWithDate: "Mon 15 Amo 1420",
			DateDoy: "1420.138",
			DateWoy: "1420W20-3"
		},
		stime: 2259261000000,
		gdate: [2041, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 5] },
		gtime: 2259261000000
	},
	{
		sdate: [1420, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 30],
			DateTime: "1420-05-30 00:00:00",
			DateAber: "30 Amo 1420",
			DateAberWithDate: "Tue 30 Amo 1420",
			DateDoy: "1420.153",
			DateWoy: "1420W22-4"
		},
		stime: 2260557000000,
		gdate: [2041, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 20] },
		gtime: 2260557000000
	},
	{
		sdate: [1420, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 31],
			DateTime: "1420-05-31 00:00:00",
			DateAber: "31 Amo 1420",
			DateAberWithDate: "Wed 31 Amo 1420",
			DateDoy: "1420.154",
			DateWoy: "1420W22-5"
		},
		stime: 2260643400000,
		gdate: [2041, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 21] },
		gtime: 2260643400000
	},
	{
		sdate: [1420, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 1],
			DateTime: "1420-06-01 00:00:00",
			DateAber: "01 Sha 1420",
			DateAberWithDate: "Thu 01 Sha 1420",
			DateDoy: "1420.155",
			DateWoy: "1420W22-6"
		},
		stime: 2260729800000,
		gdate: [2041, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 22] },
		gtime: 2260729800000
	},
	{
		sdate: [1420, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 2],
			DateTime: "1420-06-02 00:00:00",
			DateAber: "02 Sha 1420",
			DateAberWithDate: "Fri 02 Sha 1420",
			DateDoy: "1420.156",
			DateWoy: "1420W22-7"
		},
		stime: 2260816200000,
		gdate: [2041, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 7, 23] },
		gtime: 2260816200000
	},
	{
		sdate: [1420, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 15],
			DateTime: "1420-06-15 00:00:00",
			DateAber: "15 Sha 1420",
			DateAberWithDate: "Thu 15 Sha 1420",
			DateDoy: "1420.169",
			DateWoy: "1420W24-6"
		},
		stime: 2261939400000,
		gdate: [2041, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 5] },
		gtime: 2261939400000
	},
	{
		sdate: [1420, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 29],
			DateTime: "1420-06-29 00:00:00",
			DateAber: "29 Sha 1420",
			DateAberWithDate: "Thu 29 Sha 1420",
			DateDoy: "1420.183",
			DateWoy: "1420W26-6"
		},
		stime: 2263149000000,
		gdate: [2041, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 19] },
		gtime: 2263149000000
	},
	{
		sdate: [1420, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 30],
			DateTime: "1420-06-30 00:00:00",
			DateAber: "30 Sha 1420",
			DateAberWithDate: "Fri 30 Sha 1420",
			DateDoy: "1420.184",
			DateWoy: "1420W26-7"
		},
		stime: 2263235400000,
		gdate: [2041, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2041, 8, 20] },
		gtime: 2263235400000
	},
	{
		sdate: [1420, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 1],
			DateTime: "1420-07-01 00:00:00",
			DateAber: "01 Meh 1420",
			DateAberWithDate: "Sun 01 Meh 1420",
			DateDoy: "1420.186",
			DateWoy: "1420W27-2"
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
			DateAberWithDate: "Mon 02 Meh 1420",
			DateDoy: "1420.187",
			DateWoy: "1420W27-3"
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
			DateAberWithDate: "Sun 15 Meh 1420",
			DateDoy: "1420.200",
			DateWoy: "1420W29-2"
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
			DateAberWithDate: "Sun 29 Meh 1420",
			DateDoy: "1420.214",
			DateWoy: "1420W31-2"
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
			DateAberWithDate: "Mon 30 Meh 1420",
			DateDoy: "1420.215",
			DateWoy: "1420W31-3"
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
			DateAberWithDate: "Tue 01 Aba 1420",
			DateDoy: "1420.216",
			DateWoy: "1420W31-4"
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
			DateAberWithDate: "Wed 02 Aba 1420",
			DateDoy: "1420.217",
			DateWoy: "1420W31-5"
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
			DateAberWithDate: "Tue 15 Aba 1420",
			DateDoy: "1420.230",
			DateWoy: "1420W33-4"
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
			DateAberWithDate: "Tue 29 Aba 1420",
			DateDoy: "1420.244",
			DateWoy: "1420W35-4"
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
			DateAberWithDate: "Wed 30 Aba 1420",
			DateDoy: "1420.245",
			DateWoy: "1420W35-5"
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
			DateAberWithDate: "Thu 01 Aza 1420",
			DateDoy: "1420.246",
			DateWoy: "1420W35-6"
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
			DateAberWithDate: "Fri 02 Aza 1420",
			DateDoy: "1420.247",
			DateWoy: "1420W35-7"
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
			DateAberWithDate: "Thu 15 Aza 1420",
			DateDoy: "1420.260",
			DateWoy: "1420W37-6"
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
			DateAberWithDate: "Thu 29 Aza 1420",
			DateDoy: "1420.274",
			DateWoy: "1420W39-6"
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
			DateAberWithDate: "Fri 30 Aza 1420",
			DateDoy: "1420.275",
			DateWoy: "1420W39-7"
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
			DateAberWithDate: "Sat 01 Dey 1420",
			DateDoy: "1420.276",
			DateWoy: "1420W40-1"
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
			DateAberWithDate: "Sun 02 Dey 1420",
			DateDoy: "1420.277",
			DateWoy: "1420W40-2"
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
			DateAberWithDate: "Sat 15 Dey 1420",
			DateDoy: "1420.290",
			DateWoy: "1420W42-1"
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
			DateAberWithDate: "Sat 29 Dey 1420",
			DateDoy: "1420.304",
			DateWoy: "1420W44-1"
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
			DateAberWithDate: "Sun 30 Dey 1420",
			DateDoy: "1420.305",
			DateWoy: "1420W44-2"
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
			DateAberWithDate: "Mon 01 Bah 1420",
			DateDoy: "1420.306",
			DateWoy: "1420W44-3"
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
			DateAberWithDate: "Tue 02 Bah 1420",
			DateDoy: "1420.307",
			DateWoy: "1420W44-4"
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
			DateAberWithDate: "Mon 15 Bah 1420",
			DateDoy: "1420.320",
			DateWoy: "1420W46-3"
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
			DateAberWithDate: "Mon 29 Bah 1420",
			DateDoy: "1420.334",
			DateWoy: "1420W48-3"
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
			DateAberWithDate: "Tue 30 Bah 1420",
			DateDoy: "1420.335",
			DateWoy: "1420W48-4"
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
			DateAberWithDate: "Wed 01 Esf 1420",
			DateDoy: "1420.336",
			DateWoy: "1420W48-5"
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
			DateAberWithDate: "Thu 02 Esf 1420",
			DateDoy: "1420.337",
			DateWoy: "1420W48-6"
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
			DateAberWithDate: "Fri 03 Esf 1420",
			DateDoy: "1420.338",
			DateWoy: "1420W48-7"
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
			DateAberWithDate: "Sat 04 Esf 1420",
			DateDoy: "1420.339",
			DateWoy: "1420W49-1"
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
			DateAberWithDate: "Wed 15 Esf 1420",
			DateDoy: "1420.350",
			DateWoy: "1420W50-5"
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
			DateAberWithDate: "Sat 25 Esf 1420",
			DateDoy: "1420.360",
			DateWoy: "1420W52-1"
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
			DateAberWithDate: "Sun 26 Esf 1420",
			DateDoy: "1420.361",
			DateWoy: "1420W52-2"
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
			DateAberWithDate: "Mon 27 Esf 1420",
			DateDoy: "1420.362",
			DateWoy: "1420W52-3"
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
			DateAberWithDate: "Tue 28 Esf 1420",
			DateDoy: "1420.363",
			DateWoy: "1420W52-4"
		},
		stime: 2278701000000,
		gdate: [2042, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2042, 2, 18] },
		gtime: 2278701000000
	},
	{
		sdate: [1420, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 30],
			DateTime: "1420-12-30 00:00:00",
			DateAber: "30 Esf 1420",
			DateAberWithDate: "Thu 30 Esf 1420",
			DateDoy: "1420.365",
			DateWoy: "1420W52-6"
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
			DateAberWithDate: "Sun 01 Far 1440",
			DateDoy: "1440.000",
			DateWoy: "1440W01-2"
		},
		stime: 2878489800000,
		gdate: [2061, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 20] },
		gtime: 2878489800000
	},
	{
		sdate: [1440, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 2],
			DateTime: "1440-01-02 00:00:00",
			DateAber: "02 Far 1440",
			DateAberWithDate: "Mon 02 Far 1440",
			DateDoy: "1440.001",
			DateWoy: "1440W01-3"
		},
		stime: 2878576200000,
		gdate: [2061, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 21] },
		gtime: 2878576200000
	},
	{
		sdate: [1440, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 3],
			DateTime: "1440-01-03 00:00:00",
			DateAber: "03 Far 1440",
			DateAberWithDate: "Tue 03 Far 1440",
			DateDoy: "1440.002",
			DateWoy: "1440W01-4"
		},
		stime: 2878662600000,
		gdate: [2061, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 22] },
		gtime: 2878662600000
	},
	{
		sdate: [1440, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 4],
			DateTime: "1440-01-04 00:00:00",
			DateAber: "04 Far 1440",
			DateAberWithDate: "Wed 04 Far 1440",
			DateDoy: "1440.003",
			DateWoy: "1440W01-5"
		},
		stime: 2878749000000,
		gdate: [2061, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 23] },
		gtime: 2878749000000
	},
	{
		sdate: [1440, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 5],
			DateTime: "1440-01-05 00:00:00",
			DateAber: "05 Far 1440",
			DateAberWithDate: "Thu 05 Far 1440",
			DateDoy: "1440.004",
			DateWoy: "1440W01-6"
		},
		stime: 2878835400000,
		gdate: [2061, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 24] },
		gtime: 2878835400000
	},
	{
		sdate: [1440, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 6],
			DateTime: "1440-01-06 00:00:00",
			DateAber: "06 Far 1440",
			DateAberWithDate: "Fri 06 Far 1440",
			DateDoy: "1440.005",
			DateWoy: "1440W01-7"
		},
		stime: 2878921800000,
		gdate: [2061, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 25] },
		gtime: 2878921800000
	},
	{
		sdate: [1440, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 7],
			DateTime: "1440-01-07 00:00:00",
			DateAber: "07 Far 1440",
			DateAberWithDate: "Sat 07 Far 1440",
			DateDoy: "1440.006",
			DateWoy: "1440W02-1"
		},
		stime: 2879008200000,
		gdate: [2061, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 2, 26] },
		gtime: 2879008200000
	},
	{
		sdate: [1440, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 15],
			DateTime: "1440-01-15 00:00:00",
			DateAber: "15 Far 1440",
			DateAberWithDate: "Sun 15 Far 1440",
			DateDoy: "1440.014",
			DateWoy: "1440W03-2"
		},
		stime: 2879699400000,
		gdate: [2061, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 3] },
		gtime: 2879699400000
	},
	{
		sdate: [1440, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 29],
			DateTime: "1440-01-29 00:00:00",
			DateAber: "29 Far 1440",
			DateAberWithDate: "Sun 29 Far 1440",
			DateDoy: "1440.028",
			DateWoy: "1440W05-2"
		},
		stime: 2880909000000,
		gdate: [2061, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 17] },
		gtime: 2880909000000
	},
	{
		sdate: [1440, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 30],
			DateTime: "1440-01-30 00:00:00",
			DateAber: "30 Far 1440",
			DateAberWithDate: "Mon 30 Far 1440",
			DateDoy: "1440.029",
			DateWoy: "1440W05-3"
		},
		stime: 2880995400000,
		gdate: [2061, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 18] },
		gtime: 2880995400000
	},
	{
		sdate: [1440, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 31],
			DateTime: "1440-01-31 00:00:00",
			DateAber: "31 Far 1440",
			DateAberWithDate: "Tue 31 Far 1440",
			DateDoy: "1440.030",
			DateWoy: "1440W05-4"
		},
		stime: 2881081800000,
		gdate: [2061, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 19] },
		gtime: 2881081800000
	},
	{
		sdate: [1440, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 1],
			DateTime: "1440-02-01 00:00:00",
			DateAber: "01 Ord 1440",
			DateAberWithDate: "Wed 01 Ord 1440",
			DateDoy: "1440.031",
			DateWoy: "1440W05-5"
		},
		stime: 2881168200000,
		gdate: [2061, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 20] },
		gtime: 2881168200000
	},
	{
		sdate: [1440, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 2],
			DateTime: "1440-02-02 00:00:00",
			DateAber: "02 Ord 1440",
			DateAberWithDate: "Thu 02 Ord 1440",
			DateDoy: "1440.032",
			DateWoy: "1440W05-6"
		},
		stime: 2881254600000,
		gdate: [2061, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 3, 21] },
		gtime: 2881254600000
	},
	{
		sdate: [1440, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 15],
			DateTime: "1440-02-15 00:00:00",
			DateAber: "15 Ord 1440",
			DateAberWithDate: "Wed 15 Ord 1440",
			DateDoy: "1440.045",
			DateWoy: "1440W07-5"
		},
		stime: 2882377800000,
		gdate: [2061, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 4] },
		gtime: 2882377800000
	},
	{
		sdate: [1440, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 30],
			DateTime: "1440-02-30 00:00:00",
			DateAber: "30 Ord 1440",
			DateAberWithDate: "Thu 30 Ord 1440",
			DateDoy: "1440.060",
			DateWoy: "1440W09-6"
		},
		stime: 2883673800000,
		gdate: [2061, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 19] },
		gtime: 2883673800000
	},
	{
		sdate: [1440, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 31],
			DateTime: "1440-02-31 00:00:00",
			DateAber: "31 Ord 1440",
			DateAberWithDate: "Fri 31 Ord 1440",
			DateDoy: "1440.061",
			DateWoy: "1440W09-7"
		},
		stime: 2883760200000,
		gdate: [2061, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 20] },
		gtime: 2883760200000
	},
	{
		sdate: [1440, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 1],
			DateTime: "1440-03-01 00:00:00",
			DateAber: "01 Kho 1440",
			DateAberWithDate: "Sat 01 Kho 1440",
			DateDoy: "1440.062",
			DateWoy: "1440W10-1"
		},
		stime: 2883846600000,
		gdate: [2061, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 21] },
		gtime: 2883846600000
	},
	{
		sdate: [1440, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 2],
			DateTime: "1440-03-02 00:00:00",
			DateAber: "02 Kho 1440",
			DateAberWithDate: "Sun 02 Kho 1440",
			DateDoy: "1440.063",
			DateWoy: "1440W10-2"
		},
		stime: 2883933000000,
		gdate: [2061, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 4, 22] },
		gtime: 2883933000000
	},
	{
		sdate: [1440, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 15],
			DateTime: "1440-03-15 00:00:00",
			DateAber: "15 Kho 1440",
			DateAberWithDate: "Sat 15 Kho 1440",
			DateDoy: "1440.076",
			DateWoy: "1440W12-1"
		},
		stime: 2885056200000,
		gdate: [2061, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 4] },
		gtime: 2885056200000
	},
	{
		sdate: [1440, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 30],
			DateTime: "1440-03-30 00:00:00",
			DateAber: "30 Kho 1440",
			DateAberWithDate: "Sun 30 Kho 1440",
			DateDoy: "1440.091",
			DateWoy: "1440W14-2"
		},
		stime: 2886352200000,
		gdate: [2061, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 19] },
		gtime: 2886352200000
	},
	{
		sdate: [1440, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 31],
			DateTime: "1440-03-31 00:00:00",
			DateAber: "31 Kho 1440",
			DateAberWithDate: "Mon 31 Kho 1440",
			DateDoy: "1440.092",
			DateWoy: "1440W14-3"
		},
		stime: 2886438600000,
		gdate: [2061, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 20] },
		gtime: 2886438600000
	},
	{
		sdate: [1440, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 1],
			DateTime: "1440-04-01 00:00:00",
			DateAber: "01 Tir 1440",
			DateAberWithDate: "Tue 01 Tir 1440",
			DateDoy: "1440.093",
			DateWoy: "1440W14-4"
		},
		stime: 2886525000000,
		gdate: [2061, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 21] },
		gtime: 2886525000000
	},
	{
		sdate: [1440, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 2],
			DateTime: "1440-04-02 00:00:00",
			DateAber: "02 Tir 1440",
			DateAberWithDate: "Wed 02 Tir 1440",
			DateDoy: "1440.094",
			DateWoy: "1440W14-5"
		},
		stime: 2886611400000,
		gdate: [2061, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 5, 22] },
		gtime: 2886611400000
	},
	{
		sdate: [1440, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 15],
			DateTime: "1440-04-15 00:00:00",
			DateAber: "15 Tir 1440",
			DateAberWithDate: "Tue 15 Tir 1440",
			DateDoy: "1440.107",
			DateWoy: "1440W16-4"
		},
		stime: 2887734600000,
		gdate: [2061, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 5] },
		gtime: 2887734600000
	},
	{
		sdate: [1440, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 30],
			DateTime: "1440-04-30 00:00:00",
			DateAber: "30 Tir 1440",
			DateAberWithDate: "Wed 30 Tir 1440",
			DateDoy: "1440.122",
			DateWoy: "1440W18-5"
		},
		stime: 2889030600000,
		gdate: [2061, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 20] },
		gtime: 2889030600000
	},
	{
		sdate: [1440, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 31],
			DateTime: "1440-04-31 00:00:00",
			DateAber: "31 Tir 1440",
			DateAberWithDate: "Thu 31 Tir 1440",
			DateDoy: "1440.123",
			DateWoy: "1440W18-6"
		},
		stime: 2889117000000,
		gdate: [2061, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 21] },
		gtime: 2889117000000
	},
	{
		sdate: [1440, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 1],
			DateTime: "1440-05-01 00:00:00",
			DateAber: "01 Amo 1440",
			DateAberWithDate: "Fri 01 Amo 1440",
			DateDoy: "1440.124",
			DateWoy: "1440W18-7"
		},
		stime: 2889203400000,
		gdate: [2061, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 22] },
		gtime: 2889203400000
	},
	{
		sdate: [1440, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 2],
			DateTime: "1440-05-02 00:00:00",
			DateAber: "02 Amo 1440",
			DateAberWithDate: "Sat 02 Amo 1440",
			DateDoy: "1440.125",
			DateWoy: "1440W19-1"
		},
		stime: 2889289800000,
		gdate: [2061, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 6, 23] },
		gtime: 2889289800000
	},
	{
		sdate: [1440, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 15],
			DateTime: "1440-05-15 00:00:00",
			DateAber: "15 Amo 1440",
			DateAberWithDate: "Fri 15 Amo 1440",
			DateDoy: "1440.138",
			DateWoy: "1440W20-7"
		},
		stime: 2890413000000,
		gdate: [2061, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 5] },
		gtime: 2890413000000
	},
	{
		sdate: [1440, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 30],
			DateTime: "1440-05-30 00:00:00",
			DateAber: "30 Amo 1440",
			DateAberWithDate: "Sat 30 Amo 1440",
			DateDoy: "1440.153",
			DateWoy: "1440W23-1"
		},
		stime: 2891709000000,
		gdate: [2061, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 20] },
		gtime: 2891709000000
	},
	{
		sdate: [1440, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 31],
			DateTime: "1440-05-31 00:00:00",
			DateAber: "31 Amo 1440",
			DateAberWithDate: "Sun 31 Amo 1440",
			DateDoy: "1440.154",
			DateWoy: "1440W23-2"
		},
		stime: 2891795400000,
		gdate: [2061, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 21] },
		gtime: 2891795400000
	},
	{
		sdate: [1440, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 1],
			DateTime: "1440-06-01 00:00:00",
			DateAber: "01 Sha 1440",
			DateAberWithDate: "Mon 01 Sha 1440",
			DateDoy: "1440.155",
			DateWoy: "1440W23-3"
		},
		stime: 2891881800000,
		gdate: [2061, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 22] },
		gtime: 2891881800000
	},
	{
		sdate: [1440, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 2],
			DateTime: "1440-06-02 00:00:00",
			DateAber: "02 Sha 1440",
			DateAberWithDate: "Tue 02 Sha 1440",
			DateDoy: "1440.156",
			DateWoy: "1440W23-4"
		},
		stime: 2891968200000,
		gdate: [2061, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 7, 23] },
		gtime: 2891968200000
	},
	{
		sdate: [1440, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 15],
			DateTime: "1440-06-15 00:00:00",
			DateAber: "15 Sha 1440",
			DateAberWithDate: "Mon 15 Sha 1440",
			DateDoy: "1440.169",
			DateWoy: "1440W25-3"
		},
		stime: 2893091400000,
		gdate: [2061, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 5] },
		gtime: 2893091400000
	},
	{
		sdate: [1440, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 29],
			DateTime: "1440-06-29 00:00:00",
			DateAber: "29 Sha 1440",
			DateAberWithDate: "Mon 29 Sha 1440",
			DateDoy: "1440.183",
			DateWoy: "1440W27-3"
		},
		stime: 2894301000000,
		gdate: [2061, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 19] },
		gtime: 2894301000000
	},
	{
		sdate: [1440, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 30],
			DateTime: "1440-06-30 00:00:00",
			DateAber: "30 Sha 1440",
			DateAberWithDate: "Tue 30 Sha 1440",
			DateDoy: "1440.184",
			DateWoy: "1440W27-4"
		},
		stime: 2894387400000,
		gdate: [2061, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2061, 8, 20] },
		gtime: 2894387400000
	},
	{
		sdate: [1440, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 1],
			DateTime: "1440-07-01 00:00:00",
			DateAber: "01 Meh 1440",
			DateAberWithDate: "Thu 01 Meh 1440",
			DateDoy: "1440.186",
			DateWoy: "1440W27-6"
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
			DateAberWithDate: "Fri 02 Meh 1440",
			DateDoy: "1440.187",
			DateWoy: "1440W27-7"
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
			DateAberWithDate: "Thu 15 Meh 1440",
			DateDoy: "1440.200",
			DateWoy: "1440W29-6"
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
			DateAberWithDate: "Thu 29 Meh 1440",
			DateDoy: "1440.214",
			DateWoy: "1440W31-6"
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
			DateAberWithDate: "Fri 30 Meh 1440",
			DateDoy: "1440.215",
			DateWoy: "1440W31-7"
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
			DateAberWithDate: "Sat 01 Aba 1440",
			DateDoy: "1440.216",
			DateWoy: "1440W32-1"
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
			DateAberWithDate: "Sun 02 Aba 1440",
			DateDoy: "1440.217",
			DateWoy: "1440W32-2"
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
			DateAberWithDate: "Sat 15 Aba 1440",
			DateDoy: "1440.230",
			DateWoy: "1440W34-1"
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
			DateAberWithDate: "Sat 29 Aba 1440",
			DateDoy: "1440.244",
			DateWoy: "1440W36-1"
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
			DateAberWithDate: "Sun 30 Aba 1440",
			DateDoy: "1440.245",
			DateWoy: "1440W36-2"
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
			DateAberWithDate: "Mon 01 Aza 1440",
			DateDoy: "1440.246",
			DateWoy: "1440W36-3"
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
			DateAberWithDate: "Tue 02 Aza 1440",
			DateDoy: "1440.247",
			DateWoy: "1440W36-4"
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
			DateAberWithDate: "Mon 15 Aza 1440",
			DateDoy: "1440.260",
			DateWoy: "1440W38-3"
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
			DateAberWithDate: "Mon 29 Aza 1440",
			DateDoy: "1440.274",
			DateWoy: "1440W40-3"
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
			DateAberWithDate: "Tue 30 Aza 1440",
			DateDoy: "1440.275",
			DateWoy: "1440W40-4"
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
			DateAberWithDate: "Wed 01 Dey 1440",
			DateDoy: "1440.276",
			DateWoy: "1440W40-5"
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
			DateAberWithDate: "Thu 02 Dey 1440",
			DateDoy: "1440.277",
			DateWoy: "1440W40-6"
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
			DateAberWithDate: "Wed 15 Dey 1440",
			DateDoy: "1440.290",
			DateWoy: "1440W42-5"
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
			DateAberWithDate: "Wed 29 Dey 1440",
			DateDoy: "1440.304",
			DateWoy: "1440W44-5"
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
			DateAberWithDate: "Thu 30 Dey 1440",
			DateDoy: "1440.305",
			DateWoy: "1440W44-6"
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
			DateAberWithDate: "Fri 01 Bah 1440",
			DateDoy: "1440.306",
			DateWoy: "1440W44-7"
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
			DateAberWithDate: "Sat 02 Bah 1440",
			DateDoy: "1440.307",
			DateWoy: "1440W45-1"
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
			DateAberWithDate: "Fri 15 Bah 1440",
			DateDoy: "1440.320",
			DateWoy: "1440W46-7"
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
			DateAberWithDate: "Fri 29 Bah 1440",
			DateDoy: "1440.334",
			DateWoy: "1440W48-7"
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
			DateAberWithDate: "Sat 30 Bah 1440",
			DateDoy: "1440.335",
			DateWoy: "1440W49-1"
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
			DateAberWithDate: "Sun 01 Esf 1440",
			DateDoy: "1440.336",
			DateWoy: "1440W49-2"
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
			DateAberWithDate: "Mon 02 Esf 1440",
			DateDoy: "1440.337",
			DateWoy: "1440W49-3"
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
			DateAberWithDate: "Tue 03 Esf 1440",
			DateDoy: "1440.338",
			DateWoy: "1440W49-4"
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
			DateAberWithDate: "Wed 04 Esf 1440",
			DateDoy: "1440.339",
			DateWoy: "1440W49-5"
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
			DateAberWithDate: "Sun 15 Esf 1440",
			DateDoy: "1440.350",
			DateWoy: "1440W51-2"
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
			DateAberWithDate: "Wed 25 Esf 1440",
			DateDoy: "1440.360",
			DateWoy: "1440W52-5"
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
			DateAberWithDate: "Thu 26 Esf 1440",
			DateDoy: "1440.361",
			DateWoy: "1440W52-6"
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
			DateAberWithDate: "Fri 27 Esf 1440",
			DateDoy: "1440.362",
			DateWoy: "1440W52-7"
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
			DateAberWithDate: "Sat 28 Esf 1440",
			DateDoy: "1440.363",
			DateWoy: "1441W01-1"
		},
		stime: 2909853000000,
		gdate: [2062, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2062, 2, 18] },
		gtime: 2909853000000
	},

	{
		sdate: [1460, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 1],
			DateTime: "1460-01-01 00:00:00",
			DateAber: "01 Far 1460",
			DateAberWithDate: "Thu 01 Far 1460",
			DateDoy: "1460.000",
			DateWoy: "1459W52-6"
		},
		stime: 3509641800000,
		gdate: [2081, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 20] },
		gtime: 3509641800000
	},
	{
		sdate: [1460, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 2],
			DateTime: "1460-01-02 00:00:00",
			DateAber: "02 Far 1460",
			DateAberWithDate: "Fri 02 Far 1460",
			DateDoy: "1460.001",
			DateWoy: "1459W52-7"
		},
		stime: 3509728200000,
		gdate: [2081, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 21] },
		gtime: 3509728200000
	},
	{
		sdate: [1460, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 3],
			DateTime: "1460-01-03 00:00:00",
			DateAber: "03 Far 1460",
			DateAberWithDate: "Sat 03 Far 1460",
			DateDoy: "1460.002",
			DateWoy: "1460W01-1"
		},
		stime: 3509814600000,
		gdate: [2081, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 22] },
		gtime: 3509814600000
	},
	{
		sdate: [1460, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 4],
			DateTime: "1460-01-04 00:00:00",
			DateAber: "04 Far 1460",
			DateAberWithDate: "Sun 04 Far 1460",
			DateDoy: "1460.003",
			DateWoy: "1460W01-2"
		},
		stime: 3509901000000,
		gdate: [2081, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 23] },
		gtime: 3509901000000
	},
	{
		sdate: [1460, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 5],
			DateTime: "1460-01-05 00:00:00",
			DateAber: "05 Far 1460",
			DateAberWithDate: "Mon 05 Far 1460",
			DateDoy: "1460.004",
			DateWoy: "1460W01-3"
		},
		stime: 3509987400000,
		gdate: [2081, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 24] },
		gtime: 3509987400000
	},
	{
		sdate: [1460, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 6],
			DateTime: "1460-01-06 00:00:00",
			DateAber: "06 Far 1460",
			DateAberWithDate: "Tue 06 Far 1460",
			DateDoy: "1460.005",
			DateWoy: "1460W01-4"
		},
		stime: 3510073800000,
		gdate: [2081, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 25] },
		gtime: 3510073800000
	},
	{
		sdate: [1460, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 7],
			DateTime: "1460-01-07 00:00:00",
			DateAber: "07 Far 1460",
			DateAberWithDate: "Wed 07 Far 1460",
			DateDoy: "1460.006",
			DateWoy: "1460W01-5"
		},
		stime: 3510160200000,
		gdate: [2081, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 2, 26] },
		gtime: 3510160200000
	},
	{
		sdate: [1460, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 15],
			DateTime: "1460-01-15 00:00:00",
			DateAber: "15 Far 1460",
			DateAberWithDate: "Thu 15 Far 1460",
			DateDoy: "1460.014",
			DateWoy: "1460W02-6"
		},
		stime: 3510851400000,
		gdate: [2081, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 3] },
		gtime: 3510851400000
	},
	{
		sdate: [1460, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 29],
			DateTime: "1460-01-29 00:00:00",
			DateAber: "29 Far 1460",
			DateAberWithDate: "Thu 29 Far 1460",
			DateDoy: "1460.028",
			DateWoy: "1460W04-6"
		},
		stime: 3512061000000,
		gdate: [2081, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 17] },
		gtime: 3512061000000
	},
	{
		sdate: [1460, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 30],
			DateTime: "1460-01-30 00:00:00",
			DateAber: "30 Far 1460",
			DateAberWithDate: "Fri 30 Far 1460",
			DateDoy: "1460.029",
			DateWoy: "1460W04-7"
		},
		stime: 3512147400000,
		gdate: [2081, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 18] },
		gtime: 3512147400000
	},
	{
		sdate: [1460, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 31],
			DateTime: "1460-01-31 00:00:00",
			DateAber: "31 Far 1460",
			DateAberWithDate: "Sat 31 Far 1460",
			DateDoy: "1460.030",
			DateWoy: "1460W05-1"
		},
		stime: 3512233800000,
		gdate: [2081, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 19] },
		gtime: 3512233800000
	},
	{
		sdate: [1460, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 1],
			DateTime: "1460-02-01 00:00:00",
			DateAber: "01 Ord 1460",
			DateAberWithDate: "Sun 01 Ord 1460",
			DateDoy: "1460.031",
			DateWoy: "1460W05-2"
		},
		stime: 3512320200000,
		gdate: [2081, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 20] },
		gtime: 3512320200000
	},
	{
		sdate: [1460, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 2],
			DateTime: "1460-02-02 00:00:00",
			DateAber: "02 Ord 1460",
			DateAberWithDate: "Mon 02 Ord 1460",
			DateDoy: "1460.032",
			DateWoy: "1460W05-3"
		},
		stime: 3512406600000,
		gdate: [2081, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 3, 21] },
		gtime: 3512406600000
	},
	{
		sdate: [1460, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 15],
			DateTime: "1460-02-15 00:00:00",
			DateAber: "15 Ord 1460",
			DateAberWithDate: "Sun 15 Ord 1460",
			DateDoy: "1460.045",
			DateWoy: "1460W07-2"
		},
		stime: 3513529800000,
		gdate: [2081, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 4] },
		gtime: 3513529800000
	},
	{
		sdate: [1460, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 30],
			DateTime: "1460-02-30 00:00:00",
			DateAber: "30 Ord 1460",
			DateAberWithDate: "Mon 30 Ord 1460",
			DateDoy: "1460.060",
			DateWoy: "1460W09-3"
		},
		stime: 3514825800000,
		gdate: [2081, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 19] },
		gtime: 3514825800000
	},
	{
		sdate: [1460, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 31],
			DateTime: "1460-02-31 00:00:00",
			DateAber: "31 Ord 1460",
			DateAberWithDate: "Tue 31 Ord 1460",
			DateDoy: "1460.061",
			DateWoy: "1460W09-4"
		},
		stime: 3514912200000,
		gdate: [2081, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 20] },
		gtime: 3514912200000
	},
	{
		sdate: [1460, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 1],
			DateTime: "1460-03-01 00:00:00",
			DateAber: "01 Kho 1460",
			DateAberWithDate: "Wed 01 Kho 1460",
			DateDoy: "1460.062",
			DateWoy: "1460W09-5"
		},
		stime: 3514998600000,
		gdate: [2081, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 21] },
		gtime: 3514998600000
	},
	{
		sdate: [1460, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 2],
			DateTime: "1460-03-02 00:00:00",
			DateAber: "02 Kho 1460",
			DateAberWithDate: "Thu 02 Kho 1460",
			DateDoy: "1460.063",
			DateWoy: "1460W09-6"
		},
		stime: 3515085000000,
		gdate: [2081, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 4, 22] },
		gtime: 3515085000000
	},
	{
		sdate: [1460, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 15],
			DateTime: "1460-03-15 00:00:00",
			DateAber: "15 Kho 1460",
			DateAberWithDate: "Wed 15 Kho 1460",
			DateDoy: "1460.076",
			DateWoy: "1460W11-5"
		},
		stime: 3516208200000,
		gdate: [2081, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 4] },
		gtime: 3516208200000
	},
	{
		sdate: [1460, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 30],
			DateTime: "1460-03-30 00:00:00",
			DateAber: "30 Kho 1460",
			DateAberWithDate: "Thu 30 Kho 1460",
			DateDoy: "1460.091",
			DateWoy: "1460W13-6"
		},
		stime: 3517504200000,
		gdate: [2081, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 19] },
		gtime: 3517504200000
	},
	{
		sdate: [1460, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 31],
			DateTime: "1460-03-31 00:00:00",
			DateAber: "31 Kho 1460",
			DateAberWithDate: "Fri 31 Kho 1460",
			DateDoy: "1460.092",
			DateWoy: "1460W13-7"
		},
		stime: 3517590600000,
		gdate: [2081, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 20] },
		gtime: 3517590600000
	},
	{
		sdate: [1460, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 1],
			DateTime: "1460-04-01 00:00:00",
			DateAber: "01 Tir 1460",
			DateAberWithDate: "Sat 01 Tir 1460",
			DateDoy: "1460.093",
			DateWoy: "1460W14-1"
		},
		stime: 3517677000000,
		gdate: [2081, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 21] },
		gtime: 3517677000000
	},
	{
		sdate: [1460, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 2],
			DateTime: "1460-04-02 00:00:00",
			DateAber: "02 Tir 1460",
			DateAberWithDate: "Sun 02 Tir 1460",
			DateDoy: "1460.094",
			DateWoy: "1460W14-2"
		},
		stime: 3517763400000,
		gdate: [2081, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 5, 22] },
		gtime: 3517763400000
	},
	{
		sdate: [1460, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 15],
			DateTime: "1460-04-15 00:00:00",
			DateAber: "15 Tir 1460",
			DateAberWithDate: "Sat 15 Tir 1460",
			DateDoy: "1460.107",
			DateWoy: "1460W16-1"
		},
		stime: 3518886600000,
		gdate: [2081, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 5] },
		gtime: 3518886600000
	},
	{
		sdate: [1460, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 30],
			DateTime: "1460-04-30 00:00:00",
			DateAber: "30 Tir 1460",
			DateAberWithDate: "Sun 30 Tir 1460",
			DateDoy: "1460.122",
			DateWoy: "1460W18-2"
		},
		stime: 3520182600000,
		gdate: [2081, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 20] },
		gtime: 3520182600000
	},
	{
		sdate: [1460, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 31],
			DateTime: "1460-04-31 00:00:00",
			DateAber: "31 Tir 1460",
			DateAberWithDate: "Mon 31 Tir 1460",
			DateDoy: "1460.123",
			DateWoy: "1460W18-3"
		},
		stime: 3520269000000,
		gdate: [2081, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 21] },
		gtime: 3520269000000
	},
	{
		sdate: [1460, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 1],
			DateTime: "1460-05-01 00:00:00",
			DateAber: "01 Amo 1460",
			DateAberWithDate: "Tue 01 Amo 1460",
			DateDoy: "1460.124",
			DateWoy: "1460W18-4"
		},
		stime: 3520355400000,
		gdate: [2081, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 22] },
		gtime: 3520355400000
	},
	{
		sdate: [1460, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 2],
			DateTime: "1460-05-02 00:00:00",
			DateAber: "02 Amo 1460",
			DateAberWithDate: "Wed 02 Amo 1460",
			DateDoy: "1460.125",
			DateWoy: "1460W18-5"
		},
		stime: 3520441800000,
		gdate: [2081, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 6, 23] },
		gtime: 3520441800000
	},
	{
		sdate: [1460, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 15],
			DateTime: "1460-05-15 00:00:00",
			DateAber: "15 Amo 1460",
			DateAberWithDate: "Tue 15 Amo 1460",
			DateDoy: "1460.138",
			DateWoy: "1460W20-4"
		},
		stime: 3521565000000,
		gdate: [2081, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 5] },
		gtime: 3521565000000
	},
	{
		sdate: [1460, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 30],
			DateTime: "1460-05-30 00:00:00",
			DateAber: "30 Amo 1460",
			DateAberWithDate: "Wed 30 Amo 1460",
			DateDoy: "1460.153",
			DateWoy: "1460W22-5"
		},
		stime: 3522861000000,
		gdate: [2081, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 20] },
		gtime: 3522861000000
	},
	{
		sdate: [1460, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 31],
			DateTime: "1460-05-31 00:00:00",
			DateAber: "31 Amo 1460",
			DateAberWithDate: "Thu 31 Amo 1460",
			DateDoy: "1460.154",
			DateWoy: "1460W22-6"
		},
		stime: 3522947400000,
		gdate: [2081, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 21] },
		gtime: 3522947400000
	},
	{
		sdate: [1460, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 1],
			DateTime: "1460-06-01 00:00:00",
			DateAber: "01 Sha 1460",
			DateAberWithDate: "Fri 01 Sha 1460",
			DateDoy: "1460.155",
			DateWoy: "1460W22-7"
		},
		stime: 3523033800000,
		gdate: [2081, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 22] },
		gtime: 3523033800000
	},
	{
		sdate: [1460, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 2],
			DateTime: "1460-06-02 00:00:00",
			DateAber: "02 Sha 1460",
			DateAberWithDate: "Sat 02 Sha 1460",
			DateDoy: "1460.156",
			DateWoy: "1460W23-1"
		},
		stime: 3523120200000,
		gdate: [2081, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 7, 23] },
		gtime: 3523120200000
	},
	{
		sdate: [1460, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 15],
			DateTime: "1460-06-15 00:00:00",
			DateAber: "15 Sha 1460",
			DateAberWithDate: "Fri 15 Sha 1460",
			DateDoy: "1460.169",
			DateWoy: "1460W24-7"
		},
		stime: 3524243400000,
		gdate: [2081, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 5] },
		gtime: 3524243400000
	},
	{
		sdate: [1460, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 29],
			DateTime: "1460-06-29 00:00:00",
			DateAber: "29 Sha 1460",
			DateAberWithDate: "Fri 29 Sha 1460",
			DateDoy: "1460.183",
			DateWoy: "1460W26-7"
		},
		stime: 3525453000000,
		gdate: [2081, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 19] },
		gtime: 3525453000000
	},
	{
		sdate: [1460, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 30],
			DateTime: "1460-06-30 00:00:00",
			DateAber: "30 Sha 1460",
			DateAberWithDate: "Sat 30 Sha 1460",
			DateDoy: "1460.184",
			DateWoy: "1460W27-1"
		},
		stime: 3525539400000,
		gdate: [2081, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2081, 8, 20] },
		gtime: 3525539400000
	},
	{
		sdate: [1460, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 1],
			DateTime: "1460-07-01 00:00:00",
			DateAber: "01 Meh 1460",
			DateAberWithDate: "Mon 01 Meh 1460",
			DateDoy: "1460.186",
			DateWoy: "1460W27-3"
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
			DateAberWithDate: "Tue 02 Meh 1460",
			DateDoy: "1460.187",
			DateWoy: "1460W27-4"
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
			DateAberWithDate: "Mon 15 Meh 1460",
			DateDoy: "1460.200",
			DateWoy: "1460W29-3"
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
			DateAberWithDate: "Mon 29 Meh 1460",
			DateDoy: "1460.214",
			DateWoy: "1460W31-3"
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
			DateAberWithDate: "Tue 30 Meh 1460",
			DateDoy: "1460.215",
			DateWoy: "1460W31-4"
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
			DateAberWithDate: "Wed 01 Aba 1460",
			DateDoy: "1460.216",
			DateWoy: "1460W31-5"
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
			DateAberWithDate: "Thu 02 Aba 1460",
			DateDoy: "1460.217",
			DateWoy: "1460W31-6"
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
			DateAberWithDate: "Wed 15 Aba 1460",
			DateDoy: "1460.230",
			DateWoy: "1460W33-5"
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
			DateAberWithDate: "Wed 29 Aba 1460",
			DateDoy: "1460.244",
			DateWoy: "1460W35-5"
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
			DateAberWithDate: "Thu 30 Aba 1460",
			DateDoy: "1460.245",
			DateWoy: "1460W35-6"
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
			DateAberWithDate: "Fri 01 Aza 1460",
			DateDoy: "1460.246",
			DateWoy: "1460W35-7"
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
			DateAberWithDate: "Sat 02 Aza 1460",
			DateDoy: "1460.247",
			DateWoy: "1460W36-1"
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
			DateAberWithDate: "Fri 15 Aza 1460",
			DateDoy: "1460.260",
			DateWoy: "1460W37-7"
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
			DateAberWithDate: "Fri 29 Aza 1460",
			DateDoy: "1460.274",
			DateWoy: "1460W39-7"
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
			DateAberWithDate: "Sat 30 Aza 1460",
			DateDoy: "1460.275",
			DateWoy: "1460W40-1"
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
			DateAberWithDate: "Sun 01 Dey 1460",
			DateDoy: "1460.276",
			DateWoy: "1460W40-2"
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
			DateAberWithDate: "Mon 02 Dey 1460",
			DateDoy: "1460.277",
			DateWoy: "1460W40-3"
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
			DateAberWithDate: "Sun 15 Dey 1460",
			DateDoy: "1460.290",
			DateWoy: "1460W42-2"
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
			DateAberWithDate: "Sun 29 Dey 1460",
			DateDoy: "1460.304",
			DateWoy: "1460W44-2"
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
			DateAberWithDate: "Mon 30 Dey 1460",
			DateDoy: "1460.305",
			DateWoy: "1460W44-3"
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
			DateAberWithDate: "Tue 01 Bah 1460",
			DateDoy: "1460.306",
			DateWoy: "1460W44-4"
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
			DateAberWithDate: "Wed 02 Bah 1460",
			DateDoy: "1460.307",
			DateWoy: "1460W44-5"
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
			DateAberWithDate: "Tue 15 Bah 1460",
			DateDoy: "1460.320",
			DateWoy: "1460W46-4"
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
			DateAberWithDate: "Tue 29 Bah 1460",
			DateDoy: "1460.334",
			DateWoy: "1460W48-4"
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
			DateAberWithDate: "Wed 30 Bah 1460",
			DateDoy: "1460.335",
			DateWoy: "1460W48-5"
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
			DateAberWithDate: "Thu 01 Esf 1460",
			DateDoy: "1460.336",
			DateWoy: "1460W48-6"
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
			DateAberWithDate: "Fri 02 Esf 1460",
			DateDoy: "1460.337",
			DateWoy: "1460W48-7"
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
			DateAberWithDate: "Sat 03 Esf 1460",
			DateDoy: "1460.338",
			DateWoy: "1460W49-1"
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
			DateAberWithDate: "Sun 04 Esf 1460",
			DateDoy: "1460.339",
			DateWoy: "1460W49-2"
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
			DateAberWithDate: "Thu 15 Esf 1460",
			DateDoy: "1460.350",
			DateWoy: "1460W50-6"
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
			DateAberWithDate: "Sun 25 Esf 1460",
			DateDoy: "1460.360",
			DateWoy: "1460W52-2"
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
			DateAberWithDate: "Mon 26 Esf 1460",
			DateDoy: "1460.361",
			DateWoy: "1460W52-3"
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
			DateAberWithDate: "Tue 27 Esf 1460",
			DateDoy: "1460.362",
			DateWoy: "1460W52-4"
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
			DateAberWithDate: "Wed 28 Esf 1460",
			DateDoy: "1460.363",
			DateWoy: "1460W52-5"
		},
		stime: 3541005000000,
		gdate: [2082, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2082, 2, 18] },
		gtime: 3541005000000
	},

	{
		sdate: [1480, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 1],
			DateTime: "1480-01-01 00:00:00",
			DateAber: "01 Far 1480",
			DateAberWithDate: "Mon 01 Far 1480",
			DateDoy: "1480.000",
			DateWoy: "1480W01-3"
		},
		stime: 4140793800000,
		gdate: [2101, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 21] },
		gtime: 4140793800000
	},
	{
		sdate: [1480, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 2],
			DateTime: "1480-01-02 00:00:00",
			DateAber: "02 Far 1480",
			DateAberWithDate: "Tue 02 Far 1480",
			DateDoy: "1480.001",
			DateWoy: "1480W01-4"
		},
		stime: 4140880200000,
		gdate: [2101, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 22] },
		gtime: 4140880200000
	},
	{
		sdate: [1480, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 3],
			DateTime: "1480-01-03 00:00:00",
			DateAber: "03 Far 1480",
			DateAberWithDate: "Wed 03 Far 1480",
			DateDoy: "1480.002",
			DateWoy: "1480W01-5"
		},
		stime: 4140966600000,
		gdate: [2101, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 23] },
		gtime: 4140966600000
	},
	{
		sdate: [1480, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 4],
			DateTime: "1480-01-04 00:00:00",
			DateAber: "04 Far 1480",
			DateAberWithDate: "Thu 04 Far 1480",
			DateDoy: "1480.003",
			DateWoy: "1480W01-6"
		},
		stime: 4141053000000,
		gdate: [2101, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 24] },
		gtime: 4141053000000
	},
	{
		sdate: [1480, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 5],
			DateTime: "1480-01-05 00:00:00",
			DateAber: "05 Far 1480",
			DateAberWithDate: "Fri 05 Far 1480",
			DateDoy: "1480.004",
			DateWoy: "1480W01-7"
		},
		stime: 4141139400000,
		gdate: [2101, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 25] },
		gtime: 4141139400000
	},
	{
		sdate: [1480, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 6],
			DateTime: "1480-01-06 00:00:00",
			DateAber: "06 Far 1480",
			DateAberWithDate: "Sat 06 Far 1480",
			DateDoy: "1480.005",
			DateWoy: "1480W02-1"
		},
		stime: 4141225800000,
		gdate: [2101, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 26] },
		gtime: 4141225800000
	},
	{
		sdate: [1480, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 7],
			DateTime: "1480-01-07 00:00:00",
			DateAber: "07 Far 1480",
			DateAberWithDate: "Sun 07 Far 1480",
			DateDoy: "1480.006",
			DateWoy: "1480W02-2"
		},
		stime: 4141312200000,
		gdate: [2101, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 2, 27] },
		gtime: 4141312200000
	},
	{
		sdate: [1480, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 15],
			DateTime: "1480-01-15 00:00:00",
			DateAber: "15 Far 1480",
			DateAberWithDate: "Mon 15 Far 1480",
			DateDoy: "1480.014",
			DateWoy: "1480W03-3"
		},
		stime: 4142003400000,
		gdate: [2101, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 4] },
		gtime: 4142003400000
	},
	{
		sdate: [1480, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 29],
			DateTime: "1480-01-29 00:00:00",
			DateAber: "29 Far 1480",
			DateAberWithDate: "Mon 29 Far 1480",
			DateDoy: "1480.028",
			DateWoy: "1480W05-3"
		},
		stime: 4143213000000,
		gdate: [2101, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 18] },
		gtime: 4143213000000
	},
	{
		sdate: [1480, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 30],
			DateTime: "1480-01-30 00:00:00",
			DateAber: "30 Far 1480",
			DateAberWithDate: "Tue 30 Far 1480",
			DateDoy: "1480.029",
			DateWoy: "1480W05-4"
		},
		stime: 4143299400000,
		gdate: [2101, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 19] },
		gtime: 4143299400000
	},
	{
		sdate: [1480, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 31],
			DateTime: "1480-01-31 00:00:00",
			DateAber: "31 Far 1480",
			DateAberWithDate: "Wed 31 Far 1480",
			DateDoy: "1480.030",
			DateWoy: "1480W05-5"
		},
		stime: 4143385800000,
		gdate: [2101, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 20] },
		gtime: 4143385800000
	},
	{
		sdate: [1480, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 1],
			DateTime: "1480-02-01 00:00:00",
			DateAber: "01 Ord 1480",
			DateAberWithDate: "Thu 01 Ord 1480",
			DateDoy: "1480.031",
			DateWoy: "1480W05-6"
		},
		stime: 4143472200000,
		gdate: [2101, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 21] },
		gtime: 4143472200000
	},
	{
		sdate: [1480, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 2],
			DateTime: "1480-02-02 00:00:00",
			DateAber: "02 Ord 1480",
			DateAberWithDate: "Fri 02 Ord 1480",
			DateDoy: "1480.032",
			DateWoy: "1480W05-7"
		},
		stime: 4143558600000,
		gdate: [2101, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 3, 22] },
		gtime: 4143558600000
	},
	{
		sdate: [1480, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 15],
			DateTime: "1480-02-15 00:00:00",
			DateAber: "15 Ord 1480",
			DateAberWithDate: "Thu 15 Ord 1480",
			DateDoy: "1480.045",
			DateWoy: "1480W07-6"
		},
		stime: 4144681800000,
		gdate: [2101, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 5] },
		gtime: 4144681800000
	},
	{
		sdate: [1480, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 30],
			DateTime: "1480-02-30 00:00:00",
			DateAber: "30 Ord 1480",
			DateAberWithDate: "Fri 30 Ord 1480",
			DateDoy: "1480.060",
			DateWoy: "1480W09-7"
		},
		stime: 4145977800000,
		gdate: [2101, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 20] },
		gtime: 4145977800000
	},
	{
		sdate: [1480, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 31],
			DateTime: "1480-02-31 00:00:00",
			DateAber: "31 Ord 1480",
			DateAberWithDate: "Sat 31 Ord 1480",
			DateDoy: "1480.061",
			DateWoy: "1480W10-1"
		},
		stime: 4146064200000,
		gdate: [2101, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 21] },
		gtime: 4146064200000
	},
	{
		sdate: [1480, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 1],
			DateTime: "1480-03-01 00:00:00",
			DateAber: "01 Kho 1480",
			DateAberWithDate: "Sun 01 Kho 1480",
			DateDoy: "1480.062",
			DateWoy: "1480W10-2"
		},
		stime: 4146150600000,
		gdate: [2101, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 22] },
		gtime: 4146150600000
	},
	{
		sdate: [1480, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 2],
			DateTime: "1480-03-02 00:00:00",
			DateAber: "02 Kho 1480",
			DateAberWithDate: "Mon 02 Kho 1480",
			DateDoy: "1480.063",
			DateWoy: "1480W10-3"
		},
		stime: 4146237000000,
		gdate: [2101, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 4, 23] },
		gtime: 4146237000000
	},
	{
		sdate: [1480, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 15],
			DateTime: "1480-03-15 00:00:00",
			DateAber: "15 Kho 1480",
			DateAberWithDate: "Sun 15 Kho 1480",
			DateDoy: "1480.076",
			DateWoy: "1480W12-2"
		},
		stime: 4147360200000,
		gdate: [2101, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 5] },
		gtime: 4147360200000
	},
	{
		sdate: [1480, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 30],
			DateTime: "1480-03-30 00:00:00",
			DateAber: "30 Kho 1480",
			DateAberWithDate: "Mon 30 Kho 1480",
			DateDoy: "1480.091",
			DateWoy: "1480W14-3"
		},
		stime: 4148656200000,
		gdate: [2101, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 20] },
		gtime: 4148656200000
	},
	{
		sdate: [1480, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 31],
			DateTime: "1480-03-31 00:00:00",
			DateAber: "31 Kho 1480",
			DateAberWithDate: "Tue 31 Kho 1480",
			DateDoy: "1480.092",
			DateWoy: "1480W14-4"
		},
		stime: 4148742600000,
		gdate: [2101, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 21] },
		gtime: 4148742600000
	},
	{
		sdate: [1480, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 1],
			DateTime: "1480-04-01 00:00:00",
			DateAber: "01 Tir 1480",
			DateAberWithDate: "Wed 01 Tir 1480",
			DateDoy: "1480.093",
			DateWoy: "1480W14-5"
		},
		stime: 4148829000000,
		gdate: [2101, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 22] },
		gtime: 4148829000000
	},
	{
		sdate: [1480, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 2],
			DateTime: "1480-04-02 00:00:00",
			DateAber: "02 Tir 1480",
			DateAberWithDate: "Thu 02 Tir 1480",
			DateDoy: "1480.094",
			DateWoy: "1480W14-6"
		},
		stime: 4148915400000,
		gdate: [2101, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 5, 23] },
		gtime: 4148915400000
	},
	{
		sdate: [1480, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 15],
			DateTime: "1480-04-15 00:00:00",
			DateAber: "15 Tir 1480",
			DateAberWithDate: "Wed 15 Tir 1480",
			DateDoy: "1480.107",
			DateWoy: "1480W16-5"
		},
		stime: 4150038600000,
		gdate: [2101, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 6] },
		gtime: 4150038600000
	},
	{
		sdate: [1480, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 30],
			DateTime: "1480-04-30 00:00:00",
			DateAber: "30 Tir 1480",
			DateAberWithDate: "Thu 30 Tir 1480",
			DateDoy: "1480.122",
			DateWoy: "1480W18-6"
		},
		stime: 4151334600000,
		gdate: [2101, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 21] },
		gtime: 4151334600000
	},
	{
		sdate: [1480, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 31],
			DateTime: "1480-04-31 00:00:00",
			DateAber: "31 Tir 1480",
			DateAberWithDate: "Fri 31 Tir 1480",
			DateDoy: "1480.123",
			DateWoy: "1480W18-7"
		},
		stime: 4151421000000,
		gdate: [2101, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 22] },
		gtime: 4151421000000
	},
	{
		sdate: [1480, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 1],
			DateTime: "1480-05-01 00:00:00",
			DateAber: "01 Amo 1480",
			DateAberWithDate: "Sat 01 Amo 1480",
			DateDoy: "1480.124",
			DateWoy: "1480W19-1"
		},
		stime: 4151507400000,
		gdate: [2101, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 23] },
		gtime: 4151507400000
	},
	{
		sdate: [1480, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 2],
			DateTime: "1480-05-02 00:00:00",
			DateAber: "02 Amo 1480",
			DateAberWithDate: "Sun 02 Amo 1480",
			DateDoy: "1480.125",
			DateWoy: "1480W19-2"
		},
		stime: 4151593800000,
		gdate: [2101, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 6, 24] },
		gtime: 4151593800000
	},
	{
		sdate: [1480, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 15],
			DateTime: "1480-05-15 00:00:00",
			DateAber: "15 Amo 1480",
			DateAberWithDate: "Sat 15 Amo 1480",
			DateDoy: "1480.138",
			DateWoy: "1480W21-1"
		},
		stime: 4152717000000,
		gdate: [2101, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 6] },
		gtime: 4152717000000
	},
	{
		sdate: [1480, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 30],
			DateTime: "1480-05-30 00:00:00",
			DateAber: "30 Amo 1480",
			DateAberWithDate: "Sun 30 Amo 1480",
			DateDoy: "1480.153",
			DateWoy: "1480W23-2"
		},
		stime: 4154013000000,
		gdate: [2101, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 21] },
		gtime: 4154013000000
	},
	{
		sdate: [1480, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 31],
			DateTime: "1480-05-31 00:00:00",
			DateAber: "31 Amo 1480",
			DateAberWithDate: "Mon 31 Amo 1480",
			DateDoy: "1480.154",
			DateWoy: "1480W23-3"
		},
		stime: 4154099400000,
		gdate: [2101, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 22] },
		gtime: 4154099400000
	},
	{
		sdate: [1480, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 1],
			DateTime: "1480-06-01 00:00:00",
			DateAber: "01 Sha 1480",
			DateAberWithDate: "Tue 01 Sha 1480",
			DateDoy: "1480.155",
			DateWoy: "1480W23-4"
		},
		stime: 4154185800000,
		gdate: [2101, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 23] },
		gtime: 4154185800000
	},
	{
		sdate: [1480, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 2],
			DateTime: "1480-06-02 00:00:00",
			DateAber: "02 Sha 1480",
			DateAberWithDate: "Wed 02 Sha 1480",
			DateDoy: "1480.156",
			DateWoy: "1480W23-5"
		},
		stime: 4154272200000,
		gdate: [2101, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 7, 24] },
		gtime: 4154272200000
	},
	{
		sdate: [1480, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 15],
			DateTime: "1480-06-15 00:00:00",
			DateAber: "15 Sha 1480",
			DateAberWithDate: "Tue 15 Sha 1480",
			DateDoy: "1480.169",
			DateWoy: "1480W25-4"
		},
		stime: 4155395400000,
		gdate: [2101, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 8, 6] },
		gtime: 4155395400000
	},
	{
		sdate: [1480, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 29],
			DateTime: "1480-06-29 00:00:00",
			DateAber: "29 Sha 1480",
			DateAberWithDate: "Tue 29 Sha 1480",
			DateDoy: "1480.183",
			DateWoy: "1480W27-4"
		},
		stime: 4156605000000,
		gdate: [2101, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2101, 8, 20] },
		gtime: 4156605000000
	},
	{
		sdate: [1480, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 30],
			DateTime: "1480-06-30 00:00:00",
			DateAber: "30 Sha 1480",
			DateAberWithDate: "Wed 30 Sha 1480",
			DateDoy: "1480.184",
			DateWoy: "1480W27-5"
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
			DateAberWithDate: "Fri 01 Meh 1480",
			DateDoy: "1480.186",
			DateWoy: "1480W27-7"
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
			DateAberWithDate: "Sat 02 Meh 1480",
			DateDoy: "1480.187",
			DateWoy: "1480W28-1"
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
			DateAberWithDate: "Fri 15 Meh 1480",
			DateDoy: "1480.200",
			DateWoy: "1480W29-7"
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
			DateAberWithDate: "Fri 29 Meh 1480",
			DateDoy: "1480.214",
			DateWoy: "1480W31-7"
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
			DateAberWithDate: "Sat 30 Meh 1480",
			DateDoy: "1480.215",
			DateWoy: "1480W32-1"
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
			DateAberWithDate: "Sun 01 Aba 1480",
			DateDoy: "1480.216",
			DateWoy: "1480W32-2"
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
			DateAberWithDate: "Mon 02 Aba 1480",
			DateDoy: "1480.217",
			DateWoy: "1480W32-3"
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
			DateAberWithDate: "Sun 15 Aba 1480",
			DateDoy: "1480.230",
			DateWoy: "1480W34-2"
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
			DateAberWithDate: "Sun 29 Aba 1480",
			DateDoy: "1480.244",
			DateWoy: "1480W36-2"
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
			DateAberWithDate: "Mon 30 Aba 1480",
			DateDoy: "1480.245",
			DateWoy: "1480W36-3"
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
			DateAberWithDate: "Tue 01 Aza 1480",
			DateDoy: "1480.246",
			DateWoy: "1480W36-4"
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
			DateAberWithDate: "Wed 02 Aza 1480",
			DateDoy: "1480.247",
			DateWoy: "1480W36-5"
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
			DateAberWithDate: "Tue 15 Aza 1480",
			DateDoy: "1480.260",
			DateWoy: "1480W38-4"
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
			DateAberWithDate: "Tue 29 Aza 1480",
			DateDoy: "1480.274",
			DateWoy: "1480W40-4"
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
			DateAberWithDate: "Wed 30 Aza 1480",
			DateDoy: "1480.275",
			DateWoy: "1480W40-5"
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
			DateAberWithDate: "Thu 01 Dey 1480",
			DateDoy: "1480.276",
			DateWoy: "1480W40-6"
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
			DateAberWithDate: "Fri 02 Dey 1480",
			DateDoy: "1480.277",
			DateWoy: "1480W40-7"
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
			DateAberWithDate: "Thu 15 Dey 1480",
			DateDoy: "1480.290",
			DateWoy: "1480W42-6"
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
			DateAberWithDate: "Thu 29 Dey 1480",
			DateDoy: "1480.304",
			DateWoy: "1480W44-6"
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
			DateAberWithDate: "Fri 30 Dey 1480",
			DateDoy: "1480.305",
			DateWoy: "1480W44-7"
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
			DateAberWithDate: "Sat 01 Bah 1480",
			DateDoy: "1480.306",
			DateWoy: "1480W45-1"
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
			DateAberWithDate: "Sun 02 Bah 1480",
			DateDoy: "1480.307",
			DateWoy: "1480W45-2"
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
			DateAberWithDate: "Sat 15 Bah 1480",
			DateDoy: "1480.320",
			DateWoy: "1480W47-1"
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
			DateAberWithDate: "Sat 29 Bah 1480",
			DateDoy: "1480.334",
			DateWoy: "1480W49-1"
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
			DateAberWithDate: "Sun 30 Bah 1480",
			DateDoy: "1480.335",
			DateWoy: "1480W49-2"
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
			DateAberWithDate: "Mon 01 Esf 1480",
			DateDoy: "1480.336",
			DateWoy: "1480W49-3"
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
			DateAberWithDate: "Tue 02 Esf 1480",
			DateDoy: "1480.337",
			DateWoy: "1480W49-4"
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
			DateAberWithDate: "Wed 03 Esf 1480",
			DateDoy: "1480.338",
			DateWoy: "1480W49-5"
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
			DateAberWithDate: "Thu 04 Esf 1480",
			DateDoy: "1480.339",
			DateWoy: "1480W49-6"
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
			DateAberWithDate: "Mon 15 Esf 1480",
			DateDoy: "1480.350",
			DateWoy: "1480W51-3"
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
			DateAberWithDate: "Thu 25 Esf 1480",
			DateDoy: "1480.360",
			DateWoy: "1480W52-6"
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
			DateAberWithDate: "Fri 26 Esf 1480",
			DateDoy: "1480.361",
			DateWoy: "1480W52-7"
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
			DateAberWithDate: "Sat 27 Esf 1480",
			DateDoy: "1480.362",
			DateWoy: "1481W01-1"
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
			DateAberWithDate: "Sun 28 Esf 1480",
			DateDoy: "1480.363",
			DateWoy: "1481W01-2"
		},
		stime: 4172157000000,
		gdate: [2102, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2102, 2, 19] },
		gtime: 4172157000000
	},

	{
		sdate: [1500, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 1],
			DateTime: "1500-01-01 00:00:00",
			DateAber: "01 Far 1500",
			DateAberWithDate: "Fri 01 Far 1500",
			DateDoy: "1500.000",
			DateWoy: "1499W52-7"
		},
		stime: 4771945800000,
		gdate: [2121, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 21] },
		gtime: 4771945800000
	},
	{
		sdate: [1500, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 2],
			DateTime: "1500-01-02 00:00:00",
			DateAber: "02 Far 1500",
			DateAberWithDate: "Sat 02 Far 1500",
			DateDoy: "1500.001",
			DateWoy: "1500W01-1"
		},
		stime: 4772032200000,
		gdate: [2121, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 22] },
		gtime: 4772032200000
	},
	{
		sdate: [1500, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 3],
			DateTime: "1500-01-03 00:00:00",
			DateAber: "03 Far 1500",
			DateAberWithDate: "Sun 03 Far 1500",
			DateDoy: "1500.002",
			DateWoy: "1500W01-2"
		},
		stime: 4772118600000,
		gdate: [2121, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 23] },
		gtime: 4772118600000
	},
	{
		sdate: [1500, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 4],
			DateTime: "1500-01-04 00:00:00",
			DateAber: "04 Far 1500",
			DateAberWithDate: "Mon 04 Far 1500",
			DateDoy: "1500.003",
			DateWoy: "1500W01-3"
		},
		stime: 4772205000000,
		gdate: [2121, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 24] },
		gtime: 4772205000000
	},
	{
		sdate: [1500, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 5],
			DateTime: "1500-01-05 00:00:00",
			DateAber: "05 Far 1500",
			DateAberWithDate: "Tue 05 Far 1500",
			DateDoy: "1500.004",
			DateWoy: "1500W01-4"
		},
		stime: 4772291400000,
		gdate: [2121, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 25] },
		gtime: 4772291400000
	},
	{
		sdate: [1500, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 6],
			DateTime: "1500-01-06 00:00:00",
			DateAber: "06 Far 1500",
			DateAberWithDate: "Wed 06 Far 1500",
			DateDoy: "1500.005",
			DateWoy: "1500W01-5"
		},
		stime: 4772377800000,
		gdate: [2121, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 26] },
		gtime: 4772377800000
	},
	{
		sdate: [1500, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 7],
			DateTime: "1500-01-07 00:00:00",
			DateAber: "07 Far 1500",
			DateAberWithDate: "Thu 07 Far 1500",
			DateDoy: "1500.006",
			DateWoy: "1500W01-6"
		},
		stime: 4772464200000,
		gdate: [2121, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 2, 27] },
		gtime: 4772464200000
	},
	{
		sdate: [1500, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 15],
			DateTime: "1500-01-15 00:00:00",
			DateAber: "15 Far 1500",
			DateAberWithDate: "Fri 15 Far 1500",
			DateDoy: "1500.014",
			DateWoy: "1500W02-7"
		},
		stime: 4773155400000,
		gdate: [2121, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 4] },
		gtime: 4773155400000
	},
	{
		sdate: [1500, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 29],
			DateTime: "1500-01-29 00:00:00",
			DateAber: "29 Far 1500",
			DateAberWithDate: "Fri 29 Far 1500",
			DateDoy: "1500.028",
			DateWoy: "1500W04-7"
		},
		stime: 4774365000000,
		gdate: [2121, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 18] },
		gtime: 4774365000000
	},
	{
		sdate: [1500, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 30],
			DateTime: "1500-01-30 00:00:00",
			DateAber: "30 Far 1500",
			DateAberWithDate: "Sat 30 Far 1500",
			DateDoy: "1500.029",
			DateWoy: "1500W05-1"
		},
		stime: 4774451400000,
		gdate: [2121, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 19] },
		gtime: 4774451400000
	},
	{
		sdate: [1500, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 31],
			DateTime: "1500-01-31 00:00:00",
			DateAber: "31 Far 1500",
			DateAberWithDate: "Sun 31 Far 1500",
			DateDoy: "1500.030",
			DateWoy: "1500W05-2"
		},
		stime: 4774537800000,
		gdate: [2121, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 20] },
		gtime: 4774537800000
	},
	{
		sdate: [1500, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 1],
			DateTime: "1500-02-01 00:00:00",
			DateAber: "01 Ord 1500",
			DateAberWithDate: "Mon 01 Ord 1500",
			DateDoy: "1500.031",
			DateWoy: "1500W05-3"
		},
		stime: 4774624200000,
		gdate: [2121, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 21] },
		gtime: 4774624200000
	},
	{
		sdate: [1500, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 2],
			DateTime: "1500-02-02 00:00:00",
			DateAber: "02 Ord 1500",
			DateAberWithDate: "Tue 02 Ord 1500",
			DateDoy: "1500.032",
			DateWoy: "1500W05-4"
		},
		stime: 4774710600000,
		gdate: [2121, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 3, 22] },
		gtime: 4774710600000
	},
	{
		sdate: [1500, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 15],
			DateTime: "1500-02-15 00:00:00",
			DateAber: "15 Ord 1500",
			DateAberWithDate: "Mon 15 Ord 1500",
			DateDoy: "1500.045",
			DateWoy: "1500W07-3"
		},
		stime: 4775833800000,
		gdate: [2121, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 5] },
		gtime: 4775833800000
	},
	{
		sdate: [1500, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 30],
			DateTime: "1500-02-30 00:00:00",
			DateAber: "30 Ord 1500",
			DateAberWithDate: "Tue 30 Ord 1500",
			DateDoy: "1500.060",
			DateWoy: "1500W09-4"
		},
		stime: 4777129800000,
		gdate: [2121, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 20] },
		gtime: 4777129800000
	},
	{
		sdate: [1500, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 31],
			DateTime: "1500-02-31 00:00:00",
			DateAber: "31 Ord 1500",
			DateAberWithDate: "Wed 31 Ord 1500",
			DateDoy: "1500.061",
			DateWoy: "1500W09-5"
		},
		stime: 4777216200000,
		gdate: [2121, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 21] },
		gtime: 4777216200000
	},
	{
		sdate: [1500, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 1],
			DateTime: "1500-03-01 00:00:00",
			DateAber: "01 Kho 1500",
			DateAberWithDate: "Thu 01 Kho 1500",
			DateDoy: "1500.062",
			DateWoy: "1500W09-6"
		},
		stime: 4777302600000,
		gdate: [2121, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 22] },
		gtime: 4777302600000
	},
	{
		sdate: [1500, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 2],
			DateTime: "1500-03-02 00:00:00",
			DateAber: "02 Kho 1500",
			DateAberWithDate: "Fri 02 Kho 1500",
			DateDoy: "1500.063",
			DateWoy: "1500W09-7"
		},
		stime: 4777389000000,
		gdate: [2121, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 4, 23] },
		gtime: 4777389000000
	},
	{
		sdate: [1500, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 15],
			DateTime: "1500-03-15 00:00:00",
			DateAber: "15 Kho 1500",
			DateAberWithDate: "Thu 15 Kho 1500",
			DateDoy: "1500.076",
			DateWoy: "1500W11-6"
		},
		stime: 4778512200000,
		gdate: [2121, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 5] },
		gtime: 4778512200000
	},
	{
		sdate: [1500, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 30],
			DateTime: "1500-03-30 00:00:00",
			DateAber: "30 Kho 1500",
			DateAberWithDate: "Fri 30 Kho 1500",
			DateDoy: "1500.091",
			DateWoy: "1500W13-7"
		},
		stime: 4779808200000,
		gdate: [2121, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 20] },
		gtime: 4779808200000
	},
	{
		sdate: [1500, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 31],
			DateTime: "1500-03-31 00:00:00",
			DateAber: "31 Kho 1500",
			DateAberWithDate: "Sat 31 Kho 1500",
			DateDoy: "1500.092",
			DateWoy: "1500W14-1"
		},
		stime: 4779894600000,
		gdate: [2121, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 21] },
		gtime: 4779894600000
	},
	{
		sdate: [1500, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 1],
			DateTime: "1500-04-01 00:00:00",
			DateAber: "01 Tir 1500",
			DateAberWithDate: "Sun 01 Tir 1500",
			DateDoy: "1500.093",
			DateWoy: "1500W14-2"
		},
		stime: 4779981000000,
		gdate: [2121, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 22] },
		gtime: 4779981000000
	},
	{
		sdate: [1500, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 2],
			DateTime: "1500-04-02 00:00:00",
			DateAber: "02 Tir 1500",
			DateAberWithDate: "Mon 02 Tir 1500",
			DateDoy: "1500.094",
			DateWoy: "1500W14-3"
		},
		stime: 4780067400000,
		gdate: [2121, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 5, 23] },
		gtime: 4780067400000
	},
	{
		sdate: [1500, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 15],
			DateTime: "1500-04-15 00:00:00",
			DateAber: "15 Tir 1500",
			DateAberWithDate: "Sun 15 Tir 1500",
			DateDoy: "1500.107",
			DateWoy: "1500W16-2"
		},
		stime: 4781190600000,
		gdate: [2121, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 6] },
		gtime: 4781190600000
	},
	{
		sdate: [1500, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 30],
			DateTime: "1500-04-30 00:00:00",
			DateAber: "30 Tir 1500",
			DateAberWithDate: "Mon 30 Tir 1500",
			DateDoy: "1500.122",
			DateWoy: "1500W18-3"
		},
		stime: 4782486600000,
		gdate: [2121, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 21] },
		gtime: 4782486600000
	},
	{
		sdate: [1500, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 31],
			DateTime: "1500-04-31 00:00:00",
			DateAber: "31 Tir 1500",
			DateAberWithDate: "Tue 31 Tir 1500",
			DateDoy: "1500.123",
			DateWoy: "1500W18-4"
		},
		stime: 4782573000000,
		gdate: [2121, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 22] },
		gtime: 4782573000000
	},
	{
		sdate: [1500, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 1],
			DateTime: "1500-05-01 00:00:00",
			DateAber: "01 Amo 1500",
			DateAberWithDate: "Wed 01 Amo 1500",
			DateDoy: "1500.124",
			DateWoy: "1500W18-5"
		},
		stime: 4782659400000,
		gdate: [2121, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 23] },
		gtime: 4782659400000
	},
	{
		sdate: [1500, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 2],
			DateTime: "1500-05-02 00:00:00",
			DateAber: "02 Amo 1500",
			DateAberWithDate: "Thu 02 Amo 1500",
			DateDoy: "1500.125",
			DateWoy: "1500W18-6"
		},
		stime: 4782745800000,
		gdate: [2121, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 6, 24] },
		gtime: 4782745800000
	},
	{
		sdate: [1500, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 15],
			DateTime: "1500-05-15 00:00:00",
			DateAber: "15 Amo 1500",
			DateAberWithDate: "Wed 15 Amo 1500",
			DateDoy: "1500.138",
			DateWoy: "1500W20-5"
		},
		stime: 4783869000000,
		gdate: [2121, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 6] },
		gtime: 4783869000000
	},
	{
		sdate: [1500, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 30],
			DateTime: "1500-05-30 00:00:00",
			DateAber: "30 Amo 1500",
			DateAberWithDate: "Thu 30 Amo 1500",
			DateDoy: "1500.153",
			DateWoy: "1500W22-6"
		},
		stime: 4785165000000,
		gdate: [2121, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 21] },
		gtime: 4785165000000
	},
	{
		sdate: [1500, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 31],
			DateTime: "1500-05-31 00:00:00",
			DateAber: "31 Amo 1500",
			DateAberWithDate: "Fri 31 Amo 1500",
			DateDoy: "1500.154",
			DateWoy: "1500W22-7"
		},
		stime: 4785251400000,
		gdate: [2121, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 22] },
		gtime: 4785251400000
	},
	{
		sdate: [1500, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 1],
			DateTime: "1500-06-01 00:00:00",
			DateAber: "01 Sha 1500",
			DateAberWithDate: "Sat 01 Sha 1500",
			DateDoy: "1500.155",
			DateWoy: "1500W23-1"
		},
		stime: 4785337800000,
		gdate: [2121, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 23] },
		gtime: 4785337800000
	},
	{
		sdate: [1500, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 2],
			DateTime: "1500-06-02 00:00:00",
			DateAber: "02 Sha 1500",
			DateAberWithDate: "Sun 02 Sha 1500",
			DateDoy: "1500.156",
			DateWoy: "1500W23-2"
		},
		stime: 4785424200000,
		gdate: [2121, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 7, 24] },
		gtime: 4785424200000
	},
	{
		sdate: [1500, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 15],
			DateTime: "1500-06-15 00:00:00",
			DateAber: "15 Sha 1500",
			DateAberWithDate: "Sat 15 Sha 1500",
			DateDoy: "1500.169",
			DateWoy: "1500W25-1"
		},
		stime: 4786547400000,
		gdate: [2121, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 8, 6] },
		gtime: 4786547400000
	},
	{
		sdate: [1500, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 29],
			DateTime: "1500-06-29 00:00:00",
			DateAber: "29 Sha 1500",
			DateAberWithDate: "Sat 29 Sha 1500",
			DateDoy: "1500.183",
			DateWoy: "1500W27-1"
		},
		stime: 4787757000000,
		gdate: [2121, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2121, 8, 20] },
		gtime: 4787757000000
	},
	{
		sdate: [1500, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 30],
			DateTime: "1500-06-30 00:00:00",
			DateAber: "30 Sha 1500",
			DateAberWithDate: "Sun 30 Sha 1500",
			DateDoy: "1500.184",
			DateWoy: "1500W27-2"
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
			DateAberWithDate: "Tue 01 Meh 1500",
			DateDoy: "1500.186",
			DateWoy: "1500W27-4"
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
			DateAberWithDate: "Wed 02 Meh 1500",
			DateDoy: "1500.187",
			DateWoy: "1500W27-5"
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
			DateAberWithDate: "Tue 15 Meh 1500",
			DateDoy: "1500.200",
			DateWoy: "1500W29-4"
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
			DateAberWithDate: "Tue 29 Meh 1500",
			DateDoy: "1500.214",
			DateWoy: "1500W31-4"
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
			DateAberWithDate: "Wed 30 Meh 1500",
			DateDoy: "1500.215",
			DateWoy: "1500W31-5"
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
			DateAberWithDate: "Thu 01 Aba 1500",
			DateDoy: "1500.216",
			DateWoy: "1500W31-6"
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
			DateAberWithDate: "Fri 02 Aba 1500",
			DateDoy: "1500.217",
			DateWoy: "1500W31-7"
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
			DateAberWithDate: "Thu 15 Aba 1500",
			DateDoy: "1500.230",
			DateWoy: "1500W33-6"
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
			DateAberWithDate: "Thu 29 Aba 1500",
			DateDoy: "1500.244",
			DateWoy: "1500W35-6"
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
			DateAberWithDate: "Fri 30 Aba 1500",
			DateDoy: "1500.245",
			DateWoy: "1500W35-7"
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
			DateAberWithDate: "Sat 01 Aza 1500",
			DateDoy: "1500.246",
			DateWoy: "1500W36-1"
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
			DateAberWithDate: "Sun 02 Aza 1500",
			DateDoy: "1500.247",
			DateWoy: "1500W36-2"
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
			DateAberWithDate: "Sat 15 Aza 1500",
			DateDoy: "1500.260",
			DateWoy: "1500W38-1"
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
			DateAberWithDate: "Sat 29 Aza 1500",
			DateDoy: "1500.274",
			DateWoy: "1500W40-1"
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
			DateAberWithDate: "Sun 30 Aza 1500",
			DateDoy: "1500.275",
			DateWoy: "1500W40-2"
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
			DateAberWithDate: "Mon 01 Dey 1500",
			DateDoy: "1500.276",
			DateWoy: "1500W40-3"
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
			DateAberWithDate: "Tue 02 Dey 1500",
			DateDoy: "1500.277",
			DateWoy: "1500W40-4"
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
			DateAberWithDate: "Mon 15 Dey 1500",
			DateDoy: "1500.290",
			DateWoy: "1500W42-3"
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
			DateAberWithDate: "Mon 29 Dey 1500",
			DateDoy: "1500.304",
			DateWoy: "1500W44-3"
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
			DateAberWithDate: "Tue 30 Dey 1500",
			DateDoy: "1500.305",
			DateWoy: "1500W44-4"
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
			DateAberWithDate: "Wed 01 Bah 1500",
			DateDoy: "1500.306",
			DateWoy: "1500W44-5"
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
			DateAberWithDate: "Thu 02 Bah 1500",
			DateDoy: "1500.307",
			DateWoy: "1500W44-6"
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
			DateAberWithDate: "Wed 15 Bah 1500",
			DateDoy: "1500.320",
			DateWoy: "1500W46-5"
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
			DateAberWithDate: "Wed 29 Bah 1500",
			DateDoy: "1500.334",
			DateWoy: "1500W48-5"
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
			DateAberWithDate: "Thu 30 Bah 1500",
			DateDoy: "1500.335",
			DateWoy: "1500W48-6"
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
			DateAberWithDate: "Fri 01 Esf 1500",
			DateDoy: "1500.336",
			DateWoy: "1500W48-7"
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
			DateAberWithDate: "Sat 02 Esf 1500",
			DateDoy: "1500.337",
			DateWoy: "1500W49-1"
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
			DateAberWithDate: "Sun 03 Esf 1500",
			DateDoy: "1500.338",
			DateWoy: "1500W49-2"
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
			DateAberWithDate: "Mon 04 Esf 1500",
			DateDoy: "1500.339",
			DateWoy: "1500W49-3"
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
			DateAberWithDate: "Fri 15 Esf 1500",
			DateDoy: "1500.350",
			DateWoy: "1500W50-7"
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
			DateAberWithDate: "Mon 25 Esf 1500",
			DateDoy: "1500.360",
			DateWoy: "1500W52-3"
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
			DateAberWithDate: "Tue 26 Esf 1500",
			DateDoy: "1500.361",
			DateWoy: "1500W52-4"
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
			DateAberWithDate: "Wed 27 Esf 1500",
			DateDoy: "1500.362",
			DateWoy: "1500W52-5"
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
			DateAberWithDate: "Thu 28 Esf 1500",
			DateDoy: "1500.363",
			DateWoy: "1500W52-6"
		},
		stime: 4803309000000,
		gdate: [2122, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2122, 2, 19] },
		gtime: 4803309000000
	},

	{
		sdate: [1520, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 1],
			DateTime: "1520-01-01 00:00:00",
			DateAber: "01 Far 1520",
			DateAberWithDate: "Tue 01 Far 1520",
			DateDoy: "1520.000",
			DateWoy: "1520W01-4"
		},
		stime: 5403097800000,
		gdate: [2141, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 21] },
		gtime: 5403097800000
	},
	{
		sdate: [1520, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 2],
			DateTime: "1520-01-02 00:00:00",
			DateAber: "02 Far 1520",
			DateAberWithDate: "Wed 02 Far 1520",
			DateDoy: "1520.001",
			DateWoy: "1520W01-5"
		},
		stime: 5403184200000,
		gdate: [2141, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 22] },
		gtime: 5403184200000
	},
	{
		sdate: [1520, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 3],
			DateTime: "1520-01-03 00:00:00",
			DateAber: "03 Far 1520",
			DateAberWithDate: "Thu 03 Far 1520",
			DateDoy: "1520.002",
			DateWoy: "1520W01-6"
		},
		stime: 5403270600000,
		gdate: [2141, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 23] },
		gtime: 5403270600000
	},
	{
		sdate: [1520, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 4],
			DateTime: "1520-01-04 00:00:00",
			DateAber: "04 Far 1520",
			DateAberWithDate: "Fri 04 Far 1520",
			DateDoy: "1520.003",
			DateWoy: "1520W01-7"
		},
		stime: 5403357000000,
		gdate: [2141, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 24] },
		gtime: 5403357000000
	},
	{
		sdate: [1520, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 5],
			DateTime: "1520-01-05 00:00:00",
			DateAber: "05 Far 1520",
			DateAberWithDate: "Sat 05 Far 1520",
			DateDoy: "1520.004",
			DateWoy: "1520W02-1"
		},
		stime: 5403443400000,
		gdate: [2141, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 25] },
		gtime: 5403443400000
	},
	{
		sdate: [1520, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 6],
			DateTime: "1520-01-06 00:00:00",
			DateAber: "06 Far 1520",
			DateAberWithDate: "Sun 06 Far 1520",
			DateDoy: "1520.005",
			DateWoy: "1520W02-2"
		},
		stime: 5403529800000,
		gdate: [2141, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 26] },
		gtime: 5403529800000
	},
	{
		sdate: [1520, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 7],
			DateTime: "1520-01-07 00:00:00",
			DateAber: "07 Far 1520",
			DateAberWithDate: "Mon 07 Far 1520",
			DateDoy: "1520.006",
			DateWoy: "1520W02-3"
		},
		stime: 5403616200000,
		gdate: [2141, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 2, 27] },
		gtime: 5403616200000
	},
	{
		sdate: [1520, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 15],
			DateTime: "1520-01-15 00:00:00",
			DateAber: "15 Far 1520",
			DateAberWithDate: "Tue 15 Far 1520",
			DateDoy: "1520.014",
			DateWoy: "1520W03-4"
		},
		stime: 5404307400000,
		gdate: [2141, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 4] },
		gtime: 5404307400000
	},
	{
		sdate: [1520, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 29],
			DateTime: "1520-01-29 00:00:00",
			DateAber: "29 Far 1520",
			DateAberWithDate: "Tue 29 Far 1520",
			DateDoy: "1520.028",
			DateWoy: "1520W05-4"
		},
		stime: 5405517000000,
		gdate: [2141, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 18] },
		gtime: 5405517000000
	},
	{
		sdate: [1520, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 30],
			DateTime: "1520-01-30 00:00:00",
			DateAber: "30 Far 1520",
			DateAberWithDate: "Wed 30 Far 1520",
			DateDoy: "1520.029",
			DateWoy: "1520W05-5"
		},
		stime: 5405603400000,
		gdate: [2141, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 19] },
		gtime: 5405603400000
	},
	{
		sdate: [1520, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 31],
			DateTime: "1520-01-31 00:00:00",
			DateAber: "31 Far 1520",
			DateAberWithDate: "Thu 31 Far 1520",
			DateDoy: "1520.030",
			DateWoy: "1520W05-6"
		},
		stime: 5405689800000,
		gdate: [2141, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 20] },
		gtime: 5405689800000
	},
	{
		sdate: [1520, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 1],
			DateTime: "1520-02-01 00:00:00",
			DateAber: "01 Ord 1520",
			DateAberWithDate: "Fri 01 Ord 1520",
			DateDoy: "1520.031",
			DateWoy: "1520W05-7"
		},
		stime: 5405776200000,
		gdate: [2141, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 21] },
		gtime: 5405776200000
	},
	{
		sdate: [1520, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 2],
			DateTime: "1520-02-02 00:00:00",
			DateAber: "02 Ord 1520",
			DateAberWithDate: "Sat 02 Ord 1520",
			DateDoy: "1520.032",
			DateWoy: "1520W06-1"
		},
		stime: 5405862600000,
		gdate: [2141, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 3, 22] },
		gtime: 5405862600000
	},
	{
		sdate: [1520, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 15],
			DateTime: "1520-02-15 00:00:00",
			DateAber: "15 Ord 1520",
			DateAberWithDate: "Fri 15 Ord 1520",
			DateDoy: "1520.045",
			DateWoy: "1520W07-7"
		},
		stime: 5406985800000,
		gdate: [2141, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 5] },
		gtime: 5406985800000
	},
	{
		sdate: [1520, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 30],
			DateTime: "1520-02-30 00:00:00",
			DateAber: "30 Ord 1520",
			DateAberWithDate: "Sat 30 Ord 1520",
			DateDoy: "1520.060",
			DateWoy: "1520W10-1"
		},
		stime: 5408281800000,
		gdate: [2141, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 20] },
		gtime: 5408281800000
	},
	{
		sdate: [1520, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 31],
			DateTime: "1520-02-31 00:00:00",
			DateAber: "31 Ord 1520",
			DateAberWithDate: "Sun 31 Ord 1520",
			DateDoy: "1520.061",
			DateWoy: "1520W10-2"
		},
		stime: 5408368200000,
		gdate: [2141, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 21] },
		gtime: 5408368200000
	},
	{
		sdate: [1520, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 1],
			DateTime: "1520-03-01 00:00:00",
			DateAber: "01 Kho 1520",
			DateAberWithDate: "Mon 01 Kho 1520",
			DateDoy: "1520.062",
			DateWoy: "1520W10-3"
		},
		stime: 5408454600000,
		gdate: [2141, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 22] },
		gtime: 5408454600000
	},
	{
		sdate: [1520, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 2],
			DateTime: "1520-03-02 00:00:00",
			DateAber: "02 Kho 1520",
			DateAberWithDate: "Tue 02 Kho 1520",
			DateDoy: "1520.063",
			DateWoy: "1520W10-4"
		},
		stime: 5408541000000,
		gdate: [2141, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 4, 23] },
		gtime: 5408541000000
	},
	{
		sdate: [1520, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 15],
			DateTime: "1520-03-15 00:00:00",
			DateAber: "15 Kho 1520",
			DateAberWithDate: "Mon 15 Kho 1520",
			DateDoy: "1520.076",
			DateWoy: "1520W12-3"
		},
		stime: 5409664200000,
		gdate: [2141, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 5] },
		gtime: 5409664200000
	},
	{
		sdate: [1520, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 30],
			DateTime: "1520-03-30 00:00:00",
			DateAber: "30 Kho 1520",
			DateAberWithDate: "Tue 30 Kho 1520",
			DateDoy: "1520.091",
			DateWoy: "1520W14-4"
		},
		stime: 5410960200000,
		gdate: [2141, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 20] },
		gtime: 5410960200000
	},
	{
		sdate: [1520, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 31],
			DateTime: "1520-03-31 00:00:00",
			DateAber: "31 Kho 1520",
			DateAberWithDate: "Wed 31 Kho 1520",
			DateDoy: "1520.092",
			DateWoy: "1520W14-5"
		},
		stime: 5411046600000,
		gdate: [2141, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 21] },
		gtime: 5411046600000
	},
	{
		sdate: [1520, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 1],
			DateTime: "1520-04-01 00:00:00",
			DateAber: "01 Tir 1520",
			DateAberWithDate: "Thu 01 Tir 1520",
			DateDoy: "1520.093",
			DateWoy: "1520W14-6"
		},
		stime: 5411133000000,
		gdate: [2141, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 22] },
		gtime: 5411133000000
	},
	{
		sdate: [1520, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 2],
			DateTime: "1520-04-02 00:00:00",
			DateAber: "02 Tir 1520",
			DateAberWithDate: "Fri 02 Tir 1520",
			DateDoy: "1520.094",
			DateWoy: "1520W14-7"
		},
		stime: 5411219400000,
		gdate: [2141, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 5, 23] },
		gtime: 5411219400000
	},
	{
		sdate: [1520, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 15],
			DateTime: "1520-04-15 00:00:00",
			DateAber: "15 Tir 1520",
			DateAberWithDate: "Thu 15 Tir 1520",
			DateDoy: "1520.107",
			DateWoy: "1520W16-6"
		},
		stime: 5412342600000,
		gdate: [2141, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 6] },
		gtime: 5412342600000
	},
	{
		sdate: [1520, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 30],
			DateTime: "1520-04-30 00:00:00",
			DateAber: "30 Tir 1520",
			DateAberWithDate: "Fri 30 Tir 1520",
			DateDoy: "1520.122",
			DateWoy: "1520W18-7"
		},
		stime: 5413638600000,
		gdate: [2141, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 21] },
		gtime: 5413638600000
	},
	{
		sdate: [1520, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 31],
			DateTime: "1520-04-31 00:00:00",
			DateAber: "31 Tir 1520",
			DateAberWithDate: "Sat 31 Tir 1520",
			DateDoy: "1520.123",
			DateWoy: "1520W19-1"
		},
		stime: 5413725000000,
		gdate: [2141, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 22] },
		gtime: 5413725000000
	},
	{
		sdate: [1520, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 1],
			DateTime: "1520-05-01 00:00:00",
			DateAber: "01 Amo 1520",
			DateAberWithDate: "Sun 01 Amo 1520",
			DateDoy: "1520.124",
			DateWoy: "1520W19-2"
		},
		stime: 5413811400000,
		gdate: [2141, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 23] },
		gtime: 5413811400000
	},
	{
		sdate: [1520, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 2],
			DateTime: "1520-05-02 00:00:00",
			DateAber: "02 Amo 1520",
			DateAberWithDate: "Mon 02 Amo 1520",
			DateDoy: "1520.125",
			DateWoy: "1520W19-3"
		},
		stime: 5413897800000,
		gdate: [2141, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 6, 24] },
		gtime: 5413897800000
	},
	{
		sdate: [1520, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 15],
			DateTime: "1520-05-15 00:00:00",
			DateAber: "15 Amo 1520",
			DateAberWithDate: "Sun 15 Amo 1520",
			DateDoy: "1520.138",
			DateWoy: "1520W21-2"
		},
		stime: 5415021000000,
		gdate: [2141, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 6] },
		gtime: 5415021000000
	},
	{
		sdate: [1520, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 30],
			DateTime: "1520-05-30 00:00:00",
			DateAber: "30 Amo 1520",
			DateAberWithDate: "Mon 30 Amo 1520",
			DateDoy: "1520.153",
			DateWoy: "1520W23-3"
		},
		stime: 5416317000000,
		gdate: [2141, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 21] },
		gtime: 5416317000000
	},
	{
		sdate: [1520, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 31],
			DateTime: "1520-05-31 00:00:00",
			DateAber: "31 Amo 1520",
			DateAberWithDate: "Tue 31 Amo 1520",
			DateDoy: "1520.154",
			DateWoy: "1520W23-4"
		},
		stime: 5416403400000,
		gdate: [2141, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 22] },
		gtime: 5416403400000
	},
	{
		sdate: [1520, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 1],
			DateTime: "1520-06-01 00:00:00",
			DateAber: "01 Sha 1520",
			DateAberWithDate: "Wed 01 Sha 1520",
			DateDoy: "1520.155",
			DateWoy: "1520W23-5"
		},
		stime: 5416489800000,
		gdate: [2141, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 23] },
		gtime: 5416489800000
	},
	{
		sdate: [1520, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 2],
			DateTime: "1520-06-02 00:00:00",
			DateAber: "02 Sha 1520",
			DateAberWithDate: "Thu 02 Sha 1520",
			DateDoy: "1520.156",
			DateWoy: "1520W23-6"
		},
		stime: 5416576200000,
		gdate: [2141, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 7, 24] },
		gtime: 5416576200000
	},
	{
		sdate: [1520, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 15],
			DateTime: "1520-06-15 00:00:00",
			DateAber: "15 Sha 1520",
			DateAberWithDate: "Wed 15 Sha 1520",
			DateDoy: "1520.169",
			DateWoy: "1520W25-5"
		},
		stime: 5417699400000,
		gdate: [2141, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 8, 6] },
		gtime: 5417699400000
	},
	{
		sdate: [1520, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 29],
			DateTime: "1520-06-29 00:00:00",
			DateAber: "29 Sha 1520",
			DateAberWithDate: "Wed 29 Sha 1520",
			DateDoy: "1520.183",
			DateWoy: "1520W27-5"
		},
		stime: 5418909000000,
		gdate: [2141, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2141, 8, 20] },
		gtime: 5418909000000
	},
	{
		sdate: [1520, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 30],
			DateTime: "1520-06-30 00:00:00",
			DateAber: "30 Sha 1520",
			DateAberWithDate: "Thu 30 Sha 1520",
			DateDoy: "1520.184",
			DateWoy: "1520W27-6"
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
			DateAberWithDate: "Sat 01 Meh 1520",
			DateDoy: "1520.186",
			DateWoy: "1520W28-1"
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
			DateAberWithDate: "Sun 02 Meh 1520",
			DateDoy: "1520.187",
			DateWoy: "1520W28-2"
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
			DateAberWithDate: "Sat 15 Meh 1520",
			DateDoy: "1520.200",
			DateWoy: "1520W30-1"
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
			DateAberWithDate: "Sat 29 Meh 1520",
			DateDoy: "1520.214",
			DateWoy: "1520W32-1"
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
			DateAberWithDate: "Sun 30 Meh 1520",
			DateDoy: "1520.215",
			DateWoy: "1520W32-2"
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
			DateAberWithDate: "Mon 01 Aba 1520",
			DateDoy: "1520.216",
			DateWoy: "1520W32-3"
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
			DateAberWithDate: "Tue 02 Aba 1520",
			DateDoy: "1520.217",
			DateWoy: "1520W32-4"
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
			DateAberWithDate: "Mon 15 Aba 1520",
			DateDoy: "1520.230",
			DateWoy: "1520W34-3"
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
			DateAberWithDate: "Mon 29 Aba 1520",
			DateDoy: "1520.244",
			DateWoy: "1520W36-3"
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
			DateAberWithDate: "Tue 30 Aba 1520",
			DateDoy: "1520.245",
			DateWoy: "1520W36-4"
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
			DateAberWithDate: "Wed 01 Aza 1520",
			DateDoy: "1520.246",
			DateWoy: "1520W36-5"
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
			DateAberWithDate: "Thu 02 Aza 1520",
			DateDoy: "1520.247",
			DateWoy: "1520W36-6"
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
			DateAberWithDate: "Wed 15 Aza 1520",
			DateDoy: "1520.260",
			DateWoy: "1520W38-5"
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
			DateAberWithDate: "Wed 29 Aza 1520",
			DateDoy: "1520.274",
			DateWoy: "1520W40-5"
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
			DateAberWithDate: "Thu 30 Aza 1520",
			DateDoy: "1520.275",
			DateWoy: "1520W40-6"
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
			DateAberWithDate: "Fri 01 Dey 1520",
			DateDoy: "1520.276",
			DateWoy: "1520W40-7"
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
			DateAberWithDate: "Sat 02 Dey 1520",
			DateDoy: "1520.277",
			DateWoy: "1520W41-1"
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
			DateAberWithDate: "Fri 15 Dey 1520",
			DateDoy: "1520.290",
			DateWoy: "1520W42-7"
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
			DateAberWithDate: "Fri 29 Dey 1520",
			DateDoy: "1520.304",
			DateWoy: "1520W44-7"
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
			DateAberWithDate: "Sat 30 Dey 1520",
			DateDoy: "1520.305",
			DateWoy: "1520W45-1"
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
			DateAberWithDate: "Sun 01 Bah 1520",
			DateDoy: "1520.306",
			DateWoy: "1520W45-2"
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
			DateAberWithDate: "Mon 02 Bah 1520",
			DateDoy: "1520.307",
			DateWoy: "1520W45-3"
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
			DateAberWithDate: "Sun 15 Bah 1520",
			DateDoy: "1520.320",
			DateWoy: "1520W47-2"
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
			DateAberWithDate: "Sun 29 Bah 1520",
			DateDoy: "1520.334",
			DateWoy: "1520W49-2"
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
			DateAberWithDate: "Mon 30 Bah 1520",
			DateDoy: "1520.335",
			DateWoy: "1520W49-3"
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
			DateAberWithDate: "Tue 01 Esf 1520",
			DateDoy: "1520.336",
			DateWoy: "1520W49-4"
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
			DateAberWithDate: "Wed 02 Esf 1520",
			DateDoy: "1520.337",
			DateWoy: "1520W49-5"
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
			DateAberWithDate: "Thu 03 Esf 1520",
			DateDoy: "1520.338",
			DateWoy: "1520W49-6"
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
			DateAberWithDate: "Fri 04 Esf 1520",
			DateDoy: "1520.339",
			DateWoy: "1520W49-7"
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
			DateAberWithDate: "Tue 15 Esf 1520",
			DateDoy: "1520.350",
			DateWoy: "1520W51-4"
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
			DateAberWithDate: "Fri 25 Esf 1520",
			DateDoy: "1520.360",
			DateWoy: "1520W52-7"
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
			DateAberWithDate: "Sat 26 Esf 1520",
			DateDoy: "1520.361",
			DateWoy: "1520W53-1"
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
			DateAberWithDate: "Sun 27 Esf 1520",
			DateDoy: "1520.362",
			DateWoy: "1520W53-2"
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
			DateAberWithDate: "Mon 28 Esf 1520",
			DateDoy: "1520.363",
			DateWoy: "1520W53-3"
		},
		stime: 5434461000000,
		gdate: [2142, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2142, 2, 19] },
		gtime: 5434461000000
	},

	{
		sdate: [1540, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 1],
			DateTime: "1540-01-01 00:00:00",
			DateAber: "01 Far 1540",
			DateAberWithDate: "Fri 01 Far 1540",
			DateDoy: "1540.000",
			DateWoy: "1539W52-7"
		},
		stime: 6034163400000,
		gdate: [2161, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 20] },
		gtime: 6034163400000
	},
	{
		sdate: [1540, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 2],
			DateTime: "1540-01-02 00:00:00",
			DateAber: "02 Far 1540",
			DateAberWithDate: "Sat 02 Far 1540",
			DateDoy: "1540.001",
			DateWoy: "1540W01-1"
		},
		stime: 6034249800000,
		gdate: [2161, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 21] },
		gtime: 6034249800000
	},
	{
		sdate: [1540, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 3],
			DateTime: "1540-01-03 00:00:00",
			DateAber: "03 Far 1540",
			DateAberWithDate: "Sun 03 Far 1540",
			DateDoy: "1540.002",
			DateWoy: "1540W01-2"
		},
		stime: 6034336200000,
		gdate: [2161, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 22] },
		gtime: 6034336200000
	},
	{
		sdate: [1540, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 4],
			DateTime: "1540-01-04 00:00:00",
			DateAber: "04 Far 1540",
			DateAberWithDate: "Mon 04 Far 1540",
			DateDoy: "1540.003",
			DateWoy: "1540W01-3"
		},
		stime: 6034422600000,
		gdate: [2161, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 23] },
		gtime: 6034422600000
	},
	{
		sdate: [1540, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 5],
			DateTime: "1540-01-05 00:00:00",
			DateAber: "05 Far 1540",
			DateAberWithDate: "Tue 05 Far 1540",
			DateDoy: "1540.004",
			DateWoy: "1540W01-4"
		},
		stime: 6034509000000,
		gdate: [2161, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 24] },
		gtime: 6034509000000
	},
	{
		sdate: [1540, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 6],
			DateTime: "1540-01-06 00:00:00",
			DateAber: "06 Far 1540",
			DateAberWithDate: "Wed 06 Far 1540",
			DateDoy: "1540.005",
			DateWoy: "1540W01-5"
		},
		stime: 6034595400000,
		gdate: [2161, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 25] },
		gtime: 6034595400000
	},
	{
		sdate: [1540, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 7],
			DateTime: "1540-01-07 00:00:00",
			DateAber: "07 Far 1540",
			DateAberWithDate: "Thu 07 Far 1540",
			DateDoy: "1540.006",
			DateWoy: "1540W01-6"
		},
		stime: 6034681800000,
		gdate: [2161, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 2, 26] },
		gtime: 6034681800000
	},
	{
		sdate: [1540, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 15],
			DateTime: "1540-01-15 00:00:00",
			DateAber: "15 Far 1540",
			DateAberWithDate: "Fri 15 Far 1540",
			DateDoy: "1540.014",
			DateWoy: "1540W02-7"
		},
		stime: 6035373000000,
		gdate: [2161, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 3] },
		gtime: 6035373000000
	},
	{
		sdate: [1540, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 29],
			DateTime: "1540-01-29 00:00:00",
			DateAber: "29 Far 1540",
			DateAberWithDate: "Fri 29 Far 1540",
			DateDoy: "1540.028",
			DateWoy: "1540W04-7"
		},
		stime: 6036582600000,
		gdate: [2161, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 17] },
		gtime: 6036582600000
	},
	{
		sdate: [1540, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 30],
			DateTime: "1540-01-30 00:00:00",
			DateAber: "30 Far 1540",
			DateAberWithDate: "Sat 30 Far 1540",
			DateDoy: "1540.029",
			DateWoy: "1540W05-1"
		},
		stime: 6036669000000,
		gdate: [2161, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 18] },
		gtime: 6036669000000
	},
	{
		sdate: [1540, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 31],
			DateTime: "1540-01-31 00:00:00",
			DateAber: "31 Far 1540",
			DateAberWithDate: "Sun 31 Far 1540",
			DateDoy: "1540.030",
			DateWoy: "1540W05-2"
		},
		stime: 6036755400000,
		gdate: [2161, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 19] },
		gtime: 6036755400000
	},
	{
		sdate: [1540, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 1],
			DateTime: "1540-02-01 00:00:00",
			DateAber: "01 Ord 1540",
			DateAberWithDate: "Mon 01 Ord 1540",
			DateDoy: "1540.031",
			DateWoy: "1540W05-3"
		},
		stime: 6036841800000,
		gdate: [2161, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 20] },
		gtime: 6036841800000
	},
	{
		sdate: [1540, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 2],
			DateTime: "1540-02-02 00:00:00",
			DateAber: "02 Ord 1540",
			DateAberWithDate: "Tue 02 Ord 1540",
			DateDoy: "1540.032",
			DateWoy: "1540W05-4"
		},
		stime: 6036928200000,
		gdate: [2161, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 3, 21] },
		gtime: 6036928200000
	},
	{
		sdate: [1540, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 15],
			DateTime: "1540-02-15 00:00:00",
			DateAber: "15 Ord 1540",
			DateAberWithDate: "Mon 15 Ord 1540",
			DateDoy: "1540.045",
			DateWoy: "1540W07-3"
		},
		stime: 6038051400000,
		gdate: [2161, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 4] },
		gtime: 6038051400000
	},
	{
		sdate: [1540, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 30],
			DateTime: "1540-02-30 00:00:00",
			DateAber: "30 Ord 1540",
			DateAberWithDate: "Tue 30 Ord 1540",
			DateDoy: "1540.060",
			DateWoy: "1540W09-4"
		},
		stime: 6039347400000,
		gdate: [2161, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 19] },
		gtime: 6039347400000
	},
	{
		sdate: [1540, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 31],
			DateTime: "1540-02-31 00:00:00",
			DateAber: "31 Ord 1540",
			DateAberWithDate: "Wed 31 Ord 1540",
			DateDoy: "1540.061",
			DateWoy: "1540W09-5"
		},
		stime: 6039433800000,
		gdate: [2161, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 20] },
		gtime: 6039433800000
	},
	{
		sdate: [1540, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 1],
			DateTime: "1540-03-01 00:00:00",
			DateAber: "01 Kho 1540",
			DateAberWithDate: "Thu 01 Kho 1540",
			DateDoy: "1540.062",
			DateWoy: "1540W09-6"
		},
		stime: 6039520200000,
		gdate: [2161, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 21] },
		gtime: 6039520200000
	},
	{
		sdate: [1540, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 2],
			DateTime: "1540-03-02 00:00:00",
			DateAber: "02 Kho 1540",
			DateAberWithDate: "Fri 02 Kho 1540",
			DateDoy: "1540.063",
			DateWoy: "1540W09-7"
		},
		stime: 6039606600000,
		gdate: [2161, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 4, 22] },
		gtime: 6039606600000
	},
	{
		sdate: [1540, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 15],
			DateTime: "1540-03-15 00:00:00",
			DateAber: "15 Kho 1540",
			DateAberWithDate: "Thu 15 Kho 1540",
			DateDoy: "1540.076",
			DateWoy: "1540W11-6"
		},
		stime: 6040729800000,
		gdate: [2161, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 4] },
		gtime: 6040729800000
	},
	{
		sdate: [1540, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 30],
			DateTime: "1540-03-30 00:00:00",
			DateAber: "30 Kho 1540",
			DateAberWithDate: "Fri 30 Kho 1540",
			DateDoy: "1540.091",
			DateWoy: "1540W13-7"
		},
		stime: 6042025800000,
		gdate: [2161, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 19] },
		gtime: 6042025800000
	},
	{
		sdate: [1540, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 31],
			DateTime: "1540-03-31 00:00:00",
			DateAber: "31 Kho 1540",
			DateAberWithDate: "Sat 31 Kho 1540",
			DateDoy: "1540.092",
			DateWoy: "1540W14-1"
		},
		stime: 6042112200000,
		gdate: [2161, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 20] },
		gtime: 6042112200000
	},
	{
		sdate: [1540, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 1],
			DateTime: "1540-04-01 00:00:00",
			DateAber: "01 Tir 1540",
			DateAberWithDate: "Sun 01 Tir 1540",
			DateDoy: "1540.093",
			DateWoy: "1540W14-2"
		},
		stime: 6042198600000,
		gdate: [2161, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 21] },
		gtime: 6042198600000
	},
	{
		sdate: [1540, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 2],
			DateTime: "1540-04-02 00:00:00",
			DateAber: "02 Tir 1540",
			DateAberWithDate: "Mon 02 Tir 1540",
			DateDoy: "1540.094",
			DateWoy: "1540W14-3"
		},
		stime: 6042285000000,
		gdate: [2161, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 5, 22] },
		gtime: 6042285000000
	},
	{
		sdate: [1540, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 15],
			DateTime: "1540-04-15 00:00:00",
			DateAber: "15 Tir 1540",
			DateAberWithDate: "Sun 15 Tir 1540",
			DateDoy: "1540.107",
			DateWoy: "1540W16-2"
		},
		stime: 6043408200000,
		gdate: [2161, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 5] },
		gtime: 6043408200000
	},
	{
		sdate: [1540, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 30],
			DateTime: "1540-04-30 00:00:00",
			DateAber: "30 Tir 1540",
			DateAberWithDate: "Mon 30 Tir 1540",
			DateDoy: "1540.122",
			DateWoy: "1540W18-3"
		},
		stime: 6044704200000,
		gdate: [2161, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 20] },
		gtime: 6044704200000
	},
	{
		sdate: [1540, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 31],
			DateTime: "1540-04-31 00:00:00",
			DateAber: "31 Tir 1540",
			DateAberWithDate: "Tue 31 Tir 1540",
			DateDoy: "1540.123",
			DateWoy: "1540W18-4"
		},
		stime: 6044790600000,
		gdate: [2161, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 21] },
		gtime: 6044790600000
	},
	{
		sdate: [1540, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 1],
			DateTime: "1540-05-01 00:00:00",
			DateAber: "01 Amo 1540",
			DateAberWithDate: "Wed 01 Amo 1540",
			DateDoy: "1540.124",
			DateWoy: "1540W18-5"
		},
		stime: 6044877000000,
		gdate: [2161, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 22] },
		gtime: 6044877000000
	},
	{
		sdate: [1540, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 2],
			DateTime: "1540-05-02 00:00:00",
			DateAber: "02 Amo 1540",
			DateAberWithDate: "Thu 02 Amo 1540",
			DateDoy: "1540.125",
			DateWoy: "1540W18-6"
		},
		stime: 6044963400000,
		gdate: [2161, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 6, 23] },
		gtime: 6044963400000
	},
	{
		sdate: [1540, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 15],
			DateTime: "1540-05-15 00:00:00",
			DateAber: "15 Amo 1540",
			DateAberWithDate: "Wed 15 Amo 1540",
			DateDoy: "1540.138",
			DateWoy: "1540W20-5"
		},
		stime: 6046086600000,
		gdate: [2161, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 5] },
		gtime: 6046086600000
	},
	{
		sdate: [1540, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 30],
			DateTime: "1540-05-30 00:00:00",
			DateAber: "30 Amo 1540",
			DateAberWithDate: "Thu 30 Amo 1540",
			DateDoy: "1540.153",
			DateWoy: "1540W22-6"
		},
		stime: 6047382600000,
		gdate: [2161, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 20] },
		gtime: 6047382600000
	},
	{
		sdate: [1540, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 31],
			DateTime: "1540-05-31 00:00:00",
			DateAber: "31 Amo 1540",
			DateAberWithDate: "Fri 31 Amo 1540",
			DateDoy: "1540.154",
			DateWoy: "1540W22-7"
		},
		stime: 6047469000000,
		gdate: [2161, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 21] },
		gtime: 6047469000000
	},
	{
		sdate: [1540, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 1],
			DateTime: "1540-06-01 00:00:00",
			DateAber: "01 Sha 1540",
			DateAberWithDate: "Sat 01 Sha 1540",
			DateDoy: "1540.155",
			DateWoy: "1540W23-1"
		},
		stime: 6047555400000,
		gdate: [2161, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 22] },
		gtime: 6047555400000
	},
	{
		sdate: [1540, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 2],
			DateTime: "1540-06-02 00:00:00",
			DateAber: "02 Sha 1540",
			DateAberWithDate: "Sun 02 Sha 1540",
			DateDoy: "1540.156",
			DateWoy: "1540W23-2"
		},
		stime: 6047641800000,
		gdate: [2161, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 7, 23] },
		gtime: 6047641800000
	},
	{
		sdate: [1540, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 15],
			DateTime: "1540-06-15 00:00:00",
			DateAber: "15 Sha 1540",
			DateAberWithDate: "Sat 15 Sha 1540",
			DateDoy: "1540.169",
			DateWoy: "1540W25-1"
		},
		stime: 6048765000000,
		gdate: [2161, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 5] },
		gtime: 6048765000000
	},
	{
		sdate: [1540, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 29],
			DateTime: "1540-06-29 00:00:00",
			DateAber: "29 Sha 1540",
			DateAberWithDate: "Sat 29 Sha 1540",
			DateDoy: "1540.183",
			DateWoy: "1540W27-1"
		},
		stime: 6049974600000,
		gdate: [2161, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 19] },
		gtime: 6049974600000
	},
	{
		sdate: [1540, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 30],
			DateTime: "1540-06-30 00:00:00",
			DateAber: "30 Sha 1540",
			DateAberWithDate: "Sun 30 Sha 1540",
			DateDoy: "1540.184",
			DateWoy: "1540W27-2"
		},
		stime: 6050061000000,
		gdate: [2161, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2161, 8, 20] },
		gtime: 6050061000000
	},
	{
		sdate: [1540, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 1],
			DateTime: "1540-07-01 00:00:00",
			DateAber: "01 Meh 1540",
			DateAberWithDate: "Tue 01 Meh 1540",
			DateDoy: "1540.186",
			DateWoy: "1540W27-4"
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
			DateAberWithDate: "Wed 02 Meh 1540",
			DateDoy: "1540.187",
			DateWoy: "1540W27-5"
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
			DateAberWithDate: "Tue 15 Meh 1540",
			DateDoy: "1540.200",
			DateWoy: "1540W29-4"
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
			DateAberWithDate: "Tue 29 Meh 1540",
			DateDoy: "1540.214",
			DateWoy: "1540W31-4"
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
			DateAberWithDate: "Wed 30 Meh 1540",
			DateDoy: "1540.215",
			DateWoy: "1540W31-5"
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
			DateAberWithDate: "Thu 01 Aba 1540",
			DateDoy: "1540.216",
			DateWoy: "1540W31-6"
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
			DateAberWithDate: "Fri 02 Aba 1540",
			DateDoy: "1540.217",
			DateWoy: "1540W31-7"
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
			DateAberWithDate: "Thu 15 Aba 1540",
			DateDoy: "1540.230",
			DateWoy: "1540W33-6"
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
			DateAberWithDate: "Thu 29 Aba 1540",
			DateDoy: "1540.244",
			DateWoy: "1540W35-6"
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
			DateAberWithDate: "Fri 30 Aba 1540",
			DateDoy: "1540.245",
			DateWoy: "1540W35-7"
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
			DateAberWithDate: "Sat 01 Aza 1540",
			DateDoy: "1540.246",
			DateWoy: "1540W36-1"
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
			DateAberWithDate: "Sun 02 Aza 1540",
			DateDoy: "1540.247",
			DateWoy: "1540W36-2"
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
			DateAberWithDate: "Sat 15 Aza 1540",
			DateDoy: "1540.260",
			DateWoy: "1540W38-1"
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
			DateAberWithDate: "Sat 29 Aza 1540",
			DateDoy: "1540.274",
			DateWoy: "1540W40-1"
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
			DateAberWithDate: "Sun 30 Aza 1540",
			DateDoy: "1540.275",
			DateWoy: "1540W40-2"
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
			DateAberWithDate: "Mon 01 Dey 1540",
			DateDoy: "1540.276",
			DateWoy: "1540W40-3"
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
			DateAberWithDate: "Tue 02 Dey 1540",
			DateDoy: "1540.277",
			DateWoy: "1540W40-4"
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
			DateAberWithDate: "Mon 15 Dey 1540",
			DateDoy: "1540.290",
			DateWoy: "1540W42-3"
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
			DateAberWithDate: "Mon 29 Dey 1540",
			DateDoy: "1540.304",
			DateWoy: "1540W44-3"
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
			DateAberWithDate: "Tue 30 Dey 1540",
			DateDoy: "1540.305",
			DateWoy: "1540W44-4"
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
			DateAberWithDate: "Wed 01 Bah 1540",
			DateDoy: "1540.306",
			DateWoy: "1540W44-5"
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
			DateAberWithDate: "Thu 02 Bah 1540",
			DateDoy: "1540.307",
			DateWoy: "1540W44-6"
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
			DateAberWithDate: "Wed 15 Bah 1540",
			DateDoy: "1540.320",
			DateWoy: "1540W46-5"
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
			DateAberWithDate: "Wed 29 Bah 1540",
			DateDoy: "1540.334",
			DateWoy: "1540W48-5"
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
			DateAberWithDate: "Thu 30 Bah 1540",
			DateDoy: "1540.335",
			DateWoy: "1540W48-6"
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
			DateAberWithDate: "Fri 01 Esf 1540",
			DateDoy: "1540.336",
			DateWoy: "1540W48-7"
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
			DateAberWithDate: "Sat 02 Esf 1540",
			DateDoy: "1540.337",
			DateWoy: "1540W49-1"
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
			DateAberWithDate: "Sun 03 Esf 1540",
			DateDoy: "1540.338",
			DateWoy: "1540W49-2"
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
			DateAberWithDate: "Mon 04 Esf 1540",
			DateDoy: "1540.339",
			DateWoy: "1540W49-3"
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
			DateAberWithDate: "Fri 15 Esf 1540",
			DateDoy: "1540.350",
			DateWoy: "1540W50-7"
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
			DateAberWithDate: "Mon 25 Esf 1540",
			DateDoy: "1540.360",
			DateWoy: "1540W52-3"
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
			DateAberWithDate: "Tue 26 Esf 1540",
			DateDoy: "1540.361",
			DateWoy: "1540W52-4"
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
			DateAberWithDate: "Wed 27 Esf 1540",
			DateDoy: "1540.362",
			DateWoy: "1540W52-5"
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
			DateAberWithDate: "Thu 28 Esf 1540",
			DateDoy: "1540.363",
			DateWoy: "1540W52-6"
		},
		stime: 6065526600000,
		gdate: [2162, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2162, 2, 18] },
		gtime: 6065526600000
	},
	{
		sdate: [1540, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 30],
			DateTime: "1540-12-30 00:00:00",
			DateAber: "30 Esf 1540",
			DateAberWithDate: "Sat 30 Esf 1540",
			DateDoy: "1540.365",
			DateWoy: "1541W01-1"
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
			DateAberWithDate: "Tue 01 Far 1560",
			DateDoy: "1560.000",
			DateWoy: "1560W01-4"
		},
		stime: 6665315400000,
		gdate: [2181, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 20] },
		gtime: 6665315400000
	},
	{
		sdate: [1560, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 2],
			DateTime: "1560-01-02 00:00:00",
			DateAber: "02 Far 1560",
			DateAberWithDate: "Wed 02 Far 1560",
			DateDoy: "1560.001",
			DateWoy: "1560W01-5"
		},
		stime: 6665401800000,
		gdate: [2181, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 21] },
		gtime: 6665401800000
	},
	{
		sdate: [1560, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 3],
			DateTime: "1560-01-03 00:00:00",
			DateAber: "03 Far 1560",
			DateAberWithDate: "Thu 03 Far 1560",
			DateDoy: "1560.002",
			DateWoy: "1560W01-6"
		},
		stime: 6665488200000,
		gdate: [2181, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 22] },
		gtime: 6665488200000
	},
	{
		sdate: [1560, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 4],
			DateTime: "1560-01-04 00:00:00",
			DateAber: "04 Far 1560",
			DateAberWithDate: "Fri 04 Far 1560",
			DateDoy: "1560.003",
			DateWoy: "1560W01-7"
		},
		stime: 6665574600000,
		gdate: [2181, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 23] },
		gtime: 6665574600000
	},
	{
		sdate: [1560, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 5],
			DateTime: "1560-01-05 00:00:00",
			DateAber: "05 Far 1560",
			DateAberWithDate: "Sat 05 Far 1560",
			DateDoy: "1560.004",
			DateWoy: "1560W02-1"
		},
		stime: 6665661000000,
		gdate: [2181, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 24] },
		gtime: 6665661000000
	},
	{
		sdate: [1560, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 6],
			DateTime: "1560-01-06 00:00:00",
			DateAber: "06 Far 1560",
			DateAberWithDate: "Sun 06 Far 1560",
			DateDoy: "1560.005",
			DateWoy: "1560W02-2"
		},
		stime: 6665747400000,
		gdate: [2181, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 25] },
		gtime: 6665747400000
	},
	{
		sdate: [1560, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 7],
			DateTime: "1560-01-07 00:00:00",
			DateAber: "07 Far 1560",
			DateAberWithDate: "Mon 07 Far 1560",
			DateDoy: "1560.006",
			DateWoy: "1560W02-3"
		},
		stime: 6665833800000,
		gdate: [2181, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 2, 26] },
		gtime: 6665833800000
	},
	{
		sdate: [1560, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 15],
			DateTime: "1560-01-15 00:00:00",
			DateAber: "15 Far 1560",
			DateAberWithDate: "Tue 15 Far 1560",
			DateDoy: "1560.014",
			DateWoy: "1560W03-4"
		},
		stime: 6666525000000,
		gdate: [2181, 4, 3, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 3] },
		gtime: 6666525000000
	},
	{
		sdate: [1560, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 29],
			DateTime: "1560-01-29 00:00:00",
			DateAber: "29 Far 1560",
			DateAberWithDate: "Tue 29 Far 1560",
			DateDoy: "1560.028",
			DateWoy: "1560W05-4"
		},
		stime: 6667734600000,
		gdate: [2181, 4, 17, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 17] },
		gtime: 6667734600000
	},
	{
		sdate: [1560, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 30],
			DateTime: "1560-01-30 00:00:00",
			DateAber: "30 Far 1560",
			DateAberWithDate: "Wed 30 Far 1560",
			DateDoy: "1560.029",
			DateWoy: "1560W05-5"
		},
		stime: 6667821000000,
		gdate: [2181, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 18] },
		gtime: 6667821000000
	},
	{
		sdate: [1560, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 31],
			DateTime: "1560-01-31 00:00:00",
			DateAber: "31 Far 1560",
			DateAberWithDate: "Thu 31 Far 1560",
			DateDoy: "1560.030",
			DateWoy: "1560W05-6"
		},
		stime: 6667907400000,
		gdate: [2181, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 19] },
		gtime: 6667907400000
	},
	{
		sdate: [1560, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 1],
			DateTime: "1560-02-01 00:00:00",
			DateAber: "01 Ord 1560",
			DateAberWithDate: "Fri 01 Ord 1560",
			DateDoy: "1560.031",
			DateWoy: "1560W05-7"
		},
		stime: 6667993800000,
		gdate: [2181, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 20] },
		gtime: 6667993800000
	},
	{
		sdate: [1560, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 2],
			DateTime: "1560-02-02 00:00:00",
			DateAber: "02 Ord 1560",
			DateAberWithDate: "Sat 02 Ord 1560",
			DateDoy: "1560.032",
			DateWoy: "1560W06-1"
		},
		stime: 6668080200000,
		gdate: [2181, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 3, 21] },
		gtime: 6668080200000
	},
	{
		sdate: [1560, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 15],
			DateTime: "1560-02-15 00:00:00",
			DateAber: "15 Ord 1560",
			DateAberWithDate: "Fri 15 Ord 1560",
			DateDoy: "1560.045",
			DateWoy: "1560W07-7"
		},
		stime: 6669203400000,
		gdate: [2181, 5, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 4] },
		gtime: 6669203400000
	},
	{
		sdate: [1560, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 30],
			DateTime: "1560-02-30 00:00:00",
			DateAber: "30 Ord 1560",
			DateAberWithDate: "Sat 30 Ord 1560",
			DateDoy: "1560.060",
			DateWoy: "1560W10-1"
		},
		stime: 6670499400000,
		gdate: [2181, 5, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 19] },
		gtime: 6670499400000
	},
	{
		sdate: [1560, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 31],
			DateTime: "1560-02-31 00:00:00",
			DateAber: "31 Ord 1560",
			DateAberWithDate: "Sun 31 Ord 1560",
			DateDoy: "1560.061",
			DateWoy: "1560W10-2"
		},
		stime: 6670585800000,
		gdate: [2181, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 20] },
		gtime: 6670585800000
	},
	{
		sdate: [1560, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 1],
			DateTime: "1560-03-01 00:00:00",
			DateAber: "01 Kho 1560",
			DateAberWithDate: "Mon 01 Kho 1560",
			DateDoy: "1560.062",
			DateWoy: "1560W10-3"
		},
		stime: 6670672200000,
		gdate: [2181, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 21] },
		gtime: 6670672200000
	},
	{
		sdate: [1560, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 2],
			DateTime: "1560-03-02 00:00:00",
			DateAber: "02 Kho 1560",
			DateAberWithDate: "Tue 02 Kho 1560",
			DateDoy: "1560.063",
			DateWoy: "1560W10-4"
		},
		stime: 6670758600000,
		gdate: [2181, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 4, 22] },
		gtime: 6670758600000
	},
	{
		sdate: [1560, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 15],
			DateTime: "1560-03-15 00:00:00",
			DateAber: "15 Kho 1560",
			DateAberWithDate: "Mon 15 Kho 1560",
			DateDoy: "1560.076",
			DateWoy: "1560W12-3"
		},
		stime: 6671881800000,
		gdate: [2181, 6, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 4] },
		gtime: 6671881800000
	},
	{
		sdate: [1560, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 30],
			DateTime: "1560-03-30 00:00:00",
			DateAber: "30 Kho 1560",
			DateAberWithDate: "Tue 30 Kho 1560",
			DateDoy: "1560.091",
			DateWoy: "1560W14-4"
		},
		stime: 6673177800000,
		gdate: [2181, 6, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 19] },
		gtime: 6673177800000
	},
	{
		sdate: [1560, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 31],
			DateTime: "1560-03-31 00:00:00",
			DateAber: "31 Kho 1560",
			DateAberWithDate: "Wed 31 Kho 1560",
			DateDoy: "1560.092",
			DateWoy: "1560W14-5"
		},
		stime: 6673264200000,
		gdate: [2181, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 20] },
		gtime: 6673264200000
	},
	{
		sdate: [1560, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 1],
			DateTime: "1560-04-01 00:00:00",
			DateAber: "01 Tir 1560",
			DateAberWithDate: "Thu 01 Tir 1560",
			DateDoy: "1560.093",
			DateWoy: "1560W14-6"
		},
		stime: 6673350600000,
		gdate: [2181, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 21] },
		gtime: 6673350600000
	},
	{
		sdate: [1560, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 2],
			DateTime: "1560-04-02 00:00:00",
			DateAber: "02 Tir 1560",
			DateAberWithDate: "Fri 02 Tir 1560",
			DateDoy: "1560.094",
			DateWoy: "1560W14-7"
		},
		stime: 6673437000000,
		gdate: [2181, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 5, 22] },
		gtime: 6673437000000
	},
	{
		sdate: [1560, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 15],
			DateTime: "1560-04-15 00:00:00",
			DateAber: "15 Tir 1560",
			DateAberWithDate: "Thu 15 Tir 1560",
			DateDoy: "1560.107",
			DateWoy: "1560W16-6"
		},
		stime: 6674560200000,
		gdate: [2181, 7, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 5] },
		gtime: 6674560200000
	},
	{
		sdate: [1560, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 30],
			DateTime: "1560-04-30 00:00:00",
			DateAber: "30 Tir 1560",
			DateAberWithDate: "Fri 30 Tir 1560",
			DateDoy: "1560.122",
			DateWoy: "1560W18-7"
		},
		stime: 6675856200000,
		gdate: [2181, 7, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 20] },
		gtime: 6675856200000
	},
	{
		sdate: [1560, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 31],
			DateTime: "1560-04-31 00:00:00",
			DateAber: "31 Tir 1560",
			DateAberWithDate: "Sat 31 Tir 1560",
			DateDoy: "1560.123",
			DateWoy: "1560W19-1"
		},
		stime: 6675942600000,
		gdate: [2181, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 21] },
		gtime: 6675942600000
	},
	{
		sdate: [1560, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 1],
			DateTime: "1560-05-01 00:00:00",
			DateAber: "01 Amo 1560",
			DateAberWithDate: "Sun 01 Amo 1560",
			DateDoy: "1560.124",
			DateWoy: "1560W19-2"
		},
		stime: 6676029000000,
		gdate: [2181, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 22] },
		gtime: 6676029000000
	},
	{
		sdate: [1560, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 2],
			DateTime: "1560-05-02 00:00:00",
			DateAber: "02 Amo 1560",
			DateAberWithDate: "Mon 02 Amo 1560",
			DateDoy: "1560.125",
			DateWoy: "1560W19-3"
		},
		stime: 6676115400000,
		gdate: [2181, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 6, 23] },
		gtime: 6676115400000
	},
	{
		sdate: [1560, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 15],
			DateTime: "1560-05-15 00:00:00",
			DateAber: "15 Amo 1560",
			DateAberWithDate: "Sun 15 Amo 1560",
			DateDoy: "1560.138",
			DateWoy: "1560W21-2"
		},
		stime: 6677238600000,
		gdate: [2181, 8, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 5] },
		gtime: 6677238600000
	},
	{
		sdate: [1560, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 30],
			DateTime: "1560-05-30 00:00:00",
			DateAber: "30 Amo 1560",
			DateAberWithDate: "Mon 30 Amo 1560",
			DateDoy: "1560.153",
			DateWoy: "1560W23-3"
		},
		stime: 6678534600000,
		gdate: [2181, 8, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 20] },
		gtime: 6678534600000
	},
	{
		sdate: [1560, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 31],
			DateTime: "1560-05-31 00:00:00",
			DateAber: "31 Amo 1560",
			DateAberWithDate: "Tue 31 Amo 1560",
			DateDoy: "1560.154",
			DateWoy: "1560W23-4"
		},
		stime: 6678621000000,
		gdate: [2181, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 21] },
		gtime: 6678621000000
	},
	{
		sdate: [1560, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 1],
			DateTime: "1560-06-01 00:00:00",
			DateAber: "01 Sha 1560",
			DateAberWithDate: "Wed 01 Sha 1560",
			DateDoy: "1560.155",
			DateWoy: "1560W23-5"
		},
		stime: 6678707400000,
		gdate: [2181, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 22] },
		gtime: 6678707400000
	},
	{
		sdate: [1560, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 2],
			DateTime: "1560-06-02 00:00:00",
			DateAber: "02 Sha 1560",
			DateAberWithDate: "Thu 02 Sha 1560",
			DateDoy: "1560.156",
			DateWoy: "1560W23-6"
		},
		stime: 6678793800000,
		gdate: [2181, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 7, 23] },
		gtime: 6678793800000
	},
	{
		sdate: [1560, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 15],
			DateTime: "1560-06-15 00:00:00",
			DateAber: "15 Sha 1560",
			DateAberWithDate: "Wed 15 Sha 1560",
			DateDoy: "1560.169",
			DateWoy: "1560W25-5"
		},
		stime: 6679917000000,
		gdate: [2181, 9, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 5] },
		gtime: 6679917000000
	},
	{
		sdate: [1560, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 29],
			DateTime: "1560-06-29 00:00:00",
			DateAber: "29 Sha 1560",
			DateAberWithDate: "Wed 29 Sha 1560",
			DateDoy: "1560.183",
			DateWoy: "1560W27-5"
		},
		stime: 6681126600000,
		gdate: [2181, 9, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 19] },
		gtime: 6681126600000
	},
	{
		sdate: [1560, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 30],
			DateTime: "1560-06-30 00:00:00",
			DateAber: "30 Sha 1560",
			DateAberWithDate: "Thu 30 Sha 1560",
			DateDoy: "1560.184",
			DateWoy: "1560W27-6"
		},
		stime: 6681213000000,
		gdate: [2181, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2181, 8, 20] },
		gtime: 6681213000000
	},
	{
		sdate: [1560, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 1],
			DateTime: "1560-07-01 00:00:00",
			DateAber: "01 Meh 1560",
			DateAberWithDate: "Sat 01 Meh 1560",
			DateDoy: "1560.186",
			DateWoy: "1560W28-1"
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
			DateAberWithDate: "Sun 02 Meh 1560",
			DateDoy: "1560.187",
			DateWoy: "1560W28-2"
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
			DateAberWithDate: "Sat 15 Meh 1560",
			DateDoy: "1560.200",
			DateWoy: "1560W30-1"
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
			DateAberWithDate: "Sat 29 Meh 1560",
			DateDoy: "1560.214",
			DateWoy: "1560W32-1"
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
			DateAberWithDate: "Sun 30 Meh 1560",
			DateDoy: "1560.215",
			DateWoy: "1560W32-2"
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
			DateAberWithDate: "Mon 01 Aba 1560",
			DateDoy: "1560.216",
			DateWoy: "1560W32-3"
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
			DateAberWithDate: "Tue 02 Aba 1560",
			DateDoy: "1560.217",
			DateWoy: "1560W32-4"
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
			DateAberWithDate: "Mon 15 Aba 1560",
			DateDoy: "1560.230",
			DateWoy: "1560W34-3"
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
			DateAberWithDate: "Mon 29 Aba 1560",
			DateDoy: "1560.244",
			DateWoy: "1560W36-3"
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
			DateAberWithDate: "Tue 30 Aba 1560",
			DateDoy: "1560.245",
			DateWoy: "1560W36-4"
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
			DateAberWithDate: "Wed 01 Aza 1560",
			DateDoy: "1560.246",
			DateWoy: "1560W36-5"
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
			DateAberWithDate: "Thu 02 Aza 1560",
			DateDoy: "1560.247",
			DateWoy: "1560W36-6"
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
			DateAberWithDate: "Wed 15 Aza 1560",
			DateDoy: "1560.260",
			DateWoy: "1560W38-5"
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
			DateAberWithDate: "Wed 29 Aza 1560",
			DateDoy: "1560.274",
			DateWoy: "1560W40-5"
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
			DateAberWithDate: "Thu 30 Aza 1560",
			DateDoy: "1560.275",
			DateWoy: "1560W40-6"
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
			DateAberWithDate: "Fri 01 Dey 1560",
			DateDoy: "1560.276",
			DateWoy: "1560W40-7"
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
			DateAberWithDate: "Sat 02 Dey 1560",
			DateDoy: "1560.277",
			DateWoy: "1560W41-1"
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
			DateAberWithDate: "Fri 15 Dey 1560",
			DateDoy: "1560.290",
			DateWoy: "1560W42-7"
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
			DateAberWithDate: "Fri 29 Dey 1560",
			DateDoy: "1560.304",
			DateWoy: "1560W44-7"
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
			DateAberWithDate: "Sat 30 Dey 1560",
			DateDoy: "1560.305",
			DateWoy: "1560W45-1"
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
			DateAberWithDate: "Sun 01 Bah 1560",
			DateDoy: "1560.306",
			DateWoy: "1560W45-2"
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
			DateAberWithDate: "Mon 02 Bah 1560",
			DateDoy: "1560.307",
			DateWoy: "1560W45-3"
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
			DateAberWithDate: "Sun 15 Bah 1560",
			DateDoy: "1560.320",
			DateWoy: "1560W47-2"
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
			DateAberWithDate: "Sun 29 Bah 1560",
			DateDoy: "1560.334",
			DateWoy: "1560W49-2"
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
			DateAberWithDate: "Mon 30 Bah 1560",
			DateDoy: "1560.335",
			DateWoy: "1560W49-3"
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
			DateAberWithDate: "Tue 01 Esf 1560",
			DateDoy: "1560.336",
			DateWoy: "1560W49-4"
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
			DateAberWithDate: "Wed 02 Esf 1560",
			DateDoy: "1560.337",
			DateWoy: "1560W49-5"
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
			DateAberWithDate: "Thu 03 Esf 1560",
			DateDoy: "1560.338",
			DateWoy: "1560W49-6"
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
			DateAberWithDate: "Fri 04 Esf 1560",
			DateDoy: "1560.339",
			DateWoy: "1560W49-7"
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
			DateAberWithDate: "Tue 15 Esf 1560",
			DateDoy: "1560.350",
			DateWoy: "1560W51-4"
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
			DateAberWithDate: "Fri 25 Esf 1560",
			DateDoy: "1560.360",
			DateWoy: "1560W52-7"
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
			DateAberWithDate: "Sat 26 Esf 1560",
			DateDoy: "1560.361",
			DateWoy: "1560W53-1"
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
			DateAberWithDate: "Sun 27 Esf 1560",
			DateDoy: "1560.362",
			DateWoy: "1560W53-2"
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
			DateAberWithDate: "Mon 28 Esf 1560",
			DateDoy: "1560.363",
			DateWoy: "1560W53-3"
		},
		stime: 6696678600000,
		gdate: [2182, 3, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 18] },
		gtime: 6696678600000
	},
	{
		sdate: [1560, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 30],
			DateTime: "1560-12-30 00:00:00",
			DateAber: "30 Esf 1560",
			DateAberWithDate: "Wed 30 Esf 1560",
			DateDoy: "1560.365",
			DateWoy: "1560W53-5"
		},
		stime: 6696851400000,
		gdate: [2182, 3, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2182, 2, 20] },
		gtime: 6696851400000
	},

	{
		sdate: [1580, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 1],
			DateTime: "1580-01-01 00:00:00",
			DateAber: "01 Far 1580",
			DateAberWithDate: "Sat 01 Far 1580",
			DateDoy: "1580.000",
			DateWoy: "1580W01-1"
		},
		stime: 7296467400000,
		gdate: [2201, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 21] },
		gtime: 7296467400000
	},
	{
		sdate: [1580, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 2],
			DateTime: "1580-01-02 00:00:00",
			DateAber: "02 Far 1580",
			DateAberWithDate: "Sun 02 Far 1580",
			DateDoy: "1580.001",
			DateWoy: "1580W01-2"
		},
		stime: 7296553800000,
		gdate: [2201, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 22] },
		gtime: 7296553800000
	},
	{
		sdate: [1580, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 3],
			DateTime: "1580-01-03 00:00:00",
			DateAber: "03 Far 1580",
			DateAberWithDate: "Mon 03 Far 1580",
			DateDoy: "1580.002",
			DateWoy: "1580W01-3"
		},
		stime: 7296640200000,
		gdate: [2201, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 23] },
		gtime: 7296640200000
	},
	{
		sdate: [1580, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 4],
			DateTime: "1580-01-04 00:00:00",
			DateAber: "04 Far 1580",
			DateAberWithDate: "Tue 04 Far 1580",
			DateDoy: "1580.003",
			DateWoy: "1580W01-4"
		},
		stime: 7296726600000,
		gdate: [2201, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 24] },
		gtime: 7296726600000
	},
	{
		sdate: [1580, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 5],
			DateTime: "1580-01-05 00:00:00",
			DateAber: "05 Far 1580",
			DateAberWithDate: "Wed 05 Far 1580",
			DateDoy: "1580.004",
			DateWoy: "1580W01-5"
		},
		stime: 7296813000000,
		gdate: [2201, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 25] },
		gtime: 7296813000000
	},
	{
		sdate: [1580, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 6],
			DateTime: "1580-01-06 00:00:00",
			DateAber: "06 Far 1580",
			DateAberWithDate: "Thu 06 Far 1580",
			DateDoy: "1580.005",
			DateWoy: "1580W01-6"
		},
		stime: 7296899400000,
		gdate: [2201, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 26] },
		gtime: 7296899400000
	},
	{
		sdate: [1580, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 7],
			DateTime: "1580-01-07 00:00:00",
			DateAber: "07 Far 1580",
			DateAberWithDate: "Fri 07 Far 1580",
			DateDoy: "1580.006",
			DateWoy: "1580W01-7"
		},
		stime: 7296985800000,
		gdate: [2201, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 2, 27] },
		gtime: 7296985800000
	},
	{
		sdate: [1580, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 15],
			DateTime: "1580-01-15 00:00:00",
			DateAber: "15 Far 1580",
			DateAberWithDate: "Sat 15 Far 1580",
			DateDoy: "1580.014",
			DateWoy: "1580W03-1"
		},
		stime: 7297677000000,
		gdate: [2201, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 4] },
		gtime: 7297677000000
	},
	{
		sdate: [1580, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 29],
			DateTime: "1580-01-29 00:00:00",
			DateAber: "29 Far 1580",
			DateAberWithDate: "Sat 29 Far 1580",
			DateDoy: "1580.028",
			DateWoy: "1580W05-1"
		},
		stime: 7298886600000,
		gdate: [2201, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 18] },
		gtime: 7298886600000
	},
	{
		sdate: [1580, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 30],
			DateTime: "1580-01-30 00:00:00",
			DateAber: "30 Far 1580",
			DateAberWithDate: "Sun 30 Far 1580",
			DateDoy: "1580.029",
			DateWoy: "1580W05-2"
		},
		stime: 7298973000000,
		gdate: [2201, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 19] },
		gtime: 7298973000000
	},
	{
		sdate: [1580, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 31],
			DateTime: "1580-01-31 00:00:00",
			DateAber: "31 Far 1580",
			DateAberWithDate: "Mon 31 Far 1580",
			DateDoy: "1580.030",
			DateWoy: "1580W05-3"
		},
		stime: 7299059400000,
		gdate: [2201, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 20] },
		gtime: 7299059400000
	},
	{
		sdate: [1580, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 1],
			DateTime: "1580-02-01 00:00:00",
			DateAber: "01 Ord 1580",
			DateAberWithDate: "Tue 01 Ord 1580",
			DateDoy: "1580.031",
			DateWoy: "1580W05-4"
		},
		stime: 7299145800000,
		gdate: [2201, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 21] },
		gtime: 7299145800000
	},
	{
		sdate: [1580, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 2],
			DateTime: "1580-02-02 00:00:00",
			DateAber: "02 Ord 1580",
			DateAberWithDate: "Wed 02 Ord 1580",
			DateDoy: "1580.032",
			DateWoy: "1580W05-5"
		},
		stime: 7299232200000,
		gdate: [2201, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 3, 22] },
		gtime: 7299232200000
	},
	{
		sdate: [1580, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 15],
			DateTime: "1580-02-15 00:00:00",
			DateAber: "15 Ord 1580",
			DateAberWithDate: "Tue 15 Ord 1580",
			DateDoy: "1580.045",
			DateWoy: "1580W07-4"
		},
		stime: 7300355400000,
		gdate: [2201, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 5] },
		gtime: 7300355400000
	},
	{
		sdate: [1580, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 30],
			DateTime: "1580-02-30 00:00:00",
			DateAber: "30 Ord 1580",
			DateAberWithDate: "Wed 30 Ord 1580",
			DateDoy: "1580.060",
			DateWoy: "1580W09-5"
		},
		stime: 7301651400000,
		gdate: [2201, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 20] },
		gtime: 7301651400000
	},
	{
		sdate: [1580, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 31],
			DateTime: "1580-02-31 00:00:00",
			DateAber: "31 Ord 1580",
			DateAberWithDate: "Thu 31 Ord 1580",
			DateDoy: "1580.061",
			DateWoy: "1580W09-6"
		},
		stime: 7301737800000,
		gdate: [2201, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 21] },
		gtime: 7301737800000
	},
	{
		sdate: [1580, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 1],
			DateTime: "1580-03-01 00:00:00",
			DateAber: "01 Kho 1580",
			DateAberWithDate: "Fri 01 Kho 1580",
			DateDoy: "1580.062",
			DateWoy: "1580W09-7"
		},
		stime: 7301824200000,
		gdate: [2201, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 22] },
		gtime: 7301824200000
	},
	{
		sdate: [1580, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 2],
			DateTime: "1580-03-02 00:00:00",
			DateAber: "02 Kho 1580",
			DateAberWithDate: "Sat 02 Kho 1580",
			DateDoy: "1580.063",
			DateWoy: "1580W10-1"
		},
		stime: 7301910600000,
		gdate: [2201, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 4, 23] },
		gtime: 7301910600000
	},
	{
		sdate: [1580, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 15],
			DateTime: "1580-03-15 00:00:00",
			DateAber: "15 Kho 1580",
			DateAberWithDate: "Fri 15 Kho 1580",
			DateDoy: "1580.076",
			DateWoy: "1580W11-7"
		},
		stime: 7303033800000,
		gdate: [2201, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 5] },
		gtime: 7303033800000
	},
	{
		sdate: [1580, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 30],
			DateTime: "1580-03-30 00:00:00",
			DateAber: "30 Kho 1580",
			DateAberWithDate: "Sat 30 Kho 1580",
			DateDoy: "1580.091",
			DateWoy: "1580W14-1"
		},
		stime: 7304329800000,
		gdate: [2201, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 20] },
		gtime: 7304329800000
	},
	{
		sdate: [1580, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 31],
			DateTime: "1580-03-31 00:00:00",
			DateAber: "31 Kho 1580",
			DateAberWithDate: "Sun 31 Kho 1580",
			DateDoy: "1580.092",
			DateWoy: "1580W14-2"
		},
		stime: 7304416200000,
		gdate: [2201, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 21] },
		gtime: 7304416200000
	},
	{
		sdate: [1580, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 1],
			DateTime: "1580-04-01 00:00:00",
			DateAber: "01 Tir 1580",
			DateAberWithDate: "Mon 01 Tir 1580",
			DateDoy: "1580.093",
			DateWoy: "1580W14-3"
		},
		stime: 7304502600000,
		gdate: [2201, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 22] },
		gtime: 7304502600000
	},
	{
		sdate: [1580, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 2],
			DateTime: "1580-04-02 00:00:00",
			DateAber: "02 Tir 1580",
			DateAberWithDate: "Tue 02 Tir 1580",
			DateDoy: "1580.094",
			DateWoy: "1580W14-4"
		},
		stime: 7304589000000,
		gdate: [2201, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 5, 23] },
		gtime: 7304589000000
	},
	{
		sdate: [1580, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 15],
			DateTime: "1580-04-15 00:00:00",
			DateAber: "15 Tir 1580",
			DateAberWithDate: "Mon 15 Tir 1580",
			DateDoy: "1580.107",
			DateWoy: "1580W16-3"
		},
		stime: 7305712200000,
		gdate: [2201, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 6] },
		gtime: 7305712200000
	},
	{
		sdate: [1580, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 30],
			DateTime: "1580-04-30 00:00:00",
			DateAber: "30 Tir 1580",
			DateAberWithDate: "Tue 30 Tir 1580",
			DateDoy: "1580.122",
			DateWoy: "1580W18-4"
		},
		stime: 7307008200000,
		gdate: [2201, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 21] },
		gtime: 7307008200000
	},
	{
		sdate: [1580, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 31],
			DateTime: "1580-04-31 00:00:00",
			DateAber: "31 Tir 1580",
			DateAberWithDate: "Wed 31 Tir 1580",
			DateDoy: "1580.123",
			DateWoy: "1580W18-5"
		},
		stime: 7307094600000,
		gdate: [2201, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 22] },
		gtime: 7307094600000
	},
	{
		sdate: [1580, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 1],
			DateTime: "1580-05-01 00:00:00",
			DateAber: "01 Amo 1580",
			DateAberWithDate: "Thu 01 Amo 1580",
			DateDoy: "1580.124",
			DateWoy: "1580W18-6"
		},
		stime: 7307181000000,
		gdate: [2201, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 23] },
		gtime: 7307181000000
	},
	{
		sdate: [1580, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 2],
			DateTime: "1580-05-02 00:00:00",
			DateAber: "02 Amo 1580",
			DateAberWithDate: "Fri 02 Amo 1580",
			DateDoy: "1580.125",
			DateWoy: "1580W18-7"
		},
		stime: 7307267400000,
		gdate: [2201, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 6, 24] },
		gtime: 7307267400000
	},
	{
		sdate: [1580, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 15],
			DateTime: "1580-05-15 00:00:00",
			DateAber: "15 Amo 1580",
			DateAberWithDate: "Thu 15 Amo 1580",
			DateDoy: "1580.138",
			DateWoy: "1580W20-6"
		},
		stime: 7308390600000,
		gdate: [2201, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 6] },
		gtime: 7308390600000
	},
	{
		sdate: [1580, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 30],
			DateTime: "1580-05-30 00:00:00",
			DateAber: "30 Amo 1580",
			DateAberWithDate: "Fri 30 Amo 1580",
			DateDoy: "1580.153",
			DateWoy: "1580W22-7"
		},
		stime: 7309686600000,
		gdate: [2201, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 21] },
		gtime: 7309686600000
	},
	{
		sdate: [1580, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 31],
			DateTime: "1580-05-31 00:00:00",
			DateAber: "31 Amo 1580",
			DateAberWithDate: "Sat 31 Amo 1580",
			DateDoy: "1580.154",
			DateWoy: "1580W23-1"
		},
		stime: 7309773000000,
		gdate: [2201, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 22] },
		gtime: 7309773000000
	},
	{
		sdate: [1580, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 1],
			DateTime: "1580-06-01 00:00:00",
			DateAber: "01 Sha 1580",
			DateAberWithDate: "Sun 01 Sha 1580",
			DateDoy: "1580.155",
			DateWoy: "1580W23-2"
		},
		stime: 7309859400000,
		gdate: [2201, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 23] },
		gtime: 7309859400000
	},
	{
		sdate: [1580, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 2],
			DateTime: "1580-06-02 00:00:00",
			DateAber: "02 Sha 1580",
			DateAberWithDate: "Mon 02 Sha 1580",
			DateDoy: "1580.156",
			DateWoy: "1580W23-3"
		},
		stime: 7309945800000,
		gdate: [2201, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 7, 24] },
		gtime: 7309945800000
	},
	{
		sdate: [1580, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 15],
			DateTime: "1580-06-15 00:00:00",
			DateAber: "15 Sha 1580",
			DateAberWithDate: "Sun 15 Sha 1580",
			DateDoy: "1580.169",
			DateWoy: "1580W25-2"
		},
		stime: 7311069000000,
		gdate: [2201, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 8, 6] },
		gtime: 7311069000000
	},
	{
		sdate: [1580, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 29],
			DateTime: "1580-06-29 00:00:00",
			DateAber: "29 Sha 1580",
			DateAberWithDate: "Sun 29 Sha 1580",
			DateDoy: "1580.183",
			DateWoy: "1580W27-2"
		},
		stime: 7312278600000,
		gdate: [2201, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2201, 8, 20] },
		gtime: 7312278600000
	},
	{
		sdate: [1580, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 30],
			DateTime: "1580-06-30 00:00:00",
			DateAber: "30 Sha 1580",
			DateAberWithDate: "Mon 30 Sha 1580",
			DateDoy: "1580.184",
			DateWoy: "1580W27-3"
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
			DateAberWithDate: "Wed 01 Meh 1580",
			DateDoy: "1580.186",
			DateWoy: "1580W27-5"
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
			DateAberWithDate: "Thu 02 Meh 1580",
			DateDoy: "1580.187",
			DateWoy: "1580W27-6"
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
			DateAberWithDate: "Wed 15 Meh 1580",
			DateDoy: "1580.200",
			DateWoy: "1580W29-5"
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
			DateAberWithDate: "Wed 29 Meh 1580",
			DateDoy: "1580.214",
			DateWoy: "1580W31-5"
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
			DateAberWithDate: "Thu 30 Meh 1580",
			DateDoy: "1580.215",
			DateWoy: "1580W31-6"
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
			DateAberWithDate: "Fri 01 Aba 1580",
			DateDoy: "1580.216",
			DateWoy: "1580W31-7"
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
			DateAberWithDate: "Sat 02 Aba 1580",
			DateDoy: "1580.217",
			DateWoy: "1580W32-1"
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
			DateAberWithDate: "Fri 15 Aba 1580",
			DateDoy: "1580.230",
			DateWoy: "1580W33-7"
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
			DateAberWithDate: "Fri 29 Aba 1580",
			DateDoy: "1580.244",
			DateWoy: "1580W35-7"
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
			DateAberWithDate: "Sat 30 Aba 1580",
			DateDoy: "1580.245",
			DateWoy: "1580W36-1"
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
			DateAberWithDate: "Sun 01 Aza 1580",
			DateDoy: "1580.246",
			DateWoy: "1580W36-2"
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
			DateAberWithDate: "Mon 02 Aza 1580",
			DateDoy: "1580.247",
			DateWoy: "1580W36-3"
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
			DateAberWithDate: "Sun 15 Aza 1580",
			DateDoy: "1580.260",
			DateWoy: "1580W38-2"
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
			DateAberWithDate: "Sun 29 Aza 1580",
			DateDoy: "1580.274",
			DateWoy: "1580W40-2"
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
			DateAberWithDate: "Mon 30 Aza 1580",
			DateDoy: "1580.275",
			DateWoy: "1580W40-3"
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
			DateAberWithDate: "Tue 01 Dey 1580",
			DateDoy: "1580.276",
			DateWoy: "1580W40-4"
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
			DateAberWithDate: "Wed 02 Dey 1580",
			DateDoy: "1580.277",
			DateWoy: "1580W40-5"
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
			DateAberWithDate: "Tue 15 Dey 1580",
			DateDoy: "1580.290",
			DateWoy: "1580W42-4"
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
			DateAberWithDate: "Tue 29 Dey 1580",
			DateDoy: "1580.304",
			DateWoy: "1580W44-4"
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
			DateAberWithDate: "Wed 30 Dey 1580",
			DateDoy: "1580.305",
			DateWoy: "1580W44-5"
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
			DateAberWithDate: "Thu 01 Bah 1580",
			DateDoy: "1580.306",
			DateWoy: "1580W44-6"
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
			DateAberWithDate: "Fri 02 Bah 1580",
			DateDoy: "1580.307",
			DateWoy: "1580W44-7"
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
			DateAberWithDate: "Thu 15 Bah 1580",
			DateDoy: "1580.320",
			DateWoy: "1580W46-6"
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
			DateAberWithDate: "Thu 29 Bah 1580",
			DateDoy: "1580.334",
			DateWoy: "1580W48-6"
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
			DateAberWithDate: "Fri 30 Bah 1580",
			DateDoy: "1580.335",
			DateWoy: "1580W48-7"
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
			DateAberWithDate: "Sat 01 Esf 1580",
			DateDoy: "1580.336",
			DateWoy: "1580W49-1"
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
			DateAberWithDate: "Sun 02 Esf 1580",
			DateDoy: "1580.337",
			DateWoy: "1580W49-2"
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
			DateAberWithDate: "Mon 03 Esf 1580",
			DateDoy: "1580.338",
			DateWoy: "1580W49-3"
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
			DateAberWithDate: "Tue 04 Esf 1580",
			DateDoy: "1580.339",
			DateWoy: "1580W49-4"
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
			DateAberWithDate: "Sat 15 Esf 1580",
			DateDoy: "1580.350",
			DateWoy: "1580W51-1"
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
			DateAberWithDate: "Tue 25 Esf 1580",
			DateDoy: "1580.360",
			DateWoy: "1580W52-4"
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
			DateAberWithDate: "Wed 26 Esf 1580",
			DateDoy: "1580.361",
			DateWoy: "1580W52-5"
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
			DateAberWithDate: "Thu 27 Esf 1580",
			DateDoy: "1580.362",
			DateWoy: "1580W52-6"
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
			DateAberWithDate: "Fri 28 Esf 1580",
			DateDoy: "1580.363",
			DateWoy: "1580W52-7"
		},
		stime: 7327830600000,
		gdate: [2202, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2202, 2, 19] },
		gtime: 7327830600000
	},

	{
		sdate: [1600, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 1],
			DateTime: "1600-01-01 00:00:00",
			DateAber: "01 Far 1600",
			DateAberWithDate: "Wed 01 Far 1600",
			DateDoy: "1600.000",
			DateWoy: "1599W53-5"
		},
		stime: 7927619400000,
		gdate: [2221, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 21] },
		gtime: 7927619400000
	},
	{
		sdate: [1600, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 2],
			DateTime: "1600-01-02 00:00:00",
			DateAber: "02 Far 1600",
			DateAberWithDate: "Thu 02 Far 1600",
			DateDoy: "1600.001",
			DateWoy: "1599W53-6"
		},
		stime: 7927705800000,
		gdate: [2221, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 22] },
		gtime: 7927705800000
	},
	{
		sdate: [1600, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 3],
			DateTime: "1600-01-03 00:00:00",
			DateAber: "03 Far 1600",
			DateAberWithDate: "Fri 03 Far 1600",
			DateDoy: "1600.002",
			DateWoy: "1599W53-7"
		},
		stime: 7927792200000,
		gdate: [2221, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 23] },
		gtime: 7927792200000
	},
	{
		sdate: [1600, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 4],
			DateTime: "1600-01-04 00:00:00",
			DateAber: "04 Far 1600",
			DateAberWithDate: "Sat 04 Far 1600",
			DateDoy: "1600.003",
			DateWoy: "1600W01-1"
		},
		stime: 7927878600000,
		gdate: [2221, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 24] },
		gtime: 7927878600000
	},
	{
		sdate: [1600, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 5],
			DateTime: "1600-01-05 00:00:00",
			DateAber: "05 Far 1600",
			DateAberWithDate: "Sun 05 Far 1600",
			DateDoy: "1600.004",
			DateWoy: "1600W01-2"
		},
		stime: 7927965000000,
		gdate: [2221, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 25] },
		gtime: 7927965000000
	},
	{
		sdate: [1600, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 6],
			DateTime: "1600-01-06 00:00:00",
			DateAber: "06 Far 1600",
			DateAberWithDate: "Mon 06 Far 1600",
			DateDoy: "1600.005",
			DateWoy: "1600W01-3"
		},
		stime: 7928051400000,
		gdate: [2221, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 26] },
		gtime: 7928051400000
	},
	{
		sdate: [1600, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 7],
			DateTime: "1600-01-07 00:00:00",
			DateAber: "07 Far 1600",
			DateAberWithDate: "Tue 07 Far 1600",
			DateDoy: "1600.006",
			DateWoy: "1600W01-4"
		},
		stime: 7928137800000,
		gdate: [2221, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 2, 27] },
		gtime: 7928137800000
	},
	{
		sdate: [1600, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 15],
			DateTime: "1600-01-15 00:00:00",
			DateAber: "15 Far 1600",
			DateAberWithDate: "Wed 15 Far 1600",
			DateDoy: "1600.014",
			DateWoy: "1600W02-5"
		},
		stime: 7928829000000,
		gdate: [2221, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 4] },
		gtime: 7928829000000
	},
	{
		sdate: [1600, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 29],
			DateTime: "1600-01-29 00:00:00",
			DateAber: "29 Far 1600",
			DateAberWithDate: "Wed 29 Far 1600",
			DateDoy: "1600.028",
			DateWoy: "1600W04-5"
		},
		stime: 7930038600000,
		gdate: [2221, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 18] },
		gtime: 7930038600000
	},
	{
		sdate: [1600, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 30],
			DateTime: "1600-01-30 00:00:00",
			DateAber: "30 Far 1600",
			DateAberWithDate: "Thu 30 Far 1600",
			DateDoy: "1600.029",
			DateWoy: "1600W04-6"
		},
		stime: 7930125000000,
		gdate: [2221, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 19] },
		gtime: 7930125000000
	},
	{
		sdate: [1600, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 31],
			DateTime: "1600-01-31 00:00:00",
			DateAber: "31 Far 1600",
			DateAberWithDate: "Fri 31 Far 1600",
			DateDoy: "1600.030",
			DateWoy: "1600W04-7"
		},
		stime: 7930211400000,
		gdate: [2221, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 20] },
		gtime: 7930211400000
	},
	{
		sdate: [1600, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 1],
			DateTime: "1600-02-01 00:00:00",
			DateAber: "01 Ord 1600",
			DateAberWithDate: "Sat 01 Ord 1600",
			DateDoy: "1600.031",
			DateWoy: "1600W05-1"
		},
		stime: 7930297800000,
		gdate: [2221, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 21] },
		gtime: 7930297800000
	},
	{
		sdate: [1600, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 2],
			DateTime: "1600-02-02 00:00:00",
			DateAber: "02 Ord 1600",
			DateAberWithDate: "Sun 02 Ord 1600",
			DateDoy: "1600.032",
			DateWoy: "1600W05-2"
		},
		stime: 7930384200000,
		gdate: [2221, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 3, 22] },
		gtime: 7930384200000
	},
	{
		sdate: [1600, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 15],
			DateTime: "1600-02-15 00:00:00",
			DateAber: "15 Ord 1600",
			DateAberWithDate: "Sat 15 Ord 1600",
			DateDoy: "1600.045",
			DateWoy: "1600W07-1"
		},
		stime: 7931507400000,
		gdate: [2221, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 5] },
		gtime: 7931507400000
	},
	{
		sdate: [1600, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 30],
			DateTime: "1600-02-30 00:00:00",
			DateAber: "30 Ord 1600",
			DateAberWithDate: "Sun 30 Ord 1600",
			DateDoy: "1600.060",
			DateWoy: "1600W09-2"
		},
		stime: 7932803400000,
		gdate: [2221, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 20] },
		gtime: 7932803400000
	},
	{
		sdate: [1600, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 31],
			DateTime: "1600-02-31 00:00:00",
			DateAber: "31 Ord 1600",
			DateAberWithDate: "Mon 31 Ord 1600",
			DateDoy: "1600.061",
			DateWoy: "1600W09-3"
		},
		stime: 7932889800000,
		gdate: [2221, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 21] },
		gtime: 7932889800000
	},
	{
		sdate: [1600, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 1],
			DateTime: "1600-03-01 00:00:00",
			DateAber: "01 Kho 1600",
			DateAberWithDate: "Tue 01 Kho 1600",
			DateDoy: "1600.062",
			DateWoy: "1600W09-4"
		},
		stime: 7932976200000,
		gdate: [2221, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 22] },
		gtime: 7932976200000
	},
	{
		sdate: [1600, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 2],
			DateTime: "1600-03-02 00:00:00",
			DateAber: "02 Kho 1600",
			DateAberWithDate: "Wed 02 Kho 1600",
			DateDoy: "1600.063",
			DateWoy: "1600W09-5"
		},
		stime: 7933062600000,
		gdate: [2221, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 4, 23] },
		gtime: 7933062600000
	},
	{
		sdate: [1600, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 15],
			DateTime: "1600-03-15 00:00:00",
			DateAber: "15 Kho 1600",
			DateAberWithDate: "Tue 15 Kho 1600",
			DateDoy: "1600.076",
			DateWoy: "1600W11-4"
		},
		stime: 7934185800000,
		gdate: [2221, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 5] },
		gtime: 7934185800000
	},
	{
		sdate: [1600, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 30],
			DateTime: "1600-03-30 00:00:00",
			DateAber: "30 Kho 1600",
			DateAberWithDate: "Wed 30 Kho 1600",
			DateDoy: "1600.091",
			DateWoy: "1600W13-5"
		},
		stime: 7935481800000,
		gdate: [2221, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 20] },
		gtime: 7935481800000
	},
	{
		sdate: [1600, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 31],
			DateTime: "1600-03-31 00:00:00",
			DateAber: "31 Kho 1600",
			DateAberWithDate: "Thu 31 Kho 1600",
			DateDoy: "1600.092",
			DateWoy: "1600W13-6"
		},
		stime: 7935568200000,
		gdate: [2221, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 21] },
		gtime: 7935568200000
	},
	{
		sdate: [1600, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 1],
			DateTime: "1600-04-01 00:00:00",
			DateAber: "01 Tir 1600",
			DateAberWithDate: "Fri 01 Tir 1600",
			DateDoy: "1600.093",
			DateWoy: "1600W13-7"
		},
		stime: 7935654600000,
		gdate: [2221, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 22] },
		gtime: 7935654600000
	},
	{
		sdate: [1600, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 2],
			DateTime: "1600-04-02 00:00:00",
			DateAber: "02 Tir 1600",
			DateAberWithDate: "Sat 02 Tir 1600",
			DateDoy: "1600.094",
			DateWoy: "1600W14-1"
		},
		stime: 7935741000000,
		gdate: [2221, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 5, 23] },
		gtime: 7935741000000
	},
	{
		sdate: [1600, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 15],
			DateTime: "1600-04-15 00:00:00",
			DateAber: "15 Tir 1600",
			DateAberWithDate: "Fri 15 Tir 1600",
			DateDoy: "1600.107",
			DateWoy: "1600W15-7"
		},
		stime: 7936864200000,
		gdate: [2221, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 6] },
		gtime: 7936864200000
	},
	{
		sdate: [1600, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 30],
			DateTime: "1600-04-30 00:00:00",
			DateAber: "30 Tir 1600",
			DateAberWithDate: "Sat 30 Tir 1600",
			DateDoy: "1600.122",
			DateWoy: "1600W18-1"
		},
		stime: 7938160200000,
		gdate: [2221, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 21] },
		gtime: 7938160200000
	},
	{
		sdate: [1600, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 31],
			DateTime: "1600-04-31 00:00:00",
			DateAber: "31 Tir 1600",
			DateAberWithDate: "Sun 31 Tir 1600",
			DateDoy: "1600.123",
			DateWoy: "1600W18-2"
		},
		stime: 7938246600000,
		gdate: [2221, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 22] },
		gtime: 7938246600000
	},
	{
		sdate: [1600, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 1],
			DateTime: "1600-05-01 00:00:00",
			DateAber: "01 Amo 1600",
			DateAberWithDate: "Mon 01 Amo 1600",
			DateDoy: "1600.124",
			DateWoy: "1600W18-3"
		},
		stime: 7938333000000,
		gdate: [2221, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 23] },
		gtime: 7938333000000
	},
	{
		sdate: [1600, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 2],
			DateTime: "1600-05-02 00:00:00",
			DateAber: "02 Amo 1600",
			DateAberWithDate: "Tue 02 Amo 1600",
			DateDoy: "1600.125",
			DateWoy: "1600W18-4"
		},
		stime: 7938419400000,
		gdate: [2221, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 6, 24] },
		gtime: 7938419400000
	},
	{
		sdate: [1600, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 15],
			DateTime: "1600-05-15 00:00:00",
			DateAber: "15 Amo 1600",
			DateAberWithDate: "Mon 15 Amo 1600",
			DateDoy: "1600.138",
			DateWoy: "1600W20-3"
		},
		stime: 7939542600000,
		gdate: [2221, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 6] },
		gtime: 7939542600000
	},
	{
		sdate: [1600, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 30],
			DateTime: "1600-05-30 00:00:00",
			DateAber: "30 Amo 1600",
			DateAberWithDate: "Tue 30 Amo 1600",
			DateDoy: "1600.153",
			DateWoy: "1600W22-4"
		},
		stime: 7940838600000,
		gdate: [2221, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 21] },
		gtime: 7940838600000
	},
	{
		sdate: [1600, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 31],
			DateTime: "1600-05-31 00:00:00",
			DateAber: "31 Amo 1600",
			DateAberWithDate: "Wed 31 Amo 1600",
			DateDoy: "1600.154",
			DateWoy: "1600W22-5"
		},
		stime: 7940925000000,
		gdate: [2221, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 22] },
		gtime: 7940925000000
	},
	{
		sdate: [1600, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 1],
			DateTime: "1600-06-01 00:00:00",
			DateAber: "01 Sha 1600",
			DateAberWithDate: "Thu 01 Sha 1600",
			DateDoy: "1600.155",
			DateWoy: "1600W22-6"
		},
		stime: 7941011400000,
		gdate: [2221, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 23] },
		gtime: 7941011400000
	},
	{
		sdate: [1600, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 2],
			DateTime: "1600-06-02 00:00:00",
			DateAber: "02 Sha 1600",
			DateAberWithDate: "Fri 02 Sha 1600",
			DateDoy: "1600.156",
			DateWoy: "1600W22-7"
		},
		stime: 7941097800000,
		gdate: [2221, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 7, 24] },
		gtime: 7941097800000
	},
	{
		sdate: [1600, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 15],
			DateTime: "1600-06-15 00:00:00",
			DateAber: "15 Sha 1600",
			DateAberWithDate: "Thu 15 Sha 1600",
			DateDoy: "1600.169",
			DateWoy: "1600W24-6"
		},
		stime: 7942221000000,
		gdate: [2221, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 8, 6] },
		gtime: 7942221000000
	},
	{
		sdate: [1600, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 29],
			DateTime: "1600-06-29 00:00:00",
			DateAber: "29 Sha 1600",
			DateAberWithDate: "Thu 29 Sha 1600",
			DateDoy: "1600.183",
			DateWoy: "1600W26-6"
		},
		stime: 7943430600000,
		gdate: [2221, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2221, 8, 20] },
		gtime: 7943430600000
	},
	{
		sdate: [1600, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 30],
			DateTime: "1600-06-30 00:00:00",
			DateAber: "30 Sha 1600",
			DateAberWithDate: "Fri 30 Sha 1600",
			DateDoy: "1600.184",
			DateWoy: "1600W26-7"
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
			DateAberWithDate: "Sun 01 Meh 1600",
			DateDoy: "1600.186",
			DateWoy: "1600W27-2"
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
			DateAberWithDate: "Mon 02 Meh 1600",
			DateDoy: "1600.187",
			DateWoy: "1600W27-3"
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
			DateAberWithDate: "Sun 15 Meh 1600",
			DateDoy: "1600.200",
			DateWoy: "1600W29-2"
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
			DateAberWithDate: "Sun 29 Meh 1600",
			DateDoy: "1600.214",
			DateWoy: "1600W31-2"
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
			DateAberWithDate: "Mon 30 Meh 1600",
			DateDoy: "1600.215",
			DateWoy: "1600W31-3"
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
			DateAberWithDate: "Tue 01 Aba 1600",
			DateDoy: "1600.216",
			DateWoy: "1600W31-4"
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
			DateAberWithDate: "Wed 02 Aba 1600",
			DateDoy: "1600.217",
			DateWoy: "1600W31-5"
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
			DateAberWithDate: "Tue 15 Aba 1600",
			DateDoy: "1600.230",
			DateWoy: "1600W33-4"
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
			DateAberWithDate: "Tue 29 Aba 1600",
			DateDoy: "1600.244",
			DateWoy: "1600W35-4"
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
			DateAberWithDate: "Wed 30 Aba 1600",
			DateDoy: "1600.245",
			DateWoy: "1600W35-5"
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
			DateAberWithDate: "Thu 01 Aza 1600",
			DateDoy: "1600.246",
			DateWoy: "1600W35-6"
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
			DateAberWithDate: "Fri 02 Aza 1600",
			DateDoy: "1600.247",
			DateWoy: "1600W35-7"
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
			DateAberWithDate: "Thu 15 Aza 1600",
			DateDoy: "1600.260",
			DateWoy: "1600W37-6"
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
			DateAberWithDate: "Thu 29 Aza 1600",
			DateDoy: "1600.274",
			DateWoy: "1600W39-6"
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
			DateAberWithDate: "Fri 30 Aza 1600",
			DateDoy: "1600.275",
			DateWoy: "1600W39-7"
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
			DateAberWithDate: "Sat 01 Dey 1600",
			DateDoy: "1600.276",
			DateWoy: "1600W40-1"
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
			DateAberWithDate: "Sun 02 Dey 1600",
			DateDoy: "1600.277",
			DateWoy: "1600W40-2"
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
			DateAberWithDate: "Sat 15 Dey 1600",
			DateDoy: "1600.290",
			DateWoy: "1600W42-1"
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
			DateAberWithDate: "Sat 29 Dey 1600",
			DateDoy: "1600.304",
			DateWoy: "1600W44-1"
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
			DateAberWithDate: "Sun 30 Dey 1600",
			DateDoy: "1600.305",
			DateWoy: "1600W44-2"
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
			DateAberWithDate: "Mon 01 Bah 1600",
			DateDoy: "1600.306",
			DateWoy: "1600W44-3"
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
			DateAberWithDate: "Tue 02 Bah 1600",
			DateDoy: "1600.307",
			DateWoy: "1600W44-4"
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
			DateAberWithDate: "Mon 15 Bah 1600",
			DateDoy: "1600.320",
			DateWoy: "1600W46-3"
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
			DateAberWithDate: "Mon 29 Bah 1600",
			DateDoy: "1600.334",
			DateWoy: "1600W48-3"
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
			DateAberWithDate: "Tue 30 Bah 1600",
			DateDoy: "1600.335",
			DateWoy: "1600W48-4"
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
			DateAberWithDate: "Wed 01 Esf 1600",
			DateDoy: "1600.336",
			DateWoy: "1600W48-5"
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
			DateAberWithDate: "Thu 02 Esf 1600",
			DateDoy: "1600.337",
			DateWoy: "1600W48-6"
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
			DateAberWithDate: "Fri 03 Esf 1600",
			DateDoy: "1600.338",
			DateWoy: "1600W48-7"
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
			DateAberWithDate: "Sat 04 Esf 1600",
			DateDoy: "1600.339",
			DateWoy: "1600W49-1"
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
			DateAberWithDate: "Wed 15 Esf 1600",
			DateDoy: "1600.350",
			DateWoy: "1600W50-5"
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
			DateAberWithDate: "Sat 25 Esf 1600",
			DateDoy: "1600.360",
			DateWoy: "1600W52-1"
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
			DateAberWithDate: "Sun 26 Esf 1600",
			DateDoy: "1600.361",
			DateWoy: "1600W52-2"
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
			DateAberWithDate: "Mon 27 Esf 1600",
			DateDoy: "1600.362",
			DateWoy: "1600W52-3"
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
			DateAberWithDate: "Tue 28 Esf 1600",
			DateDoy: "1600.363",
			DateWoy: "1600W52-4"
		},
		stime: 7958982600000,
		gdate: [2222, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2222, 2, 19] },
		gtime: 7958982600000
	},

	{
		sdate: [1620, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 1],
			DateTime: "1620-01-01 00:00:00",
			DateAber: "01 Far 1620",
			DateAberWithDate: "Sun 01 Far 1620",
			DateDoy: "1620.000",
			DateWoy: "1620W01-2"
		},
		stime: 8558771400000,
		gdate: [2241, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 21] },
		gtime: 8558771400000
	},
	{
		sdate: [1620, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 2],
			DateTime: "1620-01-02 00:00:00",
			DateAber: "02 Far 1620",
			DateAberWithDate: "Mon 02 Far 1620",
			DateDoy: "1620.001",
			DateWoy: "1620W01-3"
		},
		stime: 8558857800000,
		gdate: [2241, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 22] },
		gtime: 8558857800000
	},
	{
		sdate: [1620, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 3],
			DateTime: "1620-01-03 00:00:00",
			DateAber: "03 Far 1620",
			DateAberWithDate: "Tue 03 Far 1620",
			DateDoy: "1620.002",
			DateWoy: "1620W01-4"
		},
		stime: 8558944200000,
		gdate: [2241, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 23] },
		gtime: 8558944200000
	},
	{
		sdate: [1620, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 4],
			DateTime: "1620-01-04 00:00:00",
			DateAber: "04 Far 1620",
			DateAberWithDate: "Wed 04 Far 1620",
			DateDoy: "1620.003",
			DateWoy: "1620W01-5"
		},
		stime: 8559030600000,
		gdate: [2241, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 24] },
		gtime: 8559030600000
	},
	{
		sdate: [1620, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 5],
			DateTime: "1620-01-05 00:00:00",
			DateAber: "05 Far 1620",
			DateAberWithDate: "Thu 05 Far 1620",
			DateDoy: "1620.004",
			DateWoy: "1620W01-6"
		},
		stime: 8559117000000,
		gdate: [2241, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 25] },
		gtime: 8559117000000
	},
	{
		sdate: [1620, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 6],
			DateTime: "1620-01-06 00:00:00",
			DateAber: "06 Far 1620",
			DateAberWithDate: "Fri 06 Far 1620",
			DateDoy: "1620.005",
			DateWoy: "1620W01-7"
		},
		stime: 8559203400000,
		gdate: [2241, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 26] },
		gtime: 8559203400000
	},
	{
		sdate: [1620, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 7],
			DateTime: "1620-01-07 00:00:00",
			DateAber: "07 Far 1620",
			DateAberWithDate: "Sat 07 Far 1620",
			DateDoy: "1620.006",
			DateWoy: "1620W02-1"
		},
		stime: 8559289800000,
		gdate: [2241, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 2, 27] },
		gtime: 8559289800000
	},
	{
		sdate: [1620, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 15],
			DateTime: "1620-01-15 00:00:00",
			DateAber: "15 Far 1620",
			DateAberWithDate: "Sun 15 Far 1620",
			DateDoy: "1620.014",
			DateWoy: "1620W03-2"
		},
		stime: 8559981000000,
		gdate: [2241, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 4] },
		gtime: 8559981000000
	},
	{
		sdate: [1620, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 29],
			DateTime: "1620-01-29 00:00:00",
			DateAber: "29 Far 1620",
			DateAberWithDate: "Sun 29 Far 1620",
			DateDoy: "1620.028",
			DateWoy: "1620W05-2"
		},
		stime: 8561190600000,
		gdate: [2241, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 18] },
		gtime: 8561190600000
	},
	{
		sdate: [1620, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 30],
			DateTime: "1620-01-30 00:00:00",
			DateAber: "30 Far 1620",
			DateAberWithDate: "Mon 30 Far 1620",
			DateDoy: "1620.029",
			DateWoy: "1620W05-3"
		},
		stime: 8561277000000,
		gdate: [2241, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 19] },
		gtime: 8561277000000
	},
	{
		sdate: [1620, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 31],
			DateTime: "1620-01-31 00:00:00",
			DateAber: "31 Far 1620",
			DateAberWithDate: "Tue 31 Far 1620",
			DateDoy: "1620.030",
			DateWoy: "1620W05-4"
		},
		stime: 8561363400000,
		gdate: [2241, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 20] },
		gtime: 8561363400000
	},
	{
		sdate: [1620, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 1],
			DateTime: "1620-02-01 00:00:00",
			DateAber: "01 Ord 1620",
			DateAberWithDate: "Wed 01 Ord 1620",
			DateDoy: "1620.031",
			DateWoy: "1620W05-5"
		},
		stime: 8561449800000,
		gdate: [2241, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 21] },
		gtime: 8561449800000
	},
	{
		sdate: [1620, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 2],
			DateTime: "1620-02-02 00:00:00",
			DateAber: "02 Ord 1620",
			DateAberWithDate: "Thu 02 Ord 1620",
			DateDoy: "1620.032",
			DateWoy: "1620W05-6"
		},
		stime: 8561536200000,
		gdate: [2241, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 3, 22] },
		gtime: 8561536200000
	},
	{
		sdate: [1620, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 15],
			DateTime: "1620-02-15 00:00:00",
			DateAber: "15 Ord 1620",
			DateAberWithDate: "Wed 15 Ord 1620",
			DateDoy: "1620.045",
			DateWoy: "1620W07-5"
		},
		stime: 8562659400000,
		gdate: [2241, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 5] },
		gtime: 8562659400000
	},
	{
		sdate: [1620, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 30],
			DateTime: "1620-02-30 00:00:00",
			DateAber: "30 Ord 1620",
			DateAberWithDate: "Thu 30 Ord 1620",
			DateDoy: "1620.060",
			DateWoy: "1620W09-6"
		},
		stime: 8563955400000,
		gdate: [2241, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 20] },
		gtime: 8563955400000
	},
	{
		sdate: [1620, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 31],
			DateTime: "1620-02-31 00:00:00",
			DateAber: "31 Ord 1620",
			DateAberWithDate: "Fri 31 Ord 1620",
			DateDoy: "1620.061",
			DateWoy: "1620W09-7"
		},
		stime: 8564041800000,
		gdate: [2241, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 21] },
		gtime: 8564041800000
	},
	{
		sdate: [1620, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 1],
			DateTime: "1620-03-01 00:00:00",
			DateAber: "01 Kho 1620",
			DateAberWithDate: "Sat 01 Kho 1620",
			DateDoy: "1620.062",
			DateWoy: "1620W10-1"
		},
		stime: 8564128200000,
		gdate: [2241, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 22] },
		gtime: 8564128200000
	},
	{
		sdate: [1620, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 2],
			DateTime: "1620-03-02 00:00:00",
			DateAber: "02 Kho 1620",
			DateAberWithDate: "Sun 02 Kho 1620",
			DateDoy: "1620.063",
			DateWoy: "1620W10-2"
		},
		stime: 8564214600000,
		gdate: [2241, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 4, 23] },
		gtime: 8564214600000
	},
	{
		sdate: [1620, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 15],
			DateTime: "1620-03-15 00:00:00",
			DateAber: "15 Kho 1620",
			DateAberWithDate: "Sat 15 Kho 1620",
			DateDoy: "1620.076",
			DateWoy: "1620W12-1"
		},
		stime: 8565337800000,
		gdate: [2241, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 5] },
		gtime: 8565337800000
	},
	{
		sdate: [1620, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 30],
			DateTime: "1620-03-30 00:00:00",
			DateAber: "30 Kho 1620",
			DateAberWithDate: "Sun 30 Kho 1620",
			DateDoy: "1620.091",
			DateWoy: "1620W14-2"
		},
		stime: 8566633800000,
		gdate: [2241, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 20] },
		gtime: 8566633800000
	},
	{
		sdate: [1620, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 31],
			DateTime: "1620-03-31 00:00:00",
			DateAber: "31 Kho 1620",
			DateAberWithDate: "Mon 31 Kho 1620",
			DateDoy: "1620.092",
			DateWoy: "1620W14-3"
		},
		stime: 8566720200000,
		gdate: [2241, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 21] },
		gtime: 8566720200000
	},
	{
		sdate: [1620, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 1],
			DateTime: "1620-04-01 00:00:00",
			DateAber: "01 Tir 1620",
			DateAberWithDate: "Tue 01 Tir 1620",
			DateDoy: "1620.093",
			DateWoy: "1620W14-4"
		},
		stime: 8566806600000,
		gdate: [2241, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 22] },
		gtime: 8566806600000
	},
	{
		sdate: [1620, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 2],
			DateTime: "1620-04-02 00:00:00",
			DateAber: "02 Tir 1620",
			DateAberWithDate: "Wed 02 Tir 1620",
			DateDoy: "1620.094",
			DateWoy: "1620W14-5"
		},
		stime: 8566893000000,
		gdate: [2241, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 5, 23] },
		gtime: 8566893000000
	},
	{
		sdate: [1620, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 15],
			DateTime: "1620-04-15 00:00:00",
			DateAber: "15 Tir 1620",
			DateAberWithDate: "Tue 15 Tir 1620",
			DateDoy: "1620.107",
			DateWoy: "1620W16-4"
		},
		stime: 8568016200000,
		gdate: [2241, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 6] },
		gtime: 8568016200000
	},
	{
		sdate: [1620, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 30],
			DateTime: "1620-04-30 00:00:00",
			DateAber: "30 Tir 1620",
			DateAberWithDate: "Wed 30 Tir 1620",
			DateDoy: "1620.122",
			DateWoy: "1620W18-5"
		},
		stime: 8569312200000,
		gdate: [2241, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 21] },
		gtime: 8569312200000
	},
	{
		sdate: [1620, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 31],
			DateTime: "1620-04-31 00:00:00",
			DateAber: "31 Tir 1620",
			DateAberWithDate: "Thu 31 Tir 1620",
			DateDoy: "1620.123",
			DateWoy: "1620W18-6"
		},
		stime: 8569398600000,
		gdate: [2241, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 22] },
		gtime: 8569398600000
	},
	{
		sdate: [1620, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 1],
			DateTime: "1620-05-01 00:00:00",
			DateAber: "01 Amo 1620",
			DateAberWithDate: "Fri 01 Amo 1620",
			DateDoy: "1620.124",
			DateWoy: "1620W18-7"
		},
		stime: 8569485000000,
		gdate: [2241, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 23] },
		gtime: 8569485000000
	},
	{
		sdate: [1620, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 2],
			DateTime: "1620-05-02 00:00:00",
			DateAber: "02 Amo 1620",
			DateAberWithDate: "Sat 02 Amo 1620",
			DateDoy: "1620.125",
			DateWoy: "1620W19-1"
		},
		stime: 8569571400000,
		gdate: [2241, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 6, 24] },
		gtime: 8569571400000
	},
	{
		sdate: [1620, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 15],
			DateTime: "1620-05-15 00:00:00",
			DateAber: "15 Amo 1620",
			DateAberWithDate: "Fri 15 Amo 1620",
			DateDoy: "1620.138",
			DateWoy: "1620W20-7"
		},
		stime: 8570694600000,
		gdate: [2241, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 6] },
		gtime: 8570694600000
	},
	{
		sdate: [1620, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 30],
			DateTime: "1620-05-30 00:00:00",
			DateAber: "30 Amo 1620",
			DateAberWithDate: "Sat 30 Amo 1620",
			DateDoy: "1620.153",
			DateWoy: "1620W23-1"
		},
		stime: 8571990600000,
		gdate: [2241, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 21] },
		gtime: 8571990600000
	},
	{
		sdate: [1620, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 31],
			DateTime: "1620-05-31 00:00:00",
			DateAber: "31 Amo 1620",
			DateAberWithDate: "Sun 31 Amo 1620",
			DateDoy: "1620.154",
			DateWoy: "1620W23-2"
		},
		stime: 8572077000000,
		gdate: [2241, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 22] },
		gtime: 8572077000000
	},
	{
		sdate: [1620, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 1],
			DateTime: "1620-06-01 00:00:00",
			DateAber: "01 Sha 1620",
			DateAberWithDate: "Mon 01 Sha 1620",
			DateDoy: "1620.155",
			DateWoy: "1620W23-3"
		},
		stime: 8572163400000,
		gdate: [2241, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 23] },
		gtime: 8572163400000
	},
	{
		sdate: [1620, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 2],
			DateTime: "1620-06-02 00:00:00",
			DateAber: "02 Sha 1620",
			DateAberWithDate: "Tue 02 Sha 1620",
			DateDoy: "1620.156",
			DateWoy: "1620W23-4"
		},
		stime: 8572249800000,
		gdate: [2241, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 7, 24] },
		gtime: 8572249800000
	},
	{
		sdate: [1620, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 15],
			DateTime: "1620-06-15 00:00:00",
			DateAber: "15 Sha 1620",
			DateAberWithDate: "Mon 15 Sha 1620",
			DateDoy: "1620.169",
			DateWoy: "1620W25-3"
		},
		stime: 8573373000000,
		gdate: [2241, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 8, 6] },
		gtime: 8573373000000
	},
	{
		sdate: [1620, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 29],
			DateTime: "1620-06-29 00:00:00",
			DateAber: "29 Sha 1620",
			DateAberWithDate: "Mon 29 Sha 1620",
			DateDoy: "1620.183",
			DateWoy: "1620W27-3"
		},
		stime: 8574582600000,
		gdate: [2241, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2241, 8, 20] },
		gtime: 8574582600000
	},
	{
		sdate: [1620, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 30],
			DateTime: "1620-06-30 00:00:00",
			DateAber: "30 Sha 1620",
			DateAberWithDate: "Tue 30 Sha 1620",
			DateDoy: "1620.184",
			DateWoy: "1620W27-4"
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
			DateAberWithDate: "Thu 01 Meh 1620",
			DateDoy: "1620.186",
			DateWoy: "1620W27-6"
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
			DateAberWithDate: "Fri 02 Meh 1620",
			DateDoy: "1620.187",
			DateWoy: "1620W27-7"
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
			DateAberWithDate: "Thu 15 Meh 1620",
			DateDoy: "1620.200",
			DateWoy: "1620W29-6"
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
			DateAberWithDate: "Thu 29 Meh 1620",
			DateDoy: "1620.214",
			DateWoy: "1620W31-6"
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
			DateAberWithDate: "Fri 30 Meh 1620",
			DateDoy: "1620.215",
			DateWoy: "1620W31-7"
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
			DateAberWithDate: "Sat 01 Aba 1620",
			DateDoy: "1620.216",
			DateWoy: "1620W32-1"
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
			DateAberWithDate: "Sun 02 Aba 1620",
			DateDoy: "1620.217",
			DateWoy: "1620W32-2"
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
			DateAberWithDate: "Sat 15 Aba 1620",
			DateDoy: "1620.230",
			DateWoy: "1620W34-1"
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
			DateAberWithDate: "Sat 29 Aba 1620",
			DateDoy: "1620.244",
			DateWoy: "1620W36-1"
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
			DateAberWithDate: "Sun 30 Aba 1620",
			DateDoy: "1620.245",
			DateWoy: "1620W36-2"
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
			DateAberWithDate: "Mon 01 Aza 1620",
			DateDoy: "1620.246",
			DateWoy: "1620W36-3"
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
			DateAberWithDate: "Tue 02 Aza 1620",
			DateDoy: "1620.247",
			DateWoy: "1620W36-4"
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
			DateAberWithDate: "Mon 15 Aza 1620",
			DateDoy: "1620.260",
			DateWoy: "1620W38-3"
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
			DateAberWithDate: "Mon 29 Aza 1620",
			DateDoy: "1620.274",
			DateWoy: "1620W40-3"
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
			DateAberWithDate: "Tue 30 Aza 1620",
			DateDoy: "1620.275",
			DateWoy: "1620W40-4"
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
			DateAberWithDate: "Wed 01 Dey 1620",
			DateDoy: "1620.276",
			DateWoy: "1620W40-5"
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
			DateAberWithDate: "Thu 02 Dey 1620",
			DateDoy: "1620.277",
			DateWoy: "1620W40-6"
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
			DateAberWithDate: "Wed 15 Dey 1620",
			DateDoy: "1620.290",
			DateWoy: "1620W42-5"
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
			DateAberWithDate: "Wed 29 Dey 1620",
			DateDoy: "1620.304",
			DateWoy: "1620W44-5"
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
			DateAberWithDate: "Thu 30 Dey 1620",
			DateDoy: "1620.305",
			DateWoy: "1620W44-6"
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
			DateAberWithDate: "Fri 01 Bah 1620",
			DateDoy: "1620.306",
			DateWoy: "1620W44-7"
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
			DateAberWithDate: "Sat 02 Bah 1620",
			DateDoy: "1620.307",
			DateWoy: "1620W45-1"
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
			DateAberWithDate: "Fri 15 Bah 1620",
			DateDoy: "1620.320",
			DateWoy: "1620W46-7"
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
			DateAberWithDate: "Fri 29 Bah 1620",
			DateDoy: "1620.334",
			DateWoy: "1620W48-7"
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
			DateAberWithDate: "Sat 30 Bah 1620",
			DateDoy: "1620.335",
			DateWoy: "1620W49-1"
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
			DateAberWithDate: "Sun 01 Esf 1620",
			DateDoy: "1620.336",
			DateWoy: "1620W49-2"
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
			DateAberWithDate: "Mon 02 Esf 1620",
			DateDoy: "1620.337",
			DateWoy: "1620W49-3"
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
			DateAberWithDate: "Tue 03 Esf 1620",
			DateDoy: "1620.338",
			DateWoy: "1620W49-4"
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
			DateAberWithDate: "Wed 04 Esf 1620",
			DateDoy: "1620.339",
			DateWoy: "1620W49-5"
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
			DateAberWithDate: "Sun 15 Esf 1620",
			DateDoy: "1620.350",
			DateWoy: "1620W51-2"
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
			DateAberWithDate: "Wed 25 Esf 1620",
			DateDoy: "1620.360",
			DateWoy: "1620W52-5"
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
			DateAberWithDate: "Thu 26 Esf 1620",
			DateDoy: "1620.361",
			DateWoy: "1620W52-6"
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
			DateAberWithDate: "Fri 27 Esf 1620",
			DateDoy: "1620.362",
			DateWoy: "1620W52-7"
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
			DateAberWithDate: "Sat 28 Esf 1620",
			DateDoy: "1620.363",
			DateWoy: "1621W01-1"
		},
		stime: 8590134600000,
		gdate: [2242, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2242, 2, 19] },
		gtime: 8590134600000
	},

	{
		sdate: [1640, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 1],
			DateTime: "1640-01-01 00:00:00",
			DateAber: "01 Far 1640",
			DateAberWithDate: "Thu 01 Far 1640",
			DateDoy: "1640.000",
			DateWoy: "1639W53-6"
		},
		stime: 9189923400000,
		gdate: [2261, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 21] },
		gtime: 9189923400000
	},
	{
		sdate: [1640, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 2],
			DateTime: "1640-01-02 00:00:00",
			DateAber: "02 Far 1640",
			DateAberWithDate: "Fri 02 Far 1640",
			DateDoy: "1640.001",
			DateWoy: "1639W53-7"
		},
		stime: 9190009800000,
		gdate: [2261, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 22] },
		gtime: 9190009800000
	},
	{
		sdate: [1640, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 3],
			DateTime: "1640-01-03 00:00:00",
			DateAber: "03 Far 1640",
			DateAberWithDate: "Sat 03 Far 1640",
			DateDoy: "1640.002",
			DateWoy: "1640W01-1"
		},
		stime: 9190096200000,
		gdate: [2261, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 23] },
		gtime: 9190096200000
	},
	{
		sdate: [1640, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 4],
			DateTime: "1640-01-04 00:00:00",
			DateAber: "04 Far 1640",
			DateAberWithDate: "Sun 04 Far 1640",
			DateDoy: "1640.003",
			DateWoy: "1640W01-2"
		},
		stime: 9190182600000,
		gdate: [2261, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 24] },
		gtime: 9190182600000
	},
	{
		sdate: [1640, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 5],
			DateTime: "1640-01-05 00:00:00",
			DateAber: "05 Far 1640",
			DateAberWithDate: "Mon 05 Far 1640",
			DateDoy: "1640.004",
			DateWoy: "1640W01-3"
		},
		stime: 9190269000000,
		gdate: [2261, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 25] },
		gtime: 9190269000000
	},
	{
		sdate: [1640, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 6],
			DateTime: "1640-01-06 00:00:00",
			DateAber: "06 Far 1640",
			DateAberWithDate: "Tue 06 Far 1640",
			DateDoy: "1640.005",
			DateWoy: "1640W01-4"
		},
		stime: 9190355400000,
		gdate: [2261, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 26] },
		gtime: 9190355400000
	},
	{
		sdate: [1640, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 7],
			DateTime: "1640-01-07 00:00:00",
			DateAber: "07 Far 1640",
			DateAberWithDate: "Wed 07 Far 1640",
			DateDoy: "1640.006",
			DateWoy: "1640W01-5"
		},
		stime: 9190441800000,
		gdate: [2261, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 2, 27] },
		gtime: 9190441800000
	},
	{
		sdate: [1640, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 15],
			DateTime: "1640-01-15 00:00:00",
			DateAber: "15 Far 1640",
			DateAberWithDate: "Thu 15 Far 1640",
			DateDoy: "1640.014",
			DateWoy: "1640W02-6"
		},
		stime: 9191133000000,
		gdate: [2261, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 4] },
		gtime: 9191133000000
	},
	{
		sdate: [1640, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 29],
			DateTime: "1640-01-29 00:00:00",
			DateAber: "29 Far 1640",
			DateAberWithDate: "Thu 29 Far 1640",
			DateDoy: "1640.028",
			DateWoy: "1640W04-6"
		},
		stime: 9192342600000,
		gdate: [2261, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 18] },
		gtime: 9192342600000
	},
	{
		sdate: [1640, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 30],
			DateTime: "1640-01-30 00:00:00",
			DateAber: "30 Far 1640",
			DateAberWithDate: "Fri 30 Far 1640",
			DateDoy: "1640.029",
			DateWoy: "1640W04-7"
		},
		stime: 9192429000000,
		gdate: [2261, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 19] },
		gtime: 9192429000000
	},
	{
		sdate: [1640, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 31],
			DateTime: "1640-01-31 00:00:00",
			DateAber: "31 Far 1640",
			DateAberWithDate: "Sat 31 Far 1640",
			DateDoy: "1640.030",
			DateWoy: "1640W05-1"
		},
		stime: 9192515400000,
		gdate: [2261, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 20] },
		gtime: 9192515400000
	},
	{
		sdate: [1640, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 1],
			DateTime: "1640-02-01 00:00:00",
			DateAber: "01 Ord 1640",
			DateAberWithDate: "Sun 01 Ord 1640",
			DateDoy: "1640.031",
			DateWoy: "1640W05-2"
		},
		stime: 9192601800000,
		gdate: [2261, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 21] },
		gtime: 9192601800000
	},
	{
		sdate: [1640, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 2],
			DateTime: "1640-02-02 00:00:00",
			DateAber: "02 Ord 1640",
			DateAberWithDate: "Mon 02 Ord 1640",
			DateDoy: "1640.032",
			DateWoy: "1640W05-3"
		},
		stime: 9192688200000,
		gdate: [2261, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 3, 22] },
		gtime: 9192688200000
	},
	{
		sdate: [1640, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 15],
			DateTime: "1640-02-15 00:00:00",
			DateAber: "15 Ord 1640",
			DateAberWithDate: "Sun 15 Ord 1640",
			DateDoy: "1640.045",
			DateWoy: "1640W07-2"
		},
		stime: 9193811400000,
		gdate: [2261, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 5] },
		gtime: 9193811400000
	},
	{
		sdate: [1640, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 30],
			DateTime: "1640-02-30 00:00:00",
			DateAber: "30 Ord 1640",
			DateAberWithDate: "Mon 30 Ord 1640",
			DateDoy: "1640.060",
			DateWoy: "1640W09-3"
		},
		stime: 9195107400000,
		gdate: [2261, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 20] },
		gtime: 9195107400000
	},
	{
		sdate: [1640, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 31],
			DateTime: "1640-02-31 00:00:00",
			DateAber: "31 Ord 1640",
			DateAberWithDate: "Tue 31 Ord 1640",
			DateDoy: "1640.061",
			DateWoy: "1640W09-4"
		},
		stime: 9195193800000,
		gdate: [2261, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 21] },
		gtime: 9195193800000
	},
	{
		sdate: [1640, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 1],
			DateTime: "1640-03-01 00:00:00",
			DateAber: "01 Kho 1640",
			DateAberWithDate: "Wed 01 Kho 1640",
			DateDoy: "1640.062",
			DateWoy: "1640W09-5"
		},
		stime: 9195280200000,
		gdate: [2261, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 22] },
		gtime: 9195280200000
	},
	{
		sdate: [1640, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 2],
			DateTime: "1640-03-02 00:00:00",
			DateAber: "02 Kho 1640",
			DateAberWithDate: "Thu 02 Kho 1640",
			DateDoy: "1640.063",
			DateWoy: "1640W09-6"
		},
		stime: 9195366600000,
		gdate: [2261, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 4, 23] },
		gtime: 9195366600000
	},
	{
		sdate: [1640, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 15],
			DateTime: "1640-03-15 00:00:00",
			DateAber: "15 Kho 1640",
			DateAberWithDate: "Wed 15 Kho 1640",
			DateDoy: "1640.076",
			DateWoy: "1640W11-5"
		},
		stime: 9196489800000,
		gdate: [2261, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 5] },
		gtime: 9196489800000
	},
	{
		sdate: [1640, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 30],
			DateTime: "1640-03-30 00:00:00",
			DateAber: "30 Kho 1640",
			DateAberWithDate: "Thu 30 Kho 1640",
			DateDoy: "1640.091",
			DateWoy: "1640W13-6"
		},
		stime: 9197785800000,
		gdate: [2261, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 20] },
		gtime: 9197785800000
	},
	{
		sdate: [1640, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 31],
			DateTime: "1640-03-31 00:00:00",
			DateAber: "31 Kho 1640",
			DateAberWithDate: "Fri 31 Kho 1640",
			DateDoy: "1640.092",
			DateWoy: "1640W13-7"
		},
		stime: 9197872200000,
		gdate: [2261, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 21] },
		gtime: 9197872200000
	},
	{
		sdate: [1640, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 1],
			DateTime: "1640-04-01 00:00:00",
			DateAber: "01 Tir 1640",
			DateAberWithDate: "Sat 01 Tir 1640",
			DateDoy: "1640.093",
			DateWoy: "1640W14-1"
		},
		stime: 9197958600000,
		gdate: [2261, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 22] },
		gtime: 9197958600000
	},
	{
		sdate: [1640, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 2],
			DateTime: "1640-04-02 00:00:00",
			DateAber: "02 Tir 1640",
			DateAberWithDate: "Sun 02 Tir 1640",
			DateDoy: "1640.094",
			DateWoy: "1640W14-2"
		},
		stime: 9198045000000,
		gdate: [2261, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 5, 23] },
		gtime: 9198045000000
	},
	{
		sdate: [1640, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 15],
			DateTime: "1640-04-15 00:00:00",
			DateAber: "15 Tir 1640",
			DateAberWithDate: "Sat 15 Tir 1640",
			DateDoy: "1640.107",
			DateWoy: "1640W16-1"
		},
		stime: 9199168200000,
		gdate: [2261, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 6] },
		gtime: 9199168200000
	},
	{
		sdate: [1640, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 30],
			DateTime: "1640-04-30 00:00:00",
			DateAber: "30 Tir 1640",
			DateAberWithDate: "Sun 30 Tir 1640",
			DateDoy: "1640.122",
			DateWoy: "1640W18-2"
		},
		stime: 9200464200000,
		gdate: [2261, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 21] },
		gtime: 9200464200000
	},
	{
		sdate: [1640, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 31],
			DateTime: "1640-04-31 00:00:00",
			DateAber: "31 Tir 1640",
			DateAberWithDate: "Mon 31 Tir 1640",
			DateDoy: "1640.123",
			DateWoy: "1640W18-3"
		},
		stime: 9200550600000,
		gdate: [2261, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 22] },
		gtime: 9200550600000
	},
	{
		sdate: [1640, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 1],
			DateTime: "1640-05-01 00:00:00",
			DateAber: "01 Amo 1640",
			DateAberWithDate: "Tue 01 Amo 1640",
			DateDoy: "1640.124",
			DateWoy: "1640W18-4"
		},
		stime: 9200637000000,
		gdate: [2261, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 23] },
		gtime: 9200637000000
	},
	{
		sdate: [1640, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 2],
			DateTime: "1640-05-02 00:00:00",
			DateAber: "02 Amo 1640",
			DateAberWithDate: "Wed 02 Amo 1640",
			DateDoy: "1640.125",
			DateWoy: "1640W18-5"
		},
		stime: 9200723400000,
		gdate: [2261, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 6, 24] },
		gtime: 9200723400000
	},
	{
		sdate: [1640, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 15],
			DateTime: "1640-05-15 00:00:00",
			DateAber: "15 Amo 1640",
			DateAberWithDate: "Tue 15 Amo 1640",
			DateDoy: "1640.138",
			DateWoy: "1640W20-4"
		},
		stime: 9201846600000,
		gdate: [2261, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 6] },
		gtime: 9201846600000
	},
	{
		sdate: [1640, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 30],
			DateTime: "1640-05-30 00:00:00",
			DateAber: "30 Amo 1640",
			DateAberWithDate: "Wed 30 Amo 1640",
			DateDoy: "1640.153",
			DateWoy: "1640W22-5"
		},
		stime: 9203142600000,
		gdate: [2261, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 21] },
		gtime: 9203142600000
	},
	{
		sdate: [1640, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 31],
			DateTime: "1640-05-31 00:00:00",
			DateAber: "31 Amo 1640",
			DateAberWithDate: "Thu 31 Amo 1640",
			DateDoy: "1640.154",
			DateWoy: "1640W22-6"
		},
		stime: 9203229000000,
		gdate: [2261, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 22] },
		gtime: 9203229000000
	},
	{
		sdate: [1640, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 1],
			DateTime: "1640-06-01 00:00:00",
			DateAber: "01 Sha 1640",
			DateAberWithDate: "Fri 01 Sha 1640",
			DateDoy: "1640.155",
			DateWoy: "1640W22-7"
		},
		stime: 9203315400000,
		gdate: [2261, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 23] },
		gtime: 9203315400000
	},
	{
		sdate: [1640, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 2],
			DateTime: "1640-06-02 00:00:00",
			DateAber: "02 Sha 1640",
			DateAberWithDate: "Sat 02 Sha 1640",
			DateDoy: "1640.156",
			DateWoy: "1640W23-1"
		},
		stime: 9203401800000,
		gdate: [2261, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 7, 24] },
		gtime: 9203401800000
	},
	{
		sdate: [1640, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 15],
			DateTime: "1640-06-15 00:00:00",
			DateAber: "15 Sha 1640",
			DateAberWithDate: "Fri 15 Sha 1640",
			DateDoy: "1640.169",
			DateWoy: "1640W24-7"
		},
		stime: 9204525000000,
		gdate: [2261, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 8, 6] },
		gtime: 9204525000000
	},
	{
		sdate: [1640, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 29],
			DateTime: "1640-06-29 00:00:00",
			DateAber: "29 Sha 1640",
			DateAberWithDate: "Fri 29 Sha 1640",
			DateDoy: "1640.183",
			DateWoy: "1640W26-7"
		},
		stime: 9205734600000,
		gdate: [2261, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2261, 8, 20] },
		gtime: 9205734600000
	},
	{
		sdate: [1640, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 30],
			DateTime: "1640-06-30 00:00:00",
			DateAber: "30 Sha 1640",
			DateAberWithDate: "Sat 30 Sha 1640",
			DateDoy: "1640.184",
			DateWoy: "1640W27-1"
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
			DateAberWithDate: "Mon 01 Meh 1640",
			DateDoy: "1640.186",
			DateWoy: "1640W27-3"
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
			DateAberWithDate: "Tue 02 Meh 1640",
			DateDoy: "1640.187",
			DateWoy: "1640W27-4"
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
			DateAberWithDate: "Mon 15 Meh 1640",
			DateDoy: "1640.200",
			DateWoy: "1640W29-3"
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
			DateAberWithDate: "Mon 29 Meh 1640",
			DateDoy: "1640.214",
			DateWoy: "1640W31-3"
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
			DateAberWithDate: "Tue 30 Meh 1640",
			DateDoy: "1640.215",
			DateWoy: "1640W31-4"
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
			DateAberWithDate: "Wed 01 Aba 1640",
			DateDoy: "1640.216",
			DateWoy: "1640W31-5"
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
			DateAberWithDate: "Thu 02 Aba 1640",
			DateDoy: "1640.217",
			DateWoy: "1640W31-6"
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
			DateAberWithDate: "Wed 15 Aba 1640",
			DateDoy: "1640.230",
			DateWoy: "1640W33-5"
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
			DateAberWithDate: "Wed 29 Aba 1640",
			DateDoy: "1640.244",
			DateWoy: "1640W35-5"
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
			DateAberWithDate: "Thu 30 Aba 1640",
			DateDoy: "1640.245",
			DateWoy: "1640W35-6"
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
			DateAberWithDate: "Fri 01 Aza 1640",
			DateDoy: "1640.246",
			DateWoy: "1640W35-7"
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
			DateAberWithDate: "Sat 02 Aza 1640",
			DateDoy: "1640.247",
			DateWoy: "1640W36-1"
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
			DateAberWithDate: "Fri 15 Aza 1640",
			DateDoy: "1640.260",
			DateWoy: "1640W37-7"
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
			DateAberWithDate: "Fri 29 Aza 1640",
			DateDoy: "1640.274",
			DateWoy: "1640W39-7"
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
			DateAberWithDate: "Sat 30 Aza 1640",
			DateDoy: "1640.275",
			DateWoy: "1640W40-1"
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
			DateAberWithDate: "Sun 01 Dey 1640",
			DateDoy: "1640.276",
			DateWoy: "1640W40-2"
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
			DateAberWithDate: "Mon 02 Dey 1640",
			DateDoy: "1640.277",
			DateWoy: "1640W40-3"
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
			DateAberWithDate: "Sun 15 Dey 1640",
			DateDoy: "1640.290",
			DateWoy: "1640W42-2"
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
			DateAberWithDate: "Sun 29 Dey 1640",
			DateDoy: "1640.304",
			DateWoy: "1640W44-2"
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
			DateAberWithDate: "Mon 30 Dey 1640",
			DateDoy: "1640.305",
			DateWoy: "1640W44-3"
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
			DateAberWithDate: "Tue 01 Bah 1640",
			DateDoy: "1640.306",
			DateWoy: "1640W44-4"
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
			DateAberWithDate: "Wed 02 Bah 1640",
			DateDoy: "1640.307",
			DateWoy: "1640W44-5"
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
			DateAberWithDate: "Tue 15 Bah 1640",
			DateDoy: "1640.320",
			DateWoy: "1640W46-4"
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
			DateAberWithDate: "Tue 29 Bah 1640",
			DateDoy: "1640.334",
			DateWoy: "1640W48-4"
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
			DateAberWithDate: "Wed 30 Bah 1640",
			DateDoy: "1640.335",
			DateWoy: "1640W48-5"
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
			DateAberWithDate: "Thu 01 Esf 1640",
			DateDoy: "1640.336",
			DateWoy: "1640W48-6"
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
			DateAberWithDate: "Fri 02 Esf 1640",
			DateDoy: "1640.337",
			DateWoy: "1640W48-7"
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
			DateAberWithDate: "Sat 03 Esf 1640",
			DateDoy: "1640.338",
			DateWoy: "1640W49-1"
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
			DateAberWithDate: "Sun 04 Esf 1640",
			DateDoy: "1640.339",
			DateWoy: "1640W49-2"
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
			DateAberWithDate: "Thu 15 Esf 1640",
			DateDoy: "1640.350",
			DateWoy: "1640W50-6"
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
			DateAberWithDate: "Sun 25 Esf 1640",
			DateDoy: "1640.360",
			DateWoy: "1640W52-2"
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
			DateAberWithDate: "Mon 26 Esf 1640",
			DateDoy: "1640.361",
			DateWoy: "1640W52-3"
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
			DateAberWithDate: "Tue 27 Esf 1640",
			DateDoy: "1640.362",
			DateWoy: "1640W52-4"
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
			DateAberWithDate: "Wed 28 Esf 1640",
			DateDoy: "1640.363",
			DateWoy: "1640W52-5"
		},
		stime: 9221286600000,
		gdate: [2262, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2262, 2, 19] },
		gtime: 9221286600000
	},

	{
		sdate: [1660, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 1],
			DateTime: "1660-01-01 00:00:00",
			DateAber: "01 Far 1660",
			DateAberWithDate: "Mon 01 Far 1660",
			DateDoy: "1660.000",
			DateWoy: "1660W01-3"
		},
		stime: 9821075400000,
		gdate: [2281, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 21] },
		gtime: 9821075400000
	},
	{
		sdate: [1660, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 2],
			DateTime: "1660-01-02 00:00:00",
			DateAber: "02 Far 1660",
			DateAberWithDate: "Tue 02 Far 1660",
			DateDoy: "1660.001",
			DateWoy: "1660W01-4"
		},
		stime: 9821161800000,
		gdate: [2281, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 22] },
		gtime: 9821161800000
	},
	{
		sdate: [1660, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 3],
			DateTime: "1660-01-03 00:00:00",
			DateAber: "03 Far 1660",
			DateAberWithDate: "Wed 03 Far 1660",
			DateDoy: "1660.002",
			DateWoy: "1660W01-5"
		},
		stime: 9821248200000,
		gdate: [2281, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 23] },
		gtime: 9821248200000
	},
	{
		sdate: [1660, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 4],
			DateTime: "1660-01-04 00:00:00",
			DateAber: "04 Far 1660",
			DateAberWithDate: "Thu 04 Far 1660",
			DateDoy: "1660.003",
			DateWoy: "1660W01-6"
		},
		stime: 9821334600000,
		gdate: [2281, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 24] },
		gtime: 9821334600000
	},
	{
		sdate: [1660, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 5],
			DateTime: "1660-01-05 00:00:00",
			DateAber: "05 Far 1660",
			DateAberWithDate: "Fri 05 Far 1660",
			DateDoy: "1660.004",
			DateWoy: "1660W01-7"
		},
		stime: 9821421000000,
		gdate: [2281, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 25] },
		gtime: 9821421000000
	},
	{
		sdate: [1660, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 6],
			DateTime: "1660-01-06 00:00:00",
			DateAber: "06 Far 1660",
			DateAberWithDate: "Sat 06 Far 1660",
			DateDoy: "1660.005",
			DateWoy: "1660W02-1"
		},
		stime: 9821507400000,
		gdate: [2281, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 26] },
		gtime: 9821507400000
	},
	{
		sdate: [1660, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 7],
			DateTime: "1660-01-07 00:00:00",
			DateAber: "07 Far 1660",
			DateAberWithDate: "Sun 07 Far 1660",
			DateDoy: "1660.006",
			DateWoy: "1660W02-2"
		},
		stime: 9821593800000,
		gdate: [2281, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 2, 27] },
		gtime: 9821593800000
	},
	{
		sdate: [1660, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 15],
			DateTime: "1660-01-15 00:00:00",
			DateAber: "15 Far 1660",
			DateAberWithDate: "Mon 15 Far 1660",
			DateDoy: "1660.014",
			DateWoy: "1660W03-3"
		},
		stime: 9822285000000,
		gdate: [2281, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 4] },
		gtime: 9822285000000
	},
	{
		sdate: [1660, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 29],
			DateTime: "1660-01-29 00:00:00",
			DateAber: "29 Far 1660",
			DateAberWithDate: "Mon 29 Far 1660",
			DateDoy: "1660.028",
			DateWoy: "1660W05-3"
		},
		stime: 9823494600000,
		gdate: [2281, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 18] },
		gtime: 9823494600000
	},
	{
		sdate: [1660, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 30],
			DateTime: "1660-01-30 00:00:00",
			DateAber: "30 Far 1660",
			DateAberWithDate: "Tue 30 Far 1660",
			DateDoy: "1660.029",
			DateWoy: "1660W05-4"
		},
		stime: 9823581000000,
		gdate: [2281, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 19] },
		gtime: 9823581000000
	},
	{
		sdate: [1660, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 31],
			DateTime: "1660-01-31 00:00:00",
			DateAber: "31 Far 1660",
			DateAberWithDate: "Wed 31 Far 1660",
			DateDoy: "1660.030",
			DateWoy: "1660W05-5"
		},
		stime: 9823667400000,
		gdate: [2281, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 20] },
		gtime: 9823667400000
	},
	{
		sdate: [1660, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 1],
			DateTime: "1660-02-01 00:00:00",
			DateAber: "01 Ord 1660",
			DateAberWithDate: "Thu 01 Ord 1660",
			DateDoy: "1660.031",
			DateWoy: "1660W05-6"
		},
		stime: 9823753800000,
		gdate: [2281, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 21] },
		gtime: 9823753800000
	},
	{
		sdate: [1660, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 2],
			DateTime: "1660-02-02 00:00:00",
			DateAber: "02 Ord 1660",
			DateAberWithDate: "Fri 02 Ord 1660",
			DateDoy: "1660.032",
			DateWoy: "1660W05-7"
		},
		stime: 9823840200000,
		gdate: [2281, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 3, 22] },
		gtime: 9823840200000
	},
	{
		sdate: [1660, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 15],
			DateTime: "1660-02-15 00:00:00",
			DateAber: "15 Ord 1660",
			DateAberWithDate: "Thu 15 Ord 1660",
			DateDoy: "1660.045",
			DateWoy: "1660W07-6"
		},
		stime: 9824963400000,
		gdate: [2281, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 5] },
		gtime: 9824963400000
	},
	{
		sdate: [1660, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 30],
			DateTime: "1660-02-30 00:00:00",
			DateAber: "30 Ord 1660",
			DateAberWithDate: "Fri 30 Ord 1660",
			DateDoy: "1660.060",
			DateWoy: "1660W09-7"
		},
		stime: 9826259400000,
		gdate: [2281, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 20] },
		gtime: 9826259400000
	},
	{
		sdate: [1660, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 31],
			DateTime: "1660-02-31 00:00:00",
			DateAber: "31 Ord 1660",
			DateAberWithDate: "Sat 31 Ord 1660",
			DateDoy: "1660.061",
			DateWoy: "1660W10-1"
		},
		stime: 9826345800000,
		gdate: [2281, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 21] },
		gtime: 9826345800000
	},
	{
		sdate: [1660, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 1],
			DateTime: "1660-03-01 00:00:00",
			DateAber: "01 Kho 1660",
			DateAberWithDate: "Sun 01 Kho 1660",
			DateDoy: "1660.062",
			DateWoy: "1660W10-2"
		},
		stime: 9826432200000,
		gdate: [2281, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 22] },
		gtime: 9826432200000
	},
	{
		sdate: [1660, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 2],
			DateTime: "1660-03-02 00:00:00",
			DateAber: "02 Kho 1660",
			DateAberWithDate: "Mon 02 Kho 1660",
			DateDoy: "1660.063",
			DateWoy: "1660W10-3"
		},
		stime: 9826518600000,
		gdate: [2281, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 4, 23] },
		gtime: 9826518600000
	},
	{
		sdate: [1660, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 15],
			DateTime: "1660-03-15 00:00:00",
			DateAber: "15 Kho 1660",
			DateAberWithDate: "Sun 15 Kho 1660",
			DateDoy: "1660.076",
			DateWoy: "1660W12-2"
		},
		stime: 9827641800000,
		gdate: [2281, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 5] },
		gtime: 9827641800000
	},
	{
		sdate: [1660, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 30],
			DateTime: "1660-03-30 00:00:00",
			DateAber: "30 Kho 1660",
			DateAberWithDate: "Mon 30 Kho 1660",
			DateDoy: "1660.091",
			DateWoy: "1660W14-3"
		},
		stime: 9828937800000,
		gdate: [2281, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 20] },
		gtime: 9828937800000
	},
	{
		sdate: [1660, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 31],
			DateTime: "1660-03-31 00:00:00",
			DateAber: "31 Kho 1660",
			DateAberWithDate: "Tue 31 Kho 1660",
			DateDoy: "1660.092",
			DateWoy: "1660W14-4"
		},
		stime: 9829024200000,
		gdate: [2281, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 21] },
		gtime: 9829024200000
	},
	{
		sdate: [1660, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 1],
			DateTime: "1660-04-01 00:00:00",
			DateAber: "01 Tir 1660",
			DateAberWithDate: "Wed 01 Tir 1660",
			DateDoy: "1660.093",
			DateWoy: "1660W14-5"
		},
		stime: 9829110600000,
		gdate: [2281, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 22] },
		gtime: 9829110600000
	},
	{
		sdate: [1660, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 2],
			DateTime: "1660-04-02 00:00:00",
			DateAber: "02 Tir 1660",
			DateAberWithDate: "Thu 02 Tir 1660",
			DateDoy: "1660.094",
			DateWoy: "1660W14-6"
		},
		stime: 9829197000000,
		gdate: [2281, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 5, 23] },
		gtime: 9829197000000
	},
	{
		sdate: [1660, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 15],
			DateTime: "1660-04-15 00:00:00",
			DateAber: "15 Tir 1660",
			DateAberWithDate: "Wed 15 Tir 1660",
			DateDoy: "1660.107",
			DateWoy: "1660W16-5"
		},
		stime: 9830320200000,
		gdate: [2281, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 6] },
		gtime: 9830320200000
	},
	{
		sdate: [1660, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 30],
			DateTime: "1660-04-30 00:00:00",
			DateAber: "30 Tir 1660",
			DateAberWithDate: "Thu 30 Tir 1660",
			DateDoy: "1660.122",
			DateWoy: "1660W18-6"
		},
		stime: 9831616200000,
		gdate: [2281, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 21] },
		gtime: 9831616200000
	},
	{
		sdate: [1660, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 31],
			DateTime: "1660-04-31 00:00:00",
			DateAber: "31 Tir 1660",
			DateAberWithDate: "Fri 31 Tir 1660",
			DateDoy: "1660.123",
			DateWoy: "1660W18-7"
		},
		stime: 9831702600000,
		gdate: [2281, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 22] },
		gtime: 9831702600000
	},
	{
		sdate: [1660, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 1],
			DateTime: "1660-05-01 00:00:00",
			DateAber: "01 Amo 1660",
			DateAberWithDate: "Sat 01 Amo 1660",
			DateDoy: "1660.124",
			DateWoy: "1660W19-1"
		},
		stime: 9831789000000,
		gdate: [2281, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 23] },
		gtime: 9831789000000
	},
	{
		sdate: [1660, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 2],
			DateTime: "1660-05-02 00:00:00",
			DateAber: "02 Amo 1660",
			DateAberWithDate: "Sun 02 Amo 1660",
			DateDoy: "1660.125",
			DateWoy: "1660W19-2"
		},
		stime: 9831875400000,
		gdate: [2281, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 6, 24] },
		gtime: 9831875400000
	},
	{
		sdate: [1660, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 15],
			DateTime: "1660-05-15 00:00:00",
			DateAber: "15 Amo 1660",
			DateAberWithDate: "Sat 15 Amo 1660",
			DateDoy: "1660.138",
			DateWoy: "1660W21-1"
		},
		stime: 9832998600000,
		gdate: [2281, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 6] },
		gtime: 9832998600000
	},
	{
		sdate: [1660, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 30],
			DateTime: "1660-05-30 00:00:00",
			DateAber: "30 Amo 1660",
			DateAberWithDate: "Sun 30 Amo 1660",
			DateDoy: "1660.153",
			DateWoy: "1660W23-2"
		},
		stime: 9834294600000,
		gdate: [2281, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 21] },
		gtime: 9834294600000
	},
	{
		sdate: [1660, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 31],
			DateTime: "1660-05-31 00:00:00",
			DateAber: "31 Amo 1660",
			DateAberWithDate: "Mon 31 Amo 1660",
			DateDoy: "1660.154",
			DateWoy: "1660W23-3"
		},
		stime: 9834381000000,
		gdate: [2281, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 22] },
		gtime: 9834381000000
	},
	{
		sdate: [1660, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 1],
			DateTime: "1660-06-01 00:00:00",
			DateAber: "01 Sha 1660",
			DateAberWithDate: "Tue 01 Sha 1660",
			DateDoy: "1660.155",
			DateWoy: "1660W23-4"
		},
		stime: 9834467400000,
		gdate: [2281, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 23] },
		gtime: 9834467400000
	},
	{
		sdate: [1660, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 2],
			DateTime: "1660-06-02 00:00:00",
			DateAber: "02 Sha 1660",
			DateAberWithDate: "Wed 02 Sha 1660",
			DateDoy: "1660.156",
			DateWoy: "1660W23-5"
		},
		stime: 9834553800000,
		gdate: [2281, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 7, 24] },
		gtime: 9834553800000
	},
	{
		sdate: [1660, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 15],
			DateTime: "1660-06-15 00:00:00",
			DateAber: "15 Sha 1660",
			DateAberWithDate: "Tue 15 Sha 1660",
			DateDoy: "1660.169",
			DateWoy: "1660W25-4"
		},
		stime: 9835677000000,
		gdate: [2281, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 8, 6] },
		gtime: 9835677000000
	},
	{
		sdate: [1660, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 29],
			DateTime: "1660-06-29 00:00:00",
			DateAber: "29 Sha 1660",
			DateAberWithDate: "Tue 29 Sha 1660",
			DateDoy: "1660.183",
			DateWoy: "1660W27-4"
		},
		stime: 9836886600000,
		gdate: [2281, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2281, 8, 20] },
		gtime: 9836886600000
	},
	{
		sdate: [1660, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 30],
			DateTime: "1660-06-30 00:00:00",
			DateAber: "30 Sha 1660",
			DateAberWithDate: "Wed 30 Sha 1660",
			DateDoy: "1660.184",
			DateWoy: "1660W27-5"
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
			DateAberWithDate: "Fri 01 Meh 1660",
			DateDoy: "1660.186",
			DateWoy: "1660W27-7"
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
			DateAberWithDate: "Sat 02 Meh 1660",
			DateDoy: "1660.187",
			DateWoy: "1660W28-1"
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
			DateAberWithDate: "Fri 15 Meh 1660",
			DateDoy: "1660.200",
			DateWoy: "1660W29-7"
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
			DateAberWithDate: "Fri 29 Meh 1660",
			DateDoy: "1660.214",
			DateWoy: "1660W31-7"
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
			DateAberWithDate: "Sat 30 Meh 1660",
			DateDoy: "1660.215",
			DateWoy: "1660W32-1"
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
			DateAberWithDate: "Sun 01 Aba 1660",
			DateDoy: "1660.216",
			DateWoy: "1660W32-2"
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
			DateAberWithDate: "Mon 02 Aba 1660",
			DateDoy: "1660.217",
			DateWoy: "1660W32-3"
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
			DateAberWithDate: "Sun 15 Aba 1660",
			DateDoy: "1660.230",
			DateWoy: "1660W34-2"
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
			DateAberWithDate: "Sun 29 Aba 1660",
			DateDoy: "1660.244",
			DateWoy: "1660W36-2"
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
			DateAberWithDate: "Mon 30 Aba 1660",
			DateDoy: "1660.245",
			DateWoy: "1660W36-3"
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
			DateAberWithDate: "Tue 01 Aza 1660",
			DateDoy: "1660.246",
			DateWoy: "1660W36-4"
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
			DateAberWithDate: "Wed 02 Aza 1660",
			DateDoy: "1660.247",
			DateWoy: "1660W36-5"
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
			DateAberWithDate: "Tue 15 Aza 1660",
			DateDoy: "1660.260",
			DateWoy: "1660W38-4"
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
			DateAberWithDate: "Tue 29 Aza 1660",
			DateDoy: "1660.274",
			DateWoy: "1660W40-4"
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
			DateAberWithDate: "Wed 30 Aza 1660",
			DateDoy: "1660.275",
			DateWoy: "1660W40-5"
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
			DateAberWithDate: "Thu 01 Dey 1660",
			DateDoy: "1660.276",
			DateWoy: "1660W40-6"
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
			DateAberWithDate: "Fri 02 Dey 1660",
			DateDoy: "1660.277",
			DateWoy: "1660W40-7"
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
			DateAberWithDate: "Thu 15 Dey 1660",
			DateDoy: "1660.290",
			DateWoy: "1660W42-6"
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
			DateAberWithDate: "Thu 29 Dey 1660",
			DateDoy: "1660.304",
			DateWoy: "1660W44-6"
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
			DateAberWithDate: "Fri 30 Dey 1660",
			DateDoy: "1660.305",
			DateWoy: "1660W44-7"
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
			DateAberWithDate: "Sat 01 Bah 1660",
			DateDoy: "1660.306",
			DateWoy: "1660W45-1"
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
			DateAberWithDate: "Sun 02 Bah 1660",
			DateDoy: "1660.307",
			DateWoy: "1660W45-2"
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
			DateAberWithDate: "Sat 15 Bah 1660",
			DateDoy: "1660.320",
			DateWoy: "1660W47-1"
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
			DateAberWithDate: "Sat 29 Bah 1660",
			DateDoy: "1660.334",
			DateWoy: "1660W49-1"
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
			DateAberWithDate: "Sun 30 Bah 1660",
			DateDoy: "1660.335",
			DateWoy: "1660W49-2"
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
			DateAberWithDate: "Mon 01 Esf 1660",
			DateDoy: "1660.336",
			DateWoy: "1660W49-3"
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
			DateAberWithDate: "Tue 02 Esf 1660",
			DateDoy: "1660.337",
			DateWoy: "1660W49-4"
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
			DateAberWithDate: "Wed 03 Esf 1660",
			DateDoy: "1660.338",
			DateWoy: "1660W49-5"
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
			DateAberWithDate: "Thu 04 Esf 1660",
			DateDoy: "1660.339",
			DateWoy: "1660W49-6"
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
			DateAberWithDate: "Mon 15 Esf 1660",
			DateDoy: "1660.350",
			DateWoy: "1660W51-3"
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
			DateAberWithDate: "Thu 25 Esf 1660",
			DateDoy: "1660.360",
			DateWoy: "1660W52-6"
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
			DateAberWithDate: "Fri 26 Esf 1660",
			DateDoy: "1660.361",
			DateWoy: "1660W52-7"
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
			DateAberWithDate: "Sat 27 Esf 1660",
			DateDoy: "1660.362",
			DateWoy: "1661W01-1"
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
			DateAberWithDate: "Sun 28 Esf 1660",
			DateDoy: "1660.363",
			DateWoy: "1661W01-2"
		},
		stime: 9852438600000,
		gdate: [2282, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2282, 2, 19] },
		gtime: 9852438600000
	},

	{
		sdate: [1680, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 1],
			DateTime: "1680-01-01 00:00:00",
			DateAber: "01 Far 1680",
			DateAberWithDate: "Thu 01 Far 1680",
			DateDoy: "1680.000",
			DateWoy: "1679W52-6"
		},
		stime: 10452141000000,
		gdate: [2301, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 21] },
		gtime: 10452141000000
	},
	{
		sdate: [1680, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 2],
			DateTime: "1680-01-02 00:00:00",
			DateAber: "02 Far 1680",
			DateAberWithDate: "Fri 02 Far 1680",
			DateDoy: "1680.001",
			DateWoy: "1679W52-7"
		},
		stime: 10452227400000,
		gdate: [2301, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 22] },
		gtime: 10452227400000
	},
	{
		sdate: [1680, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 3],
			DateTime: "1680-01-03 00:00:00",
			DateAber: "03 Far 1680",
			DateAberWithDate: "Sat 03 Far 1680",
			DateDoy: "1680.002",
			DateWoy: "1680W01-1"
		},
		stime: 10452313800000,
		gdate: [2301, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 23] },
		gtime: 10452313800000
	},
	{
		sdate: [1680, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 4],
			DateTime: "1680-01-04 00:00:00",
			DateAber: "04 Far 1680",
			DateAberWithDate: "Sun 04 Far 1680",
			DateDoy: "1680.003",
			DateWoy: "1680W01-2"
		},
		stime: 10452400200000,
		gdate: [2301, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 24] },
		gtime: 10452400200000
	},
	{
		sdate: [1680, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 5],
			DateTime: "1680-01-05 00:00:00",
			DateAber: "05 Far 1680",
			DateAberWithDate: "Mon 05 Far 1680",
			DateDoy: "1680.004",
			DateWoy: "1680W01-3"
		},
		stime: 10452486600000,
		gdate: [2301, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 25] },
		gtime: 10452486600000
	},
	{
		sdate: [1680, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 6],
			DateTime: "1680-01-06 00:00:00",
			DateAber: "06 Far 1680",
			DateAberWithDate: "Tue 06 Far 1680",
			DateDoy: "1680.005",
			DateWoy: "1680W01-4"
		},
		stime: 10452573000000,
		gdate: [2301, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 26] },
		gtime: 10452573000000
	},
	{
		sdate: [1680, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 7],
			DateTime: "1680-01-07 00:00:00",
			DateAber: "07 Far 1680",
			DateAberWithDate: "Wed 07 Far 1680",
			DateDoy: "1680.006",
			DateWoy: "1680W01-5"
		},
		stime: 10452659400000,
		gdate: [2301, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 2, 27] },
		gtime: 10452659400000
	},
	{
		sdate: [1680, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 15],
			DateTime: "1680-01-15 00:00:00",
			DateAber: "15 Far 1680",
			DateAberWithDate: "Thu 15 Far 1680",
			DateDoy: "1680.014",
			DateWoy: "1680W02-6"
		},
		stime: 10453350600000,
		gdate: [2301, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 4] },
		gtime: 10453350600000
	},
	{
		sdate: [1680, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 29],
			DateTime: "1680-01-29 00:00:00",
			DateAber: "29 Far 1680",
			DateAberWithDate: "Thu 29 Far 1680",
			DateDoy: "1680.028",
			DateWoy: "1680W04-6"
		},
		stime: 10454560200000,
		gdate: [2301, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 18] },
		gtime: 10454560200000
	},
	{
		sdate: [1680, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 30],
			DateTime: "1680-01-30 00:00:00",
			DateAber: "30 Far 1680",
			DateAberWithDate: "Fri 30 Far 1680",
			DateDoy: "1680.029",
			DateWoy: "1680W04-7"
		},
		stime: 10454646600000,
		gdate: [2301, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 19] },
		gtime: 10454646600000
	},
	{
		sdate: [1680, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 31],
			DateTime: "1680-01-31 00:00:00",
			DateAber: "31 Far 1680",
			DateAberWithDate: "Sat 31 Far 1680",
			DateDoy: "1680.030",
			DateWoy: "1680W05-1"
		},
		stime: 10454733000000,
		gdate: [2301, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 20] },
		gtime: 10454733000000
	},
	{
		sdate: [1680, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 1],
			DateTime: "1680-02-01 00:00:00",
			DateAber: "01 Ord 1680",
			DateAberWithDate: "Sun 01 Ord 1680",
			DateDoy: "1680.031",
			DateWoy: "1680W05-2"
		},
		stime: 10454819400000,
		gdate: [2301, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 21] },
		gtime: 10454819400000
	},
	{
		sdate: [1680, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 2],
			DateTime: "1680-02-02 00:00:00",
			DateAber: "02 Ord 1680",
			DateAberWithDate: "Mon 02 Ord 1680",
			DateDoy: "1680.032",
			DateWoy: "1680W05-3"
		},
		stime: 10454905800000,
		gdate: [2301, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 3, 22] },
		gtime: 10454905800000
	},
	{
		sdate: [1680, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 15],
			DateTime: "1680-02-15 00:00:00",
			DateAber: "15 Ord 1680",
			DateAberWithDate: "Sun 15 Ord 1680",
			DateDoy: "1680.045",
			DateWoy: "1680W07-2"
		},
		stime: 10456029000000,
		gdate: [2301, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 5] },
		gtime: 10456029000000
	},
	{
		sdate: [1680, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 30],
			DateTime: "1680-02-30 00:00:00",
			DateAber: "30 Ord 1680",
			DateAberWithDate: "Mon 30 Ord 1680",
			DateDoy: "1680.060",
			DateWoy: "1680W09-3"
		},
		stime: 10457325000000,
		gdate: [2301, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 20] },
		gtime: 10457325000000
	},
	{
		sdate: [1680, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 31],
			DateTime: "1680-02-31 00:00:00",
			DateAber: "31 Ord 1680",
			DateAberWithDate: "Tue 31 Ord 1680",
			DateDoy: "1680.061",
			DateWoy: "1680W09-4"
		},
		stime: 10457411400000,
		gdate: [2301, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 21] },
		gtime: 10457411400000
	},
	{
		sdate: [1680, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 1],
			DateTime: "1680-03-01 00:00:00",
			DateAber: "01 Kho 1680",
			DateAberWithDate: "Wed 01 Kho 1680",
			DateDoy: "1680.062",
			DateWoy: "1680W09-5"
		},
		stime: 10457497800000,
		gdate: [2301, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 22] },
		gtime: 10457497800000
	},
	{
		sdate: [1680, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 2],
			DateTime: "1680-03-02 00:00:00",
			DateAber: "02 Kho 1680",
			DateAberWithDate: "Thu 02 Kho 1680",
			DateDoy: "1680.063",
			DateWoy: "1680W09-6"
		},
		stime: 10457584200000,
		gdate: [2301, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 4, 23] },
		gtime: 10457584200000
	},
	{
		sdate: [1680, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 15],
			DateTime: "1680-03-15 00:00:00",
			DateAber: "15 Kho 1680",
			DateAberWithDate: "Wed 15 Kho 1680",
			DateDoy: "1680.076",
			DateWoy: "1680W11-5"
		},
		stime: 10458707400000,
		gdate: [2301, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 5] },
		gtime: 10458707400000
	},
	{
		sdate: [1680, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 30],
			DateTime: "1680-03-30 00:00:00",
			DateAber: "30 Kho 1680",
			DateAberWithDate: "Thu 30 Kho 1680",
			DateDoy: "1680.091",
			DateWoy: "1680W13-6"
		},
		stime: 10460003400000,
		gdate: [2301, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 20] },
		gtime: 10460003400000
	},
	{
		sdate: [1680, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 31],
			DateTime: "1680-03-31 00:00:00",
			DateAber: "31 Kho 1680",
			DateAberWithDate: "Fri 31 Kho 1680",
			DateDoy: "1680.092",
			DateWoy: "1680W13-7"
		},
		stime: 10460089800000,
		gdate: [2301, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 21] },
		gtime: 10460089800000
	},
	{
		sdate: [1680, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 1],
			DateTime: "1680-04-01 00:00:00",
			DateAber: "01 Tir 1680",
			DateAberWithDate: "Sat 01 Tir 1680",
			DateDoy: "1680.093",
			DateWoy: "1680W14-1"
		},
		stime: 10460176200000,
		gdate: [2301, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 22] },
		gtime: 10460176200000
	},
	{
		sdate: [1680, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 2],
			DateTime: "1680-04-02 00:00:00",
			DateAber: "02 Tir 1680",
			DateAberWithDate: "Sun 02 Tir 1680",
			DateDoy: "1680.094",
			DateWoy: "1680W14-2"
		},
		stime: 10460262600000,
		gdate: [2301, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 5, 23] },
		gtime: 10460262600000
	},
	{
		sdate: [1680, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 15],
			DateTime: "1680-04-15 00:00:00",
			DateAber: "15 Tir 1680",
			DateAberWithDate: "Sat 15 Tir 1680",
			DateDoy: "1680.107",
			DateWoy: "1680W16-1"
		},
		stime: 10461385800000,
		gdate: [2301, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 6] },
		gtime: 10461385800000
	},
	{
		sdate: [1680, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 30],
			DateTime: "1680-04-30 00:00:00",
			DateAber: "30 Tir 1680",
			DateAberWithDate: "Sun 30 Tir 1680",
			DateDoy: "1680.122",
			DateWoy: "1680W18-2"
		},
		stime: 10462681800000,
		gdate: [2301, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 21] },
		gtime: 10462681800000
	},
	{
		sdate: [1680, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 31],
			DateTime: "1680-04-31 00:00:00",
			DateAber: "31 Tir 1680",
			DateAberWithDate: "Mon 31 Tir 1680",
			DateDoy: "1680.123",
			DateWoy: "1680W18-3"
		},
		stime: 10462768200000,
		gdate: [2301, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 22] },
		gtime: 10462768200000
	},
	{
		sdate: [1680, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 1],
			DateTime: "1680-05-01 00:00:00",
			DateAber: "01 Amo 1680",
			DateAberWithDate: "Tue 01 Amo 1680",
			DateDoy: "1680.124",
			DateWoy: "1680W18-4"
		},
		stime: 10462854600000,
		gdate: [2301, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 23] },
		gtime: 10462854600000
	},
	{
		sdate: [1680, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 2],
			DateTime: "1680-05-02 00:00:00",
			DateAber: "02 Amo 1680",
			DateAberWithDate: "Wed 02 Amo 1680",
			DateDoy: "1680.125",
			DateWoy: "1680W18-5"
		},
		stime: 10462941000000,
		gdate: [2301, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 6, 24] },
		gtime: 10462941000000
	},
	{
		sdate: [1680, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 15],
			DateTime: "1680-05-15 00:00:00",
			DateAber: "15 Amo 1680",
			DateAberWithDate: "Tue 15 Amo 1680",
			DateDoy: "1680.138",
			DateWoy: "1680W20-4"
		},
		stime: 10464064200000,
		gdate: [2301, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 6] },
		gtime: 10464064200000
	},
	{
		sdate: [1680, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 30],
			DateTime: "1680-05-30 00:00:00",
			DateAber: "30 Amo 1680",
			DateAberWithDate: "Wed 30 Amo 1680",
			DateDoy: "1680.153",
			DateWoy: "1680W22-5"
		},
		stime: 10465360200000,
		gdate: [2301, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 21] },
		gtime: 10465360200000
	},
	{
		sdate: [1680, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 31],
			DateTime: "1680-05-31 00:00:00",
			DateAber: "31 Amo 1680",
			DateAberWithDate: "Thu 31 Amo 1680",
			DateDoy: "1680.154",
			DateWoy: "1680W22-6"
		},
		stime: 10465446600000,
		gdate: [2301, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 22] },
		gtime: 10465446600000
	},
	{
		sdate: [1680, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 1],
			DateTime: "1680-06-01 00:00:00",
			DateAber: "01 Sha 1680",
			DateAberWithDate: "Fri 01 Sha 1680",
			DateDoy: "1680.155",
			DateWoy: "1680W22-7"
		},
		stime: 10465533000000,
		gdate: [2301, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 23] },
		gtime: 10465533000000
	},
	{
		sdate: [1680, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 2],
			DateTime: "1680-06-02 00:00:00",
			DateAber: "02 Sha 1680",
			DateAberWithDate: "Sat 02 Sha 1680",
			DateDoy: "1680.156",
			DateWoy: "1680W23-1"
		},
		stime: 10465619400000,
		gdate: [2301, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 7, 24] },
		gtime: 10465619400000
	},
	{
		sdate: [1680, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 15],
			DateTime: "1680-06-15 00:00:00",
			DateAber: "15 Sha 1680",
			DateAberWithDate: "Fri 15 Sha 1680",
			DateDoy: "1680.169",
			DateWoy: "1680W24-7"
		},
		stime: 10466742600000,
		gdate: [2301, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 8, 6] },
		gtime: 10466742600000
	},
	{
		sdate: [1680, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 29],
			DateTime: "1680-06-29 00:00:00",
			DateAber: "29 Sha 1680",
			DateAberWithDate: "Fri 29 Sha 1680",
			DateDoy: "1680.183",
			DateWoy: "1680W26-7"
		},
		stime: 10467952200000,
		gdate: [2301, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2301, 8, 20] },
		gtime: 10467952200000
	},
	{
		sdate: [1680, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 30],
			DateTime: "1680-06-30 00:00:00",
			DateAber: "30 Sha 1680",
			DateAberWithDate: "Sat 30 Sha 1680",
			DateDoy: "1680.184",
			DateWoy: "1680W27-1"
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
			DateAberWithDate: "Mon 01 Meh 1680",
			DateDoy: "1680.186",
			DateWoy: "1680W27-3"
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
			DateAberWithDate: "Tue 02 Meh 1680",
			DateDoy: "1680.187",
			DateWoy: "1680W27-4"
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
			DateAberWithDate: "Mon 15 Meh 1680",
			DateDoy: "1680.200",
			DateWoy: "1680W29-3"
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
			DateAberWithDate: "Mon 29 Meh 1680",
			DateDoy: "1680.214",
			DateWoy: "1680W31-3"
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
			DateAberWithDate: "Tue 30 Meh 1680",
			DateDoy: "1680.215",
			DateWoy: "1680W31-4"
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
			DateAberWithDate: "Wed 01 Aba 1680",
			DateDoy: "1680.216",
			DateWoy: "1680W31-5"
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
			DateAberWithDate: "Thu 02 Aba 1680",
			DateDoy: "1680.217",
			DateWoy: "1680W31-6"
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
			DateAberWithDate: "Wed 15 Aba 1680",
			DateDoy: "1680.230",
			DateWoy: "1680W33-5"
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
			DateAberWithDate: "Wed 29 Aba 1680",
			DateDoy: "1680.244",
			DateWoy: "1680W35-5"
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
			DateAberWithDate: "Thu 30 Aba 1680",
			DateDoy: "1680.245",
			DateWoy: "1680W35-6"
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
			DateAberWithDate: "Fri 01 Aza 1680",
			DateDoy: "1680.246",
			DateWoy: "1680W35-7"
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
			DateAberWithDate: "Sat 02 Aza 1680",
			DateDoy: "1680.247",
			DateWoy: "1680W36-1"
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
			DateAberWithDate: "Fri 15 Aza 1680",
			DateDoy: "1680.260",
			DateWoy: "1680W37-7"
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
			DateAberWithDate: "Fri 29 Aza 1680",
			DateDoy: "1680.274",
			DateWoy: "1680W39-7"
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
			DateAberWithDate: "Sat 30 Aza 1680",
			DateDoy: "1680.275",
			DateWoy: "1680W40-1"
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
			DateAberWithDate: "Sun 01 Dey 1680",
			DateDoy: "1680.276",
			DateWoy: "1680W40-2"
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
			DateAberWithDate: "Mon 02 Dey 1680",
			DateDoy: "1680.277",
			DateWoy: "1680W40-3"
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
			DateAberWithDate: "Sun 15 Dey 1680",
			DateDoy: "1680.290",
			DateWoy: "1680W42-2"
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
			DateAberWithDate: "Sun 29 Dey 1680",
			DateDoy: "1680.304",
			DateWoy: "1680W44-2"
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
			DateAberWithDate: "Mon 30 Dey 1680",
			DateDoy: "1680.305",
			DateWoy: "1680W44-3"
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
			DateAberWithDate: "Tue 01 Bah 1680",
			DateDoy: "1680.306",
			DateWoy: "1680W44-4"
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
			DateAberWithDate: "Wed 02 Bah 1680",
			DateDoy: "1680.307",
			DateWoy: "1680W44-5"
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
			DateAberWithDate: "Tue 15 Bah 1680",
			DateDoy: "1680.320",
			DateWoy: "1680W46-4"
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
			DateAberWithDate: "Tue 29 Bah 1680",
			DateDoy: "1680.334",
			DateWoy: "1680W48-4"
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
			DateAberWithDate: "Wed 30 Bah 1680",
			DateDoy: "1680.335",
			DateWoy: "1680W48-5"
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
			DateAberWithDate: "Thu 01 Esf 1680",
			DateDoy: "1680.336",
			DateWoy: "1680W48-6"
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
			DateAberWithDate: "Fri 02 Esf 1680",
			DateDoy: "1680.337",
			DateWoy: "1680W48-7"
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
			DateAberWithDate: "Sat 03 Esf 1680",
			DateDoy: "1680.338",
			DateWoy: "1680W49-1"
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
			DateAberWithDate: "Sun 04 Esf 1680",
			DateDoy: "1680.339",
			DateWoy: "1680W49-2"
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
			DateAberWithDate: "Thu 15 Esf 1680",
			DateDoy: "1680.350",
			DateWoy: "1680W50-6"
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
			DateAberWithDate: "Sun 25 Esf 1680",
			DateDoy: "1680.360",
			DateWoy: "1680W52-2"
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
			DateAberWithDate: "Mon 26 Esf 1680",
			DateDoy: "1680.361",
			DateWoy: "1680W52-3"
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
			DateAberWithDate: "Tue 27 Esf 1680",
			DateDoy: "1680.362",
			DateWoy: "1680W52-4"
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
			DateAberWithDate: "Wed 28 Esf 1680",
			DateDoy: "1680.363",
			DateWoy: "1680W52-5"
		},
		stime: 10483504200000,
		gdate: [2302, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 19] },
		gtime: 10483504200000
	},
	{
		sdate: [1680, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 30],
			DateTime: "1680-12-30 00:00:00",
			DateAber: "30 Esf 1680",
			DateAberWithDate: "Fri 30 Esf 1680",
			DateDoy: "1680.365",
			DateWoy: "1680W52-7"
		},
		stime: 10483677000000,
		gdate: [2302, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2302, 2, 21] },
		gtime: 10483677000000
	},

	{
		sdate: [1700, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 1],
			DateTime: "1700-01-01 00:00:00",
			DateAber: "01 Far 1700",
			DateAberWithDate: "Mon 01 Far 1700",
			DateDoy: "1700.000",
			DateWoy: "1700W01-3"
		},
		stime: 11083293000000,
		gdate: [2321, 3, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 21] },
		gtime: 11083293000000
	},
	{
		sdate: [1700, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 2],
			DateTime: "1700-01-02 00:00:00",
			DateAber: "02 Far 1700",
			DateAberWithDate: "Tue 02 Far 1700",
			DateDoy: "1700.001",
			DateWoy: "1700W01-4"
		},
		stime: 11083379400000,
		gdate: [2321, 3, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 22] },
		gtime: 11083379400000
	},
	{
		sdate: [1700, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 3],
			DateTime: "1700-01-03 00:00:00",
			DateAber: "03 Far 1700",
			DateAberWithDate: "Wed 03 Far 1700",
			DateDoy: "1700.002",
			DateWoy: "1700W01-5"
		},
		stime: 11083465800000,
		gdate: [2321, 3, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 23] },
		gtime: 11083465800000
	},
	{
		sdate: [1700, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 4],
			DateTime: "1700-01-04 00:00:00",
			DateAber: "04 Far 1700",
			DateAberWithDate: "Thu 04 Far 1700",
			DateDoy: "1700.003",
			DateWoy: "1700W01-6"
		},
		stime: 11083552200000,
		gdate: [2321, 3, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 24] },
		gtime: 11083552200000
	},
	{
		sdate: [1700, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 5],
			DateTime: "1700-01-05 00:00:00",
			DateAber: "05 Far 1700",
			DateAberWithDate: "Fri 05 Far 1700",
			DateDoy: "1700.004",
			DateWoy: "1700W01-7"
		},
		stime: 11083638600000,
		gdate: [2321, 3, 25, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 25] },
		gtime: 11083638600000
	},
	{
		sdate: [1700, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 6],
			DateTime: "1700-01-06 00:00:00",
			DateAber: "06 Far 1700",
			DateAberWithDate: "Sat 06 Far 1700",
			DateDoy: "1700.005",
			DateWoy: "1700W02-1"
		},
		stime: 11083725000000,
		gdate: [2321, 3, 26, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 26] },
		gtime: 11083725000000
	},
	{
		sdate: [1700, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 7],
			DateTime: "1700-01-07 00:00:00",
			DateAber: "07 Far 1700",
			DateAberWithDate: "Sun 07 Far 1700",
			DateDoy: "1700.006",
			DateWoy: "1700W02-2"
		},
		stime: 11083811400000,
		gdate: [2321, 3, 27, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 2, 27] },
		gtime: 11083811400000
	},
	{
		sdate: [1700, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 15],
			DateTime: "1700-01-15 00:00:00",
			DateAber: "15 Far 1700",
			DateAberWithDate: "Mon 15 Far 1700",
			DateDoy: "1700.014",
			DateWoy: "1700W03-3"
		},
		stime: 11084502600000,
		gdate: [2321, 4, 4, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 4] },
		gtime: 11084502600000
	},
	{
		sdate: [1700, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 29],
			DateTime: "1700-01-29 00:00:00",
			DateAber: "29 Far 1700",
			DateAberWithDate: "Mon 29 Far 1700",
			DateDoy: "1700.028",
			DateWoy: "1700W05-3"
		},
		stime: 11085712200000,
		gdate: [2321, 4, 18, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 18] },
		gtime: 11085712200000
	},
	{
		sdate: [1700, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 30],
			DateTime: "1700-01-30 00:00:00",
			DateAber: "30 Far 1700",
			DateAberWithDate: "Tue 30 Far 1700",
			DateDoy: "1700.029",
			DateWoy: "1700W05-4"
		},
		stime: 11085798600000,
		gdate: [2321, 4, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 19] },
		gtime: 11085798600000
	},
	{
		sdate: [1700, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 31],
			DateTime: "1700-01-31 00:00:00",
			DateAber: "31 Far 1700",
			DateAberWithDate: "Wed 31 Far 1700",
			DateDoy: "1700.030",
			DateWoy: "1700W05-5"
		},
		stime: 11085885000000,
		gdate: [2321, 4, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 20] },
		gtime: 11085885000000
	},
	{
		sdate: [1700, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 1],
			DateTime: "1700-02-01 00:00:00",
			DateAber: "01 Ord 1700",
			DateAberWithDate: "Thu 01 Ord 1700",
			DateDoy: "1700.031",
			DateWoy: "1700W05-6"
		},
		stime: 11085971400000,
		gdate: [2321, 4, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 21] },
		gtime: 11085971400000
	},
	{
		sdate: [1700, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 2],
			DateTime: "1700-02-02 00:00:00",
			DateAber: "02 Ord 1700",
			DateAberWithDate: "Fri 02 Ord 1700",
			DateDoy: "1700.032",
			DateWoy: "1700W05-7"
		},
		stime: 11086057800000,
		gdate: [2321, 4, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 3, 22] },
		gtime: 11086057800000
	},
	{
		sdate: [1700, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 15],
			DateTime: "1700-02-15 00:00:00",
			DateAber: "15 Ord 1700",
			DateAberWithDate: "Thu 15 Ord 1700",
			DateDoy: "1700.045",
			DateWoy: "1700W07-6"
		},
		stime: 11087181000000,
		gdate: [2321, 5, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 5] },
		gtime: 11087181000000
	},
	{
		sdate: [1700, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 30],
			DateTime: "1700-02-30 00:00:00",
			DateAber: "30 Ord 1700",
			DateAberWithDate: "Fri 30 Ord 1700",
			DateDoy: "1700.060",
			DateWoy: "1700W09-7"
		},
		stime: 11088477000000,
		gdate: [2321, 5, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 20] },
		gtime: 11088477000000
	},
	{
		sdate: [1700, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 31],
			DateTime: "1700-02-31 00:00:00",
			DateAber: "31 Ord 1700",
			DateAberWithDate: "Sat 31 Ord 1700",
			DateDoy: "1700.061",
			DateWoy: "1700W10-1"
		},
		stime: 11088563400000,
		gdate: [2321, 5, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 21] },
		gtime: 11088563400000
	},
	{
		sdate: [1700, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 1],
			DateTime: "1700-03-01 00:00:00",
			DateAber: "01 Kho 1700",
			DateAberWithDate: "Sun 01 Kho 1700",
			DateDoy: "1700.062",
			DateWoy: "1700W10-2"
		},
		stime: 11088649800000,
		gdate: [2321, 5, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 22] },
		gtime: 11088649800000
	},
	{
		sdate: [1700, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 2],
			DateTime: "1700-03-02 00:00:00",
			DateAber: "02 Kho 1700",
			DateAberWithDate: "Mon 02 Kho 1700",
			DateDoy: "1700.063",
			DateWoy: "1700W10-3"
		},
		stime: 11088736200000,
		gdate: [2321, 5, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 4, 23] },
		gtime: 11088736200000
	},
	{
		sdate: [1700, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 15],
			DateTime: "1700-03-15 00:00:00",
			DateAber: "15 Kho 1700",
			DateAberWithDate: "Sun 15 Kho 1700",
			DateDoy: "1700.076",
			DateWoy: "1700W12-2"
		},
		stime: 11089859400000,
		gdate: [2321, 6, 5, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 5] },
		gtime: 11089859400000
	},
	{
		sdate: [1700, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 30],
			DateTime: "1700-03-30 00:00:00",
			DateAber: "30 Kho 1700",
			DateAberWithDate: "Mon 30 Kho 1700",
			DateDoy: "1700.091",
			DateWoy: "1700W14-3"
		},
		stime: 11091155400000,
		gdate: [2321, 6, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 20] },
		gtime: 11091155400000
	},
	{
		sdate: [1700, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 31],
			DateTime: "1700-03-31 00:00:00",
			DateAber: "31 Kho 1700",
			DateAberWithDate: "Tue 31 Kho 1700",
			DateDoy: "1700.092",
			DateWoy: "1700W14-4"
		},
		stime: 11091241800000,
		gdate: [2321, 6, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 21] },
		gtime: 11091241800000
	},
	{
		sdate: [1700, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 1],
			DateTime: "1700-04-01 00:00:00",
			DateAber: "01 Tir 1700",
			DateAberWithDate: "Wed 01 Tir 1700",
			DateDoy: "1700.093",
			DateWoy: "1700W14-5"
		},
		stime: 11091328200000,
		gdate: [2321, 6, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 22] },
		gtime: 11091328200000
	},
	{
		sdate: [1700, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 2],
			DateTime: "1700-04-02 00:00:00",
			DateAber: "02 Tir 1700",
			DateAberWithDate: "Thu 02 Tir 1700",
			DateDoy: "1700.094",
			DateWoy: "1700W14-6"
		},
		stime: 11091414600000,
		gdate: [2321, 6, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 5, 23] },
		gtime: 11091414600000
	},
	{
		sdate: [1700, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 15],
			DateTime: "1700-04-15 00:00:00",
			DateAber: "15 Tir 1700",
			DateAberWithDate: "Wed 15 Tir 1700",
			DateDoy: "1700.107",
			DateWoy: "1700W16-5"
		},
		stime: 11092537800000,
		gdate: [2321, 7, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 6] },
		gtime: 11092537800000
	},
	{
		sdate: [1700, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 30],
			DateTime: "1700-04-30 00:00:00",
			DateAber: "30 Tir 1700",
			DateAberWithDate: "Thu 30 Tir 1700",
			DateDoy: "1700.122",
			DateWoy: "1700W18-6"
		},
		stime: 11093833800000,
		gdate: [2321, 7, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 21] },
		gtime: 11093833800000
	},
	{
		sdate: [1700, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 31],
			DateTime: "1700-04-31 00:00:00",
			DateAber: "31 Tir 1700",
			DateAberWithDate: "Fri 31 Tir 1700",
			DateDoy: "1700.123",
			DateWoy: "1700W18-7"
		},
		stime: 11093920200000,
		gdate: [2321, 7, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 22] },
		gtime: 11093920200000
	},
	{
		sdate: [1700, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 1],
			DateTime: "1700-05-01 00:00:00",
			DateAber: "01 Amo 1700",
			DateAberWithDate: "Sat 01 Amo 1700",
			DateDoy: "1700.124",
			DateWoy: "1700W19-1"
		},
		stime: 11094006600000,
		gdate: [2321, 7, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 23] },
		gtime: 11094006600000
	},
	{
		sdate: [1700, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 2],
			DateTime: "1700-05-02 00:00:00",
			DateAber: "02 Amo 1700",
			DateAberWithDate: "Sun 02 Amo 1700",
			DateDoy: "1700.125",
			DateWoy: "1700W19-2"
		},
		stime: 11094093000000,
		gdate: [2321, 7, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 6, 24] },
		gtime: 11094093000000
	},
	{
		sdate: [1700, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 15],
			DateTime: "1700-05-15 00:00:00",
			DateAber: "15 Amo 1700",
			DateAberWithDate: "Sat 15 Amo 1700",
			DateDoy: "1700.138",
			DateWoy: "1700W21-1"
		},
		stime: 11095216200000,
		gdate: [2321, 8, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 6] },
		gtime: 11095216200000
	},
	{
		sdate: [1700, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 30],
			DateTime: "1700-05-30 00:00:00",
			DateAber: "30 Amo 1700",
			DateAberWithDate: "Sun 30 Amo 1700",
			DateDoy: "1700.153",
			DateWoy: "1700W23-2"
		},
		stime: 11096512200000,
		gdate: [2321, 8, 21, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 21] },
		gtime: 11096512200000
	},
	{
		sdate: [1700, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 31],
			DateTime: "1700-05-31 00:00:00",
			DateAber: "31 Amo 1700",
			DateAberWithDate: "Mon 31 Amo 1700",
			DateDoy: "1700.154",
			DateWoy: "1700W23-3"
		},
		stime: 11096598600000,
		gdate: [2321, 8, 22, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 22] },
		gtime: 11096598600000
	},
	{
		sdate: [1700, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 1],
			DateTime: "1700-06-01 00:00:00",
			DateAber: "01 Sha 1700",
			DateAberWithDate: "Tue 01 Sha 1700",
			DateDoy: "1700.155",
			DateWoy: "1700W23-4"
		},
		stime: 11096685000000,
		gdate: [2321, 8, 23, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 23] },
		gtime: 11096685000000
	},
	{
		sdate: [1700, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 2],
			DateTime: "1700-06-02 00:00:00",
			DateAber: "02 Sha 1700",
			DateAberWithDate: "Wed 02 Sha 1700",
			DateDoy: "1700.156",
			DateWoy: "1700W23-5"
		},
		stime: 11096771400000,
		gdate: [2321, 8, 24, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 7, 24] },
		gtime: 11096771400000
	},
	{
		sdate: [1700, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 15],
			DateTime: "1700-06-15 00:00:00",
			DateAber: "15 Sha 1700",
			DateAberWithDate: "Tue 15 Sha 1700",
			DateDoy: "1700.169",
			DateWoy: "1700W25-4"
		},
		stime: 11097894600000,
		gdate: [2321, 9, 6, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 8, 6] },
		gtime: 11097894600000
	},
	{
		sdate: [1700, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 29],
			DateTime: "1700-06-29 00:00:00",
			DateAber: "29 Sha 1700",
			DateAberWithDate: "Tue 29 Sha 1700",
			DateDoy: "1700.183",
			DateWoy: "1700W27-4"
		},
		stime: 11099104200000,
		gdate: [2321, 9, 20, 0, 0, 0, 0],
		gdata: { gregorian: [2321, 8, 20] },
		gtime: 11099104200000
	},
	{
		sdate: [1700, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 30],
			DateTime: "1700-06-30 00:00:00",
			DateAber: "30 Sha 1700",
			DateAberWithDate: "Wed 30 Sha 1700",
			DateDoy: "1700.184",
			DateWoy: "1700W27-5"
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
			DateAberWithDate: "Fri 01 Meh 1700",
			DateDoy: "1700.186",
			DateWoy: "1700W27-7"
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
			DateAberWithDate: "Sat 02 Meh 1700",
			DateDoy: "1700.187",
			DateWoy: "1700W28-1"
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
			DateAberWithDate: "Fri 15 Meh 1700",
			DateDoy: "1700.200",
			DateWoy: "1700W29-7"
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
			DateAberWithDate: "Fri 29 Meh 1700",
			DateDoy: "1700.214",
			DateWoy: "1700W31-7"
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
			DateAberWithDate: "Sat 30 Meh 1700",
			DateDoy: "1700.215",
			DateWoy: "1700W32-1"
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
			DateAberWithDate: "Sun 01 Aba 1700",
			DateDoy: "1700.216",
			DateWoy: "1700W32-2"
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
			DateAberWithDate: "Mon 02 Aba 1700",
			DateDoy: "1700.217",
			DateWoy: "1700W32-3"
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
			DateAberWithDate: "Sun 15 Aba 1700",
			DateDoy: "1700.230",
			DateWoy: "1700W34-2"
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
			DateAberWithDate: "Sun 29 Aba 1700",
			DateDoy: "1700.244",
			DateWoy: "1700W36-2"
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
			DateAberWithDate: "Mon 30 Aba 1700",
			DateDoy: "1700.245",
			DateWoy: "1700W36-3"
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
			DateAberWithDate: "Tue 01 Aza 1700",
			DateDoy: "1700.246",
			DateWoy: "1700W36-4"
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
			DateAberWithDate: "Wed 02 Aza 1700",
			DateDoy: "1700.247",
			DateWoy: "1700W36-5"
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
			DateAberWithDate: "Tue 15 Aza 1700",
			DateDoy: "1700.260",
			DateWoy: "1700W38-4"
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
			DateAberWithDate: "Tue 29 Aza 1700",
			DateDoy: "1700.274",
			DateWoy: "1700W40-4"
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
			DateAberWithDate: "Wed 30 Aza 1700",
			DateDoy: "1700.275",
			DateWoy: "1700W40-5"
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
			DateAberWithDate: "Thu 01 Dey 1700",
			DateDoy: "1700.276",
			DateWoy: "1700W40-6"
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
			DateAberWithDate: "Fri 02 Dey 1700",
			DateDoy: "1700.277",
			DateWoy: "1700W40-7"
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
			DateAberWithDate: "Thu 15 Dey 1700",
			DateDoy: "1700.290",
			DateWoy: "1700W42-6"
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
			DateAberWithDate: "Thu 29 Dey 1700",
			DateDoy: "1700.304",
			DateWoy: "1700W44-6"
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
			DateAberWithDate: "Fri 30 Dey 1700",
			DateDoy: "1700.305",
			DateWoy: "1700W44-7"
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
			DateAberWithDate: "Sat 01 Bah 1700",
			DateDoy: "1700.306",
			DateWoy: "1700W45-1"
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
			DateAberWithDate: "Sun 02 Bah 1700",
			DateDoy: "1700.307",
			DateWoy: "1700W45-2"
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
			DateAberWithDate: "Sat 15 Bah 1700",
			DateDoy: "1700.320",
			DateWoy: "1700W47-1"
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
			DateAberWithDate: "Sat 29 Bah 1700",
			DateDoy: "1700.334",
			DateWoy: "1700W49-1"
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
			DateAberWithDate: "Sun 30 Bah 1700",
			DateDoy: "1700.335",
			DateWoy: "1700W49-2"
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
			DateAberWithDate: "Mon 01 Esf 1700",
			DateDoy: "1700.336",
			DateWoy: "1700W49-3"
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
			DateAberWithDate: "Tue 02 Esf 1700",
			DateDoy: "1700.337",
			DateWoy: "1700W49-4"
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
			DateAberWithDate: "Wed 03 Esf 1700",
			DateDoy: "1700.338",
			DateWoy: "1700W49-5"
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
			DateAberWithDate: "Thu 04 Esf 1700",
			DateDoy: "1700.339",
			DateWoy: "1700W49-6"
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
			DateAberWithDate: "Mon 15 Esf 1700",
			DateDoy: "1700.350",
			DateWoy: "1700W51-3"
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
			DateAberWithDate: "Thu 25 Esf 1700",
			DateDoy: "1700.360",
			DateWoy: "1700W52-6"
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
			DateAberWithDate: "Fri 26 Esf 1700",
			DateDoy: "1700.361",
			DateWoy: "1700W52-7"
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
			DateAberWithDate: "Sat 27 Esf 1700",
			DateDoy: "1700.362",
			DateWoy: "1701W01-1"
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
			DateAberWithDate: "Sun 28 Esf 1700",
			DateDoy: "1700.363",
			DateWoy: "1701W01-2"
		},
		stime: 11114656200000,
		gdate: [2322, 3, 19, 0, 0, 0, 0],
		gdata: { gregorian: [2322, 2, 19] },
		gtime: 11114656200000
	}
];
