const exData = function (ex) {
	switch (ex) {
		case "toPrimitive":
			return `
			// Depending on timezone, your results will vary
			const date = new SHDate('05 Mordad 1372 14:48');

			console.log(date[Symbol.toPrimitive]('string'));
			// Expected output: "Tue Mor 05 1372 14:48:00 GMT+0330 (//Tehran Standard Time)"

			console.log(date[Symbol.toPrimitive]('number'));
			// Expected output: 1576833480000
			`;

		case "getDate":
			return `
				const birthday = new SHDate('Mor 05, 1372 23:15:30');
				const date1 = birthday.getDate();

				console.log(date1);
				// Expected output: 05
				`;

		case "getDay":
			return `
			const birthday = new SHDate('Mordad 05, 1372 23:15:30');
			const day1 = birthday.getDay();
			// Sunday - Saturday : 0 - 6

			console.log(day1);
			// Expected output: 3
			`;

		case "getFullYear":
			return `const moonLanding = new Date('July 20, 69 00:20:18');

			console.log(moonLanding.getFullYear());
			// Expected output: 1969`;

		case "getHours":
			return ``;

		case "getMilliseconds":
			return ``;
		case "getMinutes":
			return ``;
		case "getMonth":
			return ``;
		case "getSeconds":
			return ``;
		case "getTime":
			return ``;
		case "getTimezoneOffset":
			return ``;
		case "getUTCDate":
			return ``;
		case "getUTCDay":
			return ``;
		case "getUTCFullYear":
			return ``;
		case "getUTCHours":
			return ``;
		case "getUTCMilliseconds":
			return ``;
		case "getUTCMinutes":
			return ``;
		case "getUTCMonth":
			return ``;
		case "getUTCSeconds":
			return ``;
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
			return ``;
		case "setDate":
			return ``;
		case "setFullYear":
			return ``;
		case "setHours":
			return ``;
		case "setMilliseconds":
			return ``;
		case "setMinutes":
			return ``;
		case "setMonth":
			return ``;
		case "setSeconds":
			return ``;
		case "setTime":
			return ``;
		case "setUTCDate":
			return ``;
		case "setUTCFullYear":
			return ``;
		case "setUTCHours":
			return ``;
		case "setUTCMilliseconds":
			return ``;
		case "setUTCMinutes":
			return ``;
		case "setUTCMonth":
			return ``;
		case "setUTCSeconds":
			return ``;
		case "toDateString":
			return ``;
		case "toISOString":
			return ``;
		case "toJSON":
			return ``;
		case "toLocaleDateString":
			return ``;
		case "toLocaleString":
			return ``;
		case "toLocaleTimeString":
			return ``;
		case "toString":
			return ``;
		case "toTimeString":
			return ``;
		case "toUTCString":
			return ``;
		case "UTC":
			return ``;
		case "valueOf":
			return ``;
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
