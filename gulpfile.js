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

const infoLong = [
	`/**
	* In the name of Allah, the Beneficent, the Merciful.
	* @package ${pkg.name} - ${pkg.description}
	* @author ${pkg.author}
	* @link http://git.akhi.ir/js/SHDateTime
	* @copyright ${pkg.suportDate}
	* @license ${pkg.license}
	* @version Release: ${pkg.version}
	*/`
].join("\n");
const infoShort = [
	`/** In the name of Allah. | ${pkg.name}@${pkg.version} | ${pkg.suportDate} | ${pkg.license} | http://git.akhi.ir/js/SHDateTime */`
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

function setVersion() {
	return gulp
		.src(["src/**/*.ts"])
		.pipe(
			replace(
				/@version Release: (0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/g,
				`@version Release: ${pkg.version}`
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
exports.setVersion = setVersion;
