const exData = function (ex) {
	switch (ex) {
		case "toPrimitive":
			return `
			// Depending on timezone, your results will vary
			const date = new SHDate('05 Mordad 1372 04:20');

			console.log(date[Symbol.toPrimitive]("string"));
			// Expected output: "Tue 05 Amo 1372 04:20:00 GMT+0430 (Iran Daylight Time)"

			console.log(date[Symbol.toPrimitive]("number"));
			// Expected output: 743730600000
			`;

		case "checkDate":
			return `let check = new SHDate();
			let isTrue = check.checkDate(1390, 10, 25);

			console.log(isTrue); // true

			// Static
			isTrue = SHDate.checkDate(1390, 10, 25);

			console.log(isTrue); // true
			`;

		case "checkTime":
			return `let check = new SHDate();
			let isTrue = check.checkTime(14, 50, 20);

			console.log(isTrue); // true

			// Static
			isTrue = SHDate.checkTime(14, 50, 20, 900);

			console.log(isTrue); // true
			`;

		case "checkTime12":
			return `let check = new SHDate();
			let isTrue = check.checkTime12(true, 14, 50, 20);

			console.log(isTrue); // true

			// Static
			isTrue = SHDate.checkTime12(false, 14, 50, 20, 900);

			console.log(isTrue); // false
			`;

		case "checkWeek":
			return `let check = new SHDate();
			let isTrue = check.checkWeek(1390, 11, 5);

			console.log(isTrue); // true

			// Static
			isTrue = SHDate.checkWeek(1390, 53, 5);

			console.log(isTrue); // false
			`;

		case "clone":
			return `var shdate = new SHDate("Dey 25, 1390 23:15:30");
			var clone = shdate.clone();
				
			console.log(shdate.toString()); // "Sun 25 Dey 1390 23:15:30 GMT+0330 (Iran Standard Time)"
			shdate.setMonth(11);
			console.log(shdate.toString()); // "Thu 25 Esf 1390 23:15:30 GMT+0330 (Iran Standard Time)"
				
			console.log(clone.toString()); // "Sun 25 Dey 1390 23:15:30 GMT+0330 (Iran Standard Time)"
			`;

		case "dateCorrection":
			return `var shdate = new SHDate();
			var date = shdate.dateCorrection(1372, 14, 100);

			console.log(date); // Array [1373, 5, 7]

			// Static
			var date = SHDate.dateCorrection(1372, 15, 100);

			console.log(date); // Array [1373, 6, 7]
			`;

		case "getDate":
			return `
			const birthday = new SHDate('1372-Mor-05');
			const date = birthday.getDate();

			console.log(date);
			// Expected output: 5
			`;

		case "getDay":
			return `
			const birthday = new SHDate('1372-Mordad-05');
			const day = birthday.getDay();
			// Sunday - Saturday : 0 - 6

			console.log(day);
			// Expected output: 3
			`;

		case "getFullYear":
			return `const date = new SHDate('1372-Mordad-05');

			console.log(date.getFullYear());
			// Expected output: 1372`;

		case "getHours":
			return `
			const birthday = new SHDate('1372-Mordad-05 04:20');

			console.log(birthday.getHours());
			// Expected output: 04`;

		case "getMilliseconds":
			return `const date = new SHDate('1372-Mordad-05 04:20:30');
			date.setMilliseconds("123");

			console.log(date.getMilliseconds());
			// Expected output: 123`;

		case "getMinutes":
			return `
			const birthday = new SHDate('1372-Mordad-05 04:20');

			console.log(birthday.getMinutes());
			// Expected output: 20`;

		case "getMonth":
			return `const date = new SHDate('1372-Mordad-05');

			console.log(date.getMonth()); // (Farvardin gives 0)
			// Expected output: 4`;

		case "getSeconds":
			return `
			const birthday = new SHDate('1372-Mordad-05 04:20:30');

			console.log(birthday.getSeconds());
			// Expected output: 30`;

		case "getTime":
			return `const date = new SHDate('1372-Mordad-05 04:20:30 GMT+00:00');

			// Milliseconds since Tue 05 Amo 1372 07:50:30 GMT+0430 (Iran Daylight Time)
			console.log(date.getTime());
			// Expected output: 743743230000
			`;

		case "getTimezoneOffset":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT+07:00');
			const date2 = new SHDate('1372-Mordad-05 04:20:30 GMT-02:00');

			console.log(date1.getTimezoneOffset());
			// Expected output: your local timezone offset in minutes
			// (e.g., -270). NOT the timezone offset of the date object.

			console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
			// Expected output: true
			`;

		case "getUTCDate":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT+11:00');
			const date2 = new SHDate('1372-Mordad-05 04:20:30 GMT-11:00');

			console.log(date1.getUTCDate());
			// Expected output: 4

			console.log(date2.getUTCDate());
			// Expected output: 5
			`;

		case "getUTCDay":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT+11:00');
			const date2 = new SHDate('1372-Mordad-05 04:20:30 GMT-11:00');

			// Tuesday
			console.log(date1.getUTCDay());
			// Expected output: 2

			// Wednesday
			console.log(date2.getUTCDay());
			// Expected output: 3
			`;

		case "getUTCFullYear":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT+11:00');
			const date2 = new SHDate('1372-Mordad-05 04:20:30 GMT-11:00');

			console.log(date1.getUTCFullYear());
			// Expected output: 1371

			console.log(date2.getUTCFullYear());
			// Expected output: 1372
			`;

		case "getUTCHours":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT+11:00');
			const date2 = new SHDate('1372-Mordad-05 04:20:30 GMT-11:00');

			console.log(date1.getUTCHours());
			// Expected output: 16

			console.log(date2.getUTCHours());
			// Expected output: 14
			`;

		case "getUTCMilliseconds":
			return `const date = new SHDate('1372-05-05T04:20:30.678'); // 5 Mordad 1372, 04:20:30.678 (UTC)

			console.log(date.getUTCMilliseconds());
			// Expected output: 678
			`;

		case "getUTCMinutes":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT+11:00');

			console.log(date1.getUTCMinutes());
			// Expected output: 20
			`;

		case "getUTCMonth":
			return `const date1 = new SHDate('1372-Farvardin-01 04:20:30 GMT+11:00');
			const date2 = new SHDate('1372-Farvardin-01 04:20:30 GMT-11:00');

			// December
			console.log(date1.getUTCMonth());
			// Expected output: 11

			// January
			console.log(date2.getUTCMonth());
			// Expected output: 0`;

		case "getUTCSeconds":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT+11:00');
	
				console.log(date1.getUTCSeconds());
				// Expected output: 30
	
				date1.setUTCSeconds(39);
	
				console.log(date1.getUTCSeconds());
				// Expected output: 39
				`;

		case "isLeapYear":
			return `const date1 = new SHDate('1372');
		
					console.log(date1.isLeapYear());
					// Expected output: false
		
					date1.setFullYear(1403);
		
					console.log(date1.isLeapYear());
					// Expected output: true
					`;

		case "now":
			return `
			// this example takes 2 seconds to run
			const start = SHDate.now();

			console.log("starting timer...");
			// expected output: starting timer...

			setTimeout(() => {
				const millis = SHDate.now() - start;
				console.log(\`seconds elapsed = \${Math.floor(millis / 1000)}\`);
				// expected output: seconds elapsed = 2
			}, 2000);
			`;

		case "parse":
			return `const unixTimeZero = SHDate.parse("11 Dey 1348 00:00:00 GMT");
			const Release = SHDate.parse("05 Mor 1372 00:12:00 GMT");

			console.log(unixTimeZero);
			// Expected output: 0

			console.log(Release);
			// Expected output: 743728320000
			`;

		case "setDate":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');

			event.setDate(24);

			console.log(event.getDate());
			// Expected output: 24

			event.setDate(32);
			// Only 31 days in Mordad!

			console.log(event.getDate());
			// Expected output: 1
			`;

		case "setFullYear":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');

			event.setFullYear(1348);

			console.log(event.getFullYear());
			// Expected output: 1348

			event.setFullYear(0);

			console.log(event.getFullYear());
			// Expected output: 0
			`;

		case "setHours":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');
			event.setHours(20);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 20:20:30 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary

			event.setHours(20, 21, 22);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 20:21:22 GMT+0430 (Iran Daylight Time)"
			`;

		case "setMilliseconds":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');
			event.setMilliseconds(20);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 20:20:30 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary

			event.setMilliseconds(20);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 20:20:30 GMT+0430 (Iran Daylight Time)"`;

		case "setMinutes":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');
			event.setMinutes(20);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 04:20:30 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary

			event.setMinutes(20, 21, 22);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 04:20:21 GMT+0430 (Iran Daylight Time)"`;

		case "setMonth":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');

			event.setMonth(3);

			console.log(event.getMonth());
			// Expected output: 3

			console.log(event.toString());
			// Expected output: "Sat 05 Tir 1372 04:20:30 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary
			`;

		case "setSeconds":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');
			event.setSeconds(10);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 04:20:10 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary

			event.setSeconds(25, 21);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 04:20:25 GMT+0430 (Iran Daylight Time)"`;

		case "setTime":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');
			const future = new SHDate();
			future.setTime(event.getTime());

			console.log(future.toString());
			// Expected output: "Tue 05 Amo 1372 12:00:00 GMT+0430 (Iran Daylight Time)			"

			const fiveMinutesInMillis = 5 * 60 * 1000;
			future.setTime(future.getTime() + fiveMinutesInMillis);

			console.log(future.toString());
			// Expected output: "Tue 05 Amo 1372 12:05:00 GMT+0430 (Iran Daylight Time)			"
			// Note: your timezone may vary
			`;

		case "setUTCDate":
			return `const event = new SHDate('1372-Mordad-05 04:20:30 GMT-3:00');

			console.log(event.getUTCDate());
			// Expected output: 5

			event.setUTCDate(19);

			console.log(event.getUTCDate());
			// Expected output: 19
			`;

		case "setUTCFullYear":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT');

			console.log(date1.getUTCFullYear());
			// Expected output: 1372

			date1.setUTCFullYear(1420);

			console.log(date1.getUTCFullYear());
			// Expected output: 1420
			`;

		case "setUTCHours":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT');

			console.log(date1.getUTCHours());
			// Expected output: 3

			date1.setUTCHours(12);

			console.log(date1.getUTCHours());
			// Expected output: 12
			`;

		case "setUTCMilliseconds":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT');

			console.log(date1.getUTCMilliseconds());
			// Expected output: 0

			date1.setUTCMilliseconds(420);

			console.log(date1.getUTCMilliseconds());
			// Expected output: 420
			`;

		case "setUTCMinutes":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT');

			console.log(date1.getUTCMinutes());
			// Expected output: 20

			date1.setUTCMinutes(40);

			console.log(date1.getUTCMinutes());
			// Expected output: 40
			`;

		case "setUTCMonth":
			return `const event = new SHDate('1372-Mordad-05 04:20:30 GMT-3:00');

			console.log(event.toUTCString());
			// Expected output: "Tue, 05 Amo 1372 03:20:30 GMT"

			console.log(event.getUTCMonth());
			// Expected output: 4

			event.setUTCMonth(11);

			console.log(event.toUTCString());
			// Expected output: "Wed, 05 Esf 1371 03:20:30 GMT"
			`;

		case "setUTCSeconds":
			return `const date1 = new SHDate('1372-Mordad-05 04:20:30 GMT');
	
				console.log(date1.getUTCSeconds());
				// Expected output: 30
	
				date1.setUTCSeconds(40);
	
				console.log(date1.getUTCSeconds());
				// Expected output: 40
				`;

		case "static":
			return `console.log(SHDate.VERSION);
				// Expected output: "2.2.5"

				console.log(SHDate.DAYS_IN_MONTH);
				// Expected output: "[31,31,31,31,31,31,30,30,30,30,30,29]"

				console.log(SHDate.DAYS_IN_MONTH_LEAP);
				// Expected output: "[31,31,31,31,31,31,30,30,30,30,30,30]"

				console.log(SHDate.DAY_OF_YEAR);
				// Expected output: "[0,31,62,93,124,155,186,216,246,276,306,336]"

				console.log(SHDate.DAYS_IN_YEAR);
				// Expected output: "365"

				console.log(SHDate.DAYS_IN_YEAR_LEAP);
				// Expected output: "366"

				console.log(SHDate.WEEKS_IN_YEAR);
				// Expected output: "52"

				console.log(SHDate.WEEKS_IN_YEAR_LEAP);
				// Expected output: "53"
			`;

		case "timeCorrection":
			return `var shdate = new SHDate();
			var date = shdate.timeCorrection(30, 150, 120, 1200);

			console.log(date); // Array [8, 32, 1, 200, 1]

			// Static
			var date = SHDate.timeCorrection(1372, 15, 100);

			console.log(date); // Array [8, 32, 1, 200, 1]`;

		case "toDateString":
			return `const event = new SHDate(1372, 4, 5, 4, 20, 30);

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 04:20:30 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary

			console.log(event.toDateString());
			// Expected output: "Tue 05 Amo 1372"`;

		case "toISOString":
			return `const event = new SHDate("05 Mor 1372 04:20 UTC");
			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 07:50:00 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary

			console.log(event.toISOString());
			// Expected output: "1372-04-05T03:20:00.000Z"`;

		case "toJSON":
			return `const event = new SHDate('1372-Mordad-05 04:20:30 UTC');

			const jsonDate = event.toJSON();

			console.log(jsonDate);
			// Expected output: "1372-04-05T03:20:30.000Z"

			console.log(new SHDate(jsonDate).toUTCString());
			// Expected output: "Fri, 04 Tir 1372 19:30:00 GMT"`;

		case "toLocaleDateString":
			return `const event = new SHDate(SHDate.UTC(1372, 4, 5, 4, 20, 30));
			const options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			};

			console.log(event.toLocaleDateString("de-DE", options));
			// Expected output (varies according to local timezone): Montag, 25. September 2023

			console.log(event.toLocaleDateString("ar-EG", options));
			// Expected output (varies according to local timezone): الاثنين، ٢٥ سبتمبر ٢٠٢٣

			console.log(event.toLocaleDateString("fa-IR", options));
			// Expected output (varies according to local timezone): ۱۴۰۲ مهر ۳, دوشنبه

			console.log(event.toLocaleDateString(undefined, options));
			// Expected output (varies according to local timezone and default locale): Monday, September 25, 2023
			`;

		case "toLocaleString":
			return `const event = new SHDate(SHDate.UTC(1372, 4, 5, 4, 20, 30));

			// British English uses day-month-year order and 24-hour time without AM/PM
			console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));
			// Expected output: "25/09/2023, 15:57:08"

			// Korean uses year-month-day order and 12-hour time with AM/PM
			console.log(event.toLocaleString("ko-KR", { timeZone: "UTC" }));
			// Expected output: "2023. 9. 25. 오후 3:57:08"
			`;

		case "toLocaleTimeString":
			return `
			// Depending on timezone, your results will vary
			const event = new SHDate("1372-Mordad-05 04:20:30 GMT+00:00");

			console.log(event.toLocaleTimeString("en-US"));
			// Expected output: "7:50:30 AM"

			console.log(event.toLocaleTimeString("it-IT"));
			// Expected output: "07:50:30"

			console.log(event.toLocaleTimeString("ar-EG"));
			// Expected output: "٧:٥٠:٣٠ ص"
			`;

		case "toString":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');

			console.log(event.toString());
			// Expected output: "Tue 05 Amo 1372 04:20:30 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary
			`;

		case "toTimeString":
			return `const event = new SHDate('1372-Mordad-05 04:20:30');

			console.log(event.toTimeString());
			// Expected output: "04:20:30 GMT+0430 (Iran Daylight Time)"
			// Note: your timezone may vary
			`;

		case "toUTCString":
			return `const event = new SHDate('1372-Mordad-05 00:00:00 PDT');
	
			console.log(event.toUTCString());
			// Expected output: "Mon, 04 Amo 1372 16:00:00 GMT"
			`;

		case "toUTCTimeString":
			return `var shdate = new SHDate();
			console.log(shdate.toUTCString()); // "Fri, 29 Tir 1403 13:26:09 GMT"
			console.log(shdate.toUTCTimeString()); // 19:45:30 GMT
			`;

		case "UTC":
			return `const utcDate1 = new SHDate(SHDate.UTC(72, 4, 5, 4, 20, 30));
			const utcDate2 = new SHDate(SHDate.UTC(0, 0, 0, 0, 0, 0));

			console.log(utcDate1.toUTCString());
			// Expected output: "Mon, 03 Meh 1402 16:01:14 GMT"

			console.log(utcDate2.toUTCString());
			// Expected output: "Mon, 03 Meh 1402 16:01:14 GMT"
			`;

		case "valueOf":
			return `const date1 = new SHDate(SHDate.UTC(72, 4, 5, 4, 20, 30));

			console.log(date1.valueOf());
			// Expected output: 1695657738489

			const date2 = new SHDate("02 Feb 1996 03:04:05 GMT");

			console.log(date2.valueOf());
			// Expected output: 20424193445000
			`;

		case "weekCorrection":
			return `var shdate = new SHDate();
			var week = shdate.weekCorrection(1372, 53, 7);
			console.log(shdate.toString());
			console.log(week); // Array [1373, 2, 0]`;
		case "":
			return ``;
		case "":
			return ``;

		default:
			return "// Cannot show default code";
	}
};
