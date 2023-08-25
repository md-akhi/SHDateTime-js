/** for (let year = 1200; year <= 1700; year += 20) {
	[
		[1, 1],
		[1, 2],
		[1, 30],
		[1, 31],

		[2, 1],
		[2, 2],
		[2, 30],
		[2, 31],

		[3, 1],
		[3, 2],
		[3, 30],
		[3, 31],

		[4, 1],
		[4, 2],
		[4, 30],
		[4, 31],

		[5, 1],
		[5, 2],
		[5, 30],
		[5, 31],

		[6, 1],
		[6, 2],
		[6, 29],
		[6, 30],

		[7, 1],
		[7, 2],
		[7, 29],
		[7, 30],

		[8, 1],
		[8, 2],
		[8, 29],
		[8, 30],

		[9, 1],
		[9, 2],
		[9, 29],
		[9, 30],

		[10, 1],
		[10, 2],
		[10, 29],
		[10, 30],

		[11, 1],
		[11, 2],
		[11, 26],
		[11, 27],
		[11, 28],
		[11, 29],
		[11, 30],

		[12, 1],
		[12, 2],
		[12, 3],
		[12, 4],
		[12, 5],
		[12, 30],
		[12, 31]
	].forEach(([month, day]) => {
		let shdate = new SHDate(year, month - 1, day, 10, 20, 30);
		const [
			years,
			months,
			days,
			hours,
			minutes,
			seconds,
			Dow,
			Diy,
			Doy,
			Dim,
			Wiy,
			[Woyw, Woyy],
			dsn,
			msn
		] = shdate.format("yy=mm=dd=hh=ii=ss=Dow=Diy=Doy=Dim=Wiy=Woy=dsn=msn");

		let gdate = new Date();
		gdate.setTime(shdate.getTime());
		const glongmonth = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		const gshortmonths = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		];
		const gweekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const [gyears, gmonths, gdays, ghours, gminutes, gseconds, gdow] = [
			gdate.getFullYear(),
			gdate.getMonth(),
			gdate.getDate(),
			gdate.getHours(),
			gdate.getMinutes(),
			gdate.getSeconds(),
			gdate.getDay()
		];
		if (month == 11 && day !== parseInt(days)) {
			console.log("{},");
		} else
			console.log(
				`{
					sdate:"${years}-${months}-${days}", solar:"${years}.${Doy}" ,stime:${shdate.getTime()},
					gdate:"${gyears}-${gmonths}-${gdays}", gregorian:"" ,gtime:${gdate.getTime()}
			},`
			);
	});
}*/
export const DateDOY = [
	{
		sdate: "1200-00-01",
		solar: "1200.0",
		stime: -4695123914000,
		gdate: "1821-2-21",
		gregorian: "",
		gtime: -4695123914000
	},
	{
		sdate: "1200-00-02",
		solar: "1200.1",
		stime: -4695037514000,
		gdate: "1821-2-22",
		gregorian: "",
		gtime: -4695037514000
	},
	{
		sdate: "1200-00-30",
		solar: "1200.29",
		stime: -4692618314000,
		gdate: "1821-3-19",
		gregorian: "",
		gtime: -4692618314000
	},
	{
		sdate: "1200-00-31",
		solar: "1200.30",
		stime: -4692531914000,
		gdate: "1821-3-20",
		gregorian: "",
		gtime: -4692531914000
	},
	{
		sdate: "1200-01-01",
		solar: "1200.31",
		stime: -4692445514000,
		gdate: "1821-3-21",
		gregorian: "",
		gtime: -4692445514000
	},
	{
		sdate: "1200-01-02",
		solar: "1200.32",
		stime: -4692359114000,
		gdate: "1821-3-22",
		gregorian: "",
		gtime: -4692359114000
	},
	{
		sdate: "1200-01-30",
		solar: "1200.60",
		stime: -4689939914000,
		gdate: "1821-4-20",
		gregorian: "",
		gtime: -4689939914000
	},
	{
		sdate: "1200-01-31",
		solar: "1200.61",
		stime: -4689853514000,
		gdate: "1821-4-21",
		gregorian: "",
		gtime: -4689853514000
	},
	{
		sdate: "1200-02-01",
		solar: "1200.62",
		stime: -4689767114000,
		gdate: "1821-4-22",
		gregorian: "",
		gtime: -4689767114000
	},
	{
		sdate: "1200-02-02",
		solar: "1200.63",
		stime: -4689680714000,
		gdate: "1821-4-23",
		gregorian: "",
		gtime: -4689680714000
	},
	{
		sdate: "1200-02-30",
		solar: "1200.91",
		stime: -4687261514000,
		gdate: "1821-5-20",
		gregorian: "",
		gtime: -4687261514000
	},
	{
		sdate: "1200-02-31",
		solar: "1200.92",
		stime: -4687175114000,
		gdate: "1821-5-21",
		gregorian: "",
		gtime: -4687175114000
	},
	{
		sdate: "1200-03-01",
		solar: "1200.93",
		stime: -4687088714000,
		gdate: "1821-5-22",
		gregorian: "",
		gtime: -4687088714000
	},
	{
		sdate: "1200-03-02",
		solar: "1200.94",
		stime: -4687002314000,
		gdate: "1821-5-23",
		gregorian: "",
		gtime: -4687002314000
	},
	{
		sdate: "1200-03-30",
		solar: "1200.122",
		stime: -4684583114000,
		gdate: "1821-6-21",
		gregorian: "",
		gtime: -4684583114000
	},
	{
		sdate: "1200-03-31",
		solar: "1200.123",
		stime: -4684496714000,
		gdate: "1821-6-22",
		gregorian: "",
		gtime: -4684496714000
	},
	{
		sdate: "1200-04-01",
		solar: "1200.124",
		stime: -4684410314000,
		gdate: "1821-6-23",
		gregorian: "",
		gtime: -4684410314000
	},
	{
		sdate: "1200-04-02",
		solar: "1200.125",
		stime: -4684323914000,
		gdate: "1821-6-24",
		gregorian: "",
		gtime: -4684323914000
	},
	{
		sdate: "1200-04-30",
		solar: "1200.153",
		stime: -4681904714000,
		gdate: "1821-7-21",
		gregorian: "",
		gtime: -4681904714000
	},
	{
		sdate: "1200-04-31",
		solar: "1200.154",
		stime: -4681818314000,
		gdate: "1821-7-22",
		gregorian: "",
		gtime: -4681818314000
	},
	{
		sdate: "1200-05-01",
		solar: "1200.155",
		stime: -4681731914000,
		gdate: "1821-7-23",
		gregorian: "",
		gtime: -4681731914000
	},
	{
		sdate: "1200-05-02",
		solar: "1200.156",
		stime: -4681645514000,
		gdate: "1821-7-24",
		gregorian: "",
		gtime: -4681645514000
	},
	{
		sdate: "1200-05-29",
		solar: "1200.183",
		stime: -4679312714000,
		gdate: "1821-8-20",
		gregorian: "",
		gtime: -4679312714000
	},
	{
		sdate: "1200-05-30",
		solar: "1200.184",
		stime: -4679226314000,
		gdate: "1821-8-21",
		gregorian: "",
		gtime: -4679226314000
	},
	{
		sdate: "1200-06-01",
		solar: "1200.186",
		stime: -4679053514000,
		gdate: "1821-8-23",
		gregorian: "",
		gtime: -4679053514000
	},
	{
		sdate: "1200-06-02",
		solar: "1200.187",
		stime: -4678967114000,
		gdate: "1821-8-24",
		gregorian: "",
		gtime: -4678967114000
	},
	{
		sdate: "1200-06-29",
		solar: "1200.214",
		stime: -4676634314000,
		gdate: "1821-9-21",
		gregorian: "",
		gtime: -4676634314000
	},
	{
		sdate: "1200-06-30",
		solar: "1200.215",
		stime: -4676547914000,
		gdate: "1821-9-22",
		gregorian: "",
		gtime: -4676547914000
	},
	{
		sdate: "1200-07-01",
		solar: "1200.216",
		stime: -4676461514000,
		gdate: "1821-9-23",
		gregorian: "",
		gtime: -4676461514000
	},
	{
		sdate: "1200-07-02",
		solar: "1200.217",
		stime: -4676375114000,
		gdate: "1821-9-24",
		gregorian: "",
		gtime: -4676375114000
	},
	{
		sdate: "1200-07-29",
		solar: "1200.244",
		stime: -4674042314000,
		gdate: "1821-10-20",
		gregorian: "",
		gtime: -4674042314000
	},
	{
		sdate: "1200-07-30",
		solar: "1200.245",
		stime: -4673955914000,
		gdate: "1821-10-21",
		gregorian: "",
		gtime: -4673955914000
	},
	{
		sdate: "1200-08-01",
		solar: "1200.246",
		stime: -4673869514000,
		gdate: "1821-10-22",
		gregorian: "",
		gtime: -4673869514000
	},
	{
		sdate: "1200-08-02",
		solar: "1200.247",
		stime: -4673783114000,
		gdate: "1821-10-23",
		gregorian: "",
		gtime: -4673783114000
	},
	{
		sdate: "1200-08-29",
		solar: "1200.274",
		stime: -4671450314000,
		gdate: "1821-11-20",
		gregorian: "",
		gtime: -4671450314000
	},
	{
		sdate: "1200-08-30",
		solar: "1200.275",
		stime: -4671363914000,
		gdate: "1821-11-21",
		gregorian: "",
		gtime: -4671363914000
	},
	{
		sdate: "1200-09-01",
		solar: "1200.276",
		stime: -4671277514000,
		gdate: "1821-11-22",
		gregorian: "",
		gtime: -4671277514000
	},
	{
		sdate: "1200-09-02",
		solar: "1200.277",
		stime: -4671191114000,
		gdate: "1821-11-23",
		gregorian: "",
		gtime: -4671191114000
	},
	{
		sdate: "1200-09-29",
		solar: "1200.304",
		stime: -4668858314000,
		gdate: "1822-0-19",
		gregorian: "",
		gtime: -4668858314000
	},
	{
		sdate: "1200-09-30",
		solar: "1200.305",
		stime: -4668771914000,
		gdate: "1822-0-20",
		gregorian: "",
		gtime: -4668771914000
	},
	{
		sdate: "1200-10-01",
		solar: "1200.306",
		stime: -4668685514000,
		gdate: "1822-0-21",
		gregorian: "",
		gtime: -4668685514000
	},
	{
		sdate: "1200-10-02",
		solar: "1200.307",
		stime: -4668599114000,
		gdate: "1822-0-22",
		gregorian: "",
		gtime: -4668599114000
	},
	{
		sdate: "1200-10-26",
		solar: "1200.331",
		stime: -4666525514000,
		gdate: "1822-1-15",
		gregorian: "",
		gtime: -4666525514000
	},
	{
		sdate: "1200-10-27",
		solar: "1200.332",
		stime: -4666439114000,
		gdate: "1822-1-16",
		gregorian: "",
		gtime: -4666439114000
	},
	{
		sdate: "1200-10-28",
		solar: "1200.333",
		stime: -4666352714000,
		gdate: "1822-1-17",
		gregorian: "",
		gtime: -4666352714000
	},
	{
		sdate: "1200-10-29",
		solar: "1200.334",
		stime: -4666266314000,
		gdate: "1822-1-18",
		gregorian: "",
		gtime: -4666266314000
	},
	{
		sdate: "1200-10-30",
		solar: "1200.335",
		stime: -4666179914000,
		gdate: "1822-1-19",
		gregorian: "",
		gtime: -4666179914000
	},
	{
		sdate: "1200-11-01",
		solar: "1200.336",
		stime: -4666093514000,
		gdate: "1822-1-20",
		gregorian: "",
		gtime: -4666093514000
	},
	{
		sdate: "1200-11-02",
		solar: "1200.337",
		stime: -4666007114000,
		gdate: "1822-1-21",
		gregorian: "",
		gtime: -4666007114000
	},
	{
		sdate: "1200-11-03",
		solar: "1200.338",
		stime: -4665920714000,
		gdate: "1822-1-22",
		gregorian: "",
		gtime: -4665920714000
	},
	{
		sdate: "1200-11-04",
		solar: "1200.339",
		stime: -4665834314000,
		gdate: "1822-1-23",
		gregorian: "",
		gtime: -4665834314000
	},
	{
		sdate: "1200-11-05",
		solar: "1200.340",
		stime: -4665747914000,
		gdate: "1822-1-24",
		gregorian: "",
		gtime: -4665747914000
	},
	{
		sdate: "1201-00-01",
		solar: "1201.0",
		stime: -4663587914000,
		gdate: "1822-2-21",
		gregorian: "",
		gtime: -4663587914000
	},
	{
		sdate: "1201-00-02",
		solar: "1201.1",
		stime: -4663501514000,
		gdate: "1822-2-22",
		gregorian: "",
		gtime: -4663501514000
	},
	{
		sdate: "1220-00-01",
		solar: "1220.0",
		stime: -4063971914000,
		gdate: "1841-2-21",
		gregorian: "",
		gtime: -4063971914000
	},
	{
		sdate: "1220-00-02",
		solar: "1220.1",
		stime: -4063885514000,
		gdate: "1841-2-22",
		gregorian: "",
		gtime: -4063885514000
	},
	{
		sdate: "1220-00-30",
		solar: "1220.29",
		stime: -4061466314000,
		gdate: "1841-3-19",
		gregorian: "",
		gtime: -4061466314000
	},
	{
		sdate: "1220-00-31",
		solar: "1220.30",
		stime: -4061379914000,
		gdate: "1841-3-20",
		gregorian: "",
		gtime: -4061379914000
	},
	{
		sdate: "1220-01-01",
		solar: "1220.31",
		stime: -4061293514000,
		gdate: "1841-3-21",
		gregorian: "",
		gtime: -4061293514000
	},
	{
		sdate: "1220-01-02",
		solar: "1220.32",
		stime: -4061207114000,
		gdate: "1841-3-22",
		gregorian: "",
		gtime: -4061207114000
	},
	{
		sdate: "1220-01-30",
		solar: "1220.60",
		stime: -4058787914000,
		gdate: "1841-4-20",
		gregorian: "",
		gtime: -4058787914000
	},
	{
		sdate: "1220-01-31",
		solar: "1220.61",
		stime: -4058701514000,
		gdate: "1841-4-21",
		gregorian: "",
		gtime: -4058701514000
	},
	{
		sdate: "1220-02-01",
		solar: "1220.62",
		stime: -4058615114000,
		gdate: "1841-4-22",
		gregorian: "",
		gtime: -4058615114000
	},
	{
		sdate: "1220-02-02",
		solar: "1220.63",
		stime: -4058528714000,
		gdate: "1841-4-23",
		gregorian: "",
		gtime: -4058528714000
	},
	{
		sdate: "1220-02-30",
		solar: "1220.91",
		stime: -4056109514000,
		gdate: "1841-5-20",
		gregorian: "",
		gtime: -4056109514000
	},
	{
		sdate: "1220-02-31",
		solar: "1220.92",
		stime: -4056023114000,
		gdate: "1841-5-21",
		gregorian: "",
		gtime: -4056023114000
	},
	{
		sdate: "1220-03-01",
		solar: "1220.93",
		stime: -4055936714000,
		gdate: "1841-5-22",
		gregorian: "",
		gtime: -4055936714000
	},
	{
		sdate: "1220-03-02",
		solar: "1220.94",
		stime: -4055850314000,
		gdate: "1841-5-23",
		gregorian: "",
		gtime: -4055850314000
	},
	{
		sdate: "1220-03-30",
		solar: "1220.122",
		stime: -4053431114000,
		gdate: "1841-6-21",
		gregorian: "",
		gtime: -4053431114000
	},
	{
		sdate: "1220-03-31",
		solar: "1220.123",
		stime: -4053344714000,
		gdate: "1841-6-22",
		gregorian: "",
		gtime: -4053344714000
	},
	{
		sdate: "1220-04-01",
		solar: "1220.124",
		stime: -4053258314000,
		gdate: "1841-6-23",
		gregorian: "",
		gtime: -4053258314000
	},
	{
		sdate: "1220-04-02",
		solar: "1220.125",
		stime: -4053171914000,
		gdate: "1841-6-24",
		gregorian: "",
		gtime: -4053171914000
	},
	{
		sdate: "1220-04-30",
		solar: "1220.153",
		stime: -4050752714000,
		gdate: "1841-7-21",
		gregorian: "",
		gtime: -4050752714000
	},
	{
		sdate: "1220-04-31",
		solar: "1220.154",
		stime: -4050666314000,
		gdate: "1841-7-22",
		gregorian: "",
		gtime: -4050666314000
	},
	{
		sdate: "1220-05-01",
		solar: "1220.155",
		stime: -4050579914000,
		gdate: "1841-7-23",
		gregorian: "",
		gtime: -4050579914000
	},
	{
		sdate: "1220-05-02",
		solar: "1220.156",
		stime: -4050493514000,
		gdate: "1841-7-24",
		gregorian: "",
		gtime: -4050493514000
	},
	{
		sdate: "1220-05-29",
		solar: "1220.183",
		stime: -4048160714000,
		gdate: "1841-8-20",
		gregorian: "",
		gtime: -4048160714000
	},
	{
		sdate: "1220-05-30",
		solar: "1220.184",
		stime: -4048074314000,
		gdate: "1841-8-21",
		gregorian: "",
		gtime: -4048074314000
	},
	{
		sdate: "1220-06-01",
		solar: "1220.186",
		stime: -4047901514000,
		gdate: "1841-8-23",
		gregorian: "",
		gtime: -4047901514000
	},
	{
		sdate: "1220-06-02",
		solar: "1220.187",
		stime: -4047815114000,
		gdate: "1841-8-24",
		gregorian: "",
		gtime: -4047815114000
	},
	{
		sdate: "1220-06-29",
		solar: "1220.214",
		stime: -4045482314000,
		gdate: "1841-9-21",
		gregorian: "",
		gtime: -4045482314000
	},
	{
		sdate: "1220-06-30",
		solar: "1220.215",
		stime: -4045395914000,
		gdate: "1841-9-22",
		gregorian: "",
		gtime: -4045395914000
	},
	{
		sdate: "1220-07-01",
		solar: "1220.216",
		stime: -4045309514000,
		gdate: "1841-9-23",
		gregorian: "",
		gtime: -4045309514000
	},
	{
		sdate: "1220-07-02",
		solar: "1220.217",
		stime: -4045223114000,
		gdate: "1841-9-24",
		gregorian: "",
		gtime: -4045223114000
	},
	{
		sdate: "1220-07-29",
		solar: "1220.244",
		stime: -4042890314000,
		gdate: "1841-10-20",
		gregorian: "",
		gtime: -4042890314000
	},
	{
		sdate: "1220-07-30",
		solar: "1220.245",
		stime: -4042803914000,
		gdate: "1841-10-21",
		gregorian: "",
		gtime: -4042803914000
	},
	{
		sdate: "1220-08-01",
		solar: "1220.246",
		stime: -4042717514000,
		gdate: "1841-10-22",
		gregorian: "",
		gtime: -4042717514000
	},
	{
		sdate: "1220-08-02",
		solar: "1220.247",
		stime: -4042631114000,
		gdate: "1841-10-23",
		gregorian: "",
		gtime: -4042631114000
	},
	{
		sdate: "1220-08-29",
		solar: "1220.274",
		stime: -4040298314000,
		gdate: "1841-11-20",
		gregorian: "",
		gtime: -4040298314000
	},
	{
		sdate: "1220-08-30",
		solar: "1220.275",
		stime: -4040211914000,
		gdate: "1841-11-21",
		gregorian: "",
		gtime: -4040211914000
	},
	{
		sdate: "1220-09-01",
		solar: "1220.276",
		stime: -4040125514000,
		gdate: "1841-11-22",
		gregorian: "",
		gtime: -4040125514000
	},
	{
		sdate: "1220-09-02",
		solar: "1220.277",
		stime: -4040039114000,
		gdate: "1841-11-23",
		gregorian: "",
		gtime: -4040039114000
	},
	{
		sdate: "1220-09-29",
		solar: "1220.304",
		stime: -4037706314000,
		gdate: "1842-0-19",
		gregorian: "",
		gtime: -4037706314000
	},
	{
		sdate: "1220-09-30",
		solar: "1220.305",
		stime: -4037619914000,
		gdate: "1842-0-20",
		gregorian: "",
		gtime: -4037619914000
	},
	{
		sdate: "1220-10-01",
		solar: "1220.306",
		stime: -4037533514000,
		gdate: "1842-0-21",
		gregorian: "",
		gtime: -4037533514000
	},
	{
		sdate: "1220-10-02",
		solar: "1220.307",
		stime: -4037447114000,
		gdate: "1842-0-22",
		gregorian: "",
		gtime: -4037447114000
	},
	{
		sdate: "1220-10-26",
		solar: "1220.331",
		stime: -4035373514000,
		gdate: "1842-1-15",
		gregorian: "",
		gtime: -4035373514000
	},
	{
		sdate: "1220-10-27",
		solar: "1220.332",
		stime: -4035287114000,
		gdate: "1842-1-16",
		gregorian: "",
		gtime: -4035287114000
	},
	{
		sdate: "1220-10-28",
		solar: "1220.333",
		stime: -4035200714000,
		gdate: "1842-1-17",
		gregorian: "",
		gtime: -4035200714000
	},
	{
		sdate: "1220-10-29",
		solar: "1220.334",
		stime: -4035114314000,
		gdate: "1842-1-18",
		gregorian: "",
		gtime: -4035114314000
	},
	{
		sdate: "1220-10-30",
		solar: "1220.335",
		stime: -4035027914000,
		gdate: "1842-1-19",
		gregorian: "",
		gtime: -4035027914000
	},
	{
		sdate: "1220-11-01",
		solar: "1220.336",
		stime: -4034941514000,
		gdate: "1842-1-20",
		gregorian: "",
		gtime: -4034941514000
	},
	{
		sdate: "1220-11-02",
		solar: "1220.337",
		stime: -4034855114000,
		gdate: "1842-1-21",
		gregorian: "",
		gtime: -4034855114000
	},
	{
		sdate: "1220-11-03",
		solar: "1220.338",
		stime: -4034768714000,
		gdate: "1842-1-22",
		gregorian: "",
		gtime: -4034768714000
	},
	{
		sdate: "1220-11-04",
		solar: "1220.339",
		stime: -4034682314000,
		gdate: "1842-1-23",
		gregorian: "",
		gtime: -4034682314000
	},
	{
		sdate: "1220-11-05",
		solar: "1220.340",
		stime: -4034595914000,
		gdate: "1842-1-24",
		gregorian: "",
		gtime: -4034595914000
	},
	{
		sdate: "1221-00-01",
		solar: "1221.0",
		stime: -4032435914000,
		gdate: "1842-2-21",
		gregorian: "",
		gtime: -4032435914000
	},
	{
		sdate: "1221-00-02",
		solar: "1221.1",
		stime: -4032349514000,
		gdate: "1842-2-22",
		gregorian: "",
		gtime: -4032349514000
	},
	{
		sdate: "1240-00-01",
		solar: "1240.0",
		stime: -3432819914000,
		gdate: "1861-2-21",
		gregorian: "",
		gtime: -3432819914000
	},
	{
		sdate: "1240-00-02",
		solar: "1240.1",
		stime: -3432733514000,
		gdate: "1861-2-22",
		gregorian: "",
		gtime: -3432733514000
	},
	{
		sdate: "1240-00-30",
		solar: "1240.29",
		stime: -3430314314000,
		gdate: "1861-3-19",
		gregorian: "",
		gtime: -3430314314000
	},
	{
		sdate: "1240-00-31",
		solar: "1240.30",
		stime: -3430227914000,
		gdate: "1861-3-20",
		gregorian: "",
		gtime: -3430227914000
	},
	{
		sdate: "1240-01-01",
		solar: "1240.31",
		stime: -3430141514000,
		gdate: "1861-3-21",
		gregorian: "",
		gtime: -3430141514000
	},
	{
		sdate: "1240-01-02",
		solar: "1240.32",
		stime: -3430055114000,
		gdate: "1861-3-22",
		gregorian: "",
		gtime: -3430055114000
	},
	{
		sdate: "1240-01-30",
		solar: "1240.60",
		stime: -3427635914000,
		gdate: "1861-4-20",
		gregorian: "",
		gtime: -3427635914000
	},
	{
		sdate: "1240-01-31",
		solar: "1240.61",
		stime: -3427549514000,
		gdate: "1861-4-21",
		gregorian: "",
		gtime: -3427549514000
	},
	{
		sdate: "1240-02-01",
		solar: "1240.62",
		stime: -3427463114000,
		gdate: "1861-4-22",
		gregorian: "",
		gtime: -3427463114000
	},
	{
		sdate: "1240-02-02",
		solar: "1240.63",
		stime: -3427376714000,
		gdate: "1861-4-23",
		gregorian: "",
		gtime: -3427376714000
	},
	{
		sdate: "1240-02-30",
		solar: "1240.91",
		stime: -3424957514000,
		gdate: "1861-5-20",
		gregorian: "",
		gtime: -3424957514000
	},
	{
		sdate: "1240-02-31",
		solar: "1240.92",
		stime: -3424871114000,
		gdate: "1861-5-21",
		gregorian: "",
		gtime: -3424871114000
	},
	{
		sdate: "1240-03-01",
		solar: "1240.93",
		stime: -3424784714000,
		gdate: "1861-5-22",
		gregorian: "",
		gtime: -3424784714000
	},
	{
		sdate: "1240-03-02",
		solar: "1240.94",
		stime: -3424698314000,
		gdate: "1861-5-23",
		gregorian: "",
		gtime: -3424698314000
	},
	{
		sdate: "1240-03-30",
		solar: "1240.122",
		stime: -3422279114000,
		gdate: "1861-6-21",
		gregorian: "",
		gtime: -3422279114000
	},
	{
		sdate: "1240-03-31",
		solar: "1240.123",
		stime: -3422192714000,
		gdate: "1861-6-22",
		gregorian: "",
		gtime: -3422192714000
	},
	{
		sdate: "1240-04-01",
		solar: "1240.124",
		stime: -3422106314000,
		gdate: "1861-6-23",
		gregorian: "",
		gtime: -3422106314000
	},
	{
		sdate: "1240-04-02",
		solar: "1240.125",
		stime: -3422019914000,
		gdate: "1861-6-24",
		gregorian: "",
		gtime: -3422019914000
	},
	{
		sdate: "1240-04-30",
		solar: "1240.153",
		stime: -3419600714000,
		gdate: "1861-7-21",
		gregorian: "",
		gtime: -3419600714000
	},
	{
		sdate: "1240-04-31",
		solar: "1240.154",
		stime: -3419514314000,
		gdate: "1861-7-22",
		gregorian: "",
		gtime: -3419514314000
	},
	{
		sdate: "1240-05-01",
		solar: "1240.155",
		stime: -3419427914000,
		gdate: "1861-7-23",
		gregorian: "",
		gtime: -3419427914000
	},
	{
		sdate: "1240-05-02",
		solar: "1240.156",
		stime: -3419341514000,
		gdate: "1861-7-24",
		gregorian: "",
		gtime: -3419341514000
	},
	{
		sdate: "1240-05-29",
		solar: "1240.183",
		stime: -3417008714000,
		gdate: "1861-8-20",
		gregorian: "",
		gtime: -3417008714000
	},
	{
		sdate: "1240-05-30",
		solar: "1240.184",
		stime: -3416922314000,
		gdate: "1861-8-21",
		gregorian: "",
		gtime: -3416922314000
	},
	{
		sdate: "1240-06-01",
		solar: "1240.186",
		stime: -3416749514000,
		gdate: "1861-8-23",
		gregorian: "",
		gtime: -3416749514000
	},
	{
		sdate: "1240-06-02",
		solar: "1240.187",
		stime: -3416663114000,
		gdate: "1861-8-24",
		gregorian: "",
		gtime: -3416663114000
	},
	{
		sdate: "1240-06-29",
		solar: "1240.214",
		stime: -3414330314000,
		gdate: "1861-9-21",
		gregorian: "",
		gtime: -3414330314000
	},
	{
		sdate: "1240-06-30",
		solar: "1240.215",
		stime: -3414243914000,
		gdate: "1861-9-22",
		gregorian: "",
		gtime: -3414243914000
	},
	{
		sdate: "1240-07-01",
		solar: "1240.216",
		stime: -3414157514000,
		gdate: "1861-9-23",
		gregorian: "",
		gtime: -3414157514000
	},
	{
		sdate: "1240-07-02",
		solar: "1240.217",
		stime: -3414071114000,
		gdate: "1861-9-24",
		gregorian: "",
		gtime: -3414071114000
	},
	{
		sdate: "1240-07-29",
		solar: "1240.244",
		stime: -3411738314000,
		gdate: "1861-10-20",
		gregorian: "",
		gtime: -3411738314000
	},
	{
		sdate: "1240-07-30",
		solar: "1240.245",
		stime: -3411651914000,
		gdate: "1861-10-21",
		gregorian: "",
		gtime: -3411651914000
	},
	{
		sdate: "1240-08-01",
		solar: "1240.246",
		stime: -3411565514000,
		gdate: "1861-10-22",
		gregorian: "",
		gtime: -3411565514000
	},
	{
		sdate: "1240-08-02",
		solar: "1240.247",
		stime: -3411479114000,
		gdate: "1861-10-23",
		gregorian: "",
		gtime: -3411479114000
	},
	{
		sdate: "1240-08-29",
		solar: "1240.274",
		stime: -3409146314000,
		gdate: "1861-11-20",
		gregorian: "",
		gtime: -3409146314000
	},
	{
		sdate: "1240-08-30",
		solar: "1240.275",
		stime: -3409059914000,
		gdate: "1861-11-21",
		gregorian: "",
		gtime: -3409059914000
	},
	{
		sdate: "1240-09-01",
		solar: "1240.276",
		stime: -3408973514000,
		gdate: "1861-11-22",
		gregorian: "",
		gtime: -3408973514000
	},
	{
		sdate: "1240-09-02",
		solar: "1240.277",
		stime: -3408887114000,
		gdate: "1861-11-23",
		gregorian: "",
		gtime: -3408887114000
	},
	{
		sdate: "1240-09-29",
		solar: "1240.304",
		stime: -3406554314000,
		gdate: "1862-0-19",
		gregorian: "",
		gtime: -3406554314000
	},
	{
		sdate: "1240-09-30",
		solar: "1240.305",
		stime: -3406467914000,
		gdate: "1862-0-20",
		gregorian: "",
		gtime: -3406467914000
	},
	{
		sdate: "1240-10-01",
		solar: "1240.306",
		stime: -3406381514000,
		gdate: "1862-0-21",
		gregorian: "",
		gtime: -3406381514000
	},
	{
		sdate: "1240-10-02",
		solar: "1240.307",
		stime: -3406295114000,
		gdate: "1862-0-22",
		gregorian: "",
		gtime: -3406295114000
	},
	{
		sdate: "1240-10-26",
		solar: "1240.331",
		stime: -3404221514000,
		gdate: "1862-1-15",
		gregorian: "",
		gtime: -3404221514000
	},
	{
		sdate: "1240-10-27",
		solar: "1240.332",
		stime: -3404135114000,
		gdate: "1862-1-16",
		gregorian: "",
		gtime: -3404135114000
	},
	{
		sdate: "1240-10-28",
		solar: "1240.333",
		stime: -3404048714000,
		gdate: "1862-1-17",
		gregorian: "",
		gtime: -3404048714000
	},
	{
		sdate: "1240-10-29",
		solar: "1240.334",
		stime: -3403962314000,
		gdate: "1862-1-18",
		gregorian: "",
		gtime: -3403962314000
	},
	{
		sdate: "1240-10-30",
		solar: "1240.335",
		stime: -3403875914000,
		gdate: "1862-1-19",
		gregorian: "",
		gtime: -3403875914000
	},
	{
		sdate: "1240-11-01",
		solar: "1240.336",
		stime: -3403789514000,
		gdate: "1862-1-20",
		gregorian: "",
		gtime: -3403789514000
	},
	{
		sdate: "1240-11-02",
		solar: "1240.337",
		stime: -3403703114000,
		gdate: "1862-1-21",
		gregorian: "",
		gtime: -3403703114000
	},
	{
		sdate: "1240-11-03",
		solar: "1240.338",
		stime: -3403616714000,
		gdate: "1862-1-22",
		gregorian: "",
		gtime: -3403616714000
	},
	{
		sdate: "1240-11-04",
		solar: "1240.339",
		stime: -3403530314000,
		gdate: "1862-1-23",
		gregorian: "",
		gtime: -3403530314000
	},
	{
		sdate: "1240-11-05",
		solar: "1240.340",
		stime: -3403443914000,
		gdate: "1862-1-24",
		gregorian: "",
		gtime: -3403443914000
	},
	{
		sdate: "1241-00-01",
		solar: "1241.0",
		stime: -3401283914000,
		gdate: "1862-2-21",
		gregorian: "",
		gtime: -3401283914000
	},
	{
		sdate: "1241-00-02",
		solar: "1241.1",
		stime: -3401197514000,
		gdate: "1862-2-22",
		gregorian: "",
		gtime: -3401197514000
	},
	{
		sdate: "1260-00-01",
		solar: "1260.0",
		stime: -2801667914000,
		gdate: "1881-2-21",
		gregorian: "",
		gtime: -2801667914000
	},
	{
		sdate: "1260-00-02",
		solar: "1260.1",
		stime: -2801581514000,
		gdate: "1881-2-22",
		gregorian: "",
		gtime: -2801581514000
	},
	{
		sdate: "1260-00-30",
		solar: "1260.29",
		stime: -2799162314000,
		gdate: "1881-3-19",
		gregorian: "",
		gtime: -2799162314000
	},
	{
		sdate: "1260-00-31",
		solar: "1260.30",
		stime: -2799075914000,
		gdate: "1881-3-20",
		gregorian: "",
		gtime: -2799075914000
	},
	{
		sdate: "1260-01-01",
		solar: "1260.31",
		stime: -2798989514000,
		gdate: "1881-3-21",
		gregorian: "",
		gtime: -2798989514000
	},
	{
		sdate: "1260-01-02",
		solar: "1260.32",
		stime: -2798903114000,
		gdate: "1881-3-22",
		gregorian: "",
		gtime: -2798903114000
	},
	{
		sdate: "1260-01-30",
		solar: "1260.60",
		stime: -2796483914000,
		gdate: "1881-4-20",
		gregorian: "",
		gtime: -2796483914000
	},
	{
		sdate: "1260-01-31",
		solar: "1260.61",
		stime: -2796397514000,
		gdate: "1881-4-21",
		gregorian: "",
		gtime: -2796397514000
	},
	{
		sdate: "1260-02-01",
		solar: "1260.62",
		stime: -2796311114000,
		gdate: "1881-4-22",
		gregorian: "",
		gtime: -2796311114000
	},
	{
		sdate: "1260-02-02",
		solar: "1260.63",
		stime: -2796224714000,
		gdate: "1881-4-23",
		gregorian: "",
		gtime: -2796224714000
	},
	{
		sdate: "1260-02-30",
		solar: "1260.91",
		stime: -2793805514000,
		gdate: "1881-5-20",
		gregorian: "",
		gtime: -2793805514000
	},
	{
		sdate: "1260-02-31",
		solar: "1260.92",
		stime: -2793719114000,
		gdate: "1881-5-21",
		gregorian: "",
		gtime: -2793719114000
	},
	{
		sdate: "1260-03-01",
		solar: "1260.93",
		stime: -2793632714000,
		gdate: "1881-5-22",
		gregorian: "",
		gtime: -2793632714000
	},
	{
		sdate: "1260-03-02",
		solar: "1260.94",
		stime: -2793546314000,
		gdate: "1881-5-23",
		gregorian: "",
		gtime: -2793546314000
	},
	{
		sdate: "1260-03-30",
		solar: "1260.122",
		stime: -2791127114000,
		gdate: "1881-6-21",
		gregorian: "",
		gtime: -2791127114000
	},
	{
		sdate: "1260-03-31",
		solar: "1260.123",
		stime: -2791040714000,
		gdate: "1881-6-22",
		gregorian: "",
		gtime: -2791040714000
	},
	{
		sdate: "1260-04-01",
		solar: "1260.124",
		stime: -2790954314000,
		gdate: "1881-6-23",
		gregorian: "",
		gtime: -2790954314000
	},
	{
		sdate: "1260-04-02",
		solar: "1260.125",
		stime: -2790867914000,
		gdate: "1881-6-24",
		gregorian: "",
		gtime: -2790867914000
	},
	{
		sdate: "1260-04-30",
		solar: "1260.153",
		stime: -2788448714000,
		gdate: "1881-7-21",
		gregorian: "",
		gtime: -2788448714000
	},
	{
		sdate: "1260-04-31",
		solar: "1260.154",
		stime: -2788362314000,
		gdate: "1881-7-22",
		gregorian: "",
		gtime: -2788362314000
	},
	{
		sdate: "1260-05-01",
		solar: "1260.155",
		stime: -2788275914000,
		gdate: "1881-7-23",
		gregorian: "",
		gtime: -2788275914000
	},
	{
		sdate: "1260-05-02",
		solar: "1260.156",
		stime: -2788189514000,
		gdate: "1881-7-24",
		gregorian: "",
		gtime: -2788189514000
	},
	{
		sdate: "1260-05-29",
		solar: "1260.183",
		stime: -2785856714000,
		gdate: "1881-8-20",
		gregorian: "",
		gtime: -2785856714000
	},
	{
		sdate: "1260-05-30",
		solar: "1260.184",
		stime: -2785770314000,
		gdate: "1881-8-21",
		gregorian: "",
		gtime: -2785770314000
	},
	{
		sdate: "1260-06-01",
		solar: "1260.186",
		stime: -2785597514000,
		gdate: "1881-8-23",
		gregorian: "",
		gtime: -2785597514000
	},
	{
		sdate: "1260-06-02",
		solar: "1260.187",
		stime: -2785511114000,
		gdate: "1881-8-24",
		gregorian: "",
		gtime: -2785511114000
	},
	{
		sdate: "1260-06-29",
		solar: "1260.214",
		stime: -2783178314000,
		gdate: "1881-9-21",
		gregorian: "",
		gtime: -2783178314000
	},
	{
		sdate: "1260-06-30",
		solar: "1260.215",
		stime: -2783091914000,
		gdate: "1881-9-22",
		gregorian: "",
		gtime: -2783091914000
	},
	{
		sdate: "1260-07-01",
		solar: "1260.216",
		stime: -2783005514000,
		gdate: "1881-9-23",
		gregorian: "",
		gtime: -2783005514000
	},
	{
		sdate: "1260-07-02",
		solar: "1260.217",
		stime: -2782919114000,
		gdate: "1881-9-24",
		gregorian: "",
		gtime: -2782919114000
	},
	{
		sdate: "1260-07-29",
		solar: "1260.244",
		stime: -2780586314000,
		gdate: "1881-10-20",
		gregorian: "",
		gtime: -2780586314000
	},
	{
		sdate: "1260-07-30",
		solar: "1260.245",
		stime: -2780499914000,
		gdate: "1881-10-21",
		gregorian: "",
		gtime: -2780499914000
	},
	{
		sdate: "1260-08-01",
		solar: "1260.246",
		stime: -2780413514000,
		gdate: "1881-10-22",
		gregorian: "",
		gtime: -2780413514000
	},
	{
		sdate: "1260-08-02",
		solar: "1260.247",
		stime: -2780327114000,
		gdate: "1881-10-23",
		gregorian: "",
		gtime: -2780327114000
	},
	{
		sdate: "1260-08-29",
		solar: "1260.274",
		stime: -2777994314000,
		gdate: "1881-11-20",
		gregorian: "",
		gtime: -2777994314000
	},
	{
		sdate: "1260-08-30",
		solar: "1260.275",
		stime: -2777907914000,
		gdate: "1881-11-21",
		gregorian: "",
		gtime: -2777907914000
	},
	{
		sdate: "1260-09-01",
		solar: "1260.276",
		stime: -2777821514000,
		gdate: "1881-11-22",
		gregorian: "",
		gtime: -2777821514000
	},
	{
		sdate: "1260-09-02",
		solar: "1260.277",
		stime: -2777735114000,
		gdate: "1881-11-23",
		gregorian: "",
		gtime: -2777735114000
	},
	{
		sdate: "1260-09-29",
		solar: "1260.304",
		stime: -2775402314000,
		gdate: "1882-0-19",
		gregorian: "",
		gtime: -2775402314000
	},
	{
		sdate: "1260-09-30",
		solar: "1260.305",
		stime: -2775315914000,
		gdate: "1882-0-20",
		gregorian: "",
		gtime: -2775315914000
	},
	{
		sdate: "1260-10-01",
		solar: "1260.306",
		stime: -2775229514000,
		gdate: "1882-0-21",
		gregorian: "",
		gtime: -2775229514000
	},
	{
		sdate: "1260-10-02",
		solar: "1260.307",
		stime: -2775143114000,
		gdate: "1882-0-22",
		gregorian: "",
		gtime: -2775143114000
	},
	{
		sdate: "1260-10-26",
		solar: "1260.331",
		stime: -2773069514000,
		gdate: "1882-1-15",
		gregorian: "",
		gtime: -2773069514000
	},
	{
		sdate: "1260-10-27",
		solar: "1260.332",
		stime: -2772983114000,
		gdate: "1882-1-16",
		gregorian: "",
		gtime: -2772983114000
	},
	{
		sdate: "1260-10-28",
		solar: "1260.333",
		stime: -2772896714000,
		gdate: "1882-1-17",
		gregorian: "",
		gtime: -2772896714000
	},
	{
		sdate: "1260-10-29",
		solar: "1260.334",
		stime: -2772810314000,
		gdate: "1882-1-18",
		gregorian: "",
		gtime: -2772810314000
	},
	{
		sdate: "1260-10-30",
		solar: "1260.335",
		stime: -2772723914000,
		gdate: "1882-1-19",
		gregorian: "",
		gtime: -2772723914000
	},
	{
		sdate: "1260-11-01",
		solar: "1260.336",
		stime: -2772637514000,
		gdate: "1882-1-20",
		gregorian: "",
		gtime: -2772637514000
	},
	{
		sdate: "1260-11-02",
		solar: "1260.337",
		stime: -2772551114000,
		gdate: "1882-1-21",
		gregorian: "",
		gtime: -2772551114000
	},
	{
		sdate: "1260-11-03",
		solar: "1260.338",
		stime: -2772464714000,
		gdate: "1882-1-22",
		gregorian: "",
		gtime: -2772464714000
	},
	{
		sdate: "1260-11-04",
		solar: "1260.339",
		stime: -2772378314000,
		gdate: "1882-1-23",
		gregorian: "",
		gtime: -2772378314000
	},
	{
		sdate: "1260-11-05",
		solar: "1260.340",
		stime: -2772291914000,
		gdate: "1882-1-24",
		gregorian: "",
		gtime: -2772291914000
	},
	{
		sdate: "1261-00-01",
		solar: "1261.0",
		stime: -2770131914000,
		gdate: "1882-2-21",
		gregorian: "",
		gtime: -2770131914000
	},
	{
		sdate: "1261-00-02",
		solar: "1261.1",
		stime: -2770045514000,
		gdate: "1882-2-22",
		gregorian: "",
		gtime: -2770045514000
	},
	{
		sdate: "1280-00-01",
		solar: "1280.0",
		stime: -2170602314000,
		gdate: "1901-2-21",
		gregorian: "",
		gtime: -2170602314000
	},
	{
		sdate: "1280-00-02",
		solar: "1280.1",
		stime: -2170515914000,
		gdate: "1901-2-22",
		gregorian: "",
		gtime: -2170515914000
	},
	{
		sdate: "1280-00-30",
		solar: "1280.29",
		stime: -2168096714000,
		gdate: "1901-3-19",
		gregorian: "",
		gtime: -2168096714000
	},
	{
		sdate: "1280-00-31",
		solar: "1280.30",
		stime: -2168010314000,
		gdate: "1901-3-20",
		gregorian: "",
		gtime: -2168010314000
	},
	{
		sdate: "1280-01-01",
		solar: "1280.31",
		stime: -2167923914000,
		gdate: "1901-3-21",
		gregorian: "",
		gtime: -2167923914000
	},
	{
		sdate: "1280-01-02",
		solar: "1280.32",
		stime: -2167837514000,
		gdate: "1901-3-22",
		gregorian: "",
		gtime: -2167837514000
	},
	{
		sdate: "1280-01-30",
		solar: "1280.60",
		stime: -2165418314000,
		gdate: "1901-4-20",
		gregorian: "",
		gtime: -2165418314000
	},
	{
		sdate: "1280-01-31",
		solar: "1280.61",
		stime: -2165331914000,
		gdate: "1901-4-21",
		gregorian: "",
		gtime: -2165331914000
	},
	{
		sdate: "1280-02-01",
		solar: "1280.62",
		stime: -2165245514000,
		gdate: "1901-4-22",
		gregorian: "",
		gtime: -2165245514000
	},
	{
		sdate: "1280-02-02",
		solar: "1280.63",
		stime: -2165159114000,
		gdate: "1901-4-23",
		gregorian: "",
		gtime: -2165159114000
	},
	{
		sdate: "1280-02-30",
		solar: "1280.91",
		stime: -2162739914000,
		gdate: "1901-5-20",
		gregorian: "",
		gtime: -2162739914000
	},
	{
		sdate: "1280-02-31",
		solar: "1280.92",
		stime: -2162653514000,
		gdate: "1901-5-21",
		gregorian: "",
		gtime: -2162653514000
	},
	{
		sdate: "1280-03-01",
		solar: "1280.93",
		stime: -2162567114000,
		gdate: "1901-5-22",
		gregorian: "",
		gtime: -2162567114000
	},
	{
		sdate: "1280-03-02",
		solar: "1280.94",
		stime: -2162480714000,
		gdate: "1901-5-23",
		gregorian: "",
		gtime: -2162480714000
	},
	{
		sdate: "1280-03-30",
		solar: "1280.122",
		stime: -2160061514000,
		gdate: "1901-6-21",
		gregorian: "",
		gtime: -2160061514000
	},
	{
		sdate: "1280-03-31",
		solar: "1280.123",
		stime: -2159975114000,
		gdate: "1901-6-22",
		gregorian: "",
		gtime: -2159975114000
	},
	{
		sdate: "1280-04-01",
		solar: "1280.124",
		stime: -2159888714000,
		gdate: "1901-6-23",
		gregorian: "",
		gtime: -2159888714000
	},
	{
		sdate: "1280-04-02",
		solar: "1280.125",
		stime: -2159802314000,
		gdate: "1901-6-24",
		gregorian: "",
		gtime: -2159802314000
	},
	{
		sdate: "1280-04-30",
		solar: "1280.153",
		stime: -2157383114000,
		gdate: "1901-7-21",
		gregorian: "",
		gtime: -2157383114000
	},
	{
		sdate: "1280-04-31",
		solar: "1280.154",
		stime: -2157296714000,
		gdate: "1901-7-22",
		gregorian: "",
		gtime: -2157296714000
	},
	{
		sdate: "1280-05-01",
		solar: "1280.155",
		stime: -2157210314000,
		gdate: "1901-7-23",
		gregorian: "",
		gtime: -2157210314000
	},
	{
		sdate: "1280-05-02",
		solar: "1280.156",
		stime: -2157123914000,
		gdate: "1901-7-24",
		gregorian: "",
		gtime: -2157123914000
	},
	{
		sdate: "1280-05-29",
		solar: "1280.183",
		stime: -2154791114000,
		gdate: "1901-8-20",
		gregorian: "",
		gtime: -2154791114000
	},
	{
		sdate: "1280-05-30",
		solar: "1280.184",
		stime: -2154704714000,
		gdate: "1901-8-21",
		gregorian: "",
		gtime: -2154704714000
	},
	{
		sdate: "1280-06-01",
		solar: "1280.186",
		stime: -2154531914000,
		gdate: "1901-8-23",
		gregorian: "",
		gtime: -2154531914000
	},
	{
		sdate: "1280-06-02",
		solar: "1280.187",
		stime: -2154445514000,
		gdate: "1901-8-24",
		gregorian: "",
		gtime: -2154445514000
	},
	{
		sdate: "1280-06-29",
		solar: "1280.214",
		stime: -2152112714000,
		gdate: "1901-9-21",
		gregorian: "",
		gtime: -2152112714000
	},
	{
		sdate: "1280-06-30",
		solar: "1280.215",
		stime: -2152026314000,
		gdate: "1901-9-22",
		gregorian: "",
		gtime: -2152026314000
	},
	{
		sdate: "1280-07-01",
		solar: "1280.216",
		stime: -2151939914000,
		gdate: "1901-9-23",
		gregorian: "",
		gtime: -2151939914000
	},
	{
		sdate: "1280-07-02",
		solar: "1280.217",
		stime: -2151853514000,
		gdate: "1901-9-24",
		gregorian: "",
		gtime: -2151853514000
	},
	{
		sdate: "1280-07-29",
		solar: "1280.244",
		stime: -2149520714000,
		gdate: "1901-10-20",
		gregorian: "",
		gtime: -2149520714000
	},
	{
		sdate: "1280-07-30",
		solar: "1280.245",
		stime: -2149434314000,
		gdate: "1901-10-21",
		gregorian: "",
		gtime: -2149434314000
	},
	{
		sdate: "1280-08-01",
		solar: "1280.246",
		stime: -2149347914000,
		gdate: "1901-10-22",
		gregorian: "",
		gtime: -2149347914000
	},
	{
		sdate: "1280-08-02",
		solar: "1280.247",
		stime: -2149261514000,
		gdate: "1901-10-23",
		gregorian: "",
		gtime: -2149261514000
	},
	{
		sdate: "1280-08-29",
		solar: "1280.274",
		stime: -2146928714000,
		gdate: "1901-11-20",
		gregorian: "",
		gtime: -2146928714000
	},
	{
		sdate: "1280-08-30",
		solar: "1280.275",
		stime: -2146842314000,
		gdate: "1901-11-21",
		gregorian: "",
		gtime: -2146842314000
	},
	{
		sdate: "1280-09-01",
		solar: "1280.276",
		stime: -2146755914000,
		gdate: "1901-11-22",
		gregorian: "",
		gtime: -2146755914000
	},
	{
		sdate: "1280-09-02",
		solar: "1280.277",
		stime: -2146669514000,
		gdate: "1901-11-23",
		gregorian: "",
		gtime: -2146669514000
	},
	{
		sdate: "1280-09-29",
		solar: "1280.304",
		stime: -2144336714000,
		gdate: "1902-0-19",
		gregorian: "",
		gtime: -2144336714000
	},
	{
		sdate: "1280-09-30",
		solar: "1280.305",
		stime: -2144250314000,
		gdate: "1902-0-20",
		gregorian: "",
		gtime: -2144250314000
	},
	{
		sdate: "1280-10-01",
		solar: "1280.306",
		stime: -2144163914000,
		gdate: "1902-0-21",
		gregorian: "",
		gtime: -2144163914000
	},
	{
		sdate: "1280-10-02",
		solar: "1280.307",
		stime: -2144077514000,
		gdate: "1902-0-22",
		gregorian: "",
		gtime: -2144077514000
	},
	{
		sdate: "1280-10-26",
		solar: "1280.331",
		stime: -2142003914000,
		gdate: "1902-1-15",
		gregorian: "",
		gtime: -2142003914000
	},
	{
		sdate: "1280-10-27",
		solar: "1280.332",
		stime: -2141917514000,
		gdate: "1902-1-16",
		gregorian: "",
		gtime: -2141917514000
	},
	{
		sdate: "1280-10-28",
		solar: "1280.333",
		stime: -2141831114000,
		gdate: "1902-1-17",
		gregorian: "",
		gtime: -2141831114000
	},
	{
		sdate: "1280-10-29",
		solar: "1280.334",
		stime: -2141744714000,
		gdate: "1902-1-18",
		gregorian: "",
		gtime: -2141744714000
	},
	{
		sdate: "1280-10-30",
		solar: "1280.335",
		stime: -2141658314000,
		gdate: "1902-1-19",
		gregorian: "",
		gtime: -2141658314000
	},
	{
		sdate: "1280-11-01",
		solar: "1280.336",
		stime: -2141571914000,
		gdate: "1902-1-20",
		gregorian: "",
		gtime: -2141571914000
	},
	{
		sdate: "1280-11-02",
		solar: "1280.337",
		stime: -2141485514000,
		gdate: "1902-1-21",
		gregorian: "",
		gtime: -2141485514000
	},
	{
		sdate: "1280-11-03",
		solar: "1280.338",
		stime: -2141399114000,
		gdate: "1902-1-22",
		gregorian: "",
		gtime: -2141399114000
	},
	{
		sdate: "1280-11-04",
		solar: "1280.339",
		stime: -2141312714000,
		gdate: "1902-1-23",
		gregorian: "",
		gtime: -2141312714000
	},
	{
		sdate: "1280-11-05",
		solar: "1280.340",
		stime: -2141226314000,
		gdate: "1902-1-24",
		gregorian: "",
		gtime: -2141226314000
	},
	{
		sdate: "1280-11-30",
		solar: "1280.365",
		stime: -2139066314000,
		gdate: "1902-2-21",
		gregorian: "",
		gtime: -2139066314000
	},
	{
		sdate: "1281-00-01",
		solar: "1281.0",
		stime: -2138979914000,
		gdate: "1902-2-22",
		gregorian: "",
		gtime: -2138979914000
	},
	{
		sdate: "1300-00-01",
		solar: "1300.0",
		stime: -1539450314000,
		gdate: "1921-2-21",
		gregorian: "",
		gtime: -1539450314000
	},
	{
		sdate: "1300-00-02",
		solar: "1300.1",
		stime: -1539363914000,
		gdate: "1921-2-22",
		gregorian: "",
		gtime: -1539363914000
	},
	{
		sdate: "1300-00-30",
		solar: "1300.29",
		stime: -1536944714000,
		gdate: "1921-3-19",
		gregorian: "",
		gtime: -1536944714000
	},
	{
		sdate: "1300-00-31",
		solar: "1300.30",
		stime: -1536858314000,
		gdate: "1921-3-20",
		gregorian: "",
		gtime: -1536858314000
	},
	{
		sdate: "1300-01-01",
		solar: "1300.31",
		stime: -1536771914000,
		gdate: "1921-3-21",
		gregorian: "",
		gtime: -1536771914000
	},
	{
		sdate: "1300-01-02",
		solar: "1300.32",
		stime: -1536685514000,
		gdate: "1921-3-22",
		gregorian: "",
		gtime: -1536685514000
	},
	{
		sdate: "1300-01-30",
		solar: "1300.60",
		stime: -1534266314000,
		gdate: "1921-4-20",
		gregorian: "",
		gtime: -1534266314000
	},
	{
		sdate: "1300-01-31",
		solar: "1300.61",
		stime: -1534179914000,
		gdate: "1921-4-21",
		gregorian: "",
		gtime: -1534179914000
	},
	{
		sdate: "1300-02-01",
		solar: "1300.62",
		stime: -1534093514000,
		gdate: "1921-4-22",
		gregorian: "",
		gtime: -1534093514000
	},
	{
		sdate: "1300-02-02",
		solar: "1300.63",
		stime: -1534007114000,
		gdate: "1921-4-23",
		gregorian: "",
		gtime: -1534007114000
	},
	{
		sdate: "1300-02-30",
		solar: "1300.91",
		stime: -1531587914000,
		gdate: "1921-5-20",
		gregorian: "",
		gtime: -1531587914000
	},
	{
		sdate: "1300-02-31",
		solar: "1300.92",
		stime: -1531501514000,
		gdate: "1921-5-21",
		gregorian: "",
		gtime: -1531501514000
	},
	{
		sdate: "1300-03-01",
		solar: "1300.93",
		stime: -1531415114000,
		gdate: "1921-5-22",
		gregorian: "",
		gtime: -1531415114000
	},
	{
		sdate: "1300-03-02",
		solar: "1300.94",
		stime: -1531328714000,
		gdate: "1921-5-23",
		gregorian: "",
		gtime: -1531328714000
	},
	{
		sdate: "1300-03-30",
		solar: "1300.122",
		stime: -1528909514000,
		gdate: "1921-6-21",
		gregorian: "",
		gtime: -1528909514000
	},
	{
		sdate: "1300-03-31",
		solar: "1300.123",
		stime: -1528823114000,
		gdate: "1921-6-22",
		gregorian: "",
		gtime: -1528823114000
	},
	{
		sdate: "1300-04-01",
		solar: "1300.124",
		stime: -1528736714000,
		gdate: "1921-6-23",
		gregorian: "",
		gtime: -1528736714000
	},
	{
		sdate: "1300-04-02",
		solar: "1300.125",
		stime: -1528650314000,
		gdate: "1921-6-24",
		gregorian: "",
		gtime: -1528650314000
	},
	{
		sdate: "1300-04-30",
		solar: "1300.153",
		stime: -1526231114000,
		gdate: "1921-7-21",
		gregorian: "",
		gtime: -1526231114000
	},
	{
		sdate: "1300-04-31",
		solar: "1300.154",
		stime: -1526144714000,
		gdate: "1921-7-22",
		gregorian: "",
		gtime: -1526144714000
	},
	{
		sdate: "1300-05-01",
		solar: "1300.155",
		stime: -1526058314000,
		gdate: "1921-7-23",
		gregorian: "",
		gtime: -1526058314000
	},
	{
		sdate: "1300-05-02",
		solar: "1300.156",
		stime: -1525971914000,
		gdate: "1921-7-24",
		gregorian: "",
		gtime: -1525971914000
	},
	{
		sdate: "1300-05-29",
		solar: "1300.183",
		stime: -1523639114000,
		gdate: "1921-8-20",
		gregorian: "",
		gtime: -1523639114000
	},
	{
		sdate: "1300-05-30",
		solar: "1300.184",
		stime: -1523552714000,
		gdate: "1921-8-21",
		gregorian: "",
		gtime: -1523552714000
	},
	{
		sdate: "1300-06-01",
		solar: "1300.186",
		stime: -1523379914000,
		gdate: "1921-8-23",
		gregorian: "",
		gtime: -1523379914000
	},
	{
		sdate: "1300-06-02",
		solar: "1300.187",
		stime: -1523293514000,
		gdate: "1921-8-24",
		gregorian: "",
		gtime: -1523293514000
	},
	{
		sdate: "1300-06-29",
		solar: "1300.214",
		stime: -1520960714000,
		gdate: "1921-9-21",
		gregorian: "",
		gtime: -1520960714000
	},
	{
		sdate: "1300-06-30",
		solar: "1300.215",
		stime: -1520874314000,
		gdate: "1921-9-22",
		gregorian: "",
		gtime: -1520874314000
	},
	{
		sdate: "1300-07-01",
		solar: "1300.216",
		stime: -1520787914000,
		gdate: "1921-9-23",
		gregorian: "",
		gtime: -1520787914000
	},
	{
		sdate: "1300-07-02",
		solar: "1300.217",
		stime: -1520701514000,
		gdate: "1921-9-24",
		gregorian: "",
		gtime: -1520701514000
	},
	{
		sdate: "1300-07-29",
		solar: "1300.244",
		stime: -1518368714000,
		gdate: "1921-10-20",
		gregorian: "",
		gtime: -1518368714000
	},
	{
		sdate: "1300-07-30",
		solar: "1300.245",
		stime: -1518282314000,
		gdate: "1921-10-21",
		gregorian: "",
		gtime: -1518282314000
	},
	{
		sdate: "1300-08-01",
		solar: "1300.246",
		stime: -1518195914000,
		gdate: "1921-10-22",
		gregorian: "",
		gtime: -1518195914000
	},
	{
		sdate: "1300-08-02",
		solar: "1300.247",
		stime: -1518109514000,
		gdate: "1921-10-23",
		gregorian: "",
		gtime: -1518109514000
	},
	{
		sdate: "1300-08-29",
		solar: "1300.274",
		stime: -1515776714000,
		gdate: "1921-11-20",
		gregorian: "",
		gtime: -1515776714000
	},
	{
		sdate: "1300-08-30",
		solar: "1300.275",
		stime: -1515690314000,
		gdate: "1921-11-21",
		gregorian: "",
		gtime: -1515690314000
	},
	{
		sdate: "1300-09-01",
		solar: "1300.276",
		stime: -1515603914000,
		gdate: "1921-11-22",
		gregorian: "",
		gtime: -1515603914000
	},
	{
		sdate: "1300-09-02",
		solar: "1300.277",
		stime: -1515517514000,
		gdate: "1921-11-23",
		gregorian: "",
		gtime: -1515517514000
	},
	{
		sdate: "1300-09-29",
		solar: "1300.304",
		stime: -1513184714000,
		gdate: "1922-0-19",
		gregorian: "",
		gtime: -1513184714000
	},
	{
		sdate: "1300-09-30",
		solar: "1300.305",
		stime: -1513098314000,
		gdate: "1922-0-20",
		gregorian: "",
		gtime: -1513098314000
	},
	{
		sdate: "1300-10-01",
		solar: "1300.306",
		stime: -1513011914000,
		gdate: "1922-0-21",
		gregorian: "",
		gtime: -1513011914000
	},
	{
		sdate: "1300-10-02",
		solar: "1300.307",
		stime: -1512925514000,
		gdate: "1922-0-22",
		gregorian: "",
		gtime: -1512925514000
	},
	{
		sdate: "1300-10-26",
		solar: "1300.331",
		stime: -1510851914000,
		gdate: "1922-1-15",
		gregorian: "",
		gtime: -1510851914000
	},
	{
		sdate: "1300-10-27",
		solar: "1300.332",
		stime: -1510765514000,
		gdate: "1922-1-16",
		gregorian: "",
		gtime: -1510765514000
	},
	{
		sdate: "1300-10-28",
		solar: "1300.333",
		stime: -1510679114000,
		gdate: "1922-1-17",
		gregorian: "",
		gtime: -1510679114000
	},
	{
		sdate: "1300-10-29",
		solar: "1300.334",
		stime: -1510592714000,
		gdate: "1922-1-18",
		gregorian: "",
		gtime: -1510592714000
	},
	{
		sdate: "1300-10-30",
		solar: "1300.335",
		stime: -1510506314000,
		gdate: "1922-1-19",
		gregorian: "",
		gtime: -1510506314000
	},
	{
		sdate: "1300-11-01",
		solar: "1300.336",
		stime: -1510419914000,
		gdate: "1922-1-20",
		gregorian: "",
		gtime: -1510419914000
	},
	{
		sdate: "1300-11-02",
		solar: "1300.337",
		stime: -1510333514000,
		gdate: "1922-1-21",
		gregorian: "",
		gtime: -1510333514000
	},
	{
		sdate: "1300-11-03",
		solar: "1300.338",
		stime: -1510247114000,
		gdate: "1922-1-22",
		gregorian: "",
		gtime: -1510247114000
	},
	{
		sdate: "1300-11-04",
		solar: "1300.339",
		stime: -1510160714000,
		gdate: "1922-1-23",
		gregorian: "",
		gtime: -1510160714000
	},
	{
		sdate: "1300-11-05",
		solar: "1300.340",
		stime: -1510074314000,
		gdate: "1922-1-24",
		gregorian: "",
		gtime: -1510074314000
	},
	{
		sdate: "1300-11-30",
		solar: "1300.365",
		stime: -1507914314000,
		gdate: "1922-2-21",
		gregorian: "",
		gtime: -1507914314000
	},
	{
		sdate: "1301-00-01",
		solar: "1301.0",
		stime: -1507827914000,
		gdate: "1922-2-22",
		gregorian: "",
		gtime: -1507827914000
	},
	{
		sdate: "1320-00-01",
		solar: "1320.0",
		stime: -908298314000,
		gdate: "1941-2-21",
		gregorian: "",
		gtime: -908298314000
	},
	{
		sdate: "1320-00-02",
		solar: "1320.1",
		stime: -908211914000,
		gdate: "1941-2-22",
		gregorian: "",
		gtime: -908211914000
	},
	{
		sdate: "1320-00-30",
		solar: "1320.29",
		stime: -905792714000,
		gdate: "1941-3-19",
		gregorian: "",
		gtime: -905792714000
	},
	{
		sdate: "1320-00-31",
		solar: "1320.30",
		stime: -905706314000,
		gdate: "1941-3-20",
		gregorian: "",
		gtime: -905706314000
	},
	{
		sdate: "1320-01-01",
		solar: "1320.31",
		stime: -905619914000,
		gdate: "1941-3-21",
		gregorian: "",
		gtime: -905619914000
	},
	{
		sdate: "1320-01-02",
		solar: "1320.32",
		stime: -905533514000,
		gdate: "1941-3-22",
		gregorian: "",
		gtime: -905533514000
	},
	{
		sdate: "1320-01-30",
		solar: "1320.60",
		stime: -903114314000,
		gdate: "1941-4-20",
		gregorian: "",
		gtime: -903114314000
	},
	{
		sdate: "1320-01-31",
		solar: "1320.61",
		stime: -903027914000,
		gdate: "1941-4-21",
		gregorian: "",
		gtime: -903027914000
	},
	{
		sdate: "1320-02-01",
		solar: "1320.62",
		stime: -902941514000,
		gdate: "1941-4-22",
		gregorian: "",
		gtime: -902941514000
	},
	{
		sdate: "1320-02-02",
		solar: "1320.63",
		stime: -902855114000,
		gdate: "1941-4-23",
		gregorian: "",
		gtime: -902855114000
	},
	{
		sdate: "1320-02-30",
		solar: "1320.91",
		stime: -900435914000,
		gdate: "1941-5-20",
		gregorian: "",
		gtime: -900435914000
	},
	{
		sdate: "1320-02-31",
		solar: "1320.92",
		stime: -900349514000,
		gdate: "1941-5-21",
		gregorian: "",
		gtime: -900349514000
	},
	{
		sdate: "1320-03-01",
		solar: "1320.93",
		stime: -900263114000,
		gdate: "1941-5-22",
		gregorian: "",
		gtime: -900263114000
	},
	{
		sdate: "1320-03-02",
		solar: "1320.94",
		stime: -900176714000,
		gdate: "1941-5-23",
		gregorian: "",
		gtime: -900176714000
	},
	{
		sdate: "1320-03-30",
		solar: "1320.122",
		stime: -897757514000,
		gdate: "1941-6-21",
		gregorian: "",
		gtime: -897757514000
	},
	{
		sdate: "1320-03-31",
		solar: "1320.123",
		stime: -897671114000,
		gdate: "1941-6-22",
		gregorian: "",
		gtime: -897671114000
	},
	{
		sdate: "1320-04-01",
		solar: "1320.124",
		stime: -897584714000,
		gdate: "1941-6-23",
		gregorian: "",
		gtime: -897584714000
	},
	{
		sdate: "1320-04-02",
		solar: "1320.125",
		stime: -897498314000,
		gdate: "1941-6-24",
		gregorian: "",
		gtime: -897498314000
	},
	{
		sdate: "1320-04-30",
		solar: "1320.153",
		stime: -895079114000,
		gdate: "1941-7-21",
		gregorian: "",
		gtime: -895079114000
	},
	{
		sdate: "1320-04-31",
		solar: "1320.154",
		stime: -894992714000,
		gdate: "1941-7-22",
		gregorian: "",
		gtime: -894992714000
	},
	{
		sdate: "1320-05-01",
		solar: "1320.155",
		stime: -894906314000,
		gdate: "1941-7-23",
		gregorian: "",
		gtime: -894906314000
	},
	{
		sdate: "1320-05-02",
		solar: "1320.156",
		stime: -894819914000,
		gdate: "1941-7-24",
		gregorian: "",
		gtime: -894819914000
	},
	{
		sdate: "1320-05-29",
		solar: "1320.183",
		stime: -892487114000,
		gdate: "1941-8-20",
		gregorian: "",
		gtime: -892487114000
	},
	{
		sdate: "1320-05-30",
		solar: "1320.184",
		stime: -892400714000,
		gdate: "1941-8-21",
		gregorian: "",
		gtime: -892400714000
	},
	{
		sdate: "1320-06-01",
		solar: "1320.186",
		stime: -892227914000,
		gdate: "1941-8-23",
		gregorian: "",
		gtime: -892227914000
	},
	{
		sdate: "1320-06-02",
		solar: "1320.187",
		stime: -892141514000,
		gdate: "1941-8-24",
		gregorian: "",
		gtime: -892141514000
	},
	{
		sdate: "1320-06-29",
		solar: "1320.214",
		stime: -889808714000,
		gdate: "1941-9-21",
		gregorian: "",
		gtime: -889808714000
	},
	{
		sdate: "1320-06-30",
		solar: "1320.215",
		stime: -889722314000,
		gdate: "1941-9-22",
		gregorian: "",
		gtime: -889722314000
	},
	{
		sdate: "1320-07-01",
		solar: "1320.216",
		stime: -889635914000,
		gdate: "1941-9-23",
		gregorian: "",
		gtime: -889635914000
	},
	{
		sdate: "1320-07-02",
		solar: "1320.217",
		stime: -889549514000,
		gdate: "1941-9-24",
		gregorian: "",
		gtime: -889549514000
	},
	{
		sdate: "1320-07-29",
		solar: "1320.244",
		stime: -887216714000,
		gdate: "1941-10-20",
		gregorian: "",
		gtime: -887216714000
	},
	{
		sdate: "1320-07-30",
		solar: "1320.245",
		stime: -887130314000,
		gdate: "1941-10-21",
		gregorian: "",
		gtime: -887130314000
	},
	{
		sdate: "1320-08-01",
		solar: "1320.246",
		stime: -887043914000,
		gdate: "1941-10-22",
		gregorian: "",
		gtime: -887043914000
	},
	{
		sdate: "1320-08-02",
		solar: "1320.247",
		stime: -886957514000,
		gdate: "1941-10-23",
		gregorian: "",
		gtime: -886957514000
	},
	{
		sdate: "1320-08-29",
		solar: "1320.274",
		stime: -884624714000,
		gdate: "1941-11-20",
		gregorian: "",
		gtime: -884624714000
	},
	{
		sdate: "1320-08-30",
		solar: "1320.275",
		stime: -884538314000,
		gdate: "1941-11-21",
		gregorian: "",
		gtime: -884538314000
	},
	{
		sdate: "1320-09-01",
		solar: "1320.276",
		stime: -884451914000,
		gdate: "1941-11-22",
		gregorian: "",
		gtime: -884451914000
	},
	{
		sdate: "1320-09-02",
		solar: "1320.277",
		stime: -884365514000,
		gdate: "1941-11-23",
		gregorian: "",
		gtime: -884365514000
	},
	{
		sdate: "1320-09-29",
		solar: "1320.304",
		stime: -882032714000,
		gdate: "1942-0-19",
		gregorian: "",
		gtime: -882032714000
	},
	{
		sdate: "1320-09-30",
		solar: "1320.305",
		stime: -881946314000,
		gdate: "1942-0-20",
		gregorian: "",
		gtime: -881946314000
	},
	{
		sdate: "1320-10-01",
		solar: "1320.306",
		stime: -881859914000,
		gdate: "1942-0-21",
		gregorian: "",
		gtime: -881859914000
	},
	{
		sdate: "1320-10-02",
		solar: "1320.307",
		stime: -881773514000,
		gdate: "1942-0-22",
		gregorian: "",
		gtime: -881773514000
	},
	{
		sdate: "1320-10-26",
		solar: "1320.331",
		stime: -879699914000,
		gdate: "1942-1-15",
		gregorian: "",
		gtime: -879699914000
	},
	{
		sdate: "1320-10-27",
		solar: "1320.332",
		stime: -879613514000,
		gdate: "1942-1-16",
		gregorian: "",
		gtime: -879613514000
	},
	{
		sdate: "1320-10-28",
		solar: "1320.333",
		stime: -879527114000,
		gdate: "1942-1-17",
		gregorian: "",
		gtime: -879527114000
	},
	{
		sdate: "1320-10-29",
		solar: "1320.334",
		stime: -879440714000,
		gdate: "1942-1-18",
		gregorian: "",
		gtime: -879440714000
	},
	{
		sdate: "1320-10-30",
		solar: "1320.335",
		stime: -879354314000,
		gdate: "1942-1-19",
		gregorian: "",
		gtime: -879354314000
	},
	{
		sdate: "1320-11-01",
		solar: "1320.336",
		stime: -879267914000,
		gdate: "1942-1-20",
		gregorian: "",
		gtime: -879267914000
	},
	{
		sdate: "1320-11-02",
		solar: "1320.337",
		stime: -879181514000,
		gdate: "1942-1-21",
		gregorian: "",
		gtime: -879181514000
	},
	{
		sdate: "1320-11-03",
		solar: "1320.338",
		stime: -879095114000,
		gdate: "1942-1-22",
		gregorian: "",
		gtime: -879095114000
	},
	{
		sdate: "1320-11-04",
		solar: "1320.339",
		stime: -879008714000,
		gdate: "1942-1-23",
		gregorian: "",
		gtime: -879008714000
	},
	{
		sdate: "1320-11-05",
		solar: "1320.340",
		stime: -878922314000,
		gdate: "1942-1-24",
		gregorian: "",
		gtime: -878922314000
	},
	{
		sdate: "1321-00-01",
		solar: "1321.0",
		stime: -876762314000,
		gdate: "1942-2-21",
		gregorian: "",
		gtime: -876762314000
	},
	{
		sdate: "1321-00-02",
		solar: "1321.1",
		stime: -876675914000,
		gdate: "1942-2-22",
		gregorian: "",
		gtime: -876675914000
	},
	{
		sdate: "1340-00-01",
		solar: "1340.0",
		stime: -277146570000,
		gdate: "1961-2-21",
		gregorian: "",
		gtime: -277146570000
	},
	{
		sdate: "1340-00-02",
		solar: "1340.1",
		stime: -277060170000,
		gdate: "1961-2-22",
		gregorian: "",
		gtime: -277060170000
	},
	{
		sdate: "1340-00-30",
		solar: "1340.29",
		stime: -274640970000,
		gdate: "1961-3-19",
		gregorian: "",
		gtime: -274640970000
	},
	{
		sdate: "1340-00-31",
		solar: "1340.30",
		stime: -274554570000,
		gdate: "1961-3-20",
		gregorian: "",
		gtime: -274554570000
	},
	{
		sdate: "1340-01-01",
		solar: "1340.31",
		stime: -274468170000,
		gdate: "1961-3-21",
		gregorian: "",
		gtime: -274468170000
	},
	{
		sdate: "1340-01-02",
		solar: "1340.32",
		stime: -274381770000,
		gdate: "1961-3-22",
		gregorian: "",
		gtime: -274381770000
	},
	{
		sdate: "1340-01-30",
		solar: "1340.60",
		stime: -271962570000,
		gdate: "1961-4-20",
		gregorian: "",
		gtime: -271962570000
	},
	{
		sdate: "1340-01-31",
		solar: "1340.61",
		stime: -271876170000,
		gdate: "1961-4-21",
		gregorian: "",
		gtime: -271876170000
	},
	{
		sdate: "1340-02-01",
		solar: "1340.62",
		stime: -271789770000,
		gdate: "1961-4-22",
		gregorian: "",
		gtime: -271789770000
	},
	{
		sdate: "1340-02-02",
		solar: "1340.63",
		stime: -271703370000,
		gdate: "1961-4-23",
		gregorian: "",
		gtime: -271703370000
	},
	{
		sdate: "1340-02-30",
		solar: "1340.91",
		stime: -269284170000,
		gdate: "1961-5-20",
		gregorian: "",
		gtime: -269284170000
	},
	{
		sdate: "1340-02-31",
		solar: "1340.92",
		stime: -269197770000,
		gdate: "1961-5-21",
		gregorian: "",
		gtime: -269197770000
	},
	{
		sdate: "1340-03-01",
		solar: "1340.93",
		stime: -269111370000,
		gdate: "1961-5-22",
		gregorian: "",
		gtime: -269111370000
	},
	{
		sdate: "1340-03-02",
		solar: "1340.94",
		stime: -269024970000,
		gdate: "1961-5-23",
		gregorian: "",
		gtime: -269024970000
	},
	{
		sdate: "1340-03-30",
		solar: "1340.122",
		stime: -266605770000,
		gdate: "1961-6-21",
		gregorian: "",
		gtime: -266605770000
	},
	{
		sdate: "1340-03-31",
		solar: "1340.123",
		stime: -266519370000,
		gdate: "1961-6-22",
		gregorian: "",
		gtime: -266519370000
	},
	{
		sdate: "1340-04-01",
		solar: "1340.124",
		stime: -266432970000,
		gdate: "1961-6-23",
		gregorian: "",
		gtime: -266432970000
	},
	{
		sdate: "1340-04-02",
		solar: "1340.125",
		stime: -266346570000,
		gdate: "1961-6-24",
		gregorian: "",
		gtime: -266346570000
	},
	{
		sdate: "1340-04-30",
		solar: "1340.153",
		stime: -263927370000,
		gdate: "1961-7-21",
		gregorian: "",
		gtime: -263927370000
	},
	{
		sdate: "1340-04-31",
		solar: "1340.154",
		stime: -263840970000,
		gdate: "1961-7-22",
		gregorian: "",
		gtime: -263840970000
	},
	{
		sdate: "1340-05-01",
		solar: "1340.155",
		stime: -263754570000,
		gdate: "1961-7-23",
		gregorian: "",
		gtime: -263754570000
	},
	{
		sdate: "1340-05-02",
		solar: "1340.156",
		stime: -263668170000,
		gdate: "1961-7-24",
		gregorian: "",
		gtime: -263668170000
	},
	{
		sdate: "1340-05-29",
		solar: "1340.183",
		stime: -261335370000,
		gdate: "1961-8-20",
		gregorian: "",
		gtime: -261335370000
	},
	{
		sdate: "1340-05-30",
		solar: "1340.184",
		stime: -261248970000,
		gdate: "1961-8-21",
		gregorian: "",
		gtime: -261248970000
	},
	{
		sdate: "1340-06-01",
		solar: "1340.186",
		stime: -261076170000,
		gdate: "1961-8-23",
		gregorian: "",
		gtime: -261076170000
	},
	{
		sdate: "1340-06-02",
		solar: "1340.187",
		stime: -260989770000,
		gdate: "1961-8-24",
		gregorian: "",
		gtime: -260989770000
	},
	{
		sdate: "1340-06-29",
		solar: "1340.214",
		stime: -258656970000,
		gdate: "1961-9-21",
		gregorian: "",
		gtime: -258656970000
	},
	{
		sdate: "1340-06-30",
		solar: "1340.215",
		stime: -258570570000,
		gdate: "1961-9-22",
		gregorian: "",
		gtime: -258570570000
	},
	{
		sdate: "1340-07-01",
		solar: "1340.216",
		stime: -258484170000,
		gdate: "1961-9-23",
		gregorian: "",
		gtime: -258484170000
	},
	{
		sdate: "1340-07-02",
		solar: "1340.217",
		stime: -258397770000,
		gdate: "1961-9-24",
		gregorian: "",
		gtime: -258397770000
	},
	{
		sdate: "1340-07-29",
		solar: "1340.244",
		stime: -256064970000,
		gdate: "1961-10-20",
		gregorian: "",
		gtime: -256064970000
	},
	{
		sdate: "1340-07-30",
		solar: "1340.245",
		stime: -255978570000,
		gdate: "1961-10-21",
		gregorian: "",
		gtime: -255978570000
	},
	{
		sdate: "1340-08-01",
		solar: "1340.246",
		stime: -255892170000,
		gdate: "1961-10-22",
		gregorian: "",
		gtime: -255892170000
	},
	{
		sdate: "1340-08-02",
		solar: "1340.247",
		stime: -255805770000,
		gdate: "1961-10-23",
		gregorian: "",
		gtime: -255805770000
	},
	{
		sdate: "1340-08-29",
		solar: "1340.274",
		stime: -253472970000,
		gdate: "1961-11-20",
		gregorian: "",
		gtime: -253472970000
	},
	{
		sdate: "1340-08-30",
		solar: "1340.275",
		stime: -253386570000,
		gdate: "1961-11-21",
		gregorian: "",
		gtime: -253386570000
	},
	{
		sdate: "1340-09-01",
		solar: "1340.276",
		stime: -253300170000,
		gdate: "1961-11-22",
		gregorian: "",
		gtime: -253300170000
	},
	{
		sdate: "1340-09-02",
		solar: "1340.277",
		stime: -253213770000,
		gdate: "1961-11-23",
		gregorian: "",
		gtime: -253213770000
	},
	{
		sdate: "1340-09-29",
		solar: "1340.304",
		stime: -250880970000,
		gdate: "1962-0-19",
		gregorian: "",
		gtime: -250880970000
	},
	{
		sdate: "1340-09-30",
		solar: "1340.305",
		stime: -250794570000,
		gdate: "1962-0-20",
		gregorian: "",
		gtime: -250794570000
	},
	{
		sdate: "1340-10-01",
		solar: "1340.306",
		stime: -250708170000,
		gdate: "1962-0-21",
		gregorian: "",
		gtime: -250708170000
	},
	{
		sdate: "1340-10-02",
		solar: "1340.307",
		stime: -250621770000,
		gdate: "1962-0-22",
		gregorian: "",
		gtime: -250621770000
	},
	{
		sdate: "1340-10-26",
		solar: "1340.331",
		stime: -248548170000,
		gdate: "1962-1-15",
		gregorian: "",
		gtime: -248548170000
	},
	{
		sdate: "1340-10-27",
		solar: "1340.332",
		stime: -248461770000,
		gdate: "1962-1-16",
		gregorian: "",
		gtime: -248461770000
	},
	{
		sdate: "1340-10-28",
		solar: "1340.333",
		stime: -248375370000,
		gdate: "1962-1-17",
		gregorian: "",
		gtime: -248375370000
	},
	{
		sdate: "1340-10-29",
		solar: "1340.334",
		stime: -248288970000,
		gdate: "1962-1-18",
		gregorian: "",
		gtime: -248288970000
	},
	{
		sdate: "1340-10-30",
		solar: "1340.335",
		stime: -248202570000,
		gdate: "1962-1-19",
		gregorian: "",
		gtime: -248202570000
	},
	{
		sdate: "1340-11-01",
		solar: "1340.336",
		stime: -248116170000,
		gdate: "1962-1-20",
		gregorian: "",
		gtime: -248116170000
	},
	{
		sdate: "1340-11-02",
		solar: "1340.337",
		stime: -248029770000,
		gdate: "1962-1-21",
		gregorian: "",
		gtime: -248029770000
	},
	{
		sdate: "1340-11-03",
		solar: "1340.338",
		stime: -247943370000,
		gdate: "1962-1-22",
		gregorian: "",
		gtime: -247943370000
	},
	{
		sdate: "1340-11-04",
		solar: "1340.339",
		stime: -247856970000,
		gdate: "1962-1-23",
		gregorian: "",
		gtime: -247856970000
	},
	{
		sdate: "1340-11-05",
		solar: "1340.340",
		stime: -247770570000,
		gdate: "1962-1-24",
		gregorian: "",
		gtime: -247770570000
	},
	{
		sdate: "1341-00-01",
		solar: "1341.0",
		stime: -245610570000,
		gdate: "1962-2-21",
		gregorian: "",
		gtime: -245610570000
	},
	{
		sdate: "1341-00-02",
		solar: "1341.1",
		stime: -245524170000,
		gdate: "1962-2-22",
		gregorian: "",
		gtime: -245524170000
	},
	{
		sdate: "1360-00-01",
		solar: "1360.0",
		stime: 354005430000,
		gdate: "1981-2-21",
		gregorian: "",
		gtime: 354005430000
	},
	{
		sdate: "1360-00-02",
		solar: "1360.1",
		stime: 354091830000,
		gdate: "1981-2-22",
		gregorian: "",
		gtime: 354091830000
	},
	{
		sdate: "1360-00-30",
		solar: "1360.29",
		stime: 356511030000,
		gdate: "1981-3-19",
		gregorian: "",
		gtime: 356511030000
	},
	{
		sdate: "1360-00-31",
		solar: "1360.30",
		stime: 356597430000,
		gdate: "1981-3-20",
		gregorian: "",
		gtime: 356597430000
	},
	{
		sdate: "1360-01-01",
		solar: "1360.31",
		stime: 356683830000,
		gdate: "1981-3-21",
		gregorian: "",
		gtime: 356683830000
	},
	{
		sdate: "1360-01-02",
		solar: "1360.32",
		stime: 356770230000,
		gdate: "1981-3-22",
		gregorian: "",
		gtime: 356770230000
	},
	{
		sdate: "1360-01-30",
		solar: "1360.60",
		stime: 359189430000,
		gdate: "1981-4-20",
		gregorian: "",
		gtime: 359189430000
	},
	{
		sdate: "1360-01-31",
		solar: "1360.61",
		stime: 359275830000,
		gdate: "1981-4-21",
		gregorian: "",
		gtime: 359275830000
	},
	{
		sdate: "1360-02-01",
		solar: "1360.62",
		stime: 359362230000,
		gdate: "1981-4-22",
		gregorian: "",
		gtime: 359362230000
	},
	{
		sdate: "1360-02-02",
		solar: "1360.63",
		stime: 359448630000,
		gdate: "1981-4-23",
		gregorian: "",
		gtime: 359448630000
	},
	{
		sdate: "1360-02-30",
		solar: "1360.91",
		stime: 361867830000,
		gdate: "1981-5-20",
		gregorian: "",
		gtime: 361867830000
	},
	{
		sdate: "1360-02-31",
		solar: "1360.92",
		stime: 361954230000,
		gdate: "1981-5-21",
		gregorian: "",
		gtime: 361954230000
	},
	{
		sdate: "1360-03-01",
		solar: "1360.93",
		stime: 362040630000,
		gdate: "1981-5-22",
		gregorian: "",
		gtime: 362040630000
	},
	{
		sdate: "1360-03-02",
		solar: "1360.94",
		stime: 362127030000,
		gdate: "1981-5-23",
		gregorian: "",
		gtime: 362127030000
	},
	{
		sdate: "1360-03-30",
		solar: "1360.122",
		stime: 364546230000,
		gdate: "1981-6-21",
		gregorian: "",
		gtime: 364546230000
	},
	{
		sdate: "1360-03-31",
		solar: "1360.123",
		stime: 364632630000,
		gdate: "1981-6-22",
		gregorian: "",
		gtime: 364632630000
	},
	{
		sdate: "1360-04-01",
		solar: "1360.124",
		stime: 364719030000,
		gdate: "1981-6-23",
		gregorian: "",
		gtime: 364719030000
	},
	{
		sdate: "1360-04-02",
		solar: "1360.125",
		stime: 364805430000,
		gdate: "1981-6-24",
		gregorian: "",
		gtime: 364805430000
	},
	{
		sdate: "1360-04-30",
		solar: "1360.153",
		stime: 367224630000,
		gdate: "1981-7-21",
		gregorian: "",
		gtime: 367224630000
	},
	{
		sdate: "1360-04-31",
		solar: "1360.154",
		stime: 367311030000,
		gdate: "1981-7-22",
		gregorian: "",
		gtime: 367311030000
	},
	{
		sdate: "1360-05-01",
		solar: "1360.155",
		stime: 367397430000,
		gdate: "1981-7-23",
		gregorian: "",
		gtime: 367397430000
	},
	{
		sdate: "1360-05-02",
		solar: "1360.156",
		stime: 367483830000,
		gdate: "1981-7-24",
		gregorian: "",
		gtime: 367483830000
	},
	{
		sdate: "1360-05-29",
		solar: "1360.183",
		stime: 369816630000,
		gdate: "1981-8-20",
		gregorian: "",
		gtime: 369816630000
	},
	{
		sdate: "1360-05-30",
		solar: "1360.184",
		stime: 369903030000,
		gdate: "1981-8-21",
		gregorian: "",
		gtime: 369903030000
	},
	{
		sdate: "1360-06-01",
		solar: "1360.186",
		stime: 370075830000,
		gdate: "1981-8-23",
		gregorian: "",
		gtime: 370075830000
	},
	{
		sdate: "1360-06-02",
		solar: "1360.187",
		stime: 370162230000,
		gdate: "1981-8-24",
		gregorian: "",
		gtime: 370162230000
	},
	{
		sdate: "1360-06-29",
		solar: "1360.214",
		stime: 372495030000,
		gdate: "1981-9-21",
		gregorian: "",
		gtime: 372495030000
	},
	{
		sdate: "1360-06-30",
		solar: "1360.215",
		stime: 372581430000,
		gdate: "1981-9-22",
		gregorian: "",
		gtime: 372581430000
	},
	{
		sdate: "1360-07-01",
		solar: "1360.216",
		stime: 372667830000,
		gdate: "1981-9-23",
		gregorian: "",
		gtime: 372667830000
	},
	{
		sdate: "1360-07-02",
		solar: "1360.217",
		stime: 372754230000,
		gdate: "1981-9-24",
		gregorian: "",
		gtime: 372754230000
	},
	{
		sdate: "1360-07-29",
		solar: "1360.244",
		stime: 375087030000,
		gdate: "1981-10-20",
		gregorian: "",
		gtime: 375087030000
	},
	{
		sdate: "1360-07-30",
		solar: "1360.245",
		stime: 375173430000,
		gdate: "1981-10-21",
		gregorian: "",
		gtime: 375173430000
	},
	{
		sdate: "1360-08-01",
		solar: "1360.246",
		stime: 375259830000,
		gdate: "1981-10-22",
		gregorian: "",
		gtime: 375259830000
	},
	{
		sdate: "1360-08-02",
		solar: "1360.247",
		stime: 375346230000,
		gdate: "1981-10-23",
		gregorian: "",
		gtime: 375346230000
	},
	{
		sdate: "1360-08-29",
		solar: "1360.274",
		stime: 377679030000,
		gdate: "1981-11-20",
		gregorian: "",
		gtime: 377679030000
	},
	{
		sdate: "1360-08-30",
		solar: "1360.275",
		stime: 377765430000,
		gdate: "1981-11-21",
		gregorian: "",
		gtime: 377765430000
	},
	{
		sdate: "1360-09-01",
		solar: "1360.276",
		stime: 377851830000,
		gdate: "1981-11-22",
		gregorian: "",
		gtime: 377851830000
	},
	{
		sdate: "1360-09-02",
		solar: "1360.277",
		stime: 377938230000,
		gdate: "1981-11-23",
		gregorian: "",
		gtime: 377938230000
	},
	{
		sdate: "1360-09-29",
		solar: "1360.304",
		stime: 380271030000,
		gdate: "1982-0-19",
		gregorian: "",
		gtime: 380271030000
	},
	{
		sdate: "1360-09-30",
		solar: "1360.305",
		stime: 380357430000,
		gdate: "1982-0-20",
		gregorian: "",
		gtime: 380357430000
	},
	{
		sdate: "1360-10-01",
		solar: "1360.306",
		stime: 380443830000,
		gdate: "1982-0-21",
		gregorian: "",
		gtime: 380443830000
	},
	{
		sdate: "1360-10-02",
		solar: "1360.307",
		stime: 380530230000,
		gdate: "1982-0-22",
		gregorian: "",
		gtime: 380530230000
	},
	{
		sdate: "1360-10-26",
		solar: "1360.331",
		stime: 382603830000,
		gdate: "1982-1-15",
		gregorian: "",
		gtime: 382603830000
	},
	{
		sdate: "1360-10-27",
		solar: "1360.332",
		stime: 382690230000,
		gdate: "1982-1-16",
		gregorian: "",
		gtime: 382690230000
	},
	{
		sdate: "1360-10-28",
		solar: "1360.333",
		stime: 382776630000,
		gdate: "1982-1-17",
		gregorian: "",
		gtime: 382776630000
	},
	{
		sdate: "1360-10-29",
		solar: "1360.334",
		stime: 382863030000,
		gdate: "1982-1-18",
		gregorian: "",
		gtime: 382863030000
	},
	{
		sdate: "1360-10-30",
		solar: "1360.335",
		stime: 382949430000,
		gdate: "1982-1-19",
		gregorian: "",
		gtime: 382949430000
	},
	{
		sdate: "1360-11-01",
		solar: "1360.336",
		stime: 383035830000,
		gdate: "1982-1-20",
		gregorian: "",
		gtime: 383035830000
	},
	{
		sdate: "1360-11-02",
		solar: "1360.337",
		stime: 383122230000,
		gdate: "1982-1-21",
		gregorian: "",
		gtime: 383122230000
	},
	{
		sdate: "1360-11-03",
		solar: "1360.338",
		stime: 383208630000,
		gdate: "1982-1-22",
		gregorian: "",
		gtime: 383208630000
	},
	{
		sdate: "1360-11-04",
		solar: "1360.339",
		stime: 383295030000,
		gdate: "1982-1-23",
		gregorian: "",
		gtime: 383295030000
	},
	{
		sdate: "1360-11-05",
		solar: "1360.340",
		stime: 383381430000,
		gdate: "1982-1-24",
		gregorian: "",
		gtime: 383381430000
	},
	{
		sdate: "1361-00-01",
		solar: "1361.0",
		stime: 385541430000,
		gdate: "1982-2-21",
		gregorian: "",
		gtime: 385541430000
	},
	{
		sdate: "1361-00-02",
		solar: "1361.1",
		stime: 385627830000,
		gdate: "1982-2-22",
		gregorian: "",
		gtime: 385627830000
	},
	{
		sdate: "1380-00-01",
		solar: "1380.0",
		stime: 985157430000,
		gdate: "2001-2-21",
		gregorian: "",
		gtime: 985157430000
	},
	{
		sdate: "1380-00-02",
		solar: "1380.1",
		stime: 985240230000,
		gdate: "2001-2-22",
		gregorian: "",
		gtime: 985240230000
	},
	{
		sdate: "1380-00-30",
		solar: "1380.29",
		stime: 987659430000,
		gdate: "2001-3-19",
		gregorian: "",
		gtime: 987659430000
	},
	{
		sdate: "1380-00-31",
		solar: "1380.30",
		stime: 987745830000,
		gdate: "2001-3-20",
		gregorian: "",
		gtime: 987745830000
	},
	{
		sdate: "1380-01-01",
		solar: "1380.31",
		stime: 987832230000,
		gdate: "2001-3-21",
		gregorian: "",
		gtime: 987832230000
	},
	{
		sdate: "1380-01-02",
		solar: "1380.32",
		stime: 987918630000,
		gdate: "2001-3-22",
		gregorian: "",
		gtime: 987918630000
	},
	{
		sdate: "1380-01-30",
		solar: "1380.60",
		stime: 990337830000,
		gdate: "2001-4-20",
		gregorian: "",
		gtime: 990337830000
	},
	{
		sdate: "1380-01-31",
		solar: "1380.61",
		stime: 990424230000,
		gdate: "2001-4-21",
		gregorian: "",
		gtime: 990424230000
	},
	{
		sdate: "1380-02-01",
		solar: "1380.62",
		stime: 990510630000,
		gdate: "2001-4-22",
		gregorian: "",
		gtime: 990510630000
	},
	{
		sdate: "1380-02-02",
		solar: "1380.63",
		stime: 990597030000,
		gdate: "2001-4-23",
		gregorian: "",
		gtime: 990597030000
	},
	{
		sdate: "1380-02-30",
		solar: "1380.91",
		stime: 993016230000,
		gdate: "2001-5-20",
		gregorian: "",
		gtime: 993016230000
	},
	{
		sdate: "1380-02-31",
		solar: "1380.92",
		stime: 993102630000,
		gdate: "2001-5-21",
		gregorian: "",
		gtime: 993102630000
	},
	{
		sdate: "1380-03-01",
		solar: "1380.93",
		stime: 993189030000,
		gdate: "2001-5-22",
		gregorian: "",
		gtime: 993189030000
	},
	{
		sdate: "1380-03-02",
		solar: "1380.94",
		stime: 993275430000,
		gdate: "2001-5-23",
		gregorian: "",
		gtime: 993275430000
	},
	{
		sdate: "1380-03-30",
		solar: "1380.122",
		stime: 995694630000,
		gdate: "2001-6-21",
		gregorian: "",
		gtime: 995694630000
	},
	{
		sdate: "1380-03-31",
		solar: "1380.123",
		stime: 995781030000,
		gdate: "2001-6-22",
		gregorian: "",
		gtime: 995781030000
	},
	{
		sdate: "1380-04-01",
		solar: "1380.124",
		stime: 995867430000,
		gdate: "2001-6-23",
		gregorian: "",
		gtime: 995867430000
	},
	{
		sdate: "1380-04-02",
		solar: "1380.125",
		stime: 995953830000,
		gdate: "2001-6-24",
		gregorian: "",
		gtime: 995953830000
	},
	{
		sdate: "1380-04-30",
		solar: "1380.153",
		stime: 998373030000,
		gdate: "2001-7-21",
		gregorian: "",
		gtime: 998373030000
	},
	{
		sdate: "1380-04-31",
		solar: "1380.154",
		stime: 998459430000,
		gdate: "2001-7-22",
		gregorian: "",
		gtime: 998459430000
	},
	{
		sdate: "1380-05-01",
		solar: "1380.155",
		stime: 998545830000,
		gdate: "2001-7-23",
		gregorian: "",
		gtime: 998545830000
	},
	{
		sdate: "1380-05-02",
		solar: "1380.156",
		stime: 998632230000,
		gdate: "2001-7-24",
		gregorian: "",
		gtime: 998632230000
	},
	{
		sdate: "1380-05-29",
		solar: "1380.183",
		stime: 1000965030000,
		gdate: "2001-8-20",
		gregorian: "",
		gtime: 1000965030000
	},
	{
		sdate: "1380-05-30",
		solar: "1380.184",
		stime: 1001051430000,
		gdate: "2001-8-21",
		gregorian: "",
		gtime: 1001051430000
	},
	{
		sdate: "1380-06-01",
		solar: "1380.186",
		stime: 1001227830000,
		gdate: "2001-8-23",
		gregorian: "",
		gtime: 1001227830000
	},
	{
		sdate: "1380-06-02",
		solar: "1380.187",
		stime: 1001314230000,
		gdate: "2001-8-24",
		gregorian: "",
		gtime: 1001314230000
	},
	{
		sdate: "1380-06-29",
		solar: "1380.214",
		stime: 1003647030000,
		gdate: "2001-9-21",
		gregorian: "",
		gtime: 1003647030000
	},
	{
		sdate: "1380-06-30",
		solar: "1380.215",
		stime: 1003733430000,
		gdate: "2001-9-22",
		gregorian: "",
		gtime: 1003733430000
	},
	{
		sdate: "1380-07-01",
		solar: "1380.216",
		stime: 1003819830000,
		gdate: "2001-9-23",
		gregorian: "",
		gtime: 1003819830000
	},
	{
		sdate: "1380-07-02",
		solar: "1380.217",
		stime: 1003906230000,
		gdate: "2001-9-24",
		gregorian: "",
		gtime: 1003906230000
	},
	{
		sdate: "1380-07-29",
		solar: "1380.244",
		stime: 1006239030000,
		gdate: "2001-10-20",
		gregorian: "",
		gtime: 1006239030000
	},
	{
		sdate: "1380-07-30",
		solar: "1380.245",
		stime: 1006325430000,
		gdate: "2001-10-21",
		gregorian: "",
		gtime: 1006325430000
	},
	{
		sdate: "1380-08-01",
		solar: "1380.246",
		stime: 1006411830000,
		gdate: "2001-10-22",
		gregorian: "",
		gtime: 1006411830000
	},
	{
		sdate: "1380-08-02",
		solar: "1380.247",
		stime: 1006498230000,
		gdate: "2001-10-23",
		gregorian: "",
		gtime: 1006498230000
	},
	{
		sdate: "1380-08-29",
		solar: "1380.274",
		stime: 1008831030000,
		gdate: "2001-11-20",
		gregorian: "",
		gtime: 1008831030000
	},
	{
		sdate: "1380-08-30",
		solar: "1380.275",
		stime: 1008917430000,
		gdate: "2001-11-21",
		gregorian: "",
		gtime: 1008917430000
	},
	{
		sdate: "1380-09-01",
		solar: "1380.276",
		stime: 1009003830000,
		gdate: "2001-11-22",
		gregorian: "",
		gtime: 1009003830000
	},
	{
		sdate: "1380-09-02",
		solar: "1380.277",
		stime: 1009090230000,
		gdate: "2001-11-23",
		gregorian: "",
		gtime: 1009090230000
	},
	{
		sdate: "1380-09-29",
		solar: "1380.304",
		stime: 1011423030000,
		gdate: "2002-0-19",
		gregorian: "",
		gtime: 1011423030000
	},
	{
		sdate: "1380-09-30",
		solar: "1380.305",
		stime: 1011509430000,
		gdate: "2002-0-20",
		gregorian: "",
		gtime: 1011509430000
	},
	{
		sdate: "1380-10-01",
		solar: "1380.306",
		stime: 1011595830000,
		gdate: "2002-0-21",
		gregorian: "",
		gtime: 1011595830000
	},
	{
		sdate: "1380-10-02",
		solar: "1380.307",
		stime: 1011682230000,
		gdate: "2002-0-22",
		gregorian: "",
		gtime: 1011682230000
	},
	{
		sdate: "1380-10-26",
		solar: "1380.331",
		stime: 1013755830000,
		gdate: "2002-1-15",
		gregorian: "",
		gtime: 1013755830000
	},
	{
		sdate: "1380-10-27",
		solar: "1380.332",
		stime: 1013842230000,
		gdate: "2002-1-16",
		gregorian: "",
		gtime: 1013842230000
	},
	{
		sdate: "1380-10-28",
		solar: "1380.333",
		stime: 1013928630000,
		gdate: "2002-1-17",
		gregorian: "",
		gtime: 1013928630000
	},
	{
		sdate: "1380-10-29",
		solar: "1380.334",
		stime: 1014015030000,
		gdate: "2002-1-18",
		gregorian: "",
		gtime: 1014015030000
	},
	{
		sdate: "1380-10-30",
		solar: "1380.335",
		stime: 1014101430000,
		gdate: "2002-1-19",
		gregorian: "",
		gtime: 1014101430000
	},
	{
		sdate: "1380-11-01",
		solar: "1380.336",
		stime: 1014187830000,
		gdate: "2002-1-20",
		gregorian: "",
		gtime: 1014187830000
	},
	{
		sdate: "1380-11-02",
		solar: "1380.337",
		stime: 1014274230000,
		gdate: "2002-1-21",
		gregorian: "",
		gtime: 1014274230000
	},
	{
		sdate: "1380-11-03",
		solar: "1380.338",
		stime: 1014360630000,
		gdate: "2002-1-22",
		gregorian: "",
		gtime: 1014360630000
	},
	{
		sdate: "1380-11-04",
		solar: "1380.339",
		stime: 1014447030000,
		gdate: "2002-1-23",
		gregorian: "",
		gtime: 1014447030000
	},
	{
		sdate: "1380-11-05",
		solar: "1380.340",
		stime: 1014533430000,
		gdate: "2002-1-24",
		gregorian: "",
		gtime: 1014533430000
	},
	{
		sdate: "1381-00-01",
		solar: "1381.0",
		stime: 1016693430000,
		gdate: "2002-2-21",
		gregorian: "",
		gtime: 1016693430000
	},
	{
		sdate: "1381-00-02",
		solar: "1381.1",
		stime: 1016776230000,
		gdate: "2002-2-22",
		gregorian: "",
		gtime: 1016776230000
	},
	{
		sdate: "1400-00-01",
		solar: "1400.0",
		stime: 1616309430000,
		gdate: "2021-2-21",
		gregorian: "",
		gtime: 1616309430000
	},
	{
		sdate: "1400-00-02",
		solar: "1400.1",
		stime: 1616392230000,
		gdate: "2021-2-22",
		gregorian: "",
		gtime: 1616392230000
	},
	{
		sdate: "1400-00-30",
		solar: "1400.29",
		stime: 1618811430000,
		gdate: "2021-3-19",
		gregorian: "",
		gtime: 1618811430000
	},
	{
		sdate: "1400-00-31",
		solar: "1400.30",
		stime: 1618897830000,
		gdate: "2021-3-20",
		gregorian: "",
		gtime: 1618897830000
	},
	{
		sdate: "1400-01-01",
		solar: "1400.31",
		stime: 1618984230000,
		gdate: "2021-3-21",
		gregorian: "",
		gtime: 1618984230000
	},
	{
		sdate: "1400-01-02",
		solar: "1400.32",
		stime: 1619070630000,
		gdate: "2021-3-22",
		gregorian: "",
		gtime: 1619070630000
	},
	{
		sdate: "1400-01-30",
		solar: "1400.60",
		stime: 1621489830000,
		gdate: "2021-4-20",
		gregorian: "",
		gtime: 1621489830000
	},
	{
		sdate: "1400-01-31",
		solar: "1400.61",
		stime: 1621576230000,
		gdate: "2021-4-21",
		gregorian: "",
		gtime: 1621576230000
	},
	{
		sdate: "1400-02-01",
		solar: "1400.62",
		stime: 1621662630000,
		gdate: "2021-4-22",
		gregorian: "",
		gtime: 1621662630000
	},
	{
		sdate: "1400-02-02",
		solar: "1400.63",
		stime: 1621749030000,
		gdate: "2021-4-23",
		gregorian: "",
		gtime: 1621749030000
	},
	{
		sdate: "1400-02-30",
		solar: "1400.91",
		stime: 1624168230000,
		gdate: "2021-5-20",
		gregorian: "",
		gtime: 1624168230000
	},
	{
		sdate: "1400-02-31",
		solar: "1400.92",
		stime: 1624254630000,
		gdate: "2021-5-21",
		gregorian: "",
		gtime: 1624254630000
	},
	{
		sdate: "1400-03-01",
		solar: "1400.93",
		stime: 1624341030000,
		gdate: "2021-5-22",
		gregorian: "",
		gtime: 1624341030000
	},
	{
		sdate: "1400-03-02",
		solar: "1400.94",
		stime: 1624427430000,
		gdate: "2021-5-23",
		gregorian: "",
		gtime: 1624427430000
	},
	{
		sdate: "1400-03-30",
		solar: "1400.122",
		stime: 1626846630000,
		gdate: "2021-6-21",
		gregorian: "",
		gtime: 1626846630000
	},
	{
		sdate: "1400-03-31",
		solar: "1400.123",
		stime: 1626933030000,
		gdate: "2021-6-22",
		gregorian: "",
		gtime: 1626933030000
	},
	{
		sdate: "1400-04-01",
		solar: "1400.124",
		stime: 1627019430000,
		gdate: "2021-6-23",
		gregorian: "",
		gtime: 1627019430000
	},
	{
		sdate: "1400-04-02",
		solar: "1400.125",
		stime: 1627105830000,
		gdate: "2021-6-24",
		gregorian: "",
		gtime: 1627105830000
	},
	{
		sdate: "1400-04-30",
		solar: "1400.153",
		stime: 1629525030000,
		gdate: "2021-7-21",
		gregorian: "",
		gtime: 1629525030000
	},
	{
		sdate: "1400-04-31",
		solar: "1400.154",
		stime: 1629611430000,
		gdate: "2021-7-22",
		gregorian: "",
		gtime: 1629611430000
	},
	{
		sdate: "1400-05-01",
		solar: "1400.155",
		stime: 1629697830000,
		gdate: "2021-7-23",
		gregorian: "",
		gtime: 1629697830000
	},
	{
		sdate: "1400-05-02",
		solar: "1400.156",
		stime: 1629784230000,
		gdate: "2021-7-24",
		gregorian: "",
		gtime: 1629784230000
	},
	{
		sdate: "1400-05-29",
		solar: "1400.183",
		stime: 1632117030000,
		gdate: "2021-8-20",
		gregorian: "",
		gtime: 1632117030000
	},
	{
		sdate: "1400-05-30",
		solar: "1400.184",
		stime: 1632203430000,
		gdate: "2021-8-21",
		gregorian: "",
		gtime: 1632203430000
	},
	{
		sdate: "1400-06-01",
		solar: "1400.186",
		stime: 1632379830000,
		gdate: "2021-8-23",
		gregorian: "",
		gtime: 1632379830000
	},
	{
		sdate: "1400-06-02",
		solar: "1400.187",
		stime: 1632466230000,
		gdate: "2021-8-24",
		gregorian: "",
		gtime: 1632466230000
	},
	{
		sdate: "1400-06-29",
		solar: "1400.214",
		stime: 1634799030000,
		gdate: "2021-9-21",
		gregorian: "",
		gtime: 1634799030000
	},
	{
		sdate: "1400-06-30",
		solar: "1400.215",
		stime: 1634885430000,
		gdate: "2021-9-22",
		gregorian: "",
		gtime: 1634885430000
	},
	{
		sdate: "1400-07-01",
		solar: "1400.216",
		stime: 1634971830000,
		gdate: "2021-9-23",
		gregorian: "",
		gtime: 1634971830000
	},
	{
		sdate: "1400-07-02",
		solar: "1400.217",
		stime: 1635058230000,
		gdate: "2021-9-24",
		gregorian: "",
		gtime: 1635058230000
	},
	{
		sdate: "1400-07-29",
		solar: "1400.244",
		stime: 1637391030000,
		gdate: "2021-10-20",
		gregorian: "",
		gtime: 1637391030000
	},
	{
		sdate: "1400-07-30",
		solar: "1400.245",
		stime: 1637477430000,
		gdate: "2021-10-21",
		gregorian: "",
		gtime: 1637477430000
	},
	{
		sdate: "1400-08-01",
		solar: "1400.246",
		stime: 1637563830000,
		gdate: "2021-10-22",
		gregorian: "",
		gtime: 1637563830000
	},
	{
		sdate: "1400-08-02",
		solar: "1400.247",
		stime: 1637650230000,
		gdate: "2021-10-23",
		gregorian: "",
		gtime: 1637650230000
	},
	{
		sdate: "1400-08-29",
		solar: "1400.274",
		stime: 1639983030000,
		gdate: "2021-11-20",
		gregorian: "",
		gtime: 1639983030000
	},
	{
		sdate: "1400-08-30",
		solar: "1400.275",
		stime: 1640069430000,
		gdate: "2021-11-21",
		gregorian: "",
		gtime: 1640069430000
	},
	{
		sdate: "1400-09-01",
		solar: "1400.276",
		stime: 1640155830000,
		gdate: "2021-11-22",
		gregorian: "",
		gtime: 1640155830000
	},
	{
		sdate: "1400-09-02",
		solar: "1400.277",
		stime: 1640242230000,
		gdate: "2021-11-23",
		gregorian: "",
		gtime: 1640242230000
	},
	{
		sdate: "1400-09-29",
		solar: "1400.304",
		stime: 1642575030000,
		gdate: "2022-0-19",
		gregorian: "",
		gtime: 1642575030000
	},
	{
		sdate: "1400-09-30",
		solar: "1400.305",
		stime: 1642661430000,
		gdate: "2022-0-20",
		gregorian: "",
		gtime: 1642661430000
	},
	{
		sdate: "1400-10-01",
		solar: "1400.306",
		stime: 1642747830000,
		gdate: "2022-0-21",
		gregorian: "",
		gtime: 1642747830000
	},
	{
		sdate: "1400-10-02",
		solar: "1400.307",
		stime: 1642834230000,
		gdate: "2022-0-22",
		gregorian: "",
		gtime: 1642834230000
	},
	{
		sdate: "1400-10-26",
		solar: "1400.331",
		stime: 1644907830000,
		gdate: "2022-1-15",
		gregorian: "",
		gtime: 1644907830000
	},
	{
		sdate: "1400-10-27",
		solar: "1400.332",
		stime: 1644994230000,
		gdate: "2022-1-16",
		gregorian: "",
		gtime: 1644994230000
	},
	{
		sdate: "1400-10-28",
		solar: "1400.333",
		stime: 1645080630000,
		gdate: "2022-1-17",
		gregorian: "",
		gtime: 1645080630000
	},
	{
		sdate: "1400-10-29",
		solar: "1400.334",
		stime: 1645167030000,
		gdate: "2022-1-18",
		gregorian: "",
		gtime: 1645167030000
	},
	{
		sdate: "1400-10-30",
		solar: "1400.335",
		stime: 1645253430000,
		gdate: "2022-1-19",
		gregorian: "",
		gtime: 1645253430000
	},
	{
		sdate: "1400-11-01",
		solar: "1400.336",
		stime: 1645339830000,
		gdate: "2022-1-20",
		gregorian: "",
		gtime: 1645339830000
	},
	{
		sdate: "1400-11-02",
		solar: "1400.337",
		stime: 1645426230000,
		gdate: "2022-1-21",
		gregorian: "",
		gtime: 1645426230000
	},
	{
		sdate: "1400-11-03",
		solar: "1400.338",
		stime: 1645512630000,
		gdate: "2022-1-22",
		gregorian: "",
		gtime: 1645512630000
	},
	{
		sdate: "1400-11-04",
		solar: "1400.339",
		stime: 1645599030000,
		gdate: "2022-1-23",
		gregorian: "",
		gtime: 1645599030000
	},
	{
		sdate: "1400-11-05",
		solar: "1400.340",
		stime: 1645685430000,
		gdate: "2022-1-24",
		gregorian: "",
		gtime: 1645685430000
	},
	{
		sdate: "1401-00-01",
		solar: "1401.0",
		stime: 1647845430000,
		gdate: "2022-2-21",
		gregorian: "",
		gtime: 1647845430000
	},
	{
		sdate: "1401-00-02",
		solar: "1401.1",
		stime: 1647928230000,
		gdate: "2022-2-22",
		gregorian: "",
		gtime: 1647928230000
	},
	{
		sdate: "1420-00-01",
		solar: "1420.0",
		stime: 2247375030000,
		gdate: "2041-2-20",
		gregorian: "",
		gtime: 2247375030000
	},
	{
		sdate: "1420-00-02",
		solar: "1420.1",
		stime: 2247457830000,
		gdate: "2041-2-21",
		gregorian: "",
		gtime: 2247457830000
	},
	{
		sdate: "1420-00-30",
		solar: "1420.29",
		stime: 2249877030000,
		gdate: "2041-3-18",
		gregorian: "",
		gtime: 2249877030000
	},
	{
		sdate: "1420-00-31",
		solar: "1420.30",
		stime: 2249963430000,
		gdate: "2041-3-19",
		gregorian: "",
		gtime: 2249963430000
	},
	{
		sdate: "1420-01-01",
		solar: "1420.31",
		stime: 2250049830000,
		gdate: "2041-3-20",
		gregorian: "",
		gtime: 2250049830000
	},
	{
		sdate: "1420-01-02",
		solar: "1420.32",
		stime: 2250136230000,
		gdate: "2041-3-21",
		gregorian: "",
		gtime: 2250136230000
	},
	{
		sdate: "1420-01-30",
		solar: "1420.60",
		stime: 2252555430000,
		gdate: "2041-4-19",
		gregorian: "",
		gtime: 2252555430000
	},
	{
		sdate: "1420-01-31",
		solar: "1420.61",
		stime: 2252641830000,
		gdate: "2041-4-20",
		gregorian: "",
		gtime: 2252641830000
	},
	{
		sdate: "1420-02-01",
		solar: "1420.62",
		stime: 2252728230000,
		gdate: "2041-4-21",
		gregorian: "",
		gtime: 2252728230000
	},
	{
		sdate: "1420-02-02",
		solar: "1420.63",
		stime: 2252814630000,
		gdate: "2041-4-22",
		gregorian: "",
		gtime: 2252814630000
	},
	{
		sdate: "1420-02-30",
		solar: "1420.91",
		stime: 2255233830000,
		gdate: "2041-5-19",
		gregorian: "",
		gtime: 2255233830000
	},
	{
		sdate: "1420-02-31",
		solar: "1420.92",
		stime: 2255320230000,
		gdate: "2041-5-20",
		gregorian: "",
		gtime: 2255320230000
	},
	{
		sdate: "1420-03-01",
		solar: "1420.93",
		stime: 2255406630000,
		gdate: "2041-5-21",
		gregorian: "",
		gtime: 2255406630000
	},
	{
		sdate: "1420-03-02",
		solar: "1420.94",
		stime: 2255493030000,
		gdate: "2041-5-22",
		gregorian: "",
		gtime: 2255493030000
	},
	{
		sdate: "1420-03-30",
		solar: "1420.122",
		stime: 2257912230000,
		gdate: "2041-6-20",
		gregorian: "",
		gtime: 2257912230000
	},
	{
		sdate: "1420-03-31",
		solar: "1420.123",
		stime: 2257998630000,
		gdate: "2041-6-21",
		gregorian: "",
		gtime: 2257998630000
	},
	{
		sdate: "1420-04-01",
		solar: "1420.124",
		stime: 2258085030000,
		gdate: "2041-6-22",
		gregorian: "",
		gtime: 2258085030000
	},
	{
		sdate: "1420-04-02",
		solar: "1420.125",
		stime: 2258171430000,
		gdate: "2041-6-23",
		gregorian: "",
		gtime: 2258171430000
	},
	{
		sdate: "1420-04-30",
		solar: "1420.153",
		stime: 2260590630000,
		gdate: "2041-7-20",
		gregorian: "",
		gtime: 2260590630000
	},
	{
		sdate: "1420-04-31",
		solar: "1420.154",
		stime: 2260677030000,
		gdate: "2041-7-21",
		gregorian: "",
		gtime: 2260677030000
	},
	{
		sdate: "1420-05-01",
		solar: "1420.155",
		stime: 2260763430000,
		gdate: "2041-7-22",
		gregorian: "",
		gtime: 2260763430000
	},
	{
		sdate: "1420-05-02",
		solar: "1420.156",
		stime: 2260849830000,
		gdate: "2041-7-23",
		gregorian: "",
		gtime: 2260849830000
	},
	{
		sdate: "1420-05-29",
		solar: "1420.183",
		stime: 2263182630000,
		gdate: "2041-8-19",
		gregorian: "",
		gtime: 2263182630000
	},
	{
		sdate: "1420-05-30",
		solar: "1420.184",
		stime: 2263269030000,
		gdate: "2041-8-20",
		gregorian: "",
		gtime: 2263269030000
	},
	{
		sdate: "1420-06-01",
		solar: "1420.186",
		stime: 2263445430000,
		gdate: "2041-8-22",
		gregorian: "",
		gtime: 2263445430000
	},
	{
		sdate: "1420-06-02",
		solar: "1420.187",
		stime: 2263531830000,
		gdate: "2041-8-23",
		gregorian: "",
		gtime: 2263531830000
	},
	{
		sdate: "1420-06-29",
		solar: "1420.214",
		stime: 2265864630000,
		gdate: "2041-9-20",
		gregorian: "",
		gtime: 2265864630000
	},
	{
		sdate: "1420-06-30",
		solar: "1420.215",
		stime: 2265951030000,
		gdate: "2041-9-21",
		gregorian: "",
		gtime: 2265951030000
	},
	{
		sdate: "1420-07-01",
		solar: "1420.216",
		stime: 2266037430000,
		gdate: "2041-9-22",
		gregorian: "",
		gtime: 2266037430000
	},
	{
		sdate: "1420-07-02",
		solar: "1420.217",
		stime: 2266123830000,
		gdate: "2041-9-23",
		gregorian: "",
		gtime: 2266123830000
	},
	{
		sdate: "1420-07-29",
		solar: "1420.244",
		stime: 2268456630000,
		gdate: "2041-10-19",
		gregorian: "",
		gtime: 2268456630000
	},
	{
		sdate: "1420-07-30",
		solar: "1420.245",
		stime: 2268543030000,
		gdate: "2041-10-20",
		gregorian: "",
		gtime: 2268543030000
	},
	{
		sdate: "1420-08-01",
		solar: "1420.246",
		stime: 2268629430000,
		gdate: "2041-10-21",
		gregorian: "",
		gtime: 2268629430000
	},
	{
		sdate: "1420-08-02",
		solar: "1420.247",
		stime: 2268715830000,
		gdate: "2041-10-22",
		gregorian: "",
		gtime: 2268715830000
	},
	{
		sdate: "1420-08-29",
		solar: "1420.274",
		stime: 2271048630000,
		gdate: "2041-11-19",
		gregorian: "",
		gtime: 2271048630000
	},
	{
		sdate: "1420-08-30",
		solar: "1420.275",
		stime: 2271135030000,
		gdate: "2041-11-20",
		gregorian: "",
		gtime: 2271135030000
	},
	{
		sdate: "1420-09-01",
		solar: "1420.276",
		stime: 2271221430000,
		gdate: "2041-11-21",
		gregorian: "",
		gtime: 2271221430000
	},
	{
		sdate: "1420-09-02",
		solar: "1420.277",
		stime: 2271307830000,
		gdate: "2041-11-22",
		gregorian: "",
		gtime: 2271307830000
	},
	{
		sdate: "1420-09-29",
		solar: "1420.304",
		stime: 2273640630000,
		gdate: "2042-0-18",
		gregorian: "",
		gtime: 2273640630000
	},
	{
		sdate: "1420-09-30",
		solar: "1420.305",
		stime: 2273727030000,
		gdate: "2042-0-19",
		gregorian: "",
		gtime: 2273727030000
	},
	{
		sdate: "1420-10-01",
		solar: "1420.306",
		stime: 2273813430000,
		gdate: "2042-0-20",
		gregorian: "",
		gtime: 2273813430000
	},
	{
		sdate: "1420-10-02",
		solar: "1420.307",
		stime: 2273899830000,
		gdate: "2042-0-21",
		gregorian: "",
		gtime: 2273899830000
	},
	{
		sdate: "1420-10-26",
		solar: "1420.331",
		stime: 2275973430000,
		gdate: "2042-1-14",
		gregorian: "",
		gtime: 2275973430000
	},
	{
		sdate: "1420-10-27",
		solar: "1420.332",
		stime: 2276059830000,
		gdate: "2042-1-15",
		gregorian: "",
		gtime: 2276059830000
	},
	{
		sdate: "1420-10-28",
		solar: "1420.333",
		stime: 2276146230000,
		gdate: "2042-1-16",
		gregorian: "",
		gtime: 2276146230000
	},
	{
		sdate: "1420-10-29",
		solar: "1420.334",
		stime: 2276232630000,
		gdate: "2042-1-17",
		gregorian: "",
		gtime: 2276232630000
	},
	{
		sdate: "1420-10-30",
		solar: "1420.335",
		stime: 2276319030000,
		gdate: "2042-1-18",
		gregorian: "",
		gtime: 2276319030000
	},
	{
		sdate: "1420-11-01",
		solar: "1420.336",
		stime: 2276405430000,
		gdate: "2042-1-19",
		gregorian: "",
		gtime: 2276405430000
	},
	{
		sdate: "1420-11-02",
		solar: "1420.337",
		stime: 2276491830000,
		gdate: "2042-1-20",
		gregorian: "",
		gtime: 2276491830000
	},
	{
		sdate: "1420-11-03",
		solar: "1420.338",
		stime: 2276578230000,
		gdate: "2042-1-21",
		gregorian: "",
		gtime: 2276578230000
	},
	{
		sdate: "1420-11-04",
		solar: "1420.339",
		stime: 2276664630000,
		gdate: "2042-1-22",
		gregorian: "",
		gtime: 2276664630000
	},
	{
		sdate: "1420-11-05",
		solar: "1420.340",
		stime: 2276751030000,
		gdate: "2042-1-23",
		gregorian: "",
		gtime: 2276751030000
	},
	{
		sdate: "1420-11-30",
		solar: "1420.365",
		stime: 2278911030000,
		gdate: "2042-2-20",
		gregorian: "",
		gtime: 2278911030000
	},
	{
		sdate: "1421-00-01",
		solar: "1421.0",
		stime: 2278997430000,
		gdate: "2042-2-21",
		gregorian: "",
		gtime: 2278997430000
	},
	{
		sdate: "1440-00-01",
		solar: "1440.0",
		stime: 2878527030000,
		gdate: "2061-2-20",
		gregorian: "",
		gtime: 2878527030000
	},
	{
		sdate: "1440-00-02",
		solar: "1440.1",
		stime: 2878609830000,
		gdate: "2061-2-21",
		gregorian: "",
		gtime: 2878609830000
	},
	{
		sdate: "1440-00-30",
		solar: "1440.29",
		stime: 2881029030000,
		gdate: "2061-3-18",
		gregorian: "",
		gtime: 2881029030000
	},
	{
		sdate: "1440-00-31",
		solar: "1440.30",
		stime: 2881115430000,
		gdate: "2061-3-19",
		gregorian: "",
		gtime: 2881115430000
	},
	{
		sdate: "1440-01-01",
		solar: "1440.31",
		stime: 2881201830000,
		gdate: "2061-3-20",
		gregorian: "",
		gtime: 2881201830000
	},
	{
		sdate: "1440-01-02",
		solar: "1440.32",
		stime: 2881288230000,
		gdate: "2061-3-21",
		gregorian: "",
		gtime: 2881288230000
	},
	{
		sdate: "1440-01-30",
		solar: "1440.60",
		stime: 2883707430000,
		gdate: "2061-4-19",
		gregorian: "",
		gtime: 2883707430000
	},
	{
		sdate: "1440-01-31",
		solar: "1440.61",
		stime: 2883793830000,
		gdate: "2061-4-20",
		gregorian: "",
		gtime: 2883793830000
	},
	{
		sdate: "1440-02-01",
		solar: "1440.62",
		stime: 2883880230000,
		gdate: "2061-4-21",
		gregorian: "",
		gtime: 2883880230000
	},
	{
		sdate: "1440-02-02",
		solar: "1440.63",
		stime: 2883966630000,
		gdate: "2061-4-22",
		gregorian: "",
		gtime: 2883966630000
	},
	{
		sdate: "1440-02-30",
		solar: "1440.91",
		stime: 2886385830000,
		gdate: "2061-5-19",
		gregorian: "",
		gtime: 2886385830000
	},
	{
		sdate: "1440-02-31",
		solar: "1440.92",
		stime: 2886472230000,
		gdate: "2061-5-20",
		gregorian: "",
		gtime: 2886472230000
	},
	{
		sdate: "1440-03-01",
		solar: "1440.93",
		stime: 2886558630000,
		gdate: "2061-5-21",
		gregorian: "",
		gtime: 2886558630000
	},
	{
		sdate: "1440-03-02",
		solar: "1440.94",
		stime: 2886645030000,
		gdate: "2061-5-22",
		gregorian: "",
		gtime: 2886645030000
	},
	{
		sdate: "1440-03-30",
		solar: "1440.122",
		stime: 2889064230000,
		gdate: "2061-6-20",
		gregorian: "",
		gtime: 2889064230000
	},
	{
		sdate: "1440-03-31",
		solar: "1440.123",
		stime: 2889150630000,
		gdate: "2061-6-21",
		gregorian: "",
		gtime: 2889150630000
	},
	{
		sdate: "1440-04-01",
		solar: "1440.124",
		stime: 2889237030000,
		gdate: "2061-6-22",
		gregorian: "",
		gtime: 2889237030000
	},
	{
		sdate: "1440-04-02",
		solar: "1440.125",
		stime: 2889323430000,
		gdate: "2061-6-23",
		gregorian: "",
		gtime: 2889323430000
	},
	{
		sdate: "1440-04-30",
		solar: "1440.153",
		stime: 2891742630000,
		gdate: "2061-7-20",
		gregorian: "",
		gtime: 2891742630000
	},
	{
		sdate: "1440-04-31",
		solar: "1440.154",
		stime: 2891829030000,
		gdate: "2061-7-21",
		gregorian: "",
		gtime: 2891829030000
	},
	{
		sdate: "1440-05-01",
		solar: "1440.155",
		stime: 2891915430000,
		gdate: "2061-7-22",
		gregorian: "",
		gtime: 2891915430000
	},
	{
		sdate: "1440-05-02",
		solar: "1440.156",
		stime: 2892001830000,
		gdate: "2061-7-23",
		gregorian: "",
		gtime: 2892001830000
	},
	{
		sdate: "1440-05-29",
		solar: "1440.183",
		stime: 2894334630000,
		gdate: "2061-8-19",
		gregorian: "",
		gtime: 2894334630000
	},
	{
		sdate: "1440-05-30",
		solar: "1440.184",
		stime: 2894421030000,
		gdate: "2061-8-20",
		gregorian: "",
		gtime: 2894421030000
	},
	{
		sdate: "1440-06-01",
		solar: "1440.186",
		stime: 2894597430000,
		gdate: "2061-8-22",
		gregorian: "",
		gtime: 2894597430000
	},
	{
		sdate: "1440-06-02",
		solar: "1440.187",
		stime: 2894683830000,
		gdate: "2061-8-23",
		gregorian: "",
		gtime: 2894683830000
	},
	{
		sdate: "1440-06-29",
		solar: "1440.214",
		stime: 2897016630000,
		gdate: "2061-9-20",
		gregorian: "",
		gtime: 2897016630000
	},
	{
		sdate: "1440-06-30",
		solar: "1440.215",
		stime: 2897103030000,
		gdate: "2061-9-21",
		gregorian: "",
		gtime: 2897103030000
	},
	{
		sdate: "1440-07-01",
		solar: "1440.216",
		stime: 2897189430000,
		gdate: "2061-9-22",
		gregorian: "",
		gtime: 2897189430000
	},
	{
		sdate: "1440-07-02",
		solar: "1440.217",
		stime: 2897275830000,
		gdate: "2061-9-23",
		gregorian: "",
		gtime: 2897275830000
	},
	{
		sdate: "1440-07-29",
		solar: "1440.244",
		stime: 2899608630000,
		gdate: "2061-10-19",
		gregorian: "",
		gtime: 2899608630000
	},
	{
		sdate: "1440-07-30",
		solar: "1440.245",
		stime: 2899695030000,
		gdate: "2061-10-20",
		gregorian: "",
		gtime: 2899695030000
	},
	{
		sdate: "1440-08-01",
		solar: "1440.246",
		stime: 2899781430000,
		gdate: "2061-10-21",
		gregorian: "",
		gtime: 2899781430000
	},
	{
		sdate: "1440-08-02",
		solar: "1440.247",
		stime: 2899867830000,
		gdate: "2061-10-22",
		gregorian: "",
		gtime: 2899867830000
	},
	{
		sdate: "1440-08-29",
		solar: "1440.274",
		stime: 2902200630000,
		gdate: "2061-11-19",
		gregorian: "",
		gtime: 2902200630000
	},
	{
		sdate: "1440-08-30",
		solar: "1440.275",
		stime: 2902287030000,
		gdate: "2061-11-20",
		gregorian: "",
		gtime: 2902287030000
	},
	{
		sdate: "1440-09-01",
		solar: "1440.276",
		stime: 2902373430000,
		gdate: "2061-11-21",
		gregorian: "",
		gtime: 2902373430000
	},
	{
		sdate: "1440-09-02",
		solar: "1440.277",
		stime: 2902459830000,
		gdate: "2061-11-22",
		gregorian: "",
		gtime: 2902459830000
	},
	{
		sdate: "1440-09-29",
		solar: "1440.304",
		stime: 2904792630000,
		gdate: "2062-0-18",
		gregorian: "",
		gtime: 2904792630000
	},
	{
		sdate: "1440-09-30",
		solar: "1440.305",
		stime: 2904879030000,
		gdate: "2062-0-19",
		gregorian: "",
		gtime: 2904879030000
	},
	{
		sdate: "1440-10-01",
		solar: "1440.306",
		stime: 2904965430000,
		gdate: "2062-0-20",
		gregorian: "",
		gtime: 2904965430000
	},
	{
		sdate: "1440-10-02",
		solar: "1440.307",
		stime: 2905051830000,
		gdate: "2062-0-21",
		gregorian: "",
		gtime: 2905051830000
	},
	{
		sdate: "1440-10-26",
		solar: "1440.331",
		stime: 2907125430000,
		gdate: "2062-1-14",
		gregorian: "",
		gtime: 2907125430000
	},
	{
		sdate: "1440-10-27",
		solar: "1440.332",
		stime: 2907211830000,
		gdate: "2062-1-15",
		gregorian: "",
		gtime: 2907211830000
	},
	{
		sdate: "1440-10-28",
		solar: "1440.333",
		stime: 2907298230000,
		gdate: "2062-1-16",
		gregorian: "",
		gtime: 2907298230000
	},
	{
		sdate: "1440-10-29",
		solar: "1440.334",
		stime: 2907384630000,
		gdate: "2062-1-17",
		gregorian: "",
		gtime: 2907384630000
	},
	{
		sdate: "1440-10-30",
		solar: "1440.335",
		stime: 2907471030000,
		gdate: "2062-1-18",
		gregorian: "",
		gtime: 2907471030000
	},
	{
		sdate: "1440-11-01",
		solar: "1440.336",
		stime: 2907557430000,
		gdate: "2062-1-19",
		gregorian: "",
		gtime: 2907557430000
	},
	{
		sdate: "1440-11-02",
		solar: "1440.337",
		stime: 2907643830000,
		gdate: "2062-1-20",
		gregorian: "",
		gtime: 2907643830000
	},
	{
		sdate: "1440-11-03",
		solar: "1440.338",
		stime: 2907730230000,
		gdate: "2062-1-21",
		gregorian: "",
		gtime: 2907730230000
	},
	{
		sdate: "1440-11-04",
		solar: "1440.339",
		stime: 2907816630000,
		gdate: "2062-1-22",
		gregorian: "",
		gtime: 2907816630000
	},
	{
		sdate: "1440-11-05",
		solar: "1440.340",
		stime: 2907903030000,
		gdate: "2062-1-23",
		gregorian: "",
		gtime: 2907903030000
	},
	{
		sdate: "1441-00-01",
		solar: "1441.0",
		stime: 2910063030000,
		gdate: "2062-2-20",
		gregorian: "",
		gtime: 2910063030000
	},
	{
		sdate: "1441-00-02",
		solar: "1441.1",
		stime: 2910145830000,
		gdate: "2062-2-21",
		gregorian: "",
		gtime: 2910145830000
	},
	{
		sdate: "1460-00-01",
		solar: "1460.0",
		stime: 3509679030000,
		gdate: "2081-2-20",
		gregorian: "",
		gtime: 3509679030000
	},
	{
		sdate: "1460-00-02",
		solar: "1460.1",
		stime: 3509761830000,
		gdate: "2081-2-21",
		gregorian: "",
		gtime: 3509761830000
	},
	{
		sdate: "1460-00-30",
		solar: "1460.29",
		stime: 3512181030000,
		gdate: "2081-3-18",
		gregorian: "",
		gtime: 3512181030000
	},
	{
		sdate: "1460-00-31",
		solar: "1460.30",
		stime: 3512267430000,
		gdate: "2081-3-19",
		gregorian: "",
		gtime: 3512267430000
	},
	{
		sdate: "1460-01-01",
		solar: "1460.31",
		stime: 3512353830000,
		gdate: "2081-3-20",
		gregorian: "",
		gtime: 3512353830000
	},
	{
		sdate: "1460-01-02",
		solar: "1460.32",
		stime: 3512440230000,
		gdate: "2081-3-21",
		gregorian: "",
		gtime: 3512440230000
	},
	{
		sdate: "1460-01-30",
		solar: "1460.60",
		stime: 3514859430000,
		gdate: "2081-4-19",
		gregorian: "",
		gtime: 3514859430000
	},
	{
		sdate: "1460-01-31",
		solar: "1460.61",
		stime: 3514945830000,
		gdate: "2081-4-20",
		gregorian: "",
		gtime: 3514945830000
	},
	{
		sdate: "1460-02-01",
		solar: "1460.62",
		stime: 3515032230000,
		gdate: "2081-4-21",
		gregorian: "",
		gtime: 3515032230000
	},
	{
		sdate: "1460-02-02",
		solar: "1460.63",
		stime: 3515118630000,
		gdate: "2081-4-22",
		gregorian: "",
		gtime: 3515118630000
	},
	{
		sdate: "1460-02-30",
		solar: "1460.91",
		stime: 3517537830000,
		gdate: "2081-5-19",
		gregorian: "",
		gtime: 3517537830000
	},
	{
		sdate: "1460-02-31",
		solar: "1460.92",
		stime: 3517624230000,
		gdate: "2081-5-20",
		gregorian: "",
		gtime: 3517624230000
	},
	{
		sdate: "1460-03-01",
		solar: "1460.93",
		stime: 3517710630000,
		gdate: "2081-5-21",
		gregorian: "",
		gtime: 3517710630000
	},
	{
		sdate: "1460-03-02",
		solar: "1460.94",
		stime: 3517797030000,
		gdate: "2081-5-22",
		gregorian: "",
		gtime: 3517797030000
	},
	{
		sdate: "1460-03-30",
		solar: "1460.122",
		stime: 3520216230000,
		gdate: "2081-6-20",
		gregorian: "",
		gtime: 3520216230000
	},
	{
		sdate: "1460-03-31",
		solar: "1460.123",
		stime: 3520302630000,
		gdate: "2081-6-21",
		gregorian: "",
		gtime: 3520302630000
	},
	{
		sdate: "1460-04-01",
		solar: "1460.124",
		stime: 3520389030000,
		gdate: "2081-6-22",
		gregorian: "",
		gtime: 3520389030000
	},
	{
		sdate: "1460-04-02",
		solar: "1460.125",
		stime: 3520475430000,
		gdate: "2081-6-23",
		gregorian: "",
		gtime: 3520475430000
	},
	{
		sdate: "1460-04-30",
		solar: "1460.153",
		stime: 3522894630000,
		gdate: "2081-7-20",
		gregorian: "",
		gtime: 3522894630000
	},
	{
		sdate: "1460-04-31",
		solar: "1460.154",
		stime: 3522981030000,
		gdate: "2081-7-21",
		gregorian: "",
		gtime: 3522981030000
	},
	{
		sdate: "1460-05-01",
		solar: "1460.155",
		stime: 3523067430000,
		gdate: "2081-7-22",
		gregorian: "",
		gtime: 3523067430000
	},
	{
		sdate: "1460-05-02",
		solar: "1460.156",
		stime: 3523153830000,
		gdate: "2081-7-23",
		gregorian: "",
		gtime: 3523153830000
	},
	{
		sdate: "1460-05-29",
		solar: "1460.183",
		stime: 3525486630000,
		gdate: "2081-8-19",
		gregorian: "",
		gtime: 3525486630000
	},
	{
		sdate: "1460-05-30",
		solar: "1460.184",
		stime: 3525573030000,
		gdate: "2081-8-20",
		gregorian: "",
		gtime: 3525573030000
	},
	{
		sdate: "1460-06-01",
		solar: "1460.186",
		stime: 3525749430000,
		gdate: "2081-8-22",
		gregorian: "",
		gtime: 3525749430000
	},
	{
		sdate: "1460-06-02",
		solar: "1460.187",
		stime: 3525835830000,
		gdate: "2081-8-23",
		gregorian: "",
		gtime: 3525835830000
	},
	{
		sdate: "1460-06-29",
		solar: "1460.214",
		stime: 3528168630000,
		gdate: "2081-9-20",
		gregorian: "",
		gtime: 3528168630000
	},
	{
		sdate: "1460-06-30",
		solar: "1460.215",
		stime: 3528255030000,
		gdate: "2081-9-21",
		gregorian: "",
		gtime: 3528255030000
	},
	{
		sdate: "1460-07-01",
		solar: "1460.216",
		stime: 3528341430000,
		gdate: "2081-9-22",
		gregorian: "",
		gtime: 3528341430000
	},
	{
		sdate: "1460-07-02",
		solar: "1460.217",
		stime: 3528427830000,
		gdate: "2081-9-23",
		gregorian: "",
		gtime: 3528427830000
	},
	{
		sdate: "1460-07-29",
		solar: "1460.244",
		stime: 3530760630000,
		gdate: "2081-10-19",
		gregorian: "",
		gtime: 3530760630000
	},
	{
		sdate: "1460-07-30",
		solar: "1460.245",
		stime: 3530847030000,
		gdate: "2081-10-20",
		gregorian: "",
		gtime: 3530847030000
	},
	{
		sdate: "1460-08-01",
		solar: "1460.246",
		stime: 3530933430000,
		gdate: "2081-10-21",
		gregorian: "",
		gtime: 3530933430000
	},
	{
		sdate: "1460-08-02",
		solar: "1460.247",
		stime: 3531019830000,
		gdate: "2081-10-22",
		gregorian: "",
		gtime: 3531019830000
	},
	{
		sdate: "1460-08-29",
		solar: "1460.274",
		stime: 3533352630000,
		gdate: "2081-11-19",
		gregorian: "",
		gtime: 3533352630000
	},
	{
		sdate: "1460-08-30",
		solar: "1460.275",
		stime: 3533439030000,
		gdate: "2081-11-20",
		gregorian: "",
		gtime: 3533439030000
	},
	{
		sdate: "1460-09-01",
		solar: "1460.276",
		stime: 3533525430000,
		gdate: "2081-11-21",
		gregorian: "",
		gtime: 3533525430000
	},
	{
		sdate: "1460-09-02",
		solar: "1460.277",
		stime: 3533611830000,
		gdate: "2081-11-22",
		gregorian: "",
		gtime: 3533611830000
	},
	{
		sdate: "1460-09-29",
		solar: "1460.304",
		stime: 3535944630000,
		gdate: "2082-0-18",
		gregorian: "",
		gtime: 3535944630000
	},
	{
		sdate: "1460-09-30",
		solar: "1460.305",
		stime: 3536031030000,
		gdate: "2082-0-19",
		gregorian: "",
		gtime: 3536031030000
	},
	{
		sdate: "1460-10-01",
		solar: "1460.306",
		stime: 3536117430000,
		gdate: "2082-0-20",
		gregorian: "",
		gtime: 3536117430000
	},
	{
		sdate: "1460-10-02",
		solar: "1460.307",
		stime: 3536203830000,
		gdate: "2082-0-21",
		gregorian: "",
		gtime: 3536203830000
	},
	{
		sdate: "1460-10-26",
		solar: "1460.331",
		stime: 3538277430000,
		gdate: "2082-1-14",
		gregorian: "",
		gtime: 3538277430000
	},
	{
		sdate: "1460-10-27",
		solar: "1460.332",
		stime: 3538363830000,
		gdate: "2082-1-15",
		gregorian: "",
		gtime: 3538363830000
	},
	{
		sdate: "1460-10-28",
		solar: "1460.333",
		stime: 3538450230000,
		gdate: "2082-1-16",
		gregorian: "",
		gtime: 3538450230000
	},
	{
		sdate: "1460-10-29",
		solar: "1460.334",
		stime: 3538536630000,
		gdate: "2082-1-17",
		gregorian: "",
		gtime: 3538536630000
	},
	{
		sdate: "1460-10-30",
		solar: "1460.335",
		stime: 3538623030000,
		gdate: "2082-1-18",
		gregorian: "",
		gtime: 3538623030000
	},
	{
		sdate: "1460-11-01",
		solar: "1460.336",
		stime: 3538709430000,
		gdate: "2082-1-19",
		gregorian: "",
		gtime: 3538709430000
	},
	{
		sdate: "1460-11-02",
		solar: "1460.337",
		stime: 3538795830000,
		gdate: "2082-1-20",
		gregorian: "",
		gtime: 3538795830000
	},
	{
		sdate: "1460-11-03",
		solar: "1460.338",
		stime: 3538882230000,
		gdate: "2082-1-21",
		gregorian: "",
		gtime: 3538882230000
	},
	{
		sdate: "1460-11-04",
		solar: "1460.339",
		stime: 3538968630000,
		gdate: "2082-1-22",
		gregorian: "",
		gtime: 3538968630000
	},
	{
		sdate: "1460-11-05",
		solar: "1460.340",
		stime: 3539055030000,
		gdate: "2082-1-23",
		gregorian: "",
		gtime: 3539055030000
	},
	{
		sdate: "1461-00-01",
		solar: "1461.0",
		stime: 3541215030000,
		gdate: "2082-2-20",
		gregorian: "",
		gtime: 3541215030000
	},
	{
		sdate: "1461-00-02",
		solar: "1461.1",
		stime: 3541297830000,
		gdate: "2082-2-21",
		gregorian: "",
		gtime: 3541297830000
	},
	{
		sdate: "1480-00-01",
		solar: "1480.0",
		stime: 4140827430000,
		gdate: "2101-2-21",
		gregorian: "",
		gtime: 4140827430000
	},
	{
		sdate: "1480-00-02",
		solar: "1480.1",
		stime: 4140913830000,
		gdate: "2101-2-22",
		gregorian: "",
		gtime: 4140913830000
	},
	{
		sdate: "1480-00-30",
		solar: "1480.29",
		stime: 4143333030000,
		gdate: "2101-3-19",
		gregorian: "",
		gtime: 4143333030000
	},
	{
		sdate: "1480-00-31",
		solar: "1480.30",
		stime: 4143419430000,
		gdate: "2101-3-20",
		gregorian: "",
		gtime: 4143419430000
	},
	{
		sdate: "1480-01-01",
		solar: "1480.31",
		stime: 4143505830000,
		gdate: "2101-3-21",
		gregorian: "",
		gtime: 4143505830000
	},
	{
		sdate: "1480-01-02",
		solar: "1480.32",
		stime: 4143592230000,
		gdate: "2101-3-22",
		gregorian: "",
		gtime: 4143592230000
	},
	{
		sdate: "1480-01-30",
		solar: "1480.60",
		stime: 4146011430000,
		gdate: "2101-4-20",
		gregorian: "",
		gtime: 4146011430000
	},
	{
		sdate: "1480-01-31",
		solar: "1480.61",
		stime: 4146097830000,
		gdate: "2101-4-21",
		gregorian: "",
		gtime: 4146097830000
	},
	{
		sdate: "1480-02-01",
		solar: "1480.62",
		stime: 4146184230000,
		gdate: "2101-4-22",
		gregorian: "",
		gtime: 4146184230000
	},
	{
		sdate: "1480-02-02",
		solar: "1480.63",
		stime: 4146270630000,
		gdate: "2101-4-23",
		gregorian: "",
		gtime: 4146270630000
	},
	{
		sdate: "1480-02-30",
		solar: "1480.91",
		stime: 4148689830000,
		gdate: "2101-5-20",
		gregorian: "",
		gtime: 4148689830000
	},
	{
		sdate: "1480-02-31",
		solar: "1480.92",
		stime: 4148776230000,
		gdate: "2101-5-21",
		gregorian: "",
		gtime: 4148776230000
	},
	{
		sdate: "1480-03-01",
		solar: "1480.93",
		stime: 4148862630000,
		gdate: "2101-5-22",
		gregorian: "",
		gtime: 4148862630000
	},
	{
		sdate: "1480-03-02",
		solar: "1480.94",
		stime: 4148949030000,
		gdate: "2101-5-23",
		gregorian: "",
		gtime: 4148949030000
	},
	{
		sdate: "1480-03-30",
		solar: "1480.122",
		stime: 4151368230000,
		gdate: "2101-6-21",
		gregorian: "",
		gtime: 4151368230000
	},
	{
		sdate: "1480-03-31",
		solar: "1480.123",
		stime: 4151454630000,
		gdate: "2101-6-22",
		gregorian: "",
		gtime: 4151454630000
	},
	{
		sdate: "1480-04-01",
		solar: "1480.124",
		stime: 4151541030000,
		gdate: "2101-6-23",
		gregorian: "",
		gtime: 4151541030000
	},
	{
		sdate: "1480-04-02",
		solar: "1480.125",
		stime: 4151627430000,
		gdate: "2101-6-24",
		gregorian: "",
		gtime: 4151627430000
	},
	{
		sdate: "1480-04-30",
		solar: "1480.153",
		stime: 4154046630000,
		gdate: "2101-7-21",
		gregorian: "",
		gtime: 4154046630000
	},
	{
		sdate: "1480-04-31",
		solar: "1480.154",
		stime: 4154133030000,
		gdate: "2101-7-22",
		gregorian: "",
		gtime: 4154133030000
	},
	{
		sdate: "1480-05-01",
		solar: "1480.155",
		stime: 4154219430000,
		gdate: "2101-7-23",
		gregorian: "",
		gtime: 4154219430000
	},
	{
		sdate: "1480-05-02",
		solar: "1480.156",
		stime: 4154305830000,
		gdate: "2101-7-24",
		gregorian: "",
		gtime: 4154305830000
	},
	{
		sdate: "1480-05-29",
		solar: "1480.183",
		stime: 4156638630000,
		gdate: "2101-8-20",
		gregorian: "",
		gtime: 4156638630000
	},
	{
		sdate: "1480-05-30",
		solar: "1480.184",
		stime: 4156728630000,
		gdate: "2101-8-21",
		gregorian: "",
		gtime: 4156728630000
	},
	{
		sdate: "1480-06-01",
		solar: "1480.186",
		stime: 4156901430000,
		gdate: "2101-8-23",
		gregorian: "",
		gtime: 4156901430000
	},
	{
		sdate: "1480-06-02",
		solar: "1480.187",
		stime: 4156987830000,
		gdate: "2101-8-24",
		gregorian: "",
		gtime: 4156987830000
	},
	{
		sdate: "1480-06-29",
		solar: "1480.214",
		stime: 4159320630000,
		gdate: "2101-9-21",
		gregorian: "",
		gtime: 4159320630000
	},
	{
		sdate: "1480-06-30",
		solar: "1480.215",
		stime: 4159407030000,
		gdate: "2101-9-22",
		gregorian: "",
		gtime: 4159407030000
	},
	{
		sdate: "1480-07-01",
		solar: "1480.216",
		stime: 4159493430000,
		gdate: "2101-9-23",
		gregorian: "",
		gtime: 4159493430000
	},
	{
		sdate: "1480-07-02",
		solar: "1480.217",
		stime: 4159579830000,
		gdate: "2101-9-24",
		gregorian: "",
		gtime: 4159579830000
	},
	{
		sdate: "1480-07-29",
		solar: "1480.244",
		stime: 4161912630000,
		gdate: "2101-10-20",
		gregorian: "",
		gtime: 4161912630000
	},
	{
		sdate: "1480-07-30",
		solar: "1480.245",
		stime: 4161999030000,
		gdate: "2101-10-21",
		gregorian: "",
		gtime: 4161999030000
	},
	{
		sdate: "1480-08-01",
		solar: "1480.246",
		stime: 4162085430000,
		gdate: "2101-10-22",
		gregorian: "",
		gtime: 4162085430000
	},
	{
		sdate: "1480-08-02",
		solar: "1480.247",
		stime: 4162171830000,
		gdate: "2101-10-23",
		gregorian: "",
		gtime: 4162171830000
	},
	{
		sdate: "1480-08-29",
		solar: "1480.274",
		stime: 4164504630000,
		gdate: "2101-11-20",
		gregorian: "",
		gtime: 4164504630000
	},
	{
		sdate: "1480-08-30",
		solar: "1480.275",
		stime: 4164591030000,
		gdate: "2101-11-21",
		gregorian: "",
		gtime: 4164591030000
	},
	{
		sdate: "1480-09-01",
		solar: "1480.276",
		stime: 4164677430000,
		gdate: "2101-11-22",
		gregorian: "",
		gtime: 4164677430000
	},
	{
		sdate: "1480-09-02",
		solar: "1480.277",
		stime: 4164763830000,
		gdate: "2101-11-23",
		gregorian: "",
		gtime: 4164763830000
	},
	{
		sdate: "1480-09-29",
		solar: "1480.304",
		stime: 4167096630000,
		gdate: "2102-0-19",
		gregorian: "",
		gtime: 4167096630000
	},
	{
		sdate: "1480-09-30",
		solar: "1480.305",
		stime: 4167183030000,
		gdate: "2102-0-20",
		gregorian: "",
		gtime: 4167183030000
	},
	{
		sdate: "1480-10-01",
		solar: "1480.306",
		stime: 4167269430000,
		gdate: "2102-0-21",
		gregorian: "",
		gtime: 4167269430000
	},
	{
		sdate: "1480-10-02",
		solar: "1480.307",
		stime: 4167355830000,
		gdate: "2102-0-22",
		gregorian: "",
		gtime: 4167355830000
	},
	{
		sdate: "1480-10-26",
		solar: "1480.331",
		stime: 4169429430000,
		gdate: "2102-1-15",
		gregorian: "",
		gtime: 4169429430000
	},
	{
		sdate: "1480-10-27",
		solar: "1480.332",
		stime: 4169515830000,
		gdate: "2102-1-16",
		gregorian: "",
		gtime: 4169515830000
	},
	{
		sdate: "1480-10-28",
		solar: "1480.333",
		stime: 4169602230000,
		gdate: "2102-1-17",
		gregorian: "",
		gtime: 4169602230000
	},
	{
		sdate: "1480-10-29",
		solar: "1480.334",
		stime: 4169688630000,
		gdate: "2102-1-18",
		gregorian: "",
		gtime: 4169688630000
	},
	{
		sdate: "1480-10-30",
		solar: "1480.335",
		stime: 4169775030000,
		gdate: "2102-1-19",
		gregorian: "",
		gtime: 4169775030000
	},
	{
		sdate: "1480-11-01",
		solar: "1480.336",
		stime: 4169861430000,
		gdate: "2102-1-20",
		gregorian: "",
		gtime: 4169861430000
	},
	{
		sdate: "1480-11-02",
		solar: "1480.337",
		stime: 4169947830000,
		gdate: "2102-1-21",
		gregorian: "",
		gtime: 4169947830000
	},
	{
		sdate: "1480-11-03",
		solar: "1480.338",
		stime: 4170034230000,
		gdate: "2102-1-22",
		gregorian: "",
		gtime: 4170034230000
	},
	{
		sdate: "1480-11-04",
		solar: "1480.339",
		stime: 4170120630000,
		gdate: "2102-1-23",
		gregorian: "",
		gtime: 4170120630000
	},
	{
		sdate: "1480-11-05",
		solar: "1480.340",
		stime: 4170207030000,
		gdate: "2102-1-24",
		gregorian: "",
		gtime: 4170207030000
	},
	{
		sdate: "1481-00-01",
		solar: "1481.0",
		stime: 4172363430000,
		gdate: "2102-2-21",
		gregorian: "",
		gtime: 4172363430000
	},
	{
		sdate: "1481-00-02",
		solar: "1481.1",
		stime: 4172449830000,
		gdate: "2102-2-22",
		gregorian: "",
		gtime: 4172449830000
	},
	{
		sdate: "1500-00-01",
		solar: "1500.0",
		stime: 4771979430000,
		gdate: "2121-2-21",
		gregorian: "",
		gtime: 4771979430000
	},
	{
		sdate: "1500-00-02",
		solar: "1500.1",
		stime: 4772065830000,
		gdate: "2121-2-22",
		gregorian: "",
		gtime: 4772065830000
	},
	{
		sdate: "1500-00-30",
		solar: "1500.29",
		stime: 4774485030000,
		gdate: "2121-3-19",
		gregorian: "",
		gtime: 4774485030000
	},
	{
		sdate: "1500-00-31",
		solar: "1500.30",
		stime: 4774571430000,
		gdate: "2121-3-20",
		gregorian: "",
		gtime: 4774571430000
	},
	{
		sdate: "1500-01-01",
		solar: "1500.31",
		stime: 4774657830000,
		gdate: "2121-3-21",
		gregorian: "",
		gtime: 4774657830000
	},
	{
		sdate: "1500-01-02",
		solar: "1500.32",
		stime: 4774744230000,
		gdate: "2121-3-22",
		gregorian: "",
		gtime: 4774744230000
	},
	{
		sdate: "1500-01-30",
		solar: "1500.60",
		stime: 4777163430000,
		gdate: "2121-4-20",
		gregorian: "",
		gtime: 4777163430000
	},
	{
		sdate: "1500-01-31",
		solar: "1500.61",
		stime: 4777249830000,
		gdate: "2121-4-21",
		gregorian: "",
		gtime: 4777249830000
	},
	{
		sdate: "1500-02-01",
		solar: "1500.62",
		stime: 4777336230000,
		gdate: "2121-4-22",
		gregorian: "",
		gtime: 4777336230000
	},
	{
		sdate: "1500-02-02",
		solar: "1500.63",
		stime: 4777422630000,
		gdate: "2121-4-23",
		gregorian: "",
		gtime: 4777422630000
	},
	{
		sdate: "1500-02-30",
		solar: "1500.91",
		stime: 4779841830000,
		gdate: "2121-5-20",
		gregorian: "",
		gtime: 4779841830000
	},
	{
		sdate: "1500-02-31",
		solar: "1500.92",
		stime: 4779928230000,
		gdate: "2121-5-21",
		gregorian: "",
		gtime: 4779928230000
	},
	{
		sdate: "1500-03-01",
		solar: "1500.93",
		stime: 4780014630000,
		gdate: "2121-5-22",
		gregorian: "",
		gtime: 4780014630000
	},
	{
		sdate: "1500-03-02",
		solar: "1500.94",
		stime: 4780101030000,
		gdate: "2121-5-23",
		gregorian: "",
		gtime: 4780101030000
	},
	{
		sdate: "1500-03-30",
		solar: "1500.122",
		stime: 4782520230000,
		gdate: "2121-6-21",
		gregorian: "",
		gtime: 4782520230000
	},
	{
		sdate: "1500-03-31",
		solar: "1500.123",
		stime: 4782606630000,
		gdate: "2121-6-22",
		gregorian: "",
		gtime: 4782606630000
	},
	{
		sdate: "1500-04-01",
		solar: "1500.124",
		stime: 4782693030000,
		gdate: "2121-6-23",
		gregorian: "",
		gtime: 4782693030000
	},
	{
		sdate: "1500-04-02",
		solar: "1500.125",
		stime: 4782779430000,
		gdate: "2121-6-24",
		gregorian: "",
		gtime: 4782779430000
	},
	{
		sdate: "1500-04-30",
		solar: "1500.153",
		stime: 4785198630000,
		gdate: "2121-7-21",
		gregorian: "",
		gtime: 4785198630000
	},
	{
		sdate: "1500-04-31",
		solar: "1500.154",
		stime: 4785285030000,
		gdate: "2121-7-22",
		gregorian: "",
		gtime: 4785285030000
	},
	{
		sdate: "1500-05-01",
		solar: "1500.155",
		stime: 4785371430000,
		gdate: "2121-7-23",
		gregorian: "",
		gtime: 4785371430000
	},
	{
		sdate: "1500-05-02",
		solar: "1500.156",
		stime: 4785457830000,
		gdate: "2121-7-24",
		gregorian: "",
		gtime: 4785457830000
	},
	{
		sdate: "1500-05-29",
		solar: "1500.183",
		stime: 4787790630000,
		gdate: "2121-8-20",
		gregorian: "",
		gtime: 4787790630000
	},
	{
		sdate: "1500-05-30",
		solar: "1500.184",
		stime: 4787880630000,
		gdate: "2121-8-21",
		gregorian: "",
		gtime: 4787880630000
	},
	{
		sdate: "1500-06-01",
		solar: "1500.186",
		stime: 4788053430000,
		gdate: "2121-8-23",
		gregorian: "",
		gtime: 4788053430000
	},
	{
		sdate: "1500-06-02",
		solar: "1500.187",
		stime: 4788139830000,
		gdate: "2121-8-24",
		gregorian: "",
		gtime: 4788139830000
	},
	{
		sdate: "1500-06-29",
		solar: "1500.214",
		stime: 4790472630000,
		gdate: "2121-9-21",
		gregorian: "",
		gtime: 4790472630000
	},
	{
		sdate: "1500-06-30",
		solar: "1500.215",
		stime: 4790559030000,
		gdate: "2121-9-22",
		gregorian: "",
		gtime: 4790559030000
	},
	{
		sdate: "1500-07-01",
		solar: "1500.216",
		stime: 4790645430000,
		gdate: "2121-9-23",
		gregorian: "",
		gtime: 4790645430000
	},
	{
		sdate: "1500-07-02",
		solar: "1500.217",
		stime: 4790731830000,
		gdate: "2121-9-24",
		gregorian: "",
		gtime: 4790731830000
	},
	{
		sdate: "1500-07-29",
		solar: "1500.244",
		stime: 4793064630000,
		gdate: "2121-10-20",
		gregorian: "",
		gtime: 4793064630000
	},
	{
		sdate: "1500-07-30",
		solar: "1500.245",
		stime: 4793151030000,
		gdate: "2121-10-21",
		gregorian: "",
		gtime: 4793151030000
	},
	{
		sdate: "1500-08-01",
		solar: "1500.246",
		stime: 4793237430000,
		gdate: "2121-10-22",
		gregorian: "",
		gtime: 4793237430000
	},
	{
		sdate: "1500-08-02",
		solar: "1500.247",
		stime: 4793323830000,
		gdate: "2121-10-23",
		gregorian: "",
		gtime: 4793323830000
	},
	{
		sdate: "1500-08-29",
		solar: "1500.274",
		stime: 4795656630000,
		gdate: "2121-11-20",
		gregorian: "",
		gtime: 4795656630000
	},
	{
		sdate: "1500-08-30",
		solar: "1500.275",
		stime: 4795743030000,
		gdate: "2121-11-21",
		gregorian: "",
		gtime: 4795743030000
	},
	{
		sdate: "1500-09-01",
		solar: "1500.276",
		stime: 4795829430000,
		gdate: "2121-11-22",
		gregorian: "",
		gtime: 4795829430000
	},
	{
		sdate: "1500-09-02",
		solar: "1500.277",
		stime: 4795915830000,
		gdate: "2121-11-23",
		gregorian: "",
		gtime: 4795915830000
	},
	{
		sdate: "1500-09-29",
		solar: "1500.304",
		stime: 4798248630000,
		gdate: "2122-0-19",
		gregorian: "",
		gtime: 4798248630000
	},
	{
		sdate: "1500-09-30",
		solar: "1500.305",
		stime: 4798335030000,
		gdate: "2122-0-20",
		gregorian: "",
		gtime: 4798335030000
	},
	{
		sdate: "1500-10-01",
		solar: "1500.306",
		stime: 4798421430000,
		gdate: "2122-0-21",
		gregorian: "",
		gtime: 4798421430000
	},
	{
		sdate: "1500-10-02",
		solar: "1500.307",
		stime: 4798507830000,
		gdate: "2122-0-22",
		gregorian: "",
		gtime: 4798507830000
	},
	{
		sdate: "1500-10-26",
		solar: "1500.331",
		stime: 4800581430000,
		gdate: "2122-1-15",
		gregorian: "",
		gtime: 4800581430000
	},
	{
		sdate: "1500-10-27",
		solar: "1500.332",
		stime: 4800667830000,
		gdate: "2122-1-16",
		gregorian: "",
		gtime: 4800667830000
	},
	{
		sdate: "1500-10-28",
		solar: "1500.333",
		stime: 4800754230000,
		gdate: "2122-1-17",
		gregorian: "",
		gtime: 4800754230000
	},
	{
		sdate: "1500-10-29",
		solar: "1500.334",
		stime: 4800840630000,
		gdate: "2122-1-18",
		gregorian: "",
		gtime: 4800840630000
	},
	{
		sdate: "1500-10-30",
		solar: "1500.335",
		stime: 4800927030000,
		gdate: "2122-1-19",
		gregorian: "",
		gtime: 4800927030000
	},
	{
		sdate: "1500-11-01",
		solar: "1500.336",
		stime: 4801013430000,
		gdate: "2122-1-20",
		gregorian: "",
		gtime: 4801013430000
	},
	{
		sdate: "1500-11-02",
		solar: "1500.337",
		stime: 4801099830000,
		gdate: "2122-1-21",
		gregorian: "",
		gtime: 4801099830000
	},
	{
		sdate: "1500-11-03",
		solar: "1500.338",
		stime: 4801186230000,
		gdate: "2122-1-22",
		gregorian: "",
		gtime: 4801186230000
	},
	{
		sdate: "1500-11-04",
		solar: "1500.339",
		stime: 4801272630000,
		gdate: "2122-1-23",
		gregorian: "",
		gtime: 4801272630000
	},
	{
		sdate: "1500-11-05",
		solar: "1500.340",
		stime: 4801359030000,
		gdate: "2122-1-24",
		gregorian: "",
		gtime: 4801359030000
	},
	{
		sdate: "1501-00-01",
		solar: "1501.0",
		stime: 4803515430000,
		gdate: "2122-2-21",
		gregorian: "",
		gtime: 4803515430000
	},
	{
		sdate: "1501-00-02",
		solar: "1501.1",
		stime: 4803601830000,
		gdate: "2122-2-22",
		gregorian: "",
		gtime: 4803601830000
	},
	{
		sdate: "1520-00-01",
		solar: "1520.0",
		stime: 5403131430000,
		gdate: "2141-2-21",
		gregorian: "",
		gtime: 5403131430000
	},
	{
		sdate: "1520-00-02",
		solar: "1520.1",
		stime: 5403217830000,
		gdate: "2141-2-22",
		gregorian: "",
		gtime: 5403217830000
	},
	{
		sdate: "1520-00-30",
		solar: "1520.29",
		stime: 5405637030000,
		gdate: "2141-3-19",
		gregorian: "",
		gtime: 5405637030000
	},
	{
		sdate: "1520-00-31",
		solar: "1520.30",
		stime: 5405723430000,
		gdate: "2141-3-20",
		gregorian: "",
		gtime: 5405723430000
	},
	{
		sdate: "1520-01-01",
		solar: "1520.31",
		stime: 5405809830000,
		gdate: "2141-3-21",
		gregorian: "",
		gtime: 5405809830000
	},
	{
		sdate: "1520-01-02",
		solar: "1520.32",
		stime: 5405896230000,
		gdate: "2141-3-22",
		gregorian: "",
		gtime: 5405896230000
	},
	{
		sdate: "1520-01-30",
		solar: "1520.60",
		stime: 5408315430000,
		gdate: "2141-4-20",
		gregorian: "",
		gtime: 5408315430000
	},
	{
		sdate: "1520-01-31",
		solar: "1520.61",
		stime: 5408401830000,
		gdate: "2141-4-21",
		gregorian: "",
		gtime: 5408401830000
	},
	{
		sdate: "1520-02-01",
		solar: "1520.62",
		stime: 5408488230000,
		gdate: "2141-4-22",
		gregorian: "",
		gtime: 5408488230000
	},
	{
		sdate: "1520-02-02",
		solar: "1520.63",
		stime: 5408574630000,
		gdate: "2141-4-23",
		gregorian: "",
		gtime: 5408574630000
	},
	{
		sdate: "1520-02-30",
		solar: "1520.91",
		stime: 5410993830000,
		gdate: "2141-5-20",
		gregorian: "",
		gtime: 5410993830000
	},
	{
		sdate: "1520-02-31",
		solar: "1520.92",
		stime: 5411080230000,
		gdate: "2141-5-21",
		gregorian: "",
		gtime: 5411080230000
	},
	{
		sdate: "1520-03-01",
		solar: "1520.93",
		stime: 5411166630000,
		gdate: "2141-5-22",
		gregorian: "",
		gtime: 5411166630000
	},
	{
		sdate: "1520-03-02",
		solar: "1520.94",
		stime: 5411253030000,
		gdate: "2141-5-23",
		gregorian: "",
		gtime: 5411253030000
	},
	{
		sdate: "1520-03-30",
		solar: "1520.122",
		stime: 5413672230000,
		gdate: "2141-6-21",
		gregorian: "",
		gtime: 5413672230000
	},
	{
		sdate: "1520-03-31",
		solar: "1520.123",
		stime: 5413758630000,
		gdate: "2141-6-22",
		gregorian: "",
		gtime: 5413758630000
	},
	{
		sdate: "1520-04-01",
		solar: "1520.124",
		stime: 5413845030000,
		gdate: "2141-6-23",
		gregorian: "",
		gtime: 5413845030000
	},
	{
		sdate: "1520-04-02",
		solar: "1520.125",
		stime: 5413931430000,
		gdate: "2141-6-24",
		gregorian: "",
		gtime: 5413931430000
	},
	{
		sdate: "1520-04-30",
		solar: "1520.153",
		stime: 5416350630000,
		gdate: "2141-7-21",
		gregorian: "",
		gtime: 5416350630000
	},
	{
		sdate: "1520-04-31",
		solar: "1520.154",
		stime: 5416437030000,
		gdate: "2141-7-22",
		gregorian: "",
		gtime: 5416437030000
	},
	{
		sdate: "1520-05-01",
		solar: "1520.155",
		stime: 5416523430000,
		gdate: "2141-7-23",
		gregorian: "",
		gtime: 5416523430000
	},
	{
		sdate: "1520-05-02",
		solar: "1520.156",
		stime: 5416609830000,
		gdate: "2141-7-24",
		gregorian: "",
		gtime: 5416609830000
	},
	{
		sdate: "1520-05-29",
		solar: "1520.183",
		stime: 5418942630000,
		gdate: "2141-8-20",
		gregorian: "",
		gtime: 5418942630000
	},
	{
		sdate: "1520-05-30",
		solar: "1520.184",
		stime: 5419032630000,
		gdate: "2141-8-21",
		gregorian: "",
		gtime: 5419032630000
	},
	{
		sdate: "1520-06-01",
		solar: "1520.186",
		stime: 5419205430000,
		gdate: "2141-8-23",
		gregorian: "",
		gtime: 5419205430000
	},
	{
		sdate: "1520-06-02",
		solar: "1520.187",
		stime: 5419291830000,
		gdate: "2141-8-24",
		gregorian: "",
		gtime: 5419291830000
	},
	{
		sdate: "1520-06-29",
		solar: "1520.214",
		stime: 5421624630000,
		gdate: "2141-9-21",
		gregorian: "",
		gtime: 5421624630000
	},
	{
		sdate: "1520-06-30",
		solar: "1520.215",
		stime: 5421711030000,
		gdate: "2141-9-22",
		gregorian: "",
		gtime: 5421711030000
	},
	{
		sdate: "1520-07-01",
		solar: "1520.216",
		stime: 5421797430000,
		gdate: "2141-9-23",
		gregorian: "",
		gtime: 5421797430000
	},
	{
		sdate: "1520-07-02",
		solar: "1520.217",
		stime: 5421883830000,
		gdate: "2141-9-24",
		gregorian: "",
		gtime: 5421883830000
	},
	{
		sdate: "1520-07-29",
		solar: "1520.244",
		stime: 5424216630000,
		gdate: "2141-10-20",
		gregorian: "",
		gtime: 5424216630000
	},
	{
		sdate: "1520-07-30",
		solar: "1520.245",
		stime: 5424303030000,
		gdate: "2141-10-21",
		gregorian: "",
		gtime: 5424303030000
	},
	{
		sdate: "1520-08-01",
		solar: "1520.246",
		stime: 5424389430000,
		gdate: "2141-10-22",
		gregorian: "",
		gtime: 5424389430000
	},
	{
		sdate: "1520-08-02",
		solar: "1520.247",
		stime: 5424475830000,
		gdate: "2141-10-23",
		gregorian: "",
		gtime: 5424475830000
	},
	{
		sdate: "1520-08-29",
		solar: "1520.274",
		stime: 5426808630000,
		gdate: "2141-11-20",
		gregorian: "",
		gtime: 5426808630000
	},
	{
		sdate: "1520-08-30",
		solar: "1520.275",
		stime: 5426895030000,
		gdate: "2141-11-21",
		gregorian: "",
		gtime: 5426895030000
	},
	{
		sdate: "1520-09-01",
		solar: "1520.276",
		stime: 5426981430000,
		gdate: "2141-11-22",
		gregorian: "",
		gtime: 5426981430000
	},
	{
		sdate: "1520-09-02",
		solar: "1520.277",
		stime: 5427067830000,
		gdate: "2141-11-23",
		gregorian: "",
		gtime: 5427067830000
	},
	{
		sdate: "1520-09-29",
		solar: "1520.304",
		stime: 5429400630000,
		gdate: "2142-0-19",
		gregorian: "",
		gtime: 5429400630000
	},
	{
		sdate: "1520-09-30",
		solar: "1520.305",
		stime: 5429487030000,
		gdate: "2142-0-20",
		gregorian: "",
		gtime: 5429487030000
	},
	{
		sdate: "1520-10-01",
		solar: "1520.306",
		stime: 5429573430000,
		gdate: "2142-0-21",
		gregorian: "",
		gtime: 5429573430000
	},
	{
		sdate: "1520-10-02",
		solar: "1520.307",
		stime: 5429659830000,
		gdate: "2142-0-22",
		gregorian: "",
		gtime: 5429659830000
	},
	{
		sdate: "1520-10-26",
		solar: "1520.331",
		stime: 5431733430000,
		gdate: "2142-1-15",
		gregorian: "",
		gtime: 5431733430000
	},
	{
		sdate: "1520-10-27",
		solar: "1520.332",
		stime: 5431819830000,
		gdate: "2142-1-16",
		gregorian: "",
		gtime: 5431819830000
	},
	{
		sdate: "1520-10-28",
		solar: "1520.333",
		stime: 5431906230000,
		gdate: "2142-1-17",
		gregorian: "",
		gtime: 5431906230000
	},
	{
		sdate: "1520-10-29",
		solar: "1520.334",
		stime: 5431992630000,
		gdate: "2142-1-18",
		gregorian: "",
		gtime: 5431992630000
	},
	{
		sdate: "1520-10-30",
		solar: "1520.335",
		stime: 5432079030000,
		gdate: "2142-1-19",
		gregorian: "",
		gtime: 5432079030000
	},
	{
		sdate: "1520-11-01",
		solar: "1520.336",
		stime: 5432165430000,
		gdate: "2142-1-20",
		gregorian: "",
		gtime: 5432165430000
	},
	{
		sdate: "1520-11-02",
		solar: "1520.337",
		stime: 5432251830000,
		gdate: "2142-1-21",
		gregorian: "",
		gtime: 5432251830000
	},
	{
		sdate: "1520-11-03",
		solar: "1520.338",
		stime: 5432338230000,
		gdate: "2142-1-22",
		gregorian: "",
		gtime: 5432338230000
	},
	{
		sdate: "1520-11-04",
		solar: "1520.339",
		stime: 5432424630000,
		gdate: "2142-1-23",
		gregorian: "",
		gtime: 5432424630000
	},
	{
		sdate: "1520-11-05",
		solar: "1520.340",
		stime: 5432511030000,
		gdate: "2142-1-24",
		gregorian: "",
		gtime: 5432511030000
	},
	{
		sdate: "1521-00-01",
		solar: "1521.0",
		stime: 5434667430000,
		gdate: "2142-2-21",
		gregorian: "",
		gtime: 5434667430000
	},
	{
		sdate: "1521-00-02",
		solar: "1521.1",
		stime: 5434753830000,
		gdate: "2142-2-22",
		gregorian: "",
		gtime: 5434753830000
	},
	{
		sdate: "1540-00-01",
		solar: "1540.0",
		stime: 6034200630000,
		gdate: "2161-2-20",
		gregorian: "",
		gtime: 6034200630000
	},
	{
		sdate: "1540-00-02",
		solar: "1540.1",
		stime: 6034283430000,
		gdate: "2161-2-21",
		gregorian: "",
		gtime: 6034283430000
	},
	{
		sdate: "1540-00-30",
		solar: "1540.29",
		stime: 6036702630000,
		gdate: "2161-3-18",
		gregorian: "",
		gtime: 6036702630000
	},
	{
		sdate: "1540-00-31",
		solar: "1540.30",
		stime: 6036789030000,
		gdate: "2161-3-19",
		gregorian: "",
		gtime: 6036789030000
	},
	{
		sdate: "1540-01-01",
		solar: "1540.31",
		stime: 6036875430000,
		gdate: "2161-3-20",
		gregorian: "",
		gtime: 6036875430000
	},
	{
		sdate: "1540-01-02",
		solar: "1540.32",
		stime: 6036961830000,
		gdate: "2161-3-21",
		gregorian: "",
		gtime: 6036961830000
	},
	{
		sdate: "1540-01-30",
		solar: "1540.60",
		stime: 6039381030000,
		gdate: "2161-4-19",
		gregorian: "",
		gtime: 6039381030000
	},
	{
		sdate: "1540-01-31",
		solar: "1540.61",
		stime: 6039467430000,
		gdate: "2161-4-20",
		gregorian: "",
		gtime: 6039467430000
	},
	{
		sdate: "1540-02-01",
		solar: "1540.62",
		stime: 6039553830000,
		gdate: "2161-4-21",
		gregorian: "",
		gtime: 6039553830000
	},
	{
		sdate: "1540-02-02",
		solar: "1540.63",
		stime: 6039640230000,
		gdate: "2161-4-22",
		gregorian: "",
		gtime: 6039640230000
	},
	{
		sdate: "1540-02-30",
		solar: "1540.91",
		stime: 6042059430000,
		gdate: "2161-5-19",
		gregorian: "",
		gtime: 6042059430000
	},
	{
		sdate: "1540-02-31",
		solar: "1540.92",
		stime: 6042145830000,
		gdate: "2161-5-20",
		gregorian: "",
		gtime: 6042145830000
	},
	{
		sdate: "1540-03-01",
		solar: "1540.93",
		stime: 6042232230000,
		gdate: "2161-5-21",
		gregorian: "",
		gtime: 6042232230000
	},
	{
		sdate: "1540-03-02",
		solar: "1540.94",
		stime: 6042318630000,
		gdate: "2161-5-22",
		gregorian: "",
		gtime: 6042318630000
	},
	{
		sdate: "1540-03-30",
		solar: "1540.122",
		stime: 6044737830000,
		gdate: "2161-6-20",
		gregorian: "",
		gtime: 6044737830000
	},
	{
		sdate: "1540-03-31",
		solar: "1540.123",
		stime: 6044824230000,
		gdate: "2161-6-21",
		gregorian: "",
		gtime: 6044824230000
	},
	{
		sdate: "1540-04-01",
		solar: "1540.124",
		stime: 6044910630000,
		gdate: "2161-6-22",
		gregorian: "",
		gtime: 6044910630000
	},
	{
		sdate: "1540-04-02",
		solar: "1540.125",
		stime: 6044997030000,
		gdate: "2161-6-23",
		gregorian: "",
		gtime: 6044997030000
	},
	{
		sdate: "1540-04-30",
		solar: "1540.153",
		stime: 6047416230000,
		gdate: "2161-7-20",
		gregorian: "",
		gtime: 6047416230000
	},
	{
		sdate: "1540-04-31",
		solar: "1540.154",
		stime: 6047502630000,
		gdate: "2161-7-21",
		gregorian: "",
		gtime: 6047502630000
	},
	{
		sdate: "1540-05-01",
		solar: "1540.155",
		stime: 6047589030000,
		gdate: "2161-7-22",
		gregorian: "",
		gtime: 6047589030000
	},
	{
		sdate: "1540-05-02",
		solar: "1540.156",
		stime: 6047675430000,
		gdate: "2161-7-23",
		gregorian: "",
		gtime: 6047675430000
	},
	{
		sdate: "1540-05-29",
		solar: "1540.183",
		stime: 6050008230000,
		gdate: "2161-8-19",
		gregorian: "",
		gtime: 6050008230000
	},
	{
		sdate: "1540-05-30",
		solar: "1540.184",
		stime: 6050094630000,
		gdate: "2161-8-20",
		gregorian: "",
		gtime: 6050094630000
	},
	{
		sdate: "1540-06-01",
		solar: "1540.186",
		stime: 6050271030000,
		gdate: "2161-8-22",
		gregorian: "",
		gtime: 6050271030000
	},
	{
		sdate: "1540-06-02",
		solar: "1540.187",
		stime: 6050357430000,
		gdate: "2161-8-23",
		gregorian: "",
		gtime: 6050357430000
	},
	{
		sdate: "1540-06-29",
		solar: "1540.214",
		stime: 6052690230000,
		gdate: "2161-9-20",
		gregorian: "",
		gtime: 6052690230000
	},
	{
		sdate: "1540-06-30",
		solar: "1540.215",
		stime: 6052776630000,
		gdate: "2161-9-21",
		gregorian: "",
		gtime: 6052776630000
	},
	{
		sdate: "1540-07-01",
		solar: "1540.216",
		stime: 6052863030000,
		gdate: "2161-9-22",
		gregorian: "",
		gtime: 6052863030000
	},
	{
		sdate: "1540-07-02",
		solar: "1540.217",
		stime: 6052949430000,
		gdate: "2161-9-23",
		gregorian: "",
		gtime: 6052949430000
	},
	{
		sdate: "1540-07-29",
		solar: "1540.244",
		stime: 6055282230000,
		gdate: "2161-10-19",
		gregorian: "",
		gtime: 6055282230000
	},
	{
		sdate: "1540-07-30",
		solar: "1540.245",
		stime: 6055368630000,
		gdate: "2161-10-20",
		gregorian: "",
		gtime: 6055368630000
	},
	{
		sdate: "1540-08-01",
		solar: "1540.246",
		stime: 6055455030000,
		gdate: "2161-10-21",
		gregorian: "",
		gtime: 6055455030000
	},
	{
		sdate: "1540-08-02",
		solar: "1540.247",
		stime: 6055541430000,
		gdate: "2161-10-22",
		gregorian: "",
		gtime: 6055541430000
	},
	{
		sdate: "1540-08-29",
		solar: "1540.274",
		stime: 6057874230000,
		gdate: "2161-11-19",
		gregorian: "",
		gtime: 6057874230000
	},
	{
		sdate: "1540-08-30",
		solar: "1540.275",
		stime: 6057960630000,
		gdate: "2161-11-20",
		gregorian: "",
		gtime: 6057960630000
	},
	{
		sdate: "1540-09-01",
		solar: "1540.276",
		stime: 6058047030000,
		gdate: "2161-11-21",
		gregorian: "",
		gtime: 6058047030000
	},
	{
		sdate: "1540-09-02",
		solar: "1540.277",
		stime: 6058133430000,
		gdate: "2161-11-22",
		gregorian: "",
		gtime: 6058133430000
	},
	{
		sdate: "1540-09-29",
		solar: "1540.304",
		stime: 6060466230000,
		gdate: "2162-0-18",
		gregorian: "",
		gtime: 6060466230000
	},
	{
		sdate: "1540-09-30",
		solar: "1540.305",
		stime: 6060552630000,
		gdate: "2162-0-19",
		gregorian: "",
		gtime: 6060552630000
	},
	{
		sdate: "1540-10-01",
		solar: "1540.306",
		stime: 6060639030000,
		gdate: "2162-0-20",
		gregorian: "",
		gtime: 6060639030000
	},
	{
		sdate: "1540-10-02",
		solar: "1540.307",
		stime: 6060725430000,
		gdate: "2162-0-21",
		gregorian: "",
		gtime: 6060725430000
	},
	{
		sdate: "1540-10-26",
		solar: "1540.331",
		stime: 6062799030000,
		gdate: "2162-1-14",
		gregorian: "",
		gtime: 6062799030000
	},
	{
		sdate: "1540-10-27",
		solar: "1540.332",
		stime: 6062885430000,
		gdate: "2162-1-15",
		gregorian: "",
		gtime: 6062885430000
	},
	{
		sdate: "1540-10-28",
		solar: "1540.333",
		stime: 6062971830000,
		gdate: "2162-1-16",
		gregorian: "",
		gtime: 6062971830000
	},
	{
		sdate: "1540-10-29",
		solar: "1540.334",
		stime: 6063058230000,
		gdate: "2162-1-17",
		gregorian: "",
		gtime: 6063058230000
	},
	{
		sdate: "1540-10-30",
		solar: "1540.335",
		stime: 6063144630000,
		gdate: "2162-1-18",
		gregorian: "",
		gtime: 6063144630000
	},
	{
		sdate: "1540-11-01",
		solar: "1540.336",
		stime: 6063231030000,
		gdate: "2162-1-19",
		gregorian: "",
		gtime: 6063231030000
	},
	{
		sdate: "1540-11-02",
		solar: "1540.337",
		stime: 6063317430000,
		gdate: "2162-1-20",
		gregorian: "",
		gtime: 6063317430000
	},
	{
		sdate: "1540-11-03",
		solar: "1540.338",
		stime: 6063403830000,
		gdate: "2162-1-21",
		gregorian: "",
		gtime: 6063403830000
	},
	{
		sdate: "1540-11-04",
		solar: "1540.339",
		stime: 6063490230000,
		gdate: "2162-1-22",
		gregorian: "",
		gtime: 6063490230000
	},
	{
		sdate: "1540-11-05",
		solar: "1540.340",
		stime: 6063576630000,
		gdate: "2162-1-23",
		gregorian: "",
		gtime: 6063576630000
	},
	{
		sdate: "1540-11-30",
		solar: "1540.365",
		stime: 6065736630000,
		gdate: "2162-2-20",
		gregorian: "",
		gtime: 6065736630000
	},
	{
		sdate: "1541-00-01",
		solar: "1541.0",
		stime: 6065819430000,
		gdate: "2162-2-21",
		gregorian: "",
		gtime: 6065819430000
	},
	{
		sdate: "1560-00-01",
		solar: "1560.0",
		stime: 6665352630000,
		gdate: "2181-2-20",
		gregorian: "",
		gtime: 6665352630000
	},
	{
		sdate: "1560-00-02",
		solar: "1560.1",
		stime: 6665435430000,
		gdate: "2181-2-21",
		gregorian: "",
		gtime: 6665435430000
	},
	{
		sdate: "1560-00-30",
		solar: "1560.29",
		stime: 6667854630000,
		gdate: "2181-3-18",
		gregorian: "",
		gtime: 6667854630000
	},
	{
		sdate: "1560-00-31",
		solar: "1560.30",
		stime: 6667941030000,
		gdate: "2181-3-19",
		gregorian: "",
		gtime: 6667941030000
	},
	{
		sdate: "1560-01-01",
		solar: "1560.31",
		stime: 6668027430000,
		gdate: "2181-3-20",
		gregorian: "",
		gtime: 6668027430000
	},
	{
		sdate: "1560-01-02",
		solar: "1560.32",
		stime: 6668113830000,
		gdate: "2181-3-21",
		gregorian: "",
		gtime: 6668113830000
	},
	{
		sdate: "1560-01-30",
		solar: "1560.60",
		stime: 6670533030000,
		gdate: "2181-4-19",
		gregorian: "",
		gtime: 6670533030000
	},
	{
		sdate: "1560-01-31",
		solar: "1560.61",
		stime: 6670619430000,
		gdate: "2181-4-20",
		gregorian: "",
		gtime: 6670619430000
	},
	{
		sdate: "1560-02-01",
		solar: "1560.62",
		stime: 6670705830000,
		gdate: "2181-4-21",
		gregorian: "",
		gtime: 6670705830000
	},
	{
		sdate: "1560-02-02",
		solar: "1560.63",
		stime: 6670792230000,
		gdate: "2181-4-22",
		gregorian: "",
		gtime: 6670792230000
	},
	{
		sdate: "1560-02-30",
		solar: "1560.91",
		stime: 6673211430000,
		gdate: "2181-5-19",
		gregorian: "",
		gtime: 6673211430000
	},
	{
		sdate: "1560-02-31",
		solar: "1560.92",
		stime: 6673297830000,
		gdate: "2181-5-20",
		gregorian: "",
		gtime: 6673297830000
	},
	{
		sdate: "1560-03-01",
		solar: "1560.93",
		stime: 6673384230000,
		gdate: "2181-5-21",
		gregorian: "",
		gtime: 6673384230000
	},
	{
		sdate: "1560-03-02",
		solar: "1560.94",
		stime: 6673470630000,
		gdate: "2181-5-22",
		gregorian: "",
		gtime: 6673470630000
	},
	{
		sdate: "1560-03-30",
		solar: "1560.122",
		stime: 6675889830000,
		gdate: "2181-6-20",
		gregorian: "",
		gtime: 6675889830000
	},
	{
		sdate: "1560-03-31",
		solar: "1560.123",
		stime: 6675976230000,
		gdate: "2181-6-21",
		gregorian: "",
		gtime: 6675976230000
	},
	{
		sdate: "1560-04-01",
		solar: "1560.124",
		stime: 6676062630000,
		gdate: "2181-6-22",
		gregorian: "",
		gtime: 6676062630000
	},
	{
		sdate: "1560-04-02",
		solar: "1560.125",
		stime: 6676149030000,
		gdate: "2181-6-23",
		gregorian: "",
		gtime: 6676149030000
	},
	{
		sdate: "1560-04-30",
		solar: "1560.153",
		stime: 6678568230000,
		gdate: "2181-7-20",
		gregorian: "",
		gtime: 6678568230000
	},
	{
		sdate: "1560-04-31",
		solar: "1560.154",
		stime: 6678654630000,
		gdate: "2181-7-21",
		gregorian: "",
		gtime: 6678654630000
	},
	{
		sdate: "1560-05-01",
		solar: "1560.155",
		stime: 6678741030000,
		gdate: "2181-7-22",
		gregorian: "",
		gtime: 6678741030000
	},
	{
		sdate: "1560-05-02",
		solar: "1560.156",
		stime: 6678827430000,
		gdate: "2181-7-23",
		gregorian: "",
		gtime: 6678827430000
	},
	{
		sdate: "1560-05-29",
		solar: "1560.183",
		stime: 6681160230000,
		gdate: "2181-8-19",
		gregorian: "",
		gtime: 6681160230000
	},
	{
		sdate: "1560-05-30",
		solar: "1560.184",
		stime: 6681246630000,
		gdate: "2181-8-20",
		gregorian: "",
		gtime: 6681246630000
	},
	{
		sdate: "1560-06-01",
		solar: "1560.186",
		stime: 6681423030000,
		gdate: "2181-8-22",
		gregorian: "",
		gtime: 6681423030000
	},
	{
		sdate: "1560-06-02",
		solar: "1560.187",
		stime: 6681509430000,
		gdate: "2181-8-23",
		gregorian: "",
		gtime: 6681509430000
	},
	{
		sdate: "1560-06-29",
		solar: "1560.214",
		stime: 6683842230000,
		gdate: "2181-9-20",
		gregorian: "",
		gtime: 6683842230000
	},
	{
		sdate: "1560-06-30",
		solar: "1560.215",
		stime: 6683928630000,
		gdate: "2181-9-21",
		gregorian: "",
		gtime: 6683928630000
	},
	{
		sdate: "1560-07-01",
		solar: "1560.216",
		stime: 6684015030000,
		gdate: "2181-9-22",
		gregorian: "",
		gtime: 6684015030000
	},
	{
		sdate: "1560-07-02",
		solar: "1560.217",
		stime: 6684101430000,
		gdate: "2181-9-23",
		gregorian: "",
		gtime: 6684101430000
	},
	{
		sdate: "1560-07-29",
		solar: "1560.244",
		stime: 6686434230000,
		gdate: "2181-10-19",
		gregorian: "",
		gtime: 6686434230000
	},
	{
		sdate: "1560-07-30",
		solar: "1560.245",
		stime: 6686520630000,
		gdate: "2181-10-20",
		gregorian: "",
		gtime: 6686520630000
	},
	{
		sdate: "1560-08-01",
		solar: "1560.246",
		stime: 6686607030000,
		gdate: "2181-10-21",
		gregorian: "",
		gtime: 6686607030000
	},
	{
		sdate: "1560-08-02",
		solar: "1560.247",
		stime: 6686693430000,
		gdate: "2181-10-22",
		gregorian: "",
		gtime: 6686693430000
	},
	{
		sdate: "1560-08-29",
		solar: "1560.274",
		stime: 6689026230000,
		gdate: "2181-11-19",
		gregorian: "",
		gtime: 6689026230000
	},
	{
		sdate: "1560-08-30",
		solar: "1560.275",
		stime: 6689112630000,
		gdate: "2181-11-20",
		gregorian: "",
		gtime: 6689112630000
	},
	{
		sdate: "1560-09-01",
		solar: "1560.276",
		stime: 6689199030000,
		gdate: "2181-11-21",
		gregorian: "",
		gtime: 6689199030000
	},
	{
		sdate: "1560-09-02",
		solar: "1560.277",
		stime: 6689285430000,
		gdate: "2181-11-22",
		gregorian: "",
		gtime: 6689285430000
	},
	{
		sdate: "1560-09-29",
		solar: "1560.304",
		stime: 6691618230000,
		gdate: "2182-0-18",
		gregorian: "",
		gtime: 6691618230000
	},
	{
		sdate: "1560-09-30",
		solar: "1560.305",
		stime: 6691704630000,
		gdate: "2182-0-19",
		gregorian: "",
		gtime: 6691704630000
	},
	{
		sdate: "1560-10-01",
		solar: "1560.306",
		stime: 6691791030000,
		gdate: "2182-0-20",
		gregorian: "",
		gtime: 6691791030000
	},
	{
		sdate: "1560-10-02",
		solar: "1560.307",
		stime: 6691877430000,
		gdate: "2182-0-21",
		gregorian: "",
		gtime: 6691877430000
	},
	{
		sdate: "1560-10-26",
		solar: "1560.331",
		stime: 6693951030000,
		gdate: "2182-1-14",
		gregorian: "",
		gtime: 6693951030000
	},
	{
		sdate: "1560-10-27",
		solar: "1560.332",
		stime: 6694037430000,
		gdate: "2182-1-15",
		gregorian: "",
		gtime: 6694037430000
	},
	{
		sdate: "1560-10-28",
		solar: "1560.333",
		stime: 6694123830000,
		gdate: "2182-1-16",
		gregorian: "",
		gtime: 6694123830000
	},
	{
		sdate: "1560-10-29",
		solar: "1560.334",
		stime: 6694210230000,
		gdate: "2182-1-17",
		gregorian: "",
		gtime: 6694210230000
	},
	{
		sdate: "1560-10-30",
		solar: "1560.335",
		stime: 6694296630000,
		gdate: "2182-1-18",
		gregorian: "",
		gtime: 6694296630000
	},
	{
		sdate: "1560-11-01",
		solar: "1560.336",
		stime: 6694383030000,
		gdate: "2182-1-19",
		gregorian: "",
		gtime: 6694383030000
	},
	{
		sdate: "1560-11-02",
		solar: "1560.337",
		stime: 6694469430000,
		gdate: "2182-1-20",
		gregorian: "",
		gtime: 6694469430000
	},
	{
		sdate: "1560-11-03",
		solar: "1560.338",
		stime: 6694555830000,
		gdate: "2182-1-21",
		gregorian: "",
		gtime: 6694555830000
	},
	{
		sdate: "1560-11-04",
		solar: "1560.339",
		stime: 6694642230000,
		gdate: "2182-1-22",
		gregorian: "",
		gtime: 6694642230000
	},
	{
		sdate: "1560-11-05",
		solar: "1560.340",
		stime: 6694728630000,
		gdate: "2182-1-23",
		gregorian: "",
		gtime: 6694728630000
	},
	{
		sdate: "1560-11-30",
		solar: "1560.365",
		stime: 6696888630000,
		gdate: "2182-2-20",
		gregorian: "",
		gtime: 6696888630000
	},
	{
		sdate: "1561-00-01",
		solar: "1561.0",
		stime: 6696971430000,
		gdate: "2182-2-21",
		gregorian: "",
		gtime: 6696971430000
	},
	{
		sdate: "1580-00-01",
		solar: "1580.0",
		stime: 7296501030000,
		gdate: "2201-2-21",
		gregorian: "",
		gtime: 7296501030000
	},
	{
		sdate: "1580-00-02",
		solar: "1580.1",
		stime: 7296587430000,
		gdate: "2201-2-22",
		gregorian: "",
		gtime: 7296587430000
	},
	{
		sdate: "1580-00-30",
		solar: "1580.29",
		stime: 7299006630000,
		gdate: "2201-3-19",
		gregorian: "",
		gtime: 7299006630000
	},
	{
		sdate: "1580-00-31",
		solar: "1580.30",
		stime: 7299093030000,
		gdate: "2201-3-20",
		gregorian: "",
		gtime: 7299093030000
	},
	{
		sdate: "1580-01-01",
		solar: "1580.31",
		stime: 7299179430000,
		gdate: "2201-3-21",
		gregorian: "",
		gtime: 7299179430000
	},
	{
		sdate: "1580-01-02",
		solar: "1580.32",
		stime: 7299265830000,
		gdate: "2201-3-22",
		gregorian: "",
		gtime: 7299265830000
	},
	{
		sdate: "1580-01-30",
		solar: "1580.60",
		stime: 7301685030000,
		gdate: "2201-4-20",
		gregorian: "",
		gtime: 7301685030000
	},
	{
		sdate: "1580-01-31",
		solar: "1580.61",
		stime: 7301771430000,
		gdate: "2201-4-21",
		gregorian: "",
		gtime: 7301771430000
	},
	{
		sdate: "1580-02-01",
		solar: "1580.62",
		stime: 7301857830000,
		gdate: "2201-4-22",
		gregorian: "",
		gtime: 7301857830000
	},
	{
		sdate: "1580-02-02",
		solar: "1580.63",
		stime: 7301944230000,
		gdate: "2201-4-23",
		gregorian: "",
		gtime: 7301944230000
	},
	{
		sdate: "1580-02-30",
		solar: "1580.91",
		stime: 7304363430000,
		gdate: "2201-5-20",
		gregorian: "",
		gtime: 7304363430000
	},
	{
		sdate: "1580-02-31",
		solar: "1580.92",
		stime: 7304449830000,
		gdate: "2201-5-21",
		gregorian: "",
		gtime: 7304449830000
	},
	{
		sdate: "1580-03-01",
		solar: "1580.93",
		stime: 7304536230000,
		gdate: "2201-5-22",
		gregorian: "",
		gtime: 7304536230000
	},
	{
		sdate: "1580-03-02",
		solar: "1580.94",
		stime: 7304622630000,
		gdate: "2201-5-23",
		gregorian: "",
		gtime: 7304622630000
	},
	{
		sdate: "1580-03-30",
		solar: "1580.122",
		stime: 7307041830000,
		gdate: "2201-6-21",
		gregorian: "",
		gtime: 7307041830000
	},
	{
		sdate: "1580-03-31",
		solar: "1580.123",
		stime: 7307128230000,
		gdate: "2201-6-22",
		gregorian: "",
		gtime: 7307128230000
	},
	{
		sdate: "1580-04-01",
		solar: "1580.124",
		stime: 7307214630000,
		gdate: "2201-6-23",
		gregorian: "",
		gtime: 7307214630000
	},
	{
		sdate: "1580-04-02",
		solar: "1580.125",
		stime: 7307301030000,
		gdate: "2201-6-24",
		gregorian: "",
		gtime: 7307301030000
	},
	{
		sdate: "1580-04-30",
		solar: "1580.153",
		stime: 7309720230000,
		gdate: "2201-7-21",
		gregorian: "",
		gtime: 7309720230000
	},
	{
		sdate: "1580-04-31",
		solar: "1580.154",
		stime: 7309806630000,
		gdate: "2201-7-22",
		gregorian: "",
		gtime: 7309806630000
	},
	{
		sdate: "1580-05-01",
		solar: "1580.155",
		stime: 7309893030000,
		gdate: "2201-7-23",
		gregorian: "",
		gtime: 7309893030000
	},
	{
		sdate: "1580-05-02",
		solar: "1580.156",
		stime: 7309979430000,
		gdate: "2201-7-24",
		gregorian: "",
		gtime: 7309979430000
	},
	{
		sdate: "1580-05-29",
		solar: "1580.183",
		stime: 7312312230000,
		gdate: "2201-8-20",
		gregorian: "",
		gtime: 7312312230000
	},
	{
		sdate: "1580-05-30",
		solar: "1580.184",
		stime: 7312402230000,
		gdate: "2201-8-21",
		gregorian: "",
		gtime: 7312402230000
	},
	{
		sdate: "1580-06-01",
		solar: "1580.186",
		stime: 7312575030000,
		gdate: "2201-8-23",
		gregorian: "",
		gtime: 7312575030000
	},
	{
		sdate: "1580-06-02",
		solar: "1580.187",
		stime: 7312661430000,
		gdate: "2201-8-24",
		gregorian: "",
		gtime: 7312661430000
	},
	{
		sdate: "1580-06-29",
		solar: "1580.214",
		stime: 7314994230000,
		gdate: "2201-9-21",
		gregorian: "",
		gtime: 7314994230000
	},
	{
		sdate: "1580-06-30",
		solar: "1580.215",
		stime: 7315080630000,
		gdate: "2201-9-22",
		gregorian: "",
		gtime: 7315080630000
	},
	{
		sdate: "1580-07-01",
		solar: "1580.216",
		stime: 7315167030000,
		gdate: "2201-9-23",
		gregorian: "",
		gtime: 7315167030000
	},
	{
		sdate: "1580-07-02",
		solar: "1580.217",
		stime: 7315253430000,
		gdate: "2201-9-24",
		gregorian: "",
		gtime: 7315253430000
	},
	{
		sdate: "1580-07-29",
		solar: "1580.244",
		stime: 7317586230000,
		gdate: "2201-10-20",
		gregorian: "",
		gtime: 7317586230000
	},
	{
		sdate: "1580-07-30",
		solar: "1580.245",
		stime: 7317672630000,
		gdate: "2201-10-21",
		gregorian: "",
		gtime: 7317672630000
	},
	{
		sdate: "1580-08-01",
		solar: "1580.246",
		stime: 7317759030000,
		gdate: "2201-10-22",
		gregorian: "",
		gtime: 7317759030000
	},
	{
		sdate: "1580-08-02",
		solar: "1580.247",
		stime: 7317845430000,
		gdate: "2201-10-23",
		gregorian: "",
		gtime: 7317845430000
	},
	{
		sdate: "1580-08-29",
		solar: "1580.274",
		stime: 7320178230000,
		gdate: "2201-11-20",
		gregorian: "",
		gtime: 7320178230000
	},
	{
		sdate: "1580-08-30",
		solar: "1580.275",
		stime: 7320264630000,
		gdate: "2201-11-21",
		gregorian: "",
		gtime: 7320264630000
	},
	{
		sdate: "1580-09-01",
		solar: "1580.276",
		stime: 7320351030000,
		gdate: "2201-11-22",
		gregorian: "",
		gtime: 7320351030000
	},
	{
		sdate: "1580-09-02",
		solar: "1580.277",
		stime: 7320437430000,
		gdate: "2201-11-23",
		gregorian: "",
		gtime: 7320437430000
	},
	{
		sdate: "1580-09-29",
		solar: "1580.304",
		stime: 7322770230000,
		gdate: "2202-0-19",
		gregorian: "",
		gtime: 7322770230000
	},
	{
		sdate: "1580-09-30",
		solar: "1580.305",
		stime: 7322856630000,
		gdate: "2202-0-20",
		gregorian: "",
		gtime: 7322856630000
	},
	{
		sdate: "1580-10-01",
		solar: "1580.306",
		stime: 7322943030000,
		gdate: "2202-0-21",
		gregorian: "",
		gtime: 7322943030000
	},
	{
		sdate: "1580-10-02",
		solar: "1580.307",
		stime: 7323029430000,
		gdate: "2202-0-22",
		gregorian: "",
		gtime: 7323029430000
	},
	{
		sdate: "1580-10-26",
		solar: "1580.331",
		stime: 7325103030000,
		gdate: "2202-1-15",
		gregorian: "",
		gtime: 7325103030000
	},
	{
		sdate: "1580-10-27",
		solar: "1580.332",
		stime: 7325189430000,
		gdate: "2202-1-16",
		gregorian: "",
		gtime: 7325189430000
	},
	{
		sdate: "1580-10-28",
		solar: "1580.333",
		stime: 7325275830000,
		gdate: "2202-1-17",
		gregorian: "",
		gtime: 7325275830000
	},
	{
		sdate: "1580-10-29",
		solar: "1580.334",
		stime: 7325362230000,
		gdate: "2202-1-18",
		gregorian: "",
		gtime: 7325362230000
	},
	{
		sdate: "1580-10-30",
		solar: "1580.335",
		stime: 7325448630000,
		gdate: "2202-1-19",
		gregorian: "",
		gtime: 7325448630000
	},
	{
		sdate: "1580-11-01",
		solar: "1580.336",
		stime: 7325535030000,
		gdate: "2202-1-20",
		gregorian: "",
		gtime: 7325535030000
	},
	{
		sdate: "1580-11-02",
		solar: "1580.337",
		stime: 7325621430000,
		gdate: "2202-1-21",
		gregorian: "",
		gtime: 7325621430000
	},
	{
		sdate: "1580-11-03",
		solar: "1580.338",
		stime: 7325707830000,
		gdate: "2202-1-22",
		gregorian: "",
		gtime: 7325707830000
	},
	{
		sdate: "1580-11-04",
		solar: "1580.339",
		stime: 7325794230000,
		gdate: "2202-1-23",
		gregorian: "",
		gtime: 7325794230000
	},
	{
		sdate: "1580-11-05",
		solar: "1580.340",
		stime: 7325880630000,
		gdate: "2202-1-24",
		gregorian: "",
		gtime: 7325880630000
	},
	{
		sdate: "1581-00-01",
		solar: "1581.0",
		stime: 7328037030000,
		gdate: "2202-2-21",
		gregorian: "",
		gtime: 7328037030000
	},
	{
		sdate: "1581-00-02",
		solar: "1581.1",
		stime: 7328123430000,
		gdate: "2202-2-22",
		gregorian: "",
		gtime: 7328123430000
	},
	{
		sdate: "1600-00-01",
		solar: "1600.0",
		stime: 7927653030000,
		gdate: "2221-2-21",
		gregorian: "",
		gtime: 7927653030000
	},
	{
		sdate: "1600-00-02",
		solar: "1600.1",
		stime: 7927739430000,
		gdate: "2221-2-22",
		gregorian: "",
		gtime: 7927739430000
	},
	{
		sdate: "1600-00-30",
		solar: "1600.29",
		stime: 7930158630000,
		gdate: "2221-3-19",
		gregorian: "",
		gtime: 7930158630000
	},
	{
		sdate: "1600-00-31",
		solar: "1600.30",
		stime: 7930245030000,
		gdate: "2221-3-20",
		gregorian: "",
		gtime: 7930245030000
	},
	{
		sdate: "1600-01-01",
		solar: "1600.31",
		stime: 7930331430000,
		gdate: "2221-3-21",
		gregorian: "",
		gtime: 7930331430000
	},
	{
		sdate: "1600-01-02",
		solar: "1600.32",
		stime: 7930417830000,
		gdate: "2221-3-22",
		gregorian: "",
		gtime: 7930417830000
	},
	{
		sdate: "1600-01-30",
		solar: "1600.60",
		stime: 7932837030000,
		gdate: "2221-4-20",
		gregorian: "",
		gtime: 7932837030000
	},
	{
		sdate: "1600-01-31",
		solar: "1600.61",
		stime: 7932923430000,
		gdate: "2221-4-21",
		gregorian: "",
		gtime: 7932923430000
	},
	{
		sdate: "1600-02-01",
		solar: "1600.62",
		stime: 7933009830000,
		gdate: "2221-4-22",
		gregorian: "",
		gtime: 7933009830000
	},
	{
		sdate: "1600-02-02",
		solar: "1600.63",
		stime: 7933096230000,
		gdate: "2221-4-23",
		gregorian: "",
		gtime: 7933096230000
	},
	{
		sdate: "1600-02-30",
		solar: "1600.91",
		stime: 7935515430000,
		gdate: "2221-5-20",
		gregorian: "",
		gtime: 7935515430000
	},
	{
		sdate: "1600-02-31",
		solar: "1600.92",
		stime: 7935601830000,
		gdate: "2221-5-21",
		gregorian: "",
		gtime: 7935601830000
	},
	{
		sdate: "1600-03-01",
		solar: "1600.93",
		stime: 7935688230000,
		gdate: "2221-5-22",
		gregorian: "",
		gtime: 7935688230000
	},
	{
		sdate: "1600-03-02",
		solar: "1600.94",
		stime: 7935774630000,
		gdate: "2221-5-23",
		gregorian: "",
		gtime: 7935774630000
	},
	{
		sdate: "1600-03-30",
		solar: "1600.122",
		stime: 7938193830000,
		gdate: "2221-6-21",
		gregorian: "",
		gtime: 7938193830000
	},
	{
		sdate: "1600-03-31",
		solar: "1600.123",
		stime: 7938280230000,
		gdate: "2221-6-22",
		gregorian: "",
		gtime: 7938280230000
	},
	{
		sdate: "1600-04-01",
		solar: "1600.124",
		stime: 7938366630000,
		gdate: "2221-6-23",
		gregorian: "",
		gtime: 7938366630000
	},
	{
		sdate: "1600-04-02",
		solar: "1600.125",
		stime: 7938453030000,
		gdate: "2221-6-24",
		gregorian: "",
		gtime: 7938453030000
	},
	{
		sdate: "1600-04-30",
		solar: "1600.153",
		stime: 7940872230000,
		gdate: "2221-7-21",
		gregorian: "",
		gtime: 7940872230000
	},
	{
		sdate: "1600-04-31",
		solar: "1600.154",
		stime: 7940958630000,
		gdate: "2221-7-22",
		gregorian: "",
		gtime: 7940958630000
	},
	{
		sdate: "1600-05-01",
		solar: "1600.155",
		stime: 7941045030000,
		gdate: "2221-7-23",
		gregorian: "",
		gtime: 7941045030000
	},
	{
		sdate: "1600-05-02",
		solar: "1600.156",
		stime: 7941131430000,
		gdate: "2221-7-24",
		gregorian: "",
		gtime: 7941131430000
	},
	{
		sdate: "1600-05-29",
		solar: "1600.183",
		stime: 7943464230000,
		gdate: "2221-8-20",
		gregorian: "",
		gtime: 7943464230000
	},
	{
		sdate: "1600-05-30",
		solar: "1600.184",
		stime: 7943554230000,
		gdate: "2221-8-21",
		gregorian: "",
		gtime: 7943554230000
	},
	{
		sdate: "1600-06-01",
		solar: "1600.186",
		stime: 7943727030000,
		gdate: "2221-8-23",
		gregorian: "",
		gtime: 7943727030000
	},
	{
		sdate: "1600-06-02",
		solar: "1600.187",
		stime: 7943813430000,
		gdate: "2221-8-24",
		gregorian: "",
		gtime: 7943813430000
	},
	{
		sdate: "1600-06-29",
		solar: "1600.214",
		stime: 7946146230000,
		gdate: "2221-9-21",
		gregorian: "",
		gtime: 7946146230000
	},
	{
		sdate: "1600-06-30",
		solar: "1600.215",
		stime: 7946232630000,
		gdate: "2221-9-22",
		gregorian: "",
		gtime: 7946232630000
	},
	{
		sdate: "1600-07-01",
		solar: "1600.216",
		stime: 7946319030000,
		gdate: "2221-9-23",
		gregorian: "",
		gtime: 7946319030000
	},
	{
		sdate: "1600-07-02",
		solar: "1600.217",
		stime: 7946405430000,
		gdate: "2221-9-24",
		gregorian: "",
		gtime: 7946405430000
	},
	{
		sdate: "1600-07-29",
		solar: "1600.244",
		stime: 7948738230000,
		gdate: "2221-10-20",
		gregorian: "",
		gtime: 7948738230000
	},
	{
		sdate: "1600-07-30",
		solar: "1600.245",
		stime: 7948824630000,
		gdate: "2221-10-21",
		gregorian: "",
		gtime: 7948824630000
	},
	{
		sdate: "1600-08-01",
		solar: "1600.246",
		stime: 7948911030000,
		gdate: "2221-10-22",
		gregorian: "",
		gtime: 7948911030000
	},
	{
		sdate: "1600-08-02",
		solar: "1600.247",
		stime: 7948997430000,
		gdate: "2221-10-23",
		gregorian: "",
		gtime: 7948997430000
	},
	{
		sdate: "1600-08-29",
		solar: "1600.274",
		stime: 7951330230000,
		gdate: "2221-11-20",
		gregorian: "",
		gtime: 7951330230000
	},
	{
		sdate: "1600-08-30",
		solar: "1600.275",
		stime: 7951416630000,
		gdate: "2221-11-21",
		gregorian: "",
		gtime: 7951416630000
	},
	{
		sdate: "1600-09-01",
		solar: "1600.276",
		stime: 7951503030000,
		gdate: "2221-11-22",
		gregorian: "",
		gtime: 7951503030000
	},
	{
		sdate: "1600-09-02",
		solar: "1600.277",
		stime: 7951589430000,
		gdate: "2221-11-23",
		gregorian: "",
		gtime: 7951589430000
	},
	{
		sdate: "1600-09-29",
		solar: "1600.304",
		stime: 7953922230000,
		gdate: "2222-0-19",
		gregorian: "",
		gtime: 7953922230000
	},
	{
		sdate: "1600-09-30",
		solar: "1600.305",
		stime: 7954008630000,
		gdate: "2222-0-20",
		gregorian: "",
		gtime: 7954008630000
	},
	{
		sdate: "1600-10-01",
		solar: "1600.306",
		stime: 7954095030000,
		gdate: "2222-0-21",
		gregorian: "",
		gtime: 7954095030000
	},
	{
		sdate: "1600-10-02",
		solar: "1600.307",
		stime: 7954181430000,
		gdate: "2222-0-22",
		gregorian: "",
		gtime: 7954181430000
	},
	{
		sdate: "1600-10-26",
		solar: "1600.331",
		stime: 7956255030000,
		gdate: "2222-1-15",
		gregorian: "",
		gtime: 7956255030000
	},
	{
		sdate: "1600-10-27",
		solar: "1600.332",
		stime: 7956341430000,
		gdate: "2222-1-16",
		gregorian: "",
		gtime: 7956341430000
	},
	{
		sdate: "1600-10-28",
		solar: "1600.333",
		stime: 7956427830000,
		gdate: "2222-1-17",
		gregorian: "",
		gtime: 7956427830000
	},
	{
		sdate: "1600-10-29",
		solar: "1600.334",
		stime: 7956514230000,
		gdate: "2222-1-18",
		gregorian: "",
		gtime: 7956514230000
	},
	{
		sdate: "1600-10-30",
		solar: "1600.335",
		stime: 7956600630000,
		gdate: "2222-1-19",
		gregorian: "",
		gtime: 7956600630000
	},
	{
		sdate: "1600-11-01",
		solar: "1600.336",
		stime: 7956687030000,
		gdate: "2222-1-20",
		gregorian: "",
		gtime: 7956687030000
	},
	{
		sdate: "1600-11-02",
		solar: "1600.337",
		stime: 7956773430000,
		gdate: "2222-1-21",
		gregorian: "",
		gtime: 7956773430000
	},
	{
		sdate: "1600-11-03",
		solar: "1600.338",
		stime: 7956859830000,
		gdate: "2222-1-22",
		gregorian: "",
		gtime: 7956859830000
	},
	{
		sdate: "1600-11-04",
		solar: "1600.339",
		stime: 7956946230000,
		gdate: "2222-1-23",
		gregorian: "",
		gtime: 7956946230000
	},
	{
		sdate: "1600-11-05",
		solar: "1600.340",
		stime: 7957032630000,
		gdate: "2222-1-24",
		gregorian: "",
		gtime: 7957032630000
	},
	{
		sdate: "1601-00-01",
		solar: "1601.0",
		stime: 7959189030000,
		gdate: "2222-2-21",
		gregorian: "",
		gtime: 7959189030000
	},
	{
		sdate: "1601-00-02",
		solar: "1601.1",
		stime: 7959275430000,
		gdate: "2222-2-22",
		gregorian: "",
		gtime: 7959275430000
	},
	{
		sdate: "1620-00-01",
		solar: "1620.0",
		stime: 8558805030000,
		gdate: "2241-2-21",
		gregorian: "",
		gtime: 8558805030000
	},
	{
		sdate: "1620-00-02",
		solar: "1620.1",
		stime: 8558891430000,
		gdate: "2241-2-22",
		gregorian: "",
		gtime: 8558891430000
	},
	{
		sdate: "1620-00-30",
		solar: "1620.29",
		stime: 8561310630000,
		gdate: "2241-3-19",
		gregorian: "",
		gtime: 8561310630000
	},
	{
		sdate: "1620-00-31",
		solar: "1620.30",
		stime: 8561397030000,
		gdate: "2241-3-20",
		gregorian: "",
		gtime: 8561397030000
	},
	{
		sdate: "1620-01-01",
		solar: "1620.31",
		stime: 8561483430000,
		gdate: "2241-3-21",
		gregorian: "",
		gtime: 8561483430000
	},
	{
		sdate: "1620-01-02",
		solar: "1620.32",
		stime: 8561569830000,
		gdate: "2241-3-22",
		gregorian: "",
		gtime: 8561569830000
	},
	{
		sdate: "1620-01-30",
		solar: "1620.60",
		stime: 8563989030000,
		gdate: "2241-4-20",
		gregorian: "",
		gtime: 8563989030000
	},
	{
		sdate: "1620-01-31",
		solar: "1620.61",
		stime: 8564075430000,
		gdate: "2241-4-21",
		gregorian: "",
		gtime: 8564075430000
	},
	{
		sdate: "1620-02-01",
		solar: "1620.62",
		stime: 8564161830000,
		gdate: "2241-4-22",
		gregorian: "",
		gtime: 8564161830000
	},
	{
		sdate: "1620-02-02",
		solar: "1620.63",
		stime: 8564248230000,
		gdate: "2241-4-23",
		gregorian: "",
		gtime: 8564248230000
	},
	{
		sdate: "1620-02-30",
		solar: "1620.91",
		stime: 8566667430000,
		gdate: "2241-5-20",
		gregorian: "",
		gtime: 8566667430000
	},
	{
		sdate: "1620-02-31",
		solar: "1620.92",
		stime: 8566753830000,
		gdate: "2241-5-21",
		gregorian: "",
		gtime: 8566753830000
	},
	{
		sdate: "1620-03-01",
		solar: "1620.93",
		stime: 8566840230000,
		gdate: "2241-5-22",
		gregorian: "",
		gtime: 8566840230000
	},
	{
		sdate: "1620-03-02",
		solar: "1620.94",
		stime: 8566926630000,
		gdate: "2241-5-23",
		gregorian: "",
		gtime: 8566926630000
	},
	{
		sdate: "1620-03-30",
		solar: "1620.122",
		stime: 8569345830000,
		gdate: "2241-6-21",
		gregorian: "",
		gtime: 8569345830000
	},
	{
		sdate: "1620-03-31",
		solar: "1620.123",
		stime: 8569432230000,
		gdate: "2241-6-22",
		gregorian: "",
		gtime: 8569432230000
	},
	{
		sdate: "1620-04-01",
		solar: "1620.124",
		stime: 8569518630000,
		gdate: "2241-6-23",
		gregorian: "",
		gtime: 8569518630000
	},
	{
		sdate: "1620-04-02",
		solar: "1620.125",
		stime: 8569605030000,
		gdate: "2241-6-24",
		gregorian: "",
		gtime: 8569605030000
	},
	{
		sdate: "1620-04-30",
		solar: "1620.153",
		stime: 8572024230000,
		gdate: "2241-7-21",
		gregorian: "",
		gtime: 8572024230000
	},
	{
		sdate: "1620-04-31",
		solar: "1620.154",
		stime: 8572110630000,
		gdate: "2241-7-22",
		gregorian: "",
		gtime: 8572110630000
	},
	{
		sdate: "1620-05-01",
		solar: "1620.155",
		stime: 8572197030000,
		gdate: "2241-7-23",
		gregorian: "",
		gtime: 8572197030000
	},
	{
		sdate: "1620-05-02",
		solar: "1620.156",
		stime: 8572283430000,
		gdate: "2241-7-24",
		gregorian: "",
		gtime: 8572283430000
	},
	{
		sdate: "1620-05-29",
		solar: "1620.183",
		stime: 8574616230000,
		gdate: "2241-8-20",
		gregorian: "",
		gtime: 8574616230000
	},
	{
		sdate: "1620-05-30",
		solar: "1620.184",
		stime: 8574706230000,
		gdate: "2241-8-21",
		gregorian: "",
		gtime: 8574706230000
	},
	{
		sdate: "1620-06-01",
		solar: "1620.186",
		stime: 8574879030000,
		gdate: "2241-8-23",
		gregorian: "",
		gtime: 8574879030000
	},
	{
		sdate: "1620-06-02",
		solar: "1620.187",
		stime: 8574965430000,
		gdate: "2241-8-24",
		gregorian: "",
		gtime: 8574965430000
	},
	{
		sdate: "1620-06-29",
		solar: "1620.214",
		stime: 8577298230000,
		gdate: "2241-9-21",
		gregorian: "",
		gtime: 8577298230000
	},
	{
		sdate: "1620-06-30",
		solar: "1620.215",
		stime: 8577384630000,
		gdate: "2241-9-22",
		gregorian: "",
		gtime: 8577384630000
	},
	{
		sdate: "1620-07-01",
		solar: "1620.216",
		stime: 8577471030000,
		gdate: "2241-9-23",
		gregorian: "",
		gtime: 8577471030000
	},
	{
		sdate: "1620-07-02",
		solar: "1620.217",
		stime: 8577557430000,
		gdate: "2241-9-24",
		gregorian: "",
		gtime: 8577557430000
	},
	{
		sdate: "1620-07-29",
		solar: "1620.244",
		stime: 8579890230000,
		gdate: "2241-10-20",
		gregorian: "",
		gtime: 8579890230000
	},
	{
		sdate: "1620-07-30",
		solar: "1620.245",
		stime: 8579976630000,
		gdate: "2241-10-21",
		gregorian: "",
		gtime: 8579976630000
	},
	{
		sdate: "1620-08-01",
		solar: "1620.246",
		stime: 8580063030000,
		gdate: "2241-10-22",
		gregorian: "",
		gtime: 8580063030000
	},
	{
		sdate: "1620-08-02",
		solar: "1620.247",
		stime: 8580149430000,
		gdate: "2241-10-23",
		gregorian: "",
		gtime: 8580149430000
	},
	{
		sdate: "1620-08-29",
		solar: "1620.274",
		stime: 8582482230000,
		gdate: "2241-11-20",
		gregorian: "",
		gtime: 8582482230000
	},
	{
		sdate: "1620-08-30",
		solar: "1620.275",
		stime: 8582568630000,
		gdate: "2241-11-21",
		gregorian: "",
		gtime: 8582568630000
	},
	{
		sdate: "1620-09-01",
		solar: "1620.276",
		stime: 8582655030000,
		gdate: "2241-11-22",
		gregorian: "",
		gtime: 8582655030000
	},
	{
		sdate: "1620-09-02",
		solar: "1620.277",
		stime: 8582741430000,
		gdate: "2241-11-23",
		gregorian: "",
		gtime: 8582741430000
	},
	{
		sdate: "1620-09-29",
		solar: "1620.304",
		stime: 8585074230000,
		gdate: "2242-0-19",
		gregorian: "",
		gtime: 8585074230000
	},
	{
		sdate: "1620-09-30",
		solar: "1620.305",
		stime: 8585160630000,
		gdate: "2242-0-20",
		gregorian: "",
		gtime: 8585160630000
	},
	{
		sdate: "1620-10-01",
		solar: "1620.306",
		stime: 8585247030000,
		gdate: "2242-0-21",
		gregorian: "",
		gtime: 8585247030000
	},
	{
		sdate: "1620-10-02",
		solar: "1620.307",
		stime: 8585333430000,
		gdate: "2242-0-22",
		gregorian: "",
		gtime: 8585333430000
	},
	{
		sdate: "1620-10-26",
		solar: "1620.331",
		stime: 8587407030000,
		gdate: "2242-1-15",
		gregorian: "",
		gtime: 8587407030000
	},
	{
		sdate: "1620-10-27",
		solar: "1620.332",
		stime: 8587493430000,
		gdate: "2242-1-16",
		gregorian: "",
		gtime: 8587493430000
	},
	{
		sdate: "1620-10-28",
		solar: "1620.333",
		stime: 8587579830000,
		gdate: "2242-1-17",
		gregorian: "",
		gtime: 8587579830000
	},
	{
		sdate: "1620-10-29",
		solar: "1620.334",
		stime: 8587666230000,
		gdate: "2242-1-18",
		gregorian: "",
		gtime: 8587666230000
	},
	{
		sdate: "1620-10-30",
		solar: "1620.335",
		stime: 8587752630000,
		gdate: "2242-1-19",
		gregorian: "",
		gtime: 8587752630000
	},
	{
		sdate: "1620-11-01",
		solar: "1620.336",
		stime: 8587839030000,
		gdate: "2242-1-20",
		gregorian: "",
		gtime: 8587839030000
	},
	{
		sdate: "1620-11-02",
		solar: "1620.337",
		stime: 8587925430000,
		gdate: "2242-1-21",
		gregorian: "",
		gtime: 8587925430000
	},
	{
		sdate: "1620-11-03",
		solar: "1620.338",
		stime: 8588011830000,
		gdate: "2242-1-22",
		gregorian: "",
		gtime: 8588011830000
	},
	{
		sdate: "1620-11-04",
		solar: "1620.339",
		stime: 8588098230000,
		gdate: "2242-1-23",
		gregorian: "",
		gtime: 8588098230000
	},
	{
		sdate: "1620-11-05",
		solar: "1620.340",
		stime: 8588184630000,
		gdate: "2242-1-24",
		gregorian: "",
		gtime: 8588184630000
	},
	{
		sdate: "1621-00-01",
		solar: "1621.0",
		stime: 8590341030000,
		gdate: "2242-2-21",
		gregorian: "",
		gtime: 8590341030000
	},
	{
		sdate: "1621-00-02",
		solar: "1621.1",
		stime: 8590427430000,
		gdate: "2242-2-22",
		gregorian: "",
		gtime: 8590427430000
	},
	{
		sdate: "1640-00-01",
		solar: "1640.0",
		stime: 9189957030000,
		gdate: "2261-2-21",
		gregorian: "",
		gtime: 9189957030000
	},
	{
		sdate: "1640-00-02",
		solar: "1640.1",
		stime: 9190043430000,
		gdate: "2261-2-22",
		gregorian: "",
		gtime: 9190043430000
	},
	{
		sdate: "1640-00-30",
		solar: "1640.29",
		stime: 9192462630000,
		gdate: "2261-3-19",
		gregorian: "",
		gtime: 9192462630000
	},
	{
		sdate: "1640-00-31",
		solar: "1640.30",
		stime: 9192549030000,
		gdate: "2261-3-20",
		gregorian: "",
		gtime: 9192549030000
	},
	{
		sdate: "1640-01-01",
		solar: "1640.31",
		stime: 9192635430000,
		gdate: "2261-3-21",
		gregorian: "",
		gtime: 9192635430000
	},
	{
		sdate: "1640-01-02",
		solar: "1640.32",
		stime: 9192721830000,
		gdate: "2261-3-22",
		gregorian: "",
		gtime: 9192721830000
	},
	{
		sdate: "1640-01-30",
		solar: "1640.60",
		stime: 9195141030000,
		gdate: "2261-4-20",
		gregorian: "",
		gtime: 9195141030000
	},
	{
		sdate: "1640-01-31",
		solar: "1640.61",
		stime: 9195227430000,
		gdate: "2261-4-21",
		gregorian: "",
		gtime: 9195227430000
	},
	{
		sdate: "1640-02-01",
		solar: "1640.62",
		stime: 9195313830000,
		gdate: "2261-4-22",
		gregorian: "",
		gtime: 9195313830000
	},
	{
		sdate: "1640-02-02",
		solar: "1640.63",
		stime: 9195400230000,
		gdate: "2261-4-23",
		gregorian: "",
		gtime: 9195400230000
	},
	{
		sdate: "1640-02-30",
		solar: "1640.91",
		stime: 9197819430000,
		gdate: "2261-5-20",
		gregorian: "",
		gtime: 9197819430000
	},
	{
		sdate: "1640-02-31",
		solar: "1640.92",
		stime: 9197905830000,
		gdate: "2261-5-21",
		gregorian: "",
		gtime: 9197905830000
	},
	{
		sdate: "1640-03-01",
		solar: "1640.93",
		stime: 9197992230000,
		gdate: "2261-5-22",
		gregorian: "",
		gtime: 9197992230000
	},
	{
		sdate: "1640-03-02",
		solar: "1640.94",
		stime: 9198078630000,
		gdate: "2261-5-23",
		gregorian: "",
		gtime: 9198078630000
	},
	{
		sdate: "1640-03-30",
		solar: "1640.122",
		stime: 9200497830000,
		gdate: "2261-6-21",
		gregorian: "",
		gtime: 9200497830000
	},
	{
		sdate: "1640-03-31",
		solar: "1640.123",
		stime: 9200584230000,
		gdate: "2261-6-22",
		gregorian: "",
		gtime: 9200584230000
	},
	{
		sdate: "1640-04-01",
		solar: "1640.124",
		stime: 9200670630000,
		gdate: "2261-6-23",
		gregorian: "",
		gtime: 9200670630000
	},
	{
		sdate: "1640-04-02",
		solar: "1640.125",
		stime: 9200757030000,
		gdate: "2261-6-24",
		gregorian: "",
		gtime: 9200757030000
	},
	{
		sdate: "1640-04-30",
		solar: "1640.153",
		stime: 9203176230000,
		gdate: "2261-7-21",
		gregorian: "",
		gtime: 9203176230000
	},
	{
		sdate: "1640-04-31",
		solar: "1640.154",
		stime: 9203262630000,
		gdate: "2261-7-22",
		gregorian: "",
		gtime: 9203262630000
	},
	{
		sdate: "1640-05-01",
		solar: "1640.155",
		stime: 9203349030000,
		gdate: "2261-7-23",
		gregorian: "",
		gtime: 9203349030000
	},
	{
		sdate: "1640-05-02",
		solar: "1640.156",
		stime: 9203435430000,
		gdate: "2261-7-24",
		gregorian: "",
		gtime: 9203435430000
	},
	{
		sdate: "1640-05-29",
		solar: "1640.183",
		stime: 9205768230000,
		gdate: "2261-8-20",
		gregorian: "",
		gtime: 9205768230000
	},
	{
		sdate: "1640-05-30",
		solar: "1640.184",
		stime: 9205858230000,
		gdate: "2261-8-21",
		gregorian: "",
		gtime: 9205858230000
	},
	{
		sdate: "1640-06-01",
		solar: "1640.186",
		stime: 9206031030000,
		gdate: "2261-8-23",
		gregorian: "",
		gtime: 9206031030000
	},
	{
		sdate: "1640-06-02",
		solar: "1640.187",
		stime: 9206117430000,
		gdate: "2261-8-24",
		gregorian: "",
		gtime: 9206117430000
	},
	{
		sdate: "1640-06-29",
		solar: "1640.214",
		stime: 9208450230000,
		gdate: "2261-9-21",
		gregorian: "",
		gtime: 9208450230000
	},
	{
		sdate: "1640-06-30",
		solar: "1640.215",
		stime: 9208536630000,
		gdate: "2261-9-22",
		gregorian: "",
		gtime: 9208536630000
	},
	{
		sdate: "1640-07-01",
		solar: "1640.216",
		stime: 9208623030000,
		gdate: "2261-9-23",
		gregorian: "",
		gtime: 9208623030000
	},
	{
		sdate: "1640-07-02",
		solar: "1640.217",
		stime: 9208709430000,
		gdate: "2261-9-24",
		gregorian: "",
		gtime: 9208709430000
	},
	{
		sdate: "1640-07-29",
		solar: "1640.244",
		stime: 9211042230000,
		gdate: "2261-10-20",
		gregorian: "",
		gtime: 9211042230000
	},
	{
		sdate: "1640-07-30",
		solar: "1640.245",
		stime: 9211128630000,
		gdate: "2261-10-21",
		gregorian: "",
		gtime: 9211128630000
	},
	{
		sdate: "1640-08-01",
		solar: "1640.246",
		stime: 9211215030000,
		gdate: "2261-10-22",
		gregorian: "",
		gtime: 9211215030000
	},
	{
		sdate: "1640-08-02",
		solar: "1640.247",
		stime: 9211301430000,
		gdate: "2261-10-23",
		gregorian: "",
		gtime: 9211301430000
	},
	{
		sdate: "1640-08-29",
		solar: "1640.274",
		stime: 9213634230000,
		gdate: "2261-11-20",
		gregorian: "",
		gtime: 9213634230000
	},
	{
		sdate: "1640-08-30",
		solar: "1640.275",
		stime: 9213720630000,
		gdate: "2261-11-21",
		gregorian: "",
		gtime: 9213720630000
	},
	{
		sdate: "1640-09-01",
		solar: "1640.276",
		stime: 9213807030000,
		gdate: "2261-11-22",
		gregorian: "",
		gtime: 9213807030000
	},
	{
		sdate: "1640-09-02",
		solar: "1640.277",
		stime: 9213893430000,
		gdate: "2261-11-23",
		gregorian: "",
		gtime: 9213893430000
	},
	{
		sdate: "1640-09-29",
		solar: "1640.304",
		stime: 9216226230000,
		gdate: "2262-0-19",
		gregorian: "",
		gtime: 9216226230000
	},
	{
		sdate: "1640-09-30",
		solar: "1640.305",
		stime: 9216312630000,
		gdate: "2262-0-20",
		gregorian: "",
		gtime: 9216312630000
	},
	{
		sdate: "1640-10-01",
		solar: "1640.306",
		stime: 9216399030000,
		gdate: "2262-0-21",
		gregorian: "",
		gtime: 9216399030000
	},
	{
		sdate: "1640-10-02",
		solar: "1640.307",
		stime: 9216485430000,
		gdate: "2262-0-22",
		gregorian: "",
		gtime: 9216485430000
	},
	{
		sdate: "1640-10-26",
		solar: "1640.331",
		stime: 9218559030000,
		gdate: "2262-1-15",
		gregorian: "",
		gtime: 9218559030000
	},
	{
		sdate: "1640-10-27",
		solar: "1640.332",
		stime: 9218645430000,
		gdate: "2262-1-16",
		gregorian: "",
		gtime: 9218645430000
	},
	{
		sdate: "1640-10-28",
		solar: "1640.333",
		stime: 9218731830000,
		gdate: "2262-1-17",
		gregorian: "",
		gtime: 9218731830000
	},
	{
		sdate: "1640-10-29",
		solar: "1640.334",
		stime: 9218818230000,
		gdate: "2262-1-18",
		gregorian: "",
		gtime: 9218818230000
	},
	{
		sdate: "1640-10-30",
		solar: "1640.335",
		stime: 9218904630000,
		gdate: "2262-1-19",
		gregorian: "",
		gtime: 9218904630000
	},
	{
		sdate: "1640-11-01",
		solar: "1640.336",
		stime: 9218991030000,
		gdate: "2262-1-20",
		gregorian: "",
		gtime: 9218991030000
	},
	{
		sdate: "1640-11-02",
		solar: "1640.337",
		stime: 9219077430000,
		gdate: "2262-1-21",
		gregorian: "",
		gtime: 9219077430000
	},
	{
		sdate: "1640-11-03",
		solar: "1640.338",
		stime: 9219163830000,
		gdate: "2262-1-22",
		gregorian: "",
		gtime: 9219163830000
	},
	{
		sdate: "1640-11-04",
		solar: "1640.339",
		stime: 9219250230000,
		gdate: "2262-1-23",
		gregorian: "",
		gtime: 9219250230000
	},
	{
		sdate: "1640-11-05",
		solar: "1640.340",
		stime: 9219336630000,
		gdate: "2262-1-24",
		gregorian: "",
		gtime: 9219336630000
	},
	{
		sdate: "1641-00-01",
		solar: "1641.0",
		stime: 9221493030000,
		gdate: "2262-2-21",
		gregorian: "",
		gtime: 9221493030000
	},
	{
		sdate: "1641-00-02",
		solar: "1641.1",
		stime: 9221579430000,
		gdate: "2262-2-22",
		gregorian: "",
		gtime: 9221579430000
	},
	{
		sdate: "1660-00-01",
		solar: "1660.0",
		stime: 9821109030000,
		gdate: "2281-2-21",
		gregorian: "",
		gtime: 9821109030000
	},
	{
		sdate: "1660-00-02",
		solar: "1660.1",
		stime: 9821195430000,
		gdate: "2281-2-22",
		gregorian: "",
		gtime: 9821195430000
	},
	{
		sdate: "1660-00-30",
		solar: "1660.29",
		stime: 9823614630000,
		gdate: "2281-3-19",
		gregorian: "",
		gtime: 9823614630000
	},
	{
		sdate: "1660-00-31",
		solar: "1660.30",
		stime: 9823701030000,
		gdate: "2281-3-20",
		gregorian: "",
		gtime: 9823701030000
	},
	{
		sdate: "1660-01-01",
		solar: "1660.31",
		stime: 9823787430000,
		gdate: "2281-3-21",
		gregorian: "",
		gtime: 9823787430000
	},
	{
		sdate: "1660-01-02",
		solar: "1660.32",
		stime: 9823873830000,
		gdate: "2281-3-22",
		gregorian: "",
		gtime: 9823873830000
	},
	{
		sdate: "1660-01-30",
		solar: "1660.60",
		stime: 9826293030000,
		gdate: "2281-4-20",
		gregorian: "",
		gtime: 9826293030000
	},
	{
		sdate: "1660-01-31",
		solar: "1660.61",
		stime: 9826379430000,
		gdate: "2281-4-21",
		gregorian: "",
		gtime: 9826379430000
	},
	{
		sdate: "1660-02-01",
		solar: "1660.62",
		stime: 9826465830000,
		gdate: "2281-4-22",
		gregorian: "",
		gtime: 9826465830000
	},
	{
		sdate: "1660-02-02",
		solar: "1660.63",
		stime: 9826552230000,
		gdate: "2281-4-23",
		gregorian: "",
		gtime: 9826552230000
	},
	{
		sdate: "1660-02-30",
		solar: "1660.91",
		stime: 9828971430000,
		gdate: "2281-5-20",
		gregorian: "",
		gtime: 9828971430000
	},
	{
		sdate: "1660-02-31",
		solar: "1660.92",
		stime: 9829057830000,
		gdate: "2281-5-21",
		gregorian: "",
		gtime: 9829057830000
	},
	{
		sdate: "1660-03-01",
		solar: "1660.93",
		stime: 9829144230000,
		gdate: "2281-5-22",
		gregorian: "",
		gtime: 9829144230000
	},
	{
		sdate: "1660-03-02",
		solar: "1660.94",
		stime: 9829230630000,
		gdate: "2281-5-23",
		gregorian: "",
		gtime: 9829230630000
	},
	{
		sdate: "1660-03-30",
		solar: "1660.122",
		stime: 9831649830000,
		gdate: "2281-6-21",
		gregorian: "",
		gtime: 9831649830000
	},
	{
		sdate: "1660-03-31",
		solar: "1660.123",
		stime: 9831736230000,
		gdate: "2281-6-22",
		gregorian: "",
		gtime: 9831736230000
	},
	{
		sdate: "1660-04-01",
		solar: "1660.124",
		stime: 9831822630000,
		gdate: "2281-6-23",
		gregorian: "",
		gtime: 9831822630000
	},
	{
		sdate: "1660-04-02",
		solar: "1660.125",
		stime: 9831909030000,
		gdate: "2281-6-24",
		gregorian: "",
		gtime: 9831909030000
	},
	{
		sdate: "1660-04-30",
		solar: "1660.153",
		stime: 9834328230000,
		gdate: "2281-7-21",
		gregorian: "",
		gtime: 9834328230000
	},
	{
		sdate: "1660-04-31",
		solar: "1660.154",
		stime: 9834414630000,
		gdate: "2281-7-22",
		gregorian: "",
		gtime: 9834414630000
	},
	{
		sdate: "1660-05-01",
		solar: "1660.155",
		stime: 9834501030000,
		gdate: "2281-7-23",
		gregorian: "",
		gtime: 9834501030000
	},
	{
		sdate: "1660-05-02",
		solar: "1660.156",
		stime: 9834587430000,
		gdate: "2281-7-24",
		gregorian: "",
		gtime: 9834587430000
	},
	{
		sdate: "1660-05-29",
		solar: "1660.183",
		stime: 9836920230000,
		gdate: "2281-8-20",
		gregorian: "",
		gtime: 9836920230000
	},
	{
		sdate: "1660-05-30",
		solar: "1660.184",
		stime: 9837010230000,
		gdate: "2281-8-21",
		gregorian: "",
		gtime: 9837010230000
	},
	{
		sdate: "1660-06-01",
		solar: "1660.186",
		stime: 9837183030000,
		gdate: "2281-8-23",
		gregorian: "",
		gtime: 9837183030000
	},
	{
		sdate: "1660-06-02",
		solar: "1660.187",
		stime: 9837269430000,
		gdate: "2281-8-24",
		gregorian: "",
		gtime: 9837269430000
	},
	{
		sdate: "1660-06-29",
		solar: "1660.214",
		stime: 9839602230000,
		gdate: "2281-9-21",
		gregorian: "",
		gtime: 9839602230000
	},
	{
		sdate: "1660-06-30",
		solar: "1660.215",
		stime: 9839688630000,
		gdate: "2281-9-22",
		gregorian: "",
		gtime: 9839688630000
	},
	{
		sdate: "1660-07-01",
		solar: "1660.216",
		stime: 9839775030000,
		gdate: "2281-9-23",
		gregorian: "",
		gtime: 9839775030000
	},
	{
		sdate: "1660-07-02",
		solar: "1660.217",
		stime: 9839861430000,
		gdate: "2281-9-24",
		gregorian: "",
		gtime: 9839861430000
	},
	{
		sdate: "1660-07-29",
		solar: "1660.244",
		stime: 9842194230000,
		gdate: "2281-10-20",
		gregorian: "",
		gtime: 9842194230000
	},
	{
		sdate: "1660-07-30",
		solar: "1660.245",
		stime: 9842280630000,
		gdate: "2281-10-21",
		gregorian: "",
		gtime: 9842280630000
	},
	{
		sdate: "1660-08-01",
		solar: "1660.246",
		stime: 9842367030000,
		gdate: "2281-10-22",
		gregorian: "",
		gtime: 9842367030000
	},
	{
		sdate: "1660-08-02",
		solar: "1660.247",
		stime: 9842453430000,
		gdate: "2281-10-23",
		gregorian: "",
		gtime: 9842453430000
	},
	{
		sdate: "1660-08-29",
		solar: "1660.274",
		stime: 9844786230000,
		gdate: "2281-11-20",
		gregorian: "",
		gtime: 9844786230000
	},
	{
		sdate: "1660-08-30",
		solar: "1660.275",
		stime: 9844872630000,
		gdate: "2281-11-21",
		gregorian: "",
		gtime: 9844872630000
	},
	{
		sdate: "1660-09-01",
		solar: "1660.276",
		stime: 9844959030000,
		gdate: "2281-11-22",
		gregorian: "",
		gtime: 9844959030000
	},
	{
		sdate: "1660-09-02",
		solar: "1660.277",
		stime: 9845045430000,
		gdate: "2281-11-23",
		gregorian: "",
		gtime: 9845045430000
	},
	{
		sdate: "1660-09-29",
		solar: "1660.304",
		stime: 9847378230000,
		gdate: "2282-0-19",
		gregorian: "",
		gtime: 9847378230000
	},
	{
		sdate: "1660-09-30",
		solar: "1660.305",
		stime: 9847464630000,
		gdate: "2282-0-20",
		gregorian: "",
		gtime: 9847464630000
	},
	{
		sdate: "1660-10-01",
		solar: "1660.306",
		stime: 9847551030000,
		gdate: "2282-0-21",
		gregorian: "",
		gtime: 9847551030000
	},
	{
		sdate: "1660-10-02",
		solar: "1660.307",
		stime: 9847637430000,
		gdate: "2282-0-22",
		gregorian: "",
		gtime: 9847637430000
	},
	{
		sdate: "1660-10-26",
		solar: "1660.331",
		stime: 9849711030000,
		gdate: "2282-1-15",
		gregorian: "",
		gtime: 9849711030000
	},
	{
		sdate: "1660-10-27",
		solar: "1660.332",
		stime: 9849797430000,
		gdate: "2282-1-16",
		gregorian: "",
		gtime: 9849797430000
	},
	{
		sdate: "1660-10-28",
		solar: "1660.333",
		stime: 9849883830000,
		gdate: "2282-1-17",
		gregorian: "",
		gtime: 9849883830000
	},
	{
		sdate: "1660-10-29",
		solar: "1660.334",
		stime: 9849970230000,
		gdate: "2282-1-18",
		gregorian: "",
		gtime: 9849970230000
	},
	{
		sdate: "1660-10-30",
		solar: "1660.335",
		stime: 9850056630000,
		gdate: "2282-1-19",
		gregorian: "",
		gtime: 9850056630000
	},
	{
		sdate: "1660-11-01",
		solar: "1660.336",
		stime: 9850143030000,
		gdate: "2282-1-20",
		gregorian: "",
		gtime: 9850143030000
	},
	{
		sdate: "1660-11-02",
		solar: "1660.337",
		stime: 9850229430000,
		gdate: "2282-1-21",
		gregorian: "",
		gtime: 9850229430000
	},
	{
		sdate: "1660-11-03",
		solar: "1660.338",
		stime: 9850315830000,
		gdate: "2282-1-22",
		gregorian: "",
		gtime: 9850315830000
	},
	{
		sdate: "1660-11-04",
		solar: "1660.339",
		stime: 9850402230000,
		gdate: "2282-1-23",
		gregorian: "",
		gtime: 9850402230000
	},
	{
		sdate: "1660-11-05",
		solar: "1660.340",
		stime: 9850488630000,
		gdate: "2282-1-24",
		gregorian: "",
		gtime: 9850488630000
	},
	{
		sdate: "1661-00-01",
		solar: "1661.0",
		stime: 9852645030000,
		gdate: "2282-2-21",
		gregorian: "",
		gtime: 9852645030000
	},
	{
		sdate: "1661-00-02",
		solar: "1661.1",
		stime: 9852731430000,
		gdate: "2282-2-22",
		gregorian: "",
		gtime: 9852731430000
	},
	{
		sdate: "1680-00-01",
		solar: "1680.0",
		stime: 10452174630000,
		gdate: "2301-2-21",
		gregorian: "",
		gtime: 10452174630000
	},
	{
		sdate: "1680-00-02",
		solar: "1680.1",
		stime: 10452261030000,
		gdate: "2301-2-22",
		gregorian: "",
		gtime: 10452261030000
	},
	{
		sdate: "1680-00-30",
		solar: "1680.29",
		stime: 10454680230000,
		gdate: "2301-3-19",
		gregorian: "",
		gtime: 10454680230000
	},
	{
		sdate: "1680-00-31",
		solar: "1680.30",
		stime: 10454766630000,
		gdate: "2301-3-20",
		gregorian: "",
		gtime: 10454766630000
	},
	{
		sdate: "1680-01-01",
		solar: "1680.31",
		stime: 10454853030000,
		gdate: "2301-3-21",
		gregorian: "",
		gtime: 10454853030000
	},
	{
		sdate: "1680-01-02",
		solar: "1680.32",
		stime: 10454939430000,
		gdate: "2301-3-22",
		gregorian: "",
		gtime: 10454939430000
	},
	{
		sdate: "1680-01-30",
		solar: "1680.60",
		stime: 10457358630000,
		gdate: "2301-4-20",
		gregorian: "",
		gtime: 10457358630000
	},
	{
		sdate: "1680-01-31",
		solar: "1680.61",
		stime: 10457445030000,
		gdate: "2301-4-21",
		gregorian: "",
		gtime: 10457445030000
	},
	{
		sdate: "1680-02-01",
		solar: "1680.62",
		stime: 10457531430000,
		gdate: "2301-4-22",
		gregorian: "",
		gtime: 10457531430000
	},
	{
		sdate: "1680-02-02",
		solar: "1680.63",
		stime: 10457617830000,
		gdate: "2301-4-23",
		gregorian: "",
		gtime: 10457617830000
	},
	{
		sdate: "1680-02-30",
		solar: "1680.91",
		stime: 10460037030000,
		gdate: "2301-5-20",
		gregorian: "",
		gtime: 10460037030000
	},
	{
		sdate: "1680-02-31",
		solar: "1680.92",
		stime: 10460123430000,
		gdate: "2301-5-21",
		gregorian: "",
		gtime: 10460123430000
	},
	{
		sdate: "1680-03-01",
		solar: "1680.93",
		stime: 10460209830000,
		gdate: "2301-5-22",
		gregorian: "",
		gtime: 10460209830000
	},
	{
		sdate: "1680-03-02",
		solar: "1680.94",
		stime: 10460296230000,
		gdate: "2301-5-23",
		gregorian: "",
		gtime: 10460296230000
	},
	{
		sdate: "1680-03-30",
		solar: "1680.122",
		stime: 10462715430000,
		gdate: "2301-6-21",
		gregorian: "",
		gtime: 10462715430000
	},
	{
		sdate: "1680-03-31",
		solar: "1680.123",
		stime: 10462801830000,
		gdate: "2301-6-22",
		gregorian: "",
		gtime: 10462801830000
	},
	{
		sdate: "1680-04-01",
		solar: "1680.124",
		stime: 10462888230000,
		gdate: "2301-6-23",
		gregorian: "",
		gtime: 10462888230000
	},
	{
		sdate: "1680-04-02",
		solar: "1680.125",
		stime: 10462974630000,
		gdate: "2301-6-24",
		gregorian: "",
		gtime: 10462974630000
	},
	{
		sdate: "1680-04-30",
		solar: "1680.153",
		stime: 10465393830000,
		gdate: "2301-7-21",
		gregorian: "",
		gtime: 10465393830000
	},
	{
		sdate: "1680-04-31",
		solar: "1680.154",
		stime: 10465480230000,
		gdate: "2301-7-22",
		gregorian: "",
		gtime: 10465480230000
	},
	{
		sdate: "1680-05-01",
		solar: "1680.155",
		stime: 10465566630000,
		gdate: "2301-7-23",
		gregorian: "",
		gtime: 10465566630000
	},
	{
		sdate: "1680-05-02",
		solar: "1680.156",
		stime: 10465653030000,
		gdate: "2301-7-24",
		gregorian: "",
		gtime: 10465653030000
	},
	{
		sdate: "1680-05-29",
		solar: "1680.183",
		stime: 10467985830000,
		gdate: "2301-8-20",
		gregorian: "",
		gtime: 10467985830000
	},
	{
		sdate: "1680-05-30",
		solar: "1680.184",
		stime: 10468075830000,
		gdate: "2301-8-21",
		gregorian: "",
		gtime: 10468075830000
	},
	{
		sdate: "1680-06-01",
		solar: "1680.186",
		stime: 10468248630000,
		gdate: "2301-8-23",
		gregorian: "",
		gtime: 10468248630000
	},
	{
		sdate: "1680-06-02",
		solar: "1680.187",
		stime: 10468335030000,
		gdate: "2301-8-24",
		gregorian: "",
		gtime: 10468335030000
	},
	{
		sdate: "1680-06-29",
		solar: "1680.214",
		stime: 10470667830000,
		gdate: "2301-9-21",
		gregorian: "",
		gtime: 10470667830000
	},
	{
		sdate: "1680-06-30",
		solar: "1680.215",
		stime: 10470754230000,
		gdate: "2301-9-22",
		gregorian: "",
		gtime: 10470754230000
	},
	{
		sdate: "1680-07-01",
		solar: "1680.216",
		stime: 10470840630000,
		gdate: "2301-9-23",
		gregorian: "",
		gtime: 10470840630000
	},
	{
		sdate: "1680-07-02",
		solar: "1680.217",
		stime: 10470927030000,
		gdate: "2301-9-24",
		gregorian: "",
		gtime: 10470927030000
	},
	{
		sdate: "1680-07-29",
		solar: "1680.244",
		stime: 10473259830000,
		gdate: "2301-10-20",
		gregorian: "",
		gtime: 10473259830000
	},
	{
		sdate: "1680-07-30",
		solar: "1680.245",
		stime: 10473346230000,
		gdate: "2301-10-21",
		gregorian: "",
		gtime: 10473346230000
	},
	{
		sdate: "1680-08-01",
		solar: "1680.246",
		stime: 10473432630000,
		gdate: "2301-10-22",
		gregorian: "",
		gtime: 10473432630000
	},
	{
		sdate: "1680-08-02",
		solar: "1680.247",
		stime: 10473519030000,
		gdate: "2301-10-23",
		gregorian: "",
		gtime: 10473519030000
	},
	{
		sdate: "1680-08-29",
		solar: "1680.274",
		stime: 10475851830000,
		gdate: "2301-11-20",
		gregorian: "",
		gtime: 10475851830000
	},
	{
		sdate: "1680-08-30",
		solar: "1680.275",
		stime: 10475938230000,
		gdate: "2301-11-21",
		gregorian: "",
		gtime: 10475938230000
	},
	{
		sdate: "1680-09-01",
		solar: "1680.276",
		stime: 10476024630000,
		gdate: "2301-11-22",
		gregorian: "",
		gtime: 10476024630000
	},
	{
		sdate: "1680-09-02",
		solar: "1680.277",
		stime: 10476111030000,
		gdate: "2301-11-23",
		gregorian: "",
		gtime: 10476111030000
	},
	{
		sdate: "1680-09-29",
		solar: "1680.304",
		stime: 10478443830000,
		gdate: "2302-0-19",
		gregorian: "",
		gtime: 10478443830000
	},
	{
		sdate: "1680-09-30",
		solar: "1680.305",
		stime: 10478530230000,
		gdate: "2302-0-20",
		gregorian: "",
		gtime: 10478530230000
	},
	{
		sdate: "1680-10-01",
		solar: "1680.306",
		stime: 10478616630000,
		gdate: "2302-0-21",
		gregorian: "",
		gtime: 10478616630000
	},
	{
		sdate: "1680-10-02",
		solar: "1680.307",
		stime: 10478703030000,
		gdate: "2302-0-22",
		gregorian: "",
		gtime: 10478703030000
	},
	{
		sdate: "1680-10-26",
		solar: "1680.331",
		stime: 10480776630000,
		gdate: "2302-1-15",
		gregorian: "",
		gtime: 10480776630000
	},
	{
		sdate: "1680-10-27",
		solar: "1680.332",
		stime: 10480863030000,
		gdate: "2302-1-16",
		gregorian: "",
		gtime: 10480863030000
	},
	{
		sdate: "1680-10-28",
		solar: "1680.333",
		stime: 10480949430000,
		gdate: "2302-1-17",
		gregorian: "",
		gtime: 10480949430000
	},
	{
		sdate: "1680-10-29",
		solar: "1680.334",
		stime: 10481035830000,
		gdate: "2302-1-18",
		gregorian: "",
		gtime: 10481035830000
	},
	{
		sdate: "1680-10-30",
		solar: "1680.335",
		stime: 10481122230000,
		gdate: "2302-1-19",
		gregorian: "",
		gtime: 10481122230000
	},
	{
		sdate: "1680-11-01",
		solar: "1680.336",
		stime: 10481208630000,
		gdate: "2302-1-20",
		gregorian: "",
		gtime: 10481208630000
	},
	{
		sdate: "1680-11-02",
		solar: "1680.337",
		stime: 10481295030000,
		gdate: "2302-1-21",
		gregorian: "",
		gtime: 10481295030000
	},
	{
		sdate: "1680-11-03",
		solar: "1680.338",
		stime: 10481381430000,
		gdate: "2302-1-22",
		gregorian: "",
		gtime: 10481381430000
	},
	{
		sdate: "1680-11-04",
		solar: "1680.339",
		stime: 10481467830000,
		gdate: "2302-1-23",
		gregorian: "",
		gtime: 10481467830000
	},
	{
		sdate: "1680-11-05",
		solar: "1680.340",
		stime: 10481554230000,
		gdate: "2302-1-24",
		gregorian: "",
		gtime: 10481554230000
	},
	{
		sdate: "1680-11-30",
		solar: "1680.365",
		stime: 10483710630000,
		gdate: "2302-2-21",
		gregorian: "",
		gtime: 10483710630000
	},
	{
		sdate: "1681-00-01",
		solar: "1681.0",
		stime: 10483797030000,
		gdate: "2302-2-22",
		gregorian: "",
		gtime: 10483797030000
	},
	{
		sdate: "1700-00-01",
		solar: "1700.0",
		stime: 11083326630000,
		gdate: "2321-2-21",
		gregorian: "",
		gtime: 11083326630000
	},
	{
		sdate: "1700-00-02",
		solar: "1700.1",
		stime: 11083413030000,
		gdate: "2321-2-22",
		gregorian: "",
		gtime: 11083413030000
	},
	{
		sdate: "1700-00-30",
		solar: "1700.29",
		stime: 11085832230000,
		gdate: "2321-3-19",
		gregorian: "",
		gtime: 11085832230000
	},
	{
		sdate: "1700-00-31",
		solar: "1700.30",
		stime: 11085918630000,
		gdate: "2321-3-20",
		gregorian: "",
		gtime: 11085918630000
	},
	{
		sdate: "1700-01-01",
		solar: "1700.31",
		stime: 11086005030000,
		gdate: "2321-3-21",
		gregorian: "",
		gtime: 11086005030000
	},
	{
		sdate: "1700-01-02",
		solar: "1700.32",
		stime: 11086091430000,
		gdate: "2321-3-22",
		gregorian: "",
		gtime: 11086091430000
	},
	{
		sdate: "1700-01-30",
		solar: "1700.60",
		stime: 11088510630000,
		gdate: "2321-4-20",
		gregorian: "",
		gtime: 11088510630000
	},
	{
		sdate: "1700-01-31",
		solar: "1700.61",
		stime: 11088597030000,
		gdate: "2321-4-21",
		gregorian: "",
		gtime: 11088597030000
	},
	{
		sdate: "1700-02-01",
		solar: "1700.62",
		stime: 11088683430000,
		gdate: "2321-4-22",
		gregorian: "",
		gtime: 11088683430000
	},
	{
		sdate: "1700-02-02",
		solar: "1700.63",
		stime: 11088769830000,
		gdate: "2321-4-23",
		gregorian: "",
		gtime: 11088769830000
	},
	{
		sdate: "1700-02-30",
		solar: "1700.91",
		stime: 11091189030000,
		gdate: "2321-5-20",
		gregorian: "",
		gtime: 11091189030000
	},
	{
		sdate: "1700-02-31",
		solar: "1700.92",
		stime: 11091275430000,
		gdate: "2321-5-21",
		gregorian: "",
		gtime: 11091275430000
	},
	{
		sdate: "1700-03-01",
		solar: "1700.93",
		stime: 11091361830000,
		gdate: "2321-5-22",
		gregorian: "",
		gtime: 11091361830000
	},
	{
		sdate: "1700-03-02",
		solar: "1700.94",
		stime: 11091448230000,
		gdate: "2321-5-23",
		gregorian: "",
		gtime: 11091448230000
	},
	{
		sdate: "1700-03-30",
		solar: "1700.122",
		stime: 11093867430000,
		gdate: "2321-6-21",
		gregorian: "",
		gtime: 11093867430000
	},
	{
		sdate: "1700-03-31",
		solar: "1700.123",
		stime: 11093953830000,
		gdate: "2321-6-22",
		gregorian: "",
		gtime: 11093953830000
	},
	{
		sdate: "1700-04-01",
		solar: "1700.124",
		stime: 11094040230000,
		gdate: "2321-6-23",
		gregorian: "",
		gtime: 11094040230000
	},
	{
		sdate: "1700-04-02",
		solar: "1700.125",
		stime: 11094126630000,
		gdate: "2321-6-24",
		gregorian: "",
		gtime: 11094126630000
	},
	{
		sdate: "1700-04-30",
		solar: "1700.153",
		stime: 11096545830000,
		gdate: "2321-7-21",
		gregorian: "",
		gtime: 11096545830000
	},
	{
		sdate: "1700-04-31",
		solar: "1700.154",
		stime: 11096632230000,
		gdate: "2321-7-22",
		gregorian: "",
		gtime: 11096632230000
	},
	{
		sdate: "1700-05-01",
		solar: "1700.155",
		stime: 11096718630000,
		gdate: "2321-7-23",
		gregorian: "",
		gtime: 11096718630000
	},
	{
		sdate: "1700-05-02",
		solar: "1700.156",
		stime: 11096805030000,
		gdate: "2321-7-24",
		gregorian: "",
		gtime: 11096805030000
	},
	{
		sdate: "1700-05-29",
		solar: "1700.183",
		stime: 11099137830000,
		gdate: "2321-8-20",
		gregorian: "",
		gtime: 11099137830000
	},
	{
		sdate: "1700-05-30",
		solar: "1700.184",
		stime: 11099227830000,
		gdate: "2321-8-21",
		gregorian: "",
		gtime: 11099227830000
	},
	{
		sdate: "1700-06-01",
		solar: "1700.186",
		stime: 11099400630000,
		gdate: "2321-8-23",
		gregorian: "",
		gtime: 11099400630000
	},
	{
		sdate: "1700-06-02",
		solar: "1700.187",
		stime: 11099487030000,
		gdate: "2321-8-24",
		gregorian: "",
		gtime: 11099487030000
	},
	{
		sdate: "1700-06-29",
		solar: "1700.214",
		stime: 11101819830000,
		gdate: "2321-9-21",
		gregorian: "",
		gtime: 11101819830000
	},
	{
		sdate: "1700-06-30",
		solar: "1700.215",
		stime: 11101906230000,
		gdate: "2321-9-22",
		gregorian: "",
		gtime: 11101906230000
	},
	{
		sdate: "1700-07-01",
		solar: "1700.216",
		stime: 11101992630000,
		gdate: "2321-9-23",
		gregorian: "",
		gtime: 11101992630000
	},
	{
		sdate: "1700-07-02",
		solar: "1700.217",
		stime: 11102079030000,
		gdate: "2321-9-24",
		gregorian: "",
		gtime: 11102079030000
	},
	{
		sdate: "1700-07-29",
		solar: "1700.244",
		stime: 11104411830000,
		gdate: "2321-10-20",
		gregorian: "",
		gtime: 11104411830000
	},
	{
		sdate: "1700-07-30",
		solar: "1700.245",
		stime: 11104498230000,
		gdate: "2321-10-21",
		gregorian: "",
		gtime: 11104498230000
	},
	{
		sdate: "1700-08-01",
		solar: "1700.246",
		stime: 11104584630000,
		gdate: "2321-10-22",
		gregorian: "",
		gtime: 11104584630000
	},
	{
		sdate: "1700-08-02",
		solar: "1700.247",
		stime: 11104671030000,
		gdate: "2321-10-23",
		gregorian: "",
		gtime: 11104671030000
	},
	{
		sdate: "1700-08-29",
		solar: "1700.274",
		stime: 11107003830000,
		gdate: "2321-11-20",
		gregorian: "",
		gtime: 11107003830000
	},
	{
		sdate: "1700-08-30",
		solar: "1700.275",
		stime: 11107090230000,
		gdate: "2321-11-21",
		gregorian: "",
		gtime: 11107090230000
	},
	{
		sdate: "1700-09-01",
		solar: "1700.276",
		stime: 11107176630000,
		gdate: "2321-11-22",
		gregorian: "",
		gtime: 11107176630000
	},
	{
		sdate: "1700-09-02",
		solar: "1700.277",
		stime: 11107263030000,
		gdate: "2321-11-23",
		gregorian: "",
		gtime: 11107263030000
	},
	{
		sdate: "1700-09-29",
		solar: "1700.304",
		stime: 11109595830000,
		gdate: "2322-0-19",
		gregorian: "",
		gtime: 11109595830000
	},
	{
		sdate: "1700-09-30",
		solar: "1700.305",
		stime: 11109682230000,
		gdate: "2322-0-20",
		gregorian: "",
		gtime: 11109682230000
	},
	{
		sdate: "1700-10-01",
		solar: "1700.306",
		stime: 11109768630000,
		gdate: "2322-0-21",
		gregorian: "",
		gtime: 11109768630000
	},
	{
		sdate: "1700-10-02",
		solar: "1700.307",
		stime: 11109855030000,
		gdate: "2322-0-22",
		gregorian: "",
		gtime: 11109855030000
	},
	{
		sdate: "1700-10-26",
		solar: "1700.331",
		stime: 11111928630000,
		gdate: "2322-1-15",
		gregorian: "",
		gtime: 11111928630000
	},
	{
		sdate: "1700-10-27",
		solar: "1700.332",
		stime: 11112015030000,
		gdate: "2322-1-16",
		gregorian: "",
		gtime: 11112015030000
	},
	{
		sdate: "1700-10-28",
		solar: "1700.333",
		stime: 11112101430000,
		gdate: "2322-1-17",
		gregorian: "",
		gtime: 11112101430000
	},
	{
		sdate: "1700-10-29",
		solar: "1700.334",
		stime: 11112187830000,
		gdate: "2322-1-18",
		gregorian: "",
		gtime: 11112187830000
	},
	{
		sdate: "1700-10-30",
		solar: "1700.335",
		stime: 11112274230000,
		gdate: "2322-1-19",
		gregorian: "",
		gtime: 11112274230000
	},
	{
		sdate: "1700-11-01",
		solar: "1700.336",
		stime: 11112360630000,
		gdate: "2322-1-20",
		gregorian: "",
		gtime: 11112360630000
	},
	{
		sdate: "1700-11-02",
		solar: "1700.337",
		stime: 11112447030000,
		gdate: "2322-1-21",
		gregorian: "",
		gtime: 11112447030000
	},
	{
		sdate: "1700-11-03",
		solar: "1700.338",
		stime: 11112533430000,
		gdate: "2322-1-22",
		gregorian: "",
		gtime: 11112533430000
	},
	{
		sdate: "1700-11-04",
		solar: "1700.339",
		stime: 11112619830000,
		gdate: "2322-1-23",
		gregorian: "",
		gtime: 11112619830000
	},
	{
		sdate: "1700-11-05",
		solar: "1700.340",
		stime: 11112706230000,
		gdate: "2322-1-24",
		gregorian: "",
		gtime: 11112706230000
	},
	{
		sdate: "1701-00-01",
		solar: "1701.0",
		stime: 11114862630000,
		gdate: "2322-2-21",
		gregorian: "",
		gtime: 11114862630000
	},
	{
		sdate: "1701-00-02",
		solar: "1701.1",
		stime: 11114949030000,
		gdate: "2322-2-22",
		gregorian: "",
		gtime: 11114949030000
	}
];
