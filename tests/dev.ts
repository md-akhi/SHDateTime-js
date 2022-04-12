import SHDate from "../src/index.js";

// for (let year = 1200; year <= 1700; year += 10) {
// 	for (let month = 0; month <= 12; month += 4) {
// 		for (let day = 1; day <= 31; day += 6) {
// 			let shdate = new SHDate(year, month, day);
// 			console.log(
// 				`${year}-${month}-${day}`,
// 				"\t",
// 				shdate.format("Dow=Diy=Doy=Dim=Wod=Wiy=Woy"),
// 				"\t"
// 			);
// 		}
// 	}
// }

// for (let year = 1395; year <= 1400; year += 1) {
// 	[
// 		[0, 1]
// 		// [0, 2],
// 		// [0, 3],
// 		// [0, 4],
// 		// [0, 5],
// 		// [0, 30],
// 		// [0, 31],

// 		// [1, 1],
// 		// [1, 2],
// 		// [1, 30],
// 		// [1, 31],

// 		// [2, 1],
// 		// [2, 2],
// 		// [2, 30],
// 		// [2, 31],

// 		// [3, 1],
// 		// [3, 2],
// 		// [3, 30],
// 		// [3, 31],

// 		// [4, 1],
// 		// [4, 2],
// 		// [4, 30],
// 		// [4, 31],

// 		// [5, 1],
// 		// [5, 2],
// 		// [5, 30],
// 		// [5, 31],

// 		// [6, 1],
// 		// [6, 2],
// 		// [6, 29],
// 		// [6, 30],

// 		// [7, 1],
// 		// [7, 2],
// 		// [7, 29],
// 		// [7, 30],

// 		// [8, 1],
// 		// [8, 2],
// 		// [8, 29],
// 		// [8, 30],

// 		// [9, 1],
// 		// [9, 2],
// 		// [9, 29],
// 		// [9, 30],

// 		// [10, 1],
// 		// [10, 2],
// 		// [10, 29],
// 		// [10, 30],

// 		// [11, 1],
// 		// [11, 2],
// 		// [11, 26],
// 		// [11, 27],
// 		// [11, 28],
// 		// [11, 29],
// 		// [11, 30]
// 	].forEach(([month, day]) => {
// 		let shdate = new SHDate(year, month, day);
// 		const [years, months, days, Leap] = shdate.format("YY=MM=DD=Leap");
// 		if (month == 11 && day !== parseInt(days)) {
// 			console.log("false");
// 		} else
// 			console.log(
// 				//`${year}/${month}/${day}	`,
// 				`{ solar:[${years},${months},${days}],  Leap:${Leap} }, `
// 			);
// 	});
// }
