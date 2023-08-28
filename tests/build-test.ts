import SHDate from "../src/base";

// for (let year = 1200; year <= 1700; year += 20) {
// 	[
// 		[1, 1],
// 		[1, 2],
// 		[1, 30],
// 		[1, 31],

// 		[2, 1],
// 		[2, 2],
// 		[2, 30],
// 		[2, 31],

// 		[3, 1],
// 		[3, 2],
// 		[3, 30],
// 		[3, 31],

// 		[4, 1],
// 		[4, 2],
// 		[4, 30],
// 		[4, 31],

// 		[5, 1],
// 		[5, 2],
// 		[5, 30],
// 		[5, 31],

// 		[6, 1],
// 		[6, 2],
// 		[6, 29],
// 		[6, 30],

// 		[7, 1],
// 		[7, 2],
// 		[7, 29],
// 		[7, 30],

// 		[8, 1],
// 		[8, 2],
// 		[8, 29],
// 		[8, 30],

// 		[9, 1],
// 		[9, 2],
// 		[9, 29],
// 		[9, 30],

// 		[10, 1],
// 		[10, 2],
// 		[10, 29],
// 		[10, 30],

// 		[11, 1],
// 		[11, 2],
// 		[11, 26],
// 		[11, 27],
// 		[11, 28],
// 		[11, 29],
// 		[11, 30],

// 		[12, 1],
// 		[12, 2],
// 		[12, 3],
// 		[12, 4],
// 		[12, 5],
// 		[12, 30],
// 		[12, 31]
// 	].forEach(([month, day]) => {
// 		let shdate = new SHDate(year, month - 1, day);
// 		const [
// 			years,
// 			months,
// 			days,
// 			hours,
// 			minutes,
// 			seconds,
// 			Dow,
// 			Diy,
// 			Doy,
// 			Dim,
// 			Wiy,
// 			[Woyw, Woyy],
// 			dsn,
// 			msn
// 		] = shdate.format("YY=MM=DD=HH=II=SS=Dow=Diy=Doy=Dim=Wiy=Woy=dsn=msn");

// 		let gdate = new Date();
// 		gdate.setTime(shdate.getTime());
// 		const glongmonth = [
// 			"January",
// 			"February",
// 			"March",
// 			"April",
// 			"May",
// 			"June",
// 			"July",
// 			"August",
// 			"September",
// 			"October",
// 			"November",
// 			"December"
// 		];
// 		const gshortmonths = [
// 			"Jan",
// 			"Feb",
// 			"Mar",
// 			"Apr",
// 			"May",
// 			"Jun",
// 			"Jul",
// 			"Aug",
// 			"Sep",
// 			"Oct",
// 			"Nov",
// 			"Dec"
// 		];
// 		const gweekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// 		const [gyears, gmonths, gdays, ghours, gminutes, gseconds, gdow] = [
// 			gdate.getFullYear(),
// 			gdate.getMonth() + 1,
// 			gdate.getDate(),
// 			gdate.getHours(),
// 			gdate.getMinutes(),
// 			gdate.getSeconds(),
// 			gdate.getDay()
// 		];
// 		if (month == 11 && day !== parseInt(days)) {
// 			console.log("{},");
// 		} else
// 			console.log(
// 				`{
// 					sdate:"${years}-${String(parseInt(months) + 1).padStart(
// 					2,
// 					"0"
// 				)}-${days} ${hours}:${minutes}:${seconds}", solar:"${Woyy}W${String(
// 					Woyw
// 				).padStart(2, "0")}-${Dow}" ,stime:${shdate.getTime()},
// 					gdate:"${String(gyears).padStart(4, "0")}-${String(gmonths).padStart(
// 					2,
// 					"0"
// 				)}-${String(gdays).padStart(2, "0")} ${String(ghours).padStart(
// 					2,
// 					"0"
// 				)}:${String(gminutes).padStart(2, "0")}:${String(gseconds).padStart(
// 					2,
// 					"0"
// 				)}", gregorian:"" ,gtime:${gdate.getTime()}
// 			},`
// 			);
// 	});
// }

// *****************************************************************

for (let year = 1200; year <= 1700; year += 7)
	for (let month = 1; month <= 12; month += 4)
		for (let day = 1; day <= 31; day++) {
			let shdate = new SHDate(year, month, day);
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
			] = shdate.format("YY=MM=DD=HH=II=SS=Dow=Diy=Doy=Dim=Wiy=Woy=dsn=msn");

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
				gdate.getMonth() + 1,
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
						sdate:"${years}-${String(parseInt(months) + 1).padStart(
						2,
						"0"
					)}-${days} ${hours}:${minutes}:${seconds}", solar:"${Woyy}W${String(
						Woyw
					).padStart(2, "0")}-${Dow * 1}" ,stime:${shdate.getTime()},
						gdate:"${String(gyears).padStart(4, "0")}-${String(gmonths).padStart(
						2,
						"0"
					)}-${String(gdays).padStart(2, "0")} ${String(ghours).padStart(
						2,
						"0"
					)}:${String(gminutes).padStart(2, "0")}:${String(gseconds).padStart(
						2,
						"0"
					)}", gregorian:"" ,gtime:${gdate.getTime()}
				},`
				);
		}
