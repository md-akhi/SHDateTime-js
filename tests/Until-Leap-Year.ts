/*
for (let year = 1200; year <= 1700; year += 1) {
	[
		[1, 1],
		[12, 29],
		[12, 30]
	].forEach(([month, day]) => {
		let shdate = new SHDate(year, month - 1, day);
		const [years, months, days, hours, minutes, seconds, milliseconds, leaps] =
			shdate.format("yy=mm=dd=hh=ii=ss=ms=lps");

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
					months * 1 + 1
				},${days},${hours},${minutes},${seconds},${milliseconds}],
				sdata:{
					solar:[${years},${months},${days}],
					Leap:${shdate.isLeapYear()},
					Leaps:${leaps}
				} ,
					gdate:[${gyears},${
					gmonths * 1 + 1
				},${gdays},${ghours},${gminutes},${gseconds},${milliseconds}],
				gdata:{
					gregorian:[${gyears},${gmonths},${gdays}]
				}
			},`
			);
	});
}
	*/
export const leapYear = [
	{
		sdate: [1200, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 0, 1],
			Leap: false,
			Leaps: 290
		},
		gdate: [1821, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1821, 2, 21]
		}
	},
	{
		sdate: [1200, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1200, 11, 29],
			Leap: false,
			Leaps: 290
		},
		gdate: [1822, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 20]
		}
	},

	{
		sdate: [1201, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1201, 0, 1],
			Leap: true,
			Leaps: 290
		},
		gdate: [1822, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1822, 2, 21]
		}
	},
	{
		sdate: [1201, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1201, 11, 29],
			Leap: true,
			Leaps: 290
		},
		gdate: [1823, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1823, 2, 20]
		}
	},
	{
		sdate: [1201, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1201, 11, 30],
			Leap: true,
			Leaps: 290
		},
		gdate: [1823, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1823, 2, 21]
		}
	},
	{
		sdate: [1202, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1202, 0, 1],
			Leap: false,
			Leaps: 291
		},
		gdate: [1823, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1823, 2, 22]
		}
	},
	{
		sdate: [1202, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1202, 11, 29],
			Leap: false,
			Leaps: 291
		},
		gdate: [1824, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1824, 2, 21]
		}
	},

	{
		sdate: [1203, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1203, 0, 1],
			Leap: false,
			Leaps: 291
		},
		gdate: [1824, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1824, 2, 22]
		}
	},
	{
		sdate: [1203, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1203, 11, 29],
			Leap: false,
			Leaps: 291
		},
		gdate: [1825, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1825, 2, 20]
		}
	},

	{
		sdate: [1204, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1204, 0, 1],
			Leap: false,
			Leaps: 291
		},
		gdate: [1825, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1825, 2, 21]
		}
	},
	{
		sdate: [1204, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1204, 11, 29],
			Leap: false,
			Leaps: 291
		},
		gdate: [1826, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1826, 2, 20]
		}
	},

	{
		sdate: [1205, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1205, 0, 1],
			Leap: true,
			Leaps: 291
		},
		gdate: [1826, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1826, 2, 21]
		}
	},
	{
		sdate: [1205, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1205, 11, 29],
			Leap: true,
			Leaps: 291
		},
		gdate: [1827, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1827, 2, 20]
		}
	},
	{
		sdate: [1205, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1205, 11, 30],
			Leap: true,
			Leaps: 291
		},
		gdate: [1827, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1827, 2, 21]
		}
	},
	{
		sdate: [1206, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1206, 0, 1],
			Leap: false,
			Leaps: 292
		},
		gdate: [1827, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1827, 2, 22]
		}
	},
	{
		sdate: [1206, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1206, 11, 29],
			Leap: false,
			Leaps: 292
		},
		gdate: [1828, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1828, 2, 21]
		}
	},

	{
		sdate: [1207, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1207, 0, 1],
			Leap: false,
			Leaps: 292
		},
		gdate: [1828, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1828, 2, 22]
		}
	},
	{
		sdate: [1207, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1207, 11, 29],
			Leap: false,
			Leaps: 292
		},
		gdate: [1829, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1829, 2, 20]
		}
	},

	{
		sdate: [1208, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1208, 0, 1],
			Leap: false,
			Leaps: 292
		},
		gdate: [1829, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1829, 2, 21]
		}
	},
	{
		sdate: [1208, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1208, 11, 29],
			Leap: false,
			Leaps: 292
		},
		gdate: [1830, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1830, 2, 20]
		}
	},

	{
		sdate: [1209, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1209, 0, 1],
			Leap: true,
			Leaps: 292
		},
		gdate: [1830, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1830, 2, 21]
		}
	},
	{
		sdate: [1209, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1209, 11, 29],
			Leap: true,
			Leaps: 292
		},
		gdate: [1831, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1831, 2, 20]
		}
	},
	{
		sdate: [1209, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1209, 11, 30],
			Leap: true,
			Leaps: 292
		},
		gdate: [1831, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1831, 2, 21]
		}
	},
	{
		sdate: [1210, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1210, 0, 1],
			Leap: false,
			Leaps: 293
		},
		gdate: [1831, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1831, 2, 22]
		}
	},
	{
		sdate: [1210, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1210, 11, 29],
			Leap: false,
			Leaps: 293
		},
		gdate: [1832, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1832, 2, 21]
		}
	},

	{
		sdate: [1211, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1211, 0, 1],
			Leap: false,
			Leaps: 293
		},
		gdate: [1832, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1832, 2, 22]
		}
	},
	{
		sdate: [1211, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1211, 11, 29],
			Leap: false,
			Leaps: 293
		},
		gdate: [1833, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1833, 2, 20]
		}
	},

	{
		sdate: [1212, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1212, 0, 1],
			Leap: false,
			Leaps: 293
		},
		gdate: [1833, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1833, 2, 21]
		}
	},
	{
		sdate: [1212, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1212, 11, 29],
			Leap: false,
			Leaps: 293
		},
		gdate: [1834, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1834, 2, 20]
		}
	},

	{
		sdate: [1213, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1213, 0, 1],
			Leap: false,
			Leaps: 293
		},
		gdate: [1834, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1834, 2, 21]
		}
	},
	{
		sdate: [1213, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1213, 11, 29],
			Leap: false,
			Leaps: 293
		},
		gdate: [1835, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1835, 2, 20]
		}
	},

	{
		sdate: [1214, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1214, 0, 1],
			Leap: true,
			Leaps: 293
		},
		gdate: [1835, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1835, 2, 21]
		}
	},
	{
		sdate: [1214, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1214, 11, 29],
			Leap: true,
			Leaps: 293
		},
		gdate: [1836, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1836, 2, 20]
		}
	},
	{
		sdate: [1214, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1214, 11, 30],
			Leap: true,
			Leaps: 293
		},
		gdate: [1836, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1836, 2, 21]
		}
	},
	{
		sdate: [1215, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1215, 0, 1],
			Leap: false,
			Leaps: 294
		},
		gdate: [1836, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1836, 2, 22]
		}
	},
	{
		sdate: [1215, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1215, 11, 29],
			Leap: false,
			Leaps: 294
		},
		gdate: [1837, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1837, 2, 20]
		}
	},

	{
		sdate: [1216, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1216, 0, 1],
			Leap: false,
			Leaps: 294
		},
		gdate: [1837, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1837, 2, 21]
		}
	},
	{
		sdate: [1216, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1216, 11, 29],
			Leap: false,
			Leaps: 294
		},
		gdate: [1838, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1838, 2, 20]
		}
	},

	{
		sdate: [1217, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1217, 0, 1],
			Leap: false,
			Leaps: 294
		},
		gdate: [1838, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1838, 2, 21]
		}
	},
	{
		sdate: [1217, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1217, 11, 29],
			Leap: false,
			Leaps: 294
		},
		gdate: [1839, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1839, 2, 20]
		}
	},

	{
		sdate: [1218, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1218, 0, 1],
			Leap: true,
			Leaps: 294
		},
		gdate: [1839, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1839, 2, 21]
		}
	},
	{
		sdate: [1218, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1218, 11, 29],
			Leap: true,
			Leaps: 294
		},
		gdate: [1840, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1840, 2, 20]
		}
	},
	{
		sdate: [1218, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1218, 11, 30],
			Leap: true,
			Leaps: 294
		},
		gdate: [1840, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1840, 2, 21]
		}
	},
	{
		sdate: [1219, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1219, 0, 1],
			Leap: false,
			Leaps: 295
		},
		gdate: [1840, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1840, 2, 22]
		}
	},
	{
		sdate: [1219, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1219, 11, 29],
			Leap: false,
			Leaps: 295
		},
		gdate: [1841, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 20]
		}
	},

	{
		sdate: [1220, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 0, 1],
			Leap: false,
			Leaps: 295
		},
		gdate: [1841, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1841, 2, 21]
		}
	},
	{
		sdate: [1220, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1220, 11, 29],
			Leap: false,
			Leaps: 295
		},
		gdate: [1842, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 20]
		}
	},

	{
		sdate: [1221, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1221, 0, 1],
			Leap: false,
			Leaps: 295
		},
		gdate: [1842, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1842, 2, 21]
		}
	},
	{
		sdate: [1221, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1221, 11, 29],
			Leap: false,
			Leaps: 295
		},
		gdate: [1843, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1843, 2, 20]
		}
	},

	{
		sdate: [1222, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1222, 0, 1],
			Leap: true,
			Leaps: 295
		},
		gdate: [1843, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1843, 2, 21]
		}
	},
	{
		sdate: [1222, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1222, 11, 29],
			Leap: true,
			Leaps: 295
		},
		gdate: [1844, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1844, 2, 20]
		}
	},
	{
		sdate: [1222, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1222, 11, 30],
			Leap: true,
			Leaps: 295
		},
		gdate: [1844, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1844, 2, 21]
		}
	},
	{
		sdate: [1223, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1223, 0, 1],
			Leap: false,
			Leaps: 296
		},
		gdate: [1844, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1844, 2, 22]
		}
	},
	{
		sdate: [1223, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1223, 11, 29],
			Leap: false,
			Leaps: 296
		},
		gdate: [1845, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1845, 2, 20]
		}
	},

	{
		sdate: [1224, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1224, 0, 1],
			Leap: false,
			Leaps: 296
		},
		gdate: [1845, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1845, 2, 21]
		}
	},
	{
		sdate: [1224, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1224, 11, 29],
			Leap: false,
			Leaps: 296
		},
		gdate: [1846, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1846, 2, 20]
		}
	},

	{
		sdate: [1225, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1225, 0, 1],
			Leap: false,
			Leaps: 296
		},
		gdate: [1846, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1846, 2, 21]
		}
	},
	{
		sdate: [1225, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1225, 11, 29],
			Leap: false,
			Leaps: 296
		},
		gdate: [1847, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1847, 2, 20]
		}
	},

	{
		sdate: [1226, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1226, 0, 1],
			Leap: true,
			Leaps: 296
		},
		gdate: [1847, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1847, 2, 21]
		}
	},
	{
		sdate: [1226, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1226, 11, 29],
			Leap: true,
			Leaps: 296
		},
		gdate: [1848, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1848, 2, 20]
		}
	},
	{
		sdate: [1226, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1226, 11, 30],
			Leap: true,
			Leaps: 296
		},
		gdate: [1848, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1848, 2, 21]
		}
	},
	{
		sdate: [1227, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1227, 0, 1],
			Leap: false,
			Leaps: 297
		},
		gdate: [1848, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1848, 2, 22]
		}
	},
	{
		sdate: [1227, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1227, 11, 29],
			Leap: false,
			Leaps: 297
		},
		gdate: [1849, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1849, 2, 20]
		}
	},

	{
		sdate: [1228, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1228, 0, 1],
			Leap: false,
			Leaps: 297
		},
		gdate: [1849, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1849, 2, 21]
		}
	},
	{
		sdate: [1228, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1228, 11, 29],
			Leap: false,
			Leaps: 297
		},
		gdate: [1850, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1850, 2, 20]
		}
	},

	{
		sdate: [1229, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1229, 0, 1],
			Leap: false,
			Leaps: 297
		},
		gdate: [1850, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1850, 2, 21]
		}
	},
	{
		sdate: [1229, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1229, 11, 29],
			Leap: false,
			Leaps: 297
		},
		gdate: [1851, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1851, 2, 20]
		}
	},

	{
		sdate: [1230, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1230, 0, 1],
			Leap: true,
			Leaps: 297
		},
		gdate: [1851, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1851, 2, 21]
		}
	},
	{
		sdate: [1230, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1230, 11, 29],
			Leap: true,
			Leaps: 297
		},
		gdate: [1852, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1852, 2, 20]
		}
	},
	{
		sdate: [1230, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1230, 11, 30],
			Leap: true,
			Leaps: 297
		},
		gdate: [1852, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1852, 2, 21]
		}
	},
	{
		sdate: [1231, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1231, 0, 1],
			Leap: false,
			Leaps: 298
		},
		gdate: [1852, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1852, 2, 22]
		}
	},
	{
		sdate: [1231, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1231, 11, 29],
			Leap: false,
			Leaps: 298
		},
		gdate: [1853, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1853, 2, 20]
		}
	},

	{
		sdate: [1232, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1232, 0, 1],
			Leap: false,
			Leaps: 298
		},
		gdate: [1853, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1853, 2, 21]
		}
	},
	{
		sdate: [1232, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1232, 11, 29],
			Leap: false,
			Leaps: 298
		},
		gdate: [1854, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1854, 2, 20]
		}
	},

	{
		sdate: [1233, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1233, 0, 1],
			Leap: false,
			Leaps: 298
		},
		gdate: [1854, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1854, 2, 21]
		}
	},
	{
		sdate: [1233, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1233, 11, 29],
			Leap: false,
			Leaps: 298
		},
		gdate: [1855, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1855, 2, 20]
		}
	},

	{
		sdate: [1234, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1234, 0, 1],
			Leap: true,
			Leaps: 298
		},
		gdate: [1855, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1855, 2, 21]
		}
	},
	{
		sdate: [1234, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1234, 11, 29],
			Leap: true,
			Leaps: 298
		},
		gdate: [1856, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1856, 2, 20]
		}
	},
	{
		sdate: [1234, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1234, 11, 30],
			Leap: true,
			Leaps: 298
		},
		gdate: [1856, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1856, 2, 21]
		}
	},
	{
		sdate: [1235, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1235, 0, 1],
			Leap: false,
			Leaps: 299
		},
		gdate: [1856, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1856, 2, 22]
		}
	},
	{
		sdate: [1235, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1235, 11, 29],
			Leap: false,
			Leaps: 299
		},
		gdate: [1857, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1857, 2, 20]
		}
	},

	{
		sdate: [1236, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1236, 0, 1],
			Leap: false,
			Leaps: 299
		},
		gdate: [1857, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1857, 2, 21]
		}
	},
	{
		sdate: [1236, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1236, 11, 29],
			Leap: false,
			Leaps: 299
		},
		gdate: [1858, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1858, 2, 20]
		}
	},

	{
		sdate: [1237, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1237, 0, 1],
			Leap: false,
			Leaps: 299
		},
		gdate: [1858, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1858, 2, 21]
		}
	},
	{
		sdate: [1237, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1237, 11, 29],
			Leap: false,
			Leaps: 299
		},
		gdate: [1859, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1859, 2, 20]
		}
	},

	{
		sdate: [1238, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1238, 0, 1],
			Leap: true,
			Leaps: 299
		},
		gdate: [1859, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1859, 2, 21]
		}
	},
	{
		sdate: [1238, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1238, 11, 29],
			Leap: true,
			Leaps: 299
		},
		gdate: [1860, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1860, 2, 20]
		}
	},
	{
		sdate: [1238, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1238, 11, 30],
			Leap: true,
			Leaps: 299
		},
		gdate: [1860, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1860, 2, 21]
		}
	},
	{
		sdate: [1239, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1239, 0, 1],
			Leap: false,
			Leaps: 300
		},
		gdate: [1860, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1860, 2, 22]
		}
	},
	{
		sdate: [1239, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1239, 11, 29],
			Leap: false,
			Leaps: 300
		},
		gdate: [1861, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 20]
		}
	},

	{
		sdate: [1240, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 0, 1],
			Leap: false,
			Leaps: 300
		},
		gdate: [1861, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1861, 2, 21]
		}
	},
	{
		sdate: [1240, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1240, 11, 29],
			Leap: false,
			Leaps: 300
		},
		gdate: [1862, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 20]
		}
	},

	{
		sdate: [1241, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1241, 0, 1],
			Leap: false,
			Leaps: 300
		},
		gdate: [1862, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1862, 2, 21]
		}
	},
	{
		sdate: [1241, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1241, 11, 29],
			Leap: false,
			Leaps: 300
		},
		gdate: [1863, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1863, 2, 20]
		}
	},

	{
		sdate: [1242, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1242, 0, 1],
			Leap: true,
			Leaps: 300
		},
		gdate: [1863, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1863, 2, 21]
		}
	},
	{
		sdate: [1242, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1242, 11, 29],
			Leap: true,
			Leaps: 300
		},
		gdate: [1864, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1864, 2, 20]
		}
	},
	{
		sdate: [1242, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1242, 11, 30],
			Leap: true,
			Leaps: 300
		},
		gdate: [1864, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1864, 2, 21]
		}
	},
	{
		sdate: [1243, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1243, 0, 1],
			Leap: false,
			Leaps: 301
		},
		gdate: [1864, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1864, 2, 22]
		}
	},
	{
		sdate: [1243, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1243, 11, 29],
			Leap: false,
			Leaps: 301
		},
		gdate: [1865, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1865, 2, 20]
		}
	},

	{
		sdate: [1244, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1244, 0, 1],
			Leap: false,
			Leaps: 301
		},
		gdate: [1865, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1865, 2, 21]
		}
	},
	{
		sdate: [1244, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1244, 11, 29],
			Leap: false,
			Leaps: 301
		},
		gdate: [1866, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1866, 2, 20]
		}
	},

	{
		sdate: [1245, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1245, 0, 1],
			Leap: false,
			Leaps: 301
		},
		gdate: [1866, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1866, 2, 21]
		}
	},
	{
		sdate: [1245, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1245, 11, 29],
			Leap: false,
			Leaps: 301
		},
		gdate: [1867, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1867, 2, 20]
		}
	},

	{
		sdate: [1246, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1246, 0, 1],
			Leap: false,
			Leaps: 301
		},
		gdate: [1867, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1867, 2, 21]
		}
	},
	{
		sdate: [1246, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1246, 11, 29],
			Leap: false,
			Leaps: 301
		},
		gdate: [1868, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1868, 2, 20]
		}
	},

	{
		sdate: [1247, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1247, 0, 1],
			Leap: true,
			Leaps: 301
		},
		gdate: [1868, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1868, 2, 21]
		}
	},
	{
		sdate: [1247, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1247, 11, 29],
			Leap: true,
			Leaps: 301
		},
		gdate: [1869, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1869, 2, 19]
		}
	},
	{
		sdate: [1247, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1247, 11, 30],
			Leap: true,
			Leaps: 301
		},
		gdate: [1869, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1869, 2, 20]
		}
	},
	{
		sdate: [1248, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1248, 0, 1],
			Leap: false,
			Leaps: 302
		},
		gdate: [1869, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1869, 2, 21]
		}
	},
	{
		sdate: [1248, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1248, 11, 29],
			Leap: false,
			Leaps: 302
		},
		gdate: [1870, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1870, 2, 20]
		}
	},

	{
		sdate: [1249, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1249, 0, 1],
			Leap: false,
			Leaps: 302
		},
		gdate: [1870, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1870, 2, 21]
		}
	},
	{
		sdate: [1249, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1249, 11, 29],
			Leap: false,
			Leaps: 302
		},
		gdate: [1871, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1871, 2, 20]
		}
	},

	{
		sdate: [1250, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1250, 0, 1],
			Leap: false,
			Leaps: 302
		},
		gdate: [1871, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1871, 2, 21]
		}
	},
	{
		sdate: [1250, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1250, 11, 29],
			Leap: false,
			Leaps: 302
		},
		gdate: [1872, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1872, 2, 20]
		}
	},

	{
		sdate: [1251, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1251, 0, 1],
			Leap: true,
			Leaps: 302
		},
		gdate: [1872, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1872, 2, 21]
		}
	},
	{
		sdate: [1251, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1251, 11, 29],
			Leap: true,
			Leaps: 302
		},
		gdate: [1873, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1873, 2, 19]
		}
	},
	{
		sdate: [1251, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1251, 11, 30],
			Leap: true,
			Leaps: 302
		},
		gdate: [1873, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1873, 2, 20]
		}
	},
	{
		sdate: [1252, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1252, 0, 1],
			Leap: false,
			Leaps: 303
		},
		gdate: [1873, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1873, 2, 21]
		}
	},
	{
		sdate: [1252, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1252, 11, 29],
			Leap: false,
			Leaps: 303
		},
		gdate: [1874, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1874, 2, 20]
		}
	},

	{
		sdate: [1253, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1253, 0, 1],
			Leap: false,
			Leaps: 303
		},
		gdate: [1874, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1874, 2, 21]
		}
	},
	{
		sdate: [1253, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1253, 11, 29],
			Leap: false,
			Leaps: 303
		},
		gdate: [1875, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1875, 2, 20]
		}
	},

	{
		sdate: [1254, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1254, 0, 1],
			Leap: false,
			Leaps: 303
		},
		gdate: [1875, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1875, 2, 21]
		}
	},
	{
		sdate: [1254, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1254, 11, 29],
			Leap: false,
			Leaps: 303
		},
		gdate: [1876, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1876, 2, 20]
		}
	},

	{
		sdate: [1255, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1255, 0, 1],
			Leap: true,
			Leaps: 303
		},
		gdate: [1876, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1876, 2, 21]
		}
	},
	{
		sdate: [1255, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1255, 11, 29],
			Leap: true,
			Leaps: 303
		},
		gdate: [1877, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1877, 2, 19]
		}
	},
	{
		sdate: [1255, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1255, 11, 30],
			Leap: true,
			Leaps: 303
		},
		gdate: [1877, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1877, 2, 20]
		}
	},
	{
		sdate: [1256, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1256, 0, 1],
			Leap: false,
			Leaps: 304
		},
		gdate: [1877, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1877, 2, 21]
		}
	},
	{
		sdate: [1256, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1256, 11, 29],
			Leap: false,
			Leaps: 304
		},
		gdate: [1878, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1878, 2, 20]
		}
	},

	{
		sdate: [1257, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1257, 0, 1],
			Leap: false,
			Leaps: 304
		},
		gdate: [1878, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1878, 2, 21]
		}
	},
	{
		sdate: [1257, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1257, 11, 29],
			Leap: false,
			Leaps: 304
		},
		gdate: [1879, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1879, 2, 20]
		}
	},

	{
		sdate: [1258, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1258, 0, 1],
			Leap: false,
			Leaps: 304
		},
		gdate: [1879, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1879, 2, 21]
		}
	},
	{
		sdate: [1258, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1258, 11, 29],
			Leap: false,
			Leaps: 304
		},
		gdate: [1880, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1880, 2, 20]
		}
	},

	{
		sdate: [1259, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1259, 0, 1],
			Leap: true,
			Leaps: 304
		},
		gdate: [1880, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1880, 2, 21]
		}
	},
	{
		sdate: [1259, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1259, 11, 29],
			Leap: true,
			Leaps: 304
		},
		gdate: [1881, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 19]
		}
	},
	{
		sdate: [1259, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1259, 11, 30],
			Leap: true,
			Leaps: 304
		},
		gdate: [1881, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 20]
		}
	},
	{
		sdate: [1260, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 0, 1],
			Leap: false,
			Leaps: 305
		},
		gdate: [1881, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1881, 2, 21]
		}
	},
	{
		sdate: [1260, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1260, 11, 29],
			Leap: false,
			Leaps: 305
		},
		gdate: [1882, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 20]
		}
	},

	{
		sdate: [1261, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1261, 0, 1],
			Leap: false,
			Leaps: 305
		},
		gdate: [1882, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1882, 2, 21]
		}
	},
	{
		sdate: [1261, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1261, 11, 29],
			Leap: false,
			Leaps: 305
		},
		gdate: [1883, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1883, 2, 20]
		}
	},

	{
		sdate: [1262, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1262, 0, 1],
			Leap: false,
			Leaps: 305
		},
		gdate: [1883, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1883, 2, 21]
		}
	},
	{
		sdate: [1262, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1262, 11, 29],
			Leap: false,
			Leaps: 305
		},
		gdate: [1884, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1884, 2, 20]
		}
	},

	{
		sdate: [1263, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1263, 0, 1],
			Leap: true,
			Leaps: 305
		},
		gdate: [1884, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1884, 2, 21]
		}
	},
	{
		sdate: [1263, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1263, 11, 29],
			Leap: true,
			Leaps: 305
		},
		gdate: [1885, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1885, 2, 19]
		}
	},
	{
		sdate: [1263, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1263, 11, 30],
			Leap: true,
			Leaps: 305
		},
		gdate: [1885, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1885, 2, 20]
		}
	},
	{
		sdate: [1264, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1264, 0, 1],
			Leap: false,
			Leaps: 306
		},
		gdate: [1885, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1885, 2, 21]
		}
	},
	{
		sdate: [1264, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1264, 11, 29],
			Leap: false,
			Leaps: 306
		},
		gdate: [1886, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1886, 2, 20]
		}
	},

	{
		sdate: [1265, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1265, 0, 1],
			Leap: false,
			Leaps: 306
		},
		gdate: [1886, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1886, 2, 21]
		}
	},
	{
		sdate: [1265, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1265, 11, 29],
			Leap: false,
			Leaps: 306
		},
		gdate: [1887, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1887, 2, 20]
		}
	},

	{
		sdate: [1266, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1266, 0, 1],
			Leap: false,
			Leaps: 306
		},
		gdate: [1887, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1887, 2, 21]
		}
	},
	{
		sdate: [1266, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1266, 11, 29],
			Leap: false,
			Leaps: 306
		},
		gdate: [1888, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1888, 2, 20]
		}
	},

	{
		sdate: [1267, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1267, 0, 1],
			Leap: true,
			Leaps: 306
		},
		gdate: [1888, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1888, 2, 21]
		}
	},
	{
		sdate: [1267, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1267, 11, 29],
			Leap: true,
			Leaps: 306
		},
		gdate: [1889, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1889, 2, 19]
		}
	},
	{
		sdate: [1267, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1267, 11, 30],
			Leap: true,
			Leaps: 306
		},
		gdate: [1889, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1889, 2, 20]
		}
	},
	{
		sdate: [1268, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1268, 0, 1],
			Leap: false,
			Leaps: 307
		},
		gdate: [1889, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1889, 2, 21]
		}
	},
	{
		sdate: [1268, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1268, 11, 29],
			Leap: false,
			Leaps: 307
		},
		gdate: [1890, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1890, 2, 20]
		}
	},

	{
		sdate: [1269, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1269, 0, 1],
			Leap: false,
			Leaps: 307
		},
		gdate: [1890, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1890, 2, 21]
		}
	},
	{
		sdate: [1269, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1269, 11, 29],
			Leap: false,
			Leaps: 307
		},
		gdate: [1891, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1891, 2, 20]
		}
	},

	{
		sdate: [1270, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1270, 0, 1],
			Leap: false,
			Leaps: 307
		},
		gdate: [1891, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1891, 2, 21]
		}
	},
	{
		sdate: [1270, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1270, 11, 29],
			Leap: false,
			Leaps: 307
		},
		gdate: [1892, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1892, 2, 20]
		}
	},

	{
		sdate: [1271, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1271, 0, 1],
			Leap: true,
			Leaps: 307
		},
		gdate: [1892, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1892, 2, 21]
		}
	},
	{
		sdate: [1271, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1271, 11, 29],
			Leap: true,
			Leaps: 307
		},
		gdate: [1893, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1893, 2, 19]
		}
	},
	{
		sdate: [1271, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1271, 11, 30],
			Leap: true,
			Leaps: 307
		},
		gdate: [1893, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1893, 2, 20]
		}
	},
	{
		sdate: [1272, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1272, 0, 1],
			Leap: false,
			Leaps: 308
		},
		gdate: [1893, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1893, 2, 21]
		}
	},
	{
		sdate: [1272, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1272, 11, 29],
			Leap: false,
			Leaps: 308
		},
		gdate: [1894, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1894, 2, 20]
		}
	},

	{
		sdate: [1273, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1273, 0, 1],
			Leap: false,
			Leaps: 308
		},
		gdate: [1894, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1894, 2, 21]
		}
	},
	{
		sdate: [1273, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1273, 11, 29],
			Leap: false,
			Leaps: 308
		},
		gdate: [1895, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1895, 2, 20]
		}
	},

	{
		sdate: [1274, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1274, 0, 1],
			Leap: false,
			Leaps: 308
		},
		gdate: [1895, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1895, 2, 21]
		}
	},
	{
		sdate: [1274, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1274, 11, 29],
			Leap: false,
			Leaps: 308
		},
		gdate: [1896, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1896, 2, 20]
		}
	},

	{
		sdate: [1275, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1275, 0, 1],
			Leap: true,
			Leaps: 308
		},
		gdate: [1896, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1896, 2, 21]
		}
	},
	{
		sdate: [1275, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1275, 11, 29],
			Leap: true,
			Leaps: 308
		},
		gdate: [1897, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1897, 2, 19]
		}
	},
	{
		sdate: [1275, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1275, 11, 30],
			Leap: true,
			Leaps: 308
		},
		gdate: [1897, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1897, 2, 20]
		}
	},
	{
		sdate: [1276, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1276, 0, 1],
			Leap: false,
			Leaps: 309
		},
		gdate: [1897, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1897, 2, 21]
		}
	},
	{
		sdate: [1276, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1276, 11, 29],
			Leap: false,
			Leaps: 309
		},
		gdate: [1898, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1898, 2, 20]
		}
	},

	{
		sdate: [1277, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1277, 0, 1],
			Leap: false,
			Leaps: 309
		},
		gdate: [1898, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1898, 2, 21]
		}
	},
	{
		sdate: [1277, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1277, 11, 29],
			Leap: false,
			Leaps: 309
		},
		gdate: [1899, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1899, 2, 20]
		}
	},

	{
		sdate: [1278, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1278, 0, 1],
			Leap: false,
			Leaps: 309
		},
		gdate: [1899, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1899, 2, 21]
		}
	},
	{
		sdate: [1278, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1278, 11, 29],
			Leap: false,
			Leaps: 309
		},
		gdate: [1900, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1900, 2, 20]
		}
	},

	{
		sdate: [1279, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1279, 0, 1],
			Leap: false,
			Leaps: 309
		},
		gdate: [1900, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1900, 2, 21]
		}
	},
	{
		sdate: [1279, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1279, 11, 29],
			Leap: false,
			Leaps: 309
		},
		gdate: [1901, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 20]
		}
	},

	{
		sdate: [1280, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 0, 1],
			Leap: true,
			Leaps: 309
		},
		gdate: [1901, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1901, 2, 21]
		}
	},
	{
		sdate: [1280, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 29],
			Leap: true,
			Leaps: 309
		},
		gdate: [1902, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 20]
		}
	},
	{
		sdate: [1280, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1280, 11, 30],
			Leap: true,
			Leaps: 309
		},
		gdate: [1902, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 21]
		}
	},
	{
		sdate: [1281, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1281, 0, 1],
			Leap: false,
			Leaps: 310
		},
		gdate: [1902, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1902, 2, 22]
		}
	},
	{
		sdate: [1281, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1281, 11, 29],
			Leap: false,
			Leaps: 310
		},
		gdate: [1903, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1903, 2, 21]
		}
	},

	{
		sdate: [1282, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1282, 0, 1],
			Leap: false,
			Leaps: 310
		},
		gdate: [1903, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1903, 2, 22]
		}
	},
	{
		sdate: [1282, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1282, 11, 29],
			Leap: false,
			Leaps: 310
		},
		gdate: [1904, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1904, 2, 21]
		}
	},

	{
		sdate: [1283, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1283, 0, 1],
			Leap: false,
			Leaps: 310
		},
		gdate: [1904, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1904, 2, 22]
		}
	},
	{
		sdate: [1283, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1283, 11, 29],
			Leap: false,
			Leaps: 310
		},
		gdate: [1905, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1905, 2, 20]
		}
	},

	{
		sdate: [1284, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1284, 0, 1],
			Leap: true,
			Leaps: 310
		},
		gdate: [1905, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1905, 2, 21]
		}
	},
	{
		sdate: [1284, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1284, 11, 29],
			Leap: true,
			Leaps: 310
		},
		gdate: [1906, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1906, 2, 20]
		}
	},
	{
		sdate: [1284, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1284, 11, 30],
			Leap: true,
			Leaps: 310
		},
		gdate: [1906, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1906, 2, 21]
		}
	},
	{
		sdate: [1285, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1285, 0, 1],
			Leap: false,
			Leaps: 311
		},
		gdate: [1906, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1906, 2, 22]
		}
	},
	{
		sdate: [1285, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1285, 11, 29],
			Leap: false,
			Leaps: 311
		},
		gdate: [1907, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1907, 2, 21]
		}
	},

	{
		sdate: [1286, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1286, 0, 1],
			Leap: false,
			Leaps: 311
		},
		gdate: [1907, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1907, 2, 22]
		}
	},
	{
		sdate: [1286, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1286, 11, 29],
			Leap: false,
			Leaps: 311
		},
		gdate: [1908, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1908, 2, 21]
		}
	},

	{
		sdate: [1287, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1287, 0, 1],
			Leap: false,
			Leaps: 311
		},
		gdate: [1908, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1908, 2, 22]
		}
	},
	{
		sdate: [1287, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1287, 11, 29],
			Leap: false,
			Leaps: 311
		},
		gdate: [1909, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1909, 2, 20]
		}
	},

	{
		sdate: [1288, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1288, 0, 1],
			Leap: true,
			Leaps: 311
		},
		gdate: [1909, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1909, 2, 21]
		}
	},
	{
		sdate: [1288, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1288, 11, 29],
			Leap: true,
			Leaps: 311
		},
		gdate: [1910, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1910, 2, 20]
		}
	},
	{
		sdate: [1288, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1288, 11, 30],
			Leap: true,
			Leaps: 311
		},
		gdate: [1910, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1910, 2, 21]
		}
	},
	{
		sdate: [1289, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1289, 0, 1],
			Leap: false,
			Leaps: 312
		},
		gdate: [1910, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1910, 2, 22]
		}
	},
	{
		sdate: [1289, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1289, 11, 29],
			Leap: false,
			Leaps: 312
		},
		gdate: [1911, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1911, 2, 21]
		}
	},

	{
		sdate: [1290, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1290, 0, 1],
			Leap: false,
			Leaps: 312
		},
		gdate: [1911, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1911, 2, 22]
		}
	},
	{
		sdate: [1290, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1290, 11, 29],
			Leap: false,
			Leaps: 312
		},
		gdate: [1912, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1912, 2, 21]
		}
	},

	{
		sdate: [1291, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1291, 0, 1],
			Leap: false,
			Leaps: 312
		},
		gdate: [1912, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1912, 2, 22]
		}
	},
	{
		sdate: [1291, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1291, 11, 29],
			Leap: false,
			Leaps: 312
		},
		gdate: [1913, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1913, 2, 20]
		}
	},

	{
		sdate: [1292, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1292, 0, 1],
			Leap: true,
			Leaps: 312
		},
		gdate: [1913, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1913, 2, 21]
		}
	},
	{
		sdate: [1292, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1292, 11, 29],
			Leap: true,
			Leaps: 312
		},
		gdate: [1914, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1914, 2, 20]
		}
	},
	{
		sdate: [1292, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1292, 11, 30],
			Leap: true,
			Leaps: 312
		},
		gdate: [1914, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1914, 2, 21]
		}
	},
	{
		sdate: [1293, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1293, 0, 1],
			Leap: false,
			Leaps: 313
		},
		gdate: [1914, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1914, 2, 22]
		}
	},
	{
		sdate: [1293, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1293, 11, 29],
			Leap: false,
			Leaps: 313
		},
		gdate: [1915, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1915, 2, 21]
		}
	},

	{
		sdate: [1294, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1294, 0, 1],
			Leap: false,
			Leaps: 313
		},
		gdate: [1915, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1915, 2, 22]
		}
	},
	{
		sdate: [1294, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1294, 11, 29],
			Leap: false,
			Leaps: 313
		},
		gdate: [1916, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1916, 2, 21]
		}
	},

	{
		sdate: [1295, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1295, 0, 1],
			Leap: false,
			Leaps: 313
		},
		gdate: [1916, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1916, 2, 22]
		}
	},
	{
		sdate: [1295, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1295, 11, 29],
			Leap: false,
			Leaps: 313
		},
		gdate: [1917, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1917, 2, 20]
		}
	},

	{
		sdate: [1296, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1296, 0, 1],
			Leap: true,
			Leaps: 313
		},
		gdate: [1917, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1917, 2, 21]
		}
	},
	{
		sdate: [1296, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1296, 11, 29],
			Leap: true,
			Leaps: 313
		},
		gdate: [1918, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1918, 2, 20]
		}
	},
	{
		sdate: [1296, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1296, 11, 30],
			Leap: true,
			Leaps: 313
		},
		gdate: [1918, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1918, 2, 21]
		}
	},
	{
		sdate: [1297, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1297, 0, 1],
			Leap: false,
			Leaps: 314
		},
		gdate: [1918, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1918, 2, 22]
		}
	},
	{
		sdate: [1297, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1297, 11, 29],
			Leap: false,
			Leaps: 314
		},
		gdate: [1919, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1919, 2, 21]
		}
	},

	{
		sdate: [1298, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1298, 0, 1],
			Leap: false,
			Leaps: 314
		},
		gdate: [1919, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1919, 2, 22]
		}
	},
	{
		sdate: [1298, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1298, 11, 29],
			Leap: false,
			Leaps: 314
		},
		gdate: [1920, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1920, 2, 21]
		}
	},

	{
		sdate: [1299, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1299, 0, 1],
			Leap: false,
			Leaps: 314
		},
		gdate: [1920, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1920, 2, 22]
		}
	},
	{
		sdate: [1299, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1299, 11, 29],
			Leap: false,
			Leaps: 314
		},
		gdate: [1921, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 20]
		}
	},

	{
		sdate: [1300, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 0, 1],
			Leap: true,
			Leaps: 314
		},
		gdate: [1921, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1921, 2, 21]
		}
	},
	{
		sdate: [1300, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 29],
			Leap: true,
			Leaps: 314
		},
		gdate: [1922, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 20]
		}
	},
	{
		sdate: [1300, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1300, 11, 30],
			Leap: true,
			Leaps: 314
		},
		gdate: [1922, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 21]
		}
	},
	{
		sdate: [1301, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1301, 0, 1],
			Leap: false,
			Leaps: 315
		},
		gdate: [1922, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1922, 2, 22]
		}
	},
	{
		sdate: [1301, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1301, 11, 29],
			Leap: false,
			Leaps: 315
		},
		gdate: [1923, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1923, 2, 21]
		}
	},

	{
		sdate: [1302, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1302, 0, 1],
			Leap: false,
			Leaps: 315
		},
		gdate: [1923, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1923, 2, 22]
		}
	},
	{
		sdate: [1302, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1302, 11, 29],
			Leap: false,
			Leaps: 315
		},
		gdate: [1924, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1924, 2, 21]
		}
	},

	{
		sdate: [1303, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1303, 0, 1],
			Leap: false,
			Leaps: 315
		},
		gdate: [1924, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1924, 2, 22]
		}
	},
	{
		sdate: [1303, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1303, 11, 29],
			Leap: false,
			Leaps: 315
		},
		gdate: [1925, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1925, 2, 20]
		}
	},

	{
		sdate: [1304, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1304, 0, 1],
			Leap: true,
			Leaps: 315
		},
		gdate: [1925, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1925, 2, 21]
		}
	},
	{
		sdate: [1304, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1304, 11, 29],
			Leap: true,
			Leaps: 315
		},
		gdate: [1926, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1926, 2, 20]
		}
	},
	{
		sdate: [1304, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1304, 11, 30],
			Leap: true,
			Leaps: 315
		},
		gdate: [1926, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1926, 2, 21]
		}
	},
	{
		sdate: [1305, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1305, 0, 1],
			Leap: false,
			Leaps: 316
		},
		gdate: [1926, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1926, 2, 22]
		}
	},
	{
		sdate: [1305, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1305, 11, 29],
			Leap: false,
			Leaps: 316
		},
		gdate: [1927, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1927, 2, 21]
		}
	},

	{
		sdate: [1306, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1306, 0, 1],
			Leap: false,
			Leaps: 316
		},
		gdate: [1927, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1927, 2, 22]
		}
	},
	{
		sdate: [1306, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1306, 11, 29],
			Leap: false,
			Leaps: 316
		},
		gdate: [1928, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1928, 2, 21]
		}
	},

	{
		sdate: [1307, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1307, 0, 1],
			Leap: false,
			Leaps: 316
		},
		gdate: [1928, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1928, 2, 22]
		}
	},
	{
		sdate: [1307, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1307, 11, 29],
			Leap: false,
			Leaps: 316
		},
		gdate: [1929, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1929, 2, 20]
		}
	},

	{
		sdate: [1308, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1308, 0, 1],
			Leap: false,
			Leaps: 316
		},
		gdate: [1929, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1929, 2, 21]
		}
	},
	{
		sdate: [1308, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1308, 11, 29],
			Leap: false,
			Leaps: 316
		},
		gdate: [1930, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1930, 2, 20]
		}
	},

	{
		sdate: [1309, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1309, 0, 1],
			Leap: true,
			Leaps: 316
		},
		gdate: [1930, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1930, 2, 21]
		}
	},
	{
		sdate: [1309, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1309, 11, 29],
			Leap: true,
			Leaps: 316
		},
		gdate: [1931, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1931, 2, 20]
		}
	},
	{
		sdate: [1309, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1309, 11, 30],
			Leap: true,
			Leaps: 316
		},
		gdate: [1931, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1931, 2, 21]
		}
	},
	{
		sdate: [1310, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1310, 0, 1],
			Leap: false,
			Leaps: 317
		},
		gdate: [1931, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1931, 2, 22]
		}
	},
	{
		sdate: [1310, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1310, 11, 29],
			Leap: false,
			Leaps: 317
		},
		gdate: [1932, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1932, 2, 21]
		}
	},

	{
		sdate: [1311, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1311, 0, 1],
			Leap: false,
			Leaps: 317
		},
		gdate: [1932, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1932, 2, 22]
		}
	},
	{
		sdate: [1311, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1311, 11, 29],
			Leap: false,
			Leaps: 317
		},
		gdate: [1933, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1933, 2, 20]
		}
	},

	{
		sdate: [1312, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1312, 0, 1],
			Leap: false,
			Leaps: 317
		},
		gdate: [1933, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1933, 2, 21]
		}
	},
	{
		sdate: [1312, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1312, 11, 29],
			Leap: false,
			Leaps: 317
		},
		gdate: [1934, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1934, 2, 20]
		}
	},

	{
		sdate: [1313, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1313, 0, 1],
			Leap: true,
			Leaps: 317
		},
		gdate: [1934, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1934, 2, 21]
		}
	},
	{
		sdate: [1313, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1313, 11, 29],
			Leap: true,
			Leaps: 317
		},
		gdate: [1935, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1935, 2, 20]
		}
	},
	{
		sdate: [1313, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1313, 11, 30],
			Leap: true,
			Leaps: 317
		},
		gdate: [1935, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1935, 2, 21]
		}
	},
	{
		sdate: [1314, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1314, 0, 1],
			Leap: false,
			Leaps: 318
		},
		gdate: [1935, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1935, 2, 22]
		}
	},
	{
		sdate: [1314, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1314, 11, 29],
			Leap: false,
			Leaps: 318
		},
		gdate: [1936, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1936, 2, 21]
		}
	},

	{
		sdate: [1315, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1315, 0, 1],
			Leap: false,
			Leaps: 318
		},
		gdate: [1936, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1936, 2, 22]
		}
	},
	{
		sdate: [1315, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1315, 11, 29],
			Leap: false,
			Leaps: 318
		},
		gdate: [1937, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1937, 2, 20]
		}
	},

	{
		sdate: [1316, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1316, 0, 1],
			Leap: false,
			Leaps: 318
		},
		gdate: [1937, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1937, 2, 21]
		}
	},
	{
		sdate: [1316, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1316, 11, 29],
			Leap: false,
			Leaps: 318
		},
		gdate: [1938, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1938, 2, 20]
		}
	},

	{
		sdate: [1317, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1317, 0, 1],
			Leap: true,
			Leaps: 318
		},
		gdate: [1938, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1938, 2, 21]
		}
	},
	{
		sdate: [1317, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1317, 11, 29],
			Leap: true,
			Leaps: 318
		},
		gdate: [1939, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1939, 2, 20]
		}
	},
	{
		sdate: [1317, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1317, 11, 30],
			Leap: true,
			Leaps: 318
		},
		gdate: [1939, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1939, 2, 21]
		}
	},
	{
		sdate: [1318, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1318, 0, 1],
			Leap: false,
			Leaps: 319
		},
		gdate: [1939, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1939, 2, 22]
		}
	},
	{
		sdate: [1318, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1318, 11, 29],
			Leap: false,
			Leaps: 319
		},
		gdate: [1940, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1940, 2, 21]
		}
	},

	{
		sdate: [1319, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1319, 0, 1],
			Leap: false,
			Leaps: 319
		},
		gdate: [1940, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1940, 2, 22]
		}
	},
	{
		sdate: [1319, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1319, 11, 29],
			Leap: false,
			Leaps: 319
		},
		gdate: [1941, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 20]
		}
	},

	{
		sdate: [1320, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 0, 1],
			Leap: false,
			Leaps: 319
		},
		gdate: [1941, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1941, 2, 21]
		}
	},
	{
		sdate: [1320, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1320, 11, 29],
			Leap: false,
			Leaps: 319
		},
		gdate: [1942, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 20]
		}
	},

	{
		sdate: [1321, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1321, 0, 1],
			Leap: true,
			Leaps: 319
		},
		gdate: [1942, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1942, 2, 21]
		}
	},
	{
		sdate: [1321, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1321, 11, 29],
			Leap: true,
			Leaps: 319
		},
		gdate: [1943, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1943, 2, 20]
		}
	},
	{
		sdate: [1321, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1321, 11, 30],
			Leap: true,
			Leaps: 319
		},
		gdate: [1943, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1943, 2, 21]
		}
	},
	{
		sdate: [1322, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1322, 0, 1],
			Leap: false,
			Leaps: 320
		},
		gdate: [1943, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1943, 2, 22]
		}
	},
	{
		sdate: [1322, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1322, 11, 29],
			Leap: false,
			Leaps: 320
		},
		gdate: [1944, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1944, 2, 21]
		}
	},

	{
		sdate: [1323, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1323, 0, 1],
			Leap: false,
			Leaps: 320
		},
		gdate: [1944, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1944, 2, 22]
		}
	},
	{
		sdate: [1323, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1323, 11, 29],
			Leap: false,
			Leaps: 320
		},
		gdate: [1945, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1945, 2, 20]
		}
	},

	{
		sdate: [1324, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1324, 0, 1],
			Leap: false,
			Leaps: 320
		},
		gdate: [1945, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1945, 2, 21]
		}
	},
	{
		sdate: [1324, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1324, 11, 29],
			Leap: false,
			Leaps: 320
		},
		gdate: [1946, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1946, 2, 20]
		}
	},

	{
		sdate: [1325, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1325, 0, 1],
			Leap: true,
			Leaps: 320
		},
		gdate: [1946, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1946, 2, 21]
		}
	},
	{
		sdate: [1325, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1325, 11, 29],
			Leap: true,
			Leaps: 320
		},
		gdate: [1947, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1947, 2, 20]
		}
	},
	{
		sdate: [1325, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1325, 11, 30],
			Leap: true,
			Leaps: 320
		},
		gdate: [1947, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1947, 2, 21]
		}
	},
	{
		sdate: [1326, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1326, 0, 1],
			Leap: false,
			Leaps: 321
		},
		gdate: [1947, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1947, 2, 22]
		}
	},
	{
		sdate: [1326, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1326, 11, 29],
			Leap: false,
			Leaps: 321
		},
		gdate: [1948, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1948, 2, 21]
		}
	},

	{
		sdate: [1327, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1327, 0, 1],
			Leap: false,
			Leaps: 321
		},
		gdate: [1948, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1948, 2, 22]
		}
	},
	{
		sdate: [1327, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1327, 11, 29],
			Leap: false,
			Leaps: 321
		},
		gdate: [1949, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1949, 2, 20]
		}
	},

	{
		sdate: [1328, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1328, 0, 1],
			Leap: false,
			Leaps: 321
		},
		gdate: [1949, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1949, 2, 21]
		}
	},
	{
		sdate: [1328, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1328, 11, 29],
			Leap: false,
			Leaps: 321
		},
		gdate: [1950, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1950, 2, 20]
		}
	},

	{
		sdate: [1329, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1329, 0, 1],
			Leap: true,
			Leaps: 321
		},
		gdate: [1950, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1950, 2, 21]
		}
	},
	{
		sdate: [1329, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1329, 11, 29],
			Leap: true,
			Leaps: 321
		},
		gdate: [1951, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1951, 2, 20]
		}
	},
	{
		sdate: [1329, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1329, 11, 30],
			Leap: true,
			Leaps: 321
		},
		gdate: [1951, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1951, 2, 21]
		}
	},
	{
		sdate: [1330, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1330, 0, 1],
			Leap: false,
			Leaps: 322
		},
		gdate: [1951, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1951, 2, 22]
		}
	},
	{
		sdate: [1330, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1330, 11, 29],
			Leap: false,
			Leaps: 322
		},
		gdate: [1952, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1952, 2, 21]
		}
	},

	{
		sdate: [1331, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1331, 0, 1],
			Leap: false,
			Leaps: 322
		},
		gdate: [1952, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1952, 2, 22]
		}
	},
	{
		sdate: [1331, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1331, 11, 29],
			Leap: false,
			Leaps: 322
		},
		gdate: [1953, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1953, 2, 20]
		}
	},

	{
		sdate: [1332, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1332, 0, 1],
			Leap: false,
			Leaps: 322
		},
		gdate: [1953, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1953, 2, 21]
		}
	},
	{
		sdate: [1332, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1332, 11, 29],
			Leap: false,
			Leaps: 322
		},
		gdate: [1954, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1954, 2, 20]
		}
	},

	{
		sdate: [1333, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1333, 0, 1],
			Leap: true,
			Leaps: 322
		},
		gdate: [1954, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1954, 2, 21]
		}
	},
	{
		sdate: [1333, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1333, 11, 29],
			Leap: true,
			Leaps: 322
		},
		gdate: [1955, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1955, 2, 20]
		}
	},
	{
		sdate: [1333, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1333, 11, 30],
			Leap: true,
			Leaps: 322
		},
		gdate: [1955, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1955, 2, 21]
		}
	},
	{
		sdate: [1334, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1334, 0, 1],
			Leap: false,
			Leaps: 323
		},
		gdate: [1955, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1955, 2, 22]
		}
	},
	{
		sdate: [1334, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1334, 11, 29],
			Leap: false,
			Leaps: 323
		},
		gdate: [1956, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1956, 2, 21]
		}
	},

	{
		sdate: [1335, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1335, 0, 1],
			Leap: false,
			Leaps: 323
		},
		gdate: [1956, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1956, 2, 22]
		}
	},
	{
		sdate: [1335, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1335, 11, 29],
			Leap: false,
			Leaps: 323
		},
		gdate: [1957, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1957, 2, 20]
		}
	},

	{
		sdate: [1336, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1336, 0, 1],
			Leap: false,
			Leaps: 323
		},
		gdate: [1957, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1957, 2, 21]
		}
	},
	{
		sdate: [1336, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1336, 11, 29],
			Leap: false,
			Leaps: 323
		},
		gdate: [1958, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1958, 2, 20]
		}
	},

	{
		sdate: [1337, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1337, 0, 1],
			Leap: true,
			Leaps: 323
		},
		gdate: [1958, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1958, 2, 21]
		}
	},
	{
		sdate: [1337, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1337, 11, 29],
			Leap: true,
			Leaps: 323
		},
		gdate: [1959, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1959, 2, 20]
		}
	},
	{
		sdate: [1337, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1337, 11, 30],
			Leap: true,
			Leaps: 323
		},
		gdate: [1959, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1959, 2, 21]
		}
	},
	{
		sdate: [1338, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1338, 0, 1],
			Leap: false,
			Leaps: 324
		},
		gdate: [1959, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1959, 2, 22]
		}
	},
	{
		sdate: [1338, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1338, 11, 29],
			Leap: false,
			Leaps: 324
		},
		gdate: [1960, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1960, 2, 21]
		}
	},

	{
		sdate: [1339, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1339, 0, 1],
			Leap: false,
			Leaps: 324
		},
		gdate: [1960, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1960, 2, 22]
		}
	},
	{
		sdate: [1339, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1339, 11, 29],
			Leap: false,
			Leaps: 324
		},
		gdate: [1961, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 20]
		}
	},

	{
		sdate: [1340, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 0, 1],
			Leap: false,
			Leaps: 324
		},
		gdate: [1961, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1961, 2, 21]
		}
	},
	{
		sdate: [1340, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1340, 11, 29],
			Leap: false,
			Leaps: 324
		},
		gdate: [1962, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 20]
		}
	},

	{
		sdate: [1341, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1341, 0, 1],
			Leap: false,
			Leaps: 324
		},
		gdate: [1962, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1962, 2, 21]
		}
	},
	{
		sdate: [1341, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1341, 11, 29],
			Leap: false,
			Leaps: 324
		},
		gdate: [1963, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1963, 2, 20]
		}
	},

	{
		sdate: [1342, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1342, 0, 1],
			Leap: true,
			Leaps: 324
		},
		gdate: [1963, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1963, 2, 21]
		}
	},
	{
		sdate: [1342, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1342, 11, 29],
			Leap: true,
			Leaps: 324
		},
		gdate: [1964, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1964, 2, 20]
		}
	},
	{
		sdate: [1342, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1342, 11, 30],
			Leap: true,
			Leaps: 324
		},
		gdate: [1964, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1964, 2, 21]
		}
	},
	{
		sdate: [1343, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1343, 0, 1],
			Leap: false,
			Leaps: 325
		},
		gdate: [1964, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1964, 2, 22]
		}
	},
	{
		sdate: [1343, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1343, 11, 29],
			Leap: false,
			Leaps: 325
		},
		gdate: [1965, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1965, 2, 20]
		}
	},

	{
		sdate: [1344, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1344, 0, 1],
			Leap: false,
			Leaps: 325
		},
		gdate: [1965, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1965, 2, 21]
		}
	},
	{
		sdate: [1344, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1344, 11, 29],
			Leap: false,
			Leaps: 325
		},
		gdate: [1966, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1966, 2, 20]
		}
	},

	{
		sdate: [1345, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1345, 0, 1],
			Leap: false,
			Leaps: 325
		},
		gdate: [1966, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1966, 2, 21]
		}
	},
	{
		sdate: [1345, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1345, 11, 29],
			Leap: false,
			Leaps: 325
		},
		gdate: [1967, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1967, 2, 20]
		}
	},

	{
		sdate: [1346, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1346, 0, 1],
			Leap: true,
			Leaps: 325
		},
		gdate: [1967, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1967, 2, 21]
		}
	},
	{
		sdate: [1346, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1346, 11, 29],
			Leap: true,
			Leaps: 325
		},
		gdate: [1968, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1968, 2, 20]
		}
	},
	{
		sdate: [1346, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1346, 11, 30],
			Leap: true,
			Leaps: 325
		},
		gdate: [1968, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1968, 2, 21]
		}
	},
	{
		sdate: [1347, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1347, 0, 1],
			Leap: false,
			Leaps: 326
		},
		gdate: [1968, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1968, 2, 22]
		}
	},
	{
		sdate: [1347, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1347, 11, 29],
			Leap: false,
			Leaps: 326
		},
		gdate: [1969, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1969, 2, 20]
		}
	},

	{
		sdate: [1348, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1348, 0, 1],
			Leap: false,
			Leaps: 326
		},
		gdate: [1969, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1969, 2, 21]
		}
	},
	{
		sdate: [1348, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1348, 11, 29],
			Leap: false,
			Leaps: 326
		},
		gdate: [1970, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1970, 2, 20]
		}
	},

	{
		sdate: [1349, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1349, 0, 1],
			Leap: false,
			Leaps: 326
		},
		gdate: [1970, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1970, 2, 21]
		}
	},
	{
		sdate: [1349, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1349, 11, 29],
			Leap: false,
			Leaps: 326
		},
		gdate: [1971, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1971, 2, 20]
		}
	},

	{
		sdate: [1350, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1350, 0, 1],
			Leap: true,
			Leaps: 326
		},
		gdate: [1971, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1971, 2, 21]
		}
	},
	{
		sdate: [1350, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1350, 11, 29],
			Leap: true,
			Leaps: 326
		},
		gdate: [1972, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1972, 2, 20]
		}
	},
	{
		sdate: [1350, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1350, 11, 30],
			Leap: true,
			Leaps: 326
		},
		gdate: [1972, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1972, 2, 21]
		}
	},
	{
		sdate: [1351, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1351, 0, 1],
			Leap: false,
			Leaps: 327
		},
		gdate: [1972, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1972, 2, 22]
		}
	},
	{
		sdate: [1351, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1351, 11, 29],
			Leap: false,
			Leaps: 327
		},
		gdate: [1973, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1973, 2, 20]
		}
	},

	{
		sdate: [1352, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1352, 0, 1],
			Leap: false,
			Leaps: 327
		},
		gdate: [1973, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1973, 2, 21]
		}
	},
	{
		sdate: [1352, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1352, 11, 29],
			Leap: false,
			Leaps: 327
		},
		gdate: [1974, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1974, 2, 20]
		}
	},

	{
		sdate: [1353, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1353, 0, 1],
			Leap: false,
			Leaps: 327
		},
		gdate: [1974, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1974, 2, 21]
		}
	},
	{
		sdate: [1353, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1353, 11, 29],
			Leap: false,
			Leaps: 327
		},
		gdate: [1975, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1975, 2, 20]
		}
	},

	{
		sdate: [1354, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1354, 0, 1],
			Leap: true,
			Leaps: 327
		},
		gdate: [1975, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1975, 2, 21]
		}
	},
	{
		sdate: [1354, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1354, 11, 29],
			Leap: true,
			Leaps: 327
		},
		gdate: [1976, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1976, 2, 20]
		}
	},
	{
		sdate: [1354, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1354, 11, 30],
			Leap: true,
			Leaps: 327
		},
		gdate: [1976, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1976, 2, 21]
		}
	},
	{
		sdate: [1355, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1355, 0, 1],
			Leap: false,
			Leaps: 328
		},
		gdate: [1976, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1976, 2, 22]
		}
	},
	{
		sdate: [1355, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1355, 11, 29],
			Leap: false,
			Leaps: 328
		},
		gdate: [1977, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1977, 2, 20]
		}
	},

	{
		sdate: [1356, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1356, 0, 1],
			Leap: false,
			Leaps: 328
		},
		gdate: [1977, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1977, 2, 21]
		}
	},
	{
		sdate: [1356, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1356, 11, 29],
			Leap: false,
			Leaps: 328
		},
		gdate: [1978, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1978, 2, 20]
		}
	},

	{
		sdate: [1357, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1357, 0, 1],
			Leap: false,
			Leaps: 328
		},
		gdate: [1978, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [1978, 2, 21]
		}
	},
	{
		sdate: [1357, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1357, 11, 29],
			Leap: false,
			Leaps: 328
		},
		gdate: [1979, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1979, 2, 20]
		}
	},

	{
		sdate: [1358, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1358, 0, 1],
			Leap: true,
			Leaps: 328
		},
		gdate: [1979, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [1979, 2, 21]
		}
	},
	{
		sdate: [1358, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1358, 11, 29],
			Leap: true,
			Leaps: 328
		},
		gdate: [1980, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1980, 2, 20]
		}
	},
	{
		sdate: [1358, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1358, 11, 30],
			Leap: true,
			Leaps: 328
		},
		gdate: [1980, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [1980, 2, 21]
		}
	},
	{
		sdate: [1359, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1359, 0, 1],
			Leap: false,
			Leaps: 329
		},
		gdate: [1980, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1980, 2, 22]
		}
	},
	{
		sdate: [1359, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1359, 11, 29],
			Leap: false,
			Leaps: 329
		},
		gdate: [1981, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 20]
		}
	},

	{
		sdate: [1360, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 0, 1],
			Leap: false,
			Leaps: 329
		},
		gdate: [1981, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1981, 2, 21]
		}
	},
	{
		sdate: [1360, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1360, 11, 29],
			Leap: false,
			Leaps: 329
		},
		gdate: [1982, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 20]
		}
	},

	{
		sdate: [1361, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1361, 0, 1],
			Leap: false,
			Leaps: 329
		},
		gdate: [1982, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1982, 2, 21]
		}
	},
	{
		sdate: [1361, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1361, 11, 29],
			Leap: false,
			Leaps: 329
		},
		gdate: [1983, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1983, 2, 20]
		}
	},

	{
		sdate: [1362, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1362, 0, 1],
			Leap: true,
			Leaps: 329
		},
		gdate: [1983, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1983, 2, 21]
		}
	},
	{
		sdate: [1362, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1362, 11, 29],
			Leap: true,
			Leaps: 329
		},
		gdate: [1984, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1984, 2, 20]
		}
	},
	{
		sdate: [1362, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1362, 11, 30],
			Leap: true,
			Leaps: 329
		},
		gdate: [1984, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1984, 2, 21]
		}
	},
	{
		sdate: [1363, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1363, 0, 1],
			Leap: false,
			Leaps: 330
		},
		gdate: [1984, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1984, 2, 22]
		}
	},
	{
		sdate: [1363, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1363, 11, 29],
			Leap: false,
			Leaps: 330
		},
		gdate: [1985, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1985, 2, 20]
		}
	},

	{
		sdate: [1364, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1364, 0, 1],
			Leap: false,
			Leaps: 330
		},
		gdate: [1985, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1985, 2, 21]
		}
	},
	{
		sdate: [1364, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1364, 11, 29],
			Leap: false,
			Leaps: 330
		},
		gdate: [1986, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1986, 2, 20]
		}
	},

	{
		sdate: [1365, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1365, 0, 1],
			Leap: false,
			Leaps: 330
		},
		gdate: [1986, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1986, 2, 21]
		}
	},
	{
		sdate: [1365, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1365, 11, 29],
			Leap: false,
			Leaps: 330
		},
		gdate: [1987, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1987, 2, 20]
		}
	},

	{
		sdate: [1366, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1366, 0, 1],
			Leap: true,
			Leaps: 330
		},
		gdate: [1987, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1987, 2, 21]
		}
	},
	{
		sdate: [1366, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1366, 11, 29],
			Leap: true,
			Leaps: 330
		},
		gdate: [1988, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1988, 2, 20]
		}
	},
	{
		sdate: [1366, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1366, 11, 30],
			Leap: true,
			Leaps: 330
		},
		gdate: [1988, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1988, 2, 21]
		}
	},
	{
		sdate: [1367, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1367, 0, 1],
			Leap: false,
			Leaps: 331
		},
		gdate: [1988, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [1988, 2, 22]
		}
	},
	{
		sdate: [1367, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1367, 11, 29],
			Leap: false,
			Leaps: 331
		},
		gdate: [1989, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1989, 2, 20]
		}
	},

	{
		sdate: [1368, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1368, 0, 1],
			Leap: false,
			Leaps: 331
		},
		gdate: [1989, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1989, 2, 21]
		}
	},
	{
		sdate: [1368, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1368, 11, 29],
			Leap: false,
			Leaps: 331
		},
		gdate: [1990, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1990, 2, 20]
		}
	},

	{
		sdate: [1369, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1369, 0, 1],
			Leap: false,
			Leaps: 331
		},
		gdate: [1990, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1990, 2, 21]
		}
	},
	{
		sdate: [1369, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1369, 11, 29],
			Leap: false,
			Leaps: 331
		},
		gdate: [1991, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1991, 2, 20]
		}
	},

	{
		sdate: [1370, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1370, 0, 1],
			Leap: true,
			Leaps: 331
		},
		gdate: [1991, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1991, 2, 21]
		}
	},
	{
		sdate: [1370, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1370, 11, 29],
			Leap: true,
			Leaps: 331
		},
		gdate: [1992, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1992, 2, 20]
		}
	},
	{
		sdate: [1370, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1370, 11, 30],
			Leap: true,
			Leaps: 331
		},
		gdate: [1992, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1992, 2, 21]
		}
	},
	{
		sdate: [1371, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1371, 0, 1],
			Leap: false,
			Leaps: 332
		},
		gdate: [1992, 3, 22, 1, 0, 0, 0],
		gdata: {
			gregorian: [1992, 2, 22]
		}
	},
	{
		sdate: [1371, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1371, 11, 29],
			Leap: false,
			Leaps: 332
		},
		gdate: [1993, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1993, 2, 20]
		}
	},

	{
		sdate: [1372, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1372, 0, 1],
			Leap: false,
			Leaps: 332
		},
		gdate: [1993, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1993, 2, 21]
		}
	},
	{
		sdate: [1372, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1372, 11, 29],
			Leap: false,
			Leaps: 332
		},
		gdate: [1994, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1994, 2, 20]
		}
	},

	{
		sdate: [1373, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1373, 0, 1],
			Leap: false,
			Leaps: 332
		},
		gdate: [1994, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1994, 2, 21]
		}
	},
	{
		sdate: [1373, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1373, 11, 29],
			Leap: false,
			Leaps: 332
		},
		gdate: [1995, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1995, 2, 20]
		}
	},

	{
		sdate: [1374, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1374, 0, 1],
			Leap: false,
			Leaps: 332
		},
		gdate: [1995, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1995, 2, 21]
		}
	},
	{
		sdate: [1374, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1374, 11, 29],
			Leap: false,
			Leaps: 332
		},
		gdate: [1996, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1996, 2, 20]
		}
	},

	{
		sdate: [1375, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1375, 0, 1],
			Leap: true,
			Leaps: 332
		},
		gdate: [1996, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [1996, 2, 21]
		}
	},
	{
		sdate: [1375, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1375, 11, 29],
			Leap: true,
			Leaps: 332
		},
		gdate: [1997, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [1997, 2, 19]
		}
	},
	{
		sdate: [1375, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1375, 11, 30],
			Leap: true,
			Leaps: 332
		},
		gdate: [1997, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1997, 2, 20]
		}
	},
	{
		sdate: [1376, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1376, 0, 1],
			Leap: false,
			Leaps: 333
		},
		gdate: [1997, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1997, 2, 21]
		}
	},
	{
		sdate: [1376, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1376, 11, 29],
			Leap: false,
			Leaps: 333
		},
		gdate: [1998, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1998, 2, 20]
		}
	},

	{
		sdate: [1377, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1377, 0, 1],
			Leap: false,
			Leaps: 333
		},
		gdate: [1998, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1998, 2, 21]
		}
	},
	{
		sdate: [1377, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1377, 11, 29],
			Leap: false,
			Leaps: 333
		},
		gdate: [1999, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [1999, 2, 20]
		}
	},

	{
		sdate: [1378, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1378, 0, 1],
			Leap: false,
			Leaps: 333
		},
		gdate: [1999, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [1999, 2, 21]
		}
	},
	{
		sdate: [1378, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1378, 11, 29],
			Leap: false,
			Leaps: 333
		},
		gdate: [2000, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2000, 2, 20]
		}
	},

	{
		sdate: [1379, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1379, 0, 1],
			Leap: true,
			Leaps: 333
		},
		gdate: [2000, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2000, 2, 21]
		}
	},
	{
		sdate: [1379, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1379, 11, 29],
			Leap: true,
			Leaps: 333
		},
		gdate: [2001, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 19]
		}
	},
	{
		sdate: [1379, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1379, 11, 30],
			Leap: true,
			Leaps: 333
		},
		gdate: [2001, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 20]
		}
	},
	{
		sdate: [1380, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 0, 1],
			Leap: false,
			Leaps: 334
		},
		gdate: [2001, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2001, 2, 21]
		}
	},
	{
		sdate: [1380, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1380, 11, 29],
			Leap: false,
			Leaps: 334
		},
		gdate: [2002, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 20]
		}
	},

	{
		sdate: [1381, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1381, 0, 1],
			Leap: false,
			Leaps: 334
		},
		gdate: [2002, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2002, 2, 21]
		}
	},
	{
		sdate: [1381, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1381, 11, 29],
			Leap: false,
			Leaps: 334
		},
		gdate: [2003, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2003, 2, 20]
		}
	},

	{
		sdate: [1382, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1382, 0, 1],
			Leap: false,
			Leaps: 334
		},
		gdate: [2003, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2003, 2, 21]
		}
	},
	{
		sdate: [1382, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1382, 11, 29],
			Leap: false,
			Leaps: 334
		},
		gdate: [2004, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2004, 2, 20]
		}
	},

	{
		sdate: [1383, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1383, 0, 1],
			Leap: true,
			Leaps: 334
		},
		gdate: [2004, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2004, 2, 21]
		}
	},
	{
		sdate: [1383, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1383, 11, 29],
			Leap: true,
			Leaps: 334
		},
		gdate: [2005, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2005, 2, 19]
		}
	},
	{
		sdate: [1383, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1383, 11, 30],
			Leap: true,
			Leaps: 334
		},
		gdate: [2005, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2005, 2, 20]
		}
	},
	{
		sdate: [1384, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1384, 0, 1],
			Leap: false,
			Leaps: 335
		},
		gdate: [2005, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2005, 2, 21]
		}
	},
	{
		sdate: [1384, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1384, 11, 29],
			Leap: false,
			Leaps: 335
		},
		gdate: [2006, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2006, 2, 20]
		}
	},

	{
		sdate: [1385, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1385, 0, 1],
			Leap: false,
			Leaps: 335
		},
		gdate: [2006, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2006, 2, 21]
		}
	},
	{
		sdate: [1385, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1385, 11, 29],
			Leap: false,
			Leaps: 335
		},
		gdate: [2007, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2007, 2, 20]
		}
	},

	{
		sdate: [1386, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1386, 0, 1],
			Leap: false,
			Leaps: 335
		},
		gdate: [2007, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2007, 2, 21]
		}
	},
	{
		sdate: [1386, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1386, 11, 29],
			Leap: false,
			Leaps: 335
		},
		gdate: [2008, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2008, 2, 20]
		}
	},

	{
		sdate: [1387, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1387, 0, 1],
			Leap: true,
			Leaps: 335
		},
		gdate: [2008, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2008, 2, 21]
		}
	},
	{
		sdate: [1387, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1387, 11, 29],
			Leap: true,
			Leaps: 335
		},
		gdate: [2009, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2009, 2, 19]
		}
	},
	{
		sdate: [1387, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1387, 11, 30],
			Leap: true,
			Leaps: 335
		},
		gdate: [2009, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2009, 2, 20]
		}
	},
	{
		sdate: [1388, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1388, 0, 1],
			Leap: false,
			Leaps: 336
		},
		gdate: [2009, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2009, 2, 21]
		}
	},
	{
		sdate: [1388, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1388, 11, 29],
			Leap: false,
			Leaps: 336
		},
		gdate: [2010, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2010, 2, 20]
		}
	},

	{
		sdate: [1389, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1389, 0, 1],
			Leap: false,
			Leaps: 336
		},
		gdate: [2010, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2010, 2, 21]
		}
	},
	{
		sdate: [1389, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1389, 11, 29],
			Leap: false,
			Leaps: 336
		},
		gdate: [2011, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2011, 2, 20]
		}
	},

	{
		sdate: [1390, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1390, 0, 1],
			Leap: false,
			Leaps: 336
		},
		gdate: [2011, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2011, 2, 21]
		}
	},
	{
		sdate: [1390, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1390, 11, 29],
			Leap: false,
			Leaps: 336
		},
		gdate: [2012, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2012, 2, 20]
		}
	},

	{
		sdate: [1391, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1391, 0, 1],
			Leap: true,
			Leaps: 336
		},
		gdate: [2012, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2012, 2, 21]
		}
	},
	{
		sdate: [1391, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1391, 11, 29],
			Leap: true,
			Leaps: 336
		},
		gdate: [2013, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2013, 2, 19]
		}
	},
	{
		sdate: [1391, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1391, 11, 30],
			Leap: true,
			Leaps: 336
		},
		gdate: [2013, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2013, 2, 20]
		}
	},
	{
		sdate: [1392, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1392, 0, 1],
			Leap: false,
			Leaps: 337
		},
		gdate: [2013, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2013, 2, 21]
		}
	},
	{
		sdate: [1392, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1392, 11, 29],
			Leap: false,
			Leaps: 337
		},
		gdate: [2014, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2014, 2, 20]
		}
	},

	{
		sdate: [1393, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1393, 0, 1],
			Leap: false,
			Leaps: 337
		},
		gdate: [2014, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2014, 2, 21]
		}
	},
	{
		sdate: [1393, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1393, 11, 29],
			Leap: false,
			Leaps: 337
		},
		gdate: [2015, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2015, 2, 20]
		}
	},

	{
		sdate: [1394, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1394, 0, 1],
			Leap: false,
			Leaps: 337
		},
		gdate: [2015, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2015, 2, 21]
		}
	},
	{
		sdate: [1394, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1394, 11, 29],
			Leap: false,
			Leaps: 337
		},
		gdate: [2016, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2016, 2, 20]
		}
	},

	{
		sdate: [1395, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1395, 0, 1],
			Leap: true,
			Leaps: 337
		},
		gdate: [2016, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2016, 2, 21]
		}
	},
	{
		sdate: [1395, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1395, 11, 29],
			Leap: true,
			Leaps: 337
		},
		gdate: [2017, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2017, 2, 19]
		}
	},
	{
		sdate: [1395, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1395, 11, 30],
			Leap: true,
			Leaps: 337
		},
		gdate: [2017, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2017, 2, 20]
		}
	},
	{
		sdate: [1396, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1396, 0, 1],
			Leap: false,
			Leaps: 338
		},
		gdate: [2017, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2017, 2, 21]
		}
	},
	{
		sdate: [1396, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1396, 11, 29],
			Leap: false,
			Leaps: 338
		},
		gdate: [2018, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2018, 2, 20]
		}
	},

	{
		sdate: [1397, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1397, 0, 1],
			Leap: false,
			Leaps: 338
		},
		gdate: [2018, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2018, 2, 21]
		}
	},
	{
		sdate: [1397, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1397, 11, 29],
			Leap: false,
			Leaps: 338
		},
		gdate: [2019, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2019, 2, 20]
		}
	},

	{
		sdate: [1398, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1398, 0, 1],
			Leap: false,
			Leaps: 338
		},
		gdate: [2019, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2019, 2, 21]
		}
	},
	{
		sdate: [1398, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1398, 11, 29],
			Leap: false,
			Leaps: 338
		},
		gdate: [2020, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2020, 2, 20]
		}
	},

	{
		sdate: [1399, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1399, 0, 1],
			Leap: true,
			Leaps: 338
		},
		gdate: [2020, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2020, 2, 21]
		}
	},
	{
		sdate: [1399, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1399, 11, 29],
			Leap: true,
			Leaps: 338
		},
		gdate: [2021, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 19]
		}
	},
	{
		sdate: [1399, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1399, 11, 30],
			Leap: true,
			Leaps: 338
		},
		gdate: [2021, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 20]
		}
	},
	{
		sdate: [1400, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 0, 1],
			Leap: false,
			Leaps: 339
		},
		gdate: [2021, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2021, 2, 21]
		}
	},
	{
		sdate: [1400, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1400, 11, 29],
			Leap: false,
			Leaps: 339
		},
		gdate: [2022, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 20]
		}
	},

	{
		sdate: [1401, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1401, 0, 1],
			Leap: false,
			Leaps: 339
		},
		gdate: [2022, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2022, 2, 21]
		}
	},
	{
		sdate: [1401, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1401, 11, 29],
			Leap: false,
			Leaps: 339
		},
		gdate: [2023, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2023, 2, 20]
		}
	},

	{
		sdate: [1402, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1402, 0, 1],
			Leap: false,
			Leaps: 339
		},
		gdate: [2023, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2023, 2, 21]
		}
	},
	{
		sdate: [1402, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1402, 11, 29],
			Leap: false,
			Leaps: 339
		},
		gdate: [2024, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2024, 2, 20]
		}
	},

	{
		sdate: [1403, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1403, 0, 1],
			Leap: true,
			Leaps: 339
		},
		gdate: [2024, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2024, 2, 21]
		}
	},
	{
		sdate: [1403, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1403, 11, 29],
			Leap: true,
			Leaps: 339
		},
		gdate: [2025, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2025, 2, 19]
		}
	},
	{
		sdate: [1403, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1403, 11, 30],
			Leap: true,
			Leaps: 339
		},
		gdate: [2025, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2025, 2, 20]
		}
	},
	{
		sdate: [1404, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1404, 0, 1],
			Leap: false,
			Leaps: 340
		},
		gdate: [2025, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2025, 2, 21]
		}
	},
	{
		sdate: [1404, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1404, 11, 29],
			Leap: false,
			Leaps: 340
		},
		gdate: [2026, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2026, 2, 20]
		}
	},

	{
		sdate: [1405, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1405, 0, 1],
			Leap: false,
			Leaps: 340
		},
		gdate: [2026, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2026, 2, 21]
		}
	},
	{
		sdate: [1405, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1405, 11, 29],
			Leap: false,
			Leaps: 340
		},
		gdate: [2027, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2027, 2, 20]
		}
	},

	{
		sdate: [1406, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1406, 0, 1],
			Leap: false,
			Leaps: 340
		},
		gdate: [2027, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2027, 2, 21]
		}
	},
	{
		sdate: [1406, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1406, 11, 29],
			Leap: false,
			Leaps: 340
		},
		gdate: [2028, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2028, 2, 20]
		}
	},

	{
		sdate: [1407, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1407, 0, 1],
			Leap: false,
			Leaps: 340
		},
		gdate: [2028, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2028, 2, 21]
		}
	},
	{
		sdate: [1407, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1407, 11, 29],
			Leap: false,
			Leaps: 340
		},
		gdate: [2029, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2029, 2, 19]
		}
	},

	{
		sdate: [1408, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1408, 0, 1],
			Leap: true,
			Leaps: 340
		},
		gdate: [2029, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2029, 2, 20]
		}
	},
	{
		sdate: [1408, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1408, 11, 29],
			Leap: true,
			Leaps: 340
		},
		gdate: [2030, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2030, 2, 19]
		}
	},
	{
		sdate: [1408, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1408, 11, 30],
			Leap: true,
			Leaps: 340
		},
		gdate: [2030, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2030, 2, 20]
		}
	},
	{
		sdate: [1409, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1409, 0, 1],
			Leap: false,
			Leaps: 341
		},
		gdate: [2030, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2030, 2, 21]
		}
	},
	{
		sdate: [1409, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1409, 11, 29],
			Leap: false,
			Leaps: 341
		},
		gdate: [2031, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2031, 2, 20]
		}
	},

	{
		sdate: [1410, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1410, 0, 1],
			Leap: false,
			Leaps: 341
		},
		gdate: [2031, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2031, 2, 21]
		}
	},
	{
		sdate: [1410, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1410, 11, 29],
			Leap: false,
			Leaps: 341
		},
		gdate: [2032, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2032, 2, 20]
		}
	},

	{
		sdate: [1411, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1411, 0, 1],
			Leap: false,
			Leaps: 341
		},
		gdate: [2032, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2032, 2, 21]
		}
	},
	{
		sdate: [1411, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1411, 11, 29],
			Leap: false,
			Leaps: 341
		},
		gdate: [2033, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2033, 2, 19]
		}
	},

	{
		sdate: [1412, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1412, 0, 1],
			Leap: true,
			Leaps: 341
		},
		gdate: [2033, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2033, 2, 20]
		}
	},
	{
		sdate: [1412, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1412, 11, 29],
			Leap: true,
			Leaps: 341
		},
		gdate: [2034, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2034, 2, 19]
		}
	},
	{
		sdate: [1412, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1412, 11, 30],
			Leap: true,
			Leaps: 341
		},
		gdate: [2034, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2034, 2, 20]
		}
	},
	{
		sdate: [1413, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1413, 0, 1],
			Leap: false,
			Leaps: 342
		},
		gdate: [2034, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2034, 2, 21]
		}
	},
	{
		sdate: [1413, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1413, 11, 29],
			Leap: false,
			Leaps: 342
		},
		gdate: [2035, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2035, 2, 20]
		}
	},

	{
		sdate: [1414, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1414, 0, 1],
			Leap: false,
			Leaps: 342
		},
		gdate: [2035, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2035, 2, 21]
		}
	},
	{
		sdate: [1414, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1414, 11, 29],
			Leap: false,
			Leaps: 342
		},
		gdate: [2036, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2036, 2, 20]
		}
	},

	{
		sdate: [1415, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1415, 0, 1],
			Leap: false,
			Leaps: 342
		},
		gdate: [2036, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2036, 2, 21]
		}
	},
	{
		sdate: [1415, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1415, 11, 29],
			Leap: false,
			Leaps: 342
		},
		gdate: [2037, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2037, 2, 19]
		}
	},

	{
		sdate: [1416, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1416, 0, 1],
			Leap: true,
			Leaps: 342
		},
		gdate: [2037, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2037, 2, 20]
		}
	},
	{
		sdate: [1416, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1416, 11, 29],
			Leap: true,
			Leaps: 342
		},
		gdate: [2038, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2038, 2, 19]
		}
	},
	{
		sdate: [1416, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1416, 11, 30],
			Leap: true,
			Leaps: 342
		},
		gdate: [2038, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2038, 2, 20]
		}
	},
	{
		sdate: [1417, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1417, 0, 1],
			Leap: false,
			Leaps: 343
		},
		gdate: [2038, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2038, 2, 21]
		}
	},
	{
		sdate: [1417, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1417, 11, 29],
			Leap: false,
			Leaps: 343
		},
		gdate: [2039, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2039, 2, 20]
		}
	},

	{
		sdate: [1418, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1418, 0, 1],
			Leap: false,
			Leaps: 343
		},
		gdate: [2039, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2039, 2, 21]
		}
	},
	{
		sdate: [1418, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1418, 11, 29],
			Leap: false,
			Leaps: 343
		},
		gdate: [2040, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2040, 2, 20]
		}
	},

	{
		sdate: [1419, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1419, 0, 1],
			Leap: false,
			Leaps: 343
		},
		gdate: [2040, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2040, 2, 21]
		}
	},
	{
		sdate: [1419, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1419, 11, 29],
			Leap: false,
			Leaps: 343
		},
		gdate: [2041, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 19]
		}
	},

	{
		sdate: [1420, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 0, 1],
			Leap: true,
			Leaps: 343
		},
		gdate: [2041, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2041, 2, 20]
		}
	},
	{
		sdate: [1420, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 29],
			Leap: true,
			Leaps: 343
		},
		gdate: [2042, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 19]
		}
	},
	{
		sdate: [1420, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1420, 11, 30],
			Leap: true,
			Leaps: 343
		},
		gdate: [2042, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 20]
		}
	},
	{
		sdate: [1421, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1421, 0, 1],
			Leap: false,
			Leaps: 344
		},
		gdate: [2042, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2042, 2, 21]
		}
	},
	{
		sdate: [1421, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1421, 11, 29],
			Leap: false,
			Leaps: 344
		},
		gdate: [2043, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2043, 2, 20]
		}
	},

	{
		sdate: [1422, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1422, 0, 1],
			Leap: false,
			Leaps: 344
		},
		gdate: [2043, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2043, 2, 21]
		}
	},
	{
		sdate: [1422, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1422, 11, 29],
			Leap: false,
			Leaps: 344
		},
		gdate: [2044, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2044, 2, 20]
		}
	},

	{
		sdate: [1423, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1423, 0, 1],
			Leap: false,
			Leaps: 344
		},
		gdate: [2044, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2044, 2, 21]
		}
	},
	{
		sdate: [1423, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1423, 11, 29],
			Leap: false,
			Leaps: 344
		},
		gdate: [2045, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2045, 2, 19]
		}
	},

	{
		sdate: [1424, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1424, 0, 1],
			Leap: true,
			Leaps: 344
		},
		gdate: [2045, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2045, 2, 20]
		}
	},
	{
		sdate: [1424, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1424, 11, 29],
			Leap: true,
			Leaps: 344
		},
		gdate: [2046, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2046, 2, 19]
		}
	},
	{
		sdate: [1424, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1424, 11, 30],
			Leap: true,
			Leaps: 344
		},
		gdate: [2046, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2046, 2, 20]
		}
	},
	{
		sdate: [1425, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1425, 0, 1],
			Leap: false,
			Leaps: 345
		},
		gdate: [2046, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2046, 2, 21]
		}
	},
	{
		sdate: [1425, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1425, 11, 29],
			Leap: false,
			Leaps: 345
		},
		gdate: [2047, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2047, 2, 20]
		}
	},

	{
		sdate: [1426, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1426, 0, 1],
			Leap: false,
			Leaps: 345
		},
		gdate: [2047, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2047, 2, 21]
		}
	},
	{
		sdate: [1426, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1426, 11, 29],
			Leap: false,
			Leaps: 345
		},
		gdate: [2048, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2048, 2, 20]
		}
	},

	{
		sdate: [1427, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1427, 0, 1],
			Leap: false,
			Leaps: 345
		},
		gdate: [2048, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2048, 2, 21]
		}
	},
	{
		sdate: [1427, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1427, 11, 29],
			Leap: false,
			Leaps: 345
		},
		gdate: [2049, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2049, 2, 19]
		}
	},

	{
		sdate: [1428, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1428, 0, 1],
			Leap: true,
			Leaps: 345
		},
		gdate: [2049, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2049, 2, 20]
		}
	},
	{
		sdate: [1428, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1428, 11, 29],
			Leap: true,
			Leaps: 345
		},
		gdate: [2050, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2050, 2, 19]
		}
	},
	{
		sdate: [1428, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1428, 11, 30],
			Leap: true,
			Leaps: 345
		},
		gdate: [2050, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2050, 2, 20]
		}
	},
	{
		sdate: [1429, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1429, 0, 1],
			Leap: false,
			Leaps: 346
		},
		gdate: [2050, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2050, 2, 21]
		}
	},
	{
		sdate: [1429, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1429, 11, 29],
			Leap: false,
			Leaps: 346
		},
		gdate: [2051, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2051, 2, 20]
		}
	},

	{
		sdate: [1430, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1430, 0, 1],
			Leap: false,
			Leaps: 346
		},
		gdate: [2051, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2051, 2, 21]
		}
	},
	{
		sdate: [1430, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1430, 11, 29],
			Leap: false,
			Leaps: 346
		},
		gdate: [2052, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2052, 2, 20]
		}
	},

	{
		sdate: [1431, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1431, 0, 1],
			Leap: false,
			Leaps: 346
		},
		gdate: [2052, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2052, 2, 21]
		}
	},
	{
		sdate: [1431, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1431, 11, 29],
			Leap: false,
			Leaps: 346
		},
		gdate: [2053, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2053, 2, 19]
		}
	},

	{
		sdate: [1432, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1432, 0, 1],
			Leap: true,
			Leaps: 346
		},
		gdate: [2053, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2053, 2, 20]
		}
	},
	{
		sdate: [1432, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1432, 11, 29],
			Leap: true,
			Leaps: 346
		},
		gdate: [2054, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2054, 2, 19]
		}
	},
	{
		sdate: [1432, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1432, 11, 30],
			Leap: true,
			Leaps: 346
		},
		gdate: [2054, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2054, 2, 20]
		}
	},
	{
		sdate: [1433, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1433, 0, 1],
			Leap: false,
			Leaps: 347
		},
		gdate: [2054, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2054, 2, 21]
		}
	},
	{
		sdate: [1433, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1433, 11, 29],
			Leap: false,
			Leaps: 347
		},
		gdate: [2055, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2055, 2, 20]
		}
	},

	{
		sdate: [1434, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1434, 0, 1],
			Leap: false,
			Leaps: 347
		},
		gdate: [2055, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2055, 2, 21]
		}
	},
	{
		sdate: [1434, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1434, 11, 29],
			Leap: false,
			Leaps: 347
		},
		gdate: [2056, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2056, 2, 20]
		}
	},

	{
		sdate: [1435, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1435, 0, 1],
			Leap: false,
			Leaps: 347
		},
		gdate: [2056, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2056, 2, 21]
		}
	},
	{
		sdate: [1435, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1435, 11, 29],
			Leap: false,
			Leaps: 347
		},
		gdate: [2057, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2057, 2, 19]
		}
	},

	{
		sdate: [1436, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1436, 0, 1],
			Leap: true,
			Leaps: 347
		},
		gdate: [2057, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2057, 2, 20]
		}
	},
	{
		sdate: [1436, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1436, 11, 29],
			Leap: true,
			Leaps: 347
		},
		gdate: [2058, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2058, 2, 19]
		}
	},
	{
		sdate: [1436, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1436, 11, 30],
			Leap: true,
			Leaps: 347
		},
		gdate: [2058, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2058, 2, 20]
		}
	},
	{
		sdate: [1437, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1437, 0, 1],
			Leap: false,
			Leaps: 348
		},
		gdate: [2058, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2058, 2, 21]
		}
	},
	{
		sdate: [1437, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1437, 11, 29],
			Leap: false,
			Leaps: 348
		},
		gdate: [2059, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2059, 2, 20]
		}
	},

	{
		sdate: [1438, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1438, 0, 1],
			Leap: false,
			Leaps: 348
		},
		gdate: [2059, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2059, 2, 21]
		}
	},
	{
		sdate: [1438, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1438, 11, 29],
			Leap: false,
			Leaps: 348
		},
		gdate: [2060, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2060, 2, 20]
		}
	},

	{
		sdate: [1439, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1439, 0, 1],
			Leap: false,
			Leaps: 348
		},
		gdate: [2060, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2060, 2, 21]
		}
	},
	{
		sdate: [1439, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1439, 11, 29],
			Leap: false,
			Leaps: 348
		},
		gdate: [2061, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 19]
		}
	},

	{
		sdate: [1440, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 0, 1],
			Leap: false,
			Leaps: 348
		},
		gdate: [2061, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2061, 2, 20]
		}
	},
	{
		sdate: [1440, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1440, 11, 29],
			Leap: false,
			Leaps: 348
		},
		gdate: [2062, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 19]
		}
	},

	{
		sdate: [1441, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1441, 0, 1],
			Leap: true,
			Leaps: 348
		},
		gdate: [2062, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2062, 2, 20]
		}
	},
	{
		sdate: [1441, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1441, 11, 29],
			Leap: true,
			Leaps: 348
		},
		gdate: [2063, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2063, 2, 19]
		}
	},
	{
		sdate: [1441, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1441, 11, 30],
			Leap: true,
			Leaps: 348
		},
		gdate: [2063, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2063, 2, 20]
		}
	},
	{
		sdate: [1442, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1442, 0, 1],
			Leap: false,
			Leaps: 349
		},
		gdate: [2063, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2063, 2, 21]
		}
	},
	{
		sdate: [1442, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1442, 11, 29],
			Leap: false,
			Leaps: 349
		},
		gdate: [2064, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2064, 2, 20]
		}
	},

	{
		sdate: [1443, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1443, 0, 1],
			Leap: false,
			Leaps: 349
		},
		gdate: [2064, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2064, 2, 21]
		}
	},
	{
		sdate: [1443, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1443, 11, 29],
			Leap: false,
			Leaps: 349
		},
		gdate: [2065, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2065, 2, 19]
		}
	},

	{
		sdate: [1444, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1444, 0, 1],
			Leap: false,
			Leaps: 349
		},
		gdate: [2065, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2065, 2, 20]
		}
	},
	{
		sdate: [1444, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1444, 11, 29],
			Leap: false,
			Leaps: 349
		},
		gdate: [2066, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2066, 2, 19]
		}
	},

	{
		sdate: [1445, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1445, 0, 1],
			Leap: true,
			Leaps: 349
		},
		gdate: [2066, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2066, 2, 20]
		}
	},
	{
		sdate: [1445, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1445, 11, 29],
			Leap: true,
			Leaps: 349
		},
		gdate: [2067, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2067, 2, 19]
		}
	},
	{
		sdate: [1445, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1445, 11, 30],
			Leap: true,
			Leaps: 349
		},
		gdate: [2067, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2067, 2, 20]
		}
	},
	{
		sdate: [1446, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1446, 0, 1],
			Leap: false,
			Leaps: 350
		},
		gdate: [2067, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2067, 2, 21]
		}
	},
	{
		sdate: [1446, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1446, 11, 29],
			Leap: false,
			Leaps: 350
		},
		gdate: [2068, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2068, 2, 20]
		}
	},

	{
		sdate: [1447, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1447, 0, 1],
			Leap: false,
			Leaps: 350
		},
		gdate: [2068, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2068, 2, 21]
		}
	},
	{
		sdate: [1447, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1447, 11, 29],
			Leap: false,
			Leaps: 350
		},
		gdate: [2069, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2069, 2, 19]
		}
	},

	{
		sdate: [1448, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1448, 0, 1],
			Leap: false,
			Leaps: 350
		},
		gdate: [2069, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2069, 2, 20]
		}
	},
	{
		sdate: [1448, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1448, 11, 29],
			Leap: false,
			Leaps: 350
		},
		gdate: [2070, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2070, 2, 19]
		}
	},

	{
		sdate: [1449, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1449, 0, 1],
			Leap: true,
			Leaps: 350
		},
		gdate: [2070, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2070, 2, 20]
		}
	},
	{
		sdate: [1449, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1449, 11, 29],
			Leap: true,
			Leaps: 350
		},
		gdate: [2071, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2071, 2, 19]
		}
	},
	{
		sdate: [1449, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1449, 11, 30],
			Leap: true,
			Leaps: 350
		},
		gdate: [2071, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2071, 2, 20]
		}
	},
	{
		sdate: [1450, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1450, 0, 1],
			Leap: false,
			Leaps: 351
		},
		gdate: [2071, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2071, 2, 21]
		}
	},
	{
		sdate: [1450, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1450, 11, 29],
			Leap: false,
			Leaps: 351
		},
		gdate: [2072, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2072, 2, 20]
		}
	},

	{
		sdate: [1451, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1451, 0, 1],
			Leap: false,
			Leaps: 351
		},
		gdate: [2072, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2072, 2, 21]
		}
	},
	{
		sdate: [1451, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1451, 11, 29],
			Leap: false,
			Leaps: 351
		},
		gdate: [2073, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2073, 2, 19]
		}
	},

	{
		sdate: [1452, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1452, 0, 1],
			Leap: false,
			Leaps: 351
		},
		gdate: [2073, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2073, 2, 20]
		}
	},
	{
		sdate: [1452, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1452, 11, 29],
			Leap: false,
			Leaps: 351
		},
		gdate: [2074, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2074, 2, 19]
		}
	},

	{
		sdate: [1453, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1453, 0, 1],
			Leap: true,
			Leaps: 351
		},
		gdate: [2074, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2074, 2, 20]
		}
	},
	{
		sdate: [1453, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1453, 11, 29],
			Leap: true,
			Leaps: 351
		},
		gdate: [2075, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2075, 2, 19]
		}
	},
	{
		sdate: [1453, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1453, 11, 30],
			Leap: true,
			Leaps: 351
		},
		gdate: [2075, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2075, 2, 20]
		}
	},
	{
		sdate: [1454, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1454, 0, 1],
			Leap: false,
			Leaps: 352
		},
		gdate: [2075, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2075, 2, 21]
		}
	},
	{
		sdate: [1454, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1454, 11, 29],
			Leap: false,
			Leaps: 352
		},
		gdate: [2076, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2076, 2, 20]
		}
	},

	{
		sdate: [1455, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1455, 0, 1],
			Leap: false,
			Leaps: 352
		},
		gdate: [2076, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2076, 2, 21]
		}
	},
	{
		sdate: [1455, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1455, 11, 29],
			Leap: false,
			Leaps: 352
		},
		gdate: [2077, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2077, 2, 19]
		}
	},

	{
		sdate: [1456, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1456, 0, 1],
			Leap: false,
			Leaps: 352
		},
		gdate: [2077, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2077, 2, 20]
		}
	},
	{
		sdate: [1456, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1456, 11, 29],
			Leap: false,
			Leaps: 352
		},
		gdate: [2078, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2078, 2, 19]
		}
	},

	{
		sdate: [1457, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1457, 0, 1],
			Leap: true,
			Leaps: 352
		},
		gdate: [2078, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2078, 2, 20]
		}
	},
	{
		sdate: [1457, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1457, 11, 29],
			Leap: true,
			Leaps: 352
		},
		gdate: [2079, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2079, 2, 19]
		}
	},
	{
		sdate: [1457, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1457, 11, 30],
			Leap: true,
			Leaps: 352
		},
		gdate: [2079, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2079, 2, 20]
		}
	},
	{
		sdate: [1458, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1458, 0, 1],
			Leap: false,
			Leaps: 353
		},
		gdate: [2079, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2079, 2, 21]
		}
	},
	{
		sdate: [1458, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1458, 11, 29],
			Leap: false,
			Leaps: 353
		},
		gdate: [2080, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2080, 2, 20]
		}
	},

	{
		sdate: [1459, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1459, 0, 1],
			Leap: false,
			Leaps: 353
		},
		gdate: [2080, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2080, 2, 21]
		}
	},
	{
		sdate: [1459, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1459, 11, 29],
			Leap: false,
			Leaps: 353
		},
		gdate: [2081, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 19]
		}
	},

	{
		sdate: [1460, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 0, 1],
			Leap: false,
			Leaps: 353
		},
		gdate: [2081, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2081, 2, 20]
		}
	},
	{
		sdate: [1460, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1460, 11, 29],
			Leap: false,
			Leaps: 353
		},
		gdate: [2082, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 19]
		}
	},

	{
		sdate: [1461, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1461, 0, 1],
			Leap: true,
			Leaps: 353
		},
		gdate: [2082, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2082, 2, 20]
		}
	},
	{
		sdate: [1461, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1461, 11, 29],
			Leap: true,
			Leaps: 353
		},
		gdate: [2083, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2083, 2, 19]
		}
	},
	{
		sdate: [1461, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1461, 11, 30],
			Leap: true,
			Leaps: 353
		},
		gdate: [2083, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2083, 2, 20]
		}
	},
	{
		sdate: [1462, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1462, 0, 1],
			Leap: false,
			Leaps: 354
		},
		gdate: [2083, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2083, 2, 21]
		}
	},
	{
		sdate: [1462, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1462, 11, 29],
			Leap: false,
			Leaps: 354
		},
		gdate: [2084, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2084, 2, 20]
		}
	},

	{
		sdate: [1463, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1463, 0, 1],
			Leap: false,
			Leaps: 354
		},
		gdate: [2084, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2084, 2, 21]
		}
	},
	{
		sdate: [1463, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1463, 11, 29],
			Leap: false,
			Leaps: 354
		},
		gdate: [2085, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2085, 2, 19]
		}
	},

	{
		sdate: [1464, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1464, 0, 1],
			Leap: false,
			Leaps: 354
		},
		gdate: [2085, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2085, 2, 20]
		}
	},
	{
		sdate: [1464, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1464, 11, 29],
			Leap: false,
			Leaps: 354
		},
		gdate: [2086, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2086, 2, 19]
		}
	},

	{
		sdate: [1465, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1465, 0, 1],
			Leap: true,
			Leaps: 354
		},
		gdate: [2086, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2086, 2, 20]
		}
	},
	{
		sdate: [1465, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1465, 11, 29],
			Leap: true,
			Leaps: 354
		},
		gdate: [2087, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2087, 2, 19]
		}
	},
	{
		sdate: [1465, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1465, 11, 30],
			Leap: true,
			Leaps: 354
		},
		gdate: [2087, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2087, 2, 20]
		}
	},
	{
		sdate: [1466, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1466, 0, 1],
			Leap: false,
			Leaps: 355
		},
		gdate: [2087, 3, 21, 0, 0, 0, 0],
		gdata: {
			gregorian: [2087, 2, 21]
		}
	},
	{
		sdate: [1466, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1466, 11, 29],
			Leap: false,
			Leaps: 355
		},
		gdate: [2088, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2088, 2, 20]
		}
	},

	{
		sdate: [1467, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1467, 0, 1],
			Leap: false,
			Leaps: 355
		},
		gdate: [2088, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2088, 2, 21]
		}
	},
	{
		sdate: [1467, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1467, 11, 29],
			Leap: false,
			Leaps: 355
		},
		gdate: [2089, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2089, 2, 19]
		}
	},

	{
		sdate: [1468, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1468, 0, 1],
			Leap: false,
			Leaps: 355
		},
		gdate: [2089, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2089, 2, 20]
		}
	},
	{
		sdate: [1468, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1468, 11, 29],
			Leap: false,
			Leaps: 355
		},
		gdate: [2090, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2090, 2, 19]
		}
	},

	{
		sdate: [1469, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1469, 0, 1],
			Leap: false,
			Leaps: 355
		},
		gdate: [2090, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2090, 2, 20]
		}
	},
	{
		sdate: [1469, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1469, 11, 29],
			Leap: false,
			Leaps: 355
		},
		gdate: [2091, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2091, 2, 19]
		}
	},

	{
		sdate: [1470, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1470, 0, 1],
			Leap: true,
			Leaps: 355
		},
		gdate: [2091, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2091, 2, 20]
		}
	},
	{
		sdate: [1470, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1470, 11, 29],
			Leap: true,
			Leaps: 355
		},
		gdate: [2092, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2092, 2, 19]
		}
	},
	{
		sdate: [1470, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1470, 11, 30],
			Leap: true,
			Leaps: 355
		},
		gdate: [2092, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2092, 2, 20]
		}
	},
	{
		sdate: [1471, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1471, 0, 1],
			Leap: false,
			Leaps: 356
		},
		gdate: [2092, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2092, 2, 21]
		}
	},
	{
		sdate: [1471, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1471, 11, 29],
			Leap: false,
			Leaps: 356
		},
		gdate: [2093, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2093, 2, 19]
		}
	},

	{
		sdate: [1472, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1472, 0, 1],
			Leap: false,
			Leaps: 356
		},
		gdate: [2093, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2093, 2, 20]
		}
	},
	{
		sdate: [1472, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1472, 11, 29],
			Leap: false,
			Leaps: 356
		},
		gdate: [2094, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2094, 2, 19]
		}
	},

	{
		sdate: [1473, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1473, 0, 1],
			Leap: false,
			Leaps: 356
		},
		gdate: [2094, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2094, 2, 20]
		}
	},
	{
		sdate: [1473, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1473, 11, 29],
			Leap: false,
			Leaps: 356
		},
		gdate: [2095, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2095, 2, 19]
		}
	},

	{
		sdate: [1474, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1474, 0, 1],
			Leap: true,
			Leaps: 356
		},
		gdate: [2095, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2095, 2, 20]
		}
	},
	{
		sdate: [1474, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1474, 11, 29],
			Leap: true,
			Leaps: 356
		},
		gdate: [2096, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2096, 2, 19]
		}
	},
	{
		sdate: [1474, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1474, 11, 30],
			Leap: true,
			Leaps: 356
		},
		gdate: [2096, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2096, 2, 20]
		}
	},
	{
		sdate: [1475, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1475, 0, 1],
			Leap: false,
			Leaps: 357
		},
		gdate: [2096, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2096, 2, 21]
		}
	},
	{
		sdate: [1475, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1475, 11, 29],
			Leap: false,
			Leaps: 357
		},
		gdate: [2097, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2097, 2, 19]
		}
	},

	{
		sdate: [1476, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1476, 0, 1],
			Leap: false,
			Leaps: 357
		},
		gdate: [2097, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2097, 2, 20]
		}
	},
	{
		sdate: [1476, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1476, 11, 29],
			Leap: false,
			Leaps: 357
		},
		gdate: [2098, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2098, 2, 19]
		}
	},

	{
		sdate: [1477, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1477, 0, 1],
			Leap: false,
			Leaps: 357
		},
		gdate: [2098, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2098, 2, 20]
		}
	},
	{
		sdate: [1477, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1477, 11, 29],
			Leap: false,
			Leaps: 357
		},
		gdate: [2099, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2099, 2, 19]
		}
	},

	{
		sdate: [1478, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1478, 0, 1],
			Leap: true,
			Leaps: 357
		},
		gdate: [2099, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2099, 2, 20]
		}
	},
	{
		sdate: [1478, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1478, 11, 29],
			Leap: true,
			Leaps: 357
		},
		gdate: [2100, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2100, 2, 19]
		}
	},
	{
		sdate: [1478, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1478, 11, 30],
			Leap: true,
			Leaps: 357
		},
		gdate: [2100, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2100, 2, 20]
		}
	},
	{
		sdate: [1479, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1479, 0, 1],
			Leap: false,
			Leaps: 358
		},
		gdate: [2100, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2100, 2, 21]
		}
	},
	{
		sdate: [1479, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1479, 11, 29],
			Leap: false,
			Leaps: 358
		},
		gdate: [2101, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 20]
		}
	},

	{
		sdate: [1480, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1480, 0, 1],
			Leap: false,
			Leaps: 358
		},
		gdate: [2101, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2101, 2, 21]
		}
	},
	{
		sdate: [1480, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1480, 11, 29],
			Leap: false,
			Leaps: 358
		},
		gdate: [2102, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 20]
		}
	},

	{
		sdate: [1481, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1481, 0, 1],
			Leap: false,
			Leaps: 358
		},
		gdate: [2102, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2102, 2, 21]
		}
	},
	{
		sdate: [1481, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1481, 11, 29],
			Leap: false,
			Leaps: 358
		},
		gdate: [2103, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2103, 2, 20]
		}
	},

	{
		sdate: [1482, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1482, 0, 1],
			Leap: true,
			Leaps: 358
		},
		gdate: [2103, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2103, 2, 21]
		}
	},
	{
		sdate: [1482, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1482, 11, 29],
			Leap: true,
			Leaps: 358
		},
		gdate: [2104, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2104, 2, 20]
		}
	},
	{
		sdate: [1482, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1482, 11, 30],
			Leap: true,
			Leaps: 358
		},
		gdate: [2104, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2104, 2, 21]
		}
	},
	{
		sdate: [1483, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1483, 0, 1],
			Leap: false,
			Leaps: 359
		},
		gdate: [2104, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2104, 2, 22]
		}
	},
	{
		sdate: [1483, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1483, 11, 29],
			Leap: false,
			Leaps: 359
		},
		gdate: [2105, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2105, 2, 20]
		}
	},

	{
		sdate: [1484, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1484, 0, 1],
			Leap: false,
			Leaps: 359
		},
		gdate: [2105, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2105, 2, 21]
		}
	},
	{
		sdate: [1484, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1484, 11, 29],
			Leap: false,
			Leaps: 359
		},
		gdate: [2106, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2106, 2, 20]
		}
	},

	{
		sdate: [1485, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1485, 0, 1],
			Leap: false,
			Leaps: 359
		},
		gdate: [2106, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2106, 2, 21]
		}
	},
	{
		sdate: [1485, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1485, 11, 29],
			Leap: false,
			Leaps: 359
		},
		gdate: [2107, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2107, 2, 20]
		}
	},

	{
		sdate: [1486, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1486, 0, 1],
			Leap: true,
			Leaps: 359
		},
		gdate: [2107, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2107, 2, 21]
		}
	},
	{
		sdate: [1486, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1486, 11, 29],
			Leap: true,
			Leaps: 359
		},
		gdate: [2108, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2108, 2, 20]
		}
	},
	{
		sdate: [1486, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1486, 11, 30],
			Leap: true,
			Leaps: 359
		},
		gdate: [2108, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2108, 2, 21]
		}
	},
	{
		sdate: [1487, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1487, 0, 1],
			Leap: false,
			Leaps: 360
		},
		gdate: [2108, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2108, 2, 22]
		}
	},
	{
		sdate: [1487, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1487, 11, 29],
			Leap: false,
			Leaps: 360
		},
		gdate: [2109, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2109, 2, 20]
		}
	},

	{
		sdate: [1488, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1488, 0, 1],
			Leap: false,
			Leaps: 360
		},
		gdate: [2109, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2109, 2, 21]
		}
	},
	{
		sdate: [1488, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1488, 11, 29],
			Leap: false,
			Leaps: 360
		},
		gdate: [2110, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2110, 2, 20]
		}
	},

	{
		sdate: [1489, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1489, 0, 1],
			Leap: false,
			Leaps: 360
		},
		gdate: [2110, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2110, 2, 21]
		}
	},
	{
		sdate: [1489, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1489, 11, 29],
			Leap: false,
			Leaps: 360
		},
		gdate: [2111, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2111, 2, 20]
		}
	},

	{
		sdate: [1490, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1490, 0, 1],
			Leap: true,
			Leaps: 360
		},
		gdate: [2111, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2111, 2, 21]
		}
	},
	{
		sdate: [1490, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1490, 11, 29],
			Leap: true,
			Leaps: 360
		},
		gdate: [2112, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2112, 2, 20]
		}
	},
	{
		sdate: [1490, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1490, 11, 30],
			Leap: true,
			Leaps: 360
		},
		gdate: [2112, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2112, 2, 21]
		}
	},
	{
		sdate: [1491, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1491, 0, 1],
			Leap: false,
			Leaps: 361
		},
		gdate: [2112, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2112, 2, 22]
		}
	},
	{
		sdate: [1491, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1491, 11, 29],
			Leap: false,
			Leaps: 361
		},
		gdate: [2113, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2113, 2, 20]
		}
	},

	{
		sdate: [1492, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1492, 0, 1],
			Leap: false,
			Leaps: 361
		},
		gdate: [2113, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2113, 2, 21]
		}
	},
	{
		sdate: [1492, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1492, 11, 29],
			Leap: false,
			Leaps: 361
		},
		gdate: [2114, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2114, 2, 20]
		}
	},

	{
		sdate: [1493, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1493, 0, 1],
			Leap: false,
			Leaps: 361
		},
		gdate: [2114, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2114, 2, 21]
		}
	},
	{
		sdate: [1493, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1493, 11, 29],
			Leap: false,
			Leaps: 361
		},
		gdate: [2115, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2115, 2, 20]
		}
	},

	{
		sdate: [1494, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1494, 0, 1],
			Leap: true,
			Leaps: 361
		},
		gdate: [2115, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2115, 2, 21]
		}
	},
	{
		sdate: [1494, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1494, 11, 29],
			Leap: true,
			Leaps: 361
		},
		gdate: [2116, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2116, 2, 20]
		}
	},
	{
		sdate: [1494, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1494, 11, 30],
			Leap: true,
			Leaps: 361
		},
		gdate: [2116, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2116, 2, 21]
		}
	},
	{
		sdate: [1495, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1495, 0, 1],
			Leap: false,
			Leaps: 362
		},
		gdate: [2116, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2116, 2, 22]
		}
	},
	{
		sdate: [1495, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1495, 11, 29],
			Leap: false,
			Leaps: 362
		},
		gdate: [2117, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2117, 2, 20]
		}
	},

	{
		sdate: [1496, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1496, 0, 1],
			Leap: false,
			Leaps: 362
		},
		gdate: [2117, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2117, 2, 21]
		}
	},
	{
		sdate: [1496, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1496, 11, 29],
			Leap: false,
			Leaps: 362
		},
		gdate: [2118, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2118, 2, 20]
		}
	},

	{
		sdate: [1497, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1497, 0, 1],
			Leap: false,
			Leaps: 362
		},
		gdate: [2118, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2118, 2, 21]
		}
	},
	{
		sdate: [1497, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1497, 11, 29],
			Leap: false,
			Leaps: 362
		},
		gdate: [2119, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2119, 2, 20]
		}
	},

	{
		sdate: [1498, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1498, 0, 1],
			Leap: true,
			Leaps: 362
		},
		gdate: [2119, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2119, 2, 21]
		}
	},
	{
		sdate: [1498, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1498, 11, 29],
			Leap: true,
			Leaps: 362
		},
		gdate: [2120, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2120, 2, 20]
		}
	},
	{
		sdate: [1498, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1498, 11, 30],
			Leap: true,
			Leaps: 362
		},
		gdate: [2120, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2120, 2, 21]
		}
	},
	{
		sdate: [1499, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1499, 0, 1],
			Leap: false,
			Leaps: 363
		},
		gdate: [2120, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2120, 2, 22]
		}
	},
	{
		sdate: [1499, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1499, 11, 29],
			Leap: false,
			Leaps: 363
		},
		gdate: [2121, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 20]
		}
	},

	{
		sdate: [1500, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1500, 0, 1],
			Leap: false,
			Leaps: 363
		},
		gdate: [2121, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2121, 2, 21]
		}
	},
	{
		sdate: [1500, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1500, 11, 29],
			Leap: false,
			Leaps: 363
		},
		gdate: [2122, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 20]
		}
	},

	{
		sdate: [1501, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1501, 0, 1],
			Leap: false,
			Leaps: 363
		},
		gdate: [2122, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2122, 2, 21]
		}
	},
	{
		sdate: [1501, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1501, 11, 29],
			Leap: false,
			Leaps: 363
		},
		gdate: [2123, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2123, 2, 20]
		}
	},

	{
		sdate: [1502, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1502, 0, 1],
			Leap: false,
			Leaps: 363
		},
		gdate: [2123, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2123, 2, 21]
		}
	},
	{
		sdate: [1502, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1502, 11, 29],
			Leap: false,
			Leaps: 363
		},
		gdate: [2124, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2124, 2, 20]
		}
	},

	{
		sdate: [1503, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1503, 0, 1],
			Leap: true,
			Leaps: 363
		},
		gdate: [2124, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2124, 2, 21]
		}
	},
	{
		sdate: [1503, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1503, 11, 29],
			Leap: true,
			Leaps: 363
		},
		gdate: [2125, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2125, 2, 19]
		}
	},
	{
		sdate: [1503, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1503, 11, 30],
			Leap: true,
			Leaps: 363
		},
		gdate: [2125, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2125, 2, 20]
		}
	},
	{
		sdate: [1504, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1504, 0, 1],
			Leap: false,
			Leaps: 364
		},
		gdate: [2125, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2125, 2, 21]
		}
	},
	{
		sdate: [1504, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1504, 11, 29],
			Leap: false,
			Leaps: 364
		},
		gdate: [2126, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2126, 2, 20]
		}
	},

	{
		sdate: [1505, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1505, 0, 1],
			Leap: false,
			Leaps: 364
		},
		gdate: [2126, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2126, 2, 21]
		}
	},
	{
		sdate: [1505, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1505, 11, 29],
			Leap: false,
			Leaps: 364
		},
		gdate: [2127, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2127, 2, 20]
		}
	},

	{
		sdate: [1506, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1506, 0, 1],
			Leap: false,
			Leaps: 364
		},
		gdate: [2127, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2127, 2, 21]
		}
	},
	{
		sdate: [1506, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1506, 11, 29],
			Leap: false,
			Leaps: 364
		},
		gdate: [2128, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2128, 2, 20]
		}
	},

	{
		sdate: [1507, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1507, 0, 1],
			Leap: true,
			Leaps: 364
		},
		gdate: [2128, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2128, 2, 21]
		}
	},
	{
		sdate: [1507, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1507, 11, 29],
			Leap: true,
			Leaps: 364
		},
		gdate: [2129, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2129, 2, 19]
		}
	},
	{
		sdate: [1507, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1507, 11, 30],
			Leap: true,
			Leaps: 364
		},
		gdate: [2129, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2129, 2, 20]
		}
	},
	{
		sdate: [1508, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1508, 0, 1],
			Leap: false,
			Leaps: 365
		},
		gdate: [2129, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2129, 2, 21]
		}
	},
	{
		sdate: [1508, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1508, 11, 29],
			Leap: false,
			Leaps: 365
		},
		gdate: [2130, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2130, 2, 20]
		}
	},

	{
		sdate: [1509, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1509, 0, 1],
			Leap: false,
			Leaps: 365
		},
		gdate: [2130, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2130, 2, 21]
		}
	},
	{
		sdate: [1509, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1509, 11, 29],
			Leap: false,
			Leaps: 365
		},
		gdate: [2131, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2131, 2, 20]
		}
	},

	{
		sdate: [1510, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1510, 0, 1],
			Leap: false,
			Leaps: 365
		},
		gdate: [2131, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2131, 2, 21]
		}
	},
	{
		sdate: [1510, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1510, 11, 29],
			Leap: false,
			Leaps: 365
		},
		gdate: [2132, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2132, 2, 20]
		}
	},

	{
		sdate: [1511, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1511, 0, 1],
			Leap: true,
			Leaps: 365
		},
		gdate: [2132, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2132, 2, 21]
		}
	},
	{
		sdate: [1511, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1511, 11, 29],
			Leap: true,
			Leaps: 365
		},
		gdate: [2133, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2133, 2, 19]
		}
	},
	{
		sdate: [1511, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1511, 11, 30],
			Leap: true,
			Leaps: 365
		},
		gdate: [2133, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2133, 2, 20]
		}
	},
	{
		sdate: [1512, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1512, 0, 1],
			Leap: false,
			Leaps: 366
		},
		gdate: [2133, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2133, 2, 21]
		}
	},
	{
		sdate: [1512, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1512, 11, 29],
			Leap: false,
			Leaps: 366
		},
		gdate: [2134, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2134, 2, 20]
		}
	},

	{
		sdate: [1513, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1513, 0, 1],
			Leap: false,
			Leaps: 366
		},
		gdate: [2134, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2134, 2, 21]
		}
	},
	{
		sdate: [1513, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1513, 11, 29],
			Leap: false,
			Leaps: 366
		},
		gdate: [2135, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2135, 2, 20]
		}
	},

	{
		sdate: [1514, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1514, 0, 1],
			Leap: false,
			Leaps: 366
		},
		gdate: [2135, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2135, 2, 21]
		}
	},
	{
		sdate: [1514, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1514, 11, 29],
			Leap: false,
			Leaps: 366
		},
		gdate: [2136, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2136, 2, 20]
		}
	},

	{
		sdate: [1515, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1515, 0, 1],
			Leap: true,
			Leaps: 366
		},
		gdate: [2136, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2136, 2, 21]
		}
	},
	{
		sdate: [1515, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1515, 11, 29],
			Leap: true,
			Leaps: 366
		},
		gdate: [2137, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2137, 2, 19]
		}
	},
	{
		sdate: [1515, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1515, 11, 30],
			Leap: true,
			Leaps: 366
		},
		gdate: [2137, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2137, 2, 20]
		}
	},
	{
		sdate: [1516, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1516, 0, 1],
			Leap: false,
			Leaps: 367
		},
		gdate: [2137, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2137, 2, 21]
		}
	},
	{
		sdate: [1516, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1516, 11, 29],
			Leap: false,
			Leaps: 367
		},
		gdate: [2138, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2138, 2, 20]
		}
	},

	{
		sdate: [1517, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1517, 0, 1],
			Leap: false,
			Leaps: 367
		},
		gdate: [2138, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2138, 2, 21]
		}
	},
	{
		sdate: [1517, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1517, 11, 29],
			Leap: false,
			Leaps: 367
		},
		gdate: [2139, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2139, 2, 20]
		}
	},

	{
		sdate: [1518, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1518, 0, 1],
			Leap: false,
			Leaps: 367
		},
		gdate: [2139, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2139, 2, 21]
		}
	},
	{
		sdate: [1518, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1518, 11, 29],
			Leap: false,
			Leaps: 367
		},
		gdate: [2140, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2140, 2, 20]
		}
	},

	{
		sdate: [1519, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1519, 0, 1],
			Leap: true,
			Leaps: 367
		},
		gdate: [2140, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2140, 2, 21]
		}
	},
	{
		sdate: [1519, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1519, 11, 29],
			Leap: true,
			Leaps: 367
		},
		gdate: [2141, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 19]
		}
	},
	{
		sdate: [1519, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1519, 11, 30],
			Leap: true,
			Leaps: 367
		},
		gdate: [2141, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 20]
		}
	},
	{
		sdate: [1520, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1520, 0, 1],
			Leap: false,
			Leaps: 368
		},
		gdate: [2141, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2141, 2, 21]
		}
	},
	{
		sdate: [1520, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1520, 11, 29],
			Leap: false,
			Leaps: 368
		},
		gdate: [2142, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 20]
		}
	},

	{
		sdate: [1521, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1521, 0, 1],
			Leap: false,
			Leaps: 368
		},
		gdate: [2142, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2142, 2, 21]
		}
	},
	{
		sdate: [1521, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1521, 11, 29],
			Leap: false,
			Leaps: 368
		},
		gdate: [2143, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2143, 2, 20]
		}
	},

	{
		sdate: [1522, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1522, 0, 1],
			Leap: false,
			Leaps: 368
		},
		gdate: [2143, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2143, 2, 21]
		}
	},
	{
		sdate: [1522, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1522, 11, 29],
			Leap: false,
			Leaps: 368
		},
		gdate: [2144, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2144, 2, 20]
		}
	},

	{
		sdate: [1523, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1523, 0, 1],
			Leap: true,
			Leaps: 368
		},
		gdate: [2144, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2144, 2, 21]
		}
	},
	{
		sdate: [1523, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1523, 11, 29],
			Leap: true,
			Leaps: 368
		},
		gdate: [2145, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2145, 2, 19]
		}
	},
	{
		sdate: [1523, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1523, 11, 30],
			Leap: true,
			Leaps: 368
		},
		gdate: [2145, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2145, 2, 20]
		}
	},
	{
		sdate: [1524, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1524, 0, 1],
			Leap: false,
			Leaps: 369
		},
		gdate: [2145, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2145, 2, 21]
		}
	},
	{
		sdate: [1524, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1524, 11, 29],
			Leap: false,
			Leaps: 369
		},
		gdate: [2146, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2146, 2, 20]
		}
	},

	{
		sdate: [1525, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1525, 0, 1],
			Leap: false,
			Leaps: 369
		},
		gdate: [2146, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2146, 2, 21]
		}
	},
	{
		sdate: [1525, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1525, 11, 29],
			Leap: false,
			Leaps: 369
		},
		gdate: [2147, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2147, 2, 20]
		}
	},

	{
		sdate: [1526, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1526, 0, 1],
			Leap: false,
			Leaps: 369
		},
		gdate: [2147, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2147, 2, 21]
		}
	},
	{
		sdate: [1526, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1526, 11, 29],
			Leap: false,
			Leaps: 369
		},
		gdate: [2148, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2148, 2, 20]
		}
	},

	{
		sdate: [1527, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1527, 0, 1],
			Leap: true,
			Leaps: 369
		},
		gdate: [2148, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2148, 2, 21]
		}
	},
	{
		sdate: [1527, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1527, 11, 29],
			Leap: true,
			Leaps: 369
		},
		gdate: [2149, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2149, 2, 19]
		}
	},
	{
		sdate: [1527, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1527, 11, 30],
			Leap: true,
			Leaps: 369
		},
		gdate: [2149, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2149, 2, 20]
		}
	},
	{
		sdate: [1528, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1528, 0, 1],
			Leap: false,
			Leaps: 370
		},
		gdate: [2149, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2149, 2, 21]
		}
	},
	{
		sdate: [1528, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1528, 11, 29],
			Leap: false,
			Leaps: 370
		},
		gdate: [2150, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2150, 2, 20]
		}
	},

	{
		sdate: [1529, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1529, 0, 1],
			Leap: false,
			Leaps: 370
		},
		gdate: [2150, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2150, 2, 21]
		}
	},
	{
		sdate: [1529, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1529, 11, 29],
			Leap: false,
			Leaps: 370
		},
		gdate: [2151, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2151, 2, 20]
		}
	},

	{
		sdate: [1530, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1530, 0, 1],
			Leap: false,
			Leaps: 370
		},
		gdate: [2151, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2151, 2, 21]
		}
	},
	{
		sdate: [1530, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1530, 11, 29],
			Leap: false,
			Leaps: 370
		},
		gdate: [2152, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2152, 2, 20]
		}
	},

	{
		sdate: [1531, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1531, 0, 1],
			Leap: true,
			Leaps: 370
		},
		gdate: [2152, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2152, 2, 21]
		}
	},
	{
		sdate: [1531, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1531, 11, 29],
			Leap: true,
			Leaps: 370
		},
		gdate: [2153, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2153, 2, 19]
		}
	},
	{
		sdate: [1531, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1531, 11, 30],
			Leap: true,
			Leaps: 370
		},
		gdate: [2153, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2153, 2, 20]
		}
	},
	{
		sdate: [1532, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1532, 0, 1],
			Leap: false,
			Leaps: 371
		},
		gdate: [2153, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2153, 2, 21]
		}
	},
	{
		sdate: [1532, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1532, 11, 29],
			Leap: false,
			Leaps: 371
		},
		gdate: [2154, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2154, 2, 20]
		}
	},

	{
		sdate: [1533, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1533, 0, 1],
			Leap: false,
			Leaps: 371
		},
		gdate: [2154, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2154, 2, 21]
		}
	},
	{
		sdate: [1533, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1533, 11, 29],
			Leap: false,
			Leaps: 371
		},
		gdate: [2155, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2155, 2, 20]
		}
	},

	{
		sdate: [1534, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1534, 0, 1],
			Leap: false,
			Leaps: 371
		},
		gdate: [2155, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2155, 2, 21]
		}
	},
	{
		sdate: [1534, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1534, 11, 29],
			Leap: false,
			Leaps: 371
		},
		gdate: [2156, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2156, 2, 20]
		}
	},

	{
		sdate: [1535, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1535, 0, 1],
			Leap: false,
			Leaps: 371
		},
		gdate: [2156, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2156, 2, 21]
		}
	},
	{
		sdate: [1535, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1535, 11, 29],
			Leap: false,
			Leaps: 371
		},
		gdate: [2157, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2157, 2, 19]
		}
	},

	{
		sdate: [1536, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1536, 0, 1],
			Leap: true,
			Leaps: 371
		},
		gdate: [2157, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2157, 2, 20]
		}
	},
	{
		sdate: [1536, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1536, 11, 29],
			Leap: true,
			Leaps: 371
		},
		gdate: [2158, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2158, 2, 19]
		}
	},
	{
		sdate: [1536, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1536, 11, 30],
			Leap: true,
			Leaps: 371
		},
		gdate: [2158, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2158, 2, 20]
		}
	},
	{
		sdate: [1537, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1537, 0, 1],
			Leap: false,
			Leaps: 372
		},
		gdate: [2158, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2158, 2, 21]
		}
	},
	{
		sdate: [1537, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1537, 11, 29],
			Leap: false,
			Leaps: 372
		},
		gdate: [2159, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2159, 2, 20]
		}
	},

	{
		sdate: [1538, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1538, 0, 1],
			Leap: false,
			Leaps: 372
		},
		gdate: [2159, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2159, 2, 21]
		}
	},
	{
		sdate: [1538, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1538, 11, 29],
			Leap: false,
			Leaps: 372
		},
		gdate: [2160, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2160, 2, 20]
		}
	},

	{
		sdate: [1539, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1539, 0, 1],
			Leap: false,
			Leaps: 372
		},
		gdate: [2160, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2160, 2, 21]
		}
	},
	{
		sdate: [1539, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1539, 11, 29],
			Leap: false,
			Leaps: 372
		},
		gdate: [2161, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 19]
		}
	},

	{
		sdate: [1540, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 0, 1],
			Leap: true,
			Leaps: 372
		},
		gdate: [2161, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2161, 2, 20]
		}
	},
	{
		sdate: [1540, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 29],
			Leap: true,
			Leaps: 372
		},
		gdate: [2162, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 19]
		}
	},
	{
		sdate: [1540, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1540, 11, 30],
			Leap: true,
			Leaps: 372
		},
		gdate: [2162, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 20]
		}
	},
	{
		sdate: [1541, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1541, 0, 1],
			Leap: false,
			Leaps: 373
		},
		gdate: [2162, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2162, 2, 21]
		}
	},
	{
		sdate: [1541, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1541, 11, 29],
			Leap: false,
			Leaps: 373
		},
		gdate: [2163, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2163, 2, 20]
		}
	},

	{
		sdate: [1542, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1542, 0, 1],
			Leap: false,
			Leaps: 373
		},
		gdate: [2163, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2163, 2, 21]
		}
	},
	{
		sdate: [1542, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1542, 11, 29],
			Leap: false,
			Leaps: 373
		},
		gdate: [2164, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2164, 2, 20]
		}
	},

	{
		sdate: [1543, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1543, 0, 1],
			Leap: false,
			Leaps: 373
		},
		gdate: [2164, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2164, 2, 21]
		}
	},
	{
		sdate: [1543, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1543, 11, 29],
			Leap: false,
			Leaps: 373
		},
		gdate: [2165, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2165, 2, 19]
		}
	},

	{
		sdate: [1544, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1544, 0, 1],
			Leap: true,
			Leaps: 373
		},
		gdate: [2165, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2165, 2, 20]
		}
	},
	{
		sdate: [1544, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1544, 11, 29],
			Leap: true,
			Leaps: 373
		},
		gdate: [2166, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2166, 2, 19]
		}
	},
	{
		sdate: [1544, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1544, 11, 30],
			Leap: true,
			Leaps: 373
		},
		gdate: [2166, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2166, 2, 20]
		}
	},
	{
		sdate: [1545, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1545, 0, 1],
			Leap: false,
			Leaps: 374
		},
		gdate: [2166, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2166, 2, 21]
		}
	},
	{
		sdate: [1545, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1545, 11, 29],
			Leap: false,
			Leaps: 374
		},
		gdate: [2167, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2167, 2, 20]
		}
	},

	{
		sdate: [1546, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1546, 0, 1],
			Leap: false,
			Leaps: 374
		},
		gdate: [2167, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2167, 2, 21]
		}
	},
	{
		sdate: [1546, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1546, 11, 29],
			Leap: false,
			Leaps: 374
		},
		gdate: [2168, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2168, 2, 20]
		}
	},

	{
		sdate: [1547, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1547, 0, 1],
			Leap: false,
			Leaps: 374
		},
		gdate: [2168, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2168, 2, 21]
		}
	},
	{
		sdate: [1547, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1547, 11, 29],
			Leap: false,
			Leaps: 374
		},
		gdate: [2169, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2169, 2, 19]
		}
	},

	{
		sdate: [1548, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1548, 0, 1],
			Leap: true,
			Leaps: 374
		},
		gdate: [2169, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2169, 2, 20]
		}
	},
	{
		sdate: [1548, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1548, 11, 29],
			Leap: true,
			Leaps: 374
		},
		gdate: [2170, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2170, 2, 19]
		}
	},
	{
		sdate: [1548, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1548, 11, 30],
			Leap: true,
			Leaps: 374
		},
		gdate: [2170, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2170, 2, 20]
		}
	},
	{
		sdate: [1549, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1549, 0, 1],
			Leap: false,
			Leaps: 375
		},
		gdate: [2170, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2170, 2, 21]
		}
	},
	{
		sdate: [1549, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1549, 11, 29],
			Leap: false,
			Leaps: 375
		},
		gdate: [2171, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2171, 2, 20]
		}
	},

	{
		sdate: [1550, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1550, 0, 1],
			Leap: false,
			Leaps: 375
		},
		gdate: [2171, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2171, 2, 21]
		}
	},
	{
		sdate: [1550, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1550, 11, 29],
			Leap: false,
			Leaps: 375
		},
		gdate: [2172, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2172, 2, 20]
		}
	},

	{
		sdate: [1551, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1551, 0, 1],
			Leap: false,
			Leaps: 375
		},
		gdate: [2172, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2172, 2, 21]
		}
	},
	{
		sdate: [1551, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1551, 11, 29],
			Leap: false,
			Leaps: 375
		},
		gdate: [2173, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2173, 2, 19]
		}
	},

	{
		sdate: [1552, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1552, 0, 1],
			Leap: true,
			Leaps: 375
		},
		gdate: [2173, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2173, 2, 20]
		}
	},
	{
		sdate: [1552, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1552, 11, 29],
			Leap: true,
			Leaps: 375
		},
		gdate: [2174, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2174, 2, 19]
		}
	},
	{
		sdate: [1552, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1552, 11, 30],
			Leap: true,
			Leaps: 375
		},
		gdate: [2174, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2174, 2, 20]
		}
	},
	{
		sdate: [1553, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1553, 0, 1],
			Leap: false,
			Leaps: 376
		},
		gdate: [2174, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2174, 2, 21]
		}
	},
	{
		sdate: [1553, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1553, 11, 29],
			Leap: false,
			Leaps: 376
		},
		gdate: [2175, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2175, 2, 20]
		}
	},

	{
		sdate: [1554, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1554, 0, 1],
			Leap: false,
			Leaps: 376
		},
		gdate: [2175, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2175, 2, 21]
		}
	},
	{
		sdate: [1554, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1554, 11, 29],
			Leap: false,
			Leaps: 376
		},
		gdate: [2176, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2176, 2, 20]
		}
	},

	{
		sdate: [1555, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1555, 0, 1],
			Leap: false,
			Leaps: 376
		},
		gdate: [2176, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2176, 2, 21]
		}
	},
	{
		sdate: [1555, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1555, 11, 29],
			Leap: false,
			Leaps: 376
		},
		gdate: [2177, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2177, 2, 19]
		}
	},

	{
		sdate: [1556, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1556, 0, 1],
			Leap: true,
			Leaps: 376
		},
		gdate: [2177, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2177, 2, 20]
		}
	},
	{
		sdate: [1556, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1556, 11, 29],
			Leap: true,
			Leaps: 376
		},
		gdate: [2178, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2178, 2, 19]
		}
	},
	{
		sdate: [1556, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1556, 11, 30],
			Leap: true,
			Leaps: 376
		},
		gdate: [2178, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2178, 2, 20]
		}
	},
	{
		sdate: [1557, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1557, 0, 1],
			Leap: false,
			Leaps: 377
		},
		gdate: [2178, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2178, 2, 21]
		}
	},
	{
		sdate: [1557, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1557, 11, 29],
			Leap: false,
			Leaps: 377
		},
		gdate: [2179, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2179, 2, 20]
		}
	},

	{
		sdate: [1558, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1558, 0, 1],
			Leap: false,
			Leaps: 377
		},
		gdate: [2179, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2179, 2, 21]
		}
	},
	{
		sdate: [1558, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1558, 11, 29],
			Leap: false,
			Leaps: 377
		},
		gdate: [2180, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2180, 2, 20]
		}
	},

	{
		sdate: [1559, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1559, 0, 1],
			Leap: false,
			Leaps: 377
		},
		gdate: [2180, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2180, 2, 21]
		}
	},
	{
		sdate: [1559, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1559, 11, 29],
			Leap: false,
			Leaps: 377
		},
		gdate: [2181, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 19]
		}
	},

	{
		sdate: [1560, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 0, 1],
			Leap: true,
			Leaps: 377
		},
		gdate: [2181, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2181, 2, 20]
		}
	},
	{
		sdate: [1560, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 29],
			Leap: true,
			Leaps: 377
		},
		gdate: [2182, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 19]
		}
	},
	{
		sdate: [1560, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1560, 11, 30],
			Leap: true,
			Leaps: 377
		},
		gdate: [2182, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 20]
		}
	},
	{
		sdate: [1561, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1561, 0, 1],
			Leap: false,
			Leaps: 378
		},
		gdate: [2182, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2182, 2, 21]
		}
	},
	{
		sdate: [1561, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1561, 11, 29],
			Leap: false,
			Leaps: 378
		},
		gdate: [2183, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2183, 2, 20]
		}
	},

	{
		sdate: [1562, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1562, 0, 1],
			Leap: false,
			Leaps: 378
		},
		gdate: [2183, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2183, 2, 21]
		}
	},
	{
		sdate: [1562, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1562, 11, 29],
			Leap: false,
			Leaps: 378
		},
		gdate: [2184, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2184, 2, 20]
		}
	},

	{
		sdate: [1563, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1563, 0, 1],
			Leap: false,
			Leaps: 378
		},
		gdate: [2184, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2184, 2, 21]
		}
	},
	{
		sdate: [1563, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1563, 11, 29],
			Leap: false,
			Leaps: 378
		},
		gdate: [2185, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2185, 2, 19]
		}
	},

	{
		sdate: [1564, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1564, 0, 1],
			Leap: true,
			Leaps: 378
		},
		gdate: [2185, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2185, 2, 20]
		}
	},
	{
		sdate: [1564, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1564, 11, 29],
			Leap: true,
			Leaps: 378
		},
		gdate: [2186, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2186, 2, 19]
		}
	},
	{
		sdate: [1564, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1564, 11, 30],
			Leap: true,
			Leaps: 378
		},
		gdate: [2186, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2186, 2, 20]
		}
	},
	{
		sdate: [1565, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1565, 0, 1],
			Leap: false,
			Leaps: 379
		},
		gdate: [2186, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2186, 2, 21]
		}
	},
	{
		sdate: [1565, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1565, 11, 29],
			Leap: false,
			Leaps: 379
		},
		gdate: [2187, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2187, 2, 20]
		}
	},

	{
		sdate: [1566, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1566, 0, 1],
			Leap: false,
			Leaps: 379
		},
		gdate: [2187, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2187, 2, 21]
		}
	},
	{
		sdate: [1566, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1566, 11, 29],
			Leap: false,
			Leaps: 379
		},
		gdate: [2188, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2188, 2, 20]
		}
	},

	{
		sdate: [1567, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1567, 0, 1],
			Leap: false,
			Leaps: 379
		},
		gdate: [2188, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2188, 2, 21]
		}
	},
	{
		sdate: [1567, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1567, 11, 29],
			Leap: false,
			Leaps: 379
		},
		gdate: [2189, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2189, 2, 19]
		}
	},

	{
		sdate: [1568, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1568, 0, 1],
			Leap: false,
			Leaps: 379
		},
		gdate: [2189, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2189, 2, 20]
		}
	},
	{
		sdate: [1568, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1568, 11, 29],
			Leap: false,
			Leaps: 379
		},
		gdate: [2190, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2190, 2, 19]
		}
	},

	{
		sdate: [1569, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1569, 0, 1],
			Leap: true,
			Leaps: 379
		},
		gdate: [2190, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2190, 2, 20]
		}
	},
	{
		sdate: [1569, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1569, 11, 29],
			Leap: true,
			Leaps: 379
		},
		gdate: [2191, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2191, 2, 19]
		}
	},
	{
		sdate: [1569, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1569, 11, 30],
			Leap: true,
			Leaps: 379
		},
		gdate: [2191, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2191, 2, 20]
		}
	},
	{
		sdate: [1570, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1570, 0, 1],
			Leap: false,
			Leaps: 380
		},
		gdate: [2191, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2191, 2, 21]
		}
	},
	{
		sdate: [1570, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1570, 11, 29],
			Leap: false,
			Leaps: 380
		},
		gdate: [2192, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2192, 2, 20]
		}
	},

	{
		sdate: [1571, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1571, 0, 1],
			Leap: false,
			Leaps: 380
		},
		gdate: [2192, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2192, 2, 21]
		}
	},
	{
		sdate: [1571, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1571, 11, 29],
			Leap: false,
			Leaps: 380
		},
		gdate: [2193, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2193, 2, 19]
		}
	},

	{
		sdate: [1572, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1572, 0, 1],
			Leap: false,
			Leaps: 380
		},
		gdate: [2193, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2193, 2, 20]
		}
	},
	{
		sdate: [1572, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1572, 11, 29],
			Leap: false,
			Leaps: 380
		},
		gdate: [2194, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2194, 2, 19]
		}
	},

	{
		sdate: [1573, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1573, 0, 1],
			Leap: true,
			Leaps: 380
		},
		gdate: [2194, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2194, 2, 20]
		}
	},
	{
		sdate: [1573, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1573, 11, 29],
			Leap: true,
			Leaps: 380
		},
		gdate: [2195, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2195, 2, 19]
		}
	},
	{
		sdate: [1573, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1573, 11, 30],
			Leap: true,
			Leaps: 380
		},
		gdate: [2195, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2195, 2, 20]
		}
	},
	{
		sdate: [1574, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1574, 0, 1],
			Leap: false,
			Leaps: 381
		},
		gdate: [2195, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2195, 2, 21]
		}
	},
	{
		sdate: [1574, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1574, 11, 29],
			Leap: false,
			Leaps: 381
		},
		gdate: [2196, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2196, 2, 20]
		}
	},

	{
		sdate: [1575, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1575, 0, 1],
			Leap: false,
			Leaps: 381
		},
		gdate: [2196, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2196, 2, 21]
		}
	},
	{
		sdate: [1575, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1575, 11, 29],
			Leap: false,
			Leaps: 381
		},
		gdate: [2197, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2197, 2, 19]
		}
	},

	{
		sdate: [1576, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1576, 0, 1],
			Leap: false,
			Leaps: 381
		},
		gdate: [2197, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2197, 2, 20]
		}
	},
	{
		sdate: [1576, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1576, 11, 29],
			Leap: false,
			Leaps: 381
		},
		gdate: [2198, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2198, 2, 19]
		}
	},

	{
		sdate: [1577, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1577, 0, 1],
			Leap: true,
			Leaps: 381
		},
		gdate: [2198, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2198, 2, 20]
		}
	},
	{
		sdate: [1577, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1577, 11, 29],
			Leap: true,
			Leaps: 381
		},
		gdate: [2199, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2199, 2, 19]
		}
	},
	{
		sdate: [1577, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1577, 11, 30],
			Leap: true,
			Leaps: 381
		},
		gdate: [2199, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2199, 2, 20]
		}
	},
	{
		sdate: [1578, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1578, 0, 1],
			Leap: false,
			Leaps: 382
		},
		gdate: [2199, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2199, 2, 21]
		}
	},
	{
		sdate: [1578, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1578, 11, 29],
			Leap: false,
			Leaps: 382
		},
		gdate: [2200, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2200, 2, 20]
		}
	},

	{
		sdate: [1579, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1579, 0, 1],
			Leap: false,
			Leaps: 382
		},
		gdate: [2200, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2200, 2, 21]
		}
	},
	{
		sdate: [1579, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1579, 11, 29],
			Leap: false,
			Leaps: 382
		},
		gdate: [2201, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 20]
		}
	},

	{
		sdate: [1580, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1580, 0, 1],
			Leap: false,
			Leaps: 382
		},
		gdate: [2201, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2201, 2, 21]
		}
	},
	{
		sdate: [1580, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1580, 11, 29],
			Leap: false,
			Leaps: 382
		},
		gdate: [2202, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 20]
		}
	},

	{
		sdate: [1581, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1581, 0, 1],
			Leap: true,
			Leaps: 382
		},
		gdate: [2202, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2202, 2, 21]
		}
	},
	{
		sdate: [1581, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1581, 11, 29],
			Leap: true,
			Leaps: 382
		},
		gdate: [2203, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2203, 2, 20]
		}
	},
	{
		sdate: [1581, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1581, 11, 30],
			Leap: true,
			Leaps: 382
		},
		gdate: [2203, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2203, 2, 21]
		}
	},
	{
		sdate: [1582, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1582, 0, 1],
			Leap: false,
			Leaps: 383
		},
		gdate: [2203, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2203, 2, 22]
		}
	},
	{
		sdate: [1582, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1582, 11, 29],
			Leap: false,
			Leaps: 383
		},
		gdate: [2204, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2204, 2, 21]
		}
	},

	{
		sdate: [1583, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1583, 0, 1],
			Leap: false,
			Leaps: 383
		},
		gdate: [2204, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2204, 2, 22]
		}
	},
	{
		sdate: [1583, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1583, 11, 29],
			Leap: false,
			Leaps: 383
		},
		gdate: [2205, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2205, 2, 20]
		}
	},

	{
		sdate: [1584, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1584, 0, 1],
			Leap: false,
			Leaps: 383
		},
		gdate: [2205, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2205, 2, 21]
		}
	},
	{
		sdate: [1584, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1584, 11, 29],
			Leap: false,
			Leaps: 383
		},
		gdate: [2206, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2206, 2, 20]
		}
	},

	{
		sdate: [1585, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1585, 0, 1],
			Leap: true,
			Leaps: 383
		},
		gdate: [2206, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2206, 2, 21]
		}
	},
	{
		sdate: [1585, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1585, 11, 29],
			Leap: true,
			Leaps: 383
		},
		gdate: [2207, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2207, 2, 20]
		}
	},
	{
		sdate: [1585, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1585, 11, 30],
			Leap: true,
			Leaps: 383
		},
		gdate: [2207, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2207, 2, 21]
		}
	},
	{
		sdate: [1586, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1586, 0, 1],
			Leap: false,
			Leaps: 384
		},
		gdate: [2207, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2207, 2, 22]
		}
	},
	{
		sdate: [1586, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1586, 11, 29],
			Leap: false,
			Leaps: 384
		},
		gdate: [2208, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2208, 2, 21]
		}
	},

	{
		sdate: [1587, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1587, 0, 1],
			Leap: false,
			Leaps: 384
		},
		gdate: [2208, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2208, 2, 22]
		}
	},
	{
		sdate: [1587, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1587, 11, 29],
			Leap: false,
			Leaps: 384
		},
		gdate: [2209, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2209, 2, 20]
		}
	},

	{
		sdate: [1588, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1588, 0, 1],
			Leap: false,
			Leaps: 384
		},
		gdate: [2209, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2209, 2, 21]
		}
	},
	{
		sdate: [1588, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1588, 11, 29],
			Leap: false,
			Leaps: 384
		},
		gdate: [2210, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2210, 2, 20]
		}
	},

	{
		sdate: [1589, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1589, 0, 1],
			Leap: true,
			Leaps: 384
		},
		gdate: [2210, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2210, 2, 21]
		}
	},
	{
		sdate: [1589, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1589, 11, 29],
			Leap: true,
			Leaps: 384
		},
		gdate: [2211, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2211, 2, 20]
		}
	},
	{
		sdate: [1589, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1589, 11, 30],
			Leap: true,
			Leaps: 384
		},
		gdate: [2211, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2211, 2, 21]
		}
	},
	{
		sdate: [1590, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1590, 0, 1],
			Leap: false,
			Leaps: 385
		},
		gdate: [2211, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2211, 2, 22]
		}
	},
	{
		sdate: [1590, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1590, 11, 29],
			Leap: false,
			Leaps: 385
		},
		gdate: [2212, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2212, 2, 21]
		}
	},

	{
		sdate: [1591, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1591, 0, 1],
			Leap: false,
			Leaps: 385
		},
		gdate: [2212, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2212, 2, 22]
		}
	},
	{
		sdate: [1591, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1591, 11, 29],
			Leap: false,
			Leaps: 385
		},
		gdate: [2213, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2213, 2, 20]
		}
	},

	{
		sdate: [1592, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1592, 0, 1],
			Leap: false,
			Leaps: 385
		},
		gdate: [2213, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2213, 2, 21]
		}
	},
	{
		sdate: [1592, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1592, 11, 29],
			Leap: false,
			Leaps: 385
		},
		gdate: [2214, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2214, 2, 20]
		}
	},

	{
		sdate: [1593, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1593, 0, 1],
			Leap: true,
			Leaps: 385
		},
		gdate: [2214, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2214, 2, 21]
		}
	},
	{
		sdate: [1593, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1593, 11, 29],
			Leap: true,
			Leaps: 385
		},
		gdate: [2215, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2215, 2, 20]
		}
	},
	{
		sdate: [1593, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1593, 11, 30],
			Leap: true,
			Leaps: 385
		},
		gdate: [2215, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2215, 2, 21]
		}
	},
	{
		sdate: [1594, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1594, 0, 1],
			Leap: false,
			Leaps: 386
		},
		gdate: [2215, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2215, 2, 22]
		}
	},
	{
		sdate: [1594, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1594, 11, 29],
			Leap: false,
			Leaps: 386
		},
		gdate: [2216, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2216, 2, 21]
		}
	},

	{
		sdate: [1595, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1595, 0, 1],
			Leap: false,
			Leaps: 386
		},
		gdate: [2216, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2216, 2, 22]
		}
	},
	{
		sdate: [1595, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1595, 11, 29],
			Leap: false,
			Leaps: 386
		},
		gdate: [2217, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2217, 2, 20]
		}
	},

	{
		sdate: [1596, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1596, 0, 1],
			Leap: false,
			Leaps: 386
		},
		gdate: [2217, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2217, 2, 21]
		}
	},
	{
		sdate: [1596, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1596, 11, 29],
			Leap: false,
			Leaps: 386
		},
		gdate: [2218, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2218, 2, 20]
		}
	},

	{
		sdate: [1597, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1597, 0, 1],
			Leap: false,
			Leaps: 386
		},
		gdate: [2218, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2218, 2, 21]
		}
	},
	{
		sdate: [1597, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1597, 11, 29],
			Leap: false,
			Leaps: 386
		},
		gdate: [2219, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2219, 2, 20]
		}
	},

	{
		sdate: [1598, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1598, 0, 1],
			Leap: true,
			Leaps: 386
		},
		gdate: [2219, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2219, 2, 21]
		}
	},
	{
		sdate: [1598, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1598, 11, 29],
			Leap: true,
			Leaps: 386
		},
		gdate: [2220, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2220, 2, 20]
		}
	},
	{
		sdate: [1598, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1598, 11, 30],
			Leap: true,
			Leaps: 386
		},
		gdate: [2220, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2220, 2, 21]
		}
	},
	{
		sdate: [1599, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1599, 0, 1],
			Leap: false,
			Leaps: 387
		},
		gdate: [2220, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2220, 2, 22]
		}
	},
	{
		sdate: [1599, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1599, 11, 29],
			Leap: false,
			Leaps: 387
		},
		gdate: [2221, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 20]
		}
	},

	{
		sdate: [1600, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1600, 0, 1],
			Leap: false,
			Leaps: 387
		},
		gdate: [2221, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2221, 2, 21]
		}
	},
	{
		sdate: [1600, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1600, 11, 29],
			Leap: false,
			Leaps: 387
		},
		gdate: [2222, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 20]
		}
	},

	{
		sdate: [1601, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1601, 0, 1],
			Leap: false,
			Leaps: 387
		},
		gdate: [2222, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2222, 2, 21]
		}
	},
	{
		sdate: [1601, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1601, 11, 29],
			Leap: false,
			Leaps: 387
		},
		gdate: [2223, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2223, 2, 20]
		}
	},

	{
		sdate: [1602, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1602, 0, 1],
			Leap: true,
			Leaps: 387
		},
		gdate: [2223, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2223, 2, 21]
		}
	},
	{
		sdate: [1602, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1602, 11, 29],
			Leap: true,
			Leaps: 387
		},
		gdate: [2224, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2224, 2, 20]
		}
	},
	{
		sdate: [1602, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1602, 11, 30],
			Leap: true,
			Leaps: 387
		},
		gdate: [2224, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2224, 2, 21]
		}
	},
	{
		sdate: [1603, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1603, 0, 1],
			Leap: false,
			Leaps: 388
		},
		gdate: [2224, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2224, 2, 22]
		}
	},
	{
		sdate: [1603, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1603, 11, 29],
			Leap: false,
			Leaps: 388
		},
		gdate: [2225, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2225, 2, 20]
		}
	},

	{
		sdate: [1604, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1604, 0, 1],
			Leap: false,
			Leaps: 388
		},
		gdate: [2225, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2225, 2, 21]
		}
	},
	{
		sdate: [1604, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1604, 11, 29],
			Leap: false,
			Leaps: 388
		},
		gdate: [2226, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2226, 2, 20]
		}
	},

	{
		sdate: [1605, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1605, 0, 1],
			Leap: false,
			Leaps: 388
		},
		gdate: [2226, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2226, 2, 21]
		}
	},
	{
		sdate: [1605, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1605, 11, 29],
			Leap: false,
			Leaps: 388
		},
		gdate: [2227, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2227, 2, 20]
		}
	},

	{
		sdate: [1606, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1606, 0, 1],
			Leap: true,
			Leaps: 388
		},
		gdate: [2227, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2227, 2, 21]
		}
	},
	{
		sdate: [1606, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1606, 11, 29],
			Leap: true,
			Leaps: 388
		},
		gdate: [2228, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2228, 2, 20]
		}
	},
	{
		sdate: [1606, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1606, 11, 30],
			Leap: true,
			Leaps: 388
		},
		gdate: [2228, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2228, 2, 21]
		}
	},
	{
		sdate: [1607, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1607, 0, 1],
			Leap: false,
			Leaps: 389
		},
		gdate: [2228, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2228, 2, 22]
		}
	},
	{
		sdate: [1607, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1607, 11, 29],
			Leap: false,
			Leaps: 389
		},
		gdate: [2229, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2229, 2, 20]
		}
	},

	{
		sdate: [1608, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1608, 0, 1],
			Leap: false,
			Leaps: 389
		},
		gdate: [2229, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2229, 2, 21]
		}
	},
	{
		sdate: [1608, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1608, 11, 29],
			Leap: false,
			Leaps: 389
		},
		gdate: [2230, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2230, 2, 20]
		}
	},

	{
		sdate: [1609, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1609, 0, 1],
			Leap: false,
			Leaps: 389
		},
		gdate: [2230, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2230, 2, 21]
		}
	},
	{
		sdate: [1609, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1609, 11, 29],
			Leap: false,
			Leaps: 389
		},
		gdate: [2231, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2231, 2, 20]
		}
	},

	{
		sdate: [1610, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1610, 0, 1],
			Leap: true,
			Leaps: 389
		},
		gdate: [2231, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2231, 2, 21]
		}
	},
	{
		sdate: [1610, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1610, 11, 29],
			Leap: true,
			Leaps: 389
		},
		gdate: [2232, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2232, 2, 20]
		}
	},
	{
		sdate: [1610, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1610, 11, 30],
			Leap: true,
			Leaps: 389
		},
		gdate: [2232, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2232, 2, 21]
		}
	},
	{
		sdate: [1611, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1611, 0, 1],
			Leap: false,
			Leaps: 390
		},
		gdate: [2232, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2232, 2, 22]
		}
	},
	{
		sdate: [1611, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1611, 11, 29],
			Leap: false,
			Leaps: 390
		},
		gdate: [2233, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2233, 2, 20]
		}
	},

	{
		sdate: [1612, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1612, 0, 1],
			Leap: false,
			Leaps: 390
		},
		gdate: [2233, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2233, 2, 21]
		}
	},
	{
		sdate: [1612, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1612, 11, 29],
			Leap: false,
			Leaps: 390
		},
		gdate: [2234, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2234, 2, 20]
		}
	},

	{
		sdate: [1613, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1613, 0, 1],
			Leap: false,
			Leaps: 390
		},
		gdate: [2234, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2234, 2, 21]
		}
	},
	{
		sdate: [1613, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1613, 11, 29],
			Leap: false,
			Leaps: 390
		},
		gdate: [2235, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2235, 2, 20]
		}
	},

	{
		sdate: [1614, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1614, 0, 1],
			Leap: true,
			Leaps: 390
		},
		gdate: [2235, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2235, 2, 21]
		}
	},
	{
		sdate: [1614, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1614, 11, 29],
			Leap: true,
			Leaps: 390
		},
		gdate: [2236, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2236, 2, 20]
		}
	},
	{
		sdate: [1614, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1614, 11, 30],
			Leap: true,
			Leaps: 390
		},
		gdate: [2236, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2236, 2, 21]
		}
	},
	{
		sdate: [1615, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1615, 0, 1],
			Leap: false,
			Leaps: 391
		},
		gdate: [2236, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2236, 2, 22]
		}
	},
	{
		sdate: [1615, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1615, 11, 29],
			Leap: false,
			Leaps: 391
		},
		gdate: [2237, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2237, 2, 20]
		}
	},

	{
		sdate: [1616, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1616, 0, 1],
			Leap: false,
			Leaps: 391
		},
		gdate: [2237, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2237, 2, 21]
		}
	},
	{
		sdate: [1616, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1616, 11, 29],
			Leap: false,
			Leaps: 391
		},
		gdate: [2238, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2238, 2, 20]
		}
	},

	{
		sdate: [1617, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1617, 0, 1],
			Leap: false,
			Leaps: 391
		},
		gdate: [2238, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2238, 2, 21]
		}
	},
	{
		sdate: [1617, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1617, 11, 29],
			Leap: false,
			Leaps: 391
		},
		gdate: [2239, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2239, 2, 20]
		}
	},

	{
		sdate: [1618, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1618, 0, 1],
			Leap: true,
			Leaps: 391
		},
		gdate: [2239, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2239, 2, 21]
		}
	},
	{
		sdate: [1618, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1618, 11, 29],
			Leap: true,
			Leaps: 391
		},
		gdate: [2240, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2240, 2, 20]
		}
	},
	{
		sdate: [1618, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1618, 11, 30],
			Leap: true,
			Leaps: 391
		},
		gdate: [2240, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2240, 2, 21]
		}
	},
	{
		sdate: [1619, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1619, 0, 1],
			Leap: false,
			Leaps: 392
		},
		gdate: [2240, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2240, 2, 22]
		}
	},
	{
		sdate: [1619, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1619, 11, 29],
			Leap: false,
			Leaps: 392
		},
		gdate: [2241, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 20]
		}
	},

	{
		sdate: [1620, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1620, 0, 1],
			Leap: false,
			Leaps: 392
		},
		gdate: [2241, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2241, 2, 21]
		}
	},
	{
		sdate: [1620, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1620, 11, 29],
			Leap: false,
			Leaps: 392
		},
		gdate: [2242, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 20]
		}
	},

	{
		sdate: [1621, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1621, 0, 1],
			Leap: false,
			Leaps: 392
		},
		gdate: [2242, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2242, 2, 21]
		}
	},
	{
		sdate: [1621, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1621, 11, 29],
			Leap: false,
			Leaps: 392
		},
		gdate: [2243, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2243, 2, 20]
		}
	},

	{
		sdate: [1622, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1622, 0, 1],
			Leap: true,
			Leaps: 392
		},
		gdate: [2243, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2243, 2, 21]
		}
	},
	{
		sdate: [1622, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1622, 11, 29],
			Leap: true,
			Leaps: 392
		},
		gdate: [2244, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2244, 2, 20]
		}
	},
	{
		sdate: [1622, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1622, 11, 30],
			Leap: true,
			Leaps: 392
		},
		gdate: [2244, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2244, 2, 21]
		}
	},
	{
		sdate: [1623, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1623, 0, 1],
			Leap: false,
			Leaps: 393
		},
		gdate: [2244, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2244, 2, 22]
		}
	},
	{
		sdate: [1623, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1623, 11, 29],
			Leap: false,
			Leaps: 393
		},
		gdate: [2245, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2245, 2, 20]
		}
	},

	{
		sdate: [1624, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1624, 0, 1],
			Leap: false,
			Leaps: 393
		},
		gdate: [2245, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2245, 2, 21]
		}
	},
	{
		sdate: [1624, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1624, 11, 29],
			Leap: false,
			Leaps: 393
		},
		gdate: [2246, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2246, 2, 20]
		}
	},

	{
		sdate: [1625, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1625, 0, 1],
			Leap: false,
			Leaps: 393
		},
		gdate: [2246, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2246, 2, 21]
		}
	},
	{
		sdate: [1625, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1625, 11, 29],
			Leap: false,
			Leaps: 393
		},
		gdate: [2247, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2247, 2, 20]
		}
	},

	{
		sdate: [1626, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1626, 0, 1],
			Leap: true,
			Leaps: 393
		},
		gdate: [2247, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2247, 2, 21]
		}
	},
	{
		sdate: [1626, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1626, 11, 29],
			Leap: true,
			Leaps: 393
		},
		gdate: [2248, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2248, 2, 20]
		}
	},
	{
		sdate: [1626, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1626, 11, 30],
			Leap: true,
			Leaps: 393
		},
		gdate: [2248, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2248, 2, 21]
		}
	},
	{
		sdate: [1627, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1627, 0, 1],
			Leap: false,
			Leaps: 394
		},
		gdate: [2248, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2248, 2, 22]
		}
	},
	{
		sdate: [1627, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1627, 11, 29],
			Leap: false,
			Leaps: 394
		},
		gdate: [2249, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2249, 2, 20]
		}
	},

	{
		sdate: [1628, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1628, 0, 1],
			Leap: false,
			Leaps: 394
		},
		gdate: [2249, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2249, 2, 21]
		}
	},
	{
		sdate: [1628, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1628, 11, 29],
			Leap: false,
			Leaps: 394
		},
		gdate: [2250, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2250, 2, 20]
		}
	},

	{
		sdate: [1629, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1629, 0, 1],
			Leap: false,
			Leaps: 394
		},
		gdate: [2250, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2250, 2, 21]
		}
	},
	{
		sdate: [1629, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1629, 11, 29],
			Leap: false,
			Leaps: 394
		},
		gdate: [2251, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2251, 2, 20]
		}
	},

	{
		sdate: [1630, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1630, 0, 1],
			Leap: false,
			Leaps: 394
		},
		gdate: [2251, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2251, 2, 21]
		}
	},
	{
		sdate: [1630, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1630, 11, 29],
			Leap: false,
			Leaps: 394
		},
		gdate: [2252, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2252, 2, 20]
		}
	},

	{
		sdate: [1631, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1631, 0, 1],
			Leap: true,
			Leaps: 394
		},
		gdate: [2252, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2252, 2, 21]
		}
	},
	{
		sdate: [1631, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1631, 11, 29],
			Leap: true,
			Leaps: 394
		},
		gdate: [2253, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2253, 2, 19]
		}
	},
	{
		sdate: [1631, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1631, 11, 30],
			Leap: true,
			Leaps: 394
		},
		gdate: [2253, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2253, 2, 20]
		}
	},
	{
		sdate: [1632, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1632, 0, 1],
			Leap: false,
			Leaps: 395
		},
		gdate: [2253, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2253, 2, 21]
		}
	},
	{
		sdate: [1632, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1632, 11, 29],
			Leap: false,
			Leaps: 395
		},
		gdate: [2254, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2254, 2, 20]
		}
	},

	{
		sdate: [1633, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1633, 0, 1],
			Leap: false,
			Leaps: 395
		},
		gdate: [2254, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2254, 2, 21]
		}
	},
	{
		sdate: [1633, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1633, 11, 29],
			Leap: false,
			Leaps: 395
		},
		gdate: [2255, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2255, 2, 20]
		}
	},

	{
		sdate: [1634, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1634, 0, 1],
			Leap: false,
			Leaps: 395
		},
		gdate: [2255, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2255, 2, 21]
		}
	},
	{
		sdate: [1634, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1634, 11, 29],
			Leap: false,
			Leaps: 395
		},
		gdate: [2256, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2256, 2, 20]
		}
	},

	{
		sdate: [1635, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1635, 0, 1],
			Leap: true,
			Leaps: 395
		},
		gdate: [2256, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2256, 2, 21]
		}
	},
	{
		sdate: [1635, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1635, 11, 29],
			Leap: true,
			Leaps: 395
		},
		gdate: [2257, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2257, 2, 19]
		}
	},
	{
		sdate: [1635, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1635, 11, 30],
			Leap: true,
			Leaps: 395
		},
		gdate: [2257, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2257, 2, 20]
		}
	},
	{
		sdate: [1636, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1636, 0, 1],
			Leap: false,
			Leaps: 396
		},
		gdate: [2257, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2257, 2, 21]
		}
	},
	{
		sdate: [1636, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1636, 11, 29],
			Leap: false,
			Leaps: 396
		},
		gdate: [2258, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2258, 2, 20]
		}
	},

	{
		sdate: [1637, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1637, 0, 1],
			Leap: false,
			Leaps: 396
		},
		gdate: [2258, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2258, 2, 21]
		}
	},
	{
		sdate: [1637, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1637, 11, 29],
			Leap: false,
			Leaps: 396
		},
		gdate: [2259, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2259, 2, 20]
		}
	},

	{
		sdate: [1638, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1638, 0, 1],
			Leap: false,
			Leaps: 396
		},
		gdate: [2259, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2259, 2, 21]
		}
	},
	{
		sdate: [1638, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1638, 11, 29],
			Leap: false,
			Leaps: 396
		},
		gdate: [2260, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2260, 2, 20]
		}
	},

	{
		sdate: [1639, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1639, 0, 1],
			Leap: true,
			Leaps: 396
		},
		gdate: [2260, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2260, 2, 21]
		}
	},
	{
		sdate: [1639, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1639, 11, 29],
			Leap: true,
			Leaps: 396
		},
		gdate: [2261, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 19]
		}
	},
	{
		sdate: [1639, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1639, 11, 30],
			Leap: true,
			Leaps: 396
		},
		gdate: [2261, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 20]
		}
	},
	{
		sdate: [1640, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1640, 0, 1],
			Leap: false,
			Leaps: 397
		},
		gdate: [2261, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2261, 2, 21]
		}
	},
	{
		sdate: [1640, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1640, 11, 29],
			Leap: false,
			Leaps: 397
		},
		gdate: [2262, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 20]
		}
	},

	{
		sdate: [1641, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1641, 0, 1],
			Leap: false,
			Leaps: 397
		},
		gdate: [2262, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2262, 2, 21]
		}
	},
	{
		sdate: [1641, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1641, 11, 29],
			Leap: false,
			Leaps: 397
		},
		gdate: [2263, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2263, 2, 20]
		}
	},

	{
		sdate: [1642, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1642, 0, 1],
			Leap: false,
			Leaps: 397
		},
		gdate: [2263, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2263, 2, 21]
		}
	},
	{
		sdate: [1642, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1642, 11, 29],
			Leap: false,
			Leaps: 397
		},
		gdate: [2264, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2264, 2, 20]
		}
	},

	{
		sdate: [1643, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1643, 0, 1],
			Leap: true,
			Leaps: 397
		},
		gdate: [2264, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2264, 2, 21]
		}
	},
	{
		sdate: [1643, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1643, 11, 29],
			Leap: true,
			Leaps: 397
		},
		gdate: [2265, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2265, 2, 19]
		}
	},
	{
		sdate: [1643, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1643, 11, 30],
			Leap: true,
			Leaps: 397
		},
		gdate: [2265, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2265, 2, 20]
		}
	},
	{
		sdate: [1644, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1644, 0, 1],
			Leap: false,
			Leaps: 398
		},
		gdate: [2265, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2265, 2, 21]
		}
	},
	{
		sdate: [1644, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1644, 11, 29],
			Leap: false,
			Leaps: 398
		},
		gdate: [2266, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2266, 2, 20]
		}
	},

	{
		sdate: [1645, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1645, 0, 1],
			Leap: false,
			Leaps: 398
		},
		gdate: [2266, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2266, 2, 21]
		}
	},
	{
		sdate: [1645, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1645, 11, 29],
			Leap: false,
			Leaps: 398
		},
		gdate: [2267, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2267, 2, 20]
		}
	},

	{
		sdate: [1646, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1646, 0, 1],
			Leap: false,
			Leaps: 398
		},
		gdate: [2267, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2267, 2, 21]
		}
	},
	{
		sdate: [1646, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1646, 11, 29],
			Leap: false,
			Leaps: 398
		},
		gdate: [2268, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2268, 2, 20]
		}
	},

	{
		sdate: [1647, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1647, 0, 1],
			Leap: true,
			Leaps: 398
		},
		gdate: [2268, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2268, 2, 21]
		}
	},
	{
		sdate: [1647, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1647, 11, 29],
			Leap: true,
			Leaps: 398
		},
		gdate: [2269, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2269, 2, 19]
		}
	},
	{
		sdate: [1647, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1647, 11, 30],
			Leap: true,
			Leaps: 398
		},
		gdate: [2269, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2269, 2, 20]
		}
	},
	{
		sdate: [1648, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1648, 0, 1],
			Leap: false,
			Leaps: 399
		},
		gdate: [2269, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2269, 2, 21]
		}
	},
	{
		sdate: [1648, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1648, 11, 29],
			Leap: false,
			Leaps: 399
		},
		gdate: [2270, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2270, 2, 20]
		}
	},

	{
		sdate: [1649, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1649, 0, 1],
			Leap: false,
			Leaps: 399
		},
		gdate: [2270, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2270, 2, 21]
		}
	},
	{
		sdate: [1649, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1649, 11, 29],
			Leap: false,
			Leaps: 399
		},
		gdate: [2271, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2271, 2, 20]
		}
	},

	{
		sdate: [1650, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1650, 0, 1],
			Leap: false,
			Leaps: 399
		},
		gdate: [2271, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2271, 2, 21]
		}
	},
	{
		sdate: [1650, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1650, 11, 29],
			Leap: false,
			Leaps: 399
		},
		gdate: [2272, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2272, 2, 20]
		}
	},

	{
		sdate: [1651, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1651, 0, 1],
			Leap: true,
			Leaps: 399
		},
		gdate: [2272, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2272, 2, 21]
		}
	},
	{
		sdate: [1651, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1651, 11, 29],
			Leap: true,
			Leaps: 399
		},
		gdate: [2273, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2273, 2, 19]
		}
	},
	{
		sdate: [1651, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1651, 11, 30],
			Leap: true,
			Leaps: 399
		},
		gdate: [2273, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2273, 2, 20]
		}
	},
	{
		sdate: [1652, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1652, 0, 1],
			Leap: false,
			Leaps: 400
		},
		gdate: [2273, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2273, 2, 21]
		}
	},
	{
		sdate: [1652, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1652, 11, 29],
			Leap: false,
			Leaps: 400
		},
		gdate: [2274, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2274, 2, 20]
		}
	},

	{
		sdate: [1653, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1653, 0, 1],
			Leap: false,
			Leaps: 400
		},
		gdate: [2274, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2274, 2, 21]
		}
	},
	{
		sdate: [1653, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1653, 11, 29],
			Leap: false,
			Leaps: 400
		},
		gdate: [2275, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2275, 2, 20]
		}
	},

	{
		sdate: [1654, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1654, 0, 1],
			Leap: false,
			Leaps: 400
		},
		gdate: [2275, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2275, 2, 21]
		}
	},
	{
		sdate: [1654, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1654, 11, 29],
			Leap: false,
			Leaps: 400
		},
		gdate: [2276, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2276, 2, 20]
		}
	},

	{
		sdate: [1655, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1655, 0, 1],
			Leap: true,
			Leaps: 400
		},
		gdate: [2276, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2276, 2, 21]
		}
	},
	{
		sdate: [1655, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1655, 11, 29],
			Leap: true,
			Leaps: 400
		},
		gdate: [2277, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2277, 2, 19]
		}
	},
	{
		sdate: [1655, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1655, 11, 30],
			Leap: true,
			Leaps: 400
		},
		gdate: [2277, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2277, 2, 20]
		}
	},
	{
		sdate: [1656, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1656, 0, 1],
			Leap: false,
			Leaps: 401
		},
		gdate: [2277, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2277, 2, 21]
		}
	},
	{
		sdate: [1656, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1656, 11, 29],
			Leap: false,
			Leaps: 401
		},
		gdate: [2278, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2278, 2, 20]
		}
	},

	{
		sdate: [1657, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1657, 0, 1],
			Leap: false,
			Leaps: 401
		},
		gdate: [2278, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2278, 2, 21]
		}
	},
	{
		sdate: [1657, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1657, 11, 29],
			Leap: false,
			Leaps: 401
		},
		gdate: [2279, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2279, 2, 20]
		}
	},

	{
		sdate: [1658, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1658, 0, 1],
			Leap: false,
			Leaps: 401
		},
		gdate: [2279, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2279, 2, 21]
		}
	},
	{
		sdate: [1658, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1658, 11, 29],
			Leap: false,
			Leaps: 401
		},
		gdate: [2280, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2280, 2, 20]
		}
	},

	{
		sdate: [1659, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1659, 0, 1],
			Leap: true,
			Leaps: 401
		},
		gdate: [2280, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2280, 2, 21]
		}
	},
	{
		sdate: [1659, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1659, 11, 29],
			Leap: true,
			Leaps: 401
		},
		gdate: [2281, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 19]
		}
	},
	{
		sdate: [1659, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1659, 11, 30],
			Leap: true,
			Leaps: 401
		},
		gdate: [2281, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 20]
		}
	},
	{
		sdate: [1660, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1660, 0, 1],
			Leap: false,
			Leaps: 402
		},
		gdate: [2281, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2281, 2, 21]
		}
	},
	{
		sdate: [1660, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1660, 11, 29],
			Leap: false,
			Leaps: 402
		},
		gdate: [2282, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 20]
		}
	},

	{
		sdate: [1661, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1661, 0, 1],
			Leap: false,
			Leaps: 402
		},
		gdate: [2282, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2282, 2, 21]
		}
	},
	{
		sdate: [1661, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1661, 11, 29],
			Leap: false,
			Leaps: 402
		},
		gdate: [2283, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2283, 2, 20]
		}
	},

	{
		sdate: [1662, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1662, 0, 1],
			Leap: false,
			Leaps: 402
		},
		gdate: [2283, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2283, 2, 21]
		}
	},
	{
		sdate: [1662, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1662, 11, 29],
			Leap: false,
			Leaps: 402
		},
		gdate: [2284, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2284, 2, 20]
		}
	},

	{
		sdate: [1663, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1663, 0, 1],
			Leap: false,
			Leaps: 402
		},
		gdate: [2284, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2284, 2, 21]
		}
	},
	{
		sdate: [1663, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1663, 11, 29],
			Leap: false,
			Leaps: 402
		},
		gdate: [2285, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2285, 2, 19]
		}
	},

	{
		sdate: [1664, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1664, 0, 1],
			Leap: true,
			Leaps: 402
		},
		gdate: [2285, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2285, 2, 20]
		}
	},
	{
		sdate: [1664, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1664, 11, 29],
			Leap: true,
			Leaps: 402
		},
		gdate: [2286, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2286, 2, 19]
		}
	},
	{
		sdate: [1664, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1664, 11, 30],
			Leap: true,
			Leaps: 402
		},
		gdate: [2286, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2286, 2, 20]
		}
	},
	{
		sdate: [1665, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1665, 0, 1],
			Leap: false,
			Leaps: 403
		},
		gdate: [2286, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2286, 2, 21]
		}
	},
	{
		sdate: [1665, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1665, 11, 29],
			Leap: false,
			Leaps: 403
		},
		gdate: [2287, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2287, 2, 20]
		}
	},

	{
		sdate: [1666, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1666, 0, 1],
			Leap: false,
			Leaps: 403
		},
		gdate: [2287, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2287, 2, 21]
		}
	},
	{
		sdate: [1666, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1666, 11, 29],
			Leap: false,
			Leaps: 403
		},
		gdate: [2288, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2288, 2, 20]
		}
	},

	{
		sdate: [1667, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1667, 0, 1],
			Leap: false,
			Leaps: 403
		},
		gdate: [2288, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2288, 2, 21]
		}
	},
	{
		sdate: [1667, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1667, 11, 29],
			Leap: false,
			Leaps: 403
		},
		gdate: [2289, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2289, 2, 19]
		}
	},

	{
		sdate: [1668, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1668, 0, 1],
			Leap: true,
			Leaps: 403
		},
		gdate: [2289, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2289, 2, 20]
		}
	},
	{
		sdate: [1668, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1668, 11, 29],
			Leap: true,
			Leaps: 403
		},
		gdate: [2290, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2290, 2, 19]
		}
	},
	{
		sdate: [1668, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1668, 11, 30],
			Leap: true,
			Leaps: 403
		},
		gdate: [2290, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2290, 2, 20]
		}
	},
	{
		sdate: [1669, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1669, 0, 1],
			Leap: false,
			Leaps: 404
		},
		gdate: [2290, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2290, 2, 21]
		}
	},
	{
		sdate: [1669, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1669, 11, 29],
			Leap: false,
			Leaps: 404
		},
		gdate: [2291, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2291, 2, 20]
		}
	},

	{
		sdate: [1670, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1670, 0, 1],
			Leap: false,
			Leaps: 404
		},
		gdate: [2291, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2291, 2, 21]
		}
	},
	{
		sdate: [1670, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1670, 11, 29],
			Leap: false,
			Leaps: 404
		},
		gdate: [2292, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2292, 2, 20]
		}
	},

	{
		sdate: [1671, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1671, 0, 1],
			Leap: false,
			Leaps: 404
		},
		gdate: [2292, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2292, 2, 21]
		}
	},
	{
		sdate: [1671, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1671, 11, 29],
			Leap: false,
			Leaps: 404
		},
		gdate: [2293, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2293, 2, 19]
		}
	},

	{
		sdate: [1672, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1672, 0, 1],
			Leap: true,
			Leaps: 404
		},
		gdate: [2293, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2293, 2, 20]
		}
	},
	{
		sdate: [1672, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1672, 11, 29],
			Leap: true,
			Leaps: 404
		},
		gdate: [2294, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2294, 2, 19]
		}
	},
	{
		sdate: [1672, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1672, 11, 30],
			Leap: true,
			Leaps: 404
		},
		gdate: [2294, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2294, 2, 20]
		}
	},
	{
		sdate: [1673, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1673, 0, 1],
			Leap: false,
			Leaps: 405
		},
		gdate: [2294, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2294, 2, 21]
		}
	},
	{
		sdate: [1673, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1673, 11, 29],
			Leap: false,
			Leaps: 405
		},
		gdate: [2295, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2295, 2, 20]
		}
	},

	{
		sdate: [1674, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1674, 0, 1],
			Leap: false,
			Leaps: 405
		},
		gdate: [2295, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2295, 2, 21]
		}
	},
	{
		sdate: [1674, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1674, 11, 29],
			Leap: false,
			Leaps: 405
		},
		gdate: [2296, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2296, 2, 20]
		}
	},

	{
		sdate: [1675, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1675, 0, 1],
			Leap: false,
			Leaps: 405
		},
		gdate: [2296, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2296, 2, 21]
		}
	},
	{
		sdate: [1675, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1675, 11, 29],
			Leap: false,
			Leaps: 405
		},
		gdate: [2297, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2297, 2, 19]
		}
	},

	{
		sdate: [1676, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1676, 0, 1],
			Leap: true,
			Leaps: 405
		},
		gdate: [2297, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2297, 2, 20]
		}
	},
	{
		sdate: [1676, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1676, 11, 29],
			Leap: true,
			Leaps: 405
		},
		gdate: [2298, 3, 19, 0, 0, 0, 0],
		gdata: {
			gregorian: [2298, 2, 19]
		}
	},
	{
		sdate: [1676, 12, 30, 0, 0, 0, 0],
		sdata: {
			solar: [1676, 11, 30],
			Leap: true,
			Leaps: 405
		},
		gdate: [2298, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2298, 2, 20]
		}
	},
	{
		sdate: [1677, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1677, 0, 1],
			Leap: false,
			Leaps: 406
		},
		gdate: [2298, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2298, 2, 21]
		}
	},
	{
		sdate: [1677, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1677, 11, 29],
			Leap: false,
			Leaps: 406
		},
		gdate: [2299, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2299, 2, 20]
		}
	},

	{
		sdate: [1678, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1678, 0, 1],
			Leap: false,
			Leaps: 406
		},
		gdate: [2299, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2299, 2, 21]
		}
	},
	{
		sdate: [1678, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1678, 11, 29],
			Leap: false,
			Leaps: 406
		},
		gdate: [2300, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2300, 2, 20]
		}
	},

	{
		sdate: [1679, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1679, 0, 1],
			Leap: false,
			Leaps: 406
		},
		gdate: [2300, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2300, 2, 21]
		}
	},
	{
		sdate: [1679, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1679, 11, 29],
			Leap: false,
			Leaps: 406
		},
		gdate: [2301, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 20]
		}
	},

	{
		sdate: [1680, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1680, 0, 1],
			Leap: true,
			Leaps: 406
		},
		gdate: [2301, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2301, 2, 21]
		}
	},
	{
		sdate: [1680, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 29],
			Leap: true,
			Leaps: 406
		},
		gdate: [2302, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 20]
		}
	},
	{
		sdate: [1680, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1680, 11, 30],
			Leap: true,
			Leaps: 406
		},
		gdate: [2302, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 21]
		}
	},
	{
		sdate: [1681, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1681, 0, 1],
			Leap: false,
			Leaps: 407
		},
		gdate: [2302, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2302, 2, 22]
		}
	},
	{
		sdate: [1681, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1681, 11, 29],
			Leap: false,
			Leaps: 407
		},
		gdate: [2303, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2303, 2, 21]
		}
	},

	{
		sdate: [1682, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1682, 0, 1],
			Leap: false,
			Leaps: 407
		},
		gdate: [2303, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2303, 2, 22]
		}
	},
	{
		sdate: [1682, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1682, 11, 29],
			Leap: false,
			Leaps: 407
		},
		gdate: [2304, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2304, 2, 21]
		}
	},

	{
		sdate: [1683, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1683, 0, 1],
			Leap: false,
			Leaps: 407
		},
		gdate: [2304, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2304, 2, 22]
		}
	},
	{
		sdate: [1683, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1683, 11, 29],
			Leap: false,
			Leaps: 407
		},
		gdate: [2305, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2305, 2, 20]
		}
	},

	{
		sdate: [1684, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1684, 0, 1],
			Leap: true,
			Leaps: 407
		},
		gdate: [2305, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2305, 2, 21]
		}
	},
	{
		sdate: [1684, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1684, 11, 29],
			Leap: true,
			Leaps: 407
		},
		gdate: [2306, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2306, 2, 20]
		}
	},
	{
		sdate: [1684, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1684, 11, 30],
			Leap: true,
			Leaps: 407
		},
		gdate: [2306, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2306, 2, 21]
		}
	},
	{
		sdate: [1685, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1685, 0, 1],
			Leap: false,
			Leaps: 408
		},
		gdate: [2306, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2306, 2, 22]
		}
	},
	{
		sdate: [1685, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1685, 11, 29],
			Leap: false,
			Leaps: 408
		},
		gdate: [2307, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2307, 2, 21]
		}
	},

	{
		sdate: [1686, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1686, 0, 1],
			Leap: false,
			Leaps: 408
		},
		gdate: [2307, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2307, 2, 22]
		}
	},
	{
		sdate: [1686, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1686, 11, 29],
			Leap: false,
			Leaps: 408
		},
		gdate: [2308, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2308, 2, 21]
		}
	},

	{
		sdate: [1687, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1687, 0, 1],
			Leap: false,
			Leaps: 408
		},
		gdate: [2308, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2308, 2, 22]
		}
	},
	{
		sdate: [1687, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1687, 11, 29],
			Leap: false,
			Leaps: 408
		},
		gdate: [2309, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2309, 2, 20]
		}
	},

	{
		sdate: [1688, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1688, 0, 1],
			Leap: true,
			Leaps: 408
		},
		gdate: [2309, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2309, 2, 21]
		}
	},
	{
		sdate: [1688, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1688, 11, 29],
			Leap: true,
			Leaps: 408
		},
		gdate: [2310, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2310, 2, 20]
		}
	},
	{
		sdate: [1688, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1688, 11, 30],
			Leap: true,
			Leaps: 408
		},
		gdate: [2310, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2310, 2, 21]
		}
	},
	{
		sdate: [1689, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1689, 0, 1],
			Leap: false,
			Leaps: 409
		},
		gdate: [2310, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2310, 2, 22]
		}
	},
	{
		sdate: [1689, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1689, 11, 29],
			Leap: false,
			Leaps: 409
		},
		gdate: [2311, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2311, 2, 21]
		}
	},

	{
		sdate: [1690, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1690, 0, 1],
			Leap: false,
			Leaps: 409
		},
		gdate: [2311, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2311, 2, 22]
		}
	},
	{
		sdate: [1690, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1690, 11, 29],
			Leap: false,
			Leaps: 409
		},
		gdate: [2312, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2312, 2, 21]
		}
	},

	{
		sdate: [1691, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1691, 0, 1],
			Leap: false,
			Leaps: 409
		},
		gdate: [2312, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2312, 2, 22]
		}
	},
	{
		sdate: [1691, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1691, 11, 29],
			Leap: false,
			Leaps: 409
		},
		gdate: [2313, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2313, 2, 20]
		}
	},

	{
		sdate: [1692, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1692, 0, 1],
			Leap: true,
			Leaps: 409
		},
		gdate: [2313, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2313, 2, 21]
		}
	},
	{
		sdate: [1692, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1692, 11, 29],
			Leap: true,
			Leaps: 409
		},
		gdate: [2314, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2314, 2, 20]
		}
	},
	{
		sdate: [1692, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1692, 11, 30],
			Leap: true,
			Leaps: 409
		},
		gdate: [2314, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2314, 2, 21]
		}
	},
	{
		sdate: [1693, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1693, 0, 1],
			Leap: false,
			Leaps: 410
		},
		gdate: [2314, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2314, 2, 22]
		}
	},
	{
		sdate: [1693, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1693, 11, 29],
			Leap: false,
			Leaps: 410
		},
		gdate: [2315, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2315, 2, 21]
		}
	},

	{
		sdate: [1694, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1694, 0, 1],
			Leap: false,
			Leaps: 410
		},
		gdate: [2315, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2315, 2, 22]
		}
	},
	{
		sdate: [1694, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1694, 11, 29],
			Leap: false,
			Leaps: 410
		},
		gdate: [2316, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2316, 2, 21]
		}
	},

	{
		sdate: [1695, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1695, 0, 1],
			Leap: false,
			Leaps: 410
		},
		gdate: [2316, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2316, 2, 22]
		}
	},
	{
		sdate: [1695, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1695, 11, 29],
			Leap: false,
			Leaps: 410
		},
		gdate: [2317, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2317, 2, 20]
		}
	},

	{
		sdate: [1696, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1696, 0, 1],
			Leap: false,
			Leaps: 410
		},
		gdate: [2317, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2317, 2, 21]
		}
	},
	{
		sdate: [1696, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1696, 11, 29],
			Leap: false,
			Leaps: 410
		},
		gdate: [2318, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2318, 2, 20]
		}
	},

	{
		sdate: [1697, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1697, 0, 1],
			Leap: true,
			Leaps: 410
		},
		gdate: [2318, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2318, 2, 21]
		}
	},
	{
		sdate: [1697, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1697, 11, 29],
			Leap: true,
			Leaps: 410
		},
		gdate: [2319, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2319, 2, 20]
		}
	},
	{
		sdate: [1697, 12, 30, 1, 0, 0, 0],
		sdata: {
			solar: [1697, 11, 30],
			Leap: true,
			Leaps: 410
		},
		gdate: [2319, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2319, 2, 21]
		}
	},
	{
		sdate: [1698, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1698, 0, 1],
			Leap: false,
			Leaps: 411
		},
		gdate: [2319, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2319, 2, 22]
		}
	},
	{
		sdate: [1698, 12, 29, 1, 0, 0, 0],
		sdata: {
			solar: [1698, 11, 29],
			Leap: false,
			Leaps: 411
		},
		gdate: [2320, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2320, 2, 21]
		}
	},

	{
		sdate: [1699, 1, 1, 0, 0, 0, 0],
		sdata: {
			solar: [1699, 0, 1],
			Leap: false,
			Leaps: 411
		},
		gdate: [2320, 3, 22, 0, 0, 0, 0],
		gdata: {
			gregorian: [2320, 2, 22]
		}
	},
	{
		sdate: [1699, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1699, 11, 29],
			Leap: false,
			Leaps: 411
		},
		gdate: [2321, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 20]
		}
	},

	{
		sdate: [1700, 1, 1, 1, 0, 0, 0],
		sdata: {
			solar: [1700, 0, 1],
			Leap: false,
			Leaps: 411
		},
		gdate: [2321, 3, 21, 1, 0, 0, 0],
		gdata: {
			gregorian: [2321, 2, 21]
		}
	},
	{
		sdate: [1700, 12, 29, 0, 0, 0, 0],
		sdata: {
			solar: [1700, 11, 29],
			Leap: false,
			Leaps: 411
		},
		gdate: [2322, 3, 20, 0, 0, 0, 0],
		gdata: {
			gregorian: [2322, 2, 20]
		}
	}
];
