import path from "path";
module.exports = {
	entry: "./src/SHDateTime.ts",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "SHDateTime.js",
		path: path.resolve(__dirname, "dist")
	}
};
