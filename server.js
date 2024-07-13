var http = require("http");
var fs = require("fs");
var index = fs.readFileSync("test/browser/index.html");

http
	.createServer(function (req, res) {
		// will get you  '/' or 'index.html' or 'css/styles.css' ...
		// • you need to isolate extension
		// • have a small mimetype lookup array/object
		// • only there and then reading the file
		// •  delivering it after setting the right content type

		res.writeHead(200, { "Content-Type": "text/html" });

		console.dir(req.url);
		res.end(index);
	})
	.listen(3000);
