export const solarDate = [
	/*
for (let year = 1200; year <= 1700; year += 3) {
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
		const [years, months, days, Dow, Diy, Doy, Dim, Wiy, Woy, Leap] =
			shdate.format("YY=MM=DD=Dow=Diy=Doy=Dim=Wiy=Woy=Leap");
		if (month == 11 && day !== parseInt(days)) {
			console.log("false");
		} else
			console.log(
				//`${year}/${month}/${day}	`,
				`{ solar:[${years},${months},${days}], Dow:${Dow}, Diy:${Diy}, Doy:${Doy}, Dim:${Dim}, Wiy:${Wiy}, Woy:[${Woy}], Leap:${Leap} }, `
			);
	});
}
*/
	{
		solar: [1200, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1199],
		Leap: false
	},
	{
		solar: [1200, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1199],
		Leap: false
	},
	{
		solar: [1200, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1199],
		Leap: false
	},
	{
		solar: [1200, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1200],
		Leap: false
	},
	{
		solar: [1200, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1200],
		Leap: false
	},
	{
		solar: [1200, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1200],
		Leap: false
	},
	{
		solar: [1200, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1200],
		Leap: false
	},
	{
		solar: [1200, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1200],
		Leap: false
	},
	{
		solar: [1200, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1200],
		Leap: false
	},
	{
		solar: [1200, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1200],
		Leap: false
	},
	{
		solar: [1200, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1200],
		Leap: false
	},
	{
		solar: [1200, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1200],
		Leap: false
	},
	{
		solar: [1200, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1200],
		Leap: false
	},
	{
		solar: [1200, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1200],
		Leap: false
	},
	{
		solar: [1200, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1200],
		Leap: false
	},
	{
		solar: [1200, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1200],
		Leap: false
	},
	{
		solar: [1200, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1200],
		Leap: false
	},
	{
		solar: [1200, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1200],
		Leap: false
	},
	{
		solar: [1200, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1200],
		Leap: false
	},
	{
		solar: [1200, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1200],
		Leap: false
	},
	{
		solar: [1200, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1200],
		Leap: false
	},
	{
		solar: [1200, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1200],
		Leap: false
	},
	{
		solar: [1200, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1200],
		Leap: false
	},
	{
		solar: [1200, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1200],
		Leap: false
	},
	{
		solar: [1200, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1200],
		Leap: false
	},
	{
		solar: [1200, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1200],
		Leap: false
	},
	{
		solar: [1200, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1200],
		Leap: false
	},
	{
		solar: [1200, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1200],
		Leap: false
	},
	{
		solar: [1200, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1200],
		Leap: false
	},
	{
		solar: [1200, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1200],
		Leap: false
	},
	{
		solar: [1200, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1200],
		Leap: false
	},
	{
		solar: [1200, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1200],
		Leap: false
	},
	{
		solar: [1200, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1200],
		Leap: false
	},
	{
		solar: [1200, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1200],
		Leap: false
	},
	{
		solar: [1200, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1200],
		Leap: false
	},
	{
		solar: [1200, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1200],
		Leap: false
	},
	{
		solar: [1200, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1200],
		Leap: false
	},
	{
		solar: [1200, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1200],
		Leap: false
	},
	{
		solar: [1200, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1200],
		Leap: false
	},
	{
		solar: [1200, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1200],
		Leap: false
	},
	{
		solar: [1200, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1200],
		Leap: false
	},
	{
		solar: [1200, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1200],
		Leap: false
	},
	{
		solar: [1200, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1200],
		Leap: false
	},
	{
		solar: [1200, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1200],
		Leap: false
	},
	{
		solar: [1200, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1200],
		Leap: false
	},
	{
		solar: [1200, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1200],
		Leap: false
	},
	{
		solar: [1200, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1200],
		Leap: false
	},
	{
		solar: [1200, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1200],
		Leap: false
	},
	{
		solar: [1200, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1200],
		Leap: false
	},
	{
		solar: [1200, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1200],
		Leap: false
	},
	{
		solar: [1200, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1200],
		Leap: false
	},
	{
		solar: [1200, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1200],
		Leap: false
	},
	{
		solar: [1200, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1200],
		Leap: false
	},
	{
		solar: [1203, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1203],
		Leap: false
	},
	{
		solar: [1203, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1203],
		Leap: false
	},
	{
		solar: [1203, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1203],
		Leap: false
	},
	{
		solar: [1203, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1203],
		Leap: false
	},
	{
		solar: [1203, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1203],
		Leap: false
	},
	{
		solar: [1203, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1203],
		Leap: false
	},
	{
		solar: [1203, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1203],
		Leap: false
	},
	{
		solar: [1203, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1203],
		Leap: false
	},
	{
		solar: [1203, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1203],
		Leap: false
	},
	{
		solar: [1203, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1203],
		Leap: false
	},
	{
		solar: [1203, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1203],
		Leap: false
	},
	{
		solar: [1203, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1203],
		Leap: false
	},
	{
		solar: [1203, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1203],
		Leap: false
	},
	{
		solar: [1203, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1203],
		Leap: false
	},
	{
		solar: [1203, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1203],
		Leap: false
	},
	{
		solar: [1203, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1203],
		Leap: false
	},
	{
		solar: [1203, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1203],
		Leap: false
	},
	{
		solar: [1203, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1203],
		Leap: false
	},
	{
		solar: [1203, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1203],
		Leap: false
	},
	{
		solar: [1203, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1203],
		Leap: false
	},
	{
		solar: [1203, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1203],
		Leap: false
	},
	{
		solar: [1203, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1203],
		Leap: false
	},
	{
		solar: [1203, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1203],
		Leap: false
	},
	{
		solar: [1203, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1203],
		Leap: false
	},
	{
		solar: [1203, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1203],
		Leap: false
	},
	{
		solar: [1203, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1203],
		Leap: false
	},
	{
		solar: [1203, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1203],
		Leap: false
	},
	{
		solar: [1203, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1203],
		Leap: false
	},
	{
		solar: [1203, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1203],
		Leap: false
	},
	{
		solar: [1203, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1203],
		Leap: false
	},
	{
		solar: [1203, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1203],
		Leap: false
	},
	{
		solar: [1203, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1203],
		Leap: false
	},
	{
		solar: [1203, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1203],
		Leap: false
	},
	{
		solar: [1203, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1203],
		Leap: false
	},
	{
		solar: [1203, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1203],
		Leap: false
	},
	{
		solar: [1203, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1203],
		Leap: false
	},
	{
		solar: [1203, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1203],
		Leap: false
	},
	{
		solar: [1203, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1203],
		Leap: false
	},
	{
		solar: [1203, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1203],
		Leap: false
	},
	{
		solar: [1203, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1203],
		Leap: false
	},
	{
		solar: [1203, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1203],
		Leap: false
	},
	{
		solar: [1203, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1203],
		Leap: false
	},
	{
		solar: [1203, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1203],
		Leap: false
	},
	{
		solar: [1203, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1203],
		Leap: false
	},
	{
		solar: [1203, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1203],
		Leap: false
	},
	{
		solar: [1203, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1203],
		Leap: false
	},
	{
		solar: [1203, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1203],
		Leap: false
	},
	{
		solar: [1203, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1203],
		Leap: false
	},
	{
		solar: [1203, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1203],
		Leap: false
	},
	{
		solar: [1203, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1203],
		Leap: false
	},
	{
		solar: [1203, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1203],
		Leap: false
	},
	{
		solar: [1203, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1204],
		Leap: false
	},
	{
		solar: [1203, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1204],
		Leap: false
	},
	{
		solar: [1206, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1205],
		Leap: false
	},
	{
		solar: [1206, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1205],
		Leap: false
	},
	{
		solar: [1206, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1206],
		Leap: false
	},
	{
		solar: [1206, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1206],
		Leap: false
	},
	{
		solar: [1206, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1206],
		Leap: false
	},
	{
		solar: [1206, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1206],
		Leap: false
	},
	{
		solar: [1206, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1206],
		Leap: false
	},
	{
		solar: [1206, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1206],
		Leap: false
	},
	{
		solar: [1206, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1206],
		Leap: false
	},
	{
		solar: [1206, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1206],
		Leap: false
	},
	{
		solar: [1206, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1206],
		Leap: false
	},
	{
		solar: [1206, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1206],
		Leap: false
	},
	{
		solar: [1206, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1206],
		Leap: false
	},
	{
		solar: [1206, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1206],
		Leap: false
	},
	{
		solar: [1206, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1206],
		Leap: false
	},
	{
		solar: [1206, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1206],
		Leap: false
	},
	{
		solar: [1206, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1206],
		Leap: false
	},
	{
		solar: [1206, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1206],
		Leap: false
	},
	{
		solar: [1206, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1206],
		Leap: false
	},
	{
		solar: [1206, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1206],
		Leap: false
	},
	{
		solar: [1206, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1206],
		Leap: false
	},
	{
		solar: [1206, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1206],
		Leap: false
	},
	{
		solar: [1206, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1206],
		Leap: false
	},
	{
		solar: [1206, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1206],
		Leap: false
	},
	{
		solar: [1206, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1206],
		Leap: false
	},
	{
		solar: [1206, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1206],
		Leap: false
	},
	{
		solar: [1206, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1206],
		Leap: false
	},
	{
		solar: [1206, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1206],
		Leap: false
	},
	{
		solar: [1206, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1206],
		Leap: false
	},
	{
		solar: [1206, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1206],
		Leap: false
	},
	{
		solar: [1206, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1206],
		Leap: false
	},
	{
		solar: [1206, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1206],
		Leap: false
	},
	{
		solar: [1206, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1206],
		Leap: false
	},
	{
		solar: [1206, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1206],
		Leap: false
	},
	{
		solar: [1206, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1206],
		Leap: false
	},
	{
		solar: [1206, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1206],
		Leap: false
	},
	{
		solar: [1206, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1206],
		Leap: false
	},
	{
		solar: [1206, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1206],
		Leap: false
	},
	{
		solar: [1206, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1206],
		Leap: false
	},
	{
		solar: [1206, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1206],
		Leap: false
	},
	{
		solar: [1206, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1206],
		Leap: false
	},
	{
		solar: [1206, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1206],
		Leap: false
	},
	{
		solar: [1206, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1206],
		Leap: false
	},
	{
		solar: [1206, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1206],
		Leap: false
	},
	{
		solar: [1206, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1206],
		Leap: false
	},
	{
		solar: [1206, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1206],
		Leap: false
	},
	{
		solar: [1206, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1206],
		Leap: false
	},
	{
		solar: [1206, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1206],
		Leap: false
	},
	{
		solar: [1206, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1206],
		Leap: false
	},
	{
		solar: [1206, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1206],
		Leap: false
	},
	{
		solar: [1206, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1206],
		Leap: false
	},
	{
		solar: [1206, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1206],
		Leap: false
	},
	{
		solar: [1206, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1206],
		Leap: false
	},
	{
		solar: [1209, 0, 1],
		Dow: 1,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1209],
		Leap: true
	},
	{
		solar: [1209, 0, 2],
		Dow: 2,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1209],
		Leap: true
	},
	{
		solar: [1209, 0, 3],
		Dow: 3,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1209],
		Leap: true
	},
	{
		solar: [1209, 0, 4],
		Dow: 4,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1209],
		Leap: true
	},
	{
		solar: [1209, 0, 5],
		Dow: 5,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1209],
		Leap: true
	},
	{
		solar: [1209, 0, 30],
		Dow: 2,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1209],
		Leap: true
	},
	{
		solar: [1209, 0, 31],
		Dow: 3,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1209],
		Leap: true
	},
	{
		solar: [1209, 1, 1],
		Dow: 4,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1209],
		Leap: true
	},
	{
		solar: [1209, 1, 2],
		Dow: 5,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1209],
		Leap: true
	},
	{
		solar: [1209, 1, 30],
		Dow: 5,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1209],
		Leap: true
	},
	{
		solar: [1209, 1, 31],
		Dow: 6,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1209],
		Leap: true
	},
	{
		solar: [1209, 2, 1],
		Dow: 0,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1209],
		Leap: true
	},
	{
		solar: [1209, 2, 2],
		Dow: 1,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1209],
		Leap: true
	},
	{
		solar: [1209, 2, 30],
		Dow: 1,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1209],
		Leap: true
	},
	{
		solar: [1209, 2, 31],
		Dow: 2,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1209],
		Leap: true
	},
	{
		solar: [1209, 3, 1],
		Dow: 3,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1209],
		Leap: true
	},
	{
		solar: [1209, 3, 2],
		Dow: 4,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1209],
		Leap: true
	},
	{
		solar: [1209, 3, 30],
		Dow: 4,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1209],
		Leap: true
	},
	{
		solar: [1209, 3, 31],
		Dow: 5,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1209],
		Leap: true
	},
	{
		solar: [1209, 4, 1],
		Dow: 6,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1209],
		Leap: true
	},
	{
		solar: [1209, 4, 2],
		Dow: 0,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1209],
		Leap: true
	},
	{
		solar: [1209, 4, 30],
		Dow: 0,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1209],
		Leap: true
	},
	{
		solar: [1209, 4, 31],
		Dow: 1,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1209],
		Leap: true
	},
	{
		solar: [1209, 5, 1],
		Dow: 2,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1209],
		Leap: true
	},
	{
		solar: [1209, 5, 2],
		Dow: 3,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1209],
		Leap: true
	},
	{
		solar: [1209, 5, 30],
		Dow: 3,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1209],
		Leap: true
	},
	{
		solar: [1209, 5, 31],
		Dow: 4,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1209],
		Leap: true
	},
	{
		solar: [1209, 6, 1],
		Dow: 5,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1209],
		Leap: true
	},
	{
		solar: [1209, 6, 2],
		Dow: 6,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1209],
		Leap: true
	},
	{
		solar: [1209, 6, 29],
		Dow: 5,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1209],
		Leap: true
	},
	{
		solar: [1209, 6, 30],
		Dow: 6,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1209],
		Leap: true
	},
	{
		solar: [1209, 7, 1],
		Dow: 0,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1209],
		Leap: true
	},
	{
		solar: [1209, 7, 2],
		Dow: 1,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1209],
		Leap: true
	},
	{
		solar: [1209, 7, 29],
		Dow: 0,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1209],
		Leap: true
	},
	{
		solar: [1209, 7, 30],
		Dow: 1,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1209],
		Leap: true
	},
	{
		solar: [1209, 8, 1],
		Dow: 2,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1209],
		Leap: true
	},
	{
		solar: [1209, 8, 2],
		Dow: 3,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1209],
		Leap: true
	},
	{
		solar: [1209, 8, 29],
		Dow: 2,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1209],
		Leap: true
	},
	{
		solar: [1209, 8, 30],
		Dow: 3,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1209],
		Leap: true
	},
	{
		solar: [1209, 9, 1],
		Dow: 4,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1209],
		Leap: true
	},
	{
		solar: [1209, 9, 2],
		Dow: 5,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1209],
		Leap: true
	},
	{
		solar: [1209, 9, 29],
		Dow: 4,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1209],
		Leap: true
	},
	{
		solar: [1209, 9, 30],
		Dow: 5,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1209],
		Leap: true
	},
	{
		solar: [1209, 10, 1],
		Dow: 6,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1209],
		Leap: true
	},
	{
		solar: [1209, 10, 2],
		Dow: 0,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1209],
		Leap: true
	},
	{
		solar: [1209, 10, 29],
		Dow: 6,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1209],
		Leap: true
	},
	{
		solar: [1209, 10, 30],
		Dow: 0,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1209],
		Leap: true
	},
	{
		solar: [1209, 11, 1],
		Dow: 1,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1209],
		Leap: true
	},
	{
		solar: [1209, 11, 2],
		Dow: 2,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1209],
		Leap: true
	},
	{
		solar: [1209, 11, 26],
		Dow: 5,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1209],
		Leap: true
	},
	{
		solar: [1209, 11, 27],
		Dow: 6,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1209],
		Leap: true
	},
	{
		solar: [1209, 11, 28],
		Dow: 0,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1210],
		Leap: true
	},
	{
		solar: [1209, 11, 29],
		Dow: 1,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1210],
		Leap: true
	},
	{
		solar: [1209, 11, 30],
		Dow: 2,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1210],
		Leap: true
	},
	{
		solar: [1212, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1211],
		Leap: false
	},
	{
		solar: [1212, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1211],
		Leap: false
	},
	{
		solar: [1212, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1212],
		Leap: false
	},
	{
		solar: [1212, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1212],
		Leap: false
	},
	{
		solar: [1212, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1212],
		Leap: false
	},
	{
		solar: [1212, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1212],
		Leap: false
	},
	{
		solar: [1212, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1212],
		Leap: false
	},
	{
		solar: [1212, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1212],
		Leap: false
	},
	{
		solar: [1212, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1212],
		Leap: false
	},
	{
		solar: [1212, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1212],
		Leap: false
	},
	{
		solar: [1212, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1212],
		Leap: false
	},
	{
		solar: [1212, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1212],
		Leap: false
	},
	{
		solar: [1212, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1212],
		Leap: false
	},
	{
		solar: [1212, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1212],
		Leap: false
	},
	{
		solar: [1212, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1212],
		Leap: false
	},
	{
		solar: [1212, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1212],
		Leap: false
	},
	{
		solar: [1212, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1212],
		Leap: false
	},
	{
		solar: [1212, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1212],
		Leap: false
	},
	{
		solar: [1212, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1212],
		Leap: false
	},
	{
		solar: [1212, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1212],
		Leap: false
	},
	{
		solar: [1212, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1212],
		Leap: false
	},
	{
		solar: [1212, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1212],
		Leap: false
	},
	{
		solar: [1212, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1212],
		Leap: false
	},
	{
		solar: [1212, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1212],
		Leap: false
	},
	{
		solar: [1212, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1212],
		Leap: false
	},
	{
		solar: [1212, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1212],
		Leap: false
	},
	{
		solar: [1212, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1212],
		Leap: false
	},
	{
		solar: [1212, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1212],
		Leap: false
	},
	{
		solar: [1212, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1212],
		Leap: false
	},
	{
		solar: [1212, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1212],
		Leap: false
	},
	{
		solar: [1212, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1212],
		Leap: false
	},
	{
		solar: [1212, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1212],
		Leap: false
	},
	{
		solar: [1212, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1212],
		Leap: false
	},
	{
		solar: [1212, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1212],
		Leap: false
	},
	{
		solar: [1212, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1212],
		Leap: false
	},
	{
		solar: [1212, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1212],
		Leap: false
	},
	{
		solar: [1212, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1212],
		Leap: false
	},
	{
		solar: [1212, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1212],
		Leap: false
	},
	{
		solar: [1212, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1212],
		Leap: false
	},
	{
		solar: [1212, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1212],
		Leap: false
	},
	{
		solar: [1212, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1212],
		Leap: false
	},
	{
		solar: [1212, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1212],
		Leap: false
	},
	{
		solar: [1212, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1212],
		Leap: false
	},
	{
		solar: [1212, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1212],
		Leap: false
	},
	{
		solar: [1212, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1212],
		Leap: false
	},
	{
		solar: [1212, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1212],
		Leap: false
	},
	{
		solar: [1212, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1212],
		Leap: false
	},
	{
		solar: [1212, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1212],
		Leap: false
	},
	{
		solar: [1212, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1212],
		Leap: false
	},
	{
		solar: [1212, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1212],
		Leap: false
	},
	{
		solar: [1212, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1212],
		Leap: false
	},
	{
		solar: [1212, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1212],
		Leap: false
	},
	{
		solar: [1212, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1212],
		Leap: false
	},
	{
		solar: [1215, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1215],
		Leap: false
	},
	{
		solar: [1215, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1215],
		Leap: false
	},
	{
		solar: [1215, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1215],
		Leap: false
	},
	{
		solar: [1215, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1215],
		Leap: false
	},
	{
		solar: [1215, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1215],
		Leap: false
	},
	{
		solar: [1215, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1215],
		Leap: false
	},
	{
		solar: [1215, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1215],
		Leap: false
	},
	{
		solar: [1215, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1215],
		Leap: false
	},
	{
		solar: [1215, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1215],
		Leap: false
	},
	{
		solar: [1215, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1215],
		Leap: false
	},
	{
		solar: [1215, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1215],
		Leap: false
	},
	{
		solar: [1215, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1215],
		Leap: false
	},
	{
		solar: [1215, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1215],
		Leap: false
	},
	{
		solar: [1215, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1215],
		Leap: false
	},
	{
		solar: [1215, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1215],
		Leap: false
	},
	{
		solar: [1215, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1215],
		Leap: false
	},
	{
		solar: [1215, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1215],
		Leap: false
	},
	{
		solar: [1215, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1215],
		Leap: false
	},
	{
		solar: [1215, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1215],
		Leap: false
	},
	{
		solar: [1215, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1215],
		Leap: false
	},
	{
		solar: [1215, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1215],
		Leap: false
	},
	{
		solar: [1215, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1215],
		Leap: false
	},
	{
		solar: [1215, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1215],
		Leap: false
	},
	{
		solar: [1215, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1215],
		Leap: false
	},
	{
		solar: [1215, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1215],
		Leap: false
	},
	{
		solar: [1215, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1215],
		Leap: false
	},
	{
		solar: [1215, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1215],
		Leap: false
	},
	{
		solar: [1215, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1215],
		Leap: false
	},
	{
		solar: [1215, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1215],
		Leap: false
	},
	{
		solar: [1215, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1215],
		Leap: false
	},
	{
		solar: [1215, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1215],
		Leap: false
	},
	{
		solar: [1215, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1215],
		Leap: false
	},
	{
		solar: [1215, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1215],
		Leap: false
	},
	{
		solar: [1215, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1215],
		Leap: false
	},
	{
		solar: [1215, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1215],
		Leap: false
	},
	{
		solar: [1215, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1215],
		Leap: false
	},
	{
		solar: [1215, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1215],
		Leap: false
	},
	{
		solar: [1215, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1215],
		Leap: false
	},
	{
		solar: [1215, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1215],
		Leap: false
	},
	{
		solar: [1215, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1215],
		Leap: false
	},
	{
		solar: [1215, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1215],
		Leap: false
	},
	{
		solar: [1215, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1215],
		Leap: false
	},
	{
		solar: [1215, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1215],
		Leap: false
	},
	{
		solar: [1215, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1215],
		Leap: false
	},
	{
		solar: [1215, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1215],
		Leap: false
	},
	{
		solar: [1215, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1215],
		Leap: false
	},
	{
		solar: [1215, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1215],
		Leap: false
	},
	{
		solar: [1215, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1215],
		Leap: false
	},
	{
		solar: [1215, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1215],
		Leap: false
	},
	{
		solar: [1215, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1215],
		Leap: false
	},
	{
		solar: [1215, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1216],
		Leap: false
	},
	{
		solar: [1215, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1216],
		Leap: false
	},
	{
		solar: [1215, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1216],
		Leap: false
	},
	{
		solar: [1218, 0, 1],
		Dow: 5,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1217],
		Leap: true
	},
	{
		solar: [1218, 0, 2],
		Dow: 6,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1217],
		Leap: true
	},
	{
		solar: [1218, 0, 3],
		Dow: 0,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1218],
		Leap: true
	},
	{
		solar: [1218, 0, 4],
		Dow: 1,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1218],
		Leap: true
	},
	{
		solar: [1218, 0, 5],
		Dow: 2,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1218],
		Leap: true
	},
	{
		solar: [1218, 0, 30],
		Dow: 6,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1218],
		Leap: true
	},
	{
		solar: [1218, 0, 31],
		Dow: 0,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1218],
		Leap: true
	},
	{
		solar: [1218, 1, 1],
		Dow: 1,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1218],
		Leap: true
	},
	{
		solar: [1218, 1, 2],
		Dow: 2,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1218],
		Leap: true
	},
	{
		solar: [1218, 1, 30],
		Dow: 2,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1218],
		Leap: true
	},
	{
		solar: [1218, 1, 31],
		Dow: 3,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1218],
		Leap: true
	},
	{
		solar: [1218, 2, 1],
		Dow: 4,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1218],
		Leap: true
	},
	{
		solar: [1218, 2, 2],
		Dow: 5,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1218],
		Leap: true
	},
	{
		solar: [1218, 2, 30],
		Dow: 5,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1218],
		Leap: true
	},
	{
		solar: [1218, 2, 31],
		Dow: 6,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1218],
		Leap: true
	},
	{
		solar: [1218, 3, 1],
		Dow: 0,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1218],
		Leap: true
	},
	{
		solar: [1218, 3, 2],
		Dow: 1,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1218],
		Leap: true
	},
	{
		solar: [1218, 3, 30],
		Dow: 1,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1218],
		Leap: true
	},
	{
		solar: [1218, 3, 31],
		Dow: 2,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1218],
		Leap: true
	},
	{
		solar: [1218, 4, 1],
		Dow: 3,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1218],
		Leap: true
	},
	{
		solar: [1218, 4, 2],
		Dow: 4,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1218],
		Leap: true
	},
	{
		solar: [1218, 4, 30],
		Dow: 4,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1218],
		Leap: true
	},
	{
		solar: [1218, 4, 31],
		Dow: 5,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1218],
		Leap: true
	},
	{
		solar: [1218, 5, 1],
		Dow: 6,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1218],
		Leap: true
	},
	{
		solar: [1218, 5, 2],
		Dow: 0,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1218],
		Leap: true
	},
	{
		solar: [1218, 5, 30],
		Dow: 0,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1218],
		Leap: true
	},
	{
		solar: [1218, 5, 31],
		Dow: 1,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1218],
		Leap: true
	},
	{
		solar: [1218, 6, 1],
		Dow: 2,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1218],
		Leap: true
	},
	{
		solar: [1218, 6, 2],
		Dow: 3,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1218],
		Leap: true
	},
	{
		solar: [1218, 6, 29],
		Dow: 2,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1218],
		Leap: true
	},
	{
		solar: [1218, 6, 30],
		Dow: 3,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1218],
		Leap: true
	},
	{
		solar: [1218, 7, 1],
		Dow: 4,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1218],
		Leap: true
	},
	{
		solar: [1218, 7, 2],
		Dow: 5,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1218],
		Leap: true
	},
	{
		solar: [1218, 7, 29],
		Dow: 4,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1218],
		Leap: true
	},
	{
		solar: [1218, 7, 30],
		Dow: 5,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1218],
		Leap: true
	},
	{
		solar: [1218, 8, 1],
		Dow: 6,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1218],
		Leap: true
	},
	{
		solar: [1218, 8, 2],
		Dow: 0,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1218],
		Leap: true
	},
	{
		solar: [1218, 8, 29],
		Dow: 6,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1218],
		Leap: true
	},
	{
		solar: [1218, 8, 30],
		Dow: 0,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1218],
		Leap: true
	},
	{
		solar: [1218, 9, 1],
		Dow: 1,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1218],
		Leap: true
	},
	{
		solar: [1218, 9, 2],
		Dow: 2,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1218],
		Leap: true
	},
	{
		solar: [1218, 9, 29],
		Dow: 1,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1218],
		Leap: true
	},
	{
		solar: [1218, 9, 30],
		Dow: 2,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1218],
		Leap: true
	},
	{
		solar: [1218, 10, 1],
		Dow: 3,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1218],
		Leap: true
	},
	{
		solar: [1218, 10, 2],
		Dow: 4,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1218],
		Leap: true
	},
	{
		solar: [1218, 10, 29],
		Dow: 3,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1218],
		Leap: true
	},
	{
		solar: [1218, 10, 30],
		Dow: 4,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1218],
		Leap: true
	},
	{
		solar: [1218, 11, 1],
		Dow: 5,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1218],
		Leap: true
	},
	{
		solar: [1218, 11, 2],
		Dow: 6,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1218],
		Leap: true
	},
	{
		solar: [1218, 11, 26],
		Dow: 2,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1218],
		Leap: true
	},
	{
		solar: [1218, 11, 27],
		Dow: 3,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1218],
		Leap: true
	},
	{
		solar: [1218, 11, 28],
		Dow: 4,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1218],
		Leap: true
	},
	{
		solar: [1218, 11, 29],
		Dow: 5,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1218],
		Leap: true
	},
	{
		solar: [1218, 11, 30],
		Dow: 6,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1218],
		Leap: true
	},
	{
		solar: [1221, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1221],
		Leap: false
	},
	{
		solar: [1221, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1221],
		Leap: false
	},
	{
		solar: [1221, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1221],
		Leap: false
	},
	{
		solar: [1221, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1221],
		Leap: false
	},
	{
		solar: [1221, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1221],
		Leap: false
	},
	{
		solar: [1221, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1221],
		Leap: false
	},
	{
		solar: [1221, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1221],
		Leap: false
	},
	{
		solar: [1221, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1221],
		Leap: false
	},
	{
		solar: [1221, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1221],
		Leap: false
	},
	{
		solar: [1221, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1221],
		Leap: false
	},
	{
		solar: [1221, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1221],
		Leap: false
	},
	{
		solar: [1221, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1221],
		Leap: false
	},
	{
		solar: [1221, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1221],
		Leap: false
	},
	{
		solar: [1221, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1221],
		Leap: false
	},
	{
		solar: [1221, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1221],
		Leap: false
	},
	{
		solar: [1221, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1221],
		Leap: false
	},
	{
		solar: [1221, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1221],
		Leap: false
	},
	{
		solar: [1221, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1221],
		Leap: false
	},
	{
		solar: [1221, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1221],
		Leap: false
	},
	{
		solar: [1221, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1221],
		Leap: false
	},
	{
		solar: [1221, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1221],
		Leap: false
	},
	{
		solar: [1221, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1221],
		Leap: false
	},
	{
		solar: [1221, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1221],
		Leap: false
	},
	{
		solar: [1221, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1221],
		Leap: false
	},
	{
		solar: [1221, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1221],
		Leap: false
	},
	{
		solar: [1221, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1221],
		Leap: false
	},
	{
		solar: [1221, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1221],
		Leap: false
	},
	{
		solar: [1221, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1221],
		Leap: false
	},
	{
		solar: [1221, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1221],
		Leap: false
	},
	{
		solar: [1221, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1221],
		Leap: false
	},
	{
		solar: [1221, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1221],
		Leap: false
	},
	{
		solar: [1221, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1221],
		Leap: false
	},
	{
		solar: [1221, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1221],
		Leap: false
	},
	{
		solar: [1221, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1221],
		Leap: false
	},
	{
		solar: [1221, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1221],
		Leap: false
	},
	{
		solar: [1221, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1221],
		Leap: false
	},
	{
		solar: [1221, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1221],
		Leap: false
	},
	{
		solar: [1221, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1221],
		Leap: false
	},
	{
		solar: [1221, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1221],
		Leap: false
	},
	{
		solar: [1221, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1221],
		Leap: false
	},
	{
		solar: [1221, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1221],
		Leap: false
	},
	{
		solar: [1221, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1221],
		Leap: false
	},
	{
		solar: [1221, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1221],
		Leap: false
	},
	{
		solar: [1221, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1221],
		Leap: false
	},
	{
		solar: [1221, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1221],
		Leap: false
	},
	{
		solar: [1221, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1221],
		Leap: false
	},
	{
		solar: [1221, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1221],
		Leap: false
	},
	{
		solar: [1221, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1221],
		Leap: false
	},
	{
		solar: [1221, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1221],
		Leap: false
	},
	{
		solar: [1221, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1221],
		Leap: false
	},
	{
		solar: [1221, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1222],
		Leap: false
	},
	{
		solar: [1221, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1222],
		Leap: false
	},
	{
		solar: [1221, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1222],
		Leap: false
	},
	{
		solar: [1224, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1223],
		Leap: false
	},
	{
		solar: [1224, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1224],
		Leap: false
	},
	{
		solar: [1224, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1224],
		Leap: false
	},
	{
		solar: [1224, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1224],
		Leap: false
	},
	{
		solar: [1224, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1224],
		Leap: false
	},
	{
		solar: [1224, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1224],
		Leap: false
	},
	{
		solar: [1224, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1224],
		Leap: false
	},
	{
		solar: [1224, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1224],
		Leap: false
	},
	{
		solar: [1224, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1224],
		Leap: false
	},
	{
		solar: [1224, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1224],
		Leap: false
	},
	{
		solar: [1224, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1224],
		Leap: false
	},
	{
		solar: [1224, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1224],
		Leap: false
	},
	{
		solar: [1224, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1224],
		Leap: false
	},
	{
		solar: [1224, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1224],
		Leap: false
	},
	{
		solar: [1224, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1224],
		Leap: false
	},
	{
		solar: [1224, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1224],
		Leap: false
	},
	{
		solar: [1224, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1224],
		Leap: false
	},
	{
		solar: [1224, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1224],
		Leap: false
	},
	{
		solar: [1224, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1224],
		Leap: false
	},
	{
		solar: [1224, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1224],
		Leap: false
	},
	{
		solar: [1224, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1224],
		Leap: false
	},
	{
		solar: [1224, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1224],
		Leap: false
	},
	{
		solar: [1224, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1224],
		Leap: false
	},
	{
		solar: [1224, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1224],
		Leap: false
	},
	{
		solar: [1224, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1224],
		Leap: false
	},
	{
		solar: [1224, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1224],
		Leap: false
	},
	{
		solar: [1224, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1224],
		Leap: false
	},
	{
		solar: [1224, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1224],
		Leap: false
	},
	{
		solar: [1224, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1224],
		Leap: false
	},
	{
		solar: [1224, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1224],
		Leap: false
	},
	{
		solar: [1224, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1224],
		Leap: false
	},
	{
		solar: [1224, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1224],
		Leap: false
	},
	{
		solar: [1224, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1224],
		Leap: false
	},
	{
		solar: [1224, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1224],
		Leap: false
	},
	{
		solar: [1224, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1224],
		Leap: false
	},
	{
		solar: [1224, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1224],
		Leap: false
	},
	{
		solar: [1224, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1224],
		Leap: false
	},
	{
		solar: [1224, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1224],
		Leap: false
	},
	{
		solar: [1224, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1224],
		Leap: false
	},
	{
		solar: [1224, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1224],
		Leap: false
	},
	{
		solar: [1224, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1224],
		Leap: false
	},
	{
		solar: [1224, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1224],
		Leap: false
	},
	{
		solar: [1224, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1224],
		Leap: false
	},
	{
		solar: [1224, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1224],
		Leap: false
	},
	{
		solar: [1224, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1224],
		Leap: false
	},
	{
		solar: [1224, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1224],
		Leap: false
	},
	{
		solar: [1224, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1224],
		Leap: false
	},
	{
		solar: [1224, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1224],
		Leap: false
	},
	{
		solar: [1224, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1224],
		Leap: false
	},
	{
		solar: [1224, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1224],
		Leap: false
	},
	{
		solar: [1224, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1224],
		Leap: false
	},
	{
		solar: [1224, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1224],
		Leap: false
	},
	{
		solar: [1224, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1224],
		Leap: false
	},
	{
		solar: [1227, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1227],
		Leap: false
	},
	{
		solar: [1227, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1227],
		Leap: false
	},
	{
		solar: [1227, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1227],
		Leap: false
	},
	{
		solar: [1227, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1227],
		Leap: false
	},
	{
		solar: [1227, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1227],
		Leap: false
	},
	{
		solar: [1227, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1227],
		Leap: false
	},
	{
		solar: [1227, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1227],
		Leap: false
	},
	{
		solar: [1227, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1227],
		Leap: false
	},
	{
		solar: [1227, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1227],
		Leap: false
	},
	{
		solar: [1227, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1227],
		Leap: false
	},
	{
		solar: [1227, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1227],
		Leap: false
	},
	{
		solar: [1227, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1227],
		Leap: false
	},
	{
		solar: [1227, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1227],
		Leap: false
	},
	{
		solar: [1227, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1227],
		Leap: false
	},
	{
		solar: [1227, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1227],
		Leap: false
	},
	{
		solar: [1227, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1227],
		Leap: false
	},
	{
		solar: [1227, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1227],
		Leap: false
	},
	{
		solar: [1227, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1227],
		Leap: false
	},
	{
		solar: [1227, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1227],
		Leap: false
	},
	{
		solar: [1227, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1227],
		Leap: false
	},
	{
		solar: [1227, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1227],
		Leap: false
	},
	{
		solar: [1227, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1227],
		Leap: false
	},
	{
		solar: [1227, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1227],
		Leap: false
	},
	{
		solar: [1227, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1227],
		Leap: false
	},
	{
		solar: [1227, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1227],
		Leap: false
	},
	{
		solar: [1227, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1227],
		Leap: false
	},
	{
		solar: [1227, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1227],
		Leap: false
	},
	{
		solar: [1227, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1227],
		Leap: false
	},
	{
		solar: [1227, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1227],
		Leap: false
	},
	{
		solar: [1227, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1227],
		Leap: false
	},
	{
		solar: [1227, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1227],
		Leap: false
	},
	{
		solar: [1227, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1227],
		Leap: false
	},
	{
		solar: [1227, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1227],
		Leap: false
	},
	{
		solar: [1227, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1227],
		Leap: false
	},
	{
		solar: [1227, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1227],
		Leap: false
	},
	{
		solar: [1227, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1227],
		Leap: false
	},
	{
		solar: [1227, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1227],
		Leap: false
	},
	{
		solar: [1227, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1227],
		Leap: false
	},
	{
		solar: [1227, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1227],
		Leap: false
	},
	{
		solar: [1227, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1227],
		Leap: false
	},
	{
		solar: [1227, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1227],
		Leap: false
	},
	{
		solar: [1227, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1227],
		Leap: false
	},
	{
		solar: [1227, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1227],
		Leap: false
	},
	{
		solar: [1227, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1227],
		Leap: false
	},
	{
		solar: [1227, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1227],
		Leap: false
	},
	{
		solar: [1227, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1227],
		Leap: false
	},
	{
		solar: [1227, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1227],
		Leap: false
	},
	{
		solar: [1227, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1227],
		Leap: false
	},
	{
		solar: [1227, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1227],
		Leap: false
	},
	{
		solar: [1227, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1227],
		Leap: false
	},
	{
		solar: [1227, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1227],
		Leap: false
	},
	{
		solar: [1227, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1227],
		Leap: false
	},
	{
		solar: [1227, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1227],
		Leap: false
	},
	{
		solar: [1230, 0, 1],
		Dow: 6,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1229],
		Leap: true
	},
	{
		solar: [1230, 0, 2],
		Dow: 0,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1230],
		Leap: true
	},
	{
		solar: [1230, 0, 3],
		Dow: 1,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1230],
		Leap: true
	},
	{
		solar: [1230, 0, 4],
		Dow: 2,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1230],
		Leap: true
	},
	{
		solar: [1230, 0, 5],
		Dow: 3,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1230],
		Leap: true
	},
	{
		solar: [1230, 0, 30],
		Dow: 0,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1230],
		Leap: true
	},
	{
		solar: [1230, 0, 31],
		Dow: 1,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1230],
		Leap: true
	},
	{
		solar: [1230, 1, 1],
		Dow: 2,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1230],
		Leap: true
	},
	{
		solar: [1230, 1, 2],
		Dow: 3,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1230],
		Leap: true
	},
	{
		solar: [1230, 1, 30],
		Dow: 3,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1230],
		Leap: true
	},
	{
		solar: [1230, 1, 31],
		Dow: 4,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1230],
		Leap: true
	},
	{
		solar: [1230, 2, 1],
		Dow: 5,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1230],
		Leap: true
	},
	{
		solar: [1230, 2, 2],
		Dow: 6,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1230],
		Leap: true
	},
	{
		solar: [1230, 2, 30],
		Dow: 6,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1230],
		Leap: true
	},
	{
		solar: [1230, 2, 31],
		Dow: 0,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1230],
		Leap: true
	},
	{
		solar: [1230, 3, 1],
		Dow: 1,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1230],
		Leap: true
	},
	{
		solar: [1230, 3, 2],
		Dow: 2,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1230],
		Leap: true
	},
	{
		solar: [1230, 3, 30],
		Dow: 2,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1230],
		Leap: true
	},
	{
		solar: [1230, 3, 31],
		Dow: 3,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1230],
		Leap: true
	},
	{
		solar: [1230, 4, 1],
		Dow: 4,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1230],
		Leap: true
	},
	{
		solar: [1230, 4, 2],
		Dow: 5,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1230],
		Leap: true
	},
	{
		solar: [1230, 4, 30],
		Dow: 5,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1230],
		Leap: true
	},
	{
		solar: [1230, 4, 31],
		Dow: 6,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1230],
		Leap: true
	},
	{
		solar: [1230, 5, 1],
		Dow: 0,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1230],
		Leap: true
	},
	{
		solar: [1230, 5, 2],
		Dow: 1,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1230],
		Leap: true
	},
	{
		solar: [1230, 5, 30],
		Dow: 1,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1230],
		Leap: true
	},
	{
		solar: [1230, 5, 31],
		Dow: 2,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1230],
		Leap: true
	},
	{
		solar: [1230, 6, 1],
		Dow: 3,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1230],
		Leap: true
	},
	{
		solar: [1230, 6, 2],
		Dow: 4,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1230],
		Leap: true
	},
	{
		solar: [1230, 6, 29],
		Dow: 3,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1230],
		Leap: true
	},
	{
		solar: [1230, 6, 30],
		Dow: 4,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1230],
		Leap: true
	},
	{
		solar: [1230, 7, 1],
		Dow: 5,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1230],
		Leap: true
	},
	{
		solar: [1230, 7, 2],
		Dow: 6,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1230],
		Leap: true
	},
	{
		solar: [1230, 7, 29],
		Dow: 5,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1230],
		Leap: true
	},
	{
		solar: [1230, 7, 30],
		Dow: 6,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1230],
		Leap: true
	},
	{
		solar: [1230, 8, 1],
		Dow: 0,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1230],
		Leap: true
	},
	{
		solar: [1230, 8, 2],
		Dow: 1,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1230],
		Leap: true
	},
	{
		solar: [1230, 8, 29],
		Dow: 0,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1230],
		Leap: true
	},
	{
		solar: [1230, 8, 30],
		Dow: 1,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1230],
		Leap: true
	},
	{
		solar: [1230, 9, 1],
		Dow: 2,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1230],
		Leap: true
	},
	{
		solar: [1230, 9, 2],
		Dow: 3,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1230],
		Leap: true
	},
	{
		solar: [1230, 9, 29],
		Dow: 2,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1230],
		Leap: true
	},
	{
		solar: [1230, 9, 30],
		Dow: 3,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1230],
		Leap: true
	},
	{
		solar: [1230, 10, 1],
		Dow: 4,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1230],
		Leap: true
	},
	{
		solar: [1230, 10, 2],
		Dow: 5,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1230],
		Leap: true
	},
	{
		solar: [1230, 10, 29],
		Dow: 4,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1230],
		Leap: true
	},
	{
		solar: [1230, 10, 30],
		Dow: 5,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1230],
		Leap: true
	},
	{
		solar: [1230, 11, 1],
		Dow: 6,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1230],
		Leap: true
	},
	{
		solar: [1230, 11, 2],
		Dow: 0,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1230],
		Leap: true
	},
	{
		solar: [1230, 11, 26],
		Dow: 3,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1230],
		Leap: true
	},
	{
		solar: [1230, 11, 27],
		Dow: 4,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1230],
		Leap: true
	},
	{
		solar: [1230, 11, 28],
		Dow: 5,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1230],
		Leap: true
	},
	{
		solar: [1230, 11, 29],
		Dow: 6,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1230],
		Leap: true
	},
	{
		solar: [1230, 11, 30],
		Dow: 0,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1231],
		Leap: true
	},
	{
		solar: [1233, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1233],
		Leap: false
	},
	{
		solar: [1233, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1233],
		Leap: false
	},
	{
		solar: [1233, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1233],
		Leap: false
	},
	{
		solar: [1233, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1233],
		Leap: false
	},
	{
		solar: [1233, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1233],
		Leap: false
	},
	{
		solar: [1233, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1233],
		Leap: false
	},
	{
		solar: [1233, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1233],
		Leap: false
	},
	{
		solar: [1233, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1233],
		Leap: false
	},
	{
		solar: [1233, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1233],
		Leap: false
	},
	{
		solar: [1233, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1233],
		Leap: false
	},
	{
		solar: [1233, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1233],
		Leap: false
	},
	{
		solar: [1233, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1233],
		Leap: false
	},
	{
		solar: [1233, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1233],
		Leap: false
	},
	{
		solar: [1233, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1233],
		Leap: false
	},
	{
		solar: [1233, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1233],
		Leap: false
	},
	{
		solar: [1233, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1233],
		Leap: false
	},
	{
		solar: [1233, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1233],
		Leap: false
	},
	{
		solar: [1233, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1233],
		Leap: false
	},
	{
		solar: [1233, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1233],
		Leap: false
	},
	{
		solar: [1233, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1233],
		Leap: false
	},
	{
		solar: [1233, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1233],
		Leap: false
	},
	{
		solar: [1233, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1233],
		Leap: false
	},
	{
		solar: [1233, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1233],
		Leap: false
	},
	{
		solar: [1233, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1233],
		Leap: false
	},
	{
		solar: [1233, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1233],
		Leap: false
	},
	{
		solar: [1233, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1233],
		Leap: false
	},
	{
		solar: [1233, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1233],
		Leap: false
	},
	{
		solar: [1233, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1233],
		Leap: false
	},
	{
		solar: [1233, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1233],
		Leap: false
	},
	{
		solar: [1233, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1233],
		Leap: false
	},
	{
		solar: [1233, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1233],
		Leap: false
	},
	{
		solar: [1233, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1233],
		Leap: false
	},
	{
		solar: [1233, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1233],
		Leap: false
	},
	{
		solar: [1233, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1233],
		Leap: false
	},
	{
		solar: [1233, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1233],
		Leap: false
	},
	{
		solar: [1233, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1233],
		Leap: false
	},
	{
		solar: [1233, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1233],
		Leap: false
	},
	{
		solar: [1233, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1233],
		Leap: false
	},
	{
		solar: [1233, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1233],
		Leap: false
	},
	{
		solar: [1233, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1233],
		Leap: false
	},
	{
		solar: [1233, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1233],
		Leap: false
	},
	{
		solar: [1233, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1233],
		Leap: false
	},
	{
		solar: [1233, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1233],
		Leap: false
	},
	{
		solar: [1233, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1233],
		Leap: false
	},
	{
		solar: [1233, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1233],
		Leap: false
	},
	{
		solar: [1233, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1233],
		Leap: false
	},
	{
		solar: [1233, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1233],
		Leap: false
	},
	{
		solar: [1233, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1233],
		Leap: false
	},
	{
		solar: [1233, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1233],
		Leap: false
	},
	{
		solar: [1233, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1233],
		Leap: false
	},
	{
		solar: [1233, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1233],
		Leap: false
	},
	{
		solar: [1233, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1233],
		Leap: false
	},
	{
		solar: [1233, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1233],
		Leap: false
	},
	{
		solar: [1236, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1236],
		Leap: false
	},
	{
		solar: [1236, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1236],
		Leap: false
	},
	{
		solar: [1236, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1236],
		Leap: false
	},
	{
		solar: [1236, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1236],
		Leap: false
	},
	{
		solar: [1236, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1236],
		Leap: false
	},
	{
		solar: [1236, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1236],
		Leap: false
	},
	{
		solar: [1236, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1236],
		Leap: false
	},
	{
		solar: [1236, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1236],
		Leap: false
	},
	{
		solar: [1236, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1236],
		Leap: false
	},
	{
		solar: [1236, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1236],
		Leap: false
	},
	{
		solar: [1236, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1236],
		Leap: false
	},
	{
		solar: [1236, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1236],
		Leap: false
	},
	{
		solar: [1236, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1236],
		Leap: false
	},
	{
		solar: [1236, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1236],
		Leap: false
	},
	{
		solar: [1236, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1236],
		Leap: false
	},
	{
		solar: [1236, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1236],
		Leap: false
	},
	{
		solar: [1236, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1236],
		Leap: false
	},
	{
		solar: [1236, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1236],
		Leap: false
	},
	{
		solar: [1236, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1236],
		Leap: false
	},
	{
		solar: [1236, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1236],
		Leap: false
	},
	{
		solar: [1236, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1236],
		Leap: false
	},
	{
		solar: [1236, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1236],
		Leap: false
	},
	{
		solar: [1236, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1236],
		Leap: false
	},
	{
		solar: [1236, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1236],
		Leap: false
	},
	{
		solar: [1236, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1236],
		Leap: false
	},
	{
		solar: [1236, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1236],
		Leap: false
	},
	{
		solar: [1236, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1236],
		Leap: false
	},
	{
		solar: [1236, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1236],
		Leap: false
	},
	{
		solar: [1236, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1236],
		Leap: false
	},
	{
		solar: [1236, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1236],
		Leap: false
	},
	{
		solar: [1236, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1236],
		Leap: false
	},
	{
		solar: [1236, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1236],
		Leap: false
	},
	{
		solar: [1236, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1236],
		Leap: false
	},
	{
		solar: [1236, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1236],
		Leap: false
	},
	{
		solar: [1236, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1236],
		Leap: false
	},
	{
		solar: [1236, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1236],
		Leap: false
	},
	{
		solar: [1236, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1236],
		Leap: false
	},
	{
		solar: [1236, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1236],
		Leap: false
	},
	{
		solar: [1236, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1236],
		Leap: false
	},
	{
		solar: [1236, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1236],
		Leap: false
	},
	{
		solar: [1236, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1236],
		Leap: false
	},
	{
		solar: [1236, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1236],
		Leap: false
	},
	{
		solar: [1236, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1236],
		Leap: false
	},
	{
		solar: [1236, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1236],
		Leap: false
	},
	{
		solar: [1236, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1236],
		Leap: false
	},
	{
		solar: [1236, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1236],
		Leap: false
	},
	{
		solar: [1236, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1236],
		Leap: false
	},
	{
		solar: [1236, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1236],
		Leap: false
	},
	{
		solar: [1236, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1236],
		Leap: false
	},
	{
		solar: [1236, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1236],
		Leap: false
	},
	{
		solar: [1236, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1236],
		Leap: false
	},
	{
		solar: [1236, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1236],
		Leap: false
	},
	{
		solar: [1236, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1237],
		Leap: false
	},
	{
		solar: [1239, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1238],
		Leap: false
	},
	{
		solar: [1239, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1238],
		Leap: false
	},
	{
		solar: [1239, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1238],
		Leap: false
	},
	{
		solar: [1239, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1239],
		Leap: false
	},
	{
		solar: [1239, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1239],
		Leap: false
	},
	{
		solar: [1239, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1239],
		Leap: false
	},
	{
		solar: [1239, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1239],
		Leap: false
	},
	{
		solar: [1239, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1239],
		Leap: false
	},
	{
		solar: [1239, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1239],
		Leap: false
	},
	{
		solar: [1239, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1239],
		Leap: false
	},
	{
		solar: [1239, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1239],
		Leap: false
	},
	{
		solar: [1239, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1239],
		Leap: false
	},
	{
		solar: [1239, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1239],
		Leap: false
	},
	{
		solar: [1239, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1239],
		Leap: false
	},
	{
		solar: [1239, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1239],
		Leap: false
	},
	{
		solar: [1239, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1239],
		Leap: false
	},
	{
		solar: [1239, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1239],
		Leap: false
	},
	{
		solar: [1239, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1239],
		Leap: false
	},
	{
		solar: [1239, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1239],
		Leap: false
	},
	{
		solar: [1239, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1239],
		Leap: false
	},
	{
		solar: [1239, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1239],
		Leap: false
	},
	{
		solar: [1239, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1239],
		Leap: false
	},
	{
		solar: [1239, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1239],
		Leap: false
	},
	{
		solar: [1239, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1239],
		Leap: false
	},
	{
		solar: [1239, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1239],
		Leap: false
	},
	{
		solar: [1239, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1239],
		Leap: false
	},
	{
		solar: [1239, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1239],
		Leap: false
	},
	{
		solar: [1239, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1239],
		Leap: false
	},
	{
		solar: [1239, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1239],
		Leap: false
	},
	{
		solar: [1239, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1239],
		Leap: false
	},
	{
		solar: [1239, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1239],
		Leap: false
	},
	{
		solar: [1239, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1239],
		Leap: false
	},
	{
		solar: [1239, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1239],
		Leap: false
	},
	{
		solar: [1239, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1239],
		Leap: false
	},
	{
		solar: [1239, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1239],
		Leap: false
	},
	{
		solar: [1239, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1239],
		Leap: false
	},
	{
		solar: [1239, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1239],
		Leap: false
	},
	{
		solar: [1239, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1239],
		Leap: false
	},
	{
		solar: [1239, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1239],
		Leap: false
	},
	{
		solar: [1239, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1239],
		Leap: false
	},
	{
		solar: [1239, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1239],
		Leap: false
	},
	{
		solar: [1239, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1239],
		Leap: false
	},
	{
		solar: [1239, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1239],
		Leap: false
	},
	{
		solar: [1239, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1239],
		Leap: false
	},
	{
		solar: [1239, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1239],
		Leap: false
	},
	{
		solar: [1239, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1239],
		Leap: false
	},
	{
		solar: [1239, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1239],
		Leap: false
	},
	{
		solar: [1239, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1239],
		Leap: false
	},
	{
		solar: [1239, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1239],
		Leap: false
	},
	{
		solar: [1239, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1239],
		Leap: false
	},
	{
		solar: [1239, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1239],
		Leap: false
	},
	{
		solar: [1239, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1239],
		Leap: false
	},
	{
		solar: [1239, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1239],
		Leap: false
	},
	{
		solar: [1242, 0, 1],
		Dow: 0,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1242],
		Leap: true
	},
	{
		solar: [1242, 0, 2],
		Dow: 1,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1242],
		Leap: true
	},
	{
		solar: [1242, 0, 3],
		Dow: 2,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1242],
		Leap: true
	},
	{
		solar: [1242, 0, 4],
		Dow: 3,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1242],
		Leap: true
	},
	{
		solar: [1242, 0, 5],
		Dow: 4,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1242],
		Leap: true
	},
	{
		solar: [1242, 0, 30],
		Dow: 1,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1242],
		Leap: true
	},
	{
		solar: [1242, 0, 31],
		Dow: 2,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1242],
		Leap: true
	},
	{
		solar: [1242, 1, 1],
		Dow: 3,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1242],
		Leap: true
	},
	{
		solar: [1242, 1, 2],
		Dow: 4,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1242],
		Leap: true
	},
	{
		solar: [1242, 1, 30],
		Dow: 4,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1242],
		Leap: true
	},
	{
		solar: [1242, 1, 31],
		Dow: 5,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1242],
		Leap: true
	},
	{
		solar: [1242, 2, 1],
		Dow: 6,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1242],
		Leap: true
	},
	{
		solar: [1242, 2, 2],
		Dow: 0,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1242],
		Leap: true
	},
	{
		solar: [1242, 2, 30],
		Dow: 0,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1242],
		Leap: true
	},
	{
		solar: [1242, 2, 31],
		Dow: 1,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1242],
		Leap: true
	},
	{
		solar: [1242, 3, 1],
		Dow: 2,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1242],
		Leap: true
	},
	{
		solar: [1242, 3, 2],
		Dow: 3,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1242],
		Leap: true
	},
	{
		solar: [1242, 3, 30],
		Dow: 3,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1242],
		Leap: true
	},
	{
		solar: [1242, 3, 31],
		Dow: 4,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1242],
		Leap: true
	},
	{
		solar: [1242, 4, 1],
		Dow: 5,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1242],
		Leap: true
	},
	{
		solar: [1242, 4, 2],
		Dow: 6,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1242],
		Leap: true
	},
	{
		solar: [1242, 4, 30],
		Dow: 6,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1242],
		Leap: true
	},
	{
		solar: [1242, 4, 31],
		Dow: 0,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1242],
		Leap: true
	},
	{
		solar: [1242, 5, 1],
		Dow: 1,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1242],
		Leap: true
	},
	{
		solar: [1242, 5, 2],
		Dow: 2,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1242],
		Leap: true
	},
	{
		solar: [1242, 5, 30],
		Dow: 2,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1242],
		Leap: true
	},
	{
		solar: [1242, 5, 31],
		Dow: 3,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1242],
		Leap: true
	},
	{
		solar: [1242, 6, 1],
		Dow: 4,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1242],
		Leap: true
	},
	{
		solar: [1242, 6, 2],
		Dow: 5,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1242],
		Leap: true
	},
	{
		solar: [1242, 6, 29],
		Dow: 4,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1242],
		Leap: true
	},
	{
		solar: [1242, 6, 30],
		Dow: 5,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1242],
		Leap: true
	},
	{
		solar: [1242, 7, 1],
		Dow: 6,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1242],
		Leap: true
	},
	{
		solar: [1242, 7, 2],
		Dow: 0,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1242],
		Leap: true
	},
	{
		solar: [1242, 7, 29],
		Dow: 6,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1242],
		Leap: true
	},
	{
		solar: [1242, 7, 30],
		Dow: 0,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1242],
		Leap: true
	},
	{
		solar: [1242, 8, 1],
		Dow: 1,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1242],
		Leap: true
	},
	{
		solar: [1242, 8, 2],
		Dow: 2,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1242],
		Leap: true
	},
	{
		solar: [1242, 8, 29],
		Dow: 1,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1242],
		Leap: true
	},
	{
		solar: [1242, 8, 30],
		Dow: 2,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1242],
		Leap: true
	},
	{
		solar: [1242, 9, 1],
		Dow: 3,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1242],
		Leap: true
	},
	{
		solar: [1242, 9, 2],
		Dow: 4,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1242],
		Leap: true
	},
	{
		solar: [1242, 9, 29],
		Dow: 3,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1242],
		Leap: true
	},
	{
		solar: [1242, 9, 30],
		Dow: 4,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1242],
		Leap: true
	},
	{
		solar: [1242, 10, 1],
		Dow: 5,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1242],
		Leap: true
	},
	{
		solar: [1242, 10, 2],
		Dow: 6,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1242],
		Leap: true
	},
	{
		solar: [1242, 10, 29],
		Dow: 5,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1242],
		Leap: true
	},
	{
		solar: [1242, 10, 30],
		Dow: 6,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1242],
		Leap: true
	},
	{
		solar: [1242, 11, 1],
		Dow: 0,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1242],
		Leap: true
	},
	{
		solar: [1242, 11, 2],
		Dow: 1,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1242],
		Leap: true
	},
	{
		solar: [1242, 11, 26],
		Dow: 4,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1242],
		Leap: true
	},
	{
		solar: [1242, 11, 27],
		Dow: 5,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1242],
		Leap: true
	},
	{
		solar: [1242, 11, 28],
		Dow: 6,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1242],
		Leap: true
	},
	{
		solar: [1242, 11, 29],
		Dow: 0,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1243],
		Leap: true
	},
	{
		solar: [1242, 11, 30],
		Dow: 1,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1243],
		Leap: true
	},
	{
		solar: [1245, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1244],
		Leap: false
	},
	{
		solar: [1245, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1244],
		Leap: false
	},
	{
		solar: [1245, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1244],
		Leap: false
	},
	{
		solar: [1245, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1245],
		Leap: false
	},
	{
		solar: [1245, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1245],
		Leap: false
	},
	{
		solar: [1245, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1245],
		Leap: false
	},
	{
		solar: [1245, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1245],
		Leap: false
	},
	{
		solar: [1245, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1245],
		Leap: false
	},
	{
		solar: [1245, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1245],
		Leap: false
	},
	{
		solar: [1245, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1245],
		Leap: false
	},
	{
		solar: [1245, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1245],
		Leap: false
	},
	{
		solar: [1245, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1245],
		Leap: false
	},
	{
		solar: [1245, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1245],
		Leap: false
	},
	{
		solar: [1245, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1245],
		Leap: false
	},
	{
		solar: [1245, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1245],
		Leap: false
	},
	{
		solar: [1245, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1245],
		Leap: false
	},
	{
		solar: [1245, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1245],
		Leap: false
	},
	{
		solar: [1245, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1245],
		Leap: false
	},
	{
		solar: [1245, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1245],
		Leap: false
	},
	{
		solar: [1245, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1245],
		Leap: false
	},
	{
		solar: [1245, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1245],
		Leap: false
	},
	{
		solar: [1245, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1245],
		Leap: false
	},
	{
		solar: [1245, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1245],
		Leap: false
	},
	{
		solar: [1245, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1245],
		Leap: false
	},
	{
		solar: [1245, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1245],
		Leap: false
	},
	{
		solar: [1245, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1245],
		Leap: false
	},
	{
		solar: [1245, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1245],
		Leap: false
	},
	{
		solar: [1245, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1245],
		Leap: false
	},
	{
		solar: [1245, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1245],
		Leap: false
	},
	{
		solar: [1245, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1245],
		Leap: false
	},
	{
		solar: [1245, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1245],
		Leap: false
	},
	{
		solar: [1245, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1245],
		Leap: false
	},
	{
		solar: [1245, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1245],
		Leap: false
	},
	{
		solar: [1245, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1245],
		Leap: false
	},
	{
		solar: [1245, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1245],
		Leap: false
	},
	{
		solar: [1245, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1245],
		Leap: false
	},
	{
		solar: [1245, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1245],
		Leap: false
	},
	{
		solar: [1245, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1245],
		Leap: false
	},
	{
		solar: [1245, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1245],
		Leap: false
	},
	{
		solar: [1245, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1245],
		Leap: false
	},
	{
		solar: [1245, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1245],
		Leap: false
	},
	{
		solar: [1245, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1245],
		Leap: false
	},
	{
		solar: [1245, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1245],
		Leap: false
	},
	{
		solar: [1245, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1245],
		Leap: false
	},
	{
		solar: [1245, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1245],
		Leap: false
	},
	{
		solar: [1245, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1245],
		Leap: false
	},
	{
		solar: [1245, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1245],
		Leap: false
	},
	{
		solar: [1245, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1245],
		Leap: false
	},
	{
		solar: [1245, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1245],
		Leap: false
	},
	{
		solar: [1245, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1245],
		Leap: false
	},
	{
		solar: [1245, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1245],
		Leap: false
	},
	{
		solar: [1245, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1245],
		Leap: false
	},
	{
		solar: [1245, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1245],
		Leap: false
	},
	{
		solar: [1248, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1248],
		Leap: false
	},
	{
		solar: [1248, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1248],
		Leap: false
	},
	{
		solar: [1248, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1248],
		Leap: false
	},
	{
		solar: [1248, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1248],
		Leap: false
	},
	{
		solar: [1248, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1248],
		Leap: false
	},
	{
		solar: [1248, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1248],
		Leap: false
	},
	{
		solar: [1248, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1248],
		Leap: false
	},
	{
		solar: [1248, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1248],
		Leap: false
	},
	{
		solar: [1248, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1248],
		Leap: false
	},
	{
		solar: [1248, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1248],
		Leap: false
	},
	{
		solar: [1248, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1248],
		Leap: false
	},
	{
		solar: [1248, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1248],
		Leap: false
	},
	{
		solar: [1248, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1248],
		Leap: false
	},
	{
		solar: [1248, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1248],
		Leap: false
	},
	{
		solar: [1248, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1248],
		Leap: false
	},
	{
		solar: [1248, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1248],
		Leap: false
	},
	{
		solar: [1248, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1248],
		Leap: false
	},
	{
		solar: [1248, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1248],
		Leap: false
	},
	{
		solar: [1248, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1248],
		Leap: false
	},
	{
		solar: [1248, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1248],
		Leap: false
	},
	{
		solar: [1248, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1248],
		Leap: false
	},
	{
		solar: [1248, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1248],
		Leap: false
	},
	{
		solar: [1248, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1248],
		Leap: false
	},
	{
		solar: [1248, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1248],
		Leap: false
	},
	{
		solar: [1248, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1248],
		Leap: false
	},
	{
		solar: [1248, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1248],
		Leap: false
	},
	{
		solar: [1248, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1248],
		Leap: false
	},
	{
		solar: [1248, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1248],
		Leap: false
	},
	{
		solar: [1248, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1248],
		Leap: false
	},
	{
		solar: [1248, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1248],
		Leap: false
	},
	{
		solar: [1248, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1248],
		Leap: false
	},
	{
		solar: [1248, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1248],
		Leap: false
	},
	{
		solar: [1248, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1248],
		Leap: false
	},
	{
		solar: [1248, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1248],
		Leap: false
	},
	{
		solar: [1248, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1248],
		Leap: false
	},
	{
		solar: [1248, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1248],
		Leap: false
	},
	{
		solar: [1248, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1248],
		Leap: false
	},
	{
		solar: [1248, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1248],
		Leap: false
	},
	{
		solar: [1248, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1248],
		Leap: false
	},
	{
		solar: [1248, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1248],
		Leap: false
	},
	{
		solar: [1248, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1248],
		Leap: false
	},
	{
		solar: [1248, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1248],
		Leap: false
	},
	{
		solar: [1248, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1248],
		Leap: false
	},
	{
		solar: [1248, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1248],
		Leap: false
	},
	{
		solar: [1248, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1248],
		Leap: false
	},
	{
		solar: [1248, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1248],
		Leap: false
	},
	{
		solar: [1248, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1248],
		Leap: false
	},
	{
		solar: [1248, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1248],
		Leap: false
	},
	{
		solar: [1248, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1248],
		Leap: false
	},
	{
		solar: [1248, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1248],
		Leap: false
	},
	{
		solar: [1248, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1248],
		Leap: false
	},
	{
		solar: [1248, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1249],
		Leap: false
	},
	{
		solar: [1248, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1249],
		Leap: false
	},
	{
		solar: [1251, 0, 1],
		Dow: 4,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1250],
		Leap: true
	},
	{
		solar: [1251, 0, 2],
		Dow: 5,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1250],
		Leap: true
	},
	{
		solar: [1251, 0, 3],
		Dow: 6,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1250],
		Leap: true
	},
	{
		solar: [1251, 0, 4],
		Dow: 0,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1251],
		Leap: true
	},
	{
		solar: [1251, 0, 5],
		Dow: 1,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1251],
		Leap: true
	},
	{
		solar: [1251, 0, 30],
		Dow: 5,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1251],
		Leap: true
	},
	{
		solar: [1251, 0, 31],
		Dow: 6,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1251],
		Leap: true
	},
	{
		solar: [1251, 1, 1],
		Dow: 0,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1251],
		Leap: true
	},
	{
		solar: [1251, 1, 2],
		Dow: 1,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1251],
		Leap: true
	},
	{
		solar: [1251, 1, 30],
		Dow: 1,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1251],
		Leap: true
	},
	{
		solar: [1251, 1, 31],
		Dow: 2,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1251],
		Leap: true
	},
	{
		solar: [1251, 2, 1],
		Dow: 3,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1251],
		Leap: true
	},
	{
		solar: [1251, 2, 2],
		Dow: 4,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1251],
		Leap: true
	},
	{
		solar: [1251, 2, 30],
		Dow: 4,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1251],
		Leap: true
	},
	{
		solar: [1251, 2, 31],
		Dow: 5,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1251],
		Leap: true
	},
	{
		solar: [1251, 3, 1],
		Dow: 6,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1251],
		Leap: true
	},
	{
		solar: [1251, 3, 2],
		Dow: 0,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1251],
		Leap: true
	},
	{
		solar: [1251, 3, 30],
		Dow: 0,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1251],
		Leap: true
	},
	{
		solar: [1251, 3, 31],
		Dow: 1,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1251],
		Leap: true
	},
	{
		solar: [1251, 4, 1],
		Dow: 2,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1251],
		Leap: true
	},
	{
		solar: [1251, 4, 2],
		Dow: 3,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1251],
		Leap: true
	},
	{
		solar: [1251, 4, 30],
		Dow: 3,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1251],
		Leap: true
	},
	{
		solar: [1251, 4, 31],
		Dow: 4,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1251],
		Leap: true
	},
	{
		solar: [1251, 5, 1],
		Dow: 5,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1251],
		Leap: true
	},
	{
		solar: [1251, 5, 2],
		Dow: 6,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1251],
		Leap: true
	},
	{
		solar: [1251, 5, 30],
		Dow: 6,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1251],
		Leap: true
	},
	{
		solar: [1251, 5, 31],
		Dow: 0,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1251],
		Leap: true
	},
	{
		solar: [1251, 6, 1],
		Dow: 1,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1251],
		Leap: true
	},
	{
		solar: [1251, 6, 2],
		Dow: 2,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1251],
		Leap: true
	},
	{
		solar: [1251, 6, 29],
		Dow: 1,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1251],
		Leap: true
	},
	{
		solar: [1251, 6, 30],
		Dow: 2,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1251],
		Leap: true
	},
	{
		solar: [1251, 7, 1],
		Dow: 3,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1251],
		Leap: true
	},
	{
		solar: [1251, 7, 2],
		Dow: 4,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1251],
		Leap: true
	},
	{
		solar: [1251, 7, 29],
		Dow: 3,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1251],
		Leap: true
	},
	{
		solar: [1251, 7, 30],
		Dow: 4,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1251],
		Leap: true
	},
	{
		solar: [1251, 8, 1],
		Dow: 5,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1251],
		Leap: true
	},
	{
		solar: [1251, 8, 2],
		Dow: 6,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1251],
		Leap: true
	},
	{
		solar: [1251, 8, 29],
		Dow: 5,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1251],
		Leap: true
	},
	{
		solar: [1251, 8, 30],
		Dow: 6,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1251],
		Leap: true
	},
	{
		solar: [1251, 9, 1],
		Dow: 0,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1251],
		Leap: true
	},
	{
		solar: [1251, 9, 2],
		Dow: 1,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1251],
		Leap: true
	},
	{
		solar: [1251, 9, 29],
		Dow: 0,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1251],
		Leap: true
	},
	{
		solar: [1251, 9, 30],
		Dow: 1,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1251],
		Leap: true
	},
	{
		solar: [1251, 10, 1],
		Dow: 2,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1251],
		Leap: true
	},
	{
		solar: [1251, 10, 2],
		Dow: 3,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1251],
		Leap: true
	},
	{
		solar: [1251, 10, 29],
		Dow: 2,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1251],
		Leap: true
	},
	{
		solar: [1251, 10, 30],
		Dow: 3,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1251],
		Leap: true
	},
	{
		solar: [1251, 11, 1],
		Dow: 4,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1251],
		Leap: true
	},
	{
		solar: [1251, 11, 2],
		Dow: 5,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1251],
		Leap: true
	},
	{
		solar: [1251, 11, 26],
		Dow: 1,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1251],
		Leap: true
	},
	{
		solar: [1251, 11, 27],
		Dow: 2,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1251],
		Leap: true
	},
	{
		solar: [1251, 11, 28],
		Dow: 3,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1251],
		Leap: true
	},
	{
		solar: [1251, 11, 29],
		Dow: 4,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1251],
		Leap: true
	},
	{
		solar: [1251, 11, 30],
		Dow: 5,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1251],
		Leap: true
	},
	{
		solar: [1254, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1254],
		Leap: false
	},
	{
		solar: [1254, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1254],
		Leap: false
	},
	{
		solar: [1254, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1254],
		Leap: false
	},
	{
		solar: [1254, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1254],
		Leap: false
	},
	{
		solar: [1254, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1254],
		Leap: false
	},
	{
		solar: [1254, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1254],
		Leap: false
	},
	{
		solar: [1254, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1254],
		Leap: false
	},
	{
		solar: [1254, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1254],
		Leap: false
	},
	{
		solar: [1254, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1254],
		Leap: false
	},
	{
		solar: [1254, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1254],
		Leap: false
	},
	{
		solar: [1254, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1254],
		Leap: false
	},
	{
		solar: [1254, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1254],
		Leap: false
	},
	{
		solar: [1254, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1254],
		Leap: false
	},
	{
		solar: [1254, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1254],
		Leap: false
	},
	{
		solar: [1254, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1254],
		Leap: false
	},
	{
		solar: [1254, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1254],
		Leap: false
	},
	{
		solar: [1254, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1254],
		Leap: false
	},
	{
		solar: [1254, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1254],
		Leap: false
	},
	{
		solar: [1254, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1254],
		Leap: false
	},
	{
		solar: [1254, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1254],
		Leap: false
	},
	{
		solar: [1254, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1254],
		Leap: false
	},
	{
		solar: [1254, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1254],
		Leap: false
	},
	{
		solar: [1254, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1254],
		Leap: false
	},
	{
		solar: [1254, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1254],
		Leap: false
	},
	{
		solar: [1254, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1254],
		Leap: false
	},
	{
		solar: [1254, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1254],
		Leap: false
	},
	{
		solar: [1254, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1254],
		Leap: false
	},
	{
		solar: [1254, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1254],
		Leap: false
	},
	{
		solar: [1254, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1254],
		Leap: false
	},
	{
		solar: [1254, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1254],
		Leap: false
	},
	{
		solar: [1254, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1254],
		Leap: false
	},
	{
		solar: [1254, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1254],
		Leap: false
	},
	{
		solar: [1254, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1254],
		Leap: false
	},
	{
		solar: [1254, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1254],
		Leap: false
	},
	{
		solar: [1254, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1254],
		Leap: false
	},
	{
		solar: [1254, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1254],
		Leap: false
	},
	{
		solar: [1254, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1254],
		Leap: false
	},
	{
		solar: [1254, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1254],
		Leap: false
	},
	{
		solar: [1254, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1254],
		Leap: false
	},
	{
		solar: [1254, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1254],
		Leap: false
	},
	{
		solar: [1254, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1254],
		Leap: false
	},
	{
		solar: [1254, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1254],
		Leap: false
	},
	{
		solar: [1254, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1254],
		Leap: false
	},
	{
		solar: [1254, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1254],
		Leap: false
	},
	{
		solar: [1254, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1254],
		Leap: false
	},
	{
		solar: [1254, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1254],
		Leap: false
	},
	{
		solar: [1254, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1254],
		Leap: false
	},
	{
		solar: [1254, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1254],
		Leap: false
	},
	{
		solar: [1254, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1254],
		Leap: false
	},
	{
		solar: [1254, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1254],
		Leap: false
	},
	{
		solar: [1254, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1254],
		Leap: false
	},
	{
		solar: [1254, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1255],
		Leap: false
	},
	{
		solar: [1254, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1255],
		Leap: false
	},
	{
		solar: [1257, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1256],
		Leap: false
	},
	{
		solar: [1257, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1256],
		Leap: false
	},
	{
		solar: [1257, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1257],
		Leap: false
	},
	{
		solar: [1257, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1257],
		Leap: false
	},
	{
		solar: [1257, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1257],
		Leap: false
	},
	{
		solar: [1257, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1257],
		Leap: false
	},
	{
		solar: [1257, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1257],
		Leap: false
	},
	{
		solar: [1257, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1257],
		Leap: false
	},
	{
		solar: [1257, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1257],
		Leap: false
	},
	{
		solar: [1257, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1257],
		Leap: false
	},
	{
		solar: [1257, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1257],
		Leap: false
	},
	{
		solar: [1257, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1257],
		Leap: false
	},
	{
		solar: [1257, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1257],
		Leap: false
	},
	{
		solar: [1257, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1257],
		Leap: false
	},
	{
		solar: [1257, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1257],
		Leap: false
	},
	{
		solar: [1257, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1257],
		Leap: false
	},
	{
		solar: [1257, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1257],
		Leap: false
	},
	{
		solar: [1257, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1257],
		Leap: false
	},
	{
		solar: [1257, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1257],
		Leap: false
	},
	{
		solar: [1257, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1257],
		Leap: false
	},
	{
		solar: [1257, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1257],
		Leap: false
	},
	{
		solar: [1257, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1257],
		Leap: false
	},
	{
		solar: [1257, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1257],
		Leap: false
	},
	{
		solar: [1257, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1257],
		Leap: false
	},
	{
		solar: [1257, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1257],
		Leap: false
	},
	{
		solar: [1257, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1257],
		Leap: false
	},
	{
		solar: [1257, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1257],
		Leap: false
	},
	{
		solar: [1257, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1257],
		Leap: false
	},
	{
		solar: [1257, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1257],
		Leap: false
	},
	{
		solar: [1257, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1257],
		Leap: false
	},
	{
		solar: [1257, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1257],
		Leap: false
	},
	{
		solar: [1257, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1257],
		Leap: false
	},
	{
		solar: [1257, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1257],
		Leap: false
	},
	{
		solar: [1257, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1257],
		Leap: false
	},
	{
		solar: [1257, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1257],
		Leap: false
	},
	{
		solar: [1257, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1257],
		Leap: false
	},
	{
		solar: [1257, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1257],
		Leap: false
	},
	{
		solar: [1257, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1257],
		Leap: false
	},
	{
		solar: [1257, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1257],
		Leap: false
	},
	{
		solar: [1257, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1257],
		Leap: false
	},
	{
		solar: [1257, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1257],
		Leap: false
	},
	{
		solar: [1257, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1257],
		Leap: false
	},
	{
		solar: [1257, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1257],
		Leap: false
	},
	{
		solar: [1257, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1257],
		Leap: false
	},
	{
		solar: [1257, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1257],
		Leap: false
	},
	{
		solar: [1257, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1257],
		Leap: false
	},
	{
		solar: [1257, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1257],
		Leap: false
	},
	{
		solar: [1257, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1257],
		Leap: false
	},
	{
		solar: [1257, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1257],
		Leap: false
	},
	{
		solar: [1257, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1257],
		Leap: false
	},
	{
		solar: [1257, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1257],
		Leap: false
	},
	{
		solar: [1257, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1257],
		Leap: false
	},
	{
		solar: [1257, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1257],
		Leap: false
	},
	{
		solar: [1260, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1260],
		Leap: false
	},
	{
		solar: [1260, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1260],
		Leap: false
	},
	{
		solar: [1260, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1260],
		Leap: false
	},
	{
		solar: [1260, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1260],
		Leap: false
	},
	{
		solar: [1260, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1260],
		Leap: false
	},
	{
		solar: [1260, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1260],
		Leap: false
	},
	{
		solar: [1260, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1260],
		Leap: false
	},
	{
		solar: [1260, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1260],
		Leap: false
	},
	{
		solar: [1260, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1260],
		Leap: false
	},
	{
		solar: [1260, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1260],
		Leap: false
	},
	{
		solar: [1260, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1260],
		Leap: false
	},
	{
		solar: [1260, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1260],
		Leap: false
	},
	{
		solar: [1260, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1260],
		Leap: false
	},
	{
		solar: [1260, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1260],
		Leap: false
	},
	{
		solar: [1260, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1260],
		Leap: false
	},
	{
		solar: [1260, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1260],
		Leap: false
	},
	{
		solar: [1260, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1260],
		Leap: false
	},
	{
		solar: [1260, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1260],
		Leap: false
	},
	{
		solar: [1260, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1260],
		Leap: false
	},
	{
		solar: [1260, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1260],
		Leap: false
	},
	{
		solar: [1260, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1260],
		Leap: false
	},
	{
		solar: [1260, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1260],
		Leap: false
	},
	{
		solar: [1260, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1260],
		Leap: false
	},
	{
		solar: [1260, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1260],
		Leap: false
	},
	{
		solar: [1260, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1260],
		Leap: false
	},
	{
		solar: [1260, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1260],
		Leap: false
	},
	{
		solar: [1260, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1260],
		Leap: false
	},
	{
		solar: [1260, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1260],
		Leap: false
	},
	{
		solar: [1260, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1260],
		Leap: false
	},
	{
		solar: [1260, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1260],
		Leap: false
	},
	{
		solar: [1260, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1260],
		Leap: false
	},
	{
		solar: [1260, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1260],
		Leap: false
	},
	{
		solar: [1260, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1260],
		Leap: false
	},
	{
		solar: [1260, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1260],
		Leap: false
	},
	{
		solar: [1260, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1260],
		Leap: false
	},
	{
		solar: [1260, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1260],
		Leap: false
	},
	{
		solar: [1260, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1260],
		Leap: false
	},
	{
		solar: [1260, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1260],
		Leap: false
	},
	{
		solar: [1260, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1260],
		Leap: false
	},
	{
		solar: [1260, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1260],
		Leap: false
	},
	{
		solar: [1260, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1260],
		Leap: false
	},
	{
		solar: [1260, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1260],
		Leap: false
	},
	{
		solar: [1260, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1260],
		Leap: false
	},
	{
		solar: [1260, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1260],
		Leap: false
	},
	{
		solar: [1260, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1260],
		Leap: false
	},
	{
		solar: [1260, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1260],
		Leap: false
	},
	{
		solar: [1260, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1260],
		Leap: false
	},
	{
		solar: [1260, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1260],
		Leap: false
	},
	{
		solar: [1260, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1260],
		Leap: false
	},
	{
		solar: [1260, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1260],
		Leap: false
	},
	{
		solar: [1260, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1261],
		Leap: false
	},
	{
		solar: [1260, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1261],
		Leap: false
	},
	{
		solar: [1260, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1261],
		Leap: false
	},
	{
		solar: [1263, 0, 1],
		Dow: 5,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1262],
		Leap: true
	},
	{
		solar: [1263, 0, 2],
		Dow: 6,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1262],
		Leap: true
	},
	{
		solar: [1263, 0, 3],
		Dow: 0,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1263],
		Leap: true
	},
	{
		solar: [1263, 0, 4],
		Dow: 1,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1263],
		Leap: true
	},
	{
		solar: [1263, 0, 5],
		Dow: 2,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1263],
		Leap: true
	},
	{
		solar: [1263, 0, 30],
		Dow: 6,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1263],
		Leap: true
	},
	{
		solar: [1263, 0, 31],
		Dow: 0,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1263],
		Leap: true
	},
	{
		solar: [1263, 1, 1],
		Dow: 1,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1263],
		Leap: true
	},
	{
		solar: [1263, 1, 2],
		Dow: 2,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1263],
		Leap: true
	},
	{
		solar: [1263, 1, 30],
		Dow: 2,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1263],
		Leap: true
	},
	{
		solar: [1263, 1, 31],
		Dow: 3,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1263],
		Leap: true
	},
	{
		solar: [1263, 2, 1],
		Dow: 4,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1263],
		Leap: true
	},
	{
		solar: [1263, 2, 2],
		Dow: 5,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1263],
		Leap: true
	},
	{
		solar: [1263, 2, 30],
		Dow: 5,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1263],
		Leap: true
	},
	{
		solar: [1263, 2, 31],
		Dow: 6,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1263],
		Leap: true
	},
	{
		solar: [1263, 3, 1],
		Dow: 0,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1263],
		Leap: true
	},
	{
		solar: [1263, 3, 2],
		Dow: 1,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1263],
		Leap: true
	},
	{
		solar: [1263, 3, 30],
		Dow: 1,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1263],
		Leap: true
	},
	{
		solar: [1263, 3, 31],
		Dow: 2,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1263],
		Leap: true
	},
	{
		solar: [1263, 4, 1],
		Dow: 3,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1263],
		Leap: true
	},
	{
		solar: [1263, 4, 2],
		Dow: 4,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1263],
		Leap: true
	},
	{
		solar: [1263, 4, 30],
		Dow: 4,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1263],
		Leap: true
	},
	{
		solar: [1263, 4, 31],
		Dow: 5,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1263],
		Leap: true
	},
	{
		solar: [1263, 5, 1],
		Dow: 6,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1263],
		Leap: true
	},
	{
		solar: [1263, 5, 2],
		Dow: 0,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1263],
		Leap: true
	},
	{
		solar: [1263, 5, 30],
		Dow: 0,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1263],
		Leap: true
	},
	{
		solar: [1263, 5, 31],
		Dow: 1,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1263],
		Leap: true
	},
	{
		solar: [1263, 6, 1],
		Dow: 2,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1263],
		Leap: true
	},
	{
		solar: [1263, 6, 2],
		Dow: 3,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1263],
		Leap: true
	},
	{
		solar: [1263, 6, 29],
		Dow: 2,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1263],
		Leap: true
	},
	{
		solar: [1263, 6, 30],
		Dow: 3,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1263],
		Leap: true
	},
	{
		solar: [1263, 7, 1],
		Dow: 4,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1263],
		Leap: true
	},
	{
		solar: [1263, 7, 2],
		Dow: 5,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1263],
		Leap: true
	},
	{
		solar: [1263, 7, 29],
		Dow: 4,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1263],
		Leap: true
	},
	{
		solar: [1263, 7, 30],
		Dow: 5,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1263],
		Leap: true
	},
	{
		solar: [1263, 8, 1],
		Dow: 6,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1263],
		Leap: true
	},
	{
		solar: [1263, 8, 2],
		Dow: 0,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1263],
		Leap: true
	},
	{
		solar: [1263, 8, 29],
		Dow: 6,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1263],
		Leap: true
	},
	{
		solar: [1263, 8, 30],
		Dow: 0,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1263],
		Leap: true
	},
	{
		solar: [1263, 9, 1],
		Dow: 1,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1263],
		Leap: true
	},
	{
		solar: [1263, 9, 2],
		Dow: 2,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1263],
		Leap: true
	},
	{
		solar: [1263, 9, 29],
		Dow: 1,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1263],
		Leap: true
	},
	{
		solar: [1263, 9, 30],
		Dow: 2,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1263],
		Leap: true
	},
	{
		solar: [1263, 10, 1],
		Dow: 3,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1263],
		Leap: true
	},
	{
		solar: [1263, 10, 2],
		Dow: 4,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1263],
		Leap: true
	},
	{
		solar: [1263, 10, 29],
		Dow: 3,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1263],
		Leap: true
	},
	{
		solar: [1263, 10, 30],
		Dow: 4,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1263],
		Leap: true
	},
	{
		solar: [1263, 11, 1],
		Dow: 5,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1263],
		Leap: true
	},
	{
		solar: [1263, 11, 2],
		Dow: 6,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1263],
		Leap: true
	},
	{
		solar: [1263, 11, 26],
		Dow: 2,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1263],
		Leap: true
	},
	{
		solar: [1263, 11, 27],
		Dow: 3,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1263],
		Leap: true
	},
	{
		solar: [1263, 11, 28],
		Dow: 4,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1263],
		Leap: true
	},
	{
		solar: [1263, 11, 29],
		Dow: 5,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1263],
		Leap: true
	},
	{
		solar: [1263, 11, 30],
		Dow: 6,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1263],
		Leap: true
	},
	{
		solar: [1266, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1266],
		Leap: false
	},
	{
		solar: [1266, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1266],
		Leap: false
	},
	{
		solar: [1266, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1266],
		Leap: false
	},
	{
		solar: [1266, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1266],
		Leap: false
	},
	{
		solar: [1266, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1266],
		Leap: false
	},
	{
		solar: [1266, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1266],
		Leap: false
	},
	{
		solar: [1266, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1266],
		Leap: false
	},
	{
		solar: [1266, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1266],
		Leap: false
	},
	{
		solar: [1266, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1266],
		Leap: false
	},
	{
		solar: [1266, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1266],
		Leap: false
	},
	{
		solar: [1266, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1266],
		Leap: false
	},
	{
		solar: [1266, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1266],
		Leap: false
	},
	{
		solar: [1266, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1266],
		Leap: false
	},
	{
		solar: [1266, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1266],
		Leap: false
	},
	{
		solar: [1266, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1266],
		Leap: false
	},
	{
		solar: [1266, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1266],
		Leap: false
	},
	{
		solar: [1266, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1266],
		Leap: false
	},
	{
		solar: [1266, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1266],
		Leap: false
	},
	{
		solar: [1266, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1266],
		Leap: false
	},
	{
		solar: [1266, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1266],
		Leap: false
	},
	{
		solar: [1266, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1266],
		Leap: false
	},
	{
		solar: [1266, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1266],
		Leap: false
	},
	{
		solar: [1266, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1266],
		Leap: false
	},
	{
		solar: [1266, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1266],
		Leap: false
	},
	{
		solar: [1266, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1266],
		Leap: false
	},
	{
		solar: [1266, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1266],
		Leap: false
	},
	{
		solar: [1266, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1266],
		Leap: false
	},
	{
		solar: [1266, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1266],
		Leap: false
	},
	{
		solar: [1266, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1266],
		Leap: false
	},
	{
		solar: [1266, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1266],
		Leap: false
	},
	{
		solar: [1266, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1266],
		Leap: false
	},
	{
		solar: [1266, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1266],
		Leap: false
	},
	{
		solar: [1266, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1266],
		Leap: false
	},
	{
		solar: [1266, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1266],
		Leap: false
	},
	{
		solar: [1266, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1266],
		Leap: false
	},
	{
		solar: [1266, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1266],
		Leap: false
	},
	{
		solar: [1266, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1266],
		Leap: false
	},
	{
		solar: [1266, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1266],
		Leap: false
	},
	{
		solar: [1266, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1266],
		Leap: false
	},
	{
		solar: [1266, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1266],
		Leap: false
	},
	{
		solar: [1266, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1266],
		Leap: false
	},
	{
		solar: [1266, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1266],
		Leap: false
	},
	{
		solar: [1266, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1266],
		Leap: false
	},
	{
		solar: [1266, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1266],
		Leap: false
	},
	{
		solar: [1266, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1266],
		Leap: false
	},
	{
		solar: [1266, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1266],
		Leap: false
	},
	{
		solar: [1266, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1266],
		Leap: false
	},
	{
		solar: [1266, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1266],
		Leap: false
	},
	{
		solar: [1266, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1266],
		Leap: false
	},
	{
		solar: [1266, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1266],
		Leap: false
	},
	{
		solar: [1266, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1267],
		Leap: false
	},
	{
		solar: [1266, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1267],
		Leap: false
	},
	{
		solar: [1266, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1267],
		Leap: false
	},
	{
		solar: [1269, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1268],
		Leap: false
	},
	{
		solar: [1269, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1269],
		Leap: false
	},
	{
		solar: [1269, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1269],
		Leap: false
	},
	{
		solar: [1269, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1269],
		Leap: false
	},
	{
		solar: [1269, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1269],
		Leap: false
	},
	{
		solar: [1269, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1269],
		Leap: false
	},
	{
		solar: [1269, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1269],
		Leap: false
	},
	{
		solar: [1269, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1269],
		Leap: false
	},
	{
		solar: [1269, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1269],
		Leap: false
	},
	{
		solar: [1269, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1269],
		Leap: false
	},
	{
		solar: [1269, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1269],
		Leap: false
	},
	{
		solar: [1269, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1269],
		Leap: false
	},
	{
		solar: [1269, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1269],
		Leap: false
	},
	{
		solar: [1269, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1269],
		Leap: false
	},
	{
		solar: [1269, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1269],
		Leap: false
	},
	{
		solar: [1269, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1269],
		Leap: false
	},
	{
		solar: [1269, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1269],
		Leap: false
	},
	{
		solar: [1269, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1269],
		Leap: false
	},
	{
		solar: [1269, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1269],
		Leap: false
	},
	{
		solar: [1269, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1269],
		Leap: false
	},
	{
		solar: [1269, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1269],
		Leap: false
	},
	{
		solar: [1269, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1269],
		Leap: false
	},
	{
		solar: [1269, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1269],
		Leap: false
	},
	{
		solar: [1269, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1269],
		Leap: false
	},
	{
		solar: [1269, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1269],
		Leap: false
	},
	{
		solar: [1269, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1269],
		Leap: false
	},
	{
		solar: [1269, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1269],
		Leap: false
	},
	{
		solar: [1269, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1269],
		Leap: false
	},
	{
		solar: [1269, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1269],
		Leap: false
	},
	{
		solar: [1269, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1269],
		Leap: false
	},
	{
		solar: [1269, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1269],
		Leap: false
	},
	{
		solar: [1269, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1269],
		Leap: false
	},
	{
		solar: [1269, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1269],
		Leap: false
	},
	{
		solar: [1269, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1269],
		Leap: false
	},
	{
		solar: [1269, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1269],
		Leap: false
	},
	{
		solar: [1269, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1269],
		Leap: false
	},
	{
		solar: [1269, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1269],
		Leap: false
	},
	{
		solar: [1269, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1269],
		Leap: false
	},
	{
		solar: [1269, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1269],
		Leap: false
	},
	{
		solar: [1269, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1269],
		Leap: false
	},
	{
		solar: [1269, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1269],
		Leap: false
	},
	{
		solar: [1269, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1269],
		Leap: false
	},
	{
		solar: [1269, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1269],
		Leap: false
	},
	{
		solar: [1269, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1269],
		Leap: false
	},
	{
		solar: [1269, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1269],
		Leap: false
	},
	{
		solar: [1269, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1269],
		Leap: false
	},
	{
		solar: [1269, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1269],
		Leap: false
	},
	{
		solar: [1269, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1269],
		Leap: false
	},
	{
		solar: [1269, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1269],
		Leap: false
	},
	{
		solar: [1269, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1269],
		Leap: false
	},
	{
		solar: [1269, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1269],
		Leap: false
	},
	{
		solar: [1269, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1269],
		Leap: false
	},
	{
		solar: [1269, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1269],
		Leap: false
	},
	{
		solar: [1272, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1272],
		Leap: false
	},
	{
		solar: [1272, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1272],
		Leap: false
	},
	{
		solar: [1272, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1272],
		Leap: false
	},
	{
		solar: [1272, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1272],
		Leap: false
	},
	{
		solar: [1272, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1272],
		Leap: false
	},
	{
		solar: [1272, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1272],
		Leap: false
	},
	{
		solar: [1272, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1272],
		Leap: false
	},
	{
		solar: [1272, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1272],
		Leap: false
	},
	{
		solar: [1272, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1272],
		Leap: false
	},
	{
		solar: [1272, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1272],
		Leap: false
	},
	{
		solar: [1272, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1272],
		Leap: false
	},
	{
		solar: [1272, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1272],
		Leap: false
	},
	{
		solar: [1272, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1272],
		Leap: false
	},
	{
		solar: [1272, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1272],
		Leap: false
	},
	{
		solar: [1272, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1272],
		Leap: false
	},
	{
		solar: [1272, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1272],
		Leap: false
	},
	{
		solar: [1272, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1272],
		Leap: false
	},
	{
		solar: [1272, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1272],
		Leap: false
	},
	{
		solar: [1272, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1272],
		Leap: false
	},
	{
		solar: [1272, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1272],
		Leap: false
	},
	{
		solar: [1272, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1272],
		Leap: false
	},
	{
		solar: [1272, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1272],
		Leap: false
	},
	{
		solar: [1272, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1272],
		Leap: false
	},
	{
		solar: [1272, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1272],
		Leap: false
	},
	{
		solar: [1272, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1272],
		Leap: false
	},
	{
		solar: [1272, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1272],
		Leap: false
	},
	{
		solar: [1272, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1272],
		Leap: false
	},
	{
		solar: [1272, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1272],
		Leap: false
	},
	{
		solar: [1272, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1272],
		Leap: false
	},
	{
		solar: [1272, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1272],
		Leap: false
	},
	{
		solar: [1272, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1272],
		Leap: false
	},
	{
		solar: [1272, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1272],
		Leap: false
	},
	{
		solar: [1272, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1272],
		Leap: false
	},
	{
		solar: [1272, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1272],
		Leap: false
	},
	{
		solar: [1272, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1272],
		Leap: false
	},
	{
		solar: [1272, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1272],
		Leap: false
	},
	{
		solar: [1272, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1272],
		Leap: false
	},
	{
		solar: [1272, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1272],
		Leap: false
	},
	{
		solar: [1272, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1272],
		Leap: false
	},
	{
		solar: [1272, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1272],
		Leap: false
	},
	{
		solar: [1272, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1272],
		Leap: false
	},
	{
		solar: [1272, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1272],
		Leap: false
	},
	{
		solar: [1272, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1272],
		Leap: false
	},
	{
		solar: [1272, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1272],
		Leap: false
	},
	{
		solar: [1272, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1272],
		Leap: false
	},
	{
		solar: [1272, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1272],
		Leap: false
	},
	{
		solar: [1272, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1272],
		Leap: false
	},
	{
		solar: [1272, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1272],
		Leap: false
	},
	{
		solar: [1272, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1272],
		Leap: false
	},
	{
		solar: [1272, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1272],
		Leap: false
	},
	{
		solar: [1272, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1272],
		Leap: false
	},
	{
		solar: [1272, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1272],
		Leap: false
	},
	{
		solar: [1272, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1272],
		Leap: false
	},
	{
		solar: [1275, 0, 1],
		Dow: 6,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1274],
		Leap: true
	},
	{
		solar: [1275, 0, 2],
		Dow: 0,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1275],
		Leap: true
	},
	{
		solar: [1275, 0, 3],
		Dow: 1,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1275],
		Leap: true
	},
	{
		solar: [1275, 0, 4],
		Dow: 2,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1275],
		Leap: true
	},
	{
		solar: [1275, 0, 5],
		Dow: 3,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1275],
		Leap: true
	},
	{
		solar: [1275, 0, 30],
		Dow: 0,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1275],
		Leap: true
	},
	{
		solar: [1275, 0, 31],
		Dow: 1,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1275],
		Leap: true
	},
	{
		solar: [1275, 1, 1],
		Dow: 2,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1275],
		Leap: true
	},
	{
		solar: [1275, 1, 2],
		Dow: 3,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1275],
		Leap: true
	},
	{
		solar: [1275, 1, 30],
		Dow: 3,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1275],
		Leap: true
	},
	{
		solar: [1275, 1, 31],
		Dow: 4,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1275],
		Leap: true
	},
	{
		solar: [1275, 2, 1],
		Dow: 5,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1275],
		Leap: true
	},
	{
		solar: [1275, 2, 2],
		Dow: 6,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1275],
		Leap: true
	},
	{
		solar: [1275, 2, 30],
		Dow: 6,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1275],
		Leap: true
	},
	{
		solar: [1275, 2, 31],
		Dow: 0,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1275],
		Leap: true
	},
	{
		solar: [1275, 3, 1],
		Dow: 1,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1275],
		Leap: true
	},
	{
		solar: [1275, 3, 2],
		Dow: 2,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1275],
		Leap: true
	},
	{
		solar: [1275, 3, 30],
		Dow: 2,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1275],
		Leap: true
	},
	{
		solar: [1275, 3, 31],
		Dow: 3,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1275],
		Leap: true
	},
	{
		solar: [1275, 4, 1],
		Dow: 4,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1275],
		Leap: true
	},
	{
		solar: [1275, 4, 2],
		Dow: 5,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1275],
		Leap: true
	},
	{
		solar: [1275, 4, 30],
		Dow: 5,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1275],
		Leap: true
	},
	{
		solar: [1275, 4, 31],
		Dow: 6,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1275],
		Leap: true
	},
	{
		solar: [1275, 5, 1],
		Dow: 0,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1275],
		Leap: true
	},
	{
		solar: [1275, 5, 2],
		Dow: 1,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1275],
		Leap: true
	},
	{
		solar: [1275, 5, 30],
		Dow: 1,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1275],
		Leap: true
	},
	{
		solar: [1275, 5, 31],
		Dow: 2,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1275],
		Leap: true
	},
	{
		solar: [1275, 6, 1],
		Dow: 3,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1275],
		Leap: true
	},
	{
		solar: [1275, 6, 2],
		Dow: 4,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1275],
		Leap: true
	},
	{
		solar: [1275, 6, 29],
		Dow: 3,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1275],
		Leap: true
	},
	{
		solar: [1275, 6, 30],
		Dow: 4,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1275],
		Leap: true
	},
	{
		solar: [1275, 7, 1],
		Dow: 5,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1275],
		Leap: true
	},
	{
		solar: [1275, 7, 2],
		Dow: 6,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1275],
		Leap: true
	},
	{
		solar: [1275, 7, 29],
		Dow: 5,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1275],
		Leap: true
	},
	{
		solar: [1275, 7, 30],
		Dow: 6,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1275],
		Leap: true
	},
	{
		solar: [1275, 8, 1],
		Dow: 0,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1275],
		Leap: true
	},
	{
		solar: [1275, 8, 2],
		Dow: 1,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1275],
		Leap: true
	},
	{
		solar: [1275, 8, 29],
		Dow: 0,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1275],
		Leap: true
	},
	{
		solar: [1275, 8, 30],
		Dow: 1,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1275],
		Leap: true
	},
	{
		solar: [1275, 9, 1],
		Dow: 2,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1275],
		Leap: true
	},
	{
		solar: [1275, 9, 2],
		Dow: 3,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1275],
		Leap: true
	},
	{
		solar: [1275, 9, 29],
		Dow: 2,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1275],
		Leap: true
	},
	{
		solar: [1275, 9, 30],
		Dow: 3,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1275],
		Leap: true
	},
	{
		solar: [1275, 10, 1],
		Dow: 4,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1275],
		Leap: true
	},
	{
		solar: [1275, 10, 2],
		Dow: 5,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1275],
		Leap: true
	},
	{
		solar: [1275, 10, 29],
		Dow: 4,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1275],
		Leap: true
	},
	{
		solar: [1275, 10, 30],
		Dow: 5,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1275],
		Leap: true
	},
	{
		solar: [1275, 11, 1],
		Dow: 6,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1275],
		Leap: true
	},
	{
		solar: [1275, 11, 2],
		Dow: 0,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1275],
		Leap: true
	},
	{
		solar: [1275, 11, 26],
		Dow: 3,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1275],
		Leap: true
	},
	{
		solar: [1275, 11, 27],
		Dow: 4,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1275],
		Leap: true
	},
	{
		solar: [1275, 11, 28],
		Dow: 5,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1275],
		Leap: true
	},
	{
		solar: [1275, 11, 29],
		Dow: 6,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1275],
		Leap: true
	},
	{
		solar: [1275, 11, 30],
		Dow: 0,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1276],
		Leap: true
	},
	{
		solar: [1278, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1278],
		Leap: false
	},
	{
		solar: [1278, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1278],
		Leap: false
	},
	{
		solar: [1278, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1278],
		Leap: false
	},
	{
		solar: [1278, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1278],
		Leap: false
	},
	{
		solar: [1278, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1278],
		Leap: false
	},
	{
		solar: [1278, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1278],
		Leap: false
	},
	{
		solar: [1278, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1278],
		Leap: false
	},
	{
		solar: [1278, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1278],
		Leap: false
	},
	{
		solar: [1278, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1278],
		Leap: false
	},
	{
		solar: [1278, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1278],
		Leap: false
	},
	{
		solar: [1278, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1278],
		Leap: false
	},
	{
		solar: [1278, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1278],
		Leap: false
	},
	{
		solar: [1278, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1278],
		Leap: false
	},
	{
		solar: [1278, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1278],
		Leap: false
	},
	{
		solar: [1278, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1278],
		Leap: false
	},
	{
		solar: [1278, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1278],
		Leap: false
	},
	{
		solar: [1278, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1278],
		Leap: false
	},
	{
		solar: [1278, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1278],
		Leap: false
	},
	{
		solar: [1278, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1278],
		Leap: false
	},
	{
		solar: [1278, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1278],
		Leap: false
	},
	{
		solar: [1278, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1278],
		Leap: false
	},
	{
		solar: [1278, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1278],
		Leap: false
	},
	{
		solar: [1278, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1278],
		Leap: false
	},
	{
		solar: [1278, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1278],
		Leap: false
	},
	{
		solar: [1278, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1278],
		Leap: false
	},
	{
		solar: [1278, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1278],
		Leap: false
	},
	{
		solar: [1278, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1278],
		Leap: false
	},
	{
		solar: [1278, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1278],
		Leap: false
	},
	{
		solar: [1278, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1278],
		Leap: false
	},
	{
		solar: [1278, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1278],
		Leap: false
	},
	{
		solar: [1278, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1278],
		Leap: false
	},
	{
		solar: [1278, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1278],
		Leap: false
	},
	{
		solar: [1278, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1278],
		Leap: false
	},
	{
		solar: [1278, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1278],
		Leap: false
	},
	{
		solar: [1278, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1278],
		Leap: false
	},
	{
		solar: [1278, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1278],
		Leap: false
	},
	{
		solar: [1278, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1278],
		Leap: false
	},
	{
		solar: [1278, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1278],
		Leap: false
	},
	{
		solar: [1278, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1278],
		Leap: false
	},
	{
		solar: [1278, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1278],
		Leap: false
	},
	{
		solar: [1278, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1278],
		Leap: false
	},
	{
		solar: [1278, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1278],
		Leap: false
	},
	{
		solar: [1278, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1278],
		Leap: false
	},
	{
		solar: [1278, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1278],
		Leap: false
	},
	{
		solar: [1278, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1278],
		Leap: false
	},
	{
		solar: [1278, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1278],
		Leap: false
	},
	{
		solar: [1278, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1278],
		Leap: false
	},
	{
		solar: [1278, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1278],
		Leap: false
	},
	{
		solar: [1278, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1278],
		Leap: false
	},
	{
		solar: [1278, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1278],
		Leap: false
	},
	{
		solar: [1278, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1278],
		Leap: false
	},
	{
		solar: [1278, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1278],
		Leap: false
	},
	{
		solar: [1278, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1278],
		Leap: false
	},
	{
		solar: [1281, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1281],
		Leap: false
	},
	{
		solar: [1281, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1281],
		Leap: false
	},
	{
		solar: [1281, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1281],
		Leap: false
	},
	{
		solar: [1281, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1281],
		Leap: false
	},
	{
		solar: [1281, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1281],
		Leap: false
	},
	{
		solar: [1281, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1281],
		Leap: false
	},
	{
		solar: [1281, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1281],
		Leap: false
	},
	{
		solar: [1281, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1281],
		Leap: false
	},
	{
		solar: [1281, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1281],
		Leap: false
	},
	{
		solar: [1281, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1281],
		Leap: false
	},
	{
		solar: [1281, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1281],
		Leap: false
	},
	{
		solar: [1281, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1281],
		Leap: false
	},
	{
		solar: [1281, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1281],
		Leap: false
	},
	{
		solar: [1281, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1281],
		Leap: false
	},
	{
		solar: [1281, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1281],
		Leap: false
	},
	{
		solar: [1281, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1281],
		Leap: false
	},
	{
		solar: [1281, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1281],
		Leap: false
	},
	{
		solar: [1281, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1281],
		Leap: false
	},
	{
		solar: [1281, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1281],
		Leap: false
	},
	{
		solar: [1281, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1281],
		Leap: false
	},
	{
		solar: [1281, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1281],
		Leap: false
	},
	{
		solar: [1281, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1281],
		Leap: false
	},
	{
		solar: [1281, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1281],
		Leap: false
	},
	{
		solar: [1281, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1281],
		Leap: false
	},
	{
		solar: [1281, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1281],
		Leap: false
	},
	{
		solar: [1281, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1281],
		Leap: false
	},
	{
		solar: [1281, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1281],
		Leap: false
	},
	{
		solar: [1281, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1281],
		Leap: false
	},
	{
		solar: [1281, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1281],
		Leap: false
	},
	{
		solar: [1281, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1281],
		Leap: false
	},
	{
		solar: [1281, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1281],
		Leap: false
	},
	{
		solar: [1281, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1281],
		Leap: false
	},
	{
		solar: [1281, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1281],
		Leap: false
	},
	{
		solar: [1281, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1281],
		Leap: false
	},
	{
		solar: [1281, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1281],
		Leap: false
	},
	{
		solar: [1281, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1281],
		Leap: false
	},
	{
		solar: [1281, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1281],
		Leap: false
	},
	{
		solar: [1281, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1281],
		Leap: false
	},
	{
		solar: [1281, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1281],
		Leap: false
	},
	{
		solar: [1281, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1281],
		Leap: false
	},
	{
		solar: [1281, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1281],
		Leap: false
	},
	{
		solar: [1281, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1281],
		Leap: false
	},
	{
		solar: [1281, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1281],
		Leap: false
	},
	{
		solar: [1281, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1281],
		Leap: false
	},
	{
		solar: [1281, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1281],
		Leap: false
	},
	{
		solar: [1281, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1281],
		Leap: false
	},
	{
		solar: [1281, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1281],
		Leap: false
	},
	{
		solar: [1281, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1281],
		Leap: false
	},
	{
		solar: [1281, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1281],
		Leap: false
	},
	{
		solar: [1281, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1281],
		Leap: false
	},
	{
		solar: [1281, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1281],
		Leap: false
	},
	{
		solar: [1281, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1281],
		Leap: false
	},
	{
		solar: [1281, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1282],
		Leap: false
	},
	{
		solar: [1284, 0, 1],
		Dow: 3,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1284],
		Leap: true
	},
	{
		solar: [1284, 0, 2],
		Dow: 4,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1284],
		Leap: true
	},
	{
		solar: [1284, 0, 3],
		Dow: 5,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1284],
		Leap: true
	},
	{
		solar: [1284, 0, 4],
		Dow: 6,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1284],
		Leap: true
	},
	{
		solar: [1284, 0, 5],
		Dow: 0,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1284],
		Leap: true
	},
	{
		solar: [1284, 0, 30],
		Dow: 4,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1284],
		Leap: true
	},
	{
		solar: [1284, 0, 31],
		Dow: 5,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1284],
		Leap: true
	},
	{
		solar: [1284, 1, 1],
		Dow: 6,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1284],
		Leap: true
	},
	{
		solar: [1284, 1, 2],
		Dow: 0,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1284],
		Leap: true
	},
	{
		solar: [1284, 1, 30],
		Dow: 0,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1284],
		Leap: true
	},
	{
		solar: [1284, 1, 31],
		Dow: 1,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1284],
		Leap: true
	},
	{
		solar: [1284, 2, 1],
		Dow: 2,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1284],
		Leap: true
	},
	{
		solar: [1284, 2, 2],
		Dow: 3,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1284],
		Leap: true
	},
	{
		solar: [1284, 2, 30],
		Dow: 3,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1284],
		Leap: true
	},
	{
		solar: [1284, 2, 31],
		Dow: 4,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1284],
		Leap: true
	},
	{
		solar: [1284, 3, 1],
		Dow: 5,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1284],
		Leap: true
	},
	{
		solar: [1284, 3, 2],
		Dow: 6,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1284],
		Leap: true
	},
	{
		solar: [1284, 3, 30],
		Dow: 6,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1284],
		Leap: true
	},
	{
		solar: [1284, 3, 31],
		Dow: 0,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1284],
		Leap: true
	},
	{
		solar: [1284, 4, 1],
		Dow: 1,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1284],
		Leap: true
	},
	{
		solar: [1284, 4, 2],
		Dow: 2,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1284],
		Leap: true
	},
	{
		solar: [1284, 4, 30],
		Dow: 2,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1284],
		Leap: true
	},
	{
		solar: [1284, 4, 31],
		Dow: 3,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1284],
		Leap: true
	},
	{
		solar: [1284, 5, 1],
		Dow: 4,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1284],
		Leap: true
	},
	{
		solar: [1284, 5, 2],
		Dow: 5,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1284],
		Leap: true
	},
	{
		solar: [1284, 5, 30],
		Dow: 5,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1284],
		Leap: true
	},
	{
		solar: [1284, 5, 31],
		Dow: 6,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1284],
		Leap: true
	},
	{
		solar: [1284, 6, 1],
		Dow: 0,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1284],
		Leap: true
	},
	{
		solar: [1284, 6, 2],
		Dow: 1,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1284],
		Leap: true
	},
	{
		solar: [1284, 6, 29],
		Dow: 0,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1284],
		Leap: true
	},
	{
		solar: [1284, 6, 30],
		Dow: 1,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1284],
		Leap: true
	},
	{
		solar: [1284, 7, 1],
		Dow: 2,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1284],
		Leap: true
	},
	{
		solar: [1284, 7, 2],
		Dow: 3,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1284],
		Leap: true
	},
	{
		solar: [1284, 7, 29],
		Dow: 2,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1284],
		Leap: true
	},
	{
		solar: [1284, 7, 30],
		Dow: 3,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1284],
		Leap: true
	},
	{
		solar: [1284, 8, 1],
		Dow: 4,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1284],
		Leap: true
	},
	{
		solar: [1284, 8, 2],
		Dow: 5,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1284],
		Leap: true
	},
	{
		solar: [1284, 8, 29],
		Dow: 4,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1284],
		Leap: true
	},
	{
		solar: [1284, 8, 30],
		Dow: 5,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1284],
		Leap: true
	},
	{
		solar: [1284, 9, 1],
		Dow: 6,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1284],
		Leap: true
	},
	{
		solar: [1284, 9, 2],
		Dow: 0,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1284],
		Leap: true
	},
	{
		solar: [1284, 9, 29],
		Dow: 6,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1284],
		Leap: true
	},
	{
		solar: [1284, 9, 30],
		Dow: 0,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1284],
		Leap: true
	},
	{
		solar: [1284, 10, 1],
		Dow: 1,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1284],
		Leap: true
	},
	{
		solar: [1284, 10, 2],
		Dow: 2,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1284],
		Leap: true
	},
	{
		solar: [1284, 10, 29],
		Dow: 1,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1284],
		Leap: true
	},
	{
		solar: [1284, 10, 30],
		Dow: 2,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1284],
		Leap: true
	},
	{
		solar: [1284, 11, 1],
		Dow: 3,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1284],
		Leap: true
	},
	{
		solar: [1284, 11, 2],
		Dow: 4,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1284],
		Leap: true
	},
	{
		solar: [1284, 11, 26],
		Dow: 0,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1284],
		Leap: true
	},
	{
		solar: [1284, 11, 27],
		Dow: 1,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1284],
		Leap: true
	},
	{
		solar: [1284, 11, 28],
		Dow: 2,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1284],
		Leap: true
	},
	{
		solar: [1284, 11, 29],
		Dow: 3,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1284],
		Leap: true
	},
	{
		solar: [1284, 11, 30],
		Dow: 4,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1284],
		Leap: true
	},
	{
		solar: [1287, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1287],
		Leap: false
	},
	{
		solar: [1287, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1287],
		Leap: false
	},
	{
		solar: [1287, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1287],
		Leap: false
	},
	{
		solar: [1287, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1287],
		Leap: false
	},
	{
		solar: [1287, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1287],
		Leap: false
	},
	{
		solar: [1287, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1287],
		Leap: false
	},
	{
		solar: [1287, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1287],
		Leap: false
	},
	{
		solar: [1287, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1287],
		Leap: false
	},
	{
		solar: [1287, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1287],
		Leap: false
	},
	{
		solar: [1287, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1287],
		Leap: false
	},
	{
		solar: [1287, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1287],
		Leap: false
	},
	{
		solar: [1287, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1287],
		Leap: false
	},
	{
		solar: [1287, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1287],
		Leap: false
	},
	{
		solar: [1287, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1287],
		Leap: false
	},
	{
		solar: [1287, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1287],
		Leap: false
	},
	{
		solar: [1287, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1287],
		Leap: false
	},
	{
		solar: [1287, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1287],
		Leap: false
	},
	{
		solar: [1287, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1287],
		Leap: false
	},
	{
		solar: [1287, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1287],
		Leap: false
	},
	{
		solar: [1287, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1287],
		Leap: false
	},
	{
		solar: [1287, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1287],
		Leap: false
	},
	{
		solar: [1287, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1287],
		Leap: false
	},
	{
		solar: [1287, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1287],
		Leap: false
	},
	{
		solar: [1287, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1287],
		Leap: false
	},
	{
		solar: [1287, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1287],
		Leap: false
	},
	{
		solar: [1287, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1287],
		Leap: false
	},
	{
		solar: [1287, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1287],
		Leap: false
	},
	{
		solar: [1287, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1287],
		Leap: false
	},
	{
		solar: [1287, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1287],
		Leap: false
	},
	{
		solar: [1287, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1287],
		Leap: false
	},
	{
		solar: [1287, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1287],
		Leap: false
	},
	{
		solar: [1287, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1287],
		Leap: false
	},
	{
		solar: [1287, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1287],
		Leap: false
	},
	{
		solar: [1287, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1287],
		Leap: false
	},
	{
		solar: [1287, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1287],
		Leap: false
	},
	{
		solar: [1287, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1287],
		Leap: false
	},
	{
		solar: [1287, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1287],
		Leap: false
	},
	{
		solar: [1287, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1287],
		Leap: false
	},
	{
		solar: [1287, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1287],
		Leap: false
	},
	{
		solar: [1287, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1287],
		Leap: false
	},
	{
		solar: [1287, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1287],
		Leap: false
	},
	{
		solar: [1287, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1287],
		Leap: false
	},
	{
		solar: [1287, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1287],
		Leap: false
	},
	{
		solar: [1287, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1287],
		Leap: false
	},
	{
		solar: [1287, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1287],
		Leap: false
	},
	{
		solar: [1287, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1287],
		Leap: false
	},
	{
		solar: [1287, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1287],
		Leap: false
	},
	{
		solar: [1287, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1287],
		Leap: false
	},
	{
		solar: [1287, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1287],
		Leap: false
	},
	{
		solar: [1287, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1287],
		Leap: false
	},
	{
		solar: [1287, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1287],
		Leap: false
	},
	{
		solar: [1287, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1287],
		Leap: false
	},
	{
		solar: [1287, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1288],
		Leap: false
	},
	{
		solar: [1290, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1289],
		Leap: false
	},
	{
		solar: [1290, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1289],
		Leap: false
	},
	{
		solar: [1290, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1289],
		Leap: false
	},
	{
		solar: [1290, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1290],
		Leap: false
	},
	{
		solar: [1290, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1290],
		Leap: false
	},
	{
		solar: [1290, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1290],
		Leap: false
	},
	{
		solar: [1290, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1290],
		Leap: false
	},
	{
		solar: [1290, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1290],
		Leap: false
	},
	{
		solar: [1290, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1290],
		Leap: false
	},
	{
		solar: [1290, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1290],
		Leap: false
	},
	{
		solar: [1290, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1290],
		Leap: false
	},
	{
		solar: [1290, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1290],
		Leap: false
	},
	{
		solar: [1290, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1290],
		Leap: false
	},
	{
		solar: [1290, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1290],
		Leap: false
	},
	{
		solar: [1290, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1290],
		Leap: false
	},
	{
		solar: [1290, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1290],
		Leap: false
	},
	{
		solar: [1290, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1290],
		Leap: false
	},
	{
		solar: [1290, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1290],
		Leap: false
	},
	{
		solar: [1290, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1290],
		Leap: false
	},
	{
		solar: [1290, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1290],
		Leap: false
	},
	{
		solar: [1290, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1290],
		Leap: false
	},
	{
		solar: [1290, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1290],
		Leap: false
	},
	{
		solar: [1290, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1290],
		Leap: false
	},
	{
		solar: [1290, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1290],
		Leap: false
	},
	{
		solar: [1290, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1290],
		Leap: false
	},
	{
		solar: [1290, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1290],
		Leap: false
	},
	{
		solar: [1290, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1290],
		Leap: false
	},
	{
		solar: [1290, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1290],
		Leap: false
	},
	{
		solar: [1290, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1290],
		Leap: false
	},
	{
		solar: [1290, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1290],
		Leap: false
	},
	{
		solar: [1290, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1290],
		Leap: false
	},
	{
		solar: [1290, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1290],
		Leap: false
	},
	{
		solar: [1290, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1290],
		Leap: false
	},
	{
		solar: [1290, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1290],
		Leap: false
	},
	{
		solar: [1290, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1290],
		Leap: false
	},
	{
		solar: [1290, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1290],
		Leap: false
	},
	{
		solar: [1290, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1290],
		Leap: false
	},
	{
		solar: [1290, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1290],
		Leap: false
	},
	{
		solar: [1290, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1290],
		Leap: false
	},
	{
		solar: [1290, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1290],
		Leap: false
	},
	{
		solar: [1290, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1290],
		Leap: false
	},
	{
		solar: [1290, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1290],
		Leap: false
	},
	{
		solar: [1290, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1290],
		Leap: false
	},
	{
		solar: [1290, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1290],
		Leap: false
	},
	{
		solar: [1290, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1290],
		Leap: false
	},
	{
		solar: [1290, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1290],
		Leap: false
	},
	{
		solar: [1290, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1290],
		Leap: false
	},
	{
		solar: [1290, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1290],
		Leap: false
	},
	{
		solar: [1290, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1290],
		Leap: false
	},
	{
		solar: [1290, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1290],
		Leap: false
	},
	{
		solar: [1290, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1290],
		Leap: false
	},
	{
		solar: [1290, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1290],
		Leap: false
	},
	{
		solar: [1290, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1290],
		Leap: false
	},
	{
		solar: [1293, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1293],
		Leap: false
	},
	{
		solar: [1293, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1293],
		Leap: false
	},
	{
		solar: [1293, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1293],
		Leap: false
	},
	{
		solar: [1293, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1293],
		Leap: false
	},
	{
		solar: [1293, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1293],
		Leap: false
	},
	{
		solar: [1293, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1293],
		Leap: false
	},
	{
		solar: [1293, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1293],
		Leap: false
	},
	{
		solar: [1293, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1293],
		Leap: false
	},
	{
		solar: [1293, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1293],
		Leap: false
	},
	{
		solar: [1293, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1293],
		Leap: false
	},
	{
		solar: [1293, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1293],
		Leap: false
	},
	{
		solar: [1293, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1293],
		Leap: false
	},
	{
		solar: [1293, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1293],
		Leap: false
	},
	{
		solar: [1293, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1293],
		Leap: false
	},
	{
		solar: [1293, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1293],
		Leap: false
	},
	{
		solar: [1293, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1293],
		Leap: false
	},
	{
		solar: [1293, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1293],
		Leap: false
	},
	{
		solar: [1293, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1293],
		Leap: false
	},
	{
		solar: [1293, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1293],
		Leap: false
	},
	{
		solar: [1293, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1293],
		Leap: false
	},
	{
		solar: [1293, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1293],
		Leap: false
	},
	{
		solar: [1293, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1293],
		Leap: false
	},
	{
		solar: [1293, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1293],
		Leap: false
	},
	{
		solar: [1293, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1293],
		Leap: false
	},
	{
		solar: [1293, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1293],
		Leap: false
	},
	{
		solar: [1293, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1293],
		Leap: false
	},
	{
		solar: [1293, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1293],
		Leap: false
	},
	{
		solar: [1293, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1293],
		Leap: false
	},
	{
		solar: [1293, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1293],
		Leap: false
	},
	{
		solar: [1293, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1293],
		Leap: false
	},
	{
		solar: [1293, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1293],
		Leap: false
	},
	{
		solar: [1293, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1293],
		Leap: false
	},
	{
		solar: [1293, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1293],
		Leap: false
	},
	{
		solar: [1293, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1293],
		Leap: false
	},
	{
		solar: [1293, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1293],
		Leap: false
	},
	{
		solar: [1293, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1293],
		Leap: false
	},
	{
		solar: [1293, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1293],
		Leap: false
	},
	{
		solar: [1293, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1293],
		Leap: false
	},
	{
		solar: [1293, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1293],
		Leap: false
	},
	{
		solar: [1293, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1293],
		Leap: false
	},
	{
		solar: [1293, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1293],
		Leap: false
	},
	{
		solar: [1293, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1293],
		Leap: false
	},
	{
		solar: [1293, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1293],
		Leap: false
	},
	{
		solar: [1293, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1293],
		Leap: false
	},
	{
		solar: [1293, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1293],
		Leap: false
	},
	{
		solar: [1293, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1293],
		Leap: false
	},
	{
		solar: [1293, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1293],
		Leap: false
	},
	{
		solar: [1293, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1293],
		Leap: false
	},
	{
		solar: [1293, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1293],
		Leap: false
	},
	{
		solar: [1293, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1293],
		Leap: false
	},
	{
		solar: [1293, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1293],
		Leap: false
	},
	{
		solar: [1293, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1294],
		Leap: false
	},
	{
		solar: [1293, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1294],
		Leap: false
	},
	{
		solar: [1296, 0, 1],
		Dow: 4,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1295],
		Leap: true
	},
	{
		solar: [1296, 0, 2],
		Dow: 5,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1295],
		Leap: true
	},
	{
		solar: [1296, 0, 3],
		Dow: 6,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1295],
		Leap: true
	},
	{
		solar: [1296, 0, 4],
		Dow: 0,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1296],
		Leap: true
	},
	{
		solar: [1296, 0, 5],
		Dow: 1,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1296],
		Leap: true
	},
	{
		solar: [1296, 0, 30],
		Dow: 5,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1296],
		Leap: true
	},
	{
		solar: [1296, 0, 31],
		Dow: 6,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1296],
		Leap: true
	},
	{
		solar: [1296, 1, 1],
		Dow: 0,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1296],
		Leap: true
	},
	{
		solar: [1296, 1, 2],
		Dow: 1,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1296],
		Leap: true
	},
	{
		solar: [1296, 1, 30],
		Dow: 1,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1296],
		Leap: true
	},
	{
		solar: [1296, 1, 31],
		Dow: 2,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1296],
		Leap: true
	},
	{
		solar: [1296, 2, 1],
		Dow: 3,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1296],
		Leap: true
	},
	{
		solar: [1296, 2, 2],
		Dow: 4,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1296],
		Leap: true
	},
	{
		solar: [1296, 2, 30],
		Dow: 4,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1296],
		Leap: true
	},
	{
		solar: [1296, 2, 31],
		Dow: 5,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1296],
		Leap: true
	},
	{
		solar: [1296, 3, 1],
		Dow: 6,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1296],
		Leap: true
	},
	{
		solar: [1296, 3, 2],
		Dow: 0,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1296],
		Leap: true
	},
	{
		solar: [1296, 3, 30],
		Dow: 0,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1296],
		Leap: true
	},
	{
		solar: [1296, 3, 31],
		Dow: 1,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1296],
		Leap: true
	},
	{
		solar: [1296, 4, 1],
		Dow: 2,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1296],
		Leap: true
	},
	{
		solar: [1296, 4, 2],
		Dow: 3,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1296],
		Leap: true
	},
	{
		solar: [1296, 4, 30],
		Dow: 3,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1296],
		Leap: true
	},
	{
		solar: [1296, 4, 31],
		Dow: 4,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1296],
		Leap: true
	},
	{
		solar: [1296, 5, 1],
		Dow: 5,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1296],
		Leap: true
	},
	{
		solar: [1296, 5, 2],
		Dow: 6,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1296],
		Leap: true
	},
	{
		solar: [1296, 5, 30],
		Dow: 6,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1296],
		Leap: true
	},
	{
		solar: [1296, 5, 31],
		Dow: 0,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1296],
		Leap: true
	},
	{
		solar: [1296, 6, 1],
		Dow: 1,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1296],
		Leap: true
	},
	{
		solar: [1296, 6, 2],
		Dow: 2,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1296],
		Leap: true
	},
	{
		solar: [1296, 6, 29],
		Dow: 1,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1296],
		Leap: true
	},
	{
		solar: [1296, 6, 30],
		Dow: 2,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1296],
		Leap: true
	},
	{
		solar: [1296, 7, 1],
		Dow: 3,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1296],
		Leap: true
	},
	{
		solar: [1296, 7, 2],
		Dow: 4,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1296],
		Leap: true
	},
	{
		solar: [1296, 7, 29],
		Dow: 3,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1296],
		Leap: true
	},
	{
		solar: [1296, 7, 30],
		Dow: 4,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1296],
		Leap: true
	},
	{
		solar: [1296, 8, 1],
		Dow: 5,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1296],
		Leap: true
	},
	{
		solar: [1296, 8, 2],
		Dow: 6,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1296],
		Leap: true
	},
	{
		solar: [1296, 8, 29],
		Dow: 5,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1296],
		Leap: true
	},
	{
		solar: [1296, 8, 30],
		Dow: 6,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1296],
		Leap: true
	},
	{
		solar: [1296, 9, 1],
		Dow: 0,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1296],
		Leap: true
	},
	{
		solar: [1296, 9, 2],
		Dow: 1,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1296],
		Leap: true
	},
	{
		solar: [1296, 9, 29],
		Dow: 0,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1296],
		Leap: true
	},
	{
		solar: [1296, 9, 30],
		Dow: 1,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1296],
		Leap: true
	},
	{
		solar: [1296, 10, 1],
		Dow: 2,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1296],
		Leap: true
	},
	{
		solar: [1296, 10, 2],
		Dow: 3,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1296],
		Leap: true
	},
	{
		solar: [1296, 10, 29],
		Dow: 2,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1296],
		Leap: true
	},
	{
		solar: [1296, 10, 30],
		Dow: 3,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1296],
		Leap: true
	},
	{
		solar: [1296, 11, 1],
		Dow: 4,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1296],
		Leap: true
	},
	{
		solar: [1296, 11, 2],
		Dow: 5,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1296],
		Leap: true
	},
	{
		solar: [1296, 11, 26],
		Dow: 1,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1296],
		Leap: true
	},
	{
		solar: [1296, 11, 27],
		Dow: 2,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1296],
		Leap: true
	},
	{
		solar: [1296, 11, 28],
		Dow: 3,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1296],
		Leap: true
	},
	{
		solar: [1296, 11, 29],
		Dow: 4,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1296],
		Leap: true
	},
	{
		solar: [1296, 11, 30],
		Dow: 5,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1296],
		Leap: true
	},
	{
		solar: [1299, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1299],
		Leap: false
	},
	{
		solar: [1299, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1299],
		Leap: false
	},
	{
		solar: [1299, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1299],
		Leap: false
	},
	{
		solar: [1299, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1299],
		Leap: false
	},
	{
		solar: [1299, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1299],
		Leap: false
	},
	{
		solar: [1299, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1299],
		Leap: false
	},
	{
		solar: [1299, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1299],
		Leap: false
	},
	{
		solar: [1299, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1299],
		Leap: false
	},
	{
		solar: [1299, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1299],
		Leap: false
	},
	{
		solar: [1299, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1299],
		Leap: false
	},
	{
		solar: [1299, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1299],
		Leap: false
	},
	{
		solar: [1299, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1299],
		Leap: false
	},
	{
		solar: [1299, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1299],
		Leap: false
	},
	{
		solar: [1299, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1299],
		Leap: false
	},
	{
		solar: [1299, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1299],
		Leap: false
	},
	{
		solar: [1299, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1299],
		Leap: false
	},
	{
		solar: [1299, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1299],
		Leap: false
	},
	{
		solar: [1299, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1299],
		Leap: false
	},
	{
		solar: [1299, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1299],
		Leap: false
	},
	{
		solar: [1299, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1299],
		Leap: false
	},
	{
		solar: [1299, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1299],
		Leap: false
	},
	{
		solar: [1299, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1299],
		Leap: false
	},
	{
		solar: [1299, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1299],
		Leap: false
	},
	{
		solar: [1299, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1299],
		Leap: false
	},
	{
		solar: [1299, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1299],
		Leap: false
	},
	{
		solar: [1299, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1299],
		Leap: false
	},
	{
		solar: [1299, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1299],
		Leap: false
	},
	{
		solar: [1299, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1299],
		Leap: false
	},
	{
		solar: [1299, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1299],
		Leap: false
	},
	{
		solar: [1299, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1299],
		Leap: false
	},
	{
		solar: [1299, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1299],
		Leap: false
	},
	{
		solar: [1299, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1299],
		Leap: false
	},
	{
		solar: [1299, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1299],
		Leap: false
	},
	{
		solar: [1299, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1299],
		Leap: false
	},
	{
		solar: [1299, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1299],
		Leap: false
	},
	{
		solar: [1299, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1299],
		Leap: false
	},
	{
		solar: [1299, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1299],
		Leap: false
	},
	{
		solar: [1299, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1299],
		Leap: false
	},
	{
		solar: [1299, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1299],
		Leap: false
	},
	{
		solar: [1299, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1299],
		Leap: false
	},
	{
		solar: [1299, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1299],
		Leap: false
	},
	{
		solar: [1299, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1299],
		Leap: false
	},
	{
		solar: [1299, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1299],
		Leap: false
	},
	{
		solar: [1299, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1299],
		Leap: false
	},
	{
		solar: [1299, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1299],
		Leap: false
	},
	{
		solar: [1299, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1299],
		Leap: false
	},
	{
		solar: [1299, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1299],
		Leap: false
	},
	{
		solar: [1299, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1299],
		Leap: false
	},
	{
		solar: [1299, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1299],
		Leap: false
	},
	{
		solar: [1299, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1299],
		Leap: false
	},
	{
		solar: [1299, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1299],
		Leap: false
	},
	{
		solar: [1299, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1300],
		Leap: false
	},
	{
		solar: [1299, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1300],
		Leap: false
	},
	{
		solar: [1302, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1301],
		Leap: false
	},
	{
		solar: [1302, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1301],
		Leap: false
	},
	{
		solar: [1302, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1302],
		Leap: false
	},
	{
		solar: [1302, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1302],
		Leap: false
	},
	{
		solar: [1302, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1302],
		Leap: false
	},
	{
		solar: [1302, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1302],
		Leap: false
	},
	{
		solar: [1302, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1302],
		Leap: false
	},
	{
		solar: [1302, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1302],
		Leap: false
	},
	{
		solar: [1302, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1302],
		Leap: false
	},
	{
		solar: [1302, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1302],
		Leap: false
	},
	{
		solar: [1302, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1302],
		Leap: false
	},
	{
		solar: [1302, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1302],
		Leap: false
	},
	{
		solar: [1302, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1302],
		Leap: false
	},
	{
		solar: [1302, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1302],
		Leap: false
	},
	{
		solar: [1302, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1302],
		Leap: false
	},
	{
		solar: [1302, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1302],
		Leap: false
	},
	{
		solar: [1302, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1302],
		Leap: false
	},
	{
		solar: [1302, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1302],
		Leap: false
	},
	{
		solar: [1302, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1302],
		Leap: false
	},
	{
		solar: [1302, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1302],
		Leap: false
	},
	{
		solar: [1302, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1302],
		Leap: false
	},
	{
		solar: [1302, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1302],
		Leap: false
	},
	{
		solar: [1302, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1302],
		Leap: false
	},
	{
		solar: [1302, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1302],
		Leap: false
	},
	{
		solar: [1302, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1302],
		Leap: false
	},
	{
		solar: [1302, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1302],
		Leap: false
	},
	{
		solar: [1302, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1302],
		Leap: false
	},
	{
		solar: [1302, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1302],
		Leap: false
	},
	{
		solar: [1302, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1302],
		Leap: false
	},
	{
		solar: [1302, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1302],
		Leap: false
	},
	{
		solar: [1302, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1302],
		Leap: false
	},
	{
		solar: [1302, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1302],
		Leap: false
	},
	{
		solar: [1302, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1302],
		Leap: false
	},
	{
		solar: [1302, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1302],
		Leap: false
	},
	{
		solar: [1302, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1302],
		Leap: false
	},
	{
		solar: [1302, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1302],
		Leap: false
	},
	{
		solar: [1302, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1302],
		Leap: false
	},
	{
		solar: [1302, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1302],
		Leap: false
	},
	{
		solar: [1302, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1302],
		Leap: false
	},
	{
		solar: [1302, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1302],
		Leap: false
	},
	{
		solar: [1302, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1302],
		Leap: false
	},
	{
		solar: [1302, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1302],
		Leap: false
	},
	{
		solar: [1302, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1302],
		Leap: false
	},
	{
		solar: [1302, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1302],
		Leap: false
	},
	{
		solar: [1302, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1302],
		Leap: false
	},
	{
		solar: [1302, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1302],
		Leap: false
	},
	{
		solar: [1302, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1302],
		Leap: false
	},
	{
		solar: [1302, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1302],
		Leap: false
	},
	{
		solar: [1302, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1302],
		Leap: false
	},
	{
		solar: [1302, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1302],
		Leap: false
	},
	{
		solar: [1302, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1302],
		Leap: false
	},
	{
		solar: [1302, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1302],
		Leap: false
	},
	{
		solar: [1302, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1302],
		Leap: false
	},
	{
		solar: [1305, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1305],
		Leap: false
	},
	{
		solar: [1305, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1305],
		Leap: false
	},
	{
		solar: [1305, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1305],
		Leap: false
	},
	{
		solar: [1305, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1305],
		Leap: false
	},
	{
		solar: [1305, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1305],
		Leap: false
	},
	{
		solar: [1305, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1305],
		Leap: false
	},
	{
		solar: [1305, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1305],
		Leap: false
	},
	{
		solar: [1305, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1305],
		Leap: false
	},
	{
		solar: [1305, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1305],
		Leap: false
	},
	{
		solar: [1305, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1305],
		Leap: false
	},
	{
		solar: [1305, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1305],
		Leap: false
	},
	{
		solar: [1305, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1305],
		Leap: false
	},
	{
		solar: [1305, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1305],
		Leap: false
	},
	{
		solar: [1305, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1305],
		Leap: false
	},
	{
		solar: [1305, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1305],
		Leap: false
	},
	{
		solar: [1305, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1305],
		Leap: false
	},
	{
		solar: [1305, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1305],
		Leap: false
	},
	{
		solar: [1305, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1305],
		Leap: false
	},
	{
		solar: [1305, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1305],
		Leap: false
	},
	{
		solar: [1305, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1305],
		Leap: false
	},
	{
		solar: [1305, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1305],
		Leap: false
	},
	{
		solar: [1305, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1305],
		Leap: false
	},
	{
		solar: [1305, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1305],
		Leap: false
	},
	{
		solar: [1305, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1305],
		Leap: false
	},
	{
		solar: [1305, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1305],
		Leap: false
	},
	{
		solar: [1305, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1305],
		Leap: false
	},
	{
		solar: [1305, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1305],
		Leap: false
	},
	{
		solar: [1305, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1305],
		Leap: false
	},
	{
		solar: [1305, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1305],
		Leap: false
	},
	{
		solar: [1305, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1305],
		Leap: false
	},
	{
		solar: [1305, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1305],
		Leap: false
	},
	{
		solar: [1305, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1305],
		Leap: false
	},
	{
		solar: [1305, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1305],
		Leap: false
	},
	{
		solar: [1305, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1305],
		Leap: false
	},
	{
		solar: [1305, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1305],
		Leap: false
	},
	{
		solar: [1305, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1305],
		Leap: false
	},
	{
		solar: [1305, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1305],
		Leap: false
	},
	{
		solar: [1305, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1305],
		Leap: false
	},
	{
		solar: [1305, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1305],
		Leap: false
	},
	{
		solar: [1305, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1305],
		Leap: false
	},
	{
		solar: [1305, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1305],
		Leap: false
	},
	{
		solar: [1305, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1305],
		Leap: false
	},
	{
		solar: [1305, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1305],
		Leap: false
	},
	{
		solar: [1305, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1305],
		Leap: false
	},
	{
		solar: [1305, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1305],
		Leap: false
	},
	{
		solar: [1305, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1305],
		Leap: false
	},
	{
		solar: [1305, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1305],
		Leap: false
	},
	{
		solar: [1305, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1305],
		Leap: false
	},
	{
		solar: [1305, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1305],
		Leap: false
	},
	{
		solar: [1305, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1305],
		Leap: false
	},
	{
		solar: [1305, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1306],
		Leap: false
	},
	{
		solar: [1305, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1306],
		Leap: false
	},
	{
		solar: [1305, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1306],
		Leap: false
	},
	{
		solar: [1308, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1307],
		Leap: false
	},
	{
		solar: [1308, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1307],
		Leap: false
	},
	{
		solar: [1308, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1308],
		Leap: false
	},
	{
		solar: [1308, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1308],
		Leap: false
	},
	{
		solar: [1308, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1308],
		Leap: false
	},
	{
		solar: [1308, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1308],
		Leap: false
	},
	{
		solar: [1308, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1308],
		Leap: false
	},
	{
		solar: [1308, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1308],
		Leap: false
	},
	{
		solar: [1308, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1308],
		Leap: false
	},
	{
		solar: [1308, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1308],
		Leap: false
	},
	{
		solar: [1308, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1308],
		Leap: false
	},
	{
		solar: [1308, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1308],
		Leap: false
	},
	{
		solar: [1308, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1308],
		Leap: false
	},
	{
		solar: [1308, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1308],
		Leap: false
	},
	{
		solar: [1308, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1308],
		Leap: false
	},
	{
		solar: [1308, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1308],
		Leap: false
	},
	{
		solar: [1308, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1308],
		Leap: false
	},
	{
		solar: [1308, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1308],
		Leap: false
	},
	{
		solar: [1308, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1308],
		Leap: false
	},
	{
		solar: [1308, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1308],
		Leap: false
	},
	{
		solar: [1308, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1308],
		Leap: false
	},
	{
		solar: [1308, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1308],
		Leap: false
	},
	{
		solar: [1308, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1308],
		Leap: false
	},
	{
		solar: [1308, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1308],
		Leap: false
	},
	{
		solar: [1308, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1308],
		Leap: false
	},
	{
		solar: [1308, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1308],
		Leap: false
	},
	{
		solar: [1308, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1308],
		Leap: false
	},
	{
		solar: [1308, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1308],
		Leap: false
	},
	{
		solar: [1308, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1308],
		Leap: false
	},
	{
		solar: [1308, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1308],
		Leap: false
	},
	{
		solar: [1308, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1308],
		Leap: false
	},
	{
		solar: [1308, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1308],
		Leap: false
	},
	{
		solar: [1308, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1308],
		Leap: false
	},
	{
		solar: [1308, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1308],
		Leap: false
	},
	{
		solar: [1308, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1308],
		Leap: false
	},
	{
		solar: [1308, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1308],
		Leap: false
	},
	{
		solar: [1308, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1308],
		Leap: false
	},
	{
		solar: [1308, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1308],
		Leap: false
	},
	{
		solar: [1308, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1308],
		Leap: false
	},
	{
		solar: [1308, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1308],
		Leap: false
	},
	{
		solar: [1308, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1308],
		Leap: false
	},
	{
		solar: [1308, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1308],
		Leap: false
	},
	{
		solar: [1308, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1308],
		Leap: false
	},
	{
		solar: [1308, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1308],
		Leap: false
	},
	{
		solar: [1308, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1308],
		Leap: false
	},
	{
		solar: [1308, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1308],
		Leap: false
	},
	{
		solar: [1308, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1308],
		Leap: false
	},
	{
		solar: [1308, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1308],
		Leap: false
	},
	{
		solar: [1308, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1308],
		Leap: false
	},
	{
		solar: [1308, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1308],
		Leap: false
	},
	{
		solar: [1308, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1308],
		Leap: false
	},
	{
		solar: [1308, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1308],
		Leap: false
	},
	{
		solar: [1308, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1308],
		Leap: false
	},
	{
		solar: [1311, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1311],
		Leap: false
	},
	{
		solar: [1311, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1311],
		Leap: false
	},
	{
		solar: [1311, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1311],
		Leap: false
	},
	{
		solar: [1311, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1311],
		Leap: false
	},
	{
		solar: [1311, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1311],
		Leap: false
	},
	{
		solar: [1311, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1311],
		Leap: false
	},
	{
		solar: [1311, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1311],
		Leap: false
	},
	{
		solar: [1311, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1311],
		Leap: false
	},
	{
		solar: [1311, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1311],
		Leap: false
	},
	{
		solar: [1311, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1311],
		Leap: false
	},
	{
		solar: [1311, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1311],
		Leap: false
	},
	{
		solar: [1311, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1311],
		Leap: false
	},
	{
		solar: [1311, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1311],
		Leap: false
	},
	{
		solar: [1311, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1311],
		Leap: false
	},
	{
		solar: [1311, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1311],
		Leap: false
	},
	{
		solar: [1311, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1311],
		Leap: false
	},
	{
		solar: [1311, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1311],
		Leap: false
	},
	{
		solar: [1311, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1311],
		Leap: false
	},
	{
		solar: [1311, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1311],
		Leap: false
	},
	{
		solar: [1311, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1311],
		Leap: false
	},
	{
		solar: [1311, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1311],
		Leap: false
	},
	{
		solar: [1311, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1311],
		Leap: false
	},
	{
		solar: [1311, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1311],
		Leap: false
	},
	{
		solar: [1311, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1311],
		Leap: false
	},
	{
		solar: [1311, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1311],
		Leap: false
	},
	{
		solar: [1311, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1311],
		Leap: false
	},
	{
		solar: [1311, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1311],
		Leap: false
	},
	{
		solar: [1311, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1311],
		Leap: false
	},
	{
		solar: [1311, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1311],
		Leap: false
	},
	{
		solar: [1311, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1311],
		Leap: false
	},
	{
		solar: [1311, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1311],
		Leap: false
	},
	{
		solar: [1311, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1311],
		Leap: false
	},
	{
		solar: [1311, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1311],
		Leap: false
	},
	{
		solar: [1311, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1311],
		Leap: false
	},
	{
		solar: [1311, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1311],
		Leap: false
	},
	{
		solar: [1311, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1311],
		Leap: false
	},
	{
		solar: [1311, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1311],
		Leap: false
	},
	{
		solar: [1311, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1311],
		Leap: false
	},
	{
		solar: [1311, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1311],
		Leap: false
	},
	{
		solar: [1311, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1311],
		Leap: false
	},
	{
		solar: [1311, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1311],
		Leap: false
	},
	{
		solar: [1311, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1311],
		Leap: false
	},
	{
		solar: [1311, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1311],
		Leap: false
	},
	{
		solar: [1311, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1311],
		Leap: false
	},
	{
		solar: [1311, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1311],
		Leap: false
	},
	{
		solar: [1311, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1311],
		Leap: false
	},
	{
		solar: [1311, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1311],
		Leap: false
	},
	{
		solar: [1311, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1311],
		Leap: false
	},
	{
		solar: [1311, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1311],
		Leap: false
	},
	{
		solar: [1311, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1311],
		Leap: false
	},
	{
		solar: [1311, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1312],
		Leap: false
	},
	{
		solar: [1311, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1312],
		Leap: false
	},
	{
		solar: [1311, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1312],
		Leap: false
	},
	{
		solar: [1314, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1313],
		Leap: false
	},
	{
		solar: [1314, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1314],
		Leap: false
	},
	{
		solar: [1314, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1314],
		Leap: false
	},
	{
		solar: [1314, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1314],
		Leap: false
	},
	{
		solar: [1314, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1314],
		Leap: false
	},
	{
		solar: [1314, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1314],
		Leap: false
	},
	{
		solar: [1314, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1314],
		Leap: false
	},
	{
		solar: [1314, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1314],
		Leap: false
	},
	{
		solar: [1314, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1314],
		Leap: false
	},
	{
		solar: [1314, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1314],
		Leap: false
	},
	{
		solar: [1314, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1314],
		Leap: false
	},
	{
		solar: [1314, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1314],
		Leap: false
	},
	{
		solar: [1314, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1314],
		Leap: false
	},
	{
		solar: [1314, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1314],
		Leap: false
	},
	{
		solar: [1314, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1314],
		Leap: false
	},
	{
		solar: [1314, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1314],
		Leap: false
	},
	{
		solar: [1314, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1314],
		Leap: false
	},
	{
		solar: [1314, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1314],
		Leap: false
	},
	{
		solar: [1314, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1314],
		Leap: false
	},
	{
		solar: [1314, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1314],
		Leap: false
	},
	{
		solar: [1314, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1314],
		Leap: false
	},
	{
		solar: [1314, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1314],
		Leap: false
	},
	{
		solar: [1314, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1314],
		Leap: false
	},
	{
		solar: [1314, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1314],
		Leap: false
	},
	{
		solar: [1314, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1314],
		Leap: false
	},
	{
		solar: [1314, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1314],
		Leap: false
	},
	{
		solar: [1314, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1314],
		Leap: false
	},
	{
		solar: [1314, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1314],
		Leap: false
	},
	{
		solar: [1314, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1314],
		Leap: false
	},
	{
		solar: [1314, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1314],
		Leap: false
	},
	{
		solar: [1314, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1314],
		Leap: false
	},
	{
		solar: [1314, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1314],
		Leap: false
	},
	{
		solar: [1314, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1314],
		Leap: false
	},
	{
		solar: [1314, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1314],
		Leap: false
	},
	{
		solar: [1314, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1314],
		Leap: false
	},
	{
		solar: [1314, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1314],
		Leap: false
	},
	{
		solar: [1314, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1314],
		Leap: false
	},
	{
		solar: [1314, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1314],
		Leap: false
	},
	{
		solar: [1314, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1314],
		Leap: false
	},
	{
		solar: [1314, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1314],
		Leap: false
	},
	{
		solar: [1314, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1314],
		Leap: false
	},
	{
		solar: [1314, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1314],
		Leap: false
	},
	{
		solar: [1314, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1314],
		Leap: false
	},
	{
		solar: [1314, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1314],
		Leap: false
	},
	{
		solar: [1314, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1314],
		Leap: false
	},
	{
		solar: [1314, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1314],
		Leap: false
	},
	{
		solar: [1314, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1314],
		Leap: false
	},
	{
		solar: [1314, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1314],
		Leap: false
	},
	{
		solar: [1314, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1314],
		Leap: false
	},
	{
		solar: [1314, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1314],
		Leap: false
	},
	{
		solar: [1314, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1314],
		Leap: false
	},
	{
		solar: [1314, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1314],
		Leap: false
	},
	{
		solar: [1314, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1314],
		Leap: false
	},
	{
		solar: [1317, 0, 1],
		Dow: 2,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1317],
		Leap: true
	},
	{
		solar: [1317, 0, 2],
		Dow: 3,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1317],
		Leap: true
	},
	{
		solar: [1317, 0, 3],
		Dow: 4,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1317],
		Leap: true
	},
	{
		solar: [1317, 0, 4],
		Dow: 5,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1317],
		Leap: true
	},
	{
		solar: [1317, 0, 5],
		Dow: 6,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1317],
		Leap: true
	},
	{
		solar: [1317, 0, 30],
		Dow: 3,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1317],
		Leap: true
	},
	{
		solar: [1317, 0, 31],
		Dow: 4,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1317],
		Leap: true
	},
	{
		solar: [1317, 1, 1],
		Dow: 5,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1317],
		Leap: true
	},
	{
		solar: [1317, 1, 2],
		Dow: 6,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1317],
		Leap: true
	},
	{
		solar: [1317, 1, 30],
		Dow: 6,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [9, 1317],
		Leap: true
	},
	{
		solar: [1317, 1, 31],
		Dow: 0,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1317],
		Leap: true
	},
	{
		solar: [1317, 2, 1],
		Dow: 1,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1317],
		Leap: true
	},
	{
		solar: [1317, 2, 2],
		Dow: 2,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1317],
		Leap: true
	},
	{
		solar: [1317, 2, 30],
		Dow: 2,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1317],
		Leap: true
	},
	{
		solar: [1317, 2, 31],
		Dow: 3,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1317],
		Leap: true
	},
	{
		solar: [1317, 3, 1],
		Dow: 4,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1317],
		Leap: true
	},
	{
		solar: [1317, 3, 2],
		Dow: 5,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1317],
		Leap: true
	},
	{
		solar: [1317, 3, 30],
		Dow: 5,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1317],
		Leap: true
	},
	{
		solar: [1317, 3, 31],
		Dow: 6,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1317],
		Leap: true
	},
	{
		solar: [1317, 4, 1],
		Dow: 0,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1317],
		Leap: true
	},
	{
		solar: [1317, 4, 2],
		Dow: 1,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1317],
		Leap: true
	},
	{
		solar: [1317, 4, 30],
		Dow: 1,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1317],
		Leap: true
	},
	{
		solar: [1317, 4, 31],
		Dow: 2,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1317],
		Leap: true
	},
	{
		solar: [1317, 5, 1],
		Dow: 3,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1317],
		Leap: true
	},
	{
		solar: [1317, 5, 2],
		Dow: 4,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1317],
		Leap: true
	},
	{
		solar: [1317, 5, 30],
		Dow: 4,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1317],
		Leap: true
	},
	{
		solar: [1317, 5, 31],
		Dow: 5,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1317],
		Leap: true
	},
	{
		solar: [1317, 6, 1],
		Dow: 6,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [27, 1317],
		Leap: true
	},
	{
		solar: [1317, 6, 2],
		Dow: 0,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1317],
		Leap: true
	},
	{
		solar: [1317, 6, 29],
		Dow: 6,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [31, 1317],
		Leap: true
	},
	{
		solar: [1317, 6, 30],
		Dow: 0,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1317],
		Leap: true
	},
	{
		solar: [1317, 7, 1],
		Dow: 1,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1317],
		Leap: true
	},
	{
		solar: [1317, 7, 2],
		Dow: 2,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1317],
		Leap: true
	},
	{
		solar: [1317, 7, 29],
		Dow: 1,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1317],
		Leap: true
	},
	{
		solar: [1317, 7, 30],
		Dow: 2,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1317],
		Leap: true
	},
	{
		solar: [1317, 8, 1],
		Dow: 3,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1317],
		Leap: true
	},
	{
		solar: [1317, 8, 2],
		Dow: 4,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1317],
		Leap: true
	},
	{
		solar: [1317, 8, 29],
		Dow: 3,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1317],
		Leap: true
	},
	{
		solar: [1317, 8, 30],
		Dow: 4,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1317],
		Leap: true
	},
	{
		solar: [1317, 9, 1],
		Dow: 5,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1317],
		Leap: true
	},
	{
		solar: [1317, 9, 2],
		Dow: 6,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1317],
		Leap: true
	},
	{
		solar: [1317, 9, 29],
		Dow: 5,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1317],
		Leap: true
	},
	{
		solar: [1317, 9, 30],
		Dow: 6,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1317],
		Leap: true
	},
	{
		solar: [1317, 10, 1],
		Dow: 0,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1317],
		Leap: true
	},
	{
		solar: [1317, 10, 2],
		Dow: 1,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1317],
		Leap: true
	},
	{
		solar: [1317, 10, 29],
		Dow: 0,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1317],
		Leap: true
	},
	{
		solar: [1317, 10, 30],
		Dow: 1,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1317],
		Leap: true
	},
	{
		solar: [1317, 11, 1],
		Dow: 2,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1317],
		Leap: true
	},
	{
		solar: [1317, 11, 2],
		Dow: 3,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1317],
		Leap: true
	},
	{
		solar: [1317, 11, 26],
		Dow: 6,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [52, 1317],
		Leap: true
	},
	{
		solar: [1317, 11, 27],
		Dow: 0,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1317],
		Leap: true
	},
	{
		solar: [1317, 11, 28],
		Dow: 1,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1317],
		Leap: true
	},
	{
		solar: [1317, 11, 29],
		Dow: 2,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1317],
		Leap: true
	},
	{
		solar: [1317, 11, 30],
		Dow: 3,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1317],
		Leap: true
	},
	{
		solar: [1320, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1319],
		Leap: false
	},
	{
		solar: [1320, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1320],
		Leap: false
	},
	{
		solar: [1320, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1320],
		Leap: false
	},
	{
		solar: [1320, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1320],
		Leap: false
	},
	{
		solar: [1320, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1320],
		Leap: false
	},
	{
		solar: [1320, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1320],
		Leap: false
	},
	{
		solar: [1320, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1320],
		Leap: false
	},
	{
		solar: [1320, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1320],
		Leap: false
	},
	{
		solar: [1320, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1320],
		Leap: false
	},
	{
		solar: [1320, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1320],
		Leap: false
	},
	{
		solar: [1320, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1320],
		Leap: false
	},
	{
		solar: [1320, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1320],
		Leap: false
	},
	{
		solar: [1320, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1320],
		Leap: false
	},
	{
		solar: [1320, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1320],
		Leap: false
	},
	{
		solar: [1320, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1320],
		Leap: false
	},
	{
		solar: [1320, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1320],
		Leap: false
	},
	{
		solar: [1320, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1320],
		Leap: false
	},
	{
		solar: [1320, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1320],
		Leap: false
	},
	{
		solar: [1320, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1320],
		Leap: false
	},
	{
		solar: [1320, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1320],
		Leap: false
	},
	{
		solar: [1320, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1320],
		Leap: false
	},
	{
		solar: [1320, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1320],
		Leap: false
	},
	{
		solar: [1320, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1320],
		Leap: false
	},
	{
		solar: [1320, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1320],
		Leap: false
	},
	{
		solar: [1320, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1320],
		Leap: false
	},
	{
		solar: [1320, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1320],
		Leap: false
	},
	{
		solar: [1320, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1320],
		Leap: false
	},
	{
		solar: [1320, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1320],
		Leap: false
	},
	{
		solar: [1320, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1320],
		Leap: false
	},
	{
		solar: [1320, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1320],
		Leap: false
	},
	{
		solar: [1320, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1320],
		Leap: false
	},
	{
		solar: [1320, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1320],
		Leap: false
	},
	{
		solar: [1320, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1320],
		Leap: false
	},
	{
		solar: [1320, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1320],
		Leap: false
	},
	{
		solar: [1320, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1320],
		Leap: false
	},
	{
		solar: [1320, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1320],
		Leap: false
	},
	{
		solar: [1320, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1320],
		Leap: false
	},
	{
		solar: [1320, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1320],
		Leap: false
	},
	{
		solar: [1320, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1320],
		Leap: false
	},
	{
		solar: [1320, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1320],
		Leap: false
	},
	{
		solar: [1320, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1320],
		Leap: false
	},
	{
		solar: [1320, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1320],
		Leap: false
	},
	{
		solar: [1320, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1320],
		Leap: false
	},
	{
		solar: [1320, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1320],
		Leap: false
	},
	{
		solar: [1320, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1320],
		Leap: false
	},
	{
		solar: [1320, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1320],
		Leap: false
	},
	{
		solar: [1320, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1320],
		Leap: false
	},
	{
		solar: [1320, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1320],
		Leap: false
	},
	{
		solar: [1320, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1320],
		Leap: false
	},
	{
		solar: [1320, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1320],
		Leap: false
	},
	{
		solar: [1320, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1320],
		Leap: false
	},
	{
		solar: [1320, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1320],
		Leap: false
	},
	{
		solar: [1320, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1320],
		Leap: false
	},
	{
		solar: [1323, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1323],
		Leap: false
	},
	{
		solar: [1323, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1323],
		Leap: false
	},
	{
		solar: [1323, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1323],
		Leap: false
	},
	{
		solar: [1323, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1323],
		Leap: false
	},
	{
		solar: [1323, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1323],
		Leap: false
	},
	{
		solar: [1323, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1323],
		Leap: false
	},
	{
		solar: [1323, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1323],
		Leap: false
	},
	{
		solar: [1323, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1323],
		Leap: false
	},
	{
		solar: [1323, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1323],
		Leap: false
	},
	{
		solar: [1323, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1323],
		Leap: false
	},
	{
		solar: [1323, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1323],
		Leap: false
	},
	{
		solar: [1323, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1323],
		Leap: false
	},
	{
		solar: [1323, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1323],
		Leap: false
	},
	{
		solar: [1323, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1323],
		Leap: false
	},
	{
		solar: [1323, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1323],
		Leap: false
	},
	{
		solar: [1323, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1323],
		Leap: false
	},
	{
		solar: [1323, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1323],
		Leap: false
	},
	{
		solar: [1323, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1323],
		Leap: false
	},
	{
		solar: [1323, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1323],
		Leap: false
	},
	{
		solar: [1323, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1323],
		Leap: false
	},
	{
		solar: [1323, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1323],
		Leap: false
	},
	{
		solar: [1323, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1323],
		Leap: false
	},
	{
		solar: [1323, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1323],
		Leap: false
	},
	{
		solar: [1323, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1323],
		Leap: false
	},
	{
		solar: [1323, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1323],
		Leap: false
	},
	{
		solar: [1323, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1323],
		Leap: false
	},
	{
		solar: [1323, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1323],
		Leap: false
	},
	{
		solar: [1323, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1323],
		Leap: false
	},
	{
		solar: [1323, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1323],
		Leap: false
	},
	{
		solar: [1323, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1323],
		Leap: false
	},
	{
		solar: [1323, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1323],
		Leap: false
	},
	{
		solar: [1323, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1323],
		Leap: false
	},
	{
		solar: [1323, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1323],
		Leap: false
	},
	{
		solar: [1323, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1323],
		Leap: false
	},
	{
		solar: [1323, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1323],
		Leap: false
	},
	{
		solar: [1323, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1323],
		Leap: false
	},
	{
		solar: [1323, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1323],
		Leap: false
	},
	{
		solar: [1323, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1323],
		Leap: false
	},
	{
		solar: [1323, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1323],
		Leap: false
	},
	{
		solar: [1323, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1323],
		Leap: false
	},
	{
		solar: [1323, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1323],
		Leap: false
	},
	{
		solar: [1323, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1323],
		Leap: false
	},
	{
		solar: [1323, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1323],
		Leap: false
	},
	{
		solar: [1323, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1323],
		Leap: false
	},
	{
		solar: [1323, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1323],
		Leap: false
	},
	{
		solar: [1323, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1323],
		Leap: false
	},
	{
		solar: [1323, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1323],
		Leap: false
	},
	{
		solar: [1323, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1323],
		Leap: false
	},
	{
		solar: [1323, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1323],
		Leap: false
	},
	{
		solar: [1323, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1323],
		Leap: false
	},
	{
		solar: [1323, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1323],
		Leap: false
	},
	{
		solar: [1323, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1323],
		Leap: false
	},
	{
		solar: [1323, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1323],
		Leap: false
	},
	{
		solar: [1326, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1326],
		Leap: false
	},
	{
		solar: [1326, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1326],
		Leap: false
	},
	{
		solar: [1326, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1326],
		Leap: false
	},
	{
		solar: [1326, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1326],
		Leap: false
	},
	{
		solar: [1326, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1326],
		Leap: false
	},
	{
		solar: [1326, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1326],
		Leap: false
	},
	{
		solar: [1326, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1326],
		Leap: false
	},
	{
		solar: [1326, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1326],
		Leap: false
	},
	{
		solar: [1326, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1326],
		Leap: false
	},
	{
		solar: [1326, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1326],
		Leap: false
	},
	{
		solar: [1326, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1326],
		Leap: false
	},
	{
		solar: [1326, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1326],
		Leap: false
	},
	{
		solar: [1326, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1326],
		Leap: false
	},
	{
		solar: [1326, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1326],
		Leap: false
	},
	{
		solar: [1326, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1326],
		Leap: false
	},
	{
		solar: [1326, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1326],
		Leap: false
	},
	{
		solar: [1326, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1326],
		Leap: false
	},
	{
		solar: [1326, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1326],
		Leap: false
	},
	{
		solar: [1326, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1326],
		Leap: false
	},
	{
		solar: [1326, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1326],
		Leap: false
	},
	{
		solar: [1326, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1326],
		Leap: false
	},
	{
		solar: [1326, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1326],
		Leap: false
	},
	{
		solar: [1326, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1326],
		Leap: false
	},
	{
		solar: [1326, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1326],
		Leap: false
	},
	{
		solar: [1326, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1326],
		Leap: false
	},
	{
		solar: [1326, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1326],
		Leap: false
	},
	{
		solar: [1326, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1326],
		Leap: false
	},
	{
		solar: [1326, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1326],
		Leap: false
	},
	{
		solar: [1326, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1326],
		Leap: false
	},
	{
		solar: [1326, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1326],
		Leap: false
	},
	{
		solar: [1326, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1326],
		Leap: false
	},
	{
		solar: [1326, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1326],
		Leap: false
	},
	{
		solar: [1326, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1326],
		Leap: false
	},
	{
		solar: [1326, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1326],
		Leap: false
	},
	{
		solar: [1326, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1326],
		Leap: false
	},
	{
		solar: [1326, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1326],
		Leap: false
	},
	{
		solar: [1326, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1326],
		Leap: false
	},
	{
		solar: [1326, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1326],
		Leap: false
	},
	{
		solar: [1326, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1326],
		Leap: false
	},
	{
		solar: [1326, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1326],
		Leap: false
	},
	{
		solar: [1326, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1326],
		Leap: false
	},
	{
		solar: [1326, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1326],
		Leap: false
	},
	{
		solar: [1326, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1326],
		Leap: false
	},
	{
		solar: [1326, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1326],
		Leap: false
	},
	{
		solar: [1326, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1326],
		Leap: false
	},
	{
		solar: [1326, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1326],
		Leap: false
	},
	{
		solar: [1326, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1326],
		Leap: false
	},
	{
		solar: [1326, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1326],
		Leap: false
	},
	{
		solar: [1326, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1326],
		Leap: false
	},
	{
		solar: [1326, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1326],
		Leap: false
	},
	{
		solar: [1326, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1326],
		Leap: false
	},
	{
		solar: [1326, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1326],
		Leap: false
	},
	{
		solar: [1326, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1327],
		Leap: false
	},
	{
		solar: [1329, 0, 1],
		Dow: 3,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1329],
		Leap: true
	},
	{
		solar: [1329, 0, 2],
		Dow: 4,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1329],
		Leap: true
	},
	{
		solar: [1329, 0, 3],
		Dow: 5,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1329],
		Leap: true
	},
	{
		solar: [1329, 0, 4],
		Dow: 6,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1329],
		Leap: true
	},
	{
		solar: [1329, 0, 5],
		Dow: 0,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1329],
		Leap: true
	},
	{
		solar: [1329, 0, 30],
		Dow: 4,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1329],
		Leap: true
	},
	{
		solar: [1329, 0, 31],
		Dow: 5,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1329],
		Leap: true
	},
	{
		solar: [1329, 1, 1],
		Dow: 6,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1329],
		Leap: true
	},
	{
		solar: [1329, 1, 2],
		Dow: 0,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1329],
		Leap: true
	},
	{
		solar: [1329, 1, 30],
		Dow: 0,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1329],
		Leap: true
	},
	{
		solar: [1329, 1, 31],
		Dow: 1,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1329],
		Leap: true
	},
	{
		solar: [1329, 2, 1],
		Dow: 2,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1329],
		Leap: true
	},
	{
		solar: [1329, 2, 2],
		Dow: 3,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1329],
		Leap: true
	},
	{
		solar: [1329, 2, 30],
		Dow: 3,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1329],
		Leap: true
	},
	{
		solar: [1329, 2, 31],
		Dow: 4,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1329],
		Leap: true
	},
	{
		solar: [1329, 3, 1],
		Dow: 5,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1329],
		Leap: true
	},
	{
		solar: [1329, 3, 2],
		Dow: 6,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1329],
		Leap: true
	},
	{
		solar: [1329, 3, 30],
		Dow: 6,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1329],
		Leap: true
	},
	{
		solar: [1329, 3, 31],
		Dow: 0,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1329],
		Leap: true
	},
	{
		solar: [1329, 4, 1],
		Dow: 1,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1329],
		Leap: true
	},
	{
		solar: [1329, 4, 2],
		Dow: 2,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1329],
		Leap: true
	},
	{
		solar: [1329, 4, 30],
		Dow: 2,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1329],
		Leap: true
	},
	{
		solar: [1329, 4, 31],
		Dow: 3,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1329],
		Leap: true
	},
	{
		solar: [1329, 5, 1],
		Dow: 4,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1329],
		Leap: true
	},
	{
		solar: [1329, 5, 2],
		Dow: 5,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1329],
		Leap: true
	},
	{
		solar: [1329, 5, 30],
		Dow: 5,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1329],
		Leap: true
	},
	{
		solar: [1329, 5, 31],
		Dow: 6,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1329],
		Leap: true
	},
	{
		solar: [1329, 6, 1],
		Dow: 0,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1329],
		Leap: true
	},
	{
		solar: [1329, 6, 2],
		Dow: 1,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1329],
		Leap: true
	},
	{
		solar: [1329, 6, 29],
		Dow: 0,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1329],
		Leap: true
	},
	{
		solar: [1329, 6, 30],
		Dow: 1,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1329],
		Leap: true
	},
	{
		solar: [1329, 7, 1],
		Dow: 2,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1329],
		Leap: true
	},
	{
		solar: [1329, 7, 2],
		Dow: 3,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1329],
		Leap: true
	},
	{
		solar: [1329, 7, 29],
		Dow: 2,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1329],
		Leap: true
	},
	{
		solar: [1329, 7, 30],
		Dow: 3,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1329],
		Leap: true
	},
	{
		solar: [1329, 8, 1],
		Dow: 4,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1329],
		Leap: true
	},
	{
		solar: [1329, 8, 2],
		Dow: 5,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1329],
		Leap: true
	},
	{
		solar: [1329, 8, 29],
		Dow: 4,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1329],
		Leap: true
	},
	{
		solar: [1329, 8, 30],
		Dow: 5,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1329],
		Leap: true
	},
	{
		solar: [1329, 9, 1],
		Dow: 6,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1329],
		Leap: true
	},
	{
		solar: [1329, 9, 2],
		Dow: 0,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1329],
		Leap: true
	},
	{
		solar: [1329, 9, 29],
		Dow: 6,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1329],
		Leap: true
	},
	{
		solar: [1329, 9, 30],
		Dow: 0,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1329],
		Leap: true
	},
	{
		solar: [1329, 10, 1],
		Dow: 1,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1329],
		Leap: true
	},
	{
		solar: [1329, 10, 2],
		Dow: 2,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1329],
		Leap: true
	},
	{
		solar: [1329, 10, 29],
		Dow: 1,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1329],
		Leap: true
	},
	{
		solar: [1329, 10, 30],
		Dow: 2,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1329],
		Leap: true
	},
	{
		solar: [1329, 11, 1],
		Dow: 3,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1329],
		Leap: true
	},
	{
		solar: [1329, 11, 2],
		Dow: 4,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1329],
		Leap: true
	},
	{
		solar: [1329, 11, 26],
		Dow: 0,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1329],
		Leap: true
	},
	{
		solar: [1329, 11, 27],
		Dow: 1,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1329],
		Leap: true
	},
	{
		solar: [1329, 11, 28],
		Dow: 2,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1329],
		Leap: true
	},
	{
		solar: [1329, 11, 29],
		Dow: 3,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1329],
		Leap: true
	},
	{
		solar: [1329, 11, 30],
		Dow: 4,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1329],
		Leap: true
	},
	{
		solar: [1332, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1332],
		Leap: false
	},
	{
		solar: [1332, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1332],
		Leap: false
	},
	{
		solar: [1332, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1332],
		Leap: false
	},
	{
		solar: [1332, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1332],
		Leap: false
	},
	{
		solar: [1332, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1332],
		Leap: false
	},
	{
		solar: [1332, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1332],
		Leap: false
	},
	{
		solar: [1332, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1332],
		Leap: false
	},
	{
		solar: [1332, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1332],
		Leap: false
	},
	{
		solar: [1332, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1332],
		Leap: false
	},
	{
		solar: [1332, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1332],
		Leap: false
	},
	{
		solar: [1332, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1332],
		Leap: false
	},
	{
		solar: [1332, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1332],
		Leap: false
	},
	{
		solar: [1332, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1332],
		Leap: false
	},
	{
		solar: [1332, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1332],
		Leap: false
	},
	{
		solar: [1332, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1332],
		Leap: false
	},
	{
		solar: [1332, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1332],
		Leap: false
	},
	{
		solar: [1332, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1332],
		Leap: false
	},
	{
		solar: [1332, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1332],
		Leap: false
	},
	{
		solar: [1332, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1332],
		Leap: false
	},
	{
		solar: [1332, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1332],
		Leap: false
	},
	{
		solar: [1332, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1332],
		Leap: false
	},
	{
		solar: [1332, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1332],
		Leap: false
	},
	{
		solar: [1332, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1332],
		Leap: false
	},
	{
		solar: [1332, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1332],
		Leap: false
	},
	{
		solar: [1332, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1332],
		Leap: false
	},
	{
		solar: [1332, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1332],
		Leap: false
	},
	{
		solar: [1332, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1332],
		Leap: false
	},
	{
		solar: [1332, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1332],
		Leap: false
	},
	{
		solar: [1332, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1332],
		Leap: false
	},
	{
		solar: [1332, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1332],
		Leap: false
	},
	{
		solar: [1332, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1332],
		Leap: false
	},
	{
		solar: [1332, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1332],
		Leap: false
	},
	{
		solar: [1332, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1332],
		Leap: false
	},
	{
		solar: [1332, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1332],
		Leap: false
	},
	{
		solar: [1332, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1332],
		Leap: false
	},
	{
		solar: [1332, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1332],
		Leap: false
	},
	{
		solar: [1332, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1332],
		Leap: false
	},
	{
		solar: [1332, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1332],
		Leap: false
	},
	{
		solar: [1332, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1332],
		Leap: false
	},
	{
		solar: [1332, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1332],
		Leap: false
	},
	{
		solar: [1332, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1332],
		Leap: false
	},
	{
		solar: [1332, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1332],
		Leap: false
	},
	{
		solar: [1332, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1332],
		Leap: false
	},
	{
		solar: [1332, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1332],
		Leap: false
	},
	{
		solar: [1332, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1332],
		Leap: false
	},
	{
		solar: [1332, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1332],
		Leap: false
	},
	{
		solar: [1332, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1332],
		Leap: false
	},
	{
		solar: [1332, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1332],
		Leap: false
	},
	{
		solar: [1332, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1332],
		Leap: false
	},
	{
		solar: [1332, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1332],
		Leap: false
	},
	{
		solar: [1332, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1332],
		Leap: false
	},
	{
		solar: [1332, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1332],
		Leap: false
	},
	{
		solar: [1332, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1333],
		Leap: false
	},
	{
		solar: [1335, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1334],
		Leap: false
	},
	{
		solar: [1335, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1334],
		Leap: false
	},
	{
		solar: [1335, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1334],
		Leap: false
	},
	{
		solar: [1335, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1335],
		Leap: false
	},
	{
		solar: [1335, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1335],
		Leap: false
	},
	{
		solar: [1335, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1335],
		Leap: false
	},
	{
		solar: [1335, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1335],
		Leap: false
	},
	{
		solar: [1335, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1335],
		Leap: false
	},
	{
		solar: [1335, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1335],
		Leap: false
	},
	{
		solar: [1335, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1335],
		Leap: false
	},
	{
		solar: [1335, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1335],
		Leap: false
	},
	{
		solar: [1335, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1335],
		Leap: false
	},
	{
		solar: [1335, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1335],
		Leap: false
	},
	{
		solar: [1335, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1335],
		Leap: false
	},
	{
		solar: [1335, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1335],
		Leap: false
	},
	{
		solar: [1335, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1335],
		Leap: false
	},
	{
		solar: [1335, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1335],
		Leap: false
	},
	{
		solar: [1335, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1335],
		Leap: false
	},
	{
		solar: [1335, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1335],
		Leap: false
	},
	{
		solar: [1335, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1335],
		Leap: false
	},
	{
		solar: [1335, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1335],
		Leap: false
	},
	{
		solar: [1335, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1335],
		Leap: false
	},
	{
		solar: [1335, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1335],
		Leap: false
	},
	{
		solar: [1335, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1335],
		Leap: false
	},
	{
		solar: [1335, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1335],
		Leap: false
	},
	{
		solar: [1335, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1335],
		Leap: false
	},
	{
		solar: [1335, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1335],
		Leap: false
	},
	{
		solar: [1335, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1335],
		Leap: false
	},
	{
		solar: [1335, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1335],
		Leap: false
	},
	{
		solar: [1335, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1335],
		Leap: false
	},
	{
		solar: [1335, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1335],
		Leap: false
	},
	{
		solar: [1335, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1335],
		Leap: false
	},
	{
		solar: [1335, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1335],
		Leap: false
	},
	{
		solar: [1335, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1335],
		Leap: false
	},
	{
		solar: [1335, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1335],
		Leap: false
	},
	{
		solar: [1335, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1335],
		Leap: false
	},
	{
		solar: [1335, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1335],
		Leap: false
	},
	{
		solar: [1335, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1335],
		Leap: false
	},
	{
		solar: [1335, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1335],
		Leap: false
	},
	{
		solar: [1335, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1335],
		Leap: false
	},
	{
		solar: [1335, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1335],
		Leap: false
	},
	{
		solar: [1335, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1335],
		Leap: false
	},
	{
		solar: [1335, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1335],
		Leap: false
	},
	{
		solar: [1335, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1335],
		Leap: false
	},
	{
		solar: [1335, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1335],
		Leap: false
	},
	{
		solar: [1335, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1335],
		Leap: false
	},
	{
		solar: [1335, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1335],
		Leap: false
	},
	{
		solar: [1335, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1335],
		Leap: false
	},
	{
		solar: [1335, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1335],
		Leap: false
	},
	{
		solar: [1335, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1335],
		Leap: false
	},
	{
		solar: [1335, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1335],
		Leap: false
	},
	{
		solar: [1335, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1335],
		Leap: false
	},
	{
		solar: [1335, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1335],
		Leap: false
	},
	{
		solar: [1338, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1338],
		Leap: false
	},
	{
		solar: [1338, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1338],
		Leap: false
	},
	{
		solar: [1338, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1338],
		Leap: false
	},
	{
		solar: [1338, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1338],
		Leap: false
	},
	{
		solar: [1338, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1338],
		Leap: false
	},
	{
		solar: [1338, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1338],
		Leap: false
	},
	{
		solar: [1338, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1338],
		Leap: false
	},
	{
		solar: [1338, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1338],
		Leap: false
	},
	{
		solar: [1338, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1338],
		Leap: false
	},
	{
		solar: [1338, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1338],
		Leap: false
	},
	{
		solar: [1338, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1338],
		Leap: false
	},
	{
		solar: [1338, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1338],
		Leap: false
	},
	{
		solar: [1338, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1338],
		Leap: false
	},
	{
		solar: [1338, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1338],
		Leap: false
	},
	{
		solar: [1338, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1338],
		Leap: false
	},
	{
		solar: [1338, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1338],
		Leap: false
	},
	{
		solar: [1338, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1338],
		Leap: false
	},
	{
		solar: [1338, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1338],
		Leap: false
	},
	{
		solar: [1338, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1338],
		Leap: false
	},
	{
		solar: [1338, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1338],
		Leap: false
	},
	{
		solar: [1338, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1338],
		Leap: false
	},
	{
		solar: [1338, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1338],
		Leap: false
	},
	{
		solar: [1338, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1338],
		Leap: false
	},
	{
		solar: [1338, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1338],
		Leap: false
	},
	{
		solar: [1338, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1338],
		Leap: false
	},
	{
		solar: [1338, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1338],
		Leap: false
	},
	{
		solar: [1338, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1338],
		Leap: false
	},
	{
		solar: [1338, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1338],
		Leap: false
	},
	{
		solar: [1338, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1338],
		Leap: false
	},
	{
		solar: [1338, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1338],
		Leap: false
	},
	{
		solar: [1338, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1338],
		Leap: false
	},
	{
		solar: [1338, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1338],
		Leap: false
	},
	{
		solar: [1338, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1338],
		Leap: false
	},
	{
		solar: [1338, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1338],
		Leap: false
	},
	{
		solar: [1338, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1338],
		Leap: false
	},
	{
		solar: [1338, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1338],
		Leap: false
	},
	{
		solar: [1338, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1338],
		Leap: false
	},
	{
		solar: [1338, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1338],
		Leap: false
	},
	{
		solar: [1338, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1338],
		Leap: false
	},
	{
		solar: [1338, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1338],
		Leap: false
	},
	{
		solar: [1338, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1338],
		Leap: false
	},
	{
		solar: [1338, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1338],
		Leap: false
	},
	{
		solar: [1338, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1338],
		Leap: false
	},
	{
		solar: [1338, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1338],
		Leap: false
	},
	{
		solar: [1338, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1338],
		Leap: false
	},
	{
		solar: [1338, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1338],
		Leap: false
	},
	{
		solar: [1338, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1338],
		Leap: false
	},
	{
		solar: [1338, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1338],
		Leap: false
	},
	{
		solar: [1338, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1338],
		Leap: false
	},
	{
		solar: [1338, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1338],
		Leap: false
	},
	{
		solar: [1338, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1338],
		Leap: false
	},
	{
		solar: [1338, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1339],
		Leap: false
	},
	{
		solar: [1338, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1339],
		Leap: false
	},
	{
		solar: [1341, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1340],
		Leap: false
	},
	{
		solar: [1341, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1340],
		Leap: false
	},
	{
		solar: [1341, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1340],
		Leap: false
	},
	{
		solar: [1341, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1341],
		Leap: false
	},
	{
		solar: [1341, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1341],
		Leap: false
	},
	{
		solar: [1341, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1341],
		Leap: false
	},
	{
		solar: [1341, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1341],
		Leap: false
	},
	{
		solar: [1341, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1341],
		Leap: false
	},
	{
		solar: [1341, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1341],
		Leap: false
	},
	{
		solar: [1341, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1341],
		Leap: false
	},
	{
		solar: [1341, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1341],
		Leap: false
	},
	{
		solar: [1341, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1341],
		Leap: false
	},
	{
		solar: [1341, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1341],
		Leap: false
	},
	{
		solar: [1341, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1341],
		Leap: false
	},
	{
		solar: [1341, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1341],
		Leap: false
	},
	{
		solar: [1341, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1341],
		Leap: false
	},
	{
		solar: [1341, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1341],
		Leap: false
	},
	{
		solar: [1341, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1341],
		Leap: false
	},
	{
		solar: [1341, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1341],
		Leap: false
	},
	{
		solar: [1341, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1341],
		Leap: false
	},
	{
		solar: [1341, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1341],
		Leap: false
	},
	{
		solar: [1341, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1341],
		Leap: false
	},
	{
		solar: [1341, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1341],
		Leap: false
	},
	{
		solar: [1341, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1341],
		Leap: false
	},
	{
		solar: [1341, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1341],
		Leap: false
	},
	{
		solar: [1341, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1341],
		Leap: false
	},
	{
		solar: [1341, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1341],
		Leap: false
	},
	{
		solar: [1341, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1341],
		Leap: false
	},
	{
		solar: [1341, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1341],
		Leap: false
	},
	{
		solar: [1341, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1341],
		Leap: false
	},
	{
		solar: [1341, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1341],
		Leap: false
	},
	{
		solar: [1341, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1341],
		Leap: false
	},
	{
		solar: [1341, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1341],
		Leap: false
	},
	{
		solar: [1341, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1341],
		Leap: false
	},
	{
		solar: [1341, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1341],
		Leap: false
	},
	{
		solar: [1341, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1341],
		Leap: false
	},
	{
		solar: [1341, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1341],
		Leap: false
	},
	{
		solar: [1341, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1341],
		Leap: false
	},
	{
		solar: [1341, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1341],
		Leap: false
	},
	{
		solar: [1341, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1341],
		Leap: false
	},
	{
		solar: [1341, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1341],
		Leap: false
	},
	{
		solar: [1341, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1341],
		Leap: false
	},
	{
		solar: [1341, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1341],
		Leap: false
	},
	{
		solar: [1341, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1341],
		Leap: false
	},
	{
		solar: [1341, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1341],
		Leap: false
	},
	{
		solar: [1341, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1341],
		Leap: false
	},
	{
		solar: [1341, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1341],
		Leap: false
	},
	{
		solar: [1341, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1341],
		Leap: false
	},
	{
		solar: [1341, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1341],
		Leap: false
	},
	{
		solar: [1341, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1341],
		Leap: false
	},
	{
		solar: [1341, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1341],
		Leap: false
	},
	{
		solar: [1341, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1341],
		Leap: false
	},
	{
		solar: [1341, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1341],
		Leap: false
	},
	{
		solar: [1344, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1344],
		Leap: false
	},
	{
		solar: [1344, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1344],
		Leap: false
	},
	{
		solar: [1344, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1344],
		Leap: false
	},
	{
		solar: [1344, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1344],
		Leap: false
	},
	{
		solar: [1344, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1344],
		Leap: false
	},
	{
		solar: [1344, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1344],
		Leap: false
	},
	{
		solar: [1344, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1344],
		Leap: false
	},
	{
		solar: [1344, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1344],
		Leap: false
	},
	{
		solar: [1344, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1344],
		Leap: false
	},
	{
		solar: [1344, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1344],
		Leap: false
	},
	{
		solar: [1344, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1344],
		Leap: false
	},
	{
		solar: [1344, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1344],
		Leap: false
	},
	{
		solar: [1344, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1344],
		Leap: false
	},
	{
		solar: [1344, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1344],
		Leap: false
	},
	{
		solar: [1344, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1344],
		Leap: false
	},
	{
		solar: [1344, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1344],
		Leap: false
	},
	{
		solar: [1344, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1344],
		Leap: false
	},
	{
		solar: [1344, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1344],
		Leap: false
	},
	{
		solar: [1344, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1344],
		Leap: false
	},
	{
		solar: [1344, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1344],
		Leap: false
	},
	{
		solar: [1344, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1344],
		Leap: false
	},
	{
		solar: [1344, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1344],
		Leap: false
	},
	{
		solar: [1344, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1344],
		Leap: false
	},
	{
		solar: [1344, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1344],
		Leap: false
	},
	{
		solar: [1344, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1344],
		Leap: false
	},
	{
		solar: [1344, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1344],
		Leap: false
	},
	{
		solar: [1344, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1344],
		Leap: false
	},
	{
		solar: [1344, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1344],
		Leap: false
	},
	{
		solar: [1344, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1344],
		Leap: false
	},
	{
		solar: [1344, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1344],
		Leap: false
	},
	{
		solar: [1344, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1344],
		Leap: false
	},
	{
		solar: [1344, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1344],
		Leap: false
	},
	{
		solar: [1344, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1344],
		Leap: false
	},
	{
		solar: [1344, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1344],
		Leap: false
	},
	{
		solar: [1344, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1344],
		Leap: false
	},
	{
		solar: [1344, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1344],
		Leap: false
	},
	{
		solar: [1344, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1344],
		Leap: false
	},
	{
		solar: [1344, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1344],
		Leap: false
	},
	{
		solar: [1344, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1344],
		Leap: false
	},
	{
		solar: [1344, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1344],
		Leap: false
	},
	{
		solar: [1344, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1344],
		Leap: false
	},
	{
		solar: [1344, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1344],
		Leap: false
	},
	{
		solar: [1344, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1344],
		Leap: false
	},
	{
		solar: [1344, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1344],
		Leap: false
	},
	{
		solar: [1344, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1344],
		Leap: false
	},
	{
		solar: [1344, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1344],
		Leap: false
	},
	{
		solar: [1344, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1344],
		Leap: false
	},
	{
		solar: [1344, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1344],
		Leap: false
	},
	{
		solar: [1344, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1344],
		Leap: false
	},
	{
		solar: [1344, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1344],
		Leap: false
	},
	{
		solar: [1344, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1344],
		Leap: false
	},
	{
		solar: [1344, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1345],
		Leap: false
	},
	{
		solar: [1344, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1345],
		Leap: false
	},
	{
		solar: [1347, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1346],
		Leap: false
	},
	{
		solar: [1347, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1346],
		Leap: false
	},
	{
		solar: [1347, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1347],
		Leap: false
	},
	{
		solar: [1347, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1347],
		Leap: false
	},
	{
		solar: [1347, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1347],
		Leap: false
	},
	{
		solar: [1347, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1347],
		Leap: false
	},
	{
		solar: [1347, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1347],
		Leap: false
	},
	{
		solar: [1347, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1347],
		Leap: false
	},
	{
		solar: [1347, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1347],
		Leap: false
	},
	{
		solar: [1347, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1347],
		Leap: false
	},
	{
		solar: [1347, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1347],
		Leap: false
	},
	{
		solar: [1347, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1347],
		Leap: false
	},
	{
		solar: [1347, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1347],
		Leap: false
	},
	{
		solar: [1347, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1347],
		Leap: false
	},
	{
		solar: [1347, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1347],
		Leap: false
	},
	{
		solar: [1347, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1347],
		Leap: false
	},
	{
		solar: [1347, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1347],
		Leap: false
	},
	{
		solar: [1347, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1347],
		Leap: false
	},
	{
		solar: [1347, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1347],
		Leap: false
	},
	{
		solar: [1347, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1347],
		Leap: false
	},
	{
		solar: [1347, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1347],
		Leap: false
	},
	{
		solar: [1347, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1347],
		Leap: false
	},
	{
		solar: [1347, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1347],
		Leap: false
	},
	{
		solar: [1347, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1347],
		Leap: false
	},
	{
		solar: [1347, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1347],
		Leap: false
	},
	{
		solar: [1347, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1347],
		Leap: false
	},
	{
		solar: [1347, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1347],
		Leap: false
	},
	{
		solar: [1347, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1347],
		Leap: false
	},
	{
		solar: [1347, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1347],
		Leap: false
	},
	{
		solar: [1347, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1347],
		Leap: false
	},
	{
		solar: [1347, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1347],
		Leap: false
	},
	{
		solar: [1347, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1347],
		Leap: false
	},
	{
		solar: [1347, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1347],
		Leap: false
	},
	{
		solar: [1347, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1347],
		Leap: false
	},
	{
		solar: [1347, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1347],
		Leap: false
	},
	{
		solar: [1347, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1347],
		Leap: false
	},
	{
		solar: [1347, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1347],
		Leap: false
	},
	{
		solar: [1347, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1347],
		Leap: false
	},
	{
		solar: [1347, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1347],
		Leap: false
	},
	{
		solar: [1347, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1347],
		Leap: false
	},
	{
		solar: [1347, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1347],
		Leap: false
	},
	{
		solar: [1347, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1347],
		Leap: false
	},
	{
		solar: [1347, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1347],
		Leap: false
	},
	{
		solar: [1347, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1347],
		Leap: false
	},
	{
		solar: [1347, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1347],
		Leap: false
	},
	{
		solar: [1347, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1347],
		Leap: false
	},
	{
		solar: [1347, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1347],
		Leap: false
	},
	{
		solar: [1347, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1347],
		Leap: false
	},
	{
		solar: [1347, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1347],
		Leap: false
	},
	{
		solar: [1347, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1347],
		Leap: false
	},
	{
		solar: [1347, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1347],
		Leap: false
	},
	{
		solar: [1347, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1347],
		Leap: false
	},
	{
		solar: [1347, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1347],
		Leap: false
	},
	{
		solar: [1350, 0, 1],
		Dow: 1,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1350],
		Leap: true
	},
	{
		solar: [1350, 0, 2],
		Dow: 2,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1350],
		Leap: true
	},
	{
		solar: [1350, 0, 3],
		Dow: 3,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1350],
		Leap: true
	},
	{
		solar: [1350, 0, 4],
		Dow: 4,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1350],
		Leap: true
	},
	{
		solar: [1350, 0, 5],
		Dow: 5,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1350],
		Leap: true
	},
	{
		solar: [1350, 0, 30],
		Dow: 2,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1350],
		Leap: true
	},
	{
		solar: [1350, 0, 31],
		Dow: 3,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1350],
		Leap: true
	},
	{
		solar: [1350, 1, 1],
		Dow: 4,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1350],
		Leap: true
	},
	{
		solar: [1350, 1, 2],
		Dow: 5,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1350],
		Leap: true
	},
	{
		solar: [1350, 1, 30],
		Dow: 5,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1350],
		Leap: true
	},
	{
		solar: [1350, 1, 31],
		Dow: 6,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1350],
		Leap: true
	},
	{
		solar: [1350, 2, 1],
		Dow: 0,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1350],
		Leap: true
	},
	{
		solar: [1350, 2, 2],
		Dow: 1,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1350],
		Leap: true
	},
	{
		solar: [1350, 2, 30],
		Dow: 1,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1350],
		Leap: true
	},
	{
		solar: [1350, 2, 31],
		Dow: 2,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1350],
		Leap: true
	},
	{
		solar: [1350, 3, 1],
		Dow: 3,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1350],
		Leap: true
	},
	{
		solar: [1350, 3, 2],
		Dow: 4,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1350],
		Leap: true
	},
	{
		solar: [1350, 3, 30],
		Dow: 4,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1350],
		Leap: true
	},
	{
		solar: [1350, 3, 31],
		Dow: 5,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1350],
		Leap: true
	},
	{
		solar: [1350, 4, 1],
		Dow: 6,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1350],
		Leap: true
	},
	{
		solar: [1350, 4, 2],
		Dow: 0,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1350],
		Leap: true
	},
	{
		solar: [1350, 4, 30],
		Dow: 0,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1350],
		Leap: true
	},
	{
		solar: [1350, 4, 31],
		Dow: 1,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1350],
		Leap: true
	},
	{
		solar: [1350, 5, 1],
		Dow: 2,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1350],
		Leap: true
	},
	{
		solar: [1350, 5, 2],
		Dow: 3,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1350],
		Leap: true
	},
	{
		solar: [1350, 5, 30],
		Dow: 3,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1350],
		Leap: true
	},
	{
		solar: [1350, 5, 31],
		Dow: 4,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1350],
		Leap: true
	},
	{
		solar: [1350, 6, 1],
		Dow: 5,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1350],
		Leap: true
	},
	{
		solar: [1350, 6, 2],
		Dow: 6,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1350],
		Leap: true
	},
	{
		solar: [1350, 6, 29],
		Dow: 5,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1350],
		Leap: true
	},
	{
		solar: [1350, 6, 30],
		Dow: 6,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1350],
		Leap: true
	},
	{
		solar: [1350, 7, 1],
		Dow: 0,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1350],
		Leap: true
	},
	{
		solar: [1350, 7, 2],
		Dow: 1,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1350],
		Leap: true
	},
	{
		solar: [1350, 7, 29],
		Dow: 0,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1350],
		Leap: true
	},
	{
		solar: [1350, 7, 30],
		Dow: 1,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1350],
		Leap: true
	},
	{
		solar: [1350, 8, 1],
		Dow: 2,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1350],
		Leap: true
	},
	{
		solar: [1350, 8, 2],
		Dow: 3,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1350],
		Leap: true
	},
	{
		solar: [1350, 8, 29],
		Dow: 2,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1350],
		Leap: true
	},
	{
		solar: [1350, 8, 30],
		Dow: 3,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1350],
		Leap: true
	},
	{
		solar: [1350, 9, 1],
		Dow: 4,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1350],
		Leap: true
	},
	{
		solar: [1350, 9, 2],
		Dow: 5,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1350],
		Leap: true
	},
	{
		solar: [1350, 9, 29],
		Dow: 4,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1350],
		Leap: true
	},
	{
		solar: [1350, 9, 30],
		Dow: 5,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1350],
		Leap: true
	},
	{
		solar: [1350, 10, 1],
		Dow: 6,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1350],
		Leap: true
	},
	{
		solar: [1350, 10, 2],
		Dow: 0,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1350],
		Leap: true
	},
	{
		solar: [1350, 10, 29],
		Dow: 6,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1350],
		Leap: true
	},
	{
		solar: [1350, 10, 30],
		Dow: 0,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1350],
		Leap: true
	},
	{
		solar: [1350, 11, 1],
		Dow: 1,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1350],
		Leap: true
	},
	{
		solar: [1350, 11, 2],
		Dow: 2,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1350],
		Leap: true
	},
	{
		solar: [1350, 11, 26],
		Dow: 5,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1350],
		Leap: true
	},
	{
		solar: [1350, 11, 27],
		Dow: 6,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1350],
		Leap: true
	},
	{
		solar: [1350, 11, 28],
		Dow: 0,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1351],
		Leap: true
	},
	{
		solar: [1350, 11, 29],
		Dow: 1,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1351],
		Leap: true
	},
	{
		solar: [1350, 11, 30],
		Dow: 2,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1351],
		Leap: true
	},
	{
		solar: [1353, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1352],
		Leap: false
	},
	{
		solar: [1353, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1352],
		Leap: false
	},
	{
		solar: [1353, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1353],
		Leap: false
	},
	{
		solar: [1353, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1353],
		Leap: false
	},
	{
		solar: [1353, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1353],
		Leap: false
	},
	{
		solar: [1353, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1353],
		Leap: false
	},
	{
		solar: [1353, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1353],
		Leap: false
	},
	{
		solar: [1353, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1353],
		Leap: false
	},
	{
		solar: [1353, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1353],
		Leap: false
	},
	{
		solar: [1353, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1353],
		Leap: false
	},
	{
		solar: [1353, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1353],
		Leap: false
	},
	{
		solar: [1353, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1353],
		Leap: false
	},
	{
		solar: [1353, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1353],
		Leap: false
	},
	{
		solar: [1353, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1353],
		Leap: false
	},
	{
		solar: [1353, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1353],
		Leap: false
	},
	{
		solar: [1353, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1353],
		Leap: false
	},
	{
		solar: [1353, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1353],
		Leap: false
	},
	{
		solar: [1353, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1353],
		Leap: false
	},
	{
		solar: [1353, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1353],
		Leap: false
	},
	{
		solar: [1353, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1353],
		Leap: false
	},
	{
		solar: [1353, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1353],
		Leap: false
	},
	{
		solar: [1353, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1353],
		Leap: false
	},
	{
		solar: [1353, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1353],
		Leap: false
	},
	{
		solar: [1353, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1353],
		Leap: false
	},
	{
		solar: [1353, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1353],
		Leap: false
	},
	{
		solar: [1353, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1353],
		Leap: false
	},
	{
		solar: [1353, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1353],
		Leap: false
	},
	{
		solar: [1353, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1353],
		Leap: false
	},
	{
		solar: [1353, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1353],
		Leap: false
	},
	{
		solar: [1353, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1353],
		Leap: false
	},
	{
		solar: [1353, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1353],
		Leap: false
	},
	{
		solar: [1353, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1353],
		Leap: false
	},
	{
		solar: [1353, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1353],
		Leap: false
	},
	{
		solar: [1353, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1353],
		Leap: false
	},
	{
		solar: [1353, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1353],
		Leap: false
	},
	{
		solar: [1353, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1353],
		Leap: false
	},
	{
		solar: [1353, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1353],
		Leap: false
	},
	{
		solar: [1353, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1353],
		Leap: false
	},
	{
		solar: [1353, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1353],
		Leap: false
	},
	{
		solar: [1353, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1353],
		Leap: false
	},
	{
		solar: [1353, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1353],
		Leap: false
	},
	{
		solar: [1353, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1353],
		Leap: false
	},
	{
		solar: [1353, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1353],
		Leap: false
	},
	{
		solar: [1353, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1353],
		Leap: false
	},
	{
		solar: [1353, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1353],
		Leap: false
	},
	{
		solar: [1353, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1353],
		Leap: false
	},
	{
		solar: [1353, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1353],
		Leap: false
	},
	{
		solar: [1353, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1353],
		Leap: false
	},
	{
		solar: [1353, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1353],
		Leap: false
	},
	{
		solar: [1353, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1353],
		Leap: false
	},
	{
		solar: [1353, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1353],
		Leap: false
	},
	{
		solar: [1353, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1353],
		Leap: false
	},
	{
		solar: [1353, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1353],
		Leap: false
	},
	{
		solar: [1356, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1356],
		Leap: false
	},
	{
		solar: [1356, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1356],
		Leap: false
	},
	{
		solar: [1356, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1356],
		Leap: false
	},
	{
		solar: [1356, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1356],
		Leap: false
	},
	{
		solar: [1356, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1356],
		Leap: false
	},
	{
		solar: [1356, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1356],
		Leap: false
	},
	{
		solar: [1356, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1356],
		Leap: false
	},
	{
		solar: [1356, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1356],
		Leap: false
	},
	{
		solar: [1356, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1356],
		Leap: false
	},
	{
		solar: [1356, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1356],
		Leap: false
	},
	{
		solar: [1356, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1356],
		Leap: false
	},
	{
		solar: [1356, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1356],
		Leap: false
	},
	{
		solar: [1356, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1356],
		Leap: false
	},
	{
		solar: [1356, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1356],
		Leap: false
	},
	{
		solar: [1356, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1356],
		Leap: false
	},
	{
		solar: [1356, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1356],
		Leap: false
	},
	{
		solar: [1356, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1356],
		Leap: false
	},
	{
		solar: [1356, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1356],
		Leap: false
	},
	{
		solar: [1356, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1356],
		Leap: false
	},
	{
		solar: [1356, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1356],
		Leap: false
	},
	{
		solar: [1356, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1356],
		Leap: false
	},
	{
		solar: [1356, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1356],
		Leap: false
	},
	{
		solar: [1356, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1356],
		Leap: false
	},
	{
		solar: [1356, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1356],
		Leap: false
	},
	{
		solar: [1356, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1356],
		Leap: false
	},
	{
		solar: [1356, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1356],
		Leap: false
	},
	{
		solar: [1356, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1356],
		Leap: false
	},
	{
		solar: [1356, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1356],
		Leap: false
	},
	{
		solar: [1356, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1356],
		Leap: false
	},
	{
		solar: [1356, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1356],
		Leap: false
	},
	{
		solar: [1356, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1356],
		Leap: false
	},
	{
		solar: [1356, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1356],
		Leap: false
	},
	{
		solar: [1356, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1356],
		Leap: false
	},
	{
		solar: [1356, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1356],
		Leap: false
	},
	{
		solar: [1356, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1356],
		Leap: false
	},
	{
		solar: [1356, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1356],
		Leap: false
	},
	{
		solar: [1356, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1356],
		Leap: false
	},
	{
		solar: [1356, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1356],
		Leap: false
	},
	{
		solar: [1356, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1356],
		Leap: false
	},
	{
		solar: [1356, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1356],
		Leap: false
	},
	{
		solar: [1356, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1356],
		Leap: false
	},
	{
		solar: [1356, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1356],
		Leap: false
	},
	{
		solar: [1356, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1356],
		Leap: false
	},
	{
		solar: [1356, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1356],
		Leap: false
	},
	{
		solar: [1356, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1356],
		Leap: false
	},
	{
		solar: [1356, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1356],
		Leap: false
	},
	{
		solar: [1356, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1356],
		Leap: false
	},
	{
		solar: [1356, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1356],
		Leap: false
	},
	{
		solar: [1356, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1356],
		Leap: false
	},
	{
		solar: [1356, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1356],
		Leap: false
	},
	{
		solar: [1356, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1357],
		Leap: false
	},
	{
		solar: [1356, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1357],
		Leap: false
	},
	{
		solar: [1356, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1357],
		Leap: false
	},
	{
		solar: [1359, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1358],
		Leap: false
	},
	{
		solar: [1359, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1359],
		Leap: false
	},
	{
		solar: [1359, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1359],
		Leap: false
	},
	{
		solar: [1359, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1359],
		Leap: false
	},
	{
		solar: [1359, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1359],
		Leap: false
	},
	{
		solar: [1359, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1359],
		Leap: false
	},
	{
		solar: [1359, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1359],
		Leap: false
	},
	{
		solar: [1359, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1359],
		Leap: false
	},
	{
		solar: [1359, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1359],
		Leap: false
	},
	{
		solar: [1359, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1359],
		Leap: false
	},
	{
		solar: [1359, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1359],
		Leap: false
	},
	{
		solar: [1359, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1359],
		Leap: false
	},
	{
		solar: [1359, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1359],
		Leap: false
	},
	{
		solar: [1359, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1359],
		Leap: false
	},
	{
		solar: [1359, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1359],
		Leap: false
	},
	{
		solar: [1359, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1359],
		Leap: false
	},
	{
		solar: [1359, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1359],
		Leap: false
	},
	{
		solar: [1359, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1359],
		Leap: false
	},
	{
		solar: [1359, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1359],
		Leap: false
	},
	{
		solar: [1359, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1359],
		Leap: false
	},
	{
		solar: [1359, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1359],
		Leap: false
	},
	{
		solar: [1359, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1359],
		Leap: false
	},
	{
		solar: [1359, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1359],
		Leap: false
	},
	{
		solar: [1359, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1359],
		Leap: false
	},
	{
		solar: [1359, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1359],
		Leap: false
	},
	{
		solar: [1359, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1359],
		Leap: false
	},
	{
		solar: [1359, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1359],
		Leap: false
	},
	{
		solar: [1359, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1359],
		Leap: false
	},
	{
		solar: [1359, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1359],
		Leap: false
	},
	{
		solar: [1359, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1359],
		Leap: false
	},
	{
		solar: [1359, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1359],
		Leap: false
	},
	{
		solar: [1359, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1359],
		Leap: false
	},
	{
		solar: [1359, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1359],
		Leap: false
	},
	{
		solar: [1359, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1359],
		Leap: false
	},
	{
		solar: [1359, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1359],
		Leap: false
	},
	{
		solar: [1359, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1359],
		Leap: false
	},
	{
		solar: [1359, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1359],
		Leap: false
	},
	{
		solar: [1359, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1359],
		Leap: false
	},
	{
		solar: [1359, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1359],
		Leap: false
	},
	{
		solar: [1359, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1359],
		Leap: false
	},
	{
		solar: [1359, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1359],
		Leap: false
	},
	{
		solar: [1359, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1359],
		Leap: false
	},
	{
		solar: [1359, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1359],
		Leap: false
	},
	{
		solar: [1359, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1359],
		Leap: false
	},
	{
		solar: [1359, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1359],
		Leap: false
	},
	{
		solar: [1359, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1359],
		Leap: false
	},
	{
		solar: [1359, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1359],
		Leap: false
	},
	{
		solar: [1359, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1359],
		Leap: false
	},
	{
		solar: [1359, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1359],
		Leap: false
	},
	{
		solar: [1359, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1359],
		Leap: false
	},
	{
		solar: [1359, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1359],
		Leap: false
	},
	{
		solar: [1359, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1359],
		Leap: false
	},
	{
		solar: [1359, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1359],
		Leap: false
	},
	{
		solar: [1362, 0, 1],
		Dow: 2,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1362],
		Leap: true
	},
	{
		solar: [1362, 0, 2],
		Dow: 3,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1362],
		Leap: true
	},
	{
		solar: [1362, 0, 3],
		Dow: 4,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1362],
		Leap: true
	},
	{
		solar: [1362, 0, 4],
		Dow: 5,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1362],
		Leap: true
	},
	{
		solar: [1362, 0, 5],
		Dow: 6,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1362],
		Leap: true
	},
	{
		solar: [1362, 0, 30],
		Dow: 3,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1362],
		Leap: true
	},
	{
		solar: [1362, 0, 31],
		Dow: 4,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1362],
		Leap: true
	},
	{
		solar: [1362, 1, 1],
		Dow: 5,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1362],
		Leap: true
	},
	{
		solar: [1362, 1, 2],
		Dow: 6,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1362],
		Leap: true
	},
	{
		solar: [1362, 1, 30],
		Dow: 6,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [9, 1362],
		Leap: true
	},
	{
		solar: [1362, 1, 31],
		Dow: 0,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1362],
		Leap: true
	},
	{
		solar: [1362, 2, 1],
		Dow: 1,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1362],
		Leap: true
	},
	{
		solar: [1362, 2, 2],
		Dow: 2,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1362],
		Leap: true
	},
	{
		solar: [1362, 2, 30],
		Dow: 2,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1362],
		Leap: true
	},
	{
		solar: [1362, 2, 31],
		Dow: 3,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1362],
		Leap: true
	},
	{
		solar: [1362, 3, 1],
		Dow: 4,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1362],
		Leap: true
	},
	{
		solar: [1362, 3, 2],
		Dow: 5,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1362],
		Leap: true
	},
	{
		solar: [1362, 3, 30],
		Dow: 5,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1362],
		Leap: true
	},
	{
		solar: [1362, 3, 31],
		Dow: 6,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1362],
		Leap: true
	},
	{
		solar: [1362, 4, 1],
		Dow: 0,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1362],
		Leap: true
	},
	{
		solar: [1362, 4, 2],
		Dow: 1,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1362],
		Leap: true
	},
	{
		solar: [1362, 4, 30],
		Dow: 1,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1362],
		Leap: true
	},
	{
		solar: [1362, 4, 31],
		Dow: 2,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1362],
		Leap: true
	},
	{
		solar: [1362, 5, 1],
		Dow: 3,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1362],
		Leap: true
	},
	{
		solar: [1362, 5, 2],
		Dow: 4,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1362],
		Leap: true
	},
	{
		solar: [1362, 5, 30],
		Dow: 4,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1362],
		Leap: true
	},
	{
		solar: [1362, 5, 31],
		Dow: 5,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1362],
		Leap: true
	},
	{
		solar: [1362, 6, 1],
		Dow: 6,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [27, 1362],
		Leap: true
	},
	{
		solar: [1362, 6, 2],
		Dow: 0,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1362],
		Leap: true
	},
	{
		solar: [1362, 6, 29],
		Dow: 6,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [31, 1362],
		Leap: true
	},
	{
		solar: [1362, 6, 30],
		Dow: 0,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1362],
		Leap: true
	},
	{
		solar: [1362, 7, 1],
		Dow: 1,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1362],
		Leap: true
	},
	{
		solar: [1362, 7, 2],
		Dow: 2,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1362],
		Leap: true
	},
	{
		solar: [1362, 7, 29],
		Dow: 1,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1362],
		Leap: true
	},
	{
		solar: [1362, 7, 30],
		Dow: 2,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1362],
		Leap: true
	},
	{
		solar: [1362, 8, 1],
		Dow: 3,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1362],
		Leap: true
	},
	{
		solar: [1362, 8, 2],
		Dow: 4,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1362],
		Leap: true
	},
	{
		solar: [1362, 8, 29],
		Dow: 3,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1362],
		Leap: true
	},
	{
		solar: [1362, 8, 30],
		Dow: 4,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1362],
		Leap: true
	},
	{
		solar: [1362, 9, 1],
		Dow: 5,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1362],
		Leap: true
	},
	{
		solar: [1362, 9, 2],
		Dow: 6,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1362],
		Leap: true
	},
	{
		solar: [1362, 9, 29],
		Dow: 5,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1362],
		Leap: true
	},
	{
		solar: [1362, 9, 30],
		Dow: 6,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1362],
		Leap: true
	},
	{
		solar: [1362, 10, 1],
		Dow: 0,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1362],
		Leap: true
	},
	{
		solar: [1362, 10, 2],
		Dow: 1,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1362],
		Leap: true
	},
	{
		solar: [1362, 10, 29],
		Dow: 0,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1362],
		Leap: true
	},
	{
		solar: [1362, 10, 30],
		Dow: 1,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1362],
		Leap: true
	},
	{
		solar: [1362, 11, 1],
		Dow: 2,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1362],
		Leap: true
	},
	{
		solar: [1362, 11, 2],
		Dow: 3,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1362],
		Leap: true
	},
	{
		solar: [1362, 11, 26],
		Dow: 6,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [52, 1362],
		Leap: true
	},
	{
		solar: [1362, 11, 27],
		Dow: 0,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1362],
		Leap: true
	},
	{
		solar: [1362, 11, 28],
		Dow: 1,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1362],
		Leap: true
	},
	{
		solar: [1362, 11, 29],
		Dow: 2,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1362],
		Leap: true
	},
	{
		solar: [1362, 11, 30],
		Dow: 3,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1362],
		Leap: true
	},
	{
		solar: [1365, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1364],
		Leap: false
	},
	{
		solar: [1365, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1365],
		Leap: false
	},
	{
		solar: [1365, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1365],
		Leap: false
	},
	{
		solar: [1365, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1365],
		Leap: false
	},
	{
		solar: [1365, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1365],
		Leap: false
	},
	{
		solar: [1365, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1365],
		Leap: false
	},
	{
		solar: [1365, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1365],
		Leap: false
	},
	{
		solar: [1365, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1365],
		Leap: false
	},
	{
		solar: [1365, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1365],
		Leap: false
	},
	{
		solar: [1365, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1365],
		Leap: false
	},
	{
		solar: [1365, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1365],
		Leap: false
	},
	{
		solar: [1365, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1365],
		Leap: false
	},
	{
		solar: [1365, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1365],
		Leap: false
	},
	{
		solar: [1365, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1365],
		Leap: false
	},
	{
		solar: [1365, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1365],
		Leap: false
	},
	{
		solar: [1365, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1365],
		Leap: false
	},
	{
		solar: [1365, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1365],
		Leap: false
	},
	{
		solar: [1365, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1365],
		Leap: false
	},
	{
		solar: [1365, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1365],
		Leap: false
	},
	{
		solar: [1365, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1365],
		Leap: false
	},
	{
		solar: [1365, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1365],
		Leap: false
	},
	{
		solar: [1365, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1365],
		Leap: false
	},
	{
		solar: [1365, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1365],
		Leap: false
	},
	{
		solar: [1365, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1365],
		Leap: false
	},
	{
		solar: [1365, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1365],
		Leap: false
	},
	{
		solar: [1365, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1365],
		Leap: false
	},
	{
		solar: [1365, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1365],
		Leap: false
	},
	{
		solar: [1365, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1365],
		Leap: false
	},
	{
		solar: [1365, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1365],
		Leap: false
	},
	{
		solar: [1365, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1365],
		Leap: false
	},
	{
		solar: [1365, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1365],
		Leap: false
	},
	{
		solar: [1365, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1365],
		Leap: false
	},
	{
		solar: [1365, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1365],
		Leap: false
	},
	{
		solar: [1365, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1365],
		Leap: false
	},
	{
		solar: [1365, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1365],
		Leap: false
	},
	{
		solar: [1365, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1365],
		Leap: false
	},
	{
		solar: [1365, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1365],
		Leap: false
	},
	{
		solar: [1365, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1365],
		Leap: false
	},
	{
		solar: [1365, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1365],
		Leap: false
	},
	{
		solar: [1365, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1365],
		Leap: false
	},
	{
		solar: [1365, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1365],
		Leap: false
	},
	{
		solar: [1365, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1365],
		Leap: false
	},
	{
		solar: [1365, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1365],
		Leap: false
	},
	{
		solar: [1365, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1365],
		Leap: false
	},
	{
		solar: [1365, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1365],
		Leap: false
	},
	{
		solar: [1365, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1365],
		Leap: false
	},
	{
		solar: [1365, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1365],
		Leap: false
	},
	{
		solar: [1365, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1365],
		Leap: false
	},
	{
		solar: [1365, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1365],
		Leap: false
	},
	{
		solar: [1365, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1365],
		Leap: false
	},
	{
		solar: [1365, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1365],
		Leap: false
	},
	{
		solar: [1365, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1365],
		Leap: false
	},
	{
		solar: [1365, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1365],
		Leap: false
	},
	{
		solar: [1368, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1368],
		Leap: false
	},
	{
		solar: [1368, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1368],
		Leap: false
	},
	{
		solar: [1368, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1368],
		Leap: false
	},
	{
		solar: [1368, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1368],
		Leap: false
	},
	{
		solar: [1368, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1368],
		Leap: false
	},
	{
		solar: [1368, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1368],
		Leap: false
	},
	{
		solar: [1368, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1368],
		Leap: false
	},
	{
		solar: [1368, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1368],
		Leap: false
	},
	{
		solar: [1368, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1368],
		Leap: false
	},
	{
		solar: [1368, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1368],
		Leap: false
	},
	{
		solar: [1368, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1368],
		Leap: false
	},
	{
		solar: [1368, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1368],
		Leap: false
	},
	{
		solar: [1368, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1368],
		Leap: false
	},
	{
		solar: [1368, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1368],
		Leap: false
	},
	{
		solar: [1368, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1368],
		Leap: false
	},
	{
		solar: [1368, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1368],
		Leap: false
	},
	{
		solar: [1368, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1368],
		Leap: false
	},
	{
		solar: [1368, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1368],
		Leap: false
	},
	{
		solar: [1368, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1368],
		Leap: false
	},
	{
		solar: [1368, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1368],
		Leap: false
	},
	{
		solar: [1368, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1368],
		Leap: false
	},
	{
		solar: [1368, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1368],
		Leap: false
	},
	{
		solar: [1368, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1368],
		Leap: false
	},
	{
		solar: [1368, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1368],
		Leap: false
	},
	{
		solar: [1368, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1368],
		Leap: false
	},
	{
		solar: [1368, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1368],
		Leap: false
	},
	{
		solar: [1368, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1368],
		Leap: false
	},
	{
		solar: [1368, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1368],
		Leap: false
	},
	{
		solar: [1368, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1368],
		Leap: false
	},
	{
		solar: [1368, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1368],
		Leap: false
	},
	{
		solar: [1368, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1368],
		Leap: false
	},
	{
		solar: [1368, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1368],
		Leap: false
	},
	{
		solar: [1368, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1368],
		Leap: false
	},
	{
		solar: [1368, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1368],
		Leap: false
	},
	{
		solar: [1368, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1368],
		Leap: false
	},
	{
		solar: [1368, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1368],
		Leap: false
	},
	{
		solar: [1368, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1368],
		Leap: false
	},
	{
		solar: [1368, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1368],
		Leap: false
	},
	{
		solar: [1368, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1368],
		Leap: false
	},
	{
		solar: [1368, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1368],
		Leap: false
	},
	{
		solar: [1368, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1368],
		Leap: false
	},
	{
		solar: [1368, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1368],
		Leap: false
	},
	{
		solar: [1368, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1368],
		Leap: false
	},
	{
		solar: [1368, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1368],
		Leap: false
	},
	{
		solar: [1368, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1368],
		Leap: false
	},
	{
		solar: [1368, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1368],
		Leap: false
	},
	{
		solar: [1368, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1368],
		Leap: false
	},
	{
		solar: [1368, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1368],
		Leap: false
	},
	{
		solar: [1368, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1368],
		Leap: false
	},
	{
		solar: [1368, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1368],
		Leap: false
	},
	{
		solar: [1368, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1368],
		Leap: false
	},
	{
		solar: [1368, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1368],
		Leap: false
	},
	{
		solar: [1368, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1368],
		Leap: false
	},
	{
		solar: [1371, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1371],
		Leap: false
	},
	{
		solar: [1371, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1371],
		Leap: false
	},
	{
		solar: [1371, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1371],
		Leap: false
	},
	{
		solar: [1371, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1371],
		Leap: false
	},
	{
		solar: [1371, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1371],
		Leap: false
	},
	{
		solar: [1371, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1371],
		Leap: false
	},
	{
		solar: [1371, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1371],
		Leap: false
	},
	{
		solar: [1371, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1371],
		Leap: false
	},
	{
		solar: [1371, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1371],
		Leap: false
	},
	{
		solar: [1371, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1371],
		Leap: false
	},
	{
		solar: [1371, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1371],
		Leap: false
	},
	{
		solar: [1371, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1371],
		Leap: false
	},
	{
		solar: [1371, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1371],
		Leap: false
	},
	{
		solar: [1371, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1371],
		Leap: false
	},
	{
		solar: [1371, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1371],
		Leap: false
	},
	{
		solar: [1371, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1371],
		Leap: false
	},
	{
		solar: [1371, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1371],
		Leap: false
	},
	{
		solar: [1371, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1371],
		Leap: false
	},
	{
		solar: [1371, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1371],
		Leap: false
	},
	{
		solar: [1371, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1371],
		Leap: false
	},
	{
		solar: [1371, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1371],
		Leap: false
	},
	{
		solar: [1371, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1371],
		Leap: false
	},
	{
		solar: [1371, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1371],
		Leap: false
	},
	{
		solar: [1371, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1371],
		Leap: false
	},
	{
		solar: [1371, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1371],
		Leap: false
	},
	{
		solar: [1371, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1371],
		Leap: false
	},
	{
		solar: [1371, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1371],
		Leap: false
	},
	{
		solar: [1371, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1371],
		Leap: false
	},
	{
		solar: [1371, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1371],
		Leap: false
	},
	{
		solar: [1371, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1371],
		Leap: false
	},
	{
		solar: [1371, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1371],
		Leap: false
	},
	{
		solar: [1371, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1371],
		Leap: false
	},
	{
		solar: [1371, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1371],
		Leap: false
	},
	{
		solar: [1371, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1371],
		Leap: false
	},
	{
		solar: [1371, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1371],
		Leap: false
	},
	{
		solar: [1371, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1371],
		Leap: false
	},
	{
		solar: [1371, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1371],
		Leap: false
	},
	{
		solar: [1371, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1371],
		Leap: false
	},
	{
		solar: [1371, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1371],
		Leap: false
	},
	{
		solar: [1371, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1371],
		Leap: false
	},
	{
		solar: [1371, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1371],
		Leap: false
	},
	{
		solar: [1371, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1371],
		Leap: false
	},
	{
		solar: [1371, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1371],
		Leap: false
	},
	{
		solar: [1371, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1371],
		Leap: false
	},
	{
		solar: [1371, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1371],
		Leap: false
	},
	{
		solar: [1371, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1371],
		Leap: false
	},
	{
		solar: [1371, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1371],
		Leap: false
	},
	{
		solar: [1371, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1371],
		Leap: false
	},
	{
		solar: [1371, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1371],
		Leap: false
	},
	{
		solar: [1371, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1371],
		Leap: false
	},
	{
		solar: [1371, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1371],
		Leap: false
	},
	{
		solar: [1371, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1371],
		Leap: false
	},
	{
		solar: [1371, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1372],
		Leap: false
	},
	{
		solar: [1374, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1374],
		Leap: false
	},
	{
		solar: [1374, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1374],
		Leap: false
	},
	{
		solar: [1374, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1374],
		Leap: false
	},
	{
		solar: [1374, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1374],
		Leap: false
	},
	{
		solar: [1374, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1374],
		Leap: false
	},
	{
		solar: [1374, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1374],
		Leap: false
	},
	{
		solar: [1374, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1374],
		Leap: false
	},
	{
		solar: [1374, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1374],
		Leap: false
	},
	{
		solar: [1374, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1374],
		Leap: false
	},
	{
		solar: [1374, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1374],
		Leap: false
	},
	{
		solar: [1374, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1374],
		Leap: false
	},
	{
		solar: [1374, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1374],
		Leap: false
	},
	{
		solar: [1374, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1374],
		Leap: false
	},
	{
		solar: [1374, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1374],
		Leap: false
	},
	{
		solar: [1374, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1374],
		Leap: false
	},
	{
		solar: [1374, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1374],
		Leap: false
	},
	{
		solar: [1374, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1374],
		Leap: false
	},
	{
		solar: [1374, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1374],
		Leap: false
	},
	{
		solar: [1374, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1374],
		Leap: false
	},
	{
		solar: [1374, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1374],
		Leap: false
	},
	{
		solar: [1374, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1374],
		Leap: false
	},
	{
		solar: [1374, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1374],
		Leap: false
	},
	{
		solar: [1374, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1374],
		Leap: false
	},
	{
		solar: [1374, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1374],
		Leap: false
	},
	{
		solar: [1374, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1374],
		Leap: false
	},
	{
		solar: [1374, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1374],
		Leap: false
	},
	{
		solar: [1374, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1374],
		Leap: false
	},
	{
		solar: [1374, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1374],
		Leap: false
	},
	{
		solar: [1374, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1374],
		Leap: false
	},
	{
		solar: [1374, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1374],
		Leap: false
	},
	{
		solar: [1374, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1374],
		Leap: false
	},
	{
		solar: [1374, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1374],
		Leap: false
	},
	{
		solar: [1374, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1374],
		Leap: false
	},
	{
		solar: [1374, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1374],
		Leap: false
	},
	{
		solar: [1374, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1374],
		Leap: false
	},
	{
		solar: [1374, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1374],
		Leap: false
	},
	{
		solar: [1374, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1374],
		Leap: false
	},
	{
		solar: [1374, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1374],
		Leap: false
	},
	{
		solar: [1374, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1374],
		Leap: false
	},
	{
		solar: [1374, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1374],
		Leap: false
	},
	{
		solar: [1374, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1374],
		Leap: false
	},
	{
		solar: [1374, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1374],
		Leap: false
	},
	{
		solar: [1374, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1374],
		Leap: false
	},
	{
		solar: [1374, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1374],
		Leap: false
	},
	{
		solar: [1374, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1374],
		Leap: false
	},
	{
		solar: [1374, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1374],
		Leap: false
	},
	{
		solar: [1374, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1374],
		Leap: false
	},
	{
		solar: [1374, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1374],
		Leap: false
	},
	{
		solar: [1374, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1374],
		Leap: false
	},
	{
		solar: [1374, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1374],
		Leap: false
	},
	{
		solar: [1374, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1374],
		Leap: false
	},
	{
		solar: [1374, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1374],
		Leap: false
	},
	{
		solar: [1374, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1374],
		Leap: false
	},
	{
		solar: [1377, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1377],
		Leap: false
	},
	{
		solar: [1377, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1377],
		Leap: false
	},
	{
		solar: [1377, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1377],
		Leap: false
	},
	{
		solar: [1377, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1377],
		Leap: false
	},
	{
		solar: [1377, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1377],
		Leap: false
	},
	{
		solar: [1377, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1377],
		Leap: false
	},
	{
		solar: [1377, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1377],
		Leap: false
	},
	{
		solar: [1377, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1377],
		Leap: false
	},
	{
		solar: [1377, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1377],
		Leap: false
	},
	{
		solar: [1377, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1377],
		Leap: false
	},
	{
		solar: [1377, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1377],
		Leap: false
	},
	{
		solar: [1377, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1377],
		Leap: false
	},
	{
		solar: [1377, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1377],
		Leap: false
	},
	{
		solar: [1377, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1377],
		Leap: false
	},
	{
		solar: [1377, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1377],
		Leap: false
	},
	{
		solar: [1377, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1377],
		Leap: false
	},
	{
		solar: [1377, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1377],
		Leap: false
	},
	{
		solar: [1377, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1377],
		Leap: false
	},
	{
		solar: [1377, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1377],
		Leap: false
	},
	{
		solar: [1377, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1377],
		Leap: false
	},
	{
		solar: [1377, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1377],
		Leap: false
	},
	{
		solar: [1377, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1377],
		Leap: false
	},
	{
		solar: [1377, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1377],
		Leap: false
	},
	{
		solar: [1377, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1377],
		Leap: false
	},
	{
		solar: [1377, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1377],
		Leap: false
	},
	{
		solar: [1377, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1377],
		Leap: false
	},
	{
		solar: [1377, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1377],
		Leap: false
	},
	{
		solar: [1377, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1377],
		Leap: false
	},
	{
		solar: [1377, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1377],
		Leap: false
	},
	{
		solar: [1377, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1377],
		Leap: false
	},
	{
		solar: [1377, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1377],
		Leap: false
	},
	{
		solar: [1377, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1377],
		Leap: false
	},
	{
		solar: [1377, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1377],
		Leap: false
	},
	{
		solar: [1377, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1377],
		Leap: false
	},
	{
		solar: [1377, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1377],
		Leap: false
	},
	{
		solar: [1377, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1377],
		Leap: false
	},
	{
		solar: [1377, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1377],
		Leap: false
	},
	{
		solar: [1377, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1377],
		Leap: false
	},
	{
		solar: [1377, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1377],
		Leap: false
	},
	{
		solar: [1377, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1377],
		Leap: false
	},
	{
		solar: [1377, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1377],
		Leap: false
	},
	{
		solar: [1377, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1377],
		Leap: false
	},
	{
		solar: [1377, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1377],
		Leap: false
	},
	{
		solar: [1377, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1377],
		Leap: false
	},
	{
		solar: [1377, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1377],
		Leap: false
	},
	{
		solar: [1377, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1377],
		Leap: false
	},
	{
		solar: [1377, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1377],
		Leap: false
	},
	{
		solar: [1377, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1377],
		Leap: false
	},
	{
		solar: [1377, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1377],
		Leap: false
	},
	{
		solar: [1377, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1377],
		Leap: false
	},
	{
		solar: [1377, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1377],
		Leap: false
	},
	{
		solar: [1377, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1377],
		Leap: false
	},
	{
		solar: [1377, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1378],
		Leap: false
	},
	{
		solar: [1380, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1379],
		Leap: false
	},
	{
		solar: [1380, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1379],
		Leap: false
	},
	{
		solar: [1380, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1379],
		Leap: false
	},
	{
		solar: [1380, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1380],
		Leap: false
	},
	{
		solar: [1380, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1380],
		Leap: false
	},
	{
		solar: [1380, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1380],
		Leap: false
	},
	{
		solar: [1380, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1380],
		Leap: false
	},
	{
		solar: [1380, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1380],
		Leap: false
	},
	{
		solar: [1380, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1380],
		Leap: false
	},
	{
		solar: [1380, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1380],
		Leap: false
	},
	{
		solar: [1380, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1380],
		Leap: false
	},
	{
		solar: [1380, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1380],
		Leap: false
	},
	{
		solar: [1380, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1380],
		Leap: false
	},
	{
		solar: [1380, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1380],
		Leap: false
	},
	{
		solar: [1380, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1380],
		Leap: false
	},
	{
		solar: [1380, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1380],
		Leap: false
	},
	{
		solar: [1380, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1380],
		Leap: false
	},
	{
		solar: [1380, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1380],
		Leap: false
	},
	{
		solar: [1380, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1380],
		Leap: false
	},
	{
		solar: [1380, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1380],
		Leap: false
	},
	{
		solar: [1380, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1380],
		Leap: false
	},
	{
		solar: [1380, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1380],
		Leap: false
	},
	{
		solar: [1380, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1380],
		Leap: false
	},
	{
		solar: [1380, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1380],
		Leap: false
	},
	{
		solar: [1380, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1380],
		Leap: false
	},
	{
		solar: [1380, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1380],
		Leap: false
	},
	{
		solar: [1380, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1380],
		Leap: false
	},
	{
		solar: [1380, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1380],
		Leap: false
	},
	{
		solar: [1380, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1380],
		Leap: false
	},
	{
		solar: [1380, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1380],
		Leap: false
	},
	{
		solar: [1380, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1380],
		Leap: false
	},
	{
		solar: [1380, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1380],
		Leap: false
	},
	{
		solar: [1380, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1380],
		Leap: false
	},
	{
		solar: [1380, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1380],
		Leap: false
	},
	{
		solar: [1380, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1380],
		Leap: false
	},
	{
		solar: [1380, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1380],
		Leap: false
	},
	{
		solar: [1380, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1380],
		Leap: false
	},
	{
		solar: [1380, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1380],
		Leap: false
	},
	{
		solar: [1380, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1380],
		Leap: false
	},
	{
		solar: [1380, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1380],
		Leap: false
	},
	{
		solar: [1380, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1380],
		Leap: false
	},
	{
		solar: [1380, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1380],
		Leap: false
	},
	{
		solar: [1380, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1380],
		Leap: false
	},
	{
		solar: [1380, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1380],
		Leap: false
	},
	{
		solar: [1380, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1380],
		Leap: false
	},
	{
		solar: [1380, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1380],
		Leap: false
	},
	{
		solar: [1380, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1380],
		Leap: false
	},
	{
		solar: [1380, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1380],
		Leap: false
	},
	{
		solar: [1380, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1380],
		Leap: false
	},
	{
		solar: [1380, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1380],
		Leap: false
	},
	{
		solar: [1380, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1380],
		Leap: false
	},
	{
		solar: [1380, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1380],
		Leap: false
	},
	{
		solar: [1380, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1380],
		Leap: false
	},
	{
		solar: [1383, 0, 1],
		Dow: 0,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1383],
		Leap: true
	},
	{
		solar: [1383, 0, 2],
		Dow: 1,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1383],
		Leap: true
	},
	{
		solar: [1383, 0, 3],
		Dow: 2,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1383],
		Leap: true
	},
	{
		solar: [1383, 0, 4],
		Dow: 3,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1383],
		Leap: true
	},
	{
		solar: [1383, 0, 5],
		Dow: 4,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1383],
		Leap: true
	},
	{
		solar: [1383, 0, 30],
		Dow: 1,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1383],
		Leap: true
	},
	{
		solar: [1383, 0, 31],
		Dow: 2,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1383],
		Leap: true
	},
	{
		solar: [1383, 1, 1],
		Dow: 3,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1383],
		Leap: true
	},
	{
		solar: [1383, 1, 2],
		Dow: 4,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1383],
		Leap: true
	},
	{
		solar: [1383, 1, 30],
		Dow: 4,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1383],
		Leap: true
	},
	{
		solar: [1383, 1, 31],
		Dow: 5,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1383],
		Leap: true
	},
	{
		solar: [1383, 2, 1],
		Dow: 6,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1383],
		Leap: true
	},
	{
		solar: [1383, 2, 2],
		Dow: 0,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1383],
		Leap: true
	},
	{
		solar: [1383, 2, 30],
		Dow: 0,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1383],
		Leap: true
	},
	{
		solar: [1383, 2, 31],
		Dow: 1,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1383],
		Leap: true
	},
	{
		solar: [1383, 3, 1],
		Dow: 2,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1383],
		Leap: true
	},
	{
		solar: [1383, 3, 2],
		Dow: 3,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1383],
		Leap: true
	},
	{
		solar: [1383, 3, 30],
		Dow: 3,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1383],
		Leap: true
	},
	{
		solar: [1383, 3, 31],
		Dow: 4,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1383],
		Leap: true
	},
	{
		solar: [1383, 4, 1],
		Dow: 5,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1383],
		Leap: true
	},
	{
		solar: [1383, 4, 2],
		Dow: 6,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1383],
		Leap: true
	},
	{
		solar: [1383, 4, 30],
		Dow: 6,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1383],
		Leap: true
	},
	{
		solar: [1383, 4, 31],
		Dow: 0,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1383],
		Leap: true
	},
	{
		solar: [1383, 5, 1],
		Dow: 1,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1383],
		Leap: true
	},
	{
		solar: [1383, 5, 2],
		Dow: 2,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1383],
		Leap: true
	},
	{
		solar: [1383, 5, 30],
		Dow: 2,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1383],
		Leap: true
	},
	{
		solar: [1383, 5, 31],
		Dow: 3,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1383],
		Leap: true
	},
	{
		solar: [1383, 6, 1],
		Dow: 4,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1383],
		Leap: true
	},
	{
		solar: [1383, 6, 2],
		Dow: 5,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1383],
		Leap: true
	},
	{
		solar: [1383, 6, 29],
		Dow: 4,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1383],
		Leap: true
	},
	{
		solar: [1383, 6, 30],
		Dow: 5,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1383],
		Leap: true
	},
	{
		solar: [1383, 7, 1],
		Dow: 6,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1383],
		Leap: true
	},
	{
		solar: [1383, 7, 2],
		Dow: 0,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1383],
		Leap: true
	},
	{
		solar: [1383, 7, 29],
		Dow: 6,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1383],
		Leap: true
	},
	{
		solar: [1383, 7, 30],
		Dow: 0,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1383],
		Leap: true
	},
	{
		solar: [1383, 8, 1],
		Dow: 1,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1383],
		Leap: true
	},
	{
		solar: [1383, 8, 2],
		Dow: 2,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1383],
		Leap: true
	},
	{
		solar: [1383, 8, 29],
		Dow: 1,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1383],
		Leap: true
	},
	{
		solar: [1383, 8, 30],
		Dow: 2,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1383],
		Leap: true
	},
	{
		solar: [1383, 9, 1],
		Dow: 3,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1383],
		Leap: true
	},
	{
		solar: [1383, 9, 2],
		Dow: 4,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1383],
		Leap: true
	},
	{
		solar: [1383, 9, 29],
		Dow: 3,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1383],
		Leap: true
	},
	{
		solar: [1383, 9, 30],
		Dow: 4,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1383],
		Leap: true
	},
	{
		solar: [1383, 10, 1],
		Dow: 5,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1383],
		Leap: true
	},
	{
		solar: [1383, 10, 2],
		Dow: 6,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1383],
		Leap: true
	},
	{
		solar: [1383, 10, 29],
		Dow: 5,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1383],
		Leap: true
	},
	{
		solar: [1383, 10, 30],
		Dow: 6,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1383],
		Leap: true
	},
	{
		solar: [1383, 11, 1],
		Dow: 0,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1383],
		Leap: true
	},
	{
		solar: [1383, 11, 2],
		Dow: 1,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1383],
		Leap: true
	},
	{
		solar: [1383, 11, 26],
		Dow: 4,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1383],
		Leap: true
	},
	{
		solar: [1383, 11, 27],
		Dow: 5,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1383],
		Leap: true
	},
	{
		solar: [1383, 11, 28],
		Dow: 6,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1383],
		Leap: true
	},
	{
		solar: [1383, 11, 29],
		Dow: 0,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1384],
		Leap: true
	},
	{
		solar: [1383, 11, 30],
		Dow: 1,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1384],
		Leap: true
	},
	{
		solar: [1386, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1385],
		Leap: false
	},
	{
		solar: [1386, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1385],
		Leap: false
	},
	{
		solar: [1386, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1385],
		Leap: false
	},
	{
		solar: [1386, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1386],
		Leap: false
	},
	{
		solar: [1386, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1386],
		Leap: false
	},
	{
		solar: [1386, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1386],
		Leap: false
	},
	{
		solar: [1386, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1386],
		Leap: false
	},
	{
		solar: [1386, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1386],
		Leap: false
	},
	{
		solar: [1386, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1386],
		Leap: false
	},
	{
		solar: [1386, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1386],
		Leap: false
	},
	{
		solar: [1386, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1386],
		Leap: false
	},
	{
		solar: [1386, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1386],
		Leap: false
	},
	{
		solar: [1386, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1386],
		Leap: false
	},
	{
		solar: [1386, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1386],
		Leap: false
	},
	{
		solar: [1386, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1386],
		Leap: false
	},
	{
		solar: [1386, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1386],
		Leap: false
	},
	{
		solar: [1386, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1386],
		Leap: false
	},
	{
		solar: [1386, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1386],
		Leap: false
	},
	{
		solar: [1386, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1386],
		Leap: false
	},
	{
		solar: [1386, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1386],
		Leap: false
	},
	{
		solar: [1386, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1386],
		Leap: false
	},
	{
		solar: [1386, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1386],
		Leap: false
	},
	{
		solar: [1386, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1386],
		Leap: false
	},
	{
		solar: [1386, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1386],
		Leap: false
	},
	{
		solar: [1386, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1386],
		Leap: false
	},
	{
		solar: [1386, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1386],
		Leap: false
	},
	{
		solar: [1386, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1386],
		Leap: false
	},
	{
		solar: [1386, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1386],
		Leap: false
	},
	{
		solar: [1386, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1386],
		Leap: false
	},
	{
		solar: [1386, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1386],
		Leap: false
	},
	{
		solar: [1386, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1386],
		Leap: false
	},
	{
		solar: [1386, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1386],
		Leap: false
	},
	{
		solar: [1386, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1386],
		Leap: false
	},
	{
		solar: [1386, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1386],
		Leap: false
	},
	{
		solar: [1386, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1386],
		Leap: false
	},
	{
		solar: [1386, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1386],
		Leap: false
	},
	{
		solar: [1386, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1386],
		Leap: false
	},
	{
		solar: [1386, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1386],
		Leap: false
	},
	{
		solar: [1386, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1386],
		Leap: false
	},
	{
		solar: [1386, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1386],
		Leap: false
	},
	{
		solar: [1386, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1386],
		Leap: false
	},
	{
		solar: [1386, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1386],
		Leap: false
	},
	{
		solar: [1386, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1386],
		Leap: false
	},
	{
		solar: [1386, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1386],
		Leap: false
	},
	{
		solar: [1386, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1386],
		Leap: false
	},
	{
		solar: [1386, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1386],
		Leap: false
	},
	{
		solar: [1386, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1386],
		Leap: false
	},
	{
		solar: [1386, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1386],
		Leap: false
	},
	{
		solar: [1386, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1386],
		Leap: false
	},
	{
		solar: [1386, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1386],
		Leap: false
	},
	{
		solar: [1386, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1386],
		Leap: false
	},
	{
		solar: [1386, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1386],
		Leap: false
	},
	{
		solar: [1386, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1386],
		Leap: false
	},
	{
		solar: [1389, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1389],
		Leap: false
	},
	{
		solar: [1389, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1389],
		Leap: false
	},
	{
		solar: [1389, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1389],
		Leap: false
	},
	{
		solar: [1389, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1389],
		Leap: false
	},
	{
		solar: [1389, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1389],
		Leap: false
	},
	{
		solar: [1389, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1389],
		Leap: false
	},
	{
		solar: [1389, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1389],
		Leap: false
	},
	{
		solar: [1389, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1389],
		Leap: false
	},
	{
		solar: [1389, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1389],
		Leap: false
	},
	{
		solar: [1389, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1389],
		Leap: false
	},
	{
		solar: [1389, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1389],
		Leap: false
	},
	{
		solar: [1389, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1389],
		Leap: false
	},
	{
		solar: [1389, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1389],
		Leap: false
	},
	{
		solar: [1389, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1389],
		Leap: false
	},
	{
		solar: [1389, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1389],
		Leap: false
	},
	{
		solar: [1389, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1389],
		Leap: false
	},
	{
		solar: [1389, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1389],
		Leap: false
	},
	{
		solar: [1389, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1389],
		Leap: false
	},
	{
		solar: [1389, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1389],
		Leap: false
	},
	{
		solar: [1389, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1389],
		Leap: false
	},
	{
		solar: [1389, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1389],
		Leap: false
	},
	{
		solar: [1389, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1389],
		Leap: false
	},
	{
		solar: [1389, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1389],
		Leap: false
	},
	{
		solar: [1389, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1389],
		Leap: false
	},
	{
		solar: [1389, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1389],
		Leap: false
	},
	{
		solar: [1389, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1389],
		Leap: false
	},
	{
		solar: [1389, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1389],
		Leap: false
	},
	{
		solar: [1389, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1389],
		Leap: false
	},
	{
		solar: [1389, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1389],
		Leap: false
	},
	{
		solar: [1389, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1389],
		Leap: false
	},
	{
		solar: [1389, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1389],
		Leap: false
	},
	{
		solar: [1389, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1389],
		Leap: false
	},
	{
		solar: [1389, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1389],
		Leap: false
	},
	{
		solar: [1389, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1389],
		Leap: false
	},
	{
		solar: [1389, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1389],
		Leap: false
	},
	{
		solar: [1389, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1389],
		Leap: false
	},
	{
		solar: [1389, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1389],
		Leap: false
	},
	{
		solar: [1389, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1389],
		Leap: false
	},
	{
		solar: [1389, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1389],
		Leap: false
	},
	{
		solar: [1389, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1389],
		Leap: false
	},
	{
		solar: [1389, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1389],
		Leap: false
	},
	{
		solar: [1389, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1389],
		Leap: false
	},
	{
		solar: [1389, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1389],
		Leap: false
	},
	{
		solar: [1389, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1389],
		Leap: false
	},
	{
		solar: [1389, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1389],
		Leap: false
	},
	{
		solar: [1389, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1389],
		Leap: false
	},
	{
		solar: [1389, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1389],
		Leap: false
	},
	{
		solar: [1389, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1389],
		Leap: false
	},
	{
		solar: [1389, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1389],
		Leap: false
	},
	{
		solar: [1389, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1389],
		Leap: false
	},
	{
		solar: [1389, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1389],
		Leap: false
	},
	{
		solar: [1389, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1390],
		Leap: false
	},
	{
		solar: [1389, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1390],
		Leap: false
	},
	{
		solar: [1392, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1391],
		Leap: false
	},
	{
		solar: [1392, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1391],
		Leap: false
	},
	{
		solar: [1392, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1392],
		Leap: false
	},
	{
		solar: [1392, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1392],
		Leap: false
	},
	{
		solar: [1392, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1392],
		Leap: false
	},
	{
		solar: [1392, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1392],
		Leap: false
	},
	{
		solar: [1392, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1392],
		Leap: false
	},
	{
		solar: [1392, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1392],
		Leap: false
	},
	{
		solar: [1392, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1392],
		Leap: false
	},
	{
		solar: [1392, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1392],
		Leap: false
	},
	{
		solar: [1392, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1392],
		Leap: false
	},
	{
		solar: [1392, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1392],
		Leap: false
	},
	{
		solar: [1392, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1392],
		Leap: false
	},
	{
		solar: [1392, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1392],
		Leap: false
	},
	{
		solar: [1392, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1392],
		Leap: false
	},
	{
		solar: [1392, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1392],
		Leap: false
	},
	{
		solar: [1392, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1392],
		Leap: false
	},
	{
		solar: [1392, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1392],
		Leap: false
	},
	{
		solar: [1392, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1392],
		Leap: false
	},
	{
		solar: [1392, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1392],
		Leap: false
	},
	{
		solar: [1392, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1392],
		Leap: false
	},
	{
		solar: [1392, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1392],
		Leap: false
	},
	{
		solar: [1392, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1392],
		Leap: false
	},
	{
		solar: [1392, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1392],
		Leap: false
	},
	{
		solar: [1392, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1392],
		Leap: false
	},
	{
		solar: [1392, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1392],
		Leap: false
	},
	{
		solar: [1392, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1392],
		Leap: false
	},
	{
		solar: [1392, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1392],
		Leap: false
	},
	{
		solar: [1392, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1392],
		Leap: false
	},
	{
		solar: [1392, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1392],
		Leap: false
	},
	{
		solar: [1392, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1392],
		Leap: false
	},
	{
		solar: [1392, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1392],
		Leap: false
	},
	{
		solar: [1392, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1392],
		Leap: false
	},
	{
		solar: [1392, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1392],
		Leap: false
	},
	{
		solar: [1392, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1392],
		Leap: false
	},
	{
		solar: [1392, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1392],
		Leap: false
	},
	{
		solar: [1392, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1392],
		Leap: false
	},
	{
		solar: [1392, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1392],
		Leap: false
	},
	{
		solar: [1392, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1392],
		Leap: false
	},
	{
		solar: [1392, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1392],
		Leap: false
	},
	{
		solar: [1392, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1392],
		Leap: false
	},
	{
		solar: [1392, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1392],
		Leap: false
	},
	{
		solar: [1392, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1392],
		Leap: false
	},
	{
		solar: [1392, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1392],
		Leap: false
	},
	{
		solar: [1392, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1392],
		Leap: false
	},
	{
		solar: [1392, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1392],
		Leap: false
	},
	{
		solar: [1392, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1392],
		Leap: false
	},
	{
		solar: [1392, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1392],
		Leap: false
	},
	{
		solar: [1392, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1392],
		Leap: false
	},
	{
		solar: [1392, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1392],
		Leap: false
	},
	{
		solar: [1392, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1392],
		Leap: false
	},
	{
		solar: [1392, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1392],
		Leap: false
	},
	{
		solar: [1392, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1392],
		Leap: false
	},
	{
		solar: [1395, 0, 1],
		Dow: 1,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1395],
		Leap: true
	},
	{
		solar: [1395, 0, 2],
		Dow: 2,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1395],
		Leap: true
	},
	{
		solar: [1395, 0, 3],
		Dow: 3,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1395],
		Leap: true
	},
	{
		solar: [1395, 0, 4],
		Dow: 4,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1395],
		Leap: true
	},
	{
		solar: [1395, 0, 5],
		Dow: 5,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1395],
		Leap: true
	},
	{
		solar: [1395, 0, 30],
		Dow: 2,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1395],
		Leap: true
	},
	{
		solar: [1395, 0, 31],
		Dow: 3,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1395],
		Leap: true
	},
	{
		solar: [1395, 1, 1],
		Dow: 4,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1395],
		Leap: true
	},
	{
		solar: [1395, 1, 2],
		Dow: 5,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1395],
		Leap: true
	},
	{
		solar: [1395, 1, 30],
		Dow: 5,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1395],
		Leap: true
	},
	{
		solar: [1395, 1, 31],
		Dow: 6,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1395],
		Leap: true
	},
	{
		solar: [1395, 2, 1],
		Dow: 0,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1395],
		Leap: true
	},
	{
		solar: [1395, 2, 2],
		Dow: 1,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1395],
		Leap: true
	},
	{
		solar: [1395, 2, 30],
		Dow: 1,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1395],
		Leap: true
	},
	{
		solar: [1395, 2, 31],
		Dow: 2,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1395],
		Leap: true
	},
	{
		solar: [1395, 3, 1],
		Dow: 3,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1395],
		Leap: true
	},
	{
		solar: [1395, 3, 2],
		Dow: 4,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1395],
		Leap: true
	},
	{
		solar: [1395, 3, 30],
		Dow: 4,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1395],
		Leap: true
	},
	{
		solar: [1395, 3, 31],
		Dow: 5,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1395],
		Leap: true
	},
	{
		solar: [1395, 4, 1],
		Dow: 6,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1395],
		Leap: true
	},
	{
		solar: [1395, 4, 2],
		Dow: 0,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1395],
		Leap: true
	},
	{
		solar: [1395, 4, 30],
		Dow: 0,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1395],
		Leap: true
	},
	{
		solar: [1395, 4, 31],
		Dow: 1,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1395],
		Leap: true
	},
	{
		solar: [1395, 5, 1],
		Dow: 2,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1395],
		Leap: true
	},
	{
		solar: [1395, 5, 2],
		Dow: 3,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1395],
		Leap: true
	},
	{
		solar: [1395, 5, 30],
		Dow: 3,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1395],
		Leap: true
	},
	{
		solar: [1395, 5, 31],
		Dow: 4,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1395],
		Leap: true
	},
	{
		solar: [1395, 6, 1],
		Dow: 5,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1395],
		Leap: true
	},
	{
		solar: [1395, 6, 2],
		Dow: 6,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1395],
		Leap: true
	},
	{
		solar: [1395, 6, 29],
		Dow: 5,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1395],
		Leap: true
	},
	{
		solar: [1395, 6, 30],
		Dow: 6,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1395],
		Leap: true
	},
	{
		solar: [1395, 7, 1],
		Dow: 0,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1395],
		Leap: true
	},
	{
		solar: [1395, 7, 2],
		Dow: 1,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1395],
		Leap: true
	},
	{
		solar: [1395, 7, 29],
		Dow: 0,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1395],
		Leap: true
	},
	{
		solar: [1395, 7, 30],
		Dow: 1,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1395],
		Leap: true
	},
	{
		solar: [1395, 8, 1],
		Dow: 2,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1395],
		Leap: true
	},
	{
		solar: [1395, 8, 2],
		Dow: 3,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1395],
		Leap: true
	},
	{
		solar: [1395, 8, 29],
		Dow: 2,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1395],
		Leap: true
	},
	{
		solar: [1395, 8, 30],
		Dow: 3,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1395],
		Leap: true
	},
	{
		solar: [1395, 9, 1],
		Dow: 4,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1395],
		Leap: true
	},
	{
		solar: [1395, 9, 2],
		Dow: 5,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1395],
		Leap: true
	},
	{
		solar: [1395, 9, 29],
		Dow: 4,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1395],
		Leap: true
	},
	{
		solar: [1395, 9, 30],
		Dow: 5,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1395],
		Leap: true
	},
	{
		solar: [1395, 10, 1],
		Dow: 6,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1395],
		Leap: true
	},
	{
		solar: [1395, 10, 2],
		Dow: 0,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1395],
		Leap: true
	},
	{
		solar: [1395, 10, 29],
		Dow: 6,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1395],
		Leap: true
	},
	{
		solar: [1395, 10, 30],
		Dow: 0,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1395],
		Leap: true
	},
	{
		solar: [1395, 11, 1],
		Dow: 1,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1395],
		Leap: true
	},
	{
		solar: [1395, 11, 2],
		Dow: 2,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1395],
		Leap: true
	},
	{
		solar: [1395, 11, 26],
		Dow: 5,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1395],
		Leap: true
	},
	{
		solar: [1395, 11, 27],
		Dow: 6,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1395],
		Leap: true
	},
	{
		solar: [1395, 11, 28],
		Dow: 0,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1396],
		Leap: true
	},
	{
		solar: [1395, 11, 29],
		Dow: 1,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1396],
		Leap: true
	},
	{
		solar: [1395, 11, 30],
		Dow: 2,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1396],
		Leap: true
	},
	{
		solar: [1398, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1397],
		Leap: false
	},
	{
		solar: [1398, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1397],
		Leap: false
	},
	{
		solar: [1398, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1398],
		Leap: false
	},
	{
		solar: [1398, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1398],
		Leap: false
	},
	{
		solar: [1398, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1398],
		Leap: false
	},
	{
		solar: [1398, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1398],
		Leap: false
	},
	{
		solar: [1398, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1398],
		Leap: false
	},
	{
		solar: [1398, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1398],
		Leap: false
	},
	{
		solar: [1398, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1398],
		Leap: false
	},
	{
		solar: [1398, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1398],
		Leap: false
	},
	{
		solar: [1398, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1398],
		Leap: false
	},
	{
		solar: [1398, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1398],
		Leap: false
	},
	{
		solar: [1398, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1398],
		Leap: false
	},
	{
		solar: [1398, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1398],
		Leap: false
	},
	{
		solar: [1398, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1398],
		Leap: false
	},
	{
		solar: [1398, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1398],
		Leap: false
	},
	{
		solar: [1398, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1398],
		Leap: false
	},
	{
		solar: [1398, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1398],
		Leap: false
	},
	{
		solar: [1398, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1398],
		Leap: false
	},
	{
		solar: [1398, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1398],
		Leap: false
	},
	{
		solar: [1398, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1398],
		Leap: false
	},
	{
		solar: [1398, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1398],
		Leap: false
	},
	{
		solar: [1398, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1398],
		Leap: false
	},
	{
		solar: [1398, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1398],
		Leap: false
	},
	{
		solar: [1398, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1398],
		Leap: false
	},
	{
		solar: [1398, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1398],
		Leap: false
	},
	{
		solar: [1398, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1398],
		Leap: false
	},
	{
		solar: [1398, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1398],
		Leap: false
	},
	{
		solar: [1398, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1398],
		Leap: false
	},
	{
		solar: [1398, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1398],
		Leap: false
	},
	{
		solar: [1398, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1398],
		Leap: false
	},
	{
		solar: [1398, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1398],
		Leap: false
	},
	{
		solar: [1398, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1398],
		Leap: false
	},
	{
		solar: [1398, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1398],
		Leap: false
	},
	{
		solar: [1398, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1398],
		Leap: false
	},
	{
		solar: [1398, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1398],
		Leap: false
	},
	{
		solar: [1398, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1398],
		Leap: false
	},
	{
		solar: [1398, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1398],
		Leap: false
	},
	{
		solar: [1398, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1398],
		Leap: false
	},
	{
		solar: [1398, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1398],
		Leap: false
	},
	{
		solar: [1398, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1398],
		Leap: false
	},
	{
		solar: [1398, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1398],
		Leap: false
	},
	{
		solar: [1398, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1398],
		Leap: false
	},
	{
		solar: [1398, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1398],
		Leap: false
	},
	{
		solar: [1398, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1398],
		Leap: false
	},
	{
		solar: [1398, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1398],
		Leap: false
	},
	{
		solar: [1398, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1398],
		Leap: false
	},
	{
		solar: [1398, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1398],
		Leap: false
	},
	{
		solar: [1398, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1398],
		Leap: false
	},
	{
		solar: [1398, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1398],
		Leap: false
	},
	{
		solar: [1398, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1398],
		Leap: false
	},
	{
		solar: [1398, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1398],
		Leap: false
	},
	{
		solar: [1398, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1398],
		Leap: false
	},
	{
		solar: [1401, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1401],
		Leap: false
	},
	{
		solar: [1401, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1401],
		Leap: false
	},
	{
		solar: [1401, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1401],
		Leap: false
	},
	{
		solar: [1401, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1401],
		Leap: false
	},
	{
		solar: [1401, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1401],
		Leap: false
	},
	{
		solar: [1401, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1401],
		Leap: false
	},
	{
		solar: [1401, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1401],
		Leap: false
	},
	{
		solar: [1401, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1401],
		Leap: false
	},
	{
		solar: [1401, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1401],
		Leap: false
	},
	{
		solar: [1401, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1401],
		Leap: false
	},
	{
		solar: [1401, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1401],
		Leap: false
	},
	{
		solar: [1401, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1401],
		Leap: false
	},
	{
		solar: [1401, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1401],
		Leap: false
	},
	{
		solar: [1401, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1401],
		Leap: false
	},
	{
		solar: [1401, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1401],
		Leap: false
	},
	{
		solar: [1401, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1401],
		Leap: false
	},
	{
		solar: [1401, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1401],
		Leap: false
	},
	{
		solar: [1401, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1401],
		Leap: false
	},
	{
		solar: [1401, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1401],
		Leap: false
	},
	{
		solar: [1401, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1401],
		Leap: false
	},
	{
		solar: [1401, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1401],
		Leap: false
	},
	{
		solar: [1401, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1401],
		Leap: false
	},
	{
		solar: [1401, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1401],
		Leap: false
	},
	{
		solar: [1401, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1401],
		Leap: false
	},
	{
		solar: [1401, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1401],
		Leap: false
	},
	{
		solar: [1401, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1401],
		Leap: false
	},
	{
		solar: [1401, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1401],
		Leap: false
	},
	{
		solar: [1401, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1401],
		Leap: false
	},
	{
		solar: [1401, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1401],
		Leap: false
	},
	{
		solar: [1401, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1401],
		Leap: false
	},
	{
		solar: [1401, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1401],
		Leap: false
	},
	{
		solar: [1401, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1401],
		Leap: false
	},
	{
		solar: [1401, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1401],
		Leap: false
	},
	{
		solar: [1401, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1401],
		Leap: false
	},
	{
		solar: [1401, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1401],
		Leap: false
	},
	{
		solar: [1401, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1401],
		Leap: false
	},
	{
		solar: [1401, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1401],
		Leap: false
	},
	{
		solar: [1401, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1401],
		Leap: false
	},
	{
		solar: [1401, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1401],
		Leap: false
	},
	{
		solar: [1401, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1401],
		Leap: false
	},
	{
		solar: [1401, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1401],
		Leap: false
	},
	{
		solar: [1401, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1401],
		Leap: false
	},
	{
		solar: [1401, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1401],
		Leap: false
	},
	{
		solar: [1401, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1401],
		Leap: false
	},
	{
		solar: [1401, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1401],
		Leap: false
	},
	{
		solar: [1401, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1401],
		Leap: false
	},
	{
		solar: [1401, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1401],
		Leap: false
	},
	{
		solar: [1401, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1401],
		Leap: false
	},
	{
		solar: [1401, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1401],
		Leap: false
	},
	{
		solar: [1401, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1401],
		Leap: false
	},
	{
		solar: [1401, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1402],
		Leap: false
	},
	{
		solar: [1401, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1402],
		Leap: false
	},
	{
		solar: [1401, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1402],
		Leap: false
	},
	{
		solar: [1404, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1403],
		Leap: false
	},
	{
		solar: [1404, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1404],
		Leap: false
	},
	{
		solar: [1404, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1404],
		Leap: false
	},
	{
		solar: [1404, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1404],
		Leap: false
	},
	{
		solar: [1404, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1404],
		Leap: false
	},
	{
		solar: [1404, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1404],
		Leap: false
	},
	{
		solar: [1404, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1404],
		Leap: false
	},
	{
		solar: [1404, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1404],
		Leap: false
	},
	{
		solar: [1404, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1404],
		Leap: false
	},
	{
		solar: [1404, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1404],
		Leap: false
	},
	{
		solar: [1404, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1404],
		Leap: false
	},
	{
		solar: [1404, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1404],
		Leap: false
	},
	{
		solar: [1404, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1404],
		Leap: false
	},
	{
		solar: [1404, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1404],
		Leap: false
	},
	{
		solar: [1404, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1404],
		Leap: false
	},
	{
		solar: [1404, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1404],
		Leap: false
	},
	{
		solar: [1404, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1404],
		Leap: false
	},
	{
		solar: [1404, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1404],
		Leap: false
	},
	{
		solar: [1404, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1404],
		Leap: false
	},
	{
		solar: [1404, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1404],
		Leap: false
	},
	{
		solar: [1404, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1404],
		Leap: false
	},
	{
		solar: [1404, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1404],
		Leap: false
	},
	{
		solar: [1404, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1404],
		Leap: false
	},
	{
		solar: [1404, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1404],
		Leap: false
	},
	{
		solar: [1404, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1404],
		Leap: false
	},
	{
		solar: [1404, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1404],
		Leap: false
	},
	{
		solar: [1404, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1404],
		Leap: false
	},
	{
		solar: [1404, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1404],
		Leap: false
	},
	{
		solar: [1404, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1404],
		Leap: false
	},
	{
		solar: [1404, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1404],
		Leap: false
	},
	{
		solar: [1404, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1404],
		Leap: false
	},
	{
		solar: [1404, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1404],
		Leap: false
	},
	{
		solar: [1404, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1404],
		Leap: false
	},
	{
		solar: [1404, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1404],
		Leap: false
	},
	{
		solar: [1404, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1404],
		Leap: false
	},
	{
		solar: [1404, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1404],
		Leap: false
	},
	{
		solar: [1404, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1404],
		Leap: false
	},
	{
		solar: [1404, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1404],
		Leap: false
	},
	{
		solar: [1404, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1404],
		Leap: false
	},
	{
		solar: [1404, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1404],
		Leap: false
	},
	{
		solar: [1404, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1404],
		Leap: false
	},
	{
		solar: [1404, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1404],
		Leap: false
	},
	{
		solar: [1404, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1404],
		Leap: false
	},
	{
		solar: [1404, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1404],
		Leap: false
	},
	{
		solar: [1404, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1404],
		Leap: false
	},
	{
		solar: [1404, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1404],
		Leap: false
	},
	{
		solar: [1404, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1404],
		Leap: false
	},
	{
		solar: [1404, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1404],
		Leap: false
	},
	{
		solar: [1404, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1404],
		Leap: false
	},
	{
		solar: [1404, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1404],
		Leap: false
	},
	{
		solar: [1404, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1404],
		Leap: false
	},
	{
		solar: [1404, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1404],
		Leap: false
	},
	{
		solar: [1404, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1404],
		Leap: false
	},
	{
		solar: [1407, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1407],
		Leap: false
	},
	{
		solar: [1407, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1407],
		Leap: false
	},
	{
		solar: [1407, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1407],
		Leap: false
	},
	{
		solar: [1407, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1407],
		Leap: false
	},
	{
		solar: [1407, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1407],
		Leap: false
	},
	{
		solar: [1407, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1407],
		Leap: false
	},
	{
		solar: [1407, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1407],
		Leap: false
	},
	{
		solar: [1407, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1407],
		Leap: false
	},
	{
		solar: [1407, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1407],
		Leap: false
	},
	{
		solar: [1407, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1407],
		Leap: false
	},
	{
		solar: [1407, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1407],
		Leap: false
	},
	{
		solar: [1407, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1407],
		Leap: false
	},
	{
		solar: [1407, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1407],
		Leap: false
	},
	{
		solar: [1407, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1407],
		Leap: false
	},
	{
		solar: [1407, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1407],
		Leap: false
	},
	{
		solar: [1407, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1407],
		Leap: false
	},
	{
		solar: [1407, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1407],
		Leap: false
	},
	{
		solar: [1407, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1407],
		Leap: false
	},
	{
		solar: [1407, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1407],
		Leap: false
	},
	{
		solar: [1407, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1407],
		Leap: false
	},
	{
		solar: [1407, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1407],
		Leap: false
	},
	{
		solar: [1407, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1407],
		Leap: false
	},
	{
		solar: [1407, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1407],
		Leap: false
	},
	{
		solar: [1407, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1407],
		Leap: false
	},
	{
		solar: [1407, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1407],
		Leap: false
	},
	{
		solar: [1407, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1407],
		Leap: false
	},
	{
		solar: [1407, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1407],
		Leap: false
	},
	{
		solar: [1407, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1407],
		Leap: false
	},
	{
		solar: [1407, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1407],
		Leap: false
	},
	{
		solar: [1407, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1407],
		Leap: false
	},
	{
		solar: [1407, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1407],
		Leap: false
	},
	{
		solar: [1407, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1407],
		Leap: false
	},
	{
		solar: [1407, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1407],
		Leap: false
	},
	{
		solar: [1407, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1407],
		Leap: false
	},
	{
		solar: [1407, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1407],
		Leap: false
	},
	{
		solar: [1407, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1407],
		Leap: false
	},
	{
		solar: [1407, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1407],
		Leap: false
	},
	{
		solar: [1407, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1407],
		Leap: false
	},
	{
		solar: [1407, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1407],
		Leap: false
	},
	{
		solar: [1407, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1407],
		Leap: false
	},
	{
		solar: [1407, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1407],
		Leap: false
	},
	{
		solar: [1407, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1407],
		Leap: false
	},
	{
		solar: [1407, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1407],
		Leap: false
	},
	{
		solar: [1407, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1407],
		Leap: false
	},
	{
		solar: [1407, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1407],
		Leap: false
	},
	{
		solar: [1407, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1407],
		Leap: false
	},
	{
		solar: [1407, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1407],
		Leap: false
	},
	{
		solar: [1407, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1407],
		Leap: false
	},
	{
		solar: [1407, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1407],
		Leap: false
	},
	{
		solar: [1407, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1407],
		Leap: false
	},
	{
		solar: [1407, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1408],
		Leap: false
	},
	{
		solar: [1407, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1408],
		Leap: false
	},
	{
		solar: [1407, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1408],
		Leap: false
	},
	{
		solar: [1410, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1409],
		Leap: false
	},
	{
		solar: [1410, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1410],
		Leap: false
	},
	{
		solar: [1410, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1410],
		Leap: false
	},
	{
		solar: [1410, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1410],
		Leap: false
	},
	{
		solar: [1410, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1410],
		Leap: false
	},
	{
		solar: [1410, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1410],
		Leap: false
	},
	{
		solar: [1410, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1410],
		Leap: false
	},
	{
		solar: [1410, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1410],
		Leap: false
	},
	{
		solar: [1410, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1410],
		Leap: false
	},
	{
		solar: [1410, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1410],
		Leap: false
	},
	{
		solar: [1410, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1410],
		Leap: false
	},
	{
		solar: [1410, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1410],
		Leap: false
	},
	{
		solar: [1410, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1410],
		Leap: false
	},
	{
		solar: [1410, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1410],
		Leap: false
	},
	{
		solar: [1410, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1410],
		Leap: false
	},
	{
		solar: [1410, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1410],
		Leap: false
	},
	{
		solar: [1410, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1410],
		Leap: false
	},
	{
		solar: [1410, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1410],
		Leap: false
	},
	{
		solar: [1410, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1410],
		Leap: false
	},
	{
		solar: [1410, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1410],
		Leap: false
	},
	{
		solar: [1410, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1410],
		Leap: false
	},
	{
		solar: [1410, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1410],
		Leap: false
	},
	{
		solar: [1410, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1410],
		Leap: false
	},
	{
		solar: [1410, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1410],
		Leap: false
	},
	{
		solar: [1410, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1410],
		Leap: false
	},
	{
		solar: [1410, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1410],
		Leap: false
	},
	{
		solar: [1410, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1410],
		Leap: false
	},
	{
		solar: [1410, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1410],
		Leap: false
	},
	{
		solar: [1410, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1410],
		Leap: false
	},
	{
		solar: [1410, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1410],
		Leap: false
	},
	{
		solar: [1410, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1410],
		Leap: false
	},
	{
		solar: [1410, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1410],
		Leap: false
	},
	{
		solar: [1410, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1410],
		Leap: false
	},
	{
		solar: [1410, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1410],
		Leap: false
	},
	{
		solar: [1410, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1410],
		Leap: false
	},
	{
		solar: [1410, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1410],
		Leap: false
	},
	{
		solar: [1410, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1410],
		Leap: false
	},
	{
		solar: [1410, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1410],
		Leap: false
	},
	{
		solar: [1410, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1410],
		Leap: false
	},
	{
		solar: [1410, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1410],
		Leap: false
	},
	{
		solar: [1410, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1410],
		Leap: false
	},
	{
		solar: [1410, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1410],
		Leap: false
	},
	{
		solar: [1410, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1410],
		Leap: false
	},
	{
		solar: [1410, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1410],
		Leap: false
	},
	{
		solar: [1410, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1410],
		Leap: false
	},
	{
		solar: [1410, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1410],
		Leap: false
	},
	{
		solar: [1410, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1410],
		Leap: false
	},
	{
		solar: [1410, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1410],
		Leap: false
	},
	{
		solar: [1410, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1410],
		Leap: false
	},
	{
		solar: [1410, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1410],
		Leap: false
	},
	{
		solar: [1410, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1410],
		Leap: false
	},
	{
		solar: [1410, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1410],
		Leap: false
	},
	{
		solar: [1410, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1410],
		Leap: false
	},
	{
		solar: [1413, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1413],
		Leap: false
	},
	{
		solar: [1413, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1413],
		Leap: false
	},
	{
		solar: [1413, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1413],
		Leap: false
	},
	{
		solar: [1413, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1413],
		Leap: false
	},
	{
		solar: [1413, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1413],
		Leap: false
	},
	{
		solar: [1413, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1413],
		Leap: false
	},
	{
		solar: [1413, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1413],
		Leap: false
	},
	{
		solar: [1413, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1413],
		Leap: false
	},
	{
		solar: [1413, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1413],
		Leap: false
	},
	{
		solar: [1413, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1413],
		Leap: false
	},
	{
		solar: [1413, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1413],
		Leap: false
	},
	{
		solar: [1413, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1413],
		Leap: false
	},
	{
		solar: [1413, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1413],
		Leap: false
	},
	{
		solar: [1413, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1413],
		Leap: false
	},
	{
		solar: [1413, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1413],
		Leap: false
	},
	{
		solar: [1413, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1413],
		Leap: false
	},
	{
		solar: [1413, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1413],
		Leap: false
	},
	{
		solar: [1413, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1413],
		Leap: false
	},
	{
		solar: [1413, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1413],
		Leap: false
	},
	{
		solar: [1413, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1413],
		Leap: false
	},
	{
		solar: [1413, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1413],
		Leap: false
	},
	{
		solar: [1413, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1413],
		Leap: false
	},
	{
		solar: [1413, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1413],
		Leap: false
	},
	{
		solar: [1413, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1413],
		Leap: false
	},
	{
		solar: [1413, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1413],
		Leap: false
	},
	{
		solar: [1413, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1413],
		Leap: false
	},
	{
		solar: [1413, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1413],
		Leap: false
	},
	{
		solar: [1413, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1413],
		Leap: false
	},
	{
		solar: [1413, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1413],
		Leap: false
	},
	{
		solar: [1413, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1413],
		Leap: false
	},
	{
		solar: [1413, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1413],
		Leap: false
	},
	{
		solar: [1413, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1413],
		Leap: false
	},
	{
		solar: [1413, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1413],
		Leap: false
	},
	{
		solar: [1413, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1413],
		Leap: false
	},
	{
		solar: [1413, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1413],
		Leap: false
	},
	{
		solar: [1413, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1413],
		Leap: false
	},
	{
		solar: [1413, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1413],
		Leap: false
	},
	{
		solar: [1413, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1413],
		Leap: false
	},
	{
		solar: [1413, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1413],
		Leap: false
	},
	{
		solar: [1413, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1413],
		Leap: false
	},
	{
		solar: [1413, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1413],
		Leap: false
	},
	{
		solar: [1413, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1413],
		Leap: false
	},
	{
		solar: [1413, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1413],
		Leap: false
	},
	{
		solar: [1413, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1413],
		Leap: false
	},
	{
		solar: [1413, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1413],
		Leap: false
	},
	{
		solar: [1413, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1413],
		Leap: false
	},
	{
		solar: [1413, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1413],
		Leap: false
	},
	{
		solar: [1413, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1413],
		Leap: false
	},
	{
		solar: [1413, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1413],
		Leap: false
	},
	{
		solar: [1413, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1413],
		Leap: false
	},
	{
		solar: [1413, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1413],
		Leap: false
	},
	{
		solar: [1413, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1413],
		Leap: false
	},
	{
		solar: [1413, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1413],
		Leap: false
	},
	{
		solar: [1416, 0, 1],
		Dow: 6,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1415],
		Leap: true
	},
	{
		solar: [1416, 0, 2],
		Dow: 0,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1416],
		Leap: true
	},
	{
		solar: [1416, 0, 3],
		Dow: 1,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1416],
		Leap: true
	},
	{
		solar: [1416, 0, 4],
		Dow: 2,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1416],
		Leap: true
	},
	{
		solar: [1416, 0, 5],
		Dow: 3,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1416],
		Leap: true
	},
	{
		solar: [1416, 0, 30],
		Dow: 0,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1416],
		Leap: true
	},
	{
		solar: [1416, 0, 31],
		Dow: 1,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1416],
		Leap: true
	},
	{
		solar: [1416, 1, 1],
		Dow: 2,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1416],
		Leap: true
	},
	{
		solar: [1416, 1, 2],
		Dow: 3,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1416],
		Leap: true
	},
	{
		solar: [1416, 1, 30],
		Dow: 3,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1416],
		Leap: true
	},
	{
		solar: [1416, 1, 31],
		Dow: 4,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1416],
		Leap: true
	},
	{
		solar: [1416, 2, 1],
		Dow: 5,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1416],
		Leap: true
	},
	{
		solar: [1416, 2, 2],
		Dow: 6,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1416],
		Leap: true
	},
	{
		solar: [1416, 2, 30],
		Dow: 6,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1416],
		Leap: true
	},
	{
		solar: [1416, 2, 31],
		Dow: 0,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1416],
		Leap: true
	},
	{
		solar: [1416, 3, 1],
		Dow: 1,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1416],
		Leap: true
	},
	{
		solar: [1416, 3, 2],
		Dow: 2,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1416],
		Leap: true
	},
	{
		solar: [1416, 3, 30],
		Dow: 2,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1416],
		Leap: true
	},
	{
		solar: [1416, 3, 31],
		Dow: 3,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1416],
		Leap: true
	},
	{
		solar: [1416, 4, 1],
		Dow: 4,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1416],
		Leap: true
	},
	{
		solar: [1416, 4, 2],
		Dow: 5,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1416],
		Leap: true
	},
	{
		solar: [1416, 4, 30],
		Dow: 5,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1416],
		Leap: true
	},
	{
		solar: [1416, 4, 31],
		Dow: 6,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1416],
		Leap: true
	},
	{
		solar: [1416, 5, 1],
		Dow: 0,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1416],
		Leap: true
	},
	{
		solar: [1416, 5, 2],
		Dow: 1,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1416],
		Leap: true
	},
	{
		solar: [1416, 5, 30],
		Dow: 1,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1416],
		Leap: true
	},
	{
		solar: [1416, 5, 31],
		Dow: 2,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1416],
		Leap: true
	},
	{
		solar: [1416, 6, 1],
		Dow: 3,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1416],
		Leap: true
	},
	{
		solar: [1416, 6, 2],
		Dow: 4,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1416],
		Leap: true
	},
	{
		solar: [1416, 6, 29],
		Dow: 3,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1416],
		Leap: true
	},
	{
		solar: [1416, 6, 30],
		Dow: 4,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1416],
		Leap: true
	},
	{
		solar: [1416, 7, 1],
		Dow: 5,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1416],
		Leap: true
	},
	{
		solar: [1416, 7, 2],
		Dow: 6,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1416],
		Leap: true
	},
	{
		solar: [1416, 7, 29],
		Dow: 5,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1416],
		Leap: true
	},
	{
		solar: [1416, 7, 30],
		Dow: 6,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1416],
		Leap: true
	},
	{
		solar: [1416, 8, 1],
		Dow: 0,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1416],
		Leap: true
	},
	{
		solar: [1416, 8, 2],
		Dow: 1,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1416],
		Leap: true
	},
	{
		solar: [1416, 8, 29],
		Dow: 0,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1416],
		Leap: true
	},
	{
		solar: [1416, 8, 30],
		Dow: 1,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1416],
		Leap: true
	},
	{
		solar: [1416, 9, 1],
		Dow: 2,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1416],
		Leap: true
	},
	{
		solar: [1416, 9, 2],
		Dow: 3,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1416],
		Leap: true
	},
	{
		solar: [1416, 9, 29],
		Dow: 2,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1416],
		Leap: true
	},
	{
		solar: [1416, 9, 30],
		Dow: 3,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1416],
		Leap: true
	},
	{
		solar: [1416, 10, 1],
		Dow: 4,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1416],
		Leap: true
	},
	{
		solar: [1416, 10, 2],
		Dow: 5,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1416],
		Leap: true
	},
	{
		solar: [1416, 10, 29],
		Dow: 4,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1416],
		Leap: true
	},
	{
		solar: [1416, 10, 30],
		Dow: 5,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1416],
		Leap: true
	},
	{
		solar: [1416, 11, 1],
		Dow: 6,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1416],
		Leap: true
	},
	{
		solar: [1416, 11, 2],
		Dow: 0,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1416],
		Leap: true
	},
	{
		solar: [1416, 11, 26],
		Dow: 3,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1416],
		Leap: true
	},
	{
		solar: [1416, 11, 27],
		Dow: 4,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1416],
		Leap: true
	},
	{
		solar: [1416, 11, 28],
		Dow: 5,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1416],
		Leap: true
	},
	{
		solar: [1416, 11, 29],
		Dow: 6,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1416],
		Leap: true
	},
	{
		solar: [1416, 11, 30],
		Dow: 0,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1417],
		Leap: true
	},
	{
		solar: [1419, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1419],
		Leap: false
	},
	{
		solar: [1419, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1419],
		Leap: false
	},
	{
		solar: [1419, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1419],
		Leap: false
	},
	{
		solar: [1419, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1419],
		Leap: false
	},
	{
		solar: [1419, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1419],
		Leap: false
	},
	{
		solar: [1419, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1419],
		Leap: false
	},
	{
		solar: [1419, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1419],
		Leap: false
	},
	{
		solar: [1419, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1419],
		Leap: false
	},
	{
		solar: [1419, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1419],
		Leap: false
	},
	{
		solar: [1419, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1419],
		Leap: false
	},
	{
		solar: [1419, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1419],
		Leap: false
	},
	{
		solar: [1419, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1419],
		Leap: false
	},
	{
		solar: [1419, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1419],
		Leap: false
	},
	{
		solar: [1419, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1419],
		Leap: false
	},
	{
		solar: [1419, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1419],
		Leap: false
	},
	{
		solar: [1419, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1419],
		Leap: false
	},
	{
		solar: [1419, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1419],
		Leap: false
	},
	{
		solar: [1419, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1419],
		Leap: false
	},
	{
		solar: [1419, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1419],
		Leap: false
	},
	{
		solar: [1419, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1419],
		Leap: false
	},
	{
		solar: [1419, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1419],
		Leap: false
	},
	{
		solar: [1419, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1419],
		Leap: false
	},
	{
		solar: [1419, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1419],
		Leap: false
	},
	{
		solar: [1419, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1419],
		Leap: false
	},
	{
		solar: [1419, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1419],
		Leap: false
	},
	{
		solar: [1419, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1419],
		Leap: false
	},
	{
		solar: [1419, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1419],
		Leap: false
	},
	{
		solar: [1419, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1419],
		Leap: false
	},
	{
		solar: [1419, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1419],
		Leap: false
	},
	{
		solar: [1419, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1419],
		Leap: false
	},
	{
		solar: [1419, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1419],
		Leap: false
	},
	{
		solar: [1419, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1419],
		Leap: false
	},
	{
		solar: [1419, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1419],
		Leap: false
	},
	{
		solar: [1419, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1419],
		Leap: false
	},
	{
		solar: [1419, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1419],
		Leap: false
	},
	{
		solar: [1419, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1419],
		Leap: false
	},
	{
		solar: [1419, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1419],
		Leap: false
	},
	{
		solar: [1419, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1419],
		Leap: false
	},
	{
		solar: [1419, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1419],
		Leap: false
	},
	{
		solar: [1419, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1419],
		Leap: false
	},
	{
		solar: [1419, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1419],
		Leap: false
	},
	{
		solar: [1419, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1419],
		Leap: false
	},
	{
		solar: [1419, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1419],
		Leap: false
	},
	{
		solar: [1419, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1419],
		Leap: false
	},
	{
		solar: [1419, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1419],
		Leap: false
	},
	{
		solar: [1419, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1419],
		Leap: false
	},
	{
		solar: [1419, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1419],
		Leap: false
	},
	{
		solar: [1419, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1419],
		Leap: false
	},
	{
		solar: [1419, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1419],
		Leap: false
	},
	{
		solar: [1419, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1419],
		Leap: false
	},
	{
		solar: [1419, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1419],
		Leap: false
	},
	{
		solar: [1419, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1419],
		Leap: false
	},
	{
		solar: [1419, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1419],
		Leap: false
	},
	{
		solar: [1422, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1422],
		Leap: false
	},
	{
		solar: [1422, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1422],
		Leap: false
	},
	{
		solar: [1422, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1422],
		Leap: false
	},
	{
		solar: [1422, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1422],
		Leap: false
	},
	{
		solar: [1422, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1422],
		Leap: false
	},
	{
		solar: [1422, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1422],
		Leap: false
	},
	{
		solar: [1422, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1422],
		Leap: false
	},
	{
		solar: [1422, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1422],
		Leap: false
	},
	{
		solar: [1422, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1422],
		Leap: false
	},
	{
		solar: [1422, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1422],
		Leap: false
	},
	{
		solar: [1422, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1422],
		Leap: false
	},
	{
		solar: [1422, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1422],
		Leap: false
	},
	{
		solar: [1422, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1422],
		Leap: false
	},
	{
		solar: [1422, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1422],
		Leap: false
	},
	{
		solar: [1422, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1422],
		Leap: false
	},
	{
		solar: [1422, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1422],
		Leap: false
	},
	{
		solar: [1422, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1422],
		Leap: false
	},
	{
		solar: [1422, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1422],
		Leap: false
	},
	{
		solar: [1422, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1422],
		Leap: false
	},
	{
		solar: [1422, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1422],
		Leap: false
	},
	{
		solar: [1422, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1422],
		Leap: false
	},
	{
		solar: [1422, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1422],
		Leap: false
	},
	{
		solar: [1422, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1422],
		Leap: false
	},
	{
		solar: [1422, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1422],
		Leap: false
	},
	{
		solar: [1422, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1422],
		Leap: false
	},
	{
		solar: [1422, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1422],
		Leap: false
	},
	{
		solar: [1422, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1422],
		Leap: false
	},
	{
		solar: [1422, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1422],
		Leap: false
	},
	{
		solar: [1422, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1422],
		Leap: false
	},
	{
		solar: [1422, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1422],
		Leap: false
	},
	{
		solar: [1422, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1422],
		Leap: false
	},
	{
		solar: [1422, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1422],
		Leap: false
	},
	{
		solar: [1422, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1422],
		Leap: false
	},
	{
		solar: [1422, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1422],
		Leap: false
	},
	{
		solar: [1422, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1422],
		Leap: false
	},
	{
		solar: [1422, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1422],
		Leap: false
	},
	{
		solar: [1422, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1422],
		Leap: false
	},
	{
		solar: [1422, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1422],
		Leap: false
	},
	{
		solar: [1422, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1422],
		Leap: false
	},
	{
		solar: [1422, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1422],
		Leap: false
	},
	{
		solar: [1422, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1422],
		Leap: false
	},
	{
		solar: [1422, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1422],
		Leap: false
	},
	{
		solar: [1422, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1422],
		Leap: false
	},
	{
		solar: [1422, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1422],
		Leap: false
	},
	{
		solar: [1422, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1422],
		Leap: false
	},
	{
		solar: [1422, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1422],
		Leap: false
	},
	{
		solar: [1422, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1422],
		Leap: false
	},
	{
		solar: [1422, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1422],
		Leap: false
	},
	{
		solar: [1422, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1422],
		Leap: false
	},
	{
		solar: [1422, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1422],
		Leap: false
	},
	{
		solar: [1422, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1422],
		Leap: false
	},
	{
		solar: [1422, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1422],
		Leap: false
	},
	{
		solar: [1422, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1423],
		Leap: false
	},
	{
		solar: [1425, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1424],
		Leap: false
	},
	{
		solar: [1425, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1424],
		Leap: false
	},
	{
		solar: [1425, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1424],
		Leap: false
	},
	{
		solar: [1425, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1425],
		Leap: false
	},
	{
		solar: [1425, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1425],
		Leap: false
	},
	{
		solar: [1425, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1425],
		Leap: false
	},
	{
		solar: [1425, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1425],
		Leap: false
	},
	{
		solar: [1425, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1425],
		Leap: false
	},
	{
		solar: [1425, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1425],
		Leap: false
	},
	{
		solar: [1425, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1425],
		Leap: false
	},
	{
		solar: [1425, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1425],
		Leap: false
	},
	{
		solar: [1425, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1425],
		Leap: false
	},
	{
		solar: [1425, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1425],
		Leap: false
	},
	{
		solar: [1425, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1425],
		Leap: false
	},
	{
		solar: [1425, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1425],
		Leap: false
	},
	{
		solar: [1425, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1425],
		Leap: false
	},
	{
		solar: [1425, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1425],
		Leap: false
	},
	{
		solar: [1425, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1425],
		Leap: false
	},
	{
		solar: [1425, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1425],
		Leap: false
	},
	{
		solar: [1425, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1425],
		Leap: false
	},
	{
		solar: [1425, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1425],
		Leap: false
	},
	{
		solar: [1425, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1425],
		Leap: false
	},
	{
		solar: [1425, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1425],
		Leap: false
	},
	{
		solar: [1425, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1425],
		Leap: false
	},
	{
		solar: [1425, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1425],
		Leap: false
	},
	{
		solar: [1425, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1425],
		Leap: false
	},
	{
		solar: [1425, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1425],
		Leap: false
	},
	{
		solar: [1425, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1425],
		Leap: false
	},
	{
		solar: [1425, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1425],
		Leap: false
	},
	{
		solar: [1425, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1425],
		Leap: false
	},
	{
		solar: [1425, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1425],
		Leap: false
	},
	{
		solar: [1425, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1425],
		Leap: false
	},
	{
		solar: [1425, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1425],
		Leap: false
	},
	{
		solar: [1425, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1425],
		Leap: false
	},
	{
		solar: [1425, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1425],
		Leap: false
	},
	{
		solar: [1425, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1425],
		Leap: false
	},
	{
		solar: [1425, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1425],
		Leap: false
	},
	{
		solar: [1425, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1425],
		Leap: false
	},
	{
		solar: [1425, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1425],
		Leap: false
	},
	{
		solar: [1425, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1425],
		Leap: false
	},
	{
		solar: [1425, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1425],
		Leap: false
	},
	{
		solar: [1425, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1425],
		Leap: false
	},
	{
		solar: [1425, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1425],
		Leap: false
	},
	{
		solar: [1425, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1425],
		Leap: false
	},
	{
		solar: [1425, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1425],
		Leap: false
	},
	{
		solar: [1425, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1425],
		Leap: false
	},
	{
		solar: [1425, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1425],
		Leap: false
	},
	{
		solar: [1425, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1425],
		Leap: false
	},
	{
		solar: [1425, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1425],
		Leap: false
	},
	{
		solar: [1425, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1425],
		Leap: false
	},
	{
		solar: [1425, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1425],
		Leap: false
	},
	{
		solar: [1425, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1425],
		Leap: false
	},
	{
		solar: [1425, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1425],
		Leap: false
	},
	{
		solar: [1428, 0, 1],
		Dow: 0,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1428],
		Leap: true
	},
	{
		solar: [1428, 0, 2],
		Dow: 1,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1428],
		Leap: true
	},
	{
		solar: [1428, 0, 3],
		Dow: 2,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1428],
		Leap: true
	},
	{
		solar: [1428, 0, 4],
		Dow: 3,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1428],
		Leap: true
	},
	{
		solar: [1428, 0, 5],
		Dow: 4,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1428],
		Leap: true
	},
	{
		solar: [1428, 0, 30],
		Dow: 1,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1428],
		Leap: true
	},
	{
		solar: [1428, 0, 31],
		Dow: 2,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1428],
		Leap: true
	},
	{
		solar: [1428, 1, 1],
		Dow: 3,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1428],
		Leap: true
	},
	{
		solar: [1428, 1, 2],
		Dow: 4,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1428],
		Leap: true
	},
	{
		solar: [1428, 1, 30],
		Dow: 4,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1428],
		Leap: true
	},
	{
		solar: [1428, 1, 31],
		Dow: 5,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1428],
		Leap: true
	},
	{
		solar: [1428, 2, 1],
		Dow: 6,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1428],
		Leap: true
	},
	{
		solar: [1428, 2, 2],
		Dow: 0,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1428],
		Leap: true
	},
	{
		solar: [1428, 2, 30],
		Dow: 0,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1428],
		Leap: true
	},
	{
		solar: [1428, 2, 31],
		Dow: 1,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1428],
		Leap: true
	},
	{
		solar: [1428, 3, 1],
		Dow: 2,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1428],
		Leap: true
	},
	{
		solar: [1428, 3, 2],
		Dow: 3,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1428],
		Leap: true
	},
	{
		solar: [1428, 3, 30],
		Dow: 3,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1428],
		Leap: true
	},
	{
		solar: [1428, 3, 31],
		Dow: 4,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1428],
		Leap: true
	},
	{
		solar: [1428, 4, 1],
		Dow: 5,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1428],
		Leap: true
	},
	{
		solar: [1428, 4, 2],
		Dow: 6,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1428],
		Leap: true
	},
	{
		solar: [1428, 4, 30],
		Dow: 6,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1428],
		Leap: true
	},
	{
		solar: [1428, 4, 31],
		Dow: 0,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1428],
		Leap: true
	},
	{
		solar: [1428, 5, 1],
		Dow: 1,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1428],
		Leap: true
	},
	{
		solar: [1428, 5, 2],
		Dow: 2,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1428],
		Leap: true
	},
	{
		solar: [1428, 5, 30],
		Dow: 2,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1428],
		Leap: true
	},
	{
		solar: [1428, 5, 31],
		Dow: 3,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1428],
		Leap: true
	},
	{
		solar: [1428, 6, 1],
		Dow: 4,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1428],
		Leap: true
	},
	{
		solar: [1428, 6, 2],
		Dow: 5,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1428],
		Leap: true
	},
	{
		solar: [1428, 6, 29],
		Dow: 4,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1428],
		Leap: true
	},
	{
		solar: [1428, 6, 30],
		Dow: 5,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1428],
		Leap: true
	},
	{
		solar: [1428, 7, 1],
		Dow: 6,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1428],
		Leap: true
	},
	{
		solar: [1428, 7, 2],
		Dow: 0,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1428],
		Leap: true
	},
	{
		solar: [1428, 7, 29],
		Dow: 6,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1428],
		Leap: true
	},
	{
		solar: [1428, 7, 30],
		Dow: 0,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1428],
		Leap: true
	},
	{
		solar: [1428, 8, 1],
		Dow: 1,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1428],
		Leap: true
	},
	{
		solar: [1428, 8, 2],
		Dow: 2,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1428],
		Leap: true
	},
	{
		solar: [1428, 8, 29],
		Dow: 1,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1428],
		Leap: true
	},
	{
		solar: [1428, 8, 30],
		Dow: 2,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1428],
		Leap: true
	},
	{
		solar: [1428, 9, 1],
		Dow: 3,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1428],
		Leap: true
	},
	{
		solar: [1428, 9, 2],
		Dow: 4,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1428],
		Leap: true
	},
	{
		solar: [1428, 9, 29],
		Dow: 3,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1428],
		Leap: true
	},
	{
		solar: [1428, 9, 30],
		Dow: 4,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1428],
		Leap: true
	},
	{
		solar: [1428, 10, 1],
		Dow: 5,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1428],
		Leap: true
	},
	{
		solar: [1428, 10, 2],
		Dow: 6,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1428],
		Leap: true
	},
	{
		solar: [1428, 10, 29],
		Dow: 5,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1428],
		Leap: true
	},
	{
		solar: [1428, 10, 30],
		Dow: 6,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1428],
		Leap: true
	},
	{
		solar: [1428, 11, 1],
		Dow: 0,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1428],
		Leap: true
	},
	{
		solar: [1428, 11, 2],
		Dow: 1,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1428],
		Leap: true
	},
	{
		solar: [1428, 11, 26],
		Dow: 4,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1428],
		Leap: true
	},
	{
		solar: [1428, 11, 27],
		Dow: 5,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1428],
		Leap: true
	},
	{
		solar: [1428, 11, 28],
		Dow: 6,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1428],
		Leap: true
	},
	{
		solar: [1428, 11, 29],
		Dow: 0,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1429],
		Leap: true
	},
	{
		solar: [1428, 11, 30],
		Dow: 1,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1429],
		Leap: true
	},
	{
		solar: [1431, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1430],
		Leap: false
	},
	{
		solar: [1431, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1430],
		Leap: false
	},
	{
		solar: [1431, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1430],
		Leap: false
	},
	{
		solar: [1431, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1431],
		Leap: false
	},
	{
		solar: [1431, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1431],
		Leap: false
	},
	{
		solar: [1431, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1431],
		Leap: false
	},
	{
		solar: [1431, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1431],
		Leap: false
	},
	{
		solar: [1431, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1431],
		Leap: false
	},
	{
		solar: [1431, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1431],
		Leap: false
	},
	{
		solar: [1431, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1431],
		Leap: false
	},
	{
		solar: [1431, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1431],
		Leap: false
	},
	{
		solar: [1431, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1431],
		Leap: false
	},
	{
		solar: [1431, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1431],
		Leap: false
	},
	{
		solar: [1431, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1431],
		Leap: false
	},
	{
		solar: [1431, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1431],
		Leap: false
	},
	{
		solar: [1431, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1431],
		Leap: false
	},
	{
		solar: [1431, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1431],
		Leap: false
	},
	{
		solar: [1431, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1431],
		Leap: false
	},
	{
		solar: [1431, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1431],
		Leap: false
	},
	{
		solar: [1431, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1431],
		Leap: false
	},
	{
		solar: [1431, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1431],
		Leap: false
	},
	{
		solar: [1431, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1431],
		Leap: false
	},
	{
		solar: [1431, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1431],
		Leap: false
	},
	{
		solar: [1431, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1431],
		Leap: false
	},
	{
		solar: [1431, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1431],
		Leap: false
	},
	{
		solar: [1431, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1431],
		Leap: false
	},
	{
		solar: [1431, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1431],
		Leap: false
	},
	{
		solar: [1431, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1431],
		Leap: false
	},
	{
		solar: [1431, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1431],
		Leap: false
	},
	{
		solar: [1431, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1431],
		Leap: false
	},
	{
		solar: [1431, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1431],
		Leap: false
	},
	{
		solar: [1431, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1431],
		Leap: false
	},
	{
		solar: [1431, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1431],
		Leap: false
	},
	{
		solar: [1431, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1431],
		Leap: false
	},
	{
		solar: [1431, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1431],
		Leap: false
	},
	{
		solar: [1431, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1431],
		Leap: false
	},
	{
		solar: [1431, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1431],
		Leap: false
	},
	{
		solar: [1431, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1431],
		Leap: false
	},
	{
		solar: [1431, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1431],
		Leap: false
	},
	{
		solar: [1431, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1431],
		Leap: false
	},
	{
		solar: [1431, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1431],
		Leap: false
	},
	{
		solar: [1431, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1431],
		Leap: false
	},
	{
		solar: [1431, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1431],
		Leap: false
	},
	{
		solar: [1431, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1431],
		Leap: false
	},
	{
		solar: [1431, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1431],
		Leap: false
	},
	{
		solar: [1431, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1431],
		Leap: false
	},
	{
		solar: [1431, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1431],
		Leap: false
	},
	{
		solar: [1431, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1431],
		Leap: false
	},
	{
		solar: [1431, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1431],
		Leap: false
	},
	{
		solar: [1431, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1431],
		Leap: false
	},
	{
		solar: [1431, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1431],
		Leap: false
	},
	{
		solar: [1431, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1431],
		Leap: false
	},
	{
		solar: [1431, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1431],
		Leap: false
	},
	{
		solar: [1434, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1434],
		Leap: false
	},
	{
		solar: [1434, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1434],
		Leap: false
	},
	{
		solar: [1434, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1434],
		Leap: false
	},
	{
		solar: [1434, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1434],
		Leap: false
	},
	{
		solar: [1434, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1434],
		Leap: false
	},
	{
		solar: [1434, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1434],
		Leap: false
	},
	{
		solar: [1434, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1434],
		Leap: false
	},
	{
		solar: [1434, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1434],
		Leap: false
	},
	{
		solar: [1434, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1434],
		Leap: false
	},
	{
		solar: [1434, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1434],
		Leap: false
	},
	{
		solar: [1434, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1434],
		Leap: false
	},
	{
		solar: [1434, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1434],
		Leap: false
	},
	{
		solar: [1434, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1434],
		Leap: false
	},
	{
		solar: [1434, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1434],
		Leap: false
	},
	{
		solar: [1434, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1434],
		Leap: false
	},
	{
		solar: [1434, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1434],
		Leap: false
	},
	{
		solar: [1434, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1434],
		Leap: false
	},
	{
		solar: [1434, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1434],
		Leap: false
	},
	{
		solar: [1434, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1434],
		Leap: false
	},
	{
		solar: [1434, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1434],
		Leap: false
	},
	{
		solar: [1434, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1434],
		Leap: false
	},
	{
		solar: [1434, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1434],
		Leap: false
	},
	{
		solar: [1434, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1434],
		Leap: false
	},
	{
		solar: [1434, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1434],
		Leap: false
	},
	{
		solar: [1434, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1434],
		Leap: false
	},
	{
		solar: [1434, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1434],
		Leap: false
	},
	{
		solar: [1434, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1434],
		Leap: false
	},
	{
		solar: [1434, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1434],
		Leap: false
	},
	{
		solar: [1434, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1434],
		Leap: false
	},
	{
		solar: [1434, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1434],
		Leap: false
	},
	{
		solar: [1434, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1434],
		Leap: false
	},
	{
		solar: [1434, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1434],
		Leap: false
	},
	{
		solar: [1434, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1434],
		Leap: false
	},
	{
		solar: [1434, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1434],
		Leap: false
	},
	{
		solar: [1434, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1434],
		Leap: false
	},
	{
		solar: [1434, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1434],
		Leap: false
	},
	{
		solar: [1434, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1434],
		Leap: false
	},
	{
		solar: [1434, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1434],
		Leap: false
	},
	{
		solar: [1434, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1434],
		Leap: false
	},
	{
		solar: [1434, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1434],
		Leap: false
	},
	{
		solar: [1434, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1434],
		Leap: false
	},
	{
		solar: [1434, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1434],
		Leap: false
	},
	{
		solar: [1434, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1434],
		Leap: false
	},
	{
		solar: [1434, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1434],
		Leap: false
	},
	{
		solar: [1434, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1434],
		Leap: false
	},
	{
		solar: [1434, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1434],
		Leap: false
	},
	{
		solar: [1434, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1434],
		Leap: false
	},
	{
		solar: [1434, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1434],
		Leap: false
	},
	{
		solar: [1434, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1434],
		Leap: false
	},
	{
		solar: [1434, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1434],
		Leap: false
	},
	{
		solar: [1434, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1434],
		Leap: false
	},
	{
		solar: [1434, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1435],
		Leap: false
	},
	{
		solar: [1434, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1435],
		Leap: false
	},
	{
		solar: [1437, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1436],
		Leap: false
	},
	{
		solar: [1437, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1436],
		Leap: false
	},
	{
		solar: [1437, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1437],
		Leap: false
	},
	{
		solar: [1437, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1437],
		Leap: false
	},
	{
		solar: [1437, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1437],
		Leap: false
	},
	{
		solar: [1437, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1437],
		Leap: false
	},
	{
		solar: [1437, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1437],
		Leap: false
	},
	{
		solar: [1437, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1437],
		Leap: false
	},
	{
		solar: [1437, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1437],
		Leap: false
	},
	{
		solar: [1437, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1437],
		Leap: false
	},
	{
		solar: [1437, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1437],
		Leap: false
	},
	{
		solar: [1437, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1437],
		Leap: false
	},
	{
		solar: [1437, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1437],
		Leap: false
	},
	{
		solar: [1437, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1437],
		Leap: false
	},
	{
		solar: [1437, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1437],
		Leap: false
	},
	{
		solar: [1437, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1437],
		Leap: false
	},
	{
		solar: [1437, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1437],
		Leap: false
	},
	{
		solar: [1437, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1437],
		Leap: false
	},
	{
		solar: [1437, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1437],
		Leap: false
	},
	{
		solar: [1437, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1437],
		Leap: false
	},
	{
		solar: [1437, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1437],
		Leap: false
	},
	{
		solar: [1437, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1437],
		Leap: false
	},
	{
		solar: [1437, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1437],
		Leap: false
	},
	{
		solar: [1437, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1437],
		Leap: false
	},
	{
		solar: [1437, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1437],
		Leap: false
	},
	{
		solar: [1437, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1437],
		Leap: false
	},
	{
		solar: [1437, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1437],
		Leap: false
	},
	{
		solar: [1437, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1437],
		Leap: false
	},
	{
		solar: [1437, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1437],
		Leap: false
	},
	{
		solar: [1437, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1437],
		Leap: false
	},
	{
		solar: [1437, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1437],
		Leap: false
	},
	{
		solar: [1437, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1437],
		Leap: false
	},
	{
		solar: [1437, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1437],
		Leap: false
	},
	{
		solar: [1437, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1437],
		Leap: false
	},
	{
		solar: [1437, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1437],
		Leap: false
	},
	{
		solar: [1437, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1437],
		Leap: false
	},
	{
		solar: [1437, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1437],
		Leap: false
	},
	{
		solar: [1437, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1437],
		Leap: false
	},
	{
		solar: [1437, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1437],
		Leap: false
	},
	{
		solar: [1437, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1437],
		Leap: false
	},
	{
		solar: [1437, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1437],
		Leap: false
	},
	{
		solar: [1437, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1437],
		Leap: false
	},
	{
		solar: [1437, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1437],
		Leap: false
	},
	{
		solar: [1437, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1437],
		Leap: false
	},
	{
		solar: [1437, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1437],
		Leap: false
	},
	{
		solar: [1437, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1437],
		Leap: false
	},
	{
		solar: [1437, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1437],
		Leap: false
	},
	{
		solar: [1437, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1437],
		Leap: false
	},
	{
		solar: [1437, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1437],
		Leap: false
	},
	{
		solar: [1437, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1437],
		Leap: false
	},
	{
		solar: [1437, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1437],
		Leap: false
	},
	{
		solar: [1437, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1437],
		Leap: false
	},
	{
		solar: [1437, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1437],
		Leap: false
	},
	{
		solar: [1440, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1440],
		Leap: false
	},
	{
		solar: [1440, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1440],
		Leap: false
	},
	{
		solar: [1440, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1440],
		Leap: false
	},
	{
		solar: [1440, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1440],
		Leap: false
	},
	{
		solar: [1440, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1440],
		Leap: false
	},
	{
		solar: [1440, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1440],
		Leap: false
	},
	{
		solar: [1440, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1440],
		Leap: false
	},
	{
		solar: [1440, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1440],
		Leap: false
	},
	{
		solar: [1440, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1440],
		Leap: false
	},
	{
		solar: [1440, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1440],
		Leap: false
	},
	{
		solar: [1440, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1440],
		Leap: false
	},
	{
		solar: [1440, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1440],
		Leap: false
	},
	{
		solar: [1440, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1440],
		Leap: false
	},
	{
		solar: [1440, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1440],
		Leap: false
	},
	{
		solar: [1440, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1440],
		Leap: false
	},
	{
		solar: [1440, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1440],
		Leap: false
	},
	{
		solar: [1440, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1440],
		Leap: false
	},
	{
		solar: [1440, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1440],
		Leap: false
	},
	{
		solar: [1440, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1440],
		Leap: false
	},
	{
		solar: [1440, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1440],
		Leap: false
	},
	{
		solar: [1440, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1440],
		Leap: false
	},
	{
		solar: [1440, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1440],
		Leap: false
	},
	{
		solar: [1440, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1440],
		Leap: false
	},
	{
		solar: [1440, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1440],
		Leap: false
	},
	{
		solar: [1440, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1440],
		Leap: false
	},
	{
		solar: [1440, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1440],
		Leap: false
	},
	{
		solar: [1440, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1440],
		Leap: false
	},
	{
		solar: [1440, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1440],
		Leap: false
	},
	{
		solar: [1440, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1440],
		Leap: false
	},
	{
		solar: [1440, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1440],
		Leap: false
	},
	{
		solar: [1440, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1440],
		Leap: false
	},
	{
		solar: [1440, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1440],
		Leap: false
	},
	{
		solar: [1440, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1440],
		Leap: false
	},
	{
		solar: [1440, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1440],
		Leap: false
	},
	{
		solar: [1440, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1440],
		Leap: false
	},
	{
		solar: [1440, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1440],
		Leap: false
	},
	{
		solar: [1440, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1440],
		Leap: false
	},
	{
		solar: [1440, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1440],
		Leap: false
	},
	{
		solar: [1440, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1440],
		Leap: false
	},
	{
		solar: [1440, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1440],
		Leap: false
	},
	{
		solar: [1440, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1440],
		Leap: false
	},
	{
		solar: [1440, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1440],
		Leap: false
	},
	{
		solar: [1440, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1440],
		Leap: false
	},
	{
		solar: [1440, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1440],
		Leap: false
	},
	{
		solar: [1440, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1440],
		Leap: false
	},
	{
		solar: [1440, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1440],
		Leap: false
	},
	{
		solar: [1440, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1440],
		Leap: false
	},
	{
		solar: [1440, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1440],
		Leap: false
	},
	{
		solar: [1440, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1440],
		Leap: false
	},
	{
		solar: [1440, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1440],
		Leap: false
	},
	{
		solar: [1440, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1440],
		Leap: false
	},
	{
		solar: [1440, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1441],
		Leap: false
	},
	{
		solar: [1440, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1441],
		Leap: false
	},
	{
		solar: [1443, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1442],
		Leap: false
	},
	{
		solar: [1443, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1442],
		Leap: false
	},
	{
		solar: [1443, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1443],
		Leap: false
	},
	{
		solar: [1443, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1443],
		Leap: false
	},
	{
		solar: [1443, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1443],
		Leap: false
	},
	{
		solar: [1443, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1443],
		Leap: false
	},
	{
		solar: [1443, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1443],
		Leap: false
	},
	{
		solar: [1443, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1443],
		Leap: false
	},
	{
		solar: [1443, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1443],
		Leap: false
	},
	{
		solar: [1443, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1443],
		Leap: false
	},
	{
		solar: [1443, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1443],
		Leap: false
	},
	{
		solar: [1443, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1443],
		Leap: false
	},
	{
		solar: [1443, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1443],
		Leap: false
	},
	{
		solar: [1443, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1443],
		Leap: false
	},
	{
		solar: [1443, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1443],
		Leap: false
	},
	{
		solar: [1443, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1443],
		Leap: false
	},
	{
		solar: [1443, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1443],
		Leap: false
	},
	{
		solar: [1443, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1443],
		Leap: false
	},
	{
		solar: [1443, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1443],
		Leap: false
	},
	{
		solar: [1443, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1443],
		Leap: false
	},
	{
		solar: [1443, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1443],
		Leap: false
	},
	{
		solar: [1443, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1443],
		Leap: false
	},
	{
		solar: [1443, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1443],
		Leap: false
	},
	{
		solar: [1443, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1443],
		Leap: false
	},
	{
		solar: [1443, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1443],
		Leap: false
	},
	{
		solar: [1443, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1443],
		Leap: false
	},
	{
		solar: [1443, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1443],
		Leap: false
	},
	{
		solar: [1443, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1443],
		Leap: false
	},
	{
		solar: [1443, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1443],
		Leap: false
	},
	{
		solar: [1443, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1443],
		Leap: false
	},
	{
		solar: [1443, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1443],
		Leap: false
	},
	{
		solar: [1443, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1443],
		Leap: false
	},
	{
		solar: [1443, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1443],
		Leap: false
	},
	{
		solar: [1443, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1443],
		Leap: false
	},
	{
		solar: [1443, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1443],
		Leap: false
	},
	{
		solar: [1443, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1443],
		Leap: false
	},
	{
		solar: [1443, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1443],
		Leap: false
	},
	{
		solar: [1443, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1443],
		Leap: false
	},
	{
		solar: [1443, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1443],
		Leap: false
	},
	{
		solar: [1443, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1443],
		Leap: false
	},
	{
		solar: [1443, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1443],
		Leap: false
	},
	{
		solar: [1443, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1443],
		Leap: false
	},
	{
		solar: [1443, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1443],
		Leap: false
	},
	{
		solar: [1443, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1443],
		Leap: false
	},
	{
		solar: [1443, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1443],
		Leap: false
	},
	{
		solar: [1443, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1443],
		Leap: false
	},
	{
		solar: [1443, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1443],
		Leap: false
	},
	{
		solar: [1443, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1443],
		Leap: false
	},
	{
		solar: [1443, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1443],
		Leap: false
	},
	{
		solar: [1443, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1443],
		Leap: false
	},
	{
		solar: [1443, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1443],
		Leap: false
	},
	{
		solar: [1443, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1443],
		Leap: false
	},
	{
		solar: [1443, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1443],
		Leap: false
	},
	{
		solar: [1446, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1446],
		Leap: false
	},
	{
		solar: [1446, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1446],
		Leap: false
	},
	{
		solar: [1446, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1446],
		Leap: false
	},
	{
		solar: [1446, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1446],
		Leap: false
	},
	{
		solar: [1446, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1446],
		Leap: false
	},
	{
		solar: [1446, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1446],
		Leap: false
	},
	{
		solar: [1446, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1446],
		Leap: false
	},
	{
		solar: [1446, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1446],
		Leap: false
	},
	{
		solar: [1446, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1446],
		Leap: false
	},
	{
		solar: [1446, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1446],
		Leap: false
	},
	{
		solar: [1446, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1446],
		Leap: false
	},
	{
		solar: [1446, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1446],
		Leap: false
	},
	{
		solar: [1446, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1446],
		Leap: false
	},
	{
		solar: [1446, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1446],
		Leap: false
	},
	{
		solar: [1446, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1446],
		Leap: false
	},
	{
		solar: [1446, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1446],
		Leap: false
	},
	{
		solar: [1446, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1446],
		Leap: false
	},
	{
		solar: [1446, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1446],
		Leap: false
	},
	{
		solar: [1446, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1446],
		Leap: false
	},
	{
		solar: [1446, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1446],
		Leap: false
	},
	{
		solar: [1446, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1446],
		Leap: false
	},
	{
		solar: [1446, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1446],
		Leap: false
	},
	{
		solar: [1446, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1446],
		Leap: false
	},
	{
		solar: [1446, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1446],
		Leap: false
	},
	{
		solar: [1446, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1446],
		Leap: false
	},
	{
		solar: [1446, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1446],
		Leap: false
	},
	{
		solar: [1446, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1446],
		Leap: false
	},
	{
		solar: [1446, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1446],
		Leap: false
	},
	{
		solar: [1446, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1446],
		Leap: false
	},
	{
		solar: [1446, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1446],
		Leap: false
	},
	{
		solar: [1446, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1446],
		Leap: false
	},
	{
		solar: [1446, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1446],
		Leap: false
	},
	{
		solar: [1446, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1446],
		Leap: false
	},
	{
		solar: [1446, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1446],
		Leap: false
	},
	{
		solar: [1446, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1446],
		Leap: false
	},
	{
		solar: [1446, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1446],
		Leap: false
	},
	{
		solar: [1446, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1446],
		Leap: false
	},
	{
		solar: [1446, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1446],
		Leap: false
	},
	{
		solar: [1446, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1446],
		Leap: false
	},
	{
		solar: [1446, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1446],
		Leap: false
	},
	{
		solar: [1446, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1446],
		Leap: false
	},
	{
		solar: [1446, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1446],
		Leap: false
	},
	{
		solar: [1446, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1446],
		Leap: false
	},
	{
		solar: [1446, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1446],
		Leap: false
	},
	{
		solar: [1446, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1446],
		Leap: false
	},
	{
		solar: [1446, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1446],
		Leap: false
	},
	{
		solar: [1446, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1446],
		Leap: false
	},
	{
		solar: [1446, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1446],
		Leap: false
	},
	{
		solar: [1446, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1446],
		Leap: false
	},
	{
		solar: [1446, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1446],
		Leap: false
	},
	{
		solar: [1446, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1447],
		Leap: false
	},
	{
		solar: [1446, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1447],
		Leap: false
	},
	{
		solar: [1446, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1447],
		Leap: false
	},
	{
		solar: [1449, 0, 1],
		Dow: 5,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1448],
		Leap: true
	},
	{
		solar: [1449, 0, 2],
		Dow: 6,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1448],
		Leap: true
	},
	{
		solar: [1449, 0, 3],
		Dow: 0,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1449],
		Leap: true
	},
	{
		solar: [1449, 0, 4],
		Dow: 1,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1449],
		Leap: true
	},
	{
		solar: [1449, 0, 5],
		Dow: 2,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1449],
		Leap: true
	},
	{
		solar: [1449, 0, 30],
		Dow: 6,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1449],
		Leap: true
	},
	{
		solar: [1449, 0, 31],
		Dow: 0,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1449],
		Leap: true
	},
	{
		solar: [1449, 1, 1],
		Dow: 1,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1449],
		Leap: true
	},
	{
		solar: [1449, 1, 2],
		Dow: 2,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1449],
		Leap: true
	},
	{
		solar: [1449, 1, 30],
		Dow: 2,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1449],
		Leap: true
	},
	{
		solar: [1449, 1, 31],
		Dow: 3,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1449],
		Leap: true
	},
	{
		solar: [1449, 2, 1],
		Dow: 4,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1449],
		Leap: true
	},
	{
		solar: [1449, 2, 2],
		Dow: 5,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1449],
		Leap: true
	},
	{
		solar: [1449, 2, 30],
		Dow: 5,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1449],
		Leap: true
	},
	{
		solar: [1449, 2, 31],
		Dow: 6,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1449],
		Leap: true
	},
	{
		solar: [1449, 3, 1],
		Dow: 0,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1449],
		Leap: true
	},
	{
		solar: [1449, 3, 2],
		Dow: 1,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1449],
		Leap: true
	},
	{
		solar: [1449, 3, 30],
		Dow: 1,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1449],
		Leap: true
	},
	{
		solar: [1449, 3, 31],
		Dow: 2,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1449],
		Leap: true
	},
	{
		solar: [1449, 4, 1],
		Dow: 3,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1449],
		Leap: true
	},
	{
		solar: [1449, 4, 2],
		Dow: 4,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1449],
		Leap: true
	},
	{
		solar: [1449, 4, 30],
		Dow: 4,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1449],
		Leap: true
	},
	{
		solar: [1449, 4, 31],
		Dow: 5,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1449],
		Leap: true
	},
	{
		solar: [1449, 5, 1],
		Dow: 6,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1449],
		Leap: true
	},
	{
		solar: [1449, 5, 2],
		Dow: 0,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1449],
		Leap: true
	},
	{
		solar: [1449, 5, 30],
		Dow: 0,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1449],
		Leap: true
	},
	{
		solar: [1449, 5, 31],
		Dow: 1,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1449],
		Leap: true
	},
	{
		solar: [1449, 6, 1],
		Dow: 2,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1449],
		Leap: true
	},
	{
		solar: [1449, 6, 2],
		Dow: 3,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1449],
		Leap: true
	},
	{
		solar: [1449, 6, 29],
		Dow: 2,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1449],
		Leap: true
	},
	{
		solar: [1449, 6, 30],
		Dow: 3,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1449],
		Leap: true
	},
	{
		solar: [1449, 7, 1],
		Dow: 4,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1449],
		Leap: true
	},
	{
		solar: [1449, 7, 2],
		Dow: 5,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1449],
		Leap: true
	},
	{
		solar: [1449, 7, 29],
		Dow: 4,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1449],
		Leap: true
	},
	{
		solar: [1449, 7, 30],
		Dow: 5,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1449],
		Leap: true
	},
	{
		solar: [1449, 8, 1],
		Dow: 6,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1449],
		Leap: true
	},
	{
		solar: [1449, 8, 2],
		Dow: 0,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1449],
		Leap: true
	},
	{
		solar: [1449, 8, 29],
		Dow: 6,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1449],
		Leap: true
	},
	{
		solar: [1449, 8, 30],
		Dow: 0,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1449],
		Leap: true
	},
	{
		solar: [1449, 9, 1],
		Dow: 1,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1449],
		Leap: true
	},
	{
		solar: [1449, 9, 2],
		Dow: 2,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1449],
		Leap: true
	},
	{
		solar: [1449, 9, 29],
		Dow: 1,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1449],
		Leap: true
	},
	{
		solar: [1449, 9, 30],
		Dow: 2,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1449],
		Leap: true
	},
	{
		solar: [1449, 10, 1],
		Dow: 3,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1449],
		Leap: true
	},
	{
		solar: [1449, 10, 2],
		Dow: 4,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1449],
		Leap: true
	},
	{
		solar: [1449, 10, 29],
		Dow: 3,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1449],
		Leap: true
	},
	{
		solar: [1449, 10, 30],
		Dow: 4,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1449],
		Leap: true
	},
	{
		solar: [1449, 11, 1],
		Dow: 5,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1449],
		Leap: true
	},
	{
		solar: [1449, 11, 2],
		Dow: 6,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1449],
		Leap: true
	},
	{
		solar: [1449, 11, 26],
		Dow: 2,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1449],
		Leap: true
	},
	{
		solar: [1449, 11, 27],
		Dow: 3,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1449],
		Leap: true
	},
	{
		solar: [1449, 11, 28],
		Dow: 4,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1449],
		Leap: true
	},
	{
		solar: [1449, 11, 29],
		Dow: 5,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1449],
		Leap: true
	},
	{
		solar: [1449, 11, 30],
		Dow: 6,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1449],
		Leap: true
	},
	{
		solar: [1452, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1452],
		Leap: false
	},
	{
		solar: [1452, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1452],
		Leap: false
	},
	{
		solar: [1452, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1452],
		Leap: false
	},
	{
		solar: [1452, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1452],
		Leap: false
	},
	{
		solar: [1452, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1452],
		Leap: false
	},
	{
		solar: [1452, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1452],
		Leap: false
	},
	{
		solar: [1452, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1452],
		Leap: false
	},
	{
		solar: [1452, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1452],
		Leap: false
	},
	{
		solar: [1452, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1452],
		Leap: false
	},
	{
		solar: [1452, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1452],
		Leap: false
	},
	{
		solar: [1452, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1452],
		Leap: false
	},
	{
		solar: [1452, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1452],
		Leap: false
	},
	{
		solar: [1452, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1452],
		Leap: false
	},
	{
		solar: [1452, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1452],
		Leap: false
	},
	{
		solar: [1452, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1452],
		Leap: false
	},
	{
		solar: [1452, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1452],
		Leap: false
	},
	{
		solar: [1452, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1452],
		Leap: false
	},
	{
		solar: [1452, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1452],
		Leap: false
	},
	{
		solar: [1452, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1452],
		Leap: false
	},
	{
		solar: [1452, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1452],
		Leap: false
	},
	{
		solar: [1452, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1452],
		Leap: false
	},
	{
		solar: [1452, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1452],
		Leap: false
	},
	{
		solar: [1452, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1452],
		Leap: false
	},
	{
		solar: [1452, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1452],
		Leap: false
	},
	{
		solar: [1452, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1452],
		Leap: false
	},
	{
		solar: [1452, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1452],
		Leap: false
	},
	{
		solar: [1452, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1452],
		Leap: false
	},
	{
		solar: [1452, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1452],
		Leap: false
	},
	{
		solar: [1452, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1452],
		Leap: false
	},
	{
		solar: [1452, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1452],
		Leap: false
	},
	{
		solar: [1452, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1452],
		Leap: false
	},
	{
		solar: [1452, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1452],
		Leap: false
	},
	{
		solar: [1452, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1452],
		Leap: false
	},
	{
		solar: [1452, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1452],
		Leap: false
	},
	{
		solar: [1452, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1452],
		Leap: false
	},
	{
		solar: [1452, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1452],
		Leap: false
	},
	{
		solar: [1452, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1452],
		Leap: false
	},
	{
		solar: [1452, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1452],
		Leap: false
	},
	{
		solar: [1452, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1452],
		Leap: false
	},
	{
		solar: [1452, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1452],
		Leap: false
	},
	{
		solar: [1452, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1452],
		Leap: false
	},
	{
		solar: [1452, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1452],
		Leap: false
	},
	{
		solar: [1452, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1452],
		Leap: false
	},
	{
		solar: [1452, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1452],
		Leap: false
	},
	{
		solar: [1452, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1452],
		Leap: false
	},
	{
		solar: [1452, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1452],
		Leap: false
	},
	{
		solar: [1452, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1452],
		Leap: false
	},
	{
		solar: [1452, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1452],
		Leap: false
	},
	{
		solar: [1452, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1452],
		Leap: false
	},
	{
		solar: [1452, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1452],
		Leap: false
	},
	{
		solar: [1452, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1453],
		Leap: false
	},
	{
		solar: [1452, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1453],
		Leap: false
	},
	{
		solar: [1452, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1453],
		Leap: false
	},
	{
		solar: [1455, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1454],
		Leap: false
	},
	{
		solar: [1455, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1455],
		Leap: false
	},
	{
		solar: [1455, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1455],
		Leap: false
	},
	{
		solar: [1455, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1455],
		Leap: false
	},
	{
		solar: [1455, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1455],
		Leap: false
	},
	{
		solar: [1455, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1455],
		Leap: false
	},
	{
		solar: [1455, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1455],
		Leap: false
	},
	{
		solar: [1455, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1455],
		Leap: false
	},
	{
		solar: [1455, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1455],
		Leap: false
	},
	{
		solar: [1455, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1455],
		Leap: false
	},
	{
		solar: [1455, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1455],
		Leap: false
	},
	{
		solar: [1455, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1455],
		Leap: false
	},
	{
		solar: [1455, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1455],
		Leap: false
	},
	{
		solar: [1455, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1455],
		Leap: false
	},
	{
		solar: [1455, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1455],
		Leap: false
	},
	{
		solar: [1455, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1455],
		Leap: false
	},
	{
		solar: [1455, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1455],
		Leap: false
	},
	{
		solar: [1455, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1455],
		Leap: false
	},
	{
		solar: [1455, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1455],
		Leap: false
	},
	{
		solar: [1455, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1455],
		Leap: false
	},
	{
		solar: [1455, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1455],
		Leap: false
	},
	{
		solar: [1455, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1455],
		Leap: false
	},
	{
		solar: [1455, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1455],
		Leap: false
	},
	{
		solar: [1455, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1455],
		Leap: false
	},
	{
		solar: [1455, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1455],
		Leap: false
	},
	{
		solar: [1455, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1455],
		Leap: false
	},
	{
		solar: [1455, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1455],
		Leap: false
	},
	{
		solar: [1455, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1455],
		Leap: false
	},
	{
		solar: [1455, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1455],
		Leap: false
	},
	{
		solar: [1455, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1455],
		Leap: false
	},
	{
		solar: [1455, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1455],
		Leap: false
	},
	{
		solar: [1455, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1455],
		Leap: false
	},
	{
		solar: [1455, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1455],
		Leap: false
	},
	{
		solar: [1455, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1455],
		Leap: false
	},
	{
		solar: [1455, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1455],
		Leap: false
	},
	{
		solar: [1455, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1455],
		Leap: false
	},
	{
		solar: [1455, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1455],
		Leap: false
	},
	{
		solar: [1455, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1455],
		Leap: false
	},
	{
		solar: [1455, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1455],
		Leap: false
	},
	{
		solar: [1455, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1455],
		Leap: false
	},
	{
		solar: [1455, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1455],
		Leap: false
	},
	{
		solar: [1455, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1455],
		Leap: false
	},
	{
		solar: [1455, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1455],
		Leap: false
	},
	{
		solar: [1455, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1455],
		Leap: false
	},
	{
		solar: [1455, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1455],
		Leap: false
	},
	{
		solar: [1455, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1455],
		Leap: false
	},
	{
		solar: [1455, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1455],
		Leap: false
	},
	{
		solar: [1455, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1455],
		Leap: false
	},
	{
		solar: [1455, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1455],
		Leap: false
	},
	{
		solar: [1455, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1455],
		Leap: false
	},
	{
		solar: [1455, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1455],
		Leap: false
	},
	{
		solar: [1455, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1455],
		Leap: false
	},
	{
		solar: [1455, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1455],
		Leap: false
	},
	{
		solar: [1458, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1458],
		Leap: false
	},
	{
		solar: [1458, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1458],
		Leap: false
	},
	{
		solar: [1458, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1458],
		Leap: false
	},
	{
		solar: [1458, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1458],
		Leap: false
	},
	{
		solar: [1458, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1458],
		Leap: false
	},
	{
		solar: [1458, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1458],
		Leap: false
	},
	{
		solar: [1458, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1458],
		Leap: false
	},
	{
		solar: [1458, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1458],
		Leap: false
	},
	{
		solar: [1458, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1458],
		Leap: false
	},
	{
		solar: [1458, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1458],
		Leap: false
	},
	{
		solar: [1458, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1458],
		Leap: false
	},
	{
		solar: [1458, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1458],
		Leap: false
	},
	{
		solar: [1458, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1458],
		Leap: false
	},
	{
		solar: [1458, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1458],
		Leap: false
	},
	{
		solar: [1458, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1458],
		Leap: false
	},
	{
		solar: [1458, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1458],
		Leap: false
	},
	{
		solar: [1458, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1458],
		Leap: false
	},
	{
		solar: [1458, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1458],
		Leap: false
	},
	{
		solar: [1458, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1458],
		Leap: false
	},
	{
		solar: [1458, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1458],
		Leap: false
	},
	{
		solar: [1458, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1458],
		Leap: false
	},
	{
		solar: [1458, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1458],
		Leap: false
	},
	{
		solar: [1458, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1458],
		Leap: false
	},
	{
		solar: [1458, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1458],
		Leap: false
	},
	{
		solar: [1458, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1458],
		Leap: false
	},
	{
		solar: [1458, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1458],
		Leap: false
	},
	{
		solar: [1458, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1458],
		Leap: false
	},
	{
		solar: [1458, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1458],
		Leap: false
	},
	{
		solar: [1458, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1458],
		Leap: false
	},
	{
		solar: [1458, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1458],
		Leap: false
	},
	{
		solar: [1458, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1458],
		Leap: false
	},
	{
		solar: [1458, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1458],
		Leap: false
	},
	{
		solar: [1458, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1458],
		Leap: false
	},
	{
		solar: [1458, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1458],
		Leap: false
	},
	{
		solar: [1458, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1458],
		Leap: false
	},
	{
		solar: [1458, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1458],
		Leap: false
	},
	{
		solar: [1458, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1458],
		Leap: false
	},
	{
		solar: [1458, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1458],
		Leap: false
	},
	{
		solar: [1458, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1458],
		Leap: false
	},
	{
		solar: [1458, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1458],
		Leap: false
	},
	{
		solar: [1458, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1458],
		Leap: false
	},
	{
		solar: [1458, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1458],
		Leap: false
	},
	{
		solar: [1458, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1458],
		Leap: false
	},
	{
		solar: [1458, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1458],
		Leap: false
	},
	{
		solar: [1458, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1458],
		Leap: false
	},
	{
		solar: [1458, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1458],
		Leap: false
	},
	{
		solar: [1458, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1458],
		Leap: false
	},
	{
		solar: [1458, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1458],
		Leap: false
	},
	{
		solar: [1458, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1458],
		Leap: false
	},
	{
		solar: [1458, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1458],
		Leap: false
	},
	{
		solar: [1458, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1458],
		Leap: false
	},
	{
		solar: [1458, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1458],
		Leap: false
	},
	{
		solar: [1458, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1458],
		Leap: false
	},
	{
		solar: [1461, 0, 1],
		Dow: 6,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1460],
		Leap: true
	},
	{
		solar: [1461, 0, 2],
		Dow: 0,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1461],
		Leap: true
	},
	{
		solar: [1461, 0, 3],
		Dow: 1,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1461],
		Leap: true
	},
	{
		solar: [1461, 0, 4],
		Dow: 2,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1461],
		Leap: true
	},
	{
		solar: [1461, 0, 5],
		Dow: 3,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1461],
		Leap: true
	},
	{
		solar: [1461, 0, 30],
		Dow: 0,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1461],
		Leap: true
	},
	{
		solar: [1461, 0, 31],
		Dow: 1,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1461],
		Leap: true
	},
	{
		solar: [1461, 1, 1],
		Dow: 2,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1461],
		Leap: true
	},
	{
		solar: [1461, 1, 2],
		Dow: 3,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1461],
		Leap: true
	},
	{
		solar: [1461, 1, 30],
		Dow: 3,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1461],
		Leap: true
	},
	{
		solar: [1461, 1, 31],
		Dow: 4,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1461],
		Leap: true
	},
	{
		solar: [1461, 2, 1],
		Dow: 5,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1461],
		Leap: true
	},
	{
		solar: [1461, 2, 2],
		Dow: 6,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1461],
		Leap: true
	},
	{
		solar: [1461, 2, 30],
		Dow: 6,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1461],
		Leap: true
	},
	{
		solar: [1461, 2, 31],
		Dow: 0,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1461],
		Leap: true
	},
	{
		solar: [1461, 3, 1],
		Dow: 1,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1461],
		Leap: true
	},
	{
		solar: [1461, 3, 2],
		Dow: 2,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1461],
		Leap: true
	},
	{
		solar: [1461, 3, 30],
		Dow: 2,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1461],
		Leap: true
	},
	{
		solar: [1461, 3, 31],
		Dow: 3,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1461],
		Leap: true
	},
	{
		solar: [1461, 4, 1],
		Dow: 4,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1461],
		Leap: true
	},
	{
		solar: [1461, 4, 2],
		Dow: 5,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1461],
		Leap: true
	},
	{
		solar: [1461, 4, 30],
		Dow: 5,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1461],
		Leap: true
	},
	{
		solar: [1461, 4, 31],
		Dow: 6,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1461],
		Leap: true
	},
	{
		solar: [1461, 5, 1],
		Dow: 0,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1461],
		Leap: true
	},
	{
		solar: [1461, 5, 2],
		Dow: 1,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1461],
		Leap: true
	},
	{
		solar: [1461, 5, 30],
		Dow: 1,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1461],
		Leap: true
	},
	{
		solar: [1461, 5, 31],
		Dow: 2,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1461],
		Leap: true
	},
	{
		solar: [1461, 6, 1],
		Dow: 3,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1461],
		Leap: true
	},
	{
		solar: [1461, 6, 2],
		Dow: 4,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1461],
		Leap: true
	},
	{
		solar: [1461, 6, 29],
		Dow: 3,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1461],
		Leap: true
	},
	{
		solar: [1461, 6, 30],
		Dow: 4,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1461],
		Leap: true
	},
	{
		solar: [1461, 7, 1],
		Dow: 5,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1461],
		Leap: true
	},
	{
		solar: [1461, 7, 2],
		Dow: 6,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1461],
		Leap: true
	},
	{
		solar: [1461, 7, 29],
		Dow: 5,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1461],
		Leap: true
	},
	{
		solar: [1461, 7, 30],
		Dow: 6,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1461],
		Leap: true
	},
	{
		solar: [1461, 8, 1],
		Dow: 0,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1461],
		Leap: true
	},
	{
		solar: [1461, 8, 2],
		Dow: 1,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1461],
		Leap: true
	},
	{
		solar: [1461, 8, 29],
		Dow: 0,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1461],
		Leap: true
	},
	{
		solar: [1461, 8, 30],
		Dow: 1,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1461],
		Leap: true
	},
	{
		solar: [1461, 9, 1],
		Dow: 2,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1461],
		Leap: true
	},
	{
		solar: [1461, 9, 2],
		Dow: 3,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1461],
		Leap: true
	},
	{
		solar: [1461, 9, 29],
		Dow: 2,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1461],
		Leap: true
	},
	{
		solar: [1461, 9, 30],
		Dow: 3,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1461],
		Leap: true
	},
	{
		solar: [1461, 10, 1],
		Dow: 4,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1461],
		Leap: true
	},
	{
		solar: [1461, 10, 2],
		Dow: 5,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1461],
		Leap: true
	},
	{
		solar: [1461, 10, 29],
		Dow: 4,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1461],
		Leap: true
	},
	{
		solar: [1461, 10, 30],
		Dow: 5,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1461],
		Leap: true
	},
	{
		solar: [1461, 11, 1],
		Dow: 6,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1461],
		Leap: true
	},
	{
		solar: [1461, 11, 2],
		Dow: 0,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1461],
		Leap: true
	},
	{
		solar: [1461, 11, 26],
		Dow: 3,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1461],
		Leap: true
	},
	{
		solar: [1461, 11, 27],
		Dow: 4,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1461],
		Leap: true
	},
	{
		solar: [1461, 11, 28],
		Dow: 5,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1461],
		Leap: true
	},
	{
		solar: [1461, 11, 29],
		Dow: 6,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1461],
		Leap: true
	},
	{
		solar: [1461, 11, 30],
		Dow: 0,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1462],
		Leap: true
	},
	{
		solar: [1464, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1464],
		Leap: false
	},
	{
		solar: [1464, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1464],
		Leap: false
	},
	{
		solar: [1464, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1464],
		Leap: false
	},
	{
		solar: [1464, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1464],
		Leap: false
	},
	{
		solar: [1464, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1464],
		Leap: false
	},
	{
		solar: [1464, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1464],
		Leap: false
	},
	{
		solar: [1464, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1464],
		Leap: false
	},
	{
		solar: [1464, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1464],
		Leap: false
	},
	{
		solar: [1464, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1464],
		Leap: false
	},
	{
		solar: [1464, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1464],
		Leap: false
	},
	{
		solar: [1464, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1464],
		Leap: false
	},
	{
		solar: [1464, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1464],
		Leap: false
	},
	{
		solar: [1464, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1464],
		Leap: false
	},
	{
		solar: [1464, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1464],
		Leap: false
	},
	{
		solar: [1464, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1464],
		Leap: false
	},
	{
		solar: [1464, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1464],
		Leap: false
	},
	{
		solar: [1464, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1464],
		Leap: false
	},
	{
		solar: [1464, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1464],
		Leap: false
	},
	{
		solar: [1464, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1464],
		Leap: false
	},
	{
		solar: [1464, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1464],
		Leap: false
	},
	{
		solar: [1464, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1464],
		Leap: false
	},
	{
		solar: [1464, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1464],
		Leap: false
	},
	{
		solar: [1464, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1464],
		Leap: false
	},
	{
		solar: [1464, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1464],
		Leap: false
	},
	{
		solar: [1464, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1464],
		Leap: false
	},
	{
		solar: [1464, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1464],
		Leap: false
	},
	{
		solar: [1464, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1464],
		Leap: false
	},
	{
		solar: [1464, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1464],
		Leap: false
	},
	{
		solar: [1464, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1464],
		Leap: false
	},
	{
		solar: [1464, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1464],
		Leap: false
	},
	{
		solar: [1464, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1464],
		Leap: false
	},
	{
		solar: [1464, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1464],
		Leap: false
	},
	{
		solar: [1464, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1464],
		Leap: false
	},
	{
		solar: [1464, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1464],
		Leap: false
	},
	{
		solar: [1464, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1464],
		Leap: false
	},
	{
		solar: [1464, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1464],
		Leap: false
	},
	{
		solar: [1464, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1464],
		Leap: false
	},
	{
		solar: [1464, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1464],
		Leap: false
	},
	{
		solar: [1464, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1464],
		Leap: false
	},
	{
		solar: [1464, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1464],
		Leap: false
	},
	{
		solar: [1464, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1464],
		Leap: false
	},
	{
		solar: [1464, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1464],
		Leap: false
	},
	{
		solar: [1464, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1464],
		Leap: false
	},
	{
		solar: [1464, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1464],
		Leap: false
	},
	{
		solar: [1464, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1464],
		Leap: false
	},
	{
		solar: [1464, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1464],
		Leap: false
	},
	{
		solar: [1464, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1464],
		Leap: false
	},
	{
		solar: [1464, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1464],
		Leap: false
	},
	{
		solar: [1464, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1464],
		Leap: false
	},
	{
		solar: [1464, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1464],
		Leap: false
	},
	{
		solar: [1464, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1464],
		Leap: false
	},
	{
		solar: [1464, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1464],
		Leap: false
	},
	{
		solar: [1464, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1464],
		Leap: false
	},
	{
		solar: [1467, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1467],
		Leap: false
	},
	{
		solar: [1467, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1467],
		Leap: false
	},
	{
		solar: [1467, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1467],
		Leap: false
	},
	{
		solar: [1467, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1467],
		Leap: false
	},
	{
		solar: [1467, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1467],
		Leap: false
	},
	{
		solar: [1467, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1467],
		Leap: false
	},
	{
		solar: [1467, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1467],
		Leap: false
	},
	{
		solar: [1467, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1467],
		Leap: false
	},
	{
		solar: [1467, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1467],
		Leap: false
	},
	{
		solar: [1467, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1467],
		Leap: false
	},
	{
		solar: [1467, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1467],
		Leap: false
	},
	{
		solar: [1467, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1467],
		Leap: false
	},
	{
		solar: [1467, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1467],
		Leap: false
	},
	{
		solar: [1467, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1467],
		Leap: false
	},
	{
		solar: [1467, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1467],
		Leap: false
	},
	{
		solar: [1467, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1467],
		Leap: false
	},
	{
		solar: [1467, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1467],
		Leap: false
	},
	{
		solar: [1467, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1467],
		Leap: false
	},
	{
		solar: [1467, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1467],
		Leap: false
	},
	{
		solar: [1467, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1467],
		Leap: false
	},
	{
		solar: [1467, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1467],
		Leap: false
	},
	{
		solar: [1467, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1467],
		Leap: false
	},
	{
		solar: [1467, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1467],
		Leap: false
	},
	{
		solar: [1467, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1467],
		Leap: false
	},
	{
		solar: [1467, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1467],
		Leap: false
	},
	{
		solar: [1467, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1467],
		Leap: false
	},
	{
		solar: [1467, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1467],
		Leap: false
	},
	{
		solar: [1467, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1467],
		Leap: false
	},
	{
		solar: [1467, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1467],
		Leap: false
	},
	{
		solar: [1467, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1467],
		Leap: false
	},
	{
		solar: [1467, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1467],
		Leap: false
	},
	{
		solar: [1467, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1467],
		Leap: false
	},
	{
		solar: [1467, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1467],
		Leap: false
	},
	{
		solar: [1467, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1467],
		Leap: false
	},
	{
		solar: [1467, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1467],
		Leap: false
	},
	{
		solar: [1467, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1467],
		Leap: false
	},
	{
		solar: [1467, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1467],
		Leap: false
	},
	{
		solar: [1467, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1467],
		Leap: false
	},
	{
		solar: [1467, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1467],
		Leap: false
	},
	{
		solar: [1467, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1467],
		Leap: false
	},
	{
		solar: [1467, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1467],
		Leap: false
	},
	{
		solar: [1467, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1467],
		Leap: false
	},
	{
		solar: [1467, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1467],
		Leap: false
	},
	{
		solar: [1467, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1467],
		Leap: false
	},
	{
		solar: [1467, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1467],
		Leap: false
	},
	{
		solar: [1467, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1467],
		Leap: false
	},
	{
		solar: [1467, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1467],
		Leap: false
	},
	{
		solar: [1467, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1467],
		Leap: false
	},
	{
		solar: [1467, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1467],
		Leap: false
	},
	{
		solar: [1467, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1467],
		Leap: false
	},
	{
		solar: [1467, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1467],
		Leap: false
	},
	{
		solar: [1467, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1467],
		Leap: false
	},
	{
		solar: [1467, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1468],
		Leap: false
	},
	{
		solar: [1470, 0, 1],
		Dow: 3,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1470],
		Leap: true
	},
	{
		solar: [1470, 0, 2],
		Dow: 4,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1470],
		Leap: true
	},
	{
		solar: [1470, 0, 3],
		Dow: 5,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1470],
		Leap: true
	},
	{
		solar: [1470, 0, 4],
		Dow: 6,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1470],
		Leap: true
	},
	{
		solar: [1470, 0, 5],
		Dow: 0,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1470],
		Leap: true
	},
	{
		solar: [1470, 0, 30],
		Dow: 4,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1470],
		Leap: true
	},
	{
		solar: [1470, 0, 31],
		Dow: 5,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1470],
		Leap: true
	},
	{
		solar: [1470, 1, 1],
		Dow: 6,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1470],
		Leap: true
	},
	{
		solar: [1470, 1, 2],
		Dow: 0,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1470],
		Leap: true
	},
	{
		solar: [1470, 1, 30],
		Dow: 0,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1470],
		Leap: true
	},
	{
		solar: [1470, 1, 31],
		Dow: 1,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1470],
		Leap: true
	},
	{
		solar: [1470, 2, 1],
		Dow: 2,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1470],
		Leap: true
	},
	{
		solar: [1470, 2, 2],
		Dow: 3,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1470],
		Leap: true
	},
	{
		solar: [1470, 2, 30],
		Dow: 3,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1470],
		Leap: true
	},
	{
		solar: [1470, 2, 31],
		Dow: 4,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1470],
		Leap: true
	},
	{
		solar: [1470, 3, 1],
		Dow: 5,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1470],
		Leap: true
	},
	{
		solar: [1470, 3, 2],
		Dow: 6,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1470],
		Leap: true
	},
	{
		solar: [1470, 3, 30],
		Dow: 6,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1470],
		Leap: true
	},
	{
		solar: [1470, 3, 31],
		Dow: 0,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1470],
		Leap: true
	},
	{
		solar: [1470, 4, 1],
		Dow: 1,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1470],
		Leap: true
	},
	{
		solar: [1470, 4, 2],
		Dow: 2,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1470],
		Leap: true
	},
	{
		solar: [1470, 4, 30],
		Dow: 2,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1470],
		Leap: true
	},
	{
		solar: [1470, 4, 31],
		Dow: 3,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1470],
		Leap: true
	},
	{
		solar: [1470, 5, 1],
		Dow: 4,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1470],
		Leap: true
	},
	{
		solar: [1470, 5, 2],
		Dow: 5,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1470],
		Leap: true
	},
	{
		solar: [1470, 5, 30],
		Dow: 5,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1470],
		Leap: true
	},
	{
		solar: [1470, 5, 31],
		Dow: 6,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1470],
		Leap: true
	},
	{
		solar: [1470, 6, 1],
		Dow: 0,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1470],
		Leap: true
	},
	{
		solar: [1470, 6, 2],
		Dow: 1,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1470],
		Leap: true
	},
	{
		solar: [1470, 6, 29],
		Dow: 0,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1470],
		Leap: true
	},
	{
		solar: [1470, 6, 30],
		Dow: 1,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1470],
		Leap: true
	},
	{
		solar: [1470, 7, 1],
		Dow: 2,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1470],
		Leap: true
	},
	{
		solar: [1470, 7, 2],
		Dow: 3,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1470],
		Leap: true
	},
	{
		solar: [1470, 7, 29],
		Dow: 2,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1470],
		Leap: true
	},
	{
		solar: [1470, 7, 30],
		Dow: 3,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1470],
		Leap: true
	},
	{
		solar: [1470, 8, 1],
		Dow: 4,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1470],
		Leap: true
	},
	{
		solar: [1470, 8, 2],
		Dow: 5,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1470],
		Leap: true
	},
	{
		solar: [1470, 8, 29],
		Dow: 4,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1470],
		Leap: true
	},
	{
		solar: [1470, 8, 30],
		Dow: 5,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1470],
		Leap: true
	},
	{
		solar: [1470, 9, 1],
		Dow: 6,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1470],
		Leap: true
	},
	{
		solar: [1470, 9, 2],
		Dow: 0,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1470],
		Leap: true
	},
	{
		solar: [1470, 9, 29],
		Dow: 6,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1470],
		Leap: true
	},
	{
		solar: [1470, 9, 30],
		Dow: 0,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1470],
		Leap: true
	},
	{
		solar: [1470, 10, 1],
		Dow: 1,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1470],
		Leap: true
	},
	{
		solar: [1470, 10, 2],
		Dow: 2,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1470],
		Leap: true
	},
	{
		solar: [1470, 10, 29],
		Dow: 1,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1470],
		Leap: true
	},
	{
		solar: [1470, 10, 30],
		Dow: 2,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1470],
		Leap: true
	},
	{
		solar: [1470, 11, 1],
		Dow: 3,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1470],
		Leap: true
	},
	{
		solar: [1470, 11, 2],
		Dow: 4,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1470],
		Leap: true
	},
	{
		solar: [1470, 11, 26],
		Dow: 0,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1470],
		Leap: true
	},
	{
		solar: [1470, 11, 27],
		Dow: 1,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1470],
		Leap: true
	},
	{
		solar: [1470, 11, 28],
		Dow: 2,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1470],
		Leap: true
	},
	{
		solar: [1470, 11, 29],
		Dow: 3,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1470],
		Leap: true
	},
	{
		solar: [1470, 11, 30],
		Dow: 4,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1470],
		Leap: true
	},
	{
		solar: [1473, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1473],
		Leap: false
	},
	{
		solar: [1473, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1473],
		Leap: false
	},
	{
		solar: [1473, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1473],
		Leap: false
	},
	{
		solar: [1473, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1473],
		Leap: false
	},
	{
		solar: [1473, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1473],
		Leap: false
	},
	{
		solar: [1473, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1473],
		Leap: false
	},
	{
		solar: [1473, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1473],
		Leap: false
	},
	{
		solar: [1473, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1473],
		Leap: false
	},
	{
		solar: [1473, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1473],
		Leap: false
	},
	{
		solar: [1473, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1473],
		Leap: false
	},
	{
		solar: [1473, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1473],
		Leap: false
	},
	{
		solar: [1473, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1473],
		Leap: false
	},
	{
		solar: [1473, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1473],
		Leap: false
	},
	{
		solar: [1473, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1473],
		Leap: false
	},
	{
		solar: [1473, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1473],
		Leap: false
	},
	{
		solar: [1473, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1473],
		Leap: false
	},
	{
		solar: [1473, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1473],
		Leap: false
	},
	{
		solar: [1473, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1473],
		Leap: false
	},
	{
		solar: [1473, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1473],
		Leap: false
	},
	{
		solar: [1473, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1473],
		Leap: false
	},
	{
		solar: [1473, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1473],
		Leap: false
	},
	{
		solar: [1473, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1473],
		Leap: false
	},
	{
		solar: [1473, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1473],
		Leap: false
	},
	{
		solar: [1473, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1473],
		Leap: false
	},
	{
		solar: [1473, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1473],
		Leap: false
	},
	{
		solar: [1473, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1473],
		Leap: false
	},
	{
		solar: [1473, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1473],
		Leap: false
	},
	{
		solar: [1473, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1473],
		Leap: false
	},
	{
		solar: [1473, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1473],
		Leap: false
	},
	{
		solar: [1473, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1473],
		Leap: false
	},
	{
		solar: [1473, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1473],
		Leap: false
	},
	{
		solar: [1473, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1473],
		Leap: false
	},
	{
		solar: [1473, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1473],
		Leap: false
	},
	{
		solar: [1473, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1473],
		Leap: false
	},
	{
		solar: [1473, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1473],
		Leap: false
	},
	{
		solar: [1473, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1473],
		Leap: false
	},
	{
		solar: [1473, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1473],
		Leap: false
	},
	{
		solar: [1473, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1473],
		Leap: false
	},
	{
		solar: [1473, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1473],
		Leap: false
	},
	{
		solar: [1473, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1473],
		Leap: false
	},
	{
		solar: [1473, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1473],
		Leap: false
	},
	{
		solar: [1473, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1473],
		Leap: false
	},
	{
		solar: [1473, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1473],
		Leap: false
	},
	{
		solar: [1473, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1473],
		Leap: false
	},
	{
		solar: [1473, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1473],
		Leap: false
	},
	{
		solar: [1473, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1473],
		Leap: false
	},
	{
		solar: [1473, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1473],
		Leap: false
	},
	{
		solar: [1473, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1473],
		Leap: false
	},
	{
		solar: [1473, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1473],
		Leap: false
	},
	{
		solar: [1473, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1473],
		Leap: false
	},
	{
		solar: [1473, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1473],
		Leap: false
	},
	{
		solar: [1473, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1473],
		Leap: false
	},
	{
		solar: [1473, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1474],
		Leap: false
	},
	{
		solar: [1476, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1475],
		Leap: false
	},
	{
		solar: [1476, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1475],
		Leap: false
	},
	{
		solar: [1476, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1475],
		Leap: false
	},
	{
		solar: [1476, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1476],
		Leap: false
	},
	{
		solar: [1476, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1476],
		Leap: false
	},
	{
		solar: [1476, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1476],
		Leap: false
	},
	{
		solar: [1476, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1476],
		Leap: false
	},
	{
		solar: [1476, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1476],
		Leap: false
	},
	{
		solar: [1476, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1476],
		Leap: false
	},
	{
		solar: [1476, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1476],
		Leap: false
	},
	{
		solar: [1476, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1476],
		Leap: false
	},
	{
		solar: [1476, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1476],
		Leap: false
	},
	{
		solar: [1476, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1476],
		Leap: false
	},
	{
		solar: [1476, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1476],
		Leap: false
	},
	{
		solar: [1476, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1476],
		Leap: false
	},
	{
		solar: [1476, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1476],
		Leap: false
	},
	{
		solar: [1476, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1476],
		Leap: false
	},
	{
		solar: [1476, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1476],
		Leap: false
	},
	{
		solar: [1476, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1476],
		Leap: false
	},
	{
		solar: [1476, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1476],
		Leap: false
	},
	{
		solar: [1476, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1476],
		Leap: false
	},
	{
		solar: [1476, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1476],
		Leap: false
	},
	{
		solar: [1476, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1476],
		Leap: false
	},
	{
		solar: [1476, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1476],
		Leap: false
	},
	{
		solar: [1476, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1476],
		Leap: false
	},
	{
		solar: [1476, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1476],
		Leap: false
	},
	{
		solar: [1476, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1476],
		Leap: false
	},
	{
		solar: [1476, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1476],
		Leap: false
	},
	{
		solar: [1476, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1476],
		Leap: false
	},
	{
		solar: [1476, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1476],
		Leap: false
	},
	{
		solar: [1476, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1476],
		Leap: false
	},
	{
		solar: [1476, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1476],
		Leap: false
	},
	{
		solar: [1476, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1476],
		Leap: false
	},
	{
		solar: [1476, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1476],
		Leap: false
	},
	{
		solar: [1476, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1476],
		Leap: false
	},
	{
		solar: [1476, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1476],
		Leap: false
	},
	{
		solar: [1476, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1476],
		Leap: false
	},
	{
		solar: [1476, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1476],
		Leap: false
	},
	{
		solar: [1476, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1476],
		Leap: false
	},
	{
		solar: [1476, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1476],
		Leap: false
	},
	{
		solar: [1476, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1476],
		Leap: false
	},
	{
		solar: [1476, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1476],
		Leap: false
	},
	{
		solar: [1476, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1476],
		Leap: false
	},
	{
		solar: [1476, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1476],
		Leap: false
	},
	{
		solar: [1476, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1476],
		Leap: false
	},
	{
		solar: [1476, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1476],
		Leap: false
	},
	{
		solar: [1476, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1476],
		Leap: false
	},
	{
		solar: [1476, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1476],
		Leap: false
	},
	{
		solar: [1476, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1476],
		Leap: false
	},
	{
		solar: [1476, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1476],
		Leap: false
	},
	{
		solar: [1476, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1476],
		Leap: false
	},
	{
		solar: [1476, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1476],
		Leap: false
	},
	{
		solar: [1476, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1476],
		Leap: false
	},
	{
		solar: [1479, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1479],
		Leap: false
	},
	{
		solar: [1479, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1479],
		Leap: false
	},
	{
		solar: [1479, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1479],
		Leap: false
	},
	{
		solar: [1479, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1479],
		Leap: false
	},
	{
		solar: [1479, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1479],
		Leap: false
	},
	{
		solar: [1479, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1479],
		Leap: false
	},
	{
		solar: [1479, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1479],
		Leap: false
	},
	{
		solar: [1479, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1479],
		Leap: false
	},
	{
		solar: [1479, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1479],
		Leap: false
	},
	{
		solar: [1479, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1479],
		Leap: false
	},
	{
		solar: [1479, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1479],
		Leap: false
	},
	{
		solar: [1479, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1479],
		Leap: false
	},
	{
		solar: [1479, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1479],
		Leap: false
	},
	{
		solar: [1479, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1479],
		Leap: false
	},
	{
		solar: [1479, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1479],
		Leap: false
	},
	{
		solar: [1479, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1479],
		Leap: false
	},
	{
		solar: [1479, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1479],
		Leap: false
	},
	{
		solar: [1479, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1479],
		Leap: false
	},
	{
		solar: [1479, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1479],
		Leap: false
	},
	{
		solar: [1479, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1479],
		Leap: false
	},
	{
		solar: [1479, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1479],
		Leap: false
	},
	{
		solar: [1479, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1479],
		Leap: false
	},
	{
		solar: [1479, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1479],
		Leap: false
	},
	{
		solar: [1479, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1479],
		Leap: false
	},
	{
		solar: [1479, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1479],
		Leap: false
	},
	{
		solar: [1479, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1479],
		Leap: false
	},
	{
		solar: [1479, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1479],
		Leap: false
	},
	{
		solar: [1479, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1479],
		Leap: false
	},
	{
		solar: [1479, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1479],
		Leap: false
	},
	{
		solar: [1479, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1479],
		Leap: false
	},
	{
		solar: [1479, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1479],
		Leap: false
	},
	{
		solar: [1479, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1479],
		Leap: false
	},
	{
		solar: [1479, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1479],
		Leap: false
	},
	{
		solar: [1479, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1479],
		Leap: false
	},
	{
		solar: [1479, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1479],
		Leap: false
	},
	{
		solar: [1479, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1479],
		Leap: false
	},
	{
		solar: [1479, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1479],
		Leap: false
	},
	{
		solar: [1479, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1479],
		Leap: false
	},
	{
		solar: [1479, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1479],
		Leap: false
	},
	{
		solar: [1479, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1479],
		Leap: false
	},
	{
		solar: [1479, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1479],
		Leap: false
	},
	{
		solar: [1479, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1479],
		Leap: false
	},
	{
		solar: [1479, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1479],
		Leap: false
	},
	{
		solar: [1479, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1479],
		Leap: false
	},
	{
		solar: [1479, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1479],
		Leap: false
	},
	{
		solar: [1479, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1479],
		Leap: false
	},
	{
		solar: [1479, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1479],
		Leap: false
	},
	{
		solar: [1479, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1479],
		Leap: false
	},
	{
		solar: [1479, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1479],
		Leap: false
	},
	{
		solar: [1479, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1479],
		Leap: false
	},
	{
		solar: [1479, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1479],
		Leap: false
	},
	{
		solar: [1479, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1480],
		Leap: false
	},
	{
		solar: [1479, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1480],
		Leap: false
	},
	{
		solar: [1482, 0, 1],
		Dow: 4,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1481],
		Leap: true
	},
	{
		solar: [1482, 0, 2],
		Dow: 5,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1481],
		Leap: true
	},
	{
		solar: [1482, 0, 3],
		Dow: 6,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1481],
		Leap: true
	},
	{
		solar: [1482, 0, 4],
		Dow: 0,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1482],
		Leap: true
	},
	{
		solar: [1482, 0, 5],
		Dow: 1,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1482],
		Leap: true
	},
	{
		solar: [1482, 0, 30],
		Dow: 5,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1482],
		Leap: true
	},
	{
		solar: [1482, 0, 31],
		Dow: 6,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1482],
		Leap: true
	},
	{
		solar: [1482, 1, 1],
		Dow: 0,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1482],
		Leap: true
	},
	{
		solar: [1482, 1, 2],
		Dow: 1,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1482],
		Leap: true
	},
	{
		solar: [1482, 1, 30],
		Dow: 1,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1482],
		Leap: true
	},
	{
		solar: [1482, 1, 31],
		Dow: 2,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1482],
		Leap: true
	},
	{
		solar: [1482, 2, 1],
		Dow: 3,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1482],
		Leap: true
	},
	{
		solar: [1482, 2, 2],
		Dow: 4,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1482],
		Leap: true
	},
	{
		solar: [1482, 2, 30],
		Dow: 4,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1482],
		Leap: true
	},
	{
		solar: [1482, 2, 31],
		Dow: 5,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1482],
		Leap: true
	},
	{
		solar: [1482, 3, 1],
		Dow: 6,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1482],
		Leap: true
	},
	{
		solar: [1482, 3, 2],
		Dow: 0,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1482],
		Leap: true
	},
	{
		solar: [1482, 3, 30],
		Dow: 0,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1482],
		Leap: true
	},
	{
		solar: [1482, 3, 31],
		Dow: 1,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1482],
		Leap: true
	},
	{
		solar: [1482, 4, 1],
		Dow: 2,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1482],
		Leap: true
	},
	{
		solar: [1482, 4, 2],
		Dow: 3,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1482],
		Leap: true
	},
	{
		solar: [1482, 4, 30],
		Dow: 3,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1482],
		Leap: true
	},
	{
		solar: [1482, 4, 31],
		Dow: 4,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1482],
		Leap: true
	},
	{
		solar: [1482, 5, 1],
		Dow: 5,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1482],
		Leap: true
	},
	{
		solar: [1482, 5, 2],
		Dow: 6,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1482],
		Leap: true
	},
	{
		solar: [1482, 5, 30],
		Dow: 6,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1482],
		Leap: true
	},
	{
		solar: [1482, 5, 31],
		Dow: 0,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1482],
		Leap: true
	},
	{
		solar: [1482, 6, 1],
		Dow: 1,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1482],
		Leap: true
	},
	{
		solar: [1482, 6, 2],
		Dow: 2,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1482],
		Leap: true
	},
	{
		solar: [1482, 6, 29],
		Dow: 1,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1482],
		Leap: true
	},
	{
		solar: [1482, 6, 30],
		Dow: 2,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1482],
		Leap: true
	},
	{
		solar: [1482, 7, 1],
		Dow: 3,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1482],
		Leap: true
	},
	{
		solar: [1482, 7, 2],
		Dow: 4,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1482],
		Leap: true
	},
	{
		solar: [1482, 7, 29],
		Dow: 3,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1482],
		Leap: true
	},
	{
		solar: [1482, 7, 30],
		Dow: 4,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1482],
		Leap: true
	},
	{
		solar: [1482, 8, 1],
		Dow: 5,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1482],
		Leap: true
	},
	{
		solar: [1482, 8, 2],
		Dow: 6,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1482],
		Leap: true
	},
	{
		solar: [1482, 8, 29],
		Dow: 5,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1482],
		Leap: true
	},
	{
		solar: [1482, 8, 30],
		Dow: 6,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1482],
		Leap: true
	},
	{
		solar: [1482, 9, 1],
		Dow: 0,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1482],
		Leap: true
	},
	{
		solar: [1482, 9, 2],
		Dow: 1,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1482],
		Leap: true
	},
	{
		solar: [1482, 9, 29],
		Dow: 0,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1482],
		Leap: true
	},
	{
		solar: [1482, 9, 30],
		Dow: 1,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1482],
		Leap: true
	},
	{
		solar: [1482, 10, 1],
		Dow: 2,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1482],
		Leap: true
	},
	{
		solar: [1482, 10, 2],
		Dow: 3,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1482],
		Leap: true
	},
	{
		solar: [1482, 10, 29],
		Dow: 2,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1482],
		Leap: true
	},
	{
		solar: [1482, 10, 30],
		Dow: 3,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1482],
		Leap: true
	},
	{
		solar: [1482, 11, 1],
		Dow: 4,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1482],
		Leap: true
	},
	{
		solar: [1482, 11, 2],
		Dow: 5,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1482],
		Leap: true
	},
	{
		solar: [1482, 11, 26],
		Dow: 1,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1482],
		Leap: true
	},
	{
		solar: [1482, 11, 27],
		Dow: 2,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1482],
		Leap: true
	},
	{
		solar: [1482, 11, 28],
		Dow: 3,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1482],
		Leap: true
	},
	{
		solar: [1482, 11, 29],
		Dow: 4,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1482],
		Leap: true
	},
	{
		solar: [1482, 11, 30],
		Dow: 5,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1482],
		Leap: true
	},
	{
		solar: [1485, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1485],
		Leap: false
	},
	{
		solar: [1485, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1485],
		Leap: false
	},
	{
		solar: [1485, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1485],
		Leap: false
	},
	{
		solar: [1485, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1485],
		Leap: false
	},
	{
		solar: [1485, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1485],
		Leap: false
	},
	{
		solar: [1485, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1485],
		Leap: false
	},
	{
		solar: [1485, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1485],
		Leap: false
	},
	{
		solar: [1485, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1485],
		Leap: false
	},
	{
		solar: [1485, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1485],
		Leap: false
	},
	{
		solar: [1485, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1485],
		Leap: false
	},
	{
		solar: [1485, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1485],
		Leap: false
	},
	{
		solar: [1485, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1485],
		Leap: false
	},
	{
		solar: [1485, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1485],
		Leap: false
	},
	{
		solar: [1485, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1485],
		Leap: false
	},
	{
		solar: [1485, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1485],
		Leap: false
	},
	{
		solar: [1485, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1485],
		Leap: false
	},
	{
		solar: [1485, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1485],
		Leap: false
	},
	{
		solar: [1485, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1485],
		Leap: false
	},
	{
		solar: [1485, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1485],
		Leap: false
	},
	{
		solar: [1485, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1485],
		Leap: false
	},
	{
		solar: [1485, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1485],
		Leap: false
	},
	{
		solar: [1485, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1485],
		Leap: false
	},
	{
		solar: [1485, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1485],
		Leap: false
	},
	{
		solar: [1485, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1485],
		Leap: false
	},
	{
		solar: [1485, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1485],
		Leap: false
	},
	{
		solar: [1485, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1485],
		Leap: false
	},
	{
		solar: [1485, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1485],
		Leap: false
	},
	{
		solar: [1485, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1485],
		Leap: false
	},
	{
		solar: [1485, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1485],
		Leap: false
	},
	{
		solar: [1485, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1485],
		Leap: false
	},
	{
		solar: [1485, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1485],
		Leap: false
	},
	{
		solar: [1485, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1485],
		Leap: false
	},
	{
		solar: [1485, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1485],
		Leap: false
	},
	{
		solar: [1485, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1485],
		Leap: false
	},
	{
		solar: [1485, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1485],
		Leap: false
	},
	{
		solar: [1485, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1485],
		Leap: false
	},
	{
		solar: [1485, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1485],
		Leap: false
	},
	{
		solar: [1485, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1485],
		Leap: false
	},
	{
		solar: [1485, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1485],
		Leap: false
	},
	{
		solar: [1485, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1485],
		Leap: false
	},
	{
		solar: [1485, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1485],
		Leap: false
	},
	{
		solar: [1485, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1485],
		Leap: false
	},
	{
		solar: [1485, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1485],
		Leap: false
	},
	{
		solar: [1485, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1485],
		Leap: false
	},
	{
		solar: [1485, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1485],
		Leap: false
	},
	{
		solar: [1485, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1485],
		Leap: false
	},
	{
		solar: [1485, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1485],
		Leap: false
	},
	{
		solar: [1485, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1485],
		Leap: false
	},
	{
		solar: [1485, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1485],
		Leap: false
	},
	{
		solar: [1485, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1485],
		Leap: false
	},
	{
		solar: [1485, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1485],
		Leap: false
	},
	{
		solar: [1485, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1486],
		Leap: false
	},
	{
		solar: [1485, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1486],
		Leap: false
	},
	{
		solar: [1488, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1487],
		Leap: false
	},
	{
		solar: [1488, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1487],
		Leap: false
	},
	{
		solar: [1488, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1488],
		Leap: false
	},
	{
		solar: [1488, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1488],
		Leap: false
	},
	{
		solar: [1488, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1488],
		Leap: false
	},
	{
		solar: [1488, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1488],
		Leap: false
	},
	{
		solar: [1488, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1488],
		Leap: false
	},
	{
		solar: [1488, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1488],
		Leap: false
	},
	{
		solar: [1488, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1488],
		Leap: false
	},
	{
		solar: [1488, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1488],
		Leap: false
	},
	{
		solar: [1488, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1488],
		Leap: false
	},
	{
		solar: [1488, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1488],
		Leap: false
	},
	{
		solar: [1488, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1488],
		Leap: false
	},
	{
		solar: [1488, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1488],
		Leap: false
	},
	{
		solar: [1488, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1488],
		Leap: false
	},
	{
		solar: [1488, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1488],
		Leap: false
	},
	{
		solar: [1488, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1488],
		Leap: false
	},
	{
		solar: [1488, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1488],
		Leap: false
	},
	{
		solar: [1488, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1488],
		Leap: false
	},
	{
		solar: [1488, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1488],
		Leap: false
	},
	{
		solar: [1488, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1488],
		Leap: false
	},
	{
		solar: [1488, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1488],
		Leap: false
	},
	{
		solar: [1488, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1488],
		Leap: false
	},
	{
		solar: [1488, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1488],
		Leap: false
	},
	{
		solar: [1488, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1488],
		Leap: false
	},
	{
		solar: [1488, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1488],
		Leap: false
	},
	{
		solar: [1488, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1488],
		Leap: false
	},
	{
		solar: [1488, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1488],
		Leap: false
	},
	{
		solar: [1488, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1488],
		Leap: false
	},
	{
		solar: [1488, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1488],
		Leap: false
	},
	{
		solar: [1488, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1488],
		Leap: false
	},
	{
		solar: [1488, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1488],
		Leap: false
	},
	{
		solar: [1488, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1488],
		Leap: false
	},
	{
		solar: [1488, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1488],
		Leap: false
	},
	{
		solar: [1488, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1488],
		Leap: false
	},
	{
		solar: [1488, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1488],
		Leap: false
	},
	{
		solar: [1488, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1488],
		Leap: false
	},
	{
		solar: [1488, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1488],
		Leap: false
	},
	{
		solar: [1488, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1488],
		Leap: false
	},
	{
		solar: [1488, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1488],
		Leap: false
	},
	{
		solar: [1488, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1488],
		Leap: false
	},
	{
		solar: [1488, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1488],
		Leap: false
	},
	{
		solar: [1488, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1488],
		Leap: false
	},
	{
		solar: [1488, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1488],
		Leap: false
	},
	{
		solar: [1488, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1488],
		Leap: false
	},
	{
		solar: [1488, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1488],
		Leap: false
	},
	{
		solar: [1488, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1488],
		Leap: false
	},
	{
		solar: [1488, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1488],
		Leap: false
	},
	{
		solar: [1488, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1488],
		Leap: false
	},
	{
		solar: [1488, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1488],
		Leap: false
	},
	{
		solar: [1488, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1488],
		Leap: false
	},
	{
		solar: [1488, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1488],
		Leap: false
	},
	{
		solar: [1488, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1488],
		Leap: false
	},
	{
		solar: [1491, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1491],
		Leap: false
	},
	{
		solar: [1491, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1491],
		Leap: false
	},
	{
		solar: [1491, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1491],
		Leap: false
	},
	{
		solar: [1491, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1491],
		Leap: false
	},
	{
		solar: [1491, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1491],
		Leap: false
	},
	{
		solar: [1491, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1491],
		Leap: false
	},
	{
		solar: [1491, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1491],
		Leap: false
	},
	{
		solar: [1491, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1491],
		Leap: false
	},
	{
		solar: [1491, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1491],
		Leap: false
	},
	{
		solar: [1491, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1491],
		Leap: false
	},
	{
		solar: [1491, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1491],
		Leap: false
	},
	{
		solar: [1491, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1491],
		Leap: false
	},
	{
		solar: [1491, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1491],
		Leap: false
	},
	{
		solar: [1491, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1491],
		Leap: false
	},
	{
		solar: [1491, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1491],
		Leap: false
	},
	{
		solar: [1491, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1491],
		Leap: false
	},
	{
		solar: [1491, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1491],
		Leap: false
	},
	{
		solar: [1491, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1491],
		Leap: false
	},
	{
		solar: [1491, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1491],
		Leap: false
	},
	{
		solar: [1491, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1491],
		Leap: false
	},
	{
		solar: [1491, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1491],
		Leap: false
	},
	{
		solar: [1491, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1491],
		Leap: false
	},
	{
		solar: [1491, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1491],
		Leap: false
	},
	{
		solar: [1491, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1491],
		Leap: false
	},
	{
		solar: [1491, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1491],
		Leap: false
	},
	{
		solar: [1491, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1491],
		Leap: false
	},
	{
		solar: [1491, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1491],
		Leap: false
	},
	{
		solar: [1491, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1491],
		Leap: false
	},
	{
		solar: [1491, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1491],
		Leap: false
	},
	{
		solar: [1491, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1491],
		Leap: false
	},
	{
		solar: [1491, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1491],
		Leap: false
	},
	{
		solar: [1491, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1491],
		Leap: false
	},
	{
		solar: [1491, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1491],
		Leap: false
	},
	{
		solar: [1491, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1491],
		Leap: false
	},
	{
		solar: [1491, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1491],
		Leap: false
	},
	{
		solar: [1491, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1491],
		Leap: false
	},
	{
		solar: [1491, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1491],
		Leap: false
	},
	{
		solar: [1491, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1491],
		Leap: false
	},
	{
		solar: [1491, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1491],
		Leap: false
	},
	{
		solar: [1491, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1491],
		Leap: false
	},
	{
		solar: [1491, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1491],
		Leap: false
	},
	{
		solar: [1491, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1491],
		Leap: false
	},
	{
		solar: [1491, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1491],
		Leap: false
	},
	{
		solar: [1491, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1491],
		Leap: false
	},
	{
		solar: [1491, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1491],
		Leap: false
	},
	{
		solar: [1491, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1491],
		Leap: false
	},
	{
		solar: [1491, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1491],
		Leap: false
	},
	{
		solar: [1491, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1491],
		Leap: false
	},
	{
		solar: [1491, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1491],
		Leap: false
	},
	{
		solar: [1491, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1491],
		Leap: false
	},
	{
		solar: [1491, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1492],
		Leap: false
	},
	{
		solar: [1491, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1492],
		Leap: false
	},
	{
		solar: [1491, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1492],
		Leap: false
	},
	{
		solar: [1494, 0, 1],
		Dow: 5,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1493],
		Leap: true
	},
	{
		solar: [1494, 0, 2],
		Dow: 6,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1493],
		Leap: true
	},
	{
		solar: [1494, 0, 3],
		Dow: 0,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1494],
		Leap: true
	},
	{
		solar: [1494, 0, 4],
		Dow: 1,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1494],
		Leap: true
	},
	{
		solar: [1494, 0, 5],
		Dow: 2,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1494],
		Leap: true
	},
	{
		solar: [1494, 0, 30],
		Dow: 6,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1494],
		Leap: true
	},
	{
		solar: [1494, 0, 31],
		Dow: 0,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1494],
		Leap: true
	},
	{
		solar: [1494, 1, 1],
		Dow: 1,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1494],
		Leap: true
	},
	{
		solar: [1494, 1, 2],
		Dow: 2,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1494],
		Leap: true
	},
	{
		solar: [1494, 1, 30],
		Dow: 2,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1494],
		Leap: true
	},
	{
		solar: [1494, 1, 31],
		Dow: 3,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1494],
		Leap: true
	},
	{
		solar: [1494, 2, 1],
		Dow: 4,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1494],
		Leap: true
	},
	{
		solar: [1494, 2, 2],
		Dow: 5,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1494],
		Leap: true
	},
	{
		solar: [1494, 2, 30],
		Dow: 5,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1494],
		Leap: true
	},
	{
		solar: [1494, 2, 31],
		Dow: 6,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1494],
		Leap: true
	},
	{
		solar: [1494, 3, 1],
		Dow: 0,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1494],
		Leap: true
	},
	{
		solar: [1494, 3, 2],
		Dow: 1,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1494],
		Leap: true
	},
	{
		solar: [1494, 3, 30],
		Dow: 1,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1494],
		Leap: true
	},
	{
		solar: [1494, 3, 31],
		Dow: 2,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1494],
		Leap: true
	},
	{
		solar: [1494, 4, 1],
		Dow: 3,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1494],
		Leap: true
	},
	{
		solar: [1494, 4, 2],
		Dow: 4,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1494],
		Leap: true
	},
	{
		solar: [1494, 4, 30],
		Dow: 4,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1494],
		Leap: true
	},
	{
		solar: [1494, 4, 31],
		Dow: 5,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1494],
		Leap: true
	},
	{
		solar: [1494, 5, 1],
		Dow: 6,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1494],
		Leap: true
	},
	{
		solar: [1494, 5, 2],
		Dow: 0,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1494],
		Leap: true
	},
	{
		solar: [1494, 5, 30],
		Dow: 0,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1494],
		Leap: true
	},
	{
		solar: [1494, 5, 31],
		Dow: 1,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1494],
		Leap: true
	},
	{
		solar: [1494, 6, 1],
		Dow: 2,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1494],
		Leap: true
	},
	{
		solar: [1494, 6, 2],
		Dow: 3,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1494],
		Leap: true
	},
	{
		solar: [1494, 6, 29],
		Dow: 2,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1494],
		Leap: true
	},
	{
		solar: [1494, 6, 30],
		Dow: 3,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1494],
		Leap: true
	},
	{
		solar: [1494, 7, 1],
		Dow: 4,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1494],
		Leap: true
	},
	{
		solar: [1494, 7, 2],
		Dow: 5,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1494],
		Leap: true
	},
	{
		solar: [1494, 7, 29],
		Dow: 4,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1494],
		Leap: true
	},
	{
		solar: [1494, 7, 30],
		Dow: 5,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1494],
		Leap: true
	},
	{
		solar: [1494, 8, 1],
		Dow: 6,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1494],
		Leap: true
	},
	{
		solar: [1494, 8, 2],
		Dow: 0,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1494],
		Leap: true
	},
	{
		solar: [1494, 8, 29],
		Dow: 6,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1494],
		Leap: true
	},
	{
		solar: [1494, 8, 30],
		Dow: 0,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1494],
		Leap: true
	},
	{
		solar: [1494, 9, 1],
		Dow: 1,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1494],
		Leap: true
	},
	{
		solar: [1494, 9, 2],
		Dow: 2,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1494],
		Leap: true
	},
	{
		solar: [1494, 9, 29],
		Dow: 1,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1494],
		Leap: true
	},
	{
		solar: [1494, 9, 30],
		Dow: 2,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1494],
		Leap: true
	},
	{
		solar: [1494, 10, 1],
		Dow: 3,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1494],
		Leap: true
	},
	{
		solar: [1494, 10, 2],
		Dow: 4,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1494],
		Leap: true
	},
	{
		solar: [1494, 10, 29],
		Dow: 3,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1494],
		Leap: true
	},
	{
		solar: [1494, 10, 30],
		Dow: 4,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1494],
		Leap: true
	},
	{
		solar: [1494, 11, 1],
		Dow: 5,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1494],
		Leap: true
	},
	{
		solar: [1494, 11, 2],
		Dow: 6,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1494],
		Leap: true
	},
	{
		solar: [1494, 11, 26],
		Dow: 2,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1494],
		Leap: true
	},
	{
		solar: [1494, 11, 27],
		Dow: 3,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1494],
		Leap: true
	},
	{
		solar: [1494, 11, 28],
		Dow: 4,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1494],
		Leap: true
	},
	{
		solar: [1494, 11, 29],
		Dow: 5,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1494],
		Leap: true
	},
	{
		solar: [1494, 11, 30],
		Dow: 6,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1494],
		Leap: true
	},
	{
		solar: [1497, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1497],
		Leap: false
	},
	{
		solar: [1497, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1497],
		Leap: false
	},
	{
		solar: [1497, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1497],
		Leap: false
	},
	{
		solar: [1497, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1497],
		Leap: false
	},
	{
		solar: [1497, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1497],
		Leap: false
	},
	{
		solar: [1497, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1497],
		Leap: false
	},
	{
		solar: [1497, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1497],
		Leap: false
	},
	{
		solar: [1497, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1497],
		Leap: false
	},
	{
		solar: [1497, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1497],
		Leap: false
	},
	{
		solar: [1497, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1497],
		Leap: false
	},
	{
		solar: [1497, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1497],
		Leap: false
	},
	{
		solar: [1497, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1497],
		Leap: false
	},
	{
		solar: [1497, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1497],
		Leap: false
	},
	{
		solar: [1497, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1497],
		Leap: false
	},
	{
		solar: [1497, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1497],
		Leap: false
	},
	{
		solar: [1497, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1497],
		Leap: false
	},
	{
		solar: [1497, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1497],
		Leap: false
	},
	{
		solar: [1497, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1497],
		Leap: false
	},
	{
		solar: [1497, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1497],
		Leap: false
	},
	{
		solar: [1497, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1497],
		Leap: false
	},
	{
		solar: [1497, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1497],
		Leap: false
	},
	{
		solar: [1497, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1497],
		Leap: false
	},
	{
		solar: [1497, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1497],
		Leap: false
	},
	{
		solar: [1497, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1497],
		Leap: false
	},
	{
		solar: [1497, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1497],
		Leap: false
	},
	{
		solar: [1497, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1497],
		Leap: false
	},
	{
		solar: [1497, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1497],
		Leap: false
	},
	{
		solar: [1497, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1497],
		Leap: false
	},
	{
		solar: [1497, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1497],
		Leap: false
	},
	{
		solar: [1497, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1497],
		Leap: false
	},
	{
		solar: [1497, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1497],
		Leap: false
	},
	{
		solar: [1497, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1497],
		Leap: false
	},
	{
		solar: [1497, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1497],
		Leap: false
	},
	{
		solar: [1497, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1497],
		Leap: false
	},
	{
		solar: [1497, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1497],
		Leap: false
	},
	{
		solar: [1497, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1497],
		Leap: false
	},
	{
		solar: [1497, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1497],
		Leap: false
	},
	{
		solar: [1497, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1497],
		Leap: false
	},
	{
		solar: [1497, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1497],
		Leap: false
	},
	{
		solar: [1497, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1497],
		Leap: false
	},
	{
		solar: [1497, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1497],
		Leap: false
	},
	{
		solar: [1497, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1497],
		Leap: false
	},
	{
		solar: [1497, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1497],
		Leap: false
	},
	{
		solar: [1497, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1497],
		Leap: false
	},
	{
		solar: [1497, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1497],
		Leap: false
	},
	{
		solar: [1497, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1497],
		Leap: false
	},
	{
		solar: [1497, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1497],
		Leap: false
	},
	{
		solar: [1497, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1497],
		Leap: false
	},
	{
		solar: [1497, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1497],
		Leap: false
	},
	{
		solar: [1497, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1497],
		Leap: false
	},
	{
		solar: [1497, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1498],
		Leap: false
	},
	{
		solar: [1497, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1498],
		Leap: false
	},
	{
		solar: [1497, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1498],
		Leap: false
	},
	{
		solar: [1500, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1499],
		Leap: false
	},
	{
		solar: [1500, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1500],
		Leap: false
	},
	{
		solar: [1500, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1500],
		Leap: false
	},
	{
		solar: [1500, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1500],
		Leap: false
	},
	{
		solar: [1500, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1500],
		Leap: false
	},
	{
		solar: [1500, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1500],
		Leap: false
	},
	{
		solar: [1500, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1500],
		Leap: false
	},
	{
		solar: [1500, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1500],
		Leap: false
	},
	{
		solar: [1500, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1500],
		Leap: false
	},
	{
		solar: [1500, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1500],
		Leap: false
	},
	{
		solar: [1500, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1500],
		Leap: false
	},
	{
		solar: [1500, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1500],
		Leap: false
	},
	{
		solar: [1500, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1500],
		Leap: false
	},
	{
		solar: [1500, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1500],
		Leap: false
	},
	{
		solar: [1500, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1500],
		Leap: false
	},
	{
		solar: [1500, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1500],
		Leap: false
	},
	{
		solar: [1500, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1500],
		Leap: false
	},
	{
		solar: [1500, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1500],
		Leap: false
	},
	{
		solar: [1500, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1500],
		Leap: false
	},
	{
		solar: [1500, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1500],
		Leap: false
	},
	{
		solar: [1500, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1500],
		Leap: false
	},
	{
		solar: [1500, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1500],
		Leap: false
	},
	{
		solar: [1500, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1500],
		Leap: false
	},
	{
		solar: [1500, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1500],
		Leap: false
	},
	{
		solar: [1500, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1500],
		Leap: false
	},
	{
		solar: [1500, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1500],
		Leap: false
	},
	{
		solar: [1500, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1500],
		Leap: false
	},
	{
		solar: [1500, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1500],
		Leap: false
	},
	{
		solar: [1500, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1500],
		Leap: false
	},
	{
		solar: [1500, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1500],
		Leap: false
	},
	{
		solar: [1500, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1500],
		Leap: false
	},
	{
		solar: [1500, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1500],
		Leap: false
	},
	{
		solar: [1500, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1500],
		Leap: false
	},
	{
		solar: [1500, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1500],
		Leap: false
	},
	{
		solar: [1500, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1500],
		Leap: false
	},
	{
		solar: [1500, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1500],
		Leap: false
	},
	{
		solar: [1500, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1500],
		Leap: false
	},
	{
		solar: [1500, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1500],
		Leap: false
	},
	{
		solar: [1500, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1500],
		Leap: false
	},
	{
		solar: [1500, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1500],
		Leap: false
	},
	{
		solar: [1500, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1500],
		Leap: false
	},
	{
		solar: [1500, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1500],
		Leap: false
	},
	{
		solar: [1500, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1500],
		Leap: false
	},
	{
		solar: [1500, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1500],
		Leap: false
	},
	{
		solar: [1500, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1500],
		Leap: false
	},
	{
		solar: [1500, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1500],
		Leap: false
	},
	{
		solar: [1500, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1500],
		Leap: false
	},
	{
		solar: [1500, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1500],
		Leap: false
	},
	{
		solar: [1500, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1500],
		Leap: false
	},
	{
		solar: [1500, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1500],
		Leap: false
	},
	{
		solar: [1500, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1500],
		Leap: false
	},
	{
		solar: [1500, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1500],
		Leap: false
	},
	{
		solar: [1500, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1500],
		Leap: false
	},
	{
		solar: [1503, 0, 1],
		Dow: 2,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1503],
		Leap: true
	},
	{
		solar: [1503, 0, 2],
		Dow: 3,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1503],
		Leap: true
	},
	{
		solar: [1503, 0, 3],
		Dow: 4,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1503],
		Leap: true
	},
	{
		solar: [1503, 0, 4],
		Dow: 5,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1503],
		Leap: true
	},
	{
		solar: [1503, 0, 5],
		Dow: 6,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1503],
		Leap: true
	},
	{
		solar: [1503, 0, 30],
		Dow: 3,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1503],
		Leap: true
	},
	{
		solar: [1503, 0, 31],
		Dow: 4,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1503],
		Leap: true
	},
	{
		solar: [1503, 1, 1],
		Dow: 5,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1503],
		Leap: true
	},
	{
		solar: [1503, 1, 2],
		Dow: 6,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1503],
		Leap: true
	},
	{
		solar: [1503, 1, 30],
		Dow: 6,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [9, 1503],
		Leap: true
	},
	{
		solar: [1503, 1, 31],
		Dow: 0,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1503],
		Leap: true
	},
	{
		solar: [1503, 2, 1],
		Dow: 1,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1503],
		Leap: true
	},
	{
		solar: [1503, 2, 2],
		Dow: 2,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1503],
		Leap: true
	},
	{
		solar: [1503, 2, 30],
		Dow: 2,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1503],
		Leap: true
	},
	{
		solar: [1503, 2, 31],
		Dow: 3,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1503],
		Leap: true
	},
	{
		solar: [1503, 3, 1],
		Dow: 4,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1503],
		Leap: true
	},
	{
		solar: [1503, 3, 2],
		Dow: 5,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1503],
		Leap: true
	},
	{
		solar: [1503, 3, 30],
		Dow: 5,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1503],
		Leap: true
	},
	{
		solar: [1503, 3, 31],
		Dow: 6,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1503],
		Leap: true
	},
	{
		solar: [1503, 4, 1],
		Dow: 0,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1503],
		Leap: true
	},
	{
		solar: [1503, 4, 2],
		Dow: 1,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1503],
		Leap: true
	},
	{
		solar: [1503, 4, 30],
		Dow: 1,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1503],
		Leap: true
	},
	{
		solar: [1503, 4, 31],
		Dow: 2,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1503],
		Leap: true
	},
	{
		solar: [1503, 5, 1],
		Dow: 3,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1503],
		Leap: true
	},
	{
		solar: [1503, 5, 2],
		Dow: 4,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1503],
		Leap: true
	},
	{
		solar: [1503, 5, 30],
		Dow: 4,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1503],
		Leap: true
	},
	{
		solar: [1503, 5, 31],
		Dow: 5,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1503],
		Leap: true
	},
	{
		solar: [1503, 6, 1],
		Dow: 6,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [27, 1503],
		Leap: true
	},
	{
		solar: [1503, 6, 2],
		Dow: 0,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1503],
		Leap: true
	},
	{
		solar: [1503, 6, 29],
		Dow: 6,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [31, 1503],
		Leap: true
	},
	{
		solar: [1503, 6, 30],
		Dow: 0,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1503],
		Leap: true
	},
	{
		solar: [1503, 7, 1],
		Dow: 1,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1503],
		Leap: true
	},
	{
		solar: [1503, 7, 2],
		Dow: 2,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1503],
		Leap: true
	},
	{
		solar: [1503, 7, 29],
		Dow: 1,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1503],
		Leap: true
	},
	{
		solar: [1503, 7, 30],
		Dow: 2,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1503],
		Leap: true
	},
	{
		solar: [1503, 8, 1],
		Dow: 3,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1503],
		Leap: true
	},
	{
		solar: [1503, 8, 2],
		Dow: 4,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1503],
		Leap: true
	},
	{
		solar: [1503, 8, 29],
		Dow: 3,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1503],
		Leap: true
	},
	{
		solar: [1503, 8, 30],
		Dow: 4,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1503],
		Leap: true
	},
	{
		solar: [1503, 9, 1],
		Dow: 5,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1503],
		Leap: true
	},
	{
		solar: [1503, 9, 2],
		Dow: 6,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1503],
		Leap: true
	},
	{
		solar: [1503, 9, 29],
		Dow: 5,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1503],
		Leap: true
	},
	{
		solar: [1503, 9, 30],
		Dow: 6,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1503],
		Leap: true
	},
	{
		solar: [1503, 10, 1],
		Dow: 0,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1503],
		Leap: true
	},
	{
		solar: [1503, 10, 2],
		Dow: 1,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1503],
		Leap: true
	},
	{
		solar: [1503, 10, 29],
		Dow: 0,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1503],
		Leap: true
	},
	{
		solar: [1503, 10, 30],
		Dow: 1,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1503],
		Leap: true
	},
	{
		solar: [1503, 11, 1],
		Dow: 2,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1503],
		Leap: true
	},
	{
		solar: [1503, 11, 2],
		Dow: 3,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1503],
		Leap: true
	},
	{
		solar: [1503, 11, 26],
		Dow: 6,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [52, 1503],
		Leap: true
	},
	{
		solar: [1503, 11, 27],
		Dow: 0,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1503],
		Leap: true
	},
	{
		solar: [1503, 11, 28],
		Dow: 1,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1503],
		Leap: true
	},
	{
		solar: [1503, 11, 29],
		Dow: 2,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1503],
		Leap: true
	},
	{
		solar: [1503, 11, 30],
		Dow: 3,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1503],
		Leap: true
	},
	{
		solar: [1506, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1505],
		Leap: false
	},
	{
		solar: [1506, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1506],
		Leap: false
	},
	{
		solar: [1506, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1506],
		Leap: false
	},
	{
		solar: [1506, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1506],
		Leap: false
	},
	{
		solar: [1506, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1506],
		Leap: false
	},
	{
		solar: [1506, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1506],
		Leap: false
	},
	{
		solar: [1506, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1506],
		Leap: false
	},
	{
		solar: [1506, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1506],
		Leap: false
	},
	{
		solar: [1506, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1506],
		Leap: false
	},
	{
		solar: [1506, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1506],
		Leap: false
	},
	{
		solar: [1506, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1506],
		Leap: false
	},
	{
		solar: [1506, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1506],
		Leap: false
	},
	{
		solar: [1506, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1506],
		Leap: false
	},
	{
		solar: [1506, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1506],
		Leap: false
	},
	{
		solar: [1506, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1506],
		Leap: false
	},
	{
		solar: [1506, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1506],
		Leap: false
	},
	{
		solar: [1506, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1506],
		Leap: false
	},
	{
		solar: [1506, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1506],
		Leap: false
	},
	{
		solar: [1506, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1506],
		Leap: false
	},
	{
		solar: [1506, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1506],
		Leap: false
	},
	{
		solar: [1506, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1506],
		Leap: false
	},
	{
		solar: [1506, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1506],
		Leap: false
	},
	{
		solar: [1506, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1506],
		Leap: false
	},
	{
		solar: [1506, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1506],
		Leap: false
	},
	{
		solar: [1506, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1506],
		Leap: false
	},
	{
		solar: [1506, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1506],
		Leap: false
	},
	{
		solar: [1506, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1506],
		Leap: false
	},
	{
		solar: [1506, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1506],
		Leap: false
	},
	{
		solar: [1506, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1506],
		Leap: false
	},
	{
		solar: [1506, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1506],
		Leap: false
	},
	{
		solar: [1506, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1506],
		Leap: false
	},
	{
		solar: [1506, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1506],
		Leap: false
	},
	{
		solar: [1506, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1506],
		Leap: false
	},
	{
		solar: [1506, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1506],
		Leap: false
	},
	{
		solar: [1506, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1506],
		Leap: false
	},
	{
		solar: [1506, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1506],
		Leap: false
	},
	{
		solar: [1506, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1506],
		Leap: false
	},
	{
		solar: [1506, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1506],
		Leap: false
	},
	{
		solar: [1506, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1506],
		Leap: false
	},
	{
		solar: [1506, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1506],
		Leap: false
	},
	{
		solar: [1506, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1506],
		Leap: false
	},
	{
		solar: [1506, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1506],
		Leap: false
	},
	{
		solar: [1506, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1506],
		Leap: false
	},
	{
		solar: [1506, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1506],
		Leap: false
	},
	{
		solar: [1506, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1506],
		Leap: false
	},
	{
		solar: [1506, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1506],
		Leap: false
	},
	{
		solar: [1506, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1506],
		Leap: false
	},
	{
		solar: [1506, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1506],
		Leap: false
	},
	{
		solar: [1506, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1506],
		Leap: false
	},
	{
		solar: [1506, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1506],
		Leap: false
	},
	{
		solar: [1506, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1506],
		Leap: false
	},
	{
		solar: [1506, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1506],
		Leap: false
	},
	{
		solar: [1506, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1506],
		Leap: false
	},
	{
		solar: [1509, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1509],
		Leap: false
	},
	{
		solar: [1509, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1509],
		Leap: false
	},
	{
		solar: [1509, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1509],
		Leap: false
	},
	{
		solar: [1509, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1509],
		Leap: false
	},
	{
		solar: [1509, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1509],
		Leap: false
	},
	{
		solar: [1509, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1509],
		Leap: false
	},
	{
		solar: [1509, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1509],
		Leap: false
	},
	{
		solar: [1509, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1509],
		Leap: false
	},
	{
		solar: [1509, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1509],
		Leap: false
	},
	{
		solar: [1509, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1509],
		Leap: false
	},
	{
		solar: [1509, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1509],
		Leap: false
	},
	{
		solar: [1509, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1509],
		Leap: false
	},
	{
		solar: [1509, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1509],
		Leap: false
	},
	{
		solar: [1509, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1509],
		Leap: false
	},
	{
		solar: [1509, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1509],
		Leap: false
	},
	{
		solar: [1509, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1509],
		Leap: false
	},
	{
		solar: [1509, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1509],
		Leap: false
	},
	{
		solar: [1509, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1509],
		Leap: false
	},
	{
		solar: [1509, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1509],
		Leap: false
	},
	{
		solar: [1509, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1509],
		Leap: false
	},
	{
		solar: [1509, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1509],
		Leap: false
	},
	{
		solar: [1509, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1509],
		Leap: false
	},
	{
		solar: [1509, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1509],
		Leap: false
	},
	{
		solar: [1509, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1509],
		Leap: false
	},
	{
		solar: [1509, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1509],
		Leap: false
	},
	{
		solar: [1509, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1509],
		Leap: false
	},
	{
		solar: [1509, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1509],
		Leap: false
	},
	{
		solar: [1509, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1509],
		Leap: false
	},
	{
		solar: [1509, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1509],
		Leap: false
	},
	{
		solar: [1509, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1509],
		Leap: false
	},
	{
		solar: [1509, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1509],
		Leap: false
	},
	{
		solar: [1509, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1509],
		Leap: false
	},
	{
		solar: [1509, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1509],
		Leap: false
	},
	{
		solar: [1509, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1509],
		Leap: false
	},
	{
		solar: [1509, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1509],
		Leap: false
	},
	{
		solar: [1509, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1509],
		Leap: false
	},
	{
		solar: [1509, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1509],
		Leap: false
	},
	{
		solar: [1509, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1509],
		Leap: false
	},
	{
		solar: [1509, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1509],
		Leap: false
	},
	{
		solar: [1509, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1509],
		Leap: false
	},
	{
		solar: [1509, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1509],
		Leap: false
	},
	{
		solar: [1509, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1509],
		Leap: false
	},
	{
		solar: [1509, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1509],
		Leap: false
	},
	{
		solar: [1509, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1509],
		Leap: false
	},
	{
		solar: [1509, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1509],
		Leap: false
	},
	{
		solar: [1509, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1509],
		Leap: false
	},
	{
		solar: [1509, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1509],
		Leap: false
	},
	{
		solar: [1509, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1509],
		Leap: false
	},
	{
		solar: [1509, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1509],
		Leap: false
	},
	{
		solar: [1509, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1509],
		Leap: false
	},
	{
		solar: [1509, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1509],
		Leap: false
	},
	{
		solar: [1509, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1509],
		Leap: false
	},
	{
		solar: [1509, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1509],
		Leap: false
	},
	{
		solar: [1512, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1512],
		Leap: false
	},
	{
		solar: [1512, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1512],
		Leap: false
	},
	{
		solar: [1512, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1512],
		Leap: false
	},
	{
		solar: [1512, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1512],
		Leap: false
	},
	{
		solar: [1512, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1512],
		Leap: false
	},
	{
		solar: [1512, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1512],
		Leap: false
	},
	{
		solar: [1512, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1512],
		Leap: false
	},
	{
		solar: [1512, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1512],
		Leap: false
	},
	{
		solar: [1512, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1512],
		Leap: false
	},
	{
		solar: [1512, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1512],
		Leap: false
	},
	{
		solar: [1512, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1512],
		Leap: false
	},
	{
		solar: [1512, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1512],
		Leap: false
	},
	{
		solar: [1512, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1512],
		Leap: false
	},
	{
		solar: [1512, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1512],
		Leap: false
	},
	{
		solar: [1512, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1512],
		Leap: false
	},
	{
		solar: [1512, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1512],
		Leap: false
	},
	{
		solar: [1512, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1512],
		Leap: false
	},
	{
		solar: [1512, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1512],
		Leap: false
	},
	{
		solar: [1512, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1512],
		Leap: false
	},
	{
		solar: [1512, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1512],
		Leap: false
	},
	{
		solar: [1512, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1512],
		Leap: false
	},
	{
		solar: [1512, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1512],
		Leap: false
	},
	{
		solar: [1512, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1512],
		Leap: false
	},
	{
		solar: [1512, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1512],
		Leap: false
	},
	{
		solar: [1512, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1512],
		Leap: false
	},
	{
		solar: [1512, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1512],
		Leap: false
	},
	{
		solar: [1512, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1512],
		Leap: false
	},
	{
		solar: [1512, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1512],
		Leap: false
	},
	{
		solar: [1512, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1512],
		Leap: false
	},
	{
		solar: [1512, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1512],
		Leap: false
	},
	{
		solar: [1512, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1512],
		Leap: false
	},
	{
		solar: [1512, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1512],
		Leap: false
	},
	{
		solar: [1512, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1512],
		Leap: false
	},
	{
		solar: [1512, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1512],
		Leap: false
	},
	{
		solar: [1512, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1512],
		Leap: false
	},
	{
		solar: [1512, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1512],
		Leap: false
	},
	{
		solar: [1512, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1512],
		Leap: false
	},
	{
		solar: [1512, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1512],
		Leap: false
	},
	{
		solar: [1512, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1512],
		Leap: false
	},
	{
		solar: [1512, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1512],
		Leap: false
	},
	{
		solar: [1512, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1512],
		Leap: false
	},
	{
		solar: [1512, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1512],
		Leap: false
	},
	{
		solar: [1512, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1512],
		Leap: false
	},
	{
		solar: [1512, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1512],
		Leap: false
	},
	{
		solar: [1512, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1512],
		Leap: false
	},
	{
		solar: [1512, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1512],
		Leap: false
	},
	{
		solar: [1512, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1512],
		Leap: false
	},
	{
		solar: [1512, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1512],
		Leap: false
	},
	{
		solar: [1512, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1512],
		Leap: false
	},
	{
		solar: [1512, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1512],
		Leap: false
	},
	{
		solar: [1512, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1512],
		Leap: false
	},
	{
		solar: [1512, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1512],
		Leap: false
	},
	{
		solar: [1512, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1513],
		Leap: false
	},
	{
		solar: [1515, 0, 1],
		Dow: 3,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1515],
		Leap: true
	},
	{
		solar: [1515, 0, 2],
		Dow: 4,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1515],
		Leap: true
	},
	{
		solar: [1515, 0, 3],
		Dow: 5,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1515],
		Leap: true
	},
	{
		solar: [1515, 0, 4],
		Dow: 6,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1515],
		Leap: true
	},
	{
		solar: [1515, 0, 5],
		Dow: 0,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1515],
		Leap: true
	},
	{
		solar: [1515, 0, 30],
		Dow: 4,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1515],
		Leap: true
	},
	{
		solar: [1515, 0, 31],
		Dow: 5,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1515],
		Leap: true
	},
	{
		solar: [1515, 1, 1],
		Dow: 6,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1515],
		Leap: true
	},
	{
		solar: [1515, 1, 2],
		Dow: 0,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1515],
		Leap: true
	},
	{
		solar: [1515, 1, 30],
		Dow: 0,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1515],
		Leap: true
	},
	{
		solar: [1515, 1, 31],
		Dow: 1,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1515],
		Leap: true
	},
	{
		solar: [1515, 2, 1],
		Dow: 2,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1515],
		Leap: true
	},
	{
		solar: [1515, 2, 2],
		Dow: 3,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1515],
		Leap: true
	},
	{
		solar: [1515, 2, 30],
		Dow: 3,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1515],
		Leap: true
	},
	{
		solar: [1515, 2, 31],
		Dow: 4,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1515],
		Leap: true
	},
	{
		solar: [1515, 3, 1],
		Dow: 5,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1515],
		Leap: true
	},
	{
		solar: [1515, 3, 2],
		Dow: 6,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1515],
		Leap: true
	},
	{
		solar: [1515, 3, 30],
		Dow: 6,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1515],
		Leap: true
	},
	{
		solar: [1515, 3, 31],
		Dow: 0,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1515],
		Leap: true
	},
	{
		solar: [1515, 4, 1],
		Dow: 1,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1515],
		Leap: true
	},
	{
		solar: [1515, 4, 2],
		Dow: 2,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1515],
		Leap: true
	},
	{
		solar: [1515, 4, 30],
		Dow: 2,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1515],
		Leap: true
	},
	{
		solar: [1515, 4, 31],
		Dow: 3,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1515],
		Leap: true
	},
	{
		solar: [1515, 5, 1],
		Dow: 4,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1515],
		Leap: true
	},
	{
		solar: [1515, 5, 2],
		Dow: 5,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1515],
		Leap: true
	},
	{
		solar: [1515, 5, 30],
		Dow: 5,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1515],
		Leap: true
	},
	{
		solar: [1515, 5, 31],
		Dow: 6,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1515],
		Leap: true
	},
	{
		solar: [1515, 6, 1],
		Dow: 0,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1515],
		Leap: true
	},
	{
		solar: [1515, 6, 2],
		Dow: 1,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1515],
		Leap: true
	},
	{
		solar: [1515, 6, 29],
		Dow: 0,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1515],
		Leap: true
	},
	{
		solar: [1515, 6, 30],
		Dow: 1,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1515],
		Leap: true
	},
	{
		solar: [1515, 7, 1],
		Dow: 2,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1515],
		Leap: true
	},
	{
		solar: [1515, 7, 2],
		Dow: 3,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1515],
		Leap: true
	},
	{
		solar: [1515, 7, 29],
		Dow: 2,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1515],
		Leap: true
	},
	{
		solar: [1515, 7, 30],
		Dow: 3,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1515],
		Leap: true
	},
	{
		solar: [1515, 8, 1],
		Dow: 4,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1515],
		Leap: true
	},
	{
		solar: [1515, 8, 2],
		Dow: 5,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1515],
		Leap: true
	},
	{
		solar: [1515, 8, 29],
		Dow: 4,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1515],
		Leap: true
	},
	{
		solar: [1515, 8, 30],
		Dow: 5,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1515],
		Leap: true
	},
	{
		solar: [1515, 9, 1],
		Dow: 6,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1515],
		Leap: true
	},
	{
		solar: [1515, 9, 2],
		Dow: 0,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1515],
		Leap: true
	},
	{
		solar: [1515, 9, 29],
		Dow: 6,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1515],
		Leap: true
	},
	{
		solar: [1515, 9, 30],
		Dow: 0,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1515],
		Leap: true
	},
	{
		solar: [1515, 10, 1],
		Dow: 1,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1515],
		Leap: true
	},
	{
		solar: [1515, 10, 2],
		Dow: 2,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1515],
		Leap: true
	},
	{
		solar: [1515, 10, 29],
		Dow: 1,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1515],
		Leap: true
	},
	{
		solar: [1515, 10, 30],
		Dow: 2,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1515],
		Leap: true
	},
	{
		solar: [1515, 11, 1],
		Dow: 3,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1515],
		Leap: true
	},
	{
		solar: [1515, 11, 2],
		Dow: 4,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1515],
		Leap: true
	},
	{
		solar: [1515, 11, 26],
		Dow: 0,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1515],
		Leap: true
	},
	{
		solar: [1515, 11, 27],
		Dow: 1,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1515],
		Leap: true
	},
	{
		solar: [1515, 11, 28],
		Dow: 2,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1515],
		Leap: true
	},
	{
		solar: [1515, 11, 29],
		Dow: 3,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1515],
		Leap: true
	},
	{
		solar: [1515, 11, 30],
		Dow: 4,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1515],
		Leap: true
	},
	{
		solar: [1518, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1518],
		Leap: false
	},
	{
		solar: [1518, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1518],
		Leap: false
	},
	{
		solar: [1518, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1518],
		Leap: false
	},
	{
		solar: [1518, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1518],
		Leap: false
	},
	{
		solar: [1518, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1518],
		Leap: false
	},
	{
		solar: [1518, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1518],
		Leap: false
	},
	{
		solar: [1518, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1518],
		Leap: false
	},
	{
		solar: [1518, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1518],
		Leap: false
	},
	{
		solar: [1518, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1518],
		Leap: false
	},
	{
		solar: [1518, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1518],
		Leap: false
	},
	{
		solar: [1518, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1518],
		Leap: false
	},
	{
		solar: [1518, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1518],
		Leap: false
	},
	{
		solar: [1518, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1518],
		Leap: false
	},
	{
		solar: [1518, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1518],
		Leap: false
	},
	{
		solar: [1518, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1518],
		Leap: false
	},
	{
		solar: [1518, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1518],
		Leap: false
	},
	{
		solar: [1518, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1518],
		Leap: false
	},
	{
		solar: [1518, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1518],
		Leap: false
	},
	{
		solar: [1518, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1518],
		Leap: false
	},
	{
		solar: [1518, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1518],
		Leap: false
	},
	{
		solar: [1518, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1518],
		Leap: false
	},
	{
		solar: [1518, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1518],
		Leap: false
	},
	{
		solar: [1518, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1518],
		Leap: false
	},
	{
		solar: [1518, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1518],
		Leap: false
	},
	{
		solar: [1518, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1518],
		Leap: false
	},
	{
		solar: [1518, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1518],
		Leap: false
	},
	{
		solar: [1518, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1518],
		Leap: false
	},
	{
		solar: [1518, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1518],
		Leap: false
	},
	{
		solar: [1518, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1518],
		Leap: false
	},
	{
		solar: [1518, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1518],
		Leap: false
	},
	{
		solar: [1518, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1518],
		Leap: false
	},
	{
		solar: [1518, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1518],
		Leap: false
	},
	{
		solar: [1518, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1518],
		Leap: false
	},
	{
		solar: [1518, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1518],
		Leap: false
	},
	{
		solar: [1518, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1518],
		Leap: false
	},
	{
		solar: [1518, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1518],
		Leap: false
	},
	{
		solar: [1518, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1518],
		Leap: false
	},
	{
		solar: [1518, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1518],
		Leap: false
	},
	{
		solar: [1518, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1518],
		Leap: false
	},
	{
		solar: [1518, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1518],
		Leap: false
	},
	{
		solar: [1518, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1518],
		Leap: false
	},
	{
		solar: [1518, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1518],
		Leap: false
	},
	{
		solar: [1518, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1518],
		Leap: false
	},
	{
		solar: [1518, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1518],
		Leap: false
	},
	{
		solar: [1518, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1518],
		Leap: false
	},
	{
		solar: [1518, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1518],
		Leap: false
	},
	{
		solar: [1518, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1518],
		Leap: false
	},
	{
		solar: [1518, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1518],
		Leap: false
	},
	{
		solar: [1518, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1518],
		Leap: false
	},
	{
		solar: [1518, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1518],
		Leap: false
	},
	{
		solar: [1518, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1518],
		Leap: false
	},
	{
		solar: [1518, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1518],
		Leap: false
	},
	{
		solar: [1518, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1519],
		Leap: false
	},
	{
		solar: [1521, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1520],
		Leap: false
	},
	{
		solar: [1521, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1520],
		Leap: false
	},
	{
		solar: [1521, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1520],
		Leap: false
	},
	{
		solar: [1521, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1521],
		Leap: false
	},
	{
		solar: [1521, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1521],
		Leap: false
	},
	{
		solar: [1521, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1521],
		Leap: false
	},
	{
		solar: [1521, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1521],
		Leap: false
	},
	{
		solar: [1521, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1521],
		Leap: false
	},
	{
		solar: [1521, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1521],
		Leap: false
	},
	{
		solar: [1521, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1521],
		Leap: false
	},
	{
		solar: [1521, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1521],
		Leap: false
	},
	{
		solar: [1521, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1521],
		Leap: false
	},
	{
		solar: [1521, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1521],
		Leap: false
	},
	{
		solar: [1521, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1521],
		Leap: false
	},
	{
		solar: [1521, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1521],
		Leap: false
	},
	{
		solar: [1521, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1521],
		Leap: false
	},
	{
		solar: [1521, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1521],
		Leap: false
	},
	{
		solar: [1521, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1521],
		Leap: false
	},
	{
		solar: [1521, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1521],
		Leap: false
	},
	{
		solar: [1521, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1521],
		Leap: false
	},
	{
		solar: [1521, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1521],
		Leap: false
	},
	{
		solar: [1521, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1521],
		Leap: false
	},
	{
		solar: [1521, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1521],
		Leap: false
	},
	{
		solar: [1521, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1521],
		Leap: false
	},
	{
		solar: [1521, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1521],
		Leap: false
	},
	{
		solar: [1521, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1521],
		Leap: false
	},
	{
		solar: [1521, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1521],
		Leap: false
	},
	{
		solar: [1521, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1521],
		Leap: false
	},
	{
		solar: [1521, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1521],
		Leap: false
	},
	{
		solar: [1521, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1521],
		Leap: false
	},
	{
		solar: [1521, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1521],
		Leap: false
	},
	{
		solar: [1521, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1521],
		Leap: false
	},
	{
		solar: [1521, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1521],
		Leap: false
	},
	{
		solar: [1521, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1521],
		Leap: false
	},
	{
		solar: [1521, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1521],
		Leap: false
	},
	{
		solar: [1521, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1521],
		Leap: false
	},
	{
		solar: [1521, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1521],
		Leap: false
	},
	{
		solar: [1521, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1521],
		Leap: false
	},
	{
		solar: [1521, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1521],
		Leap: false
	},
	{
		solar: [1521, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1521],
		Leap: false
	},
	{
		solar: [1521, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1521],
		Leap: false
	},
	{
		solar: [1521, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1521],
		Leap: false
	},
	{
		solar: [1521, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1521],
		Leap: false
	},
	{
		solar: [1521, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1521],
		Leap: false
	},
	{
		solar: [1521, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1521],
		Leap: false
	},
	{
		solar: [1521, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1521],
		Leap: false
	},
	{
		solar: [1521, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1521],
		Leap: false
	},
	{
		solar: [1521, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1521],
		Leap: false
	},
	{
		solar: [1521, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1521],
		Leap: false
	},
	{
		solar: [1521, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1521],
		Leap: false
	},
	{
		solar: [1521, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1521],
		Leap: false
	},
	{
		solar: [1521, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1521],
		Leap: false
	},
	{
		solar: [1521, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1521],
		Leap: false
	},
	{
		solar: [1524, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1524],
		Leap: false
	},
	{
		solar: [1524, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1524],
		Leap: false
	},
	{
		solar: [1524, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1524],
		Leap: false
	},
	{
		solar: [1524, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1524],
		Leap: false
	},
	{
		solar: [1524, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1524],
		Leap: false
	},
	{
		solar: [1524, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1524],
		Leap: false
	},
	{
		solar: [1524, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1524],
		Leap: false
	},
	{
		solar: [1524, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1524],
		Leap: false
	},
	{
		solar: [1524, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1524],
		Leap: false
	},
	{
		solar: [1524, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1524],
		Leap: false
	},
	{
		solar: [1524, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1524],
		Leap: false
	},
	{
		solar: [1524, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1524],
		Leap: false
	},
	{
		solar: [1524, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1524],
		Leap: false
	},
	{
		solar: [1524, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1524],
		Leap: false
	},
	{
		solar: [1524, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1524],
		Leap: false
	},
	{
		solar: [1524, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1524],
		Leap: false
	},
	{
		solar: [1524, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1524],
		Leap: false
	},
	{
		solar: [1524, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1524],
		Leap: false
	},
	{
		solar: [1524, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1524],
		Leap: false
	},
	{
		solar: [1524, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1524],
		Leap: false
	},
	{
		solar: [1524, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1524],
		Leap: false
	},
	{
		solar: [1524, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1524],
		Leap: false
	},
	{
		solar: [1524, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1524],
		Leap: false
	},
	{
		solar: [1524, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1524],
		Leap: false
	},
	{
		solar: [1524, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1524],
		Leap: false
	},
	{
		solar: [1524, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1524],
		Leap: false
	},
	{
		solar: [1524, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1524],
		Leap: false
	},
	{
		solar: [1524, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1524],
		Leap: false
	},
	{
		solar: [1524, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1524],
		Leap: false
	},
	{
		solar: [1524, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1524],
		Leap: false
	},
	{
		solar: [1524, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1524],
		Leap: false
	},
	{
		solar: [1524, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1524],
		Leap: false
	},
	{
		solar: [1524, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1524],
		Leap: false
	},
	{
		solar: [1524, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1524],
		Leap: false
	},
	{
		solar: [1524, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1524],
		Leap: false
	},
	{
		solar: [1524, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1524],
		Leap: false
	},
	{
		solar: [1524, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1524],
		Leap: false
	},
	{
		solar: [1524, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1524],
		Leap: false
	},
	{
		solar: [1524, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1524],
		Leap: false
	},
	{
		solar: [1524, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1524],
		Leap: false
	},
	{
		solar: [1524, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1524],
		Leap: false
	},
	{
		solar: [1524, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1524],
		Leap: false
	},
	{
		solar: [1524, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1524],
		Leap: false
	},
	{
		solar: [1524, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1524],
		Leap: false
	},
	{
		solar: [1524, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1524],
		Leap: false
	},
	{
		solar: [1524, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1524],
		Leap: false
	},
	{
		solar: [1524, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1524],
		Leap: false
	},
	{
		solar: [1524, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1524],
		Leap: false
	},
	{
		solar: [1524, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1524],
		Leap: false
	},
	{
		solar: [1524, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1524],
		Leap: false
	},
	{
		solar: [1524, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1524],
		Leap: false
	},
	{
		solar: [1524, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1525],
		Leap: false
	},
	{
		solar: [1524, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1525],
		Leap: false
	},
	{
		solar: [1527, 0, 1],
		Dow: 4,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1526],
		Leap: true
	},
	{
		solar: [1527, 0, 2],
		Dow: 5,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1526],
		Leap: true
	},
	{
		solar: [1527, 0, 3],
		Dow: 6,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1526],
		Leap: true
	},
	{
		solar: [1527, 0, 4],
		Dow: 0,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1527],
		Leap: true
	},
	{
		solar: [1527, 0, 5],
		Dow: 1,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1527],
		Leap: true
	},
	{
		solar: [1527, 0, 30],
		Dow: 5,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1527],
		Leap: true
	},
	{
		solar: [1527, 0, 31],
		Dow: 6,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1527],
		Leap: true
	},
	{
		solar: [1527, 1, 1],
		Dow: 0,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1527],
		Leap: true
	},
	{
		solar: [1527, 1, 2],
		Dow: 1,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1527],
		Leap: true
	},
	{
		solar: [1527, 1, 30],
		Dow: 1,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1527],
		Leap: true
	},
	{
		solar: [1527, 1, 31],
		Dow: 2,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1527],
		Leap: true
	},
	{
		solar: [1527, 2, 1],
		Dow: 3,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1527],
		Leap: true
	},
	{
		solar: [1527, 2, 2],
		Dow: 4,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1527],
		Leap: true
	},
	{
		solar: [1527, 2, 30],
		Dow: 4,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1527],
		Leap: true
	},
	{
		solar: [1527, 2, 31],
		Dow: 5,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1527],
		Leap: true
	},
	{
		solar: [1527, 3, 1],
		Dow: 6,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1527],
		Leap: true
	},
	{
		solar: [1527, 3, 2],
		Dow: 0,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1527],
		Leap: true
	},
	{
		solar: [1527, 3, 30],
		Dow: 0,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1527],
		Leap: true
	},
	{
		solar: [1527, 3, 31],
		Dow: 1,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1527],
		Leap: true
	},
	{
		solar: [1527, 4, 1],
		Dow: 2,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1527],
		Leap: true
	},
	{
		solar: [1527, 4, 2],
		Dow: 3,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1527],
		Leap: true
	},
	{
		solar: [1527, 4, 30],
		Dow: 3,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1527],
		Leap: true
	},
	{
		solar: [1527, 4, 31],
		Dow: 4,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1527],
		Leap: true
	},
	{
		solar: [1527, 5, 1],
		Dow: 5,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1527],
		Leap: true
	},
	{
		solar: [1527, 5, 2],
		Dow: 6,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1527],
		Leap: true
	},
	{
		solar: [1527, 5, 30],
		Dow: 6,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1527],
		Leap: true
	},
	{
		solar: [1527, 5, 31],
		Dow: 0,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1527],
		Leap: true
	},
	{
		solar: [1527, 6, 1],
		Dow: 1,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1527],
		Leap: true
	},
	{
		solar: [1527, 6, 2],
		Dow: 2,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1527],
		Leap: true
	},
	{
		solar: [1527, 6, 29],
		Dow: 1,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1527],
		Leap: true
	},
	{
		solar: [1527, 6, 30],
		Dow: 2,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1527],
		Leap: true
	},
	{
		solar: [1527, 7, 1],
		Dow: 3,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1527],
		Leap: true
	},
	{
		solar: [1527, 7, 2],
		Dow: 4,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1527],
		Leap: true
	},
	{
		solar: [1527, 7, 29],
		Dow: 3,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1527],
		Leap: true
	},
	{
		solar: [1527, 7, 30],
		Dow: 4,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1527],
		Leap: true
	},
	{
		solar: [1527, 8, 1],
		Dow: 5,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1527],
		Leap: true
	},
	{
		solar: [1527, 8, 2],
		Dow: 6,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1527],
		Leap: true
	},
	{
		solar: [1527, 8, 29],
		Dow: 5,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1527],
		Leap: true
	},
	{
		solar: [1527, 8, 30],
		Dow: 6,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1527],
		Leap: true
	},
	{
		solar: [1527, 9, 1],
		Dow: 0,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1527],
		Leap: true
	},
	{
		solar: [1527, 9, 2],
		Dow: 1,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1527],
		Leap: true
	},
	{
		solar: [1527, 9, 29],
		Dow: 0,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1527],
		Leap: true
	},
	{
		solar: [1527, 9, 30],
		Dow: 1,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1527],
		Leap: true
	},
	{
		solar: [1527, 10, 1],
		Dow: 2,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1527],
		Leap: true
	},
	{
		solar: [1527, 10, 2],
		Dow: 3,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1527],
		Leap: true
	},
	{
		solar: [1527, 10, 29],
		Dow: 2,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1527],
		Leap: true
	},
	{
		solar: [1527, 10, 30],
		Dow: 3,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1527],
		Leap: true
	},
	{
		solar: [1527, 11, 1],
		Dow: 4,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1527],
		Leap: true
	},
	{
		solar: [1527, 11, 2],
		Dow: 5,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1527],
		Leap: true
	},
	{
		solar: [1527, 11, 26],
		Dow: 1,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1527],
		Leap: true
	},
	{
		solar: [1527, 11, 27],
		Dow: 2,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1527],
		Leap: true
	},
	{
		solar: [1527, 11, 28],
		Dow: 3,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1527],
		Leap: true
	},
	{
		solar: [1527, 11, 29],
		Dow: 4,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1527],
		Leap: true
	},
	{
		solar: [1527, 11, 30],
		Dow: 5,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1527],
		Leap: true
	},
	{
		solar: [1530, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1530],
		Leap: false
	},
	{
		solar: [1530, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1530],
		Leap: false
	},
	{
		solar: [1530, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1530],
		Leap: false
	},
	{
		solar: [1530, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1530],
		Leap: false
	},
	{
		solar: [1530, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1530],
		Leap: false
	},
	{
		solar: [1530, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1530],
		Leap: false
	},
	{
		solar: [1530, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1530],
		Leap: false
	},
	{
		solar: [1530, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1530],
		Leap: false
	},
	{
		solar: [1530, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1530],
		Leap: false
	},
	{
		solar: [1530, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1530],
		Leap: false
	},
	{
		solar: [1530, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1530],
		Leap: false
	},
	{
		solar: [1530, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1530],
		Leap: false
	},
	{
		solar: [1530, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1530],
		Leap: false
	},
	{
		solar: [1530, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1530],
		Leap: false
	},
	{
		solar: [1530, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1530],
		Leap: false
	},
	{
		solar: [1530, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1530],
		Leap: false
	},
	{
		solar: [1530, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1530],
		Leap: false
	},
	{
		solar: [1530, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1530],
		Leap: false
	},
	{
		solar: [1530, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1530],
		Leap: false
	},
	{
		solar: [1530, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1530],
		Leap: false
	},
	{
		solar: [1530, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1530],
		Leap: false
	},
	{
		solar: [1530, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1530],
		Leap: false
	},
	{
		solar: [1530, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1530],
		Leap: false
	},
	{
		solar: [1530, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1530],
		Leap: false
	},
	{
		solar: [1530, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1530],
		Leap: false
	},
	{
		solar: [1530, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1530],
		Leap: false
	},
	{
		solar: [1530, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1530],
		Leap: false
	},
	{
		solar: [1530, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1530],
		Leap: false
	},
	{
		solar: [1530, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1530],
		Leap: false
	},
	{
		solar: [1530, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1530],
		Leap: false
	},
	{
		solar: [1530, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1530],
		Leap: false
	},
	{
		solar: [1530, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1530],
		Leap: false
	},
	{
		solar: [1530, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1530],
		Leap: false
	},
	{
		solar: [1530, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1530],
		Leap: false
	},
	{
		solar: [1530, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1530],
		Leap: false
	},
	{
		solar: [1530, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1530],
		Leap: false
	},
	{
		solar: [1530, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1530],
		Leap: false
	},
	{
		solar: [1530, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1530],
		Leap: false
	},
	{
		solar: [1530, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1530],
		Leap: false
	},
	{
		solar: [1530, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1530],
		Leap: false
	},
	{
		solar: [1530, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1530],
		Leap: false
	},
	{
		solar: [1530, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1530],
		Leap: false
	},
	{
		solar: [1530, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1530],
		Leap: false
	},
	{
		solar: [1530, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1530],
		Leap: false
	},
	{
		solar: [1530, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1530],
		Leap: false
	},
	{
		solar: [1530, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1530],
		Leap: false
	},
	{
		solar: [1530, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1530],
		Leap: false
	},
	{
		solar: [1530, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1530],
		Leap: false
	},
	{
		solar: [1530, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1530],
		Leap: false
	},
	{
		solar: [1530, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1530],
		Leap: false
	},
	{
		solar: [1530, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1530],
		Leap: false
	},
	{
		solar: [1530, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1531],
		Leap: false
	},
	{
		solar: [1530, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1531],
		Leap: false
	},
	{
		solar: [1533, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1532],
		Leap: false
	},
	{
		solar: [1533, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1532],
		Leap: false
	},
	{
		solar: [1533, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1533],
		Leap: false
	},
	{
		solar: [1533, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1533],
		Leap: false
	},
	{
		solar: [1533, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1533],
		Leap: false
	},
	{
		solar: [1533, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1533],
		Leap: false
	},
	{
		solar: [1533, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1533],
		Leap: false
	},
	{
		solar: [1533, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1533],
		Leap: false
	},
	{
		solar: [1533, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1533],
		Leap: false
	},
	{
		solar: [1533, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1533],
		Leap: false
	},
	{
		solar: [1533, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1533],
		Leap: false
	},
	{
		solar: [1533, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1533],
		Leap: false
	},
	{
		solar: [1533, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1533],
		Leap: false
	},
	{
		solar: [1533, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1533],
		Leap: false
	},
	{
		solar: [1533, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1533],
		Leap: false
	},
	{
		solar: [1533, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1533],
		Leap: false
	},
	{
		solar: [1533, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1533],
		Leap: false
	},
	{
		solar: [1533, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1533],
		Leap: false
	},
	{
		solar: [1533, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1533],
		Leap: false
	},
	{
		solar: [1533, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1533],
		Leap: false
	},
	{
		solar: [1533, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1533],
		Leap: false
	},
	{
		solar: [1533, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1533],
		Leap: false
	},
	{
		solar: [1533, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1533],
		Leap: false
	},
	{
		solar: [1533, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1533],
		Leap: false
	},
	{
		solar: [1533, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1533],
		Leap: false
	},
	{
		solar: [1533, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1533],
		Leap: false
	},
	{
		solar: [1533, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1533],
		Leap: false
	},
	{
		solar: [1533, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1533],
		Leap: false
	},
	{
		solar: [1533, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1533],
		Leap: false
	},
	{
		solar: [1533, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1533],
		Leap: false
	},
	{
		solar: [1533, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1533],
		Leap: false
	},
	{
		solar: [1533, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1533],
		Leap: false
	},
	{
		solar: [1533, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1533],
		Leap: false
	},
	{
		solar: [1533, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1533],
		Leap: false
	},
	{
		solar: [1533, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1533],
		Leap: false
	},
	{
		solar: [1533, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1533],
		Leap: false
	},
	{
		solar: [1533, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1533],
		Leap: false
	},
	{
		solar: [1533, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1533],
		Leap: false
	},
	{
		solar: [1533, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1533],
		Leap: false
	},
	{
		solar: [1533, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1533],
		Leap: false
	},
	{
		solar: [1533, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1533],
		Leap: false
	},
	{
		solar: [1533, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1533],
		Leap: false
	},
	{
		solar: [1533, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1533],
		Leap: false
	},
	{
		solar: [1533, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1533],
		Leap: false
	},
	{
		solar: [1533, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1533],
		Leap: false
	},
	{
		solar: [1533, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1533],
		Leap: false
	},
	{
		solar: [1533, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1533],
		Leap: false
	},
	{
		solar: [1533, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1533],
		Leap: false
	},
	{
		solar: [1533, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1533],
		Leap: false
	},
	{
		solar: [1533, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1533],
		Leap: false
	},
	{
		solar: [1533, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1533],
		Leap: false
	},
	{
		solar: [1533, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1533],
		Leap: false
	},
	{
		solar: [1533, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1533],
		Leap: false
	},
	{
		solar: [1536, 0, 1],
		Dow: 1,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1536],
		Leap: true
	},
	{
		solar: [1536, 0, 2],
		Dow: 2,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1536],
		Leap: true
	},
	{
		solar: [1536, 0, 3],
		Dow: 3,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1536],
		Leap: true
	},
	{
		solar: [1536, 0, 4],
		Dow: 4,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1536],
		Leap: true
	},
	{
		solar: [1536, 0, 5],
		Dow: 5,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1536],
		Leap: true
	},
	{
		solar: [1536, 0, 30],
		Dow: 2,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1536],
		Leap: true
	},
	{
		solar: [1536, 0, 31],
		Dow: 3,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1536],
		Leap: true
	},
	{
		solar: [1536, 1, 1],
		Dow: 4,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1536],
		Leap: true
	},
	{
		solar: [1536, 1, 2],
		Dow: 5,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1536],
		Leap: true
	},
	{
		solar: [1536, 1, 30],
		Dow: 5,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1536],
		Leap: true
	},
	{
		solar: [1536, 1, 31],
		Dow: 6,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1536],
		Leap: true
	},
	{
		solar: [1536, 2, 1],
		Dow: 0,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1536],
		Leap: true
	},
	{
		solar: [1536, 2, 2],
		Dow: 1,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1536],
		Leap: true
	},
	{
		solar: [1536, 2, 30],
		Dow: 1,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1536],
		Leap: true
	},
	{
		solar: [1536, 2, 31],
		Dow: 2,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1536],
		Leap: true
	},
	{
		solar: [1536, 3, 1],
		Dow: 3,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1536],
		Leap: true
	},
	{
		solar: [1536, 3, 2],
		Dow: 4,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1536],
		Leap: true
	},
	{
		solar: [1536, 3, 30],
		Dow: 4,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1536],
		Leap: true
	},
	{
		solar: [1536, 3, 31],
		Dow: 5,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1536],
		Leap: true
	},
	{
		solar: [1536, 4, 1],
		Dow: 6,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1536],
		Leap: true
	},
	{
		solar: [1536, 4, 2],
		Dow: 0,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1536],
		Leap: true
	},
	{
		solar: [1536, 4, 30],
		Dow: 0,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1536],
		Leap: true
	},
	{
		solar: [1536, 4, 31],
		Dow: 1,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1536],
		Leap: true
	},
	{
		solar: [1536, 5, 1],
		Dow: 2,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1536],
		Leap: true
	},
	{
		solar: [1536, 5, 2],
		Dow: 3,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1536],
		Leap: true
	},
	{
		solar: [1536, 5, 30],
		Dow: 3,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1536],
		Leap: true
	},
	{
		solar: [1536, 5, 31],
		Dow: 4,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1536],
		Leap: true
	},
	{
		solar: [1536, 6, 1],
		Dow: 5,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1536],
		Leap: true
	},
	{
		solar: [1536, 6, 2],
		Dow: 6,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1536],
		Leap: true
	},
	{
		solar: [1536, 6, 29],
		Dow: 5,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1536],
		Leap: true
	},
	{
		solar: [1536, 6, 30],
		Dow: 6,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1536],
		Leap: true
	},
	{
		solar: [1536, 7, 1],
		Dow: 0,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1536],
		Leap: true
	},
	{
		solar: [1536, 7, 2],
		Dow: 1,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1536],
		Leap: true
	},
	{
		solar: [1536, 7, 29],
		Dow: 0,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1536],
		Leap: true
	},
	{
		solar: [1536, 7, 30],
		Dow: 1,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1536],
		Leap: true
	},
	{
		solar: [1536, 8, 1],
		Dow: 2,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1536],
		Leap: true
	},
	{
		solar: [1536, 8, 2],
		Dow: 3,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1536],
		Leap: true
	},
	{
		solar: [1536, 8, 29],
		Dow: 2,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1536],
		Leap: true
	},
	{
		solar: [1536, 8, 30],
		Dow: 3,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1536],
		Leap: true
	},
	{
		solar: [1536, 9, 1],
		Dow: 4,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1536],
		Leap: true
	},
	{
		solar: [1536, 9, 2],
		Dow: 5,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1536],
		Leap: true
	},
	{
		solar: [1536, 9, 29],
		Dow: 4,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1536],
		Leap: true
	},
	{
		solar: [1536, 9, 30],
		Dow: 5,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1536],
		Leap: true
	},
	{
		solar: [1536, 10, 1],
		Dow: 6,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1536],
		Leap: true
	},
	{
		solar: [1536, 10, 2],
		Dow: 0,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1536],
		Leap: true
	},
	{
		solar: [1536, 10, 29],
		Dow: 6,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1536],
		Leap: true
	},
	{
		solar: [1536, 10, 30],
		Dow: 0,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1536],
		Leap: true
	},
	{
		solar: [1536, 11, 1],
		Dow: 1,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1536],
		Leap: true
	},
	{
		solar: [1536, 11, 2],
		Dow: 2,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1536],
		Leap: true
	},
	{
		solar: [1536, 11, 26],
		Dow: 5,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1536],
		Leap: true
	},
	{
		solar: [1536, 11, 27],
		Dow: 6,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1536],
		Leap: true
	},
	{
		solar: [1536, 11, 28],
		Dow: 0,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1537],
		Leap: true
	},
	{
		solar: [1536, 11, 29],
		Dow: 1,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1537],
		Leap: true
	},
	{
		solar: [1536, 11, 30],
		Dow: 2,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1537],
		Leap: true
	},
	{
		solar: [1539, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1538],
		Leap: false
	},
	{
		solar: [1539, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1538],
		Leap: false
	},
	{
		solar: [1539, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1539],
		Leap: false
	},
	{
		solar: [1539, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1539],
		Leap: false
	},
	{
		solar: [1539, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1539],
		Leap: false
	},
	{
		solar: [1539, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1539],
		Leap: false
	},
	{
		solar: [1539, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1539],
		Leap: false
	},
	{
		solar: [1539, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1539],
		Leap: false
	},
	{
		solar: [1539, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1539],
		Leap: false
	},
	{
		solar: [1539, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1539],
		Leap: false
	},
	{
		solar: [1539, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1539],
		Leap: false
	},
	{
		solar: [1539, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1539],
		Leap: false
	},
	{
		solar: [1539, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1539],
		Leap: false
	},
	{
		solar: [1539, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1539],
		Leap: false
	},
	{
		solar: [1539, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1539],
		Leap: false
	},
	{
		solar: [1539, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1539],
		Leap: false
	},
	{
		solar: [1539, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1539],
		Leap: false
	},
	{
		solar: [1539, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1539],
		Leap: false
	},
	{
		solar: [1539, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1539],
		Leap: false
	},
	{
		solar: [1539, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1539],
		Leap: false
	},
	{
		solar: [1539, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1539],
		Leap: false
	},
	{
		solar: [1539, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1539],
		Leap: false
	},
	{
		solar: [1539, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1539],
		Leap: false
	},
	{
		solar: [1539, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1539],
		Leap: false
	},
	{
		solar: [1539, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1539],
		Leap: false
	},
	{
		solar: [1539, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1539],
		Leap: false
	},
	{
		solar: [1539, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1539],
		Leap: false
	},
	{
		solar: [1539, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1539],
		Leap: false
	},
	{
		solar: [1539, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1539],
		Leap: false
	},
	{
		solar: [1539, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1539],
		Leap: false
	},
	{
		solar: [1539, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1539],
		Leap: false
	},
	{
		solar: [1539, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1539],
		Leap: false
	},
	{
		solar: [1539, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1539],
		Leap: false
	},
	{
		solar: [1539, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1539],
		Leap: false
	},
	{
		solar: [1539, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1539],
		Leap: false
	},
	{
		solar: [1539, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1539],
		Leap: false
	},
	{
		solar: [1539, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1539],
		Leap: false
	},
	{
		solar: [1539, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1539],
		Leap: false
	},
	{
		solar: [1539, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1539],
		Leap: false
	},
	{
		solar: [1539, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1539],
		Leap: false
	},
	{
		solar: [1539, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1539],
		Leap: false
	},
	{
		solar: [1539, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1539],
		Leap: false
	},
	{
		solar: [1539, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1539],
		Leap: false
	},
	{
		solar: [1539, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1539],
		Leap: false
	},
	{
		solar: [1539, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1539],
		Leap: false
	},
	{
		solar: [1539, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1539],
		Leap: false
	},
	{
		solar: [1539, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1539],
		Leap: false
	},
	{
		solar: [1539, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1539],
		Leap: false
	},
	{
		solar: [1539, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1539],
		Leap: false
	},
	{
		solar: [1539, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1539],
		Leap: false
	},
	{
		solar: [1539, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1539],
		Leap: false
	},
	{
		solar: [1539, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1539],
		Leap: false
	},
	{
		solar: [1539, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1539],
		Leap: false
	},
	{
		solar: [1542, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1542],
		Leap: false
	},
	{
		solar: [1542, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1542],
		Leap: false
	},
	{
		solar: [1542, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1542],
		Leap: false
	},
	{
		solar: [1542, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1542],
		Leap: false
	},
	{
		solar: [1542, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1542],
		Leap: false
	},
	{
		solar: [1542, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1542],
		Leap: false
	},
	{
		solar: [1542, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1542],
		Leap: false
	},
	{
		solar: [1542, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1542],
		Leap: false
	},
	{
		solar: [1542, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1542],
		Leap: false
	},
	{
		solar: [1542, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1542],
		Leap: false
	},
	{
		solar: [1542, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1542],
		Leap: false
	},
	{
		solar: [1542, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1542],
		Leap: false
	},
	{
		solar: [1542, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1542],
		Leap: false
	},
	{
		solar: [1542, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1542],
		Leap: false
	},
	{
		solar: [1542, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1542],
		Leap: false
	},
	{
		solar: [1542, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1542],
		Leap: false
	},
	{
		solar: [1542, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1542],
		Leap: false
	},
	{
		solar: [1542, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1542],
		Leap: false
	},
	{
		solar: [1542, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1542],
		Leap: false
	},
	{
		solar: [1542, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1542],
		Leap: false
	},
	{
		solar: [1542, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1542],
		Leap: false
	},
	{
		solar: [1542, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1542],
		Leap: false
	},
	{
		solar: [1542, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1542],
		Leap: false
	},
	{
		solar: [1542, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1542],
		Leap: false
	},
	{
		solar: [1542, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1542],
		Leap: false
	},
	{
		solar: [1542, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1542],
		Leap: false
	},
	{
		solar: [1542, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1542],
		Leap: false
	},
	{
		solar: [1542, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1542],
		Leap: false
	},
	{
		solar: [1542, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1542],
		Leap: false
	},
	{
		solar: [1542, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1542],
		Leap: false
	},
	{
		solar: [1542, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1542],
		Leap: false
	},
	{
		solar: [1542, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1542],
		Leap: false
	},
	{
		solar: [1542, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1542],
		Leap: false
	},
	{
		solar: [1542, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1542],
		Leap: false
	},
	{
		solar: [1542, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1542],
		Leap: false
	},
	{
		solar: [1542, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1542],
		Leap: false
	},
	{
		solar: [1542, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1542],
		Leap: false
	},
	{
		solar: [1542, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1542],
		Leap: false
	},
	{
		solar: [1542, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1542],
		Leap: false
	},
	{
		solar: [1542, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1542],
		Leap: false
	},
	{
		solar: [1542, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1542],
		Leap: false
	},
	{
		solar: [1542, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1542],
		Leap: false
	},
	{
		solar: [1542, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1542],
		Leap: false
	},
	{
		solar: [1542, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1542],
		Leap: false
	},
	{
		solar: [1542, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1542],
		Leap: false
	},
	{
		solar: [1542, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1542],
		Leap: false
	},
	{
		solar: [1542, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1542],
		Leap: false
	},
	{
		solar: [1542, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1542],
		Leap: false
	},
	{
		solar: [1542, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1542],
		Leap: false
	},
	{
		solar: [1542, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1542],
		Leap: false
	},
	{
		solar: [1542, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1543],
		Leap: false
	},
	{
		solar: [1542, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1543],
		Leap: false
	},
	{
		solar: [1542, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1543],
		Leap: false
	},
	{
		solar: [1545, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1544],
		Leap: false
	},
	{
		solar: [1545, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1545],
		Leap: false
	},
	{
		solar: [1545, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1545],
		Leap: false
	},
	{
		solar: [1545, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1545],
		Leap: false
	},
	{
		solar: [1545, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1545],
		Leap: false
	},
	{
		solar: [1545, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1545],
		Leap: false
	},
	{
		solar: [1545, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1545],
		Leap: false
	},
	{
		solar: [1545, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1545],
		Leap: false
	},
	{
		solar: [1545, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1545],
		Leap: false
	},
	{
		solar: [1545, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1545],
		Leap: false
	},
	{
		solar: [1545, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1545],
		Leap: false
	},
	{
		solar: [1545, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1545],
		Leap: false
	},
	{
		solar: [1545, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1545],
		Leap: false
	},
	{
		solar: [1545, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1545],
		Leap: false
	},
	{
		solar: [1545, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1545],
		Leap: false
	},
	{
		solar: [1545, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1545],
		Leap: false
	},
	{
		solar: [1545, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1545],
		Leap: false
	},
	{
		solar: [1545, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1545],
		Leap: false
	},
	{
		solar: [1545, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1545],
		Leap: false
	},
	{
		solar: [1545, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1545],
		Leap: false
	},
	{
		solar: [1545, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1545],
		Leap: false
	},
	{
		solar: [1545, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1545],
		Leap: false
	},
	{
		solar: [1545, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1545],
		Leap: false
	},
	{
		solar: [1545, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1545],
		Leap: false
	},
	{
		solar: [1545, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1545],
		Leap: false
	},
	{
		solar: [1545, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1545],
		Leap: false
	},
	{
		solar: [1545, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1545],
		Leap: false
	},
	{
		solar: [1545, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1545],
		Leap: false
	},
	{
		solar: [1545, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1545],
		Leap: false
	},
	{
		solar: [1545, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1545],
		Leap: false
	},
	{
		solar: [1545, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1545],
		Leap: false
	},
	{
		solar: [1545, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1545],
		Leap: false
	},
	{
		solar: [1545, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1545],
		Leap: false
	},
	{
		solar: [1545, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1545],
		Leap: false
	},
	{
		solar: [1545, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1545],
		Leap: false
	},
	{
		solar: [1545, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1545],
		Leap: false
	},
	{
		solar: [1545, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1545],
		Leap: false
	},
	{
		solar: [1545, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1545],
		Leap: false
	},
	{
		solar: [1545, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1545],
		Leap: false
	},
	{
		solar: [1545, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1545],
		Leap: false
	},
	{
		solar: [1545, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1545],
		Leap: false
	},
	{
		solar: [1545, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1545],
		Leap: false
	},
	{
		solar: [1545, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1545],
		Leap: false
	},
	{
		solar: [1545, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1545],
		Leap: false
	},
	{
		solar: [1545, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1545],
		Leap: false
	},
	{
		solar: [1545, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1545],
		Leap: false
	},
	{
		solar: [1545, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1545],
		Leap: false
	},
	{
		solar: [1545, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1545],
		Leap: false
	},
	{
		solar: [1545, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1545],
		Leap: false
	},
	{
		solar: [1545, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1545],
		Leap: false
	},
	{
		solar: [1545, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1545],
		Leap: false
	},
	{
		solar: [1545, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1545],
		Leap: false
	},
	{
		solar: [1545, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1545],
		Leap: false
	},
	{
		solar: [1548, 0, 1],
		Dow: 2,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1548],
		Leap: true
	},
	{
		solar: [1548, 0, 2],
		Dow: 3,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1548],
		Leap: true
	},
	{
		solar: [1548, 0, 3],
		Dow: 4,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1548],
		Leap: true
	},
	{
		solar: [1548, 0, 4],
		Dow: 5,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1548],
		Leap: true
	},
	{
		solar: [1548, 0, 5],
		Dow: 6,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1548],
		Leap: true
	},
	{
		solar: [1548, 0, 30],
		Dow: 3,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1548],
		Leap: true
	},
	{
		solar: [1548, 0, 31],
		Dow: 4,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1548],
		Leap: true
	},
	{
		solar: [1548, 1, 1],
		Dow: 5,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1548],
		Leap: true
	},
	{
		solar: [1548, 1, 2],
		Dow: 6,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1548],
		Leap: true
	},
	{
		solar: [1548, 1, 30],
		Dow: 6,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [9, 1548],
		Leap: true
	},
	{
		solar: [1548, 1, 31],
		Dow: 0,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1548],
		Leap: true
	},
	{
		solar: [1548, 2, 1],
		Dow: 1,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1548],
		Leap: true
	},
	{
		solar: [1548, 2, 2],
		Dow: 2,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1548],
		Leap: true
	},
	{
		solar: [1548, 2, 30],
		Dow: 2,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1548],
		Leap: true
	},
	{
		solar: [1548, 2, 31],
		Dow: 3,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1548],
		Leap: true
	},
	{
		solar: [1548, 3, 1],
		Dow: 4,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1548],
		Leap: true
	},
	{
		solar: [1548, 3, 2],
		Dow: 5,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1548],
		Leap: true
	},
	{
		solar: [1548, 3, 30],
		Dow: 5,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1548],
		Leap: true
	},
	{
		solar: [1548, 3, 31],
		Dow: 6,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1548],
		Leap: true
	},
	{
		solar: [1548, 4, 1],
		Dow: 0,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1548],
		Leap: true
	},
	{
		solar: [1548, 4, 2],
		Dow: 1,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1548],
		Leap: true
	},
	{
		solar: [1548, 4, 30],
		Dow: 1,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1548],
		Leap: true
	},
	{
		solar: [1548, 4, 31],
		Dow: 2,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1548],
		Leap: true
	},
	{
		solar: [1548, 5, 1],
		Dow: 3,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1548],
		Leap: true
	},
	{
		solar: [1548, 5, 2],
		Dow: 4,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1548],
		Leap: true
	},
	{
		solar: [1548, 5, 30],
		Dow: 4,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1548],
		Leap: true
	},
	{
		solar: [1548, 5, 31],
		Dow: 5,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1548],
		Leap: true
	},
	{
		solar: [1548, 6, 1],
		Dow: 6,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [27, 1548],
		Leap: true
	},
	{
		solar: [1548, 6, 2],
		Dow: 0,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1548],
		Leap: true
	},
	{
		solar: [1548, 6, 29],
		Dow: 6,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [31, 1548],
		Leap: true
	},
	{
		solar: [1548, 6, 30],
		Dow: 0,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1548],
		Leap: true
	},
	{
		solar: [1548, 7, 1],
		Dow: 1,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1548],
		Leap: true
	},
	{
		solar: [1548, 7, 2],
		Dow: 2,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1548],
		Leap: true
	},
	{
		solar: [1548, 7, 29],
		Dow: 1,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1548],
		Leap: true
	},
	{
		solar: [1548, 7, 30],
		Dow: 2,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1548],
		Leap: true
	},
	{
		solar: [1548, 8, 1],
		Dow: 3,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1548],
		Leap: true
	},
	{
		solar: [1548, 8, 2],
		Dow: 4,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1548],
		Leap: true
	},
	{
		solar: [1548, 8, 29],
		Dow: 3,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1548],
		Leap: true
	},
	{
		solar: [1548, 8, 30],
		Dow: 4,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1548],
		Leap: true
	},
	{
		solar: [1548, 9, 1],
		Dow: 5,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1548],
		Leap: true
	},
	{
		solar: [1548, 9, 2],
		Dow: 6,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1548],
		Leap: true
	},
	{
		solar: [1548, 9, 29],
		Dow: 5,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1548],
		Leap: true
	},
	{
		solar: [1548, 9, 30],
		Dow: 6,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1548],
		Leap: true
	},
	{
		solar: [1548, 10, 1],
		Dow: 0,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1548],
		Leap: true
	},
	{
		solar: [1548, 10, 2],
		Dow: 1,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1548],
		Leap: true
	},
	{
		solar: [1548, 10, 29],
		Dow: 0,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1548],
		Leap: true
	},
	{
		solar: [1548, 10, 30],
		Dow: 1,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1548],
		Leap: true
	},
	{
		solar: [1548, 11, 1],
		Dow: 2,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1548],
		Leap: true
	},
	{
		solar: [1548, 11, 2],
		Dow: 3,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1548],
		Leap: true
	},
	{
		solar: [1548, 11, 26],
		Dow: 6,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [52, 1548],
		Leap: true
	},
	{
		solar: [1548, 11, 27],
		Dow: 0,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1548],
		Leap: true
	},
	{
		solar: [1548, 11, 28],
		Dow: 1,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1548],
		Leap: true
	},
	{
		solar: [1548, 11, 29],
		Dow: 2,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1548],
		Leap: true
	},
	{
		solar: [1548, 11, 30],
		Dow: 3,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1548],
		Leap: true
	},
	{
		solar: [1551, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1550],
		Leap: false
	},
	{
		solar: [1551, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1551],
		Leap: false
	},
	{
		solar: [1551, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1551],
		Leap: false
	},
	{
		solar: [1551, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1551],
		Leap: false
	},
	{
		solar: [1551, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1551],
		Leap: false
	},
	{
		solar: [1551, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1551],
		Leap: false
	},
	{
		solar: [1551, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1551],
		Leap: false
	},
	{
		solar: [1551, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1551],
		Leap: false
	},
	{
		solar: [1551, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1551],
		Leap: false
	},
	{
		solar: [1551, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1551],
		Leap: false
	},
	{
		solar: [1551, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1551],
		Leap: false
	},
	{
		solar: [1551, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1551],
		Leap: false
	},
	{
		solar: [1551, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1551],
		Leap: false
	},
	{
		solar: [1551, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1551],
		Leap: false
	},
	{
		solar: [1551, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1551],
		Leap: false
	},
	{
		solar: [1551, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1551],
		Leap: false
	},
	{
		solar: [1551, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1551],
		Leap: false
	},
	{
		solar: [1551, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1551],
		Leap: false
	},
	{
		solar: [1551, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1551],
		Leap: false
	},
	{
		solar: [1551, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1551],
		Leap: false
	},
	{
		solar: [1551, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1551],
		Leap: false
	},
	{
		solar: [1551, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1551],
		Leap: false
	},
	{
		solar: [1551, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1551],
		Leap: false
	},
	{
		solar: [1551, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1551],
		Leap: false
	},
	{
		solar: [1551, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1551],
		Leap: false
	},
	{
		solar: [1551, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1551],
		Leap: false
	},
	{
		solar: [1551, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1551],
		Leap: false
	},
	{
		solar: [1551, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1551],
		Leap: false
	},
	{
		solar: [1551, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1551],
		Leap: false
	},
	{
		solar: [1551, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1551],
		Leap: false
	},
	{
		solar: [1551, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1551],
		Leap: false
	},
	{
		solar: [1551, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1551],
		Leap: false
	},
	{
		solar: [1551, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1551],
		Leap: false
	},
	{
		solar: [1551, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1551],
		Leap: false
	},
	{
		solar: [1551, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1551],
		Leap: false
	},
	{
		solar: [1551, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1551],
		Leap: false
	},
	{
		solar: [1551, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1551],
		Leap: false
	},
	{
		solar: [1551, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1551],
		Leap: false
	},
	{
		solar: [1551, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1551],
		Leap: false
	},
	{
		solar: [1551, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1551],
		Leap: false
	},
	{
		solar: [1551, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1551],
		Leap: false
	},
	{
		solar: [1551, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1551],
		Leap: false
	},
	{
		solar: [1551, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1551],
		Leap: false
	},
	{
		solar: [1551, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1551],
		Leap: false
	},
	{
		solar: [1551, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1551],
		Leap: false
	},
	{
		solar: [1551, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1551],
		Leap: false
	},
	{
		solar: [1551, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1551],
		Leap: false
	},
	{
		solar: [1551, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1551],
		Leap: false
	},
	{
		solar: [1551, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1551],
		Leap: false
	},
	{
		solar: [1551, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1551],
		Leap: false
	},
	{
		solar: [1551, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1551],
		Leap: false
	},
	{
		solar: [1551, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1551],
		Leap: false
	},
	{
		solar: [1551, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1551],
		Leap: false
	},
	{
		solar: [1554, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1554],
		Leap: false
	},
	{
		solar: [1554, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1554],
		Leap: false
	},
	{
		solar: [1554, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1554],
		Leap: false
	},
	{
		solar: [1554, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1554],
		Leap: false
	},
	{
		solar: [1554, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1554],
		Leap: false
	},
	{
		solar: [1554, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1554],
		Leap: false
	},
	{
		solar: [1554, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1554],
		Leap: false
	},
	{
		solar: [1554, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1554],
		Leap: false
	},
	{
		solar: [1554, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1554],
		Leap: false
	},
	{
		solar: [1554, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1554],
		Leap: false
	},
	{
		solar: [1554, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1554],
		Leap: false
	},
	{
		solar: [1554, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1554],
		Leap: false
	},
	{
		solar: [1554, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1554],
		Leap: false
	},
	{
		solar: [1554, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1554],
		Leap: false
	},
	{
		solar: [1554, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1554],
		Leap: false
	},
	{
		solar: [1554, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1554],
		Leap: false
	},
	{
		solar: [1554, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1554],
		Leap: false
	},
	{
		solar: [1554, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1554],
		Leap: false
	},
	{
		solar: [1554, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1554],
		Leap: false
	},
	{
		solar: [1554, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1554],
		Leap: false
	},
	{
		solar: [1554, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1554],
		Leap: false
	},
	{
		solar: [1554, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1554],
		Leap: false
	},
	{
		solar: [1554, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1554],
		Leap: false
	},
	{
		solar: [1554, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1554],
		Leap: false
	},
	{
		solar: [1554, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1554],
		Leap: false
	},
	{
		solar: [1554, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1554],
		Leap: false
	},
	{
		solar: [1554, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1554],
		Leap: false
	},
	{
		solar: [1554, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1554],
		Leap: false
	},
	{
		solar: [1554, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1554],
		Leap: false
	},
	{
		solar: [1554, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1554],
		Leap: false
	},
	{
		solar: [1554, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1554],
		Leap: false
	},
	{
		solar: [1554, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1554],
		Leap: false
	},
	{
		solar: [1554, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1554],
		Leap: false
	},
	{
		solar: [1554, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1554],
		Leap: false
	},
	{
		solar: [1554, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1554],
		Leap: false
	},
	{
		solar: [1554, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1554],
		Leap: false
	},
	{
		solar: [1554, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1554],
		Leap: false
	},
	{
		solar: [1554, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1554],
		Leap: false
	},
	{
		solar: [1554, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1554],
		Leap: false
	},
	{
		solar: [1554, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1554],
		Leap: false
	},
	{
		solar: [1554, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1554],
		Leap: false
	},
	{
		solar: [1554, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1554],
		Leap: false
	},
	{
		solar: [1554, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1554],
		Leap: false
	},
	{
		solar: [1554, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1554],
		Leap: false
	},
	{
		solar: [1554, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1554],
		Leap: false
	},
	{
		solar: [1554, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1554],
		Leap: false
	},
	{
		solar: [1554, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1554],
		Leap: false
	},
	{
		solar: [1554, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1554],
		Leap: false
	},
	{
		solar: [1554, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1554],
		Leap: false
	},
	{
		solar: [1554, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1554],
		Leap: false
	},
	{
		solar: [1554, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1554],
		Leap: false
	},
	{
		solar: [1554, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1554],
		Leap: false
	},
	{
		solar: [1554, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1554],
		Leap: false
	},
	{
		solar: [1557, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1557],
		Leap: false
	},
	{
		solar: [1557, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1557],
		Leap: false
	},
	{
		solar: [1557, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1557],
		Leap: false
	},
	{
		solar: [1557, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1557],
		Leap: false
	},
	{
		solar: [1557, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1557],
		Leap: false
	},
	{
		solar: [1557, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1557],
		Leap: false
	},
	{
		solar: [1557, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1557],
		Leap: false
	},
	{
		solar: [1557, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1557],
		Leap: false
	},
	{
		solar: [1557, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1557],
		Leap: false
	},
	{
		solar: [1557, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1557],
		Leap: false
	},
	{
		solar: [1557, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1557],
		Leap: false
	},
	{
		solar: [1557, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1557],
		Leap: false
	},
	{
		solar: [1557, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1557],
		Leap: false
	},
	{
		solar: [1557, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1557],
		Leap: false
	},
	{
		solar: [1557, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1557],
		Leap: false
	},
	{
		solar: [1557, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1557],
		Leap: false
	},
	{
		solar: [1557, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1557],
		Leap: false
	},
	{
		solar: [1557, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1557],
		Leap: false
	},
	{
		solar: [1557, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1557],
		Leap: false
	},
	{
		solar: [1557, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1557],
		Leap: false
	},
	{
		solar: [1557, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1557],
		Leap: false
	},
	{
		solar: [1557, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1557],
		Leap: false
	},
	{
		solar: [1557, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1557],
		Leap: false
	},
	{
		solar: [1557, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1557],
		Leap: false
	},
	{
		solar: [1557, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1557],
		Leap: false
	},
	{
		solar: [1557, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1557],
		Leap: false
	},
	{
		solar: [1557, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1557],
		Leap: false
	},
	{
		solar: [1557, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1557],
		Leap: false
	},
	{
		solar: [1557, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1557],
		Leap: false
	},
	{
		solar: [1557, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1557],
		Leap: false
	},
	{
		solar: [1557, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1557],
		Leap: false
	},
	{
		solar: [1557, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1557],
		Leap: false
	},
	{
		solar: [1557, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1557],
		Leap: false
	},
	{
		solar: [1557, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1557],
		Leap: false
	},
	{
		solar: [1557, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1557],
		Leap: false
	},
	{
		solar: [1557, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1557],
		Leap: false
	},
	{
		solar: [1557, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1557],
		Leap: false
	},
	{
		solar: [1557, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1557],
		Leap: false
	},
	{
		solar: [1557, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1557],
		Leap: false
	},
	{
		solar: [1557, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1557],
		Leap: false
	},
	{
		solar: [1557, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1557],
		Leap: false
	},
	{
		solar: [1557, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1557],
		Leap: false
	},
	{
		solar: [1557, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1557],
		Leap: false
	},
	{
		solar: [1557, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1557],
		Leap: false
	},
	{
		solar: [1557, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1557],
		Leap: false
	},
	{
		solar: [1557, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1557],
		Leap: false
	},
	{
		solar: [1557, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1557],
		Leap: false
	},
	{
		solar: [1557, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1557],
		Leap: false
	},
	{
		solar: [1557, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1557],
		Leap: false
	},
	{
		solar: [1557, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1557],
		Leap: false
	},
	{
		solar: [1557, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1557],
		Leap: false
	},
	{
		solar: [1557, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1557],
		Leap: false
	},
	{
		solar: [1557, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1558],
		Leap: false
	},
	{
		solar: [1560, 0, 1],
		Dow: 3,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1560],
		Leap: true
	},
	{
		solar: [1560, 0, 2],
		Dow: 4,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1560],
		Leap: true
	},
	{
		solar: [1560, 0, 3],
		Dow: 5,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1560],
		Leap: true
	},
	{
		solar: [1560, 0, 4],
		Dow: 6,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1560],
		Leap: true
	},
	{
		solar: [1560, 0, 5],
		Dow: 0,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1560],
		Leap: true
	},
	{
		solar: [1560, 0, 30],
		Dow: 4,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1560],
		Leap: true
	},
	{
		solar: [1560, 0, 31],
		Dow: 5,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1560],
		Leap: true
	},
	{
		solar: [1560, 1, 1],
		Dow: 6,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1560],
		Leap: true
	},
	{
		solar: [1560, 1, 2],
		Dow: 0,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1560],
		Leap: true
	},
	{
		solar: [1560, 1, 30],
		Dow: 0,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1560],
		Leap: true
	},
	{
		solar: [1560, 1, 31],
		Dow: 1,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1560],
		Leap: true
	},
	{
		solar: [1560, 2, 1],
		Dow: 2,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1560],
		Leap: true
	},
	{
		solar: [1560, 2, 2],
		Dow: 3,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1560],
		Leap: true
	},
	{
		solar: [1560, 2, 30],
		Dow: 3,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1560],
		Leap: true
	},
	{
		solar: [1560, 2, 31],
		Dow: 4,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1560],
		Leap: true
	},
	{
		solar: [1560, 3, 1],
		Dow: 5,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1560],
		Leap: true
	},
	{
		solar: [1560, 3, 2],
		Dow: 6,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1560],
		Leap: true
	},
	{
		solar: [1560, 3, 30],
		Dow: 6,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1560],
		Leap: true
	},
	{
		solar: [1560, 3, 31],
		Dow: 0,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1560],
		Leap: true
	},
	{
		solar: [1560, 4, 1],
		Dow: 1,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1560],
		Leap: true
	},
	{
		solar: [1560, 4, 2],
		Dow: 2,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1560],
		Leap: true
	},
	{
		solar: [1560, 4, 30],
		Dow: 2,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1560],
		Leap: true
	},
	{
		solar: [1560, 4, 31],
		Dow: 3,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1560],
		Leap: true
	},
	{
		solar: [1560, 5, 1],
		Dow: 4,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1560],
		Leap: true
	},
	{
		solar: [1560, 5, 2],
		Dow: 5,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1560],
		Leap: true
	},
	{
		solar: [1560, 5, 30],
		Dow: 5,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1560],
		Leap: true
	},
	{
		solar: [1560, 5, 31],
		Dow: 6,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1560],
		Leap: true
	},
	{
		solar: [1560, 6, 1],
		Dow: 0,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1560],
		Leap: true
	},
	{
		solar: [1560, 6, 2],
		Dow: 1,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1560],
		Leap: true
	},
	{
		solar: [1560, 6, 29],
		Dow: 0,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1560],
		Leap: true
	},
	{
		solar: [1560, 6, 30],
		Dow: 1,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1560],
		Leap: true
	},
	{
		solar: [1560, 7, 1],
		Dow: 2,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1560],
		Leap: true
	},
	{
		solar: [1560, 7, 2],
		Dow: 3,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1560],
		Leap: true
	},
	{
		solar: [1560, 7, 29],
		Dow: 2,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1560],
		Leap: true
	},
	{
		solar: [1560, 7, 30],
		Dow: 3,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1560],
		Leap: true
	},
	{
		solar: [1560, 8, 1],
		Dow: 4,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1560],
		Leap: true
	},
	{
		solar: [1560, 8, 2],
		Dow: 5,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1560],
		Leap: true
	},
	{
		solar: [1560, 8, 29],
		Dow: 4,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1560],
		Leap: true
	},
	{
		solar: [1560, 8, 30],
		Dow: 5,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1560],
		Leap: true
	},
	{
		solar: [1560, 9, 1],
		Dow: 6,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1560],
		Leap: true
	},
	{
		solar: [1560, 9, 2],
		Dow: 0,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1560],
		Leap: true
	},
	{
		solar: [1560, 9, 29],
		Dow: 6,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1560],
		Leap: true
	},
	{
		solar: [1560, 9, 30],
		Dow: 0,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1560],
		Leap: true
	},
	{
		solar: [1560, 10, 1],
		Dow: 1,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1560],
		Leap: true
	},
	{
		solar: [1560, 10, 2],
		Dow: 2,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1560],
		Leap: true
	},
	{
		solar: [1560, 10, 29],
		Dow: 1,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1560],
		Leap: true
	},
	{
		solar: [1560, 10, 30],
		Dow: 2,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1560],
		Leap: true
	},
	{
		solar: [1560, 11, 1],
		Dow: 3,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1560],
		Leap: true
	},
	{
		solar: [1560, 11, 2],
		Dow: 4,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1560],
		Leap: true
	},
	{
		solar: [1560, 11, 26],
		Dow: 0,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1560],
		Leap: true
	},
	{
		solar: [1560, 11, 27],
		Dow: 1,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1560],
		Leap: true
	},
	{
		solar: [1560, 11, 28],
		Dow: 2,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1560],
		Leap: true
	},
	{
		solar: [1560, 11, 29],
		Dow: 3,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1560],
		Leap: true
	},
	{
		solar: [1560, 11, 30],
		Dow: 4,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1560],
		Leap: true
	},
	{
		solar: [1563, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1563],
		Leap: false
	},
	{
		solar: [1563, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1563],
		Leap: false
	},
	{
		solar: [1563, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1563],
		Leap: false
	},
	{
		solar: [1563, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1563],
		Leap: false
	},
	{
		solar: [1563, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1563],
		Leap: false
	},
	{
		solar: [1563, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1563],
		Leap: false
	},
	{
		solar: [1563, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1563],
		Leap: false
	},
	{
		solar: [1563, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1563],
		Leap: false
	},
	{
		solar: [1563, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1563],
		Leap: false
	},
	{
		solar: [1563, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1563],
		Leap: false
	},
	{
		solar: [1563, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1563],
		Leap: false
	},
	{
		solar: [1563, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1563],
		Leap: false
	},
	{
		solar: [1563, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1563],
		Leap: false
	},
	{
		solar: [1563, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1563],
		Leap: false
	},
	{
		solar: [1563, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1563],
		Leap: false
	},
	{
		solar: [1563, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1563],
		Leap: false
	},
	{
		solar: [1563, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1563],
		Leap: false
	},
	{
		solar: [1563, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1563],
		Leap: false
	},
	{
		solar: [1563, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1563],
		Leap: false
	},
	{
		solar: [1563, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1563],
		Leap: false
	},
	{
		solar: [1563, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1563],
		Leap: false
	},
	{
		solar: [1563, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1563],
		Leap: false
	},
	{
		solar: [1563, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1563],
		Leap: false
	},
	{
		solar: [1563, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1563],
		Leap: false
	},
	{
		solar: [1563, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1563],
		Leap: false
	},
	{
		solar: [1563, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1563],
		Leap: false
	},
	{
		solar: [1563, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1563],
		Leap: false
	},
	{
		solar: [1563, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1563],
		Leap: false
	},
	{
		solar: [1563, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1563],
		Leap: false
	},
	{
		solar: [1563, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1563],
		Leap: false
	},
	{
		solar: [1563, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1563],
		Leap: false
	},
	{
		solar: [1563, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1563],
		Leap: false
	},
	{
		solar: [1563, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1563],
		Leap: false
	},
	{
		solar: [1563, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1563],
		Leap: false
	},
	{
		solar: [1563, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1563],
		Leap: false
	},
	{
		solar: [1563, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1563],
		Leap: false
	},
	{
		solar: [1563, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1563],
		Leap: false
	},
	{
		solar: [1563, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1563],
		Leap: false
	},
	{
		solar: [1563, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1563],
		Leap: false
	},
	{
		solar: [1563, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1563],
		Leap: false
	},
	{
		solar: [1563, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1563],
		Leap: false
	},
	{
		solar: [1563, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1563],
		Leap: false
	},
	{
		solar: [1563, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1563],
		Leap: false
	},
	{
		solar: [1563, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1563],
		Leap: false
	},
	{
		solar: [1563, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1563],
		Leap: false
	},
	{
		solar: [1563, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1563],
		Leap: false
	},
	{
		solar: [1563, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1563],
		Leap: false
	},
	{
		solar: [1563, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1563],
		Leap: false
	},
	{
		solar: [1563, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1563],
		Leap: false
	},
	{
		solar: [1563, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1563],
		Leap: false
	},
	{
		solar: [1563, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1563],
		Leap: false
	},
	{
		solar: [1563, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1563],
		Leap: false
	},
	{
		solar: [1563, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1564],
		Leap: false
	},
	{
		solar: [1566, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1565],
		Leap: false
	},
	{
		solar: [1566, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1565],
		Leap: false
	},
	{
		solar: [1566, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1565],
		Leap: false
	},
	{
		solar: [1566, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1566],
		Leap: false
	},
	{
		solar: [1566, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1566],
		Leap: false
	},
	{
		solar: [1566, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1566],
		Leap: false
	},
	{
		solar: [1566, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1566],
		Leap: false
	},
	{
		solar: [1566, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1566],
		Leap: false
	},
	{
		solar: [1566, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1566],
		Leap: false
	},
	{
		solar: [1566, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1566],
		Leap: false
	},
	{
		solar: [1566, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1566],
		Leap: false
	},
	{
		solar: [1566, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1566],
		Leap: false
	},
	{
		solar: [1566, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1566],
		Leap: false
	},
	{
		solar: [1566, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1566],
		Leap: false
	},
	{
		solar: [1566, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1566],
		Leap: false
	},
	{
		solar: [1566, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1566],
		Leap: false
	},
	{
		solar: [1566, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1566],
		Leap: false
	},
	{
		solar: [1566, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1566],
		Leap: false
	},
	{
		solar: [1566, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1566],
		Leap: false
	},
	{
		solar: [1566, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1566],
		Leap: false
	},
	{
		solar: [1566, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1566],
		Leap: false
	},
	{
		solar: [1566, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1566],
		Leap: false
	},
	{
		solar: [1566, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1566],
		Leap: false
	},
	{
		solar: [1566, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1566],
		Leap: false
	},
	{
		solar: [1566, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1566],
		Leap: false
	},
	{
		solar: [1566, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1566],
		Leap: false
	},
	{
		solar: [1566, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1566],
		Leap: false
	},
	{
		solar: [1566, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1566],
		Leap: false
	},
	{
		solar: [1566, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1566],
		Leap: false
	},
	{
		solar: [1566, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1566],
		Leap: false
	},
	{
		solar: [1566, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1566],
		Leap: false
	},
	{
		solar: [1566, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1566],
		Leap: false
	},
	{
		solar: [1566, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1566],
		Leap: false
	},
	{
		solar: [1566, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1566],
		Leap: false
	},
	{
		solar: [1566, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1566],
		Leap: false
	},
	{
		solar: [1566, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1566],
		Leap: false
	},
	{
		solar: [1566, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1566],
		Leap: false
	},
	{
		solar: [1566, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1566],
		Leap: false
	},
	{
		solar: [1566, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1566],
		Leap: false
	},
	{
		solar: [1566, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1566],
		Leap: false
	},
	{
		solar: [1566, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1566],
		Leap: false
	},
	{
		solar: [1566, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1566],
		Leap: false
	},
	{
		solar: [1566, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1566],
		Leap: false
	},
	{
		solar: [1566, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1566],
		Leap: false
	},
	{
		solar: [1566, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1566],
		Leap: false
	},
	{
		solar: [1566, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1566],
		Leap: false
	},
	{
		solar: [1566, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1566],
		Leap: false
	},
	{
		solar: [1566, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1566],
		Leap: false
	},
	{
		solar: [1566, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1566],
		Leap: false
	},
	{
		solar: [1566, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1566],
		Leap: false
	},
	{
		solar: [1566, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1566],
		Leap: false
	},
	{
		solar: [1566, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1566],
		Leap: false
	},
	{
		solar: [1566, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1566],
		Leap: false
	},
	{
		solar: [1569, 0, 1],
		Dow: 0,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1569],
		Leap: true
	},
	{
		solar: [1569, 0, 2],
		Dow: 1,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1569],
		Leap: true
	},
	{
		solar: [1569, 0, 3],
		Dow: 2,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1569],
		Leap: true
	},
	{
		solar: [1569, 0, 4],
		Dow: 3,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1569],
		Leap: true
	},
	{
		solar: [1569, 0, 5],
		Dow: 4,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1569],
		Leap: true
	},
	{
		solar: [1569, 0, 30],
		Dow: 1,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1569],
		Leap: true
	},
	{
		solar: [1569, 0, 31],
		Dow: 2,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1569],
		Leap: true
	},
	{
		solar: [1569, 1, 1],
		Dow: 3,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1569],
		Leap: true
	},
	{
		solar: [1569, 1, 2],
		Dow: 4,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1569],
		Leap: true
	},
	{
		solar: [1569, 1, 30],
		Dow: 4,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1569],
		Leap: true
	},
	{
		solar: [1569, 1, 31],
		Dow: 5,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1569],
		Leap: true
	},
	{
		solar: [1569, 2, 1],
		Dow: 6,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1569],
		Leap: true
	},
	{
		solar: [1569, 2, 2],
		Dow: 0,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1569],
		Leap: true
	},
	{
		solar: [1569, 2, 30],
		Dow: 0,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1569],
		Leap: true
	},
	{
		solar: [1569, 2, 31],
		Dow: 1,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1569],
		Leap: true
	},
	{
		solar: [1569, 3, 1],
		Dow: 2,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1569],
		Leap: true
	},
	{
		solar: [1569, 3, 2],
		Dow: 3,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1569],
		Leap: true
	},
	{
		solar: [1569, 3, 30],
		Dow: 3,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1569],
		Leap: true
	},
	{
		solar: [1569, 3, 31],
		Dow: 4,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1569],
		Leap: true
	},
	{
		solar: [1569, 4, 1],
		Dow: 5,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1569],
		Leap: true
	},
	{
		solar: [1569, 4, 2],
		Dow: 6,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1569],
		Leap: true
	},
	{
		solar: [1569, 4, 30],
		Dow: 6,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1569],
		Leap: true
	},
	{
		solar: [1569, 4, 31],
		Dow: 0,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1569],
		Leap: true
	},
	{
		solar: [1569, 5, 1],
		Dow: 1,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1569],
		Leap: true
	},
	{
		solar: [1569, 5, 2],
		Dow: 2,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1569],
		Leap: true
	},
	{
		solar: [1569, 5, 30],
		Dow: 2,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1569],
		Leap: true
	},
	{
		solar: [1569, 5, 31],
		Dow: 3,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1569],
		Leap: true
	},
	{
		solar: [1569, 6, 1],
		Dow: 4,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1569],
		Leap: true
	},
	{
		solar: [1569, 6, 2],
		Dow: 5,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1569],
		Leap: true
	},
	{
		solar: [1569, 6, 29],
		Dow: 4,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1569],
		Leap: true
	},
	{
		solar: [1569, 6, 30],
		Dow: 5,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1569],
		Leap: true
	},
	{
		solar: [1569, 7, 1],
		Dow: 6,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1569],
		Leap: true
	},
	{
		solar: [1569, 7, 2],
		Dow: 0,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1569],
		Leap: true
	},
	{
		solar: [1569, 7, 29],
		Dow: 6,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1569],
		Leap: true
	},
	{
		solar: [1569, 7, 30],
		Dow: 0,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1569],
		Leap: true
	},
	{
		solar: [1569, 8, 1],
		Dow: 1,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1569],
		Leap: true
	},
	{
		solar: [1569, 8, 2],
		Dow: 2,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1569],
		Leap: true
	},
	{
		solar: [1569, 8, 29],
		Dow: 1,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1569],
		Leap: true
	},
	{
		solar: [1569, 8, 30],
		Dow: 2,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1569],
		Leap: true
	},
	{
		solar: [1569, 9, 1],
		Dow: 3,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1569],
		Leap: true
	},
	{
		solar: [1569, 9, 2],
		Dow: 4,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1569],
		Leap: true
	},
	{
		solar: [1569, 9, 29],
		Dow: 3,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1569],
		Leap: true
	},
	{
		solar: [1569, 9, 30],
		Dow: 4,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1569],
		Leap: true
	},
	{
		solar: [1569, 10, 1],
		Dow: 5,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1569],
		Leap: true
	},
	{
		solar: [1569, 10, 2],
		Dow: 6,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1569],
		Leap: true
	},
	{
		solar: [1569, 10, 29],
		Dow: 5,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1569],
		Leap: true
	},
	{
		solar: [1569, 10, 30],
		Dow: 6,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1569],
		Leap: true
	},
	{
		solar: [1569, 11, 1],
		Dow: 0,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1569],
		Leap: true
	},
	{
		solar: [1569, 11, 2],
		Dow: 1,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1569],
		Leap: true
	},
	{
		solar: [1569, 11, 26],
		Dow: 4,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1569],
		Leap: true
	},
	{
		solar: [1569, 11, 27],
		Dow: 5,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1569],
		Leap: true
	},
	{
		solar: [1569, 11, 28],
		Dow: 6,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1569],
		Leap: true
	},
	{
		solar: [1569, 11, 29],
		Dow: 0,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1570],
		Leap: true
	},
	{
		solar: [1569, 11, 30],
		Dow: 1,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1570],
		Leap: true
	},
	{
		solar: [1572, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1571],
		Leap: false
	},
	{
		solar: [1572, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1571],
		Leap: false
	},
	{
		solar: [1572, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1571],
		Leap: false
	},
	{
		solar: [1572, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1572],
		Leap: false
	},
	{
		solar: [1572, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1572],
		Leap: false
	},
	{
		solar: [1572, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1572],
		Leap: false
	},
	{
		solar: [1572, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1572],
		Leap: false
	},
	{
		solar: [1572, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1572],
		Leap: false
	},
	{
		solar: [1572, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1572],
		Leap: false
	},
	{
		solar: [1572, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1572],
		Leap: false
	},
	{
		solar: [1572, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1572],
		Leap: false
	},
	{
		solar: [1572, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1572],
		Leap: false
	},
	{
		solar: [1572, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1572],
		Leap: false
	},
	{
		solar: [1572, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1572],
		Leap: false
	},
	{
		solar: [1572, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1572],
		Leap: false
	},
	{
		solar: [1572, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1572],
		Leap: false
	},
	{
		solar: [1572, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1572],
		Leap: false
	},
	{
		solar: [1572, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1572],
		Leap: false
	},
	{
		solar: [1572, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1572],
		Leap: false
	},
	{
		solar: [1572, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1572],
		Leap: false
	},
	{
		solar: [1572, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1572],
		Leap: false
	},
	{
		solar: [1572, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1572],
		Leap: false
	},
	{
		solar: [1572, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1572],
		Leap: false
	},
	{
		solar: [1572, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1572],
		Leap: false
	},
	{
		solar: [1572, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1572],
		Leap: false
	},
	{
		solar: [1572, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1572],
		Leap: false
	},
	{
		solar: [1572, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1572],
		Leap: false
	},
	{
		solar: [1572, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1572],
		Leap: false
	},
	{
		solar: [1572, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1572],
		Leap: false
	},
	{
		solar: [1572, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1572],
		Leap: false
	},
	{
		solar: [1572, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1572],
		Leap: false
	},
	{
		solar: [1572, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1572],
		Leap: false
	},
	{
		solar: [1572, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1572],
		Leap: false
	},
	{
		solar: [1572, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1572],
		Leap: false
	},
	{
		solar: [1572, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1572],
		Leap: false
	},
	{
		solar: [1572, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1572],
		Leap: false
	},
	{
		solar: [1572, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1572],
		Leap: false
	},
	{
		solar: [1572, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1572],
		Leap: false
	},
	{
		solar: [1572, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1572],
		Leap: false
	},
	{
		solar: [1572, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1572],
		Leap: false
	},
	{
		solar: [1572, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1572],
		Leap: false
	},
	{
		solar: [1572, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1572],
		Leap: false
	},
	{
		solar: [1572, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1572],
		Leap: false
	},
	{
		solar: [1572, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1572],
		Leap: false
	},
	{
		solar: [1572, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1572],
		Leap: false
	},
	{
		solar: [1572, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1572],
		Leap: false
	},
	{
		solar: [1572, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1572],
		Leap: false
	},
	{
		solar: [1572, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1572],
		Leap: false
	},
	{
		solar: [1572, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1572],
		Leap: false
	},
	{
		solar: [1572, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1572],
		Leap: false
	},
	{
		solar: [1572, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1572],
		Leap: false
	},
	{
		solar: [1572, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1572],
		Leap: false
	},
	{
		solar: [1572, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1572],
		Leap: false
	},
	{
		solar: [1575, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1575],
		Leap: false
	},
	{
		solar: [1575, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1575],
		Leap: false
	},
	{
		solar: [1575, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1575],
		Leap: false
	},
	{
		solar: [1575, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1575],
		Leap: false
	},
	{
		solar: [1575, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1575],
		Leap: false
	},
	{
		solar: [1575, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1575],
		Leap: false
	},
	{
		solar: [1575, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1575],
		Leap: false
	},
	{
		solar: [1575, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1575],
		Leap: false
	},
	{
		solar: [1575, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1575],
		Leap: false
	},
	{
		solar: [1575, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1575],
		Leap: false
	},
	{
		solar: [1575, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1575],
		Leap: false
	},
	{
		solar: [1575, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1575],
		Leap: false
	},
	{
		solar: [1575, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1575],
		Leap: false
	},
	{
		solar: [1575, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1575],
		Leap: false
	},
	{
		solar: [1575, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1575],
		Leap: false
	},
	{
		solar: [1575, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1575],
		Leap: false
	},
	{
		solar: [1575, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1575],
		Leap: false
	},
	{
		solar: [1575, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1575],
		Leap: false
	},
	{
		solar: [1575, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1575],
		Leap: false
	},
	{
		solar: [1575, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1575],
		Leap: false
	},
	{
		solar: [1575, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1575],
		Leap: false
	},
	{
		solar: [1575, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1575],
		Leap: false
	},
	{
		solar: [1575, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1575],
		Leap: false
	},
	{
		solar: [1575, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1575],
		Leap: false
	},
	{
		solar: [1575, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1575],
		Leap: false
	},
	{
		solar: [1575, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1575],
		Leap: false
	},
	{
		solar: [1575, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1575],
		Leap: false
	},
	{
		solar: [1575, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1575],
		Leap: false
	},
	{
		solar: [1575, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1575],
		Leap: false
	},
	{
		solar: [1575, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1575],
		Leap: false
	},
	{
		solar: [1575, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1575],
		Leap: false
	},
	{
		solar: [1575, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1575],
		Leap: false
	},
	{
		solar: [1575, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1575],
		Leap: false
	},
	{
		solar: [1575, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1575],
		Leap: false
	},
	{
		solar: [1575, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1575],
		Leap: false
	},
	{
		solar: [1575, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1575],
		Leap: false
	},
	{
		solar: [1575, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1575],
		Leap: false
	},
	{
		solar: [1575, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1575],
		Leap: false
	},
	{
		solar: [1575, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1575],
		Leap: false
	},
	{
		solar: [1575, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1575],
		Leap: false
	},
	{
		solar: [1575, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1575],
		Leap: false
	},
	{
		solar: [1575, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1575],
		Leap: false
	},
	{
		solar: [1575, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1575],
		Leap: false
	},
	{
		solar: [1575, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1575],
		Leap: false
	},
	{
		solar: [1575, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1575],
		Leap: false
	},
	{
		solar: [1575, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1575],
		Leap: false
	},
	{
		solar: [1575, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1575],
		Leap: false
	},
	{
		solar: [1575, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1575],
		Leap: false
	},
	{
		solar: [1575, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1575],
		Leap: false
	},
	{
		solar: [1575, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1575],
		Leap: false
	},
	{
		solar: [1575, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1575],
		Leap: false
	},
	{
		solar: [1575, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1576],
		Leap: false
	},
	{
		solar: [1575, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1576],
		Leap: false
	},
	{
		solar: [1578, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1577],
		Leap: false
	},
	{
		solar: [1578, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1577],
		Leap: false
	},
	{
		solar: [1578, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1578],
		Leap: false
	},
	{
		solar: [1578, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1578],
		Leap: false
	},
	{
		solar: [1578, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1578],
		Leap: false
	},
	{
		solar: [1578, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1578],
		Leap: false
	},
	{
		solar: [1578, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1578],
		Leap: false
	},
	{
		solar: [1578, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1578],
		Leap: false
	},
	{
		solar: [1578, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1578],
		Leap: false
	},
	{
		solar: [1578, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1578],
		Leap: false
	},
	{
		solar: [1578, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1578],
		Leap: false
	},
	{
		solar: [1578, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1578],
		Leap: false
	},
	{
		solar: [1578, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1578],
		Leap: false
	},
	{
		solar: [1578, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1578],
		Leap: false
	},
	{
		solar: [1578, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1578],
		Leap: false
	},
	{
		solar: [1578, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1578],
		Leap: false
	},
	{
		solar: [1578, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1578],
		Leap: false
	},
	{
		solar: [1578, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1578],
		Leap: false
	},
	{
		solar: [1578, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1578],
		Leap: false
	},
	{
		solar: [1578, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1578],
		Leap: false
	},
	{
		solar: [1578, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1578],
		Leap: false
	},
	{
		solar: [1578, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1578],
		Leap: false
	},
	{
		solar: [1578, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1578],
		Leap: false
	},
	{
		solar: [1578, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1578],
		Leap: false
	},
	{
		solar: [1578, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1578],
		Leap: false
	},
	{
		solar: [1578, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1578],
		Leap: false
	},
	{
		solar: [1578, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1578],
		Leap: false
	},
	{
		solar: [1578, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1578],
		Leap: false
	},
	{
		solar: [1578, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1578],
		Leap: false
	},
	{
		solar: [1578, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1578],
		Leap: false
	},
	{
		solar: [1578, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1578],
		Leap: false
	},
	{
		solar: [1578, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1578],
		Leap: false
	},
	{
		solar: [1578, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1578],
		Leap: false
	},
	{
		solar: [1578, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1578],
		Leap: false
	},
	{
		solar: [1578, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1578],
		Leap: false
	},
	{
		solar: [1578, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1578],
		Leap: false
	},
	{
		solar: [1578, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1578],
		Leap: false
	},
	{
		solar: [1578, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1578],
		Leap: false
	},
	{
		solar: [1578, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1578],
		Leap: false
	},
	{
		solar: [1578, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1578],
		Leap: false
	},
	{
		solar: [1578, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1578],
		Leap: false
	},
	{
		solar: [1578, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1578],
		Leap: false
	},
	{
		solar: [1578, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1578],
		Leap: false
	},
	{
		solar: [1578, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1578],
		Leap: false
	},
	{
		solar: [1578, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1578],
		Leap: false
	},
	{
		solar: [1578, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1578],
		Leap: false
	},
	{
		solar: [1578, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1578],
		Leap: false
	},
	{
		solar: [1578, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1578],
		Leap: false
	},
	{
		solar: [1578, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1578],
		Leap: false
	},
	{
		solar: [1578, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1578],
		Leap: false
	},
	{
		solar: [1578, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1578],
		Leap: false
	},
	{
		solar: [1578, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1578],
		Leap: false
	},
	{
		solar: [1578, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1578],
		Leap: false
	},
	{
		solar: [1581, 0, 1],
		Dow: 1,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1581],
		Leap: true
	},
	{
		solar: [1581, 0, 2],
		Dow: 2,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1581],
		Leap: true
	},
	{
		solar: [1581, 0, 3],
		Dow: 3,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1581],
		Leap: true
	},
	{
		solar: [1581, 0, 4],
		Dow: 4,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1581],
		Leap: true
	},
	{
		solar: [1581, 0, 5],
		Dow: 5,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1581],
		Leap: true
	},
	{
		solar: [1581, 0, 30],
		Dow: 2,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1581],
		Leap: true
	},
	{
		solar: [1581, 0, 31],
		Dow: 3,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1581],
		Leap: true
	},
	{
		solar: [1581, 1, 1],
		Dow: 4,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1581],
		Leap: true
	},
	{
		solar: [1581, 1, 2],
		Dow: 5,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1581],
		Leap: true
	},
	{
		solar: [1581, 1, 30],
		Dow: 5,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1581],
		Leap: true
	},
	{
		solar: [1581, 1, 31],
		Dow: 6,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1581],
		Leap: true
	},
	{
		solar: [1581, 2, 1],
		Dow: 0,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1581],
		Leap: true
	},
	{
		solar: [1581, 2, 2],
		Dow: 1,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1581],
		Leap: true
	},
	{
		solar: [1581, 2, 30],
		Dow: 1,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1581],
		Leap: true
	},
	{
		solar: [1581, 2, 31],
		Dow: 2,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1581],
		Leap: true
	},
	{
		solar: [1581, 3, 1],
		Dow: 3,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1581],
		Leap: true
	},
	{
		solar: [1581, 3, 2],
		Dow: 4,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1581],
		Leap: true
	},
	{
		solar: [1581, 3, 30],
		Dow: 4,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1581],
		Leap: true
	},
	{
		solar: [1581, 3, 31],
		Dow: 5,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1581],
		Leap: true
	},
	{
		solar: [1581, 4, 1],
		Dow: 6,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1581],
		Leap: true
	},
	{
		solar: [1581, 4, 2],
		Dow: 0,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1581],
		Leap: true
	},
	{
		solar: [1581, 4, 30],
		Dow: 0,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1581],
		Leap: true
	},
	{
		solar: [1581, 4, 31],
		Dow: 1,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1581],
		Leap: true
	},
	{
		solar: [1581, 5, 1],
		Dow: 2,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1581],
		Leap: true
	},
	{
		solar: [1581, 5, 2],
		Dow: 3,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1581],
		Leap: true
	},
	{
		solar: [1581, 5, 30],
		Dow: 3,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1581],
		Leap: true
	},
	{
		solar: [1581, 5, 31],
		Dow: 4,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1581],
		Leap: true
	},
	{
		solar: [1581, 6, 1],
		Dow: 5,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1581],
		Leap: true
	},
	{
		solar: [1581, 6, 2],
		Dow: 6,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1581],
		Leap: true
	},
	{
		solar: [1581, 6, 29],
		Dow: 5,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1581],
		Leap: true
	},
	{
		solar: [1581, 6, 30],
		Dow: 6,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1581],
		Leap: true
	},
	{
		solar: [1581, 7, 1],
		Dow: 0,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1581],
		Leap: true
	},
	{
		solar: [1581, 7, 2],
		Dow: 1,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1581],
		Leap: true
	},
	{
		solar: [1581, 7, 29],
		Dow: 0,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1581],
		Leap: true
	},
	{
		solar: [1581, 7, 30],
		Dow: 1,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1581],
		Leap: true
	},
	{
		solar: [1581, 8, 1],
		Dow: 2,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1581],
		Leap: true
	},
	{
		solar: [1581, 8, 2],
		Dow: 3,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1581],
		Leap: true
	},
	{
		solar: [1581, 8, 29],
		Dow: 2,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1581],
		Leap: true
	},
	{
		solar: [1581, 8, 30],
		Dow: 3,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1581],
		Leap: true
	},
	{
		solar: [1581, 9, 1],
		Dow: 4,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1581],
		Leap: true
	},
	{
		solar: [1581, 9, 2],
		Dow: 5,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1581],
		Leap: true
	},
	{
		solar: [1581, 9, 29],
		Dow: 4,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1581],
		Leap: true
	},
	{
		solar: [1581, 9, 30],
		Dow: 5,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1581],
		Leap: true
	},
	{
		solar: [1581, 10, 1],
		Dow: 6,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1581],
		Leap: true
	},
	{
		solar: [1581, 10, 2],
		Dow: 0,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1581],
		Leap: true
	},
	{
		solar: [1581, 10, 29],
		Dow: 6,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1581],
		Leap: true
	},
	{
		solar: [1581, 10, 30],
		Dow: 0,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1581],
		Leap: true
	},
	{
		solar: [1581, 11, 1],
		Dow: 1,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1581],
		Leap: true
	},
	{
		solar: [1581, 11, 2],
		Dow: 2,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1581],
		Leap: true
	},
	{
		solar: [1581, 11, 26],
		Dow: 5,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1581],
		Leap: true
	},
	{
		solar: [1581, 11, 27],
		Dow: 6,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1581],
		Leap: true
	},
	{
		solar: [1581, 11, 28],
		Dow: 0,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1582],
		Leap: true
	},
	{
		solar: [1581, 11, 29],
		Dow: 1,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1582],
		Leap: true
	},
	{
		solar: [1581, 11, 30],
		Dow: 2,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1582],
		Leap: true
	},
	{
		solar: [1584, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1583],
		Leap: false
	},
	{
		solar: [1584, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1583],
		Leap: false
	},
	{
		solar: [1584, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1584],
		Leap: false
	},
	{
		solar: [1584, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1584],
		Leap: false
	},
	{
		solar: [1584, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1584],
		Leap: false
	},
	{
		solar: [1584, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1584],
		Leap: false
	},
	{
		solar: [1584, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1584],
		Leap: false
	},
	{
		solar: [1584, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1584],
		Leap: false
	},
	{
		solar: [1584, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1584],
		Leap: false
	},
	{
		solar: [1584, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1584],
		Leap: false
	},
	{
		solar: [1584, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1584],
		Leap: false
	},
	{
		solar: [1584, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1584],
		Leap: false
	},
	{
		solar: [1584, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1584],
		Leap: false
	},
	{
		solar: [1584, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1584],
		Leap: false
	},
	{
		solar: [1584, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1584],
		Leap: false
	},
	{
		solar: [1584, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1584],
		Leap: false
	},
	{
		solar: [1584, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1584],
		Leap: false
	},
	{
		solar: [1584, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1584],
		Leap: false
	},
	{
		solar: [1584, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1584],
		Leap: false
	},
	{
		solar: [1584, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1584],
		Leap: false
	},
	{
		solar: [1584, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1584],
		Leap: false
	},
	{
		solar: [1584, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1584],
		Leap: false
	},
	{
		solar: [1584, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1584],
		Leap: false
	},
	{
		solar: [1584, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1584],
		Leap: false
	},
	{
		solar: [1584, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1584],
		Leap: false
	},
	{
		solar: [1584, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1584],
		Leap: false
	},
	{
		solar: [1584, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1584],
		Leap: false
	},
	{
		solar: [1584, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1584],
		Leap: false
	},
	{
		solar: [1584, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1584],
		Leap: false
	},
	{
		solar: [1584, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1584],
		Leap: false
	},
	{
		solar: [1584, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1584],
		Leap: false
	},
	{
		solar: [1584, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1584],
		Leap: false
	},
	{
		solar: [1584, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1584],
		Leap: false
	},
	{
		solar: [1584, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1584],
		Leap: false
	},
	{
		solar: [1584, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1584],
		Leap: false
	},
	{
		solar: [1584, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1584],
		Leap: false
	},
	{
		solar: [1584, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1584],
		Leap: false
	},
	{
		solar: [1584, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1584],
		Leap: false
	},
	{
		solar: [1584, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1584],
		Leap: false
	},
	{
		solar: [1584, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1584],
		Leap: false
	},
	{
		solar: [1584, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1584],
		Leap: false
	},
	{
		solar: [1584, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1584],
		Leap: false
	},
	{
		solar: [1584, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1584],
		Leap: false
	},
	{
		solar: [1584, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1584],
		Leap: false
	},
	{
		solar: [1584, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1584],
		Leap: false
	},
	{
		solar: [1584, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1584],
		Leap: false
	},
	{
		solar: [1584, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1584],
		Leap: false
	},
	{
		solar: [1584, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1584],
		Leap: false
	},
	{
		solar: [1584, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1584],
		Leap: false
	},
	{
		solar: [1584, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1584],
		Leap: false
	},
	{
		solar: [1584, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1584],
		Leap: false
	},
	{
		solar: [1584, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1584],
		Leap: false
	},
	{
		solar: [1584, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1584],
		Leap: false
	},
	{
		solar: [1587, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1587],
		Leap: false
	},
	{
		solar: [1587, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1587],
		Leap: false
	},
	{
		solar: [1587, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1587],
		Leap: false
	},
	{
		solar: [1587, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1587],
		Leap: false
	},
	{
		solar: [1587, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1587],
		Leap: false
	},
	{
		solar: [1587, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1587],
		Leap: false
	},
	{
		solar: [1587, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1587],
		Leap: false
	},
	{
		solar: [1587, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1587],
		Leap: false
	},
	{
		solar: [1587, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1587],
		Leap: false
	},
	{
		solar: [1587, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1587],
		Leap: false
	},
	{
		solar: [1587, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1587],
		Leap: false
	},
	{
		solar: [1587, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1587],
		Leap: false
	},
	{
		solar: [1587, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1587],
		Leap: false
	},
	{
		solar: [1587, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1587],
		Leap: false
	},
	{
		solar: [1587, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1587],
		Leap: false
	},
	{
		solar: [1587, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1587],
		Leap: false
	},
	{
		solar: [1587, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1587],
		Leap: false
	},
	{
		solar: [1587, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1587],
		Leap: false
	},
	{
		solar: [1587, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1587],
		Leap: false
	},
	{
		solar: [1587, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1587],
		Leap: false
	},
	{
		solar: [1587, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1587],
		Leap: false
	},
	{
		solar: [1587, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1587],
		Leap: false
	},
	{
		solar: [1587, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1587],
		Leap: false
	},
	{
		solar: [1587, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1587],
		Leap: false
	},
	{
		solar: [1587, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1587],
		Leap: false
	},
	{
		solar: [1587, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1587],
		Leap: false
	},
	{
		solar: [1587, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1587],
		Leap: false
	},
	{
		solar: [1587, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1587],
		Leap: false
	},
	{
		solar: [1587, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1587],
		Leap: false
	},
	{
		solar: [1587, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1587],
		Leap: false
	},
	{
		solar: [1587, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1587],
		Leap: false
	},
	{
		solar: [1587, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1587],
		Leap: false
	},
	{
		solar: [1587, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1587],
		Leap: false
	},
	{
		solar: [1587, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1587],
		Leap: false
	},
	{
		solar: [1587, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1587],
		Leap: false
	},
	{
		solar: [1587, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1587],
		Leap: false
	},
	{
		solar: [1587, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1587],
		Leap: false
	},
	{
		solar: [1587, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1587],
		Leap: false
	},
	{
		solar: [1587, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1587],
		Leap: false
	},
	{
		solar: [1587, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1587],
		Leap: false
	},
	{
		solar: [1587, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1587],
		Leap: false
	},
	{
		solar: [1587, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1587],
		Leap: false
	},
	{
		solar: [1587, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1587],
		Leap: false
	},
	{
		solar: [1587, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1587],
		Leap: false
	},
	{
		solar: [1587, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1587],
		Leap: false
	},
	{
		solar: [1587, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1587],
		Leap: false
	},
	{
		solar: [1587, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1587],
		Leap: false
	},
	{
		solar: [1587, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1587],
		Leap: false
	},
	{
		solar: [1587, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1587],
		Leap: false
	},
	{
		solar: [1587, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1587],
		Leap: false
	},
	{
		solar: [1587, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1588],
		Leap: false
	},
	{
		solar: [1587, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1588],
		Leap: false
	},
	{
		solar: [1587, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1588],
		Leap: false
	},
	{
		solar: [1590, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1589],
		Leap: false
	},
	{
		solar: [1590, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1590],
		Leap: false
	},
	{
		solar: [1590, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1590],
		Leap: false
	},
	{
		solar: [1590, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1590],
		Leap: false
	},
	{
		solar: [1590, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1590],
		Leap: false
	},
	{
		solar: [1590, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1590],
		Leap: false
	},
	{
		solar: [1590, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1590],
		Leap: false
	},
	{
		solar: [1590, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1590],
		Leap: false
	},
	{
		solar: [1590, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1590],
		Leap: false
	},
	{
		solar: [1590, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1590],
		Leap: false
	},
	{
		solar: [1590, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1590],
		Leap: false
	},
	{
		solar: [1590, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1590],
		Leap: false
	},
	{
		solar: [1590, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1590],
		Leap: false
	},
	{
		solar: [1590, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1590],
		Leap: false
	},
	{
		solar: [1590, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1590],
		Leap: false
	},
	{
		solar: [1590, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1590],
		Leap: false
	},
	{
		solar: [1590, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1590],
		Leap: false
	},
	{
		solar: [1590, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1590],
		Leap: false
	},
	{
		solar: [1590, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1590],
		Leap: false
	},
	{
		solar: [1590, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1590],
		Leap: false
	},
	{
		solar: [1590, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1590],
		Leap: false
	},
	{
		solar: [1590, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1590],
		Leap: false
	},
	{
		solar: [1590, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1590],
		Leap: false
	},
	{
		solar: [1590, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1590],
		Leap: false
	},
	{
		solar: [1590, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1590],
		Leap: false
	},
	{
		solar: [1590, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1590],
		Leap: false
	},
	{
		solar: [1590, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1590],
		Leap: false
	},
	{
		solar: [1590, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1590],
		Leap: false
	},
	{
		solar: [1590, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1590],
		Leap: false
	},
	{
		solar: [1590, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1590],
		Leap: false
	},
	{
		solar: [1590, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1590],
		Leap: false
	},
	{
		solar: [1590, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1590],
		Leap: false
	},
	{
		solar: [1590, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1590],
		Leap: false
	},
	{
		solar: [1590, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1590],
		Leap: false
	},
	{
		solar: [1590, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1590],
		Leap: false
	},
	{
		solar: [1590, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1590],
		Leap: false
	},
	{
		solar: [1590, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1590],
		Leap: false
	},
	{
		solar: [1590, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1590],
		Leap: false
	},
	{
		solar: [1590, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1590],
		Leap: false
	},
	{
		solar: [1590, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1590],
		Leap: false
	},
	{
		solar: [1590, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1590],
		Leap: false
	},
	{
		solar: [1590, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1590],
		Leap: false
	},
	{
		solar: [1590, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1590],
		Leap: false
	},
	{
		solar: [1590, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1590],
		Leap: false
	},
	{
		solar: [1590, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1590],
		Leap: false
	},
	{
		solar: [1590, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1590],
		Leap: false
	},
	{
		solar: [1590, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1590],
		Leap: false
	},
	{
		solar: [1590, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1590],
		Leap: false
	},
	{
		solar: [1590, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1590],
		Leap: false
	},
	{
		solar: [1590, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1590],
		Leap: false
	},
	{
		solar: [1590, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1590],
		Leap: false
	},
	{
		solar: [1590, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1590],
		Leap: false
	},
	{
		solar: [1590, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1590],
		Leap: false
	},
	{
		solar: [1593, 0, 1],
		Dow: 2,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1593],
		Leap: true
	},
	{
		solar: [1593, 0, 2],
		Dow: 3,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1593],
		Leap: true
	},
	{
		solar: [1593, 0, 3],
		Dow: 4,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1593],
		Leap: true
	},
	{
		solar: [1593, 0, 4],
		Dow: 5,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1593],
		Leap: true
	},
	{
		solar: [1593, 0, 5],
		Dow: 6,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1593],
		Leap: true
	},
	{
		solar: [1593, 0, 30],
		Dow: 3,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1593],
		Leap: true
	},
	{
		solar: [1593, 0, 31],
		Dow: 4,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1593],
		Leap: true
	},
	{
		solar: [1593, 1, 1],
		Dow: 5,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1593],
		Leap: true
	},
	{
		solar: [1593, 1, 2],
		Dow: 6,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1593],
		Leap: true
	},
	{
		solar: [1593, 1, 30],
		Dow: 6,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [9, 1593],
		Leap: true
	},
	{
		solar: [1593, 1, 31],
		Dow: 0,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1593],
		Leap: true
	},
	{
		solar: [1593, 2, 1],
		Dow: 1,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1593],
		Leap: true
	},
	{
		solar: [1593, 2, 2],
		Dow: 2,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1593],
		Leap: true
	},
	{
		solar: [1593, 2, 30],
		Dow: 2,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1593],
		Leap: true
	},
	{
		solar: [1593, 2, 31],
		Dow: 3,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1593],
		Leap: true
	},
	{
		solar: [1593, 3, 1],
		Dow: 4,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1593],
		Leap: true
	},
	{
		solar: [1593, 3, 2],
		Dow: 5,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1593],
		Leap: true
	},
	{
		solar: [1593, 3, 30],
		Dow: 5,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1593],
		Leap: true
	},
	{
		solar: [1593, 3, 31],
		Dow: 6,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1593],
		Leap: true
	},
	{
		solar: [1593, 4, 1],
		Dow: 0,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1593],
		Leap: true
	},
	{
		solar: [1593, 4, 2],
		Dow: 1,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1593],
		Leap: true
	},
	{
		solar: [1593, 4, 30],
		Dow: 1,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1593],
		Leap: true
	},
	{
		solar: [1593, 4, 31],
		Dow: 2,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1593],
		Leap: true
	},
	{
		solar: [1593, 5, 1],
		Dow: 3,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1593],
		Leap: true
	},
	{
		solar: [1593, 5, 2],
		Dow: 4,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1593],
		Leap: true
	},
	{
		solar: [1593, 5, 30],
		Dow: 4,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1593],
		Leap: true
	},
	{
		solar: [1593, 5, 31],
		Dow: 5,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1593],
		Leap: true
	},
	{
		solar: [1593, 6, 1],
		Dow: 6,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [27, 1593],
		Leap: true
	},
	{
		solar: [1593, 6, 2],
		Dow: 0,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1593],
		Leap: true
	},
	{
		solar: [1593, 6, 29],
		Dow: 6,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [31, 1593],
		Leap: true
	},
	{
		solar: [1593, 6, 30],
		Dow: 0,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1593],
		Leap: true
	},
	{
		solar: [1593, 7, 1],
		Dow: 1,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1593],
		Leap: true
	},
	{
		solar: [1593, 7, 2],
		Dow: 2,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1593],
		Leap: true
	},
	{
		solar: [1593, 7, 29],
		Dow: 1,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1593],
		Leap: true
	},
	{
		solar: [1593, 7, 30],
		Dow: 2,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1593],
		Leap: true
	},
	{
		solar: [1593, 8, 1],
		Dow: 3,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1593],
		Leap: true
	},
	{
		solar: [1593, 8, 2],
		Dow: 4,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1593],
		Leap: true
	},
	{
		solar: [1593, 8, 29],
		Dow: 3,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1593],
		Leap: true
	},
	{
		solar: [1593, 8, 30],
		Dow: 4,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1593],
		Leap: true
	},
	{
		solar: [1593, 9, 1],
		Dow: 5,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1593],
		Leap: true
	},
	{
		solar: [1593, 9, 2],
		Dow: 6,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1593],
		Leap: true
	},
	{
		solar: [1593, 9, 29],
		Dow: 5,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1593],
		Leap: true
	},
	{
		solar: [1593, 9, 30],
		Dow: 6,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1593],
		Leap: true
	},
	{
		solar: [1593, 10, 1],
		Dow: 0,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1593],
		Leap: true
	},
	{
		solar: [1593, 10, 2],
		Dow: 1,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1593],
		Leap: true
	},
	{
		solar: [1593, 10, 29],
		Dow: 0,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1593],
		Leap: true
	},
	{
		solar: [1593, 10, 30],
		Dow: 1,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1593],
		Leap: true
	},
	{
		solar: [1593, 11, 1],
		Dow: 2,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1593],
		Leap: true
	},
	{
		solar: [1593, 11, 2],
		Dow: 3,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1593],
		Leap: true
	},
	{
		solar: [1593, 11, 26],
		Dow: 6,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 53,
		Woy: [52, 1593],
		Leap: true
	},
	{
		solar: [1593, 11, 27],
		Dow: 0,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1593],
		Leap: true
	},
	{
		solar: [1593, 11, 28],
		Dow: 1,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1593],
		Leap: true
	},
	{
		solar: [1593, 11, 29],
		Dow: 2,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1593],
		Leap: true
	},
	{
		solar: [1593, 11, 30],
		Dow: 3,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 53,
		Woy: [53, 1593],
		Leap: true
	},
	{
		solar: [1596, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1595],
		Leap: false
	},
	{
		solar: [1596, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1596],
		Leap: false
	},
	{
		solar: [1596, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1596],
		Leap: false
	},
	{
		solar: [1596, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1596],
		Leap: false
	},
	{
		solar: [1596, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1596],
		Leap: false
	},
	{
		solar: [1596, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1596],
		Leap: false
	},
	{
		solar: [1596, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1596],
		Leap: false
	},
	{
		solar: [1596, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1596],
		Leap: false
	},
	{
		solar: [1596, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1596],
		Leap: false
	},
	{
		solar: [1596, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1596],
		Leap: false
	},
	{
		solar: [1596, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1596],
		Leap: false
	},
	{
		solar: [1596, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1596],
		Leap: false
	},
	{
		solar: [1596, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1596],
		Leap: false
	},
	{
		solar: [1596, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1596],
		Leap: false
	},
	{
		solar: [1596, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1596],
		Leap: false
	},
	{
		solar: [1596, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1596],
		Leap: false
	},
	{
		solar: [1596, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1596],
		Leap: false
	},
	{
		solar: [1596, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1596],
		Leap: false
	},
	{
		solar: [1596, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1596],
		Leap: false
	},
	{
		solar: [1596, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1596],
		Leap: false
	},
	{
		solar: [1596, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1596],
		Leap: false
	},
	{
		solar: [1596, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1596],
		Leap: false
	},
	{
		solar: [1596, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1596],
		Leap: false
	},
	{
		solar: [1596, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1596],
		Leap: false
	},
	{
		solar: [1596, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1596],
		Leap: false
	},
	{
		solar: [1596, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1596],
		Leap: false
	},
	{
		solar: [1596, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1596],
		Leap: false
	},
	{
		solar: [1596, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1596],
		Leap: false
	},
	{
		solar: [1596, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1596],
		Leap: false
	},
	{
		solar: [1596, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1596],
		Leap: false
	},
	{
		solar: [1596, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1596],
		Leap: false
	},
	{
		solar: [1596, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1596],
		Leap: false
	},
	{
		solar: [1596, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1596],
		Leap: false
	},
	{
		solar: [1596, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1596],
		Leap: false
	},
	{
		solar: [1596, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1596],
		Leap: false
	},
	{
		solar: [1596, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1596],
		Leap: false
	},
	{
		solar: [1596, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1596],
		Leap: false
	},
	{
		solar: [1596, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1596],
		Leap: false
	},
	{
		solar: [1596, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1596],
		Leap: false
	},
	{
		solar: [1596, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1596],
		Leap: false
	},
	{
		solar: [1596, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1596],
		Leap: false
	},
	{
		solar: [1596, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1596],
		Leap: false
	},
	{
		solar: [1596, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1596],
		Leap: false
	},
	{
		solar: [1596, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1596],
		Leap: false
	},
	{
		solar: [1596, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1596],
		Leap: false
	},
	{
		solar: [1596, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1596],
		Leap: false
	},
	{
		solar: [1596, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1596],
		Leap: false
	},
	{
		solar: [1596, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1596],
		Leap: false
	},
	{
		solar: [1596, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1596],
		Leap: false
	},
	{
		solar: [1596, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1596],
		Leap: false
	},
	{
		solar: [1596, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1596],
		Leap: false
	},
	{
		solar: [1596, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1596],
		Leap: false
	},
	{
		solar: [1596, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1596],
		Leap: false
	},
	{
		solar: [1599, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1599],
		Leap: false
	},
	{
		solar: [1599, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1599],
		Leap: false
	},
	{
		solar: [1599, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1599],
		Leap: false
	},
	{
		solar: [1599, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1599],
		Leap: false
	},
	{
		solar: [1599, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1599],
		Leap: false
	},
	{
		solar: [1599, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1599],
		Leap: false
	},
	{
		solar: [1599, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1599],
		Leap: false
	},
	{
		solar: [1599, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1599],
		Leap: false
	},
	{
		solar: [1599, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1599],
		Leap: false
	},
	{
		solar: [1599, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1599],
		Leap: false
	},
	{
		solar: [1599, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1599],
		Leap: false
	},
	{
		solar: [1599, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1599],
		Leap: false
	},
	{
		solar: [1599, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1599],
		Leap: false
	},
	{
		solar: [1599, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1599],
		Leap: false
	},
	{
		solar: [1599, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1599],
		Leap: false
	},
	{
		solar: [1599, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1599],
		Leap: false
	},
	{
		solar: [1599, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1599],
		Leap: false
	},
	{
		solar: [1599, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1599],
		Leap: false
	},
	{
		solar: [1599, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1599],
		Leap: false
	},
	{
		solar: [1599, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1599],
		Leap: false
	},
	{
		solar: [1599, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1599],
		Leap: false
	},
	{
		solar: [1599, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1599],
		Leap: false
	},
	{
		solar: [1599, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1599],
		Leap: false
	},
	{
		solar: [1599, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1599],
		Leap: false
	},
	{
		solar: [1599, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1599],
		Leap: false
	},
	{
		solar: [1599, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1599],
		Leap: false
	},
	{
		solar: [1599, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1599],
		Leap: false
	},
	{
		solar: [1599, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1599],
		Leap: false
	},
	{
		solar: [1599, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1599],
		Leap: false
	},
	{
		solar: [1599, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1599],
		Leap: false
	},
	{
		solar: [1599, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1599],
		Leap: false
	},
	{
		solar: [1599, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1599],
		Leap: false
	},
	{
		solar: [1599, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1599],
		Leap: false
	},
	{
		solar: [1599, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1599],
		Leap: false
	},
	{
		solar: [1599, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1599],
		Leap: false
	},
	{
		solar: [1599, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1599],
		Leap: false
	},
	{
		solar: [1599, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1599],
		Leap: false
	},
	{
		solar: [1599, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1599],
		Leap: false
	},
	{
		solar: [1599, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1599],
		Leap: false
	},
	{
		solar: [1599, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1599],
		Leap: false
	},
	{
		solar: [1599, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1599],
		Leap: false
	},
	{
		solar: [1599, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1599],
		Leap: false
	},
	{
		solar: [1599, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1599],
		Leap: false
	},
	{
		solar: [1599, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1599],
		Leap: false
	},
	{
		solar: [1599, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1599],
		Leap: false
	},
	{
		solar: [1599, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1599],
		Leap: false
	},
	{
		solar: [1599, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1599],
		Leap: false
	},
	{
		solar: [1599, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1599],
		Leap: false
	},
	{
		solar: [1599, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1599],
		Leap: false
	},
	{
		solar: [1599, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1599],
		Leap: false
	},
	{
		solar: [1599, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1599],
		Leap: false
	},
	{
		solar: [1599, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1599],
		Leap: false
	},
	{
		solar: [1599, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1599],
		Leap: false
	},
	{
		solar: [1602, 0, 1],
		Dow: 6,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1601],
		Leap: true
	},
	{
		solar: [1602, 0, 2],
		Dow: 0,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1602],
		Leap: true
	},
	{
		solar: [1602, 0, 3],
		Dow: 1,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1602],
		Leap: true
	},
	{
		solar: [1602, 0, 4],
		Dow: 2,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1602],
		Leap: true
	},
	{
		solar: [1602, 0, 5],
		Dow: 3,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1602],
		Leap: true
	},
	{
		solar: [1602, 0, 30],
		Dow: 0,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1602],
		Leap: true
	},
	{
		solar: [1602, 0, 31],
		Dow: 1,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1602],
		Leap: true
	},
	{
		solar: [1602, 1, 1],
		Dow: 2,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1602],
		Leap: true
	},
	{
		solar: [1602, 1, 2],
		Dow: 3,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1602],
		Leap: true
	},
	{
		solar: [1602, 1, 30],
		Dow: 3,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1602],
		Leap: true
	},
	{
		solar: [1602, 1, 31],
		Dow: 4,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1602],
		Leap: true
	},
	{
		solar: [1602, 2, 1],
		Dow: 5,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1602],
		Leap: true
	},
	{
		solar: [1602, 2, 2],
		Dow: 6,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1602],
		Leap: true
	},
	{
		solar: [1602, 2, 30],
		Dow: 6,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1602],
		Leap: true
	},
	{
		solar: [1602, 2, 31],
		Dow: 0,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1602],
		Leap: true
	},
	{
		solar: [1602, 3, 1],
		Dow: 1,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1602],
		Leap: true
	},
	{
		solar: [1602, 3, 2],
		Dow: 2,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1602],
		Leap: true
	},
	{
		solar: [1602, 3, 30],
		Dow: 2,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1602],
		Leap: true
	},
	{
		solar: [1602, 3, 31],
		Dow: 3,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1602],
		Leap: true
	},
	{
		solar: [1602, 4, 1],
		Dow: 4,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1602],
		Leap: true
	},
	{
		solar: [1602, 4, 2],
		Dow: 5,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1602],
		Leap: true
	},
	{
		solar: [1602, 4, 30],
		Dow: 5,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1602],
		Leap: true
	},
	{
		solar: [1602, 4, 31],
		Dow: 6,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1602],
		Leap: true
	},
	{
		solar: [1602, 5, 1],
		Dow: 0,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1602],
		Leap: true
	},
	{
		solar: [1602, 5, 2],
		Dow: 1,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1602],
		Leap: true
	},
	{
		solar: [1602, 5, 30],
		Dow: 1,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1602],
		Leap: true
	},
	{
		solar: [1602, 5, 31],
		Dow: 2,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1602],
		Leap: true
	},
	{
		solar: [1602, 6, 1],
		Dow: 3,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1602],
		Leap: true
	},
	{
		solar: [1602, 6, 2],
		Dow: 4,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1602],
		Leap: true
	},
	{
		solar: [1602, 6, 29],
		Dow: 3,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1602],
		Leap: true
	},
	{
		solar: [1602, 6, 30],
		Dow: 4,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1602],
		Leap: true
	},
	{
		solar: [1602, 7, 1],
		Dow: 5,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1602],
		Leap: true
	},
	{
		solar: [1602, 7, 2],
		Dow: 6,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1602],
		Leap: true
	},
	{
		solar: [1602, 7, 29],
		Dow: 5,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1602],
		Leap: true
	},
	{
		solar: [1602, 7, 30],
		Dow: 6,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1602],
		Leap: true
	},
	{
		solar: [1602, 8, 1],
		Dow: 0,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1602],
		Leap: true
	},
	{
		solar: [1602, 8, 2],
		Dow: 1,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1602],
		Leap: true
	},
	{
		solar: [1602, 8, 29],
		Dow: 0,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1602],
		Leap: true
	},
	{
		solar: [1602, 8, 30],
		Dow: 1,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1602],
		Leap: true
	},
	{
		solar: [1602, 9, 1],
		Dow: 2,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1602],
		Leap: true
	},
	{
		solar: [1602, 9, 2],
		Dow: 3,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1602],
		Leap: true
	},
	{
		solar: [1602, 9, 29],
		Dow: 2,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1602],
		Leap: true
	},
	{
		solar: [1602, 9, 30],
		Dow: 3,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1602],
		Leap: true
	},
	{
		solar: [1602, 10, 1],
		Dow: 4,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1602],
		Leap: true
	},
	{
		solar: [1602, 10, 2],
		Dow: 5,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1602],
		Leap: true
	},
	{
		solar: [1602, 10, 29],
		Dow: 4,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1602],
		Leap: true
	},
	{
		solar: [1602, 10, 30],
		Dow: 5,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1602],
		Leap: true
	},
	{
		solar: [1602, 11, 1],
		Dow: 6,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1602],
		Leap: true
	},
	{
		solar: [1602, 11, 2],
		Dow: 0,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1602],
		Leap: true
	},
	{
		solar: [1602, 11, 26],
		Dow: 3,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1602],
		Leap: true
	},
	{
		solar: [1602, 11, 27],
		Dow: 4,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1602],
		Leap: true
	},
	{
		solar: [1602, 11, 28],
		Dow: 5,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1602],
		Leap: true
	},
	{
		solar: [1602, 11, 29],
		Dow: 6,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1602],
		Leap: true
	},
	{
		solar: [1602, 11, 30],
		Dow: 0,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1603],
		Leap: true
	},
	{
		solar: [1605, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1605],
		Leap: false
	},
	{
		solar: [1605, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1605],
		Leap: false
	},
	{
		solar: [1605, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1605],
		Leap: false
	},
	{
		solar: [1605, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1605],
		Leap: false
	},
	{
		solar: [1605, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1605],
		Leap: false
	},
	{
		solar: [1605, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1605],
		Leap: false
	},
	{
		solar: [1605, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1605],
		Leap: false
	},
	{
		solar: [1605, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1605],
		Leap: false
	},
	{
		solar: [1605, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1605],
		Leap: false
	},
	{
		solar: [1605, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1605],
		Leap: false
	},
	{
		solar: [1605, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1605],
		Leap: false
	},
	{
		solar: [1605, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1605],
		Leap: false
	},
	{
		solar: [1605, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1605],
		Leap: false
	},
	{
		solar: [1605, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1605],
		Leap: false
	},
	{
		solar: [1605, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1605],
		Leap: false
	},
	{
		solar: [1605, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1605],
		Leap: false
	},
	{
		solar: [1605, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1605],
		Leap: false
	},
	{
		solar: [1605, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1605],
		Leap: false
	},
	{
		solar: [1605, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1605],
		Leap: false
	},
	{
		solar: [1605, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1605],
		Leap: false
	},
	{
		solar: [1605, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1605],
		Leap: false
	},
	{
		solar: [1605, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1605],
		Leap: false
	},
	{
		solar: [1605, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1605],
		Leap: false
	},
	{
		solar: [1605, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1605],
		Leap: false
	},
	{
		solar: [1605, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1605],
		Leap: false
	},
	{
		solar: [1605, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1605],
		Leap: false
	},
	{
		solar: [1605, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1605],
		Leap: false
	},
	{
		solar: [1605, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1605],
		Leap: false
	},
	{
		solar: [1605, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1605],
		Leap: false
	},
	{
		solar: [1605, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1605],
		Leap: false
	},
	{
		solar: [1605, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1605],
		Leap: false
	},
	{
		solar: [1605, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1605],
		Leap: false
	},
	{
		solar: [1605, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1605],
		Leap: false
	},
	{
		solar: [1605, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1605],
		Leap: false
	},
	{
		solar: [1605, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1605],
		Leap: false
	},
	{
		solar: [1605, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1605],
		Leap: false
	},
	{
		solar: [1605, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1605],
		Leap: false
	},
	{
		solar: [1605, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1605],
		Leap: false
	},
	{
		solar: [1605, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1605],
		Leap: false
	},
	{
		solar: [1605, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1605],
		Leap: false
	},
	{
		solar: [1605, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1605],
		Leap: false
	},
	{
		solar: [1605, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1605],
		Leap: false
	},
	{
		solar: [1605, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1605],
		Leap: false
	},
	{
		solar: [1605, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1605],
		Leap: false
	},
	{
		solar: [1605, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1605],
		Leap: false
	},
	{
		solar: [1605, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1605],
		Leap: false
	},
	{
		solar: [1605, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1605],
		Leap: false
	},
	{
		solar: [1605, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1605],
		Leap: false
	},
	{
		solar: [1605, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1605],
		Leap: false
	},
	{
		solar: [1605, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1605],
		Leap: false
	},
	{
		solar: [1605, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1605],
		Leap: false
	},
	{
		solar: [1605, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1605],
		Leap: false
	},
	{
		solar: [1605, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1605],
		Leap: false
	},
	{
		solar: [1608, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1608],
		Leap: false
	},
	{
		solar: [1608, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1608],
		Leap: false
	},
	{
		solar: [1608, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1608],
		Leap: false
	},
	{
		solar: [1608, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1608],
		Leap: false
	},
	{
		solar: [1608, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1608],
		Leap: false
	},
	{
		solar: [1608, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1608],
		Leap: false
	},
	{
		solar: [1608, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1608],
		Leap: false
	},
	{
		solar: [1608, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1608],
		Leap: false
	},
	{
		solar: [1608, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1608],
		Leap: false
	},
	{
		solar: [1608, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1608],
		Leap: false
	},
	{
		solar: [1608, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1608],
		Leap: false
	},
	{
		solar: [1608, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1608],
		Leap: false
	},
	{
		solar: [1608, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1608],
		Leap: false
	},
	{
		solar: [1608, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1608],
		Leap: false
	},
	{
		solar: [1608, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1608],
		Leap: false
	},
	{
		solar: [1608, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1608],
		Leap: false
	},
	{
		solar: [1608, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1608],
		Leap: false
	},
	{
		solar: [1608, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1608],
		Leap: false
	},
	{
		solar: [1608, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1608],
		Leap: false
	},
	{
		solar: [1608, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1608],
		Leap: false
	},
	{
		solar: [1608, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1608],
		Leap: false
	},
	{
		solar: [1608, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1608],
		Leap: false
	},
	{
		solar: [1608, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1608],
		Leap: false
	},
	{
		solar: [1608, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1608],
		Leap: false
	},
	{
		solar: [1608, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1608],
		Leap: false
	},
	{
		solar: [1608, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1608],
		Leap: false
	},
	{
		solar: [1608, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1608],
		Leap: false
	},
	{
		solar: [1608, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1608],
		Leap: false
	},
	{
		solar: [1608, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1608],
		Leap: false
	},
	{
		solar: [1608, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1608],
		Leap: false
	},
	{
		solar: [1608, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1608],
		Leap: false
	},
	{
		solar: [1608, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1608],
		Leap: false
	},
	{
		solar: [1608, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1608],
		Leap: false
	},
	{
		solar: [1608, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1608],
		Leap: false
	},
	{
		solar: [1608, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1608],
		Leap: false
	},
	{
		solar: [1608, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1608],
		Leap: false
	},
	{
		solar: [1608, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1608],
		Leap: false
	},
	{
		solar: [1608, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1608],
		Leap: false
	},
	{
		solar: [1608, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1608],
		Leap: false
	},
	{
		solar: [1608, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1608],
		Leap: false
	},
	{
		solar: [1608, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1608],
		Leap: false
	},
	{
		solar: [1608, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1608],
		Leap: false
	},
	{
		solar: [1608, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1608],
		Leap: false
	},
	{
		solar: [1608, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1608],
		Leap: false
	},
	{
		solar: [1608, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1608],
		Leap: false
	},
	{
		solar: [1608, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1608],
		Leap: false
	},
	{
		solar: [1608, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1608],
		Leap: false
	},
	{
		solar: [1608, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1608],
		Leap: false
	},
	{
		solar: [1608, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1608],
		Leap: false
	},
	{
		solar: [1608, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1608],
		Leap: false
	},
	{
		solar: [1608, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1608],
		Leap: false
	},
	{
		solar: [1608, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1608],
		Leap: false
	},
	{
		solar: [1608, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1609],
		Leap: false
	},
	{
		solar: [1611, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1610],
		Leap: false
	},
	{
		solar: [1611, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1610],
		Leap: false
	},
	{
		solar: [1611, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1610],
		Leap: false
	},
	{
		solar: [1611, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1611],
		Leap: false
	},
	{
		solar: [1611, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1611],
		Leap: false
	},
	{
		solar: [1611, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1611],
		Leap: false
	},
	{
		solar: [1611, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1611],
		Leap: false
	},
	{
		solar: [1611, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1611],
		Leap: false
	},
	{
		solar: [1611, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1611],
		Leap: false
	},
	{
		solar: [1611, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1611],
		Leap: false
	},
	{
		solar: [1611, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1611],
		Leap: false
	},
	{
		solar: [1611, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1611],
		Leap: false
	},
	{
		solar: [1611, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1611],
		Leap: false
	},
	{
		solar: [1611, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1611],
		Leap: false
	},
	{
		solar: [1611, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1611],
		Leap: false
	},
	{
		solar: [1611, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1611],
		Leap: false
	},
	{
		solar: [1611, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1611],
		Leap: false
	},
	{
		solar: [1611, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1611],
		Leap: false
	},
	{
		solar: [1611, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1611],
		Leap: false
	},
	{
		solar: [1611, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1611],
		Leap: false
	},
	{
		solar: [1611, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1611],
		Leap: false
	},
	{
		solar: [1611, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1611],
		Leap: false
	},
	{
		solar: [1611, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1611],
		Leap: false
	},
	{
		solar: [1611, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1611],
		Leap: false
	},
	{
		solar: [1611, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1611],
		Leap: false
	},
	{
		solar: [1611, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1611],
		Leap: false
	},
	{
		solar: [1611, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1611],
		Leap: false
	},
	{
		solar: [1611, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1611],
		Leap: false
	},
	{
		solar: [1611, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1611],
		Leap: false
	},
	{
		solar: [1611, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1611],
		Leap: false
	},
	{
		solar: [1611, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1611],
		Leap: false
	},
	{
		solar: [1611, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1611],
		Leap: false
	},
	{
		solar: [1611, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1611],
		Leap: false
	},
	{
		solar: [1611, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1611],
		Leap: false
	},
	{
		solar: [1611, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1611],
		Leap: false
	},
	{
		solar: [1611, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1611],
		Leap: false
	},
	{
		solar: [1611, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1611],
		Leap: false
	},
	{
		solar: [1611, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1611],
		Leap: false
	},
	{
		solar: [1611, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1611],
		Leap: false
	},
	{
		solar: [1611, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1611],
		Leap: false
	},
	{
		solar: [1611, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1611],
		Leap: false
	},
	{
		solar: [1611, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1611],
		Leap: false
	},
	{
		solar: [1611, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1611],
		Leap: false
	},
	{
		solar: [1611, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1611],
		Leap: false
	},
	{
		solar: [1611, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1611],
		Leap: false
	},
	{
		solar: [1611, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1611],
		Leap: false
	},
	{
		solar: [1611, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1611],
		Leap: false
	},
	{
		solar: [1611, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1611],
		Leap: false
	},
	{
		solar: [1611, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1611],
		Leap: false
	},
	{
		solar: [1611, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1611],
		Leap: false
	},
	{
		solar: [1611, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1611],
		Leap: false
	},
	{
		solar: [1611, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1611],
		Leap: false
	},
	{
		solar: [1611, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1611],
		Leap: false
	},
	{
		solar: [1614, 0, 1],
		Dow: 0,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1614],
		Leap: true
	},
	{
		solar: [1614, 0, 2],
		Dow: 1,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1614],
		Leap: true
	},
	{
		solar: [1614, 0, 3],
		Dow: 2,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1614],
		Leap: true
	},
	{
		solar: [1614, 0, 4],
		Dow: 3,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1614],
		Leap: true
	},
	{
		solar: [1614, 0, 5],
		Dow: 4,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1614],
		Leap: true
	},
	{
		solar: [1614, 0, 30],
		Dow: 1,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1614],
		Leap: true
	},
	{
		solar: [1614, 0, 31],
		Dow: 2,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1614],
		Leap: true
	},
	{
		solar: [1614, 1, 1],
		Dow: 3,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1614],
		Leap: true
	},
	{
		solar: [1614, 1, 2],
		Dow: 4,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1614],
		Leap: true
	},
	{
		solar: [1614, 1, 30],
		Dow: 4,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1614],
		Leap: true
	},
	{
		solar: [1614, 1, 31],
		Dow: 5,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1614],
		Leap: true
	},
	{
		solar: [1614, 2, 1],
		Dow: 6,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1614],
		Leap: true
	},
	{
		solar: [1614, 2, 2],
		Dow: 0,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1614],
		Leap: true
	},
	{
		solar: [1614, 2, 30],
		Dow: 0,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1614],
		Leap: true
	},
	{
		solar: [1614, 2, 31],
		Dow: 1,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1614],
		Leap: true
	},
	{
		solar: [1614, 3, 1],
		Dow: 2,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1614],
		Leap: true
	},
	{
		solar: [1614, 3, 2],
		Dow: 3,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1614],
		Leap: true
	},
	{
		solar: [1614, 3, 30],
		Dow: 3,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1614],
		Leap: true
	},
	{
		solar: [1614, 3, 31],
		Dow: 4,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1614],
		Leap: true
	},
	{
		solar: [1614, 4, 1],
		Dow: 5,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1614],
		Leap: true
	},
	{
		solar: [1614, 4, 2],
		Dow: 6,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1614],
		Leap: true
	},
	{
		solar: [1614, 4, 30],
		Dow: 6,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1614],
		Leap: true
	},
	{
		solar: [1614, 4, 31],
		Dow: 0,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1614],
		Leap: true
	},
	{
		solar: [1614, 5, 1],
		Dow: 1,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1614],
		Leap: true
	},
	{
		solar: [1614, 5, 2],
		Dow: 2,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1614],
		Leap: true
	},
	{
		solar: [1614, 5, 30],
		Dow: 2,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1614],
		Leap: true
	},
	{
		solar: [1614, 5, 31],
		Dow: 3,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1614],
		Leap: true
	},
	{
		solar: [1614, 6, 1],
		Dow: 4,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1614],
		Leap: true
	},
	{
		solar: [1614, 6, 2],
		Dow: 5,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1614],
		Leap: true
	},
	{
		solar: [1614, 6, 29],
		Dow: 4,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1614],
		Leap: true
	},
	{
		solar: [1614, 6, 30],
		Dow: 5,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1614],
		Leap: true
	},
	{
		solar: [1614, 7, 1],
		Dow: 6,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1614],
		Leap: true
	},
	{
		solar: [1614, 7, 2],
		Dow: 0,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1614],
		Leap: true
	},
	{
		solar: [1614, 7, 29],
		Dow: 6,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1614],
		Leap: true
	},
	{
		solar: [1614, 7, 30],
		Dow: 0,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1614],
		Leap: true
	},
	{
		solar: [1614, 8, 1],
		Dow: 1,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1614],
		Leap: true
	},
	{
		solar: [1614, 8, 2],
		Dow: 2,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1614],
		Leap: true
	},
	{
		solar: [1614, 8, 29],
		Dow: 1,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1614],
		Leap: true
	},
	{
		solar: [1614, 8, 30],
		Dow: 2,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1614],
		Leap: true
	},
	{
		solar: [1614, 9, 1],
		Dow: 3,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1614],
		Leap: true
	},
	{
		solar: [1614, 9, 2],
		Dow: 4,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1614],
		Leap: true
	},
	{
		solar: [1614, 9, 29],
		Dow: 3,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1614],
		Leap: true
	},
	{
		solar: [1614, 9, 30],
		Dow: 4,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1614],
		Leap: true
	},
	{
		solar: [1614, 10, 1],
		Dow: 5,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1614],
		Leap: true
	},
	{
		solar: [1614, 10, 2],
		Dow: 6,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1614],
		Leap: true
	},
	{
		solar: [1614, 10, 29],
		Dow: 5,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1614],
		Leap: true
	},
	{
		solar: [1614, 10, 30],
		Dow: 6,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1614],
		Leap: true
	},
	{
		solar: [1614, 11, 1],
		Dow: 0,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1614],
		Leap: true
	},
	{
		solar: [1614, 11, 2],
		Dow: 1,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1614],
		Leap: true
	},
	{
		solar: [1614, 11, 26],
		Dow: 4,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1614],
		Leap: true
	},
	{
		solar: [1614, 11, 27],
		Dow: 5,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1614],
		Leap: true
	},
	{
		solar: [1614, 11, 28],
		Dow: 6,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1614],
		Leap: true
	},
	{
		solar: [1614, 11, 29],
		Dow: 0,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1615],
		Leap: true
	},
	{
		solar: [1614, 11, 30],
		Dow: 1,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1615],
		Leap: true
	},
	{
		solar: [1617, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1616],
		Leap: false
	},
	{
		solar: [1617, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1616],
		Leap: false
	},
	{
		solar: [1617, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1616],
		Leap: false
	},
	{
		solar: [1617, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1617],
		Leap: false
	},
	{
		solar: [1617, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1617],
		Leap: false
	},
	{
		solar: [1617, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1617],
		Leap: false
	},
	{
		solar: [1617, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1617],
		Leap: false
	},
	{
		solar: [1617, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1617],
		Leap: false
	},
	{
		solar: [1617, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1617],
		Leap: false
	},
	{
		solar: [1617, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1617],
		Leap: false
	},
	{
		solar: [1617, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1617],
		Leap: false
	},
	{
		solar: [1617, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1617],
		Leap: false
	},
	{
		solar: [1617, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1617],
		Leap: false
	},
	{
		solar: [1617, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1617],
		Leap: false
	},
	{
		solar: [1617, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1617],
		Leap: false
	},
	{
		solar: [1617, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1617],
		Leap: false
	},
	{
		solar: [1617, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1617],
		Leap: false
	},
	{
		solar: [1617, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1617],
		Leap: false
	},
	{
		solar: [1617, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1617],
		Leap: false
	},
	{
		solar: [1617, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1617],
		Leap: false
	},
	{
		solar: [1617, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1617],
		Leap: false
	},
	{
		solar: [1617, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1617],
		Leap: false
	},
	{
		solar: [1617, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1617],
		Leap: false
	},
	{
		solar: [1617, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1617],
		Leap: false
	},
	{
		solar: [1617, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1617],
		Leap: false
	},
	{
		solar: [1617, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1617],
		Leap: false
	},
	{
		solar: [1617, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1617],
		Leap: false
	},
	{
		solar: [1617, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1617],
		Leap: false
	},
	{
		solar: [1617, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1617],
		Leap: false
	},
	{
		solar: [1617, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1617],
		Leap: false
	},
	{
		solar: [1617, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1617],
		Leap: false
	},
	{
		solar: [1617, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1617],
		Leap: false
	},
	{
		solar: [1617, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1617],
		Leap: false
	},
	{
		solar: [1617, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1617],
		Leap: false
	},
	{
		solar: [1617, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1617],
		Leap: false
	},
	{
		solar: [1617, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1617],
		Leap: false
	},
	{
		solar: [1617, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1617],
		Leap: false
	},
	{
		solar: [1617, 8, 29],
		Dow: 5,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1617],
		Leap: false
	},
	{
		solar: [1617, 8, 30],
		Dow: 6,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1617],
		Leap: false
	},
	{
		solar: [1617, 9, 1],
		Dow: 0,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1617],
		Leap: false
	},
	{
		solar: [1617, 9, 2],
		Dow: 1,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1617],
		Leap: false
	},
	{
		solar: [1617, 9, 29],
		Dow: 0,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1617],
		Leap: false
	},
	{
		solar: [1617, 9, 30],
		Dow: 1,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1617],
		Leap: false
	},
	{
		solar: [1617, 10, 1],
		Dow: 2,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1617],
		Leap: false
	},
	{
		solar: [1617, 10, 2],
		Dow: 3,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1617],
		Leap: false
	},
	{
		solar: [1617, 10, 29],
		Dow: 2,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1617],
		Leap: false
	},
	{
		solar: [1617, 10, 30],
		Dow: 3,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1617],
		Leap: false
	},
	{
		solar: [1617, 11, 1],
		Dow: 4,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1617],
		Leap: false
	},
	{
		solar: [1617, 11, 2],
		Dow: 5,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1617],
		Leap: false
	},
	{
		solar: [1617, 11, 26],
		Dow: 1,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1617],
		Leap: false
	},
	{
		solar: [1617, 11, 27],
		Dow: 2,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1617],
		Leap: false
	},
	{
		solar: [1617, 11, 28],
		Dow: 3,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1617],
		Leap: false
	},
	{
		solar: [1617, 11, 29],
		Dow: 4,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1617],
		Leap: false
	},
	{
		solar: [1620, 0, 1],
		Dow: 1,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1620],
		Leap: false
	},
	{
		solar: [1620, 0, 2],
		Dow: 2,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1620],
		Leap: false
	},
	{
		solar: [1620, 0, 3],
		Dow: 3,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1620],
		Leap: false
	},
	{
		solar: [1620, 0, 4],
		Dow: 4,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1620],
		Leap: false
	},
	{
		solar: [1620, 0, 5],
		Dow: 5,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1620],
		Leap: false
	},
	{
		solar: [1620, 0, 30],
		Dow: 2,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1620],
		Leap: false
	},
	{
		solar: [1620, 0, 31],
		Dow: 3,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1620],
		Leap: false
	},
	{
		solar: [1620, 1, 1],
		Dow: 4,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1620],
		Leap: false
	},
	{
		solar: [1620, 1, 2],
		Dow: 5,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1620],
		Leap: false
	},
	{
		solar: [1620, 1, 30],
		Dow: 5,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1620],
		Leap: false
	},
	{
		solar: [1620, 1, 31],
		Dow: 6,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1620],
		Leap: false
	},
	{
		solar: [1620, 2, 1],
		Dow: 0,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1620],
		Leap: false
	},
	{
		solar: [1620, 2, 2],
		Dow: 1,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1620],
		Leap: false
	},
	{
		solar: [1620, 2, 30],
		Dow: 1,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1620],
		Leap: false
	},
	{
		solar: [1620, 2, 31],
		Dow: 2,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1620],
		Leap: false
	},
	{
		solar: [1620, 3, 1],
		Dow: 3,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1620],
		Leap: false
	},
	{
		solar: [1620, 3, 2],
		Dow: 4,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1620],
		Leap: false
	},
	{
		solar: [1620, 3, 30],
		Dow: 4,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1620],
		Leap: false
	},
	{
		solar: [1620, 3, 31],
		Dow: 5,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1620],
		Leap: false
	},
	{
		solar: [1620, 4, 1],
		Dow: 6,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1620],
		Leap: false
	},
	{
		solar: [1620, 4, 2],
		Dow: 0,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1620],
		Leap: false
	},
	{
		solar: [1620, 4, 30],
		Dow: 0,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1620],
		Leap: false
	},
	{
		solar: [1620, 4, 31],
		Dow: 1,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1620],
		Leap: false
	},
	{
		solar: [1620, 5, 1],
		Dow: 2,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1620],
		Leap: false
	},
	{
		solar: [1620, 5, 2],
		Dow: 3,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1620],
		Leap: false
	},
	{
		solar: [1620, 5, 30],
		Dow: 3,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1620],
		Leap: false
	},
	{
		solar: [1620, 5, 31],
		Dow: 4,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1620],
		Leap: false
	},
	{
		solar: [1620, 6, 1],
		Dow: 5,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1620],
		Leap: false
	},
	{
		solar: [1620, 6, 2],
		Dow: 6,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1620],
		Leap: false
	},
	{
		solar: [1620, 6, 29],
		Dow: 5,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1620],
		Leap: false
	},
	{
		solar: [1620, 6, 30],
		Dow: 6,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1620],
		Leap: false
	},
	{
		solar: [1620, 7, 1],
		Dow: 0,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1620],
		Leap: false
	},
	{
		solar: [1620, 7, 2],
		Dow: 1,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1620],
		Leap: false
	},
	{
		solar: [1620, 7, 29],
		Dow: 0,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1620],
		Leap: false
	},
	{
		solar: [1620, 7, 30],
		Dow: 1,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1620],
		Leap: false
	},
	{
		solar: [1620, 8, 1],
		Dow: 2,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1620],
		Leap: false
	},
	{
		solar: [1620, 8, 2],
		Dow: 3,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1620],
		Leap: false
	},
	{
		solar: [1620, 8, 29],
		Dow: 2,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1620],
		Leap: false
	},
	{
		solar: [1620, 8, 30],
		Dow: 3,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1620],
		Leap: false
	},
	{
		solar: [1620, 9, 1],
		Dow: 4,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1620],
		Leap: false
	},
	{
		solar: [1620, 9, 2],
		Dow: 5,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1620],
		Leap: false
	},
	{
		solar: [1620, 9, 29],
		Dow: 4,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1620],
		Leap: false
	},
	{
		solar: [1620, 9, 30],
		Dow: 5,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1620],
		Leap: false
	},
	{
		solar: [1620, 10, 1],
		Dow: 6,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1620],
		Leap: false
	},
	{
		solar: [1620, 10, 2],
		Dow: 0,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1620],
		Leap: false
	},
	{
		solar: [1620, 10, 29],
		Dow: 6,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1620],
		Leap: false
	},
	{
		solar: [1620, 10, 30],
		Dow: 0,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1620],
		Leap: false
	},
	{
		solar: [1620, 11, 1],
		Dow: 1,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1620],
		Leap: false
	},
	{
		solar: [1620, 11, 2],
		Dow: 2,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1620],
		Leap: false
	},
	{
		solar: [1620, 11, 26],
		Dow: 5,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1620],
		Leap: false
	},
	{
		solar: [1620, 11, 27],
		Dow: 6,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1620],
		Leap: false
	},
	{
		solar: [1620, 11, 28],
		Dow: 0,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1621],
		Leap: false
	},
	{
		solar: [1620, 11, 29],
		Dow: 1,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1621],
		Leap: false
	},
	{
		solar: [1623, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1622],
		Leap: false
	},
	{
		solar: [1623, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1622],
		Leap: false
	},
	{
		solar: [1623, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1623],
		Leap: false
	},
	{
		solar: [1623, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1623],
		Leap: false
	},
	{
		solar: [1623, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1623],
		Leap: false
	},
	{
		solar: [1623, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1623],
		Leap: false
	},
	{
		solar: [1623, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1623],
		Leap: false
	},
	{
		solar: [1623, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1623],
		Leap: false
	},
	{
		solar: [1623, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1623],
		Leap: false
	},
	{
		solar: [1623, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1623],
		Leap: false
	},
	{
		solar: [1623, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1623],
		Leap: false
	},
	{
		solar: [1623, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1623],
		Leap: false
	},
	{
		solar: [1623, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1623],
		Leap: false
	},
	{
		solar: [1623, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1623],
		Leap: false
	},
	{
		solar: [1623, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1623],
		Leap: false
	},
	{
		solar: [1623, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1623],
		Leap: false
	},
	{
		solar: [1623, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1623],
		Leap: false
	},
	{
		solar: [1623, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1623],
		Leap: false
	},
	{
		solar: [1623, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1623],
		Leap: false
	},
	{
		solar: [1623, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1623],
		Leap: false
	},
	{
		solar: [1623, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1623],
		Leap: false
	},
	{
		solar: [1623, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1623],
		Leap: false
	},
	{
		solar: [1623, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1623],
		Leap: false
	},
	{
		solar: [1623, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1623],
		Leap: false
	},
	{
		solar: [1623, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1623],
		Leap: false
	},
	{
		solar: [1623, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1623],
		Leap: false
	},
	{
		solar: [1623, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1623],
		Leap: false
	},
	{
		solar: [1623, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1623],
		Leap: false
	},
	{
		solar: [1623, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1623],
		Leap: false
	},
	{
		solar: [1623, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1623],
		Leap: false
	},
	{
		solar: [1623, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1623],
		Leap: false
	},
	{
		solar: [1623, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1623],
		Leap: false
	},
	{
		solar: [1623, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1623],
		Leap: false
	},
	{
		solar: [1623, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1623],
		Leap: false
	},
	{
		solar: [1623, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1623],
		Leap: false
	},
	{
		solar: [1623, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1623],
		Leap: false
	},
	{
		solar: [1623, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1623],
		Leap: false
	},
	{
		solar: [1623, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1623],
		Leap: false
	},
	{
		solar: [1623, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1623],
		Leap: false
	},
	{
		solar: [1623, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1623],
		Leap: false
	},
	{
		solar: [1623, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1623],
		Leap: false
	},
	{
		solar: [1623, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1623],
		Leap: false
	},
	{
		solar: [1623, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1623],
		Leap: false
	},
	{
		solar: [1623, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1623],
		Leap: false
	},
	{
		solar: [1623, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1623],
		Leap: false
	},
	{
		solar: [1623, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1623],
		Leap: false
	},
	{
		solar: [1623, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1623],
		Leap: false
	},
	{
		solar: [1623, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1623],
		Leap: false
	},
	{
		solar: [1623, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1623],
		Leap: false
	},
	{
		solar: [1623, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1623],
		Leap: false
	},
	{
		solar: [1623, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1623],
		Leap: false
	},
	{
		solar: [1623, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1623],
		Leap: false
	},
	{
		solar: [1623, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1623],
		Leap: false
	},
	{
		solar: [1626, 0, 1],
		Dow: 1,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1626],
		Leap: true
	},
	{
		solar: [1626, 0, 2],
		Dow: 2,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1626],
		Leap: true
	},
	{
		solar: [1626, 0, 3],
		Dow: 3,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1626],
		Leap: true
	},
	{
		solar: [1626, 0, 4],
		Dow: 4,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1626],
		Leap: true
	},
	{
		solar: [1626, 0, 5],
		Dow: 5,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1626],
		Leap: true
	},
	{
		solar: [1626, 0, 30],
		Dow: 2,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1626],
		Leap: true
	},
	{
		solar: [1626, 0, 31],
		Dow: 3,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1626],
		Leap: true
	},
	{
		solar: [1626, 1, 1],
		Dow: 4,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1626],
		Leap: true
	},
	{
		solar: [1626, 1, 2],
		Dow: 5,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1626],
		Leap: true
	},
	{
		solar: [1626, 1, 30],
		Dow: 5,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1626],
		Leap: true
	},
	{
		solar: [1626, 1, 31],
		Dow: 6,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1626],
		Leap: true
	},
	{
		solar: [1626, 2, 1],
		Dow: 0,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1626],
		Leap: true
	},
	{
		solar: [1626, 2, 2],
		Dow: 1,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1626],
		Leap: true
	},
	{
		solar: [1626, 2, 30],
		Dow: 1,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1626],
		Leap: true
	},
	{
		solar: [1626, 2, 31],
		Dow: 2,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1626],
		Leap: true
	},
	{
		solar: [1626, 3, 1],
		Dow: 3,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1626],
		Leap: true
	},
	{
		solar: [1626, 3, 2],
		Dow: 4,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1626],
		Leap: true
	},
	{
		solar: [1626, 3, 30],
		Dow: 4,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1626],
		Leap: true
	},
	{
		solar: [1626, 3, 31],
		Dow: 5,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1626],
		Leap: true
	},
	{
		solar: [1626, 4, 1],
		Dow: 6,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1626],
		Leap: true
	},
	{
		solar: [1626, 4, 2],
		Dow: 0,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1626],
		Leap: true
	},
	{
		solar: [1626, 4, 30],
		Dow: 0,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1626],
		Leap: true
	},
	{
		solar: [1626, 4, 31],
		Dow: 1,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1626],
		Leap: true
	},
	{
		solar: [1626, 5, 1],
		Dow: 2,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1626],
		Leap: true
	},
	{
		solar: [1626, 5, 2],
		Dow: 3,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1626],
		Leap: true
	},
	{
		solar: [1626, 5, 30],
		Dow: 3,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1626],
		Leap: true
	},
	{
		solar: [1626, 5, 31],
		Dow: 4,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1626],
		Leap: true
	},
	{
		solar: [1626, 6, 1],
		Dow: 5,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1626],
		Leap: true
	},
	{
		solar: [1626, 6, 2],
		Dow: 6,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1626],
		Leap: true
	},
	{
		solar: [1626, 6, 29],
		Dow: 5,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1626],
		Leap: true
	},
	{
		solar: [1626, 6, 30],
		Dow: 6,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1626],
		Leap: true
	},
	{
		solar: [1626, 7, 1],
		Dow: 0,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1626],
		Leap: true
	},
	{
		solar: [1626, 7, 2],
		Dow: 1,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1626],
		Leap: true
	},
	{
		solar: [1626, 7, 29],
		Dow: 0,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1626],
		Leap: true
	},
	{
		solar: [1626, 7, 30],
		Dow: 1,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1626],
		Leap: true
	},
	{
		solar: [1626, 8, 1],
		Dow: 2,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1626],
		Leap: true
	},
	{
		solar: [1626, 8, 2],
		Dow: 3,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1626],
		Leap: true
	},
	{
		solar: [1626, 8, 29],
		Dow: 2,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1626],
		Leap: true
	},
	{
		solar: [1626, 8, 30],
		Dow: 3,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1626],
		Leap: true
	},
	{
		solar: [1626, 9, 1],
		Dow: 4,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1626],
		Leap: true
	},
	{
		solar: [1626, 9, 2],
		Dow: 5,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1626],
		Leap: true
	},
	{
		solar: [1626, 9, 29],
		Dow: 4,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1626],
		Leap: true
	},
	{
		solar: [1626, 9, 30],
		Dow: 5,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1626],
		Leap: true
	},
	{
		solar: [1626, 10, 1],
		Dow: 6,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1626],
		Leap: true
	},
	{
		solar: [1626, 10, 2],
		Dow: 0,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1626],
		Leap: true
	},
	{
		solar: [1626, 10, 29],
		Dow: 6,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1626],
		Leap: true
	},
	{
		solar: [1626, 10, 30],
		Dow: 0,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1626],
		Leap: true
	},
	{
		solar: [1626, 11, 1],
		Dow: 1,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1626],
		Leap: true
	},
	{
		solar: [1626, 11, 2],
		Dow: 2,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1626],
		Leap: true
	},
	{
		solar: [1626, 11, 26],
		Dow: 5,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1626],
		Leap: true
	},
	{
		solar: [1626, 11, 27],
		Dow: 6,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1626],
		Leap: true
	},
	{
		solar: [1626, 11, 28],
		Dow: 0,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1627],
		Leap: true
	},
	{
		solar: [1626, 11, 29],
		Dow: 1,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1627],
		Leap: true
	},
	{
		solar: [1626, 11, 30],
		Dow: 2,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1627],
		Leap: true
	},
	{
		solar: [1629, 0, 1],
		Dow: 5,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1628],
		Leap: false
	},
	{
		solar: [1629, 0, 2],
		Dow: 6,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1628],
		Leap: false
	},
	{
		solar: [1629, 0, 3],
		Dow: 0,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1629],
		Leap: false
	},
	{
		solar: [1629, 0, 4],
		Dow: 1,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1629],
		Leap: false
	},
	{
		solar: [1629, 0, 5],
		Dow: 2,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1629],
		Leap: false
	},
	{
		solar: [1629, 0, 30],
		Dow: 6,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1629],
		Leap: false
	},
	{
		solar: [1629, 0, 31],
		Dow: 0,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1629],
		Leap: false
	},
	{
		solar: [1629, 1, 1],
		Dow: 1,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1629],
		Leap: false
	},
	{
		solar: [1629, 1, 2],
		Dow: 2,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1629],
		Leap: false
	},
	{
		solar: [1629, 1, 30],
		Dow: 2,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1629],
		Leap: false
	},
	{
		solar: [1629, 1, 31],
		Dow: 3,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1629],
		Leap: false
	},
	{
		solar: [1629, 2, 1],
		Dow: 4,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1629],
		Leap: false
	},
	{
		solar: [1629, 2, 2],
		Dow: 5,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1629],
		Leap: false
	},
	{
		solar: [1629, 2, 30],
		Dow: 5,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1629],
		Leap: false
	},
	{
		solar: [1629, 2, 31],
		Dow: 6,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1629],
		Leap: false
	},
	{
		solar: [1629, 3, 1],
		Dow: 0,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1629],
		Leap: false
	},
	{
		solar: [1629, 3, 2],
		Dow: 1,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1629],
		Leap: false
	},
	{
		solar: [1629, 3, 30],
		Dow: 1,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1629],
		Leap: false
	},
	{
		solar: [1629, 3, 31],
		Dow: 2,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1629],
		Leap: false
	},
	{
		solar: [1629, 4, 1],
		Dow: 3,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1629],
		Leap: false
	},
	{
		solar: [1629, 4, 2],
		Dow: 4,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1629],
		Leap: false
	},
	{
		solar: [1629, 4, 30],
		Dow: 4,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1629],
		Leap: false
	},
	{
		solar: [1629, 4, 31],
		Dow: 5,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1629],
		Leap: false
	},
	{
		solar: [1629, 5, 1],
		Dow: 6,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1629],
		Leap: false
	},
	{
		solar: [1629, 5, 2],
		Dow: 0,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1629],
		Leap: false
	},
	{
		solar: [1629, 5, 30],
		Dow: 0,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1629],
		Leap: false
	},
	{
		solar: [1629, 5, 31],
		Dow: 1,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1629],
		Leap: false
	},
	{
		solar: [1629, 6, 1],
		Dow: 2,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1629],
		Leap: false
	},
	{
		solar: [1629, 6, 2],
		Dow: 3,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1629],
		Leap: false
	},
	{
		solar: [1629, 6, 29],
		Dow: 2,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1629],
		Leap: false
	},
	{
		solar: [1629, 6, 30],
		Dow: 3,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1629],
		Leap: false
	},
	{
		solar: [1629, 7, 1],
		Dow: 4,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1629],
		Leap: false
	},
	{
		solar: [1629, 7, 2],
		Dow: 5,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1629],
		Leap: false
	},
	{
		solar: [1629, 7, 29],
		Dow: 4,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1629],
		Leap: false
	},
	{
		solar: [1629, 7, 30],
		Dow: 5,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1629],
		Leap: false
	},
	{
		solar: [1629, 8, 1],
		Dow: 6,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1629],
		Leap: false
	},
	{
		solar: [1629, 8, 2],
		Dow: 0,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1629],
		Leap: false
	},
	{
		solar: [1629, 8, 29],
		Dow: 6,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1629],
		Leap: false
	},
	{
		solar: [1629, 8, 30],
		Dow: 0,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1629],
		Leap: false
	},
	{
		solar: [1629, 9, 1],
		Dow: 1,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1629],
		Leap: false
	},
	{
		solar: [1629, 9, 2],
		Dow: 2,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1629],
		Leap: false
	},
	{
		solar: [1629, 9, 29],
		Dow: 1,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1629],
		Leap: false
	},
	{
		solar: [1629, 9, 30],
		Dow: 2,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1629],
		Leap: false
	},
	{
		solar: [1629, 10, 1],
		Dow: 3,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1629],
		Leap: false
	},
	{
		solar: [1629, 10, 2],
		Dow: 4,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1629],
		Leap: false
	},
	{
		solar: [1629, 10, 29],
		Dow: 3,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1629],
		Leap: false
	},
	{
		solar: [1629, 10, 30],
		Dow: 4,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1629],
		Leap: false
	},
	{
		solar: [1629, 11, 1],
		Dow: 5,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1629],
		Leap: false
	},
	{
		solar: [1629, 11, 2],
		Dow: 6,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1629],
		Leap: false
	},
	{
		solar: [1629, 11, 26],
		Dow: 2,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1629],
		Leap: false
	},
	{
		solar: [1629, 11, 27],
		Dow: 3,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1629],
		Leap: false
	},
	{
		solar: [1629, 11, 28],
		Dow: 4,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1629],
		Leap: false
	},
	{
		solar: [1629, 11, 29],
		Dow: 5,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1629],
		Leap: false
	},
	{
		solar: [1632, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1632],
		Leap: false
	},
	{
		solar: [1632, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1632],
		Leap: false
	},
	{
		solar: [1632, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1632],
		Leap: false
	},
	{
		solar: [1632, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1632],
		Leap: false
	},
	{
		solar: [1632, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1632],
		Leap: false
	},
	{
		solar: [1632, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1632],
		Leap: false
	},
	{
		solar: [1632, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1632],
		Leap: false
	},
	{
		solar: [1632, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1632],
		Leap: false
	},
	{
		solar: [1632, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1632],
		Leap: false
	},
	{
		solar: [1632, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1632],
		Leap: false
	},
	{
		solar: [1632, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1632],
		Leap: false
	},
	{
		solar: [1632, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1632],
		Leap: false
	},
	{
		solar: [1632, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1632],
		Leap: false
	},
	{
		solar: [1632, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1632],
		Leap: false
	},
	{
		solar: [1632, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1632],
		Leap: false
	},
	{
		solar: [1632, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1632],
		Leap: false
	},
	{
		solar: [1632, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1632],
		Leap: false
	},
	{
		solar: [1632, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1632],
		Leap: false
	},
	{
		solar: [1632, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1632],
		Leap: false
	},
	{
		solar: [1632, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1632],
		Leap: false
	},
	{
		solar: [1632, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1632],
		Leap: false
	},
	{
		solar: [1632, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1632],
		Leap: false
	},
	{
		solar: [1632, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1632],
		Leap: false
	},
	{
		solar: [1632, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1632],
		Leap: false
	},
	{
		solar: [1632, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1632],
		Leap: false
	},
	{
		solar: [1632, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1632],
		Leap: false
	},
	{
		solar: [1632, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1632],
		Leap: false
	},
	{
		solar: [1632, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1632],
		Leap: false
	},
	{
		solar: [1632, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1632],
		Leap: false
	},
	{
		solar: [1632, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1632],
		Leap: false
	},
	{
		solar: [1632, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1632],
		Leap: false
	},
	{
		solar: [1632, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1632],
		Leap: false
	},
	{
		solar: [1632, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1632],
		Leap: false
	},
	{
		solar: [1632, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1632],
		Leap: false
	},
	{
		solar: [1632, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1632],
		Leap: false
	},
	{
		solar: [1632, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1632],
		Leap: false
	},
	{
		solar: [1632, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1632],
		Leap: false
	},
	{
		solar: [1632, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1632],
		Leap: false
	},
	{
		solar: [1632, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1632],
		Leap: false
	},
	{
		solar: [1632, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1632],
		Leap: false
	},
	{
		solar: [1632, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1632],
		Leap: false
	},
	{
		solar: [1632, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1632],
		Leap: false
	},
	{
		solar: [1632, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1632],
		Leap: false
	},
	{
		solar: [1632, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1632],
		Leap: false
	},
	{
		solar: [1632, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1632],
		Leap: false
	},
	{
		solar: [1632, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1632],
		Leap: false
	},
	{
		solar: [1632, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1632],
		Leap: false
	},
	{
		solar: [1632, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1632],
		Leap: false
	},
	{
		solar: [1632, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1632],
		Leap: false
	},
	{
		solar: [1632, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1632],
		Leap: false
	},
	{
		solar: [1632, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1633],
		Leap: false
	},
	{
		solar: [1632, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1633],
		Leap: false
	},
	{
		solar: [1632, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1633],
		Leap: false
	},
	{
		solar: [1635, 0, 1],
		Dow: 5,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1634],
		Leap: true
	},
	{
		solar: [1635, 0, 2],
		Dow: 6,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1634],
		Leap: true
	},
	{
		solar: [1635, 0, 3],
		Dow: 0,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1635],
		Leap: true
	},
	{
		solar: [1635, 0, 4],
		Dow: 1,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1635],
		Leap: true
	},
	{
		solar: [1635, 0, 5],
		Dow: 2,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1635],
		Leap: true
	},
	{
		solar: [1635, 0, 30],
		Dow: 6,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1635],
		Leap: true
	},
	{
		solar: [1635, 0, 31],
		Dow: 0,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1635],
		Leap: true
	},
	{
		solar: [1635, 1, 1],
		Dow: 1,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1635],
		Leap: true
	},
	{
		solar: [1635, 1, 2],
		Dow: 2,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1635],
		Leap: true
	},
	{
		solar: [1635, 1, 30],
		Dow: 2,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1635],
		Leap: true
	},
	{
		solar: [1635, 1, 31],
		Dow: 3,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1635],
		Leap: true
	},
	{
		solar: [1635, 2, 1],
		Dow: 4,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1635],
		Leap: true
	},
	{
		solar: [1635, 2, 2],
		Dow: 5,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1635],
		Leap: true
	},
	{
		solar: [1635, 2, 30],
		Dow: 5,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1635],
		Leap: true
	},
	{
		solar: [1635, 2, 31],
		Dow: 6,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1635],
		Leap: true
	},
	{
		solar: [1635, 3, 1],
		Dow: 0,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1635],
		Leap: true
	},
	{
		solar: [1635, 3, 2],
		Dow: 1,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1635],
		Leap: true
	},
	{
		solar: [1635, 3, 30],
		Dow: 1,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1635],
		Leap: true
	},
	{
		solar: [1635, 3, 31],
		Dow: 2,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1635],
		Leap: true
	},
	{
		solar: [1635, 4, 1],
		Dow: 3,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1635],
		Leap: true
	},
	{
		solar: [1635, 4, 2],
		Dow: 4,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1635],
		Leap: true
	},
	{
		solar: [1635, 4, 30],
		Dow: 4,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1635],
		Leap: true
	},
	{
		solar: [1635, 4, 31],
		Dow: 5,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1635],
		Leap: true
	},
	{
		solar: [1635, 5, 1],
		Dow: 6,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1635],
		Leap: true
	},
	{
		solar: [1635, 5, 2],
		Dow: 0,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1635],
		Leap: true
	},
	{
		solar: [1635, 5, 30],
		Dow: 0,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1635],
		Leap: true
	},
	{
		solar: [1635, 5, 31],
		Dow: 1,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1635],
		Leap: true
	},
	{
		solar: [1635, 6, 1],
		Dow: 2,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1635],
		Leap: true
	},
	{
		solar: [1635, 6, 2],
		Dow: 3,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1635],
		Leap: true
	},
	{
		solar: [1635, 6, 29],
		Dow: 2,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1635],
		Leap: true
	},
	{
		solar: [1635, 6, 30],
		Dow: 3,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1635],
		Leap: true
	},
	{
		solar: [1635, 7, 1],
		Dow: 4,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1635],
		Leap: true
	},
	{
		solar: [1635, 7, 2],
		Dow: 5,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1635],
		Leap: true
	},
	{
		solar: [1635, 7, 29],
		Dow: 4,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1635],
		Leap: true
	},
	{
		solar: [1635, 7, 30],
		Dow: 5,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1635],
		Leap: true
	},
	{
		solar: [1635, 8, 1],
		Dow: 6,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1635],
		Leap: true
	},
	{
		solar: [1635, 8, 2],
		Dow: 0,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1635],
		Leap: true
	},
	{
		solar: [1635, 8, 29],
		Dow: 6,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [39, 1635],
		Leap: true
	},
	{
		solar: [1635, 8, 30],
		Dow: 0,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1635],
		Leap: true
	},
	{
		solar: [1635, 9, 1],
		Dow: 1,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1635],
		Leap: true
	},
	{
		solar: [1635, 9, 2],
		Dow: 2,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1635],
		Leap: true
	},
	{
		solar: [1635, 9, 29],
		Dow: 1,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1635],
		Leap: true
	},
	{
		solar: [1635, 9, 30],
		Dow: 2,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1635],
		Leap: true
	},
	{
		solar: [1635, 10, 1],
		Dow: 3,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1635],
		Leap: true
	},
	{
		solar: [1635, 10, 2],
		Dow: 4,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1635],
		Leap: true
	},
	{
		solar: [1635, 10, 29],
		Dow: 3,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1635],
		Leap: true
	},
	{
		solar: [1635, 10, 30],
		Dow: 4,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1635],
		Leap: true
	},
	{
		solar: [1635, 11, 1],
		Dow: 5,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1635],
		Leap: true
	},
	{
		solar: [1635, 11, 2],
		Dow: 6,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1635],
		Leap: true
	},
	{
		solar: [1635, 11, 26],
		Dow: 2,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1635],
		Leap: true
	},
	{
		solar: [1635, 11, 27],
		Dow: 3,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1635],
		Leap: true
	},
	{
		solar: [1635, 11, 28],
		Dow: 4,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1635],
		Leap: true
	},
	{
		solar: [1635, 11, 29],
		Dow: 5,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1635],
		Leap: true
	},
	{
		solar: [1635, 11, 30],
		Dow: 6,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1635],
		Leap: true
	},
	{
		solar: [1638, 0, 1],
		Dow: 2,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1638],
		Leap: false
	},
	{
		solar: [1638, 0, 2],
		Dow: 3,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1638],
		Leap: false
	},
	{
		solar: [1638, 0, 3],
		Dow: 4,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1638],
		Leap: false
	},
	{
		solar: [1638, 0, 4],
		Dow: 5,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1638],
		Leap: false
	},
	{
		solar: [1638, 0, 5],
		Dow: 6,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1638],
		Leap: false
	},
	{
		solar: [1638, 0, 30],
		Dow: 3,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1638],
		Leap: false
	},
	{
		solar: [1638, 0, 31],
		Dow: 4,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1638],
		Leap: false
	},
	{
		solar: [1638, 1, 1],
		Dow: 5,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1638],
		Leap: false
	},
	{
		solar: [1638, 1, 2],
		Dow: 6,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1638],
		Leap: false
	},
	{
		solar: [1638, 1, 30],
		Dow: 6,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1638],
		Leap: false
	},
	{
		solar: [1638, 1, 31],
		Dow: 0,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1638],
		Leap: false
	},
	{
		solar: [1638, 2, 1],
		Dow: 1,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1638],
		Leap: false
	},
	{
		solar: [1638, 2, 2],
		Dow: 2,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1638],
		Leap: false
	},
	{
		solar: [1638, 2, 30],
		Dow: 2,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1638],
		Leap: false
	},
	{
		solar: [1638, 2, 31],
		Dow: 3,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1638],
		Leap: false
	},
	{
		solar: [1638, 3, 1],
		Dow: 4,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1638],
		Leap: false
	},
	{
		solar: [1638, 3, 2],
		Dow: 5,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1638],
		Leap: false
	},
	{
		solar: [1638, 3, 30],
		Dow: 5,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1638],
		Leap: false
	},
	{
		solar: [1638, 3, 31],
		Dow: 6,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1638],
		Leap: false
	},
	{
		solar: [1638, 4, 1],
		Dow: 0,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1638],
		Leap: false
	},
	{
		solar: [1638, 4, 2],
		Dow: 1,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [19, 1638],
		Leap: false
	},
	{
		solar: [1638, 4, 30],
		Dow: 1,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1638],
		Leap: false
	},
	{
		solar: [1638, 4, 31],
		Dow: 2,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1638],
		Leap: false
	},
	{
		solar: [1638, 5, 1],
		Dow: 3,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1638],
		Leap: false
	},
	{
		solar: [1638, 5, 2],
		Dow: 4,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1638],
		Leap: false
	},
	{
		solar: [1638, 5, 30],
		Dow: 4,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1638],
		Leap: false
	},
	{
		solar: [1638, 5, 31],
		Dow: 5,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1638],
		Leap: false
	},
	{
		solar: [1638, 6, 1],
		Dow: 6,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1638],
		Leap: false
	},
	{
		solar: [1638, 6, 2],
		Dow: 0,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [28, 1638],
		Leap: false
	},
	{
		solar: [1638, 6, 29],
		Dow: 6,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1638],
		Leap: false
	},
	{
		solar: [1638, 6, 30],
		Dow: 0,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1638],
		Leap: false
	},
	{
		solar: [1638, 7, 1],
		Dow: 1,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1638],
		Leap: false
	},
	{
		solar: [1638, 7, 2],
		Dow: 2,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1638],
		Leap: false
	},
	{
		solar: [1638, 7, 29],
		Dow: 1,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1638],
		Leap: false
	},
	{
		solar: [1638, 7, 30],
		Dow: 2,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1638],
		Leap: false
	},
	{
		solar: [1638, 8, 1],
		Dow: 3,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1638],
		Leap: false
	},
	{
		solar: [1638, 8, 2],
		Dow: 4,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1638],
		Leap: false
	},
	{
		solar: [1638, 8, 29],
		Dow: 3,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1638],
		Leap: false
	},
	{
		solar: [1638, 8, 30],
		Dow: 4,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1638],
		Leap: false
	},
	{
		solar: [1638, 9, 1],
		Dow: 5,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1638],
		Leap: false
	},
	{
		solar: [1638, 9, 2],
		Dow: 6,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1638],
		Leap: false
	},
	{
		solar: [1638, 9, 29],
		Dow: 5,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1638],
		Leap: false
	},
	{
		solar: [1638, 9, 30],
		Dow: 6,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1638],
		Leap: false
	},
	{
		solar: [1638, 10, 1],
		Dow: 0,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1638],
		Leap: false
	},
	{
		solar: [1638, 10, 2],
		Dow: 1,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [45, 1638],
		Leap: false
	},
	{
		solar: [1638, 10, 29],
		Dow: 0,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1638],
		Leap: false
	},
	{
		solar: [1638, 10, 30],
		Dow: 1,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1638],
		Leap: false
	},
	{
		solar: [1638, 11, 1],
		Dow: 2,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1638],
		Leap: false
	},
	{
		solar: [1638, 11, 2],
		Dow: 3,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1638],
		Leap: false
	},
	{
		solar: [1638, 11, 26],
		Dow: 6,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1638],
		Leap: false
	},
	{
		solar: [1638, 11, 27],
		Dow: 0,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1639],
		Leap: false
	},
	{
		solar: [1638, 11, 28],
		Dow: 1,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1639],
		Leap: false
	},
	{
		solar: [1638, 11, 29],
		Dow: 2,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1639],
		Leap: false
	},
	{
		solar: [1641, 0, 1],
		Dow: 6,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1640],
		Leap: false
	},
	{
		solar: [1641, 0, 2],
		Dow: 0,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1641],
		Leap: false
	},
	{
		solar: [1641, 0, 3],
		Dow: 1,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1641],
		Leap: false
	},
	{
		solar: [1641, 0, 4],
		Dow: 2,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1641],
		Leap: false
	},
	{
		solar: [1641, 0, 5],
		Dow: 3,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1641],
		Leap: false
	},
	{
		solar: [1641, 0, 30],
		Dow: 0,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1641],
		Leap: false
	},
	{
		solar: [1641, 0, 31],
		Dow: 1,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1641],
		Leap: false
	},
	{
		solar: [1641, 1, 1],
		Dow: 2,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1641],
		Leap: false
	},
	{
		solar: [1641, 1, 2],
		Dow: 3,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1641],
		Leap: false
	},
	{
		solar: [1641, 1, 30],
		Dow: 3,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1641],
		Leap: false
	},
	{
		solar: [1641, 1, 31],
		Dow: 4,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1641],
		Leap: false
	},
	{
		solar: [1641, 2, 1],
		Dow: 5,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1641],
		Leap: false
	},
	{
		solar: [1641, 2, 2],
		Dow: 6,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1641],
		Leap: false
	},
	{
		solar: [1641, 2, 30],
		Dow: 6,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1641],
		Leap: false
	},
	{
		solar: [1641, 2, 31],
		Dow: 0,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1641],
		Leap: false
	},
	{
		solar: [1641, 3, 1],
		Dow: 1,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1641],
		Leap: false
	},
	{
		solar: [1641, 3, 2],
		Dow: 2,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1641],
		Leap: false
	},
	{
		solar: [1641, 3, 30],
		Dow: 2,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1641],
		Leap: false
	},
	{
		solar: [1641, 3, 31],
		Dow: 3,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1641],
		Leap: false
	},
	{
		solar: [1641, 4, 1],
		Dow: 4,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1641],
		Leap: false
	},
	{
		solar: [1641, 4, 2],
		Dow: 5,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1641],
		Leap: false
	},
	{
		solar: [1641, 4, 30],
		Dow: 5,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1641],
		Leap: false
	},
	{
		solar: [1641, 4, 31],
		Dow: 6,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1641],
		Leap: false
	},
	{
		solar: [1641, 5, 1],
		Dow: 0,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1641],
		Leap: false
	},
	{
		solar: [1641, 5, 2],
		Dow: 1,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1641],
		Leap: false
	},
	{
		solar: [1641, 5, 30],
		Dow: 1,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1641],
		Leap: false
	},
	{
		solar: [1641, 5, 31],
		Dow: 2,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1641],
		Leap: false
	},
	{
		solar: [1641, 6, 1],
		Dow: 3,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1641],
		Leap: false
	},
	{
		solar: [1641, 6, 2],
		Dow: 4,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1641],
		Leap: false
	},
	{
		solar: [1641, 6, 29],
		Dow: 3,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1641],
		Leap: false
	},
	{
		solar: [1641, 6, 30],
		Dow: 4,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1641],
		Leap: false
	},
	{
		solar: [1641, 7, 1],
		Dow: 5,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1641],
		Leap: false
	},
	{
		solar: [1641, 7, 2],
		Dow: 6,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1641],
		Leap: false
	},
	{
		solar: [1641, 7, 29],
		Dow: 5,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1641],
		Leap: false
	},
	{
		solar: [1641, 7, 30],
		Dow: 6,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1641],
		Leap: false
	},
	{
		solar: [1641, 8, 1],
		Dow: 0,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1641],
		Leap: false
	},
	{
		solar: [1641, 8, 2],
		Dow: 1,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1641],
		Leap: false
	},
	{
		solar: [1641, 8, 29],
		Dow: 0,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1641],
		Leap: false
	},
	{
		solar: [1641, 8, 30],
		Dow: 1,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1641],
		Leap: false
	},
	{
		solar: [1641, 9, 1],
		Dow: 2,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1641],
		Leap: false
	},
	{
		solar: [1641, 9, 2],
		Dow: 3,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1641],
		Leap: false
	},
	{
		solar: [1641, 9, 29],
		Dow: 2,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1641],
		Leap: false
	},
	{
		solar: [1641, 9, 30],
		Dow: 3,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1641],
		Leap: false
	},
	{
		solar: [1641, 10, 1],
		Dow: 4,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1641],
		Leap: false
	},
	{
		solar: [1641, 10, 2],
		Dow: 5,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1641],
		Leap: false
	},
	{
		solar: [1641, 10, 29],
		Dow: 4,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1641],
		Leap: false
	},
	{
		solar: [1641, 10, 30],
		Dow: 5,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1641],
		Leap: false
	},
	{
		solar: [1641, 11, 1],
		Dow: 6,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [48, 1641],
		Leap: false
	},
	{
		solar: [1641, 11, 2],
		Dow: 0,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1641],
		Leap: false
	},
	{
		solar: [1641, 11, 26],
		Dow: 3,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1641],
		Leap: false
	},
	{
		solar: [1641, 11, 27],
		Dow: 4,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1641],
		Leap: false
	},
	{
		solar: [1641, 11, 28],
		Dow: 5,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1641],
		Leap: false
	},
	{
		solar: [1641, 11, 29],
		Dow: 6,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1641],
		Leap: false
	},
	{
		solar: [1644, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1644],
		Leap: false
	},
	{
		solar: [1644, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1644],
		Leap: false
	},
	{
		solar: [1644, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1644],
		Leap: false
	},
	{
		solar: [1644, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1644],
		Leap: false
	},
	{
		solar: [1644, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1644],
		Leap: false
	},
	{
		solar: [1644, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1644],
		Leap: false
	},
	{
		solar: [1644, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1644],
		Leap: false
	},
	{
		solar: [1644, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1644],
		Leap: false
	},
	{
		solar: [1644, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1644],
		Leap: false
	},
	{
		solar: [1644, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1644],
		Leap: false
	},
	{
		solar: [1644, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1644],
		Leap: false
	},
	{
		solar: [1644, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1644],
		Leap: false
	},
	{
		solar: [1644, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1644],
		Leap: false
	},
	{
		solar: [1644, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1644],
		Leap: false
	},
	{
		solar: [1644, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1644],
		Leap: false
	},
	{
		solar: [1644, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1644],
		Leap: false
	},
	{
		solar: [1644, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1644],
		Leap: false
	},
	{
		solar: [1644, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1644],
		Leap: false
	},
	{
		solar: [1644, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1644],
		Leap: false
	},
	{
		solar: [1644, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1644],
		Leap: false
	},
	{
		solar: [1644, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1644],
		Leap: false
	},
	{
		solar: [1644, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1644],
		Leap: false
	},
	{
		solar: [1644, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1644],
		Leap: false
	},
	{
		solar: [1644, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1644],
		Leap: false
	},
	{
		solar: [1644, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1644],
		Leap: false
	},
	{
		solar: [1644, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1644],
		Leap: false
	},
	{
		solar: [1644, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1644],
		Leap: false
	},
	{
		solar: [1644, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1644],
		Leap: false
	},
	{
		solar: [1644, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1644],
		Leap: false
	},
	{
		solar: [1644, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1644],
		Leap: false
	},
	{
		solar: [1644, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1644],
		Leap: false
	},
	{
		solar: [1644, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1644],
		Leap: false
	},
	{
		solar: [1644, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1644],
		Leap: false
	},
	{
		solar: [1644, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1644],
		Leap: false
	},
	{
		solar: [1644, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1644],
		Leap: false
	},
	{
		solar: [1644, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1644],
		Leap: false
	},
	{
		solar: [1644, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1644],
		Leap: false
	},
	{
		solar: [1644, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1644],
		Leap: false
	},
	{
		solar: [1644, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1644],
		Leap: false
	},
	{
		solar: [1644, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1644],
		Leap: false
	},
	{
		solar: [1644, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1644],
		Leap: false
	},
	{
		solar: [1644, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1644],
		Leap: false
	},
	{
		solar: [1644, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1644],
		Leap: false
	},
	{
		solar: [1644, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1644],
		Leap: false
	},
	{
		solar: [1644, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1644],
		Leap: false
	},
	{
		solar: [1644, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1644],
		Leap: false
	},
	{
		solar: [1644, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1644],
		Leap: false
	},
	{
		solar: [1644, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1644],
		Leap: false
	},
	{
		solar: [1644, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1644],
		Leap: false
	},
	{
		solar: [1644, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1644],
		Leap: false
	},
	{
		solar: [1644, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1644],
		Leap: false
	},
	{
		solar: [1644, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1644],
		Leap: false
	},
	{
		solar: [1644, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1644],
		Leap: false
	},
	{
		solar: [1647, 0, 1],
		Dow: 6,
		Diy: 366,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [52, 1646],
		Leap: true
	},
	{
		solar: [1647, 0, 2],
		Dow: 0,
		Diy: 366,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1647],
		Leap: true
	},
	{
		solar: [1647, 0, 3],
		Dow: 1,
		Diy: 366,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1647],
		Leap: true
	},
	{
		solar: [1647, 0, 4],
		Dow: 2,
		Diy: 366,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1647],
		Leap: true
	},
	{
		solar: [1647, 0, 5],
		Dow: 3,
		Diy: 366,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1647],
		Leap: true
	},
	{
		solar: [1647, 0, 30],
		Dow: 0,
		Diy: 366,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1647],
		Leap: true
	},
	{
		solar: [1647, 0, 31],
		Dow: 1,
		Diy: 366,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1647],
		Leap: true
	},
	{
		solar: [1647, 1, 1],
		Dow: 2,
		Diy: 366,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1647],
		Leap: true
	},
	{
		solar: [1647, 1, 2],
		Dow: 3,
		Diy: 366,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1647],
		Leap: true
	},
	{
		solar: [1647, 1, 30],
		Dow: 3,
		Diy: 366,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1647],
		Leap: true
	},
	{
		solar: [1647, 1, 31],
		Dow: 4,
		Diy: 366,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1647],
		Leap: true
	},
	{
		solar: [1647, 2, 1],
		Dow: 5,
		Diy: 366,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1647],
		Leap: true
	},
	{
		solar: [1647, 2, 2],
		Dow: 6,
		Diy: 366,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1647],
		Leap: true
	},
	{
		solar: [1647, 2, 30],
		Dow: 6,
		Diy: 366,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1647],
		Leap: true
	},
	{
		solar: [1647, 2, 31],
		Dow: 0,
		Diy: 366,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1647],
		Leap: true
	},
	{
		solar: [1647, 3, 1],
		Dow: 1,
		Diy: 366,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1647],
		Leap: true
	},
	{
		solar: [1647, 3, 2],
		Dow: 2,
		Diy: 366,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1647],
		Leap: true
	},
	{
		solar: [1647, 3, 30],
		Dow: 2,
		Diy: 366,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1647],
		Leap: true
	},
	{
		solar: [1647, 3, 31],
		Dow: 3,
		Diy: 366,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1647],
		Leap: true
	},
	{
		solar: [1647, 4, 1],
		Dow: 4,
		Diy: 366,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1647],
		Leap: true
	},
	{
		solar: [1647, 4, 2],
		Dow: 5,
		Diy: 366,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1647],
		Leap: true
	},
	{
		solar: [1647, 4, 30],
		Dow: 5,
		Diy: 366,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1647],
		Leap: true
	},
	{
		solar: [1647, 4, 31],
		Dow: 6,
		Diy: 366,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1647],
		Leap: true
	},
	{
		solar: [1647, 5, 1],
		Dow: 0,
		Diy: 366,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1647],
		Leap: true
	},
	{
		solar: [1647, 5, 2],
		Dow: 1,
		Diy: 366,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1647],
		Leap: true
	},
	{
		solar: [1647, 5, 30],
		Dow: 1,
		Diy: 366,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1647],
		Leap: true
	},
	{
		solar: [1647, 5, 31],
		Dow: 2,
		Diy: 366,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1647],
		Leap: true
	},
	{
		solar: [1647, 6, 1],
		Dow: 3,
		Diy: 366,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1647],
		Leap: true
	},
	{
		solar: [1647, 6, 2],
		Dow: 4,
		Diy: 366,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1647],
		Leap: true
	},
	{
		solar: [1647, 6, 29],
		Dow: 3,
		Diy: 366,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1647],
		Leap: true
	},
	{
		solar: [1647, 6, 30],
		Dow: 4,
		Diy: 366,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1647],
		Leap: true
	},
	{
		solar: [1647, 7, 1],
		Dow: 5,
		Diy: 366,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1647],
		Leap: true
	},
	{
		solar: [1647, 7, 2],
		Dow: 6,
		Diy: 366,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1647],
		Leap: true
	},
	{
		solar: [1647, 7, 29],
		Dow: 5,
		Diy: 366,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1647],
		Leap: true
	},
	{
		solar: [1647, 7, 30],
		Dow: 6,
		Diy: 366,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1647],
		Leap: true
	},
	{
		solar: [1647, 8, 1],
		Dow: 0,
		Diy: 366,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1647],
		Leap: true
	},
	{
		solar: [1647, 8, 2],
		Dow: 1,
		Diy: 366,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1647],
		Leap: true
	},
	{
		solar: [1647, 8, 29],
		Dow: 0,
		Diy: 366,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1647],
		Leap: true
	},
	{
		solar: [1647, 8, 30],
		Dow: 1,
		Diy: 366,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1647],
		Leap: true
	},
	{
		solar: [1647, 9, 1],
		Dow: 2,
		Diy: 366,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1647],
		Leap: true
	},
	{
		solar: [1647, 9, 2],
		Dow: 3,
		Diy: 366,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1647],
		Leap: true
	},
	{
		solar: [1647, 9, 29],
		Dow: 2,
		Diy: 366,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1647],
		Leap: true
	},
	{
		solar: [1647, 9, 30],
		Dow: 3,
		Diy: 366,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1647],
		Leap: true
	},
	{
		solar: [1647, 10, 1],
		Dow: 4,
		Diy: 366,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1647],
		Leap: true
	},
	{
		solar: [1647, 10, 2],
		Dow: 5,
		Diy: 366,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1647],
		Leap: true
	},
	{
		solar: [1647, 10, 29],
		Dow: 4,
		Diy: 366,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1647],
		Leap: true
	},
	{
		solar: [1647, 10, 30],
		Dow: 5,
		Diy: 366,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1647],
		Leap: true
	},
	{
		solar: [1647, 11, 1],
		Dow: 6,
		Diy: 366,
		Doy: 336,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1647],
		Leap: true
	},
	{
		solar: [1647, 11, 2],
		Dow: 0,
		Diy: 366,
		Doy: 337,
		Dim: 30,
		Wiy: 52,
		Woy: [49, 1647],
		Leap: true
	},
	{
		solar: [1647, 11, 26],
		Dow: 3,
		Diy: 366,
		Doy: 361,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1647],
		Leap: true
	},
	{
		solar: [1647, 11, 27],
		Dow: 4,
		Diy: 366,
		Doy: 362,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1647],
		Leap: true
	},
	{
		solar: [1647, 11, 28],
		Dow: 5,
		Diy: 366,
		Doy: 363,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1647],
		Leap: true
	},
	{
		solar: [1647, 11, 29],
		Dow: 6,
		Diy: 366,
		Doy: 364,
		Dim: 30,
		Wiy: 52,
		Woy: [52, 1647],
		Leap: true
	},
	{
		solar: [1647, 11, 30],
		Dow: 0,
		Diy: 366,
		Doy: 365,
		Dim: 30,
		Wiy: 52,
		Woy: [1, 1648],
		Leap: true
	},
	{
		solar: [1650, 0, 1],
		Dow: 3,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1650],
		Leap: false
	},
	{
		solar: [1650, 0, 2],
		Dow: 4,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1650],
		Leap: false
	},
	{
		solar: [1650, 0, 3],
		Dow: 5,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1650],
		Leap: false
	},
	{
		solar: [1650, 0, 4],
		Dow: 6,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 53,
		Woy: [1, 1650],
		Leap: false
	},
	{
		solar: [1650, 0, 5],
		Dow: 0,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 53,
		Woy: [2, 1650],
		Leap: false
	},
	{
		solar: [1650, 0, 30],
		Dow: 4,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1650],
		Leap: false
	},
	{
		solar: [1650, 0, 31],
		Dow: 5,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1650],
		Leap: false
	},
	{
		solar: [1650, 1, 1],
		Dow: 6,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 53,
		Woy: [5, 1650],
		Leap: false
	},
	{
		solar: [1650, 1, 2],
		Dow: 0,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 53,
		Woy: [6, 1650],
		Leap: false
	},
	{
		solar: [1650, 1, 30],
		Dow: 0,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1650],
		Leap: false
	},
	{
		solar: [1650, 1, 31],
		Dow: 1,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1650],
		Leap: false
	},
	{
		solar: [1650, 2, 1],
		Dow: 2,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1650],
		Leap: false
	},
	{
		solar: [1650, 2, 2],
		Dow: 3,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 53,
		Woy: [10, 1650],
		Leap: false
	},
	{
		solar: [1650, 2, 30],
		Dow: 3,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1650],
		Leap: false
	},
	{
		solar: [1650, 2, 31],
		Dow: 4,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1650],
		Leap: false
	},
	{
		solar: [1650, 3, 1],
		Dow: 5,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1650],
		Leap: false
	},
	{
		solar: [1650, 3, 2],
		Dow: 6,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 53,
		Woy: [14, 1650],
		Leap: false
	},
	{
		solar: [1650, 3, 30],
		Dow: 6,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 53,
		Woy: [18, 1650],
		Leap: false
	},
	{
		solar: [1650, 3, 31],
		Dow: 0,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1650],
		Leap: false
	},
	{
		solar: [1650, 4, 1],
		Dow: 1,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1650],
		Leap: false
	},
	{
		solar: [1650, 4, 2],
		Dow: 2,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 53,
		Woy: [19, 1650],
		Leap: false
	},
	{
		solar: [1650, 4, 30],
		Dow: 2,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1650],
		Leap: false
	},
	{
		solar: [1650, 4, 31],
		Dow: 3,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1650],
		Leap: false
	},
	{
		solar: [1650, 5, 1],
		Dow: 4,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1650],
		Leap: false
	},
	{
		solar: [1650, 5, 2],
		Dow: 5,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 53,
		Woy: [23, 1650],
		Leap: false
	},
	{
		solar: [1650, 5, 30],
		Dow: 5,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1650],
		Leap: false
	},
	{
		solar: [1650, 5, 31],
		Dow: 6,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 53,
		Woy: [27, 1650],
		Leap: false
	},
	{
		solar: [1650, 6, 1],
		Dow: 0,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1650],
		Leap: false
	},
	{
		solar: [1650, 6, 2],
		Dow: 1,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 53,
		Woy: [28, 1650],
		Leap: false
	},
	{
		solar: [1650, 6, 29],
		Dow: 0,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1650],
		Leap: false
	},
	{
		solar: [1650, 6, 30],
		Dow: 1,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1650],
		Leap: false
	},
	{
		solar: [1650, 7, 1],
		Dow: 2,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1650],
		Leap: false
	},
	{
		solar: [1650, 7, 2],
		Dow: 3,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 53,
		Woy: [32, 1650],
		Leap: false
	},
	{
		solar: [1650, 7, 29],
		Dow: 2,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1650],
		Leap: false
	},
	{
		solar: [1650, 7, 30],
		Dow: 3,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1650],
		Leap: false
	},
	{
		solar: [1650, 8, 1],
		Dow: 4,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1650],
		Leap: false
	},
	{
		solar: [1650, 8, 2],
		Dow: 5,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 53,
		Woy: [36, 1650],
		Leap: false
	},
	{
		solar: [1650, 8, 29],
		Dow: 4,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1650],
		Leap: false
	},
	{
		solar: [1650, 8, 30],
		Dow: 5,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1650],
		Leap: false
	},
	{
		solar: [1650, 9, 1],
		Dow: 6,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 53,
		Woy: [40, 1650],
		Leap: false
	},
	{
		solar: [1650, 9, 2],
		Dow: 0,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 53,
		Woy: [41, 1650],
		Leap: false
	},
	{
		solar: [1650, 9, 29],
		Dow: 6,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 53,
		Woy: [44, 1650],
		Leap: false
	},
	{
		solar: [1650, 9, 30],
		Dow: 0,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1650],
		Leap: false
	},
	{
		solar: [1650, 10, 1],
		Dow: 1,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1650],
		Leap: false
	},
	{
		solar: [1650, 10, 2],
		Dow: 2,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 53,
		Woy: [45, 1650],
		Leap: false
	},
	{
		solar: [1650, 10, 29],
		Dow: 1,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1650],
		Leap: false
	},
	{
		solar: [1650, 10, 30],
		Dow: 2,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 53,
		Woy: [49, 1650],
		Leap: false
	},
	{
		solar: [1650, 11, 1],
		Dow: 3,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1650],
		Leap: false
	},
	{
		solar: [1650, 11, 2],
		Dow: 4,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 53,
		Woy: [49, 1650],
		Leap: false
	},
	{
		solar: [1650, 11, 26],
		Dow: 0,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1650],
		Leap: false
	},
	{
		solar: [1650, 11, 27],
		Dow: 1,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1650],
		Leap: false
	},
	{
		solar: [1650, 11, 28],
		Dow: 2,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1650],
		Leap: false
	},
	{
		solar: [1650, 11, 29],
		Dow: 3,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 53,
		Woy: [53, 1650],
		Leap: false
	},
	{
		solar: [1653, 0, 1],
		Dow: 0,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1653],
		Leap: false
	},
	{
		solar: [1653, 0, 2],
		Dow: 1,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1653],
		Leap: false
	},
	{
		solar: [1653, 0, 3],
		Dow: 2,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1653],
		Leap: false
	},
	{
		solar: [1653, 0, 4],
		Dow: 3,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1653],
		Leap: false
	},
	{
		solar: [1653, 0, 5],
		Dow: 4,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1653],
		Leap: false
	},
	{
		solar: [1653, 0, 30],
		Dow: 1,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1653],
		Leap: false
	},
	{
		solar: [1653, 0, 31],
		Dow: 2,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1653],
		Leap: false
	},
	{
		solar: [1653, 1, 1],
		Dow: 3,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1653],
		Leap: false
	},
	{
		solar: [1653, 1, 2],
		Dow: 4,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1653],
		Leap: false
	},
	{
		solar: [1653, 1, 30],
		Dow: 4,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1653],
		Leap: false
	},
	{
		solar: [1653, 1, 31],
		Dow: 5,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1653],
		Leap: false
	},
	{
		solar: [1653, 2, 1],
		Dow: 6,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1653],
		Leap: false
	},
	{
		solar: [1653, 2, 2],
		Dow: 0,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [10, 1653],
		Leap: false
	},
	{
		solar: [1653, 2, 30],
		Dow: 0,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1653],
		Leap: false
	},
	{
		solar: [1653, 2, 31],
		Dow: 1,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1653],
		Leap: false
	},
	{
		solar: [1653, 3, 1],
		Dow: 2,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1653],
		Leap: false
	},
	{
		solar: [1653, 3, 2],
		Dow: 3,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1653],
		Leap: false
	},
	{
		solar: [1653, 3, 30],
		Dow: 3,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1653],
		Leap: false
	},
	{
		solar: [1653, 3, 31],
		Dow: 4,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1653],
		Leap: false
	},
	{
		solar: [1653, 4, 1],
		Dow: 5,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1653],
		Leap: false
	},
	{
		solar: [1653, 4, 2],
		Dow: 6,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1653],
		Leap: false
	},
	{
		solar: [1653, 4, 30],
		Dow: 6,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1653],
		Leap: false
	},
	{
		solar: [1653, 4, 31],
		Dow: 0,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1653],
		Leap: false
	},
	{
		solar: [1653, 5, 1],
		Dow: 1,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1653],
		Leap: false
	},
	{
		solar: [1653, 5, 2],
		Dow: 2,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [23, 1653],
		Leap: false
	},
	{
		solar: [1653, 5, 30],
		Dow: 2,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1653],
		Leap: false
	},
	{
		solar: [1653, 5, 31],
		Dow: 3,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1653],
		Leap: false
	},
	{
		solar: [1653, 6, 1],
		Dow: 4,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1653],
		Leap: false
	},
	{
		solar: [1653, 6, 2],
		Dow: 5,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1653],
		Leap: false
	},
	{
		solar: [1653, 6, 29],
		Dow: 4,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1653],
		Leap: false
	},
	{
		solar: [1653, 6, 30],
		Dow: 5,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1653],
		Leap: false
	},
	{
		solar: [1653, 7, 1],
		Dow: 6,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1653],
		Leap: false
	},
	{
		solar: [1653, 7, 2],
		Dow: 0,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [32, 1653],
		Leap: false
	},
	{
		solar: [1653, 7, 29],
		Dow: 6,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1653],
		Leap: false
	},
	{
		solar: [1653, 7, 30],
		Dow: 0,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1653],
		Leap: false
	},
	{
		solar: [1653, 8, 1],
		Dow: 1,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1653],
		Leap: false
	},
	{
		solar: [1653, 8, 2],
		Dow: 2,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [36, 1653],
		Leap: false
	},
	{
		solar: [1653, 8, 29],
		Dow: 1,
		Diy: 365,
		Doy: 274,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1653],
		Leap: false
	},
	{
		solar: [1653, 8, 30],
		Dow: 2,
		Diy: 365,
		Doy: 275,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1653],
		Leap: false
	},
	{
		solar: [1653, 9, 1],
		Dow: 3,
		Diy: 365,
		Doy: 276,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1653],
		Leap: false
	},
	{
		solar: [1653, 9, 2],
		Dow: 4,
		Diy: 365,
		Doy: 277,
		Dim: 30,
		Wiy: 52,
		Woy: [40, 1653],
		Leap: false
	},
	{
		solar: [1653, 9, 29],
		Dow: 3,
		Diy: 365,
		Doy: 304,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1653],
		Leap: false
	},
	{
		solar: [1653, 9, 30],
		Dow: 4,
		Diy: 365,
		Doy: 305,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1653],
		Leap: false
	},
	{
		solar: [1653, 10, 1],
		Dow: 5,
		Diy: 365,
		Doy: 306,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1653],
		Leap: false
	},
	{
		solar: [1653, 10, 2],
		Dow: 6,
		Diy: 365,
		Doy: 307,
		Dim: 30,
		Wiy: 52,
		Woy: [44, 1653],
		Leap: false
	},
	{
		solar: [1653, 10, 29],
		Dow: 5,
		Diy: 365,
		Doy: 334,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1653],
		Leap: false
	},
	{
		solar: [1653, 10, 30],
		Dow: 6,
		Diy: 365,
		Doy: 335,
		Dim: 30,
		Wiy: 52,
		Woy: [48, 1653],
		Leap: false
	},
	{
		solar: [1653, 11, 1],
		Dow: 0,
		Diy: 365,
		Doy: 336,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1653],
		Leap: false
	},
	{
		solar: [1653, 11, 2],
		Dow: 1,
		Diy: 365,
		Doy: 337,
		Dim: 29,
		Wiy: 52,
		Woy: [49, 1653],
		Leap: false
	},
	{
		solar: [1653, 11, 26],
		Dow: 4,
		Diy: 365,
		Doy: 361,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1653],
		Leap: false
	},
	{
		solar: [1653, 11, 27],
		Dow: 5,
		Diy: 365,
		Doy: 362,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1653],
		Leap: false
	},
	{
		solar: [1653, 11, 28],
		Dow: 6,
		Diy: 365,
		Doy: 363,
		Dim: 29,
		Wiy: 52,
		Woy: [52, 1653],
		Leap: false
	},
	{
		solar: [1653, 11, 29],
		Dow: 0,
		Diy: 365,
		Doy: 364,
		Dim: 29,
		Wiy: 52,
		Woy: [1, 1654],
		Leap: false
	},
	{
		solar: [1656, 0, 1],
		Dow: 4,
		Diy: 365,
		Doy: 0,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1655],
		Leap: false
	},
	{
		solar: [1656, 0, 2],
		Dow: 5,
		Diy: 365,
		Doy: 1,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1655],
		Leap: false
	},
	{
		solar: [1656, 0, 3],
		Dow: 6,
		Diy: 365,
		Doy: 2,
		Dim: 31,
		Wiy: 52,
		Woy: [53, 1655],
		Leap: false
	},
	{
		solar: [1656, 0, 4],
		Dow: 0,
		Diy: 365,
		Doy: 3,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1656],
		Leap: false
	},
	{
		solar: [1656, 0, 5],
		Dow: 1,
		Diy: 365,
		Doy: 4,
		Dim: 31,
		Wiy: 52,
		Woy: [1, 1656],
		Leap: false
	},
	{
		solar: [1656, 0, 30],
		Dow: 5,
		Diy: 365,
		Doy: 29,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1656],
		Leap: false
	},
	{
		solar: [1656, 0, 31],
		Dow: 6,
		Diy: 365,
		Doy: 30,
		Dim: 31,
		Wiy: 52,
		Woy: [4, 1656],
		Leap: false
	},
	{
		solar: [1656, 1, 1],
		Dow: 0,
		Diy: 365,
		Doy: 31,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1656],
		Leap: false
	},
	{
		solar: [1656, 1, 2],
		Dow: 1,
		Diy: 365,
		Doy: 32,
		Dim: 31,
		Wiy: 52,
		Woy: [5, 1656],
		Leap: false
	},
	{
		solar: [1656, 1, 30],
		Dow: 1,
		Diy: 365,
		Doy: 60,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1656],
		Leap: false
	},
	{
		solar: [1656, 1, 31],
		Dow: 2,
		Diy: 365,
		Doy: 61,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1656],
		Leap: false
	},
	{
		solar: [1656, 2, 1],
		Dow: 3,
		Diy: 365,
		Doy: 62,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1656],
		Leap: false
	},
	{
		solar: [1656, 2, 2],
		Dow: 4,
		Diy: 365,
		Doy: 63,
		Dim: 31,
		Wiy: 52,
		Woy: [9, 1656],
		Leap: false
	},
	{
		solar: [1656, 2, 30],
		Dow: 4,
		Diy: 365,
		Doy: 91,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1656],
		Leap: false
	},
	{
		solar: [1656, 2, 31],
		Dow: 5,
		Diy: 365,
		Doy: 92,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1656],
		Leap: false
	},
	{
		solar: [1656, 3, 1],
		Dow: 6,
		Diy: 365,
		Doy: 93,
		Dim: 31,
		Wiy: 52,
		Woy: [13, 1656],
		Leap: false
	},
	{
		solar: [1656, 3, 2],
		Dow: 0,
		Diy: 365,
		Doy: 94,
		Dim: 31,
		Wiy: 52,
		Woy: [14, 1656],
		Leap: false
	},
	{
		solar: [1656, 3, 30],
		Dow: 0,
		Diy: 365,
		Doy: 122,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1656],
		Leap: false
	},
	{
		solar: [1656, 3, 31],
		Dow: 1,
		Diy: 365,
		Doy: 123,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1656],
		Leap: false
	},
	{
		solar: [1656, 4, 1],
		Dow: 2,
		Diy: 365,
		Doy: 124,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1656],
		Leap: false
	},
	{
		solar: [1656, 4, 2],
		Dow: 3,
		Diy: 365,
		Doy: 125,
		Dim: 31,
		Wiy: 52,
		Woy: [18, 1656],
		Leap: false
	},
	{
		solar: [1656, 4, 30],
		Dow: 3,
		Diy: 365,
		Doy: 153,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1656],
		Leap: false
	},
	{
		solar: [1656, 4, 31],
		Dow: 4,
		Diy: 365,
		Doy: 154,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1656],
		Leap: false
	},
	{
		solar: [1656, 5, 1],
		Dow: 5,
		Diy: 365,
		Doy: 155,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1656],
		Leap: false
	},
	{
		solar: [1656, 5, 2],
		Dow: 6,
		Diy: 365,
		Doy: 156,
		Dim: 31,
		Wiy: 52,
		Woy: [22, 1656],
		Leap: false
	},
	{
		solar: [1656, 5, 30],
		Dow: 6,
		Diy: 365,
		Doy: 184,
		Dim: 31,
		Wiy: 52,
		Woy: [26, 1656],
		Leap: false
	},
	{
		solar: [1656, 5, 31],
		Dow: 0,
		Diy: 365,
		Doy: 185,
		Dim: 31,
		Wiy: 52,
		Woy: [27, 1656],
		Leap: false
	},
	{
		solar: [1656, 6, 1],
		Dow: 1,
		Diy: 365,
		Doy: 186,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1656],
		Leap: false
	},
	{
		solar: [1656, 6, 2],
		Dow: 2,
		Diy: 365,
		Doy: 187,
		Dim: 30,
		Wiy: 52,
		Woy: [27, 1656],
		Leap: false
	},
	{
		solar: [1656, 6, 29],
		Dow: 1,
		Diy: 365,
		Doy: 214,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1656],
		Leap: false
	},
	{
		solar: [1656, 6, 30],
		Dow: 2,
		Diy: 365,
		Doy: 215,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1656],
		Leap: false
	},
	{
		solar: [1656, 7, 1],
		Dow: 3,
		Diy: 365,
		Doy: 216,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1656],
		Leap: false
	},
	{
		solar: [1656, 7, 2],
		Dow: 4,
		Diy: 365,
		Doy: 217,
		Dim: 30,
		Wiy: 52,
		Woy: [31, 1656],
		Leap: false
	},
	{
		solar: [1656, 7, 29],
		Dow: 3,
		Diy: 365,
		Doy: 244,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1656],
		Leap: false
	},
	{
		solar: [1656, 7, 30],
		Dow: 4,
		Diy: 365,
		Doy: 245,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1656],
		Leap: false
	},
	{
		solar: [1656, 8, 1],
		Dow: 5,
		Diy: 365,
		Doy: 246,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1656],
		Leap: false
	},
	{
		solar: [1656, 8, 2],
		Dow: 6,
		Diy: 365,
		Doy: 247,
		Dim: 30,
		Wiy: 52,
		Woy: [35, 1656],
		Leap: false
	},
	{
		solar: [1656, 8, 29],
		Dow: 5,
		Diy: 365,
	},