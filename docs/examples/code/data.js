!(function () {
	return function exData(ex) {
		switch (ex) {
			case "now":
				return `// this example takes 2 seconds to run
				const start = Date.now();

				console.log("starting timer...");
				// expected output: starting timer...

				setTimeout(() => {
					const millis = Date.now() - start;

					console.log(\`seconds elapsed = \${Math.floor(millis / 1000)}\`);
					// expected output: seconds elapsed = 2
				}, 2000);`;
		}
	};
})()();
