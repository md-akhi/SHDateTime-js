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
					Dow:${dow},
					Diy:${diy},
					Doy:${doy},
					Dim:${dim},
					Wiy:${wiy},
					Woy:[${woyw},${woyy}],
					dsn:"${dsn}",
					dfn:"${dfn}",
					esn:"${esn}",
					efn:"${efn}",
					mfn:"${mfn}",
					msn:"${msn}",
					asn:"${asn}",
					csn:"${csn}",
					ssn:"${ssn}",
					osn:"${osn !== 0 ? osn : 0}",
					sun:"${sun}"
				},
				stime:${shdate.getTime()},
					gdate:[${gyears},${
					gmonths * 1 + 1
				},${gdays},${ghours},${gminutes},${gseconds},${milliseconds}],
				gdata:{
					gregorian:[${gyears},${gmonths},${gdays}]
				},
				gtime:${gdate.getTime()}
			},`
			);
	});
}
*/
export const solarDate = [
	{
		sdate: [1200, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 1],
			Dow: 4,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1199],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4695161144000,
		gdate: [1821, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 21]
		},
		gtime: -4695161144000
	},
	{
		sdate: [1200, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 2],
			Dow: 5,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1199],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -4695074744000,
		gdate: [1821, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 22]
		},
		gtime: -4695074744000
	},
	{
		sdate: [1200, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 3],
			Dow: 6,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1199],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -4694988344000,
		gdate: [1821, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 23]
		},
		gtime: -4694988344000
	},
	{
		sdate: [1200, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 4],
			Dow: 0,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4694901944000,
		gdate: [1821, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 24]
		},
		gtime: -4694901944000
	},
	{
		sdate: [1200, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 5],
			Dow: 1,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4694815544000,
		gdate: [1821, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 25]
		},
		gtime: -4694815544000
	},
	{
		sdate: [1200, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 6],
			Dow: 2,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4694729144000,
		gdate: [1821, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 26]
		},
		gtime: -4694729144000
	},
	{
		sdate: [1200, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 7],
			Dow: 3,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4694642744000,
		gdate: [1821, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 27]
		},
		gtime: -4694642744000
	},
	{
		sdate: [1200, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 15],
			Dow: 4,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4693951544000,
		gdate: [1821, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 3, 4]
		},
		gtime: -4693951544000
	},
	{
		sdate: [1200, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 29],
			Dow: 4,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4692741944000,
		gdate: [1821, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 3, 18]
		},
		gtime: -4692741944000
	},
	{
		sdate: [1200, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 30],
			Dow: 5,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4692655544000,
		gdate: [1821, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 3, 19]
		},
		gtime: -4692655544000
	},
	{
		sdate: [1200, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 31],
			Dow: 6,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4692569144000,
		gdate: [1821, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 3, 20]
		},
		gtime: -4692569144000
	},
	{
		sdate: [1200, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 1],
			Dow: 0,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4692482744000,
		gdate: [1821, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 3, 21]
		},
		gtime: -4692482744000
	},
	{
		sdate: [1200, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 2],
			Dow: 1,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -4692396344000,
		gdate: [1821, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 3, 22]
		},
		gtime: -4692396344000
	},
	{
		sdate: [1200, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 15],
			Dow: 0,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4691273144000,
		gdate: [1821, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 4, 5]
		},
		gtime: -4691273144000
	},
	{
		sdate: [1200, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 30],
			Dow: 1,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4689977144000,
		gdate: [1821, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 4, 20]
		},
		gtime: -4689977144000
	},
	{
		sdate: [1200, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 1, 31],
			Dow: 2,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4689890744000,
		gdate: [1821, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 4, 21]
		},
		gtime: -4689890744000
	},
	{
		sdate: [1200, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 1],
			Dow: 3,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4689804344000,
		gdate: [1821, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 4, 22]
		},
		gtime: -4689804344000
	},
	{
		sdate: [1200, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 2],
			Dow: 4,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -4689717944000,
		gdate: [1821, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 4, 23]
		},
		gtime: -4689717944000
	},
	{
		sdate: [1200, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 15],
			Dow: 3,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4688594744000,
		gdate: [1821, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 5, 5]
		},
		gtime: -4688594744000
	},
	{
		sdate: [1200, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 30],
			Dow: 4,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4687298744000,
		gdate: [1821, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 5, 20]
		},
		gtime: -4687298744000
	},
	{
		sdate: [1200, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 2, 31],
			Dow: 5,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -4687212344000,
		gdate: [1821, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 5, 21]
		},
		gtime: -4687212344000
	},
	{
		sdate: [1200, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 1],
			Dow: 6,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4687125944000,
		gdate: [1821, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 5, 22]
		},
		gtime: -4687125944000
	},
	{
		sdate: [1200, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 2],
			Dow: 0,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -4687039544000,
		gdate: [1821, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 5, 23]
		},
		gtime: -4687039544000
	},
	{
		sdate: [1200, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 15],
			Dow: 6,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [15, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4685916344000,
		gdate: [1821, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 6, 6]
		},
		gtime: -4685916344000
	},
	{
		sdate: [1200, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 30],
			Dow: 0,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4684620344000,
		gdate: [1821, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 6, 21]
		},
		gtime: -4684620344000
	},
	{
		sdate: [1200, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 3, 31],
			Dow: 1,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4684533944000,
		gdate: [1821, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 6, 22]
		},
		gtime: -4684533944000
	},
	{
		sdate: [1200, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 1],
			Dow: 2,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4684447544000,
		gdate: [1821, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 6, 23]
		},
		gtime: -4684447544000
	},
	{
		sdate: [1200, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 2],
			Dow: 3,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -4684361144000,
		gdate: [1821, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 6, 24]
		},
		gtime: -4684361144000
	},
	{
		sdate: [1200, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 15],
			Dow: 2,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4683237944000,
		gdate: [1821, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 7, 6]
		},
		gtime: -4683237944000
	},
	{
		sdate: [1200, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 30],
			Dow: 3,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4681941944000,
		gdate: [1821, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 7, 21]
		},
		gtime: -4681941944000
	},
	{
		sdate: [1200, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 4, 31],
			Dow: 4,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4681855544000,
		gdate: [1821, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 7, 22]
		},
		gtime: -4681855544000
	},
	{
		sdate: [1200, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 1],
			Dow: 5,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4681769144000,
		gdate: [1821, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 7, 23]
		},
		gtime: -4681769144000
	},
	{
		sdate: [1200, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 2],
			Dow: 6,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -4681682744000,
		gdate: [1821, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 7, 24]
		},
		gtime: -4681682744000
	},
	{
		sdate: [1200, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 15],
			Dow: 5,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4680559544000,
		gdate: [1821, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 8, 6]
		},
		gtime: -4680559544000
	},
	{
		sdate: [1200, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 29],
			Dow: 5,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4679349944000,
		gdate: [1821, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 8, 20]
		},
		gtime: -4679349944000
	},
	{
		sdate: [1200, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 5, 30],
			Dow: 6,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4679263544000,
		gdate: [1821, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 8, 21]
		},
		gtime: -4679263544000
	},
	{
		sdate: [1200, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 1],
			Dow: 1,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -4679090744000,
		gdate: [1821, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 8, 23]
		},
		gtime: -4679090744000
	},
	{
		sdate: [1200, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 2],
			Dow: 2,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -4679004344000,
		gdate: [1821, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 8, 24]
		},
		gtime: -4679004344000
	},
	{
		sdate: [1200, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 15],
			Dow: 1,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4677881144000,
		gdate: [1821, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 9, 7]
		},
		gtime: -4677881144000
	},
	{
		sdate: [1200, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 29],
			Dow: 1,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4676671544000,
		gdate: [1821, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 9, 21]
		},
		gtime: -4676671544000
	},
	{
		sdate: [1200, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 6, 30],
			Dow: 2,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4676585144000,
		gdate: [1821, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 9, 22]
		},
		gtime: -4676585144000
	},
	{
		sdate: [1200, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 1],
			Dow: 3,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -4676498744000,
		gdate: [1821, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 9, 23]
		},
		gtime: -4676498744000
	},
	{
		sdate: [1200, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 2],
			Dow: 4,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -4676412344000,
		gdate: [1821, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 9, 24]
		},
		gtime: -4676412344000
	},
	{
		sdate: [1200, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 15],
			Dow: 3,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4675289144000,
		gdate: [1821, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 10, 6]
		},
		gtime: -4675289144000
	},
	{
		sdate: [1200, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 29],
			Dow: 3,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4674079544000,
		gdate: [1821, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 10, 20]
		},
		gtime: -4674079544000
	},
	{
		sdate: [1200, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 7, 30],
			Dow: 4,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4673993144000,
		gdate: [1821, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 10, 21]
		},
		gtime: -4673993144000
	},
	{
		sdate: [1200, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 1],
			Dow: 5,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -4673906744000,
		gdate: [1821, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 10, 22]
		},
		gtime: -4673906744000
	},
	{
		sdate: [1200, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 2],
			Dow: 6,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -4673820344000,
		gdate: [1821, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 10, 23]
		},
		gtime: -4673820344000
	},
	{
		sdate: [1200, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 15],
			Dow: 5,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4672697144000,
		gdate: [1821, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 11, 6]
		},
		gtime: -4672697144000
	},
	{
		sdate: [1200, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 29],
			Dow: 5,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4671487544000,
		gdate: [1821, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 11, 20]
		},
		gtime: -4671487544000
	},
	{
		sdate: [1200, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 8, 30],
			Dow: 6,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -4671401144000,
		gdate: [1821, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 11, 21]
		},
		gtime: -4671401144000
	},
	{
		sdate: [1200, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 1],
			Dow: 0,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -4671314744000,
		gdate: [1821, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 11, 22]
		},
		gtime: -4671314744000
	},
	{
		sdate: [1200, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 2],
			Dow: 1,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -4671228344000,
		gdate: [1821, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 11, 23]
		},
		gtime: -4671228344000
	},
	{
		sdate: [1200, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 15],
			Dow: 0,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4670105144000,
		gdate: [1822, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 0, 5]
		},
		gtime: -4670105144000
	},
	{
		sdate: [1200, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 29],
			Dow: 0,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4668895544000,
		gdate: [1822, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 0, 19]
		},
		gtime: -4668895544000
	},
	{
		sdate: [1200, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 9, 30],
			Dow: 1,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4668809144000,
		gdate: [1822, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 0, 20]
		},
		gtime: -4668809144000
	},
	{
		sdate: [1200, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 1],
			Dow: 2,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -4668722744000,
		gdate: [1822, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 0, 21]
		},
		gtime: -4668722744000
	},
	{
		sdate: [1200, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 2],
			Dow: 3,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -4668636344000,
		gdate: [1822, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 0, 22]
		},
		gtime: -4668636344000
	},
	{
		sdate: [1200, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 15],
			Dow: 2,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4667513144000,
		gdate: [1822, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 1, 4]
		},
		gtime: -4667513144000
	},
	{
		sdate: [1200, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 29],
			Dow: 2,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4666303544000,
		gdate: [1822, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 1, 18]
		},
		gtime: -4666303544000
	},
	{
		sdate: [1200, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 10, 30],
			Dow: 3,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4666217144000,
		gdate: [1822, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 1, 19]
		},
		gtime: -4666217144000
	},
	{
		sdate: [1200, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 1],
			Dow: 4,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -4666130744000,
		gdate: [1822, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 1, 20]
		},
		gtime: -4666130744000
	},
	{
		sdate: [1200, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 2],
			Dow: 5,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1200],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -4666044344000,
		gdate: [1822, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 1, 21]
		},
		gtime: -4666044344000
	},
	{
		sdate: [1200, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 3],
			Dow: 6,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1200],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -4665957944000,
		gdate: [1822, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 1, 22]
		},
		gtime: -4665957944000
	},
	{
		sdate: [1200, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 4],
			Dow: 0,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4665871544000,
		gdate: [1822, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 1, 23]
		},
		gtime: -4665871544000
	},
	{
		sdate: [1200, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 15],
			Dow: 4,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4664921144000,
		gdate: [1822, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 6]
		},
		gtime: -4664921144000
	},
	{
		sdate: [1200, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 25],
			Dow: 0,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1200],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4664057144000,
		gdate: [1822, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 16]
		},
		gtime: -4664057144000
	},
	{
		sdate: [1200, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 26],
			Dow: 1,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1200],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4663970744000,
		gdate: [1822, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 17]
		},
		gtime: -4663970744000
	},
	{
		sdate: [1200, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 27],
			Dow: 2,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1200],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4663884344000,
		gdate: [1822, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 18]
		},
		gtime: -4663884344000
	},
	{
		sdate: [1200, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 28],
			Dow: 3,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1200],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4663797944000,
		gdate: [1822, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 19]
		},
		gtime: -4663797944000
	},
	{
		sdate: [1200, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 29],
			Dow: 4,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1200],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4663711544000,
		gdate: [1822, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 20]
		},
		gtime: -4663711544000
	},

	{
		sdate: [1220, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 1],
			Dow: 1,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4064009144000,
		gdate: [1841, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 21]
		},
		gtime: -4064009144000
	},
	{
		sdate: [1220, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 2],
			Dow: 2,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -4063922744000,
		gdate: [1841, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 22]
		},
		gtime: -4063922744000
	},
	{
		sdate: [1220, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 3],
			Dow: 3,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -4063836344000,
		gdate: [1841, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 23]
		},
		gtime: -4063836344000
	},
	{
		sdate: [1220, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 4],
			Dow: 4,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4063749944000,
		gdate: [1841, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 24]
		},
		gtime: -4063749944000
	},
	{
		sdate: [1220, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 5],
			Dow: 5,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4063663544000,
		gdate: [1841, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 25]
		},
		gtime: -4063663544000
	},
	{
		sdate: [1220, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 6],
			Dow: 6,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4063577144000,
		gdate: [1841, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 26]
		},
		gtime: -4063577144000
	},
	{
		sdate: [1220, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 7],
			Dow: 0,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4063490744000,
		gdate: [1841, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 27]
		},
		gtime: -4063490744000
	},
	{
		sdate: [1220, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 15],
			Dow: 1,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4062799544000,
		gdate: [1841, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 3, 4]
		},
		gtime: -4062799544000
	},
	{
		sdate: [1220, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 29],
			Dow: 1,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4061589944000,
		gdate: [1841, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 3, 18]
		},
		gtime: -4061589944000
	},
	{
		sdate: [1220, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 30],
			Dow: 2,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4061503544000,
		gdate: [1841, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 3, 19]
		},
		gtime: -4061503544000
	},
	{
		sdate: [1220, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 31],
			Dow: 3,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4061417144000,
		gdate: [1841, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 3, 20]
		},
		gtime: -4061417144000
	},
	{
		sdate: [1220, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 1],
			Dow: 4,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4061330744000,
		gdate: [1841, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 3, 21]
		},
		gtime: -4061330744000
	},
	{
		sdate: [1220, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 2],
			Dow: 5,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -4061244344000,
		gdate: [1841, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 3, 22]
		},
		gtime: -4061244344000
	},
	{
		sdate: [1220, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 15],
			Dow: 4,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4060121144000,
		gdate: [1841, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 4, 5]
		},
		gtime: -4060121144000
	},
	{
		sdate: [1220, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 30],
			Dow: 5,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4058825144000,
		gdate: [1841, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 4, 20]
		},
		gtime: -4058825144000
	},
	{
		sdate: [1220, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 1, 31],
			Dow: 6,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4058738744000,
		gdate: [1841, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 4, 21]
		},
		gtime: -4058738744000
	},
	{
		sdate: [1220, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 1],
			Dow: 0,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -4058652344000,
		gdate: [1841, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 4, 22]
		},
		gtime: -4058652344000
	},
	{
		sdate: [1220, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 2],
			Dow: 1,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -4058565944000,
		gdate: [1841, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 4, 23]
		},
		gtime: -4058565944000
	},
	{
		sdate: [1220, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 15],
			Dow: 0,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4057442744000,
		gdate: [1841, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 5, 5]
		},
		gtime: -4057442744000
	},
	{
		sdate: [1220, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 30],
			Dow: 1,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -4056146744000,
		gdate: [1841, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 5, 20]
		},
		gtime: -4056146744000
	},
	{
		sdate: [1220, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 2, 31],
			Dow: 2,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -4056060344000,
		gdate: [1841, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 5, 21]
		},
		gtime: -4056060344000
	},
	{
		sdate: [1220, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 1],
			Dow: 3,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4055973944000,
		gdate: [1841, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 5, 22]
		},
		gtime: -4055973944000
	},
	{
		sdate: [1220, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 2],
			Dow: 4,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -4055887544000,
		gdate: [1841, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 5, 23]
		},
		gtime: -4055887544000
	},
	{
		sdate: [1220, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 15],
			Dow: 3,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4054764344000,
		gdate: [1841, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 6, 6]
		},
		gtime: -4054764344000
	},
	{
		sdate: [1220, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 30],
			Dow: 4,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4053468344000,
		gdate: [1841, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 6, 21]
		},
		gtime: -4053468344000
	},
	{
		sdate: [1220, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 3, 31],
			Dow: 5,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4053381944000,
		gdate: [1841, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 6, 22]
		},
		gtime: -4053381944000
	},
	{
		sdate: [1220, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 1],
			Dow: 6,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4053295544000,
		gdate: [1841, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 6, 23]
		},
		gtime: -4053295544000
	},
	{
		sdate: [1220, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 2],
			Dow: 0,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -4053209144000,
		gdate: [1841, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 6, 24]
		},
		gtime: -4053209144000
	},
	{
		sdate: [1220, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 15],
			Dow: 6,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4052085944000,
		gdate: [1841, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 7, 6]
		},
		gtime: -4052085944000
	},
	{
		sdate: [1220, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 30],
			Dow: 0,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4050789944000,
		gdate: [1841, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 7, 21]
		},
		gtime: -4050789944000
	},
	{
		sdate: [1220, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 4, 31],
			Dow: 1,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4050703544000,
		gdate: [1841, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 7, 22]
		},
		gtime: -4050703544000
	},
	{
		sdate: [1220, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 1],
			Dow: 2,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -4050617144000,
		gdate: [1841, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 7, 23]
		},
		gtime: -4050617144000
	},
	{
		sdate: [1220, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 2],
			Dow: 3,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -4050530744000,
		gdate: [1841, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 7, 24]
		},
		gtime: -4050530744000
	},
	{
		sdate: [1220, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 15],
			Dow: 2,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4049407544000,
		gdate: [1841, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 8, 6]
		},
		gtime: -4049407544000
	},
	{
		sdate: [1220, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 29],
			Dow: 2,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4048197944000,
		gdate: [1841, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 8, 20]
		},
		gtime: -4048197944000
	},
	{
		sdate: [1220, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 5, 30],
			Dow: 3,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -4048111544000,
		gdate: [1841, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 8, 21]
		},
		gtime: -4048111544000
	},
	{
		sdate: [1220, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 1],
			Dow: 5,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -4047938744000,
		gdate: [1841, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 8, 23]
		},
		gtime: -4047938744000
	},
	{
		sdate: [1220, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 2],
			Dow: 6,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -4047852344000,
		gdate: [1841, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 8, 24]
		},
		gtime: -4047852344000
	},
	{
		sdate: [1220, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 15],
			Dow: 5,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4046729144000,
		gdate: [1841, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 9, 7]
		},
		gtime: -4046729144000
	},
	{
		sdate: [1220, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 29],
			Dow: 5,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4045519544000,
		gdate: [1841, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 9, 21]
		},
		gtime: -4045519544000
	},
	{
		sdate: [1220, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 6, 30],
			Dow: 6,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4045433144000,
		gdate: [1841, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 9, 22]
		},
		gtime: -4045433144000
	},
	{
		sdate: [1220, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 1],
			Dow: 0,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -4045346744000,
		gdate: [1841, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 9, 23]
		},
		gtime: -4045346744000
	},
	{
		sdate: [1220, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 2],
			Dow: 1,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -4045260344000,
		gdate: [1841, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 9, 24]
		},
		gtime: -4045260344000
	},
	{
		sdate: [1220, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 15],
			Dow: 0,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4044137144000,
		gdate: [1841, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 10, 6]
		},
		gtime: -4044137144000
	},
	{
		sdate: [1220, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 29],
			Dow: 0,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4042927544000,
		gdate: [1841, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 10, 20]
		},
		gtime: -4042927544000
	},
	{
		sdate: [1220, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 7, 30],
			Dow: 1,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4042841144000,
		gdate: [1841, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 10, 21]
		},
		gtime: -4042841144000
	},
	{
		sdate: [1220, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 1],
			Dow: 2,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -4042754744000,
		gdate: [1841, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 10, 22]
		},
		gtime: -4042754744000
	},
	{
		sdate: [1220, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 2],
			Dow: 3,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -4042668344000,
		gdate: [1841, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 10, 23]
		},
		gtime: -4042668344000
	},
	{
		sdate: [1220, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 15],
			Dow: 2,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4041545144000,
		gdate: [1841, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 11, 6]
		},
		gtime: -4041545144000
	},
	{
		sdate: [1220, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 29],
			Dow: 2,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -4040335544000,
		gdate: [1841, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 11, 20]
		},
		gtime: -4040335544000
	},
	{
		sdate: [1220, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 8, 30],
			Dow: 3,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -4040249144000,
		gdate: [1841, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 11, 21]
		},
		gtime: -4040249144000
	},
	{
		sdate: [1220, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 1],
			Dow: 4,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -4040162744000,
		gdate: [1841, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 11, 22]
		},
		gtime: -4040162744000
	},
	{
		sdate: [1220, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 2],
			Dow: 5,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -4040076344000,
		gdate: [1841, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 11, 23]
		},
		gtime: -4040076344000
	},
	{
		sdate: [1220, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 15],
			Dow: 4,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4038953144000,
		gdate: [1842, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 0, 5]
		},
		gtime: -4038953144000
	},
	{
		sdate: [1220, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 29],
			Dow: 4,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4037743544000,
		gdate: [1842, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 0, 19]
		},
		gtime: -4037743544000
	},
	{
		sdate: [1220, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 9, 30],
			Dow: 5,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4037657144000,
		gdate: [1842, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 0, 20]
		},
		gtime: -4037657144000
	},
	{
		sdate: [1220, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 1],
			Dow: 6,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -4037570744000,
		gdate: [1842, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 0, 21]
		},
		gtime: -4037570744000
	},
	{
		sdate: [1220, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 2],
			Dow: 0,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -4037484344000,
		gdate: [1842, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 0, 22]
		},
		gtime: -4037484344000
	},
	{
		sdate: [1220, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 15],
			Dow: 6,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4036361144000,
		gdate: [1842, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 1, 4]
		},
		gtime: -4036361144000
	},
	{
		sdate: [1220, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 29],
			Dow: 6,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4035151544000,
		gdate: [1842, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 1, 18]
		},
		gtime: -4035151544000
	},
	{
		sdate: [1220, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 10, 30],
			Dow: 0,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1220],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4035065144000,
		gdate: [1842, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 1, 19]
		},
		gtime: -4035065144000
	},
	{
		sdate: [1220, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 1],
			Dow: 1,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -4034978744000,
		gdate: [1842, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 1, 20]
		},
		gtime: -4034978744000
	},
	{
		sdate: [1220, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 2],
			Dow: 2,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1220],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -4034892344000,
		gdate: [1842, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 1, 21]
		},
		gtime: -4034892344000
	},
	{
		sdate: [1220, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 3],
			Dow: 3,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1220],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -4034805944000,
		gdate: [1842, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 1, 22]
		},
		gtime: -4034805944000
	},
	{
		sdate: [1220, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 4],
			Dow: 4,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4034719544000,
		gdate: [1842, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 1, 23]
		},
		gtime: -4034719544000
	},
	{
		sdate: [1220, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 15],
			Dow: 1,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1220],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4033769144000,
		gdate: [1842, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 6]
		},
		gtime: -4033769144000
	},
	{
		sdate: [1220, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 25],
			Dow: 4,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1220],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4032905144000,
		gdate: [1842, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 16]
		},
		gtime: -4032905144000
	},
	{
		sdate: [1220, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 26],
			Dow: 5,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1220],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4032818744000,
		gdate: [1842, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 17]
		},
		gtime: -4032818744000
	},
	{
		sdate: [1220, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 27],
			Dow: 6,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1220],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4032732344000,
		gdate: [1842, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 18]
		},
		gtime: -4032732344000
	},
	{
		sdate: [1220, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 28],
			Dow: 0,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1221],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4032645944000,
		gdate: [1842, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 19]
		},
		gtime: -4032645944000
	},
	{
		sdate: [1220, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 29],
			Dow: 1,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1221],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -4032559544000,
		gdate: [1842, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 20]
		},
		gtime: -4032559544000
	},

	{
		sdate: [1240, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 1],
			Dow: 5,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1239],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -3432857144000,
		gdate: [1861, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 21]
		},
		gtime: -3432857144000
	},
	{
		sdate: [1240, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 2],
			Dow: 6,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1239],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -3432770744000,
		gdate: [1861, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 22]
		},
		gtime: -3432770744000
	},
	{
		sdate: [1240, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 3],
			Dow: 0,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -3432684344000,
		gdate: [1861, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 23]
		},
		gtime: -3432684344000
	},
	{
		sdate: [1240, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 4],
			Dow: 1,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3432597944000,
		gdate: [1861, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 24]
		},
		gtime: -3432597944000
	},
	{
		sdate: [1240, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 5],
			Dow: 2,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3432511544000,
		gdate: [1861, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 25]
		},
		gtime: -3432511544000
	},
	{
		sdate: [1240, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 6],
			Dow: 3,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3432425144000,
		gdate: [1861, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 26]
		},
		gtime: -3432425144000
	},
	{
		sdate: [1240, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 7],
			Dow: 4,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3432338744000,
		gdate: [1861, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 27]
		},
		gtime: -3432338744000
	},
	{
		sdate: [1240, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 15],
			Dow: 5,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3431647544000,
		gdate: [1861, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 3, 4]
		},
		gtime: -3431647544000
	},
	{
		sdate: [1240, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 29],
			Dow: 5,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3430437944000,
		gdate: [1861, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 3, 18]
		},
		gtime: -3430437944000
	},
	{
		sdate: [1240, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 30],
			Dow: 6,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3430351544000,
		gdate: [1861, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 3, 19]
		},
		gtime: -3430351544000
	},
	{
		sdate: [1240, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 31],
			Dow: 0,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -3430265144000,
		gdate: [1861, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 3, 20]
		},
		gtime: -3430265144000
	},
	{
		sdate: [1240, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 1],
			Dow: 1,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -3430178744000,
		gdate: [1861, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 3, 21]
		},
		gtime: -3430178744000
	},
	{
		sdate: [1240, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 2],
			Dow: 2,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -3430092344000,
		gdate: [1861, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 3, 22]
		},
		gtime: -3430092344000
	},
	{
		sdate: [1240, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 15],
			Dow: 1,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3428969144000,
		gdate: [1861, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 4, 5]
		},
		gtime: -3428969144000
	},
	{
		sdate: [1240, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 30],
			Dow: 2,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3427673144000,
		gdate: [1861, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 4, 20]
		},
		gtime: -3427673144000
	},
	{
		sdate: [1240, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 1, 31],
			Dow: 3,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -3427586744000,
		gdate: [1861, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 4, 21]
		},
		gtime: -3427586744000
	},
	{
		sdate: [1240, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 1],
			Dow: 4,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -3427500344000,
		gdate: [1861, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 4, 22]
		},
		gtime: -3427500344000
	},
	{
		sdate: [1240, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 2],
			Dow: 5,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -3427413944000,
		gdate: [1861, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 4, 23]
		},
		gtime: -3427413944000
	},
	{
		sdate: [1240, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 15],
			Dow: 4,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3426290744000,
		gdate: [1861, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 5, 5]
		},
		gtime: -3426290744000
	},
	{
		sdate: [1240, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 30],
			Dow: 5,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -3424994744000,
		gdate: [1861, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 5, 20]
		},
		gtime: -3424994744000
	},
	{
		sdate: [1240, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 2, 31],
			Dow: 6,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -3424908344000,
		gdate: [1861, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 5, 21]
		},
		gtime: -3424908344000
	},
	{
		sdate: [1240, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 1],
			Dow: 0,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -3424821944000,
		gdate: [1861, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 5, 22]
		},
		gtime: -3424821944000
	},
	{
		sdate: [1240, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 2],
			Dow: 1,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -3424735544000,
		gdate: [1861, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 5, 23]
		},
		gtime: -3424735544000
	},
	{
		sdate: [1240, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 15],
			Dow: 0,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -3423612344000,
		gdate: [1861, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 6, 6]
		},
		gtime: -3423612344000
	},
	{
		sdate: [1240, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 30],
			Dow: 1,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -3422316344000,
		gdate: [1861, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 6, 21]
		},
		gtime: -3422316344000
	},
	{
		sdate: [1240, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 3, 31],
			Dow: 2,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -3422229944000,
		gdate: [1861, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 6, 22]
		},
		gtime: -3422229944000
	},
	{
		sdate: [1240, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 1],
			Dow: 3,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -3422143544000,
		gdate: [1861, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 6, 23]
		},
		gtime: -3422143544000
	},
	{
		sdate: [1240, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 2],
			Dow: 4,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -3422057144000,
		gdate: [1861, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 6, 24]
		},
		gtime: -3422057144000
	},
	{
		sdate: [1240, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 15],
			Dow: 3,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -3420933944000,
		gdate: [1861, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 7, 6]
		},
		gtime: -3420933944000
	},
	{
		sdate: [1240, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 30],
			Dow: 4,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -3419637944000,
		gdate: [1861, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 7, 21]
		},
		gtime: -3419637944000
	},
	{
		sdate: [1240, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 4, 31],
			Dow: 5,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -3419551544000,
		gdate: [1861, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 7, 22]
		},
		gtime: -3419551544000
	},
	{
		sdate: [1240, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 1],
			Dow: 6,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -3419465144000,
		gdate: [1861, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 7, 23]
		},
		gtime: -3419465144000
	},
	{
		sdate: [1240, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 2],
			Dow: 0,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -3419378744000,
		gdate: [1861, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 7, 24]
		},
		gtime: -3419378744000
	},
	{
		sdate: [1240, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 15],
			Dow: 6,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -3418255544000,
		gdate: [1861, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 8, 6]
		},
		gtime: -3418255544000
	},
	{
		sdate: [1240, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 29],
			Dow: 6,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -3417045944000,
		gdate: [1861, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 8, 20]
		},
		gtime: -3417045944000
	},
	{
		sdate: [1240, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 5, 30],
			Dow: 0,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -3416959544000,
		gdate: [1861, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 8, 21]
		},
		gtime: -3416959544000
	},
	{
		sdate: [1240, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 1],
			Dow: 2,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -3416786744000,
		gdate: [1861, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 8, 23]
		},
		gtime: -3416786744000
	},
	{
		sdate: [1240, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 2],
			Dow: 3,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -3416700344000,
		gdate: [1861, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 8, 24]
		},
		gtime: -3416700344000
	},
	{
		sdate: [1240, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 15],
			Dow: 2,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3415577144000,
		gdate: [1861, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 9, 7]
		},
		gtime: -3415577144000
	},
	{
		sdate: [1240, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 29],
			Dow: 2,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3414367544000,
		gdate: [1861, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 9, 21]
		},
		gtime: -3414367544000
	},
	{
		sdate: [1240, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 6, 30],
			Dow: 3,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3414281144000,
		gdate: [1861, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 9, 22]
		},
		gtime: -3414281144000
	},
	{
		sdate: [1240, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 1],
			Dow: 4,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -3414194744000,
		gdate: [1861, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 9, 23]
		},
		gtime: -3414194744000
	},
	{
		sdate: [1240, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 2],
			Dow: 5,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -3414108344000,
		gdate: [1861, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 9, 24]
		},
		gtime: -3414108344000
	},
	{
		sdate: [1240, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 15],
			Dow: 4,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3412985144000,
		gdate: [1861, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 10, 6]
		},
		gtime: -3412985144000
	},
	{
		sdate: [1240, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 29],
			Dow: 4,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3411775544000,
		gdate: [1861, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 10, 20]
		},
		gtime: -3411775544000
	},
	{
		sdate: [1240, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 7, 30],
			Dow: 5,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3411689144000,
		gdate: [1861, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 10, 21]
		},
		gtime: -3411689144000
	},
	{
		sdate: [1240, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 1],
			Dow: 6,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -3411602744000,
		gdate: [1861, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 10, 22]
		},
		gtime: -3411602744000
	},
	{
		sdate: [1240, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 2],
			Dow: 0,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -3411516344000,
		gdate: [1861, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 10, 23]
		},
		gtime: -3411516344000
	},
	{
		sdate: [1240, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 15],
			Dow: 6,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3410393144000,
		gdate: [1861, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 11, 6]
		},
		gtime: -3410393144000
	},
	{
		sdate: [1240, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 29],
			Dow: 6,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -3409183544000,
		gdate: [1861, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 11, 20]
		},
		gtime: -3409183544000
	},
	{
		sdate: [1240, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 8, 30],
			Dow: 0,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -3409097144000,
		gdate: [1861, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 11, 21]
		},
		gtime: -3409097144000
	},
	{
		sdate: [1240, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 1],
			Dow: 1,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -3409010744000,
		gdate: [1861, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 11, 22]
		},
		gtime: -3409010744000
	},
	{
		sdate: [1240, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 2],
			Dow: 2,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -3408924344000,
		gdate: [1861, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 11, 23]
		},
		gtime: -3408924344000
	},
	{
		sdate: [1240, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 15],
			Dow: 1,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3407801144000,
		gdate: [1862, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 0, 5]
		},
		gtime: -3407801144000
	},
	{
		sdate: [1240, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 29],
			Dow: 1,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3406591544000,
		gdate: [1862, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 0, 19]
		},
		gtime: -3406591544000
	},
	{
		sdate: [1240, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 9, 30],
			Dow: 2,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3406505144000,
		gdate: [1862, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 0, 20]
		},
		gtime: -3406505144000
	},
	{
		sdate: [1240, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 1],
			Dow: 3,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -3406418744000,
		gdate: [1862, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 0, 21]
		},
		gtime: -3406418744000
	},
	{
		sdate: [1240, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 2],
			Dow: 4,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -3406332344000,
		gdate: [1862, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 0, 22]
		},
		gtime: -3406332344000
	},
	{
		sdate: [1240, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 15],
			Dow: 3,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3405209144000,
		gdate: [1862, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 1, 4]
		},
		gtime: -3405209144000
	},
	{
		sdate: [1240, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 29],
			Dow: 3,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3403999544000,
		gdate: [1862, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 1, 18]
		},
		gtime: -3403999544000
	},
	{
		sdate: [1240, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 10, 30],
			Dow: 4,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3403913144000,
		gdate: [1862, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 1, 19]
		},
		gtime: -3403913144000
	},
	{
		sdate: [1240, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 1],
			Dow: 5,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -3403826744000,
		gdate: [1862, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 1, 20]
		},
		gtime: -3403826744000
	},
	{
		sdate: [1240, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 2],
			Dow: 6,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1240],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -3403740344000,
		gdate: [1862, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 1, 21]
		},
		gtime: -3403740344000
	},
	{
		sdate: [1240, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 3],
			Dow: 0,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1240],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -3403653944000,
		gdate: [1862, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 1, 22]
		},
		gtime: -3403653944000
	},
	{
		sdate: [1240, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 4],
			Dow: 1,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3403567544000,
		gdate: [1862, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 1, 23]
		},
		gtime: -3403567544000
	},
	{
		sdate: [1240, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 15],
			Dow: 5,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3402617144000,
		gdate: [1862, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 6]
		},
		gtime: -3402617144000
	},
	{
		sdate: [1240, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 25],
			Dow: 1,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1240],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3401753144000,
		gdate: [1862, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 16]
		},
		gtime: -3401753144000
	},
	{
		sdate: [1240, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 26],
			Dow: 2,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1240],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3401666744000,
		gdate: [1862, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 17]
		},
		gtime: -3401666744000
	},
	{
		sdate: [1240, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 27],
			Dow: 3,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1240],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3401580344000,
		gdate: [1862, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 18]
		},
		gtime: -3401580344000
	},
	{
		sdate: [1240, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 28],
			Dow: 4,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1240],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3401493944000,
		gdate: [1862, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 19]
		},
		gtime: -3401493944000
	},
	{
		sdate: [1240, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 29],
			Dow: 5,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1240],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -3401407544000,
		gdate: [1862, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 20]
		},
		gtime: -3401407544000
	},

	{
		sdate: [1260, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 1],
			Dow: 2,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2801705144000,
		gdate: [1881, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 21]
		},
		gtime: -2801705144000
	},
	{
		sdate: [1260, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 2],
			Dow: 3,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -2801618744000,
		gdate: [1881, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 22]
		},
		gtime: -2801618744000
	},
	{
		sdate: [1260, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 3],
			Dow: 4,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -2801532344000,
		gdate: [1881, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 23]
		},
		gtime: -2801532344000
	},
	{
		sdate: [1260, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 4],
			Dow: 5,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2801445944000,
		gdate: [1881, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 24]
		},
		gtime: -2801445944000
	},
	{
		sdate: [1260, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 5],
			Dow: 6,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2801359544000,
		gdate: [1881, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 25]
		},
		gtime: -2801359544000
	},
	{
		sdate: [1260, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 6],
			Dow: 0,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2801273144000,
		gdate: [1881, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 26]
		},
		gtime: -2801273144000
	},
	{
		sdate: [1260, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 7],
			Dow: 1,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2801186744000,
		gdate: [1881, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 27]
		},
		gtime: -2801186744000
	},
	{
		sdate: [1260, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 15],
			Dow: 2,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2800495544000,
		gdate: [1881, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 3, 4]
		},
		gtime: -2800495544000
	},
	{
		sdate: [1260, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 29],
			Dow: 2,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2799285944000,
		gdate: [1881, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 3, 18]
		},
		gtime: -2799285944000
	},
	{
		sdate: [1260, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 30],
			Dow: 3,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2799199544000,
		gdate: [1881, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 3, 19]
		},
		gtime: -2799199544000
	},
	{
		sdate: [1260, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 31],
			Dow: 4,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2799113144000,
		gdate: [1881, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 3, 20]
		},
		gtime: -2799113144000
	},
	{
		sdate: [1260, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 1],
			Dow: 5,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2799026744000,
		gdate: [1881, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 3, 21]
		},
		gtime: -2799026744000
	},
	{
		sdate: [1260, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 2],
			Dow: 6,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -2798940344000,
		gdate: [1881, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 3, 22]
		},
		gtime: -2798940344000
	},
	{
		sdate: [1260, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 15],
			Dow: 5,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2797817144000,
		gdate: [1881, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 4, 5]
		},
		gtime: -2797817144000
	},
	{
		sdate: [1260, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 30],
			Dow: 6,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2796521144000,
		gdate: [1881, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 4, 20]
		},
		gtime: -2796521144000
	},
	{
		sdate: [1260, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 1, 31],
			Dow: 0,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2796434744000,
		gdate: [1881, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 4, 21]
		},
		gtime: -2796434744000
	},
	{
		sdate: [1260, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 1],
			Dow: 1,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2796348344000,
		gdate: [1881, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 4, 22]
		},
		gtime: -2796348344000
	},
	{
		sdate: [1260, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 2],
			Dow: 2,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -2796261944000,
		gdate: [1881, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 4, 23]
		},
		gtime: -2796261944000
	},
	{
		sdate: [1260, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 15],
			Dow: 1,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2795138744000,
		gdate: [1881, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 5, 5]
		},
		gtime: -2795138744000
	},
	{
		sdate: [1260, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 30],
			Dow: 2,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2793842744000,
		gdate: [1881, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 5, 20]
		},
		gtime: -2793842744000
	},
	{
		sdate: [1260, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 2, 31],
			Dow: 3,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -2793756344000,
		gdate: [1881, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 5, 21]
		},
		gtime: -2793756344000
	},
	{
		sdate: [1260, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 1],
			Dow: 4,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2793669944000,
		gdate: [1881, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 5, 22]
		},
		gtime: -2793669944000
	},
	{
		sdate: [1260, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 2],
			Dow: 5,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -2793583544000,
		gdate: [1881, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 5, 23]
		},
		gtime: -2793583544000
	},
	{
		sdate: [1260, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 15],
			Dow: 4,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2792460344000,
		gdate: [1881, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 6, 6]
		},
		gtime: -2792460344000
	},
	{
		sdate: [1260, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 30],
			Dow: 5,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2791164344000,
		gdate: [1881, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 6, 21]
		},
		gtime: -2791164344000
	},
	{
		sdate: [1260, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 3, 31],
			Dow: 6,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2791077944000,
		gdate: [1881, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 6, 22]
		},
		gtime: -2791077944000
	},
	{
		sdate: [1260, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 1],
			Dow: 0,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2790991544000,
		gdate: [1881, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 6, 23]
		},
		gtime: -2790991544000
	},
	{
		sdate: [1260, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 2],
			Dow: 1,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -2790905144000,
		gdate: [1881, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 6, 24]
		},
		gtime: -2790905144000
	},
	{
		sdate: [1260, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 15],
			Dow: 0,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [21, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2789781944000,
		gdate: [1881, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 7, 6]
		},
		gtime: -2789781944000
	},
	{
		sdate: [1260, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 30],
			Dow: 1,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2788485944000,
		gdate: [1881, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 7, 21]
		},
		gtime: -2788485944000
	},
	{
		sdate: [1260, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 4, 31],
			Dow: 2,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2788399544000,
		gdate: [1881, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 7, 22]
		},
		gtime: -2788399544000
	},
	{
		sdate: [1260, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 1],
			Dow: 3,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2788313144000,
		gdate: [1881, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 7, 23]
		},
		gtime: -2788313144000
	},
	{
		sdate: [1260, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 2],
			Dow: 4,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -2788226744000,
		gdate: [1881, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 7, 24]
		},
		gtime: -2788226744000
	},
	{
		sdate: [1260, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 15],
			Dow: 3,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2787103544000,
		gdate: [1881, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 8, 6]
		},
		gtime: -2787103544000
	},
	{
		sdate: [1260, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 29],
			Dow: 3,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2785893944000,
		gdate: [1881, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 8, 20]
		},
		gtime: -2785893944000
	},
	{
		sdate: [1260, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 5, 30],
			Dow: 4,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2785807544000,
		gdate: [1881, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 8, 21]
		},
		gtime: -2785807544000
	},
	{
		sdate: [1260, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 1],
			Dow: 6,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -2785634744000,
		gdate: [1881, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 8, 23]
		},
		gtime: -2785634744000
	},
	{
		sdate: [1260, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 2],
			Dow: 0,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [28, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -2785548344000,
		gdate: [1881, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 8, 24]
		},
		gtime: -2785548344000
	},
	{
		sdate: [1260, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 15],
			Dow: 6,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2784425144000,
		gdate: [1881, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 9, 7]
		},
		gtime: -2784425144000
	},
	{
		sdate: [1260, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 29],
			Dow: 6,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2783215544000,
		gdate: [1881, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 9, 21]
		},
		gtime: -2783215544000
	},
	{
		sdate: [1260, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 6, 30],
			Dow: 0,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2783129144000,
		gdate: [1881, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 9, 22]
		},
		gtime: -2783129144000
	},
	{
		sdate: [1260, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 1],
			Dow: 1,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -2783042744000,
		gdate: [1881, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 9, 23]
		},
		gtime: -2783042744000
	},
	{
		sdate: [1260, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 2],
			Dow: 2,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -2782956344000,
		gdate: [1881, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 9, 24]
		},
		gtime: -2782956344000
	},
	{
		sdate: [1260, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 15],
			Dow: 1,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2781833144000,
		gdate: [1881, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 10, 6]
		},
		gtime: -2781833144000
	},
	{
		sdate: [1260, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 29],
			Dow: 1,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2780623544000,
		gdate: [1881, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 10, 20]
		},
		gtime: -2780623544000
	},
	{
		sdate: [1260, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 7, 30],
			Dow: 2,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2780537144000,
		gdate: [1881, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 10, 21]
		},
		gtime: -2780537144000
	},
	{
		sdate: [1260, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 1],
			Dow: 3,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -2780450744000,
		gdate: [1881, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 10, 22]
		},
		gtime: -2780450744000
	},
	{
		sdate: [1260, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 2],
			Dow: 4,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -2780364344000,
		gdate: [1881, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 10, 23]
		},
		gtime: -2780364344000
	},
	{
		sdate: [1260, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 15],
			Dow: 3,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2779241144000,
		gdate: [1881, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 11, 6]
		},
		gtime: -2779241144000
	},
	{
		sdate: [1260, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 29],
			Dow: 3,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2778031544000,
		gdate: [1881, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 11, 20]
		},
		gtime: -2778031544000
	},
	{
		sdate: [1260, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 8, 30],
			Dow: 4,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -2777945144000,
		gdate: [1881, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 11, 21]
		},
		gtime: -2777945144000
	},
	{
		sdate: [1260, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 1],
			Dow: 5,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -2777858744000,
		gdate: [1881, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 11, 22]
		},
		gtime: -2777858744000
	},
	{
		sdate: [1260, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 2],
			Dow: 6,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -2777772344000,
		gdate: [1881, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 11, 23]
		},
		gtime: -2777772344000
	},
	{
		sdate: [1260, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 15],
			Dow: 5,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2776649144000,
		gdate: [1882, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 0, 5]
		},
		gtime: -2776649144000
	},
	{
		sdate: [1260, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 29],
			Dow: 5,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2775439544000,
		gdate: [1882, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 0, 19]
		},
		gtime: -2775439544000
	},
	{
		sdate: [1260, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 9, 30],
			Dow: 6,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2775353144000,
		gdate: [1882, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 0, 20]
		},
		gtime: -2775353144000
	},
	{
		sdate: [1260, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 1],
			Dow: 0,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -2775266744000,
		gdate: [1882, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 0, 21]
		},
		gtime: -2775266744000
	},
	{
		sdate: [1260, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 2],
			Dow: 1,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -2775180344000,
		gdate: [1882, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 0, 22]
		},
		gtime: -2775180344000
	},
	{
		sdate: [1260, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 15],
			Dow: 0,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [47, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2774057144000,
		gdate: [1882, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 1, 4]
		},
		gtime: -2774057144000
	},
	{
		sdate: [1260, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 29],
			Dow: 0,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1260],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2772847544000,
		gdate: [1882, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 1, 18]
		},
		gtime: -2772847544000
	},
	{
		sdate: [1260, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 10, 30],
			Dow: 1,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1260],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2772761144000,
		gdate: [1882, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 1, 19]
		},
		gtime: -2772761144000
	},
	{
		sdate: [1260, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 1],
			Dow: 2,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -2772674744000,
		gdate: [1882, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 1, 20]
		},
		gtime: -2772674744000
	},
	{
		sdate: [1260, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 2],
			Dow: 3,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1260],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -2772588344000,
		gdate: [1882, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 1, 21]
		},
		gtime: -2772588344000
	},
	{
		sdate: [1260, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 3],
			Dow: 4,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1260],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -2772501944000,
		gdate: [1882, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 1, 22]
		},
		gtime: -2772501944000
	},
	{
		sdate: [1260, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 4],
			Dow: 5,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2772415544000,
		gdate: [1882, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 1, 23]
		},
		gtime: -2772415544000
	},
	{
		sdate: [1260, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 15],
			Dow: 2,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1260],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2771465144000,
		gdate: [1882, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 6]
		},
		gtime: -2771465144000
	},
	{
		sdate: [1260, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 25],
			Dow: 5,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1260],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2770601144000,
		gdate: [1882, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 16]
		},
		gtime: -2770601144000
	},
	{
		sdate: [1260, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 26],
			Dow: 6,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1260],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2770514744000,
		gdate: [1882, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 17]
		},
		gtime: -2770514744000
	},
	{
		sdate: [1260, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 27],
			Dow: 0,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1261],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2770428344000,
		gdate: [1882, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 18]
		},
		gtime: -2770428344000
	},
	{
		sdate: [1260, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 28],
			Dow: 1,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1261],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2770341944000,
		gdate: [1882, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 19]
		},
		gtime: -2770341944000
	},
	{
		sdate: [1260, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 29],
			Dow: 2,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1261],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2770255544000,
		gdate: [1882, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 20]
		},
		gtime: -2770255544000
	},

	{
		sdate: [1280, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 1],
			Dow: 5,
			Diy: 366,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1279],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2170639544000,
		gdate: [1901, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 21]
		},
		gtime: -2170639544000
	},
	{
		sdate: [1280, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 2],
			Dow: 6,
			Diy: 366,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1279],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -2170553144000,
		gdate: [1901, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 22]
		},
		gtime: -2170553144000
	},
	{
		sdate: [1280, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 3],
			Dow: 0,
			Diy: 366,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -2170466744000,
		gdate: [1901, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 23]
		},
		gtime: -2170466744000
	},
	{
		sdate: [1280, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 4],
			Dow: 1,
			Diy: 366,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2170380344000,
		gdate: [1901, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 24]
		},
		gtime: -2170380344000
	},
	{
		sdate: [1280, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 5],
			Dow: 2,
			Diy: 366,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2170293944000,
		gdate: [1901, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 25]
		},
		gtime: -2170293944000
	},
	{
		sdate: [1280, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 6],
			Dow: 3,
			Diy: 366,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2170207544000,
		gdate: [1901, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 26]
		},
		gtime: -2170207544000
	},
	{
		sdate: [1280, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 7],
			Dow: 4,
			Diy: 366,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2170121144000,
		gdate: [1901, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 27]
		},
		gtime: -2170121144000
	},
	{
		sdate: [1280, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 15],
			Dow: 5,
			Diy: 366,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2169429944000,
		gdate: [1901, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 3, 4]
		},
		gtime: -2169429944000
	},
	{
		sdate: [1280, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 29],
			Dow: 5,
			Diy: 366,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2168220344000,
		gdate: [1901, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 3, 18]
		},
		gtime: -2168220344000
	},
	{
		sdate: [1280, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 30],
			Dow: 6,
			Diy: 366,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2168133944000,
		gdate: [1901, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 3, 19]
		},
		gtime: -2168133944000
	},
	{
		sdate: [1280, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 31],
			Dow: 0,
			Diy: 366,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2168047544000,
		gdate: [1901, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 3, 20]
		},
		gtime: -2168047544000
	},
	{
		sdate: [1280, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 1],
			Dow: 1,
			Diy: 366,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2167961144000,
		gdate: [1901, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 3, 21]
		},
		gtime: -2167961144000
	},
	{
		sdate: [1280, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 2],
			Dow: 2,
			Diy: 366,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -2167874744000,
		gdate: [1901, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 3, 22]
		},
		gtime: -2167874744000
	},
	{
		sdate: [1280, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 15],
			Dow: 1,
			Diy: 366,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2166751544000,
		gdate: [1901, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 4, 5]
		},
		gtime: -2166751544000
	},
	{
		sdate: [1280, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 30],
			Dow: 2,
			Diy: 366,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2165455544000,
		gdate: [1901, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 4, 20]
		},
		gtime: -2165455544000
	},
	{
		sdate: [1280, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 1, 31],
			Dow: 3,
			Diy: 366,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2165369144000,
		gdate: [1901, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 4, 21]
		},
		gtime: -2165369144000
	},
	{
		sdate: [1280, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 1],
			Dow: 4,
			Diy: 366,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -2165282744000,
		gdate: [1901, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 4, 22]
		},
		gtime: -2165282744000
	},
	{
		sdate: [1280, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 2],
			Dow: 5,
			Diy: 366,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -2165196344000,
		gdate: [1901, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 4, 23]
		},
		gtime: -2165196344000
	},
	{
		sdate: [1280, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 15],
			Dow: 4,
			Diy: 366,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2164073144000,
		gdate: [1901, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 5, 5]
		},
		gtime: -2164073144000
	},
	{
		sdate: [1280, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 30],
			Dow: 5,
			Diy: 366,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -2162777144000,
		gdate: [1901, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 5, 20]
		},
		gtime: -2162777144000
	},
	{
		sdate: [1280, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 2, 31],
			Dow: 6,
			Diy: 366,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -2162690744000,
		gdate: [1901, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 5, 21]
		},
		gtime: -2162690744000
	},
	{
		sdate: [1280, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 1],
			Dow: 0,
			Diy: 366,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2162604344000,
		gdate: [1901, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 5, 22]
		},
		gtime: -2162604344000
	},
	{
		sdate: [1280, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 2],
			Dow: 1,
			Diy: 366,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -2162517944000,
		gdate: [1901, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 5, 23]
		},
		gtime: -2162517944000
	},
	{
		sdate: [1280, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 15],
			Dow: 0,
			Diy: 366,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2161394744000,
		gdate: [1901, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 6, 6]
		},
		gtime: -2161394744000
	},
	{
		sdate: [1280, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 30],
			Dow: 1,
			Diy: 366,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2160098744000,
		gdate: [1901, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 6, 21]
		},
		gtime: -2160098744000
	},
	{
		sdate: [1280, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 3, 31],
			Dow: 2,
			Diy: 366,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2160012344000,
		gdate: [1901, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 6, 22]
		},
		gtime: -2160012344000
	},
	{
		sdate: [1280, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 1],
			Dow: 3,
			Diy: 366,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2159925944000,
		gdate: [1901, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 6, 23]
		},
		gtime: -2159925944000
	},
	{
		sdate: [1280, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 2],
			Dow: 4,
			Diy: 366,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -2159839544000,
		gdate: [1901, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 6, 24]
		},
		gtime: -2159839544000
	},
	{
		sdate: [1280, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 15],
			Dow: 3,
			Diy: 366,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2158716344000,
		gdate: [1901, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 7, 6]
		},
		gtime: -2158716344000
	},
	{
		sdate: [1280, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 30],
			Dow: 4,
			Diy: 366,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2157420344000,
		gdate: [1901, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 7, 21]
		},
		gtime: -2157420344000
	},
	{
		sdate: [1280, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 4, 31],
			Dow: 5,
			Diy: 366,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2157333944000,
		gdate: [1901, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 7, 22]
		},
		gtime: -2157333944000
	},
	{
		sdate: [1280, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 1],
			Dow: 6,
			Diy: 366,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -2157247544000,
		gdate: [1901, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 7, 23]
		},
		gtime: -2157247544000
	},
	{
		sdate: [1280, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 2],
			Dow: 0,
			Diy: 366,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -2157161144000,
		gdate: [1901, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 7, 24]
		},
		gtime: -2157161144000
	},
	{
		sdate: [1280, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 15],
			Dow: 6,
			Diy: 366,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2156037944000,
		gdate: [1901, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 8, 6]
		},
		gtime: -2156037944000
	},
	{
		sdate: [1280, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 29],
			Dow: 6,
			Diy: 366,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2154828344000,
		gdate: [1901, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 8, 20]
		},
		gtime: -2154828344000
	},
	{
		sdate: [1280, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 5, 30],
			Dow: 0,
			Diy: 366,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -2154741944000,
		gdate: [1901, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 8, 21]
		},
		gtime: -2154741944000
	},
	{
		sdate: [1280, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 1],
			Dow: 2,
			Diy: 366,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -2154569144000,
		gdate: [1901, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 8, 23]
		},
		gtime: -2154569144000
	},
	{
		sdate: [1280, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 2],
			Dow: 3,
			Diy: 366,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -2154482744000,
		gdate: [1901, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 8, 24]
		},
		gtime: -2154482744000
	},
	{
		sdate: [1280, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 15],
			Dow: 2,
			Diy: 366,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2153359544000,
		gdate: [1901, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 9, 7]
		},
		gtime: -2153359544000
	},
	{
		sdate: [1280, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 29],
			Dow: 2,
			Diy: 366,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2152149944000,
		gdate: [1901, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 9, 21]
		},
		gtime: -2152149944000
	},
	{
		sdate: [1280, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 6, 30],
			Dow: 3,
			Diy: 366,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2152063544000,
		gdate: [1901, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 9, 22]
		},
		gtime: -2152063544000
	},
	{
		sdate: [1280, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 1],
			Dow: 4,
			Diy: 366,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -2151977144000,
		gdate: [1901, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 9, 23]
		},
		gtime: -2151977144000
	},
	{
		sdate: [1280, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 2],
			Dow: 5,
			Diy: 366,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -2151890744000,
		gdate: [1901, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 9, 24]
		},
		gtime: -2151890744000
	},
	{
		sdate: [1280, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 15],
			Dow: 4,
			Diy: 366,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2150767544000,
		gdate: [1901, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 10, 6]
		},
		gtime: -2150767544000
	},
	{
		sdate: [1280, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 29],
			Dow: 4,
			Diy: 366,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2149557944000,
		gdate: [1901, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 10, 20]
		},
		gtime: -2149557944000
	},
	{
		sdate: [1280, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 7, 30],
			Dow: 5,
			Diy: 366,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2149471544000,
		gdate: [1901, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 10, 21]
		},
		gtime: -2149471544000
	},
	{
		sdate: [1280, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 1],
			Dow: 6,
			Diy: 366,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -2149385144000,
		gdate: [1901, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 10, 22]
		},
		gtime: -2149385144000
	},
	{
		sdate: [1280, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 2],
			Dow: 0,
			Diy: 366,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -2149298744000,
		gdate: [1901, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 10, 23]
		},
		gtime: -2149298744000
	},
	{
		sdate: [1280, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 15],
			Dow: 6,
			Diy: 366,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2148175544000,
		gdate: [1901, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 11, 6]
		},
		gtime: -2148175544000
	},
	{
		sdate: [1280, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 29],
			Dow: 6,
			Diy: 366,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -2146965944000,
		gdate: [1901, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 11, 20]
		},
		gtime: -2146965944000
	},
	{
		sdate: [1280, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 8, 30],
			Dow: 0,
			Diy: 366,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -2146879544000,
		gdate: [1901, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 11, 21]
		},
		gtime: -2146879544000
	},
	{
		sdate: [1280, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 1],
			Dow: 1,
			Diy: 366,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -2146793144000,
		gdate: [1901, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 11, 22]
		},
		gtime: -2146793144000
	},
	{
		sdate: [1280, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 2],
			Dow: 2,
			Diy: 366,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -2146706744000,
		gdate: [1901, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 11, 23]
		},
		gtime: -2146706744000
	},
	{
		sdate: [1280, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 15],
			Dow: 1,
			Diy: 366,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2145583544000,
		gdate: [1902, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 0, 5]
		},
		gtime: -2145583544000
	},
	{
		sdate: [1280, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 29],
			Dow: 1,
			Diy: 366,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2144373944000,
		gdate: [1902, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 0, 19]
		},
		gtime: -2144373944000
	},
	{
		sdate: [1280, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 9, 30],
			Dow: 2,
			Diy: 366,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2144287544000,
		gdate: [1902, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 0, 20]
		},
		gtime: -2144287544000
	},
	{
		sdate: [1280, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 1],
			Dow: 3,
			Diy: 366,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -2144201144000,
		gdate: [1902, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 0, 21]
		},
		gtime: -2144201144000
	},
	{
		sdate: [1280, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 2],
			Dow: 4,
			Diy: 366,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -2144114744000,
		gdate: [1902, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 0, 22]
		},
		gtime: -2144114744000
	},
	{
		sdate: [1280, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 15],
			Dow: 3,
			Diy: 366,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2142991544000,
		gdate: [1902, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 1, 4]
		},
		gtime: -2142991544000
	},
	{
		sdate: [1280, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 29],
			Dow: 3,
			Diy: 366,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2141781944000,
		gdate: [1902, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 1, 18]
		},
		gtime: -2141781944000
	},
	{
		sdate: [1280, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 10, 30],
			Dow: 4,
			Diy: 366,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2141695544000,
		gdate: [1902, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 1, 19]
		},
		gtime: -2141695544000
	},
	{
		sdate: [1280, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 1],
			Dow: 5,
			Diy: 366,
			Doy: 336,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -2141609144000,
		gdate: [1902, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 1, 20]
		},
		gtime: -2141609144000
	},
	{
		sdate: [1280, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 2],
			Dow: 6,
			Diy: 366,
			Doy: 337,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -2141522744000,
		gdate: [1902, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 1, 21]
		},
		gtime: -2141522744000
	},
	{
		sdate: [1280, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 3],
			Dow: 0,
			Diy: 366,
			Doy: 338,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1280],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -2141436344000,
		gdate: [1902, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 1, 22]
		},
		gtime: -2141436344000
	},
	{
		sdate: [1280, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 4],
			Dow: 1,
			Diy: 366,
			Doy: 339,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2141349944000,
		gdate: [1902, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 1, 23]
		},
		gtime: -2141349944000
	},
	{
		sdate: [1280, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 15],
			Dow: 5,
			Diy: 366,
			Doy: 350,
			Dim: 30,
			Wiy: 52,
			Woy: [50, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2140399544000,
		gdate: [1902, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 6]
		},
		gtime: -2140399544000
	},
	{
		sdate: [1280, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 25],
			Dow: 1,
			Diy: 366,
			Doy: 360,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1280],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2139535544000,
		gdate: [1902, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 16]
		},
		gtime: -2139535544000
	},
	{
		sdate: [1280, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 26],
			Dow: 2,
			Diy: 366,
			Doy: 361,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1280],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2139449144000,
		gdate: [1902, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 17]
		},
		gtime: -2139449144000
	},
	{
		sdate: [1280, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 27],
			Dow: 3,
			Diy: 366,
			Doy: 362,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1280],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2139362744000,
		gdate: [1902, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 18]
		},
		gtime: -2139362744000
	},
	{
		sdate: [1280, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 28],
			Dow: 4,
			Diy: 366,
			Doy: 363,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1280],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2139276344000,
		gdate: [1902, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 19]
		},
		gtime: -2139276344000
	},
	{
		sdate: [1280, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 29],
			Dow: 5,
			Diy: 366,
			Doy: 364,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1280],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2139189944000,
		gdate: [1902, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 20]
		},
		gtime: -2139189944000
	},
	{
		sdate: [1280, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 30],
			Dow: 6,
			Diy: 366,
			Doy: 365,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1280],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -2139103544000,
		gdate: [1902, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 21]
		},
		gtime: -2139103544000
	},
	{
		sdate: [1300, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 1],
			Dow: 2,
			Diy: 366,
			Doy: 0,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -1539487544000,
		gdate: [1921, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 21]
		},
		gtime: -1539487544000
	},
	{
		sdate: [1300, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 2],
			Dow: 3,
			Diy: 366,
			Doy: 1,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -1539401144000,
		gdate: [1921, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 22]
		},
		gtime: -1539401144000
	},
	{
		sdate: [1300, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 3],
			Dow: 4,
			Diy: 366,
			Doy: 2,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -1539314744000,
		gdate: [1921, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 23]
		},
		gtime: -1539314744000
	},
	{
		sdate: [1300, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 4],
			Dow: 5,
			Diy: 366,
			Doy: 3,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1539228344000,
		gdate: [1921, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 24]
		},
		gtime: -1539228344000
	},
	{
		sdate: [1300, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 5],
			Dow: 6,
			Diy: 366,
			Doy: 4,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1539141944000,
		gdate: [1921, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 25]
		},
		gtime: -1539141944000
	},
	{
		sdate: [1300, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 6],
			Dow: 0,
			Diy: 366,
			Doy: 5,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1539055544000,
		gdate: [1921, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 26]
		},
		gtime: -1539055544000
	},
	{
		sdate: [1300, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 7],
			Dow: 1,
			Diy: 366,
			Doy: 6,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1538969144000,
		gdate: [1921, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 27]
		},
		gtime: -1538969144000
	},
	{
		sdate: [1300, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 15],
			Dow: 2,
			Diy: 366,
			Doy: 14,
			Dim: 31,
			Wiy: 53,
			Woy: [3, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1538277944000,
		gdate: [1921, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 3, 4]
		},
		gtime: -1538277944000
	},
	{
		sdate: [1300, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 29],
			Dow: 2,
			Diy: 366,
			Doy: 28,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1537068344000,
		gdate: [1921, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 3, 18]
		},
		gtime: -1537068344000
	},
	{
		sdate: [1300, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 30],
			Dow: 3,
			Diy: 366,
			Doy: 29,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1536981944000,
		gdate: [1921, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 3, 19]
		},
		gtime: -1536981944000
	},
	{
		sdate: [1300, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 31],
			Dow: 4,
			Diy: 366,
			Doy: 30,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -1536895544000,
		gdate: [1921, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 3, 20]
		},
		gtime: -1536895544000
	},
	{
		sdate: [1300, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 1],
			Dow: 5,
			Diy: 366,
			Doy: 31,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -1536809144000,
		gdate: [1921, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 3, 21]
		},
		gtime: -1536809144000
	},
	{
		sdate: [1300, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 2],
			Dow: 6,
			Diy: 366,
			Doy: 32,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -1536722744000,
		gdate: [1921, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 3, 22]
		},
		gtime: -1536722744000
	},
	{
		sdate: [1300, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 15],
			Dow: 5,
			Diy: 366,
			Doy: 45,
			Dim: 31,
			Wiy: 53,
			Woy: [7, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1535599544000,
		gdate: [1921, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 4, 5]
		},
		gtime: -1535599544000
	},
	{
		sdate: [1300, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 30],
			Dow: 6,
			Diy: 366,
			Doy: 60,
			Dim: 31,
			Wiy: 53,
			Woy: [9, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1534303544000,
		gdate: [1921, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 4, 20]
		},
		gtime: -1534303544000
	},
	{
		sdate: [1300, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 1, 31],
			Dow: 0,
			Diy: 366,
			Doy: 61,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -1534217144000,
		gdate: [1921, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 4, 21]
		},
		gtime: -1534217144000
	},
	{
		sdate: [1300, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 1],
			Dow: 1,
			Diy: 366,
			Doy: 62,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -1534130744000,
		gdate: [1921, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 4, 22]
		},
		gtime: -1534130744000
	},
	{
		sdate: [1300, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 2],
			Dow: 2,
			Diy: 366,
			Doy: 63,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -1534044344000,
		gdate: [1921, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 4, 23]
		},
		gtime: -1534044344000
	},
	{
		sdate: [1300, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 15],
			Dow: 1,
			Diy: 366,
			Doy: 76,
			Dim: 31,
			Wiy: 53,
			Woy: [12, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1532921144000,
		gdate: [1921, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 5, 5]
		},
		gtime: -1532921144000
	},
	{
		sdate: [1300, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 30],
			Dow: 2,
			Diy: 366,
			Doy: 91,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -1531625144000,
		gdate: [1921, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 5, 20]
		},
		gtime: -1531625144000
	},
	{
		sdate: [1300, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 2, 31],
			Dow: 3,
			Diy: 366,
			Doy: 92,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -1531538744000,
		gdate: [1921, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 5, 21]
		},
		gtime: -1531538744000
	},
	{
		sdate: [1300, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 1],
			Dow: 4,
			Diy: 366,
			Doy: 93,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -1531452344000,
		gdate: [1921, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 5, 22]
		},
		gtime: -1531452344000
	},
	{
		sdate: [1300, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 2],
			Dow: 5,
			Diy: 366,
			Doy: 94,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -1531365944000,
		gdate: [1921, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 5, 23]
		},
		gtime: -1531365944000
	},
	{
		sdate: [1300, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 15],
			Dow: 4,
			Diy: 366,
			Doy: 107,
			Dim: 31,
			Wiy: 53,
			Woy: [16, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -1530242744000,
		gdate: [1921, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 6, 6]
		},
		gtime: -1530242744000
	},
	{
		sdate: [1300, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 30],
			Dow: 5,
			Diy: 366,
			Doy: 122,
			Dim: 31,
			Wiy: 53,
			Woy: [18, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -1528946744000,
		gdate: [1921, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 6, 21]
		},
		gtime: -1528946744000
	},
	{
		sdate: [1300, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 3, 31],
			Dow: 6,
			Diy: 366,
			Doy: 123,
			Dim: 31,
			Wiy: 53,
			Woy: [18, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -1528860344000,
		gdate: [1921, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 6, 22]
		},
		gtime: -1528860344000
	},
	{
		sdate: [1300, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 1],
			Dow: 0,
			Diy: 366,
			Doy: 124,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -1528773944000,
		gdate: [1921, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 6, 23]
		},
		gtime: -1528773944000
	},
	{
		sdate: [1300, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 2],
			Dow: 1,
			Diy: 366,
			Doy: 125,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -1528687544000,
		gdate: [1921, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 6, 24]
		},
		gtime: -1528687544000
	},
	{
		sdate: [1300, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 15],
			Dow: 0,
			Diy: 366,
			Doy: 138,
			Dim: 31,
			Wiy: 53,
			Woy: [21, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -1527564344000,
		gdate: [1921, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 7, 6]
		},
		gtime: -1527564344000
	},
	{
		sdate: [1300, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 30],
			Dow: 1,
			Diy: 366,
			Doy: 153,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -1526268344000,
		gdate: [1921, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 7, 21]
		},
		gtime: -1526268344000
	},
	{
		sdate: [1300, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 4, 31],
			Dow: 2,
			Diy: 366,
			Doy: 154,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -1526181944000,
		gdate: [1921, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 7, 22]
		},
		gtime: -1526181944000
	},
	{
		sdate: [1300, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 1],
			Dow: 3,
			Diy: 366,
			Doy: 155,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -1526095544000,
		gdate: [1921, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 7, 23]
		},
		gtime: -1526095544000
	},
	{
		sdate: [1300, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 2],
			Dow: 4,
			Diy: 366,
			Doy: 156,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -1526009144000,
		gdate: [1921, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 7, 24]
		},
		gtime: -1526009144000
	},
	{
		sdate: [1300, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 15],
			Dow: 3,
			Diy: 366,
			Doy: 169,
			Dim: 31,
			Wiy: 53,
			Woy: [25, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -1524885944000,
		gdate: [1921, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 8, 6]
		},
		gtime: -1524885944000
	},
	{
		sdate: [1300, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 29],
			Dow: 3,
			Diy: 366,
			Doy: 183,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -1523676344000,
		gdate: [1921, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 8, 20]
		},
		gtime: -1523676344000
	},
	{
		sdate: [1300, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 5, 30],
			Dow: 4,
			Diy: 366,
			Doy: 184,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -1523589944000,
		gdate: [1921, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 8, 21]
		},
		gtime: -1523589944000
	},
	{
		sdate: [1300, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 1],
			Dow: 6,
			Diy: 366,
			Doy: 186,
			Dim: 30,
			Wiy: 53,
			Woy: [27, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -1523417144000,
		gdate: [1921, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 8, 23]
		},
		gtime: -1523417144000
	},
	{
		sdate: [1300, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 2],
			Dow: 0,
			Diy: 366,
			Doy: 187,
			Dim: 30,
			Wiy: 53,
			Woy: [28, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -1523330744000,
		gdate: [1921, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 8, 24]
		},
		gtime: -1523330744000
	},
	{
		sdate: [1300, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 15],
			Dow: 6,
			Diy: 366,
			Doy: 200,
			Dim: 30,
			Wiy: 53,
			Woy: [29, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1522207544000,
		gdate: [1921, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 9, 7]
		},
		gtime: -1522207544000
	},
	{
		sdate: [1300, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 29],
			Dow: 6,
			Diy: 366,
			Doy: 214,
			Dim: 30,
			Wiy: 53,
			Woy: [31, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1520997944000,
		gdate: [1921, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 9, 21]
		},
		gtime: -1520997944000
	},
	{
		sdate: [1300, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 6, 30],
			Dow: 0,
			Diy: 366,
			Doy: 215,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1520911544000,
		gdate: [1921, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 9, 22]
		},
		gtime: -1520911544000
	},
	{
		sdate: [1300, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 1],
			Dow: 1,
			Diy: 366,
			Doy: 216,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -1520825144000,
		gdate: [1921, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 9, 23]
		},
		gtime: -1520825144000
	},
	{
		sdate: [1300, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 2],
			Dow: 2,
			Diy: 366,
			Doy: 217,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -1520738744000,
		gdate: [1921, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 9, 24]
		},
		gtime: -1520738744000
	},
	{
		sdate: [1300, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 15],
			Dow: 1,
			Diy: 366,
			Doy: 230,
			Dim: 30,
			Wiy: 53,
			Woy: [34, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1519615544000,
		gdate: [1921, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 10, 6]
		},
		gtime: -1519615544000
	},
	{
		sdate: [1300, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 29],
			Dow: 1,
			Diy: 366,
			Doy: 244,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1518405944000,
		gdate: [1921, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 10, 20]
		},
		gtime: -1518405944000
	},
	{
		sdate: [1300, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 7, 30],
			Dow: 2,
			Diy: 366,
			Doy: 245,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1518319544000,
		gdate: [1921, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 10, 21]
		},
		gtime: -1518319544000
	},
	{
		sdate: [1300, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 1],
			Dow: 3,
			Diy: 366,
			Doy: 246,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -1518233144000,
		gdate: [1921, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 10, 22]
		},
		gtime: -1518233144000
	},
	{
		sdate: [1300, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 2],
			Dow: 4,
			Diy: 366,
			Doy: 247,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -1518146744000,
		gdate: [1921, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 10, 23]
		},
		gtime: -1518146744000
	},
	{
		sdate: [1300, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 15],
			Dow: 3,
			Diy: 366,
			Doy: 260,
			Dim: 30,
			Wiy: 53,
			Woy: [38, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1517023544000,
		gdate: [1921, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 11, 6]
		},
		gtime: -1517023544000
	},
	{
		sdate: [1300, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 29],
			Dow: 3,
			Diy: 366,
			Doy: 274,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -1515813944000,
		gdate: [1921, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 11, 20]
		},
		gtime: -1515813944000
	},
	{
		sdate: [1300, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 8, 30],
			Dow: 4,
			Diy: 366,
			Doy: 275,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -1515727544000,
		gdate: [1921, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 11, 21]
		},
		gtime: -1515727544000
	},
	{
		sdate: [1300, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 1],
			Dow: 5,
			Diy: 366,
			Doy: 276,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -1515641144000,
		gdate: [1921, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 11, 22]
		},
		gtime: -1515641144000
	},
	{
		sdate: [1300, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 2],
			Dow: 6,
			Diy: 366,
			Doy: 277,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -1515554744000,
		gdate: [1921, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 11, 23]
		},
		gtime: -1515554744000
	},
	{
		sdate: [1300, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 15],
			Dow: 5,
			Diy: 366,
			Doy: 290,
			Dim: 30,
			Wiy: 53,
			Woy: [42, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1514431544000,
		gdate: [1922, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 0, 5]
		},
		gtime: -1514431544000
	},
	{
		sdate: [1300, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 29],
			Dow: 5,
			Diy: 366,
			Doy: 304,
			Dim: 30,
			Wiy: 53,
			Woy: [44, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1513221944000,
		gdate: [1922, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 0, 19]
		},
		gtime: -1513221944000
	},
	{
		sdate: [1300, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 9, 30],
			Dow: 6,
			Diy: 366,
			Doy: 305,
			Dim: 30,
			Wiy: 53,
			Woy: [44, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1513135544000,
		gdate: [1922, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 0, 20]
		},
		gtime: -1513135544000
	},
	{
		sdate: [1300, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 1],
			Dow: 0,
			Diy: 366,
			Doy: 306,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -1513049144000,
		gdate: [1922, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 0, 21]
		},
		gtime: -1513049144000
	},
	{
		sdate: [1300, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 2],
			Dow: 1,
			Diy: 366,
			Doy: 307,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -1512962744000,
		gdate: [1922, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 0, 22]
		},
		gtime: -1512962744000
	},
	{
		sdate: [1300, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 15],
			Dow: 0,
			Diy: 366,
			Doy: 320,
			Dim: 30,
			Wiy: 53,
			Woy: [47, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1511839544000,
		gdate: [1922, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 1, 4]
		},
		gtime: -1511839544000
	},
	{
		sdate: [1300, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 29],
			Dow: 0,
			Diy: 366,
			Doy: 334,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1510629944000,
		gdate: [1922, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 1, 18]
		},
		gtime: -1510629944000
	},
	{
		sdate: [1300, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 10, 30],
			Dow: 1,
			Diy: 366,
			Doy: 335,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1510543544000,
		gdate: [1922, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 1, 19]
		},
		gtime: -1510543544000
	},
	{
		sdate: [1300, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 1],
			Dow: 2,
			Diy: 366,
			Doy: 336,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -1510457144000,
		gdate: [1922, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 1, 20]
		},
		gtime: -1510457144000
	},
	{
		sdate: [1300, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 2],
			Dow: 3,
			Diy: 366,
			Doy: 337,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -1510370744000,
		gdate: [1922, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 1, 21]
		},
		gtime: -1510370744000
	},
	{
		sdate: [1300, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 3],
			Dow: 4,
			Diy: 366,
			Doy: 338,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1300],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -1510284344000,
		gdate: [1922, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 1, 22]
		},
		gtime: -1510284344000
	},
	{
		sdate: [1300, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 4],
			Dow: 5,
			Diy: 366,
			Doy: 339,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1510197944000,
		gdate: [1922, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 1, 23]
		},
		gtime: -1510197944000
	},
	{
		sdate: [1300, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 15],
			Dow: 2,
			Diy: 366,
			Doy: 350,
			Dim: 30,
			Wiy: 53,
			Woy: [51, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1509247544000,
		gdate: [1922, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 6]
		},
		gtime: -1509247544000
	},
	{
		sdate: [1300, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 25],
			Dow: 5,
			Diy: 366,
			Doy: 360,
			Dim: 30,
			Wiy: 53,
			Woy: [52, 1300],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1508383544000,
		gdate: [1922, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 16]
		},
		gtime: -1508383544000
	},
	{
		sdate: [1300, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 26],
			Dow: 6,
			Diy: 366,
			Doy: 361,
			Dim: 30,
			Wiy: 53,
			Woy: [52, 1300],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1508297144000,
		gdate: [1922, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 17]
		},
		gtime: -1508297144000
	},
	{
		sdate: [1300, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 27],
			Dow: 0,
			Diy: 366,
			Doy: 362,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1300],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1508210744000,
		gdate: [1922, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 18]
		},
		gtime: -1508210744000
	},
	{
		sdate: [1300, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 28],
			Dow: 1,
			Diy: 366,
			Doy: 363,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1300],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1508124344000,
		gdate: [1922, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 19]
		},
		gtime: -1508124344000
	},
	{
		sdate: [1300, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 29],
			Dow: 2,
			Diy: 366,
			Doy: 364,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1300],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1508037944000,
		gdate: [1922, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 20]
		},
		gtime: -1508037944000
	},
	{
		sdate: [1300, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 30],
			Dow: 3,
			Diy: 366,
			Doy: 365,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1300],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -1507951544000,
		gdate: [1922, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 21]
		},
		gtime: -1507951544000
	},
	{
		sdate: [1320, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 1],
			Dow: 6,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1319],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -908335544000,
		gdate: [1941, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 21]
		},
		gtime: -908335544000
	},
	{
		sdate: [1320, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 2],
			Dow: 0,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -908249144000,
		gdate: [1941, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 22]
		},
		gtime: -908249144000
	},
	{
		sdate: [1320, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 3],
			Dow: 1,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -908162744000,
		gdate: [1941, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 23]
		},
		gtime: -908162744000
	},
	{
		sdate: [1320, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 4],
			Dow: 2,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -908076344000,
		gdate: [1941, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 24]
		},
		gtime: -908076344000
	},
	{
		sdate: [1320, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 5],
			Dow: 3,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -907989944000,
		gdate: [1941, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 25]
		},
		gtime: -907989944000
	},
	{
		sdate: [1320, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 6],
			Dow: 4,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -907903544000,
		gdate: [1941, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 26]
		},
		gtime: -907903544000
	},
	{
		sdate: [1320, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 7],
			Dow: 5,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -907817144000,
		gdate: [1941, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 27]
		},
		gtime: -907817144000
	},
	{
		sdate: [1320, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 15],
			Dow: 6,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -907125944000,
		gdate: [1941, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 3, 4]
		},
		gtime: -907125944000
	},
	{
		sdate: [1320, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 29],
			Dow: 6,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -905916344000,
		gdate: [1941, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 3, 18]
		},
		gtime: -905916344000
	},
	{
		sdate: [1320, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 30],
			Dow: 0,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -905829944000,
		gdate: [1941, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 3, 19]
		},
		gtime: -905829944000
	},
	{
		sdate: [1320, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 31],
			Dow: 1,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -905743544000,
		gdate: [1941, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 3, 20]
		},
		gtime: -905743544000
	},
	{
		sdate: [1320, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 1],
			Dow: 2,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -905657144000,
		gdate: [1941, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 3, 21]
		},
		gtime: -905657144000
	},
	{
		sdate: [1320, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 2],
			Dow: 3,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -905570744000,
		gdate: [1941, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 3, 22]
		},
		gtime: -905570744000
	},
	{
		sdate: [1320, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 15],
			Dow: 2,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -904447544000,
		gdate: [1941, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 4, 5]
		},
		gtime: -904447544000
	},
	{
		sdate: [1320, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 30],
			Dow: 3,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -903151544000,
		gdate: [1941, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 4, 20]
		},
		gtime: -903151544000
	},
	{
		sdate: [1320, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 1, 31],
			Dow: 4,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -903065144000,
		gdate: [1941, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 4, 21]
		},
		gtime: -903065144000
	},
	{
		sdate: [1320, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 1],
			Dow: 5,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -902978744000,
		gdate: [1941, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 4, 22]
		},
		gtime: -902978744000
	},
	{
		sdate: [1320, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 2],
			Dow: 6,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -902892344000,
		gdate: [1941, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 4, 23]
		},
		gtime: -902892344000
	},
	{
		sdate: [1320, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 15],
			Dow: 5,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -901769144000,
		gdate: [1941, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 5, 5]
		},
		gtime: -901769144000
	},
	{
		sdate: [1320, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 30],
			Dow: 6,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -900473144000,
		gdate: [1941, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 5, 20]
		},
		gtime: -900473144000
	},
	{
		sdate: [1320, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 2, 31],
			Dow: 0,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -900386744000,
		gdate: [1941, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 5, 21]
		},
		gtime: -900386744000
	},
	{
		sdate: [1320, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 1],
			Dow: 1,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -900300344000,
		gdate: [1941, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 5, 22]
		},
		gtime: -900300344000
	},
	{
		sdate: [1320, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 2],
			Dow: 2,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -900213944000,
		gdate: [1941, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 5, 23]
		},
		gtime: -900213944000
	},
	{
		sdate: [1320, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 15],
			Dow: 1,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -899090744000,
		gdate: [1941, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 6, 6]
		},
		gtime: -899090744000
	},
	{
		sdate: [1320, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 30],
			Dow: 2,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -897794744000,
		gdate: [1941, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 6, 21]
		},
		gtime: -897794744000
	},
	{
		sdate: [1320, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 3, 31],
			Dow: 3,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -897708344000,
		gdate: [1941, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 6, 22]
		},
		gtime: -897708344000
	},
	{
		sdate: [1320, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 1],
			Dow: 4,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -897621944000,
		gdate: [1941, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 6, 23]
		},
		gtime: -897621944000
	},
	{
		sdate: [1320, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 2],
			Dow: 5,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -897535544000,
		gdate: [1941, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 6, 24]
		},
		gtime: -897535544000
	},
	{
		sdate: [1320, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 15],
			Dow: 4,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -896412344000,
		gdate: [1941, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 7, 6]
		},
		gtime: -896412344000
	},
	{
		sdate: [1320, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 30],
			Dow: 5,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -895116344000,
		gdate: [1941, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 7, 21]
		},
		gtime: -895116344000
	},
	{
		sdate: [1320, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 4, 31],
			Dow: 6,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -895029944000,
		gdate: [1941, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 7, 22]
		},
		gtime: -895029944000
	},
	{
		sdate: [1320, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 1],
			Dow: 0,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -894943544000,
		gdate: [1941, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 7, 23]
		},
		gtime: -894943544000
	},
	{
		sdate: [1320, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 2],
			Dow: 1,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -894857144000,
		gdate: [1941, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 7, 24]
		},
		gtime: -894857144000
	},
	{
		sdate: [1320, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 15],
			Dow: 0,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -893733944000,
		gdate: [1941, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 8, 6]
		},
		gtime: -893733944000
	},
	{
		sdate: [1320, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 29],
			Dow: 0,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -892524344000,
		gdate: [1941, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 8, 20]
		},
		gtime: -892524344000
	},
	{
		sdate: [1320, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 5, 30],
			Dow: 1,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -892437944000,
		gdate: [1941, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 8, 21]
		},
		gtime: -892437944000
	},
	{
		sdate: [1320, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 1],
			Dow: 3,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -892265144000,
		gdate: [1941, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 8, 23]
		},
		gtime: -892265144000
	},
	{
		sdate: [1320, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 2],
			Dow: 4,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -892178744000,
		gdate: [1941, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 8, 24]
		},
		gtime: -892178744000
	},
	{
		sdate: [1320, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 15],
			Dow: 3,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -891055544000,
		gdate: [1941, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 9, 7]
		},
		gtime: -891055544000
	},
	{
		sdate: [1320, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 29],
			Dow: 3,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -889845944000,
		gdate: [1941, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 9, 21]
		},
		gtime: -889845944000
	},
	{
		sdate: [1320, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 6, 30],
			Dow: 4,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -889759544000,
		gdate: [1941, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 9, 22]
		},
		gtime: -889759544000
	},
	{
		sdate: [1320, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 1],
			Dow: 5,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -889673144000,
		gdate: [1941, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 9, 23]
		},
		gtime: -889673144000
	},
	{
		sdate: [1320, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 2],
			Dow: 6,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -889586744000,
		gdate: [1941, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 9, 24]
		},
		gtime: -889586744000
	},
	{
		sdate: [1320, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 15],
			Dow: 5,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -888463544000,
		gdate: [1941, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 10, 6]
		},
		gtime: -888463544000
	},
	{
		sdate: [1320, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 29],
			Dow: 5,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -887253944000,
		gdate: [1941, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 10, 20]
		},
		gtime: -887253944000
	},
	{
		sdate: [1320, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 7, 30],
			Dow: 6,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -887167544000,
		gdate: [1941, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 10, 21]
		},
		gtime: -887167544000
	},
	{
		sdate: [1320, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 1],
			Dow: 0,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -887081144000,
		gdate: [1941, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 10, 22]
		},
		gtime: -887081144000
	},
	{
		sdate: [1320, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 2],
			Dow: 1,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -886994744000,
		gdate: [1941, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 10, 23]
		},
		gtime: -886994744000
	},
	{
		sdate: [1320, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 15],
			Dow: 0,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -885871544000,
		gdate: [1941, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 11, 6]
		},
		gtime: -885871544000
	},
	{
		sdate: [1320, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 29],
			Dow: 0,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -884661944000,
		gdate: [1941, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 11, 20]
		},
		gtime: -884661944000
	},
	{
		sdate: [1320, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 8, 30],
			Dow: 1,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -884575544000,
		gdate: [1941, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 11, 21]
		},
		gtime: -884575544000
	},
	{
		sdate: [1320, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 1],
			Dow: 2,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -884489144000,
		gdate: [1941, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 11, 22]
		},
		gtime: -884489144000
	},
	{
		sdate: [1320, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 2],
			Dow: 3,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -884402744000,
		gdate: [1941, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 11, 23]
		},
		gtime: -884402744000
	},
	{
		sdate: [1320, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 15],
			Dow: 2,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -883279544000,
		gdate: [1942, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 0, 5]
		},
		gtime: -883279544000
	},
	{
		sdate: [1320, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 29],
			Dow: 2,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -882069944000,
		gdate: [1942, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 0, 19]
		},
		gtime: -882069944000
	},
	{
		sdate: [1320, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 9, 30],
			Dow: 3,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -881983544000,
		gdate: [1942, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 0, 20]
		},
		gtime: -881983544000
	},
	{
		sdate: [1320, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 1],
			Dow: 4,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -881897144000,
		gdate: [1942, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 0, 21]
		},
		gtime: -881897144000
	},
	{
		sdate: [1320, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 2],
			Dow: 5,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -881810744000,
		gdate: [1942, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 0, 22]
		},
		gtime: -881810744000
	},
	{
		sdate: [1320, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 15],
			Dow: 4,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -880687544000,
		gdate: [1942, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 1, 4]
		},
		gtime: -880687544000
	},
	{
		sdate: [1320, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 29],
			Dow: 4,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -879477944000,
		gdate: [1942, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 1, 18]
		},
		gtime: -879477944000
	},
	{
		sdate: [1320, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 10, 30],
			Dow: 5,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -879391544000,
		gdate: [1942, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 1, 19]
		},
		gtime: -879391544000
	},
	{
		sdate: [1320, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 1],
			Dow: 6,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -879305144000,
		gdate: [1942, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 1, 20]
		},
		gtime: -879305144000
	},
	{
		sdate: [1320, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 2],
			Dow: 0,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1320],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -879218744000,
		gdate: [1942, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 1, 21]
		},
		gtime: -879218744000
	},
	{
		sdate: [1320, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 3],
			Dow: 1,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1320],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -879132344000,
		gdate: [1942, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 1, 22]
		},
		gtime: -879132344000
	},
	{
		sdate: [1320, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 4],
			Dow: 2,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -879045944000,
		gdate: [1942, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 1, 23]
		},
		gtime: -879045944000
	},
	{
		sdate: [1320, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 15],
			Dow: 6,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -878095544000,
		gdate: [1942, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 6]
		},
		gtime: -878095544000
	},
	{
		sdate: [1320, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 25],
			Dow: 2,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1320],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -877231544000,
		gdate: [1942, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 16]
		},
		gtime: -877231544000
	},
	{
		sdate: [1320, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 26],
			Dow: 3,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1320],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -877145144000,
		gdate: [1942, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 17]
		},
		gtime: -877145144000
	},
	{
		sdate: [1320, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 27],
			Dow: 4,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1320],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -877058744000,
		gdate: [1942, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 18]
		},
		gtime: -877058744000
	},
	{
		sdate: [1320, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 28],
			Dow: 5,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1320],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -876972344000,
		gdate: [1942, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 19]
		},
		gtime: -876972344000
	},
	{
		sdate: [1320, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 29],
			Dow: 6,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1320],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -876885944000,
		gdate: [1942, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 20]
		},
		gtime: -876885944000
	},

	{
		sdate: [1340, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 1],
			Dow: 3,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -277183800000,
		gdate: [1961, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 21]
		},
		gtime: -277183800000
	},
	{
		sdate: [1340, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 2],
			Dow: 4,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -277097400000,
		gdate: [1961, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 22]
		},
		gtime: -277097400000
	},
	{
		sdate: [1340, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 3],
			Dow: 5,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: -277011000000,
		gdate: [1961, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 23]
		},
		gtime: -277011000000
	},
	{
		sdate: [1340, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 4],
			Dow: 6,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -276924600000,
		gdate: [1961, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 24]
		},
		gtime: -276924600000
	},
	{
		sdate: [1340, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 5],
			Dow: 0,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -276838200000,
		gdate: [1961, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 25]
		},
		gtime: -276838200000
	},
	{
		sdate: [1340, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 6],
			Dow: 1,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -276751800000,
		gdate: [1961, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 26]
		},
		gtime: -276751800000
	},
	{
		sdate: [1340, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 7],
			Dow: 2,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -276665400000,
		gdate: [1961, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 27]
		},
		gtime: -276665400000
	},
	{
		sdate: [1340, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 15],
			Dow: 3,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 53,
			Woy: [3, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -275974200000,
		gdate: [1961, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 3, 4]
		},
		gtime: -275974200000
	},
	{
		sdate: [1340, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 29],
			Dow: 3,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -274764600000,
		gdate: [1961, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 3, 18]
		},
		gtime: -274764600000
	},
	{
		sdate: [1340, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 30],
			Dow: 4,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -274678200000,
		gdate: [1961, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 3, 19]
		},
		gtime: -274678200000
	},
	{
		sdate: [1340, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 31],
			Dow: 5,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -274591800000,
		gdate: [1961, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 3, 20]
		},
		gtime: -274591800000
	},
	{
		sdate: [1340, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 1],
			Dow: 6,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -274505400000,
		gdate: [1961, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 3, 21]
		},
		gtime: -274505400000
	},
	{
		sdate: [1340, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 2],
			Dow: 0,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 53,
			Woy: [6, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -274419000000,
		gdate: [1961, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 3, 22]
		},
		gtime: -274419000000
	},
	{
		sdate: [1340, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 15],
			Dow: 6,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 53,
			Woy: [7, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -273295800000,
		gdate: [1961, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 4, 5]
		},
		gtime: -273295800000
	},
	{
		sdate: [1340, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 30],
			Dow: 0,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -271999800000,
		gdate: [1961, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 4, 20]
		},
		gtime: -271999800000
	},
	{
		sdate: [1340, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 1, 31],
			Dow: 1,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -271913400000,
		gdate: [1961, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 4, 21]
		},
		gtime: -271913400000
	},
	{
		sdate: [1340, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 1],
			Dow: 2,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: -271827000000,
		gdate: [1961, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 4, 22]
		},
		gtime: -271827000000
	},
	{
		sdate: [1340, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 2],
			Dow: 3,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: -271740600000,
		gdate: [1961, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 4, 23]
		},
		gtime: -271740600000
	},
	{
		sdate: [1340, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 15],
			Dow: 2,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 53,
			Woy: [12, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -270617400000,
		gdate: [1961, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 5, 5]
		},
		gtime: -270617400000
	},
	{
		sdate: [1340, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 30],
			Dow: 3,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: -269321400000,
		gdate: [1961, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 5, 20]
		},
		gtime: -269321400000
	},
	{
		sdate: [1340, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 2, 31],
			Dow: 4,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: -269235000000,
		gdate: [1961, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 5, 21]
		},
		gtime: -269235000000
	},
	{
		sdate: [1340, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 1],
			Dow: 5,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -269148600000,
		gdate: [1961, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 5, 22]
		},
		gtime: -269148600000
	},
	{
		sdate: [1340, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 2],
			Dow: 6,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -269062200000,
		gdate: [1961, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 5, 23]
		},
		gtime: -269062200000
	},
	{
		sdate: [1340, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 15],
			Dow: 5,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 53,
			Woy: [16, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -267939000000,
		gdate: [1961, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 6, 6]
		},
		gtime: -267939000000
	},
	{
		sdate: [1340, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 30],
			Dow: 6,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 53,
			Woy: [18, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -266643000000,
		gdate: [1961, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 6, 21]
		},
		gtime: -266643000000
	},
	{
		sdate: [1340, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 3, 31],
			Dow: 0,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -266556600000,
		gdate: [1961, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 6, 22]
		},
		gtime: -266556600000
	},
	{
		sdate: [1340, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 1],
			Dow: 1,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -266470200000,
		gdate: [1961, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 6, 23]
		},
		gtime: -266470200000
	},
	{
		sdate: [1340, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 2],
			Dow: 2,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -266383800000,
		gdate: [1961, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 6, 24]
		},
		gtime: -266383800000
	},
	{
		sdate: [1340, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 15],
			Dow: 1,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 53,
			Woy: [21, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -265260600000,
		gdate: [1961, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 7, 6]
		},
		gtime: -265260600000
	},
	{
		sdate: [1340, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 30],
			Dow: 2,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -263964600000,
		gdate: [1961, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 7, 21]
		},
		gtime: -263964600000
	},
	{
		sdate: [1340, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 4, 31],
			Dow: 3,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -263878200000,
		gdate: [1961, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 7, 22]
		},
		gtime: -263878200000
	},
	{
		sdate: [1340, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 1],
			Dow: 4,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: -263791800000,
		gdate: [1961, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 7, 23]
		},
		gtime: -263791800000
	},
	{
		sdate: [1340, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 2],
			Dow: 5,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: -263705400000,
		gdate: [1961, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 7, 24]
		},
		gtime: -263705400000
	},
	{
		sdate: [1340, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 15],
			Dow: 4,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 53,
			Woy: [25, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -262582200000,
		gdate: [1961, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 8, 6]
		},
		gtime: -262582200000
	},
	{
		sdate: [1340, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 29],
			Dow: 4,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -261372600000,
		gdate: [1961, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 8, 20]
		},
		gtime: -261372600000
	},
	{
		sdate: [1340, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 5, 30],
			Dow: 5,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: -261286200000,
		gdate: [1961, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 8, 21]
		},
		gtime: -261286200000
	},
	{
		sdate: [1340, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 1],
			Dow: 0,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 53,
			Woy: [28, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -261113400000,
		gdate: [1961, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 8, 23]
		},
		gtime: -261113400000
	},
	{
		sdate: [1340, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 2],
			Dow: 1,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 53,
			Woy: [28, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -261027000000,
		gdate: [1961, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 8, 24]
		},
		gtime: -261027000000
	},
	{
		sdate: [1340, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 15],
			Dow: 0,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 53,
			Woy: [30, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -259903800000,
		gdate: [1961, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 9, 7]
		},
		gtime: -259903800000
	},
	{
		sdate: [1340, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 29],
			Dow: 0,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -258694200000,
		gdate: [1961, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 9, 21]
		},
		gtime: -258694200000
	},
	{
		sdate: [1340, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 6, 30],
			Dow: 1,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -258607800000,
		gdate: [1961, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 9, 22]
		},
		gtime: -258607800000
	},
	{
		sdate: [1340, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 1],
			Dow: 2,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -258521400000,
		gdate: [1961, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 9, 23]
		},
		gtime: -258521400000
	},
	{
		sdate: [1340, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 2],
			Dow: 3,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -258435000000,
		gdate: [1961, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 9, 24]
		},
		gtime: -258435000000
	},
	{
		sdate: [1340, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 15],
			Dow: 2,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 53,
			Woy: [34, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -257311800000,
		gdate: [1961, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 10, 6]
		},
		gtime: -257311800000
	},
	{
		sdate: [1340, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 29],
			Dow: 2,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -256102200000,
		gdate: [1961, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 10, 20]
		},
		gtime: -256102200000
	},
	{
		sdate: [1340, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 7, 30],
			Dow: 3,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -256015800000,
		gdate: [1961, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 10, 21]
		},
		gtime: -256015800000
	},
	{
		sdate: [1340, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 1],
			Dow: 4,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: -255929400000,
		gdate: [1961, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 10, 22]
		},
		gtime: -255929400000
	},
	{
		sdate: [1340, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 2],
			Dow: 5,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: -255843000000,
		gdate: [1961, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 10, 23]
		},
		gtime: -255843000000
	},
	{
		sdate: [1340, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 15],
			Dow: 4,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 53,
			Woy: [38, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -254719800000,
		gdate: [1961, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 11, 6]
		},
		gtime: -254719800000
	},
	{
		sdate: [1340, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 29],
			Dow: 4,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: -253510200000,
		gdate: [1961, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 11, 20]
		},
		gtime: -253510200000
	},
	{
		sdate: [1340, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 8, 30],
			Dow: 5,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: -253423800000,
		gdate: [1961, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 11, 21]
		},
		gtime: -253423800000
	},
	{
		sdate: [1340, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 1],
			Dow: 6,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -253337400000,
		gdate: [1961, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 11, 22]
		},
		gtime: -253337400000
	},
	{
		sdate: [1340, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 2],
			Dow: 0,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 53,
			Woy: [41, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -253251000000,
		gdate: [1961, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 11, 23]
		},
		gtime: -253251000000
	},
	{
		sdate: [1340, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 15],
			Dow: 6,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 53,
			Woy: [42, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -252127800000,
		gdate: [1962, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 0, 5]
		},
		gtime: -252127800000
	},
	{
		sdate: [1340, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 29],
			Dow: 6,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 53,
			Woy: [44, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -250918200000,
		gdate: [1962, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 0, 19]
		},
		gtime: -250918200000
	},
	{
		sdate: [1340, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 9, 30],
			Dow: 0,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -250831800000,
		gdate: [1962, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 0, 20]
		},
		gtime: -250831800000
	},
	{
		sdate: [1340, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 1],
			Dow: 1,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -250745400000,
		gdate: [1962, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 0, 21]
		},
		gtime: -250745400000
	},
	{
		sdate: [1340, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 2],
			Dow: 2,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -250659000000,
		gdate: [1962, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 0, 22]
		},
		gtime: -250659000000
	},
	{
		sdate: [1340, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 15],
			Dow: 1,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 53,
			Woy: [47, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -249535800000,
		gdate: [1962, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 1, 4]
		},
		gtime: -249535800000
	},
	{
		sdate: [1340, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 29],
			Dow: 1,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -248326200000,
		gdate: [1962, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 1, 18]
		},
		gtime: -248326200000
	},
	{
		sdate: [1340, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 10, 30],
			Dow: 2,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -248239800000,
		gdate: [1962, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 1, 19]
		},
		gtime: -248239800000
	},
	{
		sdate: [1340, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 1],
			Dow: 3,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: -248153400000,
		gdate: [1962, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 1, 20]
		},
		gtime: -248153400000
	},
	{
		sdate: [1340, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 2],
			Dow: 4,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1340],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: -248067000000,
		gdate: [1962, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 1, 21]
		},
		gtime: -248067000000
	},
	{
		sdate: [1340, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 3],
			Dow: 5,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1340],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: -247980600000,
		gdate: [1962, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 1, 22]
		},
		gtime: -247980600000
	},
	{
		sdate: [1340, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 4],
			Dow: 6,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -247894200000,
		gdate: [1962, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 1, 23]
		},
		gtime: -247894200000
	},
	{
		sdate: [1340, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 15],
			Dow: 3,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 53,
			Woy: [51, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -246943800000,
		gdate: [1962, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 6]
		},
		gtime: -246943800000
	},
	{
		sdate: [1340, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 25],
			Dow: 6,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 53,
			Woy: [52, 1340],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -246079800000,
		gdate: [1962, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 16]
		},
		gtime: -246079800000
	},
	{
		sdate: [1340, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 26],
			Dow: 0,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1340],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -245993400000,
		gdate: [1962, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 17]
		},
		gtime: -245993400000
	},
	{
		sdate: [1340, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 27],
			Dow: 1,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1340],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -245907000000,
		gdate: [1962, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 18]
		},
		gtime: -245907000000
	},
	{
		sdate: [1340, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 28],
			Dow: 2,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1340],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -245820600000,
		gdate: [1962, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 19]
		},
		gtime: -245820600000
	},
	{
		sdate: [1340, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 29],
			Dow: 3,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1340],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: -245734200000,
		gdate: [1962, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 20]
		},
		gtime: -245734200000
	},

	{
		sdate: [1360, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 1],
			Dow: 0,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 353968200000,
		gdate: [1981, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 21]
		},
		gtime: 353968200000
	},
	{
		sdate: [1360, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 2],
			Dow: 1,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 354054600000,
		gdate: [1981, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 22]
		},
		gtime: 354054600000
	},
	{
		sdate: [1360, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 3],
			Dow: 2,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 354141000000,
		gdate: [1981, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 23]
		},
		gtime: 354141000000
	},
	{
		sdate: [1360, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 4],
			Dow: 3,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 354227400000,
		gdate: [1981, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 24]
		},
		gtime: 354227400000
	},
	{
		sdate: [1360, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 5],
			Dow: 4,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 354313800000,
		gdate: [1981, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 25]
		},
		gtime: 354313800000
	},
	{
		sdate: [1360, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 6],
			Dow: 5,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 354400200000,
		gdate: [1981, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 26]
		},
		gtime: 354400200000
	},
	{
		sdate: [1360, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 7],
			Dow: 6,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 354486600000,
		gdate: [1981, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 27]
		},
		gtime: 354486600000
	},
	{
		sdate: [1360, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 15],
			Dow: 0,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 355177800000,
		gdate: [1981, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 3, 4]
		},
		gtime: 355177800000
	},
	{
		sdate: [1360, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 29],
			Dow: 0,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 356387400000,
		gdate: [1981, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 3, 18]
		},
		gtime: 356387400000
	},
	{
		sdate: [1360, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 30],
			Dow: 1,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 356473800000,
		gdate: [1981, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 3, 19]
		},
		gtime: 356473800000
	},
	{
		sdate: [1360, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 31],
			Dow: 2,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 356560200000,
		gdate: [1981, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 3, 20]
		},
		gtime: 356560200000
	},
	{
		sdate: [1360, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 1],
			Dow: 3,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 356646600000,
		gdate: [1981, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 3, 21]
		},
		gtime: 356646600000
	},
	{
		sdate: [1360, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 2],
			Dow: 4,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 356733000000,
		gdate: [1981, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 3, 22]
		},
		gtime: 356733000000
	},
	{
		sdate: [1360, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 15],
			Dow: 3,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 357856200000,
		gdate: [1981, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 4, 5]
		},
		gtime: 357856200000
	},
	{
		sdate: [1360, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 30],
			Dow: 4,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 359152200000,
		gdate: [1981, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 4, 20]
		},
		gtime: 359152200000
	},
	{
		sdate: [1360, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 1, 31],
			Dow: 5,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 359238600000,
		gdate: [1981, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 4, 21]
		},
		gtime: 359238600000
	},
	{
		sdate: [1360, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 1],
			Dow: 6,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 359325000000,
		gdate: [1981, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 4, 22]
		},
		gtime: 359325000000
	},
	{
		sdate: [1360, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 2],
			Dow: 0,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 359411400000,
		gdate: [1981, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 4, 23]
		},
		gtime: 359411400000
	},
	{
		sdate: [1360, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 15],
			Dow: 6,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 360534600000,
		gdate: [1981, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 5, 5]
		},
		gtime: 360534600000
	},
	{
		sdate: [1360, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 30],
			Dow: 0,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 361830600000,
		gdate: [1981, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 5, 20]
		},
		gtime: 361830600000
	},
	{
		sdate: [1360, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 2, 31],
			Dow: 1,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 361917000000,
		gdate: [1981, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 5, 21]
		},
		gtime: 361917000000
	},
	{
		sdate: [1360, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 1],
			Dow: 2,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 362003400000,
		gdate: [1981, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 5, 22]
		},
		gtime: 362003400000
	},
	{
		sdate: [1360, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 2],
			Dow: 3,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 362089800000,
		gdate: [1981, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 5, 23]
		},
		gtime: 362089800000
	},
	{
		sdate: [1360, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 15],
			Dow: 2,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 363213000000,
		gdate: [1981, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 6, 6]
		},
		gtime: 363213000000
	},
	{
		sdate: [1360, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 30],
			Dow: 3,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 364509000000,
		gdate: [1981, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 6, 21]
		},
		gtime: 364509000000
	},
	{
		sdate: [1360, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 3, 31],
			Dow: 4,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 364595400000,
		gdate: [1981, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 6, 22]
		},
		gtime: 364595400000
	},
	{
		sdate: [1360, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 1],
			Dow: 5,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 364681800000,
		gdate: [1981, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 6, 23]
		},
		gtime: 364681800000
	},
	{
		sdate: [1360, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 2],
			Dow: 6,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 364768200000,
		gdate: [1981, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 6, 24]
		},
		gtime: 364768200000
	},
	{
		sdate: [1360, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 15],
			Dow: 5,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 365891400000,
		gdate: [1981, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 7, 6]
		},
		gtime: 365891400000
	},
	{
		sdate: [1360, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 30],
			Dow: 6,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 367187400000,
		gdate: [1981, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 7, 21]
		},
		gtime: 367187400000
	},
	{
		sdate: [1360, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 4, 31],
			Dow: 0,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 367273800000,
		gdate: [1981, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 7, 22]
		},
		gtime: 367273800000
	},
	{
		sdate: [1360, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 1],
			Dow: 1,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 367360200000,
		gdate: [1981, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 7, 23]
		},
		gtime: 367360200000
	},
	{
		sdate: [1360, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 2],
			Dow: 2,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 367446600000,
		gdate: [1981, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 7, 24]
		},
		gtime: 367446600000
	},
	{
		sdate: [1360, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 15],
			Dow: 1,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 368569800000,
		gdate: [1981, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 8, 6]
		},
		gtime: 368569800000
	},
	{
		sdate: [1360, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 29],
			Dow: 1,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 369779400000,
		gdate: [1981, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 8, 20]
		},
		gtime: 369779400000
	},
	{
		sdate: [1360, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 5, 30],
			Dow: 2,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 369865800000,
		gdate: [1981, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 8, 21]
		},
		gtime: 369865800000
	},
	{
		sdate: [1360, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 1],
			Dow: 4,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 370038600000,
		gdate: [1981, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 8, 23]
		},
		gtime: 370038600000
	},
	{
		sdate: [1360, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 2],
			Dow: 5,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 370125000000,
		gdate: [1981, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 8, 24]
		},
		gtime: 370125000000
	},
	{
		sdate: [1360, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 15],
			Dow: 4,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 371248200000,
		gdate: [1981, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 9, 7]
		},
		gtime: 371248200000
	},
	{
		sdate: [1360, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 29],
			Dow: 4,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 372457800000,
		gdate: [1981, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 9, 21]
		},
		gtime: 372457800000
	},
	{
		sdate: [1360, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 6, 30],
			Dow: 5,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 372544200000,
		gdate: [1981, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 9, 22]
		},
		gtime: 372544200000
	},
	{
		sdate: [1360, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 1],
			Dow: 6,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 372630600000,
		gdate: [1981, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 9, 23]
		},
		gtime: 372630600000
	},
	{
		sdate: [1360, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 2],
			Dow: 0,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 372717000000,
		gdate: [1981, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 9, 24]
		},
		gtime: 372717000000
	},
	{
		sdate: [1360, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 15],
			Dow: 6,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 373840200000,
		gdate: [1981, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 10, 6]
		},
		gtime: 373840200000
	},
	{
		sdate: [1360, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 29],
			Dow: 6,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 375049800000,
		gdate: [1981, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 10, 20]
		},
		gtime: 375049800000
	},
	{
		sdate: [1360, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 7, 30],
			Dow: 0,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 375136200000,
		gdate: [1981, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 10, 21]
		},
		gtime: 375136200000
	},
	{
		sdate: [1360, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 1],
			Dow: 1,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 375222600000,
		gdate: [1981, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 10, 22]
		},
		gtime: 375222600000
	},
	{
		sdate: [1360, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 2],
			Dow: 2,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 375309000000,
		gdate: [1981, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 10, 23]
		},
		gtime: 375309000000
	},
	{
		sdate: [1360, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 15],
			Dow: 1,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 376432200000,
		gdate: [1981, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 11, 6]
		},
		gtime: 376432200000
	},
	{
		sdate: [1360, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 29],
			Dow: 1,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 377641800000,
		gdate: [1981, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 11, 20]
		},
		gtime: 377641800000
	},
	{
		sdate: [1360, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 8, 30],
			Dow: 2,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 377728200000,
		gdate: [1981, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 11, 21]
		},
		gtime: 377728200000
	},
	{
		sdate: [1360, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 1],
			Dow: 3,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 377814600000,
		gdate: [1981, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 11, 22]
		},
		gtime: 377814600000
	},
	{
		sdate: [1360, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 2],
			Dow: 4,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 377901000000,
		gdate: [1981, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 11, 23]
		},
		gtime: 377901000000
	},
	{
		sdate: [1360, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 15],
			Dow: 3,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 379024200000,
		gdate: [1982, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 0, 5]
		},
		gtime: 379024200000
	},
	{
		sdate: [1360, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 29],
			Dow: 3,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 380233800000,
		gdate: [1982, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 0, 19]
		},
		gtime: 380233800000
	},
	{
		sdate: [1360, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 9, 30],
			Dow: 4,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 380320200000,
		gdate: [1982, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 0, 20]
		},
		gtime: 380320200000
	},
	{
		sdate: [1360, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 1],
			Dow: 5,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 380406600000,
		gdate: [1982, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 0, 21]
		},
		gtime: 380406600000
	},
	{
		sdate: [1360, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 2],
			Dow: 6,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 380493000000,
		gdate: [1982, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 0, 22]
		},
		gtime: 380493000000
	},
	{
		sdate: [1360, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 15],
			Dow: 5,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 381616200000,
		gdate: [1982, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 1, 4]
		},
		gtime: 381616200000
	},
	{
		sdate: [1360, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 29],
			Dow: 5,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 382825800000,
		gdate: [1982, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 1, 18]
		},
		gtime: 382825800000
	},
	{
		sdate: [1360, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 10, 30],
			Dow: 6,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 382912200000,
		gdate: [1982, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 1, 19]
		},
		gtime: 382912200000
	},
	{
		sdate: [1360, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 1],
			Dow: 0,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 382998600000,
		gdate: [1982, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 1, 20]
		},
		gtime: 382998600000
	},
	{
		sdate: [1360, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 2],
			Dow: 1,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1360],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 383085000000,
		gdate: [1982, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 1, 21]
		},
		gtime: 383085000000
	},
	{
		sdate: [1360, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 3],
			Dow: 2,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1360],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 383171400000,
		gdate: [1982, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 1, 22]
		},
		gtime: 383171400000
	},
	{
		sdate: [1360, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 4],
			Dow: 3,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 383257800000,
		gdate: [1982, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 1, 23]
		},
		gtime: 383257800000
	},
	{
		sdate: [1360, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 15],
			Dow: 0,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1360],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 384208200000,
		gdate: [1982, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 6]
		},
		gtime: 384208200000
	},
	{
		sdate: [1360, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 25],
			Dow: 3,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1360],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 385072200000,
		gdate: [1982, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 16]
		},
		gtime: 385072200000
	},
	{
		sdate: [1360, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 26],
			Dow: 4,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1360],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 385158600000,
		gdate: [1982, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 17]
		},
		gtime: 385158600000
	},
	{
		sdate: [1360, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 27],
			Dow: 5,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1360],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 385245000000,
		gdate: [1982, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 18]
		},
		gtime: 385245000000
	},
	{
		sdate: [1360, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 28],
			Dow: 6,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1360],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 385331400000,
		gdate: [1982, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 19]
		},
		gtime: 385331400000
	},
	{
		sdate: [1360, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 29],
			Dow: 0,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1361],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 385417800000,
		gdate: [1982, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 20]
		},
		gtime: 385417800000
	},

	{
		sdate: [1380, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 1],
			Dow: 4,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1379],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 985120200000,
		gdate: [2001, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 21]
		},
		gtime: 985120200000
	},
	{
		sdate: [1380, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 2],
			Dow: 5,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1379],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 985206600000,
		gdate: [2001, 3, 22, 1, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 22]
		},
		gtime: 985206600000
	},
	{
		sdate: [1380, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 3],
			Dow: 6,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1379],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 985289400000,
		gdate: [2001, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 23]
		},
		gtime: 985289400000
	},
	{
		sdate: [1380, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 4],
			Dow: 0,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 985375800000,
		gdate: [2001, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 24]
		},
		gtime: 985375800000
	},
	{
		sdate: [1380, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 5],
			Dow: 1,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 985462200000,
		gdate: [2001, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 25]
		},
		gtime: 985462200000
	},
	{
		sdate: [1380, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 6],
			Dow: 2,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 985548600000,
		gdate: [2001, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 26]
		},
		gtime: 985548600000
	},
	{
		sdate: [1380, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 7],
			Dow: 3,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 985635000000,
		gdate: [2001, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 27]
		},
		gtime: 985635000000
	},
	{
		sdate: [1380, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 15],
			Dow: 4,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 986326200000,
		gdate: [2001, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 3, 4]
		},
		gtime: 986326200000
	},
	{
		sdate: [1380, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 29],
			Dow: 4,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 987535800000,
		gdate: [2001, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 3, 18]
		},
		gtime: 987535800000
	},
	{
		sdate: [1380, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 30],
			Dow: 5,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 987622200000,
		gdate: [2001, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 3, 19]
		},
		gtime: 987622200000
	},
	{
		sdate: [1380, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 31],
			Dow: 6,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 987708600000,
		gdate: [2001, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 3, 20]
		},
		gtime: 987708600000
	},
	{
		sdate: [1380, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 1],
			Dow: 0,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 987795000000,
		gdate: [2001, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 3, 21]
		},
		gtime: 987795000000
	},
	{
		sdate: [1380, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 2],
			Dow: 1,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 987881400000,
		gdate: [2001, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 3, 22]
		},
		gtime: 987881400000
	},
	{
		sdate: [1380, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 15],
			Dow: 0,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 989004600000,
		gdate: [2001, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 4, 5]
		},
		gtime: 989004600000
	},
	{
		sdate: [1380, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 30],
			Dow: 1,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 990300600000,
		gdate: [2001, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 4, 20]
		},
		gtime: 990300600000
	},
	{
		sdate: [1380, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 1, 31],
			Dow: 2,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 990387000000,
		gdate: [2001, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 4, 21]
		},
		gtime: 990387000000
	},
	{
		sdate: [1380, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 1],
			Dow: 3,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 990473400000,
		gdate: [2001, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 4, 22]
		},
		gtime: 990473400000
	},
	{
		sdate: [1380, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 2],
			Dow: 4,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 990559800000,
		gdate: [2001, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 4, 23]
		},
		gtime: 990559800000
	},
	{
		sdate: [1380, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 15],
			Dow: 3,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 991683000000,
		gdate: [2001, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 5, 5]
		},
		gtime: 991683000000
	},
	{
		sdate: [1380, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 30],
			Dow: 4,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 992979000000,
		gdate: [2001, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 5, 20]
		},
		gtime: 992979000000
	},
	{
		sdate: [1380, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 2, 31],
			Dow: 5,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 993065400000,
		gdate: [2001, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 5, 21]
		},
		gtime: 993065400000
	},
	{
		sdate: [1380, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 1],
			Dow: 6,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 993151800000,
		gdate: [2001, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 5, 22]
		},
		gtime: 993151800000
	},
	{
		sdate: [1380, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 2],
			Dow: 0,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 993238200000,
		gdate: [2001, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 5, 23]
		},
		gtime: 993238200000
	},
	{
		sdate: [1380, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 15],
			Dow: 6,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [15, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 994361400000,
		gdate: [2001, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 6, 6]
		},
		gtime: 994361400000
	},
	{
		sdate: [1380, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 30],
			Dow: 0,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 995657400000,
		gdate: [2001, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 6, 21]
		},
		gtime: 995657400000
	},
	{
		sdate: [1380, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 3, 31],
			Dow: 1,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 995743800000,
		gdate: [2001, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 6, 22]
		},
		gtime: 995743800000
	},
	{
		sdate: [1380, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 1],
			Dow: 2,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 995830200000,
		gdate: [2001, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 6, 23]
		},
		gtime: 995830200000
	},
	{
		sdate: [1380, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 2],
			Dow: 3,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 995916600000,
		gdate: [2001, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 6, 24]
		},
		gtime: 995916600000
	},
	{
		sdate: [1380, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 15],
			Dow: 2,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 997039800000,
		gdate: [2001, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 7, 6]
		},
		gtime: 997039800000
	},
	{
		sdate: [1380, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 30],
			Dow: 3,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 998335800000,
		gdate: [2001, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 7, 21]
		},
		gtime: 998335800000
	},
	{
		sdate: [1380, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 4, 31],
			Dow: 4,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 998422200000,
		gdate: [2001, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 7, 22]
		},
		gtime: 998422200000
	},
	{
		sdate: [1380, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 1],
			Dow: 5,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 998508600000,
		gdate: [2001, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 7, 23]
		},
		gtime: 998508600000
	},
	{
		sdate: [1380, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 2],
			Dow: 6,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 998595000000,
		gdate: [2001, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 7, 24]
		},
		gtime: 998595000000
	},
	{
		sdate: [1380, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 15],
			Dow: 5,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 999718200000,
		gdate: [2001, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 8, 6]
		},
		gtime: 999718200000
	},
	{
		sdate: [1380, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 29],
			Dow: 5,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1000927800000,
		gdate: [2001, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 8, 20]
		},
		gtime: 1000927800000
	},
	{
		sdate: [1380, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 5, 30],
			Dow: 6,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1001014200000,
		gdate: [2001, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 8, 21]
		},
		gtime: 1001014200000
	},
	{
		sdate: [1380, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 1],
			Dow: 1,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 1001190600000,
		gdate: [2001, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 8, 23]
		},
		gtime: 1001190600000
	},
	{
		sdate: [1380, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 2],
			Dow: 2,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 1001277000000,
		gdate: [2001, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 8, 24]
		},
		gtime: 1001277000000
	},
	{
		sdate: [1380, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 15],
			Dow: 1,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1002400200000,
		gdate: [2001, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 9, 7]
		},
		gtime: 1002400200000
	},
	{
		sdate: [1380, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 29],
			Dow: 1,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1003609800000,
		gdate: [2001, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 9, 21]
		},
		gtime: 1003609800000
	},
	{
		sdate: [1380, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 6, 30],
			Dow: 2,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1003696200000,
		gdate: [2001, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 9, 22]
		},
		gtime: 1003696200000
	},
	{
		sdate: [1380, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 1],
			Dow: 3,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 1003782600000,
		gdate: [2001, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 9, 23]
		},
		gtime: 1003782600000
	},
	{
		sdate: [1380, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 2],
			Dow: 4,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 1003869000000,
		gdate: [2001, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 9, 24]
		},
		gtime: 1003869000000
	},
	{
		sdate: [1380, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 15],
			Dow: 3,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1004992200000,
		gdate: [2001, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 10, 6]
		},
		gtime: 1004992200000
	},
	{
		sdate: [1380, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 29],
			Dow: 3,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1006201800000,
		gdate: [2001, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 10, 20]
		},
		gtime: 1006201800000
	},
	{
		sdate: [1380, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 7, 30],
			Dow: 4,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1006288200000,
		gdate: [2001, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 10, 21]
		},
		gtime: 1006288200000
	},
	{
		sdate: [1380, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 1],
			Dow: 5,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 1006374600000,
		gdate: [2001, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 10, 22]
		},
		gtime: 1006374600000
	},
	{
		sdate: [1380, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 2],
			Dow: 6,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 1006461000000,
		gdate: [2001, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 10, 23]
		},
		gtime: 1006461000000
	},
	{
		sdate: [1380, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 15],
			Dow: 5,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1007584200000,
		gdate: [2001, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 11, 6]
		},
		gtime: 1007584200000
	},
	{
		sdate: [1380, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 29],
			Dow: 5,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1008793800000,
		gdate: [2001, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 11, 20]
		},
		gtime: 1008793800000
	},
	{
		sdate: [1380, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 8, 30],
			Dow: 6,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 1008880200000,
		gdate: [2001, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 11, 21]
		},
		gtime: 1008880200000
	},
	{
		sdate: [1380, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 1],
			Dow: 0,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 1008966600000,
		gdate: [2001, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 11, 22]
		},
		gtime: 1008966600000
	},
	{
		sdate: [1380, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 2],
			Dow: 1,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 1009053000000,
		gdate: [2001, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 11, 23]
		},
		gtime: 1009053000000
	},
	{
		sdate: [1380, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 15],
			Dow: 0,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1010176200000,
		gdate: [2002, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 0, 5]
		},
		gtime: 1010176200000
	},
	{
		sdate: [1380, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 29],
			Dow: 0,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1011385800000,
		gdate: [2002, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 0, 19]
		},
		gtime: 1011385800000
	},
	{
		sdate: [1380, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 9, 30],
			Dow: 1,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1011472200000,
		gdate: [2002, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 0, 20]
		},
		gtime: 1011472200000
	},
	{
		sdate: [1380, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 1],
			Dow: 2,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 1011558600000,
		gdate: [2002, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 0, 21]
		},
		gtime: 1011558600000
	},
	{
		sdate: [1380, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 2],
			Dow: 3,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 1011645000000,
		gdate: [2002, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 0, 22]
		},
		gtime: 1011645000000
	},
	{
		sdate: [1380, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 15],
			Dow: 2,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1012768200000,
		gdate: [2002, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 1, 4]
		},
		gtime: 1012768200000
	},
	{
		sdate: [1380, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 29],
			Dow: 2,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1013977800000,
		gdate: [2002, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 1, 18]
		},
		gtime: 1013977800000
	},
	{
		sdate: [1380, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 10, 30],
			Dow: 3,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1014064200000,
		gdate: [2002, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 1, 19]
		},
		gtime: 1014064200000
	},
	{
		sdate: [1380, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 1],
			Dow: 4,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 1014150600000,
		gdate: [2002, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 1, 20]
		},
		gtime: 1014150600000
	},
	{
		sdate: [1380, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 2],
			Dow: 5,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1380],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 1014237000000,
		gdate: [2002, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 1, 21]
		},
		gtime: 1014237000000
	},
	{
		sdate: [1380, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 3],
			Dow: 6,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1380],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 1014323400000,
		gdate: [2002, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 1, 22]
		},
		gtime: 1014323400000
	},
	{
		sdate: [1380, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 4],
			Dow: 0,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1014409800000,
		gdate: [2002, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 1, 23]
		},
		gtime: 1014409800000
	},
	{
		sdate: [1380, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 15],
			Dow: 4,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1015360200000,
		gdate: [2002, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 6]
		},
		gtime: 1015360200000
	},
	{
		sdate: [1380, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 25],
			Dow: 0,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1380],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1016224200000,
		gdate: [2002, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 16]
		},
		gtime: 1016224200000
	},
	{
		sdate: [1380, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 26],
			Dow: 1,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1380],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1016310600000,
		gdate: [2002, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 17]
		},
		gtime: 1016310600000
	},
	{
		sdate: [1380, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 27],
			Dow: 2,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1380],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1016397000000,
		gdate: [2002, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 18]
		},
		gtime: 1016397000000
	},
	{
		sdate: [1380, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 28],
			Dow: 3,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1380],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1016483400000,
		gdate: [2002, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 19]
		},
		gtime: 1016483400000
	},
	{
		sdate: [1380, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 29],
			Dow: 4,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1380],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1016569800000,
		gdate: [2002, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 20]
		},
		gtime: 1016569800000
	},

	{
		sdate: [1400, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 1],
			Dow: 1,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 1616272200000,
		gdate: [2021, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 21]
		},
		gtime: 1616272200000
	},
	{
		sdate: [1400, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 2],
			Dow: 2,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 1616358600000,
		gdate: [2021, 3, 22, 1, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 22]
		},
		gtime: 1616358600000
	},
	{
		sdate: [1400, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 3],
			Dow: 3,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 1616441400000,
		gdate: [2021, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 23]
		},
		gtime: 1616441400000
	},
	{
		sdate: [1400, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 4],
			Dow: 4,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1616527800000,
		gdate: [2021, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 24]
		},
		gtime: 1616527800000
	},
	{
		sdate: [1400, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 5],
			Dow: 5,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1616614200000,
		gdate: [2021, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 25]
		},
		gtime: 1616614200000
	},
	{
		sdate: [1400, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 6],
			Dow: 6,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1616700600000,
		gdate: [2021, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 26]
		},
		gtime: 1616700600000
	},
	{
		sdate: [1400, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 7],
			Dow: 0,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1616787000000,
		gdate: [2021, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 27]
		},
		gtime: 1616787000000
	},
	{
		sdate: [1400, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 15],
			Dow: 1,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1617478200000,
		gdate: [2021, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 3, 4]
		},
		gtime: 1617478200000
	},
	{
		sdate: [1400, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 29],
			Dow: 1,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1618687800000,
		gdate: [2021, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 3, 18]
		},
		gtime: 1618687800000
	},
	{
		sdate: [1400, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 30],
			Dow: 2,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1618774200000,
		gdate: [2021, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 3, 19]
		},
		gtime: 1618774200000
	},
	{
		sdate: [1400, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 31],
			Dow: 3,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 1618860600000,
		gdate: [2021, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 3, 20]
		},
		gtime: 1618860600000
	},
	{
		sdate: [1400, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 1],
			Dow: 4,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 1618947000000,
		gdate: [2021, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 3, 21]
		},
		gtime: 1618947000000
	},
	{
		sdate: [1400, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 2],
			Dow: 5,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 1619033400000,
		gdate: [2021, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 3, 22]
		},
		gtime: 1619033400000
	},
	{
		sdate: [1400, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 15],
			Dow: 4,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1620156600000,
		gdate: [2021, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 4, 5]
		},
		gtime: 1620156600000
	},
	{
		sdate: [1400, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 30],
			Dow: 5,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1621452600000,
		gdate: [2021, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 4, 20]
		},
		gtime: 1621452600000
	},
	{
		sdate: [1400, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 1, 31],
			Dow: 6,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 1621539000000,
		gdate: [2021, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 4, 21]
		},
		gtime: 1621539000000
	},
	{
		sdate: [1400, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 1],
			Dow: 0,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 1621625400000,
		gdate: [2021, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 4, 22]
		},
		gtime: 1621625400000
	},
	{
		sdate: [1400, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 2],
			Dow: 1,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 1621711800000,
		gdate: [2021, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 4, 23]
		},
		gtime: 1621711800000
	},
	{
		sdate: [1400, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 15],
			Dow: 0,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1622835000000,
		gdate: [2021, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 5, 5]
		},
		gtime: 1622835000000
	},
	{
		sdate: [1400, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 30],
			Dow: 1,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 1624131000000,
		gdate: [2021, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 5, 20]
		},
		gtime: 1624131000000
	},
	{
		sdate: [1400, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 2, 31],
			Dow: 2,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 1624217400000,
		gdate: [2021, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 5, 21]
		},
		gtime: 1624217400000
	},
	{
		sdate: [1400, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 1],
			Dow: 3,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 1624303800000,
		gdate: [2021, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 5, 22]
		},
		gtime: 1624303800000
	},
	{
		sdate: [1400, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 2],
			Dow: 4,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 1624390200000,
		gdate: [2021, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 5, 23]
		},
		gtime: 1624390200000
	},
	{
		sdate: [1400, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 15],
			Dow: 3,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1625513400000,
		gdate: [2021, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 6, 6]
		},
		gtime: 1625513400000
	},
	{
		sdate: [1400, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 30],
			Dow: 4,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1626809400000,
		gdate: [2021, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 6, 21]
		},
		gtime: 1626809400000
	},
	{
		sdate: [1400, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 3, 31],
			Dow: 5,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 1626895800000,
		gdate: [2021, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 6, 22]
		},
		gtime: 1626895800000
	},
	{
		sdate: [1400, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 1],
			Dow: 6,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 1626982200000,
		gdate: [2021, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 6, 23]
		},
		gtime: 1626982200000
	},
	{
		sdate: [1400, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 2],
			Dow: 0,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 1627068600000,
		gdate: [2021, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 6, 24]
		},
		gtime: 1627068600000
	},
	{
		sdate: [1400, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 15],
			Dow: 6,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1628191800000,
		gdate: [2021, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 7, 6]
		},
		gtime: 1628191800000
	},
	{
		sdate: [1400, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 30],
			Dow: 0,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1629487800000,
		gdate: [2021, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 7, 21]
		},
		gtime: 1629487800000
	},
	{
		sdate: [1400, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 4, 31],
			Dow: 1,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 1629574200000,
		gdate: [2021, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 7, 22]
		},
		gtime: 1629574200000
	},
	{
		sdate: [1400, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 1],
			Dow: 2,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 1629660600000,
		gdate: [2021, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 7, 23]
		},
		gtime: 1629660600000
	},
	{
		sdate: [1400, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 2],
			Dow: 3,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 1629747000000,
		gdate: [2021, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 7, 24]
		},
		gtime: 1629747000000
	},
	{
		sdate: [1400, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 15],
			Dow: 2,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1630870200000,
		gdate: [2021, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 8, 6]
		},
		gtime: 1630870200000
	},
	{
		sdate: [1400, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 29],
			Dow: 2,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1632079800000,
		gdate: [2021, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 8, 20]
		},
		gtime: 1632079800000
	},
	{
		sdate: [1400, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 5, 30],
			Dow: 3,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 1632166200000,
		gdate: [2021, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 8, 21]
		},
		gtime: 1632166200000
	},
	{
		sdate: [1400, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 1],
			Dow: 5,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 1632342600000,
		gdate: [2021, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 8, 23]
		},
		gtime: 1632342600000
	},
	{
		sdate: [1400, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 2],
			Dow: 6,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 1632429000000,
		gdate: [2021, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 8, 24]
		},
		gtime: 1632429000000
	},
	{
		sdate: [1400, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 15],
			Dow: 5,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1633552200000,
		gdate: [2021, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 9, 7]
		},
		gtime: 1633552200000
	},
	{
		sdate: [1400, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 29],
			Dow: 5,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1634761800000,
		gdate: [2021, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 9, 21]
		},
		gtime: 1634761800000
	},
	{
		sdate: [1400, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 6, 30],
			Dow: 6,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1634848200000,
		gdate: [2021, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 9, 22]
		},
		gtime: 1634848200000
	},
	{
		sdate: [1400, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 1],
			Dow: 0,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 1634934600000,
		gdate: [2021, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 9, 23]
		},
		gtime: 1634934600000
	},
	{
		sdate: [1400, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 2],
			Dow: 1,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 1635021000000,
		gdate: [2021, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 9, 24]
		},
		gtime: 1635021000000
	},
	{
		sdate: [1400, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 15],
			Dow: 0,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1636144200000,
		gdate: [2021, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 10, 6]
		},
		gtime: 1636144200000
	},
	{
		sdate: [1400, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 29],
			Dow: 0,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1637353800000,
		gdate: [2021, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 10, 20]
		},
		gtime: 1637353800000
	},
	{
		sdate: [1400, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 7, 30],
			Dow: 1,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1637440200000,
		gdate: [2021, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 10, 21]
		},
		gtime: 1637440200000
	},
	{
		sdate: [1400, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 1],
			Dow: 2,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 1637526600000,
		gdate: [2021, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 10, 22]
		},
		gtime: 1637526600000
	},
	{
		sdate: [1400, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 2],
			Dow: 3,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 1637613000000,
		gdate: [2021, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 10, 23]
		},
		gtime: 1637613000000
	},
	{
		sdate: [1400, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 15],
			Dow: 2,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1638736200000,
		gdate: [2021, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 11, 6]
		},
		gtime: 1638736200000
	},
	{
		sdate: [1400, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 29],
			Dow: 2,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 1639945800000,
		gdate: [2021, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 11, 20]
		},
		gtime: 1639945800000
	},
	{
		sdate: [1400, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 8, 30],
			Dow: 3,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 1640032200000,
		gdate: [2021, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 11, 21]
		},
		gtime: 1640032200000
	},
	{
		sdate: [1400, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 1],
			Dow: 4,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 1640118600000,
		gdate: [2021, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 11, 22]
		},
		gtime: 1640118600000
	},
	{
		sdate: [1400, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 2],
			Dow: 5,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 1640205000000,
		gdate: [2021, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 11, 23]
		},
		gtime: 1640205000000
	},
	{
		sdate: [1400, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 15],
			Dow: 4,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1641328200000,
		gdate: [2022, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 0, 5]
		},
		gtime: 1641328200000
	},
	{
		sdate: [1400, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 29],
			Dow: 4,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1642537800000,
		gdate: [2022, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 0, 19]
		},
		gtime: 1642537800000
	},
	{
		sdate: [1400, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 9, 30],
			Dow: 5,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1642624200000,
		gdate: [2022, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 0, 20]
		},
		gtime: 1642624200000
	},
	{
		sdate: [1400, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 1],
			Dow: 6,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 1642710600000,
		gdate: [2022, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 0, 21]
		},
		gtime: 1642710600000
	},
	{
		sdate: [1400, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 2],
			Dow: 0,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 1642797000000,
		gdate: [2022, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 0, 22]
		},
		gtime: 1642797000000
	},
	{
		sdate: [1400, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 15],
			Dow: 6,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1643920200000,
		gdate: [2022, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 1, 4]
		},
		gtime: 1643920200000
	},
	{
		sdate: [1400, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 29],
			Dow: 6,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1645129800000,
		gdate: [2022, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 1, 18]
		},
		gtime: 1645129800000
	},
	{
		sdate: [1400, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 10, 30],
			Dow: 0,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1400],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1645216200000,
		gdate: [2022, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 1, 19]
		},
		gtime: 1645216200000
	},
	{
		sdate: [1400, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 1],
			Dow: 1,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 1645302600000,
		gdate: [2022, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 1, 20]
		},
		gtime: 1645302600000
	},
	{
		sdate: [1400, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 2],
			Dow: 2,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1400],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 1645389000000,
		gdate: [2022, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 1, 21]
		},
		gtime: 1645389000000
	},
	{
		sdate: [1400, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 3],
			Dow: 3,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1400],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 1645475400000,
		gdate: [2022, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 1, 22]
		},
		gtime: 1645475400000
	},
	{
		sdate: [1400, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 4],
			Dow: 4,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1645561800000,
		gdate: [2022, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 1, 23]
		},
		gtime: 1645561800000
	},
	{
		sdate: [1400, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 15],
			Dow: 1,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1400],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1646512200000,
		gdate: [2022, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 6]
		},
		gtime: 1646512200000
	},
	{
		sdate: [1400, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 25],
			Dow: 4,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1400],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1647376200000,
		gdate: [2022, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 16]
		},
		gtime: 1647376200000
	},
	{
		sdate: [1400, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 26],
			Dow: 5,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1400],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1647462600000,
		gdate: [2022, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 17]
		},
		gtime: 1647462600000
	},
	{
		sdate: [1400, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 27],
			Dow: 6,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1400],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1647549000000,
		gdate: [2022, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 18]
		},
		gtime: 1647549000000
	},
	{
		sdate: [1400, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 28],
			Dow: 0,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1401],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1647635400000,
		gdate: [2022, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 19]
		},
		gtime: 1647635400000
	},
	{
		sdate: [1400, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 29],
			Dow: 1,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1401],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 1647721800000,
		gdate: [2022, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 20]
		},
		gtime: 1647721800000
	},

	{
		sdate: [1420, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 1],
			Dow: 4,
			Diy: 366,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1419],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2247337800000,
		gdate: [2041, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 20]
		},
		gtime: 2247337800000
	},
	{
		sdate: [1420, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 2],
			Dow: 5,
			Diy: 366,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1419],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 2247424200000,
		gdate: [2041, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 21]
		},
		gtime: 2247424200000
	},
	{
		sdate: [1420, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 3],
			Dow: 6,
			Diy: 366,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1419],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 2247507000000,
		gdate: [2041, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 22]
		},
		gtime: 2247507000000
	},
	{
		sdate: [1420, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 4],
			Dow: 0,
			Diy: 366,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2247593400000,
		gdate: [2041, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 23]
		},
		gtime: 2247593400000
	},
	{
		sdate: [1420, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 5],
			Dow: 1,
			Diy: 366,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2247679800000,
		gdate: [2041, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 24]
		},
		gtime: 2247679800000
	},
	{
		sdate: [1420, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 6],
			Dow: 2,
			Diy: 366,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2247766200000,
		gdate: [2041, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 25]
		},
		gtime: 2247766200000
	},
	{
		sdate: [1420, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 7],
			Dow: 3,
			Diy: 366,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2247852600000,
		gdate: [2041, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 26]
		},
		gtime: 2247852600000
	},
	{
		sdate: [1420, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 15],
			Dow: 4,
			Diy: 366,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2248543800000,
		gdate: [2041, 4, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 3, 3]
		},
		gtime: 2248543800000
	},
	{
		sdate: [1420, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 29],
			Dow: 4,
			Diy: 366,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2249753400000,
		gdate: [2041, 4, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 3, 17]
		},
		gtime: 2249753400000
	},
	{
		sdate: [1420, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 30],
			Dow: 5,
			Diy: 366,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2249839800000,
		gdate: [2041, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 3, 18]
		},
		gtime: 2249839800000
	},
	{
		sdate: [1420, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 31],
			Dow: 6,
			Diy: 366,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2249926200000,
		gdate: [2041, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 3, 19]
		},
		gtime: 2249926200000
	},
	{
		sdate: [1420, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 1],
			Dow: 0,
			Diy: 366,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2250012600000,
		gdate: [2041, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 3, 20]
		},
		gtime: 2250012600000
	},
	{
		sdate: [1420, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 2],
			Dow: 1,
			Diy: 366,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 2250099000000,
		gdate: [2041, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 3, 21]
		},
		gtime: 2250099000000
	},
	{
		sdate: [1420, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 15],
			Dow: 0,
			Diy: 366,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2251222200000,
		gdate: [2041, 5, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 4, 4]
		},
		gtime: 2251222200000
	},
	{
		sdate: [1420, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 30],
			Dow: 1,
			Diy: 366,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2252518200000,
		gdate: [2041, 5, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 4, 19]
		},
		gtime: 2252518200000
	},
	{
		sdate: [1420, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 1, 31],
			Dow: 2,
			Diy: 366,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2252604600000,
		gdate: [2041, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 4, 20]
		},
		gtime: 2252604600000
	},
	{
		sdate: [1420, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 1],
			Dow: 3,
			Diy: 366,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2252691000000,
		gdate: [2041, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 4, 21]
		},
		gtime: 2252691000000
	},
	{
		sdate: [1420, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 2],
			Dow: 4,
			Diy: 366,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 2252777400000,
		gdate: [2041, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 4, 22]
		},
		gtime: 2252777400000
	},
	{
		sdate: [1420, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 15],
			Dow: 3,
			Diy: 366,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2253900600000,
		gdate: [2041, 6, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 5, 4]
		},
		gtime: 2253900600000
	},
	{
		sdate: [1420, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 30],
			Dow: 4,
			Diy: 366,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2255196600000,
		gdate: [2041, 6, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 5, 19]
		},
		gtime: 2255196600000
	},
	{
		sdate: [1420, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 2, 31],
			Dow: 5,
			Diy: 366,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 2255283000000,
		gdate: [2041, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 5, 20]
		},
		gtime: 2255283000000
	},
	{
		sdate: [1420, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 1],
			Dow: 6,
			Diy: 366,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2255369400000,
		gdate: [2041, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 5, 21]
		},
		gtime: 2255369400000
	},
	{
		sdate: [1420, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 2],
			Dow: 0,
			Diy: 366,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 2255455800000,
		gdate: [2041, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 5, 22]
		},
		gtime: 2255455800000
	},
	{
		sdate: [1420, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 15],
			Dow: 6,
			Diy: 366,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [15, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2256579000000,
		gdate: [2041, 7, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 6, 5]
		},
		gtime: 2256579000000
	},
	{
		sdate: [1420, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 30],
			Dow: 0,
			Diy: 366,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2257875000000,
		gdate: [2041, 7, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 6, 20]
		},
		gtime: 2257875000000
	},
	{
		sdate: [1420, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 3, 31],
			Dow: 1,
			Diy: 366,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2257961400000,
		gdate: [2041, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 6, 21]
		},
		gtime: 2257961400000
	},
	{
		sdate: [1420, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 1],
			Dow: 2,
			Diy: 366,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2258047800000,
		gdate: [2041, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 6, 22]
		},
		gtime: 2258047800000
	},
	{
		sdate: [1420, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 2],
			Dow: 3,
			Diy: 366,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 2258134200000,
		gdate: [2041, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 6, 23]
		},
		gtime: 2258134200000
	},
	{
		sdate: [1420, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 15],
			Dow: 2,
			Diy: 366,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2259257400000,
		gdate: [2041, 8, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 7, 5]
		},
		gtime: 2259257400000
	},
	{
		sdate: [1420, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 30],
			Dow: 3,
			Diy: 366,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2260553400000,
		gdate: [2041, 8, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 7, 20]
		},
		gtime: 2260553400000
	},
	{
		sdate: [1420, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 4, 31],
			Dow: 4,
			Diy: 366,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2260639800000,
		gdate: [2041, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 7, 21]
		},
		gtime: 2260639800000
	},
	{
		sdate: [1420, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 1],
			Dow: 5,
			Diy: 366,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2260726200000,
		gdate: [2041, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 7, 22]
		},
		gtime: 2260726200000
	},
	{
		sdate: [1420, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 2],
			Dow: 6,
			Diy: 366,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 2260812600000,
		gdate: [2041, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 7, 23]
		},
		gtime: 2260812600000
	},
	{
		sdate: [1420, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 15],
			Dow: 5,
			Diy: 366,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2261935800000,
		gdate: [2041, 9, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 8, 5]
		},
		gtime: 2261935800000
	},
	{
		sdate: [1420, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 29],
			Dow: 5,
			Diy: 366,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2263145400000,
		gdate: [2041, 9, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 8, 19]
		},
		gtime: 2263145400000
	},
	{
		sdate: [1420, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 5, 30],
			Dow: 6,
			Diy: 366,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2263231800000,
		gdate: [2041, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 8, 20]
		},
		gtime: 2263231800000
	},
	{
		sdate: [1420, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 1],
			Dow: 1,
			Diy: 366,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 2263408200000,
		gdate: [2041, 9, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 8, 22]
		},
		gtime: 2263408200000
	},
	{
		sdate: [1420, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 2],
			Dow: 2,
			Diy: 366,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 2263494600000,
		gdate: [2041, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 8, 23]
		},
		gtime: 2263494600000
	},
	{
		sdate: [1420, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 15],
			Dow: 1,
			Diy: 366,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2264617800000,
		gdate: [2041, 10, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 9, 6]
		},
		gtime: 2264617800000
	},
	{
		sdate: [1420, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 29],
			Dow: 1,
			Diy: 366,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2265827400000,
		gdate: [2041, 10, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 9, 20]
		},
		gtime: 2265827400000
	},
	{
		sdate: [1420, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 6, 30],
			Dow: 2,
			Diy: 366,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2265913800000,
		gdate: [2041, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 9, 21]
		},
		gtime: 2265913800000
	},
	{
		sdate: [1420, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 1],
			Dow: 3,
			Diy: 366,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 2266000200000,
		gdate: [2041, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 9, 22]
		},
		gtime: 2266000200000
	},
	{
		sdate: [1420, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 2],
			Dow: 4,
			Diy: 366,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 2266086600000,
		gdate: [2041, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 9, 23]
		},
		gtime: 2266086600000
	},
	{
		sdate: [1420, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 15],
			Dow: 3,
			Diy: 366,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2267209800000,
		gdate: [2041, 11, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 10, 5]
		},
		gtime: 2267209800000
	},
	{
		sdate: [1420, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 29],
			Dow: 3,
			Diy: 366,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2268419400000,
		gdate: [2041, 11, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 10, 19]
		},
		gtime: 2268419400000
	},
	{
		sdate: [1420, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 7, 30],
			Dow: 4,
			Diy: 366,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2268505800000,
		gdate: [2041, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 10, 20]
		},
		gtime: 2268505800000
	},
	{
		sdate: [1420, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 1],
			Dow: 5,
			Diy: 366,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 2268592200000,
		gdate: [2041, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 10, 21]
		},
		gtime: 2268592200000
	},
	{
		sdate: [1420, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 2],
			Dow: 6,
			Diy: 366,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 2268678600000,
		gdate: [2041, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 10, 22]
		},
		gtime: 2268678600000
	},
	{
		sdate: [1420, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 15],
			Dow: 5,
			Diy: 366,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2269801800000,
		gdate: [2041, 12, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 11, 5]
		},
		gtime: 2269801800000
	},
	{
		sdate: [1420, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 29],
			Dow: 5,
			Diy: 366,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2271011400000,
		gdate: [2041, 12, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 11, 19]
		},
		gtime: 2271011400000
	},
	{
		sdate: [1420, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 8, 30],
			Dow: 6,
			Diy: 366,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 2271097800000,
		gdate: [2041, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 11, 20]
		},
		gtime: 2271097800000
	},
	{
		sdate: [1420, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 1],
			Dow: 0,
			Diy: 366,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 2271184200000,
		gdate: [2041, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 11, 21]
		},
		gtime: 2271184200000
	},
	{
		sdate: [1420, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 2],
			Dow: 1,
			Diy: 366,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 2271270600000,
		gdate: [2041, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 11, 22]
		},
		gtime: 2271270600000
	},
	{
		sdate: [1420, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 15],
			Dow: 0,
			Diy: 366,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2272393800000,
		gdate: [2042, 1, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 0, 4]
		},
		gtime: 2272393800000
	},
	{
		sdate: [1420, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 29],
			Dow: 0,
			Diy: 366,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2273603400000,
		gdate: [2042, 1, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 0, 18]
		},
		gtime: 2273603400000
	},
	{
		sdate: [1420, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 9, 30],
			Dow: 1,
			Diy: 366,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2273689800000,
		gdate: [2042, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 0, 19]
		},
		gtime: 2273689800000
	},
	{
		sdate: [1420, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 1],
			Dow: 2,
			Diy: 366,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 2273776200000,
		gdate: [2042, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 0, 20]
		},
		gtime: 2273776200000
	},
	{
		sdate: [1420, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 2],
			Dow: 3,
			Diy: 366,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 2273862600000,
		gdate: [2042, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 0, 21]
		},
		gtime: 2273862600000
	},
	{
		sdate: [1420, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 15],
			Dow: 2,
			Diy: 366,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2274985800000,
		gdate: [2042, 2, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 1, 3]
		},
		gtime: 2274985800000
	},
	{
		sdate: [1420, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 29],
			Dow: 2,
			Diy: 366,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2276195400000,
		gdate: [2042, 2, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 1, 17]
		},
		gtime: 2276195400000
	},
	{
		sdate: [1420, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 10, 30],
			Dow: 3,
			Diy: 366,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2276281800000,
		gdate: [2042, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 1, 18]
		},
		gtime: 2276281800000
	},
	{
		sdate: [1420, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 1],
			Dow: 4,
			Diy: 366,
			Doy: 336,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 2276368200000,
		gdate: [2042, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 1, 19]
		},
		gtime: 2276368200000
	},
	{
		sdate: [1420, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 2],
			Dow: 5,
			Diy: 366,
			Doy: 337,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 2276454600000,
		gdate: [2042, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 1, 20]
		},
		gtime: 2276454600000
	},
	{
		sdate: [1420, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 3],
			Dow: 6,
			Diy: 366,
			Doy: 338,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1420],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 2276541000000,
		gdate: [2042, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 1, 21]
		},
		gtime: 2276541000000
	},
	{
		sdate: [1420, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 4],
			Dow: 0,
			Diy: 366,
			Doy: 339,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2276627400000,
		gdate: [2042, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 1, 22]
		},
		gtime: 2276627400000
	},
	{
		sdate: [1420, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 15],
			Dow: 4,
			Diy: 366,
			Doy: 350,
			Dim: 30,
			Wiy: 52,
			Woy: [50, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2277577800000,
		gdate: [2042, 3, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 5]
		},
		gtime: 2277577800000
	},
	{
		sdate: [1420, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 25],
			Dow: 0,
			Diy: 366,
			Doy: 360,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1420],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2278441800000,
		gdate: [2042, 3, 15, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 15]
		},
		gtime: 2278441800000
	},
	{
		sdate: [1420, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 26],
			Dow: 1,
			Diy: 366,
			Doy: 361,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1420],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2278528200000,
		gdate: [2042, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 16]
		},
		gtime: 2278528200000
	},
	{
		sdate: [1420, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 27],
			Dow: 2,
			Diy: 366,
			Doy: 362,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1420],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2278614600000,
		gdate: [2042, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 17]
		},
		gtime: 2278614600000
	},
	{
		sdate: [1420, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 28],
			Dow: 3,
			Diy: 366,
			Doy: 363,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1420],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2278701000000,
		gdate: [2042, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 18]
		},
		gtime: 2278701000000
	},
	{
		sdate: [1420, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 29],
			Dow: 4,
			Diy: 366,
			Doy: 364,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1420],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2278787400000,
		gdate: [2042, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 19]
		},
		gtime: 2278787400000
	},
	{
		sdate: [1420, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 30],
			Dow: 5,
			Diy: 366,
			Doy: 365,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1420],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2278873800000,
		gdate: [2042, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 20]
		},
		gtime: 2278873800000
	},
	{
		sdate: [1440, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 1],
			Dow: 1,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2878489800000,
		gdate: [2061, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 20]
		},
		gtime: 2878489800000
	},
	{
		sdate: [1440, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 2],
			Dow: 2,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 2878576200000,
		gdate: [2061, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 21]
		},
		gtime: 2878576200000
	},
	{
		sdate: [1440, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 3],
			Dow: 3,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 2878659000000,
		gdate: [2061, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 22]
		},
		gtime: 2878659000000
	},
	{
		sdate: [1440, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 4],
			Dow: 4,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2878745400000,
		gdate: [2061, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 23]
		},
		gtime: 2878745400000
	},
	{
		sdate: [1440, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 5],
			Dow: 5,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2878831800000,
		gdate: [2061, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 24]
		},
		gtime: 2878831800000
	},
	{
		sdate: [1440, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 6],
			Dow: 6,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2878918200000,
		gdate: [2061, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 25]
		},
		gtime: 2878918200000
	},
	{
		sdate: [1440, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 7],
			Dow: 0,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2879004600000,
		gdate: [2061, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 26]
		},
		gtime: 2879004600000
	},
	{
		sdate: [1440, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 15],
			Dow: 1,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2879695800000,
		gdate: [2061, 4, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 3, 3]
		},
		gtime: 2879695800000
	},
	{
		sdate: [1440, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 29],
			Dow: 1,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2880905400000,
		gdate: [2061, 4, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 3, 17]
		},
		gtime: 2880905400000
	},
	{
		sdate: [1440, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 30],
			Dow: 2,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2880991800000,
		gdate: [2061, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 3, 18]
		},
		gtime: 2880991800000
	},
	{
		sdate: [1440, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 31],
			Dow: 3,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2881078200000,
		gdate: [2061, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 3, 19]
		},
		gtime: 2881078200000
	},
	{
		sdate: [1440, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 1],
			Dow: 4,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2881164600000,
		gdate: [2061, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 3, 20]
		},
		gtime: 2881164600000
	},
	{
		sdate: [1440, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 2],
			Dow: 5,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 2881251000000,
		gdate: [2061, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 3, 21]
		},
		gtime: 2881251000000
	},
	{
		sdate: [1440, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 15],
			Dow: 4,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2882374200000,
		gdate: [2061, 5, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 4, 4]
		},
		gtime: 2882374200000
	},
	{
		sdate: [1440, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 30],
			Dow: 5,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2883670200000,
		gdate: [2061, 5, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 4, 19]
		},
		gtime: 2883670200000
	},
	{
		sdate: [1440, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 1, 31],
			Dow: 6,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2883756600000,
		gdate: [2061, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 4, 20]
		},
		gtime: 2883756600000
	},
	{
		sdate: [1440, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 1],
			Dow: 0,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 2883843000000,
		gdate: [2061, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 4, 21]
		},
		gtime: 2883843000000
	},
	{
		sdate: [1440, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 2],
			Dow: 1,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 2883929400000,
		gdate: [2061, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 4, 22]
		},
		gtime: 2883929400000
	},
	{
		sdate: [1440, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 15],
			Dow: 0,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2885052600000,
		gdate: [2061, 6, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 5, 4]
		},
		gtime: 2885052600000
	},
	{
		sdate: [1440, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 30],
			Dow: 1,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 2886348600000,
		gdate: [2061, 6, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 5, 19]
		},
		gtime: 2886348600000
	},
	{
		sdate: [1440, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 2, 31],
			Dow: 2,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 2886435000000,
		gdate: [2061, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 5, 20]
		},
		gtime: 2886435000000
	},
	{
		sdate: [1440, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 1],
			Dow: 3,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2886521400000,
		gdate: [2061, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 5, 21]
		},
		gtime: 2886521400000
	},
	{
		sdate: [1440, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 2],
			Dow: 4,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 2886607800000,
		gdate: [2061, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 5, 22]
		},
		gtime: 2886607800000
	},
	{
		sdate: [1440, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 15],
			Dow: 3,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2887731000000,
		gdate: [2061, 7, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 6, 5]
		},
		gtime: 2887731000000
	},
	{
		sdate: [1440, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 30],
			Dow: 4,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2889027000000,
		gdate: [2061, 7, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 6, 20]
		},
		gtime: 2889027000000
	},
	{
		sdate: [1440, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 3, 31],
			Dow: 5,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2889113400000,
		gdate: [2061, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 6, 21]
		},
		gtime: 2889113400000
	},
	{
		sdate: [1440, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 1],
			Dow: 6,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2889199800000,
		gdate: [2061, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 6, 22]
		},
		gtime: 2889199800000
	},
	{
		sdate: [1440, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 2],
			Dow: 0,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 2889286200000,
		gdate: [2061, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 6, 23]
		},
		gtime: 2889286200000
	},
	{
		sdate: [1440, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 15],
			Dow: 6,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2890409400000,
		gdate: [2061, 8, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 7, 5]
		},
		gtime: 2890409400000
	},
	{
		sdate: [1440, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 30],
			Dow: 0,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2891705400000,
		gdate: [2061, 8, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 7, 20]
		},
		gtime: 2891705400000
	},
	{
		sdate: [1440, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 4, 31],
			Dow: 1,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2891791800000,
		gdate: [2061, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 7, 21]
		},
		gtime: 2891791800000
	},
	{
		sdate: [1440, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 1],
			Dow: 2,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 2891878200000,
		gdate: [2061, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 7, 22]
		},
		gtime: 2891878200000
	},
	{
		sdate: [1440, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 2],
			Dow: 3,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 2891964600000,
		gdate: [2061, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 7, 23]
		},
		gtime: 2891964600000
	},
	{
		sdate: [1440, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 15],
			Dow: 2,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2893087800000,
		gdate: [2061, 9, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 8, 5]
		},
		gtime: 2893087800000
	},
	{
		sdate: [1440, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 29],
			Dow: 2,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2894297400000,
		gdate: [2061, 9, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 8, 19]
		},
		gtime: 2894297400000
	},
	{
		sdate: [1440, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 5, 30],
			Dow: 3,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 2894383800000,
		gdate: [2061, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 8, 20]
		},
		gtime: 2894383800000
	},
	{
		sdate: [1440, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 1],
			Dow: 5,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 2894560200000,
		gdate: [2061, 9, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 8, 22]
		},
		gtime: 2894560200000
	},
	{
		sdate: [1440, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 2],
			Dow: 6,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 2894646600000,
		gdate: [2061, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 8, 23]
		},
		gtime: 2894646600000
	},
	{
		sdate: [1440, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 15],
			Dow: 5,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2895769800000,
		gdate: [2061, 10, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 9, 6]
		},
		gtime: 2895769800000
	},
	{
		sdate: [1440, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 29],
			Dow: 5,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2896979400000,
		gdate: [2061, 10, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 9, 20]
		},
		gtime: 2896979400000
	},
	{
		sdate: [1440, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 6, 30],
			Dow: 6,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2897065800000,
		gdate: [2061, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 9, 21]
		},
		gtime: 2897065800000
	},
	{
		sdate: [1440, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 1],
			Dow: 0,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 2897152200000,
		gdate: [2061, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 9, 22]
		},
		gtime: 2897152200000
	},
	{
		sdate: [1440, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 2],
			Dow: 1,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 2897238600000,
		gdate: [2061, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 9, 23]
		},
		gtime: 2897238600000
	},
	{
		sdate: [1440, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 15],
			Dow: 0,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2898361800000,
		gdate: [2061, 11, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 10, 5]
		},
		gtime: 2898361800000
	},
	{
		sdate: [1440, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 29],
			Dow: 0,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2899571400000,
		gdate: [2061, 11, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 10, 19]
		},
		gtime: 2899571400000
	},
	{
		sdate: [1440, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 7, 30],
			Dow: 1,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2899657800000,
		gdate: [2061, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 10, 20]
		},
		gtime: 2899657800000
	},
	{
		sdate: [1440, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 1],
			Dow: 2,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 2899744200000,
		gdate: [2061, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 10, 21]
		},
		gtime: 2899744200000
	},
	{
		sdate: [1440, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 2],
			Dow: 3,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 2899830600000,
		gdate: [2061, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 10, 22]
		},
		gtime: 2899830600000
	},
	{
		sdate: [1440, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 15],
			Dow: 2,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2900953800000,
		gdate: [2061, 12, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 11, 5]
		},
		gtime: 2900953800000
	},
	{
		sdate: [1440, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 29],
			Dow: 2,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 2902163400000,
		gdate: [2061, 12, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 11, 19]
		},
		gtime: 2902163400000
	},
	{
		sdate: [1440, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 8, 30],
			Dow: 3,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 2902249800000,
		gdate: [2061, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 11, 20]
		},
		gtime: 2902249800000
	},
	{
		sdate: [1440, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 1],
			Dow: 4,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 2902336200000,
		gdate: [2061, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 11, 21]
		},
		gtime: 2902336200000
	},
	{
		sdate: [1440, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 2],
			Dow: 5,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 2902422600000,
		gdate: [2061, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 11, 22]
		},
		gtime: 2902422600000
	},
	{
		sdate: [1440, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 15],
			Dow: 4,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2903545800000,
		gdate: [2062, 1, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 0, 4]
		},
		gtime: 2903545800000
	},
	{
		sdate: [1440, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 29],
			Dow: 4,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2904755400000,
		gdate: [2062, 1, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 0, 18]
		},
		gtime: 2904755400000
	},
	{
		sdate: [1440, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 9, 30],
			Dow: 5,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2904841800000,
		gdate: [2062, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 0, 19]
		},
		gtime: 2904841800000
	},
	{
		sdate: [1440, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 1],
			Dow: 6,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 2904928200000,
		gdate: [2062, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 0, 20]
		},
		gtime: 2904928200000
	},
	{
		sdate: [1440, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 2],
			Dow: 0,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 2905014600000,
		gdate: [2062, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 0, 21]
		},
		gtime: 2905014600000
	},
	{
		sdate: [1440, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 15],
			Dow: 6,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2906137800000,
		gdate: [2062, 2, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 1, 3]
		},
		gtime: 2906137800000
	},
	{
		sdate: [1440, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 29],
			Dow: 6,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2907347400000,
		gdate: [2062, 2, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 1, 17]
		},
		gtime: 2907347400000
	},
	{
		sdate: [1440, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 10, 30],
			Dow: 0,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1440],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2907433800000,
		gdate: [2062, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 1, 18]
		},
		gtime: 2907433800000
	},
	{
		sdate: [1440, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 1],
			Dow: 1,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 2907520200000,
		gdate: [2062, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 1, 19]
		},
		gtime: 2907520200000
	},
	{
		sdate: [1440, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 2],
			Dow: 2,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1440],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 2907606600000,
		gdate: [2062, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 1, 20]
		},
		gtime: 2907606600000
	},
	{
		sdate: [1440, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 3],
			Dow: 3,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1440],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 2907693000000,
		gdate: [2062, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 1, 21]
		},
		gtime: 2907693000000
	},
	{
		sdate: [1440, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 4],
			Dow: 4,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2907779400000,
		gdate: [2062, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 1, 22]
		},
		gtime: 2907779400000
	},
	{
		sdate: [1440, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 15],
			Dow: 1,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1440],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2908729800000,
		gdate: [2062, 3, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 5]
		},
		gtime: 2908729800000
	},
	{
		sdate: [1440, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 25],
			Dow: 4,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1440],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2909593800000,
		gdate: [2062, 3, 15, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 15]
		},
		gtime: 2909593800000
	},
	{
		sdate: [1440, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 26],
			Dow: 5,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1440],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2909680200000,
		gdate: [2062, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 16]
		},
		gtime: 2909680200000
	},
	{
		sdate: [1440, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 27],
			Dow: 6,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1440],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2909766600000,
		gdate: [2062, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 17]
		},
		gtime: 2909766600000
	},
	{
		sdate: [1440, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 28],
			Dow: 0,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1441],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2909853000000,
		gdate: [2062, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 18]
		},
		gtime: 2909853000000
	},
	{
		sdate: [1440, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 29],
			Dow: 1,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1441],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 2909939400000,
		gdate: [2062, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 19]
		},
		gtime: 2909939400000
	},

	{
		sdate: [1460, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 1],
			Dow: 5,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1459],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 3509641800000,
		gdate: [2081, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 20]
		},
		gtime: 3509641800000
	},
	{
		sdate: [1460, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 2],
			Dow: 6,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1459],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 3509728200000,
		gdate: [2081, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 21]
		},
		gtime: 3509728200000
	},
	{
		sdate: [1460, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 3],
			Dow: 0,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 3509811000000,
		gdate: [2081, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 22]
		},
		gtime: 3509811000000
	},
	{
		sdate: [1460, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 4],
			Dow: 1,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3509897400000,
		gdate: [2081, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 23]
		},
		gtime: 3509897400000
	},
	{
		sdate: [1460, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 5],
			Dow: 2,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3509983800000,
		gdate: [2081, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 24]
		},
		gtime: 3509983800000
	},
	{
		sdate: [1460, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 6],
			Dow: 3,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3510070200000,
		gdate: [2081, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 25]
		},
		gtime: 3510070200000
	},
	{
		sdate: [1460, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 7],
			Dow: 4,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3510156600000,
		gdate: [2081, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 26]
		},
		gtime: 3510156600000
	},
	{
		sdate: [1460, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 15],
			Dow: 5,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3510847800000,
		gdate: [2081, 4, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 3, 3]
		},
		gtime: 3510847800000
	},
	{
		sdate: [1460, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 29],
			Dow: 5,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3512057400000,
		gdate: [2081, 4, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 3, 17]
		},
		gtime: 3512057400000
	},
	{
		sdate: [1460, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 30],
			Dow: 6,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3512143800000,
		gdate: [2081, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 3, 18]
		},
		gtime: 3512143800000
	},
	{
		sdate: [1460, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 31],
			Dow: 0,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 3512230200000,
		gdate: [2081, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 3, 19]
		},
		gtime: 3512230200000
	},
	{
		sdate: [1460, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 1],
			Dow: 1,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 3512316600000,
		gdate: [2081, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 3, 20]
		},
		gtime: 3512316600000
	},
	{
		sdate: [1460, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 2],
			Dow: 2,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 3512403000000,
		gdate: [2081, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 3, 21]
		},
		gtime: 3512403000000
	},
	{
		sdate: [1460, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 15],
			Dow: 1,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3513526200000,
		gdate: [2081, 5, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 4, 4]
		},
		gtime: 3513526200000
	},
	{
		sdate: [1460, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 30],
			Dow: 2,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3514822200000,
		gdate: [2081, 5, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 4, 19]
		},
		gtime: 3514822200000
	},
	{
		sdate: [1460, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 1, 31],
			Dow: 3,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 3514908600000,
		gdate: [2081, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 4, 20]
		},
		gtime: 3514908600000
	},
	{
		sdate: [1460, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 1],
			Dow: 4,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 3514995000000,
		gdate: [2081, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 4, 21]
		},
		gtime: 3514995000000
	},
	{
		sdate: [1460, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 2],
			Dow: 5,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 3515081400000,
		gdate: [2081, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 4, 22]
		},
		gtime: 3515081400000
	},
	{
		sdate: [1460, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 15],
			Dow: 4,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3516204600000,
		gdate: [2081, 6, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 5, 4]
		},
		gtime: 3516204600000
	},
	{
		sdate: [1460, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 30],
			Dow: 5,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 3517500600000,
		gdate: [2081, 6, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 5, 19]
		},
		gtime: 3517500600000
	},
	{
		sdate: [1460, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 2, 31],
			Dow: 6,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 3517587000000,
		gdate: [2081, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 5, 20]
		},
		gtime: 3517587000000
	},
	{
		sdate: [1460, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 1],
			Dow: 0,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 3517673400000,
		gdate: [2081, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 5, 21]
		},
		gtime: 3517673400000
	},
	{
		sdate: [1460, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 2],
			Dow: 1,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 3517759800000,
		gdate: [2081, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 5, 22]
		},
		gtime: 3517759800000
	},
	{
		sdate: [1460, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 15],
			Dow: 0,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 3518883000000,
		gdate: [2081, 7, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 6, 5]
		},
		gtime: 3518883000000
	},
	{
		sdate: [1460, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 30],
			Dow: 1,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 3520179000000,
		gdate: [2081, 7, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 6, 20]
		},
		gtime: 3520179000000
	},
	{
		sdate: [1460, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 3, 31],
			Dow: 2,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 3520265400000,
		gdate: [2081, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 6, 21]
		},
		gtime: 3520265400000
	},
	{
		sdate: [1460, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 1],
			Dow: 3,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 3520351800000,
		gdate: [2081, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 6, 22]
		},
		gtime: 3520351800000
	},
	{
		sdate: [1460, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 2],
			Dow: 4,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 3520438200000,
		gdate: [2081, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 6, 23]
		},
		gtime: 3520438200000
	},
	{
		sdate: [1460, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 15],
			Dow: 3,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 3521561400000,
		gdate: [2081, 8, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 7, 5]
		},
		gtime: 3521561400000
	},
	{
		sdate: [1460, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 30],
			Dow: 4,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 3522857400000,
		gdate: [2081, 8, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 7, 20]
		},
		gtime: 3522857400000
	},
	{
		sdate: [1460, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 4, 31],
			Dow: 5,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 3522943800000,
		gdate: [2081, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 7, 21]
		},
		gtime: 3522943800000
	},
	{
		sdate: [1460, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 1],
			Dow: 6,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 3523030200000,
		gdate: [2081, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 7, 22]
		},
		gtime: 3523030200000
	},
	{
		sdate: [1460, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 2],
			Dow: 0,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 3523116600000,
		gdate: [2081, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 7, 23]
		},
		gtime: 3523116600000
	},
	{
		sdate: [1460, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 15],
			Dow: 6,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 3524239800000,
		gdate: [2081, 9, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 8, 5]
		},
		gtime: 3524239800000
	},
	{
		sdate: [1460, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 29],
			Dow: 6,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 3525449400000,
		gdate: [2081, 9, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 8, 19]
		},
		gtime: 3525449400000
	},
	{
		sdate: [1460, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 5, 30],
			Dow: 0,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 3525535800000,
		gdate: [2081, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 8, 20]
		},
		gtime: 3525535800000
	},
	{
		sdate: [1460, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 1],
			Dow: 2,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 3525712200000,
		gdate: [2081, 9, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 8, 22]
		},
		gtime: 3525712200000
	},
	{
		sdate: [1460, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 2],
			Dow: 3,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 3525798600000,
		gdate: [2081, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 8, 23]
		},
		gtime: 3525798600000
	},
	{
		sdate: [1460, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 15],
			Dow: 2,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3526921800000,
		gdate: [2081, 10, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 9, 6]
		},
		gtime: 3526921800000
	},
	{
		sdate: [1460, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 29],
			Dow: 2,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3528131400000,
		gdate: [2081, 10, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 9, 20]
		},
		gtime: 3528131400000
	},
	{
		sdate: [1460, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 6, 30],
			Dow: 3,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3528217800000,
		gdate: [2081, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 9, 21]
		},
		gtime: 3528217800000
	},
	{
		sdate: [1460, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 1],
			Dow: 4,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 3528304200000,
		gdate: [2081, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 9, 22]
		},
		gtime: 3528304200000
	},
	{
		sdate: [1460, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 2],
			Dow: 5,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 3528390600000,
		gdate: [2081, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 9, 23]
		},
		gtime: 3528390600000
	},
	{
		sdate: [1460, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 15],
			Dow: 4,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3529513800000,
		gdate: [2081, 11, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 10, 5]
		},
		gtime: 3529513800000
	},
	{
		sdate: [1460, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 29],
			Dow: 4,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3530723400000,
		gdate: [2081, 11, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 10, 19]
		},
		gtime: 3530723400000
	},
	{
		sdate: [1460, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 7, 30],
			Dow: 5,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3530809800000,
		gdate: [2081, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 10, 20]
		},
		gtime: 3530809800000
	},
	{
		sdate: [1460, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 1],
			Dow: 6,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 3530896200000,
		gdate: [2081, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 10, 21]
		},
		gtime: 3530896200000
	},
	{
		sdate: [1460, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 2],
			Dow: 0,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 3530982600000,
		gdate: [2081, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 10, 22]
		},
		gtime: 3530982600000
	},
	{
		sdate: [1460, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 15],
			Dow: 6,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3532105800000,
		gdate: [2081, 12, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 11, 5]
		},
		gtime: 3532105800000
	},
	{
		sdate: [1460, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 29],
			Dow: 6,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 3533315400000,
		gdate: [2081, 12, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 11, 19]
		},
		gtime: 3533315400000
	},
	{
		sdate: [1460, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 8, 30],
			Dow: 0,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 3533401800000,
		gdate: [2081, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 11, 20]
		},
		gtime: 3533401800000
	},
	{
		sdate: [1460, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 1],
			Dow: 1,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 3533488200000,
		gdate: [2081, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 11, 21]
		},
		gtime: 3533488200000
	},
	{
		sdate: [1460, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 2],
			Dow: 2,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 3533574600000,
		gdate: [2081, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 11, 22]
		},
		gtime: 3533574600000
	},
	{
		sdate: [1460, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 15],
			Dow: 1,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3534697800000,
		gdate: [2082, 1, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 0, 4]
		},
		gtime: 3534697800000
	},
	{
		sdate: [1460, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 29],
			Dow: 1,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3535907400000,
		gdate: [2082, 1, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 0, 18]
		},
		gtime: 3535907400000
	},
	{
		sdate: [1460, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 9, 30],
			Dow: 2,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3535993800000,
		gdate: [2082, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 0, 19]
		},
		gtime: 3535993800000
	},
	{
		sdate: [1460, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 1],
			Dow: 3,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 3536080200000,
		gdate: [2082, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 0, 20]
		},
		gtime: 3536080200000
	},
	{
		sdate: [1460, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 2],
			Dow: 4,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 3536166600000,
		gdate: [2082, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 0, 21]
		},
		gtime: 3536166600000
	},
	{
		sdate: [1460, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 15],
			Dow: 3,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3537289800000,
		gdate: [2082, 2, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 1, 3]
		},
		gtime: 3537289800000
	},
	{
		sdate: [1460, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 29],
			Dow: 3,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3538499400000,
		gdate: [2082, 2, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 1, 17]
		},
		gtime: 3538499400000
	},
	{
		sdate: [1460, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 10, 30],
			Dow: 4,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3538585800000,
		gdate: [2082, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 1, 18]
		},
		gtime: 3538585800000
	},
	{
		sdate: [1460, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 1],
			Dow: 5,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 3538672200000,
		gdate: [2082, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 1, 19]
		},
		gtime: 3538672200000
	},
	{
		sdate: [1460, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 2],
			Dow: 6,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1460],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 3538758600000,
		gdate: [2082, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 1, 20]
		},
		gtime: 3538758600000
	},
	{
		sdate: [1460, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 3],
			Dow: 0,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1460],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 3538845000000,
		gdate: [2082, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 1, 21]
		},
		gtime: 3538845000000
	},
	{
		sdate: [1460, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 4],
			Dow: 1,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3538931400000,
		gdate: [2082, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 1, 22]
		},
		gtime: 3538931400000
	},
	{
		sdate: [1460, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 15],
			Dow: 5,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3539881800000,
		gdate: [2082, 3, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 5]
		},
		gtime: 3539881800000
	},
	{
		sdate: [1460, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 25],
			Dow: 1,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1460],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3540745800000,
		gdate: [2082, 3, 15, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 15]
		},
		gtime: 3540745800000
	},
	{
		sdate: [1460, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 26],
			Dow: 2,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1460],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3540832200000,
		gdate: [2082, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 16]
		},
		gtime: 3540832200000
	},
	{
		sdate: [1460, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 27],
			Dow: 3,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1460],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3540918600000,
		gdate: [2082, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 17]
		},
		gtime: 3540918600000
	},
	{
		sdate: [1460, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 28],
			Dow: 4,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1460],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3541005000000,
		gdate: [2082, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 18]
		},
		gtime: 3541005000000
	},
	{
		sdate: [1460, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 29],
			Dow: 5,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1460],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 3541091400000,
		gdate: [2082, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 19]
		},
		gtime: 3541091400000
	},

	{
		sdate: [1480, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 1],
			Dow: 2,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4140793800000,
		gdate: [2101, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 21]
		},
		gtime: 4140793800000
	},
	{
		sdate: [1480, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 2],
			Dow: 3,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 4140876600000,
		gdate: [2101, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 22]
		},
		gtime: 4140876600000
	},
	{
		sdate: [1480, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 3],
			Dow: 4,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 4140963000000,
		gdate: [2101, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 23]
		},
		gtime: 4140963000000
	},
	{
		sdate: [1480, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 4],
			Dow: 5,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4141049400000,
		gdate: [2101, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 24]
		},
		gtime: 4141049400000
	},
	{
		sdate: [1480, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 5],
			Dow: 6,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4141135800000,
		gdate: [2101, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 25]
		},
		gtime: 4141135800000
	},
	{
		sdate: [1480, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 6],
			Dow: 0,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4141222200000,
		gdate: [2101, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 26]
		},
		gtime: 4141222200000
	},
	{
		sdate: [1480, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 7],
			Dow: 1,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4141308600000,
		gdate: [2101, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 27]
		},
		gtime: 4141308600000
	},
	{
		sdate: [1480, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 15],
			Dow: 2,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4141999800000,
		gdate: [2101, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 3, 4]
		},
		gtime: 4141999800000
	},
	{
		sdate: [1480, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 29],
			Dow: 2,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4143209400000,
		gdate: [2101, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 3, 18]
		},
		gtime: 4143209400000
	},
	{
		sdate: [1480, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 30],
			Dow: 3,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4143295800000,
		gdate: [2101, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 3, 19]
		},
		gtime: 4143295800000
	},
	{
		sdate: [1480, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 31],
			Dow: 4,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4143382200000,
		gdate: [2101, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 3, 20]
		},
		gtime: 4143382200000
	},
	{
		sdate: [1480, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 1],
			Dow: 5,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4143468600000,
		gdate: [2101, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 3, 21]
		},
		gtime: 4143468600000
	},
	{
		sdate: [1480, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 2],
			Dow: 6,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 4143555000000,
		gdate: [2101, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 3, 22]
		},
		gtime: 4143555000000
	},
	{
		sdate: [1480, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 15],
			Dow: 5,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4144678200000,
		gdate: [2101, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 4, 5]
		},
		gtime: 4144678200000
	},
	{
		sdate: [1480, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 30],
			Dow: 6,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4145974200000,
		gdate: [2101, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 4, 20]
		},
		gtime: 4145974200000
	},
	{
		sdate: [1480, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 1, 31],
			Dow: 0,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4146060600000,
		gdate: [2101, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 4, 21]
		},
		gtime: 4146060600000
	},
	{
		sdate: [1480, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 1],
			Dow: 1,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4146147000000,
		gdate: [2101, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 4, 22]
		},
		gtime: 4146147000000
	},
	{
		sdate: [1480, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 2],
			Dow: 2,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 4146233400000,
		gdate: [2101, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 4, 23]
		},
		gtime: 4146233400000
	},
	{
		sdate: [1480, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 15],
			Dow: 1,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4147356600000,
		gdate: [2101, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 5, 5]
		},
		gtime: 4147356600000
	},
	{
		sdate: [1480, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 30],
			Dow: 2,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4148652600000,
		gdate: [2101, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 5, 20]
		},
		gtime: 4148652600000
	},
	{
		sdate: [1480, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 2, 31],
			Dow: 3,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 4148739000000,
		gdate: [2101, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 5, 21]
		},
		gtime: 4148739000000
	},
	{
		sdate: [1480, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 1],
			Dow: 4,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4148825400000,
		gdate: [2101, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 5, 22]
		},
		gtime: 4148825400000
	},
	{
		sdate: [1480, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 2],
			Dow: 5,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 4148911800000,
		gdate: [2101, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 5, 23]
		},
		gtime: 4148911800000
	},
	{
		sdate: [1480, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 15],
			Dow: 4,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4150035000000,
		gdate: [2101, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 6, 6]
		},
		gtime: 4150035000000
	},
	{
		sdate: [1480, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 30],
			Dow: 5,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4151331000000,
		gdate: [2101, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 6, 21]
		},
		gtime: 4151331000000
	},
	{
		sdate: [1480, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 3, 31],
			Dow: 6,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4151417400000,
		gdate: [2101, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 6, 22]
		},
		gtime: 4151417400000
	},
	{
		sdate: [1480, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 1],
			Dow: 0,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4151503800000,
		gdate: [2101, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 6, 23]
		},
		gtime: 4151503800000
	},
	{
		sdate: [1480, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 2],
			Dow: 1,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 4151590200000,
		gdate: [2101, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 6, 24]
		},
		gtime: 4151590200000
	},
	{
		sdate: [1480, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 15],
			Dow: 0,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [21, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4152713400000,
		gdate: [2101, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 7, 6]
		},
		gtime: 4152713400000
	},
	{
		sdate: [1480, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 30],
			Dow: 1,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4154009400000,
		gdate: [2101, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 7, 21]
		},
		gtime: 4154009400000
	},
	{
		sdate: [1480, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 4, 31],
			Dow: 2,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4154095800000,
		gdate: [2101, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 7, 22]
		},
		gtime: 4154095800000
	},
	{
		sdate: [1480, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 1],
			Dow: 3,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4154182200000,
		gdate: [2101, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 7, 23]
		},
		gtime: 4154182200000
	},
	{
		sdate: [1480, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 2],
			Dow: 4,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 4154268600000,
		gdate: [2101, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 7, 24]
		},
		gtime: 4154268600000
	},
	{
		sdate: [1480, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 15],
			Dow: 3,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4155391800000,
		gdate: [2101, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 8, 6]
		},
		gtime: 4155391800000
	},
	{
		sdate: [1480, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 29],
			Dow: 3,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4156601400000,
		gdate: [2101, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 8, 20]
		},
		gtime: 4156601400000
	},
	{
		sdate: [1480, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 5, 30],
			Dow: 4,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4156691400000,
		gdate: [2101, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 8, 21]
		},
		gtime: 4156691400000
	},
	{
		sdate: [1480, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 1],
			Dow: 6,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 4156864200000,
		gdate: [2101, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 8, 23]
		},
		gtime: 4156864200000
	},
	{
		sdate: [1480, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 2],
			Dow: 0,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [28, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 4156950600000,
		gdate: [2101, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 8, 24]
		},
		gtime: 4156950600000
	},
	{
		sdate: [1480, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 15],
			Dow: 6,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4158073800000,
		gdate: [2101, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 9, 7]
		},
		gtime: 4158073800000
	},
	{
		sdate: [1480, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 29],
			Dow: 6,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4159283400000,
		gdate: [2101, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 9, 21]
		},
		gtime: 4159283400000
	},
	{
		sdate: [1480, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 6, 30],
			Dow: 0,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4159369800000,
		gdate: [2101, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 9, 22]
		},
		gtime: 4159369800000
	},
	{
		sdate: [1480, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 1],
			Dow: 1,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 4159456200000,
		gdate: [2101, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 9, 23]
		},
		gtime: 4159456200000
	},
	{
		sdate: [1480, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 2],
			Dow: 2,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 4159542600000,
		gdate: [2101, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 9, 24]
		},
		gtime: 4159542600000
	},
	{
		sdate: [1480, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 15],
			Dow: 1,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4160665800000,
		gdate: [2101, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 10, 6]
		},
		gtime: 4160665800000
	},
	{
		sdate: [1480, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 29],
			Dow: 1,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4161875400000,
		gdate: [2101, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 10, 20]
		},
		gtime: 4161875400000
	},
	{
		sdate: [1480, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 7, 30],
			Dow: 2,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4161961800000,
		gdate: [2101, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 10, 21]
		},
		gtime: 4161961800000
	},
	{
		sdate: [1480, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 1],
			Dow: 3,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 4162048200000,
		gdate: [2101, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 10, 22]
		},
		gtime: 4162048200000
	},
	{
		sdate: [1480, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 2],
			Dow: 4,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 4162134600000,
		gdate: [2101, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 10, 23]
		},
		gtime: 4162134600000
	},
	{
		sdate: [1480, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 15],
			Dow: 3,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4163257800000,
		gdate: [2101, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 11, 6]
		},
		gtime: 4163257800000
	},
	{
		sdate: [1480, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 29],
			Dow: 3,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4164467400000,
		gdate: [2101, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 11, 20]
		},
		gtime: 4164467400000
	},
	{
		sdate: [1480, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 8, 30],
			Dow: 4,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 4164553800000,
		gdate: [2101, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 11, 21]
		},
		gtime: 4164553800000
	},
	{
		sdate: [1480, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 1],
			Dow: 5,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 4164640200000,
		gdate: [2101, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 11, 22]
		},
		gtime: 4164640200000
	},
	{
		sdate: [1480, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 2],
			Dow: 6,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 4164726600000,
		gdate: [2101, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 11, 23]
		},
		gtime: 4164726600000
	},
	{
		sdate: [1480, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 15],
			Dow: 5,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4165849800000,
		gdate: [2102, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 0, 5]
		},
		gtime: 4165849800000
	},
	{
		sdate: [1480, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 29],
			Dow: 5,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4167059400000,
		gdate: [2102, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 0, 19]
		},
		gtime: 4167059400000
	},
	{
		sdate: [1480, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 9, 30],
			Dow: 6,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4167145800000,
		gdate: [2102, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 0, 20]
		},
		gtime: 4167145800000
	},
	{
		sdate: [1480, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 1],
			Dow: 0,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 4167232200000,
		gdate: [2102, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 0, 21]
		},
		gtime: 4167232200000
	},
	{
		sdate: [1480, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 2],
			Dow: 1,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 4167318600000,
		gdate: [2102, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 0, 22]
		},
		gtime: 4167318600000
	},
	{
		sdate: [1480, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 15],
			Dow: 0,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [47, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4168441800000,
		gdate: [2102, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 1, 4]
		},
		gtime: 4168441800000
	},
	{
		sdate: [1480, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 29],
			Dow: 0,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1480],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4169651400000,
		gdate: [2102, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 1, 18]
		},
		gtime: 4169651400000
	},
	{
		sdate: [1480, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 10, 30],
			Dow: 1,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1480],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4169737800000,
		gdate: [2102, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 1, 19]
		},
		gtime: 4169737800000
	},
	{
		sdate: [1480, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 1],
			Dow: 2,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 4169824200000,
		gdate: [2102, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 1, 20]
		},
		gtime: 4169824200000
	},
	{
		sdate: [1480, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 2],
			Dow: 3,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1480],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 4169910600000,
		gdate: [2102, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 1, 21]
		},
		gtime: 4169910600000
	},
	{
		sdate: [1480, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 3],
			Dow: 4,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1480],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 4169997000000,
		gdate: [2102, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 1, 22]
		},
		gtime: 4169997000000
	},
	{
		sdate: [1480, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 4],
			Dow: 5,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4170083400000,
		gdate: [2102, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 1, 23]
		},
		gtime: 4170083400000
	},
	{
		sdate: [1480, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 15],
			Dow: 2,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1480],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4171033800000,
		gdate: [2102, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 6]
		},
		gtime: 4171033800000
	},
	{
		sdate: [1480, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 25],
			Dow: 5,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1480],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4171897800000,
		gdate: [2102, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 16]
		},
		gtime: 4171897800000
	},
	{
		sdate: [1480, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 26],
			Dow: 6,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1480],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4171984200000,
		gdate: [2102, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 17]
		},
		gtime: 4171984200000
	},
	{
		sdate: [1480, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 27],
			Dow: 0,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1481],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4172070600000,
		gdate: [2102, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 18]
		},
		gtime: 4172070600000
	},
	{
		sdate: [1480, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 28],
			Dow: 1,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1481],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4172157000000,
		gdate: [2102, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 19]
		},
		gtime: 4172157000000
	},
	{
		sdate: [1480, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 29],
			Dow: 2,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1481],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4172243400000,
		gdate: [2102, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 20]
		},
		gtime: 4172243400000
	},

	{
		sdate: [1500, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 1],
			Dow: 6,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1499],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4771945800000,
		gdate: [2121, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 21]
		},
		gtime: 4771945800000
	},
	{
		sdate: [1500, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 2],
			Dow: 0,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 4772028600000,
		gdate: [2121, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 22]
		},
		gtime: 4772028600000
	},
	{
		sdate: [1500, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 3],
			Dow: 1,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 4772115000000,
		gdate: [2121, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 23]
		},
		gtime: 4772115000000
	},
	{
		sdate: [1500, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 4],
			Dow: 2,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4772201400000,
		gdate: [2121, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 24]
		},
		gtime: 4772201400000
	},
	{
		sdate: [1500, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 5],
			Dow: 3,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4772287800000,
		gdate: [2121, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 25]
		},
		gtime: 4772287800000
	},
	{
		sdate: [1500, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 6],
			Dow: 4,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4772374200000,
		gdate: [2121, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 26]
		},
		gtime: 4772374200000
	},
	{
		sdate: [1500, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 7],
			Dow: 5,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4772460600000,
		gdate: [2121, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 27]
		},
		gtime: 4772460600000
	},
	{
		sdate: [1500, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 15],
			Dow: 6,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4773151800000,
		gdate: [2121, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 3, 4]
		},
		gtime: 4773151800000
	},
	{
		sdate: [1500, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 29],
			Dow: 6,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4774361400000,
		gdate: [2121, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 3, 18]
		},
		gtime: 4774361400000
	},
	{
		sdate: [1500, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 30],
			Dow: 0,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4774447800000,
		gdate: [2121, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 3, 19]
		},
		gtime: 4774447800000
	},
	{
		sdate: [1500, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 31],
			Dow: 1,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4774534200000,
		gdate: [2121, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 3, 20]
		},
		gtime: 4774534200000
	},
	{
		sdate: [1500, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 1],
			Dow: 2,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4774620600000,
		gdate: [2121, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 3, 21]
		},
		gtime: 4774620600000
	},
	{
		sdate: [1500, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 2],
			Dow: 3,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 4774707000000,
		gdate: [2121, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 3, 22]
		},
		gtime: 4774707000000
	},
	{
		sdate: [1500, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 15],
			Dow: 2,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4775830200000,
		gdate: [2121, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 4, 5]
		},
		gtime: 4775830200000
	},
	{
		sdate: [1500, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 30],
			Dow: 3,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4777126200000,
		gdate: [2121, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 4, 20]
		},
		gtime: 4777126200000
	},
	{
		sdate: [1500, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 1, 31],
			Dow: 4,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4777212600000,
		gdate: [2121, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 4, 21]
		},
		gtime: 4777212600000
	},
	{
		sdate: [1500, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 1],
			Dow: 5,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 4777299000000,
		gdate: [2121, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 4, 22]
		},
		gtime: 4777299000000
	},
	{
		sdate: [1500, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 2],
			Dow: 6,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 4777385400000,
		gdate: [2121, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 4, 23]
		},
		gtime: 4777385400000
	},
	{
		sdate: [1500, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 15],
			Dow: 5,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4778508600000,
		gdate: [2121, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 5, 5]
		},
		gtime: 4778508600000
	},
	{
		sdate: [1500, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 30],
			Dow: 6,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 4779804600000,
		gdate: [2121, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 5, 20]
		},
		gtime: 4779804600000
	},
	{
		sdate: [1500, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 2, 31],
			Dow: 0,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 4779891000000,
		gdate: [2121, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 5, 21]
		},
		gtime: 4779891000000
	},
	{
		sdate: [1500, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 1],
			Dow: 1,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4779977400000,
		gdate: [2121, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 5, 22]
		},
		gtime: 4779977400000
	},
	{
		sdate: [1500, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 2],
			Dow: 2,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 4780063800000,
		gdate: [2121, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 5, 23]
		},
		gtime: 4780063800000
	},
	{
		sdate: [1500, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 15],
			Dow: 1,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4781187000000,
		gdate: [2121, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 6, 6]
		},
		gtime: 4781187000000
	},
	{
		sdate: [1500, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 30],
			Dow: 2,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4782483000000,
		gdate: [2121, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 6, 21]
		},
		gtime: 4782483000000
	},
	{
		sdate: [1500, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 3, 31],
			Dow: 3,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4782569400000,
		gdate: [2121, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 6, 22]
		},
		gtime: 4782569400000
	},
	{
		sdate: [1500, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 1],
			Dow: 4,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4782655800000,
		gdate: [2121, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 6, 23]
		},
		gtime: 4782655800000
	},
	{
		sdate: [1500, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 2],
			Dow: 5,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 4782742200000,
		gdate: [2121, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 6, 24]
		},
		gtime: 4782742200000
	},
	{
		sdate: [1500, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 15],
			Dow: 4,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4783865400000,
		gdate: [2121, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 7, 6]
		},
		gtime: 4783865400000
	},
	{
		sdate: [1500, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 30],
			Dow: 5,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4785161400000,
		gdate: [2121, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 7, 21]
		},
		gtime: 4785161400000
	},
	{
		sdate: [1500, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 4, 31],
			Dow: 6,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4785247800000,
		gdate: [2121, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 7, 22]
		},
		gtime: 4785247800000
	},
	{
		sdate: [1500, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 1],
			Dow: 0,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 4785334200000,
		gdate: [2121, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 7, 23]
		},
		gtime: 4785334200000
	},
	{
		sdate: [1500, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 2],
			Dow: 1,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 4785420600000,
		gdate: [2121, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 7, 24]
		},
		gtime: 4785420600000
	},
	{
		sdate: [1500, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 15],
			Dow: 0,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4786543800000,
		gdate: [2121, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 8, 6]
		},
		gtime: 4786543800000
	},
	{
		sdate: [1500, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 29],
			Dow: 0,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4787753400000,
		gdate: [2121, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 8, 20]
		},
		gtime: 4787753400000
	},
	{
		sdate: [1500, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 5, 30],
			Dow: 1,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 4787843400000,
		gdate: [2121, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 8, 21]
		},
		gtime: 4787843400000
	},
	{
		sdate: [1500, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 1],
			Dow: 3,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 4788016200000,
		gdate: [2121, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 8, 23]
		},
		gtime: 4788016200000
	},
	{
		sdate: [1500, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 2],
			Dow: 4,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 4788102600000,
		gdate: [2121, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 8, 24]
		},
		gtime: 4788102600000
	},
	{
		sdate: [1500, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 15],
			Dow: 3,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4789225800000,
		gdate: [2121, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 9, 7]
		},
		gtime: 4789225800000
	},
	{
		sdate: [1500, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 29],
			Dow: 3,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4790435400000,
		gdate: [2121, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 9, 21]
		},
		gtime: 4790435400000
	},
	{
		sdate: [1500, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 6, 30],
			Dow: 4,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4790521800000,
		gdate: [2121, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 9, 22]
		},
		gtime: 4790521800000
	},
	{
		sdate: [1500, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 1],
			Dow: 5,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 4790608200000,
		gdate: [2121, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 9, 23]
		},
		gtime: 4790608200000
	},
	{
		sdate: [1500, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 2],
			Dow: 6,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 4790694600000,
		gdate: [2121, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 9, 24]
		},
		gtime: 4790694600000
	},
	{
		sdate: [1500, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 15],
			Dow: 5,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4791817800000,
		gdate: [2121, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 10, 6]
		},
		gtime: 4791817800000
	},
	{
		sdate: [1500, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 29],
			Dow: 5,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4793027400000,
		gdate: [2121, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 10, 20]
		},
		gtime: 4793027400000
	},
	{
		sdate: [1500, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 7, 30],
			Dow: 6,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4793113800000,
		gdate: [2121, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 10, 21]
		},
		gtime: 4793113800000
	},
	{
		sdate: [1500, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 1],
			Dow: 0,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 4793200200000,
		gdate: [2121, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 10, 22]
		},
		gtime: 4793200200000
	},
	{
		sdate: [1500, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 2],
			Dow: 1,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 4793286600000,
		gdate: [2121, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 10, 23]
		},
		gtime: 4793286600000
	},
	{
		sdate: [1500, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 15],
			Dow: 0,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4794409800000,
		gdate: [2121, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 11, 6]
		},
		gtime: 4794409800000
	},
	{
		sdate: [1500, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 29],
			Dow: 0,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 4795619400000,
		gdate: [2121, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 11, 20]
		},
		gtime: 4795619400000
	},
	{
		sdate: [1500, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 8, 30],
			Dow: 1,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 4795705800000,
		gdate: [2121, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 11, 21]
		},
		gtime: 4795705800000
	},
	{
		sdate: [1500, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 1],
			Dow: 2,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 4795792200000,
		gdate: [2121, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 11, 22]
		},
		gtime: 4795792200000
	},
	{
		sdate: [1500, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 2],
			Dow: 3,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 4795878600000,
		gdate: [2121, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 11, 23]
		},
		gtime: 4795878600000
	},
	{
		sdate: [1500, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 15],
			Dow: 2,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4797001800000,
		gdate: [2122, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 0, 5]
		},
		gtime: 4797001800000
	},
	{
		sdate: [1500, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 29],
			Dow: 2,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4798211400000,
		gdate: [2122, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 0, 19]
		},
		gtime: 4798211400000
	},
	{
		sdate: [1500, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 9, 30],
			Dow: 3,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4798297800000,
		gdate: [2122, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 0, 20]
		},
		gtime: 4798297800000
	},
	{
		sdate: [1500, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 1],
			Dow: 4,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 4798384200000,
		gdate: [2122, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 0, 21]
		},
		gtime: 4798384200000
	},
	{
		sdate: [1500, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 2],
			Dow: 5,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 4798470600000,
		gdate: [2122, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 0, 22]
		},
		gtime: 4798470600000
	},
	{
		sdate: [1500, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 15],
			Dow: 4,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4799593800000,
		gdate: [2122, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 1, 4]
		},
		gtime: 4799593800000
	},
	{
		sdate: [1500, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 29],
			Dow: 4,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4800803400000,
		gdate: [2122, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 1, 18]
		},
		gtime: 4800803400000
	},
	{
		sdate: [1500, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 10, 30],
			Dow: 5,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4800889800000,
		gdate: [2122, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 1, 19]
		},
		gtime: 4800889800000
	},
	{
		sdate: [1500, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 1],
			Dow: 6,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 4800976200000,
		gdate: [2122, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 1, 20]
		},
		gtime: 4800976200000
	},
	{
		sdate: [1500, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 2],
			Dow: 0,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1500],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 4801062600000,
		gdate: [2122, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 1, 21]
		},
		gtime: 4801062600000
	},
	{
		sdate: [1500, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 3],
			Dow: 1,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1500],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 4801149000000,
		gdate: [2122, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 1, 22]
		},
		gtime: 4801149000000
	},
	{
		sdate: [1500, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 4],
			Dow: 2,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4801235400000,
		gdate: [2122, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 1, 23]
		},
		gtime: 4801235400000
	},
	{
		sdate: [1500, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 15],
			Dow: 6,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4802185800000,
		gdate: [2122, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 6]
		},
		gtime: 4802185800000
	},
	{
		sdate: [1500, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 25],
			Dow: 2,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1500],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4803049800000,
		gdate: [2122, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 16]
		},
		gtime: 4803049800000
	},
	{
		sdate: [1500, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 26],
			Dow: 3,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1500],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4803136200000,
		gdate: [2122, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 17]
		},
		gtime: 4803136200000
	},
	{
		sdate: [1500, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 27],
			Dow: 4,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1500],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4803222600000,
		gdate: [2122, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 18]
		},
		gtime: 4803222600000
	},
	{
		sdate: [1500, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 28],
			Dow: 5,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1500],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4803309000000,
		gdate: [2122, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 19]
		},
		gtime: 4803309000000
	},
	{
		sdate: [1500, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 29],
			Dow: 6,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1500],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 4803395400000,
		gdate: [2122, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 20]
		},
		gtime: 4803395400000
	},

	{
		sdate: [1520, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 1],
			Dow: 3,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 5403097800000,
		gdate: [2141, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 21]
		},
		gtime: 5403097800000
	},
	{
		sdate: [1520, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 2],
			Dow: 4,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 5403180600000,
		gdate: [2141, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 22]
		},
		gtime: 5403180600000
	},
	{
		sdate: [1520, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 3],
			Dow: 5,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 5403267000000,
		gdate: [2141, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 23]
		},
		gtime: 5403267000000
	},
	{
		sdate: [1520, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 4],
			Dow: 6,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5403353400000,
		gdate: [2141, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 24]
		},
		gtime: 5403353400000
	},
	{
		sdate: [1520, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 5],
			Dow: 0,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5403439800000,
		gdate: [2141, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 25]
		},
		gtime: 5403439800000
	},
	{
		sdate: [1520, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 6],
			Dow: 1,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5403526200000,
		gdate: [2141, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 26]
		},
		gtime: 5403526200000
	},
	{
		sdate: [1520, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 7],
			Dow: 2,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5403612600000,
		gdate: [2141, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 27]
		},
		gtime: 5403612600000
	},
	{
		sdate: [1520, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 15],
			Dow: 3,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 53,
			Woy: [3, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5404303800000,
		gdate: [2141, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 3, 4]
		},
		gtime: 5404303800000
	},
	{
		sdate: [1520, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 29],
			Dow: 3,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5405513400000,
		gdate: [2141, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 3, 18]
		},
		gtime: 5405513400000
	},
	{
		sdate: [1520, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 30],
			Dow: 4,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5405599800000,
		gdate: [2141, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 3, 19]
		},
		gtime: 5405599800000
	},
	{
		sdate: [1520, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 31],
			Dow: 5,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 5405686200000,
		gdate: [2141, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 3, 20]
		},
		gtime: 5405686200000
	},
	{
		sdate: [1520, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 1],
			Dow: 6,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 5405772600000,
		gdate: [2141, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 3, 21]
		},
		gtime: 5405772600000
	},
	{
		sdate: [1520, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 2],
			Dow: 0,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 53,
			Woy: [6, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 5405859000000,
		gdate: [2141, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 3, 22]
		},
		gtime: 5405859000000
	},
	{
		sdate: [1520, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 15],
			Dow: 6,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 53,
			Woy: [7, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5406982200000,
		gdate: [2141, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 4, 5]
		},
		gtime: 5406982200000
	},
	{
		sdate: [1520, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 30],
			Dow: 0,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5408278200000,
		gdate: [2141, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 4, 20]
		},
		gtime: 5408278200000
	},
	{
		sdate: [1520, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 1, 31],
			Dow: 1,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 5408364600000,
		gdate: [2141, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 4, 21]
		},
		gtime: 5408364600000
	},
	{
		sdate: [1520, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 1],
			Dow: 2,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 5408451000000,
		gdate: [2141, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 4, 22]
		},
		gtime: 5408451000000
	},
	{
		sdate: [1520, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 2],
			Dow: 3,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 5408537400000,
		gdate: [2141, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 4, 23]
		},
		gtime: 5408537400000
	},
	{
		sdate: [1520, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 15],
			Dow: 2,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 53,
			Woy: [12, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5409660600000,
		gdate: [2141, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 5, 5]
		},
		gtime: 5409660600000
	},
	{
		sdate: [1520, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 30],
			Dow: 3,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 5410956600000,
		gdate: [2141, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 5, 20]
		},
		gtime: 5410956600000
	},
	{
		sdate: [1520, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 2, 31],
			Dow: 4,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 5411043000000,
		gdate: [2141, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 5, 21]
		},
		gtime: 5411043000000
	},
	{
		sdate: [1520, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 1],
			Dow: 5,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 5411129400000,
		gdate: [2141, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 5, 22]
		},
		gtime: 5411129400000
	},
	{
		sdate: [1520, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 2],
			Dow: 6,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 5411215800000,
		gdate: [2141, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 5, 23]
		},
		gtime: 5411215800000
	},
	{
		sdate: [1520, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 15],
			Dow: 5,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 53,
			Woy: [16, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 5412339000000,
		gdate: [2141, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 6, 6]
		},
		gtime: 5412339000000
	},
	{
		sdate: [1520, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 30],
			Dow: 6,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 53,
			Woy: [18, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 5413635000000,
		gdate: [2141, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 6, 21]
		},
		gtime: 5413635000000
	},
	{
		sdate: [1520, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 3, 31],
			Dow: 0,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 5413721400000,
		gdate: [2141, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 6, 22]
		},
		gtime: 5413721400000
	},
	{
		sdate: [1520, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 1],
			Dow: 1,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 5413807800000,
		gdate: [2141, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 6, 23]
		},
		gtime: 5413807800000
	},
	{
		sdate: [1520, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 2],
			Dow: 2,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 5413894200000,
		gdate: [2141, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 6, 24]
		},
		gtime: 5413894200000
	},
	{
		sdate: [1520, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 15],
			Dow: 1,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 53,
			Woy: [21, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 5415017400000,
		gdate: [2141, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 7, 6]
		},
		gtime: 5415017400000
	},
	{
		sdate: [1520, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 30],
			Dow: 2,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 5416313400000,
		gdate: [2141, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 7, 21]
		},
		gtime: 5416313400000
	},
	{
		sdate: [1520, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 4, 31],
			Dow: 3,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 5416399800000,
		gdate: [2141, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 7, 22]
		},
		gtime: 5416399800000
	},
	{
		sdate: [1520, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 1],
			Dow: 4,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 5416486200000,
		gdate: [2141, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 7, 23]
		},
		gtime: 5416486200000
	},
	{
		sdate: [1520, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 2],
			Dow: 5,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 5416572600000,
		gdate: [2141, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 7, 24]
		},
		gtime: 5416572600000
	},
	{
		sdate: [1520, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 15],
			Dow: 4,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 53,
			Woy: [25, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 5417695800000,
		gdate: [2141, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 8, 6]
		},
		gtime: 5417695800000
	},
	{
		sdate: [1520, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 29],
			Dow: 4,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 5418905400000,
		gdate: [2141, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 8, 20]
		},
		gtime: 5418905400000
	},
	{
		sdate: [1520, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 5, 30],
			Dow: 5,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 5418995400000,
		gdate: [2141, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 8, 21]
		},
		gtime: 5418995400000
	},
	{
		sdate: [1520, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 1],
			Dow: 0,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 53,
			Woy: [28, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 5419168200000,
		gdate: [2141, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 8, 23]
		},
		gtime: 5419168200000
	},
	{
		sdate: [1520, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 2],
			Dow: 1,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 53,
			Woy: [28, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 5419254600000,
		gdate: [2141, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 8, 24]
		},
		gtime: 5419254600000
	},
	{
		sdate: [1520, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 15],
			Dow: 0,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 53,
			Woy: [30, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5420377800000,
		gdate: [2141, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 9, 7]
		},
		gtime: 5420377800000
	},
	{
		sdate: [1520, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 29],
			Dow: 0,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5421587400000,
		gdate: [2141, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 9, 21]
		},
		gtime: 5421587400000
	},
	{
		sdate: [1520, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 6, 30],
			Dow: 1,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5421673800000,
		gdate: [2141, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 9, 22]
		},
		gtime: 5421673800000
	},
	{
		sdate: [1520, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 1],
			Dow: 2,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 5421760200000,
		gdate: [2141, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 9, 23]
		},
		gtime: 5421760200000
	},
	{
		sdate: [1520, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 2],
			Dow: 3,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 5421846600000,
		gdate: [2141, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 9, 24]
		},
		gtime: 5421846600000
	},
	{
		sdate: [1520, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 15],
			Dow: 2,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 53,
			Woy: [34, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5422969800000,
		gdate: [2141, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 10, 6]
		},
		gtime: 5422969800000
	},
	{
		sdate: [1520, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 29],
			Dow: 2,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5424179400000,
		gdate: [2141, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 10, 20]
		},
		gtime: 5424179400000
	},
	{
		sdate: [1520, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 7, 30],
			Dow: 3,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5424265800000,
		gdate: [2141, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 10, 21]
		},
		gtime: 5424265800000
	},
	{
		sdate: [1520, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 1],
			Dow: 4,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 5424352200000,
		gdate: [2141, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 10, 22]
		},
		gtime: 5424352200000
	},
	{
		sdate: [1520, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 2],
			Dow: 5,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 5424438600000,
		gdate: [2141, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 10, 23]
		},
		gtime: 5424438600000
	},
	{
		sdate: [1520, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 15],
			Dow: 4,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 53,
			Woy: [38, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5425561800000,
		gdate: [2141, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 11, 6]
		},
		gtime: 5425561800000
	},
	{
		sdate: [1520, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 29],
			Dow: 4,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 5426771400000,
		gdate: [2141, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 11, 20]
		},
		gtime: 5426771400000
	},
	{
		sdate: [1520, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 8, 30],
			Dow: 5,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 5426857800000,
		gdate: [2141, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 11, 21]
		},
		gtime: 5426857800000
	},
	{
		sdate: [1520, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 1],
			Dow: 6,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 5426944200000,
		gdate: [2141, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 11, 22]
		},
		gtime: 5426944200000
	},
	{
		sdate: [1520, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 2],
			Dow: 0,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 53,
			Woy: [41, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 5427030600000,
		gdate: [2141, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 11, 23]
		},
		gtime: 5427030600000
	},
	{
		sdate: [1520, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 15],
			Dow: 6,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 53,
			Woy: [42, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5428153800000,
		gdate: [2142, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 0, 5]
		},
		gtime: 5428153800000
	},
	{
		sdate: [1520, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 29],
			Dow: 6,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 53,
			Woy: [44, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5429363400000,
		gdate: [2142, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 0, 19]
		},
		gtime: 5429363400000
	},
	{
		sdate: [1520, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 9, 30],
			Dow: 0,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5429449800000,
		gdate: [2142, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 0, 20]
		},
		gtime: 5429449800000
	},
	{
		sdate: [1520, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 1],
			Dow: 1,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 5429536200000,
		gdate: [2142, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 0, 21]
		},
		gtime: 5429536200000
	},
	{
		sdate: [1520, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 2],
			Dow: 2,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 5429622600000,
		gdate: [2142, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 0, 22]
		},
		gtime: 5429622600000
	},
	{
		sdate: [1520, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 15],
			Dow: 1,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 53,
			Woy: [47, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5430745800000,
		gdate: [2142, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 1, 4]
		},
		gtime: 5430745800000
	},
	{
		sdate: [1520, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 29],
			Dow: 1,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5431955400000,
		gdate: [2142, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 1, 18]
		},
		gtime: 5431955400000
	},
	{
		sdate: [1520, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 10, 30],
			Dow: 2,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5432041800000,
		gdate: [2142, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 1, 19]
		},
		gtime: 5432041800000
	},
	{
		sdate: [1520, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 1],
			Dow: 3,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 5432128200000,
		gdate: [2142, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 1, 20]
		},
		gtime: 5432128200000
	},
	{
		sdate: [1520, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 2],
			Dow: 4,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1520],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 5432214600000,
		gdate: [2142, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 1, 21]
		},
		gtime: 5432214600000
	},
	{
		sdate: [1520, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 3],
			Dow: 5,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1520],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 5432301000000,
		gdate: [2142, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 1, 22]
		},
		gtime: 5432301000000
	},
	{
		sdate: [1520, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 4],
			Dow: 6,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 53,
			Woy: [49, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5432387400000,
		gdate: [2142, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 1, 23]
		},
		gtime: 5432387400000
	},
	{
		sdate: [1520, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 15],
			Dow: 3,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 53,
			Woy: [51, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5433337800000,
		gdate: [2142, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 6]
		},
		gtime: 5433337800000
	},
	{
		sdate: [1520, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 25],
			Dow: 6,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 53,
			Woy: [52, 1520],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5434201800000,
		gdate: [2142, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 16]
		},
		gtime: 5434201800000
	},
	{
		sdate: [1520, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 26],
			Dow: 0,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1520],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5434288200000,
		gdate: [2142, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 17]
		},
		gtime: 5434288200000
	},
	{
		sdate: [1520, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 27],
			Dow: 1,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1520],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5434374600000,
		gdate: [2142, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 18]
		},
		gtime: 5434374600000
	},
	{
		sdate: [1520, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 28],
			Dow: 2,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1520],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5434461000000,
		gdate: [2142, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 19]
		},
		gtime: 5434461000000
	},
	{
		sdate: [1520, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 29],
			Dow: 3,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 53,
			Woy: [53, 1520],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 5434547400000,
		gdate: [2142, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 20]
		},
		gtime: 5434547400000
	},

	{
		sdate: [1540, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 1],
			Dow: 6,
			Diy: 366,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1539],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6034163400000,
		gdate: [2161, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 20]
		},
		gtime: 6034163400000
	},
	{
		sdate: [1540, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 2],
			Dow: 0,
			Diy: 366,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 6034249800000,
		gdate: [2161, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 21]
		},
		gtime: 6034249800000
	},
	{
		sdate: [1540, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 3],
			Dow: 1,
			Diy: 366,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 6034332600000,
		gdate: [2161, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 22]
		},
		gtime: 6034332600000
	},
	{
		sdate: [1540, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 4],
			Dow: 2,
			Diy: 366,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6034419000000,
		gdate: [2161, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 23]
		},
		gtime: 6034419000000
	},
	{
		sdate: [1540, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 5],
			Dow: 3,
			Diy: 366,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6034505400000,
		gdate: [2161, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 24]
		},
		gtime: 6034505400000
	},
	{
		sdate: [1540, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 6],
			Dow: 4,
			Diy: 366,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6034591800000,
		gdate: [2161, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 25]
		},
		gtime: 6034591800000
	},
	{
		sdate: [1540, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 7],
			Dow: 5,
			Diy: 366,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6034678200000,
		gdate: [2161, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 26]
		},
		gtime: 6034678200000
	},
	{
		sdate: [1540, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 15],
			Dow: 6,
			Diy: 366,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6035369400000,
		gdate: [2161, 4, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 3, 3]
		},
		gtime: 6035369400000
	},
	{
		sdate: [1540, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 29],
			Dow: 6,
			Diy: 366,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6036579000000,
		gdate: [2161, 4, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 3, 17]
		},
		gtime: 6036579000000
	},
	{
		sdate: [1540, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 30],
			Dow: 0,
			Diy: 366,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6036665400000,
		gdate: [2161, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 3, 18]
		},
		gtime: 6036665400000
	},
	{
		sdate: [1540, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 31],
			Dow: 1,
			Diy: 366,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6036751800000,
		gdate: [2161, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 3, 19]
		},
		gtime: 6036751800000
	},
	{
		sdate: [1540, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 1],
			Dow: 2,
			Diy: 366,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6036838200000,
		gdate: [2161, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 3, 20]
		},
		gtime: 6036838200000
	},
	{
		sdate: [1540, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 2],
			Dow: 3,
			Diy: 366,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 6036924600000,
		gdate: [2161, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 3, 21]
		},
		gtime: 6036924600000
	},
	{
		sdate: [1540, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 15],
			Dow: 2,
			Diy: 366,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6038047800000,
		gdate: [2161, 5, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 4, 4]
		},
		gtime: 6038047800000
	},
	{
		sdate: [1540, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 30],
			Dow: 3,
			Diy: 366,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6039343800000,
		gdate: [2161, 5, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 4, 19]
		},
		gtime: 6039343800000
	},
	{
		sdate: [1540, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 1, 31],
			Dow: 4,
			Diy: 366,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6039430200000,
		gdate: [2161, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 4, 20]
		},
		gtime: 6039430200000
	},
	{
		sdate: [1540, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 1],
			Dow: 5,
			Diy: 366,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6039516600000,
		gdate: [2161, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 4, 21]
		},
		gtime: 6039516600000
	},
	{
		sdate: [1540, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 2],
			Dow: 6,
			Diy: 366,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 6039603000000,
		gdate: [2161, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 4, 22]
		},
		gtime: 6039603000000
	},
	{
		sdate: [1540, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 15],
			Dow: 5,
			Diy: 366,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6040726200000,
		gdate: [2161, 6, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 5, 4]
		},
		gtime: 6040726200000
	},
	{
		sdate: [1540, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 30],
			Dow: 6,
			Diy: 366,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6042022200000,
		gdate: [2161, 6, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 5, 19]
		},
		gtime: 6042022200000
	},
	{
		sdate: [1540, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 2, 31],
			Dow: 0,
			Diy: 366,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 6042108600000,
		gdate: [2161, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 5, 20]
		},
		gtime: 6042108600000
	},
	{
		sdate: [1540, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 1],
			Dow: 1,
			Diy: 366,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6042195000000,
		gdate: [2161, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 5, 21]
		},
		gtime: 6042195000000
	},
	{
		sdate: [1540, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 2],
			Dow: 2,
			Diy: 366,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 6042281400000,
		gdate: [2161, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 5, 22]
		},
		gtime: 6042281400000
	},
	{
		sdate: [1540, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 15],
			Dow: 1,
			Diy: 366,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6043404600000,
		gdate: [2161, 7, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 6, 5]
		},
		gtime: 6043404600000
	},
	{
		sdate: [1540, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 30],
			Dow: 2,
			Diy: 366,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6044700600000,
		gdate: [2161, 7, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 6, 20]
		},
		gtime: 6044700600000
	},
	{
		sdate: [1540, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 3, 31],
			Dow: 3,
			Diy: 366,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6044787000000,
		gdate: [2161, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 6, 21]
		},
		gtime: 6044787000000
	},
	{
		sdate: [1540, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 1],
			Dow: 4,
			Diy: 366,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6044873400000,
		gdate: [2161, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 6, 22]
		},
		gtime: 6044873400000
	},
	{
		sdate: [1540, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 2],
			Dow: 5,
			Diy: 366,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 6044959800000,
		gdate: [2161, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 6, 23]
		},
		gtime: 6044959800000
	},
	{
		sdate: [1540, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 15],
			Dow: 4,
			Diy: 366,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6046083000000,
		gdate: [2161, 8, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 7, 5]
		},
		gtime: 6046083000000
	},
	{
		sdate: [1540, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 30],
			Dow: 5,
			Diy: 366,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6047379000000,
		gdate: [2161, 8, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 7, 20]
		},
		gtime: 6047379000000
	},
	{
		sdate: [1540, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 4, 31],
			Dow: 6,
			Diy: 366,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6047465400000,
		gdate: [2161, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 7, 21]
		},
		gtime: 6047465400000
	},
	{
		sdate: [1540, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 1],
			Dow: 0,
			Diy: 366,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6047551800000,
		gdate: [2161, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 7, 22]
		},
		gtime: 6047551800000
	},
	{
		sdate: [1540, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 2],
			Dow: 1,
			Diy: 366,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 6047638200000,
		gdate: [2161, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 7, 23]
		},
		gtime: 6047638200000
	},
	{
		sdate: [1540, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 15],
			Dow: 0,
			Diy: 366,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6048761400000,
		gdate: [2161, 9, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 8, 5]
		},
		gtime: 6048761400000
	},
	{
		sdate: [1540, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 29],
			Dow: 0,
			Diy: 366,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6049971000000,
		gdate: [2161, 9, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 8, 19]
		},
		gtime: 6049971000000
	},
	{
		sdate: [1540, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 5, 30],
			Dow: 1,
			Diy: 366,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6050057400000,
		gdate: [2161, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 8, 20]
		},
		gtime: 6050057400000
	},
	{
		sdate: [1540, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 1],
			Dow: 3,
			Diy: 366,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 6050233800000,
		gdate: [2161, 9, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 8, 22]
		},
		gtime: 6050233800000
	},
	{
		sdate: [1540, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 2],
			Dow: 4,
			Diy: 366,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 6050320200000,
		gdate: [2161, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 8, 23]
		},
		gtime: 6050320200000
	},
	{
		sdate: [1540, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 15],
			Dow: 3,
			Diy: 366,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6051443400000,
		gdate: [2161, 10, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 9, 6]
		},
		gtime: 6051443400000
	},
	{
		sdate: [1540, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 29],
			Dow: 3,
			Diy: 366,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6052653000000,
		gdate: [2161, 10, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 9, 20]
		},
		gtime: 6052653000000
	},
	{
		sdate: [1540, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 6, 30],
			Dow: 4,
			Diy: 366,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6052739400000,
		gdate: [2161, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 9, 21]
		},
		gtime: 6052739400000
	},
	{
		sdate: [1540, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 1],
			Dow: 5,
			Diy: 366,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 6052825800000,
		gdate: [2161, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 9, 22]
		},
		gtime: 6052825800000
	},
	{
		sdate: [1540, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 2],
			Dow: 6,
			Diy: 366,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 6052912200000,
		gdate: [2161, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 9, 23]
		},
		gtime: 6052912200000
	},
	{
		sdate: [1540, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 15],
			Dow: 5,
			Diy: 366,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6054035400000,
		gdate: [2161, 11, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 10, 5]
		},
		gtime: 6054035400000
	},
	{
		sdate: [1540, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 29],
			Dow: 5,
			Diy: 366,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6055245000000,
		gdate: [2161, 11, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 10, 19]
		},
		gtime: 6055245000000
	},
	{
		sdate: [1540, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 7, 30],
			Dow: 6,
			Diy: 366,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6055331400000,
		gdate: [2161, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 10, 20]
		},
		gtime: 6055331400000
	},
	{
		sdate: [1540, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 1],
			Dow: 0,
			Diy: 366,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 6055417800000,
		gdate: [2161, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 10, 21]
		},
		gtime: 6055417800000
	},
	{
		sdate: [1540, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 2],
			Dow: 1,
			Diy: 366,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 6055504200000,
		gdate: [2161, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 10, 22]
		},
		gtime: 6055504200000
	},
	{
		sdate: [1540, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 15],
			Dow: 0,
			Diy: 366,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6056627400000,
		gdate: [2161, 12, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 11, 5]
		},
		gtime: 6056627400000
	},
	{
		sdate: [1540, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 29],
			Dow: 0,
			Diy: 366,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6057837000000,
		gdate: [2161, 12, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 11, 19]
		},
		gtime: 6057837000000
	},
	{
		sdate: [1540, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 8, 30],
			Dow: 1,
			Diy: 366,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 6057923400000,
		gdate: [2161, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 11, 20]
		},
		gtime: 6057923400000
	},
	{
		sdate: [1540, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 1],
			Dow: 2,
			Diy: 366,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 6058009800000,
		gdate: [2161, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 11, 21]
		},
		gtime: 6058009800000
	},
	{
		sdate: [1540, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 2],
			Dow: 3,
			Diy: 366,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 6058096200000,
		gdate: [2161, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 11, 22]
		},
		gtime: 6058096200000
	},
	{
		sdate: [1540, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 15],
			Dow: 2,
			Diy: 366,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6059219400000,
		gdate: [2162, 1, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 0, 4]
		},
		gtime: 6059219400000
	},
	{
		sdate: [1540, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 29],
			Dow: 2,
			Diy: 366,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6060429000000,
		gdate: [2162, 1, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 0, 18]
		},
		gtime: 6060429000000
	},
	{
		sdate: [1540, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 9, 30],
			Dow: 3,
			Diy: 366,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6060515400000,
		gdate: [2162, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 0, 19]
		},
		gtime: 6060515400000
	},
	{
		sdate: [1540, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 1],
			Dow: 4,
			Diy: 366,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 6060601800000,
		gdate: [2162, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 0, 20]
		},
		gtime: 6060601800000
	},
	{
		sdate: [1540, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 2],
			Dow: 5,
			Diy: 366,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 6060688200000,
		gdate: [2162, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 0, 21]
		},
		gtime: 6060688200000
	},
	{
		sdate: [1540, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 15],
			Dow: 4,
			Diy: 366,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6061811400000,
		gdate: [2162, 2, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 1, 3]
		},
		gtime: 6061811400000
	},
	{
		sdate: [1540, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 29],
			Dow: 4,
			Diy: 366,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6063021000000,
		gdate: [2162, 2, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 1, 17]
		},
		gtime: 6063021000000
	},
	{
		sdate: [1540, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 10, 30],
			Dow: 5,
			Diy: 366,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6063107400000,
		gdate: [2162, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 1, 18]
		},
		gtime: 6063107400000
	},
	{
		sdate: [1540, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 1],
			Dow: 6,
			Diy: 366,
			Doy: 336,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 6063193800000,
		gdate: [2162, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 1, 19]
		},
		gtime: 6063193800000
	},
	{
		sdate: [1540, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 2],
			Dow: 0,
			Diy: 366,
			Doy: 337,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1540],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 6063280200000,
		gdate: [2162, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 1, 20]
		},
		gtime: 6063280200000
	},
	{
		sdate: [1540, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 3],
			Dow: 1,
			Diy: 366,
			Doy: 338,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1540],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 6063366600000,
		gdate: [2162, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 1, 21]
		},
		gtime: 6063366600000
	},
	{
		sdate: [1540, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 4],
			Dow: 2,
			Diy: 366,
			Doy: 339,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6063453000000,
		gdate: [2162, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 1, 22]
		},
		gtime: 6063453000000
	},
	{
		sdate: [1540, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 15],
			Dow: 6,
			Diy: 366,
			Doy: 350,
			Dim: 30,
			Wiy: 52,
			Woy: [50, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6064403400000,
		gdate: [2162, 3, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 5]
		},
		gtime: 6064403400000
	},
	{
		sdate: [1540, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 25],
			Dow: 2,
			Diy: 366,
			Doy: 360,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1540],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6065267400000,
		gdate: [2162, 3, 15, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 15]
		},
		gtime: 6065267400000
	},
	{
		sdate: [1540, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 26],
			Dow: 3,
			Diy: 366,
			Doy: 361,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1540],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6065353800000,
		gdate: [2162, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 16]
		},
		gtime: 6065353800000
	},
	{
		sdate: [1540, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 27],
			Dow: 4,
			Diy: 366,
			Doy: 362,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1540],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6065440200000,
		gdate: [2162, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 17]
		},
		gtime: 6065440200000
	},
	{
		sdate: [1540, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 28],
			Dow: 5,
			Diy: 366,
			Doy: 363,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1540],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6065526600000,
		gdate: [2162, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 18]
		},
		gtime: 6065526600000
	},
	{
		sdate: [1540, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 29],
			Dow: 6,
			Diy: 366,
			Doy: 364,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1540],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6065613000000,
		gdate: [2162, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 19]
		},
		gtime: 6065613000000
	},
	{
		sdate: [1540, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 30],
			Dow: 0,
			Diy: 366,
			Doy: 365,
			Dim: 30,
			Wiy: 52,
			Woy: [1, 1541],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6065699400000,
		gdate: [2162, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 20]
		},
		gtime: 6065699400000
	},
	{
		sdate: [1560, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 1],
			Dow: 3,
			Diy: 366,
			Doy: 0,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6665315400000,
		gdate: [2181, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 20]
		},
		gtime: 6665315400000
	},
	{
		sdate: [1560, 1, 2, 1, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 2],
			Dow: 4,
			Diy: 366,
			Doy: 1,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 6665401800000,
		gdate: [2181, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 21]
		},
		gtime: 6665401800000
	},
	{
		sdate: [1560, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 3],
			Dow: 5,
			Diy: 366,
			Doy: 2,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 6665484600000,
		gdate: [2181, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 22]
		},
		gtime: 6665484600000
	},
	{
		sdate: [1560, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 4],
			Dow: 6,
			Diy: 366,
			Doy: 3,
			Dim: 31,
			Wiy: 53,
			Woy: [1, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6665571000000,
		gdate: [2181, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 23]
		},
		gtime: 6665571000000
	},
	{
		sdate: [1560, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 5],
			Dow: 0,
			Diy: 366,
			Doy: 4,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6665657400000,
		gdate: [2181, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 24]
		},
		gtime: 6665657400000
	},
	{
		sdate: [1560, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 6],
			Dow: 1,
			Diy: 366,
			Doy: 5,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6665743800000,
		gdate: [2181, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 25]
		},
		gtime: 6665743800000
	},
	{
		sdate: [1560, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 7],
			Dow: 2,
			Diy: 366,
			Doy: 6,
			Dim: 31,
			Wiy: 53,
			Woy: [2, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6665830200000,
		gdate: [2181, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 26]
		},
		gtime: 6665830200000
	},
	{
		sdate: [1560, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 15],
			Dow: 3,
			Diy: 366,
			Doy: 14,
			Dim: 31,
			Wiy: 53,
			Woy: [3, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6666521400000,
		gdate: [2181, 4, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 3, 3]
		},
		gtime: 6666521400000
	},
	{
		sdate: [1560, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 29],
			Dow: 3,
			Diy: 366,
			Doy: 28,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6667731000000,
		gdate: [2181, 4, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 3, 17]
		},
		gtime: 6667731000000
	},
	{
		sdate: [1560, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 30],
			Dow: 4,
			Diy: 366,
			Doy: 29,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6667817400000,
		gdate: [2181, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 3, 18]
		},
		gtime: 6667817400000
	},
	{
		sdate: [1560, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 31],
			Dow: 5,
			Diy: 366,
			Doy: 30,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6667903800000,
		gdate: [2181, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 3, 19]
		},
		gtime: 6667903800000
	},
	{
		sdate: [1560, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 1],
			Dow: 6,
			Diy: 366,
			Doy: 31,
			Dim: 31,
			Wiy: 53,
			Woy: [5, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6667990200000,
		gdate: [2181, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 3, 20]
		},
		gtime: 6667990200000
	},
	{
		sdate: [1560, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 2],
			Dow: 0,
			Diy: 366,
			Doy: 32,
			Dim: 31,
			Wiy: 53,
			Woy: [6, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 6668076600000,
		gdate: [2181, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 3, 21]
		},
		gtime: 6668076600000
	},
	{
		sdate: [1560, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 15],
			Dow: 6,
			Diy: 366,
			Doy: 45,
			Dim: 31,
			Wiy: 53,
			Woy: [7, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6669199800000,
		gdate: [2181, 5, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 4, 4]
		},
		gtime: 6669199800000
	},
	{
		sdate: [1560, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 30],
			Dow: 0,
			Diy: 366,
			Doy: 60,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6670495800000,
		gdate: [2181, 5, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 4, 19]
		},
		gtime: 6670495800000
	},
	{
		sdate: [1560, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 1, 31],
			Dow: 1,
			Diy: 366,
			Doy: 61,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6670582200000,
		gdate: [2181, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 4, 20]
		},
		gtime: 6670582200000
	},
	{
		sdate: [1560, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 1],
			Dow: 2,
			Diy: 366,
			Doy: 62,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 6670668600000,
		gdate: [2181, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 4, 21]
		},
		gtime: 6670668600000
	},
	{
		sdate: [1560, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 2],
			Dow: 3,
			Diy: 366,
			Doy: 63,
			Dim: 31,
			Wiy: 53,
			Woy: [10, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 6670755000000,
		gdate: [2181, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 4, 22]
		},
		gtime: 6670755000000
	},
	{
		sdate: [1560, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 15],
			Dow: 2,
			Diy: 366,
			Doy: 76,
			Dim: 31,
			Wiy: 53,
			Woy: [12, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6671878200000,
		gdate: [2181, 6, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 5, 4]
		},
		gtime: 6671878200000
	},
	{
		sdate: [1560, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 30],
			Dow: 3,
			Diy: 366,
			Doy: 91,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 6673174200000,
		gdate: [2181, 6, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 5, 19]
		},
		gtime: 6673174200000
	},
	{
		sdate: [1560, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 2, 31],
			Dow: 4,
			Diy: 366,
			Doy: 92,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 6673260600000,
		gdate: [2181, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 5, 20]
		},
		gtime: 6673260600000
	},
	{
		sdate: [1560, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 1],
			Dow: 5,
			Diy: 366,
			Doy: 93,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6673347000000,
		gdate: [2181, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 5, 21]
		},
		gtime: 6673347000000
	},
	{
		sdate: [1560, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 2],
			Dow: 6,
			Diy: 366,
			Doy: 94,
			Dim: 31,
			Wiy: 53,
			Woy: [14, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 6673433400000,
		gdate: [2181, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 5, 22]
		},
		gtime: 6673433400000
	},
	{
		sdate: [1560, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 15],
			Dow: 5,
			Diy: 366,
			Doy: 107,
			Dim: 31,
			Wiy: 53,
			Woy: [16, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6674556600000,
		gdate: [2181, 7, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 6, 5]
		},
		gtime: 6674556600000
	},
	{
		sdate: [1560, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 30],
			Dow: 6,
			Diy: 366,
			Doy: 122,
			Dim: 31,
			Wiy: 53,
			Woy: [18, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6675852600000,
		gdate: [2181, 7, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 6, 20]
		},
		gtime: 6675852600000
	},
	{
		sdate: [1560, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 3, 31],
			Dow: 0,
			Diy: 366,
			Doy: 123,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6675939000000,
		gdate: [2181, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 6, 21]
		},
		gtime: 6675939000000
	},
	{
		sdate: [1560, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 1],
			Dow: 1,
			Diy: 366,
			Doy: 124,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6676025400000,
		gdate: [2181, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 6, 22]
		},
		gtime: 6676025400000
	},
	{
		sdate: [1560, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 2],
			Dow: 2,
			Diy: 366,
			Doy: 125,
			Dim: 31,
			Wiy: 53,
			Woy: [19, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 6676111800000,
		gdate: [2181, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 6, 23]
		},
		gtime: 6676111800000
	},
	{
		sdate: [1560, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 15],
			Dow: 1,
			Diy: 366,
			Doy: 138,
			Dim: 31,
			Wiy: 53,
			Woy: [21, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6677235000000,
		gdate: [2181, 8, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 7, 5]
		},
		gtime: 6677235000000
	},
	{
		sdate: [1560, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 30],
			Dow: 2,
			Diy: 366,
			Doy: 153,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6678531000000,
		gdate: [2181, 8, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 7, 20]
		},
		gtime: 6678531000000
	},
	{
		sdate: [1560, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 4, 31],
			Dow: 3,
			Diy: 366,
			Doy: 154,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6678617400000,
		gdate: [2181, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 7, 21]
		},
		gtime: 6678617400000
	},
	{
		sdate: [1560, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 1],
			Dow: 4,
			Diy: 366,
			Doy: 155,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 6678703800000,
		gdate: [2181, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 7, 22]
		},
		gtime: 6678703800000
	},
	{
		sdate: [1560, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 2],
			Dow: 5,
			Diy: 366,
			Doy: 156,
			Dim: 31,
			Wiy: 53,
			Woy: [23, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 6678790200000,
		gdate: [2181, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 7, 23]
		},
		gtime: 6678790200000
	},
	{
		sdate: [1560, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 15],
			Dow: 4,
			Diy: 366,
			Doy: 169,
			Dim: 31,
			Wiy: 53,
			Woy: [25, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6679913400000,
		gdate: [2181, 9, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 8, 5]
		},
		gtime: 6679913400000
	},
	{
		sdate: [1560, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 29],
			Dow: 4,
			Diy: 366,
			Doy: 183,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6681123000000,
		gdate: [2181, 9, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 8, 19]
		},
		gtime: 6681123000000
	},
	{
		sdate: [1560, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 5, 30],
			Dow: 5,
			Diy: 366,
			Doy: 184,
			Dim: 31,
			Wiy: 53,
			Woy: [27, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 6681209400000,
		gdate: [2181, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 8, 20]
		},
		gtime: 6681209400000
	},
	{
		sdate: [1560, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 1],
			Dow: 0,
			Diy: 366,
			Doy: 186,
			Dim: 30,
			Wiy: 53,
			Woy: [28, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 6681385800000,
		gdate: [2181, 9, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 8, 22]
		},
		gtime: 6681385800000
	},
	{
		sdate: [1560, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 2],
			Dow: 1,
			Diy: 366,
			Doy: 187,
			Dim: 30,
			Wiy: 53,
			Woy: [28, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 6681472200000,
		gdate: [2181, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 8, 23]
		},
		gtime: 6681472200000
	},
	{
		sdate: [1560, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 15],
			Dow: 0,
			Diy: 366,
			Doy: 200,
			Dim: 30,
			Wiy: 53,
			Woy: [30, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6682595400000,
		gdate: [2181, 10, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 9, 6]
		},
		gtime: 6682595400000
	},
	{
		sdate: [1560, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 29],
			Dow: 0,
			Diy: 366,
			Doy: 214,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6683805000000,
		gdate: [2181, 10, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 9, 20]
		},
		gtime: 6683805000000
	},
	{
		sdate: [1560, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 6, 30],
			Dow: 1,
			Diy: 366,
			Doy: 215,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6683891400000,
		gdate: [2181, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 9, 21]
		},
		gtime: 6683891400000
	},
	{
		sdate: [1560, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 1],
			Dow: 2,
			Diy: 366,
			Doy: 216,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 6683977800000,
		gdate: [2181, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 9, 22]
		},
		gtime: 6683977800000
	},
	{
		sdate: [1560, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 2],
			Dow: 3,
			Diy: 366,
			Doy: 217,
			Dim: 30,
			Wiy: 53,
			Woy: [32, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 6684064200000,
		gdate: [2181, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 9, 23]
		},
		gtime: 6684064200000
	},
	{
		sdate: [1560, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 15],
			Dow: 2,
			Diy: 366,
			Doy: 230,
			Dim: 30,
			Wiy: 53,
			Woy: [34, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6685187400000,
		gdate: [2181, 11, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 10, 5]
		},
		gtime: 6685187400000
	},
	{
		sdate: [1560, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 29],
			Dow: 2,
			Diy: 366,
			Doy: 244,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6686397000000,
		gdate: [2181, 11, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 10, 19]
		},
		gtime: 6686397000000
	},
	{
		sdate: [1560, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 7, 30],
			Dow: 3,
			Diy: 366,
			Doy: 245,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6686483400000,
		gdate: [2181, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 10, 20]
		},
		gtime: 6686483400000
	},
	{
		sdate: [1560, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 1],
			Dow: 4,
			Diy: 366,
			Doy: 246,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 6686569800000,
		gdate: [2181, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 10, 21]
		},
		gtime: 6686569800000
	},
	{
		sdate: [1560, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 2],
			Dow: 5,
			Diy: 366,
			Doy: 247,
			Dim: 30,
			Wiy: 53,
			Woy: [36, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 6686656200000,
		gdate: [2181, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 10, 22]
		},
		gtime: 6686656200000
	},
	{
		sdate: [1560, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 15],
			Dow: 4,
			Diy: 366,
			Doy: 260,
			Dim: 30,
			Wiy: 53,
			Woy: [38, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6687779400000,
		gdate: [2181, 12, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 11, 5]
		},
		gtime: 6687779400000
	},
	{
		sdate: [1560, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 29],
			Dow: 4,
			Diy: 366,
			Doy: 274,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 6688989000000,
		gdate: [2181, 12, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 11, 19]
		},
		gtime: 6688989000000
	},
	{
		sdate: [1560, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 8, 30],
			Dow: 5,
			Diy: 366,
			Doy: 275,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 6689075400000,
		gdate: [2181, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 11, 20]
		},
		gtime: 6689075400000
	},
	{
		sdate: [1560, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 1],
			Dow: 6,
			Diy: 366,
			Doy: 276,
			Dim: 30,
			Wiy: 53,
			Woy: [40, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 6689161800000,
		gdate: [2181, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 11, 21]
		},
		gtime: 6689161800000
	},
	{
		sdate: [1560, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 2],
			Dow: 0,
			Diy: 366,
			Doy: 277,
			Dim: 30,
			Wiy: 53,
			Woy: [41, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 6689248200000,
		gdate: [2181, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 11, 22]
		},
		gtime: 6689248200000
	},
	{
		sdate: [1560, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 15],
			Dow: 6,
			Diy: 366,
			Doy: 290,
			Dim: 30,
			Wiy: 53,
			Woy: [42, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6690371400000,
		gdate: [2182, 1, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 0, 4]
		},
		gtime: 6690371400000
	},
	{
		sdate: [1560, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 29],
			Dow: 6,
			Diy: 366,
			Doy: 304,
			Dim: 30,
			Wiy: 53,
			Woy: [44, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6691581000000,
		gdate: [2182, 1, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 0, 18]
		},
		gtime: 6691581000000
	},
	{
		sdate: [1560, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 9, 30],
			Dow: 0,
			Diy: 366,
			Doy: 305,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6691667400000,
		gdate: [2182, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 0, 19]
		},
		gtime: 6691667400000
	},
	{
		sdate: [1560, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 1],
			Dow: 1,
			Diy: 366,
			Doy: 306,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 6691753800000,
		gdate: [2182, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 0, 20]
		},
		gtime: 6691753800000
	},
	{
		sdate: [1560, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 2],
			Dow: 2,
			Diy: 366,
			Doy: 307,
			Dim: 30,
			Wiy: 53,
			Woy: [45, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 6691840200000,
		gdate: [2182, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 0, 21]
		},
		gtime: 6691840200000
	},
	{
		sdate: [1560, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 15],
			Dow: 1,
			Diy: 366,
			Doy: 320,
			Dim: 30,
			Wiy: 53,
			Woy: [47, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6692963400000,
		gdate: [2182, 2, 3, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 1, 3]
		},
		gtime: 6692963400000
	},
	{
		sdate: [1560, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 29],
			Dow: 1,
			Diy: 366,
			Doy: 334,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6694173000000,
		gdate: [2182, 2, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 1, 17]
		},
		gtime: 6694173000000
	},
	{
		sdate: [1560, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 10, 30],
			Dow: 2,
			Diy: 366,
			Doy: 335,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6694259400000,
		gdate: [2182, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 1, 18]
		},
		gtime: 6694259400000
	},
	{
		sdate: [1560, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 1],
			Dow: 3,
			Diy: 366,
			Doy: 336,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 6694345800000,
		gdate: [2182, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 1, 19]
		},
		gtime: 6694345800000
	},
	{
		sdate: [1560, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 2],
			Dow: 4,
			Diy: 366,
			Doy: 337,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 6694432200000,
		gdate: [2182, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 1, 20]
		},
		gtime: 6694432200000
	},
	{
		sdate: [1560, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 3],
			Dow: 5,
			Diy: 366,
			Doy: 338,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1560],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 6694518600000,
		gdate: [2182, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 1, 21]
		},
		gtime: 6694518600000
	},
	{
		sdate: [1560, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 4],
			Dow: 6,
			Diy: 366,
			Doy: 339,
			Dim: 30,
			Wiy: 53,
			Woy: [49, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6694605000000,
		gdate: [2182, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 1, 22]
		},
		gtime: 6694605000000
	},
	{
		sdate: [1560, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 15],
			Dow: 3,
			Diy: 366,
			Doy: 350,
			Dim: 30,
			Wiy: 53,
			Woy: [51, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6695555400000,
		gdate: [2182, 3, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 5]
		},
		gtime: 6695555400000
	},
	{
		sdate: [1560, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 25],
			Dow: 6,
			Diy: 366,
			Doy: 360,
			Dim: 30,
			Wiy: 53,
			Woy: [52, 1560],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6696419400000,
		gdate: [2182, 3, 15, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 15]
		},
		gtime: 6696419400000
	},
	{
		sdate: [1560, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 26],
			Dow: 0,
			Diy: 366,
			Doy: 361,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1560],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6696505800000,
		gdate: [2182, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 16]
		},
		gtime: 6696505800000
	},
	{
		sdate: [1560, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 27],
			Dow: 1,
			Diy: 366,
			Doy: 362,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1560],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6696592200000,
		gdate: [2182, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 17]
		},
		gtime: 6696592200000
	},
	{
		sdate: [1560, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 28],
			Dow: 2,
			Diy: 366,
			Doy: 363,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1560],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6696678600000,
		gdate: [2182, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 18]
		},
		gtime: 6696678600000
	},
	{
		sdate: [1560, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 29],
			Dow: 3,
			Diy: 366,
			Doy: 364,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1560],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6696765000000,
		gdate: [2182, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 19]
		},
		gtime: 6696765000000
	},
	{
		sdate: [1560, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 30],
			Dow: 4,
			Diy: 366,
			Doy: 365,
			Dim: 30,
			Wiy: 53,
			Woy: [53, 1560],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 6696851400000,
		gdate: [2182, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 20]
		},
		gtime: 6696851400000
	},
	{
		sdate: [1580, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 1],
			Dow: 0,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7296467400000,
		gdate: [2201, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 21]
		},
		gtime: 7296467400000
	},
	{
		sdate: [1580, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 2],
			Dow: 1,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 7296550200000,
		gdate: [2201, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 22]
		},
		gtime: 7296550200000
	},
	{
		sdate: [1580, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 3],
			Dow: 2,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 7296636600000,
		gdate: [2201, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 23]
		},
		gtime: 7296636600000
	},
	{
		sdate: [1580, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 4],
			Dow: 3,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7296723000000,
		gdate: [2201, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 24]
		},
		gtime: 7296723000000
	},
	{
		sdate: [1580, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 5],
			Dow: 4,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7296809400000,
		gdate: [2201, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 25]
		},
		gtime: 7296809400000
	},
	{
		sdate: [1580, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 6],
			Dow: 5,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7296895800000,
		gdate: [2201, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 26]
		},
		gtime: 7296895800000
	},
	{
		sdate: [1580, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 7],
			Dow: 6,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7296982200000,
		gdate: [2201, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 27]
		},
		gtime: 7296982200000
	},
	{
		sdate: [1580, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 15],
			Dow: 0,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7297673400000,
		gdate: [2201, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 3, 4]
		},
		gtime: 7297673400000
	},
	{
		sdate: [1580, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 29],
			Dow: 0,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7298883000000,
		gdate: [2201, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 3, 18]
		},
		gtime: 7298883000000
	},
	{
		sdate: [1580, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 30],
			Dow: 1,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7298969400000,
		gdate: [2201, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 3, 19]
		},
		gtime: 7298969400000
	},
	{
		sdate: [1580, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 31],
			Dow: 2,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7299055800000,
		gdate: [2201, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 3, 20]
		},
		gtime: 7299055800000
	},
	{
		sdate: [1580, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 1],
			Dow: 3,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7299142200000,
		gdate: [2201, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 3, 21]
		},
		gtime: 7299142200000
	},
	{
		sdate: [1580, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 2],
			Dow: 4,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 7299228600000,
		gdate: [2201, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 3, 22]
		},
		gtime: 7299228600000
	},
	{
		sdate: [1580, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 15],
			Dow: 3,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7300351800000,
		gdate: [2201, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 4, 5]
		},
		gtime: 7300351800000
	},
	{
		sdate: [1580, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 30],
			Dow: 4,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7301647800000,
		gdate: [2201, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 4, 20]
		},
		gtime: 7301647800000
	},
	{
		sdate: [1580, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 1, 31],
			Dow: 5,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7301734200000,
		gdate: [2201, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 4, 21]
		},
		gtime: 7301734200000
	},
	{
		sdate: [1580, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 1],
			Dow: 6,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7301820600000,
		gdate: [2201, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 4, 22]
		},
		gtime: 7301820600000
	},
	{
		sdate: [1580, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 2],
			Dow: 0,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 7301907000000,
		gdate: [2201, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 4, 23]
		},
		gtime: 7301907000000
	},
	{
		sdate: [1580, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 15],
			Dow: 6,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7303030200000,
		gdate: [2201, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 5, 5]
		},
		gtime: 7303030200000
	},
	{
		sdate: [1580, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 30],
			Dow: 0,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7304326200000,
		gdate: [2201, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 5, 20]
		},
		gtime: 7304326200000
	},
	{
		sdate: [1580, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 2, 31],
			Dow: 1,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 7304412600000,
		gdate: [2201, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 5, 21]
		},
		gtime: 7304412600000
	},
	{
		sdate: [1580, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 1],
			Dow: 2,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7304499000000,
		gdate: [2201, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 5, 22]
		},
		gtime: 7304499000000
	},
	{
		sdate: [1580, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 2],
			Dow: 3,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 7304585400000,
		gdate: [2201, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 5, 23]
		},
		gtime: 7304585400000
	},
	{
		sdate: [1580, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 15],
			Dow: 2,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7305708600000,
		gdate: [2201, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 6, 6]
		},
		gtime: 7305708600000
	},
	{
		sdate: [1580, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 30],
			Dow: 3,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7307004600000,
		gdate: [2201, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 6, 21]
		},
		gtime: 7307004600000
	},
	{
		sdate: [1580, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 3, 31],
			Dow: 4,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7307091000000,
		gdate: [2201, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 6, 22]
		},
		gtime: 7307091000000
	},
	{
		sdate: [1580, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 1],
			Dow: 5,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7307177400000,
		gdate: [2201, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 6, 23]
		},
		gtime: 7307177400000
	},
	{
		sdate: [1580, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 2],
			Dow: 6,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 7307263800000,
		gdate: [2201, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 6, 24]
		},
		gtime: 7307263800000
	},
	{
		sdate: [1580, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 15],
			Dow: 5,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7308387000000,
		gdate: [2201, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 7, 6]
		},
		gtime: 7308387000000
	},
	{
		sdate: [1580, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 30],
			Dow: 6,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7309683000000,
		gdate: [2201, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 7, 21]
		},
		gtime: 7309683000000
	},
	{
		sdate: [1580, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 4, 31],
			Dow: 0,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7309769400000,
		gdate: [2201, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 7, 22]
		},
		gtime: 7309769400000
	},
	{
		sdate: [1580, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 1],
			Dow: 1,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7309855800000,
		gdate: [2201, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 7, 23]
		},
		gtime: 7309855800000
	},
	{
		sdate: [1580, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 2],
			Dow: 2,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 7309942200000,
		gdate: [2201, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 7, 24]
		},
		gtime: 7309942200000
	},
	{
		sdate: [1580, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 15],
			Dow: 1,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7311065400000,
		gdate: [2201, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 8, 6]
		},
		gtime: 7311065400000
	},
	{
		sdate: [1580, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 29],
			Dow: 1,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7312275000000,
		gdate: [2201, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 8, 20]
		},
		gtime: 7312275000000
	},
	{
		sdate: [1580, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 5, 30],
			Dow: 2,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7312365000000,
		gdate: [2201, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 8, 21]
		},
		gtime: 7312365000000
	},
	{
		sdate: [1580, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 1],
			Dow: 4,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 7312537800000,
		gdate: [2201, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 8, 23]
		},
		gtime: 7312537800000
	},
	{
		sdate: [1580, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 2],
			Dow: 5,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 7312624200000,
		gdate: [2201, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 8, 24]
		},
		gtime: 7312624200000
	},
	{
		sdate: [1580, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 15],
			Dow: 4,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7313747400000,
		gdate: [2201, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 9, 7]
		},
		gtime: 7313747400000
	},
	{
		sdate: [1580, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 29],
			Dow: 4,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7314957000000,
		gdate: [2201, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 9, 21]
		},
		gtime: 7314957000000
	},
	{
		sdate: [1580, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 6, 30],
			Dow: 5,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7315043400000,
		gdate: [2201, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 9, 22]
		},
		gtime: 7315043400000
	},
	{
		sdate: [1580, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 1],
			Dow: 6,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 7315129800000,
		gdate: [2201, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 9, 23]
		},
		gtime: 7315129800000
	},
	{
		sdate: [1580, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 2],
			Dow: 0,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 7315216200000,
		gdate: [2201, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 9, 24]
		},
		gtime: 7315216200000
	},
	{
		sdate: [1580, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 15],
			Dow: 6,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7316339400000,
		gdate: [2201, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 10, 6]
		},
		gtime: 7316339400000
	},
	{
		sdate: [1580, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 29],
			Dow: 6,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7317549000000,
		gdate: [2201, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 10, 20]
		},
		gtime: 7317549000000
	},
	{
		sdate: [1580, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 7, 30],
			Dow: 0,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7317635400000,
		gdate: [2201, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 10, 21]
		},
		gtime: 7317635400000
	},
	{
		sdate: [1580, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 1],
			Dow: 1,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 7317721800000,
		gdate: [2201, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 10, 22]
		},
		gtime: 7317721800000
	},
	{
		sdate: [1580, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 2],
			Dow: 2,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 7317808200000,
		gdate: [2201, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 10, 23]
		},
		gtime: 7317808200000
	},
	{
		sdate: [1580, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 15],
			Dow: 1,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7318931400000,
		gdate: [2201, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 11, 6]
		},
		gtime: 7318931400000
	},
	{
		sdate: [1580, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 29],
			Dow: 1,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7320141000000,
		gdate: [2201, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 11, 20]
		},
		gtime: 7320141000000
	},
	{
		sdate: [1580, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 8, 30],
			Dow: 2,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 7320227400000,
		gdate: [2201, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 11, 21]
		},
		gtime: 7320227400000
	},
	{
		sdate: [1580, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 1],
			Dow: 3,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 7320313800000,
		gdate: [2201, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 11, 22]
		},
		gtime: 7320313800000
	},
	{
		sdate: [1580, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 2],
			Dow: 4,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 7320400200000,
		gdate: [2201, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 11, 23]
		},
		gtime: 7320400200000
	},
	{
		sdate: [1580, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 15],
			Dow: 3,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7321523400000,
		gdate: [2202, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 0, 5]
		},
		gtime: 7321523400000
	},
	{
		sdate: [1580, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 29],
			Dow: 3,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7322733000000,
		gdate: [2202, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 0, 19]
		},
		gtime: 7322733000000
	},
	{
		sdate: [1580, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 9, 30],
			Dow: 4,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7322819400000,
		gdate: [2202, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 0, 20]
		},
		gtime: 7322819400000
	},
	{
		sdate: [1580, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 1],
			Dow: 5,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 7322905800000,
		gdate: [2202, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 0, 21]
		},
		gtime: 7322905800000
	},
	{
		sdate: [1580, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 2],
			Dow: 6,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 7322992200000,
		gdate: [2202, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 0, 22]
		},
		gtime: 7322992200000
	},
	{
		sdate: [1580, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 15],
			Dow: 5,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7324115400000,
		gdate: [2202, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 1, 4]
		},
		gtime: 7324115400000
	},
	{
		sdate: [1580, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 29],
			Dow: 5,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7325325000000,
		gdate: [2202, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 1, 18]
		},
		gtime: 7325325000000
	},
	{
		sdate: [1580, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 10, 30],
			Dow: 6,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7325411400000,
		gdate: [2202, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 1, 19]
		},
		gtime: 7325411400000
	},
	{
		sdate: [1580, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 1],
			Dow: 0,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 7325497800000,
		gdate: [2202, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 1, 20]
		},
		gtime: 7325497800000
	},
	{
		sdate: [1580, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 2],
			Dow: 1,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1580],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 7325584200000,
		gdate: [2202, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 1, 21]
		},
		gtime: 7325584200000
	},
	{
		sdate: [1580, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 3],
			Dow: 2,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1580],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 7325670600000,
		gdate: [2202, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 1, 22]
		},
		gtime: 7325670600000
	},
	{
		sdate: [1580, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 4],
			Dow: 3,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7325757000000,
		gdate: [2202, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 1, 23]
		},
		gtime: 7325757000000
	},
	{
		sdate: [1580, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 15],
			Dow: 0,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1580],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7326707400000,
		gdate: [2202, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 6]
		},
		gtime: 7326707400000
	},
	{
		sdate: [1580, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 25],
			Dow: 3,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1580],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7327571400000,
		gdate: [2202, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 16]
		},
		gtime: 7327571400000
	},
	{
		sdate: [1580, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 26],
			Dow: 4,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1580],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7327657800000,
		gdate: [2202, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 17]
		},
		gtime: 7327657800000
	},
	{
		sdate: [1580, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 27],
			Dow: 5,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1580],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7327744200000,
		gdate: [2202, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 18]
		},
		gtime: 7327744200000
	},
	{
		sdate: [1580, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 28],
			Dow: 6,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1580],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7327830600000,
		gdate: [2202, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 19]
		},
		gtime: 7327830600000
	},
	{
		sdate: [1580, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 29],
			Dow: 0,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1581],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7327917000000,
		gdate: [2202, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 20]
		},
		gtime: 7327917000000
	},

	{
		sdate: [1600, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 1],
			Dow: 4,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1599],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7927619400000,
		gdate: [2221, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 21]
		},
		gtime: 7927619400000
	},
	{
		sdate: [1600, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 2],
			Dow: 5,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1599],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 7927702200000,
		gdate: [2221, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 22]
		},
		gtime: 7927702200000
	},
	{
		sdate: [1600, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 3],
			Dow: 6,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1599],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 7927788600000,
		gdate: [2221, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 23]
		},
		gtime: 7927788600000
	},
	{
		sdate: [1600, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 4],
			Dow: 0,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7927875000000,
		gdate: [2221, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 24]
		},
		gtime: 7927875000000
	},
	{
		sdate: [1600, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 5],
			Dow: 1,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7927961400000,
		gdate: [2221, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 25]
		},
		gtime: 7927961400000
	},
	{
		sdate: [1600, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 6],
			Dow: 2,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7928047800000,
		gdate: [2221, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 26]
		},
		gtime: 7928047800000
	},
	{
		sdate: [1600, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 7],
			Dow: 3,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7928134200000,
		gdate: [2221, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 27]
		},
		gtime: 7928134200000
	},
	{
		sdate: [1600, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 15],
			Dow: 4,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7928825400000,
		gdate: [2221, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 3, 4]
		},
		gtime: 7928825400000
	},
	{
		sdate: [1600, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 29],
			Dow: 4,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7930035000000,
		gdate: [2221, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 3, 18]
		},
		gtime: 7930035000000
	},
	{
		sdate: [1600, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 30],
			Dow: 5,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7930121400000,
		gdate: [2221, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 3, 19]
		},
		gtime: 7930121400000
	},
	{
		sdate: [1600, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 31],
			Dow: 6,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7930207800000,
		gdate: [2221, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 3, 20]
		},
		gtime: 7930207800000
	},
	{
		sdate: [1600, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 1],
			Dow: 0,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7930294200000,
		gdate: [2221, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 3, 21]
		},
		gtime: 7930294200000
	},
	{
		sdate: [1600, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 2],
			Dow: 1,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 7930380600000,
		gdate: [2221, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 3, 22]
		},
		gtime: 7930380600000
	},
	{
		sdate: [1600, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 15],
			Dow: 0,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7931503800000,
		gdate: [2221, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 4, 5]
		},
		gtime: 7931503800000
	},
	{
		sdate: [1600, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 30],
			Dow: 1,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7932799800000,
		gdate: [2221, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 4, 20]
		},
		gtime: 7932799800000
	},
	{
		sdate: [1600, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 1, 31],
			Dow: 2,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7932886200000,
		gdate: [2221, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 4, 21]
		},
		gtime: 7932886200000
	},
	{
		sdate: [1600, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 1],
			Dow: 3,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 7932972600000,
		gdate: [2221, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 4, 22]
		},
		gtime: 7932972600000
	},
	{
		sdate: [1600, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 2],
			Dow: 4,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 7933059000000,
		gdate: [2221, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 4, 23]
		},
		gtime: 7933059000000
	},
	{
		sdate: [1600, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 15],
			Dow: 3,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7934182200000,
		gdate: [2221, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 5, 5]
		},
		gtime: 7934182200000
	},
	{
		sdate: [1600, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 30],
			Dow: 4,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 7935478200000,
		gdate: [2221, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 5, 20]
		},
		gtime: 7935478200000
	},
	{
		sdate: [1600, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 2, 31],
			Dow: 5,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 7935564600000,
		gdate: [2221, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 5, 21]
		},
		gtime: 7935564600000
	},
	{
		sdate: [1600, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 1],
			Dow: 6,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7935651000000,
		gdate: [2221, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 5, 22]
		},
		gtime: 7935651000000
	},
	{
		sdate: [1600, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 2],
			Dow: 0,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 7935737400000,
		gdate: [2221, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 5, 23]
		},
		gtime: 7935737400000
	},
	{
		sdate: [1600, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 15],
			Dow: 6,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [15, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7936860600000,
		gdate: [2221, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 6, 6]
		},
		gtime: 7936860600000
	},
	{
		sdate: [1600, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 30],
			Dow: 0,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7938156600000,
		gdate: [2221, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 6, 21]
		},
		gtime: 7938156600000
	},
	{
		sdate: [1600, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 3, 31],
			Dow: 1,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7938243000000,
		gdate: [2221, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 6, 22]
		},
		gtime: 7938243000000
	},
	{
		sdate: [1600, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 1],
			Dow: 2,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7938329400000,
		gdate: [2221, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 6, 23]
		},
		gtime: 7938329400000
	},
	{
		sdate: [1600, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 2],
			Dow: 3,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 7938415800000,
		gdate: [2221, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 6, 24]
		},
		gtime: 7938415800000
	},
	{
		sdate: [1600, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 15],
			Dow: 2,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7939539000000,
		gdate: [2221, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 7, 6]
		},
		gtime: 7939539000000
	},
	{
		sdate: [1600, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 30],
			Dow: 3,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7940835000000,
		gdate: [2221, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 7, 21]
		},
		gtime: 7940835000000
	},
	{
		sdate: [1600, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 4, 31],
			Dow: 4,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7940921400000,
		gdate: [2221, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 7, 22]
		},
		gtime: 7940921400000
	},
	{
		sdate: [1600, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 1],
			Dow: 5,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 7941007800000,
		gdate: [2221, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 7, 23]
		},
		gtime: 7941007800000
	},
	{
		sdate: [1600, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 2],
			Dow: 6,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 7941094200000,
		gdate: [2221, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 7, 24]
		},
		gtime: 7941094200000
	},
	{
		sdate: [1600, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 15],
			Dow: 5,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7942217400000,
		gdate: [2221, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 8, 6]
		},
		gtime: 7942217400000
	},
	{
		sdate: [1600, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 29],
			Dow: 5,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7943427000000,
		gdate: [2221, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 8, 20]
		},
		gtime: 7943427000000
	},
	{
		sdate: [1600, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 5, 30],
			Dow: 6,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 7943517000000,
		gdate: [2221, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 8, 21]
		},
		gtime: 7943517000000
	},
	{
		sdate: [1600, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 1],
			Dow: 1,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 7943689800000,
		gdate: [2221, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 8, 23]
		},
		gtime: 7943689800000
	},
	{
		sdate: [1600, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 2],
			Dow: 2,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 7943776200000,
		gdate: [2221, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 8, 24]
		},
		gtime: 7943776200000
	},
	{
		sdate: [1600, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 15],
			Dow: 1,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7944899400000,
		gdate: [2221, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 9, 7]
		},
		gtime: 7944899400000
	},
	{
		sdate: [1600, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 29],
			Dow: 1,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7946109000000,
		gdate: [2221, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 9, 21]
		},
		gtime: 7946109000000
	},
	{
		sdate: [1600, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 6, 30],
			Dow: 2,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7946195400000,
		gdate: [2221, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 9, 22]
		},
		gtime: 7946195400000
	},
	{
		sdate: [1600, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 1],
			Dow: 3,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 7946281800000,
		gdate: [2221, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 9, 23]
		},
		gtime: 7946281800000
	},
	{
		sdate: [1600, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 2],
			Dow: 4,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 7946368200000,
		gdate: [2221, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 9, 24]
		},
		gtime: 7946368200000
	},
	{
		sdate: [1600, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 15],
			Dow: 3,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7947491400000,
		gdate: [2221, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 10, 6]
		},
		gtime: 7947491400000
	},
	{
		sdate: [1600, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 29],
			Dow: 3,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7948701000000,
		gdate: [2221, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 10, 20]
		},
		gtime: 7948701000000
	},
	{
		sdate: [1600, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 7, 30],
			Dow: 4,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7948787400000,
		gdate: [2221, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 10, 21]
		},
		gtime: 7948787400000
	},
	{
		sdate: [1600, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 1],
			Dow: 5,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 7948873800000,
		gdate: [2221, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 10, 22]
		},
		gtime: 7948873800000
	},
	{
		sdate: [1600, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 2],
			Dow: 6,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 7948960200000,
		gdate: [2221, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 10, 23]
		},
		gtime: 7948960200000
	},
	{
		sdate: [1600, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 15],
			Dow: 5,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7950083400000,
		gdate: [2221, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 11, 6]
		},
		gtime: 7950083400000
	},
	{
		sdate: [1600, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 29],
			Dow: 5,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 7951293000000,
		gdate: [2221, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 11, 20]
		},
		gtime: 7951293000000
	},
	{
		sdate: [1600, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 8, 30],
			Dow: 6,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 7951379400000,
		gdate: [2221, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 11, 21]
		},
		gtime: 7951379400000
	},
	{
		sdate: [1600, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 1],
			Dow: 0,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 7951465800000,
		gdate: [2221, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 11, 22]
		},
		gtime: 7951465800000
	},
	{
		sdate: [1600, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 2],
			Dow: 1,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 7951552200000,
		gdate: [2221, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 11, 23]
		},
		gtime: 7951552200000
	},
	{
		sdate: [1600, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 15],
			Dow: 0,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7952675400000,
		gdate: [2222, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 0, 5]
		},
		gtime: 7952675400000
	},
	{
		sdate: [1600, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 29],
			Dow: 0,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7953885000000,
		gdate: [2222, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 0, 19]
		},
		gtime: 7953885000000
	},
	{
		sdate: [1600, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 9, 30],
			Dow: 1,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7953971400000,
		gdate: [2222, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 0, 20]
		},
		gtime: 7953971400000
	},
	{
		sdate: [1600, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 1],
			Dow: 2,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 7954057800000,
		gdate: [2222, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 0, 21]
		},
		gtime: 7954057800000
	},
	{
		sdate: [1600, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 2],
			Dow: 3,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 7954144200000,
		gdate: [2222, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 0, 22]
		},
		gtime: 7954144200000
	},
	{
		sdate: [1600, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 15],
			Dow: 2,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7955267400000,
		gdate: [2222, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 1, 4]
		},
		gtime: 7955267400000
	},
	{
		sdate: [1600, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 29],
			Dow: 2,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7956477000000,
		gdate: [2222, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 1, 18]
		},
		gtime: 7956477000000
	},
	{
		sdate: [1600, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 10, 30],
			Dow: 3,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7956563400000,
		gdate: [2222, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 1, 19]
		},
		gtime: 7956563400000
	},
	{
		sdate: [1600, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 1],
			Dow: 4,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 7956649800000,
		gdate: [2222, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 1, 20]
		},
		gtime: 7956649800000
	},
	{
		sdate: [1600, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 2],
			Dow: 5,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1600],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 7956736200000,
		gdate: [2222, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 1, 21]
		},
		gtime: 7956736200000
	},
	{
		sdate: [1600, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 3],
			Dow: 6,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1600],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 7956822600000,
		gdate: [2222, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 1, 22]
		},
		gtime: 7956822600000
	},
	{
		sdate: [1600, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 4],
			Dow: 0,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7956909000000,
		gdate: [2222, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 1, 23]
		},
		gtime: 7956909000000
	},
	{
		sdate: [1600, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 15],
			Dow: 4,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7957859400000,
		gdate: [2222, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 6]
		},
		gtime: 7957859400000
	},
	{
		sdate: [1600, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 25],
			Dow: 0,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1600],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7958723400000,
		gdate: [2222, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 16]
		},
		gtime: 7958723400000
	},
	{
		sdate: [1600, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 26],
			Dow: 1,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1600],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7958809800000,
		gdate: [2222, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 17]
		},
		gtime: 7958809800000
	},
	{
		sdate: [1600, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 27],
			Dow: 2,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1600],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7958896200000,
		gdate: [2222, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 18]
		},
		gtime: 7958896200000
	},
	{
		sdate: [1600, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 28],
			Dow: 3,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1600],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7958982600000,
		gdate: [2222, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 19]
		},
		gtime: 7958982600000
	},
	{
		sdate: [1600, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 29],
			Dow: 4,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1600],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 7959069000000,
		gdate: [2222, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 20]
		},
		gtime: 7959069000000
	},

	{
		sdate: [1620, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 1],
			Dow: 1,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 8558771400000,
		gdate: [2241, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 21]
		},
		gtime: 8558771400000
	},
	{
		sdate: [1620, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 2],
			Dow: 2,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 8558854200000,
		gdate: [2241, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 22]
		},
		gtime: 8558854200000
	},
	{
		sdate: [1620, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 3],
			Dow: 3,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 8558940600000,
		gdate: [2241, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 23]
		},
		gtime: 8558940600000
	},
	{
		sdate: [1620, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 4],
			Dow: 4,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8559027000000,
		gdate: [2241, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 24]
		},
		gtime: 8559027000000
	},
	{
		sdate: [1620, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 5],
			Dow: 5,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8559113400000,
		gdate: [2241, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 25]
		},
		gtime: 8559113400000
	},
	{
		sdate: [1620, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 6],
			Dow: 6,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8559199800000,
		gdate: [2241, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 26]
		},
		gtime: 8559199800000
	},
	{
		sdate: [1620, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 7],
			Dow: 0,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8559286200000,
		gdate: [2241, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 27]
		},
		gtime: 8559286200000
	},
	{
		sdate: [1620, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 15],
			Dow: 1,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8559977400000,
		gdate: [2241, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 3, 4]
		},
		gtime: 8559977400000
	},
	{
		sdate: [1620, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 29],
			Dow: 1,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8561187000000,
		gdate: [2241, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 3, 18]
		},
		gtime: 8561187000000
	},
	{
		sdate: [1620, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 30],
			Dow: 2,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8561273400000,
		gdate: [2241, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 3, 19]
		},
		gtime: 8561273400000
	},
	{
		sdate: [1620, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 31],
			Dow: 3,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 8561359800000,
		gdate: [2241, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 3, 20]
		},
		gtime: 8561359800000
	},
	{
		sdate: [1620, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 1],
			Dow: 4,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 8561446200000,
		gdate: [2241, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 3, 21]
		},
		gtime: 8561446200000
	},
	{
		sdate: [1620, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 2],
			Dow: 5,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 8561532600000,
		gdate: [2241, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 3, 22]
		},
		gtime: 8561532600000
	},
	{
		sdate: [1620, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 15],
			Dow: 4,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8562655800000,
		gdate: [2241, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 4, 5]
		},
		gtime: 8562655800000
	},
	{
		sdate: [1620, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 30],
			Dow: 5,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8563951800000,
		gdate: [2241, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 4, 20]
		},
		gtime: 8563951800000
	},
	{
		sdate: [1620, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 1, 31],
			Dow: 6,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 8564038200000,
		gdate: [2241, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 4, 21]
		},
		gtime: 8564038200000
	},
	{
		sdate: [1620, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 1],
			Dow: 0,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 8564124600000,
		gdate: [2241, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 4, 22]
		},
		gtime: 8564124600000
	},
	{
		sdate: [1620, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 2],
			Dow: 1,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 8564211000000,
		gdate: [2241, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 4, 23]
		},
		gtime: 8564211000000
	},
	{
		sdate: [1620, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 15],
			Dow: 0,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8565334200000,
		gdate: [2241, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 5, 5]
		},
		gtime: 8565334200000
	},
	{
		sdate: [1620, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 30],
			Dow: 1,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 8566630200000,
		gdate: [2241, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 5, 20]
		},
		gtime: 8566630200000
	},
	{
		sdate: [1620, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 2, 31],
			Dow: 2,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 8566716600000,
		gdate: [2241, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 5, 21]
		},
		gtime: 8566716600000
	},
	{
		sdate: [1620, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 1],
			Dow: 3,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 8566803000000,
		gdate: [2241, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 5, 22]
		},
		gtime: 8566803000000
	},
	{
		sdate: [1620, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 2],
			Dow: 4,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 8566889400000,
		gdate: [2241, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 5, 23]
		},
		gtime: 8566889400000
	},
	{
		sdate: [1620, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 15],
			Dow: 3,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 8568012600000,
		gdate: [2241, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 6, 6]
		},
		gtime: 8568012600000
	},
	{
		sdate: [1620, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 30],
			Dow: 4,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 8569308600000,
		gdate: [2241, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 6, 21]
		},
		gtime: 8569308600000
	},
	{
		sdate: [1620, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 3, 31],
			Dow: 5,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 8569395000000,
		gdate: [2241, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 6, 22]
		},
		gtime: 8569395000000
	},
	{
		sdate: [1620, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 1],
			Dow: 6,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 8569481400000,
		gdate: [2241, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 6, 23]
		},
		gtime: 8569481400000
	},
	{
		sdate: [1620, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 2],
			Dow: 0,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 8569567800000,
		gdate: [2241, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 6, 24]
		},
		gtime: 8569567800000
	},
	{
		sdate: [1620, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 15],
			Dow: 6,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 8570691000000,
		gdate: [2241, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 7, 6]
		},
		gtime: 8570691000000
	},
	{
		sdate: [1620, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 30],
			Dow: 0,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 8571987000000,
		gdate: [2241, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 7, 21]
		},
		gtime: 8571987000000
	},
	{
		sdate: [1620, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 4, 31],
			Dow: 1,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 8572073400000,
		gdate: [2241, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 7, 22]
		},
		gtime: 8572073400000
	},
	{
		sdate: [1620, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 1],
			Dow: 2,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 8572159800000,
		gdate: [2241, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 7, 23]
		},
		gtime: 8572159800000
	},
	{
		sdate: [1620, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 2],
			Dow: 3,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 8572246200000,
		gdate: [2241, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 7, 24]
		},
		gtime: 8572246200000
	},
	{
		sdate: [1620, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 15],
			Dow: 2,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 8573369400000,
		gdate: [2241, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 8, 6]
		},
		gtime: 8573369400000
	},
	{
		sdate: [1620, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 29],
			Dow: 2,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 8574579000000,
		gdate: [2241, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 8, 20]
		},
		gtime: 8574579000000
	},
	{
		sdate: [1620, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 5, 30],
			Dow: 3,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 8574669000000,
		gdate: [2241, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 8, 21]
		},
		gtime: 8574669000000
	},
	{
		sdate: [1620, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 1],
			Dow: 5,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 8574841800000,
		gdate: [2241, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 8, 23]
		},
		gtime: 8574841800000
	},
	{
		sdate: [1620, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 2],
			Dow: 6,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 8574928200000,
		gdate: [2241, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 8, 24]
		},
		gtime: 8574928200000
	},
	{
		sdate: [1620, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 15],
			Dow: 5,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8576051400000,
		gdate: [2241, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 9, 7]
		},
		gtime: 8576051400000
	},
	{
		sdate: [1620, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 29],
			Dow: 5,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8577261000000,
		gdate: [2241, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 9, 21]
		},
		gtime: 8577261000000
	},
	{
		sdate: [1620, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 6, 30],
			Dow: 6,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8577347400000,
		gdate: [2241, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 9, 22]
		},
		gtime: 8577347400000
	},
	{
		sdate: [1620, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 1],
			Dow: 0,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 8577433800000,
		gdate: [2241, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 9, 23]
		},
		gtime: 8577433800000
	},
	{
		sdate: [1620, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 2],
			Dow: 1,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 8577520200000,
		gdate: [2241, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 9, 24]
		},
		gtime: 8577520200000
	},
	{
		sdate: [1620, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 15],
			Dow: 0,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8578643400000,
		gdate: [2241, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 10, 6]
		},
		gtime: 8578643400000
	},
	{
		sdate: [1620, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 29],
			Dow: 0,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8579853000000,
		gdate: [2241, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 10, 20]
		},
		gtime: 8579853000000
	},
	{
		sdate: [1620, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 7, 30],
			Dow: 1,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8579939400000,
		gdate: [2241, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 10, 21]
		},
		gtime: 8579939400000
	},
	{
		sdate: [1620, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 1],
			Dow: 2,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 8580025800000,
		gdate: [2241, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 10, 22]
		},
		gtime: 8580025800000
	},
	{
		sdate: [1620, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 2],
			Dow: 3,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 8580112200000,
		gdate: [2241, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 10, 23]
		},
		gtime: 8580112200000
	},
	{
		sdate: [1620, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 15],
			Dow: 2,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8581235400000,
		gdate: [2241, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 11, 6]
		},
		gtime: 8581235400000
	},
	{
		sdate: [1620, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 29],
			Dow: 2,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 8582445000000,
		gdate: [2241, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 11, 20]
		},
		gtime: 8582445000000
	},
	{
		sdate: [1620, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 8, 30],
			Dow: 3,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 8582531400000,
		gdate: [2241, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 11, 21]
		},
		gtime: 8582531400000
	},
	{
		sdate: [1620, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 1],
			Dow: 4,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 8582617800000,
		gdate: [2241, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 11, 22]
		},
		gtime: 8582617800000
	},
	{
		sdate: [1620, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 2],
			Dow: 5,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 8582704200000,
		gdate: [2241, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 11, 23]
		},
		gtime: 8582704200000
	},
	{
		sdate: [1620, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 15],
			Dow: 4,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8583827400000,
		gdate: [2242, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 0, 5]
		},
		gtime: 8583827400000
	},
	{
		sdate: [1620, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 29],
			Dow: 4,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8585037000000,
		gdate: [2242, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 0, 19]
		},
		gtime: 8585037000000
	},
	{
		sdate: [1620, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 9, 30],
			Dow: 5,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8585123400000,
		gdate: [2242, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 0, 20]
		},
		gtime: 8585123400000
	},
	{
		sdate: [1620, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 1],
			Dow: 6,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 8585209800000,
		gdate: [2242, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 0, 21]
		},
		gtime: 8585209800000
	},
	{
		sdate: [1620, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 2],
			Dow: 0,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 8585296200000,
		gdate: [2242, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 0, 22]
		},
		gtime: 8585296200000
	},
	{
		sdate: [1620, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 15],
			Dow: 6,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8586419400000,
		gdate: [2242, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 1, 4]
		},
		gtime: 8586419400000
	},
	{
		sdate: [1620, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 29],
			Dow: 6,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8587629000000,
		gdate: [2242, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 1, 18]
		},
		gtime: 8587629000000
	},
	{
		sdate: [1620, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 10, 30],
			Dow: 0,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1620],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8587715400000,
		gdate: [2242, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 1, 19]
		},
		gtime: 8587715400000
	},
	{
		sdate: [1620, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 1],
			Dow: 1,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 8587801800000,
		gdate: [2242, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 1, 20]
		},
		gtime: 8587801800000
	},
	{
		sdate: [1620, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 2],
			Dow: 2,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1620],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 8587888200000,
		gdate: [2242, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 1, 21]
		},
		gtime: 8587888200000
	},
	{
		sdate: [1620, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 3],
			Dow: 3,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1620],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 8587974600000,
		gdate: [2242, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 1, 22]
		},
		gtime: 8587974600000
	},
	{
		sdate: [1620, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 4],
			Dow: 4,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8588061000000,
		gdate: [2242, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 1, 23]
		},
		gtime: 8588061000000
	},
	{
		sdate: [1620, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 15],
			Dow: 1,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1620],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8589011400000,
		gdate: [2242, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 6]
		},
		gtime: 8589011400000
	},
	{
		sdate: [1620, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 25],
			Dow: 4,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1620],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8589875400000,
		gdate: [2242, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 16]
		},
		gtime: 8589875400000
	},
	{
		sdate: [1620, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 26],
			Dow: 5,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1620],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8589961800000,
		gdate: [2242, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 17]
		},
		gtime: 8589961800000
	},
	{
		sdate: [1620, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 27],
			Dow: 6,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1620],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8590048200000,
		gdate: [2242, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 18]
		},
		gtime: 8590048200000
	},
	{
		sdate: [1620, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 28],
			Dow: 0,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1621],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8590134600000,
		gdate: [2242, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 19]
		},
		gtime: 8590134600000
	},
	{
		sdate: [1620, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 29],
			Dow: 1,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1621],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 8590221000000,
		gdate: [2242, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 20]
		},
		gtime: 8590221000000
	},

	{
		sdate: [1640, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 1],
			Dow: 5,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1639],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9189923400000,
		gdate: [2261, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 21]
		},
		gtime: 9189923400000
	},
	{
		sdate: [1640, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 2],
			Dow: 6,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [53, 1639],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 9190006200000,
		gdate: [2261, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 22]
		},
		gtime: 9190006200000
	},
	{
		sdate: [1640, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 3],
			Dow: 0,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 9190092600000,
		gdate: [2261, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 23]
		},
		gtime: 9190092600000
	},
	{
		sdate: [1640, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 4],
			Dow: 1,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9190179000000,
		gdate: [2261, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 24]
		},
		gtime: 9190179000000
	},
	{
		sdate: [1640, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 5],
			Dow: 2,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9190265400000,
		gdate: [2261, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 25]
		},
		gtime: 9190265400000
	},
	{
		sdate: [1640, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 6],
			Dow: 3,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9190351800000,
		gdate: [2261, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 26]
		},
		gtime: 9190351800000
	},
	{
		sdate: [1640, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 7],
			Dow: 4,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9190438200000,
		gdate: [2261, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 27]
		},
		gtime: 9190438200000
	},
	{
		sdate: [1640, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 15],
			Dow: 5,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9191129400000,
		gdate: [2261, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 3, 4]
		},
		gtime: 9191129400000
	},
	{
		sdate: [1640, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 29],
			Dow: 5,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9192339000000,
		gdate: [2261, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 3, 18]
		},
		gtime: 9192339000000
	},
	{
		sdate: [1640, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 30],
			Dow: 6,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9192425400000,
		gdate: [2261, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 3, 19]
		},
		gtime: 9192425400000
	},
	{
		sdate: [1640, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 31],
			Dow: 0,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9192511800000,
		gdate: [2261, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 3, 20]
		},
		gtime: 9192511800000
	},
	{
		sdate: [1640, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 1],
			Dow: 1,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9192598200000,
		gdate: [2261, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 3, 21]
		},
		gtime: 9192598200000
	},
	{
		sdate: [1640, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 2],
			Dow: 2,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 9192684600000,
		gdate: [2261, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 3, 22]
		},
		gtime: 9192684600000
	},
	{
		sdate: [1640, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 15],
			Dow: 1,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9193807800000,
		gdate: [2261, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 4, 5]
		},
		gtime: 9193807800000
	},
	{
		sdate: [1640, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 30],
			Dow: 2,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9195103800000,
		gdate: [2261, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 4, 20]
		},
		gtime: 9195103800000
	},
	{
		sdate: [1640, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 1, 31],
			Dow: 3,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9195190200000,
		gdate: [2261, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 4, 21]
		},
		gtime: 9195190200000
	},
	{
		sdate: [1640, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 1],
			Dow: 4,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9195276600000,
		gdate: [2261, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 4, 22]
		},
		gtime: 9195276600000
	},
	{
		sdate: [1640, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 2],
			Dow: 5,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 9195363000000,
		gdate: [2261, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 4, 23]
		},
		gtime: 9195363000000
	},
	{
		sdate: [1640, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 15],
			Dow: 4,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9196486200000,
		gdate: [2261, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 5, 5]
		},
		gtime: 9196486200000
	},
	{
		sdate: [1640, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 30],
			Dow: 5,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9197782200000,
		gdate: [2261, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 5, 20]
		},
		gtime: 9197782200000
	},
	{
		sdate: [1640, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 2, 31],
			Dow: 6,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 9197868600000,
		gdate: [2261, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 5, 21]
		},
		gtime: 9197868600000
	},
	{
		sdate: [1640, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 1],
			Dow: 0,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9197955000000,
		gdate: [2261, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 5, 22]
		},
		gtime: 9197955000000
	},
	{
		sdate: [1640, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 2],
			Dow: 1,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 9198041400000,
		gdate: [2261, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 5, 23]
		},
		gtime: 9198041400000
	},
	{
		sdate: [1640, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 15],
			Dow: 0,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9199164600000,
		gdate: [2261, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 6, 6]
		},
		gtime: 9199164600000
	},
	{
		sdate: [1640, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 30],
			Dow: 1,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9200460600000,
		gdate: [2261, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 6, 21]
		},
		gtime: 9200460600000
	},
	{
		sdate: [1640, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 3, 31],
			Dow: 2,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9200547000000,
		gdate: [2261, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 6, 22]
		},
		gtime: 9200547000000
	},
	{
		sdate: [1640, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 1],
			Dow: 3,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9200633400000,
		gdate: [2261, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 6, 23]
		},
		gtime: 9200633400000
	},
	{
		sdate: [1640, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 2],
			Dow: 4,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 9200719800000,
		gdate: [2261, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 6, 24]
		},
		gtime: 9200719800000
	},
	{
		sdate: [1640, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 15],
			Dow: 3,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9201843000000,
		gdate: [2261, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 7, 6]
		},
		gtime: 9201843000000
	},
	{
		sdate: [1640, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 30],
			Dow: 4,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9203139000000,
		gdate: [2261, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 7, 21]
		},
		gtime: 9203139000000
	},
	{
		sdate: [1640, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 4, 31],
			Dow: 5,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9203225400000,
		gdate: [2261, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 7, 22]
		},
		gtime: 9203225400000
	},
	{
		sdate: [1640, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 1],
			Dow: 6,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9203311800000,
		gdate: [2261, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 7, 23]
		},
		gtime: 9203311800000
	},
	{
		sdate: [1640, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 2],
			Dow: 0,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 9203398200000,
		gdate: [2261, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 7, 24]
		},
		gtime: 9203398200000
	},
	{
		sdate: [1640, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 15],
			Dow: 6,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9204521400000,
		gdate: [2261, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 8, 6]
		},
		gtime: 9204521400000
	},
	{
		sdate: [1640, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 29],
			Dow: 6,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9205731000000,
		gdate: [2261, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 8, 20]
		},
		gtime: 9205731000000
	},
	{
		sdate: [1640, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 5, 30],
			Dow: 0,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9205821000000,
		gdate: [2261, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 8, 21]
		},
		gtime: 9205821000000
	},
	{
		sdate: [1640, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 1],
			Dow: 2,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 9205993800000,
		gdate: [2261, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 8, 23]
		},
		gtime: 9205993800000
	},
	{
		sdate: [1640, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 2],
			Dow: 3,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 9206080200000,
		gdate: [2261, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 8, 24]
		},
		gtime: 9206080200000
	},
	{
		sdate: [1640, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 15],
			Dow: 2,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9207203400000,
		gdate: [2261, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 9, 7]
		},
		gtime: 9207203400000
	},
	{
		sdate: [1640, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 29],
			Dow: 2,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9208413000000,
		gdate: [2261, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 9, 21]
		},
		gtime: 9208413000000
	},
	{
		sdate: [1640, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 6, 30],
			Dow: 3,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9208499400000,
		gdate: [2261, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 9, 22]
		},
		gtime: 9208499400000
	},
	{
		sdate: [1640, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 1],
			Dow: 4,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 9208585800000,
		gdate: [2261, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 9, 23]
		},
		gtime: 9208585800000
	},
	{
		sdate: [1640, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 2],
			Dow: 5,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 9208672200000,
		gdate: [2261, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 9, 24]
		},
		gtime: 9208672200000
	},
	{
		sdate: [1640, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 15],
			Dow: 4,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9209795400000,
		gdate: [2261, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 10, 6]
		},
		gtime: 9209795400000
	},
	{
		sdate: [1640, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 29],
			Dow: 4,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9211005000000,
		gdate: [2261, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 10, 20]
		},
		gtime: 9211005000000
	},
	{
		sdate: [1640, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 7, 30],
			Dow: 5,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9211091400000,
		gdate: [2261, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 10, 21]
		},
		gtime: 9211091400000
	},
	{
		sdate: [1640, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 1],
			Dow: 6,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 9211177800000,
		gdate: [2261, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 10, 22]
		},
		gtime: 9211177800000
	},
	{
		sdate: [1640, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 2],
			Dow: 0,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 9211264200000,
		gdate: [2261, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 10, 23]
		},
		gtime: 9211264200000
	},
	{
		sdate: [1640, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 15],
			Dow: 6,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9212387400000,
		gdate: [2261, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 11, 6]
		},
		gtime: 9212387400000
	},
	{
		sdate: [1640, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 29],
			Dow: 6,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9213597000000,
		gdate: [2261, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 11, 20]
		},
		gtime: 9213597000000
	},
	{
		sdate: [1640, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 8, 30],
			Dow: 0,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 9213683400000,
		gdate: [2261, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 11, 21]
		},
		gtime: 9213683400000
	},
	{
		sdate: [1640, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 1],
			Dow: 1,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 9213769800000,
		gdate: [2261, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 11, 22]
		},
		gtime: 9213769800000
	},
	{
		sdate: [1640, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 2],
			Dow: 2,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 9213856200000,
		gdate: [2261, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 11, 23]
		},
		gtime: 9213856200000
	},
	{
		sdate: [1640, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 15],
			Dow: 1,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9214979400000,
		gdate: [2262, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 0, 5]
		},
		gtime: 9214979400000
	},
	{
		sdate: [1640, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 29],
			Dow: 1,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9216189000000,
		gdate: [2262, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 0, 19]
		},
		gtime: 9216189000000
	},
	{
		sdate: [1640, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 9, 30],
			Dow: 2,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9216275400000,
		gdate: [2262, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 0, 20]
		},
		gtime: 9216275400000
	},
	{
		sdate: [1640, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 1],
			Dow: 3,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 9216361800000,
		gdate: [2262, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 0, 21]
		},
		gtime: 9216361800000
	},
	{
		sdate: [1640, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 2],
			Dow: 4,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 9216448200000,
		gdate: [2262, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 0, 22]
		},
		gtime: 9216448200000
	},
	{
		sdate: [1640, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 15],
			Dow: 3,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9217571400000,
		gdate: [2262, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 1, 4]
		},
		gtime: 9217571400000
	},
	{
		sdate: [1640, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 29],
			Dow: 3,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9218781000000,
		gdate: [2262, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 1, 18]
		},
		gtime: 9218781000000
	},
	{
		sdate: [1640, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 10, 30],
			Dow: 4,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9218867400000,
		gdate: [2262, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 1, 19]
		},
		gtime: 9218867400000
	},
	{
		sdate: [1640, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 1],
			Dow: 5,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 9218953800000,
		gdate: [2262, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 1, 20]
		},
		gtime: 9218953800000
	},
	{
		sdate: [1640, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 2],
			Dow: 6,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [48, 1640],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 9219040200000,
		gdate: [2262, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 1, 21]
		},
		gtime: 9219040200000
	},
	{
		sdate: [1640, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 3],
			Dow: 0,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1640],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 9219126600000,
		gdate: [2262, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 1, 22]
		},
		gtime: 9219126600000
	},
	{
		sdate: [1640, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 4],
			Dow: 1,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9219213000000,
		gdate: [2262, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 1, 23]
		},
		gtime: 9219213000000
	},
	{
		sdate: [1640, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 15],
			Dow: 5,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [50, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9220163400000,
		gdate: [2262, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 6]
		},
		gtime: 9220163400000
	},
	{
		sdate: [1640, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 25],
			Dow: 1,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1640],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9221027400000,
		gdate: [2262, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 16]
		},
		gtime: 9221027400000
	},
	{
		sdate: [1640, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 26],
			Dow: 2,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1640],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9221113800000,
		gdate: [2262, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 17]
		},
		gtime: 9221113800000
	},
	{
		sdate: [1640, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 27],
			Dow: 3,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1640],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9221200200000,
		gdate: [2262, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 18]
		},
		gtime: 9221200200000
	},
	{
		sdate: [1640, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 28],
			Dow: 4,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1640],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9221286600000,
		gdate: [2262, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 19]
		},
		gtime: 9221286600000
	},
	{
		sdate: [1640, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 29],
			Dow: 5,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1640],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9221373000000,
		gdate: [2262, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 20]
		},
		gtime: 9221373000000
	},

	{
		sdate: [1660, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 1],
			Dow: 2,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9821075400000,
		gdate: [2281, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 21]
		},
		gtime: 9821075400000
	},
	{
		sdate: [1660, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 2],
			Dow: 3,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 9821158200000,
		gdate: [2281, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 22]
		},
		gtime: 9821158200000
	},
	{
		sdate: [1660, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 3],
			Dow: 4,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 9821244600000,
		gdate: [2281, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 23]
		},
		gtime: 9821244600000
	},
	{
		sdate: [1660, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 4],
			Dow: 5,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9821331000000,
		gdate: [2281, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 24]
		},
		gtime: 9821331000000
	},
	{
		sdate: [1660, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 5],
			Dow: 6,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9821417400000,
		gdate: [2281, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 25]
		},
		gtime: 9821417400000
	},
	{
		sdate: [1660, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 6],
			Dow: 0,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9821503800000,
		gdate: [2281, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 26]
		},
		gtime: 9821503800000
	},
	{
		sdate: [1660, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 7],
			Dow: 1,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9821590200000,
		gdate: [2281, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 27]
		},
		gtime: 9821590200000
	},
	{
		sdate: [1660, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 15],
			Dow: 2,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9822281400000,
		gdate: [2281, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 3, 4]
		},
		gtime: 9822281400000
	},
	{
		sdate: [1660, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 29],
			Dow: 2,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9823491000000,
		gdate: [2281, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 3, 18]
		},
		gtime: 9823491000000
	},
	{
		sdate: [1660, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 30],
			Dow: 3,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9823577400000,
		gdate: [2281, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 3, 19]
		},
		gtime: 9823577400000
	},
	{
		sdate: [1660, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 31],
			Dow: 4,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Chicken",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9823663800000,
		gdate: [2281, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 3, 20]
		},
		gtime: 9823663800000
	},
	{
		sdate: [1660, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 1],
			Dow: 5,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9823750200000,
		gdate: [2281, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 3, 21]
		},
		gtime: 9823750200000
	},
	{
		sdate: [1660, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 2],
			Dow: 6,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 9823836600000,
		gdate: [2281, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 3, 22]
		},
		gtime: 9823836600000
	},
	{
		sdate: [1660, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 15],
			Dow: 5,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9824959800000,
		gdate: [2281, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 4, 5]
		},
		gtime: 9824959800000
	},
	{
		sdate: [1660, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 30],
			Dow: 6,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9826255800000,
		gdate: [2281, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 4, 20]
		},
		gtime: 9826255800000
	},
	{
		sdate: [1660, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 1, 31],
			Dow: 0,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Chicken",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9826342200000,
		gdate: [2281, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 4, 21]
		},
		gtime: 9826342200000
	},
	{
		sdate: [1660, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 1],
			Dow: 1,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 9826428600000,
		gdate: [2281, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 4, 22]
		},
		gtime: 9826428600000
	},
	{
		sdate: [1660, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 2],
			Dow: 2,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 9826515000000,
		gdate: [2281, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 4, 23]
		},
		gtime: 9826515000000
	},
	{
		sdate: [1660, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 15],
			Dow: 1,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9827638200000,
		gdate: [2281, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 5, 5]
		},
		gtime: 9827638200000
	},
	{
		sdate: [1660, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 30],
			Dow: 2,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 9828934200000,
		gdate: [2281, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 5, 20]
		},
		gtime: 9828934200000
	},
	{
		sdate: [1660, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 2, 31],
			Dow: 3,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Chicken",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 9829020600000,
		gdate: [2281, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 5, 21]
		},
		gtime: 9829020600000
	},
	{
		sdate: [1660, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 1],
			Dow: 4,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9829107000000,
		gdate: [2281, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 5, 22]
		},
		gtime: 9829107000000
	},
	{
		sdate: [1660, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 2],
			Dow: 5,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 9829193400000,
		gdate: [2281, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 5, 23]
		},
		gtime: 9829193400000
	},
	{
		sdate: [1660, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 15],
			Dow: 4,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9830316600000,
		gdate: [2281, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 6, 6]
		},
		gtime: 9830316600000
	},
	{
		sdate: [1660, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 30],
			Dow: 5,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9831612600000,
		gdate: [2281, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 6, 21]
		},
		gtime: 9831612600000
	},
	{
		sdate: [1660, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 3, 31],
			Dow: 6,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Chicken",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9831699000000,
		gdate: [2281, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 6, 22]
		},
		gtime: 9831699000000
	},
	{
		sdate: [1660, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 1],
			Dow: 0,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9831785400000,
		gdate: [2281, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 6, 23]
		},
		gtime: 9831785400000
	},
	{
		sdate: [1660, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 2],
			Dow: 1,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 9831871800000,
		gdate: [2281, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 6, 24]
		},
		gtime: 9831871800000
	},
	{
		sdate: [1660, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 15],
			Dow: 0,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [21, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9832995000000,
		gdate: [2281, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 7, 6]
		},
		gtime: 9832995000000
	},
	{
		sdate: [1660, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 30],
			Dow: 1,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9834291000000,
		gdate: [2281, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 7, 21]
		},
		gtime: 9834291000000
	},
	{
		sdate: [1660, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 4, 31],
			Dow: 2,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Chicken",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9834377400000,
		gdate: [2281, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 7, 22]
		},
		gtime: 9834377400000
	},
	{
		sdate: [1660, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 1],
			Dow: 3,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 9834463800000,
		gdate: [2281, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 7, 23]
		},
		gtime: 9834463800000
	},
	{
		sdate: [1660, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 2],
			Dow: 4,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 9834550200000,
		gdate: [2281, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 7, 24]
		},
		gtime: 9834550200000
	},
	{
		sdate: [1660, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 15],
			Dow: 3,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9835673400000,
		gdate: [2281, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 8, 6]
		},
		gtime: 9835673400000
	},
	{
		sdate: [1660, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 29],
			Dow: 3,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9836883000000,
		gdate: [2281, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 8, 20]
		},
		gtime: 9836883000000
	},
	{
		sdate: [1660, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 5, 30],
			Dow: 4,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Chicken",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 9836973000000,
		gdate: [2281, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 8, 21]
		},
		gtime: 9836973000000
	},
	{
		sdate: [1660, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 1],
			Dow: 6,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 9837145800000,
		gdate: [2281, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 8, 23]
		},
		gtime: 9837145800000
	},
	{
		sdate: [1660, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 2],
			Dow: 0,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [28, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 9837232200000,
		gdate: [2281, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 8, 24]
		},
		gtime: 9837232200000
	},
	{
		sdate: [1660, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 15],
			Dow: 6,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9838355400000,
		gdate: [2281, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 9, 7]
		},
		gtime: 9838355400000
	},
	{
		sdate: [1660, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 29],
			Dow: 6,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9839565000000,
		gdate: [2281, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 9, 21]
		},
		gtime: 9839565000000
	},
	{
		sdate: [1660, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 6, 30],
			Dow: 0,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Chicken",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9839651400000,
		gdate: [2281, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 9, 22]
		},
		gtime: 9839651400000
	},
	{
		sdate: [1660, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 1],
			Dow: 1,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 9839737800000,
		gdate: [2281, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 9, 23]
		},
		gtime: 9839737800000
	},
	{
		sdate: [1660, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 2],
			Dow: 2,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 9839824200000,
		gdate: [2281, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 9, 24]
		},
		gtime: 9839824200000
	},
	{
		sdate: [1660, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 15],
			Dow: 1,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9840947400000,
		gdate: [2281, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 10, 6]
		},
		gtime: 9840947400000
	},
	{
		sdate: [1660, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 29],
			Dow: 1,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9842157000000,
		gdate: [2281, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 10, 20]
		},
		gtime: 9842157000000
	},
	{
		sdate: [1660, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 7, 30],
			Dow: 2,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Chicken",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9842243400000,
		gdate: [2281, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 10, 21]
		},
		gtime: 9842243400000
	},
	{
		sdate: [1660, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 1],
			Dow: 3,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 9842329800000,
		gdate: [2281, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 10, 22]
		},
		gtime: 9842329800000
	},
	{
		sdate: [1660, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 2],
			Dow: 4,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 9842416200000,
		gdate: [2281, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 10, 23]
		},
		gtime: 9842416200000
	},
	{
		sdate: [1660, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 15],
			Dow: 3,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9843539400000,
		gdate: [2281, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 11, 6]
		},
		gtime: 9843539400000
	},
	{
		sdate: [1660, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 29],
			Dow: 3,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 9844749000000,
		gdate: [2281, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 11, 20]
		},
		gtime: 9844749000000
	},
	{
		sdate: [1660, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 8, 30],
			Dow: 4,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Chicken",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 9844835400000,
		gdate: [2281, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 11, 21]
		},
		gtime: 9844835400000
	},
	{
		sdate: [1660, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 1],
			Dow: 5,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 9844921800000,
		gdate: [2281, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 11, 22]
		},
		gtime: 9844921800000
	},
	{
		sdate: [1660, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 2],
			Dow: 6,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 9845008200000,
		gdate: [2281, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 11, 23]
		},
		gtime: 9845008200000
	},
	{
		sdate: [1660, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 15],
			Dow: 5,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9846131400000,
		gdate: [2282, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 0, 5]
		},
		gtime: 9846131400000
	},
	{
		sdate: [1660, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 29],
			Dow: 5,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9847341000000,
		gdate: [2282, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 0, 19]
		},
		gtime: 9847341000000
	},
	{
		sdate: [1660, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 9, 30],
			Dow: 6,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Chicken",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9847427400000,
		gdate: [2282, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 0, 20]
		},
		gtime: 9847427400000
	},
	{
		sdate: [1660, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 1],
			Dow: 0,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 9847513800000,
		gdate: [2282, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 0, 21]
		},
		gtime: 9847513800000
	},
	{
		sdate: [1660, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 2],
			Dow: 1,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 9847600200000,
		gdate: [2282, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 0, 22]
		},
		gtime: 9847600200000
	},
	{
		sdate: [1660, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 15],
			Dow: 0,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [47, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9848723400000,
		gdate: [2282, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 1, 4]
		},
		gtime: 9848723400000
	},
	{
		sdate: [1660, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 29],
			Dow: 0,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1660],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9849933000000,
		gdate: [2282, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 1, 18]
		},
		gtime: 9849933000000
	},
	{
		sdate: [1660, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 10, 30],
			Dow: 1,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1660],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Chicken",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9850019400000,
		gdate: [2282, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 1, 19]
		},
		gtime: 9850019400000
	},
	{
		sdate: [1660, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 1],
			Dow: 2,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 9850105800000,
		gdate: [2282, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 1, 20]
		},
		gtime: 9850105800000
	},
	{
		sdate: [1660, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 2],
			Dow: 3,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1660],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 9850192200000,
		gdate: [2282, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 1, 21]
		},
		gtime: 9850192200000
	},
	{
		sdate: [1660, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 3],
			Dow: 4,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1660],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 9850278600000,
		gdate: [2282, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 1, 22]
		},
		gtime: 9850278600000
	},
	{
		sdate: [1660, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 4],
			Dow: 5,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9850365000000,
		gdate: [2282, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 1, 23]
		},
		gtime: 9850365000000
	},
	{
		sdate: [1660, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 15],
			Dow: 2,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1660],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9851315400000,
		gdate: [2282, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 6]
		},
		gtime: 9851315400000
	},
	{
		sdate: [1660, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 25],
			Dow: 5,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1660],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9852179400000,
		gdate: [2282, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 16]
		},
		gtime: 9852179400000
	},
	{
		sdate: [1660, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 26],
			Dow: 6,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1660],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9852265800000,
		gdate: [2282, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 17]
		},
		gtime: 9852265800000
	},
	{
		sdate: [1660, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 27],
			Dow: 0,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1661],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9852352200000,
		gdate: [2282, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 18]
		},
		gtime: 9852352200000
	},
	{
		sdate: [1660, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 28],
			Dow: 1,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1661],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9852438600000,
		gdate: [2282, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 19]
		},
		gtime: 9852438600000
	},
	{
		sdate: [1660, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 29],
			Dow: 2,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1661],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Chicken",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 9852525000000,
		gdate: [2282, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 20]
		},
		gtime: 9852525000000
	},

	{
		sdate: [1680, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 1],
			Dow: 5,
			Diy: 366,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1679],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 10452141000000,
		gdate: [2301, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 21]
		},
		gtime: 10452141000000
	},
	{
		sdate: [1680, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 2],
			Dow: 6,
			Diy: 366,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [52, 1679],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 10452223800000,
		gdate: [2301, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 22]
		},
		gtime: 10452223800000
	},
	{
		sdate: [1680, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 3],
			Dow: 0,
			Diy: 366,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 10452310200000,
		gdate: [2301, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 23]
		},
		gtime: 10452310200000
	},
	{
		sdate: [1680, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 4],
			Dow: 1,
			Diy: 366,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10452396600000,
		gdate: [2301, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 24]
		},
		gtime: 10452396600000
	},
	{
		sdate: [1680, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 5],
			Dow: 2,
			Diy: 366,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10452483000000,
		gdate: [2301, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 25]
		},
		gtime: 10452483000000
	},
	{
		sdate: [1680, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 6],
			Dow: 3,
			Diy: 366,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10452569400000,
		gdate: [2301, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 26]
		},
		gtime: 10452569400000
	},
	{
		sdate: [1680, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 7],
			Dow: 4,
			Diy: 366,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10452655800000,
		gdate: [2301, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 27]
		},
		gtime: 10452655800000
	},
	{
		sdate: [1680, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 15],
			Dow: 5,
			Diy: 366,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10453347000000,
		gdate: [2301, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 3, 4]
		},
		gtime: 10453347000000
	},
	{
		sdate: [1680, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 29],
			Dow: 5,
			Diy: 366,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10454556600000,
		gdate: [2301, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 3, 18]
		},
		gtime: 10454556600000
	},
	{
		sdate: [1680, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 30],
			Dow: 6,
			Diy: 366,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [4, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10454643000000,
		gdate: [2301, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 3, 19]
		},
		gtime: 10454643000000
	},
	{
		sdate: [1680, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 31],
			Dow: 0,
			Diy: 366,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Snake",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 10454729400000,
		gdate: [2301, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 3, 20]
		},
		gtime: 10454729400000
	},
	{
		sdate: [1680, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 1],
			Dow: 1,
			Diy: 366,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 10454815800000,
		gdate: [2301, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 3, 21]
		},
		gtime: 10454815800000
	},
	{
		sdate: [1680, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 2],
			Dow: 2,
			Diy: 366,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 10454902200000,
		gdate: [2301, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 3, 22]
		},
		gtime: 10454902200000
	},
	{
		sdate: [1680, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 15],
			Dow: 1,
			Diy: 366,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10456025400000,
		gdate: [2301, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 4, 5]
		},
		gtime: 10456025400000
	},
	{
		sdate: [1680, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 30],
			Dow: 2,
			Diy: 366,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10457321400000,
		gdate: [2301, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 4, 20]
		},
		gtime: 10457321400000
	},
	{
		sdate: [1680, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 1, 31],
			Dow: 3,
			Diy: 366,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Snake",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 10457407800000,
		gdate: [2301, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 4, 21]
		},
		gtime: 10457407800000
	},
	{
		sdate: [1680, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 1],
			Dow: 4,
			Diy: 366,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 10457494200000,
		gdate: [2301, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 4, 22]
		},
		gtime: 10457494200000
	},
	{
		sdate: [1680, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 2],
			Dow: 5,
			Diy: 366,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 10457580600000,
		gdate: [2301, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 4, 23]
		},
		gtime: 10457580600000
	},
	{
		sdate: [1680, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 15],
			Dow: 4,
			Diy: 366,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [11, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10458703800000,
		gdate: [2301, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 5, 5]
		},
		gtime: 10458703800000
	},
	{
		sdate: [1680, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 30],
			Dow: 5,
			Diy: 366,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 10459999800000,
		gdate: [2301, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 5, 20]
		},
		gtime: 10459999800000
	},
	{
		sdate: [1680, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 2, 31],
			Dow: 6,
			Diy: 366,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [13, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Snake",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 10460086200000,
		gdate: [2301, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 5, 21]
		},
		gtime: 10460086200000
	},
	{
		sdate: [1680, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 1],
			Dow: 0,
			Diy: 366,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 10460172600000,
		gdate: [2301, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 5, 22]
		},
		gtime: 10460172600000
	},
	{
		sdate: [1680, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 2],
			Dow: 1,
			Diy: 366,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 10460259000000,
		gdate: [2301, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 5, 23]
		},
		gtime: 10460259000000
	},
	{
		sdate: [1680, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 15],
			Dow: 0,
			Diy: 366,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 10461382200000,
		gdate: [2301, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 6, 6]
		},
		gtime: 10461382200000
	},
	{
		sdate: [1680, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 30],
			Dow: 1,
			Diy: 366,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 10462678200000,
		gdate: [2301, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 6, 21]
		},
		gtime: 10462678200000
	},
	{
		sdate: [1680, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 3, 31],
			Dow: 2,
			Diy: 366,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Snake",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 10462764600000,
		gdate: [2301, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 6, 22]
		},
		gtime: 10462764600000
	},
	{
		sdate: [1680, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 1],
			Dow: 3,
			Diy: 366,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 10462851000000,
		gdate: [2301, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 6, 23]
		},
		gtime: 10462851000000
	},
	{
		sdate: [1680, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 2],
			Dow: 4,
			Diy: 366,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 10462937400000,
		gdate: [2301, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 6, 24]
		},
		gtime: 10462937400000
	},
	{
		sdate: [1680, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 15],
			Dow: 3,
			Diy: 366,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [20, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 10464060600000,
		gdate: [2301, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 7, 6]
		},
		gtime: 10464060600000
	},
	{
		sdate: [1680, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 30],
			Dow: 4,
			Diy: 366,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 10465356600000,
		gdate: [2301, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 7, 21]
		},
		gtime: 10465356600000
	},
	{
		sdate: [1680, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 4, 31],
			Dow: 5,
			Diy: 366,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Snake",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 10465443000000,
		gdate: [2301, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 7, 22]
		},
		gtime: 10465443000000
	},
	{
		sdate: [1680, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 1],
			Dow: 6,
			Diy: 366,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [22, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 10465529400000,
		gdate: [2301, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 7, 23]
		},
		gtime: 10465529400000
	},
	{
		sdate: [1680, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 2],
			Dow: 0,
			Diy: 366,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 10465615800000,
		gdate: [2301, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 7, 24]
		},
		gtime: 10465615800000
	},
	{
		sdate: [1680, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 15],
			Dow: 6,
			Diy: 366,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [24, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 10466739000000,
		gdate: [2301, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 8, 6]
		},
		gtime: 10466739000000
	},
	{
		sdate: [1680, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 29],
			Dow: 6,
			Diy: 366,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [26, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 10467948600000,
		gdate: [2301, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 8, 20]
		},
		gtime: 10467948600000
	},
	{
		sdate: [1680, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 5, 30],
			Dow: 0,
			Diy: 366,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Snake",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 10468038600000,
		gdate: [2301, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 8, 21]
		},
		gtime: 10468038600000
	},
	{
		sdate: [1680, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 1],
			Dow: 2,
			Diy: 366,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 10468211400000,
		gdate: [2301, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 8, 23]
		},
		gtime: 10468211400000
	},
	{
		sdate: [1680, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 2],
			Dow: 3,
			Diy: 366,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 10468297800000,
		gdate: [2301, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 8, 24]
		},
		gtime: 10468297800000
	},
	{
		sdate: [1680, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 15],
			Dow: 2,
			Diy: 366,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10469421000000,
		gdate: [2301, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 9, 7]
		},
		gtime: 10469421000000
	},
	{
		sdate: [1680, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 29],
			Dow: 2,
			Diy: 366,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10470630600000,
		gdate: [2301, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 9, 21]
		},
		gtime: 10470630600000
	},
	{
		sdate: [1680, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 6, 30],
			Dow: 3,
			Diy: 366,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Snake",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10470717000000,
		gdate: [2301, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 9, 22]
		},
		gtime: 10470717000000
	},
	{
		sdate: [1680, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 1],
			Dow: 4,
			Diy: 366,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 10470803400000,
		gdate: [2301, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 9, 23]
		},
		gtime: 10470803400000
	},
	{
		sdate: [1680, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 2],
			Dow: 5,
			Diy: 366,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 10470889800000,
		gdate: [2301, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 9, 24]
		},
		gtime: 10470889800000
	},
	{
		sdate: [1680, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 15],
			Dow: 4,
			Diy: 366,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [33, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10472013000000,
		gdate: [2301, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 10, 6]
		},
		gtime: 10472013000000
	},
	{
		sdate: [1680, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 29],
			Dow: 4,
			Diy: 366,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10473222600000,
		gdate: [2301, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 10, 20]
		},
		gtime: 10473222600000
	},
	{
		sdate: [1680, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 7, 30],
			Dow: 5,
			Diy: 366,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Snake",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10473309000000,
		gdate: [2301, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 10, 21]
		},
		gtime: 10473309000000
	},
	{
		sdate: [1680, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 1],
			Dow: 6,
			Diy: 366,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [35, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 10473395400000,
		gdate: [2301, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 10, 22]
		},
		gtime: 10473395400000
	},
	{
		sdate: [1680, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 2],
			Dow: 0,
			Diy: 366,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 10473481800000,
		gdate: [2301, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 10, 23]
		},
		gtime: 10473481800000
	},
	{
		sdate: [1680, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 15],
			Dow: 6,
			Diy: 366,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [37, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10474605000000,
		gdate: [2301, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 11, 6]
		},
		gtime: 10474605000000
	},
	{
		sdate: [1680, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 29],
			Dow: 6,
			Diy: 366,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [39, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 10475814600000,
		gdate: [2301, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 11, 20]
		},
		gtime: 10475814600000
	},
	{
		sdate: [1680, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 8, 30],
			Dow: 0,
			Diy: 366,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Snake",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 10475901000000,
		gdate: [2301, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 11, 21]
		},
		gtime: 10475901000000
	},
	{
		sdate: [1680, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 1],
			Dow: 1,
			Diy: 366,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 10475987400000,
		gdate: [2301, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 11, 22]
		},
		gtime: 10475987400000
	},
	{
		sdate: [1680, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 2],
			Dow: 2,
			Diy: 366,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 10476073800000,
		gdate: [2301, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 11, 23]
		},
		gtime: 10476073800000
	},
	{
		sdate: [1680, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 15],
			Dow: 1,
			Diy: 366,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10477197000000,
		gdate: [2302, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 0, 5]
		},
		gtime: 10477197000000
	},
	{
		sdate: [1680, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 29],
			Dow: 1,
			Diy: 366,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10478406600000,
		gdate: [2302, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 0, 19]
		},
		gtime: 10478406600000
	},
	{
		sdate: [1680, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 9, 30],
			Dow: 2,
			Diy: 366,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Snake",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10478493000000,
		gdate: [2302, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 0, 20]
		},
		gtime: 10478493000000
	},
	{
		sdate: [1680, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 1],
			Dow: 3,
			Diy: 366,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 10478579400000,
		gdate: [2302, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 0, 21]
		},
		gtime: 10478579400000
	},
	{
		sdate: [1680, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 2],
			Dow: 4,
			Diy: 366,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 10478665800000,
		gdate: [2302, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 0, 22]
		},
		gtime: 10478665800000
	},
	{
		sdate: [1680, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 15],
			Dow: 3,
			Diy: 366,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [46, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10479789000000,
		gdate: [2302, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 1, 4]
		},
		gtime: 10479789000000
	},
	{
		sdate: [1680, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 29],
			Dow: 3,
			Diy: 366,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10480998600000,
		gdate: [2302, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 1, 18]
		},
		gtime: 10480998600000
	},
	{
		sdate: [1680, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 10, 30],
			Dow: 4,
			Diy: 366,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Snake",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10481085000000,
		gdate: [2302, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 1, 19]
		},
		gtime: 10481085000000
	},
	{
		sdate: [1680, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 1],
			Dow: 5,
			Diy: 366,
			Doy: 336,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 10481171400000,
		gdate: [2302, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 1, 20]
		},
		gtime: 10481171400000
	},
	{
		sdate: [1680, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 2],
			Dow: 6,
			Diy: 366,
			Doy: 337,
			Dim: 30,
			Wiy: 52,
			Woy: [48, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 10481257800000,
		gdate: [2302, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 1, 21]
		},
		gtime: 10481257800000
	},
	{
		sdate: [1680, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 3],
			Dow: 0,
			Diy: 366,
			Doy: 338,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1680],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 10481344200000,
		gdate: [2302, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 1, 22]
		},
		gtime: 10481344200000
	},
	{
		sdate: [1680, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 4],
			Dow: 1,
			Diy: 366,
			Doy: 339,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10481430600000,
		gdate: [2302, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 1, 23]
		},
		gtime: 10481430600000
	},
	{
		sdate: [1680, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 15],
			Dow: 5,
			Diy: 366,
			Doy: 350,
			Dim: 30,
			Wiy: 52,
			Woy: [50, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10482381000000,
		gdate: [2302, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 6]
		},
		gtime: 10482381000000
	},
	{
		sdate: [1680, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 25],
			Dow: 1,
			Diy: 366,
			Doy: 360,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1680],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10483245000000,
		gdate: [2302, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 16]
		},
		gtime: 10483245000000
	},
	{
		sdate: [1680, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 26],
			Dow: 2,
			Diy: 366,
			Doy: 361,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1680],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10483331400000,
		gdate: [2302, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 17]
		},
		gtime: 10483331400000
	},
	{
		sdate: [1680, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 27],
			Dow: 3,
			Diy: 366,
			Doy: 362,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1680],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10483417800000,
		gdate: [2302, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 18]
		},
		gtime: 10483417800000
	},
	{
		sdate: [1680, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 28],
			Dow: 4,
			Diy: 366,
			Doy: 363,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1680],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10483504200000,
		gdate: [2302, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 19]
		},
		gtime: 10483504200000
	},
	{
		sdate: [1680, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 29],
			Dow: 5,
			Diy: 366,
			Doy: 364,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1680],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10483590600000,
		gdate: [2302, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 20]
		},
		gtime: 10483590600000
	},
	{
		sdate: [1680, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 30],
			Dow: 6,
			Diy: 366,
			Doy: 365,
			Dim: 30,
			Wiy: 52,
			Woy: [52, 1680],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Snake",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 10483677000000,
		gdate: [2302, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 21]
		},
		gtime: 10483677000000
	},
	{
		sdate: [1700, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 1],
			Dow: 2,
			Diy: 365,
			Doy: 0,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 11083293000000,
		gdate: [2321, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 21]
		},
		gtime: 11083293000000
	},
	{
		sdate: [1700, 1, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 2],
			Dow: 3,
			Diy: 365,
			Doy: 1,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 11083375800000,
		gdate: [2321, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 22]
		},
		gtime: 11083375800000
	},
	{
		sdate: [1700, 1, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 3],
			Dow: 4,
			Diy: 365,
			Doy: 2,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "rd"
		},
		stime: 11083462200000,
		gdate: [2321, 3, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 23]
		},
		gtime: 11083462200000
	},
	{
		sdate: [1700, 1, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 4],
			Dow: 5,
			Diy: 365,
			Doy: 3,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11083548600000,
		gdate: [2321, 3, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 24]
		},
		gtime: 11083548600000
	},
	{
		sdate: [1700, 1, 5, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 5],
			Dow: 6,
			Diy: 365,
			Doy: 4,
			Dim: 31,
			Wiy: 52,
			Woy: [1, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11083635000000,
		gdate: [2321, 3, 25, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 25]
		},
		gtime: 11083635000000
	},
	{
		sdate: [1700, 1, 6, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 6],
			Dow: 0,
			Diy: 365,
			Doy: 5,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11083721400000,
		gdate: [2321, 3, 26, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 26]
		},
		gtime: 11083721400000
	},
	{
		sdate: [1700, 1, 7, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 7],
			Dow: 1,
			Diy: 365,
			Doy: 6,
			Dim: 31,
			Wiy: 52,
			Woy: [2, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11083807800000,
		gdate: [2321, 3, 27, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 27]
		},
		gtime: 11083807800000
	},
	{
		sdate: [1700, 1, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 15],
			Dow: 2,
			Diy: 365,
			Doy: 14,
			Dim: 31,
			Wiy: 52,
			Woy: [3, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11084499000000,
		gdate: [2321, 4, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 3, 4]
		},
		gtime: 11084499000000
	},
	{
		sdate: [1700, 1, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 29],
			Dow: 2,
			Diy: 365,
			Doy: 28,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11085708600000,
		gdate: [2321, 4, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 3, 18]
		},
		gtime: 11085708600000
	},
	{
		sdate: [1700, 1, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 30],
			Dow: 3,
			Diy: 365,
			Doy: 29,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11085795000000,
		gdate: [2321, 4, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 3, 19]
		},
		gtime: 11085795000000
	},
	{
		sdate: [1700, 1, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 31],
			Dow: 4,
			Diy: 365,
			Doy: 30,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Farvardin",
			msn: "Far",
			asn: "Cow",
			csn: "Aries",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 11085881400000,
		gdate: [2321, 4, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 3, 20]
		},
		gtime: 11085881400000
	},
	{
		sdate: [1700, 2, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 1],
			Dow: 5,
			Diy: 365,
			Doy: 31,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 11085967800000,
		gdate: [2321, 4, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 3, 21]
		},
		gtime: 11085967800000
	},
	{
		sdate: [1700, 2, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 2],
			Dow: 6,
			Diy: 365,
			Doy: 32,
			Dim: 31,
			Wiy: 52,
			Woy: [5, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 11086054200000,
		gdate: [2321, 4, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 3, 22]
		},
		gtime: 11086054200000
	},
	{
		sdate: [1700, 2, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 15],
			Dow: 5,
			Diy: 365,
			Doy: 45,
			Dim: 31,
			Wiy: 52,
			Woy: [7, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11087177400000,
		gdate: [2321, 5, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 4, 5]
		},
		gtime: 11087177400000
	},
	{
		sdate: [1700, 2, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 30],
			Dow: 6,
			Diy: 365,
			Doy: 60,
			Dim: 31,
			Wiy: 52,
			Woy: [9, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11088473400000,
		gdate: [2321, 5, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 4, 20]
		},
		gtime: 11088473400000
	},
	{
		sdate: [1700, 2, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 1, 31],
			Dow: 0,
			Diy: 365,
			Doy: 61,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Ordibehesht",
			msn: "Ord",
			asn: "Cow",
			csn: "Taurus",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 11088559800000,
		gdate: [2321, 5, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 4, 21]
		},
		gtime: 11088559800000
	},
	{
		sdate: [1700, 3, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 1],
			Dow: 1,
			Diy: 365,
			Doy: 62,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "st"
		},
		stime: 11088646200000,
		gdate: [2321, 5, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 4, 22]
		},
		gtime: 11088646200000
	},
	{
		sdate: [1700, 3, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 2],
			Dow: 2,
			Diy: 365,
			Doy: 63,
			Dim: 31,
			Wiy: 52,
			Woy: [10, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "nd"
		},
		stime: 11088732600000,
		gdate: [2321, 5, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 4, 23]
		},
		gtime: 11088732600000
	},
	{
		sdate: [1700, 3, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 15],
			Dow: 1,
			Diy: 365,
			Doy: 76,
			Dim: 31,
			Wiy: 52,
			Woy: [12, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11089855800000,
		gdate: [2321, 6, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 5, 5]
		},
		gtime: 11089855800000
	},
	{
		sdate: [1700, 3, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 30],
			Dow: 2,
			Diy: 365,
			Doy: 91,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "",
			sun: "th"
		},
		stime: 11091151800000,
		gdate: [2321, 6, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 5, 20]
		},
		gtime: 11091151800000
	},
	{
		sdate: [1700, 3, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 2, 31],
			Dow: 3,
			Diy: 365,
			Doy: 92,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Khordad",
			msn: "Kho",
			asn: "Cow",
			csn: "Gemini",
			ssn: "Spring",
			osn: "Tammuz",
			sun: "st"
		},
		stime: 11091238200000,
		gdate: [2321, 6, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 5, 21]
		},
		gtime: 11091238200000
	},
	{
		sdate: [1700, 4, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 1],
			Dow: 4,
			Diy: 365,
			Doy: 93,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 11091324600000,
		gdate: [2321, 6, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 5, 22]
		},
		gtime: 11091324600000
	},
	{
		sdate: [1700, 4, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 2],
			Dow: 5,
			Diy: 365,
			Doy: 94,
			Dim: 31,
			Wiy: 52,
			Woy: [14, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 11091411000000,
		gdate: [2321, 6, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 5, 23]
		},
		gtime: 11091411000000
	},
	{
		sdate: [1700, 4, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 15],
			Dow: 4,
			Diy: 365,
			Doy: 107,
			Dim: 31,
			Wiy: 52,
			Woy: [16, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 11092534200000,
		gdate: [2321, 7, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 6, 6]
		},
		gtime: 11092534200000
	},
	{
		sdate: [1700, 4, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 30],
			Dow: 5,
			Diy: 365,
			Doy: 122,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 11093830200000,
		gdate: [2321, 7, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 6, 21]
		},
		gtime: 11093830200000
	},
	{
		sdate: [1700, 4, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 3, 31],
			Dow: 6,
			Diy: 365,
			Doy: 123,
			Dim: 31,
			Wiy: 52,
			Woy: [18, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Tir",
			msn: "Tir",
			asn: "Cow",
			csn: "Cancer",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 11093916600000,
		gdate: [2321, 7, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 6, 22]
		},
		gtime: 11093916600000
	},
	{
		sdate: [1700, 5, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 1],
			Dow: 0,
			Diy: 365,
			Doy: 124,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 11094003000000,
		gdate: [2321, 7, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 6, 23]
		},
		gtime: 11094003000000
	},
	{
		sdate: [1700, 5, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 2],
			Dow: 1,
			Diy: 365,
			Doy: 125,
			Dim: 31,
			Wiy: 52,
			Woy: [19, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 11094089400000,
		gdate: [2321, 7, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 6, 24]
		},
		gtime: 11094089400000
	},
	{
		sdate: [1700, 5, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 15],
			Dow: 0,
			Diy: 365,
			Doy: 138,
			Dim: 31,
			Wiy: 52,
			Woy: [21, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 11095212600000,
		gdate: [2321, 8, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 7, 6]
		},
		gtime: 11095212600000
	},
	{
		sdate: [1700, 5, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 30],
			Dow: 1,
			Diy: 365,
			Doy: 153,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 11096508600000,
		gdate: [2321, 8, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 7, 21]
		},
		gtime: 11096508600000
	},
	{
		sdate: [1700, 5, 31, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 4, 31],
			Dow: 2,
			Diy: 365,
			Doy: 154,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Amordad",
			msn: "Amo",
			asn: "Cow",
			csn: "Leo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 11096595000000,
		gdate: [2321, 8, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 7, 22]
		},
		gtime: 11096595000000
	},
	{
		sdate: [1700, 6, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 1],
			Dow: 3,
			Diy: 365,
			Doy: 155,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "st"
		},
		stime: 11096681400000,
		gdate: [2321, 8, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 7, 23]
		},
		gtime: 11096681400000
	},
	{
		sdate: [1700, 6, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 2],
			Dow: 4,
			Diy: 365,
			Doy: 156,
			Dim: 31,
			Wiy: 52,
			Woy: [23, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "nd"
		},
		stime: 11096767800000,
		gdate: [2321, 8, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 7, 24]
		},
		gtime: 11096767800000
	},
	{
		sdate: [1700, 6, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 15],
			Dow: 3,
			Diy: 365,
			Doy: 169,
			Dim: 31,
			Wiy: 52,
			Woy: [25, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 11097891000000,
		gdate: [2321, 9, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 8, 6]
		},
		gtime: 11097891000000
	},
	{
		sdate: [1700, 6, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 29],
			Dow: 3,
			Diy: 365,
			Doy: 183,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 11099100600000,
		gdate: [2321, 9, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 8, 20]
		},
		gtime: 11099100600000
	},
	{
		sdate: [1700, 6, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 5, 30],
			Dow: 4,
			Diy: 365,
			Doy: 184,
			Dim: 31,
			Wiy: 52,
			Woy: [27, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Shahrivar",
			msn: "Sha",
			asn: "Cow",
			csn: "Virgo",
			ssn: "Summer",
			osn: "",
			sun: "th"
		},
		stime: 11099190600000,
		gdate: [2321, 9, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 8, 21]
		},
		gtime: 11099190600000
	},
	{
		sdate: [1700, 7, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 1],
			Dow: 6,
			Diy: 365,
			Doy: 186,
			Dim: 30,
			Wiy: 52,
			Woy: [27, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 11099363400000,
		gdate: [2321, 9, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 8, 23]
		},
		gtime: 11099363400000
	},
	{
		sdate: [1700, 7, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 2],
			Dow: 0,
			Diy: 365,
			Doy: 187,
			Dim: 30,
			Wiy: 52,
			Woy: [28, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 11099449800000,
		gdate: [2321, 9, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 8, 24]
		},
		gtime: 11099449800000
	},
	{
		sdate: [1700, 7, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 15],
			Dow: 6,
			Diy: 365,
			Doy: 200,
			Dim: 30,
			Wiy: 52,
			Woy: [29, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11100573000000,
		gdate: [2321, 10, 7, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 9, 7]
		},
		gtime: 11100573000000
	},
	{
		sdate: [1700, 7, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 29],
			Dow: 6,
			Diy: 365,
			Doy: 214,
			Dim: 30,
			Wiy: 52,
			Woy: [31, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11101782600000,
		gdate: [2321, 10, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 9, 21]
		},
		gtime: 11101782600000
	},
	{
		sdate: [1700, 7, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 6, 30],
			Dow: 0,
			Diy: 365,
			Doy: 215,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Mehr",
			msn: "Meh",
			asn: "Cow",
			csn: "Libra",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11101869000000,
		gdate: [2321, 10, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 9, 22]
		},
		gtime: 11101869000000
	},
	{
		sdate: [1700, 8, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 1],
			Dow: 1,
			Diy: 365,
			Doy: 216,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 11101955400000,
		gdate: [2321, 10, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 9, 23]
		},
		gtime: 11101955400000
	},
	{
		sdate: [1700, 8, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 2],
			Dow: 2,
			Diy: 365,
			Doy: 217,
			Dim: 30,
			Wiy: 52,
			Woy: [32, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 11102041800000,
		gdate: [2321, 10, 24, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 9, 24]
		},
		gtime: 11102041800000
	},
	{
		sdate: [1700, 8, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 15],
			Dow: 1,
			Diy: 365,
			Doy: 230,
			Dim: 30,
			Wiy: 52,
			Woy: [34, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11103165000000,
		gdate: [2321, 11, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 10, 6]
		},
		gtime: 11103165000000
	},
	{
		sdate: [1700, 8, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 29],
			Dow: 1,
			Diy: 365,
			Doy: 244,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11104374600000,
		gdate: [2321, 11, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 10, 20]
		},
		gtime: 11104374600000
	},
	{
		sdate: [1700, 8, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 7, 30],
			Dow: 2,
			Diy: 365,
			Doy: 245,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Aban",
			msn: "Aba",
			asn: "Cow",
			csn: "Scorpio",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11104461000000,
		gdate: [2321, 11, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 10, 21]
		},
		gtime: 11104461000000
	},
	{
		sdate: [1700, 9, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 1],
			Dow: 3,
			Diy: 365,
			Doy: 246,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "st"
		},
		stime: 11104547400000,
		gdate: [2321, 11, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 10, 22]
		},
		gtime: 11104547400000
	},
	{
		sdate: [1700, 9, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 2],
			Dow: 4,
			Diy: 365,
			Doy: 247,
			Dim: 30,
			Wiy: 52,
			Woy: [36, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "nd"
		},
		stime: 11104633800000,
		gdate: [2321, 11, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 10, 23]
		},
		gtime: 11104633800000
	},
	{
		sdate: [1700, 9, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 15],
			Dow: 3,
			Diy: 365,
			Doy: 260,
			Dim: 30,
			Wiy: 52,
			Woy: [38, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11105757000000,
		gdate: [2321, 12, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 11, 6]
		},
		gtime: 11105757000000
	},
	{
		sdate: [1700, 9, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 29],
			Dow: 3,
			Diy: 365,
			Doy: 274,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "",
			sun: "th"
		},
		stime: 11106966600000,
		gdate: [2321, 12, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 11, 20]
		},
		gtime: 11106966600000
	},
	{
		sdate: [1700, 9, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 8, 30],
			Dow: 4,
			Diy: 365,
			Doy: 275,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Azar",
			msn: "Aza",
			asn: "Cow",
			csn: "Sagittarius",
			ssn: "Fall",
			osn: "Yalda",
			sun: "th"
		},
		stime: 11107053000000,
		gdate: [2321, 12, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 11, 21]
		},
		gtime: 11107053000000
	},
	{
		sdate: [1700, 10, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 1],
			Dow: 5,
			Diy: 365,
			Doy: 276,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 11107139400000,
		gdate: [2321, 12, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 11, 22]
		},
		gtime: 11107139400000
	},
	{
		sdate: [1700, 10, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 2],
			Dow: 6,
			Diy: 365,
			Doy: 277,
			Dim: 30,
			Wiy: 52,
			Woy: [40, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 11107225800000,
		gdate: [2321, 12, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 11, 23]
		},
		gtime: 11107225800000
	},
	{
		sdate: [1700, 10, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 15],
			Dow: 5,
			Diy: 365,
			Doy: 290,
			Dim: 30,
			Wiy: 52,
			Woy: [42, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11108349000000,
		gdate: [2322, 1, 5, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 0, 5]
		},
		gtime: 11108349000000
	},
	{
		sdate: [1700, 10, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 29],
			Dow: 5,
			Diy: 365,
			Doy: 304,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11109558600000,
		gdate: [2322, 1, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 0, 19]
		},
		gtime: 11109558600000
	},
	{
		sdate: [1700, 10, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 9, 30],
			Dow: 6,
			Diy: 365,
			Doy: 305,
			Dim: 30,
			Wiy: 52,
			Woy: [44, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Dey",
			msn: "Dey",
			asn: "Cow",
			csn: "Capricorn",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11109645000000,
		gdate: [2322, 1, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 0, 20]
		},
		gtime: 11109645000000
	},
	{
		sdate: [1700, 11, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 1],
			Dow: 0,
			Diy: 365,
			Doy: 306,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 11109731400000,
		gdate: [2322, 1, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 0, 21]
		},
		gtime: 11109731400000
	},
	{
		sdate: [1700, 11, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 2],
			Dow: 1,
			Diy: 365,
			Doy: 307,
			Dim: 30,
			Wiy: 52,
			Woy: [45, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 11109817800000,
		gdate: [2322, 1, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 0, 22]
		},
		gtime: 11109817800000
	},
	{
		sdate: [1700, 11, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 15],
			Dow: 0,
			Diy: 365,
			Doy: 320,
			Dim: 30,
			Wiy: 52,
			Woy: [47, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11110941000000,
		gdate: [2322, 2, 4, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 1, 4]
		},
		gtime: 11110941000000
	},
	{
		sdate: [1700, 11, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 29],
			Dow: 0,
			Diy: 365,
			Doy: 334,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1700],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11112150600000,
		gdate: [2322, 2, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 1, 18]
		},
		gtime: 11112150600000
	},
	{
		sdate: [1700, 11, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 10, 30],
			Dow: 1,
			Diy: 365,
			Doy: 335,
			Dim: 30,
			Wiy: 52,
			Woy: [49, 1700],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Bahman",
			msn: "Bah",
			asn: "Cow",
			csn: "Aquarius",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11112237000000,
		gdate: [2322, 2, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 1, 19]
		},
		gtime: 11112237000000
	},
	{
		sdate: [1700, 12, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 1],
			Dow: 2,
			Diy: 365,
			Doy: 336,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "st"
		},
		stime: 11112323400000,
		gdate: [2322, 2, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 1, 20]
		},
		gtime: 11112323400000
	},
	{
		sdate: [1700, 12, 2, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 2],
			Dow: 3,
			Diy: 365,
			Doy: 337,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1700],
			dsn: "Tue",
			dfn: "Tuesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "nd"
		},
		stime: 11112409800000,
		gdate: [2322, 2, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 1, 21]
		},
		gtime: 11112409800000
	},
	{
		sdate: [1700, 12, 3, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 3],
			Dow: 4,
			Diy: 365,
			Doy: 338,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1700],
			dsn: "Wed",
			dfn: "Wednesday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "rd"
		},
		stime: 11112496200000,
		gdate: [2322, 2, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 1, 22]
		},
		gtime: 11112496200000
	},
	{
		sdate: [1700, 12, 4, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 4],
			Dow: 5,
			Diy: 365,
			Doy: 339,
			Dim: 29,
			Wiy: 52,
			Woy: [49, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11112582600000,
		gdate: [2322, 2, 23, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 1, 23]
		},
		gtime: 11112582600000
	},
	{
		sdate: [1700, 12, 15, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 15],
			Dow: 2,
			Diy: 365,
			Doy: 350,
			Dim: 29,
			Wiy: 52,
			Woy: [51, 1700],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11113533000000,
		gdate: [2322, 3, 6, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 2, 6]
		},
		gtime: 11113533000000
	},
	{
		sdate: [1700, 12, 25, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 25],
			Dow: 5,
			Diy: 365,
			Doy: 360,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1700],
			dsn: "Thu",
			dfn: "Thursday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11114397000000,
		gdate: [2322, 3, 16, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 2, 16]
		},
		gtime: 11114397000000
	},
	{
		sdate: [1700, 12, 26, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 26],
			Dow: 6,
			Diy: 365,
			Doy: 361,
			Dim: 29,
			Wiy: 52,
			Woy: [52, 1700],
			dsn: "Fri",
			dfn: "Friday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11114483400000,
		gdate: [2322, 3, 17, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 2, 17]
		},
		gtime: 11114483400000
	},
	{
		sdate: [1700, 12, 27, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 27],
			Dow: 0,
			Diy: 365,
			Doy: 362,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1701],
			dsn: "Sat",
			dfn: "Saturday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11114569800000,
		gdate: [2322, 3, 18, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 2, 18]
		},
		gtime: 11114569800000
	},
	{
		sdate: [1700, 12, 28, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 28],
			Dow: 1,
			Diy: 365,
			Doy: 363,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1701],
			dsn: "Sun",
			dfn: "Sunday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11114656200000,
		gdate: [2322, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 2, 19]
		},
		gtime: 11114656200000
	},
	{
		sdate: [1700, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 29],
			Dow: 2,
			Diy: 365,
			Doy: 364,
			Dim: 29,
			Wiy: 52,
			Woy: [1, 1701],
			dsn: "Mon",
			dfn: "Monday",
			esn: "am",
			efn: "AM",
			mfn: "Esfand",
			msn: "Esf",
			asn: "Cow",
			csn: "Pisces",
			ssn: "Winter",
			osn: "",
			sun: "th"
		},
		stime: 11114742600000,
		gdate: [2322, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 2, 20]
		},
		gtime: 11114742600000
	}
];
