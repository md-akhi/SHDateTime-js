import SHDate from "../src/base";

for (let year = 1200; year <= 1700; year += 20) {
	[
		[0, 1],
		[0, 2],
		[0, 3],
		[0, 4],
		[0, 5],
		[0, 30],
		[0, 31],

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
		[11, 30]
	].forEach(([month, day]) => {
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
			Woy,
			dsn,
			msn
		] = shdate.format("yy=mm=dd=hh=ii=ss=Dow=Diy=Doy=Dim=Wiy=Woy=dsn=msn");
		if (month == 11 && day !== parseInt(days)) {
			console.log("");
		} else
			console.log(
				`{ solar:"${days} ${msn} ,${years}" , time:${shdate.getTime()} },`
			);
	});
}

// for (let day = 12; day <= 15; day++) {
// 	let shdate = new SHDate(1401, 0, day, 0);
// 	console.log(
// 		`${1401}-${0}-${12}`,
// 		"\t",
// 		shdate.getTime() / 86400000,
// 		"\t",
// 		shdate.toString(),
// 		"\t"
// 	);
// }

// for (let year = 1380; year <= 1410; year += 1) {
// 	[
// 		[0, 1],
// 		[0, 31],

// 		[1, 1],
// 		[1, 31],

// 		[2, 1],
// 		[2, 31],

// 		[3, 1],
// 		[3, 31],

// 		[4, 1],
// 		[4, 31],

// 		[5, 1],
// 		[5, 31],

// 		[6, 1],
// 		[6, 30],

// 		[7, 1],
// 		[7, 30],

// 		[8, 1],
// 		[8, 30],

// 		[9, 1],
// 		[9, 30],

// 		[10, 1],
// 		[10, 30],

// 		[11, 1],
// 		[11, 29],
// 		[11, 30]
// 	].forEach(([month, day]) => {
// 		let shdate = new SHDate(year, month, day);
// 		const [
// 			years,
// 			months,
// 			days,
// 			dsn,
// 			dfn,
// 			esn,
// 			efn,
// 			mfn,
// 			msn,
// 			asn,
// 			csn,
// 			ssn,
// 			osn,
// 			sun
// 		] = shdate.format("YY=MM=DD=dsn=dfn=esn=efn=mfn=msn=asn=csn=ssn=osn=sun");
// 		if (month == 11 && day !== parseInt(days)) {
// 			console.log("false");
// 		} else
// 			console.log(
// 				//`${year}/${month}/${day}	`,
// 				`{ solar:[${years},${months},${days}], dsn:"${dsn}", dfn:"${dfn}", esn:"${esn}", efn:"${efn}", mfn:"${mfn}", msn:"${msn}", asn:"${asn}", csn:"${csn}", ssn:"${ssn}", osn:${
// 					osn !== 0 ? `"${osn}"` : 0
// 				}, sun:"${sun}" }, `
// 			);
// 	});
// }
