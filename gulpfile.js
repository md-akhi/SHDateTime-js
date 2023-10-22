"use strict";
const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const del = require("del");
const banner = require("gulp-header");
const pkg = require("./package.json");
const { argv } = require("node:process");
const { exec } = require("node:child_process");

const linkDocBlockLong = `http://git.akhi.ir/js/SHDate | ${pkg.homepage}`;
const infoDocBlockLong = [
	`/**
	* In the name of Allah, the Beneficent, the Merciful.
	* @package ${pkg.name} - ${pkg.description}
	* @author ${pkg.author}
	* @link ${linkDocBlockLong}
	* @copyright ${pkg.copyright}
	* @license ${pkg.license} License
	* @version Release: ${pkg.version}
	*/
	`
].join("\n");

const infoDocBlockShort = [
	`/** In the name of Allah. | ${pkg.name}@${pkg.version} | ${pkg.copyright} | ${pkg.license} License | ${linkDocBlockLong} */`
].join("\n");

/**
 * combine all .ts files into one
 */
function MergeFilesBrowserTS() {
	return gulp
		.src(["./src/languages/**/*.ts", "./src/parser/**/*.ts", "src/*.ts"])
		.pipe(concat("shdate.ts"))
		.pipe(replace(/export default (function|class)/g, "$1"))
		.pipe(replace(/import [a-zA-Z_]* from [0-9a-zA-Z_/\.\"]*;/g, " "))
		.pipe(replace(/extends (Language)/g, "extends SHDate$1"))
		.pipe(replace(/class ([a-z]{2,3}_[A-Z]{2})/g, "class SHDateLanguage_$1"))
		.pipe(replace(/ ([a-z]{2,3}_[A-Z]{2})\./g, " SHDateLanguage_$1."))
		.pipe(replace(/ Language_([a-z]{2,3}_[A-Z]{2})/g, " SHDateLanguage_$1"))
		.pipe(replace(/\((Languages)\)/g, "(SHDate$1)"))
		.pipe(replace(/class (Language|Word)/g, "class SHDate$1"))
		.pipe(replace(/(Language\.|Word\.)/g, "SHDate$1"))
		.pipe(replace(/enum (Language)/g, "enum SHDate$1"))
		.pipe(replace(/ Languages.([a-z]{2,3}_[A-Z]{2})/g, " SHDateLanguages.$1"))
		.pipe(replace(/SH(Parser|Lexer|Token)/g, "SHDate$1"))
		.pipe(gulp.dest("src/browser"));
}

function setDocBlockDescription() {
	/**
	 * In the name of Allah, the Beneficent, the Merciful. | \* In the name of Allah, the Beneficent, the Merciful\./im;
	 */
	return gulp
		.src(["src/**/*.ts"])
		.pipe(
			replace(
				/\* @(package( [\w\/\-\,\{\}@]+)+)/g,
				`* @package ${pkg.name} - ${pkg.description}`
			)
		)
		.pipe(
			replace(
				/\* @(author( [\w\/\-\,\{\}@<>\.\(\):]+)+)/g,
				`* @author ${pkg.author}`
			)
		)
		.pipe(replace(/\* @(link( [\w:\/\.\|#-]+)+)/g, `* @link ${link}`))
		.pipe(
			replace(
				/\* @(copyright( [\w\d.\(\)\-\,]+)+)/g,
				`* @copyright ${pkg.copyright}`
			)
		)
		.pipe(
			replace(
				/\* @(license( [\w\d:\/.\(\)\-]+)+)/g,
				`* @license ${pkg.license} License`
			)
		)
		.pipe(
			replace(
				/\* @(version( [\w\d:\/\.\-]+)+)/g,
				`* @version Release: ${pkg.version}`
			)
		)
		.pipe(
			replace(
				/version: string = "([\w\d:\/\.\-]+)"/g,
				`version: string = "${pkg.version}"`
			)
		)
		.pipe(gulp.dest("src/"));
}

function moveDotDToTypes() {
	return gulp.src("dist/cjs/**/*.d.ts").pipe(gulp.dest("dist/types"));
}
function deletDotDFromCJSTS() {
	return del(["dist/cjs/**/*.d.ts"]);
	return exec("rm -rf dist/cjs/**/*.d.ts", function (err, stdout, stderr) {
		// console.log(stdout);
		// console.log(stderr);
		cb(err);
	});
}

function settingBrowserJS() {
	return gulp
		.src("dist/browser/shdate.js", { sourcemaps: true })
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(banner(infoDocBlockLong))
		.pipe(gulp.dest("dist/browser"))
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(banner(infoDocBlockShort))
		.pipe(gulp.dest("./dist/browser", { sourcemaps: "." }));
}

function deletMergeFilesBrowserTS() {
	return del(["src/browser", "dist/browser/*.d.ts"]);
	return exec(
		"rm -rf src/browser dist/browser/*.d.ts",
		function (err, stdout, stderr) {
			// console.log(stdout);
			// console.log(stderr);
			cb(err);
		}
	);
}
function moveDotDBrowserTSToTypes() {
	return gulp
		.src(["src/browser/*.ts", "dist/browser/*.d.ts"])
		.pipe(gulp.dest("dist/types"));
}

/**
 * Run default.
 */
exports.default = gulp.series(
	settingBrowserJS,
	moveDotDBrowserTSToTypes,
	deletMergeFilesBrowserTS
);
exports.deletMergeTS = gulp.series()
exports.MergeFilesBrowserTS = MergeFilesBrowserTS;
exports.moveDotDToTypes = moveDotDToTypes;
exports.deletDotDFromCJSTS = deletDotDFromCJSTS;
exports.setDocBlockDescription = setDocBlockDescription;
