/*
function padstring(str: any, pad: number = 2) {
	return `${str}`.padStart(pad, "0");
}
function strtoint(str: string | number) {
	return (str as any) * 1;

let shdate = new SHDate();
for (var iyear = 1400; iyear <= 1405; iyear++)
	for (var imonth = 0; imonth <= 11; imonth++)
		for (var iday = 1; iday <= SHDate.DAYS_IN_MONTH[imonth]; iday++) {
			shdate.setFullYear(iyear, imonth, iday);
			const [year, month, day] = [
				shdate.getFullYear(),
				shdate.getMonth(),
				shdate.getDate()
			];

			let gdate = new Date(shdate.getTime());
			const [gyear, gmonth, gday] = [
				gdate.getFullYear(),
				gdate.getMonth(),
				gdate.getDate()
			];

			console.log(
				`{
					sdate:[${year},${strtoint(month) + 1},${day}],
					sdata:{
						solar:[${year},${month},${day}]
					},
					stime:${shdate.getTime()},
					gdate:[${gyear},${strtoint(gmonth) + 1},${gday}],
					gdata:{
						gregorian:[${gyear},${gmonth},${gday}]
					},
					gtime:${gdate.getTime()}
				},`
			);
		}

*/

export const solarDates = [
	{
		sdate: [1400, 1, 1],
		sdata: {
			solar: [1400, 0, 1]
		},
		stime: 1616318183917,
		gdate: [2021, 3, 21],
		gdata: {
			gregorian: [2021, 2, 21]
		},
		gtime: 1616318183917
	},
	{
		sdate: [1400, 1, 2],
		sdata: {
			solar: [1400, 0, 2]
		},
		stime: 1616400983917,
		gdate: [2021, 3, 22],
		gdata: {
			gregorian: [2021, 2, 22]
		},
		gtime: 1616400983917
	},
	{
		sdate: [1400, 1, 3],
		sdata: {
			solar: [1400, 0, 3]
		},
		stime: 1616487383917,
		gdate: [2021, 3, 23],
		gdata: {
			gregorian: [2021, 2, 23]
		},
		gtime: 1616487383917
	},
	{
		sdate: [1400, 1, 4],
		sdata: {
			solar: [1400, 0, 4]
		},
		stime: 1616573783917,
		gdate: [2021, 3, 24],
		gdata: {
			gregorian: [2021, 2, 24]
		},
		gtime: 1616573783917
	},
	{
		sdate: [1400, 1, 5],
		sdata: {
			solar: [1400, 0, 5]
		},
		stime: 1616660183917,
		gdate: [2021, 3, 25],
		gdata: {
			gregorian: [2021, 2, 25]
		},
		gtime: 1616660183917
	},
	{
		sdate: [1400, 1, 6],
		sdata: {
			solar: [1400, 0, 6]
		},
		stime: 1616746583917,
		gdate: [2021, 3, 26],
		gdata: {
			gregorian: [2021, 2, 26]
		},
		gtime: 1616746583917
	},
	{
		sdate: [1400, 1, 7],
		sdata: {
			solar: [1400, 0, 7]
		},
		stime: 1616832983917,
		gdate: [2021, 3, 27],
		gdata: {
			gregorian: [2021, 2, 27]
		},
		gtime: 1616832983917
	},
	{
		sdate: [1400, 1, 8],
		sdata: {
			solar: [1400, 0, 8]
		},
		stime: 1616919383917,
		gdate: [2021, 3, 28],
		gdata: {
			gregorian: [2021, 2, 28]
		},
		gtime: 1616919383917
	},
	{
		sdate: [1400, 1, 9],
		sdata: {
			solar: [1400, 0, 9]
		},
		stime: 1617005783917,
		gdate: [2021, 3, 29],
		gdata: {
			gregorian: [2021, 2, 29]
		},
		gtime: 1617005783917
	},
	{
		sdate: [1400, 1, 10],
		sdata: {
			solar: [1400, 0, 10]
		},
		stime: 1617092183917,
		gdate: [2021, 3, 30],
		gdata: {
			gregorian: [2021, 2, 30]
		},
		gtime: 1617092183917
	},
	{
		sdate: [1400, 1, 11],
		sdata: {
			solar: [1400, 0, 11]
		},
		stime: 1617178583917,
		gdate: [2021, 3, 31],
		gdata: {
			gregorian: [2021, 2, 31]
		},
		gtime: 1617178583917
	},
	{
		sdate: [1400, 1, 12],
		sdata: {
			solar: [1400, 0, 12]
		},
		stime: 1617264983917,
		gdate: [2021, 4, 1],
		gdata: {
			gregorian: [2021, 3, 1]
		},
		gtime: 1617264983917
	},
	{
		sdate: [1400, 1, 13],
		sdata: {
			solar: [1400, 0, 13]
		},
		stime: 1617351383917,
		gdate: [2021, 4, 2],
		gdata: {
			gregorian: [2021, 3, 2]
		},
		gtime: 1617351383917
	},
	{
		sdate: [1400, 1, 14],
		sdata: {
			solar: [1400, 0, 14]
		},
		stime: 1617437783917,
		gdate: [2021, 4, 3],
		gdata: {
			gregorian: [2021, 3, 3]
		},
		gtime: 1617437783917
	},
	{
		sdate: [1400, 1, 15],
		sdata: {
			solar: [1400, 0, 15]
		},
		stime: 1617524183917,
		gdate: [2021, 4, 4],
		gdata: {
			gregorian: [2021, 3, 4]
		},
		gtime: 1617524183917
	},
	{
		sdate: [1400, 1, 16],
		sdata: {
			solar: [1400, 0, 16]
		},
		stime: 1617610583917,
		gdate: [2021, 4, 5],
		gdata: {
			gregorian: [2021, 3, 5]
		},
		gtime: 1617610583917
	},
	{
		sdate: [1400, 1, 17],
		sdata: {
			solar: [1400, 0, 17]
		},
		stime: 1617696983917,
		gdate: [2021, 4, 6],
		gdata: {
			gregorian: [2021, 3, 6]
		},
		gtime: 1617696983917
	},
	{
		sdate: [1400, 1, 18],
		sdata: {
			solar: [1400, 0, 18]
		},
		stime: 1617783383917,
		gdate: [2021, 4, 7],
		gdata: {
			gregorian: [2021, 3, 7]
		},
		gtime: 1617783383917
	},
	{
		sdate: [1400, 1, 19],
		sdata: {
			solar: [1400, 0, 19]
		},
		stime: 1617869783917,
		gdate: [2021, 4, 8],
		gdata: {
			gregorian: [2021, 3, 8]
		},
		gtime: 1617869783917
	},
	{
		sdate: [1400, 1, 20],
		sdata: {
			solar: [1400, 0, 20]
		},
		stime: 1617956183917,
		gdate: [2021, 4, 9],
		gdata: {
			gregorian: [2021, 3, 9]
		},
		gtime: 1617956183917
	},
	{
		sdate: [1400, 1, 21],
		sdata: {
			solar: [1400, 0, 21]
		},
		stime: 1618042583917,
		gdate: [2021, 4, 10],
		gdata: {
			gregorian: [2021, 3, 10]
		},
		gtime: 1618042583917
	},
	{
		sdate: [1400, 1, 22],
		sdata: {
			solar: [1400, 0, 22]
		},
		stime: 1618128983917,
		gdate: [2021, 4, 11],
		gdata: {
			gregorian: [2021, 3, 11]
		},
		gtime: 1618128983917
	},
	{
		sdate: [1400, 1, 23],
		sdata: {
			solar: [1400, 0, 23]
		},
		stime: 1618215383917,
		gdate: [2021, 4, 12],
		gdata: {
			gregorian: [2021, 3, 12]
		},
		gtime: 1618215383917
	},
	{
		sdate: [1400, 1, 24],
		sdata: {
			solar: [1400, 0, 24]
		},
		stime: 1618301783917,
		gdate: [2021, 4, 13],
		gdata: {
			gregorian: [2021, 3, 13]
		},
		gtime: 1618301783917
	},
	{
		sdate: [1400, 1, 25],
		sdata: {
			solar: [1400, 0, 25]
		},
		stime: 1618388183917,
		gdate: [2021, 4, 14],
		gdata: {
			gregorian: [2021, 3, 14]
		},
		gtime: 1618388183917
	},
	{
		sdate: [1400, 1, 26],
		sdata: {
			solar: [1400, 0, 26]
		},
		stime: 1618474583917,
		gdate: [2021, 4, 15],
		gdata: {
			gregorian: [2021, 3, 15]
		},
		gtime: 1618474583917
	},
	{
		sdate: [1400, 1, 27],
		sdata: {
			solar: [1400, 0, 27]
		},
		stime: 1618560983917,
		gdate: [2021, 4, 16],
		gdata: {
			gregorian: [2021, 3, 16]
		},
		gtime: 1618560983917
	},
	{
		sdate: [1400, 1, 28],
		sdata: {
			solar: [1400, 0, 28]
		},
		stime: 1618647383917,
		gdate: [2021, 4, 17],
		gdata: {
			gregorian: [2021, 3, 17]
		},
		gtime: 1618647383917
	},
	{
		sdate: [1400, 1, 29],
		sdata: {
			solar: [1400, 0, 29]
		},
		stime: 1618733783917,
		gdate: [2021, 4, 18],
		gdata: {
			gregorian: [2021, 3, 18]
		},
		gtime: 1618733783917
	},
	{
		sdate: [1400, 1, 30],
		sdata: {
			solar: [1400, 0, 30]
		},
		stime: 1618820183917,
		gdate: [2021, 4, 19],
		gdata: {
			gregorian: [2021, 3, 19]
		},
		gtime: 1618820183917
	},
	{
		sdate: [1400, 1, 31],
		sdata: {
			solar: [1400, 0, 31]
		},
		stime: 1618906583917,
		gdate: [2021, 4, 20],
		gdata: {
			gregorian: [2021, 3, 20]
		},
		gtime: 1618906583917
	},
	{
		sdate: [1400, 2, 1],
		sdata: {
			solar: [1400, 1, 1]
		},
		stime: 1618992983917,
		gdate: [2021, 4, 21],
		gdata: {
			gregorian: [2021, 3, 21]
		},
		gtime: 1618992983917
	},
	{
		sdate: [1400, 2, 2],
		sdata: {
			solar: [1400, 1, 2]
		},
		stime: 1619079383917,
		gdate: [2021, 4, 22],
		gdata: {
			gregorian: [2021, 3, 22]
		},
		gtime: 1619079383917
	},
	{
		sdate: [1400, 2, 3],
		sdata: {
			solar: [1400, 1, 3]
		},
		stime: 1619165783917,
		gdate: [2021, 4, 23],
		gdata: {
			gregorian: [2021, 3, 23]
		},
		gtime: 1619165783917
	},
	{
		sdate: [1400, 2, 4],
		sdata: {
			solar: [1400, 1, 4]
		},
		stime: 1619252183917,
		gdate: [2021, 4, 24],
		gdata: {
			gregorian: [2021, 3, 24]
		},
		gtime: 1619252183917
	},
	{
		sdate: [1400, 2, 5],
		sdata: {
			solar: [1400, 1, 5]
		},
		stime: 1619338583917,
		gdate: [2021, 4, 25],
		gdata: {
			gregorian: [2021, 3, 25]
		},
		gtime: 1619338583917
	},
	{
		sdate: [1400, 2, 6],
		sdata: {
			solar: [1400, 1, 6]
		},
		stime: 1619424983917,
		gdate: [2021, 4, 26],
		gdata: {
			gregorian: [2021, 3, 26]
		},
		gtime: 1619424983917
	},
	{
		sdate: [1400, 2, 7],
		sdata: {
			solar: [1400, 1, 7]
		},
		stime: 1619511383917,
		gdate: [2021, 4, 27],
		gdata: {
			gregorian: [2021, 3, 27]
		},
		gtime: 1619511383917
	},
	{
		sdate: [1400, 2, 8],
		sdata: {
			solar: [1400, 1, 8]
		},
		stime: 1619597783917,
		gdate: [2021, 4, 28],
		gdata: {
			gregorian: [2021, 3, 28]
		},
		gtime: 1619597783917
	},
	{
		sdate: [1400, 2, 9],
		sdata: {
			solar: [1400, 1, 9]
		},
		stime: 1619684183917,
		gdate: [2021, 4, 29],
		gdata: {
			gregorian: [2021, 3, 29]
		},
		gtime: 1619684183917
	},
	{
		sdate: [1400, 2, 10],
		sdata: {
			solar: [1400, 1, 10]
		},
		stime: 1619770583917,
		gdate: [2021, 4, 30],
		gdata: {
			gregorian: [2021, 3, 30]
		},
		gtime: 1619770583917
	},
	{
		sdate: [1400, 2, 11],
		sdata: {
			solar: [1400, 1, 11]
		},
		stime: 1619856983917,
		gdate: [2021, 5, 1],
		gdata: {
			gregorian: [2021, 4, 1]
		},
		gtime: 1619856983917
	},
	{
		sdate: [1400, 2, 12],
		sdata: {
			solar: [1400, 1, 12]
		},
		stime: 1619943383917,
		gdate: [2021, 5, 2],
		gdata: {
			gregorian: [2021, 4, 2]
		},
		gtime: 1619943383917
	},
	{
		sdate: [1400, 2, 13],
		sdata: {
			solar: [1400, 1, 13]
		},
		stime: 1620029783917,
		gdate: [2021, 5, 3],
		gdata: {
			gregorian: [2021, 4, 3]
		},
		gtime: 1620029783917
	},
	{
		sdate: [1400, 2, 14],
		sdata: {
			solar: [1400, 1, 14]
		},
		stime: 1620116183917,
		gdate: [2021, 5, 4],
		gdata: {
			gregorian: [2021, 4, 4]
		},
		gtime: 1620116183917
	},
	{
		sdate: [1400, 2, 15],
		sdata: {
			solar: [1400, 1, 15]
		},
		stime: 1620202583917,
		gdate: [2021, 5, 5],
		gdata: {
			gregorian: [2021, 4, 5]
		},
		gtime: 1620202583917
	},
	{
		sdate: [1400, 2, 16],
		sdata: {
			solar: [1400, 1, 16]
		},
		stime: 1620288983917,
		gdate: [2021, 5, 6],
		gdata: {
			gregorian: [2021, 4, 6]
		},
		gtime: 1620288983917
	},
	{
		sdate: [1400, 2, 17],
		sdata: {
			solar: [1400, 1, 17]
		},
		stime: 1620375383917,
		gdate: [2021, 5, 7],
		gdata: {
			gregorian: [2021, 4, 7]
		},
		gtime: 1620375383917
	},
	{
		sdate: [1400, 2, 18],
		sdata: {
			solar: [1400, 1, 18]
		},
		stime: 1620461783917,
		gdate: [2021, 5, 8],
		gdata: {
			gregorian: [2021, 4, 8]
		},
		gtime: 1620461783917
	},
	{
		sdate: [1400, 2, 19],
		sdata: {
			solar: [1400, 1, 19]
		},
		stime: 1620548183917,
		gdate: [2021, 5, 9],
		gdata: {
			gregorian: [2021, 4, 9]
		},
		gtime: 1620548183917
	},
	{
		sdate: [1400, 2, 20],
		sdata: {
			solar: [1400, 1, 20]
		},
		stime: 1620634583917,
		gdate: [2021, 5, 10],
		gdata: {
			gregorian: [2021, 4, 10]
		},
		gtime: 1620634583917
	},
	{
		sdate: [1400, 2, 21],
		sdata: {
			solar: [1400, 1, 21]
		},
		stime: 1620720983917,
		gdate: [2021, 5, 11],
		gdata: {
			gregorian: [2021, 4, 11]
		},
		gtime: 1620720983917
	},
	{
		sdate: [1400, 2, 22],
		sdata: {
			solar: [1400, 1, 22]
		},
		stime: 1620807383917,
		gdate: [2021, 5, 12],
		gdata: {
			gregorian: [2021, 4, 12]
		},
		gtime: 1620807383917
	},
	{
		sdate: [1400, 2, 23],
		sdata: {
			solar: [1400, 1, 23]
		},
		stime: 1620893783917,
		gdate: [2021, 5, 13],
		gdata: {
			gregorian: [2021, 4, 13]
		},
		gtime: 1620893783917
	},
	{
		sdate: [1400, 2, 24],
		sdata: {
			solar: [1400, 1, 24]
		},
		stime: 1620980183917,
		gdate: [2021, 5, 14],
		gdata: {
			gregorian: [2021, 4, 14]
		},
		gtime: 1620980183917
	},
	{
		sdate: [1400, 2, 25],
		sdata: {
			solar: [1400, 1, 25]
		},
		stime: 1621066583917,
		gdate: [2021, 5, 15],
		gdata: {
			gregorian: [2021, 4, 15]
		},
		gtime: 1621066583917
	},
	{
		sdate: [1400, 2, 26],
		sdata: {
			solar: [1400, 1, 26]
		},
		stime: 1621152983917,
		gdate: [2021, 5, 16],
		gdata: {
			gregorian: [2021, 4, 16]
		},
		gtime: 1621152983917
	},
	{
		sdate: [1400, 2, 27],
		sdata: {
			solar: [1400, 1, 27]
		},
		stime: 1621239383917,
		gdate: [2021, 5, 17],
		gdata: {
			gregorian: [2021, 4, 17]
		},
		gtime: 1621239383917
	},
	{
		sdate: [1400, 2, 28],
		sdata: {
			solar: [1400, 1, 28]
		},
		stime: 1621325783917,
		gdate: [2021, 5, 18],
		gdata: {
			gregorian: [2021, 4, 18]
		},
		gtime: 1621325783917
	},
	{
		sdate: [1400, 2, 29],
		sdata: {
			solar: [1400, 1, 29]
		},
		stime: 1621412183917,
		gdate: [2021, 5, 19],
		gdata: {
			gregorian: [2021, 4, 19]
		},
		gtime: 1621412183917
	},
	{
		sdate: [1400, 2, 30],
		sdata: {
			solar: [1400, 1, 30]
		},
		stime: 1621498583917,
		gdate: [2021, 5, 20],
		gdata: {
			gregorian: [2021, 4, 20]
		},
		gtime: 1621498583917
	},
	{
		sdate: [1400, 2, 31],
		sdata: {
			solar: [1400, 1, 31]
		},
		stime: 1621584983917,
		gdate: [2021, 5, 21],
		gdata: {
			gregorian: [2021, 4, 21]
		},
		gtime: 1621584983917
	},
	{
		sdate: [1400, 3, 1],
		sdata: {
			solar: [1400, 2, 1]
		},
		stime: 1621671383917,
		gdate: [2021, 5, 22],
		gdata: {
			gregorian: [2021, 4, 22]
		},
		gtime: 1621671383917
	},
	{
		sdate: [1400, 3, 2],
		sdata: {
			solar: [1400, 2, 2]
		},
		stime: 1621757783917,
		gdate: [2021, 5, 23],
		gdata: {
			gregorian: [2021, 4, 23]
		},
		gtime: 1621757783917
	},
	{
		sdate: [1400, 3, 3],
		sdata: {
			solar: [1400, 2, 3]
		},
		stime: 1621844183917,
		gdate: [2021, 5, 24],
		gdata: {
			gregorian: [2021, 4, 24]
		},
		gtime: 1621844183917
	},
	{
		sdate: [1400, 3, 4],
		sdata: {
			solar: [1400, 2, 4]
		},
		stime: 1621930583917,
		gdate: [2021, 5, 25],
		gdata: {
			gregorian: [2021, 4, 25]
		},
		gtime: 1621930583917
	},
	{
		sdate: [1400, 3, 5],
		sdata: {
			solar: [1400, 2, 5]
		},
		stime: 1622016983917,
		gdate: [2021, 5, 26],
		gdata: {
			gregorian: [2021, 4, 26]
		},
		gtime: 1622016983917
	},
	{
		sdate: [1400, 3, 6],
		sdata: {
			solar: [1400, 2, 6]
		},
		stime: 1622103383917,
		gdate: [2021, 5, 27],
		gdata: {
			gregorian: [2021, 4, 27]
		},
		gtime: 1622103383917
	},
	{
		sdate: [1400, 3, 7],
		sdata: {
			solar: [1400, 2, 7]
		},
		stime: 1622189783917,
		gdate: [2021, 5, 28],
		gdata: {
			gregorian: [2021, 4, 28]
		},
		gtime: 1622189783917
	},
	{
		sdate: [1400, 3, 8],
		sdata: {
			solar: [1400, 2, 8]
		},
		stime: 1622276183917,
		gdate: [2021, 5, 29],
		gdata: {
			gregorian: [2021, 4, 29]
		},
		gtime: 1622276183917
	},
	{
		sdate: [1400, 3, 9],
		sdata: {
			solar: [1400, 2, 9]
		},
		stime: 1622362583917,
		gdate: [2021, 5, 30],
		gdata: {
			gregorian: [2021, 4, 30]
		},
		gtime: 1622362583917
	},
	{
		sdate: [1400, 3, 10],
		sdata: {
			solar: [1400, 2, 10]
		},
		stime: 1622448983917,
		gdate: [2021, 5, 31],
		gdata: {
			gregorian: [2021, 4, 31]
		},
		gtime: 1622448983917
	},
	{
		sdate: [1400, 3, 11],
		sdata: {
			solar: [1400, 2, 11]
		},
		stime: 1622535383917,
		gdate: [2021, 6, 1],
		gdata: {
			gregorian: [2021, 5, 1]
		},
		gtime: 1622535383917
	},
	{
		sdate: [1400, 3, 12],
		sdata: {
			solar: [1400, 2, 12]
		},
		stime: 1622621783917,
		gdate: [2021, 6, 2],
		gdata: {
			gregorian: [2021, 5, 2]
		},
		gtime: 1622621783917
	},
	{
		sdate: [1400, 3, 13],
		sdata: {
			solar: [1400, 2, 13]
		},
		stime: 1622708183917,
		gdate: [2021, 6, 3],
		gdata: {
			gregorian: [2021, 5, 3]
		},
		gtime: 1622708183917
	},
	{
		sdate: [1400, 3, 14],
		sdata: {
			solar: [1400, 2, 14]
		},
		stime: 1622794583917,
		gdate: [2021, 6, 4],
		gdata: {
			gregorian: [2021, 5, 4]
		},
		gtime: 1622794583917
	},
	{
		sdate: [1400, 3, 15],
		sdata: {
			solar: [1400, 2, 15]
		},
		stime: 1622880983917,
		gdate: [2021, 6, 5],
		gdata: {
			gregorian: [2021, 5, 5]
		},
		gtime: 1622880983917
	},
	{
		sdate: [1400, 3, 16],
		sdata: {
			solar: [1400, 2, 16]
		},
		stime: 1622967383917,
		gdate: [2021, 6, 6],
		gdata: {
			gregorian: [2021, 5, 6]
		},
		gtime: 1622967383917
	},
	{
		sdate: [1400, 3, 17],
		sdata: {
			solar: [1400, 2, 17]
		},
		stime: 1623053783917,
		gdate: [2021, 6, 7],
		gdata: {
			gregorian: [2021, 5, 7]
		},
		gtime: 1623053783917
	},
	{
		sdate: [1400, 3, 18],
		sdata: {
			solar: [1400, 2, 18]
		},
		stime: 1623140183917,
		gdate: [2021, 6, 8],
		gdata: {
			gregorian: [2021, 5, 8]
		},
		gtime: 1623140183917
	},
	{
		sdate: [1400, 3, 19],
		sdata: {
			solar: [1400, 2, 19]
		},
		stime: 1623226583917,
		gdate: [2021, 6, 9],
		gdata: {
			gregorian: [2021, 5, 9]
		},
		gtime: 1623226583917
	},
	{
		sdate: [1400, 3, 20],
		sdata: {
			solar: [1400, 2, 20]
		},
		stime: 1623312983917,
		gdate: [2021, 6, 10],
		gdata: {
			gregorian: [2021, 5, 10]
		},
		gtime: 1623312983917
	},
	{
		sdate: [1400, 3, 21],
		sdata: {
			solar: [1400, 2, 21]
		},
		stime: 1623399383917,
		gdate: [2021, 6, 11],
		gdata: {
			gregorian: [2021, 5, 11]
		},
		gtime: 1623399383917
	},
	{
		sdate: [1400, 3, 22],
		sdata: {
			solar: [1400, 2, 22]
		},
		stime: 1623485783917,
		gdate: [2021, 6, 12],
		gdata: {
			gregorian: [2021, 5, 12]
		},
		gtime: 1623485783917
	},
	{
		sdate: [1400, 3, 23],
		sdata: {
			solar: [1400, 2, 23]
		},
		stime: 1623572183917,
		gdate: [2021, 6, 13],
		gdata: {
			gregorian: [2021, 5, 13]
		},
		gtime: 1623572183917
	},
	{
		sdate: [1400, 3, 24],
		sdata: {
			solar: [1400, 2, 24]
		},
		stime: 1623658583917,
		gdate: [2021, 6, 14],
		gdata: {
			gregorian: [2021, 5, 14]
		},
		gtime: 1623658583917
	},
	{
		sdate: [1400, 3, 25],
		sdata: {
			solar: [1400, 2, 25]
		},
		stime: 1623744983917,
		gdate: [2021, 6, 15],
		gdata: {
			gregorian: [2021, 5, 15]
		},
		gtime: 1623744983917
	},
	{
		sdate: [1400, 3, 26],
		sdata: {
			solar: [1400, 2, 26]
		},
		stime: 1623831383917,
		gdate: [2021, 6, 16],
		gdata: {
			gregorian: [2021, 5, 16]
		},
		gtime: 1623831383917
	},
	{
		sdate: [1400, 3, 27],
		sdata: {
			solar: [1400, 2, 27]
		},
		stime: 1623917783917,
		gdate: [2021, 6, 17],
		gdata: {
			gregorian: [2021, 5, 17]
		},
		gtime: 1623917783917
	},
	{
		sdate: [1400, 3, 28],
		sdata: {
			solar: [1400, 2, 28]
		},
		stime: 1624004183917,
		gdate: [2021, 6, 18],
		gdata: {
			gregorian: [2021, 5, 18]
		},
		gtime: 1624004183917
	},
	{
		sdate: [1400, 3, 29],
		sdata: {
			solar: [1400, 2, 29]
		},
		stime: 1624090583917,
		gdate: [2021, 6, 19],
		gdata: {
			gregorian: [2021, 5, 19]
		},
		gtime: 1624090583917
	},
	{
		sdate: [1400, 3, 30],
		sdata: {
			solar: [1400, 2, 30]
		},
		stime: 1624176983917,
		gdate: [2021, 6, 20],
		gdata: {
			gregorian: [2021, 5, 20]
		},
		gtime: 1624176983917
	},
	{
		sdate: [1400, 3, 31],
		sdata: {
			solar: [1400, 2, 31]
		},
		stime: 1624263383917,
		gdate: [2021, 6, 21],
		gdata: {
			gregorian: [2021, 5, 21]
		},
		gtime: 1624263383917
	},
	{
		sdate: [1400, 4, 1],
		sdata: {
			solar: [1400, 3, 1]
		},
		stime: 1624349783917,
		gdate: [2021, 6, 22],
		gdata: {
			gregorian: [2021, 5, 22]
		},
		gtime: 1624349783917
	},
	{
		sdate: [1400, 4, 2],
		sdata: {
			solar: [1400, 3, 2]
		},
		stime: 1624436183917,
		gdate: [2021, 6, 23],
		gdata: {
			gregorian: [2021, 5, 23]
		},
		gtime: 1624436183917
	},
	{
		sdate: [1400, 4, 3],
		sdata: {
			solar: [1400, 3, 3]
		},
		stime: 1624522583917,
		gdate: [2021, 6, 24],
		gdata: {
			gregorian: [2021, 5, 24]
		},
		gtime: 1624522583917
	},
	{
		sdate: [1400, 4, 4],
		sdata: {
			solar: [1400, 3, 4]
		},
		stime: 1624608983917,
		gdate: [2021, 6, 25],
		gdata: {
			gregorian: [2021, 5, 25]
		},
		gtime: 1624608983917
	},
	{
		sdate: [1400, 4, 5],
		sdata: {
			solar: [1400, 3, 5]
		},
		stime: 1624695383917,
		gdate: [2021, 6, 26],
		gdata: {
			gregorian: [2021, 5, 26]
		},
		gtime: 1624695383917
	},
	{
		sdate: [1400, 4, 6],
		sdata: {
			solar: [1400, 3, 6]
		},
		stime: 1624781783917,
		gdate: [2021, 6, 27],
		gdata: {
			gregorian: [2021, 5, 27]
		},
		gtime: 1624781783917
	},
	{
		sdate: [1400, 4, 7],
		sdata: {
			solar: [1400, 3, 7]
		},
		stime: 1624868183917,
		gdate: [2021, 6, 28],
		gdata: {
			gregorian: [2021, 5, 28]
		},
		gtime: 1624868183917
	},
	{
		sdate: [1400, 4, 8],
		sdata: {
			solar: [1400, 3, 8]
		},
		stime: 1624954583917,
		gdate: [2021, 6, 29],
		gdata: {
			gregorian: [2021, 5, 29]
		},
		gtime: 1624954583917
	},
	{
		sdate: [1400, 4, 9],
		sdata: {
			solar: [1400, 3, 9]
		},
		stime: 1625040983917,
		gdate: [2021, 6, 30],
		gdata: {
			gregorian: [2021, 5, 30]
		},
		gtime: 1625040983917
	},
	{
		sdate: [1400, 4, 10],
		sdata: {
			solar: [1400, 3, 10]
		},
		stime: 1625127383917,
		gdate: [2021, 7, 1],
		gdata: {
			gregorian: [2021, 6, 1]
		},
		gtime: 1625127383917
	},
	{
		sdate: [1400, 4, 11],
		sdata: {
			solar: [1400, 3, 11]
		},
		stime: 1625213783917,
		gdate: [2021, 7, 2],
		gdata: {
			gregorian: [2021, 6, 2]
		},
		gtime: 1625213783917
	},
	{
		sdate: [1400, 4, 12],
		sdata: {
			solar: [1400, 3, 12]
		},
		stime: 1625300183917,
		gdate: [2021, 7, 3],
		gdata: {
			gregorian: [2021, 6, 3]
		},
		gtime: 1625300183917
	},
	{
		sdate: [1400, 4, 13],
		sdata: {
			solar: [1400, 3, 13]
		},
		stime: 1625386583917,
		gdate: [2021, 7, 4],
		gdata: {
			gregorian: [2021, 6, 4]
		},
		gtime: 1625386583917
	},
	{
		sdate: [1400, 4, 14],
		sdata: {
			solar: [1400, 3, 14]
		},
		stime: 1625472983917,
		gdate: [2021, 7, 5],
		gdata: {
			gregorian: [2021, 6, 5]
		},
		gtime: 1625472983917
	},
	{
		sdate: [1400, 4, 15],
		sdata: {
			solar: [1400, 3, 15]
		},
		stime: 1625559383917,
		gdate: [2021, 7, 6],
		gdata: {
			gregorian: [2021, 6, 6]
		},
		gtime: 1625559383917
	},
	{
		sdate: [1400, 4, 16],
		sdata: {
			solar: [1400, 3, 16]
		},
		stime: 1625645783917,
		gdate: [2021, 7, 7],
		gdata: {
			gregorian: [2021, 6, 7]
		},
		gtime: 1625645783917
	},
	{
		sdate: [1400, 4, 17],
		sdata: {
			solar: [1400, 3, 17]
		},
		stime: 1625732183917,
		gdate: [2021, 7, 8],
		gdata: {
			gregorian: [2021, 6, 8]
		},
		gtime: 1625732183917
	},
	{
		sdate: [1400, 4, 18],
		sdata: {
			solar: [1400, 3, 18]
		},
		stime: 1625818583917,
		gdate: [2021, 7, 9],
		gdata: {
			gregorian: [2021, 6, 9]
		},
		gtime: 1625818583917
	},
	{
		sdate: [1400, 4, 19],
		sdata: {
			solar: [1400, 3, 19]
		},
		stime: 1625904983917,
		gdate: [2021, 7, 10],
		gdata: {
			gregorian: [2021, 6, 10]
		},
		gtime: 1625904983917
	},
	{
		sdate: [1400, 4, 20],
		sdata: {
			solar: [1400, 3, 20]
		},
		stime: 1625991383917,
		gdate: [2021, 7, 11],
		gdata: {
			gregorian: [2021, 6, 11]
		},
		gtime: 1625991383917
	},
	{
		sdate: [1400, 4, 21],
		sdata: {
			solar: [1400, 3, 21]
		},
		stime: 1626077783917,
		gdate: [2021, 7, 12],
		gdata: {
			gregorian: [2021, 6, 12]
		},
		gtime: 1626077783917
	},
	{
		sdate: [1400, 4, 22],
		sdata: {
			solar: [1400, 3, 22]
		},
		stime: 1626164183917,
		gdate: [2021, 7, 13],
		gdata: {
			gregorian: [2021, 6, 13]
		},
		gtime: 1626164183917
	},
	{
		sdate: [1400, 4, 23],
		sdata: {
			solar: [1400, 3, 23]
		},
		stime: 1626250583917,
		gdate: [2021, 7, 14],
		gdata: {
			gregorian: [2021, 6, 14]
		},
		gtime: 1626250583917
	},
	{
		sdate: [1400, 4, 24],
		sdata: {
			solar: [1400, 3, 24]
		},
		stime: 1626336983917,
		gdate: [2021, 7, 15],
		gdata: {
			gregorian: [2021, 6, 15]
		},
		gtime: 1626336983917
	},
	{
		sdate: [1400, 4, 25],
		sdata: {
			solar: [1400, 3, 25]
		},
		stime: 1626423383917,
		gdate: [2021, 7, 16],
		gdata: {
			gregorian: [2021, 6, 16]
		},
		gtime: 1626423383917
	},
	{
		sdate: [1400, 4, 26],
		sdata: {
			solar: [1400, 3, 26]
		},
		stime: 1626509783917,
		gdate: [2021, 7, 17],
		gdata: {
			gregorian: [2021, 6, 17]
		},
		gtime: 1626509783917
	},
	{
		sdate: [1400, 4, 27],
		sdata: {
			solar: [1400, 3, 27]
		},
		stime: 1626596183917,
		gdate: [2021, 7, 18],
		gdata: {
			gregorian: [2021, 6, 18]
		},
		gtime: 1626596183917
	},
	{
		sdate: [1400, 4, 28],
		sdata: {
			solar: [1400, 3, 28]
		},
		stime: 1626682583917,
		gdate: [2021, 7, 19],
		gdata: {
			gregorian: [2021, 6, 19]
		},
		gtime: 1626682583917
	},
	{
		sdate: [1400, 4, 29],
		sdata: {
			solar: [1400, 3, 29]
		},
		stime: 1626768983917,
		gdate: [2021, 7, 20],
		gdata: {
			gregorian: [2021, 6, 20]
		},
		gtime: 1626768983917
	},
	{
		sdate: [1400, 4, 30],
		sdata: {
			solar: [1400, 3, 30]
		},
		stime: 1626855383917,
		gdate: [2021, 7, 21],
		gdata: {
			gregorian: [2021, 6, 21]
		},
		gtime: 1626855383917
	},
	{
		sdate: [1400, 4, 31],
		sdata: {
			solar: [1400, 3, 31]
		},
		stime: 1626941783917,
		gdate: [2021, 7, 22],
		gdata: {
			gregorian: [2021, 6, 22]
		},
		gtime: 1626941783917
	},
	{
		sdate: [1400, 5, 1],
		sdata: {
			solar: [1400, 4, 1]
		},
		stime: 1627028183917,
		gdate: [2021, 7, 23],
		gdata: {
			gregorian: [2021, 6, 23]
		},
		gtime: 1627028183917
	},
	{
		sdate: [1400, 5, 2],
		sdata: {
			solar: [1400, 4, 2]
		},
		stime: 1627114583917,
		gdate: [2021, 7, 24],
		gdata: {
			gregorian: [2021, 6, 24]
		},
		gtime: 1627114583917
	},
	{
		sdate: [1400, 5, 3],
		sdata: {
			solar: [1400, 4, 3]
		},
		stime: 1627200983917,
		gdate: [2021, 7, 25],
		gdata: {
			gregorian: [2021, 6, 25]
		},
		gtime: 1627200983917
	},
	{
		sdate: [1400, 5, 4],
		sdata: {
			solar: [1400, 4, 4]
		},
		stime: 1627287383917,
		gdate: [2021, 7, 26],
		gdata: {
			gregorian: [2021, 6, 26]
		},
		gtime: 1627287383917
	},
	{
		sdate: [1400, 5, 5],
		sdata: {
			solar: [1400, 4, 5]
		},
		stime: 1627373783917,
		gdate: [2021, 7, 27],
		gdata: {
			gregorian: [2021, 6, 27]
		},
		gtime: 1627373783917
	},
	{
		sdate: [1400, 5, 6],
		sdata: {
			solar: [1400, 4, 6]
		},
		stime: 1627460183917,
		gdate: [2021, 7, 28],
		gdata: {
			gregorian: [2021, 6, 28]
		},
		gtime: 1627460183917
	},
	{
		sdate: [1400, 5, 7],
		sdata: {
			solar: [1400, 4, 7]
		},
		stime: 1627546583917,
		gdate: [2021, 7, 29],
		gdata: {
			gregorian: [2021, 6, 29]
		},
		gtime: 1627546583917
	},
	{
		sdate: [1400, 5, 8],
		sdata: {
			solar: [1400, 4, 8]
		},
		stime: 1627632983917,
		gdate: [2021, 7, 30],
		gdata: {
			gregorian: [2021, 6, 30]
		},
		gtime: 1627632983917
	},
	{
		sdate: [1400, 5, 9],
		sdata: {
			solar: [1400, 4, 9]
		},
		stime: 1627719383917,
		gdate: [2021, 7, 31],
		gdata: {
			gregorian: [2021, 6, 31]
		},
		gtime: 1627719383917
	},
	{
		sdate: [1400, 5, 10],
		sdata: {
			solar: [1400, 4, 10]
		},
		stime: 1627805783917,
		gdate: [2021, 8, 1],
		gdata: {
			gregorian: [2021, 7, 1]
		},
		gtime: 1627805783917
	},
	{
		sdate: [1400, 5, 11],
		sdata: {
			solar: [1400, 4, 11]
		},
		stime: 1627892183917,
		gdate: [2021, 8, 2],
		gdata: {
			gregorian: [2021, 7, 2]
		},
		gtime: 1627892183917
	},
	{
		sdate: [1400, 5, 12],
		sdata: {
			solar: [1400, 4, 12]
		},
		stime: 1627978583917,
		gdate: [2021, 8, 3],
		gdata: {
			gregorian: [2021, 7, 3]
		},
		gtime: 1627978583917
	},
	{
		sdate: [1400, 5, 13],
		sdata: {
			solar: [1400, 4, 13]
		},
		stime: 1628064983917,
		gdate: [2021, 8, 4],
		gdata: {
			gregorian: [2021, 7, 4]
		},
		gtime: 1628064983917
	},
	{
		sdate: [1400, 5, 14],
		sdata: {
			solar: [1400, 4, 14]
		},
		stime: 1628151383917,
		gdate: [2021, 8, 5],
		gdata: {
			gregorian: [2021, 7, 5]
		},
		gtime: 1628151383917
	},
	{
		sdate: [1400, 5, 15],
		sdata: {
			solar: [1400, 4, 15]
		},
		stime: 1628237783917,
		gdate: [2021, 8, 6],
		gdata: {
			gregorian: [2021, 7, 6]
		},
		gtime: 1628237783917
	},
	{
		sdate: [1400, 5, 16],
		sdata: {
			solar: [1400, 4, 16]
		},
		stime: 1628324183917,
		gdate: [2021, 8, 7],
		gdata: {
			gregorian: [2021, 7, 7]
		},
		gtime: 1628324183917
	},
	{
		sdate: [1400, 5, 17],
		sdata: {
			solar: [1400, 4, 17]
		},
		stime: 1628410583917,
		gdate: [2021, 8, 8],
		gdata: {
			gregorian: [2021, 7, 8]
		},
		gtime: 1628410583917
	},
	{
		sdate: [1400, 5, 18],
		sdata: {
			solar: [1400, 4, 18]
		},
		stime: 1628496983917,
		gdate: [2021, 8, 9],
		gdata: {
			gregorian: [2021, 7, 9]
		},
		gtime: 1628496983917
	},
	{
		sdate: [1400, 5, 19],
		sdata: {
			solar: [1400, 4, 19]
		},
		stime: 1628583383917,
		gdate: [2021, 8, 10],
		gdata: {
			gregorian: [2021, 7, 10]
		},
		gtime: 1628583383917
	},
	{
		sdate: [1400, 5, 20],
		sdata: {
			solar: [1400, 4, 20]
		},
		stime: 1628669783917,
		gdate: [2021, 8, 11],
		gdata: {
			gregorian: [2021, 7, 11]
		},
		gtime: 1628669783917
	},
	{
		sdate: [1400, 5, 21],
		sdata: {
			solar: [1400, 4, 21]
		},
		stime: 1628756183917,
		gdate: [2021, 8, 12],
		gdata: {
			gregorian: [2021, 7, 12]
		},
		gtime: 1628756183917
	},
	{
		sdate: [1400, 5, 22],
		sdata: {
			solar: [1400, 4, 22]
		},
		stime: 1628842583917,
		gdate: [2021, 8, 13],
		gdata: {
			gregorian: [2021, 7, 13]
		},
		gtime: 1628842583917
	},
	{
		sdate: [1400, 5, 23],
		sdata: {
			solar: [1400, 4, 23]
		},
		stime: 1628928983917,
		gdate: [2021, 8, 14],
		gdata: {
			gregorian: [2021, 7, 14]
		},
		gtime: 1628928983917
	},
	{
		sdate: [1400, 5, 24],
		sdata: {
			solar: [1400, 4, 24]
		},
		stime: 1629015383917,
		gdate: [2021, 8, 15],
		gdata: {
			gregorian: [2021, 7, 15]
		},
		gtime: 1629015383917
	},
	{
		sdate: [1400, 5, 25],
		sdata: {
			solar: [1400, 4, 25]
		},
		stime: 1629101783917,
		gdate: [2021, 8, 16],
		gdata: {
			gregorian: [2021, 7, 16]
		},
		gtime: 1629101783917
	},
	{
		sdate: [1400, 5, 26],
		sdata: {
			solar: [1400, 4, 26]
		},
		stime: 1629188183917,
		gdate: [2021, 8, 17],
		gdata: {
			gregorian: [2021, 7, 17]
		},
		gtime: 1629188183917
	},
	{
		sdate: [1400, 5, 27],
		sdata: {
			solar: [1400, 4, 27]
		},
		stime: 1629274583917,
		gdate: [2021, 8, 18],
		gdata: {
			gregorian: [2021, 7, 18]
		},
		gtime: 1629274583917
	},
	{
		sdate: [1400, 5, 28],
		sdata: {
			solar: [1400, 4, 28]
		},
		stime: 1629360983917,
		gdate: [2021, 8, 19],
		gdata: {
			gregorian: [2021, 7, 19]
		},
		gtime: 1629360983917
	},
	{
		sdate: [1400, 5, 29],
		sdata: {
			solar: [1400, 4, 29]
		},
		stime: 1629447383917,
		gdate: [2021, 8, 20],
		gdata: {
			gregorian: [2021, 7, 20]
		},
		gtime: 1629447383917
	},
	{
		sdate: [1400, 5, 30],
		sdata: {
			solar: [1400, 4, 30]
		},
		stime: 1629533783917,
		gdate: [2021, 8, 21],
		gdata: {
			gregorian: [2021, 7, 21]
		},
		gtime: 1629533783917
	},
	{
		sdate: [1400, 5, 31],
		sdata: {
			solar: [1400, 4, 31]
		},
		stime: 1629620183917,
		gdate: [2021, 8, 22],
		gdata: {
			gregorian: [2021, 7, 22]
		},
		gtime: 1629620183917
	},
	{
		sdate: [1400, 6, 1],
		sdata: {
			solar: [1400, 5, 1]
		},
		stime: 1629706583917,
		gdate: [2021, 8, 23],
		gdata: {
			gregorian: [2021, 7, 23]
		},
		gtime: 1629706583917
	},
	{
		sdate: [1400, 6, 2],
		sdata: {
			solar: [1400, 5, 2]
		},
		stime: 1629792983917,
		gdate: [2021, 8, 24],
		gdata: {
			gregorian: [2021, 7, 24]
		},
		gtime: 1629792983917
	},
	{
		sdate: [1400, 6, 3],
		sdata: {
			solar: [1400, 5, 3]
		},
		stime: 1629879383917,
		gdate: [2021, 8, 25],
		gdata: {
			gregorian: [2021, 7, 25]
		},
		gtime: 1629879383917
	},
	{
		sdate: [1400, 6, 4],
		sdata: {
			solar: [1400, 5, 4]
		},
		stime: 1629965783917,
		gdate: [2021, 8, 26],
		gdata: {
			gregorian: [2021, 7, 26]
		},
		gtime: 1629965783917
	},
	{
		sdate: [1400, 6, 5],
		sdata: {
			solar: [1400, 5, 5]
		},
		stime: 1630052183917,
		gdate: [2021, 8, 27],
		gdata: {
			gregorian: [2021, 7, 27]
		},
		gtime: 1630052183917
	},
	{
		sdate: [1400, 6, 6],
		sdata: {
			solar: [1400, 5, 6]
		},
		stime: 1630138583917,
		gdate: [2021, 8, 28],
		gdata: {
			gregorian: [2021, 7, 28]
		},
		gtime: 1630138583917
	},
	{
		sdate: [1400, 6, 7],
		sdata: {
			solar: [1400, 5, 7]
		},
		stime: 1630224983917,
		gdate: [2021, 8, 29],
		gdata: {
			gregorian: [2021, 7, 29]
		},
		gtime: 1630224983917
	},
	{
		sdate: [1400, 6, 8],
		sdata: {
			solar: [1400, 5, 8]
		},
		stime: 1630311383917,
		gdate: [2021, 8, 30],
		gdata: {
			gregorian: [2021, 7, 30]
		},
		gtime: 1630311383917
	},
	{
		sdate: [1400, 6, 9],
		sdata: {
			solar: [1400, 5, 9]
		},
		stime: 1630397783917,
		gdate: [2021, 8, 31],
		gdata: {
			gregorian: [2021, 7, 31]
		},
		gtime: 1630397783917
	},
	{
		sdate: [1400, 6, 10],
		sdata: {
			solar: [1400, 5, 10]
		},
		stime: 1630484183917,
		gdate: [2021, 9, 1],
		gdata: {
			gregorian: [2021, 8, 1]
		},
		gtime: 1630484183917
	},
	{
		sdate: [1400, 6, 11],
		sdata: {
			solar: [1400, 5, 11]
		},
		stime: 1630570583917,
		gdate: [2021, 9, 2],
		gdata: {
			gregorian: [2021, 8, 2]
		},
		gtime: 1630570583917
	},
	{
		sdate: [1400, 6, 12],
		sdata: {
			solar: [1400, 5, 12]
		},
		stime: 1630656983917,
		gdate: [2021, 9, 3],
		gdata: {
			gregorian: [2021, 8, 3]
		},
		gtime: 1630656983917
	},
	{
		sdate: [1400, 6, 13],
		sdata: {
			solar: [1400, 5, 13]
		},
		stime: 1630743383917,
		gdate: [2021, 9, 4],
		gdata: {
			gregorian: [2021, 8, 4]
		},
		gtime: 1630743383917
	},
	{
		sdate: [1400, 6, 14],
		sdata: {
			solar: [1400, 5, 14]
		},
		stime: 1630829783917,
		gdate: [2021, 9, 5],
		gdata: {
			gregorian: [2021, 8, 5]
		},
		gtime: 1630829783917
	},
	{
		sdate: [1400, 6, 15],
		sdata: {
			solar: [1400, 5, 15]
		},
		stime: 1630916183917,
		gdate: [2021, 9, 6],
		gdata: {
			gregorian: [2021, 8, 6]
		},
		gtime: 1630916183917
	},
	{
		sdate: [1400, 6, 16],
		sdata: {
			solar: [1400, 5, 16]
		},
		stime: 1631002583917,
		gdate: [2021, 9, 7],
		gdata: {
			gregorian: [2021, 8, 7]
		},
		gtime: 1631002583917
	},
	{
		sdate: [1400, 6, 17],
		sdata: {
			solar: [1400, 5, 17]
		},
		stime: 1631088983917,
		gdate: [2021, 9, 8],
		gdata: {
			gregorian: [2021, 8, 8]
		},
		gtime: 1631088983917
	},
	{
		sdate: [1400, 6, 18],
		sdata: {
			solar: [1400, 5, 18]
		},
		stime: 1631175383917,
		gdate: [2021, 9, 9],
		gdata: {
			gregorian: [2021, 8, 9]
		},
		gtime: 1631175383917
	},
	{
		sdate: [1400, 6, 19],
		sdata: {
			solar: [1400, 5, 19]
		},
		stime: 1631261783917,
		gdate: [2021, 9, 10],
		gdata: {
			gregorian: [2021, 8, 10]
		},
		gtime: 1631261783917
	},
	{
		sdate: [1400, 6, 20],
		sdata: {
			solar: [1400, 5, 20]
		},
		stime: 1631348183917,
		gdate: [2021, 9, 11],
		gdata: {
			gregorian: [2021, 8, 11]
		},
		gtime: 1631348183917
	},
	{
		sdate: [1400, 6, 21],
		sdata: {
			solar: [1400, 5, 21]
		},
		stime: 1631434583917,
		gdate: [2021, 9, 12],
		gdata: {
			gregorian: [2021, 8, 12]
		},
		gtime: 1631434583917
	},
	{
		sdate: [1400, 6, 22],
		sdata: {
			solar: [1400, 5, 22]
		},
		stime: 1631520983917,
		gdate: [2021, 9, 13],
		gdata: {
			gregorian: [2021, 8, 13]
		},
		gtime: 1631520983917
	},
	{
		sdate: [1400, 6, 23],
		sdata: {
			solar: [1400, 5, 23]
		},
		stime: 1631607383917,
		gdate: [2021, 9, 14],
		gdata: {
			gregorian: [2021, 8, 14]
		},
		gtime: 1631607383917
	},
	{
		sdate: [1400, 6, 24],
		sdata: {
			solar: [1400, 5, 24]
		},
		stime: 1631693783917,
		gdate: [2021, 9, 15],
		gdata: {
			gregorian: [2021, 8, 15]
		},
		gtime: 1631693783917
	},
	{
		sdate: [1400, 6, 25],
		sdata: {
			solar: [1400, 5, 25]
		},
		stime: 1631780183917,
		gdate: [2021, 9, 16],
		gdata: {
			gregorian: [2021, 8, 16]
		},
		gtime: 1631780183917
	},
	{
		sdate: [1400, 6, 26],
		sdata: {
			solar: [1400, 5, 26]
		},
		stime: 1631866583917,
		gdate: [2021, 9, 17],
		gdata: {
			gregorian: [2021, 8, 17]
		},
		gtime: 1631866583917
	},
	{
		sdate: [1400, 6, 27],
		sdata: {
			solar: [1400, 5, 27]
		},
		stime: 1631952983917,
		gdate: [2021, 9, 18],
		gdata: {
			gregorian: [2021, 8, 18]
		},
		gtime: 1631952983917
	},
	{
		sdate: [1400, 6, 28],
		sdata: {
			solar: [1400, 5, 28]
		},
		stime: 1632039383917,
		gdate: [2021, 9, 19],
		gdata: {
			gregorian: [2021, 8, 19]
		},
		gtime: 1632039383917
	},
	{
		sdate: [1400, 6, 29],
		sdata: {
			solar: [1400, 5, 29]
		},
		stime: 1632125783917,
		gdate: [2021, 9, 20],
		gdata: {
			gregorian: [2021, 8, 20]
		},
		gtime: 1632125783917
	},
	{
		sdate: [1400, 6, 30],
		sdata: {
			solar: [1400, 5, 30]
		},
		stime: 1632212183917,
		gdate: [2021, 9, 21],
		gdata: {
			gregorian: [2021, 8, 21]
		},
		gtime: 1632212183917
	},
	{
		sdate: [1400, 6, 31],
		sdata: {
			solar: [1400, 5, 31]
		},
		stime: 1632302183917,
		gdate: [2021, 9, 22],
		gdata: {
			gregorian: [2021, 8, 22]
		},
		gtime: 1632302183917
	},
	{
		sdate: [1400, 7, 1],
		sdata: {
			solar: [1400, 6, 1]
		},
		stime: 1632388583917,
		gdate: [2021, 9, 23],
		gdata: {
			gregorian: [2021, 8, 23]
		},
		gtime: 1632388583917
	},
	{
		sdate: [1400, 7, 2],
		sdata: {
			solar: [1400, 6, 2]
		},
		stime: 1632474983917,
		gdate: [2021, 9, 24],
		gdata: {
			gregorian: [2021, 8, 24]
		},
		gtime: 1632474983917
	},
	{
		sdate: [1400, 7, 3],
		sdata: {
			solar: [1400, 6, 3]
		},
		stime: 1632561383917,
		gdate: [2021, 9, 25],
		gdata: {
			gregorian: [2021, 8, 25]
		},
		gtime: 1632561383917
	},
	{
		sdate: [1400, 7, 4],
		sdata: {
			solar: [1400, 6, 4]
		},
		stime: 1632647783917,
		gdate: [2021, 9, 26],
		gdata: {
			gregorian: [2021, 8, 26]
		},
		gtime: 1632647783917
	},
	{
		sdate: [1400, 7, 5],
		sdata: {
			solar: [1400, 6, 5]
		},
		stime: 1632734183917,
		gdate: [2021, 9, 27],
		gdata: {
			gregorian: [2021, 8, 27]
		},
		gtime: 1632734183917
	},
	{
		sdate: [1400, 7, 6],
		sdata: {
			solar: [1400, 6, 6]
		},
		stime: 1632820583917,
		gdate: [2021, 9, 28],
		gdata: {
			gregorian: [2021, 8, 28]
		},
		gtime: 1632820583917
	},
	{
		sdate: [1400, 7, 7],
		sdata: {
			solar: [1400, 6, 7]
		},
		stime: 1632906983917,
		gdate: [2021, 9, 29],
		gdata: {
			gregorian: [2021, 8, 29]
		},
		gtime: 1632906983917
	},
	{
		sdate: [1400, 7, 8],
		sdata: {
			solar: [1400, 6, 8]
		},
		stime: 1632993383917,
		gdate: [2021, 9, 30],
		gdata: {
			gregorian: [2021, 8, 30]
		},
		gtime: 1632993383917
	},
	{
		sdate: [1400, 7, 9],
		sdata: {
			solar: [1400, 6, 9]
		},
		stime: 1633079783917,
		gdate: [2021, 10, 1],
		gdata: {
			gregorian: [2021, 9, 1]
		},
		gtime: 1633079783917
	},
	{
		sdate: [1400, 7, 10],
		sdata: {
			solar: [1400, 6, 10]
		},
		stime: 1633166183917,
		gdate: [2021, 10, 2],
		gdata: {
			gregorian: [2021, 9, 2]
		},
		gtime: 1633166183917
	},
	{
		sdate: [1400, 7, 11],
		sdata: {
			solar: [1400, 6, 11]
		},
		stime: 1633252583917,
		gdate: [2021, 10, 3],
		gdata: {
			gregorian: [2021, 9, 3]
		},
		gtime: 1633252583917
	},
	{
		sdate: [1400, 7, 12],
		sdata: {
			solar: [1400, 6, 12]
		},
		stime: 1633338983917,
		gdate: [2021, 10, 4],
		gdata: {
			gregorian: [2021, 9, 4]
		},
		gtime: 1633338983917
	},
	{
		sdate: [1400, 7, 13],
		sdata: {
			solar: [1400, 6, 13]
		},
		stime: 1633425383917,
		gdate: [2021, 10, 5],
		gdata: {
			gregorian: [2021, 9, 5]
		},
		gtime: 1633425383917
	},
	{
		sdate: [1400, 7, 14],
		sdata: {
			solar: [1400, 6, 14]
		},
		stime: 1633511783917,
		gdate: [2021, 10, 6],
		gdata: {
			gregorian: [2021, 9, 6]
		},
		gtime: 1633511783917
	},
	{
		sdate: [1400, 7, 15],
		sdata: {
			solar: [1400, 6, 15]
		},
		stime: 1633598183917,
		gdate: [2021, 10, 7],
		gdata: {
			gregorian: [2021, 9, 7]
		},
		gtime: 1633598183917
	},
	{
		sdate: [1400, 7, 16],
		sdata: {
			solar: [1400, 6, 16]
		},
		stime: 1633684583917,
		gdate: [2021, 10, 8],
		gdata: {
			gregorian: [2021, 9, 8]
		},
		gtime: 1633684583917
	},
	{
		sdate: [1400, 7, 17],
		sdata: {
			solar: [1400, 6, 17]
		},
		stime: 1633770983917,
		gdate: [2021, 10, 9],
		gdata: {
			gregorian: [2021, 9, 9]
		},
		gtime: 1633770983917
	},
	{
		sdate: [1400, 7, 18],
		sdata: {
			solar: [1400, 6, 18]
		},
		stime: 1633857383917,
		gdate: [2021, 10, 10],
		gdata: {
			gregorian: [2021, 9, 10]
		},
		gtime: 1633857383917
	},
	{
		sdate: [1400, 7, 19],
		sdata: {
			solar: [1400, 6, 19]
		},
		stime: 1633943783917,
		gdate: [2021, 10, 11],
		gdata: {
			gregorian: [2021, 9, 11]
		},
		gtime: 1633943783917
	},
	{
		sdate: [1400, 7, 20],
		sdata: {
			solar: [1400, 6, 20]
		},
		stime: 1634030183917,
		gdate: [2021, 10, 12],
		gdata: {
			gregorian: [2021, 9, 12]
		},
		gtime: 1634030183917
	},
	{
		sdate: [1400, 7, 21],
		sdata: {
			solar: [1400, 6, 21]
		},
		stime: 1634116583917,
		gdate: [2021, 10, 13],
		gdata: {
			gregorian: [2021, 9, 13]
		},
		gtime: 1634116583917
	},
	{
		sdate: [1400, 7, 22],
		sdata: {
			solar: [1400, 6, 22]
		},
		stime: 1634202983917,
		gdate: [2021, 10, 14],
		gdata: {
			gregorian: [2021, 9, 14]
		},
		gtime: 1634202983917
	},
	{
		sdate: [1400, 7, 23],
		sdata: {
			solar: [1400, 6, 23]
		},
		stime: 1634289383917,
		gdate: [2021, 10, 15],
		gdata: {
			gregorian: [2021, 9, 15]
		},
		gtime: 1634289383917
	},
	{
		sdate: [1400, 7, 24],
		sdata: {
			solar: [1400, 6, 24]
		},
		stime: 1634375783917,
		gdate: [2021, 10, 16],
		gdata: {
			gregorian: [2021, 9, 16]
		},
		gtime: 1634375783917
	},
	{
		sdate: [1400, 7, 25],
		sdata: {
			solar: [1400, 6, 25]
		},
		stime: 1634462183917,
		gdate: [2021, 10, 17],
		gdata: {
			gregorian: [2021, 9, 17]
		},
		gtime: 1634462183917
	},
	{
		sdate: [1400, 7, 26],
		sdata: {
			solar: [1400, 6, 26]
		},
		stime: 1634548583917,
		gdate: [2021, 10, 18],
		gdata: {
			gregorian: [2021, 9, 18]
		},
		gtime: 1634548583917
	},
	{
		sdate: [1400, 7, 27],
		sdata: {
			solar: [1400, 6, 27]
		},
		stime: 1634634983917,
		gdate: [2021, 10, 19],
		gdata: {
			gregorian: [2021, 9, 19]
		},
		gtime: 1634634983917
	},
	{
		sdate: [1400, 7, 28],
		sdata: {
			solar: [1400, 6, 28]
		},
		stime: 1634721383917,
		gdate: [2021, 10, 20],
		gdata: {
			gregorian: [2021, 9, 20]
		},
		gtime: 1634721383917
	},
	{
		sdate: [1400, 7, 29],
		sdata: {
			solar: [1400, 6, 29]
		},
		stime: 1634807783917,
		gdate: [2021, 10, 21],
		gdata: {
			gregorian: [2021, 9, 21]
		},
		gtime: 1634807783917
	},
	{
		sdate: [1400, 7, 30],
		sdata: {
			solar: [1400, 6, 30]
		},
		stime: 1634894183917,
		gdate: [2021, 10, 22],
		gdata: {
			gregorian: [2021, 9, 22]
		},
		gtime: 1634894183917
	},
	{
		sdate: [1400, 8, 1],
		sdata: {
			solar: [1400, 7, 1]
		},
		stime: 1634980583917,
		gdate: [2021, 10, 23],
		gdata: {
			gregorian: [2021, 9, 23]
		},
		gtime: 1634980583917
	},
	{
		sdate: [1400, 8, 2],
		sdata: {
			solar: [1400, 7, 2]
		},
		stime: 1635066983917,
		gdate: [2021, 10, 24],
		gdata: {
			gregorian: [2021, 9, 24]
		},
		gtime: 1635066983917
	},
	{
		sdate: [1400, 8, 3],
		sdata: {
			solar: [1400, 7, 3]
		},
		stime: 1635153383917,
		gdate: [2021, 10, 25],
		gdata: {
			gregorian: [2021, 9, 25]
		},
		gtime: 1635153383917
	},
	{
		sdate: [1400, 8, 4],
		sdata: {
			solar: [1400, 7, 4]
		},
		stime: 1635239783917,
		gdate: [2021, 10, 26],
		gdata: {
			gregorian: [2021, 9, 26]
		},
		gtime: 1635239783917
	},
	{
		sdate: [1400, 8, 5],
		sdata: {
			solar: [1400, 7, 5]
		},
		stime: 1635326183917,
		gdate: [2021, 10, 27],
		gdata: {
			gregorian: [2021, 9, 27]
		},
		gtime: 1635326183917
	},
	{
		sdate: [1400, 8, 6],
		sdata: {
			solar: [1400, 7, 6]
		},
		stime: 1635412583917,
		gdate: [2021, 10, 28],
		gdata: {
			gregorian: [2021, 9, 28]
		},
		gtime: 1635412583917
	},
	{
		sdate: [1400, 8, 7],
		sdata: {
			solar: [1400, 7, 7]
		},
		stime: 1635498983917,
		gdate: [2021, 10, 29],
		gdata: {
			gregorian: [2021, 9, 29]
		},
		gtime: 1635498983917
	},
	{
		sdate: [1400, 8, 8],
		sdata: {
			solar: [1400, 7, 8]
		},
		stime: 1635585383917,
		gdate: [2021, 10, 30],
		gdata: {
			gregorian: [2021, 9, 30]
		},
		gtime: 1635585383917
	},
	{
		sdate: [1400, 8, 9],
		sdata: {
			solar: [1400, 7, 9]
		},
		stime: 1635671783917,
		gdate: [2021, 10, 31],
		gdata: {
			gregorian: [2021, 9, 31]
		},
		gtime: 1635671783917
	},
	{
		sdate: [1400, 8, 10],
		sdata: {
			solar: [1400, 7, 10]
		},
		stime: 1635758183917,
		gdate: [2021, 11, 1],
		gdata: {
			gregorian: [2021, 10, 1]
		},
		gtime: 1635758183917
	},
	{
		sdate: [1400, 8, 11],
		sdata: {
			solar: [1400, 7, 11]
		},
		stime: 1635844583917,
		gdate: [2021, 11, 2],
		gdata: {
			gregorian: [2021, 10, 2]
		},
		gtime: 1635844583917
	},
	{
		sdate: [1400, 8, 12],
		sdata: {
			solar: [1400, 7, 12]
		},
		stime: 1635930983917,
		gdate: [2021, 11, 3],
		gdata: {
			gregorian: [2021, 10, 3]
		},
		gtime: 1635930983917
	},
	{
		sdate: [1400, 8, 13],
		sdata: {
			solar: [1400, 7, 13]
		},
		stime: 1636017383917,
		gdate: [2021, 11, 4],
		gdata: {
			gregorian: [2021, 10, 4]
		},
		gtime: 1636017383917
	},
	{
		sdate: [1400, 8, 14],
		sdata: {
			solar: [1400, 7, 14]
		},
		stime: 1636103783917,
		gdate: [2021, 11, 5],
		gdata: {
			gregorian: [2021, 10, 5]
		},
		gtime: 1636103783917
	},
	{
		sdate: [1400, 8, 15],
		sdata: {
			solar: [1400, 7, 15]
		},
		stime: 1636190183917,
		gdate: [2021, 11, 6],
		gdata: {
			gregorian: [2021, 10, 6]
		},
		gtime: 1636190183917
	},
	{
		sdate: [1400, 8, 16],
		sdata: {
			solar: [1400, 7, 16]
		},
		stime: 1636276583917,
		gdate: [2021, 11, 7],
		gdata: {
			gregorian: [2021, 10, 7]
		},
		gtime: 1636276583917
	},
	{
		sdate: [1400, 8, 17],
		sdata: {
			solar: [1400, 7, 17]
		},
		stime: 1636362983917,
		gdate: [2021, 11, 8],
		gdata: {
			gregorian: [2021, 10, 8]
		},
		gtime: 1636362983917
	},
	{
		sdate: [1400, 8, 18],
		sdata: {
			solar: [1400, 7, 18]
		},
		stime: 1636449383917,
		gdate: [2021, 11, 9],
		gdata: {
			gregorian: [2021, 10, 9]
		},
		gtime: 1636449383917
	},
	{
		sdate: [1400, 8, 19],
		sdata: {
			solar: [1400, 7, 19]
		},
		stime: 1636535783917,
		gdate: [2021, 11, 10],
		gdata: {
			gregorian: [2021, 10, 10]
		},
		gtime: 1636535783917
	},
	{
		sdate: [1400, 8, 20],
		sdata: {
			solar: [1400, 7, 20]
		},
		stime: 1636622183917,
		gdate: [2021, 11, 11],
		gdata: {
			gregorian: [2021, 10, 11]
		},
		gtime: 1636622183917
	},
	{
		sdate: [1400, 8, 21],
		sdata: {
			solar: [1400, 7, 21]
		},
		stime: 1636708583917,
		gdate: [2021, 11, 12],
		gdata: {
			gregorian: [2021, 10, 12]
		},
		gtime: 1636708583917
	},
	{
		sdate: [1400, 8, 22],
		sdata: {
			solar: [1400, 7, 22]
		},
		stime: 1636794983917,
		gdate: [2021, 11, 13],
		gdata: {
			gregorian: [2021, 10, 13]
		},
		gtime: 1636794983917
	},
	{
		sdate: [1400, 8, 23],
		sdata: {
			solar: [1400, 7, 23]
		},
		stime: 1636881383917,
		gdate: [2021, 11, 14],
		gdata: {
			gregorian: [2021, 10, 14]
		},
		gtime: 1636881383917
	},
	{
		sdate: [1400, 8, 24],
		sdata: {
			solar: [1400, 7, 24]
		},
		stime: 1636967783917,
		gdate: [2021, 11, 15],
		gdata: {
			gregorian: [2021, 10, 15]
		},
		gtime: 1636967783917
	},
	{
		sdate: [1400, 8, 25],
		sdata: {
			solar: [1400, 7, 25]
		},
		stime: 1637054183917,
		gdate: [2021, 11, 16],
		gdata: {
			gregorian: [2021, 10, 16]
		},
		gtime: 1637054183917
	},
	{
		sdate: [1400, 8, 26],
		sdata: {
			solar: [1400, 7, 26]
		},
		stime: 1637140583917,
		gdate: [2021, 11, 17],
		gdata: {
			gregorian: [2021, 10, 17]
		},
		gtime: 1637140583917
	},
	{
		sdate: [1400, 8, 27],
		sdata: {
			solar: [1400, 7, 27]
		},
		stime: 1637226983917,
		gdate: [2021, 11, 18],
		gdata: {
			gregorian: [2021, 10, 18]
		},
		gtime: 1637226983917
	},
	{
		sdate: [1400, 8, 28],
		sdata: {
			solar: [1400, 7, 28]
		},
		stime: 1637313383917,
		gdate: [2021, 11, 19],
		gdata: {
			gregorian: [2021, 10, 19]
		},
		gtime: 1637313383917
	},
	{
		sdate: [1400, 8, 29],
		sdata: {
			solar: [1400, 7, 29]
		},
		stime: 1637399783917,
		gdate: [2021, 11, 20],
		gdata: {
			gregorian: [2021, 10, 20]
		},
		gtime: 1637399783917
	},
	{
		sdate: [1400, 8, 30],
		sdata: {
			solar: [1400, 7, 30]
		},
		stime: 1637486183917,
		gdate: [2021, 11, 21],
		gdata: {
			gregorian: [2021, 10, 21]
		},
		gtime: 1637486183917
	},
	{
		sdate: [1400, 9, 1],
		sdata: {
			solar: [1400, 8, 1]
		},
		stime: 1637572583917,
		gdate: [2021, 11, 22],
		gdata: {
			gregorian: [2021, 10, 22]
		},
		gtime: 1637572583917
	},
	{
		sdate: [1400, 9, 2],
		sdata: {
			solar: [1400, 8, 2]
		},
		stime: 1637658983917,
		gdate: [2021, 11, 23],
		gdata: {
			gregorian: [2021, 10, 23]
		},
		gtime: 1637658983917
	},
	{
		sdate: [1400, 9, 3],
		sdata: {
			solar: [1400, 8, 3]
		},
		stime: 1637745383917,
		gdate: [2021, 11, 24],
		gdata: {
			gregorian: [2021, 10, 24]
		},
		gtime: 1637745383917
	},
	{
		sdate: [1400, 9, 4],
		sdata: {
			solar: [1400, 8, 4]
		},
		stime: 1637831783917,
		gdate: [2021, 11, 25],
		gdata: {
			gregorian: [2021, 10, 25]
		},
		gtime: 1637831783917
	},
	{
		sdate: [1400, 9, 5],
		sdata: {
			solar: [1400, 8, 5]
		},
		stime: 1637918183917,
		gdate: [2021, 11, 26],
		gdata: {
			gregorian: [2021, 10, 26]
		},
		gtime: 1637918183917
	},
	{
		sdate: [1400, 9, 6],
		sdata: {
			solar: [1400, 8, 6]
		},
		stime: 1638004583917,
		gdate: [2021, 11, 27],
		gdata: {
			gregorian: [2021, 10, 27]
		},
		gtime: 1638004583917
	},
	{
		sdate: [1400, 9, 7],
		sdata: {
			solar: [1400, 8, 7]
		},
		stime: 1638090983917,
		gdate: [2021, 11, 28],
		gdata: {
			gregorian: [2021, 10, 28]
		},
		gtime: 1638090983917
	},
	{
		sdate: [1400, 9, 8],
		sdata: {
			solar: [1400, 8, 8]
		},
		stime: 1638177383917,
		gdate: [2021, 11, 29],
		gdata: {
			gregorian: [2021, 10, 29]
		},
		gtime: 1638177383917
	},
	{
		sdate: [1400, 9, 9],
		sdata: {
			solar: [1400, 8, 9]
		},
		stime: 1638263783917,
		gdate: [2021, 11, 30],
		gdata: {
			gregorian: [2021, 10, 30]
		},
		gtime: 1638263783917
	},
	{
		sdate: [1400, 9, 10],
		sdata: {
			solar: [1400, 8, 10]
		},
		stime: 1638350183917,
		gdate: [2021, 12, 1],
		gdata: {
			gregorian: [2021, 11, 1]
		},
		gtime: 1638350183917
	},
	{
		sdate: [1400, 9, 11],
		sdata: {
			solar: [1400, 8, 11]
		},
		stime: 1638436583917,
		gdate: [2021, 12, 2],
		gdata: {
			gregorian: [2021, 11, 2]
		},
		gtime: 1638436583917
	},
	{
		sdate: [1400, 9, 12],
		sdata: {
			solar: [1400, 8, 12]
		},
		stime: 1638522983917,
		gdate: [2021, 12, 3],
		gdata: {
			gregorian: [2021, 11, 3]
		},
		gtime: 1638522983917
	},
	{
		sdate: [1400, 9, 13],
		sdata: {
			solar: [1400, 8, 13]
		},
		stime: 1638609383917,
		gdate: [2021, 12, 4],
		gdata: {
			gregorian: [2021, 11, 4]
		},
		gtime: 1638609383917
	},
	{
		sdate: [1400, 9, 14],
		sdata: {
			solar: [1400, 8, 14]
		},
		stime: 1638695783917,
		gdate: [2021, 12, 5],
		gdata: {
			gregorian: [2021, 11, 5]
		},
		gtime: 1638695783917
	},
	{
		sdate: [1400, 9, 15],
		sdata: {
			solar: [1400, 8, 15]
		},
		stime: 1638782183917,
		gdate: [2021, 12, 6],
		gdata: {
			gregorian: [2021, 11, 6]
		},
		gtime: 1638782183917
	},
	{
		sdate: [1400, 9, 16],
		sdata: {
			solar: [1400, 8, 16]
		},
		stime: 1638868583917,
		gdate: [2021, 12, 7],
		gdata: {
			gregorian: [2021, 11, 7]
		},
		gtime: 1638868583917
	},
	{
		sdate: [1400, 9, 17],
		sdata: {
			solar: [1400, 8, 17]
		},
		stime: 1638954983917,
		gdate: [2021, 12, 8],
		gdata: {
			gregorian: [2021, 11, 8]
		},
		gtime: 1638954983917
	},
	{
		sdate: [1400, 9, 18],
		sdata: {
			solar: [1400, 8, 18]
		},
		stime: 1639041383917,
		gdate: [2021, 12, 9],
		gdata: {
			gregorian: [2021, 11, 9]
		},
		gtime: 1639041383917
	},
	{
		sdate: [1400, 9, 19],
		sdata: {
			solar: [1400, 8, 19]
		},
		stime: 1639127783917,
		gdate: [2021, 12, 10],
		gdata: {
			gregorian: [2021, 11, 10]
		},
		gtime: 1639127783917
	},
	{
		sdate: [1400, 9, 20],
		sdata: {
			solar: [1400, 8, 20]
		},
		stime: 1639214183917,
		gdate: [2021, 12, 11],
		gdata: {
			gregorian: [2021, 11, 11]
		},
		gtime: 1639214183917
	},
	{
		sdate: [1400, 9, 21],
		sdata: {
			solar: [1400, 8, 21]
		},
		stime: 1639300583917,
		gdate: [2021, 12, 12],
		gdata: {
			gregorian: [2021, 11, 12]
		},
		gtime: 1639300583917
	},
	{
		sdate: [1400, 9, 22],
		sdata: {
			solar: [1400, 8, 22]
		},
		stime: 1639386983917,
		gdate: [2021, 12, 13],
		gdata: {
			gregorian: [2021, 11, 13]
		},
		gtime: 1639386983917
	},
	{
		sdate: [1400, 9, 23],
		sdata: {
			solar: [1400, 8, 23]
		},
		stime: 1639473383917,
		gdate: [2021, 12, 14],
		gdata: {
			gregorian: [2021, 11, 14]
		},
		gtime: 1639473383917
	},
	{
		sdate: [1400, 9, 24],
		sdata: {
			solar: [1400, 8, 24]
		},
		stime: 1639559783917,
		gdate: [2021, 12, 15],
		gdata: {
			gregorian: [2021, 11, 15]
		},
		gtime: 1639559783917
	},
	{
		sdate: [1400, 9, 25],
		sdata: {
			solar: [1400, 8, 25]
		},
		stime: 1639646183917,
		gdate: [2021, 12, 16],
		gdata: {
			gregorian: [2021, 11, 16]
		},
		gtime: 1639646183917
	},
	{
		sdate: [1400, 9, 26],
		sdata: {
			solar: [1400, 8, 26]
		},
		stime: 1639732583917,
		gdate: [2021, 12, 17],
		gdata: {
			gregorian: [2021, 11, 17]
		},
		gtime: 1639732583917
	},
	{
		sdate: [1400, 9, 27],
		sdata: {
			solar: [1400, 8, 27]
		},
		stime: 1639818983917,
		gdate: [2021, 12, 18],
		gdata: {
			gregorian: [2021, 11, 18]
		},
		gtime: 1639818983917
	},
	{
		sdate: [1400, 9, 28],
		sdata: {
			solar: [1400, 8, 28]
		},
		stime: 1639905383917,
		gdate: [2021, 12, 19],
		gdata: {
			gregorian: [2021, 11, 19]
		},
		gtime: 1639905383917
	},
	{
		sdate: [1400, 9, 29],
		sdata: {
			solar: [1400, 8, 29]
		},
		stime: 1639991783917,
		gdate: [2021, 12, 20],
		gdata: {
			gregorian: [2021, 11, 20]
		},
		gtime: 1639991783917
	},
	{
		sdate: [1400, 9, 30],
		sdata: {
			solar: [1400, 8, 30]
		},
		stime: 1640078183917,
		gdate: [2021, 12, 21],
		gdata: {
			gregorian: [2021, 11, 21]
		},
		gtime: 1640078183917
	},
	{
		sdate: [1400, 10, 1],
		sdata: {
			solar: [1400, 9, 1]
		},
		stime: 1640164583917,
		gdate: [2021, 12, 22],
		gdata: {
			gregorian: [2021, 11, 22]
		},
		gtime: 1640164583917
	},
	{
		sdate: [1400, 10, 2],
		sdata: {
			solar: [1400, 9, 2]
		},
		stime: 1640250983917,
		gdate: [2021, 12, 23],
		gdata: {
			gregorian: [2021, 11, 23]
		},
		gtime: 1640250983917
	},
	{
		sdate: [1400, 10, 3],
		sdata: {
			solar: [1400, 9, 3]
		},
		stime: 1640337383917,
		gdate: [2021, 12, 24],
		gdata: {
			gregorian: [2021, 11, 24]
		},
		gtime: 1640337383917
	},
	{
		sdate: [1400, 10, 4],
		sdata: {
			solar: [1400, 9, 4]
		},
		stime: 1640423783917,
		gdate: [2021, 12, 25],
		gdata: {
			gregorian: [2021, 11, 25]
		},
		gtime: 1640423783917
	},
	{
		sdate: [1400, 10, 5],
		sdata: {
			solar: [1400, 9, 5]
		},
		stime: 1640510183917,
		gdate: [2021, 12, 26],
		gdata: {
			gregorian: [2021, 11, 26]
		},
		gtime: 1640510183917
	},
	{
		sdate: [1400, 10, 6],
		sdata: {
			solar: [1400, 9, 6]
		},
		stime: 1640596583917,
		gdate: [2021, 12, 27],
		gdata: {
			gregorian: [2021, 11, 27]
		},
		gtime: 1640596583917
	},
	{
		sdate: [1400, 10, 7],
		sdata: {
			solar: [1400, 9, 7]
		},
		stime: 1640682983917,
		gdate: [2021, 12, 28],
		gdata: {
			gregorian: [2021, 11, 28]
		},
		gtime: 1640682983917
	},
	{
		sdate: [1400, 10, 8],
		sdata: {
			solar: [1400, 9, 8]
		},
		stime: 1640769383917,
		gdate: [2021, 12, 29],
		gdata: {
			gregorian: [2021, 11, 29]
		},
		gtime: 1640769383917
	},
	{
		sdate: [1400, 10, 9],
		sdata: {
			solar: [1400, 9, 9]
		},
		stime: 1640855783917,
		gdate: [2021, 12, 30],
		gdata: {
			gregorian: [2021, 11, 30]
		},
		gtime: 1640855783917
	},
	{
		sdate: [1400, 10, 10],
		sdata: {
			solar: [1400, 9, 10]
		},
		stime: 1640942183917,
		gdate: [2021, 12, 31],
		gdata: {
			gregorian: [2021, 11, 31]
		},
		gtime: 1640942183917
	},
	{
		sdate: [1400, 10, 11],
		sdata: {
			solar: [1400, 9, 11]
		},
		stime: 1641028583917,
		gdate: [2022, 1, 1],
		gdata: {
			gregorian: [2022, 0, 1]
		},
		gtime: 1641028583917
	},
	{
		sdate: [1400, 10, 12],
		sdata: {
			solar: [1400, 9, 12]
		},
		stime: 1641114983917,
		gdate: [2022, 1, 2],
		gdata: {
			gregorian: [2022, 0, 2]
		},
		gtime: 1641114983917
	},
	{
		sdate: [1400, 10, 13],
		sdata: {
			solar: [1400, 9, 13]
		},
		stime: 1641201383917,
		gdate: [2022, 1, 3],
		gdata: {
			gregorian: [2022, 0, 3]
		},
		gtime: 1641201383917
	},
	{
		sdate: [1400, 10, 14],
		sdata: {
			solar: [1400, 9, 14]
		},
		stime: 1641287783917,
		gdate: [2022, 1, 4],
		gdata: {
			gregorian: [2022, 0, 4]
		},
		gtime: 1641287783917
	},
	{
		sdate: [1400, 10, 15],
		sdata: {
			solar: [1400, 9, 15]
		},
		stime: 1641374183917,
		gdate: [2022, 1, 5],
		gdata: {
			gregorian: [2022, 0, 5]
		},
		gtime: 1641374183917
	},
	{
		sdate: [1400, 10, 16],
		sdata: {
			solar: [1400, 9, 16]
		},
		stime: 1641460583917,
		gdate: [2022, 1, 6],
		gdata: {
			gregorian: [2022, 0, 6]
		},
		gtime: 1641460583917
	},
	{
		sdate: [1400, 10, 17],
		sdata: {
			solar: [1400, 9, 17]
		},
		stime: 1641546983917,
		gdate: [2022, 1, 7],
		gdata: {
			gregorian: [2022, 0, 7]
		},
		gtime: 1641546983917
	},
	{
		sdate: [1400, 10, 18],
		sdata: {
			solar: [1400, 9, 18]
		},
		stime: 1641633383917,
		gdate: [2022, 1, 8],
		gdata: {
			gregorian: [2022, 0, 8]
		},
		gtime: 1641633383917
	},
	{
		sdate: [1400, 10, 19],
		sdata: {
			solar: [1400, 9, 19]
		},
		stime: 1641719783917,
		gdate: [2022, 1, 9],
		gdata: {
			gregorian: [2022, 0, 9]
		},
		gtime: 1641719783917
	},
	{
		sdate: [1400, 10, 20],
		sdata: {
			solar: [1400, 9, 20]
		},
		stime: 1641806183917,
		gdate: [2022, 1, 10],
		gdata: {
			gregorian: [2022, 0, 10]
		},
		gtime: 1641806183917
	},
	{
		sdate: [1400, 10, 21],
		sdata: {
			solar: [1400, 9, 21]
		},
		stime: 1641892583917,
		gdate: [2022, 1, 11],
		gdata: {
			gregorian: [2022, 0, 11]
		},
		gtime: 1641892583917
	},
	{
		sdate: [1400, 10, 22],
		sdata: {
			solar: [1400, 9, 22]
		},
		stime: 1641978983917,
		gdate: [2022, 1, 12],
		gdata: {
			gregorian: [2022, 0, 12]
		},
		gtime: 1641978983917
	},
	{
		sdate: [1400, 10, 23],
		sdata: {
			solar: [1400, 9, 23]
		},
		stime: 1642065383917,
		gdate: [2022, 1, 13],
		gdata: {
			gregorian: [2022, 0, 13]
		},
		gtime: 1642065383917
	},
	{
		sdate: [1400, 10, 24],
		sdata: {
			solar: [1400, 9, 24]
		},
		stime: 1642151783917,
		gdate: [2022, 1, 14],
		gdata: {
			gregorian: [2022, 0, 14]
		},
		gtime: 1642151783917
	},
	{
		sdate: [1400, 10, 25],
		sdata: {
			solar: [1400, 9, 25]
		},
		stime: 1642238183917,
		gdate: [2022, 1, 15],
		gdata: {
			gregorian: [2022, 0, 15]
		},
		gtime: 1642238183917
	},
	{
		sdate: [1400, 10, 26],
		sdata: {
			solar: [1400, 9, 26]
		},
		stime: 1642324583917,
		gdate: [2022, 1, 16],
		gdata: {
			gregorian: [2022, 0, 16]
		},
		gtime: 1642324583917
	},
	{
		sdate: [1400, 10, 27],
		sdata: {
			solar: [1400, 9, 27]
		},
		stime: 1642410983917,
		gdate: [2022, 1, 17],
		gdata: {
			gregorian: [2022, 0, 17]
		},
		gtime: 1642410983917
	},
	{
		sdate: [1400, 10, 28],
		sdata: {
			solar: [1400, 9, 28]
		},
		stime: 1642497383917,
		gdate: [2022, 1, 18],
		gdata: {
			gregorian: [2022, 0, 18]
		},
		gtime: 1642497383917
	},
	{
		sdate: [1400, 10, 29],
		sdata: {
			solar: [1400, 9, 29]
		},
		stime: 1642583783917,
		gdate: [2022, 1, 19],
		gdata: {
			gregorian: [2022, 0, 19]
		},
		gtime: 1642583783917
	},
	{
		sdate: [1400, 10, 30],
		sdata: {
			solar: [1400, 9, 30]
		},
		stime: 1642670183917,
		gdate: [2022, 1, 20],
		gdata: {
			gregorian: [2022, 0, 20]
		},
		gtime: 1642670183917
	},
	{
		sdate: [1400, 11, 1],
		sdata: {
			solar: [1400, 10, 1]
		},
		stime: 1642756583917,
		gdate: [2022, 1, 21],
		gdata: {
			gregorian: [2022, 0, 21]
		},
		gtime: 1642756583917
	},
	{
		sdate: [1400, 11, 2],
		sdata: {
			solar: [1400, 10, 2]
		},
		stime: 1642842983917,
		gdate: [2022, 1, 22],
		gdata: {
			gregorian: [2022, 0, 22]
		},
		gtime: 1642842983917
	},
	{
		sdate: [1400, 11, 3],
		sdata: {
			solar: [1400, 10, 3]
		},
		stime: 1642929383917,
		gdate: [2022, 1, 23],
		gdata: {
			gregorian: [2022, 0, 23]
		},
		gtime: 1642929383917
	},
	{
		sdate: [1400, 11, 4],
		sdata: {
			solar: [1400, 10, 4]
		},
		stime: 1643015783917,
		gdate: [2022, 1, 24],
		gdata: {
			gregorian: [2022, 0, 24]
		},
		gtime: 1643015783917
	},
	{
		sdate: [1400, 11, 5],
		sdata: {
			solar: [1400, 10, 5]
		},
		stime: 1643102183917,
		gdate: [2022, 1, 25],
		gdata: {
			gregorian: [2022, 0, 25]
		},
		gtime: 1643102183917
	},
	{
		sdate: [1400, 11, 6],
		sdata: {
			solar: [1400, 10, 6]
		},
		stime: 1643188583917,
		gdate: [2022, 1, 26],
		gdata: {
			gregorian: [2022, 0, 26]
		},
		gtime: 1643188583917
	},
	{
		sdate: [1400, 11, 7],
		sdata: {
			solar: [1400, 10, 7]
		},
		stime: 1643274983917,
		gdate: [2022, 1, 27],
		gdata: {
			gregorian: [2022, 0, 27]
		},
		gtime: 1643274983917
	},
	{
		sdate: [1400, 11, 8],
		sdata: {
			solar: [1400, 10, 8]
		},
		stime: 1643361383917,
		gdate: [2022, 1, 28],
		gdata: {
			gregorian: [2022, 0, 28]
		},
		gtime: 1643361383917
	},
	{
		sdate: [1400, 11, 9],
		sdata: {
			solar: [1400, 10, 9]
		},
		stime: 1643447783917,
		gdate: [2022, 1, 29],
		gdata: {
			gregorian: [2022, 0, 29]
		},
		gtime: 1643447783917
	},
	{
		sdate: [1400, 11, 10],
		sdata: {
			solar: [1400, 10, 10]
		},
		stime: 1643534183917,
		gdate: [2022, 1, 30],
		gdata: {
			gregorian: [2022, 0, 30]
		},
		gtime: 1643534183917
	},
	{
		sdate: [1400, 11, 11],
		sdata: {
			solar: [1400, 10, 11]
		},
		stime: 1643620583917,
		gdate: [2022, 1, 31],
		gdata: {
			gregorian: [2022, 0, 31]
		},
		gtime: 1643620583917
	},
	{
		sdate: [1400, 11, 12],
		sdata: {
			solar: [1400, 10, 12]
		},
		stime: 1643706983917,
		gdate: [2022, 2, 1],
		gdata: {
			gregorian: [2022, 1, 1]
		},
		gtime: 1643706983917
	},
	{
		sdate: [1400, 11, 13],
		sdata: {
			solar: [1400, 10, 13]
		},
		stime: 1643793383917,
		gdate: [2022, 2, 2],
		gdata: {
			gregorian: [2022, 1, 2]
		},
		gtime: 1643793383917
	},
	{
		sdate: [1400, 11, 14],
		sdata: {
			solar: [1400, 10, 14]
		},
		stime: 1643879783917,
		gdate: [2022, 2, 3],
		gdata: {
			gregorian: [2022, 1, 3]
		},
		gtime: 1643879783917
	},
	{
		sdate: [1400, 11, 15],
		sdata: {
			solar: [1400, 10, 15]
		},
		stime: 1643966183917,
		gdate: [2022, 2, 4],
		gdata: {
			gregorian: [2022, 1, 4]
		},
		gtime: 1643966183917
	},
	{
		sdate: [1400, 11, 16],
		sdata: {
			solar: [1400, 10, 16]
		},
		stime: 1644052583917,
		gdate: [2022, 2, 5],
		gdata: {
			gregorian: [2022, 1, 5]
		},
		gtime: 1644052583917
	},
	{
		sdate: [1400, 11, 17],
		sdata: {
			solar: [1400, 10, 17]
		},
		stime: 1644138983917,
		gdate: [2022, 2, 6],
		gdata: {
			gregorian: [2022, 1, 6]
		},
		gtime: 1644138983917
	},
	{
		sdate: [1400, 11, 18],
		sdata: {
			solar: [1400, 10, 18]
		},
		stime: 1644225383917,
		gdate: [2022, 2, 7],
		gdata: {
			gregorian: [2022, 1, 7]
		},
		gtime: 1644225383917
	},
	{
		sdate: [1400, 11, 19],
		sdata: {
			solar: [1400, 10, 19]
		},
		stime: 1644311783917,
		gdate: [2022, 2, 8],
		gdata: {
			gregorian: [2022, 1, 8]
		},
		gtime: 1644311783917
	},
	{
		sdate: [1400, 11, 20],
		sdata: {
			solar: [1400, 10, 20]
		},
		stime: 1644398183917,
		gdate: [2022, 2, 9],
		gdata: {
			gregorian: [2022, 1, 9]
		},
		gtime: 1644398183917
	},
	{
		sdate: [1400, 11, 21],
		sdata: {
			solar: [1400, 10, 21]
		},
		stime: 1644484583917,
		gdate: [2022, 2, 10],
		gdata: {
			gregorian: [2022, 1, 10]
		},
		gtime: 1644484583917
	},
	{
		sdate: [1400, 11, 22],
		sdata: {
			solar: [1400, 10, 22]
		},
		stime: 1644570983917,
		gdate: [2022, 2, 11],
		gdata: {
			gregorian: [2022, 1, 11]
		},
		gtime: 1644570983917
	},
	{
		sdate: [1400, 11, 23],
		sdata: {
			solar: [1400, 10, 23]
		},
		stime: 1644657383917,
		gdate: [2022, 2, 12],
		gdata: {
			gregorian: [2022, 1, 12]
		},
		gtime: 1644657383917
	},
	{
		sdate: [1400, 11, 24],
		sdata: {
			solar: [1400, 10, 24]
		},
		stime: 1644743783917,
		gdate: [2022, 2, 13],
		gdata: {
			gregorian: [2022, 1, 13]
		},
		gtime: 1644743783917
	},
	{
		sdate: [1400, 11, 25],
		sdata: {
			solar: [1400, 10, 25]
		},
		stime: 1644830183917,
		gdate: [2022, 2, 14],
		gdata: {
			gregorian: [2022, 1, 14]
		},
		gtime: 1644830183917
	},
	{
		sdate: [1400, 11, 26],
		sdata: {
			solar: [1400, 10, 26]
		},
		stime: 1644916583917,
		gdate: [2022, 2, 15],
		gdata: {
			gregorian: [2022, 1, 15]
		},
		gtime: 1644916583917
	},
	{
		sdate: [1400, 11, 27],
		sdata: {
			solar: [1400, 10, 27]
		},
		stime: 1645002983917,
		gdate: [2022, 2, 16],
		gdata: {
			gregorian: [2022, 1, 16]
		},
		gtime: 1645002983917
	},
	{
		sdate: [1400, 11, 28],
		sdata: {
			solar: [1400, 10, 28]
		},
		stime: 1645089383917,
		gdate: [2022, 2, 17],
		gdata: {
			gregorian: [2022, 1, 17]
		},
		gtime: 1645089383917
	},
	{
		sdate: [1400, 11, 29],
		sdata: {
			solar: [1400, 10, 29]
		},
		stime: 1645175783917,
		gdate: [2022, 2, 18],
		gdata: {
			gregorian: [2022, 1, 18]
		},
		gtime: 1645175783917
	},
	{
		sdate: [1400, 11, 30],
		sdata: {
			solar: [1400, 10, 30]
		},
		stime: 1645262183917,
		gdate: [2022, 2, 19],
		gdata: {
			gregorian: [2022, 1, 19]
		},
		gtime: 1645262183917
	},
	{
		sdate: [1400, 12, 1],
		sdata: {
			solar: [1400, 11, 1]
		},
		stime: 1645348583917,
		gdate: [2022, 2, 20],
		gdata: {
			gregorian: [2022, 1, 20]
		},
		gtime: 1645348583917
	},
	{
		sdate: [1400, 12, 2],
		sdata: {
			solar: [1400, 11, 2]
		},
		stime: 1645434983917,
		gdate: [2022, 2, 21],
		gdata: {
			gregorian: [2022, 1, 21]
		},
		gtime: 1645434983917
	},
	{
		sdate: [1400, 12, 3],
		sdata: {
			solar: [1400, 11, 3]
		},
		stime: 1645521383917,
		gdate: [2022, 2, 22],
		gdata: {
			gregorian: [2022, 1, 22]
		},
		gtime: 1645521383917
	},
	{
		sdate: [1400, 12, 4],
		sdata: {
			solar: [1400, 11, 4]
		},
		stime: 1645607783917,
		gdate: [2022, 2, 23],
		gdata: {
			gregorian: [2022, 1, 23]
		},
		gtime: 1645607783917
	},
	{
		sdate: [1400, 12, 5],
		sdata: {
			solar: [1400, 11, 5]
		},
		stime: 1645694183917,
		gdate: [2022, 2, 24],
		gdata: {
			gregorian: [2022, 1, 24]
		},
		gtime: 1645694183917
	},
	{
		sdate: [1400, 12, 6],
		sdata: {
			solar: [1400, 11, 6]
		},
		stime: 1645780583917,
		gdate: [2022, 2, 25],
		gdata: {
			gregorian: [2022, 1, 25]
		},
		gtime: 1645780583917
	},
	{
		sdate: [1400, 12, 7],
		sdata: {
			solar: [1400, 11, 7]
		},
		stime: 1645866983917,
		gdate: [2022, 2, 26],
		gdata: {
			gregorian: [2022, 1, 26]
		},
		gtime: 1645866983917
	},
	{
		sdate: [1400, 12, 8],
		sdata: {
			solar: [1400, 11, 8]
		},
		stime: 1645953383917,
		gdate: [2022, 2, 27],
		gdata: {
			gregorian: [2022, 1, 27]
		},
		gtime: 1645953383917
	},
	{
		sdate: [1400, 12, 9],
		sdata: {
			solar: [1400, 11, 9]
		},
		stime: 1646039783917,
		gdate: [2022, 2, 28],
		gdata: {
			gregorian: [2022, 1, 28]
		},
		gtime: 1646039783917
	},
	{
		sdate: [1400, 12, 10],
		sdata: {
			solar: [1400, 11, 10]
		},
		stime: 1646126183917,
		gdate: [2022, 3, 1],
		gdata: {
			gregorian: [2022, 2, 1]
		},
		gtime: 1646126183917
	},
	{
		sdate: [1400, 12, 11],
		sdata: {
			solar: [1400, 11, 11]
		},
		stime: 1646212583917,
		gdate: [2022, 3, 2],
		gdata: {
			gregorian: [2022, 2, 2]
		},
		gtime: 1646212583917
	},
	{
		sdate: [1400, 12, 12],
		sdata: {
			solar: [1400, 11, 12]
		},
		stime: 1646298983917,
		gdate: [2022, 3, 3],
		gdata: {
			gregorian: [2022, 2, 3]
		},
		gtime: 1646298983917
	},
	{
		sdate: [1400, 12, 13],
		sdata: {
			solar: [1400, 11, 13]
		},
		stime: 1646385383917,
		gdate: [2022, 3, 4],
		gdata: {
			gregorian: [2022, 2, 4]
		},
		gtime: 1646385383917
	},
	{
		sdate: [1400, 12, 14],
		sdata: {
			solar: [1400, 11, 14]
		},
		stime: 1646471783917,
		gdate: [2022, 3, 5],
		gdata: {
			gregorian: [2022, 2, 5]
		},
		gtime: 1646471783917
	},
	{
		sdate: [1400, 12, 15],
		sdata: {
			solar: [1400, 11, 15]
		},
		stime: 1646558183917,
		gdate: [2022, 3, 6],
		gdata: {
			gregorian: [2022, 2, 6]
		},
		gtime: 1646558183917
	},
	{
		sdate: [1400, 12, 16],
		sdata: {
			solar: [1400, 11, 16]
		},
		stime: 1646644583917,
		gdate: [2022, 3, 7],
		gdata: {
			gregorian: [2022, 2, 7]
		},
		gtime: 1646644583917
	},
	{
		sdate: [1400, 12, 17],
		sdata: {
			solar: [1400, 11, 17]
		},
		stime: 1646730983917,
		gdate: [2022, 3, 8],
		gdata: {
			gregorian: [2022, 2, 8]
		},
		gtime: 1646730983917
	},
	{
		sdate: [1400, 12, 18],
		sdata: {
			solar: [1400, 11, 18]
		},
		stime: 1646817383917,
		gdate: [2022, 3, 9],
		gdata: {
			gregorian: [2022, 2, 9]
		},
		gtime: 1646817383917
	},
	{
		sdate: [1400, 12, 19],
		sdata: {
			solar: [1400, 11, 19]
		},
		stime: 1646903783917,
		gdate: [2022, 3, 10],
		gdata: {
			gregorian: [2022, 2, 10]
		},
		gtime: 1646903783917
	},
	{
		sdate: [1400, 12, 20],
		sdata: {
			solar: [1400, 11, 20]
		},
		stime: 1646990183917,
		gdate: [2022, 3, 11],
		gdata: {
			gregorian: [2022, 2, 11]
		},
		gtime: 1646990183917
	},
	{
		sdate: [1400, 12, 21],
		sdata: {
			solar: [1400, 11, 21]
		},
		stime: 1647076583917,
		gdate: [2022, 3, 12],
		gdata: {
			gregorian: [2022, 2, 12]
		},
		gtime: 1647076583917
	},
	{
		sdate: [1400, 12, 22],
		sdata: {
			solar: [1400, 11, 22]
		},
		stime: 1647162983917,
		gdate: [2022, 3, 13],
		gdata: {
			gregorian: [2022, 2, 13]
		},
		gtime: 1647162983917
	},
	{
		sdate: [1400, 12, 23],
		sdata: {
			solar: [1400, 11, 23]
		},
		stime: 1647249383917,
		gdate: [2022, 3, 14],
		gdata: {
			gregorian: [2022, 2, 14]
		},
		gtime: 1647249383917
	},
	{
		sdate: [1400, 12, 24],
		sdata: {
			solar: [1400, 11, 24]
		},
		stime: 1647335783917,
		gdate: [2022, 3, 15],
		gdata: {
			gregorian: [2022, 2, 15]
		},
		gtime: 1647335783917
	},
	{
		sdate: [1400, 12, 25],
		sdata: {
			solar: [1400, 11, 25]
		},
		stime: 1647422183917,
		gdate: [2022, 3, 16],
		gdata: {
			gregorian: [2022, 2, 16]
		},
		gtime: 1647422183917
	},
	{
		sdate: [1400, 12, 26],
		sdata: {
			solar: [1400, 11, 26]
		},
		stime: 1647508583917,
		gdate: [2022, 3, 17],
		gdata: {
			gregorian: [2022, 2, 17]
		},
		gtime: 1647508583917
	},
	{
		sdate: [1400, 12, 27],
		sdata: {
			solar: [1400, 11, 27]
		},
		stime: 1647594983917,
		gdate: [2022, 3, 18],
		gdata: {
			gregorian: [2022, 2, 18]
		},
		gtime: 1647594983917
	},
	{
		sdate: [1400, 12, 28],
		sdata: {
			solar: [1400, 11, 28]
		},
		stime: 1647681383917,
		gdate: [2022, 3, 19],
		gdata: {
			gregorian: [2022, 2, 19]
		},
		gtime: 1647681383917
	},
	{
		sdate: [1400, 12, 29],
		sdata: {
			solar: [1400, 11, 29]
		},
		stime: 1647767783917,
		gdate: [2022, 3, 20],
		gdata: {
			gregorian: [2022, 2, 20]
		},
		gtime: 1647767783917
	},
	{
		sdate: [1401, 1, 1],
		sdata: {
			solar: [1401, 0, 1]
		},
		stime: 1647854183917,
		gdate: [2022, 3, 21],
		gdata: {
			gregorian: [2022, 2, 21]
		},
		gtime: 1647854183917
	},
	{
		sdate: [1401, 1, 2],
		sdata: {
			solar: [1401, 0, 2]
		},
		stime: 1647936983917,
		gdate: [2022, 3, 22],
		gdata: {
			gregorian: [2022, 2, 22]
		},
		gtime: 1647936983917
	},
	{
		sdate: [1401, 1, 3],
		sdata: {
			solar: [1401, 0, 3]
		},
		stime: 1648023383917,
		gdate: [2022, 3, 23],
		gdata: {
			gregorian: [2022, 2, 23]
		},
		gtime: 1648023383917
	},
	{
		sdate: [1401, 1, 4],
		sdata: {
			solar: [1401, 0, 4]
		},
		stime: 1648109783917,
		gdate: [2022, 3, 24],
		gdata: {
			gregorian: [2022, 2, 24]
		},
		gtime: 1648109783917
	},
	{
		sdate: [1401, 1, 5],
		sdata: {
			solar: [1401, 0, 5]
		},
		stime: 1648196183917,
		gdate: [2022, 3, 25],
		gdata: {
			gregorian: [2022, 2, 25]
		},
		gtime: 1648196183917
	},
	{
		sdate: [1401, 1, 6],
		sdata: {
			solar: [1401, 0, 6]
		},
		stime: 1648282583917,
		gdate: [2022, 3, 26],
		gdata: {
			gregorian: [2022, 2, 26]
		},
		gtime: 1648282583917
	},
	{
		sdate: [1401, 1, 7],
		sdata: {
			solar: [1401, 0, 7]
		},
		stime: 1648368983917,
		gdate: [2022, 3, 27],
		gdata: {
			gregorian: [2022, 2, 27]
		},
		gtime: 1648368983917
	},
	{
		sdate: [1401, 1, 8],
		sdata: {
			solar: [1401, 0, 8]
		},
		stime: 1648455383917,
		gdate: [2022, 3, 28],
		gdata: {
			gregorian: [2022, 2, 28]
		},
		gtime: 1648455383917
	},
	{
		sdate: [1401, 1, 9],
		sdata: {
			solar: [1401, 0, 9]
		},
		stime: 1648541783917,
		gdate: [2022, 3, 29],
		gdata: {
			gregorian: [2022, 2, 29]
		},
		gtime: 1648541783917
	},
	{
		sdate: [1401, 1, 10],
		sdata: {
			solar: [1401, 0, 10]
		},
		stime: 1648628183917,
		gdate: [2022, 3, 30],
		gdata: {
			gregorian: [2022, 2, 30]
		},
		gtime: 1648628183917
	},
	{
		sdate: [1401, 1, 11],
		sdata: {
			solar: [1401, 0, 11]
		},
		stime: 1648714583917,
		gdate: [2022, 3, 31],
		gdata: {
			gregorian: [2022, 2, 31]
		},
		gtime: 1648714583917
	},
	{
		sdate: [1401, 1, 12],
		sdata: {
			solar: [1401, 0, 12]
		},
		stime: 1648800983917,
		gdate: [2022, 4, 1],
		gdata: {
			gregorian: [2022, 3, 1]
		},
		gtime: 1648800983917
	},
	{
		sdate: [1401, 1, 13],
		sdata: {
			solar: [1401, 0, 13]
		},
		stime: 1648887383917,
		gdate: [2022, 4, 2],
		gdata: {
			gregorian: [2022, 3, 2]
		},
		gtime: 1648887383917
	},
	{
		sdate: [1401, 1, 14],
		sdata: {
			solar: [1401, 0, 14]
		},
		stime: 1648973783917,
		gdate: [2022, 4, 3],
		gdata: {
			gregorian: [2022, 3, 3]
		},
		gtime: 1648973783917
	},
	{
		sdate: [1401, 1, 15],
		sdata: {
			solar: [1401, 0, 15]
		},
		stime: 1649060183917,
		gdate: [2022, 4, 4],
		gdata: {
			gregorian: [2022, 3, 4]
		},
		gtime: 1649060183917
	},
	{
		sdate: [1401, 1, 16],
		sdata: {
			solar: [1401, 0, 16]
		},
		stime: 1649146583917,
		gdate: [2022, 4, 5],
		gdata: {
			gregorian: [2022, 3, 5]
		},
		gtime: 1649146583917
	},
	{
		sdate: [1401, 1, 17],
		sdata: {
			solar: [1401, 0, 17]
		},
		stime: 1649232983917,
		gdate: [2022, 4, 6],
		gdata: {
			gregorian: [2022, 3, 6]
		},
		gtime: 1649232983917
	},
	{
		sdate: [1401, 1, 18],
		sdata: {
			solar: [1401, 0, 18]
		},
		stime: 1649319383917,
		gdate: [2022, 4, 7],
		gdata: {
			gregorian: [2022, 3, 7]
		},
		gtime: 1649319383917
	},
	{
		sdate: [1401, 1, 19],
		sdata: {
			solar: [1401, 0, 19]
		},
		stime: 1649405783917,
		gdate: [2022, 4, 8],
		gdata: {
			gregorian: [2022, 3, 8]
		},
		gtime: 1649405783917
	},
	{
		sdate: [1401, 1, 20],
		sdata: {
			solar: [1401, 0, 20]
		},
		stime: 1649492183917,
		gdate: [2022, 4, 9],
		gdata: {
			gregorian: [2022, 3, 9]
		},
		gtime: 1649492183917
	},
	{
		sdate: [1401, 1, 21],
		sdata: {
			solar: [1401, 0, 21]
		},
		stime: 1649578583917,
		gdate: [2022, 4, 10],
		gdata: {
			gregorian: [2022, 3, 10]
		},
		gtime: 1649578583917
	},
	{
		sdate: [1401, 1, 22],
		sdata: {
			solar: [1401, 0, 22]
		},
		stime: 1649664983917,
		gdate: [2022, 4, 11],
		gdata: {
			gregorian: [2022, 3, 11]
		},
		gtime: 1649664983917
	},
	{
		sdate: [1401, 1, 23],
		sdata: {
			solar: [1401, 0, 23]
		},
		stime: 1649751383917,
		gdate: [2022, 4, 12],
		gdata: {
			gregorian: [2022, 3, 12]
		},
		gtime: 1649751383917
	},
	{
		sdate: [1401, 1, 24],
		sdata: {
			solar: [1401, 0, 24]
		},
		stime: 1649837783917,
		gdate: [2022, 4, 13],
		gdata: {
			gregorian: [2022, 3, 13]
		},
		gtime: 1649837783917
	},
	{
		sdate: [1401, 1, 25],
		sdata: {
			solar: [1401, 0, 25]
		},
		stime: 1649924183917,
		gdate: [2022, 4, 14],
		gdata: {
			gregorian: [2022, 3, 14]
		},
		gtime: 1649924183917
	},
	{
		sdate: [1401, 1, 26],
		sdata: {
			solar: [1401, 0, 26]
		},
		stime: 1650010583917,
		gdate: [2022, 4, 15],
		gdata: {
			gregorian: [2022, 3, 15]
		},
		gtime: 1650010583917
	},
	{
		sdate: [1401, 1, 27],
		sdata: {
			solar: [1401, 0, 27]
		},
		stime: 1650096983917,
		gdate: [2022, 4, 16],
		gdata: {
			gregorian: [2022, 3, 16]
		},
		gtime: 1650096983917
	},
	{
		sdate: [1401, 1, 28],
		sdata: {
			solar: [1401, 0, 28]
		},
		stime: 1650183383917,
		gdate: [2022, 4, 17],
		gdata: {
			gregorian: [2022, 3, 17]
		},
		gtime: 1650183383917
	},
	{
		sdate: [1401, 1, 29],
		sdata: {
			solar: [1401, 0, 29]
		},
		stime: 1650269783917,
		gdate: [2022, 4, 18],
		gdata: {
			gregorian: [2022, 3, 18]
		},
		gtime: 1650269783917
	},
	{
		sdate: [1401, 1, 30],
		sdata: {
			solar: [1401, 0, 30]
		},
		stime: 1650356183917,
		gdate: [2022, 4, 19],
		gdata: {
			gregorian: [2022, 3, 19]
		},
		gtime: 1650356183917
	},
	{
		sdate: [1401, 1, 31],
		sdata: {
			solar: [1401, 0, 31]
		},
		stime: 1650442583917,
		gdate: [2022, 4, 20],
		gdata: {
			gregorian: [2022, 3, 20]
		},
		gtime: 1650442583917
	},
	{
		sdate: [1401, 2, 1],
		sdata: {
			solar: [1401, 1, 1]
		},
		stime: 1650528983917,
		gdate: [2022, 4, 21],
		gdata: {
			gregorian: [2022, 3, 21]
		},
		gtime: 1650528983917
	},
	{
		sdate: [1401, 2, 2],
		sdata: {
			solar: [1401, 1, 2]
		},
		stime: 1650615383917,
		gdate: [2022, 4, 22],
		gdata: {
			gregorian: [2022, 3, 22]
		},
		gtime: 1650615383917
	},
	{
		sdate: [1401, 2, 3],
		sdata: {
			solar: [1401, 1, 3]
		},
		stime: 1650701783917,
		gdate: [2022, 4, 23],
		gdata: {
			gregorian: [2022, 3, 23]
		},
		gtime: 1650701783917
	},
	{
		sdate: [1401, 2, 4],
		sdata: {
			solar: [1401, 1, 4]
		},
		stime: 1650788183917,
		gdate: [2022, 4, 24],
		gdata: {
			gregorian: [2022, 3, 24]
		},
		gtime: 1650788183917
	},
	{
		sdate: [1401, 2, 5],
		sdata: {
			solar: [1401, 1, 5]
		},
		stime: 1650874583917,
		gdate: [2022, 4, 25],
		gdata: {
			gregorian: [2022, 3, 25]
		},
		gtime: 1650874583917
	},
	{
		sdate: [1401, 2, 6],
		sdata: {
			solar: [1401, 1, 6]
		},
		stime: 1650960983917,
		gdate: [2022, 4, 26],
		gdata: {
			gregorian: [2022, 3, 26]
		},
		gtime: 1650960983917
	},
	{
		sdate: [1401, 2, 7],
		sdata: {
			solar: [1401, 1, 7]
		},
		stime: 1651047383917,
		gdate: [2022, 4, 27],
		gdata: {
			gregorian: [2022, 3, 27]
		},
		gtime: 1651047383917
	},
	{
		sdate: [1401, 2, 8],
		sdata: {
			solar: [1401, 1, 8]
		},
		stime: 1651133783917,
		gdate: [2022, 4, 28],
		gdata: {
			gregorian: [2022, 3, 28]
		},
		gtime: 1651133783917
	},
	{
		sdate: [1401, 2, 9],
		sdata: {
			solar: [1401, 1, 9]
		},
		stime: 1651220183917,
		gdate: [2022, 4, 29],
		gdata: {
			gregorian: [2022, 3, 29]
		},
		gtime: 1651220183917
	},
	{
		sdate: [1401, 2, 10],
		sdata: {
			solar: [1401, 1, 10]
		},
		stime: 1651306583917,
		gdate: [2022, 4, 30],
		gdata: {
			gregorian: [2022, 3, 30]
		},
		gtime: 1651306583917
	},
	{
		sdate: [1401, 2, 11],
		sdata: {
			solar: [1401, 1, 11]
		},
		stime: 1651392983917,
		gdate: [2022, 5, 1],
		gdata: {
			gregorian: [2022, 4, 1]
		},
		gtime: 1651392983917
	},
	{
		sdate: [1401, 2, 12],
		sdata: {
			solar: [1401, 1, 12]
		},
		stime: 1651479383917,
		gdate: [2022, 5, 2],
		gdata: {
			gregorian: [2022, 4, 2]
		},
		gtime: 1651479383917
	},
	{
		sdate: [1401, 2, 13],
		sdata: {
			solar: [1401, 1, 13]
		},
		stime: 1651565783917,
		gdate: [2022, 5, 3],
		gdata: {
			gregorian: [2022, 4, 3]
		},
		gtime: 1651565783917
	},
	{
		sdate: [1401, 2, 14],
		sdata: {
			solar: [1401, 1, 14]
		},
		stime: 1651652183917,
		gdate: [2022, 5, 4],
		gdata: {
			gregorian: [2022, 4, 4]
		},
		gtime: 1651652183917
	},
	{
		sdate: [1401, 2, 15],
		sdata: {
			solar: [1401, 1, 15]
		},
		stime: 1651738583917,
		gdate: [2022, 5, 5],
		gdata: {
			gregorian: [2022, 4, 5]
		},
		gtime: 1651738583917
	},
	{
		sdate: [1401, 2, 16],
		sdata: {
			solar: [1401, 1, 16]
		},
		stime: 1651824983917,
		gdate: [2022, 5, 6],
		gdata: {
			gregorian: [2022, 4, 6]
		},
		gtime: 1651824983917
	},
	{
		sdate: [1401, 2, 17],
		sdata: {
			solar: [1401, 1, 17]
		},
		stime: 1651911383917,
		gdate: [2022, 5, 7],
		gdata: {
			gregorian: [2022, 4, 7]
		},
		gtime: 1651911383917
	},
	{
		sdate: [1401, 2, 18],
		sdata: {
			solar: [1401, 1, 18]
		},
		stime: 1651997783917,
		gdate: [2022, 5, 8],
		gdata: {
			gregorian: [2022, 4, 8]
		},
		gtime: 1651997783917
	},
	{
		sdate: [1401, 2, 19],
		sdata: {
			solar: [1401, 1, 19]
		},
		stime: 1652084183917,
		gdate: [2022, 5, 9],
		gdata: {
			gregorian: [2022, 4, 9]
		},
		gtime: 1652084183917
	},
	{
		sdate: [1401, 2, 20],
		sdata: {
			solar: [1401, 1, 20]
		},
		stime: 1652170583917,
		gdate: [2022, 5, 10],
		gdata: {
			gregorian: [2022, 4, 10]
		},
		gtime: 1652170583917
	},
	{
		sdate: [1401, 2, 21],
		sdata: {
			solar: [1401, 1, 21]
		},
		stime: 1652256983917,
		gdate: [2022, 5, 11],
		gdata: {
			gregorian: [2022, 4, 11]
		},
		gtime: 1652256983917
	},
	{
		sdate: [1401, 2, 22],
		sdata: {
			solar: [1401, 1, 22]
		},
		stime: 1652343383917,
		gdate: [2022, 5, 12],
		gdata: {
			gregorian: [2022, 4, 12]
		},
		gtime: 1652343383917
	},
	{
		sdate: [1401, 2, 23],
		sdata: {
			solar: [1401, 1, 23]
		},
		stime: 1652429783917,
		gdate: [2022, 5, 13],
		gdata: {
			gregorian: [2022, 4, 13]
		},
		gtime: 1652429783917
	},
	{
		sdate: [1401, 2, 24],
		sdata: {
			solar: [1401, 1, 24]
		},
		stime: 1652516183917,
		gdate: [2022, 5, 14],
		gdata: {
			gregorian: [2022, 4, 14]
		},
		gtime: 1652516183917
	},
	{
		sdate: [1401, 2, 25],
		sdata: {
			solar: [1401, 1, 25]
		},
		stime: 1652602583917,
		gdate: [2022, 5, 15],
		gdata: {
			gregorian: [2022, 4, 15]
		},
		gtime: 1652602583917
	},
	{
		sdate: [1401, 2, 26],
		sdata: {
			solar: [1401, 1, 26]
		},
		stime: 1652688983917,
		gdate: [2022, 5, 16],
		gdata: {
			gregorian: [2022, 4, 16]
		},
		gtime: 1652688983917
	},
	{
		sdate: [1401, 2, 27],
		sdata: {
			solar: [1401, 1, 27]
		},
		stime: 1652775383917,
		gdate: [2022, 5, 17],
		gdata: {
			gregorian: [2022, 4, 17]
		},
		gtime: 1652775383917
	},
	{
		sdate: [1401, 2, 28],
		sdata: {
			solar: [1401, 1, 28]
		},
		stime: 1652861783917,
		gdate: [2022, 5, 18],
		gdata: {
			gregorian: [2022, 4, 18]
		},
		gtime: 1652861783917
	},
	{
		sdate: [1401, 2, 29],
		sdata: {
			solar: [1401, 1, 29]
		},
		stime: 1652948183917,
		gdate: [2022, 5, 19],
		gdata: {
			gregorian: [2022, 4, 19]
		},
		gtime: 1652948183917
	},
	{
		sdate: [1401, 2, 30],
		sdata: {
			solar: [1401, 1, 30]
		},
		stime: 1653034583917,
		gdate: [2022, 5, 20],
		gdata: {
			gregorian: [2022, 4, 20]
		},
		gtime: 1653034583917
	},
	{
		sdate: [1401, 2, 31],
		sdata: {
			solar: [1401, 1, 31]
		},
		stime: 1653120983917,
		gdate: [2022, 5, 21],
		gdata: {
			gregorian: [2022, 4, 21]
		},
		gtime: 1653120983917
	},
	{
		sdate: [1401, 3, 1],
		sdata: {
			solar: [1401, 2, 1]
		},
		stime: 1653207383917,
		gdate: [2022, 5, 22],
		gdata: {
			gregorian: [2022, 4, 22]
		},
		gtime: 1653207383917
	},
	{
		sdate: [1401, 3, 2],
		sdata: {
			solar: [1401, 2, 2]
		},
		stime: 1653293783917,
		gdate: [2022, 5, 23],
		gdata: {
			gregorian: [2022, 4, 23]
		},
		gtime: 1653293783917
	},
	{
		sdate: [1401, 3, 3],
		sdata: {
			solar: [1401, 2, 3]
		},
		stime: 1653380183917,
		gdate: [2022, 5, 24],
		gdata: {
			gregorian: [2022, 4, 24]
		},
		gtime: 1653380183917
	},
	{
		sdate: [1401, 3, 4],
		sdata: {
			solar: [1401, 2, 4]
		},
		stime: 1653466583917,
		gdate: [2022, 5, 25],
		gdata: {
			gregorian: [2022, 4, 25]
		},
		gtime: 1653466583917
	},
	{
		sdate: [1401, 3, 5],
		sdata: {
			solar: [1401, 2, 5]
		},
		stime: 1653552983917,
		gdate: [2022, 5, 26],
		gdata: {
			gregorian: [2022, 4, 26]
		},
		gtime: 1653552983917
	},
	{
		sdate: [1401, 3, 6],
		sdata: {
			solar: [1401, 2, 6]
		},
		stime: 1653639383917,
		gdate: [2022, 5, 27],
		gdata: {
			gregorian: [2022, 4, 27]
		},
		gtime: 1653639383917
	},
	{
		sdate: [1401, 3, 7],
		sdata: {
			solar: [1401, 2, 7]
		},
		stime: 1653725783917,
		gdate: [2022, 5, 28],
		gdata: {
			gregorian: [2022, 4, 28]
		},
		gtime: 1653725783917
	},
	{
		sdate: [1401, 3, 8],
		sdata: {
			solar: [1401, 2, 8]
		},
		stime: 1653812183917,
		gdate: [2022, 5, 29],
		gdata: {
			gregorian: [2022, 4, 29]
		},
		gtime: 1653812183917
	},
	{
		sdate: [1401, 3, 9],
		sdata: {
			solar: [1401, 2, 9]
		},
		stime: 1653898583917,
		gdate: [2022, 5, 30],
		gdata: {
			gregorian: [2022, 4, 30]
		},
		gtime: 1653898583917
	},
	{
		sdate: [1401, 3, 10],
		sdata: {
			solar: [1401, 2, 10]
		},
		stime: 1653984983917,
		gdate: [2022, 5, 31],
		gdata: {
			gregorian: [2022, 4, 31]
		},
		gtime: 1653984983917
	},
	{
		sdate: [1401, 3, 11],
		sdata: {
			solar: [1401, 2, 11]
		},
		stime: 1654071383917,
		gdate: [2022, 6, 1],
		gdata: {
			gregorian: [2022, 5, 1]
		},
		gtime: 1654071383917
	},
	{
		sdate: [1401, 3, 12],
		sdata: {
			solar: [1401, 2, 12]
		},
		stime: 1654157783917,
		gdate: [2022, 6, 2],
		gdata: {
			gregorian: [2022, 5, 2]
		},
		gtime: 1654157783917
	},
	{
		sdate: [1401, 3, 13],
		sdata: {
			solar: [1401, 2, 13]
		},
		stime: 1654244183917,
		gdate: [2022, 6, 3],
		gdata: {
			gregorian: [2022, 5, 3]
		},
		gtime: 1654244183917
	},
	{
		sdate: [1401, 3, 14],
		sdata: {
			solar: [1401, 2, 14]
		},
		stime: 1654330583917,
		gdate: [2022, 6, 4],
		gdata: {
			gregorian: [2022, 5, 4]
		},
		gtime: 1654330583917
	},
	{
		sdate: [1401, 3, 15],
		sdata: {
			solar: [1401, 2, 15]
		},
		stime: 1654416983917,
		gdate: [2022, 6, 5],
		gdata: {
			gregorian: [2022, 5, 5]
		},
		gtime: 1654416983917
	},
	{
		sdate: [1401, 3, 16],
		sdata: {
			solar: [1401, 2, 16]
		},
		stime: 1654503383917,
		gdate: [2022, 6, 6],
		gdata: {
			gregorian: [2022, 5, 6]
		},
		gtime: 1654503383917
	},
	{
		sdate: [1401, 3, 17],
		sdata: {
			solar: [1401, 2, 17]
		},
		stime: 1654589783917,
		gdate: [2022, 6, 7],
		gdata: {
			gregorian: [2022, 5, 7]
		},
		gtime: 1654589783917
	},
	{
		sdate: [1401, 3, 18],
		sdata: {
			solar: [1401, 2, 18]
		},
		stime: 1654676183917,
		gdate: [2022, 6, 8],
		gdata: {
			gregorian: [2022, 5, 8]
		},
		gtime: 1654676183917
	},
	{
		sdate: [1401, 3, 19],
		sdata: {
			solar: [1401, 2, 19]
		},
		stime: 1654762583917,
		gdate: [2022, 6, 9],
		gdata: {
			gregorian: [2022, 5, 9]
		},
		gtime: 1654762583917
	},
	{
		sdate: [1401, 3, 20],
		sdata: {
			solar: [1401, 2, 20]
		},
		stime: 1654848983917,
		gdate: [2022, 6, 10],
		gdata: {
			gregorian: [2022, 5, 10]
		},
		gtime: 1654848983917
	},
	{
		sdate: [1401, 3, 21],
		sdata: {
			solar: [1401, 2, 21]
		},
		stime: 1654935383917,
		gdate: [2022, 6, 11],
		gdata: {
			gregorian: [2022, 5, 11]
		},
		gtime: 1654935383917
	},
	{
		sdate: [1401, 3, 22],
		sdata: {
			solar: [1401, 2, 22]
		},
		stime: 1655021783917,
		gdate: [2022, 6, 12],
		gdata: {
			gregorian: [2022, 5, 12]
		},
		gtime: 1655021783917
	},
	{
		sdate: [1401, 3, 23],
		sdata: {
			solar: [1401, 2, 23]
		},
		stime: 1655108183917,
		gdate: [2022, 6, 13],
		gdata: {
			gregorian: [2022, 5, 13]
		},
		gtime: 1655108183917
	},
	{
		sdate: [1401, 3, 24],
		sdata: {
			solar: [1401, 2, 24]
		},
		stime: 1655194583917,
		gdate: [2022, 6, 14],
		gdata: {
			gregorian: [2022, 5, 14]
		},
		gtime: 1655194583917
	},
	{
		sdate: [1401, 3, 25],
		sdata: {
			solar: [1401, 2, 25]
		},
		stime: 1655280983917,
		gdate: [2022, 6, 15],
		gdata: {
			gregorian: [2022, 5, 15]
		},
		gtime: 1655280983917
	},
	{
		sdate: [1401, 3, 26],
		sdata: {
			solar: [1401, 2, 26]
		},
		stime: 1655367383917,
		gdate: [2022, 6, 16],
		gdata: {
			gregorian: [2022, 5, 16]
		},
		gtime: 1655367383917
	},
	{
		sdate: [1401, 3, 27],
		sdata: {
			solar: [1401, 2, 27]
		},
		stime: 1655453783917,
		gdate: [2022, 6, 17],
		gdata: {
			gregorian: [2022, 5, 17]
		},
		gtime: 1655453783917
	},
	{
		sdate: [1401, 3, 28],
		sdata: {
			solar: [1401, 2, 28]
		},
		stime: 1655540183917,
		gdate: [2022, 6, 18],
		gdata: {
			gregorian: [2022, 5, 18]
		},
		gtime: 1655540183917
	},
	{
		sdate: [1401, 3, 29],
		sdata: {
			solar: [1401, 2, 29]
		},
		stime: 1655626583917,
		gdate: [2022, 6, 19],
		gdata: {
			gregorian: [2022, 5, 19]
		},
		gtime: 1655626583917
	},
	{
		sdate: [1401, 3, 30],
		sdata: {
			solar: [1401, 2, 30]
		},
		stime: 1655712983917,
		gdate: [2022, 6, 20],
		gdata: {
			gregorian: [2022, 5, 20]
		},
		gtime: 1655712983917
	},
	{
		sdate: [1401, 3, 31],
		sdata: {
			solar: [1401, 2, 31]
		},
		stime: 1655799383917,
		gdate: [2022, 6, 21],
		gdata: {
			gregorian: [2022, 5, 21]
		},
		gtime: 1655799383917
	},
	{
		sdate: [1401, 4, 1],
		sdata: {
			solar: [1401, 3, 1]
		},
		stime: 1655885783917,
		gdate: [2022, 6, 22],
		gdata: {
			gregorian: [2022, 5, 22]
		},
		gtime: 1655885783917
	},
	{
		sdate: [1401, 4, 2],
		sdata: {
			solar: [1401, 3, 2]
		},
		stime: 1655972183917,
		gdate: [2022, 6, 23],
		gdata: {
			gregorian: [2022, 5, 23]
		},
		gtime: 1655972183917
	},
	{
		sdate: [1401, 4, 3],
		sdata: {
			solar: [1401, 3, 3]
		},
		stime: 1656058583917,
		gdate: [2022, 6, 24],
		gdata: {
			gregorian: [2022, 5, 24]
		},
		gtime: 1656058583917
	},
	{
		sdate: [1401, 4, 4],
		sdata: {
			solar: [1401, 3, 4]
		},
		stime: 1656144983917,
		gdate: [2022, 6, 25],
		gdata: {
			gregorian: [2022, 5, 25]
		},
		gtime: 1656144983917
	},
	{
		sdate: [1401, 4, 5],
		sdata: {
			solar: [1401, 3, 5]
		},
		stime: 1656231383917,
		gdate: [2022, 6, 26],
		gdata: {
			gregorian: [2022, 5, 26]
		},
		gtime: 1656231383917
	},
	{
		sdate: [1401, 4, 6],
		sdata: {
			solar: [1401, 3, 6]
		},
		stime: 1656317783917,
		gdate: [2022, 6, 27],
		gdata: {
			gregorian: [2022, 5, 27]
		},
		gtime: 1656317783917
	},
	{
		sdate: [1401, 4, 7],
		sdata: {
			solar: [1401, 3, 7]
		},
		stime: 1656404183917,
		gdate: [2022, 6, 28],
		gdata: {
			gregorian: [2022, 5, 28]
		},
		gtime: 1656404183917
	},
	{
		sdate: [1401, 4, 8],
		sdata: {
			solar: [1401, 3, 8]
		},
		stime: 1656490583917,
		gdate: [2022, 6, 29],
		gdata: {
			gregorian: [2022, 5, 29]
		},
		gtime: 1656490583917
	},
	{
		sdate: [1401, 4, 9],
		sdata: {
			solar: [1401, 3, 9]
		},
		stime: 1656576983917,
		gdate: [2022, 6, 30],
		gdata: {
			gregorian: [2022, 5, 30]
		},
		gtime: 1656576983917
	},
	{
		sdate: [1401, 4, 10],
		sdata: {
			solar: [1401, 3, 10]
		},
		stime: 1656663383917,
		gdate: [2022, 7, 1],
		gdata: {
			gregorian: [2022, 6, 1]
		},
		gtime: 1656663383917
	},
	{
		sdate: [1401, 4, 11],
		sdata: {
			solar: [1401, 3, 11]
		},
		stime: 1656749783917,
		gdate: [2022, 7, 2],
		gdata: {
			gregorian: [2022, 6, 2]
		},
		gtime: 1656749783917
	},
	{
		sdate: [1401, 4, 12],
		sdata: {
			solar: [1401, 3, 12]
		},
		stime: 1656836183917,
		gdate: [2022, 7, 3],
		gdata: {
			gregorian: [2022, 6, 3]
		},
		gtime: 1656836183917
	},
	{
		sdate: [1401, 4, 13],
		sdata: {
			solar: [1401, 3, 13]
		},
		stime: 1656922583917,
		gdate: [2022, 7, 4],
		gdata: {
			gregorian: [2022, 6, 4]
		},
		gtime: 1656922583917
	},
	{
		sdate: [1401, 4, 14],
		sdata: {
			solar: [1401, 3, 14]
		},
		stime: 1657008983917,
		gdate: [2022, 7, 5],
		gdata: {
			gregorian: [2022, 6, 5]
		},
		gtime: 1657008983917
	},
	{
		sdate: [1401, 4, 15],
		sdata: {
			solar: [1401, 3, 15]
		},
		stime: 1657095383917,
		gdate: [2022, 7, 6],
		gdata: {
			gregorian: [2022, 6, 6]
		},
		gtime: 1657095383917
	},
	{
		sdate: [1401, 4, 16],
		sdata: {
			solar: [1401, 3, 16]
		},
		stime: 1657181783917,
		gdate: [2022, 7, 7],
		gdata: {
			gregorian: [2022, 6, 7]
		},
		gtime: 1657181783917
	},
	{
		sdate: [1401, 4, 17],
		sdata: {
			solar: [1401, 3, 17]
		},
		stime: 1657268183917,
		gdate: [2022, 7, 8],
		gdata: {
			gregorian: [2022, 6, 8]
		},
		gtime: 1657268183917
	},
	{
		sdate: [1401, 4, 18],
		sdata: {
			solar: [1401, 3, 18]
		},
		stime: 1657354583917,
		gdate: [2022, 7, 9],
		gdata: {
			gregorian: [2022, 6, 9]
		},
		gtime: 1657354583917
	},
	{
		sdate: [1401, 4, 19],
		sdata: {
			solar: [1401, 3, 19]
		},
		stime: 1657440983917,
		gdate: [2022, 7, 10],
		gdata: {
			gregorian: [2022, 6, 10]
		},
		gtime: 1657440983917
	},
	{
		sdate: [1401, 4, 20],
		sdata: {
			solar: [1401, 3, 20]
		},
		stime: 1657527383917,
		gdate: [2022, 7, 11],
		gdata: {
			gregorian: [2022, 6, 11]
		},
		gtime: 1657527383917
	},
	{
		sdate: [1401, 4, 21],
		sdata: {
			solar: [1401, 3, 21]
		},
		stime: 1657613783917,
		gdate: [2022, 7, 12],
		gdata: {
			gregorian: [2022, 6, 12]
		},
		gtime: 1657613783917
	},
	{
		sdate: [1401, 4, 22],
		sdata: {
			solar: [1401, 3, 22]
		},
		stime: 1657700183917,
		gdate: [2022, 7, 13],
		gdata: {
			gregorian: [2022, 6, 13]
		},
		gtime: 1657700183917
	},
	{
		sdate: [1401, 4, 23],
		sdata: {
			solar: [1401, 3, 23]
		},
		stime: 1657786583917,
		gdate: [2022, 7, 14],
		gdata: {
			gregorian: [2022, 6, 14]
		},
		gtime: 1657786583917
	},
	{
		sdate: [1401, 4, 24],
		sdata: {
			solar: [1401, 3, 24]
		},
		stime: 1657872983917,
		gdate: [2022, 7, 15],
		gdata: {
			gregorian: [2022, 6, 15]
		},
		gtime: 1657872983917
	},
	{
		sdate: [1401, 4, 25],
		sdata: {
			solar: [1401, 3, 25]
		},
		stime: 1657959383917,
		gdate: [2022, 7, 16],
		gdata: {
			gregorian: [2022, 6, 16]
		},
		gtime: 1657959383917
	},
	{
		sdate: [1401, 4, 26],
		sdata: {
			solar: [1401, 3, 26]
		},
		stime: 1658045783917,
		gdate: [2022, 7, 17],
		gdata: {
			gregorian: [2022, 6, 17]
		},
		gtime: 1658045783917
	},
	{
		sdate: [1401, 4, 27],
		sdata: {
			solar: [1401, 3, 27]
		},
		stime: 1658132183917,
		gdate: [2022, 7, 18],
		gdata: {
			gregorian: [2022, 6, 18]
		},
		gtime: 1658132183917
	},
	{
		sdate: [1401, 4, 28],
		sdata: {
			solar: [1401, 3, 28]
		},
		stime: 1658218583917,
		gdate: [2022, 7, 19],
		gdata: {
			gregorian: [2022, 6, 19]
		},
		gtime: 1658218583917
	},
	{
		sdate: [1401, 4, 29],
		sdata: {
			solar: [1401, 3, 29]
		},
		stime: 1658304983917,
		gdate: [2022, 7, 20],
		gdata: {
			gregorian: [2022, 6, 20]
		},
		gtime: 1658304983917
	},
	{
		sdate: [1401, 4, 30],
		sdata: {
			solar: [1401, 3, 30]
		},
		stime: 1658391383917,
		gdate: [2022, 7, 21],
		gdata: {
			gregorian: [2022, 6, 21]
		},
		gtime: 1658391383917
	},
	{
		sdate: [1401, 4, 31],
		sdata: {
			solar: [1401, 3, 31]
		},
		stime: 1658477783917,
		gdate: [2022, 7, 22],
		gdata: {
			gregorian: [2022, 6, 22]
		},
		gtime: 1658477783917
	},
	{
		sdate: [1401, 5, 1],
		sdata: {
			solar: [1401, 4, 1]
		},
		stime: 1658564183917,
		gdate: [2022, 7, 23],
		gdata: {
			gregorian: [2022, 6, 23]
		},
		gtime: 1658564183917
	},
	{
		sdate: [1401, 5, 2],
		sdata: {
			solar: [1401, 4, 2]
		},
		stime: 1658650583917,
		gdate: [2022, 7, 24],
		gdata: {
			gregorian: [2022, 6, 24]
		},
		gtime: 1658650583917
	},
	{
		sdate: [1401, 5, 3],
		sdata: {
			solar: [1401, 4, 3]
		},
		stime: 1658736983917,
		gdate: [2022, 7, 25],
		gdata: {
			gregorian: [2022, 6, 25]
		},
		gtime: 1658736983917
	},
	{
		sdate: [1401, 5, 4],
		sdata: {
			solar: [1401, 4, 4]
		},
		stime: 1658823383917,
		gdate: [2022, 7, 26],
		gdata: {
			gregorian: [2022, 6, 26]
		},
		gtime: 1658823383917
	},
	{
		sdate: [1401, 5, 5],
		sdata: {
			solar: [1401, 4, 5]
		},
		stime: 1658909783917,
		gdate: [2022, 7, 27],
		gdata: {
			gregorian: [2022, 6, 27]
		},
		gtime: 1658909783917
	},
	{
		sdate: [1401, 5, 6],
		sdata: {
			solar: [1401, 4, 6]
		},
		stime: 1658996183917,
		gdate: [2022, 7, 28],
		gdata: {
			gregorian: [2022, 6, 28]
		},
		gtime: 1658996183917
	},
	{
		sdate: [1401, 5, 7],
		sdata: {
			solar: [1401, 4, 7]
		},
		stime: 1659082583917,
		gdate: [2022, 7, 29],
		gdata: {
			gregorian: [2022, 6, 29]
		},
		gtime: 1659082583917
	},
	{
		sdate: [1401, 5, 8],
		sdata: {
			solar: [1401, 4, 8]
		},
		stime: 1659168983917,
		gdate: [2022, 7, 30],
		gdata: {
			gregorian: [2022, 6, 30]
		},
		gtime: 1659168983917
	},
	{
		sdate: [1401, 5, 9],
		sdata: {
			solar: [1401, 4, 9]
		},
		stime: 1659255383917,
		gdate: [2022, 7, 31],
		gdata: {
			gregorian: [2022, 6, 31]
		},
		gtime: 1659255383917
	},
	{
		sdate: [1401, 5, 10],
		sdata: {
			solar: [1401, 4, 10]
		},
		stime: 1659341783917,
		gdate: [2022, 8, 1],
		gdata: {
			gregorian: [2022, 7, 1]
		},
		gtime: 1659341783917
	},
	{
		sdate: [1401, 5, 11],
		sdata: {
			solar: [1401, 4, 11]
		},
		stime: 1659428183917,
		gdate: [2022, 8, 2],
		gdata: {
			gregorian: [2022, 7, 2]
		},
		gtime: 1659428183917
	},
	{
		sdate: [1401, 5, 12],
		sdata: {
			solar: [1401, 4, 12]
		},
		stime: 1659514583917,
		gdate: [2022, 8, 3],
		gdata: {
			gregorian: [2022, 7, 3]
		},
		gtime: 1659514583917
	},
	{
		sdate: [1401, 5, 13],
		sdata: {
			solar: [1401, 4, 13]
		},
		stime: 1659600983917,
		gdate: [2022, 8, 4],
		gdata: {
			gregorian: [2022, 7, 4]
		},
		gtime: 1659600983917
	},
	{
		sdate: [1401, 5, 14],
		sdata: {
			solar: [1401, 4, 14]
		},
		stime: 1659687383917,
		gdate: [2022, 8, 5],
		gdata: {
			gregorian: [2022, 7, 5]
		},
		gtime: 1659687383917
	},
	{
		sdate: [1401, 5, 15],
		sdata: {
			solar: [1401, 4, 15]
		},
		stime: 1659773783917,
		gdate: [2022, 8, 6],
		gdata: {
			gregorian: [2022, 7, 6]
		},
		gtime: 1659773783917
	},
	{
		sdate: [1401, 5, 16],
		sdata: {
			solar: [1401, 4, 16]
		},
		stime: 1659860183917,
		gdate: [2022, 8, 7],
		gdata: {
			gregorian: [2022, 7, 7]
		},
		gtime: 1659860183917
	},
	{
		sdate: [1401, 5, 17],
		sdata: {
			solar: [1401, 4, 17]
		},
		stime: 1659946583917,
		gdate: [2022, 8, 8],
		gdata: {
			gregorian: [2022, 7, 8]
		},
		gtime: 1659946583917
	},
	{
		sdate: [1401, 5, 18],
		sdata: {
			solar: [1401, 4, 18]
		},
		stime: 1660032983917,
		gdate: [2022, 8, 9],
		gdata: {
			gregorian: [2022, 7, 9]
		},
		gtime: 1660032983917
	},
	{
		sdate: [1401, 5, 19],
		sdata: {
			solar: [1401, 4, 19]
		},
		stime: 1660119383917,
		gdate: [2022, 8, 10],
		gdata: {
			gregorian: [2022, 7, 10]
		},
		gtime: 1660119383917
	},
	{
		sdate: [1401, 5, 20],
		sdata: {
			solar: [1401, 4, 20]
		},
		stime: 1660205783917,
		gdate: [2022, 8, 11],
		gdata: {
			gregorian: [2022, 7, 11]
		},
		gtime: 1660205783917
	},
	{
		sdate: [1401, 5, 21],
		sdata: {
			solar: [1401, 4, 21]
		},
		stime: 1660292183917,
		gdate: [2022, 8, 12],
		gdata: {
			gregorian: [2022, 7, 12]
		},
		gtime: 1660292183917
	},
	{
		sdate: [1401, 5, 22],
		sdata: {
			solar: [1401, 4, 22]
		},
		stime: 1660378583917,
		gdate: [2022, 8, 13],
		gdata: {
			gregorian: [2022, 7, 13]
		},
		gtime: 1660378583917
	},
	{
		sdate: [1401, 5, 23],
		sdata: {
			solar: [1401, 4, 23]
		},
		stime: 1660464983917,
		gdate: [2022, 8, 14],
		gdata: {
			gregorian: [2022, 7, 14]
		},
		gtime: 1660464983917
	},
	{
		sdate: [1401, 5, 24],
		sdata: {
			solar: [1401, 4, 24]
		},
		stime: 1660551383917,
		gdate: [2022, 8, 15],
		gdata: {
			gregorian: [2022, 7, 15]
		},
		gtime: 1660551383917
	},
	{
		sdate: [1401, 5, 25],
		sdata: {
			solar: [1401, 4, 25]
		},
		stime: 1660637783917,
		gdate: [2022, 8, 16],
		gdata: {
			gregorian: [2022, 7, 16]
		},
		gtime: 1660637783917
	},
	{
		sdate: [1401, 5, 26],
		sdata: {
			solar: [1401, 4, 26]
		},
		stime: 1660724183917,
		gdate: [2022, 8, 17],
		gdata: {
			gregorian: [2022, 7, 17]
		},
		gtime: 1660724183917
	},
	{
		sdate: [1401, 5, 27],
		sdata: {
			solar: [1401, 4, 27]
		},
		stime: 1660810583917,
		gdate: [2022, 8, 18],
		gdata: {
			gregorian: [2022, 7, 18]
		},
		gtime: 1660810583917
	},
	{
		sdate: [1401, 5, 28],
		sdata: {
			solar: [1401, 4, 28]
		},
		stime: 1660896983917,
		gdate: [2022, 8, 19],
		gdata: {
			gregorian: [2022, 7, 19]
		},
		gtime: 1660896983917
	},
	{
		sdate: [1401, 5, 29],
		sdata: {
			solar: [1401, 4, 29]
		},
		stime: 1660983383917,
		gdate: [2022, 8, 20],
		gdata: {
			gregorian: [2022, 7, 20]
		},
		gtime: 1660983383917
	},
	{
		sdate: [1401, 5, 30],
		sdata: {
			solar: [1401, 4, 30]
		},
		stime: 1661069783917,
		gdate: [2022, 8, 21],
		gdata: {
			gregorian: [2022, 7, 21]
		},
		gtime: 1661069783917
	},
	{
		sdate: [1401, 5, 31],
		sdata: {
			solar: [1401, 4, 31]
		},
		stime: 1661156183917,
		gdate: [2022, 8, 22],
		gdata: {
			gregorian: [2022, 7, 22]
		},
		gtime: 1661156183917
	},
	{
		sdate: [1401, 6, 1],
		sdata: {
			solar: [1401, 5, 1]
		},
		stime: 1661242583917,
		gdate: [2022, 8, 23],
		gdata: {
			gregorian: [2022, 7, 23]
		},
		gtime: 1661242583917
	},
	{
		sdate: [1401, 6, 2],
		sdata: {
			solar: [1401, 5, 2]
		},
		stime: 1661328983917,
		gdate: [2022, 8, 24],
		gdata: {
			gregorian: [2022, 7, 24]
		},
		gtime: 1661328983917
	},
	{
		sdate: [1401, 6, 3],
		sdata: {
			solar: [1401, 5, 3]
		},
		stime: 1661415383917,
		gdate: [2022, 8, 25],
		gdata: {
			gregorian: [2022, 7, 25]
		},
		gtime: 1661415383917
	},
	{
		sdate: [1401, 6, 4],
		sdata: {
			solar: [1401, 5, 4]
		},
		stime: 1661501783917,
		gdate: [2022, 8, 26],
		gdata: {
			gregorian: [2022, 7, 26]
		},
		gtime: 1661501783917
	},
	{
		sdate: [1401, 6, 5],
		sdata: {
			solar: [1401, 5, 5]
		},
		stime: 1661588183917,
		gdate: [2022, 8, 27],
		gdata: {
			gregorian: [2022, 7, 27]
		},
		gtime: 1661588183917
	},
	{
		sdate: [1401, 6, 6],
		sdata: {
			solar: [1401, 5, 6]
		},
		stime: 1661674583917,
		gdate: [2022, 8, 28],
		gdata: {
			gregorian: [2022, 7, 28]
		},
		gtime: 1661674583917
	},
	{
		sdate: [1401, 6, 7],
		sdata: {
			solar: [1401, 5, 7]
		},
		stime: 1661760983917,
		gdate: [2022, 8, 29],
		gdata: {
			gregorian: [2022, 7, 29]
		},
		gtime: 1661760983917
	},
	{
		sdate: [1401, 6, 8],
		sdata: {
			solar: [1401, 5, 8]
		},
		stime: 1661847383917,
		gdate: [2022, 8, 30],
		gdata: {
			gregorian: [2022, 7, 30]
		},
		gtime: 1661847383917
	},
	{
		sdate: [1401, 6, 9],
		sdata: {
			solar: [1401, 5, 9]
		},
		stime: 1661933783917,
		gdate: [2022, 8, 31],
		gdata: {
			gregorian: [2022, 7, 31]
		},
		gtime: 1661933783917
	},
	{
		sdate: [1401, 6, 10],
		sdata: {
			solar: [1401, 5, 10]
		},
		stime: 1662020183917,
		gdate: [2022, 9, 1],
		gdata: {
			gregorian: [2022, 8, 1]
		},
		gtime: 1662020183917
	},
	{
		sdate: [1401, 6, 11],
		sdata: {
			solar: [1401, 5, 11]
		},
		stime: 1662106583917,
		gdate: [2022, 9, 2],
		gdata: {
			gregorian: [2022, 8, 2]
		},
		gtime: 1662106583917
	},
	{
		sdate: [1401, 6, 12],
		sdata: {
			solar: [1401, 5, 12]
		},
		stime: 1662192983917,
		gdate: [2022, 9, 3],
		gdata: {
			gregorian: [2022, 8, 3]
		},
		gtime: 1662192983917
	},
	{
		sdate: [1401, 6, 13],
		sdata: {
			solar: [1401, 5, 13]
		},
		stime: 1662279383917,
		gdate: [2022, 9, 4],
		gdata: {
			gregorian: [2022, 8, 4]
		},
		gtime: 1662279383917
	},
	{
		sdate: [1401, 6, 14],
		sdata: {
			solar: [1401, 5, 14]
		},
		stime: 1662365783917,
		gdate: [2022, 9, 5],
		gdata: {
			gregorian: [2022, 8, 5]
		},
		gtime: 1662365783917
	},
	{
		sdate: [1401, 6, 15],
		sdata: {
			solar: [1401, 5, 15]
		},
		stime: 1662452183917,
		gdate: [2022, 9, 6],
		gdata: {
			gregorian: [2022, 8, 6]
		},
		gtime: 1662452183917
	},
	{
		sdate: [1401, 6, 16],
		sdata: {
			solar: [1401, 5, 16]
		},
		stime: 1662538583917,
		gdate: [2022, 9, 7],
		gdata: {
			gregorian: [2022, 8, 7]
		},
		gtime: 1662538583917
	},
	{
		sdate: [1401, 6, 17],
		sdata: {
			solar: [1401, 5, 17]
		},
		stime: 1662624983917,
		gdate: [2022, 9, 8],
		gdata: {
			gregorian: [2022, 8, 8]
		},
		gtime: 1662624983917
	},
	{
		sdate: [1401, 6, 18],
		sdata: {
			solar: [1401, 5, 18]
		},
		stime: 1662711383917,
		gdate: [2022, 9, 9],
		gdata: {
			gregorian: [2022, 8, 9]
		},
		gtime: 1662711383917
	},
	{
		sdate: [1401, 6, 19],
		sdata: {
			solar: [1401, 5, 19]
		},
		stime: 1662797783917,
		gdate: [2022, 9, 10],
		gdata: {
			gregorian: [2022, 8, 10]
		},
		gtime: 1662797783917
	},
	{
		sdate: [1401, 6, 20],
		sdata: {
			solar: [1401, 5, 20]
		},
		stime: 1662884183917,
		gdate: [2022, 9, 11],
		gdata: {
			gregorian: [2022, 8, 11]
		},
		gtime: 1662884183917
	},
	{
		sdate: [1401, 6, 21],
		sdata: {
			solar: [1401, 5, 21]
		},
		stime: 1662970583917,
		gdate: [2022, 9, 12],
		gdata: {
			gregorian: [2022, 8, 12]
		},
		gtime: 1662970583917
	},
	{
		sdate: [1401, 6, 22],
		sdata: {
			solar: [1401, 5, 22]
		},
		stime: 1663056983917,
		gdate: [2022, 9, 13],
		gdata: {
			gregorian: [2022, 8, 13]
		},
		gtime: 1663056983917
	},
	{
		sdate: [1401, 6, 23],
		sdata: {
			solar: [1401, 5, 23]
		},
		stime: 1663143383917,
		gdate: [2022, 9, 14],
		gdata: {
			gregorian: [2022, 8, 14]
		},
		gtime: 1663143383917
	},
	{
		sdate: [1401, 6, 24],
		sdata: {
			solar: [1401, 5, 24]
		},
		stime: 1663229783917,
		gdate: [2022, 9, 15],
		gdata: {
			gregorian: [2022, 8, 15]
		},
		gtime: 1663229783917
	},
	{
		sdate: [1401, 6, 25],
		sdata: {
			solar: [1401, 5, 25]
		},
		stime: 1663316183917,
		gdate: [2022, 9, 16],
		gdata: {
			gregorian: [2022, 8, 16]
		},
		gtime: 1663316183917
	},
	{
		sdate: [1401, 6, 26],
		sdata: {
			solar: [1401, 5, 26]
		},
		stime: 1663402583917,
		gdate: [2022, 9, 17],
		gdata: {
			gregorian: [2022, 8, 17]
		},
		gtime: 1663402583917
	},
	{
		sdate: [1401, 6, 27],
		sdata: {
			solar: [1401, 5, 27]
		},
		stime: 1663488983917,
		gdate: [2022, 9, 18],
		gdata: {
			gregorian: [2022, 8, 18]
		},
		gtime: 1663488983917
	},
	{
		sdate: [1401, 6, 28],
		sdata: {
			solar: [1401, 5, 28]
		},
		stime: 1663575383917,
		gdate: [2022, 9, 19],
		gdata: {
			gregorian: [2022, 8, 19]
		},
		gtime: 1663575383917
	},
	{
		sdate: [1401, 6, 29],
		sdata: {
			solar: [1401, 5, 29]
		},
		stime: 1663661783917,
		gdate: [2022, 9, 20],
		gdata: {
			gregorian: [2022, 8, 20]
		},
		gtime: 1663661783917
	},
	{
		sdate: [1401, 6, 30],
		sdata: {
			solar: [1401, 5, 30]
		},
		stime: 1663748183917,
		gdate: [2022, 9, 21],
		gdata: {
			gregorian: [2022, 8, 21]
		},
		gtime: 1663748183917
	},
	{
		sdate: [1401, 6, 31],
		sdata: {
			solar: [1401, 5, 31]
		},
		stime: 1663838183917,
		gdate: [2022, 9, 22],
		gdata: {
			gregorian: [2022, 8, 22]
		},
		gtime: 1663838183917
	},
	{
		sdate: [1401, 7, 1],
		sdata: {
			solar: [1401, 6, 1]
		},
		stime: 1663924583917,
		gdate: [2022, 9, 23],
		gdata: {
			gregorian: [2022, 8, 23]
		},
		gtime: 1663924583917
	},
	{
		sdate: [1401, 7, 2],
		sdata: {
			solar: [1401, 6, 2]
		},
		stime: 1664010983917,
		gdate: [2022, 9, 24],
		gdata: {
			gregorian: [2022, 8, 24]
		},
		gtime: 1664010983917
	},
	{
		sdate: [1401, 7, 3],
		sdata: {
			solar: [1401, 6, 3]
		},
		stime: 1664097383917,
		gdate: [2022, 9, 25],
		gdata: {
			gregorian: [2022, 8, 25]
		},
		gtime: 1664097383917
	},
	{
		sdate: [1401, 7, 4],
		sdata: {
			solar: [1401, 6, 4]
		},
		stime: 1664183783917,
		gdate: [2022, 9, 26],
		gdata: {
			gregorian: [2022, 8, 26]
		},
		gtime: 1664183783917
	},
	{
		sdate: [1401, 7, 5],
		sdata: {
			solar: [1401, 6, 5]
		},
		stime: 1664270183917,
		gdate: [2022, 9, 27],
		gdata: {
			gregorian: [2022, 8, 27]
		},
		gtime: 1664270183917
	},
	{
		sdate: [1401, 7, 6],
		sdata: {
			solar: [1401, 6, 6]
		},
		stime: 1664356583917,
		gdate: [2022, 9, 28],
		gdata: {
			gregorian: [2022, 8, 28]
		},
		gtime: 1664356583917
	},
	{
		sdate: [1401, 7, 7],
		sdata: {
			solar: [1401, 6, 7]
		},
		stime: 1664442983917,
		gdate: [2022, 9, 29],
		gdata: {
			gregorian: [2022, 8, 29]
		},
		gtime: 1664442983917
	},
	{
		sdate: [1401, 7, 8],
		sdata: {
			solar: [1401, 6, 8]
		},
		stime: 1664529383917,
		gdate: [2022, 9, 30],
		gdata: {
			gregorian: [2022, 8, 30]
		},
		gtime: 1664529383917
	},
	{
		sdate: [1401, 7, 9],
		sdata: {
			solar: [1401, 6, 9]
		},
		stime: 1664615783917,
		gdate: [2022, 10, 1],
		gdata: {
			gregorian: [2022, 9, 1]
		},
		gtime: 1664615783917
	},
	{
		sdate: [1401, 7, 10],
		sdata: {
			solar: [1401, 6, 10]
		},
		stime: 1664702183917,
		gdate: [2022, 10, 2],
		gdata: {
			gregorian: [2022, 9, 2]
		},
		gtime: 1664702183917
	},
	{
		sdate: [1401, 7, 11],
		sdata: {
			solar: [1401, 6, 11]
		},
		stime: 1664788583917,
		gdate: [2022, 10, 3],
		gdata: {
			gregorian: [2022, 9, 3]
		},
		gtime: 1664788583917
	},
	{
		sdate: [1401, 7, 12],
		sdata: {
			solar: [1401, 6, 12]
		},
		stime: 1664874983917,
		gdate: [2022, 10, 4],
		gdata: {
			gregorian: [2022, 9, 4]
		},
		gtime: 1664874983917
	},
	{
		sdate: [1401, 7, 13],
		sdata: {
			solar: [1401, 6, 13]
		},
		stime: 1664961383917,
		gdate: [2022, 10, 5],
		gdata: {
			gregorian: [2022, 9, 5]
		},
		gtime: 1664961383917
	},
	{
		sdate: [1401, 7, 14],
		sdata: {
			solar: [1401, 6, 14]
		},
		stime: 1665047783917,
		gdate: [2022, 10, 6],
		gdata: {
			gregorian: [2022, 9, 6]
		},
		gtime: 1665047783917
	},
	{
		sdate: [1401, 7, 15],
		sdata: {
			solar: [1401, 6, 15]
		},
		stime: 1665134183917,
		gdate: [2022, 10, 7],
		gdata: {
			gregorian: [2022, 9, 7]
		},
		gtime: 1665134183917
	},
	{
		sdate: [1401, 7, 16],
		sdata: {
			solar: [1401, 6, 16]
		},
		stime: 1665220583917,
		gdate: [2022, 10, 8],
		gdata: {
			gregorian: [2022, 9, 8]
		},
		gtime: 1665220583917
	},
	{
		sdate: [1401, 7, 17],
		sdata: {
			solar: [1401, 6, 17]
		},
		stime: 1665306983917,
		gdate: [2022, 10, 9],
		gdata: {
			gregorian: [2022, 9, 9]
		},
		gtime: 1665306983917
	},
	{
		sdate: [1401, 7, 18],
		sdata: {
			solar: [1401, 6, 18]
		},
		stime: 1665393383917,
		gdate: [2022, 10, 10],
		gdata: {
			gregorian: [2022, 9, 10]
		},
		gtime: 1665393383917
	},
	{
		sdate: [1401, 7, 19],
		sdata: {
			solar: [1401, 6, 19]
		},
		stime: 1665479783917,
		gdate: [2022, 10, 11],
		gdata: {
			gregorian: [2022, 9, 11]
		},
		gtime: 1665479783917
	},
	{
		sdate: [1401, 7, 20],
		sdata: {
			solar: [1401, 6, 20]
		},
		stime: 1665566183917,
		gdate: [2022, 10, 12],
		gdata: {
			gregorian: [2022, 9, 12]
		},
		gtime: 1665566183917
	},
	{
		sdate: [1401, 7, 21],
		sdata: {
			solar: [1401, 6, 21]
		},
		stime: 1665652583917,
		gdate: [2022, 10, 13],
		gdata: {
			gregorian: [2022, 9, 13]
		},
		gtime: 1665652583917
	},
	{
		sdate: [1401, 7, 22],
		sdata: {
			solar: [1401, 6, 22]
		},
		stime: 1665738983917,
		gdate: [2022, 10, 14],
		gdata: {
			gregorian: [2022, 9, 14]
		},
		gtime: 1665738983917
	},
	{
		sdate: [1401, 7, 23],
		sdata: {
			solar: [1401, 6, 23]
		},
		stime: 1665825383917,
		gdate: [2022, 10, 15],
		gdata: {
			gregorian: [2022, 9, 15]
		},
		gtime: 1665825383917
	},
	{
		sdate: [1401, 7, 24],
		sdata: {
			solar: [1401, 6, 24]
		},
		stime: 1665911783917,
		gdate: [2022, 10, 16],
		gdata: {
			gregorian: [2022, 9, 16]
		},
		gtime: 1665911783917
	},
	{
		sdate: [1401, 7, 25],
		sdata: {
			solar: [1401, 6, 25]
		},
		stime: 1665998183917,
		gdate: [2022, 10, 17],
		gdata: {
			gregorian: [2022, 9, 17]
		},
		gtime: 1665998183917
	},
	{
		sdate: [1401, 7, 26],
		sdata: {
			solar: [1401, 6, 26]
		},
		stime: 1666084583917,
		gdate: [2022, 10, 18],
		gdata: {
			gregorian: [2022, 9, 18]
		},
		gtime: 1666084583917
	},
	{
		sdate: [1401, 7, 27],
		sdata: {
			solar: [1401, 6, 27]
		},
		stime: 1666170983917,
		gdate: [2022, 10, 19],
		gdata: {
			gregorian: [2022, 9, 19]
		},
		gtime: 1666170983917
	},
	{
		sdate: [1401, 7, 28],
		sdata: {
			solar: [1401, 6, 28]
		},
		stime: 1666257383917,
		gdate: [2022, 10, 20],
		gdata: {
			gregorian: [2022, 9, 20]
		},
		gtime: 1666257383917
	},
	{
		sdate: [1401, 7, 29],
		sdata: {
			solar: [1401, 6, 29]
		},
		stime: 1666343783917,
		gdate: [2022, 10, 21],
		gdata: {
			gregorian: [2022, 9, 21]
		},
		gtime: 1666343783917
	},
	{
		sdate: [1401, 7, 30],
		sdata: {
			solar: [1401, 6, 30]
		},
		stime: 1666430183917,
		gdate: [2022, 10, 22],
		gdata: {
			gregorian: [2022, 9, 22]
		},
		gtime: 1666430183917
	},
	{
		sdate: [1401, 8, 1],
		sdata: {
			solar: [1401, 7, 1]
		},
		stime: 1666516583917,
		gdate: [2022, 10, 23],
		gdata: {
			gregorian: [2022, 9, 23]
		},
		gtime: 1666516583917
	},
	{
		sdate: [1401, 8, 2],
		sdata: {
			solar: [1401, 7, 2]
		},
		stime: 1666602983917,
		gdate: [2022, 10, 24],
		gdata: {
			gregorian: [2022, 9, 24]
		},
		gtime: 1666602983917
	},
	{
		sdate: [1401, 8, 3],
		sdata: {
			solar: [1401, 7, 3]
		},
		stime: 1666689383917,
		gdate: [2022, 10, 25],
		gdata: {
			gregorian: [2022, 9, 25]
		},
		gtime: 1666689383917
	},
	{
		sdate: [1401, 8, 4],
		sdata: {
			solar: [1401, 7, 4]
		},
		stime: 1666775783917,
		gdate: [2022, 10, 26],
		gdata: {
			gregorian: [2022, 9, 26]
		},
		gtime: 1666775783917
	},
	{
		sdate: [1401, 8, 5],
		sdata: {
			solar: [1401, 7, 5]
		},
		stime: 1666862183917,
		gdate: [2022, 10, 27],
		gdata: {
			gregorian: [2022, 9, 27]
		},
		gtime: 1666862183917
	},
	{
		sdate: [1401, 8, 6],
		sdata: {
			solar: [1401, 7, 6]
		},
		stime: 1666948583917,
		gdate: [2022, 10, 28],
		gdata: {
			gregorian: [2022, 9, 28]
		},
		gtime: 1666948583917
	},
	{
		sdate: [1401, 8, 7],
		sdata: {
			solar: [1401, 7, 7]
		},
		stime: 1667034983917,
		gdate: [2022, 10, 29],
		gdata: {
			gregorian: [2022, 9, 29]
		},
		gtime: 1667034983917
	},
	{
		sdate: [1401, 8, 8],
		sdata: {
			solar: [1401, 7, 8]
		},
		stime: 1667121383917,
		gdate: [2022, 10, 30],
		gdata: {
			gregorian: [2022, 9, 30]
		},
		gtime: 1667121383917
	},
	{
		sdate: [1401, 8, 9],
		sdata: {
			solar: [1401, 7, 9]
		},
		stime: 1667207783917,
		gdate: [2022, 10, 31],
		gdata: {
			gregorian: [2022, 9, 31]
		},
		gtime: 1667207783917
	},
	{
		sdate: [1401, 8, 10],
		sdata: {
			solar: [1401, 7, 10]
		},
		stime: 1667294183917,
		gdate: [2022, 11, 1],
		gdata: {
			gregorian: [2022, 10, 1]
		},
		gtime: 1667294183917
	},
	{
		sdate: [1401, 8, 11],
		sdata: {
			solar: [1401, 7, 11]
		},
		stime: 1667380583917,
		gdate: [2022, 11, 2],
		gdata: {
			gregorian: [2022, 10, 2]
		},
		gtime: 1667380583917
	},
	{
		sdate: [1401, 8, 12],
		sdata: {
			solar: [1401, 7, 12]
		},
		stime: 1667466983917,
		gdate: [2022, 11, 3],
		gdata: {
			gregorian: [2022, 10, 3]
		},
		gtime: 1667466983917
	},
	{
		sdate: [1401, 8, 13],
		sdata: {
			solar: [1401, 7, 13]
		},
		stime: 1667553383917,
		gdate: [2022, 11, 4],
		gdata: {
			gregorian: [2022, 10, 4]
		},
		gtime: 1667553383917
	},
	{
		sdate: [1401, 8, 14],
		sdata: {
			solar: [1401, 7, 14]
		},
		stime: 1667639783917,
		gdate: [2022, 11, 5],
		gdata: {
			gregorian: [2022, 10, 5]
		},
		gtime: 1667639783917
	},
	{
		sdate: [1401, 8, 15],
		sdata: {
			solar: [1401, 7, 15]
		},
		stime: 1667726183917,
		gdate: [2022, 11, 6],
		gdata: {
			gregorian: [2022, 10, 6]
		},
		gtime: 1667726183917
	},
	{
		sdate: [1401, 8, 16],
		sdata: {
			solar: [1401, 7, 16]
		},
		stime: 1667812583917,
		gdate: [2022, 11, 7],
		gdata: {
			gregorian: [2022, 10, 7]
		},
		gtime: 1667812583917
	},
	{
		sdate: [1401, 8, 17],
		sdata: {
			solar: [1401, 7, 17]
		},
		stime: 1667898983917,
		gdate: [2022, 11, 8],
		gdata: {
			gregorian: [2022, 10, 8]
		},
		gtime: 1667898983917
	},
	{
		sdate: [1401, 8, 18],
		sdata: {
			solar: [1401, 7, 18]
		},
		stime: 1667985383917,
		gdate: [2022, 11, 9],
		gdata: {
			gregorian: [2022, 10, 9]
		},
		gtime: 1667985383917
	},
	{
		sdate: [1401, 8, 19],
		sdata: {
			solar: [1401, 7, 19]
		},
		stime: 1668071783917,
		gdate: [2022, 11, 10],
		gdata: {
			gregorian: [2022, 10, 10]
		},
		gtime: 1668071783917
	},
	{
		sdate: [1401, 8, 20],
		sdata: {
			solar: [1401, 7, 20]
		},
		stime: 1668158183917,
		gdate: [2022, 11, 11],
		gdata: {
			gregorian: [2022, 10, 11]
		},
		gtime: 1668158183917
	},
	{
		sdate: [1401, 8, 21],
		sdata: {
			solar: [1401, 7, 21]
		},
		stime: 1668244583917,
		gdate: [2022, 11, 12],
		gdata: {
			gregorian: [2022, 10, 12]
		},
		gtime: 1668244583917
	},
	{
		sdate: [1401, 8, 22],
		sdata: {
			solar: [1401, 7, 22]
		},
		stime: 1668330983917,
		gdate: [2022, 11, 13],
		gdata: {
			gregorian: [2022, 10, 13]
		},
		gtime: 1668330983917
	},
	{
		sdate: [1401, 8, 23],
		sdata: {
			solar: [1401, 7, 23]
		},
		stime: 1668417383917,
		gdate: [2022, 11, 14],
		gdata: {
			gregorian: [2022, 10, 14]
		},
		gtime: 1668417383917
	},
	{
		sdate: [1401, 8, 24],
		sdata: {
			solar: [1401, 7, 24]
		},
		stime: 1668503783917,
		gdate: [2022, 11, 15],
		gdata: {
			gregorian: [2022, 10, 15]
		},
		gtime: 1668503783917
	},
	{
		sdate: [1401, 8, 25],
		sdata: {
			solar: [1401, 7, 25]
		},
		stime: 1668590183917,
		gdate: [2022, 11, 16],
		gdata: {
			gregorian: [2022, 10, 16]
		},
		gtime: 1668590183917
	},
	{
		sdate: [1401, 8, 26],
		sdata: {
			solar: [1401, 7, 26]
		},
		stime: 1668676583917,
		gdate: [2022, 11, 17],
		gdata: {
			gregorian: [2022, 10, 17]
		},
		gtime: 1668676583917
	},
	{
		sdate: [1401, 8, 27],
		sdata: {
			solar: [1401, 7, 27]
		},
		stime: 1668762983917,
		gdate: [2022, 11, 18],
		gdata: {
			gregorian: [2022, 10, 18]
		},
		gtime: 1668762983917
	},
	{
		sdate: [1401, 8, 28],
		sdata: {
			solar: [1401, 7, 28]
		},
		stime: 1668849383917,
		gdate: [2022, 11, 19],
		gdata: {
			gregorian: [2022, 10, 19]
		},
		gtime: 1668849383917
	},
	{
		sdate: [1401, 8, 29],
		sdata: {
			solar: [1401, 7, 29]
		},
		stime: 1668935783917,
		gdate: [2022, 11, 20],
		gdata: {
			gregorian: [2022, 10, 20]
		},
		gtime: 1668935783917
	},
	{
		sdate: [1401, 8, 30],
		sdata: {
			solar: [1401, 7, 30]
		},
		stime: 1669022183917,
		gdate: [2022, 11, 21],
		gdata: {
			gregorian: [2022, 10, 21]
		},
		gtime: 1669022183917
	},
	{
		sdate: [1401, 9, 1],
		sdata: {
			solar: [1401, 8, 1]
		},
		stime: 1669108583917,
		gdate: [2022, 11, 22],
		gdata: {
			gregorian: [2022, 10, 22]
		},
		gtime: 1669108583917
	},
	{
		sdate: [1401, 9, 2],
		sdata: {
			solar: [1401, 8, 2]
		},
		stime: 1669194983917,
		gdate: [2022, 11, 23],
		gdata: {
			gregorian: [2022, 10, 23]
		},
		gtime: 1669194983917
	},
	{
		sdate: [1401, 9, 3],
		sdata: {
			solar: [1401, 8, 3]
		},
		stime: 1669281383917,
		gdate: [2022, 11, 24],
		gdata: {
			gregorian: [2022, 10, 24]
		},
		gtime: 1669281383917
	},
	{
		sdate: [1401, 9, 4],
		sdata: {
			solar: [1401, 8, 4]
		},
		stime: 1669367783917,
		gdate: [2022, 11, 25],
		gdata: {
			gregorian: [2022, 10, 25]
		},
		gtime: 1669367783917
	},
	{
		sdate: [1401, 9, 5],
		sdata: {
			solar: [1401, 8, 5]
		},
		stime: 1669454183917,
		gdate: [2022, 11, 26],
		gdata: {
			gregorian: [2022, 10, 26]
		},
		gtime: 1669454183917
	},
	{
		sdate: [1401, 9, 6],
		sdata: {
			solar: [1401, 8, 6]
		},
		stime: 1669540583917,
		gdate: [2022, 11, 27],
		gdata: {
			gregorian: [2022, 10, 27]
		},
		gtime: 1669540583917
	},
	{
		sdate: [1401, 9, 7],
		sdata: {
			solar: [1401, 8, 7]
		},
		stime: 1669626983917,
		gdate: [2022, 11, 28],
		gdata: {
			gregorian: [2022, 10, 28]
		},
		gtime: 1669626983917
	},
	{
		sdate: [1401, 9, 8],
		sdata: {
			solar: [1401, 8, 8]
		},
		stime: 1669713383917,
		gdate: [2022, 11, 29],
		gdata: {
			gregorian: [2022, 10, 29]
		},
		gtime: 1669713383917
	},
	{
		sdate: [1401, 9, 9],
		sdata: {
			solar: [1401, 8, 9]
		},
		stime: 1669799783917,
		gdate: [2022, 11, 30],
		gdata: {
			gregorian: [2022, 10, 30]
		},
		gtime: 1669799783917
	},
	{
		sdate: [1401, 9, 10],
		sdata: {
			solar: [1401, 8, 10]
		},
		stime: 1669886183917,
		gdate: [2022, 12, 1],
		gdata: {
			gregorian: [2022, 11, 1]
		},
		gtime: 1669886183917
	},
	{
		sdate: [1401, 9, 11],
		sdata: {
			solar: [1401, 8, 11]
		},
		stime: 1669972583917,
		gdate: [2022, 12, 2],
		gdata: {
			gregorian: [2022, 11, 2]
		},
		gtime: 1669972583917
	},
	{
		sdate: [1401, 9, 12],
		sdata: {
			solar: [1401, 8, 12]
		},
		stime: 1670058983917,
		gdate: [2022, 12, 3],
		gdata: {
			gregorian: [2022, 11, 3]
		},
		gtime: 1670058983917
	},
	{
		sdate: [1401, 9, 13],
		sdata: {
			solar: [1401, 8, 13]
		},
		stime: 1670145383917,
		gdate: [2022, 12, 4],
		gdata: {
			gregorian: [2022, 11, 4]
		},
		gtime: 1670145383917
	},
	{
		sdate: [1401, 9, 14],
		sdata: {
			solar: [1401, 8, 14]
		},
		stime: 1670231783917,
		gdate: [2022, 12, 5],
		gdata: {
			gregorian: [2022, 11, 5]
		},
		gtime: 1670231783917
	},
	{
		sdate: [1401, 9, 15],
		sdata: {
			solar: [1401, 8, 15]
		},
		stime: 1670318183917,
		gdate: [2022, 12, 6],
		gdata: {
			gregorian: [2022, 11, 6]
		},
		gtime: 1670318183917
	},
	{
		sdate: [1401, 9, 16],
		sdata: {
			solar: [1401, 8, 16]
		},
		stime: 1670404583917,
		gdate: [2022, 12, 7],
		gdata: {
			gregorian: [2022, 11, 7]
		},
		gtime: 1670404583917
	},
	{
		sdate: [1401, 9, 17],
		sdata: {
			solar: [1401, 8, 17]
		},
		stime: 1670490983917,
		gdate: [2022, 12, 8],
		gdata: {
			gregorian: [2022, 11, 8]
		},
		gtime: 1670490983917
	},
	{
		sdate: [1401, 9, 18],
		sdata: {
			solar: [1401, 8, 18]
		},
		stime: 1670577383917,
		gdate: [2022, 12, 9],
		gdata: {
			gregorian: [2022, 11, 9]
		},
		gtime: 1670577383917
	},
	{
		sdate: [1401, 9, 19],
		sdata: {
			solar: [1401, 8, 19]
		},
		stime: 1670663783917,
		gdate: [2022, 12, 10],
		gdata: {
			gregorian: [2022, 11, 10]
		},
		gtime: 1670663783917
	},
	{
		sdate: [1401, 9, 20],
		sdata: {
			solar: [1401, 8, 20]
		},
		stime: 1670750183917,
		gdate: [2022, 12, 11],
		gdata: {
			gregorian: [2022, 11, 11]
		},
		gtime: 1670750183917
	},
	{
		sdate: [1401, 9, 21],
		sdata: {
			solar: [1401, 8, 21]
		},
		stime: 1670836583917,
		gdate: [2022, 12, 12],
		gdata: {
			gregorian: [2022, 11, 12]
		},
		gtime: 1670836583917
	},
	{
		sdate: [1401, 9, 22],
		sdata: {
			solar: [1401, 8, 22]
		},
		stime: 1670922983917,
		gdate: [2022, 12, 13],
		gdata: {
			gregorian: [2022, 11, 13]
		},
		gtime: 1670922983917
	},
	{
		sdate: [1401, 9, 23],
		sdata: {
			solar: [1401, 8, 23]
		},
		stime: 1671009383917,
		gdate: [2022, 12, 14],
		gdata: {
			gregorian: [2022, 11, 14]
		},
		gtime: 1671009383917
	},
	{
		sdate: [1401, 9, 24],
		sdata: {
			solar: [1401, 8, 24]
		},
		stime: 1671095783917,
		gdate: [2022, 12, 15],
		gdata: {
			gregorian: [2022, 11, 15]
		},
		gtime: 1671095783917
	},
	{
		sdate: [1401, 9, 25],
		sdata: {
			solar: [1401, 8, 25]
		},
		stime: 1671182183917,
		gdate: [2022, 12, 16],
		gdata: {
			gregorian: [2022, 11, 16]
		},
		gtime: 1671182183917
	},
	{
		sdate: [1401, 9, 26],
		sdata: {
			solar: [1401, 8, 26]
		},
		stime: 1671268583917,
		gdate: [2022, 12, 17],
		gdata: {
			gregorian: [2022, 11, 17]
		},
		gtime: 1671268583917
	},
	{
		sdate: [1401, 9, 27],
		sdata: {
			solar: [1401, 8, 27]
		},
		stime: 1671354983917,
		gdate: [2022, 12, 18],
		gdata: {
			gregorian: [2022, 11, 18]
		},
		gtime: 1671354983917
	},
	{
		sdate: [1401, 9, 28],
		sdata: {
			solar: [1401, 8, 28]
		},
		stime: 1671441383917,
		gdate: [2022, 12, 19],
		gdata: {
			gregorian: [2022, 11, 19]
		},
		gtime: 1671441383917
	},
	{
		sdate: [1401, 9, 29],
		sdata: {
			solar: [1401, 8, 29]
		},
		stime: 1671527783917,
		gdate: [2022, 12, 20],
		gdata: {
			gregorian: [2022, 11, 20]
		},
		gtime: 1671527783917
	},
	{
		sdate: [1401, 9, 30],
		sdata: {
			solar: [1401, 8, 30]
		},
		stime: 1671614183917,
		gdate: [2022, 12, 21],
		gdata: {
			gregorian: [2022, 11, 21]
		},
		gtime: 1671614183917
	},
	{
		sdate: [1401, 10, 1],
		sdata: {
			solar: [1401, 9, 1]
		},
		stime: 1671700583917,
		gdate: [2022, 12, 22],
		gdata: {
			gregorian: [2022, 11, 22]
		},
		gtime: 1671700583917
	},
	{
		sdate: [1401, 10, 2],
		sdata: {
			solar: [1401, 9, 2]
		},
		stime: 1671786983917,
		gdate: [2022, 12, 23],
		gdata: {
			gregorian: [2022, 11, 23]
		},
		gtime: 1671786983917
	},
	{
		sdate: [1401, 10, 3],
		sdata: {
			solar: [1401, 9, 3]
		},
		stime: 1671873383917,
		gdate: [2022, 12, 24],
		gdata: {
			gregorian: [2022, 11, 24]
		},
		gtime: 1671873383917
	},
	{
		sdate: [1401, 10, 4],
		sdata: {
			solar: [1401, 9, 4]
		},
		stime: 1671959783917,
		gdate: [2022, 12, 25],
		gdata: {
			gregorian: [2022, 11, 25]
		},
		gtime: 1671959783917
	},
	{
		sdate: [1401, 10, 5],
		sdata: {
			solar: [1401, 9, 5]
		},
		stime: 1672046183917,
		gdate: [2022, 12, 26],
		gdata: {
			gregorian: [2022, 11, 26]
		},
		gtime: 1672046183917
	},
	{
		sdate: [1401, 10, 6],
		sdata: {
			solar: [1401, 9, 6]
		},
		stime: 1672132583917,
		gdate: [2022, 12, 27],
		gdata: {
			gregorian: [2022, 11, 27]
		},
		gtime: 1672132583917
	},
	{
		sdate: [1401, 10, 7],
		sdata: {
			solar: [1401, 9, 7]
		},
		stime: 1672218983917,
		gdate: [2022, 12, 28],
		gdata: {
			gregorian: [2022, 11, 28]
		},
		gtime: 1672218983917
	},
	{
		sdate: [1401, 10, 8],
		sdata: {
			solar: [1401, 9, 8]
		},
		stime: 1672305383917,
		gdate: [2022, 12, 29],
		gdata: {
			gregorian: [2022, 11, 29]
		},
		gtime: 1672305383917
	},
	{
		sdate: [1401, 10, 9],
		sdata: {
			solar: [1401, 9, 9]
		},
		stime: 1672391783917,
		gdate: [2022, 12, 30],
		gdata: {
			gregorian: [2022, 11, 30]
		},
		gtime: 1672391783917
	},
	{
		sdate: [1401, 10, 10],
		sdata: {
			solar: [1401, 9, 10]
		},
		stime: 1672478183917,
		gdate: [2022, 12, 31],
		gdata: {
			gregorian: [2022, 11, 31]
		},
		gtime: 1672478183917
	},
	{
		sdate: [1401, 10, 11],
		sdata: {
			solar: [1401, 9, 11]
		},
		stime: 1672564583917,
		gdate: [2023, 1, 1],
		gdata: {
			gregorian: [2023, 0, 1]
		},
		gtime: 1672564583917
	},
	{
		sdate: [1401, 10, 12],
		sdata: {
			solar: [1401, 9, 12]
		},
		stime: 1672650983917,
		gdate: [2023, 1, 2],
		gdata: {
			gregorian: [2023, 0, 2]
		},
		gtime: 1672650983917
	},
	{
		sdate: [1401, 10, 13],
		sdata: {
			solar: [1401, 9, 13]
		},
		stime: 1672737383917,
		gdate: [2023, 1, 3],
		gdata: {
			gregorian: [2023, 0, 3]
		},
		gtime: 1672737383917
	},
	{
		sdate: [1401, 10, 14],
		sdata: {
			solar: [1401, 9, 14]
		},
		stime: 1672823783917,
		gdate: [2023, 1, 4],
		gdata: {
			gregorian: [2023, 0, 4]
		},
		gtime: 1672823783917
	},
	{
		sdate: [1401, 10, 15],
		sdata: {
			solar: [1401, 9, 15]
		},
		stime: 1672910183917,
		gdate: [2023, 1, 5],
		gdata: {
			gregorian: [2023, 0, 5]
		},
		gtime: 1672910183917
	},
	{
		sdate: [1401, 10, 16],
		sdata: {
			solar: [1401, 9, 16]
		},
		stime: 1672996583917,
		gdate: [2023, 1, 6],
		gdata: {
			gregorian: [2023, 0, 6]
		},
		gtime: 1672996583917
	},
	{
		sdate: [1401, 10, 17],
		sdata: {
			solar: [1401, 9, 17]
		},
		stime: 1673082983917,
		gdate: [2023, 1, 7],
		gdata: {
			gregorian: [2023, 0, 7]
		},
		gtime: 1673082983917
	},
	{
		sdate: [1401, 10, 18],
		sdata: {
			solar: [1401, 9, 18]
		},
		stime: 1673169383917,
		gdate: [2023, 1, 8],
		gdata: {
			gregorian: [2023, 0, 8]
		},
		gtime: 1673169383917
	},
	{
		sdate: [1401, 10, 19],
		sdata: {
			solar: [1401, 9, 19]
		},
		stime: 1673255783917,
		gdate: [2023, 1, 9],
		gdata: {
			gregorian: [2023, 0, 9]
		},
		gtime: 1673255783917
	},
	{
		sdate: [1401, 10, 20],
		sdata: {
			solar: [1401, 9, 20]
		},
		stime: 1673342183917,
		gdate: [2023, 1, 10],
		gdata: {
			gregorian: [2023, 0, 10]
		},
		gtime: 1673342183917
	},
	{
		sdate: [1401, 10, 21],
		sdata: {
			solar: [1401, 9, 21]
		},
		stime: 1673428583917,
		gdate: [2023, 1, 11],
		gdata: {
			gregorian: [2023, 0, 11]
		},
		gtime: 1673428583917
	},
	{
		sdate: [1401, 10, 22],
		sdata: {
			solar: [1401, 9, 22]
		},
		stime: 1673514983917,
		gdate: [2023, 1, 12],
		gdata: {
			gregorian: [2023, 0, 12]
		},
		gtime: 1673514983917
	},
	{
		sdate: [1401, 10, 23],
		sdata: {
			solar: [1401, 9, 23]
		},
		stime: 1673601383917,
		gdate: [2023, 1, 13],
		gdata: {
			gregorian: [2023, 0, 13]
		},
		gtime: 1673601383917
	},
	{
		sdate: [1401, 10, 24],
		sdata: {
			solar: [1401, 9, 24]
		},
		stime: 1673687783917,
		gdate: [2023, 1, 14],
		gdata: {
			gregorian: [2023, 0, 14]
		},
		gtime: 1673687783917
	},
	{
		sdate: [1401, 10, 25],
		sdata: {
			solar: [1401, 9, 25]
		},
		stime: 1673774183917,
		gdate: [2023, 1, 15],
		gdata: {
			gregorian: [2023, 0, 15]
		},
		gtime: 1673774183917
	},
	{
		sdate: [1401, 10, 26],
		sdata: {
			solar: [1401, 9, 26]
		},
		stime: 1673860583917,
		gdate: [2023, 1, 16],
		gdata: {
			gregorian: [2023, 0, 16]
		},
		gtime: 1673860583917
	},
	{
		sdate: [1401, 10, 27],
		sdata: {
			solar: [1401, 9, 27]
		},
		stime: 1673946983917,
		gdate: [2023, 1, 17],
		gdata: {
			gregorian: [2023, 0, 17]
		},
		gtime: 1673946983917
	},
	{
		sdate: [1401, 10, 28],
		sdata: {
			solar: [1401, 9, 28]
		},
		stime: 1674033383917,
		gdate: [2023, 1, 18],
		gdata: {
			gregorian: [2023, 0, 18]
		},
		gtime: 1674033383917
	},
	{
		sdate: [1401, 10, 29],
		sdata: {
			solar: [1401, 9, 29]
		},
		stime: 1674119783917,
		gdate: [2023, 1, 19],
		gdata: {
			gregorian: [2023, 0, 19]
		},
		gtime: 1674119783917
	},
	{
		sdate: [1401, 10, 30],
		sdata: {
			solar: [1401, 9, 30]
		},
		stime: 1674206183917,
		gdate: [2023, 1, 20],
		gdata: {
			gregorian: [2023, 0, 20]
		},
		gtime: 1674206183917
	},
	{
		sdate: [1401, 11, 1],
		sdata: {
			solar: [1401, 10, 1]
		},
		stime: 1674292583917,
		gdate: [2023, 1, 21],
		gdata: {
			gregorian: [2023, 0, 21]
		},
		gtime: 1674292583917
	},
	{
		sdate: [1401, 11, 2],
		sdata: {
			solar: [1401, 10, 2]
		},
		stime: 1674378983917,
		gdate: [2023, 1, 22],
		gdata: {
			gregorian: [2023, 0, 22]
		},
		gtime: 1674378983917
	},
	{
		sdate: [1401, 11, 3],
		sdata: {
			solar: [1401, 10, 3]
		},
		stime: 1674465383917,
		gdate: [2023, 1, 23],
		gdata: {
			gregorian: [2023, 0, 23]
		},
		gtime: 1674465383917
	},
	{
		sdate: [1401, 11, 4],
		sdata: {
			solar: [1401, 10, 4]
		},
		stime: 1674551783917,
		gdate: [2023, 1, 24],
		gdata: {
			gregorian: [2023, 0, 24]
		},
		gtime: 1674551783917
	},
	{
		sdate: [1401, 11, 5],
		sdata: {
			solar: [1401, 10, 5]
		},
		stime: 1674638183917,
		gdate: [2023, 1, 25],
		gdata: {
			gregorian: [2023, 0, 25]
		},
		gtime: 1674638183917
	},
	{
		sdate: [1401, 11, 6],
		sdata: {
			solar: [1401, 10, 6]
		},
		stime: 1674724583917,
		gdate: [2023, 1, 26],
		gdata: {
			gregorian: [2023, 0, 26]
		},
		gtime: 1674724583917
	},
	{
		sdate: [1401, 11, 7],
		sdata: {
			solar: [1401, 10, 7]
		},
		stime: 1674810983917,
		gdate: [2023, 1, 27],
		gdata: {
			gregorian: [2023, 0, 27]
		},
		gtime: 1674810983917
	},
	{
		sdate: [1401, 11, 8],
		sdata: {
			solar: [1401, 10, 8]
		},
		stime: 1674897383917,
		gdate: [2023, 1, 28],
		gdata: {
			gregorian: [2023, 0, 28]
		},
		gtime: 1674897383917
	},
	{
		sdate: [1401, 11, 9],
		sdata: {
			solar: [1401, 10, 9]
		},
		stime: 1674983783917,
		gdate: [2023, 1, 29],
		gdata: {
			gregorian: [2023, 0, 29]
		},
		gtime: 1674983783917
	},
	{
		sdate: [1401, 11, 10],
		sdata: {
			solar: [1401, 10, 10]
		},
		stime: 1675070183917,
		gdate: [2023, 1, 30],
		gdata: {
			gregorian: [2023, 0, 30]
		},
		gtime: 1675070183917
	},
	{
		sdate: [1401, 11, 11],
		sdata: {
			solar: [1401, 10, 11]
		},
		stime: 1675156583917,
		gdate: [2023, 1, 31],
		gdata: {
			gregorian: [2023, 0, 31]
		},
		gtime: 1675156583917
	},
	{
		sdate: [1401, 11, 12],
		sdata: {
			solar: [1401, 10, 12]
		},
		stime: 1675242983917,
		gdate: [2023, 2, 1],
		gdata: {
			gregorian: [2023, 1, 1]
		},
		gtime: 1675242983917
	},
	{
		sdate: [1401, 11, 13],
		sdata: {
			solar: [1401, 10, 13]
		},
		stime: 1675329383917,
		gdate: [2023, 2, 2],
		gdata: {
			gregorian: [2023, 1, 2]
		},
		gtime: 1675329383917
	},
	{
		sdate: [1401, 11, 14],
		sdata: {
			solar: [1401, 10, 14]
		},
		stime: 1675415783917,
		gdate: [2023, 2, 3],
		gdata: {
			gregorian: [2023, 1, 3]
		},
		gtime: 1675415783917
	},
	{
		sdate: [1401, 11, 15],
		sdata: {
			solar: [1401, 10, 15]
		},
		stime: 1675502183917,
		gdate: [2023, 2, 4],
		gdata: {
			gregorian: [2023, 1, 4]
		},
		gtime: 1675502183917
	},
	{
		sdate: [1401, 11, 16],
		sdata: {
			solar: [1401, 10, 16]
		},
		stime: 1675588583917,
		gdate: [2023, 2, 5],
		gdata: {
			gregorian: [2023, 1, 5]
		},
		gtime: 1675588583917
	},
	{
		sdate: [1401, 11, 17],
		sdata: {
			solar: [1401, 10, 17]
		},
		stime: 1675674983917,
		gdate: [2023, 2, 6],
		gdata: {
			gregorian: [2023, 1, 6]
		},
		gtime: 1675674983917
	},
	{
		sdate: [1401, 11, 18],
		sdata: {
			solar: [1401, 10, 18]
		},
		stime: 1675761383917,
		gdate: [2023, 2, 7],
		gdata: {
			gregorian: [2023, 1, 7]
		},
		gtime: 1675761383917
	},
	{
		sdate: [1401, 11, 19],
		sdata: {
			solar: [1401, 10, 19]
		},
		stime: 1675847783917,
		gdate: [2023, 2, 8],
		gdata: {
			gregorian: [2023, 1, 8]
		},
		gtime: 1675847783917
	},
	{
		sdate: [1401, 11, 20],
		sdata: {
			solar: [1401, 10, 20]
		},
		stime: 1675934183917,
		gdate: [2023, 2, 9],
		gdata: {
			gregorian: [2023, 1, 9]
		},
		gtime: 1675934183917
	},
	{
		sdate: [1401, 11, 21],
		sdata: {
			solar: [1401, 10, 21]
		},
		stime: 1676020583917,
		gdate: [2023, 2, 10],
		gdata: {
			gregorian: [2023, 1, 10]
		},
		gtime: 1676020583917
	},
	{
		sdate: [1401, 11, 22],
		sdata: {
			solar: [1401, 10, 22]
		},
		stime: 1676106983917,
		gdate: [2023, 2, 11],
		gdata: {
			gregorian: [2023, 1, 11]
		},
		gtime: 1676106983917
	},
	{
		sdate: [1401, 11, 23],
		sdata: {
			solar: [1401, 10, 23]
		},
		stime: 1676193383917,
		gdate: [2023, 2, 12],
		gdata: {
			gregorian: [2023, 1, 12]
		},
		gtime: 1676193383917
	},
	{
		sdate: [1401, 11, 24],
		sdata: {
			solar: [1401, 10, 24]
		},
		stime: 1676279783917,
		gdate: [2023, 2, 13],
		gdata: {
			gregorian: [2023, 1, 13]
		},
		gtime: 1676279783917
	},
	{
		sdate: [1401, 11, 25],
		sdata: {
			solar: [1401, 10, 25]
		},
		stime: 1676366183917,
		gdate: [2023, 2, 14],
		gdata: {
			gregorian: [2023, 1, 14]
		},
		gtime: 1676366183917
	},
	{
		sdate: [1401, 11, 26],
		sdata: {
			solar: [1401, 10, 26]
		},
		stime: 1676452583917,
		gdate: [2023, 2, 15],
		gdata: {
			gregorian: [2023, 1, 15]
		},
		gtime: 1676452583917
	},
	{
		sdate: [1401, 11, 27],
		sdata: {
			solar: [1401, 10, 27]
		},
		stime: 1676538983917,
		gdate: [2023, 2, 16],
		gdata: {
			gregorian: [2023, 1, 16]
		},
		gtime: 1676538983917
	},
	{
		sdate: [1401, 11, 28],
		sdata: {
			solar: [1401, 10, 28]
		},
		stime: 1676625383917,
		gdate: [2023, 2, 17],
		gdata: {
			gregorian: [2023, 1, 17]
		},
		gtime: 1676625383917
	},
	{
		sdate: [1401, 11, 29],
		sdata: {
			solar: [1401, 10, 29]
		},
		stime: 1676711783917,
		gdate: [2023, 2, 18],
		gdata: {
			gregorian: [2023, 1, 18]
		},
		gtime: 1676711783917
	},
	{
		sdate: [1401, 11, 30],
		sdata: {
			solar: [1401, 10, 30]
		},
		stime: 1676798183917,
		gdate: [2023, 2, 19],
		gdata: {
			gregorian: [2023, 1, 19]
		},
		gtime: 1676798183917
	},
	{
		sdate: [1401, 12, 1],
		sdata: {
			solar: [1401, 11, 1]
		},
		stime: 1676884583917,
		gdate: [2023, 2, 20],
		gdata: {
			gregorian: [2023, 1, 20]
		},
		gtime: 1676884583917
	},
	{
		sdate: [1401, 12, 2],
		sdata: {
			solar: [1401, 11, 2]
		},
		stime: 1676970983917,
		gdate: [2023, 2, 21],
		gdata: {
			gregorian: [2023, 1, 21]
		},
		gtime: 1676970983917
	},
	{
		sdate: [1401, 12, 3],
		sdata: {
			solar: [1401, 11, 3]
		},
		stime: 1677057383917,
		gdate: [2023, 2, 22],
		gdata: {
			gregorian: [2023, 1, 22]
		},
		gtime: 1677057383917
	},
	{
		sdate: [1401, 12, 4],
		sdata: {
			solar: [1401, 11, 4]
		},
		stime: 1677143783917,
		gdate: [2023, 2, 23],
		gdata: {
			gregorian: [2023, 1, 23]
		},
		gtime: 1677143783917
	},
	{
		sdate: [1401, 12, 5],
		sdata: {
			solar: [1401, 11, 5]
		},
		stime: 1677230183917,
		gdate: [2023, 2, 24],
		gdata: {
			gregorian: [2023, 1, 24]
		},
		gtime: 1677230183917
	},
	{
		sdate: [1401, 12, 6],
		sdata: {
			solar: [1401, 11, 6]
		},
		stime: 1677316583917,
		gdate: [2023, 2, 25],
		gdata: {
			gregorian: [2023, 1, 25]
		},
		gtime: 1677316583917
	},
	{
		sdate: [1401, 12, 7],
		sdata: {
			solar: [1401, 11, 7]
		},
		stime: 1677402983917,
		gdate: [2023, 2, 26],
		gdata: {
			gregorian: [2023, 1, 26]
		},
		gtime: 1677402983917
	},
	{
		sdate: [1401, 12, 8],
		sdata: {
			solar: [1401, 11, 8]
		},
		stime: 1677489383917,
		gdate: [2023, 2, 27],
		gdata: {
			gregorian: [2023, 1, 27]
		},
		gtime: 1677489383917
	},
	{
		sdate: [1401, 12, 9],
		sdata: {
			solar: [1401, 11, 9]
		},
		stime: 1677575783917,
		gdate: [2023, 2, 28],
		gdata: {
			gregorian: [2023, 1, 28]
		},
		gtime: 1677575783917
	},
	{
		sdate: [1401, 12, 10],
		sdata: {
			solar: [1401, 11, 10]
		},
		stime: 1677662183917,
		gdate: [2023, 3, 1],
		gdata: {
			gregorian: [2023, 2, 1]
		},
		gtime: 1677662183917
	},
	{
		sdate: [1401, 12, 11],
		sdata: {
			solar: [1401, 11, 11]
		},
		stime: 1677748583917,
		gdate: [2023, 3, 2],
		gdata: {
			gregorian: [2023, 2, 2]
		},
		gtime: 1677748583917
	},
	{
		sdate: [1401, 12, 12],
		sdata: {
			solar: [1401, 11, 12]
		},
		stime: 1677834983917,
		gdate: [2023, 3, 3],
		gdata: {
			gregorian: [2023, 2, 3]
		},
		gtime: 1677834983917
	},
	{
		sdate: [1401, 12, 13],
		sdata: {
			solar: [1401, 11, 13]
		},
		stime: 1677921383917,
		gdate: [2023, 3, 4],
		gdata: {
			gregorian: [2023, 2, 4]
		},
		gtime: 1677921383917
	},
	{
		sdate: [1401, 12, 14],
		sdata: {
			solar: [1401, 11, 14]
		},
		stime: 1678007783917,
		gdate: [2023, 3, 5],
		gdata: {
			gregorian: [2023, 2, 5]
		},
		gtime: 1678007783917
	},
	{
		sdate: [1401, 12, 15],
		sdata: {
			solar: [1401, 11, 15]
		},
		stime: 1678094183917,
		gdate: [2023, 3, 6],
		gdata: {
			gregorian: [2023, 2, 6]
		},
		gtime: 1678094183917
	},
	{
		sdate: [1401, 12, 16],
		sdata: {
			solar: [1401, 11, 16]
		},
		stime: 1678180583917,
		gdate: [2023, 3, 7],
		gdata: {
			gregorian: [2023, 2, 7]
		},
		gtime: 1678180583917
	},
	{
		sdate: [1401, 12, 17],
		sdata: {
			solar: [1401, 11, 17]
		},
		stime: 1678266983917,
		gdate: [2023, 3, 8],
		gdata: {
			gregorian: [2023, 2, 8]
		},
		gtime: 1678266983917
	},
	{
		sdate: [1401, 12, 18],
		sdata: {
			solar: [1401, 11, 18]
		},
		stime: 1678353383917,
		gdate: [2023, 3, 9],
		gdata: {
			gregorian: [2023, 2, 9]
		},
		gtime: 1678353383917
	},
	{
		sdate: [1401, 12, 19],
		sdata: {
			solar: [1401, 11, 19]
		},
		stime: 1678439783917,
		gdate: [2023, 3, 10],
		gdata: {
			gregorian: [2023, 2, 10]
		},
		gtime: 1678439783917
	},
	{
		sdate: [1401, 12, 20],
		sdata: {
			solar: [1401, 11, 20]
		},
		stime: 1678526183917,
		gdate: [2023, 3, 11],
		gdata: {
			gregorian: [2023, 2, 11]
		},
		gtime: 1678526183917
	},
	{
		sdate: [1401, 12, 21],
		sdata: {
			solar: [1401, 11, 21]
		},
		stime: 1678612583917,
		gdate: [2023, 3, 12],
		gdata: {
			gregorian: [2023, 2, 12]
		},
		gtime: 1678612583917
	},
	{
		sdate: [1401, 12, 22],
		sdata: {
			solar: [1401, 11, 22]
		},
		stime: 1678698983917,
		gdate: [2023, 3, 13],
		gdata: {
			gregorian: [2023, 2, 13]
		},
		gtime: 1678698983917
	},
	{
		sdate: [1401, 12, 23],
		sdata: {
			solar: [1401, 11, 23]
		},
		stime: 1678785383917,
		gdate: [2023, 3, 14],
		gdata: {
			gregorian: [2023, 2, 14]
		},
		gtime: 1678785383917
	},
	{
		sdate: [1401, 12, 24],
		sdata: {
			solar: [1401, 11, 24]
		},
		stime: 1678871783917,
		gdate: [2023, 3, 15],
		gdata: {
			gregorian: [2023, 2, 15]
		},
		gtime: 1678871783917
	},
	{
		sdate: [1401, 12, 25],
		sdata: {
			solar: [1401, 11, 25]
		},
		stime: 1678958183917,
		gdate: [2023, 3, 16],
		gdata: {
			gregorian: [2023, 2, 16]
		},
		gtime: 1678958183917
	},
	{
		sdate: [1401, 12, 26],
		sdata: {
			solar: [1401, 11, 26]
		},
		stime: 1679044583917,
		gdate: [2023, 3, 17],
		gdata: {
			gregorian: [2023, 2, 17]
		},
		gtime: 1679044583917
	},
	{
		sdate: [1401, 12, 27],
		sdata: {
			solar: [1401, 11, 27]
		},
		stime: 1679130983917,
		gdate: [2023, 3, 18],
		gdata: {
			gregorian: [2023, 2, 18]
		},
		gtime: 1679130983917
	},
	{
		sdate: [1401, 12, 28],
		sdata: {
			solar: [1401, 11, 28]
		},
		stime: 1679217383917,
		gdate: [2023, 3, 19],
		gdata: {
			gregorian: [2023, 2, 19]
		},
		gtime: 1679217383917
	},
	{
		sdate: [1401, 12, 29],
		sdata: {
			solar: [1401, 11, 29]
		},
		stime: 1679303783917,
		gdate: [2023, 3, 20],
		gdata: {
			gregorian: [2023, 2, 20]
		},
		gtime: 1679303783917
	},
	{
		sdate: [1402, 1, 1],
		sdata: {
			solar: [1402, 0, 1]
		},
		stime: 1679390183917,
		gdate: [2023, 3, 21],
		gdata: {
			gregorian: [2023, 2, 21]
		},
		gtime: 1679390183917
	},
	{
		sdate: [1402, 1, 2],
		sdata: {
			solar: [1402, 0, 2]
		},
		stime: 1679476583917,
		gdate: [2023, 3, 22],
		gdata: {
			gregorian: [2023, 2, 22]
		},
		gtime: 1679476583917
	},
	{
		sdate: [1402, 1, 3],
		sdata: {
			solar: [1402, 0, 3]
		},
		stime: 1679562983917,
		gdate: [2023, 3, 23],
		gdata: {
			gregorian: [2023, 2, 23]
		},
		gtime: 1679562983917
	},
	{
		sdate: [1402, 1, 4],
		sdata: {
			solar: [1402, 0, 4]
		},
		stime: 1679649383917,
		gdate: [2023, 3, 24],
		gdata: {
			gregorian: [2023, 2, 24]
		},
		gtime: 1679649383917
	},
	{
		sdate: [1402, 1, 5],
		sdata: {
			solar: [1402, 0, 5]
		},
		stime: 1679735783917,
		gdate: [2023, 3, 25],
		gdata: {
			gregorian: [2023, 2, 25]
		},
		gtime: 1679735783917
	},
	{
		sdate: [1402, 1, 6],
		sdata: {
			solar: [1402, 0, 6]
		},
		stime: 1679822183917,
		gdate: [2023, 3, 26],
		gdata: {
			gregorian: [2023, 2, 26]
		},
		gtime: 1679822183917
	},
	{
		sdate: [1402, 1, 7],
		sdata: {
			solar: [1402, 0, 7]
		},
		stime: 1679908583917,
		gdate: [2023, 3, 27],
		gdata: {
			gregorian: [2023, 2, 27]
		},
		gtime: 1679908583917
	},
	{
		sdate: [1402, 1, 8],
		sdata: {
			solar: [1402, 0, 8]
		},
		stime: 1679994983917,
		gdate: [2023, 3, 28],
		gdata: {
			gregorian: [2023, 2, 28]
		},
		gtime: 1679994983917
	},
	{
		sdate: [1402, 1, 9],
		sdata: {
			solar: [1402, 0, 9]
		},
		stime: 1680081383917,
		gdate: [2023, 3, 29],
		gdata: {
			gregorian: [2023, 2, 29]
		},
		gtime: 1680081383917
	},
	{
		sdate: [1402, 1, 10],
		sdata: {
			solar: [1402, 0, 10]
		},
		stime: 1680167783917,
		gdate: [2023, 3, 30],
		gdata: {
			gregorian: [2023, 2, 30]
		},
		gtime: 1680167783917
	},
	{
		sdate: [1402, 1, 11],
		sdata: {
			solar: [1402, 0, 11]
		},
		stime: 1680254183917,
		gdate: [2023, 3, 31],
		gdata: {
			gregorian: [2023, 2, 31]
		},
		gtime: 1680254183917
	},
	{
		sdate: [1402, 1, 12],
		sdata: {
			solar: [1402, 0, 12]
		},
		stime: 1680340583917,
		gdate: [2023, 4, 1],
		gdata: {
			gregorian: [2023, 3, 1]
		},
		gtime: 1680340583917
	},
	{
		sdate: [1402, 1, 13],
		sdata: {
			solar: [1402, 0, 13]
		},
		stime: 1680426983917,
		gdate: [2023, 4, 2],
		gdata: {
			gregorian: [2023, 3, 2]
		},
		gtime: 1680426983917
	},
	{
		sdate: [1402, 1, 14],
		sdata: {
			solar: [1402, 0, 14]
		},
		stime: 1680513383917,
		gdate: [2023, 4, 3],
		gdata: {
			gregorian: [2023, 3, 3]
		},
		gtime: 1680513383917
	},
	{
		sdate: [1402, 1, 15],
		sdata: {
			solar: [1402, 0, 15]
		},
		stime: 1680599783917,
		gdate: [2023, 4, 4],
		gdata: {
			gregorian: [2023, 3, 4]
		},
		gtime: 1680599783917
	},
	{
		sdate: [1402, 1, 16],
		sdata: {
			solar: [1402, 0, 16]
		},
		stime: 1680686183917,
		gdate: [2023, 4, 5],
		gdata: {
			gregorian: [2023, 3, 5]
		},
		gtime: 1680686183917
	},
	{
		sdate: [1402, 1, 17],
		sdata: {
			solar: [1402, 0, 17]
		},
		stime: 1680772583917,
		gdate: [2023, 4, 6],
		gdata: {
			gregorian: [2023, 3, 6]
		},
		gtime: 1680772583917
	},
	{
		sdate: [1402, 1, 18],
		sdata: {
			solar: [1402, 0, 18]
		},
		stime: 1680858983917,
		gdate: [2023, 4, 7],
		gdata: {
			gregorian: [2023, 3, 7]
		},
		gtime: 1680858983917
	},
	{
		sdate: [1402, 1, 19],
		sdata: {
			solar: [1402, 0, 19]
		},
		stime: 1680945383917,
		gdate: [2023, 4, 8],
		gdata: {
			gregorian: [2023, 3, 8]
		},
		gtime: 1680945383917
	},
	{
		sdate: [1402, 1, 20],
		sdata: {
			solar: [1402, 0, 20]
		},
		stime: 1681031783917,
		gdate: [2023, 4, 9],
		gdata: {
			gregorian: [2023, 3, 9]
		},
		gtime: 1681031783917
	},
	{
		sdate: [1402, 1, 21],
		sdata: {
			solar: [1402, 0, 21]
		},
		stime: 1681118183917,
		gdate: [2023, 4, 10],
		gdata: {
			gregorian: [2023, 3, 10]
		},
		gtime: 1681118183917
	},
	{
		sdate: [1402, 1, 22],
		sdata: {
			solar: [1402, 0, 22]
		},
		stime: 1681204583917,
		gdate: [2023, 4, 11],
		gdata: {
			gregorian: [2023, 3, 11]
		},
		gtime: 1681204583917
	},
	{
		sdate: [1402, 1, 23],
		sdata: {
			solar: [1402, 0, 23]
		},
		stime: 1681290983917,
		gdate: [2023, 4, 12],
		gdata: {
			gregorian: [2023, 3, 12]
		},
		gtime: 1681290983917
	},
	{
		sdate: [1402, 1, 24],
		sdata: {
			solar: [1402, 0, 24]
		},
		stime: 1681377383917,
		gdate: [2023, 4, 13],
		gdata: {
			gregorian: [2023, 3, 13]
		},
		gtime: 1681377383917
	},
	{
		sdate: [1402, 1, 25],
		sdata: {
			solar: [1402, 0, 25]
		},
		stime: 1681463783917,
		gdate: [2023, 4, 14],
		gdata: {
			gregorian: [2023, 3, 14]
		},
		gtime: 1681463783917
	},
	{
		sdate: [1402, 1, 26],
		sdata: {
			solar: [1402, 0, 26]
		},
		stime: 1681550183917,
		gdate: [2023, 4, 15],
		gdata: {
			gregorian: [2023, 3, 15]
		},
		gtime: 1681550183917
	},
	{
		sdate: [1402, 1, 27],
		sdata: {
			solar: [1402, 0, 27]
		},
		stime: 1681636583917,
		gdate: [2023, 4, 16],
		gdata: {
			gregorian: [2023, 3, 16]
		},
		gtime: 1681636583917
	},
	{
		sdate: [1402, 1, 28],
		sdata: {
			solar: [1402, 0, 28]
		},
		stime: 1681722983917,
		gdate: [2023, 4, 17],
		gdata: {
			gregorian: [2023, 3, 17]
		},
		gtime: 1681722983917
	},
	{
		sdate: [1402, 1, 29],
		sdata: {
			solar: [1402, 0, 29]
		},
		stime: 1681809383917,
		gdate: [2023, 4, 18],
		gdata: {
			gregorian: [2023, 3, 18]
		},
		gtime: 1681809383917
	},
	{
		sdate: [1402, 1, 30],
		sdata: {
			solar: [1402, 0, 30]
		},
		stime: 1681895783917,
		gdate: [2023, 4, 19],
		gdata: {
			gregorian: [2023, 3, 19]
		},
		gtime: 1681895783917
	},
	{
		sdate: [1402, 1, 31],
		sdata: {
			solar: [1402, 0, 31]
		},
		stime: 1681982183917,
		gdate: [2023, 4, 20],
		gdata: {
			gregorian: [2023, 3, 20]
		},
		gtime: 1681982183917
	},
	{
		sdate: [1402, 2, 1],
		sdata: {
			solar: [1402, 1, 1]
		},
		stime: 1682068583917,
		gdate: [2023, 4, 21],
		gdata: {
			gregorian: [2023, 3, 21]
		},
		gtime: 1682068583917
	},
	{
		sdate: [1402, 2, 2],
		sdata: {
			solar: [1402, 1, 2]
		},
		stime: 1682154983917,
		gdate: [2023, 4, 22],
		gdata: {
			gregorian: [2023, 3, 22]
		},
		gtime: 1682154983917
	},
	{
		sdate: [1402, 2, 3],
		sdata: {
			solar: [1402, 1, 3]
		},
		stime: 1682241383917,
		gdate: [2023, 4, 23],
		gdata: {
			gregorian: [2023, 3, 23]
		},
		gtime: 1682241383917
	},
	{
		sdate: [1402, 2, 4],
		sdata: {
			solar: [1402, 1, 4]
		},
		stime: 1682327783917,
		gdate: [2023, 4, 24],
		gdata: {
			gregorian: [2023, 3, 24]
		},
		gtime: 1682327783917
	},
	{
		sdate: [1402, 2, 5],
		sdata: {
			solar: [1402, 1, 5]
		},
		stime: 1682414183917,
		gdate: [2023, 4, 25],
		gdata: {
			gregorian: [2023, 3, 25]
		},
		gtime: 1682414183917
	},
	{
		sdate: [1402, 2, 6],
		sdata: {
			solar: [1402, 1, 6]
		},
		stime: 1682500583917,
		gdate: [2023, 4, 26],
		gdata: {
			gregorian: [2023, 3, 26]
		},
		gtime: 1682500583917
	},
	{
		sdate: [1402, 2, 7],
		sdata: {
			solar: [1402, 1, 7]
		},
		stime: 1682586983917,
		gdate: [2023, 4, 27],
		gdata: {
			gregorian: [2023, 3, 27]
		},
		gtime: 1682586983917
	},
	{
		sdate: [1402, 2, 8],
		sdata: {
			solar: [1402, 1, 8]
		},
		stime: 1682673383917,
		gdate: [2023, 4, 28],
		gdata: {
			gregorian: [2023, 3, 28]
		},
		gtime: 1682673383917
	},
	{
		sdate: [1402, 2, 9],
		sdata: {
			solar: [1402, 1, 9]
		},
		stime: 1682759783917,
		gdate: [2023, 4, 29],
		gdata: {
			gregorian: [2023, 3, 29]
		},
		gtime: 1682759783917
	},
	{
		sdate: [1402, 2, 10],
		sdata: {
			solar: [1402, 1, 10]
		},
		stime: 1682846183917,
		gdate: [2023, 4, 30],
		gdata: {
			gregorian: [2023, 3, 30]
		},
		gtime: 1682846183917
	},
	{
		sdate: [1402, 2, 11],
		sdata: {
			solar: [1402, 1, 11]
		},
		stime: 1682932583917,
		gdate: [2023, 5, 1],
		gdata: {
			gregorian: [2023, 4, 1]
		},
		gtime: 1682932583917
	},
	{
		sdate: [1402, 2, 12],
		sdata: {
			solar: [1402, 1, 12]
		},
		stime: 1683018983917,
		gdate: [2023, 5, 2],
		gdata: {
			gregorian: [2023, 4, 2]
		},
		gtime: 1683018983917
	},
	{
		sdate: [1402, 2, 13],
		sdata: {
			solar: [1402, 1, 13]
		},
		stime: 1683105383917,
		gdate: [2023, 5, 3],
		gdata: {
			gregorian: [2023, 4, 3]
		},
		gtime: 1683105383917
	},
	{
		sdate: [1402, 2, 14],
		sdata: {
			solar: [1402, 1, 14]
		},
		stime: 1683191783917,
		gdate: [2023, 5, 4],
		gdata: {
			gregorian: [2023, 4, 4]
		},
		gtime: 1683191783917
	},
	{
		sdate: [1402, 2, 15],
		sdata: {
			solar: [1402, 1, 15]
		},
		stime: 1683278183917,
		gdate: [2023, 5, 5],
		gdata: {
			gregorian: [2023, 4, 5]
		},
		gtime: 1683278183917
	},
	{
		sdate: [1402, 2, 16],
		sdata: {
			solar: [1402, 1, 16]
		},
		stime: 1683364583917,
		gdate: [2023, 5, 6],
		gdata: {
			gregorian: [2023, 4, 6]
		},
		gtime: 1683364583917
	},
	{
		sdate: [1402, 2, 17],
		sdata: {
			solar: [1402, 1, 17]
		},
		stime: 1683450983917,
		gdate: [2023, 5, 7],
		gdata: {
			gregorian: [2023, 4, 7]
		},
		gtime: 1683450983917
	},
	{
		sdate: [1402, 2, 18],
		sdata: {
			solar: [1402, 1, 18]
		},
		stime: 1683537383917,
		gdate: [2023, 5, 8],
		gdata: {
			gregorian: [2023, 4, 8]
		},
		gtime: 1683537383917
	},
	{
		sdate: [1402, 2, 19],
		sdata: {
			solar: [1402, 1, 19]
		},
		stime: 1683623783917,
		gdate: [2023, 5, 9],
		gdata: {
			gregorian: [2023, 4, 9]
		},
		gtime: 1683623783917
	},
	{
		sdate: [1402, 2, 20],
		sdata: {
			solar: [1402, 1, 20]
		},
		stime: 1683710183917,
		gdate: [2023, 5, 10],
		gdata: {
			gregorian: [2023, 4, 10]
		},
		gtime: 1683710183917
	},
	{
		sdate: [1402, 2, 21],
		sdata: {
			solar: [1402, 1, 21]
		},
		stime: 1683796583917,
		gdate: [2023, 5, 11],
		gdata: {
			gregorian: [2023, 4, 11]
		},
		gtime: 1683796583917
	},
	{
		sdate: [1402, 2, 22],
		sdata: {
			solar: [1402, 1, 22]
		},
		stime: 1683882983917,
		gdate: [2023, 5, 12],
		gdata: {
			gregorian: [2023, 4, 12]
		},
		gtime: 1683882983917
	},
	{
		sdate: [1402, 2, 23],
		sdata: {
			solar: [1402, 1, 23]
		},
		stime: 1683969383917,
		gdate: [2023, 5, 13],
		gdata: {
			gregorian: [2023, 4, 13]
		},
		gtime: 1683969383917
	},
	{
		sdate: [1402, 2, 24],
		sdata: {
			solar: [1402, 1, 24]
		},
		stime: 1684055783917,
		gdate: [2023, 5, 14],
		gdata: {
			gregorian: [2023, 4, 14]
		},
		gtime: 1684055783917
	},
	{
		sdate: [1402, 2, 25],
		sdata: {
			solar: [1402, 1, 25]
		},
		stime: 1684142183917,
		gdate: [2023, 5, 15],
		gdata: {
			gregorian: [2023, 4, 15]
		},
		gtime: 1684142183917
	},
	{
		sdate: [1402, 2, 26],
		sdata: {
			solar: [1402, 1, 26]
		},
		stime: 1684228583917,
		gdate: [2023, 5, 16],
		gdata: {
			gregorian: [2023, 4, 16]
		},
		gtime: 1684228583917
	},
	{
		sdate: [1402, 2, 27],
		sdata: {
			solar: [1402, 1, 27]
		},
		stime: 1684314983917,
		gdate: [2023, 5, 17],
		gdata: {
			gregorian: [2023, 4, 17]
		},
		gtime: 1684314983917
	},
	{
		sdate: [1402, 2, 28],
		sdata: {
			solar: [1402, 1, 28]
		},
		stime: 1684401383917,
		gdate: [2023, 5, 18],
		gdata: {
			gregorian: [2023, 4, 18]
		},
		gtime: 1684401383917
	},
	{
		sdate: [1402, 2, 29],
		sdata: {
			solar: [1402, 1, 29]
		},
		stime: 1684487783917,
		gdate: [2023, 5, 19],
		gdata: {
			gregorian: [2023, 4, 19]
		},
		gtime: 1684487783917
	},
	{
		sdate: [1402, 2, 30],
		sdata: {
			solar: [1402, 1, 30]
		},
		stime: 1684574183917,
		gdate: [2023, 5, 20],
		gdata: {
			gregorian: [2023, 4, 20]
		},
		gtime: 1684574183917
	},
	{
		sdate: [1402, 2, 31],
		sdata: {
			solar: [1402, 1, 31]
		},
		stime: 1684660583917,
		gdate: [2023, 5, 21],
		gdata: {
			gregorian: [2023, 4, 21]
		},
		gtime: 1684660583917
	},
	{
		sdate: [1402, 3, 1],
		sdata: {
			solar: [1402, 2, 1]
		},
		stime: 1684746983917,
		gdate: [2023, 5, 22],
		gdata: {
			gregorian: [2023, 4, 22]
		},
		gtime: 1684746983917
	},
	{
		sdate: [1402, 3, 2],
		sdata: {
			solar: [1402, 2, 2]
		},
		stime: 1684833383917,
		gdate: [2023, 5, 23],
		gdata: {
			gregorian: [2023, 4, 23]
		},
		gtime: 1684833383917
	},
	{
		sdate: [1402, 3, 3],
		sdata: {
			solar: [1402, 2, 3]
		},
		stime: 1684919783917,
		gdate: [2023, 5, 24],
		gdata: {
			gregorian: [2023, 4, 24]
		},
		gtime: 1684919783917
	},
	{
		sdate: [1402, 3, 4],
		sdata: {
			solar: [1402, 2, 4]
		},
		stime: 1685006183917,
		gdate: [2023, 5, 25],
		gdata: {
			gregorian: [2023, 4, 25]
		},
		gtime: 1685006183917
	},
	{
		sdate: [1402, 3, 5],
		sdata: {
			solar: [1402, 2, 5]
		},
		stime: 1685092583917,
		gdate: [2023, 5, 26],
		gdata: {
			gregorian: [2023, 4, 26]
		},
		gtime: 1685092583917
	},
	{
		sdate: [1402, 3, 6],
		sdata: {
			solar: [1402, 2, 6]
		},
		stime: 1685178983917,
		gdate: [2023, 5, 27],
		gdata: {
			gregorian: [2023, 4, 27]
		},
		gtime: 1685178983917
	},
	{
		sdate: [1402, 3, 7],
		sdata: {
			solar: [1402, 2, 7]
		},
		stime: 1685265383917,
		gdate: [2023, 5, 28],
		gdata: {
			gregorian: [2023, 4, 28]
		},
		gtime: 1685265383917
	},
	{
		sdate: [1402, 3, 8],
		sdata: {
			solar: [1402, 2, 8]
		},
		stime: 1685351783917,
		gdate: [2023, 5, 29],
		gdata: {
			gregorian: [2023, 4, 29]
		},
		gtime: 1685351783917
	},
	{
		sdate: [1402, 3, 9],
		sdata: {
			solar: [1402, 2, 9]
		},
		stime: 1685438183917,
		gdate: [2023, 5, 30],
		gdata: {
			gregorian: [2023, 4, 30]
		},
		gtime: 1685438183917
	},
	{
		sdate: [1402, 3, 10],
		sdata: {
			solar: [1402, 2, 10]
		},
		stime: 1685524583917,
		gdate: [2023, 5, 31],
		gdata: {
			gregorian: [2023, 4, 31]
		},
		gtime: 1685524583917
	},
	{
		sdate: [1402, 3, 11],
		sdata: {
			solar: [1402, 2, 11]
		},
		stime: 1685610983917,
		gdate: [2023, 6, 1],
		gdata: {
			gregorian: [2023, 5, 1]
		},
		gtime: 1685610983917
	},
	{
		sdate: [1402, 3, 12],
		sdata: {
			solar: [1402, 2, 12]
		},
		stime: 1685697383917,
		gdate: [2023, 6, 2],
		gdata: {
			gregorian: [2023, 5, 2]
		},
		gtime: 1685697383917
	},
	{
		sdate: [1402, 3, 13],
		sdata: {
			solar: [1402, 2, 13]
		},
		stime: 1685783783917,
		gdate: [2023, 6, 3],
		gdata: {
			gregorian: [2023, 5, 3]
		},
		gtime: 1685783783917
	},
	{
		sdate: [1402, 3, 14],
		sdata: {
			solar: [1402, 2, 14]
		},
		stime: 1685870183917,
		gdate: [2023, 6, 4],
		gdata: {
			gregorian: [2023, 5, 4]
		},
		gtime: 1685870183917
	},
	{
		sdate: [1402, 3, 15],
		sdata: {
			solar: [1402, 2, 15]
		},
		stime: 1685956583917,
		gdate: [2023, 6, 5],
		gdata: {
			gregorian: [2023, 5, 5]
		},
		gtime: 1685956583917
	},
	{
		sdate: [1402, 3, 16],
		sdata: {
			solar: [1402, 2, 16]
		},
		stime: 1686042983917,
		gdate: [2023, 6, 6],
		gdata: {
			gregorian: [2023, 5, 6]
		},
		gtime: 1686042983917
	},
	{
		sdate: [1402, 3, 17],
		sdata: {
			solar: [1402, 2, 17]
		},
		stime: 1686129383917,
		gdate: [2023, 6, 7],
		gdata: {
			gregorian: [2023, 5, 7]
		},
		gtime: 1686129383917
	},
	{
		sdate: [1402, 3, 18],
		sdata: {
			solar: [1402, 2, 18]
		},
		stime: 1686215783917,
		gdate: [2023, 6, 8],
		gdata: {
			gregorian: [2023, 5, 8]
		},
		gtime: 1686215783917
	},
	{
		sdate: [1402, 3, 19],
		sdata: {
			solar: [1402, 2, 19]
		},
		stime: 1686302183917,
		gdate: [2023, 6, 9],
		gdata: {
			gregorian: [2023, 5, 9]
		},
		gtime: 1686302183917
	},
	{
		sdate: [1402, 3, 20],
		sdata: {
			solar: [1402, 2, 20]
		},
		stime: 1686388583917,
		gdate: [2023, 6, 10],
		gdata: {
			gregorian: [2023, 5, 10]
		},
		gtime: 1686388583917
	},
	{
		sdate: [1402, 3, 21],
		sdata: {
			solar: [1402, 2, 21]
		},
		stime: 1686474983917,
		gdate: [2023, 6, 11],
		gdata: {
			gregorian: [2023, 5, 11]
		},
		gtime: 1686474983917
	},
	{
		sdate: [1402, 3, 22],
		sdata: {
			solar: [1402, 2, 22]
		},
		stime: 1686561383917,
		gdate: [2023, 6, 12],
		gdata: {
			gregorian: [2023, 5, 12]
		},
		gtime: 1686561383917
	},
	{
		sdate: [1402, 3, 23],
		sdata: {
			solar: [1402, 2, 23]
		},
		stime: 1686647783917,
		gdate: [2023, 6, 13],
		gdata: {
			gregorian: [2023, 5, 13]
		},
		gtime: 1686647783917
	},
	{
		sdate: [1402, 3, 24],
		sdata: {
			solar: [1402, 2, 24]
		},
		stime: 1686734183917,
		gdate: [2023, 6, 14],
		gdata: {
			gregorian: [2023, 5, 14]
		},
		gtime: 1686734183917
	},
	{
		sdate: [1402, 3, 25],
		sdata: {
			solar: [1402, 2, 25]
		},
		stime: 1686820583917,
		gdate: [2023, 6, 15],
		gdata: {
			gregorian: [2023, 5, 15]
		},
		gtime: 1686820583917
	},
	{
		sdate: [1402, 3, 26],
		sdata: {
			solar: [1402, 2, 26]
		},
		stime: 1686906983917,
		gdate: [2023, 6, 16],
		gdata: {
			gregorian: [2023, 5, 16]
		},
		gtime: 1686906983917
	},
	{
		sdate: [1402, 3, 27],
		sdata: {
			solar: [1402, 2, 27]
		},
		stime: 1686993383917,
		gdate: [2023, 6, 17],
		gdata: {
			gregorian: [2023, 5, 17]
		},
		gtime: 1686993383917
	},
	{
		sdate: [1402, 3, 28],
		sdata: {
			solar: [1402, 2, 28]
		},
		stime: 1687079783917,
		gdate: [2023, 6, 18],
		gdata: {
			gregorian: [2023, 5, 18]
		},
		gtime: 1687079783917
	},
	{
		sdate: [1402, 3, 29],
		sdata: {
			solar: [1402, 2, 29]
		},
		stime: 1687166183917,
		gdate: [2023, 6, 19],
		gdata: {
			gregorian: [2023, 5, 19]
		},
		gtime: 1687166183917
	},
	{
		sdate: [1402, 3, 30],
		sdata: {
			solar: [1402, 2, 30]
		},
		stime: 1687252583917,
		gdate: [2023, 6, 20],
		gdata: {
			gregorian: [2023, 5, 20]
		},
		gtime: 1687252583917
	},
	{
		sdate: [1402, 3, 31],
		sdata: {
			solar: [1402, 2, 31]
		},
		stime: 1687338983917,
		gdate: [2023, 6, 21],
		gdata: {
			gregorian: [2023, 5, 21]
		},
		gtime: 1687338983917
	},
	{
		sdate: [1402, 4, 1],
		sdata: {
			solar: [1402, 3, 1]
		},
		stime: 1687425383917,
		gdate: [2023, 6, 22],
		gdata: {
			gregorian: [2023, 5, 22]
		},
		gtime: 1687425383917
	},
	{
		sdate: [1402, 4, 2],
		sdata: {
			solar: [1402, 3, 2]
		},
		stime: 1687511783917,
		gdate: [2023, 6, 23],
		gdata: {
			gregorian: [2023, 5, 23]
		},
		gtime: 1687511783917
	},
	{
		sdate: [1402, 4, 3],
		sdata: {
			solar: [1402, 3, 3]
		},
		stime: 1687598183917,
		gdate: [2023, 6, 24],
		gdata: {
			gregorian: [2023, 5, 24]
		},
		gtime: 1687598183917
	},
	{
		sdate: [1402, 4, 4],
		sdata: {
			solar: [1402, 3, 4]
		},
		stime: 1687684583917,
		gdate: [2023, 6, 25],
		gdata: {
			gregorian: [2023, 5, 25]
		},
		gtime: 1687684583917
	},
	{
		sdate: [1402, 4, 5],
		sdata: {
			solar: [1402, 3, 5]
		},
		stime: 1687770983917,
		gdate: [2023, 6, 26],
		gdata: {
			gregorian: [2023, 5, 26]
		},
		gtime: 1687770983917
	},
	{
		sdate: [1402, 4, 6],
		sdata: {
			solar: [1402, 3, 6]
		},
		stime: 1687857383917,
		gdate: [2023, 6, 27],
		gdata: {
			gregorian: [2023, 5, 27]
		},
		gtime: 1687857383917
	},
	{
		sdate: [1402, 4, 7],
		sdata: {
			solar: [1402, 3, 7]
		},
		stime: 1687943783917,
		gdate: [2023, 6, 28],
		gdata: {
			gregorian: [2023, 5, 28]
		},
		gtime: 1687943783917
	},
	{
		sdate: [1402, 4, 8],
		sdata: {
			solar: [1402, 3, 8]
		},
		stime: 1688030183917,
		gdate: [2023, 6, 29],
		gdata: {
			gregorian: [2023, 5, 29]
		},
		gtime: 1688030183917
	},
	{
		sdate: [1402, 4, 9],
		sdata: {
			solar: [1402, 3, 9]
		},
		stime: 1688116583917,
		gdate: [2023, 6, 30],
		gdata: {
			gregorian: [2023, 5, 30]
		},
		gtime: 1688116583917
	},
	{
		sdate: [1402, 4, 10],
		sdata: {
			solar: [1402, 3, 10]
		},
		stime: 1688202983917,
		gdate: [2023, 7, 1],
		gdata: {
			gregorian: [2023, 6, 1]
		},
		gtime: 1688202983917
	},
	{
		sdate: [1402, 4, 11],
		sdata: {
			solar: [1402, 3, 11]
		},
		stime: 1688289383917,
		gdate: [2023, 7, 2],
		gdata: {
			gregorian: [2023, 6, 2]
		},
		gtime: 1688289383917
	},
	{
		sdate: [1402, 4, 12],
		sdata: {
			solar: [1402, 3, 12]
		},
		stime: 1688375783917,
		gdate: [2023, 7, 3],
		gdata: {
			gregorian: [2023, 6, 3]
		},
		gtime: 1688375783917
	},
	{
		sdate: [1402, 4, 13],
		sdata: {
			solar: [1402, 3, 13]
		},
		stime: 1688462183917,
		gdate: [2023, 7, 4],
		gdata: {
			gregorian: [2023, 6, 4]
		},
		gtime: 1688462183917
	},
	{
		sdate: [1402, 4, 14],
		sdata: {
			solar: [1402, 3, 14]
		},
		stime: 1688548583917,
		gdate: [2023, 7, 5],
		gdata: {
			gregorian: [2023, 6, 5]
		},
		gtime: 1688548583917
	},
	{
		sdate: [1402, 4, 15],
		sdata: {
			solar: [1402, 3, 15]
		},
		stime: 1688634983917,
		gdate: [2023, 7, 6],
		gdata: {
			gregorian: [2023, 6, 6]
		},
		gtime: 1688634983917
	},
	{
		sdate: [1402, 4, 16],
		sdata: {
			solar: [1402, 3, 16]
		},
		stime: 1688721383917,
		gdate: [2023, 7, 7],
		gdata: {
			gregorian: [2023, 6, 7]
		},
		gtime: 1688721383917
	},
	{
		sdate: [1402, 4, 17],
		sdata: {
			solar: [1402, 3, 17]
		},
		stime: 1688807783917,
		gdate: [2023, 7, 8],
		gdata: {
			gregorian: [2023, 6, 8]
		},
		gtime: 1688807783917
	},
	{
		sdate: [1402, 4, 18],
		sdata: {
			solar: [1402, 3, 18]
		},
		stime: 1688894183917,
		gdate: [2023, 7, 9],
		gdata: {
			gregorian: [2023, 6, 9]
		},
		gtime: 1688894183917
	},
	{
		sdate: [1402, 4, 19],
		sdata: {
			solar: [1402, 3, 19]
		},
		stime: 1688980583917,
		gdate: [2023, 7, 10],
		gdata: {
			gregorian: [2023, 6, 10]
		},
		gtime: 1688980583917
	},
	{
		sdate: [1402, 4, 20],
		sdata: {
			solar: [1402, 3, 20]
		},
		stime: 1689066983917,
		gdate: [2023, 7, 11],
		gdata: {
			gregorian: [2023, 6, 11]
		},
		gtime: 1689066983917
	},
	{
		sdate: [1402, 4, 21],
		sdata: {
			solar: [1402, 3, 21]
		},
		stime: 1689153383917,
		gdate: [2023, 7, 12],
		gdata: {
			gregorian: [2023, 6, 12]
		},
		gtime: 1689153383917
	},
	{
		sdate: [1402, 4, 22],
		sdata: {
			solar: [1402, 3, 22]
		},
		stime: 1689239783917,
		gdate: [2023, 7, 13],
		gdata: {
			gregorian: [2023, 6, 13]
		},
		gtime: 1689239783917
	},
	{
		sdate: [1402, 4, 23],
		sdata: {
			solar: [1402, 3, 23]
		},
		stime: 1689326183917,
		gdate: [2023, 7, 14],
		gdata: {
			gregorian: [2023, 6, 14]
		},
		gtime: 1689326183917
	},
	{
		sdate: [1402, 4, 24],
		sdata: {
			solar: [1402, 3, 24]
		},
		stime: 1689412583917,
		gdate: [2023, 7, 15],
		gdata: {
			gregorian: [2023, 6, 15]
		},
		gtime: 1689412583917
	},
	{
		sdate: [1402, 4, 25],
		sdata: {
			solar: [1402, 3, 25]
		},
		stime: 1689498983917,
		gdate: [2023, 7, 16],
		gdata: {
			gregorian: [2023, 6, 16]
		},
		gtime: 1689498983917
	},
	{
		sdate: [1402, 4, 26],
		sdata: {
			solar: [1402, 3, 26]
		},
		stime: 1689585383917,
		gdate: [2023, 7, 17],
		gdata: {
			gregorian: [2023, 6, 17]
		},
		gtime: 1689585383917
	},
	{
		sdate: [1402, 4, 27],
		sdata: {
			solar: [1402, 3, 27]
		},
		stime: 1689671783917,
		gdate: [2023, 7, 18],
		gdata: {
			gregorian: [2023, 6, 18]
		},
		gtime: 1689671783917
	},
	{
		sdate: [1402, 4, 28],
		sdata: {
			solar: [1402, 3, 28]
		},
		stime: 1689758183917,
		gdate: [2023, 7, 19],
		gdata: {
			gregorian: [2023, 6, 19]
		},
		gtime: 1689758183917
	},
	{
		sdate: [1402, 4, 29],
		sdata: {
			solar: [1402, 3, 29]
		},
		stime: 1689844583917,
		gdate: [2023, 7, 20],
		gdata: {
			gregorian: [2023, 6, 20]
		},
		gtime: 1689844583917
	},
	{
		sdate: [1402, 4, 30],
		sdata: {
			solar: [1402, 3, 30]
		},
		stime: 1689930983917,
		gdate: [2023, 7, 21],
		gdata: {
			gregorian: [2023, 6, 21]
		},
		gtime: 1689930983917
	},
	{
		sdate: [1402, 4, 31],
		sdata: {
			solar: [1402, 3, 31]
		},
		stime: 1690017383917,
		gdate: [2023, 7, 22],
		gdata: {
			gregorian: [2023, 6, 22]
		},
		gtime: 1690017383917
	},
	{
		sdate: [1402, 5, 1],
		sdata: {
			solar: [1402, 4, 1]
		},
		stime: 1690103783917,
		gdate: [2023, 7, 23],
		gdata: {
			gregorian: [2023, 6, 23]
		},
		gtime: 1690103783917
	},
	{
		sdate: [1402, 5, 2],
		sdata: {
			solar: [1402, 4, 2]
		},
		stime: 1690190183917,
		gdate: [2023, 7, 24],
		gdata: {
			gregorian: [2023, 6, 24]
		},
		gtime: 1690190183917
	},
	{
		sdate: [1402, 5, 3],
		sdata: {
			solar: [1402, 4, 3]
		},
		stime: 1690276583917,
		gdate: [2023, 7, 25],
		gdata: {
			gregorian: [2023, 6, 25]
		},
		gtime: 1690276583917
	},
	{
		sdate: [1402, 5, 4],
		sdata: {
			solar: [1402, 4, 4]
		},
		stime: 1690362983917,
		gdate: [2023, 7, 26],
		gdata: {
			gregorian: [2023, 6, 26]
		},
		gtime: 1690362983917
	},
	{
		sdate: [1402, 5, 5],
		sdata: {
			solar: [1402, 4, 5]
		},
		stime: 1690449383917,
		gdate: [2023, 7, 27],
		gdata: {
			gregorian: [2023, 6, 27]
		},
		gtime: 1690449383917
	},
	{
		sdate: [1402, 5, 6],
		sdata: {
			solar: [1402, 4, 6]
		},
		stime: 1690535783917,
		gdate: [2023, 7, 28],
		gdata: {
			gregorian: [2023, 6, 28]
		},
		gtime: 1690535783917
	},
	{
		sdate: [1402, 5, 7],
		sdata: {
			solar: [1402, 4, 7]
		},
		stime: 1690622183917,
		gdate: [2023, 7, 29],
		gdata: {
			gregorian: [2023, 6, 29]
		},
		gtime: 1690622183917
	},
	{
		sdate: [1402, 5, 8],
		sdata: {
			solar: [1402, 4, 8]
		},
		stime: 1690708583917,
		gdate: [2023, 7, 30],
		gdata: {
			gregorian: [2023, 6, 30]
		},
		gtime: 1690708583917
	},
	{
		sdate: [1402, 5, 9],
		sdata: {
			solar: [1402, 4, 9]
		},
		stime: 1690794983917,
		gdate: [2023, 7, 31],
		gdata: {
			gregorian: [2023, 6, 31]
		},
		gtime: 1690794983917
	},
	{
		sdate: [1402, 5, 10],
		sdata: {
			solar: [1402, 4, 10]
		},
		stime: 1690881383917,
		gdate: [2023, 8, 1],
		gdata: {
			gregorian: [2023, 7, 1]
		},
		gtime: 1690881383917
	},
	{
		sdate: [1402, 5, 11],
		sdata: {
			solar: [1402, 4, 11]
		},
		stime: 1690967783917,
		gdate: [2023, 8, 2],
		gdata: {
			gregorian: [2023, 7, 2]
		},
		gtime: 1690967783917
	},
	{
		sdate: [1402, 5, 12],
		sdata: {
			solar: [1402, 4, 12]
		},
		stime: 1691054183917,
		gdate: [2023, 8, 3],
		gdata: {
			gregorian: [2023, 7, 3]
		},
		gtime: 1691054183917
	},
	{
		sdate: [1402, 5, 13],
		sdata: {
			solar: [1402, 4, 13]
		},
		stime: 1691140583917,
		gdate: [2023, 8, 4],
		gdata: {
			gregorian: [2023, 7, 4]
		},
		gtime: 1691140583917
	},
	{
		sdate: [1402, 5, 14],
		sdata: {
			solar: [1402, 4, 14]
		},
		stime: 1691226983917,
		gdate: [2023, 8, 5],
		gdata: {
			gregorian: [2023, 7, 5]
		},
		gtime: 1691226983917
	},
	{
		sdate: [1402, 5, 15],
		sdata: {
			solar: [1402, 4, 15]
		},
		stime: 1691313383917,
		gdate: [2023, 8, 6],
		gdata: {
			gregorian: [2023, 7, 6]
		},
		gtime: 1691313383917
	},
	{
		sdate: [1402, 5, 16],
		sdata: {
			solar: [1402, 4, 16]
		},
		stime: 1691399783917,
		gdate: [2023, 8, 7],
		gdata: {
			gregorian: [2023, 7, 7]
		},
		gtime: 1691399783917
	},
	{
		sdate: [1402, 5, 17],
		sdata: {
			solar: [1402, 4, 17]
		},
		stime: 1691486183917,
		gdate: [2023, 8, 8],
		gdata: {
			gregorian: [2023, 7, 8]
		},
		gtime: 1691486183917
	},
	{
		sdate: [1402, 5, 18],
		sdata: {
			solar: [1402, 4, 18]
		},
		stime: 1691572583917,
		gdate: [2023, 8, 9],
		gdata: {
			gregorian: [2023, 7, 9]
		},
		gtime: 1691572583917
	},
	{
		sdate: [1402, 5, 19],
		sdata: {
			solar: [1402, 4, 19]
		},
		stime: 1691658983917,
		gdate: [2023, 8, 10],
		gdata: {
			gregorian: [2023, 7, 10]
		},
		gtime: 1691658983917
	},
	{
		sdate: [1402, 5, 20],
		sdata: {
			solar: [1402, 4, 20]
		},
		stime: 1691745383917,
		gdate: [2023, 8, 11],
		gdata: {
			gregorian: [2023, 7, 11]
		},
		gtime: 1691745383917
	},
	{
		sdate: [1402, 5, 21],
		sdata: {
			solar: [1402, 4, 21]
		},
		stime: 1691831783917,
		gdate: [2023, 8, 12],
		gdata: {
			gregorian: [2023, 7, 12]
		},
		gtime: 1691831783917
	},
	{
		sdate: [1402, 5, 22],
		sdata: {
			solar: [1402, 4, 22]
		},
		stime: 1691918183917,
		gdate: [2023, 8, 13],
		gdata: {
			gregorian: [2023, 7, 13]
		},
		gtime: 1691918183917
	},
	{
		sdate: [1402, 5, 23],
		sdata: {
			solar: [1402, 4, 23]
		},
		stime: 1692004583917,
		gdate: [2023, 8, 14],
		gdata: {
			gregorian: [2023, 7, 14]
		},
		gtime: 1692004583917
	},
	{
		sdate: [1402, 5, 24],
		sdata: {
			solar: [1402, 4, 24]
		},
		stime: 1692090983917,
		gdate: [2023, 8, 15],
		gdata: {
			gregorian: [2023, 7, 15]
		},
		gtime: 1692090983917
	},
	{
		sdate: [1402, 5, 25],
		sdata: {
			solar: [1402, 4, 25]
		},
		stime: 1692177383917,
		gdate: [2023, 8, 16],
		gdata: {
			gregorian: [2023, 7, 16]
		},
		gtime: 1692177383917
	},
	{
		sdate: [1402, 5, 26],
		sdata: {
			solar: [1402, 4, 26]
		},
		stime: 1692263783917,
		gdate: [2023, 8, 17],
		gdata: {
			gregorian: [2023, 7, 17]
		},
		gtime: 1692263783917
	},
	{
		sdate: [1402, 5, 27],
		sdata: {
			solar: [1402, 4, 27]
		},
		stime: 1692350183917,
		gdate: [2023, 8, 18],
		gdata: {
			gregorian: [2023, 7, 18]
		},
		gtime: 1692350183917
	},
	{
		sdate: [1402, 5, 28],
		sdata: {
			solar: [1402, 4, 28]
		},
		stime: 1692436583917,
		gdate: [2023, 8, 19],
		gdata: {
			gregorian: [2023, 7, 19]
		},
		gtime: 1692436583917
	},
	{
		sdate: [1402, 5, 29],
		sdata: {
			solar: [1402, 4, 29]
		},
		stime: 1692522983917,
		gdate: [2023, 8, 20],
		gdata: {
			gregorian: [2023, 7, 20]
		},
		gtime: 1692522983917
	},
	{
		sdate: [1402, 5, 30],
		sdata: {
			solar: [1402, 4, 30]
		},
		stime: 1692609383917,
		gdate: [2023, 8, 21],
		gdata: {
			gregorian: [2023, 7, 21]
		},
		gtime: 1692609383917
	},
	{
		sdate: [1402, 5, 31],
		sdata: {
			solar: [1402, 4, 31]
		},
		stime: 1692695783917,
		gdate: [2023, 8, 22],
		gdata: {
			gregorian: [2023, 7, 22]
		},
		gtime: 1692695783917
	},
	{
		sdate: [1402, 6, 1],
		sdata: {
			solar: [1402, 5, 1]
		},
		stime: 1692782183917,
		gdate: [2023, 8, 23],
		gdata: {
			gregorian: [2023, 7, 23]
		},
		gtime: 1692782183917
	},
	{
		sdate: [1402, 6, 2],
		sdata: {
			solar: [1402, 5, 2]
		},
		stime: 1692868583917,
		gdate: [2023, 8, 24],
		gdata: {
			gregorian: [2023, 7, 24]
		},
		gtime: 1692868583917
	},
	{
		sdate: [1402, 6, 3],
		sdata: {
			solar: [1402, 5, 3]
		},
		stime: 1692954983917,
		gdate: [2023, 8, 25],
		gdata: {
			gregorian: [2023, 7, 25]
		},
		gtime: 1692954983917
	},
	{
		sdate: [1402, 6, 4],
		sdata: {
			solar: [1402, 5, 4]
		},
		stime: 1693041383917,
		gdate: [2023, 8, 26],
		gdata: {
			gregorian: [2023, 7, 26]
		},
		gtime: 1693041383917
	},
	{
		sdate: [1402, 6, 5],
		sdata: {
			solar: [1402, 5, 5]
		},
		stime: 1693127783917,
		gdate: [2023, 8, 27],
		gdata: {
			gregorian: [2023, 7, 27]
		},
		gtime: 1693127783917
	},
	{
		sdate: [1402, 6, 6],
		sdata: {
			solar: [1402, 5, 6]
		},
		stime: 1693214183917,
		gdate: [2023, 8, 28],
		gdata: {
			gregorian: [2023, 7, 28]
		},
		gtime: 1693214183917
	},
	{
		sdate: [1402, 6, 7],
		sdata: {
			solar: [1402, 5, 7]
		},
		stime: 1693300583917,
		gdate: [2023, 8, 29],
		gdata: {
			gregorian: [2023, 7, 29]
		},
		gtime: 1693300583917
	},
	{
		sdate: [1402, 6, 8],
		sdata: {
			solar: [1402, 5, 8]
		},
		stime: 1693386983917,
		gdate: [2023, 8, 30],
		gdata: {
			gregorian: [2023, 7, 30]
		},
		gtime: 1693386983917
	},
	{
		sdate: [1402, 6, 9],
		sdata: {
			solar: [1402, 5, 9]
		},
		stime: 1693473383917,
		gdate: [2023, 8, 31],
		gdata: {
			gregorian: [2023, 7, 31]
		},
		gtime: 1693473383917
	},
	{
		sdate: [1402, 6, 10],
		sdata: {
			solar: [1402, 5, 10]
		},
		stime: 1693559783917,
		gdate: [2023, 9, 1],
		gdata: {
			gregorian: [2023, 8, 1]
		},
		gtime: 1693559783917
	},
	{
		sdate: [1402, 6, 11],
		sdata: {
			solar: [1402, 5, 11]
		},
		stime: 1693646183917,
		gdate: [2023, 9, 2],
		gdata: {
			gregorian: [2023, 8, 2]
		},
		gtime: 1693646183917
	},
	{
		sdate: [1402, 6, 12],
		sdata: {
			solar: [1402, 5, 12]
		},
		stime: 1693732583917,
		gdate: [2023, 9, 3],
		gdata: {
			gregorian: [2023, 8, 3]
		},
		gtime: 1693732583917
	},
	{
		sdate: [1402, 6, 13],
		sdata: {
			solar: [1402, 5, 13]
		},
		stime: 1693818983917,
		gdate: [2023, 9, 4],
		gdata: {
			gregorian: [2023, 8, 4]
		},
		gtime: 1693818983917
	},
	{
		sdate: [1402, 6, 14],
		sdata: {
			solar: [1402, 5, 14]
		},
		stime: 1693905383917,
		gdate: [2023, 9, 5],
		gdata: {
			gregorian: [2023, 8, 5]
		},
		gtime: 1693905383917
	},
	{
		sdate: [1402, 6, 15],
		sdata: {
			solar: [1402, 5, 15]
		},
		stime: 1693991783917,
		gdate: [2023, 9, 6],
		gdata: {
			gregorian: [2023, 8, 6]
		},
		gtime: 1693991783917
	},
	{
		sdate: [1402, 6, 16],
		sdata: {
			solar: [1402, 5, 16]
		},
		stime: 1694078183917,
		gdate: [2023, 9, 7],
		gdata: {
			gregorian: [2023, 8, 7]
		},
		gtime: 1694078183917
	},
	{
		sdate: [1402, 6, 17],
		sdata: {
			solar: [1402, 5, 17]
		},
		stime: 1694164583917,
		gdate: [2023, 9, 8],
		gdata: {
			gregorian: [2023, 8, 8]
		},
		gtime: 1694164583917
	},
	{
		sdate: [1402, 6, 18],
		sdata: {
			solar: [1402, 5, 18]
		},
		stime: 1694250983917,
		gdate: [2023, 9, 9],
		gdata: {
			gregorian: [2023, 8, 9]
		},
		gtime: 1694250983917
	},
	{
		sdate: [1402, 6, 19],
		sdata: {
			solar: [1402, 5, 19]
		},
		stime: 1694337383917,
		gdate: [2023, 9, 10],
		gdata: {
			gregorian: [2023, 8, 10]
		},
		gtime: 1694337383917
	},
	{
		sdate: [1402, 6, 20],
		sdata: {
			solar: [1402, 5, 20]
		},
		stime: 1694423783917,
		gdate: [2023, 9, 11],
		gdata: {
			gregorian: [2023, 8, 11]
		},
		gtime: 1694423783917
	},
	{
		sdate: [1402, 6, 21],
		sdata: {
			solar: [1402, 5, 21]
		},
		stime: 1694510183917,
		gdate: [2023, 9, 12],
		gdata: {
			gregorian: [2023, 8, 12]
		},
		gtime: 1694510183917
	},
	{
		sdate: [1402, 6, 22],
		sdata: {
			solar: [1402, 5, 22]
		},
		stime: 1694596583917,
		gdate: [2023, 9, 13],
		gdata: {
			gregorian: [2023, 8, 13]
		},
		gtime: 1694596583917
	},
	{
		sdate: [1402, 6, 23],
		sdata: {
			solar: [1402, 5, 23]
		},
		stime: 1694682983917,
		gdate: [2023, 9, 14],
		gdata: {
			gregorian: [2023, 8, 14]
		},
		gtime: 1694682983917
	},
	{
		sdate: [1402, 6, 24],
		sdata: {
			solar: [1402, 5, 24]
		},
		stime: 1694769383917,
		gdate: [2023, 9, 15],
		gdata: {
			gregorian: [2023, 8, 15]
		},
		gtime: 1694769383917
	},
	{
		sdate: [1402, 6, 25],
		sdata: {
			solar: [1402, 5, 25]
		},
		stime: 1694855783917,
		gdate: [2023, 9, 16],
		gdata: {
			gregorian: [2023, 8, 16]
		},
		gtime: 1694855783917
	},
	{
		sdate: [1402, 6, 26],
		sdata: {
			solar: [1402, 5, 26]
		},
		stime: 1694942183917,
		gdate: [2023, 9, 17],
		gdata: {
			gregorian: [2023, 8, 17]
		},
		gtime: 1694942183917
	},
	{
		sdate: [1402, 6, 27],
		sdata: {
			solar: [1402, 5, 27]
		},
		stime: 1695028583917,
		gdate: [2023, 9, 18],
		gdata: {
			gregorian: [2023, 8, 18]
		},
		gtime: 1695028583917
	},
	{
		sdate: [1402, 6, 28],
		sdata: {
			solar: [1402, 5, 28]
		},
		stime: 1695114983917,
		gdate: [2023, 9, 19],
		gdata: {
			gregorian: [2023, 8, 19]
		},
		gtime: 1695114983917
	},
	{
		sdate: [1402, 6, 29],
		sdata: {
			solar: [1402, 5, 29]
		},
		stime: 1695201383917,
		gdate: [2023, 9, 20],
		gdata: {
			gregorian: [2023, 8, 20]
		},
		gtime: 1695201383917
	},
	{
		sdate: [1402, 6, 30],
		sdata: {
			solar: [1402, 5, 30]
		},
		stime: 1695287783917,
		gdate: [2023, 9, 21],
		gdata: {
			gregorian: [2023, 8, 21]
		},
		gtime: 1695287783917
	},
	{
		sdate: [1402, 6, 31],
		sdata: {
			solar: [1402, 5, 31]
		},
		stime: 1695374183917,
		gdate: [2023, 9, 22],
		gdata: {
			gregorian: [2023, 8, 22]
		},
		gtime: 1695374183917
	},
	{
		sdate: [1402, 7, 1],
		sdata: {
			solar: [1402, 6, 1]
		},
		stime: 1695460583917,
		gdate: [2023, 9, 23],
		gdata: {
			gregorian: [2023, 8, 23]
		},
		gtime: 1695460583917
	},
	{
		sdate: [1402, 7, 2],
		sdata: {
			solar: [1402, 6, 2]
		},
		stime: 1695546983917,
		gdate: [2023, 9, 24],
		gdata: {
			gregorian: [2023, 8, 24]
		},
		gtime: 1695546983917
	},
	{
		sdate: [1402, 7, 3],
		sdata: {
			solar: [1402, 6, 3]
		},
		stime: 1695633383917,
		gdate: [2023, 9, 25],
		gdata: {
			gregorian: [2023, 8, 25]
		},
		gtime: 1695633383917
	},
	{
		sdate: [1402, 7, 4],
		sdata: {
			solar: [1402, 6, 4]
		},
		stime: 1695719783917,
		gdate: [2023, 9, 26],
		gdata: {
			gregorian: [2023, 8, 26]
		},
		gtime: 1695719783917
	},
	{
		sdate: [1402, 7, 5],
		sdata: {
			solar: [1402, 6, 5]
		},
		stime: 1695806183917,
		gdate: [2023, 9, 27],
		gdata: {
			gregorian: [2023, 8, 27]
		},
		gtime: 1695806183917
	},
	{
		sdate: [1402, 7, 6],
		sdata: {
			solar: [1402, 6, 6]
		},
		stime: 1695892583917,
		gdate: [2023, 9, 28],
		gdata: {
			gregorian: [2023, 8, 28]
		},
		gtime: 1695892583917
	},
	{
		sdate: [1402, 7, 7],
		sdata: {
			solar: [1402, 6, 7]
		},
		stime: 1695978983917,
		gdate: [2023, 9, 29],
		gdata: {
			gregorian: [2023, 8, 29]
		},
		gtime: 1695978983917
	},
	{
		sdate: [1402, 7, 8],
		sdata: {
			solar: [1402, 6, 8]
		},
		stime: 1696065383917,
		gdate: [2023, 9, 30],
		gdata: {
			gregorian: [2023, 8, 30]
		},
		gtime: 1696065383917
	},
	{
		sdate: [1402, 7, 9],
		sdata: {
			solar: [1402, 6, 9]
		},
		stime: 1696151783917,
		gdate: [2023, 10, 1],
		gdata: {
			gregorian: [2023, 9, 1]
		},
		gtime: 1696151783917
	},
	{
		sdate: [1402, 7, 10],
		sdata: {
			solar: [1402, 6, 10]
		},
		stime: 1696238183917,
		gdate: [2023, 10, 2],
		gdata: {
			gregorian: [2023, 9, 2]
		},
		gtime: 1696238183917
	},
	{
		sdate: [1402, 7, 11],
		sdata: {
			solar: [1402, 6, 11]
		},
		stime: 1696324583917,
		gdate: [2023, 10, 3],
		gdata: {
			gregorian: [2023, 9, 3]
		},
		gtime: 1696324583917
	},
	{
		sdate: [1402, 7, 12],
		sdata: {
			solar: [1402, 6, 12]
		},
		stime: 1696410983917,
		gdate: [2023, 10, 4],
		gdata: {
			gregorian: [2023, 9, 4]
		},
		gtime: 1696410983917
	},
	{
		sdate: [1402, 7, 13],
		sdata: {
			solar: [1402, 6, 13]
		},
		stime: 1696497383917,
		gdate: [2023, 10, 5],
		gdata: {
			gregorian: [2023, 9, 5]
		},
		gtime: 1696497383917
	},
	{
		sdate: [1402, 7, 14],
		sdata: {
			solar: [1402, 6, 14]
		},
		stime: 1696583783917,
		gdate: [2023, 10, 6],
		gdata: {
			gregorian: [2023, 9, 6]
		},
		gtime: 1696583783917
	},
	{
		sdate: [1402, 7, 15],
		sdata: {
			solar: [1402, 6, 15]
		},
		stime: 1696670183917,
		gdate: [2023, 10, 7],
		gdata: {
			gregorian: [2023, 9, 7]
		},
		gtime: 1696670183917
	},
	{
		sdate: [1402, 7, 16],
		sdata: {
			solar: [1402, 6, 16]
		},
		stime: 1696756583917,
		gdate: [2023, 10, 8],
		gdata: {
			gregorian: [2023, 9, 8]
		},
		gtime: 1696756583917
	},
	{
		sdate: [1402, 7, 17],
		sdata: {
			solar: [1402, 6, 17]
		},
		stime: 1696842983917,
		gdate: [2023, 10, 9],
		gdata: {
			gregorian: [2023, 9, 9]
		},
		gtime: 1696842983917
	},
	{
		sdate: [1402, 7, 18],
		sdata: {
			solar: [1402, 6, 18]
		},
		stime: 1696929383917,
		gdate: [2023, 10, 10],
		gdata: {
			gregorian: [2023, 9, 10]
		},
		gtime: 1696929383917
	},
	{
		sdate: [1402, 7, 19],
		sdata: {
			solar: [1402, 6, 19]
		},
		stime: 1697015783917,
		gdate: [2023, 10, 11],
		gdata: {
			gregorian: [2023, 9, 11]
		},
		gtime: 1697015783917
	},
	{
		sdate: [1402, 7, 20],
		sdata: {
			solar: [1402, 6, 20]
		},
		stime: 1697102183917,
		gdate: [2023, 10, 12],
		gdata: {
			gregorian: [2023, 9, 12]
		},
		gtime: 1697102183917
	},
	{
		sdate: [1402, 7, 21],
		sdata: {
			solar: [1402, 6, 21]
		},
		stime: 1697188583917,
		gdate: [2023, 10, 13],
		gdata: {
			gregorian: [2023, 9, 13]
		},
		gtime: 1697188583917
	},
	{
		sdate: [1402, 7, 22],
		sdata: {
			solar: [1402, 6, 22]
		},
		stime: 1697274983917,
		gdate: [2023, 10, 14],
		gdata: {
			gregorian: [2023, 9, 14]
		},
		gtime: 1697274983917
	},
	{
		sdate: [1402, 7, 23],
		sdata: {
			solar: [1402, 6, 23]
		},
		stime: 1697361383917,
		gdate: [2023, 10, 15],
		gdata: {
			gregorian: [2023, 9, 15]
		},
		gtime: 1697361383917
	},
	{
		sdate: [1402, 7, 24],
		sdata: {
			solar: [1402, 6, 24]
		},
		stime: 1697447783917,
		gdate: [2023, 10, 16],
		gdata: {
			gregorian: [2023, 9, 16]
		},
		gtime: 1697447783917
	},
	{
		sdate: [1402, 7, 25],
		sdata: {
			solar: [1402, 6, 25]
		},
		stime: 1697534183917,
		gdate: [2023, 10, 17],
		gdata: {
			gregorian: [2023, 9, 17]
		},
		gtime: 1697534183917
	},
	{
		sdate: [1402, 7, 26],
		sdata: {
			solar: [1402, 6, 26]
		},
		stime: 1697620583917,
		gdate: [2023, 10, 18],
		gdata: {
			gregorian: [2023, 9, 18]
		},
		gtime: 1697620583917
	},
	{
		sdate: [1402, 7, 27],
		sdata: {
			solar: [1402, 6, 27]
		},
		stime: 1697706983917,
		gdate: [2023, 10, 19],
		gdata: {
			gregorian: [2023, 9, 19]
		},
		gtime: 1697706983917
	},
	{
		sdate: [1402, 7, 28],
		sdata: {
			solar: [1402, 6, 28]
		},
		stime: 1697793383917,
		gdate: [2023, 10, 20],
		gdata: {
			gregorian: [2023, 9, 20]
		},
		gtime: 1697793383917
	},
	{
		sdate: [1402, 7, 29],
		sdata: {
			solar: [1402, 6, 29]
		},
		stime: 1697879783917,
		gdate: [2023, 10, 21],
		gdata: {
			gregorian: [2023, 9, 21]
		},
		gtime: 1697879783917
	},
	{
		sdate: [1402, 7, 30],
		sdata: {
			solar: [1402, 6, 30]
		},
		stime: 1697966183917,
		gdate: [2023, 10, 22],
		gdata: {
			gregorian: [2023, 9, 22]
		},
		gtime: 1697966183917
	},
	{
		sdate: [1402, 8, 1],
		sdata: {
			solar: [1402, 7, 1]
		},
		stime: 1698052583917,
		gdate: [2023, 10, 23],
		gdata: {
			gregorian: [2023, 9, 23]
		},
		gtime: 1698052583917
	},
	{
		sdate: [1402, 8, 2],
		sdata: {
			solar: [1402, 7, 2]
		},
		stime: 1698138983917,
		gdate: [2023, 10, 24],
		gdata: {
			gregorian: [2023, 9, 24]
		},
		gtime: 1698138983917
	},
	{
		sdate: [1402, 8, 3],
		sdata: {
			solar: [1402, 7, 3]
		},
		stime: 1698225383917,
		gdate: [2023, 10, 25],
		gdata: {
			gregorian: [2023, 9, 25]
		},
		gtime: 1698225383917
	},
	{
		sdate: [1402, 8, 4],
		sdata: {
			solar: [1402, 7, 4]
		},
		stime: 1698311783917,
		gdate: [2023, 10, 26],
		gdata: {
			gregorian: [2023, 9, 26]
		},
		gtime: 1698311783917
	},
	{
		sdate: [1402, 8, 5],
		sdata: {
			solar: [1402, 7, 5]
		},
		stime: 1698398183917,
		gdate: [2023, 10, 27],
		gdata: {
			gregorian: [2023, 9, 27]
		},
		gtime: 1698398183917
	},
	{
		sdate: [1402, 8, 6],
		sdata: {
			solar: [1402, 7, 6]
		},
		stime: 1698484583917,
		gdate: [2023, 10, 28],
		gdata: {
			gregorian: [2023, 9, 28]
		},
		gtime: 1698484583917
	},
	{
		sdate: [1402, 8, 7],
		sdata: {
			solar: [1402, 7, 7]
		},
		stime: 1698570983917,
		gdate: [2023, 10, 29],
		gdata: {
			gregorian: [2023, 9, 29]
		},
		gtime: 1698570983917
	},
	{
		sdate: [1402, 8, 8],
		sdata: {
			solar: [1402, 7, 8]
		},
		stime: 1698657383917,
		gdate: [2023, 10, 30],
		gdata: {
			gregorian: [2023, 9, 30]
		},
		gtime: 1698657383917
	},
	{
		sdate: [1402, 8, 9],
		sdata: {
			solar: [1402, 7, 9]
		},
		stime: 1698743783917,
		gdate: [2023, 10, 31],
		gdata: {
			gregorian: [2023, 9, 31]
		},
		gtime: 1698743783917
	},
	{
		sdate: [1402, 8, 10],
		sdata: {
			solar: [1402, 7, 10]
		},
		stime: 1698830183917,
		gdate: [2023, 11, 1],
		gdata: {
			gregorian: [2023, 10, 1]
		},
		gtime: 1698830183917
	},
	{
		sdate: [1402, 8, 11],
		sdata: {
			solar: [1402, 7, 11]
		},
		stime: 1698916583917,
		gdate: [2023, 11, 2],
		gdata: {
			gregorian: [2023, 10, 2]
		},
		gtime: 1698916583917
	},
	{
		sdate: [1402, 8, 12],
		sdata: {
			solar: [1402, 7, 12]
		},
		stime: 1699002983917,
		gdate: [2023, 11, 3],
		gdata: {
			gregorian: [2023, 10, 3]
		},
		gtime: 1699002983917
	},
	{
		sdate: [1402, 8, 13],
		sdata: {
			solar: [1402, 7, 13]
		},
		stime: 1699089383917,
		gdate: [2023, 11, 4],
		gdata: {
			gregorian: [2023, 10, 4]
		},
		gtime: 1699089383917
	},
	{
		sdate: [1402, 8, 14],
		sdata: {
			solar: [1402, 7, 14]
		},
		stime: 1699175783917,
		gdate: [2023, 11, 5],
		gdata: {
			gregorian: [2023, 10, 5]
		},
		gtime: 1699175783917
	},
	{
		sdate: [1402, 8, 15],
		sdata: {
			solar: [1402, 7, 15]
		},
		stime: 1699262183917,
		gdate: [2023, 11, 6],
		gdata: {
			gregorian: [2023, 10, 6]
		},
		gtime: 1699262183917
	},
	{
		sdate: [1402, 8, 16],
		sdata: {
			solar: [1402, 7, 16]
		},
		stime: 1699348583917,
		gdate: [2023, 11, 7],
		gdata: {
			gregorian: [2023, 10, 7]
		},
		gtime: 1699348583917
	},
	{
		sdate: [1402, 8, 17],
		sdata: {
			solar: [1402, 7, 17]
		},
		stime: 1699434983917,
		gdate: [2023, 11, 8],
		gdata: {
			gregorian: [2023, 10, 8]
		},
		gtime: 1699434983917
	},
	{
		sdate: [1402, 8, 18],
		sdata: {
			solar: [1402, 7, 18]
		},
		stime: 1699521383917,
		gdate: [2023, 11, 9],
		gdata: {
			gregorian: [2023, 10, 9]
		},
		gtime: 1699521383917
	},
	{
		sdate: [1402, 8, 19],
		sdata: {
			solar: [1402, 7, 19]
		},
		stime: 1699607783917,
		gdate: [2023, 11, 10],
		gdata: {
			gregorian: [2023, 10, 10]
		},
		gtime: 1699607783917
	},
	{
		sdate: [1402, 8, 20],
		sdata: {
			solar: [1402, 7, 20]
		},
		stime: 1699694183917,
		gdate: [2023, 11, 11],
		gdata: {
			gregorian: [2023, 10, 11]
		},
		gtime: 1699694183917
	},
	{
		sdate: [1402, 8, 21],
		sdata: {
			solar: [1402, 7, 21]
		},
		stime: 1699780583917,
		gdate: [2023, 11, 12],
		gdata: {
			gregorian: [2023, 10, 12]
		},
		gtime: 1699780583917
	},
	{
		sdate: [1402, 8, 22],
		sdata: {
			solar: [1402, 7, 22]
		},
		stime: 1699866983917,
		gdate: [2023, 11, 13],
		gdata: {
			gregorian: [2023, 10, 13]
		},
		gtime: 1699866983917
	},
	{
		sdate: [1402, 8, 23],
		sdata: {
			solar: [1402, 7, 23]
		},
		stime: 1699953383917,
		gdate: [2023, 11, 14],
		gdata: {
			gregorian: [2023, 10, 14]
		},
		gtime: 1699953383917
	},
	{
		sdate: [1402, 8, 24],
		sdata: {
			solar: [1402, 7, 24]
		},
		stime: 1700039783917,
		gdate: [2023, 11, 15],
		gdata: {
			gregorian: [2023, 10, 15]
		},
		gtime: 1700039783917
	},
	{
		sdate: [1402, 8, 25],
		sdata: {
			solar: [1402, 7, 25]
		},
		stime: 1700126183917,
		gdate: [2023, 11, 16],
		gdata: {
			gregorian: [2023, 10, 16]
		},
		gtime: 1700126183917
	},
	{
		sdate: [1402, 8, 26],
		sdata: {
			solar: [1402, 7, 26]
		},
		stime: 1700212583917,
		gdate: [2023, 11, 17],
		gdata: {
			gregorian: [2023, 10, 17]
		},
		gtime: 1700212583917
	},
	{
		sdate: [1402, 8, 27],
		sdata: {
			solar: [1402, 7, 27]
		},
		stime: 1700298983917,
		gdate: [2023, 11, 18],
		gdata: {
			gregorian: [2023, 10, 18]
		},
		gtime: 1700298983917
	},
	{
		sdate: [1402, 8, 28],
		sdata: {
			solar: [1402, 7, 28]
		},
		stime: 1700385383917,
		gdate: [2023, 11, 19],
		gdata: {
			gregorian: [2023, 10, 19]
		},
		gtime: 1700385383917
	},
	{
		sdate: [1402, 8, 29],
		sdata: {
			solar: [1402, 7, 29]
		},
		stime: 1700471783917,
		gdate: [2023, 11, 20],
		gdata: {
			gregorian: [2023, 10, 20]
		},
		gtime: 1700471783917
	},
	{
		sdate: [1402, 8, 30],
		sdata: {
			solar: [1402, 7, 30]
		},
		stime: 1700558183917,
		gdate: [2023, 11, 21],
		gdata: {
			gregorian: [2023, 10, 21]
		},
		gtime: 1700558183917
	},
	{
		sdate: [1402, 9, 1],
		sdata: {
			solar: [1402, 8, 1]
		},
		stime: 1700644583917,
		gdate: [2023, 11, 22],
		gdata: {
			gregorian: [2023, 10, 22]
		},
		gtime: 1700644583917
	},
	{
		sdate: [1402, 9, 2],
		sdata: {
			solar: [1402, 8, 2]
		},
		stime: 1700730983917,
		gdate: [2023, 11, 23],
		gdata: {
			gregorian: [2023, 10, 23]
		},
		gtime: 1700730983917
	},
	{
		sdate: [1402, 9, 3],
		sdata: {
			solar: [1402, 8, 3]
		},
		stime: 1700817383917,
		gdate: [2023, 11, 24],
		gdata: {
			gregorian: [2023, 10, 24]
		},
		gtime: 1700817383917
	},
	{
		sdate: [1402, 9, 4],
		sdata: {
			solar: [1402, 8, 4]
		},
		stime: 1700903783917,
		gdate: [2023, 11, 25],
		gdata: {
			gregorian: [2023, 10, 25]
		},
		gtime: 1700903783917
	},
	{
		sdate: [1402, 9, 5],
		sdata: {
			solar: [1402, 8, 5]
		},
		stime: 1700990183917,
		gdate: [2023, 11, 26],
		gdata: {
			gregorian: [2023, 10, 26]
		},
		gtime: 1700990183917
	},
	{
		sdate: [1402, 9, 6],
		sdata: {
			solar: [1402, 8, 6]
		},
		stime: 1701076583917,
		gdate: [2023, 11, 27],
		gdata: {
			gregorian: [2023, 10, 27]
		},
		gtime: 1701076583917
	},
	{
		sdate: [1402, 9, 7],
		sdata: {
			solar: [1402, 8, 7]
		},
		stime: 1701162983917,
		gdate: [2023, 11, 28],
		gdata: {
			gregorian: [2023, 10, 28]
		},
		gtime: 1701162983917
	},
	{
		sdate: [1402, 9, 8],
		sdata: {
			solar: [1402, 8, 8]
		},
		stime: 1701249383917,
		gdate: [2023, 11, 29],
		gdata: {
			gregorian: [2023, 10, 29]
		},
		gtime: 1701249383917
	},
	{
		sdate: [1402, 9, 9],
		sdata: {
			solar: [1402, 8, 9]
		},
		stime: 1701335783917,
		gdate: [2023, 11, 30],
		gdata: {
			gregorian: [2023, 10, 30]
		},
		gtime: 1701335783917
	},
	{
		sdate: [1402, 9, 10],
		sdata: {
			solar: [1402, 8, 10]
		},
		stime: 1701422183917,
		gdate: [2023, 12, 1],
		gdata: {
			gregorian: [2023, 11, 1]
		},
		gtime: 1701422183917
	},
	{
		sdate: [1402, 9, 11],
		sdata: {
			solar: [1402, 8, 11]
		},
		stime: 1701508583917,
		gdate: [2023, 12, 2],
		gdata: {
			gregorian: [2023, 11, 2]
		},
		gtime: 1701508583917
	},
	{
		sdate: [1402, 9, 12],
		sdata: {
			solar: [1402, 8, 12]
		},
		stime: 1701594983917,
		gdate: [2023, 12, 3],
		gdata: {
			gregorian: [2023, 11, 3]
		},
		gtime: 1701594983917
	},
	{
		sdate: [1402, 9, 13],
		sdata: {
			solar: [1402, 8, 13]
		},
		stime: 1701681383917,
		gdate: [2023, 12, 4],
		gdata: {
			gregorian: [2023, 11, 4]
		},
		gtime: 1701681383917
	},
	{
		sdate: [1402, 9, 14],
		sdata: {
			solar: [1402, 8, 14]
		},
		stime: 1701767783917,
		gdate: [2023, 12, 5],
		gdata: {
			gregorian: [2023, 11, 5]
		},
		gtime: 1701767783917
	},
	{
		sdate: [1402, 9, 15],
		sdata: {
			solar: [1402, 8, 15]
		},
		stime: 1701854183917,
		gdate: [2023, 12, 6],
		gdata: {
			gregorian: [2023, 11, 6]
		},
		gtime: 1701854183917
	},
	{
		sdate: [1402, 9, 16],
		sdata: {
			solar: [1402, 8, 16]
		},
		stime: 1701940583917,
		gdate: [2023, 12, 7],
		gdata: {
			gregorian: [2023, 11, 7]
		},
		gtime: 1701940583917
	},
	{
		sdate: [1402, 9, 17],
		sdata: {
			solar: [1402, 8, 17]
		},
		stime: 1702026983917,
		gdate: [2023, 12, 8],
		gdata: {
			gregorian: [2023, 11, 8]
		},
		gtime: 1702026983917
	},
	{
		sdate: [1402, 9, 18],
		sdata: {
			solar: [1402, 8, 18]
		},
		stime: 1702113383917,
		gdate: [2023, 12, 9],
		gdata: {
			gregorian: [2023, 11, 9]
		},
		gtime: 1702113383917
	},
	{
		sdate: [1402, 9, 19],
		sdata: {
			solar: [1402, 8, 19]
		},
		stime: 1702199783917,
		gdate: [2023, 12, 10],
		gdata: {
			gregorian: [2023, 11, 10]
		},
		gtime: 1702199783917
	},
	{
		sdate: [1402, 9, 20],
		sdata: {
			solar: [1402, 8, 20]
		},
		stime: 1702286183917,
		gdate: [2023, 12, 11],
		gdata: {
			gregorian: [2023, 11, 11]
		},
		gtime: 1702286183917
	},
	{
		sdate: [1402, 9, 21],
		sdata: {
			solar: [1402, 8, 21]
		},
		stime: 1702372583917,
		gdate: [2023, 12, 12],
		gdata: {
			gregorian: [2023, 11, 12]
		},
		gtime: 1702372583917
	},
	{
		sdate: [1402, 9, 22],
		sdata: {
			solar: [1402, 8, 22]
		},
		stime: 1702458983917,
		gdate: [2023, 12, 13],
		gdata: {
			gregorian: [2023, 11, 13]
		},
		gtime: 1702458983917
	},
	{
		sdate: [1402, 9, 23],
		sdata: {
			solar: [1402, 8, 23]
		},
		stime: 1702545383917,
		gdate: [2023, 12, 14],
		gdata: {
			gregorian: [2023, 11, 14]
		},
		gtime: 1702545383917
	},
	{
		sdate: [1402, 9, 24],
		sdata: {
			solar: [1402, 8, 24]
		},
		stime: 1702631783917,
		gdate: [2023, 12, 15],
		gdata: {
			gregorian: [2023, 11, 15]
		},
		gtime: 1702631783917
	},
	{
		sdate: [1402, 9, 25],
		sdata: {
			solar: [1402, 8, 25]
		},
		stime: 1702718183917,
		gdate: [2023, 12, 16],
		gdata: {
			gregorian: [2023, 11, 16]
		},
		gtime: 1702718183917
	},
	{
		sdate: [1402, 9, 26],
		sdata: {
			solar: [1402, 8, 26]
		},
		stime: 1702804583917,
		gdate: [2023, 12, 17],
		gdata: {
			gregorian: [2023, 11, 17]
		},
		gtime: 1702804583917
	},
	{
		sdate: [1402, 9, 27],
		sdata: {
			solar: [1402, 8, 27]
		},
		stime: 1702890983917,
		gdate: [2023, 12, 18],
		gdata: {
			gregorian: [2023, 11, 18]
		},
		gtime: 1702890983917
	},
	{
		sdate: [1402, 9, 28],
		sdata: {
			solar: [1402, 8, 28]
		},
		stime: 1702977383917,
		gdate: [2023, 12, 19],
		gdata: {
			gregorian: [2023, 11, 19]
		},
		gtime: 1702977383917
	},
	{
		sdate: [1402, 9, 29],
		sdata: {
			solar: [1402, 8, 29]
		},
		stime: 1703063783917,
		gdate: [2023, 12, 20],
		gdata: {
			gregorian: [2023, 11, 20]
		},
		gtime: 1703063783917
	},
	{
		sdate: [1402, 9, 30],
		sdata: {
			solar: [1402, 8, 30]
		},
		stime: 1703150183917,
		gdate: [2023, 12, 21],
		gdata: {
			gregorian: [2023, 11, 21]
		},
		gtime: 1703150183917
	},
	{
		sdate: [1402, 10, 1],
		sdata: {
			solar: [1402, 9, 1]
		},
		stime: 1703236583917,
		gdate: [2023, 12, 22],
		gdata: {
			gregorian: [2023, 11, 22]
		},
		gtime: 1703236583917
	},
	{
		sdate: [1402, 10, 2],
		sdata: {
			solar: [1402, 9, 2]
		},
		stime: 1703322983917,
		gdate: [2023, 12, 23],
		gdata: {
			gregorian: [2023, 11, 23]
		},
		gtime: 1703322983917
	},
	{
		sdate: [1402, 10, 3],
		sdata: {
			solar: [1402, 9, 3]
		},
		stime: 1703409383917,
		gdate: [2023, 12, 24],
		gdata: {
			gregorian: [2023, 11, 24]
		},
		gtime: 1703409383917
	},
	{
		sdate: [1402, 10, 4],
		sdata: {
			solar: [1402, 9, 4]
		},
		stime: 1703495783917,
		gdate: [2023, 12, 25],
		gdata: {
			gregorian: [2023, 11, 25]
		},
		gtime: 1703495783917
	},
	{
		sdate: [1402, 10, 5],
		sdata: {
			solar: [1402, 9, 5]
		},
		stime: 1703582183917,
		gdate: [2023, 12, 26],
		gdata: {
			gregorian: [2023, 11, 26]
		},
		gtime: 1703582183917
	},
	{
		sdate: [1402, 10, 6],
		sdata: {
			solar: [1402, 9, 6]
		},
		stime: 1703668583917,
		gdate: [2023, 12, 27],
		gdata: {
			gregorian: [2023, 11, 27]
		},
		gtime: 1703668583917
	},
	{
		sdate: [1402, 10, 7],
		sdata: {
			solar: [1402, 9, 7]
		},
		stime: 1703754983917,
		gdate: [2023, 12, 28],
		gdata: {
			gregorian: [2023, 11, 28]
		},
		gtime: 1703754983917
	},
	{
		sdate: [1402, 10, 8],
		sdata: {
			solar: [1402, 9, 8]
		},
		stime: 1703841383917,
		gdate: [2023, 12, 29],
		gdata: {
			gregorian: [2023, 11, 29]
		},
		gtime: 1703841383917
	},
	{
		sdate: [1402, 10, 9],
		sdata: {
			solar: [1402, 9, 9]
		},
		stime: 1703927783917,
		gdate: [2023, 12, 30],
		gdata: {
			gregorian: [2023, 11, 30]
		},
		gtime: 1703927783917
	},
	{
		sdate: [1402, 10, 10],
		sdata: {
			solar: [1402, 9, 10]
		},
		stime: 1704014183917,
		gdate: [2023, 12, 31],
		gdata: {
			gregorian: [2023, 11, 31]
		},
		gtime: 1704014183917
	},
	{
		sdate: [1402, 10, 11],
		sdata: {
			solar: [1402, 9, 11]
		},
		stime: 1704100583917,
		gdate: [2024, 1, 1],
		gdata: {
			gregorian: [2024, 0, 1]
		},
		gtime: 1704100583917
	},
	{
		sdate: [1402, 10, 12],
		sdata: {
			solar: [1402, 9, 12]
		},
		stime: 1704186983917,
		gdate: [2024, 1, 2],
		gdata: {
			gregorian: [2024, 0, 2]
		},
		gtime: 1704186983917
	},
	{
		sdate: [1402, 10, 13],
		sdata: {
			solar: [1402, 9, 13]
		},
		stime: 1704273383917,
		gdate: [2024, 1, 3],
		gdata: {
			gregorian: [2024, 0, 3]
		},
		gtime: 1704273383917
	},
	{
		sdate: [1402, 10, 14],
		sdata: {
			solar: [1402, 9, 14]
		},
		stime: 1704359783917,
		gdate: [2024, 1, 4],
		gdata: {
			gregorian: [2024, 0, 4]
		},
		gtime: 1704359783917
	},
	{
		sdate: [1402, 10, 15],
		sdata: {
			solar: [1402, 9, 15]
		},
		stime: 1704446183917,
		gdate: [2024, 1, 5],
		gdata: {
			gregorian: [2024, 0, 5]
		},
		gtime: 1704446183917
	},
	{
		sdate: [1402, 10, 16],
		sdata: {
			solar: [1402, 9, 16]
		},
		stime: 1704532583917,
		gdate: [2024, 1, 6],
		gdata: {
			gregorian: [2024, 0, 6]
		},
		gtime: 1704532583917
	},
	{
		sdate: [1402, 10, 17],
		sdata: {
			solar: [1402, 9, 17]
		},
		stime: 1704618983917,
		gdate: [2024, 1, 7],
		gdata: {
			gregorian: [2024, 0, 7]
		},
		gtime: 1704618983917
	},
	{
		sdate: [1402, 10, 18],
		sdata: {
			solar: [1402, 9, 18]
		},
		stime: 1704705383917,
		gdate: [2024, 1, 8],
		gdata: {
			gregorian: [2024, 0, 8]
		},
		gtime: 1704705383917
	},
	{
		sdate: [1402, 10, 19],
		sdata: {
			solar: [1402, 9, 19]
		},
		stime: 1704791783917,
		gdate: [2024, 1, 9],
		gdata: {
			gregorian: [2024, 0, 9]
		},
		gtime: 1704791783917
	},
	{
		sdate: [1402, 10, 20],
		sdata: {
			solar: [1402, 9, 20]
		},
		stime: 1704878183917,
		gdate: [2024, 1, 10],
		gdata: {
			gregorian: [2024, 0, 10]
		},
		gtime: 1704878183917
	},
	{
		sdate: [1402, 10, 21],
		sdata: {
			solar: [1402, 9, 21]
		},
		stime: 1704964583917,
		gdate: [2024, 1, 11],
		gdata: {
			gregorian: [2024, 0, 11]
		},
		gtime: 1704964583917
	},
	{
		sdate: [1402, 10, 22],
		sdata: {
			solar: [1402, 9, 22]
		},
		stime: 1705050983917,
		gdate: [2024, 1, 12],
		gdata: {
			gregorian: [2024, 0, 12]
		},
		gtime: 1705050983917
	},
	{
		sdate: [1402, 10, 23],
		sdata: {
			solar: [1402, 9, 23]
		},
		stime: 1705137383917,
		gdate: [2024, 1, 13],
		gdata: {
			gregorian: [2024, 0, 13]
		},
		gtime: 1705137383917
	},
	{
		sdate: [1402, 10, 24],
		sdata: {
			solar: [1402, 9, 24]
		},
		stime: 1705223783917,
		gdate: [2024, 1, 14],
		gdata: {
			gregorian: [2024, 0, 14]
		},
		gtime: 1705223783917
	},
	{
		sdate: [1402, 10, 25],
		sdata: {
			solar: [1402, 9, 25]
		},
		stime: 1705310183917,
		gdate: [2024, 1, 15],
		gdata: {
			gregorian: [2024, 0, 15]
		},
		gtime: 1705310183917
	},
	{
		sdate: [1402, 10, 26],
		sdata: {
			solar: [1402, 9, 26]
		},
		stime: 1705396583917,
		gdate: [2024, 1, 16],
		gdata: {
			gregorian: [2024, 0, 16]
		},
		gtime: 1705396583917
	},
	{
		sdate: [1402, 10, 27],
		sdata: {
			solar: [1402, 9, 27]
		},
		stime: 1705482983917,
		gdate: [2024, 1, 17],
		gdata: {
			gregorian: [2024, 0, 17]
		},
		gtime: 1705482983917
	},
	{
		sdate: [1402, 10, 28],
		sdata: {
			solar: [1402, 9, 28]
		},
		stime: 1705569383917,
		gdate: [2024, 1, 18],
		gdata: {
			gregorian: [2024, 0, 18]
		},
		gtime: 1705569383917
	},
	{
		sdate: [1402, 10, 29],
		sdata: {
			solar: [1402, 9, 29]
		},
		stime: 1705655783917,
		gdate: [2024, 1, 19],
		gdata: {
			gregorian: [2024, 0, 19]
		},
		gtime: 1705655783917
	},
	{
		sdate: [1402, 10, 30],
		sdata: {
			solar: [1402, 9, 30]
		},
		stime: 1705742183917,
		gdate: [2024, 1, 20],
		gdata: {
			gregorian: [2024, 0, 20]
		},
		gtime: 1705742183917
	},
	{
		sdate: [1402, 11, 1],
		sdata: {
			solar: [1402, 10, 1]
		},
		stime: 1705828583917,
		gdate: [2024, 1, 21],
		gdata: {
			gregorian: [2024, 0, 21]
		},
		gtime: 1705828583917
	},
	{
		sdate: [1402, 11, 2],
		sdata: {
			solar: [1402, 10, 2]
		},
		stime: 1705914983917,
		gdate: [2024, 1, 22],
		gdata: {
			gregorian: [2024, 0, 22]
		},
		gtime: 1705914983917
	},
	{
		sdate: [1402, 11, 3],
		sdata: {
			solar: [1402, 10, 3]
		},
		stime: 1706001383917,
		gdate: [2024, 1, 23],
		gdata: {
			gregorian: [2024, 0, 23]
		},
		gtime: 1706001383917
	},
	{
		sdate: [1402, 11, 4],
		sdata: {
			solar: [1402, 10, 4]
		},
		stime: 1706087783917,
		gdate: [2024, 1, 24],
		gdata: {
			gregorian: [2024, 0, 24]
		},
		gtime: 1706087783917
	},
	{
		sdate: [1402, 11, 5],
		sdata: {
			solar: [1402, 10, 5]
		},
		stime: 1706174183917,
		gdate: [2024, 1, 25],
		gdata: {
			gregorian: [2024, 0, 25]
		},
		gtime: 1706174183917
	},
	{
		sdate: [1402, 11, 6],
		sdata: {
			solar: [1402, 10, 6]
		},
		stime: 1706260583917,
		gdate: [2024, 1, 26],
		gdata: {
			gregorian: [2024, 0, 26]
		},
		gtime: 1706260583917
	},
	{
		sdate: [1402, 11, 7],
		sdata: {
			solar: [1402, 10, 7]
		},
		stime: 1706346983917,
		gdate: [2024, 1, 27],
		gdata: {
			gregorian: [2024, 0, 27]
		},
		gtime: 1706346983917
	},
	{
		sdate: [1402, 11, 8],
		sdata: {
			solar: [1402, 10, 8]
		},
		stime: 1706433383917,
		gdate: [2024, 1, 28],
		gdata: {
			gregorian: [2024, 0, 28]
		},
		gtime: 1706433383917
	},
	{
		sdate: [1402, 11, 9],
		sdata: {
			solar: [1402, 10, 9]
		},
		stime: 1706519783917,
		gdate: [2024, 1, 29],
		gdata: {
			gregorian: [2024, 0, 29]
		},
		gtime: 1706519783917
	},
	{
		sdate: [1402, 11, 10],
		sdata: {
			solar: [1402, 10, 10]
		},
		stime: 1706606183917,
		gdate: [2024, 1, 30],
		gdata: {
			gregorian: [2024, 0, 30]
		},
		gtime: 1706606183917
	},
	{
		sdate: [1402, 11, 11],
		sdata: {
			solar: [1402, 10, 11]
		},
		stime: 1706692583917,
		gdate: [2024, 1, 31],
		gdata: {
			gregorian: [2024, 0, 31]
		},
		gtime: 1706692583917
	},
	{
		sdate: [1402, 11, 12],
		sdata: {
			solar: [1402, 10, 12]
		},
		stime: 1706778983917,
		gdate: [2024, 2, 1],
		gdata: {
			gregorian: [2024, 1, 1]
		},
		gtime: 1706778983917
	},
	{
		sdate: [1402, 11, 13],
		sdata: {
			solar: [1402, 10, 13]
		},
		stime: 1706865383917,
		gdate: [2024, 2, 2],
		gdata: {
			gregorian: [2024, 1, 2]
		},
		gtime: 1706865383917
	},
	{
		sdate: [1402, 11, 14],
		sdata: {
			solar: [1402, 10, 14]
		},
		stime: 1706951783917,
		gdate: [2024, 2, 3],
		gdata: {
			gregorian: [2024, 1, 3]
		},
		gtime: 1706951783917
	},
	{
		sdate: [1402, 11, 15],
		sdata: {
			solar: [1402, 10, 15]
		},
		stime: 1707038183917,
		gdate: [2024, 2, 4],
		gdata: {
			gregorian: [2024, 1, 4]
		},
		gtime: 1707038183917
	},
	{
		sdate: [1402, 11, 16],
		sdata: {
			solar: [1402, 10, 16]
		},
		stime: 1707124583917,
		gdate: [2024, 2, 5],
		gdata: {
			gregorian: [2024, 1, 5]
		},
		gtime: 1707124583917
	},
	{
		sdate: [1402, 11, 17],
		sdata: {
			solar: [1402, 10, 17]
		},
		stime: 1707210983917,
		gdate: [2024, 2, 6],
		gdata: {
			gregorian: [2024, 1, 6]
		},
		gtime: 1707210983917
	},
	{
		sdate: [1402, 11, 18],
		sdata: {
			solar: [1402, 10, 18]
		},
		stime: 1707297383917,
		gdate: [2024, 2, 7],
		gdata: {
			gregorian: [2024, 1, 7]
		},
		gtime: 1707297383917
	},
	{
		sdate: [1402, 11, 19],
		sdata: {
			solar: [1402, 10, 19]
		},
		stime: 1707383783917,
		gdate: [2024, 2, 8],
		gdata: {
			gregorian: [2024, 1, 8]
		},
		gtime: 1707383783917
	},
	{
		sdate: [1402, 11, 20],
		sdata: {
			solar: [1402, 10, 20]
		},
		stime: 1707470183917,
		gdate: [2024, 2, 9],
		gdata: {
			gregorian: [2024, 1, 9]
		},
		gtime: 1707470183917
	},
	{
		sdate: [1402, 11, 21],
		sdata: {
			solar: [1402, 10, 21]
		},
		stime: 1707556583917,
		gdate: [2024, 2, 10],
		gdata: {
			gregorian: [2024, 1, 10]
		},
		gtime: 1707556583917
	},
	{
		sdate: [1402, 11, 22],
		sdata: {
			solar: [1402, 10, 22]
		},
		stime: 1707642983917,
		gdate: [2024, 2, 11],
		gdata: {
			gregorian: [2024, 1, 11]
		},
		gtime: 1707642983917
	},
	{
		sdate: [1402, 11, 23],
		sdata: {
			solar: [1402, 10, 23]
		},
		stime: 1707729383917,
		gdate: [2024, 2, 12],
		gdata: {
			gregorian: [2024, 1, 12]
		},
		gtime: 1707729383917
	},
	{
		sdate: [1402, 11, 24],
		sdata: {
			solar: [1402, 10, 24]
		},
		stime: 1707815783917,
		gdate: [2024, 2, 13],
		gdata: {
			gregorian: [2024, 1, 13]
		},
		gtime: 1707815783917
	},
	{
		sdate: [1402, 11, 25],
		sdata: {
			solar: [1402, 10, 25]
		},
		stime: 1707902183917,
		gdate: [2024, 2, 14],
		gdata: {
			gregorian: [2024, 1, 14]
		},
		gtime: 1707902183917
	},
	{
		sdate: [1402, 11, 26],
		sdata: {
			solar: [1402, 10, 26]
		},
		stime: 1707988583917,
		gdate: [2024, 2, 15],
		gdata: {
			gregorian: [2024, 1, 15]
		},
		gtime: 1707988583917
	},
	{
		sdate: [1402, 11, 27],
		sdata: {
			solar: [1402, 10, 27]
		},
		stime: 1708074983917,
		gdate: [2024, 2, 16],
		gdata: {
			gregorian: [2024, 1, 16]
		},
		gtime: 1708074983917
	},
	{
		sdate: [1402, 11, 28],
		sdata: {
			solar: [1402, 10, 28]
		},
		stime: 1708161383917,
		gdate: [2024, 2, 17],
		gdata: {
			gregorian: [2024, 1, 17]
		},
		gtime: 1708161383917
	},
	{
		sdate: [1402, 11, 29],
		sdata: {
			solar: [1402, 10, 29]
		},
		stime: 1708247783917,
		gdate: [2024, 2, 18],
		gdata: {
			gregorian: [2024, 1, 18]
		},
		gtime: 1708247783917
	},
	{
		sdate: [1402, 11, 30],
		sdata: {
			solar: [1402, 10, 30]
		},
		stime: 1708334183917,
		gdate: [2024, 2, 19],
		gdata: {
			gregorian: [2024, 1, 19]
		},
		gtime: 1708334183917
	},
	{
		sdate: [1402, 12, 1],
		sdata: {
			solar: [1402, 11, 1]
		},
		stime: 1708420583917,
		gdate: [2024, 2, 20],
		gdata: {
			gregorian: [2024, 1, 20]
		},
		gtime: 1708420583917
	},
	{
		sdate: [1402, 12, 2],
		sdata: {
			solar: [1402, 11, 2]
		},
		stime: 1708506983917,
		gdate: [2024, 2, 21],
		gdata: {
			gregorian: [2024, 1, 21]
		},
		gtime: 1708506983917
	},
	{
		sdate: [1402, 12, 3],
		sdata: {
			solar: [1402, 11, 3]
		},
		stime: 1708593383917,
		gdate: [2024, 2, 22],
		gdata: {
			gregorian: [2024, 1, 22]
		},
		gtime: 1708593383917
	},
	{
		sdate: [1402, 12, 4],
		sdata: {
			solar: [1402, 11, 4]
		},
		stime: 1708679783917,
		gdate: [2024, 2, 23],
		gdata: {
			gregorian: [2024, 1, 23]
		},
		gtime: 1708679783917
	},
	{
		sdate: [1402, 12, 5],
		sdata: {
			solar: [1402, 11, 5]
		},
		stime: 1708766183917,
		gdate: [2024, 2, 24],
		gdata: {
			gregorian: [2024, 1, 24]
		},
		gtime: 1708766183917
	},
	{
		sdate: [1402, 12, 6],
		sdata: {
			solar: [1402, 11, 6]
		},
		stime: 1708852583917,
		gdate: [2024, 2, 25],
		gdata: {
			gregorian: [2024, 1, 25]
		},
		gtime: 1708852583917
	},
	{
		sdate: [1402, 12, 7],
		sdata: {
			solar: [1402, 11, 7]
		},
		stime: 1708938983917,
		gdate: [2024, 2, 26],
		gdata: {
			gregorian: [2024, 1, 26]
		},
		gtime: 1708938983917
	},
	{
		sdate: [1402, 12, 8],
		sdata: {
			solar: [1402, 11, 8]
		},
		stime: 1709025383917,
		gdate: [2024, 2, 27],
		gdata: {
			gregorian: [2024, 1, 27]
		},
		gtime: 1709025383917
	},
	{
		sdate: [1402, 12, 9],
		sdata: {
			solar: [1402, 11, 9]
		},
		stime: 1709111783917,
		gdate: [2024, 2, 28],
		gdata: {
			gregorian: [2024, 1, 28]
		},
		gtime: 1709111783917
	},
	{
		sdate: [1402, 12, 10],
		sdata: {
			solar: [1402, 11, 10]
		},
		stime: 1709198183917,
		gdate: [2024, 2, 29],
		gdata: {
			gregorian: [2024, 1, 29]
		},
		gtime: 1709198183917
	},
	{
		sdate: [1402, 12, 11],
		sdata: {
			solar: [1402, 11, 11]
		},
		stime: 1709284583917,
		gdate: [2024, 3, 1],
		gdata: {
			gregorian: [2024, 2, 1]
		},
		gtime: 1709284583917
	},
	{
		sdate: [1402, 12, 12],
		sdata: {
			solar: [1402, 11, 12]
		},
		stime: 1709370983917,
		gdate: [2024, 3, 2],
		gdata: {
			gregorian: [2024, 2, 2]
		},
		gtime: 1709370983917
	},
	{
		sdate: [1402, 12, 13],
		sdata: {
			solar: [1402, 11, 13]
		},
		stime: 1709457383917,
		gdate: [2024, 3, 3],
		gdata: {
			gregorian: [2024, 2, 3]
		},
		gtime: 1709457383917
	},
	{
		sdate: [1402, 12, 14],
		sdata: {
			solar: [1402, 11, 14]
		},
		stime: 1709543783917,
		gdate: [2024, 3, 4],
		gdata: {
			gregorian: [2024, 2, 4]
		},
		gtime: 1709543783917
	},
	{
		sdate: [1402, 12, 15],
		sdata: {
			solar: [1402, 11, 15]
		},
		stime: 1709630183917,
		gdate: [2024, 3, 5],
		gdata: {
			gregorian: [2024, 2, 5]
		},
		gtime: 1709630183917
	},
	{
		sdate: [1402, 12, 16],
		sdata: {
			solar: [1402, 11, 16]
		},
		stime: 1709716583917,
		gdate: [2024, 3, 6],
		gdata: {
			gregorian: [2024, 2, 6]
		},
		gtime: 1709716583917
	},
	{
		sdate: [1402, 12, 17],
		sdata: {
			solar: [1402, 11, 17]
		},
		stime: 1709802983917,
		gdate: [2024, 3, 7],
		gdata: {
			gregorian: [2024, 2, 7]
		},
		gtime: 1709802983917
	},
	{
		sdate: [1402, 12, 18],
		sdata: {
			solar: [1402, 11, 18]
		},
		stime: 1709889383917,
		gdate: [2024, 3, 8],
		gdata: {
			gregorian: [2024, 2, 8]
		},
		gtime: 1709889383917
	},
	{
		sdate: [1402, 12, 19],
		sdata: {
			solar: [1402, 11, 19]
		},
		stime: 1709975783917,
		gdate: [2024, 3, 9],
		gdata: {
			gregorian: [2024, 2, 9]
		},
		gtime: 1709975783917
	},
	{
		sdate: [1402, 12, 20],
		sdata: {
			solar: [1402, 11, 20]
		},
		stime: 1710062183917,
		gdate: [2024, 3, 10],
		gdata: {
			gregorian: [2024, 2, 10]
		},
		gtime: 1710062183917
	},
	{
		sdate: [1402, 12, 21],
		sdata: {
			solar: [1402, 11, 21]
		},
		stime: 1710148583917,
		gdate: [2024, 3, 11],
		gdata: {
			gregorian: [2024, 2, 11]
		},
		gtime: 1710148583917
	},
	{
		sdate: [1402, 12, 22],
		sdata: {
			solar: [1402, 11, 22]
		},
		stime: 1710234983917,
		gdate: [2024, 3, 12],
		gdata: {
			gregorian: [2024, 2, 12]
		},
		gtime: 1710234983917
	},
	{
		sdate: [1402, 12, 23],
		sdata: {
			solar: [1402, 11, 23]
		},
		stime: 1710321383917,
		gdate: [2024, 3, 13],
		gdata: {
			gregorian: [2024, 2, 13]
		},
		gtime: 1710321383917
	},
	{
		sdate: [1402, 12, 24],
		sdata: {
			solar: [1402, 11, 24]
		},
		stime: 1710407783917,
		gdate: [2024, 3, 14],
		gdata: {
			gregorian: [2024, 2, 14]
		},
		gtime: 1710407783917
	},
	{
		sdate: [1402, 12, 25],
		sdata: {
			solar: [1402, 11, 25]
		},
		stime: 1710494183917,
		gdate: [2024, 3, 15],
		gdata: {
			gregorian: [2024, 2, 15]
		},
		gtime: 1710494183917
	},
	{
		sdate: [1402, 12, 26],
		sdata: {
			solar: [1402, 11, 26]
		},
		stime: 1710580583917,
		gdate: [2024, 3, 16],
		gdata: {
			gregorian: [2024, 2, 16]
		},
		gtime: 1710580583917
	},
	{
		sdate: [1402, 12, 27],
		sdata: {
			solar: [1402, 11, 27]
		},
		stime: 1710666983917,
		gdate: [2024, 3, 17],
		gdata: {
			gregorian: [2024, 2, 17]
		},
		gtime: 1710666983917
	},
	{
		sdate: [1402, 12, 28],
		sdata: {
			solar: [1402, 11, 28]
		},
		stime: 1710753383917,
		gdate: [2024, 3, 18],
		gdata: {
			gregorian: [2024, 2, 18]
		},
		gtime: 1710753383917
	},
	{
		sdate: [1402, 12, 29],
		sdata: {
			solar: [1402, 11, 29]
		},
		stime: 1710839783917,
		gdate: [2024, 3, 19],
		gdata: {
			gregorian: [2024, 2, 19]
		},
		gtime: 1710839783917
	},
	{
		sdate: [1403, 1, 1],
		sdata: {
			solar: [1403, 0, 1]
		},
		stime: 1710926183917,
		gdate: [2024, 3, 20],
		gdata: {
			gregorian: [2024, 2, 20]
		},
		gtime: 1710926183917
	},
	{
		sdate: [1403, 1, 2],
		sdata: {
			solar: [1403, 0, 2]
		},
		stime: 1711012583917,
		gdate: [2024, 3, 21],
		gdata: {
			gregorian: [2024, 2, 21]
		},
		gtime: 1711012583917
	},
	{
		sdate: [1403, 1, 3],
		sdata: {
			solar: [1403, 0, 3]
		},
		stime: 1711098983917,
		gdate: [2024, 3, 22],
		gdata: {
			gregorian: [2024, 2, 22]
		},
		gtime: 1711098983917
	},
	{
		sdate: [1403, 1, 4],
		sdata: {
			solar: [1403, 0, 4]
		},
		stime: 1711185383917,
		gdate: [2024, 3, 23],
		gdata: {
			gregorian: [2024, 2, 23]
		},
		gtime: 1711185383917
	},
	{
		sdate: [1403, 1, 5],
		sdata: {
			solar: [1403, 0, 5]
		},
		stime: 1711271783917,
		gdate: [2024, 3, 24],
		gdata: {
			gregorian: [2024, 2, 24]
		},
		gtime: 1711271783917
	},
	{
		sdate: [1403, 1, 6],
		sdata: {
			solar: [1403, 0, 6]
		},
		stime: 1711358183917,
		gdate: [2024, 3, 25],
		gdata: {
			gregorian: [2024, 2, 25]
		},
		gtime: 1711358183917
	},
	{
		sdate: [1403, 1, 7],
		sdata: {
			solar: [1403, 0, 7]
		},
		stime: 1711444583917,
		gdate: [2024, 3, 26],
		gdata: {
			gregorian: [2024, 2, 26]
		},
		gtime: 1711444583917
	},
	{
		sdate: [1403, 1, 8],
		sdata: {
			solar: [1403, 0, 8]
		},
		stime: 1711530983917,
		gdate: [2024, 3, 27],
		gdata: {
			gregorian: [2024, 2, 27]
		},
		gtime: 1711530983917
	},
	{
		sdate: [1403, 1, 9],
		sdata: {
			solar: [1403, 0, 9]
		},
		stime: 1711617383917,
		gdate: [2024, 3, 28],
		gdata: {
			gregorian: [2024, 2, 28]
		},
		gtime: 1711617383917
	},
	{
		sdate: [1403, 1, 10],
		sdata: {
			solar: [1403, 0, 10]
		},
		stime: 1711703783917,
		gdate: [2024, 3, 29],
		gdata: {
			gregorian: [2024, 2, 29]
		},
		gtime: 1711703783917
	},
	{
		sdate: [1403, 1, 11],
		sdata: {
			solar: [1403, 0, 11]
		},
		stime: 1711790183917,
		gdate: [2024, 3, 30],
		gdata: {
			gregorian: [2024, 2, 30]
		},
		gtime: 1711790183917
	},
	{
		sdate: [1403, 1, 12],
		sdata: {
			solar: [1403, 0, 12]
		},
		stime: 1711876583917,
		gdate: [2024, 3, 31],
		gdata: {
			gregorian: [2024, 2, 31]
		},
		gtime: 1711876583917
	},
	{
		sdate: [1403, 1, 13],
		sdata: {
			solar: [1403, 0, 13]
		},
		stime: 1711962983917,
		gdate: [2024, 4, 1],
		gdata: {
			gregorian: [2024, 3, 1]
		},
		gtime: 1711962983917
	},
	{
		sdate: [1403, 1, 14],
		sdata: {
			solar: [1403, 0, 14]
		},
		stime: 1712049383917,
		gdate: [2024, 4, 2],
		gdata: {
			gregorian: [2024, 3, 2]
		},
		gtime: 1712049383917
	},
	{
		sdate: [1403, 1, 15],
		sdata: {
			solar: [1403, 0, 15]
		},
		stime: 1712135783917,
		gdate: [2024, 4, 3],
		gdata: {
			gregorian: [2024, 3, 3]
		},
		gtime: 1712135783917
	},
	{
		sdate: [1403, 1, 16],
		sdata: {
			solar: [1403, 0, 16]
		},
		stime: 1712222183917,
		gdate: [2024, 4, 4],
		gdata: {
			gregorian: [2024, 3, 4]
		},
		gtime: 1712222183917
	},
	{
		sdate: [1403, 1, 17],
		sdata: {
			solar: [1403, 0, 17]
		},
		stime: 1712308583917,
		gdate: [2024, 4, 5],
		gdata: {
			gregorian: [2024, 3, 5]
		},
		gtime: 1712308583917
	},
	{
		sdate: [1403, 1, 18],
		sdata: {
			solar: [1403, 0, 18]
		},
		stime: 1712394983917,
		gdate: [2024, 4, 6],
		gdata: {
			gregorian: [2024, 3, 6]
		},
		gtime: 1712394983917
	},
	{
		sdate: [1403, 1, 19],
		sdata: {
			solar: [1403, 0, 19]
		},
		stime: 1712481383917,
		gdate: [2024, 4, 7],
		gdata: {
			gregorian: [2024, 3, 7]
		},
		gtime: 1712481383917
	},
	{
		sdate: [1403, 1, 20],
		sdata: {
			solar: [1403, 0, 20]
		},
		stime: 1712567783917,
		gdate: [2024, 4, 8],
		gdata: {
			gregorian: [2024, 3, 8]
		},
		gtime: 1712567783917
	},
	{
		sdate: [1403, 1, 21],
		sdata: {
			solar: [1403, 0, 21]
		},
		stime: 1712654183917,
		gdate: [2024, 4, 9],
		gdata: {
			gregorian: [2024, 3, 9]
		},
		gtime: 1712654183917
	},
	{
		sdate: [1403, 1, 22],
		sdata: {
			solar: [1403, 0, 22]
		},
		stime: 1712740583917,
		gdate: [2024, 4, 10],
		gdata: {
			gregorian: [2024, 3, 10]
		},
		gtime: 1712740583917
	},
	{
		sdate: [1403, 1, 23],
		sdata: {
			solar: [1403, 0, 23]
		},
		stime: 1712826983917,
		gdate: [2024, 4, 11],
		gdata: {
			gregorian: [2024, 3, 11]
		},
		gtime: 1712826983917
	},
	{
		sdate: [1403, 1, 24],
		sdata: {
			solar: [1403, 0, 24]
		},
		stime: 1712913383917,
		gdate: [2024, 4, 12],
		gdata: {
			gregorian: [2024, 3, 12]
		},
		gtime: 1712913383917
	},
	{
		sdate: [1403, 1, 25],
		sdata: {
			solar: [1403, 0, 25]
		},
		stime: 1712999783917,
		gdate: [2024, 4, 13],
		gdata: {
			gregorian: [2024, 3, 13]
		},
		gtime: 1712999783917
	},
	{
		sdate: [1403, 1, 26],
		sdata: {
			solar: [1403, 0, 26]
		},
		stime: 1713086183917,
		gdate: [2024, 4, 14],
		gdata: {
			gregorian: [2024, 3, 14]
		},
		gtime: 1713086183917
	},
	{
		sdate: [1403, 1, 27],
		sdata: {
			solar: [1403, 0, 27]
		},
		stime: 1713172583917,
		gdate: [2024, 4, 15],
		gdata: {
			gregorian: [2024, 3, 15]
		},
		gtime: 1713172583917
	},
	{
		sdate: [1403, 1, 28],
		sdata: {
			solar: [1403, 0, 28]
		},
		stime: 1713258983917,
		gdate: [2024, 4, 16],
		gdata: {
			gregorian: [2024, 3, 16]
		},
		gtime: 1713258983917
	},
	{
		sdate: [1403, 1, 29],
		sdata: {
			solar: [1403, 0, 29]
		},
		stime: 1713345383917,
		gdate: [2024, 4, 17],
		gdata: {
			gregorian: [2024, 3, 17]
		},
		gtime: 1713345383917
	},
	{
		sdate: [1403, 1, 30],
		sdata: {
			solar: [1403, 0, 30]
		},
		stime: 1713431783917,
		gdate: [2024, 4, 18],
		gdata: {
			gregorian: [2024, 3, 18]
		},
		gtime: 1713431783917
	},
	{
		sdate: [1403, 1, 31],
		sdata: {
			solar: [1403, 0, 31]
		},
		stime: 1713518183917,
		gdate: [2024, 4, 19],
		gdata: {
			gregorian: [2024, 3, 19]
		},
		gtime: 1713518183917
	},
	{
		sdate: [1403, 2, 1],
		sdata: {
			solar: [1403, 1, 1]
		},
		stime: 1713604583917,
		gdate: [2024, 4, 20],
		gdata: {
			gregorian: [2024, 3, 20]
		},
		gtime: 1713604583917
	},
	{
		sdate: [1403, 2, 2],
		sdata: {
			solar: [1403, 1, 2]
		},
		stime: 1713690983917,
		gdate: [2024, 4, 21],
		gdata: {
			gregorian: [2024, 3, 21]
		},
		gtime: 1713690983917
	},
	{
		sdate: [1403, 2, 3],
		sdata: {
			solar: [1403, 1, 3]
		},
		stime: 1713777383917,
		gdate: [2024, 4, 22],
		gdata: {
			gregorian: [2024, 3, 22]
		},
		gtime: 1713777383917
	},
	{
		sdate: [1403, 2, 4],
		sdata: {
			solar: [1403, 1, 4]
		},
		stime: 1713863783917,
		gdate: [2024, 4, 23],
		gdata: {
			gregorian: [2024, 3, 23]
		},
		gtime: 1713863783917
	},
	{
		sdate: [1403, 2, 5],
		sdata: {
			solar: [1403, 1, 5]
		},
		stime: 1713950183917,
		gdate: [2024, 4, 24],
		gdata: {
			gregorian: [2024, 3, 24]
		},
		gtime: 1713950183917
	},
	{
		sdate: [1403, 2, 6],
		sdata: {
			solar: [1403, 1, 6]
		},
		stime: 1714036583917,
		gdate: [2024, 4, 25],
		gdata: {
			gregorian: [2024, 3, 25]
		},
		gtime: 1714036583917
	},
	{
		sdate: [1403, 2, 7],
		sdata: {
			solar: [1403, 1, 7]
		},
		stime: 1714122983917,
		gdate: [2024, 4, 26],
		gdata: {
			gregorian: [2024, 3, 26]
		},
		gtime: 1714122983917
	},
	{
		sdate: [1403, 2, 8],
		sdata: {
			solar: [1403, 1, 8]
		},
		stime: 1714209383917,
		gdate: [2024, 4, 27],
		gdata: {
			gregorian: [2024, 3, 27]
		},
		gtime: 1714209383917
	},
	{
		sdate: [1403, 2, 9],
		sdata: {
			solar: [1403, 1, 9]
		},
		stime: 1714295783917,
		gdate: [2024, 4, 28],
		gdata: {
			gregorian: [2024, 3, 28]
		},
		gtime: 1714295783917
	},
	{
		sdate: [1403, 2, 10],
		sdata: {
			solar: [1403, 1, 10]
		},
		stime: 1714382183917,
		gdate: [2024, 4, 29],
		gdata: {
			gregorian: [2024, 3, 29]
		},
		gtime: 1714382183917
	},
	{
		sdate: [1403, 2, 11],
		sdata: {
			solar: [1403, 1, 11]
		},
		stime: 1714468583917,
		gdate: [2024, 4, 30],
		gdata: {
			gregorian: [2024, 3, 30]
		},
		gtime: 1714468583917
	},
	{
		sdate: [1403, 2, 12],
		sdata: {
			solar: [1403, 1, 12]
		},
		stime: 1714554983917,
		gdate: [2024, 5, 1],
		gdata: {
			gregorian: [2024, 4, 1]
		},
		gtime: 1714554983917
	},
	{
		sdate: [1403, 2, 13],
		sdata: {
			solar: [1403, 1, 13]
		},
		stime: 1714641383917,
		gdate: [2024, 5, 2],
		gdata: {
			gregorian: [2024, 4, 2]
		},
		gtime: 1714641383917
	},
	{
		sdate: [1403, 2, 14],
		sdata: {
			solar: [1403, 1, 14]
		},
		stime: 1714727783917,
		gdate: [2024, 5, 3],
		gdata: {
			gregorian: [2024, 4, 3]
		},
		gtime: 1714727783917
	},
	{
		sdate: [1403, 2, 15],
		sdata: {
			solar: [1403, 1, 15]
		},
		stime: 1714814183917,
		gdate: [2024, 5, 4],
		gdata: {
			gregorian: [2024, 4, 4]
		},
		gtime: 1714814183917
	},
	{
		sdate: [1403, 2, 16],
		sdata: {
			solar: [1403, 1, 16]
		},
		stime: 1714900583917,
		gdate: [2024, 5, 5],
		gdata: {
			gregorian: [2024, 4, 5]
		},
		gtime: 1714900583917
	},
	{
		sdate: [1403, 2, 17],
		sdata: {
			solar: [1403, 1, 17]
		},
		stime: 1714986983917,
		gdate: [2024, 5, 6],
		gdata: {
			gregorian: [2024, 4, 6]
		},
		gtime: 1714986983917
	},
	{
		sdate: [1403, 2, 18],
		sdata: {
			solar: [1403, 1, 18]
		},
		stime: 1715073383917,
		gdate: [2024, 5, 7],
		gdata: {
			gregorian: [2024, 4, 7]
		},
		gtime: 1715073383917
	},
	{
		sdate: [1403, 2, 19],
		sdata: {
			solar: [1403, 1, 19]
		},
		stime: 1715159783917,
		gdate: [2024, 5, 8],
		gdata: {
			gregorian: [2024, 4, 8]
		},
		gtime: 1715159783917
	},
	{
		sdate: [1403, 2, 20],
		sdata: {
			solar: [1403, 1, 20]
		},
		stime: 1715246183917,
		gdate: [2024, 5, 9],
		gdata: {
			gregorian: [2024, 4, 9]
		},
		gtime: 1715246183917
	},
	{
		sdate: [1403, 2, 21],
		sdata: {
			solar: [1403, 1, 21]
		},
		stime: 1715332583917,
		gdate: [2024, 5, 10],
		gdata: {
			gregorian: [2024, 4, 10]
		},
		gtime: 1715332583917
	},
	{
		sdate: [1403, 2, 22],
		sdata: {
			solar: [1403, 1, 22]
		},
		stime: 1715418983917,
		gdate: [2024, 5, 11],
		gdata: {
			gregorian: [2024, 4, 11]
		},
		gtime: 1715418983917
	},
	{
		sdate: [1403, 2, 23],
		sdata: {
			solar: [1403, 1, 23]
		},
		stime: 1715505383917,
		gdate: [2024, 5, 12],
		gdata: {
			gregorian: [2024, 4, 12]
		},
		gtime: 1715505383917
	},
	{
		sdate: [1403, 2, 24],
		sdata: {
			solar: [1403, 1, 24]
		},
		stime: 1715591783917,
		gdate: [2024, 5, 13],
		gdata: {
			gregorian: [2024, 4, 13]
		},
		gtime: 1715591783917
	},
	{
		sdate: [1403, 2, 25],
		sdata: {
			solar: [1403, 1, 25]
		},
		stime: 1715678183917,
		gdate: [2024, 5, 14],
		gdata: {
			gregorian: [2024, 4, 14]
		},
		gtime: 1715678183917
	},
	{
		sdate: [1403, 2, 26],
		sdata: {
			solar: [1403, 1, 26]
		},
		stime: 1715764583917,
		gdate: [2024, 5, 15],
		gdata: {
			gregorian: [2024, 4, 15]
		},
		gtime: 1715764583917
	},
	{
		sdate: [1403, 2, 27],
		sdata: {
			solar: [1403, 1, 27]
		},
		stime: 1715850983917,
		gdate: [2024, 5, 16],
		gdata: {
			gregorian: [2024, 4, 16]
		},
		gtime: 1715850983917
	},
	{
		sdate: [1403, 2, 28],
		sdata: {
			solar: [1403, 1, 28]
		},
		stime: 1715937383917,
		gdate: [2024, 5, 17],
		gdata: {
			gregorian: [2024, 4, 17]
		},
		gtime: 1715937383917
	},
	{
		sdate: [1403, 2, 29],
		sdata: {
			solar: [1403, 1, 29]
		},
		stime: 1716023783917,
		gdate: [2024, 5, 18],
		gdata: {
			gregorian: [2024, 4, 18]
		},
		gtime: 1716023783917
	},
	{
		sdate: [1403, 2, 30],
		sdata: {
			solar: [1403, 1, 30]
		},
		stime: 1716110183917,
		gdate: [2024, 5, 19],
		gdata: {
			gregorian: [2024, 4, 19]
		},
		gtime: 1716110183917
	},
	{
		sdate: [1403, 2, 31],
		sdata: {
			solar: [1403, 1, 31]
		},
		stime: 1716196583917,
		gdate: [2024, 5, 20],
		gdata: {
			gregorian: [2024, 4, 20]
		},
		gtime: 1716196583917
	},
	{
		sdate: [1403, 3, 1],
		sdata: {
			solar: [1403, 2, 1]
		},
		stime: 1716282983917,
		gdate: [2024, 5, 21],
		gdata: {
			gregorian: [2024, 4, 21]
		},
		gtime: 1716282983917
	},
	{
		sdate: [1403, 3, 2],
		sdata: {
			solar: [1403, 2, 2]
		},
		stime: 1716369383917,
		gdate: [2024, 5, 22],
		gdata: {
			gregorian: [2024, 4, 22]
		},
		gtime: 1716369383917
	},
	{
		sdate: [1403, 3, 3],
		sdata: {
			solar: [1403, 2, 3]
		},
		stime: 1716455783917,
		gdate: [2024, 5, 23],
		gdata: {
			gregorian: [2024, 4, 23]
		},
		gtime: 1716455783917
	},
	{
		sdate: [1403, 3, 4],
		sdata: {
			solar: [1403, 2, 4]
		},
		stime: 1716542183917,
		gdate: [2024, 5, 24],
		gdata: {
			gregorian: [2024, 4, 24]
		},
		gtime: 1716542183917
	},
	{
		sdate: [1403, 3, 5],
		sdata: {
			solar: [1403, 2, 5]
		},
		stime: 1716628583917,
		gdate: [2024, 5, 25],
		gdata: {
			gregorian: [2024, 4, 25]
		},
		gtime: 1716628583917
	},
	{
		sdate: [1403, 3, 6],
		sdata: {
			solar: [1403, 2, 6]
		},
		stime: 1716714983917,
		gdate: [2024, 5, 26],
		gdata: {
			gregorian: [2024, 4, 26]
		},
		gtime: 1716714983917
	},
	{
		sdate: [1403, 3, 7],
		sdata: {
			solar: [1403, 2, 7]
		},
		stime: 1716801383917,
		gdate: [2024, 5, 27],
		gdata: {
			gregorian: [2024, 4, 27]
		},
		gtime: 1716801383917
	},
	{
		sdate: [1403, 3, 8],
		sdata: {
			solar: [1403, 2, 8]
		},
		stime: 1716887783917,
		gdate: [2024, 5, 28],
		gdata: {
			gregorian: [2024, 4, 28]
		},
		gtime: 1716887783917
	},
	{
		sdate: [1403, 3, 9],
		sdata: {
			solar: [1403, 2, 9]
		},
		stime: 1716974183917,
		gdate: [2024, 5, 29],
		gdata: {
			gregorian: [2024, 4, 29]
		},
		gtime: 1716974183917
	},
	{
		sdate: [1403, 3, 10],
		sdata: {
			solar: [1403, 2, 10]
		},
		stime: 1717060583917,
		gdate: [2024, 5, 30],
		gdata: {
			gregorian: [2024, 4, 30]
		},
		gtime: 1717060583917
	},
	{
		sdate: [1403, 3, 11],
		sdata: {
			solar: [1403, 2, 11]
		},
		stime: 1717146983917,
		gdate: [2024, 5, 31],
		gdata: {
			gregorian: [2024, 4, 31]
		},
		gtime: 1717146983917
	},
	{
		sdate: [1403, 3, 12],
		sdata: {
			solar: [1403, 2, 12]
		},
		stime: 1717233383917,
		gdate: [2024, 6, 1],
		gdata: {
			gregorian: [2024, 5, 1]
		},
		gtime: 1717233383917
	},
	{
		sdate: [1403, 3, 13],
		sdata: {
			solar: [1403, 2, 13]
		},
		stime: 1717319783917,
		gdate: [2024, 6, 2],
		gdata: {
			gregorian: [2024, 5, 2]
		},
		gtime: 1717319783917
	},
	{
		sdate: [1403, 3, 14],
		sdata: {
			solar: [1403, 2, 14]
		},
		stime: 1717406183917,
		gdate: [2024, 6, 3],
		gdata: {
			gregorian: [2024, 5, 3]
		},
		gtime: 1717406183917
	},
	{
		sdate: [1403, 3, 15],
		sdata: {
			solar: [1403, 2, 15]
		},
		stime: 1717492583917,
		gdate: [2024, 6, 4],
		gdata: {
			gregorian: [2024, 5, 4]
		},
		gtime: 1717492583917
	},
	{
		sdate: [1403, 3, 16],
		sdata: {
			solar: [1403, 2, 16]
		},
		stime: 1717578983917,
		gdate: [2024, 6, 5],
		gdata: {
			gregorian: [2024, 5, 5]
		},
		gtime: 1717578983917
	},
	{
		sdate: [1403, 3, 17],
		sdata: {
			solar: [1403, 2, 17]
		},
		stime: 1717665383917,
		gdate: [2024, 6, 6],
		gdata: {
			gregorian: [2024, 5, 6]
		},
		gtime: 1717665383917
	},
	{
		sdate: [1403, 3, 18],
		sdata: {
			solar: [1403, 2, 18]
		},
		stime: 1717751783917,
		gdate: [2024, 6, 7],
		gdata: {
			gregorian: [2024, 5, 7]
		},
		gtime: 1717751783917
	},
	{
		sdate: [1403, 3, 19],
		sdata: {
			solar: [1403, 2, 19]
		},
		stime: 1717838183917,
		gdate: [2024, 6, 8],
		gdata: {
			gregorian: [2024, 5, 8]
		},
		gtime: 1717838183917
	},
	{
		sdate: [1403, 3, 20],
		sdata: {
			solar: [1403, 2, 20]
		},
		stime: 1717924583917,
		gdate: [2024, 6, 9],
		gdata: {
			gregorian: [2024, 5, 9]
		},
		gtime: 1717924583917
	},
	{
		sdate: [1403, 3, 21],
		sdata: {
			solar: [1403, 2, 21]
		},
		stime: 1718010983917,
		gdate: [2024, 6, 10],
		gdata: {
			gregorian: [2024, 5, 10]
		},
		gtime: 1718010983917
	},
	{
		sdate: [1403, 3, 22],
		sdata: {
			solar: [1403, 2, 22]
		},
		stime: 1718097383917,
		gdate: [2024, 6, 11],
		gdata: {
			gregorian: [2024, 5, 11]
		},
		gtime: 1718097383917
	},
	{
		sdate: [1403, 3, 23],
		sdata: {
			solar: [1403, 2, 23]
		},
		stime: 1718183783917,
		gdate: [2024, 6, 12],
		gdata: {
			gregorian: [2024, 5, 12]
		},
		gtime: 1718183783917
	},
	{
		sdate: [1403, 3, 24],
		sdata: {
			solar: [1403, 2, 24]
		},
		stime: 1718270183917,
		gdate: [2024, 6, 13],
		gdata: {
			gregorian: [2024, 5, 13]
		},
		gtime: 1718270183917
	},
	{
		sdate: [1403, 3, 25],
		sdata: {
			solar: [1403, 2, 25]
		},
		stime: 1718356583917,
		gdate: [2024, 6, 14],
		gdata: {
			gregorian: [2024, 5, 14]
		},
		gtime: 1718356583917
	},
	{
		sdate: [1403, 3, 26],
		sdata: {
			solar: [1403, 2, 26]
		},
		stime: 1718442983917,
		gdate: [2024, 6, 15],
		gdata: {
			gregorian: [2024, 5, 15]
		},
		gtime: 1718442983917
	},
	{
		sdate: [1403, 3, 27],
		sdata: {
			solar: [1403, 2, 27]
		},
		stime: 1718529383917,
		gdate: [2024, 6, 16],
		gdata: {
			gregorian: [2024, 5, 16]
		},
		gtime: 1718529383917
	},
	{
		sdate: [1403, 3, 28],
		sdata: {
			solar: [1403, 2, 28]
		},
		stime: 1718615783917,
		gdate: [2024, 6, 17],
		gdata: {
			gregorian: [2024, 5, 17]
		},
		gtime: 1718615783917
	},
	{
		sdate: [1403, 3, 29],
		sdata: {
			solar: [1403, 2, 29]
		},
		stime: 1718702183917,
		gdate: [2024, 6, 18],
		gdata: {
			gregorian: [2024, 5, 18]
		},
		gtime: 1718702183917
	},
	{
		sdate: [1403, 3, 30],
		sdata: {
			solar: [1403, 2, 30]
		},
		stime: 1718788583917,
		gdate: [2024, 6, 19],
		gdata: {
			gregorian: [2024, 5, 19]
		},
		gtime: 1718788583917
	},
	{
		sdate: [1403, 3, 31],
		sdata: {
			solar: [1403, 2, 31]
		},
		stime: 1718874983917,
		gdate: [2024, 6, 20],
		gdata: {
			gregorian: [2024, 5, 20]
		},
		gtime: 1718874983917
	},
	{
		sdate: [1403, 4, 1],
		sdata: {
			solar: [1403, 3, 1]
		},
		stime: 1718961383917,
		gdate: [2024, 6, 21],
		gdata: {
			gregorian: [2024, 5, 21]
		},
		gtime: 1718961383917
	},
	{
		sdate: [1403, 4, 2],
		sdata: {
			solar: [1403, 3, 2]
		},
		stime: 1719047783917,
		gdate: [2024, 6, 22],
		gdata: {
			gregorian: [2024, 5, 22]
		},
		gtime: 1719047783917
	},
	{
		sdate: [1403, 4, 3],
		sdata: {
			solar: [1403, 3, 3]
		},
		stime: 1719134183917,
		gdate: [2024, 6, 23],
		gdata: {
			gregorian: [2024, 5, 23]
		},
		gtime: 1719134183917
	},
	{
		sdate: [1403, 4, 4],
		sdata: {
			solar: [1403, 3, 4]
		},
		stime: 1719220583917,
		gdate: [2024, 6, 24],
		gdata: {
			gregorian: [2024, 5, 24]
		},
		gtime: 1719220583917
	},
	{
		sdate: [1403, 4, 5],
		sdata: {
			solar: [1403, 3, 5]
		},
		stime: 1719306983917,
		gdate: [2024, 6, 25],
		gdata: {
			gregorian: [2024, 5, 25]
		},
		gtime: 1719306983917
	},
	{
		sdate: [1403, 4, 6],
		sdata: {
			solar: [1403, 3, 6]
		},
		stime: 1719393383917,
		gdate: [2024, 6, 26],
		gdata: {
			gregorian: [2024, 5, 26]
		},
		gtime: 1719393383917
	},
	{
		sdate: [1403, 4, 7],
		sdata: {
			solar: [1403, 3, 7]
		},
		stime: 1719479783917,
		gdate: [2024, 6, 27],
		gdata: {
			gregorian: [2024, 5, 27]
		},
		gtime: 1719479783917
	},
	{
		sdate: [1403, 4, 8],
		sdata: {
			solar: [1403, 3, 8]
		},
		stime: 1719566183917,
		gdate: [2024, 6, 28],
		gdata: {
			gregorian: [2024, 5, 28]
		},
		gtime: 1719566183917
	},
	{
		sdate: [1403, 4, 9],
		sdata: {
			solar: [1403, 3, 9]
		},
		stime: 1719652583917,
		gdate: [2024, 6, 29],
		gdata: {
			gregorian: [2024, 5, 29]
		},
		gtime: 1719652583917
	},
	{
		sdate: [1403, 4, 10],
		sdata: {
			solar: [1403, 3, 10]
		},
		stime: 1719738983917,
		gdate: [2024, 6, 30],
		gdata: {
			gregorian: [2024, 5, 30]
		},
		gtime: 1719738983917
	},
	{
		sdate: [1403, 4, 11],
		sdata: {
			solar: [1403, 3, 11]
		},
		stime: 1719825383917,
		gdate: [2024, 7, 1],
		gdata: {
			gregorian: [2024, 6, 1]
		},
		gtime: 1719825383917
	},
	{
		sdate: [1403, 4, 12],
		sdata: {
			solar: [1403, 3, 12]
		},
		stime: 1719911783917,
		gdate: [2024, 7, 2],
		gdata: {
			gregorian: [2024, 6, 2]
		},
		gtime: 1719911783917
	},
	{
		sdate: [1403, 4, 13],
		sdata: {
			solar: [1403, 3, 13]
		},
		stime: 1719998183917,
		gdate: [2024, 7, 3],
		gdata: {
			gregorian: [2024, 6, 3]
		},
		gtime: 1719998183917
	},
	{
		sdate: [1403, 4, 14],
		sdata: {
			solar: [1403, 3, 14]
		},
		stime: 1720084583917,
		gdate: [2024, 7, 4],
		gdata: {
			gregorian: [2024, 6, 4]
		},
		gtime: 1720084583917
	},
	{
		sdate: [1403, 4, 15],
		sdata: {
			solar: [1403, 3, 15]
		},
		stime: 1720170983917,
		gdate: [2024, 7, 5],
		gdata: {
			gregorian: [2024, 6, 5]
		},
		gtime: 1720170983917
	},
	{
		sdate: [1403, 4, 16],
		sdata: {
			solar: [1403, 3, 16]
		},
		stime: 1720257383917,
		gdate: [2024, 7, 6],
		gdata: {
			gregorian: [2024, 6, 6]
		},
		gtime: 1720257383917
	},
	{
		sdate: [1403, 4, 17],
		sdata: {
			solar: [1403, 3, 17]
		},
		stime: 1720343783917,
		gdate: [2024, 7, 7],
		gdata: {
			gregorian: [2024, 6, 7]
		},
		gtime: 1720343783917
	},
	{
		sdate: [1403, 4, 18],
		sdata: {
			solar: [1403, 3, 18]
		},
		stime: 1720430183917,
		gdate: [2024, 7, 8],
		gdata: {
			gregorian: [2024, 6, 8]
		},
		gtime: 1720430183917
	},
	{
		sdate: [1403, 4, 19],
		sdata: {
			solar: [1403, 3, 19]
		},
		stime: 1720516583917,
		gdate: [2024, 7, 9],
		gdata: {
			gregorian: [2024, 6, 9]
		},
		gtime: 1720516583917
	},
	{
		sdate: [1403, 4, 20],
		sdata: {
			solar: [1403, 3, 20]
		},
		stime: 1720602983917,
		gdate: [2024, 7, 10],
		gdata: {
			gregorian: [2024, 6, 10]
		},
		gtime: 1720602983917
	},
	{
		sdate: [1403, 4, 21],
		sdata: {
			solar: [1403, 3, 21]
		},
		stime: 1720689383917,
		gdate: [2024, 7, 11],
		gdata: {
			gregorian: [2024, 6, 11]
		},
		gtime: 1720689383917
	},
	{
		sdate: [1403, 4, 22],
		sdata: {
			solar: [1403, 3, 22]
		},
		stime: 1720775783917,
		gdate: [2024, 7, 12],
		gdata: {
			gregorian: [2024, 6, 12]
		},
		gtime: 1720775783917
	},
	{
		sdate: [1403, 4, 23],
		sdata: {
			solar: [1403, 3, 23]
		},
		stime: 1720862183917,
		gdate: [2024, 7, 13],
		gdata: {
			gregorian: [2024, 6, 13]
		},
		gtime: 1720862183917
	},
	{
		sdate: [1403, 4, 24],
		sdata: {
			solar: [1403, 3, 24]
		},
		stime: 1720948583917,
		gdate: [2024, 7, 14],
		gdata: {
			gregorian: [2024, 6, 14]
		},
		gtime: 1720948583917
	},
	{
		sdate: [1403, 4, 25],
		sdata: {
			solar: [1403, 3, 25]
		},
		stime: 1721034983917,
		gdate: [2024, 7, 15],
		gdata: {
			gregorian: [2024, 6, 15]
		},
		gtime: 1721034983917
	},
	{
		sdate: [1403, 4, 26],
		sdata: {
			solar: [1403, 3, 26]
		},
		stime: 1721121383917,
		gdate: [2024, 7, 16],
		gdata: {
			gregorian: [2024, 6, 16]
		},
		gtime: 1721121383917
	},
	{
		sdate: [1403, 4, 27],
		sdata: {
			solar: [1403, 3, 27]
		},
		stime: 1721207783917,
		gdate: [2024, 7, 17],
		gdata: {
			gregorian: [2024, 6, 17]
		},
		gtime: 1721207783917
	},
	{
		sdate: [1403, 4, 28],
		sdata: {
			solar: [1403, 3, 28]
		},
		stime: 1721294183917,
		gdate: [2024, 7, 18],
		gdata: {
			gregorian: [2024, 6, 18]
		},
		gtime: 1721294183917
	},
	{
		sdate: [1403, 4, 29],
		sdata: {
			solar: [1403, 3, 29]
		},
		stime: 1721380583917,
		gdate: [2024, 7, 19],
		gdata: {
			gregorian: [2024, 6, 19]
		},
		gtime: 1721380583917
	},
	{
		sdate: [1403, 4, 30],
		sdata: {
			solar: [1403, 3, 30]
		},
		stime: 1721466983917,
		gdate: [2024, 7, 20],
		gdata: {
			gregorian: [2024, 6, 20]
		},
		gtime: 1721466983917
	},
	{
		sdate: [1403, 4, 31],
		sdata: {
			solar: [1403, 3, 31]
		},
		stime: 1721553383917,
		gdate: [2024, 7, 21],
		gdata: {
			gregorian: [2024, 6, 21]
		},
		gtime: 1721553383917
	},
	{
		sdate: [1403, 5, 1],
		sdata: {
			solar: [1403, 4, 1]
		},
		stime: 1721639783917,
		gdate: [2024, 7, 22],
		gdata: {
			gregorian: [2024, 6, 22]
		},
		gtime: 1721639783917
	},
	{
		sdate: [1403, 5, 2],
		sdata: {
			solar: [1403, 4, 2]
		},
		stime: 1721726183917,
		gdate: [2024, 7, 23],
		gdata: {
			gregorian: [2024, 6, 23]
		},
		gtime: 1721726183917
	},
	{
		sdate: [1403, 5, 3],
		sdata: {
			solar: [1403, 4, 3]
		},
		stime: 1721812583917,
		gdate: [2024, 7, 24],
		gdata: {
			gregorian: [2024, 6, 24]
		},
		gtime: 1721812583917
	},
	{
		sdate: [1403, 5, 4],
		sdata: {
			solar: [1403, 4, 4]
		},
		stime: 1721898983917,
		gdate: [2024, 7, 25],
		gdata: {
			gregorian: [2024, 6, 25]
		},
		gtime: 1721898983917
	},
	{
		sdate: [1403, 5, 5],
		sdata: {
			solar: [1403, 4, 5]
		},
		stime: 1721985383917,
		gdate: [2024, 7, 26],
		gdata: {
			gregorian: [2024, 6, 26]
		},
		gtime: 1721985383917
	},
	{
		sdate: [1403, 5, 6],
		sdata: {
			solar: [1403, 4, 6]
		},
		stime: 1722071783917,
		gdate: [2024, 7, 27],
		gdata: {
			gregorian: [2024, 6, 27]
		},
		gtime: 1722071783917
	},
	{
		sdate: [1403, 5, 7],
		sdata: {
			solar: [1403, 4, 7]
		},
		stime: 1722158183917,
		gdate: [2024, 7, 28],
		gdata: {
			gregorian: [2024, 6, 28]
		},
		gtime: 1722158183917
	},
	{
		sdate: [1403, 5, 8],
		sdata: {
			solar: [1403, 4, 8]
		},
		stime: 1722244583917,
		gdate: [2024, 7, 29],
		gdata: {
			gregorian: [2024, 6, 29]
		},
		gtime: 1722244583917
	},
	{
		sdate: [1403, 5, 9],
		sdata: {
			solar: [1403, 4, 9]
		},
		stime: 1722330983917,
		gdate: [2024, 7, 30],
		gdata: {
			gregorian: [2024, 6, 30]
		},
		gtime: 1722330983917
	},
	{
		sdate: [1403, 5, 10],
		sdata: {
			solar: [1403, 4, 10]
		},
		stime: 1722417383917,
		gdate: [2024, 7, 31],
		gdata: {
			gregorian: [2024, 6, 31]
		},
		gtime: 1722417383917
	},
	{
		sdate: [1403, 5, 11],
		sdata: {
			solar: [1403, 4, 11]
		},
		stime: 1722503783917,
		gdate: [2024, 8, 1],
		gdata: {
			gregorian: [2024, 7, 1]
		},
		gtime: 1722503783917
	},
	{
		sdate: [1403, 5, 12],
		sdata: {
			solar: [1403, 4, 12]
		},
		stime: 1722590183917,
		gdate: [2024, 8, 2],
		gdata: {
			gregorian: [2024, 7, 2]
		},
		gtime: 1722590183917
	},
	{
		sdate: [1403, 5, 13],
		sdata: {
			solar: [1403, 4, 13]
		},
		stime: 1722676583917,
		gdate: [2024, 8, 3],
		gdata: {
			gregorian: [2024, 7, 3]
		},
		gtime: 1722676583917
	},
	{
		sdate: [1403, 5, 14],
		sdata: {
			solar: [1403, 4, 14]
		},
		stime: 1722762983917,
		gdate: [2024, 8, 4],
		gdata: {
			gregorian: [2024, 7, 4]
		},
		gtime: 1722762983917
	},
	{
		sdate: [1403, 5, 15],
		sdata: {
			solar: [1403, 4, 15]
		},
		stime: 1722849383917,
		gdate: [2024, 8, 5],
		gdata: {
			gregorian: [2024, 7, 5]
		},
		gtime: 1722849383917
	},
	{
		sdate: [1403, 5, 16],
		sdata: {
			solar: [1403, 4, 16]
		},
		stime: 1722935783917,
		gdate: [2024, 8, 6],
		gdata: {
			gregorian: [2024, 7, 6]
		},
		gtime: 1722935783917
	},
	{
		sdate: [1403, 5, 17],
		sdata: {
			solar: [1403, 4, 17]
		},
		stime: 1723022183917,
		gdate: [2024, 8, 7],
		gdata: {
			gregorian: [2024, 7, 7]
		},
		gtime: 1723022183917
	},
	{
		sdate: [1403, 5, 18],
		sdata: {
			solar: [1403, 4, 18]
		},
		stime: 1723108583917,
		gdate: [2024, 8, 8],
		gdata: {
			gregorian: [2024, 7, 8]
		},
		gtime: 1723108583917
	},
	{
		sdate: [1403, 5, 19],
		sdata: {
			solar: [1403, 4, 19]
		},
		stime: 1723194983917,
		gdate: [2024, 8, 9],
		gdata: {
			gregorian: [2024, 7, 9]
		},
		gtime: 1723194983917
	},
	{
		sdate: [1403, 5, 20],
		sdata: {
			solar: [1403, 4, 20]
		},
		stime: 1723281383917,
		gdate: [2024, 8, 10],
		gdata: {
			gregorian: [2024, 7, 10]
		},
		gtime: 1723281383917
	},
	{
		sdate: [1403, 5, 21],
		sdata: {
			solar: [1403, 4, 21]
		},
		stime: 1723367783917,
		gdate: [2024, 8, 11],
		gdata: {
			gregorian: [2024, 7, 11]
		},
		gtime: 1723367783917
	},
	{
		sdate: [1403, 5, 22],
		sdata: {
			solar: [1403, 4, 22]
		},
		stime: 1723454183917,
		gdate: [2024, 8, 12],
		gdata: {
			gregorian: [2024, 7, 12]
		},
		gtime: 1723454183917
	},
	{
		sdate: [1403, 5, 23],
		sdata: {
			solar: [1403, 4, 23]
		},
		stime: 1723540583917,
		gdate: [2024, 8, 13],
		gdata: {
			gregorian: [2024, 7, 13]
		},
		gtime: 1723540583917
	},
	{
		sdate: [1403, 5, 24],
		sdata: {
			solar: [1403, 4, 24]
		},
		stime: 1723626983917,
		gdate: [2024, 8, 14],
		gdata: {
			gregorian: [2024, 7, 14]
		},
		gtime: 1723626983917
	},
	{
		sdate: [1403, 5, 25],
		sdata: {
			solar: [1403, 4, 25]
		},
		stime: 1723713383917,
		gdate: [2024, 8, 15],
		gdata: {
			gregorian: [2024, 7, 15]
		},
		gtime: 1723713383917
	},
	{
		sdate: [1403, 5, 26],
		sdata: {
			solar: [1403, 4, 26]
		},
		stime: 1723799783917,
		gdate: [2024, 8, 16],
		gdata: {
			gregorian: [2024, 7, 16]
		},
		gtime: 1723799783917
	},
	{
		sdate: [1403, 5, 27],
		sdata: {
			solar: [1403, 4, 27]
		},
		stime: 1723886183917,
		gdate: [2024, 8, 17],
		gdata: {
			gregorian: [2024, 7, 17]
		},
		gtime: 1723886183917
	},
	{
		sdate: [1403, 5, 28],
		sdata: {
			solar: [1403, 4, 28]
		},
		stime: 1723972583917,
		gdate: [2024, 8, 18],
		gdata: {
			gregorian: [2024, 7, 18]
		},
		gtime: 1723972583917
	},
	{
		sdate: [1403, 5, 29],
		sdata: {
			solar: [1403, 4, 29]
		},
		stime: 1724058983917,
		gdate: [2024, 8, 19],
		gdata: {
			gregorian: [2024, 7, 19]
		},
		gtime: 1724058983917
	},
	{
		sdate: [1403, 5, 30],
		sdata: {
			solar: [1403, 4, 30]
		},
		stime: 1724145383917,
		gdate: [2024, 8, 20],
		gdata: {
			gregorian: [2024, 7, 20]
		},
		gtime: 1724145383917
	},
	{
		sdate: [1403, 5, 31],
		sdata: {
			solar: [1403, 4, 31]
		},
		stime: 1724231783917,
		gdate: [2024, 8, 21],
		gdata: {
			gregorian: [2024, 7, 21]
		},
		gtime: 1724231783917
	},
	{
		sdate: [1403, 6, 1],
		sdata: {
			solar: [1403, 5, 1]
		},
		stime: 1724318183917,
		gdate: [2024, 8, 22],
		gdata: {
			gregorian: [2024, 7, 22]
		},
		gtime: 1724318183917
	},
	{
		sdate: [1403, 6, 2],
		sdata: {
			solar: [1403, 5, 2]
		},
		stime: 1724404583917,
		gdate: [2024, 8, 23],
		gdata: {
			gregorian: [2024, 7, 23]
		},
		gtime: 1724404583917
	},
	{
		sdate: [1403, 6, 3],
		sdata: {
			solar: [1403, 5, 3]
		},
		stime: 1724490983917,
		gdate: [2024, 8, 24],
		gdata: {
			gregorian: [2024, 7, 24]
		},
		gtime: 1724490983917
	},
	{
		sdate: [1403, 6, 4],
		sdata: {
			solar: [1403, 5, 4]
		},
		stime: 1724577383917,
		gdate: [2024, 8, 25],
		gdata: {
			gregorian: [2024, 7, 25]
		},
		gtime: 1724577383917
	},
	{
		sdate: [1403, 6, 5],
		sdata: {
			solar: [1403, 5, 5]
		},
		stime: 1724663783917,
		gdate: [2024, 8, 26],
		gdata: {
			gregorian: [2024, 7, 26]
		},
		gtime: 1724663783917
	},
	{
		sdate: [1403, 6, 6],
		sdata: {
			solar: [1403, 5, 6]
		},
		stime: 1724750183917,
		gdate: [2024, 8, 27],
		gdata: {
			gregorian: [2024, 7, 27]
		},
		gtime: 1724750183917
	},
	{
		sdate: [1403, 6, 7],
		sdata: {
			solar: [1403, 5, 7]
		},
		stime: 1724836583917,
		gdate: [2024, 8, 28],
		gdata: {
			gregorian: [2024, 7, 28]
		},
		gtime: 1724836583917
	},
	{
		sdate: [1403, 6, 8],
		sdata: {
			solar: [1403, 5, 8]
		},
		stime: 1724922983917,
		gdate: [2024, 8, 29],
		gdata: {
			gregorian: [2024, 7, 29]
		},
		gtime: 1724922983917
	},
	{
		sdate: [1403, 6, 9],
		sdata: {
			solar: [1403, 5, 9]
		},
		stime: 1725009383917,
		gdate: [2024, 8, 30],
		gdata: {
			gregorian: [2024, 7, 30]
		},
		gtime: 1725009383917
	},
	{
		sdate: [1403, 6, 10],
		sdata: {
			solar: [1403, 5, 10]
		},
		stime: 1725095783917,
		gdate: [2024, 8, 31],
		gdata: {
			gregorian: [2024, 7, 31]
		},
		gtime: 1725095783917
	},
	{
		sdate: [1403, 6, 11],
		sdata: {
			solar: [1403, 5, 11]
		},
		stime: 1725182183917,
		gdate: [2024, 9, 1],
		gdata: {
			gregorian: [2024, 8, 1]
		},
		gtime: 1725182183917
	},
	{
		sdate: [1403, 6, 12],
		sdata: {
			solar: [1403, 5, 12]
		},
		stime: 1725268583917,
		gdate: [2024, 9, 2],
		gdata: {
			gregorian: [2024, 8, 2]
		},
		gtime: 1725268583917
	},
	{
		sdate: [1403, 6, 13],
		sdata: {
			solar: [1403, 5, 13]
		},
		stime: 1725354983917,
		gdate: [2024, 9, 3],
		gdata: {
			gregorian: [2024, 8, 3]
		},
		gtime: 1725354983917
	},
	{
		sdate: [1403, 6, 14],
		sdata: {
			solar: [1403, 5, 14]
		},
		stime: 1725441383917,
		gdate: [2024, 9, 4],
		gdata: {
			gregorian: [2024, 8, 4]
		},
		gtime: 1725441383917
	},
	{
		sdate: [1403, 6, 15],
		sdata: {
			solar: [1403, 5, 15]
		},
		stime: 1725527783917,
		gdate: [2024, 9, 5],
		gdata: {
			gregorian: [2024, 8, 5]
		},
		gtime: 1725527783917
	},
	{
		sdate: [1403, 6, 16],
		sdata: {
			solar: [1403, 5, 16]
		},
		stime: 1725614183917,
		gdate: [2024, 9, 6],
		gdata: {
			gregorian: [2024, 8, 6]
		},
		gtime: 1725614183917
	},
	{
		sdate: [1403, 6, 17],
		sdata: {
			solar: [1403, 5, 17]
		},
		stime: 1725700583917,
		gdate: [2024, 9, 7],
		gdata: {
			gregorian: [2024, 8, 7]
		},
		gtime: 1725700583917
	},
	{
		sdate: [1403, 6, 18],
		sdata: {
			solar: [1403, 5, 18]
		},
		stime: 1725786983917,
		gdate: [2024, 9, 8],
		gdata: {
			gregorian: [2024, 8, 8]
		},
		gtime: 1725786983917
	},
	{
		sdate: [1403, 6, 19],
		sdata: {
			solar: [1403, 5, 19]
		},
		stime: 1725873383917,
		gdate: [2024, 9, 9],
		gdata: {
			gregorian: [2024, 8, 9]
		},
		gtime: 1725873383917
	},
	{
		sdate: [1403, 6, 20],
		sdata: {
			solar: [1403, 5, 20]
		},
		stime: 1725959783917,
		gdate: [2024, 9, 10],
		gdata: {
			gregorian: [2024, 8, 10]
		},
		gtime: 1725959783917
	},
	{
		sdate: [1403, 6, 21],
		sdata: {
			solar: [1403, 5, 21]
		},
		stime: 1726046183917,
		gdate: [2024, 9, 11],
		gdata: {
			gregorian: [2024, 8, 11]
		},
		gtime: 1726046183917
	},
	{
		sdate: [1403, 6, 22],
		sdata: {
			solar: [1403, 5, 22]
		},
		stime: 1726132583917,
		gdate: [2024, 9, 12],
		gdata: {
			gregorian: [2024, 8, 12]
		},
		gtime: 1726132583917
	},
	{
		sdate: [1403, 6, 23],
		sdata: {
			solar: [1403, 5, 23]
		},
		stime: 1726218983917,
		gdate: [2024, 9, 13],
		gdata: {
			gregorian: [2024, 8, 13]
		},
		gtime: 1726218983917
	},
	{
		sdate: [1403, 6, 24],
		sdata: {
			solar: [1403, 5, 24]
		},
		stime: 1726305383917,
		gdate: [2024, 9, 14],
		gdata: {
			gregorian: [2024, 8, 14]
		},
		gtime: 1726305383917
	},
	{
		sdate: [1403, 6, 25],
		sdata: {
			solar: [1403, 5, 25]
		},
		stime: 1726391783917,
		gdate: [2024, 9, 15],
		gdata: {
			gregorian: [2024, 8, 15]
		},
		gtime: 1726391783917
	},
	{
		sdate: [1403, 6, 26],
		sdata: {
			solar: [1403, 5, 26]
		},
		stime: 1726478183917,
		gdate: [2024, 9, 16],
		gdata: {
			gregorian: [2024, 8, 16]
		},
		gtime: 1726478183917
	},
	{
		sdate: [1403, 6, 27],
		sdata: {
			solar: [1403, 5, 27]
		},
		stime: 1726564583917,
		gdate: [2024, 9, 17],
		gdata: {
			gregorian: [2024, 8, 17]
		},
		gtime: 1726564583917
	},
	{
		sdate: [1403, 6, 28],
		sdata: {
			solar: [1403, 5, 28]
		},
		stime: 1726650983917,
		gdate: [2024, 9, 18],
		gdata: {
			gregorian: [2024, 8, 18]
		},
		gtime: 1726650983917
	},
	{
		sdate: [1403, 6, 29],
		sdata: {
			solar: [1403, 5, 29]
		},
		stime: 1726737383917,
		gdate: [2024, 9, 19],
		gdata: {
			gregorian: [2024, 8, 19]
		},
		gtime: 1726737383917
	},
	{
		sdate: [1403, 6, 30],
		sdata: {
			solar: [1403, 5, 30]
		},
		stime: 1726823783917,
		gdate: [2024, 9, 20],
		gdata: {
			gregorian: [2024, 8, 20]
		},
		gtime: 1726823783917
	},
	{
		sdate: [1403, 6, 31],
		sdata: {
			solar: [1403, 5, 31]
		},
		stime: 1726910183917,
		gdate: [2024, 9, 21],
		gdata: {
			gregorian: [2024, 8, 21]
		},
		gtime: 1726910183917
	},
	{
		sdate: [1403, 7, 1],
		sdata: {
			solar: [1403, 6, 1]
		},
		stime: 1726996583917,
		gdate: [2024, 9, 22],
		gdata: {
			gregorian: [2024, 8, 22]
		},
		gtime: 1726996583917
	},
	{
		sdate: [1403, 7, 2],
		sdata: {
			solar: [1403, 6, 2]
		},
		stime: 1727082983917,
		gdate: [2024, 9, 23],
		gdata: {
			gregorian: [2024, 8, 23]
		},
		gtime: 1727082983917
	},
	{
		sdate: [1403, 7, 3],
		sdata: {
			solar: [1403, 6, 3]
		},
		stime: 1727169383917,
		gdate: [2024, 9, 24],
		gdata: {
			gregorian: [2024, 8, 24]
		},
		gtime: 1727169383917
	},
	{
		sdate: [1403, 7, 4],
		sdata: {
			solar: [1403, 6, 4]
		},
		stime: 1727255783917,
		gdate: [2024, 9, 25],
		gdata: {
			gregorian: [2024, 8, 25]
		},
		gtime: 1727255783917
	},
	{
		sdate: [1403, 7, 5],
		sdata: {
			solar: [1403, 6, 5]
		},
		stime: 1727342183917,
		gdate: [2024, 9, 26],
		gdata: {
			gregorian: [2024, 8, 26]
		},
		gtime: 1727342183917
	},
	{
		sdate: [1403, 7, 6],
		sdata: {
			solar: [1403, 6, 6]
		},
		stime: 1727428583917,
		gdate: [2024, 9, 27],
		gdata: {
			gregorian: [2024, 8, 27]
		},
		gtime: 1727428583917
	},
	{
		sdate: [1403, 7, 7],
		sdata: {
			solar: [1403, 6, 7]
		},
		stime: 1727514983917,
		gdate: [2024, 9, 28],
		gdata: {
			gregorian: [2024, 8, 28]
		},
		gtime: 1727514983917
	},
	{
		sdate: [1403, 7, 8],
		sdata: {
			solar: [1403, 6, 8]
		},
		stime: 1727601383917,
		gdate: [2024, 9, 29],
		gdata: {
			gregorian: [2024, 8, 29]
		},
		gtime: 1727601383917
	},
	{
		sdate: [1403, 7, 9],
		sdata: {
			solar: [1403, 6, 9]
		},
		stime: 1727687783917,
		gdate: [2024, 9, 30],
		gdata: {
			gregorian: [2024, 8, 30]
		},
		gtime: 1727687783917
	},
	{
		sdate: [1403, 7, 10],
		sdata: {
			solar: [1403, 6, 10]
		},
		stime: 1727774183917,
		gdate: [2024, 10, 1],
		gdata: {
			gregorian: [2024, 9, 1]
		},
		gtime: 1727774183917
	},
	{
		sdate: [1403, 7, 11],
		sdata: {
			solar: [1403, 6, 11]
		},
		stime: 1727860583917,
		gdate: [2024, 10, 2],
		gdata: {
			gregorian: [2024, 9, 2]
		},
		gtime: 1727860583917
	},
	{
		sdate: [1403, 7, 12],
		sdata: {
			solar: [1403, 6, 12]
		},
		stime: 1727946983917,
		gdate: [2024, 10, 3],
		gdata: {
			gregorian: [2024, 9, 3]
		},
		gtime: 1727946983917
	},
	{
		sdate: [1403, 7, 13],
		sdata: {
			solar: [1403, 6, 13]
		},
		stime: 1728033383917,
		gdate: [2024, 10, 4],
		gdata: {
			gregorian: [2024, 9, 4]
		},
		gtime: 1728033383917
	},
	{
		sdate: [1403, 7, 14],
		sdata: {
			solar: [1403, 6, 14]
		},
		stime: 1728119783917,
		gdate: [2024, 10, 5],
		gdata: {
			gregorian: [2024, 9, 5]
		},
		gtime: 1728119783917
	},
	{
		sdate: [1403, 7, 15],
		sdata: {
			solar: [1403, 6, 15]
		},
		stime: 1728206183917,
		gdate: [2024, 10, 6],
		gdata: {
			gregorian: [2024, 9, 6]
		},
		gtime: 1728206183917
	},
	{
		sdate: [1403, 7, 16],
		sdata: {
			solar: [1403, 6, 16]
		},
		stime: 1728292583917,
		gdate: [2024, 10, 7],
		gdata: {
			gregorian: [2024, 9, 7]
		},
		gtime: 1728292583917
	},
	{
		sdate: [1403, 7, 17],
		sdata: {
			solar: [1403, 6, 17]
		},
		stime: 1728378983917,
		gdate: [2024, 10, 8],
		gdata: {
			gregorian: [2024, 9, 8]
		},
		gtime: 1728378983917
	},
	{
		sdate: [1403, 7, 18],
		sdata: {
			solar: [1403, 6, 18]
		},
		stime: 1728465383917,
		gdate: [2024, 10, 9],
		gdata: {
			gregorian: [2024, 9, 9]
		},
		gtime: 1728465383917
	},
	{
		sdate: [1403, 7, 19],
		sdata: {
			solar: [1403, 6, 19]
		},
		stime: 1728551783917,
		gdate: [2024, 10, 10],
		gdata: {
			gregorian: [2024, 9, 10]
		},
		gtime: 1728551783917
	},
	{
		sdate: [1403, 7, 20],
		sdata: {
			solar: [1403, 6, 20]
		},
		stime: 1728638183917,
		gdate: [2024, 10, 11],
		gdata: {
			gregorian: [2024, 9, 11]
		},
		gtime: 1728638183917
	},
	{
		sdate: [1403, 7, 21],
		sdata: {
			solar: [1403, 6, 21]
		},
		stime: 1728724583917,
		gdate: [2024, 10, 12],
		gdata: {
			gregorian: [2024, 9, 12]
		},
		gtime: 1728724583917
	},
	{
		sdate: [1403, 7, 22],
		sdata: {
			solar: [1403, 6, 22]
		},
		stime: 1728810983917,
		gdate: [2024, 10, 13],
		gdata: {
			gregorian: [2024, 9, 13]
		},
		gtime: 1728810983917
	},
	{
		sdate: [1403, 7, 23],
		sdata: {
			solar: [1403, 6, 23]
		},
		stime: 1728897383917,
		gdate: [2024, 10, 14],
		gdata: {
			gregorian: [2024, 9, 14]
		},
		gtime: 1728897383917
	},
	{
		sdate: [1403, 7, 24],
		sdata: {
			solar: [1403, 6, 24]
		},
		stime: 1728983783917,
		gdate: [2024, 10, 15],
		gdata: {
			gregorian: [2024, 9, 15]
		},
		gtime: 1728983783917
	},
	{
		sdate: [1403, 7, 25],
		sdata: {
			solar: [1403, 6, 25]
		},
		stime: 1729070183917,
		gdate: [2024, 10, 16],
		gdata: {
			gregorian: [2024, 9, 16]
		},
		gtime: 1729070183917
	},
	{
		sdate: [1403, 7, 26],
		sdata: {
			solar: [1403, 6, 26]
		},
		stime: 1729156583917,
		gdate: [2024, 10, 17],
		gdata: {
			gregorian: [2024, 9, 17]
		},
		gtime: 1729156583917
	},
	{
		sdate: [1403, 7, 27],
		sdata: {
			solar: [1403, 6, 27]
		},
		stime: 1729242983917,
		gdate: [2024, 10, 18],
		gdata: {
			gregorian: [2024, 9, 18]
		},
		gtime: 1729242983917
	},
	{
		sdate: [1403, 7, 28],
		sdata: {
			solar: [1403, 6, 28]
		},
		stime: 1729329383917,
		gdate: [2024, 10, 19],
		gdata: {
			gregorian: [2024, 9, 19]
		},
		gtime: 1729329383917
	},
	{
		sdate: [1403, 7, 29],
		sdata: {
			solar: [1403, 6, 29]
		},
		stime: 1729415783917,
		gdate: [2024, 10, 20],
		gdata: {
			gregorian: [2024, 9, 20]
		},
		gtime: 1729415783917
	},
	{
		sdate: [1403, 7, 30],
		sdata: {
			solar: [1403, 6, 30]
		},
		stime: 1729502183917,
		gdate: [2024, 10, 21],
		gdata: {
			gregorian: [2024, 9, 21]
		},
		gtime: 1729502183917
	},
	{
		sdate: [1403, 8, 1],
		sdata: {
			solar: [1403, 7, 1]
		},
		stime: 1729588583917,
		gdate: [2024, 10, 22],
		gdata: {
			gregorian: [2024, 9, 22]
		},
		gtime: 1729588583917
	},
	{
		sdate: [1403, 8, 2],
		sdata: {
			solar: [1403, 7, 2]
		},
		stime: 1729674983917,
		gdate: [2024, 10, 23],
		gdata: {
			gregorian: [2024, 9, 23]
		},
		gtime: 1729674983917
	},
	{
		sdate: [1403, 8, 3],
		sdata: {
			solar: [1403, 7, 3]
		},
		stime: 1729761383917,
		gdate: [2024, 10, 24],
		gdata: {
			gregorian: [2024, 9, 24]
		},
		gtime: 1729761383917
	},
	{
		sdate: [1403, 8, 4],
		sdata: {
			solar: [1403, 7, 4]
		},
		stime: 1729847783917,
		gdate: [2024, 10, 25],
		gdata: {
			gregorian: [2024, 9, 25]
		},
		gtime: 1729847783917
	},
	{
		sdate: [1403, 8, 5],
		sdata: {
			solar: [1403, 7, 5]
		},
		stime: 1729934183917,
		gdate: [2024, 10, 26],
		gdata: {
			gregorian: [2024, 9, 26]
		},
		gtime: 1729934183917
	},
	{
		sdate: [1403, 8, 6],
		sdata: {
			solar: [1403, 7, 6]
		},
		stime: 1730020583917,
		gdate: [2024, 10, 27],
		gdata: {
			gregorian: [2024, 9, 27]
		},
		gtime: 1730020583917
	},
	{
		sdate: [1403, 8, 7],
		sdata: {
			solar: [1403, 7, 7]
		},
		stime: 1730106983917,
		gdate: [2024, 10, 28],
		gdata: {
			gregorian: [2024, 9, 28]
		},
		gtime: 1730106983917
	},
	{
		sdate: [1403, 8, 8],
		sdata: {
			solar: [1403, 7, 8]
		},
		stime: 1730193383917,
		gdate: [2024, 10, 29],
		gdata: {
			gregorian: [2024, 9, 29]
		},
		gtime: 1730193383917
	},
	{
		sdate: [1403, 8, 9],
		sdata: {
			solar: [1403, 7, 9]
		},
		stime: 1730279783917,
		gdate: [2024, 10, 30],
		gdata: {
			gregorian: [2024, 9, 30]
		},
		gtime: 1730279783917
	},
	{
		sdate: [1403, 8, 10],
		sdata: {
			solar: [1403, 7, 10]
		},
		stime: 1730366183917,
		gdate: [2024, 10, 31],
		gdata: {
			gregorian: [2024, 9, 31]
		},
		gtime: 1730366183917
	},
	{
		sdate: [1403, 8, 11],
		sdata: {
			solar: [1403, 7, 11]
		},
		stime: 1730452583917,
		gdate: [2024, 11, 1],
		gdata: {
			gregorian: [2024, 10, 1]
		},
		gtime: 1730452583917
	},
	{
		sdate: [1403, 8, 12],
		sdata: {
			solar: [1403, 7, 12]
		},
		stime: 1730538983917,
		gdate: [2024, 11, 2],
		gdata: {
			gregorian: [2024, 10, 2]
		},
		gtime: 1730538983917
	},
	{
		sdate: [1403, 8, 13],
		sdata: {
			solar: [1403, 7, 13]
		},
		stime: 1730625383917,
		gdate: [2024, 11, 3],
		gdata: {
			gregorian: [2024, 10, 3]
		},
		gtime: 1730625383917
	},
	{
		sdate: [1403, 8, 14],
		sdata: {
			solar: [1403, 7, 14]
		},
		stime: 1730711783917,
		gdate: [2024, 11, 4],
		gdata: {
			gregorian: [2024, 10, 4]
		},
		gtime: 1730711783917
	},
	{
		sdate: [1403, 8, 15],
		sdata: {
			solar: [1403, 7, 15]
		},
		stime: 1730798183917,
		gdate: [2024, 11, 5],
		gdata: {
			gregorian: [2024, 10, 5]
		},
		gtime: 1730798183917
	},
	{
		sdate: [1403, 8, 16],
		sdata: {
			solar: [1403, 7, 16]
		},
		stime: 1730884583917,
		gdate: [2024, 11, 6],
		gdata: {
			gregorian: [2024, 10, 6]
		},
		gtime: 1730884583917
	},
	{
		sdate: [1403, 8, 17],
		sdata: {
			solar: [1403, 7, 17]
		},
		stime: 1730970983917,
		gdate: [2024, 11, 7],
		gdata: {
			gregorian: [2024, 10, 7]
		},
		gtime: 1730970983917
	},
	{
		sdate: [1403, 8, 18],
		sdata: {
			solar: [1403, 7, 18]
		},
		stime: 1731057383917,
		gdate: [2024, 11, 8],
		gdata: {
			gregorian: [2024, 10, 8]
		},
		gtime: 1731057383917
	},
	{
		sdate: [1403, 8, 19],
		sdata: {
			solar: [1403, 7, 19]
		},
		stime: 1731143783917,
		gdate: [2024, 11, 9],
		gdata: {
			gregorian: [2024, 10, 9]
		},
		gtime: 1731143783917
	},
	{
		sdate: [1403, 8, 20],
		sdata: {
			solar: [1403, 7, 20]
		},
		stime: 1731230183917,
		gdate: [2024, 11, 10],
		gdata: {
			gregorian: [2024, 10, 10]
		},
		gtime: 1731230183917
	},
	{
		sdate: [1403, 8, 21],
		sdata: {
			solar: [1403, 7, 21]
		},
		stime: 1731316583917,
		gdate: [2024, 11, 11],
		gdata: {
			gregorian: [2024, 10, 11]
		},
		gtime: 1731316583917
	},
	{
		sdate: [1403, 8, 22],
		sdata: {
			solar: [1403, 7, 22]
		},
		stime: 1731402983917,
		gdate: [2024, 11, 12],
		gdata: {
			gregorian: [2024, 10, 12]
		},
		gtime: 1731402983917
	},
	{
		sdate: [1403, 8, 23],
		sdata: {
			solar: [1403, 7, 23]
		},
		stime: 1731489383917,
		gdate: [2024, 11, 13],
		gdata: {
			gregorian: [2024, 10, 13]
		},
		gtime: 1731489383917
	},
	{
		sdate: [1403, 8, 24],
		sdata: {
			solar: [1403, 7, 24]
		},
		stime: 1731575783917,
		gdate: [2024, 11, 14],
		gdata: {
			gregorian: [2024, 10, 14]
		},
		gtime: 1731575783917
	},
	{
		sdate: [1403, 8, 25],
		sdata: {
			solar: [1403, 7, 25]
		},
		stime: 1731662183917,
		gdate: [2024, 11, 15],
		gdata: {
			gregorian: [2024, 10, 15]
		},
		gtime: 1731662183917
	},
	{
		sdate: [1403, 8, 26],
		sdata: {
			solar: [1403, 7, 26]
		},
		stime: 1731748583917,
		gdate: [2024, 11, 16],
		gdata: {
			gregorian: [2024, 10, 16]
		},
		gtime: 1731748583917
	},
	{
		sdate: [1403, 8, 27],
		sdata: {
			solar: [1403, 7, 27]
		},
		stime: 1731834983917,
		gdate: [2024, 11, 17],
		gdata: {
			gregorian: [2024, 10, 17]
		},
		gtime: 1731834983917
	},
	{
		sdate: [1403, 8, 28],
		sdata: {
			solar: [1403, 7, 28]
		},
		stime: 1731921383917,
		gdate: [2024, 11, 18],
		gdata: {
			gregorian: [2024, 10, 18]
		},
		gtime: 1731921383917
	},
	{
		sdate: [1403, 8, 29],
		sdata: {
			solar: [1403, 7, 29]
		},
		stime: 1732007783917,
		gdate: [2024, 11, 19],
		gdata: {
			gregorian: [2024, 10, 19]
		},
		gtime: 1732007783917
	},
	{
		sdate: [1403, 8, 30],
		sdata: {
			solar: [1403, 7, 30]
		},
		stime: 1732094183917,
		gdate: [2024, 11, 20],
		gdata: {
			gregorian: [2024, 10, 20]
		},
		gtime: 1732094183917
	},
	{
		sdate: [1403, 9, 1],
		sdata: {
			solar: [1403, 8, 1]
		},
		stime: 1732180583917,
		gdate: [2024, 11, 21],
		gdata: {
			gregorian: [2024, 10, 21]
		},
		gtime: 1732180583917
	},
	{
		sdate: [1403, 9, 2],
		sdata: {
			solar: [1403, 8, 2]
		},
		stime: 1732266983917,
		gdate: [2024, 11, 22],
		gdata: {
			gregorian: [2024, 10, 22]
		},
		gtime: 1732266983917
	},
	{
		sdate: [1403, 9, 3],
		sdata: {
			solar: [1403, 8, 3]
		},
		stime: 1732353383917,
		gdate: [2024, 11, 23],
		gdata: {
			gregorian: [2024, 10, 23]
		},
		gtime: 1732353383917
	},
	{
		sdate: [1403, 9, 4],
		sdata: {
			solar: [1403, 8, 4]
		},
		stime: 1732439783917,
		gdate: [2024, 11, 24],
		gdata: {
			gregorian: [2024, 10, 24]
		},
		gtime: 1732439783917
	},
	{
		sdate: [1403, 9, 5],
		sdata: {
			solar: [1403, 8, 5]
		},
		stime: 1732526183917,
		gdate: [2024, 11, 25],
		gdata: {
			gregorian: [2024, 10, 25]
		},
		gtime: 1732526183917
	},
	{
		sdate: [1403, 9, 6],
		sdata: {
			solar: [1403, 8, 6]
		},
		stime: 1732612583917,
		gdate: [2024, 11, 26],
		gdata: {
			gregorian: [2024, 10, 26]
		},
		gtime: 1732612583917
	},
	{
		sdate: [1403, 9, 7],
		sdata: {
			solar: [1403, 8, 7]
		},
		stime: 1732698983917,
		gdate: [2024, 11, 27],
		gdata: {
			gregorian: [2024, 10, 27]
		},
		gtime: 1732698983917
	},
	{
		sdate: [1403, 9, 8],
		sdata: {
			solar: [1403, 8, 8]
		},
		stime: 1732785383917,
		gdate: [2024, 11, 28],
		gdata: {
			gregorian: [2024, 10, 28]
		},
		gtime: 1732785383917
	},
	{
		sdate: [1403, 9, 9],
		sdata: {
			solar: [1403, 8, 9]
		},
		stime: 1732871783917,
		gdate: [2024, 11, 29],
		gdata: {
			gregorian: [2024, 10, 29]
		},
		gtime: 1732871783917
	},
	{
		sdate: [1403, 9, 10],
		sdata: {
			solar: [1403, 8, 10]
		},
		stime: 1732958183917,
		gdate: [2024, 11, 30],
		gdata: {
			gregorian: [2024, 10, 30]
		},
		gtime: 1732958183917
	},
	{
		sdate: [1403, 9, 11],
		sdata: {
			solar: [1403, 8, 11]
		},
		stime: 1733044583917,
		gdate: [2024, 12, 1],
		gdata: {
			gregorian: [2024, 11, 1]
		},
		gtime: 1733044583917
	},
	{
		sdate: [1403, 9, 12],
		sdata: {
			solar: [1403, 8, 12]
		},
		stime: 1733130983917,
		gdate: [2024, 12, 2],
		gdata: {
			gregorian: [2024, 11, 2]
		},
		gtime: 1733130983917
	},
	{
		sdate: [1403, 9, 13],
		sdata: {
			solar: [1403, 8, 13]
		},
		stime: 1733217383917,
		gdate: [2024, 12, 3],
		gdata: {
			gregorian: [2024, 11, 3]
		},
		gtime: 1733217383917
	},
	{
		sdate: [1403, 9, 14],
		sdata: {
			solar: [1403, 8, 14]
		},
		stime: 1733303783917,
		gdate: [2024, 12, 4],
		gdata: {
			gregorian: [2024, 11, 4]
		},
		gtime: 1733303783917
	},
	{
		sdate: [1403, 9, 15],
		sdata: {
			solar: [1403, 8, 15]
		},
		stime: 1733390183917,
		gdate: [2024, 12, 5],
		gdata: {
			gregorian: [2024, 11, 5]
		},
		gtime: 1733390183917
	},
	{
		sdate: [1403, 9, 16],
		sdata: {
			solar: [1403, 8, 16]
		},
		stime: 1733476583917,
		gdate: [2024, 12, 6],
		gdata: {
			gregorian: [2024, 11, 6]
		},
		gtime: 1733476583917
	},
	{
		sdate: [1403, 9, 17],
		sdata: {
			solar: [1403, 8, 17]
		},
		stime: 1733562983917,
		gdate: [2024, 12, 7],
		gdata: {
			gregorian: [2024, 11, 7]
		},
		gtime: 1733562983917
	},
	{
		sdate: [1403, 9, 18],
		sdata: {
			solar: [1403, 8, 18]
		},
		stime: 1733649383917,
		gdate: [2024, 12, 8],
		gdata: {
			gregorian: [2024, 11, 8]
		},
		gtime: 1733649383917
	},
	{
		sdate: [1403, 9, 19],
		sdata: {
			solar: [1403, 8, 19]
		},
		stime: 1733735783917,
		gdate: [2024, 12, 9],
		gdata: {
			gregorian: [2024, 11, 9]
		},
		gtime: 1733735783917
	},
	{
		sdate: [1403, 9, 20],
		sdata: {
			solar: [1403, 8, 20]
		},
		stime: 1733822183917,
		gdate: [2024, 12, 10],
		gdata: {
			gregorian: [2024, 11, 10]
		},
		gtime: 1733822183917
	},
	{
		sdate: [1403, 9, 21],
		sdata: {
			solar: [1403, 8, 21]
		},
		stime: 1733908583917,
		gdate: [2024, 12, 11],
		gdata: {
			gregorian: [2024, 11, 11]
		},
		gtime: 1733908583917
	},
	{
		sdate: [1403, 9, 22],
		sdata: {
			solar: [1403, 8, 22]
		},
		stime: 1733994983917,
		gdate: [2024, 12, 12],
		gdata: {
			gregorian: [2024, 11, 12]
		},
		gtime: 1733994983917
	},
	{
		sdate: [1403, 9, 23],
		sdata: {
			solar: [1403, 8, 23]
		},
		stime: 1734081383917,
		gdate: [2024, 12, 13],
		gdata: {
			gregorian: [2024, 11, 13]
		},
		gtime: 1734081383917
	},
	{
		sdate: [1403, 9, 24],
		sdata: {
			solar: [1403, 8, 24]
		},
		stime: 1734167783917,
		gdate: [2024, 12, 14],
		gdata: {
			gregorian: [2024, 11, 14]
		},
		gtime: 1734167783917
	},
	{
		sdate: [1403, 9, 25],
		sdata: {
			solar: [1403, 8, 25]
		},
		stime: 1734254183917,
		gdate: [2024, 12, 15],
		gdata: {
			gregorian: [2024, 11, 15]
		},
		gtime: 1734254183917
	},
	{
		sdate: [1403, 9, 26],
		sdata: {
			solar: [1403, 8, 26]
		},
		stime: 1734340583917,
		gdate: [2024, 12, 16],
		gdata: {
			gregorian: [2024, 11, 16]
		},
		gtime: 1734340583917
	},
	{
		sdate: [1403, 9, 27],
		sdata: {
			solar: [1403, 8, 27]
		},
		stime: 1734426983917,
		gdate: [2024, 12, 17],
		gdata: {
			gregorian: [2024, 11, 17]
		},
		gtime: 1734426983917
	},
	{
		sdate: [1403, 9, 28],
		sdata: {
			solar: [1403, 8, 28]
		},
		stime: 1734513383917,
		gdate: [2024, 12, 18],
		gdata: {
			gregorian: [2024, 11, 18]
		},
		gtime: 1734513383917
	},
	{
		sdate: [1403, 9, 29],
		sdata: {
			solar: [1403, 8, 29]
		},
		stime: 1734599783917,
		gdate: [2024, 12, 19],
		gdata: {
			gregorian: [2024, 11, 19]
		},
		gtime: 1734599783917
	},
	{
		sdate: [1403, 9, 30],
		sdata: {
			solar: [1403, 8, 30]
		},
		stime: 1734686183917,
		gdate: [2024, 12, 20],
		gdata: {
			gregorian: [2024, 11, 20]
		},
		gtime: 1734686183917
	},
	{
		sdate: [1403, 10, 1],
		sdata: {
			solar: [1403, 9, 1]
		},
		stime: 1734772583917,
		gdate: [2024, 12, 21],
		gdata: {
			gregorian: [2024, 11, 21]
		},
		gtime: 1734772583917
	},
	{
		sdate: [1403, 10, 2],
		sdata: {
			solar: [1403, 9, 2]
		},
		stime: 1734858983917,
		gdate: [2024, 12, 22],
		gdata: {
			gregorian: [2024, 11, 22]
		},
		gtime: 1734858983917
	},
	{
		sdate: [1403, 10, 3],
		sdata: {
			solar: [1403, 9, 3]
		},
		stime: 1734945383917,
		gdate: [2024, 12, 23],
		gdata: {
			gregorian: [2024, 11, 23]
		},
		gtime: 1734945383917
	},
	{
		sdate: [1403, 10, 4],
		sdata: {
			solar: [1403, 9, 4]
		},
		stime: 1735031783917,
		gdate: [2024, 12, 24],
		gdata: {
			gregorian: [2024, 11, 24]
		},
		gtime: 1735031783917
	},
	{
		sdate: [1403, 10, 5],
		sdata: {
			solar: [1403, 9, 5]
		},
		stime: 1735118183917,
		gdate: [2024, 12, 25],
		gdata: {
			gregorian: [2024, 11, 25]
		},
		gtime: 1735118183917
	},
	{
		sdate: [1403, 10, 6],
		sdata: {
			solar: [1403, 9, 6]
		},
		stime: 1735204583917,
		gdate: [2024, 12, 26],
		gdata: {
			gregorian: [2024, 11, 26]
		},
		gtime: 1735204583917
	},
	{
		sdate: [1403, 10, 7],
		sdata: {
			solar: [1403, 9, 7]
		},
		stime: 1735290983917,
		gdate: [2024, 12, 27],
		gdata: {
			gregorian: [2024, 11, 27]
		},
		gtime: 1735290983917
	},
	{
		sdate: [1403, 10, 8],
		sdata: {
			solar: [1403, 9, 8]
		},
		stime: 1735377383917,
		gdate: [2024, 12, 28],
		gdata: {
			gregorian: [2024, 11, 28]
		},
		gtime: 1735377383917
	},
	{
		sdate: [1403, 10, 9],
		sdata: {
			solar: [1403, 9, 9]
		},
		stime: 1735463783917,
		gdate: [2024, 12, 29],
		gdata: {
			gregorian: [2024, 11, 29]
		},
		gtime: 1735463783917
	},
	{
		sdate: [1403, 10, 10],
		sdata: {
			solar: [1403, 9, 10]
		},
		stime: 1735550183917,
		gdate: [2024, 12, 30],
		gdata: {
			gregorian: [2024, 11, 30]
		},
		gtime: 1735550183917
	},
	{
		sdate: [1403, 10, 11],
		sdata: {
			solar: [1403, 9, 11]
		},
		stime: 1735636583917,
		gdate: [2024, 12, 31],
		gdata: {
			gregorian: [2024, 11, 31]
		},
		gtime: 1735636583917
	},
	{
		sdate: [1403, 10, 12],
		sdata: {
			solar: [1403, 9, 12]
		},
		stime: 1735722983917,
		gdate: [2025, 1, 1],
		gdata: {
			gregorian: [2025, 0, 1]
		},
		gtime: 1735722983917
	},
	{
		sdate: [1403, 10, 13],
		sdata: {
			solar: [1403, 9, 13]
		},
		stime: 1735809383917,
		gdate: [2025, 1, 2],
		gdata: {
			gregorian: [2025, 0, 2]
		},
		gtime: 1735809383917
	},
	{
		sdate: [1403, 10, 14],
		sdata: {
			solar: [1403, 9, 14]
		},
		stime: 1735895783917,
		gdate: [2025, 1, 3],
		gdata: {
			gregorian: [2025, 0, 3]
		},
		gtime: 1735895783917
	},
	{
		sdate: [1403, 10, 15],
		sdata: {
			solar: [1403, 9, 15]
		},
		stime: 1735982183917,
		gdate: [2025, 1, 4],
		gdata: {
			gregorian: [2025, 0, 4]
		},
		gtime: 1735982183917
	},
	{
		sdate: [1403, 10, 16],
		sdata: {
			solar: [1403, 9, 16]
		},
		stime: 1736068583917,
		gdate: [2025, 1, 5],
		gdata: {
			gregorian: [2025, 0, 5]
		},
		gtime: 1736068583917
	},
	{
		sdate: [1403, 10, 17],
		sdata: {
			solar: [1403, 9, 17]
		},
		stime: 1736154983917,
		gdate: [2025, 1, 6],
		gdata: {
			gregorian: [2025, 0, 6]
		},
		gtime: 1736154983917
	},
	{
		sdate: [1403, 10, 18],
		sdata: {
			solar: [1403, 9, 18]
		},
		stime: 1736241383917,
		gdate: [2025, 1, 7],
		gdata: {
			gregorian: [2025, 0, 7]
		},
		gtime: 1736241383917
	},
	{
		sdate: [1403, 10, 19],
		sdata: {
			solar: [1403, 9, 19]
		},
		stime: 1736327783917,
		gdate: [2025, 1, 8],
		gdata: {
			gregorian: [2025, 0, 8]
		},
		gtime: 1736327783917
	},
	{
		sdate: [1403, 10, 20],
		sdata: {
			solar: [1403, 9, 20]
		},
		stime: 1736414183917,
		gdate: [2025, 1, 9],
		gdata: {
			gregorian: [2025, 0, 9]
		},
		gtime: 1736414183917
	},
	{
		sdate: [1403, 10, 21],
		sdata: {
			solar: [1403, 9, 21]
		},
		stime: 1736500583917,
		gdate: [2025, 1, 10],
		gdata: {
			gregorian: [2025, 0, 10]
		},
		gtime: 1736500583917
	},
	{
		sdate: [1403, 10, 22],
		sdata: {
			solar: [1403, 9, 22]
		},
		stime: 1736586983917,
		gdate: [2025, 1, 11],
		gdata: {
			gregorian: [2025, 0, 11]
		},
		gtime: 1736586983917
	},
	{
		sdate: [1403, 10, 23],
		sdata: {
			solar: [1403, 9, 23]
		},
		stime: 1736673383917,
		gdate: [2025, 1, 12],
		gdata: {
			gregorian: [2025, 0, 12]
		},
		gtime: 1736673383917
	},
	{
		sdate: [1403, 10, 24],
		sdata: {
			solar: [1403, 9, 24]
		},
		stime: 1736759783917,
		gdate: [2025, 1, 13],
		gdata: {
			gregorian: [2025, 0, 13]
		},
		gtime: 1736759783917
	},
	{
		sdate: [1403, 10, 25],
		sdata: {
			solar: [1403, 9, 25]
		},
		stime: 1736846183917,
		gdate: [2025, 1, 14],
		gdata: {
			gregorian: [2025, 0, 14]
		},
		gtime: 1736846183917
	},
	{
		sdate: [1403, 10, 26],
		sdata: {
			solar: [1403, 9, 26]
		},
		stime: 1736932583917,
		gdate: [2025, 1, 15],
		gdata: {
			gregorian: [2025, 0, 15]
		},
		gtime: 1736932583917
	},
	{
		sdate: [1403, 10, 27],
		sdata: {
			solar: [1403, 9, 27]
		},
		stime: 1737018983917,
		gdate: [2025, 1, 16],
		gdata: {
			gregorian: [2025, 0, 16]
		},
		gtime: 1737018983917
	},
	{
		sdate: [1403, 10, 28],
		sdata: {
			solar: [1403, 9, 28]
		},
		stime: 1737105383917,
		gdate: [2025, 1, 17],
		gdata: {
			gregorian: [2025, 0, 17]
		},
		gtime: 1737105383917
	},
	{
		sdate: [1403, 10, 29],
		sdata: {
			solar: [1403, 9, 29]
		},
		stime: 1737191783917,
		gdate: [2025, 1, 18],
		gdata: {
			gregorian: [2025, 0, 18]
		},
		gtime: 1737191783917
	},
	{
		sdate: [1403, 10, 30],
		sdata: {
			solar: [1403, 9, 30]
		},
		stime: 1737278183917,
		gdate: [2025, 1, 19],
		gdata: {
			gregorian: [2025, 0, 19]
		},
		gtime: 1737278183917
	},
	{
		sdate: [1403, 11, 1],
		sdata: {
			solar: [1403, 10, 1]
		},
		stime: 1737364583917,
		gdate: [2025, 1, 20],
		gdata: {
			gregorian: [2025, 0, 20]
		},
		gtime: 1737364583917
	},
	{
		sdate: [1403, 11, 2],
		sdata: {
			solar: [1403, 10, 2]
		},
		stime: 1737450983917,
		gdate: [2025, 1, 21],
		gdata: {
			gregorian: [2025, 0, 21]
		},
		gtime: 1737450983917
	},
	{
		sdate: [1403, 11, 3],
		sdata: {
			solar: [1403, 10, 3]
		},
		stime: 1737537383917,
		gdate: [2025, 1, 22],
		gdata: {
			gregorian: [2025, 0, 22]
		},
		gtime: 1737537383917
	},
	{
		sdate: [1403, 11, 4],
		sdata: {
			solar: [1403, 10, 4]
		},
		stime: 1737623783917,
		gdate: [2025, 1, 23],
		gdata: {
			gregorian: [2025, 0, 23]
		},
		gtime: 1737623783917
	},
	{
		sdate: [1403, 11, 5],
		sdata: {
			solar: [1403, 10, 5]
		},
		stime: 1737710183917,
		gdate: [2025, 1, 24],
		gdata: {
			gregorian: [2025, 0, 24]
		},
		gtime: 1737710183917
	},
	{
		sdate: [1403, 11, 6],
		sdata: {
			solar: [1403, 10, 6]
		},
		stime: 1737796583917,
		gdate: [2025, 1, 25],
		gdata: {
			gregorian: [2025, 0, 25]
		},
		gtime: 1737796583917
	},
	{
		sdate: [1403, 11, 7],
		sdata: {
			solar: [1403, 10, 7]
		},
		stime: 1737882983917,
		gdate: [2025, 1, 26],
		gdata: {
			gregorian: [2025, 0, 26]
		},
		gtime: 1737882983917
	},
	{
		sdate: [1403, 11, 8],
		sdata: {
			solar: [1403, 10, 8]
		},
		stime: 1737969383917,
		gdate: [2025, 1, 27],
		gdata: {
			gregorian: [2025, 0, 27]
		},
		gtime: 1737969383917
	},
	{
		sdate: [1403, 11, 9],
		sdata: {
			solar: [1403, 10, 9]
		},
		stime: 1738055783917,
		gdate: [2025, 1, 28],
		gdata: {
			gregorian: [2025, 0, 28]
		},
		gtime: 1738055783917
	},
	{
		sdate: [1403, 11, 10],
		sdata: {
			solar: [1403, 10, 10]
		},
		stime: 1738142183917,
		gdate: [2025, 1, 29],
		gdata: {
			gregorian: [2025, 0, 29]
		},
		gtime: 1738142183917
	},
	{
		sdate: [1403, 11, 11],
		sdata: {
			solar: [1403, 10, 11]
		},
		stime: 1738228583917,
		gdate: [2025, 1, 30],
		gdata: {
			gregorian: [2025, 0, 30]
		},
		gtime: 1738228583917
	},
	{
		sdate: [1403, 11, 12],
		sdata: {
			solar: [1403, 10, 12]
		},
		stime: 1738314983917,
		gdate: [2025, 1, 31],
		gdata: {
			gregorian: [2025, 0, 31]
		},
		gtime: 1738314983917
	},
	{
		sdate: [1403, 11, 13],
		sdata: {
			solar: [1403, 10, 13]
		},
		stime: 1738401383917,
		gdate: [2025, 2, 1],
		gdata: {
			gregorian: [2025, 1, 1]
		},
		gtime: 1738401383917
	},
	{
		sdate: [1403, 11, 14],
		sdata: {
			solar: [1403, 10, 14]
		},
		stime: 1738487783917,
		gdate: [2025, 2, 2],
		gdata: {
			gregorian: [2025, 1, 2]
		},
		gtime: 1738487783917
	},
	{
		sdate: [1403, 11, 15],
		sdata: {
			solar: [1403, 10, 15]
		},
		stime: 1738574183917,
		gdate: [2025, 2, 3],
		gdata: {
			gregorian: [2025, 1, 3]
		},
		gtime: 1738574183917
	},
	{
		sdate: [1403, 11, 16],
		sdata: {
			solar: [1403, 10, 16]
		},
		stime: 1738660583917,
		gdate: [2025, 2, 4],
		gdata: {
			gregorian: [2025, 1, 4]
		},
		gtime: 1738660583917
	},
	{
		sdate: [1403, 11, 17],
		sdata: {
			solar: [1403, 10, 17]
		},
		stime: 1738746983917,
		gdate: [2025, 2, 5],
		gdata: {
			gregorian: [2025, 1, 5]
		},
		gtime: 1738746983917
	},
	{
		sdate: [1403, 11, 18],
		sdata: {
			solar: [1403, 10, 18]
		},
		stime: 1738833383917,
		gdate: [2025, 2, 6],
		gdata: {
			gregorian: [2025, 1, 6]
		},
		gtime: 1738833383917
	},
	{
		sdate: [1403, 11, 19],
		sdata: {
			solar: [1403, 10, 19]
		},
		stime: 1738919783917,
		gdate: [2025, 2, 7],
		gdata: {
			gregorian: [2025, 1, 7]
		},
		gtime: 1738919783917
	},
	{
		sdate: [1403, 11, 20],
		sdata: {
			solar: [1403, 10, 20]
		},
		stime: 1739006183917,
		gdate: [2025, 2, 8],
		gdata: {
			gregorian: [2025, 1, 8]
		},
		gtime: 1739006183917
	},
	{
		sdate: [1403, 11, 21],
		sdata: {
			solar: [1403, 10, 21]
		},
		stime: 1739092583917,
		gdate: [2025, 2, 9],
		gdata: {
			gregorian: [2025, 1, 9]
		},
		gtime: 1739092583917
	},
	{
		sdate: [1403, 11, 22],
		sdata: {
			solar: [1403, 10, 22]
		},
		stime: 1739178983917,
		gdate: [2025, 2, 10],
		gdata: {
			gregorian: [2025, 1, 10]
		},
		gtime: 1739178983917
	},
	{
		sdate: [1403, 11, 23],
		sdata: {
			solar: [1403, 10, 23]
		},
		stime: 1739265383917,
		gdate: [2025, 2, 11],
		gdata: {
			gregorian: [2025, 1, 11]
		},
		gtime: 1739265383917
	},
	{
		sdate: [1403, 11, 24],
		sdata: {
			solar: [1403, 10, 24]
		},
		stime: 1739351783917,
		gdate: [2025, 2, 12],
		gdata: {
			gregorian: [2025, 1, 12]
		},
		gtime: 1739351783917
	},
	{
		sdate: [1403, 11, 25],
		sdata: {
			solar: [1403, 10, 25]
		},
		stime: 1739438183917,
		gdate: [2025, 2, 13],
		gdata: {
			gregorian: [2025, 1, 13]
		},
		gtime: 1739438183917
	},
	{
		sdate: [1403, 11, 26],
		sdata: {
			solar: [1403, 10, 26]
		},
		stime: 1739524583917,
		gdate: [2025, 2, 14],
		gdata: {
			gregorian: [2025, 1, 14]
		},
		gtime: 1739524583917
	},
	{
		sdate: [1403, 11, 27],
		sdata: {
			solar: [1403, 10, 27]
		},
		stime: 1739610983917,
		gdate: [2025, 2, 15],
		gdata: {
			gregorian: [2025, 1, 15]
		},
		gtime: 1739610983917
	},
	{
		sdate: [1403, 11, 28],
		sdata: {
			solar: [1403, 10, 28]
		},
		stime: 1739697383917,
		gdate: [2025, 2, 16],
		gdata: {
			gregorian: [2025, 1, 16]
		},
		gtime: 1739697383917
	},
	{
		sdate: [1403, 11, 29],
		sdata: {
			solar: [1403, 10, 29]
		},
		stime: 1739783783917,
		gdate: [2025, 2, 17],
		gdata: {
			gregorian: [2025, 1, 17]
		},
		gtime: 1739783783917
	},
	{
		sdate: [1403, 11, 30],
		sdata: {
			solar: [1403, 10, 30]
		},
		stime: 1739870183917,
		gdate: [2025, 2, 18],
		gdata: {
			gregorian: [2025, 1, 18]
		},
		gtime: 1739870183917
	},
	{
		sdate: [1403, 12, 1],
		sdata: {
			solar: [1403, 11, 1]
		},
		stime: 1739956583917,
		gdate: [2025, 2, 19],
		gdata: {
			gregorian: [2025, 1, 19]
		},
		gtime: 1739956583917
	},
	{
		sdate: [1403, 12, 2],
		sdata: {
			solar: [1403, 11, 2]
		},
		stime: 1740042983917,
		gdate: [2025, 2, 20],
		gdata: {
			gregorian: [2025, 1, 20]
		},
		gtime: 1740042983917
	},
	{
		sdate: [1403, 12, 3],
		sdata: {
			solar: [1403, 11, 3]
		},
		stime: 1740129383917,
		gdate: [2025, 2, 21],
		gdata: {
			gregorian: [2025, 1, 21]
		},
		gtime: 1740129383917
	},
	{
		sdate: [1403, 12, 4],
		sdata: {
			solar: [1403, 11, 4]
		},
		stime: 1740215783917,
		gdate: [2025, 2, 22],
		gdata: {
			gregorian: [2025, 1, 22]
		},
		gtime: 1740215783917
	},
	{
		sdate: [1403, 12, 5],
		sdata: {
			solar: [1403, 11, 5]
		},
		stime: 1740302183917,
		gdate: [2025, 2, 23],
		gdata: {
			gregorian: [2025, 1, 23]
		},
		gtime: 1740302183917
	},
	{
		sdate: [1403, 12, 6],
		sdata: {
			solar: [1403, 11, 6]
		},
		stime: 1740388583917,
		gdate: [2025, 2, 24],
		gdata: {
			gregorian: [2025, 1, 24]
		},
		gtime: 1740388583917
	},
	{
		sdate: [1403, 12, 7],
		sdata: {
			solar: [1403, 11, 7]
		},
		stime: 1740474983917,
		gdate: [2025, 2, 25],
		gdata: {
			gregorian: [2025, 1, 25]
		},
		gtime: 1740474983917
	},
	{
		sdate: [1403, 12, 8],
		sdata: {
			solar: [1403, 11, 8]
		},
		stime: 1740561383917,
		gdate: [2025, 2, 26],
		gdata: {
			gregorian: [2025, 1, 26]
		},
		gtime: 1740561383917
	},
	{
		sdate: [1403, 12, 9],
		sdata: {
			solar: [1403, 11, 9]
		},
		stime: 1740647783917,
		gdate: [2025, 2, 27],
		gdata: {
			gregorian: [2025, 1, 27]
		},
		gtime: 1740647783917
	},
	{
		sdate: [1403, 12, 10],
		sdata: {
			solar: [1403, 11, 10]
		},
		stime: 1740734183917,
		gdate: [2025, 2, 28],
		gdata: {
			gregorian: [2025, 1, 28]
		},
		gtime: 1740734183917
	},
	{
		sdate: [1403, 12, 11],
		sdata: {
			solar: [1403, 11, 11]
		},
		stime: 1740820583917,
		gdate: [2025, 3, 1],
		gdata: {
			gregorian: [2025, 2, 1]
		},
		gtime: 1740820583917
	},
	{
		sdate: [1403, 12, 12],
		sdata: {
			solar: [1403, 11, 12]
		},
		stime: 1740906983917,
		gdate: [2025, 3, 2],
		gdata: {
			gregorian: [2025, 2, 2]
		},
		gtime: 1740906983917
	},
	{
		sdate: [1403, 12, 13],
		sdata: {
			solar: [1403, 11, 13]
		},
		stime: 1740993383917,
		gdate: [2025, 3, 3],
		gdata: {
			gregorian: [2025, 2, 3]
		},
		gtime: 1740993383917
	},
	{
		sdate: [1403, 12, 14],
		sdata: {
			solar: [1403, 11, 14]
		},
		stime: 1741079783917,
		gdate: [2025, 3, 4],
		gdata: {
			gregorian: [2025, 2, 4]
		},
		gtime: 1741079783917
	},
	{
		sdate: [1403, 12, 15],
		sdata: {
			solar: [1403, 11, 15]
		},
		stime: 1741166183917,
		gdate: [2025, 3, 5],
		gdata: {
			gregorian: [2025, 2, 5]
		},
		gtime: 1741166183917
	},
	{
		sdate: [1403, 12, 16],
		sdata: {
			solar: [1403, 11, 16]
		},
		stime: 1741252583917,
		gdate: [2025, 3, 6],
		gdata: {
			gregorian: [2025, 2, 6]
		},
		gtime: 1741252583917
	},
	{
		sdate: [1403, 12, 17],
		sdata: {
			solar: [1403, 11, 17]
		},
		stime: 1741338983917,
		gdate: [2025, 3, 7],
		gdata: {
			gregorian: [2025, 2, 7]
		},
		gtime: 1741338983917
	},
	{
		sdate: [1403, 12, 18],
		sdata: {
			solar: [1403, 11, 18]
		},
		stime: 1741425383917,
		gdate: [2025, 3, 8],
		gdata: {
			gregorian: [2025, 2, 8]
		},
		gtime: 1741425383917
	},
	{
		sdate: [1403, 12, 19],
		sdata: {
			solar: [1403, 11, 19]
		},
		stime: 1741511783917,
		gdate: [2025, 3, 9],
		gdata: {
			gregorian: [2025, 2, 9]
		},
		gtime: 1741511783917
	},
	{
		sdate: [1403, 12, 20],
		sdata: {
			solar: [1403, 11, 20]
		},
		stime: 1741598183917,
		gdate: [2025, 3, 10],
		gdata: {
			gregorian: [2025, 2, 10]
		},
		gtime: 1741598183917
	},
	{
		sdate: [1403, 12, 21],
		sdata: {
			solar: [1403, 11, 21]
		},
		stime: 1741684583917,
		gdate: [2025, 3, 11],
		gdata: {
			gregorian: [2025, 2, 11]
		},
		gtime: 1741684583917
	},
	{
		sdate: [1403, 12, 22],
		sdata: {
			solar: [1403, 11, 22]
		},
		stime: 1741770983917,
		gdate: [2025, 3, 12],
		gdata: {
			gregorian: [2025, 2, 12]
		},
		gtime: 1741770983917
	},
	{
		sdate: [1403, 12, 23],
		sdata: {
			solar: [1403, 11, 23]
		},
		stime: 1741857383917,
		gdate: [2025, 3, 13],
		gdata: {
			gregorian: [2025, 2, 13]
		},
		gtime: 1741857383917
	},
	{
		sdate: [1403, 12, 24],
		sdata: {
			solar: [1403, 11, 24]
		},
		stime: 1741943783917,
		gdate: [2025, 3, 14],
		gdata: {
			gregorian: [2025, 2, 14]
		},
		gtime: 1741943783917
	},
	{
		sdate: [1403, 12, 25],
		sdata: {
			solar: [1403, 11, 25]
		},
		stime: 1742030183917,
		gdate: [2025, 3, 15],
		gdata: {
			gregorian: [2025, 2, 15]
		},
		gtime: 1742030183917
	},
	{
		sdate: [1403, 12, 26],
		sdata: {
			solar: [1403, 11, 26]
		},
		stime: 1742116583917,
		gdate: [2025, 3, 16],
		gdata: {
			gregorian: [2025, 2, 16]
		},
		gtime: 1742116583917
	},
	{
		sdate: [1403, 12, 27],
		sdata: {
			solar: [1403, 11, 27]
		},
		stime: 1742202983917,
		gdate: [2025, 3, 17],
		gdata: {
			gregorian: [2025, 2, 17]
		},
		gtime: 1742202983917
	},
	{
		sdate: [1403, 12, 28],
		sdata: {
			solar: [1403, 11, 28]
		},
		stime: 1742289383917,
		gdate: [2025, 3, 18],
		gdata: {
			gregorian: [2025, 2, 18]
		},
		gtime: 1742289383917
	},
	{
		sdate: [1403, 12, 29],
		sdata: {
			solar: [1403, 11, 29]
		},
		stime: 1742375783917,
		gdate: [2025, 3, 19],
		gdata: {
			gregorian: [2025, 2, 19]
		},
		gtime: 1742375783917
	},
	{
		sdate: [1404, 1, 1],
		sdata: {
			solar: [1404, 0, 1]
		},
		stime: 1742548583917,
		gdate: [2025, 3, 21],
		gdata: {
			gregorian: [2025, 2, 21]
		},
		gtime: 1742548583917
	},
	{
		sdate: [1404, 1, 2],
		sdata: {
			solar: [1404, 0, 2]
		},
		stime: 1742634983917,
		gdate: [2025, 3, 22],
		gdata: {
			gregorian: [2025, 2, 22]
		},
		gtime: 1742634983917
	},
	{
		sdate: [1404, 1, 3],
		sdata: {
			solar: [1404, 0, 3]
		},
		stime: 1742721383917,
		gdate: [2025, 3, 23],
		gdata: {
			gregorian: [2025, 2, 23]
		},
		gtime: 1742721383917
	},
	{
		sdate: [1404, 1, 4],
		sdata: {
			solar: [1404, 0, 4]
		},
		stime: 1742807783917,
		gdate: [2025, 3, 24],
		gdata: {
			gregorian: [2025, 2, 24]
		},
		gtime: 1742807783917
	},
	{
		sdate: [1404, 1, 5],
		sdata: {
			solar: [1404, 0, 5]
		},
		stime: 1742894183917,
		gdate: [2025, 3, 25],
		gdata: {
			gregorian: [2025, 2, 25]
		},
		gtime: 1742894183917
	},
	{
		sdate: [1404, 1, 6],
		sdata: {
			solar: [1404, 0, 6]
		},
		stime: 1742980583917,
		gdate: [2025, 3, 26],
		gdata: {
			gregorian: [2025, 2, 26]
		},
		gtime: 1742980583917
	},
	{
		sdate: [1404, 1, 7],
		sdata: {
			solar: [1404, 0, 7]
		},
		stime: 1743066983917,
		gdate: [2025, 3, 27],
		gdata: {
			gregorian: [2025, 2, 27]
		},
		gtime: 1743066983917
	},
	{
		sdate: [1404, 1, 8],
		sdata: {
			solar: [1404, 0, 8]
		},
		stime: 1743153383917,
		gdate: [2025, 3, 28],
		gdata: {
			gregorian: [2025, 2, 28]
		},
		gtime: 1743153383917
	},
	{
		sdate: [1404, 1, 9],
		sdata: {
			solar: [1404, 0, 9]
		},
		stime: 1743239783917,
		gdate: [2025, 3, 29],
		gdata: {
			gregorian: [2025, 2, 29]
		},
		gtime: 1743239783917
	},
	{
		sdate: [1404, 1, 10],
		sdata: {
			solar: [1404, 0, 10]
		},
		stime: 1743326183917,
		gdate: [2025, 3, 30],
		gdata: {
			gregorian: [2025, 2, 30]
		},
		gtime: 1743326183917
	},
	{
		sdate: [1404, 1, 11],
		sdata: {
			solar: [1404, 0, 11]
		},
		stime: 1743412583917,
		gdate: [2025, 3, 31],
		gdata: {
			gregorian: [2025, 2, 31]
		},
		gtime: 1743412583917
	},
	{
		sdate: [1404, 1, 12],
		sdata: {
			solar: [1404, 0, 12]
		},
		stime: 1743498983917,
		gdate: [2025, 4, 1],
		gdata: {
			gregorian: [2025, 3, 1]
		},
		gtime: 1743498983917
	},
	{
		sdate: [1404, 1, 13],
		sdata: {
			solar: [1404, 0, 13]
		},
		stime: 1743585383917,
		gdate: [2025, 4, 2],
		gdata: {
			gregorian: [2025, 3, 2]
		},
		gtime: 1743585383917
	},
	{
		sdate: [1404, 1, 14],
		sdata: {
			solar: [1404, 0, 14]
		},
		stime: 1743671783917,
		gdate: [2025, 4, 3],
		gdata: {
			gregorian: [2025, 3, 3]
		},
		gtime: 1743671783917
	},
	{
		sdate: [1404, 1, 15],
		sdata: {
			solar: [1404, 0, 15]
		},
		stime: 1743758183917,
		gdate: [2025, 4, 4],
		gdata: {
			gregorian: [2025, 3, 4]
		},
		gtime: 1743758183917
	},
	{
		sdate: [1404, 1, 16],
		sdata: {
			solar: [1404, 0, 16]
		},
		stime: 1743844583917,
		gdate: [2025, 4, 5],
		gdata: {
			gregorian: [2025, 3, 5]
		},
		gtime: 1743844583917
	},
	{
		sdate: [1404, 1, 17],
		sdata: {
			solar: [1404, 0, 17]
		},
		stime: 1743930983917,
		gdate: [2025, 4, 6],
		gdata: {
			gregorian: [2025, 3, 6]
		},
		gtime: 1743930983917
	},
	{
		sdate: [1404, 1, 18],
		sdata: {
			solar: [1404, 0, 18]
		},
		stime: 1744017383917,
		gdate: [2025, 4, 7],
		gdata: {
			gregorian: [2025, 3, 7]
		},
		gtime: 1744017383917
	},
	{
		sdate: [1404, 1, 19],
		sdata: {
			solar: [1404, 0, 19]
		},
		stime: 1744103783917,
		gdate: [2025, 4, 8],
		gdata: {
			gregorian: [2025, 3, 8]
		},
		gtime: 1744103783917
	},
	{
		sdate: [1404, 1, 20],
		sdata: {
			solar: [1404, 0, 20]
		},
		stime: 1744190183917,
		gdate: [2025, 4, 9],
		gdata: {
			gregorian: [2025, 3, 9]
		},
		gtime: 1744190183917
	},
	{
		sdate: [1404, 1, 21],
		sdata: {
			solar: [1404, 0, 21]
		},
		stime: 1744276583917,
		gdate: [2025, 4, 10],
		gdata: {
			gregorian: [2025, 3, 10]
		},
		gtime: 1744276583917
	},
	{
		sdate: [1404, 1, 22],
		sdata: {
			solar: [1404, 0, 22]
		},
		stime: 1744362983917,
		gdate: [2025, 4, 11],
		gdata: {
			gregorian: [2025, 3, 11]
		},
		gtime: 1744362983917
	},
	{
		sdate: [1404, 1, 23],
		sdata: {
			solar: [1404, 0, 23]
		},
		stime: 1744449383917,
		gdate: [2025, 4, 12],
		gdata: {
			gregorian: [2025, 3, 12]
		},
		gtime: 1744449383917
	},
	{
		sdate: [1404, 1, 24],
		sdata: {
			solar: [1404, 0, 24]
		},
		stime: 1744535783917,
		gdate: [2025, 4, 13],
		gdata: {
			gregorian: [2025, 3, 13]
		},
		gtime: 1744535783917
	},
	{
		sdate: [1404, 1, 25],
		sdata: {
			solar: [1404, 0, 25]
		},
		stime: 1744622183917,
		gdate: [2025, 4, 14],
		gdata: {
			gregorian: [2025, 3, 14]
		},
		gtime: 1744622183917
	},
	{
		sdate: [1404, 1, 26],
		sdata: {
			solar: [1404, 0, 26]
		},
		stime: 1744708583917,
		gdate: [2025, 4, 15],
		gdata: {
			gregorian: [2025, 3, 15]
		},
		gtime: 1744708583917
	},
	{
		sdate: [1404, 1, 27],
		sdata: {
			solar: [1404, 0, 27]
		},
		stime: 1744794983917,
		gdate: [2025, 4, 16],
		gdata: {
			gregorian: [2025, 3, 16]
		},
		gtime: 1744794983917
	},
	{
		sdate: [1404, 1, 28],
		sdata: {
			solar: [1404, 0, 28]
		},
		stime: 1744881383917,
		gdate: [2025, 4, 17],
		gdata: {
			gregorian: [2025, 3, 17]
		},
		gtime: 1744881383917
	},
	{
		sdate: [1404, 1, 29],
		sdata: {
			solar: [1404, 0, 29]
		},
		stime: 1744967783917,
		gdate: [2025, 4, 18],
		gdata: {
			gregorian: [2025, 3, 18]
		},
		gtime: 1744967783917
	},
	{
		sdate: [1404, 1, 30],
		sdata: {
			solar: [1404, 0, 30]
		},
		stime: 1745054183917,
		gdate: [2025, 4, 19],
		gdata: {
			gregorian: [2025, 3, 19]
		},
		gtime: 1745054183917
	},
	{
		sdate: [1404, 1, 31],
		sdata: {
			solar: [1404, 0, 31]
		},
		stime: 1745140583917,
		gdate: [2025, 4, 20],
		gdata: {
			gregorian: [2025, 3, 20]
		},
		gtime: 1745140583917
	},
	{
		sdate: [1404, 2, 1],
		sdata: {
			solar: [1404, 1, 1]
		},
		stime: 1745226983917,
		gdate: [2025, 4, 21],
		gdata: {
			gregorian: [2025, 3, 21]
		},
		gtime: 1745226983917
	},
	{
		sdate: [1404, 2, 2],
		sdata: {
			solar: [1404, 1, 2]
		},
		stime: 1745313383917,
		gdate: [2025, 4, 22],
		gdata: {
			gregorian: [2025, 3, 22]
		},
		gtime: 1745313383917
	},
	{
		sdate: [1404, 2, 3],
		sdata: {
			solar: [1404, 1, 3]
		},
		stime: 1745399783917,
		gdate: [2025, 4, 23],
		gdata: {
			gregorian: [2025, 3, 23]
		},
		gtime: 1745399783917
	},
	{
		sdate: [1404, 2, 4],
		sdata: {
			solar: [1404, 1, 4]
		},
		stime: 1745486183917,
		gdate: [2025, 4, 24],
		gdata: {
			gregorian: [2025, 3, 24]
		},
		gtime: 1745486183917
	},
	{
		sdate: [1404, 2, 5],
		sdata: {
			solar: [1404, 1, 5]
		},
		stime: 1745572583917,
		gdate: [2025, 4, 25],
		gdata: {
			gregorian: [2025, 3, 25]
		},
		gtime: 1745572583917
	},
	{
		sdate: [1404, 2, 6],
		sdata: {
			solar: [1404, 1, 6]
		},
		stime: 1745658983917,
		gdate: [2025, 4, 26],
		gdata: {
			gregorian: [2025, 3, 26]
		},
		gtime: 1745658983917
	},
	{
		sdate: [1404, 2, 7],
		sdata: {
			solar: [1404, 1, 7]
		},
		stime: 1745745383917,
		gdate: [2025, 4, 27],
		gdata: {
			gregorian: [2025, 3, 27]
		},
		gtime: 1745745383917
	},
	{
		sdate: [1404, 2, 8],
		sdata: {
			solar: [1404, 1, 8]
		},
		stime: 1745831783917,
		gdate: [2025, 4, 28],
		gdata: {
			gregorian: [2025, 3, 28]
		},
		gtime: 1745831783917
	},
	{
		sdate: [1404, 2, 9],
		sdata: {
			solar: [1404, 1, 9]
		},
		stime: 1745918183917,
		gdate: [2025, 4, 29],
		gdata: {
			gregorian: [2025, 3, 29]
		},
		gtime: 1745918183917
	},
	{
		sdate: [1404, 2, 10],
		sdata: {
			solar: [1404, 1, 10]
		},
		stime: 1746004583917,
		gdate: [2025, 4, 30],
		gdata: {
			gregorian: [2025, 3, 30]
		},
		gtime: 1746004583917
	},
	{
		sdate: [1404, 2, 11],
		sdata: {
			solar: [1404, 1, 11]
		},
		stime: 1746090983917,
		gdate: [2025, 5, 1],
		gdata: {
			gregorian: [2025, 4, 1]
		},
		gtime: 1746090983917
	},
	{
		sdate: [1404, 2, 12],
		sdata: {
			solar: [1404, 1, 12]
		},
		stime: 1746177383917,
		gdate: [2025, 5, 2],
		gdata: {
			gregorian: [2025, 4, 2]
		},
		gtime: 1746177383917
	},
	{
		sdate: [1404, 2, 13],
		sdata: {
			solar: [1404, 1, 13]
		},
		stime: 1746263783917,
		gdate: [2025, 5, 3],
		gdata: {
			gregorian: [2025, 4, 3]
		},
		gtime: 1746263783917
	},
	{
		sdate: [1404, 2, 14],
		sdata: {
			solar: [1404, 1, 14]
		},
		stime: 1746350183917,
		gdate: [2025, 5, 4],
		gdata: {
			gregorian: [2025, 4, 4]
		},
		gtime: 1746350183917
	},
	{
		sdate: [1404, 2, 15],
		sdata: {
			solar: [1404, 1, 15]
		},
		stime: 1746436583917,
		gdate: [2025, 5, 5],
		gdata: {
			gregorian: [2025, 4, 5]
		},
		gtime: 1746436583917
	},
	{
		sdate: [1404, 2, 16],
		sdata: {
			solar: [1404, 1, 16]
		},
		stime: 1746522983917,
		gdate: [2025, 5, 6],
		gdata: {
			gregorian: [2025, 4, 6]
		},
		gtime: 1746522983917
	},
	{
		sdate: [1404, 2, 17],
		sdata: {
			solar: [1404, 1, 17]
		},
		stime: 1746609383917,
		gdate: [2025, 5, 7],
		gdata: {
			gregorian: [2025, 4, 7]
		},
		gtime: 1746609383917
	},
	{
		sdate: [1404, 2, 18],
		sdata: {
			solar: [1404, 1, 18]
		},
		stime: 1746695783917,
		gdate: [2025, 5, 8],
		gdata: {
			gregorian: [2025, 4, 8]
		},
		gtime: 1746695783917
	},
	{
		sdate: [1404, 2, 19],
		sdata: {
			solar: [1404, 1, 19]
		},
		stime: 1746782183917,
		gdate: [2025, 5, 9],
		gdata: {
			gregorian: [2025, 4, 9]
		},
		gtime: 1746782183917
	},
	{
		sdate: [1404, 2, 20],
		sdata: {
			solar: [1404, 1, 20]
		},
		stime: 1746868583917,
		gdate: [2025, 5, 10],
		gdata: {
			gregorian: [2025, 4, 10]
		},
		gtime: 1746868583917
	},
	{
		sdate: [1404, 2, 21],
		sdata: {
			solar: [1404, 1, 21]
		},
		stime: 1746954983917,
		gdate: [2025, 5, 11],
		gdata: {
			gregorian: [2025, 4, 11]
		},
		gtime: 1746954983917
	},
	{
		sdate: [1404, 2, 22],
		sdata: {
			solar: [1404, 1, 22]
		},
		stime: 1747041383917,
		gdate: [2025, 5, 12],
		gdata: {
			gregorian: [2025, 4, 12]
		},
		gtime: 1747041383917
	},
	{
		sdate: [1404, 2, 23],
		sdata: {
			solar: [1404, 1, 23]
		},
		stime: 1747127783917,
		gdate: [2025, 5, 13],
		gdata: {
			gregorian: [2025, 4, 13]
		},
		gtime: 1747127783917
	},
	{
		sdate: [1404, 2, 24],
		sdata: {
			solar: [1404, 1, 24]
		},
		stime: 1747214183917,
		gdate: [2025, 5, 14],
		gdata: {
			gregorian: [2025, 4, 14]
		},
		gtime: 1747214183917
	},
	{
		sdate: [1404, 2, 25],
		sdata: {
			solar: [1404, 1, 25]
		},
		stime: 1747300583917,
		gdate: [2025, 5, 15],
		gdata: {
			gregorian: [2025, 4, 15]
		},
		gtime: 1747300583917
	},
	{
		sdate: [1404, 2, 26],
		sdata: {
			solar: [1404, 1, 26]
		},
		stime: 1747386983917,
		gdate: [2025, 5, 16],
		gdata: {
			gregorian: [2025, 4, 16]
		},
		gtime: 1747386983917
	},
	{
		sdate: [1404, 2, 27],
		sdata: {
			solar: [1404, 1, 27]
		},
		stime: 1747473383917,
		gdate: [2025, 5, 17],
		gdata: {
			gregorian: [2025, 4, 17]
		},
		gtime: 1747473383917
	},
	{
		sdate: [1404, 2, 28],
		sdata: {
			solar: [1404, 1, 28]
		},
		stime: 1747559783917,
		gdate: [2025, 5, 18],
		gdata: {
			gregorian: [2025, 4, 18]
		},
		gtime: 1747559783917
	},
	{
		sdate: [1404, 2, 29],
		sdata: {
			solar: [1404, 1, 29]
		},
		stime: 1747646183917,
		gdate: [2025, 5, 19],
		gdata: {
			gregorian: [2025, 4, 19]
		},
		gtime: 1747646183917
	},
	{
		sdate: [1404, 2, 30],
		sdata: {
			solar: [1404, 1, 30]
		},
		stime: 1747732583917,
		gdate: [2025, 5, 20],
		gdata: {
			gregorian: [2025, 4, 20]
		},
		gtime: 1747732583917
	},
	{
		sdate: [1404, 2, 31],
		sdata: {
			solar: [1404, 1, 31]
		},
		stime: 1747818983917,
		gdate: [2025, 5, 21],
		gdata: {
			gregorian: [2025, 4, 21]
		},
		gtime: 1747818983917
	},
	{
		sdate: [1404, 3, 1],
		sdata: {
			solar: [1404, 2, 1]
		},
		stime: 1747905383917,
		gdate: [2025, 5, 22],
		gdata: {
			gregorian: [2025, 4, 22]
		},
		gtime: 1747905383917
	},
	{
		sdate: [1404, 3, 2],
		sdata: {
			solar: [1404, 2, 2]
		},
		stime: 1747991783917,
		gdate: [2025, 5, 23],
		gdata: {
			gregorian: [2025, 4, 23]
		},
		gtime: 1747991783917
	},
	{
		sdate: [1404, 3, 3],
		sdata: {
			solar: [1404, 2, 3]
		},
		stime: 1748078183917,
		gdate: [2025, 5, 24],
		gdata: {
			gregorian: [2025, 4, 24]
		},
		gtime: 1748078183917
	},
	{
		sdate: [1404, 3, 4],
		sdata: {
			solar: [1404, 2, 4]
		},
		stime: 1748164583917,
		gdate: [2025, 5, 25],
		gdata: {
			gregorian: [2025, 4, 25]
		},
		gtime: 1748164583917
	},
	{
		sdate: [1404, 3, 5],
		sdata: {
			solar: [1404, 2, 5]
		},
		stime: 1748250983917,
		gdate: [2025, 5, 26],
		gdata: {
			gregorian: [2025, 4, 26]
		},
		gtime: 1748250983917
	},
	{
		sdate: [1404, 3, 6],
		sdata: {
			solar: [1404, 2, 6]
		},
		stime: 1748337383917,
		gdate: [2025, 5, 27],
		gdata: {
			gregorian: [2025, 4, 27]
		},
		gtime: 1748337383917
	},
	{
		sdate: [1404, 3, 7],
		sdata: {
			solar: [1404, 2, 7]
		},
		stime: 1748423783917,
		gdate: [2025, 5, 28],
		gdata: {
			gregorian: [2025, 4, 28]
		},
		gtime: 1748423783917
	},
	{
		sdate: [1404, 3, 8],
		sdata: {
			solar: [1404, 2, 8]
		},
		stime: 1748510183917,
		gdate: [2025, 5, 29],
		gdata: {
			gregorian: [2025, 4, 29]
		},
		gtime: 1748510183917
	},
	{
		sdate: [1404, 3, 9],
		sdata: {
			solar: [1404, 2, 9]
		},
		stime: 1748596583917,
		gdate: [2025, 5, 30],
		gdata: {
			gregorian: [2025, 4, 30]
		},
		gtime: 1748596583917
	},
	{
		sdate: [1404, 3, 10],
		sdata: {
			solar: [1404, 2, 10]
		},
		stime: 1748682983917,
		gdate: [2025, 5, 31],
		gdata: {
			gregorian: [2025, 4, 31]
		},
		gtime: 1748682983917
	},
	{
		sdate: [1404, 3, 11],
		sdata: {
			solar: [1404, 2, 11]
		},
		stime: 1748769383917,
		gdate: [2025, 6, 1],
		gdata: {
			gregorian: [2025, 5, 1]
		},
		gtime: 1748769383917
	},
	{
		sdate: [1404, 3, 12],
		sdata: {
			solar: [1404, 2, 12]
		},
		stime: 1748855783917,
		gdate: [2025, 6, 2],
		gdata: {
			gregorian: [2025, 5, 2]
		},
		gtime: 1748855783917
	},
	{
		sdate: [1404, 3, 13],
		sdata: {
			solar: [1404, 2, 13]
		},
		stime: 1748942183917,
		gdate: [2025, 6, 3],
		gdata: {
			gregorian: [2025, 5, 3]
		},
		gtime: 1748942183917
	},
	{
		sdate: [1404, 3, 14],
		sdata: {
			solar: [1404, 2, 14]
		},
		stime: 1749028583917,
		gdate: [2025, 6, 4],
		gdata: {
			gregorian: [2025, 5, 4]
		},
		gtime: 1749028583917
	},
	{
		sdate: [1404, 3, 15],
		sdata: {
			solar: [1404, 2, 15]
		},
		stime: 1749114983917,
		gdate: [2025, 6, 5],
		gdata: {
			gregorian: [2025, 5, 5]
		},
		gtime: 1749114983917
	},
	{
		sdate: [1404, 3, 16],
		sdata: {
			solar: [1404, 2, 16]
		},
		stime: 1749201383917,
		gdate: [2025, 6, 6],
		gdata: {
			gregorian: [2025, 5, 6]
		},
		gtime: 1749201383917
	},
	{
		sdate: [1404, 3, 17],
		sdata: {
			solar: [1404, 2, 17]
		},
		stime: 1749287783917,
		gdate: [2025, 6, 7],
		gdata: {
			gregorian: [2025, 5, 7]
		},
		gtime: 1749287783917
	},
	{
		sdate: [1404, 3, 18],
		sdata: {
			solar: [1404, 2, 18]
		},
		stime: 1749374183917,
		gdate: [2025, 6, 8],
		gdata: {
			gregorian: [2025, 5, 8]
		},
		gtime: 1749374183917
	},
	{
		sdate: [1404, 3, 19],
		sdata: {
			solar: [1404, 2, 19]
		},
		stime: 1749460583917,
		gdate: [2025, 6, 9],
		gdata: {
			gregorian: [2025, 5, 9]
		},
		gtime: 1749460583917
	},
	{
		sdate: [1404, 3, 20],
		sdata: {
			solar: [1404, 2, 20]
		},
		stime: 1749546983917,
		gdate: [2025, 6, 10],
		gdata: {
			gregorian: [2025, 5, 10]
		},
		gtime: 1749546983917
	},
	{
		sdate: [1404, 3, 21],
		sdata: {
			solar: [1404, 2, 21]
		},
		stime: 1749633383917,
		gdate: [2025, 6, 11],
		gdata: {
			gregorian: [2025, 5, 11]
		},
		gtime: 1749633383917
	},
	{
		sdate: [1404, 3, 22],
		sdata: {
			solar: [1404, 2, 22]
		},
		stime: 1749719783917,
		gdate: [2025, 6, 12],
		gdata: {
			gregorian: [2025, 5, 12]
		},
		gtime: 1749719783917
	},
	{
		sdate: [1404, 3, 23],
		sdata: {
			solar: [1404, 2, 23]
		},
		stime: 1749806183917,
		gdate: [2025, 6, 13],
		gdata: {
			gregorian: [2025, 5, 13]
		},
		gtime: 1749806183917
	},
	{
		sdate: [1404, 3, 24],
		sdata: {
			solar: [1404, 2, 24]
		},
		stime: 1749892583917,
		gdate: [2025, 6, 14],
		gdata: {
			gregorian: [2025, 5, 14]
		},
		gtime: 1749892583917
	},
	{
		sdate: [1404, 3, 25],
		sdata: {
			solar: [1404, 2, 25]
		},
		stime: 1749978983917,
		gdate: [2025, 6, 15],
		gdata: {
			gregorian: [2025, 5, 15]
		},
		gtime: 1749978983917
	},
	{
		sdate: [1404, 3, 26],
		sdata: {
			solar: [1404, 2, 26]
		},
		stime: 1750065383917,
		gdate: [2025, 6, 16],
		gdata: {
			gregorian: [2025, 5, 16]
		},
		gtime: 1750065383917
	},
	{
		sdate: [1404, 3, 27],
		sdata: {
			solar: [1404, 2, 27]
		},
		stime: 1750151783917,
		gdate: [2025, 6, 17],
		gdata: {
			gregorian: [2025, 5, 17]
		},
		gtime: 1750151783917
	},
	{
		sdate: [1404, 3, 28],
		sdata: {
			solar: [1404, 2, 28]
		},
		stime: 1750238183917,
		gdate: [2025, 6, 18],
		gdata: {
			gregorian: [2025, 5, 18]
		},
		gtime: 1750238183917
	},
	{
		sdate: [1404, 3, 29],
		sdata: {
			solar: [1404, 2, 29]
		},
		stime: 1750324583917,
		gdate: [2025, 6, 19],
		gdata: {
			gregorian: [2025, 5, 19]
		},
		gtime: 1750324583917
	},
	{
		sdate: [1404, 3, 30],
		sdata: {
			solar: [1404, 2, 30]
		},
		stime: 1750410983917,
		gdate: [2025, 6, 20],
		gdata: {
			gregorian: [2025, 5, 20]
		},
		gtime: 1750410983917
	},
	{
		sdate: [1404, 3, 31],
		sdata: {
			solar: [1404, 2, 31]
		},
		stime: 1750497383917,
		gdate: [2025, 6, 21],
		gdata: {
			gregorian: [2025, 5, 21]
		},
		gtime: 1750497383917
	},
	{
		sdate: [1404, 4, 1],
		sdata: {
			solar: [1404, 3, 1]
		},
		stime: 1750583783917,
		gdate: [2025, 6, 22],
		gdata: {
			gregorian: [2025, 5, 22]
		},
		gtime: 1750583783917
	},
	{
		sdate: [1404, 4, 2],
		sdata: {
			solar: [1404, 3, 2]
		},
		stime: 1750670183917,
		gdate: [2025, 6, 23],
		gdata: {
			gregorian: [2025, 5, 23]
		},
		gtime: 1750670183917
	},
	{
		sdate: [1404, 4, 3],
		sdata: {
			solar: [1404, 3, 3]
		},
		stime: 1750756583917,
		gdate: [2025, 6, 24],
		gdata: {
			gregorian: [2025, 5, 24]
		},
		gtime: 1750756583917
	},
	{
		sdate: [1404, 4, 4],
		sdata: {
			solar: [1404, 3, 4]
		},
		stime: 1750842983917,
		gdate: [2025, 6, 25],
		gdata: {
			gregorian: [2025, 5, 25]
		},
		gtime: 1750842983917
	},
	{
		sdate: [1404, 4, 5],
		sdata: {
			solar: [1404, 3, 5]
		},
		stime: 1750929383917,
		gdate: [2025, 6, 26],
		gdata: {
			gregorian: [2025, 5, 26]
		},
		gtime: 1750929383917
	},
	{
		sdate: [1404, 4, 6],
		sdata: {
			solar: [1404, 3, 6]
		},
		stime: 1751015783917,
		gdate: [2025, 6, 27],
		gdata: {
			gregorian: [2025, 5, 27]
		},
		gtime: 1751015783917
	},
	{
		sdate: [1404, 4, 7],
		sdata: {
			solar: [1404, 3, 7]
		},
		stime: 1751102183917,
		gdate: [2025, 6, 28],
		gdata: {
			gregorian: [2025, 5, 28]
		},
		gtime: 1751102183917
	},
	{
		sdate: [1404, 4, 8],
		sdata: {
			solar: [1404, 3, 8]
		},
		stime: 1751188583917,
		gdate: [2025, 6, 29],
		gdata: {
			gregorian: [2025, 5, 29]
		},
		gtime: 1751188583917
	},
	{
		sdate: [1404, 4, 9],
		sdata: {
			solar: [1404, 3, 9]
		},
		stime: 1751274983917,
		gdate: [2025, 6, 30],
		gdata: {
			gregorian: [2025, 5, 30]
		},
		gtime: 1751274983917
	},
	{
		sdate: [1404, 4, 10],
		sdata: {
			solar: [1404, 3, 10]
		},
		stime: 1751361383917,
		gdate: [2025, 7, 1],
		gdata: {
			gregorian: [2025, 6, 1]
		},
		gtime: 1751361383917
	},
	{
		sdate: [1404, 4, 11],
		sdata: {
			solar: [1404, 3, 11]
		},
		stime: 1751447783917,
		gdate: [2025, 7, 2],
		gdata: {
			gregorian: [2025, 6, 2]
		},
		gtime: 1751447783917
	},
	{
		sdate: [1404, 4, 12],
		sdata: {
			solar: [1404, 3, 12]
		},
		stime: 1751534183917,
		gdate: [2025, 7, 3],
		gdata: {
			gregorian: [2025, 6, 3]
		},
		gtime: 1751534183917
	},
	{
		sdate: [1404, 4, 13],
		sdata: {
			solar: [1404, 3, 13]
		},
		stime: 1751620583917,
		gdate: [2025, 7, 4],
		gdata: {
			gregorian: [2025, 6, 4]
		},
		gtime: 1751620583917
	},
	{
		sdate: [1404, 4, 14],
		sdata: {
			solar: [1404, 3, 14]
		},
		stime: 1751706983917,
		gdate: [2025, 7, 5],
		gdata: {
			gregorian: [2025, 6, 5]
		},
		gtime: 1751706983917
	},
	{
		sdate: [1404, 4, 15],
		sdata: {
			solar: [1404, 3, 15]
		},
		stime: 1751793383917,
		gdate: [2025, 7, 6],
		gdata: {
			gregorian: [2025, 6, 6]
		},
		gtime: 1751793383917
	},
	{
		sdate: [1404, 4, 16],
		sdata: {
			solar: [1404, 3, 16]
		},
		stime: 1751879783917,
		gdate: [2025, 7, 7],
		gdata: {
			gregorian: [2025, 6, 7]
		},
		gtime: 1751879783917
	},
	{
		sdate: [1404, 4, 17],
		sdata: {
			solar: [1404, 3, 17]
		},
		stime: 1751966183917,
		gdate: [2025, 7, 8],
		gdata: {
			gregorian: [2025, 6, 8]
		},
		gtime: 1751966183917
	},
	{
		sdate: [1404, 4, 18],
		sdata: {
			solar: [1404, 3, 18]
		},
		stime: 1752052583917,
		gdate: [2025, 7, 9],
		gdata: {
			gregorian: [2025, 6, 9]
		},
		gtime: 1752052583917
	},
	{
		sdate: [1404, 4, 19],
		sdata: {
			solar: [1404, 3, 19]
		},
		stime: 1752138983917,
		gdate: [2025, 7, 10],
		gdata: {
			gregorian: [2025, 6, 10]
		},
		gtime: 1752138983917
	},
	{
		sdate: [1404, 4, 20],
		sdata: {
			solar: [1404, 3, 20]
		},
		stime: 1752225383917,
		gdate: [2025, 7, 11],
		gdata: {
			gregorian: [2025, 6, 11]
		},
		gtime: 1752225383917
	},
	{
		sdate: [1404, 4, 21],
		sdata: {
			solar: [1404, 3, 21]
		},
		stime: 1752311783917,
		gdate: [2025, 7, 12],
		gdata: {
			gregorian: [2025, 6, 12]
		},
		gtime: 1752311783917
	},
	{
		sdate: [1404, 4, 22],
		sdata: {
			solar: [1404, 3, 22]
		},
		stime: 1752398183917,
		gdate: [2025, 7, 13],
		gdata: {
			gregorian: [2025, 6, 13]
		},
		gtime: 1752398183917
	},
	{
		sdate: [1404, 4, 23],
		sdata: {
			solar: [1404, 3, 23]
		},
		stime: 1752484583917,
		gdate: [2025, 7, 14],
		gdata: {
			gregorian: [2025, 6, 14]
		},
		gtime: 1752484583917
	},
	{
		sdate: [1404, 4, 24],
		sdata: {
			solar: [1404, 3, 24]
		},
		stime: 1752570983917,
		gdate: [2025, 7, 15],
		gdata: {
			gregorian: [2025, 6, 15]
		},
		gtime: 1752570983917
	},
	{
		sdate: [1404, 4, 25],
		sdata: {
			solar: [1404, 3, 25]
		},
		stime: 1752657383917,
		gdate: [2025, 7, 16],
		gdata: {
			gregorian: [2025, 6, 16]
		},
		gtime: 1752657383917
	},
	{
		sdate: [1404, 4, 26],
		sdata: {
			solar: [1404, 3, 26]
		},
		stime: 1752743783917,
		gdate: [2025, 7, 17],
		gdata: {
			gregorian: [2025, 6, 17]
		},
		gtime: 1752743783917
	},
	{
		sdate: [1404, 4, 27],
		sdata: {
			solar: [1404, 3, 27]
		},
		stime: 1752830183917,
		gdate: [2025, 7, 18],
		gdata: {
			gregorian: [2025, 6, 18]
		},
		gtime: 1752830183917
	},
	{
		sdate: [1404, 4, 28],
		sdata: {
			solar: [1404, 3, 28]
		},
		stime: 1752916583917,
		gdate: [2025, 7, 19],
		gdata: {
			gregorian: [2025, 6, 19]
		},
		gtime: 1752916583917
	},
	{
		sdate: [1404, 4, 29],
		sdata: {
			solar: [1404, 3, 29]
		},
		stime: 1753002983917,
		gdate: [2025, 7, 20],
		gdata: {
			gregorian: [2025, 6, 20]
		},
		gtime: 1753002983917
	},
	{
		sdate: [1404, 4, 30],
		sdata: {
			solar: [1404, 3, 30]
		},
		stime: 1753089383917,
		gdate: [2025, 7, 21],
		gdata: {
			gregorian: [2025, 6, 21]
		},
		gtime: 1753089383917
	},
	{
		sdate: [1404, 4, 31],
		sdata: {
			solar: [1404, 3, 31]
		},
		stime: 1753175783917,
		gdate: [2025, 7, 22],
		gdata: {
			gregorian: [2025, 6, 22]
		},
		gtime: 1753175783917
	},
	{
		sdate: [1404, 5, 1],
		sdata: {
			solar: [1404, 4, 1]
		},
		stime: 1753262183917,
		gdate: [2025, 7, 23],
		gdata: {
			gregorian: [2025, 6, 23]
		},
		gtime: 1753262183917
	},
	{
		sdate: [1404, 5, 2],
		sdata: {
			solar: [1404, 4, 2]
		},
		stime: 1753348583917,
		gdate: [2025, 7, 24],
		gdata: {
			gregorian: [2025, 6, 24]
		},
		gtime: 1753348583917
	},
	{
		sdate: [1404, 5, 3],
		sdata: {
			solar: [1404, 4, 3]
		},
		stime: 1753434983917,
		gdate: [2025, 7, 25],
		gdata: {
			gregorian: [2025, 6, 25]
		},
		gtime: 1753434983917
	},
	{
		sdate: [1404, 5, 4],
		sdata: {
			solar: [1404, 4, 4]
		},
		stime: 1753521383917,
		gdate: [2025, 7, 26],
		gdata: {
			gregorian: [2025, 6, 26]
		},
		gtime: 1753521383917
	},
	{
		sdate: [1404, 5, 5],
		sdata: {
			solar: [1404, 4, 5]
		},
		stime: 1753607783917,
		gdate: [2025, 7, 27],
		gdata: {
			gregorian: [2025, 6, 27]
		},
		gtime: 1753607783917
	},
	{
		sdate: [1404, 5, 6],
		sdata: {
			solar: [1404, 4, 6]
		},
		stime: 1753694183917,
		gdate: [2025, 7, 28],
		gdata: {
			gregorian: [2025, 6, 28]
		},
		gtime: 1753694183917
	},
	{
		sdate: [1404, 5, 7],
		sdata: {
			solar: [1404, 4, 7]
		},
		stime: 1753780583917,
		gdate: [2025, 7, 29],
		gdata: {
			gregorian: [2025, 6, 29]
		},
		gtime: 1753780583917
	},
	{
		sdate: [1404, 5, 8],
		sdata: {
			solar: [1404, 4, 8]
		},
		stime: 1753866983917,
		gdate: [2025, 7, 30],
		gdata: {
			gregorian: [2025, 6, 30]
		},
		gtime: 1753866983917
	},
	{
		sdate: [1404, 5, 9],
		sdata: {
			solar: [1404, 4, 9]
		},
		stime: 1753953383917,
		gdate: [2025, 7, 31],
		gdata: {
			gregorian: [2025, 6, 31]
		},
		gtime: 1753953383917
	},
	{
		sdate: [1404, 5, 10],
		sdata: {
			solar: [1404, 4, 10]
		},
		stime: 1754039783917,
		gdate: [2025, 8, 1],
		gdata: {
			gregorian: [2025, 7, 1]
		},
		gtime: 1754039783917
	},
	{
		sdate: [1404, 5, 11],
		sdata: {
			solar: [1404, 4, 11]
		},
		stime: 1754126183917,
		gdate: [2025, 8, 2],
		gdata: {
			gregorian: [2025, 7, 2]
		},
		gtime: 1754126183917
	},
	{
		sdate: [1404, 5, 12],
		sdata: {
			solar: [1404, 4, 12]
		},
		stime: 1754212583917,
		gdate: [2025, 8, 3],
		gdata: {
			gregorian: [2025, 7, 3]
		},
		gtime: 1754212583917
	},
	{
		sdate: [1404, 5, 13],
		sdata: {
			solar: [1404, 4, 13]
		},
		stime: 1754298983917,
		gdate: [2025, 8, 4],
		gdata: {
			gregorian: [2025, 7, 4]
		},
		gtime: 1754298983917
	},
	{
		sdate: [1404, 5, 14],
		sdata: {
			solar: [1404, 4, 14]
		},
		stime: 1754385383917,
		gdate: [2025, 8, 5],
		gdata: {
			gregorian: [2025, 7, 5]
		},
		gtime: 1754385383917
	},
	{
		sdate: [1404, 5, 15],
		sdata: {
			solar: [1404, 4, 15]
		},
		stime: 1754471783917,
		gdate: [2025, 8, 6],
		gdata: {
			gregorian: [2025, 7, 6]
		},
		gtime: 1754471783917
	},
	{
		sdate: [1404, 5, 16],
		sdata: {
			solar: [1404, 4, 16]
		},
		stime: 1754558183917,
		gdate: [2025, 8, 7],
		gdata: {
			gregorian: [2025, 7, 7]
		},
		gtime: 1754558183917
	},
	{
		sdate: [1404, 5, 17],
		sdata: {
			solar: [1404, 4, 17]
		},
		stime: 1754644583917,
		gdate: [2025, 8, 8],
		gdata: {
			gregorian: [2025, 7, 8]
		},
		gtime: 1754644583917
	},
	{
		sdate: [1404, 5, 18],
		sdata: {
			solar: [1404, 4, 18]
		},
		stime: 1754730983917,
		gdate: [2025, 8, 9],
		gdata: {
			gregorian: [2025, 7, 9]
		},
		gtime: 1754730983917
	},
	{
		sdate: [1404, 5, 19],
		sdata: {
			solar: [1404, 4, 19]
		},
		stime: 1754817383917,
		gdate: [2025, 8, 10],
		gdata: {
			gregorian: [2025, 7, 10]
		},
		gtime: 1754817383917
	},
	{
		sdate: [1404, 5, 20],
		sdata: {
			solar: [1404, 4, 20]
		},
		stime: 1754903783917,
		gdate: [2025, 8, 11],
		gdata: {
			gregorian: [2025, 7, 11]
		},
		gtime: 1754903783917
	},
	{
		sdate: [1404, 5, 21],
		sdata: {
			solar: [1404, 4, 21]
		},
		stime: 1754990183917,
		gdate: [2025, 8, 12],
		gdata: {
			gregorian: [2025, 7, 12]
		},
		gtime: 1754990183917
	},
	{
		sdate: [1404, 5, 22],
		sdata: {
			solar: [1404, 4, 22]
		},
		stime: 1755076583917,
		gdate: [2025, 8, 13],
		gdata: {
			gregorian: [2025, 7, 13]
		},
		gtime: 1755076583917
	},
	{
		sdate: [1404, 5, 23],
		sdata: {
			solar: [1404, 4, 23]
		},
		stime: 1755162983917,
		gdate: [2025, 8, 14],
		gdata: {
			gregorian: [2025, 7, 14]
		},
		gtime: 1755162983917
	},
	{
		sdate: [1404, 5, 24],
		sdata: {
			solar: [1404, 4, 24]
		},
		stime: 1755249383917,
		gdate: [2025, 8, 15],
		gdata: {
			gregorian: [2025, 7, 15]
		},
		gtime: 1755249383917
	},
	{
		sdate: [1404, 5, 25],
		sdata: {
			solar: [1404, 4, 25]
		},
		stime: 1755335783917,
		gdate: [2025, 8, 16],
		gdata: {
			gregorian: [2025, 7, 16]
		},
		gtime: 1755335783917
	},
	{
		sdate: [1404, 5, 26],
		sdata: {
			solar: [1404, 4, 26]
		},
		stime: 1755422183917,
		gdate: [2025, 8, 17],
		gdata: {
			gregorian: [2025, 7, 17]
		},
		gtime: 1755422183917
	},
	{
		sdate: [1404, 5, 27],
		sdata: {
			solar: [1404, 4, 27]
		},
		stime: 1755508583917,
		gdate: [2025, 8, 18],
		gdata: {
			gregorian: [2025, 7, 18]
		},
		gtime: 1755508583917
	},
	{
		sdate: [1404, 5, 28],
		sdata: {
			solar: [1404, 4, 28]
		},
		stime: 1755594983917,
		gdate: [2025, 8, 19],
		gdata: {
			gregorian: [2025, 7, 19]
		},
		gtime: 1755594983917
	},
	{
		sdate: [1404, 5, 29],
		sdata: {
			solar: [1404, 4, 29]
		},
		stime: 1755681383917,
		gdate: [2025, 8, 20],
		gdata: {
			gregorian: [2025, 7, 20]
		},
		gtime: 1755681383917
	},
	{
		sdate: [1404, 5, 30],
		sdata: {
			solar: [1404, 4, 30]
		},
		stime: 1755767783917,
		gdate: [2025, 8, 21],
		gdata: {
			gregorian: [2025, 7, 21]
		},
		gtime: 1755767783917
	},
	{
		sdate: [1404, 5, 31],
		sdata: {
			solar: [1404, 4, 31]
		},
		stime: 1755854183917,
		gdate: [2025, 8, 22],
		gdata: {
			gregorian: [2025, 7, 22]
		},
		gtime: 1755854183917
	},
	{
		sdate: [1404, 6, 1],
		sdata: {
			solar: [1404, 5, 1]
		},
		stime: 1755940583917,
		gdate: [2025, 8, 23],
		gdata: {
			gregorian: [2025, 7, 23]
		},
		gtime: 1755940583917
	},
	{
		sdate: [1404, 6, 2],
		sdata: {
			solar: [1404, 5, 2]
		},
		stime: 1756026983917,
		gdate: [2025, 8, 24],
		gdata: {
			gregorian: [2025, 7, 24]
		},
		gtime: 1756026983917
	},
	{
		sdate: [1404, 6, 3],
		sdata: {
			solar: [1404, 5, 3]
		},
		stime: 1756113383917,
		gdate: [2025, 8, 25],
		gdata: {
			gregorian: [2025, 7, 25]
		},
		gtime: 1756113383917
	},
	{
		sdate: [1404, 6, 4],
		sdata: {
			solar: [1404, 5, 4]
		},
		stime: 1756199783917,
		gdate: [2025, 8, 26],
		gdata: {
			gregorian: [2025, 7, 26]
		},
		gtime: 1756199783917
	},
	{
		sdate: [1404, 6, 5],
		sdata: {
			solar: [1404, 5, 5]
		},
		stime: 1756286183917,
		gdate: [2025, 8, 27],
		gdata: {
			gregorian: [2025, 7, 27]
		},
		gtime: 1756286183917
	},
	{
		sdate: [1404, 6, 6],
		sdata: {
			solar: [1404, 5, 6]
		},
		stime: 1756372583917,
		gdate: [2025, 8, 28],
		gdata: {
			gregorian: [2025, 7, 28]
		},
		gtime: 1756372583917
	},
	{
		sdate: [1404, 6, 7],
		sdata: {
			solar: [1404, 5, 7]
		},
		stime: 1756458983917,
		gdate: [2025, 8, 29],
		gdata: {
			gregorian: [2025, 7, 29]
		},
		gtime: 1756458983917
	},
	{
		sdate: [1404, 6, 8],
		sdata: {
			solar: [1404, 5, 8]
		},
		stime: 1756545383917,
		gdate: [2025, 8, 30],
		gdata: {
			gregorian: [2025, 7, 30]
		},
		gtime: 1756545383917
	},
	{
		sdate: [1404, 6, 9],
		sdata: {
			solar: [1404, 5, 9]
		},
		stime: 1756631783917,
		gdate: [2025, 8, 31],
		gdata: {
			gregorian: [2025, 7, 31]
		},
		gtime: 1756631783917
	},
	{
		sdate: [1404, 6, 10],
		sdata: {
			solar: [1404, 5, 10]
		},
		stime: 1756718183917,
		gdate: [2025, 9, 1],
		gdata: {
			gregorian: [2025, 8, 1]
		},
		gtime: 1756718183917
	},
	{
		sdate: [1404, 6, 11],
		sdata: {
			solar: [1404, 5, 11]
		},
		stime: 1756804583917,
		gdate: [2025, 9, 2],
		gdata: {
			gregorian: [2025, 8, 2]
		},
		gtime: 1756804583917
	},
	{
		sdate: [1404, 6, 12],
		sdata: {
			solar: [1404, 5, 12]
		},
		stime: 1756890983917,
		gdate: [2025, 9, 3],
		gdata: {
			gregorian: [2025, 8, 3]
		},
		gtime: 1756890983917
	},
	{
		sdate: [1404, 6, 13],
		sdata: {
			solar: [1404, 5, 13]
		},
		stime: 1756977383917,
		gdate: [2025, 9, 4],
		gdata: {
			gregorian: [2025, 8, 4]
		},
		gtime: 1756977383917
	},
	{
		sdate: [1404, 6, 14],
		sdata: {
			solar: [1404, 5, 14]
		},
		stime: 1757063783917,
		gdate: [2025, 9, 5],
		gdata: {
			gregorian: [2025, 8, 5]
		},
		gtime: 1757063783917
	},
	{
		sdate: [1404, 6, 15],
		sdata: {
			solar: [1404, 5, 15]
		},
		stime: 1757150183917,
		gdate: [2025, 9, 6],
		gdata: {
			gregorian: [2025, 8, 6]
		},
		gtime: 1757150183917
	},
	{
		sdate: [1404, 6, 16],
		sdata: {
			solar: [1404, 5, 16]
		},
		stime: 1757236583917,
		gdate: [2025, 9, 7],
		gdata: {
			gregorian: [2025, 8, 7]
		},
		gtime: 1757236583917
	},
	{
		sdate: [1404, 6, 17],
		sdata: {
			solar: [1404, 5, 17]
		},
		stime: 1757322983917,
		gdate: [2025, 9, 8],
		gdata: {
			gregorian: [2025, 8, 8]
		},
		gtime: 1757322983917
	},
	{
		sdate: [1404, 6, 18],
		sdata: {
			solar: [1404, 5, 18]
		},
		stime: 1757409383917,
		gdate: [2025, 9, 9],
		gdata: {
			gregorian: [2025, 8, 9]
		},
		gtime: 1757409383917
	},
	{
		sdate: [1404, 6, 19],
		sdata: {
			solar: [1404, 5, 19]
		},
		stime: 1757495783917,
		gdate: [2025, 9, 10],
		gdata: {
			gregorian: [2025, 8, 10]
		},
		gtime: 1757495783917
	},
	{
		sdate: [1404, 6, 20],
		sdata: {
			solar: [1404, 5, 20]
		},
		stime: 1757582183917,
		gdate: [2025, 9, 11],
		gdata: {
			gregorian: [2025, 8, 11]
		},
		gtime: 1757582183917
	},
	{
		sdate: [1404, 6, 21],
		sdata: {
			solar: [1404, 5, 21]
		},
		stime: 1757668583917,
		gdate: [2025, 9, 12],
		gdata: {
			gregorian: [2025, 8, 12]
		},
		gtime: 1757668583917
	},
	{
		sdate: [1404, 6, 22],
		sdata: {
			solar: [1404, 5, 22]
		},
		stime: 1757754983917,
		gdate: [2025, 9, 13],
		gdata: {
			gregorian: [2025, 8, 13]
		},
		gtime: 1757754983917
	},
	{
		sdate: [1404, 6, 23],
		sdata: {
			solar: [1404, 5, 23]
		},
		stime: 1757841383917,
		gdate: [2025, 9, 14],
		gdata: {
			gregorian: [2025, 8, 14]
		},
		gtime: 1757841383917
	},
	{
		sdate: [1404, 6, 24],
		sdata: {
			solar: [1404, 5, 24]
		},
		stime: 1757927783917,
		gdate: [2025, 9, 15],
		gdata: {
			gregorian: [2025, 8, 15]
		},
		gtime: 1757927783917
	},
	{
		sdate: [1404, 6, 25],
		sdata: {
			solar: [1404, 5, 25]
		},
		stime: 1758014183917,
		gdate: [2025, 9, 16],
		gdata: {
			gregorian: [2025, 8, 16]
		},
		gtime: 1758014183917
	},
	{
		sdate: [1404, 6, 26],
		sdata: {
			solar: [1404, 5, 26]
		},
		stime: 1758100583917,
		gdate: [2025, 9, 17],
		gdata: {
			gregorian: [2025, 8, 17]
		},
		gtime: 1758100583917
	},
	{
		sdate: [1404, 6, 27],
		sdata: {
			solar: [1404, 5, 27]
		},
		stime: 1758186983917,
		gdate: [2025, 9, 18],
		gdata: {
			gregorian: [2025, 8, 18]
		},
		gtime: 1758186983917
	},
	{
		sdate: [1404, 6, 28],
		sdata: {
			solar: [1404, 5, 28]
		},
		stime: 1758273383917,
		gdate: [2025, 9, 19],
		gdata: {
			gregorian: [2025, 8, 19]
		},
		gtime: 1758273383917
	},
	{
		sdate: [1404, 6, 29],
		sdata: {
			solar: [1404, 5, 29]
		},
		stime: 1758359783917,
		gdate: [2025, 9, 20],
		gdata: {
			gregorian: [2025, 8, 20]
		},
		gtime: 1758359783917
	},
	{
		sdate: [1404, 6, 30],
		sdata: {
			solar: [1404, 5, 30]
		},
		stime: 1758446183917,
		gdate: [2025, 9, 21],
		gdata: {
			gregorian: [2025, 8, 21]
		},
		gtime: 1758446183917
	},
	{
		sdate: [1404, 6, 31],
		sdata: {
			solar: [1404, 5, 31]
		},
		stime: 1758532583917,
		gdate: [2025, 9, 22],
		gdata: {
			gregorian: [2025, 8, 22]
		},
		gtime: 1758532583917
	},
	{
		sdate: [1404, 7, 1],
		sdata: {
			solar: [1404, 6, 1]
		},
		stime: 1758618983917,
		gdate: [2025, 9, 23],
		gdata: {
			gregorian: [2025, 8, 23]
		},
		gtime: 1758618983917
	},
	{
		sdate: [1404, 7, 2],
		sdata: {
			solar: [1404, 6, 2]
		},
		stime: 1758705383917,
		gdate: [2025, 9, 24],
		gdata: {
			gregorian: [2025, 8, 24]
		},
		gtime: 1758705383917
	},
	{
		sdate: [1404, 7, 3],
		sdata: {
			solar: [1404, 6, 3]
		},
		stime: 1758791783917,
		gdate: [2025, 9, 25],
		gdata: {
			gregorian: [2025, 8, 25]
		},
		gtime: 1758791783917
	},
	{
		sdate: [1404, 7, 4],
		sdata: {
			solar: [1404, 6, 4]
		},
		stime: 1758878183917,
		gdate: [2025, 9, 26],
		gdata: {
			gregorian: [2025, 8, 26]
		},
		gtime: 1758878183917
	},
	{
		sdate: [1404, 7, 5],
		sdata: {
			solar: [1404, 6, 5]
		},
		stime: 1758964583917,
		gdate: [2025, 9, 27],
		gdata: {
			gregorian: [2025, 8, 27]
		},
		gtime: 1758964583917
	},
	{
		sdate: [1404, 7, 6],
		sdata: {
			solar: [1404, 6, 6]
		},
		stime: 1759050983917,
		gdate: [2025, 9, 28],
		gdata: {
			gregorian: [2025, 8, 28]
		},
		gtime: 1759050983917
	},
	{
		sdate: [1404, 7, 7],
		sdata: {
			solar: [1404, 6, 7]
		},
		stime: 1759137383917,
		gdate: [2025, 9, 29],
		gdata: {
			gregorian: [2025, 8, 29]
		},
		gtime: 1759137383917
	},
	{
		sdate: [1404, 7, 8],
		sdata: {
			solar: [1404, 6, 8]
		},
		stime: 1759223783917,
		gdate: [2025, 9, 30],
		gdata: {
			gregorian: [2025, 8, 30]
		},
		gtime: 1759223783917
	},
	{
		sdate: [1404, 7, 9],
		sdata: {
			solar: [1404, 6, 9]
		},
		stime: 1759310183917,
		gdate: [2025, 10, 1],
		gdata: {
			gregorian: [2025, 9, 1]
		},
		gtime: 1759310183917
	},
	{
		sdate: [1404, 7, 10],
		sdata: {
			solar: [1404, 6, 10]
		},
		stime: 1759396583917,
		gdate: [2025, 10, 2],
		gdata: {
			gregorian: [2025, 9, 2]
		},
		gtime: 1759396583917
	},
	{
		sdate: [1404, 7, 11],
		sdata: {
			solar: [1404, 6, 11]
		},
		stime: 1759482983917,
		gdate: [2025, 10, 3],
		gdata: {
			gregorian: [2025, 9, 3]
		},
		gtime: 1759482983917
	},
	{
		sdate: [1404, 7, 12],
		sdata: {
			solar: [1404, 6, 12]
		},
		stime: 1759569383917,
		gdate: [2025, 10, 4],
		gdata: {
			gregorian: [2025, 9, 4]
		},
		gtime: 1759569383917
	},
	{
		sdate: [1404, 7, 13],
		sdata: {
			solar: [1404, 6, 13]
		},
		stime: 1759655783917,
		gdate: [2025, 10, 5],
		gdata: {
			gregorian: [2025, 9, 5]
		},
		gtime: 1759655783917
	},
	{
		sdate: [1404, 7, 14],
		sdata: {
			solar: [1404, 6, 14]
		},
		stime: 1759742183917,
		gdate: [2025, 10, 6],
		gdata: {
			gregorian: [2025, 9, 6]
		},
		gtime: 1759742183917
	},
	{
		sdate: [1404, 7, 15],
		sdata: {
			solar: [1404, 6, 15]
		},
		stime: 1759828583917,
		gdate: [2025, 10, 7],
		gdata: {
			gregorian: [2025, 9, 7]
		},
		gtime: 1759828583917
	},
	{
		sdate: [1404, 7, 16],
		sdata: {
			solar: [1404, 6, 16]
		},
		stime: 1759914983917,
		gdate: [2025, 10, 8],
		gdata: {
			gregorian: [2025, 9, 8]
		},
		gtime: 1759914983917
	},
	{
		sdate: [1404, 7, 17],
		sdata: {
			solar: [1404, 6, 17]
		},
		stime: 1760001383917,
		gdate: [2025, 10, 9],
		gdata: {
			gregorian: [2025, 9, 9]
		},
		gtime: 1760001383917
	},
	{
		sdate: [1404, 7, 18],
		sdata: {
			solar: [1404, 6, 18]
		},
		stime: 1760087783917,
		gdate: [2025, 10, 10],
		gdata: {
			gregorian: [2025, 9, 10]
		},
		gtime: 1760087783917
	},
	{
		sdate: [1404, 7, 19],
		sdata: {
			solar: [1404, 6, 19]
		},
		stime: 1760174183917,
		gdate: [2025, 10, 11],
		gdata: {
			gregorian: [2025, 9, 11]
		},
		gtime: 1760174183917
	},
	{
		sdate: [1404, 7, 20],
		sdata: {
			solar: [1404, 6, 20]
		},
		stime: 1760260583917,
		gdate: [2025, 10, 12],
		gdata: {
			gregorian: [2025, 9, 12]
		},
		gtime: 1760260583917
	},
	{
		sdate: [1404, 7, 21],
		sdata: {
			solar: [1404, 6, 21]
		},
		stime: 1760346983917,
		gdate: [2025, 10, 13],
		gdata: {
			gregorian: [2025, 9, 13]
		},
		gtime: 1760346983917
	},
	{
		sdate: [1404, 7, 22],
		sdata: {
			solar: [1404, 6, 22]
		},
		stime: 1760433383917,
		gdate: [2025, 10, 14],
		gdata: {
			gregorian: [2025, 9, 14]
		},
		gtime: 1760433383917
	},
	{
		sdate: [1404, 7, 23],
		sdata: {
			solar: [1404, 6, 23]
		},
		stime: 1760519783917,
		gdate: [2025, 10, 15],
		gdata: {
			gregorian: [2025, 9, 15]
		},
		gtime: 1760519783917
	},
	{
		sdate: [1404, 7, 24],
		sdata: {
			solar: [1404, 6, 24]
		},
		stime: 1760606183917,
		gdate: [2025, 10, 16],
		gdata: {
			gregorian: [2025, 9, 16]
		},
		gtime: 1760606183917
	},
	{
		sdate: [1404, 7, 25],
		sdata: {
			solar: [1404, 6, 25]
		},
		stime: 1760692583917,
		gdate: [2025, 10, 17],
		gdata: {
			gregorian: [2025, 9, 17]
		},
		gtime: 1760692583917
	},
	{
		sdate: [1404, 7, 26],
		sdata: {
			solar: [1404, 6, 26]
		},
		stime: 1760778983917,
		gdate: [2025, 10, 18],
		gdata: {
			gregorian: [2025, 9, 18]
		},
		gtime: 1760778983917
	},
	{
		sdate: [1404, 7, 27],
		sdata: {
			solar: [1404, 6, 27]
		},
		stime: 1760865383917,
		gdate: [2025, 10, 19],
		gdata: {
			gregorian: [2025, 9, 19]
		},
		gtime: 1760865383917
	},
	{
		sdate: [1404, 7, 28],
		sdata: {
			solar: [1404, 6, 28]
		},
		stime: 1760951783917,
		gdate: [2025, 10, 20],
		gdata: {
			gregorian: [2025, 9, 20]
		},
		gtime: 1760951783917
	},
	{
		sdate: [1404, 7, 29],
		sdata: {
			solar: [1404, 6, 29]
		},
		stime: 1761038183917,
		gdate: [2025, 10, 21],
		gdata: {
			gregorian: [2025, 9, 21]
		},
		gtime: 1761038183917
	},
	{
		sdate: [1404, 7, 30],
		sdata: {
			solar: [1404, 6, 30]
		},
		stime: 1761124583917,
		gdate: [2025, 10, 22],
		gdata: {
			gregorian: [2025, 9, 22]
		},
		gtime: 1761124583917
	},
	{
		sdate: [1404, 8, 1],
		sdata: {
			solar: [1404, 7, 1]
		},
		stime: 1761210983917,
		gdate: [2025, 10, 23],
		gdata: {
			gregorian: [2025, 9, 23]
		},
		gtime: 1761210983917
	},
	{
		sdate: [1404, 8, 2],
		sdata: {
			solar: [1404, 7, 2]
		},
		stime: 1761297383917,
		gdate: [2025, 10, 24],
		gdata: {
			gregorian: [2025, 9, 24]
		},
		gtime: 1761297383917
	},
	{
		sdate: [1404, 8, 3],
		sdata: {
			solar: [1404, 7, 3]
		},
		stime: 1761383783917,
		gdate: [2025, 10, 25],
		gdata: {
			gregorian: [2025, 9, 25]
		},
		gtime: 1761383783917
	},
	{
		sdate: [1404, 8, 4],
		sdata: {
			solar: [1404, 7, 4]
		},
		stime: 1761470183917,
		gdate: [2025, 10, 26],
		gdata: {
			gregorian: [2025, 9, 26]
		},
		gtime: 1761470183917
	},
	{
		sdate: [1404, 8, 5],
		sdata: {
			solar: [1404, 7, 5]
		},
		stime: 1761556583917,
		gdate: [2025, 10, 27],
		gdata: {
			gregorian: [2025, 9, 27]
		},
		gtime: 1761556583917
	},
	{
		sdate: [1404, 8, 6],
		sdata: {
			solar: [1404, 7, 6]
		},
		stime: 1761642983917,
		gdate: [2025, 10, 28],
		gdata: {
			gregorian: [2025, 9, 28]
		},
		gtime: 1761642983917
	},
	{
		sdate: [1404, 8, 7],
		sdata: {
			solar: [1404, 7, 7]
		},
		stime: 1761729383917,
		gdate: [2025, 10, 29],
		gdata: {
			gregorian: [2025, 9, 29]
		},
		gtime: 1761729383917
	},
	{
		sdate: [1404, 8, 8],
		sdata: {
			solar: [1404, 7, 8]
		},
		stime: 1761815783917,
		gdate: [2025, 10, 30],
		gdata: {
			gregorian: [2025, 9, 30]
		},
		gtime: 1761815783917
	},
	{
		sdate: [1404, 8, 9],
		sdata: {
			solar: [1404, 7, 9]
		},
		stime: 1761902183917,
		gdate: [2025, 10, 31],
		gdata: {
			gregorian: [2025, 9, 31]
		},
		gtime: 1761902183917
	},
	{
		sdate: [1404, 8, 10],
		sdata: {
			solar: [1404, 7, 10]
		},
		stime: 1761988583917,
		gdate: [2025, 11, 1],
		gdata: {
			gregorian: [2025, 10, 1]
		},
		gtime: 1761988583917
	},
	{
		sdate: [1404, 8, 11],
		sdata: {
			solar: [1404, 7, 11]
		},
		stime: 1762074983917,
		gdate: [2025, 11, 2],
		gdata: {
			gregorian: [2025, 10, 2]
		},
		gtime: 1762074983917
	},
	{
		sdate: [1404, 8, 12],
		sdata: {
			solar: [1404, 7, 12]
		},
		stime: 1762161383917,
		gdate: [2025, 11, 3],
		gdata: {
			gregorian: [2025, 10, 3]
		},
		gtime: 1762161383917
	},
	{
		sdate: [1404, 8, 13],
		sdata: {
			solar: [1404, 7, 13]
		},
		stime: 1762247783917,
		gdate: [2025, 11, 4],
		gdata: {
			gregorian: [2025, 10, 4]
		},
		gtime: 1762247783917
	},
	{
		sdate: [1404, 8, 14],
		sdata: {
			solar: [1404, 7, 14]
		},
		stime: 1762334183917,
		gdate: [2025, 11, 5],
		gdata: {
			gregorian: [2025, 10, 5]
		},
		gtime: 1762334183917
	},
	{
		sdate: [1404, 8, 15],
		sdata: {
			solar: [1404, 7, 15]
		},
		stime: 1762420583917,
		gdate: [2025, 11, 6],
		gdata: {
			gregorian: [2025, 10, 6]
		},
		gtime: 1762420583917
	},
	{
		sdate: [1404, 8, 16],
		sdata: {
			solar: [1404, 7, 16]
		},
		stime: 1762506983917,
		gdate: [2025, 11, 7],
		gdata: {
			gregorian: [2025, 10, 7]
		},
		gtime: 1762506983917
	},
	{
		sdate: [1404, 8, 17],
		sdata: {
			solar: [1404, 7, 17]
		},
		stime: 1762593383917,
		gdate: [2025, 11, 8],
		gdata: {
			gregorian: [2025, 10, 8]
		},
		gtime: 1762593383917
	},
	{
		sdate: [1404, 8, 18],
		sdata: {
			solar: [1404, 7, 18]
		},
		stime: 1762679783917,
		gdate: [2025, 11, 9],
		gdata: {
			gregorian: [2025, 10, 9]
		},
		gtime: 1762679783917
	},
	{
		sdate: [1404, 8, 19],
		sdata: {
			solar: [1404, 7, 19]
		},
		stime: 1762766183917,
		gdate: [2025, 11, 10],
		gdata: {
			gregorian: [2025, 10, 10]
		},
		gtime: 1762766183917
	},
	{
		sdate: [1404, 8, 20],
		sdata: {
			solar: [1404, 7, 20]
		},
		stime: 1762852583917,
		gdate: [2025, 11, 11],
		gdata: {
			gregorian: [2025, 10, 11]
		},
		gtime: 1762852583917
	},
	{
		sdate: [1404, 8, 21],
		sdata: {
			solar: [1404, 7, 21]
		},
		stime: 1762938983917,
		gdate: [2025, 11, 12],
		gdata: {
			gregorian: [2025, 10, 12]
		},
		gtime: 1762938983917
	},
	{
		sdate: [1404, 8, 22],
		sdata: {
			solar: [1404, 7, 22]
		},
		stime: 1763025383917,
		gdate: [2025, 11, 13],
		gdata: {
			gregorian: [2025, 10, 13]
		},
		gtime: 1763025383917
	},
	{
		sdate: [1404, 8, 23],
		sdata: {
			solar: [1404, 7, 23]
		},
		stime: 1763111783917,
		gdate: [2025, 11, 14],
		gdata: {
			gregorian: [2025, 10, 14]
		},
		gtime: 1763111783917
	},
	{
		sdate: [1404, 8, 24],
		sdata: {
			solar: [1404, 7, 24]
		},
		stime: 1763198183917,
		gdate: [2025, 11, 15],
		gdata: {
			gregorian: [2025, 10, 15]
		},
		gtime: 1763198183917
	},
	{
		sdate: [1404, 8, 25],
		sdata: {
			solar: [1404, 7, 25]
		},
		stime: 1763284583917,
		gdate: [2025, 11, 16],
		gdata: {
			gregorian: [2025, 10, 16]
		},
		gtime: 1763284583917
	},
	{
		sdate: [1404, 8, 26],
		sdata: {
			solar: [1404, 7, 26]
		},
		stime: 1763370983917,
		gdate: [2025, 11, 17],
		gdata: {
			gregorian: [2025, 10, 17]
		},
		gtime: 1763370983917
	},
	{
		sdate: [1404, 8, 27],
		sdata: {
			solar: [1404, 7, 27]
		},
		stime: 1763457383917,
		gdate: [2025, 11, 18],
		gdata: {
			gregorian: [2025, 10, 18]
		},
		gtime: 1763457383917
	},
	{
		sdate: [1404, 8, 28],
		sdata: {
			solar: [1404, 7, 28]
		},
		stime: 1763543783917,
		gdate: [2025, 11, 19],
		gdata: {
			gregorian: [2025, 10, 19]
		},
		gtime: 1763543783917
	},
	{
		sdate: [1404, 8, 29],
		sdata: {
			solar: [1404, 7, 29]
		},
		stime: 1763630183917,
		gdate: [2025, 11, 20],
		gdata: {
			gregorian: [2025, 10, 20]
		},
		gtime: 1763630183917
	},
	{
		sdate: [1404, 8, 30],
		sdata: {
			solar: [1404, 7, 30]
		},
		stime: 1763716583917,
		gdate: [2025, 11, 21],
		gdata: {
			gregorian: [2025, 10, 21]
		},
		gtime: 1763716583917
	},
	{
		sdate: [1404, 9, 1],
		sdata: {
			solar: [1404, 8, 1]
		},
		stime: 1763802983917,
		gdate: [2025, 11, 22],
		gdata: {
			gregorian: [2025, 10, 22]
		},
		gtime: 1763802983917
	},
	{
		sdate: [1404, 9, 2],
		sdata: {
			solar: [1404, 8, 2]
		},
		stime: 1763889383917,
		gdate: [2025, 11, 23],
		gdata: {
			gregorian: [2025, 10, 23]
		},
		gtime: 1763889383917
	},
	{
		sdate: [1404, 9, 3],
		sdata: {
			solar: [1404, 8, 3]
		},
		stime: 1763975783917,
		gdate: [2025, 11, 24],
		gdata: {
			gregorian: [2025, 10, 24]
		},
		gtime: 1763975783917
	},
	{
		sdate: [1404, 9, 4],
		sdata: {
			solar: [1404, 8, 4]
		},
		stime: 1764062183917,
		gdate: [2025, 11, 25],
		gdata: {
			gregorian: [2025, 10, 25]
		},
		gtime: 1764062183917
	},
	{
		sdate: [1404, 9, 5],
		sdata: {
			solar: [1404, 8, 5]
		},
		stime: 1764148583917,
		gdate: [2025, 11, 26],
		gdata: {
			gregorian: [2025, 10, 26]
		},
		gtime: 1764148583917
	},
	{
		sdate: [1404, 9, 6],
		sdata: {
			solar: [1404, 8, 6]
		},
		stime: 1764234983917,
		gdate: [2025, 11, 27],
		gdata: {
			gregorian: [2025, 10, 27]
		},
		gtime: 1764234983917
	},
	{
		sdate: [1404, 9, 7],
		sdata: {
			solar: [1404, 8, 7]
		},
		stime: 1764321383917,
		gdate: [2025, 11, 28],
		gdata: {
			gregorian: [2025, 10, 28]
		},
		gtime: 1764321383917
	},
	{
		sdate: [1404, 9, 8],
		sdata: {
			solar: [1404, 8, 8]
		},
		stime: 1764407783917,
		gdate: [2025, 11, 29],
		gdata: {
			gregorian: [2025, 10, 29]
		},
		gtime: 1764407783917
	},
	{
		sdate: [1404, 9, 9],
		sdata: {
			solar: [1404, 8, 9]
		},
		stime: 1764494183917,
		gdate: [2025, 11, 30],
		gdata: {
			gregorian: [2025, 10, 30]
		},
		gtime: 1764494183917
	},
	{
		sdate: [1404, 9, 10],
		sdata: {
			solar: [1404, 8, 10]
		},
		stime: 1764580583917,
		gdate: [2025, 12, 1],
		gdata: {
			gregorian: [2025, 11, 1]
		},
		gtime: 1764580583917
	},
	{
		sdate: [1404, 9, 11],
		sdata: {
			solar: [1404, 8, 11]
		},
		stime: 1764666983917,
		gdate: [2025, 12, 2],
		gdata: {
			gregorian: [2025, 11, 2]
		},
		gtime: 1764666983917
	},
	{
		sdate: [1404, 9, 12],
		sdata: {
			solar: [1404, 8, 12]
		},
		stime: 1764753383917,
		gdate: [2025, 12, 3],
		gdata: {
			gregorian: [2025, 11, 3]
		},
		gtime: 1764753383917
	},
	{
		sdate: [1404, 9, 13],
		sdata: {
			solar: [1404, 8, 13]
		},
		stime: 1764839783917,
		gdate: [2025, 12, 4],
		gdata: {
			gregorian: [2025, 11, 4]
		},
		gtime: 1764839783917
	},
	{
		sdate: [1404, 9, 14],
		sdata: {
			solar: [1404, 8, 14]
		},
		stime: 1764926183917,
		gdate: [2025, 12, 5],
		gdata: {
			gregorian: [2025, 11, 5]
		},
		gtime: 1764926183917
	},
	{
		sdate: [1404, 9, 15],
		sdata: {
			solar: [1404, 8, 15]
		},
		stime: 1765012583917,
		gdate: [2025, 12, 6],
		gdata: {
			gregorian: [2025, 11, 6]
		},
		gtime: 1765012583917
	},
	{
		sdate: [1404, 9, 16],
		sdata: {
			solar: [1404, 8, 16]
		},
		stime: 1765098983917,
		gdate: [2025, 12, 7],
		gdata: {
			gregorian: [2025, 11, 7]
		},
		gtime: 1765098983917
	},
	{
		sdate: [1404, 9, 17],
		sdata: {
			solar: [1404, 8, 17]
		},
		stime: 1765185383917,
		gdate: [2025, 12, 8],
		gdata: {
			gregorian: [2025, 11, 8]
		},
		gtime: 1765185383917
	},
	{
		sdate: [1404, 9, 18],
		sdata: {
			solar: [1404, 8, 18]
		},
		stime: 1765271783917,
		gdate: [2025, 12, 9],
		gdata: {
			gregorian: [2025, 11, 9]
		},
		gtime: 1765271783917
	},
	{
		sdate: [1404, 9, 19],
		sdata: {
			solar: [1404, 8, 19]
		},
		stime: 1765358183917,
		gdate: [2025, 12, 10],
		gdata: {
			gregorian: [2025, 11, 10]
		},
		gtime: 1765358183917
	},
	{
		sdate: [1404, 9, 20],
		sdata: {
			solar: [1404, 8, 20]
		},
		stime: 1765444583917,
		gdate: [2025, 12, 11],
		gdata: {
			gregorian: [2025, 11, 11]
		},
		gtime: 1765444583917
	},
	{
		sdate: [1404, 9, 21],
		sdata: {
			solar: [1404, 8, 21]
		},
		stime: 1765530983917,
		gdate: [2025, 12, 12],
		gdata: {
			gregorian: [2025, 11, 12]
		},
		gtime: 1765530983917
	},
	{
		sdate: [1404, 9, 22],
		sdata: {
			solar: [1404, 8, 22]
		},
		stime: 1765617383917,
		gdate: [2025, 12, 13],
		gdata: {
			gregorian: [2025, 11, 13]
		},
		gtime: 1765617383917
	},
	{
		sdate: [1404, 9, 23],
		sdata: {
			solar: [1404, 8, 23]
		},
		stime: 1765703783917,
		gdate: [2025, 12, 14],
		gdata: {
			gregorian: [2025, 11, 14]
		},
		gtime: 1765703783917
	},
	{
		sdate: [1404, 9, 24],
		sdata: {
			solar: [1404, 8, 24]
		},
		stime: 1765790183917,
		gdate: [2025, 12, 15],
		gdata: {
			gregorian: [2025, 11, 15]
		},
		gtime: 1765790183917
	},
	{
		sdate: [1404, 9, 25],
		sdata: {
			solar: [1404, 8, 25]
		},
		stime: 1765876583917,
		gdate: [2025, 12, 16],
		gdata: {
			gregorian: [2025, 11, 16]
		},
		gtime: 1765876583917
	},
	{
		sdate: [1404, 9, 26],
		sdata: {
			solar: [1404, 8, 26]
		},
		stime: 1765962983917,
		gdate: [2025, 12, 17],
		gdata: {
			gregorian: [2025, 11, 17]
		},
		gtime: 1765962983917
	},
	{
		sdate: [1404, 9, 27],
		sdata: {
			solar: [1404, 8, 27]
		},
		stime: 1766049383917,
		gdate: [2025, 12, 18],
		gdata: {
			gregorian: [2025, 11, 18]
		},
		gtime: 1766049383917
	},
	{
		sdate: [1404, 9, 28],
		sdata: {
			solar: [1404, 8, 28]
		},
		stime: 1766135783917,
		gdate: [2025, 12, 19],
		gdata: {
			gregorian: [2025, 11, 19]
		},
		gtime: 1766135783917
	},
	{
		sdate: [1404, 9, 29],
		sdata: {
			solar: [1404, 8, 29]
		},
		stime: 1766222183917,
		gdate: [2025, 12, 20],
		gdata: {
			gregorian: [2025, 11, 20]
		},
		gtime: 1766222183917
	},
	{
		sdate: [1404, 9, 30],
		sdata: {
			solar: [1404, 8, 30]
		},
		stime: 1766308583917,
		gdate: [2025, 12, 21],
		gdata: {
			gregorian: [2025, 11, 21]
		},
		gtime: 1766308583917
	},
	{
		sdate: [1404, 10, 1],
		sdata: {
			solar: [1404, 9, 1]
		},
		stime: 1766394983917,
		gdate: [2025, 12, 22],
		gdata: {
			gregorian: [2025, 11, 22]
		},
		gtime: 1766394983917
	},
	{
		sdate: [1404, 10, 2],
		sdata: {
			solar: [1404, 9, 2]
		},
		stime: 1766481383917,
		gdate: [2025, 12, 23],
		gdata: {
			gregorian: [2025, 11, 23]
		},
		gtime: 1766481383917
	},
	{
		sdate: [1404, 10, 3],
		sdata: {
			solar: [1404, 9, 3]
		},
		stime: 1766567783917,
		gdate: [2025, 12, 24],
		gdata: {
			gregorian: [2025, 11, 24]
		},
		gtime: 1766567783917
	},
	{
		sdate: [1404, 10, 4],
		sdata: {
			solar: [1404, 9, 4]
		},
		stime: 1766654183917,
		gdate: [2025, 12, 25],
		gdata: {
			gregorian: [2025, 11, 25]
		},
		gtime: 1766654183917
	},
	{
		sdate: [1404, 10, 5],
		sdata: {
			solar: [1404, 9, 5]
		},
		stime: 1766740583917,
		gdate: [2025, 12, 26],
		gdata: {
			gregorian: [2025, 11, 26]
		},
		gtime: 1766740583917
	},
	{
		sdate: [1404, 10, 6],
		sdata: {
			solar: [1404, 9, 6]
		},
		stime: 1766826983917,
		gdate: [2025, 12, 27],
		gdata: {
			gregorian: [2025, 11, 27]
		},
		gtime: 1766826983917
	},
	{
		sdate: [1404, 10, 7],
		sdata: {
			solar: [1404, 9, 7]
		},
		stime: 1766913383917,
		gdate: [2025, 12, 28],
		gdata: {
			gregorian: [2025, 11, 28]
		},
		gtime: 1766913383917
	},
	{
		sdate: [1404, 10, 8],
		sdata: {
			solar: [1404, 9, 8]
		},
		stime: 1766999783917,
		gdate: [2025, 12, 29],
		gdata: {
			gregorian: [2025, 11, 29]
		},
		gtime: 1766999783917
	},
	{
		sdate: [1404, 10, 9],
		sdata: {
			solar: [1404, 9, 9]
		},
		stime: 1767086183917,
		gdate: [2025, 12, 30],
		gdata: {
			gregorian: [2025, 11, 30]
		},
		gtime: 1767086183917
	},
	{
		sdate: [1404, 10, 10],
		sdata: {
			solar: [1404, 9, 10]
		},
		stime: 1767172583917,
		gdate: [2025, 12, 31],
		gdata: {
			gregorian: [2025, 11, 31]
		},
		gtime: 1767172583917
	},
	{
		sdate: [1404, 10, 11],
		sdata: {
			solar: [1404, 9, 11]
		},
		stime: 1767258983917,
		gdate: [2026, 1, 1],
		gdata: {
			gregorian: [2026, 0, 1]
		},
		gtime: 1767258983917
	},
	{
		sdate: [1404, 10, 12],
		sdata: {
			solar: [1404, 9, 12]
		},
		stime: 1767345383917,
		gdate: [2026, 1, 2],
		gdata: {
			gregorian: [2026, 0, 2]
		},
		gtime: 1767345383917
	},
	{
		sdate: [1404, 10, 13],
		sdata: {
			solar: [1404, 9, 13]
		},
		stime: 1767431783917,
		gdate: [2026, 1, 3],
		gdata: {
			gregorian: [2026, 0, 3]
		},
		gtime: 1767431783917
	},
	{
		sdate: [1404, 10, 14],
		sdata: {
			solar: [1404, 9, 14]
		},
		stime: 1767518183917,
		gdate: [2026, 1, 4],
		gdata: {
			gregorian: [2026, 0, 4]
		},
		gtime: 1767518183917
	},
	{
		sdate: [1404, 10, 15],
		sdata: {
			solar: [1404, 9, 15]
		},
		stime: 1767604583917,
		gdate: [2026, 1, 5],
		gdata: {
			gregorian: [2026, 0, 5]
		},
		gtime: 1767604583917
	},
	{
		sdate: [1404, 10, 16],
		sdata: {
			solar: [1404, 9, 16]
		},
		stime: 1767690983917,
		gdate: [2026, 1, 6],
		gdata: {
			gregorian: [2026, 0, 6]
		},
		gtime: 1767690983917
	},
	{
		sdate: [1404, 10, 17],
		sdata: {
			solar: [1404, 9, 17]
		},
		stime: 1767777383917,
		gdate: [2026, 1, 7],
		gdata: {
			gregorian: [2026, 0, 7]
		},
		gtime: 1767777383917
	},
	{
		sdate: [1404, 10, 18],
		sdata: {
			solar: [1404, 9, 18]
		},
		stime: 1767863783917,
		gdate: [2026, 1, 8],
		gdata: {
			gregorian: [2026, 0, 8]
		},
		gtime: 1767863783917
	},
	{
		sdate: [1404, 10, 19],
		sdata: {
			solar: [1404, 9, 19]
		},
		stime: 1767950183917,
		gdate: [2026, 1, 9],
		gdata: {
			gregorian: [2026, 0, 9]
		},
		gtime: 1767950183917
	},
	{
		sdate: [1404, 10, 20],
		sdata: {
			solar: [1404, 9, 20]
		},
		stime: 1768036583917,
		gdate: [2026, 1, 10],
		gdata: {
			gregorian: [2026, 0, 10]
		},
		gtime: 1768036583917
	},
	{
		sdate: [1404, 10, 21],
		sdata: {
			solar: [1404, 9, 21]
		},
		stime: 1768122983917,
		gdate: [2026, 1, 11],
		gdata: {
			gregorian: [2026, 0, 11]
		},
		gtime: 1768122983917
	},
	{
		sdate: [1404, 10, 22],
		sdata: {
			solar: [1404, 9, 22]
		},
		stime: 1768209383917,
		gdate: [2026, 1, 12],
		gdata: {
			gregorian: [2026, 0, 12]
		},
		gtime: 1768209383917
	},
	{
		sdate: [1404, 10, 23],
		sdata: {
			solar: [1404, 9, 23]
		},
		stime: 1768295783917,
		gdate: [2026, 1, 13],
		gdata: {
			gregorian: [2026, 0, 13]
		},
		gtime: 1768295783917
	},
	{
		sdate: [1404, 10, 24],
		sdata: {
			solar: [1404, 9, 24]
		},
		stime: 1768382183917,
		gdate: [2026, 1, 14],
		gdata: {
			gregorian: [2026, 0, 14]
		},
		gtime: 1768382183917
	},
	{
		sdate: [1404, 10, 25],
		sdata: {
			solar: [1404, 9, 25]
		},
		stime: 1768468583917,
		gdate: [2026, 1, 15],
		gdata: {
			gregorian: [2026, 0, 15]
		},
		gtime: 1768468583917
	},
	{
		sdate: [1404, 10, 26],
		sdata: {
			solar: [1404, 9, 26]
		},
		stime: 1768554983917,
		gdate: [2026, 1, 16],
		gdata: {
			gregorian: [2026, 0, 16]
		},
		gtime: 1768554983917
	},
	{
		sdate: [1404, 10, 27],
		sdata: {
			solar: [1404, 9, 27]
		},
		stime: 1768641383917,
		gdate: [2026, 1, 17],
		gdata: {
			gregorian: [2026, 0, 17]
		},
		gtime: 1768641383917
	},
	{
		sdate: [1404, 10, 28],
		sdata: {
			solar: [1404, 9, 28]
		},
		stime: 1768727783917,
		gdate: [2026, 1, 18],
		gdata: {
			gregorian: [2026, 0, 18]
		},
		gtime: 1768727783917
	},
	{
		sdate: [1404, 10, 29],
		sdata: {
			solar: [1404, 9, 29]
		},
		stime: 1768814183917,
		gdate: [2026, 1, 19],
		gdata: {
			gregorian: [2026, 0, 19]
		},
		gtime: 1768814183917
	},
	{
		sdate: [1404, 10, 30],
		sdata: {
			solar: [1404, 9, 30]
		},
		stime: 1768900583917,
		gdate: [2026, 1, 20],
		gdata: {
			gregorian: [2026, 0, 20]
		},
		gtime: 1768900583917
	},
	{
		sdate: [1404, 11, 1],
		sdata: {
			solar: [1404, 10, 1]
		},
		stime: 1768986983917,
		gdate: [2026, 1, 21],
		gdata: {
			gregorian: [2026, 0, 21]
		},
		gtime: 1768986983917
	},
	{
		sdate: [1404, 11, 2],
		sdata: {
			solar: [1404, 10, 2]
		},
		stime: 1769073383917,
		gdate: [2026, 1, 22],
		gdata: {
			gregorian: [2026, 0, 22]
		},
		gtime: 1769073383917
	},
	{
		sdate: [1404, 11, 3],
		sdata: {
			solar: [1404, 10, 3]
		},
		stime: 1769159783917,
		gdate: [2026, 1, 23],
		gdata: {
			gregorian: [2026, 0, 23]
		},
		gtime: 1769159783917
	},
	{
		sdate: [1404, 11, 4],
		sdata: {
			solar: [1404, 10, 4]
		},
		stime: 1769246183917,
		gdate: [2026, 1, 24],
		gdata: {
			gregorian: [2026, 0, 24]
		},
		gtime: 1769246183917
	},
	{
		sdate: [1404, 11, 5],
		sdata: {
			solar: [1404, 10, 5]
		},
		stime: 1769332583917,
		gdate: [2026, 1, 25],
		gdata: {
			gregorian: [2026, 0, 25]
		},
		gtime: 1769332583917
	},
	{
		sdate: [1404, 11, 6],
		sdata: {
			solar: [1404, 10, 6]
		},
		stime: 1769418983917,
		gdate: [2026, 1, 26],
		gdata: {
			gregorian: [2026, 0, 26]
		},
		gtime: 1769418983917
	},
	{
		sdate: [1404, 11, 7],
		sdata: {
			solar: [1404, 10, 7]
		},
		stime: 1769505383917,
		gdate: [2026, 1, 27],
		gdata: {
			gregorian: [2026, 0, 27]
		},
		gtime: 1769505383917
	},
	{
		sdate: [1404, 11, 8],
		sdata: {
			solar: [1404, 10, 8]
		},
		stime: 1769591783917,
		gdate: [2026, 1, 28],
		gdata: {
			gregorian: [2026, 0, 28]
		},
		gtime: 1769591783917
	},
	{
		sdate: [1404, 11, 9],
		sdata: {
			solar: [1404, 10, 9]
		},
		stime: 1769678183917,
		gdate: [2026, 1, 29],
		gdata: {
			gregorian: [2026, 0, 29]
		},
		gtime: 1769678183917
	},
	{
		sdate: [1404, 11, 10],
		sdata: {
			solar: [1404, 10, 10]
		},
		stime: 1769764583917,
		gdate: [2026, 1, 30],
		gdata: {
			gregorian: [2026, 0, 30]
		},
		gtime: 1769764583917
	},
	{
		sdate: [1404, 11, 11],
		sdata: {
			solar: [1404, 10, 11]
		},
		stime: 1769850983917,
		gdate: [2026, 1, 31],
		gdata: {
			gregorian: [2026, 0, 31]
		},
		gtime: 1769850983917
	},
	{
		sdate: [1404, 11, 12],
		sdata: {
			solar: [1404, 10, 12]
		},
		stime: 1769937383917,
		gdate: [2026, 2, 1],
		gdata: {
			gregorian: [2026, 1, 1]
		},
		gtime: 1769937383917
	},
	{
		sdate: [1404, 11, 13],
		sdata: {
			solar: [1404, 10, 13]
		},
		stime: 1770023783917,
		gdate: [2026, 2, 2],
		gdata: {
			gregorian: [2026, 1, 2]
		},
		gtime: 1770023783917
	},
	{
		sdate: [1404, 11, 14],
		sdata: {
			solar: [1404, 10, 14]
		},
		stime: 1770110183917,
		gdate: [2026, 2, 3],
		gdata: {
			gregorian: [2026, 1, 3]
		},
		gtime: 1770110183917
	},
	{
		sdate: [1404, 11, 15],
		sdata: {
			solar: [1404, 10, 15]
		},
		stime: 1770196583917,
		gdate: [2026, 2, 4],
		gdata: {
			gregorian: [2026, 1, 4]
		},
		gtime: 1770196583917
	},
	{
		sdate: [1404, 11, 16],
		sdata: {
			solar: [1404, 10, 16]
		},
		stime: 1770282983917,
		gdate: [2026, 2, 5],
		gdata: {
			gregorian: [2026, 1, 5]
		},
		gtime: 1770282983917
	},
	{
		sdate: [1404, 11, 17],
		sdata: {
			solar: [1404, 10, 17]
		},
		stime: 1770369383917,
		gdate: [2026, 2, 6],
		gdata: {
			gregorian: [2026, 1, 6]
		},
		gtime: 1770369383917
	},
	{
		sdate: [1404, 11, 18],
		sdata: {
			solar: [1404, 10, 18]
		},
		stime: 1770455783917,
		gdate: [2026, 2, 7],
		gdata: {
			gregorian: [2026, 1, 7]
		},
		gtime: 1770455783917
	},
	{
		sdate: [1404, 11, 19],
		sdata: {
			solar: [1404, 10, 19]
		},
		stime: 1770542183917,
		gdate: [2026, 2, 8],
		gdata: {
			gregorian: [2026, 1, 8]
		},
		gtime: 1770542183917
	},
	{
		sdate: [1404, 11, 20],
		sdata: {
			solar: [1404, 10, 20]
		},
		stime: 1770628583917,
		gdate: [2026, 2, 9],
		gdata: {
			gregorian: [2026, 1, 9]
		},
		gtime: 1770628583917
	},
	{
		sdate: [1404, 11, 21],
		sdata: {
			solar: [1404, 10, 21]
		},
		stime: 1770714983917,
		gdate: [2026, 2, 10],
		gdata: {
			gregorian: [2026, 1, 10]
		},
		gtime: 1770714983917
	},
	{
		sdate: [1404, 11, 22],
		sdata: {
			solar: [1404, 10, 22]
		},
		stime: 1770801383917,
		gdate: [2026, 2, 11],
		gdata: {
			gregorian: [2026, 1, 11]
		},
		gtime: 1770801383917
	},
	{
		sdate: [1404, 11, 23],
		sdata: {
			solar: [1404, 10, 23]
		},
		stime: 1770887783917,
		gdate: [2026, 2, 12],
		gdata: {
			gregorian: [2026, 1, 12]
		},
		gtime: 1770887783917
	},
	{
		sdate: [1404, 11, 24],
		sdata: {
			solar: [1404, 10, 24]
		},
		stime: 1770974183917,
		gdate: [2026, 2, 13],
		gdata: {
			gregorian: [2026, 1, 13]
		},
		gtime: 1770974183917
	},
	{
		sdate: [1404, 11, 25],
		sdata: {
			solar: [1404, 10, 25]
		},
		stime: 1771060583917,
		gdate: [2026, 2, 14],
		gdata: {
			gregorian: [2026, 1, 14]
		},
		gtime: 1771060583917
	},
	{
		sdate: [1404, 11, 26],
		sdata: {
			solar: [1404, 10, 26]
		},
		stime: 1771146983917,
		gdate: [2026, 2, 15],
		gdata: {
			gregorian: [2026, 1, 15]
		},
		gtime: 1771146983917
	},
	{
		sdate: [1404, 11, 27],
		sdata: {
			solar: [1404, 10, 27]
		},
		stime: 1771233383917,
		gdate: [2026, 2, 16],
		gdata: {
			gregorian: [2026, 1, 16]
		},
		gtime: 1771233383917
	},
	{
		sdate: [1404, 11, 28],
		sdata: {
			solar: [1404, 10, 28]
		},
		stime: 1771319783917,
		gdate: [2026, 2, 17],
		gdata: {
			gregorian: [2026, 1, 17]
		},
		gtime: 1771319783917
	},
	{
		sdate: [1404, 11, 29],
		sdata: {
			solar: [1404, 10, 29]
		},
		stime: 1771406183917,
		gdate: [2026, 2, 18],
		gdata: {
			gregorian: [2026, 1, 18]
		},
		gtime: 1771406183917
	},
	{
		sdate: [1404, 11, 30],
		sdata: {
			solar: [1404, 10, 30]
		},
		stime: 1771492583917,
		gdate: [2026, 2, 19],
		gdata: {
			gregorian: [2026, 1, 19]
		},
		gtime: 1771492583917
	},
	{
		sdate: [1404, 12, 1],
		sdata: {
			solar: [1404, 11, 1]
		},
		stime: 1771578983917,
		gdate: [2026, 2, 20],
		gdata: {
			gregorian: [2026, 1, 20]
		},
		gtime: 1771578983917
	},
	{
		sdate: [1404, 12, 2],
		sdata: {
			solar: [1404, 11, 2]
		},
		stime: 1771665383917,
		gdate: [2026, 2, 21],
		gdata: {
			gregorian: [2026, 1, 21]
		},
		gtime: 1771665383917
	},
	{
		sdate: [1404, 12, 3],
		sdata: {
			solar: [1404, 11, 3]
		},
		stime: 1771751783917,
		gdate: [2026, 2, 22],
		gdata: {
			gregorian: [2026, 1, 22]
		},
		gtime: 1771751783917
	},
	{
		sdate: [1404, 12, 4],
		sdata: {
			solar: [1404, 11, 4]
		},
		stime: 1771838183917,
		gdate: [2026, 2, 23],
		gdata: {
			gregorian: [2026, 1, 23]
		},
		gtime: 1771838183917
	},
	{
		sdate: [1404, 12, 5],
		sdata: {
			solar: [1404, 11, 5]
		},
		stime: 1771924583917,
		gdate: [2026, 2, 24],
		gdata: {
			gregorian: [2026, 1, 24]
		},
		gtime: 1771924583917
	},
	{
		sdate: [1404, 12, 6],
		sdata: {
			solar: [1404, 11, 6]
		},
		stime: 1772010983917,
		gdate: [2026, 2, 25],
		gdata: {
			gregorian: [2026, 1, 25]
		},
		gtime: 1772010983917
	},
	{
		sdate: [1404, 12, 7],
		sdata: {
			solar: [1404, 11, 7]
		},
		stime: 1772097383917,
		gdate: [2026, 2, 26],
		gdata: {
			gregorian: [2026, 1, 26]
		},
		gtime: 1772097383917
	},
	{
		sdate: [1404, 12, 8],
		sdata: {
			solar: [1404, 11, 8]
		},
		stime: 1772183783917,
		gdate: [2026, 2, 27],
		gdata: {
			gregorian: [2026, 1, 27]
		},
		gtime: 1772183783917
	},
	{
		sdate: [1404, 12, 9],
		sdata: {
			solar: [1404, 11, 9]
		},
		stime: 1772270183917,
		gdate: [2026, 2, 28],
		gdata: {
			gregorian: [2026, 1, 28]
		},
		gtime: 1772270183917
	},
	{
		sdate: [1404, 12, 10],
		sdata: {
			solar: [1404, 11, 10]
		},
		stime: 1772356583917,
		gdate: [2026, 3, 1],
		gdata: {
			gregorian: [2026, 2, 1]
		},
		gtime: 1772356583917
	},
	{
		sdate: [1404, 12, 11],
		sdata: {
			solar: [1404, 11, 11]
		},
		stime: 1772442983917,
		gdate: [2026, 3, 2],
		gdata: {
			gregorian: [2026, 2, 2]
		},
		gtime: 1772442983917
	},
	{
		sdate: [1404, 12, 12],
		sdata: {
			solar: [1404, 11, 12]
		},
		stime: 1772529383917,
		gdate: [2026, 3, 3],
		gdata: {
			gregorian: [2026, 2, 3]
		},
		gtime: 1772529383917
	},
	{
		sdate: [1404, 12, 13],
		sdata: {
			solar: [1404, 11, 13]
		},
		stime: 1772615783917,
		gdate: [2026, 3, 4],
		gdata: {
			gregorian: [2026, 2, 4]
		},
		gtime: 1772615783917
	},
	{
		sdate: [1404, 12, 14],
		sdata: {
			solar: [1404, 11, 14]
		},
		stime: 1772702183917,
		gdate: [2026, 3, 5],
		gdata: {
			gregorian: [2026, 2, 5]
		},
		gtime: 1772702183917
	},
	{
		sdate: [1404, 12, 15],
		sdata: {
			solar: [1404, 11, 15]
		},
		stime: 1772788583917,
		gdate: [2026, 3, 6],
		gdata: {
			gregorian: [2026, 2, 6]
		},
		gtime: 1772788583917
	},
	{
		sdate: [1404, 12, 16],
		sdata: {
			solar: [1404, 11, 16]
		},
		stime: 1772874983917,
		gdate: [2026, 3, 7],
		gdata: {
			gregorian: [2026, 2, 7]
		},
		gtime: 1772874983917
	},
	{
		sdate: [1404, 12, 17],
		sdata: {
			solar: [1404, 11, 17]
		},
		stime: 1772961383917,
		gdate: [2026, 3, 8],
		gdata: {
			gregorian: [2026, 2, 8]
		},
		gtime: 1772961383917
	},
	{
		sdate: [1404, 12, 18],
		sdata: {
			solar: [1404, 11, 18]
		},
		stime: 1773047783917,
		gdate: [2026, 3, 9],
		gdata: {
			gregorian: [2026, 2, 9]
		},
		gtime: 1773047783917
	},
	{
		sdate: [1404, 12, 19],
		sdata: {
			solar: [1404, 11, 19]
		},
		stime: 1773134183917,
		gdate: [2026, 3, 10],
		gdata: {
			gregorian: [2026, 2, 10]
		},
		gtime: 1773134183917
	},
	{
		sdate: [1404, 12, 20],
		sdata: {
			solar: [1404, 11, 20]
		},
		stime: 1773220583917,
		gdate: [2026, 3, 11],
		gdata: {
			gregorian: [2026, 2, 11]
		},
		gtime: 1773220583917
	},
	{
		sdate: [1404, 12, 21],
		sdata: {
			solar: [1404, 11, 21]
		},
		stime: 1773306983917,
		gdate: [2026, 3, 12],
		gdata: {
			gregorian: [2026, 2, 12]
		},
		gtime: 1773306983917
	},
	{
		sdate: [1404, 12, 22],
		sdata: {
			solar: [1404, 11, 22]
		},
		stime: 1773393383917,
		gdate: [2026, 3, 13],
		gdata: {
			gregorian: [2026, 2, 13]
		},
		gtime: 1773393383917
	},
	{
		sdate: [1404, 12, 23],
		sdata: {
			solar: [1404, 11, 23]
		},
		stime: 1773479783917,
		gdate: [2026, 3, 14],
		gdata: {
			gregorian: [2026, 2, 14]
		},
		gtime: 1773479783917
	},
	{
		sdate: [1404, 12, 24],
		sdata: {
			solar: [1404, 11, 24]
		},
		stime: 1773566183917,
		gdate: [2026, 3, 15],
		gdata: {
			gregorian: [2026, 2, 15]
		},
		gtime: 1773566183917
	},
	{
		sdate: [1404, 12, 25],
		sdata: {
			solar: [1404, 11, 25]
		},
		stime: 1773652583917,
		gdate: [2026, 3, 16],
		gdata: {
			gregorian: [2026, 2, 16]
		},
		gtime: 1773652583917
	},
	{
		sdate: [1404, 12, 26],
		sdata: {
			solar: [1404, 11, 26]
		},
		stime: 1773738983917,
		gdate: [2026, 3, 17],
		gdata: {
			gregorian: [2026, 2, 17]
		},
		gtime: 1773738983917
	},
	{
		sdate: [1404, 12, 27],
		sdata: {
			solar: [1404, 11, 27]
		},
		stime: 1773825383917,
		gdate: [2026, 3, 18],
		gdata: {
			gregorian: [2026, 2, 18]
		},
		gtime: 1773825383917
	},
	{
		sdate: [1404, 12, 28],
		sdata: {
			solar: [1404, 11, 28]
		},
		stime: 1773911783917,
		gdate: [2026, 3, 19],
		gdata: {
			gregorian: [2026, 2, 19]
		},
		gtime: 1773911783917
	},
	{
		sdate: [1404, 12, 29],
		sdata: {
			solar: [1404, 11, 29]
		},
		stime: 1773998183917,
		gdate: [2026, 3, 20],
		gdata: {
			gregorian: [2026, 2, 20]
		},
		gtime: 1773998183917
	},
	{
		sdate: [1405, 1, 1],
		sdata: {
			solar: [1405, 0, 1]
		},
		stime: 1774084583917,
		gdate: [2026, 3, 21],
		gdata: {
			gregorian: [2026, 2, 21]
		},
		gtime: 1774084583917
	},
	{
		sdate: [1405, 1, 2],
		sdata: {
			solar: [1405, 0, 2]
		},
		stime: 1774170983917,
		gdate: [2026, 3, 22],
		gdata: {
			gregorian: [2026, 2, 22]
		},
		gtime: 1774170983917
	},
	{
		sdate: [1405, 1, 3],
		sdata: {
			solar: [1405, 0, 3]
		},
		stime: 1774257383917,
		gdate: [2026, 3, 23],
		gdata: {
			gregorian: [2026, 2, 23]
		},
		gtime: 1774257383917
	},
	{
		sdate: [1405, 1, 4],
		sdata: {
			solar: [1405, 0, 4]
		},
		stime: 1774343783917,
		gdate: [2026, 3, 24],
		gdata: {
			gregorian: [2026, 2, 24]
		},
		gtime: 1774343783917
	},
	{
		sdate: [1405, 1, 5],
		sdata: {
			solar: [1405, 0, 5]
		},
		stime: 1774430183917,
		gdate: [2026, 3, 25],
		gdata: {
			gregorian: [2026, 2, 25]
		},
		gtime: 1774430183917
	},
	{
		sdate: [1405, 1, 6],
		sdata: {
			solar: [1405, 0, 6]
		},
		stime: 1774516583917,
		gdate: [2026, 3, 26],
		gdata: {
			gregorian: [2026, 2, 26]
		},
		gtime: 1774516583917
	},
	{
		sdate: [1405, 1, 7],
		sdata: {
			solar: [1405, 0, 7]
		},
		stime: 1774602983917,
		gdate: [2026, 3, 27],
		gdata: {
			gregorian: [2026, 2, 27]
		},
		gtime: 1774602983917
	},
	{
		sdate: [1405, 1, 8],
		sdata: {
			solar: [1405, 0, 8]
		},
		stime: 1774689383917,
		gdate: [2026, 3, 28],
		gdata: {
			gregorian: [2026, 2, 28]
		},
		gtime: 1774689383917
	},
	{
		sdate: [1405, 1, 9],
		sdata: {
			solar: [1405, 0, 9]
		},
		stime: 1774775783917,
		gdate: [2026, 3, 29],
		gdata: {
			gregorian: [2026, 2, 29]
		},
		gtime: 1774775783917
	},
	{
		sdate: [1405, 1, 10],
		sdata: {
			solar: [1405, 0, 10]
		},
		stime: 1774862183917,
		gdate: [2026, 3, 30],
		gdata: {
			gregorian: [2026, 2, 30]
		},
		gtime: 1774862183917
	},
	{
		sdate: [1405, 1, 11],
		sdata: {
			solar: [1405, 0, 11]
		},
		stime: 1774948583917,
		gdate: [2026, 3, 31],
		gdata: {
			gregorian: [2026, 2, 31]
		},
		gtime: 1774948583917
	},
	{
		sdate: [1405, 1, 12],
		sdata: {
			solar: [1405, 0, 12]
		},
		stime: 1775034983917,
		gdate: [2026, 4, 1],
		gdata: {
			gregorian: [2026, 3, 1]
		},
		gtime: 1775034983917
	},
	{
		sdate: [1405, 1, 13],
		sdata: {
			solar: [1405, 0, 13]
		},
		stime: 1775121383917,
		gdate: [2026, 4, 2],
		gdata: {
			gregorian: [2026, 3, 2]
		},
		gtime: 1775121383917
	},
	{
		sdate: [1405, 1, 14],
		sdata: {
			solar: [1405, 0, 14]
		},
		stime: 1775207783917,
		gdate: [2026, 4, 3],
		gdata: {
			gregorian: [2026, 3, 3]
		},
		gtime: 1775207783917
	},
	{
		sdate: [1405, 1, 15],
		sdata: {
			solar: [1405, 0, 15]
		},
		stime: 1775294183917,
		gdate: [2026, 4, 4],
		gdata: {
			gregorian: [2026, 3, 4]
		},
		gtime: 1775294183917
	},
	{
		sdate: [1405, 1, 16],
		sdata: {
			solar: [1405, 0, 16]
		},
		stime: 1775380583917,
		gdate: [2026, 4, 5],
		gdata: {
			gregorian: [2026, 3, 5]
		},
		gtime: 1775380583917
	},
	{
		sdate: [1405, 1, 17],
		sdata: {
			solar: [1405, 0, 17]
		},
		stime: 1775466983917,
		gdate: [2026, 4, 6],
		gdata: {
			gregorian: [2026, 3, 6]
		},
		gtime: 1775466983917
	},
	{
		sdate: [1405, 1, 18],
		sdata: {
			solar: [1405, 0, 18]
		},
		stime: 1775553383917,
		gdate: [2026, 4, 7],
		gdata: {
			gregorian: [2026, 3, 7]
		},
		gtime: 1775553383917
	},
	{
		sdate: [1405, 1, 19],
		sdata: {
			solar: [1405, 0, 19]
		},
		stime: 1775639783917,
		gdate: [2026, 4, 8],
		gdata: {
			gregorian: [2026, 3, 8]
		},
		gtime: 1775639783917
	},
	{
		sdate: [1405, 1, 20],
		sdata: {
			solar: [1405, 0, 20]
		},
		stime: 1775726183917,
		gdate: [2026, 4, 9],
		gdata: {
			gregorian: [2026, 3, 9]
		},
		gtime: 1775726183917
	},
	{
		sdate: [1405, 1, 21],
		sdata: {
			solar: [1405, 0, 21]
		},
		stime: 1775812583917,
		gdate: [2026, 4, 10],
		gdata: {
			gregorian: [2026, 3, 10]
		},
		gtime: 1775812583917
	},
	{
		sdate: [1405, 1, 22],
		sdata: {
			solar: [1405, 0, 22]
		},
		stime: 1775898983917,
		gdate: [2026, 4, 11],
		gdata: {
			gregorian: [2026, 3, 11]
		},
		gtime: 1775898983917
	},
	{
		sdate: [1405, 1, 23],
		sdata: {
			solar: [1405, 0, 23]
		},
		stime: 1775985383917,
		gdate: [2026, 4, 12],
		gdata: {
			gregorian: [2026, 3, 12]
		},
		gtime: 1775985383917
	},
	{
		sdate: [1405, 1, 24],
		sdata: {
			solar: [1405, 0, 24]
		},
		stime: 1776071783917,
		gdate: [2026, 4, 13],
		gdata: {
			gregorian: [2026, 3, 13]
		},
		gtime: 1776071783917
	},
	{
		sdate: [1405, 1, 25],
		sdata: {
			solar: [1405, 0, 25]
		},
		stime: 1776158183917,
		gdate: [2026, 4, 14],
		gdata: {
			gregorian: [2026, 3, 14]
		},
		gtime: 1776158183917
	},
	{
		sdate: [1405, 1, 26],
		sdata: {
			solar: [1405, 0, 26]
		},
		stime: 1776244583917,
		gdate: [2026, 4, 15],
		gdata: {
			gregorian: [2026, 3, 15]
		},
		gtime: 1776244583917
	},
	{
		sdate: [1405, 1, 27],
		sdata: {
			solar: [1405, 0, 27]
		},
		stime: 1776330983917,
		gdate: [2026, 4, 16],
		gdata: {
			gregorian: [2026, 3, 16]
		},
		gtime: 1776330983917
	},
	{
		sdate: [1405, 1, 28],
		sdata: {
			solar: [1405, 0, 28]
		},
		stime: 1776417383917,
		gdate: [2026, 4, 17],
		gdata: {
			gregorian: [2026, 3, 17]
		},
		gtime: 1776417383917
	},
	{
		sdate: [1405, 1, 29],
		sdata: {
			solar: [1405, 0, 29]
		},
		stime: 1776503783917,
		gdate: [2026, 4, 18],
		gdata: {
			gregorian: [2026, 3, 18]
		},
		gtime: 1776503783917
	},
	{
		sdate: [1405, 1, 30],
		sdata: {
			solar: [1405, 0, 30]
		},
		stime: 1776590183917,
		gdate: [2026, 4, 19],
		gdata: {
			gregorian: [2026, 3, 19]
		},
		gtime: 1776590183917
	},
	{
		sdate: [1405, 1, 31],
		sdata: {
			solar: [1405, 0, 31]
		},
		stime: 1776676583917,
		gdate: [2026, 4, 20],
		gdata: {
			gregorian: [2026, 3, 20]
		},
		gtime: 1776676583917
	},
	{
		sdate: [1405, 2, 1],
		sdata: {
			solar: [1405, 1, 1]
		},
		stime: 1776762983917,
		gdate: [2026, 4, 21],
		gdata: {
			gregorian: [2026, 3, 21]
		},
		gtime: 1776762983917
	},
	{
		sdate: [1405, 2, 2],
		sdata: {
			solar: [1405, 1, 2]
		},
		stime: 1776849383917,
		gdate: [2026, 4, 22],
		gdata: {
			gregorian: [2026, 3, 22]
		},
		gtime: 1776849383917
	},
	{
		sdate: [1405, 2, 3],
		sdata: {
			solar: [1405, 1, 3]
		},
		stime: 1776935783917,
		gdate: [2026, 4, 23],
		gdata: {
			gregorian: [2026, 3, 23]
		},
		gtime: 1776935783917
	},
	{
		sdate: [1405, 2, 4],
		sdata: {
			solar: [1405, 1, 4]
		},
		stime: 1777022183917,
		gdate: [2026, 4, 24],
		gdata: {
			gregorian: [2026, 3, 24]
		},
		gtime: 1777022183917
	},
	{
		sdate: [1405, 2, 5],
		sdata: {
			solar: [1405, 1, 5]
		},
		stime: 1777108583917,
		gdate: [2026, 4, 25],
		gdata: {
			gregorian: [2026, 3, 25]
		},
		gtime: 1777108583917
	},
	{
		sdate: [1405, 2, 6],
		sdata: {
			solar: [1405, 1, 6]
		},
		stime: 1777194983917,
		gdate: [2026, 4, 26],
		gdata: {
			gregorian: [2026, 3, 26]
		},
		gtime: 1777194983917
	},
	{
		sdate: [1405, 2, 7],
		sdata: {
			solar: [1405, 1, 7]
		},
		stime: 1777281383917,
		gdate: [2026, 4, 27],
		gdata: {
			gregorian: [2026, 3, 27]
		},
		gtime: 1777281383917
	},
	{
		sdate: [1405, 2, 8],
		sdata: {
			solar: [1405, 1, 8]
		},
		stime: 1777367783917,
		gdate: [2026, 4, 28],
		gdata: {
			gregorian: [2026, 3, 28]
		},
		gtime: 1777367783917
	},
	{
		sdate: [1405, 2, 9],
		sdata: {
			solar: [1405, 1, 9]
		},
		stime: 1777454183917,
		gdate: [2026, 4, 29],
		gdata: {
			gregorian: [2026, 3, 29]
		},
		gtime: 1777454183917
	},
	{
		sdate: [1405, 2, 10],
		sdata: {
			solar: [1405, 1, 10]
		},
		stime: 1777540583917,
		gdate: [2026, 4, 30],
		gdata: {
			gregorian: [2026, 3, 30]
		},
		gtime: 1777540583917
	},
	{
		sdate: [1405, 2, 11],
		sdata: {
			solar: [1405, 1, 11]
		},
		stime: 1777626983917,
		gdate: [2026, 5, 1],
		gdata: {
			gregorian: [2026, 4, 1]
		},
		gtime: 1777626983917
	},
	{
		sdate: [1405, 2, 12],
		sdata: {
			solar: [1405, 1, 12]
		},
		stime: 1777713383917,
		gdate: [2026, 5, 2],
		gdata: {
			gregorian: [2026, 4, 2]
		},
		gtime: 1777713383917
	},
	{
		sdate: [1405, 2, 13],
		sdata: {
			solar: [1405, 1, 13]
		},
		stime: 1777799783917,
		gdate: [2026, 5, 3],
		gdata: {
			gregorian: [2026, 4, 3]
		},
		gtime: 1777799783917
	},
	{
		sdate: [1405, 2, 14],
		sdata: {
			solar: [1405, 1, 14]
		},
		stime: 1777886183917,
		gdate: [2026, 5, 4],
		gdata: {
			gregorian: [2026, 4, 4]
		},
		gtime: 1777886183917
	},
	{
		sdate: [1405, 2, 15],
		sdata: {
			solar: [1405, 1, 15]
		},
		stime: 1777972583917,
		gdate: [2026, 5, 5],
		gdata: {
			gregorian: [2026, 4, 5]
		},
		gtime: 1777972583917
	},
	{
		sdate: [1405, 2, 16],
		sdata: {
			solar: [1405, 1, 16]
		},
		stime: 1778058983917,
		gdate: [2026, 5, 6],
		gdata: {
			gregorian: [2026, 4, 6]
		},
		gtime: 1778058983917
	},
	{
		sdate: [1405, 2, 17],
		sdata: {
			solar: [1405, 1, 17]
		},
		stime: 1778145383917,
		gdate: [2026, 5, 7],
		gdata: {
			gregorian: [2026, 4, 7]
		},
		gtime: 1778145383917
	},
	{
		sdate: [1405, 2, 18],
		sdata: {
			solar: [1405, 1, 18]
		},
		stime: 1778231783917,
		gdate: [2026, 5, 8],
		gdata: {
			gregorian: [2026, 4, 8]
		},
		gtime: 1778231783917
	},
	{
		sdate: [1405, 2, 19],
		sdata: {
			solar: [1405, 1, 19]
		},
		stime: 1778318183917,
		gdate: [2026, 5, 9],
		gdata: {
			gregorian: [2026, 4, 9]
		},
		gtime: 1778318183917
	},
	{
		sdate: [1405, 2, 20],
		sdata: {
			solar: [1405, 1, 20]
		},
		stime: 1778404583917,
		gdate: [2026, 5, 10],
		gdata: {
			gregorian: [2026, 4, 10]
		},
		gtime: 1778404583917
	},
	{
		sdate: [1405, 2, 21],
		sdata: {
			solar: [1405, 1, 21]
		},
		stime: 1778490983917,
		gdate: [2026, 5, 11],
		gdata: {
			gregorian: [2026, 4, 11]
		},
		gtime: 1778490983917
	},
	{
		sdate: [1405, 2, 22],
		sdata: {
			solar: [1405, 1, 22]
		},
		stime: 1778577383917,
		gdate: [2026, 5, 12],
		gdata: {
			gregorian: [2026, 4, 12]
		},
		gtime: 1778577383917
	},
	{
		sdate: [1405, 2, 23],
		sdata: {
			solar: [1405, 1, 23]
		},
		stime: 1778663783917,
		gdate: [2026, 5, 13],
		gdata: {
			gregorian: [2026, 4, 13]
		},
		gtime: 1778663783917
	},
	{
		sdate: [1405, 2, 24],
		sdata: {
			solar: [1405, 1, 24]
		},
		stime: 1778750183917,
		gdate: [2026, 5, 14],
		gdata: {
			gregorian: [2026, 4, 14]
		},
		gtime: 1778750183917
	},
	{
		sdate: [1405, 2, 25],
		sdata: {
			solar: [1405, 1, 25]
		},
		stime: 1778836583917,
		gdate: [2026, 5, 15],
		gdata: {
			gregorian: [2026, 4, 15]
		},
		gtime: 1778836583917
	},
	{
		sdate: [1405, 2, 26],
		sdata: {
			solar: [1405, 1, 26]
		},
		stime: 1778922983917,
		gdate: [2026, 5, 16],
		gdata: {
			gregorian: [2026, 4, 16]
		},
		gtime: 1778922983917
	},
	{
		sdate: [1405, 2, 27],
		sdata: {
			solar: [1405, 1, 27]
		},
		stime: 1779009383917,
		gdate: [2026, 5, 17],
		gdata: {
			gregorian: [2026, 4, 17]
		},
		gtime: 1779009383917
	},
	{
		sdate: [1405, 2, 28],
		sdata: {
			solar: [1405, 1, 28]
		},
		stime: 1779095783917,
		gdate: [2026, 5, 18],
		gdata: {
			gregorian: [2026, 4, 18]
		},
		gtime: 1779095783917
	},
	{
		sdate: [1405, 2, 29],
		sdata: {
			solar: [1405, 1, 29]
		},
		stime: 1779182183917,
		gdate: [2026, 5, 19],
		gdata: {
			gregorian: [2026, 4, 19]
		},
		gtime: 1779182183917
	},
	{
		sdate: [1405, 2, 30],
		sdata: {
			solar: [1405, 1, 30]
		},
		stime: 1779268583917,
		gdate: [2026, 5, 20],
		gdata: {
			gregorian: [2026, 4, 20]
		},
		gtime: 1779268583917
	},
	{
		sdate: [1405, 2, 31],
		sdata: {
			solar: [1405, 1, 31]
		},
		stime: 1779354983917,
		gdate: [2026, 5, 21],
		gdata: {
			gregorian: [2026, 4, 21]
		},
		gtime: 1779354983917
	},
	{
		sdate: [1405, 3, 1],
		sdata: {
			solar: [1405, 2, 1]
		},
		stime: 1779441383917,
		gdate: [2026, 5, 22],
		gdata: {
			gregorian: [2026, 4, 22]
		},
		gtime: 1779441383917
	},
	{
		sdate: [1405, 3, 2],
		sdata: {
			solar: [1405, 2, 2]
		},
		stime: 1779527783917,
		gdate: [2026, 5, 23],
		gdata: {
			gregorian: [2026, 4, 23]
		},
		gtime: 1779527783917
	},
	{
		sdate: [1405, 3, 3],
		sdata: {
			solar: [1405, 2, 3]
		},
		stime: 1779614183917,
		gdate: [2026, 5, 24],
		gdata: {
			gregorian: [2026, 4, 24]
		},
		gtime: 1779614183917
	},
	{
		sdate: [1405, 3, 4],
		sdata: {
			solar: [1405, 2, 4]
		},
		stime: 1779700583917,
		gdate: [2026, 5, 25],
		gdata: {
			gregorian: [2026, 4, 25]
		},
		gtime: 1779700583917
	},
	{
		sdate: [1405, 3, 5],
		sdata: {
			solar: [1405, 2, 5]
		},
		stime: 1779786983917,
		gdate: [2026, 5, 26],
		gdata: {
			gregorian: [2026, 4, 26]
		},
		gtime: 1779786983917
	},
	{
		sdate: [1405, 3, 6],
		sdata: {
			solar: [1405, 2, 6]
		},
		stime: 1779873383917,
		gdate: [2026, 5, 27],
		gdata: {
			gregorian: [2026, 4, 27]
		},
		gtime: 1779873383917
	},
	{
		sdate: [1405, 3, 7],
		sdata: {
			solar: [1405, 2, 7]
		},
		stime: 1779959783917,
		gdate: [2026, 5, 28],
		gdata: {
			gregorian: [2026, 4, 28]
		},
		gtime: 1779959783917
	},
	{
		sdate: [1405, 3, 8],
		sdata: {
			solar: [1405, 2, 8]
		},
		stime: 1780046183917,
		gdate: [2026, 5, 29],
		gdata: {
			gregorian: [2026, 4, 29]
		},
		gtime: 1780046183917
	},
	{
		sdate: [1405, 3, 9],
		sdata: {
			solar: [1405, 2, 9]
		},
		stime: 1780132583917,
		gdate: [2026, 5, 30],
		gdata: {
			gregorian: [2026, 4, 30]
		},
		gtime: 1780132583917
	},
	{
		sdate: [1405, 3, 10],
		sdata: {
			solar: [1405, 2, 10]
		},
		stime: 1780218983917,
		gdate: [2026, 5, 31],
		gdata: {
			gregorian: [2026, 4, 31]
		},
		gtime: 1780218983917
	},
	{
		sdate: [1405, 3, 11],
		sdata: {
			solar: [1405, 2, 11]
		},
		stime: 1780305383917,
		gdate: [2026, 6, 1],
		gdata: {
			gregorian: [2026, 5, 1]
		},
		gtime: 1780305383917
	},
	{
		sdate: [1405, 3, 12],
		sdata: {
			solar: [1405, 2, 12]
		},
		stime: 1780391783917,
		gdate: [2026, 6, 2],
		gdata: {
			gregorian: [2026, 5, 2]
		},
		gtime: 1780391783917
	},
	{
		sdate: [1405, 3, 13],
		sdata: {
			solar: [1405, 2, 13]
		},
		stime: 1780478183917,
		gdate: [2026, 6, 3],
		gdata: {
			gregorian: [2026, 5, 3]
		},
		gtime: 1780478183917
	},
	{
		sdate: [1405, 3, 14],
		sdata: {
			solar: [1405, 2, 14]
		},
		stime: 1780564583917,
		gdate: [2026, 6, 4],
		gdata: {
			gregorian: [2026, 5, 4]
		},
		gtime: 1780564583917
	},
	{
		sdate: [1405, 3, 15],
		sdata: {
			solar: [1405, 2, 15]
		},
		stime: 1780650983917,
		gdate: [2026, 6, 5],
		gdata: {
			gregorian: [2026, 5, 5]
		},
		gtime: 1780650983917
	},
	{
		sdate: [1405, 3, 16],
		sdata: {
			solar: [1405, 2, 16]
		},
		stime: 1780737383917,
		gdate: [2026, 6, 6],
		gdata: {
			gregorian: [2026, 5, 6]
		},
		gtime: 1780737383917
	},
	{
		sdate: [1405, 3, 17],
		sdata: {
			solar: [1405, 2, 17]
		},
		stime: 1780823783917,
		gdate: [2026, 6, 7],
		gdata: {
			gregorian: [2026, 5, 7]
		},
		gtime: 1780823783917
	},
	{
		sdate: [1405, 3, 18],
		sdata: {
			solar: [1405, 2, 18]
		},
		stime: 1780910183917,
		gdate: [2026, 6, 8],
		gdata: {
			gregorian: [2026, 5, 8]
		},
		gtime: 1780910183917
	},
	{
		sdate: [1405, 3, 19],
		sdata: {
			solar: [1405, 2, 19]
		},
		stime: 1780996583917,
		gdate: [2026, 6, 9],
		gdata: {
			gregorian: [2026, 5, 9]
		},
		gtime: 1780996583917
	},
	{
		sdate: [1405, 3, 20],
		sdata: {
			solar: [1405, 2, 20]
		},
		stime: 1781082983917,
		gdate: [2026, 6, 10],
		gdata: {
			gregorian: [2026, 5, 10]
		},
		gtime: 1781082983917
	},
	{
		sdate: [1405, 3, 21],
		sdata: {
			solar: [1405, 2, 21]
		},
		stime: 1781169383917,
		gdate: [2026, 6, 11],
		gdata: {
			gregorian: [2026, 5, 11]
		},
		gtime: 1781169383917
	},
	{
		sdate: [1405, 3, 22],
		sdata: {
			solar: [1405, 2, 22]
		},
		stime: 1781255783917,
		gdate: [2026, 6, 12],
		gdata: {
			gregorian: [2026, 5, 12]
		},
		gtime: 1781255783917
	},
	{
		sdate: [1405, 3, 23],
		sdata: {
			solar: [1405, 2, 23]
		},
		stime: 1781342183917,
		gdate: [2026, 6, 13],
		gdata: {
			gregorian: [2026, 5, 13]
		},
		gtime: 1781342183917
	},
	{
		sdate: [1405, 3, 24],
		sdata: {
			solar: [1405, 2, 24]
		},
		stime: 1781428583917,
		gdate: [2026, 6, 14],
		gdata: {
			gregorian: [2026, 5, 14]
		},
		gtime: 1781428583917
	},
	{
		sdate: [1405, 3, 25],
		sdata: {
			solar: [1405, 2, 25]
		},
		stime: 1781514983917,
		gdate: [2026, 6, 15],
		gdata: {
			gregorian: [2026, 5, 15]
		},
		gtime: 1781514983917
	},
	{
		sdate: [1405, 3, 26],
		sdata: {
			solar: [1405, 2, 26]
		},
		stime: 1781601383917,
		gdate: [2026, 6, 16],
		gdata: {
			gregorian: [2026, 5, 16]
		},
		gtime: 1781601383917
	},
	{
		sdate: [1405, 3, 27],
		sdata: {
			solar: [1405, 2, 27]
		},
		stime: 1781687783917,
		gdate: [2026, 6, 17],
		gdata: {
			gregorian: [2026, 5, 17]
		},
		gtime: 1781687783917
	},
	{
		sdate: [1405, 3, 28],
		sdata: {
			solar: [1405, 2, 28]
		},
		stime: 1781774183917,
		gdate: [2026, 6, 18],
		gdata: {
			gregorian: [2026, 5, 18]
		},
		gtime: 1781774183917
	},
	{
		sdate: [1405, 3, 29],
		sdata: {
			solar: [1405, 2, 29]
		},
		stime: 1781860583917,
		gdate: [2026, 6, 19],
		gdata: {
			gregorian: [2026, 5, 19]
		},
		gtime: 1781860583917
	},
	{
		sdate: [1405, 3, 30],
		sdata: {
			solar: [1405, 2, 30]
		},
		stime: 1781946983917,
		gdate: [2026, 6, 20],
		gdata: {
			gregorian: [2026, 5, 20]
		},
		gtime: 1781946983917
	},
	{
		sdate: [1405, 3, 31],
		sdata: {
			solar: [1405, 2, 31]
		},
		stime: 1782033383917,
		gdate: [2026, 6, 21],
		gdata: {
			gregorian: [2026, 5, 21]
		},
		gtime: 1782033383917
	},
	{
		sdate: [1405, 4, 1],
		sdata: {
			solar: [1405, 3, 1]
		},
		stime: 1782119783917,
		gdate: [2026, 6, 22],
		gdata: {
			gregorian: [2026, 5, 22]
		},
		gtime: 1782119783917
	},
	{
		sdate: [1405, 4, 2],
		sdata: {
			solar: [1405, 3, 2]
		},
		stime: 1782206183917,
		gdate: [2026, 6, 23],
		gdata: {
			gregorian: [2026, 5, 23]
		},
		gtime: 1782206183917
	},
	{
		sdate: [1405, 4, 3],
		sdata: {
			solar: [1405, 3, 3]
		},
		stime: 1782292583917,
		gdate: [2026, 6, 24],
		gdata: {
			gregorian: [2026, 5, 24]
		},
		gtime: 1782292583917
	},
	{
		sdate: [1405, 4, 4],
		sdata: {
			solar: [1405, 3, 4]
		},
		stime: 1782378983917,
		gdate: [2026, 6, 25],
		gdata: {
			gregorian: [2026, 5, 25]
		},
		gtime: 1782378983917
	},
	{
		sdate: [1405, 4, 5],
		sdata: {
			solar: [1405, 3, 5]
		},
		stime: 1782465383917,
		gdate: [2026, 6, 26],
		gdata: {
			gregorian: [2026, 5, 26]
		},
		gtime: 1782465383917
	},
	{
		sdate: [1405, 4, 6],
		sdata: {
			solar: [1405, 3, 6]
		},
		stime: 1782551783917,
		gdate: [2026, 6, 27],
		gdata: {
			gregorian: [2026, 5, 27]
		},
		gtime: 1782551783917
	},
	{
		sdate: [1405, 4, 7],
		sdata: {
			solar: [1405, 3, 7]
		},
		stime: 1782638183917,
		gdate: [2026, 6, 28],
		gdata: {
			gregorian: [2026, 5, 28]
		},
		gtime: 1782638183917
	},
	{
		sdate: [1405, 4, 8],
		sdata: {
			solar: [1405, 3, 8]
		},
		stime: 1782724583917,
		gdate: [2026, 6, 29],
		gdata: {
			gregorian: [2026, 5, 29]
		},
		gtime: 1782724583917
	},
	{
		sdate: [1405, 4, 9],
		sdata: {
			solar: [1405, 3, 9]
		},
		stime: 1782810983917,
		gdate: [2026, 6, 30],
		gdata: {
			gregorian: [2026, 5, 30]
		},
		gtime: 1782810983917
	},
	{
		sdate: [1405, 4, 10],
		sdata: {
			solar: [1405, 3, 10]
		},
		stime: 1782897383917,
		gdate: [2026, 7, 1],
		gdata: {
			gregorian: [2026, 6, 1]
		},
		gtime: 1782897383917
	},
	{
		sdate: [1405, 4, 11],
		sdata: {
			solar: [1405, 3, 11]
		},
		stime: 1782983783917,
		gdate: [2026, 7, 2],
		gdata: {
			gregorian: [2026, 6, 2]
		},
		gtime: 1782983783917
	},
	{
		sdate: [1405, 4, 12],
		sdata: {
			solar: [1405, 3, 12]
		},
		stime: 1783070183917,
		gdate: [2026, 7, 3],
		gdata: {
			gregorian: [2026, 6, 3]
		},
		gtime: 1783070183917
	},
	{
		sdate: [1405, 4, 13],
		sdata: {
			solar: [1405, 3, 13]
		},
		stime: 1783156583917,
		gdate: [2026, 7, 4],
		gdata: {
			gregorian: [2026, 6, 4]
		},
		gtime: 1783156583917
	},
	{
		sdate: [1405, 4, 14],
		sdata: {
			solar: [1405, 3, 14]
		},
		stime: 1783242983917,
		gdate: [2026, 7, 5],
		gdata: {
			gregorian: [2026, 6, 5]
		},
		gtime: 1783242983917
	},
	{
		sdate: [1405, 4, 15],
		sdata: {
			solar: [1405, 3, 15]
		},
		stime: 1783329383917,
		gdate: [2026, 7, 6],
		gdata: {
			gregorian: [2026, 6, 6]
		},
		gtime: 1783329383917
	},
	{
		sdate: [1405, 4, 16],
		sdata: {
			solar: [1405, 3, 16]
		},
		stime: 1783415783917,
		gdate: [2026, 7, 7],
		gdata: {
			gregorian: [2026, 6, 7]
		},
		gtime: 1783415783917
	},
	{
		sdate: [1405, 4, 17],
		sdata: {
			solar: [1405, 3, 17]
		},
		stime: 1783502183917,
		gdate: [2026, 7, 8],
		gdata: {
			gregorian: [2026, 6, 8]
		},
		gtime: 1783502183917
	},
	{
		sdate: [1405, 4, 18],
		sdata: {
			solar: [1405, 3, 18]
		},
		stime: 1783588583917,
		gdate: [2026, 7, 9],
		gdata: {
			gregorian: [2026, 6, 9]
		},
		gtime: 1783588583917
	},
	{
		sdate: [1405, 4, 19],
		sdata: {
			solar: [1405, 3, 19]
		},
		stime: 1783674983917,
		gdate: [2026, 7, 10],
		gdata: {
			gregorian: [2026, 6, 10]
		},
		gtime: 1783674983917
	},
	{
		sdate: [1405, 4, 20],
		sdata: {
			solar: [1405, 3, 20]
		},
		stime: 1783761383917,
		gdate: [2026, 7, 11],
		gdata: {
			gregorian: [2026, 6, 11]
		},
		gtime: 1783761383917
	},
	{
		sdate: [1405, 4, 21],
		sdata: {
			solar: [1405, 3, 21]
		},
		stime: 1783847783917,
		gdate: [2026, 7, 12],
		gdata: {
			gregorian: [2026, 6, 12]
		},
		gtime: 1783847783917
	},
	{
		sdate: [1405, 4, 22],
		sdata: {
			solar: [1405, 3, 22]
		},
		stime: 1783934183917,
		gdate: [2026, 7, 13],
		gdata: {
			gregorian: [2026, 6, 13]
		},
		gtime: 1783934183917
	},
	{
		sdate: [1405, 4, 23],
		sdata: {
			solar: [1405, 3, 23]
		},
		stime: 1784020583917,
		gdate: [2026, 7, 14],
		gdata: {
			gregorian: [2026, 6, 14]
		},
		gtime: 1784020583917
	},
	{
		sdate: [1405, 4, 24],
		sdata: {
			solar: [1405, 3, 24]
		},
		stime: 1784106983917,
		gdate: [2026, 7, 15],
		gdata: {
			gregorian: [2026, 6, 15]
		},
		gtime: 1784106983917
	},
	{
		sdate: [1405, 4, 25],
		sdata: {
			solar: [1405, 3, 25]
		},
		stime: 1784193383917,
		gdate: [2026, 7, 16],
		gdata: {
			gregorian: [2026, 6, 16]
		},
		gtime: 1784193383917
	},
	{
		sdate: [1405, 4, 26],
		sdata: {
			solar: [1405, 3, 26]
		},
		stime: 1784279783917,
		gdate: [2026, 7, 17],
		gdata: {
			gregorian: [2026, 6, 17]
		},
		gtime: 1784279783917
	},
	{
		sdate: [1405, 4, 27],
		sdata: {
			solar: [1405, 3, 27]
		},
		stime: 1784366183917,
		gdate: [2026, 7, 18],
		gdata: {
			gregorian: [2026, 6, 18]
		},
		gtime: 1784366183917
	},
	{
		sdate: [1405, 4, 28],
		sdata: {
			solar: [1405, 3, 28]
		},
		stime: 1784452583917,
		gdate: [2026, 7, 19],
		gdata: {
			gregorian: [2026, 6, 19]
		},
		gtime: 1784452583917
	},
	{
		sdate: [1405, 4, 29],
		sdata: {
			solar: [1405, 3, 29]
		},
		stime: 1784538983917,
		gdate: [2026, 7, 20],
		gdata: {
			gregorian: [2026, 6, 20]
		},
		gtime: 1784538983917
	},
	{
		sdate: [1405, 4, 30],
		sdata: {
			solar: [1405, 3, 30]
		},
		stime: 1784625383917,
		gdate: [2026, 7, 21],
		gdata: {
			gregorian: [2026, 6, 21]
		},
		gtime: 1784625383917
	},
	{
		sdate: [1405, 4, 31],
		sdata: {
			solar: [1405, 3, 31]
		},
		stime: 1784711783917,
		gdate: [2026, 7, 22],
		gdata: {
			gregorian: [2026, 6, 22]
		},
		gtime: 1784711783917
	},
	{
		sdate: [1405, 5, 1],
		sdata: {
			solar: [1405, 4, 1]
		},
		stime: 1784798183917,
		gdate: [2026, 7, 23],
		gdata: {
			gregorian: [2026, 6, 23]
		},
		gtime: 1784798183917
	},
	{
		sdate: [1405, 5, 2],
		sdata: {
			solar: [1405, 4, 2]
		},
		stime: 1784884583917,
		gdate: [2026, 7, 24],
		gdata: {
			gregorian: [2026, 6, 24]
		},
		gtime: 1784884583917
	},
	{
		sdate: [1405, 5, 3],
		sdata: {
			solar: [1405, 4, 3]
		},
		stime: 1784970983917,
		gdate: [2026, 7, 25],
		gdata: {
			gregorian: [2026, 6, 25]
		},
		gtime: 1784970983917
	},
	{
		sdate: [1405, 5, 4],
		sdata: {
			solar: [1405, 4, 4]
		},
		stime: 1785057383917,
		gdate: [2026, 7, 26],
		gdata: {
			gregorian: [2026, 6, 26]
		},
		gtime: 1785057383917
	},
	{
		sdate: [1405, 5, 5],
		sdata: {
			solar: [1405, 4, 5]
		},
		stime: 1785143783917,
		gdate: [2026, 7, 27],
		gdata: {
			gregorian: [2026, 6, 27]
		},
		gtime: 1785143783917
	},
	{
		sdate: [1405, 5, 6],
		sdata: {
			solar: [1405, 4, 6]
		},
		stime: 1785230183917,
		gdate: [2026, 7, 28],
		gdata: {
			gregorian: [2026, 6, 28]
		},
		gtime: 1785230183917
	},
	{
		sdate: [1405, 5, 7],
		sdata: {
			solar: [1405, 4, 7]
		},
		stime: 1785316583917,
		gdate: [2026, 7, 29],
		gdata: {
			gregorian: [2026, 6, 29]
		},
		gtime: 1785316583917
	},
	{
		sdate: [1405, 5, 8],
		sdata: {
			solar: [1405, 4, 8]
		},
		stime: 1785402983917,
		gdate: [2026, 7, 30],
		gdata: {
			gregorian: [2026, 6, 30]
		},
		gtime: 1785402983917
	},
	{
		sdate: [1405, 5, 9],
		sdata: {
			solar: [1405, 4, 9]
		},
		stime: 1785489383917,
		gdate: [2026, 7, 31],
		gdata: {
			gregorian: [2026, 6, 31]
		},
		gtime: 1785489383917
	},
	{
		sdate: [1405, 5, 10],
		sdata: {
			solar: [1405, 4, 10]
		},
		stime: 1785575783917,
		gdate: [2026, 8, 1],
		gdata: {
			gregorian: [2026, 7, 1]
		},
		gtime: 1785575783917
	},
	{
		sdate: [1405, 5, 11],
		sdata: {
			solar: [1405, 4, 11]
		},
		stime: 1785662183917,
		gdate: [2026, 8, 2],
		gdata: {
			gregorian: [2026, 7, 2]
		},
		gtime: 1785662183917
	},
	{
		sdate: [1405, 5, 12],
		sdata: {
			solar: [1405, 4, 12]
		},
		stime: 1785748583917,
		gdate: [2026, 8, 3],
		gdata: {
			gregorian: [2026, 7, 3]
		},
		gtime: 1785748583917
	},
	{
		sdate: [1405, 5, 13],
		sdata: {
			solar: [1405, 4, 13]
		},
		stime: 1785834983917,
		gdate: [2026, 8, 4],
		gdata: {
			gregorian: [2026, 7, 4]
		},
		gtime: 1785834983917
	},
	{
		sdate: [1405, 5, 14],
		sdata: {
			solar: [1405, 4, 14]
		},
		stime: 1785921383917,
		gdate: [2026, 8, 5],
		gdata: {
			gregorian: [2026, 7, 5]
		},
		gtime: 1785921383917
	},
	{
		sdate: [1405, 5, 15],
		sdata: {
			solar: [1405, 4, 15]
		},
		stime: 1786007783917,
		gdate: [2026, 8, 6],
		gdata: {
			gregorian: [2026, 7, 6]
		},
		gtime: 1786007783917
	},
	{
		sdate: [1405, 5, 16],
		sdata: {
			solar: [1405, 4, 16]
		},
		stime: 1786094183917,
		gdate: [2026, 8, 7],
		gdata: {
			gregorian: [2026, 7, 7]
		},
		gtime: 1786094183917
	},
	{
		sdate: [1405, 5, 17],
		sdata: {
			solar: [1405, 4, 17]
		},
		stime: 1786180583917,
		gdate: [2026, 8, 8],
		gdata: {
			gregorian: [2026, 7, 8]
		},
		gtime: 1786180583917
	},
	{
		sdate: [1405, 5, 18],
		sdata: {
			solar: [1405, 4, 18]
		},
		stime: 1786266983917,
		gdate: [2026, 8, 9],
		gdata: {
			gregorian: [2026, 7, 9]
		},
		gtime: 1786266983917
	},
	{
		sdate: [1405, 5, 19],
		sdata: {
			solar: [1405, 4, 19]
		},
		stime: 1786353383917,
		gdate: [2026, 8, 10],
		gdata: {
			gregorian: [2026, 7, 10]
		},
		gtime: 1786353383917
	},
	{
		sdate: [1405, 5, 20],
		sdata: {
			solar: [1405, 4, 20]
		},
		stime: 1786439783917,
		gdate: [2026, 8, 11],
		gdata: {
			gregorian: [2026, 7, 11]
		},
		gtime: 1786439783917
	},
	{
		sdate: [1405, 5, 21],
		sdata: {
			solar: [1405, 4, 21]
		},
		stime: 1786526183917,
		gdate: [2026, 8, 12],
		gdata: {
			gregorian: [2026, 7, 12]
		},
		gtime: 1786526183917
	},
	{
		sdate: [1405, 5, 22],
		sdata: {
			solar: [1405, 4, 22]
		},
		stime: 1786612583917,
		gdate: [2026, 8, 13],
		gdata: {
			gregorian: [2026, 7, 13]
		},
		gtime: 1786612583917
	},
	{
		sdate: [1405, 5, 23],
		sdata: {
			solar: [1405, 4, 23]
		},
		stime: 1786698983917,
		gdate: [2026, 8, 14],
		gdata: {
			gregorian: [2026, 7, 14]
		},
		gtime: 1786698983917
	},
	{
		sdate: [1405, 5, 24],
		sdata: {
			solar: [1405, 4, 24]
		},
		stime: 1786785383917,
		gdate: [2026, 8, 15],
		gdata: {
			gregorian: [2026, 7, 15]
		},
		gtime: 1786785383917
	},
	{
		sdate: [1405, 5, 25],
		sdata: {
			solar: [1405, 4, 25]
		},
		stime: 1786871783917,
		gdate: [2026, 8, 16],
		gdata: {
			gregorian: [2026, 7, 16]
		},
		gtime: 1786871783917
	},
	{
		sdate: [1405, 5, 26],
		sdata: {
			solar: [1405, 4, 26]
		},
		stime: 1786958183917,
		gdate: [2026, 8, 17],
		gdata: {
			gregorian: [2026, 7, 17]
		},
		gtime: 1786958183917
	},
	{
		sdate: [1405, 5, 27],
		sdata: {
			solar: [1405, 4, 27]
		},
		stime: 1787044583917,
		gdate: [2026, 8, 18],
		gdata: {
			gregorian: [2026, 7, 18]
		},
		gtime: 1787044583917
	},
	{
		sdate: [1405, 5, 28],
		sdata: {
			solar: [1405, 4, 28]
		},
		stime: 1787130983917,
		gdate: [2026, 8, 19],
		gdata: {
			gregorian: [2026, 7, 19]
		},
		gtime: 1787130983917
	},
	{
		sdate: [1405, 5, 29],
		sdata: {
			solar: [1405, 4, 29]
		},
		stime: 1787217383917,
		gdate: [2026, 8, 20],
		gdata: {
			gregorian: [2026, 7, 20]
		},
		gtime: 1787217383917
	},
	{
		sdate: [1405, 5, 30],
		sdata: {
			solar: [1405, 4, 30]
		},
		stime: 1787303783917,
		gdate: [2026, 8, 21],
		gdata: {
			gregorian: [2026, 7, 21]
		},
		gtime: 1787303783917
	},
	{
		sdate: [1405, 5, 31],
		sdata: {
			solar: [1405, 4, 31]
		},
		stime: 1787390183917,
		gdate: [2026, 8, 22],
		gdata: {
			gregorian: [2026, 7, 22]
		},
		gtime: 1787390183917
	},
	{
		sdate: [1405, 6, 1],
		sdata: {
			solar: [1405, 5, 1]
		},
		stime: 1787476583917,
		gdate: [2026, 8, 23],
		gdata: {
			gregorian: [2026, 7, 23]
		},
		gtime: 1787476583917
	},
	{
		sdate: [1405, 6, 2],
		sdata: {
			solar: [1405, 5, 2]
		},
		stime: 1787562983917,
		gdate: [2026, 8, 24],
		gdata: {
			gregorian: [2026, 7, 24]
		},
		gtime: 1787562983917
	},
	{
		sdate: [1405, 6, 3],
		sdata: {
			solar: [1405, 5, 3]
		},
		stime: 1787649383917,
		gdate: [2026, 8, 25],
		gdata: {
			gregorian: [2026, 7, 25]
		},
		gtime: 1787649383917
	},
	{
		sdate: [1405, 6, 4],
		sdata: {
			solar: [1405, 5, 4]
		},
		stime: 1787735783917,
		gdate: [2026, 8, 26],
		gdata: {
			gregorian: [2026, 7, 26]
		},
		gtime: 1787735783917
	},
	{
		sdate: [1405, 6, 5],
		sdata: {
			solar: [1405, 5, 5]
		},
		stime: 1787822183917,
		gdate: [2026, 8, 27],
		gdata: {
			gregorian: [2026, 7, 27]
		},
		gtime: 1787822183917
	},
	{
		sdate: [1405, 6, 6],
		sdata: {
			solar: [1405, 5, 6]
		},
		stime: 1787908583917,
		gdate: [2026, 8, 28],
		gdata: {
			gregorian: [2026, 7, 28]
		},
		gtime: 1787908583917
	},
	{
		sdate: [1405, 6, 7],
		sdata: {
			solar: [1405, 5, 7]
		},
		stime: 1787994983917,
		gdate: [2026, 8, 29],
		gdata: {
			gregorian: [2026, 7, 29]
		},
		gtime: 1787994983917
	},
	{
		sdate: [1405, 6, 8],
		sdata: {
			solar: [1405, 5, 8]
		},
		stime: 1788081383917,
		gdate: [2026, 8, 30],
		gdata: {
			gregorian: [2026, 7, 30]
		},
		gtime: 1788081383917
	},
	{
		sdate: [1405, 6, 9],
		sdata: {
			solar: [1405, 5, 9]
		},
		stime: 1788167783917,
		gdate: [2026, 8, 31],
		gdata: {
			gregorian: [2026, 7, 31]
		},
		gtime: 1788167783917
	},
	{
		sdate: [1405, 6, 10],
		sdata: {
			solar: [1405, 5, 10]
		},
		stime: 1788254183917,
		gdate: [2026, 9, 1],
		gdata: {
			gregorian: [2026, 8, 1]
		},
		gtime: 1788254183917
	},
	{
		sdate: [1405, 6, 11],
		sdata: {
			solar: [1405, 5, 11]
		},
		stime: 1788340583917,
		gdate: [2026, 9, 2],
		gdata: {
			gregorian: [2026, 8, 2]
		},
		gtime: 1788340583917
	},
	{
		sdate: [1405, 6, 12],
		sdata: {
			solar: [1405, 5, 12]
		},
		stime: 1788426983917,
		gdate: [2026, 9, 3],
		gdata: {
			gregorian: [2026, 8, 3]
		},
		gtime: 1788426983917
	},
	{
		sdate: [1405, 6, 13],
		sdata: {
			solar: [1405, 5, 13]
		},
		stime: 1788513383917,
		gdate: [2026, 9, 4],
		gdata: {
			gregorian: [2026, 8, 4]
		},
		gtime: 1788513383917
	},
	{
		sdate: [1405, 6, 14],
		sdata: {
			solar: [1405, 5, 14]
		},
		stime: 1788599783917,
		gdate: [2026, 9, 5],
		gdata: {
			gregorian: [2026, 8, 5]
		},
		gtime: 1788599783917
	},
	{
		sdate: [1405, 6, 15],
		sdata: {
			solar: [1405, 5, 15]
		},
		stime: 1788686183917,
		gdate: [2026, 9, 6],
		gdata: {
			gregorian: [2026, 8, 6]
		},
		gtime: 1788686183917
	},
	{
		sdate: [1405, 6, 16],
		sdata: {
			solar: [1405, 5, 16]
		},
		stime: 1788772583917,
		gdate: [2026, 9, 7],
		gdata: {
			gregorian: [2026, 8, 7]
		},
		gtime: 1788772583917
	},
	{
		sdate: [1405, 6, 17],
		sdata: {
			solar: [1405, 5, 17]
		},
		stime: 1788858983917,
		gdate: [2026, 9, 8],
		gdata: {
			gregorian: [2026, 8, 8]
		},
		gtime: 1788858983917
	},
	{
		sdate: [1405, 6, 18],
		sdata: {
			solar: [1405, 5, 18]
		},
		stime: 1788945383917,
		gdate: [2026, 9, 9],
		gdata: {
			gregorian: [2026, 8, 9]
		},
		gtime: 1788945383917
	},
	{
		sdate: [1405, 6, 19],
		sdata: {
			solar: [1405, 5, 19]
		},
		stime: 1789031783917,
		gdate: [2026, 9, 10],
		gdata: {
			gregorian: [2026, 8, 10]
		},
		gtime: 1789031783917
	},
	{
		sdate: [1405, 6, 20],
		sdata: {
			solar: [1405, 5, 20]
		},
		stime: 1789118183917,
		gdate: [2026, 9, 11],
		gdata: {
			gregorian: [2026, 8, 11]
		},
		gtime: 1789118183917
	},
	{
		sdate: [1405, 6, 21],
		sdata: {
			solar: [1405, 5, 21]
		},
		stime: 1789204583917,
		gdate: [2026, 9, 12],
		gdata: {
			gregorian: [2026, 8, 12]
		},
		gtime: 1789204583917
	},
	{
		sdate: [1405, 6, 22],
		sdata: {
			solar: [1405, 5, 22]
		},
		stime: 1789290983917,
		gdate: [2026, 9, 13],
		gdata: {
			gregorian: [2026, 8, 13]
		},
		gtime: 1789290983917
	},
	{
		sdate: [1405, 6, 23],
		sdata: {
			solar: [1405, 5, 23]
		},
		stime: 1789377383917,
		gdate: [2026, 9, 14],
		gdata: {
			gregorian: [2026, 8, 14]
		},
		gtime: 1789377383917
	},
	{
		sdate: [1405, 6, 24],
		sdata: {
			solar: [1405, 5, 24]
		},
		stime: 1789463783917,
		gdate: [2026, 9, 15],
		gdata: {
			gregorian: [2026, 8, 15]
		},
		gtime: 1789463783917
	},
	{
		sdate: [1405, 6, 25],
		sdata: {
			solar: [1405, 5, 25]
		},
		stime: 1789550183917,
		gdate: [2026, 9, 16],
		gdata: {
			gregorian: [2026, 8, 16]
		},
		gtime: 1789550183917
	},
	{
		sdate: [1405, 6, 26],
		sdata: {
			solar: [1405, 5, 26]
		},
		stime: 1789636583917,
		gdate: [2026, 9, 17],
		gdata: {
			gregorian: [2026, 8, 17]
		},
		gtime: 1789636583917
	},
	{
		sdate: [1405, 6, 27],
		sdata: {
			solar: [1405, 5, 27]
		},
		stime: 1789722983917,
		gdate: [2026, 9, 18],
		gdata: {
			gregorian: [2026, 8, 18]
		},
		gtime: 1789722983917
	},
	{
		sdate: [1405, 6, 28],
		sdata: {
			solar: [1405, 5, 28]
		},
		stime: 1789809383917,
		gdate: [2026, 9, 19],
		gdata: {
			gregorian: [2026, 8, 19]
		},
		gtime: 1789809383917
	},
	{
		sdate: [1405, 6, 29],
		sdata: {
			solar: [1405, 5, 29]
		},
		stime: 1789895783917,
		gdate: [2026, 9, 20],
		gdata: {
			gregorian: [2026, 8, 20]
		},
		gtime: 1789895783917
	},
	{
		sdate: [1405, 6, 30],
		sdata: {
			solar: [1405, 5, 30]
		},
		stime: 1789982183917,
		gdate: [2026, 9, 21],
		gdata: {
			gregorian: [2026, 8, 21]
		},
		gtime: 1789982183917
	},
	{
		sdate: [1405, 6, 31],
		sdata: {
			solar: [1405, 5, 31]
		},
		stime: 1790068583917,
		gdate: [2026, 9, 22],
		gdata: {
			gregorian: [2026, 8, 22]
		},
		gtime: 1790068583917
	},
	{
		sdate: [1405, 7, 1],
		sdata: {
			solar: [1405, 6, 1]
		},
		stime: 1790154983917,
		gdate: [2026, 9, 23],
		gdata: {
			gregorian: [2026, 8, 23]
		},
		gtime: 1790154983917
	},
	{
		sdate: [1405, 7, 2],
		sdata: {
			solar: [1405, 6, 2]
		},
		stime: 1790241383917,
		gdate: [2026, 9, 24],
		gdata: {
			gregorian: [2026, 8, 24]
		},
		gtime: 1790241383917
	},
	{
		sdate: [1405, 7, 3],
		sdata: {
			solar: [1405, 6, 3]
		},
		stime: 1790327783917,
		gdate: [2026, 9, 25],
		gdata: {
			gregorian: [2026, 8, 25]
		},
		gtime: 1790327783917
	},
	{
		sdate: [1405, 7, 4],
		sdata: {
			solar: [1405, 6, 4]
		},
		stime: 1790414183917,
		gdate: [2026, 9, 26],
		gdata: {
			gregorian: [2026, 8, 26]
		},
		gtime: 1790414183917
	},
	{
		sdate: [1405, 7, 5],
		sdata: {
			solar: [1405, 6, 5]
		},
		stime: 1790500583917,
		gdate: [2026, 9, 27],
		gdata: {
			gregorian: [2026, 8, 27]
		},
		gtime: 1790500583917
	},
	{
		sdate: [1405, 7, 6],
		sdata: {
			solar: [1405, 6, 6]
		},
		stime: 1790586983917,
		gdate: [2026, 9, 28],
		gdata: {
			gregorian: [2026, 8, 28]
		},
		gtime: 1790586983917
	},
	{
		sdate: [1405, 7, 7],
		sdata: {
			solar: [1405, 6, 7]
		},
		stime: 1790673383917,
		gdate: [2026, 9, 29],
		gdata: {
			gregorian: [2026, 8, 29]
		},
		gtime: 1790673383917
	},
	{
		sdate: [1405, 7, 8],
		sdata: {
			solar: [1405, 6, 8]
		},
		stime: 1790759783917,
		gdate: [2026, 9, 30],
		gdata: {
			gregorian: [2026, 8, 30]
		},
		gtime: 1790759783917
	},
	{
		sdate: [1405, 7, 9],
		sdata: {
			solar: [1405, 6, 9]
		},
		stime: 1790846183917,
		gdate: [2026, 10, 1],
		gdata: {
			gregorian: [2026, 9, 1]
		},
		gtime: 1790846183917
	},
	{
		sdate: [1405, 7, 10],
		sdata: {
			solar: [1405, 6, 10]
		},
		stime: 1790932583917,
		gdate: [2026, 10, 2],
		gdata: {
			gregorian: [2026, 9, 2]
		},
		gtime: 1790932583917
	},
	{
		sdate: [1405, 7, 11],
		sdata: {
			solar: [1405, 6, 11]
		},
		stime: 1791018983917,
		gdate: [2026, 10, 3],
		gdata: {
			gregorian: [2026, 9, 3]
		},
		gtime: 1791018983917
	},
	{
		sdate: [1405, 7, 12],
		sdata: {
			solar: [1405, 6, 12]
		},
		stime: 1791105383917,
		gdate: [2026, 10, 4],
		gdata: {
			gregorian: [2026, 9, 4]
		},
		gtime: 1791105383917
	},
	{
		sdate: [1405, 7, 13],
		sdata: {
			solar: [1405, 6, 13]
		},
		stime: 1791191783917,
		gdate: [2026, 10, 5],
		gdata: {
			gregorian: [2026, 9, 5]
		},
		gtime: 1791191783917
	},
	{
		sdate: [1405, 7, 14],
		sdata: {
			solar: [1405, 6, 14]
		},
		stime: 1791278183917,
		gdate: [2026, 10, 6],
		gdata: {
			gregorian: [2026, 9, 6]
		},
		gtime: 1791278183917
	},
	{
		sdate: [1405, 7, 15],
		sdata: {
			solar: [1405, 6, 15]
		},
		stime: 1791364583917,
		gdate: [2026, 10, 7],
		gdata: {
			gregorian: [2026, 9, 7]
		},
		gtime: 1791364583917
	},
	{
		sdate: [1405, 7, 16],
		sdata: {
			solar: [1405, 6, 16]
		},
		stime: 1791450983917,
		gdate: [2026, 10, 8],
		gdata: {
			gregorian: [2026, 9, 8]
		},
		gtime: 1791450983917
	},
	{
		sdate: [1405, 7, 17],
		sdata: {
			solar: [1405, 6, 17]
		},
		stime: 1791537383917,
		gdate: [2026, 10, 9],
		gdata: {
			gregorian: [2026, 9, 9]
		},
		gtime: 1791537383917
	},
	{
		sdate: [1405, 7, 18],
		sdata: {
			solar: [1405, 6, 18]
		},
		stime: 1791623783917,
		gdate: [2026, 10, 10],
		gdata: {
			gregorian: [2026, 9, 10]
		},
		gtime: 1791623783917
	},
	{
		sdate: [1405, 7, 19],
		sdata: {
			solar: [1405, 6, 19]
		},
		stime: 1791710183917,
		gdate: [2026, 10, 11],
		gdata: {
			gregorian: [2026, 9, 11]
		},
		gtime: 1791710183917
	},
	{
		sdate: [1405, 7, 20],
		sdata: {
			solar: [1405, 6, 20]
		},
		stime: 1791796583917,
		gdate: [2026, 10, 12],
		gdata: {
			gregorian: [2026, 9, 12]
		},
		gtime: 1791796583917
	},
	{
		sdate: [1405, 7, 21],
		sdata: {
			solar: [1405, 6, 21]
		},
		stime: 1791882983917,
		gdate: [2026, 10, 13],
		gdata: {
			gregorian: [2026, 9, 13]
		},
		gtime: 1791882983917
	},
	{
		sdate: [1405, 7, 22],
		sdata: {
			solar: [1405, 6, 22]
		},
		stime: 1791969383917,
		gdate: [2026, 10, 14],
		gdata: {
			gregorian: [2026, 9, 14]
		},
		gtime: 1791969383917
	},
	{
		sdate: [1405, 7, 23],
		sdata: {
			solar: [1405, 6, 23]
		},
		stime: 1792055783917,
		gdate: [2026, 10, 15],
		gdata: {
			gregorian: [2026, 9, 15]
		},
		gtime: 1792055783917
	},
	{
		sdate: [1405, 7, 24],
		sdata: {
			solar: [1405, 6, 24]
		},
		stime: 1792142183917,
		gdate: [2026, 10, 16],
		gdata: {
			gregorian: [2026, 9, 16]
		},
		gtime: 1792142183917
	},
	{
		sdate: [1405, 7, 25],
		sdata: {
			solar: [1405, 6, 25]
		},
		stime: 1792228583917,
		gdate: [2026, 10, 17],
		gdata: {
			gregorian: [2026, 9, 17]
		},
		gtime: 1792228583917
	},
	{
		sdate: [1405, 7, 26],
		sdata: {
			solar: [1405, 6, 26]
		},
		stime: 1792314983917,
		gdate: [2026, 10, 18],
		gdata: {
			gregorian: [2026, 9, 18]
		},
		gtime: 1792314983917
	},
	{
		sdate: [1405, 7, 27],
		sdata: {
			solar: [1405, 6, 27]
		},
		stime: 1792401383917,
		gdate: [2026, 10, 19],
		gdata: {
			gregorian: [2026, 9, 19]
		},
		gtime: 1792401383917
	},
	{
		sdate: [1405, 7, 28],
		sdata: {
			solar: [1405, 6, 28]
		},
		stime: 1792487783917,
		gdate: [2026, 10, 20],
		gdata: {
			gregorian: [2026, 9, 20]
		},
		gtime: 1792487783917
	},
	{
		sdate: [1405, 7, 29],
		sdata: {
			solar: [1405, 6, 29]
		},
		stime: 1792574183917,
		gdate: [2026, 10, 21],
		gdata: {
			gregorian: [2026, 9, 21]
		},
		gtime: 1792574183917
	},
	{
		sdate: [1405, 7, 30],
		sdata: {
			solar: [1405, 6, 30]
		},
		stime: 1792660583917,
		gdate: [2026, 10, 22],
		gdata: {
			gregorian: [2026, 9, 22]
		},
		gtime: 1792660583917
	},
	{
		sdate: [1405, 8, 1],
		sdata: {
			solar: [1405, 7, 1]
		},
		stime: 1792746983917,
		gdate: [2026, 10, 23],
		gdata: {
			gregorian: [2026, 9, 23]
		},
		gtime: 1792746983917
	},
	{
		sdate: [1405, 8, 2],
		sdata: {
			solar: [1405, 7, 2]
		},
		stime: 1792833383917,
		gdate: [2026, 10, 24],
		gdata: {
			gregorian: [2026, 9, 24]
		},
		gtime: 1792833383917
	},
	{
		sdate: [1405, 8, 3],
		sdata: {
			solar: [1405, 7, 3]
		},
		stime: 1792919783917,
		gdate: [2026, 10, 25],
		gdata: {
			gregorian: [2026, 9, 25]
		},
		gtime: 1792919783917
	},
	{
		sdate: [1405, 8, 4],
		sdata: {
			solar: [1405, 7, 4]
		},
		stime: 1793006183917,
		gdate: [2026, 10, 26],
		gdata: {
			gregorian: [2026, 9, 26]
		},
		gtime: 1793006183917
	},
	{
		sdate: [1405, 8, 5],
		sdata: {
			solar: [1405, 7, 5]
		},
		stime: 1793092583917,
		gdate: [2026, 10, 27],
		gdata: {
			gregorian: [2026, 9, 27]
		},
		gtime: 1793092583917
	},
	{
		sdate: [1405, 8, 6],
		sdata: {
			solar: [1405, 7, 6]
		},
		stime: 1793178983917,
		gdate: [2026, 10, 28],
		gdata: {
			gregorian: [2026, 9, 28]
		},
		gtime: 1793178983917
	},
	{
		sdate: [1405, 8, 7],
		sdata: {
			solar: [1405, 7, 7]
		},
		stime: 1793265383917,
		gdate: [2026, 10, 29],
		gdata: {
			gregorian: [2026, 9, 29]
		},
		gtime: 1793265383917
	},
	{
		sdate: [1405, 8, 8],
		sdata: {
			solar: [1405, 7, 8]
		},
		stime: 1793351783917,
		gdate: [2026, 10, 30],
		gdata: {
			gregorian: [2026, 9, 30]
		},
		gtime: 1793351783917
	},
	{
		sdate: [1405, 8, 9],
		sdata: {
			solar: [1405, 7, 9]
		},
		stime: 1793438183917,
		gdate: [2026, 10, 31],
		gdata: {
			gregorian: [2026, 9, 31]
		},
		gtime: 1793438183917
	},
	{
		sdate: [1405, 8, 10],
		sdata: {
			solar: [1405, 7, 10]
		},
		stime: 1793524583917,
		gdate: [2026, 11, 1],
		gdata: {
			gregorian: [2026, 10, 1]
		},
		gtime: 1793524583917
	},
	{
		sdate: [1405, 8, 11],
		sdata: {
			solar: [1405, 7, 11]
		},
		stime: 1793610983917,
		gdate: [2026, 11, 2],
		gdata: {
			gregorian: [2026, 10, 2]
		},
		gtime: 1793610983917
	},
	{
		sdate: [1405, 8, 12],
		sdata: {
			solar: [1405, 7, 12]
		},
		stime: 1793697383917,
		gdate: [2026, 11, 3],
		gdata: {
			gregorian: [2026, 10, 3]
		},
		gtime: 1793697383917
	},
	{
		sdate: [1405, 8, 13],
		sdata: {
			solar: [1405, 7, 13]
		},
		stime: 1793783783917,
		gdate: [2026, 11, 4],
		gdata: {
			gregorian: [2026, 10, 4]
		},
		gtime: 1793783783917
	},
	{
		sdate: [1405, 8, 14],
		sdata: {
			solar: [1405, 7, 14]
		},
		stime: 1793870183917,
		gdate: [2026, 11, 5],
		gdata: {
			gregorian: [2026, 10, 5]
		},
		gtime: 1793870183917
	},
	{
		sdate: [1405, 8, 15],
		sdata: {
			solar: [1405, 7, 15]
		},
		stime: 1793956583917,
		gdate: [2026, 11, 6],
		gdata: {
			gregorian: [2026, 10, 6]
		},
		gtime: 1793956583917
	},
	{
		sdate: [1405, 8, 16],
		sdata: {
			solar: [1405, 7, 16]
		},
		stime: 1794042983917,
		gdate: [2026, 11, 7],
		gdata: {
			gregorian: [2026, 10, 7]
		},
		gtime: 1794042983917
	},
	{
		sdate: [1405, 8, 17],
		sdata: {
			solar: [1405, 7, 17]
		},
		stime: 1794129383917,
		gdate: [2026, 11, 8],
		gdata: {
			gregorian: [2026, 10, 8]
		},
		gtime: 1794129383917
	},
	{
		sdate: [1405, 8, 18],
		sdata: {
			solar: [1405, 7, 18]
		},
		stime: 1794215783917,
		gdate: [2026, 11, 9],
		gdata: {
			gregorian: [2026, 10, 9]
		},
		gtime: 1794215783917
	},
	{
		sdate: [1405, 8, 19],
		sdata: {
			solar: [1405, 7, 19]
		},
		stime: 1794302183917,
		gdate: [2026, 11, 10],
		gdata: {
			gregorian: [2026, 10, 10]
		},
		gtime: 1794302183917
	},
	{
		sdate: [1405, 8, 20],
		sdata: {
			solar: [1405, 7, 20]
		},
		stime: 1794388583917,
		gdate: [2026, 11, 11],
		gdata: {
			gregorian: [2026, 10, 11]
		},
		gtime: 1794388583917
	},
	{
		sdate: [1405, 8, 21],
		sdata: {
			solar: [1405, 7, 21]
		},
		stime: 1794474983917,
		gdate: [2026, 11, 12],
		gdata: {
			gregorian: [2026, 10, 12]
		},
		gtime: 1794474983917
	},
	{
		sdate: [1405, 8, 22],
		sdata: {
			solar: [1405, 7, 22]
		},
		stime: 1794561383917,
		gdate: [2026, 11, 13],
		gdata: {
			gregorian: [2026, 10, 13]
		},
		gtime: 1794561383917
	},
	{
		sdate: [1405, 8, 23],
		sdata: {
			solar: [1405, 7, 23]
		},
		stime: 1794647783917,
		gdate: [2026, 11, 14],
		gdata: {
			gregorian: [2026, 10, 14]
		},
		gtime: 1794647783917
	},
	{
		sdate: [1405, 8, 24],
		sdata: {
			solar: [1405, 7, 24]
		},
		stime: 1794734183917,
		gdate: [2026, 11, 15],
		gdata: {
			gregorian: [2026, 10, 15]
		},
		gtime: 1794734183917
	},
	{
		sdate: [1405, 8, 25],
		sdata: {
			solar: [1405, 7, 25]
		},
		stime: 1794820583917,
		gdate: [2026, 11, 16],
		gdata: {
			gregorian: [2026, 10, 16]
		},
		gtime: 1794820583917
	},
	{
		sdate: [1405, 8, 26],
		sdata: {
			solar: [1405, 7, 26]
		},
		stime: 1794906983917,
		gdate: [2026, 11, 17],
		gdata: {
			gregorian: [2026, 10, 17]
		},
		gtime: 1794906983917
	},
	{
		sdate: [1405, 8, 27],
		sdata: {
			solar: [1405, 7, 27]
		},
		stime: 1794993383917,
		gdate: [2026, 11, 18],
		gdata: {
			gregorian: [2026, 10, 18]
		},
		gtime: 1794993383917
	},
	{
		sdate: [1405, 8, 28],
		sdata: {
			solar: [1405, 7, 28]
		},
		stime: 1795079783917,
		gdate: [2026, 11, 19],
		gdata: {
			gregorian: [2026, 10, 19]
		},
		gtime: 1795079783917
	},
	{
		sdate: [1405, 8, 29],
		sdata: {
			solar: [1405, 7, 29]
		},
		stime: 1795166183917,
		gdate: [2026, 11, 20],
		gdata: {
			gregorian: [2026, 10, 20]
		},
		gtime: 1795166183917
	},
	{
		sdate: [1405, 8, 30],
		sdata: {
			solar: [1405, 7, 30]
		},
		stime: 1795252583917,
		gdate: [2026, 11, 21],
		gdata: {
			gregorian: [2026, 10, 21]
		},
		gtime: 1795252583917
	},
	{
		sdate: [1405, 9, 1],
		sdata: {
			solar: [1405, 8, 1]
		},
		stime: 1795338983917,
		gdate: [2026, 11, 22],
		gdata: {
			gregorian: [2026, 10, 22]
		},
		gtime: 1795338983917
	},
	{
		sdate: [1405, 9, 2],
		sdata: {
			solar: [1405, 8, 2]
		},
		stime: 1795425383917,
		gdate: [2026, 11, 23],
		gdata: {
			gregorian: [2026, 10, 23]
		},
		gtime: 1795425383917
	},
	{
		sdate: [1405, 9, 3],
		sdata: {
			solar: [1405, 8, 3]
		},
		stime: 1795511783917,
		gdate: [2026, 11, 24],
		gdata: {
			gregorian: [2026, 10, 24]
		},
		gtime: 1795511783917
	},
	{
		sdate: [1405, 9, 4],
		sdata: {
			solar: [1405, 8, 4]
		},
		stime: 1795598183917,
		gdate: [2026, 11, 25],
		gdata: {
			gregorian: [2026, 10, 25]
		},
		gtime: 1795598183917
	},
	{
		sdate: [1405, 9, 5],
		sdata: {
			solar: [1405, 8, 5]
		},
		stime: 1795684583917,
		gdate: [2026, 11, 26],
		gdata: {
			gregorian: [2026, 10, 26]
		},
		gtime: 1795684583917
	},
	{
		sdate: [1405, 9, 6],
		sdata: {
			solar: [1405, 8, 6]
		},
		stime: 1795770983917,
		gdate: [2026, 11, 27],
		gdata: {
			gregorian: [2026, 10, 27]
		},
		gtime: 1795770983917
	},
	{
		sdate: [1405, 9, 7],
		sdata: {
			solar: [1405, 8, 7]
		},
		stime: 1795857383917,
		gdate: [2026, 11, 28],
		gdata: {
			gregorian: [2026, 10, 28]
		},
		gtime: 1795857383917
	},
	{
		sdate: [1405, 9, 8],
		sdata: {
			solar: [1405, 8, 8]
		},
		stime: 1795943783917,
		gdate: [2026, 11, 29],
		gdata: {
			gregorian: [2026, 10, 29]
		},
		gtime: 1795943783917
	},
	{
		sdate: [1405, 9, 9],
		sdata: {
			solar: [1405, 8, 9]
		},
		stime: 1796030183917,
		gdate: [2026, 11, 30],
		gdata: {
			gregorian: [2026, 10, 30]
		},
		gtime: 1796030183917
	},
	{
		sdate: [1405, 9, 10],
		sdata: {
			solar: [1405, 8, 10]
		},
		stime: 1796116583917,
		gdate: [2026, 12, 1],
		gdata: {
			gregorian: [2026, 11, 1]
		},
		gtime: 1796116583917
	},
	{
		sdate: [1405, 9, 11],
		sdata: {
			solar: [1405, 8, 11]
		},
		stime: 1796202983917,
		gdate: [2026, 12, 2],
		gdata: {
			gregorian: [2026, 11, 2]
		},
		gtime: 1796202983917
	},
	{
		sdate: [1405, 9, 12],
		sdata: {
			solar: [1405, 8, 12]
		},
		stime: 1796289383917,
		gdate: [2026, 12, 3],
		gdata: {
			gregorian: [2026, 11, 3]
		},
		gtime: 1796289383917
	},
	{
		sdate: [1405, 9, 13],
		sdata: {
			solar: [1405, 8, 13]
		},
		stime: 1796375783917,
		gdate: [2026, 12, 4],
		gdata: {
			gregorian: [2026, 11, 4]
		},
		gtime: 1796375783917
	},
	{
		sdate: [1405, 9, 14],
		sdata: {
			solar: [1405, 8, 14]
		},
		stime: 1796462183917,
		gdate: [2026, 12, 5],
		gdata: {
			gregorian: [2026, 11, 5]
		},
		gtime: 1796462183917
	},
	{
		sdate: [1405, 9, 15],
		sdata: {
			solar: [1405, 8, 15]
		},
		stime: 1796548583917,
		gdate: [2026, 12, 6],
		gdata: {
			gregorian: [2026, 11, 6]
		},
		gtime: 1796548583917
	},
	{
		sdate: [1405, 9, 16],
		sdata: {
			solar: [1405, 8, 16]
		},
		stime: 1796634983917,
		gdate: [2026, 12, 7],
		gdata: {
			gregorian: [2026, 11, 7]
		},
		gtime: 1796634983917
	},
	{
		sdate: [1405, 9, 17],
		sdata: {
			solar: [1405, 8, 17]
		},
		stime: 1796721383917,
		gdate: [2026, 12, 8],
		gdata: {
			gregorian: [2026, 11, 8]
		},
		gtime: 1796721383917
	},
	{
		sdate: [1405, 9, 18],
		sdata: {
			solar: [1405, 8, 18]
		},
		stime: 1796807783917,
		gdate: [2026, 12, 9],
		gdata: {
			gregorian: [2026, 11, 9]
		},
		gtime: 1796807783917
	},
	{
		sdate: [1405, 9, 19],
		sdata: {
			solar: [1405, 8, 19]
		},
		stime: 1796894183917,
		gdate: [2026, 12, 10],
		gdata: {
			gregorian: [2026, 11, 10]
		},
		gtime: 1796894183917
	},
	{
		sdate: [1405, 9, 20],
		sdata: {
			solar: [1405, 8, 20]
		},
		stime: 1796980583917,
		gdate: [2026, 12, 11],
		gdata: {
			gregorian: [2026, 11, 11]
		},
		gtime: 1796980583917
	},
	{
		sdate: [1405, 9, 21],
		sdata: {
			solar: [1405, 8, 21]
		},
		stime: 1797066983917,
		gdate: [2026, 12, 12],
		gdata: {
			gregorian: [2026, 11, 12]
		},
		gtime: 1797066983917
	},
	{
		sdate: [1405, 9, 22],
		sdata: {
			solar: [1405, 8, 22]
		},
		stime: 1797153383917,
		gdate: [2026, 12, 13],
		gdata: {
			gregorian: [2026, 11, 13]
		},
		gtime: 1797153383917
	},
	{
		sdate: [1405, 9, 23],
		sdata: {
			solar: [1405, 8, 23]
		},
		stime: 1797239783917,
		gdate: [2026, 12, 14],
		gdata: {
			gregorian: [2026, 11, 14]
		},
		gtime: 1797239783917
	},
	{
		sdate: [1405, 9, 24],
		sdata: {
			solar: [1405, 8, 24]
		},
		stime: 1797326183917,
		gdate: [2026, 12, 15],
		gdata: {
			gregorian: [2026, 11, 15]
		},
		gtime: 1797326183917
	},
	{
		sdate: [1405, 9, 25],
		sdata: {
			solar: [1405, 8, 25]
		},
		stime: 1797412583917,
		gdate: [2026, 12, 16],
		gdata: {
			gregorian: [2026, 11, 16]
		},
		gtime: 1797412583917
	},
	{
		sdate: [1405, 9, 26],
		sdata: {
			solar: [1405, 8, 26]
		},
		stime: 1797498983917,
		gdate: [2026, 12, 17],
		gdata: {
			gregorian: [2026, 11, 17]
		},
		gtime: 1797498983917
	},
	{
		sdate: [1405, 9, 27],
		sdata: {
			solar: [1405, 8, 27]
		},
		stime: 1797585383917,
		gdate: [2026, 12, 18],
		gdata: {
			gregorian: [2026, 11, 18]
		},
		gtime: 1797585383917
	},
	{
		sdate: [1405, 9, 28],
		sdata: {
			solar: [1405, 8, 28]
		},
		stime: 1797671783917,
		gdate: [2026, 12, 19],
		gdata: {
			gregorian: [2026, 11, 19]
		},
		gtime: 1797671783917
	},
	{
		sdate: [1405, 9, 29],
		sdata: {
			solar: [1405, 8, 29]
		},
		stime: 1797758183917,
		gdate: [2026, 12, 20],
		gdata: {
			gregorian: [2026, 11, 20]
		},
		gtime: 1797758183917
	},
	{
		sdate: [1405, 9, 30],
		sdata: {
			solar: [1405, 8, 30]
		},
		stime: 1797844583917,
		gdate: [2026, 12, 21],
		gdata: {
			gregorian: [2026, 11, 21]
		},
		gtime: 1797844583917
	},
	{
		sdate: [1405, 10, 1],
		sdata: {
			solar: [1405, 9, 1]
		},
		stime: 1797930983917,
		gdate: [2026, 12, 22],
		gdata: {
			gregorian: [2026, 11, 22]
		},
		gtime: 1797930983917
	},
	{
		sdate: [1405, 10, 2],
		sdata: {
			solar: [1405, 9, 2]
		},
		stime: 1798017383917,
		gdate: [2026, 12, 23],
		gdata: {
			gregorian: [2026, 11, 23]
		},
		gtime: 1798017383917
	},
	{
		sdate: [1405, 10, 3],
		sdata: {
			solar: [1405, 9, 3]
		},
		stime: 1798103783917,
		gdate: [2026, 12, 24],
		gdata: {
			gregorian: [2026, 11, 24]
		},
		gtime: 1798103783917
	},
	{
		sdate: [1405, 10, 4],
		sdata: {
			solar: [1405, 9, 4]
		},
		stime: 1798190183917,
		gdate: [2026, 12, 25],
		gdata: {
			gregorian: [2026, 11, 25]
		},
		gtime: 1798190183917
	},
	{
		sdate: [1405, 10, 5],
		sdata: {
			solar: [1405, 9, 5]
		},
		stime: 1798276583917,
		gdate: [2026, 12, 26],
		gdata: {
			gregorian: [2026, 11, 26]
		},
		gtime: 1798276583917
	},
	{
		sdate: [1405, 10, 6],
		sdata: {
			solar: [1405, 9, 6]
		},
		stime: 1798362983917,
		gdate: [2026, 12, 27],
		gdata: {
			gregorian: [2026, 11, 27]
		},
		gtime: 1798362983917
	},
	{
		sdate: [1405, 10, 7],
		sdata: {
			solar: [1405, 9, 7]
		},
		stime: 1798449383917,
		gdate: [2026, 12, 28],
		gdata: {
			gregorian: [2026, 11, 28]
		},
		gtime: 1798449383917
	},
	{
		sdate: [1405, 10, 8],
		sdata: {
			solar: [1405, 9, 8]
		},
		stime: 1798535783917,
		gdate: [2026, 12, 29],
		gdata: {
			gregorian: [2026, 11, 29]
		},
		gtime: 1798535783917
	},
	{
		sdate: [1405, 10, 9],
		sdata: {
			solar: [1405, 9, 9]
		},
		stime: 1798622183917,
		gdate: [2026, 12, 30],
		gdata: {
			gregorian: [2026, 11, 30]
		},
		gtime: 1798622183917
	},
	{
		sdate: [1405, 10, 10],
		sdata: {
			solar: [1405, 9, 10]
		},
		stime: 1798708583917,
		gdate: [2026, 12, 31],
		gdata: {
			gregorian: [2026, 11, 31]
		},
		gtime: 1798708583917
	},
	{
		sdate: [1405, 10, 11],
		sdata: {
			solar: [1405, 9, 11]
		},
		stime: 1798794983917,
		gdate: [2027, 1, 1],
		gdata: {
			gregorian: [2027, 0, 1]
		},
		gtime: 1798794983917
	},
	{
		sdate: [1405, 10, 12],
		sdata: {
			solar: [1405, 9, 12]
		},
		stime: 1798881383917,
		gdate: [2027, 1, 2],
		gdata: {
			gregorian: [2027, 0, 2]
		},
		gtime: 1798881383917
	},
	{
		sdate: [1405, 10, 13],
		sdata: {
			solar: [1405, 9, 13]
		},
		stime: 1798967783917,
		gdate: [2027, 1, 3],
		gdata: {
			gregorian: [2027, 0, 3]
		},
		gtime: 1798967783917
	},
	{
		sdate: [1405, 10, 14],
		sdata: {
			solar: [1405, 9, 14]
		},
		stime: 1799054183917,
		gdate: [2027, 1, 4],
		gdata: {
			gregorian: [2027, 0, 4]
		},
		gtime: 1799054183917
	},
	{
		sdate: [1405, 10, 15],
		sdata: {
			solar: [1405, 9, 15]
		},
		stime: 1799140583917,
		gdate: [2027, 1, 5],
		gdata: {
			gregorian: [2027, 0, 5]
		},
		gtime: 1799140583917
	},
	{
		sdate: [1405, 10, 16],
		sdata: {
			solar: [1405, 9, 16]
		},
		stime: 1799226983917,
		gdate: [2027, 1, 6],
		gdata: {
			gregorian: [2027, 0, 6]
		},
		gtime: 1799226983917
	},
	{
		sdate: [1405, 10, 17],
		sdata: {
			solar: [1405, 9, 17]
		},
		stime: 1799313383917,
		gdate: [2027, 1, 7],
		gdata: {
			gregorian: [2027, 0, 7]
		},
		gtime: 1799313383917
	},
	{
		sdate: [1405, 10, 18],
		sdata: {
			solar: [1405, 9, 18]
		},
		stime: 1799399783917,
		gdate: [2027, 1, 8],
		gdata: {
			gregorian: [2027, 0, 8]
		},
		gtime: 1799399783917
	},
	{
		sdate: [1405, 10, 19],
		sdata: {
			solar: [1405, 9, 19]
		},
		stime: 1799486183917,
		gdate: [2027, 1, 9],
		gdata: {
			gregorian: [2027, 0, 9]
		},
		gtime: 1799486183917
	},
	{
		sdate: [1405, 10, 20],
		sdata: {
			solar: [1405, 9, 20]
		},
		stime: 1799572583917,
		gdate: [2027, 1, 10],
		gdata: {
			gregorian: [2027, 0, 10]
		},
		gtime: 1799572583917
	},
	{
		sdate: [1405, 10, 21],
		sdata: {
			solar: [1405, 9, 21]
		},
		stime: 1799658983917,
		gdate: [2027, 1, 11],
		gdata: {
			gregorian: [2027, 0, 11]
		},
		gtime: 1799658983917
	},
	{
		sdate: [1405, 10, 22],
		sdata: {
			solar: [1405, 9, 22]
		},
		stime: 1799745383917,
		gdate: [2027, 1, 12],
		gdata: {
			gregorian: [2027, 0, 12]
		},
		gtime: 1799745383917
	},
	{
		sdate: [1405, 10, 23],
		sdata: {
			solar: [1405, 9, 23]
		},
		stime: 1799831783917,
		gdate: [2027, 1, 13],
		gdata: {
			gregorian: [2027, 0, 13]
		},
		gtime: 1799831783917
	},
	{
		sdate: [1405, 10, 24],
		sdata: {
			solar: [1405, 9, 24]
		},
		stime: 1799918183917,
		gdate: [2027, 1, 14],
		gdata: {
			gregorian: [2027, 0, 14]
		},
		gtime: 1799918183917
	},
	{
		sdate: [1405, 10, 25],
		sdata: {
			solar: [1405, 9, 25]
		},
		stime: 1800004583917,
		gdate: [2027, 1, 15],
		gdata: {
			gregorian: [2027, 0, 15]
		},
		gtime: 1800004583917
	},
	{
		sdate: [1405, 10, 26],
		sdata: {
			solar: [1405, 9, 26]
		},
		stime: 1800090983917,
		gdate: [2027, 1, 16],
		gdata: {
			gregorian: [2027, 0, 16]
		},
		gtime: 1800090983917
	},
	{
		sdate: [1405, 10, 27],
		sdata: {
			solar: [1405, 9, 27]
		},
		stime: 1800177383917,
		gdate: [2027, 1, 17],
		gdata: {
			gregorian: [2027, 0, 17]
		},
		gtime: 1800177383917
	},
	{
		sdate: [1405, 10, 28],
		sdata: {
			solar: [1405, 9, 28]
		},
		stime: 1800263783917,
		gdate: [2027, 1, 18],
		gdata: {
			gregorian: [2027, 0, 18]
		},
		gtime: 1800263783917
	},
	{
		sdate: [1405, 10, 29],
		sdata: {
			solar: [1405, 9, 29]
		},
		stime: 1800350183917,
		gdate: [2027, 1, 19],
		gdata: {
			gregorian: [2027, 0, 19]
		},
		gtime: 1800350183917
	},
	{
		sdate: [1405, 10, 30],
		sdata: {
			solar: [1405, 9, 30]
		},
		stime: 1800436583917,
		gdate: [2027, 1, 20],
		gdata: {
			gregorian: [2027, 0, 20]
		},
		gtime: 1800436583917
	},
	{
		sdate: [1405, 11, 1],
		sdata: {
			solar: [1405, 10, 1]
		},
		stime: 1800522983917,
		gdate: [2027, 1, 21],
		gdata: {
			gregorian: [2027, 0, 21]
		},
		gtime: 1800522983917
	},
	{
		sdate: [1405, 11, 2],
		sdata: {
			solar: [1405, 10, 2]
		},
		stime: 1800609383917,
		gdate: [2027, 1, 22],
		gdata: {
			gregorian: [2027, 0, 22]
		},
		gtime: 1800609383917
	},
	{
		sdate: [1405, 11, 3],
		sdata: {
			solar: [1405, 10, 3]
		},
		stime: 1800695783917,
		gdate: [2027, 1, 23],
		gdata: {
			gregorian: [2027, 0, 23]
		},
		gtime: 1800695783917
	},
	{
		sdate: [1405, 11, 4],
		sdata: {
			solar: [1405, 10, 4]
		},
		stime: 1800782183917,
		gdate: [2027, 1, 24],
		gdata: {
			gregorian: [2027, 0, 24]
		},
		gtime: 1800782183917
	},
	{
		sdate: [1405, 11, 5],
		sdata: {
			solar: [1405, 10, 5]
		},
		stime: 1800868583917,
		gdate: [2027, 1, 25],
		gdata: {
			gregorian: [2027, 0, 25]
		},
		gtime: 1800868583917
	},
	{
		sdate: [1405, 11, 6],
		sdata: {
			solar: [1405, 10, 6]
		},
		stime: 1800954983917,
		gdate: [2027, 1, 26],
		gdata: {
			gregorian: [2027, 0, 26]
		},
		gtime: 1800954983917
	},
	{
		sdate: [1405, 11, 7],
		sdata: {
			solar: [1405, 10, 7]
		},
		stime: 1801041383917,
		gdate: [2027, 1, 27],
		gdata: {
			gregorian: [2027, 0, 27]
		},
		gtime: 1801041383917
	},
	{
		sdate: [1405, 11, 8],
		sdata: {
			solar: [1405, 10, 8]
		},
		stime: 1801127783917,
		gdate: [2027, 1, 28],
		gdata: {
			gregorian: [2027, 0, 28]
		},
		gtime: 1801127783917
	},
	{
		sdate: [1405, 11, 9],
		sdata: {
			solar: [1405, 10, 9]
		},
		stime: 1801214183917,
		gdate: [2027, 1, 29],
		gdata: {
			gregorian: [2027, 0, 29]
		},
		gtime: 1801214183917
	},
	{
		sdate: [1405, 11, 10],
		sdata: {
			solar: [1405, 10, 10]
		},
		stime: 1801300583917,
		gdate: [2027, 1, 30],
		gdata: {
			gregorian: [2027, 0, 30]
		},
		gtime: 1801300583917
	},
	{
		sdate: [1405, 11, 11],
		sdata: {
			solar: [1405, 10, 11]
		},
		stime: 1801386983917,
		gdate: [2027, 1, 31],
		gdata: {
			gregorian: [2027, 0, 31]
		},
		gtime: 1801386983917
	},
	{
		sdate: [1405, 11, 12],
		sdata: {
			solar: [1405, 10, 12]
		},
		stime: 1801473383917,
		gdate: [2027, 2, 1],
		gdata: {
			gregorian: [2027, 1, 1]
		},
		gtime: 1801473383917
	},
	{
		sdate: [1405, 11, 13],
		sdata: {
			solar: [1405, 10, 13]
		},
		stime: 1801559783917,
		gdate: [2027, 2, 2],
		gdata: {
			gregorian: [2027, 1, 2]
		},
		gtime: 1801559783917
	},
	{
		sdate: [1405, 11, 14],
		sdata: {
			solar: [1405, 10, 14]
		},
		stime: 1801646183917,
		gdate: [2027, 2, 3],
		gdata: {
			gregorian: [2027, 1, 3]
		},
		gtime: 1801646183917
	},
	{
		sdate: [1405, 11, 15],
		sdata: {
			solar: [1405, 10, 15]
		},
		stime: 1801732583917,
		gdate: [2027, 2, 4],
		gdata: {
			gregorian: [2027, 1, 4]
		},
		gtime: 1801732583917
	},
	{
		sdate: [1405, 11, 16],
		sdata: {
			solar: [1405, 10, 16]
		},
		stime: 1801818983917,
		gdate: [2027, 2, 5],
		gdata: {
			gregorian: [2027, 1, 5]
		},
		gtime: 1801818983917
	},
	{
		sdate: [1405, 11, 17],
		sdata: {
			solar: [1405, 10, 17]
		},
		stime: 1801905383917,
		gdate: [2027, 2, 6],
		gdata: {
			gregorian: [2027, 1, 6]
		},
		gtime: 1801905383917
	},
	{
		sdate: [1405, 11, 18],
		sdata: {
			solar: [1405, 10, 18]
		},
		stime: 1801991783917,
		gdate: [2027, 2, 7],
		gdata: {
			gregorian: [2027, 1, 7]
		},
		gtime: 1801991783917
	},
	{
		sdate: [1405, 11, 19],
		sdata: {
			solar: [1405, 10, 19]
		},
		stime: 1802078183917,
		gdate: [2027, 2, 8],
		gdata: {
			gregorian: [2027, 1, 8]
		},
		gtime: 1802078183917
	},
	{
		sdate: [1405, 11, 20],
		sdata: {
			solar: [1405, 10, 20]
		},
		stime: 1802164583917,
		gdate: [2027, 2, 9],
		gdata: {
			gregorian: [2027, 1, 9]
		},
		gtime: 1802164583917
	},
	{
		sdate: [1405, 11, 21],
		sdata: {
			solar: [1405, 10, 21]
		},
		stime: 1802250983917,
		gdate: [2027, 2, 10],
		gdata: {
			gregorian: [2027, 1, 10]
		},
		gtime: 1802250983917
	},
	{
		sdate: [1405, 11, 22],
		sdata: {
			solar: [1405, 10, 22]
		},
		stime: 1802337383917,
		gdate: [2027, 2, 11],
		gdata: {
			gregorian: [2027, 1, 11]
		},
		gtime: 1802337383917
	},
	{
		sdate: [1405, 11, 23],
		sdata: {
			solar: [1405, 10, 23]
		},
		stime: 1802423783917,
		gdate: [2027, 2, 12],
		gdata: {
			gregorian: [2027, 1, 12]
		},
		gtime: 1802423783917
	},
	{
		sdate: [1405, 11, 24],
		sdata: {
			solar: [1405, 10, 24]
		},
		stime: 1802510183917,
		gdate: [2027, 2, 13],
		gdata: {
			gregorian: [2027, 1, 13]
		},
		gtime: 1802510183917
	},
	{
		sdate: [1405, 11, 25],
		sdata: {
			solar: [1405, 10, 25]
		},
		stime: 1802596583917,
		gdate: [2027, 2, 14],
		gdata: {
			gregorian: [2027, 1, 14]
		},
		gtime: 1802596583917
	},
	{
		sdate: [1405, 11, 26],
		sdata: {
			solar: [1405, 10, 26]
		},
		stime: 1802682983917,
		gdate: [2027, 2, 15],
		gdata: {
			gregorian: [2027, 1, 15]
		},
		gtime: 1802682983917
	},
	{
		sdate: [1405, 11, 27],
		sdata: {
			solar: [1405, 10, 27]
		},
		stime: 1802769383917,
		gdate: [2027, 2, 16],
		gdata: {
			gregorian: [2027, 1, 16]
		},
		gtime: 1802769383917
	},
	{
		sdate: [1405, 11, 28],
		sdata: {
			solar: [1405, 10, 28]
		},
		stime: 1802855783917,
		gdate: [2027, 2, 17],
		gdata: {
			gregorian: [2027, 1, 17]
		},
		gtime: 1802855783917
	},
	{
		sdate: [1405, 11, 29],
		sdata: {
			solar: [1405, 10, 29]
		},
		stime: 1802942183917,
		gdate: [2027, 2, 18],
		gdata: {
			gregorian: [2027, 1, 18]
		},
		gtime: 1802942183917
	},
	{
		sdate: [1405, 11, 30],
		sdata: {
			solar: [1405, 10, 30]
		},
		stime: 1803028583917,
		gdate: [2027, 2, 19],
		gdata: {
			gregorian: [2027, 1, 19]
		},
		gtime: 1803028583917
	},
	{
		sdate: [1405, 12, 1],
		sdata: {
			solar: [1405, 11, 1]
		},
		stime: 1803114983917,
		gdate: [2027, 2, 20],
		gdata: {
			gregorian: [2027, 1, 20]
		},
		gtime: 1803114983917
	},
	{
		sdate: [1405, 12, 2],
		sdata: {
			solar: [1405, 11, 2]
		},
		stime: 1803201383917,
		gdate: [2027, 2, 21],
		gdata: {
			gregorian: [2027, 1, 21]
		},
		gtime: 1803201383917
	},
	{
		sdate: [1405, 12, 3],
		sdata: {
			solar: [1405, 11, 3]
		},
		stime: 1803287783917,
		gdate: [2027, 2, 22],
		gdata: {
			gregorian: [2027, 1, 22]
		},
		gtime: 1803287783917
	},
	{
		sdate: [1405, 12, 4],
		sdata: {
			solar: [1405, 11, 4]
		},
		stime: 1803374183917,
		gdate: [2027, 2, 23],
		gdata: {
			gregorian: [2027, 1, 23]
		},
		gtime: 1803374183917
	},
	{
		sdate: [1405, 12, 5],
		sdata: {
			solar: [1405, 11, 5]
		},
		stime: 1803460583917,
		gdate: [2027, 2, 24],
		gdata: {
			gregorian: [2027, 1, 24]
		},
		gtime: 1803460583917
	},
	{
		sdate: [1405, 12, 6],
		sdata: {
			solar: [1405, 11, 6]
		},
		stime: 1803546983917,
		gdate: [2027, 2, 25],
		gdata: {
			gregorian: [2027, 1, 25]
		},
		gtime: 1803546983917
	},
	{
		sdate: [1405, 12, 7],
		sdata: {
			solar: [1405, 11, 7]
		},
		stime: 1803633383917,
		gdate: [2027, 2, 26],
		gdata: {
			gregorian: [2027, 1, 26]
		},
		gtime: 1803633383917
	},
	{
		sdate: [1405, 12, 8],
		sdata: {
			solar: [1405, 11, 8]
		},
		stime: 1803719783917,
		gdate: [2027, 2, 27],
		gdata: {
			gregorian: [2027, 1, 27]
		},
		gtime: 1803719783917
	},
	{
		sdate: [1405, 12, 9],
		sdata: {
			solar: [1405, 11, 9]
		},
		stime: 1803806183917,
		gdate: [2027, 2, 28],
		gdata: {
			gregorian: [2027, 1, 28]
		},
		gtime: 1803806183917
	},
	{
		sdate: [1405, 12, 10],
		sdata: {
			solar: [1405, 11, 10]
		},
		stime: 1803892583917,
		gdate: [2027, 3, 1],
		gdata: {
			gregorian: [2027, 2, 1]
		},
		gtime: 1803892583917
	},
	{
		sdate: [1405, 12, 11],
		sdata: {
			solar: [1405, 11, 11]
		},
		stime: 1803978983917,
		gdate: [2027, 3, 2],
		gdata: {
			gregorian: [2027, 2, 2]
		},
		gtime: 1803978983917
	},
	{
		sdate: [1405, 12, 12],
		sdata: {
			solar: [1405, 11, 12]
		},
		stime: 1804065383917,
		gdate: [2027, 3, 3],
		gdata: {
			gregorian: [2027, 2, 3]
		},
		gtime: 1804065383917
	},
	{
		sdate: [1405, 12, 13],
		sdata: {
			solar: [1405, 11, 13]
		},
		stime: 1804151783917,
		gdate: [2027, 3, 4],
		gdata: {
			gregorian: [2027, 2, 4]
		},
		gtime: 1804151783917
	},
	{
		sdate: [1405, 12, 14],
		sdata: {
			solar: [1405, 11, 14]
		},
		stime: 1804238183917,
		gdate: [2027, 3, 5],
		gdata: {
			gregorian: [2027, 2, 5]
		},
		gtime: 1804238183917
	},
	{
		sdate: [1405, 12, 15],
		sdata: {
			solar: [1405, 11, 15]
		},
		stime: 1804324583917,
		gdate: [2027, 3, 6],
		gdata: {
			gregorian: [2027, 2, 6]
		},
		gtime: 1804324583917
	},
	{
		sdate: [1405, 12, 16],
		sdata: {
			solar: [1405, 11, 16]
		},
		stime: 1804410983917,
		gdate: [2027, 3, 7],
		gdata: {
			gregorian: [2027, 2, 7]
		},
		gtime: 1804410983917
	},
	{
		sdate: [1405, 12, 17],
		sdata: {
			solar: [1405, 11, 17]
		},
		stime: 1804497383917,
		gdate: [2027, 3, 8],
		gdata: {
			gregorian: [2027, 2, 8]
		},
		gtime: 1804497383917
	},
	{
		sdate: [1405, 12, 18],
		sdata: {
			solar: [1405, 11, 18]
		},
		stime: 1804583783917,
		gdate: [2027, 3, 9],
		gdata: {
			gregorian: [2027, 2, 9]
		},
		gtime: 1804583783917
	},
	{
		sdate: [1405, 12, 19],
		sdata: {
			solar: [1405, 11, 19]
		},
		stime: 1804670183917,
		gdate: [2027, 3, 10],
		gdata: {
			gregorian: [2027, 2, 10]
		},
		gtime: 1804670183917
	},
	{
		sdate: [1405, 12, 20],
		sdata: {
			solar: [1405, 11, 20]
		},
		stime: 1804756583917,
		gdate: [2027, 3, 11],
		gdata: {
			gregorian: [2027, 2, 11]
		},
		gtime: 1804756583917
	},
	{
		sdate: [1405, 12, 21],
		sdata: {
			solar: [1405, 11, 21]
		},
		stime: 1804842983917,
		gdate: [2027, 3, 12],
		gdata: {
			gregorian: [2027, 2, 12]
		},
		gtime: 1804842983917
	},
	{
		sdate: [1405, 12, 22],
		sdata: {
			solar: [1405, 11, 22]
		},
		stime: 1804929383917,
		gdate: [2027, 3, 13],
		gdata: {
			gregorian: [2027, 2, 13]
		},
		gtime: 1804929383917
	},
	{
		sdate: [1405, 12, 23],
		sdata: {
			solar: [1405, 11, 23]
		},
		stime: 1805015783917,
		gdate: [2027, 3, 14],
		gdata: {
			gregorian: [2027, 2, 14]
		},
		gtime: 1805015783917
	},
	{
		sdate: [1405, 12, 24],
		sdata: {
			solar: [1405, 11, 24]
		},
		stime: 1805102183917,
		gdate: [2027, 3, 15],
		gdata: {
			gregorian: [2027, 2, 15]
		},
		gtime: 1805102183917
	},
	{
		sdate: [1405, 12, 25],
		sdata: {
			solar: [1405, 11, 25]
		},
		stime: 1805188583917,
		gdate: [2027, 3, 16],
		gdata: {
			gregorian: [2027, 2, 16]
		},
		gtime: 1805188583917
	},
	{
		sdate: [1405, 12, 26],
		sdata: {
			solar: [1405, 11, 26]
		},
		stime: 1805274983917,
		gdate: [2027, 3, 17],
		gdata: {
			gregorian: [2027, 2, 17]
		},
		gtime: 1805274983917
	},
	{
		sdate: [1405, 12, 27],
		sdata: {
			solar: [1405, 11, 27]
		},
		stime: 1805361383917,
		gdate: [2027, 3, 18],
		gdata: {
			gregorian: [2027, 2, 18]
		},
		gtime: 1805361383917
	},
	{
		sdate: [1405, 12, 28],
		sdata: {
			solar: [1405, 11, 28]
		},
		stime: 1805447783917,
		gdate: [2027, 3, 19],
		gdata: {
			gregorian: [2027, 2, 19]
		},
		gtime: 1805447783917
	},
	{
		sdate: [1405, 12, 29],
		sdata: {
			solar: [1405, 11, 29]
		},
		stime: 1805534183917,
		gdate: [2027, 3, 20],
		gdata: {
			gregorian: [2027, 2, 20]
		},
		gtime: 1805534183917
	}
];
