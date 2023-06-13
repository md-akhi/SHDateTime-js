import SHDate from "../src/base";

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

import parse from "../src/parse.js";
let parser = new parse("1395/12/1"); // Farvardin, 1 Day 1401
console.log(
	parser,
	new Date(parser.time),
	new SHDate(parser.time).toString(),
	JSON.stringify(parser, null, 2)
);
