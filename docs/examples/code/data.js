const exData = function (ex) {
	switch (ex) {
		case "toPrimitive":
			return `
			// Depending on timezone, your results will vary
			const date = new SHDate('05 Mordad 1372 04:20');

			console.log(date[Symbol.toPrimitive]('string'));
			// Expected output: "Tue Mor 05 1372 04:20:00 GMT+0330 (//Tehran Standard Time)"

			console.log(date[Symbol.toPrimitive]('number'));
			// Expected output: 1576833480000
			`;

		case "getDate":
			return `
				const birthday = new SHDate('Mor 05, 1372 04:20:30');
				const date1 = birthday.getDate();

				console.log(date1);
				// Expected output: 05
				`;

		case "getDay":
			return `
			const birthday = new SHDate('Mordad 05, 1372 04:20:30');
			const day1 = birthday.getDay();
			// Sunday - Saturday : 0 - 6

			console.log(day1);
			// Expected output: 3
			`;

		case "getFullYear":
			return `const moonLanding = new SHDate('Mordad 05, 1372 04:20:30');

			console.log(moonLanding.getFullYear());
			// Expected output: 1372`;

		case "getHours":
			return `
			const birthday = new SHDate('Mordad 05, 1372 04:20');

			console.log(birthday.getHours());
			// Expected output: 04`;

		case "getMilliseconds":
			return `const moonLanding = new SHDate('Mordad 05, 1372 04:20:30.123');

			console.log(moonLanding.getMilliseconds());
			// Expected output: 123`;

		case "getMinutes":
			return `
			const birthday = new SHDate('Mordad 05, 1372 04:20');

			console.log(birthday.getMinutes());
			// Expected output: 20`;

		case "getMonth":
			return `const moonLanding = new SHDate('Mordad 05, 1372 04:20:30');

			console.log(moonLanding.getMonth()); // (Farvardin gives 0)
			// Expected output: 4`;

		case "getSeconds":
			return `
			const birthday = new SHDate('Mordad 05, 1372 04:20:30');

			console.log(birthday.getSeconds());
			// Expected output: 30`;

		case "getTime":
			return `const moonLanding = new SHDate('Mordad 05, 1372 20:17:40 GMT+00:00');

			// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
			console.log(moonLanding.getTime());
			// Expected output: -14182940000
			`;

		case "getTimezoneOffset":
			return `const date1 = new SHDate('August 19, 1975 23:15:30 GMT+07:00');
			const date2 = new SHDate('August 19, 1975 23:15:30 GMT-02:00');

			console.log(date1.getTimezoneOffset());
			// Expected output: your local timezone offset in minutes
			// (e.g., -120). NOT the timezone offset of the date object.

			console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
			// Expected output: true
			`;

		case "getUTCDate":
			return `const date1 = new SHDate('August 19, 1975 23:15:30 GMT+11:00');
			const date2 = new SHDate('August 19, 1975 23:15:30 GMT-11:00');

			console.log(date1.getUTCDate());
			// Expected output: 19

			console.log(date2.getUTCDate());
			// Expected output: 20
			`;

		case "getUTCDay":
			return `const date1 = new SHDate('August 19, 1975 23:15:30 GMT+11:00');
			const date2 = new SHDate('August 19, 1975 23:15:30 GMT-11:00');

			// Tuesday
			console.log(date1.getUTCDay());
			// Expected output: 2

			// Wednesday
			console.log(date2.getUTCDay());
			// Expected output: 3
			`;

		case "getUTCFullYear":
			return `const date1 = new SHDate('December 31, 1975, 23:15:30 GMT+11:00');
			const date2 = new SHDate('December 31, 1975, 23:15:30 GMT-11:00');

			console.log(date1.getUTCFullYear());
			// Expected output: 1975

			console.log(date2.getUTCFullYear());
			// Expected output: 1976
			`;

		case "getUTCHours":
			return `const date1 = new SHDate('December 31, 1975, 23:15:30 GMT+11:00');
			const date2 = new SHDate('December 31, 1975, 23:15:30 GMT-11:00');

			console.log(date1.getUTCHours());
			// Expected output: 12

			console.log(date2.getUTCHours());
			// Expected output: 10
			`;

		case "getUTCMilliseconds":
			return `const exampleDate = new SHDate('2018-01-02T03:04:05.678Z'); // 2 January 2018, 03:04:05.678 (UTC)

			console.log(exampleDate.getUTCMilliseconds());
			// Expected output: 678
			`;

		case "getUTCMinutes":
			return `const date1 = new SHDate('December 31, 1975, 23:15:30 GMT+11:00');

			console.log(date1.getUTCMinutes());
			// Expected output: 15
			`;

		case "getUTCMonth":
			return `const date1 = new SHDate('December 31, 1975, 23:15:30 GMT+11:00');
			const date2 = new SHDate('December 31, 1975, 23:15:30 GMT-11:00');

			// December
			console.log(date1.getUTCMonth());
			// Expected output: 11

			// January
			console.log(date2.getUTCMonth());
			// Expected output: 0`;

		case "getUTCSeconds":
			return `const date1 = new SHDate('December 31, 1975, 23:15:30 GMT+11:00');

			console.log(date1.getUTCSeconds());
			// Expected output: 30

			date1.setUTCSeconds(39);

			console.log(date1.getUTCSeconds());
			// Expected output: 39
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
			return `const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
			const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

			console.log(unixTimeZero);
			// Expected output: 0

			console.log(javaScriptRelease);
			// Expected output: 818035920000
			`;

		case "setDate":
			return `const event = new SHDate('August 19, 1975 23:15:30');

			event.setDate(24);

			console.log(event.getDate());
			// Expected output: 24

			event.setDate(32);
			// Only 31 days in August!

			console.log(event.getDate());
			// Expected output: 1
			`;

		case "setFullYear":
			return `const event = new SHDate('August 19, 1975 23:15:30');

			event.setFullYear(1969);

			console.log(event.getFullYear());
			// Expected output: 1969

			event.setFullYear(0);

			console.log(event.getFullYear());
			// Expected output: 0
			`;

		case "setHours":
			return `const event = new SHDate('August 19, 1975 23:15:30');
			event.setHours(20);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
			// Note: your timezone may vary

			event.setHours(20, 21, 22);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
			`;

		case "setMilliseconds":
			return `const event = new SHDate('August 19, 1975 23:15:30');
			event.setMilliseconds(20);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
			// Note: your timezone may vary

			event.setMilliseconds(20);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"`;

		case "setMinutes":
			return `const event = new SHDate('August 19, 1975 23:15:30');
			event.setMinutes(20);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
			// Note: your timezone may vary

			event.setMinutes(20, 21, 22);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"`;

		case "setMonth":
			return `const event = new SHDate('August 19, 1975 23:15:30');

			event.setMonth(3);

			console.log(event.getMonth());
			// Expected output: 3

			console.log(event);
			// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
			// Note: your timezone may vary
			`;

		case "setSeconds":
			return `const event = new SHDate('August 19, 1975 23:15:30');
			event.setSeconds(20);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
			// Note: your timezone may vary

			event.setSeconds(20, 21, 22);

			console.log(event);
			// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"`;

		case "setTime":
			return `const launchDate = new SHDate('July 1, 1999, 12:00:00');
			const futureDate = new SHDate();
			futureDate.setTime(launchDate.getTime());

			console.log(futureDate);
			// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

			const fiveMinutesInMillis = 5 * 60 * 1000;
			futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

			console.log(futureDate);
			// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
			// Note: your timezone may vary
			`;

		case "setUTCDate":
			return `const event = new SHDate('August 19, 1975 23:15:30 GMT-3:00');

			console.log(event.getUTCDate());
			// Expected output: 20

			event.setUTCDate(19);

			console.log(event.getUTCDate());
			// Expected output: 19
			`;

		case "setUTCFullYear":
			return `const date1 = new SHDate('2018-01-24T12:38:29.069Z');

			console.log(date1.getUTCFullYear());
			// Expected output: 69

			date1.setUTCFullYear(420);

			console.log(date1.getUTCFullYear());
			// Expected output: 420
			`;

		case "setUTCHours":
			return `const date1 = new SHDate('2018-01-24T12:38:29.069Z');

			console.log(date1.getUTCHours());
			// Expected output: 69

			date1.setUTCHours(420);

			console.log(date1.getUTCHours());
			// Expected output: 420
			`;

		case "setUTCMilliseconds":
			return `const date1 = new SHDate('2018-01-24T12:38:29.069Z');

			console.log(date1.getUTCMilliseconds());
			// Expected output: 69

			date1.setUTCMilliseconds(420);

			console.log(date1.getUTCMilliseconds());
			// Expected output: 420
			`;

		case "setUTCMinutes":
			return `const date1 = new SHDate('2018-01-24T12:38:29.069Z');

			console.log(date1.getUTCMinutes());
			// Expected output: 69

			date1.setUTCMinutes(420);

			console.log(date1.getUTCMinutes());
			// Expected output: 420
			`;

		case "setUTCMonth":
			return `const event = new SHDate('December 31, 1975 23:15:30 GMT-3:00');

			console.log(event.toUTCString());
			// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

			console.log(event.getUTCMonth());
			// Expected output: 0

			event.setUTCMonth(11);

			console.log(event.toUTCString());
			// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
			`;

		case "setUTCSeconds":
			return `const date1 = new SHDate('2018-01-24T12:38:29.069Z');

			console.log(date1.getUTCSeconds());
			// Expected output: 69

			date1.setUTCSeconds(420);

			console.log(date1.getUTCSeconds());
			// Expected output: 420
			`;

		case "toDateString":
			return `const event = new SHDate(1993, 6, 28, 14, 39, 7);

			console.log(event.toString());
			// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
			// Note: your timezone may vary

			console.log(event.toDateString());
			// Expected output: "Wed Jul 28 1993"`;

		case "toISOString":
			return `const event = new SHDate('05 October 2011 14:48 UTC');
			console.log(event.toString());
			// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
			// Note: your timezone may vary

			console.log(event.toISOString());
			// Expected output: "2011-10-05T14:48:00.000Z"`;

		case "toJSON":
			return `const event = new SHDate('August 19, 1975 23:15:30 UTC');

			const jsonDate = event.toJSON();

			console.log(jsonDate);
			// Expected output: "1975-08-19T23:15:30.000Z"

			console.log(new SHDate(jsonDate).toUTCString());
			// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"`;

		case "toLocaleDateString":
			return `const event = new SHDate(Date.UTC(2012, 11, 20, 3, 0, 0));
			const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

			console.log(event.toLocaleDateString('de-DE', options));
			// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

			console.log(event.toLocaleDateString('ar-EG', options));
			// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

			console.log(event.toLocaleDateString(undefined, options));
			// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012
			`;

		case "toLocaleString":
			return `const event = new SHDate(Date.UTC(2012, 11, 20, 3, 0, 0));

			// British English uses day-month-year order and 24-hour time without AM/PM
			console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
			// Expected output: "20/12/2012, 03:00:00"

			// Korean uses year-month-day order and 12-hour time with AM/PM
			console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
			// Expected output: "2012. 12. 20. 오전 3:00:00"
			`;

		case "toLocaleTimeString":
			return `// Depending on timezone, your results will vary
			const event = new SHDate('August 19, 1975 23:15:30 GMT+00:00');

			console.log(event.toLocaleTimeString('en-US'));
			// Expected output: "1:15:30 AM"

			console.log(event.toLocaleTimeString('it-IT'));
			// Expected output: "01:15:30"

			console.log(event.toLocaleTimeString('ar-EG'));
			// Expected output: "١٢:١٥:٣٠ ص"
			`;

		case "toString":
			return `const event = new SHDate('August 19, 1975 23:15:30');

			console.log(event.toString());
			// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
			// Note: your timezone may vary
			`;

		case "toTimeString":
			return `const event = new SHDate('August 19, 1975 23:15:30');

			console.log(event.toTimeString());
			// Expected output: "23:15:30 GMT+0200 (CEST)"
			// Note: your timezone may vary
			`;

		case "toUTCString":
			return `const event = new SHDate('14 Jun 2017 00:00:00 PDT');

			console.log(event.toUTCString());
			// Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"
			`;

		case "UTC":
			return `const utcDate1 = new SHDate(Date.UTC(96, 1, 2, 3, 4, 5));
			const utcDate2 = new SHDate(Date.UTC(0, 0, 0, 0, 0, 0));

			console.log(utcDate1.toUTCString());
			// Expected output: "Fri, 02 Feb 1996 03:04:05 GMT"

			console.log(utcDate2.toUTCString());
			// Expected output: "Sun, 31 Dec 1899 00:00:00 GMT"
			`;

		case "valueOf":
			return `const date1 = new SHDate(Date.UTC(96, 1, 2, 3, 4, 5));

			console.log(date1.valueOf());
			// Expected output: 823230245000

			const date2 = new SHDate('02 Feb 1996 03:04:05 GMT');

			console.log(date2.valueOf());
			// Expected output: 823230245000
			`;

		case "":
			return ``;
		case "":
			return ``;
		case "":
			return ``;

		default:
			return "// Cannot show default code";
	}
};
