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

const link = `http://git.akhi.ir/js/SHDate | ${pkg.homepage}`;
const infoLong = [
	`/**
	* In the name of Allah, the Beneficent, the Merciful.
	* @package ${pkg.name} - ${pkg.description}
	* @author ${pkg.author}
	* @link ${link}
	* @copyright ${pkg.copyright}
	* @license ${pkg.license} License
	* @version Release: ${pkg.version}
	*/
	`
].join("\n");
const infoShort = [
	`/** In the name of Allah. | ${pkg.name}@${pkg.version} | ${pkg.copyright} | ${pkg.license} License | ${link} */`
].join("\n");

/**
 * combine all .ts files into one
 */
function combineTS() {
	return (
		gulp
			.src(["src/**/*.ts"])
			.pipe(concat("shdatetime.ts"))
			.pipe(replace(/class ([a-z]{2,3}_[A-Z]{2})/g, "class SHDateLanguage_$1"))
			.pipe(replace(/export default (function|class)/g, "$1"))
			.pipe(replace(/import [a-zA-z_]* from [0-9a-zA-z_/\.\"]*;/g, " "))
			.pipe(replace(/ ([a-z]{2,3}_[A-Z]{2})\./g, " SHDateLanguage_$1."))
			.pipe(replace(/ Language_([a-z]{2,3}_[A-Z]{2})/g, " SHDateLanguage_$1"))
			.pipe(replace(/class (Language|Word)/g, "class SHDate$1"))
			.pipe(replace(/(Language\.|Word\.)/g, "SHDate$1"))
			//.pipe(replace(/class (Word)/g, "class SHDate$1"))
			//.pipe(replace(/(Word\.)/g, " SHDate$1"))
			.pipe(replace(/enum (Language)/g, "enum SHDate$1"))
			.pipe(replace(/ Languages.([a-z]{2,3}_[A-Z]{2})/g, " SHDateLanguages.$1"))
			.pipe(replace(/SH(Parser|Lexer|Token)/g, "SHDate$1"))
			//.pipe(replace(/SH(Lexer)/g, "SHDate$1"))
			//.pipe(replace(/SH(Token)/g, "SHDate$1"))
			.pipe(gulp.dest("src/browser"))
	);
}

function setDescription() {
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
		.pipe(gulp.dest("src/"));
}

function moveDTS() {
	return gulp.src("dist/cjs/**/*.d.ts").pipe(gulp.dest("dist/types"));
}
function delDTS() {
	return del(["dist/cjs/**/*.d.ts"]);
}

function browser() {
	return gulp
		.src("dist/browser/shdatetime.js", { sourcemaps: true })
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(banner(infoLong))
		.pipe(gulp.dest("dist/browser"))
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(banner(infoShort))
		.pipe(gulp.dest("./dist/browser", { sourcemaps: "." }));
}

function delTSBrowser() {
	return del(["src/browser", "dist/browser/*.d.ts"]);
}
function moveTSBrowser() {
	return gulp
		.src(["src/browser/*.ts", "dist/browser/*.d.ts"])
		.pipe(gulp.dest("dist/types"));
}

/**
 * Run default.
 */
exports.default = gulp.series(browser, moveTSBrowser, delTSBrowser);
exports.combineTS = combineTS;
exports.moveDTS = moveDTS;
exports.delDTS = delDTS;
exports.setDescription = setDescription;
